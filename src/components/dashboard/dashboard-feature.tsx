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
    "2z8S6DQMuU8SGwP9TutA5Pgpd1sJ6P9oCo9UiMhM6F2BvLMnWFTMdbj2h3PbLdUhi2qEVG11HhxSDcxao7bQ4ZvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urcNjQywf4Q8uNEf4WV7PGrn1j7V8tGEn3joWHtMRVwxHWRkebwnB9bxbhrp1LdZxnRDQgYxeaWJarPzoTPZ9Pt",
  "key1": "4k17RsJ8FNpEkohjFjsmNFhNBJQB2xHLsNE2v7xX2oonhTR5Ds8yztnHBrw6XnhgaaWzPMTuTEE8x5tByu4E6Kmc",
  "key2": "4NvvKxCkk2ghUxLi9A6Wnwp1WdrPV3ApT66oRGJh97pzXoGqnJzXyjiXKRhZRxyLdFRkDF4GLKNU4sHo9YUMc1in",
  "key3": "446UiJc1Ea8oTFedVx1Lp6uy2773fHJfVY3ZxW4yKXQ9VdVofhEF2GggGNxxmM58FSVb1bLRXNwvbULDTbxbEWRq",
  "key4": "tcFKHaMz4BVY2zN17jgsFFVzZEJGANzqMRETcrFZovQNSxNbp9HBL61oyBJbdnrNynhYqunZKxGz5RXjPf92mQA",
  "key5": "2ZjwCQDuLFHKs8NjZGsG5dw4dfoweALYs3fGUXzq9fsvPtfgmE6hzw76WpQHdtzzoYf2GV7yLn4JDpXK3UubbsiJ",
  "key6": "3yp4mbCHBHgmTBwvW8GCfvyZRForzXWyvsYUZSd2JtoVwShsNi4BqxAw4hkPz9soaUABAW8Q26ngEm4WSJ4g9Snc",
  "key7": "4grYCZxQWSqjAefLg8aiwCRDrUfNjruHwE81Ck4mzXn94RAAEJbAfBUn74kQWBfFVhsbn7DhYDu4hwa24Edv2oMK",
  "key8": "3AMzbj6fvzAQ4xUhxXDABb7iVeThuWVcjHWzbdNAjo3NKwMXMuo3Waa4oMs93eeC4VW7Pxq2hKwb8jEYfxQt2ibF",
  "key9": "oCyrjQCoxjCvAimUNYPS4oiX4Rztyf6YRwZL1u6xnW7pp2EHkJVz1UH5CQErjRnTz9RhP9xJ87hYdZEE4SUhHAz",
  "key10": "5ZUypZdt4ZBdT9AdcjhJ7J2LtMpqqwsBE3kQ3dJR3WKaE8d5WvJabkp4vXZtef5FbzBGtKyTs7DwM1XGejWr4FPY",
  "key11": "2SBD8KvL7r6F9VMZzWbfhHSg3i5hqTtAuYG3E6WoW2iUSp88qznatm1g1ab4mcbuEyWobWf5tRcgNAXoaXSREbVg",
  "key12": "3GNzXNNQpGyKePZVrga3YfAY9e1qMedU86EhtiFP87MAwfU7fnbJTfSxyz72HMxNzdWKhvpwk8TgepVERMV8ENSW",
  "key13": "vgyH174zCTag14titxg7j2yUvfAypT33u7EVYX41yo9NDSsWqeJkRFKSCjtTpSM2MR9SiXNK4ZXoSoYtWVcwFSf",
  "key14": "2EBnsZAZhKmUyabNTccXH4LdvCJ2ZgBWwaefqbaTP622DXrDDSc6wqUcZGkwidqDJLk94UB3pRDK7CY4A5xd3kz9",
  "key15": "5LCFBDvywBiEhZHR2tn3rQVkLX9G5fkhw91ewae8kzXuiBc6mfwjRyYw8hZE33Z9mSbEED6GaWkjeEYzWMvkxrYG",
  "key16": "1Hfsdyoj2TJqwX7fGsDHXTVXzpHV3TyaZokYJDmKf1W32fhBPX59EfZyq92qs8xM65hKQXeZovku5TfptQzWadC",
  "key17": "Kr5MPrAeMuEtGCbXjLa9mU1NybUcyc8joCbL5RVEmseZ6HYUusfp9DK7c32xCvbpXasXH5vGtL6tGc9nPj9EgXq",
  "key18": "4NAwKiqDNXPWDNZVmxYhQw81UPouEYqeHR28U26fd9zF7Nv5SJrzirWibMMme9G3wQ2j49r5LikrXBYDHYphPG5Y",
  "key19": "3diP3z4HjKtEdeDYjLEdS22TMVu6eGhbPyTN6QWGhvRzVuAMFXCYYaLgMgXAcggg5yxk27nnHLj6FsbBrqxcY6sY",
  "key20": "4ieD5Y251WnJgi9JVZgEqxWu4seoyW4sDPdknS2XDSvZjWqtfzxML8HkPK4hhRshLDY19n9koS63vcbZ9KCoa2KA",
  "key21": "4Y8RbE7PKcVo5GMBMpqY8vgLfs748yzf2FszUFvNv7N9SsFGhZNmL1kVmaGTTV1VeeQDdt4oe4KFszbrvcjMBVJt",
  "key22": "3CYJ7kYqi8myqC9ozYofMAz5xicvDT9CkeYL3XCVhTYDVqZBGJ2n6qr6PtB3k3fMHxyUURZGvwpJNPqJxYbcYH2H",
  "key23": "H7ZRp29NQuhYunX1Ak19aJohsVNDCNzzPV5ZGBXhBnmb1HTULU6shbPQBsUbtKKw3Xoir9LKbFDeQeFPqh5XsKm",
  "key24": "XGE6bDu33kmHj7KPX7hRa9ADpKtkRskXyBTnCJ3Lwi9xBQRJFKzxyaV2wpqSe93671xd7yFerMH3G2HAHa2Z5ys",
  "key25": "YzaTqog8yhTsfB1nPcmYRsaq3baZGqX1ugvozuC6KDDquduARtDQSxPejmvTJqHLQzhad6MDXedUWu7fXGUgvch",
  "key26": "2zrurqHxrDCFMdmNWyb2aFo77mdehkdznpPHtw17k1WPU6o6xpoycbApjA3kZM6vkdrp9Ury2JV2nJPNbed9XdS3",
  "key27": "5L1oYxteX3xSGpRNieTbN9FT854VcDswJxjbtxwft2sYY3SFHsuTvPa7ARCEG38t4CfAQ4psEnByZ91Pft6VBmfZ",
  "key28": "4NXx4KWvryJxPQmwceBxhi2VZW564sRqhLYeCqguC4hWjt6MnXJs3mtuxPvXGfwkhFB3PMENrG58ChzjxiQrKiAc",
  "key29": "4HVWjLBxJLjLCfexxoamy8bJoN6cY3HHhD9GdgvMnuU82ZibxBuzMFMwadGJQrTdUzQ9arpjPJmYAnh6U4EDuwgh",
  "key30": "48v4Ex6mxCr7uJn2Vwi9S9ni5vn8pnzz9fGDMFnGy7w2KZgh1EPfV1jMPwQTsUMdw8ypmd4rdEbkGMRvjTRQkYQg",
  "key31": "VM9Lv95yARpgn49GsCX7f4s7xSqPQvHLp6iUFiZ2qMQDkZuR1dKHh1it7rYWZEV2FttEgnkHhdmjgxuaA6kYGCi",
  "key32": "2huHRwFsB6iWGeMbbC4nvXD5TBnipcN47Nw6pBXonwxv3zqEodVKTm2DDvVDsCf6a4HPuc4xuabDS545o23jMeFb",
  "key33": "2ZcVxDkN6QTs8hA1JJkLgvCM8WH7m87Yu1A4PNbMZPpkVrPkY5VETTey9gPLFLLSNoMoGsmoixCzydaoL7xRVuvM",
  "key34": "4Wk4VLhNKcog7ReNmXMqfiY3owLF2Nkp6ypUXmFh4LE18yi4FJfeJakpQ5MQrHHRWpyXRL3Zh7BKtsKiKbMWpwYv",
  "key35": "5Squwwu7hkKX66skR8XZ1UiK9NF2xjc3vzEAb2fMXj2igV4XgABfbd1oVXfnrvfTXgxFck33K1jsX7PYekG9TTjg",
  "key36": "2CoBscrqy4NBuXiP4wTAkQTcS74bFtwktfC38vRZUHJ4P45cimPdUt6mMn5nBos7niz9PpydS2zKzgvqTgtTYv2j",
  "key37": "2m1GGsQg6GbVzijkrX7zdesRtvwAazm8PWLHMBaoU5AgQKJ9LG6BsHcjtudDVD6eZYngNVY5cASCoZkp5n7ra82k",
  "key38": "4P4P4dtgdRSy9YMAkjH4aDwA2Auz6gSDKXvBeR4QnAfQwZ5vpcgsvWXmyH51jvhkWXNoBz4g9xzHZcTxeiZV6bVJ",
  "key39": "4S2SXen4jj57Qi477BmsT4egTcVxvToDHf2gm7uYmniRw3T7qsKHs75ctXCtARuTo7JDdiyPdvGvpvCkEDP38H9V"
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
