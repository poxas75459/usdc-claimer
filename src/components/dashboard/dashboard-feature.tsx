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
    "3vuesUYMKZxvfk1dZkwDtPHi1n61i2qm9f9dzunq2Y7BVHTb6Ldu5E66u4D4JNhyJG7trGgYQuiXcn26eFMZs2Jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfWBMRsxScD9kzbCBQgeg8dpy4mLNubgxYek2xK4TqKquXPxNQfwXv2zx5CiJ9CDoQxXw4Z2nkMLdpPdcWLqLpM",
  "key1": "3Bf4DXBPFteqzpnpFTS7q4QhPXLexFdfo7A7SgSDszGm9RXuLpp8oZRoXKYzcKZ3hfLj1UAjY9osDcHQzqJWjjFF",
  "key2": "5Anuc4fz2MvaP8zwwc2GfrZmzMfaY8qmFrcSFAfFFQfMNq2ShyJwdSyJnsELLVoJs2MtVACW72J4wzDDiQkp2ZfU",
  "key3": "2x3dLXp9qE6NVsTo84B5aqKzZmyhMN7bxR63WsG2RhqZLiuSdYgauHpVunm5LmgarC9CZfgZwfaqLjwy7bcEvTe6",
  "key4": "pf5P9isDneaqQCRk88GeaiNPpswG1TGu22uCSPoEQto2dYMNxpKSP2ZKQNYJwEFgxLS4FJSuyz4u3SzdSZ6CaKp",
  "key5": "4ZB4U22QvXpUxmnYz4orMqroxMnyRRyquhQK78dLAtKodPhTVctd5xXxAwXzYoLy6ZAqkX7qBjgLnwhYCqQLuDPp",
  "key6": "5V8k6gKt26eNC3YmPbgKNukeuCvWjk1VFsXCoQRmMfYdj6XNWtwouTw398ix2DKnU8XbwqKdS9hAeMuwR7wt5hca",
  "key7": "5kb3i7VqMid3MwcQUqkzmKBdvdh9RM5gqLuLRQoXFh1LsY2tKFNe8s3H5ezQbyszshjPHFx44yk2tvS2NF3FqGX4",
  "key8": "3R5vvbAmweaptcC1zMByH51HggwYuSv29yWHjFgEssFSwefxNpK3AtQYLtfZ2rD5Shh2uPkhRTKPutAEKUgi9PXB",
  "key9": "2ZMKA6swDa4bndvX7Vb8m82MomqEUPZRBCDt3ygW9DrcxMSGWTcqTBUNR5M3UNj8DCUMX9ZuSCEShvjCafun33Ui",
  "key10": "5mTrkRB92EurUAfFd9Jn4ERaAengWQ6xvGLDYRmHkNnx1nUkDaXRS9isaEXWENbcg6giUjgC1nTpPpy1afttGUCr",
  "key11": "3UXUapsaypqaLFTv2Wht6Y6vxxmPdwFvuu3jG3GJTMTfmEP5Gi7btdVSFB51MfacJvQkfkoCx4dp1ZRPsujzKzyc",
  "key12": "2r1vqu5dD6cZdiMZ2W9xrWXA8GTi98j6CZAvb1nE7PfmKhgbXbaUmqi7FnK3XrFNgUvesjTiPoMNAuPeipiqrHRF",
  "key13": "U9dS8iTEPezjWf96RdQNXQN4WakEhav956w63ven18AyzGyWdGhPCvTsomDZW3i9aLAi28Gz1ixq4xkpx8mLpgv",
  "key14": "5CKRvBtodSQPKr4socobUppuCbjqzJNdBHgHJjmQd2CfUztnqaPMDFzPaGtjarisbDt1tockpfmNE2ZAqbb2YDu5",
  "key15": "5vBU6t6bhzHiB4Wy9GL1VqRLoEpHwXMwcww1MGwZzzJLhiMxmU3642q7beL1DxwktysuJMn9Cw4oNk3Nga3MdqwQ",
  "key16": "3qVkV8muvAe3LkGUuweseG2xoKXAKz1RjsDTB2KjinJrnu4g1X8eB9fNkV7qPrXp58nD6xZdFka74moZmTUz9vRX",
  "key17": "G5SwhQszVnHWAcNsaucdn939jtXaqCGMVQyRuUj19hWiExouLv5NH5Phy4L4m1zHYL2BmHgKqo4RPnY8JX152EU",
  "key18": "3JAFimP8wPY5eQUSPgC7p7RhuSjTBfW52ug4KffmY8SBXyuTAKuyHMvEpZqKQieRU311PnA2L5wRErrJenUmt5fm",
  "key19": "4p4fi39qZLCcwAD5bF9f8C1dGsgomBx95wLPPTTr5aoG8HZqMikJv5qMEG3M7M9NSsrSZRABzAH77tZaD8PEiV2u",
  "key20": "SfC66rZAjKWThGp94XYRJoSb24aahYMavZwF6RRwt12728JudG95LyHwKivpRPnYEauTzAZvgdCwSNaFaE844n5",
  "key21": "4JzJDqvgk7fBYWfdqWgnZhYqBRwmfLxKKuPGA9fBpaSzh2HwLPKrcfhdRGW6j8w5FvGmE1k8vwgovpDTnEQ5Z3Rz",
  "key22": "4ktGhWGMXTrc2AZMe2kZAdLX7kmWDWW8xxvT7wFtsumyiMRgYB3ghyR5Ppsea5Z3zj4sc6eotvmvZcpRNycZFgne",
  "key23": "586N81ju9ajW6SBNvRv8RpbSoDkKh2tXoVYnyGJysK5XGd4ACdQPbeJdybXbeLvD6G1r5MsAcZceuraZ3opUxJcb",
  "key24": "2WR1CGpo9rqK41XXtmrwr7xKteDapAikCdNmMCZuQLQc1nTKGMbzR5znXVP67oqjpSXhmK1EEvcmFxUB8ZtMcFR5",
  "key25": "5M3C6bfF5pUKKMzi6bBT4Vh9QTYM5P1nHDoqQr9a98EJtDYquy4uB1LnAeQ9rxe9D5BNyRrNqsGEPM9tAJPYKh9X",
  "key26": "QbkJfwV15LPyTcCqTZMAU4uQpo6XBGUCBaZTp5khPpPbnaeu2v5bkswr4M154Gr4T47jM9muoBVMNkuL9an94Fk",
  "key27": "3KCaPSxSd4pty3B2Z26yCjYqmcnJjL7NkR6XA5pAMA5jVcEiEJADwH7Y8VbXCkt7aVdLHnaYGnWBfvEcMEu1tE25",
  "key28": "2fQnRZvejdytBTEAqTeyV2dQSULHJyn7iC1gEH2ijmra3FXB5ehv472CiSjesAxnERUpPF6AVyhJu3LUfZHBTqfN",
  "key29": "2iyKHy8yJ55fTZ96pE1cT8ecR7hui4WsvirXNzxjTFULmrdRdbdoVXTw1TZvZcEko8U6hHewQhRasmygG1RHfonZ",
  "key30": "4BuGsf8QGtyZ5x2hmguKowZ9yn6edwVEeuwdTffZQ93Ft2JzQLTCQ4YjGh6YjPj32p6osYZqRxEXFdkt7EcABMD1",
  "key31": "3ZFVztHAxfWcf1p4fhkL8GTS6xfok4J9dLF63egWzdLKN4Q383Gj7FALuH65rELMUvoQpWrqrWjGYLCWjM88DLF1",
  "key32": "5SZh7AXM2rv8dH7xxVnbgd7HsY6mAmkoZn8mVgXsTkyfSQjvjeJNxeVnNPQPBWntS5Nrx1nvxXg6xZaazbMcRDiB",
  "key33": "6aZRox3mFKRj1Ew2y7PfDDWsBUE2rSTH7BUMsdut3HAiN8DqvzD7BWyKAsxtvuWSq2R8Qk6suneowmsBEatjEAQ",
  "key34": "2DSLFGmDSdWa31y5JVFN7c2W56EdbRAZHBMUuvaHr7PA3wV8kPFbod7HgP15CLpKpKkB3q9B3824PTSSRH4B1i9L",
  "key35": "3XFA6ErYpZUyTFQ4Po5Ao4duzqgQd5tZWhws2b2V18hL36x58wDsDZTiif6W1ZHRk2jzLpmS9jvCJ3GztfMAYuuS",
  "key36": "2hWPbXGoBUMfQ3QNGwf41SuCYaz64561pa4c4WNPMTZSB41Q1tR2tSqseFFnVVmSUdFpJ6hs2mEHuVoecqWXXqeT",
  "key37": "5vQ4Ug4VQpkKygecjt1ifRVuN6P3NBbKTqT4cB8Z2QmiWuEzdZt2KUQEKPAyr3MobFAs1v8DbrzBGGV1gzir3sSz",
  "key38": "5XnQDEZnkAa8W5Ko22DDZCgcQdfjiiJEcjr22geqLczftZZotMjv1oRv59o8jTbY7pAVbZBRJsiNKRm9myZhik8r",
  "key39": "5T5MqknSJwbvC2qhKpAfsC2gs1Sxcao2EA73n55oYtkYc7phF4RaeC5A3eRgxA9pDang4P8WgvEgu8XnKGXGL5tH"
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
