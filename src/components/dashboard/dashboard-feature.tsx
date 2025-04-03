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
    "5AFFEaEP41RHSWTGL9ath7Wao6kkisZvFJ4ywHT6NqQgGVCP4n82YHNA5f7Ztgq4RdgK9Fm4hE5sjVidXCgtgrQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eDWgc1BEtaSg6t2UtbXnDisH4tyv78ZKDKVjMS9nSkC78XXciEEex5FpwECNcU5g3Tep1bzyCCs4Q63WBGDU6kd",
  "key1": "2gD4UVxH31SnnmfKtxZurK8VDQuPK86sEkFhQKEn15E9ULDbFLkTCJj1dn5WPgyrtBueiBFFp11eDFvtqKXgTiBA",
  "key2": "557p6fVZW9BjpyEhMbhqKixXpqbLxewQRm68sKEtLyxpEcNMQjhNJXZ8TCaVQpxKjREiBejcFgWk4a4rgbdsvS9g",
  "key3": "Db8naV4Q5icTBaxRqHkeK84kPu8Njj6RhzqDwA7dh3dUsDhwv2V6xhZFZyzvGxBZMrnWrbzDCVkfRASLiDk8y7C",
  "key4": "2rZkK1Qij2heh57JNZb8yPhaY7YvzF3VbVZzGv7vXvBkiRJduXFcgVzwiP2fSAwKZF4aXJEoyxNGxDpnNy1w5Nko",
  "key5": "4muZNmqn7u23ViT2pacVAJiQKP499LcZnxjxbWNVRTjpSsCJ6n6U6MXKkFTqEtSbfyQ6J27caaqzHEVUYscJjmNr",
  "key6": "M5yQobg31TN9VFTPpm3hg8WTNVnDyVunPscZuFBeyT9f1JBXAGJZouPS6yJmtuZs86ik7sRwppQMN8iM1Nv1iov",
  "key7": "5tN1N1yuWRDVd829ZTKdWBKxWYxz3Gi8GWtKurLSs9hxJyckLxaYfLHC1sicx421GT2GtqhWTGbKMPQTcYJRd6fS",
  "key8": "59TRpAA86jAh9hx7yEfRWmYCZsENYLifqTSxLL1JisTPyHNFJ4JQA7DKbxKpzBPPsTTTrhKszdaP5jGDWZ7oG5vE",
  "key9": "4byLpwuUjxAzrFoRuyZQ7DLoReD6x5gy7JqpSsH8cQXMTxdoVjjRCyNXfoK8zaJ8pu8PwmkqpWy8aZMYwdhJbcBL",
  "key10": "5LCPKJy7Zjk8vXCnAcu1G3KATzLmYkyjHZ5Gco7NapLa7HG8cvxYGAmAuVx6MAtiRVDzoK9kAtFHmxPGEymRxrmN",
  "key11": "yBfe13X46PurcqWydH4DKvqmVmTeTNYZ7H6C7qzHWU75j7vBPmgRtksvhjB582WQvgCJoe8vF7uvqYc7dzZ3r1G",
  "key12": "2iKQdxU6Y77uiJZQTUxPtJcHDTTZWn71hRyxVpjKYYddtNsrtmTQgDLY4txzcR2V7DvtyvbJfJpppv8JRQZ4KiCn",
  "key13": "3up6cbZKy7kmyzbhqxPHKmeeqhJmkfk52S1DX2VmwANjx5MucxrEhpbpQx5r7dQ9DPuBibuzYNawoNnktuB87adG",
  "key14": "5ogAZpvwdU96SjQ9cPuVTjEydunemkJwiCZVGnLqkPp6mkujPxmrZaH9XjsJFCEBTE5v3Vb1YcErQ9hSehMDPqkn",
  "key15": "54DzE2utj6tE5mVRAofqzCBMTC4HuxZ2x3xu7rujV1CHyp11E46G3NMb5b2GffkJtbzpFUSAWgRoGeFreuNeQZEb",
  "key16": "5QLa7ULbxhngtSjvvS5v47UPqMBcJX9GYXxyABETNSaTFDp7c2yY7CwJ4dC5Qx9pDJ3K3qYpyw7NJkRqbCaJg2iZ",
  "key17": "4CibnQabToqEA7TxyAZJG1SmytpAppev1N3BLctrKduM7MW5jzEfKcfAPAs72ZpByeoLDHW81nPEmJg8sYm1k9Da",
  "key18": "5SsH7WtsmpkvSc5bVJAsjrJXW4LT1Fig6RNtUtU7cTLT4KCkvbRZBTasdGnvGqGGG2VP4ygP44SqyZog9ALmpv7o",
  "key19": "5LzpBX4BNK8oAiYAFuyk2ZVSX8CHU2A1dVu17UhZ259SqsZeDX4tTaCgcXw6Gyj8FyFWjUEUY3U7pivTD3D77xKw",
  "key20": "5DR6X5Nb29TrxSVrmmgq1UwwTpyyKv5sbjZgFMZSbPReE5Kq4WCrDEHL7bzWa6HcmmeBj2E1pWHMSybwS8Q75Zu6",
  "key21": "3Xo3XEPMV4JVQofff7fWyPfBMt5jQbGMK4diY3EPkS4vw3FpXaJzx6yGBf7R8qvuyfTsJsUsQeN3mAVMx7kyUauy",
  "key22": "5LvLmrttftzcXxc8SowxJ1LUoRmNoNzafo9KPTSg7WjJYuzPLwa9aDeLLWDM6r4cSYE6ErkarnLhEV4T21zKtMJC",
  "key23": "2ffkgadiuPdDy94BnKgxhRbivckNTQYX8nicazr5kwTT5LDm6Ep7yz3zL1DSxWaN9kq8u6nURBZwB2rPD8dZErp7",
  "key24": "42cTjessZeovL9e9RpYMTyNrSuJdeF6pEUgm1dS9YW2HXCRg4qLYaibCysSu8TrixGR4cXamyRGGKospNn7hiY9N",
  "key25": "5uUNyMWDsgTxUn5uaJbjRVP6P7WrsuwgEeov2PyCJnnKtAuErVrJjBucU4KnwUVELyEZgBaYGoXQb4FQji9YTByH",
  "key26": "2bhMFht3EFdNpHLDAZxRaY9UJedRxXfVriV1Tbq6VHkP7YiNaSrdT732s9VRDuAACa5NR5zqEZMy4yC6GK45Aywq",
  "key27": "2D3wcCmS7qYYATHUnCsnmgbTUm8bufpKZeAqAAEFGUT3ZBj5MZbbP9z4UdPJnzH5kMFA4y4A4kg8oVuiYkabFmFG",
  "key28": "4yEfrQUGT8PiRUYXVAHJKXX4EGKfUL2QRvgzrdXpkGj4C9YFWFSTyRuti6JNxqJVeV7EW79YQLvuMSMWxMAQ5JYc",
  "key29": "35fyNMdbunL4Hd59JtyqQFjC12CdMqc6BADYwQ1pRSHGDR2UBNFiRadAAfihmNjKLAiBwLrzavPXuqUiG2r5hSXe",
  "key30": "2C9kpUk3aeK8cdNLtY5554e65CeuCtzLHQzpRhhEJUQgg7iYRDwEgZ5onQCnFpeKJTEwdrCiVTubwiUdjLCGhiL9",
  "key31": "4cfaRTcPFf9GU8Hhmqux91MNH4fq1F9WfgprbxckQexnGfM4ykrt6skymGvXG9v59fVK64RiAX6Q6s8KULhtvpwG",
  "key32": "QfjniGoua4rdGsm81JJm3SnLfoXrTCe9xBrK2g7zRpNv1VyuNW8N8iADEATS5cM2vw1T9bXJNxF3UhJWJjx3Vqk",
  "key33": "3fHvCxAjxe8nELJ7fxv7ahkLfA6QoPHjwRt2UhqUBv2SoAKft6PrvEPrJJVfnBZ8Wn2Q7kHLM2yJx12kENgQmgXJ",
  "key34": "4sWfuXjgwymR4mGXruEvxRSW3MBvsqS1z9JKk8xyEbevS48ZRAUgUdtgDfaPQR9nfzjcamva6mrHdtMQCySZirGY",
  "key35": "3QZm5BibU1UGSR7YduVy4uVwFQifFu4zW5ekM238yokSLXHn2Ubb6Xumu1xeiXrT4TzewRMUjyZfTuYsJuSWo1Lc",
  "key36": "3eibzCycfkUzEW1HuKPJD5zR1mVqY1CzLeX9HA7kN3YXPUDVZffsJRwv5u4Tx5YtKUy6NwgABgkq4A7SNmzG1YnZ",
  "key37": "5pMrg3GEtVRqYvT5eiiLP9L53zKmZTuj5vY64PxTQNn7M126K269m3EX3P1TbJyA7hxeTdkNyCDMMcyDq9LZwYe7"
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
