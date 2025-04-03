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
    "3uFetzY81xeG9QdnMYpAGt78Jav47DAvTrtPiKidwqNavskbtWkKhAPWYT981LNpEi85pnmgzkdTx9H2xfLrv9Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L3bFFEFF8zF5KF1DN7rj8rNUpnzBSa69BrBuyTPTppRjkv4hteBvi8caRGbqcC7PcW3bwbqa558qnpu2K8t8zbV",
  "key1": "EUodzKvVLKH66EEiB4Ad4SajbhN31awt7gZ3fSi8P5A9RdaYiwKyMuJuCHrrixHyxV4rBFtjptBpsUMTa5Z64rF",
  "key2": "31EY7zDVFpptUUHGTrZhwdC4LfUXJiGY9MDnzh1cNXZm6NHHoPmChDM1z2xoAZo7Pqp99W599TgPEEDC3R979LyG",
  "key3": "32hRTpZXnHqFwdr4CR51tsNYVqgLFSuL8oyWqJ56RHW8VhAnjjKaH36oMaV12rJunNTVZvGA9P3mYqGYZo2pUBQf",
  "key4": "3TSvPnFdiAbMZ37RkVXTK525MvVaE1V489VGvNrzBJD6jVXRPkKCvCJiXcnF53xLAgEHAfdzxVoRB6tHXSATQneo",
  "key5": "4cEjvnVF6tEHdK4tzr3M5q7QyrcQeyvqqyr4nf4LaxAcLSKuf2KbRRdBhgcAxrgNcNNQAH13Eppht56giCtki4pv",
  "key6": "oo7wLTqyLx7sp23VXNs5gKdMptNQrKSgASNGetedEs3TDtdub6kQspKE9XozDAZXeYWNbXdjJXBX6tnQQKp71TA",
  "key7": "DewSgm2TTvRhfMRhqfJ8LqhxecnpPsM5PwoviiGzzuwKBnD7FCUKmKtQ1t91s2F4PjtAXWUK4K7Er3Fb6fecyZ1",
  "key8": "221HhhT6Zet2RJQsaW4RE8zc2fhsYmw2msgFDoQgENvtJJsRGWbh6nqiz7q6zeyNXDQAtzsZ8mvT6SpK8Xy68xRD",
  "key9": "48h8sJXHKhAgNtLXNHYYT523z5aGTytpWTyDDivKswHBppBSB5bYVoJi76Cvb1kBvSqdxTuaLx6fXJbHPSfDcwaN",
  "key10": "4Kk6jUDQNpXNvRTGdaw5QPLbKH7FDnGVeVxjLYdRCKcux44cZY2icys525p7DByC1YfKxH9XdKk9vQYKaj1WpakA",
  "key11": "5WgrvhE4jqtSwpNSUk67YzDFYw8U7g9Z1LscQodTS21YcDEyd8YCjmU93KMHzWeyLvMrQkJmNX1bKkrmw27QGXdW",
  "key12": "32N8k5uapgXUh3Txb3puHfYthWF7vLrFtZyAo8oSbpb8qtgU5G9XPaxapQzMjSPBWSLWpGKAmnPg7zWpPrC2HJAW",
  "key13": "34jpuUhmKpkUkKUcuciUvzfGUSDnux1j6gLpk2KcY6KzRMuzVubWkPh5VWBZaC2kup7v2xoapknKzpKsuCKgETaK",
  "key14": "bmsH5mWbufFt5f5scNd44H84JmhzkEHrX3MtQMsjpUevmcjSJLEsAjiDhjEngiiLx5dhMJ3XQML6hwnFyWzXePE",
  "key15": "5LdNTruMEPpBta9F9HN28aWVQTNmwC8yZ4BvtU29S3UiToHJtbkFR2bux59vhYxspyFcHMA6QrSbMfwkRixv8jTf",
  "key16": "5zEPb4KfwJdM5tiyM8kijMQN63fZYtCzNiNzVbhK3R4HPJM7fxHeAY2jem5YEGTV86LKkHKpsTGgcEJQhZhvJ91U",
  "key17": "2KiYRJoJ4pvs9mGJ42buXH9j7q4ZjE5TBduPinLxtTrVw9Bzw9Z8eMHCf9yPjGUqRKGXuG4r39cqNCEQCAj9seeZ",
  "key18": "42Xmbsqo9816KnhztzyR4kMRx8UJdS229mi8P6m8y7tV5X8NpWezXuwJYLW2EC8Pj27kKUNfHWgbRTfu7pqk6b7Z",
  "key19": "47tf6wVu7ZLFv3rS2fTY1KVaebB9nTVPTrk9SkNvcNWK4vcn3NcrSehmqk3xfbJFoPQ9qPAzv462tWhduVHQhaVm",
  "key20": "5yCuodRTtb9jNq2hvgL4L9YW47pTeqG2mJ5gHLQfXcTj76KoNEMrvQn1WEkPLhaBeutHVZtW23YYGHXFTXnHrjqr",
  "key21": "WYcTLEvvunnMBFG1qrfWwBD6hPf4Fok3dd42bpWERm4GqQZYEWFwWmeHS3iR66ChFkQqVyN4aF4nWNbFajfR2uW",
  "key22": "2gMzzHovE1MRFQgbQoRc42LtFPXVD1AsXMj8bLkdyjw45ynPDmD6s7agTBW1JXKWV1m3ukmAu8ismUs5P6Nf9vFz",
  "key23": "5Ma7GakqUryiDdFRJFQpPA7c96P5TLoEpiY8dzL2E54Z9TTpTkrqArLComb5xpvMVWjGwZ5ajVNyAWRcLByZVKSq",
  "key24": "5ZqnkriqZQd36BBeCcpxrxAuaQm5bKf3b5mtfZTXwGq6VYc1eNKZqPq8hRTiKM1GquTTiv3BVvmuPf14zQTKYfSw",
  "key25": "CeR1MkH8a8NkGhxo8rwPz1AFmDiwmtNzRUHT3rNUricRqnHR5JFAgwY1LUB49xVHgVk6nw5LTEt5UowjgeNKF6L",
  "key26": "5nkXaNU1CAfiVm5ri16kfpHztgcXPXkDWdA1zs5nZCWeoJP2udrL22We6nvBznrsjzPqDCwfZPySXVCKreGZSJtP",
  "key27": "41fa88yzJNGsqxCjioYrAJmsrPAPJ7KRSfJodEWFt9wN5cxLaiCshNtzgdbH1GfXuB1KnRFSsWNeQxpJhqvcj9SY",
  "key28": "3MNBiLTZXFTferbZrkDdd16CK591XgBpVc5oyRMkAXs2xbFvzEr5GsjhqeWAghp1wzSd7nEnWniRnmsfHffUoSok",
  "key29": "4GXfh9S6YVdqDvmgMvmzKi5oB9qQvy1bBFngEoktHECYQ2ZMCqZzfwr6pmBis8oCR3n9qFm6jWLmGNaTTphCEmLN",
  "key30": "2wMo3umK2CArsjcpSwLVpAdzfTP3XZun2LG8p5Nud5sx2C1Q159p3cx7HBHqyaj9mEASGstfGrpq1zgQvoSn4rSX",
  "key31": "2dn7t8knYm7qyBNmRMsHzVHEKHrWJYXL9btaW6zCoSQ4ZdYhzG34NBcc4EXHr8jFqgkQQy7ZSoaAEmHjWmd4zhxK",
  "key32": "2DVDzGjxi8ZafC6JUpT2UX2sW6i2MEeSzsMpLWKDgdgtXFte71AGZNtSurNYr3pkjGHBEJCuFgt1JtSHut372omM",
  "key33": "iAtzwoKTSA7hbiJrrhoaFK9WPLh1JRJb8yXvjrAvBvSkTjZMQTnRJyAHd1YvxsL6j2hSj1wgWbW2MbBcWmbXCH1",
  "key34": "ivyh7gepY1aGwmeNUq69G6WFC5dcjj2JF7tk2ngBZAQhC5Wbar87ctq9wgczy6dXBxv9vHUXd7EdumNr8pTZMhn"
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
