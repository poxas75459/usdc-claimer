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
    "3dgNUX7L95DiXM1avQRkQkqkcVR1NJcYBdMM4sKGjz6xMwry2JiNuga2wHmgVS3dKtyY2sTY7hA2S2KrDoTnoL1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oNxR55oBrg8msFBtVDNN18cRG5yanjrBhgkvqPMswfEqrJ7hw9KXMft3wzLHqAWU8799SfsJaZxSDn1TUjrGUuM",
  "key1": "4GWL3yZBH71R2tjZq2guKCjixBQGvcZ57LU6U7SnijMCEWi6GJ873mgCSVbUbwpZLAPcJhPwXitnta4rapCLZ44p",
  "key2": "BK973SU9suWHQbPSZAU3mWc1H4Sd8DdroFfQBENfHWfZEmB4ArisB8QnTUHonEe3uS7RpPJDApZem4KcfDka64S",
  "key3": "3aFFmiqD1wCkbUdzBzu87xCkJ5mhBZDwfwiSkWqijndZAoLn4Agri8Y5ZvmVnQN32qxMncVWNPk68qAXkUrpAdwM",
  "key4": "3Y7SNzMHQgwtm3U9N3sUAYgb4wVM5QDs6MKKQ2YtQoNfTpcQjPYcdruDFRQrogaV3mBxAY8SRGDLLegFpGZEKNV",
  "key5": "4fvhJAHbkdcEuNqP32gZzyhkNtFbGxFN6obBWRi5w2JvCSXwjo2eEbMnCEGTATqnCE2ouKZWUVmfeB9j9f7po5NS",
  "key6": "4kRCqN6zhavmfJLUnADC2aqDPCNQUMPii1PpQbYXzoV8nN5QCSafDaa9K9Tn1mKqDR4ptG4VxKQJTFWY1Et1jGk6",
  "key7": "3AUCFB35nignXGeqPdUQVwaGdBSmY58jZNoPDmjYTSqpaWvy1GFjVBCbhGiKGb9EZGv5thHp6FKjvGmaCQsUt7Er",
  "key8": "qNKNkE7F57HML7v2JdmHxfcxsLNfK8hG2ZcqS6T1tLQjowdqcaQZLyeWQoTs6Kj5H3wyKhmbv4Je4kLY2jGuQXJ",
  "key9": "z9eGXQgyibphE8wfZUAtszHERwjwg8JBL9eeqMg71xunchAtw4b8EDVtBkvYUh2R8wMKPHtE8GHojMp3DmTyM3A",
  "key10": "NZQtnXVjHx6TW8Nq6jcNFSYjsdA9pChaEMmt1W7jjDkMXKLamCqv2uL5VubkeErMZxZTZDLrb9po9eHqjJ5TatE",
  "key11": "4dNa2H8Pnm6dqBaTEt25Jo4X7QnHc1bdV8MyZiS1dR2djzK1rY7wjMwXFY92KReV2Zw7WVJrZVVxXbNBYNFa1mNm",
  "key12": "3LPAh7vaQiXXZhXscEqZkwah1XBmmc7a5tLHMDKndvjMj7Qe2vHARs5qosLd7YaEQFib17EtwDCoQenV69g65UQU",
  "key13": "34rXQrHUSeF88EtxgSqAbDzwPcotLp2FW8HxYFHFNBxZo4wuEoSibhpFMXjR1nuLrom3ZizdoxWG1q22sJEjjs9N",
  "key14": "61WHjQSP9iAoEufkpKopYU6k45SdQ3C1uUCrMfwAi7sDp94rrR9F2DpGHWsFtaciwv94n388m6kpFsH3Rfw4jVQg",
  "key15": "2hV8cEE39yh7tJXrJTQAg5gbQodcNBDNcZE5fyxpo9mwY6HgXbpDkQWGABqHSXbvbTTqt2qbxxPXLnPypivze3EM",
  "key16": "3pgaaKTLkhKxWRzzWUbzjCc5kv8PikkwFSMpSTECZSeHxZTaBREVMVj7CpPdj6AbLJ1tvtbgGZaAvEa1KUV44THZ",
  "key17": "5G9nHPaHVxDPCk9nYYSMdRCxVW4PJtq2czvn3u31rDzffo2u32jH26wANYoZgYYZ1Rb2Rzfzh9xe4WQE8zN19Ep5",
  "key18": "5LSTXZjGngByuA5H9TdVf3J9pyQkCGGi6TYYm2Y66WTRN357bYahyuMzmfrzwcZQYGwTtybsJgeQyjWh7v6UYuXm",
  "key19": "5pqAEjmoanW4Rxg8DNNJrvkVx9iSd89EFFXpGCeoJZLsm5AFzbRepcNZ15DSEEDSUhRSfquKwBNHDEqczrm2VYcy",
  "key20": "CnAorUaqf7aUf9sjUMhH3PvJPgaEWAuNRTDAbbGcKVE2NMmqZp26jvmzHB8qS1tdGPUyHhfuzU6ncXPp43deD6Y",
  "key21": "3GoW8GCQwDwr8jFyuRKe3xSBNpsidPNxkA2PdpcGbMhDziRoAcgvDpHpYf3rQMPkm3wptsbwT8UAGHywTdDwP3dd",
  "key22": "39ERR2mN9uEAT3ZAaENyGafaErtpVk58VsBkAVRP45nqNPyQKsPubBCWkwnyPHgVd3dLhuFa5MdRgFYkmsNHyY8d",
  "key23": "5W8FtC5uAPjMREWfYc1brsRirBsMh8f6hDrbGzNuqhuoJ6FBUqwdNzyHwNhCjGvRPi5hY1tS9idtdQwFM8Qt47sQ",
  "key24": "5P72RCvLQQUotHg2FQSecTg5uStY4cXb6stSZX2xfm5KUC5PowDWfPaPyFQbefGpyGRvmXaShmukBWjQA9E82Pi2",
  "key25": "4cFDP7EXJ738Tzkw49c9QVT5NmkNE84ucvjaLE3cgqtuLDoGuDRPcZMMdnR4sJ9qhoVj48trqp8tkRtwEuDAJ4Zy",
  "key26": "4o1Dw5fNxJ1WeNK5UEErtQ6sgRaf1oLhoqro8VTCtK9zNRGMcfBoch47j6qWSwC4kJjMrBPW9kEmdqHzVGM9VEXG",
  "key27": "5sTxMUSXgc9Shz6FmxDoc2i622a5FgHawS1EonM5L6rmNoTqyFLwCtautZWUKuFfP7ztQycaKTG7JeyqQHVgudcf",
  "key28": "oVpiGE5HRUQQWTP5yNtaPCvx4aang8coskSJumoE1kPn9vJMy4Cp9tBJLs35FerqfemnQ3QayRsfPpCksesnBP3",
  "key29": "z3Rj8frhTE11XvxKMw6ddJzbfDyTEwL99us2pNt3HDkFkZuD5dfgbLCAQaGNcxy2bpyBwno9EkutLFvm9BNQMLG",
  "key30": "r1aA36wZ7tLATSDf4Fn8P8yj8R3f6oSKJu25w5QysVKdvY9QDNpwne48uwRfkj5KH5dVDhy8Y79RAXRmSfsZQdE",
  "key31": "3Cn7W38Ue3668jHnGguRMGbtYfL4axfVB5FKfUyRPriNYCwUspeX9QBgQ5CerbY5YEXsHb5XG2tM52C2M7pS9BnC",
  "key32": "TawR2mtpKe155yun6MLVfF2Jm24vJMMhTxn6TwAW3wXea7uAURHf2FiFz5BfKK89feJ5HdE7KRFKN4886zoXoxR",
  "key33": "3CrRNvh9vRdpNMAKJGtznKnWWBKPLKD6RHA5xdBK33TeGECFZoHQrnmhfcMgi5ceeLcLNXv5g1J82yC5ZLKwRUKR",
  "key34": "4Ygns8jnBThNz8joNsAkj4GfpFe7AEJHhFY8RG4YG7nrZ4CnZmCtz3qyfj4GF1N3XGFj8HpuNdbbbpX7YHJptD5T"
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
