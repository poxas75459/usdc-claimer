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
    "1QkYGPjaq284pzBnQoAMpMjhi7scwTvFNdvzPqcgkYALRUsPdsM92cNQcdL718enKVAZia4iDKwuQp89hBApjHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3scFuNirAFtzMGf9ACyB7DZUCSiVLpJ7DVjarszchM5e3FkvK9KVmp1vPKixoTZfCGARUFwhWmDiYcezfM9Rg3WY",
  "key1": "5mcjZDwuRW5RqcoAsuZ5B4EUXgtbfXQUfG5z18fjkh5CQzPCzEqAzQrvDJhT4d6ek4HzS89BuKZYCyw6WY982nsf",
  "key2": "5gVu57XRYk7eui6tpxUk2d4xEqcxa3ZDD7gUU868vJixbsmSmEHTb6wmhSAN4KXVLrkA4zRND29XK6HnTJVEnL3F",
  "key3": "3UEKxzcuTKfAWkKAEdfdepSrE76pWZ7WmAqoQnkGWJUgCEZ4S7dMTj5dR6YSKRS9LAgYWfBDGHSHD6hefZqGuYMH",
  "key4": "31N7F2UzwZfP4NQvXV5WhbUvP4eVmzT8FtF3cZZU1vDSPyS4mZ9oEYdLtBdU5Tk2yFyN3tJbebLdnKFMc5qcj4Di",
  "key5": "5VrDo95zWR8Av84CK5Ebkk9uD5ayFWoQY8czwWkArvAvZnxxqsd9TxTaSfPHbst3zyyLkqWJjvPDgwKhGRuDBVs2",
  "key6": "2pdrWbP8QgLfXwLMDBQvqCq9eUPYT9XEUZ3Btr1Ba3kQv4mT1HtDNbR3E9LQHTuLmkFPBjwXuVwyUBPqymnDuETw",
  "key7": "KmXJYeDbUGYg7FDSFUijQdy4HBiWMCMoTWUJ7swjez316CWkTj5rXyJ43aAHDAQyVAQBFU9V7nbqeH3sunqhXhv",
  "key8": "2wMbQPGe5LBdzrVfB5rgWhYiKdeMQQpc4uYMS45JAEwbJmEZdUoGAD8w2JJmWYw2NujfiMCMYjDTn2Hz1oSopFBW",
  "key9": "4b516aUeFz7Nma63kvKZWMGGcK178nsrPZJfbu8veJGKXFPe9FsipxdGndTMaLwekmno9mrah1Zv1g9xjzb9UVbj",
  "key10": "6D7LFpkKGsoDPkRwscwrsphEFUfFLF361M2oQFk36cT1fKhYmGUmM3J9YMVyHQmjUZecA23VHRip4dcvNk9ydcx",
  "key11": "4Er7xTtkHq6KpdAtQVaDVBMPKsiBWCXXqpFx9cm11wr3BC7CY1sq3JgdbkvRQCSDaba7tCu92dosRPRiVP43Ckxi",
  "key12": "2XG4qzcgUXKnA9n6uRLjHoYvieVshqa9Dz3hASD439e8NCgaTjQEZitPXK1Ew2vzRspGqumAU3vD9JJnamp8e7Hj",
  "key13": "5u79XurhPpQyKSR4cVXvET1AkvnYiPCc4AsuSsUfjeZ5Z2td1LMEhtnnEMYgznHhK6KqZkowbNh8CQTQjYy8z2Vf",
  "key14": "3NeetkCQukpyeM9Musfg1AmPe5puAY3J3jbNAdBUev91K8VJ7Baw98avvxvNqYbS69AtZqp3Chm2gYXqg6fP2GzG",
  "key15": "2huj3uEfxR59LhFPpReg63MkRQauqUhV2wpfvF7i1xJd7ckXuZ7wtMtqPyLAkmz1HtY9qbXobuTQeZd25U3Keb7b",
  "key16": "4GBArf3UpsdpiQYZ4HGy55hdSP5xqxPQLFJCyD4cgxpyHXrym9WSVKaa8JAWfBAFCdWyHspNyHx3qbBaH1tRCkME",
  "key17": "4w5idPRrE8U8Yd4qyuBGF7hTjCgaUqL9VMQcyHHKoyQcjGc75eAJkSVbD7BKHQXJpP7HZpnyk2r3VBVVVxyaTVd",
  "key18": "xKNkwTYbjjoJL5KjLVkdU5nxqexB7PkQefjv6agrAKDycXv6Y77bMnqKwggMP1otLY5rvajnxvxLwcWkpf9E1fT",
  "key19": "4AaMHfr7oC1BKS8yfgvc7m7Bc9auD7QeEh9WVCmPn6rMfsCWRVy2Q5KLYvCLjPiWsx7AzvQRYMSrSMWXmMMEEbXv",
  "key20": "33F46jDVMJfBP56b4WH33TQFyotY245ztG28WPt5X7HBGjod2QvUmG1ZDZnMH2SDjD41gc9hjVN46gbVUW4Vn4BF",
  "key21": "JripZRBED7118MYj621pNupNSkoyzEbykaM9HzHCC7pMASpPjSKvfh3kXzqvSGKXgVSFGz7m87iJWdRAxzXFcaq",
  "key22": "58q9KovLpwx5WELVdX2BSgiwwn4N55ZSURZJDfGfGcw4m8vAGPLjqn9eRbJoH1nwEzXqJq34jRppdSSv9iUixXTN",
  "key23": "d9rnjazKqN3jmnAsRHxqn4djXB4xJAZGgMswJVdjLuzqzuNbJi9yxtRKZV6dW3hSKNA61cLTPcwJf177dS8Ca6S",
  "key24": "4A3pHgmhoAoNDgCYTJ9MJT42owkL5uHot9JC3VcvozNYvnSxeJUm89qJpKb5NV7twex1kcmsiMEoFqJA7BkCY86q",
  "key25": "5atVoRJqwFzgnacrtJAkrgW6AKZBukoQ8UgKQYvEkaE9cDNhvwV5eyKqZPw15uAXorajnZvK6XwvameMYC3iGjT",
  "key26": "5ztzs6YsMnvdFsSZ4Xe2K2jirBUtnsNCT87AssfuJuWUopUB6e3gMVvfaUxiCVFQoo5d14HZwgE1ScYiK8JDWhHt",
  "key27": "oR45pDG7TxHBW56AquPkT8i8CCRv3gXESBc1opZjpDXRMT8j9TZeg6LqSAca8YggiAxxTUPnmr3yX4PsYC2VtKx",
  "key28": "wApdHciNS7cxbGzMHkRNUZcqt8Rd2u6pbwMpc7VrpmiZPZxMLwMuctSS1yVWZXxxsUEpGud87Rm7eKyaPAo25Gr",
  "key29": "2CzmYbuXnnuKvPAoPFm5YtLQpmeUu1s7uVXMD1woStqW2G9uDfxqv4tEU6FMJKtCxVESSp9fsrqJyviFb7EhUT5Y",
  "key30": "2VcnvQXt4kA4fyHm6tbUbixoLsZ4n3jyLhYNHS2AEdKtyPHBmUubc5zZEAhXDX8c2y5FyurUQ7zKkLSLVer1UPAQ",
  "key31": "4Nikp3oyzSbxB8Ty6EaAwcqb9nGL6Wic6KCjSXgBcgfB8aNotooh5kTiSXrQFh1aSU3wNrWLqqaAA4cM6wsCySFq",
  "key32": "5i9rzp1WnosU1aZt7Ky2JrCePC6AwhgkHmXppBUw1KdRYcyikB5Jwqwby9UTaeEyCLZDgQETTEhPsgoPxhVEFoxM",
  "key33": "3XEpwxZD2bpcUGDPyaPwJv9eWnEKRmTYx1y4HRhAN76fCJ9HudhswiAzDAHodiJHzXbFSoVVBkHXrnaute4QQQz",
  "key34": "4nDK4ethymLkYbR13b1cXjc6cFkCNURY3dAyrnPTg2RGpxVYjo7RVszXwKkqV7n3Yr7hMevop9pddmxeWwnyVqbR",
  "key35": "2opYVWWvRCSzhMy3jTJFR8GdW5MiPzxSVhRoxbBneY7SRMMMXND1n8PzMahrTnwAJ7uLxXL8ZNUruBKHjLdF98k3",
  "key36": "2bhBKwMKhLhSZ4N7xg9EQn3yUaYevRj48fuXy2BahNJofVbKPviPchCh4h2hyfmt1qb93wEtKJE2dtvgZyNn7Yet",
  "key37": "4h21JAiJrdFc1cDDyo9BvjGLmZ6MGxzd7R5GCyY66VBvrTc9ZrV2qEjC49hzGX1J5FzrT1DWShKpi6gHKZZMnSJH"
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
