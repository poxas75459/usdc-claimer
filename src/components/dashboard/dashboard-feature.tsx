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
    "36TwJf1Jxpfk68wRakBshKmUizJtz4aGQNuL4YyPzKYe8wbeTTde5yBE5jQDUBPj1MQ3z33apPevdoyXKk4iVwCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529SL9RB47bRFHceYTfxrWhJrvqKsj7ig3sK7ck8jzHHBS1H14TM417jot3NZq1hmk78jTnQGQurBeeHR1XWHUk6",
  "key1": "4hD58nFh4PmvVwMA8W11RhynKCQdWBN18smBFfzHHPZezkYcWLBfow67BZZZjCnDY9dcyog2aqcHnfJFskqhJbbD",
  "key2": "5hJ6cHamajV1TBUaupiKaY3gcstYHfRZ5yC4rru2w5tfxnZ87NNbmNPuXVnJqKDLJqSFo6fiPE5pio7Zq4gmb3Jn",
  "key3": "2YhpYrpDrRRW2E7xVyyTsvU243GAUSX8vmCYNVX1tfxMGALtc5kYe6H3MswzCSCLt3o8JYiaNstc7cpJRcwzMN6k",
  "key4": "Ry6iJ7V3ew2NTE2oW7dyUTYdoZWH3T1Lx8zLCGBysCwspRFsaHKjzrGKG7G6ynjY9Tmxq6dauFKNWH5jrTtXxyf",
  "key5": "5NJ1mKJC8PyDybdSbPqciW8Q9aR7eAjnuiCfigujzWeAjGfNxoVw45tCYUxiEErkYVEprzSQpwpdbkBtV9yFg6wZ",
  "key6": "28sy8AqVmMXvHKMJfvKF5HdtSs6JLoyT1tDjwcCDYJ2eR4mNBc1CJHjQWDpqvDwEXwwN5c2rY4vrxr3YzXp9WMMx",
  "key7": "4bwtmF3CyHA8tMqQeDS8Y5Qhq4bGYk3JbRm2oPD5HDrdrKoLGoxtqbmoKbHFGYuMJsmEuy3tMTo8z7JQ9EdtVv9c",
  "key8": "4sHETbtNT5UzFZM34bUuXHXKvPg8LDZb9nWEc9WawB4T9KBcGnfEid47VWUZywqSrY5QtK9BbESN8GCVUEv8jz5f",
  "key9": "4y6tbZSdhTMCsUHUkJXfz78Q8oNkQDnCb3N2TMULbzochfnYzLFGEpNAUT7eLBegxgrY7hMkDL17BHd51RD3Rtr2",
  "key10": "4SipTUwGwMVUniQNJ5jNwU2XKBf91AXALiEyPPNFKZYBURkDQamWb6W4Rvbe5fuanfacZsH6GrhrCJg8gYuwM3wr",
  "key11": "51c5uuugXR27SK7a9UaREAYsoZxZkYhMfwHa6W8c3nSRTZyL7oigL3yQL2Zpy92jTRSR3s9N9PLphdXNwgKLvW2A",
  "key12": "4SkhMSdfCMpgi2V3GxY7yLo1c8soVTvgzedvjMPoP7kmBsJBxLP95DDjmqUxDA3fHB5vHY58yRiYCkf8rTLCE225",
  "key13": "qv7oancWUvG8eBzcDiT4oxUwv3XdxAUhHmBiDuhBDYPB4qMJrEBhkbNHRQj2e7eRz5t83e5UrojmXDJFmTGtD1b",
  "key14": "PWgWTzHRnbLBN6uV8XQrMV66qPjAyDrsYWUPpUE583Vp8UY5bhQD5KdiAJiTeUqst15pALpDa5N8aQWLHuafixB",
  "key15": "2moUa7HhMZikfnPg4TbZYcZecY6BBaCJ5WgC1cft9neqWxoc65676tCS9zGkk4Xb3bExsYMQDUin6niJmWshTwCx",
  "key16": "3YSaiTDhgKLpah7WAyYaWZX27RGHiKJQFoH5US6m9mDPeR477WTGbc1F4GPwPNWru2Kirp7Cbrtufe46e2iNNcjc",
  "key17": "jdnx2n52EP7wZeKD4gWXE2xHqBEDm34yMeBVMd3izSfXF2CAsJooPYLi5HEaZ9EhESEUnLCDcS6xFgsDN1uhr3E",
  "key18": "3Bqsvftr7wcfDzGXQipXbQgTpZg4tEgyd2cUAcyhgiwghcvHYDzcQj1at9AMEdrELAJRfDBabkBhQj7dE7VdKx8w",
  "key19": "4cqetJotzvqRre9AMfsEAwxBppg55MePaUQ5PTHNW5mxFJ4m2BWoiR2SW3oSRyA1rRPDzBARn52fMPapFRbi8ScS",
  "key20": "5ZHeYuZ7FJuLeHd8BmbyA2MoB8VeaJ9HgKXirB9q3kWRj9S4XvLbDqN6DkDy3UsNbYuBVvv2wcrhz7NhCxgTX6b",
  "key21": "guqy9ej5cxT4uruHbALWdjxaF2ZCp7zVoCSS7GGCtZMk9Dr3sdB9KNXiUYe4faNok3qotX3BDXocqyEBL9wgq7P",
  "key22": "46VrYGSwd8hwhLFanm9AhEdVkg1TSKujL9YXMZEX9v5T5eFvXUs1cEbfy3s1ujpR8SehKmYcKr8weXsExvXWrNgx",
  "key23": "2FnEPAEYZ4YJ5nS9MWPdBxKLJAyXaHC2Mk8PhbCrSZjbva8qsJihgcdBr1qUdUMNQVm4meSkyxWfNL7kHutMxgzf",
  "key24": "2j9k1ZhpKY4ZhfVESKVkCG7acJwXjdyiPKoUi7CXhWSus8psoG8LMnUNEPwb9seHJiQUFBbEVosNYnJZPd5uTKeG",
  "key25": "4ybyXhPCwTcaBXhRwxyQYbkEKJbxGxvbZb431gCELCZ366BSryuQtwuktMmxmh4bJak15Grg4BXC3qY8YxRZypbV",
  "key26": "5jiWV3FgiN69C4rrg7qhu8V9oSZacxyyhDQQ4fxh7f6c77KnqAwRYGtbkRXP6UQ7pXsY8FrocmjH9uTC8FFU6aBp"
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
