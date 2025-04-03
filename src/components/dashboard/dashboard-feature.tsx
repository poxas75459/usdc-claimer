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
    "2iiSuGzRB5m8Ar7btqfPVxRj1RBh6xXZa83iCXDWBTyhFoqEDipTyF9oFZP8AN4p3B2hUuCxRfJtbq9b4TXtQTMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E35gZ8cSrjx2z8JUW64nnZZe3BfnsL7Dqi6coVMv5MVHrENVbrdM4YpCethErB4uUyMJTXNqKcGijTEBXJGwJWu",
  "key1": "pBAgYCazpDaMzkwMmdBNf3fGTBQnAkK4qiQBUx8SeYE56YMHaprUYBbjcjigb1c6uczmuAKjc6UjwvyanQRn7ZT",
  "key2": "4zkjGoioy1LwLenZNmqmaaZe9B4HPfKvuL7SdiGY9rDzsdKVNH2TLi5LctYn6DZctbfjjeJWNTwSzEcacwZbHR5g",
  "key3": "4PkamNoznDf25N2skY59fVSs73F7JHKmNSQ6RqtZHYsfS3fQx9nuUrD9RttAJmQPoHc72sbHqR9z2ExqngQdQkgH",
  "key4": "5T1eS3Lo7Qyunr2hUsrETJQE8KcvwQD2FakgNQ68LUqY76dew7wZ6u1ziCYNp5XVvgPnRbA1YCLyq66eymHMjfYm",
  "key5": "5VZxXCjNzwweEraRJMAgsYKiP4uVHvsemhGwgqVaPpV8CbhgW5ok8WRXmroV3cBtJE5TqCkgeqU7pFM7JMvCu8dP",
  "key6": "5YnVTCnNMBx8WorK57Z6wjmsd5RQxgj6sD255KEUoRYUcQHLSputCRyrX9vkWB1ubrgfeuxkMKg3VfEntizJ1QfU",
  "key7": "Q1pngupETsoA8TVnUzBy7FbaJm18n2cY4ayQPMdZceioX4GESH2ZhKNSJdLVP4gvqeqgH56QdMZGTLUVQhYWerm",
  "key8": "4J7ARecHb64b1nyjDbW3Kw4rgj7axBMdtYGTPeVzxgMnxwazKnKPmfd9UGUnGbq7a9qM1CKF6i5r3BjE7Wo5RP5o",
  "key9": "2yepZqfYmCVBnjYjnBiCGoagKxbPAFKsEK1usgx2UYYdwcaVpov4YKBNWiPMFnUF9uEtmzMGsWWf7a1BNLRtcxa3",
  "key10": "4sVSUQCghaeNbtxYa2WEqDrcNFp7Fv5v4PSQLmkCywnZjVwMNNUiTEJGLbfEUxo4169JNa86B3hfZd5YeGdwPmjw",
  "key11": "2HRVvas5mmetKCJboHToK8SgYq2qRFB3jJFEo3QRPevhHVirMJsZSCZW6MjE6teLKiNU2bThuhVYFC72d6jkYDLp",
  "key12": "2Be9kH5SpVhHZRFE1Xfx67DqzHM3Eq6cD37e7QLfqUxzLMJQUVgxYRAqaJJiGosn4VD9EtvAzRW8x8J2rHTnii4t",
  "key13": "4DXUr1h4VhThNAPvrGxwKGWhhvkkzUFavoSXrum82wFjCv84UQF5Aoiftzmao4pLrowHkz1TTzd7C3pt1aD6uwz5",
  "key14": "Bdi1hm6wfrvV2CiJrENSmkJZV8byecrmDPKgbQTBvsjqUyL7oheCept1fiPL3pS6nbQ22GP2XBNxoejbD5tWjss",
  "key15": "5V1GThkeNuGF3qfWU6TM4Lj3MSXZazFn6tX1SQeH51amdUi2Ju9r9u6faR4w7WVWfpsSAT8uDa44PDXA2gSeUwJp",
  "key16": "3HSEkU1r697AwZRtYCUKYzaoy63SpyvkSfFwWVaLoeQAHNfgyYmnmGPdVaqMf3SjyyM8AzQioctSXEkZk4wpzcTo",
  "key17": "5vLVmNaHC31Dq1ETppMAr5ivr6Acy3kHHMfiAQzEN1nJr83oGRvXd9bfE61fx6mVXaCA1fJ2PQPp3S6g9MfcAnUQ",
  "key18": "4z916ZF9QbaRUSzbNGAhBVciJvYearFxccFmpvkhNsYhqrPsS1ystJgDX2YPhHgkqyco1bEX4xZ8txKmY2i8mPxB",
  "key19": "2JVPvaDbgdAP3UdrtM4vYH1jiBJrKpJjk8YWkaRyYGUS1fEy2RoQ1tqBEnNkCsFxeNc2yL3bErs21sFdbjuid1kB",
  "key20": "4do3d8858xisVJdAwBRAmZASvWAZ4tufmpGxvsgbRg74frM3ZKGNZyZ9oTGjAa9REhbvYcFSB1iPUxZawHjCKNrY",
  "key21": "3N4aBSF6Ta2MyX9hFRFHrJ1Z7gKM1GmnHmKrJEM2S2wssgPDYFvkcrSxynEspJjBky68bZzh799xUPLjeq4FyC43",
  "key22": "2f7HpnpSAAtinGXugYj2QtxNUB5QaCDPp4XrDFs2npvVv6F6QRnfGPvpgwgufDS3TcEK2SrVK5yScveAUCxHrCQT",
  "key23": "4YDys7PkxzBqdvwbntR1f5jfJhg5khKq9XxDALG9xff35Udx38XaSCLtMm64EH7zk7ycoayTECQ9K3hPcv66f58j",
  "key24": "3RqTEfmdSYQ4XVrZigoJb8DnHsVxmtmqgvsVTRv3dLmr4bG3SgWhNscgLKdGNEuq7Kkki5E1hnL8XJdZKiZeYFnX",
  "key25": "2czgZZkUWgc2fctLfZqH9bJX36p3HryrFqjZGUNhdCotWZyQecM8mToGzcXFhCUqECTK8QPjFbGkwgWPXjVFMbqf"
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
