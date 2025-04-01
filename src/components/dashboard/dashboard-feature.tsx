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
    "62YXjwLH1a9wNKaJW9uTNpNAjvsrckExJxcQZrCMPhW2TudB3QR9QG3CM1ycfQNRXSx51RSnekbxcKFXqwnNvjR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMDJ2BQnjD5d3WP63KW7CpZGXCBCWqjiQBZAs9wLiGYfC8VwoknCquvY5t6nwCWWfBn6xfuDjg33MeTRF2nJrgS",
  "key1": "28mnCBSu7XKPbwEEs3JxetzAkvYVc5K8ynL2XDUWnycSPsVBXpYQDBMY4zp7Es8VApcxFnYFL7ZpWcrbMh8QHK5s",
  "key2": "4bPvBiNbBhYjhXCMMvWFLiB5TNgjXUvyFg8skwehYYnbgDe7jKjX48MBqYr3WZ5qK9BaWQVwgpXfT3S2BWaoS86i",
  "key3": "29krHa7xxSZ2vfoDVyeqh8RqoPfoa35oVNkNHCuhfUVih8rxJHAJ962dAikG5dzJWY3p5aKrBGNAydYVUuF3XsYw",
  "key4": "3nNEeTdqcL9mAMpHb9BCp7zXbLftvbZ6vrFfFnc7cRHmfxUKsGZ5PvaoodivQbUvSdy6bDWpcsSVsN8usBJ3ge4y",
  "key5": "5j77aKcveXWGttsfNYmogzbuK63Qq6c8hQCXgqp6bh6scxkLrTChGXUV3vchAzt28r2AsMsHQZFanpST2UsEMUf3",
  "key6": "54AjxAmaFai9PwALcq5WL46DyKgxNiGbEETfievj8XyWzjwpbUzbvW4KLUPw4XdMNdps2tDnPgtFGFKNKULwgfUN",
  "key7": "oGKwoEJwpyc9kfVaw1brVAb1F3vjzSxpo8rp56GTkq2pXzwR7WczpWM72NVCdbz8v4yuKyUyCi7PA15D4VrEXRq",
  "key8": "5VgGRzyEdf3HcxtVxohWcVgzqeokDuPP3VxVxsQ51PtRe8gR2nwd7ZDkV3xm3ZxWEARQmymCXUxbyYusEut44vgn",
  "key9": "28usibqMH1TV42mXJDQB5FxeA2uhxEpFwJEzKGLU8t7cHh4nSkEz1bLAJp6bWdp8pYy5x2ZPr5YxGF4DZBpMGs5V",
  "key10": "2gDg6Qsfyo4w15SrxKxHzVhUUq9cNDx43MMP5vBxuM8t9QZr5jSk8WVT2V9ZsULzDdkYA5TropKT3X9UPQFinBBb",
  "key11": "4PYJykR6PQc9Y9DHNswQm5vrMkSvdpQ8FfRHDn8fyL8nbkPskNR71JetrZvbZcSue1BRLBLzKqzLKvx2Qx7VjJBW",
  "key12": "5GCRyUWd1NRFqjnXWQEefKsGNJPd1DNXF9sN2HLPEhEXj1LGfXPBf1hSjpFLNDoNtvbLwYURBmR39VpHT3Uq1SBR",
  "key13": "3oXGMUUSdFyr96yVScmhNHfaRmxARBFXojnUFEJCZHy4fMSvG3thTsmhzq45zHd1TVnWunv6cZaNDd7w8pxMLdw3",
  "key14": "43kWU1uMnUXi47RHE2ZkCxM6fbuugv3N3E31ex7pn8ZLiJR2bp1TCiMGw5khLuurtrm2q687CPyrf7hDxLhMkB9h",
  "key15": "4SotiHHjUY2gSJA5y8NjD6KTXzYKEhyzT83EbCbAJFwcTk2UMYC6ApwfhVmp7qAhaaPu6FByZQwpc7pciqCGj8Mn",
  "key16": "4QsrcmXyMpz7yjqjSHhHuLXFsZow9xBBvngYGAgZs9YX8KkRXazoSxEtryTgjJyq2U1d3rb92RJuhJyFVYR2zBYe",
  "key17": "2ENXLSyH9qUJNZAq7sbXucxijk3PHenih9r2t4MkLKfc2NAWErCQQ9Pw7EhYBiHz4PJt5tEn3vrAjrsx5DhiXqkc",
  "key18": "3An38eEHxhqVDRw3XGFWkrkUXd6D1RjzpSPz9pT9MZA6TkNTcWTyr828Esij1oMwPNyWU8wwdweJSDrBTsLimuDN",
  "key19": "3kBFoXN722HLYi41ZqBa11Ru3BwwYVF27NSEYTs5bA3iUdp11uHVSsqgkyy56gG9fRZrE7zr9vqsDS9r6aE3cSXi",
  "key20": "5pBB5upU7qGKMtBD77p9RnPiS8E3GR1xWSFNYRqijJiYmCGwzvcb2E6dYk6cpi4wGyLrCBQFHxXrKq8UivhocCx1",
  "key21": "3bAPFQ5NCAhbcs79Qmq6MYJXUcGriThdNBuEcv4Eq5mPf5ppfy1op2xKeqZNiXh2DpemT1J9Fxw7MPPUhXPEnocJ",
  "key22": "2dvNPVRr3fZaws6Kww6nC8KdhazN4Z3WtFcG6aBuiGdKzAwQCthfaqtrg5Gz4sz7XnVAPkbgEr33m2RinkKf1tJA",
  "key23": "51RKBWCxsXs1WdCmtnr9iXnbRSLMzyANzGLbCXjKMwi9XyRBdkiXqCTKJDyPUYv8Np6CKsnHFqLCrnLfeA6YEbE4",
  "key24": "52muZbSQY3dVuwDDB2asV1HLXeXCULawMHcBaFJTxSKJGY2224F3hNrohRjJoEoGJ4V8dZV2kSfbugKYozsEJp75",
  "key25": "65zjoyGxb3XhJZg7WMQ1829KGXN6iSzymXFVBMRj3ofQy5iCRXgT9ZKWtUzML1dNe6DH2eAacanoZkLG6d2whny6",
  "key26": "4kME7Vt9dLGcHife4DcFbYsqxZR2hAmLDUF3uDjrtEqd14L9CyyLdtuavd2qfmUDHKXVLXp9HfXsBERuW7JYYxo7",
  "key27": "4FCEMV9uTkkZxSnYTDXN6hn4EsFKTGVABevbyc7dwRbP9G2mHmKF6mHHys7pVP2we3up9Y86kEYqxqBwDR4uKZPQ",
  "key28": "ohPnjbVCdr1LryVeq7Tk6nsZY2MpLc8cauu8HkunBj1nrDcFEUaDpUMg2ZRQLb96byfwYenFZuw1jL7vDr6wCB8",
  "key29": "2NG7BTg3MpkMcqocTruDkWqBEesfirx69UgeaFSH8K7oG46LgGk2qFP4bHLw8VhtetmMzmdU7bA8A9ir1xf5PQNH",
  "key30": "cXdviriwQ4P1u2uAWj62ZBGVhcCUEdwZPCkhJVokSEafir1qhFBQSUMR1i2kyPrV2C9XQUzC4xyBTsJVvSLhV4F",
  "key31": "3Qpb9wgVWMBfnfrVw5vQcKngnfK5Zc9NZrBsfo5A3javW8p6M3gxuG9bQCqvKuJiyAWyC3rPhwUoSZY2PS6eHKJS"
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
