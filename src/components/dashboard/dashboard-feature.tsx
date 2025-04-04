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
    "g3MbaNiV9jQbhsaHq4WVBoRJk8c7hzL5EC63y5oRPZwbTUh8NQZycMs7rHbu32ArYj6jF3NeGq2aGZ5zeG5YygP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAc6jVxk3qBWVDWX4pcfuerMubb3W6N2zUFbdkuqcMMuq2mtuTeuXtypkemxNdUv1VP5ukFF9MiW6E6Lyv9nGAM",
  "key1": "2Y1qCu4ZRPMgk3oqPFgpYSuBWa3mu9cvgSkNtJ2d3mXpVT9pBY2iBrkHAvNLChAZVz4xKSQiVzbUJgJNA1L6p4Tu",
  "key2": "4GCuuj2e2wb4HhogUAFKM75tuxYjjigSZx96Vj3ktFoyirB263PhX84RUAPbmq7BsDu2UCbNsxQ2gSM7ry9Nj2Te",
  "key3": "yzHdc9BRhBJu6B1R74QVbv4QjY8wR31S3NUGFB4gi9CiqH2WcJZzHTM1VXMMvr1gWsnFaWR5axzyC1K2AYihQbu",
  "key4": "QjgBZ3UJeFgTCMENzEgGyVwKDpyjjMXJE2V78HixuGC78APBD2JFaTx6BA9u7ouDiNmgEiL65wUvpWWZTDeTX5p",
  "key5": "31nrNd72pepvchFoRtJkVVCdHzYrz2459D7vLki4tf5mG61uPGsyXiSN9i81z114YDKMsJt6RH8WGd8hYhrNcSND",
  "key6": "5t5a1EDyfZkF75WdAcQPrQ3uurzKvvdKNrDcHXFPCmyA6kYVW1r6QS6NzQXuVdLBEMaZzAxvQJFLVN7m6QMhqr5v",
  "key7": "xntzm3DhSP6563XPcfr587XBstGeE71maLrXwkiqHfSxbFat7NDwgdD95LZWqMTyhGW6SmXDpDwbzMLaWPFL73D",
  "key8": "4Xeu8oQ23BZeyaC1ivcbkpGVa1FPduyTsuqYaP8q4di4QsCuSNWNkurXq9ZvKUnSonztJhfeUEe6pofQm9BuTBLq",
  "key9": "43fUofwW98B1A5wm4AXTn2LhzMdvddi4S4G3CBhtZ83yzhGxXYdxaQ9tmTnmdmD7hxd7foPNRzw13mSJSeq4WuZU",
  "key10": "2fuDRX1vXAz8YcykSTYX7ixMfX9G1h7mtRDnaabvqNa3C6z9eyR8D47BB6a18YtS5pG46S85e2vt1YMVuWbkgurX",
  "key11": "2Vx7SV7TAEc8RPuDMnBD7YFVRCm1E3rjQJGfr8usTcpRtUxzkYe1YcaKPNiqDw1kxyzWjHLqa4fT4T7CivH6XWtu",
  "key12": "5NtzQ8VSRs9qwqmx55fr9QYDLsmHGGzc6P1Dxafv1UgNuWpG4x33JZBZEULsDpBtAYoDesTArd7wfaRarSieDaTg",
  "key13": "46hsqVaWx4KRbQ3pyTeP5Gof1icCRnnk2D8bKLaV3HLhVdczaqzd7JVJv92SrPGjuvTmVS9z1DujiPtDCEUQriDS",
  "key14": "6dUcyDN4rpNVXWUbobKqSFetU1QgcAho8ZxcLYJRH3KrE3jm8QCkJjQu8zza2gM5SufLxoYynK9MEWMuXdpLmgY",
  "key15": "B7q6EGVda7hjrXvHU7ofWYHwH8KqjooLkiy1nNStjfYbsmRKfvYrtAZ5h9MTPQ4qK14kfaJRALpNoLYoggZG6vS",
  "key16": "U62dZNKarMt5u1T5rcVcEF968NFLhgY2oGTowYfLi6D2P6JxN81W24bn6cP55DYSYyrxUYtw8oEU8WMu4dKvoA2",
  "key17": "2SHSzRW57i1T3DVdiRAA6b1sGiE26jo6gUr2GMG6z5A9htPbCDerwXvsYDd5fzpVpJ8jRmC8jvmDwCygqWMbLvN2",
  "key18": "3SyhJsieN1sJ1sD2BBQx64U1iaE2epQaZ21tzB526uNssm6hETKowSnAeSET6ii1FwmvRbJNa3WUqgiq8wAo29ys",
  "key19": "4q16xc7bBVGkjefeNMybfPYAgDs4AipAWU6BtBAFZfWT5dcBW5hARxBHENTSDq5Tm5vSFAGXP9LNeY626kUGRnb6",
  "key20": "ecz7wdXxhdW2VRNZ7MVcBb4Vsrfss2d8s6dn9qvd9xccwJPtgtp8jad1NuFb6E5TCDLXneF7xUP8evAdzMgrE4m",
  "key21": "2haCyup4FZZ6qAVoDqFipnn1mD7ZznN6S8zRaXMfbS3wUvPBgfaxPP8dmCTdNhfBj3a9zVDnNiTjw2ZSnsVutpEo",
  "key22": "31v4qGKMSKkk5uREaUQH8bkUwJwtK6K6sy28wG7spCVY5goA5bHdnkXey1h121zSS1D2YQFMeMNWAZCY4bDsKXk3",
  "key23": "5jxrLm8PGE5ErhP9Rqwuqegi2T5VQn3VMUSUhN7Y9gA6Ls2JNH8NnfMje11YBTa4orZthq9oR69iJWm96KaFKREU",
  "key24": "3Eaoz1z2ghphi1yeLwmYjCNx89PKftxKMLDcdnDF9dLiDPRADsvwFovapk3KWLXXVk4qXuLSixpWzc7UX76EcHLv",
  "key25": "54FzMiEwWEcDydDYosa2i28RQXftuLSvfWisse6oei8L4VtWQmr2vktASL1JsnUKMeR94oFzn9qJWRpLsLkdBvzW",
  "key26": "3bgvkpzAo5tK17Ta15vWXpfXPhqMpsxf8X8J5gpse39p8Q9WBwTJ1frbyTCAxwLo9hJPAs738ziW7ATndA99gf4D",
  "key27": "4ek7y5HjPW18mY5WUxVG34uLHhojmu4AkUhTVey6hmTtbvWXDkFnEHhXhMQuN8Pwc286VFoDpfiudxPAsChd75Nb",
  "key28": "4DBfp8UTsqJRZ6Cs5iJBCCXBjDgsKahth1ZuGzfi3kgpdwpeg8iWtf4W2zHxWkJLsXSuNMn5kFCpmNAxa56P5zz6",
  "key29": "22mnRN63owk9JqfNnM3MzCDJDxGNETpd24tzxN2Rfqmsikj8vgJuKADznqpQZM3tozKNpop4E621yaoDtEkromue",
  "key30": "2pQzaxLgAb6NqGpqQwVt8PdqkiFnGpjLgYqTa2bTzRY1sLqcxiYXfCg2bScZTDA8UJiNmw5b1CFZSUR1NnrMb54d"
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
