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
    "4xDz3ycdz2pkWyCuSAPWt3vHj8U4ZKquXLJnT5aZ78ggXJZr2c6si1BwHkz5JEHg6X4ocmC1mG1z7nkfmp5YDN5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27btDAzNefPkirGLdMH9jNVUfMG2aGSsNUmf81vLnSUYtcMim7XtRHKy8nwB21W2dBbYcYVKpxKpdGEcB6LGMQvL",
  "key1": "2gBH3P59TQ6q9D9EMQzys6fu28runZsCbYqF1vBVbrY5EDCJyKey3ri3Hwcbu47DAsJTVtGZt8hwmrcdrwXzKFoh",
  "key2": "QD3oQNm14QJiaKHnzEH2rpAuVZnDL7BKT1oxBMzJMivEc7K7BSdw8h22P3mYVzibAyFJPaZYwjVCjFrDuYQKciZ",
  "key3": "65RHBVrpDe123yzCGQcMdjcbsUyRcQy86yBr7A4vetMkwgapfqGAMXEfdr7UHHtjRL24soEKK7xaE6XcnrDWuhQZ",
  "key4": "a9MECvuWqsyB56cuGURBFVZLFmTvRWAaKg2j8cThk7xmxoVFnhLMhgjKFrZfWtU5EZNTaWaTyMHJ1uuKL2d6pxQ",
  "key5": "4wDoStLuqGDohBLsxJgxFAfi6GC1t9XFUwQZCTbrEyBBNvSHqTVmGQMRQGapxciPQpGsC8VMc7iN9GktoqeyfvgX",
  "key6": "jyfEy69kDJxxdgH1bqcPaVzKra9qox12BvJFPMgFdNufZAApPvG6kfVDq7Rxn1EDWuP9Hm31gEbx2ms6tiGKeUe",
  "key7": "2x5b64ayqXW1zvLBeibeT8orebjBTbMzvjyKvSZJMX4b1eyYox93FGt38qFmfU8A8eiUeGiQvPcAzumFr5sVSdAJ",
  "key8": "42peByE3EhSQn7FMKFKZA6rcZQ8pMY2sBE2zHq8MexRLbwrti8cwbTE533xC8MgmyEgBrvvYZ8zfHn6zb7c6pnfH",
  "key9": "2BLx6Mh51xYnRECmRFuCv3yofSCQWzzahDxXpyoSaDjVPzLb1XFtDHJkr9de4SiBbs5ZDd57vZrYc4DQuTVdfrZg",
  "key10": "NC7WaG9miz5xZTKfxfa8z6RsAEPPKVhKF3oj9hgQ6ZgeHumAVRgz63MuiuBw5NfrTq2sMFcMCPqnQ7XnoZQBpuh",
  "key11": "4AsM8Mn36X8Zo2N1AwuZtoEqvbm61DvnKZncXwsr83bHWdStwK89q2oC1yvQhAH9NMLDbWXDQjraxar246DVnq2A",
  "key12": "462PEaFXJ5bvoUpbhMvMSNojYQcWZobYz4mtHcAxXwh7GWqpzxivWx5iUX1f815JwXQp12HaSjMSVM6thFEsksbd",
  "key13": "tqCsFPcc5eshXrZUaPdBXvJMBN8jbyqPUd8PfR8BgX71Ap3oc5J4wv4pPo3gVCC4yduzRTuK4Lf3rfMNrJKLLdG",
  "key14": "2fXgEySnCiRuHXa3p4HbQH3WFJBKFq6Q6qqzaG5eHHyM1S11vZH1CoUo86fntvXY7XjFUAezfm6Z6CH1tfBvvkZj",
  "key15": "5Fnt5f81R6JTX7iFQ3sHzZdJkozWoVFcAoZ9rTZm8yCd6sWiL2bfSVEULLmhSag5DZpKjZMegkShUC3X8Vt6fKgk",
  "key16": "3EftqMEWDsR73fy7ThzWgBQ26eLRn41Z4j6EX6AS5PhhoXDXRgKi5FvxbwLj9LhSbTGZujudGkFw5FMnWQkYBBqB",
  "key17": "5jdbNLaJSrqKFEDwEo4tEW2K47XahWJvQJTHiiWyVJjMWrD3FqBkUw7mXPzy3Bwhxw2cBBWs4J9hc4ddC3guEepA",
  "key18": "8ZM6kUQx4vUbRkbEsJmSGQPWq9S5SQRubkHS1jD3eGv4opeyTJENrFmnPBf37WFSWAUK5cXwcNaN17wrGHmBd5A",
  "key19": "4B3P7z4uLhFYkWy2s8WGTtmEaxVo8QpuLekSUq7riXjYoi8j6wffhWX46MdembL8LtxHe6nAgawXhmxRMNTkskM3",
  "key20": "2Gp4qp4reTsA16EgFtSZF5V2sqdugG611956W5iGz8ZMPvXM2q6hRe1fh6nKar6aqQY3yHtHcFPyg6fVaSZPDPxF",
  "key21": "3K34Jih3MPNcYRtwWJaQd3bZtEdjF5CGd3gtUMpoKNzSotXLWgwiUonCTCk3Ahoo8MwFDwJQVUN9VWiRc5SX5VWe",
  "key22": "2DYUf5zYjZFKTSFRaTQw8QxpBpKrvDCi1pWBVFBkFCq45cEfNTE88Rj1m1ZTvZvs213QqR83JiWgQuaLPSGpR8hA",
  "key23": "2qoDY5E6Gw4aH53BuLhrQ7WFDo5iQRhd9uQEDsuyMyQpBzDbRgyViPqJ5vgSrUArSprGV2sc7erwEYvUV54nz8C2",
  "key24": "4bbrW248CBFyxFaYxbosc89nZfWPdBQPfXT6ojEs6aXh68GGD2saoG783KxJC4TSmaJN99bV36Qdp8GvJ7GeJaP2",
  "key25": "3J9j1W7JNrL51sG38EwNRjd7DDDEfbiHvhWL7BtU6ctQ5sJz2PRbPE46RrgWHkScnjTncwMzqSzL1oZa32ow6s92",
  "key26": "za96LkY2DsSkYp6god2yf3z58Gg2NqUXfLyjDi7UXksc17f9FQzuqYJZ3UfznyDpSfpKucJX4UbWBS8wExcrLVb",
  "key27": "5CN45tP4uXpS4E6gFx7LTk9to6QHmj6TMoRmQcauB9kTBaSLEMUFcvCGrncLAcdUeJzk5oroWUWN8VttyVB4AQnF",
  "key28": "2ZirwhVQCQ2S1A9HxhvtM7ARD2GJCWcdxK4Lo3byWE963BLmc9wegzqQMPPTiJhmXhpcTfyLGuihTYtu4q3YnDyM",
  "key29": "SSUN6aKSDKptadxX3mgtznGTMsoxUAti1gNchjueP6xKVGQw5hcvHXY1BEhdnT4z6FsDBDAbg7z2sVCNoYJaTGT"
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
