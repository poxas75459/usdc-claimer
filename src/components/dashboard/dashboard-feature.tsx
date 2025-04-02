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
    "7JoKsaqPXKbNrE9SxCFqaaZX9xksFfrg4kokjLQ437eXFr9VhmwdD5Ga1EEAhXRKT6yhcdXZLJhwmKbTGyyAyGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v2L6ivTP7G2kSvrKkmAVCaiYmbCNXju86UELagQ8QGgSWvvbFHJX3W6bexnNSuckMfKhTpvE3TU7VmeFFDbz7u",
  "key1": "3X5VpqhcaTHdTWp4MQYcUBfy3h94mYUiwuKXF2QLhjgXUnSKz3M4nW3K3eXs7LUSUbY5w5sqh2S2jKGnwQYid4Kx",
  "key2": "2FHvWvmz8deH5U424ZbvBAmcUzkdunEwpgAGCaUEVn1PNX79XxkfhiS6oPz5xsfpMnT1REqFKnZVgrG4FX8CMw1b",
  "key3": "3UXtJQjHsEr4NMQSeVHrsDnv2gBbqRQdRHg9rWatTCNGZp8SVuPDWiXw5CcvQysKyqNk1nA6SQGPn5JnUAh9diCj",
  "key4": "s8mpZgUXxxEFpQR696CngcVzehZb6HPCHKUK1TD2F2E8KE5zRSoSohDyopk7ckdr5yPJcnGQFPnkyDwzZQGQ7iV",
  "key5": "5t5o2Gu9D76GgNoj7WfoJRXMcUJWycowSbtFEgb6SvS5dAn1mc6qzJKCgT8zTNnpnZUfv7tZPnVY5xpGuhkF6ATE",
  "key6": "29EopjgUJbZfsTww52A8GjCkNTZLxdHTfkQUJyn3UhygJgmt5JnPwoVW7pbgnnCcGXavkdyJYhuQvvuCmU5FQkuU",
  "key7": "3fB7uiyZpT1oCRsgvGe17kMYWncyepmuXNTjiyQL9UcmC31QCYKfEHG3a3jhFcBZKnZjz5sbvhSPKfiWnZbaygGB",
  "key8": "3zdUSjSrzADUX5s3Xnw1WmXVvSmDN5XoYRfPRMYLDtMjw8WMbVyVMXyJzn6V6jCKpYcyfBsXTwZYJK5UqMaRptJm",
  "key9": "4mjcXMgDWDx66nct3McSb82rvhfpENC9xbfEsuLY3kVFp7qWyrt7gMFWWa7vFegk2KFBDaq9NcabWzBwMMh8AMet",
  "key10": "4SryMKKE6pcCPhrtKQhnpCXV8wwerntrrKJsUj3FwSp8S2uqiz5iwbNwVVqdKQqrDZQG2tDYXy9ma8HP9jGtKbQk",
  "key11": "5K95MJvkwQxYxXbBHaqCcxdvtSrmEsUaR4UUmcvWNeaCboWEuk82WX82mtkJuW7fDwLcWxnnusZNizMoRnNBTQm7",
  "key12": "2NgjmQyLjG771JZzecqfQW8gWmkakco5overLTrL2VbLv4z7XqR162fdQwb21uKQPbaQKA1yaMFRaYwgF8zi9H5p",
  "key13": "4W9XnHhnHaKDBjVAEK8TyTaqVpnijWDCFStALLtexY6SFDhf7PuopSxJtygsGYSYFaJJEgVasrWtFyi45q97rcCG",
  "key14": "5yKn2GXAvhvjyJsdBquz5Luk8ZJGgBcpq2QbMmCSdYG4an7zL2KujmkhwuV1e5tHAZ66gWtHdWGSGbkafpFNzZwp",
  "key15": "4MyPrBbAw9Zjk6eGRCKYo9sXUWaAsjeqhDrPbbNMuuwUmWDCqhrhtz8Ye5bfet5NRngnNbFZ3PFRisEGETQi6yph",
  "key16": "4UETK89qhYDUCVpkhKmmZYZjLKHeiVEgUTDA2ohJuM4nMSiKJV3SAWK9NVThD6yDBLobgV2GaFTh45eL83yJW455",
  "key17": "ZaKc6QLXSoKcrN791BkjJvyZ5B49nyAGNZXL1Qa4ybaHFPk2NM7KyQV6R8VmiAReyzsvXGrRB7XgQiC6v5akTxZ",
  "key18": "5nh6SoBat5Fw8N4eq9GVq8XaBeDJNGqhNe5QfmbZ6gR2Xp2NQX6F3jsTdWFrdabYCC4rJDj1cwCFboMTmW7gVBsc",
  "key19": "UT478GYFjvw8dxHT7bwbiqWnJ5H43rBXJL9zzDLafZiojkJc1WsKy4MHhWpyNSarb35Biu989Cb6yjSMqKTe4aQ",
  "key20": "eZGobiAGBkA8yQUUxNnAaNdfSqWWsT6cUdY9jb9rMEbWFDS26443X5BDNQVE2HMDLZQE4eBmHSnBoa5KqrB9rbF",
  "key21": "37zVGjyz4prkyWjM3EDKWp97NKsnTfCEjPUPRXCmjBZ7E3Y4s6ndiT4qE26MsvBDwbVkXgXK8Xhzyhx4RRqAWtZG",
  "key22": "yDKA86jEvCgVTHGTxvharyp413ApT6QRZprKYGif1tKKu4Xod3kU9s1jwXUvuB7p8UEFBi64rY7nFHq5W7KTJsf",
  "key23": "VBq4US3h4RLAJmDEehnLi6FUgyxUg45Kp7Q57tDMcGYkh8dRVAqk2nihfRjmXbWwVoAJRkD3UqvAccePihXZ3HS",
  "key24": "5bTcYHoLSB7GEwuZJiw4MhgnQPBpeU3Ljv1Lv6sz2L2Eeq9cLiEyhETFA46YJJypXiUyUxuwN52RegjUVzZZD9cC",
  "key25": "3ipmn9J82KyE7S2PeaB8VghgJg3TXdG8MNgjFNUWizgENoeqhqvY3avnry5X3KHjGRuQs1kpkjGFPUuh3V2wkvcL",
  "key26": "ZLWfJjnTZoFfZF8i8U9ZU9Ha3XePHMYxTW2tTYAQY7XYfrKVNGKX6KJqnTyJsTntRQ1JuLQYndjjB26EpgczhUU",
  "key27": "peR15R1Jatr2dZA6ohonjmgSzsKWWgGyDG4wjaFUvPuTRMcW9MF4RW2UyAdBPg7MnDvFnkHcghdhBaX5v1izDYM",
  "key28": "5s5yq777jUde7nTYgBQhtUPdY5qbwoizSyk34MXqPBckk7RxRh67PRgpv1kuoYcEyBUs6YVfwfCDU7SftNKjAJgv",
  "key29": "36ziB24K7rfH7iNv8Hp6SwFdxpdZS86NevWEkt73KjK7hh1SmwR3UqYZi9dhTPwZspakSECpFxK43CU6AF2tcmKv",
  "key30": "2QRM4vB4BoJJhD8HHKPbT84nFrBzkH979g8ikAboxgsyBtkgNWyxWDvV7pg197ViNLyAfTHZTxYAA62kDr3cmSXY",
  "key31": "4cNjjVhe5W6roHAmG5jtHkF9RRCp3nzaQvyZvWaJbzvPZ1RXG8kQrCG5bcc1th5ETBG65rU7eKbTVFfeJLhiSJyw"
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
