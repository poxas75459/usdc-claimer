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
    "3sMnXZFQrQZFRQyoZhR2evwZTFmPbqEPdkmhbgayU5ee6YUg5RJE9CdCa5Y5YLB6jxcD7RkHt3Zy5mPc955LFWyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbguKQ7oeKtHcz8VBH6Yx8mukQsLyk5Exqj9NiLHcG6CMFJXmZYiYs3UuqrJoiSK3csxHJmNXg6yqRywUnKnTN1",
  "key1": "fdd9kxWfeCHNpqCdekRfFLPhohAsZ2zaGzF9BJ8CZbVSduoP5hiTjSd79TfMgkgZyPnzGTE6e1Fpo8Qz7kXkzST",
  "key2": "3kNUj3VCE4rKZVcqmwnFwzs3L5F5xivtS58t33BZsPdfyojse5vr4N4kfD7BonTEgFmhygC83gSmr2LHSQfU3PnT",
  "key3": "2gaBGmsjAk9GeEAVFHGYGHapjbsZKP1beLqxGLnXHy5m9y3Q1KyXRitgvA99vdspJYyQvfUJ2EWrEsMsTqSkVwZa",
  "key4": "RFsQSKXj8WoDx69tYZN5JLWK2aCMRprSJZiyTwJW1SJFQRBd6vBM8Y3EWcYnpsAPsyGQDAL4W1EghAeQRboGUef",
  "key5": "4wF9VZqfD5zENdRbSZ1ZWV5JVNfp4zxrjqKCTFZy8S5reAkEvttY1oFk2XrvSpMSvfe3VKqLr2M4j9iy5XwQwao5",
  "key6": "4YkdRUS1WEbv6d9DEe6WaN4CM7CS85KfeGnDMwg8mZXV366LdFbVp61y883FNm8DnXBHumerDNZJNGKM4XDdtV5v",
  "key7": "5NixuK9mSMRX1YE7FkdrWBgrmWJBnDDoC9HGm1SuYXvzLxnQQemfDYj3Kmym48o9xuqVqxkd6ncEbAwtapb1RKbb",
  "key8": "2xAsict2Ep5kM9gnyqgUCrSVsuyKg1yb2tdopCAaFhQHpsNreoJRyroaZ7fCGaRaU7Jp95e74sEUPDHf1x6FzAQ4",
  "key9": "58cSoXN8YKX41KDX1Ypos67X862RKcqhEQQBqu6Sx8z3NnpC5C7yvgcZpCPaRB4EqkV3EpSS2BrMojWBNMt37Pd8",
  "key10": "qQSrGSaue9aQX5dYskeoWboKYjWZG69DjZopRwwxbBYS75DTKyAYfmmi83AAEgkcbWZPLaka1AHjRDFzYV9qTkF",
  "key11": "42zXXqX4NJVGxRGEuRDSMWYzBYdMAbYFhm6cHQKRCDydpnW4NECwSPCoWEUwVjD1XZLwydyBh7TSRnXTuRvbaFtA",
  "key12": "2p8bUwrySGashPj9YPTcHEhs81Z4MVb3rGxYwggBMA37Ejy4mBrK5jCXBYer7SquTz56nZcQZsHJ5daY7LzA8Udk",
  "key13": "RWYytKK6ygCc5w5yrjNqNo6StYChuqGcBm2NhXshqnbvSQFym6bahX41u1ft4mBygdcpcBdqAK2wGCPUEuGADPn",
  "key14": "3iYRhuU5siYhAGiA8Y7MbxhBUhvkrpM9aLoXh3DAKgYTnfYbET8wZCRPriQhE8KRmRzwPpXpVwjgcGgGn97DJzXU",
  "key15": "4Z6MNtrKLyaQECEEBT2V4izKhCGYPSKrkxaePZ7HHcCJiZyYgEwQDrAZbAmNkt7Pcj3yER5xyepQD8TPDjLE7fjz",
  "key16": "49vdfXM96ZCmTr9iAg6PRynqhT9waNLWW5PfsVaLhS1yLdmFYfHnLsFgvTHB2TzuvDEP3KCANRoQP5XrL3UVJE4F",
  "key17": "mSqMdqDcao3WZBrxgFv1yTYtFMAuknTBNTVrag848YQuP74KiRjMbYACNUU4CyvAvMBWbEqEoVF6pWV7A9omn1n",
  "key18": "tybE7iJ5Cv4BeN2rp6rKwFmN8iUeXbQb2JDTwGfJvfA8ifQs42tcxeyv9o1WqTFf2UjtKwRpxLcgYErW2GsmkNo",
  "key19": "XUfD6eRdtVQkqph9eW6aoAew94MUwvZ3H495mxFSUDPEjuTJYHkAipCLNxKKvy9NrEqD7BJoWrhMgHhv2bwKtYq",
  "key20": "85nMAfc9up6r6rjHir7us3mnyQ6dqYh33reT77Rd4LWTZk2NaW1Zoop5kThYi8ysnRttN4tGWDSjuH2MeDjS6r8",
  "key21": "y1kWoWHUV3i1snB4XAaordgFTfiNGq56QNQDsfkK8bEhp41u3o5gGrSqFgPZGstGbwuXnPiA4tvjM5SzHCnvXHS",
  "key22": "3qYBrFpDxa9PxSdLUcak9EDgLEtJJqbNMH6Ah5TRg56LPZPPpMbWFve786rn8evCM84HSkAEH3xeXXr3BxHKrSNQ",
  "key23": "5FT7Snts93k2dg7e6GiFEzFm7FvPhM1mZNRukQtTCgdjzoLdYfeptoaZe8FX3QdaPxipweAEWuM6bFeBfjU6jVF9",
  "key24": "2hKZM2vdUYTbaTbtvNoW5qZC24K1Wvw5kvF6qMtqYgNmGxJe1TMbJErKk2VwDy7UxuHLidKh8komxHfod6j8gZmb",
  "key25": "tSZ7bBdivuiE7NdiUFwd618kA1ZkdokNH8igUMdWmRQJi7Ld8migJzSMqCTmdF91AwzoXvxD7NgKuRZAWeojkpM",
  "key26": "4xcrB4CjYetqoRTeXFQmLH2ENTsb5qxf9oErndq54pGiWFJKSgTo4YYbJuXyByg2rAu1r2fTwNuhKJpSwqEAuLeW",
  "key27": "5JMgKXQXkwBQgMASEqMyPtzG2SjYmdi7N3k2TcVzdSj39bbw5QNDVJjthN6DrhExVNnpVcBGkt72D5bHDD4YVrZi",
  "key28": "5NVFLLEptyHWSVG9TD9M1tHDj6pvkC5wyRhjhfFYaWhDK3rrweXHmQ1Wn559xwmMdC3L6qe6fiWJfYEkUivJjDSA",
  "key29": "WEMiXUDTQSKGCbmRb5kyMeXECAHDH3czSSy7DoBYhHdrxy3XbQXxodZrJinDyyQ1KQxhrdX166KN6yoMhYcRLkg",
  "key30": "zNbG7UUoLSiqWm7Gczn2MmVU7NFgGnHU4N1zeAY677QSw6PuJdeA1FKbcCecobSqch9ngVT46tVsYtMdcwbnvDv",
  "key31": "2FG59Re3r5F7eVdAhrYPamcJ3sgt6jAVJekLCoajabJ72jL7PUKcuCcvfVa7cQ8UetcG1qs1EgT5hVpHDkw98eAY",
  "key32": "LA7gzSRytLpXreLFZtDwuuueW18Nzrq2D5qPyxwZGpi1q2V3T9HdRiyEefNr3jwirAMiP8vqCnCYxxHnr358p6y",
  "key33": "5v6TD8WfmfpK4brFa94k64GoZjaB5hBYhxgaw8fDbp4wWYT2G49ibWiM7BAYDBwEdtyx7B6FxwdNZcCRsr6i8aLA",
  "key34": "4XJbzKVrq7Ss7HsG3Ax312V5H9TLktythDM49EnraYu1eD7MGYUVaXWfTPrmoL5weXXaD9P1QLG4HAgjobkAfciF",
  "key35": "64ycfM6yeBuo9GoeNiA63Qo9UvXn2Lb2M1staWBYJoHraA8XjsoKXECS7hD6pCKphJkmYCiCaoZ3JN2cmnLMbU6S",
  "key36": "udLpVHJt17LK9njexWwwDNHpyASbL1xtzfvD4Hp37CaYmKkDaVbfd9qQwUp4v11THoTFViND93qaXso29jX7NrG",
  "key37": "3aRtLCr7uPCqs5zknpphZfNBuzoP3d8dyxiT8mYZ45PkNCGJnGUkkTrq55eXqKtoNLioJjT3cw3QyfMQS79dipvf",
  "key38": "22vJ6tv35YjjFi7qHS1o6Ft4WyryAn8rkxoQgRi5AQC2v4cgzGrJFjXtPGKw88TxWZGC9fu2DfGGtTXzDHJzKyYz",
  "key39": "2m7tbe6y2467Ua3c9JQYX1vE7R4hwW8kctvatJqrVt3nGTihFJovgoNm4r912DpexLUUBnGNQeVBgFGXBPjkN5fN",
  "key40": "2aUgAzDqSWd4c9rJrorURznHmxG9jiC5YaDZfHMwAvnigs9KdwA4a3gQT6q5ssABnbnhqPsSTz67B2t8o7BxbH8P",
  "key41": "2JWqdvBbBxhRkEirRm5hTT5peBFzR6kU9CnZynJUWTq3VDH4cPK33bdaiQvGtYw1hPh41XvcZR3P3QhvLHsF5pk"
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
