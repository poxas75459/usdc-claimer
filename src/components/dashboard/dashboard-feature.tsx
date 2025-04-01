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
    "3pss8voGSEYF1mqpRVP9fNsv55u1dZGYd268MkLqiMtAycfhLuZ82dxQc7kHM9ABJSeQbYHqL9Unq1x1DdJWKvob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uAfRXfGELeT73onfU2Wh6qiksSRyHK4L3c5ts9xYHA68bXe4wKBfgP9p2JBtQU1wendYVvBuLVBf7TAysniesFG",
  "key1": "5fsHNM921eFPaQuk7CjEsPwqvY7tthpNvxFtKrcQ3fiSaXJH2iXL5kDsLKLS6mY5c9Q1uzHyVg3RdkrrU3DipCM2",
  "key2": "27d4vjYtbu3UZyq5AzRSLEvSLDZA9Ebrp4RfLvd6FBEGiYN4TrgpaZpz9nad9pMCBxnA4tyCZM1VzLGRh1yKEduw",
  "key3": "5E2jwwnFM9v8GjtVZgRTnfD3PKfsNu9HEfcR1Nf6izEHNN5ZEQLP4GXfq8fD1bWHtsbQxE9cX3zgHaLMRJZDioCN",
  "key4": "4Qc1aAvNTkLJbGEfN8RtbXt7HugKQUkXSCSRb791W8eL3CJtFfVwnkcwDP2Q3KGCUApSRip4mAheRAbPQuhBJ4Ht",
  "key5": "35SM1DW239gzpy7scPkNu4ciLsM3QmJYxwTK5bjjB5ChTQCBVp99DiqtpHYvQpuyCf2uqzuieRNaweaKVHcgnupF",
  "key6": "3gVn3gKsB9D8PBCqG39pCY8LEWaXVFK835TcYPGCEenxM45pUK93qStTQgdN8jU233ELsRe9TVNA9Lp9mXC1cZNP",
  "key7": "2Uh8Lp2tYnbJdfrpeeRzMB8L1p7ZgcatmRCoR5TgkiiJSSbqDdJDdLDPtwhiQJR3Wnya3wJvjUiybK3Php825hv6",
  "key8": "4P4jqPvS6QgYwthY8hWCrc3ss6XL2cMBgQ348dFzdDB2GZGQTHMRQ82XnVctbNFMgo3WZNAT66NMr6bfRdAE2Xrx",
  "key9": "3ksyJH1wUFkcUhe8FYFXqrXVBWxhWrRh9MinJgrdCPBTwiLUns4ejbbzBmjYFhp6SSwSMAvKn1poqpfqyJWgfMPd",
  "key10": "5Zkhc76PRtCBAUB37TeuavePDetF665dug5qS1hrpRy7zFbmMPQW2VvupErMLA8qe6fv9LLiNTUd5DwjkrQw5gHb",
  "key11": "2WActU26n1SjJnDG8yG5EtUewVyfrFnymc2S8KA2agvDf7qnohEzFUmAHvYS4CK2Yo1B6kJ693VVj5LnUBzpbUBk",
  "key12": "5XMz2hDT62Zprd81upGdyFdYTx5nGPkAgeseQpMmryix7rxcUqLnethcbf3uBWMgiNsHH7xfbrEpZFXuFs7vzLRb",
  "key13": "w6cjhMFrfitbGBjSHdqAvLZimr1ubCukdxuWueKkbWS374WMHQrfdg3FifDHuVhGru7TVQ6upU4vM45ew97bhYk",
  "key14": "4YPjx8dQWBKPQnnfwiSzLgrPm9oGFEELfooL1QpuYYuEL5sWHHd4u2fYv88YuZGzpujwVXWxE67S3KQ8hCxKF14z",
  "key15": "53qmeUoPmnsdTMsBybbQcUUoo7s9yRWsm6gWBt6yTtokiv73FxXdBnriEJdAMRX1gZH1KViRB5N7B9yEGZJrCbVE",
  "key16": "6WJJPBHTMRL27utLoiJnqDA3Le2N1hVXHoYkv8BftXwTvivioWFkUgRuosvuYamob137Q5t25uAScPAzx31pJf2",
  "key17": "ziqym7V1nereaY8yqzJL4kXfkPfFUgb75wKxSYb8MaPpVTB9WyNjYLzPd36XvaK4BssfhS89fTQvkcAJp1z1Mev",
  "key18": "2yevTvfbi1Hzwuo7Vo1Y6anxm5tNftQKD2wyyJ7KUb4fbp7HzSBxHD7UrigfZXmh7D2VE2iEMQ2cdfMZnu6t1v4K",
  "key19": "2sLhsrv3ZnQL1B9gRVSSKLiCJrYG63zpvqDHnkdSGjfaFV6B2K2uBkZP8VJZwTxTTMyQJSBtdu3qPgasHXzvnnbt",
  "key20": "4YUjzTEFnujmAJ5SAhdrddjCHVAF5bHaopw8RmVxx8JJgvLgNXEnCb8iLnZDUmoNpAdJZq4Mg5HGFE3d56Qvpm6s",
  "key21": "4VYpM39Wa7a9nVMqF8VqVDnybMgpaaToAgs6gWJcwWTH52WM1uU3StTNES7DvcMTVZVA2VKQtQY78ax8pPaeVhg3",
  "key22": "52uwEUM2kVByt2zWDzxSz4bgqqXCDYJSKe2Gvxh7ST6A1czDC5mw8fxyCGQWBJc3rAmQdb7Zt9Bprg3mZj6mqpew",
  "key23": "4P5Gc3JxCoH2Sybr7A8gzF2QJL5o76YxqfwAUS8ihYWV7i4A54MY2GVDLA6ShedbtsZgPBqUKppZ6emoGTTV1Jgb",
  "key24": "2v6WQrzEmCThz1UHumB3fyT7JohdrPSQqb4emfU9wbcpQjVoyN2xNPJ4TGKVzS7GwCfMzaxsV5m18rLazHE3QcW8",
  "key25": "spcfHfVHmxoPrG3Y2cBoKHQmSKs2bLTkGLHJ26kNkmA5coy72CRGNDZZFTt36Q1fpJwnYDBXN8vT3zsHgZyUCGt",
  "key26": "4ubqU1NnJjyGrmQsnzkfv4sLHAaZSufSNTFqV3Vsr4ZK9rZk2GsbV21wkpXTHipe4Z1NYf9E8inV8JV7KDiPXCTh",
  "key27": "EeHK4feKfXPQytgJGbM9EcQMr3M27v9yRJm799FJtLsEV6NxAq59dZuztFpa6rDPwmS7BZpeQkLEyk373n2mNQW",
  "key28": "36mmosqLV4bZWKQNz2ADN2jXcEa6o2jMmXjnXj7kQtv9HsYxtVxN94T4r94kTNFt6euPzXQ3W5JPBXHUPovTQp2r",
  "key29": "4jq6Yi4moXTR6S5vTw6Xr4DmBV3jecRcZ9CAZygRQpYEvM8qsBoa7QA3njBvTyVKR6aUJLnpPVf8BetXfD4AdFcS",
  "key30": "2q7rbr9P47dC4WshbnV1kbCoqYaXqv2ZwHDeZs3r1KULTQUCNZeiqUyWNYKVUEzN56azemo6dUsz4mzu2yTeXQcn",
  "key31": "5vBCgSiZGZgBxaCBumXkqQvaQFWm1uaw4Y6t53YncyHkLV57WMea9pbW8GWkj4BrRY6ZuRB7ZPFUBShNSu6Q1jd5",
  "key32": "4mGoiqFyLN3HmGVYV9u9j5y1imvYnQYLn1vcJEdp9nJmbXpeci1G2Xw9F5KZubJZB5GRTNoEx8wYgVehHBtXhuR5",
  "key33": "4HJ1B81rGFKujcX8MaLWqTwPCxrJqkAyk6wKpWzWd7t6PmsRcmZSNrjMksVh6w1eFBE3NghAhaGdxmjw2QbZd4s6",
  "key34": "34itB9cJBnE9aJoCnmaU1YP3GbrVXuFcj5uxhqTwyaRd26nE3SA2D2ug2UBXmFn3xyyDpAvtmi1qjMsWmBfKoWGj",
  "key35": "YVffJfjU5cmZiRFA5MQS2smckvUMzyxJpMUbENmtaLHFP92wFhG6CmPHMyCDfumEhQZ5yBTuhweWgwNUt1pYcr7",
  "key36": "vJqMGkSiVooiPmCKiT2avpBHKqUAocEhrAQ475EsdScw4iEi797Xuimux2bXYUxfWeU4QH2nphCE16Qj8rvQpw1",
  "key37": "3Yeq4w1soc2Ro3mM8huejQejsVAUXUoP7pvrLBJJkfo8131bgAFe7bUNhcDvhyvsDx6qrNeuYdTjDtN148hc1AV6",
  "key38": "2W9QTA7o43StJnMrVXianGnuYcd7iaYMRBinXQKRjXhjUCE9bYE2tm4dVPSaoyYJzF8dys1YUKx4we2YbJE2BizG",
  "key39": "2HBLcRDqiuM9N3zGeHzTqqoNwZpEMGmoS9VEUBE24rA8D6ZUt4dw4MfzWnJvT4hxQbRDDr1LpVUVudCoSJhhAuVf"
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
