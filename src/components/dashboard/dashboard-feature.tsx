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
    "3zZXkRHGz4bWTXnQ5vUxh5pcgGNFTvbf3TP35ro7rxGsCNSoLKGY4aBesX2pQjg5MxxTfTGFTzhegyrMUK1LzARV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhYPGuiRA3r8RrWLJq2JVeGFXN7fuCwdtKPsJicRo72cJhWBB3ZXFFL9vs8LdvdukxuLxFiNFkayKoQBnNenekp",
  "key1": "21JQHCgqAjcgi92RUgnUa6gPq63EejJ3Pk98a6k4bHf5KJQpNr1JnQtX38kNbvArWZ2hGNa7ZNUEFUAQS34EoXQ6",
  "key2": "2YouFSmZimGz2MsSjVQ6YYkp8eAtRHWpTxY9koYxFEr8vC61TbfnMWJGhfVT8BnoFG9jCmfUjT5rzQpBnySZE7r9",
  "key3": "kYATYVpgJiPdtppcNmgqPLExFxtYHVHMmaPaxUWpd2NEMyaST7siCgCrfbrpy73F1LjBZUGXoge5AJvN7LRFN2u",
  "key4": "3XCSssqYauofTwukCXL5iVvGBZuzbUTMiVspmcwWbvZopbsypZpsLxp6zFwspbn7fHC15riQD4zMmcbrmi46FD8j",
  "key5": "4jkA6FuaLtDco3V14Y3YS879bUFacL6k6jFhHPiSMSNZomouV6qTysNZTcX7u6uhgG1BSuWrXBojnTyqe4VvapPC",
  "key6": "pKB8WBfbxvLpbsZjp8Y1WoZQ75YDdMMjPyYG3MGYSfSbB7u1skwAk6VkcTMYHE8txWvqD8dPt8i4ZGJvs9VsAbo",
  "key7": "5EqXRhX46NZ44xwy723jgycAPKs2a4XX3W5xxauWeGdcwo6JxTqqf5yX3pJrAcEc1yarRXkcsZmH41UhSG5bCAXX",
  "key8": "2d7krTZXi3ftTq2ZE9sbD2aNLr9qGsF9x6W8smQudvDfQtip64uikH1oqaPa4Q1P3z8wqhfvacQA1hQsAHp1brqp",
  "key9": "54RLyhBCJT31vSf144kvbDL3syo9KvnRYH1GfcnRJbD23CPw7hxMuugEqhLn7WfRPCe16Wk4M32mXiVUFqHbA5ug",
  "key10": "4QYqYSosBB9qX4UYFHgL3nGH39xEizqYA5A1ghwihunocsA5P71WGPt3yUxMsEH6UMMMyGYVpT5eDBmE6Sy4GTZP",
  "key11": "4PxPCi3MLNXJzgUVcqLAWHaHGhSgcN1jziUL265M2CC6a2sXoZBrcccq8Ft7qx3xb4aVxU2mKe4LYsVSBk9dZ1eo",
  "key12": "5nmDy7iH4Q1spcQQdXx8zMGHybRF4G3iDAV23pxzUUfxqphkXsAHLcStZ148B2G4SzW1n4kKseAERGj3FP9TMcK3",
  "key13": "4beFjUpH672mKZzBpJsNAKBg4ziimmVeVtkCzk71tjiHy5Rb657oie7vGdPAAfoV8yjwGRN3dBuPydX7DvB6bc7j",
  "key14": "4HbFdmuC7j38Mcdh8mYnU1DMwbBBASFZhQtPGiSAguaDqGR487bnGRZFuM746vaWuWccwj8cqNKbPnXBfCrPokh7",
  "key15": "4r93Dm6ofLaGLDCrt8F47NDM1Ro7GCQtCCzX49P1EyQtLisK7zxDyxsMCVxPF5crqT7XmGHYBEGf8yyktgnVHvqb",
  "key16": "STgXWAR6QqLtfqKKnLKe1GAnGMcquW22y6TTTn9na29cLWc6ujmPtymZnndSsiVXXTwoaHuw8fgnUJ6QJJQbN7A",
  "key17": "2Rx6pdjWnbPHVE1kPxqwommwuhHYdHJjDHByZ5T6LgR1HX8vUMKjZ4fpwt2aLQLEiegDoWiF6ttc1x8CZnWQsTkY",
  "key18": "5XfVrwaZL97JY7eY5WuUTur7PfBDPK9qKfv5m929Wc4w2vyqhjJMdQtnxqb6WukdsvAQ18LaMni4XGvmnzrh8gD7",
  "key19": "3nSsvdoQedTLr1btkpBnYVd5HoW3gK8LrPGPSSQxX7Sq4e4xMx8mW3LvXd5ByzqMojhaFzuFebaBZnJiWiygz2Cp",
  "key20": "4d5phozEMN9r2vx4zzh3iTEvbgg927T29WKr7gky7hT1UAqDx6gLtekSg95o3ayNc7AkhP8bpvGw2eKAd25pjaRr",
  "key21": "2tkBnkiB3S9rb5jKEXNhTtLs58TrJUnGfxEnEULVudReUVZUJk7kncUU3CzNTGsyZb1gmApsoy4A1VLuxC6s9P84",
  "key22": "3jjc7nJPniXA5bEgV4RcEAkZBXtdKEqiNorG8ZuRzrS576Mpctkon2LjqFkvweYCAdZ239QJ69surH58hB1z9mu6",
  "key23": "4AhmJkZ88ATjybVQjyVxygm9GxdeMdmEGwCd5mDohkYe34ypFxTFYGKdY86e1oFgHXyHwubacgAoKyc1Soh9xnUT",
  "key24": "42izTi6rRzQSm6shZPnEys6z5KqMV8ZfmDb4FSkRUoQeNzvKzA3ebfjX3MKneGjzzNkRvAAyw41gUFf6UuqdBf3z",
  "key25": "4jSDJsTMGKEifX5ajWotksC2DcGS8hpZEWURzNe7ogK3VuWhqqzVgi6ZqpHaRmdDPqC9ZdGgMPvxm98aJUZTTckM",
  "key26": "31rBTNDPwcQBa1Hhe7ySUKbGwm9vYzFsV2HnmxDfLdcqt5CwSt6NBrDpQTi6ybEn5YzpE3zuCDhR4QMiNA5gtczx",
  "key27": "dAGqc6cpey31vSU6Cz5U31cCJdjDcM1khBbMjGButBpbpRUuduBUNtsXFt4VxF9SQFrtBQ6dfAtBSr2nSPT9YrR",
  "key28": "SurvWk4S24MkHHE69rPGxENtvynqHLwXTgc6Yfso8Dzk1X6zMywqdcDMEYDQJCoDC5mVpbWzMnvZDzvs9BPfGcb",
  "key29": "uTVWhVuDdDGYyvDtSm13LHg83UXpdNzv9GqFcjxJAL4o3qSS3MjPZKQKbRSmyQHc8WNcaWkrs2vC27T61va4eyt",
  "key30": "2VRwfLmGX7qBjYVk7zZAJeKdsHQaddt9tzAEH5tGWdNp9uHhnATWvQEaACQ7D1EHdhe75tBaUWnp5jrUtUL4YsFS",
  "key31": "51fn3d6qzM44k6Tr8dzcNGmo6Fxy4pW5jDDv1YDhcWionh84q9GVC65EQJSfvu2DXQ8UnNnZkT5eMiAu5qzHCpQi",
  "key32": "3UTf6rQbY8wsyHDtJP2rQ56yuAxT7gyUr4Mu3QQXx2AzKzDaRTKJ6itMVpEbzG89KzDcAKuk7HHrmU8SZeHLudeF",
  "key33": "5dkweNw4cFejVcjJKD23fxCFHEKKRsPt7TQCypPygwoZgF6YxBDoh3asQesdZLQ8PonQwFxWiLGD1vXHPt1EJiuW",
  "key34": "gGVaahNiC5zeTQ31JS5AgM4rEZYPvVES9eEtLMYx1GRcHnPSuA77H7ff3FPezBQKMozNwDxtL2MwcfJYK9Req8T",
  "key35": "5xh7ZS2cgRVwkr5ScE5tZhWUY2KJPs2dGoz8aKhsYPF1PszuvGHpL7iSx1xpa3f5ApBhyfz7s1YrDXBonSEfApWx",
  "key36": "rATuiYeMJNV3ERvoCa5JXsRgj4nkcJ3cjgwpSpdvgYgnpaSGTXfLqcEuMytLg55JhpZzrS3p6GKmkMe2DCDWJFo",
  "key37": "2QEroG2sQrbNfg1iivXNvvGC74uMsoipWhPPXUhML6eVhuY5K9e6Qm8AidSAw1jG5YYawmhZkr8HA1NXdb2RLwCy",
  "key38": "42wCeRsHtM1Qi6MRBZSJrfzYv7qGaJeBFZ5Gvi8RxThBAdHtDSECcTmE8k24KDsKhAt713eFsU6c2X5NR8rjqwoY",
  "key39": "218m8hb8u4ZPS47egAQmp9eUqLvEY6cq3wkxSCkSkGtGw7qfUNsBpFxSmguB89UuwgMHGenxb4cYuK4HPugREuJN",
  "key40": "3CJdeHAGPPtHv7RLZxEPw1tBqTPvtSvxeWC1sDmWzVoStxVdhEviGqB4WbFBVn2T34aPZKJWa1msTXva8XnNjdVC"
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
