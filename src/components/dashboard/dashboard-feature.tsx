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
    "YHLTaVZ5eVzrGYB8ARo9uUWmv2Cye1NoVyNjYd5pin5ZFZBb5c673p7XqG23cVBHhSTBqRYhnfFk1ZqCLgTEeoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gUCBBNs2fbMMgpSn1XmE1GFm6qsFa1sLxV1v6WdTohZQz7Sgg4B8H3b65gRKSzBwsdtP1m8Evi14dt1NSEFYuFF",
  "key1": "4hCgQzBwDiqK99wZd56fAtB5dJ1ZJ2sBZdZbkiB84N2R5MR7H1x6w1TNBauH7k95Jyvt8sq17cuGs26BYuEzxuYi",
  "key2": "4cdcjdpHKAWnp7Z7YTJ9yJtgYvMkqfLr3SCLPA4UXhuvQ4aBytjWU2Mzm41oEfWCwTzjw5fjJqASzgKMTJt4ygsP",
  "key3": "bQXvrYwJ3zCqzowfRgnzW2mvLnuACmwMXid6tigwmToFnSLZVZW6rVtH1Y58ivBcnUb5iPxSn76QZ9roFEd7fYR",
  "key4": "5Ki4ADSUdcZP924yadiZnYvKM4oy4JwWKdpRZQPbNnmZyxN9wCmt8udKPFo8EHRaQQ9rJNdo434w3VRk6cJRZBxH",
  "key5": "4nGwGniN3iXL4rTfaxeSYuy2zcQdjAZaL9m5sXJTYfv3Tmt1rUvtXmGfHVwFtSp9CjVxTXRaPGMhSGnk69ggbYsY",
  "key6": "53mR2aMoCwLVmAsDzJmPykEXnUewHzE2WZmUiqiiwUboxKs2WDPBLLvVfbnSNC4Nffy4EQtb6BLBZGaJi5drHT1d",
  "key7": "5ooWtvKtz69x761c6EStjfub4o62d23rfDonywRTDHECtycSvA9ai3whfvjPghWnTVNdXTTVZb8css4X7imjiY24",
  "key8": "3zS126w3K3aZs3zAb3prJpGc8KG7a8Z5gVGtmKSefvNoVjiVeyYuPKzYjTmWfaBnMU8MYerfqBW6dnptACkt2FSQ",
  "key9": "4Z3aftQXn5381Z41TFh4bUGFoqqTDhCU2XcDtwnQTBG38a9kZiG3Q39RkCRhqWQEjgQC4qeyHL3CyeRo8PJpAfrN",
  "key10": "anf492UA8dwKmr6cQXQ94WuJBSF7fxThWGWm1wDFzj81n1LiZ51GNZe4oRRxJR72Ex4NL92ZMfPivCF1gETLWDZ",
  "key11": "3z9dtXcfyncNEfpG2MoryJoKZsWXwa9Zegc4yLH4mnHuUqjHnrRUh6bh1yM9hP3EZsQs4JdeycfqzRMivVgh9Eut",
  "key12": "5NmpkbjuSPk3LwksrDRrHLvbfRqHFR5QU5fwagvhv7cHotPnV8sSQKT7i5oop6mCpohZL5xB4tzuWTBpmQB6goo7",
  "key13": "5K6tnHmtsg9NbJfoWTzX5ipwejoxGE8YckxUroAogVzssb8RcdDxVcNjBD797SPET4hEePyH4zWNDd2hrWbr6qar",
  "key14": "yPkt64oKHbWP2Xd8tJq6L3QjRQQXTQgTGR7ZRguodKnntFi1qtf58MBM1sUUSSQnRTEZhZURg6u4RxVtqZ4N1V8",
  "key15": "2vjBYpDB1oH7HdYrdM38HRmN1wQgxi1pAaPfZRZxMX6bxhtGJSRvZ2L8T2zM8M7P3aGJ5Y4HRTDdJzu4ooLCvojj",
  "key16": "3eiu2TNNUx2WarnjvNM5jndTqKLmuytrztLmakQUMiiBLLRrwE9FyZfv7W9UUJW1QJHgo62YwbGL7FnDfniHgSyX",
  "key17": "3iZmq973p4jDYP2jgCiWP9VBJvY4KzhNh4emWwacFghcQdaZrx2chdYZfEchfsJkkgththxRqKRJ6timyamEMbyc",
  "key18": "D4U7hTFj9qq4H77pmkQoBvKn1RXTo7rWRugng9txYMQDzQn32uQLNxZUx7k6x6R7woiR3ZhXgXCBcLxekneqSJh",
  "key19": "2ew6cQQDNA7vkz4GXMrEXgMWHia9889vpPS2ZQtf93rLLjqy6MbzeXkGKYNShpaMQqRVPjEF4zjGykdd3B7W9mTr",
  "key20": "4nk58r6CoQmKsk2DQgq86RpUpvZSod4SA7ZrFmahR8yT9Gk9rRm7kJjVAcoGFBKJt1y4NB9iwv6tWPspz3VVgdsz",
  "key21": "23okCp75HCjGTCDXQQKxMUA47T3bQ1uDwrp3d5vzZcx8SvwER8SKMNrBY8kZBsjVhvPrfKYJhSCKRfE4Gmk12oZQ",
  "key22": "3pHTGSzi9e1ED12kdtMFRoWzETiGeE7aey7EzVhKJv3GDuzGcqCifUyyF5BYcsQ1TppvYWTKJUW7PhsnGqhntfmZ",
  "key23": "3zwKDAWF9AmsHYpP795waoy49tDN7CBMaa2jBPk5mz3Sf4iXL8F8n2DGAZB5EsgYFAyWmyVqyQyp4Dd2AjoWqZ8d",
  "key24": "2tpMHyZqDYizwGGBBGKwnGfF3i7TyGUkv93j12diAnYXmuBGEftqP3iuFvFHSB7CEcEPBPtpKw1f2wdozuPf9C71",
  "key25": "3XWMJZicxrvmdXtCBRzCTxJvsND4eTcKQgG39DisfU1ftBNGx14PGZU8iBdvJh5QJU541AZgGoVhufgtp7YwmayU",
  "key26": "5LW9WVNTvQ6RfEkG7apgjzBgXf7EcFEg8wMFaG7Cka6nVPZeNKYzW7CVqmjfx4zm21N2pWYEjYtL4vaaRLGhGMM9",
  "key27": "CoMEPtQ9SkNd1hjRxcpnUaZ2zhe7n3wrXfzdTckiKXTg1XPuxcjgaDLC3FGaGe6Gvi5yL3uvpwp3j3P76LJdphG",
  "key28": "4DLVfGuHuN6hr5g1dk4fN3KoVwS7aibFaL9g3yQJnRtbHtsBAHJMNMJs2N8Cpfdiw4L7WxKxvEytk4E9PVfqc8CP",
  "key29": "4fntyK5rQggwYF2HjyfgDtKG46gzYpPrsB5GDJJvACzrdenArobFRr35aSFCYkhCBi3UzWVaAGSmUMsjb72nqJ6U",
  "key30": "46qtaRk8DiSrBBWNkaLBWHwb4YXyaZQF9vpC6yaKVNHjcCjGSZVaA75NeAWPCsLW9TgD16FTpUhzgjfb9acCnJH2",
  "key31": "4pzgGaWvAE1Kr5W388XrHFX4vMjphkwTbRiWUXnbALW2BEtncX4CnJ1uMpHxTwFPhTu4Z4enVwqoNXeGLEbWF39D",
  "key32": "2cBtuUbPj8WmpUrHHGa8gUntXkVVH1AhXeesgqf2qeR37xnoj77ycuMuA68336Z55bTemVW4gx2N1ncXg4pnKRRp",
  "key33": "6V5RcqV5o7d4H4XyjfMDza2NCCnyaL7rkXdWkBkQedmTd9my8DKp3DuuzcrThz8e7uhoMRzx6d6msKLqQearfWX",
  "key34": "My9HSyw1ZAcVzqLf8kAxBXzSjcmmC2Ub6K2HXYSpMgZ7eFHgjKZ6aU9FeN6nqmfwCniSHXJq3r38dph4gdZ7wMX"
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
