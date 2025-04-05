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
    "2oTjrt9PKcMbQjYj7ExdqipqxkkZeCRiEa8ZwFMGrAq297pCgj9zEHGZgPSjp7dgYQRPNhMbFHdUkFW7oE2Rq6tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A98TTL3FNfSFcXbn2fdWeufegU4pbZnwxZuWWTv5fkQcJyidUnHsMYbAW6M4Bxo8GoVuTGsaVsAjwYBfz4JJ641",
  "key1": "2Y4SGQZcTT4DmoMJds21atXMWHp7NR99YfzfZ3cXs9K6SiRb6N2kxkm9oaS6f6wcaXxMLJ6bnszUQ7jrMVC5xW5t",
  "key2": "2uu58niSVoW3wCLGNE8B8HCefmmP4yiABMjqxS3cCAUpLmhyZyUkGk61eSYbFmAgZxTiPzwN7QDGHWVFg3xGZfWo",
  "key3": "5ZwjVzBWj528mN2CxTVAYnf96ZEJbCdaJXbs6RoEPeRaRTSAn4ZcKc2XsAv4HArkhPqEAjLZLVMsqYzyM29JMrAV",
  "key4": "4j1vPF3aP5KTXHAgsbAA63SHJFrMRTgYL9BYW3rEWJgPsnyUBqCjrkP1WyHDT3gCyDrLZVH3qDDC79ga2aMceRpU",
  "key5": "y7v6it4nLMAKdzP4cAdVg7QZLoL8n7s5taiAofoib3xAjeuFGqPEDnJcb7zQGUR7XqB3AZF3jfiZ7RxSPWLRqxG",
  "key6": "cKJn5M3LnNejfXzZKQiQggZzT8NxduhAxr3QZx5Nv2JCVqVzjyMgR3swrw4hRSvRXTD2Hqonr4UCTR9rG1xQVuX",
  "key7": "YvL7RSpyMA2TeoY9hXzbnqPy8xkb3Q2KYS653iLPL15sKnFW8Kkh8LEkmQJszXs2UHf4jZ3PEPF2FNscG33ZdYb",
  "key8": "5SzqCvik8eyDEHQyUu6G7esX443HEx3XddQjRmksNtcytJDZCxnvyYe9n6MgEcXhTVDua6uxh9T4u6RrWWJhfkAd",
  "key9": "TijtmdcRFig8nECUFzCtEaSERQueCLbbhmgTwYGMgkyYtE4N3C693aTu5ucDsFbVFHpdqefpdQkjArKzcKzQT56",
  "key10": "5tdvxXhBmL9VeoJJgTQUR1JxUDTD2juBk2MKjvzt1jjiGDiiCNjvB441QJFFTqYaHgjpQaZMoTAqNB39d4M5pCTg",
  "key11": "64TZjh3jtydZGKqUUh42GaDzJkkkWAcC7cnmxMqirBucs4x5gejtsnbbVeCsQ1KT9ErnsaGVLCq6f6LqASC6NR3a",
  "key12": "2xDPfeC2yupEa25LmwX1P3Dze6k2wddkupBJe4AdjW5rGrXygmL3wMMDiWdup3T1gTBLbSdenC6c8Wx1wydpYUGE",
  "key13": "2t3Z4rqC7uWWqqsC35ETpn7FDwx1emtLgznAmq7h3CoCfcENXCbN3sXY8AWEyuEqbtqJ7qMrV5yR6eby7rX84d1S",
  "key14": "372bJLsnUjHJ9ccy3dkiD2nnFzZNZzBUw6BSeLCqt4jJp2RUtt97F8GCKT8bAVpGmgzPSHbGX9cWT6kaKstFHDRF",
  "key15": "63BMKFanVY1S5oNXj98tL5bgwbwGrSMzgo9HkU8UKuNPzHsaYiaE7nEmhGSNyjod9dfRsiYTuvHQePcK6KXwr3yJ",
  "key16": "5Xo1FkPw735Dw3JD6gfA6AF2JnuKwya5FSnwfW89P7iYf2SFAweo3SfWBaakWY5Ffyy25PzqZoKMSN8F4xSZqzbM",
  "key17": "tGmbpThe7jNttzMztg7WnekJFmctaL3Trkj75Yqq6i7bw9J8Q9thUWTJvMPKBjAHn6eHSHYfntKEBSX1jAr6ibM",
  "key18": "5UEAanmZi1NdxjHPGA2F5mo8vvbjSTnZNFYMkmyBtgKv1arNiGRaAwksNoLhnA5LKk4kz4zqc8cqryZdqeVKh9Vp",
  "key19": "5svLVBT6iFNi9XQ8718LtFvN7cT9ZfdnruMKSH66Td2xGEv6H2yCdYTAXCWdxSdThfLgJyFhGcbfCubrHCpHJd5F",
  "key20": "w18sq7vD6Dih9edKYP8BPZybeDUhCyU1Bb2kvGv9JNCA8MF1FjyYXewcxABRJKK52jfyoprv2ZLjVz1U2Sn6uaE",
  "key21": "3q5W86oUuH5sNXqtVPjkqrRiQJYcjQMpiqrozzsa4aDbDKKvRiSEwyt41cRMNKV3s3VVgE3chGYCosg5WbViyCyu",
  "key22": "21XAWhT9HMiD8DAov2uHVWs5oT2sZSwthwRw6LwXfXwUNzU6uyo6GpdYitU17faGsnNW3vDYqKFVtAzMfVSSaozV",
  "key23": "5ssb8FoiUp8PntkXLwridNfU9b1yhY4pTNgHh2zasBwJtpwEapVZjgQkaptrTSxorj6RGFnwvkZ5vWuNdSPSQDSd",
  "key24": "2zinKxke1Gp9rYLVB5BgexvH277fhYbdwRV3qqU8jHp8SAezoUhvueAvM3THt1orebisxQD618XcKsG7jUjZnGR6",
  "key25": "4wkacvspaqj1Vej7mxK2KLddWvas5oG6JkXf2RHkRK8nLaa4fBnRzSeGmgdZ26PobH4FhTsovuW9Nitw8iyXS3Zb",
  "key26": "3dGZKTWpYk3i2fCmi8911qynyFnPFarCcbrHaPx4aeGgKbr2JPXzmZq3y3fArudGt6AzYkfbuksvx3i2PzS4KgBA",
  "key27": "3nechFyj5QqSg18jaKWzhpUaVrzCKCdLGSPBCqtA4mWNKxnh1Eq3p3fpEQp8esBtmE4VNdyNAskEbRh9GHBxKWtg",
  "key28": "2A1za3EqumR66mixjKt5vZs69j2KewjYk8NXSGwZQYMsRHHVxGfHDm3DR9JnWgLB9rJHTKip3CopHMnTD9yXQHGg",
  "key29": "3zFYn3LwGRh7yoCsQgh5KMTKv3DbGR9vjjwZwdQdz18S4fWu2apaBSQy3uVQKHyEkXbUQcwKbowPBhPN8aP675Ai",
  "key30": "93zxPdLfKwbFQL4dHWKNuoG789CqhXiEG8SpzdcdGjW9BAPfkSvw1CS2aSQKqy8zqJZ3BoiYsn4BKrHH2ATsoy3",
  "key31": "2jZWkk43gknW1uFDSpqDVpvQtV3z9zCb6bSVystqGp1T3kYdaEDkLYLQqfUoZEder8R1Gxqhkj4UAZbQbTD38LcQ",
  "key32": "2Bg6ejfeXeLeFr7TAnUw6ABn2JbS6YyvyU7NiMzALYDvuNwherrvHgDUgZpoUscUUTA6fByLJtdcyQKLFYVpguRG",
  "key33": "5eUTHnzXaGjPygbP95wW9FDLBz19BHvAzbwioCZGu4p5xbw4w5csukqS9WtHbz14nW7YPZWVfj6zc74QV9Yqk63z",
  "key34": "23ULQZuxrtdMjaXG9LuefAxDYR7bqG8JfrJJkTMTXrJ1uut6JhVA6Bxy3T9J8EmrzbJbY4rWwJqmcgmg1k1r388g",
  "key35": "4eGb6J6zW4iKiWRb4dSvbzJxTte1sTsASs1NyJjtcXoAPft9aH4h1Mt68tgS8JBoR3hASPSMWkwUy8sGCThjZrtM",
  "key36": "5nvzCb8ScvE689hjaM7PxJCjjE9BuEQS1asz4DBwBPSN2Ca8Mqrw2mzArpg8jirCvsCLk4YhMFr72o74HeAaoFfF",
  "key37": "5Kdoq5D7KDe1twGKufsdvCYWeKgjihitupqY2wzieMoAxVN2FiktPGfVDEraLUfo8NjgrJwg787ZLr6HYfTtkLvv",
  "key38": "4ob7Vpit9r3yGwv8brSHj9QSLLPb3MmzLaHSRXGbE3XKFa3FCFqfADMqESqqVUxLEvu9swvzfxMk6qNtzVRZmkGT",
  "key39": "26X8YAaA2Kpvbrp7TYdfbNWuzap5c8Q5miywueZSgpgaPFxqu72pQ9dTAdEN4dMt395PviGtyQjkg98Pg5rrMNr5",
  "key40": "2rAJsPHnqhgVXCJM6JEniei9VDdDDr6Uc7syuHj8PsNet5A9FaZLQQBb37fHuNELucHQGsjWpgMt3zLoWrmPFyfC"
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
