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
    "5WesQsPyGTuSyTSQcdr9CoU69cNy9q3uTNJRxtCDmKLTN7GNBnMi4pQeE2Zrg9h3vCgovYJgLL9zXLDm8HDpZCY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CHLgHY3ZanUAiy7WeEXm9Ba5geWkXcYCzfGCTEPVUZwsx7Kq9c98jGf7dFbqEVSRSMfz6cM7BqxFfN8s1rma7Tk",
  "key1": "2zK3M6y2P2rMKxp81HLcCT8Rr9CW3fEfXqqkNnBHK3WaUXYBQMScpzHWs3tYNAUzgpGxXyRVywsrVgWBMYjfXwod",
  "key2": "3RtVs86RkartcXCHbHsZotWn4wZCajmWFgdPganfc7kNrDxXWvJtQKMhasiHVVMaQfkXfqAddPaCqB6DnMZMWD2i",
  "key3": "61xpmkkc9xnNdtYcDntQzFZt3yqaQG8am2mFiYN4mLY6jKiikXjtFTk7sTCiZbU8QmG5pxTWofTRzxABzae5Nx7d",
  "key4": "MQjnqbKcdS4hZamvAWKPaeqW3UrBnQiNGaTFudHrSmVniVjvB9HtupmqfpMxaPRbQhUKd8K5oZpRqKkk1ibamCF",
  "key5": "45cnnYHGj9Uti9yf9xeS49LYDf16FntDvshoDyxVnYeY4YVFbM7V1q6DDQoebVRQu2H9q9Ls5qzJHNmFKU1YVeLE",
  "key6": "46S7Avb2cBPXCvFmYDLYQzveLNAfw6YMUu3oc4eqUXHoGeC2vpXSdCByFGFAtvC9MSKn8HX2PkK895xPxWf2zddd",
  "key7": "xwLDEjzrCgsBDDQARbSugaoFNiDN9K1We9QqZ75D8ZqVPXfQSZD1Z8er7fJSBfptU7sCwKi98jKyDReNK8Ef7Eg",
  "key8": "3HWjU2BxbMLFfzWLYh9hbQW3bmc88oDaJPhFYgXjPirLPRj6zGHhug5CdaVVUxvodpmmBomah3bFqSdit2VVbDJb",
  "key9": "3N8iHPxAaeWu5D6FyAntKywqEAP8JJaeqK62xpud1VRFfoT3VM3aoF2B1iLTqPv5jgqM92WQS8WtzzYuWgPFi6TA",
  "key10": "2ubYzEYaLLnDHyvsU47F2ZmmL5Z9Xfvq3V4YMJy7XDs5n7UekYnqFHHJXz3ydmHcdGvb4KvxmGjNsDd97U9TWL54",
  "key11": "3uy7xpcxKQpejMDCgsm1UhTRQjUXDnvP2p6qSkMSVK7dNRqwSrnXofo8f8yAgrAenyzSesSFeyTHUyaRJZoCsruq",
  "key12": "4Z8WD6YMQT8aECbLf81iX4uzZz5L6LgVXdtjcMMKafcfXoDtSfktnebMiYuiXqEfhXn2KFLMrx9PZpLVWPvacNoV",
  "key13": "5a6ZP9PT9tqiHQtRLqMbfpNupYKZX3gLa9H4YWVv7FCB63GaWrq5ADdT7HLWd3yVC9LPM3iYTn7GMtBSGpKdKbtq",
  "key14": "5t5Er2yWeLXXyJuZ6bVUcVzdiwrmMEyPonRPuwNoT82qCZLRLYzq46ndabrQZpNoWJqJjgs4BojUKsr6d8ZUNxAn",
  "key15": "3hyWved5qgETo5mVJa6PYhtp26bUyg7mAMt5XpaB4PxopTvYzyVPXydcuwz8bcdsoBB9piPVEDbBPv5xVfBy3Sqo",
  "key16": "3E1mbHLdE7W5ZzvehwvKyHFmc4SgKj2aGnAV6MWWjHD341uQY3Q5jWs5SREGTewg4ivdQpRKjYBCzoFZkbtQegQ1",
  "key17": "5UwZ67cJtnSFytga1N61NyYejuwH3sMvZptjXYmuhw4MX7DDCyicGurUjFdcnAgBtXG1yzRKjLHG4ECJB2k94Xps",
  "key18": "36evZdP3RQZ8oteJA4fKu9n3a3QHHMsAQoRXbPmaSZwRYLD3pUt9BCfKk72CqjaGhbbHc1urUXQoKAqpPq3n455g",
  "key19": "4a2YeDgpwqoajb397Ku8rqWTWbjkHvrzMyLx8NCMfM1ZUYBzmkQFqA7rt4dmGdKVERWZpsAZh3LN2bRwPbToANG5",
  "key20": "5fjAG9asiAWp2diQ9i2CLPvCfSeUCgvo6WAEj1AHWaYb3y2ubJZ33yAjTxGVukxnbF2pK7LVAQdm5s3B5AvB8gd8",
  "key21": "TV4MFiL2hsLZQChcWH23ZwtvLB7kK5v22ByhPnCJMrgsEQYfD1KysMxBRRjDUPEf1KA2w69R2h1R9Ns44abPZ2M",
  "key22": "2EjRYypD85cEqx6uNEAeYEZWNLt7bNvYzv8tmJUa2CUDWeVxahayqmr2y4QezDC1X3SjrAkPDyYTtaVvgZNKrawT",
  "key23": "kHqrPc2jFUKhTNH9xiLVNGrQeThs8HvFD6hzf7Rky9dUNmM7DdRkd33oNf2LyMBTrTGHdFhnhLknp65wahDch5U",
  "key24": "KvTHUZv2Q7cBuyccdPvqidcoWmfqhgMYnMio7ud59fxyanSbuZsL1wDKUnEzFqF2FKHXMk25iEkax6Mqkp5vffa",
  "key25": "5jXMLTGU98GxXe6rSwUWL8NMmFjngE8HcR9uUtpPon5YLsy3AmTh67p73u3N3H5M7uHUaKP2JHSgptECtwu5Ka2K",
  "key26": "4V2RvXLCZTaagV3ySMZBKkHxXmQcPmyY6MrHHKDSeKkZJrejsE4uyUkk7yGCLhLEDBKSUJ1Na9LTQ6Yy1V8iYGo4",
  "key27": "3rRZEwSotzobpocapx7ioacuDFqfhpAL6C53WwtZLfEAe9mETzXj2ZTEWm8HbvCM6KXV52PE26qQ96XDhJ8kQ5oU",
  "key28": "5v9CK1ScvScJ2xnADUNXyuXyWD4qK8Ny7iRj4CkczQPhHwEWbjCYCon34KGgnEnmtc9YT462wd1NCcMdUysEdyah",
  "key29": "5KkmEyFGtRThcgpLw7v74xu6CYM5CJtYBhdqgrNXCvhAcrzCi5fCcyvzVRWBK12p6NDdvERAt1LmL1Hps8aaRRh7",
  "key30": "2PUB8LnCJemRZnbZVHi2sWV9E6y1K91y6QCAVxSVtXF5KKF5uDGYbiuGf7u8bLzZSbbBFMgjifNPKYD6ohyYLSqk",
  "key31": "5PLrNFrACpY5aXrFekFiHRFmQBTHE6xR2QUcRJf1aRcCiUB1ZtzAwQx9PPUyEpu1o6xX9XNVwffzirmsrNZ4aRDd",
  "key32": "MyEJzT7oPHnoWbHMvgKzWWJazaRM7XDEXdA9H2gJycdKg1NJnDwxhRzF7CYtHXmtJxg37AucqdYtQx35uWoDLr5",
  "key33": "vmu7F18fXNwLzb12CETqipspUcbahy3aDwFm44SEJ38M6Z6tcqucm5fwwWCTutu8pLBe3BxLjcEzLuhAsKVqpB5",
  "key34": "5bxq6zb5xGyREhiuP3zt7YF7LRro7kV9cdx8x6RmqWS9QEcqQpagWgf4cwq7ogofaPgrxJEEvz5dtTz1QBgiS5vJ",
  "key35": "L6NcjHnvqwZEU1NkcKBs7m5v3UVuL92p9Bm8RgNQQJFa5nFrXyvZB5M9Eh6V9Mz1dca9Dyrv562T3T4V1ipYP3V",
  "key36": "4okHfLU5hsB3FqBsYC7SMFdL8cwpG2iRnpxPscoihDpUdMj8GCZbGYBwQ5ETkrscEPS4m3owzvSsd51E8D3ksu12",
  "key37": "4RpgfJmHhSkWRdZWoyDHjL45CrGfRN5HZZzeVg9xuczpt1iZQzYArBeCWBqAgpnhpcGdhcnsMLgMVrZVoJD43nxg",
  "key38": "433Cc32m77E3q6ygKvULh591LFd94Ldo4J6QMt86LcDbWg9ZKKHuAzCX8NkH1GtPmAdnqaRduxaACo1CuhrMMCTb",
  "key39": "4PFLpsQWwmtxyPu9Q6NE17DXAToHQoJepJRiuyHeVHWLPsuW9GRHrirP91E5wnvNiZwm3bHeAcLTvAXpazj27aad",
  "key40": "365hsovAHCrxFS17fSqi7kabgWV9yyz1BCEKZ2QARhWf7JgsEpEmdiwnRsJ78tVcstP7ZZ6kHUg6NzRpDjR7wDgZ",
  "key41": "5Qf6VnthyNDikEsEBoR1T2Axt3ZUHvnjCvGrNUCdCwfjyZhmw1nopBu1QsbrpxGW6PhMg525Mk1Csdmhuyd3udWi",
  "key42": "HVNY1epULFghrY3HvDk53vL4Ks28q2cvZGAGX3JTQZn4e1AXekMmKGuaARCiNiSL7UJaHzLGA95YNZDZPgLfPf7",
  "key43": "2Uohve1BC9FuKqwWy8AMZor1jxe4maSSq7JweATSkvXH1J3a9PFR6JdRDMjrffNfRhCmGKXqMm9VvWaXUuwAPhwL"
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
