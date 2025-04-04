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
    "3w15WnhoSx4AymGQrgRKxnqgwxCwXJoXTQK659XNmKaAhK48wL3u9Q7rEsjtCaDbBFYEjjhXnjWatpwK2Lk9t2KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJimNXN6bMArJyMtaAdVE6egHcoMyuf8hD8aJsX76Ys2axoWoh3opSkbUaLW9bRELQk2SvLk4MwEoGm1siMJgKy",
  "key1": "4btnt83XAumaj34Rx4q1KskNC8ikgaEhyRDXzo2JQULDvmE7XX54hHaHj54kjhv3VGHZ6kXHxENK1ZZtLquqdbjL",
  "key2": "2uJB1vewKPWJXNyhhCZUShuiw6oCyQZ22doLR1A5xNn5AyDJWSxHXt6Xw1Px8FgnyY7n5c9e8ikB15fwJT9A6yoH",
  "key3": "JLQqUK6uL8aRNk3wcFLmP4g8vrZ6W7NM9e7svHn4DY7K3eWKJ2BcuMpQmgY9LrihGgTXTqrnboX8omTCY9SqJqo",
  "key4": "2uvt8sfeYVWXJmBv9sCqfsCAu7EcbPixbTihPDJDUUpusQxBswrzTvpDBEdCaZYTHHrN1axQxuYHUKKKGaQR2VSX",
  "key5": "3GHHgqYtBX8BBfepTfas57GMW9MjkEg6K4dKA6FDHoWeYcPv4zWcHHccQshMqBufSuUUzmWm9Qmtea6gsv4558ya",
  "key6": "4AvM25hHGMx2UXkBHMuT8mtCHiUm2Kp1YS19M9S2dXTUP3Z9b2mcPCt7jGK34BFoL9baQkNGrUnR1w9ixLVCPNix",
  "key7": "kezEpJnBFgCq5du5WZhBRqCW2fQN7mQnX8sb8SgfyfGq6jK3jcn1LCry1VJUd9xVStukUEZ9RjgNku1Y9UVRBDH",
  "key8": "2URTnkbm3MckBguSSvqGE4hvZBpY8Y1qTfkrV3YUZmyBWkDNCZpZ65pSsvQZc9TFdcrgERZ1MaEtfc6tNpzWxDhQ",
  "key9": "5f44KqQ6fMsDFSNwS1sXfksB7grKfw4Z2ZV1rtrnDY3ViPQDy9wifxrQ3q6XxSwAP3HZ3VWAG2mxGcv6UH2fRbGh",
  "key10": "vSgp8RgRsDLpPGoofitDaMzLb6Z43JFjcmsja9jEooAarZmvDrf3wSJDxrwwHgCCVRZEGwd59TuPjSvrBHQbBEb",
  "key11": "26bW4LFu3aXx22rjKfDd1TGaKC22jA4QAyhUPo8mLR9ybo3cmuNKoFxiUhYh9qm3P3PtrjdUtwuybLjK4GToBNTY",
  "key12": "33VvMCej9HyyYJ7HD3Ue2khG23deeWCgcd6sRpMsvR2t41xtNF1T3Ay5m6Zi9WYe717sVHAF3Pi7zBKhu6bBu4Dt",
  "key13": "59EKMECF2dinf2jadjG6PZz3TsbdBNaLJFMyftZZBLqkjReEmmE1GVSYWmwxMkGwfJSkgG3eqSqzDuSNhjw5QfTT",
  "key14": "yjeuL2EVMjF7PARuJbvCvd7dxxBxudzHnbCYRq8cCWhHBmt73DGfAaRk7jM7u8CV6Hbw5uVFfB3QEeMUEsUPtyH",
  "key15": "3Ca8gjJanKXKrRcaCqzSCVK6GdFJBXY6ZkSzLd95m4qbVbKMaqFqvGTo4FG6eTAzPcgthXDU7sjgS7VGozth3ouu",
  "key16": "4RhaFGaMcXrh8JiYQe3qBfrFbZnq1btPHQCNh4WJFGVdSEovVEoCjSHhnxDwmX5vBbfpfpwB32LswA4WFEfKzpCB",
  "key17": "5vdZAZcGqmR8heZmuFQk9uf1wGZkTzPV7aZaN5WNJnYSCUxSvkPGXDYT8G4W1QRwAaZ6kJQc2aNuwRFtyHETtiUF",
  "key18": "3wnwL1C5wVrxtL3EVWFd4zJ9YgaQ4P3HJ2uznC4Svn5u7V7Pbs4GHVByeCUmmZfh8KzZwTjLZWoKGYvUh7x4wZaW",
  "key19": "5zBDmuQMnBmtmtVqdFifZWaMfc6hdmqjDAJmRVMmPmDHJ16kXGeDP1W915Ph2R8QQcsJckn35KNt2v5GCZh9nHbb",
  "key20": "5QKvpxNFrYFrRztiAj546iT2iAGCAhc2ffbUCeBZ6fK5XPBmEZpjLWKMuC6x2RiJuVyrha8HZK68YxbRqex27ho9",
  "key21": "62xeLnFJLepcrJoSpUg6R9eQ3youMwhWC6FFQhXtQFwmbyJPG5R55Ly6p3aZAKuDRBQqEVAwsSRjyTc8v9jLtbZp",
  "key22": "5w9Z7CV6XZUsdfu2CyF8ATEY4pDGCu1iJjS98gjSbXtnWSy1wUCDzzwDCtw41AAAXLrAK7d1KwWr3gcSNHjB22CA",
  "key23": "5wVsXVBrAbkEygUVqxMQ9s1cg86xnYWwaQwMgSUc7Bx1iXGNP4JTtJiugXCKDFhradxbP6jL5z3PHiGTs8rZXiSR",
  "key24": "4oMg7c1kDwVzPAsgzKZvCRtjoSxpqyR1iZaLRq8f1zqBGpus6tueGobAPZEmYog8Hke7nARrewH1VxH9P2Q4833g",
  "key25": "2SDbAB753bGTYptedGgCFwnZcqEYpi5WVSvpeBrkTf5fXhu5Vdcqq3GTrQMMDXxJUTwipfDhXyttAGkYRDjVBSxa",
  "key26": "3YQsVV3ZEcgLuNr7Jyc6wqD4XE5aEwYHdS5WF9WQhRdjUTXfjxBquhkZZQNhyoCVbQFmvA7m2rU5LyeSnqmn9Do7",
  "key27": "2jpZR6nD7rEDr2VZyarPVZZYazWq2hftjdapzSZs6UaQsm3n1TUjJqPWvrHojnGC4psS6WmUnyMgu7MVvrZ6JE54",
  "key28": "2f8J1LZSXM5hnAyUJQxt8qEksnfT5auntRi7uz95bMJ9ngSgS7aR9jU2A5iXM4UMSiMimjyfcufYid2Q5mepS5py",
  "key29": "5McH9kxsxC5mXmAD4P1T6nnt3hwpqdbGLkacdkQUFiwKPpNgje1CWQ4uRQa3YLUoUmuYMdSXqg3jseWNu4kaoysh",
  "key30": "S2VLntbJ7AsqEXjdexoyhbnLyQsxRGFxjkLiNJgyfEQvgcSCpefHiBZDPFTJjttwkJ91aPyC8w3xYcZunrRUn8s",
  "key31": "2KwV5qtLJfDMrhxzTsK4X9xVvdPBNo3UB1gzTpescPpHWTbyoEyZurNsXMTK27e3wtzSkidKRnB1Bmt3p2DLeZdR"
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
