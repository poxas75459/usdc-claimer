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
    "45DuNPJEj7W8T1AxvokuysMFkpCo91P5FF6YGh5bn1jUe9suQcxAgPpUBN8GJm8EyUhNRSnqji8WpK9LGzTtfqc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ecRFfbg1VVzYGjUPehe48JAcY7ihsaBKfKo8Y3drwtMxhTwCYfUCU4t4NtezvJBTv9TCy5d4mAkjK6oPSp6qBpP",
  "key1": "5ghrNrS2X9CS4n5XcH1RyKVCFtoUcPrSQVaJW3GTxbsPN3sCyeuPgZeTp7QqcbHq9RyPWRkpHgt4jK7L2oycY5vz",
  "key2": "5Mc1c8yMHjtV4y99hHnJFduWnP69TZafXSvs4MNhyRWiDNECK3M6my6HF3AWZgfNE2yNs8JsmmkCzBjoxiDcwxRX",
  "key3": "x4qUuhNpNwv7F5uNrQSsjFyp9JHayqHyrrbd94Jg24uThdt4BcntnyC21mgYjCyJupTgcg6M5QQxfNbHABfyEEG",
  "key4": "3Jt5RiV3et9tX4EdhfWHzoxvapLSMcCkertAin1vPVXZk7mAe8FmG6N1LQ7RwkQCBtSPvyQM8irSsuS9UTUtSugQ",
  "key5": "5iQW2Zq5cGbhDRPcNeouPwq9ySwWKxSjfyM92F1QwBYCswdfeYiEKEqrzTp9pMmCeqM3N7WaXanS9xXHCkn7qTE4",
  "key6": "2iX9AYhF2nLu7Vwkg7SFC4EAKbBUY22HBGEw74ScPyfbVrdvE9LUjp5Ya7dshaiprdLzPhQgsmrSj8hPcKgUHFTv",
  "key7": "4ULxoQtDNDG6jvFmc417VCM9eT7EBCK6QcNbHh1TWq8y1pnr5892H5GBMqFrRM2Lefe73PXUKU5SM88oDerqyZsY",
  "key8": "3Y67QXdnhftVkJSng6mughAKf8RYX2fo8qEqscYtEy9eqBKt43vpEsxn6kg9YUQFh9ucGMZ8QnwpXLMWsZrPqcNh",
  "key9": "5jS5mFD1HBEbiGxBMpkiJabz2ALN7Aq7SLWQ5hybEVHoBQit8PXDU4dnXQWf9tx16q9551MDbXhvJedFt55vxS6C",
  "key10": "4CLcUiSqkbnc8vWUscY5SXTDWrXxxXzo2GRvo7HTg1SuUUvDuYJQQXZcmPm8u4miV8yWJVQdoK7wzZdacugZgZ1P",
  "key11": "6789xgntUjQjW97timAQVDE71yo2Jn1Qi5oQ6KpGAtazkA5meeKSoFyxLWTrq9LWV12TmFaQwVBv8Ek2o7FHy8fv",
  "key12": "5zdYZ2RLECn9AodbZnEH3t2oHUZEyBGZSmXStc1wKLa6fkoR7ATvzYBvcyRWEmU62LvRv51fXCzcfaDoc8PKUsF7",
  "key13": "5g5GuA4qkXfVeC6cHxtcvLMerBp1PEinYgiKPS9tEf4atkHdoKjkZhBhZbuw6dQGdYaUFwuxdnhgxdnM1CdogXHw",
  "key14": "2UYXfuEB7L2GBXHdocD2ToHZ1ZRERrVe757PVR47jmbGz74d41d61dW5HF71eeiWFBVCcc3RPSL24RSoDigBY36H",
  "key15": "5xr4YUkSS52n8YNynuhZqrKiHSi2Dk3GkyfHQ9rYgeYStQkmsFr9NGjKqFitQkJbNDJmhSCzz4h2h1CdVyPtZEKS",
  "key16": "5Ht6Fk1S2gXutz75AP7khR6DdxyDKSzma7fm22zBKcrZaL9wFJxfrnvBmJMGngj32xsy7msKQSLZQV5vvQU7zXYS",
  "key17": "5e7SLzfXbg7Htj3t4YVMdn4LNjqGsYF1XfE6YdNkb63PYz3aSv76jeV8GEc3G657jgFGsvHgQEbqmtQXVmm16P2v",
  "key18": "5uzbxM9UVPmY31gXuRmkuNK47yKYJFf9nQMsog5GPDDKaMQQK8dPprSFeh89b9RemuoXgvmiwAhgdGbFaDPSpPdk",
  "key19": "3EAoiFMt2oPSNxZ141rt3vKYaovLVv2yVHQqJL5T2BkPi2UBGmBgUDHwtuJsdaimTfUs2ydaBJKvfcNsnPz5DyUr",
  "key20": "5yWkihBCehanEw6Fa7GoHYrRijZh8ZTEkE3ykoJWTyLDvAmsayeYkG6qaKPSpRB9c2qHdDY5poAXNDkWkJbCmiZn",
  "key21": "2cJMZyN5CKoCFRx4Eszx41jQGu51iNiqZCTrXTDsYYNGQLBDSE8w2m5fb9QdGiatESQjNYmMfXUKa6S8TdRroeGB",
  "key22": "XZN1UxsdA7c2w6no4jDCbiApYG421nr3znRLp1i8ynWmkkY9c9c7tg42gQAJ8Ks5SBsd81gzMbxZ26zZrtgUPFW",
  "key23": "AUcx3EnAAWEazqicVPBT4hY7ii7eahtmWLDwgxcf8rZHbVFUN57SKcNqgNmWFunVxcWG2uuPiBjB4nka5jFNDTs",
  "key24": "5EZPSjzZ2DfGR9rV7jWpd5XeckKw6d3vjv99x7CbAD3yR13o53BYEywqMoNwWp5wmSRLDhKT7DmziU23SPjs5GdB",
  "key25": "2fqxKMqGmuJdUcpuyzmQLo7KnS8MasjS6XSCYYWxe5BkQXyRqfge2L1PL5eBLynjM5YHb8SBw9YSJnmVyqbjLhVx",
  "key26": "4fTipxPkTkrE58LyUVhPm9kYf6Z9sYU79Avbq7FjZ2JD5Qx2ixFn5CJ8nScaxALGtJW7LBpwz7ifuRtMtvznAb6e",
  "key27": "5ZdYYtbz2GnM6bcdJ8G1yL9qvgn9pMszyoQfMYjzSULRaTpcXAA9fW6FV3LAM7SFSRfkbRcgGrn4GHZDdRTw2hcn",
  "key28": "4QKLoBmvYQPFLmxo6vs1fseBFKCAEnRQN2JAZnEqZsVvVxud539wy79ipNZR289LsX2BYjtjqGJ91XPxpokTc6uJ",
  "key29": "3p1zb3eFCV68zYn1N85s2ADmYj7Z1MCFrHmQnr7MEfPEw7wmpUwzzEUbWQLSLKwUSC1cWGk8iv4tw975emWnBebv",
  "key30": "5Zok8AuCMCFSUiYPasxp32mtUxGuBjDCegpenB2NZtMvqx7mWgtWSFuiDdmSjGR2i9Mmfx9fZe2iqxH6jarypsyA"
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
