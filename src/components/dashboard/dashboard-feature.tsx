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
    "4DJ5Gwhpn9nzo57rL49aBWpbgLZHgC77kKJDwmeaiEAvHUj4jdRTw6fwNdZ4mHW3yw1542KG9VdRrmNj2vPMcQXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XBK2GANdwTS84aLD8EfKnrvCwHMgQ8Ms8ZkPBECGpjuKWH3D7TXMyDksTh8EQKKAnsPZ4JVLXrd6nVV1Kepgdcj",
  "key1": "2UHz6qZjm9TUfxEwj1RZDyMJ6mov4zNK24BED5YNm61McSxzPAz8o5v17KdqNWHvpr6tYWytRm9Lf1wB6mQNAV8x",
  "key2": "5NMyM4ouP8SMDdoUpRwV6MzZDe6G8KD7qgReJbiGqVQZp1eLrcrRXhGTBQrtoBGw3pq7dSfyA4ARnSbwFPRAMxNA",
  "key3": "5fD9kyuu5uKrfyVbnMyEw5zLyiqxpCxNtDQhewfMzzTMqMXg4w7ZsmBBhXT7mEXw74xkb51G4vvyLcPxygf8wwPk",
  "key4": "94x8WRorTcskFBvHh1GRZZBUNKdy5Bx6HPFxhNksuraXm8Kkfpyce4tZ4GBFmoCn8KNCREcJpGJ6wbcsQ7z7Q49",
  "key5": "QYDrPE5gpuEsyf3WeUrkdbM8bWt6T4HWUA6fJkRE1BFaGXzJ12edLHWSBshWjPAQ9QBQS1oR9ihjrzDSm1MNVn7",
  "key6": "3L2DLcA3FhAASb9bckWz9P8EordEJXQjahSoybmRpndrMHE3dQTSaxnQFyrRFVcmgVJ3t1FtrsKfXsFRhmMhUbGk",
  "key7": "2oA2v8Zd9hSssJ74jT1p4m9RLFZWdSASWPG29imGwmhWQ2UM9E4DL9C1JPrunUeMM3tXT7vf4woEeNFnXNmBMM1Y",
  "key8": "zwuuDZBmcMvAm22MXPXFsin83o8kau2RCupq7AXuteUsTypSS3pTLbiHBpN9ZPnJoveqdBvNkgXiWTuM4F7MGV7",
  "key9": "4k4VUcmQykD6UgJHzccSzR5ANsZLCo1NJyBZ6mb9P5ynRR1aKqtxvgsPG86NSkuWNED3ghimE9f4Bvx79oYokfQB",
  "key10": "5z8HGTXGCjNnceitv65gQTjWRhLtrKnQGcFjT1YdSo4sxFX1dQu998Lg2pSkpstVK9HMUhtjMaQxcVEsegUnnojr",
  "key11": "2XwUnEjGqxFT7zhqEhWjZzbPd4ertkSFPeQo1xFR9MUbHPo7R6oDKGz5aoxWaonKb9xzMoMaRHPdepd2dVNeZ4B1",
  "key12": "29L8N2kDVbjtiBEMUymRJ6scAMjXWLgV1BnjKNhaAdWqreBB6dwUXzsTMXgKvSWowLJuUD3k26icoVLHAGa9hnrY",
  "key13": "nMB8cZfPYNyfyXHGuZebcLeHsqhZZ1hFVjidhas6vkLTdDG4guhkXD88mdsJQabhkzXNVSRvvfzM3nC6gAhVKyP",
  "key14": "zhBcJExyvxeMiJSR9L3znF1eLa6rTVAGgDfaBAfth4mpyM8b3qaE71ksqwHFE47SumE3Z7ZRSFkegPT35PjMc8c",
  "key15": "4YfSYS6TBaLTWME5fakvN79PftHCuEbMBMm5BNDv6EA9jB7sCGNkPN2PxBR7GMgWxEdLBvGJfUGy1Hb1UxnBkQPz",
  "key16": "48CRw3doVhAp2XNspahyJiRbxo8bwQYnLDvvUNaZ4WcXLn3Yz7QfymXQtrAqMYG8EGCDcbf56uKG8R16FHjzpWSL",
  "key17": "2ysThDvQc5kKYD2WVWciD5GwjZcLEUKwZ5RjdNJNZaYZNYHMyKePXEzBdPJ7HcLYkhZ8WvA5GkbHoTMQ1Etmc65T",
  "key18": "2NRLRLPyVYk6s12ya1vdHm9TRg2CoNFXTQtC4e4jNySk34poKHrZmoJpaWm4rjSQYQT73z51RaLKJ1yXK8Eqscbn",
  "key19": "P1XMRa1VCj7G5hh5XMhEV2PXWYDvfGyU8GocvvJzotK6ZxnRaJK1bS5i1gaPP4FhVf3qCp9mEyzXNt46e7wgKA8",
  "key20": "2ZYWmsCyneCEcUtjvYNsqfj4nrZF2BMpAKLBwVbujKeoTKHkXhBXTPifVYk9YPmDHmpgusGS6ivftW7pHpTb1916",
  "key21": "5irtwytGZeUguwBhwfafn1oBHwYu5iFQS57sR6yufw4Buc6rk35b4C527sLKKWKQVGrZJxeU365ehD4JaJFmZiij",
  "key22": "2yF48eaTXFN9qaert1z8CnFUYQp3Qa1U83MEfCL5BJTHMy1LxpD3uo3xuJW6SRmpDWFBarwkdqWYdPv4RazHx4UT",
  "key23": "3gwZug8wob43YSzaAjiah3A1z7jUgPJEGrUBDEc8ZwkBaEQMtBkn9EdDbC5XQbJAuFSXgKNByMgqtcowGGWYUjF7",
  "key24": "72YNEYS5Z3fr247Cfr4e6TsiRGhCcmsR5rcYfJmGL6MD2fyMYkAAQ8wvUF3GCN6FWFRceCibpytVWFuYpcwK7Py",
  "key25": "5HxuNzuyKC27Vz5rKJf7s8q6uFrnybqvewBhLAJcUDgMaUc4ougTZWzdwZ3PSHuC9ZDobFdjZMCKjGREzdEc1Cy4",
  "key26": "4mRmXEaNQKpdcJBmbZ9WkLer3DCwDVQYtTHuMcp11XFYD9CCBCMwvjWQ55Eyhuar9ur3hH366WsZvup7ThAGrtvb",
  "key27": "5KnpNX242J1uHwRrBpTg3t5iJ29TR6k2HkZHQ7xqTxkG5ufR5T7roGo4EFAW9eehVmRSEtPSskYF1NMWB6qgg7zo",
  "key28": "4j2F3SYwvuqZo19njXR9Xt2kvxsBkibfxwEhngiZNWXD3ULeXFmJvT55cREzbN1cf9HPmvFKPbVst4CVvuqT9z6N",
  "key29": "4SmePDBWwnWXeVER7NG1kufjEhJwAt54K2SdysDLBLWb2Y1Vy9vHp71rYWg5cpCJ71TbsGuo8KBJGVoFM6nLVVXQ",
  "key30": "4yAbp7XwkeKRcuQzG4WPnp4McVkkGVi2xDteMmQrY2QdJKGXrVPhgfLvwoX8joNutB6rr9REYTtqwC8W4ZGvx4kJ",
  "key31": "4fUNuU3vhEaES6mPUuJucC7DETh14nMjrre1G4xqxrTF9KAjkTLX9yFKaHiweW4TwWk53ZvzyocUymuQt5o6XhHU",
  "key32": "4HbQVjj6egAwo6CqMBNE3W9NtNv5UFFHoKdqsPKz6Wr7D4pNPJWDjg7S6FZcjzJciZ5SbYDAPn2osn9RaioYBuRo",
  "key33": "2imG8JMAqAz42om9PiqYMwnexf2Vbh4nRKqiPyPSdjx9WUQ2G6RGXsdtdEGohcQmhtxSGs3PaQCWtwKAi4wgXe3L",
  "key34": "3n1wxLL2mat2ko3iNNZ3m6YGKTioovTxg1qHH2Bwcv2h6kQpo67vo336Qc2EFMLW5HJTQrE15rqo4CeyYiWcQX3W",
  "key35": "2zQyqYyv9r2gGsxybUaR29kEua1cCkALRt6DRfQwHenGCQyJs4PC8kDjGGwFw97Jcx7T5cmomq5oa5p9oh8roXow",
  "key36": "3kwsan4SPfQSC3emuRo7wvmjtUseaHwywv8XmfLFf2TGuFNw1jX12dBVMSyBJKFLJ1ZMw4XHZ7wyR7ZjTs94iB38",
  "key37": "2uQFDzJCQtm3LaYBoqwdPRKo5apmspRtDwWVdNZmXW7nhrhfEKH5KqJ7xdVcH84HXt6AFig3s18sGRsuNxc5HfJh",
  "key38": "btmCgPVpT18z5UmUYjXeRKEbeeFjXVVkiQLrDjDgLUbm9VkWEaH8tB9L87HDUzd6d4pSjQYNJqayBqPaWtSo3hQ",
  "key39": "4rcDYvAPggrnVn9EPj9HCQEnrDwy33KyejbzDzqvsses5aFwkBemb7qb8jwuDUHM3HhJQJz8GenwLMREi155jWqi",
  "key40": "3rexpLvfiVBXAwytYGSN6MUyWj7CiMs3SQvVBMzEkvNTu8tNHqvwMErLQrYHZGNwzNwWrDwNWP34Nf3hB65jbQcq",
  "key41": "3swa6SXGDwufXX43zkmd7fFYJtRAXWv4MESX1iNRnc6KXqSjwrDAFnk2f36DcoNcC3jBSnJzij2kWZUvaJrDkQiU",
  "key42": "PYRbVzRiYFWYdKHHLJXmCKyK4ucUzHkKYngeQWXDMtza7xp9MxrZgodreCyqqsMco89kuBdJ9m4Humtj5ovPpWs",
  "key43": "4vcXyHUXarYBS1AZJAnmNnjEWUgL9y2D388e2b1mxwsffeDQx6wV4AmEAU5StDUJhVHJm4Sbsw43M5yhBcYqmAec",
  "key44": "4zWPnavr1siH9fwMZzBmd7N9EW7RHCvsvjq9i7yYehMZzus5W7Zdp4jtwDrWwZHv4tMNNeK1jMWH3ptUYudPooC4",
  "key45": "tgT1h6PYfiMcDjq3tFdXakJZkEB9bpe3UcHpmSPLB3KGWoTsgwDWKK8LgUR1P2rjM2t3pTCzFnqXiBEJ239AUgU",
  "key46": "2PP21vduSf35YygWGRvRLdavYd4Jn5uDeG9Uk11vGJbQGw66EJRzPRxBkZfXhgX1puiUrJ87cH6xrxWfpxtnjhp1"
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
