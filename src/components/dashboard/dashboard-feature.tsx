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
    "5FRdx6cyVLDNgohTsme4iuVadXByCSq2qP8pZUxPohw95i8hUgx99AtmD8hLjxdSrowvJ1ixyzMp385sY9VKeGck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7PLFftjoAmDha5yLvjKmZFa68mX28uE2b8WetVMqxNKKGwvJRoUAhMcYvyV8R6X8EV4w1rLGtnCTditnLYq7X6",
  "key1": "2Bzmf1qB7DA77W5JivdcstwY9bS8D7kPpCnzrcsW4cJwQqWEYoRnYxCDRzvqZ1Ag5UvB5uGy4U7wSgXYJStKdVjj",
  "key2": "2v6cHbuZYgFt3yzZbk7r6mTsuBf8DgVrHVaSr7Too3JDbAoSkqtAWzR9NsGJFbCk2xFXGdSaMbHBaFtw856Ry6vZ",
  "key3": "3oXXAKLSLcxCEo9AW8Fb235VCp3GTgGXeCk6tqFqvvamT3Tpm1WvBQBqcPiuTUzqrDk3tmQjesvz5ksQ1zbHLdvx",
  "key4": "bcEKAmS65vp2BqySiyFgSFQFYqPq8B8obtudd9ZkcfTgEgzK7dmJN7HWfTQkxu6NKhnf495ngbRHdGgVBoCXxEs",
  "key5": "3V4zJTPGHVECc7k5tWXgXhhvBCSHbwiHSpfuSfxfHHqQGZg26geHgd3vtxzGu9SVvqo5Xi623PdzXcszamhkB5ob",
  "key6": "5Lp9EptXfrRmnRgxFjtZnbGRVWT8UtS9z6USJBnrJfzPurfzoMegt2hpM2FahLZ6qP1qyNZGpKqDksg7CpFdjZGE",
  "key7": "3f94tVCAYQE7TFQMezX6DaqFAu4cS59CqcAD696CfU9bqNFUhP1tvhUdJgFVjAQpKnb3PEybojan64LW3V7a1pnp",
  "key8": "5UPAPHpZL2dcupnQsGytatA8G7qjeFAsbkpgdCiHbFSPo3fuaPNGgE5JuZJGr3zPYMFSgcRBXL2zdAcHBee3jbVk",
  "key9": "5J1r1kZZWwnVB6VwgSfQXVYTLJa5QpiHRR5o4Baw12wyMJEtdSMVvEnFZrsf93Sa18fBufqAdd3SDj6878FiGtBb",
  "key10": "4xH7n4E7eMYpNwsMEv23S2ETb28t2DGYmZJBA4S4rEdhdtP2GMw73mWmGsW4rKFTkeWdMyKZ5eRgwJQ4Z61eXxpi",
  "key11": "4nFGDU49mFb3wwcmWoLzHXKC5Rz2vAyjMJ52Lq722VwcEoF2VzKh8ZemkXXHFM5jNe6AhwYZ5BnaS6Rz6j3KJP7m",
  "key12": "5RUqvNm6xoTQ5DuXMwNyqantZwtvtDcQisiWE8soNazrLJCJMw2nf2Vi1W4z8NaVxM7zRKvCjQEF88xgWFrDL3jG",
  "key13": "7SGMHUGsdUxm7eJTGgVrbC9ZfyraWE6pSTvpCQapztwmbq9fXJEYWtJceYU4tahjkx1iukpVQqjuZ9c6sPUJtEe",
  "key14": "5UKqw8GNm5aVjWPNuQhYpx2d8L8AUk7gSRUaHcCZbw6FjphXipwm7BMmozAJKYiJtGMjJq5KuoPiyLNoigvMUmNf",
  "key15": "4W1J3Aw9AT88Q6QnTC6nn7VbZat1Skuj8DNa5CGEkzTPGBZApcJgyAfpD9e7oFY8uTaVMEh7auZK5ALNHdQN33YR",
  "key16": "3rABQWgsZXNwNoJFDq5Ai4zUJ18yc9zB3GE2wMGsSSVxtqLMEhZgYPG57GbaP1ttkD5LojDiWgspTFAFYJ795iCx",
  "key17": "aP75JmuBAoRhCDLPcLHBwm5kWXDA76L1BE1UA3kSCNjyb426B9rs18wVezDKFjKqjnUq7RK8t3gzFYWpdRi6bML",
  "key18": "KvG6SwoPbFAGWWX1bRXQuQUJqvkHmQnSRmkRGjpESNnX5yurYwrMm8kzWZ53QnzRSLFqaZDBxe4mev29ufQZKWo",
  "key19": "JmGoL1f2jFGtJGcfrYBGJ7Bu4QjJjCsQvJz2LQi86L1wwMKTeCZyFJuqMqgS7KevzuyTxDGseeAcGBdnj8i3t5o",
  "key20": "LQkveXZDP4ALfNvHG2qYHD2GYhH5kKd1YqCVmZYLXT7bVQXNXwU3fY7sNjoSMcq6PrWRdY9Amy5YWv6aPEyca8M",
  "key21": "46v7jRZjHsiFF9KCmpLtwEFpVV2xNndjMM74vAWJ4WaXm4FbtbbvQeKCquRA4piXpzLMXEYdGqHA7RbPCG4s6bS6",
  "key22": "2RBvTamRAPYcw7g74dBKdfnanNEKzfue2zrBswKcMRfW1pH66YEXqz2KrPP7dnLvAxGmkgyNTmed7k6Q3QjFGeCG",
  "key23": "4no6UGovJ7xf3NXLsibM2R7DCHzEqQaE5Xx931Tz8K3Xzaytpm2CBwgs7EZxCH8DuWeRCmb3tiGsY5jkgm4KLjqh",
  "key24": "3X8MMvESBpWAqZhJp1ZERVgyP53RxeMKAmNAw4aEDD3reNypvC1DrEC7p54QVWk1CenVhbFestB5sD3j8XC2tG2S",
  "key25": "3x7fG6zCZi24PpaYoQxuXLLpd3Rvopvfow3c2A795SSwAAoqTYzFgZKfxSSsqpHdTFsYus59AY1f51HZDnC99jQS",
  "key26": "3dG9XoyN1NP1Dq6DXzDHeTwMPU9V8NLPnNzu3MMmNLVbuUuxrGnRbX5yY9VgYD9XRNC5Z1H8RU3ueL9bruXBdqSe",
  "key27": "AuDHQtdyxhCogxKhV2MFHUzaEJeMPgZMyGqbK1T3WBah9cNyYXFDNz4bTii9vgSj1Y2cPNGyeYKamtxSwLd5EtX",
  "key28": "4cSqwvkHVcpTJBtNWxTnwZFzwMGLZXKQ4L2AzswCitwvwoujF97gmJBd6ZPCFicpcjTXhVwAKLcvvW5VJTxpy9gg"
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
