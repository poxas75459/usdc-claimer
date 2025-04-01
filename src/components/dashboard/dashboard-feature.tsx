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
    "34FLykfWJiaDWmQUAsDCvBd9Hg2tLuY2H4q5sQ4yN9LjKF6otMv1HWCGjkxdqm4dbEz8Ef1q1tmNDqbV4Nd1x1HH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iUmFiMfYrWhJW8UHY7EC1xn8iJmwWCSBhKi3q3KhLyNkajyqc9fiyDuPg7qHQSbMrFQnA9dNo7od92j9oCCtYoW",
  "key1": "2gUd1sKrSjeJNEbE7Qyf1ZxKYHQD5wVKxvgPHCzgER324SWiXssZz7qHPDYcD7H6sgKDP2DXA7FVWdxEKT1AWCmE",
  "key2": "5xMJ16T2NidUPZoFBormNVh7gN8RpCCQLqk1desmW4J8qh9cNnG2EG5G9gm7gsvKSpBNxawrcXaVm35Wp66DckxQ",
  "key3": "ox317yAu7KiNULhZE747DxQmJ6XAFmPAcCXMi7encfZmxtu5ptB3KvKGDQYqHVykBLnfi9SyXm77kWe4enWsQhe",
  "key4": "kjfUsUXRvoBJaqQV9fXJg9Qn6XS5JAeqb6ZdqEk9ZeUBnPP39oTpb6RLmUf2fvjMBhzjcpAK6z1QwXu3hVWuARE",
  "key5": "23gNaEAWtndmdbNq9HmW3VwX7z3X6t2t8XgEq2JKqJVzZPeqhKLdq6xeutuurPhkTmeQMUygvChqash5Zj25hFTZ",
  "key6": "4Zjdns8YrpAuyua2GryaxfSm29poTsyMhiff8Ea1TNwRh3sUgfHusMKGeJQgAcmb1rtJMsJNcS7ikQJ32V4iMi51",
  "key7": "e8BXDj7B6WVMZrJGaHjN512yhQafFVWhA3H1KQkUU55Hj3VaVJfFQgKgGkt1D8r9FBoF7u33gPbQjGKk8BauN3S",
  "key8": "2TMudqaxiAhfJXQFEReycMgKuyjGY5K4PMLy5atoqqPFwnKtJ2E5enirK4VVSoZ5Ni3rhjmvjzUwRHy7iiuaDVgb",
  "key9": "4xBYkp8TXfEHs3ebzLcXCA4Ng1mik2frum8TMi56Bmn7xvh4fXhk8gVoyDnSkewMkYpQUcFQvESYsdoWZjayTDTy",
  "key10": "392CJue7DHtWJ9JScFNHfXJxxVDiLKpA3xrKQ6wvrPxZDhzQhJRAzKWBmoFSTjJGCYzsJy18hRdSm4Y6e5Q75esh",
  "key11": "5NLuEuNHur3s3a8rQ3S3Wd9SdxR7QmqCoPpXRGcEWokvkdVfSEkerqfxRzdcxc39oSmJGMe1WEhHyWvnahJT3sVv",
  "key12": "vCq16BLb6GvxH58SuQHo2Z8G4V5oBXibxB4o6DLXX7zzzLAkZas8Tn8fjNwt7ZnrWZXSnmqGWJXpFFcGfUL6f7S",
  "key13": "4a88a2mgnd6TCrb4TNHAxSNbAPE94Vymew9zUKi7DajFCgBEkTv4wjmkcHqohWir2F7eQfa8gtPsDMBjU8nZLJsY",
  "key14": "2sJLbw7RtAXrBAzMsRFEbGDfz7aLU9MCdLpvSSastAjUZ7kqKx2bviyL7czgG9MZZX3ojcvsjt16mKVhpoRgfz1U",
  "key15": "yHpDYiNHXVYWxCe99iFtNNFXUfRsn7wqQsuyxayMSz5gdjsVDDmoJU1apdmMa1rEk8yPfASBfmLhphpWsnmPw7Z",
  "key16": "3TpxTWrbpWwqbhwfBM574dysadYUswjY8FKnYVsmWXu4uPPs9ycY8D18Y3dSXRNm3jBbE89fMgwgHD52Gn9KThAk",
  "key17": "4XS9fmVHXjN7eDK8D9KGg3VegSBJT4RyA4ZRw6HMpWhFn79tW5Ze3yAbewr1BUjmRy1ihjeQBo8rDEG5UAAwNhzS",
  "key18": "4P8Cxw2SeM2YATdmwEdTSfZ3uSSiW7WmvEbo5XhjTgXaJMVE2AB7uSRVH5pLY1sQMCCxEDMxmypK5F9Ktr4xHMe1",
  "key19": "3FFb2nVhDHVyxVVomprmPEkrh15YFLXKfwQMLxNvcJNigtTvbAV6i5Lhv88UWwxUs5VmZLN1famMwELRAeMV1yN9",
  "key20": "4bxf16huNEmtdLpmTWoKXbDyoD4ruT5uhckFBXvxBUwnzgJWRzusvxbxkE5wqHnAAnhdEvrGqzvVaBibhYtjHDc7",
  "key21": "3fBZNmYcUhQpqbrnXFh7iui9xnJGPStoAKJ4Kb48aKZgdib9LCdXBs8UXydydhBiqoDZk4o2V1PVo3NwDZpUxPMW",
  "key22": "4oifn7JuKgYB8KmQvx1xCHA2iTh7fQAMU65mWTQThRJMznDbkmW8WtrpYzJAgHCN1Hm9iqDTDHe4korgs4VSLALW",
  "key23": "5LV9RHKYhBiNdxXoeysZRWiLTyfm77q1D99qgNgujDWbA3uve4XX9yF4KrdTjnkNbqQ2PNejgWhdDEC6MyZmVgru",
  "key24": "5QeXXKJ7VVLB8k1bdC8YRMYqKK8BxMUXtCXMK9sT35uT4ez9Wf3nyApi1vmoU3dUdBK7sCZ1YFFcko6b2rpMN7gU",
  "key25": "2v6T3HggTjEFaKzdGRHgcBt39D6cMowsig7fn6UrgbN2oZxtkoycbSLWKetPkmYnZdrwoRDHAcB3K9TQu4xp8qAd",
  "key26": "389AG6AzzPwrMNZsZGxWEbjNSTtRyHuehBy3uVfmm5c9ArWznVQbMUTqkjQhXxdBhRS4cx7hKdZZUpvu7kkcq6Vq",
  "key27": "5fDPJXFvuxMuyp6r6Eq3zpLgLqUx7dgZFc9HZTGLKGEWm6exAEb15HjbfUc8u3zQXJfFJd9ZHuiumA8pevpNbGn9",
  "key28": "5TE7SM5syYWDXw8cGqg2pxXteqbyMkWf8G8Ws6ThDgamXPCZBHBmbpSAmp31Z9eT6otqcER7eLJEWek68DEPQSRc",
  "key29": "5JzSvwnMAyqrxzAeRJjnssQ2RTiGjxtfSf59GySNFVnYUmgTRNLUGTRxVR9NEPhE3oGeSmqkL5oGAVpVY8H254gE",
  "key30": "5qN2Ze6dqSJq3LnqboKJRbYavXwV8AJaEbxfWkwPyGZf34PSwcQt5uQy4x3dVF2JMiZa1J1MH7P9Am4omN5f2SgF",
  "key31": "5dsAnWkBopbcgWMAvqeD9rQf59YtAXz5p58DxiJ9oJHkJQPFJW8TThoFVER3wSADEk71fSYY6dN46jLT6w1nynt6",
  "key32": "57DcP8vjnKztrF4WPohnM4oQzFWEesBx8t3yZFuezJ123qFQTWNDmBDrJEDQk3LBG3eD1P67MiUx2XiQ3eEymRCy",
  "key33": "56do1GJD6YS3iXUpJqMQixQn6hV7gqFspxqFxuf3tuzYuB6bi5P4ez5sbfGpZHybpQM68S4hQYsEkvnFFqrS3Kbi",
  "key34": "2GxfQGTnVTEPGbDjJ2XrieCwfd2ho9KfbYEUvi1QVakAwihSrV94WF6vc1EmHBWySTN1mtvLqLuibRvXqmxTvPTk",
  "key35": "5v2U5HjN18e5JTRhBZUQD2gyU4XrMvmjYigot9sh4Q3gscct6N61qX8McQhjb5PcttF3zYrZvHETs2Nrb5cj2WAe",
  "key36": "4iPzYJ6MP2SBy2wFKPPSdMi3GebKLj3oGzZmAJTFnuWW3pqjHTGtHqkFatzqyM2mU5cEgzLUESnurVJAqyqkYToh",
  "key37": "23hrbKXgcboHiuADQvMrRGdUdHe6rKYLCsnwobXkcvumx5GZTmzY2fLg5cGS4oboyoTK834iN9sdZA8bwS7grcDh",
  "key38": "3bNNiussGkfc8eh65z2nouWwVLp3R8Z8X7PYXH58gjxS6rpTxcTToRcV22fMFgFTvpXCxX7vuAgXrXcL9meUw7GH",
  "key39": "5MnsbMd3m4jXpp9SmSxUfqQdopxuZVanmqp3VX57w9oAhebTF3Qscbj1ALFhkm8vAX7rThHNs2nVSX1mHzWCUe3Z",
  "key40": "yiE8Hv9w5b7237jNV4jmVDjNM7nuFoT4JvcEKexfG72iQg9AYHWJriNapdr9bBwyrvkWVCsCJmLr4KnkHNM496z",
  "key41": "4oy3ZL8dmFHmqdGL3axvp84NuykNGkKJLDsZQkQyzyQAa8NpjmfQkhiNWjMCznSyuYwXtAiApvKDG7BEvdwJU2RG",
  "key42": "3grrEMGaKrHSKaqe2iHvQ3HGPiGd5N6NHoLuuV4osFPJ6Lg51ar3ay5PkZz3mMY7TbfFL7bavPLNP9vgTGRP4kb",
  "key43": "5x3ZwBv1NfV5Cm1nYDRCW1MFAHhNTMjTUzijm2A5YxwsJ3Hgt4x3YLcbzNbsvXWtQRJ2Uy5UMp8xmBFe9Ykmdr6d",
  "key44": "5E6f97kRDvSryMN8Ko8apKkAr249m1C54femkMq7eu96UVNMQ55cZPPqJVdZ1wYxfVqc7DJ5hca8kKrnN6ADd7H7",
  "key45": "5odUemm6FFCRjyWspA1iPR3xtZ9j1JiMg7SYLdu8iesL5Ty8GYaWL3Hnq4FATyFSmEuSid2n9rKCBLoefC3grQ2g",
  "key46": "3H89iWKHofwpajGvBn1A9f15xgCiNcqT3ubGJ56ZZZ8m8VyTCwS7uy8e1qoYpgnYG5Lncw4weHYWuPAQKuSXNBvj",
  "key47": "44mYHBGYF64diaoxUtJvLeGJcquTnxHAAFqqnSXNwKywJwuwJRXfaWexhLj8iBWr7zdeQDKwPtA1wv7PoeMtu7LS",
  "key48": "2NTYPC4wTiFPKrKa855pMfwB2Y9MrDPnp2TBSDhnxYUu6Nwew5xXxHg4xkSssGPw8YkgYJgYB4D2WCvZ27ob7q95"
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
