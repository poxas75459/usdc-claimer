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
    "k57pSdeeDR6DEzvifst8ViMFJjZK3RCSoGovRZxftrZRVJzrkWLGkYtkytiAzY6XVCdkmXrAXoGcLbrqVzetZxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P9KkYzFDL4ehrzMbyzYqcK7LSnW2V3aoG3iEzeoEkpRGEtogc1BMf2JKgXUCQjkFSF8cWMkzi5iUVnZnkMgX2xf",
  "key1": "3c57aSF7C1obe2X2AmAtYHdsu3ARrW5uFFW5nuLzxpE4mn7zJC5zdcstyyq5RcXK97hFFvZ5C7DsJgMTqooZbACB",
  "key2": "xPKe7dZDtx4V9xjtnKEHcTFGGK2nHXoaefTW61RB8UeoqdAzVL11tbGxMNyJh3nNLBxLhaJgFewZu1HRNZ2J2YA",
  "key3": "2w9kj9dwsPwmGLjU42Vn3KUDfLjHFbWn4xMKE86wWBVygr3w8cTFRdjFmTQHhgQTtVmuSQ76CyvXnLStQk86BQdv",
  "key4": "3iM1Saf4ztN6uWqa8EWPUasmopvaNhk4bqUGNb2VZvPKBPE9jkpJ4ikCCKtGQQ5WRDpDB2MLeG7vhqDBYuWGdYXC",
  "key5": "T93rSH3pXT64F4kFjhw1KtiC7WLo6n61zvQxzWKi8HthY4boe7kCWzQaHxFn9FqcJiuJjVoK8pLAyqySQSHbxZU",
  "key6": "4zhfTw26razvjGo9jK6fXKv1UQW6XSNBGP4LjFt7dvt2VWvFRPu2t8kvZEusLp1F5VAzcaSdnjYsvkwtGzJHeBDC",
  "key7": "2bd7kHdoQ6BSeSkxDLtRRDUitamCwQRs9M9Fuoip4R24GW5ihu9n7B4obVFnGnZqczemajqPEGSYVmmGfZ3SR65U",
  "key8": "GGR7taWbjLRyJS1gtwdv8YRP2VRHit5GgDMCuzUL7MAZdtPPs8XGbhTYngJHDXV8wJLCmRKbPDYvMLKFFtUGkhQ",
  "key9": "5gqQ3b4UgnF65eZacCJyVmbwzckuULKTR2FUZHfxMBeJyYTVQZ4TiXyhivyr2evDL67UedxmW4AehxXSgw2opzLi",
  "key10": "2MMwer5fXnnYAVRsDoAERB94cqB1JSYEmpKmCUHDy3qwHFEQNkBcEJfPF2XVhMJERS4x6hDnesRrs8PQYcSfUyRG",
  "key11": "YcZucXzJoNTJhbgJbJWKo84Xwm5jukGTnHpt9QnzhBhpoNxJZSm9Y2mFvVsxWaKvTYruq2Q3jibjjBX3TWujpnk",
  "key12": "2oDtLTBVeVfxEM3jdxap5tLjwBFmJ8tFYZBhnDE8embAECQtfAaVNzyMvVyvJLKQaqMfyVd7jx3juuefc18yzhsg",
  "key13": "2vEHfYsqB8SrXxZ2893GiLPe3obTGRBNUBVdtyiSGwaDojdTf4jaGkcTASGumb9k9bKGQ1xrJCGWFc9CjMGcKd1p",
  "key14": "3thUsSyzKgeEq2X7RMym6GhS41ECMh9JYAUmw2t6g33AFdVYDm53AwuNDQFZPuP3kVJtsUr4inK7CZsW9BJg7MCW",
  "key15": "67Bj3eN1FBrtmBi96tDNU6oxCNDnwWwzx4jY5ep79Z4gHw22jzJBGS7FvqQM4dhwnamv43YQ4trFdd1M9zTqADR2",
  "key16": "G3oiUji9uTwqQozRnmHHVeVo5eS4TEey9yaqiFwwpg5xdztKkyGACFrQDtW8Bk64cj4N6uDPByBvkHGUs6MEopB",
  "key17": "2Uyn8uXnW6NbBGQe3V85VFnHQn7SpETG3yUnjri44FRkCUFXqRU5LpW7VcWvfm173r5G5JCopNpJcPYMF8nd6yb4",
  "key18": "5v537fN45zZdNisKFK1S4JsoU2Cdrtu1jnM25W9j14GBjxAgXYwKkNRkmXRqN4nBrvTLfMG5RFXV4JLk195DdLVw",
  "key19": "21ko59ZbHfeukUnUXJykgVyRJV7boUjZkMPsciN6AQ9dxxwT4YewhPB2PbfxZr4zE2EBzRGCzSyfs6ZjpmEBNYJp",
  "key20": "3cCxE4nd2beWMbs1gefsRySQEMbNkiaJAwioU2PsUw9bk1RRjuZaLip7S1wkXpKY2Lg3TF5BnXjTYu7LcVhS2ZwJ",
  "key21": "5VadqpxmGfWbrmgwvUboG4VEDdt6MAWQUh6E79MtvoeUpR2ZeCyQuG6jnMqnxeQWj8BgKWvrPCj7Uz7ghHeBPyh",
  "key22": "3655YgwTQ1vkvqw5do4EEJuhJj4y1Wt5qGcKd53PDSRhTmFQi3od1SJnfuT3iHYBbauqFFf2N9XAGgG3ALVJhi6s",
  "key23": "2EADeXSRTxnngSwvbZGEHmhh1TvR2a186Zu1iAGXmHzh4jxDrc8QhW8kKq6dJfUHMzsMGkTfojuiWVuYaFLqDhx9",
  "key24": "5YUBpXZ49AKeRhqyCbM9qGcZ4KURykVoaYRWL5VgvfYvnyzaxiKCF7ucbeHHhwWzmdrVEUhb3ij7WQF2PyFoLSB6",
  "key25": "4AznF21HpPfDdABZd8hTYi6jJaQs3NQfcR343FidexVoD9eN5dAVoe7peWt7TFuK6NVCQWcRaUggQqFPUn9q5M97",
  "key26": "4SgixiNcnKhBXu2UvuGppTGjYxm798qKgvy7spMVT7Yu3QfRsfDE6FkBHJv7KnHEfDN2ydZfnFZoxeojYA44HAok",
  "key27": "2BHkBBcxFf6Cz2yJtoQyHftnHGyDmLdqsDf89mmA5sXoegtbds7RGyk3u6Lae4gqNfEJ3tszHG9d2md2p8NLCBzf",
  "key28": "2r5saXCAdLqWwmMMeeojRDzG9sMq89L9ktQRnVhtw8Czxg68MLcSSVmR1CmCnhMKPBY373ePV6YEDRDn3pyhXxGb",
  "key29": "5DoPac5S6fb4uwTakbUdAR8yL3ABeczbFpsNe9BKXGvVD5Xb1KZ2yiBuRRjDU2UUAfYyfSb7TajrW1CDw8haATAa",
  "key30": "4vRoMgrXAqZQ2RXSggvfifrdutBFAgvqcTFEGJeNwD6c2jbovr52h8Peht2sgXQWbhjCZQC8DastSpLHsHHqJJBz",
  "key31": "56KZDC2zFxWai6Wi1xrUZtj6hVzHRBS6b2WqT2gG7WdRM4fcxoemXWF6gd1NCmiC4JRLUvnHdy2naVEM2GVc7uYR",
  "key32": "5tqBnhv7NHeKCEx6FS6Dew45wqSkUNEM28DjM9hEqVgpXbJQfoPPR2WNWFUkKxpGWrniPvDrLthX4TYvLKEgv9hE",
  "key33": "3zdFGRW4wLnBR2moowafxx6d9uNrny8kbAKKkXJFar5QM2PaW9C2P9yf2rp8NmoPqVVgs2tJkGWoZbYCdwbUvWkZ",
  "key34": "VggUWpbZPAfzmvmrEeZNH2Jq3PwaHz3kTPmGqt4PE9qGwjHZ8Wv9oipTPJ8pqziaYEza2MXFVWCnvJdZoUkgNVQ",
  "key35": "3cAzJhxkiXjDKjavbZdgWGhP9jQPCGBSWji3vpUaT5n9A2fPmQt85avXhvDyCHN5T2VchkEmHYz6kgFfnAdevoJg",
  "key36": "3VwSzEajvq6vBAHNjM9iapnLhoSj2KBcTcVajEDsprhbNMVyAjPc4WSQLbUWbunZMbFY3vuC23w7hfERiZ7z76tQ",
  "key37": "257GVd3Kw8Er71xkL6dec6STa2uHMmMveeYVKAKFHM18vy5n9Zu5DUoeX3pjTu5jSnv1F1p7bc7GfmPLwhYFskHp"
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
