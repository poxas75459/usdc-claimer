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
    "373FxeJEMg3NpZgRtFE2TBMvjoTqQFmKpZLQSa97HBiJaSfm5BpkBB6NHgV1q1Czmhyp294Veye8EPwJTt6R1xPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c8gksYE5FyKiQ2AH9Qr4RdESLh9XvLWCjZAWCKVorgzwxCBTPmMUiWcasyDeWidVzdXJ1U4JRhNFDfCZs9PAcJ8",
  "key1": "4go89UXS9BGhFEo8eWL6Gz16BtDg9FFSW3b2o6bbgQTC8oBPnk6FkV2DQaf98TgE4c2wbGHmc9nJbUPCkbnLB5d5",
  "key2": "5WaDjke2kUZ9RyJ3trfU84GtrgQzFowMmNfHjcdwp8HnVRaWLEA8W73HqiXyASan6gd41wivZYJJzUb8GR2SnM56",
  "key3": "EAykhgW1dswYJPhe1tsAVrQPT7Qm9vANsKHGbXUSEbveupxHmwHzA8Zqrz8MX5ZZvAq3RpzTqGeVuSRSX3Q3mr6",
  "key4": "2W7tdGsX8oZsHGtwh96o7dxprULkb8su3wSXPdocXbvu24VuwcpemuuRQoyQtLnH5tCeZkW4883mxfN6gqWnQ939",
  "key5": "4zq7RWK7eU3um9qcxfJZ1dVArtwP7UHVMDcjrnQSL48ZoU3csZbrwS6HE3ArMipqxE5qQ1ibFFwn9oesjLh2Qro4",
  "key6": "5RQZaRW3ZFebXo2JGsBgPEQurVy7DwopJf51JZvL1WyEo2v7u9hX5BiwrMykcgLUzsARRHVv1e3vyjCN8LNE7n4U",
  "key7": "3sEgfNm3mbHspQticBBnZ4ReMJL9zoDr8bkBz4ZKRrukKzRtRNCRxUHeQzKH8R3GMNfGSv4Koe7dMsW6DkEjrJrM",
  "key8": "5D5ZvbiGCcdeBrH1MwUk92GTJBQp771GdbLLZzrX7sEC2QwCFcomV8XgQkyh8m14pUaJTxRakhTDp1oexx9hMkJ5",
  "key9": "2ViyKq659y9T6XvS3RCvv2nDjwNwNdekFpjhbRz92UbXTgwzkg6JtEpehPqZd4Xk2dbTM1JCnPsrYmS8TMwYFjRH",
  "key10": "3Va7YeYAoXCLcgBRdKBCbKKGha34bMuKxmwAtpm2oLdudZVNWaguDnFeVCunqXLfDPTBD76UykfStzGVctha7UDL",
  "key11": "F3epxzCejjYjsBqs9Qky6TAgVMgCB6qaMxdeZWuNWTea3kPVJURoxawbaPk6nwn6cJusXUPzxBnHHvBo1nKSdbQ",
  "key12": "5tf2F2VyvfYojvqVUZGzdQymAVGFiTPBq6N2aKjb5LR5VWpLTRhps4fVUAXSz9FnpeAFg53p2E4y3sg2aNjTmFCq",
  "key13": "WXhqNP6rhvaA1WZofijoHHKVLm6wD3fNDTEpjJhrTnGby6sLVgfMKNw2i8NDWNcTFgy4oTvJWoSDx48S1mTHkrb",
  "key14": "36quScBT5m6NJqmd8ZF8bnGTzTEddkCB136mPewYjGP73jL3ZuShwryDS4NAu6LLj8aeNwZgS5b8uu4eAmxKN68c",
  "key15": "5J2sGSYnijAT9BUQvFnRUnmNjNgDR5FADWYYazYwKNmsrthfQYhi3WTSdJL76unSxaxbWeyj8KHYDB8VPDoisY63",
  "key16": "4WDbrfCUtbPtfTL6nwm8VdmLs1wqcgQMRdgGMwewESK3p1pDcukgYkdiDfvYCXaadagJhUwQKmUEwMc3N91pMEiE",
  "key17": "53XT5xYG1h4C25i7nBgSARY2L9sqBz4vuHgoCRpdS6Hvixvf8UHGmVz99UNc7rHPDfkz26dZRRKSHw38wHpU4BRv",
  "key18": "4ekSGF6jhjYqTbjTRGKVDw3AuHHD6hfnGXkDw4AFsRpaEBAfD5SwG9USUtahBKpwuDHsJvQ3AGJxmLks4hKvJAHK",
  "key19": "2KFVj7HSXQemaxQMZxAwUWocpPwDdR9KgCi3Nb6iDi7QrWSr4tbsL65joMtJVLDwZP84yN84Mkhj281zeudrzDWo",
  "key20": "2MbCNrDcx3B5qzFNj1wtnmunEDoaiTm9nUdmkQFtzaXFed7yg9zNCM9V6NfmoeKB6mDzzVj6TKWEgVrUXLfLfqPZ",
  "key21": "5UiPiGPwMKJJm9k41ze278QeSqgwLJ6R646pdbDxaUvSLdFyNMRpFytYmJSB6ZwgW5srtRxH23F8Jr8TBKpzUhbH",
  "key22": "3uFzhkvq32XD3Z9gAYMoVbgvquQyMFtAmEHjGdxGZZVDz7FiuywrquTtANhi8j3LCo6gPZsPuLpYovY1qUr1P6fV",
  "key23": "3iQwvWciEG8k3Ffmg9H7b3U4E3ubM91bpJQz1vzPG8Bb3PgV92MJADAgBwoGYTUrskDKAA7gzoGsbJ8VUPQfNvZF",
  "key24": "2FTjzjwWdHZnBJa9r7cwSPLiyaYUuZTB9ytUM289J6Lf63SrQA6oPLYZZACE2hPGbrJijTjCx3PEtofmouqZn6yJ",
  "key25": "56MFbsErUY6T4Zwhuf9CXWEta2wRyof8oLc1FcmUhRjfYeEFh8QF5Jix23PqVw1FrHSy5Zp2TGK87XTYswmSMcJy",
  "key26": "TKRTT6FYCzzHzmDPztWEaZBNHS5pZYWgwcb5vqZAbUK5vdsUauGpG4z32xC9UnBJp1iNpq3Es2dfH5StRHgY99y",
  "key27": "FMkq1o9amfSHxHHU18CzMWuMjuSart5NZvDdQeTwhHZQCED2bepUjzWhBtcRmDammXXhXFeZ4mZxuLjjQi3y1xz",
  "key28": "3E7zH62c9HDLkvcdvF4m9AY5SYcF14eLDaWeFsQGwEHoQ8nc8bUPWQf1JEZf9Y3bXqVTHNkS5TLWRpUqj2wDTpHk",
  "key29": "65Jcr3TrqtQ9z3Q7Pd786a9WCDPr52VU7EqnzdB7otg6opZ76GsoP18Dr74qhjuZY3ZUSUV67ZbRMYy95JMT31uA",
  "key30": "AUvULrEDyuRZLNVQ7C9EkNDbtsqmwMS1zTdsEDK2tgcXkao8SBWfNaUferQ4DhqhsGwMzTQq5QprVJg9x6WyVZs",
  "key31": "5NwcbQXXEfqpsLZQF8xk2nTcnsTzjiJxAh96Fr4zG6vvC16gPbLyC2ePhZmyS4Xs87WHPTt3jWN2K6fsFne27MAw",
  "key32": "5XnPrkybaRrWVj8cPgKpMSFsZ8KwpPn58keZ4BJyGEK8W6MVromAiz2Hr5o5DZmK55MZB1nayd7w2s2PNwJ11Xk8",
  "key33": "3k2ydewP4RdWCaEYANaaWoN8vpUQVbLetsX7CrygN6EdxYVRDvaV5bXpanez2KuWM3cLEUppoTgBqPvQCdD3GdTd",
  "key34": "48UbyYCawAjPAPxiTVvShQabeLeytUYTqCoMPN79cTUPwmccy2HQZRzfuxp5h96F6hS4yL9ojFoir7WCQcdFDBbk",
  "key35": "JN2H83GDy6rsrTFRgLcYMAwbKAkB5iqfbp2ZEKXdgZGnNwA5QSpcKkxrXpLap8pnbW5ypiHWwGPMd77us4QzRXX",
  "key36": "4AJgjWGd48Pjtdo5jRazDMcyXs7XrNUqR3D9hdgScAzxxB8ArjHUSto2jqXg578w2fCYP9L7weZdjBmD8GeswS25",
  "key37": "Mp2sxmrDtbAVNqiCYM7JCxKyKbeXRFWaa28xQeuLzV8MFGYC9s12tk9wsscpN2wqiJA5pwas5m6T1US5SwJRZzL",
  "key38": "37FHxh9AtwxnLPLax4MiuDusFLmcFX4Z2mJLgY5HZvwL4fraBCHzno5k3fuodWtypJzQr9ku96hD28CSrdvBxMg8",
  "key39": "4NGoVx1T41TttZfGT4eaSsmkGGtYk7dBBqq2jzqQSNa7yi2sovxhpPwQDMJZ5RYB5qRN3quPvwz4v94FzYCbMayF",
  "key40": "LGcGxMEZiNYjfGasS3rQnUtiEqcq7GrBYpQTA3Dj8dJspEuER5gXaAhbbRDJh5G2Rmi9B7X3DQYa5sgMCWgEbmZ",
  "key41": "4Wh6tBWXV2iPKtq7fdvXSzLUbLb5qTmv1S9ooMwmWUSAwLz2XnRPiPPioA8Yejjwpkrrzsj9TMycHqRztxhE6q4B",
  "key42": "63HfHkRZ8MnSDqaFh2B6MJUv6A21UyRKjR95mMhsz9JJXcdK9AVbMXecAKusBt9Jomt9Cn4v21Fx3T6UKmQQeq1X"
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
