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
    "4oLHsS3RJzFCq21rSHTFV8JepVWXisGFc38YLv6673kx36PRbhE8k5WZzXNKF1V6eTjsHL9s16NVarEwbDckTT6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEKqV9FpKbB8yHH91tJJC3eUz7zfLuF2wacgxAKN49sQ4zetJxM18PKcaXRNpQzTFHi6tU4nUgUzAEKmFSCd9ow",
  "key1": "9xoHvFwbzJL4pMCdo89yCannXoRHaW1DurULT6jhZdivS2zQg8fsqehkpC7chKhDsU7ZDKnVAcn4maVxkb1m2E7",
  "key2": "4FipRnzzJCbmBSDDYtZWHhunbRTU2xr98R8xwBmzs3P2XMhHL5rUdL1GzT57p3PZpWTwRXPPXxuPjYUaYRh8nrvt",
  "key3": "5ncSCGfhSyY4etsBmaKXv3hNUphFpgqyRXhtUsMLD7sDAVJdey4qr2Mt5cstNQLTqfCwKtHytK39YXShfJUrFzKN",
  "key4": "3Ey7UGuiGv5SkGskAXqbsR7SB9e9oRWw7wgCKdMhEyecRRZwPeUGNKWyZpz6F9wHhb9mT8aaJffrwWJR8EBdopfH",
  "key5": "23oeZBurBDC5fPXf6zJtqtUAxY9LZ9jqNFsKXftwsxPzLHhw1TLL281v4LqYYdpXRGaWCrnj3xa2mFWebScGgtYh",
  "key6": "26kDej93DnbdhGATyAhnnN9i5oGbtur5sSZ1XnSnG5kUF8RXdmZkdiyYUH5cC3FdE15Phb1AdKXjGuU3UmpVzjjM",
  "key7": "2Jb4xCQAr2HZ7L5qqdEvt1oTBL3e3j7KUtcaZEp58aG7F7TahwwfcvNSUputWJ4ZePUo5Hxi8i61gBwVmq4bcrcP",
  "key8": "62vBq8Xq7xTAcYdDk4Jbn47dXzspbvscNrBQaC7GjZdGkneEfGYBdQLDNyKMBYyuMJgBYwy1fq5UVi7erj1sezfi",
  "key9": "3rGaaiXdbHFX5G4t7Eoof8ATczHRZaq75gSpVYtvh4Uh5PK8bXGNYxYSgnmGR67AgfXmT3Pxb2enk3H6eZqefvwP",
  "key10": "3eLZQEwyfVm8Fqtd3QVDQKFNdTKF3jQU9XiWtzcgte6FijJTe7cRDA4AJPiargDn9c7y2ZGYYv8YEQyEZsHDKv9w",
  "key11": "5QGsHND8aENp99GuMvMQsanNZpig1h2L36kfHPYQmm1hoG2puXXQb3CtQML4Y6qZbcbKEpomAE8uCrFWHT6CWjqA",
  "key12": "5ELQcQ9pBGPotc4Maffv7J98UjgD1Ybh5qk7zcrhWxTirwc3Z1F263W4jNxm48zA6sHkwmXANCzjRGfQBTfLnPgV",
  "key13": "zTMYFDa165U6pX6DNynS4HqR1BusktP8FZyd7tFDPT9p479Zgq9bVsknZWpz22qaAj2GfwqyVuSj1eAsvE5PEdi",
  "key14": "rje317NsRhPXiQa2riK5rE9ACDmv65fKuUzuJujTe4a5dVfGnMTkbKa9QpUio5ZJ3NSJU6wbVbuuktyTqBQYJjz",
  "key15": "5yWPnpqPqG6ExzKxvDbsAyii9qbBaQG5eSvNGgKhKjBfD7uyDqDkM4L8nPnjgW9RkBBeaZ7GQmN6nBu1CxufSyYq",
  "key16": "5k6eC2rUXaMYLLxkCsQTNEuD3cSANUDwqUMWp1RP2Ss5LY2egM7P7JkhxJiiXg2Qd7QJC7PkcgZEGPt2xt9ovGZa",
  "key17": "4Kx7HgFQY2yiGF1eymJGVrhd92jSNHz89zWfpDM6SMhyVNNYBqyaDjWtuo5ryUSfG1WnCWxu3xLpfUpKkknA9VYi",
  "key18": "4vqkcRNY1AphKbw3hJMZpyFpBJ8dmwcM1rGFdm3cqyB4qysqPBoJak5k9Puvm7ikdToB9ApSXmfyVDLYxusgAu4L",
  "key19": "4qaxmiN8ed3e8RzVPAE2efq2qQ6zfxcUXQNNEicfDUr5XCGirCNuk24j7AFaX1ZP1nWUeET11WTTRJaNpa7ouQUY",
  "key20": "3MRewVvyJGC29NGQjXtMRx5eqYLER78tiXgw8NSujxtdrE7ygqj4vgNH19uvreWsmncQckpUf6NHNXknSEwcxqrc",
  "key21": "5j7eEGS88FedZainDFxbrS2VsagAVNW4xFAsVtkotsRtsN5YyaYzHCTUpVECcXn1bGzXXWZ4uBcm4nqRscTzqvDE",
  "key22": "KDDvLWEX8VZvKVnAPA9fecdumViuoT99QwffdESXk2P3znMAmuSMhVTt17TmRfbdkdSigANkhSEXa7Gy3Nwb9an",
  "key23": "5eZkbPsM8eAzpFwcUbpNX8qGU9iQjSXnoiSfjSngSRXrFAsmf5rz8hsp5kFMZ6Z7CpTkUatvbVxaT2V63sekATtd",
  "key24": "eKffEJcFGXrHUVtdE8pzcd4D6NFfqRnPHWWfPQjXLyKbqFqshzsx6wXZWdCiLKDD51eopKHq3gEm7tiMyypGMMT",
  "key25": "twAnHWSTAYin8r1pxZSE418mrqSVou8uabhruZyC1zjBQ49cTmEWvMSu29sCjmdp4LhbexiYUe313EvDVkLPHQv",
  "key26": "4KSM7P6THu2JXWn5UrTN2BR7azVgzzozKJimWRq8BVnkwRGq8q9p4wykDQ53FfEZr7Jvq31iYeK39GVvfqq1s12Q",
  "key27": "4p2bYBSAqxNv7RdUTSfwVySjxmkDD1DHiqdCbD27PCBHrahDicMrSYGfRsKHSuUNz1xDER2DmDKYq25Ce8VWjimz",
  "key28": "61tRLN4j4oobScvbzy8qgULVYegmjjnHRVMcRFsSnFjuCLk9JfSVjSjp6qzMpgdodNUP3JZ24N6kKKLhHrcsMgyq",
  "key29": "bRbPoe2uEc2tn4cVdDVkFNsxRtbpcH2318GY7YSXrkw9bK8yX5iWRDNmuMNc8Eqxh8QwjPFzJzpBX2XK4orSuJJ",
  "key30": "54mqMNRNvZuryeJiMENTZY9mQfVxQ2TksR2DUv777F32FruzY5sMd7uBr3ERptwhQFuN2PpDiBDnsXYPjDEsAXzm",
  "key31": "5YDMQ4paHMJ8Un9Va8nbzJjEn7JFyaVMc8EvGfdHhBPvvLRK5bxDNzdwAYyxWZ8mRv1TN4mdxxJEBX1H99Cu8YzM",
  "key32": "5GJmQAZjwczbMvWn9KxutzHuCGxWtZdpsVQEkntXDNpKrkhHmyzmp2SAwUgM7YzG3KCJudvjJ4udMJ2ry7wkJ1kJ",
  "key33": "3iWvatd7UMuurj9rqzVJSWoUGHyZyeELEMEcdrtj6NrRvyb5MnYiAXS4CBK7xz1omFLXxcP8sX3pbbwe8nVWgqw",
  "key34": "56T3biipUPodqQWtpba51j7DyZEy1YQR6i352q69fJ119ZSGYFoxgXiQwraU27KSBaKRFWQHbDMP4U1kx5L3ncZZ",
  "key35": "4NJXQSWXoeNBBPyQ1y8sfuw371hGRtNB2fFL1swUcyktyWnykCoNp4n1LdjV7GPrTbsgip4jo1kNvAx1BDbmShf2",
  "key36": "5t8f5waECjnyzHKNiuikqxjhsKR1iJAvtqctvDreCRTLVyr8nB7srvpVxqYpLQxNWzDTQQpabA6xFmDNC4nw2ypE",
  "key37": "4aguenkG2u1aFB8yr21A7r39qu3MTgcZ7EJ5kkKbjF99BmGxTABip51UPXYs8q9eKWp7HTvRBcUCaWABZBKqoy9R",
  "key38": "3UrWEDyDVa9PkVTxuJuNRm8D1qvJ6aZrk9ZSsmLZPvGy1a588GwH688EiiXDaJdGRDFU1EXyz6rSe7wctrA9HTVE",
  "key39": "8MxVaLVTyE6af5NT6xArE4WPyXMff2mRWjLb28hVHepdRDLcLP6knpkad5JbEBjhanTErwUJAC2ME2e7S7jRHYA",
  "key40": "3KPtjCxe8yPEQ1jyUBwbhmyxE9EsZacuCFoLyQcytvBkV84e6c6ZsBfbRnfej5x2giJ5m4Xa7P2B5mktNtfu4UX8",
  "key41": "5Y64KLipBPDLXNXJSoES6hanq9e6CrvN7pqaYQeme37gMpd2t58nRsfNkkhbu54z3PAvWpX38uDDDwrUSMPYpQba",
  "key42": "27FBboLGrCasxyFtNWq7wgkdwyADFHNbLTWNQrPVDjcfqBpy3qpb8yUeTp8tyo2JWB3eTCCsUaW3fcH8FHw7R7AG",
  "key43": "4imvkppeHzWtL6WmQgtQa5ZJ2WvnjuWDuF9DkjhVqw4CLRDcSiCt6srtJFMD5LtD7oYtuCPoMQ5qYsMLHGXvUEQ5",
  "key44": "5nSLi4eYZnFf7h6PA7RxKu4F8QNzkbDDN37yJNLSNAonbWbNHcPMHPPPvCiTCVcVFb38xfPSpnSkcUgcbhu3Xw69",
  "key45": "BWspsCZ45UXFkkegWSFrPC4S2xkRvYHh8RhYBDemCNFT2NPvXFT1DGqtjm35FR471Nt9krDJSq153DJhUcbd1WN",
  "key46": "zr2r6Miq4UBuYJu1f6xN6gGCg44Cd7mUqqfR43HAENGm476VUdGjwLNHFcL2tVmfPrQLWet6fRJx5ofsum93T2v",
  "key47": "2rFGgzpjZj8kF9PhkpP2UCCjzrLE5y2e8nXtTGvnpEiMv45UwtNRp7JM8jv8pARPLCCQixiL3XMZrJA2hzsU45uR",
  "key48": "2gveVwJwYmqvzdV5oNNWLPTHhRj2azHoVnyUQfZHNP9s7WMWLgMwTfSvEXteH6obcA3nAV7NAbuXvWDtLjMtvuNC"
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
