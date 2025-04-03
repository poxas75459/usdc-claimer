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
    "4hWUgMn4oH8q4RnbTcr7XWbodmzDmCXQ8RWCwzUSUBtoYUuDcsqLxewAvuenLy4qbYZyTSRjanyaZnLgLvpuaZt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxJC6ApCtzZ2pPqMRqbA9DmY9jKsQdvRpqbRNWinBvCHSs81GYBfkJy8JguAMrc6cp9KZoYxcka3WUxEKdyyLr2",
  "key1": "4Q1QVMfrGwamZuya18sacyjnx8m82VccTwkBCs3zs5XPsWkSPL9FSQESjCKfJHS9rdfQyVMKsVG2726tTvCo4DAW",
  "key2": "67o5rGisJvm19P8kkSSc1kE3qNPEVbrrwbmguFbQy3NQAw7zDLpkNWkbtia8sLipQbQzs2zcNPsycpvFW9gMMU4V",
  "key3": "4aBgEKW8FvLavo6uCexxNTpp7T9dEoGbnAQiTHkgci7sLxDX2e9LSJ7RdLKDLWmqdXUQJzncNsybG3UUsvQHvx49",
  "key4": "3J6oRntWRPYt5cU7qYuncgiHySKKi7uhcEJgEveZQMmXoJiR2XuaJXcovgzMNTsoJsquiAzniDVdg3REMhWHNyvW",
  "key5": "52fwJrA9eMB8XcgbMhmsyb2iKFBJLoX7Lub5BZ3oXPNdZ4gcZVJ9Hex6riQEK1nDBCF6hweD7s9ZMKJWJwomGh68",
  "key6": "3JWyGoVcyzRdwDACKnniHhQz2wk3pWtnEfQ3TeTxpJZwKcoiEkGUVf3gvPyJsEox8PZ8vX8w96yJrPbPyXBRXhge",
  "key7": "4QKLUqYJPhYW77ZJZnSzaAXYMHx5euRzD54nmSnNpHPgcRMGcBzfGntWmwWtGbg356T6hc5wACCHRY8e8Jn8PF8G",
  "key8": "8jFggLLnZZdjiNKE5Hm6BA7oipFZZgNkUi121VukGb6iiz8iMvzJcbQAe3PvWV3eQEnmsNRqRjRtdMYPmCvFVV1",
  "key9": "5Ezeb1165ie4zxs4NnQmPtA4PCzwWRbtmkkQBL67nv9A1ECbEjK1L1MJqmuQmi6BSiKe8PUgootFqEikKYSc4fmJ",
  "key10": "2atyCBtQfvML8yxnquUQGNEBDEcxkiLpTfUg3Pnc6KEdfrpWVMut3QoGud5LfMNYfA37PsQkpQ3KnwBJM6TeFmMj",
  "key11": "27vBdceZiU694LcnbXcwhwz7DuZMm1iix9AF7TkPRaj5fuuZFerN5C4oYyKtiYhA2dk6HEv9bL8z3qS7ff79UB3K",
  "key12": "4KUjcqcqqGUvfUwFok3gx4cr5Hg7KUjSNU7SJ1d4wYgjRnrvk45L2LMp3b2ZBL6pRXKFvA6mcTcNDJbi7DH4ZfXY",
  "key13": "3886Kj1tZrijZxxMe9R1DeJzPiiZtjHDuejEEwX8RoccfqT1Q6tLfmza6rspbGXga88L4fpx2in8pZh7FD1mEEd1",
  "key14": "2pD8m6ji7JnKomwZk2dLHQhW6Arsuss1Rv8ThHrWVpGa866Ugerq8EHSSFq6XZqq43xTnpXHnMvvSBVGAygVtjWm",
  "key15": "2YDsyteBSUbPtyuDN2ZqiPkd5Jr7QpJpCaG5btZBmShCSUEsbzvUHo23rVZJH5Ub5LYP8s5B1txddL5LQeNTLoFc",
  "key16": "5Y867xYqManqhaaK2C1HdxGTSGdHjv8HsJv6FE6zQwYUYh8o2Av3fET8mWjACiVoBsjTQXu9uStHt4Bt7qjRoGQx",
  "key17": "r9KYm3FCb8pMVZuqUhfFXTpudqiqyj8XKwuTbJtXjBPyjQrUgAtUWBmWEoeXv7NFXq1SCrDMHdM8i5Wh73zwinY",
  "key18": "2eD1pkop4QfnzjzYBb6B8NhirRsxtygQ1h2pPrEMYZxAmu4hQg8yrGDmcun2ScA7bJBsLyXrJ5eWFumanmVNcdEN",
  "key19": "CFYx2iv7kjVmBJgUiN6ddkVC7SuDBHJPAZGaqAXfM9JH5WAYiUqiHWUCpnJXaPcC4D9whafjYVXUuYeB3o1MMT4",
  "key20": "2i26j8NuU2SrmnMnQV5JGGTcFLMdTh3Bjz1XnESkCP8Z2SebF7LGQg3VJ8ahqhHi6wSguftuokWougnqSbwVimN7",
  "key21": "2jKkuJeMEkX2F8HYPy9eN8Jrg5NBnDZ81vTdrGmMnkHYvbqCF7Z7BXeCmpMVUG564Uc7iuR5BSiLGiSgaNuXSPTQ",
  "key22": "4U7VZfASURAYCr2bTa1KiU42dktVEK3uJgBFUAtivsjvAzM2GM2719KjNCawKm2VsUpP2djZCTUnJfEbJysMENQS",
  "key23": "5v9MUkifZdsy3e7f6LWFQp7XpfGYPpH6Kz3ftb43mSxCx5DvBpBsk7WUDkNneoMsfdneZD5GDwMZVoVCvEcTGP9Y",
  "key24": "3JHrmaVZqwdcDDu69XXnnXRC5cXJyyWdBxGC89qiyEGa8Gv6qddDaGCpXXXWKMDmq6jPPKzL1FtN2JzDnZiXqNLg",
  "key25": "4q6ntyoCJCcta6PsxFBxY3VDCaagPrAiiyt4Q2h1W4Q3PA4ssaP1989p3Q4CBBtyQXBtGz1cVSQReBYmCKD5q3GT"
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
