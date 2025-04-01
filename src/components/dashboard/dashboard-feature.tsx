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
    "2eSw6Z8At8TLLdSY1aTahM7KwtDMcGuCdXTBEJCndgbV4GMLu3NN13xBDeCq2WYGFBG2s26hsPLroVJmCaLysdqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9y53DzMDTGqTWArevowpWahVtzDtWfydXRV7uuNYBqDGZ26i3d4VnrQHwZ7tkgEjcYXqCEn27b69vV96j5VLpy",
  "key1": "2FwDYJfUeRzXogPVyipYMQbZyNdKWZjVAxjK2SEzmbvmdM6LqT7wtec7yhm5t9HdYz5TeqogtiixXjAekV2QGR1a",
  "key2": "4zTLaxcfVbcc8gF1mXgqeMrHuf8GCuU4tE6j9ypqjS2kiwGRxcc2TEX9KxeCJvEKGXpNmy2j6ZfiWg25sCjGJ53c",
  "key3": "2VuGASdViiseekjVF1VtUwUbV6YbeQueFzm5beG36MFcdgB3yLWXcNvLRvFWwbtPZZp4Kr1BVUHPAVU1gDHixnUH",
  "key4": "3VcaD3mgJzLGhb8nEzxWE8A6iCBuukr6vyRB5ALxDfx4N8ssUESi7Q3RTZjzxswfQeuQh9rQzfqPJxjqUfwLExoJ",
  "key5": "4xYxEmSKjXGDDNNqhBbw8C4uGWHx5m3MbzNhHqncTQEGrkrKtZRQzGbgRiGqo8Gojoa7RPY5K93WbR8CW9LWrRpZ",
  "key6": "3iPUTywbzgyMBzvJBYZpwya5wwqQ5gRn69cVpiec7Au6Lk37NQwi1tcFBGun5152xTjWc9NqXtnrgWQJSZkBAibJ",
  "key7": "5eS8xjR54zxX18NYtczPgFw4iAGnrEjFc4gd7uv6tC7FZpbcZnzoiGbCDtpVhKnc4jaNT1d2R5a8sPnViFVf2cym",
  "key8": "3DcPio65SBy9Dg4x3eZei2r8a2vGwp3pDWEtfZMC3pCCJHYfnyqseZ5TSqtBLtpBCDLfnYZu8H9fVkf8PbzdSg8o",
  "key9": "Fafsurai8QchnQH3eAYLdfHVh6gnwopyJ8y9eAq2jYzStGBcckh57d52MfzSsoC2fvWFRxBt4kVQfvHCz1JEf33",
  "key10": "2CrKwaJwEBLpwSqUP4WtJo9RhC7kskQUhNPaV6FZjvTr7Sw22jGkMjm6hWRMg6ww2VvYLg9e8bQyCvcRmHhXsqgB",
  "key11": "2oKmZskWeFt6htpXse6M7ji5phyzPKJs9zdBf2amHikBa2JTS5j52FhCsXxF3dsT64hx7FunFWq2VqLh7GJeMq4Z",
  "key12": "5e64X2jQao3oAqH4EB5eTQCnJCe2e1yVHmEojNmtAot512vnEVVhd7hWAHJ2gxo3sGkzhZxUGHoHJB7RBYq6gkH7",
  "key13": "4chbTioeEdHE2SxhtLeZpx1pe63HJkiFfSRt3HLWboAuxq8N2GSTAKUifrWY5LcQs326AZz6Z5VJct6QVMkMe47o",
  "key14": "2UJYT3UwY8AkJ6k6hfFnErhWQJmppHj3YDdATbqmMnRa5uos7oeq61yajAyv4J8TCyH4aVMpm4fKSDHpciWYWEcX",
  "key15": "2Hw4NWkMeoHZn7whcXSmnBU8qN5mEF8dScpfCV5ShUvZC8Wk1pk3tU5JZPzJ4UK9UoCsJaU87JVZc8u8qwiF4nfz",
  "key16": "4wKozgndK9VTBKRsqi7xMXzUNPmLXjisUyTg4EDJd8UXAWheZVuiVXMbMF1qyRJPednw35tVacKVoxuV48KEgDc3",
  "key17": "2zir3WV2uUVygmY4kB9Y2iKMVn2Wy1DaxKopRxaZaNZC7e7ttspnETitEePbzCrpfJfWUxWJ2uP85AcLmULYy5kE",
  "key18": "1PZnyUm9MCoX2zLXSqFSPCVN2t1ye9xk17S84ZeyK7aGeaT2htQvRaWbH9GEQSNdFQFUqEPz4bDApCaZjEhw38e",
  "key19": "3R7RYvrnP8Rk1bpQaGLFHAxWAStrWPmixhEAzVtqrBjTSdb6JYp4KXXzbt1xw6qL4yt7gwcAvxFkW9hAZXbrE84k",
  "key20": "33U6JdoL3nrjXd5qXWZakJpQ4VEG2GKzP7B2XpWPebK9t6JAiG7eZzcFf1xyJLX3MJ47sxyUAPa1n9F8u4BXS6gd",
  "key21": "4HuXxyx9hMxNgUFtFb1qmesGcPSqsDV5t3XtrjxoCabCQ4peGocUo811NhEkF4MBNJPjzy1mJSkHJvRt8sAsbXYD",
  "key22": "3htuzgjxvxqmPCKsJoUWV2udUyo9uagabwN4h7R4HBDv9BFzVSVF2qMAjhScBfwiffFvHmQxEqTATrbA9sR9zezU",
  "key23": "3JMRg35ozwyHjRi4pUMJUu5adEtYdFK62gmCyF9RF3u3SETVN9TTEmPUADUdWpBX4edZKnoLN3NxDdB19nvgTt8i",
  "key24": "2ecHf4okx8A1Xve5987odKrsC7RipUHTXXmqrwLUMNqRQ51J5DfTzRd5x71db8ffSJYvXCZgfdFJKUKGaWeEBXuM"
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
