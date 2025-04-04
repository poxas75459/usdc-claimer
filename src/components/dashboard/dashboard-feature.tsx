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
    "TpKQcSkXkABnCk8Ve4zvmMLdyzX5sC9Kf5gfTqxqmmeyg2XE21vHeYzLxaQVJdkXdgHheMEEduZDSgCMm23FZxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JBrDTefXEEMuu2XNUr4LQJs5JykHdVKnvcdSukp2wnWGE2k3KXgmyvmevgxRjNvmx3odAVzJSGKfXmaSRd3xQbt",
  "key1": "4ekRYZtUzQ1aKRHZ9bFo99ZBX2eYe7cBpEkzhHyoEvYSk5fhQoqcMftMxcisTNxGVsGnVN87arYgMvd8HiNMPq65",
  "key2": "WBYE2L1bpEfYxaSDrchZfRs7hq2gWD4Uv3Z6sYKLdEyCStBzuJyw23t7TJi1Jity7oQ1PxCTHDKXuqisizvb6nN",
  "key3": "2Zmm84vdNnYVfcgF1CSRMvUPBYUWoLYxwyAmSMs1vSCR1Uv5MeZuqshbJtu4A2hPJNXzEiG11VGngi5xu52QMZTr",
  "key4": "4HNFmj6xi3aFMF4chRo7ZGEJ79THV64PTxXLPiz31o9yGC69axLUyWJhY6scQ3574VPN9evvyDk6ipKjjrjC71Hh",
  "key5": "iQe5nRjPRdrVJFTsVbLoBC9UdJbWKE99LWZ3sLKoacZ3YQG4CbQTMfZAzmZ2sJFdQJFrhnHte8GvUDwki2Q6U3K",
  "key6": "4S9kRv6ABzejD7Jxc8agDKurZ99PzETC8uSnBNDn5YJfPXAZqjRNRMLJvRhzWRKeso796dXMeS39DQUPNv71HSet",
  "key7": "4LY5BdxbsNB6qEVN78drZzfK7vzayggqoeoccT83TeDSZm3vi5cpCzhCo9R7TFRpRAXRGgA5TGbubwLjf1oUHw16",
  "key8": "3cFAV6L9Lt2G2LXd7cBFfRRYT7LtTNL13YH4FiEBpV9q2GDVyi8iZJ8Qgr8j24vovFqsPJNqXLuoDY3qfhdpwhgZ",
  "key9": "2XZi4mtg6XV9WUz8A9VrFdsYF1KPbCbRKJD9cemqkGiu4EAHzFtujnVJUagadZpScV1JGhSYdcjNW8oRBQmSG58v",
  "key10": "31rMFS22JkjSD8DcNp6GGXbmrHGuh8RRQpuE21u6UQ1MY212kweBe4d3WjV7VwVVzTqYVD7SPeWr428Eiimy46Vi",
  "key11": "3roSyJLXxeK1B3DXD4P4a6gMKWzPcnchMEHLxJC3QQFtogsdWkksmY94P2ZK1Syx89rdWmvWQ1Qje79cFLa4r5N7",
  "key12": "7uhGZht1BDodSTNuGBLscQfsnuYsL21tZwNfwvRXMioJ4vN8SbbUKatUnEynzYDPeZdW3zZw7TY11a9oaQyM3KA",
  "key13": "4BvB3aKEmGgiYSv7bduVpedtQBmM5gLQKzhBEZW261fDmgxXpN1knaXZ93Pq1xsan1njwwp2KbZr4iBw6vLMBzuW",
  "key14": "61TFy1zdXkEZeJq2st6SVEKvEr6vKC614Bk1BmfyCujyoYqwZkbBJkeoNJRu1qQ7UJfgvLgkggxvBQzYZV7wb5NL",
  "key15": "5yKBqZY1DXxF5GrYYVWhKR8kaYBxN9U7NVRRs2xQhV5SMLh8aUkHiABLXSMMzuPA39LXAgSGz4FwmJJiXimHzkXe",
  "key16": "2XMTh2aTXbsYWsJnZQzrH1UPAtNvikgDYXwcHqgC2sWQ88xwahzqhcbXSvDnb5BgjT3BJxbkeEFgrdSGK5JiyPfi",
  "key17": "2xsvLw5a3rpQGSoQoc4uH36du4EybMBU4cbPed6XzLydojtv7dpRaMu3mNLftKiTYj4AEz4NREwYrjAhjuu6TLqb",
  "key18": "3BB4ZgryR9KFSfbWDrBsceR4UsPMg4GmpH7VFTsWSK1CvrbrureAy448iDczk1hZTNY9kNK9Ut8fS9Gi4iasTXam",
  "key19": "Mh11KD3KmiVQ8eCtnMPfZgfUrJ1PCeQBhYJoKPi7g6ZAT7zKSosSBxo45ZY2G2SSmfQ8X4i4GvgakytahsknnHP",
  "key20": "2xWe2bjeT3yVitMgeQq1n3oqKTkDj9tLBq9aW1iH8BC6wX5pKA4Lyvn9nYNZdqCen8pyuvWax5hak1GU6TsAszga",
  "key21": "FDCWhQWLxNT21gHTaV2rxJWrHRocN6tBRwsV11BoSehMq4f6BMxs3bVSPtW5TVRn2xwmGiYkEn36tnk7m8GzPZh",
  "key22": "2ZuLo151F4kpYopxpCZRYRp6jUZ35wd2ZCC7WsADhanRFxnPCgLeqCvBJXzfnKTmbQonUWPhiRyWKCqxVkf2zmiC",
  "key23": "5a27KgHcVZr8JbHYXbWE3BoL2eUCJ9V2ANFqK7JLtwwssYgqiqvWKg8Kozx9nfQx1VKkkETXKWqQqCTqMW7H3gU6",
  "key24": "42nXpMedrDUxAUt3wh3Mfnxe393sxUyYSfHy21qXj4CnuLQd4bWspr6CdFeAGTVeiPGv5PcesMZvtzzmzUPzDCAf",
  "key25": "5rsF32mv2NNEB2D54bzAFD8ZJrFVAFqAVRxPCAc8nmFNqL966eTzBSk3RJtKHv9aVh8FiyEWiQnedYrKhaCCV55w",
  "key26": "5mugXvr8LGRMR6EFNeakuoypRjNi4D8b6HbCRh9HwNg3qzPaD47cwXSpMggWNcTFULhy6SnZcsMqKLimKrdbHZu3",
  "key27": "5wa2WFTZzvpaNmFFdnpzkuVQBfUDEhPFzy9ekbG7uM3BLdUmVYyJyhnp4SosM8SVaLCVuW1FavoLGcsC87VgAAjB",
  "key28": "2LZeLdh7J2wyNpr2vfr9KQ2HJLHePA8aXCrevx7bUydxcVyyjNBMaRMZ8dr16PC3iyekWoQFwQ84765uyXTo8tPj",
  "key29": "4WJz5881qgNCit2MsAr7KRFK64SWxmFf6kGS2Ha8S2MSbzBb74ZZAihqsJ313Bju2MBBpd8uQWU7U3c9ARS54roy",
  "key30": "5Dbeb1PmjtYZAYbCovbJkRij4cERcpP9sUFnYvFnfCvyZ3wngEXXSBzEqRYzdV1BZavosQpP2YZGe1RYLiRQ9JBs",
  "key31": "3mfRSr22gw5DvgWkZ7kVeBLDuA2DtAPELZcxzcQWr6rUzond9AuTikc2y5j4zcv99E8SY4yD8hKfitsrfEHAbgWJ",
  "key32": "2eBmVy4ZpX8ekL59QqR9RqdbUkdkrw4ptQ7ynVY6jbCkZCxwAZRiAYXCoWTqL7747jVQWH28UJtrRmszV38gAyRB"
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
