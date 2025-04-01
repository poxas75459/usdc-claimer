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
    "654wJiZusNRow1gty9HzaDrHtZ39rojBHU4rAc5hkEU3ZuQaoN1uPPHNo21gHQjWRFQjAvmcVDZndgxJbgKa2wuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8ptp5LQDSLAX76wfhS8dxnpn6RFwnrJuqjTh94LbzkfJm2kNv1L6iGC85yYTTAwDC8scgGfrFLarKQqfBpQtuE",
  "key1": "2a2zE4YVC1VuQSPeDwmP6fZR7geRaPGH6KwPoA6WcXzSBhiexHZbQL5P94D8BfizfzYLTm2kZMRnDcyApXsKiWgb",
  "key2": "4jhkD2HjRUNJ35FoykWZ6oQix2fSFUgg5FQK2c9BZDTGBk5vtfQokpeUD76XzftJCbkFBdmZpJCiqcjbk14hmrz2",
  "key3": "3TnutuoQNm38afoFBbAUMFRJ9g9eoi9pEBeqPJwR6Vq4xdZbsNYp9NXSpgVoN92N5BDrrVpRvFSq28gwKnsvk9ro",
  "key4": "3C3fJDwMMdPiboa9aUXvUyqMsCAcWprQqmVi1TDgg2QGLtgKCkj3gVg7cGVAUGbzSJ2Dbo4ucujmcz61h6SYVb5x",
  "key5": "3ivK5GhffGxF4jdngqBnF6jQwUGcAxgVgyvGutsdYPwZ4xZhEeDk7jXsDaGhgE2aGk97iLUQjAha5paqrv1AqDCL",
  "key6": "4AbnePa3UmB9ESf3fdGyAtszejMhNc7AfGTUZooJmpr6PnSDBd97TBaWof8Fa4LAGuMNDCXtTWmkHrVREoqajP57",
  "key7": "J55i4fL3scTJgKopT2X69eCQYuQA2WbvCiT2QcUm2sv64ZqGQ5nieNqUoTasHykRVYw5E3SzKf3TUtfgJj25zBj",
  "key8": "3vJbTsdkycLi4dRqb1n9CAL7hwszYShaBSYZv5SxhQy5WzHojiugu2Go9MZorguNZuP8DdFLaXZnSnVhsSYQp7wM",
  "key9": "5G6c28etpWzXcZvGyQKYKs2v1CwK6rqqNFgoM8jkCxJZWhdZJsSzq7TCkjGFkkrd2uD1uDbpH5xxPHNv7wgp4X93",
  "key10": "3RkinEmdvJay3oVYSE1LvSUADexxPqP77C3LvjvZtQnsggfywsBgz7phxG3Dj2TUA6ma3TRriMRPgCzpSXXhRvsz",
  "key11": "4dabvatcSrQVtSG1QmvcQ6dHH3s7CD63sM4uMfFHqvCT6Wfgt48oHPnvtmcvq8gRx8eEB3m8dd5WmiAqwjP4UFnd",
  "key12": "3TsjuQZn9gS6XynR2C6inBivtiNhhzHw3J3E7HuvYeGAByUEFJV77kcrT2XGviG1MaQU6ksT6vRqgyfKVFhQew5w",
  "key13": "4Ht3aCyV7StDE5k3Gef17xywWF5DcnfLwqEeELFbHxGUiMBrfYUYC69bEp4Vpg8zmYV7gV3U8hXYC6XxmcueVJMK",
  "key14": "49QVrFnf2UzyoffL84874DB7rLJ2FQyDw78JPpUFbYT3NtauyQGG258hhkTkR7KDagFrSC7q7YXRAezaXZnPMM6L",
  "key15": "594vtGqieEsjaJfKfr7eYWXq3xmforXQF8361h9sEgGyWiWvWrTk7sdYjMPjfJYTDTKFQFwW6XQDt64XxDuUS5px",
  "key16": "oUG2VdDV5KsyqhmbLDL1LFcWVM9iwTTbhDeKa3JxB5AbmfJXKiawUNhfeH18Q7zRA2J9Yty8hnq8ikNnRJjw7a5",
  "key17": "47ik1MJw568sZLeuffQtQKoCazrK2NrTfvsbLaqMv9Mc1vzU4Q5yLTfh7VkeinEUuDYXiaQY8A8Ack2ai3kBTGjh",
  "key18": "2zHcdQY8vhPyi31CXSoFmYXqMtFKEEEk8Ca9s7U9bcEHvffX4JxrVrYVmePApWEcREKSLeXkCfqEHdVtU74Qmo1r",
  "key19": "jUfaN5y9uwxj6aYBRa8eBNQAdrfB7fUTTqxYwQpXFEL1ehqN4FJ5Ccpacc8MKhAvsfFmQgugNFEEhqjKKujtJNL",
  "key20": "4e8o2dr3yocTLkHrtrtyUh1dQRHjBv7LRDukwrbVcNQPn9HLZsCZvjkUCRLfatkiGZyLmt4mdfzUXPqhtvLMwaZS",
  "key21": "4KdGBi1H72wi73HNbwnJGvJNFRKSbKBUcaL9Mh3NUZpooH6yJhE7Y5xbqU5cSGWSFninm6saQeF8EiERjzY4BF99",
  "key22": "rrGZZotA5TFguBzNn8Q71PPWsafs67fZx68iat8oe6eEi1AmNhuQqx1Bab14DAG4gXbnhRmPTdLr52ZbP8sYPWR",
  "key23": "4LxZowajJAfJ5AfytXo4W19BJxmdeSBTTPXdxXPzmod49PmhusEZ2TV32qwK9vYt2tsFiERjnn3wg3QffWkqzHjp",
  "key24": "tkHXDg7UpsQpENpRc5UTe1aPeZMzTaQv7mRvArtRHxhJYoJMEVq7by6Kk7x2JxXMuK7UAKoHaJV4fZEcd9mTADv",
  "key25": "28gatnWW2bFXfgCRjMXmWHEWA3BDuYteb83tPwwH8ZiuSrpbs9dwwHNzUTCYXsdFTM6JYqtjqLyBLkCeken9T147",
  "key26": "65xRLcoS5QiCD324EnQPgjVFxfdS74M4B6d3WN3XJLtdUA3KSA7Zr1e2jYQMa8pWyEww5x495Tcia7PSr4MNq34Y",
  "key27": "4zZevTfVzcGdWG4usLHibULUh7kc4xeMTonpJ23bH15DuZrgtgTY2pXRXvM5PNhpqrpa9faBoLtse7nbibzngWti",
  "key28": "kvHAmZn1gjBvJU8zufSES6eDEXs73gS15qy4bwKQQTLdjWNo5eYFiaQcFhea3JdpamTq7vCxAXYVcnorLpK53Gu",
  "key29": "2oU446ZvUJZp831KRgHqFnFTvFSMdhTraj9xGxtEAzqqNwDH2H6tLvJrWFNa5it7ebRjMNVtnHSJ1q7X1Nj8RniR",
  "key30": "3qvYspnDhnwQhpp3kyD7kqNJwzahraZVmxGpNQR7ygztszXYkMeDDfTJU4wZh4UC1YmcfzttSD8WaCR13d64THh2",
  "key31": "39sWs6yynU9SF7tbWaCtqr5ePstzxa6Cznbv5bnL9n69nYhZ2d7Zd5bWX26wgW8Du3BSZYnKB8eGrcn2GnFaXp1d",
  "key32": "AneTYnnv61ApVb3fs8sCpq9swqNUCpzD5GujUnkoZeyRVCFBtP8QpU6ZfuAvC5RMkXPVdfLJrg9YTsEuZpg7VZf",
  "key33": "tUHfDs4NDAjQDPvXoTg2zeA7eAz31t4HQhJrWRPvJ1CqMnDGJtFqGiWLbtSJkhzafkeem3D4pihHRweVj8F9hYc",
  "key34": "4VNEu5suuCotFWyZwEi7N5Lo2g4ebCXnFDxZGzeXV66Qifaitv5uG9AWNKLfEsKFAjECEeDRHQJGx6QycRZCjRNK",
  "key35": "LXn216Fosif5CvwKUgi7JcoMq5ibZRgZttghSwBRxfZetmc88Mmog7rKV85jWoXW6ZbqNjCxxTVtep1zEZ1n2ki",
  "key36": "55WdzX2twocPUPrbT5Gb5JetM51oSqFQZzczA9SKzdmdMKvLnhSopChhT7E3N4MSyERE7iZMKe7vMumYk8igBtbh",
  "key37": "2UxzGoLfHwKLvt7RH1HvEUXFkvaZitpY1mSnivUHLtMMQKG8XJ9ki3q4THv1Y5uHo666yK2ZDojDwB79MTVrBK3y",
  "key38": "5ixYjHTTRpYpqtUwqBfwzZoDUmy7KQbKkzUJ7JFxeYuJMaHU7697orNcethf2LP412kE2sTf11EGc9CRKAHXWCmJ",
  "key39": "5SXmggotn9Px735XT12EvPwS9YajAbbpPivGgaRMEYqeH6csLWLD6fhZN7mJ3shjAye7M8SQZtKHeAw8WyXEyu7F",
  "key40": "34rVpzSWZQMxwDQpNeqXHctg3BUUruJJXMxgFnfvsxNv31nALzVdc4gMGpWwAQizscu7w3URkjHiy4JY7kxUFW3T",
  "key41": "4PPtxuhm3EQaJ6hjYUqwz28coiHi7KuXQcP9k2uf4mH6FwUTbGbaQC9W7RJHYE2UuJ8UGeKmynSz4jkx8wskiMAb",
  "key42": "D6QrwNCzJpVBeenxWN9gGMasUvHPDJpNF6njzw5GoEahi8m52FRxiLhWMsWVZyPij1CpyukcGCj4ziNLzMvt3Fh"
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
