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
    "2XYhnkufm6wVn9Si8JY7Qqg39ypyTiZ8zRRg32A2e3ME97gGGBBzrskEvqVc8GNmtDQhZRb5FEvuahiN7v6KWNeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58x9gWVAWA9MngNrNBQUJbsJpa2YCR7yGi573nTMjY4e6SBPqb4PKfQx2Nec3DkuZ6D31ihuLLQq6ngHVvVekZN1",
  "key1": "2UpHEcAMEL2hQ9SofE1iSBXizhur5Vx1A2RTzh3KGQjteBcyw5TCZ8stansQ35G6XPnM4YfXEQZ8HudmoXiBUXST",
  "key2": "3L7r9fxYUJ8sYPdZCyYBTkrhmcfK3amMNdJWPu6yhLhaNXBukCvTMz9XWtrKzfB43g7Cbsskbtgyy4NmJmWowSNB",
  "key3": "4saDjyUdLyPvYgys1VMonUEJpKSzdqoaCebp2tt2pcGyKCZN4P8qZaPKtjv8ebcVrM591N6KPVw3nP9epNMVUTS1",
  "key4": "4TpteePLn7Z8YcEj42zZeopbJQciXJSFQcQYjCUbpGXSkxCSYFu4Dp1B9DRM59hVWrW1hDXcEQSxayQudELLWN8Q",
  "key5": "3iRrPbbK9BZpxmatCEafgguw8SjdyrgFkrZF3TAQypSPXdWy4tA8c5PgkC7QiR5iN1LNDD5vvNGURcrmWABJKo21",
  "key6": "h97gHuxmoD3ikzM79hnWaqe4aSGsCQWoBjjPiQizEoB45xddQJY5kxfJiEgGBVRmDeyfLFzfDHKoToSo84dS51m",
  "key7": "62kKGHh87Brnwo7c67HuSgUL7624sneKz5exaH52dwF4hazmXZszVNKhAQtMfJzd5B9D5aMn6zbbsZ23mZ6xTmib",
  "key8": "WsLj3wg9FLLB7sjCeC5FoZS9eKLYPtDCTpsLMsfFMmrt3RSekUbk5J4CGTLHiYsZMMnS13ZM2i1CqVaVyitMKk2",
  "key9": "2NjktdrRWGxNyabHsA8XJT5GnRqgmVxnw6u9SWEpujNbwAA1Du79WyaBbg55Gd19W5EU2G4uXLwFEaNTvwgKpoBN",
  "key10": "h77eZYvfmnyaDdh6AwPtHYyAEkGhNUpmaszpg5v8UaF3hGMwiHAb9juRe67mUGb5a6KxE2pBKr27juePBHYBGno",
  "key11": "2A43iN5Z8AwWiC3zCZ9JxWdcyDFnhNXe5ueam9tdijHpQXxaDJsE2n7jWwSFB8QhDJCztGam3uUEmA88qy29QQyU",
  "key12": "5YKgBhdYXTaKnANdzgZ9m5v1CRGJC4oizSV6o4gAiK6Q6CS6vf7ARcsNSNvYiRniEFqmrgAVLy6h7qwXZ3bTYPC1",
  "key13": "4JmTumSSJCVv2yBHm16NLuSJzehcj2W3mCVwfCjy3UJKE43KABecS1cMEe61rE9Wcd5rVVKdyDNvvmbL2WZwcKTx",
  "key14": "4wJNYMP4gTrxP6fQJeuaMZQgdWW973DG9taE2aFBj3eFe2ECsqdpo94tTTrKm2jUcnDfL2YP3PKXmJJ5umP5kJu6",
  "key15": "4fWsWg2k6XhrC5j2eYKFUR4FJCqvj2t3U93K3cteTgie4XQ2fShoymDwjekiEex9kTzDgtXjMxh466W98deLV7JZ",
  "key16": "itYpTWu8rHDLaDv4XcdSskcsfbn4uYzyiCTT8A9g1KA2r6LBgYsvBrXCZ3DP3AfdBwHMJUT4ANFiuyGXnuth1Cw",
  "key17": "24idfmEdANebrrG1W5GtF8i99ZZTeVV7hC6VQFeDMiyfhNMHDP5uJqWcjGpfGbnU6uAGQ3fsp5AaKqPFqA3EhLzr",
  "key18": "wDW7WDi59WKrGPZmT54BH3CCRL9cJKUUqKzajguVja7ptvqxFwKCtWnD8BoofSe1nzMaQVL7LAF8QK44URruzwC",
  "key19": "47hKSESEMJ9WmbMnHUpMLGaS88NoFKug1pwvJL2Y6LMx4MCs1Z8qvWuwDdcS7Ri9ctJmEJdrVms6ECjhRPjvVedg",
  "key20": "2uVAUnfiCXW6Jq7Nq5GiRABEoDskKTBfsJFoCxf2WWrmdM6rC5RxLrV6Jk84dDMBiZrtXFh8dcD95Ys8LFTf9kJn",
  "key21": "4NJeq55o69jDX86d4VCXjRS2aoRVGRVjkJNQ9YDBtZzU4g49EJiMcN6x9DTCrAz1aan3z75tUBZq5QCv5Ki4ujrL",
  "key22": "25syuJzFFKY1DrxqEgiabV4UyudXFyGnRet57cwUHXCYMEVdZ9ZyKKTfuyJD9hqFb2K2EFydWJjdYRuqnn1nttLi",
  "key23": "3zz1rf9VmSfGnEVLCW5R1eqp5tab9Ph8y5XvYkPSppg6CHHqWoX6dvbY9JZcdDuEWtcoAgDkDL9ykdBCmQpdDm3r",
  "key24": "4cJ36xYS9EmAVVnW1jpk35AefpjeVdWicMN18RqWjdRqLjs7hStL7kDAwwJYZSnEMw4e5yb8VukQ4RXA2UFPgUEt",
  "key25": "5NCR7aGYG6LTzmZ9kDyLa3BJMnQaJtpZ7mXj4dThDgqwDxX3oJvN9GK1ABH9TujV4Qmhq86y4etQm3A7BZNtVAHR",
  "key26": "BpB6u4oEdri2oXo1cpRYogDE9Xhy1drGvoqaBQTVVkWJD7PwBnkbPVaWMnJ8odkPMCPPEY6wpmr8BpcTba95Yiu",
  "key27": "pEptWvTJbNJcLmVNZ97tUahUtDf9L7EzJe8KSy4CcjApqgH7r5q5GSUXDL8UTtC4gU4sMS8Hpd9o4aQRMeCYvdJ",
  "key28": "4CKLKhfY9w7mSiqqQMjFMmp52me51Ze62bSNBpXyJUPp9pe3KjkGEqpbXhDPVvpUayCHZ1AwanbwoAckicY8Q8Y9",
  "key29": "Lj2A3DbFH5pXb1Qv8QcXRzFmq1WwW7gaubvDpw3zQUB54QrYyJaGVReURNwJQ2FWNZmf3yLw6ViSJcUHoAjs7aJ",
  "key30": "66serd5B4yrizKbNgmKA7jAFCRYbyCiUbXwsiTTcPGoswh6zJfwfaCDNji1QazsUEBoLDWjkXWkuZuJdHShU9hXy",
  "key31": "62wTpzmTLN2PWubic3dWibDZ8Ls778tV11PomVU2uWf48qf5TCnkiD1xvyf73xndkrstyPoUHFyEDgzzU5FQky3d",
  "key32": "5JQYbY7Wz3peCNzQisfx7oJC2mvRbBVhQRVnBUsJkjBZNdQR5w1guNqZWWKj7RPovko6Qvzc9rzf891sdHmxmiFK",
  "key33": "2virLr82qRuTuMgEx3Jo5NfhCkW15swHvQpoH5dTWyZhSimyuafpvZQdNYcSuvBpSS1xTmNXK7rH4uVxerYxwbdU",
  "key34": "q43YudLxVcV2P179b7jWC2Lt6kXU5qXRBBRJBTKqaUkpeefyo4u7pnDW4M1zwr4G1HmEKc3FHnCdmNXhGpxHMRt"
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
