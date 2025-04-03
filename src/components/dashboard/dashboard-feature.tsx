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
    "4NjbgtB3v1UmtSkxe6PGENie2N5M6R1XwNVoevkd1G1h1y2B4f3YqGtHHkEELMdEa5BqtMpraqL3MQxpBWtiMWQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KiRXEBy6wdaHSx4apcPuvKvE538kgk26mQ3ayYbnAmLpg941TM7DJfXqp4uANdLC4Uyc3BgTVV4WesUPvGK6xhT",
  "key1": "nm84CWfTJpsJDkfJN4i1HGwoa4hDVPCSLYW4EX3x9AofPbrsgL3TThpF2XyMacd2Sx7G7Esb7JRYzuzwQdWShJN",
  "key2": "5Wn22dx2RC7tTzo8AJrcsrq5R6aAUTDM1cnXGCWZjvD47mzrGp8F9Huw78dMaaZogANjyGjsvy8gvbj3cULvTHsP",
  "key3": "63kgt1MUni4M4bU1mvE2DrEZaWLAckyQSn3J8mXeDY2TG4aW2x4JzprvdrQG1JMvNBH46tfWKEhTkPHMNyuvnXMf",
  "key4": "thqpFg9goUGNirMQdNQ5vJCDVYe9resn6SKDTiXu7gKezAMLbW2bVQ5KSF67pUmgR27gcNqZH4k6Niw8vgmKDxV",
  "key5": "AhskJvScTGnVXJ3KZbowGwNcAbEEnq91oF88n9DZRVXceZGkqtSn8FXmD6razZ7YU585vBFPbnJZbTpL8NecwmP",
  "key6": "4JFJG4AbXicMFKKc3umqbdgH6uXnr2fJFsmwzP1z21nn4RscjvY6cdFq1QpDAVfawiViyGTBmxSowvfbagZTwmSq",
  "key7": "2cVjMJGaXjJeHi2vQCzsu8bD9XL41HXme1hQq9P19kaw9pUvemhU6zSCkgupKLgdS3oZayGP47kfDjBWZLyiGHJ7",
  "key8": "5pVn9JttavrqfcrR26U4R8txEors5jxoKbsbRDuFitKKNaESYtNmJqimxaFysSovPCgHcKvJyUSDRvBJCdr8bXSJ",
  "key9": "2qHsPiZvtGyT2cmd1v5gXpr4ao6ceZKaPyicCQNgFrrbZNLNyN1p46giZvHH38EyHAyX8yRxc9BtNWdCzkb9RN6v",
  "key10": "eo5L5Z6C5FgQtZCoBpb3K6kYTdwGdYNVbQmrXT91H7FxourghhnRYkjFN2PStWKezg63cKAzuUzTzuLChzq7xK6",
  "key11": "RTEDffoXqwZZuNtqX6ZJD8LYi5yFGL1vp9BsxjUhSKomUVeJ51ZYSunjLNbuXeBtsnYnCF2VL6rbxddJAVZWQat",
  "key12": "3QUHi5axw4PX25MwQF2LgX3AiHyE5GNBRwBw4G8Nxe96GzLW6AzpekQjaNpJ5gxPmQkai8bRLzCczSUix5q6Yf6s",
  "key13": "ui8dDEsvH8P6hWWefVkzi4TMAAQq6zsJ6h8FNvThuhSbz3BTkAhxDGCCyKCxANSV7jLkg1HyDpv1KbahWSi9mhd",
  "key14": "3KRxHyfPAUDUaczvEuftaKNW4oHBy5RQ7FfZxgut4dhVT1b2bfbNA6RyxTbz9HtT8UVQN9NijB3gnFYdidYTwPtr",
  "key15": "4BZsXsyyY7Bq8EWaEBeiGHd9X5BrXw6sZyXwVNYhZJvzssQAqKe1RWzcE4PwwiMJogE3k6CZmwbYDtJ8yp8MrwBB",
  "key16": "2M7TAXcFnFmBb6o6xnd9E9epK4v3mrQ4N7rYibmumg1ggnN9QbvuoL9MQNDkZ2HrkT4Vb3YyVTAsF4kDJdRZQLc6",
  "key17": "5xS1RcMJHqxZCP183tF8RLtsPdocFH9MRcGx9uoiHJ4EkBiUmb1mivhJ9Rag4tL3UzA7VN3z4kjEYDyj6K7Z5TCx",
  "key18": "3G4ADHWgHQapHtygH8g6M2DAMyEcdk1mtpbuGZrEuURLquTyqi6VcDsGgtf8xCUU1X94pQV7Qzgdo7DR5d7pxmmt",
  "key19": "2CFDSJmVNTMUXDN6Ahkpj1CyGZ17oW9s91PTs9GHCqVTxNQF5dXKuTqhhQFBstAhcCF7NiES1NhZtcTYHB36FaLb",
  "key20": "Ae9duKZyjPcxPX88PCYJAeEGbbXDfgKHeB5o8gPBnutHQDyTCyAW5CxiT5qHGjbJ28e7XQQ9YeA9eC5sFnmqQ5a",
  "key21": "3uAhcRFbrqRD8fNrrEFUGACmLRUHaUb2XMFsMbaduDdVg5W6WVW7gohj2Bxc3P9SmYPVQQE1EoGGTyspUEAiDLbh",
  "key22": "4uuaSTAMXrxA87Q5foZMDeP6Xj71xvbTd9vuhjNkJ3RtTrZGpesHQLy7oebz7VgJMzBHmqC5za2NbDAMfzG5bG2U",
  "key23": "3Q7MYdpwk1eRvLiiAQLJUwREVq1rmyM2D5EMuRwR8QaciyPVCnFStY4RCGXfdgi3qQokEByEk8Xh5jL19f1NNH61",
  "key24": "4xfZQLHWbiRVkVopvtD8f7zxzkpUoRFBwwcBqmPSr4zBdQED9Qn9SBoTiiTxjmDJyj9e3wFeHNEz1h4BVLurn7Fx",
  "key25": "4gKRTj54PwLjdo2wTS3hKWDD7qY7HsD6hdq8BXnamKUiGVm7zBoX8Bft2nakqCaGwZ74opzKx7K13o2DGCw75a5x",
  "key26": "4rGWwYydMhrCLfhuREZThVqBWZt5VyHSeKAH5W1ujkDkNjqoMiYxjjxeFg48jeXonqwhjLTav9PKaG1gYw2LLt6y",
  "key27": "5CLooDNypzqpVvdxc9Cr3Z1hUmMKALT6ut1yLDJTrp8APH9pket5vVUpzMtF2dTfEcx4GT4JyRjsFWhqirC6CMkf",
  "key28": "9maoH2bWdurKFU5tfbuMK7XcJ2gQ9LYWLGK71dsuvp7BGJJDfzKYXJ5kidWePiMXrv3ez2WDmCN2cbFCYA8jVtD",
  "key29": "58LSkHrff584Fp6JWxqbWZ5pWyV4KL94hFhP2rpSW6HwB4USUfjUW2s5GTTrRWJHA5RXxyVvHRkCFnEEBWDnRS7w",
  "key30": "4yrSHfNnZ6VrMXFNxNrSPFLdEbShvqn4BWnSsWpmUQNaSr9PKRBuvCr95npotZExX3b6FwhNpjpbgZA1y7wCfBnS",
  "key31": "3b6fyATgJ8RohkMjgGk5B8sy5kGf7Q7kFZf2bskH3qs69b3e2JSAsT26De1owTzDufwmRnMKsXja6V2pLEi5Nyhg",
  "key32": "3dtfT6joKnfGbKJVg5rXXq4z5zR7gkPFT9js41oBNXV7mDmRPDjjrgPbj3xsoYjn7ojBhgpidXgb1rPU59BGBSZB",
  "key33": "434HYNChWHpNdT5iRoivvc5HYeAQwnETk8KTvfHcfGE3yz51pvbTXisziF3K9kgFaEvS5V3qpSkBmptgBGE7MTuF",
  "key34": "3EBRPUw4Xev5c6pQweRxgpPHe41CNqwM7RfTLMft22sWpoJVPHacDQf9KHymjYcXtqWRGUEuN72K2fxDy7q8TuYD",
  "key35": "2VqLWfKKDMR4u7FjsEaJYVH6cuEA89MsX1CdsXi7Yb8rByqCHPWWqBNwo2MSKtd5A7YcT4H6yPXkXvhLRLmtSaiT",
  "key36": "4YhKysQSxfsaHBHwLXJquoZmFCeNrcnK9ZpUHgzfLQ7xFPMN9u6GKbWGrxQcmyU2ERUWLKKBFXpMEXPZRsSzrEAV",
  "key37": "4z8uC4CAJAw3n5Vns7YWedpixiDctpM9uYo7yqjsahNB76mXkmkCn4ogrjfAixoTi7SczeQQfWwpveJSbVf8zM4q",
  "key38": "54uoZv7iBJjLUnAL7oZby5nnr3N3ZcMATw3HBxvSfHdu9rfA3BCiEeyPVtepMC9GsYDDL8FbdV4HHbEQZgoaTo2v",
  "key39": "2rFXEtLhjwKPWuRxgywpJ1piXW7JsfuDwZ6uxxYnjxrpS3tPetiMuyC6tCHrENAtCpHyqoNrxRwsXxTdextWXvVy",
  "key40": "2WdHVfyhEXcMz7AvZpouLxtdBfbC1aw7RKLhTzwRwoNe59eYYrG9GFYwngMBqCgcwSRSKj1ZTNZzw64A9CCu7dfL",
  "key41": "4i5QrjrYqGA6PuZnYkeuwx9RSPfcY89VTC79p9U84CzQN7ws1pWcbNjMEa6kBotcsrbXTaQj6CSaAN4cHo1nKUff",
  "key42": "2XnN3GEyy3SjNGJYSJ4MBtdVipt7bqL9oWzZ5cD7JUdY9TS79zx2ABowjiudzPkKudkAmzR1s9JSHNzS8CmJtWPX",
  "key43": "2oqAJaZnvR9gmsBKS8hnvnDSVkkdSfmw9G5PYT5bgXJ1ov4JmTTs9MRoGNrL4kRTswskCJhv7UNTQwvqVhijb5gd",
  "key44": "3QdZunUhAD2h3KRfBwwsjsnM2mr9ikaxwn4HoEHxpekoC55goBccMWBsKUbNs8wuMiqLuTM25Nn9VQy32JuoPv5V",
  "key45": "3vTPCKoJsPWM1CAN4jpsqrTRfgfzSxSpL44wjjXGop7ARMYXZBMoRDMNWgAhcMNZUhbYMLxFABMoAb5L2nP2tvZt",
  "key46": "4MWef7a6Ykut1XkXVNHqkJTMPB8HQXQnoSwQ7EwggiH8ejfR36s2QNeYKRzmtQ6A8oFHJfy52YNZvP2QRwH1kxDb",
  "key47": "3Jpa92roimEjsw9zJbgc7NtGaFKPhEEKpURapT77PTxhNjQyPkyDHenwENHripNabNbxYMhtwHS1MN3TCFzCJVCp",
  "key48": "gN1pGAu6vGxP7N753YcipUTZA7MHUAyvMXNTTE3MmEJUFQBPEdGgapDMptQV841vVjhKZ2o2Vfg3ZDNqisepEer",
  "key49": "SWFM6TwRHXnLdLsqsLAUF4P4jEvm2uLdbKGWTfcwNYezPgKi6Y2svkFtE7pPPUjHPkF66KN7eg4PNk19g7mpWfC"
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
