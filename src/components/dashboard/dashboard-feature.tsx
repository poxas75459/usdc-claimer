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
    "2nMdGwXB3hUuJrwYKeu6BWEbL55qnHJQ9iEt8UW7ew8LECF94TQqnqD4bB7imnRqw6iwvn2d3ffDvbhzfW6NmZ1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JoxMgb9f2f9fQvwcMKu4hbBLtMRpKmFafrFrFCHbd4f4Sis5gyxio3bmdUHaDN5QEGZ59UGz2wSPujo5tgA4Y3T",
  "key1": "5hWLNvkpTJRdVrN1VU3nJtBVpqSLZzwYYTGMBzo1tpR4HmRSo5SkyexRnNkiWeTnAV7GJ5FwXVonrHNrYeJs5ASX",
  "key2": "2KbCcdP6JQ87N32dTyCivXP3pxbLfubovvNkMFL75cBHJ7zXHFLYueANtrMy2yh2Yo27Tfwu3P3ZMJVFfBv2AQyU",
  "key3": "5ZQSv4sXEtkh9DEAnVLxBAz7q8XywbfscsvJQkRmCTMC9fQcv3SGRGioewFjRHyxbbwhtw4KHADKvuLiAkemH4UY",
  "key4": "2UVousZ5sDyCn8SG1K3NenhdER5xHYfQwnr5dugbSMvXjhkYNaUchrESKMX3uGrV95DMYG6qvkxXnu3wyktmwZCr",
  "key5": "2Z9WpkgCmZ4eqKvhxZ2tovQEpEh8mpMXdquVw2fJAs9sbdnSWPr3qtvgPapzLWS9cfT7d6KP2p367H2k5szFrFPQ",
  "key6": "44FvvnezL4kWsV6JAJxRvXegCzrXh9s5x7xG1hKdjJ9KDux8xoJzbY82qq4JeE6yxaJXmAV4V99rQtSWz2QhFqri",
  "key7": "5CLyviCYZPDS4mdLs4pgLmP6h5PDGnNneAnpqbBVaRvDx1opAwFhX1oKAQu5EamMTra7KBEVVnFiKy49K2F9pwtR",
  "key8": "27VmBdG85D9RtR7LpNNuCdfzqWv8tWsYo7Hp5ynRxC7XDQngN77Z3s6XY6981NMVowXvtGNtrZg8u6a6H4HbNhsY",
  "key9": "2UuQWst7EE4A71J5kfoH5qTK6bRt7fa6UGjxrVyUhSY6k4Gm7yJDijLKsJK1PTi2JSCaq4Ags7R8fE2trDQ8isEb",
  "key10": "bt7bpcFWRxXhVd6aPdTDkRQb5Dob7tSW597HP35AKzeFHPxtWY394eGT3Jio8Am2hhKyAePw3uXFatMTZoMb7N1",
  "key11": "VtRTV44yCHP5XranATLXkEViwGdpQ1kKtx5xkcpDus4hCwebCvuUoGj5yn4q8CtRHJtashp7qziJYBPPmkkCYAz",
  "key12": "wXAc5bKDH5zFjhJbfnyX4yGzwiSfscuuEBayvkz94eRboAzSsH5aEUethUkeRnpQPx1ekSUcx7nkD2PG7yDtY3i",
  "key13": "Zbojpfp6RdDtJBa5o6o33cPu1jq7EvboxCzPo2SbYRV5rUDE7JT2ycw2KsP3VigvZEAWfEyydizm8VqU41hwS9w",
  "key14": "4wUzfPhyAyQj5had6YXB53CYSSVSaGEBLBnWrxCCscupwWRCYNZP4Y1pVcmmdZgLJTB7Jo35xW8kJpeyRgjEW6Br",
  "key15": "2DJgSWjjaqaVptUx8oRWLJu85jcdyQPYTrkwhEiTKpTsk4YMArzbSiApMesFcDHECpxvCWZ4Fq94ru4JSoqaGRwT",
  "key16": "4Jn4eVqGxMoQozCQUBMxGx18HKLC6myxhqtBYvjvQy3UccEZn6WRLeDo9C9CZM7q3D8vKUbHHNhBknwBEmLWUuvP",
  "key17": "5bU2SErqoHwN7VfPgF319ep8mHX2mKzT3y4E7Qkc1SfHFQQJvWTDLPcPepd7J6ddB7hWgM3zZ6b1NotY9m1iMQBd",
  "key18": "2G4yjTwkVKNw9EwarXLrrjF1NwwWnW13cwgCernKq7D5Fz4nnmwQEVcaucLTFiyxR5Zk5DEJh76c1P7w4soo1LLq",
  "key19": "BtdFFC4CnrccKVmQh9LnXGK91FrBV3g3zEGJkroxhJaoomD228DWDvK9amvhyicjzcLahwEndshv67y4cznUx5G",
  "key20": "2LP1sfCaWGybQoiDVHvS9XhuHf5pxEsWwDNdTH2eQ5EdAU8zTHz55MtY4G9uZCNnyjP3Ja5GCCcsibFDWTZFyMA4",
  "key21": "5GWZngavfJShHi5RZcB19tPAsNEreQv6nxbomt7ferKMj6gUnYmZKeE3Zt5uuJnAGkgoYfurFnE5eCiwKpt8pMuK",
  "key22": "2oUbUhZFBozurphaDr8wPJLBi3NqZKFNwyNqFxVb5YUvhz7xMP9qzUkt3aS139eUDApEaSMWc4yWyf4eJkBQrnJ7",
  "key23": "3vBWhiQz3hL1eS33Y98MnzuuJLQFdWADyf36sBKxHHir1Xo11ozp5bQeXyAWF81ch9mPnBtziQuXvR82BpLGxtPt",
  "key24": "3U2iqg9ytDXqY9Xv8HgquvcSFPKt68YBDw8hTxtjyN1Yo1ZtpTE7ZvWvFBFkyWu4grBCHvHFkLZmQxJeveVvVYvL",
  "key25": "hJDtNZ4ZUKouZ1sidSsUot5Vho89pGu9fwuQPTj7nX8cna72yX13s9Dej68pdVD1qnzCnC28sDCL2xmpuAKUzuZ",
  "key26": "5qAzi1RPRTXvVL6GnXrcwmJGuZkFM1B8bcKHYvAHjvRfroTBnT8dTWsQp5drde2rhkAbeWJuVSDK2DmH9Se4sW8J",
  "key27": "576wfmeNS3Q9FykBwN3WuUhapupVG863XL3fzqnfrRRzKcUjRrrVPMrkKDXm3Z8qPWofgLq4dEfAaS4sWrbyNCFt",
  "key28": "gTHbtHGWqDHykZ4Q7M7mLnjCWozDfC3RR63xw7WFaTvfA8bj19K7GH2a4buwB1UXcJxJFjphBzPy3rsi9gn2n9N",
  "key29": "354fQq127FuJzFJ6mGnuZTF6Gq8kBfTkPogtbdS1ycwmhfxhkz53DPexxUbAmoF1QpxeuZ5AwQPX2Fn6jeiDD9tN",
  "key30": "4j3jxN7ZVmSdi4tXkCGKPvMehreoosAuzTCr57TZWZuhfdsLrybKQooKd34Nkjx4gsaaGyatz3X85rVP6uhrU3Wv",
  "key31": "4kHgRv8bwLA8tpFdM5GzwC1GpzGqMFkC4n8VsSBc16JphLdDPcxqzsstLgLjDB6Pt9Ui8y34SK2LiQSzzD5VTsGK",
  "key32": "4ke4wFGjdeZxiXqEwdhZNeo1gFBYKgbnKKVGduafyNS49BfGE5Bh9BtW1s9ytEnogb6bRVj89cDxahQEqANCniC3",
  "key33": "4A6rUHQMYvfBQpbFVEu7UJHvVgXmwGxb19RZ6oYqzsdFuCBQCHoqBGruiKpUFfp3FxAbzgXvyk3B1ntLcJTYzYUj",
  "key34": "3PJtKHNmpb377Q5E3syXZZ4kNcjdYUAnZwXUvnzWUnobvPG266mFpK6NVejxES58rkbqgBTipbCA8ckoZEYZigNN",
  "key35": "2qJ8qhoK9Hrah4KJr79namuuw5apE9rQTLzdGPFqAHysMpsxxmJuQA4JnAG7ULvijTJ84kJvBmFY2VawJW6BfLmF",
  "key36": "5YqBFRqUPTCvVa9EfZEzMbVZkL7VbKtrEhNdfMMDSJHM5WEZYG9hnU8RGdc97dzDYWQFqVf1SUGgZBppLXBUFnU1",
  "key37": "5JyiyMMoT5CYrFXEd9EP2DUTCMqhCaC5ncGCD9heVtpPoYNwjVzAACUzy3x3kbrgT3THPKPH4bwboTP9h1PWwftk",
  "key38": "2tDiyL2pZjK4SthTtPAZsjyPm9B6wpFQATnfV7ez6cLatyxBkDnwqF9LFZUeADNFDLfzoL5ivkW5EUPRZLGcEe6e",
  "key39": "3zi8AoXPsQkM9oJMNRmU2dRdarKfxcuNThrzQvFs5niXoqjqL8oem4aiFz2kCd3rXrfVstfd45usMQyNWKKim4an"
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
