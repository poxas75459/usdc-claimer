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
    "54rzjA1DL5kURAEJujei7iVSVkSLBxii1cKjQpnJD45vsE3vUZ2nY4hUvFRoyNR2AeskMXYxPEKEqNezZC9NzbTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Krgqkn8xjRo7qoLjAL2vs7M9jfLGCfEj5PzJ8gFNFY4kAXNWEuf6EcfraYzw6sB92EEzuLBMiJnMPLN52uDznAw",
  "key1": "x5vdNA1moRYcwZz26TPsGq5nP9ZwfodxLEW9CoSdKS1AQJhVntBg5K6VaLXJFnvHEa4fKzZPgXkVyjois83AnFV",
  "key2": "a24XXXAH27gzgJetReWTVNAX6vWN2kRDVBaeinvWQaTJjRhZVawsz6HcYUB3M38k5AL3DKB1KFMZmNnjxv6A5Wv",
  "key3": "2Yj8W9b7wrVwHLr1snjdivzbjzJ7pfg9uU63963aDvy3diHydtCMPXBCz4UYgeYqWVqqgvSQDrbULiBL6a6ypFg4",
  "key4": "HVkjKRwgkF83HrEpEP7KMQKZdV9XmUs7JJg4Dxb6k4ewrJQ5mrYwGTL7ewWunhrpeHE4oknNVZaYwFByWmwr3KH",
  "key5": "3cLfJuBQXcAm2FD2fnM9y769UnSyhf4H1EYFJg1wQeZmTXfM6qzJHGABBbz73Y2mLWNxP8tbqyzTwZNJi6RJ2u9E",
  "key6": "4dHL1SW817uLBunnMoHk2CrCnLqrMsWhUSs8w8fdNZ4VreSrJ74yJSkpFWzdgUGQVisfPWVnr7zAwH4MWCAUX2Nm",
  "key7": "3eEvkHi9fxKQBQSP1GiaarT9HHHqFW8G3N5PaCBQwzyhsqKdVueC7UmpDCn7Y7eRF8D4k7du9Maq9b7UbPo1E3Gw",
  "key8": "2coKdhCEVX7d17x51MLxUx8KfJBkqV64bPknTwmGkMnjcYhFZr7TPvvfW7abCADqjTru3iPKUJHuSYGcNxVLvmeh",
  "key9": "4xjgJLoHriBsEGSmYJpXsqXLoXsCJznKKA2sMHmrukyvLpz45Cbek642sBv4tXsk8jjkSqJk4eoZH5x27U7Q6Rwf",
  "key10": "4WFsbhPVL5mrGEXvgMPoAD5uxDHMKBwTPcAkbQMRmJDiCW5mRXbE7tFFYBFYepqsRfBNfq9spJtXu6uBnFpgZZhZ",
  "key11": "2itAX78LNy9wkK51c5d5mtuGbNuAvozk5m2uvtHbgAwPHA9w2A9wCxb4ysHnQUwBVxF9ECTRBZ2XPh6dsQYUqu9M",
  "key12": "63UjHZGHDazq2T3Ye5ZqooHrnFfUAksk6Mv1QDHqGFcFyJiKS8PzPprsJcr7b4TPJQbhWG6c7niwPwZRZ7bPpBf3",
  "key13": "2Pr1zrb2YaHmcWAsjKrUid61MJpjjEEc9snBZLNNteaXGXY3ic6NEiSLSgs4gEH9sMmYucrm7vaZDZiqxXvA3sbU",
  "key14": "4TxfTmhDxWt5X7KQwHBqiVUSWQkbDJHKHUsFyDrCDhkWGvD9oyN2c5zmvy9PUin8dRmLLRLG2hfHLbS56xKZSzyX",
  "key15": "4SYbv7uRpwmE5XsQCPWvx3Kn64SneV4kLgE3yoB4eXqs7DuKWAS8itRiTXXnYz82TMYsipz2vgJAD7qX2Mtb6qPn",
  "key16": "3f2Ubhm8GM3goQZTwmYVDfWGvHMQ7j3RMXzhwf2vE9oqFkSnudp9tynVoNWxB1sucX2oucckGYhb2RGwmgPU9jgy",
  "key17": "5VahZrtXz6DkZz7mNwuFdC3sLoHBwM8D9FeoyWdChmYnukJWFhdCwcyKzw5bBX7fLyt31XgEKDjfPNWFCHs8woMa",
  "key18": "zgTZ7VFRmTRxLUYzbJHLUyj1Mfzt1NVoqTZkAtqzCvN2dcLU3uLPHFG8QmMfjn68V1LeRQXTq1CwZnzNcL4QiAs",
  "key19": "M2kqyWrdn7T6knppk88YMLxTuAx9G7Qnj6PqsCV8tTGZALnYj2ciK99KhP6hFXBV39F4T2nnXRG4YCmexoCitDN",
  "key20": "Zvc6oLwkEPStnjmkKbyduYFuxmpuZVidusr5VhKR3S9SigkSvkP8gVdJJenKs8PXLAZ1gyUjDnX9VWKzXSKHYht",
  "key21": "4o8CszDMy75grdu5HyFapyTkkRphcHbEJQds47W5mBrcjqXb22kM4sS4JeYKwPt9Zn2MPDp4Np53Co5izZjBty4j",
  "key22": "4YTr2sozwk87haox1G2AyVd9VwwrPdStWLnZ9MLcB5Zeuyve1Qqmvh6CHvGjRTnUSJ5NFhYFJup5jgSfHpfxWJoG",
  "key23": "21U6HnEZfDjaEBgDZxtp1bRdWV2bMpWkknsPJ2Hn5x3FayESYKKKaroBYYVLm5Tdc7G4LJC7gsgfHgkP2BWsHiob",
  "key24": "2ep9epSbbiKckc8RBTHbmb5acovJ4VuTfUrgANmfJzq9Q4JFXkn1rq3brsacA6Lmi7EuXishduf4nhBAY46N6gse",
  "key25": "YoeBYL3CaWde9JwJVqTp3AwL3NEjsuxTvKU85DK6JQ6PUu2XxFbMXSSyxCzNZWfoqFpzJYb9TvdQm8FcmuQXJJK",
  "key26": "3Q971BByAnkaFcwuELKYMtKQEHiVy21SFGMb4LCtHBH8kKYEHmjYrP2R6HVMK6LtMuQTc5KTkH9B5d4J2wXfoktk",
  "key27": "2o3xnWerPYZb4q5QNBUYj7AHfGD3cdUM8F2cJkP2p51iDjuLBmBFhvEPr7pkykDHNMVprcfpL87VsmosWjgD4ya8",
  "key28": "383cPaZb8r1noqafBpWc2mGYW1wEdqMbTvEYm5pdwYn4h8PCjxBGHQp7thGrqAxobt12VcBf2nwgEiKDXobomUWZ",
  "key29": "nqEpWWoYLoUX3s9Txw1PQSYKix2VKkQpWCc2MdERWHpjNK5L4YRkYRnn1hCFnrjgi841VXtPAhXKyCLs5yG4ded",
  "key30": "3QwrJhqDPRCYckMahmjaMiLqqfmPdfWSqe8gAfYQZLTWAcBTW6sPJs3bxAnxQj65Mt7ARSEHoVWZ3pUpq5yjhkNT",
  "key31": "2Csq66Kufrex6idmRpThS1gmbzQqryo84pcKwoX2ByuVHTpH8TZxg1vNvowXcXrxfn6QKni5qzqS6cqD5ADaJGHo",
  "key32": "5D3vEMgjP7Y9JZKqWzjsxpZrMoCPD1fUWGc9LUwEzwz3MNsjgNaRCU1h2gmaXNALyH8zw5sTNawxeWqyoDDDwXam",
  "key33": "36tAuFFEYtU9ZFkcJXZd7zLdcffVjPczMRaijFxxnBdX9pKUV3P7xvqPSgXyyvF8ATuoYYUn4ttAmUqxVaVFCkLP",
  "key34": "2MFqi5D3do7fZ8VFe2LxkAScPnj7qd9S8iMsoUHvJb5vSMxDE3s59FiKMeEJHfmmbCKgdwsVjZsbqYR9wWLEQik6",
  "key35": "NJseYajUpCYxLUCZeQVfMniXY95egmpSq1SK5P4eJCuekRcVXakHxmbqo3dwnisfK2FC7jddTGqdcHsUBe4TuPK"
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
