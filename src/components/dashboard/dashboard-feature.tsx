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
    "5JTLmemsiXcnkFvtLmqBd9p4M8ezqBcRdVyRMKTARxFXmNZ5oosvVsRgisrZVHH6d7rWpQwTcLaihJaPqq8jPMTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDAkwb69SGGdvXqQjNX3ybQK15LQKw5YvAM6G4BdXwQh8hdMctQuDgi3EpxvfijqC9PcACpf7LaEdHtCKviZ7Sv",
  "key1": "2Mb85oNDGzxZJ2GnVmH3X2WsQxMeTUa4KujaH3khaZyNUd5ZxpoCVyvvyXfE7mj5bnAuMdU4XbUqdvB9qgNwDThL",
  "key2": "3ZeoRZj7kYZq63zo7s5xkULbzb42x76LpmWW2CnrHWG9ybzJuJLcv146o3MPf8LteyhCgwY6gRJTLrRpvpqhYq9j",
  "key3": "4ELGdXb3BZuHF4NpiUSFg8ovprWmv3iNoBx8G5cYrXjAM8EZZm94EWSa5zF5mKCpzoCKArtTPEAb8WbqqWbQUiwz",
  "key4": "4XZ9jVsFaNfbreq2z6k4E8SKtgPPQ8dzXm2SeSaJRnnKtYxvMBGKpoAKxui6nss7rqwDf8xP6ckG8D6CrDLNYGPQ",
  "key5": "2om92L3ZMDrpQv81c9wZpwrv6iZjbbgAitzKU5AeEvCpaWYUrXkUMbjYzYGViTSbaiEKHg8gKM3nCCWRY8ajCZor",
  "key6": "ibTTaBu1Ez7GjZzifySFrDXpWEPSbnaQi9hTbSvVoeDRNALnZRrerz395TrSSMzAmwBKd2wSr3g18yYugvpR8QQ",
  "key7": "39avvFqkep1a7dxD8K6uaWmebgkbFMWErcz98fUFqn1GbHNoahjx4bMGb8V1hqhcHYJxVbzP8ayLx8zTBg7n4BgS",
  "key8": "43z1JspyjqJbmGiU39Mty8wALGBEH1uKjmos1ZnBdFmpaoqcxVKrCsjULbNacAWZpQXHWgbToHEQxsHxf2zRPg6R",
  "key9": "42AA33LACpWTEfaxkiYuwzQJtrDgjqgqqKuSLrWCckmLRtDHtZXVQVfzJrKhHqY3HbNdDZMyTHEA8v3uKrh3MGNM",
  "key10": "24hJRQBZwdV9rtZ18163pqsgmMgjedsav93zgjSTwPncDMVFvY1oiigb8SwaoFiwadhkJRhcKf2mEoK5tabyADUM",
  "key11": "4UN53434y6eADBoSPtngzT4hsibgrHJMWAAwkxEM1zoaUqovYu8yHyRYfcvff9zov5sy8TpSuvkJb1b9149DfPYn",
  "key12": "gnsmBLmzZLkHVAZjaqgVjje1V7xQWAA7pwgju9rctNXHqD9TNooN1Vcx21DDpzq1cEGAjE9byjT8nPjbUheRmYZ",
  "key13": "Y9qtZCBLYccrQmUfWvJEf7cAsbyn8EecjYFYqn72CxtxmVtAXr7XgsozRzwS7v1VgDyyLh96NFheJ4fyJ5wCEtt",
  "key14": "5oVyeGLN4rByCGGNjLLeepDXAr6is8EFftMNKic3m7dy16pELNhuBVH5PEeREJobf9dhpFXhrFaJKBnvUofYPtu8",
  "key15": "3QsiEnXWTnohpu471pbfTZB8fvCsiXCt9guorNTeWguGrHnmPh176kTFCNwQoxKskLqUWTkQsMdBS5rAZ4kcvr99",
  "key16": "3GdvKkV4krhtJ2P5QACUzbFkSxJdfwmMS6ykcATd4K1hJRLd1rMrazR2ACzjkBs8NGEnQKwiGS5XjHSL6eKxFhbQ",
  "key17": "2TmwZjoE9faX73Sd1z7DcQ8TEFGUHBviExPCgZu1oF5TRQsCPe53Zq6ByVVry8b3t2gvxMbUCuLtrAcuhkvxZfbp",
  "key18": "4ZuusBXjkDtMwcruXbNzQrGVYX28YFbBzyCmiCqN8RdiUX2mYzRsU5z7YVy5rTQQvzRJvAAsjiKwjKVEW975nPzp",
  "key19": "2xVkM3fV9kq4MBBAWwzDc8PSW8kwnfj6483xXsmjR1UcM3YvStMLaZvthrtk5AeJkT6WzgeFVUA8Nk5gkJGtdYA1",
  "key20": "5SeMdx4bmgg86vRF7pvUZhxTNDDQLiKCGaDhr7VT6LkFZ3yypggM77rAnDBU2V1AUCjqZVa398o8ssUtCbvKUJDr",
  "key21": "2AL3VxtaJVVBuxmd57FF25nynTnkHdTefAmbhfNZpkF75ZJczSBWfLt41MATFapc9a4Yum6WT9LGK8PnNTSH9no1",
  "key22": "42caGbN2WDGZbR2de5pvGyUKjFoyztuakUZiYVUXsJWm5Ba9h8yZGnpskyF1uLJvs68KkZbkSyKuhCSUspd56HCo",
  "key23": "4mDsfxBhqRuUaTKu3jLFVbskhxN2BjBCP8rdawSGjKKmSb2tFFVzZbnCu1VQfwFoZKpJ3b8UHK3m9ZMj57UGkBTF",
  "key24": "3nXxhnBaqBFemZQ75c2NaN4tXdFRTcRjbZtoUwwPhEStRB2ursVA9bjGmJx2QgEmkfBD9eqK42DARXKmTrjp9aot",
  "key25": "AYyuT8dX5V7mRgk16VEd8nsceRKDLtKSn53g6WBSQF3cGapnaLor2p68PbF5PrA34iMoPzf2K4123fHzbF3GuCV",
  "key26": "4R5TKDrnpRJa5iDpsQQ4d9Js98JSMupZQwMXUQwGcSStCuKjC2VEmkWZA4PqnMQ8QwaD82r3pMUegbpcfcagyXJS",
  "key27": "23HcEQz2PXHhzn6spWJKcPxJf649vo7iimRPusmMUY5AFRS1UyMEJG2KnWoxq7V9dVdbTUve5mu6aKJUHAQ7EUmb",
  "key28": "5cuvK2t4QtbFGz4NStErGMrEgLxGG8NMvv8zFBd9oqVNTfq415HZmPjniWPYKQo2WcRL9iNLJRMXW8kUTU4PRXky",
  "key29": "5hQim4hTySAoSHPDViXYSAdrC66q8V9pSGw68cX7oQgMR52AjmDgjqyF7F4HjvVyEJdqBaTMBDBhRKVWsNXppeYk",
  "key30": "5fKeSbbmtZ8n7UmMzegXjcqSn4bX3fgjAZNWkMhdLrZcXpeSi7Gy7r8zcdQCKDudn7fFaXiTXjTLGciaW1fQnw1k",
  "key31": "3qrDmjzkeQLAYq93QYm38whRyaHPexytCjp41oTLkdDBozx6kZ2nC3FFZ73BYbt5gSQYwcFpPpnLPoSWkRg3nJiG",
  "key32": "4SWbp3uEcTf4rwN1gtHyVAtDgm73eD1x4wiZ1EGzQgZdXXXgM8t7PdBzv9oyydXkDEWJ1suyCy2Gnnf2yM8FCny6",
  "key33": "44mUPi5kygUZwrCyyi3PEjaBDdi5CZXAZ1Tdx3AYvGybzvNn8JJExiYRZMTWEsHLYZjngx3UU4Z242AYp2db8p96",
  "key34": "4ygFUPC9iX74PjQHejFd3jQnd8mNfBDoQuttBnuN3WBBjhXERD8zJVVeXuQF9zqHWg323WoyidwqdQbd1QBcin2",
  "key35": "2JF3NHAQxL1MJG18UzUCsb6sSJy3i5FrFLNfL2fGqApt6DJhWawUWCZkBDuCrmf5DBXsv3XyBWsJZ44yNGzZVvih",
  "key36": "4neSaqvs25pEfb2x9MZJHjzbogAvA13zvjTr7c4nWkRaFBoVTF1AMsxWrx8wMTizd8FTW4aSAu1xcFK83mkWcyxU",
  "key37": "5JiUtX9ni7yVxgunyEDTn1AE5qNp9y4BvduGMDZ4RXyYG24dusokHmwv6Vq4YADGYFx8FAXBoUTmbWFTHbfaLi5Z",
  "key38": "5hgH5kpwTw8R1gdpL69iHSBLLutHarZ1MwNJxgZ4NeKRAqVVWbusZ44UafbbGDT3NaAH9qCDLTTyHXWBHtZSoJBv",
  "key39": "2tNEaQatwRpfuazwNXUPKbKuesKU2BgxNzjbNQfvJvMsQZfDiHw7CK6VxQAr9XueCgU5ZqkZmTx7gun8jUukGCcH",
  "key40": "3oPYi6VssmhhBFU3kaX2PPvLvUJGk1ttz3DdquunTQsCwA6iYsmKUZqJGwCTYjTQScmK3RDkcAdz1xCgvXV7oKy5",
  "key41": "5hVbFttSA9ywKHRPLcMbjn2LpSwhFE5HNW76Qzr1fQC6BL5NP2EqbFyNyx6nNXWcfeNGQg4euo57UzqXM5ezxTAA",
  "key42": "4y8gUeUA2FDhd9uFw8Q5V1p1dSMgRBXtJ4tamTrRN9JTKbz3VJ41feTkqQM1kaxZvWYYntq6ZgXeL2NVePZ8sDRn",
  "key43": "1244Rx1JQe7nz3bar7TBxitLua3gqf5d1tVAgt9srHPy4KYyrfwocHjbvJax5jtHrTXt4yc2LWxAbsDVwMDWkeCb",
  "key44": "4AERgM7Sjk7XWTWXvVgcQgm3cnvuWpPavz8iynjgiphggr4SPPjVNpxo9UESrdrjv1wzgthFPbQbDy1PP9znKAgE"
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
