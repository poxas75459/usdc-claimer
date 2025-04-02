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
    "DpVFzAkrSFFAVxi8CFUcUFx44pJNxYdZkLJ9wewhbY1RPBfZjrNR6EfVxSdU8uBbRsgb2LRZSgpTEJjLADBxM5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "93scnViQbtA7bXy4kkRoURJPn5cXfzP7QktpQhpShFeW6Zcv9Yuu11QMe3jYjMk52jcj8fbiQhFz7ERPXFNc97p",
  "key1": "5JXc12wbDiV2kK5JDLtKdYndoLME1rE2pkk1gGBxntfPLackfRBLU2kqSLAqNZ7odJV3HGsTGHer9jhXQJm4S2PZ",
  "key2": "2PCs9vFfpbVQeHMdrJ9yyj7PapWBCju5QE3q5j665EjEwcKLMS86MS7BK88qEphHTc8JJtQWsMhcRWRc4N7CcT63",
  "key3": "4fBJdGLBvC539tbDFxkLD92jb1QYhvtZ4aoSp2nCuF5yf7pLhyePL4eeH149DTueofCa39FkEghNtJfk663oawxA",
  "key4": "2NkTr21B5rbkwdgH2zav2JPx43Ls4ViPY6Rdrmi62jUe61pm9hy2AjK8HCPXEzz31pCbnQ7ZS4kTcvH9r2jbbx4F",
  "key5": "5jj6o2rXD9zttDEoeJTWCpVduUdU6kfFFn9ocoFsm1jQQAm3zYYzZYRUcJGtWYvJGZFKrEDjuBWwHvuWCFwzQhsV",
  "key6": "5ieLQbpCcm2dYpFuXQyd3QXjUxq8Fso3ArRux4cm9Kdrs8g5s17cZLQivJB3D8NtRos7ejHETLsrTzPvjz5xQCr2",
  "key7": "2YUMRvGJ1ok47i4koBQtFBzfCEEYT65DFhgeH3H4edpVjf64YW7ZEavyrqekG8BdhBPEw9Y6awvH3Q8NQyhDxrc1",
  "key8": "3vpTnd3cii8RwUHjG6LjmkTYifmpzETD8Ln9FXyvDse2C7hS3tgh11n8hcvX4Gof7MhRaQBgtEuv7MPJZuGpwwNK",
  "key9": "255Z5Hrx5t3G6pjq2zQPFyyUuHEaFPx12J5ooyEiYfCAxVg7cRv96o4Vsk1z5kw3Um1CzyVyRGGC8ZPLdgkx8BBm",
  "key10": "57sa6PtYsdph6fxxPm4prseCE8mJfkEEPjKJDX55duQ9KSrRehgNhV1GL279XaYyRBsYPyfVnmuvsGhQfggShh4u",
  "key11": "5tkpea4MSLsBrKLSfurU9R33kH8FtwsAc6RStQUy9CetGS7fTwB5JcqZn9A18C86TyntJH7Ewj83SqdvN4cWqydZ",
  "key12": "cA8oAeCeuCb1KAu6geyjHjEFwg9xMcpAuQn2a2FbtGLUwegWYhZtVW5KQPhnHKXqjUeGtBNBPUGTEQjk9MmFi6d",
  "key13": "rFZaLNeEpTN5qpEhkrKShabgB4nFpMc4WDWPWdcTSVDpdg8xG5nV4nUJQavU6nsDew42KatxYzABFhpk43mtUWT",
  "key14": "417h1ju9ZL7KatpHg2ChmfDYxqQ4i2eCZtPBhBLqVi5MPEKjGWrPQQgGiWc7e8Ds5KTb6BKsPLwjwVTTZmZxww1u",
  "key15": "3ZS6FKr1aDxu19K4K3TxiVPZ3pqwQWRTgdXqxi1gmfsY7LsM9xiYH4HaKKNhqPb4D5PxBK3sx97L1d1wDGHV1NBt",
  "key16": "3vwgsqmBoxYjdvixbe3FRdVetuLDjhZv74yS85RxAeRCVhAX1K6cV3gnAqioWmi7MxJPJYa2CRBs44dVKQeJNUVH",
  "key17": "2SJBeqKAMdvfFm4jVQrEiMXwPWypFGN3DcJWA9LpnMDNBzqPSNWH5XtmDmdm1Z1sqXBgrDQYvutfpHQ6LTXvdfWm",
  "key18": "yTJvZZq54yUdeE2Jjk5fZogZxtpor7d7a72rhJ96AmjfQpDfQ16AsRJhTawk6roin8QJ12APCCAXHhLsi4PbZcm",
  "key19": "3yfWzwiqmq4CaovMDTWwQH8QMNK39KqvZNVGK5UbKiAUEanrhCi2GDDEznUbAKcRaiKb4XUszEqxfVPshDKSoL3h",
  "key20": "2Vxr6Hur5EDBho52ta3w6wSJnRGbvBifXTRcs7uyxz51Niwp5RzCqyw3SwX9P4dwd8HE4TmWvG5fx1n4uVafoR4e",
  "key21": "5MEJdepb4mRj8t6V7aLNPMWD6ekTABSurDAn3p2tfqXGcjmtELChcdJWBbTvg2QNVt1oKGWSUvS7ynNqgbvBjHQh",
  "key22": "5fPWPWQkxEviZAVtSE6awmaA4VmAKuAxHJH7MU5hFjjMjbmD2zMJEAtkm6rZHrcUKY8aibSuXrswUzzgexW5KZAo",
  "key23": "2e7UVEMna5wjcJHxy1iXhJQpsBZu75BoWqPc7DmRkQ5732VDxhsFaYBEjdYXRy53fgTKz9k5WcmDrHnJThQ7ozUe",
  "key24": "4qT96Vncvy1Pxvzd9taRgvo67GC5d7BtWcGWmdHgC8ae1jCkSHgmNPYVoyeTSR9dyRzwxAb8eoyF8gZ3e5JQtcD8",
  "key25": "2bX4orNG4LhmiE8AtX5gySkZaeoPpXveQTXRhTe4VHYN8c5NVL4usUTdaAXRVtCFCjtAAC7baZ7ohxMq5SHk7Eef",
  "key26": "aQYuWQRYTpJ2sDoCjvcPRRpcUZcAEUfDbi9k7ZWpRwXwTzHxDYRbFFJVCyaGLXJWU4ySKjgZCZF6GPJiRE46i92",
  "key27": "5sK1gbP9SbGQ1hXLvwSYmTr1Lrsq8huAjQ5gaBqo3fTEdkP8a6uTd2jBNWB8zAqCcKtmeSshYcbL7JkQ7cg5HLVa",
  "key28": "5sEeC5kW4mh6SyLpgLtYfXcSbXpvvEkppbiGg3LreLewmXuAt5yqCugZS1fni1pzKU74YdEMm5nx3TqXWsYcC2cN",
  "key29": "5gM5TuRrwnkD9Rroku4own3quiK4yhtcKoK43Y2S54wL1pUVxLNty9wDLNkMJcq9uRjjVw8gCiCDg5sAZC8kq3aK",
  "key30": "6238qdBDVDoojnEt1Eb9a88hywbm2bVLg8HmYnfe3pKjtcLn5pTcWWvNfu6gRVS4HvcWMEicw3uHhszP4Ewu4Qb8",
  "key31": "2FJDfCUfxbCiRnWThdtXQRx3p7QfBBekzdyTYKxXDGyB6excVPpUgbAAvNm8dwbTvyvuP2vWsru3FkYSzH5rPwag",
  "key32": "Vf3ncPNF6HAzxzTD1h22K1VjJQDth6ESYGecb5gBQrqhvMQNPLUzEXNdZPfVL1aAKcX935kY54WR9Wr32g7ScKZ",
  "key33": "5xzs5NMqYowgyybF3rLkRSkspK2vUDcQ2APiStGMnHmq9jqWzhUvbhTYbB4U444pPsaYnigCsi9XtLw3AyvaYT1M",
  "key34": "5YWvKkDynP38YyC51yPcdqphRnoYWwreabY6u8pbepcTwy4ipdvuTbErwP3GoXrNV7ZJLAc61jbDQHqe1PqTyWML"
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
