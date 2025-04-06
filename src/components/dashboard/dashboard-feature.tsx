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
    "cFq2Dtd4UPZmcWhSJnLKqJtX8n4haz2vkRByUJTEVKAUjD4XRdoHuCkmzPNa9nFuRKyXVsew6KGSSgvPVHc2n4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CmKUPpjQNT6MkQgehsaHeTjdvgr5eRzWa9tq3DEyFeBQtCJWv3t4NcwrmeeDe1T6McbnVX9eBwKPaYhgHGnAYVX",
  "key1": "51kVVHeHr1172o44kDmuui1PJ5h4UNzVvZJ9JU6r5SpyriJmLFG3PejTGY8VRCzKPYd4uisZ5V774kcFf8YCtT1K",
  "key2": "2MKxEWENQ1aVy6JuZBJjyGQFCAvAN6B2JJ6QxmgpBT7AT2NTzkriA8aSo1ExZRDcg1sXS2GKPMpgh1goSufqoUJR",
  "key3": "5afkQWDSVQCfgF6cwZD1gLDygFPWcfwDEZjdRATgaVboPsdZn7JEcdZnrBmLNwFxVrtiDR77mEhvBz7hd7zFqZYK",
  "key4": "2dXWMaFW2VvL96F2jpbJ7rURCzSEuBQyyVUGtFRKcS8Vcp1XJGqTNAqYCyj2QfiNpA384RCkKwLA24FY8zDwNpq5",
  "key5": "33SkhQkW4aoKBtjbDGHo8nr9jxH7c4xDcuXp4kMYWbdqGrYvta8mjNucTK9aWLvw5BP61Fk1BXxJ1N8oUNKgwNFV",
  "key6": "2wifZrY9L7E7u5AsK2mWTCKEQEuG8BYG4kdLq6RBKpSWUP1LU3ff3MEfxsPQkukfEVwV4rQE1m5xutPEEmELfafe",
  "key7": "5ZuDgykfdAeHXgXbxmRZDCDFAprqFHuoEeAGdZz9bkcRJnUwXsiMUEYWAn1MV9GGUUmjkUVBDYKLrMaS8DTD6Mtc",
  "key8": "f2iq7czeMDBVbp83XthyZnz5j7G3S5HgPvY9pNbBoaxaVi1s6SvZVoxfmZTMbLi8jhUVc9A7MbFiYGK6PkdTQNT",
  "key9": "2WzpMtUJbNq4xLXzpwuaE6zBLfUmFXYCk5x8eQ9wcWZwqYNQKcrK1AH2CZhCKwr3TAwkSwhhaeSkKb4MtQVom8Vv",
  "key10": "5JwxwGRJKWj8i99rEYKKn6mQX9pzGqttWrow46Zz37yEpA24qmWjjq3mmMJwRptbHQNA8qL2RjXfPXZvYRa1Cm5U",
  "key11": "4Z7G8XjsxK8xUWF5z9d5bUNW7J2GdvyPTzptdBf15dVENsVmZSEu9jUaFFtzuLUhwXC7Hazb8uZMvcnvPu3R8FiW",
  "key12": "64DUgNCYJPFmuPRkS8yFSe3bXXjkFVXh8uq4ikANn6hS6ATNAQjyCwEsdSgZoLcfRZY6vfH4x8C5w1xZej6S71KT",
  "key13": "519ihuRY8SHuvdESP9X5W3GdgRtrLrKEEsK9StjC9otQfHXjWhZHWpqvv3vaVKVube7bXR8MQ92acroYCDdmxZgm",
  "key14": "5H7HkxXo1VULrNgLVEADBWtrz9gzJMUdbKZKKgaGdMfe3D6rJZRZB1ij6hrfQ9LC6tmvk3J8WgnwCmdZvXiUEqmR",
  "key15": "3gMvPQtar7kMDCY3LvaLNQdLUCR6KXeEETvsK2KBY5EEkpW8AQyWf24s97sBGHFfyAe66auFR9c39wJn6BxKh2cn",
  "key16": "39YPwCwe9kV9Qr7DyooN9kP6zn5jc6GVsRTJGws65WBgHUY3b2oKcWZeHiMuTaJg676yRC24biabSVrvFDC6udmB",
  "key17": "39v8zetA8iaQPW6ze59ai1Wz2PooC2R2pDwDjxPdCG88oWK3d6EPUaEFwaZazBZgjb3J1Q5UzjyLXdB4qP4NCgFk",
  "key18": "486wFUBFp5yVNxWeXEMmLDBXqKJpcSMLmbGAkTE2GKz3wLD1Sgu49n32J8W1FTQGgf5wc9wfedt63pN7zT8BisGF",
  "key19": "h2iNZwCNf8DSEtSTban73g3o41vA2cAqVYnbr3quUMGkn1RzGqeAqo45UwmEtMbnFJ8wqDYuWt4CGWeRkCLa2wN",
  "key20": "558pceJcNGZdup8iRqMhTTD2ueWrdNDi7x6rkzUAk2ku3B2CNf2rT2xPNaXAvmcVybCyKda9DteGF9BVAZcHC8XW",
  "key21": "3253NdW3urHuAn6fsB6hzSziMKvUvsaH99iK7mE7ZZtTtyNY1xY6m4tLtQR6gEGTfr2bYustntxdChLDYqipLQrc",
  "key22": "3unjuAxHDEmwV6CkNPC4ebcCNWUBqMebbq8ZrEoibjo2jaGxLqTcYKhwsGkDY1st3pDPbPZsDQ81cNeEuf7DL6YN",
  "key23": "3qNWLNv4NaeMMXZhF55dqxfpgHDhVGHr1bVgsQFXPdYe3rnRrAuTorXmXJxXCrRegghLGs9AaDU14TM1yCLRnh1Y",
  "key24": "4DmtXvjpXK4EaG1hbBv3vCa6tx4c8NtWpfzRCNXXH6d2deZedcaK8UEyMU5U4SUDcgZJyvQ4RCpnc4KJzbcL29Ds",
  "key25": "34JBmJLZX3knxg2VdKeaVVWvynno1y9uaJwNtv5n1zKV5GwDBsk7DbATUrvoFsbTvY4nJYLfQKgKNNaoaXHwf32w",
  "key26": "4psN7Mh6A5AdeouQue7BQKtXCRXrXyDLvPo4fzzXDPsR9jgST6gJUQDPXafft2wr2AbsA7gqBaGkKPSU9obwYEm2",
  "key27": "33ZgsCZzDdWAF1ZFbFYxq66oVKQJHpF9dUtAqzdpjSWWDv2ba8Uu7z3e3AVbaoo66wvRNv2AomseTnuPmXCNfn1r",
  "key28": "z98QNxmRhqMYGjuB89RWw2FzYEj71hDiu17JiUrWhzFy9GL3frGih2hT4qsXoEFAuydggTncy4ETiFczWUxR8YR",
  "key29": "FNFuDH3EV3MqSu79okFTE6yGKEM5jepoPr5i5rQ9JZGfx8meFt74teKH3p7vQJQBDV6nfxt9QNQcHLokgJEvK2M",
  "key30": "61zvvmvVChB1jEd3bHhFBuR9UASvCpQusqg7hwphcgAKG5huv8H4hQJRyT3tQKNWpQHSaZqx2rPws7jbqqMHSLYs",
  "key31": "5LnMYVJQeSUVQD1ZHiCUGR611ErLXVtLtUrLa6bCu96rSjMsxUGJcGNc2ipF4thsBK2arMUEt6guRF7o25UDyLRr",
  "key32": "5PEnDFx3sKJjqbQiPwQhgox9EVQYveT2Y4PKMKsTRJn9W9EHFqjNXMicG3MDG3RYWiJ4jScnUCSSWaKbfM8BUsNp",
  "key33": "XPvs5bbHYvKKjpkZ75eWsVS4gtgJaeRGwv69JdSaGw1fYmKMFDYUFa5FTEGAJDWepWRfLirVsNp45sD3q8EiRtU",
  "key34": "37fpDxSRTaiK4VipNUWaSiCs4Nm4wLKCL7h6keRN4t97LRqAv6DUDVbjdyYr9TYSX4NojwYTwWdzSN866DWjjojZ",
  "key35": "7b3zJnVMyt1emHMYs9eKxG44VNXjgF3r9G7MtQ4m6bZCg8C5H8Aqx4jcoWzYfzahWVeKuxbFAqFke5iMgjCCf25",
  "key36": "5Lsqe6vnhqocSoMvxvCe5X2WF7ExTtph9wmmADZfz6A7TVEE12rJTHMmjUQWr3FodaFQYWBtbdQ8Aom9rdaSgN25",
  "key37": "2baeCfUhFDW64unDc2neSAM2S4gqa1LW3W8UYnrW8kVt1xSew3sa21Vw137F8P9DVny5ysmqhLFj6hmxDDH4R4Ma",
  "key38": "bn1zMf4hdZXo5bDv7DLcniXdDSNPBUcTMT1rW9ER2YoQHzKDMc83qbGhx7LJDXRSMvtc5GoQXq2w5TizuB1X14m",
  "key39": "5m3vqjXKHwWY6m8J58vfYhbmwBNqhCgjfjfpTwmjoc7MF3W8nNw4okpAsEQJMNeYnsVjAtFgatmcugnRPEpQtfQk",
  "key40": "5chAwPWd3N8sry48nqT5n4NavVSRj86vukqYDGoX3vE3rqSgTks2fTfo9rkXpmJfTKQvWAmswfhfDGTp3VRewpxo",
  "key41": "qi9V5XFmzS44NCPpHKmAPTGbHz5HoTSLv5GSapn9Ga9Ys2CkvZ7Yz3wystvjTeWBkEuUPdLHd1MMexKAdJWzaDh",
  "key42": "5yvDYLZ6KvXkBt6Pjx4rC4923kCmEe9SuFefMD5hfy5ZXAmgGgbi8zyT14sK8QxnwwiAun6PeZV2eShD8FumqiKf",
  "key43": "VkUKKdij1U3SCn1wpvQrC1N1y23TnJ6t6DZL3gahvid8LnfD11eQJsShYh4Su3H3MAFsHxpKgNXbWnTxhX7XS32",
  "key44": "4GNdXq299SZuv5pneGCPpEJ7nBLt4SG52nyw79YD88hU3uzL51er6HYFDADdqq9TMEC1uhNYfjwSjfJW4U5WZcah",
  "key45": "2vrEjg78AWx218D5Fyc5Yidn5e8oh6uShScQyTprCZkhMyemYKHe5mL9FLK3xi74DYHP7psnrBk65bkSLT4tjVC4",
  "key46": "pjxemWR3NXLSVFSqLqBrZcVUUu1raXkjoXo3SwpMkpLd7WAzxEStP3awE1zmqWoMtqvudqYBs8X6zkzbnzfhMRW",
  "key47": "5L9tN8LjvwcL6cb9oP2np3veoa6SPYniXnEQYBLt83aF4CvC5BZjWAb3eHB1QUjPkfRX25W8y9YLgF5tFBKVaw5s",
  "key48": "21p3J1GDBd8Go4uMyWQCocQpAHdwYqkyuwuNjNN1yEgUfD5TE7BypxaUxQD3sWKBWxmKfCBVLQEwJUyayuN7wWqm",
  "key49": "d5xffDWDqmoNrHRUMsXuYAJSixsYme8rsBpDqsRkm7r44Et3kEQCnYg9A9gmL8fdCVGMGZtuviBVbeRQWtr649q"
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
