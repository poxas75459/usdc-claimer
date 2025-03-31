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
    "2Mwr5QskVdxyBkiUGDGgETk5qRF7GrbCEguztXCyoFtrVSCVdEzh4zK3Wr1gpvg7KNdVLjLmoUtcPYQqEx959ZU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsH3cphP21wfLvCJCNw89XySz8hMVGjGjD3aL6LATnpoQ3sHBBEBSv5LB4swFXi2VyhrADY4bbTkkGbKGaF8KJc",
  "key1": "5eMSHVjimfgYsvfV9Mu8RDEvwNfvqgq7GG9iyMk3f1sVcS2F7dqvCv9nn3vf9G42SgJ1rZFcvyBDZNxJZBNwSGdY",
  "key2": "2uhVBggMgVJH5F1WykjzuQ7zc8dS8HSsapexDKmVjUyLkiq1bAhbePayhXqh6f6A5pgcvmRwzEtPJuvXRmaGoagj",
  "key3": "4bno5yASjbWsYEJtoMBKdP83Kz2Xoxh2R7sn3Xj7qM93Yfof1jENkAPpgbQ1hZSsLaC4jkeuYdbprqDuGKBEBBmB",
  "key4": "5NZ8i3m5DRAb1BB3Grgca4BFKjYSEdRs9rt9hPrdaU4oQy1dqDTLah3KQ5MDsGePDa8udgsn2symWHmx7FpziY2B",
  "key5": "5rVNWC5xBpV9BbcNbiF4NhEp6i4WF7NMcLQfFbjbtAMAUqFrSd6Jo6nHTdZhsr7Rt3LFbrZePGqC1YbzxDHDwoRx",
  "key6": "2iTe3ttYNfWEmh1WkDYayYRgywGwvwaAUKULNoMHz1iNrUCryUhxFWDnUuNKWuNjpaofu1s45oLB5vwZmsFrhpxb",
  "key7": "5ess5H7orfetexBt1VFxrj4qi8os6312gn7fAc4AE5Vo9iD2XJS4rwr6qaUpKmK4MniKRpdnN8yK9Q3KZ75Lyrww",
  "key8": "6mVDJSHRQ1KEPoWYVypV4gwFA7XKzEt7PgaUzM5DrKuz1kynqomxpbfzA85zqwGALrp3a1vPYu1PYHw9Pfbnd3B",
  "key9": "u9FWsS5Fetfhks9Gwdo6Dm1EUcAbaESZEa6ztUWd4Prcq3pMzBKg7bX9vVmMZ9QmSKjEczdSBCMT5e7xCbYNzNL",
  "key10": "4AsSgvkWmJ7jnkHGax2occA8iKUdSAN2cSzNRQzWde9xkzhNzNERfNzx8asAZvKnfFaYS3XqtziZViMqs3zu25BY",
  "key11": "D5WXRRbqcNz4QXNd1JHRH6B9WknrbbsoiUayvJo7PbXLKCiAzXNNM8SyrqGDbnXzdxAmY1YCZc44BMn1uYW3pqA",
  "key12": "5ggB8F5rRMLtccXTsHZ7HVLyF7K2kmg54FdoxM1w8ryMdA3sqU4EzzwhwVptFC3nsT9jiuwBaen91Agz8XHY7isB",
  "key13": "2Gtcf7T8CRmBZhr7Vo57e2piMdq1niF8AFeabjhLb8A6duYKngTug6jTtAYL7sU1t3LxKjAeR6VumsR2VDDub6nN",
  "key14": "4r83HYb9UUcXtvk32Fg83eHTkfi7VU8AtSoBXQxe4PKynhYzHaNgDARtspqBNrjphtt3bGaH2jQpNKVMUeN5ibkr",
  "key15": "4aRprKhph4GwDr1618BfiYaFF95aAvqHBCm3id2fecJRvuKowtKGs3F3W5NncFCnb824YYzCfhJhmReaAA9EnWJw",
  "key16": "22RHHkfCTo54nqaSf7V8kkFpZrct4CUp6hkoWcuGqsZPgSPhAqVFCoy2Eaca9WUyppTZd9xBVojR2j2MiPGgV13J",
  "key17": "29od77fjaYVhvosAr4cWx4wRu1wmVGUfvmjRnB1RZZUvugFgSrVK6xKLxeuyQDd2QaMw9WvpGMsErt9J5DkJf4a7",
  "key18": "4DqSMUN52Py8s5c5myVLSMtPaCY227gWf8cpmpoEHki2dZmCv4vhiRLzLSGX5jAeUwumYQuKcHbocBjpgGyHXvzd",
  "key19": "5LFWEtXe9bXNAsDMkk2tLyKUG2Uh4oXqcibaokBGuxgjcA1t1p8R1YFYsXUra6KahsgHQTLmyzgwEjQuYjPxbVCT",
  "key20": "5Wc1rcjQbWGa8PJCX1Bkx7GTwwTVNwYunGXConY9rRKxpRC4r47KZhmdEMoMR54B1au2LUnZ5iapFns7Y1oSFghH",
  "key21": "2WYd8KJynHTosJciYc7vCXymAQbfhM7LFm6azqX4yVydyqjsbe5AwhYd4yjRQPdJ3jHUKdiWUPCh7VB69AvgzMxu",
  "key22": "57K68GYH4ULvyRiHStcj26FBArvESjzGifpe2ZQrAbFyvERQBtHJqXzNSCmNc2wDVxmv92TPrzwE2AFtQH3kAu5x",
  "key23": "628wFsxA272SyvxuRA85nAzegMHbvuFKAkXvRFmT7oun4T7HR6fCyz9CjAZuqNixnBqZMwAfbTSaVXJU1U4JD7mG",
  "key24": "4vfNH28R1oYiqij7JzWN3sx9XReCFSddGY6guVJPi5C8fYjgoy3Kfy7xc8HPdf94mLRMmSVcgjGM19e8M34DmBhA",
  "key25": "5UEbeyfXDmHGGjQB7TViN8tYHnM7bcyGiy87FdGQadwCeMYt9WbbUscST33h1FbYYCsmoDQzx1ftcwcYGpDF4LDM",
  "key26": "2uoh1MLT4jHGTwoG2RywTVPuHEjgUacmmFUy6u3oQVXvZBcHWL6UdNEMdEmFKCP17RNATkRUusuxW7k7v9M5p6rp",
  "key27": "5pQegk3RgMcLL3dGY15H2RaVJJmxXWh4p2spfGthGUHsrsDhwGiWta1VWNStzCzk6eVoNp6NLWiFkfWcuqYrfYj7",
  "key28": "3dFFNZE3MKXnJGEenTGvQhzQDhZpXUeB2QDLytbaEy2dFgF4NyNcZQnDwJcQ26S3M9REuBnKsRWJ4owhGtwRxgtQ",
  "key29": "66UXYNSnM9BjmqbeYiAc4tSdAzAWT5nU2fbGzUPa9z3dJd6bMhmDDk47839Gg5M1rUKVu5aQe8rBHS5VXKsABv8e",
  "key30": "JaR8zsh5jhRGhTSwnHPoBjLMQJ3d954Sda94LSom9RyzSrvTBgnQDfZ2WAQ2am8C6zE3WDhwvbZ2niFrRdTtE3V",
  "key31": "4XhSZUzWodmMAF48mWj9ZbACL6tZE9rg7P4hsQg3RuumbxhJ3i2tPVAt5CHfihoX5ziQTqW6FnAC3k51HoK2P6QN",
  "key32": "26KfduUKqHgXEcT2wQGbNBKXQDjaZZYqsTiZmjrQHFm6oYFiCUNtnV5pJ1GNX7N3umqrFA3C6XWSQXNV7VaEZugJ",
  "key33": "3GBP3ka16H695eES94u6sWZ8MyPC5oApW8G2uHyeFnERFjp1cgQPN5uvWt7Rgm94mrujsc8cqjBzVUvcxKYBfjPA",
  "key34": "2sphxkcp8JmKJ32fYk8se2zkpvFhDNnkk8Uy4sBRSPk3eyrqfSSDxWNEke6e5tTvq8w8egxggq8iBZeMmHQe8E76",
  "key35": "3kSR2tu5CKwkXQq5hbRoaqxYd9xFURhFn2vF6nCAiKsafW9k2AH1TGJAB28VStiMyLARrDWewdDa4aqUgU3oaJdu",
  "key36": "3Y9oY31ufXkyyFVTHcHYXkXGvupXRu2xAwLRY5npUiFxMQR5KhFQ3RzFaik4KYZ3TS6TCMR8m9PP9gCidnt3qyB6",
  "key37": "5KAHXXhhY6vfUTzZ2tbf4knCPQHiUwwSqehtYdkEPLXrWPTkqj2koM8atEVs3ji8WcfmjzUSHzWDEVx87CUyKvwu",
  "key38": "4Q9JzWaQy6tRsvPsrAa1p3yH8HzndxRjmQAGVrVRmLw7z2NsXTj2QwngL5a4ftDKt1ycCHaRqopQWbGgPMXXWQRW",
  "key39": "3FZU9Sjnam4RAKbAZnJUdkTMhSCJacvt49oSKFP8Y6eTDfp4hi9q2kbZrAj63NYomaZbHWYpcLriJ6WX7HHH8GFC",
  "key40": "2DceHCRsfhYAR5gaWh3pywUFkD3qFLcsvTs6Lpmz2M2utwYGdaQefNp84gKAhZWe695eeWf9XyYoN53odtYMFe25",
  "key41": "xcqirKsUEpj8JCJcj4evbuwtfMghyFSJwxrMXVRUXRkW8pw41WsS5YT1kE49RmBEWdLc2Tq8etz2HMz9ScVLCsR",
  "key42": "2TiVdEs3Q5H5FMhiS1V9xN9cw3V36oC7XEzTykjz4wAp9RuPV2bBK74dtbxks2ED6NBwJrLsdjao495m45Y4q91v"
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
