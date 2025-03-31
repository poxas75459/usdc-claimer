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
    "AVxjTxbQysZ2aW8mxxs9qabeifFfnviRescnwGgR6Z4FyAY7vgXnuJQViVBvrSVi5PqXdQoWwx9RkWJFhoBdTyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vvs8aSpBvSshkBhyox51efDn62L77ziKsV6A9k3jq7ZgGKB65G4HxaA3EHtEPYmMzQsuqPJvFZ2vT8G7B95jxTz",
  "key1": "3GAakrpDwjsApEMSvueU8423mc4tdsEKYGTDAt1uvNmNJzTg1KKKW8b3ijwj2S81AK2QGKqnD5WaAa7hao182329",
  "key2": "4t5GjXvypV8zWiyjXx7eKbuNkDhs6bHdF6B6PcTpKJHN6MVkn4CfYPKiGVASwgTJXMeHodQWdNFSKWzDNpKrsxey",
  "key3": "5XAYdTXb5jqKZDFQsEC72eqAQ7C1NcCHB85VSBtXvnGbPZKud4AHKnxTauZPnot7yLGQBGJQF9PYBLRX4iz7yjbq",
  "key4": "3y8m7ATdGqYZoTth17FxiiZtVdJGZuj9yXcy5gem6PEb5jWK2AP7gQv1BNYou1jArPdMRmxhi3uKB1fruTR1HLVn",
  "key5": "5FHMjxk6tkhuXRFoLrAiUAgijwKhq9ytrvbuaRfwPjYXguw9KXVhuEXgTooBaX5v4qjDkT813qzkrAyeNekU36yr",
  "key6": "5YN46r4wPaLJpHUXPByNa9aB51F77EZLp1LRZFapDMy1FdWkQdiK1GouBMigbdj7D3BQqCnZcZzuBvPdxqG8ngFy",
  "key7": "5QZdE3jXd596SRu85mmfoioUNpBx9Hs5wa9tfKU71pM76XSrLsdy1wKh2xH9bZTUk5YFGNjH3JFeTum2DHn9xEYY",
  "key8": "4DTZEgo41AodNLvzYhVzvyQkDqsXqohvnpkbDnHtn2CoJkh1bvQzxmc73pQQ8DErvYkBeC9RXmQXXz5iR1Xy2sbZ",
  "key9": "5B19SqATY1WoBPTB7QCAouHfNCnNP5PBAmMUwWU2uBJw5bEJfrRH3g1mUfGLVbUWmMEG9tzhMR9NWFMy3mg1HnZV",
  "key10": "2vfj3wbakQM82piorn7oKzKPbnbaUUafAXxQc5bsvYJXsUuaZFfh9krojwPVCQAcV2yFBe77pnPjqVJKhKumVTsj",
  "key11": "2xhex1ZDGPzmimbtKR7n12tu7pnAuyG7wZe3oY1ZexRMtB6KQtFu7BssS264dJ5R9cAz35V9wEYMAAqJ8o6zM5Pm",
  "key12": "sWbDR3kzzM97Dqny2fKefco9iK9BtksvfLo9kV6zJda8Vr2nBdcFWBEQkLUNNcwj7NfYn8TTvts7MhMdb4h57p4",
  "key13": "2ZrcZmA8LjHbSWVWX8ETKrDY3QXsUXMqr3tqJ2981k18Gva3EWSi4Zua67YGnGoJJEBJGKYxxgdDCVv7U5WEAq36",
  "key14": "5KQh3ejHVivkNwZwypLKPH4WMAYmGhG3JPGbpHvUETVsKYDcqW3LiKeqxmZhqUWN8oAfRVfssfH1YhfhyMTuLfu2",
  "key15": "24DQ9tR1yXAf1vXLx4VJwkP6xoSVH7tYgWXVbAPooNFmbVq4PG1kN9i51KKkLgGjKCHmKVWpiKJbCMtmo6EFYRZH",
  "key16": "57fveDVnNFp4jPkar5xFgeMLZBPikwJGd1QbWWeBTVpnGq7RFscFjv1iTUQHnXjRjUHxCGbBZCKcja7Lsqhqep4x",
  "key17": "3ikUp5kWHFBYyaRKVruo9mz2mBvQkCRpcBtzk79nYm6VAVq3f3fh5a1eqgwtc5K33SKwU8hNMVp5L9oCqtgUVioQ",
  "key18": "Prmxp6f1o6dgNyg2GT6mqxcDW3G3QEd11rdczypkSPrVRNuoMDX2frdWPoyhSzZdvffbiQApJJ2qmrNP1w8Z1zt",
  "key19": "28DmsYjT7MoypWAuBYsJWYsv4bnUeW3kznHqyH9pwpUfbdaoCN1Tm7Pio47QXgFPgAGruuRhJBtL5TYfkgPrijHU",
  "key20": "YHWEQcCxzeqFN74tcVdMbsme4PdHSZGF3k8thYZfo4DQTdTSymrAbQpvnrvAPLc4EHfUPYpUsibq2Ejy5sU7HgZ",
  "key21": "2Su9neRUqRMosRR3BHPKxaHyhXk2vVWcPMbnVEDbGP43nkRjvadfwUhrsC3mZp6mRgc8q1opjGfcB8ik62NQPmqH",
  "key22": "2Sr6RmBZTzD3GHS66FKpDt6r8SDV5pdUBX5AXgz7KxwoRPz4wmE3bFA3Qo9Z1WHQi8hisAyq3udbNsR7CEi6un9M",
  "key23": "4hNmcJHumznnR6DkSDngsnApD4NQT2wxC55i5HFjbP52Vz8jMVwQSwZ8bd1cdHxkTh6g4CquZo6BhvDwuAEkWUJp",
  "key24": "24UepRugx6cVPerFHUrk1JXGrNtorW3PaJFGbXGsRDay3b51GDGKjVsA4GbSQuc7yB5iRn9E4anRyixfz6WDzGth",
  "key25": "ztdhHd3powyrfZuAQVXvw1WkYyqBFPjDbZdprN1owxDiDKJ9CVEcyrE9sm1meJjUTx6AZgwVdQKXXgoL8TPLD9q",
  "key26": "3wYzrXL3mYBsGhM8VdVc6WvtQmtoq1nJSwmBuPoBPzjsyNws7M9Ff2kFuVdwkJgixNgD83mAVhubtiFxt8pUgUiw",
  "key27": "4sYLN8Eq52ZQfkFNWjKqBuZKw6zmq58yQPSkZG3eQbSdXqPJxJTbGorpMMzkHGYgiFsVSb5pHjhgo5j1o4TkCFzV",
  "key28": "4CbRmv2HghCKHn2927Y3V6Zjkr6gbJAmkxuDjciiz37XvmEuKH3WNR3265sgo3Wh2Wd8ezgWmW5dVq3MXW3bhPiF",
  "key29": "5BhpLkH4xrPmYRHhaYNXQtUDJhc77JsnXeC1Uk578sbPkA7HwCPDqyyeMDbArUYb2Y166uig7uvfsrCnsLe4tKwj",
  "key30": "23LyoLZnVSjNMTnvW7hF716wGutojALBVbccm7VPVcAcWUQJ61QKJd6HRYX6UZDZAVxm76ERndXzwbTXLtUKArw4",
  "key31": "65bVX2PoQmAW4wSTgXtatZm5UutBWhY3PbbJLDZ9h3DjugYKWBKL7eGC9s45Njf5VfP9Fah8z2e4yaSdSkJNsb9q",
  "key32": "4XMcb47uZ8r19bJr95xPe6gEWgu2zc2bKPSZXLp88eEEaFio2LwyXokikzgF8YnAmCgNgA5wrJtmUtdTUvgMT8YZ"
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
