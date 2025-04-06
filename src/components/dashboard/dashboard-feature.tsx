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
    "4UW6QFi5rRFVZCG7faXEKTTFWdeux6jJsPMSMB3CHrhJRJieydzrAuMGPrXSuaDvM4qXK3ci7oPESBVKjAoV1P8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3HdxNywQ4MShrKLqeqQZQCABXFS3YrauXfebVRCzmt1Xsz5yD9wwBvqpufUmBzPZjSKZcHjHqPLjSeVgwyTN7g",
  "key1": "Bandpof5J2Kh3FgY2RevY1aemDXExZk1GQQVgxKjVpszPzEdPPTVKTpvNynQN81DgpNvQXuLGNBqP2gsPYkLZqL",
  "key2": "3oVGd8U24QgwvFzMJdAy9TgiutegbqUUZUSiXBo7Q6sEcSxb9uV8QDwYh76QGTQqn2UHYKZPnUpTmETGXyweNQyX",
  "key3": "5JxBQrP2NCMmWX9i2Zch5KkNN8JMxeUAY3L9TY8uPmc7bsGhhyhsxuhRXc5NuRnHNaojtf548UMToR3HmqX8Kn5F",
  "key4": "5URyS8wSoBdcUU7YEmMq9vZY44AbA1koHjW7RZa1rXxLwCiATQWetPuNsGAJmZNKdUy2MK2xDDqGbWNDCRJSkYRY",
  "key5": "4T4Q5HuTVKnkegrAHqUDnbMEoSrFMHp5pKFRPUJtuhC7GYT1L3L2Utus2AjoecgAW6axGEetXoY3oim75aoEBQ8n",
  "key6": "4LHn7vA8Kp2jyw8ZXWWCn9MWqWFsGL9fRuGbsdrjfkFm6ykbBFTDafHbGYgBLECscfxnkg6vm4kndzMSJE7Bh3f9",
  "key7": "23opPdYGBteFeNGZt9h5mB8KyZDC89LtTNskUCrtPqfBTwSLpat8zhQgbHPYe5cWmJAPG4wAnecy5FBipcnAwrv6",
  "key8": "8bDp2TMuCCAVfQNH4duhwmtYWDHLchWo5wvqT5AE5LZ3mb7hv9pWGUMbkoxAFDVbnof9oWtffDDAyYhQkQZACD2",
  "key9": "wE5n3zDtTFDzxeSaUkPX8ssm1MbzvNJNWZZK7JLNy4uNW3RZy2Cidr5sRqTdbM64xzbYBsxePjdL3WyeSAXmRo8",
  "key10": "6hXu8ChKqcdRckjajv8GSaTZ5Lj9uuCUDU7LHZuuWeLUtSM7vnwVeLEer7DZBicwe5UbR7rT2bLhrjotPh5WbcM",
  "key11": "FaR9bPM5yL7YABotSbSJQzuLKzbrKEw3fCh1Vi9wUaixdnQPZ3vTv8rxW2H3ynZr2dYFo6iV6E2k3fGmuH22mnE",
  "key12": "5cmMDieSZyNJuxF3gUuA1dcYtny1FP3NVnZHMu55PyYqENatSy2sLB7e81bmcQttzfzetcdgL1UYz4qmkorNHHb",
  "key13": "2XE4gPzbFJ9e953pZB5D93iCrr2gaEovLKgdwswzE3eXmSgyc6yByPQDUGWjGgxhBYT8jFYWBPUTC2dED45ogrwv",
  "key14": "35q4DASDiLwvso4w3dsWtacGzMR6SjZEsBxY36yo54rE8asD2ywfLWPEPbmu9W5BRsBxvS22g5Pzhjo8GNfyhgeK",
  "key15": "2UYRX1qfsV71ytd2BetZMSPfwxcSScoRaqfGvLmm7tXTvmCfxf6rTDMmmRcpnXXKZvo8rUrTphvcF8V6wp9TWk6c",
  "key16": "4ACGK1aKjQQo2v1vBBd6TE9zNvv2GQMZSPMTiBF67At9xJEwSjHa9AgHuR63ivuqrYs3oGhuZsp4AxaBwgVUDKZG",
  "key17": "saDCKP92479UB7GcioqDYnumuQkdJJy4m3QqwpWgKmCQySHv5mwuxAo1EfXeoZXV34vRmTzNWeacZxUJ2SRxKyL",
  "key18": "3PJFab3vhsneVzfbzHt6ntvBSSqpAHr9G5DYCDBFqWMKS6AbCjpCNsGVCytHGKMbTB5542MfGp5Uu92YdooyJrxc",
  "key19": "3btKgnSrPTQHuY8dtRLnrRfWFiBLpCDLkMk61w3aaQm82mqWSZjormeGxRqJyxdUj2qdgfuxzX8Tgboih3BQSRK6",
  "key20": "3AsY9utMueYLeuSaaqMGoy3fTEUwy5SzzatepRt5BE4ivZwupJ2zq7L3tUeSfjsLR8XkguDhBnv1B7kPFiH3sQyE",
  "key21": "8SJTjmEmRur6Pk6hqszAWQcPV27x414KvuzZDCGfFDYJNb5UK5nLtjaqxYKKBsWkHPWFgDN7uqPdNetjb33MsYQ",
  "key22": "fboqZcExMsVDkXfkCdRb9Vp57akpkEEHkk8v68dT5Zx7A8BKSRXhoGPFU36piARoHeMa2pU4RTRkM9fkemNcGik",
  "key23": "3gDT2b3dVWnPPCpxw6QZG6WAHP2sqMY2qqKUHXrHzVLQ8S2AX3ZtdHwNUSn8f3e9g5H48e464wnVYbUQuWgRhUK7",
  "key24": "2SpKRHgue3jfNP5nvMEobfLacVxQPWrGk18dJEPwZzTr4VsS572NPxxv8Rh6YvXw5vd4uB4b73zoS33r2M2ZgmKb",
  "key25": "5KErF9TGjYkg5daCF6BsjuP5d5FpRvasigV79SChYuTwbAygTAqJgURCqiwp4es1J7rb766FKmPZbzPvf598TqtC",
  "key26": "5V1RdwDVpuko4Q8RhCLeocs93mCm3Rov1uCX51fqjDeFMpgTd5QsXLt88P8U79i26KxYcozAMRuxSjMy2b3NhM4e",
  "key27": "5arueuQhMb6srkJ7aTHi1DnESphBEDFLJLnULWwwQqB6f2dFfa9VBCRgxrjFTa65ghrE72dz8KU6YW5QoBrg5euG",
  "key28": "RVoeKWV5DgS1RyRC4DWdMvZGjdBhs8vYhByvpDDhKs1HmasdN2Rn96gQr7KqX7KGLhMc1PQpT4d7k5TCQNYS4hG",
  "key29": "FwRe6zYdZEfHsYpQAisZyij6VootYpFWaU4cJ641KwGS9aZjJMeCpyvSmrSpzScX5KJcs4zxaPnjUDHRUXWipuo",
  "key30": "5eA5SJjpC5tRWTKwSYF1RhqxhboMbkqwaUDfVJeiwifRkBJEBxsBNMTa76hwkmfMKQnPtHXPm9sxaePda1oDVj7A",
  "key31": "36cEuvBcmNHVsnzpnVi1F2sL9UaQS2oxbqm6mzkbTEf49xsWM1TaABFakRhHX8hF4FnY4awBkQZsFgHZDwSYduTw",
  "key32": "3BAR231Qf22zqNnmeo74oLKCcfiY7kVj3d7fBCAz1wojcQ6mU3KaNVVokveTdJNHmN1oQwVkmQ9gcGf2fTD4k61A",
  "key33": "3eArFHG1agJQRFZj12auoLCzkko7K6sMwQE1sEuZvN11wu2Yxb7Mc8YvtzQakPG1DRBpnAiuSjn3g9wMQGqK71Be",
  "key34": "5PutFFagjwkwxzy47RxBNNMdA4wicwJx1Q6HNyK5N6SLDTmgmV3CrydsEsSwJsJpQ29kRhBVDxnD9CQuf5px8VyM"
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
