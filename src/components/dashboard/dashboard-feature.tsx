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
    "5JWDdPt3oDjLSykYuaJBgjiXf8TU9RmfbCvSUiHT3fwT51gTGdi6hjfh1HkRJoNGJy4QYVGczX4E2DgWq2F2FDNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4if387xaXjUXt4v4m2MncMZoZxvjJeMgB9n2zQtVUURJR6StzDKJqQDSioNBBeTgozkTjBXPs78fiKXMs2FjsLmr",
  "key1": "pGNwPQaZhxzULfB69ujPANJz9MY1gJo3HVoVtCRvDQWUUgmPpQnFWSJGybXHTxJdHbxEsmiuzdV3YeCgJihvtfT",
  "key2": "4JevNDcSAMN3hkMNoNczEusXDc92YhCKVu8Mc6q9KZc8N6Xc8NpYvfb4nUvAwPUtP8jxGDWgJqW1eEDgkyVkrzB4",
  "key3": "37vHEivfPFbUiif9U97cgpzF3QKPUbmYhPtV9W7Y8qrWhnNLm53RfyUv4WqDVeU6jQfJEafPqBKxZvD6NdczQXqX",
  "key4": "4sQVQDA6zd5APV22ptjULVBch17RuoiwXo7FdV7S4KFvUeAbJvFxDUELej9xetGTfRwoDtHpd1MdtvkNqgy9vEan",
  "key5": "5KeWqhJkim9Z3SfjSYYn5B86PjDsvzVwe1Ne5dH8VK49WbXoGTN41U4gtnq2yxsYh7cgzk4JWhYMmZih9WkYmi16",
  "key6": "3o9zQsfVqy1YGbfDny1N3gi3PDNnf3ZUw779M8RJtP4VWaVyiyd9nyV4tRECzNZdMbtNUYQmfFVestJqtVrASiB2",
  "key7": "2mTtf92Ukz3SuUsjL2nBw3XC56azoQKnHcKmACcS6MntN1VCqQ4utwtf6RzkUnzV6UDYLjDcjr4ozWkyXNYhcko5",
  "key8": "4e2b3bkSgr6TvHDR1p8m3uWQiAJHTrRFLjk3YvtB2Eyp9Ekg1jdzFqT3YHHoEYtAS2vQ59fnxsR3a1dYBeFo8Xz",
  "key9": "2SawS9DnmgH3saEmTUspUHjX2Qj6wAP68iPKphaAj5tBZHSKsK6E9cPidgPKUpLDKyC4jT59bjpFkY8bAmMrf6eg",
  "key10": "44qkZAWZHhdgfhJdWPme3tXdkuHGfu4MRqm5SgF3XoCB6YRVRsisXmKh5CaQ2qNuujJ3xayV2b1fpUP7PNEsCcYT",
  "key11": "3GhZJpC83VnQBvTTBZry11o1CNmZy5q4a79VGH8Raop3n92cfLdxuQy1gKVdnxpema2zaJz8dPTeFJLJkJ1YkEfU",
  "key12": "2EwhZVm5Dc2G6Mo72HfT1qAMYmY9dNqEgT9EHSsy93E4WscmzRCuJGPABLFfdoyJScZT1yBQ3RXf7dcEsXL82g5H",
  "key13": "KpP5aQ8hHYzjy1QLq7AVuSXRVCGPL5TmV4qpxhhhBEyUVum6LjV6VLinmstg8n2rbR6kSTqmaN2rTfnuiWN2FEk",
  "key14": "3diuVmDHD3DAqGWNNvGArEvAt7f8Nvc6jEquCVA4tnqf25TkDZFALEPzxSQAuukdhBkUqnL2VGCXKwCvoRM4HCST",
  "key15": "U1cTka7CPhiFRLt4obKuXEsVYoe9N914k3iAWZP7WS6MJq6UcEaXWM1Xs4cEKQjB9J3G7eweyAbPNuKrvaaaboA",
  "key16": "3QNxWG9s91CY8aw48fXAvafWV9SHX3RL9SHRqonJH8vdRaYNveoWkirAwFKsVCLr8SdDuxFWfJ9dmFqTUeWtRWBQ",
  "key17": "XctWz2v2KSsSJxe5m1fvTBPF4fBcmv3jqsiMtZYNjGWXT5GbvEqgKNJC1cLtgyuySe6rKwiCVpR92BL4vrmkasE",
  "key18": "56ZoeT8KYBknE1GmdvWY5MaenZziySzR5r8yLs1zXxNVFddpJ8dS477MuSRmy2hgSoHD6wL3mvDkKdD9bD4kXD3G",
  "key19": "2aJxefVSqADgQ5GwDnVxUmNTzvDAytF5svf55RptB5GASdBeaHRz2nvNyMpZYoZJaDM5MKPjLvCn3ubuwnfmfXiG",
  "key20": "udYC4cXNAVbth8Rp1MSYnQ2wHrtPuYUCFtELXL3Km82c9WJud6rm7XqYZ8tQ8UUXVL9aQtAQe2aFQaeonN4WoKM",
  "key21": "459oKiZnjXSihXjJXfBVRXxQA74KwD65YGLxXwjqbrGokMrcHUVponWK9MVgYiyfBkiJ2UYukkXxZehguWoKimoz",
  "key22": "1298Wpc9XfmA7GJc38dgokFnJmFNWoNJTQdEXGUHaqU71CtuQMqcRLPYaebGXQHBenUPPTuthMjGnFC49dgmJrA6",
  "key23": "kDbJYVvCMdWfvUZ3N669osLRPbGC8o1VRW1usZXMrsrvfLc8Y4jMDCFRSiv3UZTHVMFSo5NtEkdhHAVqbPTtCAU",
  "key24": "2YnuLwKrrekr9zdX2MFfqhY3wbTK4oHDmnq8Z4N4A66Wu6GVrF24DEtoskmjWs3JUjF1Fp1J825dAFMB8hEwCDsS",
  "key25": "3cptw9BydCR2CVmKGdekneLKMixw2TPzYZsMFLQrqwjwrhYzjQq7Axdi7YebsrNf2JAnt21nALS1PLEcPiwgLEXJ",
  "key26": "5gLCM6ygQK2RH3Cd5XD1sEzLGtYt6JtrMWjM5f2zqzCX6poqGAhMqY8oP7nt74Xvcm7wsWudTM1Hsr8aexnvvqZV"
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
