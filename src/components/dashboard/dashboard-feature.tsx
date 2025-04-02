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
    "2qMKDTSd3gTfTZm2s4TTwL9qyjKwQZ3nTLRDRKAK2cQH2Aj2iiSKwo16rKVF5DDjfiWu9ch9DqT9MR7XC1CEH6Ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aJLqVUVpM6cRxYyivWvmpEs5GhWX2JHRzsLmdFutjpfJsHtW3sG8SGvQ43YheVqPi4bXYXWiSGhACZ9TVwNhvre",
  "key1": "3h6avgL6GrMmyErVNXhgDMv9ZUBU7P82xqrmiGGS2AQq8kkdAZaqxPmf9XZsPj6YCjXjTPFE9LE1TfQ8DZRKm5Ur",
  "key2": "48pqXatNt5YnBiSyRP5ZLjAUpvXVWHpZE2S68cd7CcuSQ8sATYRRPwSuU8jXRPs4zfENjNomsCZSr6bUrf7PjDg1",
  "key3": "3iL6tFbu7QW1WesmF2rvhHMdNn6ELZDMrDNstAeMo94DZ7smRvp1LHxgjgL9UXy3TdyDJw2AbTbULp5oNHxDhWhh",
  "key4": "GZs6TSPieP9kqijT7uwpzF8w7jDcV26zGRMXvWNwYKLp3gvW9jvoEU9nLjSc4CwLsTREhJbA6pnho6djcDuJeAV",
  "key5": "chQvr5pUf13HpPCpyjETQxtw6aW87AsDYvqbRWYPAUx3yXDMBx577Jq2MkFDMsN9mBho8coMQQWXLBvaXE5QCRN",
  "key6": "221QzcjQC3KzWVUrr8GT6jAndX3NAZzyfareo84DipbteQ9Tm74qNgoofp3Cqimr6vwXC7VKTkZLmBS1EEfhjwAn",
  "key7": "4Ysb6v5gzpyMfDXHvCcKkB9ayBWpMoU16dWAKCJAiYV9qXKJpf7ZYaKEtbdN9WJorvLtUtEwaKo2GtVZoVrTgFTt",
  "key8": "4tuDUjNHJLCPPdL3mtnf2j4WxZ3Y1KPEQi8oDiPxpSLCAHMETmg7gHGnvPFZUeEcJPuqQCWEjxtHJqNhhSDbDAEm",
  "key9": "5iKFNJQyHTcjkNf4Q7DPaKXxBgGrLdEMTxNVh34kQoXSmrwojNbpqDteLk8fVYxR7GCD2MKj6jgELGpk5Pgrp8SW",
  "key10": "2YoCS5ACdReJ7uTN4BCShzWZrvJhNZyrSDGS1v5tV3QoKbDYxKjM2DcXBUkWffqY56D9dQTxLSPQgY1GCGjUfWMD",
  "key11": "4noZ3ZKepuzw9siX6VSZpKEQNKcupRR5teuxYj8sJWDETxGLqwT3BxzHdvrPsdyoQsxJ45cuFPPyTkLYXfw4B9TL",
  "key12": "2ij8psoBgytVXKeWWkd2fq4btYcfYmT5AjVW6VX4VyPhLKffhrzhAmASPUfRCA7Quv5f2U4qM2qHSD3BHPRXMbxX",
  "key13": "2FnZgwmV5eBBcDn6xyqSMsXWRA9R6xEEg4UwqHV8qJb8Y1s8xrQtGrSVGs5Z4oKptMXqkPqCb5ad1ZnqVQU7oRsH",
  "key14": "35x6cnpkMaauMMqiVYnYZw9kemeooKjzEgizCacMXdoAETaZzwX88Cfb4eysWD3LYbgqm2SEV5MLqQFhXRPKna8b",
  "key15": "3wPg1binNuqJD66qPJgnZ1GGQirzAWZ7zf9UaFi9UEH17PqjfUh3UaHrHm3J3qSgbbUYMuNw8oCWXMQGwUiUAi4U",
  "key16": "5XoFTrqfmKpds68QkEHJVwEh5TVdERq8Je4yGmNc6bK229J8SoZrLRLCEpdgi9E3LRG4sitFAss5APni1HyVyKg8",
  "key17": "d4mrchGwpiMLMNgAkocijEQerABiwTEimmZ63vojz7ZocWS1famw4ijHJRyTxRYwJDXnjyNqQnj9TkzCHJWE87g",
  "key18": "38iG1EP4RZL9uwJUcgAag3uiEizFRKUeSY3UFbxeKXuizA6DG1rEAdNhZEiqDmBu9sJWEyfPx3KHnZkZA7cfi72F",
  "key19": "jPVNjD3igzGowNivUu9cA2LKqihSVLmA61MU2vrmAPZsabqArCnnR2bqFtKCGJcqYt4YjRtWB8UGWcMx1koLHXb",
  "key20": "4sk1mDMqagWHs3BCzL6Y7t6TSjM8kDWcamHstQpw8B1etpJCTRcXQ95Pvay7JRZeC4ZZSRDfLuJGaE2kZHjti7PY",
  "key21": "4fqKXnJYo66z8edThek4xgC1DEXePAfPDSyZpEWHHpodXt9JBtsWeFWAvAo6Yjxs51Usta3RmVxMQY67TFUcR6uH",
  "key22": "5dbtoKU9wTHS8skk4HcSrSAgC28hMLfHzXL2nQPmNwt1WWh2vSHwmejRPuRpfpKDkeVUApxCePyGmEESLE6RoXZx",
  "key23": "3RR3xmhrMXiDWfKZ46nuxTtBeFUEKMWNQMYsWksqmFzpffnTPJZTCK9q6BTQxMHNWQ9W4ctkL2ytiJZRBkZDQSvS",
  "key24": "FN2VvWzwLu3K7GVrkJJFQfsmg9jG8HfgkUgh4djg4Bco6iL5f1iH3Y1jg4C4jHYvjeDn8xMJjLF7owUUNsk5nbb",
  "key25": "2cY4dCzzhrundtYFr3ikUsGd1RpgzovpQ4wQJsYqa2Sqm7nyreadL1crT48qrhuhdPiSXiL93oKxGt3Cd4fAFrCp",
  "key26": "3uM8TtgQzK9y8v6oM1PXFFNXHY7zmUbkv85P8yFVGn3GtdY8jG3bjN6nWec5dznZpaQ7AaUVkjDxG2aDDztXAMZW",
  "key27": "36mxxXsP7RgEqysmSWxSKnZF6cHFLqcQsJK24R1ZLWDx4TiTAiEtKQweU7wHrNh54RBrRNscy6XKduNAZem7KGwi",
  "key28": "2EA5VSmBrL2JXJT8Rh3NrJGx6QN59V9b7yBVQEyHUz7D53d6HDrZLPPDB4MiVQm44d7733tkHLbr1vqmDjzYFa6N",
  "key29": "42FTvYP5kximJAsZSb1gfF6fqhmBmcLGLqt1i9cNzPwS4PF9pLPa116HWZnee5en8R9CyeK6UUaxmFFCbdr3o8W8",
  "key30": "2fT7vgHhZiy9GvJYJe4nCGarEqdKihqZPYFVFtV4WKhk66uT8CeNg5x7SfGd2B66vpY22CdBJ7ggtArkEDBbmAhi",
  "key31": "5ZPVixpXWB9QJ95KZGk56LncCSuXKwE3oWFmp8M9FEPqAZjU9VNfVoUAsgZZkvyJfz7whj4QA7C16K9E3DAB5nsc",
  "key32": "46wnrM186ZzqKYjpU6ETvCeuDfnyCyhHBETtg6XNfKiHEYqLpy1Ji49zLxmQLf2maDgP5vuyfJVkJB46NcaWhFgJ",
  "key33": "5hchAdQ2AL1jHUfmg1B7PvJCBbpnGDGE7iYgnAkNyhZ8KYgixZrDhacgSzCWS2BtKWDphfvPiCywfFfi9Ky8r62p",
  "key34": "2M5SPrmD5pG7biYaS5mTLGWLetgb2qFF5sBdRpfvRXJ4cdKkUKAokVcF2J3KkUSMdPcjVBc7zC64VUfyuqoo1nqh"
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
