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
    "3KkoaUx4CigKt3W1DtPrs2pWnrQZTFPex9sSLzWhLxt47SR7M2Z1EFdGghtasrfUuUSmmA3WNPfCf5aDCsHD9wVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVEW5T465FSTqb156TRKFhhpzmctp19G9giTqECrh27gWGSKWJVTGckySKxWpffAikDp4FNfAm843hDMYA2RGPU",
  "key1": "387spa2G32zfDCan9jRepiESqGfQJxQxPh2NWim5zWEWw5wKR4roLs62DWt1LwpNXz1p4LMrvmE5zGvY4SPv1FQk",
  "key2": "4AWknTVGuUk1wF5sjiniHvvgMDmRnJBtPJGaPDPE2oNkUvREo9XpkWnCuSdW2JmWuP12uJpaaFVEXfhPMRnd5oBh",
  "key3": "3GFmVQ3o4ttAQ2Hd9VBp3GC3gbrQN597hWhhA1XsSgFpmmkMGUfku3fcnQNbP5mg6Eo1H4RmLCTcArKfBYbYB5vG",
  "key4": "5CsVGFWxoL9TyLSomiQY4PePY1FegQMeHsxkVnU8bjyDySZPPh3e2FY3M9zfcYFtBw8ejfg7pDAu2JL7ewPmWp67",
  "key5": "4w7PseWEg9yQ8p7UyLhu3LL4kPkcE2KfuQy5iVKpRQwZQb96n5bBJ5TuTLBdRypWRtEiPtmctGKKjDwfTSNP2Xqe",
  "key6": "5ZAdXLXCvfTT7n7rVgRXjWp9mWAWv9QPY4gBEYiBvUDThGie1WHcZZjjaYnCfpZBztXyaFvcX59PVxmL1MMSE6xv",
  "key7": "4EFboef55BJUYdn3pJSDkqvzCALocA76CcrSWooScUT9FFjfm5yG4kqReBEsEG59mCxaVSgKgoCAgaFgbuukwx6X",
  "key8": "49YXEEVccciFvbTHR5ZJqikF6gVjmY9cubisQcAQ2gEtVyWKqYACmcxEbu9ResaHzSbftk3ZYALjEpW8TrR5hdrB",
  "key9": "5EZhUtoYhYTYVnDaP4va5XbU6KHue2nbSKb3yYB6DnPfP4RYchddFbGqhnGnDw8y4tMevUjJcVXuEEKdZTST4rJG",
  "key10": "4KK5mtbWk58oJLXyybyEKGtmMw7zsBefrEZwnVGiGmvgKmSuQvGFmDtcW8EU75KLxYvT2DkCyiYqcwDNwZ92k78w",
  "key11": "2CDkD9BuP2MipRMiEwbAGAj5NUhmRXTkPdrp1rxXkQcn5ojas6sokL93Foi6FwCNuV2zZKjizKpsG8UV9jamAQsB",
  "key12": "2DZyZ2XdGZE4Sv1RhbKBAemXmBiJzaEbsi2f8GiC8MqmtENZXvLuoDbg4K9ZoFhMR1JLBekvE7B6GgAruuiAfTCT",
  "key13": "2rjb4jQGXxsC1b1LEJJuDrRzd3YQYM15DMkPrSR2wwJDdf7gxJtgiGxgjCo5u2b7rTJYQ2ock6qkkgYnTDSU4odQ",
  "key14": "2iEj93fbpv5maeRnMXMCKdzv6AoZFzqeyWAFeU88XyTHBhD3cqq3rDqehndAmNqcYv1ge2JpYmJpHHkkvNYtiyr1",
  "key15": "4Q33Yox5NdUo4SRhUBd54kHanp76f97d9Bsp3pNbqQFfAu8FgkSEktDvCjiJEuZ4tYJzbasSctFeCoTRoRyQXZF3",
  "key16": "GPo7JWLwjJ1V9pK62WhFCvFH9JcZcuvv6DS7Bw8gFkQ1BY4yzraN19afyUYSHvftjPwZVQAJqqLDwBK3Ghgsi5k",
  "key17": "4eJq568Uk6xeft2gTkM1R3CThsPUt4tWKn8DF6w8H6X6iB54QdUKZzkcZFfiUzMaBXyegQGoWYuvKQM8GumUCCQ7",
  "key18": "5Pmtz3VcjwnhtmYnCWRqLGmKAtXpLQNCG73uUns1GVQrPiNWV3jWB4xh6ZUAWULj4izNouJLeBv2EfWRKjksS4ZV",
  "key19": "3h3PLbXmEzaHkbB1nTX4hP7BPakdU21qK59y9f7MF8ZtkfGTn32s3LEZbLiJybg5MMcSDkUgrY6eyVcHzo7ypVv5",
  "key20": "2UhRaPQNPjpBqy6y9dYgfYBkcNJGXY1mVDdFBzce1FDB1NHXKG4XA2azn3xXAqyJm2KZ84JAsx4vgQSGnUwpEVdj",
  "key21": "sAfQYUsk67ywSFJMoFEZcTxwwGYdhninJHKaPB55NWj1FDMEXL3pHq2WaNfrtE5L88zqh6X4jfUgrXUDgeh2bq2",
  "key22": "7XpbRJMDaNUpko6mxvrTCVpWDr9tK23ckpGNw6qwGHWbTZXA8Vax1hQ8ar11q6pkNJ4zuQTG7MenWQp58Gzb8t8",
  "key23": "5zQogeaGXEhzNqP3U8BiQQLSiMv3rBP495ZVAY6JVDgYpUut4E5hbSXBN1nBs5ix35wdZt3pSZp1hprzWGZPnqGK",
  "key24": "5SdqzL4NXpeoUE6twYoUGdfdGFuZHYcfLxQBn5Nkmemuuk3SZY68gPXsek6daNsZn8fBDWxvhRdFLU4DiKbX2a8k",
  "key25": "41roRL9VzDGnfRDq8e8d4pZhD7n29fRb8ikgBFd46o4SqcW5Xsz9eC4rYYPBXPx4R5DUoUWfzt2X5KhPVJy1CLgj",
  "key26": "58XVHh7gaMU5iW87JgkXABtPLo2QkGP5f7UZ8zwknpzZyWjZxgJqddnA2koRaenQ7KP2kQJGcrTp68NHHqLnUeEZ",
  "key27": "4UfwfKwvqhdfc2neVAU1D8MGCeWsvLEukNYkCExpaK7NWnhdYXfaxkGaNUMUrfEzEHZ3R2dChTGVLknoF9y8Hzwo",
  "key28": "5WNB7mahL3s6mtjoE7NgyFBoX1fcz7oGjirwE5Hzxwk1ZFwGXAyQmqzi2YipaDmKPhX4JAYByCU58DZjQBF1vhyB",
  "key29": "5JWgzLvQtFpSeiYtsnQnYyvUU5qBfFr74cDs2VEyWbEugSmBrMKJF5ndEhfie4ceongMXtNpR73nRLNw9yvCUM67",
  "key30": "3DQUUmrNZ9faStTyiLEmKgKB6rWWujyZTkQZ17hQgwJmXdTTYEKwR2srVMcvWnLE76xdyZeP9ZwdTnzLu4BN5vpJ",
  "key31": "4Sst9BXE6ZuYVfBWpqjpeoSvcBrC8ipLsBsDXzP1HQE7GHEnsd6Y1esGQo2VS56ChKyY92aPgG8a2TQfkMXP7qTZ",
  "key32": "2ckQj2TwAxTWfcWu35Qe5PocBYiWxEh1ou5oPwFrv8Vvh9KbqaprucWTA9KS16L7A5PKKjsavXDXjmMXS7M6AcLZ",
  "key33": "52Ho21VHXrSzzfKMP6uWYA2eoX2ui1fw9UhGyn1r93bKW8d1G6JQZNPjUTaUDzLVXheAne1khmpVE2qw4fpbdVjs"
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
