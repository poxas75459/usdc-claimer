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
    "2DdkJmxgk5U5zbynNFa4BJGvex8iftLt7M53tze8PztBJQpJkuLpKt4hSkeBN42G4SdhobDTMLjjMxeJ9cpDB2A9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MxN73dUo38oUR4y9pxw9uVgyAafgzyTPCGTb2dRjh1txj5JNmCcBgc4URRVwsK4sKQbG76D51RvwPEqmDjH3Unv",
  "key1": "qzWehyyVSd1RzbFVe3vAc3AhHKUzMrgUbu5XG8HgbiqD4XJgDY2MKtXehorvuyZzx8G6hXqtoJVF5LQ4KJEBHbz",
  "key2": "3yfXTsfDw5oU3qSW3Lta4HgethfHrkMuz1FzvT7K2CKGmj7TaG33WcqnMn1XGQMXMPDYZk3bpppUAydJuCCq8WE",
  "key3": "45tc3QCg9zqadLSoWXZFpxBUjZooxE9RMG6v8F7feSnQ9qtUWCN67nZgmwE51nQzmyKmxruzZ4szBgztmGyUebqW",
  "key4": "c3qneG6mhHwytRhYaXCLZAYWJBXmVEWns5su4fAGtVoLjR8w1AbWYXKPdBXLSi74UxscG1XSvZAdq3HWEZUSfxb",
  "key5": "5SkhF6CBgJbrVcTK7qagjsgtTXR8kmetjoc8F52wgHLSHp81N8H6zvsPsUknAgJVxNT6dcjZnQ4T34oXVBp1NoxV",
  "key6": "hMAdmn3ww1A4E4XWCK7UBqEfj28uqdrjfdL4MCimq23zHiVku4jAsGGszGYUZgd6N9AW49n5DA6MCpUn6hYSHEj",
  "key7": "3FbnCNvGB1rE1HwQiyZ7VycuWSZzcSMzEbVG9JeTBbGijy4KRKBPXxJq7ZRL3qLfQRChaXsisJBLkhAPK1ypZUJL",
  "key8": "3VVoyDFf4a332astt5FzFF4yRnniGgyBosZfe3bjtWfkUeh6W6rzYRmg3yMDXqHPgFd42qJ7qgUBdN2yz9MErXg1",
  "key9": "5jyj4Bkzvan3jeUwdeyianDbgvXXLadPkLE2DGY7wwCQbknkvwpouTyfECxMRD3sDmKiz5ekDevEnsAV7vCRkHTT",
  "key10": "2StNbsCWzpEWyxmHDFqTpyrEppZw8ceezZv5w1vxuf1j8HZtBHvPizJBXE7UXyLeDSVDWKBah9KCv85cBn5VJ6so",
  "key11": "wVRQDEpyoCWVJLv3r49rHmESR4sWr2eg96vE5icHMLBbRupvyPmMJfLZ5EnY6vMB21HAWZRW3hwvKYomZWy6rcj",
  "key12": "scbAh6iAPhjfLz9KGNeM1UMt8FSqUEJCKdGr1Ry4Cs3Ra6VpqDNDTh3QtWDeFe4iEco3sVEXm5uK9j17DVDUpum",
  "key13": "52XkSXjFR1PxPhaegcdTLpjgSw1XWqZvxxinrf8QgbuWQnamvH7BLTogHWrQoHApF2nr6EoDAaYdPQQS9qxwVWjz",
  "key14": "39CDEdxiXwt6QsAscFaf6WWNwnTwDBoJ1sn1svzX9UaCRaJGT3tVKvm2JXRJ9e2RVwWdveyK6P8QPXVFta22qSEa",
  "key15": "3aPUqm3DYRS3dAjsiGYjp31j5DsmkttRxLRvkv51XQCWFQPHGV8TY5xvzARdBHzn7vzueSFFGKssRjXzpyKRjBCQ",
  "key16": "kRxhSKvGcSs4SB2zP1obMn8yg3tVioXHYhR89kybQ3aVAa9oCAef24r6WfNSchEAhqLuPVH9wN4rkcY4cVDUtpH",
  "key17": "2R2ZfkFbgF84WKXN5NB6K6pEG2Kd2C65K1qct36ie5fymCNdihurz9PagGGLAJxgbKL5yK4LaJaFBwTmHqKxTQqZ",
  "key18": "3AX4mzX9a8LKKkkJCRqgRgjixATt6DwPQo81g29sPJtKsNvgZgSzomKUZMVMXXykwNzo5avewWsA9KGxNXxLTuZs",
  "key19": "2iHDYGy5KE68AGwcKDUnsi7x51rfMVMstd84UyXUAAao3cMkdauYiLTMPvFpeQsMFKDUi8jm4KBsTXUYZQ5GZ2j5",
  "key20": "4VkuLbAebZ9adEXUfGXQmNfDFRm5o1cyvxAwZYv1rJk3bR5Mz74d1UC6Yjq2zBWnY4BJC3NsoE5KF7fp2RWYoqit",
  "key21": "5GkTQRU1tWnAVxwpsoTvLTSwh25kJJqjKEgHT743F9sueXfNqeAPa9iUJHVxvfr9fAQTqzUysNU3N7GWAGPBNGSE",
  "key22": "4gXtNvLQbnmGivXmXrcRnU8ikb7sYoa1JBNMwJNnrusLhNtXue9wFKZRLwheW2DgcjH5GC4sp6hPk1B6qwc5NKeB",
  "key23": "5EDKJLx2DZEssRHoCMqZRKEv1xXhsmbRgDzjApLURJuWfRLAn884cDyPsfEqivgR4D6KYpbnQbcP866GEruawdma",
  "key24": "3PNTUDULE7ZVQb1QSzAszffiYn995pjUFjVc8XRKvQbwYxSPDYT81DYEEQM1KecPG5J6iZ6ZnWuHj3fNsaJsigGk",
  "key25": "2uWwQ3c5Dy9WCcXVggogJTJdU6gYQ6fh2Fw92Xj3o2Ttst5JBoXbDXVWPr65aW8VtLoe9wL2VAsmsyPDtpaSf5Jr",
  "key26": "5Rox6VB4mLsKqvDPeHJ7Fxj73opDTx1skdC1pyCQzmvnAHoT7RNoSJmauWkSmgWBK1Cw9m8wbh4G5HfjeMMpzrBP",
  "key27": "5qjhf5eQPaAS9RMaeTzjf8V5WGuch4pmmd9UNqTMY7EGcp9yGQFaoY8sDWuV52khponNPg2Lh5fYPq84uSxrsc3K",
  "key28": "3TxX3ZxTUbTV84v7xLiHFeXEJfmmZw537Afoq8QB1MgqgDN8UzN3d1mU8Kh8hd5oKuwX4iZY8n1yuNnRhgqCpZ1V",
  "key29": "3Siw9AgRPgQnK1DsC7W1p3EskiUR8pGninrSVe7EPipEBzPrzhqpykBQwAauv1tFnGPZVG5kUYqN4AS1z1PDAyb5",
  "key30": "3kh1CfwoaRbEPT5Csuvg19PrmfCCeWJHAjUwwUNkL28C83NrYuordeyttREEU6t7uHuw2QZcLBHvPCB3tjXbvnx1",
  "key31": "2uK5oYRsP59RxXdZA6djAio13j7r2y34J5nLv8FCau7RtC1gWrKmiH5B9sLtA6rAF7eTUj6QceCNBQ4CUpgAHMek",
  "key32": "4ojThGvsPZpkJufjCAKUXotZaKzCkyF5GvvmkDA6JVDoRX7bZrCtUApH46AZw6BbjH7XLuWkJDay8FUKmDYbToe8",
  "key33": "4HgyYzreXvtLRLmGN6AnrJSh7ua1jcaybajQ8TT4uSaQ9GvzHQS7rjYHDcEgxzrG9jV69TxRuXT6Aa6RZQgs5aKw",
  "key34": "5eoDTTx1K8yBhLvDTTNwjKqYoLPGWTmwXweEmUZD5ZTzi3DdLb7wY9vmE3Mo5GdWaJqZVvcyQ8mTQMSzdYUQRQUM",
  "key35": "4pAe7QcfjtMwvp7fBRh1ccRZJoZvwv9T31dkFHdQsDbc6EiQQhPbHK8qNX8ECaPHEvS6wgSx88nZPtLtsy53ph8t"
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
