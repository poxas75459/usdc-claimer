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
    "jXmGFRSQtnmdz9fLD2fm7HY7qRbMUjH9pJ9SK4CfXeY6UoWojSi7PLZUH3BuWzj7du3AZSpEVgesyLZhjrvv6hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gNj2GcjhuQP7hBCXKx41i7KkkaMHoGLHv13utzGom61phTVGDLBaHfEQFuXV4ERBhpwL8QMcjXBL2SWro4vcsbh",
  "key1": "38EE6oWT2pfy5SQb5ySLPLBg7dRwRjbVUarQaGdsuDNHXYz4biNHazaN56eTYriQ4qEdhjQg5WTAfAzFXpc96CVB",
  "key2": "4f52HB5oS4VMbdnkwMA2shFTgh4itSQLMKZznsfRhzRTAZFwBRY2U1NH3zkCjwrM2qpS692DoCvuFWAqLaRVJFZp",
  "key3": "3TEUmbNYVrc55wseYeM5XrSZK5niFrUk6x6rjRJtd6bw5tnsdejycibN8319xfyv7anjJKVcTfaQKXW1Jv2kAY1C",
  "key4": "9qjRHiy2uLemVz6g6GdBUfUfgjgJ33D8hmwsx6vp2xsCsiLS5YaBsnmuxquVnqkoTE4we4ZASVeeZ2muTWSE2tk",
  "key5": "4tt89bga9yUJT8HPR6SV1HjEyVcgnPs1reVqjT5Np3t5QjpBcqrmNW9eHjWfdibj4G1NkEHFnR6Bnc169vngyiAP",
  "key6": "3bSRfEqVkG9WxFqDsSf1bFPBGa2MB2LoZtr24itWkyZjuPbvtqJtu2AK5MNJYvBRA8dQNJWtpLPkXXbFgRSUef9a",
  "key7": "4RZ5EyYWoxfi5c6RYru8KZZ211D8GBKdKXQ63ubTHver1ycCypVNbzM1iCrJe6C4R1hATQhxCZNx1sN9CCymDxCT",
  "key8": "2BxPvsdKX1BtUybNQqkx2Bq84eW79BxY8hkCv1xVBgrpAPG6b5oevyxtF8GxLJpKRak6qNB8LH3nfSaiVo97owuz",
  "key9": "3NrVnyy2fBVPVUFp56sV2Ymmb1XqeyhE6VTT744ntHLvrSqCRJxAqkqdPN3V2KepViW9NPLgdSa3gfXHW4yXj2wN",
  "key10": "3JJaPuePAk78p5RDLFYz3K6fQS2sjLMuAWRttW697nJq4KpUNakcqsDgHyL4xgkicXuwvy4rSqG9nDxs918evVY5",
  "key11": "KC37YEJqfTKycNa5ark7vD4kP4rShYvEiU9YT36UNY1F5hkYesNjRb9jGBUZMGV1BCt8AE8ekMAi4LuR2TRk7r4",
  "key12": "5Yc6EKV8EaTGMDUkFX89PDQiPwMdMPUcxzT3kcJko2rTBYAWC7hjh76t87HGP18ZpzjH5kTKsNtScXDnUJwUFGki",
  "key13": "3pKMsJXAimx28F8EKMmkzihqZbFzUuLDwfWpAU9NRYDLvfAy1ZnB1AqAWcpAX9KMP2tvCD6dPLnNCFfrjTxg2RAS",
  "key14": "2ynE4QRDBdsxYaZY5kmCc5BDB4Ed5rV5uLuD8PU54shYRGMvpyLb2iGHXywZey9AunhndUo33U5mJdH2gXoma8sR",
  "key15": "oP3tUvYZ35nVvTh2vYfr8bSXSdGe3XBSNZyFCVvPZujuBgjvokbsjXk2AmcNNfighqKcRxywHGjR6KZkyqxVvAf",
  "key16": "4tmeUzEbvJGPT5S8QLC5dbKhCg6BTbuHLDcFxQT3BwhnskigcNMvyCpaiFtMStH34t8C7jxvBqEHNFm9cibcTGuo",
  "key17": "3W7qZmX4MYMffEWf5LHn7Nd2ejpLesP1PvUsZ9xK2ByQh8ET2BVNYmKKKpggYow3sKFxXMCUXUK7vDZRRXri9xBY",
  "key18": "okGPhpqbtXp345f88yPxQ2HdFLr3XQast5ubHjVo3ZiLkwJxEhXydZHKtRH7BwtN5JiNJu1ZGv9GGYWEq5jC5T7",
  "key19": "3rCRuXwABuxCLYhDJaBF5gyn8hfYgWGPoiNnFRLB4jcsqNMaQ2LYhB2zCheoCjzydHnrpw7QbWPNajyNnoGuC9Rk",
  "key20": "27Kuf41jafUtcMhDs8vugDGP5X8XjaNm34sytH61cCQphRWFThXHc9WVANPKCRQUfifRJMat8hdthzg15AZ85Lgn",
  "key21": "3kDZxAdiAmeFPWc2tx7ZSPFLtumT4GkAxb5exGowhF3y4kV84W1xNvjZMNgR9NKw7QnoQwg4kCjGUn9wfyLZreSE",
  "key22": "4p16vicnwCZbbqaGkwZSkxATEccjRumwWAuguEUF1dF7TbbPFndBc69E1Yuh19NjPgc4nh1i6kPihz2SbhfLesnm",
  "key23": "4sj91GHenGiUhrkXawc27bpwUUfECCd2AqGUZgzfZXSGsQVd4QbvahS4cxZWX2vtxEHyeDJ7GfzGThFaanduiC4j",
  "key24": "8QYEiUCXyi3dBSaHvuUPmVj7PnF5Rib94SoaPtPyLLbcgsssLYf67WSt6iznFZ8Dz8YKbeLeVySsFByv2hwWVhz",
  "key25": "4KsRMahox9TuqrSZS7TXBiTob24jii6GgndDm5mjfLvuUY93aFCwgaSQkL2evJ9GwmuN9PW8yp9G4rT9irjVFdPS",
  "key26": "1HQYPutgPPnn1dSmmTHrzxHV8aTJZ9oKTxgGvc6tbPZXN86ByTEy6bJUF6YwRdrf1XpaQdnY4oUc2tXcz4GDtuH",
  "key27": "2mJ8sejRPkhK8AqNHSA2DTMUMyNp8FPS5p7TDHvwELZ3HnADB2btNFyPNmNwwwQy6teFP5MKxvVVbFGPhVMN4x27",
  "key28": "59ZAgM4C9xB1mshQzMZ9TmsnPmWPsmZgqRkAVkqW8QxzViQhFPo1iQAZSrjjVVsJ4U1tdVxNwGdPNij3ApLX46JG",
  "key29": "29hbrcP9p5eQ5zvKY8sRrYoJ6LPjPtBQgSR9rR2YqjaRnKPwghHW1RFetM4gmY5DxA5kgQmfiNLWY859NXNah4dT",
  "key30": "4Gva7St9FQqTp5GLEV5n36zXumRHqdoDY9WgVGVfyDfhedHhykFiweMyXPttFbXwDZu5gdsV8evCjmiVjFaes4Xt",
  "key31": "5zV7zNpMzCaGVq8vxgLV3do1MKTFeyw9rLEszX5dnMzt2Nykz8rc41y8a2pp93hLuKrjC5XgpA5RbYQ3zWn4BNTf",
  "key32": "3RF6EHvjgAmfKDjpooWykKkP86k1AaM13dhtJ5W57ZnVvAZ16VCzD5gbTK3be1u4dpgJ3jKhhJQGKbvxsPXAv8iN",
  "key33": "4nN77oywnbxDKqZrARFhwANGasqqmFh3G4m2T1GkFGV9ksMSyz9wUaTHgBm7UwURwnq7rLMZz96GsweHW7Gp8DGq",
  "key34": "2y5x7AkrJrdEKgYtfjUzp17DH6zw87AraHid6DVY5EGr84QoZk6qruEq1DzYWnzLgUxGeKGXJR3WqYd73XGfg1Dx",
  "key35": "5tVXHJLXj6qHZWdRgQPpn8ghNRS5T2QQkFrzL2YTMyJfNJ98ScEQEE6iyAa5yDP8DKA7QS4x7177tb92jQAqh3ix",
  "key36": "3ZkY6f95Uh4zf8mwS69bnm28HZqrEH7EtG6TqzePTZaFDvos9XfQFfB5PSFjHAF8YcygMBCKM5qmsDFnyiFVpx4L",
  "key37": "2mSukY3KEYSKxBF5rMMLjgE7wYXWfd5TAuBRm29v5eQ6rz452zFmv67GQng6kmYowPPUWCNDFZC7Xm2cKc9vFiHh",
  "key38": "26Dgbcps2yAYH2TXDW27xyo2WjUdW8zuhZnU9qgFz74CEBYxatKft23YPNYhrqAyZre5UoBYUY9sjycksp1NSpvf",
  "key39": "y6Up89JwyCsrvSnvAFZjcnS1a4Zy8ni2cs6joNKdh339xKsETMcYZ84suSpiSgroMfsvJBYQwhJYo77BMeMwY4z",
  "key40": "5kReVpxsEToTkZovpkrvKkqcdF8f59SWVUVfaP4R9XN5T7sJKEddTEw88Vkb8dG3P3b4r5XuvPZRwCRDWyV2rLWN",
  "key41": "2Uae76yLzaHezJKd3zfwis2y2TrSdBfj4Pxq5naqGXMaCuXAqZYUCckXGkhikEzfWJcZfcakmVF2VLAEEt5LEnR5",
  "key42": "2S9GTSB3SHqMfvLp4sEXmRsfEUKpUUP515ooWiFWMvx2ADP6KgRg1R6p43qZNSGyKzPvYJBUrzg8Jjrtu1pejgij",
  "key43": "5H9hwdZwj8kK1c8nR1HyUAdqEtaDxRLQRXqearm1oP8y1xsbBLDcooVFfZayu9MgeZXKmPnHhAHA5AG5cpDfWDA2"
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
