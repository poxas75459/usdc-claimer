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
    "5XcydiVrYN6JMZJBuN1gWVhSPTX9AjiHnm6cSQcDotaasWJvZCGmp7Y828BwYiWo6diFsJb171wg14BBfGrdcxzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9jDR4xexkUv6ooeUbUgbRba2cwFrCARBtPwM6J2NxFrBrRo8poLrGeJ6qwb6NWU6BVLoFFJU1VpphjLukTaEFk",
  "key1": "D5SsXahBURQEnqDNNpLzsqVaD7uZc9gbacdvxbhTvfePcPFmtWpLyPszPsvF4C2by6HQr4GQRFsnqk7RN9wdF6c",
  "key2": "3UyHcyEQUpEFf6kguxfQPi1Rw63e8MVuj7hCFX5PsRdYAYQcxwsyXyqTK9WERXkvsABPpcRewzuFVyKv4bYuywNQ",
  "key3": "3U2k4eT7nPt5YCxHrYm5ZCvQkMYtYWvx6DkWctvLSNL1HiMXu199irmkas13ZD7pDpSsA3GKJL1bYMvJaPxk552U",
  "key4": "3x5kb45fQV2bzEFC2xpd6Pjk41BSspf6M9fACcK4uwzY7DQQwytrMzncebj34R38fvmT8ntHCSrFihpvBxFxyiHp",
  "key5": "2cA5oLj3HQ4mUpxWXZkH32pCk4XWzDJWR5yXmvXVE12VPGtNRDhLiFKfm6BT4UzSkMxv4PPA7sZiodw4NdgXe7xA",
  "key6": "3uevjZGLL166WosnNUhuPHnHX9Qv7btkzJqiRBiD9JpTEe5BDsYUzzrkuUrym27bPSm8RcXxNXEX2EiXB9BWkHgL",
  "key7": "5fUQVtAxr4XW58tNKgDKGE46cKwz9zP3ptFxdQo5VpYxp9WYnZwqrLQax2E5xFLN1KGRKovEUVxRzFBm2e8CWaJV",
  "key8": "21XaqDRwHV2s8tjo7BXogjQ3wdrmMgrCUj4V8JiburY1z8FvGNXXHooa9yAwvKBQkrp2nTYhxxx1vbaBFn4prvs7",
  "key9": "3viqiDFCQ2eA8mzai2CW2T3EQgMnhNEANZp9WYBMdJJWaL4LPJCMv3nkn4KKYyjVBccRCjz4pPJLaTXgtcYPYPxs",
  "key10": "5Njr9tLxYkv6T4jGQJD4Asm6Ea9kL3QrAz3JmXtfddScT3yaocvZKxRqam6QxnpVqrM3hTdXux6hxj453BQNgxC8",
  "key11": "2nXqFe5RsxKXfPzJszXkU9BNjiTYnHJSMLMP57wog6bUxRmzFKocSXgGS31Lhba4cWmjtE9WiSijVjgBaiHdwoo1",
  "key12": "2aVLuE9Fg2KfQ4XzqgKW1A6jquGvGJuD1CFTN4JVfq6a3ZyxCbR6fzFQkQKrS2TrHbCtEKtnumcduCSR3zwg4nY6",
  "key13": "5Yyck1kG7XpZQXJMqdJSPsKjsa8rC6rMZyYSKCZZCuqgK1n2V9rRJJLWBCpNVmAedMgz8mRPJbmmEwmGcUc3iG1Z",
  "key14": "3iBiAYsUcq8aqchGqHfLs29YzkJ6fVMCAYCtMK1d65uT77kGRKgdCQAsFPuNE7TZpcNByvf64ooZ2cutTqPGtH6M",
  "key15": "5CYhxTcYmi4PS82LY5yiLQMShf5sFuM8zeZPndaV2RWF3DKJSUQX6ygfU8EMMyW6HH5zYJdcxzWVfNeMnywRkcNW",
  "key16": "khVarMxTZVrm5b7wccC5He3vV9tTiujKcm1gYE7H86du6A8a2hkrPhtYuDYaaBe5AJqTmTeEZDUsVvY7kCcUShi",
  "key17": "3UH6iC8jUNj9ZYGbK9KSSLKTA63CNhWKpKw6JADSakxE22PcPuWTEszsXB6bpNYd9XStiym3wHQsLsKFVG47Jtkh",
  "key18": "2ZFUcUrZUKy2UZcXVNKqG7RyfePAhH4FBrbdqWQf76SjVugRf5uaBi73TaUMAnHDHEUnLRMgdPjMbC2cUp7LFv74",
  "key19": "2or9k5YZzLHcWVj7eEB7CVzWBxAUky2UN6eTiRRoxbe9bNcVSCrSwqCWxa7t9ikkKeupE4Qi8zgTq1soZ7D6upbU",
  "key20": "4BYy1prs6VNNv7uiwRBo3L2mQa8pYVvSNJHzG7qMPnhYJUEF29rykQP86FxYv9wKX2QhzdQcTxKMzfLvZ3r1i8aC",
  "key21": "34X7iHbpFKvsjEFhA6q1wHaJTZZCNnYfSRuzggQC5WbH8PDrXMwJQr1YM8AaFmHio7gWhNXQvwC7wSbAAYWBweu3",
  "key22": "4BLkqYLWzjdCQxG99pHVEonodb36aT9YFujzmjt7dukN7MoEurS6mdgdfwy6y2ghfczeNWARAMGyDQs4LHH5athe",
  "key23": "4wEzYzExaQq6fyW7jBdx79RB9dtppBby9FJpvcCMHFnKxjhsiHXXVVHtEanLGMxyAfdFwgQ7HHcxAvbaeUCiLvVr",
  "key24": "1C6wqbXtpoTeYhwz6U8EkpgT6fpLzQs6BqPLzs5LAbmKXEuux5wKEoZwYezDbGYsEDLovftzwtH7pUgT4HowzpA",
  "key25": "5WQ4NuGxQu9t2jxnJRY7e4QSVfUB1MgCvb2K9rNvdrMdTBcFzDw1w2zzyGYd6K1assu3mGaUHWYX818BckeXeEiz"
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
