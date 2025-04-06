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
    "5UWnaJxJAuUJXDTYSzLjMaKB9pNo9wG1U41fHs5nTuFQEgARsrAWy8Xkh3SEFrWrpbAs4aBnA4sEUvJxFfVVtSJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "358MUiHd9VF1Ho39djqkUZUt3J7Ad3Bo59vkJJuMoapQ5b4uNHjR65es4NqZbeGjeXEyNvcbu6mUZkqQmGpvf1ML",
  "key1": "4AosxpQT83Qse7BRfE8yQeTVaJXQJ6GcvTgDSeqidHfGAeTd3Uj2Ceh5Khky9Rjok9iTeZBGDWRyGsXkNjeNzcRZ",
  "key2": "4PRiQcA7LKtD2Jk8Ph5LL6X42akAHghDSV3XfMwcEj4JbkUCi65ST4xNwX965gwxsNXmgWZJPuqkQAMe6Db5tYka",
  "key3": "1FXuVkiYSfB599K1g7V1nTLEcYhroBZLGH5rESPyHf2FE9mzzxaQSFJVwbeUwRRkNvxPVT6sZaqfCGhrKdejZGS",
  "key4": "5chQ8xCPNtrpTprxmDtyMynjLXqbrSvD6eYRBWqNyF5z3twaRVsoqZKTFvVMNLm3J4YavpQF6KDgdde6ktDPANQD",
  "key5": "5UQbySEiQBRxMif8k5A8cppFeMgPgJhPAesRCU3qMcrY7aAJ8vLB8z3ascnxkLegN5UYhcRoexDVsr1DNtKgY44U",
  "key6": "5MDsN9Gtao4YqmmS8umbB99x4kApdGdtzsCrE6xNYVxeg9U3EzqZQFtgQQuX9rMhoWnybPZaepJ1WXTqvXrD2Ma3",
  "key7": "5KtxfhfVWk8fS78TCTL1WBVUt5dKKfupqTsNP7ytLy1ZigJUtUWifdWLK1D6rQA8fnoekKqnyDogPyn6SaLXSXxd",
  "key8": "2MskPcR43KAZxiBXcyNBdYAGHB3NBBYGeqsvY6drDqPk6UvYQkUvoN6GDwPekPFFENPYkwGVcezz9L36qNNgczX5",
  "key9": "2MLsqsSGzN27pHQ8rCPmm1zAjruBeRMxfUa5qJMUFfiJ1K4eHLAfyRiqYpH95hkWie3YiU5rHTcxD3LvZkwHqSaf",
  "key10": "UjpNoELEtfDZ8QGQDRizKHWnDWtKrwSaVnTkDXZpn5DKD67VgKxP3iLYSV2efwfNvpeHDhw4qdqUPKMTtkK2ubR",
  "key11": "2nyeuVnC5d5sgNS5RQhdhowmNQYdD8QLu3LGPsZYvbz9PPSbT9iw1TFKoJnCT3TAcwJ2nFbWDP1nHSZEqZF5WvNV",
  "key12": "3XpASdFxU4uQdsCMLWborYmVQgRkZ5UwexJHGgj9M1d1UWkX4tUBoYUecmPDae6QXsq6NntWm5feVvf8s79zWooL",
  "key13": "2DRzo37cHoQtqsgZqMTJeTUj5RvSQw9McX6r8YkAMe1rMi8ioxbACqHUsyeRE8UxsB9AMVCDee6eMHvke3HJju1C",
  "key14": "5S3dZELwBGjP9ZNwrmQDtNMvuukN1S7fCSbTy5yssqkksyDGfDeiHNh6fq1kGvbS1qCQ9VzjHqrGe2oMjkfNGrcA",
  "key15": "5FNMuk4frkJFkXH4HsVeysdSjabqaTp9ybGA6vTg7AiKGt4eMZxm1kB1epwBWBn6X1gYPzT57oQo2tvBdwhTfeKQ",
  "key16": "jhkKZmj3Gg6K1hyn2FAGt2sPMxpZuxjBh2aaXDNaeDAmUVqpRrJTfh7G9pv1f9NPytP9LZv1XsXcdEYseqQkpxi",
  "key17": "26EyGbTUW5jFJTS5P7vhvSR9o3uJ7hVEzjRDbAhcR41knowCMnYbFynKgWskJg3AxTGVX4eGGfc8q78xSghqWMTR",
  "key18": "5GjQCmCreMRS2g9RVVZrvM5FnV8nmFG6i1hsWM4PhxUEg6f4f2RFVnhTqCFqu9UePFzzvGvAWp2MFFgmrhMTJHG8",
  "key19": "53zyFX3xtMqt6ri27Rr23Ep1sd1v1pFi85xni8Fsv2Jy1fhK22FKRcYYZ6LwU2CRNLvzWMXeaFftoThSDqFJfyon",
  "key20": "2oJxmvbxRfcWPQ9JUhQrU8ht7x9v9yAwZuycwHbnkYqZ9h3C1yhBxid6oedvdPQk28MVRY4sXV2bLrJmA7PtVqKt",
  "key21": "HEbd3ZNT8GEG6b73vyHJHGgqtPdj37v3G4CqpN6p2tEx9wzmVwtgLBFzhfGqz7sTttWEXE7eufB9PNanqK8i8GA",
  "key22": "4QR18bmgFeRekAYs99wVVEekUqN7TzTNR16hcgSjwGbyhL1ygytTMWsPNfd4YJKZ9G4EggbQhThZhe2TKJoVskfw",
  "key23": "4YAdGb59hxvNhpzVvitd1giqiXHhgLWRJua334fFU2zDdzzM8KA7DArPu7b442UVY528x5oKqjeRZddUcmmEyF98",
  "key24": "4LXCNDAKfZNnPuPXhftFExtnM2K78xDimjr9qFhQ9nk5D5ANzhvz26HvGLyQk94BGZk5QFCPKxTGUCidqLdbefUW",
  "key25": "5x2GckbjuDs6S6i5At1kVwx4SeiMs43uuLLVhws9S11SgxA4fZYWZfsZJ4AAQizsTQkkK9VWiWmvaQ1rra1uhyog",
  "key26": "jGy7WG9JzfrNFG4ao7pxSXKJmRT3iv6TtSEKh58ZovCv5bdRLKHW9dFdd6AbSSvPo2vHc3bYTeYo3PLiZPRKT36",
  "key27": "5z75QE6GSMkdZAsteJZvKLjrcypAgWUrEuQjMAthocuMo6Xash42Cich71TNkiyuawwPuyZ6oEdYaPMzVvz5HPg",
  "key28": "5QKvW1DtgpQ8rNmmV5mFNMVscPXKHo8SNzEGHZiQZhvVgvqd3a6mEiDsaxXCNTqbUaeBjFAi8yRNzmhdj97Fpvd1",
  "key29": "bavkFj1uiahFZQomY5Lst1Yev65wGEPwZW4B3wBYr4jXo9msneBiHsFcWj9JauSmvjjaRZzpGHc5qLAQ42Uf1iZ",
  "key30": "4hjFmGGL7vr9VBrEQdDFToT8m1ARwuqCmntQmiAwxcZjBAAcgwFXvwHwyjb6DpjBPh63E1wdTndSsv7KsC5tBZXX"
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
