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
    "NXFH54C9LBhE2VpPs7bfWRhKQjTctG6QcBEnc8dou8jC9hvBu5T46hPbN1uDLiCCj21gu8ywro3waQQtajPKyu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWkgMGe9DJxL86MsPgq8vQhKYzC7nUfy4Y2zhH1Hpw1gsMT6YYU84ihPkwpwNLjz5vGRnbBHf5YwTbo7c22dyF6",
  "key1": "TzChNYNRTMQeL6bmzC3E7J2zKc182fxfhYgP1Mkct3GeZ8FmQUcCTWd65YxZxP7wxmP7Az66zmBPjWvPW4N6QKu",
  "key2": "338tNBxVp8i1qTw8KLqKE9xb2SabYvyqrxs5HaFGuhi6swjhii8LH13k5dUE4ByFJDK3Cgv2gGUdLNgMzzptcNeA",
  "key3": "5Bbf43yr8WbUDoFFjKSrZwRjW9MBBdSGevFkKiQUbLfDdQGjrEF1t5Z3fhveWYH4x3m2sdomDjjCccBkVv7TR6FW",
  "key4": "2KxEE7WGwJnEFAJta1RvfRst2oT9bobn7EkWkQxMmJGcuvdEEbYKcn1Q9oQudY3cJ7oUhZG5M1prscpr8SBSqFA9",
  "key5": "3M2StFdMaVYAFW5Uh94HrohKczEmtu1Bcg7vWxtqknvtXXsav9FpoT9ffgxG9dWL6W6QfvKC1VfwonZX91cooS2p",
  "key6": "DGPdH6Qw3WsAo2m92e4CKSWa2D7JCgsCV1YRUA8D4qNjLBcG8t9LmpKThpbcKuHFcWztJ1pwykBox4ozCcfSffU",
  "key7": "4W7dsoiVxtTRBMW8hNsWNqDnvsLA8GGXNWWe5W1evnpDrhLNcVZq474bmT6ynoatVu68NgXzUZW1XydHjqMnSVQv",
  "key8": "2tSXx1zEVuWKtFK6syAMvqSkFa7xZ8pQNSML1GCLAz6NdcZNsd37hWXWxYCdmwuvN5mWniHjkrkSukBth7J1t4To",
  "key9": "3W2WDk93pjFzqR7JG6ATA7rPmSmbkBfeWSJZnxLq8jdx7j9zM4gW4gBZtFQKBXAEggJp4xJKtsy4keqbkQxvTwnk",
  "key10": "jqaPh5dGpee1vUdB1ica5kPZ31iTRxKUmQZqacnxedQaLQaZ7AjFAYmHMeHoWKM6eUUidzEJbMY5B5mZtJnVzP7",
  "key11": "673ZS2jfug8zbrjtTqEWD2uwotktgtYoXSiAqNL2aivMjx7gLHT5tcqY21N81g6mMQbkSWqU4kGS3BHUJV4bdbLi",
  "key12": "jENaD1eTiexgL4vXpvq4oT2xV9f4dXkRTuBs1YF5JQcnDtXY1NtgUptvG9gdWRN84dragsN9VXnPtbDy7fLFmws",
  "key13": "4PKmHtxsGHgNaC2oGtaD5wZqm7RXZM6KzvE8oKW3ea6Bsfe4B8XaxhYKJKkDovYVHqTgamNoXcRzodzL5VpnC3Un",
  "key14": "2w52eHJFcM6KsT7AUAkx9hXVuKP5Zq19pWJno4a4cX4LnHKuF4qykx9RJysDHLsx6xwhpbEiRgeFwZfoXgJDwhac",
  "key15": "2J7YWjWsYraEEUWUwjdMGTJumRsQPPuscVfhNdu9z4He76DMvxbk7NVxdMV1hK3cTmLmnEZNzjhbr5VRHMQUWr3F",
  "key16": "5qc2RSzZNzsAwpfAfVxBHtJQMz7eqo3tfQNaFTTKfBmnTPb9j2pfmWEcA3KZfdfWgfStHhKsBAYEjVThh9HU8Rop",
  "key17": "5wijLDqjADTbeZ3MPkeyBZPB3XUm8aNuasD29eQb7K4zPYRDvMUVvWvsFJqgvLVVYeKVd6AnC8caHqEuZf4fnFTh",
  "key18": "3Ak23RtZWgkdsY83XtkYDfeLoQB5smzPxBExLwHwEY4e9kAQMEzPifnA4HY4zK343daD9bx39Eg94NTKAckXua9K",
  "key19": "Ht9BnsuURv77euKXmT1DUSX71bV9gRw9b7Tg3Y6j6uZq6viR1EpnqPee9Ems1ZAmDXD9iEY3WvzSsbhU3ZFa3e2",
  "key20": "56r4iXGwp4PkfGuEKwKFuYkdBbGyA5AHXyoJjQZ4ASviihmjCneinbH9TbKpwbGgpDqNyTzuFPG9wihn9jo3PW68",
  "key21": "27yVvyuXjVRqH8ekg8iLRuLfn9n4DUpYamvLR8ocqf4CmQbrmj17kASg9zYWBCZRfUyvS9CY1AUPbTbJfCm3RE1r",
  "key22": "3H6cjgesfuYSe3wfWsoorQ3HGRywW3jxBy9ww7HAU5CAioQCC35P4h8kJZeRyWjJgeNLtTad2AMyXGN17HH3uneB",
  "key23": "a5PVwCDSng7rujhg4X1yGyW62zj7mqC9h9UBo3ovha8GkKJJYSXmeSidj6T6vTJu8uyx5ERPWkT9giAdMNhCtBD",
  "key24": "25TVxUtwsQBSx5RBAQAN6MvfzUBukTy9GEpxwxcrDnw7r7GtPTDVT8BoohW92LP4vCFjA3wXX9KAHSy22pqorMjQ",
  "key25": "5N7kiHcewHzV5GLFkCCCEAjec9jiS3warz72QFRnMHb3ja4FCG5p3Yv1qpBjsDRheZGYc95m1D2QKHCBmDJW7YSL",
  "key26": "23bnWU4w8PyWUtqffvRwkhvDKBmeinmcYkjjjJNAq78YeFVaXV1UxtaejWQ1G1oezxpy8eqQm44chzcSYoASjTyD"
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
