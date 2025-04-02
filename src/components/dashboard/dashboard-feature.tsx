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
    "tbJ7PncTKnbRwP9QXRjAuMmU3TKw3QdW1n9sqiN3BYAb7QsxxsCjNnfYemhj71piV54cknqj84MyTbjj5uwt6Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eftGcaAfNqLiLcT4BZcxMpDQbY68puWyYQVMpM3RMqxkajwtLPMuUV5zgv1Bh1kbCU2XPmcuYgrc3qZn7LdfPY5",
  "key1": "2f7oqPmHzKQNHcv2oVuEvUHmi1ijvk1Cr3upx3UBd4pxxSGnkLQ9E23hWCyPeEC9GFREi8F2UN8mPqvWynp7ye5x",
  "key2": "631r2zUbXhPttxNkSzPbM9aPzFrmpHctEkgHNvTU3NhLctVPt6iCcZAU24V1fE7hnWBP3pQGGe77z9Q9xT6am6c5",
  "key3": "22WkahfWfjTDGkfQXtNj56dZi4uGft43LJ5TBCEjd8SvVpLoVegsKVdrFoxpeADUgZZbqeR7TfLqYyD5oqRWwjex",
  "key4": "4iktJrso7UMmGg7qjsVkDV5ib9ZCd7djoEpR9ZwNMWakwnqe3XP9w5rKZJXBDJt4syzKF6wwehqqiBQjwRffj8YT",
  "key5": "F9kVr7Ke3C1V68XtTXeCZHT5Mk3cDzxfgZWTzTnFV3rEpFn7my16Yfz2k4m51ZAHNtpFYjJ9TFyB1an3cLYa7fM",
  "key6": "3grGHp7fmV9XFv6J6qSaBvtmsCZc2Zgt8SextRZtP7d2rBFtzVQ1MKs45v7EwTRjEr6hBUwzkjerH89AnMr9FNzv",
  "key7": "4WATpGzcwo4HuXBMawAWZcRajAs39JJc5rBV8oxWFLqPFirNPDsA6kyQxRPYnQCbRBZzngtVMH4k5Nmrc4wbfK2z",
  "key8": "5BYk8k8fUNFZ5HVxiGTfe4vrxgQErH9CzyUZ54fxyLCMancYqTrAgHMpqasbSe7E8TF6UEahMKPRayoA8TiA1b8L",
  "key9": "5aZC9EkaLjuKRBjMkcVTQerjVvYCrBZdwBXDUijDm41D13Zcy2F88zJQWNUw3YyduVGZKmXaT2TNvVJYj1TAeHxG",
  "key10": "579FJ8Gg3NfF6N8Ka627CJPMUgZtCc8nUA17f7RYncPwMtYP5Esymmkrvo5mETzqqNUQBEuoGRBgNSuEukr7eCTu",
  "key11": "2h74yuVoPr2DG81ysT9Nxx2yJLvCTwMxB9Bp87ZhuSpmb8ATCS6kmZV74fQHwU3rEdsHXC1VtBwFRKTmJUJTUJkn",
  "key12": "ivJxRzPFFdMZcHdDJsRjtxYtZ1PKwduRXLzViECeFGPmz3oEcnj5Zq1rQTXUn16rTLspNfMo62AunzwZHJ8H6ia",
  "key13": "5krizghtRiRa81PrDgUw8EYNMBYAAZwPotm4MvFwwHTr39dsaaYYGoQS737Nyts2dLVrkRGBdJyFaNn4Gpvy7KeT",
  "key14": "qtcwNdAgXsWT27YmGfJY3uECwWkHgdXKG77p34uq6VmcCXmT6vLuutaX1PSH2AyLxBcAiQ5sbmyzLt6CG64KADR",
  "key15": "CLQzN8YSv4NU9CJirdN7vQLMzXh85GFTnXh1D4AaMTU4NBcvugYM91GhZVEU8NPWaQZoy7a7iSvPoNLcFBGPbAb",
  "key16": "3aaGVSSeiQuBAenk6uFHM1c32EWPw59hwQzfiuwdDGVxbGSUoLf5NZxft2XZJSLxoXpcc6fBLtazz6qUsf9fLAKD",
  "key17": "2wKgjjqro7y1DBNVVfPCJHynm81QxE2QZ4Fmo5VmqjYB2xYE9wJXqWRQGWgZyAqcfckf7a3gCN9hWJbCngMfK51L",
  "key18": "22aj5pgrTCbUsGVb8P5RhaAsFU6cPDmsQFn6BU45KgHjJqCbs3wRTWgbJYe5jFTccWM87dbrxmC7PXBHoozZdELe",
  "key19": "45ELuJoCK4G5L9F5vpY29YdypxhjgLKpoNAgGBKQ41wx7JGqBBogVYWE4bctAaGdEwQQr3ecRiRiEz2YSAShgprm",
  "key20": "2oHcRJXntBTJUu11XU2mJzuRZjHToALTpznQWRLUHKavYLjHbrFJk49jDKmJgp5d4DCXXWUi21DsqS8Xn9nno9EJ",
  "key21": "59Sq6iLxPA6trjkaBHZxF5VzTb1Uwja1m4J761zCu9jiZVNsi6sHRrG5DiUmnkcCBJ1Lco7gjwgbnf8zVLDHvtww",
  "key22": "4XBwAXLQKAPqTrAZ8f75ciDiAqa3AdBmQnWVicFrLHLTvfSncYZfN2c7bNvqpuhyr1AVV7EhkpKjm36MDUmxqedm",
  "key23": "MLibQcSY68vB2VsKFhB7TToLV93YzEvNrahotQgm9SLxsdirJtBypZMQHbWydFjWTD9kcXwtnnMwq9NdsmYkRjf",
  "key24": "5ASrJ29SfpDEvWSGKjFSDwcpMFFpj2gJ27yk5Dnzzf8eg9ubf5AbyUxuUTkEoP6zLxEQ6CX9Bye3ZNojLcozKgWY",
  "key25": "56qswve5UBNKXgLcjCnxauRWk2MMNwNdeigibur9JXrY9ifNNUrH4FK2i2mYpZDx9juNavN4VMBfE5QYEKmo1E1S",
  "key26": "4W2284ecQk8bjXbfeyRperSUes4P1E687WaksEotvorgnPMwSNAxiAANBsaWHs1Gp2NQsjxwRD2AytQbWgtPuorr",
  "key27": "5V8VM4HdZvoDYXvSXSgg2FAGseFJxTCRJPWnHixVSVqyYENXNTGLtyeuPycZ9gnHxQ8n31aNcRLH6cAQNA5X6kpC",
  "key28": "CdEkXbn1K7nCvmaN4HX1U2fk18h63P6Wfqru6g4jicnhZfkQjc9QXRpPvDvzhy487x8n3xzLSgsBXWwkvDP7wE4",
  "key29": "nYZdhMm4hBcTAoJr48eEemQt15vTdbcYJtzdJFUCPGBDsLmCbuH8XZgAV2W6nmCUhoFRVMsRW6BLRA3MR2ktkNi",
  "key30": "2P1UkdTR21aCvaoGoDSo5vTP9MU99hKtKF1rfy9kUCG5qxsmHhGDfBmS9VdExvWBPjYHEvKeRqqZAXJUFjyWWgX2",
  "key31": "382rdPNb11yHgkbGDpPTYSwURjCRDd9ysYgrV6hFEuXYNgiqVYtBmSHkrb1wASTbe2RB5NKpcopaFpUfDAHMPW6g",
  "key32": "5ajFsmHpgULwL2xCF3GUKbyTL73h3SAqFuN3HnK3oahaqrjBo2XM7MJecctHYjc41enXCduc8kt8GPgi5dH2BmgS",
  "key33": "4KnJhT7FSQ1CGhQbapSByp3wDyGCZtef5GnnpJr5iwMbMBiBfJUQ7p8VmSfxeFt7NfLkuaU2r7WZKjFKLPgo3nqE",
  "key34": "YGYajwvAmjCaXGWnmy1g4XM3UHu744D5aAgfK3TsQ3utY4H8YoQAGYJwgLVnLwKuc2Wtt85sVMvy6Vjna6gjawj",
  "key35": "4QLpehLJHpdc9tkJuLNz49MN8apWPiiUFq5fF9DDKB7W46on5gxfCMjz5UDwe1bSKJBNShaSMUfEsbHafUZRLfhi",
  "key36": "228Ji87zc3Ma4BhL69G9aogbeuNsiXJMmZPmmcFkmNMy9w8GVk7PmdFVHdekbtwpXfpb5Ecxa6BaPuXoCcGBWtTh",
  "key37": "5SMW7p5ozTcWtomBVz2ZmBg3d27ddRx34P1A6pbqXrkAT9A37KwACKYS1A3irJZZWZ2SoRZZYQW2pLaSoJx6LpFN",
  "key38": "3yEq2L4hkuaz2jxodjNcrfRMpccJsW17Hh7KRiVFCJzrGBn1XTfgpcAwWo6UGRaiKN3srcTk1oGWVY9DBAf5Ab4E",
  "key39": "2kcQCS2NEksDSb3gSKNJRgc5DhRuqmYzQhPgtDV6GYVAjfZTGAcfdr2dyZzBoFnxnTtwjUxsneKQN7jNmsLt8Aah",
  "key40": "2xvBSTkteSF1iFKL6iVrxDzzeVuZdMXwBTUnBokRwAaPJVhamEdmAB4Y8YcPJXEJT3gWTKFcGsj9KxLWZbrcj38e",
  "key41": "Jt5qETAX7bnL6MP8A5yY5anFriLbxBkVzHM2C2i7uWyT2b6BYZbDDA7QuusuZErUCqqfxbiFtQSxiL17bKsEUC6",
  "key42": "5Ryektn7fQ1tsTtCRmbeStjCE7Dte3wXA9YJ3wVX3jttrREAvGnMswUWjQp18GUxSMVEznLuSdnRipormqN8o28U",
  "key43": "kg1YXnsx7JDNZqG6NYaqiuVk5NJ8ybK4H9rXLr9tKTsMg8eBDWFwF3sbPirLyPYGC5AJqn2VRzEdtuE1aahSzaH"
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
