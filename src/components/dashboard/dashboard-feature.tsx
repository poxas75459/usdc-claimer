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
    "2HZzhXXKbVsUeGyqYvGEvcRcfFsKpwNbsWZsHwrqB37NxB9q1x3XCC4usUdiQnvGbY81t92nXQ4RoR6y19QPiyko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2AVg1CgdHsJ2dUyzco55mxTSeDVPDv1zqsBxJMoJiUrS72thSx4mGaGWKpdYFR2xKiBp2cFFDxZe3oFs6Qv5sk",
  "key1": "3UxZYYLHRqYPLD1Nq2497TtXwtGzGGNBbZdR2YoT9Zsv2X1TK9EpmFogehRuxqriJKaGPBy4m12SzVnzVbANbkpo",
  "key2": "4iAwZJxf5wpXb1U45aJVUAdhQCyw83S1k79iiy5Ljr2rRCHsFrBYz2147aGCjHXXKhsLao2DLaBWZcu9QkLHZZg1",
  "key3": "hDnRWQSVgXG4Q3cRX6BvXGP6Z86jgSMpJx2wyA9zGeVPR5ZHeAWeq7PZXvArgWdTx3WFw37bH4e5XBRPfcNUmPp",
  "key4": "5iayVmJ8h1g947Bi7mPsCUEp4JjH22VNBhBvc6VDMqhqq1QXG81gVXxmHeXPPFKZJ46H6UptRA3QFVVKeHgZogaR",
  "key5": "3MxmAzRj3mXsTzAMFT7em3vUvtCZDRHXb7wKSKVe5WgdRPTYw7rh7yB9FH7bGLnWBSkuuLd62aRcJ5Ldmc6mvF1V",
  "key6": "67qCbrfYiB9Uf4YR18xTRAYEMKGUUSo5d8ZkbUveKepuZNg7raCDudnqEjR69dRpb8G8qfsyAVdYHfh4zM1EUqG8",
  "key7": "2jgzbnZc7SvimHPP5TqwEc1oZmTiQqWt3628YwwE64rzzTCpNj9V2ajpuL8rHrpNGUJApugMX27KjEQupoAFebPi",
  "key8": "r45b3M36Z2FVJV48Qf94ApRBFttkWyjdfo64d2dFxXRKE2LQS7rZ3KPy4FsKwMPhiJRHa6BLGyqcnkSmaFvDibD",
  "key9": "5p2Zo2Xhpx1zizjMtDNsE4JVtDFRmj1vKkFMW8qfVKkZAEfo2tphjUGfPSQczKk26DX7vNPFYz7mPd74YaLxRuY5",
  "key10": "5KyyKJxPYoXhWZ9JnxrSAT7aH9DEKtCBW49j8i2JTqGqYNvAB4mWMnLMbcvYydqiUAMqX5tzo6w3Tn3sivqNyrJw",
  "key11": "5TQ2CGxWKSCr45yWBQ6HYtnEVicszw4DXrjqfXRYkNZ1hQMGXmH3bKH2XUQ8MX9zLLAYum86NCRkWwekNHf1oyqu",
  "key12": "4gr4nSeKmJmLdqd8Z4XdUKmD2nJZpffS4PGEmgEELroHGfYZm2vsEqfrr17pbuqW8Vo6HX3AxuD7NfsfDQ2zyxZF",
  "key13": "7ruRqqvWC2aTj1rraQciSyNFc43LPAuV12m4GJ6nmYN138s2jMRz7jkk8D4WfGhpppqPq1uPTFvNBQVnx7syE1s",
  "key14": "3ZAg9zPDSEfCavK39CsYSer8MXiCsxJ5g2JgjPiQ3ESYb5iSgLTfpU8SAzh4qWX1cmzp67u4UCp3wrgZpubVU74k",
  "key15": "4UvdpTfDtgvEF9pjdrm3UDuq4vgR9XVhWB7C4tAJWexpYt2N85zUQgJpQpoqXT8AEM42eaazdofeSoDkgZmnHHbT",
  "key16": "5CggwqGbZczoLj42EJhekGnejgS3d1nV3uUUUixAC73KmjgCve2eJqMk2gwmjszRbvt8ZUJAwjq7JLiVkxKfx1nm",
  "key17": "2uipDcXiFbjCTPoTftWsDdMiS3PEegDexfAJdJ6krW1iVoL9yL2hi6dLnqNLe4hVdAsoJcsmiXuRsVRudMEfzi6F",
  "key18": "41tHW5zNdYM1PMbdw8EVZoSu3kWhLAGWq4Bppn4BqeVj6Ft1cfeFbLpWpasD5qBxZrZ2kziJyhVGnMyAMdyaMXWY",
  "key19": "54kR5KSHZZRhe8wYNRdA65XewGFVWqbXAGUj74PS9N3JVxHRk28NjNxVmQoKTRDWgam9om9YJo5jxHoSvWvnesRF",
  "key20": "3vmEBbLiLP2No7zZcJrXR4AXDWWzuxVdXh5PypbEz9FGKiKCk595nAVnq3kK2sAVNe7Ztxi31ui1f4wYseZ5wdKX",
  "key21": "3LKfp5uDvzr6iteLPFxND4qqB3GGL8rFpdq779waBq1jox1nN8AzoeLSKcmE6Xk6hqUi5i83A27G5U6QWoWMR3Yt",
  "key22": "5ruPkaBaaSvDibZfXwhVdfEMkxPY1gbF97Cqw3Uyp7wbQgMmRLSWwheZkRz28ZGvpLm7bFgsK3cGECzbq3jECEVQ",
  "key23": "LRDLnM2C4Ac9bQDYMC9nvH8ntzas3BbCJKDQFd5BEbpzXsaWPzUJztHcHRcnGRsbLsKXKAYM37LMVtsMHwfGFpU",
  "key24": "365XyuyYTzHPGniuZHZDrTMvbX8qR3N2WQ8PxB7GvoMcz79rvP4nzPpsh5T7dwfnmLkkfPHzcMQGrxR576mU8uXz",
  "key25": "2da8g56gQUELSHXkuUWeZSveqcYdyVYUkmQKNhZh3davsLVhQ7BzrLb8L215bD7CSgcpKU9Wfvws2E1QFqfgbJk5"
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
