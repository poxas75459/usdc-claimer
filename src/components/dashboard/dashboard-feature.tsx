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
    "527QH3AdeVnnM2YECBPyjFUmyEEJhHDR2DzzWVEfBQpqovvqaEsAcqA6GDsSczoiQA6USJ8i7iWpEvTbkLtdwywb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Da8rvGoFWZbGjtPfRuuGJ55CPNv6qw9tUZDWEJ3YVviujfq26cfmuJsaT5L8sGJaHCBqpH6kauNt315ZhvhEcU",
  "key1": "2rKLxfGbE2muo9uLqUHUbYd6kWcGAvxyPCP44ogWCikJkwohvHQzwnuYXZMgo4yBeaut43V4Sq6G9HoA7Zf5WJZP",
  "key2": "5E6v4oRHtBtMPuzNTa517gWH3kadn3fu3REcn92S4HUE6xHJ5gJx41qqePa2BqQkw5uWy2fQdwtzMt6Dp3icJTq4",
  "key3": "5KNzMxrDziM1rqkdJGGyN3yJQAiqAKP11cRUnbog3tCEsrLeLcKMJT1Kcg3cEonzu1nx5FUx59s8xrdRpLHqcMXz",
  "key4": "2rgiJyh6rmVtcLJXgqfMHBt5Wju3Czr3XWhzF1u3J3eCWDdEedPHdUNNGJsnD2Y4FVJapt3z4rCmFE7vYCg3ZFqK",
  "key5": "43KVnwto4dHCDvRVo7UqpNWtAtyiqXpxMent6bF4uqAFSFro2oyikjG3B1bwzLAEagqQMA3pGAbbfo1ea4o5xJv9",
  "key6": "4qyM1hqDji11jsN1Yy3PoDU32P3TtQtLQjdMWnkncCDvRpQBFheSyxsAFAe3fkqQrT6Ke4SKsvHh5KKFfs9hGR63",
  "key7": "4PXEBTWoxwa8juJpMdLLu1C6AMtM8SJfbBop3deUdV4GNKp6j9opPxdEXZ1ctRqyR85syGi8QqVmNFwGtCu5Kicr",
  "key8": "37qBmswDrDFqz5cXezVXsHZ75baa3vyKnPkEYnqUB9WGdHgEceGN1eEFFvYDDKTAreWJvUWkHZUqgK79wzCy76MQ",
  "key9": "Z9hsdm9VJNRTTPqCeJXZyXTyiYcd47F9R3dorJh6WwkLVaUJxWg9W1NbvB1januUSYHijCPCn1uf1L492paRT3r",
  "key10": "4JMQKwH8ZbXVn4RbxBpZMNMPMu5Uhd9nz5Dwth6jZWL3E9Dnr56as7Shp4iZibzAAC6iLK5hd7NHyxeGWMhQxi1t",
  "key11": "59d63mv3NUcuTWFoZWeQUb2Vt2G6vKmj9kzAqGuatNo9gkMZ4zqaw3FXVCdUu5sPKVi3RePYELy1ZtmJXAfVzHXC",
  "key12": "22tBgdCGTmZoXzgtG16zSWLWir1VYmHwvbSdSTcYSxGHgc7mhUDDs9sU4sKeRG6G8jxY3WtPJvGa3PkJ15G1ubs3",
  "key13": "2sKZk9eYbEivS2SuRWzJBZkmi9NiGGKQPoqPgNE3uoFGgT23ieT76dcuiWtE4GTxy7fxnoVoGqQk4stqc7pAnnYn",
  "key14": "4WcXrTZaZaEfptnvSMnHcbErmdGrpXwP3EN6ShUy2mVTw9UiWaaFLaMHb4Y2DwUZCJUrD11kpzFckDdsUQWBdU6t",
  "key15": "5WBZCKqcwsGk2o8w7xV3b12CnfYsirppuXztHMEGA9n7h9JFQrJtZoT7JWjqArFpQ5NHj7shAV4NfMosefL2G4kS",
  "key16": "QTUjhpTFmYEHiVvWxerExXWTAE6dS3A7JtAABiBTyFGXzSReMTBhBf5R83m71Uhndbs29VpxCboD2LDDfsgiTnY",
  "key17": "2h842bHr5brHjToRrmW1YmDKFwMJFEe8z7EXYd1ykzjVSPBigxaqhuBFFomns7uFNW4kM2Su9uqjk5f6Rzqtn56u",
  "key18": "CahtdtY1SUHMtPzHtYDnENmEjn29eVRYipXzz35H3PyLptcJMzqghZUneegur7TgXTNmeP7EF5e4iGyMTjyYo6n",
  "key19": "2U839KsMgRQv32VWS9DWELoVoXHkEWG1MFSYLhqxS6ctqvmVYqrr1hg9q7xveXbhNPg89ndxHbRkYRo37Ny63yHK",
  "key20": "4VaTv5snaiMJb25DoZU1CKSUnWDzSZP936YKQpWho9izpUHxBHMzXF6uY6vEDqgb5fJ5GVmgop2RE6qPbTuw6vnN",
  "key21": "5zgVCMK6GtwkPfF2TwPMBKzzfAVDTtrp6xPivZ67kXPQho6VuwH96U18MWsBRprNLiW5jyeyLoxrqPGFp9YEKbEp",
  "key22": "3KmjNBia94VxTsbXwr8jZnQzeRH8eQDfAkC6SyGsynhSTBKoba1gWPBnfKAQ7KoNhtwYYHbps4472evQhuNeFokM",
  "key23": "4w1Zr4Tm3LUGmZS5qdMXjCBU12YGB3M3HK7iTURQ2XoFwFnFoAFfFP1iMqzKnfpiNrGumbmjJzf9pXwT5GyZYjFB",
  "key24": "2j7VS3EFHDWoSsu7YMpwwMEcecUQnHif4BUb8AFcLQLApSTiB5C5hjn92jsXtG9TDiam9jUHD74aM2m9Au4ZEVAJ",
  "key25": "2SraojGsfs4QPeixQ1d2ZC5eD8PaCQUvY5bFDvU71VqxSRf4AtBY3odGF1S77GGXWWiceSbsYR2reEatC35PKCnq",
  "key26": "61XikB6KBgaTLs8RBi4c6hc8vuxRHADB1xfeScpPBRrHZ6NwFrijQLB67zUvCn9UsQ6775K58CCgyUQsbBSKodEa",
  "key27": "2ML7YKzxaT38MExiUkUS3brYJZz967X7s36jmFuWqFME71PPBzDE3Fohxb6SzDFQfetxJpTPZFDe28mKH3mNYYVA",
  "key28": "5PaeSzXGD44v8xgqcDT9iKuMvgxr5pNhcMxQhgcpm8EHBv9V1Zamjs81TwnzoscQKxy4pkAKCkkJrpFvPzeJespa",
  "key29": "3vNauj3EXQsQwjjLzuRNFRJ6CEyXJ9J3khnoEpYPqGuZ9GDb8N7DhkUKnRq5unr3KV6NAZ8K6gT1Hmzh7pGcWkBK",
  "key30": "5hqcDDvZ3vxJxobzVNVRcBGeMUXK1X6z3GJoH6QcdMKVguWoYS1sYc6a3XAen8kFgNAYsEuC447qHmu75njgJPhv",
  "key31": "HLBV3MAgTgENE1qibQBCFJT6ZMqrjKjHSLcXmpVryW6ABzUX1fDvFG6vQc9PzNc6yzqB5MASrytcMML9NLyhFGk",
  "key32": "5MRpQ8gP6u4VLq9dMwvwNbJcBke4ZPUb4778su6vPQkHv1yohwz8BEsV7WfNWHwBASQsfNVceqmy6wSxPa6aAphS",
  "key33": "3Rrv11Cw241RPmTo6fk1u3B43YVU9ZqhbmC87K13MsYS9Yq7o8Ha4EGFT4s7Je7mQUFo29soBmhALCYwLFGucU1t",
  "key34": "2R2CKwjZSdF1tVGAMd5d3amUjqwjbZUmmntYg9hoDya2KvcEE2d7NVNozAgNXkeiCd4ThP5T6uYXPRNBR8DKv4BR",
  "key35": "2NGd6U2vFW1rwf4inAvksE51qDscDN1dGFx6bFiTjaXgrkJJZc7HUNSxYu4ocFjpsS782wHezzSNFSz34SxTE8Ad",
  "key36": "2S8kyFkGCkB2H6hqLvTeAyseqdtZcCrNB9FD5Fcn5piwaRJSk6H7ttvAzWKNfgpAasZxReoADYyMwsGJDxsYD3Bo",
  "key37": "4QsCaVjMJAWnw7mmnS87fPvt8LrVCrxNaq211aq8HQhNWFZ1ieU8oCjgBWLkPDZH1bDEYZWfXDtbPC1DJDsLh2yJ"
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
