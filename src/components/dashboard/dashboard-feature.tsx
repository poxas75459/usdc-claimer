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
    "53TQi5pqMKE7Qym6nARZo7jSuQU11S9jFx8MGJZwaEBJx5WBfECzZYrEaVS5mY1rseQRWze6yRiiBuapEpTugNwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2Vcy9G28Xyz9GQP34HD2PzjACNVhPoxYFBCJUqC6Edz7nB1AE9hr15t1K9YC9QMA7DqaYQvCwvy2neYw4B7sd5",
  "key1": "v1vAJLceyH2RFPP7vk3PUwa7KJaWvT1vPMwetA7R33aUBeSF7ptgEcDn4BpmfY6Ut2MBivm2orw1JEqJxZ4iC5y",
  "key2": "4zWQB2J4mnBB5xEpYvaQjvWkXA6mzn8hGM6qHtJPMhprw1Vn8yeJdEynXE3yqNjagwJHjyqwK5qVdoDzai6ApMGT",
  "key3": "4XD36wrgT5SLXyxiftXuRzBMbf5sGCrzP9tQBwEEazXYh1Vi8K9cnrABnFcquQcZiCKXet1jHXJjy6S5AadXjXb",
  "key4": "5ZNRxXdvvRg6MQJhPgKUYnt16yrK45e4qMHsxRrdhSfhUUkAGxdHUpcNXXkNtzv3vjTRoXkAftiShDQAUiSYSFF9",
  "key5": "3aR66f2J9kCPM86LNB663C6ureaY7fvqfEQBGRLkoZWrdnAhqY4eEYnqxyUSeuyubmG4ChoCexMcR6zeFt7g3y58",
  "key6": "5Zr3jRo3NbcPNZpzrzH8sXw1Az9mNVy7ys8j3caKRUaD1o5Z5zpYg4DxkfqWYV7qSNVc5HowvFME2ctL6vdPVpUY",
  "key7": "22zKvDzm2m4pan1GKbXo9ecQFkfw97NPQfx4LoUdcPh8AhNgShCNQwzKGQ3mLdC3UoxJ9B2hFjvGQffrQJd8Rzpj",
  "key8": "3yBXvZGjqn7UwW9gLfGob8s1qmaKXFXAXyYZWtFWZ7ejAe3xfU8xVfYgx8wMRWUYUticC1PgTvRrDr4DVMdt9CHL",
  "key9": "25yB6wf1DNNZ7w4rn7h8DeMpjzjiKWrSry2hvrbNBEnqYeCJuXzvtctEXaoeWaqMd3ebiQMoM2K9i1XimFvLPSAp",
  "key10": "5PJ6TgAoKhk8cEw55zySHYwX1UbtZn6ksm8ERp3F6my6cdEU72MFfUfM8dDaaUPsCsusxRwRpqnNVXwzfjBkxKGP",
  "key11": "4MpTtoTU1DDHo8ggD4AN2MyH8AxNZyad7F7aUqWYNEjzLdip5Pj5NbRnWj6kbjgy4KXzVZ2WHoEmep777fPckbNf",
  "key12": "3fC6MMw7s462u7ertWUtUnGM7vucKLMUUSG6GBHcG6JXoJzFy2tZY3CePvMcma5jHxkr7LzmWqDYwGC5rsH3Wodn",
  "key13": "2C4XVz1dnz1D192m1amaYFMG5voj7Ck2q7KeGnP7rnN3aLc3feuPMfk9BrKo2mWqBLtGFx954tamAFAA3Ufwdjqx",
  "key14": "3wmZ4KCRLhnSUE1VCvi248jrawE8MHSxhdqd1tJbW4o8UyUMbAUuczC6shf5CLv343k6mAgn5SQvVLTEKstHPPx9",
  "key15": "41i1jDmkJ831F3zfVywKv7Mp1TTX5BsUwWYzsPu432GGGFf7yse2Pg3gstvJzMEZN4XejUceqWVcdkyGxiKpSu1M",
  "key16": "5txJfffrYi6P8dyVp2sJLsUzYezHwgBg8vRENbvdnLP6EEMaus9MC2d8dbV37GYk9SNL27UQjXCiTC5MinmtheQw",
  "key17": "4nnMV42EjJjzSBZ4K9w5pANj9BScZvb8RGj7RDugtbAzjjo1dADos8o61hr7XfmQ24FTF281FTSTpzw6GHcyunZd",
  "key18": "4pXZjQq8eBEgrqt6Yv8dvAv4pqrotbc573Usv7B3wzzCbi7Codoux1wMUTfmp1hdFRdCoeNs4MHTEK5ZgRD6GBdm",
  "key19": "3XviUVAG9CRtm1dP3yuiNfTFN2LTJwx41j6SNuCL11bnnyS6c5dcybdqLczBDjfvQWqoy41kKJzt1XoXBRmALbsU",
  "key20": "53w55F5F4ZoVLhXNqyjPRBa3Km94NryScVMK6N6YdNs97uSgAKzt6t1Me1jNLJ67ZifRrkkPvyRE4SNa7QXy1ojj",
  "key21": "47zRzpXmtk8d7tsKzArNQokrEf4UXMqyWSmBsGC4AqXkMvozq9e9ofTqug4QBgpMERGR5duRhqNm3hFhTNfj61j1",
  "key22": "5Zik71CcCoDADEKVgQPEzphKpFMJDcGGLX8NBnjbqfnwP4hW7YPoySrZ7ZMB6YY9zgkVrnuiT9KMk22VwezbuDwa",
  "key23": "2W8bFBzzsyCrvjPQDBR4Kr2ZL7k6ZGf1N9wVyHUym81oC9qjbbYdd554iACvgnV5Z8bwWrdkGRnHT1NcahfZMhLx",
  "key24": "2Y5p22G5kT9qETMVFHCckZr2mRxXy1MQZb3hUZqqx3DsBuTAEEAQZe4AggHa8ZX679dSHQ7Abfqrr8TyasTxAbgg",
  "key25": "3vWHV8RBbbc3QLMrB1X1mjEKdV4NkvHDDU5ooU2pLtEgyv5ceQZjHH8QhAfdpMZSYq3ynRU78bL45PRDXsdboH65",
  "key26": "3zh6vbaJKeFr7aHh7PavqssiHgkXCAx4AimNby5CLLMNMZ3BUbsgudrrbcbtu2itwTXk99GgheMVhSR1wXMUUWHY",
  "key27": "5WcitAbeMo1QGxM7VcCbquvTZTFHvNy9Sgfq8K7nJVDXunBhX9JsUXfLLFDmSbZBN8YkjBJ5osRzk7SpDhcsehAf",
  "key28": "4icXNjkDw2XNdqezk56GgXJtkeruSyxSjM3VrrQ7kWBS5T9kgkzPNCskzLxhkgNkbPPNDP1jAW9yP4RTxWd4Uic9",
  "key29": "5njqCXL3qTAgbx8qJtQ5UkgqaTEpynUbuQuw5ZCXH86hCvTL1MsFHWqD7rTfHwEJkcSJxFnvR1X2vRHMWnK9jdUx",
  "key30": "dSViYCFJDc8zi5E17M4HnQzqCtttH8pyfzvFCD8r3cfXxumQiZmNZDDJY923W6vtmJw75Yk2Kv2STRT13sPPv8h",
  "key31": "39AT3GZyiykrdV5TZx1y47xuxQynE9Aiaste4PXuLEWwg29DmtSVDpgAcMzGbm6ec1UFdqZu7RrWeGTiFsiK7GWD",
  "key32": "3NHuVia7so8ufJaiHWFh9hG9pVMgRdoJLFBqaQg4Sv9SXYsrBZSsZHQd2Uaj7MyhgnwtYMJGJ5T2j3waG9fuT7ZN",
  "key33": "2KAF4PSF5sG1iqmZC62JVQXqbSitwNgbH3Aco1PJhd9frkExgjgHDZo2qNe7qEjt6VLSRSvwA9LPca6bqJfjQ6Fy",
  "key34": "51H1YKrEAE7Dd6wCnSoj893nFzREhxcv9rvfqLsfB1XXXDJaBGZ9oDJWNvbGSh4WwxuMvjCACjtPPC1p6ERqmkeE",
  "key35": "4Js1cD1teDijG3ggvbs3a2d3WSc6H3hWwjf1SLxUS3izckPhN2SWmPKTk1pVebWNNPRQzgWpGH1Fz4AQWY9VTdHo",
  "key36": "3bNp9MApkg7HS4bssCpvTuA9vP8b53oAmXhfs5oe3aidDodxcbKezf1Yn3GoxKrCegp4soGHs7AUMLkvscUQP3y1",
  "key37": "2THiDQ8Bt5EUYDzj5dcytcJB4rENSHfcAPtpHPPrtjLaxEc8at2VubXJcwHeHqGnvPLJgRKS3NGGSavEc6h54JTj",
  "key38": "3Qs3tgaz9zCQ1mcG6zzobEDwwCqna5esAut7RkUmo3EmGkeVjPPxtcGFgTfswvVGnHZn4dHMxEaRUZDAhAhCF5d2",
  "key39": "62UwM8YcZgdQw4E311cj2ttzFH4zomYFTZgLQ3JxqccS23MQpeauZ3Avxyky9hYq7AaRL6Wb5RsUcT1bqZCV7RbC",
  "key40": "37mhSBFzRyS8QVsaDDf9WLXDLQFuczqy5jHiaF2bcnCrN6C9vRPm7WtqzUnfmQfeNjXSbhW4Qe2vQLuhxaHrEkui",
  "key41": "3ehLeQSiZ9yMnbNNr7HtMQtgX8zYwQCfrmxNyDPFFGD3VVTmFnSCENuTHnoDDGfG9GiRoUi2udb3kHpuk9dvt9Fy",
  "key42": "QRErWNTPQh6to6hqPhKW6KQj2pFV9DKvHFoEKptNBAnvBuz9KjANUt8ADVauDgcRzM1ooovea9BBZtwDnyyTcQy"
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
