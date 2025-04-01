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
    "5J9fxr7UDZC5Fn9pWa6tfRDFnAhcGFdXdHbA3GgFKKgw33wVqzesMK3VG2vzookwNLiN52hD45mSmuCYp2nmjJSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3koFzszVrjCvSWGgvy41broCcixrYUdnPQ3SqJzhk5LtXupZzBNTDvNZP7UgyZyPojZckjoUQeHexRUiasL1YEsh",
  "key1": "4PtJ2nFVsvaTP8LciUjLCWEE8AsuyjoP9NZszYG7riaEutXGNXSoLXXZSQKSmdL3vRGHx21DMiK6PcWBLFsJ1XC7",
  "key2": "3kR3U7YbvuEQT93yZn2tawSSD26ktyfpe9TcT3KFqNdRn9Z5nNJWpdUqi7cU8XAjRP8Cq7CfgWJjans9dJM5JxzM",
  "key3": "2QVhWNqsu9JncsuY8A9UT4MpDgeWmHeqygxMFJCX6UyEvJ2wrbEE6HYaZyfg3fUcG5WVCJa7NW3RDM77AdVmkNsq",
  "key4": "4uoGHhF72GyVZTMjx4tec5H6qjcYz2CNRQc2oktF9yVwP8utgcukJWXirBbpsN28LVS9vm9hzEajY9mREyKsqqry",
  "key5": "3RCkuvnmGb8mejN4YbES3kJxYAPuthR8r2MorZhyTB7yvdNKzSzZw1XntUKaCinnwD6b64Ab1RcQ3E2E2ix9hJTq",
  "key6": "2Rf4aF4qg6KwADYTsJPGXBtzdBHuF4BB3oxKWCqH8JPDp1E69kuJzqCxeZkZSpRwirNSwHR745jniuKWtJof8Mjk",
  "key7": "39m9cYNWXEw8F1TFbKMoau2NPk1dPPRq8RzSAMMzWa3LSfkRD73xwmnrrhyp2uVQ7yUJjfqmeCwfu18HuwVTYZoj",
  "key8": "2N6LEdiuH8byY6ndjGsoRUGaqq3Ck755vh2zMRHrz6Q3dwJAkupabD6RyitUdYhrwPNeJYvBnxxydYj1QL5xm4aR",
  "key9": "4ZR9CANLajFuRdxt5xG8NnQRJKgsXVT5roagXrkeNmfer8dTUMX9TSPCwSdW7kykG2kfdn8NPYkLQP2BHtd365LL",
  "key10": "3tMocd6K1kW9z6vy5wdn398Xm9n8oeLFfwxtYeNCK9vSpsQy4reQiACqwLVfNCVQTZ2x3tECwsD7JMuRiBrt7h7P",
  "key11": "4SvzenWQ6hbjbMBTYi8k8jcE39vGZRrVtPXTAPzm9nQ9JxBMqe9PbzADtqfjvVr1KkPoCgQGSVEbTXvrbYBwtCXK",
  "key12": "3n5EpvyaLb9NXpG5dmmPWrfAKr53R3nY2yhS5iFacS7VwMkLM9nCHfz47Q5X2eixnL91MVAMmnS9iU3gaSU53zZX",
  "key13": "4VRamDryPnuQ8Vvah45ondwEZCa8MmcfSSKj6SVs4xNqWYzAiCVFkeJkeZkJSwFKnV1bAq37t9jZgr6pNyJGVj9D",
  "key14": "5NroCtgRyxjR2gbY9JJq4RHMdpaL3o1igkgyzdzGxcb7cy45vAUytpZavkLyvz1s7V1Q6chRrTrfRB3tG58JbEU1",
  "key15": "4GRUbdnrV9wkG3ErtaDKjFfPUyJ98DiXAppR3ukrdgSZ4Hp3wAGyarbpxm3AsCoCt998LAPvGWywHHHinauvWaaf",
  "key16": "51VFcJHYsBf8Sn8MPD8q4zMFTqqMb6GqjcDoM5JhSPtNrk5zMUT7qJJGgWwv7ivv7idD7yan4fZKHCYaDDp7feoB",
  "key17": "5FicYBBDareeJTiEpRcHS2xNtJ3JyDX4XVnH1DrkVmuhzvyDt8bSGB3CimY7Y172YKGo89Peak1EKYv6uSbmzQXv",
  "key18": "22zyDJ4BmJcMt523mWuMTr2y6uSadwd5TekepJCVuPWkriHwiaJnP8nk4K9sc5c8BfdWv8gCvuYxAM5d8c7jmQfr",
  "key19": "2kNouvqjnyQJLQwB5SubcJezoQcjckCXHcUQko9k72VREgXsx1kPSR7YQeLCXkNTfwCYhY9Q3NwXpZWkVXC6vGs1",
  "key20": "HthcvbQa4kUFjzsyBqayFyE6NEaR5ToKTdFx1re7Lqv9anRFQXbMCtCUuHvCL8c49R3uepTvjSem2mgKjWB2yg1",
  "key21": "SyhojvHNRW55tQPSvQ5Z7QdUpGknQp4RdtsXaBVkd1vkZB68r3747djrXfuqBLUAneqxtKq18R1PpCTWwc2yWNm",
  "key22": "2EjxVdCr9CuA5nPgiYeFprMZ1X3HSde86ZLTeUWXX5CV93h6138KqUHyDXpRLxZKkxBrqLCHdpyPXVQLPP12RQzt",
  "key23": "5V96xssY13LQEqrSeNb4jpbHSrk9yoEe8vbxDGMtKTZzJcnFFair31EdDXXaidoPDWVd8JbtozG3GmH6nXFKaX65",
  "key24": "8wqLV8xFGdYcpawDKzEdN5E87XsdYCtFRbqoomkrV8x4T5Vk7zoFYgEMZrKfE6Br4Ef1wvVpydb7V1wPSwmt5h2",
  "key25": "5keqdEM1CFZ71JVuLRbyAGt55cnS2efA1N8vGW7YZGG9ALeHWC5z7DapRX7TYbr4BfYpP9ypdQWjZntCjPuvREBX",
  "key26": "485xMS3i42MfvBAiUfimm8FXAqrUWsAwHYZsCw7hqEUu83PvZEKLVWpurn3EVwUxWaMhPnTrDguYVrmCe5w8GmZW",
  "key27": "5gKLAYMyagLoJhWBN4b1U7RpxESwQ6ydhNnrh36aMt8bosGJ7uQSLmvx2aspcYEMjyRCxB42tjdvYcEDWXSKSSSJ",
  "key28": "56VyMPCGc2WN4SPQoP5nsghmfwsrFVJkbLRLNRNzTYMgm3P4L9QA9mSgW84NT7e7AnKF6yMyw58HGjakGYpBF2Wx",
  "key29": "4iHfAJ9tnzFzwDdwg5Q5TWRrBYG1fTBqDtaUofdmm7f5aUkHh8xJLBfQ7MpXUnvM7jncSd8GogjWbwCbjGJukrFP",
  "key30": "2pxa7bV3FUvAGMUWdnk3ocsMSAfZzPQuH4K9d8MCNrKQuWevqJxEFAu7fSt3GYFadtebVEoZzJm6A5uMnHq3Chv1",
  "key31": "Pr2uw35aSy2JaB5CVmV9o2JkJ87FtuipRrPDPZATFsWPAQaPpkgTwnFftVXQngRJTVAkoAK9iFxcc8FGcYA3HxV",
  "key32": "2JP5Zt8kASBGaAzEvQq2ZKGoqkaEcPiq5gUDxTKgY4wVtaw8HW8pw9wqavSEpBHDHcFEwaGtEpoe1Dm9fqNrPT1U",
  "key33": "5GyJTupUEeLYRzi9jwbdKXWJviV5jyn8yfar62s5L6b2gxxzkJ2tesykyZN5RcL1MbVPcRRzDpBnWCRu9Ch2bcCf",
  "key34": "3Bxv69d6ewTQEEzonBx5k4bSVR7h74aiZW8eBM4nsQCPDGTKaVgXorCAw6bV2pwo5AeiAipQ5A6GEUrqopMWUEgK",
  "key35": "3cJMPnzXDVu8J8mvBqjeqrcz3TUjUao71vTP2Ff1JVmmixMia8YMwbNsBfcd2oareHCXjDQTz2HfHEfU63UgXGbS",
  "key36": "5rNsxiLrW1ERKQfLo1P1cJ1a2wYxw2KyexxVQ84HXLVjq9spBVDao2p6iBd1gcHeBG8muBs9LGkTC47yLpviGpiz",
  "key37": "4LmbvkaeJfa7N8Gmut6WAPP25m3PGiucQXU4jeywKmAtDoe26bpfUD1j9Bc2W2KCTyXhevYHNSKsCRjW3anRMpmy",
  "key38": "sBVaJuizc2qtPkp9ntyq8E8Bxcejn3wyB67RZczvrwMF8VzZzm8jjzqX9DowikqUaLkM2H64QTWgTDcvUAMAdDs",
  "key39": "3ebSpRSrw8FtsLsoiFrUwNjZy8793VKwXVdFbSfnc5GfB9YSdwrfLcHTg4em1vmBqm4GB9psvYua7GS2C9eZY1YC",
  "key40": "4tkNy5xre1bjJ9DHTte9wQVrCy91R4Kt2SQWpWLHHUUD3eHCEU1erTFZT1FAoAeHEHS3dBDkDLWYfUPdaH73Gnc3",
  "key41": "HYLevYazwCU6ZQW8XLHfvqJiXeyFacik3fhK9V7uHWCPrU44KD9xdNKtoV4r62enVSUpeSChN1amNEjHvgykKTA",
  "key42": "28xmf7SUd78fdUgPSrX6Cbp5qsbbjeEt49iAk9zXiuoaz2R6ojFpHdWfXYsf3ArBeJpbLLV5NPdEHJ8USzA7d28C"
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
