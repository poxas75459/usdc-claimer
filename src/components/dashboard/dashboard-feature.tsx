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
    "4zp4x8CZkEbrwTxjJiVMzeo5TaF69fuvGJShHkRnoePjRq4Ws8mJrFYSB8GWLmvCS57jj64aqwU67z9bgnKzbqye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d9pRgrps5nenQywHvxiY84gpKr4i4GGket2w8q3FZjCEcc8Nh6r84EK2wUbDKhMDyYcv1ydSNzGwhy4k7DDyLJ1",
  "key1": "4U8UeiJqTh7WaG82q25W7aAVoxLAeJPqiVoLCzSJmvvLFNn41hqxk44cH4QLjYTLc5TD1wC4RSFQwYzoMjWxxWvZ",
  "key2": "2XpGd7pAriZs1qSSvmdJuCEDiseJstWHKnnRxRWNwVwAZFgpiwCJLeeLHNBjsP2FxJGbGFpoFjfiYuMyShVmnNPo",
  "key3": "5vhtgmBsoX2GH4JfdAv89dqHnAFgkhfLgAKmZGKavfasYTYJ3FSUpfyv7mVsa6dbSzzV4VoZokyRfDAgPoGkdMZk",
  "key4": "5s5Wzug3dg8i7gfyhRdpKWuhcBtgUBSRqBChnAnVTHEZ7o5CxjbJJUC63Tgz9vUsSjRN2mQyieGtcpoTY6ZegAbs",
  "key5": "3aLQLRxfKeeXb8KSmqNqE67FhfYRQfHJaSZsFhkVPafgcCYvTdruu21x7YuQEiP81Hb6LrMd7hVzyLzoYXPqBnLL",
  "key6": "2xk33UR6SPbHbBWrokxrFArNteRUnr1hUHQUkBkyQwbSrAqwTE8x5atFteEKazCyEnXQ4ji5XjQtXBT9xZCJqEXe",
  "key7": "5PFuLXkzBJYY8M2R2RbGX4PtcKsRh6LpTqotYGWSk7ySbfEfynaRBAx1fiz7dyjnrs5iA6BzCrrh3Mn9Y884bzLd",
  "key8": "5MuB93c6arUQSW7KDi59Z3VaCTnAqrgcY9yD2iV6ATSZVXNc1AqTGb946R43XmAZyNnXdxHjZSYo5nB5LdK1mjZc",
  "key9": "3jJB9rivTe4WCn3o6xHY9hXACxBizcDYXiatwMVQba8AVGEFLeHyF6PnSAUp3BZGZhiK1NELXjJpezDHMmH1YTiq",
  "key10": "4NAja528ceKuDjhETvuF5sesU9aSrYog96t3C2WjDmxvs7QoRkVofH7SsaAKpF6d4dcvU7J9VXK8vnXeQZb91Qcc",
  "key11": "3F6vkonqQJwiB3WpTT7Qs8QwLDEF2PjLK8gFVt1FMFCT7JyY9G6kYrjxbdhgwRyjTFoxfwD91BRYkButoze11zxX",
  "key12": "3RCQCacMzP9USavpEyiravpeVymCfTk5Gh1qbkrT5nWYMnyyxFhCPfV9Yb4ptSbkoYFtYmJZWVST4yhtSwziNEng",
  "key13": "5zoa7byxvYSdXnWzmyDiULCVdCeXfmJq4saMXhs9sy4ftPs6VHZuXVVVAfKEufoUVoDRDDYFFouGmRzXURmnCxFm",
  "key14": "3nBDwPKQMcDyzTuAkcmvPzjH1Ykcnwsyzr4LXk3YBRqmy87dPhzLFD4oyLhiXYgayyG5qp7SmTH8ko6JfMtFiPUS",
  "key15": "zjjeqAWq7djKb61sMRkDrDGr2qqgBxsq95A4oKFAAWy5D1uKVvCfMT7SerGw3UpEbgjZCKgs9ePL37Z72ZPqXnD",
  "key16": "5audfHNzc2T4hhhK4CKtgXBCTDPQgmicgY78ZfXKHNzkdfQPNViUop7tr9mu98bPw9mPrxgduDvrB8GrNwvVSDKL",
  "key17": "5EASZao84KmuFBXmfYQ98vti1tijUuMi3cXvnVpFDe4mZq52uxyshcw9DGaVMxmiwWnyMSmEGrYu66LswEU9zdN1",
  "key18": "4kpoh8nRGdVkMAJuJopsifhoFquJUW2Nwv4Pf7vrTXc6KL9ESKeqTfxPdFRvUG9eNtw8figuDfx5fqzM6u2LW8Mj",
  "key19": "ozdwFa3a3tWyf5SU6V8WvZcf2KsaTeQGJ3pJrPrTBRqaXmfJZb6zpscgaUZLNWiRGx34xwzxJBw3JsMvPRpAQK3",
  "key20": "4qr3aijrjLbHv7njbKVjvv4Cj7jdgNLkRQVtxmBfocDKRvVk13jMAuWkfwTWmANM1zoJhkSBVQEx9RoeD5KnUoBp",
  "key21": "5AVWEghWnXLboXwnVBA7mcWpTGk1uyXBMeGGPYNJaJVdqkkF57gEdGudRwmSetjqsGwQW1YGTn7vcDffecK9SHA3",
  "key22": "3Kf3YC6hBWkhK6Lfq5tBsS4T6NCfztaVnqZTek5ZuuHbPoZttwd5LHZUXz3QFF3MdzVnBBhsbEo3fqZcQuVQQMKs",
  "key23": "31kVMfUjHcA3G1EYvxnZh4HTqPsiTcQ5StJGQ9oU7f1YebvVkwpJ19rhhGZfnnRz8krHsBaGQWuhyegRhUHVrYoT",
  "key24": "3VAAo6qqtBuyuKxWTeyg54PrDSdve8mgoABVxaYhErdXnVHRcY6fhmgCV5AMEVMq4aQePA5wBtJRyUTN1kv3zuCG",
  "key25": "42r9Nnori9UCoXryzKMFunbciQ2bcZgcty9DpWwrGATdTFJDkpY1hr43R2nvnbY6uVWFeTd6ZuJ1QYnzhfgDANGb"
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
