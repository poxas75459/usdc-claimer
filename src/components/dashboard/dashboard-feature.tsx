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
    "4hjHPd5uunbTw1UqT2P1u4T68vuTBAqrKtitMFm2gBiPUCbxtfQoZZSkNco2Y3kb82S1TirhtEoRCJViPKTSyvXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24tu8GrUqokiFhsAFvn5EA6ysvwFYn3MosTWzcL9R7fPx3uHyHHtUPG34DsPFjVoH3JZWkFqSJwq2AmWj7iLH8ZK",
  "key1": "212Chc5PDzXM22wguooLx6FYqpWmFvpKUvGxNu1xS9pokCXscs5Yrqmf1tdXAbp4jKbbpQp5VWvUHWCvEc5mivXP",
  "key2": "4uGAFXtMUyWWPdFjVi9GE3fVk7LrJtS3DKFSzRSggbcTFtWJMDLz6mNkQ1NG8ucUhvnrBJn3PU6PuXeE6tbYsrNM",
  "key3": "Sd5FvPZDXZfT4Cmr1uT5gef6GyipgtpwzkJuHtf7sH4592Vb8WNjTfRYF6U3VP4RoLw2Qq8LKGH53ZpvE3RiKim",
  "key4": "4N13UPWtuTbfbmFT8exmLt7gYKXmrps6sSREDqrefbeuN7oLCoDMRHYdLTG6kGbokFJwfY5sZ6xDVB11hnq7bv3N",
  "key5": "5CxE1Ta9Y4hcr1faGSSzqVccxk3fH5m8w3EVutCrBBRfNBNuN3zXgQY8b4H7oHdr37ZzxV6y2PjWEK33d71YeoWj",
  "key6": "21a42EwRzjpbWPm6udMUMEpSE1VwoLZUS8kJpTR7HFWoHsG1UE9pSmtEJV3q69tij1EJJZMTsFkm8o9ur1pnqrsk",
  "key7": "4EDyK7aFFbsaXeujoTmnnmkcaMhocazLzG8FUceavWYXyiq7EDfkg4N7BRTjaWKo8LpNtwDT6jTm3k2SuZacSVz",
  "key8": "4cFYiNtzcYAZ5kaK1pHw49C7s4Cj4joj4z5DmXwrireSv2QykEu3ZUotfNX1UiKMwhGwUL3nqP7SwuVTZLHUWCUy",
  "key9": "2s29QbyEQTiGwJxhqZWXGZcNJWjfdk6acvENXBJmzFKJ2KPKg8J8fnrreRRkxXKBMtwxKcEM1JGzWqcpByiicRUR",
  "key10": "h6EwtSUrVnLL6yVLvjv1r2KWv8v4hAV3qJxnCtk8GCRcsshncw7WBbsMwwyCZn7oDe3hKDqkz8ahrSuCBsKueFL",
  "key11": "3dtYKQYpKjdDjKcan8SXbKbuTcjPa8GHsme79GDj4UBYXx2W8PXRsKEDhQJrAB6uUjH4JjZtH96EbbZKP42GLs3P",
  "key12": "5KZcXAZTZSHyAVbMP4d2FKoCaVn1DKbiqjt8oPX8MZtvGhMthLBBmHf87F1SQvGNLR6oyyf7ixtMNMLfhPxLo9At",
  "key13": "4Z2Fb9xH2LjVPDt8nEYP6tEU1yjQLzzw9CbKqzDcxuLaMreqT4LvFyBfjrgWJE8q1ku84ufQGjxSihXmJvGuV8MZ",
  "key14": "5n78MsNEBqAZncmAHZcx1UKkpyykf98PpU1gLcudCs5dVHaFKWPq9cziTnuedTUtnP39vWfn5zDy5poDPcfYLkz8",
  "key15": "3WMHMMTai8vuMWpU2cSoHcy3Bq2eLa61QaPu59XtudKmsriVUthDN2hC7pKd1jfRJS7prwNqYHbVL2g5sd6AUvTt",
  "key16": "DuHQjY2rAdNqJ6tAT5Ch3KLqvErgYbCDeNHcq9YQ1gVvZH4bX17oTYdVPUuKPA9597siCXhpLqToy22Yk18ZzYc",
  "key17": "3r5gqwcDXznw16HXTmpun2Trnepa8bEo66DtbHnWwaCCP8y5BeuNxJjLqySSLWVZuRJZRzPBzpmRfoa5Zr9aLvJE",
  "key18": "DLB1XE5vafdpNqBBBtTvcti1eYvp2LgsT5QxNUKaLcU1DfdaaVxkmWKv3QVNERh1vsRbKg5vYHfDaYHCCdibxw8",
  "key19": "2s3uBQmqH7i997gTzjCo3X2hDPqgyhva2EcRHZcDQKafbxG8ZcLRvdKMTtZG3gfvcePJCLjGyt1ERmFF1ABSTJ43",
  "key20": "4oDFbwqnaMVBHZ963v5aYP9FVN8EZeoZM7KQ2Sm1TVFUiR47Us2tWupjdVPtXSJnW5BZyjkHp2rwLKcnvCjx4wpD",
  "key21": "NAvXFs5iVwbkM3C8Z6T3kziaYiiG2Xstodk62rzRrMTTwEtfHiyxkE9JbYsL7maMHRnxBXUg4jbGadSD6KoS66f",
  "key22": "4Jv5gD5ZvEcrZ3tJNaSyeh3U8Cu8K2QjJRL7rGwJKH3yrncy8D21eCdkbkvf2JaUsKtjRMxuSqZy8Bi545Eos74R",
  "key23": "5vSquqwD1cteLwXFdVMN7pdisaoFnR7HCqWKTsd8qBKFG1KSakLjRCXsB7Cpuc8op56x31gtCBo2VqWeq4PS5pVh",
  "key24": "zSxwuXMBWZYkwwzsFagPnaq2Avv7tBnyxhEomn9WuuyZHZQWBQz4pzoeYjqBFoFrXcyqSscXpBjgKie4fmFPZGh",
  "key25": "hNgRkbD6zqu824HhQyuBsENX1E9yBatXLSALdUKuxCqqnh4z6J67WciPruiRuBoUndTe6QmrzceR4Ca2pUi3chq",
  "key26": "32C8Kd6xPQKWcoJCemqnTJbSUG7tDPJXXv5d74r9r4rKGiQhcXbnPCtVC9j1Hv7XoXiXRmtzRgerzjM4kKWgQRmf",
  "key27": "5LMoDtK3qFeSJLFevWJm1CM1Azi5B66Jhzb1kjmzXEjhsDryyZF8hfH7bifD6hV369nHmPwwpzWxWNxbSk4CPStM",
  "key28": "3UNwXhqb1uNtAzMR2VJ4NsW2cb7xdshSd3FZ6NYpX1CAJdnXgdwecVC5sX717HxRr28PAuXCEXuXTy8j1dbGLeHX",
  "key29": "2CYizV4jB1q68JnpRSYqH2gVBz5aaXwZZDWm39cbSqzJbqxj3dYUNs1XsfuCiVxMhQGYBWWcfH7qFrGnYq3tLtgj",
  "key30": "o6rZewwUMSSKbzQtgxPkrsuvXQ7bN1qt5KeWj2GSmxLq6F3PGa1KdcjcWXFgpUR1hhPoKjmhWmxZqkPkc4SZB3M",
  "key31": "38afn2bmBaukN2i4Mzva2XSidqamCNZFqJadfwPYHZ8CFeEv3Rdk79vHnWN33QERir1aF8i9ov2RoNRrBtmFxg7D",
  "key32": "27SvrKzCBHrsfDVMhtZTSuCZWg12Lei83Su7CmjxB6noCBMaK5oUpoTYPce7ghTcDaSoMQqFVat9hfNpXT7JypQc"
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
