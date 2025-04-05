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
    "4fFLho4812USU7tJnEkMvuiNRSTaRaLKkuNwiJ6wsoh5rjDSo9UMLWYLBBU5g1s6QKyKJbEYA9FgmjzYmxUSHoEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgVvZfKA2PtuNN9Ws49Ge2Cge8vysQjXAJVr3ZnqewjAjmBGSgLQiE1ZbJXev8k3mubqgZSHjYYXbS5DcxrJLbW",
  "key1": "BE7oS9t58GNoWGkvYJGsUrr45i8wS8apFAXxU3AJ5HdAi2gvEB5kPBT25LzJghm8jDySMrA8xBaEb2Qv8VPn8m3",
  "key2": "4uhJpuDikxTcbh1PGKWEKhM6kyb5oiJfC54Pr4kts8kQGU871eHP668Hgonq29AJ5jqscLVcCJb5s4sj8M8CU5fT",
  "key3": "2QoXscacpSNRAjZW9dKofjYv1NXBQrsMNuz5rTgpWKoxVmHe8EUQ22mrWUi2AdbKQ9gsv9rP6yHGNGUCe7C57xQU",
  "key4": "GkSW2xTxSh7Lvd8NEmVFL6wQUN6dRhvK4XSt25He3dEe3FZjRCBKSkdSspEjsKpHmCjdGAYNjn8CKENmt6nLArG",
  "key5": "2spVsV1XWc3RYbTnnX7LRMgktreaYSV9c7t9rnmnUbNiDMW56cxcrnj4jVp49qz8gAxsjr9HS2peQUB4sfKFfRMG",
  "key6": "3922XrkvrUfuPEamGg3iq1jtvNrX88ftujCJ8Txumd6FvgCLxLLP9aaWdtUBMHm8bN4iumvBBAvc7ixe51oGXVfR",
  "key7": "3MuCp9PLL7tBJLMETZB4y7YrHBVnHmsHiN5jKjoVF8f5ZAEmu9Px2z8cZqJjzboRC2zimB4auzmWYcFdmhZArCaw",
  "key8": "4zN7Fv73dFFoyh4Gx8VJABBoH3cPnP17miK9VxLujyFxrVzj7yC5raovN6nxaAi6svP3akvaH9CqvdVjNaHawuzh",
  "key9": "24bUgScQH1mGPTym3qvA4pJoMvYFGekqJwVJPLYMSC9JYrkQXwDRtam6xtWF4P59shRaNewSiCL6K9aqgkrpsqip",
  "key10": "3sCUoPv5RPc8dnr3dME8r7PEKqvxqE64E816kSgcfxkbtGabzESzALJ4p6QZ9C3uj4MuCdd782J6mHpC6rrHKDp6",
  "key11": "4FMw62cPgJcebp1qgnpkcMWFMBTc1uW5xid9wQJGF5Kt6Q3tkNS8UthG1cFLUkvswevd6nsKydXadRJtvc7FZN9C",
  "key12": "2hbo1Hw8V6fdKAvoqM2JQprGZewD1oXNmjy2Y1sBML5g7RQsGu7h1TVfqjm9sVy4mqKovBPcCnNbbz5sXKrjmFJx",
  "key13": "2Zy4FtRYrh1p27x6ojnLXL4whXazJTKdGMghmXozB8auVMzBagACtcXxBLxktMEVpEEAxpbi9pjCTcEfkFZN3n9m",
  "key14": "2GKoHk8oZwLsXmznwCqxQx8kp7xw1ptJN6EnWqE1GjF16ekHE5pxJB6ZL1CC9c7TJ3B7rAj5DqRaRnbzEUeAYaeH",
  "key15": "aJhCPK1BsNM12PfRznavRqox3KtMz7ndYq5axWEgo5UL1HgdFv2P71pGZxEN2CuwcouLctRFqmntWh5cYdfjNJH",
  "key16": "6kRrzzsRkyofUfhFa99Nqb2PNsy1Upw6zNMaawS28gPJv5MdbAdUiPqaLfpG5UfQV2FTBLjovej4XonD4ZbJm9j",
  "key17": "27R843s15c6oQZJ9TZH9XjmpRZuN75chMmMZSj6BkRrad2NFSkTsoEoMy5m2WLX7UYbXde4LKpSRjUHNuLer2BFP",
  "key18": "BGZeAPpPzez3Gso1xk2WUN16EXDx8mQoYvHjfESHM2YYsKApXfLFXKxpEBEDTmdz85rvmnoG1SoEorpjuUGhdAh",
  "key19": "59DkiiNnP2ugSMEXMsga4GxCDBJSEBNogNA1e9V1C6yCb3G5oJ5qByDx68CS5pLnMXvQ87qDuLxD6NzvAYpeNiJm",
  "key20": "WFQoy5NbukVuvWzVQaNDsDXYyt4pL2PpVqHkzpyCFsjQdP1fpwMst42HrWkwbi44tVMs94FGFDpT97KG8xTrk6d",
  "key21": "31F6iFAVoANRrww9rSqJugBzd8aB7bnusx4WsyMbpcpFd6ateJnkmVV5eDBBK1mpuqi2DJmPt6DfDrawZASpMGSA",
  "key22": "ZknomJoVxHmHnZoqYde86pjxN9oK9D4azWxzHVM4wrYyJw3ZoAnC5wCp8rmNtDFkXrakenbc2FzwNnN4qC4ZLKD",
  "key23": "47bwhvyyfRRC5qxGBqEsde4atssxpwuMGgLVS7pzJKK1jf9Nw59k97XhNHWAv3cLMivEtevnCbYRPzHRvPvWx1o7",
  "key24": "5X7yfrKQghs2K4pUsNZXxdKi5vy3wcvGWsrY9Ucjd2DaLmcS9BXejfomQJSX1wrY25Enj5vABsAzEXgbv1cRV1Cm",
  "key25": "4j5TJbMX9k1epcgAKKP6KjcMWy2F6YGgnMPG8shTAR8D1WMFpAU4hDDoXpKNHWX1vA89Pk5BFnV1QqxqHiGnq9sY",
  "key26": "4SSehFgTnuQxj5pTDj1v5kHdPkF7e36WBCwMGYH9xgZqeSExAvio1nKd7MEyyjbWnMKKGTM4RsLssUmjgjsdk6y3",
  "key27": "3mHy7oyN8Uj3JFYNuR2PzcZMfJB238gK5vP9j19Wvn55LrgWpFKq5DEwuf2Q19rezLTRw1PKysEvy4LPmynzc7TL",
  "key28": "2ZGpsvWVD6xtAZAvx7smpejBz3hsz1f9nbVJNWtpgvQLhfD68zja7qe8SoYVG7uRSWtF5xt26ExuWWJ8nkG2ApCn",
  "key29": "FQHztS24mbR4j9FpzHadcr6UWk51Whmxuta8G5Nt86n8nzYuGi2vTfGs7DnWrrdh2QjzSJgsUQ49w9r9HyVed9K",
  "key30": "3m6ow8vuPqLJMrQZD436GQdqv7mvnzr9c9EagKb59iYpYq7mwTtHzKcnKznSL7tezoXgoSoBcU3sFQyYXja5douV",
  "key31": "499icoi9YwaKrKWQ2iWozi84eq7s9UBYuoH1trKLasmJCYBzxYrrpK3M9sqr7aUEKfHdBL6KEdbbRxqo3p4Mg4cc",
  "key32": "rdLhVQ8peVcbMCYaNs7XeXyqjUAtMFh9T33WtDfKWtiiDvGTUfypJxvHY47m8XHb7Z1fvppxV9943o5vfnpjKqr",
  "key33": "2DAoLGTgjCgRxFYnyp4PXgBuEdjt6gJwMwbirGD6SmVvNXjvvHuxcc5RNaPoByd8o9yKAy7bRUE352LxXw5Qrypz",
  "key34": "5dXbdHqxm6D61jiynLjGS5hoJ245m5vd5uKAk9fDr46iNDn2jnkgmfHUVR3UrkbnfKCMQ74cBtcpaE87Q55sLgz5",
  "key35": "32KqhPX6q85bqLgpsKZv4subkYgMLHJymdhnXeb6hJFsgfSAatikFihou7jzCNyr2sq1fpKF6SN3T4A39pTDcSJv",
  "key36": "2LeExoNV2T3f9v8H1otAC9k2reqwNquRh34L5VMZ4T6PGFuPBwAd2H6qXQFcYmnK2jbtMLxRBEeLAC15ZTMsqvCy"
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
