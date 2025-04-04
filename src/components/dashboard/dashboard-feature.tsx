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
    "37ZAsDBareUwmGRjdzW3DeZXsa5p8Xxycwww95QaL7osy66taCiqedZutBjYgZEtMLzvgxGGCDgp4iBW2GdKGxEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKtVrzXM8j21P2yWg2BMQtnLBfGUAVFVZSXmyu5Z8L8Go9QrQS8zxsTfQ1ECL9pvV1ig85VzB3RzsrXHAxfRKMw",
  "key1": "587fLCxEwEhdY7pnqadzdUaLeiHH9TtfrABhNaUQCmXq3ijT8JGe3HD5NYz5R8YtrmD5PsWVoXXnR23jhaLzc93j",
  "key2": "5rdtVFnvKwD194qbANWAZ5yfvRjLJxQn8N2BcSM7MFnperBeiyKx3F6EuA99uEgU7stVtJR82yfJxsxWzyBJ8NfJ",
  "key3": "2Hhde3iFrNFLdziiUtJRaGrSM5SxLpc1bydz12XhzJvjrPUeee9xakVVoGptKMzTGsFV8Z5wL7oEBUk1rS9whgFA",
  "key4": "2eBFhUnzfcNSJMWiTZDnXaRY1zhAWkBVKgfL63LSQD1iZtSPh2i7UMvuavYSxab1dd8zCbCprKUjNPRB9bx3WX5u",
  "key5": "22FitheqQ5KS7MDBQVhysrfoZNe4g6yAK7TuCWHbrBE4DymEd6nWmeKoZanSH5Z4EJGAKeDdgv6N9iegUNmVXZpT",
  "key6": "5mqhUqRudsCZ39Et934V3mU6RL6JbZSB8BK2SJhpLfrkGfNfaHJCh9wBwYFxPSXTMSHv2A8tBYtLTCFi6Netn9P2",
  "key7": "F4799EHVKZXReAFcsu3zg89N6uB4sxSz73821eTYqfUwYzTCDypaoToYKTBp9Rf6mkDxGA3B4gDNg52Ti198SAU",
  "key8": "5oRTYNgoD6FQWa1x5JCfVKHwDmMu51xsrxe9ggifDqQqz75tKoPuTkX8DPHmpRJTMwY83z74XHABYKw7nNvzRmN2",
  "key9": "5EZuxiZonm5HytDAyotZFjAzpePqUgs5S4Umw4SmGUQuA5YdAcWceggsAnF9tYNbTQ9xm7mDr5qHqwsuVd6ewAmA",
  "key10": "2o7sxaDepHoZRfTMTbqfGqKcYNsMdUCNRZMysmanLzKuhCbJfoAnXv4pnrjknZZJPMFMMqvs4pxGK4AoAeADTr9n",
  "key11": "5yFygB44vx8DV69bZMLDDdFVWjdRDxZDp7hdEy5u98VDRsMj4Wtg4Xetu8D3DrhH1TyQC2VvP2Uf2WENMyo5f1uz",
  "key12": "4JEjkt4VwfCZSLHhsTPHXpVwRNPNnrGNss5SSie3yZ458aPkbwHQewg8HUb3gL6HPsRTzMqjFKYUaQB6ArBGYHBq",
  "key13": "4mP2qmp9whADkQDJqjSsDUxKPBVW9Z6o27HpHz3pUJoyNi1gK3xnd85ex62zzLAZ5XJyT39YgHZvDYccEJZ1yCP4",
  "key14": "4JtvqiUQqBUm9GrenSgmFecpGvxLj4tspYtmh6XbDjUA1UAvewD2fShj7qWJn7avgZZJWcLw7JqcypeYafXAp95w",
  "key15": "2hfkjfVhCo5bzcC2YVxMEPggFNGM9hNawtjKRN8JTHhWH1LgXWS6KyPcenguZiE1M3FnVfUKo7JjW7sFsnGGxQy7",
  "key16": "3ye96p8yUgAxfoPodT8b979mhqFKHQUPSgC9DqpE199Yu6cGCSTFb9BpBedAAyVGJjmTrvdKj1yXD4RHT9qJGk2w",
  "key17": "44igBtEuidye8Q9TdPzFxq19yb2gDJojP84roAZsGnS7Qkys3rX2BTpTFp5n6nzmMMJju7ycNVntpseMRgsCs5PL",
  "key18": "63GcKVA843tJ1nfBhZvjz4rDMwXkiKkPvTnCBgMg9UnPGdLm4dhrh2awYL4vMK1eUvGv5d2yV7znwYHxNiUYojJQ",
  "key19": "4RW7zdnQuJ2kwrHkhSoumz1NoFqsf7vrRzDUxM4CHB319bosBb7HMKwiWdDRX7nPnA5ciYz5s3kBV8S5ufkWBjfT",
  "key20": "4p5uhLtXJ3VK18udsHJ7pkUh3pgTagUsbCA6Xjm4gg77mEe9HL87LStcYwJYVtAc79baRq5wj36L3Gs3HprWPg68",
  "key21": "3buweisBxpkMkhTNSWcRd4R5aDv2cf5eMjMU1CAmcJZx7fyb2EhGRxbp9dRWNhRiiyVw9Lf6cNXXUhRvNocbedie",
  "key22": "ftzDLFitAtJHfRphcMY7VZjH5AqJFzFvKVyYzS2K7T5zX4UKzG14oMg7ct8TpdLLxAubY8QmmMvj9gqC4D5cmCV",
  "key23": "3J7ybmE2VhdwE2aaJPP1SkU7RV6S3M18Ea1xbfrLPiGDUXpxX9vdXEaNSC6uYCvopHiMvxnQjTzLDQZDEAyPepLv",
  "key24": "3YoPFAGiyCPFAj3MvGmpfGSXYXNi8iMyTL9pRVKgMrpuH2Wm4dowMgGZaMkWZZ2ZNDR6Xbcv1fEpVnBdHKePdiUy",
  "key25": "2RFZZuYkAjvBdCSQhQsYXhHg3CySqMco5QG5SkyPS1wRkghoSjEjEZjXDnWDWL39CU9nbSFK3tiFBv8GVwDLYVpz",
  "key26": "4YLHNrMi3WTuex4i91HkZqNtWxbJVvuNoZiQfJxMCvDF2kuMVqje3ki8KsDu6vB4344NfDn1XJ5yhz2mvB22hzFj",
  "key27": "YED5xstqcitvGXhfcbUH7GXJBTRjF86up5CDYy2fMCbvx1sTERSs9uiGHajrV5KdRtpEJeGZWaNJ4sTSVNkfZDj",
  "key28": "3ZQSLbdvWuhoms8Xe5QqspjCrbmWpDfPsJwrJQkMdXK5277vd8n2VUUQope3M89nHcNU81GzrE93Qxv3WUHABk6N",
  "key29": "5gGCAhqbUX6tEirX3ZpuRacsXryUt3wRmnkEV4TRttrnA9wgb551ykdzKv6LnZA3mLtwdjZNt4ZVbHnDHsCpk5JK",
  "key30": "3FPDv5SYRaJvq6toXKDBPqsrR6TrUQcvto1xS49zcjaoG6kZyNpfWAq3xX4BoVUZCNVnDkmNJ9gnTxjR5zTsYcjd",
  "key31": "Y4rWB5ucbfHvmfsDauQ68Jwn7YKF8YXaTQtRQaVPUapZogXMdPMpMcm3oKYJ3HyjXVN8sRZWuYo5ELUjbf3nExw",
  "key32": "4gy7xjBX21jGAbMXE8PdT4u9PNKnCrTBYRgFhg7dtgpKQSws14atMhJP9AsdAUEZ3XCRjxMoX9caErnKWiA2xWYH",
  "key33": "5ezBUstZshjU5FA5rhKRrG4ehcoHA72UNSWdkSccNcgH2w6tDP1TApR3jUpK7zC92uNHDdidEGsCnA878zLfYEEB",
  "key34": "39P1cTX23XajBgUnumVJaTdcib6jBckDLNHnVm8ZDfBrYVAP8mpk8H64RCyZrw271xpzV1C5HDWFDNWLkci13Jsh",
  "key35": "5rhgV871Yhu6KgSC1QeszyEvDfxY6M3tTn4XAhRkS4ogB84xK61WzKTyuDkAQJMPj65gTyDZZhZeEjXC41EjvcXd",
  "key36": "399PJaBi9C1etmvSgYSy1R6EdAE7osAoY3d8qNJR9Fb1h9tbbKLW8xEkbbRSCeAM1Nh6TsTHsxvTdcpaBEFL6ja5",
  "key37": "33WQ22RdBDWwSyowbsS7htZo7ARoAWmhw2665F7z3riTP58jibBJ97y4YRi584nAinXpEvxgY71KNPYFrnHqveyQ",
  "key38": "4yMMu43CfqfEsMBzcToW7Z28CSRwMYhbpFK1uCqfhQ26QqUaeMpJWGRAu61xA8441WJCWXdXCUKHhHdXi2vdUuFR",
  "key39": "3uhwdbcEpaxBaPn8LMNowHSfB9tS7nrrwG3fpDCggB5RzorWhGCvRHnA4i1HkbhaEKs5oekfPKT5tZpN83dRwaPz",
  "key40": "2Ti2oa6ea2bF3akXTPfo4AouNo5N48yLceWdRECe6ETBKo63R3vc3JTLzvcVhL765sCroqubYJkPTugBfUeRBmEs",
  "key41": "VBJ4o9dNhEy12FeN5cpxRMfp74ufA8Sfs3L8qFnxKs95BrN9iJa7gj6PZcFnp5EkJsbxnmhQwD6buiL2Yk4tvcF",
  "key42": "4q74HdjasTiwNH9bED8bXAtPE7rZfL8nFTsUNSKZJ3Pmf8A2iicRm3k4tiiMSFD2XHaGeZBRk3GKqjeKLa7KgxSU",
  "key43": "4uQ1Gf1U46kqWCWzTQ1zt6Pry7nTMRz33mLsFJJWmq6sPoLuXAmdKfR2WyUH7iqEpWiC8qMwUANKeH7iZHWkU3yB",
  "key44": "4Q8crRwWM4346hEJ8L1Cfh1MXpMsdP2GdhSiXfUDa4m2crfDJUPpiy5pfbycJJCZam4qYa37sRCGoV7V8ZYnLdUx"
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
