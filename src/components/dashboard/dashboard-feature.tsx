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
    "4D9xRcNZy1sC9ugqrLq47VidwPzENcBEfqUjUPu22ZtTKadiEWxCUV8AHp1isrfPoX6v2brpsWi2e2Zfygf82jyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NakoPxfTcatp9dr6xhTrWxVFBGwMg4qxe3suT7E4w5em2GaqBZM5GzUesMPUzAxckHrP9NoRgDLdHXxH4C6Rjz5",
  "key1": "rjqTNch6fFdCPrtsyeRbHYAbYsRvPKR97kD742cw2jHHYyMy4jYe1ZtHoe1pnADeKQFXMMKv7EWPpy5JBaJSB3u",
  "key2": "4pUctbcnnwe5kDa1tnJuGKED9VU7dWTMJMQ6P8TjDPUqjWtHYLoUuLZp5AuEYXYATfof1eFCbLPmNPrnPQPtoALy",
  "key3": "3Nuk2UpAeVVyCDgc4rdSLqdjrEkcVtxYdjm9UExqjDULukqfsvpHTzHNoHhBR8HrAzy1dJiu3bUes3HbMTPA9TA6",
  "key4": "3dVFjJyuLCdwpBoaL3Xfz6127o71sWjLyPXyTtf3p5jUcMzCRKV8PYkYRc1E3zjyAjc9tnaKrCbfLExMYRaNBHiR",
  "key5": "4UcyZp1bcyVAQJw56xDwyKUiHqjPvsLriA9Ni8MDJp68ZDdC26sSvwAc7mGSC6mVQRGmVuStKK9SFyCzyFx3osoC",
  "key6": "zDmWaDz2LKjTsUUhh661ivpxaLjff62p5uMh6v59RBZRAbeUhrpyEGYoHvTZcBDX2rKpjFhFvPwCMEghenG3u1n",
  "key7": "2HJj2mfwa1JRnjsR6KN4bKbELsi6XvCjURD6WedNuD9SCaXTW36cqATvTEfeotaitbPejHzktrJTDskGJ28318Mi",
  "key8": "2Led34EcGZiGLMzTLXNLto4AooYiEAy9nkwr6vJ8gK74p56Ljd4vndjxqDTeCq5QWsw2V6KDufU4zHHmY4zMyY9",
  "key9": "39GioUm6HJvmPRwAMHnx9ScR7Yyy4unFCH1c15KCaVmG7RkNSLEwc55KykfwJnitNBcKRY2JcYFm3VffNG98UmRH",
  "key10": "2hWDWy8KQp2EgRrPqE6cJSbHkieurLhm4YrhD1jFfKMrjBpQ8D9W9STh1nCmLgKsU5az9HWP7h3XefwR4hdgqa4V",
  "key11": "2oKhsSL3yQSQtRTeAFVJSqH9q2JAMZfopZEXf2jyETEbWRNk5bTDMssDucZCyyNky9diTTfbJP5ELg6zqvyxfmQ6",
  "key12": "59UgsWqQDUvCZ7pDHoe2D3twS3CegvoawEhmUEhnovhjpM23xfJJPKBJj6rZxUmadLqJnp8ATgdihR2EE5zXAt8F",
  "key13": "35UDwSjzZo6oyd8CCsmKp95vHt3JVke2WQ6iZdXgFT8FLxCrB66QYxWPS9MCK3HBsAmGihvAsxrCVmFRfMJe7if2",
  "key14": "3QrzCqHZ5RAqDxv9LpJhfFSvKcv3d3h588Jp9s2PEHkEsLzdJZgrTTw2iFpExn4aD5ecdaUMbbq56WGGZvkkdS9h",
  "key15": "5RtTL5RkTR8myRW8Va8Xse9F2HtSyEEie5BGmUkuYbZW3WfXLhxSSxmSgnkKRpyh5DN692asQN26Tm6M8kcY5XSo",
  "key16": "5Dgt3JRJFN5qmbSMHRadzgYBhZm9X1ffnEzDWhccERHisvTMYBG2a4dSyZsqkgabEuX3hzSmzW2eCQK7kiJbyx6V",
  "key17": "DDZ9LSzo7yPwXgadXdbwvFrhteK5AudP2b514mtj594VWWoAUudn1Rk49EjH93KbEMPAjpz1HPMRfHTZRzEePns",
  "key18": "48s6Q5xeFDHbnz4mjkCEzzwPdeksMh3Swko4fcWnk8r2oYob7udeXFwMdkKAM4H16ufGEjDVgfA2RUCNwD1hudcE",
  "key19": "5pPYwB3pRSVN58rsyi99CSABoZ8KB6a8enHvLdpTxbiyUrwQ4mssFQUKNUojVrdVsdb3aJ6NCraxdxFLhiohoefV",
  "key20": "epVnAQbknm9wH2uj1VBANQWT9e8taj8sSYRkx4iWqCMrJJdaQZu5x3XrvvyRX44nqs8ZQqVQJGkjyVxMNhvmULU",
  "key21": "2ugv8XsA652K8wWRAwVLZE8mY5VUBFcfpSv2ANH4bUDKfy7XVKnTeeZ8kFWxGqYbHB5HjQXkW7n63YPXtmcMQsYV",
  "key22": "4fkmhUPRaCo7gxL36rLghUuwBNakUqfMLYzRGzP5eq7D59dcQEacGsg3xKXDrdg5t7xas9Hsj565wBchLn36Kg99",
  "key23": "2A1NF811Tqd3TCDfPWqWj5hkaZ3pypH4mEURrqeX21acDp2Dozgh9bhMfvF4ySBeMm1E3zAFL66NNuhAbmkAm8mG",
  "key24": "354jTrk4RzPAQxR3MM1qYATuM6GVdrGV4Gfkud4d1svMiTNjSkYW1iBssxSXUn84UNv9GtXVVTHjJhywnRbUxPt2",
  "key25": "5WrfTwZXSdK7BQgjebUwzXbumfhPCFgNXDt78nYBcTFvwBsovxnaYYSL3xsjA9d9UMCnURQBwNYeef3HwGUSGt43",
  "key26": "3HWKnAPdCEBJowzE4FMDsT5bmb9TnfWUkWsveB8RxjvYThAt1pnXwiRFeHSUC1H6S4C2QsSMpvbTvARvDTvypxZt",
  "key27": "4Zi65eTA4m4EB7x9K2uyeGURpRHX98fWFohPW7nVa9WjzhcyUShaiibZQaZeHrVs7PPgAMPsTQJ6Gwpo7Jq6EQz3",
  "key28": "rVwk3U9Q3B2VTwLQxfZEqM8nJAMDjhzhNE5V1Ja5b3DfGStT19kXX9Dh8FBrWoh1SJ6JVFrsBDU2AFXa5ySdyCK",
  "key29": "upPJGGXEQ8yJh347prj8Y2fBEcnuTE53EXDUG7ByJFbH7DrPT4QqeWZAMAdAQ6w6kLPbYB4QKgZNgZ4QduU6ebi",
  "key30": "2fmXRdVAKasTfB2USTVMmbAy3YLLknn8EUgBw5kKs7anfFjL4JSqvKfRwFvSKQVxFPWefVffpfW4WQ981V63nFK8",
  "key31": "61Nq6ktPd1RabhineKpB5pUx77tRvsAJzDnKWEMERePmN3wj1t2yhhEeWGjucLDc8KwZNM5RUWwBaS3KmfQce5V",
  "key32": "8DosGotsVD65NYELee9f2Zo1mioXRy8wkmZ6LmvEGQpSE4A2mkZjwfP5PM8q8me1PikNXdY2Rf45G3gACQrrBLX",
  "key33": "3eyHveHFSDtbHg7pBVH8hZdackKWLcmALfGTyHTjVj2Ee4qS1UBKYSjK6aeUj5DAJgmfUW4kZUY4NXfga1MrPs2v",
  "key34": "3cMxr9jfMQHhyFJ1Lg497MaVrUBg3xuT1ewht6r3keBsbvjBH75V1o5isxhWB84LkkMiuidjb8YLUQfYwmCaYbf1",
  "key35": "58mkoufQkS22nurTUVofSaYW3zbYxaxw3wZAgNyqAoUa68vVjELLrCBNnq34DCLbvX6JyeRDHbmQv1x3E7ogCE74",
  "key36": "3o4e9a11N7F2HBr5QGhxZ2CoogyLGSH4NcuHTPSWhbo3nDjDSAgDEcuZEYaNdWGQM9oB5VvcmjtUvFt9zQQK3pnj",
  "key37": "7WqfGiNiF6vhkFwxxCPwcMCjF41E75WhugpikjLKb4Ckn4JWA1Gx7TB7S3zzPBbH8JZab8HCtDUDMnjHQqL7N6x",
  "key38": "4ReTmRkkCp4diy1e5YJ6WdQSt2bshA4LzbmhobSdYeKf3J3tTTzLhPhNLY4tsrH9HjgsjA24epR4Zfxioe8UBRnv",
  "key39": "2H8gnenQzQ5qNFLpxKy2ELbFr3edmVKZKNB9nPjUGfcP4h4WhkQU25ZW9cZ4EvMwQGPLYiDEUN7Q26jr6TeGuRBH",
  "key40": "2ccLh5AzRcpXD1fXxsqDvzFFNXQwE475QmeSt9j36wUsnhGRqp1d1Ng9e7b47Lcs43fEAMiFzB4Vo8W4fATqr51W",
  "key41": "5RaQLVM2kpacd6U7KdoA5W9XmY9mN3JyDTykqaDowcVgqr58PD6ParB79YMeWYbKE1wLchsJnLVatFPAWxtFgLt8"
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
