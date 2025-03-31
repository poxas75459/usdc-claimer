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
    "5VVQFYCVPBMVXS5X46f7tB37JQ2mLdDJ7xqrqQQGnCbjFdfwLLVWTUMnG33rtiqCAwvDnZ3iavMESS1jq2zomfPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zPah9ZB44mSzUv3wt7zX7ZqEryao9AW6YmfCcoj6xJmVPiJrxRhMSRiSVTRW4m3gQrP1dpRRHiyyitCbQizcHDZ",
  "key1": "2cPHK8cE1qsMJLzcthwkkggBH5bPgZqMZt7X6ixWHF6mdyaZbK5JFrTKBtLsLvZ77ycn8KJuVhK4RZSB1VZX9vDL",
  "key2": "wo7Mn6qWAe5P2eavJ4R9saQhGEKfFJ68Zqn3sYwFjfpPNSpg26Lzgwx4knda9K1xR4D4EPsaLxUmWfzVeTt3Bdu",
  "key3": "2oSWwJ1T6YgTy9cYNsCLGDUoeQJv3aT6zJ6rgTKKHDRbpkSkE3FbSEUXBkXzuvgCWoBfMW7kncSeSMhqwDqjhMWD",
  "key4": "2kFeudkAzvWHqcSFmgXQ336L4tUm5JcF6GYA1VewQfs43i9HmL8pPABTWkG9rXiF8LS55dbXjkq91QTkRmu5RkeF",
  "key5": "4UjqZ2GAwYhoHkH8hUoCS9mvh3F54DtgzraiwnPefCcK9xXcrcopadWqcViMPe2FaNdC3125aPGXxpLcwrRH6VWP",
  "key6": "5inM1XsVQWedCMasVDMiuxgcniYMK3Ynz8gqeVnk21ADxTq1zKrqH2gs4NyeYQiyQTcXGGqrn5xoEViQiHicYqyM",
  "key7": "qJekhAYCDvRVDgNwz5z7hk2gRqXCL2nQVqQ9Q66dxCazHiaaf2wNBEXpbaguW1PP8hiWZto763p1scJquP6fGZ5",
  "key8": "2dQJ9ECWnq6nYWuWmKn2mPLHxBt1YyUC4PJ4fCMH2NJkZgEe11uhrAnqVK1VWuPsaCjjYi51Xbiqmt4irqQPLBTX",
  "key9": "mH25YQSc3ZJ3juMXf3ZZQ2uJHavYp114gdi6k4yVHsmhGzLM6uzjPF3ebAg7ESYtAwgCCcMkrUXM7RZvNBAm8ay",
  "key10": "2XqiD6d9BqfagK8YUzuHC9u77RP1EEuXhh28EcZMYhX33uBYU4i48WsPBwAFe6CqBPLpUN5CAKdPWYvsFTiLvw6G",
  "key11": "4XpzSWc5PjbpmDfZqvsRBfPY92QA97FBHWmsMt3VRfxnXdokjHTw4jTeoyLKdNGHrfKsneyvLfg5qUfQTvFS7uoP",
  "key12": "4U5RDrmhVWCdQgFgPo9ADW4XnKWDBHL9Tg92D4ZdBHc1GBqM2cCMpLG5quvbaffUNYYTacv1oSyF7teBC2kgg9Gp",
  "key13": "56xPggJUii5ENwRGzKGFVYNKe5EuXw9yZqLDm9Ff2UGwBjCtmDi4exto6ri5fLNBfHdqmQaZSakEa3Cxp2yBW6nJ",
  "key14": "5RDfPPMQyDesDPWZ51gSNQLkvwQ6n2NMaDzcMjSxjz1jM94kp3WMChcuaKH4oyv9fNM1RNFzvt5RDr3g22bFGUtv",
  "key15": "53qizeSYGZuw9qWFgFnwTrsi7GKmn5pA5wRTJjneq2pPB6Z3GZuWL48nrbq9UNQVHAsPRTFcqJQm2L2tJGqVwnMr",
  "key16": "2fJXksnjpfXFF45JDxaGxvFyC25jbStrasqEGBgyBtqV72rHSUdDxNdeASJM7vNvRBL3ch9HVogEifvgGgP2Sjuq",
  "key17": "wktwFKx6kBghJ8rgL89SWDsPhcCyMQjqovsvr82gJLsuXe5q5ssNfRu1KbgQHWFXd93pXX7mN6tS69Gwx1HXrHJ",
  "key18": "2Dt9uEZpTruEHrBCDg2Uu82xkYxZezDnNQ1F8bWgxMnhCpMC377UMGf9NspE2AxfqvURffcH8UcS7db3Nqd8shZS",
  "key19": "4tNdwoMZLYffdGXFzSCC8w6eGDairhNotzEXc6Cs2Rx7dmpt3vrz4uxdUjE94TSQ2nHqc3BWxVbaKtwJJN4pppWS",
  "key20": "5AE2yRHoWJEGgTdMWqhNXcLjzaQNHbAxmVpEAUcNgcegVGjRLut9viKakaa4R4pNfS4GYGgJvSUQ7AMQMxuE6P3p",
  "key21": "4GWy7fsqco4KhH63KkuSpc294aHkcVErMbeBzZvj2bZKsLstB5zxQaskYmHGZmMakJP1rNXHJj69wkb7pG42xYgA",
  "key22": "3TSEuRniyV1CJhuusT3YHgVcrfoQharTZQARREEFQCak3xFAz8HPTFDnNy7pjgSJzeESkmNKs6JLewyiFqhPyZ9W",
  "key23": "2Hypp7KwCdbheaCi4VcAPE9nEF6chsnvvVk41VmCpL8Q1oZLcjsVhNLvdYtFmcEHCR7gmupFsPFGqnoaccb9kHMU",
  "key24": "Ee8babnzXLax4RoJaun6xQYL1mD7p54agc2jMPPkkJ2t1PsvefdT3sKQoXqspiegypi9ZZJBYFi3anbHPREQWg8",
  "key25": "5Xm9xjzUwzTduErDyxCjpdKScaHbhkg1TzJDBDhkSzbwQannibU1wKt2R82F5CJ2eFg6MRsKpxVYtAESEvmhqK8o",
  "key26": "5Rh7awEjvje2VgE2Pn94iUxkmnfYxAoEzPgd6wDsYdsdQf7PwvBsrDdP6WmsvjvRh59koGbUqc3SPhz8HqWkRes7",
  "key27": "2kJy51GMrTP6Kg9VHbEBtseKwH3277vQsRSApEPF45NHUKkzq95F9V8BuZ5Fci2Qbyyh87WMqFq6BCogJDEwwKJc",
  "key28": "2SyZZA4FjVG46GsF7c749DFx1MYkDjNFrynvTkj3mwqKJHmmUYFhk6G1HjtJQGbfZFKXqz3EqLcGxSchVsL6PtWe",
  "key29": "2Qvpp1uoVG98euUtQJF5AXu6RZ8H7tQH5mYFb6Rqb1ccd2ix55vvvb1cyHkygaRZgS9szJyvDRpijxppyMdtJ8fv",
  "key30": "3tFCtSZbdbznLc52j2KsWSLDBKEdTxRx6RJWwYm1UrXDRC22AbcA5mURh5U49E4AYwG2pPeWnFr6EYTpxCFTwm7U",
  "key31": "4nHZe56wXoBQqdYUtRGu8i3Rj8kJZ1XqWh5niFrs6MfbR4PPpEg7L1H4jE7YuhK5iEPiShAxfS6z4vHAe4rQB8X7",
  "key32": "3x9MfbAUcLNVVrnmEsqfJLWymKirCk2VbdowHUNZbwxazS2RMRjshcfNw3P6dKPmundgGt6dr2DEiQQsHLTDksV5",
  "key33": "FgErj4YotP3XJPq14RuEteZp8CQePmXyLDfZZHfqPr72bzvHP45abkSiJt5kKjmjWp8Zjn9RJWcEoS9KDaKcSu1",
  "key34": "3o79bXd4Nwa341NFAMEFW2LBXwWuTeD3XFCzTseAUqU8aihmK5iPqFgh7XDs7PuyKGvV4ZC8U1ZEW2tSL7BGx19r"
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
