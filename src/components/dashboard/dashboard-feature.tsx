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
    "3nZK34Pttx6q3oawh7uUmXmMGoZLJevEZes65jfnR1Wt7UsmtYN3CLC2pgZtY1bGDaWPcY48yeG8PXhmq8eXo6X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZzN511UVgkSHVwiWehnp1cZotxW5CyeGWDGDxhbruV8GgoVniDozfpWgvDF9q5tiSnudYGYYBB37fixNEGx2YW",
  "key1": "3Eb15i6LEBN7HMFosDQVyHdppjUkPExvmobqCWLqjWqS6FLrPFbAJsWhWFCxWdRQdysdKNLxPZXvYLbW6uiKvNGU",
  "key2": "5GHUE33hLKAmC5Jtx3Dj8U88QVDPYYhRLr8FAt5CLByQmoQErzxmJxDPy8mTaKUjx6aqqnGNJ3YTnqjD5MJhSdKQ",
  "key3": "3YxZbac2oFLbuVX2UM6xsUyVrNxmLRsmX6ZqPxAr2s1HrTKchKcUSuMkvGj5KcR617918uFTyE9M9rTd5e8FS1VK",
  "key4": "1HWRC4CHd9ZN9mUFJuGtfQENXPNrEMrCJeN3VhENhkLo51ESqquoCzP9C63gspsnscmzhuxV1jgydE2jrMyKd3E",
  "key5": "sei1PtLvuZDjQeTnB1rbzLZaMpT94tHka8aHJL6PjBpgruTa4KEAyDqsNkVKh4bQ9XgVo9ZByrAHP5pheFoa8Xj",
  "key6": "66kE4XoL8aECBzUtaGDuLsh8R59rzBGgVaA8sWoaeL4j4wvFL8xo1dLXaKxhtbNgGGd5dTZekCAZTRCwyvE9ixhr",
  "key7": "umVCmSYbq2yefQthieN8SD7KKGKTMKSSbgaobJQHWo6gRinqp5FjNsJ9baekoA6j37abxm93UJQa8HhwQUeiz2V",
  "key8": "4zhcQqhFcj4QtcmzkGDrUbmAz8f5w1t9fjJ5QCEsfTPiA4ABZDvuAnjfx5nTW5tZfTrMaNViNUoAqEwd3WfX2hG8",
  "key9": "4aqiMMddrMT527PjrsBtC7BRWf8xpGCPykTDX4bsQJiVmispTmjfTf3xRnKSLz18MD1ekEX4NDd3KjKQTKjpzYfd",
  "key10": "2FEDnMTBqrgAf2nbzQ26yCzyuGujBUnvYJUNUN1WogZyZpc3S1rqnch6sYizdsjyTzSnK8LAykG27iAUSFhYHDY2",
  "key11": "2PhKsBhAinYmD5u6kGkmpJeUAhnoQvGvzAFVQGRakASsDUXUzN2cUTcwcPdDRfaU3LdgqcVtsps8sTw8fzefDyH7",
  "key12": "VGLQ4JMAsf1hgVHkPH91vm9vM523nLfTLyRpcNvxa92LBtfvsJCazUfCqU5zqk6vzz51FP6QuvhFWwSiBkGwASp",
  "key13": "4xf5DA5jpxrPArhvBrGTXz3rBsfnnCSpgEajj99RifXHCmDrKv2qJpgkN2LgA8kWpfBpMNjo9eZz28LDcQKY1jJS",
  "key14": "6BG28xiwwdsguTTafm4djcyB9JNgbDszGgSiPN8Pu5eszc7sYZo1BVGMmf2P7dgp1yxvaZwNDhs74vpW7TTuFTe",
  "key15": "RWG5GKhQdNkXu2rNs4oE8t1kt4P9hdKaF5jtmXo4KTYvJcaM5BsUM8DvNtREKAw1QfRbMpFS7D3DMh8LbM6T8qu",
  "key16": "4k1FBLwq24Ygi4XXLPu6KudkhkTpzTpdEUMzDx8rUukNCr9Y5h9LRTidSWwJBkTJJteRcXuSyEG21zycnk2QXGc6",
  "key17": "v1UdB1p7svfiAgiR6HJgmNLF5Ux4vp9u5DZ3kYcpFwBxiLQz5YYv5onzka8z8qd1duuckYf3CF5A8EaTMp7JArX",
  "key18": "5N8grSrJcedjLTfWNy9iPCsU7hGu22FbrcPS1jxyxi6yvAUQV61YWDP6g2Ra7ea38GRfcqqTN9TGicUWmMy94Hru",
  "key19": "5WLmNLD9bmeR1HwJDkEvWcX4kmxhf6DLQTeCBUTH8HtJu64WKwH3zmrEVe8nodJp26ZHZP3WssVHAxaWYLaE5k98",
  "key20": "3t4svUx7q7HdnuFT5p7rE7ULfdLxcP1q28oLa3kk9DYDjMDpQPSeRDrHo4916vg4sd6A2yuPx4QorABjwNB4qPUN",
  "key21": "utjRZxFr1YoNAzZ2bdYzZGctDiZWQXqdCUZf4DtdXdY58GrZnF8Px9zy5GReUHiQRKExpFXNciN3Sastc7MtUi1",
  "key22": "fT9gAwaSJKCsZnnqqvbNxr496hbt65r4EmGECGERXJyL619fhNyAGRjqgQorH4rseJPkYomTVdih1mbyk87qv56",
  "key23": "6Q5aviagEtDmPPxiC8NpqWJu6nXPVwpAFXmnwsMDSKT7tPvqoi2X4kqJhY7TVdi2qPa9v8onnYV8YaBr7Bnh4YK",
  "key24": "2Bkdm5Vyue6Qw6rpnRDzc5u3wgr1guzuHUqZQuhMj86biQ3eBPhpMNyBHHy6w43oqstk96A9fBmt9cwniQ5d4yhx",
  "key25": "8Q8du4B276fLrH7d5U9C6YjAQELKfjAcaUDyqBVLjJ8NgyxJRd6V45bMjGBD9eaZZ3oS8WYPqcEhzm3tNjWJrjP",
  "key26": "5FNFYMtuHq21WDZe7FqRj2k98smLLHqyVkn5mq5jVy5bj8QTSJKASKy6N8zuN1TqgivyTijDbo9v9LtTUw1LBpci",
  "key27": "qfDfVKLpCqmFXwE2LMjK749QYzFnti2apA2gKpTcar9nvmpND7wzQPK7jccZABnpYPmrPxDpdgVHgLFaUKAzjgd",
  "key28": "4KBkqU3SJzLXNNHLf2x67kwiifAcichhH2vMKg2dHhwTmT9xNNXy6gXRwkWF9KxwQ2Sjs1q3d4kdmHwA9cdSK5G1",
  "key29": "FNhrsbftzJzqTmdErFYHFY5ekTz1GyffNWPS84aPaUPJFT4RFGTcoz5CbSja9Nb85DqhaaBVhtpnc18BGjz3Eto",
  "key30": "ky1dBB7REPL7mDe2EbJieMKuZhm4Rc3QYTDnfvAnERJZMpb5qUDqorV4B6ed1HqVDpgKyjFHsSBRcAowSmMC6JJ",
  "key31": "287AY6VF4JxKn9aLixoF9GSAR2YUPbV1GPdwjryHgK4dWBoZ6TMWrSAUGmpwysiVSYKzeVdmUdmjLBfA3228go8i",
  "key32": "3ukPHrdCkp9S2HFToxVeZhxLhULSp8ESPp8Qs2HSRSNBd9SApidz8k88iKmcuDuz9hGFEFBernkATM7wKSqr1onm",
  "key33": "28dGm2kkyYa8n5GqsobQkaeyY4kgcpvXBUm8MrPvqDWM8RJ1R9pWgiB2voamsycS8XtewRQ99Xh54oSE7pbi8B2p",
  "key34": "5xKk5JRd5vSWyXUXFj9v8MAXWSzoESYfsAoYw69ro3ghivQMg4CWFn6pU3huN51sBUiyq4HL9tsFXVuMfVcW5xBx",
  "key35": "phaX9JZfCpmkbHdfwcoyc8rpSxXi96sjRSk4L7zLmVb44KWB4rJAsYpVNZJvfKmCsWhtyae91prgAJjRsC52ke4",
  "key36": "2Zh7fy1SRt37V2H2snKcxKc1HAZBKrqE5rNiouNAQqHony67L2qmpxtr1q7fezT8jFg1PjLhY59PU94A5jFS4NYT",
  "key37": "3yY9bKR6NAAjHj8xh6b29DehSPzcM4ssFAnq2P3W9NCwrWyW9ftxhzcEB42dGsfuJRiwJgPUdyozg6Ebq2XEJXsX",
  "key38": "3MrrPbF7C1uBiPX7JwpRWepXwPLFoHTiF2wduehMJ66M6By39ogMUR2gkfizmvzW1KhnjkuFZ2PWPb8LSaRBpLXV",
  "key39": "5Wn4vzfNfb9FjQHD58Dy9VonMpFzjprZXJZAM9jbEU8gS6RtWAY5asqUjj6aMKjyWPqWx9LXcsyo6FE5K8SknNCN",
  "key40": "4Goz1zfSv1tBVUJwnBEZg41dfv2Pbx2GJnPhMCRxEamC6RKX6ikh4KPh6StJFZiR5HzVJX927YHPmzN46m9MhGbc",
  "key41": "4QurUE7r847ayfytq5MARBdHutF5mNppP2iHcmgwvd5vAgUV3hfqg4cCdpSE42627LGdD3WoLWi3TBwQ9NnqSAts",
  "key42": "Y5UEiBhLr4moncMG9ex6gtbcL1sj2Gx5Mufv7pxkafrK2QSHm5B7FaQRVoKydUaCWuHd7813HERHSajeYmuSQqs",
  "key43": "3gn7ejBAb15F2Xskj9pHNC13hus77ZsrQCdGXTPMsuQJtFt6eisPvn3fkfy2puRh4u2nD3NH1YxkRp4BAQmwzQBu",
  "key44": "XU2y8BXyrdWPpLy4im9BoSbAhDSNS7WwLL4da6TLoRezYFo6FrWqV6NkW2yc7iJq2bLsqPFi1ygaG3mNKiqPWqR",
  "key45": "C6t7pXnuSsqEpfJdQ2iWE9b19fUQ8HidxGu1PZyvAhcdZn1cNeKf1yg8oFsUWWxsWbmHMn3TEXTRcRQHAsrgUzk",
  "key46": "2j9Hw8SqENWjNRJZ6MfeVJRAaCuyoZvbdWm42QRBSHgAEPcc16cb41HG2Q66G3Q2SkTuYGyq8dowfmcmzpwMFuhV",
  "key47": "n6aHFKWQkKPoAkuvem3qzxa5ERzqA48X4Ag5TtWHnoVrBBipzEcdyRJWVYfz6ztYMSyVG1o9veZ5mpZmmhhDCMJ",
  "key48": "2vGKvE6vb9tRYhzZXqpQp7uzdJSkWJspDZzo37q3uhRvvKA3hABigysajxL9Da5fn2wcdspbbUw8zCv2cpTttcKH"
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
