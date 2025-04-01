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
    "57m7DsfEFmgxyzbAD3j8tyEmnFV1qFKXyXARaFkkS2KsMbNdMjwgM98P5vzy7W4jqu4HokBGH9u7zaKpDseaGeoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bad4kxX8uNtK6LFLrPSrs3TbCVG9akwojYUKMvL9JDttuUaK2XtJMRoyKujj9rsLcQX9ZvA9FpdtFEVsdfyLWhH",
  "key1": "5Sj4yhAjN8RAdJM1Qa1TEyB8rAeytokNxrpycpczQZkG3PxdzH2bDq6eS4pPAn5qDBMvVhoco9w7apctyLHhGm2e",
  "key2": "4XJ3D8ADuwzRfD4kh8H91zTLhiEeVCL4bckRSEhSnxURCJCS4HHGymoEVDPz9SgiepCQ3vF8CYvbghdkDC8Bvsrb",
  "key3": "4gZSHLqv5TwY29BsHjEmPmTMu4zyWKKrautnXwNhEEvAfw5dWu9Po4T7Q7dprtZqbJSQikPv2FKVKBugtdiPN8gV",
  "key4": "Nitut8WPnACCsRq1iuzMH4yoDe1Zkv1b7kcjv3JLquQZ9hM33VmMzwk7g35yKm9TfNu8CGamVx37aPqwtykWR2S",
  "key5": "4FV4ifSwjiJsZsW7vPkx6oBTch6HeG26VskFsizipMBWhFY7eCB5NxQfaz132HUweKGLrCKRX1kYycS7svfnE5b7",
  "key6": "39CNjkffXkRuzoPGwW7G5bsVGv7ZVbnVWQ7V7Jp1BC2cLbeT8Tp7YzzcoshxpJTEsRnZmRiJ9aRTp5K1eVVSusvC",
  "key7": "2XA7etGxhtov3a4oNtNat4p3n3uHsZ9JYy9yvkf7A8fzWN9cJwiJFBNEDmnFQ3ZNrCu6BkYkeew8M2QgUEhXKfix",
  "key8": "5iWiDaq56dqLwoMhSQfmg1ddTbYXRi38UXsR4QY1m4G6vPM52tELGMdizP1ss9REmtZfEucF7TzdLtXo5gZsjbb3",
  "key9": "2Tcvkpej8DKsyneGQm6VdHCwwaq3GMhpTty3oQyd9eGt6qgDPUk8tXTK1JAZZrN6hQmXXNf8kqspG6mQSBKpD9Y1",
  "key10": "5EXjiKSdewD8n5n1Ltty2e4HpZeS668q9XEW8DXUtFcpT9MuF9rY1npSTudfkfFsNdACNhfosBAPLtKPqPexeorB",
  "key11": "4XbBrkUAQvawmD6iXZpbBhf4Gwnm2vPngjjWYbDsC999UJnJQFzCRLifysJAjweQYonKfL2bPuuJ6kwzXLv147QZ",
  "key12": "2ySokBfuyR6cGcymUpP5zda4D7LECtab44QYtJunm481fH37sRgxTvkviq5QNZYjFW7ZVmR3HkCFnazXHFAWYKoS",
  "key13": "287putgfSVLEx9tRVvK8DwGDBHkxCpizTgh71Jo6eDt9WBJuZ4uCqPXBcYgxcVfXmqRNVbeFpirgi5FZj2DErE6Z",
  "key14": "2s3dJck2y4NcMATfQHNW22ZrwRwPzgWoUyQL2ucvxtyFwaufctZ1Ykxibagh3M3GUXQ5TrgKsBxHfxjNnnMfBAVD",
  "key15": "2XEucm5oYY9RReyuXyRckBz16rMehi4qwpdx5znz6PvxbRd4frLLRNGQX9wKBfqu3uBexcrhMhC49efdkKH2tKwa",
  "key16": "szqidJNn4LcXTPcCR4otf7NBXhUW4FCKwAg9xY4xrZRTYKzGTsuq2wiWf6CFbDwFea4n8YheUk3jArCTbhVAv57",
  "key17": "5P6Lbs2HaiFaEFBRnNvKD6jfwsjLLy6CATSKyRbVtgTHCbt5p2djyXKLBdHoSgDs8dYQoYdcXKLgrDu7hpzaLU9m",
  "key18": "2zUBHB5qBAb79hw8REaMe92AZo4JE85Z9FrEciUEzsuUVk2LTyNo14fJx8wNyU83eRndE3T7JcEwC251MdiLosmP",
  "key19": "4KgPornjnVg557fpnTuL5PTeKpoUPiMe9AYSKakLy1AFo5qsaYKj8jqPcc2m6m2BcJV67y2iaTFoY5E4asxxvh1u",
  "key20": "5eCjWgZeSKahwBHqdqfJZ4NSuSWAd6HjavsDgf7nskpDC78U2yEx3cAv8jRHsDB5Hjh8RMvvB5otgtGPf5Dfd6jm",
  "key21": "2YqdSWRzeT1f5zZwP7hfYk8w5qWjxAHioh1S5C4SaJpybggqEkYh1Qi8ChpAQK5R2qs2bnsoCScXx7YXtCDjkrZR",
  "key22": "4oXo1Mmc14TNmjiaggmYaxb4a3JtYd7zMP1Jw6bhvJ1V7Ev3nTLszY3vovsqnqxCYnqye4jmqaK97S2bRYtpHcmF",
  "key23": "3ZpTgxPXmud9Jf7iNjeagjHSzYfgaVgr3TV7V4NhaA9eRa8QR66biPL5mZEwXD4ePcLZ4RTC8pBauGnGN6Sb4wwp",
  "key24": "RXHtGKUxeGMMagnsS7ogr3GR4eppyx46P1H7a4SsyXdyts9no8MFfJupZrsWTDkkJqxDeNxrqCgDqcGniR5MLkN",
  "key25": "RHuHoQyLwypdgaf3LRSQ5QYR9SqHmzQUvi6a6VEkMk9sWw44ASdagSt45L516i9va2Vhvf1QaU7BbxzeVUkcfzA",
  "key26": "4PbVHasF3mBGk7PNWVgergsAk47T6cD1m4Lrg2gCe8TukMknDd2e777bj1VQXxQKzS7h4FnV3mYWikXEmUkoU7Zm",
  "key27": "5XX6womqzHyVWMbot5EuU9bXT8SThoE6yCZSx3TxdRKqFgGttGKxqvVWiQxfaDEAhRizrLWFUzw2MpdWX1fBr8ts",
  "key28": "5V2X5n1dzwddHXcj7bWG4AqMgtSXrJB9KksEy8RHSaUFG5CCNF6qY7ErU82r8iDdtmbDwH9owEieGw9Gqn9b6dcC",
  "key29": "3iF72afxfvc9TCMRMYaa6R3NRGRwwe6zmydHi3EaJGfecymJEF34bzvU2m4zuWEexGfJBTvRx6932tx7mRZPckS1",
  "key30": "5WXiMKgXeqyMPh9xC388PC3vBDy5KrdbDkSBCPyqjugSDqeq5KtW5kZjyZcA4LBBfaPdKAp9t2RGKc6PJ91oxWmz",
  "key31": "Nd4BhLXda1kbJRd9mtCnAs5P65GAGqHsWKwi9UBsfycicqMAief6k4oMViCvo6C1v5tgyfXrAieLWQ1HNaijkTr",
  "key32": "5VgJggPWg2EdYkzMaULC3FiPh46vTNgi8bGYi8dbykATuZXbi4fkyh4dvPkmxpU7JrHXcSneHJzM2wVdsPd8n5nV",
  "key33": "3RrfXD4Ke2hUZbzFNGEF3HqNHLYL4MptDdFa3FXUNNEBmtQPtyaFBvSgbak1VAxDTxbVYp6Hd3RetnpgjMBuMRJD",
  "key34": "Bb9xDiBEcqWiHb34PZgtoqZ59iqCg9zufR42pm9cyKh84rvhwJ4DqYUfpXMRTw2J7urQHFuErJXxvvs6ondjjQ4",
  "key35": "4mSMk5hxdsQ29DeAjiKo3x86D8nZjw6nwsCF5138UXfnPQgzgQWscpTa9rGZsBWVv3ptRoDQVY9aHmDRBMYdH2pg",
  "key36": "2bfpwymcTXJWDqp65yyGa9crsVnP3jCcWn5h8mShekfMRsE1rbZ2rSbmx9jEeF42KKTwZtwQ1JfGL61PJmWGy5BV",
  "key37": "4cnzAwsYM2c8jfXz2Do6qHodRANZgNSWh5a5syoceWBqmcF7iJoyMitLvq4dyjSicvnXB23fnpZL3gfUjL21FdeW",
  "key38": "HmamGGJyPrDa4i4415pBbtsxYHqD73f3h7bo2nqse8hPDSsrHGvPFdvorwKLQnTNqQbgYiPzeovNKaABZ36fjwy",
  "key39": "kTcyz8gyNayK7tGYqA1SFznwfdTHdRHmJDxNixmtmTAfazu7a7UPWy5pXmU2GbkykHf38oKsm1b9kGYygLpACYK",
  "key40": "2mkSi9TsYHpyFWRms24VwgftmZZkVBUAA2drdTTYof3EuTnsL5sRJgVp2qSx2p78qhdtS49GWFZngnexq5rzcrP4",
  "key41": "3A8WjNqmrxF8AZ3NBXAWXZJRqEZtZwEasoegbDGUVAG8nMfY4Xf3E94FivLyogmVoBM4pyqCavhhcw7MQFHdju4i"
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
