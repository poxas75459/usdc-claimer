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
    "2AtedqNdwMnk2n7fVQn1ghvQ2vGuRVDwJ3tKjt5mjjcMzTxSyskKrjTt68AQhR3xNd8F9iD2GksDdecs7jXpSqkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P84jqRccYikPhaeXGLb6EvyLpiNGuMjFX2CMpcyFUPwverxXKr4Ee4m84L4G73j5YWCV2Cvgq2GYWkTFU8S5LHp",
  "key1": "DJtcvuM9sQqub7LVmdvH35UniKVdsHdntv6sBYXDvxkUEGYgZHK57ZUhTw7RU5ooeNqeX7JKyDeYcSn1AAzBZ8K",
  "key2": "3AD2mH9BYpjTG5CCiokDhei1SYpXJBNGMxn3QJmjRc5ovqnFib1BKgtGT3twRUmuTUB4AWgpKfYMbnKa1q9tbsnc",
  "key3": "2yxbg4xGeFrRPtPduupBXqa9EZe4PqsGSp6jLaBX3hikH7RR7djNskpQpHxZCoXTyG7pvxYWc5dUkLZvswDqmN8q",
  "key4": "58ZVqnWihtFFgY2RFZSokhx7baU4e7TmohLa9J2ZtCggZ5Qwx8HPSJQtEB4fHAf42NRQ4uyHcDBAq5nrFhfrFXD4",
  "key5": "2sKTJB6xJMhbz52RcWGTBtFYPJUtHxgb2w4D6YMm62KUFovgMbytWrz7E1Mjfsjb1Nx5LTPGb6PWXnFmAziuo9Nm",
  "key6": "5TqhVyZZ4CnrLnNLxjVfpD5JSEgEDKeCU3Tmr8HEcX9GzzdRWRuHuChmf6h7URVuQkfNTNPNiW3UyJATQYRqyFDH",
  "key7": "5N5rTuGhfEkDswg3bAAZ2GHmWADVUN3WdNhvdq6DyMkBexRCgebARvTiWNmJ8vGJEFyyxkYAoyUrm8URriNsECQr",
  "key8": "2m8BiSDPtRLJTWUQ2ZFwSS3FmgfCTw3TB7wzAphjGfbGb3PhdYZ1Xvm3YJqDyYEzhiz8ArARpTTcW8KsK2FQ2CHY",
  "key9": "5fSxB14AyiqfhWfJaRTbBNxMo8s2Uj9u3hyfVrJruniiS15jAQattxEJiwY4tfbNnPHKRu6BaqCtPaVuuknMomzw",
  "key10": "5Yu56ivchBKwT2CFcPrLdrTUAUHiRDupemmfKYR4NG91sZjmeRHzgS7VgSKh3FJkLFaCkhT6Am2r2YuCcnyeN8J2",
  "key11": "4FyML8V36Unpf8PEgc79HdwzpCH8KePb3GJ1Q3uHeWbTL3Ek9WxESaVqBXiTS9UJ7A83s3rWKuvfAkRMiWoQjxTe",
  "key12": "CbZK6TcydbPQC79PX7zDZYEVw2xHftGd241SjDRLQmEpfHEEetDtkKS8k2WZGKDN3AS6bjJrLJjZdwsPvUodRfx",
  "key13": "23wYie25FEhvSFxxvKzD3ey52ZLYV3ouvzAejtcZZW9UKiBwTXFS4HAHSGxiu9RjBySuTTXEtiNXm53bJkRBYEwS",
  "key14": "2TZPkc9U9ZgvauQpojqFVkn1f3MHB98sWjwU6g3G9HuAkXVonnf6DFPTndHgUbuTsD6XgcUUAcrVPYFtUxLLDLBY",
  "key15": "3FKG7C5fptzQq5WHd7M8gu3f4DkdUoeNKgy7FpuUjy4TWXC4UUq9vbksvmW1M1zw4H68P4ygR5UAMSe5N8aEHwmt",
  "key16": "xfA31oVJugxCnF6JvnMSQSmQcWGijUxGnqu3TZUTJqbM4GKBwG4QfA9AZUMCCw295VVq2obeKiBEWVdQxcoDQQc",
  "key17": "2ALWHJMs5xbUUoRbgr2bSjYkuESbDidfnTpwpN76iAm6RubD1XixM3ieDpLyetyy7mBdu6o6qtJXhQc8S7CZFowr",
  "key18": "3XBFoDnfP8eK85TrEQo8AZTvU39SA9rdoeSv1ko5edeXRatKZmnaDHGZuyZDGiCxxDPh1K3WjfoCDcamjLzA53eM",
  "key19": "3nvWtEA1xoAnJwJx1qt5yD3HoAhnF8EUHP3e4sPVqNbtXECdQCbmNenTuhbu4gnEdHjz7Z6B6hYsxHDTSXwznYuk",
  "key20": "3EvobqxE8ech4Wieqk82Hep4swCvESGx4uyCeCiUi4j14627qMpMrvKSPjGQFocwZJJus6rRDa5hsnjW7XKzPSGV",
  "key21": "5eF5Fu46Uka5nHgFjT9cruuLqSMq6auxSssGoiSCBz553CW26erj4h4E9drsDFwj3ngaYPcyyWqKfEa7pjGGtzB7",
  "key22": "5kcCFjaSa5khPKDYyArBmCM1UhQAUZE4qd5RJks9JNzawAstViJi9BBZauUoj1MZH7vAcaqMqPasJErq3sEVFeXQ",
  "key23": "2DRm3v5L2xXbs552bcAYsaSimF3sUdg12x1VuCrzLQ91samDbDYWotf85L7UU9mvfXCJzEn4URbneGQ9f52aPjv8",
  "key24": "jdA434MhenyWavkg3Y97DaHVkxPC4VqptXmzTMqq1ZheiWPx3vMQrH9w9Shrt4p7Jqpyr86AB3fnafa1ep5F3SP",
  "key25": "4hMhLpETpzS9xw5d1Gbb6nsjB724zVdW98dzgefaEEqhDJKP44CipSgCQsDQyM6u6vRcPvkocKbusGoDXb3cyFPe",
  "key26": "4a4GEYZCzB5Ms5CsQBfzeB25BxhHQ5bC9yAQiZEPyFkW9whVgyZAyjNFJmRUMKaxHetgnCYUaW3Ynfq2dap34Fed",
  "key27": "58uYeR3z2d75A2uVWQ9jjdPkrRZa2krMZY1N4V4q9yVyrG2eY6XyMXyE6QNkkUKALfRbXteQA1ua3G7qpyYtVVXH",
  "key28": "4KEGtknzooScgENNjwrdWd8x9SMxK3nkb4QKkjtjTVv5JXC8qwMc7DufUfbHSUGs2uHW88ojoQ1uScpfG1uoj27V",
  "key29": "4HVDdamUsR4kgv8rJBhtY1uoM1ECrDPYLSvJ9c37pn7NbdECQQminq8mniCqoo5WW6Qs8XEahRbC4ixHCurjF5Uz",
  "key30": "2mSCZiU71Rjpgkc2viNVZNgYE9tn98vXaM2ihuRMUQ5zaAqmCAJPUNHhYqtkGXnjFg11rKRHsfg8XVXZtmJMxUGi",
  "key31": "3FURMZtzyZS97APTZrzhgt2sTRgS4YXvcaSLm7m4QXqSd14iHLNTFJ5HoSHbk7KKpyg8z9bA8eMcmM8dwDYAoKT8",
  "key32": "5j7PDBMFnzWh8w3bWFScGwAH8kYxm1mLZCtG63Qsm61asUqK9c8SNb5wwdDXvDvrwavv7KhQEsh9g84JqL6VHGtf",
  "key33": "NBCLKxnWMKAeKPd4NgwVK6JztmzpqNE4LfuvdextY35NjGsymDJ1XGxkzvovxS1ejpkecVJvTwKk5sXQrTimQiW",
  "key34": "3dq29GErf2fw3yfxXxoBYvKUaTALjLybk1CtjLry5euw5KQoRumPdgE2HmjawezDAM6zbd5jHfBTvhTXsqPAxVdD",
  "key35": "v6ADsvMw6sZCEocE7qavYmbJCNiStutpq9vQ3CnB2EaiSqizrUM2r3X4qYNFa23Dqen1xKPQrpX4tj5R12hF6Go"
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
