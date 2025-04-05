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
    "D2Dsm9NUsmqfykLU5Qx9RQD87wuLMoY1ds64B57bCo4BqdEtgtkBmXfRhBAvmq8y5p1ArQWiV9aJdpgAvxkKMPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RFTrkDPvWmLBbm3R5RoGKgsdKJjR2uenjeFvoe6V5xVTFqUUnBVUy2NVNzY2Ztsb9aGQzVKLMRf7nvc9RdDyNTQ",
  "key1": "3iukqeegcCe1xrvuQzExXZFefLXNeVxUkw9vnL2GUqWvNfGY8PHxUdNDP9ftgazBrywFYhT16rnHimdEEPv3eBfM",
  "key2": "tC4hbXunnuwpx2oLSYNcRF5N47axQAEy93A6YrUeD51AEdE1veeBQnapC5XxwTUmpyTfrc5BaFXCHz3b9cP7exT",
  "key3": "4kL1wGvKHhJg15dEuG5UNdLMo3QHrem7mW3SNzN9mZsz7V5ePgPeYDgWsFkKKrCtBCJV3A2Y4NRXnVuYXKmTQQRt",
  "key4": "4R7sXVcac2FRAd7i5oCbfH37SzutWjSEFUY3fzWKDpqoiiHa7jxXXUYTWvHSrRSkzQSH1hYnEoSLbrwwoxfZFR3v",
  "key5": "46i1Ch8zk8u5GPGy5pPVgX53Q91eWYhTswFF1YV4HBCLJ11mnKRpp92wHCqouUTNR9CuEJcW9tPtSwvuqHpQfj6s",
  "key6": "658SYLFrwo8m3hMs5NivQGEL83CBsRcEdZw5FbvKynbYYHHTXWvRwM8JH2KPxC97fWKYo5V82gBFyEckNDqKNoja",
  "key7": "3rQohBYxAEqJ8qHMyEx1AF5ednycCy7JKdsxTZo3aNDrTowCo1R526LR6saqACHUMitsQbJwbm3yxL9WZPHtSKsD",
  "key8": "5epUmGvq8uDfB3JN2GPBw9oSKL4gZRLUQE7FCSkYm2cBvBMJTyiGdrpYmu7qfxVebaU9pF57bMfhwXfwqQxZ7fR5",
  "key9": "hkh6Qg6pyaD8snzPaR9mxvnc3p9NrB4KLgBxV7HSTnyCGYWy9zoj9MZA59rwkYNFXTxe6hxbKgJ1x615P7jv1Rr",
  "key10": "4sZ8KhSNX9zCCDDL7mEuU89WmdnftSA1WfKZU99j7Ri4bmSLhzoZK9wFyUUnAf4dEA4sotoZxCJqFuzrjs36aNQW",
  "key11": "4PgARB4z8bPu6ju9DJiqff6qhRB8EJFs6CPStk1QjS9nojuDnVFuxSTbqyA2oa1tZ3148xxNJnZKEnjL2QEX83tt",
  "key12": "3n6GqLNTANfqMx4Z8HVRJZceDgYkjcEwDxBytz4kc2jiw9oduqmmZNQfLm1kYoLYiEUKY8v15gz1AduP4UubpJ2p",
  "key13": "3sEf2K1nHdmWkL1k5oVzv7B7se3aiNNDtR4BuV8ARCxcYt6rzhnncyMp6UMx2SQbRSxi4tPpxPtg2mxTBN1L64x4",
  "key14": "3qLyHYASmXP48xzaTpssSNFNGWcPz9Az1ZwBRY7AL4XHsD4jgjRtw5FjUx4Ye1pAm4b5DSnrkE9qqZTZ3J4W4oay",
  "key15": "4crhJcsEEdTUQTJbuL18atNgCz9FUCenueJNYWDwFJyGGXuUwRtkWpUJ19fHqGFCmud4CGHqiSfJvsu5Je49Jeyc",
  "key16": "yiXC9ipVodQHYUbooAUN1wzm7Et8CUkibmRpKg5PPjr7cpXb8xDEj2Wn9MzhB3NkzzvTRLkqHvLtmmQQ4TTi41i",
  "key17": "U7UcCi5nhrrwsygTzfiscomMFv6Y77rWvZ16Zh6qeMGNyqtYU1d86oc5Kkck6xXubuTDQmWxpx6wFuUSiufmobn",
  "key18": "3Rj9q2uaBuzvTiXmyEVzC3VaCHEaRNc3eaXbC8sfVmZLrTJcxr3DNnfWaUhv3L1pdA8vQZYyuuVbponuPoywt222",
  "key19": "u6RBB26XQuVz1URqmvQQNYsWskEGVsSsqFXNFRpxVKF8c93ZBXkJicw2Ndr2grwwmRnpHd993fhBEgC99vGWwVg",
  "key20": "46vkWDefocpdkxuHC9Z3TjtK8KqwhfqTjgeS3aKDECwySsPzXCpVFYSkm9pVmBNPEVdZuBbjp2SKeht1Vw8WZ4u7",
  "key21": "2N7dxt8g2zzqWk9sAqMokXX3edpowJgjs4T6shLphsuNw64tkMSrzVeajstFZxLi4HqVWysft6Aumuh62X1hbSem",
  "key22": "3eiU4pcQNnZFSkMeYaWJSdXTXHbheC8tL46na7SMFnGn23WC4n2QUuxVijQEcf5a53pd9j6D9HLeiJnDgZYdGqbb",
  "key23": "3FAJDGrQnY8UbhEw5ShLVuwwViZEfGA9HdKXXSWuWVr2Y5cXad8q1EwyDXjzR7dAgCg8sG47LGV7XQBRnNNjJ4tn",
  "key24": "2e4wGeaUkji7SE3yVhtpxJhEw68ihc7PUU6ue2vzBXixh2Wx1EdAyRwt5WN62xmR51iKo9AD2pKv6qrLtTC2kcve",
  "key25": "2r7c8JMTg6JWQaoHudfGJRTKy1x5bYXzzHCkGTiCvFxTgJphDNJp8ditNHLHovUqfQuycS78ZmrW4gfBfVowwYph",
  "key26": "5RynGwq7wedqcB8t5HDeeJBtSJSYHXk6HZDSVTLoothmFhtoGmJjBz1GnEZeJz996FosQWSeQ2Qa2uUzdkuAWpAe",
  "key27": "5g9TrcAbMoXSonwXqXGHjamhZ7Xmnyzpb9BzLuyCkCqjZjUV8rEDvQP5L7WRgqZfjgiKqx6qCsh53vSp3NQ1CAiM",
  "key28": "21tM6qKpxjUUQ8SqHnsBYpyGY13bR3uQRhdG6sqWdC4A2vP58iT7Zfa22DAJbMAJv8qt1TikkBAmiKzR1LNYgWao",
  "key29": "5mBjuge1FzyABr22bBLv8KmHEDhq5gCq1FuTUbTCuqSFo6UBRcbvf8vt18F1hJe5WvvF7js9MJaB4GCnBdFA2nCo",
  "key30": "9Xc7yJkBjm6Kp9KoeAhtB6x5dtdmeLd528vQ96u78QpP7DWXb1pPJXjzFxzPGW4tDMfrDT8CAD19e6VSwdcJetN",
  "key31": "5CoFSaaxNApyAucYwvJnDha51ArmHHyZmQx4T4g3sk51WRMf9GwXd7xcGnvW8Cj3NmwfFP1YLwoiUPENViBJCGCK",
  "key32": "2Xsv37x685SyX495cT7joG9wBreKrqmbRaP4iEPfEULSG18XT6njeBSvoQxVpehapAvWNds2tY3kVJc6PkomBoAZ",
  "key33": "3oEkFju9JyYhRWUg4TaFzriE3L3XLEALFD9mMGwTnWHKNPFRvd8Xrj9weEJ9QHmBLwAfNbDt1TU7j6T2coiKZ9bz",
  "key34": "5dL4EnEucXtzK67As6tXobh3W4J8piPodLJM5xTQSTGRV6Ey96hHzeSKeCZzp398Fsp2FtXfRY5u1YMEn3bLJSVR",
  "key35": "5QV5KmVGGmJg6R9FMBu9HTgoZDPRrHViQuUUZP1DmkvuCGKxxVhkvqdCBGwQMC8W2LKYjR5CBKZQvbcvTtBBxRi7",
  "key36": "hXCUkJmCFMQ3qyoeT5D1MLhp1dsRHiahvN9bTqE5WgZtK5A813xK9N191XCxRDPuezAqapV1iEuoR8oggAE3i8V",
  "key37": "M6cjgSgaSSfpN8b2kV9HuJG7CR5mFcZa8KBybuuMkmBCkYy1KMVnXmhxDJQwMc5ruQZW4DEGyyTrGDfxWhuNXC8",
  "key38": "2xwB39c5ezATDiSzTqbL8dGND5tKZZHh2CoutJ9PME4iwa36vwKSUF8vNNZtg1bEwZxCjC5n7yH9NZZEEZGWLrXt",
  "key39": "3pyxow2BhxEuT7Czuj2xBFPjuZiSGAQf5sQkFSfFTvMVbUggDTvfSWjZ49EKQdXsaEzCSiXqn8z6szfgzZiwX2Eh",
  "key40": "4vmXHRCZVi5DgPj9LJmeqGAc1Eoq7QEbMTbgTH8d5bF2MQoFG9XEiEU1imZYDT4D6CdWniBJ46BCEog9SLtXxc7j",
  "key41": "48DKFHkKwhDQfePRJUxdprYAUCxcc5Ka29GLsDYH9oCpMFCqnpv7SQiq2mrg97YyG4XKDgSYRPwL3PnBz5B9Wmy3",
  "key42": "5cCvctXtLKnSCphYBD86h1hdC3coNgaS3Gw5gTHoBowpeUZVxiswkFHzQNZ5UeRe1kTP6XjEdn4ZYQPMgagCCZaR",
  "key43": "5Lhgw1XG9vEHxbspDvotdvN35dk6Wev2Gs61DUXWKxu9TLCdKghamKTt2NkgJrD4Vik8oGkXbhVygZVZyAjWCdgo"
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
