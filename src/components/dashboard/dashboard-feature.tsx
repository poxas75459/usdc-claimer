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
    "2g9XC5LgBm7vhuhm6QiTg3g4VKY6tSDf83kxotvHqjG1wh3RmZWAiPMGFEn7Ar4AjYemnpo7VcU9WMGiz5PeEJZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHkxyDyR8NohtR8eP4YkCvUxQHL6wJSZBo8BeyjW8Bs1Cwgia5favosjMGWFi3Q3UJUhcWhHRmPpJyzqAoc6QjR",
  "key1": "5s8Bvii35t6XwcCL7Dfae2jbUbETqt2suJ7jneUohRqAhQ5YcZ981PZmfti2Vnx6MZEme3yNmRzgZF21Rh9hbCLL",
  "key2": "56kdH6sreT59LaP1i9vBzFvkwUUAaeFHMkL6RpRKCbQRAARUehWrwKzq7VDYHUNatSjt1gvW67BoRQ8gvJomP4LQ",
  "key3": "8HK9V6VqU2xAwcgLH8dCxRBDLQ1W3jbBJsWn3ssVN9DMCFENWPRmYYQrSRLLpyU4H5cLshQVb9GzxxhF6jU4W12",
  "key4": "5p8QVC4diLKwAw2eGFrr34uQNC2VEjAUNWkQBFYDbbsgjp4nyj5JMS1h1UNrqZy22AEPi12Zbuz21sVgYCZxa8EV",
  "key5": "5nvXAT24HkUbxWw728KMcYPmVYoZH4i2LKAxTuZNwgbfgw4utQEebiCURNkuYT3dCGrhYjBcZ2Ca1NwrjXajCugb",
  "key6": "5TpBThyTbRok1MQRCgNVXRC2JXMzXQ86KPzuDaTiciMPRehL3wjX4GSLL5nABuZdZKjQ8ksefqvPAkjnWSKABwFf",
  "key7": "JAsABF9xZEWrFXPjXPZNKmEErrwqwkUhxNhJ4BRXbcNHZ6d7nDe1Bjtu613p6EXjRs1zWf5EyYhaPx8U4jWYXnM",
  "key8": "8iQoggihonwb2BVmByPqpzHkwLBwXefuDK6uCG5Nv7r1wdG1HFcQBk3wJjdGqnFjy7GQDkWiJMgCHgA2zmr7LD9",
  "key9": "2gjTTWLyozCEJPNr9viHcVA8RQBCBD4a3E6jf5FNE397H5UVQdnLv7pZ2MHbhuNDkSi6cwYy5VHWfAWjxjjFS28M",
  "key10": "5ETVQLs3WU7VbsFfB1fHYdtHW9AM8T82puUKxede6Kd4L9W8m1vPJ5iPUYysbKW1RrWV8eDzGC7W5TczkA7yEjyX",
  "key11": "3AZEvdnHg4LQHhGUeyXejoBBHtwY4EwN4JXQ4jpZmd1mDwmNe7X8BKaZ3S1Vxwrvma9pWsrQy2K6phY6CS8UxKbe",
  "key12": "2ebBsLzPqS3WHcY9s8R8CPgnN7mzcpitKYxmcmXs1rhhMhHjS4qLnyRffjRriEoAEEwHHjokJnEg8jzy8ZMd65eL",
  "key13": "Ap7m2UBMFGqQPkJLCuW9rDTTD3gKcUKg3DAckcLghrGBijbDDUJUF3CQ5GSN7cepSWkNyB67fY6dN63nQeiGGgX",
  "key14": "j6ZtADi25Ahye2DGKBcdXucGdeeUtqj196dJ8uSnpGJVCXYUBfE1CbsSrUFAz7bDUT93ff65ecSJGP6KCFkDn3F",
  "key15": "54U7WpXdQGWXLdmVT1yWHyc43Dq2MSTJvirjURP5qxTNUkZuZmgE9V2oYbPqfg6XxsHupGJjvsSNRR9b99CVnYGy",
  "key16": "2Czc577HkyKMxGDD51QpLcWZQ8443YeNPshGuKbcek1LqTiTgWuaM49VesLRHKZ8qkpiUeLqPiUvMvzhYBdzdaRo",
  "key17": "3EcBFKhaZmSyXarijuhdi6JqG24d9Scmp6k32E3TZUdy3YEocVHHnv1Zn9Vs6zEMpw1vJXnzf721mWPNVUmyovEE",
  "key18": "42X4sJGTS3uFoQvqKs5ukJtwvGJQQiaAYF2tT6hhmGs9Lxq836UyEf6Q5Q6nUEcF14goEixi32Ds9x6TSzswHjzY",
  "key19": "5YGTBvJ1TD6cXv3iYYw8zYA3kfCcC3zDZGHGj8bvwNJoNeNZbBDm9RRHSz1YWc4mdSC5EcNm5iPRoXNZ2LUwFJ1Y",
  "key20": "5wMhdBX8SASkTHWmLE3YAVTwsYLx6Sh67mc3oFQiw4JpNSJriHzmvpLZnVdoMUaksNp6wCTjNm8mgQraMhhG7FFJ",
  "key21": "4jPJo5VnesFEzh85r331pkkj1DA9VVSFmKeqjCreN1PdCqZh9Uy7dALkTY15mMX8SCwNcUczRtcSF9EYFsZkgDS4",
  "key22": "3KrP56rzB48fDj71T6GatJyV8dd2JwGoY2APbkNTN5mU8MRpHMW4as2HYbQKnALiDRZNEqbDh3N7AkDHUXCZDPJE",
  "key23": "5Wgkhra78P8YbhkdjADRJhMguZHv8nzSarLe2ANvdERvPBaYF3r9uaDav7y6tn6w7ytSyVPPhLQhb7zSRQmqt1ho",
  "key24": "4SjhCeM3wLHmqyH8dvxgWDGm9eg247jQoHfQC3nZ36s1c1uPiJVCnYYM2KwNtUSiY4o2grCy6CyK6QuYkCFafsfK",
  "key25": "34jDRVD4oCywfK8cgXjq9WeMqThSHeyQGCYzpwpNW9rd6Z4d2jQCruAHHr4Tkn5fiEVWRndfv4YuuYV7Jvey2Jeo",
  "key26": "2h1NGtenWcpHVRqqzWDFhL8Unq8CVH5p2JJtsVYpaSYaGitMY8bNEy68SJKxyLfwyuGrzFAZGcPmWw3ypq67ZyTs",
  "key27": "4sHG2ZjVM1WLqUgKWnJGte6ok9ncDzjwWmfjXs95vSLvy3RzM2Xy99nP97o51KNfSnSKGVwni5G4RvNQomcrSvn5",
  "key28": "3aY6GXC4L3tmibj59GZzg7RaLrPqGhALvp5j7mRKYT2DztzokZaWSQDVkDKwq8Va6tsmXoBdp3KfYGF3t2U2897",
  "key29": "2YME8TyPETRU6KQhsi8wN1RAx6AUMkuF3SDgTgGSsNc26mhmEWrrXv4XY5v7L7BKnhchwoFyAk5U7HnUW2RyZpXp",
  "key30": "5cxnGp68mXn8GSbusAeQk9cgEWTfgMpyHjFVqF5CLyTGCmAx9jcCtfi4FPoQf7vqQrYcSw7zY4KbvuzDnagXJWok",
  "key31": "3qGgTdbwvPUBzjWUYpc7VeskWGQdxkuThUpDutSB6gyewFweQBpDuW8WvEhSGsnE5TuHeKcygkQEWbdKShfYJJEV",
  "key32": "2E3fq3SyJ2nW4ycuTMuajetox5GCRzRee2C8X1JjeVWYCe6LGXZnGtf2zYMoXKX7YNKsaDBJTEnEkQetYNH5DGL5",
  "key33": "4KCW3K32HCa3eerp5p3Pw1939GMyPy2ZYeVcUmWt9yMDq6FXHA7rKNQp45itMNJrgMwsBoMvnFauqC2KVNcm8xbP",
  "key34": "3NhRBFm2R3pjAtLDojhLaAS4KgWwnBo7Z66oJPEu2MYQSW6eA7fUSgQDZ1kGJTfFpEzQQfKB535JrR5UM7WgqTQw",
  "key35": "4YtN4AThvG9iJbXua8k6N8g4krVQcNacpgwCf4Lh4Avbz2td92UdXcyG2umiDGtV63obeGczYn1iQDpGH4CteRjv",
  "key36": "3YXf68A3WNrEaqEQ47cRnra8piZQJBvM26xv4FGxyYze3xsGmRjuDHmFNfMgMH3xRwECJ78ok5927bWyeYtdVLGM",
  "key37": "3LirgTjYWewYzoPHgrtpLNZXaudzH4qYp5QZxKCHT76iMvFJLgfsfPcTDbdEp68akEzRzJ3AbPBtVd37u4Xt7jeX",
  "key38": "3Hzjii5kuC36XA6cmGWMWj7djivfUtgLbzG4QN1xak4Q1eTp3CoGpdhPuYj2fc67StFwHpoZtfTFSwcrsRdVUHYx",
  "key39": "3rSLzfRYPxSuUXUhLt1F8r4pQaXfs9rXe8yH4hQqnARPqyVewhoNJfjbJBVjR16ZnsDRmK1cpzah8pyddTRbmTuZ",
  "key40": "3uTcwDGHuRMx89BiuhSkw1u9EMRrZ77PnkdgNhx3mp2KGEHx19ThGJk1EAXiLKiqUZR61UFD5k4Tf6mMAMmA6uch",
  "key41": "3YnGXiZXfeFAezKVXRZJkcVn4HiRMieEeD7LGk9ZCmzNTFW1tkDy9kAMZS7ZKLFoHxqX3D27DknHPHNcJ9w3hA6S"
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
