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
    "2RKwugTtFPJEEBtzb9W6oELbHvMwRPSw2brGQ4TiwUWFsaMk8ADg9kSRRQpcAmaGrzzkX3zy9KKrzqSWFKX83iyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVazP7Hc2qPgg9K8JED1QbL76yWpsirt7CGGG9ZmZaVKeuFZx78MVwHCdbG5eiP8uKM8n12k5vsSXP8Lvo6Px8z",
  "key1": "4RV5NvKDTcHbesAv3tmRbX5jePJio5PztjtECUmBAfNan2ok14xJBAbTGCm4o5knZXkZvZo4kV4Cj3k7VjxPDgKQ",
  "key2": "UUm8wLifWhUTpkqm5evo2fKjYAFFpMuUNyoVziXw3mUJX7ERtwdSKGJVq1RqSLYiCvL2CwtJZZgyrgMFESrRRJJ",
  "key3": "4HCYLQtQZf1jE4DyvDh68XoqQZDgv7DF2V92GaT9gsNMhY2RsErGKn7K1zkcupfecJcWgAtm9Y53wSkcvb3DuQj1",
  "key4": "4ShMWucwxqdYXHBi75iimhLkCZ1u6m7BeidZBojWXwDBGdUQoymW1D6Kqo1LugJK2LYhPEB4R7fRvmBgfvjGhHeL",
  "key5": "4RCcztPNhtHRyHsLWyV7i9v3iu5v5SoJERVUTN6mneDjhkq4xY7Aqj5uRVtq6ZSLJjzkxT2KiFLpNAUHXhAioNXH",
  "key6": "66DnpaZFDG5VLu3SLEEqzjy2hvv1SNg4PBNS9FnPSmXNLAPCoAfycmj2rcAJzGG1hYuA2y9nnwPTQVPoGhfpa3jB",
  "key7": "ijEEFqyrNTZpuAyQu86jQaHnWk3Qw8JoiSq1fQiw1w8P6qdvLeyU1iLe9Km5ALZmviqzzCG39cxBznzL7Bzkf2u",
  "key8": "5GUcLy4HudvrMkUJJxGPtGYnK3jwnmCZKV8CTYm4GbaMX8ejudxrFN3mCz4zujRxzvjbjq5FgVjzMmnjnkDKsLJT",
  "key9": "4aGyVsJ3nkiw9hEXpMo1GSKusUDTkbCmg733er3fgiEGwNgcFRPMaoD2KxYX8t8jPfYC5d3jjYMSW6D3mWFEwBZU",
  "key10": "5TwdnaPR64iap8qGVgS9KpKX2bgcL1XFbzrrBFeTDv8Qy4jkekNxRNdiYDdngfARiDdCzFu62Ahw6S29cKtJQSmg",
  "key11": "3oNpBMTFdQbKbS4b9iX3B6D35pfSEHHFhMVp4VCTwaWTk2XSWbZTZy1LT5QXq5MvfMy8J5z2XvZRuxFwqBN2zFB7",
  "key12": "34RTYB68ce67GqYjS29a52wSWqpQHFyYZDqUAbhFuJPupRTj3ezb4wr3jMMxEuhhcKF5ZsQkcTnzXkHoZniZMxNV",
  "key13": "36NUvSQBrN4TgvnDEDMfkw5GpT2PmPHdmsYxYn5YqSiaN13XDBw3xKvx1BP9kwa6HMdUHTboHc3z9hC9CHg2b5cQ",
  "key14": "4P2oeAFRovQqPWUgVBDNt78dLLJnbdBtm2DvSKzAjkGhwQxo6kGBYGMRjQnUW6MxnGvq2ToxWPvgLeV1WdVSTvoZ",
  "key15": "3d6Mk1iFKVHKDWjT6CPCRTVmA8cJEY3C1i6fS21Qkgt9QNHftZ9KNaEnCb9RNUgDKXMLtkket1xcyoCW1Kaquzdp",
  "key16": "4eZNJyjPguWcdbgt8646DXLMUBWe7ggbWgA9cd6rjVeGvgBVfvwZ8hzjS9y8RqE1xZZUoL9NcaUXgzqWsox9PnpD",
  "key17": "5GW3sQQL7wVEQMifBkjegZmhHyJQwAF5p83WXx7gA9rRczN2iLsqJR7GcJkbix7WJRFJ4DWwtF5zJfQxiTjAByWB",
  "key18": "5HpyAYH3D1wCHmTrd7gphr2VoPbqysod39VkXk2w4gB6RkJ5BfNF287bqysawd3UyYB3kMjXD4XPvUWRE3XYstoo",
  "key19": "gbFD9kA4zCdb5dxUseaNEYxiJhUxty6DKDNrJG1JaCeFwFqj7sd35QR1GRC5HUmAbvLAT4om7PvenyJ74Xf9t4U",
  "key20": "VNKePxE51hsEwdwFC9P7pRKdUwLorMAqUHuiysu2HcLJ4pBx6R5yLsA6oGsuHqraGqBLxYQZ9zxZEm7QoS4ah69",
  "key21": "61sBNgvs5SGQ5wZpLTZUoRSJNqtGK217NT4terzTqo8RoxhBiVTrNXGfJZSEVbHuUCQAcSvrRt165KRGxWGuDiuR",
  "key22": "UJTDWe3a38Yo21eGX3ye2ccyBbo3GtMPMpSVzmsmsyujkfU5wgL7U8MUKLgwvguoDrxFV4QB2wnQHNVUwcQDkE4",
  "key23": "4KvjVNCNr29qYYtTHoS5ZSuiVpU7ARAwaj3QA6oRCX4fHHHJTcXqDZSE3negkixsB82GHajVDq2rbsnzmLtkTgiZ",
  "key24": "4BdMjdwkSpj1chJr4FtbLmraHsZX5DzhZLB3FHT6NrSjwWJDwPtuNwzYHdit1HrNHcACQtJzDWfqvTHfDoRdK7Dk",
  "key25": "61csSkvxPRu5ihPqqWbrsro3UgnAcMSQ1nnt3AoNWp6Ms6yqqikuUdheQFU7ec9ULHTHVV5EbqwcGR2MbayvQAXR",
  "key26": "4LcJb4Ka6Wps1MW7GTpS8NZ7ww9hSGrM9N8rWQc3RpkiC8B9YSgXBYRJ1W5wFchhtWvZfj2jyxsr7xuxYckNo2Ky",
  "key27": "2URVmh4HvnMVWktBzdTNrgCp7to4doSW1AYpqoxX47Lawxik3v7q7UFJRJpVG2yGYpskfny4xnZ1Nc893jF9hf69",
  "key28": "Ebpp3YyhBH2pHhWneJx5LLjp4PNwoS4WYjV51U7scgAsgwRpDoqp7zrt2LWuJax2AahduUgWwAifWKu8qrLpSX9",
  "key29": "fxSx7QwcbuTQcGrU3XqaF6p8EWygry5QBHKgkQtKQZ4VqJFVEc2CsexRwFvAuvh3QSBEWor9Y3VwSe9MWMEwHz5",
  "key30": "59vRrF2At4Cbp1ha7ZKaCvtGcyGuw6SxDfi6KCfqD2p7dgST3sfZz94wxNSk7sv2jyXhkJ2RrB68gC9Q9CMQVq46",
  "key31": "3cAxXu72Ag9bzuKvM8qkbVqabhFSqLRBYjjHNwWP9hCWeCNpjqn2dHeXmxm4gxzCt1JYdqLvdx2cFFDqwquVgT2X"
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
