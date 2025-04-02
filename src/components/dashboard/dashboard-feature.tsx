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
    "GGeyFZ5GbEESqKkhvnBhqBTU5yQmxZd8fZkXt1ey4KythifGWC43bYbpPeHCQD1i2pYUKzrbY9nBiDUCeu3PNA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "je4mCJ8e3RajhPNAMNoPUD7q3kbGeXroHGPkeuNR577NVWvmZtKdm5Phj8JuhnZ6dzvbvVFbJdVKNgkkJNbnZ1J",
  "key1": "3tBrwK6xHLo3bJj9CyUU4qqJ1Jdgu3EM37U31iueWfxdjXgNmW4fiaGqKFMG4vf9tF3NNzS268oKfM8dZjg4fJrB",
  "key2": "2Vcun3bndW2bqnv1ZwCY3kG8dkctHwG9rNWZ4n49gaeu65ayhtJHq8SyLUqmn1JQsCQjGbxCy5gYnqcsGXAak5K9",
  "key3": "5XAEXmpEuPjqccD37Eu4YTHHk1RnvmVdg3uJnx5j7sLhr8DiiSu2gdbBbk5FNVGT8vm34frjHo4x8Z3V54pvPyAs",
  "key4": "5Ume35mLvkQjoMKiV4vjt4h7fwMm1vuC6h2zWgmR12LcrN5ztVNEBjpf2EeYQJgB75cZ9kDzwxWKUBrCesMNcMSB",
  "key5": "4VFa2zmdEweW5oz5SS2YHeVc2978vW1KmsQCJAtsfh8iBrhncJAjWFiSnXiGSssHoZWE2he8LbiH96aGNPFT9A9E",
  "key6": "67U1LL98wPJuF5Sk8nW9DF6rWfvh3RzT7Cy1SYYgRoYTLm2RjSrA7bTdEvZ7gLimHLh4kFV41XQwa3aY2QfcDhAN",
  "key7": "5xSEjGxN5gHUMWSKXBXFZrJczaVquDH6VMmiWDYPku6Q7rLJLouEqbqgYGe1iayhkjbm9SttEV7XedGfKpwwMCBC",
  "key8": "2DGYHvqK6TBy2zAq3vXQfrMgcQq3n4u5SxhCs1vHqDtxmoTp5EnZDqYGgebEXcwtZHHuJSkwRZzvXKNisH7xayp9",
  "key9": "3DD5LwoSBGm4GexkSXevA8p2re3sRRg6uj6pHUkTo3XoKhDA9q6151H3x9tVzWS4TTHCzk3Lsb21oJbsdfdo7xxW",
  "key10": "5m81s2ZPDg8Dg3Vv1w5iCUtt5NLthojcMkAVRwNBtttgNJrstXo56EZ88RgpuKt1kGEcTB4oN2doMbXP6963X4vr",
  "key11": "22p3V9bVFdj9b6ZvXmakwpgXBbqud36xG1QM7SkPeCfxVTv7aEwM6zFiyuhvmL81R9h8fYe5oLVxguxn6XWdLP5x",
  "key12": "47BfPNF5gwmSdA7iXXR6q28njFLV62Ns8wBeT3xfsHi68DV6VBYeLX3ocnhaxYjtDvFsp2fzyh3wEKzTDSwiFauJ",
  "key13": "3UfXqL68Pg97GGQMep4YkvpwP45FhHQ4zQ3Rf1MorD3b5B1g5zPmKrLYfzxcnn19cipahiYE5okG5acaRKN9F1GB",
  "key14": "3ZKUS48FMo2JPxEjeE5m8kDpNKwTn2p7xn5wBrYxrWmLMs3LPaEGw5sfMmvHJXLEbBrHC2QgLWZxyY8BBir1tBzS",
  "key15": "4VGPVfDfe2fLxg33DbkekMkCPthW8rgPmHH2rLFdSYkR668AjRQvV72DRwTzvD4vtcbHTDx6DZgWQpqsXwJ18ZzU",
  "key16": "RBsHDoEppA64YdzHGatesmAs3M7Ejtf1C1BgTFswHNTMdTaCZHxobRAKkcYSwugP7eydWiigVmwHRi4Q3H8e1V5",
  "key17": "49NjfmgJaSM8x14rwc7Ff7oCEREd2R48CzSXvf17rUQLF7anvzQx4wmHXCtezAesbfr2xYrUqaRuonaV7bjcw5J",
  "key18": "2Ni3eAHzAdmXFd1KsjPUFvyz5sLWKuCRykxCVdgnGd5yWhy1TAQHfGsrSSvt3kVzGvNu9aEUp3CeksmkLT9NhVtY",
  "key19": "5gxSTSCvvBet8ajyP3egvckiJMCg4eQjXgo8LBB5kk93NdpR9CQPtGnYgvzL8S5oHyTRk1JQiyQdaHM3sxjyDPL8",
  "key20": "5dNF6v53qFbCrX5MgfjYALD4FFp2L56JxtM6Q7xXFYudpgJks9aLZoVAPRkEGXsDDqyVwimrm12owNXGoqT7pt32",
  "key21": "PbCbMxTsDetYp4PoyFQQfyCJvVHhvwMRwcmsQCtW4ZS3t4ncyprvsLBjm19HBdR8kZZmBvPs65U35sZm6WfQ2N1",
  "key22": "2sSZSKMt5g2a7MN1PjL3DrC7zzKh3iotrk2UNozx3U8QjnxN3h4G7m8zHRqTCLVjziFqPpjZkrP6dYFxxr4MrpMk",
  "key23": "2mkx4xe2pDcv71TUHG5CWutaYN4tmrnvHASGTxobo4fvMr2QZxHo5kfW2aRTPKkqEwZj95YrxoAWQkyGSJxv5YvT",
  "key24": "2PjHAA7Z61zBW49qtLZd2Qpij7SKWzUBxoKm2X9XTeiWkVv8h78QeCMLZkxncDPQPfK2zc4tw3bw1jwJQozyW7AM",
  "key25": "3JP7KScT4cUcUWmkX96VK9iK3xsrMJqMsK4BK8jwKfvSvSBTBzxR7PT9N6XVpHHkZz2rmwBe4ra1uwge2LHyingj",
  "key26": "4eipNip4nx44TWKhaxP4Rn7ZDwAzTFRFYCbKBis1JFHwwHMAFoWovwehyujbVnZaeuhgMsyYhBZYuq1XXgWPk1ry",
  "key27": "HVueJyhskVzPN9B4kZ6HNNreSBAkDmAvvLV4WVAd3n6uUeoGzcv6Qg65KBVYRxJvUkjwLUaZmU6mf6MbfosrDZq",
  "key28": "4SYnXh63ebdXaCTBcBXTvN6QCJLRGzJq4hKsEn9EGQheN1EvmY38h2yCQ3v3HLyzDHYN8sdodWtBfqGLN7witgss",
  "key29": "2qvRVvv48orcSdEcymmbj96k88a22QbmoNscAFSHZE9Pg8e5knhmdKLP2UghmMyZJHe8KAY6skVujY3Z26a5Gwdq",
  "key30": "2zpTiCmkKH1fGonB6kh5BDUTLmjudg8GtFNHTsZATGC69xkPVAsu3iNoTAmehx4fqZ58zZdZWRo2RgxeYbDsgqtu",
  "key31": "3Y9w5MLSXZfD8XwhKquhp4mL5ET9hjZ28BF2kPR8Q2DWByxapFzLNntacPyZnNHNhRfCsg1kCnR8EFt4wfz6d3Dq",
  "key32": "5ffqUBDRSEiymzsuPgaYDGWwsYgy5NmGqqRaiecqcbrbbCc9ja27iVVrYA8zBqxYQCsEQccw637j48vdqcru8VBf",
  "key33": "23rJiowCofuCvnzgQfp7nUUSV6z94HWqMoqYqzurjHBu457uWAA48Gm3944q8qdbuCxQoryYpHYiKDfbRp3pU6za",
  "key34": "4biEiezwp569SHdqgLsMjRjGbjPSAQWYez2hARNkjakdTkXVPSyihdK8MGMPFxnN4k81rK2xv2h1wwYVjhExYgua",
  "key35": "2eETkzw1MjESr46U7hJaJbrury47wP1HAnoZk7tro3nx7GxfGmrNVTiAdJ7CmHcN9DVniRmTtCD4MVEdAdEYnBLM",
  "key36": "4EpfSWdnS84JKNuw2oRgA7sWw32jAdEhdfjCpbR1Tw24pcpoVeq3nVbSBtSweC77pRKPuVrApYooNWJtEgDycxB3",
  "key37": "2eD6o1z2FaGDAHZ66PVCZBFif7MgZ9uRotmabnHXizdHSkJaTwnpXUTWbJVWz2ep6z46XHAiGMAM2uQLSynnL2cp",
  "key38": "fEbDPMuZotyb1rjLVxxMLxuJy9nzyJnUiaPNRWJGAWjH6mT28yVMjHuJtwAGFgehQYM6Nh9CyDh7EbujEBqr1G8",
  "key39": "3qjMSLNKpDjyPswgyxAtwawT4xTf9C2Kx997FoDKKAzroRnrQG1wwrcshJT5MdKLNZEdNt5kGsNDtHSY7M8PgUkf",
  "key40": "58K5GshxXQEWymXmvGfzypBh6How3Hzg5VWxoC5rjVFuZc3xzjFW42fpPihpPXy8JjRDXcqxQXeyQHeKkjcUT2kz",
  "key41": "3SV4g4MJHSdfirpq8Bc5ScxRPHKVCWGMdQPfWsFT9GNZbZjX2UViwiKbYE7MdCNxdDTrQsuwmxvKhTJveN9SoAt2",
  "key42": "3adnf39bgwzCqwt6BjfxdR2qZUoooAZ9qZ3W9hAC13Xxyjj6gWWL8MtGEbWX5VGQRmWXUetMWKhsk9s9FE9xWRrw",
  "key43": "3DdFHZECSkzxLZrSrYB3PpVVWw8yzUgjFcwWBKWhvaLJ6gZdRh6t56cFqViN6egiycPZ62ysL63TyR557MuJ3Ryz",
  "key44": "2YsEpzu6fG49SrLfdKqQm5bhuH5JT2MrekNxv9a56AymGPMK8p91NYQTbe7NLfBeUAMVxJUibwFUysptdCUGrh8H",
  "key45": "zyHSwRriQCu8m2VcFoM6pznGgfepkwKgGRp1WhCSiL2bGw5TTyPRTCcERZ7A1ehCT3HD2AjnTFEqJhPFZcw7BcV",
  "key46": "f3e6JbMKGpyY5fsh7541tn7PLwx1mCjYfRQWDqmrAXx9G9zswrtYaDSC5RcgLiEisGCLShQdgwSboprX8xfe4Vb",
  "key47": "3UZZEB5TWt3KbWeYmfvL6gTo44RkwC3t71UFkmKb9PU4rZ7pwVpuQ8LMzPgipYQFR8cETgE8zbe1bz2PqAcMJ9Nd",
  "key48": "2cY3btzMpyakWY4sir9JExvTX5xNvtaouegE9TQR6icL6WL6KMeADKC3bkv7MbMGn6BHRmRBPpr1wNZAx4j4u2JC"
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
