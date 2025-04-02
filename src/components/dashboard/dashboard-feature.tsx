/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Mbpfwpf9bxAUMySGGfyF6jhPyXb661gT7rVRxJpL6RhDD7eDw5hXMrTfidWEZ7ceGUeMhHpzUgoAv3JbCzw8oiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udvUR9dX6GQu2CNUmvnZRuHQNRrmRwkGxfzqbN6ZAmX1WxzUHdYpFAXGArCmyvxD9Z9HJo8rZJz66WaWXLeZvsp",
  "key1": "cb53uypNSa2wjyDYKeg11UKBTngUFuT1uubSaHHJppi2oJsb7aXasoB6ro3tpKxegwgZdug8SKtmzJQfDwd7rZw",
  "key2": "5vLKr4cqo3r19i9G6eK2aRpFQkjp1k94pGzHgoHBhsgEz4vry1ACrAF115GaXM3nJnpMLMwBg3j8GQjJY2DFgEz6",
  "key3": "35Bo3NgRwantXxdF5S428kGGgyx3CJfYbptv6zp7qUAqLKsUBqeccv29BnuWULVZoKCmdQ8rc3dmRXY99Gx1vqvD",
  "key4": "2kghnEHMTTCX7pEoBcq7A3kjxLrzubeVJTgEiNTggyKmv9ueoNSempcEQU83TbEtGqSyVS2FszCYGU7Xx5FgMu8M",
  "key5": "3UqJgeHLeZzXWYbrzHYjrsS2rKzbL9w8eqprjB8ZJXjsUujfNHAMiicVcgpsS2w1M4SZXso9at9GDSVV3VcPjLyo",
  "key6": "3JToz4Kgm3qL9m3pdt4LqhE5ncBBCduuWZZfdHF8ETCjc1ACQCSBijWCDU6RbAPXM4KnXarwR9JgJrEL8BHDF61i",
  "key7": "3fgwWpfqhe4VBBmHdQFyFeuCQ8BUe3JkVf6zZ4EfUp5ouwo1n5XtbfeQq6tdk4JaytV8aVbtSCf9WUQCTqHqvzJH",
  "key8": "4sWfzsXdhrKSorNBpQSnrUTFrjTURC9fYVNxeMgxfGxnjvc9s2PVvDBMjTx3wnMuXrjkNHCqsjfF56KqnJZ3WjWq",
  "key9": "3g2EqLnNFWqYKP44LHApovdYzRgQm7LhQydLHFvo3gRNkdyCAhKgqAaSAzjohtDw7umtbJShAcAaX5SQ7w2Jrddc",
  "key10": "2oV5Mmwi5awkHm9vtnm3LZNCGBz7krhUUxoXh1Qi35bh1PYCuB8vpf8AeNHCfJG3tyBTDgZTjhoc1UmC9CrNgxKX",
  "key11": "2HZfARToBBcEQeJjcENFRHmvoqkcDBZttG8nJbRoYTWizvSrnoH39x3MCccbWbuYzsSeThN9PYH3Z4jF7V8wxtt7",
  "key12": "rXKnqtU9B1K1CsdfJrZ8zKD9wP59A4rpohzKFdNS1ciTzzin1yxztKQZQvQw51eDf3TRuT7N3pbMtFX1AkmJjRL",
  "key13": "2V6xRruDnN8sze1PQP6UWrCPKQcBdefTiF1narxypui9AdG9a6BnEFeMn4bXxRCrH95RgqE73QPuEo272FyAtRF",
  "key14": "24CoDdnKshcDtFGukTCt6TupuvuBCcZyixTmvcfpNiuuWq4hy8HFAQUoo3gHpgBsVkyp6Qjp42tkXNdMkVnpXuLe",
  "key15": "cnz7wzzUqVg4LUeotaRQS7sJ9XYd9LpVakrTgbKnJeggDxLkwpdQQqPR3cC2Jw1UveyPuJG3M1cWBinoPoxXFC8",
  "key16": "4W84S3kc6Cy6wbRq6FBUukpuQ71WkLNySZJsxXzZmBLyrZMZfH6iPXvKFyKh7vCQUapNaB3ByqqMsMUZCuHFg5o6",
  "key17": "2foysbGHqA7EgNb5d5PmKvSaVCv7QTgsRG2rUi5Crnzkqsr1ye71HXa3Y1XJrKbwStLBqiCGie6CgzxcRpTGC8sX",
  "key18": "2nXb8Yj8XL9q51osRjPKTSZLbxQfmKBXTpa1Gz4JBXXAk1cjNpJ3bEwuS2rrpAvbDooYCzXgAQQFyYov8R8j9sqS",
  "key19": "3x6uDHPdz2U4Suwrrtb3mLtLb5N3mcFj9J4oDS8Tx8dYVQBjV7WE63aptoE4jUnV8tKrGKSVe2wZif48yLimbpKY",
  "key20": "3cpUV9eYkj4HjXHdbAS2SveL9H6rjdwuTTveGUbY2PqPppc7hWMeTSLqsNwY6YSVMmMUJWCsvdusfrJPM9hX4Bh3",
  "key21": "3cYFUK6J2H22AWBsM5rSvEw1GMbjvdMno19MnVSmvkNaLnmZc9YG1DaHeWL3X1VStNBkW1BzzaoiWXHUnrZiyRxJ",
  "key22": "2xnzA48eBQ23aDXXUdxXZZnhZVLXfuWdCmdAMBoC9MabUcCZfoJxcjTPvSXffWReqGWJuciezcgq2dwkxxdh1xKw",
  "key23": "33GMcAToWe6eiAXDMy43hCKkDZEHsAZKP86MVPvQTNJQSanKcp4N89EAMSNCfB2NPcT7UHETndkNW59njFjeqrPA",
  "key24": "2CrwrNJd41VeAQxRZW1495bsx5ooLbPbAwtG5rnUCxy4KUWA28nrZn2ZS7QEmp6PKG2wwayG1oW7gmvqaxZYKGk",
  "key25": "21wGiaH2AxS8zj8J6BtQ7WCBnkeMJQ2c9jnXQpdaS9L5Yj2s5L3bJExq4oCtw5cxB4VEqDaZzmkEAGvTf2hWoxEU",
  "key26": "4H8nwru381D3iJY9K2EB8G13PXX3DcFMQRtAA76udtiJCnTr9AFgvzCzBsvSpc6pzTHskryGHx1oF763t5HmnDWj",
  "key27": "3sNfzEMVBCihU9PCz1qYwhPXiynzxB2LUCu2EvAiRQ8MKWZs1JWQeCYrYq73mfkugtjJpPEa1UD2jb6bNSwEFW9g",
  "key28": "2PUGqsjMQDtS2qBEJVdRqNGRU1toY7mHTU9ciu2LLKiaKZchqvy8Z5VvBw1nMJuh4B8RCoj2PMJUK3JCCWog3CAM"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
