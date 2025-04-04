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
    "2UaqV2t9oJVnPfekLUBv41PJEj1PG8Qf2uAHnjoS8SskaGULo6NAHUUbGr6jJL7vPG1yCqKRiUfxHBBdEk5dNb3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHpzyyHsy4jTUyMqb2BFeAkKqJhXY5YGLcgCrHmdQ8YGPtJZsM1zpyXpyGsMXkKJShCaYkc6EczmMS48cxtHf7c",
  "key1": "kKARfUjd1Ak555bUDaEQbR8tDthUcJnhREYxUhriG7UCV5c1hxHugbHV7UzwqT4WoQWt9wrbK6U83zhisQdbKTS",
  "key2": "2gfqGNrvBF7THztEmPpLfVkaR5f7uCikSfvf1QvVzZQGfU8uiMRVynh31Wk3ViUNm5PgMAWZGWd7pnh88xXeBydE",
  "key3": "5mXUvyZAhMuP1zeRTEWuWyXcyJ77ux8m2gw55tyrBSWUJXfGW5W9wMNXLFn4MQ44L2WKx8SVDR8UfknsuYcP41SY",
  "key4": "5r8bG8DN98ugc1c1yQTKEmtN2YJqB46FVy7KVKvoq22UH24RyWNaFFBSCUSDvg8zqcJeTVKAQ2MyXgdvdGLdCNQC",
  "key5": "62bCA3k63x7XKxM3hsWu4iCX3yQ4kz9zZcVyKyKWzAbPny7yLo2EBVCVMktj4PUmSUR5eFb2byPPC1SrrK52H1cv",
  "key6": "3vHDpYwwnHqfExXHM489jASUZFVGBjqc4ge3Roif5ALpEtGRYCe4sWZNeELYsHARp5v3dTbvXBUKb3pKJhhkfzcE",
  "key7": "5umua93Ax4KNGSdRNJf6RvPdnkakW4NWbApVwHsiQxcwxYTPvRCDSHzU6tSuk6uitUTVdCjahExt31VzmE6iLJTe",
  "key8": "3ytnXLSaWcvGWMH3ciXjBaxVZwQCwfy9WXVQja2jUuYLSGUwRmkrZuK5REuXXDjDTRRuKcgDi34x1WAtLMzKdSaT",
  "key9": "5jSDZgdBxTQtSfz32dj67HrPfktirJCfimiCh8iiCj5Duouny89RfAbeMnXqJWg9js152LF3UDrD7YifThAZQ7CP",
  "key10": "3y88mHmYqXHDtLZfsmPV9Jk3jxDQswGwkobn9C31hXWtNJRpYAVcMcWpFJMD41G8NRmULBcsYF3GJChbQQJobaf6",
  "key11": "AJ6YJR4j8enXeVuU4Y4qrQcST8jVcNSPjQAxAJs6TpokDAqBZ1yvqQoEEeeJBbsUQRJqJ5YNXeoskzsCXQMXHXx",
  "key12": "8yRKe5JbDYmKHb1jAEDdq8zuPURhR4PpoANf3Pw7Es9U7MMT93z4geCmMK72x5d2R3NesBCPFG4bhxMvZHQvg7Q",
  "key13": "sHxUiG8yVViH8yFEWnNn1odmGMWnmCxZuTNv5NQ8R3S6G53BkrjaGk664b9U3oRHW14SfWjjRWvRqDALcGdVbk3",
  "key14": "4pccUbgm3pSaEwAiyzp7UMB2joMpHnwAx5Gn4AgHQ1xxxKeZxPN9rugppNRZUGJ4c9LWRTaDiZBnwVxubzFY3bVN",
  "key15": "4gWDBiKCuG7KBdrEkWRaMRZTDuM7dsQ3gPunR3agGfnY2R8FZkWkTWgNvAH48eWj4bFDQ6UGsWeEqmQKDQuptPuV",
  "key16": "2PgkguEHZ5BGhWYSwhmVzk9AvYXfDs2CtPLPXmWbcBCiijTXQ52iZ6Wb2XfhpJi8ue41FM7xtkijZo2A6weeNJAL",
  "key17": "j9hB1xaQbbbVM92ehVAmbbaQv1Qx6FYT55pbGV2AWnXY8sY7QF5C26H5g5JtLcXpxdrtY9tnRhjtFocpzQixXy5",
  "key18": "471Kj8y2LLFY1oostLw2iLqPUbWyeVbFkSSmD6iqGFPGqxx3P6xdrxmeHsv5qPbcZ12H1id6qbXZNx8XLASg5diM",
  "key19": "ofqoAsJZgHJXn2XdSNUqdWkVduSjo6py6BvrGeL1YTEmaKS8x3gwtL99uMPgNSGfAWYcksqj3dyfMMVJrWoZovg",
  "key20": "53PMNo9HfYmqiVAL5vwS8PHAeTuXWzajuNF14TmRvLpc5dcNcvAcnziqSbDabkfWyqTtUiXCf4EEVCfzEY9YyEHq",
  "key21": "23ZvPUaKrL811wFXC5QbyGn6xVzLWrGdbM5qCae9vAQzYQBh4CpgsgUAxAJCe9zz9Vu4Gx8TBHQ1NCS76fwhCr3c",
  "key22": "2Acp7bqLrfMsYfwDCr3Xqfib9Zo3dfqEFQdJ9DoQTpVKXVDbu4tDq62wCAYVgtQXXCqHaS7iEtJqQLQY48RmHjAd",
  "key23": "RgGeD9LfRfbhtRet21RvpzZMJHGqpH4FxUjbQfhmqNGZfkony2vr8eHAzgWn8HAGJ2J3caopLuyKP35DoJSsuyN",
  "key24": "3uzFzdZDpXRuoEvg9CBCNwy2Zs6JHMcWU13qfSqZodMCK99qaEtpPdKxnvxkSgGAn4w9GhRqPv16KtdkhMz3kxgX",
  "key25": "X5wMWBwDgoo7WfBdwwBn8WgwCwGEjTnQ2BZPhWGBMPTV7MaYQ8zvwNq43RUSuT6oQrHUD8nDyeYDKnH3zZzhaTo",
  "key26": "31hDnuBmizBqSAHXs3TNz94LdN3FqHJXBsqJdRvgt7JLzrggEGKbWtcDfh4CGv53bu2Qs3A688d71YQsMFgRMfHk"
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
