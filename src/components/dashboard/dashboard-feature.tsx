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
    "4sXYTQTn9q4Rikgv2hehKHaxyQrctnf71mY3MZ1b3RotvpHmcxR8iw5RPykA7xiRSi1Dt2dh9J8BWa7efuAH72Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgKDUYcBwj5LR3SeSgHxvASYtFkHfRmeu9oFXF8PR6QNM3in8AfD71NsxtEPvZENTTPwz73MPxZrQf81KGXAXbk",
  "key1": "bTzhN7rzmyRMNBfXofkqDSaUMgeNJfvZZeMqnEA6Ljg5DKkWxdveE3c4wW5fZK7SWcEtBcZFKJcsqaUDr6q5jqB",
  "key2": "3uYgydNMYsXXoVFpyXNEz3mGENiwMp4bRA6sRNTLXLckFVcZ6xkjgZheQsRxBVW7yu4Abb4QURHnHhwVrrxVCETP",
  "key3": "2298jcP8JtbyFD2p2PyvdJDUBimmaKgP4YiZSMip7GMrkEeYyfsZpkNsLQqmjSW6Y4Evpa1qgAyBsdXb9i5xFK6r",
  "key4": "2n8e3xrbvFSaxHwBFa2YbKcCC8cHpT3AN4XQhq5wSKNGNGgqZUNGm16rWjw9qwcoT8Y8XXpHZVWy2E3iYqMRVRyU",
  "key5": "4n77wCvsUC21S7PuR56XP8YVguR4tNiEf7kwSe7JV5ATg8AGYjqvqfeDULT9RnZwoQaksrVq9CTdUsxSZUQ2qZLV",
  "key6": "3kYhDabsi4JaAzmuWtmMYPBeJnxc42GWENuj6wwDFX7B5jdcjnAXViACxRjTYUHoig2MWAAXVeVVhEyEVBQLo9i9",
  "key7": "4PrH6q5jjAmNizt2rctty3YBRZbJZQCkwBw6StpmkFp8Hbk4oRa11nXorze5wjY7ZvRSwSCNcCN19iKq5ou34KcC",
  "key8": "qRK7sQU3uhb2HcmKLKjAimh8tWoWLXSozjmbBVdqduHoCJCJwunQa8mRBTD9rwKbhEGooGphHPUdQM4WWHr3dUK",
  "key9": "57P6xZLMk8ezNdDDS5sis2UgmLfUEp4sAwzvBHgwjACcnRuPXDqWLCzVvXbpCC6QDdayirVbCJpRTDthcxk21bQy",
  "key10": "4H2RJxvva5EwHNqUZmx2zh7SQYypbyg8dV1UGmRtWC91QqUFTUx8EpkKkAZimLpt4aGgid2PnPUCfRwnHYCotDHb",
  "key11": "22bVL2jKqDqRdcNjsWkYzk6aLRUmcKzoTg4gNA9XunYfv7FS5DM2xtkXvqZ94Jq1tfAQ9h831vzfCxNscZVEJAsr",
  "key12": "3Av11MfWfdGfkycEwy8K3C8HPpJdSwXDo52PrYau68kj6WnJqN4Y9vkaxFNu2P9EchgzwRoKkTtwRdUdEzZuC6ba",
  "key13": "5DJ4rw71Xxq7tDRgPWWBKfuJBBKN4zqScbDS8baq7myCXqtiHmnoQWW4RjPUWmUNm45LafmZjTBgiaLErgnvcDt5",
  "key14": "3rEBhXmWdqmNW1rkRSxkF3on2aJ6ZJAN4hjD2zmB9J8un2pjSvEGa1ZLuDJnXgowDjWNGG24S6VbjbZzJYRUugGA",
  "key15": "4da81BsjqzRg51bt5SZYG6ouqoQ8Hra7fb72LeqDMPsrPVFLHe4iAEA6Bh2MGiUVJgTUeAaMCiBnzW2CqZzB9XJJ",
  "key16": "2c2wG4naUZiKQNLUKEDxL3mTVDt8KRCM538KSCrabU8izPY6nU1pgZfaQYxJpDaYpG5GreUrFtkqjR9CBnGR2RNY",
  "key17": "26xr1TdHnoF1DTjr8bgvgDXddxrcLxdm72qXTt4hp3XXsWus75JZXQs8LJXbXgqeMA12DajWyjomHiwivhLtJswR",
  "key18": "3qRBD4kj5LjjmjnYKXiCNkSaczFFSTnDzqFNdP3rGDr8wqoitMUFetDi8a3up4VBdB6V52Kmgtc1XWPTVz3pw2tM",
  "key19": "25aHBP2otRCeroCzwUNcqerMamwZAwVRr9ADw2WxhsheAhtknRMRQqJ5mMRBcKDCovXPnbM2ss6LWsNj25TkejY5",
  "key20": "5T9u4mQzkkGsoSiqcHyLyqR8Gfy4QWWyDND1vEiA1aQUe4J9xaZSGTGHPS1XyZw9bx16b57c9dWp2s8SrNSiesS5",
  "key21": "avAFMv1BS3Qsk2ghTJWAd8FxoaWXgRv7duXki6eNVyPdGpxjjHfuUQR8DEJPGr78AXMEE6Kh11fQqkX5BbPowi4",
  "key22": "5mXWpPRSpEko39RgzDN94audZ1P55L2mnCzSvYwPqymnNVV1tuwn6b5aTuphnF61dgSBstKn4GKmfr8ddSnzrT2o",
  "key23": "5JdAwyass2oN2z4mnwCDxXfg7ydLqLtVKnEN682a7zk3t59VBkkapkMSUcvdiZFpgGt11MQ8DxHjiQkRi2xetNUY",
  "key24": "46oC3X6pZkjSpc9NNTBuj2SN5VLyedjn2mY7ZemG1ZQdKASFvBDw5HAiTXjeu5n1A7hx3A82YvBEcWyD4VD4rGg8",
  "key25": "2oBBUtVVGj5qXLjhYTh3AZAFm8T51JGPDket9C5kdpyo14zsNmtuWpCpLmLZNoNjUARddCr2gtpweE6wdx3eGuJC",
  "key26": "4jC3uyhKTj5fWJ1DFjbi6NayNBZFUiFmEnvugUuzRsAiCXcZiRToZBQ6jfn5u9zCTiHpwwXoq944zUeGBnKrzLUs",
  "key27": "2SxdRSDJRd8SYGtvbGNztg8hukXjR5JYiNoF1aaxwtcbHXq4MzfUhuneJ7PiQbDCowPyF6LM6NsNsNjbuWBrQmmT",
  "key28": "25aVjqs4hQhMFy7WPG62wJKxoNPjTjkXdMWn7GMzH25Uzj6VktdVUZPqy87w7wSHFSjGmPe9aiPuUZUVgQswtkdn",
  "key29": "5NUDjqimjAWg5pT5U3G4GaEum3CRZp54DugAHK9Laj6nkRNCiaZZgVZg8rPq5RN8CEe3dURUe9GhQA22E97SuEMt",
  "key30": "4NbqARRvNVBg78f3FCcX9cNnBk5phHi5dbB52EWMYJEZNhaiPRC1vtWi2dK9SGc1RpGrS4nixKknghizKMWXKSv3",
  "key31": "48Achivop1WGmdGdeawVmntd4Jgefv4ax3uhB2pJhAcX2Yd1gWLEDGTQ271Av5ttg1VgCMcxewgss9Xo2mLCxpSj",
  "key32": "nzw2jj4PtbHC1J2q9J8H9fD2pbNHoAZTiD5659r4sYbkAfUJr4yYvR6CD47nhRrwuNPFsPEjx4LwJ8M5v41nC5Q",
  "key33": "3sVBAeCFsgwochx49wQNx3v99WJnqRjez8NRBT3wqVia1sKcXMPdyG58fY3emuprLd8xLAtZK3PdTATemGvttsXX",
  "key34": "3eHg5HSxSEzBknqvFRpwfn3qcAcqk4KPfsy7MAJTXMUYWGSZgcneZGYGua5SxCJeeqrEc4jthPzTTdXdMaSzoH5x",
  "key35": "7GpEoAmJ94zHYgufS2NHXREkbYsEtHDva3enAzQapTi3CyekwUZjpdHwUg9V82SSWmV4eZX3VuA8v5LpwRpCQhL",
  "key36": "3C8RzQJdLAvgS95WUchvqEJfErKcYuw1XXuuSuWCn8oLK3dMU3LVqccwDTwQQwjU7CKZstFCrDLqT5pMGx6R1hYQ",
  "key37": "5SW6UdSvnFaokUvAHmLnJL6zW33r6NUL4HqVMZgiPxgPCH5RVSRnSSzhk3qPm8TdM4vHdsd12J3R6TzYD7Y1AF6P",
  "key38": "3gX4CroVEGZ1HXRWjMRs1MWGgSRoyPRb3rBhUfACXaHsSRrYqeEkVsZT8up3HL5Kxo2yPWHR8xwAV5U5KFPEhdgm",
  "key39": "2qfprooHHQZK5fuuRaNqupJmfvqi7z7Q9AYhSp7ViDuupXtKAXgosmgfKm7d5m4xFMwYqUXEHzAhVHSv4HRQvw87",
  "key40": "3GY4QagvcpNFpj4UFKeYoFu56wrWSw2fKu8e5QKk3bqqwVGrwCKwcd1kjRyYmY4BHMS7NHP1n5g23ngNGARdsMmM",
  "key41": "2jR6SWNRHeFuHyx2tmZh2BhCwr9DVGVgNCeQiX3ZYFG53TxvsxnRN8sqgfE2crzR5Uygik9CBLCSR8ixHDHbVcLm"
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
