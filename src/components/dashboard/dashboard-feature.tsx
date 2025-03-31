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
    "4PuhDULrfQZgp7p2Z7QiQVsv4oY6gbW6A32nbQ3yAC347Q9t1M2wi6aiQEFnaSn2R3LUSpRv6qWFXJBSxV6xdYx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfpbYsp2aeJfJYRxqKYZx4BNuLTF5yBmQFnWqwG5Z1WN4vPsQRwXcqhMWMKfNvKA38dWTQpMxvgcVxXV3b2hZEg",
  "key1": "5FQdfGuPSxyiHNxyjcKpxo3LaVByBu4MAJj6jgHNzjC4RGMQMihquTnJfhAejdDGzxe75DMFc2Gf541gmvRKxmZN",
  "key2": "4WqMDBqyAiyeUhbrbdhHtf7Ut4R66b47XtucBfaZFiV6sN9NhSfaEff4yQ8bMZenYRPa29jbpqY3XuPV9dj6s1Ky",
  "key3": "CuPbtfqhKS5j8U9cRmUbNimroi6JRPeKbizPVwvCvNwJGE29FT7F6cWAZ4Up4bFtwiJzq3MUmudk5mvvHSe6SQt",
  "key4": "5W5tZmmEdyH1W6UzGQuY2kKD9C4U3kFjkt7x8PWYwG6Fqq8WdYzdbD4u1Nq7WLYzkF55aH1pD17tQJSCgb5WwhWs",
  "key5": "4UQqFYcZHtCrBukz4AzDEF8bNjVxqDRdrcxvm1nH29gLKrtNsU5gbZAFnqu6xaGByHtCUAaeAPngjT9m6DdUEfSp",
  "key6": "5iHcQwzLT8xAtJ3r6g5ZDQnpAZunvmsFjivzYFpGznaBobF3MfiQAjsuGrjKne2769oZ8jYK4eKbbFYDPNfrgbSX",
  "key7": "PFCUHtkTkTRY82BKcapFQjL6isQpxtdqUHr6ey3FaBjwQ9XQDbe6x7HekRAcVsCvQDTV6wEW593He5Wji4WJo1z",
  "key8": "2GwFAE5S5x4eTHv3HowoQ2ywXM9QUnidi24bARHCQukFLZEK7yhXL77KiVxDjzJw4VXpPSpoZ97xMQo54UFW7NRL",
  "key9": "2UxejYteQ5Lah7y7HgApbUu96jzoo8KgfzhgmPMxLG1mXGEzi4aRzJhBZpukgEvrgEd97HtPRvnnw4iG2PwH8XaH",
  "key10": "2hP98UbXvyrhTpX67YLLEbcxY59u8FN4RrtqAxNv1pa1fw3bBL8URFR1i6VrtZGStXLGA2C9VqX5q1qD3gDfKDBV",
  "key11": "2nyPBxWwuBgzZfEadoaaaiWoHi7edQkDcbTx14mV7ZT4DpXq5T6WUcs2fudwSpDaoJLzjCXSXPhZ9ySzh84WsyKQ",
  "key12": "4asLjXNsHCr8kVywS2Pr4Zd6AdfSESAkvW2yJbKwfvFV8agRnHQqDf1d9JYbbcZ3WG1kxW9UijbrGstmZXesQRQk",
  "key13": "UZgaNayVDZN2ufqr4HTr2SpTnHXXr9nqT1PsFZfPm4ohHzPacmDkEjjrv8Ko7wGyso1VZttZu3VxyNgnG7PZm6z",
  "key14": "nyX8ZRoRLfHvqDLYwcCQbZGu3q7MJgVsEkLyB3g5ic2TuEq4meaiytWyEmDEqMdmKKEReVB64u6tQYorJ38D9HE",
  "key15": "3KjY4HAptdHWViLZfkS5rkRpTWnBATjXn36J7yCf8CpDS5o1aMeueXfGmMae5x7tfTyrE59k86t8RFxVfTcjyoxF",
  "key16": "k5aNFXDP8q4zc7yu4W7ZTvZpZtL6EWVUaDGjVyDsg2up8LEQ7UuWHj3vLzMg7zZddhu69zV2y54rzcG7YYxU27o",
  "key17": "4ke614TzoZWZys49F81TAvEGrYFDVrBjEzjdCwQpS6YpVH2Zbtvwf9U6orvKEXPBjwRJiXp4PqUJPHN8GbKDJ1tC",
  "key18": "3aktvud24ukXCLuW1tQ1MJHEqjVkEe4ADuAiBSG7pke29EWXJQQxE8cwLyhc22PCUGW7L4yzQPcbXPfG2kkJBJp6",
  "key19": "4Rm3PuvcA77zh2iKKf969nXYuhxsukm4NfHLoP5wfWXqix1N4Ete8horneYQxwenapAUsh72tfWV8rZUnJy4Btq3",
  "key20": "3S3rDH1uQHQq5Yd5ztPARLbPVUZidr1vHTb1ZeKX73qCifY6WZREditJHNn1vqEiJkLnGqdwKvydQG5jNTy7bWDw",
  "key21": "2oWCAMJMEJtAM1jvnMmm8LEAW8NiUiQWt6T6EWENqmZXr2KRr1LFHhYoXnyYyEFrUJLUPf8DcX5zhXvgaDtb7xSP",
  "key22": "56rWVkA8mQ1aGFvGukRBsrXBnvm2gZnx9XWdYLSoEGXT82uxdGMBJdph4imxNjjNsf2NHHvP3GzbstFzdLsQFJ64",
  "key23": "4DYBSqw2URWEPya2uLVs8CMYM3utPJZYeQqtSF1ZZub4Y5rtWfTVN1mz6FSQWMJqJssadJSb4H8ZfaofggEqga2k",
  "key24": "3LGBrV6M7zPQaaMCT9WqQu4KnVfTa3brTQkGdxc9FrizTZYrQ7vnt992RjejD9qjBnX1kPuT9rCWKBeNoE14aMcD",
  "key25": "4FLbaAXSLqJzoowPfXuQaCs2eApK8Eqb1dBNXDq8EW4SaDQ6AneoZHsrAWU2NDigfu8vtttugwWNgo4bUPeyZru7",
  "key26": "56oUSW1m2TKhzQFuPPKjTNp46ZDTQK4URMcrWwh8jTLozyNNLwbH65gnps6vhydeTy2PMNJNfdp8gcg3UdRHWJSL"
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
