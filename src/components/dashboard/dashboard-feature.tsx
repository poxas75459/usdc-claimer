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
    "aR5ENG7FXqLB8eXbYhVvQNu4PCbKmQm3KzmrjAmsviKuVTXqz9pH3TL8asnM5L61YjKp5xGaiwQAtuGREJ1KHoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1Hw3YmWd7MMxrrFNjsVuFFSwEkac9At43VePDPoQZWs5AeiMNy38n4HBo8eEBonGN6t5R3DpsnEG2uPHpgi5LS",
  "key1": "25PXBt3eKcKj9pkK6t8EkxU4r6fEF75X1ALjoQJVrdknaWwj7oZxwhWDW1oPvE2PZHuYY4awXx7PKb3nTPj6gikR",
  "key2": "3225g6BzLKFGFUMuhTKPDhMG7FBkwwue9FZEBFmy84CnGteiSg3NsQ1hFi9u2hjC5RLkL4JSR9Q2gMNu2MZK8Yb2",
  "key3": "4uH1WMzpnck7JvveGJMkCKVKzXF1T9BJHffAdJgEGbQzVQn1aGDe5UmHwjxACMRHWPDZvgq7TdKcgzVUxf8zfTKs",
  "key4": "2GThi6U3BdzcKDkj7pExVArei7xmRjBTTMJcpRMthTfmWgY2v18a93zBvRpKZeHaTxuLq93JzexAnvaHBtR3PwiL",
  "key5": "4dZTNTWCNvAA3cznnv5R9M48c85fmmdbJjZaowFwXKe1Xv5HeECpT6LXpWTgbWjNHj7FgZEbpbDbedVV5npxzYxY",
  "key6": "4XfWMHS7qdvZbDuN6rLcdVw45sYbEEK9bUhdKw5FHkMLWHptBsYyuz7tv2upLwRGvmY8JSvKHLDHJkdRgRskD9Lb",
  "key7": "2VoQw8uymqaQLAS1jyNeAXYWxcd4sz6tNYw4DpB6gKSAsBpKQVuZoXnsQGewNF5X2XRZLVsXkt2SWX49GQGjfBfh",
  "key8": "4TFg7jFMtTuQ2uaPBuFFwqeHtXa9o6JG2ke2YtY9Gxgy91BtgzP6U7UQWh2UpZb1JEpHP9miU6zT21pQs5M7pVVC",
  "key9": "wuvxqtRDoHTCn5o2aTomKC8LRjE44PW2rXi8PWHeaT3y8BXN2aWTGcpmHdBVjrRVjXR7r6PPrXfahdCKSjVB9Dg",
  "key10": "2w4c7Cpd37WwSPa4tZCT15LHfYe4yJiZYKuz6KmDMXJpGbjX1qxsLiZ2LqgUXgrbXGBX25M57T2zV1EFSpFHvNDX",
  "key11": "i4oytEEhrPfsPheyXA5g1UGLTR8i1Wc4z93CdMLUQ8LsbCmQBv1VUyMynhvc2Qq7MnPkLSmS2ccqQgJk8fAP6eb",
  "key12": "5o4ZBA67Nx7XnEG8wYSCcdWY1xSLisPgBPLZ9DMppDkTxRQrW7ke2R1q13bjpbXzgr4oPqETnnEXv9XScUueTBCA",
  "key13": "3JueRJWdHbiPZ3yU2QLp4Hh3g85ZLZ85HfHo7xfqRxb7Qhvwhhu5qKdAf51iVnV5D2Te97oZ6o79L1EVTm7kwiTs",
  "key14": "4xovuzY4kC9Fk9FnixhGZf3BPvqxzAcWUAJVZR55vNGQFEuucKSfWwd34XPszcBUdXfbr5mRoLhZHWmKSwBdhYF4",
  "key15": "4vDnrRPcCMLbrkQJLP7FtRiESzo4X1tVHRqYSk6VtHcSjBNsmSzynS5b1i4n93rDbPbdh6rEHvxLAcYPxcJAtWNU",
  "key16": "nrtgBqsL4ZWUgrFNKwtNfok3BZy6xsmzTwu3vgoNdAqRhBE8gNq71DjGnXhjEchPVQnkQ5amBqd5nPBUnEuuz41",
  "key17": "5CdBoAq11uFJSyKgZ1yGYS4zHW1YA4GqAs1pK4tadSZSgX98fg4ejTDTjJyYkvNgXgFSrKX5xZFYLhxVujKvWsnf",
  "key18": "YZqccGhhipEctZAinaTtXh4a5xMMQT8uAxvNJgRDePPuWyh9bRoNBfDm1sxymLEMyKZ18gK9RmfZwH4MddXYsTA",
  "key19": "42fgVwzNy5ifs6ma57WFWXzJC2QEqCFFyVPnfr57yTkbodUchfJVnrWMAUzp2oWEpouG1RgwfZGCTZs97NfARvFA",
  "key20": "3YyevNjdMVy8DPJGPY7B3JK2gYwvMPxuhMgx9eisUrnKfrNbJqWPfJEn5g254nQXyR3e6TfakmLpGYwjWFqJX5Ww",
  "key21": "mqpR7JWVyYZUjrPf5xUiS6RxZAZufZc6sFjiw4YSuuBunffwp1N4mBFdLhS2QDKBvXdsPQ3574aGMcfmBNQC3w7",
  "key22": "s5u12ytMXKvy95ciRZebVraWBXheUFZVvHzS5yPW2NTvft3djryU7UCrUb7tWj3VkdqU9hFEK3jeH2HJjyasqiF",
  "key23": "GGQSoKiPQHr34bmV2dt57AnTZJ5Hi3QGwpYvpKxaDvM32PXppavtiAd4sRkuA5Q1NDT36dj4V2xtAa6kARmuEiA",
  "key24": "47ZdynGGeHbJ1r6wYcKGfNZJ3vHJb5eEwA99LX1r5sA8GHWiKHenzG7qSBZsZwh7UwiETx67cYhe2K571RgXWQ9w",
  "key25": "2nVuvneyzi4CBWoZDLoCTTh4wVe4gBfjtApQNuEFfbQfqBnx6wgqiwHKircSwuiPd7JnKDdYUVGGzc1C9jBYywQh",
  "key26": "444aiRjJyB5AGpGcts6apb5gfQYBU1LTSuP9tngUZ98xRGXHbEWNn8YsmbPBjkr9ZNjECGVev7dG8AQc5AnwySpE",
  "key27": "5MTxZZwyGfT4aeeyDgTxenNnqAse6e8SGGpsqd9FS286kjuvVTzVGNrReiEGY7Yu1NDFQiQacbWsZUbWHV1evy4s",
  "key28": "2me5Z1xDA62oNipV1aTFq7qaX4WSNkv5uc8yMrUgoAt7yJXUy5TyKL6PnBaGTnS8jio5Q5iq7zv57rMPESGqKRaM",
  "key29": "35NdFSgPbMzvAEFGnjQrNLxXNc4YERqaqfvgmQW9CFr8Zfdsq4cfb7DudeE3hWXqTn2WjTL3huTx8YCbvgNfBNXJ",
  "key30": "3cCNjcEZpprW2NPpKqnN8R5pCdQgaL1N4jszMe19uh6ZxZTrjx786h7zswQyPEfwp7vcQb3jRdKJtyDR1XmRQMRk",
  "key31": "4ggFp2nE419GoBehKyEJvaLCkX5KVXGcx32htrXLvjQzxhijX6K3PJ4ocPmGmjHttK2a2AF5HSXKRynfP6eY7Hxd",
  "key32": "5VLqpmujAYpdkgv3XDtouiDFw9Jg4NgeA9wPm8w4gVj6zAhyxMZNFRG4udr5aR3mMeyY6m6mzS7H84jZjfxm5iVp",
  "key33": "4GgP4RDpe4fy5ibwR6N7EYkKeKs4F9Tw59WxhyM2nAW4qyELzDBgk5suuvfcwSfhHTLZtjKqA5kDkgUyrbW9arJq",
  "key34": "AcBiJW1Cf6F1PQQ5FCvQVgXThfyzAHBwpAmtRKjxkamzzzSSYvLxk6AJz29KkATVeEL4ow8h9A1wFpUPk7kmDz1",
  "key35": "4qfkupZRjKESK5fKhbGfvvZhPbvbUn61BQPXP58MkqLNzpLQy7uXbRcwM8hcummsjFWGM49nepcJAtAC3nkMy88Q"
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
