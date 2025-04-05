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
    "2LwxHpdxC7EQUd3eap7yMDCK8NCvc7W9MUnACJkLMoKraVzgjxBLUbGhmx5yA89apGaSFVnsPhVgswya6FGW1mrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ruQRrJLLETQAdsn3ELSaiTAyRHZjdkts3GrKXeK5QSKVYPBE6ZFtLxZAFtfBhgVjUFZwv5J5CMkQ9mqZarMrcCU",
  "key1": "MyUSt82qgwEp3eqDHNReAWr7LiKBw9ury4t7C8zkfAGDet2dDAT9sPwe8SXSwxf2MLujTvwJMeZp6gnX5e4RjcM",
  "key2": "gAUcE5QWCFkQnuuPDG2n8bPsBJneiVCVDDghn8aHy3F3gHCL3TEWxsiDP7xey8j3YtL6z21sTwiQUMM8bZhnReN",
  "key3": "mCiMjdBdRhkqm7Mza2jJwbzptPMTWsyURiWndDBu4H1GEZb5W49oF1PEFA8mUZ8vDV2BMXTNj8Gx2fQzJRgpRoA",
  "key4": "28BzecM2sG1hjapbGjsAXnsMEpxciUc6WdEzAXb8Wi5DV5CEzSUSkLeJ8y3wzcBv1XiPRmxvi9sKx2yH1t6k2sVv",
  "key5": "5r7Lx9BaGkusZYpWXojZquP8Jf2A8AkgfiSPbPNgMwm6E8mcFfgXL1gqS6yzptsyX4UBvT1ifpZS8HsotdDKcvBX",
  "key6": "43m2VqUpvfuDYjXjb9XFWuuVTZagST4G5SfkQzHakmPVwyDkqceKgZWPY2RD3ZWJqrFXZAEMHh699jxYW399DkAK",
  "key7": "5jFtApnpzsN4TFxBAkBU6DMvN4QL1VXgCrSsEHo2Sg4EUm7CXQnwJHDXCCrB5Jjn5ENWTJusYJAAf3kFgf6GCTEi",
  "key8": "nH5xGDTBVCiXEp4J6w6exh1j5gHr2p3Z9KgDZqiakQJWYH64uf85QKmXxCbDtScgYg4xtXpXyZyA2q8kZrgn2Bv",
  "key9": "38XLLU24YLD4Zo9Dkzyy5HVVPfG6VZ7dywWptKN9ukoB88cXcVvt4LAX7u1NjgKKCfDurExPjz4SsP5gE52MnBj",
  "key10": "MPT7XmLVprE4jevgms1NmxpsTrEfx7Tv5b4AzGvjPi8mjjW53AnxqVdzyFXrwxkEyr8HX3jLzacd9khAr4pRNg1",
  "key11": "xcJyGBeXWBhT8LR14Vt2qwFXrragp1Xc7U6u1ZSXrBmguGiqhp2kSkJsCQvAd9CkzWxTwDSCHP78xy37dDaQ4Tk",
  "key12": "z4cTz96CiPe8hrGTYNzS3zq1t5hu2ReAJHvSUNRX6WEZBm9JEwWipRWbBuSFB6YXcA4LUR1PBJU63EVvbbSDrhe",
  "key13": "1kUCzThLxmjuDBQXUrYLAZqnk4Gfgb2ViPGCpFYa3fkwV37LwXRA9Yawqt8FU4PDc1SfFDMNgpHyxJnLuw3XbYU",
  "key14": "4gpXeN9CVPzhbhjYnAgYThUPDMgzR9C4KaSL22em1dGyRzrDCNdV2Si7NExu8egXsdn663wcuaYJTYNxpwfWxRph",
  "key15": "4BNPBq16JW38u8zow3Rv7eCwEfhKLkpsHAyp8jdweNsEdPUG4nVFyp9Q41VVUiCDGQFWMSxNXViVTFAMyykdUfga",
  "key16": "5uNkR1expwTbEsugma3odi6NvnyY45opFfm2wvQPahuC9mBX83o2DLrJwxuQhvC5nb9gJ1gFsM3uztTvEi1yTwkG",
  "key17": "5RrE66wnfmG88oW4ARzx4o6USEbitJnGZTmFnj2WweEpFHqJDGgtKQxbK3mp37p5z66bfDCvNjoR3zM9DGd8MYA3",
  "key18": "4ffThuw5W7j1XR4Wxsy4EgiDUkzwuQWk2xSwPeSZfuDohYywUC3LJD2ZAUQ9vWc6P4oTsBFMmfzHB7UMpz6zKXyY",
  "key19": "4WekADJKyUruU8Hodbfwp86KCj6uQHJhEAmUo6FgT1qUthiV4RGNT4pxKSLen5nFKEUvMndQLDHDwQExNminBFYT",
  "key20": "568mueU1kNTZGQT6CAbFxmjfXF2F3Ct6oChWRj5f3625X2fML5T8VT5JLNcF19vSHgqPYMx3gY6Q9x6N5dNA5Kgi",
  "key21": "3icd3VFQZBnaziNrzWASKN7xbHiv64yi2a6jM8r7KDLt1pN2EKWJZjWXF9y8CMRbfUzka2ipsuBFeew28SbLwoJH",
  "key22": "3VYDeAvzH3NnmcPCZy8q67vv9LCfqPaJ5zXJDxgzEmEbZknU8XXhBLEdYTskq3jMY9AFUTa8Aq9reXgo6CmTNgw4",
  "key23": "3LUZ2dtsCQiUQAgNfxRJecUpD4KfcHtZSPvsCqkJSKaE56CtGJmkaRGfPJtWNUK3rufZqvRd7zHbjUgp2eH7rNkv",
  "key24": "5aSLocnqKjh6iNyWeVqMZXdCU5A8esUNccs9CFrQsF1efgRUHvFgzomK9R2Bg3fx6iDAuMpYmR9EcfPrEiCuKdjv",
  "key25": "4GLVAowYJpXkjjv5gtST9XteEfGaz4v2firFcDtJCSH8xcGjQ726JBEicAenotrmFt2qGGoMaq4gTWiEK7GtXbRa",
  "key26": "UCjasDbXqFpMi18qULWXShazmbYXKzRjvn4hzsEYzj7Cg1kDkTWnN13TipiJjYPQoDPRUAsTgBpbhHJngwg7dPj",
  "key27": "4foKxdjXbJDKLAjzmRVaqskkcSdWZtoVEuDbhqAsz9kXhN4Ja7SEsYdcBFWynw3wgkrqVDmUrYvNVopnXqY6BWLE",
  "key28": "5BW18EMZDpUhebtLycfCeeog7tMTvpudQP3gNWmb12YSFMnmCPgxjDWXyJgxF6aax1jaAHUwiQynCoai3xo5u91i",
  "key29": "dRR4sZDXewnsZCZLTpGMMscBLA7jgBHCCg14rvqBsUYp33VHGd6VNMGYQQtJiTsYhivhLSWMZ44QrHrJwZhgWTn",
  "key30": "3KXGEDy4DhP7fYtHpnLHGgWWUw78rrhBV7V4E84anMiTP7eVzpEH5HzJf6cZBz125AMGrWtpKmyeJwTvtZRNhKvV",
  "key31": "3SaoHcgRJnnR8bckbGHBBbr853qwA1fxxXfEcDUQZeKkacd4zeDifMLRLnmVF2stYxkDf41yKpDRMWmoQYiT8jjp",
  "key32": "27VG6iJjKRt1hdwhsEEQocaxHDWbgosrswnzxby4rg7eUp7CGbAu5SAzX3uyzGn6F1eiqmEFJDH6DrUq3gZgJzuU",
  "key33": "2xpgBigGAgExLHdbwLFLe9cac81j1mshQBD5NkyjKx1i59hDUgwnYbwzvVv5GUGsaKXpUc9WWo7aNMSuH9eJ7Aqy"
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
