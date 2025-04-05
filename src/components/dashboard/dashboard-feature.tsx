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
    "5xZpdXqVLaG1YtRmXAqBYS1xExW7KhRq5uARZXDs3u2pewjEU28vx9LbN67RfqCyuaE1pnGZFZZxzyN4uqMRSA45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQtvHK5Gm4Lcbcb8B9oVJeb2VPnoFCxJPfnDUiY5FAsgDimtUqsXzw9uVfSr5UF3Fz3cZN544hVd3L1KuWuN5xJ",
  "key1": "nbrRPfhM13JE7E8JjWQSLhZe62v2nwjQryjXWiwg2G53YmJ3pbmwpy8ZCmrwpf5BZQ7w7LjfPqbCPqtNjYBa7RF",
  "key2": "4XXvzQnnvms1UEKGBJHC7jw13M8uGRJYERCFvU2JoZiDyQV2BapJmKwKAvkaxJMmX6v1aGhnmWcCjye5ZfTnKgDc",
  "key3": "5JqBSR8HfcNtzDW9MzcrEk98qnJLUCg2eKS9TeRrBAcrujdVUPM91nDRWbF97Q2J3kk2zkVGiyK929TnQP5LRYYr",
  "key4": "3r2Xi367AtUc4EbRAUgtvkKTXrExXjLQZrZuMvCB4B8hhqqKZ3ZSF8QnUSyRkfavivY6Q27kxasyydX5HWokS7dg",
  "key5": "5YKFXdxvApCt6JuyJtypdrFZbJJcPuiEKT3a5EASNM9j58CSbHRGfkz53teUfzwHn1N8wmRJrCnMdMw58449L3jf",
  "key6": "3B2LXgTUbgpLCax4czjdbAAHHF7LTZMnb92dPta68PHBBTAnSnrLu4hd1DEKmhcA1Wpz9z2S4GvtmBqkq1bHawsq",
  "key7": "59MxtgMKvJk9arrSnUJsekm5pTxG8MfCq2b2VXu9rksgadUziQQGMnMPgdyyH2eESWR3MgxmqAG7dPGwd6VsHtMT",
  "key8": "5YqbBybdX3KiYxsehXZGscwGLiq37WJBbPKwvRTwHysJrEePECJYvTwBCcwgZfBZwpzLvayvWQzpATyiiRpFujvR",
  "key9": "5UpqVtvVSpSyqffuveMxwQjnmFKTEuLkmAhUc2DQ5LQdJGowEJYCGVg1tooL3ZrGamxAV4JPbfb69TM7humxjqjE",
  "key10": "7VVm4rVer3YUh771xvFNot1NGUXQUQhEWeKKAD2PCGtimGyDo2u8y5nauNwriqikiVez55paShttkzJJSpEv2Hr",
  "key11": "ZqwBqeZ2YMi84zdKc5JMygfhUzQFd8B2rMW1JYGf6Cmm62PHztxPkvdkLKM9npvsbRKdULGvYRwgbMD5rn9HBea",
  "key12": "2Nxvi2S6eWYojsAxjKSHH7uMdsTZR3tv1wyC92vWELfPTsUgNvNa6EDnS7wynuCYm89DJff8DFPKvkGQMepjoLuh",
  "key13": "2k761eiJFRcAfxQuHG98iAxpqg8NZ2y3FTnbkUx3qM8RdiCSSeTaKPJLWUPyPnZtEaZ4xMKywUADBDmMKCn5qnV1",
  "key14": "49RmL77ER6BxtETsQhDpbcETmDkGeufFuF4VnYyUdwDFpGdGHyQVBobJRTVzQKuFZKRzeiVhiyZLqyYFX5g15otg",
  "key15": "2LePWRWNmvGxwVJ9tNni79HRehcmmWszt1ongFgapMoBsMFmJCbo8uB6B5PGE9afsyCTLFty5uU5DjyBAZ4ZcJTD",
  "key16": "593orYXcNefwxm5BQFbJqnwizxWcPkNpVwSRFUMRKJVWcufA8ig3VGDdyxWAygpCDcFuseUyLj72wkheFC4uSWy8",
  "key17": "4vyk2GSPgAaa5HUi2UZLTvqip6NsnwaB6wfmHZeXS2JiHxCAiSQqghCcQwQoz6WNfzDGwtxq4cC7e8QgR34Hd1qJ",
  "key18": "58xvBbW6Tmn9pahcfaLrJ89Xs37ixnMvHHwnxFmSBGauVVAPs6kHYJU4qACtYUG1yY2dqVYcwjCVcVzUd87CUjMk",
  "key19": "5TuW4DyDm2h2yskRTDXMqznc3EfHEdKv9uj9pSwt9rRRwEtpjmgLuweyhEuMTzu3xCwRsPpw3kUUeV7St4wRpc9Y",
  "key20": "3AdzxVztPrVdkjpcrmgatP7oEX4rhFcFHzafYW3rpFdsCEvxgc26xq3Vzght5s7BCxFNRpwuga6Tf2iKUAXdULH",
  "key21": "nGu8KWWpfeAZ8773UUQun8Sro8rzohhhUrky38Rxd9tYpy9t6khignrHXfdfMdEmNa8C9K8c6q5TxoZpZzpMgxs",
  "key22": "5BuTmjWBey4G81Lu1vvTQeiFjyJc29vMuoLYGh6nGsMXgg5RTy5sM16TPtgbA7TKk9SrU1cKCmq1NoGqq8pHG7q1",
  "key23": "L3qG6Ef5STzhxHo7jn8oc1itNWgVxkgVxJN1u7q4zSjvbqYHRHxm4uCLRDw4aYXwQ2AMgi6UxmvBe7NdUgbwvut",
  "key24": "3uiXSMEawAJuu961JASt6UCM1Zaj2uQYxaaG2ZQGXqo5iBeJ5JiKponbRz7FueGEhKmQ8k35yxFCJJmfPQ2qHvjg",
  "key25": "5R5qz1W4f756mjssL9TMoPBaoZ1RgHLjt17X27oY1G4yKp8kvVzfnN3Mf3QDvvQr3WecxGWvbosVmfvYcWsPNuRV",
  "key26": "4KWZX5Qest9NDxAfbEGzus8Xj1KU3YpvVHvAaAN8nPbWMULhfGLdh5Pf1vxfELmy1ZkCbC3aLTMNJoUE3WBmaTEm",
  "key27": "2hVZ6bfEQaXtq1gJZczXhfkYfb8Cu43JHwoYq19nd6SehpRcriQwWXrrSUPDHV1pYLwxgcczYEtZ4HnsnSwn88gJ",
  "key28": "5NXoTv4apL8m2AohF6YemMwQMvCCQiJKkDVV2J9LPMVBcEBoiuYRXKj6KGGUnE66QDRkDZQzrXtGGkLSBtPKegRK",
  "key29": "dZU6X33im2eBfACceNw8DfSJLa9k7vG1MXeLf8ZCbB3sRi92u4DfR9D8W8mjt2f4BkWoacDgR1RMzYsbm63EGmx",
  "key30": "2TjB7pxoYEpeVE5TJSYeu1BkQx3aVceBikLb1jBMPJCfZWPLvmzm5k6bQjd8AJ5rkApKDVjCu4pgHZ4veQtYGkbq",
  "key31": "3rzCyUtCCjLZDLBEnBkV1jbnJSfpa3R27QoDBhoThp9X6EPZsprNiKy7xfxT4SnufaZezAQMRnU83rtvxrB29QtN",
  "key32": "3jxo5jm36fVqw5EwWYE7JM7RCjhJSdphBjq7dFLq1mdk7qvoGdA6L19qTaJQHh4AJUCNwJ5m3zx3HL9S5ghWkA8e",
  "key33": "3xR6cYyeBJSpofRxqA4XsTTCvK9D3Q2epKmgtiRuarVXYRH5ZXwwxKuKsvQpiEp4S9cAUNZ5xBjurhMvChK1iLhC"
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
