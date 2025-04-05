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
    "35w1ip7Z5X26EzNYAwKQwLtwPv5EDyKBPpwKkdcoDnHzbmnx1gU1mBVA6H3uzzgspg3jfMWTeyC2yqTBbKyXTULY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mf7ztuTRUanrPvJ81a9wygG33J2btscVNTV1QHZax5zM6vuSuTFibHpTm9hF4XQzrno4vvN9bktW7kK3kGJQmsH",
  "key1": "5QW6nrPg2Ahu5JyP6zLPquicXCmhP1TRcbRq89DqQaYfDqTzoMFbeixTz36bKAah5PyQ22sY6yS7VLn2wTepoGyH",
  "key2": "5eY7bwzogHbdPoowVbvZzNEQhdYVHbvDNfSs4aB7bD3jTHvzznAp1yDZjSaj6gkm5yWAgwo4i7uonNTFe2NqpweN",
  "key3": "4SkwqEj19UVUP51hrNpJpqiPjNBDAk7DRZUpwnD5SMg27R54RuZQQCtmayrzmRyiitNgEbBmp1Zk3p9dRMp3xgBo",
  "key4": "2Zc8ZHWwjNvU274CwYzVcWbngLK6W4mPDTFvD2QALtNWWFdonG1ouqa6DS4duNiPS14Yjn63fHJ5dN9NsB9uYbHa",
  "key5": "21VBwnYSEdYdUqbz5QVSrUAwGAi9D9fFex9m7PdZBzssCSkELk1oYHfUY8oFiS4djiLmCqsEri3FPakrbzweNE4T",
  "key6": "4eRm6PKcpr3zfhy9z1sLmRJ3Ur798G3Q9evwdEDbjfGX168r5sCwoHEnbHciJrA9mwowUuQQjbiGMRuhiEm6vRQW",
  "key7": "449fJHQwZUn3nAKKrYx6PmyhfgDhEmWChz6eVG4LgbYfnZnNzDD9aCUap6iKQZzMxPF1rd7D52u75CEqXWV9VZAn",
  "key8": "5cSV7VTLxW5TcDVQkTr3pyvgqHDM1ZvYqkygcYkb1xAAj19UDDwA486KRMFEqNrUo97jy4vHtMAPtwCuhHZW47Ua",
  "key9": "3A8fG1QsQoikbffoCGyNeokN9yW2CfvGG9vF5imCWkutMQJCTWZEgA6AxCfwYgmTVz8y9mJjJPP15Hyc4cmZ3JJT",
  "key10": "5KZCLMkJb2YgFLGuNgP7pG7n9uXDY7TVbzA6HgLsXzdKPbk7y6snSas4cEYfMiXWBYV3oRJK4YwfWKVzSw7orgpa",
  "key11": "2J8EzvB5ykbhsq2zqgkh61qJ2xN8y83YpZME23qQZdnan4hs9RTctV6boNj5TFakbn4LvLJVyWJpR4gdwCDCKvEB",
  "key12": "3RKDWdN1pH3nFeoRvPefTEGEy7m9gmqbhBg2pEzJRxg3sAeFnSenEiPUDYB3utpTkVZ8HqRACyKveiHgz8qjVYCP",
  "key13": "JHxJqMc7KkC3nDRbHrsgWLDcBuxnfHvZK8xPjgqugxpDzBMCUukJeipi1EoD17w7MorMPmq7wHtJRKfRzECjKpa",
  "key14": "63wdKgDiEmvtehdbx5vUC68ZkuYVGo9H6hNaUspfvSme1FrUS6EdszDe1pn1vc7wFy6AnYVGPyRqngPZTbsrzaNV",
  "key15": "4aK3xYNMtFN2dPDdRbZ2bjzfhb1pxwrRMTSEQucCjbmfqfr8HHHskt6sjdhbEogDGreWWqb3CnuwnFriAjgEGwWj",
  "key16": "4c8LJZXdY5v4GZje8nmdxFXhZhSqGJRq5idvqPjN7xiKiMrZTrwWEZEf6HJbcEon3yv54dKnCUwqj1axUGaeC4AJ",
  "key17": "sgh2qqHk886M8JsHp98QdMjqDfcpzL1Nk7h7SwE8oXpxwh9wJAVrTHKh5eF2f18Kwt95JFJJtsCoJiQJJuHJQC7",
  "key18": "52TbEjBScgte2gFift3RRiBjujWUkTA1GWJorLdVB3mDkm3jc8TjjMCU2jevCT46RWKhK8nHLNHUoh49eYxJJYgm",
  "key19": "4iqwNDKHdCkAhS82axDR4qLsw1xUKJM1Kmn8X9PDxFogSzoh81abrSohZCjSPG6xDbTtAfFQwH4siZxrK8AQe4mF",
  "key20": "3MfPHE6gRrJCeBfgnFtKx7KSQ4oocg4N3wrihEM7HyGVfdi5VvEkg4ZgjRD85JmUyqCjCxQefCAXEMxs1HGCFYLJ",
  "key21": "2Y2eho7x4LTt4yPES49mzgs7pHtgdfAAKuse2WmbTBCuNigdNW1cwS28pXPxukmQ27iW8oN1CcwHVGK7KSuoL5bv",
  "key22": "4TJkqtERYqdg3XfiMUYMZbXjkKAMgi9EpFHAiMDgMxSPPkS8n925c7GSmrhhpYy5kqvRsUJ7GZMTAFzs9vQBrUE9",
  "key23": "2ov1WgTwMbhsdzEwNwW2Agky2UMS4AwuQjPPVnvdbFiZTa7D5MKUGPEzapjniKAvx86FjCYx84xLoxgiNzgsggyk",
  "key24": "G4Et6ZvVyxvc6Gdhx2MQcQJhBwWSaf4pf6jJzaVWswZB89smJXTdWhjpAXzqNGnDpzWvNCNT6VBnS31ZLmnx9Rs",
  "key25": "3jafgtRvktHUH68gVUgkRTDVWFXn7VPmuyCiUuhmeEd4FAmJ9Gy9FyAomumyFfwacd2mdW2g8N4K18Nm71H4cnAo",
  "key26": "3H5qTpRThGyBj73Det4XDrHc4ko2GdKMg1bJbyWgpAwhYpGDLDaSDbfJFCgJZ41ZvG5HHsspeaZKEb1u7sGZ1EJZ",
  "key27": "48ZX3hQU3VgBWDEugEmJQzdp6j8h2C8sTPBrVU5it3MS9bvutXtmVgZQqPMjMXdBramu31mg75Hs4ZbJnvBwh55h",
  "key28": "49FzS78tMN916H6efgyvpEeHdTW1KUc8dgJEZiA1go7LzQMUp1sQQZK9WoBeuvPmpBMu1z5gW2efurF31jT5Th5W",
  "key29": "479WryJsthjuKy77xqw13EfoeEmcJc3fHWoh4XKCTT1B77CrvHZ984SQvFV7tBo9QmLhC2WDDD2Q4dJ3HAKP1RYW",
  "key30": "3Z89YZJFKCKnhmeoFmQRZXM5rdxmn2K36mFUPHbZKSBWMTf3s4MiRePeTRqmqPUA1EuAepvMv7hvL2isZ7bPeuRX",
  "key31": "3ZvNAZF8sVdYTwVDJo8DaQwW3coEDWYrDG7B6MJoayZkaVeqymp4NYnXQcGxTw1Cupo73K4ExZPi4dLntQutJk61",
  "key32": "rghvbddHNQsFccqHsqZ7hXvkUCQRyz1BLu6Sa8DKc6C7AXixCbeq7t5zsd9hxgXCRLFHyf8HbF7trF4Cw9WdRk7",
  "key33": "4eLTiJtECyznLLimGyrzkK2BziBMDpc9yd4ehFV2L6DgWKPuNiQ4X1GUAAfSw6nAweLeH1uFcYtPBWHYcs3BGCZe",
  "key34": "5tHka9WmbD1fb2JYA5s7kkqmgaQthYZaU7QztQtGroPLWYnbeZ9ohSTQJLdpdHuZAxPdS44siF3njwXB8dNCmEDH",
  "key35": "4CAetXcCs7ar4cM2Ctw5x9E4wGdiuVF3oGjydMs4XRLkjAzDjya8rhK6L7Vpvbdi28vh1GohPqTh4cNU6bTKin6m",
  "key36": "41DUi6HziEnm1Yv8BNRQ9rVx71gaFYKGsy3HommgZFmfZGjYdkeA4JDxC8RJimZvvYR9BVX9zUxuYCGe83aENyzR",
  "key37": "2PmyHUg3SRGW3HiSY9ji3HAmCLa2mRpHQhx5ffUpvrHLDEoxZJDZaSmorNz5XYCPmvKzw4ynyX1K6vsjBLXHj1ic",
  "key38": "5eCq6vV9QGo9ntvN6C2K2LKfCv3yVJt8Q1z3gfVppFFUodaATt9CVzDAuppfMmMtgEvREc3BasVHboaEj1Pg6QE",
  "key39": "brYnRZRKhWzxt1yZYdf1un5SB6m6bVGM1MSrpsduDjbQu9EBYnUEro6JPbYaPTX5j8jY6tKFfiRGRPqQR5A2xBm",
  "key40": "23UbWcURmY6o1Key6WmxsbsMoKkrwaug8epJgBnrf372ZTygf4U4kQYrg3H47Y6KSVYkFDHuzHZHqgxSyhwdDtcZ",
  "key41": "39tiBWq62zJYjJKKjxX5YopWMBjmNfiHSeuBKiKShJfnD8vgvsSCtmXuqENU2FtGVAUWFvH9JTx5CfDt7ZNzov9C",
  "key42": "3Ck3BtKdoFeTEUPJaXJLVUkMeG5hg1TrVS5XpqhaXRHvgJPk5DphDzMX5nfVb7FB4KxiAA2NKMqL6SYFcP4uCKYf",
  "key43": "5VX3bRM5MSiHqk8uvhCWqx6QZwZNVSegqXTQ3kPNPLyBCvYeDHy6RF9CvLWNQ7YZQwG6fVJ8c55a64pq2okTQNRe"
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
