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
    "ZW2zCnmVPo5N1JWjxwooDR8PJqkGrqXCkf7TvayBMXfjUpRpPc8SRvnHSzDY99GgK2iw8GyWQL3X18BwL51TuSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbZcf7jKKBWhie1yVWr5xKbwvmL4yFmUxjgY3dVAf63hMtc8FM9uHBy5tARDWpzwSheFPgJQF16ufTJqxFz6kot",
  "key1": "5M1ExbCovvEY59fBiQi9BrLaZsyzzSU24zw1fGKtycPAEQmv88vdVkyjpuHKpdVowD71euBn3E2M7PHXMRGCQ7sh",
  "key2": "55AtY23aqSxYvHUbzE8cwafcQXBcSR2JkDYbH5ZdkTgA7UuDcCYbyWLNV66JZup5khdqds6jiqdEwT96gbrB6mA4",
  "key3": "62iWjzZZUinonvXFc7r1zpKTgpFRqd4AfitQnDJ9yV84CPDJaCRrYVPRcQwnbby9tUFT4b2hY8S54YxRULYt5zvV",
  "key4": "4to5QgPoD3ZJ6i7sTC7QNd7q5XDtBb7W3tmvuaLnPFrqdNyu2jKi2XkiYgHV5Zvgv6MKCdHAj8e8AmL1sjJfsTu1",
  "key5": "4DybzzN8gk1qj5KmJ8VmRdy7wxTAKG1zpViZ15axj3VzuMvPicVsVpNtHyFvKc8RCCVQXJkzNLrCVKi8MRh9Yd5A",
  "key6": "3MXBkcZrXKaqA8gjhMQ8HUiZcf3nXAxCFJEWtGmpjrRPs4EJDrdhQjt2jcArmyS9T9giLVJpLvqNc43eb1oLXToL",
  "key7": "67jDAXr9WpeKZa1ef98jWougZ3oZgtsx5v1TmReKCzizQbYNiD2N8FUHiCpRzsbHzPBrATgpNNYcNfk7f1rPYKqC",
  "key8": "3zJX1fFjHcDFJqe5hKt3XTe5q74AYfbvxheRk1PXdArbxwJmufHuSZpCTEq29CpsKv3ooW4q5LyJHbyFzkRzezkh",
  "key9": "3tEFpsG8tVY9x4EtTTEqgeZoKqKH8EXtD5qp6uZBBm2DZ79tfyZ6xi8vk1FBDhUXxtFLzWRRiZEeVspGvc7JoaJq",
  "key10": "utR83QxLmRvH9nhbVvQZbwsAFVBy8D8fHnvuYFeBpw9pSue8KGUTHmSWaQ5pHnzZAZFydZhCHVEWtVrZRXJgnWC",
  "key11": "6187NASYsmwB6d3QGhXPsth92ypG7zmUqf84nHLM69mv5bg7ZaT5kPtBF3iRZnYfFJhepJJ8kB3tVbW3Qu2vPYBz",
  "key12": "38D4vtwQAgu2C223s5dArG5qyX16r9bvcK9oxJTv6EYP2SqgFtkAkGPj8N2YV7SVddkSGkQAc3foqXYaww2rjxma",
  "key13": "2T8gv3Fn9rfRftYZ3kpPEZa2QY8z7DRywE5jFtWBNBVZqtWy5Cy77CLaTREnbMSUYMKxgCeq9P2JbVAgUwdEcSYZ",
  "key14": "PFuLaaXzW8q8Uk87kcdRKnCEtpZXTMG24x4W9fE59rA6BRiqsnUDLMaLxxkgZh4KusNKJtksdsSEvzDBBwkpdzX",
  "key15": "4mS1cqEb7A71yBPZ3ui1ojT24DBKC9VA5HwMAGMq8ApX88KxkP3ii64dwWwGSvTqBq3aNdzsNkpgJuCrfeF6476U",
  "key16": "4sCRv7MeM5sd6Q2vrn7E8BGyZHmQ5jAW68JtXk2zE5v4634UBM9ayVLLYvWvyE1kECELmuiWtKKsFopmsZKzsdun",
  "key17": "4Rx31zdwJNA2ptqY5JRhUuPZfaW1vGh9gnD9wbac7nFqkfKuLk6xtj3KJTMfKsofWvB4GNvUmtEWzPZXsJ5Pcnyv",
  "key18": "56vtjsSdiXNZwuhDf7QfAsmzZuAM2M2d8HD8ShsHtbPCnep2fWPM8YXq6BjzJdG4bRDZL6pVzmVbkwarEH8tkWEo",
  "key19": "rCgQe7K9wCAiH3xAJU37cZB1vb7cGoSFa7BkU3AQinzqx6RAKBffMjMu5CL36eRMxKMxdGQYNk4Y2sUeXxrCxbe",
  "key20": "3947weWg8nUK2rzcb8CS49nB6ZEkV51gwxZPMwc8ctASAYHyWz4CwZnbEvY99e27MMbwg4QDCLkyhZCjn8GEZX8X",
  "key21": "4FUCbv9c1gjXEhgLRYRYGYH4bcVM6VoekhrcbdQXfdhzLvBKVjrLqeYGHQkP563LqSeWVUQnoViFmdLxkVbxaSZm",
  "key22": "uHfpWE7bCKu1E4cWfMXrftWhWw3PBRMhVPYYUvbo4PQVnDV5pGkb4T5vXCJ3EtgX61vd5GojAqDnwrAbLBAg4Ru",
  "key23": "59bhY3fHweCzxi3D5QWdpP2VAJj6njWywAZ5zoDs9p3mX8YuFD1etB3hZmENCbTWuLn65Wq97ZWDN23B8hjoTQrW",
  "key24": "4vSv7dEWivJqLb3MERf9sPhTYtERovvcVSD2jJDJmTjcUixGGyBBDpivUULpMUNYFrDe4FVHLEBEBxBNNzXEgteC",
  "key25": "JrCRSM6TDB2apzFX2au5ZtbNkaU6c8hmWdAyGDJEFnSdA7z3URhfZUbbnGW5acpJGatq5YTWKpkDhLd1zRGZTzc",
  "key26": "4BHRBceayt3EHsPNUbtm915mELKZnMZ1kvYBcGxv3L93nxVSpxyMaPeDhb1tQJnDQ9UbicwJJ1kvWxAu8R7TPWYB",
  "key27": "3DtiJebhKfovGZiPbHHVpzDCq2VK9zCupKfb2hKuxvKNvDeSuZFB7KKxTfrrmMZgmTefQhmVJ2wYqoAFM2LDDZ6t",
  "key28": "4jtFxAYt33vJxoJZ28SH1Tk9yGq7Y7PdwsvQD7d8HTkzB3PekDugFjMqkFmYCR9cXwYo9umAq3dVKEBhL6wnGoj4",
  "key29": "N63zq5QeBLY86R45nS12uhUb6Xs24421dhciBsETtBaMu3JZmgubhjXKRGqxd4Zqx8exXJoq7iMEAW33RnaL4pJ",
  "key30": "creRHvMQAmRsALZtiPXuied53DXXXgkD6PhZoV2tg52PHz8n55fM1pSspgxEGriipa5AVRWM2NtpoWmgNXvkjo8",
  "key31": "BD95H7TKEanLbTfjtc6GESccJxPzwwFoV7VDPWjG7iQ1pibn6sVM5gYNdcyNZDCcHEhXzTjVcF5TbSYHWGMtgHd",
  "key32": "3HsLTAe9QSDVoGEGVPT8gePrHDo4TaNT3RnpHk5NuuUxnCafT7DENUkTLZJczw7jQw6rKYQEcxdArYMY7xJaqkRB",
  "key33": "55geARc161x9CtCK3aNQF546KkFB9HTA4DMXU1zfxLvEzSPQy4QeCrtK9sLAVRVcUHWVPV5GME5PvnXqc5vbYaN2",
  "key34": "XCFrueD3inX9qThbLZ7qPQ885axfhCHjMhZBp7mPNQnukm2zAy7vWMdtGgEt91vDufumLSXiz7angT8dUxLkbHf"
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
