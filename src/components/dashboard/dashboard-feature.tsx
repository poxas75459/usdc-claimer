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
    "4f5JeqYv5K8bwDHFsFMwS9diuGKuRd6W1qvdVfFLRFnQs8pVQWUS4hNPWywPrGV3HiNRMhFEuoPVGhJKHhrM2Nno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qRZ3kiof7CcYxP67CbaYprafSWb1cniRQXQy5mbu9SDK7wpVSSVdk27pwcubuhe4yurGg1nWEoyx8vjJTq69qCu",
  "key1": "2WzrYqqGSdqwdX8hFKA8dBr6Eu5Va8hFZx6A36DWkgoHwVsY2k5oTUt5VvyutaGMNE2wxZeXTWZkjuUt5X428t5R",
  "key2": "3RPqwtF8194NU5KECYZuAAEtosWcUnPFifK1QUEnSJweWYPhrw4mYmrAu4hdiEmDBm8wQqfdqpXqegJEGa9ZAYGH",
  "key3": "5b85fyitwiq9sGyqBKEuZBmUfrS1PQQq22iaY9tKLKsRUQ2VJQ8Hox7bDgnRQNKFnASQDVw5cjqQ7T2r3FibYqGi",
  "key4": "5g3eYuMqBBDcbCQqCRnJGqQMqsRA1fUT4FK9EsJL1R1oPJRr4ehXbTxYvPqqtkGTW3zTy5TB71PaTKkhj9ct16c6",
  "key5": "3EhuUHoEu18fkY83iKuKd52TTmKmpQgg3bgGBqLuaYmYQUZuYRTfuQ2bzQexwCKqtxwWpVjc5QGwYcec6AoRQDgX",
  "key6": "5b6v2XeWhLnQhe9gunthpNBykXFZkgdsnQDLH2MMmmQsQ3rMvUqfZHmp9P1FoyrcJADLhqhUAN4KjwMWGE6F1118",
  "key7": "9D3PtTSjEJU7XqVFX3eCzkcNyChiT1bmdheAUppMBQXuW83tBiWHAw26b7hxiihSvgdTGtkz8L4dWMW5x2mWDUv",
  "key8": "2uQ8NVD9gkgdSYR5H4UhMdwxactnPm8Tzhk5oDELS9dRRSLpgLBgU9E3WAmfMMgjrfVLZBhZ3TxFtf3nL1T8W1dy",
  "key9": "2CwN4T9buCmN5RkhZq5dNXsw4aBESFBwWGGFnZKKbxbhsLgeshtqzXKX7m67Eypo6QVwceXQkRrHRkPPHHW4x52n",
  "key10": "5WeexZvaLBeLVCWQZvH6oRtdYE2sAc1q3TMT5anEeHKAmAQYbBkdZyKZhGutx4YsNSCEJAmfD5BrUJ6fFyoBcL13",
  "key11": "4tegDC9gJuLNQ6EkfPevViRVPm3eFvbn7yfDs4JFwiHXSUWLAqkLzdwuUoJKxyjqok4eFbxojMt5K4FG8aba383N",
  "key12": "5bcdoABc6dGKb25mUnX9G9d2zoF88dbAU69tr6J4yX7bT4z7uaYuuMX1EeDJgME7BTs6eM46hjswbbYCN4JboT8f",
  "key13": "2hcWhSypFKm2MhgypngNrEhArCT3YAAk8Cj9uN7K1Gj3tbCVpnYyiVhPgVWeaksZ62ZdqKgmtAot7v78MsZ1R67g",
  "key14": "5M9WVFEf26RQinibBfPs9PGoYVeMRgSSRbobvNcES2d31ZZfq8AtuHhZjdkZ3ZiMCCaybbnFxzzYeJaTUjzfPXxv",
  "key15": "4LNehsSvmDBXFJMiuCLERB83tRg5Bgbn4ChXyAVn1r7tS8Gon8NxUEhhXH5WbcVUhUaWgCAZ5qf3jx7zLeFz5geg",
  "key16": "3PMtQM8Um1x9uTVJn3V273CKUuoTbiVzb5EPeu3Vmy2waYRUbE34UqanB9sL9sGvFEof5HXArUPA95T5kwKuYTMx",
  "key17": "3GpuPRERaJv1d3RQfF8uv5onHNV6ezTyNKnHQ3qUJnChr13mA1ezQVRaapEVHGbfGMRhb5AaRtdu39Fw1yt9xqQv",
  "key18": "3Vp39yHPH5mphGmj6i2Qzefdy7VvCtfbSCcK7iihJFoPctp5EPQ5ASiFzfNHnx37KJPuJJ3RR1q6qEBsdvwnmbN7",
  "key19": "3NT6numK5Ba1ZjzNAFchKZoi73ETrhgF8uapcTd3VrmkjtP79khKbXtxYVkWocopzxau59q3bndKYqo16UxFJMFs",
  "key20": "5whL5CYczsogYFr6yqCPfy91azhqZiJZAEw6wG1CqPWKgUJxF7mkuLAtkePebC6eaUDSZzaJDkGLjD2ymhG8Cn8j",
  "key21": "4MJihZy61JkV21U6dMyk3MvzbrXtHctfBjBuRQV3ExrK2Nv1BNGQ7WMs26U9WjYGYv5WGex3xGk7pwXzrq4Mcrm8",
  "key22": "2ZYgc4YsfXZyzzPrsfwhbpRjEGWo51gUdtXF5mPJvyc4HoJJVMqgXmieg8D2YMaWTm6rLqwW4jVASG6izoufkAnL",
  "key23": "2RvEyCp4xTKeLipVPG2ccS8JWrxkLF1TzBogPZoADJVvbQ7gdrSv5wXErTAhNnJ3QxXCeQCpF6wNSunDHyz3JDQv",
  "key24": "5dmuQ5nTtvu645UM7fDyhizN8dofHjBWeXc89H9wDotgtzchAoz9JJs46x2przjQc64cXjocKoxH4KVKwVUnb5Hy",
  "key25": "hfV4KJZ3nuqQPMk8gqwk8Endjh5TdD2eWBM5UWCmAt1sRY8kUvrq5TBr4KyBmgoGsdBrVoBoEFtTECCcnEWwwfd",
  "key26": "6KpsMoYrURzGfosHrfGyGJxSTEGpYa3Q5XqYF9kyZKjFQm4dKUZm2DnT5kAzESvKEGwGgoeCUWd2syCEptJrtNe",
  "key27": "4hRiaAg8CAcNUZ6VN4zqXmHoC4at1VXTD63rLgGjCubjyHtiiMTiDamrcwqC73j9tSQnxqyZ4UKFMg3d7B1yocgS",
  "key28": "2dyWN6s5v3ke3QaybVeHzWgRNh5Z8qpsQqjRvGZkkSFQ5VdoD7xBMnsuhNUF7sV3ihRwcqdq2oXX2gx3mj5db1q",
  "key29": "2Cug34G2mjqU1jF1coDS58ygj3Eb6uQRS6phk6ZW6nAhrdC7ym6WXt1JtH7z5cpTGb64SpgRpKYb8XCM3mP3JXRT",
  "key30": "431D5cMTqLHjANZVadVaDQKAEH5hri11b9HWpjTjA5aW7tr6cicF9YJ6CsTzhhDMhUHX1Pn7ggiSPeDzfGiJoDAg",
  "key31": "2xa93pnGBvzdwLfUUa5g5YD3LXQTzUDk4bd2SLutNTpG7fa4iVg8ZBWpoPbPkQ4HtUtQHHYxgrUumh7dLj1si5cZ",
  "key32": "27Ski9C1Tg3Se2WgDtW1Kv3JhcaokRSmfQvZkzCXL7dQPgtECDBtLaf6V4XH9iXjdwi18K56L2vvPxDnzWoSKftb",
  "key33": "LHnSse2xrfnA2dVqyDKWui6d6ZbVcxKPm9XTWG2te3SmoE1SKwMkPnEHFtYJeJJMNUVyW8DNzsRtmtPqVJax55B",
  "key34": "5RyrpjVprTowHHAHQXwcCFJUHZ9q6MzyFTkfHeMPwc394DJXrNV1jVuKfHcaZUWtXk6dhEzvEo1X4JE835Pt1KNH",
  "key35": "sLZPpw2ZcpcydSdGcM9dV2LbMNjCy9GYUyMCSrJRxLimtSo4zXojzgvwXsjE6MaN1JQj1jHNJCWwCW7heAL9Ly5",
  "key36": "311vW3Wutp2cmB6w9LAzUoMgP9CcmytG4FDMrDf5ed8gRYiRhZ3YknhaNTUbFU4ttPqiBuVWdNULKoici8Q8AWan",
  "key37": "q7txP9Fe73NzBqSEYNPSFKNFtWfzYJ7ZauqKykda9PXEi1sX2KEQyzArpbuKZaEcGeHi1mFPSwE7Ybq7BRhgjjy",
  "key38": "5PA3yagLSvnmxCc7qtbhTJQQzxefwxrWPo6a9Fjv94KMpNR5MMrLF3w7EXjAXeLwpZqKX3DUbi9C77Gz6cWTPNC4",
  "key39": "4sfya8EjEECkaVFPSqgqHgrLpdvbC9RtdUkHdUn66qqPTf1KkcWEfdeXWL3cGAVUoUvSNi3GBo66RTptyU3v2FBt",
  "key40": "38C56z4qYHsp9AGdMGKwVwc1539yYNi7iubH3mkHNFUAWWGCCgZ66BhziogKTNSpGjCvj91qa5vUnixWDgTiVeZ5",
  "key41": "2c8K2H2mNniCGyeA2TZAaWGFxXX36GRTV7n7mvif5hiFHtd15HgBoxaaa8NrE3GLd63BiDLFgv8rRatXRJ2mNqKg",
  "key42": "3Lnehs2DHpfPcyBzHaNmVsQmvk5Yhpasq8zqSEGAxMHd1bgZ8TEvRWz3Q7aUhnDjSyAecuxPuZsAsjtBRXwsRKjC",
  "key43": "517ih6v6DBstY6axNDBk7Nr84LxLvwZjGxPFAeLunfiN18ufmgucwSp8BSENY5kxvbvXTyzcz8SmywndGrQsGUSu"
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
