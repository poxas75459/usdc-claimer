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
    "2DkB8Aw5nVEmFtzDBjHWEmJEDXX1sZP555Gf29yCuEMd57LznQiAJAR85HqRi3ibPpbb3pwHhwTTXbkYD6HjjygQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJhQVBoLCjnyFegutReS964T5q7DZAssg29zjy3YvrRNDvhUqMf4UNPcvKMZg7LFMRQ5wUFQ18kRp5YSPcQrMGo",
  "key1": "2Y4ceixcpBoJybomFZrY6rZF92VKvtGpgHgePxEGXxbhckYbAY3PgVoyPCDjueTTQNCGxrcySzk2Q5SUivWUgYuH",
  "key2": "Q9PYMjnooeQu4beiHyXeTCsYECwBryyHqjTuAL6V74xvgwtxkqzJCvyqwGi4ZM9SxHia7jAxEi4cFtkZPdwPUgX",
  "key3": "3uVsrfRvdGF3fC4MnvEDNCFzwa4gReu16dvUhRXT2zJu82bZgGAc7qLU48DeKTcukvp3f6S9QtCZNWbq1DZXPRCC",
  "key4": "RtXxDN2913Xt4yu4QqzYycCnJm6QF7157EY5uMbpq8fCFRPs1ThwSxjwfZWHwWrQtyBCYwBo2e7VeA44mzfE2ft",
  "key5": "3dURZPmEF7de4wXDbvFyHfKCt47kSRcMPz9CZeuhifMSaDcCRVFXyNFqYZA2E94SCff2VULQd9CYZcYysNK2mSv4",
  "key6": "5HgzXLsMNGGwo7ANNCvwCLcrHADx8f5PA6Z38a5bYmkKrZMDA2DV3vKjcoxMqnozH6wMcCdmykNefim9STBWpA6h",
  "key7": "YP88HdaL7ubzLgmf2ZFmxZx9GBXeAZ3jsKK7FT5NANtoJnmNJKFqbP732LtWibhGoyRRiB3sFDoQZ5ozXLRxeZQ",
  "key8": "3RSEbBVNVPu4hypSEe5mWZaZGriSzTLb56EwFAt9j1LWsBKqsCWD7cn8AHDA52KtZ66a6r5DmGSfRVY5Ybc5YcvD",
  "key9": "5L9jaa6GVzow7PrYnNwqDxtRnVDa1ZFWVinvQNdW7Qb9iJbrmb8bTqcquH1PwuqLw64CmvFzdQCqK3368Yjhap6Z",
  "key10": "4dMz6Sj8Mf2H42GXVnkPxCAsjULKLScVm5HqYzdBf56oS4PoW2XWx65wJP61RjgZFBJzc1uyZK6dHtsnQbfyt8g7",
  "key11": "2AHFDvYZn7eNDYWfu51ZUZdXMdnWfeS7QkaDvz9Aps6h15Ne83zYmnd5eD12Fi4vSSwzmVD6QSMJ3LbBgSjd8U4H",
  "key12": "3C5yGoxiUcXhRDhusqWuD5sfgKFMpdm1iqnjc9rQT1LoWSVDiwJV3rR7szPY9krPhvfkM36wHQfhGdWRD6SHrTRr",
  "key13": "3ZckwpNCx1WjZr3H1HyJU4WBoB9XPwTCpCX3gRrpo6tmWUEu6G1STXR7prwC1g74uBUfMmA2k6PFyXW7CZA8JYtA",
  "key14": "2HSKXz4MiJguDePBspiKcLEoGPiNQ5C9KaaRi8DGzTAFUnbtdmpfe4Qqh1AULo55qtVRdS3SgYhgNge6wxjfaEnx",
  "key15": "c3QZG7md6shGR1FtgUzpNQdE4Jz3TqERG77sXPKgodQWPAc5KCxRomVf6iSh7vGtqRfv54CqnpxC1xHBo8rqm9w",
  "key16": "66bo8tMwk8iHJcSnQp4rzh7KLx6rfyEErWy2fzvpndn1rrfYTNij1f7XErk4P3JLNw33wdJ8HT7pKhCYZNQdcbyi",
  "key17": "5CSnN4kmgCVdRYK1tkWqrRXyDgkXmGM6ZDPDQQcZU4cTcoCCEo3ptvCVDgKJSzvCBDyRZ4aCDZnhSjVqtnsF23UA",
  "key18": "5tFkPTvamSbt8uhQeiwb7QKq1gTmLF5Ct8MY6Fk32VsnizaMGTNZV4Qpat4DCVhg1vnbi23M2h3yCRzp9tjwGjds",
  "key19": "5BFD9z65ir6Ei5sPXvcGwvVkURSYQj39BuprhBEm4kkXqUn8yeh8Bj1dXvAPENQX2YqSAVLH19NrfzCChiWxWxXo",
  "key20": "7gNRgtgYCgq2cM7aDqpGRyp3rSgXiXx9z13hrX5vvkzS3QP4327EitUNmRDWKe3X8uDRUpxvZ7fVZFLRT5fqw7o",
  "key21": "3j4YrM6iWU8vAXSzMEgqLi3GRVmjMbtYRVxKbLmPCcqRoajVHd6iA4ENkLPHx7XiPWb3CsMLd4Eb8E61U3PiXpRV",
  "key22": "2UmUcV6MfDTGYsPWWamokfVgFd5C9JAZJ2YEgZnYyeYDFyAxUGUXe7WgmDAaPBFYvxWu48Q6NZvXXH1XeW8RXsuG",
  "key23": "4wh9q6tw4vUzrnRafZQ8g4NRqUvLQLDavyPqLHbu36ZotgFiZsk6Hf2Gad7MSLg6eC7YoazHJDnQtCTFYXyBTP8h",
  "key24": "2J11Fy22hQN8X6csTpm9N27XbLpCkzxvMQLiBdeJdXnHn6D7BWi6Evo3m6nSDehGaizWibtKkZJo2e8TGzc2W5Ba",
  "key25": "3ZvHZfNCd9bm5tF4xY8atRB2LnF2dQCfzp1oW9MRdMj9ZvJRiA3ZeGj8WmKzwJxMDcEk9C3XjUvEYKFZ7dEkQYpj",
  "key26": "3VPfoaWG7QGDD1tf7VrjjZiN3iFqmYydyypAUdXNbNHs7wB5TASy7GPCLcPsMhkHWq4Me7xuDsCoCYhNgFFdp2xv"
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
