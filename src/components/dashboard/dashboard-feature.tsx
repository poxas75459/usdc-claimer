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
    "5CaTpaw6Lnt3QB5pfrSSp9FizAfEkvynaNgJnhYKhZ3X5U7FTbzwKia3r1NPRippWyhGZbRiCv5UN4rhoCt6Qbuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LfXd7CAVg6AHFt2gBT2ked72EwYfyyaj8yqm23wU1eYGWYKAc3j82GYYcCjnjoEuqHo1csSApYbDkxwjeYkgZUe",
  "key1": "2aTYbAFWdxQ7H3LKVkhA1RDmok3umzGSQqjNvDfnKfBhHiWdxzfJDdWrHXPqRhD8bWBuQiWJqrm4SgHP12ydw8L3",
  "key2": "3iabqMYGW8EqsxmcZzeiiEv9BX4bHhnNrhx5Hi4mfFM7z55eC3BFSEG4hTq4MhA1hYCdF5vAGBQbZYfoeTaBxqAe",
  "key3": "2b3osCFeqyXznEBBdgMHSdgeaLpsdJenXYpfrU9GMmVufnYbhXe5R7Z7BTmQDvWBWnbuMB2TGYCGsnsZj8dr222W",
  "key4": "2ym7wCddrjYHPpQfirPQpQ6Rkje5hBfAzqKPzyvpDgP1XC9EGkmwE3PtiJvbc9Au3KSioWofeRG39UN7WJcpY7jX",
  "key5": "xQ3ueuncS7Cnvbg9qin4bwWgKefB6H7a9hci5W8nbFbFWYdSg5SkdEkotQyaKYmzsRDZeXdcEyYYut6LvTyB6Mm",
  "key6": "2bC4gTe1hX6fojgpo7DEbd1cZicPeNRvGVYgqdYwvhfo25Mq5uLR369AQZDwjznX4XHyfmkNBxDXf9vzJxnjsZj2",
  "key7": "5iPUQ2LfqjVfKZseovMZjZTuJAUVzwP7Jj3xtsxHxtWXCeWVZXzzFLxWiNGnEnJX29c66DjjBXDEP8Ncq1H24gGd",
  "key8": "g4odmLBfXRBV2fRpWCoNPxsSM2wd52k1TGPcYNa2C2KP4rQNbsCVZSMPzvCYPBFd3uZF9JnDNMjUhUsc8NNUPef",
  "key9": "2usnRVBZm8ySz6KmdXfCD3qXoVnmckCqEXNmMhgQXBAa9NQRQ3oGBBP2BjJBAmgMkCzqvT7DpzYiBs8848F4E3C5",
  "key10": "6qhnm3SnSqofeX1NQk7MQJbDJSRQsUGBRK6QgC2PqeovCaiUy1TetAdWxotgRTKgPKyA9mLuRgsUbNSj4yyBx7v",
  "key11": "4VgAszxFyUyfPuh7kUrSE97NebmLAfSmDtUryyXrvx7xT6huyyzeZf8eTzgBbjsryc1Hkmakq4kA4sAjGgqxfAJB",
  "key12": "41QkWBN5jXU9RkUPzYckmyLQC1LvCQRyRifcVZfXDE7Wns8pJPe7FsrapFTRaYaimZTd5cceLNEcek8kAePCe5UF",
  "key13": "3H2GxFFu6jQhbAW3wLsokLgeXuygfnFXG1zMS7fXMBmncrV7CfukGqpPBEnRM6x918Mbijh4vbHa712C74SwP21C",
  "key14": "3vMafdvG7dZfwjfrFh5sJJcYUVTHxmnLGtYEoCJKmyA85cB86rKywmtucvxCof7oLuH366Bk82U9F4ACKcfPyYVj",
  "key15": "4SES1y1MkpZYvfMR2k4qcqUpBWRuY7yncscQv4Uwz4AstseUHagwhCKRXe3ExszNnaiKKMEswQgC5qSauY492bwC",
  "key16": "3QRDeZtivci7CyQ7wuaxRX4mERQGgKdcv44cnwoN2TDyfKDUU34tKtnRdU8k4wmCaSNeRjv4ymVBncT46ibqXjEE",
  "key17": "5ZnVFBToNZwG7Kn5qEh2PFkVyWccY75YnDG2ooXswkq3MboVRWcNwjh23V3inDokKLmnqryrzYqEwGs6VX52CbSa",
  "key18": "5EARE6aRaXo3XWoYKcvRLmRzcYLu58gayMNqLn5qMCdZzQH6JWPpTCdyLhC8YroBBbye9nFctCNe8eVZRXR7rypa",
  "key19": "5jZtRbQnLFhitkKSyCkt1d9crVtuKoWtrZHG5eZhHEUtGR9nZMYMuvwwBhttAr8ntFxWhPTZo8sWfxo4JzjKJWnB",
  "key20": "wvJoHqZgxzbG3zkgqAH3RC4VidLCfnvvQ1zJ13zNiSD8R3v5FbeAkfRKMH7UX9VgBJNN46jcQxFPBq8YRiC5Pos",
  "key21": "4Lo2hG7takHhjPAa7ryTimp65ff7xdjKw11Y2NPvhhF9HDrG9gVcsYy5zSioc8weHU8idi5NahCV8QGxBuhH75np",
  "key22": "3YeSLLYGw1naYNAUJamZ9rTYhx3EQ2zSqfQ7xaXDg1QMhdD57R3RgyKKbut7UvwA28oLR8kX2xQi3mmxhNvshRHw",
  "key23": "q3piuMYVZcZczP2Yow4zumPzi9ujN5YS3hL6j5DxyVGDu4AUXb8jfS1az24MTUSRTNZjqrZwFmsjJ6fSsPznzAL",
  "key24": "58BtF3pCXbj2ALZQ56mDiK83P1DsVVp7DabSi394KXDrV32kLfbVgPCuHxZ4T1AVZRnUtW1gWVNLLhjYK7Y5e5ty",
  "key25": "3FeWaeGCxta6CoaALEhoXFK7HydTMLfKo2NC5nkmjXQtsjqrbQTuKvcWqAGqo1YiKscHTHGs4MWT74cSsf7ZotKS",
  "key26": "3qMSEkjAELnQJUyp15Q6qLpzhfnyNFzjChA4Z14pZ6BQeCwGdkVEfDdKC4ijXwwHbGxnP9YVcyGTBtTK22VNMcjb",
  "key27": "5JtiJph2GzyXaq1363kWQp24hKoiLV59LRZRiDLB6fGDdXBcwnuNRvAaqiC4yawwosDHLYqrM8yeJ3yRz5ixRr48",
  "key28": "4UuJozxAu7tZU2zN12QVcqFS4LVNc3j2Yn2XjHtrKzicvfdKPivAN1oTKzcTLCB9YrUfndUsgCVPNvdS9HVwvKeu",
  "key29": "omqpzTZZqTDZ1XGNZFmtA7SNceR4rQkrxuKAQ2Z3Uwd1cAcNWy1JP3eqUW29jJMRSSVqrBZPGHaTqnBt7P7JvHc",
  "key30": "VVv4BcR5bwXWe4oNHUzkW6T13z5hKDmevWjeLZCq4KJGAV3pXtCbWHZEDkGH6Q4wK41BqtCXic2W18yisYoYnaF",
  "key31": "5i5dvkd93xyPDGy1uNVCGkXMqK2e87HN7SehFw4vX1xQUSBAjFYShBR6zb86wA6tCZ21cm5dzF9oCBxszj8Fvo6j",
  "key32": "5w3fTi9U5VXodFy2bnM8vY93jZcFoCDzrQ2fptRgxokETjZ2VrQg5dqpo9kCcuy8XpS5R8yevUaDz7DquzntSayf",
  "key33": "4knWA94BH4CaY8C7bsfn7GG7nG3VypZGd5sv5yT9tC5sjqqT9Zort6pV3J6sRacg6BhzmfpPTg3Ugrk7ttzr4LSs",
  "key34": "4ZQcQYSRgkGrPZWYJEgUhdsLtDtvt1b8bEasepvYJGT5GpBQypoJoVH6cKfkNicftWW1Utr7NsM7BaUhpNahFKT7",
  "key35": "X7PbZxgfuW2L7rDXWDMXWb6XYxvao9NG8Y1tKnCn5HQxRUVBUhxoGeUiFd3WnRkSDib7f8dCT1YxfeT639rS1db",
  "key36": "58SVmva74ahYWJfhz5qTZPbu7p3Ew4E6cWvayvvyLT41whgT8QXimYNzidexUQeMuys8LFdyUyQgBLJx1redwxeh",
  "key37": "BNsCfR7d27EmuJLnDsX6e2RMuwyQxTjpbmeRVEHHXSZ6iJZoCdWbBpw6uSGRhpgnG5NrjePJyT4w3spGNgPu62i",
  "key38": "55jxTRw9qBmcy6rHiNH1uyF7CN7RTU8RGRJ9h1C8ZdBpZi1obfKoqqBAG3L5wmVXww6qEhme4buTLzAJ1tB6KaSE"
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
