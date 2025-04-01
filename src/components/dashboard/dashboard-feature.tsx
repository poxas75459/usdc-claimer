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
    "46PWa2Lpiuw6kEmaBp8YzVumu3wSmv3jyLVxuVFwcxBz2zW1XwViALLoxvFyby1tie5zMu4ULD3gUkDs7ytdHY2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dSznGeypH1q6YTTeAVMBq7eV1YLWpsRzpSzUvQ5SnfP7xhvq1XyBN8xWJdWUdDuzWHqfEZ8C7L1e739uk4y4fuU",
  "key1": "4h6qs79cEEa9UCJiuWoYbjophJosUUpiyVappWRiJBdzhLW8ascGYmeKcCQr3igdUvj1DkBi2hQnGY4wJuUC61a4",
  "key2": "5Zy2oBRMtBwYwyMi1fqG72TGCreco9vnt7Hsd3oipwArHjgjr5MA2e6MGtdhDvgHrAvGobXCYQUn3pkyhoKTNAzY",
  "key3": "4TGovMEZJPxJN9o9rnQb6Lmjh2QzYybyZvie5BejdrsL4VmnhsQ2JZYD5QxpcVrUcArxjE7M4qyt2dS1MwkW7SyL",
  "key4": "5fK4ds8TrwcUoscBFUujgVbDP4wLgRqeTYUZF9ZmgN8kWtTvMWaMgJ3uhRTnoPNJPo3sdWXMYA7KrPmqv3vdcdtr",
  "key5": "2ycB29USgJoavpHs1B1ajAnpkzCjLFntXMK87hLnqXXUpgcL2Cx5Hb6MVsZw71PJNy9fYfF7G1UJQRjBfTJLnq6P",
  "key6": "4aHaT4cfNjwwSA19GNApHRTf9kfXGV7ULfPuWnfdN5RRiHi7DH25a19ompG7pucCxbYjE1mrUgiC5nkrNsDdea2b",
  "key7": "4XiLqzKy9ruMnPdgZc6UhggKbdrKT28MroMA6xefcjAEF8BZQcQYpcC8Put1iSDr26WhXpKLAyDLY1ZEcagfpmWP",
  "key8": "3kDDrQrHtEfdKR6kBdUDPGnGHDW4V5araX2UN5Y5uKmstaUiNaRm8thMhsXMCJFWQjidoXXzrKJWEagH9SyxJnZk",
  "key9": "5zZwak6dLVkfK5dhMzjT7i7nptKt4QHGVpB7aBqZeSnJnQ99718PbunYB5DJVXHPbzei85RJRMriZRM4fZuNwBmE",
  "key10": "4MpbyCnAfsko7eZFsZ9nzCaqfQdeSRnDd6mqwDaNMEmQeERLgoxudhC3uNFLNRnW1mvU2qcvgSam1CAxtTMBarTv",
  "key11": "31yRQnGvNcWMtHotQhJXgc1Stg9r4dm17cqLCp2k8aCC7BA7do47LtmcQF1JdBpUSKWyHSq4cPR27P56nbFSPoee",
  "key12": "37QGhoXsaQnzc7je47inTh643vZMY7Epffmn8v2NHbfArRyVry5hroCv5AJdCuY1TFiRi9LGgRHPFZbRszHPAG4C",
  "key13": "5w3xgCD3H6VejRiNqsLzbsqc9an1zVyUembnVJaykaenXMBCSYQdYsuDFjT1wpUwCaHK8XLKGEZVeAk8sf1CtYmY",
  "key14": "gdZgCZMMpaY8zHiMHMtbSTQye1cwQ9Q6iTa7DR8WmDFAi2c38K7LtDe9UaJ5BuubwDWdeygqPcAs9t33wMjMsqh",
  "key15": "7S83Q4RjQmK4UuajNXwm1Z4iMBLN3diqbaNzdKANVySK9UtXqHtjW7mTqPv2Zh63wXmxuDBTeF8mge9BYZtpJSi",
  "key16": "3mNBk2vZmyyvqG7pErfWmkPxd3ae7ZRrV91KhBgDhbQtSAEFPtfUbnQ1gR1a8JkvoHcKTmcC5QnoF4PpZFdvjPRU",
  "key17": "5nQww7w2Fjdx7UbB2wpwGYeRvKX9F5196G4NjoyZP88UP3RndRhrPR7KqZk28QdUGoydzDCAUvSndYe1qyZWW5Ec",
  "key18": "XKUJRYEPHAk4PNUFbWpZWsij4Vga1jZgAhTjTiiLQ3df4XepMJztf2XwsF867jTHzMuuEYA2dBtqkkpTxQuJeTN",
  "key19": "3VBJ8qmN7mRAyDaEukpoViN5ikZm8i1LXB8u3KTLfArdMBFWqXhAfMT4U2xWfDz8uChUz51C5ohCtWBWHwCCRrCT",
  "key20": "3BUiKCLtc8R9nyyEFpXCtTL56tvVVQd5VeZWsAoiSHLkT5fBCYdhjpTYHLm6tBBqVFjqPXdw2y6786bzbGTM72GZ",
  "key21": "nukt3n2kKqJBbgUEgRDYMc56DB2HSMvwadUJDqZrQknGu4iZtJndVdcEBZYhe9VifFKuWoL557dWDQSayMLSijJ",
  "key22": "tsWrzhL92BJJUX4D4c7JFiCSMASNnyt7vPdNxUqEda6zPfW7NSnSrVnJk2VZkFkEYoHavVpkg9GTdZSMYvqHUM8",
  "key23": "3VhSSH5J44LJZ8Mwzzj5cdHrCsq7rtxAX2ebj23YtgKrdpiQx6pvkySTq73knwa7ktai1bCACG7da5StbocP6CKf",
  "key24": "4xJ2trfrqvtJQiFDs4i9JnkUH1e7Z4rraBkkjdkgHy7kAe1GYnEAotJXcrF5ZjTqGYxrYftMQTbyqYpe737d7kCa",
  "key25": "2R45K4LSuANfitkr6zwoBvKz6thCofeV9jhtFaJqGUgdubbKDykCSSm3i3BEwd8xhkUqxsNzwTuS9y8qHLmH942E",
  "key26": "5KosYM9PgSmGB1PPuLoBXf754sVGfyPLXXiQyLPasAfhjLWnB8hzAkB442nphXCa2KfDMhAf5YboFL4SdstHwQTY",
  "key27": "2pnaM7LBsSqk5fiRNNCSqo9NAV4K8dkQgT2HDPrNAkBsKBsPjzHn3LkXnY2vVC79AScgxvGcUW6TQVQAXw9nZrbE",
  "key28": "4BRnmk1g9VuR3UdktFzpojXJwjGwY38ZCPyZZdTg493zHm34hdq1VByeeFmUeTaqDyGvUfpkpXXvjzyCMVvu3Pkc",
  "key29": "wbuXJkRiDtohmGr92FXLeEs15aF8XB1FUQXaZyEgsFANsPcskGnctXhhhWcJMi16FPV8f4uFBvcW4CDGtzDM2mo",
  "key30": "2BUjjhav7PmYatgMfAXBzpCLUJhK1vWqy2Rt1wjXHiv24Rrn8ruLuXjCEpjFQJVLA1A7B4rVp8UT9zompKm2T2fZ",
  "key31": "4WDD2LWhtdGdBEaww2QsRvKJGqDwJXF9RPghdGe7zFYBpbhHY6bdXzg8dPBkrvnHRzLPGfgDwezwoswTnd1zFALb",
  "key32": "SyLfh6UB9EL2YJ6yYeuEQ3AhEeUwb6bpvcBAgegf2qJkB5ntpRnze9uTvL42CRNj6sk7atRjps5khK1qt12pft7",
  "key33": "4i7GsxNgDdMbsj3s1iVd6JnvEQ23idn1wjfAsprBUnEhhShE9pXweGveMLbBiJYSuxxZEpGaQFtd7DcmSqeZbN9s",
  "key34": "4w5Z3WL5sRwWNNcsPgwtXGoDdWMdZ5cUarhK9gEHzjjdDcrZ8sFEay7twkzjJ5QMbWt2WYac32Y75VadkGpA5eJ4",
  "key35": "5ujTyRKbcRF3Y4cEUHEZRjFN7h3hQajd83cRGiQb2kitbvqvnauKjFCkL4L6cuHW24DZh7y657HqzUeM7iWSHABZ",
  "key36": "JmRM5UphnSh4BWes2MuH7GbMENbVAmfyavr2R2XH2EuU99SKN284mQ28E96SvPW7FKmAzLhrME6ZjUrgKdDxUGi",
  "key37": "4sva5ZgEy8EQsRWQcBC5zw2Qbh3PwqZUuQWMgmRydSGDD4eAwGARZhdLYG3CuTDRnniYyuuSJvVg55cd6vHBcRxi",
  "key38": "jmALtXkkAiF7k98vW8CkZPuAQ2JRfwL9RtE7sky9r4N7N78aJYNWd4oFxev32CR1U5EeAprpuLdG7x3ZZmqRtAM",
  "key39": "Z3zjMe8tddYqQLgCVDVg7RMsyXthRzH5SUAAQFb8s2tVqyip4f3i3yeLnkK1J3RzzF7HCUWkWRqLQwdTsQKQh44",
  "key40": "423uuhJgPSP26KPm1DUXvHeDQtZB2ApqkbmCpz1eXmuLNDXFiDo8NLBPvNzGnDGPBTNsZ2pRhDW4X3nCxYwaaHyT",
  "key41": "25ymoz9xF6zfRX2Br5yv1yEof3wiEjX1S3mZnFCW5qLgRMYDEkMEqtbyNZijdAg8x1RJYZRiiNwyigBN27c42cBn",
  "key42": "5v4M1XRtHSKxX1FiYuN5YCqkA2nWMaqBYCiBPp2CBSsyi416mpPuXpVKe9wWweiGowMLsQzgdo2TCEFaeZbPUsqS",
  "key43": "5Ci1CSoQebvBKEYWvk1AYTefuXvCFrBZMBBeWJA3E2NUh5SF87DrQWG8SYsQx6GG1eF9BhqiZjMdqVEXkxE7UNdu",
  "key44": "5ue7j7y7xFgxmiRrNA8o98KGkVVGk7BjV2vcm2NxaNBnQmiQyP43upcUkKQFmQhi3zMaG3t1GegUNCdvW1ZwHpw1",
  "key45": "5PnCWGMMgGGzyKu4Q2W4prxahRwsY2vD5xpRZgagvxyUxLXsWKmcxmmPp5JQ7zXJjo79Rws4kXokQasHB1s9nZza",
  "key46": "4iMaMKynNeg49wyLqrVwUq3Dkb2he4p4GQZxiRUk3B7iPYqdJiFTcrQqefXryF8RBfwA2QppGJ5Xj3HkeeH842vu",
  "key47": "55FE4xsFQdJLsYmu5X37w1iX4YuWpxbgGT8ijNUBt2xBsLDKW1SpYrjK2o8TBjgcTTSjAfzHF3PJRaDbZVzarbZ5"
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
