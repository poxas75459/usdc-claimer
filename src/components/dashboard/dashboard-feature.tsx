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
    "2iir1Cm7FfGP2N9YQwZfQWsJieZxEBYhnpEHDB5Fy7hVriVWg5M4SJnwMgGoHp9LtEgoY7DDCzGdfGg7ccb4QzxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WM5cneS8mPSRiLS38pcExHUPG9JAah2km7cSQpdMZHA2awwsZWb38GKFYrLYErEz4vkUyTX1idep119CK8n9Bvf",
  "key1": "5iuxhmC1w9gvUqkR4VznSpmLRLsLpJSzTbqtZ4oJLSfsZ2JYqyFbQny3eCaHSRiLy7BZGhsbMFjWr1SqGx45V7dq",
  "key2": "3Toeq1QnX52UKWYaDgwQZNbGsWR4Jk4T152QponLxv4SKqLXJ1X3NpqWKa2MR2J7rFXLTAv12jRaHs4eQiKEkQCH",
  "key3": "236fJU6R7vT9g7NvTyHK5ywcXLzoCEybQN5heHw4UtKb2Bbno3ExFLFYP93QJjqH37qaSAWjPmg7nemqwLcQqiqA",
  "key4": "32vhd73Cg4FBPeFc8hMf11kLjRMzYMqNWxCEhwvC8M4KH143dsUepsnRmv7tzPxWEk4RPifxp8gPU6P4Gn1zYcZT",
  "key5": "4s3QaQMSX41qUQwh6NEwWKLfBH6RDK7xAXvonhJ4txvnr8feZvwCKukZS9Rwt1wDZ4kt8KXwP1AjecTxEjkJiC2e",
  "key6": "3n2jdDZKaQSpjB9kmafCKExHnWQMyoPUrCDE32LwTn5RLkVQT9peWksSFQ1a6dnNa19MvPoLYnaFYmvfr3coP6gw",
  "key7": "5Tzt76sHcubFzjmQkgh83nf15tB2Z4rdaQfbAvJDUXDxq9Tz6JXdiV9J4gTV8mCupSxUD1Km1FjEGphbWLseHUP6",
  "key8": "b7DFpLYXBqa7cyE8fTSQRt22wf5s7f2jGsK5eDj4WMeSG3RPHCyYSyEddoL9yJni5vpsidHoosDsJZD85QVDXqG",
  "key9": "2NsTbNVHCtnRYhASVyejs5wqpr6DU281qWHAvrR8BD9k11BT72YMbBWeyCAEiupJk9ro2eXEEaWPiTFKpL5XobxT",
  "key10": "43TQjjD67gQCbYkakWwRbuYgwDKvn95Kp8J4qp4uJpq1FAGvfi5ccjRjyDy8NU2dx5Rp5UfRDLECVWGtjDoV1EGp",
  "key11": "3qsRxTLUZ119yvmdbQFuqioWF5oDXXrYmWn6d7qfjqVMkGJem9JjGUjU4ANqHfpTFWXVzAbzSPeyM7mZW53TNXqn",
  "key12": "smgBPKVrHiGiXS4B4vMT6optKA28xKrRcqitCXpPAu5MRL7useDKWZwHikVyWJWLcqDtkMgkFzmebpCCTDyhySs",
  "key13": "5pANHojyZ5Z2U42WbHhRDSbk5oERwRpdWodsfgAUTyUcBFFtr6W8qvWvj1ZryPLX5w1x5pfbu2fsKt4BZmckjwyX",
  "key14": "2PrQ1hyvZ2Y157qPvMKrCAEG4QJFmJuzwHJrrT4q5UUNq4h7KsL16E6mCK9h9UTFrM6sEYNeQpgwdRfEkATg3Wqf",
  "key15": "LrUQVom6bcWgWaZbBwCzZp4DNAiGzZaYHYmghdLr9ytBNM7gb4cAVqfo4uH58GNfgthiMC5cEK5gJcnSWs8TRBY",
  "key16": "4RwH7ZzrPs7DDwBXYjcaQvCdFF1WX94iiu9uTBBRgQkffi6ivNMEmVH8L9Z62Vspz9X4VmG8ARyPLanpeRFCAaPa",
  "key17": "5r2kQid3HAdHXi4WqxyQqbPTfmfXvXHW8hxfdzqdbzb87y8vegcbRgxkSY7deVqBBXqUshFrTmQoWZQnFbrKXfyW",
  "key18": "hKz1wSaWrTqrmuEerF2MyWGqs3hM6ZR6vZSxQo7WRPQBTz4awpFecNSG2AFS3TMskzWgW24NDy2Tuy37aKy67vF",
  "key19": "phF3oKsz5SB9c895vZBDhCMSjHUZAiCerXnmH2uPaFwzBj23TTf8TQP5CZyPQ4apj62wN3BH6Hs11B2vXMcz69G",
  "key20": "FV1nbAx6ibd7mdUaBQu8Mzw2pevPJaTLkk45SyFPqBWt85MbcxnrcHu2RMWA3PxRu8S6iu6u6P49W4c4EACZGze",
  "key21": "raYAH8iLaZusCKotEby8fHCH4MXRkFaoPBVREpP1x27nMBVPvSkiT2DztgfeUrQ1yiSqUjWNdNA7aQpRw3iQ2fQ",
  "key22": "2pcvMBKQmpSNLZZHGvey7wTybQKpj9yVZxgdaCwzfd8wriND7UpZCjHBHsMsnUNoDGwd2Lfhho4eACTh2hYL7JKz",
  "key23": "2SwA7wKWwyENaVADNvwMnzFjBn5epg54zvzCuMtzHZHiQHfksSnrbBsK6D8JDLwC8q4t9gki8LYZ4pvVvYyPKnHR",
  "key24": "23SKakTdgrktNRb9ki5uukYNyrtKECxsac2qwm76NsLxcT2YaMtJurB2K67ZyVYt3HuBZPW7TsmAcLMN9RvoJQyz",
  "key25": "5Mv9e9pzB5Mm7BGvw8yLhAYxvUafMpMXFcq1nU1ox77DPqNBM1RLkyUtQ94YfCqWmcD4xstjmiRys38GTUv2aBfK",
  "key26": "2Lz6er9RdLeERnTYx22Jru2YbeTkS6qcKygQhc5PbyBuTRi4jBgNF1SDBHs3cHjdyzgQPz2b77ZSbcNMoY6FGGWP",
  "key27": "3jhq6SruBsVpG8ZJfPwfpxaRnjBs47L93UvrVoDp5hgTtjmPdmMw4hrKqL11ZkRzmsSamEdK3nr4CW58quQjPSkY",
  "key28": "46RDkCBBCNVcKVVHJtjMNZZC8MYUEuE63LnuNQfrCoBMoWba8R92m9zQTTv2yG4YBFXNi2dK9HTZaUJck5cSWHa",
  "key29": "cufxn1qi3YcUSmQVr4NqgYoR2Bp2cBtCXaMqnZA574LsxwuMLuUcdQjEzMjB6E894hncHnSpzYn4q8bHG3oyFjF",
  "key30": "5f1yNhfMV4svQnxMqMwDCBhkW5mwudh5P8EtqKjfEotVerJ1suLRye8Us4dqqy8LikC7ifGj3LP9yP2yz8aoLRzd",
  "key31": "5d22977rBJiambL4pb5P5Q1zDk8pBkJeq96XCh9r2QMwSUMsStHkws46juNYZdiCpkbRsRn9d25MYEMqzTByQ47f",
  "key32": "B1gs8DPFCXuy6puJN6ip5NCHS7J2waUB1gJxmZHdsRfiN52ELYpXetwG6pWwVFFfMVp6abqffPuVcFh3W2gbuJy",
  "key33": "2xtm1h34WuEp6Jc5o6BTAvpQ7SvSbLizyxNWhGWtsQQ2WjtB6rd4PnFR1hXPDear6RwGi1cW5r2ZpdDtGe1BG2NV",
  "key34": "2BR1DJwdyBdTcM72iRHuPJrRDhvCtneQrC1cS3m6hKajb82BJEDeXcSWT8nifrgBF3B7CA3dEEUKwBHGRkJe6P44",
  "key35": "2jCFxEMqds4pRtCaWkwB6N4YDQHnmW9v3ytMKZZXhP8BiJ2ijd1aqikPcMoUQkT6ZSi3ch5TvTrzDM5gMTidoq2K",
  "key36": "58AA9hzdhXqhxBHMKwFvLqY28QVzZZBjyDRpTDq5DvNi8fAAWbPyVx2J6ZTNoUjqggz6hGA3MKpg7zW1arukPMBk",
  "key37": "5Bs528NxQWkZfupRMVCk85bm8ifjucoGt8bSc88wkPGbJAJbVdbPfi9nngjFiSHfbBG61JeFdg7wmfBmntJW8wMg",
  "key38": "4EubTKXQQaJjknj8YW6npUeNnkFi12oTDyxLZXxaXSpPPc4nMbNRGmUQUT8M47SDDXccFfpLpcjkLhpdXP1aJsKS",
  "key39": "4RfVjj82Cg67C8r7UryJSCgjg8CH5thTLGFEMgFNFYZX5ysw7eEMbtAqNibRDxJ21zxHgoUxD8RGRM2rJACNjmgE",
  "key40": "2cU6agALpy5XPFPYdwFSzYzhYAiivgHhiTMLTK4hho5PDZt1QMEfaeVnwVbztHpv2RQE2AqjRL5DZN5CcufbGqS8",
  "key41": "4PLs4vDyEEgaNvVeYo4hBqzs4wziod3N6vNN8XyLPym8S6M8n3H3mX6Kpg53PsyoeGHdmWVYLWaxPNTiszYTCcnz",
  "key42": "Tc5xqnKFjTZoXvtJHvjz6gjSZKKUpT7ufSuBkwFf3N1ckwmmnrkZPkq8CoBW4hbLecpsnuKaiJux1EEdUhyfkAr",
  "key43": "2ZCx5EH7JTDZezuCCo8ioBSuc65AhpSgnTAHuRGd6C5Z712j1fvc3iKx1o21upnmUJMZ5cv6MSecB84YX7GWtyWY",
  "key44": "2WCbKDbSJShcKisMQXU7fQKH8XSjrAFwutaCrnhpjnHBAnxDS2ZqWHedxGcDAPReex6SASr1v3iNpebPHN18eyvD"
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
