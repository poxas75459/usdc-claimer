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
    "3FoDjCH6B57BdgzxBEGLP1KFUaLS3uVs7rfheaWBaeGNeuBaoGkJPydX6oruL4cR7UTMvTr331cvXvMKtif6KviL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Ws2JBZ3GSKiv6DYuRmGNEzc3LPwtZQ2vYjXuhVwz3sNR8s3THzRfzFwqD7ZwXvGE81CwJLiPg6RTsKwCG6nu4w",
  "key1": "3YgrgD7TqWah3AjKDcjRHVg4Wr2ZXZquRE97mPdULJAqTY7BUy7dX2mdnCEdPD6R3T2tx2tzzGtuQYvjc962SVco",
  "key2": "5huMPXCazjnsS7R8XnwMYf5xHQR2GpkgQMQ3LBW99spf71xBoCYLc3WWbmEtRKGqQjKQvyKZtw75yTEkzJn6iRzG",
  "key3": "sNdiKEjrPzawHaFHTqTeva3SMadub8JstFYG1e37ajH6nPt6BgsEqZ2iZPT2EDLWSU8KzzQefZd9dGWjjEn4fPu",
  "key4": "3fhfh75XYy5FnZ2X6CgxSkoUJrLmi5778nUS1jacB1BsxPj53FrgmfZwrZQB3BEKJBsyuJSsKYDmNCbdd9drhaYz",
  "key5": "fDQsNg2z92oDPZ6gSSTUqedoXNriTk3kH4QQCKwZHRmDyKsUe8f39G6drKshodLhiEzH1LgzWU1y7ZXTYcYbF5k",
  "key6": "YXSon59TD9yTXivvDfkbr4KdKvtcdKEeFYtk66vADMzz9LdrpG9isgVAXB5mu7oLeLTA4QMAyAtjnYbejKoyfDR",
  "key7": "2RRag5wJheycznCA4rxk9PC9mFFxEedUvwdoGJ65SK8yiTn3ZpVUmKn1SHQ4DPvKDf4bthZwueJDRTh8NUCTRsEX",
  "key8": "2tAKYEiRpcXpfYXgVP5KFqcqqU1fGuBfqfwayoDGE3ayjdu5QFuiHpC8ApbfxfnuCSZiPnjV9nYDGkk3PzTrDP5L",
  "key9": "bNRSHNGB6kMqCRkEVwShG2FaKqwe9M141nrjVUpUshMQYzCczaX3iuaayCzpJU12XrSP4ubNSFyouwfciJBiTQ9",
  "key10": "UXHtnVBsgphN58vf7gxbQWSKbmRrKMd3bA1e2gQEqGqcLeC3RHeKjcxCQPVpvNfNbUiuwsJq8McajMqdGbLNDwU",
  "key11": "2ge3dL5dYFptkPMGS6mreg1bGMm5Q8yZyhDNSkskwmxpRg3vnFXsfbrFSYvNwdvYn1zkkfvQwPYqxdJsv7TrDQFq",
  "key12": "4w2Pe2zyHZqZYJMpKrdpHjeRapxnv35z2JwaPKZgSLbM3msUmh3YZqdNqJPnSvmCA4W8U4uTYGSjNDD26bnGNvQo",
  "key13": "5tj9pAT5NYdKne8ah7LXRob7auK89UTNEmWnfqJXvjdBfpu3U8QpoNGpF6U5JhosZrnFnz94QjGzp4kZdzXV1r1K",
  "key14": "55R4TpKj223nGt5G4reeoTAbHikHBhurT38iLZu5kEt2NTBFVZwEWgS18vCaTfrdzFxYgAcEfAskbDSM32tkkXJL",
  "key15": "5XH3vNKE9Y4yircayJ28ifGUFAeSaKTsQbchJ86gxnYHToGetpjnoJyR9fAYKEi8wGVXJc8QS1W9N1dyh5sMjtQy",
  "key16": "BEzn3usaoEC9dyCMb1UTykBFqj53dMJ1eVx2pydTeNh3VByS9yL4QVirFD5KRs6EJgDebcGb1DCmGBgF9aMzZ2u",
  "key17": "2AodByeCz5wH1bVKdBqt8HgdUbfYzhKMM3iooord2PJzWF1DMFcyZRFQ79kTdYsGuNyFhzWyx1PFRdC3VawESUdX",
  "key18": "29UsWFKvsVmLXkFqYAg1ucZrBBGwF3oMWu4rhMTbVXnnvMdSDupCJHVxNhzzgteVeaLK3eeG81Jg4xSwrd91dmUz",
  "key19": "3UMW9N9tem4SRmGYw5jgJhRvR5pNYHTP5gCgVkRNUe9LzvDXGbHABh6vukca9tegqgLy5SGeackXDv3bdwAyDqfp",
  "key20": "33zrVW6xraTJ6icyGMwT1JnXamjFs1hkaCMZLXe5HV1v95YqnbutKSadegXqaa8Eb5ZEDGPfGhRvm2LkhJaYTjC8",
  "key21": "3FkwPRTEXN5vGX7caVCYkQ5mEWj9Wsg2W7CLtbDad5MHb6rNZstaEACAFsnEqkWUEisHJTexAah47yBVqpyGsSqx",
  "key22": "5U8JW2x22jGZ2wS4kQkAmVHLB18QQitLdyaaFiTZToEGtFKjwAaVyuD2bu95LPgzJT15JfoTbzXowRyAGor6szCQ",
  "key23": "2Tgys3Mb2hN7ogc8T2BgaKPXWQjmquR6vgtnadQZ44P2qL1aW1wEW685mPbzYnY2oFRU9GcjhQ52F3b5SUnjUmVm",
  "key24": "4jDLGZiMyGKoHifToHPmpXagjhLXGt7KzJNVVLq4VARXeE9uquAUL7U5WNVFj5XFxRHVSzzvHeRcmNGwsfRfLvW3",
  "key25": "5KRm5Q4gm2vhfVe2gVxahaYth6iZEf3m7wguH74ySyFdicS7MdJyKoQEwP4Uz7tU8XJ1ud6unNiXQfFUBUcyLfca",
  "key26": "5DEdb5zbWu3FtR8PqeHZgRWQeg9N3XrmREnKwwSVurhLvFUrZ94AbrbiMRXzCmnWnr2W4XFBxCPEvPQujrAbsz9E",
  "key27": "3GQk72G86qevBUsUY1bKxXzEBNbkozWZJ9AL5PQsMRxnoobzd3nrzXVTfKCc7HeiuhdnnWYUx2XBQmaMy6bpmdng",
  "key28": "3hxANQYBBfY7NWj8BLs47bd87gJ2cyf3GciG7uMk4qAiAUgt3KjFKL4pzvmTDtCD5d5HugXANMuNFkq379d81Rx1",
  "key29": "4aSKKbF8fH3v3MyHLhCrEpSys7hXeGij2j4C6LDcr3YdEGsBotFq8eCg5MtUp37Bx2wfVrAFoE6yy5eoPPywWSi2"
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
