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
    "m4aGPnZ4yzzcsULsZqusSpxTjM2eowNxhnCPWsAwEaTg4yjaSkR444pyY6oRB1hiBKM2XMwUpqpNQDmFgrt8K4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65UjufoSsiRjq8B6wCtnx3KcFQcbhMHuQZjdv9WgpWX6wCskXKmKuYoGoXH2nvevU1M3b9qqkSvjArgjn7mCZsKh",
  "key1": "2VhStwNUfRcyXdstQHhMqz9wzeoKF668cCZaRXFEbsbvcL5m7Ux1XZBXE4ZSXcaHz8pP7CitJPHBLqWn6RWszWTP",
  "key2": "2zx1up7dWaVa1yQKA51xSiBrCAPJtpi7yoGwpZAeKbYa6gQK1PeUy7JLxHDzux6pPWYBnZXUckpoV3HNMUus4x1Z",
  "key3": "dPstSHMK8wPAnPYN117G3ftDNSq5iQY5XQ5mgETmHL37GP63cNdKddpbXP8fd83X7njnS2sfcnzWRU9Qe5mKUyS",
  "key4": "3HsQS3SFvRYHzjCY8fypqCLnu6Akyc1bgL8Dxahe1MX2n19w1HD6ZJwypCdKfYqQZm8BcURHTUuSQFcgeTGqzm6i",
  "key5": "3MqsatsTRWH2H8AnQvzEoM7243cDaGEYDviTXavGHLmDqRCKVa3ZPWhRp7ZHensY6UcM7hZoJ7H6ZoHW7ZyHabPK",
  "key6": "4q5JwCapZGv3JQY8RVCLRC5Fy5XmEVABP7JY49ENTJp8AYDwHPqGPuE1VADVcDm94itWkSdz25y6HYtY4VKAtntS",
  "key7": "3uCAjSJzhZMs7G5frTGKL9GFpwBzqRSGm2DK9sDrqA1e4jYbamcJN4X7vDGhtcM52fobeKpaNNj3hrpex6nxMYjM",
  "key8": "3xMDKdz7YAiuXKUB1vbZxAyestxmCCNjZqF8MgDbRsmshkJDZb6heWtjmjG7vHUnjbu11WmbFTy7yi1AsUPpEAqR",
  "key9": "zpZMJFZdUCTkEcbfkkBxhsMazdjHSQgEPtL1pBLLEWhZNTaiJ9tGWHUTLnMoriTVfvSZavDPL4tFf1CQ4kZEZEu",
  "key10": "5usB6U2UkXczX9MCwnDdXYZwKbALsCPZTiahf2LD6f7r8GrVc2KVAmx4m4UMK8bFdudx49iDfgWkF9HPoBmqdARB",
  "key11": "3naXfVS5vNKrFx3BF3HZEp7pRyi59ESqtKa7Ni9uevUq5cp4Ln6KMhxqQFM4SdamrtumWTNGrtYx4AnP71q7Wsg5",
  "key12": "2nU3topupKoEkFCMZoLXuCgQKQGJqG46GhmRM2LoBtnneDVnqdVV6eMEBpYbpKbJvG2JToShYgJaejUL9ARapFPs",
  "key13": "3CF7KySNy8pSw5LztSXNez7ef53EK6ak1s2SdykP5MZY4wbmdtMmc1sktZ63QZPJCGfVyTLC1GcJ45kXCc3JdvkC",
  "key14": "JZi1CvjapEN6sXgfBapv6veSYf44BooTdweMWBgAUh1Pi37PCAJqiDgra7KRnbcQ1is4DQckvmYXzLkRrf2WEyn",
  "key15": "5U4hsvNYkBVTf2b6gWAwxXtZkiUGVji3TGHwW5TgvhHzwysr7xKMH32caS9yFB5hCRhMBj7uShxYQ88iwmvDWEdP",
  "key16": "4z6YvbCE711jwyjhAJ7Aj8EyekkeuK1UdDTF6Tzeex687JgVtUd1uvSgPpB418sKCiXSuyXUinDiBP36tuV8y18h",
  "key17": "22qnneXpuoy4NeNwR3gwWiayL6YofHgL2P28iDqQgFETEN3Rq36dwy1jFHtBDA7FSVCWXjgrDRxJxrTb2FzH4iJq",
  "key18": "42Cn2E8KkTPADWTeLmGgvfazctitbAw5n6kPe8CpNUUhPRiwgdW4saxuaUYH3Lqkq61VDmP2LbSXRWTy38Bg5tU6",
  "key19": "Z9Qt7DcTid4q9XeTwyZWguKxitoAqSb34EggyBhRSNf6SRFC26tWWcFZX2kvFBPoE6t8KBjJUx97wNmCiSncGu2",
  "key20": "43WQ8qUQPYJAho9aEG1RQSusxm2coXvY4GX6p4E7sFyEaq3X4LnnhtDfzuFTjeYydp1g8rGKGAc5SEi5WrTT83ge",
  "key21": "2baKNHi9Hqb2W9xRb5UvhUsQXey3MoQ2or6zBhyx23LUc569k687C7tEBVGVb2fSq9mAkk6yWjBatnzmZ2cgCwRK",
  "key22": "59viugRDWrGmxpDJnguo7LkjqaU9YgnddBYvgvbgxc4KvpPKWmm3HnkkUZKT3Vbu2Q4eQBzKBtwj4XnBt19uCHJG",
  "key23": "36Y4jvoFGThBk3ipjRkMBnN1K6S7AYBu91U2zAT1eDZ7dM4CDMx44mWCpmtouRP5KirMVggcYF8MC6K4H2CxX3Hc",
  "key24": "5PzCrC2xDVGi42RG6Ac4jkR9WwkwGg3NmUyALhTJY2cThVk34sKKbCYPVHHgHFmhoWdQToYLnnhMGEoLRDLdosWj",
  "key25": "aL6ffUyAQDdFFJ52PVwnUKoa17bDfHrJMcHuiwjthppCdwKVwGiuDUKf9syXV4WPhQWUvfQeWVdZoERSA2HKMvk",
  "key26": "2NWUfwHEuiCENdJENS3mqurUzf5EztAPY8RiSCSdAQcU6xWfmjj8BuJUQZgD8AJpFx4KkDv3ffMcFLFbEgJqzmv9",
  "key27": "5DeZdLGRj81HJBt4HuGWQrmprtL5xzPmJniGDWfDokp4ZtYeHv7bvVxcRUwq8v4uYfXCFJgRAL2x4jL7a47bJYoK"
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
