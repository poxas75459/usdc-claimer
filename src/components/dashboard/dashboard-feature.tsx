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
    "2en4zeSfLwmquzVUoJn7YUi4xrLLFKVcZRaLH4nWBoCVKkGQEQcCMZ1xb7Ghzya91qm5ZuEpg3hgdQXDzDSKZVXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xgw4FKU1WSkwk5U2jewHYUCEh3YffZiwzAXVyd7ZngsWH6NtVeeTYwqC5H23GhGpkvD185BBY9Ly29wQdVuXAmo",
  "key1": "dBhd8qq7xBD7H58XnikmDTBTDp1J2m4jhatuPvDWpg39syX6faumw2E3DytZRR6irZ9mpx5R4hKY3bsWUpHJPu3",
  "key2": "3KQAKu3b9FZeQ7U1Q7srgUFbQEtGYvkFRmgjK1GFzRVZDoYAWsmiJ8TMVqFmvJvZWikHe4y8PcxWnaaWsH5YEzR1",
  "key3": "5xLvFK5QgiHs4BxTJQYGK7QbTtxfjCkw3o1A7B58KHnTKSiRveNdvhC8iz3fFWSdtqUcmVzmCHDDNRnCBLPVwUzP",
  "key4": "kairDF5seJVf6gZ8RkiGjRRRRX6qKQjrDyMHMUSN7EAX9WH3C7cGNVnPxvHCgQzYDm1vuFfQvddMrFxC6rwYzRJ",
  "key5": "239BuwUGNAT7h8ZNMhEVGjxkxmG8vXN5XzVPyqpUPbpR1ZsEBSNP9k9qYay2ipx7cbTchmMHUWR71Kv4FMr1Nxeg",
  "key6": "3uvhWe8UkvjJQuzJpUieZk7DMoFffRFhu8y1pZn9rWET6iTmzaoQbPHFshdTxmNo7QRwXLi8SNoVfwgoU9u4u2ua",
  "key7": "uDitYZ9nPfs45hCXwuky69jAYRWrhmoQm567ojNvVXoBFqYPX4ZGjGRJJrR8s2RLJvChHXShJ29VjTJtjjtLTjm",
  "key8": "55FFYjEzQeyLCyqsv5KdRWYWpj8nkE88EqEYiJR47v2tjHWKzmkNQZbGtHmqxjZUPW4cSD9Ye5LzFkHCM87SkaZ3",
  "key9": "5dpamUpKrsCWMNNFKJFNYMoRqrDVnopsBpuzFP19UcK3kEC9fvvi1XDzLV3FrbUCBcTkewpzCTUvScmD7f9RkiYY",
  "key10": "3SVr21ZSMMh5gFki9RRxFTxfNXf9n9qweHBUjM1kMy6j3UmNrcx6a6RUMptPJTVjibC34SE9fbqQqbw2XjB6YSfM",
  "key11": "4njM4i7zauMXbBxd89BkZbiBjRw6NhPyyB1uLyb1ViZ6v5Cv6boqxvB38LnhmcLem8KU1mjPYBwZXYyRiPhi2jL9",
  "key12": "4Mk8riJxUjoLkXzqxV6QRDav6o8HKpkkNZbNEsPEX1tHDiv6FiSUPg4Yj8ZVwpCLmZyuSjPAD5VUhDRjaQcavwhq",
  "key13": "3vZ4Nj2NqWFAuvvudh2P2wUXC36MBmP1UsAJdNKTRDm3k6CZ7RQeU3qU2uVb35rTsBvCJcBTXxaSJrddVPLmaWMv",
  "key14": "3VSWPxY3MfJbJGSNYiV9kG8a9VNN2DmSTVM8qFzop5KAVzR72SV7t9WHF4YFQQ2C7iFR18eoUH8CLgW5EC4xAbi8",
  "key15": "47WiQPtMq5wE7Ti1efKnL2mw73NC3GQkx4eXeKw5hp4pmUdZdzhWxCSMNAiqXkAVzXtWMw3RdkLp3AkfS74eXK1L",
  "key16": "4xPwoWhQWK7kUfXAKxeh8HjWBwiG9yCPP5js5m2ruaB2emJYnizFsXquVLWuDu2xHqamcED88Y4RiMwMBvTFdhbF",
  "key17": "2sQ3ADd6uz9qHxn2p5TyaAcsqQ56TWb3SkHn9ZtNuRu7v116gZZ66wbUTSLNZGsC67YBkTu9HqM9rkVgEPqyC2VK",
  "key18": "2GBUXfdcU1keyA6RHYhXHec7aKD4HyjZqaPKNcXHsj2mEMij4QxK1CKfda2PYbPRD6aDVYtSKaGYdmqpgAkf9RH1",
  "key19": "4KvnXEFifGCe5FMe2iqrn4RnHzuXkbEYaPCFHH4L4EHQdwAQnEFEhobRjn6XV4BZsoUjyyDkWg31ACNx6LuCB4Zs",
  "key20": "4cESRmBjGjSCZyaRmWFSSfJaJ1ZeHdhRxJjPvVq6c4ncwEefLd5FwHdBQAm4N6tcn6W5G5amz3GPyGb6UXesL8Zg",
  "key21": "rvQdaLm3WV39hgMa92ftHjVSfCVhCWJPvN9vtTPUhaC6SgXpZ7c4AfckjHP4c8q2EMMVEKHRGj2ziZZa1dhnoDz",
  "key22": "MNYmTdA21JU8btejoRH44Z9fZYyAEuGbgXqWE4TYQUJR4C2Kf8VYSasKHN5sxWqEUfjM5NBXwrxst4ofLEn7Zq8",
  "key23": "2p7aZmF3T48YwpXGgwwShqDHHgG2RRtntjH4FUmhJeiXsu4fPdHrETLh9wfYUr9CE3rrU9Ydc4nxDzgFBEYB1rT7",
  "key24": "4mUSgPqGunXdG3ypnvcAzodoQxstJdui5JcJtjac1V3G4LNqkT3c6cHAr21RQXDbGRxnJDTyXfrnVoGcYqxhaCQZ",
  "key25": "5ChN7Zz6bx1kLsAcSarFxngCMCVg9QX2xEPcZVv5aMXz78dCbGgWDXtnhwTVPYQ9ucXY4yQCq34PQS3rBpPWM2AW",
  "key26": "666M6iYp7cmxM9yiygownQPBJvGbLWdQywTWxfnJJCS5qjKUmeSsv6GCoVfQzzW4hNWKx2QuWNoak56nuuZwLB7b",
  "key27": "BNomQNDcpuyMNYmUc7YB3tGmqZKZUwcYrvWRLhWZJMNePS4L3bnfD6kgA1k6XqccwT8NTod6mjuSk3GpaaXU4Wj"
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
