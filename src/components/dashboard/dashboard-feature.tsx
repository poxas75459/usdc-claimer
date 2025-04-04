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
    "3hH7zaz9xZLyBqsq1hJn4Uf61FytzVfzdu5L8YK7zH848Dn244D8SbLmZPEhLjKm23bJqe4o17UE4WiM25wtqnjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHSqS1tw187i7V22z4bR8R3XdfW6F2ASQMmAu49hsGcqYXMwPJwtm2LDJWGKwUBbRqW6FZgB1RiYWA91tVN765f",
  "key1": "4vvd7PYHUc81HspV9sFHy2gnqyyCU4PKjCtLCq4errgCA7DwSFizgQLZzRyPyVwQdHAX773LzgpXh12xjwS1QUgT",
  "key2": "2sVRn727bGQTLCUjKswXSxjxiHUokyThYr5mA1ZRpCNh3SLDFoNpNfoRTHX25vNc3U828FAhaVDiY4q6d7LxDFzh",
  "key3": "54psxJVjocR2R9AFkqG6oKNUBgUiZRXh1taPb91XPULhNLRaqsA9AjmFcUStcHTL4QecfR8j22dnWWrsMCn82wnm",
  "key4": "2PJroCfXTUBJ3rti4XJgkoTbKP66gHsYZyNRoNixDovgry8urAG7uWJzN9nJJxYBztN6Vwbz3YPM23FqZjxCUAbL",
  "key5": "eiSb7BgaCrQS7Br59hFoj8CJpMhY11Zmzr7k4XZg5caefvShryKs35p1oQrNRgEQBHzq9obz7KSnhCGBTauuxoQ",
  "key6": "4PvRBS5FJk4M8QWUWeA6ecjbEsYk8SM82rXGYRUA1Ei6SU846aY8vQMKuXKaRijLAcSasQ4o1QeYVHq2Whw3NHya",
  "key7": "5hXa7oJ1sZiP7DRV6aSNLyBQ6u61VkwJRGYDPtnGpf2tr9gG3nMoB8onXyoqSrNzGA6AcXnaNBsN2UMNPU5t29x1",
  "key8": "44UjKXH4DBqvUZyT2EvjooscVb5GBM3SCdkVkYj4owY5AH97YmLyxXvnxEHU18ZpExEAxjKvXjQPosWmRp3gZRfL",
  "key9": "2qdsKq4N23gH6nGutJa53LZbBVm4SM2MwdzDnUsHQfvbxkyq5QGAHheZnGCKwGyuAkMQMHAnFFhJ64BCaQGcGdKY",
  "key10": "4XKDDob6MA3gtemwjVTKEZ3d8zGZLm9eKFbC5twTmYRHZMbGTu9Km2WVrsjY2t3yPLQh1E2hMDjw9sc9xVCzXNWU",
  "key11": "3Su7UrQwSD6jmHJuRh5ibQ6t7qM3tJ5wCADYBwyLHZnveDLKkqiemhf9KnjtK6iaddVx1KEahbjyQ29PPLXpHfV7",
  "key12": "2ro6DAKkHec8duQcfpmzaxspjMPHvmetBKrPR9UUDiUvXDUjSsq2bavucERWMhexnVZ8zB9p2cM4yLYxzeZrv9fy",
  "key13": "5thEaKB6xjB9WsxbX2hcUaabvehnfB53ztZCf64prU3m1MXxpPRZYFFpKcEUqPocrPWMruwWro7wtdL1ynY9YifV",
  "key14": "4vkUHo6eQAU6GCj29TBDJuDRFrxVQbf4rA4fL3H4McE19hxAMn1FM5pbZUAhXJMJ6c6eFujDXv4h22XkHJo2eFZc",
  "key15": "AyxzFPYMPhRDSqp11eiH7Q4KmMxBCxUasqHSVdz9yev4cac3fjj11u89J2hcR3ffEyha2T4LnzWRZm1ofSHrwiW",
  "key16": "7dFgKHnF2oU1TwHRW8XtFSCMuNEa7epQrBJcJrMVWqT2Ed9v6PnKdVUtJCYCJCBJNhSNGnL7S5W5gbHcd4FMnUV",
  "key17": "3gvFb8bb4MuqC34o94HGRU3iNoxr539Kd489n99h2bSvfqmNjgHSXXzBtt3hzDTnyQdYJnCAEnpdob1gSNswxmjr",
  "key18": "4jipYSPMsjZHiSjf4YGvx49wpkHgwqU2jkUGkA6uhVh7yaeqgY7yof3p2aCGX74i2R37eviNFhzRzSBa9cvYHVDi",
  "key19": "32mRNsHjD3KHpiJovpQEbD4e8qf4X77wticdZk3mmmXTr2zBvrVq66EQzviFWrfQYQNS8soJV1Rrmbt1ZmaNmG41",
  "key20": "D9ZJtCBmoDKKYhnpLK5LYdvnGGxVWw9keis7z37Z3z6dTvhrWVRNUo4XPcGrfHKCbMSyRSH8JoTJPTfj7bduPZh",
  "key21": "Cr8Zk9PX4bzL7HnrTa6gsnnyJo32MKsLFda57KHhyVxnbZQV9wK5ykPhGdybm5XwGvMpLT2HWyr12Zj3sMhaQyD",
  "key22": "EVvtyM2NBCv43ysoviXfza4PJyT1GNrPqMpVz1nywb33zr4dRaxkiX15oq8BrqvYCN5BfJtwrdFFxYft8ri65Pq",
  "key23": "561ceSvxY4zYQnFy4FKczoJMUSvcQoRKSijMzPeUBsoVGLMQdbFNSEuPEUx3PaAwmnDubCV2TQ5NQ5EaF5NMzkwK",
  "key24": "5jeMRbeUCM1jM2JUxZDMWbDETKP69T361QqXFVb469aZ7eVegkM9gzg7g27oVizJer5rF8dkZ8fLkwGEJpEaxZo1",
  "key25": "477Sd2pEm9WuCg8e1KiembrLSJAWWAjAdTgNRmeHgc2no6K3vjgCNDLinCMJxvbkPpHPsjw6aa4r5Di14n37LSSH",
  "key26": "3ZDP8p2zVnu4f9XuwNza2EandYeFxvLNmmas9uEgv62iUjapVcMciZoBSGrXvsoKtZMxAmu7UxY9TAxAMN7v7qNZ",
  "key27": "2KnXghcG9dC5rdtD1Bc8d1MVPxTSXanUQgXc2XP4r7JLmgVupPEiEByyBKtBaQi9PYG4tQMru8RobktsXyL6UqbL",
  "key28": "5eKP3ULg5ZMKahunXxQbeWK5NMQkdbP8H754HUdPT4Yxp6Q1gKUR7U6sTsqmM3BFWafmXQmXVTVAe2u4dmxGSV51",
  "key29": "5ecQE34QWsi29rxT3fPxcxw5Hmz3HSnfjmW5as1Dina9PcvKwK4AhyGiKqqfr13RcUEtejiwZZcESqEJ7pEwMxq7",
  "key30": "3DVLPrTu9kY4ZvfRjVrQTTtEVmRAeZ7zjbBZ69yx2c6eM7SKe1uRw83qN6kLmQ1HQPH74c7ARjiNQpPw1UefdrrR",
  "key31": "zHaLwoaipK2FqC5rMoeSEu3LRWrKM9YmKDUotyKVBdcndm2Hj3cq6LKHmVk4nhGatt2crnRnoZkPSTX2dzgndCy",
  "key32": "2fj9k9qAFt8XxwTqejJwzxXwAP61Et6rEkM23173e9XXeQd9niBV9J6WtVfQeyB718pC6TU7ynvYQ41sChhzACwP",
  "key33": "3AU4hrBNd3Ext46dYM2WoptLYpbjAM55JdTBeFCeEMCtMxUNP25TJ2YJ1ECwQP7b2R4ntjP9BATFdZi1XGBi8J4X",
  "key34": "5nRemuBKK3hHFQKkqNxhF6qQpz8AHuKFuWKiPxvyjo7bDMaWnGa2dBXmgytAHjCj15ourAPAQfcy3sTiFammJ43g",
  "key35": "z7Qo8Ee1FfgdKKURsFCehSQNqq4SNLxrzudEW6epvru8NG36t525kwm9RKvcxiwoYDwQ3hUPYTdzRsEtdFZrAcy",
  "key36": "55cxPYPDRfPh2BDLidVUsodkgpULAbmEQZHrLaKNzkHcKPoFyjWLaoEv2mTc6S9mzCy7NhVJpNd1rsdn9c7fX3kC",
  "key37": "35WPLq6DnLdxSg3x2BT6kJxRH4W1WiQduXdpeH4ubNGQiEKLe7uDgxEYdXXzWVjKAEfg8E1Aeybt9KLD2AWeuyBu",
  "key38": "2J82qvGfpEkUEc7YDQMp46uBNV2ywDbPVpVG3YyW3ZhRf2ejv685d9ZYJRopw3h1TT5UGrdYqG5eEzpECVrKEUvj",
  "key39": "Wm5Yc97UcaNQjtsSgLhzrhQnK5mbLYaysyQhAZPjusBQTUfusLWEY8RvuR7JBnZVaewAL1UMWG16GcDHxnRYxcJ",
  "key40": "529BeUr7nuanQQGZAYg1TPoWBcmJ9BRADsDJydRF5aCiAPwALCLjrZLGF2kEtWhyT47t4nnSFa5bNRB9SyGg4tuc",
  "key41": "4EZZp4NEDS27S9SwA3iCVa4qtDk7C5MHkMmPb8NUBErRoecYTns9KASmiJeiUKT7hwKE3jvn9iDkzZVHCeq4T1ck",
  "key42": "4mrDtoWmBkgPwnhiioqZtEU3wXUjD6orJ4oUXxZoXopWSkVsEBxPeLPMDq2XroiefkERBN5whnsGtwoo3N6zhZLF",
  "key43": "66TE2Jv12Lrkz6Uyrgy7umhs3wh6taNUjjYMENjyugMtmmdhsTuxpG7VEb6LQjwSi9dXYFDVxCP6R6zpfBsCyFaS",
  "key44": "3sdgE7cBP5otsNnC8nDiBzS9PadMHqcQyeVghhGetvDu2KnqfVi3QyaJGLkSBHUxePYRgEKKLrLuSmPD93Jff9jQ",
  "key45": "uUJwLwaoQHVpLD91KVtcRkM8iXfuoV3PkCc4XqBBTFY8mqmgQJLh36jZgHaU2roq4LXpfSSC2QGa6cVYYvcfVUa"
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
