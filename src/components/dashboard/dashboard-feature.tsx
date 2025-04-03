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
    "2txeCym5fTFe5NrWTejqLHjdug9ZPa5rzfzyRoBe52Tt6ZtRZHCdAMF1sr22SAe9fMjHbZpeTKWYo6U41BSNWYDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vxBU6SG99gnKCb9cbLCCByXw1Nx1a9M6bw6VJTndS5Cvpgeipn9uLbdjXgC3gmXvgC3TZZpUauLLTrzaxfL7Vx",
  "key1": "2Zkb9dkcreVs2wMrZFwA7csb2WRbjwtcBFeRUNsYrwNTNhV1fiFRT8uVyPYUxgmYwzy1oiEs331gJPbZNX9eUpTQ",
  "key2": "4iEn9oYGNG4VrLYpwHrBJPPrc21ESB5vA6MPUCaCKjusvkbAYSnkwYpx47xtMo89JXxDbArwrPAz2TLCY3Gq2iLD",
  "key3": "ju4AoaFrTSZPwbzcvMiFTebYS1VkB35KS5uiJ9aTAvkD9tUa7Ls8TNQEZEKA1ohNPFtDRs5mRstgUvbtT2cxXux",
  "key4": "Z8QYz8p3KqBtoPaFcGY9HPbKbKmowKMmRho5GchdhJWcc1tovAUeUXQHWfrm7VkGtBD4xiWC91zmkZpZBnxx3fx",
  "key5": "2aUbpqca3pFQMyWNMMicgbfNPfFj9GEhpant7JVBffZ4JT6Ftrj8biimjPtxWdfncKFc4SY9nswM9t4LNVedUdPy",
  "key6": "3wgVaaqnf6gAJL8Fteo72UNybBcexqnHnf4qXZGmLTvqhY2u1363CURTcMQFXM8FUDLsVDWhzny5DY3czrhTZ6GP",
  "key7": "38LsiBofs8uE4trFQv27oDA11rrvcSMYoG9rqW3Arn1yNjMHK2N5mHR3T7igajsUaEhbdsbhzz5L2r9qd5jhnqwe",
  "key8": "wc6GduL6uCkTcSfipfQr5qufnnbwAAnfgMwU8YeXhNJX9Zrhcxgc2jHV8Gsx2QQqczvWrSBiZirEzrAhRNDhGik",
  "key9": "5k5DCDPyxf3bpMXskZ6wXhdtXkt2EvPA585KUwTs3bs84eK5dvYgVYxQwi7hw9J1TraK5s6KNUU33arwTLQ6WpBV",
  "key10": "5Axx2eVqztWBPQxQ7EtqLNofoxGmGUqygy9JPz1oNnjDeQuejoW7jjcp4NQUoRJ4VBAgbZkSfcGW64ZBTPDUWnYv",
  "key11": "QPLpMa7AqbtTQcMDDHwjw3sxq9qY8wUbougbd1qm9SzMgNmVaxybh6S9zCvTXdxg67G1TtrUdPZwBkLHUTRi6TR",
  "key12": "3gDeVWQzsM9PdGKmXntp9iMfVSgmCvzrEUYHbX5CVJQ4ycpE9MNNLoKCgMPyjHVSCWw4sEskNyugjVVd1H7uWVAB",
  "key13": "2pr1xc2CTXtXjP8zWvanZJrPsj3bQu2ue9hJBHNTc3cQeHv9XasKybzm4aki42LBeWM6by9EMMtfd4SQG9qmFjpj",
  "key14": "ZDL5BTuPGpRobD42x3kFzCFT4Ey9PjB7B4MwEWSqthiVgUKTbsEmrd4ZKzn5ZynTLXAtNYxjKbQc95qQ2GbJNK7",
  "key15": "fLSUrdkSmSStdJRgDLcZtyiVqqot6cqvnETTFz7SqxHN5jmy7stogF51Cm2HjVno2wS3136RzVkGz7HsU2zgJXt",
  "key16": "BxQ1Ccd5SazQtKFY6mND8C8YDTczNdAn5mUZ4MZBXUUDPAvduTtYSA4VJCf5Qni8NfDXiX4qC1YPhZXyHVD4YKi",
  "key17": "48s9491Yxg1toa2b86opFh9xHHpbCgxyBQRrVhDbRCJw77nyD9uCCE5NHf5tA31HhUn1dygcbGNXCRrhH6eUBXW2",
  "key18": "4qMxZp29rTvJH9XiEtYqPUMonQkQRuHF1unD7fTHaHYezi2ft15EcSP3ndNSpK8QrkAW97UJDbgboZnd1iARTYru",
  "key19": "2uTow7nHaR93Nm31P8bgoCgE2gBdtdYuyXqnPa6FdT4EsEw8kWKXCP261MVKAeuiA5isv9Q9Hc3NS2F1e8JFcced",
  "key20": "5yutx6LzELDbt8XYpgokvsTnjjNZ5grWWauh7oF92osgF5RZYmeHikEpJ8HitSHGrkFAASt5CjYMkPwW2iJekGWC",
  "key21": "2CmMaW4LefWpkHihpGiNs5KcsTTmCduFJuW1NhNC9DqQUf8pA4FQh4G3KMxgFwKpj9BMuyx22bC6eYVTaPCbpFC7",
  "key22": "5gKWGJanBy9DDmtHStG925uEomaTpmacjYGTWewV6NEfJ9yUn9Vt1Ka92kfCATEQ1ogta4aeaERNS2DKfqR7JrKh",
  "key23": "656L8qQRsNxrWenHFhdAqMWDQaj1ygb1DH6ZcEwvzqkBhLf9ALaeUmSEYckmULQQhThkvsmd1S8RYp7RVF7CB7M",
  "key24": "3Zz9pnp5723uDm7iqZSdWAY5XQxk585TRRzJvBtsnXVeq2pwspYuNpqjS5XiFB1iwwMZf6irn7PLJzrnF4eY4SEa",
  "key25": "66XBTTgkD1fTXhttZPU7sPUJur2E1HJoKu2dqXSGJvUj9gdHGaUyatsT7ueRPn9whAN6Q8k9BNmriSvSfxAKeLU1"
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
