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
    "5M6j1Ahv2g7n6duBghKgACmFtwRmvUyprGgEuTvn8j4oDUYMfg3bNpvxnZTn1BWxGrdJR9qoyKeGMPsK9Cs691UV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qy69HySMp6UXbeKDEMnpWokMhfCzh8KvJBaC2i1hpD8SkrWQkPuV47pr9J8TKBjgUiR5ATTCqAqMCBs9FeWtyED",
  "key1": "4Nk8ZsMKvmBK5oxtE2fepbsgw2hEkyWofx9PmxWYxV6gh2gVHtPRtgo1E5YrxtMQ8fu3LDW8hUezv6AGfgBJKMu3",
  "key2": "4wnKyhSR9QaKqDhmQHeCHwWyVjbW8KeR2Mod2EYFMGu5f6ckNbshcokTs5y522NWxU84WpKpUd4tth9rouqCELKr",
  "key3": "2eUQLk4nyBprxCTeZ3178nw2BzmHF1nRcC5ihnjQKeZ2upLAsfWRKfskq9mzZjih1HzC4mY4qbDNCZnwogWdMbTq",
  "key4": "4MENoceHLNiZPhmm9Sbt16yR252ZAJHJDoJusgMuRaAmmMi8ehVYbzoyyvNNT5avcxewu5ggx8cHkU7eR7EsNddc",
  "key5": "bPMPePy1eitaiYCioUZ1ahwZLVRVYLt4fHMgqbaoTgc1VWd4KadAGpYrd2Piu1tNwoxT1k7jjVn5Rg7mqG5Nx5Z",
  "key6": "3RYegKyEURXwmuZHAuyxVrqcKRvGtM1xgCcrfYzvK35ETdRNfxpq4uw5wPoZmEAY6CPn2ZoPKFqAUcCEDab9o47n",
  "key7": "32ojL5jqBJ859MoMre7vZTaU3UVWJ47SWqA5jePnidXTGmZShZtMVfY4NLUman7uyKpDrxc5CcUmkB2zKdqR9r74",
  "key8": "5fK4V1BxVe8YVcCWnFFoZ255fFWUb2Y6xgxjRoj4AkgHkvDoDb9s5hZDhjjiArPNijsG31ERDkSEp5xTzzjDQGDb",
  "key9": "4H4kFsnwRmReyuSUZvNaxmsUYkDDAYCk6KPoJQpupSYC9WbwL5Pwcr87FJ75srRmhm5HoSYVyy5PaQbTVtf3v3L4",
  "key10": "5jf8LjgJCuK9yw9iPtvQosDavAD9c4mZNJHbhNN1Pqu7eQte43dRu9QJRwerC5Xc8FjBDu1p3PHfj8EdcfbpYpQh",
  "key11": "5Q7Vt2M5bkVCvUFG4wEEiKy2MpXs8f8zu4PXkBGx9obzZgP2wC9iCGzhC8ZQ1ffjj6PQnBZtSz6Wm2F1EqkSwc2d",
  "key12": "5YiqMVSRDj6cM344f8gieX79Jp42KDvCzaMRDTfm78UhBrwCv5KTvghH1nutwt4JvBjAc5uMmw6ue2NTXA2ZrJvW",
  "key13": "2Jm2fQrEuvngmDYiua52nJmMM2i9YDUQDJ4yhENYBY2cm6R132m8hXVzWVVzyxKZELEkYnwu5dyGu5hdV5oSNyH3",
  "key14": "gq6AiN9bosYHMAxGgLQQoenoPMuiqioXvwS1aE76AACmLgu6GSdKYNWsuoMCf8Gj4SX3XtG4YAKzyRV71pna91C",
  "key15": "27sz73bD4jMDcgxnZPRdQkVaW3xx2JLvSWEx37NtSrbipsfQdUMfMHgrAdNiSu9KTswFCKyr8cfdk9K7FWHQaerC",
  "key16": "43cqTGWVr4MQErqBWg58CTJfZhjFhf7iTuBv929AUXsw3F1kkzG4ny9cwb9NfXojjTk8fNnAJzuiCZGP9m5ZmnAN",
  "key17": "5sb9x6gVcCxyjUWYBcFY4dc32tU2dpt1CikGyQ1Tn1hopTc2iPtp8VhZBnM3DSFn3uRwcJ7odJ9PNjvgVhpGV9oP",
  "key18": "3bEsPiWq7H8LATH1dF9ka6AR2MN4w4ykwmL46ycVEGKtWovDnhuPkuBmBv3tyePdDGzNCDuNkoWSAPTm36gyTuW1",
  "key19": "EbS9itg9TvuKkLho3x5eU44QVwh2fHDaFwe2FTTEx9zoCFfWsLbChEQABzTTAP6cQVJuZkGRTyDWRk4PqCNpMLB",
  "key20": "4nkcxhZAimaHW8QHy2vAQK22GHkphqR2Dey3GUsi1yurmh1sobeEmDD2SVETFr5HwV7L5mR7Q3wtffwEsPrFwnnh",
  "key21": "2PgwV27wLUNEvnmyih3MGFAue2DtvrQ38NX2tDYu4mo8HhfZGr5ggAEy3aDpAYCStbftWU7BG2vFabDUhu37Uo77",
  "key22": "32gKgJoCW4GW7VtmLZQkToLLJ3xs4inzFckqAbspHpN6MSnJLy4cKjzBqhQ5nDX5WePJ5n64LNMgbuVU7Muh5TUJ",
  "key23": "2swoVPYC9mEyXdBP4Gb8TcyerRZTDs55NoC9g9auQJWDKP8nVNmJoXRgsvn1f38RT3ZG2Ytn7pVtb9X9yAysHh7a",
  "key24": "37mrNqxPsjXBQ4VCqck9R8F1YuVEbdhrhqabDggacLZmTKopn8Boq4ZKGE5bMzzbj6fwMZpSxyQngaYncjrgQNDz",
  "key25": "2yFZ5EdTLh3uUyVf2wGt9ybMu95avUpmxevC84mRWe7dNCxcqoS1mnDYcGh9sAccDiNQYdpzNnunn8bF6S61jbdc",
  "key26": "3zv8sr5a1yRWxHLDCkrY7xAM1XxzGd9U9HQsowiBNcBqzJLmMJPtGt82i6pdrG3xjjmKDaWHv91wHHhxgkjHYVnZ",
  "key27": "47FVdeu9kvq3LbDBEoXBm8NCgDV4qqdfTQaKiXCiA6f5aq8hYdZohKL27twuZ1uAvp3jZn3HRptnejKT8acKJ2Dj",
  "key28": "3GsvA1Qk1oxtEek8sQoyg6o2CaHhFkrHY7yeAPqw4dvzEXEW1dv31Lx229TwVnyVsLyUK3EtivvxGLGxoENsJFsP",
  "key29": "fLFQ3nCUp166QPUER3J8k4SjVZRPkGcBw3D4q2o3zhefrNeeS41c7wfPyA9VAvT3M2PT2yLx7QbXoav7RsL1gQx",
  "key30": "45nMgC3goeg5b1m91wJS2xaTVFaBKsby8auCZZtBv8F6rVwjKLCEyRUhFozMjFX7Ro53xgYiyVAkQDMFCNALiLnA",
  "key31": "5N8fMpkzs1YMQ4nsx9EFim362Dxm6mw2TimmnvGyzWLCDbrgG77u5veLYhb6p8x6EoxGDdP9gHxPWPa8prCgc7RP",
  "key32": "UMpUhuF7Nu8cf72mvqBjJ1b27yJh34s8QddATxsNF3xNAo9WKccN2LvcZYmQ4FJkGFPzQCxnn5j5CWJrvr1YNZL",
  "key33": "45Fm4jMyR1qkfEvnwU5KtWMhhjE7AMuCycJsfy6GxcqEVZFTCWadsA3NjLfdZ1aJKe7e8brurGrB5fKD19dqaZwa",
  "key34": "4Ti3c9UjhJHMmyhfq2wPJFNuzqL7XJy31vuuSQk36AMnMvgU8rmRNGHpmddGBgB1tudLGMBht8hWx3oBRF1d3X7d",
  "key35": "4QuDPFd8BBGaAq6fckixLxUmnMg39PfKNmCioa6uaxFnRfrwDw3Xp9YC5aiLXimu3LEfv4pL1Vm4idNZop4w34r3",
  "key36": "4fLVj3vqN25jqwvgAM94dajeAvW7EZKJyH9VfJ9Laq34KGocbLhtArTk4Ri9hn7beS5XWfhdoHke5FFzmJ6zKGRT",
  "key37": "3GsHmtgvh8VNoSrk7ybN6zg1UbqegPPGJ8FXTxXuHnqMtv58bwwyEPt28w8fRpxNe7E7oH4fQzdgb3CG8gQtarT3",
  "key38": "5zmVSnpKqW8GQYmNso9d2vHeJyKG1ehRnHR1uEddk2dzFWURFfT9gY9ZQNZqGuVcc1k9JLBiGzN2hfyw4L4MXVKY",
  "key39": "5nbUcQVXBYRYAyuH4amFAjP2dP5BBkSRuHNWef1fnDrgwc81qJVVAi7P4HGSqswyJR3zcSfX6qfZ7LVReFL2x1fW",
  "key40": "5TvG23TTxc5JUCrmMBiHHSSagz6aPvhSYjgGNyBgBgbnjjHcmADsRFstVjZ6hf9saPmtvdEtbuscC2yjTdUbuHB3",
  "key41": "5eSD7rUfyANcPqhVSJWZGMgm4V94xCDYYgoxNyor5rkHdDjgb48CdJSdcL9YZALhpSMCkJVL679mMv9cwYf4gc9h",
  "key42": "3FMPfWVusCi3sJy47zgXtkK2LDwSd5x5SQVez8S4qRuzfjsFNUZeJt2uCyhNtEnLipKKmpRLgU1EuXbCQW2r1H6U",
  "key43": "a9SYxsHJf2KwsFm3qy2WYLo5ZN5yUVHcPWyRo82kZP42DkfY9J6GVLoNDtRdn32HXNFTXBfPgHUCZazkZWWmCpa"
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
