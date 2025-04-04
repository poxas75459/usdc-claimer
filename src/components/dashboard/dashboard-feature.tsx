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
    "2T4FrrgdQnqcbAr9CEw1bqnN3SHQnH1QJ6C1VTJWcZy17Ltk4jSgtz3btnPKC8j8tEYB3MPDiHuKgGq5tnnbUBpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63851XCXPiPzMy61Wq81ZgfY8ohM8TQfHh4eBnWjHPKAgTGhdhwGoDfR2Gwm7nV2DuPoJBvA4xZu39kGywkiDnLs",
  "key1": "61UJCMxZ46oMHNvb3CiXpg1KsVqf5WbeNJjeuDsxoMqcmzwccnQSTGNBaDFP64jt8ctFL2izLpfRg3iihAzT6wAM",
  "key2": "5WRNYyagkPTDm6h2X9ugLnPR24uGch3BgW7mpYq9zgpyiW9SM2WDvtfvmupJxCt5Mr1Vyb4cKmsqMS8SnUoKsfLp",
  "key3": "22NfYG4MkC394KgnvD3MQTzJa6KkSrcNBrHQqtF1dWEqKzAfUqtQWrb22jG7zhQz3iDsacHWDncuUkqsDi719xpQ",
  "key4": "5S8dHzdtmtaaVm82RmPJMXWggj1vodQmvPAJ8bJCJwSbGuK9LApLA9DpAwHowhE29nEdp8dC4zz9U1pQT4uD64qY",
  "key5": "672jAZSJQJhHyVfRsziM6Rx9N8J82cYBnxVwLWSa6B56YoWWdjmdjrdbfaUDfa26LZjParF8gvtdLDjuw6RmwHQD",
  "key6": "2gDmhYfTzCveHrebWWciE3VYgKN4wiPa1YAS9WK2bNjdAUURKXzLr7Ld8hKeQ8ZboVXXWrEg2xNdvxK6sn8DP1DN",
  "key7": "vPae7satXb9HYLYDMBaq4r4j945nUMaVXyMRV9ZDXpjhpwnuXjXqbP5ccKjHpqra2vVnpswZ4r9g2sJ7aJyj5c1",
  "key8": "5FKRaETZFtgmWq9pb8ozY5N8FeNVpzgnZjZT1i9TwAbNUpgtnyMNqaF8P7io3TSMYRqdCkxz9nrZiKZaC27NUa4R",
  "key9": "5tKT3hbiEFDCDFBXkono9Tsh5cEF4CT5vFXZj5PE2UW3SEUTBZs5eyesvi26rYCE1kH9mrWd2ySn6143vsz8wRU6",
  "key10": "37TTmoKPbMcGgDLqr6KkGEL3F6zjpbYb15KBxahrThGti85T2WqMVU4dnvCrqjmGPnP1zU1CppxK4kUF1oXPmgF7",
  "key11": "JfoMs5jgW4xsjbjEo85qLqg8Fq8hd7bYRWb4QGrtJ3jWrduBNaGfgZS9RzArtz6kXoitK9QAmP9BwZbDw23gMvs",
  "key12": "44TBSiFCfmLAhuWsqXKBxQSBT8Q93LUumeYa6gap9BAzKGTTcqBp5AdVJiFU15CvMpdhLNj2UNwP4a8qdfsZ2Df5",
  "key13": "9G3du2TJEgEu9iywCQkbZGL59yUKzoDYVuykyzS6bw1DVpriTzb8zDCd9zzRUzTNHPpz8disc8XYEYnnaC8UvMt",
  "key14": "3aiNGziZ6JX4cgA6owDwMnw4cwtnmWzMkccAosAMWndNUSCt5kME5tquKCzLLDjUiUAGwfHsswMDpxWpMeDaignq",
  "key15": "2j84jBhv5NZ2KLSzXiMJZRP2zT69MxyRGypCgET6RPMuiBzxSBeY2PGA75c7Mj5W5LqVaNmyKAYHvLDpvTUn4svm",
  "key16": "7US1fFnvgifxPja3JUxZa2zsBL38CgTy8HHLU4CSywRXwJHmazvj9cccpY3TRNzxvedppN2jav8pXh9B7X4jz4R",
  "key17": "4Xbfo7f9tnfQ6SfMdFTwkFvTeyRz4f1fj9gsGSYC4t9ZRih1hu2TYxhHKQU69eqJrQeKpUyowy2RQbEVomaDJqkW",
  "key18": "4hsDbzSn4RiBhaGBySF9iiqV7gvUqWvV8Xg4fNRAmtahor5SD6pH3tzfnAhreHABr9xAYEmioHNVsPZyxTNWoUs9",
  "key19": "VyWexfmFSPqo1Xy3ZdC2o9KPy9rnaPJuZQuih3k5HfEtoiaHTomaKGkNWfHK3XSMcMBYkPXXR3DpD4QhuhJh1Mn",
  "key20": "3Awyyvm5XJpYXCfesQ5mSWP3dbuF2jfwHFTffrVKbF2QUV54uiWhc2ZTpvejsrR36xX7j34dvuzWb5TpMu9N8zNg",
  "key21": "38VzLXzU5pdX7XBBFPddrvZuWPq6sEnuPKvNTYdS92wNYRTmf4MmoX6WbTyNNaLUUEyXpyWRcPHmfxae4wXpKwav",
  "key22": "5gLUXq3GcgRS9DhzogFU3TGANg9cL68PPVdvphGjPL9L9CfDALy9pfwaQJiinAyYsWuribKHsKzDnbPs7Cjk99tm",
  "key23": "33y1meiTSgyfpQdQJma38CJd1Xb4bGSBny53GSp5Q6YngkSeVxMBmNqQcgb9uGegW3VmuBw3h3WJ9egpf7AdjPCB",
  "key24": "3xDYkTrStGtQjSTAocxmYPrCondXWS72icQvMVcZ897WhznLxXmWdkfvk6oNi7FCg4GWzs5cECtu6xzWFZ4EJJ1D",
  "key25": "59SrvJnRMeqEr8DA5yY7JGsgdiKxUM7WqSHH6m6DMQuYGwM97qwMJKcG7FWrh2kJnpHi1zdbh1C7SsgoLRMx1nrM",
  "key26": "2JaxYwYxttFDN1PCZUCWzUzLqNFaiMbrN4KcvM6bSgAzmbJ57nMRJYCdmE71a1aGf7PhAHrMWKRMgbS3WwWK3PJU"
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
