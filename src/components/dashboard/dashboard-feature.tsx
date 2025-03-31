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
    "4cdPHyj19Qwy9LkRgfYWngfbH2Gm5LQCEM6XBwDp8xLUTm61jDYxQt9kpRp9XC12AJGnPaC8Pr99bVSRsUQCK52e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "deQphGtQN2t6zBg7vAhrs1k9M5omNHeS8kuxqYWShtdTNnM4d1qxo3BYjE42vDVNfa7Ceaa6GeevauFEtoApUDQ",
  "key1": "3M4xycQW1BBr1CL1X3RNNz82nb7xVA3D39PxK1dbCngVYK9jk1x9DffH2XBTJEHG4ZJmMjK1jKxmPEP1T1B2WpZr",
  "key2": "39fLeXuBRUdxCi21ww4GRP3x7FLMU9L42iNhPzL4UN9svkSYX5WhyWjkTtGp6jcRqRjEitQAQXMqd5M8tnNXWmkc",
  "key3": "4hdzLxzJ5zaBVhmUYfA471Wj2Qi73ekLAptMG9Wm8ssqQpsKxL6YkrWVPy4rqqogWHWsMBHZHwiZSVyGr34fFazn",
  "key4": "2vNpwnXhMzsFDUCrUUQee64eGWsd89NiEkdU6GoCGvkTbmCLGrfHvtJyYQnQQeEAwmJg5o9JoFNhu9QLiS9GgrbV",
  "key5": "5y9oCo64MzNvwPiFfhqsNWvzKgK5g6akFeE7USgmyYrj4CdyT1bH3mgM31pqwAwxvnvRCH7vuF6X8MYrqmFMnJW7",
  "key6": "2oAMx2VtymVpeydTc3YXDZVm5E2q7zQrQuNJ795fDHihob2FAyPYSSLQiJfiiBEEyDpkoB2RRuTk2UGnNn7wBwEs",
  "key7": "5FajZxRKeazpHPGBhBA6cu55dcui52M4afoyqR963xdVBtNdRGhN8mAVeHAz2snEKV5ZEsTGaMpoFLiQueoqeERD",
  "key8": "2ek3psLaRNTXVayzUHZmvYrcvDps9K5MVz2Brp7yCA4naYT2iqtzN27TL62Q7t1UrPMT19yJTmvvUJadcx4yUFcy",
  "key9": "4ggQkaoHMrHd2WxSPeJrgL7WjbkffGWwzMhRdpAoFWoJjaKBT2MEmKr3aPKkpPTaziorcCJBHhL9cKEqpmNo3Nxj",
  "key10": "qzMXbAygMLBHSzESd6WSPKhVYLdfQDM1CxLP2BqpEyNRCQohByytWT23mTac8NEFCp23AqZLUnNYipGMUNrKNc5",
  "key11": "4mrPZjWqmok1uBn1c5pERCsPaJowbQzGWSyLShBTia7TWMCczCx4QdFjXT43MsR1hSBjQtoDC1nCzqPHvBsp16SE",
  "key12": "2EgYSKtbQW4XXPb7swSuVeG1RbPZnzkeuwuV1auDiSNEXEy1pp6pigvNrqGssz4JjjLvVJVFNTkYtvyfNKhnSh2P",
  "key13": "2UeVzoBvHdXJqn6hZAHnSdZ7gUintxbnLeeBRH1B7Mn81QXdjnXFBAh1S1gjvPYRTSYzgUrwzdJkMdVWakHiKXMH",
  "key14": "31xNzD9WTCHVeo2rCGUbmvfqMWF2PTxbZbWpvLM88EdDMsozz3pskzg9MrqP56AUxT36oStka7GehhFeRTW8ssTn",
  "key15": "WWF7iYeYEE2JyM7QvmcjjpZAaKdi8CnyaDAgXxdSQ83AQRW3sXQoU7537VoVTb82xjyizeCBqUip5j2WMU2zQpZ",
  "key16": "24Qnv8cz3PkbTKGTyjBccgLjRWqsVfo1ghxTbYHb74rMnHiW7pSyVqf7a8RpJcT8yaKaaqpBQSJ1MAeAa4GNcBiF",
  "key17": "UkWxkWfJLwWy1CJvRRyLTwu5fHoQGVhNDXF9V6o9ieRWZQSbvJdSuJUpb9kNKkUAcFHNgpPNz1QKYMEjtGw1NTM",
  "key18": "4WYNuQ3k7na4STUzVnqkBhz2rrMYt3nQhPpc59yUv6Z7ckRd6LqZytsChYk9VyuKTWyjJSeq8nx4qjaGoWVfmdF",
  "key19": "5vD5zAkvY23kSUjkn9m779DCaz7PdjLqqMJPqvc5KLXqCKwLuSPWfTjQLuDFsp14cq9a6p8uUraqEZtnrhSrRUY5",
  "key20": "NfsCbaz5bsCqBuG4wNjC6YyQrSnoBmtDLuDNtC65cwhujtXPvgtpYYGc8jQzQbnAaeuGg3FXZcW1BnkLBNPNDsV",
  "key21": "4BGFrfG1shR1vXCTCRcbXH5nuFnUr2BvSjzZmcC8FtneMisgBAHzCRi59DNxe3UEtFAetJMrXEbSN52SZFD2Vd8F",
  "key22": "42DGNVFZH1WVCaEgUfbed3PqjLNDHhLP943ReMuJLeT6QNK8k8NzcAv8d9yVf3aR6MWuzHuEfSZdLZVTQgiAtft8",
  "key23": "4P2Rz52ZB3QTth7MAD1Mq8Q86U1F1x1zk5PTT6TZ2tqanee7KXiprBX5wB8g6f9YgQRNUp4KMJixeycRSRoSHbdo",
  "key24": "64vLVuM7GHbzzEftDLG2BxsXgimutBuuSuE2uvjYt1HY1sZAo57mSt6LdsUNfJpqfvZg4n9VyNWKnUsiKqhA2TDX",
  "key25": "RJwieUirKEDjPBwPq98DJAWurMVQ3typEGY1h5WKLKWNQS9n3f3FNaZNT57V1zG89HQ4RBeYtfj4gGh5Me4Qnum",
  "key26": "3jN39bbi3eG8YmyDW2CFLRMeP3AVBPY18atVNDG8ShHet9RadtPdX5YszgBjs7tGpq3hqTSyYUmZ4af3Dn2mx4Ne",
  "key27": "52jGRbgyHda2SP9noqaD5vinnKcQMZFDY7uzjkNLjPXtiYLSfcH9TtZd4EXp4JSr6MyDTx1ZNVMGQNp9eJFVXDfF",
  "key28": "2yzxiQZsHbg2edNuxwnmWH1z2TJEVTnu4WHBNJ3U6DSMvVyXxfCbFgXdWsrDpMVsxsJGQ1FKRGf95LekzsCvhYm9",
  "key29": "2e3GwXsVaojsTuoQhmETpeSNapKNfHdshkoBVvF87u1TAxjwyJXjNf1oxntY6b4kABW4S5HFzJwQ6b1txMHMssb1",
  "key30": "2ec797Z8PGzuGCj6ApoqJde7xYupjJfC1WoZGxjAFNgp66juLnQNbi22HKP7Vddird2zJW2AQgCwyPkXj4ay7XFW",
  "key31": "gxtZMo8Y9kWG2Dyq5BPCikdiMwiFrHvMDdxsfHwPvHek9K89BuZ8ZnkqBDtXpjnPBxvDCxcEypvWRyhxmFBYy74",
  "key32": "ZhucpvCgFNp2CdDRCtVCFf3pAdJFMrbQUk4gCj7ziQAUxkH7orGyNysUswzV6mBJtUhvYXMaCvwyH2S35NKTTJ3",
  "key33": "3ror9f2agH9PeGgMbVTd5h61X44Z5WFjzDqHsZpT44VJMnTs3Dun8tqzcJWuwHSquoqkWX7wiKZtUyfrFKNvJpuC",
  "key34": "5ov2RJ4MEWpGHcoSfeoqJG47aYQEfcAfwLm7SLpUV1eZc3tjgUqkXNaqtKvcojQM3yG1v6rj28e38zvLsGKsA9ka",
  "key35": "2K2Zgow3KjRxh5pngKyE4mRkmMy18DWNXojGBS2wAM3Ri5s8y5MyuzueSLmsjhav6XXfmGUfBSt8E5u8vgNskmf6",
  "key36": "X65RvVPNMmKaCEWLDco7BwxMghHaYMcTy2Yriu9Bn9eZ5ejQYkgkniyZX4hDNBA5Y354W2KbkXcNTZSasAdS6Na",
  "key37": "3unjvz9o8CdWji2XUffGgzRdHjfLeYdi4cAvJwoxkeRHskQVzii7FXANykDqZftwM7zeAgrMm7zc3QEPoL7PtJmK",
  "key38": "2fWX9UZPx62p6rLMxFHcMv2TQzHGPJiX2VgQsJuBpwpzieoFZnoFu3oYPVfXRQGuYRHR9NfYqW8gNBFmSq186YEX",
  "key39": "3oBzPXxSgud3JCWbLUR16qgp53zk7FQAYmwo6ACc7Yjk32Fnpvpb9cy77Zg16CWzV67UimXjA1b4GtB3MuPsiFST",
  "key40": "3TntfViidQHLpc4Lxo6G8gRPtSHBfk1d7PxX6DsrVgrgCzVQcr4b8HARaJAJR68CSDH2sxCsmmHpcJf7gSV3RotW",
  "key41": "29U533w2gXE8PbfMt3qFo8qzv7zhLH5ERfLpRZCokegEpep6UGVwHsMdE49Hpe3JYAJ3Gi162PVP5sdajuzVkR5d",
  "key42": "5mUjqMrLCDcGDHPJeZHQn7YVqTQvwicjtTGPTPzZq7SxGZBEYXikgY1DyEeBkzVmyvhcykCvV7BFArnJGkj5giGF"
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
