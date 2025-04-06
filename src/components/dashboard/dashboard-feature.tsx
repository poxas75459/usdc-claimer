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
    "431HMbV8eo4fUxWZyAvaw6PcmqJ8c2YcncdajmarmEcF3YsW6FCGRqKyf9jLc71bXakawpmgRWSj7d7TxCVdnvnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qg1HHpdSy4H1VzCZfTqQ8csDgMdSg6U6yJo7Qija6o9JcNu2pE3aKSsnDspm5qfC5a5FULjvYzBcWaq9zfmNvE9",
  "key1": "3aLba8oZ7wHy7qC7wQn1aqLjn2RFkedo8emndXJ58Jh9dzUTR35YLDyUirjmnDWm3ar85YhD2tUmQHhHh3MH5pVo",
  "key2": "59dB8twkFoGcqqt4scJ2LCuW574SFrHQewwmBM5zdLMi6J561WCHVbTCj3zvCL1Z97xUt1rM9KVekLZnY47PpD8",
  "key3": "6322fgzXZRTHs3ZwWEG6YM8F1SGwu8as19B2Db8sfd4rW1Y2GzNgc1NNKkYwp9nkiPyU1NE4V9ndKFJEYenQedwR",
  "key4": "3jtBRJa6jPhYrrSdMbWeDnCmnn7tqgbScAA1jR4CqiWkcFRRvVrhgYPoaA438MzCuiANVKZMWjbLuEXAhwxVezgt",
  "key5": "44Licytq8oVuNzstNxqrk8Ft8YViAWVYoBvqwZNYnXzR1QFjMa9vpHqdzELZyswQ3qS8eT3ATDXkpRmMafvw5BmJ",
  "key6": "Px7abs6dGK8dV84EMyJajzBjMiCTtdxPwQMYkwPjhC5TwcYChkfnViqkF7N8eDcJ9GNCjYFA4Ecx6DFtnC6QsHE",
  "key7": "66pZst8irJMyXucmsKNnCUEzZJ4GM8P6ANoMjzri8NcyGLN3AUeZy1tSSSVz3okXFm4Lk1T5RrMYkHaqkcd6zo7A",
  "key8": "4o2z6cQYrvEeEN6Nkr3yYW4KueGEBTJ4Ts3x8jQTgcBcTXt2AoHXZD7xPnsz5tQ2zYs2N5yCQZADFGCMUfgkLk8S",
  "key9": "1NVPAB1ZEih1fcsrdivqXe1HAMjSfpqrFiDBUu74MAs4wRARPdqd8TYyi1AhwYATAkuGVaT7cwZc7UaZqiKXzL",
  "key10": "sCtbEtvHYciJscWkZQS6UsbDMeDv8xW5i5uvjKKUHzCU4Kk55x32gKUzzpvhXbwFAMAnTbLDGp5t3sEbwbFVY21",
  "key11": "5Ndyk7CX5no4wbuJXJatgRf5Gcs2QD8BqkpivZPGpE2GfcAx64CXhczKE7C5YP4nrH4TKUu7YimEU7cBZYE3Mns",
  "key12": "58qQbez4kSEiNDz7veZjnUbnZ62pjompCeZhMe6zL8BjfNPNLb5gwPSEcQXs1S1SZUb9N9FCj8gk573q9d3dniC4",
  "key13": "3JumwLtdiijnWTDDhJtbwY3J4Fo6ngskTNqKKr8Wb9H5Miik8A3N1LMfMyiWxXPa5T8E5iuGf3ffs1HVfeysvYzM",
  "key14": "4jK7ZUQQyp6fYqnWTLcPuG9D5aRwwJcsDoj1cfYCsnyrzpdnJZD1XcCdLR1EQcSb2hWcemiaGSg4DNZzPWgdFSNx",
  "key15": "4UVpWwgWypVSuTy1FpqV1ZGjMYn46hxJEZnHDZ9ax6PhNYsvbVAJqM4RgVncPDo1MMaBbv9miz4j9icVbG1JHp73",
  "key16": "ZFyJ1Pjno4UhFGArNRsVnAsnTRFjFkGa18vHGh4GkvgKEbA5vjbYBJbtPS3dtuSySYd9cF9WUaSSMmTY5muK4Qh",
  "key17": "WvAdMimAPhLg8463grVRrQmj57gV6VkZBtPyQ8fZqmY6DXzEqPSTv15aiY5NC79nTAREQ57eSdSowCxssL4s2gy",
  "key18": "6tumj7MTcWTJi33jUX4wbpL2KQQDP7C49ebJbt76CD4ipUKz5x5To3TUfyhydNZCqHA1u6KazCMQpNE6JySLUL7",
  "key19": "tK137m6bfp4mbx1bKLtJEGGKfMW84GxMyKTyScYHUHyQpNJMATGaPZA2zgNepboH5p4X1rPpc4LiDQoz4tZiEr3",
  "key20": "5UUtFtcogw2LmYuCEJM99amQXXE1YXy34TdhKwzEr4nZ74MiBcC9WmJXqzqri8Xczo4Kah4pjz8AYVJmDv7jeGed",
  "key21": "5QCmUt5L9EqCMVjRUPfPPk24eYcVPupcSo12B1chMTks4dvoNVkCnL829aokCZ4Ggk6mwaBtSay7654xo5Zv4Y8B",
  "key22": "2FCgWvNLQBFsvZVr3N89yzZkWjfmvPFLxrFcNvcAnvkpACwCs2JkRDxYmSS5esGJVVJVQiiugsuLTSg4ACCZ6nn2",
  "key23": "5gQa3pLhKgLKCJuhx4BGBf7MfpMotBRXZNvCmbwYXh3JzhenffzbYF2jPG96HH61GXHx9kx7uLUSEAdHovQwQQ8g",
  "key24": "2huq6wT3L2JufMwXAjmiy8Xyt42nYuhyb8ThnfuGHKYMNWESEev6bGghgKktq5a5mbcaWqR4SobM9DYtMHdkahXm",
  "key25": "d3ediDk4AUX4WxcbipL8efvFwywihNCFM4vUQwxWPy5jiL7KyiUCBTtgCwNQCS97zWxm9ha1x4PYCH3Jsu4cnzY",
  "key26": "2W14xXLBdbci855SfX3PhpvJw4AqtxtfPupeQWYsAQVwJUcf9oLB7MbEdRqk9wk2XtL1CXPodWpGTmdW1Vrm2pt",
  "key27": "38Lgkey1CJ7ceDS4EcU2PRtDtKXfFGfbejLMmmsGdJ9x3ayYUCZck9ZLJs7mDQbsP74We61atL8Az3hrXeB16qat",
  "key28": "55M5xbKdt6m934hwzLDhS1NGvr2sjUPfvTNfRcBajMU92WZrXzNDNkSazhrzfe8oiBq7aZofV2be3Nim5fAJG2eF",
  "key29": "3MsRBSWJsBZrmXqqyVwfPuHpKFzkH396anLtMNw2auLKAQnLaNXbo7SymzGSzcmXD9VP54tsN7fY9nfZTTTYpabT",
  "key30": "4KX39uhKeAnZUCLVoUD84i6XQQysvYLbPrEjXG6ZurUsTdEVuRGDJ1P9JdbMcBuofk7QgTciNCxP4QGbs6VtGSae",
  "key31": "mM8XWwywzaK5vSXub55AWTN1v2CE1Rx1BYrbwJSnjarpA3XNDvrHrAcQprjUSdbMxH6x8cVZKpaSRwEECVCy8Yi"
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
