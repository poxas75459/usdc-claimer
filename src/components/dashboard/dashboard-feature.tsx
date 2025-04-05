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
    "5gpVJxkuUwz4VYsZGs2f4K8fok3KXP4JidDoi7nBsZ4s87P6Zzu2zw5qDLnJXViwwZFh7uEAAeCXxuse3Lw13RHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XXCC7Tn5hXRTd8mWa8SwfDTXJ2RvwaPc6w1bPeuTMn9eFuQeBxSogNJDdDV6rEYqaSxdmzfjLi4d4bo5WK3SAdb",
  "key1": "frR23vK7yCjeyeQmKaxbyFAhGFGSioTdA4ULG4gzsJzKf4b76SMmYdnSLLCLTJHZEtSejCYEumNuoi6zcHGBS3h",
  "key2": "3nM8urqE8P3TaUJs9dqwNU1Z3BZe9S1qd13nYKEiLcUa4ntT1CYETZ1SgtZodDLsm8sVYXAnCSy37QUhupz6Nb8W",
  "key3": "MykjdcWu95SxTY3hB6YfKkn5CFcfn7nMYEuT1uYdw57iuF4wvwizNZL6DwQzFH9mJ6pStT6kUdGiqS6g8pXdsUP",
  "key4": "jqnBbjFShgc2XBMvRQcnp7VSehp6afmTyiWPMt7g9GZW11pyeXsrdcJJxCohBHRmgyqanDSZhBSnCaeboGiYnzf",
  "key5": "4UwdzY3ZvZbFnBkkXeD4szRWbEqo4Z378m2a4JnSjcXVG2Y9BjRJmLpKLpad28dcSDqHy9nzgHVRkBDfivQhNze4",
  "key6": "2WNKxLtjux6Jq9rom9JCdWcErfbZpvKWJWetXJbFRh1yMXaYLuKMnZ5C5zby1v7T3LxFvJ2PbLNhC4fgyfyjADy4",
  "key7": "4zheqapb2nWRGvoQ1oC5krsDZ64PZ75oRo7XVdNW7yYS7hPzBZ3R2JZhiT4r7HDYhXMRaSZUGZrrWbm1mRZFZQJ1",
  "key8": "XGD1KR2C7BE2Y9abn7ZnVmAuWWPpKSY3yqRWqwNj3qvNQ7BsM5B2QQkj1ERL7iZ1GP2JuT3dnd8zTJBGydFbYnF",
  "key9": "teKVU5VtsDB5xvdtjZYMXWtWuegxCEYGTve8b5j9ecmBNvWjb1kERxpmkUE9FihTEvVpYmM9dDZmiLXDBJQxmZc",
  "key10": "4EygKGRNdUR7f9mKpgZdnrfo2hUQmTpPHVx1FUSoy1jwQwHw8ss4yXPdXTkETS2e87qBAuEMvSGKeaS98q7Wns1s",
  "key11": "n8PYS5aL7au6EgQ2nvjnLUGDXUcm1c38LwdShZBM49sKLimCN2VhwvpNnqC4QNxSgvLuvDweUEiyaAqustBr17E",
  "key12": "3aT1efxTTVHJccoCnT669o2ZjSZgGs9kQHn6eqiiwByPnQ1sLLDnY3P2MMUKdDFcWxxWnFJ3Hg9XJT7bY3wpfWHj",
  "key13": "UYBN8F4XPu2rRgdj8JxoVAfog3b4M9KUjznz4QggnTv77WxvPQCzzwaAZ3TA7ddGf22bbRDsqFEBhHLtsYarpke",
  "key14": "2bC9BpM7VZwZkDKBnFcFdwbURebnn2X1o5YqrvEbdfoGchh8wsAhfh3BVcxjEEra3aZUCjm4DDCXKhtzyCTri8dD",
  "key15": "5h5CmKVY3NBSusA3tUTNjU2WPRM3pt1iS9YenJyM21hx6WczeDFWiw24ua2K8hyEJuQsty83NVJKo4agrqc8nfsT",
  "key16": "2RmLxyBA3XrLvLBj4v4DjXDGjn76UUWZod9852g2rxUne9DHkbzVQdHyQGRXtga6SPXYmW8aCFCkLLXJe4BRjWqU",
  "key17": "315BkpSJmatHHtwZjGcERDZ7PgQkToyG9RfZKdCKjWrbwsKqJWDLCojib8f6qhM7Bh83mwyXBY6U2g7URnfkJGsX",
  "key18": "5S5dCWYgRZ1NJ8agiqnDbC3zQdB8fcBWww2xNxT4yFnH4HTAHpi3HGQZsRNFtYmGESyx36fJBEvwHmKeg1bvo5KB",
  "key19": "zEWrnDwxUugqBGHLh8xghNtfMGiVfjxcsu7zX3id8x229MnzGQ3qeghCyedr93HfvmqL7bVPi1K4bBTBVr2Z5H5",
  "key20": "3HtmpoZeA9ABsYdfFUfHVNaU4p9GzwTgom9QkWVFCGAjWpKAUkA1v4ci5GpEMqrHrwi5oZm4c8B1qFmhw4xbs7v4",
  "key21": "43b7NaQZVkQ2D43kTaW7xWrzRSM9UkuGnqcgWNkw7yq4WPJsz1XDybEiFUTeoYPyphwkxCcxAuCZCQtPoDLHsxrG",
  "key22": "5qdacMMSnbizDRgjMaxy2k8WZXkSdg6oPgiTMQ7WdJneU4qE5Rtg1n3P5es1SCUxtSRm2ndAjpgSAgJHpxU6mFRv",
  "key23": "2ihVDn3Yct8QADkhZqR9kAPwB4wsCt1T7RXdbBo35Fk5vRsX6XwTTeJdgci4Wui5RN5rKedPN3Y7z3E4FuV7CLcq",
  "key24": "4ZQnFDqQNCCp2jaipcPb3CR3C25Mz5mPvdfvpkBQQBgsCKovDe1UrUNfCDpCfgUtaCPmYoHCYxBwjaLa2g2dX1Fr",
  "key25": "5QMBiSYGELMmx4KfhqZrm8Umi9qUpYk9zxow5iZNajeuHJkTcmDhyFSkPeUxLSoAQpAtvtbBtfEqjL7pxWcukSVt",
  "key26": "2mq8wHgy31zVQFyuiTWBn3xDLzvrt5bWdvsDeGWc7EjMFEVmYHhXoTw8HQb7jbffjGHFkjeYJ2Y7KkCB7JB4Cnvh",
  "key27": "3MtRYnyjnqc7FbhRcVTa73vvoYp9QLWiASiVX8xmdKTs1itaGdM1PPguRVTLKz8J41cjgS17pJBqKSxD9K352CB3",
  "key28": "vDPWaM9FCcNk4v7PtjyrkYALEZ2yN9DEdqR5frdRJvsKMUwYpJBRWTAQnyKgoQJv429dqH8n7hJRm2cFNgjRTRv",
  "key29": "5Snm3LWdVPPFp9ekLVSSVKo7eCnwDGfKumBjfXkjCKRwPoBcYHVm3hYtgiE2rs6m31BtQTnn7cpQhh6jmwEtn6of"
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
