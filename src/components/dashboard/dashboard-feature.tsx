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
    "5sixu3688GpBFvN3nQzepbgKpUEyit3mNgWQbRuJesB6GTvThmJzfWUorxsEpcLvr7UZekkPMxZjPVhNz7DqLtrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAWitCJrMQ3BcsCEUhC9hdEW2oivpzToNkLMHxpUP8J934ccbwTShFMmZ6ap4NF5dJ5zLeYRsnDo9fc6RwSCq1v",
  "key1": "27qKpR3mCNcAecb457wsF7NaYHgpH5SSjn1acL6k8tGE933zt6bVvKxFs9is7J8gA8SWZxZDRsmo3Ur7EriJWMZd",
  "key2": "ERfJCBbUBNfUZjgpsdH9RdsjN2qnA5mvtwty6jiRo7Ze5tqY1DKeifrU5yT2n4Pnd5EHdEnyenzGppWat2aBx1J",
  "key3": "2FoTk2KMQpyhzFf9cY5bCETCrMftPu3JVGErU59NfpQzi45D2z71z7hPFrxNXbCYNAVdAs4DvtmLXCxdDUS5gbCx",
  "key4": "3PwTbxVfWTWHTokqW5odxRPeZUnNB12CvA3wr3ZoyotV734vFCV6tbbryN1S4N2irXEwT4pAaqcgqihuSx6y6RGJ",
  "key5": "4Lm7gW2c9PYSQA1FoVk575ZwRZjGUSHd27CWuTmfGJ2GMu8i1FzZk3mjC2TUqvgoM1ANjti7Cjo5ewmVfGseLwsa",
  "key6": "62rQGTkRWb6t92uDdRhQEJQAwVKHJiATSedFxxfUmbBkN8ZWZeey89UZHTgtnndrLyfpvtftjhf7zBSfLiGzkTB3",
  "key7": "4ekZ6RXc7aPHR8UU3tZCqtaBam2Ljr3osiNoyHMyrnKfYtmKmY8i6RdaTSxjAvJxoTosB4zpjUh8uqNKYBvisXna",
  "key8": "2bLNNYi6wnzDqRgGPENQ4rZWP99L9DGfG1pKy3WD6d9D77qeWuk7yvVknpchyzGJFvfhcHPWD7LY4tkRZHCH5nVk",
  "key9": "54LHtYxMHZxuggkxNC7ygngXoc8aRrHRB8GRssEu3gQVYX1EPHwTDSwPXx9qapZ7E3d1vXPxkDJWKBimZ3GzwbaK",
  "key10": "29wFLQVJUh81yF3K7DHMsKAzz5SrYKJsomd5KQk4gJxdvkHk6Dm3BXfRf2kA4DKPNv8VK9Y21ieGmpKanZGqPjwn",
  "key11": "3phtHgJeJDZrNAgqioxQQXacvwJx7Ns41BKhgaXPMHKXQz7yZctf4uQmHNgEmbJ5zQakL2aFByTFLSMgHcHSPUyn",
  "key12": "2rFHy2cRU454YPHUD8Vj82ZWBo7jHxpdZm5p1wXYEQrBcBqVatqJTDpA3YnvVZtwiEfZ9PTUMbJogbb32f68hona",
  "key13": "5sHg3XAgAoQJVi3nEuXiDjbAvM5oFC2wpFmMUaHQrAhqfBqzxQnqBbnYLAbTGNgc92yXmHjkEtc9XabmNZU6ctpk",
  "key14": "2GY61cC81sEJFdMr4KiiN6N9fBAhVJYxjpnDdjR6BGKN8eQh59Kdi82UTvMn9971RuiPEEUTs6s3a7ZNxo9j7E1g",
  "key15": "2akspHG2gPtwx9fT8YvYZ6NmFWL4JkQLyoSgsf9qvTqdeZ1JHACETqDaTYKpaFzseSfuwgoyppJjiDhsMcQv7o3e",
  "key16": "2xt8U5Rb4S6W9twtAVjxS8CQ9nfLxGiAiyXE2zaXd11nN9cGYBGUsP5awMQ64GhRkoYdALsEvU8tz2kMzjQ3cbmG",
  "key17": "QCb9FSWh5Rw4Ly645hUJd743Jc3dDvTD1FayBvXgkaAsXk9NcvU5yvg5HfENSrgsvVwW4vAiwpNV2A8y8hHtAAR",
  "key18": "3eakihyYPJAik3uJypemfqxRxkxdUFVYeos7QLcCzThxGGPWdutbBeQzNjszVTVFNKpYepGGVcQn4i8NtrLbfzny",
  "key19": "4sq12UHVtSx9aNnXiuV66tQtJxg6WMJn1UHxRd54XTthSgb52wEdrcpPYkxtCqBHybM1THUgfVzg1xJuoEmD83yZ",
  "key20": "5iqX7Aatm8CQHtmnn1jf4sEWtgXfhUsRcEHM1G1jdgr4VU8QeqZjSQDt66vvQZSjUeAAYKLyR8U9ciVXr5SqBMie",
  "key21": "4obz2xiM7Y4h87yYcKJDzvQkQsijKk591qfW3kKj3QPhgUXPiwy7h5P8LAmWHBYHenMhjHPcd5XXe4DbkUZHKpSJ",
  "key22": "3qrLdXmwJrzMtePXwTQYLyP4vpqRw4KiCcLMbtHvSDD3L9F3SLvd5LejSJzZH7QX7QGqJBY4xp6o5U9XiMXHbsDh",
  "key23": "4e2CJBHQHjvUoW7SbbH9G5VohG4jENZymhUEStCVYwpcTegwqRiLvQvhYzoeniJpNQ1NX8WcGZ9BPY7pJZheHV1Y",
  "key24": "669pCoShEY73H1BKhdQ5b1MMkW19rbLjkqHkc1Tc8kXiqGE1s3WexRJuNgvEf6AAjrMLHqBCM7rHt2X4t6XSKaxS",
  "key25": "77m1vSZuHUNHQCDoWWHoBLGWFdcPPVRmhmTZB5c1t7qD8o9JFs3Zz37Mx9m2XbEH9FETVxD3eMrAwAxcMKxvWor",
  "key26": "5p6VaSvSzLzbG6KEFRLwX94q2dkC6Gy43Md6g9mWLrLpMQxfqahADzivA9xPQgMw1SYC86du4HHYS1aWkGwNWtz6",
  "key27": "5Wy26qbYkBfvVRNZohxbsfpEWSEVwou5agFNxYH25KDCE5EZgPvGEAENjYKBbA6ZCLYkynBwgPjNWzYUvaZnP1ri"
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
