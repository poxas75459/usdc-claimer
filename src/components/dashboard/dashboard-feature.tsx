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
    "4czsRF8j6mXAH1EJV12LMc6qY7WVjQR8U2vtNbsprMAkuy8RcjAwZdKMv8zempNoyxC9K6Bz2EXiGKs73ppDJoGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEuaaUi8xjb3Xnt4vF96BDnLdCgnC4TVyEheK2vJMLU4GZDy8r2XjKiqbi4jQYvZSgC66Q2TEeoYEujEiDfPuyo",
  "key1": "4nkrSADsF3Mc6CFrEFAkPqbSfEZyqB4ygpLVTdVZL3M6cyAWL4nroyCVya39naRMqVDvgCddECm6VAtbHsEcVw8G",
  "key2": "4RcuWMZG1qio8kkYheAJbohDuMLa4FgYBGvAXKUfMd2TpzY1pW2A7DN3W4C8zzSUUoYgpbEpUYoQXZbAg1NdyQWt",
  "key3": "4C7GFPhopp7j19EAhqj51TQvhkCDCCSwGYV1nNQiYoGFaKv8fttzpMpsU6W5Gnc4iZhjzh9VSDM4L8pm7YWSFdFF",
  "key4": "58kcynZK2nqdkPRnh97zKvHCZqSdJoNg4rJLUFaipYuAUfkxhb7RuXyX2wJzz9mAaadurRfGTBL135SJLNKgT41t",
  "key5": "5gS2oVCMnyUnfYv9WrxapNnsei4tmkYvJqXSe83Wdz5rp9F7Ff5zb8HRKZzGp7EhD83NtseHJYJTsXHP72X1H3Z",
  "key6": "4vbrXQrHWB2deCiDk6udJdkmBty8Lr99HDFSKepZLBok5KUBm41jPWQ7H7Cn4zWJmuvcrcxkGPXKja3WQupZLin6",
  "key7": "4Fc5QrCbo8MSXMnhUB1Wq9XRAjoRYLFWNNKypHULxt5nJgTfstZSRq9yE8XWfLJcCXWUCtbCGVAE33RtPVyYEmvJ",
  "key8": "4jsUTqJtQkg7CXNMwA45UouHaFR2MHgoY521ZH1uS3w7dbvT6DVP1yTrjsbaRG3nXgh9sR6vQ52ZBFK3LJq8GAzG",
  "key9": "DYNZBg3Y9Psaa1zM2MoE9hWUnQe1FnUtn666HNLJyg6MZdYJ2EqeT3Fn6o3oynBbexiCGcteMSgACCGthErq7dQ",
  "key10": "4gahdyVB8TGkTCSBkFkZ1cAHzY6qeYXaUMWG5oMwnF2es1rwvgA4tZeCxLWjtkhubZGZdNjzEBTXtxU9wzMneqkE",
  "key11": "5MQFGbjVKtTXZkhiBt5KrRycqc4ynmd95C3iKErRtNN1RXkPKSLFUn5p8qvAZyw2Q5dvjN3jq1n55hBBeeYuuWwM",
  "key12": "3RP6YCNJ1dPGqoqQFKkwgywq5uQ4boTzufrfsLqnkp1xgcNayVFyEbKLm2N8MuZcTYM6MBs9XtsAu5Z4JivTqAyV",
  "key13": "4d9CdjnrNnbLEdptQebbzdq526p61kdGsmPEu46gSmq8brog31skwzHzzp5NXSdhx3edbWjtuSU1fF96Lzus9B3k",
  "key14": "3JJugYMYtshd58GD3f7F3qgdstnv1JpFXaXvTwxD2gjB23kVn8eojJ1s1Mxx19wf8dMj8b6B9gUinPvyGUCQpCRV",
  "key15": "35b8xxcduEuCNAtCdJHi74HjauhLYixkFQ4s2h5nGb4RsGSTV9uomZVWag2LwS6AkFrYyPtgJpedjEHZnBo7Au39",
  "key16": "5zuqYYFPShbUa37eYzZ7FFHcpbWrodKXS4EWGgnNBxXX5PbvjxSTYbgB4v1bqr6bPiGMJnKMuSo44gZr2RznjCZa",
  "key17": "4TrJ6gjZ73pAZSzZX5oXb1xwmKSikR3AFKLQmRYiM77Ki51tWindHZa5RjkVPhJXuXNqqbPRp53HcYbdUocHXVLj",
  "key18": "dthF68ghwstGMxhFzmYr1Y5LG2EKo5SFCugxu5DDV4PodkxYpeyYPPegp7jTty53mNhJM8BEMTXz4hmYmj5Ag1w",
  "key19": "2Pm2aFo87xShhboomtwiSGzissqLewxXycqDa391Xcf8zTqPovYLW7SF8PEH5TyVXYeFAEq1WnJEbrLpVgw9DtmR",
  "key20": "5Fy3Ayd1D7ygktT2MJ2cDrDKQiVjEVjPC5dUSjQztXRvudqkWDQK24QPBtC8QVSNHA4VLYn5M17uq7zG4LaBhW4m",
  "key21": "2FmFvLSrzgwsgtvjRNqsuwNo8f1iyGPgLYVA7cHroTmfrKEeKtNvs1TXawfZwWNP2bbiYtuZuFxss79KTco7nJ6t",
  "key22": "5ks2QwTsQdBM66vFK4wjH1avzmeiBHPCfCWDohJZPMvbEAeisNf2AshfCjvvEfGRW8jRX1M5cCoiGmYRV8sb8Y63",
  "key23": "4b3arBFQkSmZoinAfDLSbshZsPmDEXPAoj3YPKyAhr6R3FRx7rsdFkGr1KRXF5yb5REyycdQot6LQf5rqqgum72B",
  "key24": "66KPzGELdGPY9hMtVnWhapCwV5WKGeUVcDU2GHCkxirjFfwXSThY48mwakds2YBVEmZnqzWYsVgpLQM7bYQVYRxA",
  "key25": "5vfmYUu1Xh2AdgdV7866rLyHt62K2AdLNnbKcbXB9fHo25xCYS7uYyHqNvsiQmJCNUCAGEP6HDG85yNVSGKhqvvJ",
  "key26": "55R2jBteHCNmntDWXKnhAcf9gEopyTnE2qEFxBTkjXUVoittB8HpRSYr9goby2wfnrTfGjRkp1iCqb8N3wLKCRhD",
  "key27": "569uMG11oVpEH5gRzpmP8kPrb6dvJWk9NRXwTscpn7eHamnrHCbCpTUwtapCabEtaqbdtmQURM1aKNQX9DpPUGpm",
  "key28": "4S4SodAs9RzhDD91rjuLGPivwhyZrLHFUzWdJ8X7riqwpHHCtuBEyMeGbrgJSXZJKwX8qrydWFC6Qiezm1a7R5Gy",
  "key29": "4cZjcovArsZhui6DrnthBjc8zVtRZ2dHKh7KKj1SExrgoNvyZCPfNN4b3fjz4wSv3ZkbRGCzYtrsYoUfUoqgfrkZ",
  "key30": "4ANu1TiXA3fMyfsPjMukPJekY1bdasmqNfLd3jurS6GEbaGukEZka774LbzqpCzcBhZ2UHYZqn7uJKgfN7h9atr3",
  "key31": "ToRwgkZg9vzFq2cKSkdWoZXMiUog2tVxRetZyj6CCgfuGFZ33jL836LVEwAcYRvfvkEZMNq7HS2gQfnMLsQTgvV",
  "key32": "3HivwMz2SqhSvYWWiCwP1fnG5M1z9DueYbqoKo66HFzkW5kJ13b9pxwH8vdveMZAXPttXz7zpF2CvHVSXqVAM9zS",
  "key33": "32NZhjbqunrjc78GqbtiETUKd9jrYXJQYaqt7UcpR6VTT5ZHoKJAKNNGXEcgPxZzo5bsvLHXU3HmnSnh3LEU7nxu",
  "key34": "5wjz47cj5qtbNzAmEJDszowqgs4FH2bDbq9enyB53rF3U8yuUY8iyEZe6zZpNAzewbrbk8FR21HDEadKRy8mjohb",
  "key35": "kyibgiuQ5Acd3ha7iqNB4HJ7AK4MDdvbdd1uW2HxhHv14jbfD7NH2vwjaQ95kMV3uNjVmr37wA4s4kfRnF9xzRc",
  "key36": "4dowmzztyvfM9EGN69Ln4LyHy1GuY1FUDB7CrdkRFp6QFgxxTMJQDz4r25VxLBC2PcedPi7RQcZkTLESpH2d6Czv",
  "key37": "2kcwsBt8EQC54XbPj7irC2Ni4ybTz5jmh4xejUMtcnHXXc5ZogK2bDQDrGLET4xa9zptvSK4SX8G5ifqMWaPsmiw",
  "key38": "3DeCztbAMz3L7eUrv8PDF5hezJWGAehvjJJFzNZNwk9AfBJmuyJ5jpWy5HnjVj4wFSvVSk5TkXCYA8T5JXvSTX2g",
  "key39": "3t5Ek3oZ4o48HVvoUf9ZbdsuPsdFYg2GpqbL5goLVmmyxmY4wfi6RaS67v5hTicfyuqfSLPq7pJugDMXzAfopPwU",
  "key40": "mHNVg9zfaEy7MG6PvfASCeyYqcfSoXy4Djm57Rjzb4wxLjRy6a1rcJ1iGSbcd2mSDJvZC16V89qdjZBANSCZxXj",
  "key41": "2yUyNi9sa8xZb4niwXLYFdgPsGTCryVSwDGzoftq1wbF1KFExGMUbDNhKczoMg7PXuGYP2AsAV94nZCRNZpd9dQZ",
  "key42": "67jKEuwY2urdA8wp1gk8zc9JF6wgwpN8HdCHw5oh3iryCUockvGdJkutvaNBDuYsyg96vEtgFdyEQx35L8ZZTbjA",
  "key43": "yeBdxnTRJENQTV9eXN3G3Z81VJdgiRzFRZ2PECmfjsgXPYS813CYfRUqP8kiYc7AbvNkBG7yP8z76pWuAm6fXvD",
  "key44": "5WHB4UAF6VDxpPatYFQ4nMPRZS4XheFQMQQYEmmPcgNKbjSnrLXTY4rAENmWawaR1HGYkbcicEUeR25RWDkuNPKG",
  "key45": "2PvLGkdToGpgyEBKAY3AZCsCKyw7bSAKnE4n3uDeDqmeWgLfWDZfkcpRCNDFBnTR586Ud8DMstHqiHxT7brSvtVm"
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
