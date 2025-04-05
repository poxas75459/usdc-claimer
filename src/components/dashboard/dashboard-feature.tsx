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
    "ZM5dzFAP8JLTtpnC9yYPxUMqt7fd7V1aEzxyDpfcrceqDPRVg3k7NT3BeB1sCvqfEEs3VrpF3jpeHo7uqSEbHyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uw8jMRvFgxi5jsJ2Vy1NvrtBZYp4xQgdjdGSs8ATzg28K2JNNqec2nCCQNwgG1nu8jwohZWTH7m4gndPyDXjgXB",
  "key1": "54afX3TYNtPPSXHRS12Yr85rD2AH8Xcsn93KTmUESshY6ZDwBZf8WRPMY8tVL6axCeRsjT64Hh92wY29EQfhVdS9",
  "key2": "2eZaL7BcJBLfNGvipndpBojb1qCjp8yKqBxM5oiQowLNwSgp1Z2yeyNTvrxDrJmzxV8oNoW3T58pxiVNg2G4PG9M",
  "key3": "5TChVcZYDccTrpBppbFnjX6HALtruGzt8B59ArqULwdcPRvzXbwUQ6wB5eLMWnx2q5M2WVZhmrfBhBkUW8B4K9FK",
  "key4": "3Q9E1VvQmUazCTmSjN6iS4CaNqaYZzvd9qMRePqAJLUzJQdccUkWATwzpojfZqC3izi38knSAY4wP88ki4NycFru",
  "key5": "3PLYv3FToYVg5eT2qjziYiK3uPi4wH3WZmHdqFuJG7en8jbpjf2pX6o1SeMU2Hw6yqvzEGtwpimTU26mWiDq64DC",
  "key6": "2y49dF695MWpHuoq8MsNTTFxxsj4YLAkCZ76ZvX3g8aQnMuC1nNUtqpmLPZ6Y8fVHHv4LokfpKoazAzpXBGrNWWk",
  "key7": "2xKGCi8wof1TPEkbC99FoEU6EdM5Cy9B84J1FCuPxDr5WYz6ExoTW4571omz5Ke2yqBe6KPDpX3gJFFBYGCm2j4Y",
  "key8": "3YZVu9SyvczsYRdcqLsh488BjnEBqpu1F1X1eMhQp1LSEWDHM3XXz2genKxsq97oL1mGJJ6VtLBZGVkr3XtGfRdE",
  "key9": "4UyA4AE5C1GL7Fah5br46w1pRyq63NC1j6rMb2jtzm5XbvKKETBEeo3V1fiA2CUGTLSovyf8tmP5GHiRDukyPnGX",
  "key10": "5vTxj9VgkraJsJTkG36RpGLk6GPhLnBfB9hBJTeqNfH2udBXJJrRF5x6DJNV99kb6n7rVxsMbkU4hrxCMj342nkc",
  "key11": "2cPjAhP3PnBELwG9a1wJRwbDXqt9pqPchzHJ9PK7XmWvpADGDS3wX6FcYfoH8Le4GWMBn3Fud5z2PWvynfwfSpRH",
  "key12": "4UZbzakSa8DyzdAWpL3edhpETwQJZZ3yt4zox3nr2SjZEkP7ekV58LzMXfHzZsKrBSwL8avm321ZMGsQ46j6Q6sZ",
  "key13": "3VzkKdDNQB7tVG6A3jdCNxLXXpvhzDj86d7muRrzG6wFoF9yk3SJwCGBKCQRPLyHgNWwuQNzjNheaxrDgqqjsc8F",
  "key14": "5e1SezAq2px7wJc4FR4p3zBe6vMipV1WBsHQj4XLKAggsBn8BFLkvS3MpKqV3BPyEjrbdgR8TNR23d8FNeXD7YUp",
  "key15": "45ta91xm4rKPybHUAggkK1mNb4C1pRGTrPxAZqDQ9G6wdHwKsx9E5kZ2saR99WYgPLcxxkYMZeHZrKDuFhcmRc1o",
  "key16": "3iNHqkRfnaRKj59SVWJB2GkLp1BnbSwNb7PjEEHbuhWQJfJJQ35V9p7TRkrrp2fYcWKZbWKygdVS2rwzDKfPVbwY",
  "key17": "4BRjG5nEkNxBe2gZuaLQ6EeVUwjhBLrxLEria9Fvf531s4P4rsW8hnKJYSf81Sbckwk6VGFJWfQjmpmjrYt2vk4E",
  "key18": "54w3JdRZE2JUrxMcFiaVkyFYEBfui1ZB72t6nhFsMUBCyCrtybJMoVZsGXQaCezpRp2bPWkhAqJukfFYRaoeXiNJ",
  "key19": "5MJ5eTWz4xpE97oKWcamgESvtWE5ZC4LAb9NKaZYfPC3tgqnCi2HGhyffHMqGAtGPz1u5qPfQzEdB7sNU8joKk1F",
  "key20": "4XpvqMh2YV32DB4d6QVonzQHELfJFWHSXXhWdiA3b61Pk25KbYK9MF9X2xuvyf662MKZywuNtyerQMR53jkRH1gn",
  "key21": "4L8cDjHG8ZA8ruwLgumtXHqFokzjvXqAXBcu4gN8Uc7pGfs3LmL8p8cnk5UpQm6rTXARmxZm2k8f4nThMSVJTGdm",
  "key22": "gMXHmA5y57QpgTUxjyk24VrCegrvem8U2kd4SpMDQ52LwqdnC4z8S94qboqng8jCmcjzManKPZfHGubadBQitra",
  "key23": "44upcQuUevxUQW546NGQuS3KKjGnXEFcKZUci5btcLA9BzihkYv5yqzQ336f5pW3EmzvBThxNu7dWw9ZNwMjz3MK",
  "key24": "2mhp2hVrsVvFJHDigGS5j5P7HmcEiUR6g5Zu1XvVHSVibpKZXr1EWArgnGnc1kNtQMLAUbVsTRKcHEdiPYQhzWyW",
  "key25": "4q8okbXmXAFSpVzfmERdzPvPrDsMEoMrYhGsb3WuujmbfsvTDmpRbV4HQJCgSP7zF94PBNNDJAzeN3SrXwHb4AT2",
  "key26": "3yQV4WskAwS3HXRAunSBDZXD8HqvtQUus9hcnJY6M2RhjFekD2thX13FLWCha5cy5GrVECCfDp5yhbYEC4goZi6F",
  "key27": "3TkTvnycz988eTV6zQ7YQycf3dDqaHhhs219pjdwxBXnQhvNgTLQbUe6FTvH2z4AWfuz7LNQpCqqo2oi7UTGUBHV",
  "key28": "5S8oAjexfMATMCmNRDDi9GXVCgGEy47vr3voB47iBgmCKgms7KUcFyJi5nuV8EyBFbRAc3h7q5ipy4nk7aGUbMmJ",
  "key29": "2mfpE8cdAKe5NERwR97V4P3U5qYFnPE6xEMj56efB94b2neay84drpcmjTYhgLXiap76g3wjPBSKNNLfUToM1CE3",
  "key30": "5v4RtGEduPuVAz9QnThmw1i5ZsfE3P4N3jDLaKQTQQW6oAqi7NcYb2uaarGVbZbrefgFxu77xeuCiNPL1beLZJjA",
  "key31": "A8ndRYwDBhGRA1zWJmFGHNQf89qNfUVkwfMnVFn9dbQ1VYMjjKbKUZ1TmuvuHkTVNuX9PkT1FHijQ4wsczzUE5n",
  "key32": "37qEyoVTxvuu12cbcaLP1NjaewSjmnfFDYA3jYS93NEfv91HAwxz5zFSSVNwCTSDVeqQ3dQTxsjAuPynbyVLnjHh",
  "key33": "3y5FZWVkU2vj4UXSHxZdUgUyLRdLMDbajz35PH1RdXuepduFAFKa5c6hjCbwkGughv8orJunhvURaxKrhuH7xz3B",
  "key34": "Kg4TthstQjnQH5fwkd6z3tAPbtDZCTFwg7dvMQCXhE7xtpFLdL6wJ8BENWx4PqfZMyXpXSQRAN23FRuGcEXurZP",
  "key35": "3GKYMmpeqTKoCA5XHBQDsz9S2j2qqiUCxWK7mzhyagfN1xzPxbV9Lf3WNERjyCftZYeWdXgrS1RnM2NzvrtnHDx1",
  "key36": "43NkPZVjYiYNpZw5BnTP7SGY53FNHPdG38CFXiDF7FJov1MjwVcH5pqu1NJrVg5sxUuQAWZdBjaCDvybYW3TdzrQ",
  "key37": "3UPCVqoLZsFkNTXbmjkLdfUPvnWYtsgY7eD4BsYoLUdefEdeJZeGVzLxVAXo4URbJNmyeUgp3RpJL8BNAR3Tz4rZ"
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
