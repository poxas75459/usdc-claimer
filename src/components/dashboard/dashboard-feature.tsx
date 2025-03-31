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
    "2YthEf6D38eDNwVf7rWUBPLp8NZC49ZZNAHbnZp5yRKm6msrD7mdZxGkoEHAaKSs8MdZEJbAGWgomZGvBFUHRbJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSHUwW77VPtBDbRY2P2VHMcJkwucHUH1KtiJkPGvSbxeYMWE5yXCrH8ovmGvx6wYR7YoZmZBnNNAvThY2nXguzi",
  "key1": "2A4APEH6Ri18Js3vS8M1Lp7ZoeikPoQEbD2jbVVhfYv1dRJQdeJtzcg7Te8ewyLeC4AtJsQPotUN9t922hd81ic4",
  "key2": "44sxKXGqk2PRJX9Cfk9MPKr2pUbN3vWVTiBRiLNkFESBXydwu5iw9mgPmQRyNgFX28Pn2xdoUYdLWEWSoyhJ2T73",
  "key3": "u4FpRwdBfJt3XXfoCq5hS8qBdc1wK2nouz1tB5wsXdDvTy1KZkkSvxKLQD5vgwE4LrtUsk49oHxaJnAX3JaZ1nT",
  "key4": "3qDVsn1qmANH97fBcPNG6hSSrF5pih6ABxErsCti5aqhcDYZN2bUSszxoyjgTwHEt9jTUB4ndy73ZWmNsrBAVpCf",
  "key5": "3HpW2QkTBFPjf7pypSwCyh3Gcy152tX2F3faJt3F997bnq1jia6aP6tYqoTXLFqmodDKZL7b5RCNu1FtVP2hxLBP",
  "key6": "kKt15NnsqhsGpF38vuc7KWGddazDwLTyNWb9yhqKcWZz32iJ2hnXHEH5gWeWPbEm4spCBWSRWAzTZR9HCkWWet6",
  "key7": "3Nja5QvyxrNBU3nV7WRcDdGjTWkoTQQtmr9pVAvr3AxUaF5QPMjKPxJGbAUyxCHTNXuoguUi5gDZ6JaZwvqtF7Lt",
  "key8": "3VAWTQcQAj6YTM7XCZgHS4h1mTAhS7Uc8uGhyuBdDGwPjDzoAe7wi3gmLVbcuJbC6F57CUX3puRGgxFDrkWkzx74",
  "key9": "2fvYHnCAmqysbtTo2FkBqeDJSweDKCuN9xRotMVJrzA9TPMWFKAmDbKYt2wcYrJTJUo8M2zbeZHng61UytZcWBA2",
  "key10": "484LgBvkBJexeh3RwZ2FmyLSPvn4sibuECGwamjbLCJacnbpmThuySWhBeBC2feRWQYKhTNJjMXwKj1tvJ81GJkC",
  "key11": "57zaiJrSbV1QcGGCZBLxXJej6wdnnLi85eWd9e2SHH6LhZJNsF7yME7VwdXvENeZ8m2snpdWP1mwUU4bZoS4hBaq",
  "key12": "61vTQ8GU3XCLwHNUAhsN8ts8XGCnboCs3jdbTE7dWVheRufXFAPSdtT7S1HR2ZbzRAvbMWa6CNfucUTGWf88hSCW",
  "key13": "D22HJkhPkQEUxbhrpsHyyhPjKeqXrEU591RCWBf5QmvUMgJ4mmg166Pu63sdjLcqFkRirKkMCDfh1nPpyTifyU9",
  "key14": "27bZ8aP8uPrV5V67dZWZJ1wzGCoN116LgDcFKe5ihwjpHaBm7xHb7zJWvzgW5ZxcGjw5WD8hvmJnJPpJoNNdVLVs",
  "key15": "2XbzxQFrmKWy26UjEsQfpFCyAvymNQZPK8hPApBDatVkT4q25wWqKSGKhBS5GozaF7axn78Wvb589nHmQWQac9rv",
  "key16": "3ah6b4bQfzzbfYC7dP3oEMxu1bezhkXXXcXaD7tQKV3ujTnjifYmTTapEXCRRPjdP7nKBf9yHfaxmh1g3pDmG6Y6",
  "key17": "4EjeVJaSPcodz1CkoDZaus4osDuobTDGBMUQ2gmBgnL4zu9dGsdoaiBtncNFcG5hW4WVQyYQuYpmy1HYaVzNjGhi",
  "key18": "5cg6MpiSvsG7npTX4g8YAwdvfFYJW3rdf7Vpi3gDVfjaXQbGJYxUM9xLCwrtz2eAwnAzfBbMzpapa4UWhhmrNv2f",
  "key19": "36q7MkhDSiRkZtLHKgYH4Xph2LKSL9qyxhxriNzUVB4Qzb3oemxr7cGoPGQf4VDNse6s8ZnZJEJiNTozrMrveucf",
  "key20": "5adMnUCYCLdcunDMd5jg512AhY6zRckpKEba3LLxmWRmhzw1NBCPm9JurgbsSPD6vU5E4nPgs8Ttcb2WLv1BfjgN",
  "key21": "4dPRSLMZY5DXHx7zEiptQtLFEpquzJJZH9PwuhSiFjj1XnnKxGzveaVqdW2MaJZLLu4QfQtu6BRHFcDkkY3QA9wy",
  "key22": "5iDoY76g6wSjVwSdcEUgABd5sfKEWK8Ui3WPb1dKEbooFTTAchTYJwWPkqQdRNQBAndwVeeQ6111jjc6peYf1Xci",
  "key23": "2qyHtSt8f4ycDnpBQBTXasomypoW2mJ9SWmW7oYkW7s3osrbnw6Sn81UhbFqkbcctpT1BaCxKUs92sNRhUc1fBGY",
  "key24": "35814ajrhLqaQqxvNg3HnYgC1eyTe7D61S1BfBxd8xZXvq9erC6VtoxaifRCBNLAF5FUhu5j8QSMFjryyAivVyQg",
  "key25": "39DKcVmk1VkEfexhhoz2r2ZNnGtegG71YVeJMpZHkHDNHowbADNX2AxR7rQtaSh3G7BUQwyEZicpM49ZN88Hm9HK",
  "key26": "3qMcLXQRP7iEZgoNPMtFydzh11khXnMtLfZduUNVEqhsA7jUQVJaGdCQWBdi1Xhc7yFtbkkxp8cuGGS1PPG2DxJw",
  "key27": "2JfuGEz89scdQhJNZtS4pXKFDQVzZ6JEiK9LAtg53dBwUQwHSsy65CakeAZRsJFDrs1rSDxSRGGzygtiXZDLapWx",
  "key28": "dfYkTtyu8WEQjEqQa9ZF9viQSoXnKjkJE4CxJwBcyfnvdFqZMWGayyUL8ToNZo9ZdSqD5FQEKfKwdFW4Quo7v6K",
  "key29": "61pwL49LKn38GfkF2oTNcCVPASJ6xjonp2sum2VV9DF6fGKgaa62HkCzYqM9AU3Q5aVvLyBTnh6zY7DAuHsEg44i",
  "key30": "3rqj4jYMKWfhU3BPXuNPsVXEK6D98cW4L2EB3hMCu6uefKqgRaLyZg9gciVPx1EqCnYHeTfvQGfaFDHYxWFPXiG1",
  "key31": "4EQGi35RjB1MUtdXhVLRVPAX79s4sUs7tCAucpzdmukwLrM5jkbyogs1Zh5jDUw5W6tCD2aTFHawNbAFCfxcH9ZE",
  "key32": "5PUq9k8i2uUADWynZtEYTQGaPh1Qn4gecKi3yQGpN757bvfpXTxBitXKa2v8uLV32dJ5QrJLM4sHrHtvPqE9yA7q",
  "key33": "2c5UzVXk4VhUpQTxEZgVmgY4QBxjySwxBwSE3wfFsEsJ6fTMCreozPvdSp66DsB9egF3aMAzy5cW7ZtcHseSFAVp",
  "key34": "4f4X8i4QQCprS7MiK6tNw8Qe4rB2PhUHoyQtNyU4wTgfi7C91GD7ZZkJNRoV1v4AMtEu6tepddR3XBRik6a5zE99",
  "key35": "2Jm3QapuXNBvHLQX7eLLmnzN6Ysx4HvTxWKYL6e69Yuz1wnU4wEJsJy3MC3mvJk79AYiU5EwLtHdFWyTnBfUN2uu",
  "key36": "uEmQWDGUyATBvsS7ZfQpszxDwMzxU7seXWEZ65N2P7pVCN5D53VTgkYLgN45Yde2yK51eHjUoyB6SQgC5Mz1qAq",
  "key37": "5buwwj53VnpU9C7noM95m8GNKwk9UhhHgoLNi4gwXUFnWFwZvB546N9Sx3sfYcWKzrzyWtoZvHtCj8HjrRzXqoay"
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
