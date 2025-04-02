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
    "4Rhzy1wyiUyNN663JyCffz1WjgUbddWh5hgp6NGWd7yav8FgqbtSDVWYJoBBsscuJzZzM3TswR8Bfs2zhmcUZkoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X72C7nkGwRGuwdRzfaUYmf4afqnSCvo8xdgLUY3J5MV8tEtV8jHErLoCiU9G3cg2sYtbhFefYNd181cTcFYS9Hr",
  "key1": "4NZtSCWBBSU7Lse9X9pbbRXVNyiVMFkSDRpkudGDPUrYehzvmvc7NcLqpwKRB8qnaBFuJyCp9nbZzZhn1irZhTpT",
  "key2": "48APJ9GS3LkxPAQohDPPdbZWxqASTdeihU3Z974Mia4GzX1kMkbBsU4M16kA479xdz6AVy1HYGN5WDzuDLvZs3xh",
  "key3": "2GBL8DRTrYa6ZAb8gRUu3uMycL9oxJGF94PSvpd2o3ikvp7mMkGcRQuny7dM2q2bt31TwESmYmytBp2ECmdRpJqj",
  "key4": "2GdjWAMm4DDwmUJKP57fLfzyEB4A65DBLcCN3bSC9sdTPz8o8mVtZ7otH2GGZAv9Tws7s3BiWVnnMnQ3dsS1Lnqm",
  "key5": "2B9inKHB4qF5GTKwaTWNsyd6HREmDQj7vkD1JY7NC5z92RYbfRr1dczfQJL3QAzrNYUtvtvVFbXpAiaUAPHA3G6c",
  "key6": "kEEsG3GMA5j7XiuxjeveTiFX6XePzpaMszgDjorf5XYe88b74vJ1q3SbxU4VYDia55HbLbFV8dWjwmFWMQbaUGo",
  "key7": "4nLnLUjdFXW7g3QqSxDCgr1PqtNP7A6m6hwFMfuX3G5ozh3rGdgpGFdenBA7LVhHBwWLfTTSBs8si72AcYnfxUX1",
  "key8": "4oybPZvrPZN1oFQaMVy4Z2wtkWpaGXSKK1uiwN2BLf3smxEVVr7XHyKHbR3UssndBQ4XNXvQk42VPLSBs5Zv2JAF",
  "key9": "Lq9bQLLauG8GZfdBtQaUqFFazXk4DJAzjAwcrRcMeEW78GCojfh79VjzKt2Wu9sy3JSXYZkJwsJDeY2jB7bLbQt",
  "key10": "2FS8itArFDXDaNWhuUqMTfq79SXupXqDodmhnFH9kznLaKdbAYsxbUzXjfRtm6gVDHeTPjGkbxhvmhDmrVn7Kxzc",
  "key11": "4gMgcmF5KoV8iUvp2Zw6tpQ9WteUZqj17Zns322NCnNPtogJByXNP5PDFJtkfEd1HiS5Nm37mjPQXFsAWpLCFXD4",
  "key12": "5fuTpo3XznYexqWVbkipYtPRAhhn5dwsU8Z7xgjAMoXtNkQbVJVEYpoZcx3bUXyAx7sNqtA2ypXoT6vAZU68Kre4",
  "key13": "5DvyHpv84uWGmLsLcXCUA6YAudmXvvt3rki56XV6Yx73NFdcqbdRZKenPzQxsz9xPU5oPJKX6T24rQtKoc8U5rx6",
  "key14": "3F4XGe8wWfiYTrDLnBAVpJYz14gYhPBJDWCbS2Be4e5CZDWtatQ8XyxjEwhvXS8mFpFx6UT2Q1LYnobcM9gEsPYP",
  "key15": "iHS87g93mE8vjBC2Ci7WxKtSe1irbSRfXSxwxzaCHLErjCceVekHLxVpwvywqWsxH7mEM1WBbAGPt8VViZCTM81",
  "key16": "AzMjDe3MjRrbTZnEnLRZuS4Sz3dKW14cFLXjgUmZmVvzDQXSDAWY7th8DW7PtLJR3rTsGQbQAS65vnU7uVtYHfL",
  "key17": "4dxs9mLywvyCH9ALHdcQ7ergdWxHJr92zYUfUkcPBqREkmG2wAHAShrAydyEVVtqrRUkRQbNq5YmerLEwZtrdaVX",
  "key18": "LrV3SYqyXrbL7kyqVNPbaPk42ofWvqcYx5ZWwyxR9hhXrP1AaEJWn6zRRAbq7qBk3QgLRJAuqHLNUD5EXd9sgs5",
  "key19": "4RhibA9BrRcGabe6TP63S1RioYggYK9NPgLj65gTThmn9k9hS6N3gnAZB9GghZNTvHt5PBLLo3wfP2Fh444x4wFk",
  "key20": "3PMUg57XuNAnpLNG1eT2so66AGcNnJ9KM2uL1dLREUeLNUTUmbzRUoUEAEUVPe5SEqsHmSPUhYbtFWcqVYpwEsen",
  "key21": "4j786BrqxHJRimzcPNTLyKSqEg8TaziWYds3XB7o5A3oaXr8me471gpt3LgSsrJJBMfJN8ncfLj6fJptdGbQ25Vk",
  "key22": "5sbL9MMaHuZHFzEJj6pYRFDPmDSiYmmMjK625J8zr2Cu4A9K4fTR6DRdJ2B65CzrKzJ4QcjKJ1EPmxriPjpiqVxp",
  "key23": "44b9GscqURjnbGR3Hb1R7uX7XUzEQYcsUhwtAxd2DKdwgKSQX4ier9JbGD1b7FTUKN24ufqaevt2cQ7HRTusdcuX",
  "key24": "2cxkxokt55493BysAzerkBDWMSGAvWdwhbuYJwTjEGX8XL5H8wjtcne7oTdWU7uHJFSGxq8nU9svNWFgE8Jx9hu8",
  "key25": "5PZHsaNFz2f3GT8tH7DpFN3Yn3YmzQ53V3dCk7p1HS4znWgLiBff4G7XD6WUQR9jSFN1zojVmcER1P7ETZu8m7BD",
  "key26": "YbcG3JtsiC9NqdJX48bcY5UiUbizzQDsGbYzMrrub2admvtaEVBDtieEN98gLwdeRahFdNrVzY5rLvrkXji4yha",
  "key27": "46xC6JriXxiqH7WyLkVn1iwvr1ZscQ5PVzQqLi19DBjvyqSy1Cq8GBiuGv8Ahgrk4rxJh6pxptgXR2Hx4Nu8owXN",
  "key28": "zmPjPyF1U6peQtLixoUDMkqm8fJMog1JmJTVYWPMtbDb7hEpr1cmw1p8Ycry2uKF163cnDQBBWwQddLWanHBo8Y",
  "key29": "2DKGg7Ji9N5wCDqYZ3yUrY3Xu4WkJdtXJh4ymzez3WPDwPmzRp5tZrjW3iunMNFSWJJfZoJqKsG6jq4DQSNYJ7mV",
  "key30": "2aQqH3Ki9NjoYPZY3gi3iQGL3uobuSZpYwkbNtMevoMaXzcWJ9qZFBhNCn6pYQ5FWYW6WzBjeepeuQfhK5mUqtRE",
  "key31": "5SpNqZPGSHnvPyyFtgkiFW8RkiFtBQxxB8nKP8xWaXtLNCnL5oLpPZ6xRnAvCfNxXfckB35EjjPe2JsJzw9tzwJs",
  "key32": "QPtTxK8ndAxraEGb3cXBNWDoMXjQ4Jq2KZdnuV759SWiUvCDvdJzcYUj5GYpj8MdXYzawjtwDvg3GyqPfw1rjap",
  "key33": "3eEenzq77PiXZT7SR3R5W9qjP7AvWzeJk3AV1A52bmzB1AAXRzHBgWPj6kDj1YnrpRAqC6FYyN3HnxXT7rC6qQjx",
  "key34": "2hbKRzHccCQt6ixQPrqhcRqsQgibUdaKXE9xsnsAQG83BK7VQgr5NyzEdoT7sMcLEhnG63EaDG3mh3oQCRLsrYNK"
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
