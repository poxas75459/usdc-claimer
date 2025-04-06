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
    "3hL6u3NX62Nk7bt74x1qcwiSgL93QCR1n4wdRrddQZGpkzLeDk1furGmCwEQWZdx6mEczYCYdKKsaMRsQYUnnUXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6CjEkZMnw8QFJHs2Sv8xBZeZqa6NNCufMyYQDFbUaCwincKE2ZoEVJSNk2ggz655TBHYp77tMNPdshyEqtjrKUE",
  "key1": "2rkm2GqqZthCQN7kFEDv2Wbuvtt2JmwY2ZoBCkAfY922pKJsvhhhDvXTowLTLjxGtvGYBn9CPuUnm8hgknntWcnh",
  "key2": "2MpLWtg4Cw6kQFmgQnqf4W2P2qPyEDUTzqTrC1RyMhXkv1H3JoTwLsBxKDtkZ7BP7qfLEJ1DJQeEPHiMuVC1Qb2",
  "key3": "2dB2EeM3E1NXw5m5vagHDFbVSQejKq786LueSUkog3EDAJPM95RcPijpQJ7rG63UrWM36U2ef99qKpv3fJoYsawf",
  "key4": "3ezmCCHaifVy3wVWaCRFgACyoz8n6tGHjBk6hh2de9sUTztoWvpWTTvaugfTXDT4cBVH4BnX8QS5EvGe13anUT5J",
  "key5": "56qD6o4HqWFtpHawqEnW4LM4yQLaiwENs2hpgBJs3QxwZ2oQgwWuhknTEVbx9KvZ4CJbzTp3oA1Gj2L1eygTWtD3",
  "key6": "2LU4FSxMJbtiTRMNqQwjHnUbhXZD4QZao1n3DVbXamRUmzX6vu4xuJuP9oH6sPPmkvuLrkk6deRx6ex6moRKJqwY",
  "key7": "PLegbicudJ4nzdK4CMxrBAdCDhRdC1bZKZ49r2UiPbov2WWM4SY2Y4g9Y8gMoK5SbzKjpLPwZzBHes5e4jLrL8X",
  "key8": "3v8K2WcTjU6Yc3jNSEjQAnBAj3FNxPSUapTjiV66fYiMGcTomEncYVguEmCZPHs6oM8QYW9wyMeLZ8moFf3tdzDK",
  "key9": "hDfHE4bnzCGpFzKVfpQh4oMhJwP6Ajx835S3Q4te9QbHyZXTQJ3tm9RWkh9wbHLBwygEoASsci6dDtATN29phXE",
  "key10": "5tvoQ6q874gtg9vNCGQXgoFK8gJiTt8jA1ZiohCzTdr7VeyEWfzvBvwKvcWtMk9LRLvgzN3Xp4dNVoGHPiPUYF5z",
  "key11": "2arH6kvtCb5bWbNpFot6DTQ6ahM5EcdoqLsZMWfsabtt5qa6D7wXje6kFvomNPowRthnksVbpbjtEY9qaRg7sFg9",
  "key12": "4NgBALQLQMyDiwhp2GDqpSBtzvrhbDeZ7T6ZEshGGp66d6AoabMCWDZUQnD6nZC5f278n6Hr6C2QT9tYQ1fsCsJi",
  "key13": "65pGaZigR46rDLEXaZcp1jxqsdm28NXU4v9Ubf5E9q7m78L1h3bwyuA6RFciz9ssLn3eEyH7Ms5FbAWtGaaMDrd8",
  "key14": "58GpRBzuYrhw7PB6Q1GfZrjj7q4jGQsmvTzGqNWi6ixFMQfJto67TzU6JRuXw5LGmFQAg8TkW6wkEMRXpnYJEPja",
  "key15": "51MeWuJ2BT3wLkCrRY2XBeUNP3U1Zd7jzzffWD3Eb3kbBuSD2bdQQVFXw9VorZux1P5iVqMwS6stpxyeeLKeC7A5",
  "key16": "3KhbQUv7uHdrJwRNYJiJy9vempEZ74af9uwzwRfpWS2BYXzPjuwW1c4iUw7VZ8mXJXxcGizLoT37Kv6cXf6Fpa3D",
  "key17": "623ZfZQWwGoDDzQmkFgfUXxYfohw9AqT7LcGcqE76V6NP91fFdBjgsQbfh8r27LgtyD3D5t7h7hXJezxiVM77sDA",
  "key18": "2Sd2zNGK8UjoXAbnTi4tANfUWMuQ6kUdr3HUcyQ4DrqLWJhM5cpo1Nb2BRWJvTm1aaw6pTNmZLrvaaX4xAKBuxuE",
  "key19": "5oHcyYPtDPCjNzaxmAGfk6wsMTvSAot7faba2bMuf92AStRuVncKCYprQFGRDLMrAbanzjwo7iU4UXdffJoJx9C9",
  "key20": "3oh9sG5hsWti5Zeowpm8dC5Zt28FetbYzc7xyQd2CWBiBXbZMBvoWa3Ywv2s88hWNuYTUhSHAdpTxTz4jHcSfSS3",
  "key21": "4PMyjbvX6SLZ1MFhimPSsmND16vGgRucuFy22BYb87ZT3SasAcSNDYipJGwng5wRg8wrkn9DNtpnPHXCRe5dbBwy",
  "key22": "YtSjmBSNn9GNe9tLEyi4o1WMGGby7pDHQy1svhaoTBRxd8WbwxENs6eegD9HPgWTFHCAfWSfcvRj5fsD8Yut5dz",
  "key23": "5gmuarXqvgvsosdK59J9aToC2JjUKEP4aZoxyLjF3Uba8PDyqDAvzVmxEifxJYf7z5KK9evf3oTV6nRjsqPYysSe",
  "key24": "3k5PwPDeQ2DvDwbKzEiDTRkyW6FB1Nk1THwUY1zTnuhQsT5UJSTQDNJhCVu4mpJ3HE3ppkyRhK9JMRNx9otmbBB4",
  "key25": "2wexFYp98ekNLhVbdt7whGiQBJoCQnb8SjCqrnYCdFtEKdYkq1rqfmoA6c6wbSRP3XtB984JVHWS3wDMjvNujobT",
  "key26": "3nLHA1FzJvzfBJU7AHTiJUsftWTdi11fUEzMJroZqWtcDBPL9JoVsEeesvwYh6Rt7gcQGxxLDghAi7AqG6NVhZSK",
  "key27": "KmdGa46Dsb1KSGhWPydQjCD6Khq6cptJpXHJghE2U5h5BEspgTAsAWyPCU9nCDKA8pLarT58ehFQzRasSFuefPZ",
  "key28": "5SmurdK3Lkeb1CdqQs2ut4A8RTep9LqJUXnUJcjSAbiZLZPvgr5GbQFv8D8Js3T3D2cH1w9xgSpMY1fRRtFUcFQx",
  "key29": "3DWgvjcSrTsBtyGaHHW2LF4exRxEGsQXaPb5bz4w7yKA2zofSwnhyt5dqMdVTeLiH692vA4XjnQfamwWqAbTLQU",
  "key30": "5fX6fHUMPd52VUhnunCUQtLwq2BwKxAjtAik7xGccc6bizie7FpzdBFzyExMe5XXNqXWCn21mGv3mp2HXmX65iBr",
  "key31": "2i8Qh2rKiW8tvGWAKYHeyjVzSPEWLzvKMipJ9kkMNfW3rH3o5sGp3GejxnYitMXXGZec8vnZbuJbp3jDYtsXtAQm",
  "key32": "3qXEv8QYvGmTfxyJpixdMYraXQghGVXW7zCMRF82edVbkdMMnMNuQiC2cMJh6YVWuiMpYFkuP4KBUuP7sNYDJ3CV",
  "key33": "33K484nypseBq9GBrRiJ5wCQSmmcV8qQL5ni4AsRdCSh9gA5C5LXt48x5cW2y2ug5RMYGRNXwtLn442YNcWUSJc2",
  "key34": "4rbEzatAhfgDP5wdQcUL1V8jD2uWo73Uw4mY9ysKc51w1MYrL1GdFaP6aRrRaETxTsUmgKubffMpeaW9aYuJnuwQ",
  "key35": "3az9JZhPzzqxuLeqHMzrZSdYjkR6QvvDgybNA9h8D6qPZt89Y6vT3y4tzsTZR1NuA3HDWrx9D4B751Wi2M6FMmb8",
  "key36": "4xEWnLfQhh8EEBFjbfmNYpZ6CT6hRZMpsHYV43YdQ6fzZrXxV95jhRR8gvL7ADcFNUtzaa1Ff783Gcgz4Z48EpuG",
  "key37": "4P9FyGy5bPxWpvRuyJuv7HDe1D3GULnkEHyK48FFpU3tCfPekUUcsRuHazDfxSnTdFxkC5xcqfu8Gp28SLFWFzNg",
  "key38": "5FuP9DJyRDSbge9Mr2Admtrpa1uxFc77DXoKPLgw77XtG2Fs7E3D8sY3R6HrWJFcUXanj7SWvbUUYJf4GvjGVL7i",
  "key39": "2cCEqDADSRbuGttzBmSzZ6K6KkEWXj5bdrTe6UoevY1CH667sh6nadYAZmqC1MSbakEZW6G2CSFGhpZYkrgTDSdn",
  "key40": "4W4PdRXGbT2ZZ4ZmZCq1jW1wHYNn9MGCy8X9RGh8GkZ7xxic7AoXyfB6xi7NqjuByHxUUrjHcLxfwUXbtbvaE1X",
  "key41": "5q4F2zdhX9soJD4LzVa9fytQu6Tcwe2MVx2rxBXdYcxWPBsWFT9Py4qvquJ7FwLt3ibxdzCp9bmrwMFDSydZS5Cx",
  "key42": "3gtowM3ebbVgFMwQZv3EFoFsjjYvnUBwbBRXQohhb4t2Rd8gGFnnggNauV3ecFZQxNKYFgkXwSc9H3prwAbd4ECT",
  "key43": "3Ub2feZ73arexiRsgyxXtgYUKxNqaT1QiYWBE3cxV3uMjHEVBpCak27mewvxb7dh7McGywqpFP44ShQafSEDH27U",
  "key44": "aJKtrmtt814Ssiw1zJdgiXWdqg7nPx6hLDnYtDuXqrizGynvbH51nXJPKpf9BS3xU9yx8BAevjXcZaJi63bsZc1",
  "key45": "67GD1mjSWEjRWSDSh68mCeuao8PkPTZDJBeePpcjYFjvQhn1B4u4n53Dnc5RBnwVCXXtMJhCeZsb6sJ6tvfipaVH",
  "key46": "4xdYYGnkhXd86D23m2BnU6NdKFmZVUqDL9gmCZJLmbiqLg75oXLqfZHUsJhdAB8LRZnHvuPwuFtG7jpBDcdFNkMd",
  "key47": "5qwe19VYhvkoxfZyzdSwjGvECwWa6RoXBZyuk2zXSjytCtAud4W9SqdaaZeapWyfYQznceo34R28493EqQ23hyGG"
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
