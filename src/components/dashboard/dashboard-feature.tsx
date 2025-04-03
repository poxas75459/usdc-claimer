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
    "3gvoGD1KYo9C6bk4rwqnDoP4XNAyUs5fcWCVbiQ275C67gehhbp35WMDnnCfK6HFMBm5PwUjxKCp8iiPJGDLuEgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PHFYg7mB1zwKgmRFogAhePinb8u9a5pmU1EuJxME4LuYEiFUNdJ8gyLPRPPuKsVyahG6s3VR2BrnJkj6NhyWNrY",
  "key1": "3AJYaNdptwdZtETMPia8KSaH2NBxTV42Fbqpw5UyN2xcyioq1b8gKKXNCvneGZQxVKFV7CL1FE2LFyWrn7VVYdei",
  "key2": "JsqC5HMRhcNS4t9YEXdGzv44mVfxTrbhuVGh6XEoAQqDSxDXLDZWZMHjMTV1iJt31mfuX7JV2G5ngfKN3TbdK2d",
  "key3": "2LDB4buSkD5ppwTBZEoeQja927Pmb88pdhMgZ7MUfAfpp4UvMmfrwCVfG9evd54uuXWsUQ1c2B4bVhsz1PYf1did",
  "key4": "3bEs1E4bXzbgzm9ixNyukMoDUQ2tkNX6qnQp7ZEw2nTqWgEViGHcviJThuinw6vDKht8vXApHhQxeYCBGsVB2tV6",
  "key5": "2mqMkSKMvyE6skpeiVf2YBN6RYVAemDgMVAEMfFjdvNTukZvqRqvQ39PnWkx1NkC6V5qPY6KmanQ7fhw3xB6GJGQ",
  "key6": "28gtqobAM4GM27uS7Dc7YKcbcZuQGfQjmbBA1gyFSHdEFy8E8pkLQw6mXjAvFqWn9r5t4XAHGuRd5jPNyjsHUZnf",
  "key7": "57RGmzGb5k78n1LkzonDJsE1ruZjdaQGeZB5SSMJ5j5FQaL1JWV3235yfryBMp1nspyzjdhbT4UuyghaukZRfZiV",
  "key8": "3urT2SavgJUhkP8wv36hAp52fbficNET1ugr6YZwXVv78Zo5RErUWuGCmnR9t4JvMdydBbhQKhKFdKjoe93zByhr",
  "key9": "4kgXvo6h7k9ZQkE6F66XPLwjf5kRXx247mFgBBDMRpSYgXn8ukDyvoCXfoyT32PAMr49nuRYjQzbqjn6XLoCjmnD",
  "key10": "3uTf5dpUijZyPKe2wxhtypnpbFW71nfJickhzBd3vkfn13XWWdp6KVaNyDHEaUwzXTsdPvQbR36PfR7yxMXSNKgg",
  "key11": "aJZzCRhGudWwqdZudCoX1kNqF6s14zva1qzwpREMJDiurcjwVVXmedX6TbQWWtJaN9SryBngMPwU41vctM4iEej",
  "key12": "EBRDhTbBmUibE8Ux6BrgLNw8qptE9BmXY6YHBAQTUmVB4xiTGeXDFBxSrL51GNAPjkH3Ap3ZA7J6yGmZpfTPaZp",
  "key13": "5broLUDDjavwPUvC3JqzKQe6ffEPUuvsXvFNeE3pMgJdMRwVUPn5bEuV1SkTSvjCjg8jQCNVtaBJzUvnH566545J",
  "key14": "5kcYocidcVYqcgFYrEPA4TZE4S1iEeyDGddCYLtezAee9yG2MLtKQZKFrtqtbdsHvrm1cGkbSzTobgTzK33CkhLN",
  "key15": "644JqikyMtXoHZQM4mHk1RTojJyoRqwzfhModCUnQg6P4iFvpXgrWRq8LBhUFkqCAfJw9MGf1upfmLj8gzK7DEdz",
  "key16": "4Hdhw9A9h3DT6JUXP11AtsBhe9LuwZHNHZpNz3o1PFCu6E8ykwqW9uCfj55JW4zfb9cnLndC6BGTooVNJXgM76EZ",
  "key17": "64uj5Q5w6ab2Ku8m9Y2ji1LmwUxuP3UoUsNWUeg8StPTEp6BKwji3Ny6sR1aU2xwWSRFX8nr13FHQzxUn2KVWHjs",
  "key18": "26ARP3qkRrhS4e4orhgUYYChjEcnims9abQLSUM4fFDC91yznBn1kEMSSK34QjXX3CdV6aYMq1mdE8JjA42tSYKR",
  "key19": "4fC1cg3jmWAVMz6Vd3ACjtBu8KyRe7sEsztoT7RKqCHgVX841d49YLzFh3YQSs8y91Vb6ocmeXhE4NPxCXhaTkDs",
  "key20": "27BAuLMZohFnQxowVFKJkPFCLBZL4YyYwRiWbu9niLcQpzLXRMnePkXbxCRAXkcAExEvUvPLQXfFfdc6t1CCoaax",
  "key21": "MjzbgNGVMPJUFzrYXu2QVcc5iedw1Qxj9GS93yw9EwNgBGFqUzXFAmq1biLrNcGiftfALd7qhSKGxG7FocgKfvW",
  "key22": "g3AY5yUokoKSzZNpPJnnankFKRs4i2dgsATFKYGnXaM1aA11Rp8WxDdeRgiU5teugF5AQ6KuWuwxqAuisSTLnng",
  "key23": "5icttzYH6kWp3cGX15mHe2cF7S9Gq7snLcdfGPFAAHq5rrMDyBbocQsGApVYyy5vsrRZ1t7ECbvBhr61eJT7FCmp",
  "key24": "4p1aJPKL1BRsQptuCXQU82Hw6UXKf2QxXUojiC59ZsMaUvqZc3oN42qkzHmSt76TN8wvCLZ9s2EXr5Q3L84eFTjx",
  "key25": "2HkeJLWDKteYmoRWiUnaATWbE9URPXTVsxoNLCekqC7hqLbBW2kB5JoMPutpe8LvjyGeZWHYJgk5jomNLagscKue",
  "key26": "2ytB7KVVrqNWtKRmtn35yDiSswxWe1dTfhu6CJxRRivZ9NJPgKrV8ikpzwRqqsCEcZTn9reJj4i3sRnxVohNEpE2",
  "key27": "2JTYtXkcdmJaFWKhy8PKGhDoBYRnFrhHCPB1V2beEeu97sxECn3StGN4DcSAGPiDxb8ozWG497Tr7DyoJpoRHYeP",
  "key28": "5Zuki5f1jy4SMRpfJfW6x4MTzL74dyFaNL9QzFpCNf31iWhLRy5721Z698qHqA9LwpGYk9WC7u1s8cLvLaRarC6P",
  "key29": "4Yzoocbf4EcoRhtb985cLpRnZCPFmUVRuYKopQZruhZjwZpGAm5EnQkhaNRkGmzKq356jHGkkRCXAqnHdiAph1ps",
  "key30": "5c3FfTrKsPVb5MFKRfY5Q7Q3Ac7ygPUeW7DvzJeWcKs5YXcegQAQFLTJrjCqt5PytQr7G1myHmPJnFQbfExrjW5B",
  "key31": "nukQF47fDPoab14v7GUsep25mjzvjXgF69tK8VvvtkiS9PiuYQzNepR6yNjdpjcKjCRCcwDUE4qZ6KnWkAkFLRW",
  "key32": "2he4zjeSoBFb6ohWYYHKrSVH8s8uS2gMPnJk7sjuCY9Gwqjjiyp74meXi6q6y5qNGUKu7cx1TtkXHuNnD2vEuKdq",
  "key33": "5UZmivxEcXZqxp8PMjmussvCCYR49AwNFR3aeKpFB7JKZyG9MCGEdTwhPQtvxZJJ4Y87WTRZxuK8vs4egearXbst",
  "key34": "74PzKjnXUE9W3VFSmqjFYw6459u4dHCFyyGUf8sPUC6yLUSAMap6SSbjazZZsDGaZJ5jX3TkE2xUEXXtxjKe7BF"
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
