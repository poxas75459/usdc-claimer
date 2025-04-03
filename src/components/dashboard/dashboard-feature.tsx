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
    "5h6Mw1DESQvrxAVa7Y76jLFZEZtCPhDCcUM1d8YNw5JAxLGqKCi7kgL2M9gAzdspWhsu1bbsf1FtvBn16qvHNb3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsRUXtT7ahLK3FUEG3Rnti7eaFWfJjdK3dan3gxJGePjhPyhdRPqpzXUzTFEKD2KGNtVVGonLkV8F65ZrYwwZzm",
  "key1": "33gea5iMrip8YBykxGkUZ43YbxFvU2WDvT85jqGJP5a6v4rRwPnfsxgyjbKRi9EeReSv4eQi6Siij23wVUv99Q22",
  "key2": "que1VTNW8u6TdGHprfzJzL1Y3ZPw3vYG6iPjhuSsLeNaXSWYJ8PPwLpWs7hgt3EeqQygwzcXw7nGsSd4WEv41P2",
  "key3": "4PRBF1TTeuhsDKXoA4Dwo3ZbjhhznmgSdqVkVtzYwX3zA6GH9oPkgCRHcHUvJcsjWcaeGeRSPcu1ztqgMJ58yEQx",
  "key4": "3b2EGFiGTTEdBz9i77pkjYDEgzd7nzJdLKdALkTHrQpFtedvTXMpmYP3mG7VdZnCdXQKsaHs29jyPbtt8ohDihT4",
  "key5": "G41HcDKoEj7kbBHpcDUuvVV7GoHWukGrLwYDZBJ4kVg5dHjiE5dU3DKaSm5ddGM8ywrCeLFRKNUf5DuvKM9yimj",
  "key6": "5wxWaVt2JERKkfKUyHQiUE6aUbd8aNW9SpMJrpn5LatteB1o7XVB4XeJ97dhbVzSKdCkwxA5Dxp1jsPxsDFCS7ex",
  "key7": "4aLg2V2jrbLQghnt8smd9ayzDCSY8Tmjit3v5MVCSgfHahhLRBQ7GWXFPepuQuunamnQhXYJZp4jdTFCBEVQEkcT",
  "key8": "3kJdwXNmKQJJAX67jXRVa7aKi7kqEWYmo7FS8tMqPYp398YjbEPN8zguZ1Lv5nbYD5FZ9iqPQmVJFte5DySfTB67",
  "key9": "rtLDShzKYbpXNyo9YcqsskJL2a9wF6MwPuxqdJb5eBGGssoTUMiHhD27iGnjmphHtSnQ9iHtxtJK8HNLTqwN9jg",
  "key10": "4avt1QuVTL3DNHPgjb3RDT4WsAcGy9XALAEX25ddpz3743464p7NoyhxiKWsd1P2VEyPgmmFftPFtXKMtRezGvp4",
  "key11": "4xV5V4SCALVoeMKQASBenKZzFK3nsVsQmaXiegxDjxw4WbXud6Bmqrpun7rL9Y8CU8z6n9kTkKz5X6upp5t3pP4S",
  "key12": "YkVe94vwCxHDNSXKCYCFrToVKsDQS6LieE1oyY4uxsFtQqE9QX1M4egthd9cqDmV7yBqkSSechXBMYqzMJrDF8u",
  "key13": "5RzUWgP8sgPVTHx8VSEZqNSWBKEhTgwHQcKgLMUzHy8FjLiKFTQDHBLUys8Vg6J79xzepeSCovhP9m2nqnZWnkK5",
  "key14": "3uEJ6vVLW4azs7Vv6tPD76qD7a1BXXuJtAza4wpp7PC8vdh8ppeL1aZ4n1Kf4hQdzKH2Rv8hhEgdVyzs2kjey6Xg",
  "key15": "46eLvB9P9iYi55mHby2qYdr687FhAjcNtHsKxLzyP8HwwcMRECP3jHNwJVzcv46ipbxGbo8ZyUESZBrphgQyWN3K",
  "key16": "5tbKcT886HYsirvuctMUMVLKJ3XZzBJvyTmJti5dj9aPL3k5ChDQXr7Kz8tnuXJqX8x12av3tWi3YBQphDUjwiUi",
  "key17": "5qKzu5RwzB3uX1G5CQJiWzgNjhn7UuhE8FMwJv5mBJA9NCAfb7b8q4nPXaUSkVTcGfTVMmaAk35xQiMzEoj2Au5s",
  "key18": "4kKPkGHQfs5f3wf6aPCVQzUi4DhdoF7W9kZiaMWRWianjaaF36bVerb8UMaPs4ds56RCo21oEBtP11bamQLc6j6e",
  "key19": "3oZvyCbCid1DPphWMin68kQouCWhcjUQyGDdaZm2J1N9dbgoy9gAZ3WVeF3mspmy2ZpFoSrQVf26gH9ZArpmD66r",
  "key20": "3AHGnXNQvANLrwSrTRPXnXRmCUdDmptWRJZ8JQ6c2RkDCAre66VTyHYCULn77M6K4zGtpehU61HoHqznFecVMN3L",
  "key21": "3eMNDWTBBzcMoVDG3qbPfpCn6WX6n9aUW89PjZMzpSGhWFb9u8THbBEnwPxvsSpsGvjbSVNKHy16LsYVNaDMW6Xm",
  "key22": "67RN3JQPfL6qTmkaNL3fKQBZrhR4vUhFngfoTmXPc4VrV7cNKppb77P1TNyECUakRSGUsWmYTUHft5PyBmA3WQGe",
  "key23": "2ejf52L1WRsCCmwwpRP3QHDHE53cEFFD5xeXHrUGhoaPa2viTipNNgAUTDTQSnTGfAXcTJ6ZonnymrK9Pkc2aa1V",
  "key24": "3ZyrWavctr2Md2jMHPfGUKUTV3Stiyh6Xv4K1AJ356uuAsDgmfRqt6CktPEkwHvo9EufJZHjyfwwdgc9cpJNCpgX",
  "key25": "Z7pKQxeEuAMLKyPFmNNrqkHj7t4z3NwcjmwdiGswLGFKvpzgH1BM8Lv1kBxhQ8mW59ZijwyGo4RymB2yZF2hZ7N",
  "key26": "dUt8U6RghRWoDmeUY5mav7pQcfuxzMdkvsTUdKU9pYUDbtk7vQNg5v21pYW2d1L5q2hu741V3NVnizKZxKgpcvQ",
  "key27": "52LhVgGXEepQbQW4kyv627CzZY2dnArUeXsJrnRKjyJ8iZGERoukLjDAEuH5UXVwUfKtGtyEqSmr5Xvgj5z2qN5Q",
  "key28": "3zstwUdR3DNterr8GHghYQva9Qt9eXgPkNbWJSTcVXyeHXimKwCo1NpaN5NLeczcZ4azXhnqhdM9oaRLi1mQ1Kee",
  "key29": "5NZtdgJy7QC2mFGL36RhYL2TMg9zWyRZsmf4mZgzQ6y7ZLgWCiw8MGjo2X8QkLXN1LU6e56yBa5xf8b8e1P3EBtH",
  "key30": "2ZSsd34sR31kmfQzgpXuS1d9pEWa5m5aRq4qPWeNuvrF6ETUwXrxST5BTAxmKUps3reQQWcxNFJ7UnF6cFtaxVuX"
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
