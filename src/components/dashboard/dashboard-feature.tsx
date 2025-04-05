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
    "3koCpsP2i5tYte4VCCndGuW2ey2vfxzF8gjSrbAKJFbwsbVM2pofhqxXsUDRCoU5SHfoSLMsYm6vu7SAnMDC6Hs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ryoxPBzqBQq2X911S8Cm9BiQVSKpG36c5wKCp3hVGWpC5e2dGkYeex68b5dSZBmWDLGTthVc1fbrcTtZnUEwRp9",
  "key1": "hb8zKSuDhD8GXe7f4PVhFpKYqeQoUNq7YY9QqdX2eNY9CBYwugZmawTwuxuRPDr8AZWucPVz5EvrmNFifdt3v3x",
  "key2": "4BMwoQxKLfE3svPgnqfshmKiB1bmpAoJ5VXcFeBnuXPufbMZKPr9Z4MTNYt9nZfJroYzRvQB61jXa1qLe9h1Anqq",
  "key3": "2u7D3YAAN1p9e9Vmqj8q4dqp7JKpmWpL7enHFk2q1rC7zkfUndtJNwatHhYYtcT9DGozJPD1B6wVqYnhoHLttfA8",
  "key4": "2Wvnu3QkK6xb8gyovpqPvVeNfqyfHNugNCZuNNdJcRb5tQJ7quFbGw2YcLcrsv4CSDihhthigSoewiu8Mpaosguy",
  "key5": "5TVNPAMpeYPtJQjMPbbfyGV3t5okxttmX6SyWUNWEufmEpjRh3wnvLt1e7FZNkHqJe8nQDYe7zeqN9U1pkjmr6mP",
  "key6": "2sqSPsSzYfAFVPuD4JHCMDm9Kf3CfxTXF711Nt9mRTjaxC2mihrZgiq8HPKC6Qh5BBao8BNCJY2GTG73U8CBXgQR",
  "key7": "3ixC2PUqdqKRxJ2QaLcfExxN7c9scSD4nHgGNTz9RkW1oxt6Btde6JKABXBAjhNhYpfDfyHpcYeBdTQzRULCeHuF",
  "key8": "28c7XqQrY7VgpwE3YaV75v65DaRT2Aj5Vy44FHNcgDMrUuusMtRwvXt5P8qPUkNgwzR3Dj8cCQYoB39X5S1ffvta",
  "key9": "wWDkvY1V4Mxm4ARRRf91vV9FfXbPW5kUeuSej4No9vMygjzuUUfidSNf9ED6fiwBGGwmttceMQBVZBe7Cr4kDnn",
  "key10": "4FUzBKRpGJ5hhJHQaSa18finJbSFUVgcheMBNzCcGWY4wx37cR2Z6dF5s9SDc8QKoV2cfqh1yatufWyCHb8yPESL",
  "key11": "3C6qq9dkPJcx4PWBZD4enXa4c6SgkhjdqWfJ3dt1Hn3VAjMJt8Anf7bNQhKDABzfhqaER5oXciDBgHyb8e8cNhXc",
  "key12": "JGyt91DXDQ7SgoZR2vVcG8mbZCmvkVyrUUf787mXB2YRMkAPLjUwjViMXnmDG9hccYjR3unVTThwHi5TLUyX5Q5",
  "key13": "2mdY7gMmbg2sJZ1o1xuAdZVKtgFv2pYjacJ9KseDWGSiL6EVaUJRh5EhWnKYEgP77JZonj9VfmZfPh3iesCTQWK7",
  "key14": "oHDdcUXoxSSE3qFLim447B7TPP4DzLiJLyBBy9fae4DeWjSBt5T3SsFuMHf5KkyH7JW2yVtJiMqkRdYMRiKiazL",
  "key15": "Co6pPMpzDNNBStAooqrPF8ouStCKKgju5ohnXiHLCb5jJJNBHWNYs25HWa1ggQ11AHZhNsoXa6rBywDnbM2vPom",
  "key16": "3u7SvHTjsc5i8GqLnp7Ayfat8gjdVaH2r4bJPVgyyeausSv5uPfk7popaeZg35t9xrJv15JS5C9q3rNvCiCy8Sh7",
  "key17": "2bPWQ6LWEq5wb1xPMSchBhKo7bjfjc6mdbVYH5aW2RwrFsXdgs2aTuogzgsSmCyseAQUgGmtALQWwtG6rr9xyKBz",
  "key18": "2uewa2pVKCwmeBjEHXFu54eUkRa6rVNXJi8tkGn7pog4KwT6PkcHgLjMJkrRegkpmePZivpCGYG7EgTqGtMj9hcX",
  "key19": "64WhoBQcJvWCiKwXfW4hRzdUKs6YHfcDsx4TfXtKBduHqUMDDdPdM5vQtnYD37mrWehnGhuDdLF7mFBgEZYUBYqD",
  "key20": "2mZpr5gJVbhJbp2BzwZRjydHd9i1A2pApdRMDsZibpt4cWgqDhTdjUp8BG7H9AR7FtkFPXDqpa746auztFZDQZAu",
  "key21": "3aY3DfLZab1zbagcZoQghm37sNhrx7VEDecTg2rv89ph4XV2AtG9iZJKP6wXg16nqYd9E1hWxSW5393gGuZznqTA",
  "key22": "72wGqW612MyqmD4iDSbWrt8r9B9cMAYWRJKiNnjVPzL4dBXm72nmuEp8KZKpJjQcyft84jzVSaMBPNTMqSULf9m",
  "key23": "3ugVQJJvQPkk6W5S4pQn4mQYxGpqWVVEES2VyqvJtxiAWZpDTr1EgZotCxeAFYRhu1bRFkJW43Uqxocnad3chx9L",
  "key24": "2JTMDLM4yKAF9Q9gP4kP2wWx1gAzyBwNa6AmeYWgxY55Z5hc4mTMvsD9QEk7dzzBKMvdxYwZvbWJ5xw3nU88BKKm",
  "key25": "3VMDQYEfRLrTcRN8cK8kAhaTtEhqwv4ofkZGVSacmqj78tq6sd1hQ6rFUAiRijoBBXWotivFQ8WtLBCC8zj1EJCx",
  "key26": "4bHX2hGm9RRMjs1UxefzStYegA9iPoNkFmBbASxu3meUaNs26nbjmsFR7YtGXLq66D3f9vrvx81orLrooYrXCDVV",
  "key27": "3nAnA6zMf73J6DzuiHqfbgkmGb1M5UtcS1YdSrwPZ3zAVhJYoNnFPQGBrL3V2vVJE9cfXHPXwTnBWdbcnKT7LPn6",
  "key28": "BusnPe6yWyw5gFUn44s8UJ1PnheQuYX5DteSGe4mag7rfW8BJwATY5VojPifrM7yALRN6Z7S1pmDeuouPTKV8mA",
  "key29": "4t3TyUyBBtsrzwmVkDCqvTKcFxgBHK3RVjc4QP5totDVQcM6ooKvRgCtjvRTa6CroBti5sEdy93HoXgsnqsvp7B7"
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
