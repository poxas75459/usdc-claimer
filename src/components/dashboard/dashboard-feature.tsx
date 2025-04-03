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
    "2WXUg4hRuASPAC6L4iSY9Wq38uMQ3den9jLamiwwtmwrqhXogMJXZtQL9JYKYzSaf7PmETtqw5x2nXdtc1iQ5BxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZiyTqTEoQMxQYbFzZ36tKpZHimTMiTbZneW9JBDFGySSPqSf5cCcX9kvdDNyJc3GYmqXYQDomoHf2F5HTLKiBb2",
  "key1": "2LcmBbkNtfPkrpvNCov5RzG3oPHPgGBGKMAdCX1qLP7FeGgMtiDzwud7DGXMfHq19QdHr9x2XMCLs4aEgunfALCi",
  "key2": "5j1JhKganD8C4ybYRBea6Yo71BpWLXaacu993kAWJ1qqJMGsf13LQrsJgp4Mp6YztMmY25Yg8YhSCVppifTq1iDh",
  "key3": "e1TGxnvMwXL57nnWjBK7iy2vwjxJ5cHkPBvfY2pFAXfeHmzpcbCwvtPYvFsna1c2ZjmuRyFZJvTVcaNDZg4xEfo",
  "key4": "3TDWmDoSrXNWgPu9wLYsJkUadjxuchfhFJ4DUa9QwkDpRR1okEmn2K4akiggBvF82A2mvcfvxFYCkXGU5orQ4k12",
  "key5": "4GhfnVWrEm6j5XyVw52YA1bT6m7kVio4vJAqiQYbN3JVmormNaxGBaXUZ9kqGyd3izJfg1y2HSY54aLrcPijBBbx",
  "key6": "GfiMbZztt87vbJb4TXk468jDNiVajZ5SPEq3XnWH6NmqhJxneaKHrWfNTEHd4L1RoeywbmQXVjyZQGtwVHFKLZ6",
  "key7": "2VM74X7iKykiiyepdq7tZcm4pwnp4PrpEoCmb22pqdsrg6VV8dcchjFZYjAb3GucVrEVpTtz1Ai5hj51bGhTM9yU",
  "key8": "4nvETJQU8YYmo316YjMniTBTffibAGDUS2KHnaQeSjggCfKA19gXcsNh2k3g3u8JWpVrXcPyGNgiTTbt1JLTzsQf",
  "key9": "3mHkmYSfJdGYubPmzSM9CbaHTjhpHfsWmmTirstzT7KdXApukEdWchMKzYx5kn2sriGLbeCxUMmHEzU8nV8cuSqE",
  "key10": "2z7ZZ3LRAFxtnM6QFm73am7fLYw2cyj7tS2fYMF4BQUrdjPeMgDn5DnbTRswKNm9traVQDrhg2tJ7CfshkRDvWYf",
  "key11": "48q9KWWckdfkR8a9a6vYrncgWk1tbbXxx1rshs1BGoKVX1ZBB4E8ByrvZuJjLKDx2xtnboKsYZbp8PdY1oLDzaR5",
  "key12": "A9WC92TzjdgrCCiEtMwrefdP4GwL2dmYkzK9Ts428ZopQQ3QJgEuNhPjmmrpHVdcK7dFr42yb9Yc9mXAURdxRSE",
  "key13": "ujziytSaC1vTCttLFicSTWfDtTRaBMV1GXWtGLByYQiDg4qrgSgwXnqRjT2MYVghntFMhC3JsPL55cvtR9ZCGYg",
  "key14": "hTNjaYJHuKu42e6LT6Es3TADooKCk4wt5hVXtpTTW9KEoCGTSDXry2XNPbjdKu7FFXTaK11fVDSzgJLx47VhcUA",
  "key15": "4QeUqEMqgB1mzcLKUyB8AeMzjf4fz1GA1TSPBR8n2u9j34YnuuSwQ6Mu5mDK6Aoa74YeX68RXcCsXLrJTGvMgh66",
  "key16": "2diPk5NbwKoXe6ZRyVNsF14KT18uFPWgEwMgsNt86NPG1ri4qHuRi2VhQbTdAe9RjptaYTen4x2ckHw5ZhaEVf82",
  "key17": "4NQjbdesJprkwrJkcJcZMbXxGjuqzpBBZjkzcXme85VrG3cCCMacmZ3NEyYNUD5bGiDB6h88HgVUizDXxgF9rCdX",
  "key18": "2RmrQ9L2T9TRjozcHmKfvAqaazBmbqJnmRvXSWh7LkaHjUFBQQ2FApCsPmexVWhLorYA2NZgcChNsJwUPhHBvKE6",
  "key19": "4TtkPefZcsCKQeRcAhvwfVgLcpQVhamW1CXrvhrVSeBEHWEu3j3Ksb29yainFGKvBsMjmfbihco14d58fWNTdDks",
  "key20": "4dKK5MxsurMDggontGf9VVGzHjzQyp9d1xuKqfXr3bkfo9hxhEGuskCndfHNUKRr69L39bC2h8t7vrf5wvXjF7Uw",
  "key21": "5oKAnDUB6Np49oTYy5xKCYR3pvBRuGjNeTfjQnJwXakEPyV4WDjmk5keNyu5oMt1VxHti91Gu5XgbQmd2zZRhfhX",
  "key22": "3tXuvLV9yJPV93V8oMvLhhciti1TT8jLyCX1GAd5E6Xgy3fdAUGfDnjuPBGU2S86inHWidctPH6sRjDC6SSAHvjM",
  "key23": "41ev6kADKZ1Dha7RiCcCWopPsBizEE4h3xNDP547G5NHdQv1cWrA3cvXoCvt3cRsRq6QmmgULHDjidBQboDn9D6d",
  "key24": "5aw6YrkYhSLVEDffQUL7zUQbJFYzmYtXEW6hvmpqVcLHnaMctNmW465GGkP2vgvMRaDPr7aPBmKNwwZV3AHEZEeN",
  "key25": "VfuMXZ8Hwg7egWyaMyrVWeGrqz6wPhkcxQ7R7PrhPvcZaHdoSwbYuf6rUtH318UHR9KLmhwQBszjip3J71x2MjS",
  "key26": "txGNecN63p2qM8yqSeryuQ67tW8bmEhZUX8kX2wFFa2Z8ZrE7B7rFo2DpXiiCaS91zMukdPtskzwsAAEBzmhLLE",
  "key27": "2szb6u2DbLMicF7vv2rcnU6SeFpvrzfVkc3KdnyPhsP4rb7vmQDbWr9rXAGddc3fHrfiRQFzmZSYHQ198iBnucrV",
  "key28": "4aYdck4b6rMMHvRKzc82dR5wG9U4PySBvneYLsnpZ5aCh7CG9jN4EdDLrU9QQPBwwozq21py6eUF4mq5s8U6jyL7",
  "key29": "55aeuS4kDEcvWcSzmGqwEtBmLogATYF2SSbkpoEEUYQZ1uP3yVbS6AJtXDzuyEAZKd9ZTWhoD9DFoSp6DodX1aAA",
  "key30": "5yd8fHdZj1wxhqjrNeQfEV7uLNNZuoP7KrDoMXNhUVs7bFQMBP7j3tJZq9f51x4zpQGTE6aEsNLRhAg1NcKc9K4E",
  "key31": "4yT5vciDCriwL1iA9DbUuSFvkfaZzCS1n3J5GZQh3J9Ce75NohHMwoCGRFG9LPvxP7kGzrzbyswH5T7nSZu1zJdj",
  "key32": "5zZjVLN4ZWuYRmfdafN9kdZovNTAFk8X7svo5YASwAkMYAuD3kq66VW8Xa7HMwvkJsnkXWnC7KwPettKfsc8LjfH",
  "key33": "5cdmuSYKb9Cg8VXRq85a2MGYGLM1nMcyQ73dj4NzW49LigGtt8YutTULoytxpAJUbDNqf9oNyYJXY268SLgmis73",
  "key34": "2b48mzAEiUFugN2PZg2HrV1WJaXHaC4TqLD4DrXgpeMM8aYz8uDekYgp5xezRYGpF8hF4BdC7XPB5wEHTBctUKdP",
  "key35": "uv12cYEcUUqHTEGrh9BQ53UyRvtc1AVQQXpBMEswwXAyFgSg7oPBfBa75XKLya85Lpz4K2wXSN9U46uMxjnee5w",
  "key36": "fwovWAsvXKYoxFQMhKmpyq2gJybxaMnMPvxS3TiGfeh2wUw7HN9cX5mQYBcicLwaUKb4siTeKwQMyigcHqLMUzJ",
  "key37": "EWKrpv1ioom4o665kycogBsciALd479KRdcquqqUWqXB5Zy14mtRFPXRsc51bMZVe5NFUaUi7pj8Suj4abWD8UV",
  "key38": "4znhFs2FM1Mx2uBj5A8P9C2VUy5J8WvrsxjTLDBrBJ4atLwc1ai2Qim36ptTE7oNpwyMpP2AWMxSNPF4e3SMDcSe",
  "key39": "3cJ5eBd68rRkfDwZBXfyt1jqyFRkjYvxDUcUmmBNp4HFatkJn3pPpTrkNjFxcDgFRFFayBtsKwKC4WkdBMLNJ2MB",
  "key40": "3jMsjQJpx6XqrDkcrrFoVuz2mxhKGZQzTWdpB83SPR9tbCFEKmqiNPkho1VsdqjgHWH6LardsLmdWnZLJGVtuCAU",
  "key41": "2rymiTqd9tkEnRfFkiTBLndmBXR3HLB7886qnC34XJ3tUaSi6yVUJdPDfCb9cPq5x4yyp3HzfoQGqeubtVpLZKjp",
  "key42": "WSzsNHxHuvXPvRCgvWJr3xYZ1FLqGhxELexwKUj64PR3mSkztdPjKBrz3wpT6EQrTBdRzqY14Rc23TH3PH646Vo",
  "key43": "3ZMRHKyyHncjiFLuPSWAh46LXKFStQJqZLfVGfummpEFxETsiqrKzXPQGW3bGUsHSvmD3U99424HVgit1fJ2EMom",
  "key44": "3Qy7FG4SNborCZDKScpPkfxbN7cPrAeZBnQmapNz9iSNk1G1zgc4qp7QaYJroWC29wy8ubw9GtQhCmT1UBcbqHMw",
  "key45": "3rTNskeW7kSqBmWSY45zpfPqFdrchMyknqaroTxrqgoRrD9jZ51D94oswWgDeG4xEitLK2We13ukBpihpmJpN3H4",
  "key46": "5FP4cMkbhVYcfcYAS71Cs2KqU4cp34T44w23iyiaAJofANvPw2ccSZDBgyhAz5DY11QaZXz6rpNX1BcMpHNqQmKg",
  "key47": "3V7JuHQUJmSnocPQfgb6U3DUnP7FkDgwW2QmbdRY7cKz6URS6zNF2tVbo4AN2X8cbUrjH6HiiDHtvxG72YHFeHvK"
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
