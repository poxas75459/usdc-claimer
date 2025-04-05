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
    "3ZbFYs3jPZdPAWTjKBRtUSMprQVzn2zkF7WfhYX43MUPqMEPuQuDmtaEVj4ABNqwqESrr7cc6L8zLar97rrZAZVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvNuzLomD4NyyVgzjxtxZEboVK1pgQmHk9zg9L7ovTpB3dURB1uzydaSXycjrRB1GR3vbS7a89Kw5eDVCzTvoYR",
  "key1": "4QnyJ26zK4PrtookRiGTJzcyyd1L27f5dZPnVJ1qFY2RoeEBNGDxowjoJtyoW8wFnndM57X6o5SKDP1zzKY7BFDf",
  "key2": "2Rrk2DNRxxR4vYeVyuUavq9yBPx7eUdGc55rroiRBW6LXaqc6JbCNJKDFfrsahxmjA7KQz7mJggshAPXLD3mjuQW",
  "key3": "5yRxA9iCAKMjJRCKAQtwvBxqo7YWZtTJ31X88DK6KiKFeTUx3NR3mBwHpJUwsrthL2y6QJxCez4KPvdpUbDaTXKw",
  "key4": "2Fbd7YATDgWKrF4EoQ75z6rKBU1HHjjfpW7suxnc8uVapemHhuPUWpHmSX75hYTY1s8EDtjrKJxedcGyDsNC4yev",
  "key5": "2HtXAUY9gLeNNy8Uw1uCGccNxvPWby8RwtMNCsU6ko15HcCX4MyQxMffkvW2EuDkrpLK7gK9QYYkDDMvCn38VMyJ",
  "key6": "5Y6m9dTzBbbLQAgVneHpKQGzFqCMiLdBqBF2mawrSrq4mXCiZpmzbuCrNHvvNJYyNEKgUiEsQMmAjZVUANFtKQBn",
  "key7": "fS35Cutr3kcu1JAu22PeSY3c4bxEbPb2Kvx7idria6JEXFrZFFkxoC3pzGEtePZgGZc4TC15af75naVTQm7BqFf",
  "key8": "4iBU4gDshuHt4GTWGtNKPMeswbUAJFbxxstrXZEdragb1aezRjgUgHMNTGk3bRkyDe4XsBG2kFXBGYbJardb5qLH",
  "key9": "4JcF5P3H6MFrHUy8KRWdaVxm2J8J1TcJX1LhjPDi6uzrPmR99zkQPa9sgEbzw7aF9K1jAB6TRNpkGbXxb1Kppz2Q",
  "key10": "5LjSyhGsksbgaKjY7LYJBuUHgnS67u6UmGCAo91fgUsBboMPgfQESHrwpuT7LMKchETS9keQeRrAhz9sMX9WdMuX",
  "key11": "5ymYcNJMyw6DabmHE3UAAgSg1iT3zxmUxHrFFsQTCQJtSp95egBL98H3S2hGhXnPZNRaeihaz9fDgeMvFCDRsERp",
  "key12": "2aQHaL3JAQsvC7aU4b6tC9RwGUmFPe91eRwLScAbvkGspxRMXnABLfLdF7j8Ee4SBscvHddq4WjCiHeP2pmjTbc9",
  "key13": "2rkb2oPTR9W7MqmXVTaGDtNVkgmY2nB1RWJhF3NX4GUpyMMfnYwYR4xjq7VTLs8tuBFecjtRyL1J45f42UgG5WKu",
  "key14": "54AMdgUSutZtvM1n9Zky2fNgZfcxoQQi13QCDthVxGc3BjmHtHWz9nnADVAWcbcgajUeW8o5KDkYchUNCyZUJmRX",
  "key15": "Bd1E5m3YHpvim7f8XG38JzTkoxW9vy693vo2RnAP5CKamFaGpQZoW52LtuJXxekUQNBFNB8zEEQPueyMo8EUyYg",
  "key16": "22m6ZFquazoZtivTLUKubakTcH62odeszAuafecm63e1Tz4jSwPicsVJPkbyAvfKtWehkzoHEErkDYjWNwW7GM3n",
  "key17": "4q34hZfVZJtsRZ4RmYxsUbKhuKx3Zi4wYoXqd7W4aTnoWRaGuXh92MsFs53JZXnCZcFjKA49hkuboxNSAYQmpDdz",
  "key18": "5THRjoGKASCgkaB1yJLNG5qXupHhRY2pt6dK3dChGuNdWom4PcC77cTmGSr1NeyZGbrs63YYQPvDDqXN4JcX2Mmg",
  "key19": "2smF1PPPtUYTyWaxXt9bt7NmQ4yw2wpoAWsD2XMeCc9S7ybB62wUV4CKGLRoe7Pw71p7sFy6Q7dWr3wzsdsJ2KNZ",
  "key20": "3Qu71kSCGWBbseCqb2ujDpAQPEUUL7xj3joHP1qVEkXBeHUHXx3wrvypM1fvasYvXAdzdcNc8tqADmyoQbeQyuJo",
  "key21": "4eytbqVoKe9kwxNaizpzm3iTQ16hTD5bkEhfSrXSJLzm6HjeTcVdrNBT33fVRKSFBbF7FeffRcFzreX9RR7rzrf5",
  "key22": "48aX3PbbaWe66r8gsbfQFTfrAnu4rpuJ3ARjB7wfzBs6JVRVoBVrsTKGeaWKC2iDDkbAt99PHNzkCEzP5JxJnurX",
  "key23": "ZhiiJ74cVXbvdFN9rkkmZa8Qr3PUNbda8DUNdaPG8s2NL1MEdsRYMbHugcjTu2LPXzaWRJW6D2d9t47X31VLLXm",
  "key24": "5XgP83aWJQSFJBwsxwKBusDDwXdSnecp6m7nGwQHhZ79szRTMGSCPrSGYpLWdzK95C2P9iwwsGUY525P4iMXVDRJ",
  "key25": "436Z6WFM1SB1z4DHmAMZdBXbWLpakC6eLukzArojepMsyWjYj9mbsGrgtH5f6RDFzNLrCcAZucBbm2fSAFPmymv4",
  "key26": "5ifw7aukVMG2b3GUcU2PPvPFcT5Cq9TQqiAr4B2jvWL9ZBat3mrxGiX8NHTtvWsaWVLzn59d6cbU9VYktggvxoCg",
  "key27": "2CQiLzhzcvYmX6vDDrMfQncrN8kfWggAt5r2eXmpkAxaRwVYQGJTdwdB4uRCpsrLgZV4g6pkRtbtr3A3vC8RHL1g",
  "key28": "4FCMmgEsN8Db7gqLVrb7nJbBpaHZM9ZgF7265LdTty96586YVjQdaW8vLPLcBv483WZPeWR8nu7AkkEjZz97u9ew",
  "key29": "3eiQzA5U3EPaDaoNKMKTBjUtfbZ5QtDeTf4RMNVksnH7qd8X6Jn1kYbkjgJxWaFgiE3ZLGn4nuk1kuC8dypN3UQm",
  "key30": "4WwsYFXSVUwEymquns18owowzooYK7zRuqWmw88ZxpqDJbK87S2M9FRHWkLRCfRzPxrhPhGU4Wupvb9jBiDwGWFn"
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
