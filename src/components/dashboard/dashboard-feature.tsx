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
    "UtbFu99NZoG6GxQD5fY5QEGT7P1QAf2HtAyZV5tzMowU5HbyfYvt8mF9Q14UvGc29amXX4Y6nbGLWpjVLpxxsjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XMHTki15BzYmGc8hPw5xBiHz7J16dKWq4GGXVZ8goq5B9x7Zk5DESURDZipivdB1wMTpT7hA9gFNbip1H6Wbpb2",
  "key1": "5pdSKkDbty3w8zgzL5sH5mXm7fGkyhUni2bWN3tg8wG2dPuKxEwdKb8pHBvR788URcCZ2fJsDoqFYMDuEQtpf9qV",
  "key2": "5FQYkbDW5XNgh31Sq5qSoxt6JbMTJ7WkAu1xsF4VGASKhzX94PdS3e2bC3X5dLRs74SScHCHXiTsKTQimrLE63ae",
  "key3": "2SnumEtzENJLGvXiQRaYKkN1dGGdrEjw3oyYPCcmM4dWtDybxiEeuwCdNBC5Wkki7S57n2mpKeVJP8o2H5jNNeKx",
  "key4": "J4C6egHdh1km7wL9rvRbZPo1dRSi2XEbkMCa29iu6qLYm2RVYNjPd4ZKkAkiFiFhv8zjnkSwSt338wiASXS7PZk",
  "key5": "3L9uWufBzzyxDSDuoRCMY5YG74pSbWeeGt4tK9K6SBNgDPtVbRL2cLTNerAbswk3A1pWAdDZtgQSQxJo5Cxtj3KE",
  "key6": "5gwmcvM2qC2LMeeK9v97koDHJSFh8GhwLExCJHrNrJ8qDxV3ybCbRrUMF3P1pYsuwfchjr24fiNaZuzxSLkN1HNd",
  "key7": "3foZgiSpVpBkG6VFKcMqZ7teF2qj7otHV1h2DwkRbjdWJr6beWPktRrSmroFQBA6wqc8yeWtxxqGWUykdF8auaEn",
  "key8": "63qyFBM5LBemdtt9des5GEYM4bhRVVnF8F2Jk76sztzKRkbPUSVL7V2MzLxHHnmZatDSuYLPe5fhpfhLZ96NZ7fU",
  "key9": "5icytq2ZMXiJUXEqo7jQ1eKc79pufFCWxFTLaHUL6v3KURbMh3dkezpxie5ErbGLigjfGd19UsNe8aHbyGRSeQ93",
  "key10": "9yUtrJWCug5CkVBphHG9qW6ZmAyBH1dsSZqgf2JCDK5vMXzFHdrmHsZ1mozUzoZSRsme8aPmSBW1VBDuyoXTQc3",
  "key11": "5FC2dnfZDk7TBawdgEMZGR97XZSXJ9taYbR85hf8xjWy9PXbSQW9tb9qi7P9vzg2azZNCrTJkmtNGtVo1dmZZPUN",
  "key12": "2uwP2TxBeeSq3ufRxVRvrp4RYccvV22xhaMnUmwWCWgJ1jfRwYfeYeJZa15veLCDG6nXijtHmW3tvVjmdKMxEX5T",
  "key13": "3EiVgQzeEbFZmDuqdLnUBGA4kw37km3kEinVpfgAJN1H9nGQjVosV1oTX9HeUEHe8tjkZMRvNmGpgatbpLPBG3eD",
  "key14": "4GJb37XGkdgamxh6UhMQqgbXihC9muz4Y9wAi2Zs5PhYhombXsqYEbAsdRRepDeLNpVKWJuoYf5HwU5tckzxJef",
  "key15": "2tVzkwhu689u9kA72G2eMfsYgLb8venU21gQK3B1JXrVVb5o8JBJc9zgRbwaNJWYwKD4gayJj19jZg2RtYeWFfF",
  "key16": "61sZcMfNv3bvNhE5JwMYUSTehGfET7BGt8T1BkUv9Rzj35CLZ9hBiSqpKR5oqvdFuRNGqXF6iReeixfrzoRkAGiY",
  "key17": "4p9Y9gL166ZSxeHW4GtSkSMDA3TNnN9Y6AKDpftamUk7HZwsJTBLxjid4cL61QYMyXjzkZd1rfyM1NXjUEz8GSSg",
  "key18": "3omVew8cPoEUH7CFw8FVGLDZYk8zDmsC8BaaJxnSLtroGMYT9D3vULAcSmhnVttypNtzKfhVfnFpTFY9Y57fmF4v",
  "key19": "5DcD5sa8RihjKZX7KsUQwGprFg1xpFvVX7D8oeWtAMARYGaZzDjJAmfpzwqdLmp3drBLSxAq2g1UBnU7fqQgjHrK",
  "key20": "3mrHUKgAudU1ZUefjuxLkjypxQSjtNT9LNKExcYCYE5T2J2Sgu3e1SqDZ5L3k67cTjMQMbqTRBrzXS7tiiYT2TH6",
  "key21": "5hxxKimitGWaD4okceBGr4Mki83aVWp8grBjGWcdioojJYMZx7fMnr9hSkQbgEPmb3kTDz9qBSFc1W2pB1siEPms",
  "key22": "4xbBpC9dmY9EjgwoAUThAkCe97BMFWEhCQod9WaV2923KbGomLRLEUj4SFxreecxWHQBcPURhYnsdHwMEiagBk3r",
  "key23": "3zjH2aEpbphAWwr7TRpSrNderSwgFNvbeiAK8kzPyAAMSAuz8tcemyxGjH6e6AQoegRQyw3BiAs24XHLBCbRAHsS",
  "key24": "5hDuQebof5riz7ySXehk772PvdjKKLSR1ch7xJTpFxsYNKRVN3Y9BnuCWr6JPmMrsjBxnqerkLMojoiqA2QUKDnE",
  "key25": "2oPbWGyrTP8HEha6HEb51zj5Rmc6Zj3xWQjBR4xmuaJTJ6QBQwrCaUmmQpSwyZvFuXqvyJm78Ckn7BugbEoruKjj",
  "key26": "5BcFF24HNnJEDGGftZZoayRhVSGv7T37FFYkyezBM5GePu24PxhhqEVWMh5df5zRSsbcMyzAevy2FTnpVBKNzHAg",
  "key27": "27AQq9DnZMeHbUwiQKoDZzzM8RpZGvrH7ueu8kqiXPTPUA8p65y9WpmfMJMFV1Jnm7W9LNfvbMGVCgo5Hh3BFPnE",
  "key28": "3JsgCrEvSt8gSGjkZeDpYJRXDWtk8EqzXr94nDf4ANLm9sc6iJFmJx8w5f13Gk8KqEEnXZbm5BhvEwX5TmMEfRMq",
  "key29": "9ZdqwkLwtK7hZw6rK5nBWEybJoUEZYLCGQ91caGiaMDSVaNZgtr7JUp4rX11jdSsU9vsHfaVGNWatDTMGr9CJXW",
  "key30": "5oBw4hENXpwQRsfHLyBufc5u7Be37cwPvz8jR7JhKPiNWTYFwshN78Gv2TZeFvKyUhNF7KPPSFE4XvQAkYPvvCZL",
  "key31": "4MAa2TJtwbPdoLr1vg4WfSDKPBZzxcUqz2vu6oGKehL6rtJaKB1q1oQMXd7erh4pCDYVDkcV1u25gTKbaKM1KjPK",
  "key32": "2D9gwrYe4Jh3aHiQRP3FAwXuc2dMu8gBhTsfjhQTq1zQqpF3L4pedS95rZTZ1veddRbALP7R258tnwzGgSPcjf8g",
  "key33": "36GT1jupX8K9Kp3muciaB4xUR2KVKbc2kzauif7u7un1GuJskXzgXVMRq7G3EUqRXXZcaVgHoE2LNxKCSgVrW45N",
  "key34": "59BJn3SyHiZkqxFiWe3CmUqpktv1iejxT6vKJNbmr5X8nfH5UKygeMHcUfawHanXoYE3wJ8Da5UBeGM1WvFej2jL",
  "key35": "jx1zvCJboT4DhSLd4Ekao53zo5ryjfUWYRD5dQgvyNxUZrqGPRBfWgVZE6vFj1xWZJ2EriBxKjweFXufR44Cgvi",
  "key36": "2K9ciYCZLHThwvZWr43QbP5XRXthd4DR3QUWD9bDJyPuiL4M5SctaHko6ca4f48sxgP7tB1kwCoLbywjB3dFrGsC",
  "key37": "3vbqQQrxE4TELMGU5j99oEiW38CixmYf73NZg5koKWCx6Xi9rLhpWpxrnUZJdwBPjDoUrJXL8smZ7rG1snTJU9Rk",
  "key38": "7yVUBfbnfBJcVSi1YKQYMtrwRAK18r3g1e4u6sTtjrN8oLat6uWbTEdSh2PVgF9iUfcEtxzt6FMyJDXXrCoeLYy",
  "key39": "2KGqgZGUHodffZtoiFNCHE6zhkizjdzH28jW6pTJqDK9axSMp3ksKoV6koALCg1S7HVaPQALcJeHeGmziWftYWgR",
  "key40": "6kceQWydhhgu8qYzQBGbL1NZx5Pik9DMP3bEPTPBKpXdJoYDWBfWpH9ma6zKoLAVw7zsioUvP3tuS3x26tPjzFT",
  "key41": "3kpEjhe9gDkRExgJP9EWCZ1Wbe3dMHFdhxpajiMMAqbZLksN1YFQxRmy3E7958zSM9WRsTcZb5rGuwqpeaLFKzjs",
  "key42": "5xNMVk4LTGs9SH5iJZKMm5BriNZZ1KFVmc61afcSXarYWDkckVsj1TW3MFcrUbyQmiynpv72LFq5ftLgWHnti51Y",
  "key43": "4noMVHyAu2UsGvZuxGEN44x5kttpUzHhUNYZCPr9MVA9CoP1oVwcWKRpGSR21Ub3kJSdKHwqaaxKL7RTC355bnbQ",
  "key44": "4oJvwwcj5PdE47TzS66uj2YgVjjgJRt9oj37jWs8hQbtttac3BeU6ybxiGbCnMsArFAKpRjDTimUS6RjZMcEkqgd",
  "key45": "65koLb1j6xSrBYqD8oZSDtqckHs5XyFBJNx2NJn8FMgBvGrCrdYRtG4WigtDLmn5WmV4gtwDoFC3P4GWFT3HxRfx"
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
