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
    "NwbFjXW7Y5CKRwNYFEs1ChFXZHRj9EnFkgGQu7MYHTb9NE4sRykrJPm9EZqspYEdFd2QREy91ivugJLTbFvKgjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GdTw4ns56iQ5mBLzqCbxJyRj7FaWifpFpWUdMKTxUoUp2cPqBP8pwhuY1bUYyxv4pa2ptLZ6xtSLYbpBDxyUpK",
  "key1": "2giHiMFmL4xFKddajHbKeVWfCnqcEJqucYas61XK6vuWBKYUCQRNSZSLJVZBSB6jVAQKn6JVpYBCMWsUHeWzA5VD",
  "key2": "4vraBsJpAQSA3ru9MRMVic7gmVeqLYNGx5AcK4YbK44o17gEVgrNn3tmWHBQxE89fWT2xpD7VN1kvZxu6A4qZrQy",
  "key3": "31RJDBHgMkqfyinbYBQ1JqxpKSK4rDi6wY96M5UvLXtpPPTiRSpnEWvFqsGDRRgPmbLM1HgsN8HGc3DExPdeA589",
  "key4": "5pFXoJperjmn6JiZei7kZ5mP25jaRGpAo54StH9FiiHi4strZRzDDNfeZn8v2CHcZnnxxd5qUhi68WLLkpBg4mbd",
  "key5": "23vkN5L8ETHjz2w35QyWLVV3hLopNQ4pjC5DqBUUFcoftu6KPCPGP82PSw1iGtdGiKL2vw8PtSTUV5oJsMjFtszb",
  "key6": "VatWudJxKzXn9pwvP5mr1VXS7sKMZpvua9cCeRVSeC8ypbSF1H2A1wyAdsKtaUmGJC85jXCuZpzF7Hymuw8SDsb",
  "key7": "5Z1r74aEriqY4BwpTM4GwUw2CUGnFsDq9diVSTGLASQ2zBhvKyqhd67RrUuMqHxPvy8eVdFkiw6YNM8YBf2mMyfv",
  "key8": "3E52rvNJSrcjb6A9WX3YE6qYCnKbAK8UGJomCSWWqxANabETwx8Y1cPM72pzffGKNWMrZkNGRWtXFmpZyS5kKNnN",
  "key9": "3aqvtQjfp2PzpD262a9KfP8S6cC12JwQ72jJULrH7T9eXpSBCc3HNHzxn9DiJksmsmQJ4mmmBsRWwyGG5wF3GZfM",
  "key10": "5on5b9KNtCDhgNsBvD3HLqFPakeEvNFoojQTooyaNesoWeATNXethnZ5N5BDurrpNnaEsCWMQQqKYxBjpWKk3T77",
  "key11": "5s35JPQWt6ApGosvGMKShL2Nwx7iLntC68A3mFxTAgV3BQGap8m6To1Zw4HNvYdXzExXSjMSGRkMTDUT7j7Dyfck",
  "key12": "wS7nS5xgrux9vQxs8kjk6zTmGR7bEzF5rmDXMB3trzkNiYWAMkGymMyD7j1cFHBgCTwW8VgGVkMQwUhfVBCmNBF",
  "key13": "5hJm7xVJQQ3r2Bihqb9Cp8hrqXC1A5Xobt8KPF8kV1ifnwEvdN7dLUobUsPYu6K9VexJhd3VZaPU5tJxh5c5BaMP",
  "key14": "5S3oVZh56QQFXXYXw9WJ4kjy7K7vjiVAPVig1Ar9vSfwGE1kd7suttFrxjHtk3exfR3tDrB2FRBtryFmcap9Mq21",
  "key15": "3qAo9exWY5QbqNNJfUC9rrArqcbzAJmuGHEeDdPWohEcchcCqbHYx9cStWkiN781eTkhfTeLBSWpDhwFWhkJYQcA",
  "key16": "51tfD7YaYr4su2H2M1uR4tWEq4GpevvAgjiH2scwasn2hABH2sTC3tGKJJDQMjyXcJJeFm96wrnUj7sDL39ugo7B",
  "key17": "2bcDsQAK21t7gfAQC3FLFQPhj3Ae1sAUJwd8ycLYDHpiEpXMa5uWaTAGNotRUmq3RrCTJwpNHuuzXmsAj24DoC6n",
  "key18": "4iMVsmLNsU6aLfyS8McFV6FtRfE2PFM1V71JrBA2Sqy7Ehge1CECVyXASfXVSmJMDBci3W9t8B65h7FCTBMfdE8F",
  "key19": "K7aC3koxWemgeiexAYDX5WfW6D6JUcv9VbF1unK8sKGB6qMix76PmUJfNDBzEyJMPSysLoUPXeGtYRcCJvQTBYn",
  "key20": "2GP8U3NxgJtErqN9vSv7fwDCQN2iP4VkPwtdmw8ddscdGYdpzdNHyCSToq8oCYcsffW4V9TYfmLv63vAPbymfwB9",
  "key21": "5L7BrkeJaM1ewr6GdKb15CVC2sUJhm5QVcQ3htikVAEBP5Vr72MM7SqF6p1MA7D3AFEfbcLQUVag7Z3ATn8eAqAH",
  "key22": "67G4Wtr9bKNLdKczGDdJhZsxwEmLVjNd4EKXFoJ9UB5NtMaAJTepcoMX9SCa1J361DAEnKnnrbRB1917P1fdZiUk",
  "key23": "32h1yN6YstT8GNzZ5JQhcxGoC235Ltq3cDKjpRzfJeS7XTjnRsMjmWJ8DJZvLQxzAbxAgjPBQMgagmAcTyXb4ipZ",
  "key24": "3qEpLetkFgD74WsFLE4WeGBjq1LeCrKvamFyiLDEb7wKv65DgNotxJVFeKEDn2ybk843z3jbjw1zRvsuDxqd1UNX",
  "key25": "67McY6BbLD2RAkfeRpTeNpTzHmieDaeKTr8juVpEc1MWLTmgf3m3v1Dk7k2DwWY2QfWQz6F691PEZij8MMkTsm9s",
  "key26": "2yAxtk39TcqnD9x9mzCLVs9gn9Cg28xTaRkiXqof372pKT6cmG7T5LnzrqX5MzpR6R5npujQr8anXnyxcQs7jfpC",
  "key27": "2qp7vyckQzhLqsmqm3w47GuhCUxDdr5JTiS3XDyPeEuK21Fhd57kCke2JoAKTbixL1E8YkssQs2kAtGecPcLKwg5",
  "key28": "2GfHYRYNMmCXNPsLb4NMv7BtS75HkBxqFELViex6TH7PF655kqmBZyk6K9Fn4zjqnphxDpP7gX9Q41Q5Md9ZY6FH",
  "key29": "Vwny4n82W15uc3aRLpuYFZx6QjwuYB3pMguusAii5zJ9cvU9gpVpp3Cp3cS27uqTbQzwyCmJyMc1XSE75ptnKPP",
  "key30": "5prc1QYoZXqygBM4zT5a1o3fmm1kLr1VBREKfiCkEu6AZWdRsmVcdQFG1koaxPH5EXeTZaZ7MCcKqrk2oznhkwJo",
  "key31": "4tNmpmLwMnYWVJGdSDQA5Fvf597RBCNpHoytsUt9pxUBfvZwMsXqRh8m2BLusicFvNcBPsTouDmNAd7RYT9yPAWR",
  "key32": "5t1akLTUB59GZtXzcW57hBbXWaVjFSvxiVpEPm5D8EY2KaeHSRD4p1uzz7CngaTuiiUk9kYHTnck2J8gaCWdTVEQ",
  "key33": "MpUH9PLygHPRaGPUadecUCv2xnkr8rk2kVPmP75KXEuS7pfeSWvwU4VogZMzC6pbCNEP2D6eSeRHdLHUPPqkcGy",
  "key34": "3wBH4YoKSZowavHGUDSMeT63raU1L5AX6iGdLreFLzwrXyK75AW1ebsjNkN5K8Kux36ituJXjEeiZX7KRjKQ6LKc",
  "key35": "b9R7CCLwfBWdkWA6nL9MKDiHEVqeB4YjE9MoXuA8pBjaXaCWiHAek1DXAGGrnq8XDqSbKMd4tdVWACegkGCBqdf",
  "key36": "2jopbCPRGwV1Kjsn9UP422tjbPoyvD5J4rN2yv8MejWTmScpfzu3ZpmyFwME1xz5v4aKSvQxEsmVKiPUwYRb5TqT"
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
