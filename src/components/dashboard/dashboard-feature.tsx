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
    "22VetnwRSxJGCUPTRK4cDcHBQhURvfEEREzf7tzvsU9gyFJUNGM3UNHfZs6Lfi6f4UE7tDYGQj2VgTfvKkastCq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yreZjLiEUJoFSKCF5Y3cghaWn9ZkAh8rg1kwx43RWRuFxjmUHzTzRo348uk1zMxTgfaZfc6v9aogqBpXZCyMgeY",
  "key1": "3AwzHS1LiYZpmVdDN5aoiQTsoMjdK9uvqsKfYp5VzvBpQvNhhmLg3ZFmaPLGNUKCZMNMzTpSibdctb85eQSnSNVY",
  "key2": "K22HEeKr9XGWiaUzw6qFzXZX4y22Qet5J1ToTpRxM9oNxYSHBfqXa1ZVepXr9AAecgBURxRUB4Zq1P4TnhqMMkk",
  "key3": "2CcbU5pyfcbf4VehpGbrSbJDC6e8XbWAZbhqn6dx3P6vYqENwjrK9HHpAnYNH79jqPiTc6uNgynXjvyYk7mbXF7g",
  "key4": "5nz9Y3vYFTEjryWq3sxdRxHkvd5jLpdfRVs2rve3pqKRDdwAJRVLfvC13ANfx9sHspzGQpfLCpA8Nnvb1xifcwHq",
  "key5": "5iUqgoYD51ThECmnzeDpVg6dmh3BYrhdWbuBpEocv4DQ3LGRyPxsYWQv4aQVGVHTpZf2X3T1b1KLmEhUSAFFT5Li",
  "key6": "4cdpEUdR5h9xyWPFGDbmLuDkkGE2LS17bEbsyhbB9MFZfWj26YzqUHbGU56M3yyM9HddciHSnv61goHP4FU57vHx",
  "key7": "4uRehtzc49s4KR4uxXSx64DBnjvYCuM74rmu1uFW63qssVZ7AbsawRQEGgn4ofHy5t338EBsedKDmFCvq1cRv1Ti",
  "key8": "2atL6mS4Hgymapu7ESx9DGdCEy7xPVoMFLSyRxt89CPb7sJKWJ8FytBmrzEasRqznYCTMB1hsuNMBvVaYw6Xyrj1",
  "key9": "19FnwF89RuLPgeLBqidmmVAGMUJkMbikDjPFjEkX5ma3drMs8hH1VXihy3xdoQTMqQ79mjV7yZMisKHmUJ16qMY",
  "key10": "3XPxb6eGHvbU7SAg1rxtuGpZpmxG9jCV9umC9zE9mXbMPcVnLNfVjpKxEpUSz5YDdcQmicctp8bmTxr9FpoGXPFG",
  "key11": "75nxafqtkoVEmZTy6TpRNAWbfHcWN4Hmu2GBAqBNKPJdceTMV7GgnVKuEMspQL2CTRqBN9xW4uVfinKCZytY95E",
  "key12": "uLzqqamuM2JDkReAuGaFPjeffhFhmYrP5cHS2zfKS1oCuaycdq27cQC1s8DKZZRyy8pJYAW5fsUjX1XHiUVfdSy",
  "key13": "3s6yQQEqwr87pBhDshfEZcx7awMsab5L79G1XTdsKzjxVexxz7tgGJ3yctR8vYj9HBox2VoW8BZpZUvQdvGgEmAD",
  "key14": "3q4jJe5gbrzPsgxXtHb77c2dTWhegQvAbWBTzETFS8wKHLvVf1UFvRLSLLhX5P4GvyvE9j8DvsMx7ZmZ54u6XcZc",
  "key15": "3He5XSw9RCxnRFmoanHs333YWjWsEcuzZkxZZ2b6MtAWhQrEBRQPqLZMxnQtjKEaehFi3yD3B1RtowDzjEM7vA5b",
  "key16": "2Jkwqd1BfPu4vr4f82smLbSUez9gFHaRGR6zL5ZJ2sTZKxR5ZgYPJGaAvfFrvxL4DPqxP8ZH47xrbkPeJ7mpNQm3",
  "key17": "3gNsQdGjhDzPdtQZgXuyfUz3cvf7SyAmA1hi6eLQ7tjXdQMZwhXDmWoYzcBxSFHdQuMdaELvHhMyfyQmAMZTXLFL",
  "key18": "5Uykq3S1w9GJhJKy7uGpV59ysHfwronnnvbt6hL1TADMFJZFF7DE6MKmeQyCWtBRcTvWYs6m7S8ppRtJgpsw2tW",
  "key19": "62GwwEpvBBBVwtS2JimLSyKk6wqKpWyyrV8dmmiEeAsfEUkEeAEVUtVSQEwRqDtLwaY8FrqV5rqJsaHhH2Pk9mf5",
  "key20": "2uctsyyDzNGCS4FEeEYMRKh6Q8FsanPqvYFMyPojXDKChL6fSirqh35FdmZJ6XEEe6YMy56Tnth41hkcpFHCVCip",
  "key21": "5DSMCChaghoWxZzh1qNFEQPYH96WMhxXR5WozkKw8c2wNJcZjnd24EhHYkAcpTKG8f5TFP2zKPt3gLFfQn1v5ndo",
  "key22": "CeFAkXfsgx4w6gakNFDd5YWZUqpRxTVUeLEQATPP387oEzMnbcoEmCERx2mDjpVgiZw21GfSrUZqW21sbw8ACdB",
  "key23": "5DdDPsnDH83QirbFZAnBjzXTYAgZiGMVVphLR7J6THZbNGgFC2AHdoiAKmLSaDjqc8gPcBjdDUQP8KBBU7ihS5gh",
  "key24": "5utmabXt8Es6A6K1TQE91Z8qgHry2KRSBtP5M33kb7dXrDE4LebKH3ZKCKKozAQg3vZfEMoUtVj5JFCDvxWbE3bT",
  "key25": "4Rxvg3ZpmyzhY6deikqJYBNXCDUT8DV4DgTvk8kvhVHR8Cuk8daTLy8XPPzmufGqSWz7PxhBdzfP9wj5t57zm6Dj",
  "key26": "37ojtbAqjQp8KR86C8esutpKqXqXjzkiWMCw9qCz8ZGR39QCZU9a9whjmEdtiX1DDfYnmKYoMChBuTDBzPLJazfa",
  "key27": "4ELd44oeqwFTqyBiJBg6u4C4CEVpStt2bMCSob6omGpAM4isCw2VWKmd1D4mSkoWSuyenmG2FoiXCB7gBEJrGN8E",
  "key28": "3kYV9eKQsJtgCMUjbjjJZe6cHgfSPbU6Gp5ZuoULdaRRhLEfmNSNby5t3rfDBVg4e7aDo5gyNGfkHm2vfZvQxh5P",
  "key29": "4igJAUTWfd42qUGmeQ4AHoB7xREbW4Kb4MmFMFy9wTK38UDVRQErmLdovzeQd4gigaTmJLMwiEhFYtHuFRhqcqXi",
  "key30": "57HoZmaUuuro4nng8W4kQCoaUycepspBpYpfSUdg9jDyPazTCBMz7mEeir9vttjyzJ6QjwGuFozCH4QEwbAudd4s",
  "key31": "2LBiWBdK3P9SpqkHp9qVcvR1bFqq7ATENgFo6hAbnM76HMMEzujw1ias7hu2sbGUa3L7w2m6guKdNoRSeXabaBSV",
  "key32": "67iLU1Zc6txhLBa88gt3YgBotTMux6KRVsXd9mHupHWzs2VBJCMBUjjgYgh9DkTWxCidcZhM7g3joK9wkd5Q5GSQ",
  "key33": "3NqarvmKZXq5WnzvBpBHEX1W7sotrzmHKYyqu2KRkSjZpdmi9eQG3uckGhngERPgDZH1kgTKP2FdRxkKupWWJ8wD",
  "key34": "3F18c7evWnEQvaYN191Xa2uTpo5DFNiE5MARWJ2zQ35tazVJbvHKtjWYvDbtuffuEhAREyo1rKVtCoF55Krvd94v",
  "key35": "4xNbsJbex7YhkBsupgdtmchXzFzLivupzM4hsgC5w6kEQs3qz5nwJbdzzisFkk5mwVnSBxNRswaC9YAVQtAz1mwf",
  "key36": "4BWNAhNsoJ2oeTYDybQ2HVKsYt65vRmxbQYyB1dduMHo5GMwLacdy5uWTP4TxpnKA5SHrRbCck42mJZcNpQL5feA",
  "key37": "4uRZhXGjPuQdntkMzGxokBjZFdbnRt331mxLXDgk43gi5WG2mK1f18QtWereQ3Gp8Y4bjyQQE9AqHznRMx6REVbG",
  "key38": "2A1fVrCDA9nPcayZt9SdHg79GniRMoTf84AEoUFgcX5hHJ9h2nqCwiWbtuSGh2QNDTQt79DbJT7StbYQps3UJfme",
  "key39": "emYHPDzrAztNVM9WPvZGk8J6EbPWsomSYDVJsmb6PRiucFHDKepNjct6U38Z73cjSuR5hWkHAjwTwfAawnVBuvT",
  "key40": "4BmDapf2GURMgg8LWoKehT3eLAPVnKNYskz7ZjqBrbY9vSTYBpL6isg3GxnP7yDgPm4HxCiZJh72ubcWdn7jZbqd"
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
