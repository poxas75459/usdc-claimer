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
    "2cZwobGf5GQywBgfq94LButEHJ8bftjHnkNECWVdzko6krsgwE9TCsPaj4ueDLFhuxTtCBU88iA32Uzpd6dmPLAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qyrUVBPboC47zVJ8uTzPYzWHkbWpd3yoDYAsrP4tj8ewY9hcicaD2bZuk7LzXbRm1Xk7fSqfLmqwDRsQfV48VbJ",
  "key1": "CjURm7F2ewbSeA2GvrkSAH3dtRyUXLiLKoGbCW3bj1n1iKcUt1omFMWnznMg5QBQFaEGRzw76ehYYm1jNQWMLzr",
  "key2": "4k8xSWCZQwn6isBi3zYLXupq93rYix2ckCSvUEmnhFBbv2CtVxCtPGqRxfgGxfgtcA5KDZwTFE9Gejfj38LtGjsv",
  "key3": "2J3r9dSmHpQaP4nJGed1M2CAgKgxqhMeVucnzP3dRi9GBcQEuw8eaUACrxM6j5C1J8Cp1fK3VUXyRdGdhiSX6B9X",
  "key4": "3EWjp3DrgNKqfmvo4GWFsRmcVQYbuxpjirksd72BDqrNB9DTjaByhzJqhJA7djotXFxnJtmbnGtAYvtNcvdKQoXR",
  "key5": "2JzY4WYGgJ4XW9HconCF35cVotWnSbCNZtXKc6e4UgjFkyYWpVKeNxqPkrideEATjK5kVkxaKgP66rjorUta4eBJ",
  "key6": "27Bwf4L8255UaqCGWrN68gAXqDquuEYvtdPtSjVTE5565KXLkBVShfX1kWEUtAKG4pbCmNM8eUFUJ8VoH7h5B9jx",
  "key7": "4jFyhrkRBmUR6nBh894JATYwXLkS4edxH4RnGqLFtopdbEZMteQ4xRDVABG9xcU4rJiWxKwoSHRYkup11iR6C48y",
  "key8": "TmyA6ejZoPAen8kTrFZzJt8VVErTkTUjxE5SubR1M24mM2KViY3nfSEyZEwYut8vszozB6o9ZyttE5JvVUgW8Ca",
  "key9": "e84VjV5AiZZcbzuN9CQHaFqyqPHTnJ5B7WhNXZibX3NxtWR7gHoL6o5uMLGZ8XvrdiKneaj8Q5B5rxDGcomhsEJ",
  "key10": "UKS5xqvRh6KWeVFjWadeiNbwF4jtFMB2XaqNeiRwK1GuF36CTWKvghJba1RWwpPVT8XLxNbbkb56nBsPiDoeBTe",
  "key11": "EqJtUVjSjdDLGpfFC6EsRFbC3yobdY1ErUQAbmhW5nRySEqDGcyH8qhppxJSU1ewqZtJgivW7HFaLBWyeuzxyLi",
  "key12": "VggGF2LxGjKdDsVHiDmQ6TxS9ZQLcR5sQBpee1Ru14eVQHNbasVpWwSQDgv9ZZM8jpzyFFZrD3uqciJ2X66TLPf",
  "key13": "4DshuP6nTM4kH6LSvhLkGFkhHkDhNN1kxevY3igr9bsR7o4YzZC2JGvV6Yt7A6vnQ21v4hPHJR6Uqkth9NeFygKc",
  "key14": "3UvWFnahxcaerr5oVvyBfQECBoUpLmsRnR6ZHJDV7GuE5L4pn51rWQyq89C7CCtQBp1euwY9v4oU825eRUMmuMwd",
  "key15": "5igN1jTygLsYjXtLm7Qno8UKpiNSQE6kn114vNd5YysmtHTBNNVfPnRhxvk8CGoj77k4y7YFmRocHu3nudjHxLND",
  "key16": "3j7yWwgRbBwBdzwuUaV3gMVqM95RY21vXPnYSqqukdoX7hymK3hWnjiVayazGTbHSrVfqSKavVHddhvhZ4MfRtD5",
  "key17": "3xPmL2XBJ5hytqbCKqLPrkk9y4v6Vu6no498WnQftejtpVqw1HLBdxrvuCsB1ouwckgDnhjyYAdqkxBz7rYBUt82",
  "key18": "2YjieAjFQ5qu1MPeji5UFgWXkHqoFyCmpi8n2BAnzeS7F85n8EnaXCxSdgvWHhzR6XoqGQ4nJhsCW9AQ4HfX9aF4",
  "key19": "23KEwQDRLTxbqTsbURkPN2B86Uhu5L93EW7foTbpgyGBEUA7JoNq6ECGLG8KH1BntEYBr83LNPxbTmoffufTLW1Y",
  "key20": "5KKfZvonxpEaDY4eJc7TXQj2mdsiTazw8wqRy2W5Hd4xyQVthwNQA4btiffQXmJ3dv5cKxhrz3FCNE4XebN1qknj",
  "key21": "3Xhd4QkDBQX1GbPnix7dSzGucFMqDLje69ZCFa7NCPEqhDzNXcRRp94gmBgQtHPUMsR86PFshhRVwUrZ6p537qqC",
  "key22": "4JqfNYtJ3acGzagULGbHBNRCcSvp4LLBdjbXdwV9DyU3qVwHTVmH14GT5SAUfDFd5cHXCdHAvx1AWcp5Zt6pH8Uz",
  "key23": "3KDzeWRVqgKZXxARcZzxLbKS2SxPfcLE7Fi9iJ6AfGWdzHhYqi9WS187bCwkmPKGwuP7Mskruj7SzDZwEyKvCrZj",
  "key24": "3Gz8Ekws1pHRrjsuwaUcp2DjbF8CQKM7Ux3PY4pGUvyRupS7RpoEMDXL5Uy19KrQyWDbXbj8eFY7XTqXpHGDmQrn",
  "key25": "2YMcbBYF7U6t48yWBDUbf7B4iPv5vrHuBNwh7awpbxXM6jnt88FfZZmjaqNr1CVYPHh9JPSFcF4czFozDF4jeFoF"
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
