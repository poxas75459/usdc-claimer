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
    "4dXNP76SzPjyFvXrNZjtPGNjUHmzoUP1E5mq8UJc3k5rg9nvoh9T71mUpPbJLwotGp8UT5qRkU43mjgqR6EkQvPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueMR8qcPjPT6yFynsSFuj1RV6oXGTGu6yPnCUQXqeLADKE34zUyEQvPqHVLvT42eugTVmtLzJGpHnHtb1XxSpHG",
  "key1": "27ngaypgy6tqcVpYTpoVHoSRHCiG75QUkjRpPkqr7Mp6PTM2JdkaJgpvbML4tUWwZsQTfUstqnK8vn7oN5djTsAS",
  "key2": "56YQaid6PaqFT6TBPSGLHUNLBySfSFNE7m7Vo9iq1JMM7kv69grjyCUuyaZKgCnRXYgDyCghVUrdbJJnTdCLi1Y3",
  "key3": "5xgJ2ik9ChmF4BD3MSfVw54yUNDd2DKyea1SGRx3N6hgLxFZmHGAcjucJtsrXJ6xJiw8vBPhWKee3YzJdNhkpRv5",
  "key4": "4xG1k6TXSUB9mjKsYbi2sVhi6ttV4tvo3c75ERRPyWxDBFrAwJo4aT9TWtDs7Zj3wrVTFtzCcqsja3qL6C7PZiZV",
  "key5": "66GArPBL2qkj6i6qMQxp5fZaPuvBa5xnb9RTrz1qvmiw14LQBjEAziYFkA1fNigb4h5xcLGUKUNSBJqTMYW7cyH4",
  "key6": "4bEPJjBMhkUbnjVxuSQmoihGSPpbNTKEKnnwSXttSmDGpf9L9G9JBL84My6QtSSZbi1dM6pstSpP2JMpJAMD5cLD",
  "key7": "4Vc6G5SG7j5rZ4db3CcDVcBj9pqXN6mhMCqfQeWspN3BvALTiZbN3DRoU1EDM7HQjzLrKL5df668Qq5JFAQfyJNp",
  "key8": "51RZz7AB3SrVC3mSYSJtip5SDd7qN5rEab5PTtnob7tFBssxobv2pPTvQybnW3cL6kZegbZV9MiTRBuR3u2d3QiH",
  "key9": "3NmL5CecUGPEKmpij6W6q8RV2kTQSLTcSbvSzyy95N3c17dUWC85mue6SHD2s1TJ2nksJpAyxPe4su5Tjn787dgz",
  "key10": "3rk3SE8bM56N89sErPqZMhd43VXvVAtCxPwiZ9m82HDg2NU6P7rfNmfaGdFwtK1wEV6EmcytwquhaRMfkVMRgH6m",
  "key11": "2snet6MxbfhdPPXjk1iU2S1wHLiZipMA7pGUi3JhYgfaPh4ARcMeoSdkA8ZGyvq8RaibmETZiuYZcQrirPHnhTNe",
  "key12": "3uFSC1NiAZzqAdu6HBBfdEB9vPtL9JReAnFW5r7vhaRJ7oiWnZ6o8N3qQ8iNRd5CRyss8mxDktJ69unmtzH7RWe2",
  "key13": "3c7YGJ9ZVnvPSz9VkXmPBY3RFUsnxFVL9z97Z8yQZWw1nHiRzqzPTb57qpWnVzMDagThohAmtRkWgajVPDHTuKFc",
  "key14": "4n9Pfqm8MCAscv4LL6fFxoAJYHDqHmQ1fLbFBbzWR5w8oNews8Z2dRMjC5pne62cWhTGXQMGi77WoywakTtNgXUr",
  "key15": "3RoBggRJCMQCkQ9fPiFrtudvFP8XQbCdRiuabwt8EABzVFzghPsrp9o4ez7pqDbweGmNfWzoVX1baSCwmB8h7v99",
  "key16": "2NRRzZiM4S3gXjoMCUvPZ4ZkwRbzgtN5DwUDF2afWReCvqZTk5Vgtbc738MhdfWNCSWqcivdovY7iCEFUfhq8dRr",
  "key17": "53VYaiDnsFaFrk83V5WW4xCNZpHy3PaTh6nLoKbpdVwcNwadSfmQN6S19dWKF1kLBh9HFY8cRMeuT2peaskhcBQX",
  "key18": "48NyLkwnYqGNYHjSoAh8A8r82D4CsCpJ4FNQE2YBw1PaAb37a5Egp8heFiKAy9keYa2VUiQsLPTmB7dDJCn75TFQ",
  "key19": "2KscySfmzuTs65sECJQ85vRngutQaguNiMDVyBM4tpwitbGG9bH5tryr5xdXy1Hfv3fmxdVmWd9XMJu81xy2sWJr",
  "key20": "CnWdZCmUcvTDWmWin7rqLbbH6XfpsQfVowiVnXtevV52H6y1Tm5rDke1xqsXQUNkbkgwsv98PzfS1JxuKK7m3Ys",
  "key21": "59zgAHGC13VPt7pbTQHefnp3i7wDcBxdKSXjsQLKQDtCk2UjgzeqZhG73C2kS23asZMaQ7ji5AosNJmsL8PhZ3PZ",
  "key22": "2MtEHh2FQezHPKP9K7D6MhSoYybkM7JHyRFK41p5VNJAF89yStYn6kTKWQzHmygoLJ6avxf1q8Cbhya7LUjjkhDS",
  "key23": "4J2h1d23TNR37mV3re2fjeqmFzbdPNVhNJgdGqQZaRsfFwsTTyFnxAd4AEuJ3kVyft8Si3b3tw6FkK3c4E2dvPPb",
  "key24": "2cqWPviiavQCiXvyKx9C5MKQ6cCDSUybaEk3r8N9FESPCerxpYaT1QGUwxrgd2MXZSLnWbkw8nZrpFWUBHvRhSYP",
  "key25": "2X2pDePFWpR4nzHZY3qv2mdj2qVSFpNZpTfHRTAtWSbvMEBWmPH6Y7sHTwSmGEJnJDwcP7nj1PDZYCDtcFXZWSth",
  "key26": "55ZYTnG3xB4DoMFbrqMQtwPXg66DB5nPC2dEj9do4L4QfqAkDMwPesN7qotu3y9HxMorge67eeFrB1TDzJ7ikDeU",
  "key27": "3LJUJ5VLYWBAJUnpZo3mRhx5s3FRqSndnVWcoxiMMNktDZqXV5J7tt28tsayZu5sgGBUANVdfFNVnhYLTHnRG946",
  "key28": "3pWrR3Sm8EYXPognP6qBH3LQ5qebmUS9tztMBXPeuQ2RdqKRXUhZJfvwYAwEWLDN1GuuAvD316Bi7wtfJww5zgcw",
  "key29": "5gy776wwv7T1MQ5euikzqEJguP2MYGewdcfNz7jY5vPDrsmppkFX4B1HV2PbDgG5MpPhimFxUUt4mnfWwPZmARTt",
  "key30": "kVWZSW6eZqSDdTJSncLNRN7BNDzNnG1CTdJjKRUPMtrCCL3zbydQVyGX8M3TabNuyKXanGyNWpNkbY79LDJRc7k",
  "key31": "RtVbX6SFgYLBw1yP4osy7LkuHbvh4ctdiWc6Z4BFpfQui4W5MGG5Q67j2UbXQL8wrmZQsWB5Sc538wQNJLJqwnS",
  "key32": "2zFWdt5QaPVwiTYuz66qRM82cFKgmBf7f9q21sCatYLrcx3wnXzfRsPiuRC26zBM3P64VK3JBK9NZfq383a1aF6c",
  "key33": "2HcK5XAwG4GWYSxjVBtkUWHFFPR7mp1d96DnwWP9m7cwdkX2ZfuQcf9fyjDYy7bk8UauhZUGLvCHLHJLCbvYcxUx",
  "key34": "5yX3pRcWbRVs1pEjuSPzgmDMKUiDVatRGE7r3e8imzJsiVCfyg2ijK2seR3RNNDQWUVgjJvZz21G2ARgVvb6zPbL",
  "key35": "4az1zqEkBFZQFjcjhEagz6UVa9VGF7qULKq1RYAGH1t37Qhqx9Uh88HC77zt1exQ4dfx265ACZYDre3vavBJE4nu",
  "key36": "2efo1UC6AdPisqSfEByrB3HCS8n6sGb7Rxu6X6EVoYPKJsDqbRX99yo3G2F5oncpt2vhVXw2E9ctLKBobJQ7Ycvw",
  "key37": "643JGYBxNeW9sgey2BqLycQYDysTqX2gtSRuYnDnHC56in3YK7d8t1wAJPk8dEXBYvvxvp1bgDHxQLoVFnu1WN8R",
  "key38": "5T3uEhzbrpRoGUH28N7NPhGSPAydbSuFr4KCLcXs9MUdUKPZke8DQu346ixyTdTBP6tWT565skhjiG3inWBc3NwD",
  "key39": "4kBAKmiTvUuBsxicZaDuef6U6KweR4QN3QruqYcUdms9v8yoR5rRdjzpBL4JaHQ3LTaEMeRi8jKYdAaEEiU4cCjQ",
  "key40": "2DMCK75q4fTzUpuDQfQBLR5kxgcN2RBbJziTrYziFAUcJ4nExNrFRKxdBysU7eGY3i4C3gUGBGDHvf2aQWuLyaVk",
  "key41": "5oxw3xGaFnksx7ySXaKnejq3oGRWGYG9Aqyt3RYHqmGi3po4QwAB9ynvrqYVHiKqy67uyjh1cDkudiYycPhewqG8",
  "key42": "27i5Dgs9yibdBPWcXHpFoG4JYRifu8cygfsqwRTLGvafsqgwhXP4C15eDMKGbvnmwQRp4XciraHHCnum5af2Yw5g",
  "key43": "2KBNTLvJCABbn3LaMNq4mgj3gRw1i7tj1ZAQu8CRZp2j9r6JqFUtbFnEdB3Rb4Ra3xZ4Dr1g4xiyDbFTSDax15A7",
  "key44": "2D8Z9t3r4eArU1woZYD97T7UA8htiAF6GjBqYMoLbCjq5WGGnS3q3RdYGCJsNHSWiNGXXka9XUtabgnqKy8aU8Bq"
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
