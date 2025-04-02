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
    "2M1gJiqBYyS6Yg8ddNNzEqPjuTLTeVQ7qd4PuVvRsnG1xNH5Crdq8TERUJ51YHDV5zVEjCJFmmmxzvviSPUmdkPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LuAaARTdhh5a7uufK99KN5ECUtQDudy6JTzZ7RLAEWXcsbAZ2kZWjCy6R1LAY5wCRGM87EAPY9Yakk7akbgH3pP",
  "key1": "2CgZzuuPLPzoDtwYbNprxTpXrH6f3GjJvDpmopUy3ah629TFvNiGd6SXgHshMSAMf4N3iEyvWmmjANVYfVVrpgTK",
  "key2": "4QrjpP5Fw58ARmimw1i73bqQeKpkv58JNPAHHnYEiA6nYk8Z5MduMk7PqRKtXricYGT7TMRRVXV6gadkYiHPM1Pb",
  "key3": "2L3Q2o98PSV5dLTBx2zDYnBYzbMApRP6ZmA2qRDXrpvfmdNctiTnf8xTV2vYbaAkabbnH7wKsXXcrxa4RF64rjgN",
  "key4": "2JJW1XgeJgdCMoC71Z9ZKFowJjzpZftkoz3X7x9oiNqbrL4P2ekz1HWBJ3yzLvRyJhUaMUu6L6G8BSwii6ZVv7QF",
  "key5": "3evwkhch5DBjJ6hfBZJMb8e2XuxZo3RrfxkqvPWFf6W8H96QFyy43zSG4u938iFkd6EEjXt3YTvM2d9xknwuAnoF",
  "key6": "42oHHC3fo3JvsfYqHsVFbLeqZJq7uDCCSnzjG56jeDLJMgyNen2Hf9X9TfWDEWCJQoJ1Kqo8hPBerLZ2VG6D5hPe",
  "key7": "7Fq7XyxvdUpRTBQemzCGC5cxdLH6TX3uhNw81nQbQeFE5eCci5vxZ6Ywk2Yejqzj4UTMXsevUnvQJUn7F3Myf41",
  "key8": "2D2KEFt8H4rnY46d1feHYjqqGJLQP8ZWhbtnmNcifjmUEKgyi1UJAu1SXfZKBUy8tUzEYE84F3xXSLzvWDjK5QJj",
  "key9": "5sAW1LC1BJ9jWw1HcMEnewja7iHc13XYTzMQE4gVfCcirdGyjaYb5rsiCzxfohXMP6T1uPxSigKbRfnddCvxg4gg",
  "key10": "3pvc2K9A3AnH3eQgs1LwectKgftFZtpKBKbH7HX2ZTUHrurBf5qUWEyQ5YN9tec8L5oN1qRoL27JZdqgg3FCd3BU",
  "key11": "3ZLg13xTQRyGxQM8pjSdGYgWj7BL2dy8oThpPByUaLNVjdX4a4e1PDt19GJ8DXEQDHk5fBwzSwq5zssKjjSfxMm3",
  "key12": "31e1BXFQxEQLfNu4dpvhHzhL2tsp8gLrYUJHvJKRNi3hF1RHf6qoUTW6BEaAvJHn4jN6sBNuWBhqKpwJ3Ung4N2q",
  "key13": "1P9uYApZ1PYb6uAavibbc83uZoqvWcbjR81JtUjZ5dPYNtPBwriTRq3uhHJRQKsNTCXk7zneAwmXUm9a2zDRf6R",
  "key14": "3jkV2e2k7XFEzdsKb8cDdkRvHUcX9SMsma7AH67dzomWbr2cf2SmdzFGs3jDqKQB91xBkFQeG4dwn59f9uPboSsE",
  "key15": "5X8kFrmAgRpfMe9yT4fsjBAfzhHRSy51C4fLb2gdetgPKQz5tn6K2tauWoC5Mqx7MK7xmAVER41FDPH4XaVfNNk5",
  "key16": "2d2fREchxRhRERiuUW2TW9t3AaHejbw6rjrPSiLtRW11QB7ogcn3YBVAhcktVjUnZfkU2rH6KTNmo3rBWqSRt6EW",
  "key17": "4nUKtZof8TYTbPPeFnLpgGTENAVuDYhnqBo6Lp7nBK16mKtMpa2M2M8Am5BBfw1wuKUyboknTMKUJxtBZgWu865n",
  "key18": "5W2A9d2Gn8wruk1GWKg1KLo6KopqL2g8TEMCJmvJGDesgDycjCuWmk4g6ZDetdtWeivJLK3XUacXAH81i2ftFAM3",
  "key19": "4DeBL3usgf2hydo8vjLRhULtZiwnPvV6EJHK9wn41P7uHzfWUXv3M3UPLeMddAYPuAaY1r56yWN3AyJaVDuTshwg",
  "key20": "5cNhNgSCUGNhZaCtaXDArGuCRYoQ3gV2dXL7wUhsvTAfXNCCcJyBxc7byHQsnCWm8WqRSEbwaQNG3q4Bci4CJDZY",
  "key21": "KL1hhBxS8chcW1FmtF9ygZABk2msVSP7Tkat6eh2kWUAyfsyw6kzW9rfsQdNXmQdPdmGMKAMDQjx59zaiQ8pATK",
  "key22": "2zLMf5qAEuurWYtWrrg6sCNiM4jz1QJES37tTk1cHeouhQJ3bWVCVA2zkbofJ6rKjwCNSJCSp65Aog7US7z7xCxv",
  "key23": "zRotfYJubA15BPq8b3Ybnq6fNv1K6SYWjTFVX4q5VBE889ZXRD3FTFnc9bFasgRP68cMENHcJQtja8p2DvVnTYP",
  "key24": "3L8gt2U4RCriA5xQcVLcpkNWvCfmNsdTboD6hkXPrQMaaawo7fQMiSGsteCuAyw3ydwUtTG7iuMw5MJpDjGyo8kQ",
  "key25": "2AdxMihzztnJ9ktVHAQ9T56Bk2aJEWZGsA8SzrzxfRGaqVxuAsoqcHNwn6ddEDMxbi97WYoHTgBVYb8NBUnr3E7n",
  "key26": "3UynAoJGj7WdpXhdsZLT1KYUcufi6Kk2Liwn1H1RQnCtdVVCDiC5Cv6FqxWVDb4WJ8bzyrN9ZZRkwn2CDHqJN4So"
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
