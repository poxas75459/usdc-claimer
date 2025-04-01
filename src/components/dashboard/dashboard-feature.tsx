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
    "4q3JqcBDEmMw3Duxtt3GKnqENEaAhAwaRX6Msn2qWid6emBCATphUFxbdsPReUkNoTUEhdr99uAa95omBDM8n5mF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRHRvm5UsRTonzz7ev5nJcCzKP6yeRNWBG2fuPQJ78ZLvpx6YkrAfamFBWyxz6pb4D3DUk2CD7S4MBqLAgkVAii",
  "key1": "hv9VouEE4g2QUcs7H88beR8Qwsa1JRvXByN7L2HxWPzmPRdw1BtAUy5ys4aJLmMZtW9AGkk83ZTyCAywfUwUWQw",
  "key2": "4Ka2wsUW3BTZy4EcnrYkthVwZ6hwY5C4KZ8vYC2QGj8kNBs1WHfrihYPp37m8bJtCeR8k8QVQegVvq5Xh6EwE7MG",
  "key3": "5UxBgugBgLhK4zeuyprtTnsdjMtBwaBxRH5nvkoeQCDwi1336tge2hNhb8xjLVPpApHuBpqoj4zVcXLXCWTEoEAx",
  "key4": "agNdb6ns2z9uHbLknCNmwheTcSPrKpNza92AXyag2eJbUddbCFBK3Nv6EE8MMR3jEtLSHCcmEmPfA9u6Gu4QGN2",
  "key5": "565ey7pHHQzaztQqxpPFd5mtDuLrFkFKK5WcXV8HG3p1sJWXr4hS9UupLmWPJmYP35RqqQHtBPSmJe3ifbKgEr87",
  "key6": "bbYTTdKpdsTc6ZX7FvaHCxSrY65qstjpRVGZmAPKXHfHDR9vFvLL4Jo7sfTxw1h8amCGtSKxVb7iTttAgwNezCu",
  "key7": "5gs7eAdGUr3KsqMj4XWVNtaQ6nNHb48xLE4mkC2Z7uvMVD6rUGtLkKm5US2sK319ZB8iWSxQGpJDTMqFJuqQWqPj",
  "key8": "4xmNxNzQQ8rEhDFEtWZJj8XbFed7BnAZ2aC9jkAWjEqoZmV1g9oH3kF8i5wmVB83Gv5MdwkLzvxuu1ieb2j74Bb2",
  "key9": "2GjgcJMVoZbiKv4gPHZ9aYsjkPfG6v4Dhc2D9y5wbDfHybtPRu293dWNR6wrgigj3DVyuJahqePPEoLzbTtybhWf",
  "key10": "2uQDhYk2Ysp9ayM5Sr4wB37YrGTpdXPDbmcxVtqzw4S3aBzQREog3WGHm2mmrPBGGGnQrj2X4mEjXin4nKpShJf7",
  "key11": "5xdw7r4cqQeQUBiXDvdxMCjzQRC6z5xqu8hDFHEuYz8cZe49143FWr7TzybzyRwKSzYTMqE17TD4DWCqmKXkSWaA",
  "key12": "5hLM2BL9KsgYB14xjZfB831oQse23cy3PAvwmUfuVxxeM7A1W8QSotJnVGbfvdY61rMopRKnQ5j5eLitf5eeXQqX",
  "key13": "Vc5zPft3381krua6sP9tv1BYZeEj7mcU1B1q9MvnoCdcPL5vmWXmxJpmQ1bz5q6Hx2cXCcCHW1vwhjwm3UUuVjk",
  "key14": "5HSHjwvVRKCJWmm8Jdgmz9WAQAx61YjF62ttmSCMiPNZC32384aXbYf1CYSeoNVX9X4jH7UoYzyMh5D68UDxJF5G",
  "key15": "5FaRu9XLyieWjAPg71wzTXEpx3UmjudK4ywccAuhstYv9ayTNb7xcbfLTWHtgzgmuffzZM55CQsFLdWofHbwMisS",
  "key16": "4jrY9XPJuXSArBURbhatQetMZxAUuJHmTviCmWdVb9n7rhg3cuDM8ynBQLFymQFw7qEnrU85Lae5pn9YPnW76iCV",
  "key17": "3xwNrB9hBgpnG77TJJQBV9XFpY1jvhmXfDZFG2fDm3iydxWWcyopRZNYL1wTx1CXWLZTHJAP8uDZAdcdkJAKCKyi",
  "key18": "3vMegeWo4JgriYUe6TYefczxXygrHb9WikGBeionRgWe3EknAZrVgbzLR6PW5jVCibQyikHi1yPTeFAi5YVP3en2",
  "key19": "31CRjzz9goJLMJnjUhiiiuGFZhiXzTkXZmTaV1iaauDajTBPARL4wVqA8kirXEMUYdn6UNgtBbnZJoTp1GqrZqYL",
  "key20": "amEyZ8MeyAUZ1K18f4UzANUEeMEF4FnTnXehNJzH9fEjyZKiBWmPXECrn55UnddoNcqwUAXRNNqWw6GAwhayavd",
  "key21": "3sgaPpJ64NEVDqpMDK7YbNXeS9N3WWdunC3ye5rffsXZfpf4qc92xbfxgdk5c83qtthdeuCM7Q4TWd5nfPxFepg7",
  "key22": "5j1c3cThqXw4hK2tN5DJu7b1Bkqvq8yjVfkd3NJdt4oTFmNZkiyaEgQF86uFTr4gCXNEZcGHAz9KBKExJXS8uEWn",
  "key23": "22xmwL3tqG4MqpLsLY7kB2MZNiSdp1UjC2CHECm3yy8fbgqKAnUERgJuoCYdLGTBXgF8uGdAhGvUUhrWVmnS1Hif",
  "key24": "4LLVBWvYWXy3tPEMEuXmNmm5oDMnmy6rkWk9GRKwWjbeK4BL17EjBP5k4TKykR1P7ds6wAE1fgDMedR7JmiWguDq",
  "key25": "2yJ7WFeDZ5cSoMTuigXwWL4wDupYymxBkwBFftVZUfQnzmyXF4icpH4DewcztXJKSb6Pv8z4SKSC3XXy1FiYTbiP",
  "key26": "2yir6hgGHZ8KJr7W67bAxHMbCB3bSEA7ZRcuX9vPQFd8AL98Nj3QfgSzWRehPv3rcnqBfpNP7LbpRrXqqHVQstvz",
  "key27": "4orBb8v7d7ecWdX9rkfEUUb69i4BC2sWZEGG8ofwyo1kJ2QQM3AZG3EWw4Jk4cmDZHRi7LYssaYjVSgomKDzuXmo",
  "key28": "6sCLiEKyet1y7ufgDMdkW64KwP2yD11NiKYopuW4CruqR6WAas4JLkPD5AaKYL3Ej4rQXMe2f7dMYZvh6e7TgES",
  "key29": "2ZaHBpoUsBWMMna2aKcsjnQe1GocvVdULHBvjpQSKtiEqpNKQPoYJaXZSnvFKib9pwZVrNHwGE6S8Uuf9MxrYNaL",
  "key30": "5n27WKnpg8pcQ8js7be4G8BmVopHiFfiaA1vaZ355Hu5iWZCYgkayTV8hafpEmDhknvQdUTNNtnAj5scdzoU5RfP",
  "key31": "a4MU19RZSfaDJGBi9AfQci5woDkSnVToWn67ggRPCNzN5EEhfjaoWbF1bzegev1dHA3vTAtt7m2mTXwpwAjpE5r",
  "key32": "4WZsvTVVWkxGHR4XfAWyu698fricNuZGyJrxENq8LHq5yJNpF7vfzVr4oFUDmwebPWHj2PPw7ustuNAZr3aLyL13",
  "key33": "JdU2XvMoy44bks5ZKrFFB7nvUK7T8tDUiodCKEXYapGYstZqJs9RS3FN8hdq6qZhX1vfbsoKqRFrxbz8zaV8aGV",
  "key34": "RLzNpX9kxWKrYHAEH7aahvrBAjgzURq5wEiDTV4MwHWr36uaFttn7Fy5zmuZBBcbhVXrnvfryqcgo76uhydcySK",
  "key35": "3B5EJTNmp8PSYLhXmJp4KoV3W63RHEmVfD8H1qV2eBG3C8bYHyNKtS9DuJEHqgSXbrxoQgWMKEqUEecSTKgEg8X7",
  "key36": "Y6HxUjbGRLA2z2C75TZr4MaYccQx8KMBnjpjtkJ1paoMJ8xFGwX4QQ7ngmHP8DnpuvEFS9NSH612ojXneQfnZQV",
  "key37": "2wH6Lfov24e321bPwkNP42sx91hw84imgazpDfZziN7VHHFptBk459ZXc2j7iybchBLFsSZbXbpw51B4Utvz5u9t",
  "key38": "iAgPkFRUSFLAnbwEjvxe9BJvndUMwUeqKZCbUUjPUiQgTjzKhmFMpSTGGcKMGVKa5aVGBCEDmjFUnwF7rmWiHkk",
  "key39": "WUSiimAHGRYd6uJS3npkcEFoJ96W6py1cP9pf3GtvbwrPXW3gQYvtVwSvxUvGf2FFqLk6AyWTKMdVDRmjABuzzB"
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
