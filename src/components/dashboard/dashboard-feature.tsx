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
    "64DAJHA7GPD6e3PNhYoXzHiTmvgmr8UyiVJDf2HiEJB1GeL6iwoGXKA9BGqSf9qVqReYSNmH5CEsZtacuGKJPRvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vn3SqASk5uW76pyReLqYmHvRTBYRN13wZMyGb6PTWNX8QesEgcNaaJkZTcSsaiLeLQDNRzNYFzQoBtoZPuDZXXH",
  "key1": "z6hxDmZA7MtLWcCHUkQRgJ6vEFnkuypi9D9Z8nVW2hH2rEWtMadbz9tjxoGySxEWr1t98cxEq34SF3xMy6uWBHn",
  "key2": "cot65QkpL4SLepugSUXN9E9MM12Gi3UvyrcKuUJxcU1pvTjhpvMkGtodmW9Mp6iZu326oXXjChiCV83iBMiqKQY",
  "key3": "5DwTG5L3NQrD3VKoL6qFS58nES9LgMps8wwieBwE9qFCgVXgxTNCHHH5oUWgNh4ywEVJ9opUnx2QFnRRt61iKLd4",
  "key4": "48Sa2CJnFdqfSWsPVSM7SAgEFsUF8ZS5yrLcvbwd5d97MVY2hPhgX4ipMmajs82pYbfJVJbyYuKEFtFtiiHbYSiZ",
  "key5": "4391NszAokuztWixeyDHk1WubXLm8oqwWDApSeAzX7Pzz3fgX9cenVn6wWcBKfYUXXPCRjguCniP456dHR5kWCDU",
  "key6": "3PweEZfZnKNS4StLfso8s2929znEgiPQ7scBKFnQ3L4SyvLSLwzxTJJVGFaWBhjVp1vNg1SVGa6Y5ZDxNkycdZHz",
  "key7": "ZRJjaFtcyWE4L3hKUp34jzErjjn6A9hGD242o61WpvUnmeFMeGhCr14BTFGhRXihuYUAVDBPdbUtWaxUtfQRn2r",
  "key8": "3p7QEEwe7QnXg9CiSXXnpB5Lx3SMb9dNLof7LaCqVVGvcKoMcb6NPsoT8gFJH6zhxQU35K871ZFyRpWJD4JMZcJ",
  "key9": "4fHV7p1j47hvxvFyphgMJoDuTVD6zWe7qvj9R1PqJcbNqLza7NBZDzBmTjMrj3LjbtNdRjxrbZMtJHez5eKPT6DK",
  "key10": "5ipB15j3zda7kBC6TtgV5fB1aTNn56d186LWeZ5pSfszfDQ9nMY3d9NG8mqUNiXTRZ3mZn48HamPdXx6xoQ4k8Wa",
  "key11": "5ZjigecdYB88AQLCyKyZuwx3x96d3t8AhBJsytkZDgrSfe3iCDBSqm9tpgAA279MkSau2iRE5sZ27M97PqxRxBx2",
  "key12": "3iDAEmqSw1tR6pZHLb4u3UMJH2sUg4YrMMJKaQS9ijXkqqkxqSzeC9XbT5uErtU7xDJPzqH3kieoY3btaikqFENm",
  "key13": "2WM46aPPK3SgwLAZYPMhowY7iEJsPJwtSipoY6hmbRNpzFdzbzmHsuhDgnimrMuuwaaUyK8i2Z3gMrPGseztzNSk",
  "key14": "1GRPLjKWBX2veRW1udmfJ5ERBVqjhzophmMrXUo3TMTs2YSHuLjypRctqAqvUr9481bLB41L5tFXeKMqGq3oe9y",
  "key15": "MgwFTk1HELSqxBRHWdKijywdVRvm4c6FvZQxQigxsTJdJqYsuEU4k8Q7kZt1qG8zsgScHzomm4rqnd553KEbUzM",
  "key16": "6qVt6JCZiaw1ExyfTDBXKfmVXttXijCNnHR33rdvjoweNtCPcRKESThuvZfMTKNuRkkZ4qeL46AjgrLCHLGUCrj",
  "key17": "4WfRhn5rn32RDJz6aaEH2M5kj7q3Zkoe3hR3zkoGDRjzqs4iSXBaeyG4JGFBVjSWGt61xDuJuEGx3KuaZT3ctAfw",
  "key18": "4WzC1wuHYvxiBC455dmtkhR5xnZwdhBzS4ZVJJGHcaWV2tgyTaetYaPZ2fgB3RMiXvrH4F7AuFT2MuwLMvXZRC2i",
  "key19": "2phrrxRA4dVvB8SJQ64ZAwqRZpzac1TzKrqoXTpgXdvAHJw439f54NYy4xTxvXca3ftPXHjhoFPagvcsoD3T3sHU",
  "key20": "Sc9kwJnDp4ckVPc8o567V2h2cZAKfMSiP5XDqjadtQ3xeeJeQiCnVpC2Q3nLycpgTmkoqGjs7iF1tF9a2MVQxts",
  "key21": "5qCA1QKLJieBghUSqdck5zdYBTE5dqKJbQ4Q9ihBxKGb33ok6Zzojz6XCE6Qqsp9t6uRfTrKbK7wgynZRgEUZG9P",
  "key22": "e1tRiF1m1FVuJZ7cUgYVD9pbLbNcnC8ezduGiBJVVfDf6VzC8ycz8kviUGGgoSzJJTLZBGgqThQuJ9pD1CVwKRv",
  "key23": "SAQckpUXJ7ey4CSf5on7iU9k8vUmBgakPxjjwBAJh5g6bHDaPmQyjFwpBSiyX8VA5Qj9y1rhifMZAxBf6ELJ2Qm",
  "key24": "2uArhRWagT1aZ6odn9FuJynZ6pN78WcmpbbNTdpUaYt1Qk48eV992SPY78f5zafoQhB7XGnHz4kXe5YLg4W4zgjc",
  "key25": "63Bia1utKuHpj3eFmkAfevd2EZY8WmsDMyGZTx9RULTCg6ycagunBkVCaXU3My2fRbkq47k6r3d6HAFxQ6d9Qhm7",
  "key26": "KqHFbP7rt1df4zQNJdTUY52jUeHMqg84azywr3Spc9NvZDrMFYY9x1AZBpBLuuPHB6DD21iLkisxVZP4wE3unGb"
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
