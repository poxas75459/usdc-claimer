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
    "5xX67f7aAngDDBXw1SLHAFCqDYyCEGmcx2haFvqvkWvsy4C59boWvPDLwYZF8HPdnLgHx9S7YKUrtuvmFB888HK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XyPCV1kAfgMLAXzPM1cBYBt5TJFrMQweLWJiXAE3zRprdaSYDUgC44Q2KrGBcn16AqSuzFMP21TVE7VKznLQzK",
  "key1": "37HnQqXatrFvHkfQRHt77kzy6Ar6UBAKSS65Jx6ibGRYtwCrWqLc74GqSAPzNS5jeNBPeMyzfpC2GUtSnB5Cg6SR",
  "key2": "3HnKuDayPtDWHesJ6Y8rfjRxq4noRBpWACanX38Jsa1sfmeT5KajhDQG4haqCKxDSgwAnZHCoRCUveBmdTKRZfcP",
  "key3": "9D6iUTLkLxJ9n1WJpDUFiqGjiYVwJAFHg82wSUZ16WtsnBgMz45gq9eHAyzfdeQJz11bFMNj5DziDtwzz1jLWWA",
  "key4": "2sFB3fZogN8ZtnmY3RKy2uYSPzumjjM56GNEC1LH3FgQZebZhiJLSqG2CCk1AwKp1u9N5NfDVHSjsyztaLT2EJsQ",
  "key5": "2srrmH1QKNVvTcHivTPooTfrYFZqjF1LDUCRpMDjKaBQ48X6ea4KMGC9Yee2esSNYqGjymohxTMFZb8LqKk9XJTM",
  "key6": "3r2NPmj1h9qptvW7qqTS62cPbaXpuhuqhBufkrX5TeBQjBg7BBujiUisVYybsn3ZZT5aPNb5m7Xb47533FXrNbeZ",
  "key7": "U3z4o4hwSw3eVqXEEgg4iVEvBnaBR3hfNwL6hskog4P3RXkSFARRuzsfY9A8Ue2ANXqZi5Rd8kLofxBuSqLoDyU",
  "key8": "492Gzw99H1zDyrxV7e2fDfNXMBGvguSnLF9Xnxa93KozLx6GbkV9k4BFjNppwMcVkLeNZwQmGx1MJR8ekhDCzwnF",
  "key9": "3hZcommxYkC2K9vQVFUHGycFxn64SQLKiJiK3PQ1ebwRTHqroyfVZf9XYoB3Y2iPMAKdnuNgFwtyaDdsSXfdE61U",
  "key10": "2fHRm9cw25p9XCsam3AqHeKAZPjm1SrJAGYe7BToT4fVnqLKVLdYf3y2JatEjZgfbrouRDGnQiAEaMaFwnQBwMcH",
  "key11": "6fPipaarHAUP9Xxwo6JoxPEkZbWHCd3bhykHE2zQgkdhCvbGKqsXsxYpfQGH1YKDU7NBonv7E5kDN7kUyqB36U2",
  "key12": "4num66Ub6EWFiRfsPfvWMCuQgdZMkDwCpAmH5vjtC7TUahQPN3N834JJmp9iWs6gm9AUfrPNUsPmB13vHJDNn8gp",
  "key13": "3MykQYMqJpEqrk7HFswvbhn9PcVL4i24tPvLQm9WQdPwsUCjjHgqKtea197oQjS14Pwmkbi7BwJPBraFxGAzh9Qg",
  "key14": "4RwWGFsFbLSN8DNHZgNc6iveGBMwYHUM9vQDMQxiGoVwKmtLp9Nv96Q5iHVEb8LB561zjaWPXGCnFTycXALoWMcb",
  "key15": "3c6i2gSztY4TafGTzbW3VWfnuh8MYZDneKWNoGQSKn4co1npHnD55XSmjSTGCRL9FqdfoimQaMDpEnD5sDVXhdsd",
  "key16": "2QMiS7nMWdDQ7biebQEhSvtgiTaoCexfPCVLXZESHW4ZbDz3X3d1KeBTgMopxq3paPW7KDGJiRHJRcPGZvyWiGi3",
  "key17": "4LfEtWWWWqEf1ybokMSRcVbUUxucKjuCyRuLQsxaBEHCtVqcTf8VjeiYrGERogdV6zgDBpSywuyFyMYHtTtYgCXZ",
  "key18": "2vFbntdX1sZhBrD96JEm9t4hju3BfokJrSTHTpQQjBGiWfz7AbVVJNz4XumkgKoJZ1povT2YqfatdRhrS8HcjfZR",
  "key19": "ZCrdbd4s8iR49xj3rJ8fWekts6QU5q8FaWS96gEygi6VGxXSqFctSGbwaBkpJfowWijPXpQu9NbSqhhZikx7vvc",
  "key20": "332aguUC6tqq4YSxpBGbNwWsV6WTdgLwSeBkhkCgjBgKY62e3PYG1Am7QxhV9drhpkEa3aXiLgqLLfQ2aruAG8PR",
  "key21": "43fp9fRTRyQxH1ZrUoTExT6Jebfjueua5pT4LReM2Vf9MeGHbiNQHvGXXMwYkSGsLBSdvBd2GjT6dfZjokiPHsuT",
  "key22": "4QGy7Qvuoxge7qtwttnjHFf2sGDrKweMfKL3nYHrgy3Y2266sJfWQ4iUkntEKaWnCNM8yADaCif1PbU5wkVJ28Gn",
  "key23": "5WwRPwpswLxjEhNeNebSHd13dbGDZdDDDs6ZvgKFgqWEbNPQp31YaXUY7kVagXmM4VgRSkcKatVJaNErnmt3GfEv",
  "key24": "jsuyQzLoP3EZiZzkk3WGhqenUboRDy544sKXAmxqzs4Cw9UnbkAYXZWW7PoJAya2aaz8xrUUuGR4u3c7FQT9Nkb",
  "key25": "4arNRV7aGX85tu7bZtyCLWerA8wJ5ptHyyXPqaXu7Fa7FGBP9mVNaXTo7ezhn1qnGLJditd8jKT9kVrmc267WTdE"
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
