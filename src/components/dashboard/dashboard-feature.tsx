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
    "5DvpL5Ec6uEexsa38sx4RuaF9kEw2qnYgnTv8dPsfbgeN3aVEGvGx2Qng4sQmppLGYHrALmM4HfMobVF24zspaaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbosrrZpG6Lv7WxPfLwxxC8dQwAMfXrrMJDb5AiWzetUpAtwneJYyfZt4JAR7VWZegtMGY7sY4iCaFxEjMuHLxX",
  "key1": "21kHt4dK696tZPYNv3Y83au4jX1QN3ANT3Qae7gdHe72ryZVaNHc6zQSipRY3KSTsUAM15zHG4BDCV2PuxkV22vA",
  "key2": "213LyJ5zt5MDdAfvW2navfrJVGNS5L8bH2gBvXQfo4TzDJ3PJjMQXEZZVimVv8eKCUGY5115SM2UxGyrDShCVR1B",
  "key3": "pARsMf2tAjQykqePksLvyWGx7t6iQwjh8CSArtrTBd9B51WviNAYCxkqFdezyQT3BhA7QqwwaD8sptymL55HupF",
  "key4": "2epSuEbpvLe8V6WAdZd9qAv2aLLgNqr68wxCQgcT534oUtb6S2RGDkzE9r34G5bBAfq5WpSPVCKRwpfU38sq2rw5",
  "key5": "7LiaDio4PnMNnUsQj4c141WvbZ7ZmCmqbrK5AK2pbGXxE4g1uUeTGXDFHFFLVSaewHcpg7zayNBKc1jrxX1sbNc",
  "key6": "2JjiacJLcpamng6pHMqRsMSP7cWy6XnULBJicoz3PA2dTPcRxXbWqA1hvyQJbZ5yC1DjaXnuadSjer1CFUiVnFsb",
  "key7": "YPR1iwRMj4Sr152MYtyE4hwiUQaASP6uQ3XZC4Y774Q8pmYHENXGYrFnAdtZS1D1DWoHu87EkTc3ppF5ojfLHyz",
  "key8": "4eKqAZpo3mciYcjabnDk8BnVdxiqyfnu4mgqzmG2EMiEgGZi33kWBG3FxwcvGwt4EBKGcZpPzWJNfGV1hSHWzpZ2",
  "key9": "5sWvinLRWXd53nYnY1rZ2ea78raCVAX3hWSQ6WqpuSDPnjzfcMxvLu9oy86rN5eWyidre68uPQPbXtT3FeHyvtBQ",
  "key10": "rkJ2wuJSvjX1dQYakAbLWBrh7WGXQqxBCBJNFauz8aMeS6wTAMHMPoxmFLBaSpxKcn4cutXZwQVLY4GYCqNdgTD",
  "key11": "33DiasG6ppsY4YmpyXHgig712Sz475Y3sEo1Y5X3zL6bFgprd49zB7Hp8Fi8Uk3jLp2EBHf9qtfVmfYWdrgGaUE7",
  "key12": "2qhrinhTQMKnQ1uhpp4RVMhspnn7i5bsXDpgjHfxoCyLrK5uKU4ddKee1vfqJKStSPN9NiMumqvXfuNahV3J282G",
  "key13": "53dFZZ7Xwz8rJ98rSAvgsMMjTZ1bxMjD9iKzN6thBXNa7tTuaSMBXyYgHh4JvikU2i5sjrYRp8gr1UgEnS8QM4CZ",
  "key14": "2i2RTVHH8VaNZasdWZKfnie8xFWAGv57YCeSCATaQbAfgfHtfJkmJoBnXqT2N5sf8KakGEHyDr3aXaHRr7AZxjhu",
  "key15": "33Q4aB5shZvFTZ7hXpSZEjzgQV73u6fhaDyWvNuJXY4eavtWLScqpqByY4VV3Viwnkog6Can1istkuNtstyHnNJ4",
  "key16": "4vG34T8SSaC3iA7LnADcSg5mB4YUmFFdqCGzimMRBV8ae6UnNQ314Y8ZE4kPKQS7cLradnbKzU4sXHsMBCHhZLAc",
  "key17": "4DUaChyfq7ewJpUxq17dNGu7T7MG1L7SSjSaMCY2hsS9VPwatvTfuUGk48BXhSQczsGMBuzbfb8g5ndbTeBUXUzz",
  "key18": "64p6e7U32dgdr6t7dQHguE3oWWSQHsZuHEhB8ESTh7xdaxZqfkkVEPLoGpFDDSBzZqJY8rQemdNQhWWMHHy9Yrxt",
  "key19": "3zCSmUhyw75vn7z2WnFHA1j7MR686oGtftcdm27sHS57nQWfspN8RotD75dPYTABFKiqpVYnSh1p92Fj8z3Phw5f",
  "key20": "42Lae4Yi1PSNF864uCw9Xe3jLUGkeoQbVQXrb6cbB6Wa2ay5wYXTfWVpvpurKsQPrd4vKd2a5pCH6BP2JKkgx64v",
  "key21": "2iupBVaWLn4VecVLrXyY5eXQejxMY5hBHqWpg7Rx2dzpUUkg7BJJNguG9LJkNc9dPdqtBJUof6QdDKuSSntNs8xs",
  "key22": "31agGLa7fJnuN9Q4RWpo57jKNNbyU3hRrUs1ZGQHFp8iHBGTa7YQJADE8JQohM2LMi2WSavaLWm9RgTo5xcPPnH6",
  "key23": "36fe7dcptG9edACZSBsNS7hUWvTMipFDw3Kkn7EcFaD767XHRKjUj1f5SCKRecq1E47qTuvkAn6HGVxZykqTp6oF",
  "key24": "4gKeEPMrVzgmgetUC1GyGv5xe4txJhFvW4cMsBC5zWy4uQeSmFhzQZepxroJNdEXPGHR2TWAo7Znpof1iqFtaa9f",
  "key25": "2YRJyrUFcXHdYzTAaR37wwAGKwt6SXE4fo1CzXM6cgQrn5Zgz951PpBugDZa9oXpdLH1kcKtgArULhnK5UNr4qLx",
  "key26": "32WZrrknft6Fuaiam2ATiVGixk7RMPRJTPPjgmwUxH9bZi4z84ALCK6Q7CiYhgKebVuynnLRRaY6KKU7eVMygn8f",
  "key27": "3hEhqjj4xsbS5U1MYFfwuWgsVvUvn4xJwSA9RcMEN4hRCewzdEY2Q8kMLThsLKtkQYPMpCeDXWFmJwRoGoxazJEo",
  "key28": "v45fhe57xv1C7ownmCgv6vfuHLV5whZcK2pTraD91iyiyMcxk1RS8ffo41sDUB9tUYERUPN7wNTKqe7NHi9Mu5F",
  "key29": "gwyFTPayQ4eTz5iavxi3TX43bJmcfr3fegYmrcxDbn5i99hJ6xR5JsFUMvPVXhghK7UXUufAnZP5sDq8wBoo89P",
  "key30": "puWuzR522958V9t8WZa94RaUvbr8icXvKaSYaVRFLLzf23io6LnV6gBZidsjMXUM4towUGwA3t1YP2PvLJ9CMcR",
  "key31": "5fvkz94mNZR8f4YooDGwerT7vX9GhS9pheACWsSGUdEBAWJ2tB3KBcTMAXEYBPw5YKSbWwbFK5fwqRbkpQZj4ojg",
  "key32": "4VD2oPmk2Gm1wmgmhTGiu7QSKm2BUgxGWw55w7zLwXnsG6nAvWi5kM78v9N58Sb3JhxUcT55zJUZqN51SLLcRA9n",
  "key33": "t8Q3BXtCkxkf7pR4CbU3TPv8m24wdiYsmai35UxGXkaQxWmz5EfsCg9DsNw1HbWuCNcWvAGMd8NLFjnF57TMgSd",
  "key34": "2L6cVVka5AGBdRLskjyJAfRVv5YThevGVJYHnh9xai8yX1Z6ecNmoN5LeiByaQtRZefWEPgAXfa56VRPxnPvEnYg",
  "key35": "5KuzZzTWiRntt6psBdtjS8gPbPUQaimx1AEderumXqjpAu6pnCQuoEgx4vMvd6fKEq14hcCew3wkvpyKBwrs96po",
  "key36": "5V1qda3Jo6TVDcUbA5TwAEEfFyn6hbHEFeFXuCgAigDb26knvsYUzJmVqRDd4MTyLp8QEcqiSZq97TRk5uyAJ6Nn",
  "key37": "47g1wrwvctKbGgisoJ1uC2F1BDAzFBTSg4VBHMpFwNXBDXhFpE6ZDvNyWm14jJhmpq85hvzLALTCEXxk2GHkHAYS",
  "key38": "2yVN4jm2gZ4Li4416hXbyouiRwBYrhGskUJA18myTUP4FHVyYVUgmGraNmEzSjQ8huFNbXZq2pFsumTxJB7RTwaV",
  "key39": "5WjRPAfRnyhppjEVsusHdyjebkMkDoaVLRbKikLfo5YzZ2oU3aNFmw5CPyyRtYWyiQzvrkAmoCQ1R8CEBnGbjFhT",
  "key40": "4aZwdwpJ5ZmbpdjiyPV4nz54PHgSmX5w8sxddxo2aN2pLGxPQc6AtyLX1hfPSdAFsgRVe2LpwREPeeV4gB3Tbbvp",
  "key41": "2V22cxh4aSHTuBefcxcMsLZNoMpTdxCLHpTKeXurivSEKXZQdZ9Jx1KMJgtKVu82U8J8piZXyoS61uecF24dNww2"
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
