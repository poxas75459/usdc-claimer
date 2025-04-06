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
    "57iaeT45fAuL2ma1sovY6v4tBaoad8N7ambH2uFuWYs2zaNSSBHUWzvPEfdhATmoMBFo6pKWP1iZGPj61QQ2xE5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKjxTYj3qpMwyCsPxMAyqE54YGDLMgpbbS5QyNw4uhkMQ7eo1kYppjxiXH9ER9dnDmKTwyZcGe7MLmNaux3uLMa",
  "key1": "56A1oKTVGZtWJUJH4rYJRjrSq4dh6H2X8EcrmupTMQ5UCvTm2YxPTx783gfxituCjs66dnRmNbanVT1Kfe5vALvK",
  "key2": "3J2DhUwyrHcRnEAYbyhtARybrgHBkRsQrAGifn6489B92Pt9VBQ7dsaEYXxcgyMLgE2MVvUNPJ3Lt1Z6uYk2wf6v",
  "key3": "3VMwVvbCwgVb1pWpAPyv6UBWa3dXneNgavR7hdorfx8osaQxGtXnYEMn1zGo3yKzxHT7A69J1EgwgYCfYZiDhwaT",
  "key4": "qfrNYi1Z9PNYiCU5MHzAZxZbeWU9NtJmK8Hf5N7qtGCT9BHs9JhCVaStisn1a9mYP4H7E41ZpkqoZAxP9Ejem2h",
  "key5": "2ikqwRECmN4qS7Y462os14v9rFVmw5UuKhB5nzDMLT4FbtSKAhZiF9zcedLqfA7y8v5Ur21TJ2QpPSWrX59PzuiV",
  "key6": "5A7gqwLMDohVBVVTHcQWy7rwV3Xrh9Wyr6x8CRSR6k7kTuwWyLEtsiUX2aUubaD8X99Dukib2WeNRcrBAxstCZ9z",
  "key7": "3B19SCAvXknQFMByerzhPkFydmwmrAS2T1MBW8V5pWSzDXuJfGMQrSUfTnZdDmN3gw4ToVrbMLuSJRmq2uQ11eFB",
  "key8": "4k8hHkKvyqmvCzh8jzbhmW7fJZ3qpazuJX8eBHB9uyH9VaA2aeEd7EBAM1atGBNA7V5wMZRFAufQPmYuPYk1CR4o",
  "key9": "LtUjYKZ9jwH3b77JSc9j4UDNihxygYtf1A1XuyS7V7YBjkMsdx2szhAGqoUoYvR7y6DeV1TbP3hKhNsDLUGe4oR",
  "key10": "2w5XyqV1dMJ7LnRV9aDH94oYSzBFULnU1ymzDjrrfmf4hRmtgGWui5BXqKugkFRRSG9tLaGmTAq4SrQmTxb6WD4N",
  "key11": "2arUQPzrhmw4EqKrwzhugJ8yEVePSAgeNQ38XicisghBiufGZt5R8fZoNfEhVkGUCRuyW9C6V9ZjHNXtS7XQmiec",
  "key12": "59PNmbgmVM4EzeW2KL7K7g3Z5sZE2dsK29fj2bZ9yV854uxDjZWkbZCEj83czM8TxNB76nZRk6LAwmsXBhrkNC8Z",
  "key13": "3NRdz7sgQm9ded2M3s3ta5doQ114wt4Q78s18uDvBuaEPonBXjVDLfzzS71eHGgznVx1W8w4TRLif1mJ3Q21HWtB",
  "key14": "UNJQ8Y7CHVeQViwqzGCeRAd8S9QmsdBk1wxW1hJbx7ce9zQMYJRmRb6vuTevsUa6S1SBkKMZ4Pnh7vxDrGct3ca",
  "key15": "5J3fpcDWy5uvAo8vMSMJHovmCyH2rZBXLh4Qn3BsU33WiyGa1mYCyq2W3bXrycYipgiAyRmGE3jVvz6rLzQByZ1c",
  "key16": "e8qWQLE8vmojxMJiU1hL5DUNtNdrsQQCXsXGCTPZijRpSQ3UzDxdK81LyFQQAhUr2J7ZebBHcCQPT6uQEeh6AXT",
  "key17": "2hMCHAxj6CkxR9ncuN9WQGfr6m85WGaxGvW53bYjx1ZQfRLkQ6PEmUiyNqEwevvbVe9LubooL9Y8Rbp1S82kvujn",
  "key18": "crzL1v8bFYRbmofN2Bqm1WP7eKTmxW3QzJeMXPZPFKiVXL281XwbdFNvE3Pw2HMnDyzvtwhDZNrgbdEmxd3qr3u",
  "key19": "5csaJD3ADkHNM5F9uqHWpHQNwtid6F9YWgkVJsEmuMswgyj3NUtBZiEiLCbiivVghxAGBS6LgdVZmxJpj9E47Qmx",
  "key20": "4DLPNUZWEK6qBjSJA9mHCTnAHjTmYLjGiUE1m5ZdHiqevbmuypupxUB7VnvzRvhjStxUMeStpj3nvrt214JbJcU6",
  "key21": "4Lwufpt3PXatgwqg7Pv3eMFtZ8kq1F3CD5Rhf5EbKjAfxRF63N42AjE2GR8UXDuJiwayiZrNZ37MPXgetMZLyo2",
  "key22": "3wkKy2iCRFmWEsVTyd69HRJvXRkZbHKhfJnUhicwicq9U2qE2TfWFYLk3ooGgoSMK8dDutBFfpd16TfVnwKt7Ux",
  "key23": "5YpRSrdNiz6ZP3EPqTDohs6dRgzDuSVGW1Snd9dr49CK8dnB7qcMvReGvhEUaWxV3emYV8W2pn46NkRsbCK7JGSD",
  "key24": "3PviSjT12c4kD6w5ZznzLx3JNf8QGiYprWQKBo7J68b4dZy2jJAPKgkKRNUoDkQWtejAoQZTEEtzxd5i7Cynd5nA",
  "key25": "3LrgbrNw76PLTA4JHMeZ5a4kFsf4RfeV9j26j8141ux66uNLiwYYQrGAYiUGxESAA9oUqw4hk2AaCpAg1oNTx5V5",
  "key26": "4ubntBoK4SFrjr3w8J5ty3u8SZ7ATwEX2JfxjH3sauK53tMJswHtK9zMnV5hSGnS89H4sWF4Fm3oeBZ5Z62EuDMc",
  "key27": "2AkvLfBFg2X5QSfVJeaFQpC28Rvw2v4FkKwRBwVDKqJ4nBv4RxZso2kDnTD8evZUjagpBH9fKgcP5Gc5hHL6HPQk",
  "key28": "4GHyP4MDxeeGrEjuFoCeZevTYDp1KPpu9wyn8ZNZJwGadVuXUhJFycTYHg3wPFCfVKLV893FwtuXiBECdaSKj6jp",
  "key29": "62YUT7TgWKY5C8aDy2BrbU4E4Zgyf1mAPCkbbCBRNir9SegoBYtFKoZ7tKfJNp9Th81iyEc6uDCNr9CVeLB2vPgf",
  "key30": "3n579e47wMHrdru8xTneCZvtfs8rr6LAZQcfjoYYT87ekaNR4Di4X4tetWmc56cNQXefVcH768dyT3ZHKWaQLfZB",
  "key31": "2N4g4KgCCLd78DMgeHETWZwDdJU5rSYp1KwfNdcByXD2J2e4iPMHmenjHDereBtvavozduBbwbL6Y7oDAYtop3jR",
  "key32": "3ohunQxYXpheZ4Q7A5HhLKjtK3cRWhEdS3vUUe2DFC68R5btXh9VdvkvxfDzVU5zcLYdPA2Xi3RLYHgpFy3nNrkd",
  "key33": "4FrjUMyKojjp94oyXurKkwxwJsvdJnsyDjzvj1VRWr4jZmhdADMCS3rgF5sWKpGtU3iFbR7tXgJoPe98AWjzV5Ch",
  "key34": "5fa2oHjitMv1zqUwe691FNLxL86mgWyiDVr4CKbh1XytzdzSJH31tyJW1RRSSGMwEKtLAoabciGZ3GmEcWb3yvaB",
  "key35": "2WsGSCTWt8mLfMAP9MZVm92QNBoXAtyZ9XtWC5MjqoBWZcTxhj2EZcxcnvf8ZZjnDtCHkUqf2XgkX5EvgzVGAQpB",
  "key36": "3KrN7baknV2kk5c1ZGYpkJ5jFLQtoek9QYrui1N9eHatqJS3t2mYTMv1qidcZmWgJPWvTW9rJzWXRKZxxFYMw3ZJ",
  "key37": "4aeCcwPSAFKZWh3BuwebAVcY37w32sv41KK5waMLw1WoBSAy5Sne8mwXhQ9gkBFjAQ9r1r7EXemoUKCKoAvP9MgU",
  "key38": "gRw1cK4MzC8BK8vFixV8N44S9isCNFwBLt95G45tcjNLwAysP64qzogiXFGnqMF68qEAfi5WLRhydD53uxrbYpn",
  "key39": "4fGNKTf43QMCbsDnoxzYrec5pfzSpZHFVQxkCiGVCoy1YqKDhG9w61RY5QCqsZ8bLzkE3eMVAzJeNZzsgRUrSa8n",
  "key40": "3brCcKFGrHvPPjunBgNHWeDVqWUt8kUSZceWNNkF8kwAghCP43udM25DA3sqSxMAjUj89y17MGAMA1Xgzmdwzqi4",
  "key41": "3U9mkAdZPxJELecDso2SztAf1nfh9E2WgHFij8FSeFKmngZ1VCiYWqtEL2j8Eq5oU8GCYVEf9pcHehpDVM5xJFeU",
  "key42": "5DFzCQsPg6FnwMZswoNTHDCRkZaR3aWcbhu1CBvk4S8ynG1rwLV6TNydbPpnF5X8gxqt62FVbiwhvnJjCLWWFt5c"
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
