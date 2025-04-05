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
    "4A1iyqvxdsATFSjAuuoLpH6k9UVDmWyav3imaMAhZrhr82Go8ZUA7S9PfjyFtEpPF3rRecneCQ9ydgFdvcewHoHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6VkBMsX4yiBjvJijwBLBcA4QAZcEHF1qTm2y2qVxAZV8QigQ5eENf6zBN8AjpnVbBxZBqG3nVRoFhqZz4hnyYj",
  "key1": "2ErKfw8cAHDxuJ2Ec7zMrtKaikdhrzSrvcV9GZeHuUYsMXAvKZT4xdDNbZkbwgdNz8Kz7L1zbxBtvYbSe2iRZTTB",
  "key2": "5eeXwKk4wMJ17ZmSEMahc18hnTbEGQfLWmDxRamZKRNAaut5j5bvHFMQWv12drYFcg2Acr4iZBAnVdTaN9qgxFjP",
  "key3": "5NzzSjHozgdqxrctBw11iLKK6CZkztudtYoef56WtXar5vcybc5Sbfa4JowiwwN4peWpeoDVZJN3cQf9yK93WqMV",
  "key4": "5tbS2dYk6t2qA4ua6J3q4Li5hhj1Kdhfg8Dakeran2uTDJxn1Hmp2FwDCUu2c2sn1fHepwCaW6rFF5qGi5tYKbtp",
  "key5": "2CSd51vzfmM2V3g7m6Yqc2ANZRtkq24AkRuNN9cb7yKhonUqWVQEvPB65Nnzi4TWZsGpLSdCXPSqBstnRDeyvrD2",
  "key6": "8i3cKbtkWCjzCWxVWGecgk4Mmy22ffdWUVhPMMbQqc2MePKtpS8U4rotiNybasmdV1vLZXFmdJTX42eGtpzY3os",
  "key7": "48SGx2YkVJdMvhns2uta73ztEePAid2NcrcXhZpY7cw9FFps1CZJXHhj3mB93SMVkTSu7JYspU3J1QpJ1UpRnkZ7",
  "key8": "DnPZYEdmfsZzcbyX7wZkiKwzYbz5QYE2WWsBxKQcAVxHCnmrwed15ybuPeZ1Ski6ZY7FGwdfxWAFSkGYo3PhhLP",
  "key9": "5BDRjs54Am2xadphvUTQyuSupgD5H23sEuyeRzS6HVy77afmQNKnhViepsQGyorVifW3FvA7E1bhF54Q8aRTbWXr",
  "key10": "3FtFUkcgf3W9LEx8P2qk2Q32hAG4orG9BocnFUmNU3cWinTTUwYMYK2gEmJV2itzrqZ4g3jojfFjhYznK21zU1wW",
  "key11": "43Uk3sTwmD6xmup1RbMHj13212XpXRhf7ZnJtKDDu133DZN1NNZT1vj9UyDf6hPrsY33yvF7CKMUUVm6p2uoDp1Q",
  "key12": "5p7FqaqwvJVEN9HtZmyg3Xe4QyPMRfD8JNLCtyxczg5w8rLo1xJe2xk17pNAnQ3ubGmsnh2poeLvbAcyPtp4FsN9",
  "key13": "FquQRUyxLF1854PhWKVKYny1jzwzw8xAx2eMp3ecfDWEgAdT4tpJ3qiZgiTkyxVX1SYsf5ybkDzoob2HgLyVz2E",
  "key14": "5iuU3DWhDoYWByWEH22wpeNu2HAM5iPDnGoRm1cqb9d8WK7f29agcu6K8HtVN41NnhNiK81z5PKMd9SJBALJ1SPq",
  "key15": "YVbJDCGKxN444TVVtGjGVorpQoQmsAV4rGdhAcQVosb4tNhYjN3d6ugX7ENsmcN4Z8pyaEWVn5rHqCx87RRiP71",
  "key16": "3my35wqC8XpnegvTNU2qTDtVhnUi2WinnRsQkjyV5dAJU8p7JjsNU9i513HBACDvTBSBnS12Y8HBxMAH1XupXpaT",
  "key17": "3c8EebkbNGGd91dEqt9KmtvUTeX2jSMECGBtnnxVqhU5SS3MJygQagWcwan4dcgDRQrQsYzJFm6zCe47oxdnRynm",
  "key18": "2Sqhbc4tEC8GbC858DPrWXfSASmuPGLWnnyTXHHumcgWmcZq3TH5VuwyLUCCtHGSMw34S9DAv7e1kd75rD3CQRXX",
  "key19": "3ZPHgkJawgeA5MJK2obUX14PEt56tnhp86ckvfYeaMiNuxM692Ddoj9LC1x3drGGxJ1mNjEMjnfunVkuvWAYeYSE",
  "key20": "a3UcWsijdhDZ8yTNhsfTnGbAzLgubxD1inSCQEg58sxoYhJTLmNTMF4djmb9R4j3A57E2xM9ZLwdj6z6HxRPENc",
  "key21": "4WfkXBcoypAza6HmaUQTMFAsyGTQgGcwEijxkjZPxdaghqv4ocMr9nrYtnyd4ZgnoLasVQ6nYzNX2K5oJEzMwd9b",
  "key22": "2ZcR2E1L5Z39mjG9JByhMeknjDewPnXXUaV5d21fFwd8mXkmXBkoXCv4Ea3hfZmTZHd3vzigH6KdFLXFFjg49Rno",
  "key23": "qKKffqPCDLY56G73AA1MmfRA9Xiitz2rWKAkuVaofmAYWGaFAbXouvcjKUiD876266r8JiCMn6pBwMRMikn3WP9",
  "key24": "5FSdWLhLuF9aJh7fGQikyuGzXUh64oM4UG8sqeS1PA2Cb42SCH5CChhxAkXhYQYuNNxk9zyiJVgi9gsj7v7zZdbM",
  "key25": "kXu5xK9KA5BAKKJB7X7DzTRxV3sAJLT2A3AiXbE2TUcessum8NM4wE97JjUQdnotRZaJBhujHpiyozva9b5pT8N",
  "key26": "5da7VVv6RNX8gJgmuzazJuR9cgEL9JDicKC1LxJfBcPPSz8B8vUtSNrrBjWqysP5VkU35ky6X3w31ERwxR3GbEvw",
  "key27": "5skTdcDemZDw2drwSGsPYtnDmENVLbQCq6VcumTTSn3NkN5vgEcCYt4kqZwnixomLjz5WLsp9hPyQGhMyk3QJtWF",
  "key28": "5jWtzFJYrhY2x7QYuJaQzTBag6HDDN6RbAr4jNwLtDwrQK5U5A4GLb12qMVx6d7hLC5Zn6NRHKBLqC16HhsqxzTG",
  "key29": "4HiW7jzpGvM53dtkgoBFTj1t9ZV6C4PGnn5VTAgdpKRVycnYoYTXRA9oyoDNsH5oCWAFwScMqpHqB43jJhai4VW1",
  "key30": "4fJwTejFuraibJL1a6mT9tLHcL2muSNtdwKjSBpYuUi65K5hPhLPtxhwKrpcYK1A8Kne4T4KDUYXjb7Pn6E6WiYj",
  "key31": "25qczW8gD6LbMruzTN4mHfp7gdzmDK2mLNSqXKaghNKszKzRVYVvFxvwbe71Ro9RwF4s6gXDuAt4nb8PwBYNRCZQ",
  "key32": "46e4cVFSVN9YBj1AFsaxCv2qG3b7DS3eW8KfkdgsNExgks3wf26dawWVGMBBxJ8BzjS2Fz2ohE119777J9XLJXPb",
  "key33": "7rfkPVJuVmHJ2ti54YMD88yKcAW9SoPpWQ87qkKBBY4Kpye1EPDBLDz2As5nseh17eT3ZFUpyLKQyxs3eVw151n",
  "key34": "2UAVZNGxTPXvvbBYwRiMrFCGDopTEhNEGUiDWE84wZjwtmspGUJMoHv8SdMzsk5ksChhM9sU4Q43KmUv8shFu6nb",
  "key35": "2d2Zr5Bo82aHaYk6gSrmSCYumifXdXJww2mH5tdn4PNSXKyJ6rfX7coXKJnBDFfasy5sjyVT6B72BN8FwbWvwwvH",
  "key36": "5ga4Xiu4tQzdHUaSTQn7Lmm9XUhVc9g2zxqc6t3mTbcbQr41noimPNb6xrLjMsUSpXunNUTgEhYtqSznpVJTkiqf",
  "key37": "276p4ohcgSt5cgy5B6FsMvLhpB5vYYUqiJDoVNpaUcuAsZsWQXfiE7J9Ef7DeE5AepV6oZxNgaCrSR7oUKCQmpKx",
  "key38": "frmovazKwV7W3DLJ2LadVeZv97857TYjKGuC7fxCqAbmCHMew6iPCGESM9A5LXxxdFqNwuoxspdmx85xcEvRFCa",
  "key39": "5R96TaE1ABoF7Ax5FN32snzNiVNxmmFaknwQ8Qh1oqB1HQKz8AcxYMXP6YmDajztHybqNQDzkbsajYptdsH3wDVz",
  "key40": "2Mpr3FJLvS2sN5gnjK45y1JctE87wfxkCF8cKdpJ7pjJUQPrYn3uEiJsbDLyWNx92T6c3jc5QMHWj264eyotso63",
  "key41": "gUgaaLSbUpUuVfg2c4hNmgpMmRdLTaNm5FvELVsszJV4HQjniEDWnGy2EieuYjqM36KiGMRRE8nCNgLusk7Yif2",
  "key42": "6aP2AczcHgrHV4X1FBr5H5yHMw3hkEfUarjT6BPbt4anqECSNFjjMS3WmK8HodNMgGFFa4rmuXj4dgzUCeg7yF8",
  "key43": "3PvVz9NqQoqo8wWoVUkXGJLez1eAR62qMep4x9UTbijkMaX2QyVkU7gCNBp8ZsCNncL2kdbKAQ533tZdR59MJBFE",
  "key44": "umJTLCgdKNhxhYWMaN8GSnJxJm92bSUMBKC2UQpryxhqCNCthUTUiFkc9DQ8swUwzvU24pSmNZmfszv3qP7Ragn",
  "key45": "3uYWPWxQyq2sbNDJhBFcw7XJh3YRw7vmVMuHZwvQxJg4HkvX7EKLpi3aZFMygdtokTRmX7qX9j3FQVKDtK5diSSL",
  "key46": "EGyRbWNKLQkCao9WFoZhdU53REhacMw5oNEhRJyoWj2nLdVYDaqQQYdZ3ank2RaL5DAr1vV5hKUY4bWmed3p8p4",
  "key47": "263DdpK4W3pWtq2vo4bGURB9ELLDCHcfvZBnyDxmwBsACcDkYofggTXieCuNRNoHZCb7U61EaiAKcKyk8gttDNNC",
  "key48": "4rHuFFWUMf6RDg9oneFwGpRpvHeQHJYGqf25tk7dWdEzcEU93sXs2PP2735krKJyxX6CXwn3Ziv7wxVHBfueWrk3",
  "key49": "42nvWjwStUpZuPkoTgwiPE8qKrpWVPwWJdCnAcG82pw1Vw5MKTqTtqajkizbn4YWws3JsxMRHG98yQpjGx6c45G1"
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
