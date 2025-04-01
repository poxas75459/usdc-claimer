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
    "3RyGt5oEkJWY6vhTNw7ySLao58hNpdRhbcexRFggqSTjdwgRwEKsWqQCp7WryT9EJGvvseEHQcX78yqnH4BczwX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgjsDSBYkCaCDxEaapLcoqbBeT3gZJyre7nztnUoEZPCw4vpG2DzZbGZPZafX5gFtebff2j1JrPWVkgZBPZ6hz3",
  "key1": "MfCV5GwUYGtwA6uisgeysy9aqsj9RyMi9HQ3Wp8zYaGJWaK9SpGZGAHewjL4PhVdSJZbB5Jqex5Z6HcNjohDvim",
  "key2": "4mq5d7L2qbrrqMP3M8wucgzss5LQaqtHr6UUotjHHGwGUXd5W2cKaXbmK2PY53HpQDXB6K4ARYThPTaUjtS6Qm6q",
  "key3": "3QVdFymsVXAdFBZYFeVdt5PaMzYDFaH7Z3QVr9LTDwKrBmrBvAqkAxM5TvqBdkoPxWUbAJv6tzKyw8xaGzVuEiP5",
  "key4": "58CJkuga8wv2UariGdaU7q2xD69yebjUTch18X9px1nsmNp5r31jAKmtr8BntdAUfRdNrXQmauUBZmAuhvuyo8Ff",
  "key5": "414CzMdALrBudNMMxvZRgtYmb2xLmTHeH12GGeze52DmnD4QWPGLzK6cRzuS1MWTwYB63vu6bEF8xg4siANVrz57",
  "key6": "2ompXzeWF9BfvSxvVnbTZtBjXxEpx9NLxnBD1JTwkRPsYvWscKuYNDLs2ukS155yGq4kqcVgy5og8hzzB3cHnsNj",
  "key7": "3rZaFcqNs4o4bK4NXZ8pkkHwUiBptccubmcQ5r8qcDoeKhxby8FcijTSQGGQMfXTs214EmpGcF5PqQxrTYDeawHy",
  "key8": "5DD585r3LMwuMD4qovTdUW78LQCT6YaZfDKtH3QTQqAbNCdyoK4Bgt93fzB6a59FUvwkVdVrn4hBzH3P3X4xDdGJ",
  "key9": "4KTA3ofUyF6QmA5JKTjmNXjq3WzPrqPfaEkJzZUbABaizmNpaA2tu2hRx8XqZsc1ZqVxWGwJ1sLFwK8M1Mty44vS",
  "key10": "5ShELPTWP38WpbMyCzukg7um4HJz6vh9QRWz6q9CbMdimRpqnNuDqXRWnUj8bRrJbdvDA2UYWXdcmspQ1BrkXU81",
  "key11": "38tu1dxhAorMkyfLbAuqLHHkRxVVAZB8PLE1inga5U6vPfZJcmA7G8123kHyZ4B3sZsdq3s42J6CNH1hXC8q66oN",
  "key12": "F5EL4ptKT1VhXJEeVpbY6mDixTTtMpGQ5V7SZ6K61vByq47tqzSZCH7swPsg21wx46G1C63d2ELnU6e5TwBDRtp",
  "key13": "zJde9L5eAaZwW4bvNY8CYGfBfQs9j3oYvpaZZzNdsXAbMkn8yV13scr1jL7xbrY6bynkGUtxW5CNNr4t3aZF4ok",
  "key14": "4fA7yKp6PMxRHFBcDNkburM6RWbxVd4dHjbgjVVaQ9aLiKrjrSuaPtpVEM98pkpAw5b3ZaQKVLS4SCqeLhzYAgnD",
  "key15": "3JnUkq6jwT59T6Mg5qufNJhgW5HeeYEpxZ13RA3hKCdpKvChSMD7h87qCso6844CGdefTsJi6M7zHKMGtoHw1ZsT",
  "key16": "2EwUkAYhZVyPG9WmaZ6cKndycoXQCcq5riBUUSfE4XLpyvvdUQiR42MRCDC81QKtNQfKw9b8Zj6ubSmBD1Spti32",
  "key17": "5534tSsVJXnkKrEZ9KkFvpQJe3yo5wViGLYvaYqe4rhhErpSD4Gq7NGzyWbPJwd8Z8gEiq2SEJj86cMTyjKY13Bx",
  "key18": "ygUie2sYfHW6rD1ExEMgE6ZAQKAxStK3nZaLeVVXTpDjNKicW3rPqLtYLCjEaoDYDGd5QCQafmefVdPSYNjKV6F",
  "key19": "2HX5kH7WKQd9C5dCij6tqsCBayob3dxZLa9FhXHLMN9Lae44zoi2nMaNrnsd8DhmiyqVUUR3gw9fCrvjGWT3HtYi",
  "key20": "38V36DDFH1sXvV2VZMfikKVjNr6Y4QCsQEhn3JBD8xehPZdBNfWB8XxUa9G62cXkAhmKNbZAWCgyExiQbobG79qZ",
  "key21": "ThojDq6zEx2NymC4AcYvUGwTMKCiBXrfsjAefQMtPUuoSodcZk7pkA8SNqFCC5LpySHaCVDSRcJf43JkXTja5Hs",
  "key22": "3NtKCqppHxaNPtSs6L5GYYxeDGMRiJVfxvZ3cuzRc2a2NTL8zzh2EKGs1gqYYciB9qf234nzirwSbJi4H3Yu8M26",
  "key23": "4tZCrBeAbrVzEKAZnpRhL8VLb4MdCR2xKKRbbvZirka85Lgp251knWJo535z778iTRvidhhXzUNSMTJmrcsua29M",
  "key24": "2oWALwdky2zrtRvUi6P5XEpbfjABRxTSnbHxfxQZgHtQDp9ks3LrqVLjHC2sgPqynNJu6LP213NgyEsuFerJh1QJ",
  "key25": "58mdNwzirsABicwrVBiuFSvJw56Pp8mPGwrbgGAExhAwkzhdXzFAjfSF6sASHg5ne2kobfX5ZHqx9aG31dPr9Usq",
  "key26": "5PpVj1kmMPtXoCjqi4QEwnTiSLEtaFieUNJTcQHVNESxXi88o44vbpkqtN3YrckxfdyVoZuWCbXbTAntfEhSo6EN",
  "key27": "57t5FHVdjcJKpmUHTbxFeHT2tEuGRrPE1pgify1eXbsjs8EDpDUPF2Q2emn8WhrBnR1mJ6UUnwQ14EqJ1MDKuB4i",
  "key28": "4d9MKcMrCT7r1Zae5HCUsuUd5PyCwGbXsMQ1q5Sep7BntcCQbri3947C3S6JxkRYpeTUtdTQNioQz7o39oaBoxD6",
  "key29": "2bZyvfjg5n36k4S14FBXHLBf5LfUjSTyHXYmgtbvkuJA3PLvpEpJ2PgmTQ31c5WhfLF6ktiyrfivGPXos3L8a8gj",
  "key30": "TzjghFspmun5eRy69jtpzwWaqaVmrxs1VbPTiGtb5j7t22hwNusjrfrd3JFBtVzTKDVckd1tfjEccnmvQ6pxN8M",
  "key31": "eRbqKabSZUXBxdmyVJ3FEioxLhNxkMrik2L1dLCjRTeAJkPEhZfCQptDim5s5zNXdqovXMCdf887MHZzV5eYFo7",
  "key32": "488mjV4tcx8NAQ3P6jsBiKN953BHvLJZ6SfBg2VXCMn52QonHmN8wHEbFnwueiow6p9m4cajup2jHYKmwW8cww2Q",
  "key33": "2hTz3zRN5gSj4HeGuBFxWMo5VV9cjgJ8E6c4zajpEJYLevSP1zYbk8P3ewHCajM22BtVncPRtMpnBjJLtVuWupUm",
  "key34": "5fBcqEVYBHP7dVnqdn3TshAgWSfSaSSL8omdePEAerzDBJxvGxCGSEXaC21sCusFZ9pFDa8uWuhHACuPMn1w3mzu",
  "key35": "KSBn7J685ydQBY32nR7WcrzUqrBxgoRmCZxGpDLMH8taW6guGr3FwuWeCV3Bomxit3saJwCJPx4jsjt9F4YoPg2",
  "key36": "2K4pyJ7PrZSEiLfTdn4ts8q4w3uRqQ4avXHhsRHXx5nXqmqx6YZUj5meLTSQq4LamQNfPxiuiA7AbDEDeu7bWgmN",
  "key37": "3EMkhRZScxz6UsvGDLZHVHtSGCuD5AA9z9Fb3MDfqzRs1SDgFdJWce8DrPoYAhqW611jdadPDa8kkVvBbtHcxuYh",
  "key38": "2agSgXN5NuRFyDCwiEao5qZH2WdayDdPHtZs7caq1ffzbu5SAfZq2smF1khxz4mB1CGVXAmYuwRinsY1UZu8x7AB",
  "key39": "39GP65JdN15iciL7DxVvVSfBNGD57VgcfiqnUykhVNANwfCstuC5vVMJFuvuG9mXWb448Lskt7W6eGoM7HBfnMgs",
  "key40": "R1wAbHwqfTsg9qpzKtpN8L4xDzXkmFMSfjCAVGJFadQrQqXT31Aeqb61tu2NTUD1t7eZawPJ9PGKPHU3sG739Vn",
  "key41": "3hAgr6Lqsn6t2qCG4Wtp1ZDEaFQC9SBVW9Gy5TkqjLNHFg8zd2HcDtjCH8D5L19dihGYphqp6nnwddfG7FfuVmZH",
  "key42": "5tvUuMjK5GZ5ttwZ2PV7tteFoNAGt3Bcsw5UmVTdFix9jVNaeFwviB366EvDHfXbnHgdRd6PheVMXx3hxXoYF73T",
  "key43": "yGkv4w1kZ1yj7ux7h1LMgU74WBqqKYe3JPApcocVzZYqHaQxWa1ru8YUSiYGr1uTgrLkRRimoDTT4dYg5ssi3Km",
  "key44": "3Ve3CgcfHxFJH8agfSaQuZKJLopYTHtnFRftWQkY9redFHiVKJHqEDZk8Efrs1F6uzUKVH2vAA85Z1ADW9fPW2wP",
  "key45": "3rNqzpstWYbrk1okYbm3LjNFdfNzRQkPyd6uoVib43RMtCZSRf88hmxRD2n4JfdB8FTw9DbTg5TNTojxRsh1tj2b",
  "key46": "3YHRSMH8VD6GeDKXR8u1338C3FBV3wv7ot8zgo2tSJAnftPvx7iFdxg6rf3Ri5QZdqVT3yBk6xq97Kqqt5tjLPLg",
  "key47": "4BQe9XqzQ8jc6ueryhazP9KdBmhJiBDfcZmeD13QtfTGt9NhA53HnSaRmJCpEp2M2ii7QtyazD6BT9sBKRNFXkaX",
  "key48": "5tUk3SNW29CD5KjBFxntjAzU9anGsy8tyu1KSG4RKkhhbdKE9gs4fwrEjDbXybdepz4jWzYnE7HLZRJx1fBRZ2mi"
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
