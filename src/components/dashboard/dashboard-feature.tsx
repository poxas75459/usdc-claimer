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
    "3zVKFR6Xi6gN6KbVQ2g7tDSbDeMVubhAgFoXtNWuUFo9nNG7WgbWVB1D7BYRXD2d7mxueSq9uBbpweXbD8u3Mie2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NduZFrZ1Gr3ZmcNHiFvWBowbqJNK22xZGT7ggLnpWsqgZhYwsvSuCJzgsFAcwbDbMSFacu4TXuJN3BrsXTmdw1Y",
  "key1": "325XHwycXHqyGxmi2RFiFWgeP3BMXt3kjTzpnKsRS8PVW36aDZDEZYBREWZsMLgEbFN5ZfoKwwhthrNWzRbc1CWx",
  "key2": "67iEdj2sCagJPWhvnES6jcSfHmN1gL7SYfwN71bcVYNyxAVuVhCEWkRz7W4CU5DTPzns3kv8ivnMFYxwCFXE4US1",
  "key3": "2XFRpd7oiquhtJnVgdp8pZCCMAxxzgh7bZmQofoWMFngVMZizrsyipATiBnNhpwStkh9W9Z7v35JPmbbRy2o6dKe",
  "key4": "5WADMUcd7hxjy4HbvrYEV4N5F6R8fUjMzDJTK9uSb7iqqWmG5f5Vzy7Unwf2vzB5Z2RNBFoqujDo73sHnU6EaWK9",
  "key5": "Cfw6ED4sahWEnmQVjQTbMvvN828AzoSAyZbqwAumnaSg2qe4s9dg5ha1m4oUuHo4yh6Hm9bKydrPpuhhxadUjfR",
  "key6": "3KrHdvnkqoN1QyPNAiYoebw8rGbt2vZYHLARXYZyTNv9zP6NxRi94HMee7BfQ7FM3i3YDBBcxTDewB2Zm34adDpE",
  "key7": "5Ps9qd8M5wfRYLKDdK2ZwNEiZca5ESnMBSbEzXJ2eT4oxLBCmtvvsPkhhxawfhkfGvtCPcfkUBP6kV2MQ5ABMjZ8",
  "key8": "PXqD9ToyovgU6HeHrjgkWa9jivuWgNUG5TXi7njRcXVnbTYS4rVfaR2FpHBF8ia4FhPYYSVryg791CnuSaGi554",
  "key9": "2NrwM9CmXSdCmdWENkq21aKXtSbXonjyRAbRN8UVQXK6uCFLWyEUe5z8a9y3xwADsKMpGAk69sSLWy3MuRXbpDj8",
  "key10": "4D9tHFJp3FYih5v5ZbsosTvNyutNVV3ZCQ4mBMp4mmW3wYXPGTmN3QF5W7gpBCWC2Xp4XfXZVyz61cWBtsxq5s1A",
  "key11": "5V3hS93CktLAaLPicXvESxyqw4tZT5fG7FDoCLGDdRRRxkHW4p5687i7coLqBJJ3V1LfNMFfCj5BuxPJeccg9nQR",
  "key12": "2PgqesBKZs8wzNJk6o8NKt63qSw9v8SsLJiB47FzyPvnseUhaEQSukKRNo7i5fkYRvMhgXTkEJFXh2gBc8G9yYWm",
  "key13": "3jyUFnp5b6xZadgc4HfPXcfYQgQGnoU5kmejoN7Lgx7TZFHcToGBk9RTWBDJE4yNYJfvvFU3Df5sGUGEhWB2VeWg",
  "key14": "EA1acjWsnXvihvQAKEGTqGjDkArrmTUqW9A4Fs4geigtQBCRZgGqLRTqbKm216GL3dBZAi6mVZTpZxAe1qfxyF1",
  "key15": "2Nxh8WN2HqhUM7Jx17CTXSyftrAYDtXJTNMGEU8BesqaaQTPVyohqUnXbWtbYN8Qq4nKwugSxpA44ZxDXrJCSbJ4",
  "key16": "4W3PrxiJmMQWpkT4qDZQPpvtKmZwWvtxoTyasSh9VQWkJEgsPtewSrfdv88e9rsN3cvw1f7n6UNTTm91mwSofet8",
  "key17": "5oXxkWHfYT5jCFZAHTk3U6PTWtZfFVwTQ4VBA2HpEZC1c6tPuFGvzsn4H8iA1KDWxTbUGXhpMJmrwAYaSnMrKua4",
  "key18": "dL6xWe5F4YwEKDhLG4YAURFRMxsHh3PaBU18kXWZm1BRaLezqxKee2jqehQ3LNQtLwZ8fqpmDLDTTweCN6pHWdR",
  "key19": "27kKa7JYNQuaoijMWgeCXBnYnZ2iXnhx5KpPjeeF63e5zZTGj1wYtBXjBCgCUBQhencXDYVyW7oTVFdLxNRGTwzq",
  "key20": "2TiC9Jseb2Rm7j381caDBQVcmW5dYT1aeheKqR5ow7nYwuFDPyuef3otnQmtkUL11FMzjKk72DQB3L6CbrtWyyhH",
  "key21": "52Mx4zpoqcKJjjJhTUr9eJUUQwVAMnHUmsfVVViruYgHQWLeAod1Sw4zgdDbMozNTmR7grTMJhmEG7ivj6xJBVcz",
  "key22": "37xoH3Md9oFfuyT7TrF4AuNnMVrBbbKC6UGqq8W9XGEVGTnTyaS1HyVSY7erVCwWTZSoW6BQiayvGshunWw4oueP",
  "key23": "MsweKjPmxabtbn8s4T6DDPcKiPSnLuuZzVp54RNSancFb2chfz73rFnpFhu3mt2LrkE9dJeNrkC3vTgrxQaqobw",
  "key24": "4NtyUMvat3easAqjNRAr5T3TJLNnSCyESA17WpcQv2vUC35jxCHgbRd9aZer3CRL63v3btXB6NiqNSEaQH9i65Gk",
  "key25": "2Q2AvyyTDPSNgtGuFPNAe7emR5ZsnLVLzL7QWAuqZwWELiszAww5SC61WHy76A9VNEAk2zLgGJ8BZ8XL4bwtJCWz",
  "key26": "2pMX1wygBWYmPdW3x7Bi1qhdVGErj3i6pVVWZJfox7e8xVr6rztt3Yf57omfmCVVgGb5wbff4PuvAVvxypGVKCZ3"
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
