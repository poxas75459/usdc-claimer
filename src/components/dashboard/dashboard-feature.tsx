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
    "ha9RYXdrQJMomTQsbojQT9Z13ameVGRcw1TJJFC2yanqCsKWsHMHCg8UyUTXp6zAbARFTeSJ6tcTUWsV9bSeKNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uEob1eRXvUcj2pQkvz1jH7RYLqNo9X6Ugbpcjw1xPYUjWTKrvcBCwRc3jbQ4vuZJvbWjAZN3YkfmKRiQbZrgM2r",
  "key1": "z9kzvv6vfZbmbRxiKDSL3er7SjgaDNp3T2h1u3UNuV9LJYsr4qNjxGvuYwdVF62bXak3kkK98gys11U6pfMCQvJ",
  "key2": "2MvBGNTgkXWer489usdYgdR4qynPk2oEkDZR3TdkfejyECKnvvfaXi2Wdvr6kB5XtJw5j5oXQxVdPE78fwwaz4xc",
  "key3": "4bcvmvDzZeRvzs6HuzTSyd6TU1u3nLpsSWwt9GtRbkhZBrD4E3SktSaU6oHjVGg6msV18FE1LiqWKCQhJq8o5EMc",
  "key4": "2s5xA3cNtV3YH5JP2yUTMnydWoQF5C1v8joP3QBn512KVdvrxgWTHxjY5CzMsWC3PMhV4cXjqRoDyKecUCBLntev",
  "key5": "3X3Ae5ui1NNNsrsWbk7UGo7qboMad9Q6gZR6wMjnBuNL6JxowWFP29oEeobpnb78xE2bugKAn7TzeQ6eB4VEpC9a",
  "key6": "38N3d2g126aXcX6KcDDNBrpAgmwriJJVAJEXYWiD4agLbxs4UHpUS36LD5E8skGSHKqGNPztvT9scmJqT3RmrpPd",
  "key7": "4EgZ3CzhfQu8iXUBoWxScUkg1WJ2FJhgJdsPkfyYAQCnMMwtvo8eEDT5MhaAdBVMPZnhwNv6ZTQexUoz47s1gd4n",
  "key8": "3Yy3U7CKbEs6sxoa7EaGLkNXn5Y9HbLsGLyt1Hnvcrx1MZcvsp7GaVZrJ2xKUmvJPb7hxBvUa1JmVjvd9LQADsyz",
  "key9": "2rFNpALt1Unx6QREhTgwTsDpmjSJD9C9VG69Jq6GaQMaVPyVzQCEEZ4kW4KwjedgtyZmGwxXG561wns6hNgchdRA",
  "key10": "3gEyBZ8tGPD5wrZDtLfBb3rqfuZ8v1J4RkvUgutYjvc7fCY2M7qjfeC53EwoJKuy5bLcGUQXU9SmPVSd3wuKd4Gx",
  "key11": "4cPDMHbepB7ohbXtEhcdGAUuw375DkZCBmwPmzJ4cpe8yJfbhsnh5WmHHzbcM94R6tjgnvY5c7Md8KQYV5vyBkov",
  "key12": "3cfijVTDKtrczj2gvn17cVjgvN9eW4u7vAcBDwZ5E5DhYoRBauURb26fHuGxNTGDR9gozKHd5PSazmsexhhnr2ad",
  "key13": "3LKWPDoKY2ezbHFTbRnX4ND6y3FCZz9yvn9kxz6vozqSyH2jNJBXDsgyPqqZ75NL5A9xx4pyykPJ1GjBM1FAqhdg",
  "key14": "5ya78i8AEPcfHah5CqiU2hj7FhJgNWWjag8QWVKQKPia7ZNPjdWpGvpHMXt2DnzK8jdfnXvD54EbvGrupUjueFw1",
  "key15": "4shPnHGFkNPz4bQW8d9UmFyniWY5TtT2f25MAF3jEkAsh6Xv64YwdCbN15LzqazEaA81fxNku2kC3BMT9iiX9hmh",
  "key16": "5CyiC1jb7yGctsxS5YxaX2wX9QtLaFfyDmqYEJYyRX2GTtftQ5aD8oLLc9hYpr3zQ6pJpJck3yuZdYpozfFoPUbH",
  "key17": "QbfGcTp1hg3k1pACCVJMgkBV4LoH4itTH6gdjPzYHUHL3EvvjYpwXsCvh7uiH1h3YusHZAvxp95rMxgbbfTjqPP",
  "key18": "5X7Pf3xF7xfvDvNkjv2vxTbocqf1cGQRiie4G7wVgnQ27goWZJnMqpF1Ve9RVzzg8kWKsEug4WGmKjsXbFJZTBgU",
  "key19": "5C8ygSfgN6PfKcBcDgaYHe8nTkMauUvC1k8qyfbFspTSCfsLjXwppKVABxqJ3Lz1S66Vc58Q6rPytwCfT7CQL11o",
  "key20": "71uaZC7uCEX8ctCmYzpoACmsA2BnJ96WPw8nT6RxR8aSJQ6PxjqgjL81MRiwN37qQBdGiEx239dt45yNg3TZY4w",
  "key21": "3Scmqc6qzBr7PDi7wsc5dCfoDb3TMHVLo4TvnyDFizqUuaCGDmDgZCmrFW47LJprjQRoyTHLHGq6Pgqk1ajZqcAN",
  "key22": "2cEeVPc1rsrkm4L4UgBiMcs5XSqiPxJFGDNNnfggFY6npoLjZd7YpTemqUJ8uocJkuBR3oZBnrgCzVo8W2exdPvx",
  "key23": "2BesuJCf65kXKUGQFrnmErUpJhwsVXk5seUpT1sRyrsTx9yNA1Ua8PshzWMW9Q91TArRfiXFvrWYbaH1ynDUPqzb",
  "key24": "2Hph87m6yx4v6A5HRpQ5n5V19ELtTHZsBg6UBZ4LJZTpzm1PwZZA353Crt4VGzU89PbQVAayB8r4NL9MxsoAbZdD",
  "key25": "4LF1bqXZjQr2FePGVRQSaJutCWwvyU4tQ9E8HPWHJPbJX2x7C5LickuSrx5R5xt689jgNEXHoNWvNp4tth6EPbFt",
  "key26": "5DHME2YZXdhBeaRPVMxJNb2dWbqkvNwh59BNC1CyZcezQW72LspaR88PwCE6ZkSjXUC5dBtbdnX7grNHM3Eh3FkR",
  "key27": "5i92k6LFiQc9qtDgmb6rcGqTERZDnCWeFQu4UsjMbaC1qfoHy7vctdebwSqMEnSzx8QpbHY6ZCcVYinZCyMsfBci",
  "key28": "4HAPggPUeeSmaS9ZmTVyGYyLpdYFfW9hv5ZFgXKrXaCaowABQ26abpgzCmMakXStCLJLkhiEUPUv4K7bZTjF5XTC"
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
