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
    "2xS8c4zx25X9tYhTDbaSx24JNizbLkfHPsbvtndk9BV26WZm4cg4fLGkbFECjd1o6Fabzv85Ahu6SFBrJVQi57Mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQtA6rgr7xShZ8nZJzCVdsNw3Dy66mmAkViTt6eNKw2bFtme5B33s1PFJKcTGFK9nr5gAWbdwixXumJB2HRwApg",
  "key1": "e6GwGD32dGfaoYrGTSooq1uQhUi9PuZZCeSQVLmsuH6wrRBZGzwGXpeymZeLP1zvXQ6WNmyoeJPBWuMqEhC21T8",
  "key2": "CM5Sp6pTBYgR6dps2CFd8ee9e5hkKks8Gp61mZSGEdDSyVuxZKsmNvbeMmJYz1ALBY6EqeBTu3KkTLC8UPCWF6n",
  "key3": "4QBuJu8jYGBnknJW4VxoM23PmcU15NtB16tWrQCvzhLAuU9zPt8NdDLHZHWUTyH1sV1YwTvUMXeFNF3e47FQX6vA",
  "key4": "5yto7gC7sKsP1GYU7PEpoygGxDjWqpx9Z8ha4BAvuLf68NSgmr5xvRA2DqRvGihmQJtBYB3Hn5jsbk9EPVfZeeGD",
  "key5": "3P5BYDBZbXfGYndp46KQTgvTDa14RAvVcbW3hvMfaJwWgWiaP275BG8BBDvmaCf1rwoD3t7mVXHEbeuWFxuqxxMB",
  "key6": "2zD3EAYRKN3hWPLhiVqzbLsk7YPFuB2P38azeZWjZNdqeh3Per3sRkU1PNZhnBwV1EKwH7aBVTRs8Bp9H1N2Z8xU",
  "key7": "4c2wRJoRPwUMYb9jRJqjpzKwwnCJ8rTf6zvWjmWdDePrhGNBxaJ8xRWMXxWRUtpq38u6SVaaZDRnPfHdFmXppmQx",
  "key8": "fpvqPii1X4N8dJ7Y5eATXWdivV9Vpm2ZArEsuC1QS1Ue28sKDo1oDudhTTvbAsLihascqfYJn8mnVACF2A4px7S",
  "key9": "3327XNmoYxauvaS3J8CiQ6jqhpdcKkUpH3HbYcFH23U7NARcoJg7vJghGBw8AbVWSxo7RzEbhQGwcurHbKUPVHf7",
  "key10": "2anf14yrnmjmRta5JWoNvErmvHRfHBwhKi563RhSnBe4PGUdDzihxpRmxRjRGXnvz9LVLZmi41tH2TSoSBCR38dj",
  "key11": "4VsMM3xcyBK6jwXJaJCRzoX1a54wVQSjTKb7DWvvLJpjPkGBJ4PZndPNtNJnPavmDLTbL8hb3HtWccGCGJFNk8TE",
  "key12": "ZsRnEYsYgCAEPC8vdyHnZBxZqR3x2xBtSsY77u1V7EVUSBVZFBxCGETRJD9M2cgsZso5XeMH1ZKGmiMVV68hiHh",
  "key13": "2v75KiFSbzQyGTeq5AA1BdJMXXfcxrJTn4JJNTUE44kzTxNkcznQrgNKh7nEicv4kDAFeUvXqaAN6RopC7ur1Kaq",
  "key14": "vFHYox25vBNpZLTMRqDnc9AmsZdHARfQQJpwuEwZXmjyM1GUHUPDLb5Jai4VgHaP5KT9BXTmoJiLdNXkQ9u8Fvy",
  "key15": "57QWWPC1Bch7sNDaGfx1Gyp8vJrXhUmH15NAXprCPnTYNXZANDKd92ETDyCsMALKXWGHKDWt72yhg5t72pRuWr2f",
  "key16": "6zWFsj2XYtz38wLjvRMJwKrxrqy8KzDyiJknouukZnvexN9yiAhFLnVXMvbpyNqCZy8m9QZujyLvYaiuYqnSfhi",
  "key17": "25cfyp7QzwsvyhbnGmmFtstWTxC2v9SqBB53YdUsTdEeZ3KZ8aKtyKU4qwLxjapBmeHDp8cGSsnztiQXVwFCxdKN",
  "key18": "4xgwTqsd8gHokVLeRxkyHeYCmxQEocRQ3D2e1TwU3FXYgvBnduF87Gtf5QpuCE43B7i9rUKdffFpA4XhyH9iAPca",
  "key19": "3SLVs6oyQvu9uXxCMaBmdBw6gt4mN38WVjsa6QHWzZnrz4hKsSK4wVDTpLhzYCGmU1MtG6jiAxzpzQetSPEsGHk9",
  "key20": "4wqiZRHGZWP5dyLJ47rF1hKhxDMST4qJZyVX9nvYrEBQMkrdtFweiNrJDhWF4g6EkBjNJKJT93QYUKmfnGe8WZkR",
  "key21": "3YiSpowML3Vpf6PNjp8K9cyfFJuDVGwc1M5goeeeNBYmesMUxGixcg1dMxf3BLeoZYjMuezZQWZZzKJWuGL6rdUk",
  "key22": "928pkCLhmajUus6E5tHhZW9S5n3r7RhebcA3TnnRhUuivSX17BZvcBrLd9dnhPxjGY6REabevpdeL5cPo3oa4pE",
  "key23": "28CGHBYTWe3m6Vvu9HUDtLwGscCGSQzLdutmKwKhcBB7YtSPEhucGtCjx3wWAcVjyJm1sKr4KV5WNc9pCWRLgRao",
  "key24": "4yQEBhmP9N3JSSz8bgN1NXivtP6QddqPvyTVoDZjToF24H9m6m7PgQhsSWo2xf3ma3PWLhp2QkCULk8VvpKWGPUB",
  "key25": "35aorFSnB472eiG7LtXQFZr8FJrpqQnxMkwMKh5JWtHPdC7JzfZzhCiR9td8WWpC56X6CemVmaUtewiL3wWmDB4o"
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
