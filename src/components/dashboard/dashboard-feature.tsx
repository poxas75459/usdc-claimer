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
    "4ws4ekVN7yn95J1gMjkNYc6RLvH3mXzvqnHABgEXhtSE2Js6ohtFctn8eEsSVmpFuJLPwuZtUgrLh4G3joV2jXmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NJgapbkxBjxyXDk9dNjHwpk9zqoXQTA7BZ5VGSCk4SBLUXb3wiJeNytMWVuDJms7qH5455T5NAf7gXBxVQsNVpe",
  "key1": "61XSyrKBbsbhMcVpGmYRsojfga4rwuogi4dvJELHjfESJ9civW3zMcch62Hqm2p8BGaBCYGAxWEuHYVBqMX356ns",
  "key2": "3mL8pQBeLZ6LXxhhW8XqndUy3s3R7rGEFeEcMTxwybFr3p7MTaweab3ZiLD47zHdKMhp5Cn5FSmPat1T8HZGTHr3",
  "key3": "4LcCECzttUqcgDsyYrZ2U2fEbnVnK56Jsg5Jkbs5g63SR67XiP8idzUd1BtCFBnHFS8TDh6wvZ4BT3wibLUBjNoo",
  "key4": "22SVcPjhLaK5Z7dfWJez311JgCMqQMk9dXv61nLppBAVeugLeRTauDm7xJePs37WciXoDnb5RgnZQHeTxcPx2C5C",
  "key5": "2tjudPCddoZxXHAeHNz9fiwBLiBPTaTptCLMhf5VcKKb7vyv4sqPdiLmsJ3xQtEt6MNT8ByBsa4j3RcsoXc9h9sa",
  "key6": "4pcPrcHv849KCDssfCHjmB4NoW4G65iN2mKAwSaTX3YS81qXiKKY4AowZ4RRJb4DxFjm14tdKvQx57Q91X5zJbx",
  "key7": "2ozagGYTwjcuwT4YbeiWAkrdFaaLm8zrHB9pve2MZsWbsGFtzRwwCprH7KiC4K1BS1fTZShEsLz62ugd4pExTM7W",
  "key8": "4vNozGGdu9Uf1vAqFcgWSyVtybtb3DePpcExgdAF46nxPjYci9XUJeSAuf7B14JUtmZWGe8FK2dXw1ta1Kcttd2m",
  "key9": "58NsVj9hHT2gtojsrVhJ7DTWyWTbEkF7PTPobR8o3rGC16658bEsGUgTDzprZ8RdEmjGjUqpqY71ScQYJeActCo2",
  "key10": "55jCDTp5aT4ZFGkq2TGQVFjajsCyXKdbHfJnUi1A2iMB5f87oENeUBA8hBcukHsnoJ6wba3iCg7ea9w3Bgp5TC6p",
  "key11": "52gmD2wn92yaBcPzrCMwXPAtT4STu48RznsyKMC96hqKqjFyqEhQik8gPZuVWkRDtApWTT5KUYZtejoBDGEBj5B2",
  "key12": "5HN7TH6QGo99cvD9fTdkzYfnmiYcY5Ke2UQVzzHK5YiUKVmszFYT4s1tjrad4fPnYB9Me4wzotHjTGTfoKVJhKtz",
  "key13": "4b6vnqxn4kJJPQGm7Fu8QiRMGPtirtUH4WDJuFopRHgAKqN5Kzascs3tpt7DMYXkknse1HyEnY3t5Px5FV58hQc4",
  "key14": "3R9GsUzv6yFC8oywy3N3swYtRTiyzqwRAxzLrK63WvZtmTaYqmjBMdMx6b7PX8ud41KVEsPMk9CqRxgW9FjpcQ3t",
  "key15": "18QSa4mad2SrbsXkV3QdRgfwd9FRvJe5k1WZZmA4wdcmCK1zAw5k58WJqCpoj7VCm4tVZVjrETJ1Y9WySNcrSUh",
  "key16": "54qZyZzgprsnJUQ6M8wo7a3MAr1GFQ5RTSK2eKjqX4bF9AqygRzwVJPGK7cCJXpU8Fnp8N6x8Y2gWxnA8GVuETHA",
  "key17": "4Gd5XgRPNqLGHtWfNGJ7SFBsM5SbtwaXmGoiCa1vyZtwQ7mQ4rbXTo2jYWdPW9QXNYoRDXWWu2juZarStmMUEQgM",
  "key18": "25rYEuYRrASyGrytMr4mo5EqynTM45wrc3ZWzJcwE7H678irbPG68C9C5TSGHBivNvJfYj9rPoy2LN2HMFVhjAz9",
  "key19": "48tN59Yhd7iGm2fwvLryMUJGqGj6GFbMfqukFq3myGvfS1b5P4cvtXd1e7meAK7RaLvqT7v73tR1B4aWB2qVNh6S",
  "key20": "iNViZNMEGcJS7cXATDaPUj2P3xqqc4TDfDafvPZdZZriLMYofYmT5Mg2QNN7fszucwjeNZHvXGVPPu9VLXhD3J2",
  "key21": "5qhQRpa9jhBwNzt33E39bNHshJYt4L7RdLpsbCjTzE453TAfBxzz1MUexQnT3ntq6zbnZm9sgFYXMp5CH5NyMGA7",
  "key22": "5ZwtTMAcQGyyRRUxvKLbHCn9KH1ztoSHMY17XAs967xVYogK3smSgCnHpTTBMdPpBCQKuDiuDnmetwtRgXbDX9jK",
  "key23": "5fCWNWEDnpSFpydRC4pn8M17EPZ5FGf8eC5LSs7vkFMziHzKfJpc6zQBtG77Tvw2sVGsrkaMkuKaqg9WuXWdq9Nk",
  "key24": "3x6bbZVwzfbRqcc5S9u9rsPTVQ49ckUZfLFJ69qfh92PvkLcoQKaepgffWuWYU5EJj3zDge5nATjWxN7iSXzUJbx",
  "key25": "4S9q3mzo928CfekQVXzvPYN2GM1YHB5uvUi3Xy7km9dLYxyzUiHx7csAkvJszJbtfgxPCaXW5rLyMrmZd32GEAV8",
  "key26": "nmQYYwVEqfCPBBvUJM7c77MFoniRh2UcqqJm4jbkEtMaH9yJ2xfGhaHwD4Ufd1vvqbAsAPfogmUwFK6oDxXhncU",
  "key27": "2nMHdTXCeMNp9Man1SM9PgFTjpcwhG91x9hZ5YZvYdAVnkRrYqPM9nX1ZemjXwB4qiHkXCcqTq7aJkU5Zz28p8ec",
  "key28": "38PJ4sD8hnHceiNxZ4wH4kezcYGiy6jG3WRG6GqWjWFF8GKAUwvw5JtG51F6AbSuJd7rUkZno9jznfTu3pjYTeNK",
  "key29": "27bATVfhLVMWqrP37pZVH66ktwZYaNppUziwcDZs6KjJxiodEzpycb1vmrEzq1kpUPMYNGBZ5hwVDDWYAh7eiYeZ",
  "key30": "gKzWMUYVpaZdm5tHaSZeaxuQrXmWW7QYs3dg8J2P5QtPHPJXbt3RMtKJxqHsaNnuYhxTrWQ3ktFuFsPM9fL4QKV",
  "key31": "4vvMt4vnjJjXCGpptw9fpYnoGnoivq43sy7fGbTaVyrDnvfxujMEs7SRGHhMjXn7mEfAYcBuDPfbn8DLH8AzpZz8",
  "key32": "4K5f1sBq5NSdHHqtmY5UvAAKj5wmxB4bpFojQZH1TnVW992HyqGsnzzhwMiebNVU4TgeqVDZat2jxjMRtPvE93Lx",
  "key33": "5D62o41mpxpZGesaPtYU2oU8nVMjeiWYa3Prm7g7imbruKhqVL1qfo3VgyxVY5qPXXXuKA16MMu4JuGR2V8e2C47",
  "key34": "4UdpsWG9BayWBHXa86sxhZ1pQ9rGMqa6FMGGUTovzfmdw4KQ7W8Ca1d356g1KWYYdRv8kMqh9zdn1yVEJ6myf4SY",
  "key35": "3JiENgbKkBDird57TbyQRPdnEomFLf7LnPEsAS6M1BvmAd4kijfJtxwRmzdAzEWGcEcmPnK7dmUkf5aaT7JTnH9e",
  "key36": "2EzEawZUK6fgRGYRXZnLBNa4baeQ87ou2rCydjwF7ra2igdqx3wYqhyNZ2R6KnjV1EtCtzQx2Cp422rMzL3U7WW9",
  "key37": "pSto4q4opZATRup8ua1YofNJpbG4zuhCZveRA8VE67Jr9vjcnSF9rpxAJ7RtFcrVbyC2n8w5iNFm3ZkTEoEzpHF",
  "key38": "25sVXhZB5RWaobmydLKawxNCaB3cT2VFhQQVrUXxJ2qXcnfRZuWSLoSbNMWYvN3nPj5Uviq4hQUKKTRWRTg8jzrh",
  "key39": "5erZQRyVaAEbwBTcbJQnHquVFKKx1doTFyTPui8yAuofTCQPVPyLkGXeLz9krq4edTDhCeNA4TNLygEu128QP5Cj",
  "key40": "3y37Enq9ewzWA1wrH73KnekkkqsGo713WpfrKYorpK4zBTWnA9FNam8BbZZvxLKUBxAJDi71knFjKU63kFAteBUp",
  "key41": "2vwG2oXnVpVf4tAyJ3RxSVzRcS9SuW2BPtWR5U3yVKB3q8jBB9idd89wfXpMMsupFhJnxR74iJ7QgwRs2A7xtEg9",
  "key42": "H9VT9FTFvZmoLvFdpuWytNyijNySdiGEyt5rWJjdvV4kaSPV8uFrCeh5Jsb1Lsgtxh9X5D8asH6ZoLAzSWHTFqb",
  "key43": "5MYN7UQEoWcR6tb6mfvcgvMsEoYuBbiGSycpFYQqkPEi9K26qdbCSMuZC5Ye1WVGzWs7SfUjXiCsuTndXtKpEhh3",
  "key44": "gA5TGAgSAUBPRCTAWn79utSn1wc2SznEGYvJQz8w1mQgQAPopvn8wWcYFRcKcLQ4HAerxGNPwEjzUEshfGbCSv1",
  "key45": "4CtCbPTdpR8NMQ1eRzzqK6neTdvw52gAdjp8QGDy5o75S3J8yggtgPivYWUMW3Y3CBvtjRoHzjUcx22kKQJKJpYo",
  "key46": "36UicVbQnbkJuJSyXFqLDwZEgp6YR7du3qJLYptA58SgtHdVoNNDt7wqa9c8cHexSk4nzQhN8UeRusteTC8zuGiA",
  "key47": "4cmfKTnJWKMMp54UZ9QCStgZ4XLhETyiHfG1ocg4b3FY6ANUHR4rcWXz24KMGtLNPdCmyEq91SVzvS9bJ15hLhRP",
  "key48": "4aYfj7g8DprydGYgHDaPBRS1kMWVLDdf3hsitFvkgN1fa3iCq5viLssiRnaWvFoXjwcBoPiFcRt2T4QEnTJbATqC"
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
