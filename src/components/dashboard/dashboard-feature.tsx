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
    "JdpTGqwof9TQN473gjwYbWQZXA64aLmUt7LjRZCH3jv29mnnLv1Dp5ajUx1ZrFgjcwzBtuAH1asK3KXpkM5BJ8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbFwp4nVW9oxxwQFtMdhD48CL9ozwzCgad6ccQEb8Kf5SnJJwAoN6pFb5LD5WEV7VYxWmYHGz8qqZ2E29QiUu61",
  "key1": "yk5kxJNoHq1JMRZJuphn9o4VquuLpyFmx6jBenFcGisgfd7xiUbLiDhoQQRyLAPNmPJjthWPtWY7momHKDaAcTU",
  "key2": "4wUSaG5gopv99vZvLeCY7ZKSWTXkQTaTjF14Bi9SyWNmp2PQE6rksti6rJniE4MDQhBGGRJdjKzZEdQDeZq8VRC3",
  "key3": "4Ze7XPxDNxJ2CSVQH7jSj9wCmR9PWqGsTkAynSBB2Z68iePjqkCqja7mxbNxYbuDit1jcSPQ2FxHCaxWwQCHgEGJ",
  "key4": "jLiL6gr6TZcPuy8vdr3ziHzUJw5KYKEnDTFhCkvcpqUHgjeXx2tQN82G4Jsf7hrHKnk8aHLsPPwg2gxnTLxq6Mz",
  "key5": "2s3E4Dscrs91cN7a47UMedtbwkzXkkC5NMNvYtzL2gfNfpZmbtnA2jjMtjCvTatmsBC7kXBe8j824giaL7z3CwUL",
  "key6": "52Ujgkn5aMELhbT2ca2J8sPhEzWUVGesDzZdBhVirCr4bTCkDTdWryChasQgGi4sFq5jzgivkgaeVK7WosndkQDp",
  "key7": "L15orRLUdq9iNvvrvEfgA9ajHdwp3zRQMsmSotacbrkBB51jDHUacG5qgPGoFgBLetP2i3q4ofxoqtduPT4DGx4",
  "key8": "5QHtjErzzi9Vr4MDXbFF9YJPHmNizQ3MC5kgjQF1L1mjHCYTCrWFatZv8UjB6eArFgG2A8HF1Qx5eM47UV7D5psM",
  "key9": "4HcXtiedQeZ6Sy1n5zbutL2KpNRwUwqgpUsrmfn194LPtG5hNnzLgWW2k58Uurt1BCDZpBrdQo5BH6GEUzuvPN75",
  "key10": "2W9vSPLguWCx65T4fxdxB8p8aj6incPyaa6winCh3uF4NqScqXBhrXhTMsjdzEo9MnYdDtH4gq92tqXvPhtxxZwW",
  "key11": "5XDAiEpTU43JYVQRhPAmxSgG1XtVFz7ntA9chcKDaoNuc3WUwhXrkV6RDvaKL63qLqjM5KcAZjZMja1y5RYikjxc",
  "key12": "3UGmmDSHGdYomiEwHapVSnNR9UUJPhHisuhPs9bP8XS1MWxHJGcgAhX9kHucVc4ppzoAFetGaT1tUCgnXGujRZki",
  "key13": "347NPiQbtUq1b8dSWHt1MFLf3D3ksTx53qRF3GxhuiFsC7KQvaato59CxzkPknG76oD7ZjaMnPTijfJjMNK9jp37",
  "key14": "2RHjCf79E1Yrz8rzscyufmpAJMNHR8ihJXncN1L5wPdGaNX2vCzkFQkWbFUfjiUr79UMrWT4QGajDhBTWqhFVgSv",
  "key15": "3LVHxGCGHEVcTBNvA5UtBCA5xTRqSwPE6Xmq5LGnK5UV98bkEtggVWjqkwFHFM5r6P6svV8DCs7LVCYviDmKoNVn",
  "key16": "2Eq7VVv9D7pu9QUwx8jHjrftfg9mw8hMp8sfeD49c1Jy8DQqBrrd953i8LymUiaMH799Y1NE14STqF3oJyA9Lhm6",
  "key17": "5GZSuFYx3p5aoWgKRw6DAPoNqTEjdfeX9q7vupL4Yk3By8DFnXfueokJb54budt56AzL65eaXfcKUwZkjViTdm4i",
  "key18": "5VwFnD7WR2ZPCPof5BRULU9d4tbsngzEjWu4ohh4w3t6WMSZrFVQSCyjd5UpUdwDAe9QjBHXcNhB35HFfWoSTjSg",
  "key19": "2Q8hoGDuTNEGBkyFmmYZ8wuCf8WufFRHiYAY3ybSaCmi4BtGQPbthCTPcwGAnJ1a7VTebTFCVpTZX7XNuKYfLVox",
  "key20": "4HTUwfgo5aakcZo8BNgGuTBhXHWuY1DktqCaJwnqUNF4kLoAxGK9HwmG54jakHBxg5Un4roijAN8rqvzmvzdXmUv",
  "key21": "345c6U2NpwqWvrcJvp3dcm4bdRsZDWjdMWDxtQy1Ci43WiE4S4aFv7obKCnFD4arqVCArDJPbiKA992m6tZeG3KG",
  "key22": "4Z18qH4FEpzw9PyTj6Tpc9piBP2QXqmx3559e9mzbwatzsNsFBsYrSE3qk5zKkK42iukXPN5dZxcT5gihiQDqHph",
  "key23": "mSigfGEY2jSwyYc7ikCaaWvb5TJ5ku447eJvpnR9L7QRKAgVST1gnC8HUKhENq3fULMReYnhmTmWsWjWwhnagJN",
  "key24": "AibMdea3CTYtD8L8tfd9Vu4dnFoAnJszDBQreWoiJruTcwf6BfaYgUaudHxW5iz2vDt4ckF4T7WHo4UA9XvK9vW"
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
