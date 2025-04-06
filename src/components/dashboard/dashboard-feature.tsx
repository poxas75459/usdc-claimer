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
    "3HMfkcoYD6mRwmmyajyT7qH3QEA7yzXu19r78hMLqaZR4Mr8JjctQr9nW46PkUDSJSCq5RsbhshJCbaSVYD1kxXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jw6Xkmufz9GhdWdBreaTiCvB5G9gLSL1dMQBtKBghWeX28Fhr2pnWtQ8TmjofGHYhuJNH6LNqpC1AMuc11uZDjE",
  "key1": "45ecL36MJnrrPZQ3uKWNKfv5d5z173kmynfBQU2jdXnEJtbCwTbfYk3JTfpHRXXory7N9DMRp1WKZ4nU8Cmpe5Lq",
  "key2": "FkqwAYyaCGa3GeRsDxpnwxi4Wi8fpmd1hNKFUJAhUYfErF63h6YicAC8MovvJiHXrKjK3HVsV8daBn5He6iAzt4",
  "key3": "45RB7uCagLKVwFKNWsiSAKbUt7RtPghA9CQ9Xj2V3w5hshUM3s8GW4nBwj4fHRgarhXdET8ZbexQHLzgLmUa3y2y",
  "key4": "5pP9DCotC1g2NpmhrfNEoFuVMnt94G9TxttkpJBGZYJzFB2ja9r95bsGgWEh8NXPyrfRh2Rcqzz7S85bgMK7sf27",
  "key5": "24yLqgCgoBX8NZCsk7cgkbbzZVn9ULrjhHzrRWP9nFkEUzm4M44mSh4WWiHGR3KPeYdtwFdWRBgyucziwSJMrVPg",
  "key6": "5gjr26ynFztcMvHS6MhY6qSRraydotFdMgLWr4P8NtjCgGpCsQZHg2mFzQj9C5zMDxwyw691TTDomuFPK3NXBRS2",
  "key7": "3mQq33FMKzBd8A7XynBCV8haRcg1oydUc6S5WkxAHLrgGQVmHVUTN6z5poJ8spsYJpCZYVJrv4DzYnCRT29k4mYD",
  "key8": "4MgT5h3HYi8G9CtMqhXxe8JVFJ2jsYP9s4MWywjUpGWiLzKXYt3KwE9aDVjQHCLQue1JhmtTGACnTEV53sQAgjjp",
  "key9": "5D3QoKobhhCTD46WpHyBALnTvjyA9H3MJTrBwcQLgehFhexbmvTwNKSBhqKSkjFH4XQbwBQ8PtAhMwrkz5vgBW6U",
  "key10": "37H2LtDwz3YW1bmSnCjUwXai5brJt7pgT5EWECn1WuQtRUhTPytTpfsGg11jWhr35b4o2176Pb44RhrcL2VAkeJk",
  "key11": "2BLDZLW16AH8FKdAtPoudpumWRvyeRxvXKSjbvYFSowY7XDBeGAgkKs332rRUuqNoCc77SzR6bYBb4MF9tZd3YRt",
  "key12": "2Yx95tvfzNfwuBwZ5Y2baD5YRomrQ6tAnhovsDWmUuqoBRoPSKc5Th1ThSvQqTLG5eDbKodVRcD1h1WMBREjn5DD",
  "key13": "irxNAPbVSZPg17EVozL9N1QZpQAdRveW45R9oEQqZiws9ZbwfViEyH5on3RU4ZvCQm2zfSzqngiameYQhSkQBVV",
  "key14": "3UZyTCzppffmsGLhDZ7km9RuYiRfvw9zp6k6WbE7YqAnDoq168FFu4mmQFQnuu9j9bwwa8KjsmWDTqKKWwkFPMzR",
  "key15": "3fjbswgg4SECAkrUKQEQ9GaArSbp4RvNGXU66ZtcGRaZKMxKQrpB1ywZZyJmwsWnqmXcnbrGqW5AzqLkRwCh5r9W",
  "key16": "277HBXvkfKmQ6pF6WieALApyzkFBSwxqo8SZTff9bDyoypPXkDtGCRED6BaVGxMMuwiJNYA6wX7BZLjitA3SXXQN",
  "key17": "37adFvYuydxtEq4tXifyxCmmG5mQ6JQ1wLopV54E9BjRx33zzpL7qvmGR9uwwtkn6JyPEQyzar3casRr27NCq9kD",
  "key18": "3LnV1ekiR1W2XMnX7HcV1r9kjjUDzov4Y5dcXtmZXLNWRpvgvemy2qkMbN2awc37BUtkPfZnBTt3iac7YC3uUPmf",
  "key19": "5gpoVdSDeAmybZvgM61iHG7tpgwocZbq2t9cKj42tjTvPYGc49uAMMFru8kGAUBTD9nNfBTmn6tyFzCUhYpfRz54",
  "key20": "2my3p7UWdLyCCFKf67bgi1n9uYCVqfMvRMUX86NSGMSqnUgevkeX8rjD1x8e66TqX2ocNsFWAGBZyimqSrmzxJMw",
  "key21": "3nvsp3LcSHyXFtFCzowA1dYXXKVryZ5kL8tEUz5j5rRCSfLvbRBFdWkfMQW2q8CVK2DiQnCatsr4DaTSwbUArSP",
  "key22": "4RGNaMfZdVohtHPYxeyHLu8REsFrqoWAxFKfQFUFSWXMDNpVQn4ubq7R8QkNSX1KMFXTTvFyVBNdTG5aQqu2i3Eh",
  "key23": "4XyLzotvEe8aiVsRyfNfptovWp44sZ28vV4dP4r5zE7RfZTyimaVsPDkjQ7ShztvQrtGh49gG571QkeGAGFZB5oT",
  "key24": "5XLuJPfTee3uacdqWQuL8tdU2iGr6jDgeEpGu1Jf1tyyBRURwYY6xAHUVhCZwMLLgbYSNVMkk9VxSQfbvsVxsVsE",
  "key25": "5GbE8YmwDMF8WtZBvDj81NzvQMHUCcXhGwgmvNh5XeDjqP4WFfHh4JycpWAeLHceowfgQpPVw4KBM2Ldc3uPPY22",
  "key26": "4GCKNmZ7VKymFmA7kBe9PqVwZKY3xkQvkoARTsB6uFhC3cEesovWieVEDpfDSszpVcAkVhmXukUpCdmDzouaXDdg",
  "key27": "9Hd4hKD4BDc1jpsNc3tEoSDmWqdGc1gpuzmmESDv2RDU9r8xNPAhyzAGjbakBAhfg9jr3jj6wSgSdCMTa1wbzoV",
  "key28": "2uG5VyagF2dAYesWnyYAKNvXAY7h7rr1oYmh6iDpB1MaJNJ4LvKYdLKVTzundzPKoyvAoLLKZYbPupW8BnxrM9cL",
  "key29": "5SuDKc2cRojGpG3CMSxQQPxJsx2SM4AxvGw3C3zfq1mkjbCVUfM89dCvrxteYJdSA66q68GYgZZoxUrAd3hBE9Ft",
  "key30": "4CQRGVnN8ozPMyjgWsFgP4wXcryQeoYiwWMcp2hMbCDS3Ki7ri4JZcAgV2MkrH2rmjT1LyAFuFpYDPCE8ujmEgvw",
  "key31": "2e1JtBpzJKq2Cz65ssRyCTVfDqPdmV8gk6FDgVNqsv1kWtVcNqyeZhQ9H394TVrdyC6fnPLaUxQzU3vYAAHBYXa4"
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
