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
    "LqiU1XNB9fH57jBEF3Abve2iNsqNPsyodN8qNJga5bKUusD5mE8ZuWcHwKuMNNZ8nun2VabABoxNCZSsVrMdXg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKNoishJEXM2QPXeDeCGpc9dV3eDvi2sKp1xu78Cgwts5d4HLynFfNkbL5Nd6ViN2nmRwCk162zjmDbztXFs3x5",
  "key1": "ACsf5QGLcFr58mJRjnMS7rWjUQqsbr2enM8Xo7QuVjsBQgkoVYayDYQxNcseaF89t38CWbSSxpjBd3fGvFr68TB",
  "key2": "3JDoQ4ENUutiR9vXpDxQ81GrpyPE19z34Zuw3P5a6K7aQ3pSCWhibwwMpD2MPc2LeszAh8P4wxbc9LjsQUq4qTdt",
  "key3": "3zcaaVxKJ3UMWmUfsETyiAgvFj4H3V7MYmKD9qmzdR1pcMhqqZV5TCJacD9cxvLrXD1kNbrZMvekjBuciJhTKAz7",
  "key4": "5b1bHLqkTiuMpb77r5pv3ehhEJ5n5audWE9gLUdQ35gB27cbmgwiBG8dpsd7uGmfSEK2bfu8DcUpC2GA4x1jKwG",
  "key5": "2TQNBSNP6Ji38sbRXhFume1PXK9xXbdum4z4gdMnDc8Lac37KtsiMMM4EFCQtaEyXxA81nbTGy94JsQamQtri6Wx",
  "key6": "5hVXcMSC3tn7uDs2nykt7ssPvyhXDXGh89bxijFGATeLphUbHXuV127G5q84rbTCqwFV9WmXsqrPbNLwatRZuEkd",
  "key7": "52GcPa7LMRi1cvBniKxZKLCJrVeojxxrsuvj4p1Z4sYJkak97o62LFcvmSLHpGS3MWCFmWe5j4qBbnKpS7M9i378",
  "key8": "2QGTeFyQxBJzwuqCx1ctQB4NrMtzphbUfeWrXJ7DesySURLTzaoRQzqVZWApCp6gYjZr818Ro3rX3TM3JDk6dmsM",
  "key9": "6XSEPZ3txhcRJF56xjZdD7jRCRXL9GXajoCDGdE6QiSMGGgtBBGjzitEcKWwfLS81ZSeiZwa8daNDxeSFYF2Nds",
  "key10": "2xXeu1yNtdxLKMFLgnFyUBCqSYFMrBR48WV3YqZHyTgqsFz3poTTFnZPJBoAM3ygG5rvyAMvBrLy3NDvvDw5b3xG",
  "key11": "4RYPnG9tBH1SwWAnce4QZafRoswtMSoPEnTnAyJ3x8LUGoFoauu9GMoYpUKUkGcXDqvxiTipAgvAp83sAQkPnrme",
  "key12": "cDDoQGLFS3EbbNVPdwebMHuyPyYT46QP6UFLzcJhD282XaXWULpf4Uikd2Tx65EgHDdawaXRGTcNN9D4BLUph1m",
  "key13": "3QHPXWLqz5YqUPRAHX14Ex2t733camptUh8Tbj4qMN8eWN9Vm2uJYeKkgYBAarDyqMvw4SJTy5F55THYh3mbTbFB",
  "key14": "CB71XzkW5ihP4D7xytCSCNdLnngDudb34AXiWK6MnY8UTKcvxXPPBETKCCNhWyBotBHMfqX7jhbJK34Y9z31oaf",
  "key15": "4vriuK9Xi3uxGTrux1cfXbZcg1fQzxZmJSZYYE4KrjMcM7VegL5bEEifWYRVuEUs8WiadEt6wp8cp3AYXJ7K6Mkt",
  "key16": "2CvSn7PcgL3AEM8KNbu2D7xWPTWWBX4nnQyHUeLcBk3hZwkFmmJf8F6P5m1jaX16PbqTZubtPfLfS75fk8wjzZ8x",
  "key17": "2gH2NF2Xk1rY74f4LbBujFxQPrK9oTekgraNxy1b2LYCF4htdYsggcaaA1AQhGrBuriR1ooR5ZWZari35idkhcfW",
  "key18": "45Vq1dMWpPyjK7rwUj5hZppJyyZWNhisxp6VV28n6v6pMdqVJBny5ecxMv9dB7msKLJq2KK8jPbXLaUxaNscrLX7",
  "key19": "3W6HwxS36EA3HUCwx7BKTw6bfebPABJmXP1YmaGqBzhfPFaL7w1bi9PXjdoZwTzzWgrmm3kYoe9AUvrexTYonzby",
  "key20": "vno6tAcpdJ75B1gNRsEZNwqCwpnNMjiitoEnc9LGhp5ap7C67qbxfihXv1jJ846QUrugtnocKk4fEwsER8puWhx",
  "key21": "483rK9SkAQDidqEbGNJMLoGzBPvTqsEJAr7CnmDEjk392LsQrRf7pxS3fd4SJxKsmme7L9ihaa9fmu5gsZ7yjEQt",
  "key22": "5RThi5Aqme4MeTzAE7ovCorUaV9cCvfHCKtqmvuRc5B8jZzFEszSh3MjHKim3mFUh4kE8JSRPNkxw7h65Vfj3SqG",
  "key23": "4cbuSBM8qfaD3AgogJ59wdc7ym5htXb82e8EpxHKhrobTzJxnBSLppnQJMbsLUqw9wCHoXCx3gCCxbxA5z8972c5",
  "key24": "2gUN1F7PGfLSQuXgGJDddhAXm5RtQsQQM4yxBCUdLEn8Vmt3K8yDLZ9LNTEs54ti7obpKvYTYnohTRugwazg5qX9",
  "key25": "iBhnZXzDDXhuw2GgdbragdrmdMFPdzNeHXzkMCegTUqq1s3nCgxoZHsnqLoRSQtaMc8APfsYPeJr7aEZ2e5HiH5",
  "key26": "546djffeLzzLqaRbjymhAc68zUJTv4UuwHzjcd9m1cd2KaPuqUewzcCx51hFXwNVA6VHm27N2n2AGLsE5BKUHu5v",
  "key27": "2EBuwaffFiyzPkQJjbDnSodizUimM2A1fhYq4fxSvbge3QKu6nKba7EbUx61mJHdEbtQdRi81d8MLWgUeDqDJNih",
  "key28": "fEXDCwq7YmyS8moS2TAGbKSUxSdrRNwZeyENMy4719tGtisLkdUPpjynr2z6XLKGELciuyUzDS7DUhvuhBrR1GV",
  "key29": "9uEZN8J3YTVEz3c8Rck8oZxz87oSXxtYDo9RGS952RSgBcGqLFJZwe8ibA8ggnKgRkKhoVywxaAFtjgvUrVcnet",
  "key30": "eFuRycyciNPcnTq6439qNN7585LEUBeE7dmr5kLe7JWKtG3bhgoPHAgv3ymbMczaZCkPKA95pmDeo1m3mCFXvaw",
  "key31": "4YSBhexNJnuspLJ19eVDLKwYouEZ3nFwyZu9irrTB1rZdbQMyYeC7DYRzrXMKEBXeAxZybA5twfWWpLVJ7HGFUNi",
  "key32": "5MEsqNY8JTHJHdkQhtmjFUKsDjW9eip9RLJZ3T77sf7SGvV9r6axGHUnbVnNcwM1HC4qMFxpwAaWw3dz5w64vqD9",
  "key33": "4PUn4Qja9XPQXGdLUQvzgRTxbfgRotvdTaG8nxHG1yJztNJjW9gWWnKZpnUMvaFuNhyuW42Yq7GSNiRt6KsRe1GX",
  "key34": "2spX7ew6Eb2E55uKwQTBy6Cbc2BcsrDkxfr81UmBp2s3c3m7Qk17jFTYPqDdViS9cJBpMUks5ZSXBvu398hm3RR6",
  "key35": "28gJjYkgtXRrJ66b4P49oZcX4PGX32FDKSnjVJeBuLh4XrmoBFRAvVT3ABpdoiMwwmFxxsCGrhXwtF5hrKccNctY",
  "key36": "bqAzXi14zh7MQ2Lewv7a21KSzX7iTViEWkLFDqBx1LTkTrni7iDRpPS6DpVVufXuM1rBuEMp39sjgNUU24gyF1D",
  "key37": "5nS2xuzyWqYkfbxJnrk6tR2EWzGsfHCpTD5dBw4ufPFCsbuieKQ641JBmSS796F2Piwmuhj52AA4EaRZui9UrWpv",
  "key38": "5fqxxzzdSAPgJoLAJizp54YEFkw1oXSZ8iCMCT9HCis26XaQnLZeuvy8j6iHU67oMhcSvXTb7AHrznQrKrSbtYo1",
  "key39": "zUF9epEZNioYmh6SvBAU3S3C3UEdrJsX95jray7QMUNXpWj5AiSB3tqadfK8jKdQH1UtMYHYYMSK2j71HVaqq3B",
  "key40": "4RGrLbWBTJsba4ezavXxG3ddbqfTmDnvwDsynifZq52m1BjShLgLiubuUpMoM2JGqRSN6NHHR9RgsqBtK4zCVQSi",
  "key41": "2BUSCka71cDASFyZxaba4UFmYK5J8TpxU6qxBaTJzezSn2jPngpFVhedp7XFD4GrQmGifTm1BrHbtwiZxpkRrpYa",
  "key42": "5XZXqqvKwx6hnjjzPunYtnFtKpW9HvuM1mwzfWkQWaBHtRUEafujheCK2NdwiN9WaD5ETAHWCaiNARbGfegShAvs",
  "key43": "3zCmC73WrmLQcDAkRNa8bVonfhsqDXDqUxxHqTCAaQjPXjXH2S5PuGaGpV6inVbeUfzkjnRH81vcXyNv6ZfNL8u4",
  "key44": "56wwt76nzGycrJCdFFM464Rq4jwP9wJEPTQDM9JP2Yxs5PMjFqvjPPLt92JUAkq8BtaXzsWG4NuX4FvPfxe7gpm2",
  "key45": "2vHvxnyNSjGfiai5NjmJ1WsjaGu1eaR6NsuyPBf5ssjLxqkdbLF6C5NRzuxBeZ5HhS7xJRLYKE3SQ4aKQapuisuk"
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
