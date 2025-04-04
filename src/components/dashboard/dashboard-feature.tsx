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
    "ndu27SQSJVjyg1S7msW2UWnMg5sutFPZH3tZasVzteZTdi1LHdNm5gPxRm9oiLafRuSAU8nGDW8KVh33XEEHEGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmC8jA15omcWNAnbVBHQ57HPvkmC9fH53RobCP1hxGZGNr47TwXMVDg1HiNMhwfSrmYE3HD6kUbed19kABcjrYu",
  "key1": "5DNuVv6FyVqQ2V96BhbhRFzj1kR7hBKpZ4WM3x11YvMyEE5kcZRvbRJcWX6LEBgXCEXMdKAaF3p69q1HcbqvtHe1",
  "key2": "5jBfrokwCTANG5feBHPTH36jMzZA6zf7hZffpsJLZ5Sh4yc5ANUeDFJbxtXCTZUSHuiCbeHD1GvjDcvTYi5QdUtp",
  "key3": "4vUQNeZtRpEY59putHc1HoevVqDy6pj3csXuJ14uqdmGxyqNg71td3RBZs5iNpC6VbzHYzZkJddrvmDveMEm6ayC",
  "key4": "4G1vWvaF41qZYG8L1fFFfrAFmUaQpnBdG9ZFAf6STEX2qGejHFLGEZKgVBg19zWJWMRhVK5EtgHxkkJJejpugS1o",
  "key5": "3wAGMJfP14WkBji4vzqkEnF9Mh6pFz8PL89eNaPj1eHt93XtfeKpr7FKvxhDr8APGW8JBYqdqqQUVvykDoZYbT6z",
  "key6": "4dwVXVtDKmmCqRHAvNVF1YZS3YaL8qKBGk5TDD3oeE8QK4Hax3m5KDqDDakahVyfQQXPHqhZwTHyWpVn1shUEavP",
  "key7": "58fmKBPZT9cCETZoQqwmZYrvqN93ZAHfujH21n61fy9RaBUGbawU719jVzUbmkZEVJa3VDVpqvSsMg1PR87HrzBy",
  "key8": "5JCoS869APKxtFAHk94XKLDkwoNiuqvCaQKufGDoQALUJfawmF23xbH9wUyEC8fhkaT78JLak2ZejgDdgcZpkGL3",
  "key9": "KhDHnz5S6dUF6HjeiRTDzNqVnE8BR3XpGjR6yscsGtfNrG7Z5KCQjXQD3JbdN3hrsvUDdeJfjTvGp2Nwrbg4weK",
  "key10": "U92rxDEHVdWgPDj5P8xvQXhak8WaaALoGX5LeHknszzuaKjtzNyTBX99DiSHrat8mPNm44rKbtLKGXv7wKUjjap",
  "key11": "5rwNm7QvaueHWvKF3DqUsxPQp6x5cdhNUfg53eRBmyvGvKoDmebEVcZfiGApSo9YDf6KtBcoXbDUH8QzPJcGdHhs",
  "key12": "LR3RmkFoDP5rdvJgMCtkxa15FvUgTPn8Fq5g2o2UBfKYNWN8yTMPcJk2CDNA8pu6hwgDMijPiinXWNP7gTsq8La",
  "key13": "2JCde4mHmU9QwALqTLBzRUUFoek1PgjC4N6VAf9cLTQV1m6mpiEjRSmx5ML25bJab4i8EqginC2aktAmHJ3hDYyi",
  "key14": "4FLRHMTaTcvjcBt5j6coRSwwbrbAttGcoUJ5YuEKpyiKiStE18yPhhMJy52RW1xmiNXBBwayELHeeYurjJARZDeZ",
  "key15": "4s7f3KbZpnAVJB2QbyXQRtzG4CFP1xuZU7awmP6zac7yDmEXdpE5529dcUxoBJCmPGhfgee8MoerzqiLackaqFaF",
  "key16": "5s6usXXYkhtzvwjFHadKjUgvH3VvkYphBuccM8ibYfLX7GPQKFQzotazmNMqm33rCWhALHf8xckaVhpXJqm1ebxK",
  "key17": "5dc5DKo5xSRnSpgXhSmovKt7wvjE6QRATEH5fKJXmvjUT5tBgzqoBQ7VLUExt3GTHMgmeUU5t6hVGZahxgSSFS8n",
  "key18": "3CpuudsUpUb4TqFBG6KMQdUykAnjruvmiax38oniqzP4pWud4XTvdqQvEmH59UHvLZ4AYda1QRUosMqK5c1z17VN",
  "key19": "gfji9rL43bfd8MebCSm7oxw6T84ogyEHZNrNKRQTQBA91uoH5EWi1qi8E2ZvqkEJHfMsexv3UkkkJELaYHkqVFp",
  "key20": "nbBKgA1eESQvUf1ZMbHDSEEXSroQ4AeoXa4PfqiiPYNCy66pkb8kSshKsdmYRc1BDwsw3Vz7hHRtReqJfcLB1av",
  "key21": "2ja5vnavNBPhei1B1Kcf3XejhWqhgKR4o8ZDmpvwqWgKLmxR3ugrcZmcJZ1xCBGAni6E4RKKLMZ5cPRZ1sUB3XQw",
  "key22": "3GBCskK8zQxmp8YXR3yNaNcPfsHCkCsyRkvRgMNRdeTe3k6uz29S1TScEvAtghtMZhULHcAYTypgfjkyPmGV4b97",
  "key23": "2PSsrQJyVu73F7rUS2hZ1vZwMNCEaviyzVqJ91xdSxEYL8Yd2XyrwPrMNbgSoDrQBbDoE5qWzU9LgyTFCNi6Kd4z",
  "key24": "3nA66JKr3kzGFQV9dV58HupdsYWKtogF5ekJcGsgD5mQYH5gVgsVq6LK1v68mh7DudswShN5EyzJCz8aMYyPwVQo",
  "key25": "5R2zvXdDZoQxNejHN3zVWmYSXMzmREBF2Es5raSgWjXwVMSCsb9eas9MrdxVa6GKdN9bVRnBxGiSRekoennw1Tw4",
  "key26": "5icuh3RGpBgLWN9RiFnBr9cWyHHeVnVZbUhzEKoEkcTTf3dSMFSQ6DuAgcDrxzcFxP5dVLpuzByAiATECU3yd6Hf",
  "key27": "oV96YWC3zwm971q4pRUPXh7bcaGya8cut1V3oMSwLSNY5nQ1PCPYN5uKYcLis9VMxxWqDC3vmPoJsnBgrPEJKVA",
  "key28": "5KqAGX11GuuUrmwjwGoxYwZ5H56x7kiQ5VXuhV9LsVGj7dB71kRiEdhMprmeucEFUUuz4ve2kPNzenUeLMSxBhz2",
  "key29": "5cKwBX79QJyT5eNL7sEpQoTFxXBd9tAf7BVcKP76ankD2Cr9VWGWL93T5dJtLXnfDHWwnShRrm48k6SbkQDojZry",
  "key30": "22hBsFa84HszrW7619oYRuzLzHD87tiGJp8AWTCaw67xTuFwDtwiwNfJVrTkoxX1MvxhfbdmpbdAqEmSmynoZ8Ga",
  "key31": "uWDtNBS3jNpwpPPGHm4YuFV7tcbesfAi9onynFu43UdTWxKgsVKiKLioAzJ2kSbAGmZWmg4c7XiiC6NVDZLP25A",
  "key32": "2NDK5EBHCy9SejaxzphBzZP2TyRLFmSK9ks81nvCNY9zEpMyeodxhfkovquQX5RWx5TQiQ4xEvVPH48LgWnayGAm",
  "key33": "5j8kUdACUGaoaJnzixDBb6m32WeLY7RxUAR7sS1YiDuwAPA5XbG2dzQPiieZK1XBjq9hruV89x7H3u5ZWkEJrEx7",
  "key34": "4e4peeu9ag1BMMFzrm5eRRezZmtXhdygsZEubKssjsQ2uxca4ACJzBPLfvzB8BvM1W185gAeGiUxsXCTfBDphKoW"
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
