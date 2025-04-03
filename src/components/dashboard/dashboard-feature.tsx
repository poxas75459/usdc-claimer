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
    "3M8NujXmPFK6SzgVpw8Zs7VydSbMkTbpmKXCMXYYGdZRw1MFvWj9Sq5gjmWc8QLDU65H5d5gqHjQaZpeUCZ3YePz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GV1RNkxb3fFYd3pRBacrGmt5vHdvzuSygPBtvpj1cev8NJwE7GtXmuHfcqdn5o9qs8Xr2p3UJxtrVMwX4msyBvm",
  "key1": "3tUBpe3SoReb6eDDVTq2UqB25NFchsqPyVWuT9fNVkYkBE7NRyEHPyjKGFMchD2e9Mk9AExf8T3hTdcmoCDg3ryv",
  "key2": "4gVdJ7szuBDfrymUfejLDkkhv1Kquh7eBFBX6kwhyUVykKQEAoTrUNLpxBh1Kg6WFWpaXRveahcVXhsp6hF6n7aZ",
  "key3": "29KWJZF9Brd6qs7UWFwiVfryDwPax4wz4b2HwXUZj6y3XjtFNDNm3Q431c6SQvVFSSferNaDYiydCTKVnN7PcWYo",
  "key4": "29R7ghqXV2TiXYi2TYAXwbJpjPjDSzwjAcKoXVtH6bNXa7eUDRzjDu8VXVMcM8EZ5nRMmUaznYLbfpm9qsYiMGTx",
  "key5": "8JVt4MahpqwksyNYxnSezc8KeRjspdbGFkALejx9kWsPfgZ1iTipHuUghgRuDh2P4hqBjfzkbjVaJdSKexVL7FW",
  "key6": "4FfjBz6XgPXYLd7L8aqmp6cD4VhHYSTzG9c2vi4TkLNfSBUhAEzwSCBozzjzo1N2BUHXPoRQNZtf7A8U4WaTsRrR",
  "key7": "2ZaPy456pCF5Y7cxsSx6JZHfZBgzfnCnRkMynvW6LPeoEDa1HuQb6BXHhEH4sPpsT1A9o2BoMBLJUEA5eJLXjXkj",
  "key8": "BCJ3Q9MDJwanzNA5PA8qb1C5pT11cNcXvmedBExadiumwvuUCeEPCa6Vgt8y96xPkoqaDuS4yirk1koxYpYJg4s",
  "key9": "4wwZJQMUaFvam7nA4bekt8nJC1WTrcKkWEkbxdhZx1bKE53njv4E4HmjxZxXtT88mapnPzik7Q8zHakRDjmp4TtV",
  "key10": "3Qq1TQJ6DN213r4JR5RL9DMnGRuicH9Ko5QDP8FT4TZN3a2SBqy4b8d34QDgTBgr7DY8hyRBfPVEKnTTSp9JkZ8a",
  "key11": "4fx4nTjgNfY8qsjz4QFVKNrD6AKHpUUXiFNYkYEb1zR35j7qykuBrhdf8WK1Srp3FZqf4fR7LxDWFZcCRxccoTco",
  "key12": "29aSk72ShX9uYgEnhQAvcP5tGRcVDwFds9W4UhBAknqtPmtjhYgoNXNtAgg6434LqEwJ55wMMVhrwcJw2p4nX8GA",
  "key13": "4wMwMX3qCL3S9hErRkazUF7FbXVi4P6CjgdQiHokJnh4KC3fKSUrZDqJXUHKQySVbabdDLg38ASwQ1hFVQVX1tPL",
  "key14": "3F1eLWhaJMcHW2eoXA8fun4z1ctka2FYcPk41u7GkcxwnHaYjFK2JAmfR7WWxJ29u8crBm1yfpkHVjBn78tasbMv",
  "key15": "2fzZssZJ3dXjkvCwV4UkcFZkNGMU6kSYwrK51kmFSZutcmuW8AfigyQsoM18FD8MhxxUPhyzkq2ziLQy4iZf5BPW",
  "key16": "3iWDRLG9BvtNEPQ4L3iFW7PvQKxWfHShRrRx8iyj5vfqScedGs9treRSahi6rYzsivEtBwHpkvEDcahuqx7e774U",
  "key17": "47pdCwARNiMEU8HZKggbQgf3boLL8GXaciba5r3gFMswp9XoUCyrFWum9rq6ZmESDsRDbtjYo1DiUzAw2yjr2oVn",
  "key18": "x9ViDpKF9gSEydyBswGy6kW2sa8FqVgBNus2TRC5MWL39vUBLjnzocStWXmsSTiStuBGatdVvFsZh9KH6hNbXc9",
  "key19": "4Qo6cjBeZESECHRKjGi3FthkwC1JVnGsFQqpUCohQbVnj3kkK5iTJEG8eQ6fDLE8q9djtpbKHPxEaaj8KozVi1Xn",
  "key20": "3Wa36QQh8tDSDrDY1PFk2o6Hvmva7o3aV5rJzjnhgogV8KHWFm9hM6CBdkroPyLEGqZV8r7nz96T7LrYJSaY3DN",
  "key21": "2iXCLF4eaCyQcqFJ4jSvNL82DQVgHKaMGmTxt46GgKrQAaVoreC1jasMZRY5tx44vk2NFiVqkDFuaBB2isUtbPJn",
  "key22": "5BftKbu21Tv5pUEsbGZpUUVKCjE9theT91fZqQ4DF5YucXhmmcYSnPrUhGLLKjeUXjnFMUVJx6DquJ1afcon9hE9",
  "key23": "2frqNgUnjCdgHYSfqhqxzAqzZxM4gNQeacjmATHGc54WR4DzNYnUKv2xvjfzZ1fSGC7Z2GWH7hMktrc5dPpMs7Kh",
  "key24": "4gHi9hNGNNswskCjhujVQWdkctkFnhpnWfAxrQ5d3JBTnVJ1Wf6tRq9QBJYCMPAnmvnTjtDfEyH4KZWKZ16fJhjm",
  "key25": "5B3kKS1YsbxY2KMvYoQbsBXuLRK8dHjmqJ15aMhtkh39R5WPbLQQD1FeT3khbidrPJCaG12zV8LARikStn5UnEZE",
  "key26": "35X47QcVy5Rr9JwscTxfXCNhMcqFz625TLscpsmzYBYzcRFzxeH7MahTCEswMyP2fUfqyNhpMmAV6peZJwXjc4PJ",
  "key27": "3v5BuZBYEK7UbV7G6VXUK5au32UPFzp9KVhWzVU34xWMfQzQgKXiyETSsTQYrg8Don88Zeqi5xoV5pJM4AWiaqY7",
  "key28": "55LKm2XRJdF5j5addaoUTQ4PA4S2o3c6R34VPwJtSpFV2n7xmULCohbscGwyu3KyfVJT2KXjtkEByKL7sopzm7M9",
  "key29": "5RcvFfszrWb3zcun3GZonC4PmUmTj3zDouF27pefPS5owgmiNKG82GS5bPC4L24poUiwEQWDneeiRRKeeb9w6s7z",
  "key30": "4pZ1sdTR92cSAzLoP1s5BVAcPx5tse7VauvGJdHzU7SWDDdRs7Q7x6XA7hJqPBjpmJAvbTqKd3MDcw4Z2kechuiD",
  "key31": "21UUWNH4j3qUDiyPBmFVjsDo5y76WXPFH6FPBXUQp31qWpRBVNrgXh5n71FhoTrTehEhTXXYbXc8ah47LdkqAY46",
  "key32": "474fGP5xqr4wGhehSQu1HQNWiHe6cZUyx2CMn63UzG9qTXRKxRwPv2Qbx4rcgSqU8LiFdRTFsn3y6ADAYW4sw7tu",
  "key33": "2jvYmxJkmynaYZct9FkNj8NdaQ8GoGU1oCUCGkHj2Se4UPgiR2nZBpnENgAKgnPXaNExuQGtTcx8QxtY9L7Ezz2t",
  "key34": "2bJCi7RKYr6byycR5e9gaubkWaw6hPhKE2yDP64KnRefR47GR3vYtFsHdyZmP8JvDSDgtXsUcHiDL4gJA3Z5gTeW",
  "key35": "3NZGBfTvL8nRYfWvwhVZyTEpkFNbwRhmeYkcrLipcVjkTaexLAhrqwoJmLWX2QbRv5smTe1G4xW1wubpLccFVmwZ",
  "key36": "57NBspPKKLTG9EkKSm6DoHkt2EUuyu8cgAoYFRmDzxaCnWVUMEhpKkCDkXNFJdLeR3VUxMvqX6dsXpWWJY4i36ft",
  "key37": "Dmjet3Bx3FgKmZhWdKLr3ae9RDjsxd619Bkko1coooxWnUM7XtUZmXB8JKyfkfa47L2AXGQ91VX3Duacx8feKgf",
  "key38": "2ZTk8i91FfrtYxqEbwiqaUpdMt4foBLSkmghSHLUzrH6MmSG8VVh1itvC5nu1ZPf9fVvxyWE41wTZbL7r8dxwyD8"
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
