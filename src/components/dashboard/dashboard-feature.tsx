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
    "39BuBA1io6QDdTJSDUwbA6d1rZMGtWwUPKu47g37suTMSUC6Hr4KpUgbLthq7ZzJfAEQV1bAjVFjXv3wFKy58bNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjkx9oPMoMuxCeBudQSJ6B2A2ZUBeGGEbp4P4N4WFMWiNk81BzjumD1vZQJWpVo2VrdkZiLAqmMGL2mKZPE5C5b",
  "key1": "A7rMbxJrt6TdVk1kLpSq79Aj9fHFpgmcE4NzLPZwkmxP3MmEhCMiPVcCvFXErJ2gPhq82R15vQp8Vyh4Fta4Urt",
  "key2": "3U9kiP64YuUAFnNjL5c8u9C6ndLk6GEgnesgy5Eq1XJ4gX36baREkzGSnz3xNeUHWbxVUacXArYd1mkQVfBcYRHb",
  "key3": "3SdAi6AhuzQ66meyLyjk3ZQNEfaV2WXoEpCoQUvQNrK1LW2BSYfdH2dRnXofSepr4QecvQ8JiDuVDE6pYVWZ2E1X",
  "key4": "2dKR4LKRP7T6ee2ytZ6nZo4DPYv3J5MEpb1Mz6pLQ8YZ4LJzafVRUQjFrYKBy4BGrEyFs5szQNDJDGrrWkNieUZP",
  "key5": "4tga2Ya965PEDitEpA8rW1uC9PT7NymvuwcqM5t48cSGzsNvAiw81pCgEtYT5bFaNTYCTip69bF55H1krcs8hjxj",
  "key6": "3qmanFJQ6uBe6T3PhUDG1kPt7kJRUCcxv9ohaimhgmQLnAav5jnzCEnJkhN4wzvaW86VJ3tFYRcfqgMhddAGmaLs",
  "key7": "2QKTzTjmyhC1m2ig2R8rF2oT6GxcphswggDuNQ8jJCKfU78eZCNSet3irTpZLi1U5KUkZxu8dSccp3MC6yydmkRt",
  "key8": "53zto5YS99JDCX7o4zHag8ETYot79LbDk3cqTWvPi4r22KXVsE8YNMovUnWvKH34gcjzMgD1YVdACaHoQWgTMTCj",
  "key9": "28vBHgxuoMGpajzB4BgqTmiytzno17uV6Dg7B8by7d67RFxUG6SXbJLjEzcwgh6utzVtxZTUuuJeDehN7sgqq2AQ",
  "key10": "rc5GWcTtNojiRDFQZsQ3VMcbWRkrgNkAptyAZ75VTtbWyfepdB8SciGXpWmiU3DxPjqgXsXGFMqcoD25ANNVcVP",
  "key11": "2pp84NSLjM1fYBhMvGtKb7Psoj2iCUPaf8BFVwq4sGLYXdZfoVCSaQbY9UjtBqctarqyLs3JHwkT1dYNTRsB8uoE",
  "key12": "4EVxL6zRLWeTeNqoXBixsAFVytx1fPM6ykn1ZVyzED4Prbf3r1cyNPLKBU7aAJxZzP9NDPGAGHWbxwb1nMVMHtsY",
  "key13": "4xteTTtTZJCM7ghftDjsvkkjXsYgKvQ1ddd3p5EMSe3mjqMt1gYJa8prVC4Q7mF5U3doMhN87FKtUs6zkrGfeMWp",
  "key14": "64uqLw8o97aURNsb9gbCmAnsGNBhNwXK5C8TASjCm84TKTCxM3aj44MEKkM6Cb5iau3iqkZQBDBiheinbmXoBi7c",
  "key15": "5WwpCecwy4B6Lz52rMHDmMJbzrXBjMssxsSMRmhN35V6gvCx1DeXrqmSEKDoLPupL9L6wDFGA4aXuWwB23UnKhrp",
  "key16": "43XxnohYQ2RTWwktBapbt4FEZhL9ZkBckVXyeFx7MYGahSdvz8rCGrStJRHk3ZoH8Xe8dJecGkvkb84rq39Az6wp",
  "key17": "5eFkef7RpNuyrvQ3Vj5YpqFkKTRBf8QJ1CPaverHuYi4HeQjtRscDgygXC8VGfwDttWWHT1gPmipievrNsuhQZcP",
  "key18": "wCSdBfpCxgETpfWXuahqDeHxTHfxMg85UkdjQfJmPxirVtziZXweVyihLENsu4kkqDwZQjVQLWzasBgCYrGUtkf",
  "key19": "3kybBJUZMmsJm1xjSCMLgE7wXCmvY5nY9T7X13SPRbXaJsGQqsnZnLt6wizyfv32As5x4qMrebDyDfqyxga4cdAk",
  "key20": "52kK4ZE9nsYzzJht32c1sjcAM5rbgQwiwQxpvQDsQcxDrCFMmXwgdgMY6fM4sUbJtcknsavDkZqkHYQameRBUw5j",
  "key21": "iomh2BgxEN4hHgvh2KUFBDzzPTzB2HY8fLEoejYS1gXm8ERXUtFonfxifDV7Rkmx4B53Ns61d91KE8GPvffM8iG",
  "key22": "4rW7Ch7MxhR3i1JKEYTGujLxCeJG5XVn8a3Bprcgx2993ZhZGFvBmd3cEKqamt85jiCogGEw1t6jj2MSYb6LpeRw",
  "key23": "5CGKWWmkuP4Z5dUdKJuF1d8s3T9AYf7dDGGHtprezbBx7VgFr19vb3FKUDN1pQS7YpQqLD1h4jWVTk4UyTsRmvv5",
  "key24": "3svHPocAAp2mm4wFTBrVUkz7e9vZscBxn7B8hFTMeiEvkU4VhBkEsvnrViFCYowbPPU5FUNrn84bjkPTN3zy8fHs",
  "key25": "3bNrxQS3xrt6Awvs29myv5NnNBK31tTQgqiR8htYDRbmYNtnLY5E7m4mQMApEbeTxu4rQzxDigz37rA2AZoK4Cm8",
  "key26": "5kQy4Vvp3LUfyCsnw62orA9H4MAjMJUTuehVrfi5MbezFnFsN6NQqS5PMUusi4CAVx8qs4vhjHYEDAQHn5pnGJFA",
  "key27": "RbAwSVe2h2wBVUBrdDuwCyD8bsn9RcqUWYsmFtftTHVbkPbwxPSBNvXWK6g2c4u94X1GKbGWsBQxMgAmvkFC3MA",
  "key28": "LZtG6tvnYXmGo8UwEFX1JWXFwAWU7PR2V4zpCxcXpQ8rDZAg2HJ48VigE8YPEG8KQmoYAPbHzo6qKUsMZZS55mE",
  "key29": "2g1DtEgRyGDFEZXuGE1VqUwz4wVTA2b4w9Yze3tN6TrEefHVfs2dxQw2LBeG8KkQEPpXLwWVoYfRMDovnA9d9AAF"
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
