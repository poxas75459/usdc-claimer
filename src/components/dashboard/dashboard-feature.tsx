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
    "5kiTCJZXVbwNeVxcbsfR9q9nxffRp1aEfCHHoQCrEE7p7TgUqgm6C22f5y9PMHWScShUjtYKhBHQEUY3bt5Sc96h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TCmEt68jDniDKtm8aULKo6J5q1qZPWvX9XLR4JvyhAnisqdBeEZdsNT32Gp3VaBqCvQGk1uoLoFXGvCEfAhek6c",
  "key1": "3AD4TM8A8JSXdHTmB9MSmmKpRSa4UsWp3yqt6AWgM1s9wRuY4n4XiiEWL76fEaHv6qwddMDjNP1Ar6p3VyzekaSc",
  "key2": "5aNpNfxsUyNhWx932URKr4DhSwrbx9jh22nZQyMD5ShXEGMj9hHeTUT5pBBUY3dEjEEwf8ZYpb1hCuAXNsssFGcP",
  "key3": "UfAuNwRDaEC4pT221dzhfKMhfDuzEdHFMCtkM6Hy4zDywQfwxavWQo7wm8doYmA7siN3JYokJo6sjySCNcadhWs",
  "key4": "3Wuhcy8WBVyqPjCmdCgc5G8pBUuyaA2fZPGZJ8SB5YugUFEpmKL8b3jMpNpTQmsWUnDKFBEQzA98XNkBRrH6mQ6S",
  "key5": "AL5LjR8SbXiNd4CKZcso3V669ic42C9CvbgvixtobjrDugNCnYd4XeTurhFuXWCXencMF1FLJfg4EuFbmBnFQaE",
  "key6": "2F7SED6DDRGwxo8BQs9dVvB7wUkr1Q2dmCTY7FwWQeCWY5fLMKkPgS75PjG1CUR9jHyKRpNswTKp43YTzxrsEMXu",
  "key7": "5RgZ4wP23ZnQ2ZKwV9LvmySNfmXXZn4MSAtegCmctCSeJ7w1QpNyiSxTSBd8u4WisDc7XJ5GYEY9hJtWShSSWrbW",
  "key8": "6xBjLnrHyLzaGrLnZGprVVMQFedLuBxGfAmMbt6nCaoTfHo8BX8ssK1n1gRFsEAJGE1jXrzSLuh3136cwDxu1Ag",
  "key9": "2zaGUMDf7hFC4gUNUuV79zGKjMYDXCSyGfbQeSqZkw4RW7ipPBkUFMGCqkFuz2ujQmoyFwkUVG5NjCswccmfhSzC",
  "key10": "4aTSdNJ2fzehannG9Z7iefuSh7x5WF1cvwLyGr2bEb4FZJJehqN7X3GrKH2amgoJdHBVVt9nkSrTiaN8yWrJyQrB",
  "key11": "A4VaYHTy7DtRBAEqigvt6iUn4uoW9SQa7Kkd1hUf82h1vydvieqVgMcDZWyYJMRkfpZAfMMQg8qgoLXZZxLRcEG",
  "key12": "cMkryhivVWnMzm3ztv65CHaB7m89rt7jBJqYtWXBnBxR3kEDRW4EvevA5vcXKDfendp7to4hThJcP4fCrUkBCQA",
  "key13": "3k5GZviHB3cDxZryc6JckKfvtrmyVcP9Zuv3Y16PuxY9wxqbgVHTkYByrxndtyrU8XcriZubfgP7NkyoUPtV2fN6",
  "key14": "5uwSnU2e7W9YkSkjQmxWnAYMWbGqKqZu7wGH1jbQAdFjLsSqGW6MrAdZXCRgU8NH2Xd6odw8VkkJ4Y6BSfGE5hTV",
  "key15": "nfXkNdPXVAH5DYVT9pG8xJBnbpYTMsNntR8RrsqjAJPhb3Mz2tyYzHdQRT8HYeJBMDu4mb6Q3jJiaYMWQnaDAXL",
  "key16": "4zxHoNWD835jYiZKkqz9RPNCdgJhqt9wTptBkdycKQ3bLvuwQoJfhvELc3MwXXR3ksuAmfJEWhCPwE5RnZstfdPS",
  "key17": "56QL8Wvhee9t61nkGxJeTAgX9JMBqXcCEGa9MTWojYV7GRcqCfMr1U96ikAXoDutVeKVqbi9i7skSYdtqoN1jza8",
  "key18": "4fjPBb1p2PjBtU4mHvTn8xSrgGJWPGkmdkDzqvmHyFvN3wmFuJsK8Qo8mQ73NKjyhk9CBMiGxDrFunPV8FQiRuLD",
  "key19": "5uTf58xPB9xXkvuMioyauwnDEyPEqgYTdWmU1NPBbRCMuqTFRELH7ftnuF7kbPpY8Sk2z7LFyvMYewKzbsGexE97",
  "key20": "3CjcRzXq1tt7zCUrhV3U51zW29EVfrFaqrnvErADgQuR1NkfhcfiprmKuvV6DduwakDAW7XKu1sxTmdYDR6zefwW",
  "key21": "3TA22J52731H9YtCczuJJspkM1hT5V5FJwbkko1dkAepoi2odDnWMvxFfe5wmesDoQjkDNpU34SmwghapHESjGBf",
  "key22": "4wFGEWLrzbUy2qYpLxD1f8y7jvcFB3FZcWj3aRMMekURXMm14kXrnUzhejnAKFz7nzoogQaPEnLazDgoiA9h32LQ",
  "key23": "25UXrXG3ySNtt1DUgR5PnKKseVrUpuK5avAn4UWkGWrvjtYN7XvQHrNXmuAPpw2p8fzC5zwhw8Eu5WbSgbF8HcEi",
  "key24": "MFSGvrUqt3ZT3PJi9py2vkkb7fyvt2pYH7dEHewJF5nyvTxF8ZoswcMsusGgGR5jxiyzncfyKoMC3vHtBQqpmsX",
  "key25": "64Fv2mMVKZqGznMJk8uWxR6CUMTrN9GLRQbPFCZPQsRddTYrjSWnXXrvpiM8YjA5mhTauH8RKhBiKThuyhJcPsek",
  "key26": "2QhVSNMJapYXcJn16wDP23JojktM4RUyQcuHzq17935ai6iP8URqckR84buRz4gmWWV4iLrT4naHsD7hubaNQd3o",
  "key27": "2C3SBYvKasoDMgczQ9uRTTmLfuMUwWqYm2P95iy2r4zJAGc7nTtVWeYEsSdvTPuJcJCWntLuV1zmCHbrf4tFHfED",
  "key28": "59HbYhF7SBK7LKtat1NDuuUaSpAFZj3kmWsRg799Nt5AmGXa9UdNyXVPNqKaTfLL7HjbcExgKCNd4gFKg8dPErtN",
  "key29": "5sBMYHH9EsPcDaZBH9H611if4NXKhgyR73M1DwP9AyPpdV4FGyncDYB5v2xkogrC7NkeqMzUJo7m2PDF8RoNs7v6",
  "key30": "kQkSU1eT4ufz89xJekeXi6rEM4nnDMr9AzHB5KVcVAgpRAFyuSvW5DtXbw8gPnaonNgE2Ndan3GCTh4h7DG8GdJ",
  "key31": "2arqb9KAPG8quwPsSFd8r2FRLWYwgqQkmCsgR7KEcJazdFWcJ3mEfHsC7QjrZ3K57Kkvd8DBhg5BkXijgKMzMPr1",
  "key32": "413K1YSka8ZzJEZpiuuMunXMK7fsZUg2mM8bipdpTwUZY6As4hmjF8xY6BMXVdsaNoaYHjiSq2THYepiqzG4FPat"
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
