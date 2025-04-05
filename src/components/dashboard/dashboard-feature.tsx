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
    "5wT5iCL2DRdPLW7NPcXbwiuWHDws3WNNSPhXYgbFxjqNQaPXA6LKt27feg83MRjReyFAobRVneGcv42b3WXuajH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qFBEzBotH9TCFhKXeZeustweoRwHb9YiekFEA51CRzk1sxnVusC6LP7HcMtozjLAegpYnUavUUS99krGtM58vXX",
  "key1": "4QaY8y7gyjGC4wtizeFY4tLRbMs8J7Md9zL9AJUd8y5F6MuxQCen9FF9hEYWRMrMZ41LdDVJibcqtR1v7YHvu68Y",
  "key2": "57b8YtajD4Mo74YMsNXVHAX557ovezrb5G8uDKPtz3gD1Ao9C9mmE2CTTiffo6AcsWoDN1AGDnWrcNbmd5pJ6x47",
  "key3": "2FxqCbUub7tmjSy5Utka1XgCvA4gPfDAfVhvosVYbbwvPd1jicw5yraJP4HBNrb1aA1WevgZfhADc1K7yyf3CTz6",
  "key4": "3DovkGw3FDVeu3W3nmQUH6Az6dVYBewDyNN5Mi1wfZ6beiK6GKYoBPaSmJkF5eMei3Kywkh7HbX5GzWbdZULTHTr",
  "key5": "5fXeD9JnjuRXcsFt2ukN8oYLrwtrhMz6fznb2rUjKqgtUdcuiSFRyKN6weufgdYfwqguyFpB5UY5e8G8vakFL5Nh",
  "key6": "4FTaTTZXA5q4oQcsv15xeuLHfZySRMTm4sgxW6g3QpEMrj67X91CX26qYWgtvHLbmYBhwuosUJgtmN6aiHTpshD7",
  "key7": "2VcQ4awG6vcYrWZzAj2Ke3LCNYgSdPa1Qt8pzZm34LAZACqmzUzRzZReAVG1qBgnx22BtWAvbUxEdn9pZwjery9o",
  "key8": "apPgLbeN4ZMGMbNgmhm5kfDttWzKVEtz3GHhroQVG3TqUd7tqeMUmjnMfU5FteFaLufkKDo2jKmu1XVVgqZvnEn",
  "key9": "2C4Fvp1AbDXW15HsV8w6a9pNiU8oKDL6wiCdAdXwHnBRLiwCb7fnkrazbHNgkkKFgxdwS6VZMhnBCJ5jENSYa2VA",
  "key10": "2d64DVmLoiA9NSKW3ZnWPcVMHMUpTByHLh1AVnwLq51HmaWXit7BB5dcuP6vN3iSeZWgxrCk3N6NaVAqHsiwmYRw",
  "key11": "3ih8adX4kBud7kVUbFcQyZWudnWmye4xwmiCs1sVz2PUHJnq3reKqLyJchzsNwAqicHkU6qidTXKFBaXLCtCRJiq",
  "key12": "fWn9ygY7aemSFokvmAyuApBgZbufeWG4qSuTDp2v85ncKHMVsthnRFJrPaXpLWNoshKZTfLGRodYU4E7ZxT3YAj",
  "key13": "sVnZ2EiVxf6CgzYLhacazEQLT4RydFkigFHbmTvax4YWNsySYuBe6JMLRZ4LVJDL1zVFPeZuLPqv8a1HRdB2ohB",
  "key14": "5A3XzJJuUH2id4aezXBbrjewu9WEeHPcB1Gg4r9KFMWoQvGefoREDoBABfTLWQpWHbnzoJx6EksLW1dzkdxte9vD",
  "key15": "4oJTpS8Cpbu4tTXmUC4xxtzRk1Ud1ce1B73RaDR5ybUHZ5WJmxt5vfbkdnvTFk3sK8QTkXPyYuiY4hu4WrD8bvBd",
  "key16": "2c241kMioTEwhQz2teZsvtybqTBprHyBp4suu5SKovcfvJeWL3NGjic7cNKXzFAoxzZNTVLvgEd21gUA65TuPeDa",
  "key17": "448z6nRibBTjSFnydPYwHvyzneibVHHDbFxo12KsasmqvVcQXvYvsAAFFFRdhxNhD5PDAU3ryDkj2iYq9W6b5aAj",
  "key18": "3MpNvB2pAioL13XKhKUF8ii6RFbcJo9dTFCWV2bb9dgatqoJydsUBSVT1a3EXZXnxtDPv1eMCcvFmRh8jU9sdswo",
  "key19": "5EEb9ENX27mq3iupgi86jRWAEpiPr3jomWyswEfjVf81cYRSWPRFoZaUdzGqyUoMt2b3VUjhcJ9BnwH61dj3rdNH",
  "key20": "4XSTFkAQ7MktB5a5JUgs7EgiPK3NS5AhBXWuJ1V3rXU6o4HnLKjeK2f7fBqVKJWfhnUzHbNk28cmSN9xRci4NUsr",
  "key21": "5AtEwjbkg2fXiKoPaNkDCe76WDUPMPjfP1JNJEGk5dnv7RJP82TZ865AYtxQyYsHDVqc3jvRyGsLLvvDByaVqMMV",
  "key22": "4EMNLfhaBmhYB2CvQNsedYXE7wLhinc286yp4ykE8mfzj6xeqFbTP3LPrvRoD4PJCLpkmV3YJTU9DqTZi2EkGseN",
  "key23": "84EbF5x17wJcSpyWoMWHMve5ovT5Dj9FjypSXJSEzvKFzdGCpi3uqWdP4iUFq5dMGog3UcbXXS8ZLnsBzBELFNR",
  "key24": "46zPgp6ftktHd2sb4Qqpday13pb7hDGAWMk6hqbqmfyqS6gd1MagWNJLfmnkoFmFqv5k4vFEbd8C1vdXfqvJTJG9",
  "key25": "4wiwaLeMfKhpoC3q8AUq5bGgqheFQWyk66qBMjExn1uGtx3LK93RByq5VrRkSaULzAZeQQMZ86xcEBDrKZLCGzKt",
  "key26": "47vM91Mr8XkjRh3QdvdYA7MWAuEPD5VqXKp4TFz55suYovznfZjAKKGBKsHGsqwpAQaaeKfiyLwZLX4XxrBCiP1N",
  "key27": "45RTRvdr63EKKbKjYxvUqs3Q7ZLyFfh3AF1yidauMedLwVKYK46MYXX7L76h7sk5bLmkkNp1C8Ar98zJpjkG9LkV",
  "key28": "4DeEbU6GdLjvbJu76NcnMcNVhhfFKxWAqVWkCvYcJHmC9y8RK2nDWCutjSwSC1bZGKHACmCJTrESUDgw7gjzg99T",
  "key29": "2hexKzZApXMoEeXVSEjNBpXAeKYrWZgtdR861C2oURJs4foSQaw9R9A3XcB9CcgcKEgXeBFr8mVNGnZ9swWvtz82",
  "key30": "37ZaZZWSZGG9EhDPpM9KHTtKgCXwqV9seo3sLfX3rFwnw37yHh9g2jC5qBYzefEoyTQe9umQjb1zKgGRcXQqq2jg",
  "key31": "4z3brzdA9QyCuipmgcdDPm1o9E8jXhajDgBHg1VfGRCgn7V3Zt2uddPEzHZ9W8fQ7ZAgG2SfebAfr67DWReR62uN",
  "key32": "51kRR6a79u7V2zgdFoLwqtp271iXC2ivXb1MUgUKVXJJoLdRfVS16yHwuq3E8yfqPJUT1LpB6vC5pQskzPJ4aX5b",
  "key33": "3SWrFwLaBBMAQj5Wn8xVMvjcqvHsVkfq8HutMRAiE9trP7q1BM2WDSm3EwqcpQqAEvvU8ToRAtwR44vnPS2eetzE",
  "key34": "5vzrzwwdScZA1dtaLVY7ca48bhMuzGYtPk44nRjLKVNdZi5YEggHv2vbBZLFhvczriMNH9MgC1gMiPdvkGAXwAgY",
  "key35": "2wY2XfNcegJtYtLwh3LEhEGnsWW3HrggWMNKbCViGUpVKmVtjfFfT6B9wZmMWKGQqVAYx34rWkVDpWjAbTZQxUdn",
  "key36": "56kjNtgvHqfJbmwRBCmQ19iGWeYDPdUwPxZdXe5WMGoYNzpbmhWnkrK83xPS7BvVs33zMmcYJG98o6qaChmt7CRb",
  "key37": "3hjChprwzNCYhs1gf4FSx7uotZyces3EE1PsextK7PTiUPhNzS7aooaRcXq5N9Awt3qXQq9hdsLCRjx24qrgySj5",
  "key38": "2B2cMBTnvEQ9c371iK8ZoJr3uQJc5iUcw3mC8DUgskDr326ZHCrGzWZyShBFqyW9hoN4h6tNav1kERhbFKQZkThs",
  "key39": "3ZqSgRYgmPJsq2ZeeZ9xsWfLLvff791KY2sLLqbxJMvNB11BNEEfqCSZLJcBuqMLEA18VGbcFRv4y59KBkZjeZ6i",
  "key40": "4e6aheKrssPJPEuHQp241vUffgrWN2n9MVHGuoNMNhjPcPXi2RT7xQJXK4aRCevRBmAquUBfrye8roGNf7Nooeb4",
  "key41": "2kiQ3TjuejNrDbW5fVEZJrcmmqkk3UY8YrAN8VkmDyySy7f2oL9afLfvfjFBXwteAVAWVeJUYYNb2rKWEPWZe1ji",
  "key42": "2TmLXrHWh1vqWWWkaahN7QeDrbdnKHzskLpnNfBBxo4hFKKEi6F7dSnwXc1zYYrj1DkyWinSVUP62BHUr2t42gMo",
  "key43": "2jDA37bnM5Z2a8SQFCgmG4LS5qLRMKBcesexGT2MkQbk12HRKujAMvuRCHREzWPJiBL89p341TR2LCffUNkJ8c9Z"
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
