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
    "4hc1qyqS6KkN1XAkjwiq9A4UQxRiskV5w3Z66HqjH1q57eBXXSac8Hhk8G8sac7Ps2pQfRspRqeUKqH242ocJvXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EkwHYtFGusXKaMQAUdgazUgXwPFghUhbdJDY3VYnDh4L6fowpY4xK8o8JdnKMfZYpJ4P3Ui3w7A1UKo6h2m1c96",
  "key1": "aZYaR5YqPJKWG3ft3VPiKVUvF3dm8sHcLhdtCtkrmztqVC3f6U3mGpWp2caQSASFRSTd8aR9TqkVwb11AtMsdvH",
  "key2": "4tD232pKhD6m28tjYSQd1BPfUQFM6TTFArGm6vT9j2WejZMaJW1FgD3dAQoqMCsYjqreWhHQA7iM71ZzAdyKhTeq",
  "key3": "2aaz23G7v8Y2LazwPPwq5V6vPP8WWtyKzCD2Ndqb51rXMWaGsc7yFKM6wQa1xFMCq1e5D4N1BQv6ubBkfZowKt65",
  "key4": "5qWf7Be8zZTq3LnQjpFxFEARVhytEC9cofFvZRuBQCAQqkB26JiWuQMBYHHYU3wQQgPgRT9Be2kB8dqvsu2qmmfW",
  "key5": "4DKu8KYmpBbYAGDEru7atvxXyyDgdjfRJd9SuMsWY9DB9AXietXGuZy9RfWq2kTCB5sfUMUvhisJP894pvqrQZPE",
  "key6": "2ecg5UPPCwGt5oisrYBmMoYtvZgYVfbPYWtUF5DdJabMrdkt6xiSfPQ1dvNELtJgGA6xmmCJSXcgKemqHA7315FP",
  "key7": "4X4VBa798h47wtUYpgSXpe4SovxL66Pq4qDCChyHFvdWKB3zn6gDfRtLsTVoCR1dE9n27w8wLgNc4nGw3ufeezMH",
  "key8": "2GoZmpTtNfTE1MGBNVyQkHbPwo739JUfMqDGf7BsrPx9unAZhuMBK2DKC8jXVUnbyUUiG6eGcGadjaMeoCzywtVQ",
  "key9": "3QGqtSsRdWk5NAEk5h8rhGVBA5jhRd4cc5RZAyA6dqtGe8XU9ZztpZAF3PvqdCGkxNthenUtiT97Zgzf6EJFyGXk",
  "key10": "3TGUyFTRnc36nxChD8hgsE4jjNsAfTxcPev6SgvGnCqc4QVbZNa9MtGEBUA9gDegwEZ2HvXWHRejurGdmRcMbWth",
  "key11": "4fcPRxYmfKQUGJbb62hGVxdAWsVrBaKPtMjwg4tvrL77zMPJtARnzCgpvaEjrDve4NbzYo7YhvRhxH5t3JTX3X7r",
  "key12": "5FAupcqY4K1m4YseswmoFprUzdDgoAMNbuHZUFcQoJtnjZMS5k2z5KFoYj32LrK98FTsNZUAN1h1bQXBiK9xSFbz",
  "key13": "5RTKCcaQ6GYszVJvpkKK31P78CGeVnb7XaUao4mLvC9xDVbfCtc1tyNeYTmKJFHkvhMNzTK8YJAkZ3iLZDgEED1q",
  "key14": "mG1ALZsgxLCWwpvRsXd91PMjKkHBfwX3mkpBk68xw9nr8qDBt9Xm1f3opXcuuDvvCbsgAFxVrgrJNDP8FUk8W96",
  "key15": "3Jq3Qom48eQHmw4uvgky2B9JfponGgRjTza2psk8fTsNo6JygXwNVVSHdGfjjWksYT7RAXpoJJ5rc1iyt6KAngGm",
  "key16": "c9oL3mZNTzV5wtrLp74voTdDrtxAUcbavPuc81x3bjU8X5qpa9YunP68byd6H6c9VKhpLt5xzVGm3Q8xPCZXyPG",
  "key17": "5u5wnpXYYpjczX8Q1ZpQxCZYXCUg7HPih7jTEFmv8o79kFVCfNmokjKqxrzqF3Aa3GiKugWvAvVTmb34Kcd4CQ1a",
  "key18": "5PiXNb9uFqYVQuhL3rk711xsrjLppogVwcPKZZKzSp4EW92CyujiYcG3FJ3bkdiJCR6pvewH3Tyted6NTohdJ3pm",
  "key19": "4oXDTiHBFsFaVgCFAJnLyWeAMfGUusVc9hHHo1D3VhDr89Va9qLn1cbD5Wh2jgFS9AwBMk96Woh2xbZGro8DtBKR",
  "key20": "63SQXHeCYmh6e7KahR13sUFDxMSjDM7k4h6gQZUhQ6xg7y3U1AyVGUBj74tf9pjwToas8ZUWXy8tXEgXRY5sG16q",
  "key21": "3NBACyhAZjs6VE1JUzibGykChfkyr925CDskrHPZTdXGhfazr3Wou5VKdbbNwFFmEUWpQ4PRCzoQ4kZmH1CC66Hj",
  "key22": "3rV2zaqyU6fMNo3H1YNVgz3QGz6BzecNkYB8PEcK5to5sPTMtLyMhKviu8w6tS6KaPFvPzHDCjhYJLGk2BHcowFu",
  "key23": "f5ZyZ7CaA1AmdgjT2zas2QnMJwWN3nM1HW5kT5PSE4QwKJNruNgZaPULpHAEvxTYdU81Dr7Yy4RPrYetSxvN36A",
  "key24": "3rJJVS1oudUKhNZNuJNtdQYmxGogb1TCGPt13iQrsgJ9WGFeV3JagqXWSTAyg1RuPPwuKWaCQzPqneAqqyV56n3K",
  "key25": "2fJ6oJ2kswtTnxhLhpdCNVVGobnqunW51Zcm1frzzebo563rhLLMzGGu9AfdE1Lx2YLNvtmx5swmC1TUSSE2MksQ",
  "key26": "5AvU1ybbfEPu5yEYz8xgXGxcJeM3pwhY7uh32D1UeiNPQ6KEhAyyDtL79FE1U9iyT8fKYJBfcYqbFKstqaEFR8Ta",
  "key27": "4S5LpQXNXGSdXPTLqokP42tgh96xomffc33QJk9mC4gJixfCLkiLoCdCh9dojDiaRXJWpoKo7tzxtRMzH69ANwFC",
  "key28": "5RHTzvjD2FhVRzTc3ceTASJdsRg96r4pfckdMj4gbYX4tEyazxkCWEVVidufWKpj7yrugXF7hNEc546fJXus8oYW",
  "key29": "5BwgaHsdwpgGAVPXymZnKS59fyMNjR5mPoEGay2FjG9YBXJfi4yzKijyH2BqatwPPtVsyWGCq6WYmXv3kfMuhSsj",
  "key30": "5hzS7tNbUYvJfQRQyLHX8ZrAxKwouUoWGBDQxvUY8TpezKDXxym5KKoDrS39HQucD96KWwjwiJaCM9pZqjjD2o5C",
  "key31": "36GK9QXkyQzBJHssodSbudJXwSiWbp7D8wJSukZtsoDF4EjM1BRrrpDjmR3JR9GjQGBseq4DRvM4BUC9JM1u4htt",
  "key32": "QYapz8s3JiPQ4gKTa3vxcoHbCXCkyN3kAf6XH7QYj9AQ7ks189GWtz4PBfoWUgTugLJt4fvfArFXNeqhW6kRjqk",
  "key33": "2SSsrQNa8N5r13UgBYyJTQKo3BrMyzMYbJAuJw5aS4MUfFN1gfZ7JbAUNGAiLvnpcTvzvwp1M8yEFy64LCYt7hJZ",
  "key34": "5WYj9zsycUngbJJ6oexbzWDCgDEizfHZruVdfgbDRyJVZeT4vrjaUJzVfQpD1NjVAzW3ownrTKiyy4Wm1haps4HN",
  "key35": "29YFDt9FzbXUojMKBXC4qyfWDxTd5wn5yZ3maFVDeAic9jyPEBXReirBFiUGBGgSMmCjQpxbfgqzBJNWZHqsHV5H",
  "key36": "XNUCpUBjeJHbQJEwxjn8SHrsYNrPp9SKDH5KxzpQMLiSLAHgtointQ22f9otuNcSGNkLT7gs7wm7qUQYdkgqngM",
  "key37": "3MNhmA456zfExSv2S4fRTTmHttHGJPavRbfPLSkCnCUqZFFzPsVjiRV3hQACUFCBTwQ3jtgLSr8tY2NGGyQgtCNr",
  "key38": "5PEDYGcBLizYZZ7GMa2Veft5QHfQ1Qqt3dJdp6x2RfuLz4ZdSqntGVNGE33PDsmoYUHAsQhtSqJfUFJdiKQhdUV6",
  "key39": "2emXLQzcnX8aiwKXujJvDqRViPDtCB7ewP2ji5qWP6sLCBHfDbSqQTaUm1CNCiAkFbW6TqcSCUcPwJNVzMmNhsnr",
  "key40": "3XdfVMfs1iWEPRHbfVA9ux9N9iFgkoX3xjSb4SQapqir1rWwuaWDtoDxwfbaa3t9r7WNYd8gUBRmcmsTER8eBS4i",
  "key41": "2eJuyshhgynJcFHoTMbtuwD2zABvPys2pTnh67duYTDFCJUHEGjt3yWdGuN89tixmw6YC1XwLMLYEeQ7qFBWAPs6",
  "key42": "5qpRHV583t3k6y2f99c3w83e5JNdjdgNTbm2WktmWQkbmCuWWmbb6TYWvnfPZhuXBS8he9RTBwAz6NpeekDPZHQ2",
  "key43": "3RWFt189XZrkxG9ZuwbaSTVgbZEerL2vgBqE6E6CsgYBQ39Togt1BZhn3tnjRtrpTBQGZTWuUVQNoF411LspN6r9",
  "key44": "5KejNXo3XyeYepAfJMdw8V6q8BjWJzhjxdr9yo6u6g82VfTfDjhKytfgr75XGwGMNPe7Pj7k7eirhvjL9DxB5CD3"
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
