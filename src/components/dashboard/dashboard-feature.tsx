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
    "4tSjatTLc8zSNDHQbZDHVrRzF7V5KaCRmQoHJ6wMhct4VB8ZQnXPQQWn7BQUiRGcjcTtntoScSHEridDH2TY4BLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrdUfEXe6QJSA38mHSw6j6dDpXZhi77jEqYa3Nk33K49XGMjjBdX9A4FKACyHeUPTsWrFedDe4G2wnoBVQZssEk",
  "key1": "1L8cAkQ6V5GAajXn75AgPT95pXDhp4PEPpbMUAUCavcUWSqmebABHkYT3Mbd2jk6b8x6FKdrzkvrCGWUYj6DT98",
  "key2": "4s6svKmwEbF2Wi8r5ENRDSC2M182F7Qvio5CW8yPKREgNv2EoLqYaJZxQV1wgpUVRRCjVYdkYcsJUWkN5Wi8D57Z",
  "key3": "653bh1ybsKrctozWG1BWAHD21HD1tsy3dvo8WcntDTKNoPAvj1GLgN7XfjrZrbt4WvR4u5KDerbzkhieDdD5HShe",
  "key4": "4PMZdYngFxKEKpV81PS6UxiiitbdJhxLyJcq5BEUL9FcxaPAREcHpUYnQHGw9M682Qap1ktDwyDsrsUztLvz4s7n",
  "key5": "X4Gx764tp9wEi1hpXwczdY1J4EZ68kUa4WUUJWTU1geK7vBRGinGBVzNR2RHyA5jCZKkvCLTjzLdrM6iphGFRLm",
  "key6": "24HzJ3Lp5wtbM1xgsPURtR51EYa3FxfCakFUkvXiqsfF7bdSETxMWPdmNPePJD3i41yYr9WXpxo3HektwAvvKvrn",
  "key7": "4zm9o5dKLMyyP6xKycBZ9SMQBQwe1rMeJjykUrvEi23Wn8Hto9CpXghV9EKAQgXGWQaorKdhNa53NADHSSoFsjWV",
  "key8": "5aYD8tD1AmFBdqqJRveiLqDSkk27XjxbNtNQnnR1GcUMjZuDf5erCQMFsag7B4T7HSTt5ppVHTi4YV7aH7jGkz3j",
  "key9": "4LuRnJDW2ktrTQhaqMfTY6HzhH4GzwUDRQpbfYymuzxmXsdkg9RzukifgKpkGdsCXsSV69mQC6jg73X5ywFZePqy",
  "key10": "3MZkK1kHt9bkMcUN7pqDpmZiwa4yBUphM22h4hYe2MMLf8R7JMtM78U1yvgKrWFyXS1HJgiu5TfhB4VWaHr5auuK",
  "key11": "5h7VyreYojxbuhYrmQcihwYK3c2bULgnyoteNrBWBoj8x23W5Lw5ydpmubUKp1ENJJyS8PCtTYGePCrh77QNPkaX",
  "key12": "4jEMTYg2j1hfuMc3akLZs4KDYhBH8mP19rvtZzJFC8ab7vE5wdmQ7qe3o79noCe7z3HCc8US2HmEzCCVLtDmcoyX",
  "key13": "5YhEeYquS4xYJzcJTpnEUnbaBXsne93QonS54YRaaHs332KavcdB7YMGVwL5iLZ2zRFH9A5hPu1p11wbGQ3kP7Hn",
  "key14": "5nsZ63uUhrkWm2e9c2hJeLnLgX1yi3Ro7Nh5mxAVZciDA8c7QLRLNq1Jx7vgzamvoi8xiz25FKxT3W4aRhRgDtTr",
  "key15": "4hmjdGvrarZJ5Vx4tP5A4PCEfvLhe7EYvZ8LzumMXrV6rcccuAZbRpeU7J9Lm825WTHx6WvpjoZJdRSk69t4Nev4",
  "key16": "2jgpVyA7dCSxjPuUnSrAujXe7xbLfeG4ynN8JMPHnsXdELWZEiXPoHwdWJBirr6ruQcZktx3Bx24PNiWTnqKxyxs",
  "key17": "88ohxX3UEVcfqcvejga1U66nFBVkiCGk87fa9tf5ygwPzyBtybxrEyKvE8WCCko1xj8vXz1xf6yMN4iqYeRgyBE",
  "key18": "5XNWxjoGNdjFQwbD6gK2c2pDJP3JwzjCxA7AXsaxt8ukLwtYzv1zSWodqsyFDgSDBq2XQeraJmnWv9h2eBP7ThHv",
  "key19": "5c4CK6mj4MKp63QUxVrVr73WjpmrBKcqZiwLfHBgJZiCga8acFpcXfDdFCUWQGsrYL2gquXgZAxSQYs58YshfHxU",
  "key20": "5vsDSchnpj2CJ8iMjLJvc7P6P7u5yecYdVWRD11df4Z7skAhXrKzVqhD8sUMS5RbyRgoSZSLSJmuYHie4EZb33sg",
  "key21": "BhFZxgCiHwXEadCvPbGjcbHvKPbm1qN6tr5hheHBXDqvKEX5yyB2QT3447HGDepC2kgECoBqVx7xHpHWF7uwQK2",
  "key22": "3rwtoypmQre76UzZCzBnwxgtpggBosQQnFFHKzJiuj5hgwA2RYBpHgg66WRy2V4JtppWMeVn9H2fSL6pVV1hi78Z",
  "key23": "3cFxWouWYiMX9ggdvHYR36kx1fs1sNaCK8Ymc9wMWLeUFYm7gG1Up48ZniJqZnPsZHsKpysA86eMdxY5FbytPpZm",
  "key24": "cEQERCkoqQao5ktVihTUH6xNBQDNDkZU8ApJVNC8bQn58MKSxkkk37BwVZ2jUA48AVC8znCBSeAyNRYbzcxawjF",
  "key25": "tuzvk455KU3pdXh8SAZ2QbKz1VjViBdFkhNo47DMuGzGCV9qpV28wwifJLV767N7kHXgDr1qCXckamhPwkKztPJ",
  "key26": "4H1ntj9HM5NJBsuziFgU7k7G6Pn6gtv3cPMMjySP2k8StG6CnFtQQN7XZ923DrvNbQumMvtvS7MV43WZe18uqhtr",
  "key27": "SV8EH2Fy2ycjTFSYT9Crr2hVuYH6JBZHKjsMZx6HFUdQg77cMVqA2CC9nHzQ2piEc2bYrAirAs7CExfMhpfTwPq",
  "key28": "aXik33wQnivDnD4hBPUegYijcrkBXryZFi5nG2uUuLo87vvF64BaVkSSwct5fhpAVcRXfYQf1ATM9EsEEaPkvL7",
  "key29": "vDEakYE3bectNoBH5ShMbXbdTwaUzaZReuD1qDumGzFMPbGJJaunP2rAhifU5Kv5Zp2GoW5uRUTXjeeR7JWLv82",
  "key30": "5svB7kJtsLd1HHQ8jK7CHHodvgqKGWCD4UzaTj8z5CSAim1LwGkQNhsgzLsrT6KNEG5JDMqfUaW19FyokzMnY9X9",
  "key31": "3ufbn47XcNB2Hs8RANxaW4jXc3Sr4GhVeduAPrm3fhcdFtURau4ms6W3ihWz3MBMYA5uVK1CmZ2C62kZCZECRrGx",
  "key32": "4LjjnXy8sMiBMucxtP7qyBkaW5VaxV4sxEQScF1LYgdczoD4hshGofbhQyp8K6VE75JPAwPtXKmk8CWSzMYL67xJ",
  "key33": "63Hg2untM2jXfgoHFqW5KwJa4ButpzFskqgJgbvJrNWnmUN1W7yMzYYK7ReYAqVCnAn4Dq8P8ya7THYRqWhFagm2",
  "key34": "3cVR2DgvnGtpLaH87kYZ9XTkf5cA4XTVyn9HmQN1MBmFX3xsZ1LGQxAJpaoxB4iHqg8orcXaqgb1XLkvJj7CvdMi",
  "key35": "26Km59JmWtfmepU65CKM7bL9pfgeukdYp9F9MEF3zs2M47qNQpzwjg6X2AjNRRrCVYFgoapSCSc6k2LaJE1ACztS",
  "key36": "GTETvEH7QitEks8hUxaDh9BzW3WfLpqfpatVA926HSQczZM23Y8zGyoadMRyGKFhpWN8ezivetD8KC52mYKr4hf",
  "key37": "3FKjhpiB2FuEAkFJhCWjXvyTSjHkRwKGg7W3Dnu8tcMoUEDTHMoR5o3rkyTArGnf8mZafMtoJJALNzGPizHcNPQZ",
  "key38": "28rVdQun6moEWZNqnAWbN4oU1HshqT3MtTBepFG5LHxgaJj3fq8pUDBxHKGyRFKxj4AWG4zjFFZZo9hqn6vGgtb7",
  "key39": "2XYABatfZvWYwBq9zavW932QdKDGQBd5wDWbqBGnXPZSxfzAZBtB8SA13X2Q1JtnJyWbDzYkP6V4EadGrraxnf49",
  "key40": "2DvSDV9S9duehDUDMWYr6kuJma7N9aULTHt8qpy8f5NGmyjhGnL6Msc8tAoqLtdoEEGBeZsoNYazH6UZZVDSEmLN",
  "key41": "q7oUxysaSCBNdNcbngGkPeGS5GSjbRXU1s9NftSHFDRcEGoiNofABZBPctNXLUdgkoJcR8QA1KezuCisSLNVuPa",
  "key42": "3oysDGr57mzJkW7rjrxcwUtSDtEds7kUD2PW3qrWFwMzyNQJy198yhfGfELy1RMwXiVxiPZ8ybLJGzAaTX8N6zHx",
  "key43": "EXuzygmMHNA4LUAnWpVpbYsFy3p5TkHhBVvrZSP7yLzdvw1eSTcqcpj2dnYboksWxEDjGaU5perbsNoLAdEZSba",
  "key44": "4qPzJP7KEqbA7g7X8LdTZaFjJgr76eXkAuKkbmUqNHLn5hk5vAARhd9zgPqJL54vY5jvfFUUxBUAoQFFdVsUkQUa",
  "key45": "6TXUgF6TT4YU7jUBBmQFmtjrj8w3hyDZC9BsGvsDptrvpZp4Uf7JwEaGKrMg5CDPEA6xr4Xbdc3pUjKfJYHM1WV",
  "key46": "bBoW5rXYEVQcRB1hSDUHUJRPpQDcHPLjcgpcXZPos6oebgq7v4PmDk7QCpTdByijgaJY7ugtWF8EwAWF81ZV3Ya",
  "key47": "5UASHv26aDTqF4XwG8Wj4Lx7L1KoQRNyZnVCiW7ktsMbsqmeLhHLdjQ4i5bhgjs44Sh1B4eVjG6XMFCRnjaSRE34",
  "key48": "4nXnt2ZpyvEHLm5EivshLMWEchogGjfjhAU4TjSi2s6YWhyGtQAvDzrLFxxyxWaL99v4sfbdFU3bmowVMoy2xR18"
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
