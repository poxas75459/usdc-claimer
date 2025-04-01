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
    "3mRKGhZVnG8qjhcXSohWQtTWXzfjdwfRXLEGzAW67PSZBCBzXryCWFoSn5FNGwSY4WrAoHpiqcuscq3tu3Z7Zevy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bbmphueP7fnGb7BxNGLsFyA24kD73ar5yJ3CFZyTNV34ifPyFQNZCA6nnBzgf1cvuRimj56TTPSM3MjyPdqMHxS",
  "key1": "2E44WGYWf8eZoonwE6V7BmdA5FX1nvBBnDB8f62pWy7zovdMrsDHCK7ERrB1YRYqMXrZZke6sBCNXg2Usg4yARFk",
  "key2": "3GJuKNS6ufyw2R1Evd2Xdp4JsBMPW4f8gisvErc1YBzqnk2S5U6UnPV2zTPR2gxNjQavoeFGXV9bM3e2PN32eVKn",
  "key3": "3a9dr9Y8n5AQ3z951TkXR9nREdtJvnw2cEMMgsfkquwfsnnKpQZDSjMMudsDJHbN6H7nRqRYBSZGpftB38YnFbuL",
  "key4": "3nAPTMANkUetEqtgmZWpdBdcuucT5TzJjCbi7xATvjUw9XQ2KLqmHDXnZTAQNt5qTuSm8tGHihFoKQRHsKsRiiBj",
  "key5": "5PMk1SzPzhTMXppMDLC97T1gaoireoqT6DUmBmfRtrsd92AWo2TC6L3WQeTF6Jwwo87mnhCBtnwKJh1UHrb1MhFB",
  "key6": "DnMAcegZE2iXWARohDKpKjDcztSvbktyC7LBaqDe7meeuMmExanMcYwPiDV8A7oTPgSyaEKzFmawWtCiXAjcb9H",
  "key7": "2rdGoRq8PuxNpMNCgt72TGQ39WcR8Ui2bvTrmLFqi3gn7KP6SFXf59J78ZUxAJwHfSKbvfJLoQWNtL2jBBe4BrSU",
  "key8": "4fKE5x4jxCLN84VVYeSzrZeT8ZRTLPkeEuWp7WqLyLF9mpRgiTcBpF2QByQvxYgKr1cpQW7yjJ7UY2ncHDEPHVht",
  "key9": "5o3uRbAEznSPGER7KLQrzvjRSRR2ZzicZV1SDFt1hos8QtzVZJRqNUzfRxvZFFU65xxzFq7VVZuNera72JtWPceR",
  "key10": "3gWiqrQSdXV2CCioii2vf2nTX4F3SM2mpwuqkP48NchHAD1uadhiasWsDwaBqAj8x45KBnfpT7PMhtWmjTtfYkRy",
  "key11": "Xv7TQwnY5U9GU3JniQnhDZoDXZeA7JaXYEwhhLnameWRqmSYFSKf37TbcCEjW8zArB5bSXG46tcZ7T91gKodR8R",
  "key12": "5uxc8iCvuZSkSU4sBSQRYPZYp1xhbuZxHQANrdiVhHF6kYWDVkm9jaUKt9nATvYenS1x7Hg2ZtCpoDhmgp9SPYeW",
  "key13": "DVFihrdbfVMKkdQ2gzFvxagw1aoFzw9tWSsND4tVZDRyHgj99Y36daWQYiksN6fL5vKHCncaB4kZ9Lu9kMr7p6w",
  "key14": "3Gx2y31jbgWG19bjSHX1oFMTr4Fy93odPK4y1y67JhbqVRVLZ1uuoxDykt87fcLErXVdZ3bLU9CrNAPocBaQJGQP",
  "key15": "2hzHnMyF1CpsvrP7JpEyrXFyzoRbPr3XZftJwySpXZHWCjguQRoU6iaKafuLR1GTkwxM8h84Qd6cFUSTSpf6WMD6",
  "key16": "5saNye7BHc9QA9tfs1LJUtHuwAPBw7GE3D5QUQb9Pwrn4wCvZqH7debdxdVY6FhTubyb2dkhnQAJan2i8cNtjetz",
  "key17": "5LLhSH4KVxNmxxASd7GSqrkppFLxva8i6jU5np3FzEaxZGjweBAwZNV2WVaibav3RkXN3UWme42K92jLCAkFGQNy",
  "key18": "3N6gjbUpab95Ln7RDyNyarqmbScQrpeFpmGrCcBotcq4nHr443Fcx52qzdTD6GLGUtksGVeya73xMYsHfd2rpVTY",
  "key19": "RmF9yJFtGaqPwRTuVj392PHbqoQCZEJ79awjGZssq4qVwgxz1HfYsCtEC7TF88VnjpyhUiHmpMpYApneWz73nG6",
  "key20": "5Mc29uMHkYg4zDQGsgghKzydsaRNpS2N6QzLdM8AL8mHNsBvNhMEx63VgsGATC22BS93XxRq527AJGFiVfaGVKtX",
  "key21": "4K1Rv5JGakyCbdh3L6QfEbwN3BmYSPGhN3wWEHwah3QbAidm4wirT6CbPeE9C1hSzr2r9iVsD4i67XJL47s2EvHi",
  "key22": "9dRqr2GpQY46osoZ5HADpsYg7MFYxGLZvtmcHtpUUniJKGSTQrtqWXdpxhMJfcBk3S3iZGT4k7J9bvSprERH3gJ",
  "key23": "2V391UzWkfSYwLVGUkR1SQcYjNCRDycC6E5HA5CjGjTEiqEowCJqFEK3FzGqQjTppwTWiv7c8cJ54MERWia6kFKs",
  "key24": "2crkpbGwwf9rdAEUkjUQXkXPbnagQkzBSqjfgJE18JAUwdDQZee4a3bXV57ENsTF6jDxp5NVu4ggeHGRkxNUzaAo",
  "key25": "5YeuMAwaM3b2MyXLm7SsCu1TXSCpkxYojJcFaq4r8tBNxyET54R4rZA3Ad9kMpPy1YjbZK62WmiPCkAmmocKThpa",
  "key26": "28SeAV7HXhNF3KGn6zKG1F1PA4FftZpCXf1w52VJqBrymFj8DnVHYtUTGxvBmg9xyJRmWZi3W1dXkdaworMC27fF",
  "key27": "2F99auWN4L2cxWhRCNz6wBP8n5Xs9cvcPptAdnJXtVShUTpydqnSXwBYkHiZ4rU5gafdfkc49xBignjSnek2KFUk",
  "key28": "523zLLiWiaPnmyrfxQz88M5pgqsZwsAG8mm8Zm84tpP7vCFDE8a5rjxr6fcoz9YhqEwL4GsCTSqddN348GLpQHmj",
  "key29": "WM8TKbY9rvezXtqA4EeWJPfnuXdtnhjJWNkDGkAL6NUJ7RbRvzngtcY8Hbm9VPPGWn69Kcdb2J5iaSZPoaKCnxL",
  "key30": "2Y1wL9bnoDRatKhZtZhg6TcnnBBwCEHJwpqkHJ88Hy1P7tJENHwdGyvhWaGoPbwaqeHetVxCkxEEt415Qc3eKrKb",
  "key31": "2Gz815JscmqvptcxJBady1NWTAMn5bLwmereDDbcJati9GKVKh1hGZShppsrcyjUzrJX2cQE5qH5D8w7P71wehBD",
  "key32": "655a6UmutyMJ5kzajB53YAeEn3F1gfuaB6jY8wmPBXKN2yJ1ewvw3Jy7jRW1hXszyjiKYyy2LboRdkBW2h1xFUus",
  "key33": "4p7vPGmoG57fLa8rmWeUoyB3nkxFpz5kTPhJxYbaBf1pVr4H23xpXyh68DPTnn4vzq3Vnb13hDU8PVwuYbQs1WsD",
  "key34": "4oyiRXSH76R64ARYawq9o3VoPQMiEPnesgq7gJg32D7re3aFWAW3krKqXzZCuCYUd7XkR8wg9P2dT4ci2kgBatBm",
  "key35": "3cCSc8Vnd13BwtVTwLb9APwMR48iRAhGzxAzAgSpVHQXnaM6iG1wmA2jJXrc4NgWYnBqLEjsWnkbw8QS25yjTYwQ",
  "key36": "3sAKhkZDh2TXiLn7quVnjXGzFjt24xBAQz4yEtPtTnrQ8tzWN4CXhDXZZfsVXyW4vh4DbRqk6utxaDfoL7SM2JDL",
  "key37": "38pKVtJzhYuAHCY1j38jERYfpLTPYYDj4Y8a8cUyLHW86ZvWNn7Wc181UEY14Wj4YHduHGCCdPJaqcatuUccYqK7",
  "key38": "3fgmk9DHLXN8rGHPEQ36QF1ain8nbRvdZdLtyrD76M2zegPA3SAAMdsMhWXffWZKRA4kXQvxSk7rhvAgDGq12GBy",
  "key39": "2DXXWqvf7HRHj5oqVc1gLqyzNCAzyDfKE2dDjzyN2EAkojtKUiCYrkA8dG8uSi9Toj3Eb8oc6CwvCmWY97u9EDAX",
  "key40": "32W345y7Q9HLXngozPDRaATge9cKDsxhYV6JLE3PadCFp6aR5HvPEDnci7FWWpQ9hNDTchgsGdNUcUSSCq2iTMhb",
  "key41": "3M7FExnbFfY9ct6KSfpXSmMZQxAPWDE7N9wYNeFxX9AXSTk1tiesZqzJEPUXCtMrPd64XdC8UxsYhPer6WwDiq4J",
  "key42": "3YWuBj6524RnCBJHwD7U49EtfysZLtFd2ePZe2nZTdnYXf9Aa5ht5x2qHa4rgd7ZgjkHZg3AmzqxncEok8z1zELr",
  "key43": "3Nb4mwNjTegXsUMatJMujVQypvjQcxpiwXBPV94PR6ckoXNQqXvXmecZksJt43RhzF62oB5rvxpbwaFNi47uoxtd",
  "key44": "5AUdisX9TgdxFtH13qqgZRpehk9onCTknBZDrkzPBgLmeTzqhWkswiMFJGfvU7NBksnzQvE4i81V7FNUJFV3pR1c",
  "key45": "3z1SpxtifFyRNnFMf3TFpt8yQFf2cKmxhgFfjBBi6HxkacMEJ54bQdkF6UeoLGHetHQYvuknM2AKBrzMhbFB67Ex",
  "key46": "42Y6ndRt8bb4s9EXHVvqXmM2F5AAvBhV5VGLwuJEsHViWycTTcySoereceCYjL8KymtV98wptjaVNtDa9wcdhVxf",
  "key47": "gSmEagfJkgH8XQENcMbLqkGfHotu7df9TBB1cM9onaspN6Rh9sf82eXn9ANFE1bA1StrKNDUonFuduhL3mTWinN",
  "key48": "4uRNq8B1EJ4rYUJQvwmVfxx5qdF4UriBaTnxDvdAkccaUL3roxx7i47Fja7pZiJktNq2SjZFc16VfdygXAJSvU3H",
  "key49": "3s62uDtGyqDQKQdhfzdo4zsbr5MYjKnGoK7Rfg7gfNBB8NnBHsoMh8XaJ7CpRfND4BzfEGD9dYJWn4RoUYD8q9uL"
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
