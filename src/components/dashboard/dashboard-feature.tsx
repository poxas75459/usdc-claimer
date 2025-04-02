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
    "2R3BWJ9QxUFQdXBHtAXLxwNw4eUxj7yZnBfQiX86SQx8kqxYGwGTggzLdRzd9EHt9wJZ5YubAymPaV17Ej5JoTL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fX7wxVV3qLR8DqDD6ZtSxGZzZWZRNFnYgipy1xGHK6UWdxEkumzNQ2FBGRL9CR6CJZtH2seeMd4qfhQ9v2DEcvC",
  "key1": "3r8HSMf59xtbeaQmyXCX2BLhMS8hTTSyLw4QkDbwyRSHGAbdtDH1CDkVmaJqHSxkd3cAUoCNnSSYzB5D5yRYCbYd",
  "key2": "2ZfKT5ksmMC72HpQhWJLynzJTwNWB74FqhKHPKJdsLhHSMN76f5ff8WEGon3Ftvn8HmPHNHp5zV1Ujp7i21Wpnek",
  "key3": "28gQhQTL6WVTq1B2CwtHt8AHWi7iBnwKALrQwqzM3jNYhA9NE8sNJBU9BjCT7c6Rqv1xH3kh6XJkUPWDBs1KP11m",
  "key4": "3BKQUnNyjynzzYW8cvVvHvY1QxLFZc6TqDw4zsPzM4j5cjccbGAKTvC1F5uorwNa4woSaqkdD3xRgZh6czLfZJtU",
  "key5": "g7YnhwT1sQ1k3JjW9jzJsFdYT72VbzsFmt9kTuZXydf2HYFRCA3HEKqM8yDW4rZSRqcCsMbELhW6Emsy24YCuuJ",
  "key6": "3GYexHCgm1ysGgLYJaE8nBPWdSmMZrYJDxX6UU94RRcKxbhTh7cqeYRC6hagPZhTi3s2NXNP7RJ9k6Jk5HivbYqK",
  "key7": "2dpFhYBFWqrchvo1sCHEygAHBQc5HsM3WZoreHeKxU7qZ8Yr7Y721nqHYvyBVoX8HPcUDyXqEP7cYRUxzopd3JMv",
  "key8": "5xET2YXr9eHdQm1ngUWoz1mQyVJkC3f3LeP4PbXLu9G6kzeydV8oBazc7LqToiv5Pyzw1QpkGf7Qk9CEBbWooDD8",
  "key9": "3sRoapuaXs3dvKNfjvSy1m6HS5fAeRU3EwxtAW3gwQj6zYN2e67BUtvPyo2yvTXKt8VcJDt1qFZ9gGFVEhXTCcCV",
  "key10": "4SLgfTAacHrA9SBR9JgpGjeMQC5NZAe9CcmnERtaN3Gz8FvRYv1wD8JY6iuTZJdzpB82o997ttcxM936g1YoW6iW",
  "key11": "4rRB5dUGaFz59mxd9j1uUhqUtbmdRXDoZ8UPagb8SxFQwEf9QgDm56DjtHWWBgcwymSK5uordm9kLVX8kSXYskoH",
  "key12": "5PinvzytwtYdf1gRmz49UPnZJuoWyk2jymeoRb3YHn8ks4aJrryQ9fKNi4VuHeL1NAL8fLjbUWbpWkfEAWj4jHt9",
  "key13": "Xp4ARvM4iPu3ZGtx6cHrrEQaHLAYrbjF7uv7GUV8kW1FRcprmQzi2D2MVAh529cgghEfwGtZGFtBG9xmv2KKzsP",
  "key14": "2dv11wtRCJXSgBe7MzcjgZLRDBtdupWjrzbKoJqo3NTof76yZxDkQmdGVtY4HnEapc9NsbbxzYCgzkcSzqT7egBo",
  "key15": "2WMrcQPAbGb6TNzoe3hnH1QYf6Q8y7JXrxC1tQCJcXR2K6YUB6vwBLMgoQdKScyGzr6qeWqNLrxEFw5cMEsNGjTn",
  "key16": "3Y57wcjKxrdZUT3ejBhqyvE5NMFKfVf9ZrLmLAbpBLy9WTpN1UMuhfbzVoCcL1ZDLK6NJhyTuJhqvWeJfXsdkqBK",
  "key17": "3LnKBLTrSjsjAjzhQ9mq6XPP5VNieZrsqcfeVH73mv5Y1FWsW9qpbBuoCY7xTYQuG5nDs4CZ5g1tbrrm9Xgq3BEF",
  "key18": "4fRLdB7nYUWG7yyvDsrN1bSqqQTjUQf9ajarwGtGTVs1WTh8Ex6wG6X9jkJD33x1q51hyF7zUopQq6R621ugfhs",
  "key19": "5McRth6gBhHKt4FMXBcfU8vjox9tK8L48oyS4c7T8as7QLJKXjWkE3z8YgDPaVwTS3hWuXEbJMendbatiJzZ6pfL",
  "key20": "23PUfaHMPpTKPiBCV9B4wzVBcsQW3LAtNBkCUytV4w35KadjbtSnNPbxDrrNnmm3sMHfFA1eJFU5dc5Vcy2Eskcp",
  "key21": "CfARfPwrddjivi4kd21W2BRzdH8Ji3DabiA88JcyXysPfi39WQsUbDxiThNEPhjz6L1aW4ggRNzwcXyVPBRWLuk",
  "key22": "4yc7P5yxGEKw92L9xx8SuAAMY4uEukz8SbBNt9Cvthx4f7A8rVdrLaEWoTemgzQ75wC44rmp7BjVfAUhHacEtfFw",
  "key23": "2pU4Dei6zcYnjTjyszx8Y7cpzsXpKKLSmsWnmQeubsJQ7Fg8e4j9YDCKK81NLmq7sLkrUBdSHVo6bRnNS33oDzER",
  "key24": "51FvTDsud21PmVMWX9kwsowZkRTm9TDM8yavMymBuw1YB6AjQNvWtVcSC2JMjwQbJyZq6yyFCJpc9SY2NdtUZYaw",
  "key25": "67TkhGuSwoWdW7gLboMhuwVYmwpYka18QTcXp4txMicTPpKKvzV9c4fcxY1SFvbQXSo8hByK51NXugFDMxu67DKw",
  "key26": "58c6s3CFtgKi8yuSPukxiKGp6wcFD2k9qFZDwXWDM12Gszm24foQHqyt6BK8QAba1nifvhUa2HXK4V9mEeEupSx",
  "key27": "kpkz3mwvC2t7534KQhKY834cyinXMR5HpB62qkkvULuNdvjk7Rzenry5mDptyz9ZKPSDTRM51bAuVB69PdBEaHH",
  "key28": "rd3o5Bgj3Ew27ZGWU4fSy1DPBbyCLyyDgSmGBM33BbXS6JPPSMY1xtXRmTiTzLEdLNgyYY2i8oLCjcmKomT2Vzq",
  "key29": "4yxsTfX1xGidfbAG3qsw7qh2go4mr6sqD7NAaGJNWhnHwZD5a8hy7x7m9dMdiebpaMornWSwMFWsd9HK9hN1w4eu",
  "key30": "5J7Xia8TMpgTPejWzGGsv94jkypMPHcLczjvWpN2UUceQJJso4A1dXE67zNycRQ1NahdGD61HexxAQ8yP7DENiJC",
  "key31": "K5yYXZH4dcJqjKLctVR1wsPtoLDwzty7TaPrM7UZc1PnPCmhcBw4H53d2hzXDovrX9GzuePdjXsuNb5psYpruTp",
  "key32": "gaHaA3b4XpbDHmtUsRBkZRimvJa3CTx6DY3LTmUEXC7tfqP6nkzJ8aCcwdU2kUPrwFcfSMcrF4qeCpsMkMb4R49",
  "key33": "ibyaF3UCVka2nwyTHHpwkoMMpHnKbJrr4uDZraUfLafWN4zVoGETkfNE4r2vK6P2c7iSie7FykUguVxbdhB6qt5",
  "key34": "5mw9t5zbXg8665ZhWg386Dak7xyRvXCkzVww7MG6Q2UtZ2TdhVBU5zGND8Ubm49QmP61xoaJTBBuUtcvFNccLTLQ",
  "key35": "3RFUVoQtTEQD3JGcukmH9Sm5rw6tsGzAm6d8WLm5mDRWNzGS3zfE64eVhorvx2VG9RxVNk7oUm9SDySwUmx8Vsct",
  "key36": "3bbZu6ZrNbGiK6fkmw7qFjgEJnFgyDPSxYPsfbVp3UnMvu8wwCwE2XwgDNfv35b1QXNx7hkLfbhi56zwCDKWZeWw",
  "key37": "5nBUY5T7KaygkjTWgXbiXrzocSFS8wtA6HSoksNi6JLVaUn65GwLzfBJ4m9Svmfm7YEu6q4vXTiQksXvBbhJVvj4",
  "key38": "5GKeL9QRq5fAxrHVG97ppE6A7jGx2wfM8GofLCx8e4cNZWxzDNHENgbeWp3Y8KPCF6oPHx3ygwP5oEH6kQ7UrTNz",
  "key39": "8Dy9WcezDcFvEmYPM2JuXWPuDfDq2t2w3PqU8seeMkQdFtA1oQYJYd1xGaKVaXGtVaEmTkdLkEwrRYBSCw4vaZT"
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
