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
    "659tgU8ARcnxcgbLpaLPHtLULTpiTAaEBiyXLRt6b8mR512Mp1xj4k8U7EoCKdEnJnzX4FmgYwRUktkbGcaAc3vM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGGwq9VH4kFp3vBeUm7TLEPBPXLH6jDuNAQUTaPcoVGQNYCERQ7DgGTzAxYg3JhpE17nRQCeSLmdKWht2hq4vym",
  "key1": "4xa999cQZ3TWxriT4BXPL5nYvp9KEZ2rtBy2EHGapgixH3vvjJidD1ixfwhBp7LgM8AUcUFLaFjdpWq9dj17JkV",
  "key2": "2T7RcDYbyoNKhAtRiqFfvZ3VhdAfWJ4wZcJTE3CTSwrkvN2w8NX64QW5EeQ3dGuvBLaFmsJd1oCxEhwE5rU3FQM2",
  "key3": "5rQC5j7zTSPawPCqfB8rJQJwPXGPsjXvHJRRHofeAx8vwusxKpbDw524rTLweu4rzZhaKwRXRuEVSL9Ja7pMav7E",
  "key4": "5ahQjZJ87m8debxmg8n5NiJcG4PsubneaFxTa9jQWGNKVgz1KwzJFuV5May7qLk9DPdPxqFmquEex1GW9gPMgoMY",
  "key5": "wSA4nzuHkZi988xwnJqYbkhh9WDHDmMSTitWinCJek1bBwMWdm9uYvVtoiVGTxsUzdce9NF4WPdrwK8v4AFP22T",
  "key6": "4GXqT8TyXHFjmMDUG8CSSNo2LuL2xFBDqAdHvXiMifT6smL6Mzt237PhBsxiqJfPiRSLp7jV1wham6eiZB7KMinM",
  "key7": "5QfyKXernSDjsNmHEUD24JQAvE5puqsGdWqYcscuadHSWz9WdttPArgYDAGCfHTvTuAH8XvNmVqX4KtPpanY95Af",
  "key8": "5H4bk4jwWMyCb83ghnZeoCcGjHs6ys8bFF3T4gpfPo1E6z3Z97fL8zjUKu1CkTb8BPtbo3U9RhmZU7xAFMU6pKL9",
  "key9": "4EZ3Mscpj7Y1ANAsZVJ27qaUrrU442uw9AehfURD2TP1Bkhj7iCpxryw61xSQ1gen4ZpawN6F9SthFoK6B1hw2NN",
  "key10": "5VmpYb79smzRc1rSjsh6a5UzWuaa84CKr8nw8mQdpZXbnQGDjVuKvCszuaUgf4bWCU9wzZ6i6CDNit137iS8k5nz",
  "key11": "4WM2QCWKApmTsQCAv2japDoPzTV4AwmZo6iEd1uRsidVyjq8nYCQZJNRqWUHb9MsgxBEqG7qLbViBBSzCGhHh2gp",
  "key12": "zp2MMjdZ7HPDT6mMMPwqCHSQ2irDdWXsmLRVMn3eRDxayNYwqWNd7TLXJpNCQZnrki8ziQzt8vyAGtZV1nDpw2o",
  "key13": "2FSVv65d55CotBBCokCCWQ6MXe2EvXyFVoWnV6oc8pCqMEMd1Do1kwe1tphRpN6EVb68gm6CdZ3ffaBoKbHTXD58",
  "key14": "2ocgYRHLH1TsgGaFyxpRz7zG9UUXSg7zdQVb7Qv1qT5fTa7ZqYAF4zm3MdLjCy5fWky7918ZWYnLQVf3ahbd4wsD",
  "key15": "ETYqA53ijo9nA6k6H87yDAYMHNh8YuP7t8arisQ3cuJmYZP6LU8WbEosApbrDXLyJqCCoCXaRj3L4Z6k37GntJg",
  "key16": "3oKkjqj7pemm6UExjKM6umRQsjTUC5tkYT4BKVXdSTXejHBRevu9zRMRGVwt8Zy6263CF5HqK4SGQ5vME2ALPTbx",
  "key17": "5BR3QKrFNfwN576SeNnSvpp8pVT8dQtjm3qXnsBdVsJU3qDDaTEqa27AJ2NnTiyxQactCSt1Ukd69U3a3CmvKyE5",
  "key18": "2PckvowVTvAFpyt39JUkBmBudmyu96MN2gUpvR8wBUv4ona5gdj7mGUUYT6m6ubL3E6fPxGALacehLwgBBAY7xbR",
  "key19": "2ensfHJ8r4pWDJKJXALfzhvZwyYHs6nYxUFD3T2YwndDAJT6eHJc6WwaEFpsUJkfbwou6yvy8x9nYDQHsrT5kczy",
  "key20": "3gRviJUe5KjhzTaMvqdbm7vTAQkYtzqRMSun7EH5nWYiXsJAJEmAYvUF3tcGDktQP8QFcDw7Rcfm6Rsfgmwu2QrC",
  "key21": "fZ4f8UBj9BJcaDQETsvwHFHazRk7s9M4QgMmaXtPhEjrbz9o21aTQbjGh2SWzkv13J5kMx9De9ZXYw1zLxtJdm9",
  "key22": "4HEfWHYDrErYL5J5xDzFArkqYjEhj9oASHgwxpDFGC34PW74gE7touRPsGmEYbz9LVJLLJZPPcwT6CaYVftoB3MZ",
  "key23": "3LhMXv8LtqzwN2TX8YkgCddNJzsMn3CPoUsci1gpywWWncpa2VVEN8ADu1XqvWycNFNXESKD5KgKdsRXXQTsNugf",
  "key24": "3bcDy4aHMNocpXjrxfaZ8ALZLZQEs25GkbBxZdpJA56TNB7fgh22ibja1So7zZGG1aE3hKkGqzQMm6gKBJRPucoJ",
  "key25": "4WdWwhoAnhVRmbCjNi6dftbqY6PoKGoJJccwC18YvFCBEvN1H9XaxdwKm22gTa1rWby2rsBwGVcPVcVURu9Tgiip",
  "key26": "pCwvXd5rH8pJijb2ioigFPS4jHEv37Vo9xWyqXL54efEoixQ8LEdUancDEoa3XtnVbjghPXh8Age2fYh5pnDaxQ"
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
