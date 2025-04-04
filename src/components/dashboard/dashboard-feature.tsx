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
    "3AQqM5eMr2p7DeEphzwbJPdAZwV92Eo3kufAuXM95kVgGabGwRT5BNhCddMLsAL8fhXQXeHCmQXrUUSZX5LQ76TU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfjhZHxoSLykQvETaVzkhUwjZeGc1o6RHchsaYDrSDH6Gf6tvQ9GCSEZeCLsoy6Q19EsJF8hzmNEUuipD5SWnQj",
  "key1": "4JFmsJEVshJGvJSq57Yxtdv63s8YBBKEqpWyDn8NEiPSA1Ci6tasTPrX4wcTgTekkBm2odEZVL4mDeeeirRurMUm",
  "key2": "3NRi721hCVGc5ypR2WDeXyWbLFqJQL7ejuZAKieGgZc2btEPGQQR6mwM6uRtRHcbkPAUuf41uxJUMQ7ME958z6oF",
  "key3": "33Nux3xjEVhTb7yAC9onDtPdhbLLGx7hzuccuDVKGDmqsz7WqUv91wPq7rFL9Amkqf3jGyDWwgp4tw1pE8bXZ4rJ",
  "key4": "2X83i7WEUgk6tuTBKesECCMLUWMM5hU3EcTgTcJ7ooxFFgaJGjtcQFxVhm6BfS9tX8SieLjDLYTcQzm8cdgBD1n4",
  "key5": "3563N2rhVi8Z9cfhihwVtf5hG5c93x3cBTfdoLTqYCwtdjpbF3JWp8uZaCAycWY5xfA7zm2VQ1NB3H7xTFFbXWcc",
  "key6": "34mSQnxNsAXuaa8EJYkotRdh91LDjMa8GM5d5sPqPSZKHjRkZADXVgeFB3Mm9Wp2shCSxisgLL9C2RsMkTkMK8X",
  "key7": "5LFRUnnfpSnH9cfzaSMji8t1daYuuHV3GVDNCiuDpLustVhfpRxkDrTm5Xy9DqopxN2qPTXHLYih1na5LYzopQd4",
  "key8": "2SWZT1NBpWY66jLToLF85jeWRvvQzekMeFhY8ecLYC8ypLtKVHHygczRQz6xWfb5VgwQf9gujXGXZCJwqavYqj8W",
  "key9": "27D5D4hXJ4cdQqC6Uhojih44YVbTxgALtN78VfXSRNvXQ8Y21PafhqyPw9DJzzu8zVe254x3usaRQ6m1Parzb8NM",
  "key10": "2yCTSL5RznrfSNibgWKaukRXP1iyVv5g7KaSStNywEmHVajzj1aLWn5PZPBy8ecWtj6KT2yV9wd9CeLuncr5FdyN",
  "key11": "51evKWSd2uLoLfXz3jYvqv1SxcCAr7y4iUBxVHQnCQ5dxJ2J29c7qYNCHW5pt53WN8F8D2up3Y3Bd7un8qy7Kvrm",
  "key12": "3Nq13CvMtV9cvDYcpqFdTUQYefEzag2SUW7fh2EWjdeiF6XnwWPVri3ryWrTnEeBN3q8TCBQ2RWSWvao6feeRyvR",
  "key13": "K5ehcuiuRwVFeptHJPdx4uSuNf8acQcGvf5AcXevbUNw4YLpugLvsHwDLBTAq7wsyUu2k4SLyfrA9wqWPqx33LW",
  "key14": "45nv1gLVbvUzcz3reiPvxmg3RkF44PnqvUocoivgscA6EDEzHkWN97GZFckKwk1csyQHA4qyvfyXvAWGADUpTu7e",
  "key15": "3K5jpisvA2aXXfVr6awSGJFWTpjpPGXPFZqe7ui7W4ZERsCkxzAB7q14yjHRAmRYapyxN7pS5AAcjVhToCdVRU2c",
  "key16": "5cMzuqGXgeaSTGTViKBQUM9EHteyCNramL5AsHUoQFf43qSxzQpkuFSTuhD9jfZwJC71fbqUcPTgDggjnHWs8auw",
  "key17": "5HuvsfLqALb2dHa9Wn2YVQfMbDsiXn6DJ2MY8HPcZodqDz8jM1a7XzWSBS5Z8qn91Juv8VfzZJ1cWQWDMGwZKAWW",
  "key18": "5AiipZoZ6grH9PT9uCsu1CznHoYTa1da4NGs6f5tz6F7oVeEgGkYVBgTofLrWqFqxrefTtVG8WF2LjEnX3FHjbeB",
  "key19": "52zTsYh4hf1SkuwVjPvbY3MX27knAHaqPehUgKSWFHVqG99gfTHSwxA86i9RgEVXtDTaicus2rNmADvtWUJWrdLr",
  "key20": "22PA5WiYMTZ1RQKFSujWN9XkUeksEixc3efYiufHfnC7njMc6s4gWZdyTBLLqkExZw2wt98JqKYpzStpz357UzxP",
  "key21": "2B86aT26uMyhgxm1X52egWj5VGKvaFWSHnUasCvfSLk12s9QQtwA1bs8Eg1pn242H5ZferVCy6gJiSEL8ju8mrkf",
  "key22": "3YCGySvZhVMFyvh7NEXn3GgGKu3GcdpCZedNCFmBbBn51m9vsxBbZnErbV7uJmc2EGyUjDbuozBaaepv2aTgjth",
  "key23": "2Lb1LzpMJXAwdEoDfxocPrv4B99HCDsf6c9ohLJv31mW9s7aQMwQjz3ugbJbgF5cSHSjLiRfUXV4KkErvQZGp4gM",
  "key24": "sueHVuH9YyVE45qtqos7YakV18BUTD8Zy78jtaR97rpedAjortPWTAysLJNnXLW8kDiWGrxkCR8Hgbdh7bSPPPE",
  "key25": "27VM1YpBoio3hWuugHa985jKfwff2J2EUgZJ1RUnrEeWEhQQThEkFf3M4wamAa7hzShZRpmc7VhCEfwTypMijUu2",
  "key26": "99anRmVZSbbqC9w93LR7oH132umbd15PZo2Hu2BYo1AEgmLxtVQ59ywSzhJCh1pp7DjmWhK6zE1hHvivx6wAHQP"
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
