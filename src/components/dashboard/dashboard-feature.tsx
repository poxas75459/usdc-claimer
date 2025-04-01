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
    "65GmJequpUX6AEL8XjRZhDxKuoTksdo7Ah7bTSMc9mq95eGesZNKdo2uG8oVhm1NQ8QQ4rfzVE7Tp64KsrkG2PsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnXdUcxN5uAZMaNnkYDukFonYaq9QEL8PTkR5EwF6XTvWWmXYnkcbcQ5j7zgBgZ4rp1q3sszEAwAccRaSirwX9E",
  "key1": "3fxzDdqBcSo7zMdoiTgSDNK1LGaV3R2QCD52NCvchpg6zpw92LNgTpgBRvPEHuAPaAci1GAAra83N3xB5VuJep4W",
  "key2": "5d4afxgobtD9kF6zBM7p649mdor4eEiU7NnF8ZzFSDw7yXqTSiQuUDCoadeRA7WJ3AkmUGiA1wdYReLTnyi3uHRZ",
  "key3": "5VUdb9qLWdWuXkM7NLmiyWCuR5wWajAa2Rp8ph6c6PESg88K9WrHxP2s9vwghhEjKZiyqHWDFhBHhmXWRfGt4WhT",
  "key4": "4W73kds8uKPdiGWDKmou8eyaVL8kTSyGAK2bHeciFruigJm1QWzqZjEjCPj3iKa2tigcEAFQ3FttXruPVgmh2h1S",
  "key5": "4a4EzQ9L9xP9B41WEmqkdXTapZEhMNFBeL6ziCWVcPrVZonPCLrB3T8iVtmnj3pgJay5vqFKFV1ZEGz7uAZuPngE",
  "key6": "5Urpd91DFt2KfjvcGJTxbbht6JgYBmUfuoySvHamNPvPB1Xn1d3AEktdx3v6HDjZepi9yvpHGpczvNydnKPTMB8s",
  "key7": "Gu1uF1QiVoQQcjvC7vjVWH8A6i9nHsjhAqe4WLidYnBe1wRoUw3qLRQx1Xux7nykEc8z3J3Cc3yegtpSpkWyQoA",
  "key8": "5j8HnatBiEZfZPWCe4JmbMsvVASmz7QDX6JkzuAQE25ibPZT1s8exkQQDg8BEspMoes1PmH3s4UQ8oTUdGgjZqfc",
  "key9": "wcZzSuCHHvNPq9TQHAv7X5x3U29M9MtRhQYYRgarDAY5zNQ2TFfBuvSB3p7ZMNK4i44bzqV45nETGKXhL7i5FAB",
  "key10": "5VPhBx3DGgxRTKqukvv3EiajVZbo7LERzNuHBEaeDzxwMFDqSXaZV4ZnU9UMznqN9ZztJMJ9u38fBwfiw4kr2YRw",
  "key11": "eFBQoKcXuzSswC1D5nioCJoSz6ynP5CvLSkQLg6NECYVyYTjhQBrTmfjSgvXyNF6dLaxLi8mawnwGuFJHPohL7k",
  "key12": "5ku3NSA2c8APrM3MepJP4Mpr7igvoi3MhVMn9VkFNH3xarFZF1XB5SGKcC2VTsusgFdW5NTPTMLaBVLMsentPceJ",
  "key13": "4LPeFHAW8Ke7gaawsk9cvSyAMHZtGB1j23sRNqrDYFxpSS6b5GXgWmbf93tGHyJvfqk4bzErb7YNpmsc85SKFK4p",
  "key14": "34zEpq7Y3RwDHSo6kTHy4PUtHeoHpgae7TJiCxuMwPcR43PmQo3gNKww2YYXjoSDpcEuHAe884EwnLyog4JCpnFr",
  "key15": "DbZ5cyqBxVPsMMtHEDZw3fCMzfFhtESF7zamjhnxpmy8Y9GwPn7NNzuFQjCgTFaytERXMJHz9xXgquSwACEdhUo",
  "key16": "3MCrv7ipB9iu7XaB5FUey6LvEAhhHc16qwHYcW1jfF684xXT4vTyYTsQv8mMc4Z4PzAvzD2Bvw13GgQpiz49QNRv",
  "key17": "3TovxAgCrn4bjs7NSXTABCpH167RueVRgEHKkfzSoYnde5AqN4HyEPnmmvvkXLYxGTbU1qiTiJ2sbRTC8J9awAuc",
  "key18": "pMKRhrPJwPxXLWfUYpbY19JFw587MeyNSCMPddStAjCAtLZm8CniucYdQiWQdwwVRjokC74FrbnPAQFuUNMo9rd",
  "key19": "5YvksvcQbmPFCTQFKJgDmMdRVbRRwXEMYHARFkKyhL2YWdQxS1v6MLJMYb2BBYHVWjKHwwaStF2pmXwntNSdEmoL",
  "key20": "2KZTza8NPBSuiXi6ht2rW4KVMdEPcyPiw66cjYdXyuLCxed19UtMisSmaXoL6yh71ifSdLhoNJTzfZmWBv9PJZ22",
  "key21": "5kmAgm1Bdr8AsMgqwhi2cL5V5WVurrKY1cyowiZEMnSDuQ2YQBTLhHBq3gNTrPnAn4VUsNM3iunHZ7zJ3YnMqMy",
  "key22": "FRpWbRSmVoAAZkKX9Fi9bsD1Eac7FCoESXPGfVn6nwiDg7FgoRAvp7BF4PKgmXMmNBSZTLo2DVfvbqkwybd8GpK",
  "key23": "2n5Ut2eZPpbNTw5Hdq6Pfhxc1fanTWhXh79f9wPPexsXVEYRRNZwUQTa48kT6RoU7qb33MREJ6vHUBXAeVyxa7yH",
  "key24": "544oCvwFvmy1S8tudmazbePDsUdfXx4fMw12q5v15RPBoRQNtCAzSfpV1x3a2eyaFq2xz5R4gND8jfHf4we2QJZN",
  "key25": "23VjafArbsoxVyj1JDDsK5tgfXAfftmzk1k2SxaxT35BgiVVh8mydhuHVDtwgYDDNrMxEAekmadEMbDxd54T9hZV",
  "key26": "2fL3bdhwo6aVxV8Wxvzcxwq8HTE2ZwqAPwYVfLgjsHrWP52TcpbgG1eWVrLsQLTPuLHQFXLjtfULACuYCbs68XXH",
  "key27": "2s7j5mNytvwKvfgqhKhJiXTcQJ7ePrN4EGXPybesJfwZ3XrAoQFLMUmpQhzv3MATweZKQ4K6N74VF27ViZ4bEjNj",
  "key28": "5TtFPkvzwefnvrBwLsPVyTuuTBwS7xgv2E9bs1cLRPuRSJnkErvty77D28zJxofn8GhwgaXhTnr4D5L489A5xUA3",
  "key29": "5TxncngtwvFWRqmuDAztLR3mEJmayf1cnt6arnmNYx1QiAsaUttg6HddJYGy763Ly3gJznU1tJw4pKL72x8hZ51u",
  "key30": "5zvG1nwbsKKfDRB9SXZt9cHgo2LjR1xrUbvptmbkCF7HeybCfEK1fVDW5L4KpkcXzsJGLwg4mAB2ftjddaQpHwJo",
  "key31": "2EvV4P4ZFRUbQNoCAZ379W6GWyQZkJzfHdce1t2pvzknyAuc1Jk6aSq35cxxvCxPy5758TDvb3adYJiVKc66NRQQ",
  "key32": "oje2LVbS2kkbLgBb9SHjKUMF9QHydzrbCN4sweFPV7YJ9JTCRrpvTo8Mt6eP1tRqsNZrnKTXT3j74WJwhjKsFsq",
  "key33": "3ZNfkkvDrLvmrNzCLypZU4grmERHLaXZA5vJXmMM9B4SMebwZRBc6FXPqCWtbfPkvs2BocS7jYcdA2utu3tEkaqC",
  "key34": "2c4589UTczEvHxhHxXSTL4evfkr8NPZr9E6Qvc6uRQYMCtF4BCg3fMEkmi2j8NDmty6AdActB4jnzTA2AwihxPNm",
  "key35": "3CebwDk7FGXHW2EZVZ6KwJGnfmYxXpSUjfWQ1dKVT3U7tnGeF7pkVEbUtmdusCh9smFmhTpkJoXafV9yaSuzesSx",
  "key36": "Wk17vzKpENEq7DNMqX1xC1UgZYkVEuPYaqphyq9XveHFhtE6KPm3wZbeVwzmNrJFJXvCPouAqDHdnJUbtMmE55Y",
  "key37": "295NNU82BY6FAw89S8B8ga4YST8FzU5rZuqxa7uc8Qw4xmE4zLG7HGjZL6xt5C14VBL17SjPBt4N5uDVTFwFh83N",
  "key38": "52p7d2zsBh7fYs3VQNHWGf2SyjpJTbVA6puh8rm3iQGKsmXLqhiHQ255USyqbNF5At2xkyrHiAqjSy6VFDgMVUxV",
  "key39": "QhQjmn3V5bM72gT5QG46DYaCSR6kTsS5c3zNnuR5KyqAhUWEzufFw7EwjqswYc8Eghds9nkGFV3GAUAnxUevXsj",
  "key40": "36gKUckaRqGVs9anK1mB9M7PCCif5MWfaDoVqSSmG4xDZNYW4MPWSXZRP9y7ehBNgwDsAddAv6sYxgF1maTB37is",
  "key41": "eTkn4AMBbQ1wqsALrTNRjzBnCwyfMzFEB1y1Gzva5w6T6TGPKHvGGre5tx9fMuMkDwivAsohxKJThstVzmm1FYA",
  "key42": "628BZykDWVmGsErQBopwuMELgSp3Wjkek4r7wNeJ13mc4gMMJS9U1t15irLvQDvs98gVnPWdVnfMBsvUV6BmRAJQ",
  "key43": "3DZHVG4SmBSYSrq9arzukFAoJpk8MCf1wyaDqwEv73tPeUeGWiYXord1rdPDHCVNXE6HJDMDHj35qdGNbT1vfdBs",
  "key44": "28W9DwnXjJdGqzTnN3ZStR5Bv2tYe7RC6CQyohpGP9z9GQeezZaNztgYu221QY3B71yHQJf3HhRt1NT34FKnHsNZ",
  "key45": "4EWC3RdKDxAQFdAzoXFP5ndtnVjaYQXysu9bzwmwSPSunGa4f18Lc4hfpA6JyEhSryFhTikpZ42KhAscsLmprqQ5",
  "key46": "22Wei8trHyzqva7HyDLWfkQsdnzfuaFHxBQj5Gz6EpGUA5WppkiEvgLXCsr5nHEgzw6dJDxVTbY2DCqHwBpVosbt"
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
