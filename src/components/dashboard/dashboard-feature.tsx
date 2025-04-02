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
    "y2J15uidsvbQHAki8vWXC2f6UUkqGApBRqRM3xYvU2cXBqLqnGhjYpzFTG3ARVusJdaEmu6Xj72KqiLSPpnnCt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djsjxBs8Qjp3Gi55bXCjxSvDx39anqFpDyxrN1TyD59KVu1uKsdQQ2EuEwXAjuiTuxztSDb2zPtqgu7mN7LHhd8",
  "key1": "4BKM9J4fu3ygQcXWen9X8wSPkHnCsQ5kUotpY2zaChr25NFA6EttwNWB2rSuV7fiC986fnd8GssYFaoQeaopVWfS",
  "key2": "3ovWNw2WJ5NeQvBVnjeTSisXDvSq2UGZFcDUfuFuRSGpZdYaQH4kowPtkxE2vXU7ZiHXPj8WnXfkWtJAUkNZj9W7",
  "key3": "3QG3WewCkcChkhJC2r9xPBrLTTrSxMx23jECaTHbqDKBkXC2RD99vqD1fW3K2t3U3NdLNWpSas2vi9Ha2DnE7jJQ",
  "key4": "26L4Mkr3oi9tg6hiAxG9F11PrBHjQayhY3Vgo6o4KM6pM646TMb7Rcfj4KYsH1hiWNoXUz2Qxk9TbEGcjPcDWiPh",
  "key5": "5nS6bHvcdm4w8bKEkaE4TJVEdVsRH2DXQFZNvvnqC6digFw1DiFe2CCtXEheVU8dyxrwBtiufHaL9ZdRQ9v8hgJa",
  "key6": "5M1NrfG92oiAoLAVmZxPsjMZ1mRHDnSARBmPVSHM6xLkh76Rr3EC2ozccTrGXgpgc6hsP6dYyJFTamFiVxEAYvb8",
  "key7": "2HckiL8xCCPG75w6CrFg71mjbSFrq2sVZ983X14Sqv7Y5udMHSMVhsgYmXQAWX1P5yezNwoiN5GuraK5xpyWnvpo",
  "key8": "5L7fsYjpD6SyyKH4r1ZtBBtZyQJbE66yboTCxEwDdjBZvTC6r5LNALyAuLCVZ9QT7pSwMnGSZCkm367xosM5XZDH",
  "key9": "iTsMNquE6pE1aX5PcR7vKodpKxwScU8jSymRknDoTN8cLSD7exUY98VYfrw8bf8rbqPkDnk9qJ2EfQDgimQwHbR",
  "key10": "P2WuXMS5FahbqjQy5TnbR7DmWvJ6YBq3Bm5xihDZ8rRxaQP2khLhiYRJgy6nuyTSDkevYNmstBe5wSBiC4uiQjw",
  "key11": "4oZfKnH9HNcaALJjtfbxojiMuAjck3KTnrZSxhyq9ygW1oYeNzDVRWUx9EyoiLUebhMYanJgK7f1cGmKmqFBHFy9",
  "key12": "5qszjvpZe3GGS27K6V9Ko5okDXLikRR61tGgiwNidNWDzJsP9xEtLKPP44oaCwEA1YcUoPJaCSJASK7CujPMpjhY",
  "key13": "5b4yQY2N5eMMRBbkLvJuXYFna1DE8qAivs62n2wJfgQLAuBYraWsZn5ijgpnuUdb2QSkChqfw7fbGFPjefttdBrR",
  "key14": "3SXiQmxmBJ5LS6QAihbu7qBxuFR9mrLBnJUNEebXuxmfJsER9diQ7CrsfMAcs2Dny45EFizzxNvciYvDEWESUcYv",
  "key15": "5dnguBAuGQwVR4YziVu3gLfvymCj3wfUTqePngAyNuf9Jp3YSvSxVaJ2J8uBYHyqTofmV353SrjCYWWezPJYgBUR",
  "key16": "7ihLH1L3XSmUajwMKBRiNXvUvhrAUsTbf6RGhdJR1jfgDAPup5sd9T9qeS95a7in9ujksqXq7wvNfmK3AM967U2",
  "key17": "3EcFmywiBtCkt9ejdZLJvMfHLyvLDGpu3V3QWfe1hxrKwRCXKGBmbKVRFbCbFX2aheVXFVYKGDt31PJfztzTX5aj",
  "key18": "4kdH1jjoR5ncAiSkWLZiPPzZje8A82G3Tzv6xZMRUziRZY7VEF2BstCs66V4vufaRKjFej13W3pdCvAHwAgT8416",
  "key19": "54DfK3nXjidEWLgkHML2LKzMXK5apJTq5h59PdnzVQgoQYhywLJThFp9kTJsvAYst4ezEWCgVCkaBNwLaKkupyky",
  "key20": "3x9GHYpxs64y5Q4zZ9pBfupAhACJuSZNWwjLnxvh4sdj7pn7uHX5nfNKThv7TktCg3mYGX87Mu6CtFwLm7xqAzR5",
  "key21": "4Lx2fG1Sbgt6u7Dx12ptSiebnRWWX2nE1HoRWzuCtuXDVgUxovP37fFWJN9wFUeVMBugKUQjerczp3JYZMECAMY8",
  "key22": "4vExyW8c9yuhn9HPL3avZ6CCpHBKM9c1aoABFYdWhnkS4L1LbrC81sEBcJYkVYgngTmxkAMJc1Q8gEdsJLRJFdgd",
  "key23": "27JTibgE5A7kKy4J1WUjc1WqLZWUbyvUXgEZgf8Yzhx8Gtg5X8wyVNgbcgEhN8n8fhXYsagYZc9sVWtditXgmTmu",
  "key24": "25DAL2dyFKtNbJr1Progxfn9duRkinxFhLJ1e2xM2DgRvXT8jkC8QmXAzGHLTNfPRFVA9vChs7BmEtQKpt7oEuCN",
  "key25": "2ZQsMngg8tm1jw5fQ3qZCRfgB7aqptdWsNAu9EnH4bBhWMPtvj9D4FnHvr2iqJontCyWJZvpyKnpzHpwAFMaEHhw",
  "key26": "4bt13VnZRnphmmiq41iXj9rCrLNU3xgE9Ly8RB5WBfyTeae3LfHbpGgbcg6mLf2MG7g9YqMasrX1H6M9ukDzfHNq",
  "key27": "459vYhHK6yCLVqJqr5JtNpAyiybxNJ5wZu4RmdpcJcU2ReoVoZMrR3v4YXj7w4FYrGuLWD8qxkJ17c3dK7K6E7i",
  "key28": "5P4XDRUwRU5R1UFyg9JgohBW36uxtkKeigSuupGN3qpwPstY2nZMSJckHp72mJsCk5vxMcobA73jMjX5FQtP8ziz",
  "key29": "2Fh73DQLyuPntsQjNWVsHsAKzd8mDA9QoeW2sYUhGKHgmCuypPYJCSippg5hraix4DWpTee5B63Zisa7bXhHgdyu",
  "key30": "4yjrqUg1SoNaNEScWsF37rnEtHP13kHQqYGdmUoNpsb469ew83yQgTEe19hH73zKigafCB89GziPAQXn5299Lr4",
  "key31": "5Qjiy3cDJ7X4w17oVqizDK8ts865oRtQoiDVUtngbDTQABcfBVXZD8sJbGUEmeJsnXpzHBQ751VHmvmm3J9UsMoB",
  "key32": "2tzmn48dTpBaL4fpb6cmd94T8YaoyS6MGThHw62zDEqhPDT5m6ZzBAs4BqTvxBrK5e4j5DWCnuZoLFNthRkb4X5c",
  "key33": "2iajuT1k9DViWj4j54bboW3PiM1yGmdXP4uLQ4HSCpHqoyMaWaFLtaW2KS1MKKdqTFi3eBis2TkZCpwAh4Vk8N1h"
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
