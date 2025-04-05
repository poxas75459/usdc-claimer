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
    "61htmuFBJHbfQnqowB3tRzTwjPF3m7G6xoKmaehyg6Xmr3Vkkk8GhLnqsRV1snYa3V1XLRsEbUjdXFf3LYcqShoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VjgYCGX7LbKVdAgc8YtJ2WqnQTU4xFACQemoo3ADMQ6W1DvDgVjeEAn6xmb9dpKK4edU8ENuemABr48sKB4nf7F",
  "key1": "2U6W4ZxodMQnFryi78b9PuV799fangqKQuPvmZ7qH59KJtJo1VVgqPQ8UvVnXADjo22T5qFCVDaKLbGPCy3u9XrH",
  "key2": "2uRTvyZgjJuHzKmF57X2pEgg5UNMPhcnR2D3nn2iZEzffQ7JL3ym4J4RTPd7hghD2cqW9FfE1RV2zjgjJ999wzTQ",
  "key3": "3dzAQM6hM5UvTX4UsmWPjty8q3iiRLeQqdxLeh3Xp9ZCtmfJYjmMTEw2PXEkaaW9Rvu7qUBB3uzjZUbyK21cwCWN",
  "key4": "38xwHDexPuJVd4npsqsYHFBZwRmFYR4prDjoHf3RHCnrY47eqrGR31CMR6pnR52GhHLbE8BgsSqKA8818i1UUiF8",
  "key5": "5VCVHmsuTJ43DVesufrn3KzAugRXnL5ckBRMvKf6JcTqV3BvNJZ6Pask4JUtpsDoUdQTijmtpBhPap9ZSFud2fpS",
  "key6": "eA12S8V4Jg8dRYcnv7ETBrdBuR9ziTYGPkJS8HC4M1B2DEBuWBUuu3hDmo2DLLYo2yRNMxXPxQwzAkX3dTzYRDy",
  "key7": "5esRX5gPWq4BVXhMVa4veUhHvmFQRyKnUiGNhcNztr1dGGYn9AMoY8AEEXPoFUijbd5PPp8CpaXAgAp9nnfcuxmx",
  "key8": "oKS9nCSCWxbfAcDL9E5S3ZtmJY9yeHPoZuw9Yr4444w2Z2FbjdEfVuLJPYxBNmoSqFQKUCNh896YGv8XeUrXYNd",
  "key9": "5E8xDTwTSL4VFiBQ3ynHcXgmDkRwLLuZoUqwCdnCK7cBUAdhBNceqPeURSypYPPwBcnrdeX4CovdAit9WqjKkDEL",
  "key10": "3ghwn16AjCJNmu4DN9fvs65gSwb7na1BaWjN6391iypWuTHjVNsvz1HKcVHpiFxbUbVVwRddddVYunhjRk2ADmce",
  "key11": "2mm5ftRQyDKUNndfJhF1vqoYbJsZZxZ49GehrEdkVx4rUmWjZX6V3xJLCXbVD1EzeVNv1FNJikxnNZ92CftBcFso",
  "key12": "4nSZVYRx2n7CYfnVRE7ceFYsD8Va7zgVxVkBMFiuRBUoTLHLHRzTKzzettHX65wSyNAsjTd6SocT9SMPLCM3CiwP",
  "key13": "YiJZbco4mkiRyGaHUSTuq8jcgM5LgrBvoyPBiQ1SBmuh2NGAHbDxdGn3ZuZTCmQ2aVCVkCeyHuq16Hr7szZtREA",
  "key14": "c4nRbtDRbjvBmu8eTaPoAwzkUqSVwVDsd713zg4PyF3doNMxGpxi497AX7uiqBLUfqFuPEChoae2Me6ZJE2BMk7",
  "key15": "2xrTCH8PZRHxPBeaeuyerw3L7n1pEFYJdZ1Mr56kN9CjuV8fmV9FnNPkMp4a7QaVX4rqPVAoMLJYRhyrYHroHUX5",
  "key16": "5xgvPaB6P11cfjbFW7ejkf63k9S1tcpkszQ4e79yBDmkduRDUeUUMmyP2PR6RNKxAZKiGSfu8Jpo9a7yRRCH4G5J",
  "key17": "2PWzHeMsyGWYd2hrcwLdaWK7K1cYsTjni5efuEKxaSo47qaBAgNDwLvGbexbwUAuiMhTqrWjjJ2syv8oiJjmV6HK",
  "key18": "4xZ3LKjU6Qibu6zAVR6t38HFyp7bxbccN16nXi8o4pZ4SF2QiFmMbjvTHEohroyy7uKXqU8XCnumTv6mVvoJWDEr",
  "key19": "kfX2kqauQetjxkiVoCXVumqVfKVCj4g9TJvcrzWMsaJDKBYLq1RWL7whCjjZke9aUNY1cmSMHbzbp1xTkM8FfN3",
  "key20": "2XHm2t9LP7V5ELCirf1ATFoy1bdDSqKBfHhPg8bVrRK5b4B8DRpeJ12a4ndaaDb6Vh34nJQcXMxJcLcn2z7ACYqB",
  "key21": "53KznzqqcJRBE6H3y1b1ZN7Yz23LLe5AFmBhHdkWXiBzEwmt4N3xkTe3oCvey8GAm5ZXBdrmUnbE5Q1MLtvJ82ue",
  "key22": "471dHYQ6tBSoS16C2Yuz6nQsqha98L3ThradLzmjSV1nNKCQEvB4yZM5fJv5SiNKXzM72rVsuonL5bYNhH4p4PGu",
  "key23": "5eD3CKjwwvBFm627JcrqWAZFfyjNG5K73Z5aDYCFJuduQxbqXUJpH3tR9DA4eCGFsHoimNJvDDSibnzqrsZs3eAy",
  "key24": "33ySMK6Nt9ctTUUstmxdkTQ99WqX9U5rL15dzSMVm1uG5qgf5xVeM4ZcajLXNXdNzSsc2SQe2h7pvVtmrb34z3Gt",
  "key25": "GywxnbD3zTC2TXKNw8Roz6eEgHoUvswQzzVx1sfAqn1MLkNDJsWhkkedn79ejZ6fcC1brrBPtNfYaL2NG4Zz3YW",
  "key26": "2uWwPUndQbEDo3Yb9NxQGheiQ4tZxkNqvMQ9tMYWy1i9rDkc6cZT7fDCiac6BUyKphoMGQuuXiPacMisu4gnMSVM",
  "key27": "2Pw2tLkUNtseQpQmSrWRUERqk5MzHASBiyN6PKEZczbqubbftpWkt1ZwVBDWLM8HRTeSjWcy9tiaRVhJdUDzXQvQ",
  "key28": "c6Kc8xti9jzJcLviBYuwaEEE66r6ndfGAvzDWX4Bec21boPDSMFrKnGxevBBhZUndkMgE8BbZRLMDxag4EnwkSc",
  "key29": "MX1M9D4jxVjpkMq5AkgTYE28ZVKZ6Tgf9W2uW1wsUCdUhP9ksZuCqhj7djdtMjroHrr93GUqvtF6gDatm4UURFP"
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
