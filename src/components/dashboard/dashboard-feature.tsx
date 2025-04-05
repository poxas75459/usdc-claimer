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
    "5RHHmwEL1NzCXAuu2rLRMyziroqEzUvHWHoF5dAdB7v849wcdLgMGMcR2wNHQmswAyb4V5hwpZKtA22RLrHSThTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uD8B28hWfu2ZBYq6gx2VPHgUHq5wqdXZEN7oHp3MDHwX4qmyfFD3Xs5GDYogbtJ59XYx7GdLcCHcYd25GY9atQv",
  "key1": "4bN4uzVb8nh1DhmuvM5V9eHtyGh1ohPHFHefuQw8qBdGZAQNVegmVjy985WzRCnkh8NysDBqDW1Ns36V55diRm8f",
  "key2": "2DVkTKBnJAGDWWL79YiGTKhoGNYt2DRjpeusArQGzx3XCoTvTfr6ofNpzXqdwmiBWrdM1JWN5gwcV9AHNJTn2uK1",
  "key3": "4bCdzCjA59gJvcCDi1qo23Vsq7QmtbdgSvuCBVT5Paa3LuHNQ7BQRsCkzE7tKEwydSDNha558mdcijb1yvcd6Rvp",
  "key4": "3y7wK2wvzyT6ctmJVki9MbJ6kGRCwgtHffB8HPbmxgKqz2FF6EsjGSwJAUXMFooRgabxwgiXpEfv2Wb84dWnkU1q",
  "key5": "5dF9hJbmdUAHjTzUfbEn2em6ceMickDMxwFWQZacphjB3Lp1p47nxjCFtWPg2dZW3ioAfgZYSakWtS1PRxvThSmA",
  "key6": "5Ndib9qqxnBB7tDHynjTVumNhJQmsGfRQJx19873RBYVjQphtSmC7SGsaJPAGAdBLbrEiUji46eShWWosQunpDcK",
  "key7": "35UpWQBU4UAEXzhdvt5th4KpJPJKukDEbcgF3AmG9bR7vUakP7arXFEbosfGnoYpm4HCyL4DL5KkLxT3TbL3jrC6",
  "key8": "5Zf3Sz3mZ393ES6Lvvw3gn11wEFhmYDZGSE9maBuN4RvLmoAKn8Yj82ypNwdg1ZsH7V1dNXxV7uWNzvr8wxjK7S4",
  "key9": "3yxXckiBNQvUhYNooqTapxEWyfukPuWNzpsMgeqRBJJETuNAkKfwn67HVdmY6HTyBhV4bFxLRybsmwAA3786Zyj",
  "key10": "Jw2oBhaXNmFd8KN1jNxGqiP81zws1ymdCWTJ64tkc8nSYMfpjphEuUmC9RTotL77Qea7Jo7AEJUEgXyHv5XhvY1",
  "key11": "4Phs1pHeb9cDXBvBi7EhapH5sRLY6BcxHeVuVhypWA9Ha2QPALKx6hnqnExV17MB3wVkeCnLycQmoE7rS2hfqKyE",
  "key12": "TRShmDTdeTXPx5TP9f8bN6Qx1opSnnnP7Zc5i3T8zear9Mh3sdAazR96yT8xddwZZABgWPGwsojy82mXqm2Worv",
  "key13": "45nxw1mA2yZkcZBMuM5rvEDtFSdGF1MwGDqa9LP7op7WJ2nobWMW3Tdo4697b1RhfwQDWmW6soahNqX8Hvv781kK",
  "key14": "2fPdTncGvM7Ewx2Y9LUKHXVVkLcENmomJxjyodZLPpsFRuxiua18BD7qqaFSVCeLUhttFxr9WxsErDNmiMVwFhn1",
  "key15": "d8VQLyJqKj7jCpQNGDXTHoNak3DhgkX5LSEosN8jynJbqJgie21UEaK3dzzt2J3sPfcMUfjWp9rxk2WCCehsdux",
  "key16": "2HLUbCkv5M7kDye7gQAaCqKzprynHUAxfERN8i2ThhS4Qw3KgV2z7htoe2ADwEtCfEWcNoyXocmG339LpAdmsz4H",
  "key17": "3692xNidGsh5PT7QZZMrJSfRQAEmRoUFk4u9NRKBuN5qPTvsARpoe6CKebDUGHYDmNkKEiyg6YLj8Wi7UJcXKSMQ",
  "key18": "2EJFZQCtYu5XNLJ7SZX3wdURtXoemhL2nDrKq7CQRuWGKtvddG28hX8qGrTrHJXyfgkwaysgarEa84cK67h4v6ZM",
  "key19": "536AwgzVx7bnvmwAcHaatoJFvyJVMwvJPJVKYubVQNGkyCmK4M4sezf1Ky4FHsys3yRezJJnskd9gr3Y7MpQX51x",
  "key20": "5hhtHmkkhb8fmk7qoye38ffh58vvn1KQLraNVC3AmUhprFyGA3K3tDy7RQx8oWssU5L7r1VzRmYgYCZ3nv4WSgWi",
  "key21": "4CeHzWgGfvjjg6re94QoYQv6qcwUwFwhtq9ZNbueQfTofASFJnGw3x7rKw3DB4wQqpvQCy4QVVTzduv8M5RPtAUj",
  "key22": "5gxiinmE6vqrs7mbS78KPXwi2vTn3VFo1BD9oDZFXu2bwe8NKSokKcCZ4xnGWV4NHTkZ8GDPa41LuXVrbnDVS6Ly",
  "key23": "4tgffgD1L6fHtMP6t1RwyrE2kwPXc9PmhCH7wYSghutPsSLm2YrfgrsWTu88PwHeWWhhEcGsUXo3QDV8KprvDn1Y",
  "key24": "4unJBA1CRk1ievE2uz9ptT5WhhMCfoT4s78H1eGhxeAGdzc8EGfVz2oSCAY63FyQMjACUSgTszR1j5BssHRxr92E",
  "key25": "3L6Ak5ntZ21SAX8SY8W61Jyw8ypBkkXJjDNtVGushtCAKmsqTFnTkQDd57dxdQhJFmjVNwoJmGGVcWEw3NGN9Gsk",
  "key26": "3hEockCCwBxuKaPFmPzWQnQQu4dA791hjofLHX4PpCGX2uioQ6hTTedbKb9xyzXanA99oAf7LhjPFypQugPHErNS",
  "key27": "4nTYnHqNhRLsBsovyGwuJECB8uatHArptQqDjCZFnr5LV1SzcbyZuRNgr2fsd5nnN2mUbe1395to2DWVzziHWa4F",
  "key28": "5g8wrMZe4fCxeDyp9LbUicmqQW5taqDqkLVJXD9FffHrYcUW3ZVQiBuhy8F81DgEj6ukhu2krpTdE9Uxx9Kxw8HJ",
  "key29": "5cRH5VKxArGNi3wgsu8jHyWBfSjeKisUERtvboeYyhk2a4jgRSX4NpexiVuTgGx6StgGtKFCN39PA6xbekmSFaL",
  "key30": "3C5YikXLS6wo6T9xKAAoyBEkwBTsraBpAyKA7bU27QoK9HgfREsaQ5pEE1mQy9NB59EsNUJY985mWthYtNJ8uAnr",
  "key31": "4XbuRjG2CVL5uw2cSsYiTgduzoGSvUUTk5KF2PQ4b9PN145LkzLquReMxY8Prn9iuZNhg8XhBs9k5qeNBxMBe5BH",
  "key32": "2qozyH3ZXkWiERLfPQn5ZS1PoPppnc6FTF8jXU55LeMmuKRkeJipeg5XUB2rTKUh7EwXfE7iZRVwq49RpM4LMgrZ",
  "key33": "2pMa4T2CHW3Vhbh6cMgQGKFdY7xEhcAEW9fiTpefZA6MSDgC3Ei8gLANwDhSKnHUuYuqgTfsHyZ2Vq4QhVnd59V5",
  "key34": "3EJtTnCZtsSzgsDYKiPQBMS1aLTPW9q9hi1RMRVEzxHCRLfj3Y6nXptCHHXD89o4etUNVNjfsAgpDtW7kie6c1WV",
  "key35": "2ub4BxQWEeKf7i5ZwphTxxE1dSKGYWPTKCrLSkQSyazW51GHCKEKJT9evv9kYoGzu8B8bWgYXppipnoDwisgU9up",
  "key36": "2GJRTJ8SUADhY53omMLVxvHukes9JrdzFFY1Jjf9uc7jwMgXLqmub2tSPGYGjgrQdsdtSFXHWuQyktYs26YAiQhS",
  "key37": "5xNsgVfAGg9ELdfUyYyViFLj2iwqKuTaAKZyz9mottXs2QWzKffWkYcWGXD65RF1whfeMK2KvfAS8Jkrh1o9JHAj",
  "key38": "4LcgRk51r3ve53hrcmuPR76AY34oGkXn8JqURrxTQ32hD3KsDXrECzuGSCYxjAgrWF45FpGvrk1rWN1B6K4L4aBm",
  "key39": "4rZsCLJnpTbCxvCjmQ1xDgnxmqXXzjXb25MuAz1xLdNjg34hTNzxe9FjuyZK2J7jVYn4Weqvs9pyevW6EmQWMdSc"
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
