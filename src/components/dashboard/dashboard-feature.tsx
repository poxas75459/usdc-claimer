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
    "4rsqF1zAbaVJqqMF2UkxmauJsrTuV2z2KbYzVzQQDn7uWo6geefCtCj6p3XmwUhwW2gCvUYSv28vLToUJBCoNpEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Reie787VUjeNsiL75RQ9gf3wxgCCqLF3rc8KyTFq1hrskVUoTRHpnyRmNQ7uoFj1nwEFvpMVXqGjPF2yxXqUPW2",
  "key1": "4WZdKYkbJk9nBcV9NiAy2SBeq5yQEqDgdyG9jseb6Hbi7cNqtscTJ2haQPktrCsiqxLWTT1dDhnptofSjszNnyo7",
  "key2": "285RCQ2cYB9eXNpquVdXFEkdM1tnwDPAcZK6Xb4p6wxjnVobc2b1FEQ6BxMuimXWySh29QajdAzKuw78PTEBwtAr",
  "key3": "3MMc1tdoVvmzCuLaFD8mNf9jSpi3drCDhMMGhKTdku3R1GqkuLtdNAW6hcarX7eLRarsRK1q8sU1BVES1CTW25ER",
  "key4": "3ESXKo9D8cFLgowBvha8QEgwnjmWTspmbswQeDztvzxjwwKthVXfgavKBGrCro8RTRxoBxMrwaUGrR15vPjvth9c",
  "key5": "3H4FPx5FoJbpnYxchpN2jaf4sHG9ysF4NYbyCJo1qgjgqMvVWb97jCBLhqMNj7v5zApzuY98YNAJryns9sFBuDgk",
  "key6": "3TvHpgpbiN3XUzbqgz8vTwzohKtE1Bdjjo3JVTn27afaBTcSe3dFyCdQfPAEgiqPax44QSbUtpQjjSpyDsYZgn3v",
  "key7": "2Cd5ExwDq99TGWKnFo1xr7FRjTngv8YiTtDmKAR6BkDo68CcMgC7E4EmCGyozHFMuwh4NN8LaTzHwjPRW6mSiL8p",
  "key8": "5t5RKpQidsBhtgncH9TJ1i9GQRpAxLpAwoXaJrFnfTeqh2smZPcPbQemDQbCvPXeKSRCQijBEZZYjkLE2cq1YW5h",
  "key9": "cdgSjbS5VQyDBMGWH4Ng6KNwrEnsZrmh4QBMnJPFWYEM9GUvW742q6wYexaDSTjCnTVsRkvecQEeqGiCwFUevkx",
  "key10": "3AbGCsVbSsjY5dYzQdLtPJSZx1YjVZKTxDv3PhjwPE8vsJqSgFBudV8meoPJfBDTMXiwN8aMFhLkeE3AUQyHbYNU",
  "key11": "2stQSWnQu87HcZNzmC1oHW2ga1kyb6VUXhUW47zErStY11HDUohSQyg18tHXsS8Hi7yQqLauq6pjALjx4trvPrdp",
  "key12": "3PdvseRG2qUUL9N3uAn6BVZhNAaWdjc5RLS5gY9MWDmmmYRZMHxypKSU4P8f5nW3fJVx384yuinLacE7P7LMreJV",
  "key13": "2LEDUPQejvvF4BxjhnraKJVGJ3GyYJHcLzB5aThXrZ87RzTr3cLdx6Heoj8DRm4NfNaV4yEJUQD1SNo1tUdw44y6",
  "key14": "2bEhpMZDsmjTsYRryPyBFqK5pkApnxyM66hp5a7Rxr2xQRb5STPwJRaioqLr2jnafKxSQ5Y34EbhNtsCWrm9ncuF",
  "key15": "4EX7qWSoKDiRNxYnnUqX8NGohkLTHEJqes57ZGaLk6sKscnSRGmk1edNap7BVwVjdJq4UAb2UaCuTHX5vTypXZSG",
  "key16": "5E5DCAiG5dREU3HwN5awtSDeaGgP94gFVzCxPVHuaF3P7vZDimuwkqhZWkwRVV1eM5yY1o3rWNjhqwZYuJ7s4915",
  "key17": "2u2pvRiWAvGWYeVhoXAqtpu6fUbQ8Aa3GooZzY5j8uw3GdcgsyfZy2BrF9LaYzWovqfnsoJoxArjqifkDMsQfWnW",
  "key18": "5JDtQVHxsoSQHJXrJYoULyDeGvJHrxhVxzmTS9gUWHZRpD4AEf7y59Y24MrgUtee4NYbgQLULrLJedkckK1bQhR4",
  "key19": "3yYAP7tSm2SKhKsguhMZqU3jj8vdwspNudk757h3xbHAANJoVXrGNwKej8no7bKW7L5BWTVPLL2rTiZTjyqmJXsJ",
  "key20": "55EjytGcq3859LvN9ycwN1uTmPpdBRVMTtynFgwoJT81krPv5FWojstLBtsLZeicT6R4v7eAbozuXq6WoHjX3Jhv",
  "key21": "3KDnmxYN8o9ZNx4fdnTQNmeRmGcmEWJ9woiN8BjjxPfpkZBzLXBgmP1XN8A9yaCvEUS6dyTuKocajkYwg2Nmx6f1",
  "key22": "zHkLn1kcAY8cFStfq5sSkfbB4s8icWLq3SwPXb3DJtHVknJLKzZBbFeU3Q3ZpauNUjkqnrddUjgdPx4DJfFNppP",
  "key23": "35oVR3XmPTrAKngVgzt5yZRvYRSrbSQVBPPQzSCAcWBnvDAjqvTFRJpq9hLZjf2pfQft3JSKYBypLa7uuuziGoVM",
  "key24": "z7KjvZoPUkHbX8PLkXZJj8LiuRb9w7Mo5LmzSjh3gBbgPoJREESARwhcRctvtmS3YFjxetZt2YGLxjf4Tf37vgN",
  "key25": "5XauXNhthqsBx1PUNR6DBqCmiB35xwvDusEhyodg4z8CeGgRMM2ar6Ajgm6k2H2Sz3uXDL8Pd68mQsedKkQimbUb",
  "key26": "owb68uFQXoeT6UP7tehwsRsST6BKwofi72uaDk23SEhuiMLb1ooTVnVg3NC9eMf1iGUcnPFMysZ7q1RFGyy7Ngg",
  "key27": "3YVSqFEnT9ytXJcWed92rRLWkB6PaVZ5s5MnToCf7Nmv4RenrKNY6DyA8gJhzvzLyHWH3gdyx9dRW6StssPL2izH",
  "key28": "5LrdHTupzaeT8AonzqSSL6zo8Qs79KpaxrS3c1BfXa1nnR1fdtpxqCd8Qc4vYkksNVHLCRos99LaA2sRFGjt8eaF",
  "key29": "2pQ2pFNLYPwCV36zHP4zU1j2BKRWbXV3AyNBC8qJLuDDRCnZQDC4oB76GuYeYUq8eRkgoX8P6Y1FuWUS4XMEJKww",
  "key30": "4MVH2dcgjrwfnezjZmrZ1ria8uHVikNrWeJsxAApjjRiQKR2Eq8JMNU54b6Lu8YeP2wUhG8gmXxC8rMc2V4xLhf5",
  "key31": "42HyqU1rdjc5X9R9raHcVE7jrrPmbjDVpVHUukKaMFhceMA4eekQReXKxcDWToRqCKvwvG213qaHUcgJwaA4EK8H",
  "key32": "5R9Rjp3RvMioSBxGmXiBYhqCTByHPxhHfMkNqhQqTbNgby6geCKb3WqKPa4q9okA7etwhjoy3AHMakFmquc73XE1",
  "key33": "4yco3hN5m1JUzTDhnj1ksirzn7SZYCmHTSjV65B8SvZJPndNsHAHsYssm9PuieuPbB72ENyBFzJm5Hi8GUEyTTVY",
  "key34": "HxqskYcXE6eWW4wcA4LNNWZzPke7bafXCFxiA77hhpBn7fRr6QqXDGf2YonQmeJk2h9b21HGc3o2QwPZSWJpsTo",
  "key35": "67TZrSNz1EYuJWNZB7zWvb95aoCAW1avmxSkac8enNm8iksMXUzEDFbUBFayL4FjuBxMEotMtuB72FHbGKDrTaBi",
  "key36": "Mn3Ew2srxzFzLTgUJg6HbYzErUM5NayrrG3UFKCtpDsFVtYAH1ZmfaEZEPv8sjKf3oc6bM2j8pa4H1SnmnCTPxM",
  "key37": "5xvDWNDLfmCtAjhKVdogdmzkuGAZF4KCT5te6RgZ53USiuQkZJN34MLEbhE9zew2Ykt4DTmsQxvSrbJawDjjygMP",
  "key38": "2fFm25riTvNy7FAy7LKk87Aa7vm5GzGtrkEGXgez6FWqAtW9oSaMKVxD8yrrETgkge6Jmj29r3diWmsz58Pte7u",
  "key39": "5Hv49kBnP7NAr8o6WQJutEFNKHyu4Hiu5gtS1x3xAnHQkXBmB6yYaMrGaC5krumYeGHPS2HJvajPrbBmwibHdpBh",
  "key40": "wb9x18Ayf16XjX61ifYw66KHA5FAGBQqsEh8YvkiDCJH9A9guYKPuU3d7cxE6CagNBzVDsX3VaxCcLg53Ztsa3s",
  "key41": "2peAqK6dd3BzRE7ZBu4q4UVMf6dzCQv126zUSNVUAXLFKz6KnhugXNwa51WEcaX29wQgpZhMFvtngMPTEQLXbPDL",
  "key42": "RXfSiu3zcbVcHpvfNyPi7nT2sff6W1XY7Sf8YbjKHRhP5vacqCVximCQT1qcUjfqdhgZCGFMikyn7BXtLFwcZVo"
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
