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
    "3s4KxeTFvTqNASdxfjPv8iUDjDUREFJVp559r2B5uLXknpnbJHQa8jprdUBd8ikB6vkTHt1vUFZvKy9r9qynVPn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaBDqkYjnXi7xAv5xZx6mFAYRmuuotojVveNCq8bF4kjnwCLu9suK18TEDFWUqSm7YSj4ruTK6ApMgpyitp9MwA",
  "key1": "5xmMnUoDDnvcyJz5ZNXBH9dite3h1WGkv4dJMLVvowYTDu9VdwnkmxYi5WQQY93XbtUT2QtqAafSjvmNwJye9Z6G",
  "key2": "5R4Pva2crJGs7wXbonbfvVZJmnoCYBL81QKjRLhZE3Pj7u6GZAze1uffhuhtJRxDLUbzYkwK3KmLVC8giPGJtnPF",
  "key3": "5rLCQ2mEj54KVLnXW3kurnK8epwpsw9zraTupmhkGVqikXG3WZRchcMeUoYh6L9Emm9STmWzMD6hKW6FF3VRd7Dt",
  "key4": "56s5D8yxU82sy6wvrvJ7eL8Cvh8PAnDKVoPyaXi7K6sm5uARn2a836Vo7geyqxZ54Rswf3UQ6JugAnrwvmQZEuP2",
  "key5": "5DoJvjD1JNTMThosjTxdtTqJRi1F318bHYSzEUGcwAwDCez3ectBPHNn3uNAs1cdNxKHX7of67FwSqChfJTRFeQc",
  "key6": "4g5keX4cUzMMwb5HRv1SpFCPq3QFz2ZTaDQ1ZxDrhfxTmKSTE6bK5oz2VkEwC15N9cyoNFXy1eT5nPBXZYpbWLWX",
  "key7": "3CvQcoB3HJeE9BQd1nVZ7GCttc8KGt6HrF13WFFTNENQD1e4oxtLHb3CgCtR3CpLssXJVrpv3sYdfwcZvQCMMRzr",
  "key8": "3GghJeQGtrH2ecvaASwffVDM5NWRG7v3WCnbhZkdor3Sj8doMJwfTh8PCpuxiKFcAsh6nHKpL1nKn1Hphwuhv3Bq",
  "key9": "55DWw4XQQuXbmBqKr5YgD9Dc4Tsf8iFU3Ty9BNMYX3BULUrW2x2KauUH68E3iHXHPrGc5HcD1JXRz4iParX1GABa",
  "key10": "5nZF3wtyvjXVTAwko6ETfuRJhgGAs5tGSbdKRrzD3XwtxEWdgoeWTC6VyB3Jo7KwKjKbDnmpCb3TQHW5xUjfvp4A",
  "key11": "4YRMoqB5UsF5AJ3RgngY37bdi15Sg71WFEgbSj3vDW4HfMW4779NHM7PYQDUirkH7Lnga9LvWm5VKarXX4WRiG1v",
  "key12": "4yw6wj7kT4RTwycJ3si8oMh8yDEg6NMeevQXHCrnwx59kSjDFFnb4m4oDNVKfcxgojP85eBRSPqKpAvc71qDpRPb",
  "key13": "3YTkZETBnyVWhFr4ZVB675hZYm3BjR9FqqYVKEo6bdkYLcfBmjf6KJpRJW5X5TLsdAb49VFzJWejeUrh7NfGmNTW",
  "key14": "2fBWHUDnbMM4JS5Ryz5Pr1wwGpKLkXr1LnUAzG6m5J7tEZSGCA7akiBBuZY872e4rmYqCjrUuq2qwzFuVrkTpnB7",
  "key15": "3YC72MGc6bMafz7L9n6cwT9k5oV75E89Xf5iizfjqzh2BziDfzo4eiFPsR7qxKnojWK2HsKAV4MhmEUbhXgHsfq",
  "key16": "9gbGxau3jhXLQhbmGBkor6q6wEEFwjQwxLBFAMc3QbqsPVs52sPWn7YBbqDv75Cfjm89RZdwm7eyctGW9SQUipN",
  "key17": "4SxUxCPfDpGCj1z5F7UKU2xkBEDVxcQxXFpSDZEDMbjQfCNu4Hnwfxdu2i6eiG1gNB5bWzaftrtL6124v5mEfR5f",
  "key18": "wvkKMexhh3chqrtRw3CTDfxfTyDhZHeaEYwt1153174zjDvpWbzM6rFLqEBvLCCT5HKnzebnhJwYK4Lq6EYXxFE",
  "key19": "4FgtqpWYmSn9sGXkD9hZb2jag3ehBiFZw2mVGbw9HArNPkEKki4jKeANBwP71ig4HKRpfQQ7UHUBLghUJYtWqPgf",
  "key20": "63kF8xi5nQYpXjxYiD9TgQkCVGiS73Eub3yfcBh2Jz5VaCNW2tjVxZ3YVFPofySAWmwUjjNPGE6TpjrNsdupWvwZ",
  "key21": "iJi1pVQNFkkfAgyN529TEacTHvRspvUxqhkvFzfcycdWRL2DMmN9oURRSw3GzNveYj2d4qhrzL46tkgLKW8PMsz",
  "key22": "YbkYgAkDvmvzFZKdFMGxc66pfPm3qgSVmHfuxrXw5ifVGaUMgqQoxHBLxEKqRtaLvchifmryZdRcAxiBJNQziNB",
  "key23": "2ZeVdUQrcrUB5uCvTpyjxPzBMQrGREv63tww8ecT1Ru3fZUtZuoTcm7vFHKRL5srhQkh3zsJKmng9a81p9geAn3o",
  "key24": "dgWZaZviTxhzRhHoo8HbLHNkGGnJsXRWFwA6MNcUNgmHnCYP6KUuxTKJ7TCQEGW3CfrFHvMJtQboJFrnaL9T8kY",
  "key25": "5LDciQ5rjcuubGnH59g25FjVxiCxRhWduJWEVt5bAmED58SfKJgxqxdTNTjUBY6Zn8PkrPaBiWDgoYWT86Z5UL5Q",
  "key26": "EQbNfB67EAraF42A1Ra4wMGWjuWhXZ5PW2U8aqzY6tnaKSaoq5URNths1mts6GxJu8NQPGYgWiMHnt7iv8VhSRH",
  "key27": "hyuqA8dSt8rmKhwoubbLEcVavdbTfDepKLNEJm2yzKZNu6zek1kmCu1jHDNU8uvCY9wCyPQEvQ3EBR5RHRzDnmk",
  "key28": "Vjq1sz3pcDt1fu8idSCd5YQTWU1XkREyyoT5NFSdrQDf68es86SBBQCR5AAZxDMFudVhYfamhNAMsViCx6dZvPy",
  "key29": "2WZF36wu1qE6TLD59WCWnDUHqU9QJcYTWPhGkByaHaZ8w4vsFv91t7xaSpSsMbRoJgpZDNSHFsXfbVktWe67hMW5",
  "key30": "RiN7FpmqwATMxnyTXEZuoJp1gQZvFq9oJuF8qeVyHUfnLAdzgEbHgHeeAawnL32GMcUiZBuU4JPyv3jbGFEe8f7",
  "key31": "3GpHErLxNzVM9Mm3huxMzPbKttMDgrNQpvwMjYPPDap35YDeuN8KCLAFLG91nS8KQFiYnFGFgAvmyN92sHvA2KGW",
  "key32": "319SatHJdy2xinoxQdaSmhyu8dWqxnbwTTafsxtTx4au4jUrSNNgBFxJ8R8kuGfy4dN4qpJzfPd14aP4vDUC1VEP",
  "key33": "3ca7LJi9BF8SqXyrv1FGXpjwJkrehLcL51Pu4ZLGcoJFLzekdyCJbsAza966akfz6VHZnPWmVQam79oXUpWHxcc",
  "key34": "ZyZTSHrHQYkK11YrTe5pewTgnfhr46rvumUKvYRgTJRscegMDVVrSyHEp7zBHsf5w9byhkrnGRB6xPaS1fWJAeo",
  "key35": "4HmYDSnFnh7BkYF7AKpm5U4DvzG9SxyL39B7L3hDaZW92q4jfwpWRzLLzetLdXpGz2U1WbRGYofFBQPpxDbAdkrK",
  "key36": "4RRhj35qFemACsyYEETYX94KNcSzvP86P7y865b6CnevfUjZGsG4PZiYCP3SMZKd5qypT5bjanLLv6wCH2afpTpM",
  "key37": "5o22fAy5N837hTKGUq7DkrRR4Vpc53BrYiHdgGmH6GCKpUgodTXAoxJdgXEppAC2Whp4iYqDRtBcbMqMyccFJjFE",
  "key38": "3HjfWB4W2vJtL5YLfKJut6LXxkCWFM3kd2teVWkg8mfHYd8Mwrp9QncYoev4MDbk9MhbJu8FswicpVy5GEDLcnfP"
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
