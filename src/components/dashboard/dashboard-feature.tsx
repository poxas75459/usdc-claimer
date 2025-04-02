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
    "31BRHHHEELzoNNyxqAS8vHCy2XigjxWgCvu3YY3mveQa4i5XUBRWuWkkU34Uuu5fgZS3W7rYkQzi4meSXCHgznr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7Rh8XESho1W2hb3vwQ4c8FNHDDkQnHKydqoA2yEWdxT1qC5s5PZv5PzzZk7Tcz7RpBDeWNh9NMPV3FoVGgG8gS",
  "key1": "cpbMw6jrYXPTKGkDPhesUyJcEu7ykYZuTsbxTjUdUPnH3mEVdFNNxppehk6bwam5aPTj4Z8yMSungiPZRcMRG6y",
  "key2": "4hnsPiG9cQSCrp3uWoStN66NESid6aeyHKQkSHho8x7V1Wi421gqyyFJDQtRFyCbp4Pm2LudzMBWB7SFXtRDDqTH",
  "key3": "5ZK7XeGPdnnaKcwFUEHp2uWrbsUL2ZtNDmSdeDStRGF14CPbEEuthj8QPVW2kAcFyzS3rg2nKqPG1suYT3zYpUaB",
  "key4": "37tWV74XSYfzKpTQPHAhrnLohs9qERoTGwdC3eUytFXB5GdAbPsXeai3VT1ivspFgT4LUmJioRyxzPsDSgaphHd5",
  "key5": "3QUCyPpndfuCs9iWwvvdhEH5ptnjDpYpPU1Yep1jRmoa5kd5TjsbPYdkeYPg8oeZEuZqYC4od8NCJWfx2R58W5CK",
  "key6": "57mj6KTrtemFpBJbTE4S6NeHj6ZYnxyn4a1XXJiCjE7tMrD5Fnuu4ZYHA8JU3D8jkp5gcWa9mWns4xyvn8u2811x",
  "key7": "4eWnvoVWjLBdZcqwmXVqtxEEuizgbGif445bB9jerfbBimio2zgSvyDJiqm61cSszBbDFcraqvre74wNFWaejSAr",
  "key8": "5iMiYVc73ZKYn7MuF2VsqCRujcdbTBUA8az38EwTcSusKSFvSGL2hijTQgGe8JXpnrDZfaidGgVQSfeT6nWTJ2Mr",
  "key9": "5gV9cgy9zuPyikYqRwcR6LFuEWUnQUEUM5NfZ62ZyTYswRM31yAUUtS27iqAVcpX2nFqXwVjAiJLcC2QpSQtNbMF",
  "key10": "5o99qzb5TtRfMS9pGgGWqR9jkzWe2nNE8LZGeTo2gUWjnGh42nWDZyFZ3QbKs2ZXyjdFmKYZRpazs5LyEdBPZE8v",
  "key11": "gfXYkfaiRTHcDgW29bb1jXBwNZUf2rH7YvYvwPK3ogwcdZgCN8CcnQVDD9GSGJa7NBQe2seiwsyDd9gJJceRGDM",
  "key12": "2oUofGCbcnmP4BY4u3cZutpdxrZcbr3SyNVG5KU2YU2uWAvjYdG61cRw7dTPzcekKJ1G3hdne3FgAR9YgsFKsqna",
  "key13": "2yPBy6ynasDDXJ3kp5hTEe6zfxe17WTTKsHUeQyB2t9U7z4jDgBguYjKTnPN2uVAqr5nbhv5Hj3JcXznNbxRTJS6",
  "key14": "5r2s4kH51oWM79cQUJsZUYMqbyph9qD8Sh5xQf4uLhaqKLWoT7oaKJnZGxwMyNRpHS5Gd1e5hfhJrTRUSLsXu7ek",
  "key15": "5BweqXsne9fBY3L892u2NsWqogaodw5R2WmorsGZiGv3a4zEJHzuKG7QoZApuJp6E5Zo7DypHE3TDaif2XbcBAeC",
  "key16": "4EQos2G2furbYpg4KH63He6xPLcN6Qog7Mds74BU2G78aV5dsXLVNtqxKreeJhpDBD8EhZUq9Qs9fy8ds1UZznVe",
  "key17": "3KBJZw5qZNY5UN4dRwv4Hpryme5sNg1n6EqqR5n1hr8bMGuXiQ6vgtvTPMyXVtecFpygbKu3zxtWztfrYFZKGCay",
  "key18": "4K7uH7vGnir45riAn21KYzyf1WPmaiPLjRxs9peWa3t51zUrmUqZBLAn7aCdfSznEacRTQEm1ZUjAYy9788Pf9GQ",
  "key19": "3sT7cairdPrrPQfLbqPYm6kXcp9KiX8eaJ8tbh6r7qXCYkwni7hkvvswtffgqXZdLYDTVbjeUAW8QrVU5P8KPm2Y",
  "key20": "4G8SRx4A2nE986CXxsBLT93aSTLRTjrojktbCvejiivdNs2zVre2GwKK5CppxmbdKNd1SL1zdZXeqaZcfA8L8eJw",
  "key21": "66RQohY4qf8MuUdUQfPUzc43MESkub7TC6q727uSCRC62JosUSUsSKE6dzyNVBHaThQ4zTcjMx4SVEo1sZ3VtPNk",
  "key22": "3AboqygnZYfMA1mKyEjubiqRfRtaW91QBnYejnq1qJQwzMjqQcMuVGrDHZzCmNY6SAaJTKQz48mAHMf7fi377n8R",
  "key23": "3D91DA5YpkCEYf5QsPdHSBoUy7C8WyGih9tReYXeEzz6Aj2J94RmzUVrVmLViBjqG3ak3dNC4RRuXgayBmiuyyTR",
  "key24": "2uw2Jefio3P9KDS44HfdGWfXYHqTHTeGHGApveoAbBvP6y4xp2Gqq3G3ZG41AdAyLRMbtp7jQbcDNaVkdUn5RHtu",
  "key25": "4AmrdKocAUaZitJWWZk8MFisAkphMdTHNaGL5NGkjyDQTbWL9j52xnpqKnnCQetbn4cjpLHC2BeC7UxwviSiuFhM",
  "key26": "27iFCdqYTUHXoukuxULC4S1wDAsdCALYL2BrKrC47ruYWreK2VPSSjztXkNS2BU3Dj9kywsGmbXTW44EtZEjCK6h",
  "key27": "5wTuuDLvomx1k5qaivfoMMrVQX3WR88FvDprtPB8JtRXS4NimcMz88nu8ZKsSgjpmXvBUyb1XYfK28ytWGcY8D5e",
  "key28": "5mZSxwGjAYDxQ8s4oGFQhgZVXrxzwSTZYcCcL4TPWaUghMxXGtGXr4FJLFhsa3ou6tTeUjjf4rB4yiTRfJaeVXwB",
  "key29": "2W92hHs8jra9nzMHehrhvqdNRjS1StiaAetSoX1U9HdcetmBvN6Ybg1aVpPERBUSwtH4CKF74wTCoazaUi6NWs3F",
  "key30": "3pNy4xKFoqnqty7FxAzF9V5QyFD5DLqkYQxbmwQPp1At5hVWet1JFJ6QfLTrLQ9sDdBrUZkACfXjBR1UGb7AmsQn",
  "key31": "2br2iYq2wU9ZDWqjuZneK3i344fqxMjPCxxTLfzEHhMt5sPHxwGTivV11MpV6sqMvTVE882kUKrcPR1bYH7Yu11P",
  "key32": "5zLWaqBgD52KaCTQPDrURDaSb7qEfMsUdBg1xsVMvdbvG3VGn9mve6TGtbpDKG3HCeaK9kCR4S68533ZGP5Smcc2",
  "key33": "3xG3JBkAnbRqjsBB57wFBsvoThu6aXL5mgBeYmiumDBGpiJRPUmsWGJGPKBasPARYWg8rmCh2gFN2JVt1xiHrLse",
  "key34": "3eFpvzHdigViEsefE6wQjj75igYK83pfZ8v4EP1vSZ9GVdYRrwnKeVp8HWmJuGzYaoa8xhYUBd3r9Z2LNEghmdqj",
  "key35": "2mf6Y4iqCD2aTQ9t768bVr9MwvJihc4FCrPg9M3FYhAvnoJjUw6JAf9xX1Goj4zB1QUVx2uH6mUshMjhJHy92KtM",
  "key36": "57xftfSbdyPEGQWRyuRUSdSP3Hp2zQoJro3XSp2K6jxv2wN3LDafQeztR8gi3BGGoXou5bwkJWNPJNzDNBB5UujV",
  "key37": "286JvhbUQHA2uoFTvf4JZ3cwjA55jsAAb6pgA9pYxWxcdiWBumJEwGRPby2BVD5DBNqQjDzNSeY8cgQUWbJmk1i3",
  "key38": "nY8pjm4pv2miMC3TbUcrMmEyg8sojtrhWSmKKtP31s1aGKBT62b14Wn8FkPMQqFMJufhXixd9HHYYZzoypJRFji",
  "key39": "CQxQCa5rjFBN49SYXkYqC3uooDkNfYGdeTtuNiYYGCUyodwnGUqM6o7M6uoNSiTTZXGaJviHDyHZNjV88n2XWBz",
  "key40": "5UmrDdXp97wKg3kAxDfRi32NEbhKm7iZmCHJ2H3orafaTKE9LqdGbquzQLMKkdWyqSq8SN7DVpPfKEwD28yBV6U1",
  "key41": "4M2xtF2ja9W8QetEAP2BAyHUetUtUfRbk1X4KMBesrg31VSDVLxym69ZLhR8qpinYFPawgbFhpvuFLD7RGKN2smC"
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
