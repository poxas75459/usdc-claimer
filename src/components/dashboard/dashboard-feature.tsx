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
    "QqfmwRpwqbhJCuoQFA4TVpEB4uMhKxgcXYBNJUGF14pLaknDA9yhQDjJBpJ5XUe9NMmiqkdP6X7NWdsb5x9sNno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTHHAJvXyJtFYE7M4PZhiTniBEYijGrj3P7wiETVrR9d3zoGWg4aZuPu57H5YubDHXWUJRGjZXG2L8oTqsDB56j",
  "key1": "55LWax5p4kQ8DxrVwnxMzKizL5FiCHgAoFBKZLWqfad89i1TZfHTrCP5thYFZ6nZmDyLevzBTkUymripUegnFaYt",
  "key2": "55NXY7vrA6rY6jLZUVFmpzkB1RiRD5zwv1RX76bx5dtqGYbGkVpgGQ5SH6cRXt2NsvwazX25kyxQTzYayoJSCrSQ",
  "key3": "sCFQG4ZXS1edCRwA6XNk4ktZ8igzSSU1aXXaCa2jEC7HYvJT6x79bfpbYDEppJnncwWR9KA3tDZeFf3hWHE2T3q",
  "key4": "3iPBnHGvYDfipu9FACKoudaVBQ3d5JFNBWWjac4nZYtMsPhoCydLZEVCvjWWUp2hxRSsZRaYJhPT6nTBcKCJ33jw",
  "key5": "2mXBeRMpxka7XHUp9cB7ogQu3x5xcEmTtYQEPdM2wSzJvNqxdNmHkp1iAck9tFpkws6EB1xV6FrGDz3gS8izEQQ2",
  "key6": "5kyxuiHYoUuupjXJYDyDcpdU295aDTeiyqXBZ46HCv4QthUsTFm6HX2HdXsvjWg9bXoMsjS8E68fhwKsEb2K9WXM",
  "key7": "5CGG9ZoZ1YVPmSaeutJeYkeeJbQfpE5LsgH3GQnoZZjcNeAzj8qP7v1FQxediRDT2rDDW9Y5AGMBx2R1ezRqiMYi",
  "key8": "S4rzAZEFg3UJybdkn1E1iM2cvq2HEh9vmE4DLZSJvWNsRFFfHnBvFKJqSKxj9LjYF9njJnaiAz36PaUPBZUQhx5",
  "key9": "5eB4rEwEwncxZC9hPK7EjUn7rHmytTPnGwcxqwJU9mZrwYpc3sWupMgAaE1ZBRw725dGjo1dQvMUAgZEzD44geN5",
  "key10": "EChZ6VWgSzWuKsTYQye3RD6ToXJmSY5fCx9bLBLbV1pWnj3MWFXB8hL6Kjsi1J35ki9KxkAEWzAdCqdHdL8YTBi",
  "key11": "3mREaGnrdQrT7ik4Vvxmf4NUezkcFSE9udh122eQb4FFHcVroVqhAtvG6Y6UGrbgwSJ6k3n8BFDmXG2z7hhrmLh9",
  "key12": "4wVdgKuQumiBx58MocNRgMHzMiXG8yKAduVEaFuQMGJKBUiiKcmLvNBdxGJwZNU5e3mazQFQ4pFrMvbXduQhwRHm",
  "key13": "aStz7cNZmWiKMu9VRAUu85f5CMbEuvVmJktd2mwueqBHiTMZB3r3FgPyQsS7Fk3SD1fVDvkr3yvaHHEK3cHVdDA",
  "key14": "2QjdNn8qShYGKV73jpXGuL5GL18HHxp339j3x18TWadbd4fLuyN7NKREVzvJsUNcW9pjcXE8LBiboXytuiM1wbve",
  "key15": "PFwYuSEsZKmm3DJnhn8Z1knVsEeuV7Kuq9RJBLh9gL1tquYLG8jNQPcAeBRKEfMsqAoNmguziLgnRK1ChfmgQ7Z",
  "key16": "9A8APuM1VszmajpqXtQFUHJUrEHWZpkA3D8SQWYW9QRisHSY62F5WKNCbk9FceJvjChzJcHksYJFwjDEhooHcV9",
  "key17": "5MgAy5BhHiF2RmNzHghZuxiU7Ma13YmJYMJdg8BKoZSQL85BxvKrZoSUHtVSpSfmiqdG2RA7cnafsgiW9Lkun495",
  "key18": "4J1B4qhKRBKbW4CRcUxnHWPSMvwAQC5uybMebAHdVgpV1VmPsW7SEQy4gj15YKkURVBGesNZ2rWBXuBsWVzdHKQD",
  "key19": "3SbnAwJn5hcu7rBtqEShFFEz9zkS1DkxDoxVr5Cju8CyK1NMLFwVyjcjaGxrKfBH3xdNd7kvQiM4LGs9fNP4mpFR",
  "key20": "2TWtdxDs2tZkgFrHcBJyCB3YmKeWYqQXXJR6FB6yjCtvk9miK9jH7TzogDZKv9MDgrwwiyGP2BLjnkKrRHWhSrXL",
  "key21": "5P1JAnv6dezPhnvZSko1tiwUc9M6fJa6qMh3fei8FcLDMaqPfc3vunPw7ZWd4vuh5NsTwDJS1V4Xu3g1ETtPBBe1",
  "key22": "dMW5A4Eg7K3HgbpBN5eMVZq1YVXDuHJcd53pWWvHKtPNRaCcMDFTuJ2geSqHWM8unFF918dpvNzerf2VoXDKoLf",
  "key23": "33oRcK41pgNvZ7UxbXPKTVcY7pz5gkKyADnBu8z12z5UcXBJuF18wJanzgTtAPQNhzSaNTRP6vXNNu1YAAfw4FQd",
  "key24": "4Xt6AxwQXvqpoxtkTQ3wvwKgYAnQ6DRhsbV9sfLske5frv1WpDFNmZeJu73nPJQg6mpvGo7u79afdKm1HcG7UsoK",
  "key25": "63kKiLMrFjDtokTpobcvxt1peqvyxTzLswVh5rQ5BnnGkwy7RtGYu1nbeBdUSy39CvXE66LQJ1umdJJbLfcrsjjj",
  "key26": "3iQeKRFeKXoc5sdzUERRxLVTuUc9hGRUzRuiRwNJYqYAHW3DWHQQHx6U49Vv6KLqXdoQbhXe2Pgo6rNNXzEjbJd1",
  "key27": "5QhoF8CyM4AaFxoDB1gXc8pyEk8Nf4yJwQohi2zJUd2AN5Xw3gX6MgzQUYXjEvk25EYFuhVJj5GQjeTRBq7tTZZj",
  "key28": "5u7HpY6kGKWBKyc62Foq33r1T6LGjYkNFHxYhTvB5UcPMi9bHFUU8sbkDAx7YRpnVZ8P73yGhjCNzF15Thmqyk1q",
  "key29": "5nhzdArCH1n7JCQLe3pe1Gtsd1c4J6xXyy2EcqmF589DH17Hn1rP4XafCd6wrwzy8gLsLDfLddJDm8dtFttSZMzi"
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
