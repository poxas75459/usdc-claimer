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
    "5KPT9oo56ubWDUmLA6XsDgMY1k9w56fuFUN1FRiG1oXoG8a4iA3Wjf16mQWwXVgHq6tW96hm6eKhQbZamRjTcaXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54k7h44wU9fMpTkCSPvvZsKK5NnUE4a3rCwmCsx4rkarDp2xhVcQghNRkYw5QS4uaDc5TXeNW6b1u9nXPcsdk7cc",
  "key1": "5bx3SBzZjwUXWqydzwNHyDoAPpggcsEdBc9b3g3GKxizwpDinpuLrf6eHktjR4oaggHfAxABxTn59i7AS5m8kHwp",
  "key2": "4yXJgReWhEaLuKYQrRs1MuSe9V6Mt4LfLSJ1Yi4SYk5V1URS5WsEp594Zq6hnUYJ6h6N4UFHeuhgMgZYutKmjfd2",
  "key3": "4vgn5sVbYuJXWJ4RTfGrZ5UeFjXFktdj9o6ew74MfZt1CSB8DEgpGPe8hBZSxSSziAQzBstxUowhGuehjw5kNGFZ",
  "key4": "5Y3PPafrPQaiHgV7174oXLsMYqScg2iSFXnXh9hdckPfMNFYN1MezZS51Bbefi6bim4v8eDrY3dPYsiLH4U8oZLS",
  "key5": "2tPAPCd14w3C84r4ecs5nUDa7DYqt1W9d3CREqPdyGLGUhRzmRSEKGrF3hQTX7GVq3ZYBFFa55miSwuV1qf3Td6B",
  "key6": "3hqDpaGHVUJRw1d9PtjtSUTc6jZHeUKF6289wodtFNZrauV8f8zhLDDNFkGZy54y2qfHHeNTXufNY4sqku2LLnXH",
  "key7": "2DJHoTyB1KZJpLeCwh9eDp7nz4hBXZpUGque19RxP1GBpiza9L9TzEFjZSZehs5jRRL8KcJNKkX4KkoiwvUSMvgM",
  "key8": "2rvZqLDZ5hFZ4uTRf1R7YDfCiJs8E4coMqGkN3o84PFsypXLyjRaYoQAajwFWhuuXDEj3EaEE7uXrxUphQgP2Sfm",
  "key9": "3E8e3tsCvFHhctj8783XubvApagPzwJUmpe67H4sLJqPEWr2H6AN4N8Lqp4oRteNhomyLpKzYRR3NNt4o3Xx8yNQ",
  "key10": "5aBJAfha6JjWkfMSgg12GtdYjDfNmbxmjx1FmVfC1CLLKnkKh2M811jMFaHtV5gHEek4d2oBsK4QxFqb6YgA5mUn",
  "key11": "49TKpyMGt1z432Gqm7MeoQhmLDWJC5vVPgLXwVvrHmbwQDmNExo8FG83h7k7QqrWn5T8BdUWeZEdQXwzjCJaEeMN",
  "key12": "TUzrVWF5FNbowgX15dYRrTTP615Lo3t6ZeTqR5uMmywgrSvtRPUyEE1MQAXTCJRQ4uKFhG3Zhz41s8u4BAbKKnx",
  "key13": "5YZoWSFwxpBn84LTMUsTy6fFJv4bymP97nxhwiP84Ahqq2x1Nz5JmrVeqFr6xg8CneJWgWu56VgeXaUW7ZyoctNb",
  "key14": "51i9gJ3FGsGhwzMjJYNBXpW9ajJ7YBTdXwt9dLxh5sEqJejjGiDCduJpPmbJK2pQdkwTpqwxbY2v5i2HCo5Wqu1B",
  "key15": "4CSVC9nP47tVYAimHJVkvaaQP5JYoG3omgA46GKCFSJTch2DKbyviNm4nKL6ovtrcvCbgUtHrjfa5EBxL4grj4mU",
  "key16": "2KMPrm97Frab3HJz126kiLQ344XRzZaefPmiZrNxijRD3QshCowc9kf2u2LgoDToNEKGnXXynn3rXFMjemVzsaTr",
  "key17": "5wuQn42ZBb8Kz4aKvhVvgknXi4EN3K8MD1u8mN6DHiRA8kvSkxLiKQ8gJhrHFhCd2DCZGTZm5H2PRNuGkEbRipTR",
  "key18": "277SGC7gCTkJhE1ZRMrJxJVQsuxpm1zax5Jmjc7zXoBUfB9wH6Hqf71AtMfgxdzCnYuypGZcNEwiGgjtaXsqZQAd",
  "key19": "5hF4fGTWvo1nYzuiGLTEwKj9muhHykLgwBqe1h15dUuFwTcXXnQrHEWLPXGK9MXDa1MeH4LJEAmzQdefPXyoBJSv",
  "key20": "2XCwGmQNpV1Zypied7oC3Cni1zaBiGzxQiqTwth6qqg7f48tBFnBycj8wZvKje83Vu8ggwifWio1gQWKrvZoienK",
  "key21": "Eotca1Lgtx4aXATPWRHD4Di9nueLBEgVDsmgA6rt4NkjHZ7ezNkeET28nGBPk6VfA6opSH2An1VKdBQn6tdHiU2",
  "key22": "52rWPr7eCxkeGCrWmZNkqL3Jxb8iREm2psEhC6cAe67e4e5dPbEz2Xi5QpLoLgmH2Sj4dgEzHN2NkmwHZbzmK8Dy",
  "key23": "4WLZ2NvCqgyieoHcwBzPc4YoCVE4uTGbTP7W7qoyaq4HmZFDfD87Pyjf39QeZmhSaANKxtWWXSJz3aCsyMBrL7zP",
  "key24": "4djsDoUfNuo1aerrLt2QpQdbL93w9LBogyqY1w685NcDoJPixXf8ub15BaX5gWp5Vov673SshyJoDu2BTe3Lf2j1",
  "key25": "oCLkwPEXAoCmPzqWDohJxb4wgQnurm5FYJpy7g5AdJGGqFC1AN3z3vu9EfDxH1gKu4cZtPuvGrXREtj3TSaCVss",
  "key26": "5svmSrnCucsyVMQHbrs4bFQZGSaH2gvxy4eRHQWoHY2n2y3vhQAY8QsX75WkLHzLkDZ8Es9HhgZTvo5YvE4etY2T"
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
