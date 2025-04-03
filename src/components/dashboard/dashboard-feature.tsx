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
    "fSyVWdXFq3VT5qSLdEqKn7ntfkztYVSGpEhgTfKStwKjiWjh8GM1vGU6UZhvweQLgaK5F1GGrsDnW3DUW5j81UE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4188wDDr8ZBFoR7mFWnYZcttiGhvJdB5G1Yqiya16oDfmaxwiv263AHmFqiEhnQePtgY2CYQhFQnCGzZFVVcLL81",
  "key1": "4sZo7GNnnufpbypX4dcx19jmTLLeq52cSVtMht9W2FapMd9kea5XRYP44Fqbp4Riw7EWTd6Df4DBWxr9hwyvNwya",
  "key2": "5ndXnHBNoSBTs2N5X5PGZ951Hf6t7MDaPqYZtqvU3PUfHSbBjiruRXaczPq8FNJGnWYMipo8vAB82JkZeanmRv1a",
  "key3": "2ng96ovVjkheiDHVxk9c3Tk3JnRmSg8mCsq9N6md4ewxSXtjzS22CkwoiYwBf5uaDhgJWzKvMarQWEKpzg5nbYJc",
  "key4": "4QvWev7P5XfiuJdEEFt2DtVBWLGC3SzFx62MxBBqVGJ7cfLevkGojNxdJrmZUi3gvLTr4LAhkcF7KVdyDQhSB1dP",
  "key5": "5ZE1zgeV7Pc9iBzLMKSU8kGFuTqkvLeRmfs34UaKVDmCJToYzVzk86TtHXUswZZ3E1bijxtTrH9duLFXkRj7yhU4",
  "key6": "4z8UNXEFdQ5pXCTXyZcmQP4jAmy18UAXkh6bQGkHmJrkbtZmakCVy7iGfkwk73urMrB6yfB8xSszrWugKR5LZmxu",
  "key7": "5sQqdb45bKQ1n35BWYpBbLwMPPgQWa93nzDRyrmwv5Umn3z8NsiANF6wPonRtGwfMqP7PfL57nk5TFB5MWpiHsHo",
  "key8": "3TtqKjwqhi9vXUZAv1DRv8Mr4jdxXBeGZCg3vayLHxx47yz6i7XjfctB7zgNucMvhgSDuH6Cmvhctj9psHCkyqQs",
  "key9": "4yis6i4cp9jeJFRxHbUPmDMprCnsVfaHrRHVprhDYwwAY6bMoNm52QiaxJn6j99QTSN3uoSCmdBztq3qXJL7itJj",
  "key10": "3dp5u4K4jVTcpTUguNetrb93woFza3n1Xtw5mWSjRj6Bu8si4grKMawT8BiV3jMZuJaD79ZjauJNZJARysuUrPFT",
  "key11": "5fsu2PKUJZPDaSSjeQYjjjvsnoGSREY1TvBaQBYQbdSuBk3fE7dmYpLyyLHTGAZx6TR8VDCm6eZqRUy7QZGuihwX",
  "key12": "5Sec8oKaCG8gu9G3aQhDCVfrrdvHfvuQib3iwcq6keoJpPE8LqywvyrC1z5jpnQGABJb3QDtwTAUDLchjRWtCmq8",
  "key13": "BhT7goekfki1p5fW7PCSFVGtNd6xg9QCfY6YhcZWL7UiNcEMxwBKdagWvLM66vRh9Y3sV8QfKLN8Z9Bsrd3iFfc",
  "key14": "qDZan38gXnPgmQ3PD2wKYqXF2CX5mjsttGyNvtWMsr7dWwT7rMtkHKpdsSfsCR8MYhHBjBGzopXPL4HfAK71Pij",
  "key15": "3xdHhFEmNR9iVu6fBiXpWRmQqTUQp6BNmBQZjdXccU2ME77szVhQxCkkXaxSmAZ7aQ2jk8eVbseLJ9BAPN3b85dq",
  "key16": "5fBk6RxeZWd5DWzzAWqCJLLLDHLbz3YB3PGWi4V16EBCdgPDiaFnPQmSq7w8YPhkKcP5CTwJ3QBZwL9knDJDY6Eh",
  "key17": "3ZXQG7mk9EijzKQStLYZceDexpvHBYiko3xmcWUtpgD8nBuvb3hDy5HkLUh5Pg44qcSMyEBpaGbTqfrJ64AmULs2",
  "key18": "53RQVN7Axt756vRKKvzW84PC5eBCYdSSL1n3kMd46f9r1oES4CvPH4aZN8upjsNxPxaiAisga9RPUX3mXXfrhYFi",
  "key19": "5krDv7pWsVhuTKZxJeqWVnWmh56PhybbccNXtUi7RKpfJa6drYsqtG8oi81RMmjf2ERubAMpif7nHRLzq6MLaxqF",
  "key20": "LePjTZwAUEXofeGqe19adwJbuRQcWZy7HQ6ceJTgXwVjurXgB2Nra9WccukM9QbvGxAatW16dp3pk18S5gL3Acx",
  "key21": "4MnSPk3RHYoLRcbHsHdfjqfjpcxeP2Evr3k6NqqDpaiNc1EnVinBXrGqsFkeR6WkepkVdvaGCoDwN8Ew3DnVQTWE",
  "key22": "5s9wTcsSXKvAZAQy96SHUmw1TqgbEuQPNCbVK8K4WjuBeRS9DEpmUf4iL6WJTqx3DeSdEkX4oe3ypNSBBanztiY8",
  "key23": "47ara5owF41PCYixZaxgcMUA3GWXdV5D4GKDzbGZsjvTAmgUsKqsBtZTsGXQUE2KxAc6CPGx1jBgjMuCQe988paD",
  "key24": "5kPrGHHLhqZCzjHMdmQSQQLCEwAEpx3d4DWpuuSbLngGAb1PEssnxEvJq6Bsp7iALqMCnhVgLSuHGkYk5ibGLRoU",
  "key25": "3nwzgkvNGQZuR4xdMqM4SapkNUGUKF7hUDAcuukZadG2Bt2cj2VJY4M8Squo8ksNcPaZYmTuXudc6Ff7se6znnbk",
  "key26": "de9T64rhHXNLSNqnsPsXvaEYZCenndhbKwEnrtThVeBzJ4s4rEE7LcPmsaKjGfChngd8ZUQQwkbqVkB3ykZE9po"
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
