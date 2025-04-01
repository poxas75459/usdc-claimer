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
    "4GQnik4LCLGLyobDJxwmJimQBUD9RcpVuibrPfXUPVeUX57BYDq7zMtZ1tvp8tZaEn7JB6P9qH1XT5ym3fWHPrw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3QW4Gxuvk7aMG1jGdq2QtNkfTxZDHTZxoyJcnpPf8CqkdkLigq3DVjdjA1YK11wMQwJG6Yqz1BJ19H55HjTtaq",
  "key1": "DkPcanFxkP71F6ZZetyiZqz9US373CtijiqRGB1d8AxyysFaDTusy8Rk3URQevRMYiVqUyWGhQ7bEvhAAp7csVi",
  "key2": "3vYRcoEYhRLJVNKsxBVG9d7PBbLLE9dS6sFsB4mHj2QJYi1L9NL7vFdkp7YXF9KaPzuMu9MW6L6YTsBnyNDzbSze",
  "key3": "4KW73abr9KMx4h5xbWK1H578aXygRxmUoh4HKWgAt6nzRFMRS5i5AHYF8X8VFZgBEuHjpGbPYVV3uuiAvU7EYXfg",
  "key4": "5VSRvHNEE86WU3cjXk3TXVva7qe8k14uxidBcaqda9q7sFTkGEnMTSsZ7fRoPjVaP2w6mFV4FrfDYAeXD78vNPnG",
  "key5": "3Qr5HRSxfNGY93dwELUECed9XyEE42ZB2k6pAeCynTxPLXvCPvWHFtdqHJ1LJbHgwtYWbuAM4tznAdNLgNy3jzPC",
  "key6": "4rtGu2uy8rsbx7KbTGtXRafZwEUQjFEmL4c6RcR9gAbmoarQe3Sq3K9YWV2Jtdpyd8mGJdRdX7zyZnH4BwpiYx7k",
  "key7": "2MmSzRggnnwT7AhgyW7DgVArQN99w4NCVpYTAU9fC6S8UUDssukyiScQb6ceXPUihX83NrEFizMFs9htBeSgLvoa",
  "key8": "5kdQfzQsnkwLrQNb1rcVxaRSH9p3PUvMquDvPV7XWJT5NnnNaqBGHQWECGrz53uYeQY8hnFmAaEaU72ULq1U7F3T",
  "key9": "5SAzL89BpKe1sy4FuNgpTM42CPEDQpXCHKUybkNjj664E5M9tpM6bFayrAY5tZuLQwtbvrk2SUccLaQsuY8TpzWf",
  "key10": "2xdUtS4J5ZYDPjWXcZtsNQzyfeSYkpVX6Zb2H14aZWE8HstT2qqSTQuzHpV2B4t2PxWbQPEY5gprxwj6nhvMAsJb",
  "key11": "ugDvLMLPpVwoZ1TyAD8KQygm4Wbu4SH9SxmXHqpPfGVz1upMwB4j3YrVb7PmkLutcFQ1VeDErpc89bQQ6Whs5AD",
  "key12": "21MpcvNuHGMJzXtWYxtQe5Qf7R74ztFC8PSPQZbAej7eue3WXvjqh2YWyMLiSLkBTRPQ7LPGjbjbm8zV8pAJ3iJF",
  "key13": "2p7WojgAaWrMKHVxGZuj7oK5Ef3FnFar8uqMfmAFaT9vWJSDZrP1Eyxf6ASRpUbrzqeLTw3h7JkLwRcJcoacLhyW",
  "key14": "2NN6EmVXjpgQgtDEtn9MDfJx9yXmQ4CDB3G5RzrGagwDN8agQdE9bPnpBokiCxyMKQs1iwy352nfYsHWQ2yGcd7M",
  "key15": "2UAdGHgvRjEftzsQtWAwdH3XrHmrhzCWKfiuvCFYybD1HF1ergP351BSETbMsud8SUdTBfqFVTVJm4Hk3PiA98GD",
  "key16": "3u7JNjVBVDQf1WpcZiv1Em3NbXvcm3mE8Xd2Em7ewwHQV4YaB2C7NBWFNTvucPVAE9suJ992PjpcoYjWTcWbfghU",
  "key17": "2B89kB2XmT36j8f7tLB4g362SxxRQqdYaPKY8YxDxVq4RLyJ5LWTeX3EPtgnGu9oZgJu2kT3TFHkvXhCC1jyGYeT",
  "key18": "2a3kEoFrTHQhZNB37edeoz1zwSbvNT3gDJ3DnecwJYYvDQ6kYLoscSF3WxLD4tm3sZCSu9TYuh3M1m9itMe2LEKU",
  "key19": "4GogedWNupNr5eUeRFPzAamAj3jYmT3csJuuVP4hg4ZFEhKKiFGjt8v7hKLNF9GcFuc6s3koJMKrHDZYi2UwsTmH",
  "key20": "57Yf396CoQHGyLapqC3nr4T7CKKwmp6GSECvLFx8VfrN9PusAnzMj6MufyCR1C6KB17gctau7orD1oZdbhEV4usw",
  "key21": "4ART2HxXvTmZpu79iQknd2C3sQe626yGtoz9eFJBnwppBLvFQ7s21PFSCoRoMGD2Y6SJwtDi87Uus5cBqUrrKd7f",
  "key22": "2JP5umZqhJ66yN95BP5uTgMnqqjQMhtMVpi2BgW6Fc9xixB96vzs9KdU7DvNDosB5kMn2ZF25bAFsokd8F3RUFPS",
  "key23": "4KYWHCpeB9vppcExzn72aTjWXmgJW5SHrh4AFTUGetoUejCrhfNoWXDsK2cvb8otbHH6j1xybG3Qp36gPCcGBmSX",
  "key24": "xDUZu8AvJpQugNe1z5chbuHVKGfDiEGR7SMtrTZ1pEgHLKkt8mNSA2g7211nUu6ZTPY6FpURQ3s55biGexcYG9E",
  "key25": "4TVxWXNuKR3igxAN4X6ZTUWiVMa2jV2LiMqMy3GcUR7ju8JoBRWpXhKNdK5rxCBv1ZTWjUgQBcssr6zipAxssJ29",
  "key26": "32p6fzBmwaGrMMzSsm7sNoSUnB321KTvNwvkGXydkAqu7qZ2kgeLmRNTjvaiv7C7q8qz2HweyaXN4MMwQZjichT4",
  "key27": "4rwDq77a9e4V1DLVw5o2LPVkd3uWvJQgq3cST6h4maoarhEXwhsiSppbkUysw6ZB3DQhvYEnV631ydRFt3HhyExr",
  "key28": "3omAJs6yQ42k2qZ32EZ4pawPpSQJrApuU1dYLR3y1PzNuVXHtc6BgXbyXG1W2Jn8rHiMLRXkxKNwJxzPE4FsEYg8",
  "key29": "56mCKCtHr113raQcsMbcqt1J6DDAvVBhrDN3HFkPbVWbNp8iAC8cuYezZwUpPWsPComhUh7rUVYFdx4R2RdRcBcP",
  "key30": "3Q152npGpRi114Jmmib9hoxA6YjSsbrRiJ7CqfycEWL4poV8rDBS4PATmAAbeYYj8AQNrSDDhcdryV5QsWY1sWJi",
  "key31": "4qfuWA4o4hNAnu2kmxg4hLcW6LdsZSe421uezBiqDFKn2gKami2rC3Rbb9xPgpDSu8C9XiHB6cEzbiPS9bWWbqTE",
  "key32": "3YabABpDnM8KCsphQFkxn6SkWcskgF8C49mYTapP8NR2Kc6rdCNm9kai9tNrm3AGqom7XPaeaPAYiMQvCj31ELjX",
  "key33": "ZKBTnCtHzfk2sZ8r63fagZCHdjyoUVB5MFD7daNavM7d1bht1VZRYcSe3u1rYhmeJKoHdBBQXddFx9PCvuAtJz8",
  "key34": "4Fz2JufDfs3BVRsRCv7ZopQvXRfVuxAm58KNdGBBK5x8sMrnkHUzkpszY1nmNy25T8mn6GJUpTWWXigr5VDyJ8ZF",
  "key35": "3ky6KDuTrL7WegTmiqBpzVkpEu9R3Jm4Fk5SUJsgncLarMdECe6TdkRTcDEd1EjkdGyDsShqWJATpzAJSwAT7fMn",
  "key36": "3tAmb8bZck7pxSLdQAtaZdLHahdkHTDco7ZxKzV9z2TSusmJk8G9BqNMsvYa8Z1pYpbF4biM33ZVNbRd3KXcjnMp",
  "key37": "4jwJAbdLZrTM2jzJFpJNZSpJ5ZhwqPkyDfKebx5en7aAVMpnUCQ7CGYKpBorvrWJPUXUBV2i83nTGw8qbzbhx43S",
  "key38": "3yh1zD7avg4fLtvaW5SJUYMx2HvGFxjjocjV7cUr2ah89RzuBHZQqYJXsABGv9K4qXYdVT1VceQ5mYtZDvsfryM5",
  "key39": "5oF2eDSLrhUGW1NbGkC15zoPFTrnTsM3A3bEbP1DZw7AhzpH5skDZWdvyn9iiu2HkxGrvuiRd2YZZ37PyEAdftns",
  "key40": "3jb5AJPXmTtibcu4phH8ZGs1JS2h8KCcsdFMihd5dknu8e79VTT6rnauHxAqQaJx2msi3CpBNizPk4wTXVs8UxzR",
  "key41": "47C7ewcfk9BgdHu5hg7cy54fEpSuFSRkopKPfaHZURL4ikhjFmZtvkMPwHbKVWuLDuUqjfxcGLebHENroN3qvXdA",
  "key42": "4kBtniPhC4iebVhWTTwoTT5isEfkWSHiDCKqGJvnMkrh3savTz3LqiXG9kxG95PsYEqSVV8z2ub5AtEb6gCxJ5Yo",
  "key43": "zfdtdjzHf5L7d4PdbCZyCeY7NfuciDLPsC2VyUEWvyCBkfJUGJBYATtK5rrjanip6wNuJ4GrndGBYmJUPPYNdDi",
  "key44": "2mT6DEG4CDX2WwRQP5rq35QmqcHX9wPn1LkFRbxuV9uAbCZsJq8i7bpN8KBqM6SCDSFEQgW9Zojd13hBd8VrtLoe",
  "key45": "3zSRNdvPXQH1RSD5ojBYZG5164H4P82Jh8a9cpvyyKYeNZ55LYP597FqTmRiYh69BVBo1dT24C3uDnyWiuuPA9S7",
  "key46": "31QArX7rA3rWkAsdQoNwv5CGyq4kfvugEEXk2ciToHXmR9BYdFqq8WWsZL6Tu3LdVkpzBsCwiZw8yFqcFgCHDz6C",
  "key47": "3URj8mgTy6NMz1VSDPEuu3jq6qSpdQDc7qxy5qWEmhhe5e75DcieuFdmt7gjoeUH855ZXTKy1RHfPdAeg26hSCVQ",
  "key48": "AnQEfZM4bszvVKKqsxvvB7TXAp3a3XfD5NoKY3oLGxfPpkRXM71GE7ZzZy3aRVjy3q54vMZpjZe5iaZPvQuLVmL",
  "key49": "66BKGbJUMPJprVcUg66H9Bk5qhLt3m2UDky7rRP9UtydHKizANgmo8eAF4422yvpi4Fiu7fN1PJbahqTSaZ4LmA8"
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
