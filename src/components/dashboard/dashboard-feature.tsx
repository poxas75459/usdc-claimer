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
    "2uqeixLrPCksZBv4LXDoPbY73QvEHKPqg7agwvJiXayCcm3Z1V1vp8pcrkVJHVd29yQ6SyGRjhyXm1tAqgAxz9Uj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDBkSe5e6UMBBdeQxKtwZGDtHYHtw1ScDkDAMj3EHf84Cjki5LcnAwPqAYqZnaVQs5AyroSXh2xDcr2QCvmbh5F",
  "key1": "2SLPRCVRLCTGyCuGCRRSwcjnZtQvbD9V2xuDcjAuz4EDTYqo4cfj7F6RpGeTohWfjrDsP7CNNNHsvHATHncLw2Me",
  "key2": "4JnHW27suiQmFVLKJQNmuwAnhrhzJHYwazBUV31qDEZWVZPouB2FUqKmZRxPm8kAsgsvxQdzv5vmnfoMxfRMoDfM",
  "key3": "3vg8wKyn5FbKq7eThs4hym1msNzFVnPeuNCvwrz57Ra5aCYxyY1CavFD6AhrEQ8o2fxWjYQVaxh8RDmuFo3jf43C",
  "key4": "Vs5hSmXMrXQzupyYQZfagi2BCC7rgJxGzHVDAvbkT1mHqbbK2EmwuNWKyV3fGG6yTg7uiCKFmCeGqNSwLpL88uS",
  "key5": "zUzf3JWHJwuFCNWRKMEbJBWUgQQn9ZdetL7QivnhyZkTJrUfGBc1WR9KTFnmz8FxGAVswN6rGWwTj73pCUAQXDY",
  "key6": "4t4Fc75XpnWDKRYSuWDyvLiHas1ddP3KtASAUkCrUz3JnoxhEY2Baf685xknyUy3uFHNUb9HSNHbN1eiqTecsam",
  "key7": "39oT86cVVudfUzpJDBYXLSXQMxuYC34aPocWiA3sD4AWxopGC8bcDBvVpzxqrgQHh7gRJqsyoist8eYcvPEXMKjN",
  "key8": "2bG9JN3GygD5CxUXYmfKwDa7ajkz3noa8SbD9bzLL7mMhx6qkieJJDYjk9F3x3qPzgzbEhgNUBGArh2VbGb4sTq7",
  "key9": "2c1Y2UAxc46uxij61dVY6PHWMxqzGh6WK9buaPCwojorvXJDournEyjFX5RfL6gcHMF6ZpXgkD6qA4uySzJXQzqX",
  "key10": "4QRzH4dAVBX2oT3R7gAuy2Q7TktKpscSQwMN3aEJAVuVA3AF5cXagM9AhpkvTQmCQHBsuwiu95ruZD5xjxmuKDX7",
  "key11": "3UEgRwzH6vgyKZBNhha7ykykgcpZN3iKZyBpPjdGTpcxbXaVngqfxuTWeHxrpNLoZ1wqMshJiZ9d2jRdxQncA1jz",
  "key12": "iXPU5XyFFbhCZnTj7vqbfjykaP3iZ9GRCwYkgMnosVpVBKFsMmqAcWopqGLf4aAbTkEHF7oMrfPEtgbppopk8No",
  "key13": "2cFD4vdWGRT3aJRubEV8eCmtqxTvnVoQLW1AnH9iF4rmbwbUDcKN7ihYtyx9z8quo2ScVYQfaEoUHqHbDoqMnQq8",
  "key14": "48Bp6K5NR2LbyN9M1oieuw4V4f9tgkGnLNcDGBCTWCPaqMSmi27FckYYgoJopmGGTpvQrVd4h6VJoHSa8Y4p2M1W",
  "key15": "abTDxpzincXLfbTF3EhPxYXigJvuPY2uqNihEpwW34SdyeNRU4CXDX32ussR8VepCzfz3wmSEQ8C96xqUmgpDSL",
  "key16": "656Pf8QhhVTUcMgWqA5yuqBNwscSemkz9JSB2wvAyqTdyC8dJJrNigw1me7FoJpds8LZBQEALkTBYj6SB29j1zUi",
  "key17": "9mMYc5hpAG8ucPawBMeWpqxVqJyaNqpRtjEiDq6NoUZnNgZhCB5P2ZoboL1AXHmWEn3X6AzDx5NAKKLuWmy52rp",
  "key18": "dL5jTJT7QhKCgEsLZZbgaprAhmRvamoyjJQfRzVTF8jK95n9azwB8me2oHam3HZ7Z24qKXKXC7mzygeL3bqmppj",
  "key19": "4A3zzeCaUyQaTXiwUPkSEwMmvZhZrAZU1ViY9LDHUSwqghAc4FewrLmyP9ZvvgxCSDkHWf4o935Y3ifrfZcK8CQH",
  "key20": "4TQSG5qmmC2VXreakYZQFuEP28wMLowfh9A78bjPEbqUqV6FuLnzZ2DVrmqUYmtT7f6LKRrhwMHe7YjiccMPuUTE",
  "key21": "2XY94Y56j9ZxRjNxD2CdeX3Bgah1MTLbU5yAw6Cr4F9491VUUs9Y3Hvb8j9KpVLxft98Jo8dkEUWCYM7noVB6gDS",
  "key22": "5J334BpZgRciB4EzRsT71SWpURtUYJNtYawMdBVwXXRUCqCu8CuwK1K7dS5ZeNFSJxGqSvq4wVTKjsy13MnCTUgd",
  "key23": "2tbZYC8kaqN4pEzVxZENmxnNYcPMzULCWE2kFUgSiT6BcALscDjPzqw6AxtcgzDtYMhk9WCG8NQtb1ahdB3Lk6gw",
  "key24": "4H8iRB8U9n84oyNY2ro3GXmGYehQnw2nDtLzzdrZKtMJK3KN2yLDyrVgN9J2SSpjg5JrRPU4iAJ2h6yq79FXBwZT",
  "key25": "5mVivJckNNQekoeFt6XSKpjSWTtmsKc8MCwAEULjgM6xqjWzRHA71WmMWy4iAP6euX9mzyzrKmkfN9D7edifd5Eh",
  "key26": "4p8bqfT6zkgGV1hsos1BCkhmm7fWqptz9j1rLonx97XR5jyYrKQyAVgoh2Bh6KM5gb3jq25SRMcQGU2M16vTsnoU",
  "key27": "5YYrSanjtJE1krpRRds9nDHiru35Jod416d1AWymVCRvhx63zuRBPvTMvTzPykjHgohVLBHXLhfogppMAHmPG58Y",
  "key28": "4T3S7chQz9qq5erd7ARapK9BC6uAkdeJemqNuFQcvVdEBgvaX3hXyScRx1znmNdnAFopG4bsenJj3XkhiCvgvnVs",
  "key29": "3eW9zXDx5EArryK8BiZgqrAQ3CWjZhmxYCPQSddJsuJB9NBXugx7P16pxUfuf29feuHarM6hSExRCYRWEPhQH9tC",
  "key30": "4hAPq8XxFuRFGtmN4aLbJ7GkgAG1TPtp224dUhov2tBDoVNxmgzkcB5JQxVWFcQ448t9jgYFV8wjtLzrDU6W6eqV",
  "key31": "3y1LNfHHn1h5Tq7Utxd6HgktEeNyhcGeH2CYw9ghzx8hFhsTks2sPkRu3PWeowp2WmhAkam6ex4SuY6zx4xKeTkz",
  "key32": "2Bb7ZaFiLNDawBe4JgfP7AWU7J8SUQiC1i2G1naeLk4fHk4zCasqVwGpReg2WgkJfcJU6ikY6s8U6YHUemKyVtbV",
  "key33": "2fVUpz8mLpahpM3X97TRpAo8Q1s7sjaWUKcZ36Q8SCiR8rhfD5aMZDj5B3393irWgUw8v3gruRsPbxcBm6Tuefz9",
  "key34": "5AaeKy3RXEFJPH4ibTjVEVm4s2WBSoZ4YJHVmFpbSV7qSpKfr3jzSxEhYftPGpuSogNwj2fNCkjHBtL4DNcmGGM4",
  "key35": "376kYi8atJgfso9fDUoKNi8U23wwKZkALMmGpGjAR58jwL4JjHRmPJkWVfw56KAJpaHqUYMW7bhEhoNrLn9xJSUf",
  "key36": "7dtvN7aMqe7EmED45Qfd7GQ9pGCamQpqqe8cQwbUv3HkcbVrPSndGhgXhVCt2YnWnAgUsX6JxtYxPqMFonwsadw",
  "key37": "5ZwEZHYG8dFt8FsKgEzTVrkRAoQ8h9wMmVoioUUCuBTzTXm1eWSn9mwSKLY9yBPcNYoHpgSr4dkoos1HkZ8FgqVL"
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
