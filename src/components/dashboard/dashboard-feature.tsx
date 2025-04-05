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
    "hJQ6YYZxSscsaWwFFmHD9X53c4XtiMQWVv6LEU7iyNnXrU4hfjpsWUL9j3XWB8bjEWAMmKqXiaeRMsN2zWSGZQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psj34D5eeveKC8aGrPVj3AHXuDpcKuWoWCjJ2vNZYWMsi2D686nBaXZmqULdaJiZWSWb2httaix3eJNvYFbKefz",
  "key1": "2k7up28HMg3dnB8fitpRmw4MNAyvjcR7emQ4Bvufv6T6dnCJokTAqGaZ4x6yx73bxxq3VzDHFfdqvh3LHZmjFPtD",
  "key2": "21gHWyzujcg7pfQf6zVLFnW2XyEg4ZBUMy5ciuV1mNGK4D7HJi6WUgr75T6Cg87kiLxKebN6qgAD6uEvqB8t9eai",
  "key3": "pmdaaNgn1YkCuwSoSf2uJnbwb3QAXkcB7oL1bcckRtZDzsn98icm4pnPNySnDWeB4CZEgLJrnWprAcFjYVc6WJ4",
  "key4": "5DQAW3cQeGhJ9JFvZhzLjKongLPq4B6puqkdmA8wk1X4F1F68PCTkdvSroonxut6AQ1hvyEXWboUQnAoGG3wkpnM",
  "key5": "3PF4SVuuuVAweU7b9pepBWKu5T79uLjRHw7DGM35qYsVyEggUmeJvdbXzQZzWXcjCyTYTkyH1fpmM9bgLKoUicsh",
  "key6": "Pp86cNEGwFSU3uRWGGrtp6GvcaqahFGxajKMSKfYL6d6zxM5j83RUA9Xo8rzxioRbGcKvVgcvsuFhbQqCb9NFAk",
  "key7": "4BP2MbDzpbAHjtriA771fzkXbEyHchCyBpTCdgQ3xXj6moz4So2xVvia7SQw1MTBpJknn6H4mJJ1gsaRJi2z8dLe",
  "key8": "4NdvEyiTqoZQc6xRKJCTkmV3kNhCbbL2NvisCUqaiStwhGmdcjfw1YVrRErqxzohmEEQdz8gzUVpL9QVEdkcYQ5U",
  "key9": "5x6iMKazfG912mR3oTx9GbhyvrD4osGfNjp1TL4DLU85rRh6hPFHSeMx3Eb4rdyEmqWfUf22rKL1EPnwcdch6JFY",
  "key10": "2UDYkgypAmcnzdLFMTjPP3mEeGHYfJiqxW2NvdQjAUNim7NzTyuxUjoYMFqeMoEbBMpS1ufVtVnTmBwyXVPmZC8P",
  "key11": "V4ayaviFi2W2ugLvbhriAVRBx63eXhuQykfzSJgk9Qh2f6V48X3b41VLzWemPecu7Nae7bWRx3LzJaLaufzDCNd",
  "key12": "4RERv2qdW7pGHM1H6suxxfHBDknZCt7cEEZdBAjKVt1s34YopNv62hkX7YVHAEMcMzcfoqDQ84rg6Yc9j4GgnqUs",
  "key13": "4oQJyra3EUNdztLUjSuAi2YTBWGJggUsDCAxxBZJsQMuE6orAgXQDJsWasyAMTQNgEDdtLCWj7ZHt44MK4noY6iA",
  "key14": "3p5bdcXaQtRWQt5P6WYXGk8ePSH35ZBiXzsQQAaUyfcAYDRzzLyEhALrDR6Nuvzi8oHCKpLsAR1A1xWdNRQUVde3",
  "key15": "5vNgdDukKncW9ysdxtm2CDYsnzqPjpebuNihfFRQjtBUaUC2rSK1xTfrFCGC4N3Gkrhhhqp9ihnsfvowmNhA7CoL",
  "key16": "GjDywMkVCVSrw3D8bRH9xrnMqarLSYhpU8c5iCkSYPhG6zLkN5HtWeGTRa8RrCwY7ujLjkBpzZHyUCWKyvpVXDP",
  "key17": "4PpXt1Zqx5N3CjPgDnb8qm8ksiZthTiRsVJEaHjxYAQ2sAhzfmjqkfkkYijuxHmdZJmyZFgGABtRw44PXiVRZQoz",
  "key18": "5jv54PYnJ5Zd63nLutsM2qRNsJENk33Y2pkVaBiWKGg1f96rhjdfvtM3naPg4Jn5PFTRY76HUgmf39zfb9TGtwHi",
  "key19": "32VLGNTfHpiq5EWvNXYeYQ5JCZkgi7dyWXe8JwinHoMWFcRbpAXTerPTZCFFKejqo9hRZ9tCU7x5wrBgrq5HJfDn",
  "key20": "3Xn1ynr2auuzEe7mJAJsBdYci9mLM1SQiDiXpjwMZUpHrYHykBdEEf4BonQmoSbCdjfTcjDhyTBwX8c5E8E6zMRQ",
  "key21": "5ejdzP7i1TzFSvYoYzRFGEvBFjJytZYEEjbjpMViz4FUPmmSUbbihDfuRUajSJcBXs7zh2Th2e8fA9n13hB1WdcA",
  "key22": "65ZBpWNERtqfPJmjprvBXJfyNWzkbHxBfCEBG4jtvoZZB2hXDsnY1EYUgE4NvUgVe3hsbbsAPcvV5zEvVeLW8run",
  "key23": "4iXrrY9kdKDeghvFQEDWoD4542aGrna8hVbiYY1rH935gFuRJSvXRN2BXdtAEhbZcZLm1tge9oXErZWiV45HBjvD",
  "key24": "361F7ojGn3dcCPmL6BmLpRTzmFxYwuBw2JexL6EGEFWtoREhF3QDUYch4h8Rt4hMcpQGK287TjixakrwkqrJMcmB",
  "key25": "4f3xgzqvBokvecqz527Qxm9woME73UDMxJC95s5Kof1faBgPnKxS28XVp9pzp37dQztAp5TAniZgBDSmAmyH6ZVJ",
  "key26": "5yvRizrKheT3mXsHhyc1GsjuG652UjVPWJvEtC5dvFJWMyGSxzqNrChXyMTbJwRHHH47JHGufrPKJ2rvcHhy3bvF",
  "key27": "5yjXcWgRozjKJkWucNHkwxEpX3DtCahmz5m3Y7xBDmVhnnrftMcF4CxyEh1mi1yM3NACcR9LnXzKCkskrqAiaMCE",
  "key28": "jdjFhPznHKasLLcc8rWeGYdpvM4whSQrytoLtaW6c98udqRUNfA3SpA26xb5JoRqtKAhrD7G8RfEdNNK2GzQPEG",
  "key29": "5hpnUpFY5N5vVKnfZRGgET2kyhtHrxjGKYENo7ygyoW5GgNoBQx5FV7vSXqFnANNJkZcQFBqPsuZfv8SD7swBNKS",
  "key30": "2D14XMHTipA6Ru42MtGxdCJ2R8FS2iGNsBTPm8cLMcKP4UvbC8ed22QALMhqkhaiiYGKoWieHjFUCVAJDjQejpVf",
  "key31": "3W3iY8eNEhHKrcCt5wq7hNdMVS1dbBQJnZ3JNwfUWuPdNdLnZnVTvkVc916XLq7VhFPY6rxUBQbiYRTbE57qVgji",
  "key32": "YXnivD8aXA7Yp39uWDDx2AoikkUNS6RoWMKtEEAP9tRFu5MgonWKTSa1VuCA5YR3JSnJaoiev1rB8bb4749LeaW",
  "key33": "3MUAajH5q2TZScME6S796AnYgiswCPfdraiiu2GXK4Je6AFVLUHJDMKcJq6eRgu7ZFEThLSVAsAbFpDCdkgysvZQ",
  "key34": "4HqZAhH6dBFeH1L4cjz6DivfMdCKZhRWkWFAoRQG72CAfWjXnsZV2KuvFzawNJrgAaaHXPvHsNzpPtT7rK99MGGv",
  "key35": "5fTeygNMypk45kXSzPuEs4byWSJzbNebS3Em61uCA8VE9ZW9CSeNQXPJBu1sJ3d7HoTL5XvPiQVoSX6og1Jexfbk",
  "key36": "3Bmfbq7T6o37DpT63scN9vrJDthogK3KEx8HeubJn9fdGG8nz8QXEkjLkEFe8bTzDTxdHYDVjYRuhrgEV8to4cPi",
  "key37": "5cqwnHb5wZqLVpvn7YY6tSVDH7XaTRdiER32B1batwSnjh5hzkmLgu9guk7rDprx8pLXfY62uHGSYhwSm4szmCNP",
  "key38": "3yMSfBYLBQb7q6ssaPq48pKAhsgSLfqYssrPvNZqpYiHisUugwCnuk3Y9wiGhgUaEbrXztA5fWeWC9ohbfuMiSuu",
  "key39": "429sQj8fCU2LyJX9MLVT8zPZBwQRxPKDxHMMHHjk52bHrMSjcaFXZzf5bCzoNdkQ9VhuupCchkssUhsAaDawL4fh",
  "key40": "2zU9aAZx4VssjoYfF5XSrcHs78P5Ff13gh54FoPfSAFpsoigiqthuNUnWXHxHW71QWTN59m68g8hQsapGsxj1nyW",
  "key41": "2cjNyTVD2P316KxuDxoau8o2jW6ZbcW2JAawFDaWkSuMqRuag3wPLtQe25NdJpw4Gu7Vt361NRZCggHez7TKWQ1e"
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
