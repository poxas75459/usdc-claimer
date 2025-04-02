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
    "4HnSJddbznXJ9rHP9BDjAyFnG9ixAoehLcxhnqf1wMAjJebcrMcv5tJpzUxmVz5jiJ8FgLSdBQYYttdZrkwS1sgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEvBywdnAfMm1uJYYpTtMxvpFJQUKTmpAg76jEW9P7VeJbQQo5yUhbN9zXxnF8XB2Mk4FX929Rvm6534ATHE6XN",
  "key1": "32417G3zuUacUGtkGTmBPQ6DGDBqGKG7jjCoMa9aZP54G6Jfi39VGLFaMvyLoSkDgQBo9gx3Spx8VpCbCrUrif9o",
  "key2": "45uo1rJmhfmk9sEYV3u7MMzvosZafo8FoDRuAgNRdhcGSQbwPfxFbSx2UmeHL2SLvwJ8nrmVhnjfjXZquSriBxdq",
  "key3": "37ngvCr63WMjU4yug1V2GGHBfu2bHZ3L5vTwdcYTbLqvJwDELSxuPN9ukN6qogCt7L996TJuGRY1aBSLULK9PKaJ",
  "key4": "D45EhqNhcY3nuFGQo3utmxfBgPBy6Mw6e7dGgZuyh1CMasuB26qfGFLvmvmzDr86aJ9gBhwK4UXX2WH1gp2cmEM",
  "key5": "tbLmomJXqFdDuBXndzJFq2VpLkREF7E42hYQMLM3NyPKovfSdKEFCo8rzGiLaVfht1HxCdLpHSeNW51d6oxnkCB",
  "key6": "3brUrUbcJAa8gpgjyH57yhm4u6PhYMyKPeV9W3d2jHwTpuyGdoapsq3Dtifzf2Tra6GCVSUF6sHYAcCN7GzGDSxc",
  "key7": "3B8pmU26ZToKjZFMULWHbzwvSAhtyFofNoJjK5Y9WXM26tuz3Fjry2g17WtxMDrxmooywsYnMq3Rohkfz54uGGFV",
  "key8": "2jjxkozMCnvCRN1uS9ud6KJYJaHw3DSC6DRjhHPH3H41mnYGFmR2WRLDsvaT433irnTt88ob8Tt8G57YHe3Z6Whb",
  "key9": "2JJ28syoBK28hR7QppFvpDKcPvQePowZbzjBb26Zjaa8Ah7FTPcGviN9hi6GaHDKKuzaBMP9vxtrzdeBpVfvJA2x",
  "key10": "SLmzySsXfw88mV8LHHq9i1zpBgj7WMUE9vfdriKoTBj2xh2cJUzoLA6wCaBzYZUSyT1i59W5aeT6You1e5z6PgB",
  "key11": "2bZxamPedqUtnqJmWJJCc5sxzVvrbERZki767FSYETEXvN75zG28dawNXGzmgDo8UJwUAwHxKTeeMA6j5QF1DwRa",
  "key12": "2WpNq6GdhXq9UGD67MuWETGBKnLkUWXcAvFYXLM6mSKhrnkpqWa9qdrorscNCxqYP4t1FwB8grNGCqhKiBA3SaY2",
  "key13": "5QTtUZPe93DzY2ZPQHGX4FFoHKSWZB3dGNT4KgJVAbeADYkCY2ZKJrfp63nUYWpRVK47D943nvBiJGstCq6R1WHW",
  "key14": "5qr5z8AwQWagGXZG5SqZLrFNrGvF3uaTVC1vgy5gbFJ1yULTMcPjprTnt79HKbPGSkkiHRGmmY2QiXY6vBdBFF3G",
  "key15": "5x3aqyW8XnLEYbsWk8ebmhj5ztRd23dWmeLS52nxwiZFUoxA4qhjcvNFEghUi5xnDzLtHRqUuRPzkSxZjZbAWaE4",
  "key16": "3i4qmTNQgPPw9Rywxvwf1vrhSVYMj9n6trrKH89MMDBZTF1aabj6qGNg516Nm1d2cqoc195DVgRpjF91xUtnhz7n",
  "key17": "3SM1bEXZCnKwRh7WVfYFNyVx4isrsfxaREzuWtipBhiM1qfCBavZ7gRZ7moMoNPmnNxEWdq3BVvd5g1ybVyRxc2K",
  "key18": "4YEherPHXbdWJE9fRABb56sG1QoMreZUPYtcC2XTaJokERjUEmpjUKb9YJFHi9jZ95eBuvUwDd8QAnXv2ZRk5G9C",
  "key19": "uzrZc3H8apYH2hCMnkHJkRH8TuZCeaWGrshht9BR7xVxxugUmx4W4nVZK3UtgF69M7ky8vufmXQyaFAKUhkDeiK",
  "key20": "vf1aWaG4nzkMPvasj5xMGSAYwHp2nhyvKDPxbpYYwosCPGiGKXYyryKFLnrgDjF4aDHf6KfGLyWLoaMtXFB2UUQ",
  "key21": "3T4iY38dpScKP8EZkKzi4t7ye9YQ92sYDWGmypeDkgFEsL9pcEEyRLsXH3bTjqMW5L9ydo3Rq5SyzrXPaDuWh4dh",
  "key22": "pG2fpUGUV3JXPFZEbc3mtcg7AnpAvJqa38bHeRg6T91o5V5JTif7ZaDtFPpFFsQCMTeNbCdvQjGA78SBaRv6h3f",
  "key23": "5FfiuUNghZU871af1KVMWYxutzAa4cYk3keTJujSB5oWHUQcT7pZuGFbSHzSYDssoK7ytFxCXy1TwVxtPau35soi",
  "key24": "2WPnx5wcjZK5wUWkG3g2T4VmJ1yVP8DPAzsntCT46YRyb4mWRNov2wJxwSgcTqCuUfhdQc4XHEkFGVd7PtCxbSdM",
  "key25": "rPBU7uwW4J6XudV2qCPJp4xYpEjzeFrm61J3fLCbf521PMhGrRoGpAZfcRoz9b62NagMbhfD4ngjmMnPUkX9mf9",
  "key26": "N2hKNzCacHnJdG2KBNniEPkvtUCCtEX8CKfAUTyPQJombLKK2YGCFkjuMzLyzCrA3ToJ2ADrpMr38VEDW1VzFrW",
  "key27": "5m1oRQyt13oXmd5pzeidgUARVcL5KUvEap4KjDQqMZJaVrSiMpD4F39hztNc7kSNKqYtzo8xVHLzcXtLzRp3hPff",
  "key28": "56HuthLepQGGjNKbBvbRtDMMiSu3jnQSVbWqCHGWhaqiF9Pxf5q316rv41ioyzdDotjnWJKCNjc1FPBLJqHfWvjW",
  "key29": "26zMRLQNBxuPYckbeGz2yHEhFWrrz2N1crgF9tpLEincrZgiqwNCPi3H9dzi1u2tuZhfFLmNe8DkANaszZBmjxyt",
  "key30": "4PZ8w5Df584SyxX9w1Q5R842Jj1DTckt9JMcR5qXuwQ6pFngN5wDgemd2aF3MNJsUkNEcDeMr1YFjh7uvQhj41sA",
  "key31": "55YBHmRXiQQnwE6MJztzF6nMYdscCWKcs8J11WhKnyjoweycg22SmeVjgu8wfV1EfnCNhEYeg71UjTNHcicnBeSk",
  "key32": "cHgL9tGPzAnVkWXsHJ4QSFbebGEw27dR82gTy6cgLpza5mPZEVw8nF74GHANXnSPXdPE6erUQ5w3c7RK4LbjfLd"
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
