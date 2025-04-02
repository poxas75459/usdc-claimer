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
    "3Xkdx3PcLmKZK575ek6wvPNmS51npGYUNTGL69rrMBcKS9ni4ijqML4R5Q1MtPcEkuR1od23MexkbaDDL2qkmeaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LTFU7n1Lgw4fAZCcsnqRvb5LobgcWuadbTgBH8HwzUjuBGqzQfHgUW2MPDjBL1bJKLozonUL2xce6KzGTz7fJ2L",
  "key1": "3REYRhMLWLYFPzUoCgetozWqP9wknDegjGZiBx6E5hfq9BjZVzYryrN1uYL1fGu6BZqcT9eUkK8gaFNAmgGsRACL",
  "key2": "5HfYPPqecP88CewErizFKDR9sm7LvM1f7qZyL6L7UAj6U23Mt5gAYMHky3m59s3ZPg9w8k624vU3HYRfPmKVMwPb",
  "key3": "2sRruNZLtx7dWWjU2ooKimhuZHuBDE31H8X9r65XKRTB1EYzJRqrLmfa3DbTLkM3eE4rtypge6oHvncwQf1H8kEB",
  "key4": "62EmrQT1n5qZFgCmGQk9FdhE4wmp4r4SPcfZKUNtQsuzGrTAEcQDA4PYRUm8EMqt25qMhYZJ6HuPk5C6nsBvhoHh",
  "key5": "3FN3fEKWVwNgbFpjX3UQzuu6A8b8z5sYCHSN1cEK5oNyStjMUssuDsLwPNmMM8auBTUsLRDCyphZAD167c65oi2f",
  "key6": "4bu3eotT7MVoQRRRBmq7F8sbVPc2CKQX8Zc45tCz3csTpArURYzD7Qz6HKdWRC6JftJhFhEcWz3NP6HvjjSCsSJK",
  "key7": "62VMY7BezXBM9tFqGwBNX4EY7gVtwfjmtioPpmUZXVpSjjVVkDNDKfBmdxCaNQhZ7QgJWAzCsTgseetxA3abypHa",
  "key8": "3sB4cXLbNzLfvBbWHm9FuM6Snh3GebtZfJnYQLKmdXNSAasbs8sWP1zVguak9netQoZW3ftWZLMb4g1QjXMbkRMB",
  "key9": "5iy2epA1WQQgeMoZzQzLMgD9VnPdS6GiZ9gR9ioY3d4FJSRZAWvMuH41yt7nr2r3oUsA1ttQyYA5j5zvb8jb2YH5",
  "key10": "5deEqSyFqg1Wo83XNqyuF4fRoQSgXUpVcYo2DKRzEUCBo8aNAvyqN2N5qTGLj3eHeWkUdmCZqcPbC5XUaX1WTtRk",
  "key11": "FPTP39xVeEjdgXF9mUzVZPTphStn42GMpoxnym7ASxP9NqPCbb3ndx2Jj3K7GpHtC99KpfEuXAJwqJV9U16aGX7",
  "key12": "8EqwfGCCjdCWyFenvvk4fLTbUUhfLqyzuDh8MyAT6RaEtk495hcKUnYipamPFY9X18WLmC44YvhYw4psBSuLwwu",
  "key13": "4jCpoFdu7WmSbYesfZMdne5g2TYq1GcL2sMJ6UorjETmuU8T2e3gu6XdPFuaNJ6MeUM6JxcmwcL5uvm5M6xR7AVY",
  "key14": "5gCC8rGGF9bJvBETnLNHEREDCk1sqpeGZLz5oYNkc5jpUXf1hGkCTS5PxFJ8fKh6Mtzz8RuJbLAKfkvwsqEnPFRr",
  "key15": "5U8A34a8BvhEv4ruMose4H9uQeXJMs79LV8j14UYKhF6ALTxvyRWvj71qpxp9pGtSsMt39izc5TDD5ZZHEuQ6b3S",
  "key16": "YZSfH6b9P2Qkn3o7y14EdWcZZJoucRHVfE8NwLweZ7yD3MFen2ArLGbQNR2Y8ZBsGwetgnNfM8FachoUetzytK3",
  "key17": "3iJgRum52GCWe3N82azMTBtgTgDvKGrcUHunEThK2UW63Bwd8rVvKaH3FEwkfhwrce8nmYigAKAHjUXMgtiS5dGq",
  "key18": "5z8dkgo8GRVrm2BQvaTGDnV2zjw488NGgM7QtH2iTxwioMTRBbmPPQKiAjoBZo551YfSQ4XyxDvpsRQziJ87Fw4j",
  "key19": "3A9NYdQeFNCrG5HxPBU9ZiN9Utk18jupxxQEnrPucvRLLtkByu9zHYqqWU9hgjdqrxj1eaJB1GPKTZZzXSDmZPSS",
  "key20": "3p7ciw51HUgCNV5Yrw3sEvKn8ysy5zPCXNTvqPFpFq4nF1vRSTDM9YhrxHTwhKJVzzLwA9iamvSK99BR2QFu4M9n",
  "key21": "4vkYxnYAHtCZ2aK4Y7sim5AHoUP42K4pZrDZhNAQr4HLxTN3cuFxKdq9tJEgHMCY6dBF9koVDUH7714ut836Wdwu",
  "key22": "2XqkFb5WBBUxvMCbpPZbF3b7GLTGUBoSudn8kfPmJVZnGfzdFnpzLegqasbMmUbZcUpWFLQUNJHB77VTZeb4erLH",
  "key23": "oEJUfQBEN1WkEVCWZJrUJ4Qs6PphC2gVq7k5WtdA59vXXm8eebZnDjPhTqgp65bojZohXiuFvSsbED446YKbdtN",
  "key24": "3anBip956mAGs2dGKTBCFAB8fKtpJ4XxD1PULCecznvdwXsMSVEb9mNJEuo1QPx2w9KJqzwLhY4kcxAFCzDPkfbD",
  "key25": "3mqorrPkoxn5zhjhs67FJQQENPNKv3bo3DUZwrc1Pz18f4p2ToSCtXiFDYuEYt2GQ2bPGsMPSxwJmu16xmKkaCjr",
  "key26": "5KaMoi8hBWw6bZM3PmBCmzD5qfjW9badVMNfQzPXfZwPBFGuzPSBJ1pVmUxDenB3zDGtKjo3J7cD2Q1kReMDtKXG",
  "key27": "4aiqA91vbYjg3fZwnALcmoBtSqVPCc91FUZB7BdGF1QP5TJgFFXQVE395pFgLNkBN6iSQ7xs2m488BLPRUvZzU15",
  "key28": "23QqFshg3KAPDMFeAk49MUWTrCw5EipeJW176YYE5cgAksinZc1zhqYtJFuvXWiK9xuEhAEaJvYFpbsNpYtZtsfy",
  "key29": "3URcQsWTMuQnCmh9BygYunKuEQfvCYXjMVu4RGYtWJuqGJtSxfLRiiJJN3czUZUpByzRtsX3fVMf3EcQ5rpPNsmb",
  "key30": "5yTMQqNByBjjXybV9tEdLpaqu1Q6oCyZSX3913a6U5Lgz9VfTadMnqckiyhqun1ppQk8ToWHk9NYerhm66srqV41",
  "key31": "61v2U8MRRNcfj2QTcBNusYV9LJ8y9HvseECCDDR75p9zPXUnr6dD47uHNRxbYrjyzv5hdS7eGudGbR98ajiB9hUH",
  "key32": "5gfuKLHcUUYoMnnsQJHhT747EcvrFD5pZnqFkqihuTwB7GhrpmnTbEVNsZW5JvEghxSneuKqpL7Q6y9i8bSRgy1z",
  "key33": "2nBbzXHf7T8ZiN7kRq2JpWMt5EEk52DwssfDyVvGAuaeTA547psMWi7Y9UDFzVt7g4oRYC195NZC7hbrdpywm5QP",
  "key34": "5zpoQc2S2hU3cZgrhjxmSpmoi5Whykck9tTU2gsd1FvYxgBfWt7SgzaEbjHFiy6CXD1bSx6XzmUuK1tmhNDonzEe",
  "key35": "21c7cqip5hi9aCDfz1fj5SB9CXnHJUg1WE5H15A45szGvQ7JHuYthGNU38oWcx1xo5nGKaVrBdvenwUJzZT7w1X6",
  "key36": "33M94vpb18XpH9ZG9pYkAvsfzgEb3WcgDJoT6fHNhy5poE4CPv7CogR1Kjkgpr5HvM5e6W9ZpSdLtELBNSenMqrw",
  "key37": "2begnvaiNgkZt5YufRY3HZhF3cCZXpHrKKjLTseToNf7RMhmbjB4CdeMiStSbTqFB5TjxVudHoiofKW6BisCJHei"
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
