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
    "3tWvTJbPvR8jYLXmrT7BgcW6MJWyvEvuwMT41F1CJhFfri2yiTsJmVgKyHvb34zPPXyd3WJ5bLWEywcWoWoKMzsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FhnsfBiijYJuvWXwaqwRgz95SBit7RCeeVGYbxALHhKgewqysaW7QQX7C2ztqAY2W7hNW5pokgHoT5LBXsWC67Z",
  "key1": "4DTWracWW9xjoLp9C8DctGnbmmT6Zq3YgihZse9reC5NFSkKeLCzRJgjp4KAcjcBA4EMwtPcnUrzUCwkuXTKgMMu",
  "key2": "3wpzMe3UD6dqiKqQmtYkGD48S9XusKurc5qyL3TwboYzmppCDu4qEqKqbQ1iN3TSa7Y7h3qLrkXwhQPazFXw8PRY",
  "key3": "c9rYUxFLmrQD7zT9o6k6BUtJGk4eisSxR7eGQ7S93nk1DFF3yjEZTrS3AV24WqDYFGLsrpprj2UyYHcNBiWYPKv",
  "key4": "4RST3VMV2nRAp4CWqKrBmi7whpHarrj3z1893G7LuUKC8Q4d9zFfUttnX63CxQRFzDWh8vDR7yLsNRom8PEhUbWq",
  "key5": "2ZcurKNoeiwjJDPFFedcj4TzaViR9bxR3ND331VdWZc7R9AMXf8Aw7N46kNDRpCgweE9F66kzzo675uTECNkS8F3",
  "key6": "37Fwi6ymE3aLsigsrzBY98a7qx2aruE8mZpJcRKcC7aV8b3rfUJ3S3BZZhotFnHDnXttxdDz4JcNh98zNzy82ZMS",
  "key7": "3GiwprdErEVu34G7PkUg2Jd3jk5reBpjqUqhY3yE5JTwFmfQX9716bx7zjdbfRg97RDBkgiykV6kaoD4npY9mUSy",
  "key8": "3rsyzjFFzZekpe3FVxNEeE1qvseKYsGDpYCpAWWVGp9zMotqGCQinaRn8Vd611BR7UQvfkSjFFuDLcWGyXkZweLV",
  "key9": "16HJepW191YgnitVtnNH9UR8Hg9xCiSKgccMwiJfLYfMSXLeUsisHFobVzuJmuNmJVuyosbZVxvJkGy6hnc149d",
  "key10": "2WVbHRzs4QbPeu39hHYeuqzytiCaFdqnnruGWWp1JtcZfvmYTrC3Fm1yxrs6kQUYapDTrbVfTcC4JM2SH1KSidzf",
  "key11": "4Yy5UeN1XEJtBxZ1w9AHh6Mp2Fdbc7y1CzenDSMzrxToFwWMLcCBDsCmNFWDi6u9d98kpsTLDf95brJm6sTV7czK",
  "key12": "ZY4M5aKNXCUrkcbYLazd4VUugTafY184t3hGiCRDDfDiiES6Jc69jW6MDF1AfQmWGXdvg1DNuWCwATfADtF2rbg",
  "key13": "3B2seQukv3xuyfnikHsLsoUAzdmM9o1YCZx9SMuLsjGPtDWq3QThTmMLrzKHV3fyt6Wpjs8Q7bDbmEbXF4awgbpd",
  "key14": "NEMREM8ZiPt1fVtE2Fugn1Bc97SeEjHqQrfjudcDD3GqkrmjeZEKhXXHdeiuZVXU3Guv7v7Qw9FDuSBE3FWVAuq",
  "key15": "2a4Z1JrLE6Hag15dCpwqW2J9dy7VvSUZGETz5MznT4Z4b7BqYJ9FrSvrZ4Ai5vZNJh9UfWyi4sRQ2aaZxXSKb48s",
  "key16": "2uVGEcUM7HkTH19hvV2fdVRKqJJuWc8ntykEHb4HNinxR2aqyYCpccqEu5JFrRKSZung6DayxVBAoz8zWPYjjWXL",
  "key17": "4YtJ3y8Pgppmz3dXwABGrmWpeQARJxx5LQTRpPgy9Uo2kXQZc6B3fp7U6WpAGSERDd5C8tcb15493jh8o36jz7xd",
  "key18": "2svYPqqwXsRYg9cBkXAUz9pFW1A2WwsyLuGzTyBqGfvuDEm6uKWBZYkW3DsghoqkB8cDkjuVpqYWtpnDPg6ikD5f",
  "key19": "34qtWfM1PY7mpCq4FWnnpLbZf9Tq6f99JZyq7WSPd819YWVLiVveUKYrseVyYjYNXpfLSqiJczUS3tAQWDNu6P7Z",
  "key20": "4wC6gQYvpzB4vEAuh2R6WKXqgK4aafKQ3HyBsaMVyFXN1rj8CTgBTwq9pRWr52TmnR4wbE6S7VLHw4EALtSwQawz",
  "key21": "5ZvwNn3uZRJ1Hf2Yq5kGMNkNQPyz2reKNg1ta4HQY2j92Xq8PEL8kKk2wA1qE8V6Ach5Nyt3HLmbVpwvvhmp4g87",
  "key22": "4hk5bCFHW9vd7edhGBDJ1VkYDQ3mAuhMThZuiAJnaoAkVujBXYmY3ssG85RdFfN2HCAmuCC4mqmatW4jPJnDQabb",
  "key23": "64RzUDhffGCBE2AATTAtLLF2tzLt93NM9HbjLNZgDDRLb8t331i96jw9cHQPhYCCYvGub1SpQhnsMmMiqEGjLLce",
  "key24": "4HXeH9v7a1sPMHqaWt8WtfKXrVAiTQCkmP2rsiQHsniv4JTjBhP18o2wz3FjM6yqVNEt248GW19gsSHRnJ73cZbP",
  "key25": "4dbdBxChT6QMCGekWkomuTnAVSiyQ1njwTkbqfLQGhLWaCAzmm1r43wXzXFrF2zXH6tEcBgCDUn2vKrtUrBRch1Q",
  "key26": "3Gtann64g68nu2Dvrw31VGFfJthwuCuV7LV6oionTsJFTR84BQya7jT7uhx5atL3ytwvcCX9bPYDZ44t47GkMdT6",
  "key27": "3QSg53UvReKEAqDzG43GYPcy4ep8mUnWE5grnAsPxHSnVuiWXU9ZhWh8PCKYaVqnqyeCCBjXUUFc6ndGUmceLFyY",
  "key28": "4F8GpDA2vVo75UvRFoLP3d3TKyMSkBM1cfCFbo2NfkvdWuxYK8kdczqWYHKh6efXuWhBGjsesxvRZk3yhJS9v5yM",
  "key29": "4kWeX5UzEVLW7o3hMStEReJhvsGfSDTfrr6FumScWV9bC5GdhyYQRDKTNiVdUx9DjMg8PLLgeGf7m37nNRCPk191",
  "key30": "2vycp7LXdKhgGGZTmgAQ6yXGWfQ6uNnVu5ntStR7FAPKxHNZTeunSY7T8EA66RxRzFU6cBwCz3zZouYM8FRDc8Ti",
  "key31": "4gwkbBbL7kGdde71VGA5mNt2EP52p5Tkswe42H3WycaqEcuNBCgKWntMH6fqAf3dZSYfXFeTABnB5TkMGiz6Ev6K",
  "key32": "nA9UZYAQPtLCP9RVdXhyhdKdatkGUadpqn5zSLFyMBt8r22SKYx6j1axEVUsgtNgwwr1dHoK3yyppPsFcCeoGTw",
  "key33": "64ZrkEiJmGkYwTc3sarW8EGHxJ3mwztAwmLFwWSTqSWH61qQpxVgDNtucAF4ezTZhfd16rxSLQNAzkY5fXpjor2B",
  "key34": "3ecKg52trdDXp4bMQD7dRtzkJVAsCsmy2kLencs6EpxcS7GieNC2w9gjU3suFxywGjUu7pcPAPMLpnaMZi4oXrMn",
  "key35": "3SKiip1DWYzJsCWMnyisrxNVh8mDUw1MSuHZbms96DTce9T2m4okikbb71s9Pc12jtdmpYWGVoeXwY5w3VMx261",
  "key36": "4mZ9Hrg9T5LKXADjYXSZPKKjMjHHEo62BYpChWMHk9X1jAkUQAD5ijduBVN2h2YmV65abR49zLWkyKaYtz8iPDvq",
  "key37": "4ZgHvkpuqL448xNG59W4ZC9bJAp1Bm1dRKpMC7fVRugReTDtD4xfKC5okDjAANf7JCGNpxqZg7HedzYB8RUFtnnn",
  "key38": "bBqSiiciwr3uW6ofCNAFV6BPXHB3XFh2phM2isubDCaPtrdmJFvPQR8tkUXKH8CvY3e7iEEfwqoNGDC9xeirhk5",
  "key39": "2Sr7pwzgTn8um7m2EaC1gAowLgH7DtFdcjdrrnzqAM3x8o8DvPKosDM1G3HGnf8WjqrWYd9xZq1qKm2AzghNMu3K",
  "key40": "5eRpuocE99AgTJrB69NTULkiygsEecDPQaMrsW9MJZsYwXaoRLqrYvEk7wciXwokENmdiuSCDu2mHBiY1Dqgnue5"
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
