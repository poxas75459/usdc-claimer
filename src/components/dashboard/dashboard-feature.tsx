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
    "9QK6TuDeaarv2xHMkiuFnqWmrVvjTjBUA8dVtEtRkiJ6rxtzx9Ws66qCwQbTMr6Tn5m8bzVsvzN98mqDBvVmA1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXtpWPmRqg6SDHrC2rCtCGCHya68MAHoA9qpctFGF4Ub4X4NdfoNGt7LzM7eEdTAVScKrHDxnBb9GgLmUR6Watw",
  "key1": "3ZTSEQZcrG6hLMs5aqK8VHaVWYy6fC33HME1AiHBjynGEwXBf6rNSZFEjkMMqH6LDqCtT2baeUuuAihbYA1S5vUB",
  "key2": "5GiQ4tiSVYjtMByqogchZeg4tSzou8mZdVZcHJzyZntS2JEPLcQcu8tpcmUZ6xk4R3ixyUXA4BAv1mRBs4dEytKV",
  "key3": "5P5pP3q6CpesNwKAjtGyoyNFsGqFSHqqiNsTw9mTeFMyxncZDBNkqw1c4RYBcPjjR695pVDKv7wpBAKJRTkz194z",
  "key4": "5WNkYY4RM9KvVK9h6WfjTRYeoqGBGvjLN78ZT13XJEe4c2HMfYnGd1qfnUTL4v354UCwm5wv6upyDT2n64oQXXYf",
  "key5": "4fhFFqb2x19nFC1mHUApbVefeQQXUMenFiTFwLHJwqNpWU1jU1FBbk4kc4urTuJLBdt7Ca4YdwgR89shxjmMH1Tn",
  "key6": "5wykbDGeVWihrctJbzQKK2SsmndShwti8THFJWJgZooLAot9pUvmB5747GuinTkbGvZE9KCNC7WYy3hHUvyPn2A1",
  "key7": "27CKwrfg6u4E7X3i4DFqjn1SPqcf7tx97STs4z6hEfzM9aGzGULGBP4QNzoVHY4zjoB99DyPJoetqBTtzcCk4SQZ",
  "key8": "ojgo4cgDTLpbF65STnSQE2yDjTvcMpehpA2SLqRVqur69yjTk8msY92iroU7qEdbQm5dhfV7xb9XAq3nkdYZoxW",
  "key9": "5YywQpCqLcZDe5F8xyucd3d176Z35Dr3fkMUDkCA2ogkhtfUwY6mxj9kJ3eiecEA2sMsCS173vp7uJoNCWq5fQD",
  "key10": "5sbhQJkq1Lc3dcQMHFwjz88rDqFa6qCrWawfd8f19h6uT4PhJFpB5swJCb6vgu1K2Ti3zGh1fmN3QbPauVDP86N",
  "key11": "5JAujvtrC7c5ZQpb99dkvY42S277puEFQM6zKp6feBNZ2upAXMt2MMbpjQk9NA71YYeSaE9JbeSQ7XsLmyCpwfwR",
  "key12": "2TBg3yMitU3asm8xFtkjzodiweYU6YtEHn15m2AS2CGAoUVt3ZuksYJoJ5ZGaDA5sWesex4Fs92ieEqGChXowotS",
  "key13": "3jJRamoaEMyaCFeqYWBKKAgcSUbuBQ7e1NeyTfsqNRaVehpv2ktFkhyCuFXhzToWv9vK71zXVBE86v2sxHWTVZaq",
  "key14": "UEac3aYpvnHgjEvJMHeUQSHRziik668VLngqQLTWLWcWiyBZid3EPYnKJLe1Dkti3QdH9wQ1zhQMHMF4iXK2CAv",
  "key15": "4KtCAynNACmx4nNr5B3Smys1HrNTVL3yCp2QXbqx6LBVrnKE7a2EvAMJbMMEdNPsnpgkRwEaH2Mw9MT4CUZtXEPQ",
  "key16": "qifv1AL1FpSFZUxASYeUrugjJZWXraHddnQf1J26ikgJwBcZvA6uXJizZJELAaRT8CNkzFEqNKrAGhgwpN3B9rz",
  "key17": "4P7BCytggtu1184gTtat3aZa3Eq9i3HVKWc2g3RPWsmuHaFHzZvqbr9us6QPXiw5HAUx6qSwxvyYd7WjAu4ezuoV",
  "key18": "Ukdu6eFQ6heCh9GdAthsTZtfYcZvrgjNyt7o5CWijXsKyE3sDo1ignzScgxNhB8ZH989V98mKQW76R6jvT4jmdo",
  "key19": "2Y7hCUfbkiF997K9YGXtqTbTF511K4PLb6PaZzFTqBvvrvVUoc3zRXQhnEt8pKrwTYSdpaqvXe2Znz23qAPTR7jM",
  "key20": "2tVVgUSpAvWL3FnAw1hMv7bRDQ3btuw99ibG6KdWh1mcdkwRmXTmF2wgBiTK8F1yvDv3kyYjHjUbMNL8YD752Emg",
  "key21": "3K2MjAr9mLQeykbpvNpagGRj86GzbB75DWHTSC6kxkvSHTsEAeU6uLhWeZRC5ohN8dQ7Gdr6DD3LHvCDcYYC9qnD",
  "key22": "4VxUuqJFFyHq1K18W73FBw2JuQFReBZZMvmyPQBL8Bf973pKg1qx3hBrzJZPh6mLPafoQduvD83xy1yPdJSGnoiu",
  "key23": "4dy9kTFKGgbmdLrp7PTPx8NMHTnG9EwnWAMdGenqGGn6mprCYaPUTn57Jbee8sPKdKTAwX5GCoAiMJsKvUmLRkqs",
  "key24": "3Nmkhtxb2auRe67Zo81RiGKdkEMnQy5FFNdBZs5XVH3y5mCT8Pak5qND5dBGEGYEhtB3EUZfQ6BLVXm3jXY4brRK",
  "key25": "ufwQxi9CNe9mbywCSnRhArY5i6KF6cbHftWJxc1YbeK4yzqWzDpspSML8Y6UgSAB1RKDJQNiGWHpAbhZyxnr2P4",
  "key26": "3XmXrJH3FfXjsUDy3MRbXLSVdyVa2ASTQTfhqyxoJMvysqe6SXh5U5f8FEJYkkSAgj6iUHrTTymndPo9bFEwXZaK",
  "key27": "gBpEWdocVmRNPR7mxooCB3CSbx2apQdmVktZQwMxKrn1avqrhWkkVKcLYpg877N6QWDQsyHztCPWQn9jznUD2YF",
  "key28": "YR6zMYe4LLHycsAmDJvuwELGrNrLmYF6jtDNWyjbZyKuUPci4WdEtSAgn4rNAvh6yeijV8yp3DE5wKMnRFBpcMm",
  "key29": "wUQr2YgXcRr19x4RsyTWNe1ysUEwwVuctxBTwhVGAyK5gQd5hcKr8AdXD3gFYFjZt85zbN5jZw7mgfqtPFcDq44",
  "key30": "5khL4afqthxHmNBRLieakDYM1dqfq47p4MiC7kjJcaKk8taxGucjf71qDTVLeXkxcneQwek3a32rsF9pZJXBBXQt",
  "key31": "4dCSGobRX2f9TkmquKHy56mtdPjWWanoixNNPpR8CmztdJqXBJY4za3ziuXw5utbk7HtxigKNGP7cn3RCRp16Xh2",
  "key32": "ueSAczVBixwMcZb5vfBhpiUrD91vQ57w3LnAhwoMkHvfo8F37BvPjjRV1nahiFnTCEfr2PH5CUCsDV3SvXotGyg",
  "key33": "65qPGJhqxMu3FUMvRroYWq5f23SHnYgsh3udrHjaPmkH69CZdhagrSbGTDho88LXBm9tUb8aQC6XUxCBHkqj5ZFJ",
  "key34": "4N35HUBYoETXJEssMcDV15xYpzm5nVZA94fLhp8vq8cBMc6iCRQcdtzDBBAgKBJEfQn2621TsFDyrNsMQdXjY8et",
  "key35": "5aBt7hGkcVU9nJ6MHpv987AooWhWTvEBauGG4qUaJ8T8DqQgrWVjEqSozzfjoc7e8Upw2GbzjGkwUvMdBX247zwe",
  "key36": "5edzDxNw5JTdkdRK4aisWdqPDVKeoQYbaCYsYNUr48Vr9nbNDiaPiWziVgt6XbCjne8J4AykGFAAkQazPDnpYZfi",
  "key37": "3SyS8tydb1m6bAg9c7QcKxpZpNceAtNk6T4s2HVnKR9F3frNZkKctUAYdv768epXindpV2UC6fMSzNprZuggzUHd",
  "key38": "BJbzM7KqdnHedJ6Y4ADZswNHkkoaFBm9dzdkF4bPbHgjPhZyEeCgdsX91j4Z6RxmQbn1czzYjLGhsuDKEVwMuJD",
  "key39": "2GYyA7f3nRJFzgPJNuLwzuFpz4h2osUg6dRPiDGX9HkWdgPrTtefa3hZk7wMe6dnMTEuehPKvLwHNBAhujHwqkxC",
  "key40": "36KtvK3cbPMRiVbP8P27iR9RrJq33jD9Br95qTKMxD5UjFYuyeG5P8XVxY1mCZZctCSsacCuJvuzDTCw5HpLsdtH"
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
