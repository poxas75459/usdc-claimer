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
    "4oRaVpc7X5ZBehqsVSZjRw786kTuzH4Xvv3JtbomyxiDJSqMGk6sveep87dRnTGgshvNVGp87JGT2B18eQpSd5KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRSJSdCrKGkBSYa29LP1JkKtQpocwSrfnrk3VBJDLkrr8gzRzCiUx51wgu8tTKfpvTxKQDDPmWLgZnkHa2KHaMF",
  "key1": "Ry9zq6YLaP5PZrUfn5YFZmGcp4ky26bPP3VZmdzbNL1mUrTHc5gAeSwNYwEHsaQsRpgvMCUJT6a9xsaf7GcJj6C",
  "key2": "4G9SmKotfCZqhxv1cx4KQ6JjcBvWbt4Bpty8h2AfnyzER2h9BWi2s2zAXaFDiTreBCywQmQWkHgpdBfnuBJXBDkz",
  "key3": "n19hVzZBoTNgQ3U9c4XtKw9sLEpkvLmgxDD2dwds5yrJkPRsDwjUmvdESdEPez8cgQZ67tq2zSrZoXn7nFZRTay",
  "key4": "3ZeFcyS6VP5ZomQ2KdRpKZCRPoBRxyUTakazjgyM9FrsKWFxmkTDLWcHfy18mpEsjEo4ZrVEf66caFqFV6iofH5D",
  "key5": "5DteJp6SgCGTgTx5bL3jMPzoGuK2mZLPmFYsbYa4aEPjBpXwngg42283vMTo7aEC3DKMW2QPHaiUWaNwXqPXVCC3",
  "key6": "DME89Z3wZE8nkk8GCvW2LXiiMrpxxvdcLBNeFLJVB3U4uKnn5tMS49L3rdQQ1ffAGAHcYi3drWPRevSSgf8Qvmd",
  "key7": "tE2AAbHa8M3sFY33WKYYQZarDQ7qZzW734FKf1dnCc5HdSnpo3ucZfxB3MyoiQrPmrPairVVCotsQ2yogeskCaS",
  "key8": "4wC16fK5bn7DMXQ78NEkWo2u8X8CCCfWnqR3tqSand5CaZmv9Y6tdYrb6bePeqfRapo8UFfqdm3mJ6ChGfMdJxKa",
  "key9": "3MWhWUBkYcnHgDW9UCpCp3M6bqoE23KNfLrzwHsJNdofEvfDzmEx3mqQPJmM88psY1tQ182iksGxxjAngrfeDYAe",
  "key10": "L4QuyzAriNaKGv6ZCvguBW3vKMFuao7srbZEdHp3VpptzD9k2zXekJ7gCZQdLLohynwuQG8zmQguTRnzAkyYJLM",
  "key11": "4QC9grUERQ6zMYv72vo1ugRUjZotHMQHbNx6MX9fKuKo5gvv91nmNsn6Hnye33t3TWGoyoyqvrUpyMLmScvB5eEY",
  "key12": "5Thu4HpNTpuv7aqdSBgKoye4uXYUXzdzdaGe5YB85oZbJR9fXA5QFDe9nXiNe5g1Lmwe3qu5uR3BwNNjDt9nXYqp",
  "key13": "63jKu4SdzjeZVvktKjz3XB5Gz2UQNrLaEWCX9kyVnjyWAy8uEfnSoNtNuUcYj1cZmrTi5r7tLG52s4NpyiRavmRn",
  "key14": "6ChUn5r4LC5mzYZ3z7RAzaj73x3qNZB3hJVNvUmh9YZaqZrH6vJATGNMJfKeaQL8PMfzwJPUU8URX9BkGVpyJrc",
  "key15": "1W3mT8sASYEzvvmfpACnShiVXESWYFmsf1zvuRgSz6dHuApasNvVh5p9Eh3ag5miQNFRuwWuasACBtxeZzDTm8t",
  "key16": "2k2jzihhxYRNZoGzyoTQtA3wq4PCztAr1CNd2cBH85rhS4GUSsdyGZrcSiJLMF6fAHpx8KZ1Famxd7utnzYoPuoL",
  "key17": "4gdykvaLUTNkZqh2UDFUX4VGFaomKuJgenj42mj2SyHC7RKQVgzrJQbk46CeiWUAaFv7PqorZPdqSK7Dyn2UmhB1",
  "key18": "2j3eQ8jWcobvWWMLMJLYKBca3bsGcr5BGZUJXX8UjxQSsoJb3bezQ4Lvw84uh5gW8jQk1LF84Q1b4mdD4V2d9UP9",
  "key19": "artGUTqhSxrxe8WqyPT4PiKzJMM3sL8dsTLypLfs3NPPcnNmMbZMHrak1h7nZSSfaAZV3J792CzwXaidfCZa8Zt",
  "key20": "46HtAH8hcyNjgpURn2Gu58aoMLf9jABEALZWCWKixxz16o5Jy3LkYBgjZL6ukcpMrv41G2Rm5uTUjFmMN4GhqY2e",
  "key21": "2QvLbaCMrQ7HVDt2fSPTXUpZBPFJxq5TQmd8NkUC6YZorcjZFr1px3dnjb5ErnVBUvjBhgPNBKgw3sKJCwsAoBJF",
  "key22": "4E5gPAW5x36JKUyTMPWA5KYXc1eCxYMBXuUzXPuR3EiJdL64g1CWZuWpiu4H8kv5Ervx52jXHzTDZVNv6Qskm5QF",
  "key23": "37bEe3w7omtx91H9RFpnDh1xjX2M3vyW1uF16TiV2DEcJrKDoz1DBQ4KYoS3ggMBcPbZXPJst2oLp26NgbQnDjMx",
  "key24": "426CU7oL3PKv84CoKpuuvaG9gNvSrn2YGJyAcjC46rr9z8CxpuPaChckVBbaQH6xnJ3zPqRge1quzSjBKgPhemnE",
  "key25": "3HCuVR5PDRjKMwmYtZsDWfe3HyScs9BjaCER5x7KHD6U5QDDq53nVeExmjdeUY3PpmAa9jiVqtPWES5DKMjMbgCN",
  "key26": "2wozJdUKvK9Nj1rZ6RGSCXHvifq4BTt15Qkg48LkSm1Sc3qjzMm3QC5aD6UJTmeRTLyev6eD33B1Vu2ZvnxFrL5q",
  "key27": "b4uQSJsYSjhSaHqG89RH89spjMzqCSjNNHuKDSMF7N1BjiB3974erWSXuLhm7Y8kozkZkNNKzme77tHf5LuNdZ3",
  "key28": "JbivDTXJJ5dqKiA3mNL2errm1bChno6CAd5cHqBzUDYfGZcoQmuGDANQeS1b2F66iBtVxKYFwqKvh3Aj3cMugxz",
  "key29": "34NJNgFWbouhq7N3o1MwxKPQTabffWdCG6akmxchRT6TRwt2UrwyyeXBUngdrQ8w84e69Q6h2KHdwGWzPpCXbDWJ"
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
