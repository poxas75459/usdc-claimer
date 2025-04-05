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
    "3bg4d2R7CcX6KwKqv5n8VbwpXCrUvikP12PQ9d7oV4Re1ntTZQMa25c8LdTfNwoegmPtSW1AS8LCGL9NhgSrMJ9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9Lu8kaBzg81siwrDjY6DrHZ5trerf8g8uQVZ76MnRDE5D7gV1BiCWwU5v9hPF23VV4kH2CV7aM3G6vnqM8Eqiz",
  "key1": "4spxcbYRdjiL5x528XHaVKewhaty2VhJQTV1kfwBG2W49KyMUcUyq9i9CTQaGSbQ2R94Kh6fxvChmdpDRho39JbV",
  "key2": "rmLQiaZoX63JWrnpXeECUBi3rZUDBf5C45t2xyDpB27vTXDaDxTeng6BZihGquPibNGU4NigbBWiygTZ8TJrPgS",
  "key3": "3kGCPFQZyvx4ptjjJjGgntBpcAqWzjTmXJnsFtSKK8f84VEayU1jxSzYem7dPJirbsSkMbYsL86pUxxofKX6vXpv",
  "key4": "5sYpPwJhvNmmSsEqWc35qzzj3rfHq1bFYhmqXTNkGGLkmdxbke5vSMyDxajaUaXrwDjCK6qurjksRLqqaKD41pub",
  "key5": "4ieryuG8EUmMKG4wU5g5Mb5C7JLSNvzT1bfKfDwRQr1f3BgMYJZxrKUqAyevDgH8Lo1dVYG1JfHTLJzsDkhkwe9t",
  "key6": "3X4j4rfwYXZEve2unVqhTXrX3XGspd49LBgsTANmvyuQoQt72xYeRrhNoDrGJ2xU8WUbcThcRg2qJnjzeGfTV8y5",
  "key7": "216cTsQXbA22MVkMW7URzAT9mkuK9FWuQLy15EHmZosr1BBxEgbni5Lfqp2pyznPMQDLB36nZyy1tEpPmH74rDi8",
  "key8": "4eiyf9sjWoWVoZ2tbGhXV5xLos1XEFvERktTBMjXBZS4MPdtPuF6bKd9bRTFuWtTWBzoTL9XkyE3To5x27ywmSrL",
  "key9": "3GUmWRqWBMYN5yg8ySCd5JFSPkGAiadrrcwutfdSUsscNqkNE2K23MZmh86CCr7YjdGryQbJfA3Rcp59gRcxCNWV",
  "key10": "2oBq2MJAfk2MJoSUnJUVewKm3a5X1RWPJJ9VeLskpBiiJVXCHc9n2GrWkHjcjHQpqZ2m36B8Qp8sDGBRngcV9QND",
  "key11": "mTEdQstwztVUmcCK7fjhhwS5hXY3waLAwevCQpw8PAvcG68ERSyTvD7B3nNi7PKbuZDbBdof9h5kvL4DxyzYCEe",
  "key12": "UUmrjGnsnbRUKPWcgZQ79d6U6H4PewuFUFfoB2EaxndYw1EdpgKoBHDETogBPWxgiRb8kWHM4YoBcDKCiRRz6uB",
  "key13": "4rfrJ3DmVbJ85mtntFhDsVu7grn28sXDvMwahYQ1RcBQyotpjKmwUi9m7bDMPwe1azFzL4f4XwSAVcYgSgCQmJfv",
  "key14": "2P8knC2wHsAuW2Ed1iNfaPUNtivCWFWHduUmxJkv8jaXzVYtRJZSQTbEetniAx2R4RXWZ6c2P5zCFcvftYeQRzgm",
  "key15": "2ieeHrpxTPaeqjkf7GevriD8QuNHx9UHi1Sirh2SCNuJTHYncHroJXsDacksdrTChfJHd8tSvooFoMSKFZcGuMi9",
  "key16": "2btPDTfDqvN1PUFnVE5rPxDvFU8hcgC99GepiLj3h5KNvUjX2GDAttspcAA7zHGoJ2rfexkDhNoQqF5dBQUgHZvw",
  "key17": "34vnvE4nHuBj9Jht7WeefVEVKXKwZ5hyRCv1rJEAHBpEn4srBNkVvRaJAeye9Twv2PY1aoN8AL2xrbhsLX2C3h5F",
  "key18": "4hkwFwJRPEF4Sk8CxSrSERFRGPsDgjDg4dc5cf6EfnNUWGD7Qv2BYgp6pq1vQ7sbXi5ZJorwgNnXMuHcxJ7Dm1R3",
  "key19": "36hEMpKvF5ig435V5Gup3xmQwFoKYfGVT9oe5WpHV8uw5aYxrWPGtCAZwk9Upmjpo31wwvn54MdCzLxky9r9BFHk",
  "key20": "4kTha1subkymJXNxRf5FbYryk7FS8gQ4TwY8LTtuXoUSMkASh1EKP7znsjjweJJ3voN9TCs7gy38cqDiMDmdpxWQ",
  "key21": "3BkC9mNL33216V9cebRiEHLM34ovaasPrPKtjeUh4JaSTgfavsSPUK5QJ9jL7SDax542PrTabnr8rYBeXaUdYTCR",
  "key22": "5LxvHuGD8gFJDh6YGoHW76CxMkYzTkjJESdRHmsMb48m5oS2JqbLcvvEY7YXaYqt3SXxhj7K2mVsiBJQuhD3Bw3R",
  "key23": "4NWhb8UKhYUCV6FFvVrfmvQTMnkQozRmva84Uc58mXRyjygJa4H3knPKK7N74E5krMDfoAT1sh15biSmSwj2Bddh",
  "key24": "3AqiC1ZiWZVjDZvNVwQ4hustETQLdmc8aaNXumqgWddGceg7tsUmSj9ZJfwkABPEzGbPFZ8dpFTcnT46E5ckUN28",
  "key25": "5MRjZz2FUxX3PkMzfbXQu6r1JvR6WJegvHaSYadEHHKA1vtRfw5eVFDYDfzJJC6Eg4mr95sAX7petY4juvtC1EYq",
  "key26": "DA51hgwp6fMWNMnNnUQ1tJmkCZ67fWpBNjciMwFhPsFVNAJeoaUHxbtYmZJZzUQ1BJ7DiRvnKYt38TxU1QYHzaD",
  "key27": "WCodW3UNNbiUqnrKJUMv3fREF2RpcX4f8jwD999rKA6mGUr13JDNvQaQWTgrfhPxZsTeHQeDVMaMQaEns95kQ4y",
  "key28": "4Bog9YG8U5UA6EE8yoWzwxsmesqHnYiUz2dXNdY7VivrCuP9HtscsqZ7226vcCiki7RUVL9tha5pjWhGRV6xR3pq",
  "key29": "2ZvMGqKCZcYBMetKYnN6EnhvabVk8N8fPjx1nZNzhi8kSSwGfb4srQSKRgpViRxVYam8uf4XMU9gLpUnDBpUsx9z",
  "key30": "5DxGrczyQVau3jtNdJhy6kYXNSXhEcQYK2AZGEUXPYu2LLXBPxAbnUu5kArVXjrjAgdX3TacV6Yuwc3Wgf7xbfer",
  "key31": "yTeFYLTANG9ZYiLzRUZ5uJ2iD2gmSFhmoV5JdrX2Ubd2Mg41brCVCQLTQRV9tSdUi1ZDseG1VwHFDxU5gKNxLJS",
  "key32": "38bgqH6x6JS8wtBsM1DhgkrL591a9hf2JKPpq2EM7LiHwGyUZcjTpQZ6EsgTjcrPABX1VcPa3985VAQGUS6msfqB",
  "key33": "wihX52nAAbZUnRCipyg9yqFBq7RjvH9mka1CvCEYdKZAaKqVEyE6DU1M5qyasoXmpSyos5GWT9JTpBgJd29Wxgq",
  "key34": "4mAqYKNn2ERuruPGcrKzXDaZHXw1Uyi4bWxXFJsNFVf3uP2z32PGvPFRmxJ1W5gKHD7QHdDZnKS6sTNQMSAjHQkS",
  "key35": "264TtW1bJGehBwb4uwHMG44R1S6iJ25Ze6SBAnPrHKfXXtKWiZrkwnvxskfaNSUonYrxY7UzXWceKAwxXvyjUvYH",
  "key36": "cjPMzxZDm7o341KJJK8zSxt3D9qCsrzmpK5fQmxEGtf17WeK5EskasdXSRev7BFvose5We1YfK29o5BofBrsCnh",
  "key37": "4UnEeVm2dfDdUfF3d22iw5oaiRVVaVHvjmG2B1FwGPty21Ah3fmdZ3nNn2nkoiEDqFw1AMfNz9y7b3QxW1Rej4S",
  "key38": "2obikh6qA1zfQDVtmHG4FjssJGaKPxmBVnueUCw8L9RE4yV2vUmdZU95mdEFAwtsBWnQnumWcYyFTdqBsPh7iEp1",
  "key39": "3DLbm5t2EZfZWWchmHKAbGfK33syih1rNZdNHe57D8rBFz6h1j5h9RMcfjWV5r8yXGVvGqQZgAwJYm5bHKn9CDjj",
  "key40": "4CSYdt7ycvNyGS7Cdy3ebtwY6vAacFNvi5QQNaLByVKupJebGMQ3AbdHB9re9H5rsjCB6nw5QNyrNteMQEG7D6ek",
  "key41": "51JeBbPPpR8DKrq8VXGznPcVuD52CnQ17Gs69ThDMsoSjEPFiXYVkfhEy3Wy2ZM6w53fM1oyG4mxEpNfgBt7dJht"
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
