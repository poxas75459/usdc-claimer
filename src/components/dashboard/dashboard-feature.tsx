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
    "529bthDY53fzJwamJvsEdej3yb9vDTVFVU998qcuHnEByQEbqDKTzErJjr3kAUqHR8zX7sAAsYb4degXnPrL45gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WLRuWjs9KaVaJoeMUVCuK89utjWvL2baRDUUafkbrz7UTAzvkuf2xzVoNM5ZcZVbENkYVN88EHgeFAfCiqLjFf",
  "key1": "4Zc7Shotye8oLpegVEexNMnY1A1vs5DbGJcCzHEhzB31abjKAu4FjDm8BWhEhNGq6K44t4YpZBN31g5xaS6A7V2t",
  "key2": "2ngsdzF9YWynYELx16eQddX8LrTKdLTEtH3DsJXp1gbkF1nQDDSwmSQ48hPfq7hJgMc4D2xvPePQUiEZV2o3uEiP",
  "key3": "2Ck9QtxjHzsM5Vsc3UHT8aYF5GgzXTZR4eUmD8D3nCZ4HnUoC7oRRGas2f8QqtkWWGGpisVjXZksa3pRPs2q6hLu",
  "key4": "5M6nKMAW75ckaLvzfC441uknfuyodwozAZ3tAsHVE9vMwPCokmp1ks3yCRyfMcKfdKkZDFuX8BSo85XkTVbzhcZ1",
  "key5": "5kysKajJ98HEc36Hku8GpnwmnSTZrkGZrF2kPmWrkjrqTYkyn9mFTP4G3iaNsLgnxrjMqHj6HMTpWnFqpyUEnjY2",
  "key6": "2ByoxvXdEmV37qZvx2L47kGVfszfexAJFHvFuV9nEmnfH9C9Vg6g2x2asQdW7otzyuvbNji86jKTo1LMGdjs1FpR",
  "key7": "dY9QQVaraBApFeF9PPJbqq3TbR8S3bV48DfQAiHC8awjBqXED9hwibVVNMwLREMBVQM5Fr2NsRvRZ4ZyGmk1zH7",
  "key8": "51VbV3Bu23Wm79qb1LrJbX5zFCAPizSVEkYs1P69rZFbLW5H9kqtYiM5WjD6TLPPY4v5i2kBGF3XeqY4VMauMvED",
  "key9": "2wAytEPxYqxNbLoX1HEX5zv924S1GYdixgG4QLVjYysyERrEiMCPmLRnvYD7cMbZVnCQF7a6qJPsiKwoNCqwWEDT",
  "key10": "3yBoh89yUxsTPh141LqN8ecupp4qZsKuLpqGzzw5ULKHkDmy5qXS6KJfdWFDDYGaCw2S5LkrUwT3zkqXqXc2MKVD",
  "key11": "3NFt1ctzunfy94QBUWhcdY9CcEgzQ4Fy5NUpdN5MYM24tC2CZoALi4aJ9C5qhJQdJZfNpfd37kfHBoKfesaTsuYe",
  "key12": "2QhNdszpgN2CVYptaEaNoFsSmz8BMAoZZerJE64QbJR3gqNQhVty779Z4uMcFeq1xzj5JVEoTFeBWGv7rSpMyS3J",
  "key13": "2ZSeR85rshzaBSiNCwdiHo4yvLZHyWKaz7QeXaUizC6v4UzHFGkcACWtFC2N8H2JUvvMhTZq9y9YL2KLX4NBVyj7",
  "key14": "2wQMcN4FZ2XSzmdmVptYDpj62BgCRUHmteKihj99p7YGeKeeDPqHe7Vx2Mr81wATdzJ5KzDRrabKeY2ZJGmGeRqj",
  "key15": "2QRBGq5q3Ts9YgdZfeUhL5wUznjT5pAjgJnPqn7vJQeXVmtgTKRkdBFp7oFoSML4939Du1cSkP8KoLXK7cxuQNo3",
  "key16": "5tz5p8tSA6PKTPVgEreQUnQzCZWfLCb9vcagBwRWX19WMUUu1tGiySVUNBN6cS47w5KdcVsbAfhZFvEbVDLLxzFW",
  "key17": "26YWBQoe5eLjKzXrtw8GH27GGkoK7btGzoSJNCUTpRebVueFUB4c87tKyWvk2YsaPBvVmYHoAhAcDU9FnCy7wZfa",
  "key18": "BWcC2vbRtLi8RwqezACvE5QaEgHxsVy4ZSfMX4SphVPMWFXZ7pxD5T8sDybUdTj72asyandetUSrdHTP1oM2s9q",
  "key19": "2SvwRPhQ1e4t2u1vuB7Rzs9zBMyES3Fm3FkJtHo8pN1vvAgjz3gS3AJaPRnkXPHe9yPMvbQJR7BuipGncatHjzGF",
  "key20": "t97MqDVfzMqWe3P6cvWmSnAFzg1T92G69touKG3bbGTxCzee1eG6bpBaCnjTkcFxPuGWk4zutJZmP5tMyZsksQk",
  "key21": "4ueZ9oQxtbzMQixJ6QYGUbbqdt8RmodXVEZpJuh9rcDqBYrN9kAtahuFtmi5WRG6ibotDfixv7fXrGVSgKJ9sVBr",
  "key22": "56wgtRP4Lr3yBzjDMcwZWVwPW6icHzqg5PqJXkK9WtUi585idUdpqB84NoajjFxDV8pbspZwrfBCbbcugAboBr4s",
  "key23": "2tecWUhxq736zgG1Ut5GeqL8MgB86wRFs6qfhR15THUJFm3zYHhVrbRTeukiYMMbpr5hEZtGBhJjTULuUyWFyvNN",
  "key24": "N3gcYt8i5P2Ms5XMVBDKasvYtUcVfXxWr9bikN1UYwwjvTG8uLf8ddQpqbMsWW4coXPW7hoYDrArsCTsgXs5YsH",
  "key25": "5yjQzgoTog9yUQ4jQRLm5qvkMNU9J7rBRKaXsWqvTuL5pg1GRhxF2NYTrVKBs3FvXfzpL7PtzpX8yPmjmyr9UNPq",
  "key26": "4CfGMejCmtokoL6VEg1MN6x5NkzNAR5RV3chKHpDKvP7fArJdX5bW7cQtucgo27UxS6DryR8RNHnEU7aXQXiVTda"
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
