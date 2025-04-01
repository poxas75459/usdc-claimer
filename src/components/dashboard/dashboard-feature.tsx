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
    "82m2ce198SKAi4husZYu6RXqBC2zLtop4HpPnNi9HGt6LHo733R8xMet51EgfFvUHFUrbzZh7NNVCTzGVHw2zm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v6yDWp4RL25zKgcgXmDt2g4bqr8Nacg5HUGbxgB6GW6LUBCwrMkXSDmsdcPmU6tYKLhT4U8yaDEpmz3gcxVWRnb",
  "key1": "27M2BVymrmMJN9BqWZpQPksdenKgZXtRj6dJWBLsMyYmQRDGMXiYUEBxwhiU8KJJch2yZNnfZBNbGRGB1P76pddC",
  "key2": "3y8Xjuo8hfPN8HsbeVqLW8X7anFCg2dqhKhnFoUwU5SAdsyPRnYPTWTQrBbdh1simd6VzYDD4a2R89JeJNsNXgmD",
  "key3": "dPNUPkhf4tTwdhdcFNc8c4tMJAspMTpDfdX2sFLCQKenjv8HabKNguU5ZVC8TxWA2tYyyx9gr4iL6jw2wq8Ubhx",
  "key4": "38WwBTa1dZkZZJ54MqG4qJTbt4WPyiV5wYesRAkBREAofkoEuVxDJnUSChdSeX6dFoAh9deHgbsLbGZ8WW2WvLvp",
  "key5": "zcRupBv8Zhi4qwWvYL3vbGyutpK4YCzpHK66sptgwWCUAzoniRMwyKUNfXkNJWvnufXBwJucHCdgYg8ssbojQjV",
  "key6": "2qPQB9uhtJ5mJcMaWks6q1obeaAKw8skqXH1ZUxv5vMQ27p42dxGtbTvVRZ6vKmdnDawHBmxhZ5qei4RsKUgxuX2",
  "key7": "2iUvUJyK8djVmbDUQdmQJ2yQMsy9pRSuVk4qJT2QSHoy7EkKMSnq5RXbunec6bMWdcKagP4rKK53m8MiYRHFmvkA",
  "key8": "4eKNyq3yKBjKQQgkdxgYn76T4RVPHSD6KHPqstjBng4EU8rCTsEpKYNHKYxkDE1vCofz8WAHfqXX3DMqiAqb4T2R",
  "key9": "5jmHzsCCFCiPpUngr3sBavQFnWDWZn36ijQGeBvS6XBRC1BngYBGTUzYogMCvSpJrT7iFJnKen6ooJoEQxFXFZhX",
  "key10": "5sSwqXx5XgpWkyQwzCi5uRpj9EzhtvdKKPqSAbNgkWVCHWEAk8BSCuyJ3wUK3v2eLmRcdcVMiKkMQqsLkwqtGtpj",
  "key11": "4ja1m8Y8a3LNmLuNQaqmoiUhuJo7vZcSQJysEZPc7FMkoFRFEPySuYiisyV5zK85Wuc1zwhbmUkUbhUKvLirt7Ya",
  "key12": "5Ln4Jjey6em6M4KxieRD6esdgydDttceQE94rLrkbMMSAH5Wz8DCxLG6aLJWXm8dakDc9fBJvn1eSKzfXq71s1tN",
  "key13": "pj1U2Kg12waZTfvRTKG6xssWxx55S5UBGTyhpwozN8xpRMP7g26v2sH5BHUbwNTw7NKxB7weGR9bqbcxx3Jg8Tg",
  "key14": "5oJGqV9XkX6HRdvBqJxVzkHeBKjnewcVhUrCpUjysSCWCtTLNMXW5zS1fmmYFncDKzyeSQ6D16KEzJ4bC9RfMMpn",
  "key15": "5kXRJhXxUMw3XHRKQA3ixZrwk7gNibvV6jx1juA23QxUQfo3rv5tTJuf5YPr6DXKSg7Rfz9KHDRwaxvnEejsQo6D",
  "key16": "3Yxsms1HkVDRBZBKGD4m2ARt8zDEibN7MNEZ1mgPEVzSQNtgntz63sWrxJr3F26ACxuG7GbDFiZzPj11xphTWUYX",
  "key17": "JySe43P2v5PdTVvkxYsgSnSYoZ7yKK3TYyDAAZx5t2BZgXhg1yCU83rW6yHTuGH6VcCS5zyApLnwQJfmTwQpZR8",
  "key18": "dCd7UhAaqj5npx9RB66FF3MV8Z82C3W2aTwvTMzVNzR1Ch7BcuR4bo2CtpdYxZGhQZuPorq3567gGSHnKt6zuN8",
  "key19": "47B4ab9ZpKwympPQcH28o9Z7Az65xKLdnQju8DYkrnY5D3UEvSHXDZD9BK3dueR3JQrwvcP64b5svzFheRcawKp4",
  "key20": "3AQji4xvDjRehSvAbLn1BQNjVjqs56HJzkD5L2JT1Xwao9MBKRY17a13F75H2LTgbiU6mES7PT2gZQzKTaXdJh4B",
  "key21": "3sAF5CmjskrL4LzgqDDQJ5Y2XxtJaU8AtuHory8yTGT9nGexHGafBAopCVVRccpN1YYyPd3R9wPRnkQQun6dDL1k",
  "key22": "4eQB351LmNPtoAQm7aNL29qWsWWyarfJowwwwBsZ5MFyGUq8f5yv7cjbjEQzPrLfoy6KKBjxXiMgKEiZdKweZ1gK",
  "key23": "4CyjQAunDucFh8vDGEwQcF4vDCEiak9MWTgt23YRUw4tyMH8YXfPKN9Ey7ELKZBJ4398UF9X5irDnnB892c6Wrxa",
  "key24": "Huf3B9saiccuJR3GyZfE5GFP6MbsLQ7ZvNtELXZx9rhj2EdXJoZND7Vaaw8Ea5yaQFgyuYYUpDd7TBSp1ByS8mg",
  "key25": "3NYjXXd8vbUecRBH1hPbtiQztmJ3YbB4zD7dA5AG7kkdRxAbxj526DtEgrMAetaHh1NPXcJEMmaq1vxxqVynrGfN",
  "key26": "Z8SktoxD1UAGzGchHF41M1JTNxbokfxK1apeWE2AnoKhbCX2EDbHUapywNX2QAuV2coJUDDz2pQMKvdhegTZQe6"
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
