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
    "5R84ERL2N56YGXx1DmvvLbDtCZRCz6zrUFhH6mKok8o5n6hbL3FiqaeJGwvoKFSXTaGLGJTErZhshQWtzP8uKcep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRbci9UWEpDsUGkX3ccY1zLZPzGv8RBZ3WBXgR9r1k7J88CX8NQcLhBRHeuWCKTPi1ouezXSPyxUE2PWAKpVpGi",
  "key1": "aSymVwGaMS6fgXMQauckyFPXoRFqdHQ7PdaD4R39FUfXG65epTT5HGyeCqcUSGdJNa1EV7bjGXswQUDNXbZ4MBK",
  "key2": "3SPFr1kAiJ3Mytn82R81nbLFeZnHX2Myn94JsFz9U4PVucsUxNbs5nhjhCpnRh6tE9NXQqeYGdivvVN3yt34j8p8",
  "key3": "4cj6gNGHsT44G3ZseytspVcRTt8QayMtfBFGwdpNaXchtBSPPCRRMNQrjpx1Y4vmkXjZbEtzYuEsXJj7L39UkBHK",
  "key4": "5zGbBtM4skyX7EntVkDvmavTq2HdF7LsAZYC5zNjapd9NM6S2otNGLHD43wWdMx7tMRgueK4ysNTYYvZjLTz8Un6",
  "key5": "4d3ukRnCyvYvkdFmDTkNH5VfgFNBuS2k72MxNFJWJocJkj4Az1rscUcgJUfPjMZyRmNMhEsqcH1HCYEkQHoCDT9i",
  "key6": "2hsFEMbfo5YuDTw1NMEH3msBpJUPkEceAcVDZ3XLiMS8LqbKTxSTuzKZwNdREPEy1CZSihwCPvyxoDuJTCnoEEa2",
  "key7": "4cuW7k6hjko1mxLyLJ4wHDKDrnBuHeeXiraGP715e8LVLiaq4mMPNcmmWDA52pe55LyFUvbNSn2LzwhL71o8jXma",
  "key8": "2cAMgqW1dNbR9oPDi3DVdEamMHyfKV8viCQjspSNSLNkwDPRjeG2o57Nu5ixL3bfQzxMB5nwK2Die8qS23Xr3ETo",
  "key9": "52pmUfBC7hzcsCJCkNcawecC8wwkYacAvYiXLa3FonPmjGmQaFAPm36KbfzCPBDRmT7efSGpsu2h8yzhx4nLv59G",
  "key10": "4mNTDge3LdQbJe6yb9d2SGrsvjwGFjGSU2byWeqtEogyr7i7xDRzfx5aMXbCiJpgRe38TkS7RKPqXeDP1A4DDT8R",
  "key11": "5MirnZw52zHbh7FobHRHRLgvcuY6LRbZYgDp66nCBioveDhjN6JRUChQ5Hq8yg6YKPLpGyg6KDfMwyXdhKuEvHf3",
  "key12": "23RFaphYmAKUgj7oxtTG1JPzXwRiiofZjQDQeHoq8mc25jUoxx8AVM931KA8ZBhPXjCVPjhycCdELEb1v1DeWjhS",
  "key13": "5YpD1cR9vX61YVtNSCt8xTnbATM4rmFgjwjUrLjkL4RoUecfnrV2AmxEKTCEKGzaa9q8GBmP2vUfzxRaW7bzKhk",
  "key14": "2fEseXdgaqM2WpsYk2rSK2PUrDffENg45yciqeHBZjvHj2r7g98qPPYNjKLPWi79YgY9k1xcPRko2pUMEkucLhnA",
  "key15": "qdDz3VcrSNQr3CTkYe9o35bS4X3NPkfkW1vcia86JtZyGUrZDWjm48Bg9AbcWQAUwkMerbVQNzcW31YxsgH1aMg",
  "key16": "4M6no34ew1unrPLqfmZ1etWJthpHCrdmW4mcsf9cKjLnasaRhgrMtC7qWk5a6Hf4bTP9xhhzTkK33hfGHFVEHUg6",
  "key17": "2nXp1hDxDeT78tfG8Si9hWUmT2JYMSzUNFPJJfCeCiGSkxpJUvH77G7Ke8Enp7eMcUsHbw6mZ2y9cMiMsquDoZ1H",
  "key18": "62f7pDesVmzEs6NSTDmakr5ikKwB6yzz2x6qh6dADR4dy9hrQSwHUUEwf2Xdb5hpegMVvijB2k6GazCSXAgbtdDU",
  "key19": "5QFYQtQFHtegehsNCM4YmRZtu4GivC9B7oQXcTYeHZyewG6j8j522uXuiU81TyrTfyMPLkQAQ5UX6XqeGh9SZuAG",
  "key20": "4N9XDNy8aXnN8JTutNAvwiz6CQTfztwHoVGvMRLafkmnX8VnnPc1zr5eeZjBgTXFuAvMvR3Lg5Li55eXpzJmtqgc",
  "key21": "3Qspe4joTFWXsz2NZLUzd2gPLwv8G5yaA1kFKhRU6Q69tCyTac5NB42G95AGrRLfDWESdobesofiKk4Q1QHF58or",
  "key22": "3Uu5HJd5VrUofNvpEdeeYoNVfC1KiH1fCRRYaYiPJHu5k65TtBRNPtNVA7GWLzNFLPuj6z51SR8BG6S9pJEBXQzm",
  "key23": "59uQVnQiuAEdSs5gnGuQcU4wGFPmBT8TycsP2upFShUUCjDVTtb33mFfzcPrDnAcvvaGfQsVfbQ2bYn7xVDQFsyb",
  "key24": "8JfZaB7x3sy3Mw9EefFxvVvaeMfj5bWmBzThorJL9t3xHMdTexBNtPBP5CuaAvBsVbGmhrhAHdNuZS6f5NA1iZE",
  "key25": "4m6JfPGZqETZ6PaTb5mABUvwJqVCYGegFvW7eZM2ycUkpQiLFEUPVLn9QFGNFKLaWcfCeDrZJDfad4f6mEu37oxb",
  "key26": "54rMoEHY5HwckoimX2CBJ1BpLPNcfomT1sdta82mkXZxxQ6NLdke5iaGNiYjzojRyz9VqCJkYS5CLb8KiuYGwDb6",
  "key27": "23SF5gsvXJgWohpK9noHhb9cRz18koo3crt9SbyC7HBeMdmTBgJ1qyFneXeTqRhJYGQzKH5a2cLJUB1DugQiWyug",
  "key28": "4jikx6QDEcf9vvxwopXV5tR6BVSkjdWouwhsVgYRUQWTKH7VLsVH71KrdZH4Xtc6kpy5feat62TqZTNNAuUq7kmc",
  "key29": "2m4iXAJEQf6JKa22suArXZUeWDTvp5mpqZRDEZuNXsMyPh6EsBA6TAJrqWiQqUZu3vJJj9TCQjFXLKW7qoW83uiW",
  "key30": "2udmmFmA6cYRvKEte45Awcp4SDhtiSdjV8LSK6zz9LcD8qX4BLVS5k33TTkDeaLQj9WkkYem3ZGrZLWgxj2HzCxT",
  "key31": "5FtWy5WTcSLLskddx9xJmYMJTuSx4pDYgrbgenzH1j28adrJtrrNd2R2bTbekSWwJx4w3CwhanoTyF5D6mCjZwKp",
  "key32": "4rk48SbDvPJA9JdAvKUZ1FY6X27CrweG28yAYMR3eUYi6PbHFNG1MATdCMVpdd7iG5SLEgGTZT7by7r1gwvTiT6J",
  "key33": "2yLFQiHeJJzU1qUrGBJbGNvuj7AXBVJHm8ihJxuaTMG6MusSWsVH1TtjVucD6QJRezchB3qDrDVunuBP7u1se8ad",
  "key34": "2rd9pfaj15K7TgBYnsqcYvnsaGHKfkriCraa2SkyMFaDRc6uK4yKpt4mBAfwAE6H8evd6qDQHUHnSsgiAFvwRWXn",
  "key35": "4va8yT4fmJtekQYNnyDMgxP5o3y5PQeLz1YvjqpdTh6irYsZRn9xLDkPpV798R99pit3XCscV3b9gPXcyQGofjYT",
  "key36": "5zLdiZoRyeeX9uhtB9j8zL7DhnQZ3tWpzZUKULDqcDUnZ8tnPYMFT9aEA83s7LL5iKRbXthJU9ahL4x9qbsY7MwB",
  "key37": "3jNthBBn9PJR4opdzKsZEr8QVyPTr4F7zLdhah9McsG3cjxjygrL4tkQrqXtk59hzqisXPWpz9yzBchmgLbLVtdx",
  "key38": "BFP9JkuBdcUVk3zMRKcJ7cPNC8URuBtR9iRwJX1h5fy2rWqVknPWJUw2bsVvMsnL8G3wdC6nohkf5eZCDkPb5v2",
  "key39": "5RSnzHttU1oPdwNRx1qUQsbRC7g1BXa9EPxsfzuNtCDHnkhLLiuXR8makCuUwTdKPRyJuCdLn6crQuQDraF6gch9"
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
