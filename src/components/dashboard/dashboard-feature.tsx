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
    "5ziH61buW541TjQB7PH2ABWB1YJNcddY4mMk4o65tdFryHwHrYQnxikPXR2u1YGaz5t36fygZkc3LZ8tyWMaTtSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H24juno4ENoWNQib7hnREzuH9pbXQPMF4UecgrV4kTLv5CdcxCnczzTHwm6SFtQFCDNUro25hiBqAGXvS5My3i6",
  "key1": "tKbwpuqQJ9GEvPbVavxg627UdrJqJu8U18LQSvcK3DJpkbx5uz4g7tQ2ZUnMtp7ZtTPGTd248cG1S23ZNvqHTBX",
  "key2": "x8VqB3qVaGn49r3EMNSiadDM4gqjmhGkzy8h98N8aLYotnj6Lf8bfbVjthgSD5qEXJ8ZqimzuBGj8Hr4zqHztTW",
  "key3": "5WWNmiCrccrBvcMkDoWoCbYA6FBL64an9aVNcsPSkDmCqfEnsXWNYJZesWVBu9srqLw6QZyXezLKTJP2hyNbaMgv",
  "key4": "vK4yzNNVXgxY4phReRZJr7iasbzFbGfmUZbu7uSJDQkHm5NTxjxhyvwwr46ixnLzKxggrLRS91VFGDms8x1ReU6",
  "key5": "bY8v9SUx2w38QYr2iHJC2CsFAuMscmTfnDbzDDHowK3bdck4dCLxR3wsMCbnts6zvYSwViGoY6ohwFbNqkqztbv",
  "key6": "2Z4W9hm2JhqbJvmVCamm268618Jmn9qTYWhRLibQZzB4en9m2rirLxEsVrLQXQTRe2gyzxNzbMV864URqvbmoqFf",
  "key7": "47jmfoR3wt7xUz6StqttmBWk2rNXKcvZbPaSQ37fgddA13P3oQHFmPdd1C8cRwkAgmZoWJLH53SPBmqTBFzuGaUa",
  "key8": "4piRrcb4RbkXEzdbb3CrUL8sE8WYixZDJ5QyMuAG7fY9mMoc3D594otaRBEsaPgHKvubRX733dcBur639h3KcAzp",
  "key9": "2U3j8mv51GKz7Bcz2zkcRhESAdoXCcMEkB8esrNA4iiXK8mLgTmF6xubt5CfjGxcDpBadHZuGLoHZrcePsy2JVqS",
  "key10": "3cNxWLW8yuiDGeeeAsZCWn2wGVGQ317DM3pMAoGBB2ueq5N5FGJeUaiN7sYDcD166oZrSseuKFaEVu7XyVwnz6fF",
  "key11": "wTgqZc6mFcJ6QQew8fiSSUikzFvTbrTF788vkuSoz9NjwFc6iTDsQqa6aaosQukbeR3o9kRLF2XXtbaednampvP",
  "key12": "4CwgCJeFumLAy4qqPqbPvYvQxdXHH8dzAGDcLNWFU7CjJgq8JUKPFXaG1QUHqCLMwaWZm5vEMDx2EDRkPb1zXsm3",
  "key13": "2Q2Xe5AzQHMvpwNEUED7PjPmgiZP41kM93fuE3dKvfyyc1V3DhLizfof1LKaeGamcXuqyMaiuXyx9xsmw5zMDwhc",
  "key14": "4hwZy2vQVXCNK5X617ULHSpfLJEXVNEDKdGz9WV4GyzUpk38QwF2gsxeRN1jEC8gzhmuMTR3H5ZWarRse8CWQCQn",
  "key15": "4iKMYHg55U8FMT7GN8CUwfHKm4BaUXQtRYUDYYsS2fkxMdmBuq4RCtm4QQN9PNtX1JGjwS29TYkWyq3i7U2L3Rwp",
  "key16": "5gJqFpattAyfSQfKZ2uRStNhHYzqnb8Log4whgpkWr9YPe4SQEtvZo3efSThJqu7XEWUpib3s7NcHih4ZdpQo2Ni",
  "key17": "3ZAkY5eyhzoYj826NBnqkN6jLi7kVGC12JqNSfs2SYG2igwXZEvXrAHSpejiDTnJ58rxiRMHCYgkMkBuDj5W1j6Y",
  "key18": "2thH8Xd75hwsFB2QLnPhqo3fPLprhqi2s1pwtF9iy98izcT4EVBKPs277PX9V3NZFFpdeJBHH4QPfUQ8rfcerMTK",
  "key19": "26oDJp33YW5UGTroHaWHYyxfhsvitsDCFPWAWw5Nuf3gjsiSeod1S8J1coPm7SoXipiXNGP1KzvtseDZyvGd9uLq",
  "key20": "4PFK8zq88gMUfjyT8kFEvg2urxFXZeDb3BBrEZDTPcmmoSk45TsiuX2vafE4UUt9bjW2qvoosWMgnJ6xVkEzrxFV",
  "key21": "L7auY2M6AwybeqoXdBdmZTRZffqu9BZ3Kn6nqrpxTmWGcSyKwfdtpy44vE6QBDZchH7zcuYweENJab8h1HRqoz6",
  "key22": "3t7KdXc769Xt8RhojDN7269mtZ2sAsMC4XchfEqbYEkJQCQaPmqXnkHWU9uWVXYa5aJR4ct6EdngJZgNkMQZdLMN",
  "key23": "AnLY74Ucmz5pfgBxRk4VnxkAVgLKqfExx15f7m9tswJq1Rp15V22KLkKLWigD8cPbYNsKAtcPiUvtrGZd9wNxYU",
  "key24": "2fgHW81UwQWKdc1eNbF3aEz1NUwwk7Y7TFuJuKXasr2qgbBSACU1VQUfCh4Z7cDJi4aWLQu2xFoEVVTTzR7mumNA",
  "key25": "j1FbhPuysevH8aqw988UCiDcgXHxRuc6JYnzaZo4TLNxL2CNbiWo9BebHpNUh6cikLyCkw2Fom8nYpstGL3am8Q",
  "key26": "RDwiA3cgLVcGyaFMZwUDKVyk1outvdoNNJUGAjzsHEzC11QvpgajNyRcBfaA1HUWKRb7jV3YXFJrxXj7eoYMu2k",
  "key27": "X1abUC4bcF5ToFpTWhAsbwVqST9SxK1eePbk2qqq7SSyGXGV11VrYR766bztGcYPp5wWyeZiGsWS9nt1ter27cN",
  "key28": "4vSJTHN8ENFyqfbsox62wjtpsp7shmcmjHF6fUs9ff9T1DJBpQRo7rcjED8aGUDJ9JmSSsDnMsQN4YygzUtnG9vh",
  "key29": "39njizPRZX2TYfVPNkvZVbqQ8j7y9KnDDJ8uNAWitUhCnCTVPUxz456kwhYusptXD1xMf21cZ2k7fbgA5DPwgqtV",
  "key30": "662YDEF3D6DxtJ9jpvVccbx1nNV2XTdKBXhAef3KpYZUREoKVD6iL9P9v2B4orGwrnRMrPyJfzK63hyRVwByrmnm",
  "key31": "N5ENUVL3cZoMUsdw869a284QVEV1tYPgh8D9TkQSZRhvojovfYDw7NzuNeU2MADFf7u7GuEPaJjfzx4AzFAt8xG",
  "key32": "vejDCxXizTSixbpN5Qh31ZgYDs6ekKMy5N8pr9KdqA2QvufXE2pFqNW4CchaztvKGWTAWeiLzRTjNUMDD5hhMGo",
  "key33": "2ZNtsVgFe874D5DffbNkTUkxdxeBE6upfBFGXJqBdunt1RkUf46Fg6Ltckj7xmvyYB2BFuwNWMKrcPpD7ptpRYLs",
  "key34": "5n2RZsCZeHdKyPUmQWHAR59zYuQQdUFVQmUEH8np7BM51aRvauGaE3qMmGPtuuabYaBPvaSunDmMheJoAC3JHktU",
  "key35": "nYu6XHN7H1cdjPSVbHStMPcrxQRiUZbwmFZsk5N3dPMd1B9PDAcCkX6vn6b1DVGpAVMMr6p5AuvmVkT8eXSWweV",
  "key36": "54BwJyQ7yGz8FZLVKnkBADanSr9qUfWxusp18UR9oUH6MxvVVTEv7TusBzgXZ5m7LnJTP8uk29bh1YkqJMbPpgZe",
  "key37": "5BjkBcVfeKTLNTRmAiLkSfygen82cSKDxoYo6DSYK5ChApnr4i7ZhiyX8nU468SWntSLjdenQH9JbbKi9xxEvLVM",
  "key38": "5xGwnEDoxUXGm67sTPDL5uxVv6nhjTkXFU84sMtgTQYDLZomprSA8tgGm3tsLMd2QY8VrEsGL8PhRWjoBqWca3QU",
  "key39": "zyh34yVJoRivNGr8erLwxdM3MBznyFKrhwuJSW4Jwam6nEr37sPHUbze2jLpkSBUe37xhFK11tRqhhkE6mwo9KW"
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
