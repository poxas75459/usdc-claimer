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
    "2jjMFdzhbhGuUfsZwV8rh3c2QF6GD118zyHpyXe4iHjJsQ2nNRVU6QFev27HqwSoyQD697HcjYGtVKzE69m2o47f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJAZxhKdALzMBcBMx8cxYz9NQXLD6R3R3eufuCAARyGmGXZFmwj3Zst9rcSCSRnLthph3AFpmqz9ARcXLkxFB5U",
  "key1": "3skA5p5BJmjodpbS5B8vTYQjBDvGYrZRmTra9kU57JEuFyZNvRZG7MB4dbcjDwp3uWDq32hsURHh7SGhjcqcfuaq",
  "key2": "42oCJ2ec5gr5F6t9CtzBBoXx8nvQ8oyfxYteXK1G9MdZXQNXKUCUo6XDm6DUGuXnGZFHCBz3ZodBY3DkLMxaXjgt",
  "key3": "4fCC4rk8ve1VhrfevMSdVBUYPWCNQC4XYqa8C59LqmBdnaJtuTdYh7qNjAk2NjnVymVD4cmKzhPWYNxBEKcYKByN",
  "key4": "2VMXreia9WAtczNuQZpUXaKdd8HvidTj6PWPQpyp9v2k3c1DpfDduKBEjKrWZu4MuHK5eZwkv32JH8mewtQRNjU9",
  "key5": "2Ruc6ox4pByFRrrycJTF66aMiEpiptNn6F8xVkaTSbKfAj55XcHBteyywht9Q7hVQXVShDt8WLYm6NtXBQskYsp8",
  "key6": "LfNQgvkcPUJpGhkPj9i5TRfapCtfeooDKKfPes2EmLmNQSqc6SECVMxUTuND69Q6vifDv5h9tzB95WqjeEwPnbQ",
  "key7": "3bchnSHg6gpr3YpibemFaKzz7a8VKA79pQQHjes1Jucnqkm3RPe9srzJdYmdEr9LaEWLKoxGhXi9VSqp3Txi7HFQ",
  "key8": "4UomuA6CqXTLudHFuPbJVhyWPd1Aqp9xaxYad2kTLRHa7cBm96k9dKxBBB6z6kN16y4dBBKTWuQq6BE6msqG3kdM",
  "key9": "2Sw1T6DmQbnZcoYHxRwpjdaYezFipKS1KqoFxvkBqV12nXngX3U3313uVCRreHYGrgh95SabmGEM5Cu7XPb26fte",
  "key10": "5YvJmPHY7keWgVccfEovfkknYxvySZviUsmtKeRujtcUtKmcBH7m2nwAsRHthD3ijWytz2Xqf9TFLoBeEMxzYXRm",
  "key11": "4m4arF2GgzHNjqTBCLtGfBbn2pc8YYmLBwossZzhhbEMYAFQNjzWu6buKFq62y5Rd1hNEMNv2AXxRv1mLwMuEcbU",
  "key12": "5KoV5HU1grrobsyiNXSrVpyUp1kTwuLrRkHkBtAHj66d4PPt45rZyhK56bmgMNFphjQfigjzbfs6VkBapiGyTQk3",
  "key13": "2JL5o3bFVsmq9C87uT6KCCPmoTkDB88SXuYizLU3PX4YARe3PvbvX6B5tzLkbQpeRawDpReM2NmrRW9jC2QMQ7fQ",
  "key14": "dkfHsQVAeDVCMnRCcnWWrs6VC8psYzWwoovXzazicU8q3WENPhUqjt41puU4PhtxiZZKuFH6pMDGgCcBfFE5dLx",
  "key15": "PbmPjCJBXdwcnsZyvuoLacZr8uXQJEaoYGVewD5EMnSKSdJFCtNvoaznFE6BcVKV456Txwv3Z9hUcsm9FSsvNT6",
  "key16": "4NRWR6jLkf9EjKwYX1M6uhkfgg6pLKSJThkDHZ5gjG7Zbbwk2UKu8hYycXhnmNuF8xkR31D275PaHYZHSDqzFWk7",
  "key17": "4aYwg3PcLqdDWWKshAoR82E7vQhZ3RB6KZvRAGgVb4JzcHZZGBrfWTjuzJzyQrBPudsNrWmie14SxFRMMysxGb2y",
  "key18": "DXH1D8yVmCmsoVzof8oE3y3YCGzJ8PXJtMmYKY1dmzhjN3vME4CgFryRgJ6Kcw438wyb4jnzi77fqW1YkiKKu3x",
  "key19": "3Q11a5FDpFpCrp9CXbi7tpNKJdrYiTr4c3aaarqGKErzERS9FYUpBQszn5ysxGjf8s1uJxUGCB31LPnVF7jXzBhE",
  "key20": "4YECU2C73Gk9TfWQZdW6mkyR2DJVAXXyxxU1vDwy8MDFc9om1ozFhUMPiVVdVztTp21RgJG5h32mSTDjJMgrtgZk",
  "key21": "212J9QcXsJFcPYDX8xNvK8TD558Kq7Nofkdk5qwc1yMNtkQwJqsyEspjwGavVs98c7nyS54NVfd4JXxHGEaFdnFF",
  "key22": "CA2RBZYZ5pkaJ5CHiw8w5svkhbdr8Bg2AcRMoHcX4WHsK7Qsxzo7ohQyQGLNfE7LmiBz7C5eCM7AGTsf8Kdk6gy",
  "key23": "5SEzMLS2si8gZ7Y4JvTrdQD1EvfD8yjLNW1mK4YW3QTMYUacjSyDwg4UTnPp2VaWBuhtrMctWwsJuEGoULWQsG6Q",
  "key24": "5k72iMvnyh5uAcNBkRjQcxsKCrTqkjysW5pX3QWqBN2CoGeBF1znwMrAGic4v7R7QVtcZ1Wau733xe9w8CaZRga1",
  "key25": "2CuBeiAeb35Bf5cDwnfd7xHk3CjG49dAMgXKRvkWkjpDKdtV8Z2GreyMzapKWeYWiXMCvZ9bjYnuBU1pEsgZvU9g",
  "key26": "3tYW33MwyFC3UdzoeBs1RBoPMbX2fbJmGNfrjbjs3cxpECuxvjFZZQQbEEwsj2X4iVeQiKU5mYHRhiXR3frDW61t",
  "key27": "q2e4i4kcCvsEoyn2Qrncfo3KecYQ3e7xYDxzfVTPuwDpWJgp7oQGg6pCyrWWoXqftLfgpkvR9uqCYCJNfFsBRE1",
  "key28": "2hBAracMUaoxqSE1NhziL8Si2qFhjcW5DnCqdcbuzQLVs9Z5J69RtkXe1BfLwbCKNdiS4obnachyUN1Ttvo98fAt",
  "key29": "Zy5nYz4pqDugew6tiPxmq7pNLSXUftNkbiQp8hErNTSQUNuVJeuvEAhnQL8THEF6Gbe4kH1kvDsrF8mj99uBHb6",
  "key30": "JQFV8XWMauhsweDzgERrMZHbnL54KpcFiExQPPnPaZvtsgAGAaDzd5x3rSw2YNzC7gSXzMgVvCrwe5gnrgJ5hxV",
  "key31": "3iwErAoLZREv1Q2zLx4uvnngPH2oTzaU3tsPC9kr6ZsS5crp6uuJByxRTzPwVD6wZjAYbHWchAFZNtGcsUozCMtW",
  "key32": "2HaCxnbJDf6fGP5EQrDfkHmstutEtYHURdXcRLnddK4ZPRTGpAGprC9buKbk7HC1BHWDK7vm4jvnEBGiDMpWB979",
  "key33": "4wAcBvStg7bKgEzjoixEXvB18sWhq5LsTCgipCrJjGrWvxxd2CJo6kRh2KobY3DR7XhjA9ssrLjkaicQEB4HKttx",
  "key34": "Nmje9N1mHPeQpXL6smjmQpsAu2oFWexzCt66sWougFkxLfdjouRcFXWkjhpnNMWtvwo87ZkjU14CTcabAXq5ECS",
  "key35": "M6so13sATV4vb7URxxGPxiJzEVammXhhdHoXf97zWaDyk3zA2wwmq38TbhgGRE4WgBbCoPnkULurV6MeqH7y9rJ",
  "key36": "ZcRbECtY26HGgLsesBq3kVzzMz5DxifR8RWPoELiAc1sPV8pNrffqrLdQR8kqiC2MqazLeDbx5uEFYcWwQHZPTL",
  "key37": "36gSGoGryhHu2on2M8e3PmgaZhGQEfmdp8S8pUdkh2m7BTTGua4vtiYidPtdWpsxRxZQWwFjx1s3jQuBkwFbAWGt",
  "key38": "2ieZqYBzWA4Sx1manhXNX2B9c5xuqxUCwtp8oKgQYTFQwR6TFdP6y1ozecuKua7PK4nBpjNG1SWhRzoUcW9eN5cA"
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
