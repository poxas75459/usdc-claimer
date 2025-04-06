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
    "QbErr7JZGdnKFt2jnQyuSqVfortughccuPPb1weXNXwmXFtboiQjUP27dMuLXyucKEHraVVPYFUhT31WndpwJRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y92yhnvrjjoPuiCdZ3naPa7jMxmeCMuJf21BNg72thVgUqBjTWmS1t3u219GpZsrW7ki2V1nGBGeCAaL9geQhb2",
  "key1": "46FeJrsgnobQ2MAnXYRcWr9DpgYbwt7Mz85CZVYuDzCkjjJwuFuSD3BdA49oie2SZb2Mbmrh4Z8A7ieCkyHt8mgA",
  "key2": "495MkDnHkt32e53KWmwHUEHj6yVZ7tg6d7iwCo7Cp8BbMFyGPeVLBLM74PpMfuDhsmEGDnwh7Rrx7S2mHjFDmJFL",
  "key3": "81JUv8toDzdopBVAU2wxpurj3v4M9CzhVP54HcM2iHGGiZ4hEYbTNe8VUTdydGcomqFxN8Qif2g3zaR7Rwm1x5r",
  "key4": "4RowUZBoL4HVeNaFRfRRaV7ozyAjmiv2uSuvjjNLgSoxWJaGyxZbbL6jTcoaGUKycge8FYRtv1Za8GVkpQMVFqu8",
  "key5": "2SSSSK7New5aC3FK5fS7SHbBggTnS6xEDLJGxJxkcYw4FnqVLHnaWf1y2thpSMYJcMLgLmdo2bVAoJiUHyK65JLs",
  "key6": "2ePt7LVyTVrnawLAj2Moutsh7qQDPoPECFM6DzQ1AbnGDULWJtvm9WtPttef1QjZLsDR57Avwaba6vL1xnUQpBpm",
  "key7": "21UHsjr6tS9BFUnyh5sZXszk5wPJ83e7XxU6MvvME3yfbiCZdVCLSJNWRTqHsVuuzCNAsiYpuYZgHS2Bxw2S9JVK",
  "key8": "5GSQtWsAnmqb9VooXicznVKgwrQLvZ8QxpcZL5jNzEmTJhkKE2jTZVxfCciMgpWka8zzGxsZDf1SvqQ31SZiffEs",
  "key9": "5k74gjQeeT7qeHYWGocfCPdU3ajhiUEU9hmrUJsP3F7t3Nv835DiheNg6Tqw5V2cpKtMmqumYi7rk537AHCtBXBB",
  "key10": "5uTWkMURv1FGxt5ReNVohH6LafLJ55XUqQTZpAyM5VMqrkfeZHRTPFbEfLrrWxRvurp2sPYNYgnQEEvKnidqWDGC",
  "key11": "2U8oEeU4Wo6QfssBXxpCKx1cYNZLfGv8VdRi2Y8CEvmXQKJE4x64By8M8TyMqU9zSKM9EBLBqyApXfiT9XWK7Z5a",
  "key12": "2LTbbZsLuuvw8CE99hbU5MykxJKNJCitHEypbTDJCTK4EvEQXfSWJme9c2KNZevVKasoz7T82NxszDy8JeWUjVqe",
  "key13": "5x4oYKsNNqjL1YumwcJ7YaDqJRESpP9oFaDZ9yxuEEXYRjBRJFkttgqTEpZ9mgnVRauAPtZ3j9mgNNHZv2nZm2FK",
  "key14": "vMXSpN3A5VL1LGSEVZ8zWZeeLBhuEH67DBjH87s9KiPwszkA8jezGSwuHAJeRoxBK34LLNANeRv3a1SED4uwybb",
  "key15": "21XU8714R9odwFpowos2tSJg8WmjttZNYjjGieFciUXnJ6ZPRy92a2m6WmDkPYqrzxj8mJTnw38nDshQ5wXTKiyh",
  "key16": "4R7x3CCWeQTeNepYkUJ3c45ptWrRauFPsDF4wNVMbfa2BKYedhcRYvnEmKuMkYFeg8KEm1nvoBi7Z6wRZ6HNypLg",
  "key17": "HmMCftgSUvRAVmDomSp97nDmMbk9AG1wHvY6uTxjcHzEYqqYpNJHvyHRwz6PHPitDxeRfg3d7J3gzZHns16Hn8n",
  "key18": "3s5pKv5ncgbjCTPNtzB6nxXiuyZeTsYfGKBgS37NvjxtNmXzVxi4dPZ1tomzL4YyEjM2BfUSJbkTTbVHZAXfcP68",
  "key19": "hrXD6WnLSHGQRuVK2f8biAWkFpSoE44an7K48gdf97owVAr99Xb9rLy7ZvE4rZsi4Bg538hUBbcXwfUv74h3Nwu",
  "key20": "5JeqBTVP7LRfzFzZUaLtyj11H2b2RwLDhuqjtWi1GEqA9FvFNwqsb2VSdYKdwsFVV8PFZJyjCBkjeiRNUzodrvfq",
  "key21": "2Yt5SPdjrLZprknrfzhyU8WHf1N8PiqiVAEahBKyWFX3ATijKjvJ9MK4K1VqJHgsg9LNf1Fe28PGH7uguV8k6f2k",
  "key22": "3z9qAtthmbXCyo8n8M81hDeShMeqb4MvXNjpzEEhJ9bpGNXSzvvvx7Z9KWUZYnvcWGo8xsMQCumqBvMesh3naY7g",
  "key23": "26kCweekRC87Z98Hq6Hvm2tyxgBnSmLhSNt85e8Loun1NWpTzFqFP3Ld554dhxFRW67NKJGVq85UUEAvXXQkEBLH",
  "key24": "6ZJhWAma9SQH8NYsdct7yviWMcBeAGStutTzCb5Ca4cDpb8sZz2Nm1koUESRXBQLwrpA41QCFtiUkU81MeJx9ky",
  "key25": "4rp8gZYLrbcn6bwNs8PFA2LuBMw8CmziNpMJo7z8xwSvUdfZkYvvdQwjFyBqfTX4zGtWXuGPAbp4RgYD1Un7Hqpi",
  "key26": "64BuiV3qY8HhUTneW1yLw6o68NHbv1C6cZ898axZviUTtcEBH22GCsUFKcjEYJeGTm8zieLvNCxxJMydDyzBy7Sw",
  "key27": "4pmxE7iXNuUqYN99GYqj9327rgcUvwxoBQPCGMm7LaDbM83J5ak1XhCdR9xbwnJnK5jot61CtspzNcXu6Z5YzmhN",
  "key28": "LG5FCCmULc2W5YWdkTirbL2crH3YJK3mZWC9DPYJ7AvamDNQajA4oHSu1b2Gb3nbYCwxiBGrSkNdJZPBuHFPwSN",
  "key29": "5HPJGZsqJeNAFE99VEeiqNuzahQit72HWbF8Ao6eGi15pWhULBDmFC23NNtxQnfhXKtACaHd8y5PpkS1zNuEFfjp",
  "key30": "3RwdmnqcXHZpWddP5tkguhxnF6rX9NryvVBN1QGKGzr5hd5zrN6zRbZBA11AmjaNMeipp8q4S1mXXwhMm5Dca119",
  "key31": "67Ksq7jKqQGkq5KHctTpmh4tQZZxKttRe9n6D9LsKuwyyrppMkYTYtpsQyTN21NDmmUM227uAF4dfUuUiQXHnZAt",
  "key32": "XiuYX5ANiKLRaJBj8hkSvKXQeio6RhDh43whM14ysb8ucsRg4odc851yA6SvvtGZ7T1eayS6zadGMbiKcT4EG1m",
  "key33": "4XHfQxGVAujtBm94yroUcbyZxjmitRzvPERwBr5VKwvLyLQJxqKdrqvtdJfUhgrEDtFtexg8avckZ5rWibf3A3Vu",
  "key34": "41FTJVkXj9KZD4LQQVGgHY3uAjyVFxBFBEetBKzuU5HwwRRY3NtDjVMNxKjiRZ8gNonfE5Z7LMT32oogvTepbt5d",
  "key35": "2NzD61aWfecrHEvDmch7HRgYxD5YRh6GHaMe5u2pxm7RNexpVTqh2RZUZXBP2k4zQdExxYT748YfnHfzt18Z5TM3",
  "key36": "3S79XcBaQ2p6GeNXuPomKoiRK3KT7XFoCgG9RtEtpSnq7UJRXvragTGqiE7o1PP652rsMGdeNz95rGzDbaTwNDkJ",
  "key37": "25gntchCXbagWo4Jr3T4JZzeKv68XcWyESHKV9xXLbtSGbM4qFZsvmy4zn36B634bzRfVc1CTCYWXsDE7BZCLuJN",
  "key38": "9dWZmnwev7i29enQNyPpRkCnJRZtTeQHmsoWyC8kdrbdd688AQS1WTCSRcE131RWBSb6ktLFXGr8TtGctn5huJB",
  "key39": "2EUGxPi7oYS1rHoYxXuQCKuDApeU3QqGd1DSqd9BgXwYXKwSM8QncrMj4weAHxwo9Gn3brgoaij3Mb9CackUkoa7",
  "key40": "572CdJgmFQs3qpdaAQYxSN2tDGyFAEfG6wQ25ESS7iWaVgrADGDrDjJEY7QqmVqTPdguaT3eJRtDivaRmLkqAiXY",
  "key41": "46rvR48xzYNHu9czkD83Lzx93dhoLPyFcBXHCFd7YNbsunNf9Yto44eTytYUj4mF35fjnJp6z2mL6ZDPrBeT49qf",
  "key42": "4jHgdxqaPJENSMhGmBsh9Ui6AD3RQwZoLSrknyNBNS4SpnHHbLxFL9GeQq7A8FyYV8prsucvsjXd7u7kGiSryU5",
  "key43": "3Wcjy5oXjZYsxCnPvN6ETbe8yFRcXmfMTVnBVV7254eccbo3vpBNXmfz4pTp5BVS7fPZndtdjhtXoVwSsJiLiVGH",
  "key44": "2dp12Worf4wbjFaEpagWSTFv4pAevMUGCqiksHXv3Hy5EQyDMxomqNLHcJTdvP2Wh31xVkmYmUiYN51eDhW2Hs8a",
  "key45": "29TZSAb2kKUgAwG46yvFyiwh5LxBywhuTpVdK5Ec3CgEPqUcQzksgVzPPTh92xwF8nAt5Jmma42Rxyyzz3L9WALi"
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
