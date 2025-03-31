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
    "2y4c85umrPHfsvdufpH4BuPDdedhWgDRoyfVNCkYeUQSiV68kZv7k9TFsGJnuXorUG1E7HbGF863CTeBthgfvUUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GU1ndsumuVRVKwipHZSECmsTqffut3bZ9Kn7eTt4Bi2uZ52ELRaRCs3FK4uaYKoc2JgiHE3PkX9k5skgpnARTr",
  "key1": "2f2fEFD3Gq3o8UGDk5fcVgmsovCK6nLwPGe9SYG6cS5gF5ywsSnbyTXLUyVsS4yM8FpEQjP6myLYjLVUjsuF3jMQ",
  "key2": "kjq98KiQBVt3krU8RzwH48GyNyZMHd7Xz8fk3m6bnbZC7VmNuufNZGiPDDmzL3Q45EdVsdwbDfHRt6JoswggFPi",
  "key3": "LzAUdNXe7U1ZgPfyQSJCmUoz6nYKBivmPQfSVYPiPbitBSZREH3hoaRWtpDZBSNqcxonhpkYpZfFqdMPmMc5aVM",
  "key4": "6cBcZSbK1csAKMcNbfmJR4yUnoBJqWXw8oZ7rmzNEcvr6Z4eDsfEBP717xLmjCMtC9F3MBpwdUCPFZ3YWtZkb2U",
  "key5": "KgNGg2CyN3xC1ECgxm5DrS8UU92SVFJLCXs8CjWBd7nscr9Xi68R21DZXbyQALdvnUHw7UFyMi3wpBfwqer2Pom",
  "key6": "2cRdgZ8M33sXDVBCraBZLNEMhAxbrNxe958ZKdEM4f4TVryJMb7umS2GWLBqRmd43UrMnz9EEyDjQfxuKBZjwWdy",
  "key7": "5JBXsNNQ2fWK4QQvNZHUMfDxBoePgrTrALkgao8jfXA9XKai7ZqGhKg8CJLoNAwb1Q3fiQmtEDTevrkvrzCvtsg3",
  "key8": "Se2Xd9NBfZm56L4u4AKXBd9aXDKhFnzwn1VcEj7bqJZffU8LLdZZBEWzjkhrYi64QwCN5zGsBMe8fehE71ZS11W",
  "key9": "dpy6Qe27m1fESzG3kaAM5CtMu537bEJ9XyLgQpDHfEQyaXnhLqBroeo4jVQjix1CoreZesFVDtZg7pe8aAzfBJb",
  "key10": "55sTvAcJfVFMuZke5rtqAmvQqM2twfHYcHRjk8nuAmBcLeoKZnuRYKEHzn9iopWz6S3VHQCnrRPpVXdufGwx3KSY",
  "key11": "zJAyta4E3TQ92CMFk8iMffeeRHANvXUTDbLPjy77PwBnVigpEPHcqYhogf2r5Dgfdx99gvAtmT4ryGcD5nhpCkD",
  "key12": "3cCZ5u7YY3ieWhtv9ar1oKqfAR6x6mStSPtb5HaQb9vSvJU6JaWhEPtfs5R6pEj2A3Ay7pN1KR7kVeQjCzEjJ6iv",
  "key13": "u2Z5xq2CvgPt7uwh5PKPwR52S6uTxMQsx8pNKtm6vDB4Vrf7ZfbK8ihrcE6bzTnh1b318Gr8RujeWrjJjuHX4GT",
  "key14": "5GJ7dgqBh6MH6R8BkAA9LPxg5V5Aw2LfAEFppAuvfuP2Rhw1Mt7Q2rxtf19B9sjw1YtUbPNhgB3uwrS1rPDcj4tf",
  "key15": "qwC8dDEttyDks7bSEqueFD83aAcXiDp767gw3LHCgPNZJUpiU1dKjftaogXRUT3wZQBRBes94tiwSGjae2MBLji",
  "key16": "5rPySGjsNCqBLYYXmNypGngtngnrn2WeFkSntMjetZQPCS9PAtTcaQEQGWSMwXXDnJguuvNryhZQsDMzrokVcuxQ",
  "key17": "3WyRRwKmYEdLKxm94maZWQXBiq2ydDxcvnEUTN2WuKmj24gPKF1s3iahyhD2WZR7HnvZEA43o7J2AR1TUnBRQpSY",
  "key18": "NjSzu7jXez6iQWty2Bxya6BXektSt4oySFqE35nLZjZHTErBPujw3JcHWN86hWZBGWSwu7Ji1eYJQn6ZVoE5EFd",
  "key19": "2xpvCAfXAzSCPNVJrJmgFBBUdCYEZ8thrGkGVxDzn8Xag9p5F3T3CHNnAjoFLBJqfwy7AJexa2zXBeZhP922CuJu",
  "key20": "5bQxLhi8A2TKfmEjKKKvmwmEHkEfHpCKcCJmaErj4jaZffR1hjpcrjkTn22ytF3kTfgV5rzbE4xNxgk4oxmDFYSm",
  "key21": "5MdqEuynVDc7hvmBeomF53fGKDiNhQjZ8hYwCZorPsXoE4j324p8XLzC9cbjaNJ9kZKGbw2KcXEDTdB29dqCZbW4",
  "key22": "FzSZkH6mGtMUnrNFSEgaS5rVH42QcAnB71eq1bpMopVtFtEEnqXB7JZSVdbeWVTBzDAnEfdvocYsWZ7cDbRAeCP",
  "key23": "57T9wDDJ7uHiyG4JcAXR7zGccG7mZYKXYq11dkcVZtHkTHWc3b9q56t3mvLQdUnzQ6CSh9YHUeQF19wtD7Rx3pB7",
  "key24": "2C4w7zEhSegth2ypvUW2mfCNa9Wp9ptdNF2M2otCz1wsZYynk4JjaaskKnBuqFJckygUqYdLpK6FU8yUXk2NNqxC",
  "key25": "4yYo4uKww74GWe5JWBQv2sTCL6q2fQ5L1rJkEBeooPQ9GQXWMYbautyYnr4CBVsmwcyZd7pLoDFeXeYwrvfriqQG",
  "key26": "F2fgeAu1YsBzTaGXCsPoVTaZ5agce8KZ3MkVQH3XxTMQcWbxp465ow2EHQ6ebejiAyxpzec7Du5U8b5h7ffoi3t",
  "key27": "3k6nqV4XH9KhucmhmVUsLHxf57ZZBLnP1Qu4KtqjY5F7M3tUt6hRMiWBvUFMkLw11rqN8nYtCMnx7VKZo5MGBD64",
  "key28": "2MY8iQSRwbDC2JCgw5LsLtYN6kNdiQcKF9JkGx67p4faSYG7p9JXtQCPnmrhyDFb3DRkw5iUGY3KuDkXGNrsENyt",
  "key29": "5LakQHuSsn7MBLM6fHVBpR9XACKm8wyyutQoYeHGkKDzo7RVLVDCgD3qKRDsLwBG2bzAoLuK7wegVdgFoiTMg9y8",
  "key30": "4mE8fhxmoWuNLsRRzYhHu2eR7S4nNeqFoRxiY93omQfExnCwUzhoaH1UBfRTq22V8bNMpNrEKD7gUy953yf625Zs",
  "key31": "3VbZt8KXQjNPNqR16JUhPp2ZCnHVyCdfv6PMNrh6DRGWpW8gDuFMmZHG4fv9oHwAizGCQXhdEFAphVWGSY6QGQBy",
  "key32": "25bbP7oWgmPstHcDqJPXBubERNshSHGE6K8XVSPFHqVB8ke9Jm5ybwXsbEtsQ1ikc6j4dPNdZJUTkUVkufYuG1Cq",
  "key33": "2CLMCuVaEegnUYG7UBabtLbMZjYRMQbvmMiMSHZVbVm5Su3frT5FCMe56EESRQQYc4NkXcrsjXezMCwoH21VXouE",
  "key34": "2cQJ7uft97x5yFPfVp7oSBcASmVszHCgUmrBqMnE53hNKNgwCdVfSUKsdPaWXU5ghEP1Lo2zJ1HipXuBxyJAd95J",
  "key35": "3coZk5guCL5Gpr6bALsHCWMWUp3qZSZnCKR5bQqLmtncknw2AFv1P5tsCfAvv4uVciWecgHfKwmKC33a4GhJMWrk",
  "key36": "5fonH8dAALJqpJm428XNezUuFYuJBCcmYogwXjrzmcPhnrQsb4d7fiSVVvxVqFTgmMxuJTogHLKK4128f37m1noj",
  "key37": "DcB36qdKGcm7ARU9VhRMR79Ya1hjRXeVzcjtPVfciAd3B1RWr2694YRtSADspq95aBHZqhKfWNr3wUVMEojQ12j",
  "key38": "3PWF2CRedvrZ9U1bJUvg8eP1KBuexJzJ6oSXpnHmRZi68521bxg2puqnVEftHkn7bbRU3egrm75uzAZXJf3EB6Mp",
  "key39": "3U9DTArm1fAwpJLNp2EM9jhikH6NRJcutjYuZUDDHt12TFjgzu8yRcC7CUKsyrAD8W3RPS1Z6bQfDv9JCaAjh1KL",
  "key40": "cbk3gbAhnmSnSqA461uguxw9HcDWczsVRuNG7D8FZkL6n287PZeAeFnmeEZxJc1ZcRfam2pufWjYZgf7C1eBauP",
  "key41": "4su9NDWrRGA7ULrVDNGvXYHGsfuHUfwgMWnhmStheMdzhWqBQtZCfoQWv6kM8yEDJ2FR1wKL7zFQ6WYS279jFmJR",
  "key42": "3aU9Mb37qd7X37ZdXEAC3pryhDAcCmHBsGMxhdWWa4GauHUaEYUijvWx6vA1sKjFQg2mRXFvFJXExABMYLkLy4uw",
  "key43": "3gtfJRYReWQedDA2A63g39ERsCr6Koxub8CE5hc8kYZi59GM5F8mZzQjqtoAV2NaUUFmt1TNTjUQ2kQBaC7vQ2Ro",
  "key44": "4LARV7gQaKDeACw6vPzCCFFupx8pyTJawZ62S3xVrBWzX2HbnSgZvBG9k98R8CWPV7Syc3pj9QWWFsnXCHVUqthp"
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
