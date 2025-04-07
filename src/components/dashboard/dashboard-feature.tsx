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
    "LWf4SQHVQSoPxiHMbJqRRjLtp5avZejjhKqNJTV795YCo9Uztix6je6cZhbevpbXHeCAfUAk3owtqVpQshPD5hA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gcFdGDi9MMUxJERvnAyJcN2bdZZR3jTyDJ1sH31KsihqoFrF3xishychgaWpRmBbAxogdVraxqpR6VqdC8965Nv",
  "key1": "5mCqvYonV55rjpNZdkAyMjgdoWpQLfCyy1fgEPG13kdPmTnxsUDs7FKLHRBWNkMiFb9cFKbGgDL7ES92wz55n8k1",
  "key2": "ZNHAn94vAYrzP52bFwXzeKYcaQWiEX7zCVZJXPKEYpNgarfvGgMfY6CEbJnG6Vi8boUwMKYFobxnjTFeXsRQwrM",
  "key3": "2kg1kpLW8M8bBBn16eeiMvPVpMgXrw1gwPJLMefgKpH6i7UQs3orC6Pq8eNSekNHueobtCDfpNXyGpf9Dk5oAXgW",
  "key4": "3c2QCamgsjyHDmqQho8z5nJHEQxRcmd4vx3P1cr69obBJFjPmxhPQfYGJkQUfQWTfZPhp9W9VgqYJeGRuE7ETvZ2",
  "key5": "39RJj1uGyU2oSETQbJ4rc7GPSA7Ep6xU8BsAVzqkP4MzaKHhkiMZFgub4MVQ5p1ntJYGdnQXaZhRWDXQMejmcKKM",
  "key6": "3YUzeRumkt4Seu73S24Koj8kpcTfwDEKbByQLRDxXSjewSqDTZbnHf6oD1xiBEMChG4Bc52kwiqs6a3gFDH13PM3",
  "key7": "2j73MfydRTzDJyM5fGiyUb5e4zT2JFoAkWAyNfFaAkNvUyh8RMPHPKj2fjLjKkpvE427q9DkESJQK6L1wvq9dU7C",
  "key8": "2c9ZvMV3Gv8j2nKoBZF8i2T4foDttCna1QLdMHGC29UEhZqhz5q6bjGfVUpbdnGZaTo9PsQQ77UwgxY3pMLJ8e3Y",
  "key9": "3wABxHJp7jkxVfDJrPi333tMDhfPaGq77RR6ivNserjgJUt2iPZbf9fhaq5zaEo1LDvAnd2yDpYi4dA9VnPsJVmb",
  "key10": "3TrwyJmV4HTFhQeDZ8Z1bcWFwBwgymYZuzzkFTZrBoya9z5KmNzdh5oWKo8jBoXyD1B2PtMd17CkWh5eSoUdKLQV",
  "key11": "53D5KpmVbzZKrJCkrbcC48YCPDuqGNEPxTofe1RWpudACHFTmAaMgDooZ6nPmQfr3Bpexj3kffGhDAqWM5mQHi3P",
  "key12": "3tytoCsWdbHf8uKFqqz32JJb4ngGRdaFxiz5udQpMzMECYWoZjBunHDoJKDo7PERkQd51fmErx9oJk9kbnL4zswV",
  "key13": "3w2dH5qVcGc3cay7yz5mnn88p2Yx1yFuSB722b6XeguDgwZ8BP6dWDQfnxBbdyjsxixmZvJRUuqu3yE3R3kwQMMZ",
  "key14": "4rk6JJyb3xHZCgVzLaZAJVunNc8LHSC63sbWe71QsHsKtqpnPBu11h3tEeLbXpWy1oMt9B45YagWcRgxEqMCiUE3",
  "key15": "3zuXNZiuEbK5p3NKHG3sJT4ZhET59wqL4DPfVCBxkudKiSmHd8kvWmvTR5cK4EKKusxHDm7V1nDgNfFnAtMRo2V",
  "key16": "3wRWtnes5uNtQBnsGTViLnUB2FZQWt961s9qozLdYSHNTh3xzBxGyhD33P31XuLERACWePtEWW8DhVNFzedrinjq",
  "key17": "4CPzQqL84BZoirUssbuVMQXsQGoSPrfBPMbkJ6ZQvenzdSdm6eF4q7sX9vWQpzQEVEkCc8hDQmSgCsJuPzn7Kbqf",
  "key18": "5caJs5mFydyvW7u4sbHbJuBSB3AgdkhwkJWtNZyfDoR9ZQvAx5WHfDCxnNnr8XBF5MEt2YGiqaUYNNk5s9Sw2QLp",
  "key19": "Ry26TEANo1H8SeN2ZSKFCQTwwdHh1XKpvQfKDqG2NY5NUvQJo9xz1VmQx2fUSYmiGnuW5Bm2qoLempjM4kx6DdG",
  "key20": "5PyV3TeJiwiCo256xmVGDi6wn2Rf7HEzsS9GHNP5YDkxgkryWkqF2Vh5cArA1FbTZdtCjTakjcERsUHKW85FAEh7",
  "key21": "5dPFasjXJYUtnvmsKTPVq44rvx6p58XeyB6zxUfRuELdxkFtGcevPft2zi81xNEWA9Q9REgNExVbFJ2TBju1Zmje",
  "key22": "4kG8QWhvy9ur5d8P3D2skxZfxPh3k5tSzKZQMksamSLrwtq4jgxEAwT41NHVrGxhUwvyAkJrWYDL5SzhJHNZasSB",
  "key23": "387tmtm297b5xCsgBb4oFQKBnUPDNpsqS3os1xYvLFaq9DTcRW3gzwHRN4PRi35rMyZ2DKzBDNwPY3ZSBN9puWKD",
  "key24": "47CDmEVS5rHJ8AbjNTcuWYzTE62P1vCt2KiQEzijBQ5NkzhJ1GbuPW2mC5DFr4auyw8frqVLuRquMPGw2ZmABTko",
  "key25": "2fUaRYpNq6bwis2NbXChaUYdugDP1Q6YuxE112W65YN8g7Kidjfw2yBVHR5gksU3aGs4cocchPgjMYvUGStDVYWC",
  "key26": "4ThHRPY1vHRxWPdRfUtnjezHTv9HTWVESJpLzzgmf54sacS1NyigWZZrEXYrxv6c6Jh3pGxTwDBeCg1G9CR28i3S",
  "key27": "4jfbN52T82UFJLmP1zbCfdCCbPFw7dMiT1ncMtWtZXddGFxeok2q29Sady5QYH3oLdv6T7BR55bxNFFBSpZjMd5n",
  "key28": "4aNLZyGfvyCAp7bu4iZRBwuQsEn1eA2iExdKyseZpbWeCWn83qN2Xdun1ape4a18KG5xF9Mzoq93j1Q4KDgPospE",
  "key29": "4KwRq66NHN5AUUf5pjpHAUxyefmdnD3kLt9V6j7XCnjGLKM62m6SuSP46NKM1YemRshyHAGcNbDYNjVFHztjVbq6",
  "key30": "3RtN2p9fBjEknRwwgRbb3U23saYidsHT2jnRpn6AEUDbjdTkYYJa3J36XnUHR4Ak4TsCkhKFJhX3ujFcZ3V514Lg",
  "key31": "26s6xUqRqzdvGLbSqjgGXChaUQ9iqr2J1QrSp1muFS5ArS3RQEMi6XCQ8mRKDky8ap3iNbXG94t1BhYvSqkbBXso",
  "key32": "2msb1BaAWPKRsFd1hUrNquLHzgPQgwkWuBv6TWoeMWvupgVrJTcwF7eSyBz1ptHQGXHXgT1dPnMEbGYcECVEBAB9",
  "key33": "bG4ZmTM8AF3FynV227p1dPxQYV5pqhaEJsDq1LDqwJdgNzccm1j2DH2MoL3HMwGGyDCZSrtMbzFBvLVAkZvPDfP",
  "key34": "5kLU1R2Xieht9LUKyb4WCZaZU3uTJwmKvFc1Uh33puYT5EQ3njbncRdZPfkc3fsutkwowSoaBWxMhPQmRjjcVRtv",
  "key35": "oxRqQ8EzfVWWWMLSyPKncQ7yRyuZyXPdMyPBza4g1bjpiacw4nkLR21ukGFRJiTJYDtNYacpHmQU5hmvnkp38t6",
  "key36": "3Uq6oU5EMXC7X8jnhksg5KAAPrGsvGQPGDdmf2XwVhAcwPAZqUGVUxSKFSva71S1tKccVcnLL5K9JpU7MBTkuEMP"
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
