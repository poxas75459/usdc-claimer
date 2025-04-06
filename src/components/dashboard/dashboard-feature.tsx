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
    "3MmcJdEN1PDbL3VLRTPZsTMJfqp1pnCQgNy5GjSgprW7AEZ7a6fEhMzfeR7mBczU8coHmgqyJsnVF1JbNCLZFbXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37aLw4xj8AH3R58hXEYPDHu1mzRDreXEVPyqwPkfUtWbmzS9Go1qdDxwDf6TehG3YaFHMjZGt8DZAnVstQz4U174",
  "key1": "5TN1Sd9mYPbKnFa7gc8kxj9W1icJUoHhv5sJqgGSsEW8oaebcDCwV2nwPZmjHcWB83CR8eZBKUfDw2og7c2bavSh",
  "key2": "97BkW7kR9P9z6xjzWjimBbgyv2jzPdE6sdDV6dgWWe6qu4LCrBQziyL8WnCDsm3b333z5GFucRHma6rV28wCdPn",
  "key3": "3Lvv6MU59S25AiYwHAstyGpamAEFUkNmaxXdD3ph1uZGXkzwc8xjbAvWaEbZHwaWA2PBF1k8eztq6iUh2mHUpTR8",
  "key4": "2P8dinaqDF9a7WT7abHYzoC72tSiSJfDhFYVuZSW5mXWPa1r1k6JYAVhkR1289oFxjx7gQWqwLpWRVrAaSMEsXN7",
  "key5": "3iWUsu5eYiJiQEGRFmE6SrEu9w9m3vs1CywejnvPhWbMB17pu7MhghKqDS8fVXreQgGuSKUzW7ozwD46Ybzg2wio",
  "key6": "4EQrwF6wCWPSVY9T1PzLhid5TskU3gTbAQeV9wYJg3Li8cDVNJ5gb5n4vBHaCX6dreGs6SSd8P6JRWctpod94mqk",
  "key7": "5AgC8CDdRYBKKGTZmtDwKWVqWsaVfWy2Uebjj7kzC64V861PMmmk8f2WTHiWG23gpYUeH8SDizsUhWqeyiV32ZzB",
  "key8": "4WBbdYEXiJJDEGZ7KrBcqWmKLEPoGopZXn71u8dz9DT9WNHifKAGx7KtyaA1pejteXg6K1PkhAyTHmhhGdmo236i",
  "key9": "5VbC7xQRDTQBFX7KFDNSibEeesmHBT2MNBZUuVqeFmv1je1Ro9e6sXAb9CG5tNKZLFAzZN4Wiugh2jqp2JNuVrGf",
  "key10": "zZSXNuVhbPTZr4uehQvHfxVZRmEChFbnuCLJPbpU33HWLonw2jyaNgFjTvpEuC8s22inb2XL1QT1nkvjPBRca8A",
  "key11": "3nQQyUzBj7WasWYiRPeByWaPsL2c4CTZ13w3wo1tmm7scSor9dWhkiVPqhbzcAnQJ4TG9p9CjCY82zSf5owm21dt",
  "key12": "62ANkQ6TLhWQAp6f2Fx1kjvT8aNVnm2bdRH1quW7aStZABCWMHrBMrDDzdgS983WcjLrRgM7KaSM5s6VTVAg7n7",
  "key13": "5xTqBRkCtQMaKb7N1dAdSQVau1ztAi7QS1h6mW6M69W2mY4MF1VirpU3L2KcSCqTcPyUAY14jxrkF2EiJSP8WBCC",
  "key14": "2M895uW67pMnaZttqJpYUFvyFn6stEf7vdcyEhm2jg6b4JQCGwnYszaeVX1sZ32ZaoFAUFRxdefAfKcYX5LsJCs4",
  "key15": "ksfiUmffS7XgzuRkakD8rNZzaoLmUdYJKiN8VfJfSykCuohU8xtMuB3gawvoCxR5SJqvGETLG5EmshjfB3TNenP",
  "key16": "UDjg3ipKgG4daV5oZFUzzi7Nn3z7Hm2ANVrqkpi8M4iAS13uZnJdCwXvixauaZqVNQiTdDDTE17Enh6fP2xrjwm",
  "key17": "322ZNczV1VrJrS6u5rQKvBiV3tp5cTyDBHLLKkKs18e4UxowprombvgyvR5aQ7UJxUdassA62hzwMisv3Q2usTu8",
  "key18": "51oJCpRmwe8RTgUDexoNVcvwLVjt9pYEGqiy8JTxkuhuNYhmkpqvpx43tyPXhXuaLDtS1oo4wigAA3SpgrLMiqZS",
  "key19": "3g13vQXZUXA8cpTGbNKv4wZsDGbv7woPXfdGxq3KVRuvUkBsyb7cADteVqT5VkH4PRNuYDLXQHarMxPmk6RYZDSx",
  "key20": "5Y3n27eNxiViw3zQpzXouw8GAT9z6SGa9iEaJXGMbD3RKtegg3euUQpitctYu5SiTNfjdXfmbEd7XrozhynQtTcS",
  "key21": "3aJ5Xr5mp6iL8ohPAozSwUYqWNq3ViUDBMSBgyTpoFxMn2dR4Raa1VkK5fL4AefXgcitXGKhpUux2xFzP4dWm3tX",
  "key22": "3VhRzDPDSi2PPagQjNeNgiWAKLDAkz3nfmMcQKT6fJKqUVu71Hus3jJqNYoEEqMyk1qu4Jx7Y1NGVtMQRaMJqEDV",
  "key23": "2zEDmisvs47cWpjAw4m53jqMqKvqSLCGxNZnJfFEFuUFA5knAoGSkotby4wvwV3ZUxcHWLA88M4a97eHVPwcUpK7",
  "key24": "36rrR4eCF7bv8SB6w92Nd1NwCzTagjKvcCrENECCN6YyMiNMV3cYwwrUZBVApZGxsLsCpX5hRqppwR5ZYdC2nDnk",
  "key25": "679JMKKGUV5EL6hg2Y6Sv7iAvNegKjdyH2wotwEeLaHGJceneHrctdYRjQFhaxDwdnEXMVEswiJEeqrPQxCAoB1F",
  "key26": "2ExonbdKCL7irzJB1izBGGyTCqC8FaGE4Lj4o8UkXMTYWnoQM5RqpaRmPguujnj8WzCFUJBZFDStYa5DX56WLq23",
  "key27": "2AnJNwW182oR47A5jGLqDNfSotPJoiLELdNnYGAghW4LRV77Km3gU2ruCcrwsXX1CNnnNo2nfGYDtVY2oU9sYoM9",
  "key28": "62N47k1ovUShdBx1KDoRUoGb9pEohN8ioevTHCwf1XFoPHsxLfYURU2ri2iKPASLktTt77qfcNH8eeJHStYY8ZLd",
  "key29": "39jvnGra1X4qHxTzYiRQiH9xW8jphcLpCnkSZ9jREZJxAfPBRum1xGfbKRYduhDt7tJWVQReZnaAtFCJRBmup7Mc",
  "key30": "5nWBB5LJrN8LPBULFqSKK62WnzKhxuwfg7BoTtZTyDawNg98umbf9xHK4p99zv4mC5T9r9KGhXrL6bXiHqgtJhMV",
  "key31": "4qNkRJfTjwhPSwPajY9jGCSaniqtoXN3AHjbTcyUTwmvCpZCsxdXbHyDHk8qvGUVM521LimM5BuFq4gaU2c4XqCN",
  "key32": "5UPjB2qsB8DTweQHcPcze8b4WNjq5koamTXoqRhXADmitFWoWZf87TiguZo7y1o62honbGeDHdfM2QuR8itcbQsg",
  "key33": "nDeqzAmh5FNg5mqWtuCJRrk1SS3uUgUkQ8HvBByd61PjJhuNPf5yyLQj1tfJRxb84xSVMnSPiFn6KsycFdQB3Vv",
  "key34": "KgR9daLqmd8J9a3xg4SBCt1dk9W5Qk4Wrdsb2zoE9uEUrDeJTMhc9V289nvEhM2Nw529775wD3u4nVWdvKwYFD8",
  "key35": "3oZMMDjxsc83BuCpbNp4rDazdaBDQuZA56MHASc8VHSEY15FAY3bKPoVestwUFZfaUVJsuWaQ9ssxG3vxtf8vCfi",
  "key36": "2HgcYjPPx2uMhj4QbQfhzMsobebRc1mid4kbg2ufNGpN3tVQdCaDFK1x8Zp9Ba7mwA84xpPjk5Nr1mxdypD979ea",
  "key37": "3m88Mj4NPi3NgnKsMMWA7iYFiS8ZusZ3v61t6cnostsaZdAb5QJZaawGvnNazvagvb2wbRL2Qi3vDdAJrbZ11xF6",
  "key38": "4tpsvNprek7aYG3kqXZvGhtpt63NsoXB5R7sSvEXKhC64gaKZU1nSEy1ZMjvr1CnSPPLqHbpncvmnwUP83wyUqef",
  "key39": "3Qn1MJMA27RjHdgoWrn7qRT77rceN9wFFSiCgkeBE5JghvACpt3CaXCcEcgVX67HSNo1jxQRAGPe7iiNMRM8ieje",
  "key40": "zMJB1cVxdNBUaMNXzskardYwHwbRkySXbWzYPKXVx4mL8nCnUyKXSxEV3xuzHsKkiMRMEBTXR7rLHmD53dyxCxv",
  "key41": "3zoMVSvSbr7AD4frURLyEJ3yy9BARHCS9WLuQNKNZW16TS2VHCLNGZzbz6qT38EByhwrMGNsa2NDXBHbpp9hctBq",
  "key42": "535oDrEA8bp2hK3cZAA8pWPoLevBuh7Bj592kyB89vFR8NtLhmNn8kxggZ2VXe4biaze33qzEdmZsHwwnnWZvWt3",
  "key43": "62AP9KnAzq1aZPxZueaQAGRHHWFTPN4ofMaodcHPZAj42AKxUQn9RTXFXh5SJmMzzKGQLqEeAt7dxR9GAnJY9Fr5",
  "key44": "vAW8KThPZD6rmUL64zFypohso9QEiFJsk9LMEE4ysxwHuLaJxWvSJtPQEgskJ5M4fkUEZAZkkjVpsnXEmSvL2tJ",
  "key45": "3YyVFh3E9Kz5n961RPqExZeQ7zYnwJcaAQbMKQKemiqRVPUEEvZhCMotRYEYm52XgnsUQZYyBZUypJNyQucnQMd7",
  "key46": "2jhHBTR118DMfLGgNhTqcfejj5S4wbnrcR33qQ8xvdSRRdfwJiRBFSLy98L6ztskxjQ5qvV8uK5m6PkAtEevNVoz",
  "key47": "sDEXVTeLZ3oKFs6KsrncBmW9XcnoW8LQ5xfn5FrZiEhmHJC9yq68NJjtSouLfQMcYF6BpD5n115fd4W9nQrrjZz",
  "key48": "3wypmogsrC8GqgNkPasKfybuzmTra9MraJwjqgu2M1vFBLmvjQypHfzs6fwZkuMJZqEEn9ovBBYNo71fe3XeDeUE",
  "key49": "3jru4FwSiAmwfnvPXSscEY41BuU1NVoeVb4LvwVmaRmQTGyDn3uJobb7PV4ub4i2oXbKmSK56AQyd2QpaZb51XzV"
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
