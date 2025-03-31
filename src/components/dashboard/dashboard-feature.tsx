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
    "2YekcF4MoJdAp6XMQX1kvZfFcCjRocaqdhD7gRsK3HhHJ7BuscD7sfa7LxbY56KwENx11Tx29KRgv5xeXEavYVdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H8LKEcXiTejQgGarPtLTLaAWAw4VFF7fvyL1CqPixw4WS3TEZN3ge7R9MXPBa15kJbon9EQGvhaz1ahbkkWKvU2",
  "key1": "3oMCEnFkKPQnN3tFg9oR72sS8dhfwnFj3VUM1ZuWeJNx65vpFrcPtGmBKkggarnxCuUWu55XX3poXTNxWME7wREA",
  "key2": "S61To8SCedLtpAAjVr3tjSrQeSYipiSJD63LZTFHRrmCRJ5gBP9MA4WqYKC8V43aQZ8WqSKnJi5C7AHBom2tbeR",
  "key3": "5acuca4cyXdF2Pnmx6j3YAoDFXpfAtKWyPjeFP4QSgP8acg2uHJq653UpLBaRVmuPbbQxpyLMD4xKHxVtbkRGTtE",
  "key4": "V6ByGSXkbfGHak1EddaG1f3kRcHCFsdB1y6pUQWDLsaKCKYXXMWrLugXjvj85znXSFVGuUJbbpZeDDBztqS44wy",
  "key5": "4QoFwe7BrNFKaqBEEybbPWuWUjp7fpmSfQdWg1DTQ82HqjmRSArbJzEPgmyQ4wREzgLYnntCkXVLbeYxoYteU4bk",
  "key6": "376ApV6Rpp6G3VJHcTnJiYu2nLftBUM5Anr2F4CcVrFM9SZN3fHNYm9mbbuhMFcW5WsXXY5rfbcr4nrNDH77x67N",
  "key7": "665U3ADGMh2KnszScEshgRkXPp9j8wgVXsCr2K1to7V9bLcs7itJHT9V9M8sNofXUxNHL65qmV6fxj1Dcw2PzrMr",
  "key8": "3yzdSrc3GRNTsK5QPmNgJ3oHdcEZsy3F7BMszqqZtRMuj1HtbyFXbPeY8nuCphWiPT8v3G8vNtB6vpvrmYyhmiUu",
  "key9": "3oprQZe5Md8heYg1iRmPnzGDwDtJy6GbGxgXd13yWX9tcU7zNeKEqo6pAATERC8evZLqmPGfvjKpZpTcVbE7qCWs",
  "key10": "2Te8U5XQ9k3ijZoPRtRRT6gqGHZau7Q86brcG99ihhfq3WtCAVhMq6QDNAgeS4t7od5dBz5EQS8T4WmEMfo6K6r7",
  "key11": "5AhmEdtoehvLG1CBaxmCVDjP3xbsgTLZBYjs79tnLNfjwyJAPUYSatA732es2Ria7uX28eqjf98CNoE62BzXeZg9",
  "key12": "nRSWsTuW2VsfnVRMZHKFQMt2Uf2rZt68egCH8YD1o2rCzLzoQeufxTSBSnERhjCWVafGYeQ4H76dgun5iyJ3fTp",
  "key13": "3XFYxCrdf1up15HowiCu4Xp7tLG4ffDsPVigW75XoSMtiBHrW9qFd1wURVMSfAJhB3ojCxfpUqVpduYP3UB4cfir",
  "key14": "25ByGLM5RT2787dr8nDtt35Xu8rfutRetvVHmhjiWKjM3ftC2oiMxiUBfFRV5jN4ZSDcW4xjJFYoi9KaCe3oEZyp",
  "key15": "24gngv5jhmSHF9j4ouLjJh4JucZk3A8wQBnhJnHGadfDT7KrSuzMTQ2pRmsDcDBEeMPN7zNyWB4CWkXW69eF3k4o",
  "key16": "2TDSA2CLY1GyQBUkM4Tju8YC2Xt6GP4BQck5SgZWzSP6uZB6EqxpuaLff4ebmcpe54yMsrwuVSCjG9mXWN8vreJH",
  "key17": "23zbV7AXk9pNh97C89yFdcg9ay33C6CUTD6tFTstgxBbvVvCsjeZiE53bXmDSq3sBJwLmH5EGmvTXPuBa7WT3fEo",
  "key18": "3Nm9o8YVoch276RK3BRKBHH3ug2iV4uXqFMtTprjKUHHeSJUkSEk5S74vBhqHDGWf5biQ6DvAxcr33HPSPGrHjU3",
  "key19": "GpRA47LS53rP5ZqR1sCsAn6L22BeW2Wf6x6VETZBt3dR1BCFWLMgxkJ5p5K4eDPE7gtmMWoWrvVD3nUvaaPzyax",
  "key20": "5zh77XtMo2Z4W3n3fL27QAZKB83D2CZGpCNh3uCuGH7Nz92DdN1FtjAbxvD2DFJUuHGDAUThx27pNw1SyhGqdKJu",
  "key21": "3yLJYrpJT8e3Uh3DRxXAyr2TCRNhQ1TCS8HMyDkB9MdCcdLjnHELMuuvpFg25XgJf8HodUd6ujTqgJS68ja6tiMf",
  "key22": "4hvV1UJEyXrx4f5BMZqQ1PpetxChjGiJKWFqcgXVooH9LmqPRogRx9JDPh3Q8UVFruzpRHnvByCkfqxorAvVXhwZ",
  "key23": "3V3rAhegvJQy7BGZoySWWcAtvD2YAFALemnMjBTmoyi6NJPJUVvqMWQ923V2vW78jhSZqnmmpKd8q1Cb7tQZd28G",
  "key24": "2nSbZtSt3L3feb7iELDdtq18qqtFYxeT2X7ijd6edaNTSZ8iaqHZUBUwW1x9rN8upJBp58c26nvW4CUMU9RPUko9",
  "key25": "3Nfrm6H4HQyngwbUQx5F5oyqcEgqmwvVCUCGVseQYR2wmMKxD3zpdsf5tcR4vhVFFj99pmoeYdEtXxtXJetmuTSz",
  "key26": "cTzqWcam5JDRy2qjc6JXane1QsDmYZeSX2zqjS7AWAoHTU9Si73DCk4PoHE7r95px7CLBoA4cvgKDYoqQFxCm9g",
  "key27": "2JMcSXuUhxrAnwjoUxaz1YsuXg89MqwY2sbYAHY8SFM4cARaJy3iBG4kGiq671CbbUc1kbht7iAhSvyTr9rPMLgn",
  "key28": "2Nh97HNeEsfAkYFMRjBM6hjTPZBAK6jyVXHgtBZaz9Z52ZWRXQ8SD5mdYH9zrWAYdNzPiwfzmCoHbHF4ZKHaJeKu",
  "key29": "3oJ3ieBWDC8FoeJhJh76zNnxfo8xt2DfdtMcwqbvY49TZamDT4ZqK5ufd9QXegFiJg5iEowdunBU4XbSScArw8Tt",
  "key30": "ePhGrue5noombyyYVzeP1p7Y6xUP3hKZo7ynYvQo1oXhibGnXHtqyr8nXSnZTEfHjkGhpYqhu3iwpU8HqUQKPVi"
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
