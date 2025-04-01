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
    "59GnHFAuWQAKrXCkEe6qzo7qfuTvYvLJdMmYqh2pcyCU7vQhSnqPYwoT3XiKg9RsznStegr7BGivKGJboJYZYT6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HUosgUHNjhqGa4XD3ViEMKUPTmH9WRGmTtgBapsLPD2138bdTwmhqAK2Fk55y6bD4qNfpRAhfskXuqq2xEDE9Yv",
  "key1": "5h2nQ35pRMYvgz9KRxmUsGPQNh7rJsMNtAcZF2deAacgP7cukxtzmBfro1R7rpkV869bmJsdUTScABkjesQbWo4C",
  "key2": "2ZuQAgJux7Ue46vuQqLGCRjVSkfJoViPFsG55KuQxZBZBG2L4T2iX9V7ov5p71gF5w4Y961vES6BxDuejot7vad9",
  "key3": "5msxZpfpbyZuYXGUTDEJxZhd9EkcEUTjNnKm832YfLKkP55WVWiphLvCHBeut2CGmfuNu82rE6scEUcxAvmFK8fy",
  "key4": "2yQFph6MsmTh4Mo3DZ4S5QydVAJwpcqJ15WVf6Lw6UdUQUbxoHqAFubyyY78hpCDb3ZMxPsXiEdL72mzEb3WwbHo",
  "key5": "3Hjet69TBByfMsBExmQmYx8JXsrPfFsDWzNXQzMQUhM2pbrPFB6HBpCk2A7hCcy8cZmRvWZYqGTbFnxi3xPLpbAk",
  "key6": "5rQjqDhLhauzk4xGfAE9ki42n6xiPJi7ciVSQudLcZ8hDEKtxy1kLTrFFrf9mtDninnVisybraTRdpQ9ajYj8pJe",
  "key7": "2YxXkUa7xjkK7JjyUN9snnm3u3rsnJM8i5jHCFZQGupoeaJe4Y6zQUNtnLqMyCeKwKkwVtMG5QhVf2PHAf3Pr7Wz",
  "key8": "467ExShbVPjL7p5FnSSrt5Phb28dPTxHjqQYb2NuYX9whtyAtCDZmtmt7JWuovZ62BUDTcGE4V6GWhJH452tEQyz",
  "key9": "4GqfaGrfyRQGC7KPVWnpV15dwQ6nNMQBbVLm85q2rYVx7UdDzLdXxiK24F4ghQBuYoj5H5NwYwxf5BdwuwqSVR1A",
  "key10": "8ueK9ifAV5uZrXEeMWmn8fZ4WZo9aKMkenVAnU9zdaSyj2Nd7hLikpcrLQpPZDtPJiswikzYNiBtCtEYPUsbwab",
  "key11": "wwHb5AyyNSLEpnxVQnwBQpUZ8EinQsYKyNMMgtz82PyyK7ibggEH9oYY5hAyxcmVa5bWcUyb9cS4JVkCEFacVcQ",
  "key12": "4creuBKyYHT6kty2CHXjVP7ayTBMJyHqiQHkLKLrFjozqtedi8EWusZJqpRVxFkjFHgf2LJDRdpj1AzyDeyvtxRh",
  "key13": "38azGQRYuZgKdXGLEEQnd9DPCxmEKz39Z1StUYZfitn9UUaonwna4dj4adRFtR6oq6RDwnRaVbvXkfekcess4jRZ",
  "key14": "57h3rP8Es5pU3Gv8QUf4VHyRTiXv1DdMjJBHzS1N43ZZC8E52D16m5dTTKbY7oUjf9cNVeV6H4jUiMi9WQgrrLYm",
  "key15": "bU8pzb6NA8QcPj3yuEscykTWTAHmhnFNfZBBGyj2aKT4o7q1X7AKYAkAY75JzSMuBkK6H82sm2tPWseAEXdgVtv",
  "key16": "3jkNu66sy8x9LMqFf5W8di3bZRrzHq8TZnfHonLeJwDZ54GVBSGK7gyQ72CazkRMt4YdHnbPK3riCC3mRpHqT6mz",
  "key17": "iJHWUQWNZbNGKBHrrVjHJKZJvVJd94GwPZ6xzTwG6UqRLXxXCC3Gfa4rkKVbmgZq6pfExwL66aATUknzk2ch525",
  "key18": "2FybnEcDTVBhHBxKpZZeHL3ZFEySWgQULkbyEhsPr591otKxWnZEgQFGuCsZGjVixD9dBWDLXrg4ZYtmUDC9Kaq7",
  "key19": "2KVMz1rfDKRpRByPB6wrHZ6nq7kbTu3VbmnJmN8EL46HKgqT7P9PKABwCPUTzDsjPLrMEWyCDpZAk1TFWDhCuVbF",
  "key20": "CxhgiczC7wdtiPTAuATuhuNiapUeSpsCZpd68Y6LNt6HopmhDjTRAnj3aAsNdD2PJejAfWVyesyY7ctfvHMvgKC",
  "key21": "29AWvydHnpB5rLnb2gw9Thmf3sAH9sV9ov3B8Cm2FjiKvWARHkMGWUk4yvkJxZTpQnNHZs3kSoWhW7HjRHBd5k1g",
  "key22": "2EdJeaymgsMih8zQXLz6SAXiXSc5uUmUUQ2VgJn9S51g2faJvteZU8fgGGjtuwm6TMPcw7o6BgENgnbWggkPJ1tg",
  "key23": "2DB9iZPbofBMsXckzu68zhFJZmShbFAvRGofCnBob63DFu2C2V1b65k131LuJSWoM6dypLQzMfd92eCwKUthcwwm",
  "key24": "56ayeqgyCCRrtHZVGQ7QtX6wFBEQsPHY4eEx577TwG3QRvNmfuZ2aLcHdBxi3VniWmhtywpyXEBzeRpt5qwhBv1",
  "key25": "23ANu9uTNhwg4smSpnJ8cwP3JcTDMwqVmBDm7JYz6dRDbBGPah6wcmpuL2L3vSyDkirZkKhZAH799pKTfwQGrYY7",
  "key26": "4cFFHrvcN2WMzEtdQShYCeBhWD8fH1NoXhc8Tns1VndkGXXcrSbprrQwLHqFEit4y1qonN3M3x7FdrPkgZWWxdpL",
  "key27": "3wjEozUNphFKtryhPLqALcfaUyDBXkoTQtRpDCdnQrH7R1wrJEBMgyue1kCWi4mWCVPob1UvjZfK7wBW44xTcuTs",
  "key28": "2htr6rJJydyGjWT7RTG8vCVYB2C4APbSxz5nPHRFcs49YParbbwYcAFcukYdUdwHD3fr9kCLT37pn5gPfBVTnJt",
  "key29": "4EpBj5e6jMiLewW1m1ebToWPGE1kMURwiqDNftqrqTqoypp7AateH7phA3MzhtdXE5nroVVLMP2LcjmQ26qXPBkJ",
  "key30": "5XgNxJR1vsBpvm2y328TUbqB7ZN8AWoYshUL4LBv9tNWdaHjrDdDyucoa37vuZ6k25cLDXurKDFdopvya95k2Heb",
  "key31": "5ynRtxYrx9DeZwXmXjyhBBuEHp4nBYPvgJC15RkJDwbMR8ZUHmiPiSDQwx6Xp8SbceULKnj4hSvZTCffMRNbZWzB",
  "key32": "4bRFA1UxW95fPyLCzk6VtRxuaMwX4oippwb2FBcznDg31YoMiwi3ABfXt4fE8voixPUGZnvZk7tEtz24k5ir1N2y",
  "key33": "5hodBJ9aZ2oUBZcgfEYFTq2qLG7ZXf9fYkUbFDp6Vrq3RERBnjqCDv9LPoVhGF5FcjENKMTGVjqUUjas1H5phVWE",
  "key34": "ZURQU2a7wUNhaeuBNVotruwbXE4PczQRmsGpHGrRFgK7yKAoFqA2Zr2pszDdDsePYU45mrRZVMy48CVQp8jjJEB",
  "key35": "4uPeU6AyAfn5dW9m8Dsn1Wy7QxDxJBJ7ADzM2rynX52TQfj8E2trTBAV2fHjEXQ2TQmzv6CfDBdQKZPvp2D9PUPG",
  "key36": "2dzquEcNjV2T22ParoHgX5YkfnbULdunBweacXuuGRdRvoYxRwzPEKdV8wAMehR2B6nctkmUHs6SrSWnRVR9hF8s",
  "key37": "4ssD2Ry6iUsjD2hWVtp3RDtVCoUg5dYEuNGKgu6Pd3GfbnoJPDrMFG2ENQ3emBfHudvcDAWd4vTCtCog8PdDKsv2",
  "key38": "5ffgCv6w4reXQLPJW1ipoE1difsfaXDHi4ns65rVFdrTf1djBQbBfe4x4BV6eFc4SWNGWNTJKfSRyVk1tssi93A3",
  "key39": "3LgQvKg5Zf9ecTDfSFu9cdSBvGcXrmishP6bdWzWwMQKmkSCSkY26vhxNa8gR1pjpb3iY8ZowijjJp3H8QQAVSwq",
  "key40": "ngvrkADBtR5rrXCGdfMLnFWWCbptUZ8V9fp98ksACkBtc9vkBVvNkgUTVcuVgpPy4hVd1gaj88v67gaqEpVQQbD",
  "key41": "5Pp8DnMwKrDK2azCFgYgi86xeNahFSd2JTTK5MfW7sFtrsrFkc2a5pbAYjbQvwBbLVxLEaSMjESaAfywHxAJYcTv",
  "key42": "3dvg8JzKyTPuzkqA6rEKziW3XvJMFdsPNzV9fGhR9yRdYXk7tvh8kcHPL8eWfZvuM63iWTj1pYAsinurWW67uPBD",
  "key43": "4fUYRb6D9Jz7aXbPMsZdTMr15M3D6BD4LzbB5Uqrw4g3CSfYYSddEmZspGhYmd79dKoftJpVyTMQLb1yGrhKiWeu",
  "key44": "3TudMdfMU4gHKoo2tqabxSFdYwhXwF23yri5TCgwf3tPnk9khvAd2K4uRWuFJKWDaW8yySA2tHBe3VJgfkXStVYR",
  "key45": "2DcMYkgTw2nduzSk3pzME4k3rEBvkyyBooNAqWUcL8WzvZWrNsDgXL4sE4gaB42SHKFo82ihzcibKGkCk8DBSp9b",
  "key46": "2yxjTLXzEeC8KwMTVSfPWVGv2qg4bJimNJWrsgth726ZFEWCMHp5QNv2JiRfTGw6dvnCLSn7Mjjdw22SuT6dKtGo",
  "key47": "5q3TKbTFZ31WaT5EdW6qoJkJYykjd6ZbqCXqN8gA9s4k3tqKqRXDFFZwrSJcF4XsVTYyA7NcomLcHMhkwpKtUr62",
  "key48": "3Yjbh7Z1LVDFShnfjGmX7qh3ydRygmUS4rkBBhYQTeiLtSGRLKGi7yeHtGeMRyuypn1FXH8kWTHvHQqc62x7BLao",
  "key49": "3ay7Wh3pWaADzgNakrfnUEPZGGDWfMGeWXV37KgnEUq9qr8mcytoCWa33p2ZNM5ZBDbhdBpcvs79ooDZMPY2u1yc"
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
