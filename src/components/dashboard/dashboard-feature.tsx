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
    "26YseCCkCesqCNdBL3WpymCCtHjvFCq2R4zgMvSSaiz4LSCXNqVNjcEMVUiB7wa8RiCRNqbbthyJ5xHBVaGfwSzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4mz8FKJjbZ8zho8hNHPHZbRPKWbA9uLoUYZ6spbfwyP8sGvc3YektLEQa2pWA6x1jyuYKnKG7byUZJFvfzPpP8",
  "key1": "kMeAdqRLPxgZ3Msp5PwqUoysVwgH4DoRgPRi8pw9yBd32B8q5MMpANLZA6UXRUDVqagR7aduDBYagCvCxqRW9JG",
  "key2": "3sdB3qGcWyrCzFe5aQNJhouYbefqnFtQ5raQm9we7mUNpeq6WQrc5yc7e1AqizfpY9bYAw4aBDSdcQxJ4escdLWB",
  "key3": "3dbc1sTM2xGywMkHa7BnbXo8JHT7BZZNdn1D7VDoyLZAbMCW23Y24uNS98Nv1C9KLv75gm8nPEWTaWp9ENfP7gKK",
  "key4": "hDcpkfg4p4pxNCsekk44CWnkMWCTNb3JAKqfrVjALX8Hwui8ivBtrhcrCxB25N8NeWCuSsbR5bepitcKCCz5VHp",
  "key5": "3bJWVLw7McKa9tYn7BeWtPu9VMh7DCL69X1YBu132y4TvZGvzJRcjys7PkM9beVLiB5kKe467XNpNV4i8sp3vGEY",
  "key6": "WfqnRLpoMgMhcYPdSgGJsfNZrgm2x3nXybW5pdZcE66ydP8SShVR9FYUjmWVjv3k2GG8AAyCxxTvfh9mBdpfdGj",
  "key7": "3Syjh4FdRTVweXax2ezU8e9GJSmNajC3rYgER9DqbbQg6dex449XLDi1x4LYFVueGqdN4NRTPk3BK6FhCM92whwG",
  "key8": "3jqjg4DuDZHkdNj7RFoovy9QfBsz79qSyegsFcityac3EkqUksTC1mviZJaibDWposxNoBdsH8HdcRo1GCP5Umar",
  "key9": "3jeBmFXxg1zTN38C5rK2S6FndFP11ibNQDwfgUBRsdMa7bAeLaFgRiHx5M4h23JWedi92FgGWC5mY7dSREQG5ghY",
  "key10": "4kzKhF2mnREa1SdvgEuaTNwfyHJ78hVqQYYcEXLPbMiAhYfgnfMNB8hzY72xHt6CR53sCsPQ6iyoeZs8QJRxiibh",
  "key11": "32ZEZH18LSZqbbJTN5BbBy58GRozJ7CKtypu8pjzj6JWdU92GNabhVpgs2nFzsfrFENqw1HmXafWDzSnq4FWyPWZ",
  "key12": "esuu6QPB5CsrXrcHNj4FRXdqZ57TbFZFnojpiH778b3sWAhXGJ4hAvkvWfcZKpUrMcNQ5XnqsidkCH9MgacrYBX",
  "key13": "uotB7hmAv3GpnsTtKham9BG1GeviACCeaCujdsSpNoeCaVXKx64uTnnadrQHV2JApM48FEwZ8oKx9JRqhBdxy8g",
  "key14": "4SxAuEe4EtRxMy1KCPwvTiEKPMC9b7sCmchVVyCkUHLP76RuTiFXHjSX6nERQ7ugbZaFirVfG7FTkfEAV5rN4tin",
  "key15": "3UgQhu5ABNc2k9NTf1V5RYM7z2AnXVNASXQPf6sgELkfzrnSsrcgBvGyt8kUfiBghZPZbTYPadDS2gaWJ7TW9zZc",
  "key16": "3JevBRkeWdZ3otTUbwgU1P3cqxeLwexYHLpX6ywGjJXSRVAyLC1nQYMsGG3GEkz8wJeym98Wv8jarkuasPJdh8Ce",
  "key17": "3v5kpqBmoDoth4zct9ZHAFb5W1WKBmnZufLZXBhsGYqYMK77s4bHKh9tHMLMzLwTGj1GHLuVaaeZRpVG8k5REy72",
  "key18": "2wYmGJ7heZP4tKEh9j9tVp5v2rQkBDG1fdsWF3ncJU7Rav8XaSXjqRvPLfWbDf6y7C6Ud4avPQhWcw3Nrom1YSjU",
  "key19": "2QkwaWDtRCjkmBALEmwaaXhW6BvTKcbaHzjwKBdmcvSQrT4kwQW1XGaJJzwHuR52G4xLSvbSYwQXkV1MyJk3gXRE",
  "key20": "4rgavTZwDzvgeQjHzrWc9UEkh3CA8rQWfrS8dyCqH1WPdGvFwp9qZaT4SveXTC44B98fBZykVTaxhMtyycUYwdfv",
  "key21": "JTHDjH9s1NXpirFuPuqokirq5V6AeKiwAo5udNmBJKL7jeo7zqSb6eJTcMrNwLqbHmPmEjhGnczbTgEGfqPiuQg",
  "key22": "4bxip7GCFsD8hMHKBzYqsDZsR8BwcbCMWfx6k5938s9sbNdqaD7c5h5oEJk2Tz9cW8mUyyrvPziRUFxNZow75gWc",
  "key23": "3w8UQj4VFLcZfnWjoWis5b3Wx623X7GQFCbHUqGywbRikDvVGaYSp48XHdz6wb9g9BJRFpKAupYt5Nk56qC7iqNX",
  "key24": "5nPPmKQVk5odY1BZuVXS578cGJ79Vz5ToHv6KGRFe7cCKWwAesRGF1pmVHs4ESF8E8b8Y1TPcuLxgMxr5nJzjXJs",
  "key25": "3u1m9r7945aonh3D2rRyxvotNN8P43w5bW8S9Sj7tR6nnTqnNsYPhxcZroRusHVH7PGogX82zdBHbJGHLnZ1daCv",
  "key26": "27b3cXraJym4bFii5Ai239tECoZLeTVf6jmE14Er4MqB2bF4HfiWocFR7PBmvWsZFr7oinaXeDU1Dryvyj56Qj23",
  "key27": "5ep6vFUDXgAW1SMkahZRu82Vhoya3Z7Q9peGD18FYjGoSbeTB3acuMwyz3V71HWbGm5ay8ab3ZP5WUc4mug2MgDg",
  "key28": "4esWJ244kGcDTVMt1QEn786hrqq3bvLvZPTJo2PmeQSUYJ1qwNaBJ4e3qDsRFYR9iKKV6r3Rd8T7AJBwMrTC9p5p",
  "key29": "7A7uFPJT1WcDSkRACuKQSVVTnEZGWBPM5TDB8zV4F2vo2B5aGZDxUrCH4G1rNJ1sBcfL9tWmE48wVEmiEKfewMQ",
  "key30": "66bSyfSRX1ZDfMvRUzJodAeHQNXAcpQGD5ojbPAyZVUHdXxsUQzEaYH3xZbWKZYVjFYJhGigDWnJSepDR9H5QGH1",
  "key31": "2dY6jiWwoBsTSMVRXtqv4kxyXyh1Qhsskv9DpXJGKqE7JUdaRopbdjYMJH6k5qeUs8UU7YegKm8SxDFA6TqLjYei",
  "key32": "5HBNU94VSq65xMw2WePBBz8hVGS52rm7XV6pnwHYcevUSgRuVby3ZAgaN8Ye4ABmaCyCG6gthXSQU24LWcgWNgVJ",
  "key33": "29i4sTLD7sYzGVTnLCydQAco3aZXuxhWygc3GfKsLxipLp2RwmAr7Yn6FnZBxj3EYHGzBKzFtMC1ZkpweT8RvKTZ",
  "key34": "4q3kKrZWFM6N72hXEQ8XPyKm9eWSkLQ6VNyDAbMiqAiBM1itrPhV87axDCSF4nWuz1ts85wpMuqYerGQdtBHaC29",
  "key35": "3UoURTBqMQHgmootkAMWtzeuGSdJWxUPDRRGa12eZVK3ZdVEZ6sTUQXov5UfmPrSiMJwLFXSud1pwWgvnWNEGXhj",
  "key36": "br85x9U9fsY9gBEtQvNGxXdSovZP2tPyyWMqxk5TR9WCW2WGVdirTG9cedSyBpotBu1dQch3vdM6c2vY5mSL2pA",
  "key37": "4xHwaMXc4qtamhgSLAg378TEp8YvPVC5V9416xjjEjQU9gujGGXCt8kCB6ZDMpmkU2ygSm3ZKBRMBN2Jqd3oNApo",
  "key38": "2JzfZCbhZMgQa7TmFxy8ugzhHWAYzJnBNhzeaRxEK1E5oLNkk4ER2j8K9n5f2cVr7WK93KZcjAUnteH2Rx5WCQ7S",
  "key39": "55MDFeygcac9bgYS3BQeLtv818ppfE2ev16KTpwLZRJjSeymqo6t2UJxXgM22q3XdBeATfwNeyjtBMnqbtZXnVBF",
  "key40": "2L35HZ9Cg3uAMxhJ2xW35QeCoyaGe4RHqAeGkkYTNUxV86yaQLyoGBVuKfePjJDDbiuznQs1JuTc6grdejArceCq",
  "key41": "4TJy6apLkn4mqaarDBMEXtpbz87YKh7cNduynCTiCuSFWyUPrKVtpEtg21LM7YAoLDYG8RfabMSwfSEnFtJMVowB",
  "key42": "V5EPf6bKeJB9ZxC4jsVMTtu5CxUjpju5CGg9p6gFvZqFJzqodyCV98PQmjj7TgkbJ2eKoB9VL3F9skZ3SVMAxzK",
  "key43": "2Kds6vNKMV84JqjHu4nj9FTwqnA4Ka6FrkezAxaAmv7Cmk29hzUwZGPiahq67jwpYUKCNoJrwPUzAgf3v7L5GNau",
  "key44": "3a5fCeWWqTLFANkBCL9YuVpVuprTYs4qwHyHit2r6kR3ptiMxKtT549QH49ggy87nZvEpPK3wMYRBxsJirB3XBnm",
  "key45": "pngxLgWmLsDmY8Lu2gwWQ9ewvZVzfgk7BnmPJ3CK73eutR7o7hVQUAiEjEN3xeYGCVsa6ax3rV2mwugD7v3r92c",
  "key46": "48aQGbVrRzC6De46V37fDbr8Egy55hYzksSf9wFWgs1hVPnQPHaVzR7rHLkyYyZNSuqCXFSbfc8DVmQYJtdz5dRd"
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
