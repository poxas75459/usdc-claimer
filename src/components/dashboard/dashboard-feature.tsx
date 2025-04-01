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
    "48RXKN7K5LP7P72QgR4jgY32XqRCSX71HnBKu6xuSnbKDDR86owq9iQrtPtKKcrv9pLTCTKHqrC1nDzgsrjU6Ckr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eqMG6txBPWPYN1gQgFXbJ5E8YZeD4oEtJQPWLMg5Sa56n4NX56rXkD15GXKLQ81azkHMZDSkS9YB2dcKgDgh3Fv",
  "key1": "4K7iAtDXjdJffiiQRcBHrtuQXvPmoXjAENcxW7pnK4juEFJFyfnHXnXTuePhCLTT2XNJJA3ouagmn8CvNvoDsyH9",
  "key2": "2V7LyGgheG6qrMZoW7qA1k58xb3kVw6DSGwUzX3dXAMNnLfGf9B1t3sM8WvRuQyxU1Toekd2PGGnMrQKnVmPBKv6",
  "key3": "Nq1gds97wvhNcgHGX1H4e9vYRyBa2VjCajL6DMWWqLHTR2JrJkvyw596XEpZ9DnUjLJQvsSuCBYrmB6Arkgziqx",
  "key4": "47pkpyNczGHJAnMzMTpXDKcURZQXjqbrKcnS25WoPb8mLvjZvSH6k1ZQhxp6SMEka6DhPDEvPK4UdSfW5wdVJpU2",
  "key5": "2H8TUwKg3cLoiqQD7bESR79GJhTeEYeEeXZppqpm6LdoLdoyqzoiNFUxeqVishh8qcpDvQXCJz6iRfiFnpdZE1SJ",
  "key6": "291a5TwuW8s9nxYnbDtcaHoY2m7nizUAvu1HNHVhKjAVWWaANjnyGZyHRNj3QdVeP9EekLzEWo39xkjYMuq8DvuF",
  "key7": "2W2D65pZoySx1eYQfk2WTG83uzfK81NT1fvZ9osoBCZ1LuLzQA7WWUwu4mgy6zgLfWPLZWQQH3F5x4TwBjosdXuE",
  "key8": "9L5dSynayRZDtmN6ycMgUkEVZoqb6wsGEbtbL5uTJ8anq75iAKBsBouG3LadewEFcJa5HRkwpi3uENqLNe8aCMJ",
  "key9": "25SXFkzCJMLScJ59JZ17dbrSjgEFDhG7irTQG6Q9Ru2Aiz1oJRHxLdxdb9Ms5ptALLmG2vv7sxEqKXYQAckRHohk",
  "key10": "3SL5gBfqduPMfCCBQfbaKoSnz8pgoy92BfMjuQqrZBMw4V6QhdZfQFyrfcy3rh7vv6PZFwxQd7c9kmnNDUdR5hrD",
  "key11": "464dzhvmKaVCJ7Tn2gV6mVvNmUHF58fC77VnQtfDdDhxG93girGRSYqDM1R95iQq3s58wj8kGbCZUV7gW1eAf8qG",
  "key12": "4GxuD5YphBCEcU8nmFWZmSuwCQSDNVCFDFLDeQkjVqLjZyEAJz7FLxiVvrX8kPdWsCVyLBbqzLacXod9Jugidg1s",
  "key13": "3GRrnn4vzw64BJ9gnNEdEun7VfAi2PEoDcHuyT2ZXRX4WGuMxuepyVcRJ89zyuUKXbAK6oaX92Sc5c7TsbPB7xd2",
  "key14": "29nws3Pb9sbJwC25dy7Adwh4KkjpkaGtUKf3EVn5GyeNSDsX8R8RX9Z2QzgGcsHDPy69ZSvNeqeGLWqqnwNX4ZuH",
  "key15": "4CZhY3iREEYN1rTSXvPKDWoPgVdNH7BkniTYspQjCD5cZfAmuEqUStEG8Mdt9hVRr3skqCZ4jcYUoVDHVs4s9Sou",
  "key16": "4J5bmBuPQGD6PwTT9JVEheZDcex1hvAhGCLC9QduF7Zzm4RL6BsuafU5NhykCRoNofyjPYCJ6Az3Z3xidzFymJtd",
  "key17": "5Pu5pCJboVdpUjHa284h3Fhu3eFQcPp88UoCHW9Uas6JzL6rPd3DYBPhbqQpR8EZy8WRvGYuRmxjXmoYgigGwTiJ",
  "key18": "4Rm3XMQn8hdNu8W3PhtbFMzqCGxe8wXA4hMV1ncbfAZZUYEZ6c4j2a8cNDuTBabx3b6rDctPzYCs8RWfDfEvF3v",
  "key19": "4QKcg9RG78zicmD3vVWnQpz4CarbnfAco1aT1yHiHvsAGjfZki3PTraBLAqkE1fjFndy9dy2A5mgXaNGhkKswHDs",
  "key20": "5f14zkHn8Sk3hcU8jvc6Gg7Aw2irQ1Jw4sP492H4N1VoeSThXVVwdsZCU8oXT6EKvgzQ2AEGHtQkAKuLNa97nvRi",
  "key21": "23w8NXrPhHSZcBVufyd2GepjHhm59jd4pX2hHxdiXg9zQTGKym9A9kpSM3a1EAa5SsGjDXbkm5kUfvzb4Qe51zUL",
  "key22": "4mYovtvNGyjCStob8PfxvMCyCP9aVV3mjxioLRh3Gp4xAgByrpVYSRMRheaGmfntXhcPv77dP7YSeGZpgaDpMuhQ",
  "key23": "3waTGkh2ZrteQ6eC5HRjLaNgxRS1JURExMWMfogt35hWHpvF221bJo2fhpuqAHmza1LVyCGbtQdCZ3cDRnVAXnsK",
  "key24": "5RqKHBHV8o4R7vZ929udoUh7Fd2V4suRwZWg4dwRMzUr1DLxTnHgMT6xy9RtP9QDq6nZgUZyhLQ4CkwHseMxB3Dt",
  "key25": "4AaCzVhfCtSZdcWrxbACSn72eZn1pq6vuNo1wEnnR7JsbjyLSMU9eBzoPWXPZTpCENHo6DRWVes1UjKA9hxnfsdw",
  "key26": "3WTudqnxVRfjDpGCFSSoe5xMy5jy5T7Gi61HbETVWfU8CxoSBby6gtNVdyb7VwycdNwjQ58DeXDne3dCihn6gvqj",
  "key27": "zsGYWQtpaHbZBc3KbWsF5ckdtXaEbZ9gEBiFSsoSFg9YdkGWhjGvGLJmbDfc9xwBf5NMipuxwkKNKpPciH1UTF5",
  "key28": "2fSfK5W9MHCGX7TEppS2brGRbwkM7EnHm7vr7ZN72TMpn7wyGBPRwLvmBzzpVxBmQE6Nn3gYQUQWgSPbexdV9Gox",
  "key29": "4Tvbcn1BPtztG65aiXc3nuZuTyj9UvCKnaEpfoxxAhCBPPQWPgsHkx2XhV8nWzN7Nn7hoFJXTbpfKSiNGFGNEtT2",
  "key30": "2qLsweCG6SxPtdoMC3bC3wC28b1ff5cz84eQKfWh8wBNg845EV172VmEsRj5MynryScaB93EvjcSeCBaSK3zD3oL",
  "key31": "4jZsVGgBvM92a8q32ceduf75QsRzzXzBHSLTThEFBp259Fbmnt7VT11JhFxZPbV14X8fXxUk9fF9MXB2JmQ6DhCb",
  "key32": "4oiZDT66W4kHEpbzRE6spjbBsEje9MeEb8adqCVuMrbL7aBKbCDB6soDxoKEBPCRKmDahFY5bKYRtuV1t6boTjNr",
  "key33": "2A5HKvMGk1SwTw6h4pH9mKgMx5eoTCE6eYUNWh8jH9YtRbr8kyrudt7vkpPCH5RV5oF8DncAZ7QSdDSkvYVRZvKJ",
  "key34": "2Z5SEiLJZksnydAesg9nhViXnXQQ2Ev8g4WPvmpqhsVYjV5FfebCrRkSqQeiy3VgmboJ11tPo32QWAsb6w8nJvDK",
  "key35": "27MELHGRp43yjF8bHU4hEgPtYUEH3W9HPsBdP6G5qH9a57VwGyqifAKb4YjYChwaT4E8W9Wu15eFmMyrnTUKs8Vp",
  "key36": "59ocBJBSN4ZzFSDiKzywAjKGihWDTVuj18DekWUSjsgSh5nKs6nYBL8BniJhqmFDPeKkM7Rwx6qXNxrRxs6YsCvq",
  "key37": "21KYYaDp6yeqgjdXM7qv1pnoYsFNCPV3PSLVMCoEtpJg4zVyHCEE6m3UBmaVUbX4iS8VB3nbSF2XSBaVu5LdReeg",
  "key38": "5CFeibk8h2u1wcXWKpZG5ZtUMQrdPcG154HzQhyr5XrMfYfwMKBFHzzc3Tam9wwFxMb6ZrbmSf7Awsuof3GSoJC9",
  "key39": "oNovuHE9mttv8RKFYHdDrjxk31fyoe53mEXFgHmZM2anRPgTce9mirft83Q5NxXKrMyfobpzqdXYQ6CpbJZM9CA",
  "key40": "5u45TqtiHbXiqsfMZJPdgVNr3TNSEEKiW5pz87CB9FH3nXrTmTMyFRiKxXiDb68x2XcrDJDWYp8uHz49pkffm9mS",
  "key41": "5yxPraNjbVsGU3REfUnYH55pejYfnCkn2ctjRoof4qzNmoBNACs1135qEqtK3RFTMnpuo7owEKMzjZ9mbk8BfWnZ",
  "key42": "4FNMxQC3Qug1A1FHumFqQEYttjB1rQpuC433UUCwCcjXXjQWzrMgpZkbJLG9gCi4CTRWMYmDjRprMs3ZaCuiJz3S",
  "key43": "5i2zRk2Pg4tvqzZVcewT4VA7ivV9QxWE81mZTWxwYbz46f2xPiUHRUrMzVuvrJcGfchpwfGiPFvvvHbrg7g5vicp",
  "key44": "4bMTexR2vn6BGkD35n7H7jR2NuRoXKwoYoWT1g3ELjqgNkaS9ZvDiNKF9BZbXikpeUg1cvCaAUqhABs8vaRSTuXr",
  "key45": "wsUQuAk6AiAx3jGqsKLdjnGWcf9YWbHB4SkNZbAJRqZ3NtM3iSBKUd77obzrQo45Eam9QQDRWpUNbpx2GNVjtdz",
  "key46": "4AegEvkzawwDeTDXq5YZCeGQLKnqgMeTRXo2FprRR7PZeTZhHMbfiz1jFJuPJsLyjeXsPtpFUTfQMKmaQ7Znbina",
  "key47": "27H81LPTVWqpPRCZrKvBbZ8N8jf41azK5GzPJKLLVWxjTDq8tGysBtvLLHg3LuzJ8TPcvwJNTs5Bz3v67Zy9pfoD",
  "key48": "PGjzTyNMi3urfo9C9ZMCB5BiZ6KbYg4kK7HSRKFuJhbU4CEuFggiYTQUiPa73sYtc1RBBKF9PjnxkGG7Xg3MhRX",
  "key49": "32ufFKA9ftiaoRyoVktUn4ssdzwXFoyKd6xJ18KvCoE2hLdELK3wgsTfwfJmeEPiuJZYetXa5KsUUcEncPPw7pf9"
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
