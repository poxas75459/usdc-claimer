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
    "2dPxr3ak2vDAEJjSeFRJoe42gy8FVYo7FpGbk6KLvZYZ63r4rSc4QrzeiTfi99b4oqPajW58rq4x3mQJNkw3AfZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YV1AdRhisrRj8y3oShVqgZ6MXLTY5v8PsMxduJ2Pfgn3dpnDsTPYPRJjEVNfcRwcYrXCyU8b4AEqZ63sCSJ7KHt",
  "key1": "4WMEBGRqBqPna9aBbLURuL2HvohdBgMVMeBxJydY9pVTPgH7EGAxggZrhiSH57EBRfeuL8qrTxKpP4CwB6zJwVY1",
  "key2": "48SxbYFbFgeuerND3MKcdR5h6Zgi6nzHG2feMC1rnzrkUfs3WdGRJ6ULCMc8hHejwoyyvaKEz2UrQK5ANEpZd7CN",
  "key3": "3QDpSBrDCYXFH7DbMMdgXGqe7Fenmm8V5hdVdiNxTJXVKYc7NLeA66j2vBxiYktzzrhkRRg2sasP2G6o6SEZ6LWt",
  "key4": "5fHaGZnkKFt4RNm6MX915URGRY7ecjLMLaNWPaFUaDRHe4585Lmo8WCaAwaB9ZQZsGdrZwYLrhACpnpo6EB2NRnm",
  "key5": "2DNy5WPtzH1zHvz6ESLmXNVoeKuZNiZbUDEJpfhK9SQj6fvzjDrx3ihXnv2QEvM1vC7TjZWii2zD1x4TgaSaN114",
  "key6": "MP8DDYmevjbrs9Ec9cNBbmG2AtjfWde2zNqUkCeq1zW8NsGz9Hde9yfKuRZSuKQAEKnRWRq4FLVk7oygFtusJ4c",
  "key7": "3dZA2N3bJHp7cCMEqeeo6prmTsu8PE9UKN4hPXCRdRozpajViCbz3kZNBmSENuYibxRUQEdR1pKAf9TTz3QaT2UK",
  "key8": "4mMELJvwWbXh5viPJ1KYcccu5C9zjGqnSZfJ9LkPuMitmaWmV4VoYaxiq6w74j41Ed9ft7HdsU8GARyifxUU619W",
  "key9": "3PgUT5AF3LSgEzJLXwhxUbHiafexLVqQ8Q6XKcZSHVqPXFbxmc1neciYy7kkypGnRyHM99XYECEi9vT5AS88fBGT",
  "key10": "5yowJR9YrwooBMdQm8tD69qtpieWoxdycb8mTMbcSeALRAMrrjDT3K83TjV4Pvidooi2wMZcdzUjCutWWCtYNaWp",
  "key11": "fvdm2fUk1MqsabobhG7GQSntgCm3pFWtqRuYJyYbEEzmhs3G1YKzioVwo2dsKi5cKnzLJMSxfoVnn7qUPwTXM7A",
  "key12": "3RQEENq2VjGz1ssiS4UmCgQ4VuFvrWfM8es8XMhiMoqHHWdcAoDHA2MxwK8t7xV38Dbh3a8GBYtnAy3a7qt6j9Sf",
  "key13": "53toL3CDiK1bb82x18q5Yu1HobU33T7kXFCk8VPdRKJ33U1bH5rZGwfw19R5GPgLYMJ54jPKBPnCwRtCtsDKGm29",
  "key14": "4hjaeojwUhSCDmpwyRdCmYeYUemJsLSPhqPu5Rr4wqtirfazpgp8eVZiqEvzqjK7qn3m4CUbqY2rnQAAVGdKHxZm",
  "key15": "3ugixdj92Fjoyhcdbz2xhZGB9NhkhFncWcBNHo7LH3XcVUULxQEbSqTfEkuZFGCcrzmggETJesu1Rxhk43TXTTAA",
  "key16": "318oGFpFQqCpP5pccFgtrjajXmuTEzAvDs1u4APWw2XXwiC65iC2hSYVLowE4arGtAKsqQJfJB7Vz4Ghd8A57KiP",
  "key17": "2xnGLP99vzWJqtMjM63UvYiPDP4FU5woHmCMr2Wj54XiJVtGybUSUFsDhQFnrqrrWSuwrvTzSUKfPAyaXFocSibF",
  "key18": "bz4r8u9q7WPNh2kB5XCCJeeJJ1CHCJuwHGnmsXmHcukhquH9DLC75oSGoM9qJRHhKAYKXNVYqqoAUySq3duYGqC",
  "key19": "KHgYtDF2JRZH8c8RboEJ9nf4suZbVGTRbkfK7TWXcUW7aiHa4BURkgAaJyDeX11Zf7SycYdK8wKL72rRbcg1B28",
  "key20": "5eVsHeXbZjryZk3YLd8qYSwgSyJHizGLWjHK65GbzXXxAF9gGndjLSosFEuaTMaeerXRtBWWuwvQ7Ust6NPuoS1s",
  "key21": "8oBSBomdJfA2AjxP6ah9GRAXKFMUZyTsJUJ7Vro5XcXWWJN85Lf31Sn91H82yCcDv3s7ABskZ61tyt3ba8SghNR",
  "key22": "21L2q9cS1YZuR6nNbmMLz7RrjTGaLHhqHkRWutkjE3JgWoEcKa4hmZ972LBtDGD71sxVqUPfUhcS9cZtN5Fspotn",
  "key23": "5L9pvhE1SV8VAQ8jdrCtGoZYCw6V7LkXQGRwPYUPmzB4TxYUtrVLXnrJznbQ7WU4uJkXfzvEyKStxriefqjtgkxp",
  "key24": "CfsGQFBPQwK2M5tPDkh6PBPGKpuC6CcPCbbriVupU6zbuRxy6TKJ6dkT198HCPMvDsAaG5cJEwxQJAXFVtEXRaE",
  "key25": "z9Wtmqi3Lb2cETrwxsyY9zKrPqVCbveRHvCcmB1MF9kH5N3F11ezS3jzajWCkdDnC2V3JS5LBpf1Hm4nQWuZXmZ",
  "key26": "ywbuGYY8Tpr1ZR2d6RJr7jCAfw3G1mjSMmzUbFJZK46JL3S5Vx72UeDiE5k6VzxpXMhiBUVrfAc9NrgMWiQJPV4",
  "key27": "4gdtJ1tyPN1QxSErMbCYoVu3F7ZWJ1HFXZDV7wuy4GKY5KS6D28coBLsQeJX7qpFepBtSE5gq7SNjFfWGMveyckH",
  "key28": "43by2B6TjRy3AkhXGuTvSVghvvYpaaRTxqkGFZebDSGSNRMedpsJHAdBboRG4ed9qDGzBkjNfPLjCRDJpB9xwt45",
  "key29": "46qDM1dhMpJgPjYmSR3Z9zSWid2yGoiJAsZDiRdyv7FYi34GPGDvdULnwp2ydBZScm472UaxfLrX2hmmB4NrCLEx",
  "key30": "4S6991XwUidxoNFLVaSex1PAVhCXdHoA5QGyM2QztCMJwoNVf999uke2a2dK9Uxz6SC6S9kzY3vRDpZckeoXBrGJ",
  "key31": "uXQzwnbMwWYYhf16Sa8jMLCoJ2anmjRjNHVBTj1GEaQLTPvW5NQ77Jpm49iKcFRDcNL8n5YCRx3gGAoBgmeu6nF",
  "key32": "JMUmirqMqtXq86VWtisQqmkVUZQotYhMFdiaKP3TpNrhPo3ep6EWNzbXQEdby8mqySvfWsmf9UZhQDegFBNHWqM",
  "key33": "5WCPNbKtsZJ6fJJmZEReGJbJ8W6FSXXBnvrgw8CHUQXJ2iViSUFMSK8Ge212R7dNu4ZTcazzb1YEd9WfPPN6rAGr",
  "key34": "rPBXSiakFzJT5XrvaaTWJFEGmtWuYkP2xGcgCc9z5MdAp5eC6mWhHeXpyZn7sC5mFMQCmFwbCpfA1mXZUj4sYqk",
  "key35": "3SMBoPGwZkBYpKxNS6UCGx4A4AFmgMQWAys1B7hzrMxo758AcNJHU9gW3nxrotRpfTgpv2SoFNiemtUsayDcE9WA"
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
