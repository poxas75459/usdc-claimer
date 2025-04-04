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
    "4VNUDnTL4z16oKMvDdxTePEXatR6hokCh1DHSbGCLLPTG3rH3LZsD7Q17maSZxrUaHhpWdaL1gU84LRP9VerRQJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaGemYjMwdR4eT6tbKyhYSUAs1WRa39SicnFC3st8ScLBPoVpRKUN7f7TSs2KdzTXy5v3PUSE7iUWYuqbxXaMKz",
  "key1": "wCRj6toJWfQnsdVC7RwDqgeYHJsYirwHRxcaxum8HXfdXRQyAktVdMU56KiMioHjN936q3n9MmmGZpp52LHYWKo",
  "key2": "3yZJyfwEGypXYo3z8PTgbumswF2NdZgTwLvBjxVn6h2sGDhJCfuB1Fj5vE3vzPcebx9Asjqo1mR5KJxdpDkhuPJL",
  "key3": "4CFUjY95p6p722VEXMWeFn5ys1DhBRojUCv14sd1ZRJdUKMHhXTxVJQ1D7W9KqmdJB4BG6mNzQuQuHCU92rdhFUU",
  "key4": "2RQ7JbPhgk5xVe1kvtKXDeFuNqBdUt7Rj4AD3Rcz4nsdoDLh2nRHBjHvAhxKvnFzrNjDMLd7ca2gyomK9KYbJZFm",
  "key5": "CJVsRTdGCWUbskMJqLYU7EfR2x1cuLRXXrKoPDMdkhqj51aPj12QCpzBqYePQWwwY1DC3uPAYXkf9RgWdnqSjdX",
  "key6": "54nv2evWZFM3PjCesP8cXkti13HLdst5NBEMUjVHsCWMqXXb4yk3Lc23MmF3b96yY256zefdrhBKmdUCXgJBF7NT",
  "key7": "3f173bwECLeWAZRWic2yKAbfZTWTcXckV4AESacRDqr4mvADocBKyV35yX53zuNU85u3rb46B3a61896BqPp4ciQ",
  "key8": "5K5V3nHkPDwDQ57oiNXCnY9NbVT8TRxarJgvjzgQp51fU1NgRU1DXgoBQjDehza1S7722cvac8gyHw4mz6PbNdBk",
  "key9": "3dR9isKzD3NanmXXXWPDe7hEVXp2wNLpqjjxFd9UqNRtrnytrZF5fm15TW3u5K2cS8J2mJXwD6AKRdCoFEH3mYaJ",
  "key10": "GnZ6eKuiPBH95kFnZpABhDWat4XN8dTp3dqjB6eUkMUkuhxXGmybJPfG4GxunzkPQqjxQA4Top7JE7pwZEQsSni",
  "key11": "3BaJoKnVLaauEC3ymyTjssdAjQtTs32nzuHuMP8WSnUrXKB8J2MhGu83fACZ3tJKu2iCMDuoLskpsQz9aWic1AUj",
  "key12": "2tbCz7FNKxm93TqNq3KZPUbvP6fyRfAS1LCfxxSqoEAVVTeCcPHrN9Pm1mfiksmfaRPzZ5uTAPUuZ1YP5qycwg26",
  "key13": "v2eirTJ49NzHz5i6ozNoUQ7m7cfXhNjESvKFECnQTQuptPbb62CozHLfxgRQKvHn55FdQb9QN5U5J5oz222PBzf",
  "key14": "k27RYZNiDrMyw8LPTf7xtuz9UuY4kDcH9NWXr9gfzjiK8dnNTPhXykH4cftKntdxL8QRwTghh4v3pTYfWcEQ2va",
  "key15": "4YCANAsSMYEtBGPyKygfdSTfWnDXYYLNuvCUQNZqd6uRNPYYUFELkjQRfeaoQSsbu25uory9PKHJxe39WCbHGaVn",
  "key16": "4aAjV5pLPFWvzLWrMhV2bDuDNqtws34vXYUdRA1DtK7nhLp1TftViuMtGGgXhrs1iKKPYEkV2DGUqvX3MVpQaTnq",
  "key17": "33GnkNUTeiZaNtVD9aTUgKsgEqSSVDAxoGpMiKwcoeSNZmKa1umF3eYEcd4LtckoUL6BWi82a2pfUoxbEh97Ck2",
  "key18": "4QaoniBnthbC7RLh2NEEdeThZ3CTTsVAusgvsnVJSPZ77mhbsThRGABwcJxWQ3cPk5BrAanTtVas4T99wPbRWahf",
  "key19": "2mioE9dLPJnfYhMR25HwEsQchduESgmPtoS74hpVcMVbVc6sFYLwfDXB3FngbVrSodZBPGnHGzg2BLCyKxR3g42a",
  "key20": "4BLMM3dY1FZoFmCQ1dFUDz6cHWsMN9WksHhGkWkrFiHA6Sz5Uz5FHEQVWUpbuv7FxtW48UiUr6B5RjX6r4qxb7QR",
  "key21": "2bNGR73HajTuyuK2pgbUiZp9S4pLZe8RVHMc63kvbVg48RfEs96QaMyqyvjSSS9ibPSv2bDv7H6BXDV4RPv36sKo",
  "key22": "21PgSrQkDZd7eoQkmfKRmXfUjrhkiVPy9YVPeBxcSppNtCtpor7mC71BEhADAseNvcXFWhBgpRVvvp9NMkKnSq3V",
  "key23": "4E9HNGr7jZ7gn6HXLKQ9Yq1zCRciRZowrQMNWJZG1JkfB5cCRbGKNKcoNwbsqZFURTwu9NqrVHn42K9QjyrgAai2",
  "key24": "2HY278H7iLiRuZawNU6J6hk21sq8zWEUHxEkR35zhMyJWfArXp1s68688UtUhoKuxAjwhU2gPpzWWkNoYv8iCqu2",
  "key25": "3j6YKoGdgxxCpb7dnzjr9EGSxhAKwJeGPgGG28Lq3vvyD98W8LeKk7mEB2UAqWWiq75BUgKqZb2JyufGeeH7V3c6",
  "key26": "4MwTQxyX9NqGoYxf5pLQ3osU3J3vXguBHWvYmZhNSqDRNhEYCXf4wgSXQC7FTNcbXZPaXDkNxvqsiWfrbHyNnxZj",
  "key27": "4MuxbdTZ4mtXZEstX8XZmfFXY4p7u1Xfp8Awu14Vhg6XaSAeMVY6mTM2uW5CL3qoERZjVE8EkvDC1wSjDdNJ7UMk",
  "key28": "2Eh9QWbdsWdj2kiyhkQ1Y2LKwswy5KTEvR1jDySC6wBFxamohVDag5nQLFB8dKwHfD96qMZQJJuNKPPYg3tYrfaL",
  "key29": "54Y1zFW8q8vQFXYCTihFMZAVXJXpB4MtnzPLK5Gex4iiCu6t1x1kDPVd4QDFLLCpUoF4deBsJYy3KrnyJDFNr3JE",
  "key30": "5S5CuN51QAgUXEmsh8WvEtBnuBWiKQbDNur997jm2exuWQrNEMtrPxd4qF8yFwb4rEpddjTGUeMvcWrh8C4CGs8Q",
  "key31": "REoa9dC91sa2EqyZoSXnVKVH6moWJpwP3p65N25UZERZRkAe5G6LAq3xH9QAKR1wNa8QzD9zymz3LSaCqFpoopy",
  "key32": "4ojq2epUMmVLcJ8VHYCv3CdNedmhyz9ZPBoogttVmSzjs7pKcZwDg8xqdm5VZapD7vMnpptDSU61gXUuFwfqvsJF"
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
