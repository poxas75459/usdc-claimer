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
    "4gqEpDgjZcdBnyLvuEd9m1YDXhC7RyqMZUdhy6ekC1vN8m4NR1hrr1bqMa6Xc9DYaCZG4Rnfn1xCnEJJoj1RTp73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkkFo4wYwKQwDjpVzJGS4xBPwqxQ4TSbMAh2dvdjFT2g595eZdJLXJnC1yCEapRhBzizR7ZRfJh9P8ficMuZRZU",
  "key1": "2DrZgfZz4jf7vW5YW57jkaqnTEByeWUeQYszsSzJf754e6AfAHwqLPKJCDJdMDnfh89fAbEjJ6hZ6nrH1dLKzmb9",
  "key2": "45oXAXSpgqeuxUnxkk5YLTRcJ1muoMb3Ucepn7z1NtSgJ2rNZ7x1R1ZBS5qmMC2wUEjTg1ec9Zd5JDSiA5XLH8MX",
  "key3": "26ykjnNQe9dkK9BhCosfq8NJsAWLskUE2mE1SsVCECHm367jvP7rbnqmNzSFSsCg1x3FrV588zSYv8Zezp9tE4iE",
  "key4": "32fxnrZ7JCEmUiEPZNkkcp8SMPAS4B2bCJdpeFAxubja6PjWgPyDaaT8DRrxwwTUNuoqL6h6ytsYKme8WTuMD1vL",
  "key5": "5T8mpv92Hw29jMC3Gu1TyDX1pzApK3zuqfGk8wQU1M3UMU8uVQdtBTgCr14fZeTadcVGDdURLJZymLLzHUis8XnW",
  "key6": "4U8aHRgambEPVy7dogU3HCxFxbZDzWqBnp5HGEG6VPfeXH9FQ3tPCzrD2vYVHXbwGyRgeqYH4AZEHVyjiHWuz9QH",
  "key7": "WdsEPvkVeGJmLX6jxVBMEQfEHwx7QtnsrMbjPPgvjAfYwwd2BuwTE3seBUWt6VePk3ziBnApEYfAJjsrqkqkYKH",
  "key8": "39BnX7jzR1g7dnMHm89FE4xwYMG1VNrWSTebqXbj7mAHzUzgNq6qFHBJrYb2QjfMEkC8icgrP9pb771Z62Y3REL3",
  "key9": "QuyqUbr9QRUweu8GqE4zsCrELx65nMzKnuPninASQ7fjbvVqhGyWAFahk9QrxGppBZHT69kFhbN1RrqUPmp53nP",
  "key10": "2W2An8HhVEw5mVAtyGLfiYVveTSdZyfgBz7CQnM9VGoXTeptsSV2PNQ1NpeiobCQJrhfySYFmcg6TaCFoAHhTxBB",
  "key11": "4jTzPNE1VFVWFVCNMLrrFDZN4CDJzRExrU4cHXLvtMo7SHyxHXyX1SrdFTPTD4Py2oWYuXq1wY5rznj8fQ676jMz",
  "key12": "5Td2PSGG9FtS9gidd11qd3u2X58McnFD2nbTHfXZX2mtsTf8tfqfob6681NKgDVdRiWzQgqPR6GEsSh25eVLdwCK",
  "key13": "24k5vCt1wTHm351KiJWGT1QUSPWfdGpqMf6NiUmVuBuhwYYLGZXXeR2CZYktNg9ciumhYAewFwqLCyeaq2UT3acF",
  "key14": "3cEPmAmQTTug8LkP6hY8cRNSjEecFFHBFE7Bg3ntwoPAR48MFG3zs4dyvrtb5LQrpBVNwF8M2mdDUNWEgLhNPsYv",
  "key15": "3YBtRy6rBPjCkexiFYtpQevstXzVJtfb3HGevBrbRrG44Bfmf1EJ4P7DbHHnNLpnH6PcckkDJJPjr2oTDR8o3rP9",
  "key16": "62u6T36KqYcD1vcHVJz24p3zAw5MSKV9WHZ9TC11DsmMwinSRpXxyPTWyN9iQvMW8NDZh5wDmfrUy1FjThARMKbR",
  "key17": "2jEzk7axHHjxoeMUwt83z61vdRs2P8k49XgUQEf4Sc6cpeoukGBFhWXT8AmbXnEBk3uRdxZLeCpfnh71o6d1LXAc",
  "key18": "4u1BgbVniaYxeKZf8UELRaYYZuwmPmPi9HdH1Gq9t5pReEM6VUnt7sbLaa3ibyC88HLHhQCG1XbdgiLYoJEjPbKr",
  "key19": "5cWKE8uqjfKF9XLw2ZqBt8mgEu6BybQMx5YCLFQkqo6UaEq5CfJg21T6MemK5hSiRt7fqvFxm6tNL5sf44po93gu",
  "key20": "2h5qFgSQpCLgyf8tuC8rENHyZQhrtnegHrdgLYjqkGQ898sQtk2RGnpUNeKh9oPQdXgGExkWYwnpT9u3NjxVzrsu",
  "key21": "eJBbQoJEFBosMMKHzrpcv4XQV9Uz6caFXAqz5NzuRenX5J8A2kVtQnMF6KseKBX9nawjGd5pcKq5QhLWYfzGLFo",
  "key22": "2frsFKpoN3JctFSS9z1iJqoLWuYWXsUx5GSFtPDhRAkJM6Wup9tMgbYdpEY4BgWWgzMV3gQGXbgFbsGeGWUDNC61",
  "key23": "5jSJLpH555Eg7P6b2g6vAxBuGq9sAkoykAFFBC8uhriC6hmcj3etzihZgSiMxFULudLBJ2PLJod87k1TQjXnCkV4",
  "key24": "5ahmupU72BnzoGpBEHvHkVYvrzZ7cDBhjNSXVYKbyo56dR1p9QLe8Wc8furHGY7ubup5KqVvffERhdNowo2hxU3x",
  "key25": "4q6JXQFNB2qzLGR1d6Pod3E85rje2gNMZpzrNLdjXf1KbzmoN2mbQTxhzmWgTHyGcZzNYUXnH6u92WaCzyN9PFPM",
  "key26": "2b1DhfKzQFuvW6nS6h6o1UY14XrnpeJjAQrrHYFseHmvsqycnctAdyyXUwNWqM6LKp6j5t8buFWB8ohxbGfFHeDx",
  "key27": "4J6vGfeQR4HzNNXCygvm2zY8y9aBajCmRDcSZdGsi4QUUSMXMNcYdBb1V4ZJCSwiQhXTo2ghvowYkf777t9xF8ZN",
  "key28": "57mgb4QMwjRWkMZ4xesKh5ZUBaiV8niEm4RTbCs6v4dXyLVofRgvGxzm2SfFEE3cQpBGcsMh3acrMGjkHx9H5a2v",
  "key29": "4NnxtrSjPExJtn3uqpvYwiapedMxk9uydaG8q8GjyMcBBpA3euNLebJuF5nsi8QuoZTg2aau7uaYBjH3Z6kzbi1m",
  "key30": "3h2aShLMEDsi7kXmabMPC2tVznjLLdo2SCAAi8jhE4d3YtmHq71Bp52cbhUagFgjseSHCQ3hZP1UfSKwESxGxqPh",
  "key31": "5MnYsugStoDHNcYVa5XP42Tqwxy1j93Y9XnWKpchiEivsHHW1J9MECMH1BvYhVHCNf6npEP8wM8QEhuJLLLdpHBo",
  "key32": "5cguWStWGK8zEUqPuGwe8Zbp2AZnKbwdkm8hCz3MLHkeRWdrDeQcXTGNX4gZiTssd9axEyEv6kBT5k7227LQW5h",
  "key33": "5oEb6AL175hvCkWHtVmpJ5YBaq5eNthke3rBH3pie5vWnkEwbDPMjAbjym5UXgXWrecA9Y8VcNqdDuAzvbsTfqnA",
  "key34": "5E1Lobo1qWen6VnFYwrWtpSrJieht8y9AeWHME8CW4DZCtUp5gX43eergwTkGSs4ZroJrWefGSTCG59ebuUP8NoL",
  "key35": "Lid5bZuvoQ72V2iFqt4BLNiojZrcEPZ8WrwtVE8Q1KUrbAFKmZDVJXxh86YrFoU47x4Li3QLMBMKVUArSoHPjV6",
  "key36": "2vQRBXRpbznjrMoEQXrudvUPEwfrPbwQbhaLaFnwpTUX9fFDBUVkFfrsCUAXAMJgppmxvaxaX3QK7zGT8CmQHzm6",
  "key37": "5J2myb98Z7Gp3gsVcq4VLEZbQ8eGPZjo8msNU5SEWHGwEymowuNiKAd4ht4KwHDFfZEWPfWLpdJSwLX7hePdkgsE",
  "key38": "3jjnQNcpuqn9dFXFpfXxCRH1Q6YTVDpfjnBuVSF5nvSXzVnQz9dqfn2jtdsAExPZstPreXAMjNWcDnRNKy8UdngF"
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
