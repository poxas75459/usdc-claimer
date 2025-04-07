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
    "5DXudrggn7yUVekUVGL63SUwv1akcbGmABoSAHWEUojtcq5BioRJNCPcJtJJbWSVGToCBgxVLTU5FiX2JJ9SGCyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bndYZALTJCjxh5YVJ2jvCvh2yEvzEMpDuN8NoLftiS2t2exLGjgWHYAkYFH7E6ENkYMvyxPzgfT8Mur3Cp9rvt",
  "key1": "41Yw9rtjm4LqLD28Hedvn6bPFPNgoCsPip9A9DV3MDwicq7Nj8cj4g1q5JcCmXoZZJiSKc3tEMKkjCMr3SRSSSMk",
  "key2": "353QjPoU6jEX6VahWHrzmL4FF3pQezr7bW2vh4J1WQPJd5azJ5TxYuRsYQtyno4fHwrT6DDKcvkMZGu4bJm17sU9",
  "key3": "2HQnA8VVwgM2HVgu92KJoSUAZGu9oWMdBEqUG3E64uDUbXN8AZUqGXaWFXF99cQGSk1EFy4z5WBZrMrnhk8PZXSJ",
  "key4": "4qnC4b37aF3vHe56PqqkosGptPDxiHmqbhKZP4XrFcQQYv8XmZJpDsLdQd3UxmENv5vJife9ZAMARe46ugsrw1jp",
  "key5": "5RW75XfbYaEgFFisQv2LWbAMhqDwcEfiT3uL7q663nJditXJHcPTgxS38kdufdy6a9k2oGiXUk9rFTLindZo6zUb",
  "key6": "4D75DBNeqKsA9tWdFnBB74riNpDNK2B9vkmvyCeE2Exb3VephtFRo2LExubBwzSzcu6c1rbMXNBNRzCJf2WFMPk3",
  "key7": "3YY4Ycrj32xFzkEP1mhopyjjJR1QZXMnPXPXzRHCSHDQzpC4ny7AZdFbx8xNTAN8yQ57uvwBF9c4mvbKH1v76RBB",
  "key8": "3EqM4Sa5WskTitx8GamavbBfJsM5HbSx6vXyFApENM1UqaPcXzg4JkFZy4zAT9m1vGWWaBUfDwaVmNHmFAQBmUCb",
  "key9": "4f8iGRKhVTxUJPpovuUUNGLj46ZqYEqNGC7Mu8M6QNDg2wfaW3L9gzZAe25VttAco1FZ7hiArRkGAidF8g5aWi6w",
  "key10": "2ZAG5qkRXDqVLkv93VAZ5maAtwGZay5Yy2AGMUj6ZZ4hR6dRuyHEKkEPQJKfPZWanE1Moh8EQ8pktvUj8asFPikn",
  "key11": "222Pc3bsKWzL6cLWza8Hgc7RsQfbhUxjWeCACywdnaNXJRNeHVseCNpnDsdekPfhy11VZVXoCWFDcJxa4xLDndGN",
  "key12": "3MSo8LnkQaxDe8u6Ab2hX5tooswq2oB8hqpNRpjNSUi51shfB1m7kiws36ECuAtMKx3No7QTdRC87kf7ZvhgmWG3",
  "key13": "2zBVi7AN3y4j8jUtLEtr9BiWyzWyjP9Sz5YqWc3jDWDieeHAegShpWd3K4FiRyqNevJMmnxsQHA7acmUDnbn57rj",
  "key14": "2rS1FSxJyEXp4aZbg6GVgsDaKXj818KczFCn1dgjsZTcS6vaAyywMqMEvunYrZd8WovSz21aiHwQ8Vx7eBrYsqRV",
  "key15": "5mdzjrvFJeE4n4Se8nzxzhWKsfie7YDTHpiwpWEqUFYU98S5AFdbfriKwVLDFEeZ5QBT1z7HaTJG1BxcyWotnziB",
  "key16": "4n5nWCQiuLehd3HDdfnxRwopTpyh2xcxhUUJPzsQ9667n4V6KY3DDNEfCkcCepMGm7Q13aA4FgmEq4VTGDiYoMCk",
  "key17": "67JkXFEe74ZcnJKAAVKw5AFAYmBB6yPW4jkFTADhMkevevYGrG2JctEZ6sjTh898YCivzpFWkeAvJ4FCTyMCyvBq",
  "key18": "3sqLqEESsS4vfiJKXNUfAydFkRE1NUpFmM1ZvNGRRWZnrMsnWYDouxwDiqsM5r4qxHDQd4d1V1U9MHcV9cVSw9P4",
  "key19": "3R1XZEoKDzUCXE363PUEo7ueaQc69ddYFpnqyqXy8q2ifqHwLiFpChRfYiUhJ2gaWyrWw22r4isW8eTB3YiyFfLM",
  "key20": "32uRpkbQkSTGet4d6MznQG2iTGNUbAX5BuMYCCkMhYszSSgvQkHBnqr7gKV8vmmRVT2CEu9CBUpAPNiZnRAgsq9T",
  "key21": "5krSdcit71tnGAsC2R7a8KfZER45iHtRkTV2q6st93ueug8a9GR6NT7HwPA2BCjXSGFtLxM9rhqP6aApHVMPRJWY",
  "key22": "2cHuxZ7xHtYmRfDr49Pm1oxLMg3fnzDnsFmmGv3T8T1u8pAZ82HmjhFoQrc5i3tWgk42cMMMtaEakLzKGhKhEaFc",
  "key23": "v1Xm79AKQL7Cmm7khkFEb2N8jXrib4VMa1JWtshbEmXuwVx8M5zZ51Fuyh1EtiRSRG6tEwnfDMsiMEsf9mcUQqA",
  "key24": "3XSKawR5rh4bg8kwCEg8rN4Se2QUkkEUKmLjLcQBMDZSFbEJy7yNPP8W3ybuGiAbVa5YKTPe11iiZKDad2es9z3L",
  "key25": "33JqYRzMRWBGj16fMAo7gozKezHURsuyP36xncKsXNs7B8XDeb5YfHodge4TDCRks3R4YUeT4N6imJvRJWctvjH3",
  "key26": "2oUc3dX8ottRRupTGY6A2Nuvkw8FJxZ9aSJunpKQcouDkpF2eNF7VnVghyhGUwHcJEa2oQeh3yVpRoanrQcyHBDy",
  "key27": "GtH3ttcthxWgKVVeQZymgD33fubGaGtxst2APQx7mxNczihfQdrnMaTAPczywgrZFJYrSeQxP1TT6fAGofZAquZ",
  "key28": "gYMjCG8nG2dZeSHr3RXAU7qcTk9z6odzQAaHYMSRWfaiscGm4LN57ncvtXCsHhC4uL44z6SCYs6rknThonnsjLn",
  "key29": "66M6Rgo9gpMiUuS8JJN9r3wV6iefG3jzD81eBj4e8pTVmd7vPNAWFaZSA6bhxtBQf8M4cqScHoLMqjCS9Sg9iLvM",
  "key30": "3emn27Ep6L5DSkMWS3ph5jYqgeFFuWqu9ANNkyvyWJEjGifGgohnXpmNtLNYBxvWEdfEDp3K55BUTWRVNyM4bpbA",
  "key31": "63RdxKzG5pRYNKvxGPv4Gwo2kMG4XrPtuu2gbESshfAKYSNdpfgxwQBFNgWw5MqWcxFzLjCJAhjJqebsrmSvxGJq",
  "key32": "5hstjwfPti2PnSkxrKgQfVA7GUMhKSJABYWunzLyzeEJGY8gyBDKsv5HWHrzWiiq4L4dPKVi2CC4LfBsBjFoAsCA"
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
