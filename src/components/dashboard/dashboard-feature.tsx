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
    "RMtqbzqHL6qhTKXKDaoqeph2N8mGRzmkzXkBKPTEq4kc2wMGkv7E24eoTaFT1Umgm6u8JQpGSQShHBckzRukTfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JesamgxfbCpEjEwg2Z2moNpcVNRAzWsc5b3i2Gh2n32aUMXDZYZ2ygyZnhCQtdJGLJrRUPY3My1Ny8Zj4fk33hT",
  "key1": "21RhUAZVGbMHBf54UjUGbmS6a9UaFvQUwEc2wReQS8zsxhgP3UQMG64CzhLdWxdkNdyrYZnHi4hobmpbEjTc7Uwg",
  "key2": "2Z437egCucdRz33x4QztUTgfBStsFDSt2bd1ejoQtkfyGshMSQPYpxsQoBisvg4GEVZGZdWtrZWuwKQf53XuCips",
  "key3": "39WmYEhWvbHHEgubwjuw3s8LhtHFvT3kdEVc6jrZUgJuUjncf9t2aGNyFt9Er4eBSzqARwW6Wv5KaWKJqx83EpcQ",
  "key4": "3wU789AUBhMC8gTfkzWXKWiYSMTtRRcMpGtujhokF9Pq4WiGcxX6azT12Froi9xki5XuWAFwCLrjgSgEeAukBMvU",
  "key5": "NPq3uhiPk2U9teXy1HsWvQUfcunGpqqoUrzSfLN6uhNFqEmpj6TRkgYXZN517grc3Ydg8SMy51iag6sn2UiFq4t",
  "key6": "4k3fTocui5234fN5HgTxNRvm5fgsUnLLBsCQDenfeBsUhcC9jx1z1NodA9pSzXKC5jsfgJ6EMa51skFvL3fzUGbh",
  "key7": "3pAPHU6JEXpwPuh7UV5ewNqq7HJGKpbuNrUawqhZyVVBeCvy68vjTgajzDeJyCionwEeoKfzo3RjSbkVBZgyzVCU",
  "key8": "5kK6WJtpjyUPeEzzf9HXPWing17AkzSZxcoavwDGpP5yy6ChYNgT8ZEZWM2XG6xj6X6aixgEJMUAn66p1rYm8Der",
  "key9": "4VFUNqyESiHNWeaUYBAye5ZEgkAkUu2qsbHqJTtSJdFvM2rrGsDxx2oREDWmuzjt6HpKooZRmFmDJK7AaeW2LSMa",
  "key10": "2urve4ozBJsWUsjfd6NdaDsduTo6PgwtiiykzxoC14q7XMTfbPuX4N1yfCo5uEm2G8fVBybxbh4zJmtMiy7qPYsh",
  "key11": "22kA1n1crMDMHbtzpbkTS873TTTvRTnUaJ2MqyTJjnMVnkzyYGx35XVPRW1SGFEmnDCg6UmsuPzpHx7z56hNMvo5",
  "key12": "vBsyVKDkTSxdD1XYo2Qz4ASLrmTVgq31MHAAjkLn7HMV5VGtJv2a8QR7Df34bZqb4qhEwLRfvqfjkiEiwaGsdzs",
  "key13": "vr7guGgdsaRc7D4M4Hb9VyFHVL2RVLjNAdJwTNwPVtGVTNfrmosFjxtv2mS4n6BqhWShopi2hGbCYiLYXHQpuYH",
  "key14": "3eZ8YuZZMh7HvCbD9Yv2EC7pBZPd4tXd2q1DjhSu5jns4EkGSM21Xj6pvsDiiCYoQGVF5sK8fBXEov7EVoxgtvQA",
  "key15": "4icBWn9XgyGSTRmxx6EdbLaMjFYukFDTA1Jn2zx3UoBRnkfod8SLd3mFR7wfvpTC2k7yZ5Hn3z5aBiH7KKPvQDvN",
  "key16": "2Ppyrn73xbbukZ1UebP4NmSPGn44PhmPEXZPcKdCgwipEkzodqNs8Zoq5Hmxr73BURQv6wdGB9JzrG8Rh676435S",
  "key17": "2rP2nyNwnnbq32JpAPA725EjXntkfeuuNDAeHzJiDe6ejZ25EcVAdLUDnb3AzfToNLNFpBU6pc3bAQQxruNzzK6c",
  "key18": "4jE72SMKJqikRdDNwC9AyYUvrw7JdabDVJG4jxMn1x74M1zDKoKozo6jASBd5wEF2JwyvBNP87593mrMyQKWN5ng",
  "key19": "4NVdNhk46V5E9DuYxKvS1HwXnaa4gQhix13jjPTr2r7cXrTEw4x96yFacMJP5WPjBs4tvgymDrjy2wS74oRUZyYX",
  "key20": "3ca32e9EB7hKKGRLtRQgLYDSTfPY6GcaHqeN8uqCr6gcyGMVDstTrNFXtEJkyoikT8mQqT8jvjneooC2LkC2Fqp8",
  "key21": "2uhSfqizNUjWPPLVRrpKcHA9RzW2ApBktTRbroD1qQNL2Lg4MMnvEhXAvVjV3xL8KX71CdkfXXuAxDjSwe8GxRoM",
  "key22": "7B7T2a4oCXLVghuccWdSSrdLewper12vESYdqyWwgiV5mncVkt4rV46Z4yyyZJav4hGuVEKDQAoy8AjFni2yC49",
  "key23": "4pJqZ2YP9xBsRNDzjYuvwBA2mAvUp9TMBLixtAKNw3EiWH4fajhGVVYAJs35GJTq1rFyEUGUvaCC6k8KH8BZ3VUY",
  "key24": "XbUQfRMZU5qw1YRN7ma4sPgkpnhZkerNzTtwf2pantxpEpEuMUq1XKFpruS3L3Jq7esoGE8h2eLcUoyk9SF9Lmn",
  "key25": "2TigFp9gT7swLTrKFQVZ5QnTLmyRDYkoiua2TVUpDKnjxUsCZXwWWroPDVnJ1cNwSkiMK2ANkGKTqHsrwAfCBKxk",
  "key26": "22bVwajdNt6XUo9Q8DiosZauuxGamp5Uxwns9BmNBQutvqCUudf9Dk53j5MT4vLSDdKP8zotmv6ZNho6m9cYLST9",
  "key27": "2TZJpHPG986GMALuNXcw7jkAQmzhceKKZ6c3YHoziBjVDEd6RewaJML1BbCMEn6NLj5dJTUMcvUkfXZgvRHALThq",
  "key28": "TuWD1ucKg9sesbtdEaHmfEzUYaj41fc1jGWKd2Y2Urjr8LDPye75nn6wmoExRrFB8tDUwgMXgeXEg6TmnWPu3mK",
  "key29": "4aK2KfswoQNKoHuysdSjtK8d5LetPhxxCNhz7qW23cRnAxq2SgdZCze9PpVEfGbbU6DUGAmwTTtG9dtH6gfWayRS",
  "key30": "61tdN6BvzwHVBy1oNAwL6ffKbLfHV9duV9Ch5JBdRNZ385SQ2Z3DMPwBagBzDX3uioWRttsV7uu2xVG8kDMUy16M",
  "key31": "2K8PAV3S54uW48BHxfGvx47KZd428ffhWfLYevdzSLTKLojxWvWeEup4MupSdHnXRiPGsrDNY5WZzYtnZpMBmytB",
  "key32": "3YTPHzyhNDYhX3gGNbq5rfpeFkk53atNieMTnJSzyxbWkQxMQx95Nd8wR2TBHM7YqpqMHPoqBADLpafhwJz1ryKq",
  "key33": "4mB6fnK1jkeuJTQffCYa1RvkaPRZjucxWjK5WGhEiorkwBeWhiwoL9SCdVonLN98dDWNdQ3v3P7tQA2f2aMoHReY",
  "key34": "vWFJMuK1Bv1KqnTjbA7gCZgdHvftJzLwHqWp1Ps928yhgF97aMN8kAZqM2rTh8GX6NXrf6HAmbyFuPA3uET72fw",
  "key35": "3uSEDWw5HWbrdQuqEx9R4T8ewNnvEkSjjPJWMKRnCr1YmQrUuKK4swPjcJM2fX54MetgsjkrCBUmm5NUvYFaXaNB",
  "key36": "2gNfYfDbfunqh1BpwmR58bb8tkHFo8Qrbfh45n73jirPW6etZ1ESy57R2i63KSG6UXPMRpGWSg54DHpvHUmeAZXk",
  "key37": "3W7qt749V8BdGQt1a6jUeQNGPxq2TstyX1pRhmET6LUASYxcLHVYMxobTB17psHmMwmEDpen2F75KP9NjhGjXo4t",
  "key38": "TGS3h6JKLGVqeuyRX1a8TTAHBSnJShDnDhadX46gkDsYTtxTfKbsyma8TWRNh64SGqJazXqhmTqe9K6zmajj5Mx",
  "key39": "3hECxfVnRQ3Fs3eZHJg5Z1XR8YT4Gd5VheLfX5AVJhYjJyTDATHeNW9VcA8w4gjirg5Dcsg3Ua7u1NZ44Re8nL27",
  "key40": "ra2rPdvTBHonnK9CCGvk3v6wW8VMmkoWZ91ih3LiVd6Y8YED1GNwdCjefehiFTwFe9Sfh6LNaTkWbi4KxUCNQEr"
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
