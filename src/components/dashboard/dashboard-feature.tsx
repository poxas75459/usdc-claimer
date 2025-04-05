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
    "2XMxMJrUbdFxVqSy8vSiXwgVH5V1b55LtV5UkdRogiJi3nskgyj7BaCEhvHCYzYToujLHTfvVN7dmQqSNUvnwhVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BX3QFRQj3Cw99ugqg652LwfBY4KQXUPrbS2kNorEHhnYaq5i8QYKK2opJ37egEjEjd1Wvkfb51J1hLJBwUhzga",
  "key1": "48X6gv1WhZDWWd9gQBEThJhQrZmMwwfNvNieYCP6fbyoLRrF8R24B2QygLpimyqpjn69LMkELbZ1mxC5LuGRsF2K",
  "key2": "o43HgyzwaHvtgsgTD7BUyvb9Trg6wttMZWJFFmCmkGdoeYakGg1LjwuX5Zx4xrhYPGjSWBzpRvbmfPxR9Xtnnp5",
  "key3": "4D2viHohvWJvbMNXKbXV7tjVekUhgub6zSqcgr3rCrpXxSiMBEjFV3NV8RtkDD2BEUEdLTNZDZpY9stiDaQwh3af",
  "key4": "2UmLQsMCxr1BMMDtmcqw2ijrmEAcx3gE6S5B929PxWP2Cpc6sLKw9AMgGiu57LGembz1WBg7RVzH8qQPZLnZnKdq",
  "key5": "4CUFusFqCeJQM3eHqVBu2CNDQvVMtBuVmNKYbuxZvJ354k5ohs9HkScpq8QNZjwf7irK41WArRNakJyiBYGu5FYH",
  "key6": "36AUxYuR3h9U3rC9z77P78eejk33fGwHBfsmqmf8Y8U61ANjApxadBxifz84bS2hoaUpUeEss9HVP5wkEMuURxpk",
  "key7": "21r65ppWHqzTX3eGc9gcevoUGrnTZxjw5FQSsV12GhYbn3E4x961osF3tzSFo1kHknaJ77ztwiVa9EpzYXxhvJiF",
  "key8": "h55Yx2qyU6YGJXHHVBNXW7kdBTF1CGqQ6wN37qfMxzZzaXnvcEBAHXX65EctB7Wp8fFgrgLEhsHzLZkrrzgHURo",
  "key9": "2FeBpowddm54BgyjsrfTgCbL1TsHA4VwdMxjLFveCDpFwECbCyZ9ukhtuFxmq9mK5Ay6ai4KookB8Wi9qduuCcgq",
  "key10": "5v8zAYEzDD3yPGXJAhu3xpx8igFMQZYhn3P7nz6WHofUeQ5gdbLei9N1VWMiA6Xgj3iLBMHAgyQLJUm4bFoPMrJb",
  "key11": "2NRd6GLV1GytCk5MmoXFPdwcGBp1jAfCbfvVw8D8wBH49ZaGggFbQuv81CTsotUiNYxx5yzoiQ2Kg6ZPY1vf4uXC",
  "key12": "4iPfNQct2xhHW21iw9SMthRkaekPrkYnNvLAEQcZvTzuoUCHMg4SKREZK99hirZGVACLbWZtHL9NsQGJX6WAYeJL",
  "key13": "3VsQsR1a8kEVqjYzKTqtavHZVHDxmSw1XrjWteCUmz9RE19WPH2HzRjs1oRUJWGe6bN83itp1csF8Bjyxvga1otA",
  "key14": "3defNTomfijXPHVkuuKz8ELpz1fSjUBNMukeTkmFhi31ohWURkeWPRydFBsKx5ZDcmTvxUQ9iumwHkjFY8mEoeW7",
  "key15": "5vZNC8EN5tvGZhDfeZEsx1fXHbe79qGm2XSyM8FGSwyHt3Lbn3iRybDNvbm5SZLSPK5U2sDYo2xadv7v3uGY4TpR",
  "key16": "2B6LDsW2qJmgh3uDmXUkAxmhg2aVbxY1CFkB6nJxktUqbukKEYdMGqvMuvmAGAHwax27K2n8nKBUbgJRwu7G1tTN",
  "key17": "4HSgUShJTFwojxmwTCyTcbHp4FKxh5TNTKWzPwS6UZ8WkpKdgNzE5J57UCVEk7snkUx2cSim5Zx8RTasYbkSBFC7",
  "key18": "5sR8Qk9Qw9kXFbvxnRPdjn4nLWy9KRuTe7JPRJDQmMs1BP1qcsFCsmvmLaiLr21cTkiWf9F4eCngxD6VkcrgDFmB",
  "key19": "28thxV7jDkSbCM9udqSRF6xWtXU3LDYy48WPVnJ6eSMzM8q3aUgF5PqMnMaAF7tWWAkQM1v182XjK1tV5H1D9rWg",
  "key20": "4fLjzuGzuPvZgvdtTGVzPbn9mvpGL68PpidYsBqWfBPzABS4zropnKZ5vmNfJFc6qfCdnpakbBWEJTsua3eZvuUX",
  "key21": "3v9aW8Hk1CCkc9u88fx4AermXEbhfK1sSn99MyCsVCKoW1Jv3TwuoFd1S6kqHe3XADVAXhMjD8SFMTihj9cUJL3c",
  "key22": "3gXRqoVyLAcobzkfhiYNCz5apoSMGXbq8JmKkmrkyGCgJQSrM8uS2B9hNbr9W4GCWyoLaD5bKkscrEmXpwsycmAp",
  "key23": "2Pxv87SDhULQTkWYspyZugv6XycdVH9PdWJmYyBtPCGMSAeeg6sxdipxFGSNreahzDFcqePjQnEBWCEsmsumSwa",
  "key24": "4UzsPYD2X8bJYEzrkcfr2FtQtZJVGk61kq6bjdQ3AJ3qjAwmssZgMxSc9FCWUpTPBFxAd9YNBppDq3qZSXgC4TnP",
  "key25": "2D3Ci7iDr5CMxbDcx6TqYpubqDVUe1SLKmTKpsLWdyyFvrcwu1AShdZVNVPuyNJoWcjB8wimAfCTQcZR7EA8mKew",
  "key26": "qvs5kp1fxJ4h8Gc2NAqgn3ojL7cZAgcrK6NxsA554iZ5wKedofRgsmcD6q7W8i454PNBdaz87feJ44iv5ERqB6d",
  "key27": "frUjT1ayHhPh6rAHY8g5qufHXhMneCD2jf4KDd68xdd9AAyK7NXUVhBqXqobU9iot8oq2rAQbDqgQfLy75bA1Dv",
  "key28": "A9eAGWetjpc8Xv26vv3suqZjoGYAv5W2fdxULqMu52DLuzsu8UuNWdwjKuwGpp7fNxQHpbvVeLudue6mcAvixDw",
  "key29": "4NySWrt8k5nRjvY4atUBCnoNfNkMV4XsKnnT81KgGyA4EGQyDrLhuRNg136Bh1xrU93v838BEg4zpiZPfBMstrNr",
  "key30": "3tqW8QFLjKYt57bqS5pHRmEdUaawGY2HritaZi7mYQD17f27FyRC2EkvnGNMAk1hcC6DBqq7N5KZ62d3spnH7Uyy",
  "key31": "2aaAL65LTj4pqvyHoU9fUj3U4azEv4xQhNGZzY6dmpHkJC1SXKEuRkm44LwdPvFS4VPJXX4bxPJGBEU8rHWz7cFM",
  "key32": "HWLqoNRXw5YDwCZAwLMs1ShHZ1oC7PozZJYzCjQr8QUuwim6a3aXHhzvneCFVyMoKAYB8oMQod3Ch7tx5S5Nv8h",
  "key33": "fakP6QNtJc3f59Jm6q54p9mLqSBXqyiXv6xGLLpiSTEaMXd9ARAkaCG6QoiKcxmYNp3cNBgC4v6frWaKxji7i6h",
  "key34": "62oskhQXQp7hsWHUEYuZhoAf8Fki9QyHFzk3uh1HZpbGkmRoE8dPYn9ZEt5hRRkysxeyDEnwPVUD1Xr54SrFqpFL",
  "key35": "45aJFo2mLkCqAhQxM834uHgH7pxhsX9hsm4joa8YujwTz4sJKVCcfxYBUCcLHAYwyuJY1rfVfvwoFrjgV5NrDJWP",
  "key36": "1GwegBiWE4urrGiEmC8CmCDJLSqcwVBvYRRafgRCo4UDqVX9F1a41gkShViYvNR3WBeyeXnniQiRcgYXgFaWg1Y",
  "key37": "Vhr9jHeEQwSUvwTA8FL3dG79bT7YVxwPvtrASwUyWmFch1ZnSgfKappZ7atVBvRaLxs379w2kvTdC4JMs1oxnD4",
  "key38": "nscE7NjFmygy1KeNJL1cTekz9AEGFsFsJHZDt1WQdKQaP1gFsfpjYkM1C5QgxXpr43umXFnKJFEvGfXSyTBSFjk",
  "key39": "558cyZhymp4YaSqX2VE7QLVoNKxkcE9FxvWVFiaV4gFw2qG1NaEqBawaUyTe2ctGBdx8xjWyenzfvvJtAVzJidm4",
  "key40": "m1gaZZwRwWk1LFjS1pNanE4D6TZQ2uVbpWdmppawVBthondXDTueaeG1GBGEPS3nFzXSpmVXT2jpEbxrA6Y4Y2B",
  "key41": "5JTB8M2vUZm2vecJMJpnUZdAzTPDoFyXuo5SZqrkNLbPzpmj1QYkxFkk79P2fVxWhmkTnEixN8AEF66wBgjyPTxB",
  "key42": "3LZ6XkcMyPyAmirFJeBjk8PDo7Q1RuYfU9CD5PKBSzSRkdq37gin54AW6P9QGfoiKPVSuy5xMWm2fU9FeP5PsfPM"
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
