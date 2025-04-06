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
    "kZPEVvf1NgpXCVTEpxBvma7BUMusGnYjfYYEjbLT3ui7LyDG6bsJHx2NNiMRU3oxV2jseeoJZraXihXKPYoaJW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUbbKz3P2MSkxQMT3F61hfBeLmwHp9t9U4K1w9pC98D3wr8bovbeSropfQmxRZi7bNH4ovWWHvg6fr6HnJ3GFY8",
  "key1": "5QvXmyUZGnkyZzKsjms39eJASfriMifRMHhySo9DsAjKGethQUa2ujuiAgXZvJgDdwoS3VDBbptbCJBHHkXUoi44",
  "key2": "5GgmqMLoBDPk89SpqmdF1S4fWGkr2tDyVdBMxR6JVKbgUMAu4FNxuDMamj7vQZFSBuNpTMupndTDVyGJSCRfRBrB",
  "key3": "5mbeyNgcZzAuBCx14jyQtix4tUfvNA3BzQn6H1M4DPsNWrPJi4DwAAMiXtRNeUr6bSK9jDBXEXCfktpDDKfGzstA",
  "key4": "2W5rHtUMEcYUkpdPi7bGfHLvD1eVo9PiQFRrUkHo6CtcSU9VHBLzNgaWLyQ4HMmRjDnQT84HPNPGGFTvDTdiqMr1",
  "key5": "5ebkw1tAovCw4YAwDWyNV8JEbcsdz6aGkjGMqdSVbcF11Rk8gkf5aiCubdJPTrX1EzpQYAXqtt89SKZtmhA2WMFG",
  "key6": "3sX8dwqpUmLLnukZ7ijLmMVT4CachRCPBKmmuJtVjowEViVpYEpPctFbhXjWCJm45BQkrFbsbtQ8jDFbSxFLSef6",
  "key7": "3FWtnvnpNg6ycRc4ixpmJDg3FRVj2ALe4KNSocCmBXBGCZwbj89PNiegaCMEJxEvmrCFiuzGXNa8eWtCvnPRZLs4",
  "key8": "4nceL3b9KqzuQdNQHDLMKcCtRwJz8evDY9kygJzNhH8nU1V39aPSvCRdg5zQEkF5seGHmi4gXhZJM2briuWkQxD5",
  "key9": "3aoAEZ2j7iwjbWv7QR7eJ2oVTwgfYjrV5kxdizkqQ67hVXbzmzAjat6sDyQ4WLCVbXkCmrUsSCF4Kdwp7M6wcbge",
  "key10": "4dGiKUfKLZNPeiKECVX2BHKMFgJYTS1emu8hqj7hRDt98SW4EhbpMA9pFV7YMb6JsDMdhSVfCVEbByukC7BLvTH",
  "key11": "STU26vUjhGmaiN38DijvqScQbMNbc1QrpqaCrhpAZCEvnFDBT9ciE6dXQHqBRbTxSKVWMbmEqmwC6edzrtJQGtf",
  "key12": "5xt7cLsktK4sHmnARrouXrgtHamwFBceV7DqTUbQkVTaGdWFgh3GnYfpRwYYxgckJZ4orD4undMwzm1MnkJPtnYX",
  "key13": "WXufoxHoAiW3L6B63WEtKhbaSK4jnPtMdnozNWSn9b1sZs2ed1wv21MGnBrQEwD9k7uQp3o86DoRj6inNtpi6mG",
  "key14": "3WSwBWb8Ho7naDydMGzVGzGbRUwTsJjCG8wUffTckhkS9LxjJvJ1433uod96qQ8WYFQw69QrwdZjG4dHxq5jWWwr",
  "key15": "21oUyKYw5pVBNxZu2qtE9bJu2MtnBkajU9wa1ZfVvmtSejuHZZKBs6EoFxRQcbkWDFdNWVk4ZehNDCFkM15VdpcX",
  "key16": "3ZFEABt5xBktdn46b7PDVpx7eiE1p5n3e8agW3Juq8UyTQZA2a73FDvJwAXrefBd16HeuwsQ7qpPyMBLuDtVvTQK",
  "key17": "2zmg6ysbJ4Sh7Ux9W75XYWf8WRFLaUgEoK3zZ3jtUKMArdh99goBxv9wRRuUE3RM51AGwdqVAmtXXEum2z9ZuiKj",
  "key18": "2W17runMWG1kSHvJgwr9WMQgoE4PYADj3umsat5i6i97QARDiHsrSQ8tdXzg1kZH762r7Qvd3iipJE7PbMhGpotT",
  "key19": "s5ZgoWvePV644s1Uvn3UDwiU5zthUJqmKkg7PiFWUjY78DGrq4urmz15DWswqYXjt2EmcNobwdjCHsLESkJs1EC",
  "key20": "3P73cTFaF9jEXvGXb9VH4UzFYeKwdnuf2xoULDT4rthxR5LBTVVgT8cDKjBjCG6iSD53qbByqhMiVnY3eDJPrGC7",
  "key21": "5gxS5JiZdVvLRWBcVZBFeY9Wy9aJ8YgK6eW93uJqhuKoGmjPy75dVbDYEf7qB6qHP8EfroxizhVzkU9BmicfTEKc",
  "key22": "TymTx6EnAngGFvMMEhpELM6tcciYhbe2wFQUAx5ppMtWUgndXps9JwtYiRa5nDuazwPZAJJDvdSMrpe7hbC1uTa",
  "key23": "2Sa8tU5xbco1cXoaHBvKP8VuEJ8CNvZQDh9CZQmVY4RmX4xjH44Z4dE65mUjDivjTYr9nMxeoNxDVZSTuw3W8aqZ",
  "key24": "AT6Nok9Ai4ef3Jix7ZbiTCms5fhuftvVqL85UjVVQBWSszp2bt6PojWXeWqnpKJxuyYifxvFdNns7cFDbCnEoGV",
  "key25": "44xRcdSqjAQbehx4UZAV5vGpi2XvSBuobJPFMesu6ZCCA6Ue6gXQprrp2Es9n15Ng6yihSjgkAk4ME1PSRytcXBg",
  "key26": "2tVKZN7i8HS7DQ2ScQPuZJoP4q1DNwMpcLPUvhkaFrGboCwMRfFbFDqmkqYuybcmjsUoFyvfi9YC3UV7U4MG9j8L",
  "key27": "3JVmrgQaHN8GHrE4nyguTPu4Q9iRMXPXUEJ5Q1NDw8zTJtGapS8nzKePHBXQwMuNiCqzwaf6U35fmHWGM48zbyZj",
  "key28": "2Zc5wNcbLCoZ3uzhXXRgKxhgXAMnTEkZZPAHMQbgUnVXwwNuFTkAtLvYJtSDaKkZMzp2aotnhJQPz2nhtvf6PA5y",
  "key29": "4EsXbgpCFBocZo1qAxMT7GS3cD7L7WAz9CNBgbWrqUK6GuUpphLEPW8GBGUSARHRmn33X3CcVjB3i1Z2mxcN7vdb",
  "key30": "Y4WZs7ep7LUwoAfGUkavink7nErXmSBVmo66Vjpgb94s31R7MHx9Rs2jqHJ4byUYa8jStzdeeHUa4csjo2bXE65",
  "key31": "gkMkopbs3aqYn3LRfrfqdEicEz2b9jCSTowziGdo2as93t6XR5c9jeo7XYhvLtJzyPo6rBTQNQjKyp9NmJaGFHP",
  "key32": "4H7UTe9ZXLx2yS7W8utEEG6TkyKuHw22MC3chuVTUEJQLwdwVesJ6gGuJicxUERfHfcguZeUZVhZcQ38JJbPNrVG",
  "key33": "5uVBmd7vbtug8jJxLciFUmPiKMzsq462UoJJF7LdjSLBTy5KRpMQBjqTPjQmP4uUbfHmuQVWBByFdEPmq32AtEFz",
  "key34": "HtxsJsT5mttPgXcZqrgwDt9MGPTjDUrLcwg4wjEAa82rxpBtkNzrjoaypRvTLhAKLV57cVAFe3zc2RQJsbKDKux",
  "key35": "3L6d3rW9VSFM2uP5Fc4Rgs9ZMZShrC7LvU6dvJtuLz9uPF4JxvHVwTJyZMSh2Etmb3subeYMoqebf1Nd5xBwU4qm",
  "key36": "51WXJub18FzU5Aaox3Z8pSPruBPpCezS6z9bHubHSHqdScYLJ16Qs3D8NXUHcmR5z5Z75YsW2aECucJuU4sinrhA",
  "key37": "3xSGeAGLSye9tjFCMurtst4pcwapSj3mYhYMrsQ6qXVmipKRR8RrsYxFQyRssbPStyfWbrYDikKiQ3mww8nvEACH",
  "key38": "23WLiQ9fmgAK6qxX4V1MshkXr8Y5hpM8wsP9KA2fEvVpLwkjaePcSPWuPS7j1XqcnUp7QeDYjq2eUnXwCYq7ubjW",
  "key39": "5VTJhZri7gPnqbydnK61721VpB3GK9HiDC85BV8paMYoQGpjpgShKWKKZjSvKwh3g8nAWEJPatLW439e49kDk4tT",
  "key40": "2UqGBieGo2d1oDdvgXibT1MQwza4hyeA1pPd7vc1aqdc8MC3g1oa9s7vdSjP79rfsQ1wLn2wABtyJsn5S3KaMh8X",
  "key41": "5Nx2g19DEY2wJyKzrCdQBcKPibCF6jRz6mxS5L8uYJo2owN8XDFxYXKwVjahaomn6g3n8ZLfYXVTe3X5JB2jc8M3",
  "key42": "3NiD5q8x1mMZ6kLy3S7DqUTFif1ucfmLDyTh7WsjBegK8R4FXBM3VjmCiHcyo3M3SUiFTtFaAagyFwjvuiz2zCk",
  "key43": "5zaH2PJuFHzpVWhRFepqX3eVu8vM5uH6TUBsqH6FWpbcFHYwtCTWc1ytLpecdNzZjvuimS9ah9M5jASiZYy4zVT3",
  "key44": "48MYxLHEP19YzV9kmcPqgQtcCDtoH92M2Eb7JPX1DF2G7ctAsyE8AXLXYffousREymTPMPbUh9YCP2VERKfCUwXb",
  "key45": "3pYGq8vXmjrA2RNDj9j7kZsVoyZdTaD8bevYBLAiUX57r3KRbhx4ZpzgTffB13xYriqZnpAWo2B3wDQ4q5DmDorF",
  "key46": "4PRKL9aR8fLzdVvbwQGa79ta8qfU2GYiSe2gJkY1JnBurcwasLkD18aNztAAKxj8cMCSn6vADMDPE1ZPbfGtbDyp",
  "key47": "BQoDrQz4uuMJd4Li3fEpXVC5MnZtMbn5k5vQQSk4Yshu4swp89ay2NuWvSGenGsqT9bUN7fdboPHuhrGEetW1NN",
  "key48": "4LEm8ULwdZGgu3xpUeBXDbqZNGQiFzhYVDyCsgypMADZfhxniU6nVcsxZdcDtg2hdxpJxugLzCQYTDE5y1aqJDZb",
  "key49": "5PnwTdKEsRccF1mibGgEm5j1RNgHZ1h8wWbVbhG581dqDsF8TxPMhn8cAfbaEHpoBKrLLSFFDoDoo3ZzUeHqhRTf"
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
