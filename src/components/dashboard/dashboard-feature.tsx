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
    "2su5Fj3vqg6hYCS2jgMPNkGdD88PHWUrbFAXNpJPdVyLcsPhXkKJNomFHuBpYv5K8o1WH6mYPFwfN33nGixwMmTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qP9ega7MmRTqpSksn5EWyFXvGL4pfjF5GMZ656AoqYQM4samRXu6NsiJCBmxGM9bQapFZG8jXoZoJNorAbre8N5",
  "key1": "2UX3gqfqcVQaVUgr7n5s9rb7Zf1CSedDjE6UEqx6Wdb44dWgx4CmZTrK8Cb9SWZvNPtiozV9E4nXKYwo1U6RXKwk",
  "key2": "5RsPYjZPUrsZNx2omy8ZR4Qw1nLphS67zjfiQqYZin7kfzoZRQ3TsdnBh2hPBFjodTZHRV8ByUMTSdwzJsVKJ1ec",
  "key3": "47dezgUuc3DgBRU2YXeeqQz259fSRtY6EHnWntqHBL8yQEgMV3P4nmimHQpPzfKnJ9KGP4WhrjXjzRNn3A6Vt1df",
  "key4": "4oXF9hACjaceKzfF2nBVGacaEdJdwv16gLrukRQ2M3fWFBwE2H4x3g7xjAJehxquVLCYE8szVjtcTD1btUYHgeF4",
  "key5": "2sJxr2fVbAcMnTEJqRtmqnfZPUy66eDNuKcWNyaqAKR58qEfd9Ye44iMZQasDiw9S7aQBRo1oDL9pWygqcXzLZpx",
  "key6": "5M3m3boGPAiaZp4qg7LhagBy6YvibpbeTHPXDC7KfGK4i3w17MczrVUJQjfcJ4vAycMMdcmtAqXrBTrvApXh4gvK",
  "key7": "3go6GnG6jPZ7AMHgzjxoG9jvdW8uwgfiecDhYEEcawxsLZmsWUtvKcMXWm8NkDtZrQv7zbv8zich8p4zrFRfkdov",
  "key8": "3a6tR7gGvUXfKVdpwGpAyyKJjRuSrYJ57KYbgyjRSCTVFmX17UHywU3XAcxRYKZXTFTELMYeUhpYcNuMV8cZrX6C",
  "key9": "jEi8ggLEHryvUUMtNW5HBbxbWRFp36VJaUR7tdTG2hZynQ7NyqWiVg5qsVWPxq47NjtDjeoDNDPiMN9kKBNArk3",
  "key10": "6Y2bg9D5xnEuB4VZSmHsxnNNUR4DMsBbpYhMg3bCtBAqeJZY5eH2iMGmA9f5kjAhbmMdLQQdzrrPXL2wLbuMQY8",
  "key11": "4b97y26KJDwxhHiXf8NCXwKmUos5K4sTJvGJAiYSt2HnJyFPAZRBCbPBhCsFimMHnar87KWz7XEHnaB4rapNUeGc",
  "key12": "3HsFPHCui6KeAHrqHiUzK1gnJxdLskrPCDD53KwtR8NhJFWeazPQd8z4JzMkY2dSeh6wWsaAEFqBDi9MEFP6Zw3P",
  "key13": "5vfuJ1i8ifFaXykwvpoLfaUDYuiZ7GAbCoZMNgeGuCUyhhbyhTs86yMjKwTBwNtBiVbWZTZhwbFKf49iswg4wdfv",
  "key14": "mCqrdte1ihvHL5c1mSSh6kArUJTQyuisrxddDeoXMWZ2fsuAayzDSEePBSVQQ2nwxroEM9jZjQ56qA6Dm6FYY9j",
  "key15": "5smUPbbj1hg9cFAbaWSRPiZdE1NaBnh5ddQRSuqLEefLysadtcG6CKuq5ctMpM9KqFZPvXjjNLs8e8J7Tmn5ua2V",
  "key16": "4gsAz2zmoKvjuf6YZfGNmxYF6dPxQe1MhYBfDYdp9f86mUHsLuviWAEJBPMx2SnwwpJE3HcpsMYUXP1mCZvAucvF",
  "key17": "2fjtgZYZWwKvQiiyHuDmoNFnXrEMJe9sddEqTBFSyhiLfUZmTBgRFaGv4zMba7JJHuE3g5XoT38RNSxaEJdMsbA5",
  "key18": "3sYUx3VmU9fiuSR7osYwj3QDD7a4VPeKt4fXJRKWzkt99u688RzTsC4ZZnAB7DnacdZUgWLHm1aiSNhrcLCrZYde",
  "key19": "Y8d3JgTgGEtRvwCmr2NVVioDp4Hvs36Kxbuj9n4kRaeubxfrxdQk5Hrkwqtet6G5vZh6GdFMmkM3cEwKw7Am9Q9",
  "key20": "4MXj8YNGvp72PKDxPTwrt7T3cTpPvp6GMsSLf1FYFCV83KfpqvmtuFjS77Lhr1ZJ97Vz7Jm2vRiV6KSk3P33sC1c",
  "key21": "4w7AWiHC4MgTXdtAEY9xfjV7i3tEQvg6F4Loz8fkY2vrqNWRwMwXFZaameC7t39oZnxbqgLUgszV6sJFEzvC9EzM",
  "key22": "3K79cNJ3wkULT2snFuNBWcR9XZiAcTGbmjcuuttCWcozGcZ2tm1nbLaVXqQF3yozMdATu9rdrdPZ3G3ua8AaNcTe",
  "key23": "5HhaaDMA6QUpepAXU1a5tUKrS2tHjRWV1nZGVvUrM4tYEmhfJMru6Ft6NvPuTvBqdeq58rw5dT3na32TRPCPCgfs",
  "key24": "378ZCGfRdPjdbuBwi5JgtpUSTRnWSwfPTM53rvUm4KN4FVARz5zcQSZjb5V2zSLCLJynHAvSVkYKcHcSrgBBzWBm",
  "key25": "5yr556nLHMye21FHWMEMyWrr9Hxggtq8wzZbT7igT8fhmZgTkf4fa7Z5KhVQEdp9PmowvAQbzZu61n6DrDEitggj",
  "key26": "59MTHrdqUrjKjSbAPvR4N2jkhAsbqoVhfXPGrEqYEgRQ1cGywhTdBwwNKt8C51cQfVD5yfjZYvYpnAXcZLonvgNG",
  "key27": "2azvY2vTAkM4Lx7SkHHxCY7UFCgGp3hjC6XcFSsw6Uq3BFowP6qmEWb5VhrJkxUk2rMe2BR73WDbory11KkiXoo7",
  "key28": "3y3As6B7rKmGFAXbjAnKcxCuMWhQNgyDmBosfVxh1CTXLmmm289482FTaRMsaSFmzCqem81NUztWg6BfnR6MAyMk",
  "key29": "2MVHNPCYx2mTAHpHpZWDXs2dmx212yemYmMKJ9jP268RWk2tHiDGfKbuCKHJteEvMTjgcj72pV5Et7NmC7RaoSpq",
  "key30": "4tWWjNcVLfr29GGCm19eVSfuqS1KSaHmjwS3EZm5DYVN6o3hPi2uP8sGaqgpxfA2mAkiAcg6PhnAGPUMpk7UDvt1",
  "key31": "xrYSYQhQFBF7C4AU8CN4hX88Zo76KHLCxffHNzVYxAjDwJPrhCCqwqbdXUQQaveDLaSmo5456cgBkyWKLtLgZFm",
  "key32": "3KNtQq8USPQCtfFYDjbP2DXbNRut7too8yJ5KZzWkpmaqiW4L1auMRdYfCzke7V58hkp9hGe4j1BdEUMJ188VYVM",
  "key33": "22RkHMLynozdmuoeRCC1m1aepjAzpcQZyHSv5ifz4uxbjXeB6BAfh2xB4vuWTNv5EfJGs7dcMPvmokDsmoA4mTem",
  "key34": "4ADDZohnnUw2XhxFMaKYjJytXeHDQoBtdPkkgRjDEiBmfDLUHXiqeSBQCuzMy6zrePDdj21e6kGdDNvT3J4fmpVK",
  "key35": "gkpPRZESgnEvHHxvsd49J3R5WJLC2KMVRBwrVnZoe4nFCYpc9uywxa3WPMxwCdqYwVEKbUMAkcYsRSiYRgadrqP",
  "key36": "4SJ3N1n27DcUYJcR4YM4ohGxhfu2M57qemY9tdbGQtaYs85zmVnxY7MgBEVrR5UtzaCJPmwW5gmgUnjBEqWjdv1J",
  "key37": "3T3y5jCLVJdmCL4gvqK9CtewNoznw54JteVjNSMYwvfk6U2ZiFhouDDDi7vQZPoV8J2a2eNM7TR8o3DVXUDJksec",
  "key38": "2ghhBsCeXYKSf1LZDgRxseKESbVZsR83QXR4uwJtt546JkDzs9aZTtZjtkPtj3iktt5JCjX6PRaAUTrXH8C5rCSD",
  "key39": "4JmCc1jQwZ7vkt1zRcomaiTREuxvBaogMKZDPXipWjJVwjTpDdA68szy41Rwg3QP9HRrNWVneSKVZwDrfhKuVJzg",
  "key40": "5GAYNLNK1wMenDqTckWm9CRLRrsbY1f6NVAcni5qBmFDQ5NuzwfX1J2Fhn6LUywzbbAJcPBogwkB2TGwNt9CzMD8",
  "key41": "55nNiibpH2QhTWwVMXRfaKmLnBfXkx7scxN8FDWvwmAik4Yh8wRFWfzNMnyWRrAuUAbPcKELHxn9JWaKbHU94UgR",
  "key42": "4t9aYHHoLAhoYXHxVGMRt5wQggNBFvArzZxBABHhyZskmpGYG1zCYV9Xvtnqa3SGFZVHyjb5eduE1XwToniq7i5R",
  "key43": "3kYryKHGsphcsy9BcCyWYTaiTxaAzqyH3vafDM594BamTmRSJPXz5czspKKV8vLs4XyNnQkmsBZBAQZ4v4CP4uPN",
  "key44": "5vSBZ2YZ6mhEcfQXCnZWfzG84tNrAr6BNiYAD2CvTbQyak2DigifqEZxmfx9fwzXnTyJXQpyqtC6dbnsDAg62uGa",
  "key45": "3GtK7TP6DkRvxcQV9B2Hb5SR9wzyfphz3s6NE6iHwUpDsmt8PnQ38f4UVXmtDj4p8xKLwS1x8xuSX3TMAp1DmvXM",
  "key46": "5N6WsJZwLmYQrTDLGFSJnnYRvzxZJqN5eEeFtUuvEYreV8ddkQcF1M49N3uubVgcKJvm1xAdppaFoLtLP8tEP6uc"
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
