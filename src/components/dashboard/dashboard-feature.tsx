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
    "5Az6fCaLc4YXR6zzCPDbyM2VCRwTbvsEgHtrhofpxEFkta6WxXwhDZo91hLukRyKaCwoKLRxC3qKzaAxkC9Nnxtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TV22sfgpav5atcptS5eHgtQ9mwdByptEK5W5krtKMgr4poLn7iGktDgkK3n1MXxGChuqjcPpGLWS2qse1LwFYhA",
  "key1": "58dczeAT79GguZwuE5MBnnY6qgiJqMqKeLPFnEwcg35dThsz7WfgNywEhxvNtkuifCmFxALfKRJZXbR1eKJUuSh7",
  "key2": "566Dk1PYnLkdGiu44JcNnteSA6PUiQJZYrzWYtYg9LrUJqHTieTzXJUUeD9hAUDVS4FHMZGFUtmY1WJFCnuCYcRR",
  "key3": "4vGs9kAYcpGviyNxjDurhss7m4XbWpmCV7tFUYB6cC2NdJEkZ1MJ1ZxM7Td2PDTSqL4jrkBtjfkRvcu3bH39HKQq",
  "key4": "5j8KbPZrTWd1p4Gr9VeFQY1b69qE3LJPxfVeFuHT11T3GnfG4k6FNAwjwhsytShWVjwMXKTvFiqAd37tkYm73KUy",
  "key5": "4GXWwxUBTogs5KA41SqyzXyvUTVNdBrkydj7NJnZhdo4RPuTnF5aYLCrbXME3YjwuchW5St8xHfsjMzHzMziBMWJ",
  "key6": "3fgYmAjYHg7Ciywu6XTCFTEonm9MsLvBjr6rqC13BmtixyMSpaNi3y2P2SeA37hAwUJvutD4n4jwHaf7xcobF6qG",
  "key7": "2b7uuggA2XkttFmauZixdVJaaGte1EcP9eBoDJPADm92axAK2jMudfhVvNASdFPpbdNM5PwXojsnbzqVpfvCfYgV",
  "key8": "5KTRBTP1EFX1wUyiBnybnz7MXrZ549sCm6wb42K1sZXF2PJK8Jj3u7MMtzsWmammeH1DsazSRaTWhp4W2acCutgE",
  "key9": "2odswAKM8HaXhaPTzRTUUTHPWMj5d1syHZFKKAgPx1biaYB4eoym9pnhRxMKuFUWTYPDiQ5KJzgr2bmVxAWpABwh",
  "key10": "3SviJbX7ADfrU1JZyEWL9A7QsYaA6nK5yaYnpJootHuW7qYiswCUjbnCoQd7gUbCJuL3hAck8NaeK1B34Zm5pH8s",
  "key11": "4Hism3sSdS5PaH6A3Q7ww8Viub52hMnCm9H7wGfYk388ufmTrP568tQVvj7JJ5h3dU2akv8cfxDdLR2iP4E5VXEc",
  "key12": "56USheLUmyueNSXsTquqdJuV2cxyrwkxhYLAfFFHyKV7ZWP64EYxd3bGXxKpWhE5Ee67rAns4WkxsuPP7dRAGQqi",
  "key13": "3cSfArLfGz7mf7C1RZLemrpbPydgLjF2u3mWaDnX5DVsvW2KuDaiaDz6ZkqCXqhzboji2KQwYtFnD98zQFRYe767",
  "key14": "29bHL4V4bgavTeapVCn2rJfU4PuWnc2W6wtWsM2yjVnwFa2JtfawDyFt545vyTyEKkHrN7rrayQR1zbgavSEe6Nz",
  "key15": "36V5voQWGKPpkz8D4zshABsyr6QiypuwwkHNp7AhG4yG5Ezg6mjj8gWDrqSHmHrgy62VU22w6nKb2SCEStFTx2ph",
  "key16": "2Gy2Fmeh6YdbfHhnAhwEDbsFAkciEnfEwRHehE8ctHt23zST7iUoFsVtTKz4hR7LrtBkb8eFdeZhU3r89BoH4X3j",
  "key17": "3zpSKqADTWtVbUXDAkyUWaRmkDwue3hcw9KV9dBcKcCofivAx4Ukd271vN768UPs6vejdH8BH44t6AiRaBXT8Pq",
  "key18": "5q1m7xeaB8G1VDHepbm82PwTYx3VbVy1cYiU7r77Nf16QBxsvuC8tF8kXh3LUrEB4Wc9LRM46aaN11n9Znn6t6YM",
  "key19": "4LDKLdsZt1nB6pqTD6jAJzS2CAJyqdxbXKVV4Uzsccs9LxwXgbjmtmVXH8THzEp4fpdqzkXsBK8KCHooNL6QfNZ5",
  "key20": "3WS8gpxUwTbaTU73TLezqaoiSVUmTAqLihRpzter7MKXib6VbmEoSGJH1ttGZT36RB83NGpXMHQMEXxVEnpAFHGs",
  "key21": "4wANpecTedQ6LRC7FzbMc1pixNmMdMs3zzuo7f7uSh7guwG13iM7BHjq7qzmKRPzcBSSRLYSCWWbq6rCqqEAg429",
  "key22": "VyyiH4ReFMtcVV3pEVEZYHmFkoqksTGQVH4n6XoHruYnarJhaMiQvhnVNDGEXFGEUvdCw34JNTUWLGUyLSGsa4k",
  "key23": "3ZcwTAGAesG27oznTtGE6z2JsK8ZQpwEhxFjXWdFXeVg5qWNZD7hewouVoR6sVHqTk1huRqoWt5cuKVfC6nLwbr2",
  "key24": "3W11m3VVZQMhCRYoUZ32J2v589u3M8EM7bhk5ha8TiZfs7WErxQDwgomhkA1ffcJTcxNvdfYF4kmfbzacgTturrz",
  "key25": "4MU4kKPk3pgeYSJx8LGfqUhQ5jB6oxLkgrWan7WHqC4Mmv6Ptn9mNKBwU1BcHCf9t2Bhnrac59dFj5GFntoJGZQj",
  "key26": "241kue2k7TqdBEZxgyEnRxvvothCBa2k1X8XJYnjAR86zTnuPTAnViYTj7VHx7nk1WWjWaW8nnzAip4RiniaUbpr",
  "key27": "5GsFAjjdm9VLLAfiismGLYwEMuL1CkPEXVuT9cqhSZF5zKh1PhhD6RijVHHcovyZnbnBNS6sZ4ECtT1UD1sdBXh9",
  "key28": "49ESyG8Q1QqLkXozHqX1uhqp5dbPBWs1miVGd4nNRi2Fy9p52wZzp6un9D8MVQXnaLVQLMV8ZgZns45jKF6z3VGF",
  "key29": "t4AodrQvAAL6SSfB2J5Qv6N1WRMN72YZ7oDfFkP48qnJp5wRguYNk8gyghkWzTW5c6bguxyfvjMVj11x28ovs9a",
  "key30": "5dfnBHnfx8cvB46KikmxN43Yn48NNTY5hPJiEb8AMpSH5btjBuMqwwBUppYtA2m5L9C7ZRWsSsPJ6auRSs3973CD",
  "key31": "4LeVWgX8KbsZrWvm3hekru61XDtiubKtopzBrUSPbkYcFWZ6e3Rfr5JfvTBAD5FkK3XhJ2dTDoMmqugBcaAmGexQ",
  "key32": "gLqLYto9sR2GWQ46nmwGBJVTkqHcRMHn2CpQpLXre9NmJbGMoQppJF2Aeovp2oje3bc1fwwoGu6HfrsxkQh8bKC",
  "key33": "2xfSvU6PvxnWmKmMibJKS9qjDHMw55rpUJNm6VvaiNgChhTvtwQeT6SQdnFY4xSnHk3RhxawfvUyfuFKkMKcC1BY",
  "key34": "3LAqUZubKCkbHZpPCyPRd2Zp8kcih8VMsHRkk8yQHEcsTLaqYGKKiAN7f2kiFDUpsfmnYrH8oBhjLFufJNQaDxfK",
  "key35": "3CVg2roozdGSVLfRPqGndMUer6uMzfNw5PU9t5PCuC3wQvBDqgSLWpGtH4kXJVptn11KuS9NqQtzAMYVETZZp87o",
  "key36": "ftnfq2XP64Sdb6DEZQuwCDqkyq4uitE4qLX5oKxAYtyHfYa8RAg4JRQcAwEkLdgz7oLLGhkaJ34C1LM3aAzAuUr",
  "key37": "479fc4yoEt8GCkQwFzrC6nAozeybBudfKubTvZdukKWb9DtpZSTdkv2ugLpHowixSezsPStY6Y7ZuVYZyQbMbJ3",
  "key38": "5pFjid2BeuiDn4NtXAVQ1hW2EjaETwSwXxoMVaoZZQycYmnaE9ZdK3t7o2u4ct5vmae2YVk3cc2T4vqRTDM5bC9m",
  "key39": "2PZY1uN5jZWY6Coo3iixEFUsAojgnsXt71ufyrTwv4atgBwa95VDByidHu2vUSXAXHcdwagsGtC5EL1dY4ogU2Pq",
  "key40": "5cdRcCcJrThNqoeWpk8QY7zwuyVqNCAs4XcPpji7V6MyDSuC2w6oLYaSNpJDHx2j5SFfnzSqfrtAbPPNaXJ4aWaQ",
  "key41": "3ybVKzrvixHz2raqWohzrbU4WP4H8KDjHk1HowzBiFFjHSbnSLFvFqN4tvxRZHRmLJeH4qrGpbLBTeZ2pETMgVyH",
  "key42": "TjzSc9SJEh4C5aQ51ECuyocCWmFWpkSiEziNzADeK2aog9422EqS5LFEyiXDxdFmeXneob7MLuQ6vLLMzbLHwWE",
  "key43": "2J4rgszt8A17hmJJM9MwCFTq7CysRpHL6PFh4YvmXcAd6piXscr9CJrEQU2gY1ug15WoSHTtMyE3quKBgV9CRCm5",
  "key44": "2DtSEm2Syn4mRooYXScZqA9x1pQi7ZkgBeycMubUqoN55rbM8MCeR6BchM2AAueNXuWYZGXyoE8vuKPSM5z8Xz2W",
  "key45": "2wjM7QCBtdd3JazG9bzzPbyzejYtNRKQ9yseVWVKJUQdMLYytDgYvDdKoHvqxn5foChQEugbd9b47qD7XQb1JR3F",
  "key46": "4XTwvgwZSn5pqXvgMPgxwTYLxnPr26LjDPceiazNfPmaT2pNMydvwxdtWEqtaWbYna6a1Fad9AWZ1b4GJhfPVNDs",
  "key47": "2fQxgwN7a8gL9FJ4xicAaayCt4ZZ3ZureBGgvCaqM7VGDHqYssr8cDGZGYH9QS8472YRdxe7H4KAsYTRftpa7phC",
  "key48": "ofz6iLWvRAxu1rJYokMzfk1tn6BEULfifaAyAo1PdPxZqDPw8K1iUY53T6xhtH93KeSZgq8KL1VeDt1QVpk7PdT"
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
