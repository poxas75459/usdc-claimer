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
    "NetYmRn6gbVeybtFPMNx2hZn2fjN8j7nQ4D4KyPQGAvAW368qjMGavo9T29NwiS3sQRoZNkdQ2c9sg7kov4zH3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YDHYgV8Kr7YYEAa4tvPDgdoYmgWrUYmiiH9pqBDdm9nnCqRpyTwKx9C33qF17MiukdKfxUawbdrryMFDt82sdyA",
  "key1": "3cWvWQLhNK1nMSudRJpJHwScGPxe6jeLMVjTTp9mYjjfuDqwfYwKefvBqmTVzn6sjNZD84dh4P1LMvyyMBwfe23z",
  "key2": "4aoxtP5Em4ynoh8LRr79pNRAVAtdRNWqx6hNdY62jTvq6ixxNpmPR879V4YEJLrwmfinTML1CmQGT8LQYJBeqSmZ",
  "key3": "5zJY12tXpFhZrWbn29qVwagnwxYX5Z1R8JZQuNXrH2vxm14kU2gzMMa3cvTVsUz5RsWCb9sH9a1duALU5EUrZ8uT",
  "key4": "4Jge1zTqMjUrRF7WDKSjTeYcfF9xQPTXPHNdZoDXHK1zHU99NjYoZEUDjY1pddM5nvDheXrwg5isYMZEA5it6GEY",
  "key5": "2dX5urtzhLgPVWUEEA4L3zZukirYDTsxS3q6CdLbhukVpV4tjzBN7gr5o78rLPCa9pxFfembzTiVb8yPYf7nVg8S",
  "key6": "2H7FBmF2c8QvWtW9fgfooVCW1kVsjJTdMZ32Ho2EAESTU78KrhMZGnFbwzZQs6UZutJtJ6ejjmst3byvKpvFncQN",
  "key7": "4TkGSBTsk5xw5i4tymYLsUqWjYRP8bLjXtPfp6LryPqsgZ9Xq3gPHnVRyyHeMbH43iTauHZzhkmSb6hPzQkmsyfN",
  "key8": "63xKESHxRQYexEqskYZvrHvUFYVCmBARv8G7ACLABq9gUwGAoc69DL7Yw2VwR7Uf9vHM68GR4RiwXnUhYJrZyRSc",
  "key9": "yqxwTzmnteK5wEZp3wRzrUfp3DFhQ7Fzz4HWfWXJc1N89B1HoiCxgwXcSmPjyaZbMd8XvFBf5nAzGhZdkv5QpnH",
  "key10": "23ao5UJmrZg2D8GH4xMZpAjYyGVTq3iVpvC4dh7FweRJLWmVXWpYRWZH5pviGiqKU5DsyTt58fRYb4wyMw4r2hx9",
  "key11": "cFEg8eJ35NWtKQE7KaUAht7omdzV1wBYdeJWvx8hT1xXVMP2GpcrZ36K2t7aJD5fTWXe1EdrU9K33vckYdTjARQ",
  "key12": "2mFZS33KAdp896Ucbc9EywyXx7XcEMXotTyVGZpU4uVqhg1iCjS5cqnBC7TrTPm3qmxGPKb7uNGCJr1oyAxTzRDV",
  "key13": "46R94gz1zdFfMiGRZ18mS12fLJhGC5pYuzTmMDUav6UaRRJTZoWLgeFiNuDKVcrdqBhAokjy7wz5mZszqd6zrRBq",
  "key14": "3wBcK848wHnaqnGBJzg13vyiX7CkoX8auvuR6Kag7EPejFXSFKriNxLBLFV8L4xoGpzzh9rkusH6r3p5GsJwh52w",
  "key15": "fU2Xwjz27iZsWxEpDs4su5Gb7CuAkhKUKuw6Zme4PuyHP1QaYV2UbkmYNFWgaFQWGzoUVi79TSm7Qe7TDS5rqun",
  "key16": "5BQoHqfjv6LzTDH42g7Wz3mkcFfrzjmxGNKR4Sw95rYFLQTQX3tnY3NBNBHfh8rHqn7njpuuf5sC1Sdt8cWdYKUi",
  "key17": "2UYBc5QyJbWRbdNptY2mtWUWVAPfXeXoZ7rLuPfJTnLjEuacaiMrjWoSiLFqngHiah5dXm2UDbZBiWA1u4vrrvUx",
  "key18": "GjzmJvtLCMnynK1ue8cPbHqcJ7AHHwTDWMAfqiZywqgkxF5Q716eqHqq752BChbYXx6uUkKxjVNsH9h8bY2G83P",
  "key19": "5r4QtcyBuxTkfZrrW9Tua6nCcNba4yrjD4JftPDdhP9AwgcwHHXPz4DpSw1UUL7FFRVEChYP4S8nomHFCGt3jrG1",
  "key20": "4emTqcPNL17SehmQf9T32kiJ7MqeyTxYuY735DqmW1RNfP9mV8DB6jkQhtCYEaTKF89E2jgVKodBMx6WFcT2Lwoy",
  "key21": "2zisTiMdvKXMnBLMJ1qQwVsCiRLshja2MWUYWqxTxCBnBFgsMGsiE6FRARTMzrRYA7cf23GA2vFSiGtjw1iYbvtt",
  "key22": "3zRoiNfbXNSPNJrCNgeRHU1ndUudetRiF6Uiru22NFDvZvExjTyjvYgQfw4nr2gMvMjtBjuzFshCCzVW3oGkNWWZ",
  "key23": "3GXYVeUe5m5PWBWcPo7MEiCrp6qd8nShFzJY3h3qGUU3TopTD4vn5itzPmbddPbnCLaeaUczBCJvoWpPdvPf6mC3",
  "key24": "3TF2QcVpGmvpduhSeFmHab9NK9NEQFFNRbp1hoTKx9aqT5E8yuP6dX5SCnDsoZQgRLWhGE7BttSK87CnjHsL8iF9",
  "key25": "4nt86HDb8Gz93exNHr4LRuEULUYwwHYikteRHNctPra9fy4RN9qdatioYXHKmDsXKMKXMZFYuTxnsHKvAu4PpBWy",
  "key26": "3wQpC5pM7zp6wvwN9fckHB62UNbRXuA8N4Kwx7EJwfJr8EodSvPUjYfaLUaJidzG7g92twyRJnbxrdRTysFtkWi4",
  "key27": "pnszVTQUa9F1a7ZUW588u3nEZnnZYJYHZXJ4MGuzhfMPV3o23UgAHEFAdfRiwrNH2v8Ej6rfQL6j1JgsDKwL1Q7"
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
