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
    "5dkf3kdyxXVbtoTmjbi4WXn7czeryn58sqTgoTKsT7pkARYNmWDt71G7G6zePHDrAbuUNR9XZnruSQBZ5Xkx9d97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smYgjgLZ1yTNvguaupdQDMtF9Rhz7A4qniz9jKskdaoJWsqk3Ws6ndM1vbg5WRy9JzZ2L2FP9sxB8NxDEXsg7uk",
  "key1": "oZRipzsr5nh4R7YCkEMnHxq1tGC3fKpFEvhMJjpAxbaBrBrWu8WodFZCEL1NwAGQBwRVEXX3rBW1k83VdupZsrr",
  "key2": "5LELQnTsbRZ3mqU3URp3RLBoeeJHwNAUAiTAVXstbSgcEPgrnY3p61hfJDdg6Dq5qGX7Y5BT19asYMGpCoi7dLz1",
  "key3": "4gXjbMxnUWuEJqFkbmoRyfBvLAciSJrNMZofmeUCAAke2woHUSLW9bHpoWd9AiCr7mYsfrmMqZacpzv7QrkxxeN5",
  "key4": "67B2faxJcAgCNRLmRea2wHcZGRQApNeKGpQ91bTWTViJXEV6m76KfxdLMvpEfbxUGECsacFK3jwVhsU9PdRRood3",
  "key5": "5qBQx3rkkT51nrXcWqoSjPqeV51YPFcNeXRRimZktZGPQ9VtRN5Wr197QdA8mbeabs98QeoR1KsYXzgdYucf5TkB",
  "key6": "GbZv3J6C3yCBeHh4PUucxF6wDzGBdJwn3VRoY7R2ZR1GbMLA6p5gitCiNEQWXR4EibBqCbivXzaEBRVoD9edw8q",
  "key7": "4NSUMAsb14wq1aB9U7h1E51MGZpPxr1qwFSuPjd6GTLtv2Qjt9DW2Lrpt8TQJmJLMEYAs4YMi4ziVTW5FpFHwMtw",
  "key8": "2UXpmS538UNreynRn3iXzmRuCrmRqE4KfeHxwErG4dSms9q5ZiV6ywQtbesCR5gJxYuS4gB8QGPr8T1nhzRqQDzJ",
  "key9": "4op6Y1ErPi2Qv86n6vacX6HhRS5x8FrtS2Y3phH37MFvcNF28wKm3JAEWsQXu7xrULERkn2UuY6NyHMwpUfM9gka",
  "key10": "4Vh7W6hSpSNKbmeqZWLmH8K3KLeAtSGxwvJApoUeJLtgH1xuY8jFt6psQKpFjBpFGsYgsiDepir4DVBr76cdN3SG",
  "key11": "5KfHHkbKkdKX65cRCbvrsHssAZxgTUePtRSXoydyJ2SBWdwn8rQFUbMPCNvrAuodknVZK9deTCN8f7BLhZedKbtn",
  "key12": "2c8NcXUXWTeJ7LGkBvQbBMTeNjDQubKKy4uG5XMWG7HsoxYCtNsMmhn8VtVBncaCa3KtmLHhyWTsKo2sk16yASHA",
  "key13": "3uuprdxPWGt1Z3n2SQZTwp8mZ9jMBprrJ2Dhkc3pqKCNGGgTugiMb96ifYG1jcT6JWFik5fr6p7boXVQYApsoMw8",
  "key14": "49oRYCbb1hVoPifuQafbKaLYfCjz6AqB9vazsSys2qwXcNsPp5C3jwsp4d9R9MP66GVrNNvA6CXMyEhGbCuPAYhS",
  "key15": "2SFW9JZCuRkrqWvXqubPJXoueir5Pxjjk7b35DXtVtZyi1vwVjdJabqWXLkWg4aL7q1zALniJcBcssTn5YHkSSdz",
  "key16": "5zb11xXeXSkNKeEYYATneMAdnpdcxsgouMnL3ex3RHm5KRsjV3u9cXTXugdc8QqJ85KeP7biFpu78Pufw5yH5cjS",
  "key17": "675wPgB4w2aJiYsayEm8aysWpBMUdZGuBGcetDxJVCx2LdfAmRoh2BwXih88cAoD9ysHbarQbxcDcBcPpji3cWKt",
  "key18": "5CkRybQNThr9Npi4J6m8qr9RhEntmdV9nCVPbi1J2cWRgs8GMgfgbd77hpMjqCuAnmQCJaxYqVNa9hbMjMWd6Pf8",
  "key19": "3uEVBdJYQb7UG5YDtoiUsg32JBMuY53NsqmmecvNRSmk3sDJVuHJsnRmDtNZXTqJvvYA1YNSEx7e1H3VXWKcecA4",
  "key20": "3TzaK3f7nFPc7v49rMEizWSr37Yw2hWUG1Bv1ZiFkTCu7Y5YJy8WnhL9LvXtuxiAzFyWkbx7yPkWuDHQJsRRSRXC",
  "key21": "4CYEyi9yo9iAEgCSRGYzUxYm2B8J1rm15b8k9cHMRezCT1ERaEwstN8TKjxzsJ4UdRpWZQJZPYsZVKDugpDKUv2a",
  "key22": "Z2eVnqFSHGvhj1pJN9teHsFVt1R3fwe3DFAYCn3WTkbM5UMydbJhufPDHomhTMbxrRGuGQVxm2PFvNcb8AXA8tR",
  "key23": "2z6iJNwzEdfQy5qbZNBQoL9TKw4cDzLsM8wm3M3cm6TMw7VFNcicy135o5d61swjxLPQyxYVbKM4YuR8bCLHeAfe",
  "key24": "4uBGcj5bkbVY5R9hQGUVgh5p8jEHiqjS9L6CZZzJEVAuNfnReMK8cuWNpTuVvqZS3WPtFzqxosCZpkdM4dzrxxXP",
  "key25": "37Mx8KFTSC8BPf2VsSTNpkUavPbjgYw1n4QAVwmSTFfeQj4J1UTcuqtZhnYH9TWyUR73AvwawBh8B9CFj2Jez8SD"
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
