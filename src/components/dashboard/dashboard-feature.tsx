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
    "4s4eSnkCUF3EwLebzYVwhhPEVXfx3ZvDhZhWbEyvUXQDW4iGGcq6nL28shddSo5fwfmXP9GrHWSLbo1vfnZRkZje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VaK7AMRMNLVLzjnGDxciQjY9RpyMYEwdo6d9bpvJCzYdKKaoieSbDU2QWHZhniidRmzr87Bgv8VcmNt5ZHw8CWf",
  "key1": "4caTYEihC7V2MstsWyzC152Xrs68HQkxzs4Cf9KvSroTQuXBbEARtK5mzvsYj6q84G2fRzXRz6VRPq5jP1Mq1DDE",
  "key2": "4UcWccKJPbC8m4R6nMtxDX5unjB4GHZVJNFze9MQ7PiYnggRqnkh32t2shcUtG3JQ4nvKEUbVvaELJgRL26SnEM7",
  "key3": "4DZpgXKYoSxNoaFg6TWZZzs73YLpA57hQQ8kWrZfAHX1PfXEWvKCJCr28LKxznsx69MaSBnSbYvev2XweRKs8fyd",
  "key4": "5oHQUFSHLf1WNj7NyAzpTFAjm2RBAjdSsCVAhXETzHMuzSyRTfjVgAj5HobnhA35us9VyS1sca2ToYb4t8q2oNnj",
  "key5": "2LXyxn9PPAhYxD3hHRhZrG2wzN2CUxR9dhTwC18pyt2P3PkvdEnrccXT8NcUaCte3bWVuXVts3PP55jXc9LbHgoP",
  "key6": "2S3tuy6s8ynqF1qXwcwkdCzKx5461qHZekiRYW44QUDAx5fB8Vczf8ENYQWLkCx6yBome8QVdBH6Qs51yNLB4fBA",
  "key7": "2LR1bwCYQjxwB2frzrdxzsrmLAQTyYs42sywfyJmKZaqwvctt98FK7YGhazvT2kyqg4gK7UhKXVWcPxeri7xCoQy",
  "key8": "5bRuYkJULDqPoyvcZdSMXAEZiRDfijATUukPaQshmgJZNJMEbQ8WHRXHwg7JwTzfMuiQ4QqAdZRovPB31KwmG9Dy",
  "key9": "4ZCuLQX2eXLmMvg89Bq856H4ZrwSjWj3D5xcgy8vSwGhN62ybp9s8t1VbvS2gwA5zT22ayZYg4RJUZFiuCCsbVib",
  "key10": "4dxSV8w3eDtC3CYVZnjT2Gnct8GaYUnojt3GTfLsLqYEsFbEFwqApUkyVSNSbo3tcUUeUwS8MDoKk1o8fJA1gmJy",
  "key11": "5hFpLzajMxch6YCPz4tAqw1PhAkzyW1cxZHgeyjJsiyKbjw3oD3Nwx6TPGgxMhKmGVrgPvawXnLVHkhoyaSGN3Fz",
  "key12": "ZnCQ46s2SNjX77Cgukq2Mpz3oerPqBiNFHWaXfgoRJgvGNy43UURqFiunoi1sKtVyPgjdZ8Nv2JxKosuc2JpDNw",
  "key13": "gm5AkwCCf3ga2HL9F1z2CGr4145Rs7vKqwrbgjcE9U4HhJa6moPxTzh7wjvuMpnqrn45x7Zm4itxNZtdDmV4CmC",
  "key14": "2k7WKBD33GWXRS4Pw66Fdg7WCy7d7FdZr3VzYPFFUZqx6dj4McFPueKQkuQMtYsFF9vvrw3kTctq1uAdndNnVsD5",
  "key15": "39GRkAYzG8pzbSqPejzohqzBEamwqFfBMokN7QxFUFaNLPk4LN8DhkvMgJcQJ3H4oxSDCGXbMLTy9PwsTKQm9qM6",
  "key16": "496kDn3AHGf1ZkugUSkZzfQsrFkjSVkuUP8x3NLS5pXWeQdSWvEafMsgB99EvtjmWHarLzEQun9p1itfEWCzfWP1",
  "key17": "2LMSHrLY96cRqmVUSqFi2JCktVaMrTgk3Dncco21e5Puo3QauTpmLygQ9Eoytmqo2K45BLYBhVTPrkTJKUJYfpPw",
  "key18": "5etwH3Eo4quh9PKzVB8kiqLwHBakf6eKgCSD1ngQ3SCXwh3x6YRMziAhoeVqsSbrE2DkXK2gcCYvyJ3qzKHRX8G",
  "key19": "wg6bbkJRUjZkxgLJjW9RoYmCkJ716d2HyoFCxw28skVs4gVr1Wnjj2ByEikAogAnoK3ZBfdQ1B3bmeEzwHr8qi8",
  "key20": "C91wYGmCL1jeR2nh6cXmymbuhcurYqssJTK3ZvSPiCwyoc9kaBC88qGfaUGzWuc7ya6DGtjST3AfYesaQ1MUwAE",
  "key21": "pbRGyfrBhh9oBWacwuPG8WZ8213sFnNmaU1LRtTy6CkyhK9UkGqyubDhVGgEpRm3w2WfunM1L2fhCkmDdNnQrDN",
  "key22": "4KEJ4kpEa47u5voUiTFwxwaYBQvMdoVj5j6Gzf9LrUGTrf9ZxztRQp7HV2AcTX4px9wPEG8u6g72cWWCt12nKu9c",
  "key23": "5kRFePqhy6MQbjUHWDZmmQQFziQmfzL7LjWvTkAr5bZ21kmeiVNVuagcNjBQM3crzQEaPE7qAxyZ2BtT63tP8FdE",
  "key24": "4yuth69BFsGGCVTXPGRXwZnehFAsxkSXRszn2hwYvwhQ3fvKvprYYs9fsrHfKQ8Te6m2bZqPKorSe3m7JQReWD1p",
  "key25": "21ehfFhdKsThxxCMWtZUomqm5k8SBMqH9kfZKK1RXQEtmKsaab9Tqc79nGGdv5VYnScQfPea7iwGC4RgWtc2sWwz",
  "key26": "4BrzWCcwqn8LR6yjx9PLGn5C3uH6PUNWSEY4YoJni9iwvQx8jFjV7VwpyTW1URC5k1BG1fvk72mBBheQAwUUyVZ8",
  "key27": "5rVSswS138dnDmfDttv9Vp2e4VTzMqoHSJ4rZo8VB33JzW62rzKbgs6TPmtv4YrNiNFBbBeuDeypHisMHHrmHhYo",
  "key28": "3Jud5Ds4BATUMHD9WiUM8gUMHJt3grnaVaiWeJiqanJN1km5dLsQRGMk6oYC3BecK8nUwwLz94YXdNSDFDS9mRWr",
  "key29": "TULNbN8wTq1Q1Jyz64fVjsEid95pCWvscko6bu3VqN1gXw6E5gGELj5nMKQ3Zs3H38HHi4KVxBgZmBj9EyerS7S",
  "key30": "4AhLD6zLcGpxRMPuH3UnQPTV1UM2331kdiifB5VyMiRJbyqeKSpBgNcHuTmDiUKwuTfPRHHn9wqTUDBHcfTUgC4v",
  "key31": "B2mKihzERVyVZSrzaXEMvVHhQggZ1j3nfJMU1RyJyH7k4bQDrLf4dYCroaG2cTwZqTzbEbFqzPbonkiSEZDT3iG",
  "key32": "2FHJy8zEL6hbnJYtpSmLD2n6GjhFd4VknTg8nPekzrXcn6ffJgSvsC2yv89ojsEnFbK4xyVpzF7nE5FYzq16ZYQy",
  "key33": "43HN2kbYchfFuMGw8jqWNhLduNaoPSu5ZHQJFC2ZShWYwxrkKgtJn57KoJCUzZVpMK4RtpBF7QnofGVyJWRXPUHG",
  "key34": "uPxChsMqMBWFnEjD1pJ6b7Ze9SE7CrMvDaQcMSgjNpbcssN6e7xZTkpWCQffmi19wbm1iKG2KNYVz2kh6F4agGh",
  "key35": "257D8yty4fzRy2YkdaiDonPvsPqwcWPLuzTnJrXyhq2wZqpEKLmdvNoEaUYeP6Nj9jwrTtAPHskAfsAtp8NgKpPB",
  "key36": "3QJ3KvSUawSx6hm4MPnz7BfJLmw58LYBPHAArWtHUaQ1PsdnBgTHskv12TcVZzC6tp4TXm4CXSHwZtjT1xJvWUV3",
  "key37": "2Gd6BaEr8x512bp72H1FXpFrcincF8nneAG7zQ3fH3oku2mJFdFhK2SpXTiGJ8HTUSbmgTos2n4eaVsCMFRhRbLi",
  "key38": "2W5yzSYtF2gvtoj5Qua5cMAefg6xPWXV7RpA8Z224fjDhTUScfyTjVFmbiaHThGQmag2yJPitNwSH8y6RQJrTpSM",
  "key39": "4ToX611vyVctPYann7MFweUPSESspod4U1KfoGzweAkn7ZRkLZ6MsghBwkkppZZP3gnDSWrtsMREnYjdWY1s1Gu3",
  "key40": "TwoF4oHqiCLUSWj4SzCwSaUEJqAntsnZTG2zn6NVNEpxeFVbbCbLzvZ7DzL1Z5484Y5EGU9U1oC1UHCdKNFt8hd"
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
