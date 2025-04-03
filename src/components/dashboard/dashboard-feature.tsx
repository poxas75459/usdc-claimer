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
    "QpR2d7TFL8atux4jGzPbxVP9q9Kc9NZRjEM6PHNZ1vb3KREaDRb2rdUsLYRpAvnamrQjYrHQoXCfwj8GeNmyb1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWoqoYyfTrt3Y4rFaB3e5G8pfkkpEYYwpAdi78AyeBGxa9mioxfG1aRW8jSZdSq9wuNyxLe5qi3rNcDiCcmDVNm",
  "key1": "56aJMguYS3XCaNPFprVVCL1FHBNzVSd7Q2kHajNCZFC5zbAA2NkLLZFX7i8x9iN7soRKWZk3FkGnhSTBCxpGW9GV",
  "key2": "4QUrt9uFvvUXwDf9GRfsyX1cCR3L8CCExvAaNorCVrGZMiSqQWd1F83MUx4esrMEaAKH8mUTbCsnSL8vDmJ3wHou",
  "key3": "Z2xN1pLLPxSP5Xd4HhUacqSRKWEqUJKxkSiUkTGfEk9L9cotMQmiUwgsqTGf8bzVHZvrguVErUHB9pN8Vk6GH1M",
  "key4": "4HNDd773VrE9pY3G6PBwfE7v6hNTjZbyuLnGD2Ehts9SVwf4f9qQHVXMdspaYU18DgFpyrhaMivYSfyVaNEhV8t1",
  "key5": "2Ve1FkdF7arRSkHQgzgnxjHBznrufWBTeSAs5eaDXXn4iV5fBYUrmqpF9JUXmUTnRe3sqZxsPFHQ6v7k8niXXtsg",
  "key6": "66QRDo9xgEhTJBix2j1uM5HCZvQZCcSydYBKicZ8aqo4WMXPjZu9VUbbfLBCVWn8tsocShWFJQW1GV3k6Cn3XGeB",
  "key7": "2WAte4eqQgJfU48tqN7VJ3Efz5mojR1YKinCMzuobUWfUxMSTDfz5Voh8FUw9NKoeBzVCoMdAmHEeS6DYMgToEk5",
  "key8": "4JL1qZXjPMwn8XBjCQamHgCfmihuJnYU5bstawAWe1XqCRwhVqrfKvPxHUkFMNWF3ta42zgiEWDdZwKcrDte9xyc",
  "key9": "5t1JCvKnDqEmLNvCNUQLv8gUDyumTgPvMaiDryaPk4Wi2KUvSSzQkfExrMfRFT4RZoDoUeHGdUNwnhRH28bFq8MU",
  "key10": "wEsDYmpf7KpKDhFG9xh7nz3dHGqu5aov42sK7trc2RaY6kKQKvyvaGGBmUXTv6XgotyFdARkHUKypHdSmUbJWKR",
  "key11": "2y8us1BFbZNMuZm7r5hKjRHjTPfd6ZZADtc6ak7y8Cfk6szmVUHQf3USA35xepkMMriaJZjVUCtK1qAqJzWnW2fW",
  "key12": "we4FY85iyUAvEDSfBnuLN4zCMb8qdfj6dNBnuCLpTubS71zgCTx8XGQFBH9LgK6YwEFgdTaxduadsn2SAQa2v4d",
  "key13": "5cEc2BCGrMza3QZLA19ckniJmDpayJYUfgbCMLYaWrXuZB4ViH3UDqucdjKPLqef6GDWnkSJTrUZ3Lw6S6EBqBrM",
  "key14": "4h7Pykd1iNxnNCB6Uk9cLjLEhFu62hPtLYU5RyrBwxFcraYRNwbKqARZrJ6PyxSKJorP47U4zW5vK2LnjKWoJayY",
  "key15": "3Tr8pxQVTtYKX3NE9DpPzeeGFxsS3fjDJna5GExxLbNz4uDPpJ6E87K7Qx8P2iHJx4UNhzkRam6iFkUQUeeWoctP",
  "key16": "3GfpsQiNDm5Yo7nnmez1B5wahXCqgjBH7DLuJr139F6pstc6StDbtXkMoMu7qWnjaNXTkabQcoMQA3vFxTWudKAj",
  "key17": "2Sosj75Arf4WySbWKhMt19TkTnuHzUF4QML7BVTpMp9qqc8CUTkUNEjZEbByWim4jSwRjC57nCynTxqiM4ThwkvC",
  "key18": "sMC5CFN9eex46P3ji5G8D7udMT2GnMGRNeAzoPZ5sQoMzbBWJct8J8Rkghisd8g3G6MqQf1DQLT5JuhDCCUb1dB",
  "key19": "27Y5iPyphaNVNs2Z4MTLi64eCE1vYMAYEp144RLFcsLBLW8Tpwd6pJb2jexMxrAnCR3cBKCPBKD1QkfBXm7q2bA1",
  "key20": "58rSz1Kr5hyfGB7YiuW4yFbKqrLuo7QQNKg3JTv8ftT2QkKXTfMBHQS3pwPLw9qbqLGFnk4Lw1UcUr8f4SLnXJMq",
  "key21": "28zPy87uXDmCz2TN2wcEPT4y7qbTJb46e9YQGDdnThtv1pn5mB21E2bDAAMzcMcB3GfkYWpt6rjwNAGChpvoxWCF",
  "key22": "4i4xHmkUpvjnEtn4RH2oUz5aetZSKe4MpypxEcWKtzp1pSbroavtyyPSNzqHfFeCqQvdRNeH91p5bRT86jBTVkNq",
  "key23": "58gMVF7ezStFTeF3fNj5b2wXwZvUbqWGtJoZaQiLyVuRtVrysEnxyMJdRgxVQ3wAy34orRcoUJFtJaRVQgAM1FbU",
  "key24": "NaVQQopRrkgeWFzPJoMFndte6rjkR8Lf1DVt7JxXKFgU8bpvsApyLygf2nXBPHQfnjeLLipestGdvEuEtTxeDLe",
  "key25": "4JePavwsupzjq6tMCH5ZpoUAZ2cwZucmaD2e6tQaq1JSGkvmUxzyySTjxstVnyR7nQxyrNSM9PgMonk49AiboESr",
  "key26": "3oyMX7QEv73LNW1maboiBZBSmZmW6aLnLtGGF53VVst3dhJMitNiQZJuZpuz9NBYgAKA4h1svtUqW4K7vLpAGCPY",
  "key27": "FKRb5sH7y2Aw19d6Pjjb6p7nVTr7ATyTvdpetQxfP3pjqA8N3cWoa7M1dCNsU11fvCHQbNLgabKyCh1KfNcpFfT",
  "key28": "2gsqcvHhosmiUGdf4ye6G32kVg2Z4Z5FRMecuKArjmnH3WD23rb7pxEq8qjiNYQhtRPbhSKutnTNSN9GyudGUUFW",
  "key29": "45CWPUHEs39WpchUsEbDLM8uwCb2EEdtjgPWauH2nyk64PwKntKtyhCnxxDET43P9u58xVy3jFH96WkMzeNPD4KB",
  "key30": "4Zsctqnqn4prrPi3Z9uaKQYUGQ2YJUFn8rckCDiDUSLBMKmb2GTuwrQj1iNzwWtPySMDYccmtogs1EPwzy7uHTUT",
  "key31": "248aNnCw44ZUu25BkZcShRDyFh2qoVUVqXN5g8rPn15YEXRVritAcXDfydC8eRNj9Ua3YJxvn1udHakoU3m62eh3",
  "key32": "4aQAfdCt3PEsz6CbmTiJihguzWTYksqjqZA7pxWubS8onyd96Wc9SunP61VZvTgW8VAxqfBx6JLf7dgkasKTk7yt",
  "key33": "5PmpiKX6xjrgVKvzqykZJijJetACRSziJv8FgZ4p7GFQjjsGvUghofHT1UACWYqVHCGjgQrS385Gvqc1gzM9MyXp",
  "key34": "2mzEfmX3CgVE7UQppvMg4ZvycixG3h4f5SSCaE1meCVFdZq5w7FA2kHCdR9Tnx5BBr89Ld9zuUfLUyWHoPmRdKXg",
  "key35": "3cmiBop6t1fRh7pS3g8TgiCowt4sT6SJ6kCseDsSW7oX37yqWP3a2TAyvtnGCJhpqrzAzVn9HgrvGYWEQMgWkMZP",
  "key36": "e9Mh5aBuAqzL9SczkN5M6Q8mCFvR8ZMZRQRSYibTrhYCmZwNjCb9YHXMJYVgFVjWgiKHEyQRsSS3bkLE36Ku8tt"
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
