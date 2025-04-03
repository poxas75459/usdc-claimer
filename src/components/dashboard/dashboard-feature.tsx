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
    "L8romd488HpzTHY27TwT1a73oKGb9T4CAXAGWiNp9soY9TvWgqRsSdmBVDqshALEWJBCU8xgBcmm4XC2Kk3L7sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m96wjfYcthMi1P3FUifk6sJNrSMq6oJMmLixJDMNytXFQFN6VXiQeKF38hMrsfMU6LizYC6qbqyhgZisPqppENT",
  "key1": "2PGbnFEXo3wCyYkT2D7p6KsFZX2ghHENqjzUEvEpZBDBdjKM3HWaQbc1SVq1T6nSAewnRU4QgeMrA1ym5imM5CgP",
  "key2": "XEwvmmKYC4d5737WmDXZrbvUB3EeA9kkjCnw9efYvT6tZ2S3G17aaiMCXD8zyuhM8tCWMRSwPMUUBZZdQUPEi3H",
  "key3": "MEkiDhEJf6LbjnRefP7F9YxQ6xNrXFX6p87EdwwTbvRLbxYiSiHWiaQv4s3s9xQt5QLpBN27PNPNUDMDt6We6cD",
  "key4": "5wV9ABAnrbRgDrJgXnbUt9KLE184YYcf3mUDuPZWUxdTxRJMXyD7ThxiWE5Puy3CZ7Q4x3QfetX27L2x67iwgBiw",
  "key5": "2rsXnL1ahF17VbWVYa8v3nrcuvondrvS6QCjBawXdUozir5icFVKsSUNPMnSk4d3gXwEDZYwangVTryKtX1mRGtr",
  "key6": "25UWakzsBTG39hwjdE7YDLWrwGjNkVCnj3Xgr9usXGqhgHQnB4LAuv7AnNAA6UqwztYnoo8wEUjczQuQ6FGEvEbT",
  "key7": "5ebXWXyJUQDYEF2dpSdcdfyT19Cmv5neeoHjijA6HmcC7n4hEkxSYtYzSAXQ2uaxaA4ihiid2RC4d65nYFEG6o7U",
  "key8": "2RqwEu9jPAf4nnFwhEJruokLsJkJLA8sbofPHMBHxVoWhADxUZWh8zFM1MWrjuJXfQpBC3qDnFrnr5iZHvr79xca",
  "key9": "ntAUX6QXbQK1yTgNR5u4TxRR8jdxJPvvzEGsx8KE63cexQuM2Tn9aYBat3yU87UtE6AB43Tg4b6NtzpZqWkZHX2",
  "key10": "2WWPvemeTGbshvAkGCH17pdgDU2uQaWWH17d2d5fkiuKzeEGj2Ahvj6MAWSnLh7RZHkCK2g5jX7fMA4FxyWWwPUp",
  "key11": "sfQAqeeKxKj4PdeZQGSoiJDCaiZqQrsigoBxWaF1xyAShd5yVKiGoAkjcffjzzbYwVQX3Nhcq7hcBd1pN7CX2Lt",
  "key12": "4QYpQF3me8GnZVEZF3Hzo1eexf7FZRL3uxjpF91zyiKfs9EjF9AXcQMw8ffXgb8Hm23uo7kWzUEgUYX2rKKuuydR",
  "key13": "4DRU2uPjeTuPNoFhbJUHTJwh2gc2J7JSVni4LmtGW65mYQ6LXNJtxThuVXRStYZ1GQojYbN33dhSzizwukPVHscw",
  "key14": "26GrWm1TkT4yfgYfuuYQMrRLiRqXTeaHVNUu5iMbGXYXuKWsGAHoyhU4JQL9Q9wD9FcHnNcBeLPQPWWYsAAaPG6E",
  "key15": "5xDa3keRFeBYKe5iLZbwtNYqfo9waQitRgoDEWMzSRjcBLhp1VHV3QNDfgkzgijkAT3iV6v3VXveEZXsWQFtYks9",
  "key16": "5CAoWEKv4xqeUFvUde4y5kbJPBhAwCRXvyuqrTy5UvU3uqhqwc4DiPuGFFZrZHEmpRVw7CPiLFX6TXWkDmSoKPEa",
  "key17": "zxKXGza2ff2L6ATeVDzBnBHmiaX3uFZjyeB1rfsjdR4KiuJz642kixkmFE9Y3vhRBXp5qWuqL1JxRhZ87VcZiwT",
  "key18": "2AojjtXtxyjPXjk6iNMtXtZHG9oiLNdBkCLZ8dQd6s812E89CsiNhiJqGHb2ZvtgAD3uR8SJGiYNzVsm5EMRzsTo",
  "key19": "29JePnnQnHb8udUVDPYnsH4khtmPqwHhvfo7V7bk4uqv6Wb4Xvd1auBqKLYYQTcRiDgF8DxF8F8K8rF4c7vkm5nU",
  "key20": "2jUm42Dy6A84fo8RbjgEJUhrvWu82vAYBNMYMvs4EzBJo98suWveJAHpK3NKWR12yU7fWKnaVyfHnLV2azVqSajy",
  "key21": "672cTf8ZaFkx1Y2TzE9S4F1KDUqtQ3NuKiHuWN6oHCVKunoq4Gecu4GDrhvsmMVcJwViqbCPEnM1EjHXSBivhTcS",
  "key22": "2NnfGTHL55E4eCb637vZ769pMt97syaETvW1ir5NY2rX9ExMv7kp7eDRwFqKBfCDamPrA4f2WquBpBJzfho2431T",
  "key23": "66RQxU3ioUmfCsC6xfW6L1qwW5x8ZrocERWyGN8wdUVwNi5izytQDWZuPnQTW68JZSt8y7rPWvgAuxCkg2Rm8tGe",
  "key24": "2BviNTUCHi4DLgFoSK4NhoXs6Tjhc9miLCXYhKk8tAYKBj9DxpJzkgyCeCeMYa771dKSqgqeQcBb8AoyEFV4Ewxi",
  "key25": "2tV1mNrWKXcYxueBJR8hakmsCEBpwnw7acNtUrUm5YVnFmeHR8dLsg7rNsnZ46LyCheqbEsh9paV1SH55tPC6qSX",
  "key26": "3J4uKNzj2FCWtoaXD6uairSZbzeK2xUqARXCWaWAHcNeF8iVvkAFk6uxubL3QYcwJ9pAVwcLynuAF4sAXvV3R1zo",
  "key27": "PkGziiYP7kVjKVLE1o3pPcNcLbdNC4LU1QhC2Gr9SqHJ7x7AJYtTLZoffaDmnJz7aPbRp4EmBMsBjup5gXtCdva",
  "key28": "385USHPX7cUCyT7JVMF5ZYSyUSP2xS1MxSzg4pranSiZNfCyVwsxfqWV7Qqv6CBNgU7LyipsT959xcsw5bgL3Via",
  "key29": "4A9u6kFhWboLKftv6935s24V3sfP213AY4Bw83xcxEaELkEPaaNtnD3DUaJwiULqEXbgDc1AttN6emenXQhupRg8",
  "key30": "5mpgM761TVAvFsDeUmFiqeoeoJGQbiqtsVJq9JtYWZVUA2oYJvh6XjmtsJk52pypuoqh4xngYQHbgYZhD3zxHXWa"
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
