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
    "2J881LboFYajErqj2Z4orf8xTuCLN4YUAZr898Lt21cWZ4985q82YWpMvvETNQ8qX9HMwa9NrjFPuQw4LiaENneT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G9NPAg9k7ptPvK3rxrUAbAvpu1joiM2hSykunXGqf1VUTYC26NSs7NbLpCRWKHiAspHj6Y5GbziiLGLjjTYaBne",
  "key1": "2mR8bGdDb22sJ4UTgSnpkzEd5A65uwyK2x8ibGZHAkuDYTWcaX2YBDqXAAagbr2kApv4b5iT4nkB3n53vJ1D8Gy2",
  "key2": "4UA8ugpCSv4C1T57dWSFPboJFJm4yZu7KcmL9RYdxKod87f8TUdKa7exCrr5x2dQjSvn7Ge4xv3qsHNjsHKXGaBy",
  "key3": "3ER2DNUjxRPVTLwrFzBEwMgMeczUinyx8s9a75txAg8VnTpkbXHkKSeGAmA3mrns4qs7PnCNHSVmpmzL67LL4pDv",
  "key4": "4NSnnvJSSQUjyxGdKNsLzgYiSVHtqzDKUrQvoJFSt4SGNTYSXwFq5SQbKGJiffL2FhSsJkYoK6agTrFULMmmY5ML",
  "key5": "5cieoQkRmD51VqMxY6U9SUrCmSgBb7sR98zrrzJppeTX2er2NtmizMAiYoNSiGPgy2wLFDfnj7ucgP3vJjPTeHd1",
  "key6": "2wmNJskqeKgxcsWz4d9rgoMR2Rj3LkHRqDGwMbspRFTRCeP7naWhuamoEVoKE5eg2yZLvnjf4Dr1ef1VTqFvann7",
  "key7": "4aW5HzTJSTX3LvQt7dRg1cZEbNub9zerDgyACsnvDYattgJ3gYxfGQ5fifYe5fBh9UNzn4gfYBtm4t5sEKA4TgiY",
  "key8": "3sgXFemEFYf5yXwZVd5UhPV3TJzUVc9fYPFQpt3wx79knFwCLrg9BUSzXbdrTGV3P9SGV1JUHcPcAiUXw7KvSoZ6",
  "key9": "3SKX14MPg5zPnS3rQVF16gL8zj4eSVkjTruzRn9X6Fsk8E1rGbkB9MCUdoFzdDhu8d4qLBRzWMvczBVwtSKKJ79W",
  "key10": "22EAgGv8SG5jKu5dLYZAu2YZgBxXVdSXLRUDtNdEveNsSrCYUkErL9PWBMxNnTd7nEwnhWESbGPwXGxLivdqPaER",
  "key11": "2ivLSquoDJ9uXg2L67csBr3bFQN8Kb2n2K1ZzG2yqJq4wsGUH645Xg9jXs13m2wLyfRni9EoogRAyG8JrkmxZLav",
  "key12": "3hWegVHDV6fVnxG2qmH3PQdm3stDLwbYCswN1prXisPo7KqKcdnPQ1QKbTn8QnGMUZv79BKxVUKgNKW3k84UEJTQ",
  "key13": "4oj4d5bZbv1rr9kS7HgAmWk7WTprFZpDfUm5o6b1Vh3Gz1HFFZcWWFkYxv34PDqZArRmk6sw1drHojSt5CZEKRaB",
  "key14": "VEdMMwZtjA1md6dk8sF15zWzxk2NhAjLQ2AYZUcwNvDCH6vW5pDUcYW4KAYpZcMFy8VgsxSqjSFPbSkTGEtbPKu",
  "key15": "5xtmxYBH7or3ReaLctLBbGTqUZZMgaHopk9WKmwDNLuXG9KC6Aj8xeZQibUsfqvxxMs9V7fiCkwSLJBsmTC4gzZ3",
  "key16": "4kWxb5S92hQr6PmCZur8HLHAmaSwckcnYvBFHUSW8DzzK1gbkscPPBeJGCmfLfRGDS4zLUKEdRVVokAS9LZ63RSw",
  "key17": "5QAFcpMrSx9gnzVGshgHaTvWWx7Bv9ypPK4iK7xC9dn3fQ8ospAW86JF16uQJWg13cUM1GPGaP48m4mN7BpbwrLX",
  "key18": "2sLMPR1macNDJApVv7czugDyPppSooQGiAL6Naq2RLVxy78Sqe71tVTzfoPhPsXjQc6F2WQFkx2StVKDigqwkq3C",
  "key19": "59zYYHyZQpRS67AgXw1XABjnMdPq8bmPFJ6DPFYbgBss8s7QWurMiwUq3xSxy4Pwko9enqwJ78U8gkptv4cxJbjh",
  "key20": "2jZ4RhHk2vEg647S5MUdKhGrYoAKVUESZxBnGGYZFFNvogmYNWjaRFDLANA5EqZ2zGNpTx9kWxeaQSRVXfFfBwyD",
  "key21": "qpGdZfziSGJUwyQfrviy99P7bBTMQ1rCck9TPkoTKPgWQCEMrhu44Yvq7eNZ6unpHmYYRAMmkr3nboXqNZDpdFE",
  "key22": "5vPDDcz9GzSe5REZPKRCsKJja2siJR482tgD5JyddcySyRkGkoCLRbYDLASvdcTL2nMR4EGYcS8ZA9pbwjsPwKJG",
  "key23": "4ZUs2Dn2MZAKy9mQMdPDXkLf9C5iuWZQuXFv9Pm8CJXbmw9hmjUxDZ3kM17RpxGyFXY48Yo5U9keDN3eS2JxA7cW",
  "key24": "3yd8z4ndmx1HLkC1ijbbn1cE8h5pGoMTUUEPV37qacVDDP3VECZSnRvMMNUMAiKb5kfGXUF9sczJjHsrHXR1QjJF",
  "key25": "4iuV6ixjq1QcffrKtDA9yy89tB6rfbcRWyReSWyYYDSV2Jtybu8th6JoWz3mzwiXpEgyJ3GiU7SMhGRQe8iaatZD",
  "key26": "rbDfX15yFH6pFdfwGCkvUWg4MWnDe9ryyLLuE6zGvrW64xKeJDtprYZvfMVR6Z4HLmq6SdFaCFKisBQgu3SDFpE",
  "key27": "2YtKEyKtPwu96pqqfciDQzQUyJnQS4KFwcRrhxCAr5dRvQ5RSpiJmFKw8gvNNcABwBXVVQESHLmAxJURQf8dtjC6",
  "key28": "5RC8ZJhdxR1YXQKfToKnxsLGuMu64aLeo4WAsUy9WMfaXVWwvNyBjtWsbz3DffWgQEUrv4sy4roKsk2rY57tXd1w",
  "key29": "VbGVBRiwwXSYrseCb2cwVxPLx4pV624QNr1Gy8eXXFNT3gpqQVXU8aXTqxRhqj1BG2YwkA9X89P9vEdB5vbbFDj"
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
