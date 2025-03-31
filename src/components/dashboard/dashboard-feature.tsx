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
    "5j383kp8JGkSqdnGH91AhJVQ2HBSGvGz27UGPfUnVAeqWT5QFfH7x9ft2iaVcyCKPPUQCdh8EG5L5goFX8AniXnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "takchNvpcPrAiGsFraAunf3tqAwCU8i8ECe5ZWrVDyxyUAkhwYuJxXvdp2nsY36cNFrSHUTsFPdFSEcRwTYeW3R",
  "key1": "3cquPaCU1RjJaB1Gcw1ftqk5TX29H93tJictQzoTdNJDocepMK1MZdHPJgneGbw3BxVUPHymiSnVH62vW9js2Ekw",
  "key2": "BgJ1cNTf7S2DFP1VLUKWhtxNKDADLdrj9gnJV8uZwUKBnJFVh8k5ryM9HysH8HJ8FxqkKZ1MbdYNYtuYwSxcQLC",
  "key3": "4fEeqHqCFsadF6jvUctbUFWggYEBfWWNUqoDSQiAoFCrsFriwiwEYK8KTS4gQkfLGMax6uH4rzijangerpWv9SFX",
  "key4": "3LHn75AZVkVpDMBuXkQG4MtfHiLRVzjsqbHnYnK8GYkJzJcz6BtCrgTkpZGpowPgNdp9Qvy47Y1tMHMWuFUYZMQD",
  "key5": "MSX1ET3wqmW7vJhxy3zheGNMziXn64DeVLYxfpNxrkE77qZyfmLxnupZ67Dps6CPm2XWmmsVNuqWB89SS2zW4mT",
  "key6": "4wy4yteHj1uzgx8tvjbCATcriwh9KxHjCZfh5uM3tXbCz57qCGmezAS43NiUcXaKKt3QZDaZpjaiRNcXu8gnEyBU",
  "key7": "5TiXAeQT2ZV8E3N1LdW2Ze9i5knJZzP3nCUr5GQU3r218p95Sz3BmM1bKeUP2D1HopRTjmNHn55UPmpZroxY62gH",
  "key8": "4jS31UrDRJqvorAd6m7eQ7GwTStGa9jEibdTv3Lz15vLDdaqBRMzKb2kzPHCkraqgwja1Ro1hcJBGWjHJUmHJUA6",
  "key9": "4Ny3Kt3cFsFcCEdgY3Nh95CdC86pJqfNvr9tWsaDgC7Bj8g6JZhfr149L267P6BeZEwmA7W98QE3adoiyYTwK6Hv",
  "key10": "4QZzj34gioBn2fEfGxPL7RwRRZULxg67JeXA3D3tMSfmSC2gZ2hU1TrLYheVKSK5mMzjZx327VuTCEg3yxbjuCHo",
  "key11": "44MDP9WB8eciESQHjSd2RRxiTebvgYqJp4oPMi7CHMJMo62xpXvxk8UuXMAhpZsY7BtrnbpYjhen1SAkeepLCwLG",
  "key12": "3Drk877Y3GejFCdg29X6aAzjQY5f28XYSQfUak53NRYTcgih6iqxizfWYv7bxMjeYcJmgDwLuMwEkg4ox6dySTQr",
  "key13": "5WDdSyocYeyTcSU1ytB58r9nJhz8d3yA2AidC9LRULfZdGqvLn2yWiCXVpza4vBf4bBqt8rqvMbBVQdxCjmD7ouN",
  "key14": "2KcZ116C4cqWXp8FZTd5f75YSriJxMu4qmkvQhrNo4MzxPz2RdJHxiHnLfqsNR7LVwzPSxpq3XCMxveiyJjpAjo",
  "key15": "Xcw2sQB7Sdp8H3SsCAsybocjiqtvhcRFxfaDno1F35oppm5esxZ2QsduSQeZwvwdmeD5z5g29Y1gNyV9U4HvPPB",
  "key16": "yJpA3jo9NEBTzgwwP9v6Zno2e4Wnnk2zdcHbQ1jdYsabbTzTWce7dFCbjXeLx15HPPsgwu87ZzSfxANwRTviiwb",
  "key17": "3Dn53uGfLaoZ2GYUCrjXedHzswG81P67CtAWyGjpK7w4R1WbN45hrt4YzcttcZ1gRRsLUaguAfSCxR5wcmWEgwBS",
  "key18": "3XhWZkNTbLxeSN345xRwjthBMkvQarUHFcT4vaAm3WRoGWH5KwaVjwrvuXYRM9fNNADD9zCXTs8ZPXG7cQk6wthB",
  "key19": "4hT9Hv114K7Uuc1os23yvThYvx71FJhSdamraUGKBGddkuWXEyYbHbHkEsaSqcPdp56sAsptPDBESq6SwychgbxE",
  "key20": "2RpZajYqV9GPRbXZTqwKG1ZubSPwBH9bo3VHqa2Cv9wniuwC9wtSSow4SseEAbPsHrmS1Zkjyy4Re621dXp7Tmgb",
  "key21": "3hMBvAzHbEnurLNJEYSuufC11YGLJujGGCN4YRd6DfANsDRg1oZJZFAi964Thas2u1d7DUYFa9naSNtFLhjxv124",
  "key22": "4nQaEMMtTQDuFr8Du5v3SF7DEBUR3AkBdaTDYP1BECcQJXRYggTF9H3JMSchiS19DahAvXVPpifJppiMrjHfoNxK",
  "key23": "4TCxeAcuLBLSZRzgvWnUxGiYZjxMzFZPXF5HuuQnR239BqhWN1fERkDvWC8SB2cWYHAnbGs71z6jUYnVFo5kowBB",
  "key24": "4db33VePebTSBYGQ9MMAXZKiyfipN5PrNZgong9m8hwzi57MA9jWECaWykGpBUPjCDWSeT7EmAtatvFAE5RMJJjk",
  "key25": "4fhNDo8s9XMfGYidj5xsdEsQMMBQvm65iVzEqCnDBtQ7GmwGdDsRMJhe9gKW7DaQHmtnGqNE36Hzke2o1cZ5H1Db",
  "key26": "2UywvzVJHVhKiv6bS4anEkTCAb6jpyAnwVqz9Fgpmo1MdAd9HdQb6AcQ9K6HyBTGgBkndC6xawFzp6ewXnXCyjkA",
  "key27": "3RCgzBbhGYjzeJXqviJFqjufJxcJgqkBJR88uv9JYF43RbboCPATLaL9JCfFu9WroN1rMDcR7jDGjJ2qnpH56koL",
  "key28": "4rsmKywzpJc2RiHTpUE66jTEPGxQePp2Pgzuss59RAoZbhESuPFEYoPQaWBxx1URaH3NzyBhVC8TKx37yXosEo2q",
  "key29": "HEUWFphYc26r4WVyW3DdV8k927FQ68dRQtbA2otThuFfcqyVfN9sVW8E3Ww9BVXQafWqwTMix1PKT8bgn8XgfSa",
  "key30": "4yunT6W9XWhx7Tdx9Ay5fAtX7D7pXSZSABxs3nnwLrawVHssscoHoyaUYwyGcs2CwSv4rnpGwPQRYixpGwoERqS1",
  "key31": "3PStDdxNFRV5DGqjGaQvzkfTvE3Af9p8TpA29wo9jtzzKig12KgR3A8aLKexPQGzbsF6ya8SNhHcVpJubrvdQJfx",
  "key32": "5ERwY916b9SEdN8hGA6z2R8Cuu65RpLAw3vN4PZVAGDjwUNcNJF3WRv2xB8E1ftQQDghz5YaqapCMvTeBZnUaTDG",
  "key33": "hYTH2aopJUtDbeCimpxSyo2DtK3p1wtkzQHn8iyqCdyhPYxAFANo2n1fLR9cVosF39Q3s9hq2KJCV9XvTJsqrSp",
  "key34": "28rz5is5SKg6kWW3okEA8AuiYG2SidQ1YkoXpJqiNQUwNhEmwL44dx8TqyKHdzSedekWRBAudpoC3r5s32ozpfqK",
  "key35": "67HwucMhiUKrRk57FayjiS7KruRtVvasAmgiFyxSGx1pKZpqi6RzKUpzHTerfEZEzVVGdgJU2xGB3jFFh8ukBU8f",
  "key36": "4CL4iaHJ5o5nFWJn9co5qX6cWjv9pWkHWS9Neqq2BNLm5MMgsoncv6ym4T1xUDf1MB3rjzy92ebSEfPgDuuf5pJ2",
  "key37": "2PykkLphjS8JCXkERgmYothSqC4QL6rcjbLotef5iW1x6JjaxnxMhgSL3bkR69FjBAjz2yvya1M8E9rrNMY5x4Kn",
  "key38": "35vZpK6btL3qH19inHySfniih9FhDcyCoXMJuCfptxh4KCNDZjJxqu5sZBNzmjgqakuyf9DYc5nhtPFc1CM1Yvr7",
  "key39": "3gUS7wzhikMaiGY6UmAHv2HU6dBg7nD1ewuPbJRtMTqBUKeSFZFntdrQYVY15AWd2rcmXpwiSrLMSxFWmSLqhWt6",
  "key40": "5KY9a5CSi2in2oY2gwxGKK1Jmfix6AkEzYyS23tLcfwbnDhnC5cnzjccQe7c7wo4odpzAom3y38s2UL1Q9H7ytTg"
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
