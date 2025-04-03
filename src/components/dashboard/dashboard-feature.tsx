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
    "5xRydzqPLWXQCPGs1dSxjbEjp4546ubLRssuHmo6Wdv5XHkCNXNYs5XRdnjgYegEjJXaBYfz3YN5xegaPKojr4fB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iAeJxCLkGey89oRnuMz9hWiLPKRXPz8fhJyauzzEboKCBFKaWHSiP5ziaBPKXP24qwhvT44RWKiFNzFALBMEC3h",
  "key1": "3qhEJof1XhxdRjBQxN2dtYGm7hWVxVXvyfBeLS3Pmr9G5BBztD9AWRnKcWYZvgohvxrbud2J7KHRsrBxNj75KiBW",
  "key2": "381xqaQTz1FmTBaBNy1rS1B3JnU4gzj171rCNpzY682Yj2L1nk8HT1aFeCvf5BReYtogwBQfuwaU9stdwVFZDdWM",
  "key3": "zib6d3ZB2fVBSBc4iWuFKe2U3tuYX2VhKz5hnLeAadKR14xNDrS1Z5sHkEXhwA6CgM5S3WqsCe3dYekNMnRzhLL",
  "key4": "4wf15xTdnMHREvx2YxFNEh5WEzynDtUPAqeCa9jf48V5YXoFiV1a2o5dpvr9PUYqKYCb6aB4qt2VbPjKfFCqPhmP",
  "key5": "4qhYTNiNwcuCN5TJBdr97vmoBbXfyLL7qzsTTtDtCdokGR2Gz6Zbm4UkytncWX5UFD1XtwQUJKDRpcBNE5mjVNxX",
  "key6": "5dnPRFRZK8jXxZGxnETh9jZGoqHgY5GjWZhy5xnyMyvBgStJm2kiKYDb1vRfwoTaMZ7hhG9fccoP514ZwYoeyFGN",
  "key7": "5PTJ99XVJKTN1LaN41gx96eRRpbDdSkFLsv4RX8GWm2qeBE6Z8Qk47xVS7YTHrEXKGrLGQBUf7M7JvGHRMWynrHa",
  "key8": "3Y3mb5yTqsckmzpo4P456fdLkuj4Dkd9dYYb8zkuEesBWKVhgYrqUJqcryGWMQGJzu3nGJbSwutxDC2dyGetAepS",
  "key9": "2s59B7m4JLHuiXbT2Auo4omLu3nFobv7YeS1MPbEzATjSp1oafqTjjss45c9jAPJ8B2skaLxyE9sWVMLrmGvbxEM",
  "key10": "3AhF9dGHkrNyMR9y1BDeufhvLfjQYvrR5VaSckdp47EinnKdmmBqdjUe45pLp11CPcdDTKk7FrTRRyg6ZY3B83GG",
  "key11": "3gGrhWNSntYFaRFKt1dautDv2PqsfpbTmVTgr2qmttYwCBdkAMjMhewPWsESEJxmRSmDfrLSJaYyKgJv4CeYzQSY",
  "key12": "5oNkkCTUz9ZoYhfZN9azE2vhARjrYb5BdRzdA7TnVBGTDWqC3uFAr3FhRxbVBgoMvnzid9ZLfkDiDkeESFUwmx4v",
  "key13": "5Aeq74uECkdJ8CWX4PiTMkhJs8AZ6N1p7qe7m4KgMGgWh1EKsiHQVdW5Wzz18yqjf8tt2YFEZ4Kq1pByERech58c",
  "key14": "3CrhAsMtYVgJNZNdmFTJH1GtqD2K62XmCZKbFUMGnQ3wscT1dgkZJHi9NRZjvaVKbJ5zSKkvjAR9Q2Jgjh8aJf3w",
  "key15": "5q55jJMwbp7HxW4egfvqwpfCh9pAwKEq4qXExuHYwKCizoLADmyKi8QQUpXZmqHn2wwVNwLdPQ69JgCPmssnWVPh",
  "key16": "2WyqWgoguL5iUKeQWAuNTvPH31LcbaBpNppAUCej8CYFGnMVesxManRzo6qhTb8RCtaKwsx5J18R2zHD1LnCT3fQ",
  "key17": "RpbrTbk6ZAriMLbZQusNjxV9Q5ohkPdkRmti5udYdc4CjGuXWTQPEZJ2C5KnWKM7j2WLRtbDC3ACyes7HWVNW3F",
  "key18": "3vJqHbbGbq8u1U53cR98DZuaNhLXMo8Sc5GLmkguarvBhB8nUHdHtU7fDQ4Z7PmDr7XLUtx8z3Ri3EHPhRB22ZBx",
  "key19": "5pedEYJkj2bwJMn2RwtDVAXSBpEoBTNbZeUEWohYsetDH99LBf3woqhtRkkfo4hvv4HL4XeasHPeTnzi58AFjkPZ",
  "key20": "brMqyMsZqsdya8rL4mqmjrWndN9DxjzpDaC9GU8sT8Tc6QmDabK9xw2tmgeNWc8Cw5wbswUahce9dJGzAQrvNFi",
  "key21": "3hZ63fqUuqZ3Zetoy48YpoybKQK6GCkj79hBcTzvK92J4t7U5FrLcQVQr2aXGUpgYwhmgsuws7CGBLuLc1FZFYWT",
  "key22": "fvL6pCNiUUae1VfzStm9ZHZGLesicBSiMzGE3KTZbAm93FicojSEhALbrsRBD9zECmKheTmyUZRszk6Rb7Sn8AB",
  "key23": "3WT6m12m5jUbPmXbjn7Sr6kKgqhQ8n8n21G6PLtvV4Z8aBA4TQVHA1YjcwGtSiL79ZHLGTK8DZFjNVrWG17h95Hk",
  "key24": "4PTSjc75uPdJxknqMGUpiaJpCHHxXmBCiMJ9EXqADSyUnUUHrQnUqNGrFhhFGDw4xriFP3bKt5qCAsbz9sX2XTfn",
  "key25": "5sFBqZVGirEsgEghLqecRGJifXfXay1G9pRZ8PDraK3vZP68hKUqKJ64Em8VP1eDwETr4TgdEGd8kMjXehZc2E1j",
  "key26": "2QoGattnCuwoGPqvciUECXYdtodHoEQMBh8D3g5HrsQGDyxLFmxZVoxLYDk6mBZ1eM1Q8rLZwB5TZ8Ec1hVopJaD",
  "key27": "3wfYG8zacUEbJiCXUA9k317KQ3pBHrzDDdEXKBLPLuK8CBPRR4fCcgfeA3K6MZV5Q4iHiNVAPXL1GTn1S9VF8nSq",
  "key28": "2w28tMyTFx62iDoTYSP812xzaF3w1jDP8LNbWXkcJQVihUmTvRhDZsWKm5wUWTxws6zn77NWDMzqKw1NKT1ZTFby"
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
