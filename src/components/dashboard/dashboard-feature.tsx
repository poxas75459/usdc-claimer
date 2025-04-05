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
    "4XAjiHDjhwq3EyeFhYTBK1brHR4PTFxwmgeQqANdVpNM7CmKJNL2eNvM84BiMvEDvpwWWkHjcGoQ9kVQimC9jbAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPm8Hv4nG9384cw8xzc17YDps7hTbBE1U95ngDWR8nhvqefhm1Sun9omfAJQP8n1iocVzj2yjA7MJCUZ2zi7sxa",
  "key1": "25oKMohjt7NauNZtUhXg2bhWpjQCcpm3z9ji4cRSzUML6NgPPRBGjH2fKAYBxTUSZsj6MF2rWehQWoLkPkQoATEB",
  "key2": "4JwdvEAPo6Ny4LcsYSdhfHX9adb8kKrjmot9xwCG8rdCgi8dXRtPWs9W9vdYfDxnZbCjHUsGjAQ983rLphEcQssq",
  "key3": "5saEaVwLxtcE3QRR9W5TDRaoS3QYHcBk7kwLZp4kUwqqG76rsmBtigf3zsUkzDjx4RiaXoP9XFHxrywtje75NLp7",
  "key4": "4pQHX7E69JZgWFncjkFtCshiRQ4ZCavhNuJaS4S1GXFnnnhEKemoxnJvAokQkZD5KnKDsprA4eetykdobQP4tCTm",
  "key5": "5QYWrtHnhTvXW7zwuMvx1h6XfyBoDd1C95a6LGKE5X9LBw3JH33fPcCauqstccir8T8Dh2sMCjvszFxmHaVEqVYQ",
  "key6": "5EkePiwWH2BQDw5x64p5g7pdeMmRe5gYpnnQy7C5zPeUHunxudtoUPKH9wrc5vFCYTvMFb4FUZWRoEJ9zntwdKEM",
  "key7": "5qYCdXQH4jzk4U6MGF4J8rGqpQsEKDh3v6X3yp2o2VPyHvDUChR3UbuDZS5fwtbssdws9S8NZpo21f2m2pq7xWSB",
  "key8": "3RnNLz3MXQ18gbpcN4yUoNsp8n21A2d2a8pq1g4Y39RZCLGEB4yzAuVHCmbz7Tdker6AyLmYUJLVGSjVjbBTnUjW",
  "key9": "phoVakEgaApni5UVriXAo7Umd6YoJsRURGN9ZZJeeYT3zgMYgdRfC2AgQLyVEKpAq8gEyJjiSdqpHomMqUJbP3R",
  "key10": "2bAMXxuKGMER7eFf11b4E1yzk9nkfiAfhWZAcSSncwgbcwxrjyjjM4ZdVidQEz5z3a59eBDF2pCxw2veNZimdj3W",
  "key11": "5zZr8gSgSn9GCexQ4HpsmoYLMiz5aPXMRCgdML1hB9B1sWw4hyAcSHdPdrZUk5arL5b353BcLMyMBHv7w9gMUdFV",
  "key12": "5UX3pKmoa8rSSvo7LqVWV2NvQLL1DEAsLRypuQ9S6p2KgTNXjG1A76vzMpLLfjzN7X9osGoLEfwQ39t34TRR6tZ6",
  "key13": "LMVkpNhbAFqARen94E7WUKjxjj5MNBb4wWhtFoB69dpYBggmsSqP4dzSg8aiNo4JjW1KZ7Xrm1S2gcz9gC6941P",
  "key14": "jBSEZDE5a3CeezC7wPcyfRDcvywyBqzycJrBPrmmvaHW5q7KXeVwHJ5S8UYaxvgdHYbkBCxUKDhqnUcfw7qEqEW",
  "key15": "VYdmN7UA4KbPwwYvA7xTwgqQ6JVfZ2cyy4DTNkboqjEfNJvPcD4PGibjQN6SPHq8E7N7AzoiMehSdjnu8y99fvH",
  "key16": "48vxJtPp6XW4kWLg1wHgEQrZMeRwid4Z6Enizk16gfZPDt7fpfk6b83LCV4DS4UFs24vZgY3mWAYGpMdA9DdCoDa",
  "key17": "41ERTVrKgJoX3jg217KAM6PLtJ8rrXxHpEVFWwzrPdTZaxfscTeGb3j4ia5yagmPoHWk5ynZj4Sh1tXQHN39Fnu6",
  "key18": "36h1cgAUQezrkkE1W5jpcdt6LC9t7zkr2hwgdbTpB7SsFeGXfaAAbJtwM5bQsCwFhPppVgec5bisR6xodX7PGbM5",
  "key19": "2zR64ZPFo57uRrEzkshmR8DnwQCCFQSoLLqhHxQzkZsUyD5vYiSWAJrGabXH38BHAKidEoeJieaEeAnUAgaN8U4X",
  "key20": "5VFzSmPzyxJeKNiXQdGxsrwGzM3PnA3bMD8tvnc8RtcQd9BW5TBeUHuwUngV3iWc5ig1b7Ug13bcgfnLNPVg1rch",
  "key21": "3QabbbTs2VUzy5V6HSokVkif6Xdq2eJ6enr1L2e3Xii5jHWk6SbKHaP8jkRsYXC3TdshRYxn4iMcqAreQRiCD8oY",
  "key22": "4cLGCAKaxS1WV4y5ziQ9bRTy9Z31FKyfm32DoMacMh9CwKCpdYnka5iyVGW4Wm4VHkKdMWLzemTq4fLFQrWD5nUd",
  "key23": "4bpX4bE1jEZ4TEdFcyR1aXhW7YbKHxiS2D6VjQyfn8TJTPiJY1VsWTCms26Cvh49Endqn5cnMWv377mKiEkpp9cX",
  "key24": "3FaaWDCH3KJS1HudmCH66TLxwBHy7JcNG5MgpNyH3YMr29LbnW3ZkM4NCfHXsYGPDzphNo7BbEcAuqahjUi6wRbZ",
  "key25": "48ru8tVMPWNenVKxrTbucF73gaJyKydoPxjBgu1fCHq3dYqGhKZR7xTsw5t1ovHYZZVJvTqdnMM52x5nW4GZ7pFg",
  "key26": "5L68EqEJivPWYYpUNEPFL39U5PFTauCGqoWMqbSsVh7xLW1Fv34oAUL82h3NdEH7TMxHaGDBJw22WWrYqSzXV1zL",
  "key27": "61asWdX15UXMLNi1a9Sk5SvAZ9BEdfGBd9NgWqVnP9KGRKxxnxQYnz7SfMvztjZfUYrn6NjNihf4tGZciuNtPSoX",
  "key28": "3Qwb6qBikciSKSHkutTWXLaNFyUXJ6dqmm1jGRSukw73i1wo2ZqqpZgLHFxBxDYuanzNFja6MyGY8afNLNgzwkbL",
  "key29": "5BF8ho4ofiYKb7PruxKSNeN8rKo7NmXjrBCEot85uYFTjGV7tGfDpDP839pv9L6CWJoQvUcPnHUU9nN7Td5MNJoZ",
  "key30": "3dUrFFotcSfKoo87NBZRyJpTAgXUbYJyE4E4fx3wRN9hM86BkKzZPFD8PZHN3nb7eZtCyR4KgAaNMU8o9UmkHDeb"
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
