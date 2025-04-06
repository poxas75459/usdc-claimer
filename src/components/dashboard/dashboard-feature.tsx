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
    "2f35R69XWSiA4LFvaXgWV1qsNyunvZLf2QEthSPkEJbeoRG99GYByUJfH1Mqc9bJDKzHWHW1qRzMe5wQb6uusu3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7v4CZLuBV7nkpb6byhCPUU4DK3fxutkSvHXjNfFU8Lj5sgPaezi3DgZcXqvq8NVruWCDLNzA35rUPxRDnqZ4q3",
  "key1": "2GsixDgrNU3NRtbiWqiADL6HuSkTGYRFF3ehQxCGZPCB4SQgzkCGF6S3gGbKgkqen1E1PjNbu8vt7oHDcCgAqKfL",
  "key2": "2KHXFUANG7nYPNCeTnhDhHTDZR1aTy2jPZhr16PAwZBxg1fCcxCTbab7DDCcVbPaZ5zumcvS9VYHv4AsoyFk9a2t",
  "key3": "5hNYsFrwm1XjZyhNC2NP328YFtiPvpf7tQCYkmrTCu4NR7nd3jAnRAfeLNxnMgr4rCEASvJ4bbkiYTfpQHgucSRa",
  "key4": "u8hdNsZHTEyFvQwKRefBddAzwaocSCWu1rLma8BurJfvCNdQgco9rwJkDTksY2s5xrTJteY8joGvodWEZvxjU2q",
  "key5": "4YFYx6Hk7etV3s5pjsYrBNRxuWcGwknYhXARpivqcqs8uGuCaSDmYd5DKYDqvEEYx52artj2ZYDGU6VrCscrXoSp",
  "key6": "4NNxYmz6MVGEWNpndKe9Lf4CRmLdSNysVafSd6KkS7XjPBpuzFU4dvfLTWbt8b4HTC8sbAzbNmUG7f2jczM1QLLc",
  "key7": "fSLhnaK6gi9PQ2wmHxV81rB4du18YXn9ZKidMm7hQox5SgFWGfjtLZGP5uFMP7XTdwKgeyB1aC1Gc4gkqiFFmmi",
  "key8": "4TZdq8eMP6o5RNFcQ5E4WawY4R4JUhPYGPpTAAh8J5HqWuZtA42GsKhEmfQnjP75uU3BohhALxGF4zKPm2CzUQVu",
  "key9": "5EUUTaZTixCFypf8b3TqjY7V3YkUooQB6X33vEdg6poJSRrBwL4oTd8jP1UHWDu4Q3A5nCuw9kMjJKgvUCTSZfvX",
  "key10": "3JmVFqeGu3523GiXfeJXr8NMsBHoodaziLNHLfrCRrR6k1gWcN3LZQM4nvxyYG5LDNNs5xz9mHhGrQ3eYM4uYLtv",
  "key11": "jYqec2FDRmpZLf1NUYuz9xN8YADKWZcAbqdiCwWHH8AaH2JWfX5Z7Vgh3tg9GLAQPZ2s2xHQrX7cFNbioL8oRrU",
  "key12": "4QDKDmGhqoGmPGRJSmwu3VrprFrbhbmDZG58EP3ZB7p1RKw7qj8ZQY85QrtsrEyUncEzSYHR8Amjtjhy6Vxrb4Vc",
  "key13": "2eo4WuWd2e6XsiheNqr1oAZYpWvCgC7HHSotm818JsEpYS2AgbcWMKL4rpzSMkJ4WuxbdZ8RdHgAZweaBo8fmfAg",
  "key14": "3QMxf5u44cNj8KnBGnspGeaw4t6GiKUhJDoWdcdC5DgUPVqoLzqGszAhHXiyUVsYShygEqfUSQkRTRZ8dWwZKyUi",
  "key15": "s7agrDEqL3zuFqiSsxgbUosDoSginS4jPCHTS2zg4mfmxRpZDTYxHmhMm2fcabGyn168oXP8FqdmtdCj8DmtYU2",
  "key16": "WVEcHbDmTteWPeZhx54xwZEopEgCeXqoWUDEx7AimU3HzetoihcL6jQNU3ikkY64jaYPpkM1YbXSxStwjMAxRoM",
  "key17": "46s3pobcJWWeiFVeU1HUCxjugnDYX8K5DwForD4m4fVSqWgESyyrJF4onkKVGra1uP5xUvbu6zAQN8NZb5J1wuEt",
  "key18": "3EfadSgjHN7m7Rcu5W8J7ZgzY4gfZSGAa5UeGEo3bYR7W68hmrHdPbkCq5P1pxHqPPis62rM7b5p6BGN9cifT5pB",
  "key19": "ENEeUAfeBYtAxfKSLcPe2d3YMpj7XVHWoHUFvZsa9Z5yi51Mt9a4idUAdQJrSz3pq9p6vjr4NYUG9EarcLMjsq6",
  "key20": "5iXFD9MqKAosFtErBKnzb2ShLJ7d6MyGreGCQHEtJFCbo29eUXiWTYniYH9z4LJEGLKvk2E9rpSbp4epn2TjBKxY",
  "key21": "2hZL7B8u9tChAJLgrtkXFYBTxAyYv6j3uXr5SusskrrN68eSsir4H9dzTzpSCLG97bg9pJ73LpHrfUef3pptBUnD",
  "key22": "3SkSNFqPuDV8YVALonPwPF6Kpq4RKPeHa11xzodj9FWddqJ3zsDox8jJV9vNNifsQ32SGBpPn421gFUEmab4ZmVL",
  "key23": "3Z7E3c4dVqpWHTHd1g6vFR4sSZLHM1zKUZ6UB4YbFoUk6AgeztVrFvtCmrHVr3NLrdM1rFH7z3ta6zWp4vPGiNC4",
  "key24": "4NpXkqoxh7De7wZWZQ3fWVXG9q2hnpq3wX6jnYY9aYSWHh37R94jFDkwXbYsaZNAoPCbWg7UmC38e3RXE75emqu8",
  "key25": "zWEsi8fZNBShddZs96BkhtrRSNjhkKaEokNEtuEZo6aMQ24xHdo3RWkuo8rktsKmF2mjas9ZDXf2NHx3v34812x",
  "key26": "3i2tS4RuGJHTEtTfMdWcb5PNAmsj9xmCYRk9APXZBjvVp3beSjdshsmwT8NZLg5EhjjVcGZLWwQ1rrDHwZSYdJPt",
  "key27": "3SPheZko5fa4G7NNJsA69bcyh8N3q8naYY5hLvkfdoAczYWQ3pYHtgCVfehwLbPsN159NZM2aJikWejtwgTrk3N4",
  "key28": "3GwDGcWSe7tXWh1oZWfrMdBRpAMDG7YVcDwu7BJjzSGfU4br96Hs4adxuNghD1hSvayAJHinux1Ue37DmUwmkx7o",
  "key29": "4oZzFRotH2fo7TDL7aDjmnJFgJ5aBDKf28xxjJgaK2qifQw6NECD3ogG58pCmJnPUkchLCzEezpTqf6rmQxuNkqh"
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
