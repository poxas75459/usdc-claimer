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
    "3kSKweRFKUpNekJRAmvtRXyUNE7QNdqeZrVzwNXwMSr3kGFFBCiMh6B6pwWBvaLf15ZdQFB5igZFkayAVFSuGP9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pfmui7nggEwW8X3dfVjAoXBj7XL3cdVEER2Qv4R3UvJD3bPKRUpW9NHrXjz4rpx4cEVzpkcdtxW6TaH7xHM68FC",
  "key1": "XtjQTybArZ8RJUCLGyhdXcTautoNocd1qCeaeMhbxeVv2KP3vjBjAQEz2EDrhJwZx3uijyRTXtZ5J2x45LTbj2n",
  "key2": "4vTrcTQuJrPhfAF9DxEpb9MwvMz2MfvSzcRBwh5MpMLiv5TPNd9MMk4JHX5xFgB8A2uDTRWMky3UqQMgvH7ADXDz",
  "key3": "5BDJpCTqSUuQQdMhTjTh5cRDGXsr4XHgLC9zyJeJPjz5WrqRdnLcc8D45uUp6LorLQLeMeyQWihQczGhtbZ3hAKi",
  "key4": "4CEAUQ1t9BcGmtptXPLUUtqjdYnAWhzYc1FXdnTweJpfegwuknVW5PPjoHTWSGTNFqii4ru4bPdEigSjzedT3eao",
  "key5": "5ngRSDRsQg3ZyHkYzjXYCgGA3zSzoa1Ar5hnQshYGJvLcnQyQyx19Ku9N9PdEB2cUGfhgcUuh9n6i6p9CmrEaKwr",
  "key6": "3qGGKby2ZSLpLBtfdvKMM6UvydgKKPYF2QBGz923hh8KJPmJHcckpY8RJHfDtMGEVvFMHegBr5eXB9U5xVd2bLbQ",
  "key7": "5SPPERuvBsmv3rD76fMip616jcPrFQVSYofHZi95nBn2t6dk1taZF47xymaZP5Gi2WAvqEGWo99gYibrzUL8oRJm",
  "key8": "3Gk8kCwUoP3rhn4vrYgk5V28dYo1pYiAEK94EuWjCACAWaUDqErvWoAWxqHxstV9czeoTcMBfYYQayr4ggVKX1tH",
  "key9": "414vPDE5gNVG3AJkDJmcF5SpEqFCdtGFHuCrTBH3eAJuu7ZiutLSB4dJBiUYmewy54kAkXaK7SbeBS6ELN5CRR5Z",
  "key10": "PhqkGarSNy7qjCS12BjKAV5SZP8YPGps9RQfGQ3Lbdk7KYen6mGtRa31DsCx1DWguipnuVSDcfuCVsWqEMxu6gM",
  "key11": "5KhdHRDsZBHSg5XiDXzyRjwTxLLPV9DaTzZKr2fKL6KTrWPo2Va6NfAda3JnnVrVd1tPimSE5PKd1q8DqcPz5Qcu",
  "key12": "5JAe84zmAKRHC6hEMgDeJAvjHmdTVqmJDhymDCYy6pt9nHPUFzhp1prhMrPshEUPjWsWXrkHRYEuGbdKkiMKk1gZ",
  "key13": "221r8VoGAfARhJmD77sGKZ3nFrWN9urGRyy8Z5F2b3Y98hHRTuAj8d7Y6E8JCgAgf7CM3vscS1QYzUjYxcbHWyS1",
  "key14": "4nuBMzjRqGcREaPirmUv34izttMBZDksGeJgWSJCksue1tmM2cPn5dBWjhP1NpioABTAUa4pQiY137e43ke7hSJB",
  "key15": "5P7szTfcTNtMpiQ5sFTMVDrPoovRhz6Kuv1Q99he4ecaujwTUj7L8YR4ED8J5LQVpvNBR8XkZsd3LouPXz4JBiej",
  "key16": "65Q8BZk8eXbh8pNbuigXNtrb4s2P5uvVAfKf2GBZEJbNeHAM7bvLLVgr6d1vnejosAUQSpp44MioMEqLNmeTHMaV",
  "key17": "WeWK4CqPzzdwhQ2uurStpM7K9AvjzsVtgTiZFfLCgtSmkQcACnGUtjZFC4akbT4pnq6BUPEMg6sQ4bzYhag5ZVJ",
  "key18": "2mZoPPHNnH5cQmSuC47nCjzCAAaWvkUSyJrd1JhNpsR2Pnz4p7nWd7RL3SH7SSFBH8Dwxv51VJRydW6bTtV6oQHb",
  "key19": "4afQdgJFSfuVrZcvJPBLdCfKGZTxsEvHRoT9so5yA9ynte1CYTm1APYdroYLjwsx4sKZc6NqJE7t6j2M382gZJde",
  "key20": "FCQwz3X2ydPHdM84z4HVoa5fGNSr9bp4oqFkq2xKXMh9RUAUcFCxyGkFTpwLwTmjo5YEvxHqgUTKSDuCqNFdZkd",
  "key21": "67RqgPbirBs9vuCozj5Bp4Cn95dqs2cQQA6dtASfxkejFHZjU42qDACdHjahxzKG29WgraAEbgxsFGC897oE9gnj",
  "key22": "4a3NiJaBd4J9xJJbnHYpyYhALHr9LvuHwP1gLVvo6U7q79aJfCSHQBuvoZe5mbmh33CQDBiiiUTkSBu69po171iG",
  "key23": "47ipwBaxdJoCd1edLAJ88fDL3FmLSg7fRWiz5ixSmfH4RhduB2D9WASDYeLh5Xyh1Y9udoP9hgWfVMhdU74ivERf",
  "key24": "8QJaeKgi3WVgPndmUJjLvL4pd1pkJRrNc412b3bcLDrcQ6KrJSRJQXiSNT9ehXHwE37gLEPJXTnmTtuJP6vbw8N",
  "key25": "37BVKtshw2CtGZA4rfiwYwhsqZqqm6b9hY3v4TGLe38ocVHR4b5YFcWSJCzXuckgbPTkE4ZQou3xpmQJwod8952w",
  "key26": "5Q4BKJEE9J2XNweTrhY1syKsnvUyzr7fBJp7s34mZwnHbNd1GycyDifAkLer75qYG53SyufxhwdVTdnJsNgKSNr9",
  "key27": "22g6RMFyzY5AidojfZVDyTo6Asn7ve5Nepk3jFiGGZppn1LHtE9yEvQCuKGdHrUw9MhfQndmciFezpvhx9bZG188",
  "key28": "4a5HQ8r4TtHUwq7HyQHvUDKDMubCu6ZhAi6s2N3rBUsG4rTrhSd3qwdmw8NyM6wMv4XK7h1DxwbC5WUJ7A9ztS3L",
  "key29": "2A7SitFoxsuGXDYvterQ2Mk7rdaJjo5BxMHnAPG8JjvaH76HDEgN6WU2Rp3GZKw418TNTbYmAU9Hs7cTXWqYC3Ly",
  "key30": "5myr6fu5c9xZwsJkFc5Fwvt7ZWha2uykQ9FaTiwmAwCEou5cScdNKEAFVoE7VydcWzkAvVhSXN3K421JgNWJawy6",
  "key31": "Qmgzo6mrNZiqKUnjRTrQCMCuN34zZKZBQubHFZpYpT8vN7rX4RVxsQ2u88bYH4mquiaL7g6qRQev5rDHxhnewNz",
  "key32": "5qnfN4PxgEHhxRoj9jRUE6e4zUeYLaRsxh5yxKcFck1eKiuHjsAvT6aD9uGHhwuJnKP64mr1of5SsmoBZ8FmqAud",
  "key33": "5t1ZTTN5zLTUFMfozydUXSveXqZSTF7weaaan36kbbnkR8i3JjpD1KL2StWuY9Ec21g789n4au7PzoD4c6HYGiAD",
  "key34": "5mj1r4FBUGeCZqSGqZUZX7Fmc7cLoQpfmUbyvwF96xxGqygjy1TABQGyTYBT2NV1bjnfYjPYzRszHNncyNjc9XAY"
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
