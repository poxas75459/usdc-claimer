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
    "5YiunGfGcV231uPs8hCz1n2G3P6mhLYAKa5mnbyFxFQH1go7yzEjbxv7NcxkSbj5BCrfz8eTxATGELnUA8jAvHj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xr557NTf5Y4y4Vm26Xp2NG3gFmSgPqqjo4h5n627K3ypeEUAqkjZAzqqsb9umyoJiQjSe4JKXDgKqFh2JM5L4Y3",
  "key1": "XZvtsM6794a7dDBwRZLkNsNXUiihQ6AKgsSdcJYu2xiraACKCWNSBxLEvSUndLxxrWDSWBFF6U7nMQBDySfT8zK",
  "key2": "2S3Ua12hyDR51nqWDd3Fkxhjtv7pkJ3WTkucxzfWCZi5nfrTMmgxbWkHu1Zotu1nFb6RTNXXPvJmiEKZ3fuRZ2Gw",
  "key3": "3DuMMtYsHrPZKGSRSNew7ZJVDfP8QSC8VgP9e55NUZMYtP5NvGFnDSSdWbk2MdobVs4X5fCwdppGJ1ixtRVM5SkD",
  "key4": "2Jg8j9Bn2AYyrHTM1nGoyp1F43YBNDoKnpiLN1wsssoZULwevob2RJHnAmecWWHtiMnUfhuTsA6j7t5sBbgK3uKs",
  "key5": "2evX1rcbVgcwkU8wTgkmkxyUuuxfjDBy1iHsJaMvsTAiTbuidHa25ao7jnrnSR3PNsrm9bGk5ZYYtefRM9F5quaC",
  "key6": "5k3KravCe14fwpW5F22Vr5oUGHXSyYb34uPme9F5pVGikC8k4Ce49na6VEs4d11ifbpzabbr9wFh5BqaN6Gt8k9p",
  "key7": "5Du8KwB7zbmUrrtCDdm4Sp3aotwTze5mo1aBGEdiCju3QM4VA62W3Wgc3rk5nYstDo9G7agnRre9qTfGyhXNVdEv",
  "key8": "4DXZqCgkZG4v6xg6eLdnJ5gdqZLzWnKwigVa8AGARRueHW4PrWpQYLdCXdLyX42Ezjf5aKm9KciN6T9UbeWwGMYH",
  "key9": "JQ5Vay376eM9Hwiyisit8QPZGKvpZNnaCJWUHUMN8zm2tmTaQCWDobLgjj7o4CbtU6vyXbuSE8414BqWYAtgia3",
  "key10": "5Yu88R5nsHwN6ScZvvx6z9w7euXJLWugNtAAdxcK2qfRDRjMfT5HXRUSfPPtHgGaveU2Ji7sVy2JHwm4cCXApkZQ",
  "key11": "5NxKhpj2wq8pbUXjBGgASUxRdd67Ft5ugifoccW87HkzG24vrdPc8xot7mgQxjuCa7iafWAUBoN7SzBQCHfhXmpK",
  "key12": "5gEE3ZQJerXLxaDJZq2L1Tpd6rrWkLs8BFEzS2jNZfD2hFRmKxq1nY2bPSWE5c8DPTHieTKLqGtFpwTXMVNB61gA",
  "key13": "5NhGLaJB7fHZRNnhkxAbR27tZq239p9BazgD2Trn9kfvLH7JNqmUi3rnbR1MtfRdJzL6mMrwXQJJXcwhLAz29Bo1",
  "key14": "3FZhvrp2XQFFK47MVp8eo6eZGt8BoRjL6wLFFdejB1Bs2SXArcfg8TodfhDGq7PXMT7K67en9nLuzwWyhyBWxdfx",
  "key15": "KwPBkUNTswh2Qbbkdb9459VbHLnRg6J5xm7CPXStmFAMXVnTZaPpayrDFxnCyEC7QZMTSadtkVjmBvnRE7yy5bn",
  "key16": "5EtqELbtQcGFNLWq9qDnusfCYGjmXrq8cpy6WMjhiaMN3yi3pXCh9VS9ebrK4sv7ysVMhSKB2iJ53JUi9DHqwBXJ",
  "key17": "K19jBBatgoytJnjDkwsGEggqD2PEEDri4PZ8ztLsxWW6uEfKGpnfgNnF8uk2ds7w8iQCxwshUyyTNEhRoa5vjKK",
  "key18": "2awb1dNRha3auNBvMvcJqtJq72WcrPLND3dsZiQK8DukifXsjnF5cEGTfaFtwJbDVD3GouXGPSg6BBUAL6nLdXb",
  "key19": "5SCRzBPHh7gZnxFysqdNywabxtkZLjPGsYpSRw5K7vatu4Mm161nG5fkq6encgfU4qXUXCeqjrwyh8uq64WDCPP",
  "key20": "5Pe4Suc4LsNhHuU5DDB9LVZ28Ka2yvwK6HGqkg2VgMPm3WroED7ta38VddLWgba4HcD6GwQRqv7V8UbdpM1wNEQz",
  "key21": "5zgbRvMCJfKxTg5gkyqybQMAXhMw2yzQgm68YQTvN5oGDJeU348J2hZrczRaRykbxrBzY5boujwPJD8CqHnum7Yf",
  "key22": "4QVMxNtQvLfHvS5YhFJcV4H8iSwbkw1nw81GCP9LTx52em2Z7312nhDTtkDMiQyo7wmTYukPvjGzQt2TK7Pv6Ymm",
  "key23": "jD4euRZZ2FoSz7WJBJCtQy9VtVKWsKX9i7CuYxsPs5AUWYVfRKFJH3qo6bFG9mtLCTsLsq64rzSS8q9N5mhrYs7",
  "key24": "DoQcWRaA8AGapV4aZd3ft8pFkePtNbetxWX28umtkoYwfvMnAZJYZDCvZeULqxKbeuzis7S7QF15P4tah7z7L1G",
  "key25": "61U7Ynp2BrNtcpGfTi6v5vU1radBjxEiGRrPKCZmvYHb2DeZgAHscA9tLvAT3kJPv12TGvqUWovibpPxVD8qyuLF",
  "key26": "32EkkAizCqzBBzLKCYNZBCR7AaMRWFKeWa9Kopo8RY3TUtfQCJkxWyhexsBjtFTxseizdxUoDRLUkezQVrw6yqat"
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
