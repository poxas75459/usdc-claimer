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
    "4MSgoqnfk4v8pACK3Qov5rDCCR6M5h72ZEgPSU1UQCd14qiJDJBqd8BiySqcSbBAcvmDG3otMYZ2yTxsX797BVZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUdxErXyxvNaCaZo6uvZC9FrqiJ59KAxShn6V4aevWC5XXL1LRH2SdF7dfWmGdyy75WozbZFepohYkcMgasMSrq",
  "key1": "5915XeFeEtoSQqvhpqjkpiKuoXD1a8KXbgxWKd7q4T6gNRRTgwNvsKE6BnydwAobMJcyB4MQEAfGF6aC9yrodFrF",
  "key2": "4QuhnbqVBLNK8ycfCRvhydzPY6vearm756zRbKZ5Y7zzJfXVZHEhFPiqSZHHmjF61hrf9AsGKdhc7PJ7ZTTHWEv",
  "key3": "2qUeNqRamwzRKpR7PYu3uyaHteq39treLhGV5fYQCpntEtofvSASKE7mu9QNeRh6woCK6hCRSSCEbgasywpobnmv",
  "key4": "4xP1MFhWqRAL9NmnqaAxJQcoS2KMjDd8mCgqLzR5Rqe992SbSE6EY68ozhS7saWmgesQyqy8W48fe3UFBTKm9yv3",
  "key5": "4rHVv6MFianhbMpAK4Qre1h5RtWgtGNaLYfNHXLjwhL3ARkrugmhi6gWkTfTwP6bY79rLG4DnNwwZBn5zLwgCfj8",
  "key6": "K9TgVgZ1Y26TXQb7q54kekkKQEHGqHn4i24jTGrySrNbG5k1W6J7G1yaywULrhVuHNzAiYj7E5JcFMJQzJT2FFz",
  "key7": "5KrWaj6WZfv7d8t58SVr3xGnrnfpLS19iQgSrtT8XENLqCg4owrVAttu56eK9GeFJskBYGZpvAWQm3b6XGHkDj14",
  "key8": "X3UFDfqUtFKnY4T6MhEPGg6HjBsj1kez5bFLcAvAV7rnt2zocLJBQquasFzjG6PjRnYayGzC86kohrfV5k9zHht",
  "key9": "2Er3DL3UF9NuTqpCLAwNVSg9scB6fmq7hRT5Df4VXXKtjevoeoj3JMsomWMVvYZd1gdRuLvmwy2G8daoPxsaQfFR",
  "key10": "4g4unzLAAkFu1LnArLhdW2BNAeNw21r19nJPt8rdxWMy57rwEwLRmoWCNkKhkCUHNpCYPkKp1gt8QVJBibzv5pGu",
  "key11": "2vKMvC7hzVJLQCdzMtY4fMBugdSLr9K5Dj1FNcQDJcDmJQBHaAEwoGftFEkex9XVdJg9G5jLkHFZSfxWKPPPHM4v",
  "key12": "4WhVV4AWr3vp74twPycRDBLohaCmby9HXhWRw334Vn2tzCyD5rDCnBRasHuRUXxoeu3Bm9gVz6cWm4g28EcUJ1uQ",
  "key13": "5QEFVvkDRfeQ4HpDXM6rRoKi4eaDyCoaYYPVqiuqaX5zbzChEkW3rk5A3pJEUtPrBpWj7j8h22xD3TQ8xgm46CaX",
  "key14": "2d398gpyMyJ7UdMy34CE4gkJeGcBVyaBsvhs5eXVbuBgGpc6q636tRGHVRwsWbdzmPFonKpwH6cK5YMCbWzayxHj",
  "key15": "fv9A2Ujv5W9c6wmSCCu4igQ7PAekChMRff4XWAvhMgtHdyVkdDnTVZ3ohTAHaJUn8iAQYd3RLovLL6oDepNDu2y",
  "key16": "NHFVL6Ys31b5agi6T9zD4AFMJj8HtoUn2qeeG8FBBmGMQSAbbrAsxJFi3orPXoqtHV9g5YJy4nj8Zk2xm1ZFosi",
  "key17": "49x5Jmhh2jgrYMJ5tq6QRvULAbMhM4wuJynnQKMTeCa1H4HKhaUyp8e4k6C6MpVp68Gxv8JokYwSyFbyTQQUnjGJ",
  "key18": "qgTYE9vHtpLdDeVj2o4DY29Anvjx1Q5tpEj6YN9fs3A2g4FFwBVvu7fRXftiCc4rDh8PKpeSBB5nn6tTxZPDz22",
  "key19": "3Upiq8bPdURCixsYgKW982BNBWWPdTmSWWm1HHmNojXbwS8g6ttzYG4hZ28A6Kjk8un3TXSuGPh6pUmf6ZaRcuH1",
  "key20": "59B1mrmL5YeUh3dXZkzatQwyRWmLMwNXYgQju2DQSuLyBRPFTuKbyoZZynbgrzRTRavAZWtmN7f3vhto5K8FcGi7",
  "key21": "66CRmGgXaGF1FdD5rS1R9Nzm6oXQX54gF9LBushQQm5Nc5VvAm16gbzhRmJiJSQgb9HhYbi7Nogq1KQ2bRjK7Ea8",
  "key22": "635ngfNdD1difGWKzd6PcG9yzipYSEeNodc2bRZgZU5WpMZ8GXwAxFHocm9KRVUtmCWWk7DqV7W9Dy6VcAPMRaki",
  "key23": "2tmp7VD6ps68i66tbnF6EkBfhs8bPpYYaqKiGB5haNu51rghtmwd1DaN25mcJSjd8K33x9RZTFVJ2aYsFtfrSFNF",
  "key24": "4CeBRgcfSApKnQgxW6Qn5DS7YgUtZiy1shcoMAeLdhVFVQtm75tP12QfFkJDXwFqaryTuufoKEqJdg3FeP26zS2j",
  "key25": "2ErGEfywaHg9dzrUoC4cKpRXhPXDgGDGjpjmAZELhonfiHgjMCCX3FTF7xVUZPo7Nt7X2hsw8K8zu46zrT27jhWc",
  "key26": "4mEEymVGXjAT6qq3iRo1nRYsm8o2rL4J2nfngfMDq6kPFGgSJ8LzYccKQzwAizHtHan6ifRgeZtGhib3oa9njWBS",
  "key27": "2ZQMtYgt2h5oUzMQgQxZUpYpg4YD91wrKJmwvPbocjxiLChkC2tNU3j7bvowRMsPTH8p7n17CDXbNWpcm1abNvBG",
  "key28": "2tK1ARxNH5fYT7uPhKGdqCxXjpzxJiT16UXceCmsR2RT7N6LnVHWMBi9eeefumKht2n6jHPa86jYW1yZ8BXRMwbu",
  "key29": "4ycEiSWZa84T1nQ95WzQC7bVx8nTuro1pYvKNJuN4PLuG6cBdwnXeH1yEgfuh2o1LxGKeGTf6YHNN9YQxQrLcnXH",
  "key30": "2joEknvWW5inXtVdr8rgZMie9FHjf2rR42TbYFDvzLNjkETXZwU3nCCtwVrbuRBNQSkYe2iJhpq8Jp5cErFGkd5q",
  "key31": "5TpWfwir7ZiMA4kFtzsKdjyrNhLT4FhQ9rBTy9qxn48ncoXXbhKMh3PjERW73FbfKSy9FpvKD3qmiLXPFS5QKd8Y",
  "key32": "uan92qAAh6M5NnR51gUDG3f3Qy3bgzpcWAkMsXEL3EqvhH3ANqkqGk2hqXrmHMb1MGAJZm5RNJqRD5QGHWPopCo",
  "key33": "2SDYrS1M3uUJFYHTgud2e1friZmxejSzMX2BYVNP12dQE7dN8TNEJvcASLQT4vpwsHxz81LPcAYjrCJqENwHVRCD",
  "key34": "5EBtWns62CbqMQYZdMM6Hv3DpkJhmeExi6ZRaV4txMDF3gfVCn3yZoT5FANixF53gJHQpEpJwHXdj8pVrumUcqZZ",
  "key35": "5kAzQMDzD7TaEkcDS43H2itS7VfkhPTut3S7Je2AnRYTuNL3SKLg1W2WECMd5steZC5LXMpMFJuCJnQdcr75Um21",
  "key36": "32YQgkxNRUjNVC6hkmXTjhxkP5L3w1QD66SbriXsn1gxXqZS3Rm8eQQMEaEXxkrC1fBqS6dMAYNAMCFeGnsDee3N",
  "key37": "k5yN67ijMwvnqjEon5ryv52rSjAUTg44yiYPKSxAAt5eZcnujkzi9AsDmVwU8Fa61AY7FfxzJaweSUbTB51p6Co",
  "key38": "4d1cACygSuCtg3LVtpM2HdcrRXdJwaMEzQX3hFvAJfYWPyarP7R2PGprUifiuN5FReUfewpcz2eWbkwwfdY8UQnF"
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
