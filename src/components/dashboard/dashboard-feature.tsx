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
    "21ZGN9VzZgYDMT5QuyRZEpzCam3KmJSEq46CgJoZLiNRj4yfEHtsFBm25rAknsE92LFXxGiNFjQFsZSEmxdZpvDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JvZKYjbS13ko5StLd9LHEtZC6j6RFY2BaFof8nFwM8Ap4dwNwenpeRYXHb3CguMU6uQ3aVhesGrtmstA5YBbbsf",
  "key1": "3EmB4EDXtLPKr4T9hMP2fQ35sbVVoFW5CaqrjkC8JRyrprpMaCxzbgj33r2qZkVB6PZCZMtFGu3JXGUQXKysWzLT",
  "key2": "4fE4NKS1cQhbV6fLhvGZeYfDKo2GGQjEZXeeYdbun9HsLubG1cKST93CRLdD9cM9UJ76RBi1uueqRHyu3LUz3Djo",
  "key3": "4bm8XpftzyNvK6eMMwPEG2AtpNBhbMz2mTPCLLGS4Vdhu1Y2U8f5TMFXxtDnaHHHd5NFtYtyjRdjCYVF5KAnsfTh",
  "key4": "324QCPk4d1g1jjAGvZM5VGWL9KmCbyfuLg9t3FEyQraCFHNvtkmezttJ6eShQBUfESYHrDsA1qMo2VuQCGtRe8NL",
  "key5": "5jP6XbsJQN8HwgeuMWz9ayyiLu31zUMTb4bNXuCrxc98qwEbQmCaY1wMfFBTmsRWqBK5u9fERpCVumVsijxw4B1y",
  "key6": "2a7BDTEg2TAt91V11Jm7C27j4H1u2AJYV4AV1QVWLvggcoFrVXSF8KMATD7bvZ4PPYjWHXSHya8v7XzMxcsjbxgr",
  "key7": "5tquyrwiFszx1vZWT4ka1RptoRGBxo9FcGAitcGQXtxeCAzs4pCEPWDSorwEaqGreVu8S5bAx99P6TGfMcnf2Hpc",
  "key8": "66NuqFTPJLA8p41BFxjdxZoaGWE4coSsXFXQVGGkyUoZbAn1wYt7yjQZ1rSLf9QteUcfhCzmxJ86d7aXD3CPrczF",
  "key9": "wzr7ZGiq68T2mrPZfgU7gW8sz6rr14vwkp4rN95CQGueksJY8pDiby2LJ8ZpBXfmbjeScVUgEsLh7Rv2F2r7udv",
  "key10": "2kb4C1t6bs6WYh47u3oXHzfQFEP2wF9tdkJUCwkaAasuaB7acH1Cx8TAHDWJVuScTMdpiPqzo7d2mPrJ5exGvMME",
  "key11": "xR6immgZPy855CSGjivcZqj2FKDTrSZSurARByzmVXPSF5A6mYBnWQaV1wRKtuwy4XJCdUN1E52ukZtNH12rXg8",
  "key12": "5VvjHfFTj9u3k75SKJTzYArrQUYGW5ZCMkz3H1gMBLqqjLvAH385NWcsREvJkb5quZiC82Y9WBd4TMjqztD3EsNq",
  "key13": "33iRsrJQmDEfvbr5WL2iPp32V2pRCjkjN42XwUHJR1qaJF8LQF4qoXqMGWkPnBL22yoE2SCn5huj2PVMdCLaWWWk",
  "key14": "Pcn8gDcEvqennRFUAx3UbPZDKUR9UchxrZPqNAnqu1n8WrLmbGWuEk1fof29hZdJ8Nohy4RyZQZVeVqmPLnqzHA",
  "key15": "3uhTBHYK2odncXg8PHqgR6Ef8uCzVAQRnVeTAeAhirZSRzB9Qjx8LdLFPXe3oSXwNnNGVizpxCJ1kBFjJy7Cdd7K",
  "key16": "65uCjNE32NgZFin1Zuk5XJfbxTeTi1yZZYgGYwZDrk46LNwXYE9mo27pG6XK4quR3EsvZBMncyBpB2RFLvGrQFKS",
  "key17": "NEDxN3UGTjTrHnyk2UFRX1NQYmvcu6yR5BJpAAv7snywgNdZwok93zbGNUJj2w2jebPLU3NaaKjsedNFqdJSnow",
  "key18": "3UkNagvLyTBwnC12Vr1MHBApZ4a5e9dPBMpPVyU4HzCdKNkBnWKSxTdtVx3P1prEYceVZq816bfG9AGLXuq4z2E2",
  "key19": "5GRS862kTBAqSujJKBvD6Kipm7bjxM5F6oQQM3JmTqvW3zzvPiR1M6sXz36HubHj9xayGNkCsdbgLV9ySgi32Amz",
  "key20": "2oUUkrXYMgJXH6BGjQKBijrwMH1A5p9E6fE3DsjUXHMm1w6xx8UqppdJm9wXd9WxWL9byW2SFUHEn6rudsmjoaHg",
  "key21": "587fQgWTFiarGzeKeM4naKqtxfGeMoy5fQzAQGQbVB5opa9ze8XnFfuhaxE6FMxDThCjsNPf4Gcbt6y4FHekWLmc",
  "key22": "2nXvNnf4JsnMGw9mvZgP5rDNComxHbTwjwzmZ4uJH3RHGSdbDMXuyrVGZd6nNzdu9FAZFUboiLi8Hw7B7N2GTo5H",
  "key23": "UuzbHVgUBEMbxNuc916aotvvdRDkLXLGMkf3hXTqUY9tYbYFPaBE9g8niR961oCtEyjpic5gRBoGY8ZL1kJKpxQ",
  "key24": "3i1sp1G529FVG85ur9H48nWMyfQqs9D6nZXc1UHZCavNY4G8YEEUzhKrzNoRU6mALKK49pSVPXzJqQJe1pcNFVwQ",
  "key25": "6s9j6W5EpJGDUnixn26tfuxy1j2Dwx95VEps77ZZLjt6AnJKZHe59ZmR6AcrcG6QjqafBv7C8f57jfuUjDGXjY2",
  "key26": "37bFqTAwNHrKR5AAXC3AvZryHkcrXaD8WyS88jT9D5FdksdP616HdNbpNviiENiYUrgrgEkAQ15SYHMFJCPooKKe",
  "key27": "2memMwfEMGvJgqkyC9FCAtezMzWNfjpDJMdq9URvYG7mGVQAJc77MEfBfgQuMg9ba6ga69gkn5ncEcUjVKwwGQ7s",
  "key28": "RWuEBnjzLzTSkkmMQEaB3b5wZDY7jmyFs4B2vdY81TToQDLTyEJk7JkKRUPr23Eo4AHNtA5ycQdGbkeLoSE6M7X",
  "key29": "5xdXQdsW9sjGCbo8MAyvzX8xLesXQw7NCQoR5P4bCpVUvMczcgq3gkm8bP6LhjjZ6veFKDMvuJfqMzqe7qvYQMFd",
  "key30": "56WvtfPXxBymnRZGVeVe7XFCEr283UC2PcXmKwCyCCEigRDF8EEMCZmYUFotYTS1avddVk5RHxqrFPJStZWxnBwg",
  "key31": "5tt8yvayVFp7tfYmNY8hSmV7hfScigw8EyDWTDS7gEQssQA1PsS4Ws9ffPUmdCJb226YdGQLKg8xPkJbrvF8YuGk",
  "key32": "5MR7Xfrc3ajYFvAyR2cjs37T1enwMzMy2pAHAQAd6W2H6vjcDrCEc92gxhXE9RzKKwKFNf9H6XFbBx1CwcmhQUm7",
  "key33": "5vT8eibGmLbCz1UwaJGZFMuAJSPCW92NiCUhCDxVbSXa6rmtn4Zncmr2EzhQseKuGsMEjhrLX5MA7DZvXkE87kTQ",
  "key34": "u8aqxcE5Kg79yfkwwZn3cXWwwkHv7XWVRVX7B76hWbVHidFZhvKkVx6RyjNDFh2M7tD7UzUX8m5JFUv28oKAxe2",
  "key35": "3DXNLj1DZBsa5sgdeTQxpj3G2vhzhSKxAki5VZVQakKWuCKfVqhudLw7RQJiJvJVgGGAVWdLn48bmV8SGHWD6ASz",
  "key36": "44r75y6PivXSLYMZHW1rhdSeJkLpX8KWMysVFSixwXGyYJMqJLS6Ar9Vgb7diZPNdjf45YxCVt53zmaP5VYJkHmC",
  "key37": "ptpsxQ1GDHjZEvD4ZDzaBA98LFt9kdGJ1nuqPQGxNvEj1i3Lwe2S6RoXs8S3hmVhdCU8t2Bwd2zx6zjWhQXCooR",
  "key38": "4RjXzEfgGrywoD9PK8JARYBqS9QL6hbSXAuRT6obkrJg5cZMDzc8d1zFkSu1c2X9zLFrKiedsSeibQvC1xYGRAv4"
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
