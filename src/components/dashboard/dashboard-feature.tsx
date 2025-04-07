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
    "NST7SwCDmbjHeAHCNNjF5XxSqJX9MQYidEoe9FEqjqysJ5QqwgcuGqgco4HAPZiUTcGwCLXwhvHYKXt5qYfaszo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwHkZ7eDb38C59BdEPPseeh3bNXwuidhRFzqrBHJqzbvSE3987wtzMb1T41NvFfKKMeVopRfJWrUi7ga31dmRTR",
  "key1": "3SEwBSi5iavsFRs7XvPAZiX29PczAkZ46TPK4ru2ZHyJbTAV1eGK2V7LDTgyJYizUqVaUoJH2oV8nNTfnQJDa8Jk",
  "key2": "4bqyN7PAtdGMGsRUv4wHiWgZyR6ChaxRGzcekToPk8yVNcwsRM2F4TwDNuD4zX1FwJwTATctGL4ytD6mUikjU6q8",
  "key3": "2t7fvrUBYYAonq6D2XezFgPZ5gb49RcG4SLKbWaQvgViaMmncvYNBdyMSsrYf3UHvEQETnHAbACPP8Tfw1ULMNig",
  "key4": "5sviD4NcBNW8SdRvbNDQ2z9u7hN2cDgMh6RAbCLrCtFbvVfd38wtwkoaE7v8ZLrEUBDFtvCkR4htFbnLLbzudbVR",
  "key5": "4cMxqsjn47ubYdHXxM7SKGVpyjjTvTdubMcQSx6mSgzvsfzaExzVriAWg1Fhedsy5mAdT842QsXQXinUHGEQWMgv",
  "key6": "3Lca2NQzeEXCsgzzVA75zxh3boB9UR9VgxCZHYnGzzirf17bdBkkaa9i5pYP4ESXNfisTUFQNGDhKUAutD2G9NRb",
  "key7": "2Lq284zk33mybMKJiVcXtzSFqdEWzib3vQvR4wtdykkwudreL612r8uzrjXNSnawLRqNcUK2rQ2FpZ2qgX6yMuEG",
  "key8": "DwPtZ1Gr7Zgrppq5GPeoTTgudwG1LJCtz8bLxE1s2HW6iwkPodEfnHevDi9DScWwiYUqzBsxqqxYG7A1jCrwEGw",
  "key9": "2zwEZkYTzUcrneCQjqNXFDAoiPcTHqNsnduzDPL4wNN2TYdvUyfT8ZRBR2nbDqzdTpHfDKFzi8NYYCcXGE2qxFGw",
  "key10": "2FmjuEL85BwCVog8U8d2F6Qy8aub9ZDRTJYi4FkzYnhMhyY5H7f9W5cohMEoiXf4PJ6Tuc4XuAZgWH1HkfM5XnB6",
  "key11": "4XmrpjPWUREQn92EyuFuWGwwotiTY1apn1m3EgjUGs1rcZL7YKs2Wqmo3kpRgwoM7uMr5NBG8zkdnpHf9dfLuqwg",
  "key12": "4yQp9FSG43YFtc1mJrNKF4MoEUpBi7NGCHfipBEFbxTTQiYXb3npWZnDYFriEMABtuAXQYPzQvDB5QL2FZVyptoy",
  "key13": "374TH3jidUrLyxTtn8WrYgFsz96TrZ3YaXoHrjTyksWgi2sgB9qdQu4pnKbnkdxcy2NMpnqDchajJz6stiRFPped",
  "key14": "2fhdnzNP73UNwKseLS8akmkn3kUkRkYmGMW8rcU5Ro7pqNV5dVUkxFetcZ47y5CJzWP88FtwaA5JLXg7pZ1RCwBu",
  "key15": "v9f2qAaHShgccqbqtd86cWxk3y7cCebqssGDSpQAgGprYgPWmQsRnu8mS7SGAB1E37BF6BsZaLZGTsVCUsbjhJL",
  "key16": "47EwUd5SjqeNGY2v2ExvTiXVY5ewsZHVmDgyUoNzFHuBgbYNTDyinbymjt2mSDseHhpra2SE4sedqoHNgC4H6YmK",
  "key17": "5VcvYVDuRyNqHQvUiCFkVBbACK3T1q5nGivfpCavaKdw74GxvAHWJFvd6yhiXcmJhXymcpsqsgbp7ibQsMAVvpUH",
  "key18": "5Z1Vy9qi2dDPaH12wr23ENJJ81nZwjp3AN3WUgbyQsJkKB7T34nP4WipXUNZTaK8dEiqKFBAnwYbkkRaaiuMMQc5",
  "key19": "51Sy23sUTcW7qLUYkvVKe3CPtfSTGP6fXKYvZ5XYQxDTp3tja6op9YNHCeYJ86woYPaTdpUd8C4vte8bstz7weMW",
  "key20": "4m4B6ntPnHPRK7KXxfgqg2kUUyaXsmaMaNqzFjiTqBNkZRoEszEJna4RNiBRcYLK6Hnd9Bz6aKqHFPfEw9q1CoRc",
  "key21": "4wjgJRbpAR1jLWzoBDhoTVWvoCms2dvntUhUsuZMhGSQPRM8p7DgH8LZwuxdXwVgE3xY3fwfChimA8ykgBZMqrq4",
  "key22": "33oWiEGdM9AgdzuLUQ9s5jsthZQcxUFYmJvnoVx4nQLCshhwVgeHwrXLuGdq5G7zhSqiJmJzVTBSPb5m1FrVk4JV",
  "key23": "4en7SoyL6nyC45sarcD6j8D3qhVpRnbn7MiphAr5hqfmxYjWqNx12CMg3eF6iLfsGrDCtjKx5vcNcvf6dnSTvb1L",
  "key24": "5oKod7ZN4sgYaxZuiJjoVhgTvPJWED7JqKDi3hB2NVpLUsK2y3VNYC6rFupjT7WxWi1Fc3Ltp9aiCAu6UKAj8NRc",
  "key25": "3qfEUM9ja4KxntarP7JETBoPjEsodaxnt1SEWnDJzLHk5LfmatdU6MPSPQGqedgt4tNXyoBqJxh4XHCJ1ZH77pyy",
  "key26": "3LdfjigZcYTeGVGinRDjnhefuD3g5cudf8FJffj6uCpQhKbUzwGNce3dcnbudBBu1ddHikDYyQTMcLL3tL61Y55f",
  "key27": "3McQ3rw9CJhGiurjHAnoNfTa9KSpqMuAA8jZeGCEZ8tCeZFPEKuMb51UHxGwnR2sAgLY8yDLYMS8JKVCzxqYAuhg",
  "key28": "38ZmsojEE3QB6GSzyyEEijtDiFaKSEQES3EbZyPHQAqM2bSV1nJnKpZjyDXzcZZzzSYLL77PSEC2rgCxqU1wTUnY",
  "key29": "2NgqQzj4fGMCR87s6X4TLBff2HKhREcWtrM9ut7FEBzX5mUJuVCtUEngxJwfHbymDXMza4JmfQ97nLaFSisdnKv1",
  "key30": "jHpMYw1b5GQfqgrNoQ7mE861nMDkN8zsySyb9fcuLGhQWjTvqswfQGZH3tbxrNC38YHe2PGWJFdfbdnmGtqXqiz",
  "key31": "5YxCZeDn9eVXWvRYGCX6JNBFSmJuR8eRbSzPDotd43BVgyTWLFeAVza6thFdvJEBkoHYrTrHYGoGn7hwcvZz1Ksw",
  "key32": "sqKiyD7BjPwppzaFFmCjtGt6sFMJmCdRHpGZ4NwHBxrvMcV5e4eQHdjB3MxB5YqT88SkgyuHKJPTKzs64GJGUQz",
  "key33": "67LjWfpwscWmHDJaCFVunqks62axd4Y7ngJbFn5t7Fpirmvt8mmEEFcmxHKfCr7VyECFRm9VWtska3buiSuNgLfR",
  "key34": "3AvNGKyDwt4PKZ9axUJUMSgF8jsW7UixW7xYgGisX8jSHdJYkoo9b3bxjmLsXDFnn4kEerZmt9KuMgk6Z8NoMPqm",
  "key35": "4tJPDqmssgJsZ8sweH8JF9NLkS318rC67Mht1etq1KLT7sK6HS4YWkWjXM7VPzpyj76jmTVHMxPZDp1UPUiq8cPU",
  "key36": "56oVoLdoNnTSyNg5vAzNdExCrCK45oPepif5k6RV3Um3pRvR9aTwm151ryBTFe11Pn9V4Lc7o8ZpEssQmjVqTTDG",
  "key37": "2yxV8dZ8r1twWYsPvTKLU4n2gx9BP1nUPLSQx6ddo5KinXmmbuthGiTMrsLDuAJ8BnmhABQnES1Yqd7dxwo3i3S",
  "key38": "5atPa2EPpSH35TxnMKbTQNR7X7Gn1XR6CYHkNMi1yyaucWZo4QjuRhJmnsJtVC9T22FxtjjyavoAvwQtL9zkQinL",
  "key39": "4AqTmd4LKLDae6YcZvJnHevgZx4HeKUNV5thHyPqdDY8R1hQdAi8V2CeDiCuGE4y5qrc2DozLCQAAAf9JE8rF48b",
  "key40": "4tmpZgBPB7sHg49TffuLEzsitBfaa1FCFBMcbRZpBWUXEzmneshNuXyhPx6wESb8vFV3xMKCRKN63tmEWvTB4v1c",
  "key41": "61qqHBkyYFZWzitX7ZkNgRjcodYjrxQPYJS488ppszyYeaXW1P9RpB6Va6dnmqRHAPY9LEHdKZiynRQnZTYkcRcb",
  "key42": "4mcFtzawTssknemF3TAna6V1XihEoiTk1uAzVYsg5XtNamr5dQtFtmAgGZ6Hy2owiNf3vfdFyVey9jjxdLvLdSLL",
  "key43": "2XTRoki5W8WSZ2t7XXJDBu66zirvrk4ZiF9DCNp1rkhphGTmQD5LwK5zhw1hmK7JjpBkShxgBzyhwtrpUbHintuf",
  "key44": "53skVPTPNPeByawhVCPcZJvSQ5Z6zyQghKyqe2euo5MDdfeXX1KqNRujqwp8ebZeeodHgXyyw5sCKmnNiijLosNK",
  "key45": "zn2DTLPx4hj5jwJkBXKZS1fDuXJCeAiizT3MjuTSH1KRvhyBzttNmQyaoSY1iM8bbT9ey6T8Wgvp6SLBC1225Hi",
  "key46": "3pMmET4mnS3Wpsj5m5EpVeLuxrW8wGZC81TRmyPRXitmnvy4nbsPMr1yT3UrBSgQmqpZFALK8X5TfvHHspcrbb4f",
  "key47": "5pW3wUkDSNuBHYjuPNJ5EkTAfAtTrarg2EZq4cHBHbo1tLjN3M9dZY2ufHZKncpxkvvGZdUiTUVCXbsxSkynXY2r",
  "key48": "6212iM3ozV76XyT3DeDmyKw4pjLBJwuSVn76ta9MqRSFMLXobSduAJRDcVATGgm8m7HkyLJJ2e9U9FFETbqtg4za"
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
