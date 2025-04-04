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
    "SNKxoXD6AtkJXK1SCTLhS8p4mJzNgHsVy5km7dnfjw8AhEb5VGXcPLYW6UrYzq8BL8vuVz56nUUNaEV9PDnStEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKWVrxwgNuzgvFCvreKJ8qcjLtDbmyLbkNRHPJedkzYhkS63dpDTxUjeQmkZjMiF4f5Fo5YrXgir8XNVoEnDupB",
  "key1": "L2gnZKVDCVJENEhjhcVJCcJuPRUmfXaKLJp7FSDDEW7vmzUBzLtK5Fd7ietrZmB3csLVu1QJGkHott3L4oNDKLg",
  "key2": "2kYHwvj2mmAm42vQULaoSSwwwCmgdw2gHEctuw33Adr9KfV4dT4sYyU32d5WVhoCJ8YR22xfd7G2LgAzHqbGQKAi",
  "key3": "5reGdDTNCYMnoXp5Yc4tJBp1WpfJ59RTUetXWe88by46Go4w3tD293JzNZFR7vRGsG9iCby9w7uqQv3Phi2h7pCc",
  "key4": "QWjoggbJkwWr5ghzoUiXHMf3NJpWHTyVUZi73PGiYmpSmxeQPseHs5MGWBoBfgbVSL1hq8A5kLBnQZCtJj6wXca",
  "key5": "66VugvKpkecGkSXPzkW3UWSdSkamitwTRhdfUErKAkHVwdVpMWGSPmZA2Qb6btXtomX74EN5DkHVTxQ1LvxpR9rf",
  "key6": "4f7QrjMYkARw3kvKX8DsGSDBogT1Dyud8N5drTkp33B9S7aYLUd6zarSsunTL1EMjYVVHCWs7YJVXGWvQR81Uvj1",
  "key7": "2YaGzpNgAZsz6QwCGz7JL3n1kD4hrEfGtWhtRNBBNAQGjQyNCmrb1TsL6j9ddzypiauU4dJhqUpdYNVVa1sRAe4T",
  "key8": "33fpuzpcW668z5SNkm9eRmoCtjqHQwwqRM1HdoKWKmx8DXZ4DbBLe1twPE3A9B1Z5MKnkBv1oCNExqNksy3qTKfi",
  "key9": "5PMRwnSKDFZ3eWTWcH6EtbETriVwL3cxiMLZXRsbL4rZjVNNPRi3rEc5mpVdCtqcUNUC2XwaMkgr87ooesxqYjPR",
  "key10": "4uJGzZTEkBe6CDz9a3W98HTVdkUKyGw8W2CyAptEq1y78xehovr5JcWv8ZF7rn7AVBa7YFkhm2Nks6mPA4uikZXM",
  "key11": "22bWbkAJi5gtHvkCcTpqB2MChn4fgWKahfsGzqnaQGtvgBC12Gs1fvKWA2qvM9uByAj1ppRHWTiLyiAs9vfwAuhQ",
  "key12": "2zbugmp8jXoEBweXYLmw1ijnaRYoZRr18Dwa6okSxRMAL6MfUyX6H53ewS3PWE71Rm4KvAdtsQfeznFrnYasrie",
  "key13": "3MW2UB9cq7bkQBvNAyHBjwTLyAy8hP2AamFFZrvwxmccKKaGQzy8hBygYEG3K9enWdNh9eoruyKyB2R3H2zGcyhM",
  "key14": "q7V8otbQjCmgnoxgWkTPjPU9T1G7dCrsWAQdcKjY9R9dV913ZPwkFLiJhiexTqTp1WYsMXb9Vm5VV2UCtnn7MJk",
  "key15": "3FqbFkm8vgjCcsvqra7g5tJEhrTPxQFd52gnVrWP4iri6PGSTZ2fq3EKsAbKFuCeuthj2uBZ9dwuuPkJr5Pj2pUs",
  "key16": "21a7322ZRsZZe2M48dD6Laxa86to3eQ9j7cmVXKjTfehwqvszFjE3aZPSALrmkGGkthuNEG8meVrA4syvWuyb1Lv",
  "key17": "4ouMa72LzraZZEdjnYHG8PWSEHeJLccfa7Zow5Qn3hsKYXrhJqbTEzkBiZRgHaWd2jKjfaAqTJSKtCQ7RcNq1csD",
  "key18": "3Xn9KaenWPyqAC67qTSvMVmngeMBHnPGum3g6YhLKVyKnnbn57gt14pcCY4i1qGxnCPYu5nTiWT5J6NDxYwkxnnf",
  "key19": "7viMzwm1EgLTHAnp4gJ84NxnMLfEX5H9xaSLnJ7UwVUHEebh1ffUWSsakUWTb8JL9zLNqXJ4KipgBCpGFguhn8E",
  "key20": "4K7u5HwjhKnbRL5UkyJQ3LjmCxk8mHSwRR7wNWyNMmVTQTrBZ7DBxEeVJwUPwPx4X5caYVDzzcVdaYTr5M4YcALm",
  "key21": "3qvPzkD98RVuB3tQGKybWftdQKtipL9wBLMnPpmHwPJwL9cKeDYzuskkeXBhNXPGJDHVYidEpi2Bfoz6SGoNJbWP",
  "key22": "uY2kZzcv1UCTqpsK8ctbqD1FKvt8XSJxbc9XvWG4XRH67ge9Q3TBS77vo4jCBa2po7pXRt1xqMcPgthqyHLjBmH",
  "key23": "4eQmUC4cgZHLkjSsTJu7NRDe7rt6o97JmmzTrPfRBRiqNRN9hmV2jfdCnXvc2onCq824nkJNsKcNXoG12BwECLLK",
  "key24": "21CYPMc7jKjLPScJmiWJQeocVBWDaEqcWWz912FiDPYzQ5yxuhgtNwWEfFG1dgp7MfdecycysKfge98QzRTbJLkU",
  "key25": "48SfKQ7AFD1WHDzLyHH88NQKvZXvkx7BwqeYgVHJHqBRsPe5gkHkwqBKcALAAtdPDKyrUFHayxWcjwV9XSuSTtp2",
  "key26": "3GxXhWo4e2VT3jDgJfrHtc6dMyKzq5DexetJLVQuZoFvb3Abf9CrWhCW8AJof2UitorTXtrK4S5a9N7Aba7jwu7g",
  "key27": "4oD9vaZMWPuyoPayWJNG4vUZX7tNkwfgvKjKZ4KXSEzk2yHQFSwCRAVfwD4zHt68wvt5F2cbSmCd4WBoFqpVsNe7",
  "key28": "4dmWxgnQWHG9Qh6cacoqFdBhE6zGkK2w2BzdRTrnUNrMFs5z3pWcy3P558wXHJa498pqZaVSxpRRETyMj5zNS4yU",
  "key29": "WhyviQQVFHQrE2We8WKh6ukqq4LCASNUX6WKzekmsKM4UUr16bjtXnodutf12K674TGx4kwzZHBLw1QfDeFJFfS",
  "key30": "2jaccty9TYt2MuQUh8kVbSK3ku1EVAkSkbhWWzQMQ98gEdrPhdqsuBg1Au6eSaUsetNUUZMXAhWQucpUqRzrqR9j",
  "key31": "5hfrutBNphTFg4XE51Q79svq3KiGhY3E47Rom2FZHSyGQENAxim5gtGDWkWXecbYpM9yUPcLkpRAfa7MeAC7Tdeu",
  "key32": "51JKBgVTcgVyVHhVmsSgPhKqEfWcde7Kx7jVSh1ezJaH9k38THgNMWgkHpF4rQEXWaAE8Ejz4QsgbofMnodk3DPH",
  "key33": "5DgjSx8hpGkwAGBEtgwK6ZcDrovKK2DeNGkqebi6DAEYTi9nJEd3si9kGTTQWgiVhcGpJihkPqZ7xQj3uweyWt8S",
  "key34": "2orCB16w7eqcm567Mc2ufdWCjMCJFJmDpQG3XydDbJPqgEGrBNWT1tsuGThbPP21ZZmcu2qeTkrDbcR4oSrHzysa",
  "key35": "3mpU9PguwHTi3Mio38Nua6zrCjEmt49iA6mGCW51GKxzgnED9Mnqz6aJA4w3M8pp7vsT6h658yqMmYqEHJ5GsKBA",
  "key36": "5viqMS9JwXceVBZQ2tMB9SyWbeyQVobCzSmkbBjtXPRjack65cFfPJtNcrZTkJQ839QuNEG2Qxk8UBtk6woToDAY",
  "key37": "3sM6khTRQSg4WcdfgnjV4NTrJ74RVWbNKb7gDWmQeaLTPU95ecGXLhuhxSuZ9MsFSh7bcb6rUjSyqUKcN5Uok9LV",
  "key38": "5doCuatkFd5RgRDpj7gcw8TburbEXgPiGPUbcztUfbq5uxPnmyorvfHqoUpPN2c6aieVRDKtPwVxjYyEUToNDVKu",
  "key39": "DDZAr4CK19Zir1kmDGsaq8Dpv1ASJ4ZTSZdzYXEx5ucZnF9eigChVj9MUQnoyNKwjGScvu16ZzFaWNyFnomzwry",
  "key40": "4JXuLXCQg5QEp2ymvW3oNgfTVbYy3YuU28msoH9gguXziifD79NDoz2aBFZLi4hezkoAncqAdZuMUH2KHistp3Q6",
  "key41": "DBZephYxgjkTofdmWcv5DrqL4NFnfXVYhYXhwK5zPAh3M9FWZW5S5kU1yYXaWgYVFK7RFWLXaTvfEr34GJ4BNEa",
  "key42": "MTNk8RGDVvc48q7XcG1JDSYZQjSRhXduo93PstbYtdm3tKzr3onmAzzg6oXXXdbNkXpD14diSA2ARRzooGKr49t",
  "key43": "522vxTX89kVdRZgontrJY9VKYkKJrKP3r85N322RvW1ZuwYsKVzqnM66yXffUvFrACtkARuiK11YKQ3Bp1zisoJu",
  "key44": "5VU3GK9zRVm8p952hajf62ZNZZW72bkoVhibxg9DHdVFkQbNXEUfn4rmAsKbNWbZXTXS9bJmLp4e2WAzdGykWmfy",
  "key45": "5PF6fjuKRdTNFZG96EvGV8HpyuaZH8RhY9Xpzb3QFhXAnhqwPiDWsqRMfXEb9mcTWt1RXrxMa9bJWh1iALPEJC33"
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
