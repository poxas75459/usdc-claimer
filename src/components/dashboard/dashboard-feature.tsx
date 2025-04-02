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
    "32AccgxsseCQ8kuQET7uZkuHbcE82iB6tScHtYKuZwpikRwKwyQZCTxJTFYbabXobk17YGeWEWFXA4CJbcSnPRFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TASrT4eqH7UXjkSFZ7Nw9uPSjNAcCB3ExN644Uwj9bg78gq1kqT4NuFEEr9pvi19QRGwpV837zZrHvgc2bCumrZ",
  "key1": "2m7k6rx5pVM5oaWkmo78StezfUhu4SYFQ6Amz7tHJmPCMN3WQws2KZDUW1cSFdrUBzybxbBewHJHYrD62juX8gYo",
  "key2": "67WzFLT49VaE96dvK8mY3Aq2RBn4XnyiUnXiwgvXjEN7YHsvL9mcJWHccQS7u97m7XPe3BUefAxggxv1cpvwLhg8",
  "key3": "2w2gQyNDnob4RMuiAn3UupjJC9qHfW3nxQ3FFLN9KDQHqQMYhBNcfqq5QCqNh3pFkoXcX1qPZpSHe52aF9CQEeBW",
  "key4": "61nktpiQ79RhTkuhJubpxKKvSQL7dhfLi36vjmL5KALRzSjouSW5JWRvjjtdvfEoWFKAkbS55o6XsQfrC39gYqps",
  "key5": "fuJU48u4iap4C9HvcGuqxEBee4u7XuwkxsQ3yR5h1YSfVKdSZ3MMw1qrEGPuMgGjCb2mXgVZ48bvPUWNZ6yehLq",
  "key6": "47SAnNGC85X2wE1omkNV7iNngXkAEaczprfz3FbAQcMaqVKYTqm3w6X1ZyYUU8jdPdfq2cNTkLTtt5QDDxz7uxA",
  "key7": "MovfiF6AfkJgJfV5ZUDSLLbMZJxP8PYkU7mW1cvieZtFtKax1Qg2RLo1hmydJwkHM3V6ePWUyE4Z9h6HQhT3fBd",
  "key8": "4FgSFwvqpqGPnxoShnRE1j4CZKpHA81vt4vsZ8KfuTAuYMX1TUZaVx8N7ip9S5vJGThmqdMwedYfh4obrcg3ysL4",
  "key9": "2wB5db6X3wWXCqXCrSmsbYtTcvdifrGoJRF3cgm4ZwEupq15HpTU4UYGG8SMf2PeVgfKVThBVomM7m9deQjTqf3d",
  "key10": "3AAtwdnz1oXwsdP8vL8i93wacrthoQTY7Ba4iThoAuDJSZ6tNvcw6a8N7YebZeaEigaBUyQtcda29uCnd1J7uNg6",
  "key11": "62q5JYLiywB1GVGD6nJqde23zob7ABjFBSa6fmtakyLBCv5zWxx7ui3prVPgfRpEyXa8oV6oXSoXsBS1hwXnk7xJ",
  "key12": "cHa3cuyxbusLNoEDdNrRyRy6H5VJdqq5y5rqdtttdVqzgHFkFx4Ke92aTb6VnvwXrRcjU6jUMCqgiqFvkA5LyTV",
  "key13": "2ov62Y7B5L8LRxrhQBf9YHt5xf3psonJEdzSLE4jjE2inw33sfXr1WoXeugroLf4s7Ba9vFnLh5zvpQ3tbhrJRNM",
  "key14": "5poQDfAwvhK9kDY59LMynRSqozyenei5b676BApMZQBiFGHyqCUi33Kb4b7PmAwkGeToMbYqJLs4uBGcRE5KxwNy",
  "key15": "4RikrcmjwbXr3CErpgtxCsBfcewmHQC3YopB7fT2pe7eEwVtUroJxptdgPBKPFxVkeD63vzYR5MEbVnYLBNzy4mG",
  "key16": "HX38tFoF4DeZD5g8rsbhifbDfbnUsKtAZYcZn3b7e6PdTh5FHdM9pV9dToM8EnCUNGa7K8xPCvB74FvR1gHq5rP",
  "key17": "jFukpLAxtJ91NnWGzzrtw7P7bj87wVAKJjyfKHmE36MJiRJ1LH6MvtZRCPC9oWG5EmASMqVSQk4TRaJhW8wkdUd",
  "key18": "jyEPVgxYpJ36g38ghFvLFTjju168bwMDzeqNZ9Z2DNvWXvzAhkiitD9gd5TLYVyBT6APsVssUQdvj8faVofn217",
  "key19": "5MZ151QqBkvJWXPQKUdboXNNZ1xPEfPFgEamGHXpjk691KXBo1C5sQyQgiW6BpoCXsWUKfBhBSszsHre3eg5czeM",
  "key20": "2q8c3SEzdi4JHS9pkjxwR8LTP5u9Gsc4mDR4c6nHENXPCW4V1QBqPKgMbq3VVN1bx4qSB9RQsXfbnRToxPJtqdAE",
  "key21": "2vkXtir11ctbXc3jYvX7kbQxx4RRK9JbxVc2Wkpa2Ukg8PTNZhnHMVbeWMiYS7BzC8g2tk8zEEZW2b43sUTRmpeP",
  "key22": "2mkqGmo4shSeaihSPuKSvfMvto2n8Ssj2XSYoaWhDTsTnU5dMamWeDD1Zyn8LhGfrigea4E3MWvZ4GXHA4o19uck",
  "key23": "5AEnHrD1g5g9BJY1SgQst1CPfBQ7FnT4PLUUh8AnHuXsvY9txg5nNfLz7MdjtV9NCrSNFuG8vozJW1SEUFcHSrYr",
  "key24": "4xA4DAso3hxfGCDjhvxQPRPXUXLR6X8nFno3iMit3fTYamvy5BYGMFykhYqy1FgmKZfwjUfaa99v7oQkfywUkvhR",
  "key25": "RpDZMUPvQzzp6Nhis1JhAoqe8aAuoT2F2S3FcGRDmgcmWGXh8RVnLSgaw6WHXgy9ruh85Dy2nmDWhx7THCg9wbu",
  "key26": "2kUiABpWTZzerjbLUMwkawDYPyKQ6wzZ73BppnyE6QrAuxaEnuMHC2ZqAa37NgouuzC6Zg6qxRtTf9NgQWKYjJ59",
  "key27": "5r6sR7nvmpgH4E1CbWhLLqvAGWCkqetnUogw8hojgSF64zyBeSb1Y3Y6E4BH9zcxXS4qLd2DUUuZ9NFAEx94KxT5",
  "key28": "4E6Yksmxi4j9t4EMRKezndCb9NfnagcBeWditUrRfyVvHwWy1n92tv8j34j8La2qmCmsjQCpQX3EykzXdP7ULiJn"
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
