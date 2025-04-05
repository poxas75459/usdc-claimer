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
    "5mWVkxQ6ZHrJmy2TjYhSPwgrmvokfar4x8sZ8hQiqdg6PFruhnvdzSuyYPa27MJdSxPPVavYtLc6BAJXGiw8BjcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czmyzMj2QuXjgHCFj8oZBJzU4HFyp4g7eoP5emsCf6yVp6UuPPJZ7fvRt3enjVeSn7zmDZYRP6PwXaAXeKs4PUk",
  "key1": "2vFBzDw47yCnUSXPA31TFrgwT29rqoqPUx3YemFQRnxCwypRoGM5tWC37ZNsgznvmZy9b2Epy7nKd4DxbBhvD8hN",
  "key2": "33MMm7K8XMiJ8GgY4Lt5bBVVRUpsiMqDFHNbD4vi3Md3Eqvhpcx4U6vGnRkYPUZ1qjuYK4kXVLYpNJUJTejjuNXu",
  "key3": "5x8YHZpk577hrw5WBpUtCHWDriZd7aNMShcSjHVabKs4bfDnkHX7a8iUyEqLvd9giRhTeH8kRh4PZ1QE2S7v1h9j",
  "key4": "4bkjy5gvpCBj4TkscU1HyM1ZwFWkGwgWuXBDEuXgGQJZb8cJnZd1SSDyFZFqgK59L7n3EPuV52JJAJL4aKyafr5P",
  "key5": "5cJbcgkiDyHJJsiynhr2E1M5QMgtXTcoQeDgg7SnDwF9euEDu3pXRuh4VNfGQUCRs21nbFdYWeKGwrnSzZKv2aQQ",
  "key6": "5VpWGDZWJByckV7NBKDkcNCrZ2tLE1Qtce8ssNQcHXW42Df4Mwt6S22LJ4Wv14GFPw62qgjFkxnH9nK3kWB8r2zd",
  "key7": "3GhCxjzXpjdTnNyKMU5A1VHKcUcSdAix3XM9QKxx4VD5M2AcLhgCCVa5YNMbgX8TPHrf6osUXayD1PdJ4W5mH2br",
  "key8": "2Bi8BTNkCRxftHzAap8cKCQKHn52X7G7Ar5m8N3T17Qt8MmvKTRFGTJEEKNxBECRbb8pi4oc7n1sx3Wafpo9vk56",
  "key9": "2PNAhnLoSY6KqPqx2NzHZkMo398M83YSP83WBmBNeudzr91cr7ed9UEv4MPbRe2FcVgwGaH6ENRJ7Tmg1HGQnPuz",
  "key10": "3tMxLY2r8G5jRwHiMnDnCeEXUf8Wf6WbeDkkwCeov7eJdawnmAKpM5F93FQMwqzDEJey42a8p8nJ21811cU9c6We",
  "key11": "5NpTj1reLaqK77ezqCidjDH7sUbvaGaZzCBLtMXmJC1L4VbZCiwW2CVpCu1AiN1crdQh5kqVjJX9pzWoQPZ2ymxG",
  "key12": "2aXn6DRyoNJdbe4YyQ8qAitDZHKt7N9Y95UBX8Mfeue8qbVGpegTpXmsCswagRpcvZzJT8vRwC7xG3a3cyXF7gz9",
  "key13": "vLXL4opm3UauhMDvrnuxnELgBMy5Y6asbJVrprifbM9GqQK4AWCUs44wBm4YpanD7qAJL1A9r9FzvhzU2zEcA4A",
  "key14": "4ZKM9kPgPgnCjV6RFpi27JSnQGCc7fYL5x5AAeqpXKpaQrTTbXdrX81wDVDN6ECDpqTQSwgThzva5RivVCxeqkFm",
  "key15": "Jn1CUzwdvDSZfWywZZ5BR4x9f3vGghkZVsSL56bkxdRfdLy6FYMAiwHCW97eFfEGYSwEw2Mq4RZkqY3qCGeNLts",
  "key16": "4iEJM2orxQ8a7QjqdCZA2guqkmGMQptPKo7YijZfBv68bHgSx4MHhQpvm7hGhqCNE3dX1cAR6CqTRmBb7BN9UBwh",
  "key17": "5o2gmix7T5DWbZRuRN3qTEpFWurrG3KdhCJsLyE4yY7uWHD8MrrLqybUtFihRH69xQL2Lq4YJRPGkYhjvQCsJPci",
  "key18": "iFv5pFUU3ftB5Jksa4cVGtvTG3v6tLB6WakU7cog4XqmhB5nRyEDwn1bqTdbgE9G4xSujK5BD9UZSANRJ2GWdNL",
  "key19": "4wApxMdZxeyZCHCNTa37ntam1WtPxuwVwEDe4yMWQimn2oQpKjCkQftpcgXj7LPqXydbgodRexdLSmx5yrVKVt3U",
  "key20": "2M1qspivPuRm9CTTS3AC9YHfT3mJwDymMx7N6vNVEbtypCPafDbJtCpqHifMcLYdKxoBhkp94FAV9V8igPyqFnCQ",
  "key21": "2Zv86fQPV2GG2STUQ6NT5gANRW7Vc3zYNWhD6Z1SCYhJspE7tsGwowq1LXXWPEEJcJmCFHc14BTFn2K44LtSfPXQ",
  "key22": "42RT5BH3oqarTU4CBBGbf5DdEehUbPN4hKvZZgNAbxRXZbJ6wyStqgrpqUXpx1kuMs8Sw4Gcb5eVysLgevx9Ymd9",
  "key23": "5G2meuD65BEM2hxQuiakqRZ6Yt6m9eZyE8tLq56fqZZNfVj8RWTaemyxc7gsEBALpWfnuYREkeH9HnbXD58oCQ1g",
  "key24": "2wYLD4ViKmYa8qsziUnCz8Cg792wbcB4tHKrFoWHYEgjiBSmrMb8s1aUFRNEdQiNKEgwwYznqRmGcvuEcZ4ZkzeQ"
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
