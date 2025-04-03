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
    "wQc8zNdAQdTo452to2kBQuD7fxa5V2TNzBRxwRsSEetjnrFX4AnxYLUzQ8qjpZRQ76rsiDCvdoY6QzudioocBqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mX1NFnFeF6j8byTxRxgYvRNgJiCCAWnR9VhmLoGysAKTKAobArkvVEcEgXzgb3D1K7bFP2w1oSSThLTfbNyeE2H",
  "key1": "3CDSkyyR4BEMmJcuTHVnJJzcHT67s4LjSg4UNUuExhqQPJJLGqmyJy47gnTWa73xBhjVaT51VJV5apBfgUZ7oeiy",
  "key2": "3HHsoz4AaMRLBEAdxUfQCneeCrTrQ77A9XSLoJpSEL7hgmG7itk3fJ7dqY7yF8NemDyNyHgwtGRetvGqyFnwrkmk",
  "key3": "5L1zTZ8V68A9n5mhjyxgYp5esWZYTdG6PXsycVGemM1iscS9yUDzugREa7xpSRQFnRMrJNXMYM7RuPf1LA14Sw8N",
  "key4": "3CfspAohpEHaub4HGBEPTY3Ky1gevj9XvxLEuHQe5J5nCdtqwoqQeVKccCpNr2ieNFyXiiBSr7JapTgXpzqC2Gek",
  "key5": "5gu5vyUy3rMX3E1Hd5M1eTTFPpodjUSLxSy4myjNMmA5KvLw6bnP2ocZueUVo1aov2gqX8dVTP7WgDWXrGQX7Awh",
  "key6": "29L1Yd5gbwS6b6zn8VowYe8V7DmfMPhnEz6fzDLcQYk3n5fjT7PpyEHC7wKnmw6XqQao84fEpNRLNDJotv6uZ9So",
  "key7": "3BQYZFiG1CNDbJ3SqGRtxEYKEmAjcP8uKTRNvYsF6Y7wLfS95ej9kMxY8bjw1JLJRDJpSgJq5ZUWjXnhqzevJ5ET",
  "key8": "3yQN4HVS24NBaVcc14YUpYtHtB14rWjFdphFTirTjMei5fsuiqc8JWxbf6gzvYJwAJUmVWWgVLwrDrQXf3pGQhtR",
  "key9": "5BcwNZzzcb8WfSV5xAhVw7XEZXNBZbuQZWzM5kv4dr365sTqiQCHJH5W7bHB9vrS7VxUDhKZKrdwVZLfx5DVGx4X",
  "key10": "5pe75b8YLHZ2jj6MsnsZeGGGXs7m5w8N66QB4o6yiCoMsg9NWJCgSHQaMNFJiJisya9T31S5bdT9WEpFA7Epu2y6",
  "key11": "oJVaCnXdwohCsuuac3VD1mCvvXi9bTCfbHLHU2fL3YTbzR1yxS467QmzM93cUe2cdwt1Hf6bwDfVVtR3hvRy2DC",
  "key12": "5Mf5DKWqGZ4KN3YR6xsArtwrA1jdD9DPfSmNN3CRqu836vxk7tTWfEzRJ8XbofgHeS722KTgtDN6UuFHcpyydMRb",
  "key13": "3BJsxaFgFzuy4bXxcLKv23zwoNtzKf2PweevsHogtJbfmGHr6ytsqQ87T31W3SJYmcJRgxvyXnpcVfbNcguaecPc",
  "key14": "7sDgELvrksZu6DLzD2cHtLGPpCQexAy1Kod1NjQrCW4tHDSmQXGjWpyr2N6WjD7HUPMEhe8YRkRs2oX9yZ9H5rZ",
  "key15": "56iejcqp6AwfAxMH8V7ZbWXiYp9mgpbvFWerFRYwyFYej4oiGzbZbuw8EUTtJaEwa2fbPHMfT3yRU4g78tkECzQ3",
  "key16": "AUtF8kqxHbkTZsTBWqjzt3yzUDkDBM39dkuKDRVG3sPhi5TTzug9G2WPmCUe3Mcysg3HXVBXyygYrbovWCbccKZ",
  "key17": "2Mw5joKJDeu6SvciWA5e8KrZn8Ue8N9KkysUYUagaKHa7hbNbvuY9acdS4o5Lze4okf7zRYaDhRaPKn8baPCqxWX",
  "key18": "fyiU1JsFUzuk5UiH5RhM2vWqydBSEBLhZrKT15GhsJaTeRnMXTZSWFsVj5e859Q7riSbVLey6xpkz19KgDa68m7",
  "key19": "3QAvqnwH31CCtCa3mZoBYy5sqqaMabJ6UB6WHNTBLdvybSX9RxkGT5RQBAZsk3hU4thuAaJT3CLchFXz6bGBaxHK",
  "key20": "2QevPto7navPWXxwTcfuoUnSZw1ZZJEsJSSr2SDqdiNsLY2tGaQMrmnU1bWNEqJPQCvrc133GjZV6sYy1azyPqbm",
  "key21": "v1UnJgEtAgYUiBfdBf97i4Y6ve6387uu5Bt5gjGuHrqC1eWFByQuLg7RhcP6pApViXDZ6HCa6Q8tjAHE2WMJ8D5",
  "key22": "fBDSP93ifnbSjeaoTGXgcA9k1d4WWjBxqwqiaS9Nv7aJLo5x1ian4UxpA1t3FFPZXNtfDaVTkDsdECXPoXcNjUw",
  "key23": "5capsMFm4mobW1x9YiQm5qNQ4oU9oh2rvwE542tDcef8JGK8LWHqm3UnJg8uKMs2169j8gQY6T5hHLFkQCXsxmAw",
  "key24": "vTsy1ug1yipWxj66zgYnf2YXPvc1ttWX3ZcmLUdcZuKZC9rhz3Qn4CreHHoGrbtnRyiXket92onTEi4hJN2cxZb",
  "key25": "2qZYTmojz9RLmotaLpCz3szTvDUXge8yZK7cLPeTJGXgwNH3kuRjxZRt8bAbsQ7aAtuPsXzwt2ERvH4oehAPucS",
  "key26": "2uE7aU8Akx8k4sR65hdoYKSj5nB5P9Cy9Zkw8s27ZkpPaqvbfa7Uv4PSDnW6EqUbr7HJtMzw6ydaF4AwsQ4cMCmh",
  "key27": "5uWUfn8cG4dYd5ZNAgSBYDZhuyeirEuzYpJLmS9EyBKDvfegbdibbGUiyVe18StaTUtkmS3RY2MGwXJwcdcj1pH3",
  "key28": "3fBcRg8d4197s8heFuwZ8RBz6F8BLGqGVoLGvpJsjHS4YwGdxSU3NyCbakZRfsQyJxWRcWqkLhrea94jwVvxYkpT",
  "key29": "4je54bAfmEcjtZdLHhAAcLjxMh6mjPY9GchKvGM9UQQxiBTraezvTBAC2Un3GdoxfRJhHzSgSDwNkjb5WiUFygEK",
  "key30": "4bXkU5YMzrZXgZWrZgsh9Lsqtja3cZQ4BhLYURYHpShR8mk1Nk6qE7W16tnyvEmdMbFWtFESEapfFBdeBTGRoPMj",
  "key31": "49SGSeskGinrDm2i4fS2KHHtUFU1GhLCwaD17REwUTg8gxQZvWgCfzMcg26Vg1dknCXVqK6bXU65JcwC678aYqhA",
  "key32": "hcktc4matPXyYpF4tAJdi8ASbX7WtaHSdiQJ1iU6LiwhPDEx6MuSMsRYDjZYSwHiHxCCYjDjjtWRzPPvVfr6ja4",
  "key33": "3xZpa3ivPk3Esmw5znZ7i8BcXkUM5CYuYt1ij6uQ2KRThkEE13Smw6XxJmBSZnAVbUdXSZjmCxpFUZCeafAwgCRa",
  "key34": "63NizDSRM4CN4r8QSXowXjEVYfbstcEA6b4jUngELPkxh5oXMZZBARJivjE1YHYdns3FGvaqYoGVQwmy9RJQjNf8",
  "key35": "PG7cFp8qsm3ZYjmTpTd6BN5c2rFNRkW7LqattcwdcLQsUGZ2hG33Ue1yWpYPDHJGt3TDSa5NCexgpa8A7QCVesu",
  "key36": "3Bt5kUSnyFFMBTdZ2rhZBAzwTm8XBcvrcr2iHTMZWbSRX9o5rub1xn2NoKCfXpznrfz9Vvztxpd5KE5ua4xVSNWd",
  "key37": "5bc4KFhiHPbvm8U3yvRn8AgUd98kuMmSkpR6nCvPRQjbyHheXke6JwQnuJhkkEEEojs6YcsxLAfTrNjcf8SNpHkr",
  "key38": "4XvjBxoPcBEFwnXmzqCBaPAig1pwVuE4gpFCheTxA7a2a7jHKdjizNr8Sxsk5c9LzQjBzoA9NmtKQJqTPmFJhXYK",
  "key39": "28VCdDXx1D5x36pYBVueb26GkimVE3xBv7ro6MRHFobyVA6qyZaaJUuUqqCHgTsM544f9Who4mQVnz6Dx8vDdZj8",
  "key40": "5Dg2bsYq3ZcyTwsFsVh7rEhyd9RanQvmu8wLQzD6VCztXTR4gZEMPNphpjmrGQyeymfjqwnxVWSzNuPanxdngS3U",
  "key41": "MWNzyj5opa87FiA7dHUEpvRr2mxDCAjYT7iZXVQXnPMCTiPpVaLjp1QzqbYybghU446fbY1oUqbKv1owEVJ8yUC",
  "key42": "3gW7iEto6VuFztGKvXntdu7pCJmwn2v2Lnhjrk8niSYAifEuTmeJdzzXgMehDRXzU7x66zS2sNYFpkykedVgxpTj",
  "key43": "3eGZLPgim3S81S5xCeDwUfZhBcw7Ku8g4BWffxua7RMyjisvkhAyyJBpDNJ5C1sa3BkEhWeQGpQebD66hx71gfqk",
  "key44": "zSsCrd3pyTGmhRy82vyt7ePBk8yXjEw3HTgSgtYvMMg2NAMH5HpYJZj7ZX1P2akvZr6FCzNnqTMJw5BcdZDYiHe"
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
