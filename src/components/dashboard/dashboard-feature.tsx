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
    "39CQ8XdDMWf6ScwYX3LqEnxxzeR9pJaMWGGiUu3hNaLFwZED1jaaGYR9BdcieiWFFRdXivpd1Z7qcWhk3CVirYPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osq2Uj4gjZxKdnNVUHpTPjgP645xAj461rjuD3L6b7Y2HVKtg9ogR1T6rXDBEdjPKbk6WRrj38PHP2yEjfDP5Zj",
  "key1": "38DU72Lw8LF2ToDDbMYeLtRV5jNzkKj5gQKFPWMas2suJgMMHzcGm9xSTxwerMuqmVghHANVpSLEqBiohXVWdYpH",
  "key2": "2GXoCRBDRt2E3KFfakb3cjaRpNMMPcSmwScmShvW7uhDXwYTD855vXLPDZEYFabgxCTZRcLkbucZywFQxCDvgKX3",
  "key3": "5YfaQZHG2LVfcxby4mmuG27eroYepedv5tVEQj8DTymfS3rhLvbCatoJ61BcHLCv1ZDbMAqr6FmB2fKQzzQdsax6",
  "key4": "3pjJmg5w1b3MnbHkppJwog6wqzreHbnkNgwV7RPy3aBYsNUkxWdDquGVyzvRqRsBaKhPAaUaXWPWyHFs1XjyLKC1",
  "key5": "2HkCoZwgosfzNgXqVer3nnciTtz6i2jbvd8ydqksY97w7KfP6cHzf2oQnH7NQbLT47Z4bHpuKE85CMkGGAwfyv96",
  "key6": "ScKdK3ehmk9WttH4w4ud25HaQJNJ9AdhLhCNyGvdX8NkUrZvqNzAFCkhFC4thim1XiyPz8A8RMC8HQVGd24SEXZ",
  "key7": "129ZyPWGEwndLKhiZbB83oZoNXJdJ6KDK9XNNfXkRNdSqgXFbTFtBE2E3i5LBqkHxF48MVfKJEHXi2ivgmyFEvxX",
  "key8": "24tkyw8FXWbbrF6cY2BLdPwTQurPdkuArTFa18hAsorDP4QL5BVNx66E5yvboDh64pycQWMdTu4RcxbnBeK6dBJp",
  "key9": "4qWG9Mf2s3YUgSDoetwcx6xVfmS82YSbCNQV7Pop1CoxYpBDvMzdVa1nhPQNPQ375mXijyoJiU8fVuhYQJ6ABaNW",
  "key10": "je9DqxEAZ4rkMQ1sj3547RvYHBxFESLCtwP7x4uqGYgRCTGcUw5q6NKjfRMQouJ3pr9JWPqXTLDEYHJB9xTZo69",
  "key11": "5c1Lw1DpnG8A87WVzxCCJS98zEaAurrq2rSQaTDUzQtYbtn3eH3GsNDeMhHWgp752Ca88rcXtRHqkvijoRvsmWsS",
  "key12": "5B2KSwPEGzreTkxVEzzUiRiRo7886mHuWmRzLgPcnwDG9iRzyDiU3NbmMzfvWTwmxjzEgQUVgDJbDXKnKQ7Gu6KU",
  "key13": "3BwL9y38FHoeHwuQN4BM5sYbTxCXRyj7tStfLpkEQxhDvVMFFo44Vo66HFJ4NJ4yvWmGZdAuQB9sVScS8i9yqiu1",
  "key14": "4TA79Xp9Dd11TTpcRK1uCR2i397i5o6hrJqkTDrrvUohjpUguZ5DdXCdZ6N5jka3UpFbqeSWpDr7EEWQEKXC9iV",
  "key15": "dsmjhPVKLmgpdXK27fgQDUgVw7VJFNUR7qYKLbop4aM6PyGspQYJ4HPjkPG8j4Y8r2yoVyc7573k31PRj9SqrVP",
  "key16": "3t8ArLm1bKG6QQW9KvzHKSTfvK8pSZFi27VmfoDNCfZ8awPvGt7vwovcFCTsEVqeJDtV5cBCdRzkWJndHENwcXXW",
  "key17": "2Fhdo1vxJmqg7qqKjy2YL8PfroDsXCrR7zAWqicXuwDx4JD8FUauUZAoyhgDqX6AWZnPRYQBq64vSvjH3c8EKzAP",
  "key18": "AFAuXzeNvLv4Mq7MPs7dKQnjQ2PquuBszYCkwUz7sPM2tSYNmVXpzQq2jvvdhQKmWgKLW8zLVG4RdR69S2rUrfM",
  "key19": "2vZvk3nHY6R4HQYmxFbCVEkFs7oXMa9rLQozKqcKg32uN8N9wVgAa86bd4sGd85KorSUd4tBkHadnfBnF635gtKp",
  "key20": "33pFsAXnNvGEim4TbzueX8QKnwTcFMRdG65pTUg4RmtNf9mD9g1aetHrjsxVovZDpu7dDZj3BBfN1XJPm4oabATo",
  "key21": "4bZTCBCAbrUon6FVPgJDg7jJAcsGxnHSLBLjMYaYGNGWs4HYAUv1ptL58Bc3SHAdZ6SfWkH932bfZjUP7kxBLMuB",
  "key22": "2JtgbYjsdCriu9kUevYTH7RE2kGHvGyRPpS2ZuxahNgDXf51viNZmvvb9ycgDfpvSzCaBFWNLPZ2mFGsHDitSysh",
  "key23": "5c9pSUHGbzLvfrE2Fi8uMdfEs27poTXPsHMgMmGEWt8nPp34tgcDKoHfAHZ7DyJ7TdbJQAq3Br1G4enRwCXi8cjy",
  "key24": "4YQBCkU3tHPrxtn4kGkUrGvhd2EJe5TXqcRMceCPue7seckUKSQfh8dfzg31X61tJKVifMDtzuXwnkT6Kk1J3CjZ",
  "key25": "23ez6cKNjfKGwajkDMrMYYLptayJ2VcXz3G93xPUh6KfJ9Mf6TfptTh3GE5gLkrnnyHGCu4rkiuLgRhXgDqzCDgg",
  "key26": "4KBgsP7um8cZMHA3BVZ43rYFNjijBohp4EJAaXrFwQggUrYKC1sPeEawmexLeHEN6JqLGGLqwGgrvR6t3LLXNrhT",
  "key27": "3cZ5MJhAxGHgajKxagdcNALPQfD7x5yAU6KVycBM9QuYhH8yBRLyWLXv16chRirU9SxFDYGKJBVgayuxgvkb1Xhi",
  "key28": "crCH8fQhsBnKyH7TzVEhbXuvUqyFECLoorR4NUKNnu88D8kSVW6HPxK85V2Xv94mp8B8XfYGv5wb26zuMkZ6n8R",
  "key29": "QYZsxLtDKGmEW46ijgC1fASXJaL6YifA6ciiVEzkJ5qjnskfdmzSHns9P7Xy9AqYCtGimPR3WJJmKZB799Dqiho",
  "key30": "4QfyBC6qRZ6L9iC2cLrxdf4yPusskeQi49kpzrETBY1oQ3gP6zrzVCcyzp3QkzZAm2Bjqr23MFy2xZxfJZbFkccJ",
  "key31": "5pkZCiQ4oX1JMn76NY6AHZtCfMyVdQVDJkZTqLYHLjR6sXZe9Cu6kcFTnnHq3vcmqdubnr3hqVxvDbQRFUg8KHuM",
  "key32": "586MjAAY1hSivJGzehXi1UEmdSRNjpHWdcGxxKWvqZBkhXLYHnqPgLGed1yRboSPxy99TJALEjxid7Q4QCzYRa7Q",
  "key33": "61CtkHZgc5teyweyuaskMA3yMid7QorzpJwBrULmZxTVb9ee9Yzu52q4GxqgVuSz2Ly6Kh48yeD18sfHiBXuSbr5",
  "key34": "4CefsC1f8QdvixHHTzagmLCBUm9nJS5dgPVAn1tUKv2pWmGKPbqCkPU1Jw7CRTCsxB3skPGNWyN3ARUZeKBPQaXi"
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
