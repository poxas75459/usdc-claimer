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
    "4ZXSJpMwPKqr6MYmNGK45Dzpm5UkGc4myPVKDZTrkHmVM3Wx9SQ2ezHFvtFiqwkhvSGvQ5vAh8CehzM8DCbotmzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAW3UuN1RkXZPXRYERZpVHJdyMR9Vyv5QFcoFc2G3oMk5BmeB9EHULLsLenrTJhQbs4o2ya6cmH1a7ewXPaQ3Lz",
  "key1": "3jTE5o7yX8GRywELRfJS47wE75tQn1SG6gGcnNDxdiwbkHZtxTvWhN48McGt6JV9RZ8SY4etfJLhaX8kxo41qN11",
  "key2": "4D7n5EGbwGkMxE7EukwfAwkkFiYEgipWAVw8VSsXshEqeK3MEwbJU7JwS1us4ZgvuaaCYtn8THw4n9LMitWYx6vM",
  "key3": "4wHPiiFNiwjAfLc118aqZiyRiKLXcWC87zuTFNPsFDyWRQk8n4AjEswS7B6ovart2Mb6Db2jLURWS4LDrBV38Fj2",
  "key4": "2xtHTpFzztDpmBFBSAuiFia56LNyrQJa2XaDNNKny1qps279XUQyTnBByZCLm6cPSSC7KFAZ6a1vgDVzAp4yomYV",
  "key5": "TwLn5h3CrzoCspVfwsunyCSp3qGRx6iFpXQzGifAvGtfakn5xH8EbPnyeEmMzcv5bEmNRxkjipQQEhDsovU9rBv",
  "key6": "663SsUXW1FtVWnQ4MkWf2Bom9t1DmKYi34XHayB4EBGAKCjWt1jq5cf59o8gsBNVxHtYqGSpZQNzfvckzpsGrGEF",
  "key7": "3b2uReXwow1eESi3FWBfWGkJbeWjhGfj3j5eXCzfJ6cfdBDbDQPiQcDZ3bUVgoFsBDB7F83YrKnKuxvzdoVBvZxT",
  "key8": "45ZwqdPpQkPb7x2VKoYhy3wX2P7AJDWKXHEUkvuhXZWy47raXUGRLTdaQQkhGdh1QCX651x3zietAoq1eccTyeEU",
  "key9": "2KsH1aWovgcjuPisffczpLct83fJVrsSGapgUQRunhAHWhmckGgHyJA2iKQfGuYmsRmFs1ABGJUqUMrwqfW9cpWS",
  "key10": "4xmk3HPAigkwhG6gHUysdsxWym6J6pJn7cNnkUj53w1sqWoSTqLduM9NeC5Q7HXi1uUFM4eweD4jppiHWkQdpCM2",
  "key11": "6msGPwXyZUrp94cwj7iDLMT4Nje2FiUZcXTPo95Vv4xMjcF7t9fmNrFYMTC1CHReLfAWie655tugrn855QPnrR4",
  "key12": "2QxMhmybnRkRjMUewFohY1aKF97R4CifYZzETzxzFrqeWVCYiw33MtMFTagzUxWg3oVFf8vGBaiM5hXZaE12EJDW",
  "key13": "3Zw4oMgXViHSz21aPuJZsRsWbp6by6bYy8uZDSHMUyhWAxu1s99vv73K4ajY7UijRSgdN94REQGqE6SWCujyStMG",
  "key14": "mK5czcK1U9ntYMz7EJzRZgCQQKW5kY1xgcCpV5pwBMH1rTcwJUrKGi8W9EdTsP7n9yXFruWDPz8b4PQzEm8pb8L",
  "key15": "55g3HLBPkV3JVuoGAoBbW4dkEKEZXHta9SfCUnBcN2MyYTAs3Wq3Cds5LSE8mKwrshEy5NNYr4m9HDonXkpmk5tH",
  "key16": "27Tvk7BV7N6zezNjuhPV2HebicoD5o6ir51hvqR613KdwnKszyW57XJT92SNazTMbGGUwxaEZHxprhKUHtV8QQfC",
  "key17": "41Lqbbz2Vrn2taSm1ppoTBkFKLkWYJRXa88BAjWksfL8S4yeiFBrrkwzzHag6pMMCbtrchKPNqudkZgAfi9mr3hd",
  "key18": "ytR6qnhXtvh26GKoZzsVk8PrReVQmbJTbFFoR7szFFxVxfN3H9QRdv1xdjBp8ptRqhjPeB9bLsU8Nb8fXFneLjh",
  "key19": "4SoVnjyugqFQ4Z4zkvNXHyHe4xozrpxWL1dLgzDSsQUyaz6kJw8X46J7WBjkEVkkm9hxnxvoNmghRSXEFZx5ik9",
  "key20": "2xPGPQTE9AArvZWoQbbEDbLzQD69LsiCEgjgzkcVGyhbUm3haGxRxociHxKMofjRvFJKkb9jpzPmHtsqjE7r7wmD",
  "key21": "56gjRRhwbfBhKn4wukBedTkmR4m8LovyeZTG7h8fh33agfJXXph7NGiKYkM22aH6xwWgXiuPyjzPzDJ4QPqigbAo",
  "key22": "2N1Qs9MfxLpJGxMS11uJmsVvKAtqDtYL7P2UUV6qMgW3wrqajP9aiuw9TeDX6NkjVCd7ZEVda6L9zMcTWRvwUKAt",
  "key23": "29ZrYzoYZPZ3V1R9nXAp26vovawwuS9cSp5SLfqDbgnwWY5VEEabchnJktTSq189n4XwY5E3U7QffLZLQeSr6oGK",
  "key24": "5XkWc5dhwpkuLPaY5wCHf2nhqnZcp8rSSyuirue28o1ghRMZa4jYvmF3RHVfuowmzWKcFQHzKHeabhbFndsjj778",
  "key25": "4JDvhh2vVFFcsAzQvPcm5GFxSx2FGhzgwRUpivfgfK9wpiCDXent959dVcyfpAPbAq1NVbUanv3NKmgSmjs2tXDT",
  "key26": "2opSuq6JGeJpy5ZmhMZ5seMDvWifP8or3zf8e5QVUxutRncq5uLr4JwfUpCzYtCNQQggUmy2TMyCbhuCmFgUzSTo",
  "key27": "3T8UYfpSS8iwHji7veUpSfJtjSzpVajjxYWEgyRo48eg7ps5afNdfLewYEUkk75h4N76eojRWnSgjVeidotv4cGk",
  "key28": "FFbS91o1SCUgQqUwkggriXUz2syg1R9s94Emqj5aiQWVcSyQfx4eYcD7tqLSupmsZgxnrGZJh2AUXyvzdZSUSfy",
  "key29": "3P35zHx6oYqx7JUdKgxUdoaWWSrcvxR58q5s5v93Hb7Buc3n73eE2NxUda84fXjKirk66Zi6sXpgNq6ZavppKxXe",
  "key30": "3u9mZXubD6jvjkY1bZp4Lhy7XyDj67GDEsVwn6kfReoPDuixdBts1AkkoZsJsWDLkpG14FprN9Zum4L7BknCCBWv",
  "key31": "2qdRzvdhm3kwFpXZ3symfBvnrm9D1quHejC7WWzjcBW39xt8eeeDJEi9KS3xfPgFkdcwhSHtgbsyJtZ1sepkC1nS",
  "key32": "58y7hCwUEFwT2j4fMU2P1KwkRMcNhdNETTZPpMVQC1HpRpWzU1gSQVG7j6mPgs6HCCyDK8vuSWc1f7xizxfU8ycP",
  "key33": "3qmdCnEvWrAQbK9DYuwYfD7KV7NJaH36TjEHvn28kGFSyEy1ggFL3VzxMMNTbz6dvA5g2L4ANt6fjGVyaQg7dSGV",
  "key34": "2Y8hQUxfk1AybMm7gkTUwdubJnRMKZemo2kx69KN2Ybrru8Sz5fbPvtq19xKixbYmJnwjn5WdamE17ARgNNG8TyG",
  "key35": "3TqKztT3ZTKnaHce1eA8z4yG9m1XdZDLucbfYEmHEJDMLLtfmKDLZMfs6WHz99Dcqf7RMVcgymL4UMBEDdR2BC2k",
  "key36": "4q58WPFVUZ94EHzMJske2f8ZZGCS4FPiANmXTta5kYnwBWHAaF5FxJ3YXnVLPRU45qdA4RRkaWhBMZ4YjMF4wtpz",
  "key37": "2u4Snmb19G5AHdtCobGWYHA4kJrotvjMgha1rKs6e76ik36fnHNkd7ZfGX1Ho26nJrKVA4FSHFmhPHB5JfP588Mr",
  "key38": "2fTxieDQ3uLhQu6PfLxYuhQqZq8m35MC8YqPibehrQUSApegWvJ7imJCoBp3EMsq7DhyQDUx2sB1Ra2xZunNiVPj",
  "key39": "2UXcUvKY8RXsUQBgXVioSCpEcrXKobN6bf8pvu2QDtjyzxVeQdvtPDXoUTyh2ZB2YzeU6cjmct9ba3WANV21ZL1J"
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
