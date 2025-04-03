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
    "pZosGqZsqJcaNUUsst38dhjpaNFzpeCsbLdGnY2j1R9Lda53WnMoV96mKbmimXpXBrYi6B6KUr2FuQovXfcgCSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFYZFB6cdfHNKwtg4v8HziaEGwfCPN4DczVvcka396VUhU13iUT45fdFEymKETgE2TU8q7ZdzVgRLN4qgu1AyLi",
  "key1": "4Br1DQrKX96D2cSbBYH6wHWVQPTDKMam39peDWyfyJjhvjtDBHRg6eYX2PE2k3odYGyoyRSypMiU8HuFzMLbNrNY",
  "key2": "3TmqpohH66yVJAoTHaSzrfkGXq9fHcKC5MpLRUhoPsXkpGgUN4cGNs6q7XK5G7xALUPkM9FGmcmgWgGAik6Jn5Xf",
  "key3": "5AKD2SyLzoPq2UHUMssbdyQiXwBdN5y1XjvPxjhnJf1RVDf6yhCEoHgDcyA28RLpjZYKjNz9SrtUzAec2RTiKkeC",
  "key4": "467TVPUrxQVqy99oKbmSdgG2G42pc12rNDmJYmq8Ew6M2gizpdoaPmrH8xmvPQUNnoPpVfVVBqxisNKkGj3NP5WY",
  "key5": "EiptF5bR4sHpBBqvgEdumez3uGZ3VpqvD14fE2GyPLyatiTXA6YQeGAxhPz9MFqrbvFKj5YFe9rQY1AC2ZXqGaQ",
  "key6": "5xf81k2cvE6aRYSjxE1Rs8ToLWY5zX1XH3WTdKgG6zQuByrgWfWpN8dNBnHdrxofFS6E77w6xUVefRXRbbBMxu9J",
  "key7": "UQzKoRwVWkYfWMebJmVaFyf5zNNFq3C8ApTqNiS9ST8TF6z9KzDWQ6jh4cFERegW6ioMoB26TkmB9WGBuEQVsdy",
  "key8": "2CKsmuJy35pjRLfXbNKG6CRLtvpYToXa3SPf4WmrsbregCK7couvPKVuUqBHg1qHVc5LRebtXreJV1xawxd7Sjaw",
  "key9": "7BUkanQyJbHnM31ATsEHMA5nSC97DbeVBiDpaTKQdgZswokZdXX6HpQfEoVURmkD2kf1kxXoPX8JcTeUyFQQdbC",
  "key10": "3kuwsqzk1VLEypGCsr8YJHugWwcvsQchVRDGgNMwYWhc48UVhVPQ4VhWvP6CUggGgPhisMVTuB169Fr6Y2jtYEv3",
  "key11": "3zDWBGbaPej8jWN3dqFbHXdQkfuNwVt2mYfD6jpcLx1zEoKTiDrmQHwJbK7d9dXCXKSeCB588vBH8RyhmSudWK5y",
  "key12": "2WMVFPA1JGHbRVQrpGc7ZVUEhXKnzpcfgJTRp1yE2rLfFitqRPjWfFNMasPWdDw8gmyjCeuTGDwCufMocjDoJPa8",
  "key13": "4wxVZHgP6NA9MwFtu4rGQAN9afAzKzvKZSpNguTEeCShQwSAGjy5S1uCdFCU9RVM5TGYRqn2W3Pc38uBXMWFueoU",
  "key14": "4zSqrkiwudJjbYt6gWbxSKaDHewqtRv261x7ECXC9dWfDpE1N5igSS3ZGdUCnJCeoduUNYBK9GgSM1evz2ZUpmGd",
  "key15": "awbwZZgQnvD3gzzUERFzepdF9SXZFPFbG7JTpvdsybcaT6gruvAzVbB1Y8knAAc6ZBczLDgRNnKtacAsZ9QXmiF",
  "key16": "4cDe7gtUxgeX6Gw66ENr3WGELwkuwosEmk2BqTmq7fGTf3YqfC4TKAYRGStg9ZGS8pyJLK6wMT7ea8iCuqSDcuXt",
  "key17": "3CyUZQy9yiNhPtxJZzPd7NkCcmqZBCaxfhQHHhuNjkokhxWVSCFXSRzwQhHR8rwj2HtZAxg1PT4PojPkECmYEQP3",
  "key18": "5ct7Br2ScRM1Rpkswo5Q8V7HFoBVkLa1CmEZKR4weYREBSVLybAEr3pedLdJzhuwMdAqKvUV7JnJfZw8WgXRygj",
  "key19": "f4uUuPWjsQ1c5uKt8PayhNYQFUmtNz4JthoxPEQk45bh4KToB3ZKuHkWcYosiXn3ZEZrXMkXo7YJNeApN44hjrk",
  "key20": "38hvJWSYLSPsb2yyoHNqRD8NEEZjrB12EbPyQv1w5LPXxCeeTsjw1JomjHXT2UuCFfjSRUkHaY6RJZxw2CihLCeg",
  "key21": "5Fw9YD7anVnqZzEtqzrdsDcruEpXzny3EmV2xTQQNA6K9toDqk9wt5rcxbsjYa9f4r4qRozUij2y1DBr7A1tkYiJ",
  "key22": "ZWR4Fc4gpW22cJq7HY1SqTcVH4HgQRnj4XU9x6DBoVRXM3Yz5q8ar9abN7pg6hxpdUtLARFpDsyWort9cuteMPm",
  "key23": "2bZcRjjNwycVi1nCdRNPtzJ6WCVVcQ8ZAfiKTF38TVPehqQdMEKYeqcY6sYhAYaBtvFYeYStSVocdoSAD318WCig",
  "key24": "2u65esVgxwVxQxp2h4jas5EkpPpcTUCBjY9yPLV6DpqZW9jvfJrFtFKpw28amzTGiNvVrJkaxoCNb9z5q7spFYns",
  "key25": "nze5NMnHQDTCjjidqGQhPDuSMKnxtzPzTsR95dacHcRkKYb38HQVdKacGVrbuR5g4VbTiZDQ64LYYjHw7H8seuu",
  "key26": "38KdGHWK9mcj8GZzCwaKpWjP2Pac6SwApvPaLFWdz8ManpJkBaU64NhXsRSCeNGji4KLDnmN1r4ZgmfKsLkCphwf",
  "key27": "2Nk2iutK3B8nacxCkpG2eYXnTRE2tXDktUjQz9gzWhSY8UJUJ5SjGDKRxvaQqYpGmNzrJdp43ZK7mX9Tw9XTZbqz",
  "key28": "inxftsxew6dMHfAWn41nWSY1x8DkU9hUhPbCSJfoAWe8pjSCi9kWRtsXnK1wVyMaA3JSeHUnJTeP1MS9j39kKR9",
  "key29": "3bo148eJtzz9RGKV6CxrxL3svBVjUukwwAuHb411sMqPSi4FnxCdK2o1Yb6KBtVb5s8UjPrS5XRwZu1k7NpXN6wd",
  "key30": "4rxXeBG3eP2b244YT8WYjDhdysbV1JSiBNBLtkhWEySSZKQvBvNZpgRKaqsjPEtz5Af3SK5eoqYuXXyjyTWNGXGm",
  "key31": "3LrCxPrLhHHL1ZuiyWXptvty2YpoeDtbKW5AZEFTKSSQUoWg9NwSVKrB5qmRsHBL2iwqKdcXcFG7UFd4gztjegzi",
  "key32": "5aqeZtRyHBNSiGXTFTgpvPw3b3237XsRL8LS8Do458ofHrVKSw2rDEgEt8xiBNJtUvmz4SzcMbh5zVvy7WhaJUFC",
  "key33": "3vpcfWBQnEnSFUdwqri2WHhuo5vTgfcsqNjvdnwsthVg3s9UW3uhrFeqk6gfsZGMbY5ZoTyUB2LYZZrG4x1zATxN",
  "key34": "3ngn2TQMDtG55RoVkNQYsNPoZh2pMnBWKEEoEh1AWkuCtxWmDKQpDjZBumRJXA1xEZNg3CkU9uvP1fXUc4irHoGU",
  "key35": "5Pg2L7nvzFzhcjq9EjkmxPWzwL2DfoVGjo8GPptBUmNcMZ7nXLPvUJnFndZX4AGBnVHtn7hxTwTGYAQZTngWdvJ8",
  "key36": "42jprERGeq9PWu9opRVz9uYEVJP5Q1d9axPsrJfkhjevbAggvg1juS7Pp9P4UHHeQ5jM2VErDXoT9SVeQCDpiM9b",
  "key37": "Fu9j2PLaQDBNj5ifdQFTh88L3KcipB9AqTTb5eT4XGaUQ2vnCAPTyPtJrMKwseEjx1Ytr1LxLcJHW4pmzodqNWP",
  "key38": "44VJy7uD66brTDuF28ZnVvtYErxWyJY2AtdcZpi4UQB3kJfgzVAtyWgJ8P2cDnKhfjWr1kP9Jq25NHzFXghz3eJZ",
  "key39": "DnmfpBiW35L7mHPVHvz8twvjZSLfxmTupNEjVjnUjtUniu2X7ZmU4MU4G9HBZuy6hZXMWS5F2PyJQQ6aCU2JVx2",
  "key40": "7SfmAZS7gv5s3sxSVrp2UdDKEy2SMfRtXaxZdzxFhqn4By7y2iCV6AkKGB1C4C6T9aHRB5oBy98gQSmDcyigk7e",
  "key41": "4zfrvmJkzwKQ12NdpYsyJhE2gHA2ibsRARDZGHDg19dy4ktBX6HoN7f67N2xMu1v8dYKx1RRRvL6DRdzNVVZ8sAz",
  "key42": "2bmVV8zCihfp319PfQaSu8U6ut7rCGcmY7V45kRgU7VxAU6gddDLh2XYChbQnDjscb22MSg2aiykVyj2Wp5ZkSvp",
  "key43": "2fbDipdyVPtqJ7fEVEJBFkeNKS3J3jn2fGmPHJURyBGACwZm1hL8C1r7FppHEaTnTRSMFbDhT9afN8RzA9HVttHJ",
  "key44": "4aeRmcuGhm1xyEVye9pnNTswAdY94xRsBUh2qzVDBW4Gg65YsctfkTryJo4b9ZLH356ASk3B63NHwNHnX66ZQhoX",
  "key45": "2LH4gj6BZRxUJ5UbJfHNxRvSsfcuEL19YseNBkd3UDM2Lu6P3ft1f9DCqTF1YuLRg6peGZ4LCCygB5w5rdLVSMvi",
  "key46": "4SWmpbVLUkBnjFkzG6BxxGx8RdREXswo82H1Ngd7N8wUfkzbqBG2xxgkx4rVNfQKqmBC3spWeHJbTmMUirDNWdrX",
  "key47": "ajQSa1pi2dSzFu8FwCu5CtV7o7zSxkLMBwE1Ct4jfCPaxaccK1DVDCoa3XYLexBpNPhMG2GT4c36pfAqkKUJ4Zo",
  "key48": "2ZPsRPcafw5FTjdPERKswv42zCAyyBg4418u457DKKtFuZibedRereJTFF8NEpHnCyVdmCV39dXG5RTKBt45ZZxM",
  "key49": "3tqrK11bxRQJcyDBWqQ2sX7zKxJJMaFRtJUhWRrJTd6PmxL751x46a8Kbc5DrpsuS69TGzGQcWx6tMi7Uifb9wS2"
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
