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
    "4JTBwjTfXVZ5eKZj3ysnFuEeUk6vHLmDGDgpBrSfNkKSh7juHQure3Up2R5ZYmfqTXdnCVa6oyhqfYbw9KUY8P8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BvM6UmBaWkZXoY6ZoksrPaVv3LAYDtyEqKkPLudadbXG5shz9u9P3R7bvVHZur2sn5KThJNowD4ufLpork1ozGm",
  "key1": "5i6zhh1rVWaEM5BGA1X5FsAuFvAkQzS2Z2AajZvba6c5C2CTQ6LQ4PUHNbR6sVcY1BwmJ2zFiVHkrGMrMFZV4fGu",
  "key2": "3Z6P1kZo9RR99CpLKzAKvdmzjqQVkoYcqKmxEJX7n1BNkNSd1AsL8r15QbBPHZaGVAJ7tkL55SHrBNns6TuQd1Q5",
  "key3": "PAeUqAY3Fau7ciKzpPLPCSWLm3ubUZErU3VgABG4Dk3WDNpfregY2EbHRg5Soe2dpJhnrz4veoDZKsQU16TpZdM",
  "key4": "AiA42YGD9vHkQ3pUcNtGXAzHAgbxCibZWHYzc8oe32zUxx74xNk1vciuBXGM3EV9WhPBz5Yo55tfS6xToJtt617",
  "key5": "4qa1ALtD56Ldga4BjgRtH4N4mrmPpy7YPirptsUmknYsUTsE6hu5LJcubgKE6hjKntkcK5C5tVN6JZaAH55c37FQ",
  "key6": "S5srK6yPdXgWJWc2fzaMzKPsBpyqJXzocxd27TejCMgA1GvzukSsiScjxfHUVGviDwHiZhq5zMiLLhGCGk37qEj",
  "key7": "2p3UosZJx1K7ZV2xgCjLhnTcXi3HrRmkfSnrBT1jrgnvp9tN3aa71FxfN8cfAD2YCPFh1knqtfHPkYUiWiGqBg98",
  "key8": "36AeVaVrdeZcbsLh9Do9EXW5DpT2DqQsx9HjxVz1BkcjpkzsuaB88esMNe7ir5j3W3bdNY91yi4dpqYcmpjM9Det",
  "key9": "3NHNEriDsk3fUe1Adxk9DkR625FNGEfSXdS1SHSqrHPu3tG6E6ZoSXrD8rQKhfApUhz4nbUhiSV5oCZF14DTkTjp",
  "key10": "51TWXua6vDsTrFoicPe3uiBL8kd8TiqTzMsEwc7xJn6EZfaqXa6eU7LsvRCWUd4WVPAxXVmvRYxeaRYkqJKF2X2A",
  "key11": "yUQ2244pq2hiUTdtL8FhdxKeZ2mXskiift1jo9tbn2awdRxipYxa5VhhvWqSa3DTh2VmYpoiZNJgUU2Y7zwtb4J",
  "key12": "5UvX5FJGa9BwUicKYHsapY3FqnwLGyD4qrbdt46mpcF2p2G3gJVkwBagqxarz4uAtfaLmU8vV2KmwkXYMsBqjbpQ",
  "key13": "BWFB9JCoxL8vBShhKY1uXp8r8onLFDZ5aLZxyjkA7F3PYMAYEC63wffs3wjKs6WA3Lk95Nbo5v5uc7DcvZcKkDk",
  "key14": "5qNTSfu6dd6CbHaL5m64nC9sj51pGmZnGJ7W8LBt8curqYFCQmA6DK8sEuup6pqUUjdBLM8EgJzstry9oNWsdJWy",
  "key15": "5VJmaUVYJfL1eqwY6M2H5SpKQm8BtcgmbL1zsUdSU3sxuouMt6zgx2BwTGoytfDu2QRCLPVZgMzm4kzDmQm5fQXJ",
  "key16": "3z2QtHFMYvnBsxPMzpgrVifjhbRjPDBugyg8CzqYJ6kcy1sP7sWoMSTqFRBXckH9gkRPLpkNRMBwWMtQ5F5pwykT",
  "key17": "4DEz7rREvdZw1Aq7PDPajKYMCJGos9q1ahVNEv32UMjbma7LxmTdn8f12LZejWhPHn4ELCqQfd7krqgujkSCWd6R",
  "key18": "FBxviNUvDhqMYhQLLyhH3ccb2pGAESvxWFBSjjaiBKXwp1JZR3TqKzWrAaiAHbVs9Myi5BRFctEJe3Fv9H32cvM",
  "key19": "48UrUQkrEjCNhLYDiWgnq8A68NbDhram8aaHziJdKZsydvHEGnCZiwG2apMQedm4kvu7CdSM6ZJ5HFrs4TCeSLd3",
  "key20": "6BBnE7xgSaL5sMXgx25QcPqjYNEoLkN9WTXYqMT9Qv3K7tPRRa2MiFt516PgEw6B4TkC37UjBFQxZLGvh7kLNPm",
  "key21": "5MSiMPuPNav3WsjMx36CBHvsqK1Y7rS1dLK378yQtmxEajB4euwwQAa1LZ4idX4KqtpzPBmW5cCuFZ4KVbXqkEor",
  "key22": "5GkAxjF89AeEsZCQ8LWyjPNge8AGpP1pQASzvSnTFDXv7eXmgDz8fXV64vcJJFMfme4vwgy8scu3a4xprXrXRHUG",
  "key23": "4CwQWEia1T1SmHQqQ2YFWPByQZXFfFmUy16grr6NHjC6FsiwrPhRfiam8p1UorJ76YscCgnbvuJ6inDtviAHLPSw",
  "key24": "vZedBSrxmF6hmJoD4fb5A6k1tcy4JPU2NxqEtz7KYM2igsmqwMfxrz9Cpkjyq56zGhqfiNWVhouv6JUXnWyP4UE",
  "key25": "3mUzzdpXa7ryCPXkfHc89aj54hpoWssqnYVEUtFzEYbLGvgT2sJ6ZoNQYH3SFfQzTZBuMtVxZRgrsWHJQ1g9xzcv",
  "key26": "54BLv8paSB3uqu4hiGpGmBkQmQFi8Zxag5XvrCddcvTUz2yeiZ7CLSYSUmLq34TPRfQEL3rMbcoNNRHp6BSNhHm1",
  "key27": "3iXFuT5szCtq9ThhiKD8KPJ5vst6SKXoWUFh9nXzbsEqHysuyTLoRs4PVhCuQEQBHbmhSSU8JPZfww1spDfurEvw",
  "key28": "3F4ivBCoEpSTBJQgu6PiMZP1sw3eHSqW5hddKgvD41FcBk2pdE7xEgrYiPDztJNEDxX72E5tF2VYyjKufBZZE82t",
  "key29": "2pu4Muh241jeiF9XTyXKLB1YsQ9Ehn7i5EqgtgueLJGvAq6xc7VkYVVjnVFJ8XZHg5QuAeo4qtKRjAPgrNHXyDXG",
  "key30": "2dutr8tyAtdVFdUUXwSia4UTsnDbM9KXzv1xtYbJaommjw4yWX7TAZxetsDPCCZvGJcdiQe9hvaR9YnYmYw52U2d",
  "key31": "2tGqzRiyTmzFwgAQqBh9x7s3ox7Vi8ufnj4xcnWsg8GvVHnPgKBm7o1QvoGf1V5tSKUipWwSbJ5StKd6tzrc2ZZn",
  "key32": "XozqP6muwSZGbvZtX2r4J3j9ad8Ut1Kp4nWTyDVW2mh6LKULfyKSaFoK8SrePzChKzFmi2fGLKeKPe5CDoRAcGG",
  "key33": "uhAP4uf1ZZ68KHnbC8BKJFiorJJcXyuXQx5m5dD5w9RQzzxWdobQeZGSVrBd8yCb7q2eBfBTSq1iK3haY5FkV4y",
  "key34": "5GY9iWQnnkuB76PYh1y9GvzFzpVqjd4yt8s2fq6goEPQw45GhWkp8UGaBkFbco3nLo4P5oZBoQ44sAjCBS9tvhtx",
  "key35": "4d3kEv4xMuDTgg8iCTaDpYv5HgPRaBzqfNpZyq4QXpR5jYgzMoTFWwLtUafhYfusvKEoXhfyKKEccWsqTMBpmKVC",
  "key36": "3TH77m9q7HU2AzmYT7M27Tnko9EFFbLm6Xoo7Sf8yydrsGYY8kFmKZknBXdxELmnH72y99wPk7j8FH2Aj93y295G",
  "key37": "4K96LSv4kqJt6bYWYm5x45CbLDgRbnVLd4bLARCFjLFJ11GMagmrzPYtqpaKpu8ziSmLaG8oMjXcH8W6RxU8Le7C",
  "key38": "5JLqg7djrFTLkHDwZxoU2HU4WrmQF2n5L9EXe4vYfFfYm9ZkxkhLLPxjmDCSuYzXztw1vZFbqf9MxtzHRgcGLvhe",
  "key39": "hfdVd1fABFxBaCugqyiQ5eADmzkstMC6xVoN6WxunokXv6BgakXjEtAibEoK89xvwQBCcWU7afvvn8eBbTUWAM3",
  "key40": "5piRA85cyXBm4fLuXxMasoWmE7AbXKkUMG9SPNrWMbUr2KUEh35ASC11en3QNheS6x5meMtSAJ697Kyw7iR6zoWL",
  "key41": "5rucSfZgREa5hC2QWtXKGG1Eny73e2z2J7yWW4SbhFsprwok9bj9asNce5Ch6njD8dF2uu9RRoaNpZH1R3dbcFmC",
  "key42": "4id5WFtcfpJ2NiPg6dMUiNXbLc7v8nEBLSsXtfzPBNwckSffHKPM81xRD3rcM9FJaAzkNmcJaaWmmHn9KgzTv3BV",
  "key43": "46YqRAoEnCJAqhBw251u1HXESdMTibFJPzPcdZb2VYr1gELa8X5pLebMgYJrdPL8hxAtV5ZcyLjKkurZqNrxp24w",
  "key44": "2jYeFcdeokXzQBhuDVs8rv8keBMohMLi18etZYMNK3Qv937s1Mj7k3Ub7oZ6SWMPgfvjW5ZC2xtRm1yrwJuLAhi8"
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
