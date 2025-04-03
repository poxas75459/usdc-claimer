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
    "5KrChaLcr385UfwGLx76EPhejuZS4ArT5NkVj3gJzHp1WV1b5KZfKqx1g5ww7nJbaXFMyHzSijtypovWtS2d7kxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FjBzctLyNLUVBZkBvZTo1A4KKu26JyV767YNHas5FLPVCVzUkZKSQLuyyAbNGTmS5DaDjoBDK2bD4mJfnuBjP2p",
  "key1": "3vPw6dCBVWTTS5gjaAK3HvickkajBKHnSEBUiCANhBUiXYGm9X9L9qFiQD5iUqbMqLDeS3bSrKkumhFfqQvSYY2V",
  "key2": "gc6d8rWfAk16wBVyUYfCGACwwqP5qEc2w16Pg3psxKr2cN8yHi7mPmcxzQDVso2GK19bUFSCcA4ohVezMt43JDG",
  "key3": "2oqKGAb69JwomvEUiJ7GChT3JZvxzez4sNh6C7FuL7cyXvHeVebNY6yVLgVQevBrYJRC4A4QUFKWAhPkZ42BQba8",
  "key4": "37brdufaVk4bX5BXnFd6CJsfLyRZt9ngb9uu4fDxzetaJUhPDbqcHrk4kGH6P2oz8ARQd12cbLRqyF5hqPUELR1R",
  "key5": "gRQKkaixG6WHLpXgynER5DRS2omdn4SJvdr86gBrGDhJt5wko1pxwQdSjpLJXGdBPRY3Qv5RjJsWW3VNYTNy3b5",
  "key6": "5YXtfhd28YQGbgZXPz3w3MBjY3nTiyneVyHNLr64ANtseSjU4KWwNvp6vtqcdcCeqx8aZ4KUsKwcDqPQgZen5gVD",
  "key7": "5qDL5QhusJUu8FfUzc8Aq91XRTNSoAd1yi3XbkgJmTL8gseQ9xnDygn65z3X7fFYjbdC5FSrgPSgFVpTDfTM87b5",
  "key8": "4EqQc9bUMCv2yvYbWvm5E9czG3L88323rK1j5jLCGb823ryVfrggbKjW1qZkrW6J8Lp9Kft7NTxHynH1GNKb2Wk4",
  "key9": "qqstnuKCxFsQG7L3UBv4FxquQGxtHukKQe874xkHK4b7d6d4aAgvGpJfoX42TxNj1GB6XapYTgSPNxpDJCABfib",
  "key10": "3BND1NYN5WAfRqRQaGQtLSi6CcjnSeXH2tv2SAho2ERy4mqg2ETPkxFzCXGWZ94DrjER1zRH45JY5eD2N7moBHto",
  "key11": "2RBku4p3FoqnBRhxqU2EpL2Np3ZddoEpVLZQyc11k5QTQDX4vpaTQXf7joAq2sYAh1Ja4u5LmaHeT1SZr7Akd7rK",
  "key12": "34QGXUwcuHKCsoDbTCBs4qDXnNMFCsmeqrha5hX1cvWvPchHb8FFTdXrVccbYqottXozbnKZB3fVTmgnBY7kjqCY",
  "key13": "4L5cJdJBc5C5TNkeKvv5kN7NMzUbJcj1Mq1u6xSjCE25XVzHA7uyZq3L6EV7wAwi9kGVrkiFBUx3d7ubL6yAUUvf",
  "key14": "3pYRJhAjpf1PyHRmRWvSPFcp2HXvyHHnyukFZRvYX4mvXwDqACURZUrmAkrpkaPFtWTVLBcmtq9VDZDXPZwyY9pX",
  "key15": "2zEKSNH2rzAHPG8Hb19DmD725gzQnqBoc8k1LW5gPBTPghTuTYmVKfhiQGZwQTvCMPJq3ZkG3p45rNvHJ9qX6RNs",
  "key16": "45hJSQndvoS1eYSVKZ8zbB8xVrckKZybqXwcKhSQM2AYWiKoz8tPCps2yJFj2rNaMvGDgQovoPsRew46uyuB81q5",
  "key17": "MS1areCFnqcVyJR73zTn6JLRiJVPtzRPenyrbQEUojPGzU4J7kneiR2bN8xATBEjPAWb8LzJPEcDZMgocBQF3ct",
  "key18": "w6SuGMj1tFQ5muzbmHBL26zjFBscbyzYnQ4AqTFMLBHT6TDqxQqRYhWA56ZFARtdBvqPC5Zfk83Kbvb14oFqkS9",
  "key19": "5qRYczWznTELN8cfJp3jVNXB4BtwAo2oiqkDdaTJUwgKRJuvMxLDJMVQhcMX1Kkiw1vtVKDB63nGCd7Hz971Rium",
  "key20": "2xvD7UK1JLCtfZLaRcqLEReFMxz2VQgzK58VSKUCnGYEwCAwWn1qFAAfwsecYaFEkpjHk8Yskp1HfR9q6b1DN6qP",
  "key21": "5PyXHmREXg5LHcRp36GnorfBAX72inuUjEgNFdxv8NSiYgPiQsybDcM2TN5tJnRYvmDkxrGD3xwEeGRm8c5vTNVh",
  "key22": "yzfvoeFmcstbc2DZCMmkJ9w3CuqfsnZecYQpQyyoEGAo8nsLVTXCFS6JnH5NqQhd3DJ8x2py7PwE3ASro8pswBJ",
  "key23": "5QzPx21RQp9w95wj9Yma26TEyCfwyyBbEDNWYJhforvCXWatKXgigLKt7vYLe1taAjgq9SC3xH3a4PHCkHw9M6Ba",
  "key24": "1y4qGdvnZAQ61PbLvhpY1DGApNycDyMt4qZV56DH7aF2fj1nrPea1eMKEDhvKYxvbSBiRRL7Q4qM1cbSFRiNjdg",
  "key25": "3gHfqQug6NHvr4mxcU4U4DXLrWx3vBtZGXz5TTfyMaSepDeS7kAnCnxA924ooMaEAHbAMymiAyXsnmRRy7Qer8V4",
  "key26": "4e58ZvPoTebBVqEwmLVXKYsncVbp1PCJi1ToLCK15knqUYQPod815QbqvBTUDFKcBsVCNSqp7DMXUuMxMkCVfA4e",
  "key27": "AxHSihoGwdrKnCUXj6y5rqeg37CkgrwDMEa7raBgPdWQCEVT6LHU2X41WrgKU8S9MmyYqKEYDVB4aDrbSFbNMQf",
  "key28": "2YSxwEM7xyqLHUg77C8LN6AvNEGUCFV9kgz3vHjfPv1jn2wAo2aqk9NfdL41YttCsnG8DNoLznaY5dtztimgBxFX",
  "key29": "61oS3PYYNZCozrBvVjH9oRNbTbpeRdyNNKZveibqZmCZ4cRTPb4CMq6vyerP47zCJhYergqxKWw1CfN3pyQ4uKaq",
  "key30": "5QukrY8V5xqNcKdsoULxsn6EGibmog8tC8upyqvvhZVMJpXxUxLpZq9x4cvBZMduFLkVz3fPsrRygP5tgSHMCYYC",
  "key31": "5JVZhG8bh3PkhTaNdFqZp9RyJYSFkBKAHRxg5AujGEQA1YMaWiDyS7d7ZKmjSLPmjsvX5ak968w5VzJQkeHHwgHJ",
  "key32": "57Tr3j3EQ54vSJrfiq2YdJhaGXhweFiSJu8AEnm3H3BfAN9MX8Y2gyt9sVnPEjyfyREwW7kR3yQUwwVrPjKG5d6f",
  "key33": "4ZV552f7SGeVyDzXKn3EVttppyU1fUSRHjxGLZnHtgDNCyZhfw1gJnE7cLfFYzSBr6heNSiNv6kmNTpebYL9DrzK",
  "key34": "12zoEcyTsutEZ1civgbc3Qyxpw45rDM8VFnBcvEozfQtXm2amdhS4bCJAaGHG8ToCnvycwboUrnhUENqg4u7XQh",
  "key35": "4reoeB8UB3RrbDjc7LCGBbeZmJLmTkTyumDDXCzodCkE5Z9BpQyZL6bwobHEbrVj8EJShmNnqZHFj1PEA5Xsxk6J",
  "key36": "2HJNir3AE7uCP5uErPsD56LwNoiWDNnLhD3brQyjXV9VhKWm9PdxSscKpyyoHocpsGEvzwo5MwxwZy6ZaaqdDyAv",
  "key37": "4dUoycohjY6ZVW4n7YfZR7gMp5gVZqAcJEad15cnYrtefdJXCNCymsmT8fWDBktmgmU9Gm5fHYWzHpad564i6F6t",
  "key38": "4824NeF6dZPBir83nAWH5QdExNxBNMdHjDKYvmEjLebdGLg1rute6xgSyL9MM9Udirru12BbxJs1ZpXxhCDJCXti",
  "key39": "3LYWs5Ciquxm2Au1htzG6TeVs95oXSRvKyARm2PXrQRx4q9T21chdF6zR5oPRUV5y4Qk9owhVBRgYCDN57qnLHT3",
  "key40": "31MwAhCtZnjvMhQWjwVYn3fsAh6prshzfQqeAu37a3CvDHYggYBBSrBDGbgLs69XW4nwcR9P8Kj9Jchp6EC32Jd7",
  "key41": "4DSgWwV73EGUt5Xv1N5SQU5Bw8Ry7fNgqJ8MXAFrgCkvJnDJPHGpwYziAkb84Q4MD9aLbRPYRo7CAzfNyEJkRThY",
  "key42": "5PUFfNPzHTy6dwd3n69Bq1ZL62FR19hgVXYYQdJgCriKDEaSTHwktjUoGNDBnksQLS89PCT3kFa6zAmh6mhQSRbV",
  "key43": "4S3LcA2hQYwYnst7ngFQwq2Sh31wkxscjxgQA1hkYiGxUNGJiQyg77vmDfMBvGe2eywprsRgfVspNHv4M1F9WkuR"
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
