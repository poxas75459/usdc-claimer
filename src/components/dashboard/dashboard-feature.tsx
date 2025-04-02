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
    "3obhGZQXkEKoVNwurdhmXcjx9kbtiQjZt7pYGH3yK8wVhY21iCp1caAf1wVZFCL13F4vpZiw4N1s3ngSA9ReGtqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzHmpA14PdtNxN327wNmauUuwpf88VDdzyiYZfX4BRmaedq6AVR8HYrMFhk87yiMoegDqFbpkWTiYa84WwPBWhd",
  "key1": "tYJoC7JpWykj4iKzf8qihzVSQsfUK87uuZs4KNcMi7jvEnVqPPFNPib9xoRU1fAMr2MPS2ytKucbb1zPRqkWy6j",
  "key2": "4RW4NAbEhyiFTJhVTrQ4FGb5RadHhYoAFhRArAw8H4CUGrrorNJsZvwjQsUWomxboydboxM5cQXmqtxa7Ps4KQdz",
  "key3": "AA8AjqpHB7mASAbqvkyS5ttmiA7RTXyYKmc6LLHYMVTKi7bK4dwvqQnE4NrZC2Rbr3NMpY7WAMSrVwGottq4DZ5",
  "key4": "5A3bNkEhSeDYn8YiaLHnUMCXAJq5UViUjfkA73y87NH83daqVgP2FsMW8UGhrLAi2K6jk4hXpLRtGKZCLkNv3FzD",
  "key5": "5aRZGaWfwTjUELR9puagABbkm2oEjQGwyDs6cKxKcM1GuWZweJcDafVN6VohTXg6E72jtgSNozXVqGLBvqjMAQxw",
  "key6": "5Aq3XvawY9t3vK31Rg2ZCToXNFUEhEmPk7qce5qh4E2RHyKhjZxSfNxgPRjgb19oPyb5YfRexTQLpZbk7d6ttRP8",
  "key7": "39zAP8ZaMVC8oBkicxHpPQMym59j7VL8U1UCDiAmaZgNjgfZcWuATmx2pwaJb5tLcdhjA4xxLKu3BJzyyZfYVg6P",
  "key8": "DLYaNm7hNbGrrAPaGa59XKn1D3y55d7ybymfnkPgXSKJnw6jbLfGgCpr8q7qY8dptAtRKG4Tyqt728Q5BDBJ3wN",
  "key9": "5NC4JsghdieKWktF4zJ7eDP7uu2cip3cL6pvkZCBNekq25kJMU5zvct5hbfSUp5MxGhNSNLGnnXVdQFgKMTeG1bT",
  "key10": "2akMGHGBQ6E6P4ZxpbbkkrZHUueZeo29XhdCjApEqzhJrRgFKr9t8hwGSseUeTu9WXsMM1MATcmCShUduyoZwrQR",
  "key11": "3TsWjTLyAdbEUB9dvjzaDd5prR84VkLPtfMoFuja2tnFRiiLPKGyG6ZPMRZgrVo3TRiTR9eCkfftLS6d46aQTFwr",
  "key12": "2wYaHEdRSH4VDD9sKgaCU17hiDnk1iD4pxvL3w5KWayuRWdWAahsENojAvgikVvzFwnPF8zCEWntGmbNp4T8dMsE",
  "key13": "2g3eUfaVJWpzBjedzUnfGcxoSD7axFJAhEvs6TBoDHM7QrcTKdPLDW4dXWaQouLytgaH4Dkx11zfK4V4jVDuyHrS",
  "key14": "2wFUBBqsibcdC2dMRzPX6yahsBm2BTPBnyJ4rwL4T8TBckcdx3PoKaJUdR9NmM4RZBoDW41bedyXXfYrTToe6Yty",
  "key15": "3k5UQF2dombk7BQ6dhqZB5SJuSCQRbvGropv6CXiTLB1z8uHKCXGf91R4W5JoaCwMjQnt37ZigpbsBoDrD6ugh5F",
  "key16": "5xSfGmocHzccrFhBVV8guf75APvnLkwy5rT4QoHSitxdMMEAkJUpVhGHWU6c8vpS5GzxRQdvboFcpT83gYFf34N7",
  "key17": "4gkjv7EphCUZCgLW5E9yksMX8xhBWvS9g7cvexVNNM32BkBEXcpBtSasgVed8VtJifCwya8WSQYdiM9vWQy22XVZ",
  "key18": "67eukJwoptzT4Nre3fPawH74MQ5SMc8UhNe6rekMnZDVm8vELJZoeKs2MEJ5YQJFtDXCNahuZJnRKUQU2f1RYi1t",
  "key19": "3MDAyKPuBtHNYYrGL5AcGoH5vmjahe5LAAQ1SjJBRT5sGUa7ty2EXknKUMSHyDnssUV9nNiMCLCCTqzpKPs2dns1",
  "key20": "64fGtuc8yYvVfY1D2WQk4VbKU47RVNEifqNT1XeMdxKAuA3BU2e1ivtz4PznkjAicxRxUU84hcvfSvn65yyi5HYf",
  "key21": "4mfKGtS2C3EEPk5S6qSuKP62UFvSdukAabB6JwcmPzb1XLPsTTUvaWQn5pbXAFRaEjWzyRp5uyWx4o3yH15Jwyse",
  "key22": "ZBJ7w3RBzZa8Nc44jdg5ATYTqC5MoXTh5nuNQRuiKZLbP88ziUAN8Jg8NYbUe4xwJnqpii9ZvptULZ9c2WoVErF",
  "key23": "2nJULsY1i9zCVdxYoYW1w3JTGYo6ccx1yXieb6uy2CANpzLJkMMd3P6CYzC9SNkPjk7mP2Bpzo4c3GYi6JZUh7z2",
  "key24": "4JV7qmoHbsnQbEgrQs89yNkt45qeGPFyUYwfA7cFiJFN5hkpioXkV7osSkKydwvtCaqRZHroNEQmL8EEqPh2yYPu",
  "key25": "YCMgbruhPxnoiHSEBgCpfm717rCrMpxFjPXMEUieRTw26UKYoV1LySruFGdDfBBtJXtHiDbm13kdTCrB8hrHqRW",
  "key26": "38rz5bmLogh5hgyModijP31LtoDb4W8YMzZJyie88NP1v8hbMW7tUNWEEK6rotMFU4CXKYXeBv2T7pi1uxka1VpJ",
  "key27": "2wGekBUnES3sboRMNLfqVUNZQGSt2Zknjy9spK3Ry1Hku3jcwFAKhUAWgqzHZQmgfmgguQ8Hr23HqCFrP3fTpKWM",
  "key28": "22n3NEqu5WA924Chfujcp9CtPu9eY7LP45JKTnFLq631GhrVCj9jpH1WZMvgBqmD2ADkGbEziBjeyxE2uzko9BPi",
  "key29": "2YAnU3EQNuAJRqEFbfoactkPMRzRP5cC1qNf8GGALik1VfNAYJ62PRvtffSkpXPYwXkticPoHLvp2C8WdbtmcYA5",
  "key30": "KoVZ5MGDrYWy2NBKrh9YCsDAXB3wmrAPTR2qbpgpXGp2qGN9P8NxasZzqAZzHfhgA8rqQVzF8uFJpXBFf2apZXR",
  "key31": "Cv5BbNjz4yJPCqX9q6at62bFV65dn4QtFWqHDsKm1z96c2e5jcssYMcX5yG74W9g5jMtpMvA1DsJFJD1eTVg91f",
  "key32": "pZC9qJNdvWmzupsGmzpB3qckd5widGRFzCqqPhcS6vAb5HjqJgiCSPdAXVp7MjYmTsFDXWs9dyBZo79BAtfVnkX",
  "key33": "3iEe91a8JtsY73vUHYC2u7zj6xwrJDj3bqnVD1T83nAQ87DL3Xqvr5kvPeFisu62UfziYuGSep7X325y2c3LGqwi",
  "key34": "4PY9ijmAKuH9hVsHVByoUqxUGntfJBxQmVRuA11MJLzLm57YrGcVDjzWRJXhDirCzPX91heToDWGnvkxR4XQk5AZ",
  "key35": "41d31hWDeq31L1YhGobrVALVnY6d4gFs8oECiQK14nt87Hy2LRiBRuysn5SmSmkdpZrwknvY5D92CSrpb1tMEHf",
  "key36": "4CAZg2hVzmD31SmY1B8xRcZNNJz5DdtMCVwVe4Z5Db5A7TnWCAuYPAPf1JTf4m4JcgHrxw1YqtQfYTLbiS62JJtm",
  "key37": "2tFqhMqF45gmkQta5p21Jf7wVZKXnTwmc8kaA9QJSsBsmU1TKtzNe93usjGubCyWvBc39bXQ9QkUUqpgdLC8L8xN",
  "key38": "3bXgckeKKsQGTcXFJ8CkiGHjZVWQeX6p6tq2PtHxqWUmKYmMVqJPrhApztGVucnnPACbPKRoaPG6dvV5TqCKxaYS",
  "key39": "5573BPobpFGMxqQMWtGrwDRRANVGDPDFv36ULNvApD18cWQT1PiMSvKnQSqVxptMRyK9bUcxrfoxChSqEa3AXbEW",
  "key40": "3T8ty6DPuA9eAaP2QJxsktqRZZs2k2sCE7hTjcgB8vRDSC9KFgxt8VC8d9zZ8awaiMirW8kApRAbPkxZWHyFpjB1",
  "key41": "2PyVmrHwXpSGkZi65UhPDUjTLr1GTBJiN9inJYUxTyqEXc4JstRGoCPmgDK5niaes8fwoZTvKxronmeZvWPARSPF",
  "key42": "eAK9dfnGCpkKZtrK5TeoAQummwZjQ1VWubUzEhX3Ff8o8YX1pky2QwSNSUiK6g8tZLW711Cb1tqeFUWehYgDe5a"
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
