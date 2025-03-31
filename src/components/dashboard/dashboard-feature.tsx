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
    "57qQDChqNa12Kute2J4uKowFMxHnXy6bQWt8JecFCDLwQnkeGFEoRpwCUnmJ3SXJc7TXS1C9Reuqpyt7gvp2QQbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBc9tCnyHQRVy7RV5TB4RqNV6FTGdntu4FE3KY9FP5wYoDcJHkZPRmaHYWMMFi4f8bHEU9qnKpw7e6qm6auptZF",
  "key1": "4E6qDiAATKcNc1WKa3G882bK1A4a4nR7T5jggWSD39967ApyAeybSjrdr7CyEWXmJF1v2XBN162hvd34PLGRmTyP",
  "key2": "51xHZt6vaTYQE3p41NnT7k5S6DvhFprd4rnsEcYG1JPTCWAWT5XkPsdPFSz75mW6XG5F2nEEiTZe2J3FRXghnPrG",
  "key3": "4PzNGBRGHNrXx1gLQHYKDDxC9LEMendAG9xBqWR6vAt89hTswYS4m3jkFP4zAvysgNnxHsCiij61wM2CMmWcEFNm",
  "key4": "4JPL6eKZH8yYpP7kUr6HTA6RKT2tZLHKQr8EtXytPxPqDfCuicfsGTFBWgpGjUjyEQh98KYxE6PoGhsNEWBUPyAh",
  "key5": "5JyiQod7rqXvZbjn7V3dj4X35y2eBwzNh2Joz2xu4wKaMkc9pG82rTShFvZRo5fhBq7fAb4zj56aVAoEfTro6LJu",
  "key6": "JuFxiGtKQYwVhr6ZPBvBpUMd9RM4csuo8NneQhq64dhezzUNUFtTTaYjmcGTCw3tvuHZofDHJ4m5NmDFs53emVL",
  "key7": "2ZsGut4kFUaHFi5S8dJe1F9hizZN2m9jTN9jme2JAGcQJEpUF4rinVSXftXbkqCgRyT3NjepfW7vyCg41EnPwXb5",
  "key8": "5xMWC94PsX4Duujt5gGktnUEpf7fJVvMCTE59YcdYY4XpxyjqJrrHa7BKKpokYCZyWUEdVAAm2iGNZ9RkpoDnvnK",
  "key9": "5NVZNHdQ2Jo9hkmtAB1Rx4i8jiyPnxcVjoEMPY6cnuApF3kGaAr3UBvMvGoxfpfbhMPqxh4Cazx8HnNJkK4JnB7T",
  "key10": "nBamWNJoDPdfzrVrD7gBromshNQx2mVLq7ZEGmuwifNqBzf3EinCaLFMCFRP4PsPHWFyKtkUutw5uW3B7fStGK3",
  "key11": "5MaJGUVbSb4B5g1kQbZeAu7QJBBA7mnZ5ByraZG4q2VwmT81Dyyk1BK4YMRXKbhHsM7r33G8kkcB2AgWBmM7EpEe",
  "key12": "2Qi7aVSDd7sAkbrTsPm3bsJtGeLM7y86ZQQ6CbCyjmX38GA4vAXVaGzp3c1rS2EUKNg25pE7WhaXDJN9zKsgEjgc",
  "key13": "5t56s578vn94HkJBKZ3ZaNPkkYi7oS6LEt4CqLwVpoPHm3XocoQCJr27dyvrjbFicoJ44y5EYChuZA8wueFCJQLm",
  "key14": "4yDqZNhhcuKTvtbtzkrPQqkFJSwuLpQFDj7872vJXBJ7mjqQNq8iDjb9XLtZrKGfDp9NSmWLbZ7B5ZqT7BUpDxMy",
  "key15": "4R6WGPrGEXRbspCsXcrmUjRAWPizGgLBCCe799hbMbd938z1QyE5S2nw4zWxtEBmEsqGncsBSdPCAK6DY9pDmEAw",
  "key16": "4MuKEvDA8uniKe6giQbx6V1qv7dDmdXQdRQVdfyy8KqHedc5VH87zXZ6ckWexpepDCiygaMYT2PZbUzwUhW6wAKZ",
  "key17": "3dN7yqpDtd5aihdwLdawxG7zX6dshxbmx1kiEXjXsC8mRiqP15gX6WqSVBpCc9zLzxpee82MoVSCn9KtasyTyMjp",
  "key18": "3iXP2MbfaApXrs6DfWtAxeoSQyR3uNsegrzAywFgo6sCwmDKNb52F9f2VWPuvswQaAh518xdQELQcAXfk2XLy7qL",
  "key19": "L92QtBh3RPsvfkB3zmfNxhXfR22FYiSVZk19VS2AEAUjgqUjbRJC5sBHZAGnhBQ64zhm7oq7HprgG4Rzx5ycAJk",
  "key20": "4zzWJq5dgH6qcLFtPaW6YDKGKqLszwwtrt2MNWTmx8cA3x7AEMM2k3pcZixzoW3qoJYUe97CpyaEtgN9ae88PxEs",
  "key21": "3ikAHwFXzbDRzBqA6fEXB3ocaja9B2HfEAnuaM66YjiuXUVwkjww2y7Kvu8VS7dRvsUnDEAKdDz8p2m35W6ALySv",
  "key22": "2pDoeEPZe6cyD4er2pdPbmp893mqFFStCipntjTF2GxxERq9FojmF192SuvmDyh6Q3B5nqZfzsZG57gSmyb48TAw",
  "key23": "5Z55kfFD1ZXunMbmpNWvG1xyY9VNgigTVoGakSz5oLUaTSdUpNREQzBFsXr8K1ziGWiLT8EFAoB5y1UNsbASshSW",
  "key24": "2PF6Wn38vfU3K9HbeJiKAwKEcKh54YFjGXqDSqkTNpoALrMEhQdjZRUmYnf3CSP2BBmy4n6Cp6G9WXqqnHqXpzLL",
  "key25": "2kWrNqLzsrpt7SRy6jGQnK6w6owg9jQbHKtzCfwHmqiR2xPc55r1MZ8tPxvo8etfyk1Rfsc6YYHxtSUF8fq41ePJ",
  "key26": "5f4LZSYB8Jh7yxehj9KxfMMJJEsqQvHW9N1d7HAQzBX1V9E2DhW1ArjqVRBiUm41LYaUg9p2zgA1EfsZn5RtGudE",
  "key27": "52GNKvuQAHtSWNQmCnCo5MGCWAvEzC6yXwWNsbvWCvGvc7ZxUMbqe7AjnLdcAdqqThN8xtX6UzpS3r45LwJcV6Ty",
  "key28": "2zdhzkeU1XF4N5ShZ32WVnyUtc83jAdpTksiUYYETxZCE5zWPsHDT6xxtTQXpfN4UktY9MFJP9scNq4cGpqLgNw7",
  "key29": "2Gb4XPP7XPefU3nHVg3FEG2AEo6c88F3PhFfnbks1zQ5zbATsjoSutfGkFUPMwsFGzTiSZssvCS753DsNALdvymS",
  "key30": "2qTwEmoJSb7zVjXK1qa66UZ4bMXyBJUY1BYJTgXMhoM7KN6FgMMfofVntyPygbY4GT43JCZvE8Hxs1jogbobVFP3",
  "key31": "3eLN9ciNBc8rLJUdJNyD2bsnE9JYDmxZFCZ8PDkTS2nfLkjndMRnFi9K3Eh23FsbanHpfY7gedpGi7jPmr3t7UtK",
  "key32": "s4M5th1twjXzN5GjnrmoPrQFgRSuenPqSBzy44vEE7qgvDaL8KaT67wAv6Eb3vxDfQLJFzmos8UNr4B9FwUJ5sN",
  "key33": "2byZPf8LwfKXvAMccA3WKVxiZRvQfBigKzNp1TguNzgbomK3RH6XHF3FW17nP8t2wF67ueDkkD2UHj4SMNB7UNVh",
  "key34": "3cizapJnpTaTnixPRqcWvg86ASooxhES9Z7rpJisdrQZEHFJSjcuKrpG66MxyeUZ6QWKCxE1FBigW8C7xz7FFcBh",
  "key35": "34KgoeTcNuJEttbgwXn1Pg8Qbq2wWs7aoVmGVCSAvPg4y3ZU3E3hCbWqQa3gnTiy5QFsKKbCkyZiyx1JnhqxGZXG",
  "key36": "pwxvKkHRySvvU3d5fovy89Lktcg1tDDjX2SrSrZMuQLvGky1DmKGisBJFpbFzKtdbk6Qy8VLM6gGrox5qj8oQy7",
  "key37": "45QFnrbpNbtmhF8DRvMt7QMg1ZDMrWSsmBNNkMHEDmJEpJiAcwQe29wMBbdvVxEcXFUjnJA1ejqv96kBfzQHqqLa",
  "key38": "61u2GXmGWurWgKJ9HeZquzLTB2SW6An6Fcwb11BNV3aHjmUXnkNMXkcnm8TvcoYj5RjDrvv4dCn7gp1BMDjz2fwZ",
  "key39": "4E9wXYUtWXp41Bjk5b3zZz7LQGAig9tFrDNfydNxjqrcjvJHYVLPeL6jjh7cYzTJRTbLEqDjN2crhdFXb4jB3Mag",
  "key40": "4wJ3xeVTP6x2vkX4V6LB5fTnLgwGS4t3B3gLUD8jewCgzcdKR8vG6yZN9WJFqQkvkucj3akupsP3bBAs7s8yWf28",
  "key41": "3ccb8cgzYBPBFXuB58a6e8LDs3ejcDTaEa4Vk2u7ZcQ1HqwiAMgbC377CgpnJKfiHZb7pjVrqEuY9Y6eNQ9QXtjb",
  "key42": "2EVTkHH8sUwseKhTXQGVj9FRXt3YchRfap5WJEnaRxHbby3nc9riFFYdtzJe8YH5x6AecnH7Ua7rPhYvcPLgpwpv",
  "key43": "2vrgxuqR2wmAb3pXJh83VdnEyCKt3VvTjMvmADbkyTNBtrjthptxdms7LySUYzEGyRshmf3r32Z4wt8xNB3GWpR8",
  "key44": "4LR8UayFAG3bAmCtak4qj1LPUo9pFRKuhm47G6DAqUC6CdNu1sZqReJmxEaXLJqBepPdcWC7xtovFLRV8Qso1Y1A",
  "key45": "2G7Bd4eBT7TRpstNpR9JDfiz1qDFdbuiYRb7bvPuLQDxZduwRFXrG7rBNfZCDpcz9jpfCba4bi1ajYKJt83sqbT9",
  "key46": "3tDBxNoh7tFVJ9q1bfrhEpKdzVdwjuberhdb21QcmCFwochvgV14W6QbM9etekHoybKhf3GSd1A3pPmFhr8dK2bH"
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
