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
    "4tiiFU1itZ8AAB2vXngEZxA8GhxHKnHTqXdw5emoufxbuhgsBTspphDreH4WyVxgG7vyjXYqRwG8kvYDbjQ4Qor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61GGHgHiMWZ2HpacGeAweyE6ivtevh8yfAdLMHNtYwFgHJKgzhLKmPS7bdnrMFisLfN5ysgj49dddW4NdhA6HvtS",
  "key1": "5NfxLKU4DmwKFMPDZapEsadjzErqzrSjEzQ9gyoYY7HSwbqxEJxWzZLQPvjaUvgWLUiEYCkTurepgRNdnKRxZy6C",
  "key2": "3nCp6cvP1MLew3ReAV4k5MJpzUVvQnbiJYVh4Piin37LafEJdMjg8DexfVdk57Xgg2UqScxXTxAWEoYAxH7deq4Z",
  "key3": "Xz8zL2ga1BZbx7hZgXyaAbbFi8VZAaPevVyGE6n6obSbniqtWsQNb3wRYA2QLDX41wXtuxh54hGii6z4Na28Rkx",
  "key4": "5aoa5557gB8eQqTnjnoEvQzknxWH7mNWcYEB38ri3FtwnpCBYY1NEVHY8BrN5fkpaUKKtJ2eHKJStWhxu5DLFwpU",
  "key5": "66PgFAL1XzwXgY4Ai2WK2GxUrPK9qGipnh695HSvb5yDfr5EBVkHwSmp2VT95qZDnH5KTQ9S1NDSXJBxoB4zEk7g",
  "key6": "Eo6fAPHdUC1zjsza6hBb4aBYrat5hw8rjH7D8quVYWa5ZxaNRyjcEU7q5QSFgp4nJVqCG1y5J5SRv7kVQAk8BVj",
  "key7": "3QntghZ4H8TgwKrw5jts6Md5CJpGLrZRLLUPz9ZwwSQV91vTds77BviT1qMZ3s7jBCBT6BwFAJWQhyr6AmQmAtVg",
  "key8": "2utKjpzBe7u3eSrUdX9zExQfvnwPDSuTWVWaXiJbQTzNWcGEHpD3vpdxUadnscDaBZ2qtxg8dwGtmPotacnywYVq",
  "key9": "3JK4JsADrvcPazbJCuuvFt7nJkgxmC6GiuCQZAK9MA1eMkUR86yoRkGp15cqtxPjwwz3iCQutTeMaBPsq9xaGBw6",
  "key10": "3FnDzYSJ1efib8uDxmKRSddhdaq5uFv5fKbSovmy7SDnWxHgs12iifTCuPHswqcD6wJEWT49A5bhR4RHwfhsB1UP",
  "key11": "FNjSmnfnJ6vAjnLjnzLNdjfMDGN4svtTLPWac1gJ9ZtLKTMc4VSfAjSKL45JCcdS9pZT8etnUX2Wg1W6a3oLBoH",
  "key12": "2LEijXZkgx7K4nQSWEzatHT4siQBsEmqvthLYAFEEovymZ3visZVUUKcJAoJn47L4aN7NKdPN5fR2CxDs7us7Q3",
  "key13": "3qGY8ESAqzCASHqa44DwZkHfQu5DvJPJC38RwnCuqFb3Cz2Dei9ova9hjSMmWMZicLo4uKfjtjeP1eHCLkeS7uwW",
  "key14": "2dqqfutFfwNReYm6Lk3QjgeuT9wZyGF2C7cwyAVGNhGPCBjjW4RXbHh5G1fKJdV8J7NABd4L4b2FAaRcurxucizp",
  "key15": "3s8SsRXQoMohtMCTxMguuiK8WzJTB1rtK5TS3FtvLVMi8UZhvr4V8nWFWaG6zqmqqeoHQQvAT6JQZrsxcqHGKt1g",
  "key16": "59X3NixEPwptb86kfSDynuNHTF5f9NZT538caEwajEcbk1io2wKdVc2rBbpdi6aBZuATGGhocbeWHSyWVFkDBvqT",
  "key17": "5sXjBV386tyB3yhDeMF8S4SuCXJuLzNrDMuhsrYjH1kXj8P4qSaVKeCLXy9bXJt3xzAgcLmLKjWffdSNQR1rDRXV",
  "key18": "5iqzfhTss3SDxZ4brudGJKRPDhtXrkyjSJ31xjzLNqHU5r55A5zDjMeK2btXdsBBayoDgMaj6H6wy6mr5uwByBhd",
  "key19": "3XmZSPHZZjrgVXJEUdyCyZ33tEpZmMrBXZqXz7p6U7eREp6e8ihgAqPvSeLaTyrQ6M6KoipkUwwYCL2rzMEwiWbA",
  "key20": "4vVHPDNHFwMron3dC882rngp3wrY74ZgrndQfgS4n39TB7pNudGUg3vmvzYnT57CCwgAteVMcWN226tQVvMKdGEG",
  "key21": "nynBH8nPucjMo6d7LbvhqvoX3uzv28jte8fGPioWxXfr7smWdV21YswtimbhzhzJQuiQSFDaEXwq2TfaKxRFWni",
  "key22": "3CLT7aApp1NtRqajzwpfroKWidqa5xeRRWe6gVjyHPRXDPqN1nrDwbQGvPjosGkeMZhjfuAQF75XNWAN9Hz8mU1w",
  "key23": "3v5R4QKRWGEpfr1Ms5UxsC73qWHPQ7ULb5anHwqV3qn17vr2qu9jzHfKooEH1yR1bmtpEwxGbs5tLGQVHuuEbS7g",
  "key24": "5zCbB1DrSkKMeBzZAGGKXBFmem1uda39LABcpN5cHbdZX7hq5bysredLPdrBDdkKD19jChASBHb8gcMZ35dFBdi9",
  "key25": "pJHryzY7aze2FUv45TgCQ1xKWr77cNm6br8pYyovD67rG8UDEysWXADHUGWyHDZ8AEVxxTWFbuEfbM51JcdEXks",
  "key26": "3hpnWVMbNfNSZ4MeBetWmsdQpcSwhqi7v99ZtvMsPFPi5xNDCWx7SCWYwmNbx8TjJVabGr1EZDbSMQ3c6eDsYJer",
  "key27": "yKRmMGTgeY39QWkpuwetfSxyR4Eu3V4diYiXdSPraiddzncJ5LcijMa8LQDrrvYugaYYLDnmxYhUcdCkX2ZDCzA",
  "key28": "4WgwxTXM5drMbzbgX95f9UW8ByPN6Z28WNRGHU5GecoRJg4ACCJdnH5a56v5rW7DGSXs3cVBMNAHyAX4o4rLoPrV",
  "key29": "62Zg1JtHRRdgjq5a1gAvZLnbQJmTM4QEwkHk8CkuP78QzaTSSmLSi11iLVDNecPFCS1Z2Wt4QgzkjoKUaSh7B4Tv",
  "key30": "5pngPmhF3LtVpUGwu9xcnhdgHAFV3o8CYHsYPF9ZZbeeQe9pg53LD7K9TD6V2q9oWgFSod3gVKvkotVgmhmabBNM",
  "key31": "5HYqJZt7Hd51RnVnfRVfZQfR3SbgGofHEoN1CgQNjW3YFTM3UXd4x3LLajcjEhDHwdFD34fvy1mCUsWS7GBeYE5q",
  "key32": "3JG6V7u3zwiEwT5pPDyYWqhWsN1svg4ubPxsRmWunKUNUmqxRF7uVZs8nDanz1T7Dof9q9h6yR2P9hyWhgrviFmc",
  "key33": "4bfJV2SXiyMu4voM8eVS1sb7wyC5EcS9nqARkWF1qJZw5G25Adn9RLkfZXm75G65tkQJWwuh1zkHe3cYmuzM3pfi",
  "key34": "4vWEwMKu4T7gri8t4sgeRCk8p1MHSr2jgZHvmY5WzDm8bRnPv5L6qJk6BqY3rcnL5AWtTvPJ9muANNtCT7abHoch",
  "key35": "2B2H3tPhUBPiY3ag3cAzHpA13UYkKTPe32fer19GBrrMEUjJUG1nVQT5AnpBksKb4nA1qBA6CBYRh886cMerKE8T",
  "key36": "qgtWrmfzuDFC7kjYhuH8i3er4GQ3BeXmf9SnEwdz3xJGvGQJtENmvxEzfm4p9NS5fq6GaQg5TQHfX5YzGYY4dg8",
  "key37": "3Bv8QrS5ABykpDY8BQo8nmWMa6XLQeSm1mgS26cQbPm3SdPCPPr6JziHYfMpySSjU5Tz8fDCYMKZmUmqXjTpWVaT",
  "key38": "5cVLhJEBniAfzBq5Yku4RRk6EkZc4dvos4LTuE1re2XDLiyVHeJAszCT36ch4piY3WSHCAn9ozJfptjyMnKU6oPf",
  "key39": "4gPbKkQdVXnQB39eMkAu64yWZiEh9kDUqwXr4Ps6K5YkZhMLutxh1ra1qioArgb1DHDqtxrQoTBC3tGLTaMMesgP",
  "key40": "4FatRSWkCFyCPwWceXcv8izAs6av9ijJtDewR9oqF2Xzwh9NDopuMamVHXX98mvdjkYDKN7QD4X6S3ncfkAkaQAH"
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
