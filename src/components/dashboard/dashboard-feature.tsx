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
    "62dUqRwvnvU68oFaT6kCjZp1yVtCHXr2jjKoNALJ42bJ8jJhosTguoUUvaVnrrWaa5pkKNDWTtGkAJpywFotb5wr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s7Lp26G41pHLQUXQEgnyd3kCzQztRaEprN2fNsDCLd2Li84DK1Dh5byP6UMuGxwavoZX3jyGz5hA1azyc9MaiVB",
  "key1": "5nsnKaWeZBk9GjHDPd2bwbXvkTZ7eSHe85xvGuKxRNA7ae8uHKwTzzFVDLzQ9F92qayPePSbBfP9ffTxJ1yNHvuh",
  "key2": "62kHnSnyC9PdYen4oxCjtUDRQz1sFk1DGmdJYZqJppkTbV5wR1AzCsPBfZ1ZCyBP1sftNBmkCwFysF34XYmUr2pM",
  "key3": "4LRk3iKrfUe212AGt54hrDxo5vBaHwd9hyi5LijSw3v9KBdPCpqkhxgV4ZphSpeQNPKzWcRkPRpcbDW7tMRs4jGB",
  "key4": "d37t3ek21zJSBzwXJCnuxsV8V9JAZEdJEtq3FcYLXHGgYNKDzHVCofWd1FmvPYm6Qjz72zEDJXVvZB6wFQ9AYCG",
  "key5": "3eSReqNnFdXnVhsPhJHTJ3C5GERX6iuvjRnk5J8GDZma4yt4zRBvAcxCrWvogWjsNdtqpYBcMqgggNEsgAntKpLi",
  "key6": "5jRzfWWDDaZqV7744dcsg2KWR84dgNb4NNUnF7jfDd47nvi3sm5h4MvumCesvtsc2dxvGPyuUzrxrzBiiRAR1jbk",
  "key7": "66picedJmqgvTSKuvjhdPvTHVFZwRzBAxydeqEQhaiRmNLpv5f2SgiRKxUZAaxGafZMQFbCo8Be7bw6xUP1BeeL5",
  "key8": "3reLnoufMHKbY8o2NHG26rQHu5ZCidFQHDMKqT4XiWCpyJunbp46W6QDaiF3MbXeKCQoaiHH8HgzRbFpmFxgNF2G",
  "key9": "2xn5XGzDtGYZWg3C8Vj3pkMoenvpffd78XkKGvEVCBn6pPn5Fhovt1SrWze5CxELN93zGizjRgpTEDLhTFZs35cX",
  "key10": "pc9AteCo21xowHTipr1yB6G2AzpbDBPGnwKLH79z9BEDRL9gL3ZTyAYyMBgaJXQX6YwGQWpUFT6y3MjNZH2dwSK",
  "key11": "5hRBtdqgDpyY3adZjt6TGj6gEKHitMYALgrmzJVV8858VN2PiBJKhqjUMxQYKxpD5LCL5JBfs4PURq1zfoA4JEi8",
  "key12": "2M2xqKiHDU42xHjJgF56rn5467hgH1h9eS6TwrHXJtYJDrXxEJQvmC4T4dsHRQHNciSL884Kwvn49H7PjzFdr2D1",
  "key13": "uD7C2z3Teu1sb5ojBEyCh8T4noRHYejwEFumXM2ibLbLAFz9mQ4HDxhU3WYorin3ncVv4zzN5qP63bGuL8LU4rz",
  "key14": "5WscWt9BzYbHtpYaw9jrusBAQg7eEDmw78dEMMoZpvYBsMV5kbf5W8vx9JXaxDPn2yC9zqgiAx39bfojs9Tvf9ja",
  "key15": "4xiVYJFAfdEXbgGf4EVhaMGngu4uYoUM1CYxkDMGRygdQVB4TQu8YwE5SNxxzBotEMWVniH89tdBQdpLmATr4akg",
  "key16": "3te7nkugmtKxDKx2LHJ4cFBdn2eRSFAML3qtFq5LtLRkzMxvukN28fvejeWS9jQ28VxoN2w7SY7oRR3wt33Ekryg",
  "key17": "5zHB9Bj4SLe7nHXVpZ33iJ9cHf5Axm9Cav12dKoEwwUWp8K4oF5M9EN3bK84WPgApdTKFwfGeU4nfzVFYCkHwWDK",
  "key18": "3acXAM8tCzFpF3hDo1JCAjEFArc1qvvgxp3JMJhfcz18JUaukpibnGfoLNv235yPfxwh9smht5DJ2cx7X1mf9N9e",
  "key19": "56RovdRb8mojHTxqhaBhjJ6q52Qni1tLK9mkKzqD9oHECZP76DXZfkDFYhga6V7UzkneuzJtJGbYnGdzPRtrCZQk",
  "key20": "5GzeQjGMZX1uPXTvS2SABHjtVGw1v8TPx2UiejTKBEEvQhNfCLRTrPPAdQ3ZUz1Ye8ssoovMz7xkwUfcBC3VK3Br",
  "key21": "3Aqc7MoNwXcR77xGVY8WhtBjvHyrMU1mLgQpQCYVuDq1st3F3xURMQ9zCgYU6JReHo1ARSQ6LX76ok2ZTdzZBZnU",
  "key22": "3xHvF1ULGbwRtnMfBX9Bje1NYALWmy3UvQUXFJJhp3ouvNanGcrWMXyo8veD7CJWc1GEstwqKp5spX8cXBoocop8",
  "key23": "2keBTAjopSL9wL7jwvLb323mgEiX39xwMWRff8fG7sbBTESFSShTUVjZ49W5D2q6Y7MVuMK1UzGibWfa2H9BtRpy",
  "key24": "5374t9qtL6bnxeKCVQqV74V2rkBRRsLvWyCcP3Gd7pzY7cRcR9SC9u3ewXjrnCATvH1jtAVUCLT4PgF2jjiqidMm",
  "key25": "pctupLT7fADjUTZgLaaRhxEYt5bb1oJmawDKG8Ti1x7sAR5ejLQTSATgFzAQbyELKBq5gJYc4aqhDCUeiX7uMBe",
  "key26": "3LCsfhtxrkAnVZtKXBwGtzdpBkkU7C1hh7z1Ltgw3d9jmeUxGndW1Z5e1Qah1Znd3B4U9u8QaEYQZLbBRkRkwq39",
  "key27": "2h3EJcC4KNGPt8Kxpn5FfsArnQZTLrN2DexXaN6t7qfNs5M2nRM3Po3wQYsckY7Hxwb2j4vcBiHpaRxudvPrELJj",
  "key28": "2NYtDLBHjugwr8mBopBU29exiiAzjXnEiqTby7xGndHNYqDf4HfJhC1fZjwk7v29CTShBUpmz97o1pWMVoXyszcj",
  "key29": "PpDEbmcyqJKsqozaTnukpEuC74Qt2Y1UHQiwm77EHqBMggnotoksru3DtXPx2n6UuBcX8pFYCRt2Vw6xPnAXNAD",
  "key30": "3j1ZX11dknFdYf8HMPxcJaBDDWqCXM9LgiZsrU81KUCBAyDRNdCByeuyHMg4Ve5zf3rtb6JSZ3mrPuje3LY25aZA",
  "key31": "5gcoKyGJDbRYcXS1BzvkedVhNz6XznSTS574vNod3XNhbNnk8LWSzNsbTkVuWk2i1rX9Jp2eJX4A9zaFo8fNinZk",
  "key32": "3gAaMCqjTQPSuBpyvUZ6gnUNdyvXhiopFPEEqLvs9vvyyuRah8XoBuamW3wGaJjkwMdRHu9bJ8aS6vxTkmS5FcTh",
  "key33": "34cRbY8fZU43De9HAjGWy38pBqnDgNtnp3HKXa7tDoWUm2zavfJPt3dGdz49uDrvNd1kqU5EGi3GG9CvttTsjszK",
  "key34": "662Qk9NUAicsu97Cbi99UMuBKYKcrFSYa1tcNBEGhHrWFGRqQ3Z2NbG7RNBM9ADxDfQbiadS7bNK9ifhPgFu3yYz",
  "key35": "2BwAQpTcDKqhNNQSpb8cXenBDjYtVXr2J5RRry9rDdngEuqJbNS6z25g1k9xfMgZPhAxtHWdbRfXtQ983Nc37j9t",
  "key36": "24CTxfJeg8iDw8bixQkVSymbJZDpdmifWxRKUqxSeFS95MyBu5Hm3yftiLywbxrLzUCP5qfGNanbFeAnkv3eQFVb",
  "key37": "4mWD2h3NhYQaFRFUmhaHXLMpy7UUqYPbze9KZrnUWNStbFQWT1YMc1AGf7VSMt6pYr1HwsTrLvWrTb5AFoQuSmxJ",
  "key38": "39WQFJbrFsnun9JEgYzmb5m1Xm6XtZEWoYG7rfBv92ciFc6ow4P3hh9LCMBTXjUSyTMA3zh5Uz4wrtRZmvXwNruW",
  "key39": "gQbJUtzctPDcRxrmtRh3EnbLd3BTgw5Fd64HEyHjoVhwD3FAyJA38ifAQSdheSbYeVHdVequqpY8ChmCqGAuwmT",
  "key40": "3A5Ya9Y9YbJXAttZcoGxFuRPRJ18XNhCBs5iASZULpSk9bThQ1NBiWjCd9zvDEBM6AyRzbbmVmzN66GW5ZKK37Ji"
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
