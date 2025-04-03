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
    "4P2gLGFaJgm9ZFssYNkJr9ff238HdNDYwTp83wcrW8WwtUA7s51TyWQuUWpAm3D8TNWqxFzS6Skr9gNK31Tmwdod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58gxgZ3ZV8JAotghHJehkbjomtZrq1YXDWgBUf5LjPpwAPdBmMs31woJCPes6sKd4kn2NvcZBA73KrX9gy9CTWR5",
  "key1": "431UKbwxRdvKpo9H5LmMa1QUFw5npbXM9aRAEAPsKCeqifnknWvciF1WnxQFmGSFnnWGVKF7DzKPwF1UdM2TNFHu",
  "key2": "5G54sUwuTeYqmorKmPfWXhU744pRGrwcuZLXTkowrFfYU1LC57muMVnNMsP5dDwdGCDt2XPLGRAbZmDKWzZCiEXF",
  "key3": "47VzaLtTVzPyKDHvYGxMKQR7PZKnYpvnKpssVR4cy6cPzyaYG5iJye4zyWQzaNW9v27XfwzwYqNB5tMNZmJ3EBjo",
  "key4": "3W7MJczRDmZpJPREPz2PaizGS4xiKJtBgbEjEf1taSJ3ZJHumuc7uFbBtadL8XCSFVepeFTd5Qxqfzj6bNszh5N5",
  "key5": "5C6bkamsL4MWYTGgdziwjHNXgyDQ1A1zjCXmdPNB3emyUy6H3rcWSbULJxep19DS8YpsAQSB5Sch5BbY2M1qSEWj",
  "key6": "25n7RtPBkj6Qk1HQ2b6MhYzFVCJNQyDpsXXjhEgaodDPPEtzKumDcJx5fkSP6Fyk8bJJtXLt7HFePT2YhgLNWuBC",
  "key7": "u2EHR1Fpb4zL9Euyh5Q6KsS9te4GiFYQVih1zLMfLpiBbvjwoi6Pha4v69ghwCQhf5R36ZAdM8qSs5DGNWj7wW5",
  "key8": "5eTtdmQwTffNMyET1JirqW4KMwEgdhPiZ3f3XSRh3LSgoZyVSMicwKyGMesjBmSNttjbtEvJrBpDzxoeMY7xB7Bh",
  "key9": "5P35ooz4PDKJ54m8NDSdJHWUiHo6mjkgxqyH4gRggEJNBeJY6eT5QBpLTAp2751Bga1hxUydquvAyXvqJN8mGGG8",
  "key10": "2zATWyFNuxLnVvznQmErnPDm1aCZY8HQaNuHnLtoNGqVqUExxnhqw2uVbrmLQiWFi1JGQreB1GHGsxWZe8xRTWUS",
  "key11": "5xnLhj5SYFhUmUA5Y85gZiaMj7EtpM8xfFoRVxwfTCVQ7RBTHf1yJPMTnrb3fRMYNmBvGMehMyZRg5mRyX2V5D5a",
  "key12": "45YCYjBRt62fRGiPTKQ7mA3h8vdEeAxLJY3xd3NDwxNNzE11hz6bWdKvacc3THYzAeU8PNnJBFc9G9UYjt5Sr23V",
  "key13": "42rMHVTFNdScycCE1A4mQ1vLgxYTeNQpqPq5UGXragHykdPEifd7zY8eMmuBrkDeSPtG848E388TK2DMVxbVBBNm",
  "key14": "36RwNxHkxGFpJ8hcDDjLujTarRYV9QQTEuPxPTy5cojtdcJGTJ1YQogj7D1WqCEVzc7y7YTAWzKXhCMqofhq6G7p",
  "key15": "4cdoZ2r3Dd5ehs8kq52CSQRoGUg73Rovboq7PKhja4bRh7o77ZjVNqq3JiaAxwRu3bVy9z93XxKfcNAcRroE7wgH",
  "key16": "4TPSrBnNtn9iKvQfQE4e4uT8Phs67pUAXwV11Q3pggxJ3jduEPBhWZqNYjr1978k5ayNfvsTpZQBDHkiLRih4pPo",
  "key17": "kgq5WNHLvMSrCa1r1oAi2DvmefrSU4tKe5ePv3kb3qZKji48rqogJxJTUu1vUtFNvjnwnAm56czXne3njrhJUip",
  "key18": "23wwfyAKLduKq2Y5GLZzjJY1T9uAARGnsssQFHiSApjz5xviNtm9AVvGZbDGSgqu1kx1uV3NYvQBnJ2zGejjkq1Q",
  "key19": "38jXByt15F7y2ZhCMiPNFv9QGkEJJk2hwrx4PjQq6AMtPDSFEFha3m2M53phaphPzsBSiXWptvP8J4scYLAXaqw2",
  "key20": "eZ37MU44QP8kGrgjyrpnuXfKNRV8CbYcHzJW6EoY5LFe61Gr4yGiMjWc5VjNkdWH4RWqp3RZ2x8UNas13LKzHoq",
  "key21": "2ynp7KQZkc9tuJtcsRa5pruWKbPgQ6gt6f46cU2D1uGog6NMobWkJLsj48ZbTd1MNrkp6Z6PxhssWY5he8W5XauR",
  "key22": "2wsKgxEwkMrSmswswkTW23gisukVXvwanhg2zBkiQ8xXtuQt7jrMBUBzA7sdrFKUmMgGf71PgK3viy2WhF87pRX1",
  "key23": "v6rkbYAh2mkETGC4A41ZjM8GeuRnjeEXApVqMofj6jtHjcNZYNnDtemDheqbve6sUf9nwmiqJjyENypyiYmnLNo",
  "key24": "u454vwYU29c44nboNABBFiEYKbtWBuPYzRdmLjhLhavieQepRke9YaSRAPt3tpBuF1WELXZ3JMW5MGU6SQyohxc",
  "key25": "eJ7BEP8bsuos1xgY65dNKMDmZsAssJ4uEmXNEekNfUUYnkFgUtyPoCAM64nvjB13VZwZDBQGZWXhtXr9kvkxF8v",
  "key26": "48z4PVXTzeqWkf5cqkaTen29tAQfKJA6iTeU2qsw7fVqAGE43uSHbU1Tnu38gmLriEfqkkm7sDCUpSf8pWNQRZCB",
  "key27": "3KuS7tTPNzMy11NGEWVsj4BYyr5gNaQAYsSyMahhw4F9ujfKrbDP8tXU1NDMZVAroQUpZSUEMxLG7qgR2gjLMSW",
  "key28": "39twA7uQaLiH42FQAPhF7konb6dTmu96vyAVH1ALpAKgK7e2Xgp5ri82s375q3YQBYLz3Pi7MBD1WfiTfEmpGj7h"
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
