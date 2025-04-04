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
    "4JoezhdJ2KZrTRVPQGKZfjSLkiWuPtzuqSfnugCFj8CFBahLXn6J3hDPWrocHcFtdHKtJk524gf6TjVRpNTtfoMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBemhMCb3izk6FssiZS1tJK6tZzUc5uzPchUReQGyejpc1WnthRXj9wRZzzdZ6rsTT3aVHC6ANq2JGjxSgUCe7L",
  "key1": "5wdKLkcKgKsZiPQvaaPSXU11JQdwm6ByxNMhBRNhnuVffttevGo4Wr918MjVqXuGJPaZB1jBV8nMmzDstsCqSBWx",
  "key2": "4cPrv4h8WdRZmW8qWKtTKXLX89RnrPX6ZfYBeUcEgVByDo4v7RYKEGHyrhYDMEpUyA9mBZqreYi6hgXqXjkoH4Nk",
  "key3": "qYPjohQ3vm3PTpPUqznvwWRUZcgZAzdgbqFZ7UqPyymnY8rAE3y3Vx2uCzz6HLbSHRw1vZQM2xayTmMdyrPdc1V",
  "key4": "dE7WgMX9FdRuswa5pLvWwJgaTLSB3cN93W4suCZwkb3GWcdYcbytXdDG5aWEmufSEPyJpHDL62NHXiEmDixEsJV",
  "key5": "5VpKUqMX4JtSBuqVvk5FpqXnSkEP54oYt2qa9ekNSQT3KN94BW183DVeFpAmrru7G24ciBcAJQuHYi8qbZSseVM8",
  "key6": "2pgBa8DTdgmMxDLTa4jTqiWW7ZbwzRrkQozT4SBgMvSYZ9GAf33ywJoCGd3EzgRAQxFNK4X1vA1pMw6YjYBUUNhg",
  "key7": "5cL2wjzFfzvtzcQ4QzgNB7wNcPdJ8HmNuK8EzHgUdKwC66B1iEWXKBfQvajXUuBzAfS1iiYhTFoummtdHkZp1grB",
  "key8": "X8Nr7eBtY7STwAd51rBofqnwhbNHeUYGEN4nwJjuzVXkUeq2cpJnTXMSh7U5SNNgKCXcX8ipMJyvVcjqMhwg148",
  "key9": "vnqE5xNCWke8sAWqxLSsw9YGqQoDC8LAN6wmv2kpM5FfuV2bdebTwNudnaP3CEYruUV7XiktLP5eXy6yX3gDLVc",
  "key10": "4GVFv1qejwE57FUkxsEG139wBWnX4h4Tv4Tdkf96W8U5LkUdky94ktbYYCEM2qkdT4achmv9uXZRt44y1AacK2VU",
  "key11": "2QE86vRLaRyTXF6qHCm94kSyDkwMnTGysYzGQBQEmFyby1LrSpBa22nKExgGdx1YTS9US8NM5hTg1QGvh266CyPr",
  "key12": "4KdSR4P5MDGSSVx31xP67iyEiJsyU8nGBh3f7acPBhDFXEVnC2kzbenxmBHgtBH7uGnm7vqyovvZBLYNrfWpRrn",
  "key13": "Mo2nyeN2UUHBDT2MidDZVDdwH2N5wAwCVbVdzcBtYTTQSCCW5yGz5NGQEoHq2pbsrHXN9bzvxFU1HerRjsN9jjM",
  "key14": "2UkxNVLCAx9RhjyP2rjzKHTQdA1tYGs29TvXUxFw6yLzqLpE595Smn16kFe9a3hkfwYYfejid587JPweVPgpzRsi",
  "key15": "23UTSUox6KSYDUT6tpbq9D6779cSizuaoHfvJTmkYCQHMVdRXvagmPZE2wT2tibf3M7fLBU47jaY7sSsFKj3Sf3D",
  "key16": "4ZKtXKWAGeqxQQEtExdLckxzvkhbcLTd855kCijKDaWCNheuCutu1yxHXa6d2QmpyRFbEurJ18woBBwUB8mEhCgm",
  "key17": "5TDTfGHQM46H3ckuG6oyoMckQ4ufeLN9AKSXQZg11G5W9SiFPAhnBu4xWWEpwcQF8hEhz7Qwdk1ipuLFvGVd6Amg",
  "key18": "5KqKyA9oFZaC3WZYjm3xYtdMKrH8gurqvdfBKixD7G9DLkcpTaReKRtxE3saHvekSxhKNkrytAzSH91CMhbKHKqu",
  "key19": "3pzn6ERUURsunLmJKUMppazgemT9q29qLwc7Jmwe866P4ToYgJVdgWir2f8VHY7gkBJHN7cozSNC9VBvYYGFkSWA",
  "key20": "4w6nE9vjfLdeZsxme3zHh9AvuTX2w3mekrb7fR9hicnqDgvP7JFdMqfPUWEUXSTM8B7dhB8unNHFexahdjgsnWYp",
  "key21": "nNiC68t4Xy9hmw2LcPXfFpmP5EiqZVApkHyjoVYko3zy6FbjuWbfP5M5aWs7RQhA62t5hjH8MAsSHSkUZNqQrhM",
  "key22": "4GDHxMDjusuZR5aegYsWRCQrDKUyFmNkZDWZACiD5njQ7fusDLYfsCBDRjYqB98h1ZKbXkreDa1kFhBFG3JgfBAR",
  "key23": "25GTAEjiB6of8EtttuhMEi9uLi7CDaP62vXJs5CYVha17DgqfqU9NHqSLaJCsgZvJAXN2nfB4K9pv2pzb3YURtcX",
  "key24": "4UpnQcEQmM74AZYqzjrB9CYGVHdK7G3Kq7mdvzb8DTwRLfwYhJTafJk8gUeEdRPhtgT5U881aq1f49yP8ZnopkWH",
  "key25": "cYgsgDB7EjSBMkaLH536oUftE8JnWWKSDwjnS2t8msES1HqVxQNk9pMept7pavHyCevwSP6aTnbCWu3JxLQgLbM",
  "key26": "HC4Au9SCFCXikP3fxZ4a92PPm5TkGZ1Y3uAhzb7ZWre4pP8fYXLpxNJsd7L36PQmzJNAW9PX3XLgXw5iSbW2iiq",
  "key27": "5xdD2mLURzyRDjgQJWgEZnAU5jKG3WUse7M4cYHhkLfyGFj1mMp6mSio7CRqS4BdMbD7C2zyQKsiTpcAr6inQi1C",
  "key28": "59e8JTXXVghXPfd4GRsqCpJN2xnm7LtpRxRAB38Hb8GFmcigBhviuPANJxhtSuynHqegeYChwXJRDRNP9KYxgLqX",
  "key29": "3UTvmXc4oYmBVmZSDwg789P14penk4zTVBrEyeHSBCcWJJZRQzzvdA3RytDsT1z1FkCzxd4whK2ogiMBCRHBuabZ"
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
