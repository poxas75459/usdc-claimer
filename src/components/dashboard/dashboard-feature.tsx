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
    "4Bb2VAxAQGYVVmF4qagv4JD7e9rCLswWbogNkM6JRWTchQTFDqtsvqwa2nF6TDQbe8VRKhgHoa64qKqhZJyKxQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1ZoX5Sywu8pCco8RkdeHe8cS5XT28oLf8nZKWTUNQgQkFgkgzXE5WUKCQ1XKfearoyaD6kagAttiHMZBcMtDHu",
  "key1": "3uE5C6skVPCPo4W57P4kSXHaPkmrmdMKh7vbFNLwxX2XnYazcZZiE6x6qGMGryzqM73nP7SrRjENRcbDNUvoBwoB",
  "key2": "cNkae1mGk2y3kVxdiYC9FQdU1zU3jEndoLmX4xF5yywpnzgSah9kv3g8QmC1hqTuDmL2ZZ18vhChYQwovjy29W8",
  "key3": "5M4H9fCN8BGVG6f1j9hMojKhmwd8MDe3GyPB6Ub5W83eTtVuxYPmUCuoqeZBjpcNmR5GEznKFHLLEi9FRtsUDk6e",
  "key4": "35kTkcmEM82UDFXu87JmgPGA7JHK2heSxPuaVdyT7Qqp42vSpjUshzXgEQdJfbRLrjxqwuU5ZTgh5wzSLCxyBJZF",
  "key5": "HH3geRJNhEFYnUmDDwZ2TEqmQxrKBe73WF6v9rkZeW19TqahdmRKvvFoT6ZtuEgYB8YFgvkq4X5VdqmsxqaZXo6",
  "key6": "58biJYRjghtDhbbij8qv9ud52UUQKgbGUPnkoJS5G5sTn6LEP6qQkW5Gu7vUEhHzqnBFm1uwd9cugibxEbs5CwA3",
  "key7": "56rAUpwSMkddshYB33YpZfaHHC4ibiBjTgcCxCNwN5KNxmCg4d777HLr6pKooAKHALLeTESJUYJVvD4pTueuHTXK",
  "key8": "M5FXjPN6tb687orKNRBe29nbNEMYtG39aUiTJ1jxopDxWynWxcQNqysisX1VFsUWQtr55CDbA8mR3iVM12o8Fyt",
  "key9": "4x27cwNZKifVWooAHnzpEk6M53jDMkAqQcqJWU56U5qW9RQVJEMDFftuUWFUcZ1QcQMugL91dNC2n5x1GoMNdref",
  "key10": "3DTi4BuF3CGH8esZWg63RhJL6JrS1K7ThxUR18jZyrXBQ5VsDLG4SNuwRDsygLko9ji3hBEJe2CDLuymXfZ1KV1v",
  "key11": "3aFYSfdYKi3FtaamFcYWrGE9MXP6RifWfZnSWUqM6JEYM2hyqF2SM7LsS9EsXvo3PdD2uhPvCtmbaoiZusLYnr6x",
  "key12": "556ooTzTn7RhcebazA3N7GnUzmzTKuG75m8rZqsvujbAkGhJu64buJ5D6RmAFbgHuCW623sdxrNHNRxnUonW3GtJ",
  "key13": "2zh169mFdGzjWCWmKHiardhNeSJjXEChg7SohpYrzQMx2Hv8H5tNDvV6i9A5wfxFfEW2BmeritpbzYEmo28Wqr71",
  "key14": "45pQMY3JvC3Da8zBEx7t4cQTRVEEshFuvUYNyemDdVBLB2eE6WZuXBswZrihubDQTuDfz89gTXVjpbDkX74TVZC",
  "key15": "5HPtoP337dGZGwpmQK5DFcFR4REdxJ3jM7BtjdJp6C6PZSaodEiuJArANpCCHwtv4AgHGYarU47Y2zRnYwav1yki",
  "key16": "28tFwPn92W1Hk3s1ujwkW2cFLi3cBudkNuZbFsfpfyKGvqRDBLodTqxQxPCug9HHRW5g2r17MoESj5hX1QEejZSA",
  "key17": "78XEw6traLCFKKjCwA9Zhx8jCRza59Te2Gh8XqMopzrA3xgS4qXRiPDRKtQvBsYUXgQS49n19Mj6umNDt5BBVHp",
  "key18": "3cCRqWTQcy8x8tVQgU55mn8ciTrX78Ts5T8rquvAQ7B78jGkwgbvKhTcLaoYJQkWRAEboFgeX2T98J7HKwstMCBU",
  "key19": "P48pXw2PruzHgThf3e3t5DCNFgPBYu4G8zyjz4QKWiqTgoLnNMSBRuPn9J7fteQQiMCRDwWb6HKqueZKUHrQbzi",
  "key20": "58dmYt8nJ5a3jKNujcQshbLuEMJrxCsD4k8rZv44v3NjqSWHhw7WPFdEdYwGeU2fuVKkzG8BAGDSB5YGGCCBKC1m",
  "key21": "4npRHSuvCCWTsevyJFwpzVHnzt19UyaUCZK9wNwHJkSL4G7A6c4umUdKL2KqjjeAoMnjPYGCnuzmyii6gYJrXc6N",
  "key22": "3LYFRZe3xq79WfkeSoTsvYddCufekbDckVi6ghKKi3x2EseFXcTMrsfMvRPFzDTe2s2Zkwtcb6U3yAFvvSvwmkkw",
  "key23": "PT7ZCoMwotTf5SxwNDoMxCBTYSLy9RVB6uPzYYAT35kWFHVwfvyEzWCDid6qNSVfrqUgRYkp4Csaq1bDCBoVVWH",
  "key24": "3K69EWT1rJe8F3rVtDSDWnGQLd8MnxdqGUMES9pKvhVcj4gsu38HnjZXxkJU1WoJZdPcHWA68cAYQuDEcPsnYN41",
  "key25": "qerA6TUDWaJyunDxaDsJiqbMJAR7DNorusQLHPAcoehVAVXF6UjeLvvPWJsdS82UVKdQvuWJx528bnEsWgdNazh",
  "key26": "5HSoSJbDhtMYGTc7spS1ivszqjdFbZJgC3Cj4qp1NXAVVBQJzUokDELWN2e1Rkk3fHrycWkHsNtyUTqv3iBVt5bG",
  "key27": "4Wp1RLEtvHfM8okzykR7kUoEvykgLC6zUME9Yp2eMXcHkyfvkk3dEUeGKQ5h9iunJbDspTYagnR8GePe9iu6DuoW",
  "key28": "5pJTkvRhux7VNF3ZGEy6WL4AP96rZXXxz2Yxhu6o3wkjXzv5pYpevie2HExth3GqVQHAc2WW6JfGdsYSqrGbmzki",
  "key29": "5uZ37mqMW5SDnP2fgF9fSvh3MJpv3pEUr3VQ3LN1ZcxHjzMg7qBX4pWtki1p5ixgXyBqygPmxt6EX7uagdYekT58",
  "key30": "3W1vWE45TjyaaQ9tbtUBfTWGHSytcVJiDpoPhKi26P4o7fuJk1wicUYL7wiLrSKLaW5y1tyXraQkj9ib2rbxHD5S",
  "key31": "2U8iKeHoACVuLTvchNLB6nv4jBAZjd4AVqcUjLj3BpYfH9dCmfvJ4vuCj3Pfk66kae6m8FKbkVB2YphcrP5FkJUx",
  "key32": "3n4GG5MKx5WfqGBzRxmFRjF1BvXQbFWJUA3vumj5tPqMMkPBGZUvSD4YYJoAu2VwbyNJnJ1mNrZE4ffu6umG6Zbw",
  "key33": "3mC4L7FBUvRAEjNzXXyhM3eQM5pWpJNf3WBEcM2G35bMMjA5xHSAN94caC3LXScr4WgEfP6dAcdoWEcgNdp34mc7",
  "key34": "3A7AraAfon8bduGQNQ6E98vqK8pYRX3r1CHQVX4JSPpSUriNzwJMA8EMtiCg1bJKA8bFCGVgnwhXCmEYX5Gv5q1g",
  "key35": "2hJ15d3M5KeE6AQVL35sTebL4SBrHiLnN3gka53taV9wBorKUQSR2G5QHkwD4WBVVDwcK6ip3pvx2vJdytZYb5yE",
  "key36": "65nbSCwbT13zQwPUpc4L9BTxXt5ViY8ybJUDSwTP1YTKacahw5ExUhi9c4rR3YSofeWBw15pjiJeBfq2L2zmjc7G",
  "key37": "QiACiYsehAcNyuKnsxut7CLcHVnNsGYXZ57qAW9mboyNEFqV5gzM9FXdty3FZcQaBpHTVPuJZiv8BhvTqSyUuMZ",
  "key38": "38dHXze15X513wbEWgmDHuQ5229Yt2RWxHm1qx9xL41MV459E4cKLAb7iJb5Q8cLyBgEjnDVvNAR3veU99icLPHV",
  "key39": "2UyUrwu4xu7WYogTGTCKArpjZvMtP3dmNt8A7k2c4T6aD7oLJq6rLzJQX96s6jJCCXjrueZ3PTfnVwvjPSqushcY"
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
