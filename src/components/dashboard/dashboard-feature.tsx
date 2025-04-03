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
    "34XEtzACq59JdCSdPVW5wWgbvD5tHQfQUezAhBeg5JrNygfiWBpQZmVzDPj8HKGEZPgxegZD8WwJMFMSdAadzsAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28nNGBXASk1D62p5odpT7PcLfsnvfgeqRCVTWDWC5re8vZk8Dr1wGcgzjsxLc5wftL7Ub7rQbAmmGyynzHQqKbCe",
  "key1": "5MhMFw1xaUdJZWrHafhDd8B2Ywtp6yNAcKoZCm393JqvnRsSjpfj91huH9FDjQtxwgDyhxJfjvuJx4zGpqj14fuc",
  "key2": "26YVNiW7GSrTgzqVDUy6G1erR7PMLesSppthMLrcXNfM685gEqqcJFVUuBxKaGsJpeELcgCkzgYjHQX2nWuPH9BM",
  "key3": "2sL9Jwnd4ZU4hsgFqnzHbK8rRoxCfqzjaEJv5k8Wi8YjzjESR7KE9H9zdoKSmrFgTcQsCfksRP2KWhBGViwzDRTM",
  "key4": "VnVSxCVYpXWoaXwp9ospb5nbK89q8dVUAQmEUWjaXvio2fMUbktg75h373KDqwQiCCsRMsf3ZsTBmbWwbSh5T32",
  "key5": "2bZC3Q7xQhqYZakQwpzxEsbcfiZs4rvthdnCu6bWSLsSvinP5PTaQyQfTtXdaTGF7KKFr8tQorTit5jnoWdoqePy",
  "key6": "43EDhcKVBYHVJV2fHj9Qby4hmCXEnxLCaY8YyRvqSm1HJjzCeTJ5G3rJs8hD9jNwJpxPTA4k9CaMYYSCpYXGfoCp",
  "key7": "286nve6nzPEAKpsvhiusaxJ4Lz75vo3T17Gx7deJBabcYAGysvRxgXEfCEM6ktMqyV2YoyC6uddSd2sKh7UfTSmu",
  "key8": "3QataFF2ZNp2GEiUHHrhQrmzhjiTb9rnz3jJf9ifbUMHXZgHVqrciNTXC7EoJzgw1LcJyzG7mjuoWaerb5J1h8id",
  "key9": "5WrapAXcbNbmoheWPA3i7zvbZHCWrXMmDxVze5izGZq8Pxb9WFnGbwQDuWt1F7kNsbHEV3byFtNyjNhXCoX6Xp9a",
  "key10": "4pcFsgGbmnF6joewN9Jmyffk28GF5P4vtsBY8Q2P3MiNYN4xwaWBfEzHqqzJ1L1E62nh8Ue2tchs5Hr3wvLfLZR1",
  "key11": "57HXLGcRjqgZKgqU85qcsUdvvrHbZVVYC1XpStaGKErnPiV6Yy7pzTiK2fH1JAmDrBpv36hcEREEKnhRpAFZ7dJZ",
  "key12": "2msAu8xE6eWwhrYzJtidX2E9YDdAme4R36ybgWH5Sws1Em1Q6Y6D1jDP5io9owj5pXbeGmFyWnBM5d9Qf3FEqGkY",
  "key13": "bFJfjPv5cyb8sxPt7pQ6PZoLYVUAobZGHyF2thkTAakPzAcnRvQr1bEkur2SfcLtgxviAXURgC26zJ74xURVJss",
  "key14": "26n4EydqSmYfBmnHnwJtN4vwG2mv9Yx92wyPrkTu2Z5Y1MvsP53xtNFQF6F6e98gWnLCis7S5PZ5RHrt53ruo9eT",
  "key15": "5YbXg8r9H9jXCBnUeHxcxaLJmzGaCGsKCi5rLAGmHJZVQoG5GMZeyXhLesWn53PvZb7db88VM2A59jE9eK2k1ACG",
  "key16": "3Zr3uUeRJEFRzAFDV84NvdUcusZAuNzCrviotAHkvfstd9vxdLa232ADgv98MvDhMS759pAH5q4nRgZTdDjZJLoM",
  "key17": "4qiFDhaGM3outMdXdmX2Bhqbixjx1sJmGLGivkWKp7BZRxnhcBMQwkskLRPCybZorrALCQfaSfRmmuhWfvYPJqPX",
  "key18": "5ggw1HDe4NWWMbphCooKLcedP6wXdWh38bPDbwmbtRf93D1z2DFG9WCpVR27PdfyY4ohDVJbapdRyhxR7aQ7usf",
  "key19": "hCtCs3skYwHpV2gvoQkX71qPHQ9ePSAf4EqQ4xR2kPv7GScr2x6kRVVxis8jefFaqR6VTgny8m4ZsstuBW4RTpB",
  "key20": "AmeFFC3SyPVcMnLvxPLPdmL3J1dgmQxRxkwbaJqeYed51Ei1ma5fMpAyyUg5J5tgjywmRfDQznLqB9qEoXUMwuN",
  "key21": "3gmEwQzecy3fHWpnyKDyMd7eN8qYRKZxjU9NXnmq9YdMfTn3m39pmMREzfMiCStVX4r8777ogsybhqgqCPX4NR1q",
  "key22": "5XpAdwXQUXJN2pzGoMVq92yzKrLNPs6q2JmmkkAijumkQB3rgVrdsmXSYvWq8gHgcLLkzbnkm35UseefqWwTZZ3t",
  "key23": "2eLv5JVxH6Q4yU3LfgRy2P26JbQf3vUknh4VPN4F1Ah3LpypjAhvhPmrJpfuhcJGWBVBFgxj5qtDuRw7yAjsJiM",
  "key24": "4k5tKq7QucT7SW71RVWiK9E45f99ppN98xHP8nGYLK6YcuKGDcWrPm8QLynpPv5iJpynRwn8UcoWE1FHM3USDDn9",
  "key25": "4EE1i9SxiiSaTLpe8xtCTtUAhkCsMD2KDSER9HaXJQxoruDZrKpaiuhW7qZu89EyAFUPuunpPQyvNpXo7hDqnNxh",
  "key26": "4E95Zz7ngVJJPwg6mpTHQ4aX9gVMwuovo7oa41hZwxQhE1mx3ZWymHWbAPNmvTww6dz37d3FXLYnTigWAj7NujLv",
  "key27": "cfzE7VahdmxxHreoz791UHa2qKVfanWJskKXrguBgkxa3jDqfTC8DLCV14u98e25sAtN7UrTsqsZC11m8YoMUKR",
  "key28": "5bGzrKvK6E6qjENqWVPFUdB9sQVoQcE1JTxQT9AVvdq8kVxo142zmQpE5f4BS6yv7M4pDVrAmiGxgTPsS8GQnkn2",
  "key29": "5KSWBsLzKakPZ23AycjLSm6JCbs7vAVzWt9BUgszfd8ZWNK8tR2dfQw7JBhmxY3YmPKvFGLvkXjaRYv4YHT3MzHr",
  "key30": "5X6Xq4BzuXD5BChWTntp2Vu7GY5DXkCJLjUKcV9oyLP9RFvSKUDEES7uVrqBemjMrST4HqdmYYvYEnpCY4uFHbP5",
  "key31": "2AXpmuFHTqYKFVz6V98MqLdQjEcH58kWzSf1ZQLi3gwgMTceCWsV9oRFSSnyvTs7EqfemiJts9oV6q2KNTDye1x8",
  "key32": "2pGUrn8ZxzBKRn8gJxra4ySVfVd6EYnwvMvTh9s4EsFLrkQ2pmCdmpEA2YD4gaW8N25QXCvbHM51EXduxP5xnvnu",
  "key33": "dSz8C9ZbWJddywWabiYyrSFYRznr7132ipegQBkJGYrq48ERzbwm6dvyoNrWceZ4nvR6J44Snpgd1USmJZ8ph7J",
  "key34": "3qQXusHiBBxzkjL71wuJNM6nKShUXy1Jm7AkVu2mPabHuA8RgVtNpZyDxibQ1mmXR7KXmscMgYmNHtqRN186WmMn",
  "key35": "4BRNPTUMFciju5wkQuSywekDHxcXiFWJu6Ymbo1d1ZpqrZWS3xVeZF8Jp1Dd8VFWKBEiNzzQRe3YZnerBfrJ8S5n",
  "key36": "UC28WNbTMdj99t9KTnv4VsJ6atSRUb7S4e4pVDaMBEx5tgk8r5WrexdyFdS4vLJba6oTHPWgJJCD3eaCKiBeEWn",
  "key37": "4tRhv1cJwup6yMnfPhYJwswq7JKM6kaZLSfV5Rsqs2B7bTCsSZPWpfojAvRL67ir5p93BUkvan3umdetFk7Rsgvf",
  "key38": "4CGHkrSBTG2DtUcQmw5g1DTj3TgqRMaR6tHyX1QAUAT4Un3ykoaeKzhWjDhrhitNuH6thGAZUMuL96L3Hf5zvvuw",
  "key39": "4RXSweoXsnd5FonroUafEn5HkqbQLbDxemaJ9rfrjv42aqsmdy6EEDT6wb1XFaqhKF1BAvTT5nDtSbdh1NTVYrx8",
  "key40": "3P5AfLifq5DhKNbxABn6FPabka9g1vrKffophPiQRLLtwEdJEq9SUfhHRMPhVriHP4G5ANWRNa1w2RrrNxTxrrKY",
  "key41": "4t9re1ax7fgkFVnwZdyg5swdn7yuVNHMDWZvMcvHx8aBRFgtJZQvUCgg7SDdQTFifwNKbn6UEB1xgGYMu2jdHNQi",
  "key42": "M2BubgRqgZFcQj8jfQ6cuntQPjJ8uE5RbrkgpeUExs7x7P4TAGm2YoFSWoSusBTkFFysuJW5RqJfy4MLGceTjoy"
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
