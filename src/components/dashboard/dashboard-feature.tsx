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
    "2pHdGKLbaggMPQdgxZpPUuDyxXjqy2rE1iBvSKGiCpMyF5e5qeupAfFGHWU3mEaohqxmno5C8nbCooV1in2eNx8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9YABHrdQbf19umzxjBKMm8RoW5GHxPjxew4zThv9xsTzEPy7ogfwsmMT5QFh8v9SkKPfzvPBx7Bh2JFPD2B6Xh",
  "key1": "4tEwNzBdYaWodgAvbAqSJYiwUXAkVeTphgmXg9qt9Fan6JnCjKkk6qhq3hGQkNcuxhnjuPJihvoMcQv45UUkdGWE",
  "key2": "4R8RsZ8iJPyFigtBu8rbnnMy9xM3i3jPQpqdKdt8Swx4D1fDssAyqcTs6PozQma69UpvU3hoHJfyh66WhitEzEmd",
  "key3": "25fzadpKRSEEju7KJpdQNC1tqVdP2aKhMbJNSc7QeZptfjyVkbQdoEh8t3BCACkxnJepaJB446b1Hv6cXHsaCjD2",
  "key4": "4sJb294B4TJWTmRoxLnAq4YBet6dt3ecVP9oj71dgA3HRkUKc6p5ZArSMVGvoL8PSB6mGZhwF1USipBqVCqdhaac",
  "key5": "4fKeu9LprQFQDxAPPikiSKJv7Cj1uT4Vm7cazQEXFoCUDvPWkKnvZJkpQ7997gBMfT9vimTaWF6u3i6XGDyhtoba",
  "key6": "535YR7tWmCwyRPvxhpJdGcbaNksgdpb9P1yMPi36xh57c5m9zVdkco1rSKxWfpiFukjh7KPM9soA1Sn3vfwPtwtD",
  "key7": "vbKoNpwgffpDoyi5mQm9BHENWiVVAoFh71Jr9tardmQ2ikR6hMtdxJWYLVxXxEYpCGYYidSve9M6m6wePj3Eq4M",
  "key8": "4MJpxnuKTJ5YuVqV6qCb4phKDPSYexVHsfzDKsQismboFLrkmcnAymsJh2hQ4jXMSWz2jFkS8DhsnNTH2Quaoq1j",
  "key9": "3XV2LuvrejQyqgSoTSscdy35ZKxtRCYX56nF9mjHY9qLMxBhbJ5EZR6N9HDG1VhWU7EwGkqh6uiryrtqxVj92PaE",
  "key10": "3TRdziv5XVeKbcWzFzF81dBRjaqFm6xsq2QEfwRnTVEMauZm6y3pSbqZAnyLwYSGs4yKAUhsFRJjiMR9De247aqe",
  "key11": "2mSvrzWUfFkexpbc16tVZeGwLi5zCtu3kz3mWLwQsznUK9k79EzQcQgzSVLRYGDhcCbbLk4btDunpREBcLg9GBjk",
  "key12": "3k1SuHvFuh7cxmtJLGGVe2tyrU5kYftWfNnkE2xNm6RV5RReZdSkKqZbXBRoGbxmD6b9MDHh2VaMhAJJnemzumic",
  "key13": "VA7UZapA4LPADpAPsEiMwSf1M9GsHXALiiyx1wRFRGVo8HSXDDS9hEeHf58rxbGsk6iHYbYVcCv6BqQJ7A3uJQz",
  "key14": "2J5JvdyzXfK8YSaGj4ZzXQTgPFTLfsp84FouorSQUEGHUANjQCoTXt71NMGyVSSo14AfQo18vZPjCpN7J7Ld7Uoc",
  "key15": "5GJkcCxinGjYtZmyyTjsP4XubDUqLLCQgwhVPN9fYNyKHsYzXptjeAMLJDUHbqWdB9ykfViefvqJwTUVaVBNpj17",
  "key16": "3VtHW29fCy5jTxL5nZ7g2YvSAz2UtJ9dePjDHC6ytbfUTJvtnWaS3KgusPeJh81V8AM66STk8StYK8UFTd4mvo9F",
  "key17": "wJRcSdGMQrdEYRx15ZxmJFGWMamJbtpqjfb9QrXCVnoWfN6CvPr6aCY9pwRavUzYwpLKzQ7CTiuV5FznUL1A9ST",
  "key18": "2weoFDXTYwZJ141xZ5h8BkTS6GzLvyi6qewdRvTFbRFkLy5j5NJvrdiBYqpUNYEGYGMAjEmdwM9iGmfi469s7oda",
  "key19": "fCAaDk1bkoqAtFEp2rVCqGMzMAwLE5so3PiExVKJ5nDe9rmsGRmG6Zq4uDQCe4vzf5QehJ9UHankoz3bYspwKJ6",
  "key20": "4XPS7gjhVgz1CsBxipV3SW83MWYuNYAaf25VdMSjbqEp4KMh3CDTd89rMn1CsWpPdz8GH7XFtcLNS4itqfLCsM6i",
  "key21": "456VVjrkiY1kKoREDVPUkjHbha3eFtFXHZnpTc519zZtJfRVZVyKNjtLLBunKFudp5xZSaCC26e6M3UER9UTXWLg",
  "key22": "34ZJjQxGp7sy7BaHE4wN9K57EddgTPMDBdqmJj7hZtxs6Uu2a2bvbK2JkHgiqRygFvJV4q63kWcxcsAPnx8HD3DF",
  "key23": "4EESTku4QeBcmMiTmjjigcoTPwE8fEQibRr1ihEwJkgLjGo4kCbSaEFrUwjXiTc5awCemFgDf4J5cD5G4MVurwjH",
  "key24": "44gxyQ3cmd7APg2YKiPrbUt49FzVBFHhwDfJH5abXEbnVPY5tvnTMy7G5sJ8G75EXEZLgNbafTfnagkt2oP7rFXR",
  "key25": "4GXcB87LdccGc9LMQeYqWAW1z9WAdhwvBqzGjMLB1cwf6KSSXxuMMuSfcofeeKYrp4q1FL3XAEc7FP4377tPYANh",
  "key26": "q1X3WnkcxuaTHWet7nzRtFxxgN4aSTXUEAz1f8K2dauor4AVXSN5Sh4QTYd88XHLeXZKL8i5nEGHfHouRjh37Ga",
  "key27": "3gp8AZZwHea4nj1JHpKE5VEWAJiRQoDqyW5Lb6Hakc6dmcc5ooKfUqJo3wLwmMdWmSCgj6C7q8K686u62iFwjbm4",
  "key28": "5qHS9PfT4374CvxC1iDPZf2Lcmd8K5VbCiLPHqf9gM9fmLbFxZcKSW2bSXAfK3EcYUmVcCoxbVcRMmJHNzhp4d2J",
  "key29": "3o75tDscT8zN28H9sd3PiFF99ao7heoSLAGy5gMX9HRbUcga3b1Mru2wJGfTjbFtcbAYoTNUdk6JVdSHdGXFNwV9",
  "key30": "47FuDLux6HhJv6Ew3NpgYLdDQgQG6equ7QZtQb7knRh1NPiBR1nGxMw6MqsNtxYj233RTKkdiVBSkYjeM6Qp8s7Z",
  "key31": "3NnYbj6tBJzLFxWLSSMtJcbfyMNVfGLs1EsJieUM67J6YYJFehLNvEkdAErPGRaWNbNce3Z5vRcv5zTBo8tF6gNa",
  "key32": "3tg2HukotQCgupdkF6u4NeX658mmoanCYtJfgu24Zn212cEaWL89UfDkbVbsYeQDNRxgrzJV5eL712W7hfviB9vj",
  "key33": "5CQTffECtmjjJc47GMYk47ASvYi8JvFtkWXyZp3dThCGbx8pwTXR7nuhthJ5B5rgusUeNMReFvakp75NuDC6fbTN",
  "key34": "3mrrrqfbULTAcZDKL91pUGQT448xoXNKuSmktTm4ZjnRb1aYdJ5FPQ7YzWfeMxyqiNeuWpwAkbYMwZZU2vQvmdv5",
  "key35": "5UHGSSpZM228ACQa1pbPe9LQpiHbvoD9kPCMVBgSc45CDspt3Jbo2Yeq4SgEGKeqLkbkz7NJy2agheHsUe2nt98z",
  "key36": "2ppqQJXrP58z1NrstMxUKH459ZMJ6PWZRkMnk19uSAvLDfR2HBKLHhTXxbqRBmodiKU7bCPciNYZfWYJZJkLZrH3",
  "key37": "3XaZYKytuwhmRTkeHrxf3iaoYo4YjmrRrDeLzeQz7tezfXYaguQ88NSnZogBzfvgiCvnXWyitCQsueUeHYu8Zjps",
  "key38": "2iqF1PkWPuMm31aTUPykbRb3p5CKViJyHazLiSWQGwteGVbW6FGH4EYPet1eoJNraGvRm73HkkkTCh38L1fTBhAA",
  "key39": "2pbk3DVcBtfJNQgw66pmP6QMuvCztdoEsDs4DDvhuhjwjFhcR92dLE6NCuoPUtfXoDMLWFLkZUYtSenU2N9T3H27",
  "key40": "2HRB6RezFgYqDBv3sGhSJVvB7NwbFHE7Z7D6EZTgihzXFSmM8M5m9fB9dJq8SsSaTJ3E2waqEH4utmCEumM4DFMS",
  "key41": "4iVJRcM11xHTRgrZycYVwL4F2bjBksc9CM918nHTQAqf17TqVX1gUc7KPzyH9qHQjjSjQaFPykKUjoa6TXaRfJT4",
  "key42": "4S3hUPa3o4ZvUNj2cEHzk1ngAaZhnWXjoU1vFuZobDeh49Wf6ZZhKcgKGfkpGjSdch1Mt8ZyWLLSMErUui4tGAo8",
  "key43": "2Y1PPRzYvZzEweJUmkNhfCfZ1hgHraUHDGG6TRg6a2gL1SpmoDNbTG4fW1UBeqJQX7df1FsoSYsCiUWaUV5wBTwr",
  "key44": "55UB3ynWADfvam2R3oBw3jFsxQc9uVCdAaAM5D9mQHHMj74nmT1ZR5VAaf21peL4EuKkdAXRDRqywAjzqsN2LxFT",
  "key45": "3ktr6wTksnXcPpJUovvLB1mW71gV1khrxUz75aaypvf5yxKPqiFnGWej6Vgke4bzQhmbWAPmx4xtQU63ECi5hc7v",
  "key46": "55RCgCcXBdqvgReuKnbXb6YXVg7d9xnbRmc83sDyNyCpR9ctkGiNbMqd8BzPBBw8bZYZ9gHYUmDYUCffwBwHgAbk"
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
