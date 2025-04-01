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
    "5yATZADVsfUMYddBNNW52VU7Bs4Qe3Ux5J7vxZNpLsoFm9AUMk2s6gTkR2fd1zdv89LUBCqNhjinXKDRRB2DT8rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eg7Pz2YX7RymaDjRfTnZCT1Q6qa39R8avpDpZMPnDQbSHPBDsu86478Z7XGEP6PRGDuwKNrEA5um7SMaVphfL61",
  "key1": "wiNiX1rrLBMgwrnfpiv63uHywSHMKvRqN8hDpDxEWJMm4R3crfFDqAQBuY1iy7TT13JynH85C35rWrR8ZEvMe4W",
  "key2": "3uYBP7tKswhWxfFbL3jxWcur2nWaGnwrh41rTnUCBiZ5F2oL7CKhqwgmxgec8rxdHdvUnEWzKUZP9phv886Tff7W",
  "key3": "re6hgjvFR6mfWwQMjtxfC27oFS3aL6VzJ4qUWUDTtz3VdtS8kfqS9zMzeCHyP9VTFWLhFnJx9obeqb9oqfp9PSb",
  "key4": "39hjbnTsShJuNboAsTH6WakDBTmxQyjG2azRiVQzMS1JPhuUPCDUFe9Nrh6tnXu1CFbaBKNcepfUh5PX6coQfUSU",
  "key5": "63ES7XZsuLhbXTmuaC8moMJqVsBLZFeRTYSH3USMRp4n9E3aBwEDK5sCRtpVi8ufhnSRimNieujYc1fCgZmXzsNE",
  "key6": "56Pee1KCrnDZaqsi9LGCqkqCo5F2PUvTSjHsvwtVuTDB7AgbQgKCv3GEUs6gFjxf8VDdbMryfP9SWERtdYr5rYLY",
  "key7": "5m998oYTwoc4z515H9kfrD2Cq2w68is2uuLhLryzxmLsN1rWKQCH67z9TxcramNcvSB3EsdgLLCFrDgRCWwPr4Mu",
  "key8": "3SUniu2VRyeLDZT9gpBZLoxiC5tbBEW7b2D5XrjQdxox4gFt59Tumc5sxE2zwFfrY7Pq1q3ajckCwJfAJtd2mq7k",
  "key9": "BpgZB87grtWNHHkzfWqrc5QaXKBsqjJT7kCZ9kxrNrKQPkhsqkqS5X2HvvbohYXEzXQosoijiTiTVQ5ddHcrEiZ",
  "key10": "ojCMFfRzGsMpEeJQdG9MxHqeVhvNZ3wghHhEJk2tgDWLm1r42iGXSmoFKx1gMYpyVYnDiP6csKEkvFbv89FcMSk",
  "key11": "vdDLbDAeCx1cPJ1EBuRQbwoorKv4LHtcfLjdCBz5tN1KzEJEJi2z9NLpM55uT144rTBqvkW7MuN8xK9VXKgEDsx",
  "key12": "CN8tw6mC2emdZcJbBq6DmxFJcxSHDjXET6U47v3sVqS7efpsaQLzKcN7ERo6aDKZByT2AUXXUage8ivhUoKWf9x",
  "key13": "5oVQeeWbAXRRvByMCqQ4va9o3YxjaNexuaVQZXp2s58gGgpVboERzehsJGgbotAkbfZNLR3oHg6iRYd1Wu5RmwP1",
  "key14": "dyx82MKrTA7B83i27EnY7Cyg31wyB44gY7BQNNXGU1bU5YtfZXMELE64t1ydFb4L2dWB7ZcbfakfwXiGVsJ19cX",
  "key15": "636PTAdfKk6zoQHDS96XkUo6TThdZPM1FHkXc5eZbjRAAEzh2XhBpiGKSSRoAjhrci1WdmvjyznBmkTu7bKpWmhB",
  "key16": "24sienNheueQTMNGZ8zZtH6mvLWw4Vu9fq5HSW6DWwaUBSuW3ezSDKKR2VtwQw7GgcEUHhMX1ayng8jikaB5vkit",
  "key17": "2wQdd9YEjS8htkxHyeqnvmLapKh12xFApq6MCv2qsFrFJ7BJY5ycwDttnuAntUH1bU4SE2gpsrS88VKsQACcfMQp",
  "key18": "2rLj8pzTaBKayQyT7dFqVQMXVBRmcA1KX1T8nhH4CdGfXYAnHUtm9WEXYFFp58nuYKDPfPk4aZbTcZTJN91hU6K3",
  "key19": "5mVZYtKSgE599V4oimEh2bshLzPLtUB3pCxNYbGVSrSxXbCjbfZShoYN2bshRsRxqvLmuVNZ8aCXKpJtDnFfWc4R",
  "key20": "5X1aE5i7mYtdhXQYqRDpDo1GE4hGV27pxUirCYCeKdrqMASxZRJ6vZCWpQMXoe4eRk3uE1DpbuddJhQJKXsguxQ1",
  "key21": "2rWhK2UGrdwav3XomskjQd9KBvvrnjFVxa5MT88fQeYv1RUcr2SBucrPNR9xLRWhB3cJMmTWXWCmmVHoWy4omywp",
  "key22": "2RDtb8udNLUr5GQGW97ipaML2ny8igAWs4uNeoWsuqSpvHUZYdxE7q4bRNcMoH6S56gvHCGpMwZdumfMAnWfHkoz",
  "key23": "3fmZTeZArp2rUtDftS17WT41oxFY3yxZNvd4aVwPe51WoxGnaHXbw4UGtwgh6Aw5cRR1uYqeqPPbQMm8Ccq3cHUY",
  "key24": "5BoDUttgPSbSGz97sS1EYn5Vaa6ZHB1ZSpfqYRaaFMxMbsFeANCpcY1US3kAMnhrmnYnujXGrrJgXZ6ya9Rz1p7N",
  "key25": "3Mqqy124qv18uo7PQETRXqzoiGEZ4rGYbPPo6CsjRNgCfNWVGoQ8SDRqvMAvg2g4ZergtDadXEZpiQUDvzopCZ88",
  "key26": "67WhcuJNaAsFtakbwpGCfp48iF3RnAsZzJaLZzvZPZcZdWhLGSZQrS96MdyBC2eHJ9wShyuMxwsQjgKDdVAudmnw",
  "key27": "5DU1QdGdHztPKGe2uWUwxavu27T1pUTViMfVtxdrYQxTR2cv2GJDPArf6vC3ggXqvVaQuj9S96969VCCRTcJVQCT",
  "key28": "Fgr97KrMZhTLCqFQQBxLyso8VHeEGGrVCTmo5YUM2rX7MKeaUHXRYAgb622F35BCYMx8QQDhnDpTJSQttHSJG7v",
  "key29": "nB9qF9qEncVLxBLjXN8oT9vvMEMsE7MgMHi8Sg57Em1pD1g8eJ9uCbsG8pGyXP3udqW3X2jip3K2HhhKQqMcTec",
  "key30": "5dRRQNp6e2bVGgvYN1pN75fx99K4iGmuSNNTNGaPkpXgZExfFPFkSUJFAoMCSGmmMmAB1LwGYFxeQC3PHvbYJf6X",
  "key31": "5FFXrKVbPf2v1vBx6GeJqohjKxhS7JL8n1viTML5N3C1AxvLEZsq9vmJ87gj3PGUCDcyjvutbK7Y9oCm4BAZXxqm",
  "key32": "39ECdfbZRZRupWziYW3BWFTJLPG2YonULvfX6wAorUi5e4EUYb9Lysnrya6yJkCPDDx8Vc7JMmGfU4xBiSL6RSti",
  "key33": "5i58SbuGQ7ahxUPMeEWFNiwDpspatYP7qTue6zMwH2UKB9RLHPXpE7T62ptRvqq1uVrcAtJCZDoNAJX99CyJ8PXC",
  "key34": "2AKDKYVJ6ELcMpskCWriGY7BSxYid7uoWTqXg9AetvB8Dcug9upVYfPBrXweUK3nMfvrF4pE8FKhhNNj7aesM3Ey",
  "key35": "2k7vd81Gsq1iKV1CvED6XCb8ia7aTi7Dg9AyyKYJdDnryqZPfRkyGhevtA1bVJTS4aX67cXrJb1HmHyn1yGjZmdR",
  "key36": "4Pdm6BAHhPz61BV8SbXQgZYRgu3z9e293EjQCv16ipcCb2B224pvZDdMgCyspBoB7ho3PxSFwnxt14cFmYjgTwTk",
  "key37": "5Su6rj2zPnHYBXDDfqd5xi9c1wyKTVRuvWNDmrtZiSeKSCvUGV2aGNZvgM3PC2azYhUgD5ZmsUHKJ94rwMCkfBKC",
  "key38": "63A172XwsH1awUg6tpQhWWDTH113mZc4fvPakZsrfxkEjjtvABkhq3QKV5nCH8e8uDxyWsAkybzeY2Bw7jdtVS1j",
  "key39": "3RdG2LigHEfEGiHXuEgu63bLfgzQK6uQ53CTmohiEjTH7ztkzQ1G5Gcqde4sANRkfrjNNiuR9ksivoDJ7gioRoKa",
  "key40": "4sQxpvCuUAmjVTQX5LkeWpVfG6PwvaKwHHL2G9F52tfkpU2nFqNBZD2gjavaoVUskptb8jZbSjVNwfZKDFjDTZd2",
  "key41": "RYDvJBx6x8D5QgLySTh3M5BeA3J49dZqGoqfnGRJnKw5qtHQGoMkzyQtG2tW7PBdGeCzdVRZWcuZch5P9262LPF",
  "key42": "2uSJq7LTPDkeT15hwtXnX9BY9RngNSc8GyecMYcoMTT5w3fyHRLcxB7wUjTpV3WFurghKu5EVrjSUQnRZhcmGavQ",
  "key43": "2NqQeU8HHtWA6gwUZR6cgrX5HTGfH7gtqfmJiZsRrTuyHQb1JY4mNxt2rqmFehhnd1JyYrWKNbcKcuUx4C2N5bhg",
  "key44": "5b5QgNVoKXinHgaEJgDTAde44ufKheBXQh1xYdr3AQpJGMmNHAvvT8vmqtt5wDAwEzGvPAkNv16KBynPV7Tc2LBf",
  "key45": "4vCoL1wyBs9VSC13vzNm9SZHdJMHSEYnNNmEYUuUoUBQ7dibCEA6sdg9wVUZxVKZGrguCbykm9SHLFq27WFs3wic",
  "key46": "5kCcgAQyqwb1zW4BEsqURc5RtyBkXTT4SipqVhSR5nBcFJ8ew8JhQeyPZG8oHKnNBGEgce9dJqtDGnAZjAsczFmX"
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
