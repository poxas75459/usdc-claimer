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
    "JrUmkLv3q2do1qNQRGfRx6adDbeJTJKxa98UVB7M1g6Nwjiv8BaTohDKg63AmyCxAgmrirKvtqtjoGMMD1zSVZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41m5jZ3oRTSwkJatHvXK73WSiQN27Vbf2MPkwUtBxy5rxHDwr4o88FFJvpqMDYHkGe8CcsGiiBd5E7DqY8MR2bG4",
  "key1": "3zujwhnMGwDuKu6TdJNntZ3DpG7cvBcMzdp8hBQuM9fmnF9vF11p1PdK8jDskoDGXJRcxLw1cD8QfR79DJkAVZU7",
  "key2": "5LSLp6d85JRsSC5svxxsoedGe7bjGLydaanubmrfUWzcqyK8LUcYVPFVs9ceTKyGqMteV52MQEWAHiUNVWXXuvL7",
  "key3": "2PLscW2tLBxMYo7MJ17LxU15fXuGLdJKtMnq4FzEPY1ipHmvteY48e7Zxjswc1zysAL9rWhttRq1n4Xvfo17JrCK",
  "key4": "3oPdF5MAHMcvyrGWxE7nxdY6mndXpGmND5hA8AcURHLtCnjQcev8Mz3Mf5FvcPSVBzF9HVLYVR889YBW3HTkgNi",
  "key5": "4Ur7wXAXyFP1nkXtUHQcRzaK1D7bmtq6d1gss3Q5AGEg9rTyyTyz1rhffJMPAyEtRQtWTjS9rtHSuDPM7aMLoHTm",
  "key6": "4qdNzfnjXA1EtqW7shsjXUU5gfZYwtFrxfnPkwJPmX9nUP4tmiwhCeGWJZWkxcHJFpxpLkzMxbkrQmdd1jMsY2Yb",
  "key7": "2rPqkNR18yDx5aCSavTiqa7vbHMGHTov8P8D55dEXtFQ5FuqND55KorjVANDR5GihsqApdfnLve9Xykcxuc2B4oe",
  "key8": "5acK6PM7AyPSa2f81L4p5bTAVFb9ESZmHA1MuQxfkTaSMkyNNk8S8J4aBPYr4Xk6M2UCKzQS5pwQr1KMhSb2UFZj",
  "key9": "3YxgMeidm3L9hWQfm6Wbt8yNmWPY3izdDLp3F4vPskJTdw1apae1Vfzf4SucneLB4tPuEHa99gdhfUxmK3rmDCh4",
  "key10": "3LTsYySAe1BrAk1G7ZYfsFt7N5QT5p6y159sRYS7BGA5DbXQVi23PzbsmMHAEkyTPYczexoHZgCt72T2MJAvNR6M",
  "key11": "vcXapMxoHFKs7VgZG9dRsGLv5YvT4Y7BbgYn5QhiPKANUGDuAo3uUAvkHuW4YSgx6tJATemkcborbo2gx4kc7Dy",
  "key12": "5RMFegs5VLny1JKsv9yxNtADjuWrViRAqqkwgppSwzCemrG9zko27LtXmR19xWnpdaXh7q7CvRbwgqjnUMUToBDf",
  "key13": "6TBPv5KSec2yBA5t6VcVtXd5mwuRjkK4jMoxMGZBCnS7duc3WSRBzPyKwVojwQy2CJQ2TQNnwMNkujrtnB2cuxR",
  "key14": "SHb66eCFT9NpRqdDaqpX21jR7C78opte6CWuCk7Uekkq1rBTvbxyDXNzG58RryfUAo3hTJd4A2YExo982z3YLEs",
  "key15": "2Y3CJRjz1qytWj54T78uM4hi1SgNjmmWZ5Cbnq5v6g6rQ8FRZcumUp6TNdNRfhQz8i97wUDEn77jz3hrjnu85tpp",
  "key16": "52ALr2JpANod1egY2hGiq9PhY77ncf9b7jzYmjNG1XU3w54THhNsoYzNKe7nwaYwG4hU8QMKdcCNgqKTaDwRZs6h",
  "key17": "umM3itXewM66diotJy9do4dvYeeM2WMrLBVEohQW8ua5buoCFrnkDyhVv27T1fJvcMfZL34v5p8ZJQsSvf5YoQM",
  "key18": "5gwb5h5TWujFLpjvbS13Vb5tGHrTeuaanBLPsERssgZP1YPabNEHMemcx6r5cfj2uptgNRA3JMLDvVjHqoG4BVfo",
  "key19": "3oGJHAVpJ5vBk1RSEaZAz9vTdu2xyuYyTFdJu48vuA3oijoHeKHLUnsSMu8jZWrAxk9tFAQhm9jYKGB7GkWw9ZfG",
  "key20": "3SM2dYxX9NaWPrqbEjTA7fbT5Q41Kouai5afButBwE9MJ4XrrZDe2KTZkqeqW3DbAxwZfstLd6v8yPdWrbXipNgo",
  "key21": "4dj7XsiYQPUwN4kJzVZe4wqTEdPH5Uu2nPRhsybmLpB2CMtvp8G92UzYUa6bJse8CiqmzcukMvhDvFoGEEH85muJ",
  "key22": "B39fGeU1kcVvvR9KNLNrcY2zHYZ3mmCjPyx3Qw1Fnf4Q25wmLikPUAGkZ2QHB1yVF4TwACT1p7iHRoYjpdebrCf",
  "key23": "ZFCb9MCw43hkaecRy5jqFrx7R3uDakVvQXysRis3xr66N5VkyXfCeBJxEj5DRQwpdWryFMHF7tVv9NAY687ymtR",
  "key24": "2u1qbWGrRXuEqWbWi3edGn3uDg1HmMGJ9voBog1T7pMAi27k57yBf2D2jVmkVmHVMtQtxMdZTSFDAmzykQM2bLRE",
  "key25": "5StrA9nUUcLT3ZFvZKx1o1exk8ykbL6qCYnGpG6EAuJCaNxEhmhQC1jnmgQ1z6AeQGvan3VDJiauw7tNKonZXWtf",
  "key26": "4zmvpEAdgaL7e9kLhBXL2kp9wydsXXTvMsV2wwsV82pjACMjx3YKoVSVom2hjpNnUgsb9jFt5ScnDsg3qQ9wwMwn",
  "key27": "2aXANaNEqxzEuWTjXof8rGt15e6PGY5kdPwVAwuQSeKFTVDuBpWPhtxjuYyuFgogmtJgDXnu9jUawjdEGY9xZskT",
  "key28": "4RgE6wej1f4oXYweY2TTJ1LwBwtWmKyhxGDRcoRXb2x9bKpNXoyP9siBVuTCZd5VoHX7Z8BxmD1TqtEn8AXJis9E",
  "key29": "3SM1NiPiN89kkvQjSQ6FNaPWbTpntw2RUXSMWxSThedsGbZcfpZQvMxP7UqEdpYJjNQLj52DjDViXpA3fN6E13gh",
  "key30": "5xiygFBunC39BSMDENJcSTQJMF1w8oBjBTRpViiPwzpFrbuVDTYmE4UBnerRZyf4Apou9cU7ESFiKx1HtCdQE1ut",
  "key31": "29aQZNqTKVeK4XYPsE4kn2DoVCU1ynQbYJ2cfihbL2BxaHV7c1XvV5pDzgobkYiFmgS4RuziszT7q3HrBa675W5K",
  "key32": "3ND4bmAaXp7p4s62Fdq6VKcShHZ6pnNyw5KZJtgQU2npFKMMVFqXPGNvxqJK2PKQQzu7AYhi8wWfPCpiGjYDn22e",
  "key33": "4ek88yJbYmSLimeM5AAZmSBB8bD6TuZ4RqjESWf4fkVHFSpG9QA16Ym49UZfsmH5B92J4sY2dJXiQSi5cmCrXK5Q",
  "key34": "4X9BmthwZ2ZJCZJsUw2HubnMMeW88wrUvzYXBt9ynesqKZi2dZ6WYHtpvvoePuBEUSsNr58P3c5nwvZc5oqpTSvZ",
  "key35": "4Bq4upxsKhk2PGiE4yW1KYTArk9n9iSS2K5PZmTzP9WsqczNyduxYWTTscagzdNf2trsbJruMayJCcorrgYd9122",
  "key36": "4yUrHXUrTXetweVj2GJUkKLQbUUukH11bFE3RVAfGeB8jphse6VzSbkHVnQM5qfy2i6iogoSPaTu4G6pdT4zzW68",
  "key37": "WoEnq7k1h2VzNrKHJKjT3yptdScpDHdxxZ4WN16J5EbqhsU9VMzxG5xShedQW7rVw9AbUjGgGbH7fPTrSP41tYQ",
  "key38": "NxmGZyGAvvZ8vb7qfvDaSuWNmHxZ24n2Nf7CqrF3D7pVeCL65AZ2fQNwBoS5ib4yacmjUvxDGRZPbuziyAYNgxT",
  "key39": "4g5ZRcAVnW2kPA1Q94tvRVZSuSFSm6YEZGi7ACnhww4apvY8cKBuBVMqtwHVXiXeRYUi73bZ635WrhbfgfLtDPiF",
  "key40": "5M5udNqYMaaGyrPtQm4RqEQ4pNQntQWaPzfuXGPUoQvbBE7E18snmtd3TFz8GzUfRW861bkyuGjSGD4re5sSpDKa",
  "key41": "5Hi5jix8Zk8CRDiEQrJTK9mUVqWHAx8CrePUFrWqvAmNgtZbpGrubqxZ2mrD2Eq82yFXjdGzsMYXeuwkDHVmfTJV",
  "key42": "5JJ56mbNioBiRgrVVHQcBEHgbHDenkjWBfuByjdEDePBXiRLrYWt8rtNaKANpntLLtMDSp7pPsWrR8Wc128HTBnc",
  "key43": "5bAiqDgnWToir1DafiJdMbC2YFJGaFkBwsi6bx8QkLEtauwVLiXW9v4noRnoELfZb1ftN627WV1nwUqyrMhK3SCU",
  "key44": "2ASvGvccT8CcyQ7bSSoU9Hp1Dmjapn3WCPFwnA2mQkVqhBYAwmLggzzDjC4yBSKQjANKnPrr6gfLepoFojrKpBVP",
  "key45": "3QdoC763F5KqjTNbLfibpvgrbwuAKrv8WnwiVwCnbUtDGHx9mC2a3MwfYohj6EJDjCQu8qq68aXVpvksibFNC5HD",
  "key46": "4MtE8rGfPNW56SEvp9K9AoLmrH4ya759kN2y7jDshmGjw3z8TF8yHwRS2qQhaVWYdmY61e6RxMEv28bzUhXUdesJ",
  "key47": "43bWYYS8e1TGgupMA1wEQGkM8TttimZtNoj3xUGyjjUp8ocWxtLfHtwnms3zXovYt2mPUtN6a3SjRBc3aGBmoJBo"
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
