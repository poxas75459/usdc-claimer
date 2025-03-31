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
    "2GqW9QxVogbxoYoHFDwGfjJxRuy7ekB7DKS9wNRKbhNWUNw7LDvtViw65k2zPTj1M53niBrhbTKqT3BRsCBr1Fjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9RELsd8HeXuoLVsTg3gJazkbR27LpGEpxpoasgDSXtoLfnAE3VxgTRegxoU8U7xixAVG2snhPPDJj8Rohv4762",
  "key1": "42xZ9vujEZqY73wZBYUyWRXsZvQFnqAGTghmwf6SSq6THRYwnKeEkGAyvxNug9iC3fHoMxzqfCBDinhNnNB6okFy",
  "key2": "21mbPKRiq6fRfnUKb2cuyXYq5y2hMMR1xgJ3oGrE3CRrxq2H3RmwoVx8wptLHxzcEZEnsoLfokNJykwpG7UALEyu",
  "key3": "4fYfSMSVLxGLq9gT825KQp6UBLrsEAHagWrPrNvAUP3QizJPKGA3t4iYMp2QefW85UqJL8RB1DQqcquTNyuxLMTz",
  "key4": "oFz2bf9d6v1Th26Cb9vgZQogdYFRw7nCoiDy5Dc23fZNq7TPMcZEm8ougvBNzSwV859KbPQ68kWFkHyHU3qkZWm",
  "key5": "FwXPW7gHBPTAvGtEUnm6eRF9JMQQ7vhyUohtWK5LzdxtfyBzD11gB2yeBeXFMTbfepH1GeDjinokBk61ie2uSZy",
  "key6": "2HiA4qLB7qHpiQTX1uzNQWxJnRWBr3GbQHpQTACxcC4ec3mtw5tnU9jdMkNwfEgUh1GDeGYPUAX37FiSp8KPZyg",
  "key7": "3VXPfhrqtMuubhuQXHv3ss5uW33SU662zkE66Mp5dwQLDcngGFPVGWvXYQsQSMecF5vr2AAm2YkxcRavC3FsNKxr",
  "key8": "EgirfQBaCS6VysCrXAZ5uHBiWt3df42gccVo6DNwDvHGeH4PdTbxTs7F4KBkxP5GKpuNE7S3nT9XtyAayKAJMwG",
  "key9": "3oWozZPzVGwWg578CgXRuD2NedUf9UuYxai3LY6JBEyuBYz2U2T1EWrgJNce2wZmCRG2VezPPT8ZYau1BWj6JcjW",
  "key10": "4rt7CH34bevKjQc5JnNGqaWf2idSNBHXSjfEYJiC3jD2bZQTR2xPG5C4ajE3JXTnQKwfByybMStytNVWQ4u9cByA",
  "key11": "m5bgdStMtkZMXn8UdshUayJYtAPre2A4o8BmW5BDKQXMqKURgG175zHpA1DRpAmk8d8YwGWhGrqX9VMLeeXhnkw",
  "key12": "4HixBv22UuzenNtAh3YaAvD9AWsr8MTZ8yawykxtUEJX8e2Wzz1sGeqbnWJxgusLrfTRLfkzbCunQXjoLRFSjyfy",
  "key13": "kFNhY4AwPTt9y8CdvFFjjawC5VwQK4cfCFGf1LDvLrDJUuarvp93S92rmpV9mDZm9oi8EJ14katYdUGFoScNsyz",
  "key14": "zECavygVJ9Ts5TRoGvcBg8YPwG6T6ANXn8dCpoD45xLxDof2GDnXY6Xi4qLXL1rkhb8URFXpDhrFZhFSM3mX1sZ",
  "key15": "3vYTvKKia9pxQBnZFo521mQtMPMQbZVzV8fqMQZhFtkHfBZ33yuXyswRh9TrvFSHGyYTGfH13XMSCGhheSxuHWVG",
  "key16": "3tk5eUrMMVuvXYYH3sd1k4EWy3axmmQ46SLHMsQnjRfBXQh8nwABNWDvyZsierT2yZPV15DVwX8mspitZEHH6T7N",
  "key17": "42JCqELeAkthd6jexbZxcG1HLoeuLaiMmLsdBpCpNNv8D6eEnmTM4sBbd8oqfyyDpxtzVCBys6dPJPRooMAL5nu2",
  "key18": "cEV1ZtKWPRkTawXZbTmriSfFQgdidQSjUXBRENyioeBsXePcbXnFPg3L2cgJcmPNaYDFVcgPw5HTUyDJb3kn2cS",
  "key19": "JoPjCxAt3fgm68VDzZutgKB14zbWMcEetYtqkDxXX9FD2dWdHo63jAjizxgDwVD1bEuP8HbCWo6VFsim22HXtCP",
  "key20": "5E4MfMRe2ECccztbUgtzLdnj458hFbTiMyNSe7KQg3u88ESjkeWhXv3FQ1yZcQsLxth9CKZe4cuuKpxF4tw1saAX",
  "key21": "MDezio8T9x3SZFxTpdwCvAWNhMKrRKrJCXNNDDcxtsLDZctyNw3UNY95HeVP8MUdTmxRFEG1f1D9Fr9Vi2w5Y71",
  "key22": "3BTSFf3bQdMvp3724FV1eSjSaGd9LrePe2hB88Cg74i5fd4cnsiYX35qpK3QcymA6R7mAPJxeb1wxHEVajBTuuEz",
  "key23": "4UKFqStvEURN8yeSNiyHFzmg1Xc8WSLnr9NfgDD217L3kJLF6DzcWg446bjryAQvTcKE8dM6recLgoF3YQgRNWRp",
  "key24": "5tzPr2d9KJN9RxyGXyPFGBdJmDGKKkk1rqqkkLKYuHiJGha8QpmcCwbH24iVWnxHY25WM6YHi7thVcoKNFraGoQC",
  "key25": "345p7EwyKaC5axn1FcuHWTSPnwPCY7fKSYE4BhKycpE4XqV1EAyHmEevA8FuiWQDK659rzCQ29ETPhy39SbV5tGC",
  "key26": "3GCju19rUPMhDTnqq3dsJ3pdF1UzVJS1CrFLfULadU543qU7CaYTCE6pJHCoqnZM7srXTehShGB7CgATxrK2qpxi",
  "key27": "2vv5Qe1sJRC8Xk7Cw1id5zc6VEJZqYSEowKra3UXLcGn7NW9Bp1k7i9h2hdXZa8NJ4zsWRwivuepys2esdgPQiUo",
  "key28": "4auE9GagCNbTe71mXFBzuG7AwxHwn8Q9an42mJj4J541ir3qXFa2PWsBazJiEAvkgRYcchtLtA9THx9jPEgBJDhA",
  "key29": "2BUXkUW6AJ4taT3bmfHBh9vB92p49bLkehFMYQtHZ7CTQ5D45MZzb5AHREVPXBHcw3KKQwqL9qHRQarQHMV1JeBk",
  "key30": "rFnfxC4TtwTdRazqxufZDSE6SzWuz4FKZYv56NadNqWw2AkMLDhHyzSG1VkdGBH79YZt23krWR44GW8HuX1PTSz",
  "key31": "4c2bnYThiPSdvsxLN1rAyoPMHSNRDRie2c9DB15r8CDt2zGGvUMLmveDAQYoCmuRo8zwT6WyRymCNDQCmanHhHNV",
  "key32": "5LuUnWZHeLwnozNEfzWYpvSbpDgYzX6oko9ED9KVHh7sLKvSZfXcX5HTRQXMAXAmGKsfUsoHTNd4h7Ey7vyEHE7u",
  "key33": "5f68wo9zuzeN6aAsZRq6UTSy6Z8kdg4CCpyZUwxuwYxcnTEzNWKu4TMoePYjx44qBadoHrzvhGA8Gac5zHKz3E9R",
  "key34": "66mipnPA1JFqhB1dEeBUdbdAQmgNiBCSb8ikEYEcBQx9iqcpGHhnEnugndtxQcs6HABjoYhCvJVcSCGMKorspzEo"
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
