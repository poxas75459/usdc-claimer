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
    "5QRQ9bSR7gLsYSmLkTPAmCzfJshNotEre1gatqKx7YAZ3TZW7VfoerzsjHP1bhc1tV8iNxgxhf7XC6MnRyfWNE4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJ35ppFix5MifM1Qff6CzWB1qMNKKu2gCkX14MpwBJ4mTAK6SKQSin4hkWPndc1w2nee2Ys5GzkoaoBnzPVjP9y",
  "key1": "3BP3G7Nwr6yrqdxSi2yET9XHTKQzqXZYPaVhF5VbX5ChxBXkVFeLjeuMB1BPSvZ5PhKiJTRWwp7MyvQJwRb6Kc4R",
  "key2": "4igGhuDhzG3JMnMwLhMcnrErUE8cPLULVECNzCSZJGJP88xBLbxUhVgr2uRD8U6WE9rkkJPU2Gz8JdduzuHwGt98",
  "key3": "2YxwGfeRqkBh5DG52oVcQHS8GR7gHFMmXAQJ7KZBnn9FR5FfqnAkwwo6hvZXVDaVq54MWwD2LSyfdUkDRBeGKJuc",
  "key4": "4jLwcssT7hsDqbE2dVBxwoVomgjuCdQRSo44JwXo4E35y23H6Yo6yGiindHKzof39TWzNAKN8in2oihAntJ1uyTa",
  "key5": "9MFK8JcjoEHRd6Yd3EcukimtwCE7biV7zKnTaS5ZJ4ASrPnnhDSnpyLQKrptZfN9jWYkdh5FZoZQV3yaPSs1T6U",
  "key6": "5v2wfx1TDTTDhphipMNvJw8e7joMDHPp9ooN212xssjzUqKs5MzqmJy8VgbHYbfWLY7aHdRrdNRU42GUJqJhNaJP",
  "key7": "5mSuXu5wUktzLpDS6fgKooAWZScZU198aHUBA2ypi6stMPzs3iufLPk1ji2xAtayUBgfNgn8z4ACjx1E1G1eAuFc",
  "key8": "1EDnDS2rqWamY8aqyUtMapxgDxkfS56WCxVvwNJZMFU3ztFps9XDy5U2JWjpqN5z2Kf2ndcPCivghHzTxaSndD5",
  "key9": "4xCWXhKgFUZYzSbLtpynXXa6cvXPAj8fLiFJJpJteqyPcQMmTk6t5DyEPK5mmgSn6VtqQ5TEYaPn7BQ9zCd5TBPs",
  "key10": "3L6vZQtzynjEisK358yWn7MimaCUbL89hXjZWtXoCs1Cjmd7GyJquduDhDAo2Wu7UDvAqj8fQkssT9Y1bRiV8dZW",
  "key11": "5oPESu84uA1BZpUFHE2RSihxXSib19cQZ7YUgXs5EQjHm7w9oSCzDy21xg5ea1ihiDdr5hQQr4yUauUNqhCmo6Ri",
  "key12": "3iS1FXzRmaF7xPTkuqsz2HxTXxkYxQ989QEh2c71QxyAzhdR6CSgBVTY4ukiSops4wgVEGmjQc6VjFpygLk4FuPo",
  "key13": "4a3MWsbtCRcRVuUYKcYiC6tFijViSjyS6fiTeeqUVaK8QKUTTh31icSVaRxeB8rHxK8rQt1trguXXga6mGBZ6a6X",
  "key14": "3b7LsyARXS869QSPYG3hZFfkEFqrqbhU3Q2VzCD3o9GpoC8c5u4B9Cpku1fUsHzNCGvAexfVySPi42wr6QdLsLcQ",
  "key15": "gwzvbt3Z3yzf7jTgsfjT5Bru312y6BBoE4txWpBRBRJ76G4Ywaa8WFZN5XNZPjFqzdzzrAWbJfKwo39Dwn2o2dn",
  "key16": "3XmA1Vnk7sSF5C5umm2ScMyGacxZ54tAXqZLSm9HhVrRs9Lete8h4pvVLM5mATgTeJyhvrbUYMhML8g74DKAtY5B",
  "key17": "5tBs92cJnKaeY7Rddej6G4Kf7HcFkTKMGjjda88vLMMTY9gSEPVp2c6qZmCz9P8ivDz7YqdhvVF8jf5krDMcdoDV",
  "key18": "4jSKqDW16VZykNDebQAuh95VNYrD1rJTZTcT5UkQYaB4K2pMK4iPqzcon2vgReUxH1C43KMCLPFR4qoYzGb9kcHt",
  "key19": "XnLXTdUppCdpMJnsG65ks8KdJbP9upMdkYvXYQvZxHuZB5GjUTyykj9nqCrGh9w94zue19GWZbBSaAL6a4Gnk9N",
  "key20": "3UJmZRQW1etqGHkVD1WrDJFCK2QG7FqqpZbUCLV3aBYZNJ67AEhyX7p5d2BzQNr1xWtZtFdrtUrvUuposjMoAzM2",
  "key21": "64UTmjdbzpTRU8ENSknaVNPhfATV3zmgxdo2oXnmJWVQzdrciWwNQxFMDFUuZoHXwTNL3Caaqj13VEmwi7gqwMqd",
  "key22": "4BMwL1VuMGfsu9hT189UVrt3rQEPmZ8sWCZ6s8ctvYHtjBn6p5HG9ysWm5C3bbNCDhDbtew4n9LS8UguUAea9zBf",
  "key23": "zjhcxEdumdqa2u2iwgTTbu43XvRoRJ4CRjEHuzScxS3su6DpCB1ZCxfyvpVhyN6uRLWFKvtXS2QJP4sbnVvCwMM",
  "key24": "3PSvb1yJ5R8R6NRmh3Nvy4tQTevTqS4ckBxjqCNVaYA16khkWCSKCRGgtcjFaEEM9A6XATS81cCSHcdLPkmgfaz1",
  "key25": "3EmfaQE4WbhGM9hdcJSDtWPAB9rctm8fBtqA6KkjfMrYNMHsQdyJVcCpai8jHatQE1An1RWHJA74r13HSPYQdMPn",
  "key26": "52FUeyK4c5uZdikjqmeJE1Mzq1mruRXmFMwov5sAACgHDnZ2RoybiNzgc7BepR4nC1Bf6Axubty4pdDbPT5ZokW5",
  "key27": "4h6e12jHZWBwSZRFujvE7TRG1qYrx269eqsAX8ngAfxT8pPgq2tREsnurGKm8shKNxc9LdscsQFYfK7nbCMDyRT2",
  "key28": "QyZuj54kB87eeivPBZXjkH6tfZQq1BgqqJdbN7RJbu25rHLq2D8QPjXm3zpBKmWD7nyFxxrxjBK5eApyiDahk5k",
  "key29": "3UP4fSL3SmaRHjGYvEhh2At93iAnjDesXQSP4jVX5ypNzwpdbHR1jEDhnrjAG7dJPTPUvyb1qH36BnnMP73ZtJWb",
  "key30": "2wrsaaApMuMtuUvXeEQWxy5hGbx126zN3CKoNtVa6WpzHfUQ2SGFL4UhhYs7nJ3BWL7ChGYdQ5Tx72iG8bQa8wei",
  "key31": "5wDTF2LwsBAriWjQGd8WwrPNuvmP6bsofivQgzC5Y3GSzxvoRByDNKjS5UDNY7w3u1sTLyAjuzZuq9YXkVMpnLe4",
  "key32": "5eurzENuGrsuxvpnfKK9RSzaNXJUR77sXDgHAauusHgjr4iMy79qifBXnT8x2V9pBi7La1tH1ELrNTQv8AGaje9J",
  "key33": "47f7yRHpPLKnD1KU8iXVFE2XSxrtC2j9zKmA75n9tDkH7vpNryisE9ehXuYbmspyLosuEH8ZgoYo8ZwBhpteSKWd",
  "key34": "5on7WGWX54mM9kgLfyZ2SuEAnbRyQSJ7v4S4cdgZg1RZuLgFw3fLGaq2m8yAgSF6ty6uXc6UoT9qHKdAdpnQHMF4",
  "key35": "H93baFMyUScmoMLnWufJpekFzcZKWBev1RMmB1CbSEyTkS1KcEJ46exsYiyun23wnTUKqz2oAzkKFjMYp9FqQpM",
  "key36": "4WQZQBhPWH55SyrdJpyuE2FiHFhV3DMh7mcsEiXEMF23XoJACoBnfK9Am2nwiCVjZrtUGkwXvpJc3xqbBMKWEgtc",
  "key37": "3yrkVDzYZVeExS5CWJuAf3HMNtAVCVtuyymU4BCPpc6ZrVzmfGYURPWA9UfjedUWqFVwR3S3AFuwxjXoyKHkrT4c",
  "key38": "4TGWQpBJfB3ss9BgXDwQngZA3Ze8wDG5LFqHShQj9Nvs1nLxzNrJA5pUYqv4PLiH1mS4UUrFUhVsTKCU3JGS98Z3",
  "key39": "dQJeA3k2WMr7oVtrXm4aonpNFbLUwAZVCXy8Fy8G7dRt7dGi9SvAPFhHFuWxkdA9AjSbLnttg59pTQxzfGZeL1K"
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
