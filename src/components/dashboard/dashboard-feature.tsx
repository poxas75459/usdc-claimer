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
    "27TnegLaWof3rxw9xnPtjJMUqTg8eRt2bqBZYprPT4FTSS3fRjYjxmmBev1Ke9V7PdXPMXMkQHpeWKaCx4eEeuVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjAiYLc849hAEKwk1TLJjJJyfaH8bVqBB5mxkah3j29Dkht9f1zLxQGDv6qRGnTVPFFiJaGEB6nyPtrTdb8c4pg",
  "key1": "2WEUN7XXjcfvvE9p2j3ih1h8KSvFc2AZWzHEdW6p81ee4PGhkXh8gGzppqh7Yw5UMhcGPhpgysZ5yJMaCarYn7qW",
  "key2": "4T1bAH8tJTdAWppVQh7W28JASdf9m1MZYNF6r5cFjUSWGALbZz9fEk47DrrtuQo1tDXNsKBL2Bb5QcFxhAAuNAsb",
  "key3": "3oJPTih7KiXkEZWUnTx1kzg2BeBrdhMvKvCMUUADFTChmGvMgYAd5ceK3qv6iRqo8E4LD31U6jQ7LnbKXkFdGUVQ",
  "key4": "8XAD4rvAzPC1FfJnzQXyk5JnTV1ErsQemXHaU8jbnHBPg3SJpHRcrwuKjQsb367RdtS29FSNUrbDfm8yZ3nMqkk",
  "key5": "4LCwzPmtVgnzz2BSta54VHtTbFLJ5XaTHo6PSKumbXcCtPq87H3wjkHQKzcn6NdJ5wezHmvjSnmcJTiaNgz8W169",
  "key6": "3ygi634kCnKgTHR25T1JUChQfog8cWTdZSEiLSmgGikwrPKU4j3PBUXa5LV82fg8mgprQEsr98hAUEy4tMdzA9Ri",
  "key7": "3yfmnpWacjbVWEyJ6AspAqDWySdcbWoR1F1zsH4eEWgKgzi3t25AtyiVjuAvwgCVJeRsdKas5SfAEz1Jq93CWWPx",
  "key8": "2yPwKfU88K7UbnQCzuHU76j4cdgagbpY8bjRGkhojYrpKPB2pi8RAMxGsYqxQ8Ri7XKg2bgmTfanfavJpapkJ6Lh",
  "key9": "213SPUTFRLYpTAqnE4D8FEtpksufnr1uBmPDdHoZK8fhaS25LKLrn6tnkZhZsEphKAEuFTXGJEsKN4ihhhf53uXe",
  "key10": "4Yv7aU4cpHkXmJDoMNPKArDs2PW1FebjniXerSaRmy3C5DGqLfUCy9DXT1n7Ama6WD1XjVrDdCgrYMZo1hQGvjPc",
  "key11": "4t2vqxfMnt5HJMhbFdkpR7VscaqVTajh6xFADhJV7FZ1p8zdfPDAtmgBLnkvkvUCDvkd2EMnVTL9TDD5kfTU8DtG",
  "key12": "4mDHDUMmUbEMpJUVBKneuscJ911GMXo6CSzRr4GW9euivujieuPNQWXyhpV8y21B5piU5HFZVz84pJKK9jLua7Ac",
  "key13": "3azsr9zUpFEfHAdSUaqD6Lk3f6vZgvV6ZkZmLrPxuMBk6kLntdR7EeFtQYTJ32txVeBH6szMFt2s8pucXsq3JWsi",
  "key14": "5j5PcxPVvnpySNYaoF1fSo98n2d5CrXfTHNQ6kKYM8U3kPBdWTxPipHkRFHfNECj4w6uKewvnY7qctggYf1jjg4t",
  "key15": "4akGZ6hsdJxks8QekazncY9r284C2sQsejBE5FWqxfmsdqZYg6LXUAoxkNQHZLbLMYDB6NXKKbuYQ7Te8E7gPHSd",
  "key16": "46NZ7JjERrCB4fWyDuqpTX4zHgy6DeGTBj3T2EFLFydv5XsM8ZgKhorcXMj5mzR9XMurq3dF7UjNgPvE5NbwiM66",
  "key17": "4PfH2WEBruavDY3yfeUkRkKY3jSGoyKSBurd1CcW4CZZt3wkuwdKnPRkFyF66YzyMiRNYceVDH6p28AZMb42f1tv",
  "key18": "ScdTWA4jVG7DkKjsbz8YE9eYivFmYQovvKg6VzGGFDXec4i24comYWYKkm75rr9ztCyHiR3n6ri6BEkwnk6ZbMp",
  "key19": "Z8qeKPkcPHhiT5nPqYXoKyqiS8wfXvc4n47hzRqpcMtNPLHRRiiyixmJv68e3ngidwXxfTWv4viKHVUrVtZhoDy",
  "key20": "kFVw8kWyPq9vXmaQo8rST4JZ83ShZYdshf2wBbGicbFLFYLyLQcoe8PRiJu3n5u7iG1Dyx3KLLuDxKGroeAnMhn",
  "key21": "29gg98UjdYL6fzRFNQQ3wHaaswPunMkT9PeXCLEHjeJRLdoBMvQwyM2aNngtDQ7FwY6f9x9qSMjZU7kEXMBDds9b",
  "key22": "4RWj8m7WTtd8obAbhcAkuJ57KybYaiK8cMvjstD2NZncKFdf1LBfNhLnwc1T6dGJjZfxmvJNTwYyFvawghGV5p2i",
  "key23": "5BqGUjYXKijUzXk9A7Wp7vcS2iWgQ1aHarjoVCyfcenKVH5fyyQeaFH3b43jfreYuS9Hhu6caaZSsPU1D7JaF9P9",
  "key24": "5YH8daZqF3Svbp8fhoaPNqn9tCq76bdhNGwvJx6gJHteENVHA1jDvuJmajarHK81S7hELoKA5Ghe92y9To4Z8CgX",
  "key25": "5W9B7HuWgqkKuNAKs3jvPqHmu4KEA5VADrgYU27Zuxt2hRRqkjdntnNPrnq2Cw4kw24E5GLwGbbDRVAn3WvRFLtd",
  "key26": "2dX3rXjzZUaRMYxx3dmQejrxuJCLY9ftSSgqcxQbvQnCcQc5md6E7AgQQ7N14LmFyS2Eq35cGyzcjgFbgcpLXDvs",
  "key27": "2Vt8ETCqPSVnpFaigxLXqqSRU343avKT7EjmJZkdYkYL1BDpSPuEX3E8tATgjFS1XqfM6HaBDJ5E8e2RVF4KeuiR",
  "key28": "3MpUHw1TBGLTALjiZ7YJvz6ZEqfrj1pFpK2zdP1GRujkLqKZV3waLiuY7Y7tx2Rs1gHCusSMbhDGX7rPveJyA79E",
  "key29": "32whYion8vTRXSocW1hs6eoxN9MqRne1kgbvCg12FoZacVzvo1A7qqaAhA3BDrf1V66h6pZoZVhM8FStNdTfUYKZ",
  "key30": "4Nh5nK5BYrMar6PEXPoBcBq8w8CR32ihTWBKJnRsbjcTRAPi4UEKebvzyBexZCZCwtMmG6RbZ13VXg38EXunpCSN",
  "key31": "2R9n8ax128UkJk7xJg3Y9HvmgDCPVLDdz3MRgiqepdiXoyvG9DJFG7B8dnDSYsVhc9zQvsL4kdpXvRZVs99nMsM4",
  "key32": "4egNFZGLyg2vL4h3wupLDXXiMNq3bSgW5zc9xX2k91xZ3Ls7ct5y3tkWAVkHouAhT2hw5WDYbA1bhaXe282C3diT",
  "key33": "3u5syUNUhJPGpvVhNhAqMHYKKtXGcRT7ZUk8vcsJMyEtJ59xsw8cf4DSQvAEUzB1MUgxtLYT5388Ap8mWJq5jar6",
  "key34": "32YqCE4RY7fMAGMQmV2fGLhkE5Af6y1h6Rx9ETu7gy2wmaboFGMabwy7Dggjegj1baPEhsXUophS5ZXUJV95G3pK",
  "key35": "3nT7HW9GB5MbywhUGnYz8csD4esnm6Tr1q39AhDwwVXzM9uqHev1xqdyrDARfoUyJnnSB7ED24MqUVc7t6eMi8hc",
  "key36": "65xxvkBNnRYbYkkhuRGGFL28hN6ne46T8MrGNrkkxMjpU1J3toapL5LwmMgU76whKfG1m3SrSqHvcro3CT4FLRPn",
  "key37": "2oesqCLuJ42aNKoRjsPCwJKSFDHSWbHmNdMUo4cdDUwNptBAis2hMkk13jL8J95FaiA6Ar37NF8Ywy2MfUjJKomJ",
  "key38": "3EDFbCk1duGwywzZydftsCikcGbuMzWCHQFnCQ1FD6YktUibv61y1pEP97Hk5bg6yDz59yRpD28N5eS1UX1RRvfz",
  "key39": "457DkFEWdcVRevNwY66AyGY2CySPuNFqErCNPoXFy8Wmc3Ghrgt9zLDVJRbc9wYAeEDThfsQh7Yhay5VFtALaSFT"
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
