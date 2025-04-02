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
    "5RjyhMhVCTRQwvVrFaWduBxqRuDHFYx8iA4cMLhUtatVWP6w2D4xyrzUej7zGQSmk2BjbrGxeNsoqhat7ppsUYRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhjdkT5u4Cp3BWXGZLFRN3wenB19J6Be4kJpd6UqnX9Gg8yPe5wLrHy5izaieWjwcpBeNcbCBHjXMGdjynLtSg5",
  "key1": "3RKMihiqwELZBzH5M1fKqPUa1tVJvZ6Cbdkykf5YSPqRs7g8qLDNv1PhyNsbVmg2YCKAxLGQutTnAjCEWfZdxVoF",
  "key2": "5fXYA53zcyKV7eCmSVAKbQq6GsgXN4NtjJfSrqQeJDfgtufeYMbUUBkGchdB8uicWWDaxCrT7fDEg5ZfR9JsyATR",
  "key3": "8fmDDXnWjUq7a9G349mYryop3cuLP9y89SojGueAXezG6p3Rr661yR8VWZrMJN6h4ZsRz13EbgNiy4ZLTvH8ypK",
  "key4": "58eAXe1mNkJeFZgX4kAf2fYaTE29B6tLFCEUojn5oFPDcJFAprXZaLxTejwP2nVJzgj3EMYqQwYtjMbUUkL3Fn2G",
  "key5": "4q4jnW7L8usVg5yfb1JDv7w3vyLBqqH2iaA6F7npFyVVR3hkZCQNMuNeCQtub8tbMTTku5pTyacmdMDkWLAisuX3",
  "key6": "3rEDKzYMj2AHPhqiw72e8jxsYySyTzu4qZ5UzqNwyiEmzv1XRPfeGptPY2WyDupWaXrcmPJHQuX5fJbBxHAadcAh",
  "key7": "3RDfE3uD1EDYTkozFBBKWhftNNqvGoh8FdvsGnoP3T9zq9pwhif37sQNQE9Ao7k9rDGSiYBoVzVUSy25gFeMMgYb",
  "key8": "54NZFBExt3v4C8KBsKpbFxqG2jTNWug7HUofh1CKw4ACYbEuFLmXg9TURtbMmjSA9MiTSUcik5hv3d6cLry3oNgS",
  "key9": "5opxitaxSFhmejWPQ7baVkRYC3xTpEMe5fYf3UtLHK7D8YK716tXvdgMAUVVQ8HAdXF6SNUFaV4rzHGokcBybZyP",
  "key10": "4hNJ9KEFmA6w8tGNFsjAVZy6fC2JsHLRB1a4oEuoC7rziBr1GgWZDxsLQYu5NMKnWFhdVQTnZNcpxpKq53dwv4XU",
  "key11": "3NcsnvjU6Mte12dFCWt9LTfkBYXd7yrZByamsntm53bJ7LuWX37d4Edp6jhvXVx5mCokit5xvWJnoew48wqK65nZ",
  "key12": "PHR5RDBrtc7VftPzywvX8UAHwgozTPuerwphdAobec1azgsX5KfDrWR24xW3BXid49nQuBcbnJmfYfpsR2fKYbP",
  "key13": "5KPtHzXscLcW9FgrHjuJ8fmd6St9n2GAgisyDuyzVu2LNCt4BF3k1TUWoEUty4PJxeXzou8Qu1cdDmE1wgzidqDJ",
  "key14": "bmDE8N1nh1mDH1iT2wHdav4yc4wsXF2uPVg4cYRbDERQKYnPv8H5yiaKh3p1RwugfbFFTrqz7wZbvm1PZ4dKqGW",
  "key15": "57uTMmdHo4wGHUTBBwaaumkD9CFQYB5viJa7c8YhvTiB1BqqmGgFeaVxqa2j67zCKeQ9vj1FtnCDpSQ6CH6KCJkE",
  "key16": "A7sXDQD9fPjQ3rynZCnCz66j29Km6SYfKx5GxEH3Ene6zrk7hRBbjNpcG4d2BskDJmuRwcgKK8wGMFZSQZTGgfp",
  "key17": "2BPBDtJbzXh84z76a6gMjovjoqNDZeNSuHMDfwjDFynSPCCC3P2VYd5XWuYU3U1utz7dC5hzGvcP5egPEBZPxEF",
  "key18": "4kcyN7a7yXP4AGy7vuRkp8ZBD3SwRsh6kNcApypYbdgYMd3vKpS2mxEP93oWRbcbYCxkn6EzGuNDQDB7T5rShqCU",
  "key19": "3pJaYoNK9yqshukbm2CRiYVWo95DZfuKwVUEJHacfL9ge8b73NTesxR4nF5UTEwVZ7ejH1WcKgFfo1pZ8QoL4Vcp",
  "key20": "34v1t6SJazj6ve4NywRpH3m7eVrRuLcFdDhGGFF4obxhwF1uj8yVkC6w8MtyDLYsoYnwcSJWCrcgQHU2iSuPuCmB",
  "key21": "mR8hKuDw3JM5EU3m7dLDqHNtVdB5cQuvPkm9MX4SLVLShVH9Xc2DnicnbHEhoUPscTHc9f2yZnjwf5ETdjgQKwV",
  "key22": "4NqNAFA6Uvo65AbkaSyQVeQF5NwvUxBdRi98MQDdYkpWdh4osCfbuarskSKKTACerNDQWWEzbJu2MjGfpKSRtPZK",
  "key23": "3kLKtBGd9MaKAqqMKjA8XfzavAsGzBJ8qDyb5pVkzDmHp4xX3gpMiFoScD32TJqcHANAN4p3kKKPPcco5NHrPrHz",
  "key24": "2hgw9hxrVto9XnWxNWZxRkS7ZPxVUYcWxAKsKZVnXC4Y2KPuY2h5pHDGv4TMVucHeghneYscF7MmA19yMhzUuEm2",
  "key25": "3j2PeVNe9pQhNmNWoEzVCba5LHphAeWEXJp4t2hdGKCuDtNodGPiLHz2GyzrveAxmaw4khoJuoTmTtpXzPwo2emF",
  "key26": "53Xs8nmPs2Qi9AWdqSUXZhjBukU8S1DFA7ZciM9vF2g82uJGYriabcgVQz5TpRjh44Y6nHTV2YPUumjKCaNfei6Z",
  "key27": "2MGHPxrKVTJEpFUp4q2wSfFVo3jC8svHKUpdAu1oWrN5yrrt3BXvF7KN7qm83xGAo4hHfSrLa3L9ymvHvtutmiz7",
  "key28": "2ynJip97LVKH7kKJ3JbwhWfZSTJ6RtigFLE4VoH2dhgEsMfsmwCZxAiMR3UbcQMDBpdccFUpvSbe1pc3BK7dWxQ9",
  "key29": "3aZCQswt7m93qi9yEicKh2RR4LUyRYKyzhXcY1ViX7nRkV7SjbcuQwc3LePxrnbx3CYQkVEvD3VqAcyJoUrKxFhM",
  "key30": "3AkYCbhWKpPzRJ111pZhoZAi6U1PxcyvCdqRtvEZrUpbg7R4voHV1EtHs1KrBY3L7pHUQ3QFV7XQN9iESbNAoKb6",
  "key31": "2Ldr7MhVupso4gAzBPc5mLKB23Zh1qvgWyVynPKdX3QUxgm1vzHhBE2Hvp4TnMNzhNUghSC3RiVnvWsT8RDUtN5h",
  "key32": "3ec3e8YuDiy2JSsr2pGJBFGJRmWCsxHhswi1faYV7ZzTG4Kqf7SekuBA6PPKRueor1i8gbe6zpGdsERzSeKMXrbZ",
  "key33": "2pgv27MxfFQEcUns9TP2X3AGSKCxz441ZrnemVcorA9iPtYNPRsXRhg3B1whUPz5XCjVtJUVbd5PPEPmVU6Nyc2R",
  "key34": "fu3htShaYgnWKyEBbARVjdTNJBeYn67qUFBSLrU52TBw2g9WxxuhmpwiHFb5QeQd8o2EH4f1dNQqUDhEjHw98Hc",
  "key35": "2bh9ziLjLX5noHzmhUbwNCzvdymWvxkHmazXifikLppc4dYVXWifPMQcoAfJeRFGc5TxWS21qHPny691Zd4A1eYL",
  "key36": "33vuXJm3c4X9LA19hdgcwaZYGjL7Y7WSMaWsszzzkgjhiuuiSsKcZy6XFxSdEcKxJNbnDkPzoXZn4Gyh3jBXzJ84",
  "key37": "4BTHwcx8YwtozVmaeVS2qEoSRrBAysAgypusRWv3fmm4rGHTiAjiWS8Vz41oiw32YfR2YVDYEwrjN8wwmSEP21Br",
  "key38": "sUZV5oyvzcSkU5Jw3JnQhhSAgshgiH8eqdFDLyvdduks2uGJAZD3Hcwa2XphLGM3H9AW8gWrhNkJ2ZKMGs3MDpa",
  "key39": "mXtLPndW941EfnWWYHA8mPUuqsJby7qLhL4mPP9pTDUohcEe9pqQR2RU2jSqBTMWi7Kd41vu1B98MvzUe5oGmmr",
  "key40": "2oeDuYdXeAatWKRGG3Z5QFMet8ewwUdZSbtfzC3NPb1duteYwZHkgsLSgbdUGhaEsFyks2WkjBw6bDyfZ2JkvBm3",
  "key41": "3iuJYgdSxkpw8bVTKGE1aPE4ad78kz5Ub9pFWCZSp8k7ZH7ubrMEyctVb6Bqr7HDSGrBSzQKd1nYr8tsgjCrutvY",
  "key42": "vU6ZEs29EmfF41RjrVUGwcbBjzVyuL4eKrP5YZgk5DpfzK1XXVV2hjft2c2mrteV4Xf9iGG7467PQGH4ZyYHvbH"
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
