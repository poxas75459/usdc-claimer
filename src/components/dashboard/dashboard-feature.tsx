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
    "5afoNnUPEQ8edgg3afBy8V66uVst9zLtvdZ2CWEijxDFF8TyvoXQ5kuRpxwb6SjKzzRhgheQs3NX3nma7A3YJbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8FPvWAcS1G8s1p82cXwAWDRbLegsjULm1saw7vVeDhQYVfvKGSnJFfVrACj17nqUD53zsLJkRsoFKTHUupeDik",
  "key1": "cYqVx2QVDg3WA5neDYyS5Z6nyzChvYLsZCZso7efLamn6nA77bCYYANEdMTCadxAeKMEFXVxJX6w7duzVJ7D3Sc",
  "key2": "tCMy6J3xXNdUAAZ87DUp8UvQrgv8QeVJuoHdSrdLnuoF1xKL3E1rMFTiZ6NP7QpNWs6pNs2aYwhXsF7AFGNTVPW",
  "key3": "2qnAeu1JEt99r1GwjDraeGvYvZ9HSDiukRBb2ECJuNmXs1KDCKXMYsDDDWhCDaX5JbKwspPHWWvoohjYfNsJTYnY",
  "key4": "3Yn2K52g47qpcmuSWhn4CvUKf3G6EWCmztenXuk8DnhXjcGTQKVLwdyNc8yn9xZ6n5YpVZE3jb15cxvpvm3brE1F",
  "key5": "4peSyd5v7FQiiAy64uMUoKYk6yNneNnqVchbvPMEsc42RebSvLe4SUb25R5jqjYUVSEsY1N4WxPzFoJW5BpNydcV",
  "key6": "5EcSeMMT5CQUV3HRayb4E7TzRV4ZWnpGbcf3JAWNdRn5G3YMytkVLwJmrcKVCArzWRwegYBjdzXAQ1nDaeNzsnR2",
  "key7": "2yyNkTc1ZKc2dpUgmoFxqMrwp9m1m9PcV3Ja4w8WRoTxoo2wpRPG2QY743Gyg82GVzs6YfRF21zoqVMwKaCmd1jJ",
  "key8": "5f59XoTcw1HPwqxKKaaRHyFZtm7NwsPdWoGWoFtXWJbtcCmViuiMXZjjr97x6heQRxG1UDdh6QMM4xKymuvQLTBF",
  "key9": "2mJk6qhiQXCtBA8NeeiCV8dR23vMdeNCoawHPBAgwA9FPntk7bufJzphuxEJrinGZNMqGrxM5XsoTmwnatkiXVVo",
  "key10": "5fj5d17pVMJ7d2jq41LqRVWWcVy6AqjZ9jyJcA2GkjwkYDvu5847ntT5aeJSP8KNub5oRR9qkxrBB3d8Z6nrXc6W",
  "key11": "D1Ger6UxepcxTR8WwMu24SNKJpTNYq1sULe5JaCEjksrBqArJwoLRztmEchD8YMr6PC681WRk3ie72WKXcmhPA3",
  "key12": "C1inZwXSqgPoEqvtXRmmmScsxi9sCvKnojjJgaLaRPz6vN8U7Csm2kUxG9CNSUuECzJchSUCiiieyrm3kicJMz2",
  "key13": "3MmTL6geNmbTjinMCJR2K6eEFT6egJSYhgBYZDLM3nSvEhEW27u2w47zgUUeGHopYs9KbB29jFPsrKRcT9DVSqpo",
  "key14": "gbEmhy5eZZjBAHtAQZS48zwNy3LSvuPm2eHqBQKi5tbUT4poYX8BcXVpCnot6VwaoXvGN94z3SuBdNd1iWnUKMK",
  "key15": "3PbUyQeGtxNbhLVPMrMNvkbSoB5SutvkkStcjPiBJFBkPhL5Jou7ibGdwruyqhq6PA4XZpsEKxhhjoULA2yebLwS",
  "key16": "4vaBrU4vCiXwNFjvPN6qQbhuhaAdB9BrzMB5y7cGAFeMRaxNoryvjBxnXMvh6rQfXT39DWAaYuzmYonu2MXyHzWf",
  "key17": "4ohHQvNVzTn3SbpHnw9nZxnqoQW9qiU9xFrBVUPbc2H6WNLD4Qwk9viUUfRXPLugn9TP37rHHQWpAiPZVBoi8UMH",
  "key18": "3xxYCEouMPQ55vqPfUihiP2AXgvpikrhNDsbk3WBxhEindoMQjqN1waAXLpzV73j7fgLpkxpbRdDa4wTUTg6TBi",
  "key19": "515ncvRHkgstjpgznkoQiyeTodbRKDWnZs8joxm1uBZ5f7wK3NMCoTRj15tcdYkeo1B4j1M4aSYxe5cUzYw6jSFs",
  "key20": "3jJmYpBkmMmHHUwDZZvs3Y6SXRNSDy9UaUbCGkotbMnLysMTvb8siEMV8JFJwL4MLqnc57gdSRFgKTmqPK6E4TbR",
  "key21": "eTGcU6hWhNYEqAE3rnEJhsgwvYYvkWprah7Fn8wVCScrKbGHcFDZf3QGXrsADTRRzPVqiKLprYzQAe5ZAXo8DxU",
  "key22": "5fbuYKWXHaDAZ2HNxngoEDjmbzpcVLWHrU1mLgM2jEPb1WsGkwSFS9MzfnX3t57o7mypdDwewhueDZfrWFD2LCyR",
  "key23": "HFS2FsHYcPkY7NNfy3Ta9RX8LxdWzGokQ7SZFanBpt11ry4sB8q62DYSe9kQqV5zgHZBK5hn2xkhuLHkcstsTBQ",
  "key24": "2PohZEjzNvKjEcSAP8fjKUrnGiZQaWTnn4553cThDdCx7LbVFRuQpLvsiM8APZdgbw2P4EVWCK7x7PS4KCz7WkFV",
  "key25": "25EisUsJut2Lbx7RkRL9LpFsEooi8oiEuT2EnVjShUoYNmpzZiSTLzJoWnNsLce2K1A1kM2YaSQiUuRQUQUii4A8",
  "key26": "65gEKtNNNfx3BjUj5bJrZXQrKjymP4PR24yZgRp9y1L9JtJpSzGJT1mYtgW8hozyd77PwPCgq7SpT3HH7nFowX9g",
  "key27": "ZH6RVuFdGb12a8iq1qsqs6gcGrHPAeCkdZ9mQG2x6iEW4Cx3hDFeULFHEWffkU4oziiZErQM6sZgN6WcUBnzJM4",
  "key28": "4pQCgrxw74TCFecDSw2nHFxgRgsNWUsGpHwSBuGWToBNGQMmPDfxhxxEuRwKEo7NBzHmydAU8aaN1JFECohEeU53",
  "key29": "45aPttgMti4Vg114rTRWvA7aDjcFyMfhpNghWzh9cVJRsR1uHX7cWkk4pChNV3y5nLHpCrTXwcFrbFfQGcKJdtcB",
  "key30": "2rtHnAfxkkJFyhCCV5atfBnmMtZmeqRuSQHkABVGNSEAnFwJSis2rHFSDesg9wN4s1pZX3amuf7SqvVLrU1ijYaW",
  "key31": "hLtW98o9vWtnBgYVMxH2cDB4yPCaC4RQhDbN8aCeH2v7Mpgss8iamakngnJ85Ficvyhg4ykLGBPZgcmbzTpa9nW",
  "key32": "vw7FtJATwT67C8bGwzRTtSVU47dS8oUAv7vknutRfQw9gGUDCoc6ZtYYTBvXS8bjhxzUvaugUg5gEuMH2FYLoGj",
  "key33": "GfDDnLJgdqEsNdYsMxL9rMrad6hYVqjKDSfuDqEhCVPWdJSTgExcLJpNU1LpRNqLEwEmxgZqafJg3Uo1q6HtJNR",
  "key34": "5FMwzHHDNmbxaSureHBdGiXjazctXVE5YsYRxR8GabomHPBVVQAcY3777PCnJ6ezxV69NcRRQ1MSzCkF1ShymwmC",
  "key35": "51TwniMwRgDuRKkRDrtF4b1EJnqqUSD83S58QrGRmbHh2TuQcFa3ZheeyggJwC1RXFuWFjeV1g8d6LXzncCCS8Fq",
  "key36": "2KREiSP9aWSWftFfTNzR9Ey3286DrKT3X96sSnjgLrBaSqtuX1YhuHfyYPFiCdX8DWkQatYkpTKvC131mbUi7stw",
  "key37": "5hA9FtvGn541X9KzWCgDMFm5KKAy2NP7qW6mEuXUkJXhuRrEm1wdAKy9NV7v3mReadrRmeWN24jXfu1ap76Pxfqi",
  "key38": "2MxtaBRGzqtN6VN139d7wkJEPq4zcs82QkavDzkREne3zEVpvvLrrHivHDbHm82xVb43BzBZLDkHmpDMP2T9XozJ"
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
