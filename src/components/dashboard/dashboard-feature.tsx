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
    "39S5ZNZarbGXdBfE647prQmkcXZovSvBeNXvVrbadWVvAN47s1Ex9AqCxokkdgoBQuvCs4QuakPJ3qnkQTFgHKtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk8ZRneoyqfwxJtE2pKtXMjYWDqEFntsvzC2ZYZT4sWhEdZDvuCVnajzvVH7rHzHhvQeeZNTSA5dLo34Ynbfvsf",
  "key1": "2mUc9aHoDPNMrJ4Xwob83e8QnxWLa3YsoLd1PoVvZaMMFV5zvQPv4uqNJYcvfFb7v6hvbVHVpvRQpTxYfkGtMpF7",
  "key2": "2TZmjQGNFvo5Ti75SMirMBMezHV7Q27YEwbsoBwcwEkanpyBe2K8rFAwznRAUEnj7owL3CNWFELWN3avNxzj4nC2",
  "key3": "4NsTGe2gi3KgJZC3gXB6hpmmFmHjvQwuYfNhmxhCMxWRC9of7xhPAbWWgDDZHdu1oNS537joRDWEEC82USdSkcxb",
  "key4": "ZrUHrDCtuT7F6vqqUeAxmMgQj8aC9bD2Y6eRfVCDUrq5f1Ep7BEESp2Rs82VPAFHP3bvBZ4EibC2JpPxdPNTkMQ",
  "key5": "3bQ954bhoqkMr2WPDvGyuyamkmpJCm7GqbV3G4supKTJZdECM8JHgw12XkE4K6CSBA4MEeS6umnjR1UD9rV6p4LM",
  "key6": "23S2uHEtz73YEDw4t9CrGTtopdv7erCjJKKHENky5ycsa7erg4ynP3f1iiUxoQnP4bioSECYs1JRPCv9Z1REUwxE",
  "key7": "3TqSJruASVtk2cFTU1PyPkHmRBtLJBRMgpsVF5VShvf5dkDxQ5DeXNRvAa4KRAEh1M7yDJt9ct553jmNV4SNwMGK",
  "key8": "2eVQGt9hZDZuM7F91a2jSEvKiBpGikUF8jskaVtqMAhwfPHr3iWmSZVqqhVP88anmru5DA3sBN1izootpVYQsLDs",
  "key9": "3VmEE2tPmyXqNjpvFmAHZn82sojDJgNGoDzw4Ar3mxf51qgqHwvacm83vR5WUozrWABNsTcPLdE1DTUtLkznnXPr",
  "key10": "5iWacAtKwS2oVjynM2XxgicA7LFLYDtxCLoNcUWUxacjWuTZ2spxsRhxeDtkWPTwgSSVUN6x5332ARUvW4UnF1Ra",
  "key11": "3yr5b1XSC2LCQ9AtV1QpF59qztRC9PNUiqxu51nnN98BBuRiyU7Vug38MJnjwDmTmyEnP14k4GGuzkrzKp8LEQEU",
  "key12": "3txWXCTsUJGsmmGWiPpiFD79VqAYpvP7JX38My8o7icJq2y88WksSmaFP4n5zDP8ozgD5DaBrhX1tJ7ZTbcHGJ9c",
  "key13": "2ysWeWgpicVVWpkvaYroaZt4Zdf9ekxeMAJSaAL3D5rJ9JVuFbpiFf6iWvf5NABL7wXFvsqiv1dS7KFGmUX8RCgM",
  "key14": "exad2saWRumFHo6yCwDK7GJN87SESEu35tKEr2LxTPYFCSpNXPTe4qiTUhPwaFYHqVWxsYPehi9eYpyc4qthMVN",
  "key15": "415Bmp6EMVKLoVZ3WqJgmgjb2y34qSdzXk7kwSyNFeD36VCLus7gjmtZRq5CwY6dBE2LpbpSmPnvGJnp9Sf88u3N",
  "key16": "42Bncv8mm1m88Jsgm5NyuM57aYHX5Hyn8o3bZh8pjmaynTzWhtsADswzTi8KVE1Um8fR1S5azE4W7G8MJh72ZDC7",
  "key17": "4tfZcoGepFU6as5DaFf7DsctyUdVGNwUJPMtaaTeL1uM3BhBjVbWNJomysQy7Df3dvS44A17YzRPKKReZ1R8jS22",
  "key18": "3zLx9EGG2DAu1sEh97UxPPDnGWSHdUathBjeSwUpCeENKK77mfyULrr6N98zmZVCT1uXK2iSNN37btGt3u7Nkoku",
  "key19": "5JJ5njVAR4MnSzcobwF9bnByf2N7x8DqdWnKSjEenPHtLN2seQNbWN6jr5HvzCCGvnJKmPWkJhGYgZv9PCuQ1x4p",
  "key20": "38vPYorHjBanUNHPbkAT3fLsT7QQgsWMi6tQwY3WJA5NYwySTkCGqwZ9oPGDPyc7ibXx1REYGmsvEgd1f6FnKWTk",
  "key21": "4JrAG3CzB2a9fs3BJmMSV6Zk8WbS5mKYsLSnzxTZ1pRKUHrnr8hXL4RfDPyqWrXqbrMQGs8uUfy5WgMLFrYustnA",
  "key22": "54WqRQkSuTRxkipXEZwfPazccwdcrRgY6BB2FswxiKM5MGVm57J3obWjQwLtHpjJJtuCmCYWe8Qz4ei8BcQcXWYP",
  "key23": "3CniW8zVr3HHTZ1vzSck6ZSeYwJeAuZ2dEvBEYHUv89ePpppiXpkTZaU9h5VFxsJjMAVjXEGwte8L9USQodmNm3W",
  "key24": "4GpbHid7k7azfKPAxmwdrvvv74ahRMtGtEaTXCH7n2XFmYPxJBMHQs5LAg2KmTSqBrfMTfJMLhgtQffpui6pXT9U",
  "key25": "4p53SeAMvJWCyjt9fSaEB7aUfz5mxzntBVqKxbLR66BVYSSVFRbG9JGkzwoj7ztJWYboAnxjfN28jUNxCLKnw2Xx",
  "key26": "65abjwCxgzED8KPUA94KfQmx6crqExD2ZoM2LqhDNPLUVHK9Qjgy4PQhQCVFcVAwyXnwqSGahe5GpFmUuePj4S4a",
  "key27": "3Xt8exjAMap2SZM8Xb3rd5fqhQQqKXbMqpFFLHreQK7KUCVNc5ufoyJcabZ6133ECo6UTXVp5SnZs1rhgEK7PB95",
  "key28": "3o9xUq8VRd8RbDoebJeDs4iMRay6dHzVSfTqg49NHZ79L9TiRNQVqug3MRWNAtj3xFyhQYQSRRx1a9FTzN4fuCrE",
  "key29": "5k8VDMSgsvurmoqRhxgbJnBamS5j6TziipUsPWhyBhi5VnTQoCAYpp6QmYmANmELCaeR34BHF6HU3yVNqSYvNQas",
  "key30": "2FobowJqy7zHUH26Zr6PDLLBTVVM5eQutTuS1j4w213zDTd8eR2uCg9nmBBvvDucCAasQxXLFAH5BiLzVTQwiiod",
  "key31": "4sg1oT9nQm986HtJzgjbaLD6kxPfpEQkEfmCbupetPiFrPfWZAnm9v8oTLpQXMVjBBP5VsdkJx1ShmG4yb1mgbCg",
  "key32": "4LVczEvhDu282BddTF6h6jk1ff6oBwtkmAnBC5sa2u3bpQLLAm3Upiwf1eMG5L4UbQb2D2W1gHSPQWYvS8C686MS",
  "key33": "61Wh8MGkhcS1quwu7UaYazx1bCeoTwGRCUPTtjG6SvZPRtsnkeCNrx1TqSiLfwKVikdH9dGLp5Jf7nithWmrf97b",
  "key34": "3GoRt3xD9VRV2W3CZGrTQJTW3uFkoeLSupHN13Ugdfd3EePSSmWLMVaxhML9UEHeRMF6YatH9xJzQSwVPsgm6seb",
  "key35": "2kNZEqihQSmaxvuo3noSDRx4CHN1TJSFdurZp9Nz96iLNZPDpGNVxnRsxtDWRgo57CTxzf1cD5qFyozKXdDvEuND",
  "key36": "48PDgQ13eQyjanseMQJiV2iaWaCZsj7xxao8aKbQgnbMYck1B9kepBak68uoEEds9QSDp7nLT6bPMPqjBVUzVhom",
  "key37": "3TiXKEhLtfjMut89XYaYzVHuttLYYioiMkFvLRUp3SgYUJDfXba58Nt8Q9j8SzMyQ8Ph7gXhoBCxYBpkHzJVMdTN",
  "key38": "3SNF5y4V6mFYFZYxyZSta9wr8WmmxKCvvuJGhzua12Sp4VKUTAZUSYWXQxWxGxiHwUegAs1AYYCBQupJt7fU5g4n",
  "key39": "3fK1KRcvv2b121eaPty5Km27f3iqJLzdeBqSJkXff8HLVHqSJsnUX72XTE9Y8tpRfajT4VvsTiQxWx8uLnSPHxRq",
  "key40": "622khqeTEmztM6b5xMCPdafLDvuxLDmS6MKCtgpCw2Nk6YqkTz2JKsUX4oXJm47gUvTH6kQnoME8V9wHd34MPnVm",
  "key41": "31W3dsBzPeUqV48qiCijjuXHLPt71cE1UapZn42v1k8qKboP6tPeUH6UM8Snotyxw98amCkaATLwYx927FdXeF9s",
  "key42": "5DngSwF5wiFDQsDDDAQnjyaLGUuKRwpYgBMZu3aSJNNZ5ZMM6RqXtEJ8nQ9wdNH3zMfa6mjrbKTia3UPgEpUY7CY",
  "key43": "4S1B6xxmSAzgX9mdarGxxibWU4sJnYZDYyg5buuCcukWEbB2oBEVXhj7bK8Zo3345fSB1WhP5h3WkMNbBkPdNhwQ"
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
