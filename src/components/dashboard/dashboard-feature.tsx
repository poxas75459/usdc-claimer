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
    "2cQmmn2mFSzh7e1d26UJSCSVRudGBbZSQMHCzcBxcqDYarY3eE7nCkt69RwK6tWKTbJnmUMnLAKg4ZLbBDxFCDNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRSKhxmFide1yrL5rkV3rXDEfLr6aQx4ujw2EkM2Nvm8cuwtyRbjTDhRKt7PkDUsEahZC6fKjzkEyz3MrhH4LhY",
  "key1": "WBaD92uLAYe783oHVAoXfstpFAwnqB9oGNyEtWohNEWc4QNQ4gHEC2KWaBmKmgNoQKovggaBmobbJ6iCHpE9WfT",
  "key2": "3JVyEJH1Yosofov4UreFmDxkZ2BxLHXhVa4TAjBZbfAmL8vYFaYiHnfZA8GhHgLx17C7ycoL8yGidSsm9iUdX19u",
  "key3": "3UY1ouS5jnYp7mrP5dtQfHNr4JnYqic4wHY8tJZjy9A6igK6ypzfi6XSVmuPvQn7M5sH5CMyQnGCdkiwa9znNJYa",
  "key4": "8hndfUcHhq7JxL28RuftcxqjgGKRTqSypdozU9gtrs6NaKXrw4FiA5DPDzqfTpMVd3mpUHmQaqhHxT4NZzMss5c",
  "key5": "2f2aKN6e7L14B8uTbwgessTHfYyqKmqeKvuDbmM5GrN1msqZEfdCzz4JDXBcVujsg4EssaosbPBjsoA64QqLDg6o",
  "key6": "5QSen8aA17tLLSKBdLzdQPoGZaXeKwFuN7ooF6SSeMQ1UnPjDGtmtr7WDVsXNCUfyK4uL5pA5G6CjzC9SXAcb5iR",
  "key7": "5JECVr37JW8pDnzVa58iQrjeE9heN7rd8CNRmxZm6DXFjqXD7hm2HxohyNyNYzjGetbv3yxRiQGroR49XDnmiVe5",
  "key8": "5rgdYjostbetezKbXHFifJZKXH5q5E1dW59d5bAxzSaftPDApYCkN1mSBu1jehf316DvBqhriK25iqtVJJWs7v44",
  "key9": "2XNiWf7CjjPDRUjSnLcTiGVZJcQfFAVTJEJcGLfCSLWVJX8Mi4ZoVhLUHVWyeWPq6aPNGScgfNtJ6zPYzZEAdDwp",
  "key10": "bjLJSN2Ja1Ja77KoCyfc1To3WEcnAssXA2NHx4RHcyXZp195kZcuu6LJr7jZXN76PJ6bx3n4AYm2gtHinjzmeRn",
  "key11": "3cfbvKmgQrfgcqw6KJGq2ZUY7wGTFc2P5ckzXYdT4rcab1rZrL93qDawpCyNj8XdBR8FxBq52mvMwKT3T48B5hgY",
  "key12": "Qm2y8yTN84utZzKRKpmZm4Quvqs4zHAmYQVC6nz8oKeioe2v9fopdZuE4o3xeC3yBPuoEf8nwnQF7jEb6HtedU3",
  "key13": "4N2Kwvqr3sftm5Qr8VPpPukZ4c2J4RmEgvXs4xY6HHuyjbjTXwBBwYbMhxTevzWUeGeajh6oGvocqUcyHme6DJ8t",
  "key14": "cmKkA3yQVStyJXtVyFC7LLAe3biJ82g9UBaqMYAVWjVRnBMS1hL4okzFbsEdJ7pQYGDk6nZsKohCJC3Bv8w7mvF",
  "key15": "32rZ5u3wbpKTixtgnKP4CMMeCjrNSwYM5uFpszDECeBNCTnTNKLHMgRVhBe1Nqs48N9SBzf4xnxuPr1P1KS2m6Lv",
  "key16": "2x2x5mp6uPvoBVuxfLLNDTPPWoPEtwqduaRzBvETh5TUGH8UZKPECkRCuoPcimE9C9s8rgM3sqFJdQa1YSyTRu8H",
  "key17": "4zRjCRCoTmT5xoRSb94H5kqAfFdpAe5LkXaSvaSV3p9EtsaDmoDKCrLr5xPLRJoLuqDMF4F9Qb6mcT9utzSKDghw",
  "key18": "3ZfMx3QnbsRFxC5LVz6L7HPwUYyiZRp1kY12eeVzy6uzoJiUd25psuYejiWMyQ3mtN7iKvLfqwDyTTbZL9MByW1G",
  "key19": "5UbEHufYoiCy2RFNhddjKXVXJ2ir7m2cnSYPECcyaJazg2fphDu9jEYYDWTBPcuPUXrzzmr4TohKaP8HcWcBers",
  "key20": "z7dwSBLxpFrY2KP1FiLgX9aqh5Xb9oNt2wqvD4zv5JBJk4Sd33pbTdanxrRBeV72H7HwHbc1xGy3C5JZRtKvVfL",
  "key21": "4dVtW2JGo1QPenXmufsvVLsyGEQ4Kcy2JEAQ6KELkQDwb7ZfBWN9X3XotJQ2LpBMmgsSPtNmdELuVReGcVN3xqXH",
  "key22": "5tQUequreQ8HgyN3EQg8hC49Egajt36kRUtdTFDUpvVp9VsZnhKDhjS4Cg9FfTNSqgEwmepk1J5uKp48gWNT8jpi",
  "key23": "661G9NvfodnDyQor3gMA3StaCzbW55h8gH6TTQ6yeWtvW3r1kJx1YR1vsggVzWtui5eo1R4FxSw2ArLbDXsaGp4r",
  "key24": "5WaeG1zJA84GtJrzBugMCZhMgCU4kWRoDiceRHhBQPM9ruG7H3FXaEV2gV62GVigrXB961gyuFVF3eHyVSTuLHjd",
  "key25": "4XXbC1bx4YSGRg5n4XH6rpjDGy8Xis8rkjsUCmXEKVZRRm9ctnK4vfFhYCvi2w7YhTMbGvndGyJ8JcH7b2NyYEmC",
  "key26": "4XrNdzXPw2frS7EEvnQCbor1BXhSFFtNuTM8wGCFxMZbQvFRfwP47V8tCPLkDdKmekTvrKRmMfG2z8wqRFkDRHfQ",
  "key27": "3T6yZ4Z19kcMEjbvtzpU3264LuUurN19yN7bU1PW9x67A7RyiHpE3QpCio3EMDu1b9SgLd2x4ibGiqGkYNgbTEZD",
  "key28": "45p8vnvDcGswFCkHKfzorGwcqoQthidibVS3dnE9dAaJoQKHw6Y1jLeU2QpxWHmpEzDUDw1BCPWRshPhhNbQkey",
  "key29": "47FKDCvL6aoUwfstBMGYU7K4ADbgMs4XKJLpyAqRXAqZosQpb3t89ted9zLJEirBNE3s9oUt94aCfGTj4X8uHnfA",
  "key30": "5Q3nrAghxRviEJuHMhVa4Bmw7Y9Q8XH2V6XdFbJA6DHW1MzDP78RiPXDFF6DZYgW3eXua9URPCuExGmV2ncAqbkN",
  "key31": "5CnWZe24UFvJFDVyxuk3BMNvxwMhFLBLUaEbu3Sfk4PTn8GwGTdZA6BHMjmD3oZGUSCyqrW5Qdkx3k8K9TuuP7Lz",
  "key32": "48X35MTToneaQXLKSZtCsrhbHzj4XBGDD9mqW1hEkWh9J1ARyJxKEz63cpQxQRuhK55Kd6kN4cCzqYJzvXr7g3JF",
  "key33": "4wDFpLFZ9wJY2YmmLC1WtW4BtgU6Dhz6w2w8LBgZu128YxjSJdW48cK73q3tt7tfcpttTxQyj62F3JxdXqFTwFhZ",
  "key34": "2zSYqcx66TxoEF3F64YvzoD4AHJ22TGbS5iDcRmCFginEijaUYroLipuJKuc66GEXaryFwQ4MUN4zdTcgrCXKPjF",
  "key35": "5mo9FjmipQU12tYEobsRDMsazY4KqVaBkdLY3QHsX5mj248EX8hVBqSPj9Sy3zPzYvDZNB4hUdYzGWcPP7fuu5xS",
  "key36": "5r3HfgRj33CdJppvLrdXBuUYCKnVhSQbPaudU1RrGEQwcRFhMgoJdpkHnqMBuTNEBMVhoy29sxi7EPNPPAyuXg3B",
  "key37": "5DmyXRy8PQqnHA6bjg8D5uZFsFELHVH1ai8mmyQreUiPg5VpxcRuuV4vgyKEZ531DkFDZsg9gCwYTgYubtheWmNJ",
  "key38": "3phuNgnZxq7h7Lk3pDG4NwUmH3uFJ93qS1rsdETSrHCWhExhMNJ3X2KWpnj82kTqMpCRfjSyssoJx5GfQwyfiYHK",
  "key39": "422Hdm3gAbcdh2icWfz5toSDzuYgo8JbepJY7Wjxe6uanqHFz5Lq5gMFx1uWAuLZ64BnAqEvsqh2kDjbUUeKs9Jn"
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
