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
    "5QcjErKcBtQytjRWsGfYbpXZtnLzFRjfNYRD9fRyJteiwfdmHwBf1ppa2tkUHmBvSSpnGx1WRvJTFtXmYdsv9Sro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DUpn8BPAih89v9SEtah2FNSLxcM1bwXmqv2ZBodGEtF7NnQ5HjuVFdVV6ewybawJUJKvnhXTYAXcDwGgnnEu36X",
  "key1": "5eDGez4NFRXmi91uTKwC6FK8kwdZKcUYAcdspLgfYizNL11iTNsx3zncD85JeEd8RBdd4yVmr9dxmhH3geLPZL1Y",
  "key2": "2kxZHKzXFzZVz6sfmCbvnm9dAfCMHvoZL9afGkezanzE3x46nNE4cbtEbveB579MXEvvoiDPCuYNdGz6TTzAg8y4",
  "key3": "44n28nvcDBnDMmZjCEmMqPGZiWpMEPSEici6mgRpp4t7wkErprzf5bUZxueuw34ZjvuQQPhHohNYKFYMTjzPGYTG",
  "key4": "2WBJC5euhXDH7LMgxdAks8EpwouzXsNP2X7iYNdA8pJLZyifhQu1mjLbQFtYZr88i16DWBRUujXUNju7pQSfGoLL",
  "key5": "5fSLA9RZSdfC8JDqhPxvfnLSxMhgTpMgcTYXjYs6JvCug5EgR74EjP9V2ugXvAeWF8n33SmRCsWafRwWPX7crdGm",
  "key6": "3nkQjmfFvgqdahA17gR2g9SpAfa7rC49opLanh6vGxHe1whShjgRmjMTwDfUjs1LMXUsDdQjjNWPQvG5EhhrGzGo",
  "key7": "2GN3xsnfu3Zkbr95NrwHD4446oaAW7wrmZWrWsSKTmReEwNrQjrDKmi8hrREyvRAjKHqdEEeB3WWA1dieXdEyfL9",
  "key8": "oryAnK2Q4V8mRGMRTjRyow6SSrBAfSGR6KYmYt9vBCTG5YzjFpPU12qsv2mvQSoHVNsHPuX4G7bdJsb9oFcxsUx",
  "key9": "G6TQnXgGcLnAGJtqJo5Qc672GVAsfdeEnGhDyujrjaUYt4DiTvFvoYVdpwTbq6f61y7SEnC5Nyg8Cw82cmSmeaS",
  "key10": "4BFwrz8WixXmykzY8oQUm97q8CeJZhtrXFzojgP2CpTTxMTwLti4AdBZzfwJxRmxvs1fHm9qYcuQAcZJB1mmnsad",
  "key11": "3vbVa4smDhYavJs6z7JRQmo8x6LZwMbKQq8DFTxHQffz4xrrUuqSxERfmKnahRfUs5uKRawUoa7okrPG5B7FidQY",
  "key12": "4hX66wMLTHtJJxT1epf5gpbZ49WVmNsCchUxBvaZ37QETSUk9dL2LWS9qRXL99AKcz3XppGwXqm6FUBx1TjrBd8D",
  "key13": "4JxoNVmGAXEbdSeJLrsC7qgULZy4NQkqYA9vUSnqZNQ6CeBMsJJPz9TGqvY532KhmpV799Ty2jSwoes9g8ZjnoPE",
  "key14": "4qGLZf1wj8C4ajyQfnFqsrvewEu98Jufxx7YqPMaKYYa9kzYtWv4uhUKS2WgNmvKkHnaUVsnjM8ExwQLoN4TRdnf",
  "key15": "8Zd1GJGjZEVyDC94FhT9nLam1t7CH6zTg6HbZFii5WvCgEgRfg2unGEm2g62yrb37XZP7RoeXTEPfXpPMQqKgpw",
  "key16": "2JLvS5Lf1q2wqjWHft6emVYctJzv4NkDWfED9q6Qc7joHC6bEw8JzmyHzHFnrZR6os12TDBcmaYd9nVPkhBZ9Aja",
  "key17": "5d5W3d4fXNYizLnGdNraKNW6gS4UPFGaDVZbE3WQQTstPR7NqFMoV89UdL8kPJiB58DYAPNp193yVM9TPQXbrv1T",
  "key18": "4tyt52ESepaJVVvDfyhgSSy3bQ96X5dCY7AaMveiRdFztjvwHRmBuXaMPMSrPZ72sU7d6sQrQyJczxcRYdFXKJM2",
  "key19": "5F6gVM1S56kSS4YWH1BrVnzTCzpCxp5S1oUMf6fLKu1G19S8JxP3ztcw8D3FDTdo4CgV2qW8WMAFxnxeRi5Ug6hM",
  "key20": "5CLHaLvGDTwdJfo27npxATwtw1z2pCKCh7Ye3WyLTw7Li5mtszCDtsJzDgWRNGyJFrUGiBhdNhcQx6Stw2ifG32N",
  "key21": "5ixaSnTsoXvkqCba5v6AxBNk93kYXzYa2cp4SHc8XPhYqY9q1dzXMgiAfBHNDFkWBeXN98vZ3uReVVD2stvUZe3L",
  "key22": "5S6im6zUAy9HKjvwX97Aj5Wv7Tpia8DLifJWyDKtp6zSXULWGLBbKjnCYXQeNFHjC5RRjN91cAh8UBtyeDKGiCsp",
  "key23": "3qed5WZcDrZWdSupadySBktmBR9KQBbR3164rFx1LJTq8GwTBwQtrJBsiyU9myhCsHofMjkbAw2uZYBCGWYaqB6U",
  "key24": "Tmgyib5qTjNQzMBqq5vaNLaEyBFcNTkQdosen4uJfUUpEHksYPkV9mKX2swpSr7WT3HMWYa7vgizP8saeSHHMfa",
  "key25": "K68KkXEiMrCPRVRQgbS5w41VG3XspvEMpyy2huv1bWqfzL5wY9TsgwMiBTNArLjdXqTZ8HKnqJDs9TtLk65GGb4",
  "key26": "tLWThYJYa9xHmkR9Lrw9h97tAJ8qXuzCqiMFJkGeVSmATzYr9uWxjDxFZ5sK4EaYGh7V7jr8PXcG1uYBKx4kgNC",
  "key27": "2SFJuRfoetu4ujYQe5RxHa5eR9jEKhcwzBQjTCun6hH1a3jQ2wh7vyym8aoH6NqNDppqaYG9qVF2diG6oQJhVsPK",
  "key28": "5a65XxDcKEtALEj9iguxRshXPSey79KwARPM1MiAhpDXFVt8wSaBs8u5S9oyEckHyAB3ouBy9UsgEoqhcLUKroB7",
  "key29": "4UWs8yYEgcZ7K53ek2VG37W7urksYjG2gKxbY1ZorPDqrkEt1CxGpPn1DNC7usyY1nT1xbW4rC6pqDtyGaXZ44HB",
  "key30": "4fqDkxE5TNPonHxti4eydf2EnKToi7Y6z3KdLMNnVeNwgE9k8aYLCA4forpTTK6iBfPPjG6rZex8RWX61E7Q9MSL",
  "key31": "21UzXKYDkj27qGZv4vPxwQbuWGcc7QN8tMCFnaMhqEmHdACoGvsVpihiDRDXUNsfYDvbvYP1z3YjQtxeciW3khfs",
  "key32": "WQYCRVJ1S2QD9UUBTzpRoso2uDNXYtzhwNm94DWy1DjBK8XDAkPEZq9XkRbmFcGR6iJtzGvjQ3Nsz1svYunzcFe",
  "key33": "5uxn3LwJwjeN3mAykPjtPo1wf3TKYEvvhhc7VgGJwy65zSWV5si6aq1aRKjBvAAi2D3m1oR7BeQvDtuc5YPNf4UW",
  "key34": "4BgCLAeP5jQz9NrtzyyMMAbpsmaXQ6vVmEMANqTMXGkVU9zrUP1q5UvvpTLQnN2Y3qD7H6aeHBfS6ntyKL1t2fD3",
  "key35": "2ETfGrUDqmaLdhtRGgAqnuZuk2Cpb2KB5dRwKQKpXeT4Mh715YTcFJWEXc6GRSwuNtCZSFuwtx835ab8WSynq7Gr",
  "key36": "5GBntoBfkzi9vSA9Vc8k6xS4KdFq6a3NhmSSqwTxxkA3CCJwS5BuaSE64WtZorC6nNsNiiDHoWH2LmnJsVtpaX1q",
  "key37": "2JbbqieUUJ4uP8VPUMGMtjnMSnnn4HvWRN7XRDBe1MFa1vKvq5TAEqfbyym2WgJ1KhRaPPZSKeHudSDLsyWivdEk",
  "key38": "4kNL9dqsZVAf4WAWSLxoCTk7PF69EPWqS2gDvUND6A7fFH9YMgCNi7CPJj4hUzkgTmQeL8zoSDJCXWixtEcNao4o",
  "key39": "5UfJGQBMW4t5vJ6XupbGr2bZ1maCTQDmT2yGiq2nm4ZsAHbMzEfYSNX5fBS8f2Pkz7QZwYqgfoFAQTMSYbgiyVxX",
  "key40": "58axDmXert6BxXiKvavsoTk2qaueENc3QXZd7YNpUF15nCYuPM758ApJF3zdPyKGGQZiKbA1sXaDLooWzyxhBmGf",
  "key41": "2ykv7sxZGzmogxHnRqCtnCWnWkP5GYfumc8Enk8XHn83KZFZd5wtWqnF7Jo2ZFc2SMetE3HRyCWwqhjBLccGGewi"
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
