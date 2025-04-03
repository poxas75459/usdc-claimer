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
    "5wpgcEvfN1pPjtTwLg3dvdcdGuU3MWWxkvwMzDtKcuiRXR8LCB2eoBUyzaGdaJ6xH7eugtkcHufgkXdFsGMkSNWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSAgndcN2G3p1QA1RXTVE2ttBi5uvXUenwfkuGUxwMoQrxntNt6cdYwK5ZBnNAthppSaENefNNJn28FBpxU5CNN",
  "key1": "5RFU5u5WZ4NFXnuqnjfTypBLfCEGQzyeeZG88jbM2PYV3vf3QUx5N7hBEbEAnbTsASTcduGPwwGEtLn1NBkyXRGv",
  "key2": "2tgMeUk4TqEbNXcVMkrAyYZS7CUCbsTDufxNc9jhFhXtWimT3Z4NdLLjnph24BoUJ4fNxUPHzTFsuFbp343AqKuA",
  "key3": "Uk9S4gWrTMwAj52mUHhvcLDRbEXfp99jgA4Xj3gfHYDfsSXTJNWPN9hFuc3yg6ZnLzwzVxBeJJK7qq3zSwD6RUG",
  "key4": "3G8kxpwqZ45yj2v2wEuow9ftXNNG93v8H3unw1fkcu6FLvapAsB7B8iN6N9AFGhBqbQRZzcfa7376HFYad7HbP6d",
  "key5": "5cabQWTuZFsw7t9HFzv2mTvx7wSAop949Vx5JrcHvePoCehn1VNcNKA3mMeLpELVovE54K2t9vkihBtbJRuDNszH",
  "key6": "4FFyg2x65NmDEre5oNPUZu8fagyTFWk4VBcwU5HiV7EbRpEGjq8TPMYakL8j9rM8oyL8TXGZxPjfNDbjzqrEfVPE",
  "key7": "64nBGNVEviXpXQV7aZ5fta4VxATZmCt3broRYhGQMxmxHgoTVsaNBqP55TyKLKbmgTjaEXgVK7nof9SeonDyeTwx",
  "key8": "4foJFq9hnS2XTxjtyyTf6mgLWoGT6EHoMau8DJtkbKvzruoxpawQs9UwydCXt37Yy7xZreWkAyPL2KbFg2yKFpNf",
  "key9": "2KZmVtdn1bmzR2S8oRKZe8Ls1iVvPdpdoBPaACgoJgWCiKbDQxXPQCmebX8QBnckbGwGB4C3atjhfHtPWgFYN86T",
  "key10": "4U6GeYfQXpHPvWE9uVmxUBPbpNDuFxx8vbRYCb6GCzZroN2ZXtWp9dPh3dK2rKCqSbr7vMQ1pYKKPgWiLxE2ac6f",
  "key11": "S7NTReRdPDaXeRsWtjrmTP94KkDBQAkRLBM2uMQKfinX9fXY2EJVCWMtgDXX5fRq31H5C6jaCbhp2H94GXUuq45",
  "key12": "3XzKqMzJdqua6gWTr2TNRKga8XaHzkSie97QTq2P2Anno8irt1Anvm8zWv2Vns1KqhriXN6CU8pv3AzguTEdfYHS",
  "key13": "4oHHdAgBP6GJUAJDxRmRMPLt5tfCjnERgWUbcMdLBHFwjE6Xtt5untPQxvLisKGDBwZTTDmigwjLfFFbDpjT46DF",
  "key14": "2ec84pog9Yd2mZrHzeyUZBKet3HzXjWGGNykHobUx7o9BG9T1GwPTJL6TBLVFeDow7m7mQjKZ7WwD547yoWjiPtz",
  "key15": "5B4AU1oawie2MVuyfHuUFAzDBy5uuNSa2H4j9zs811bCXmnJX1BtRk4ipLrHWD1FLmj2H1ddSkNqnV1q7anoMbz3",
  "key16": "25zFx81zgFCFDrcYbeppRxJzieGhDMepnxLdKHytgegcqdRM6a1nuekY3wAd8hXqZyy7hfFSaBWGXq4Vxf8ibDqu",
  "key17": "5ihgiW9hWhL5hfZApYK7qc52nMkW3FvzC3wEszZV344pGuLugzc2b1SFgrPvGjLf2XXS6TEJ5mQfmJsbb3UkNQb6",
  "key18": "wSUMCHCGq3tvcvbZEjnmfUhHfh59kGYG5P1igmL54JuxJC1Z8gJF4jFyGr1GyUKVnU18jkn1n3ERX5BMpQxJJXt",
  "key19": "pBUEEnYu2zR3bavbR1yzozH6pqhmf1PB4neD6oqTtDxSzcfJ5X1HP6hRgZCWP5z3hthfsqsWcBPzrKxFx6n7vKG",
  "key20": "3KbubWXVNQgGt5f5ZiqqpbdkbyFck3jDw2kCPo3gSuygCMkBZnZtFsu2MwQE1TnNnrfJkVTfgGNj8RL4rXH43V4g",
  "key21": "4LDJ5AbqBqLRZ79AYXfDHEpdTtRNgZ3oq65fs1SKyYaryQj1Z7A5fEwEDd3YsqkeNDEYfmNDcaCTJk6f3xDtcka",
  "key22": "2Vr3bwcikvL1CABM9YZSXT9GgU8VccGFHHBJZ7JY4Xb7MggPkxSVHGfjHefwjAPJGPm1SLGv2emb4rpwU56haEpn",
  "key23": "66UYZexEUFLNwwGwN3nPbPwgEZb5mkPu6SNXoUQiMUkyVFyLtECjVQm1981AHHPYmjZJGQ4rDo9fanZTxm1Pjc6z",
  "key24": "5pCUoWuxMXYZm4rER4cpVWZimLw45ymDESiQKyJG9krUawzxq4PuqjkbEdayAHL9ZZsZuorQPacEoLGDqdKoKdar",
  "key25": "63Uq6Y46UJ3jkjDg9Gw4hr6ucQrRcUtYCfmj1ZTD3nPiFuiHdD49AgGLgUtcRabJqSBhDFAPWWo6jY7R6NrnsdQ5",
  "key26": "6414eTfKw6oHL2uxkDueT5N1fqmQtZgHSX6GUyrXJh8VVgdH3t7rkvBk9F6N34Lnr984kJKR6pUTUZQNayQmdKeE",
  "key27": "4ZxB3a27jib158biBQS3ri5bJmKCXoyhZkJMqYLdRK8sEucN16D3YpZBkGXaDtVZ1yjYs3bxnPszxcLX34DrR9h3",
  "key28": "569GFzfoLpxhVNzFqbitZuZPkfMLtnds4MxmdUsEjfrY1ePjumXgvhZR5Nip4FysU9XshiCSufdPPbDVitDoqU9M",
  "key29": "zRgRZRYJsYqaUE5afi7bzBHRTRCxppcbFJNzGtQj2HZkpmJnppax3pjMYFNsq2L3Ajq7wqvsVRT3AGQ29Ut18ES",
  "key30": "4mXLkAub7rLKSSay8AYYquFUvHPQ2k7Hv9TTScawfrePMETo6VAB34WnQSF9ak7RfQpi5p4zA9j2xp8biDVHhQPr",
  "key31": "5XfydGC9F8aMrVaAtv68brwTML73AgW6nk7dK3YxyFmBKYuwXPhcg36314sECR5434PQ5TvtuAYBndBL4QU3f4oH",
  "key32": "4nb965xnecNGsU5dEkmgn7fYrf1rZNxLqN6xhHW1nGcu3cjHhejz9iZzopgUtCgso3YWQmVmpyDji8yWNNGKb9hB"
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
