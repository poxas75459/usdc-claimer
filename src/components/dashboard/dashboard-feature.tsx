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
    "42sQyv3djVQj9LU3WGDmkmct2iD135DXG9TCNECJ2bAF92mDtpBbLJ6LEmhYrD6RgE4qgwpV8kXp6Uh92LUEDPC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cJ7AoEPX8tYCiFAFZ9iJjx2SG3pMXiuZoJCtxUehMDTi1KzEifLtBdRnriQnmUDJ4oBHLKbsGjAYzbVxfd12qbh",
  "key1": "2FzF1gEReMjYP6J6T61CmmvS18Y4qkQDZFsaeA8ejnJrnZdwL68hpkkFNQjLsFq72BWAcbt5HNwxQbjNcLMHVCy1",
  "key2": "4o7F3pyQvKct6ZdkCSVPpWsb86XPDpZt9YYKdJYGZUB1JTmuJCHQDfomhLF3bcsnv5QKGUp3rsj95X3Hvrmtybvt",
  "key3": "2uP6LGkhn3T5mMKZ6NRwriiDXaaRdfEA37WE1TRzydqwDSD6iGXkByYtyqP2GdenVX7zsAdHs9Ju8QYTH6wzWvX3",
  "key4": "s5Y5uLxeAotgw3VxpTP9uxeQYxnUwsV9YXcojMbvtBwtGEGuGqTuqxrbmsBmvFqj77n22bkArmTncHG3jQr4AG5",
  "key5": "519D6a5WtqhbW2SqV58XiUi3EViazrhsjf6BqAT1cbYSrTxZjJxAAjDJe4cFZoRrQMPGDqpzWWD9mi8CzbVaWgcb",
  "key6": "KPCQjw4mpFovfrPJpq7xzq9iWXEAh2UpW7LQtqn93xTGsPwBRQZMKbg2NcdxKrZ1W2W3tZzsQdCUJCr7uD4WYVR",
  "key7": "rY3NCR6oiwFaDZZd7XQw2dRGEwmjCWzgjeAKstBGj7eHhaA22xiZoqh4WREKS1D1tGKfBQrGtSzf2syEeCVrzKn",
  "key8": "4dJhckUT3bSwh5n3JUmJPopPx3N6Dx6TyDMESexQbDWMR2N9erRDqKvVjTiL7RdnkXDhtScjUJA46aJ6k7PHULEa",
  "key9": "36odY8i9AhkHTjiDb6DX4mZd2gc6Z25QhB6pqHR6rwTbvgiBn8fNkzur7QgCUZCrPPN4epq35sjfApCDt9WfYNSN",
  "key10": "P9H97FQLqiHU95r2GQxZauo1hYwQJescWvETvLAQh9UTQdt3v4RCcz7ebQYtYGcsykopZwnRG9DucxwrZmXLiPB",
  "key11": "4He8Rty3P41XepNLEPF56GQqASr4i2gzBnEPTCXEWTPxkBzPyMmbNzrTZwPUKiQkjHfnvnsap4Hr1JfQ7JLQ4NqU",
  "key12": "4KqiSpCp2shTSj5KoDepP3NSYq5b872wZCbCyAtSQDpTDWAEySHa2Y6svUGdomZomL8ptZHEaVk6XnSoda5g7Gz9",
  "key13": "2Ezyw2cYJwLTHedjUBVJgPJCTYoBcmaRsGJixRka4B2VpUKtT3hwQvotpMH8fG3Rkxk5p8wAseH3ajWFKy3SWs21",
  "key14": "58Yu44KwQRSt5CKThAbM8ijmZfxbYB7SMUwVehVVgvB8n2orTK7odNmMWEczZVJUXFaQrFbpyPQouojtp4yRrcsQ",
  "key15": "3JQGUGYCwHgiVobZhQUN4JRvEggt16GpT5MACgkF6sREeKvbvjmUcu8fGC1EB54aLGyyFjmGLWpb5Cm1oZncGUQh",
  "key16": "5zwPZuPEQ8AbvorNSbs1XjvPQ2j9gVW3ubPStSVdD3hnqPR9DvSHMeBsUuikipk3KCzcLrCCgwKwPPTZksDjfBfV",
  "key17": "5U6tvoaWWoU7z2sHPetKzeFfswqv5A3MwkSXfkvWHrhf3AtRodqexgBNd6TiSP65jwvWBb8ujJSxgjzvAZ9zNquN",
  "key18": "4gF7Db4zgg426XtPLcQE2gc7JHaTLCq7zyJD19MzEveazJteKRe4jKBZrySnXGXQ86veNjCGwygLwjBmPx7f1qFS",
  "key19": "5s9i1oqyNaorFZJwHfnm3s6FVuwRdYPJt4EDmwqvj21phHGYhR3xPS5XJsW5fuM89RpuDEx1FpfuYefs24ckzqpf",
  "key20": "3dGHqepNHSxvzTvMJEN94aAffAbpCTj8kMdQi5MYArZ7MHtQxabUXXuqf2UD6AEWM7Zo4a2M7ipZj3yCCz1Hp9vT",
  "key21": "4nPBtxf9zpyr1W5aMipFJfWEjvKJ9VKGmgyKyRFqvb641xCx5HHuh1uh6NoqaJAaVtYzCxP6HHQAJKyfXSXAhmZ9",
  "key22": "o9M9jiNXxL2bQ1yrqVjdc1praW1WYkVtXYZ8LTVE9DpwUWsmqtjF7RAYEpjkNo34Shp9TnEVXK5cB8tJgPEKB5W",
  "key23": "H1dZbhYL657UaAGcKyT6fdbRdYcM81oZVCsqPrJECBWVUyQHsJwCvSyiiGd1BgMC5t7yvM6BXR5dLWoESUgLPNN",
  "key24": "9tNpGRwDXphh9pLYgCc1UadtFpYhTpdgrrFY4Q9ZqstBfFGTDsL5bvQvscz7gnaXm7Dy7biREApDBh17CY5tUzA",
  "key25": "5B1nAS2owxjGGsk49cD1X9MudUzB59gKXHnPTqsJxa8tPcyAGGSRbjykW5F8KrfFSnTByuVBkJN5NiKSDVkqaEKu",
  "key26": "397AmAXzhu5NY59p2x3gQHFdVdayzRPYHkF4NFUhXH6HzCJ4bgWscAJofnWZ6iYJNoHTUewq88En679NTG8ADkm",
  "key27": "54qSTqcYNMjqhPKox4tSRU8Vmc6Z1bYcqF1Tso1PCFxQ9ZR9CRRGLysvDRpj5nwfETE75mRhCKnruXW11twZerki",
  "key28": "5WQ7ikD2rdQu5RPzZBP7NaZNyQi9DMQkGhKbMGwwpGP5UtjfF8nH8HdZyAGnLpbez27qD2bXi8hqTdzobXiuqrGY",
  "key29": "4t5tySdZfTLxcPfpJw8xL2jNPQ341TMybJv5soY6DZAY7pzTCDrwz1xLvH5jh6UAqYFDZJKnQmh8hQZ1hzyNFDzV",
  "key30": "4q6xpNXwuK2tdAD8RaSM7vLSmeJwqJmjC4JHoL96k3Weydozt6AT8GvHnQXYJytCmrM7285yTC2fo1PCyZVSNQev",
  "key31": "MSfTvEEHMoWsYcjVuR5vMbseme5Msuz7QKM39oXHaABjKa3aDS416qrgkQW1ydRNtzq7xQFHNuEwUAwahcwvZXo",
  "key32": "3hhHdFbtnzeY92bhCnHnCgpVfLCGbyPDzcxhy4aYC6sLp8QqcUwM9hwrcmE5XzzMF6evcwer4z2XZugMdALefRvM",
  "key33": "4DoojEwSudc3C8TynksngSzyLRM9TzErNXyD9rkQJvhTzFqhusjMajHz7z7yQtDVzGuKxkJhakkraUaRLuKWgDBw",
  "key34": "2uwRqkCQwCvWCWdnyx1v5GZkj8neAYwUrLquEVnpxr1CQ2s5onQv7J65MWs6jnoV9Kj2dCH3Pp9WgQnSArsw5Q4T",
  "key35": "2T5MLQaYS98yPqWfRZCuHNcgvGAVfzEFwwTKD4oHtNtqP4wsFwztWwhwzCbNPGCLNWqyrbXVuTPtU7BFGfEmGYPc",
  "key36": "4PsJUFVPYZFhAife1wM8ZRG5PZ6R4S4qP2wy8sT2C9hi9CBRBYg91ZAXgV3xcp92rNY3ZDz7CEQKabUUc1ExW3XT",
  "key37": "3gtmtQcMDgqvfHRYXV1hndbsWHEbEsdgKaEcL46Dz9KD4xZFAP1JbKhniVgcmAVYGn6zW1An1nMDei7WvEuB2d6Y",
  "key38": "BDB7k11ZArJiuNRfa5ecJVcjU1JRoKWk74vaQvyPx2E3pdZLGRvsZ4yPK7ncmeDURgxyGkqSkMhHQ3Juuje8i82",
  "key39": "5HNX8Wctrcx2DBiEuK3bxSSJCQqSheses61mdvjKpiCHtXkqudnmn2SqLqgJ8StJX9Vw1D7CjUKJJAcRowbYqwgK"
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
