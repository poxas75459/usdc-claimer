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
    "5aS5QSBx2dsr5S4rDqTj1BDqRFKs8cWLLdbZjWPrs9tUezirrVqpyZeGDYd1t25uNoMiHK5hZJVPmbNyxyFRSxJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvWhQXFUe3jSGGhS6cS8cSdWFHvdMS9ebTPMLhbqPn1UJ2vFiCm6qptAvSX8zBdm6Vgo8L3c2nNBY36yx5Grfp1",
  "key1": "29a6pvVybkKJnKcgRvJwauddZmSKTUvzFV7qkKxYFHwYqGKgqVWGVzYjEdGqoGxG9iKDBFoX1WShvf9iTurkDHFG",
  "key2": "5e1qpiLFC2vRjpqkUd2SDCfu3tdCdf9eACeNXLf6FdbCsNLpp7RJXZca6S4EzTu4NNVckfM7uaTwiiZSgbb4bzgN",
  "key3": "5jZdjQe8u9SRpb3euyLZQp5MHyprC2chkpumg8LGJgEgDD9Q27KarrJJNJfSRcXCyKepBmoeUDmpq9TjtXpAX5HV",
  "key4": "46rufa142JPPpr45vHd7TxNHuKPz6D7RWM4enxDF6Lv7xZJM6K8wr66DyxbF1pjFmXBBaM5W6eCT1cHN8oNV5FeM",
  "key5": "4qTdRMwKcKcn8X8UYqg6o8uazKL9G6m2g1pRFsJxgSugZ5zBLhSmGXWUvf1T3fMT3hVaYZp8THFo7XBJjgrA55oY",
  "key6": "3v1wBN68YWLxbLMKGscJsF8rgjEqDDd4RKwiUTH186jWcAuRrgpiqPm7QkVcN3MUCLGWVKb3cCciqZGct7oSJd7e",
  "key7": "65CBhchAR2YzmrtdAX2aoKJT9kkjRyt5RXMFYgFumR8PQbrwq3oBydbjRDnxRUisxRdE57tEWUrmTnK1WeDrkxzN",
  "key8": "53JnExpux27h93e8HSXsHECpTiyuD2dcbCJz1ChMWGoRf4pnaLTZXTMeZkrqqfm6VL4gcoc3JfMZuPep2FPcQJSd",
  "key9": "NSZGDP4BgXjG1aovro9FXxRnyKnhHaNk8ozE2jxCzp5Di8wBHDBGvVSTkUqpieJnKNZ2sEewqZp1y5pUyLFGHrP",
  "key10": "4o9fCXbyjcDAV9e8PtSXW8ZpLz2vvstLACHKBMh2bDKda1j22bduAj1ZFco8D8Gdm8rw7VHNvvqYYF9tL2M5YuRy",
  "key11": "4Bmjv7pi7zDpt1Lx5Hit3rcPbyMbZ8vmKXjvNL2cjkW5RcWVRCAc3weAMTT4Tc6LcZ6xwUrPYbj86NGRjorC3T3A",
  "key12": "2M9gfr9JfhwsLNP1Y7SpehVLEaM6Tn9tiwBcJZSNUfo1t5xqSLRnqDyK2Qzot9hPxaQq5B53Y5zi9rePDS6pbbmM",
  "key13": "7uJmnMaLYYbAsfoJmcAbUMwUkEQzwuDRgTvxGV4WGath9ncAZWeL2hnCKaspQVUmA9i49H2RaCZaro9fftRkkvX",
  "key14": "3CsGsEjkM3tmxdKSHbe1kWWQPEizP5qj28djQKNBVz7Yn5KPAJZDcvfiLDMnHmiZQ2dzc5UJG1ZVnYowyBCSmuqP",
  "key15": "WTxnaY6PaYvWksfeCcfAPvXwUC11N3ePsPn8fucNv9jFZ85LBYwEriCwiYuJunWzb22ppTXhv4PT5XFJs8Tf2Qc",
  "key16": "xzxmFU9RmEDJ8FMVQC3LUCnrkoNaMe4yngmHvivzF7KMDqeHuVsjJ7qh1ttJMRoXmqoq3srddByFGbG4wcMv3NR",
  "key17": "7jACuU4eod8NyixZqzVFzXAasYDyeYqiyiqCSbBxfvWwf2t1qUF5WxgXmGqmaP1XBz6rARSaNNz1QD7vUmnTMVe",
  "key18": "Pjw8CrQbWU9YxEybF7cNXm2WE9z2YKHP2kgudxRzDpLM7iNp451eUUbuku7XKM6tdnHMGPk4izrEqAyziqu8AJo",
  "key19": "xaeM5DkqD5APNJQkjgdfga8WiJMAmo3dcasuymdNdchucrZq4RamnnrpfiNpmgF6pB2DUBJzq5fsm48tL3Hti82",
  "key20": "4rr3Q68fZCBT7NAqKyr5ZbqnK4ShG2SbinfdMTWxkc2nixhPWoe5aHWkfTkSD1buFVvZaQASZL2Poaz46D8Vb4m6",
  "key21": "2CoEAsz8cpkeYFJcB6MbqzyR7BESjo3LmfZnrE56H9naUafH9VVN9UN98MptBFgihHdK3MwwWRyuQsn4PBuysxjc",
  "key22": "awXPxSPwxg5W8vUGUXcevTSTNCaep1hVSuGQFXnQP8tmp1Sqi1M7HXip1bnTgRF5BkncThUgrsfyYwgfL3vNWLG",
  "key23": "49FRcMBoGeeqC7tNEaZkxsZzeeLZJaHgq7rtzTCqW76VBsYDsmYvV7UYEsYnrbbzf4n7NA6yYpTcTBQXAUBpZ8PA",
  "key24": "2EHRJNjSeSRQGN2F5yVu2ycZYnAhELguCw7zbUoAW82MsNFnB6hoWFwC64XNnbWZg6FsFDnHV985Loxf1Xo33wqp",
  "key25": "5PVcYqJp84hyawrvgT1VHnqJRcTQQyPfJmrLPQJ7G4dxV7c44JDkYJ8XR7MGqQVGLurNoR8dUSxA66ha5E8wkmMt",
  "key26": "3T61hCLa5k4CS6DytoyY9eWL3kN9G24T1oKgDBCx8tiDiK7eQTUjEm5LnhPuK7B9RsJChuBkF2qTpgT2XTqwAa9j",
  "key27": "qTbyT8qZLv1nPxdK3NSiMkHUW9LSj6a3n4ahVQX9fKCwLtfJFeqgsC5iDFqtaU2ufz1nsqQ9XzQNe8gYXk5zbbJ",
  "key28": "444yoJrUL3gXNPeXFfKki4JSM1WyqBte7hFx8Ajj3fMVS9DtA2RiRDFQHxVLJmvUZTxfAW2cWEJ2KXmKZpeAVbVo",
  "key29": "d99g8GxESMqvDNjtdrYKF9vT3Ldjfb3eAs9Wd4hq8g2mmruRMhykYdp2mamgCkzoePn5KuX4h6GJPEtjcepZu57",
  "key30": "3FmeD6bobUjtBmXHZsNCxeM4wShVFytk6pKLuQcrzAo49QifPX9q6X2RiNWsJ44SMWmYVxHFYw7xKTLRo5x1v8Rd",
  "key31": "2PvtgDwhawE2kqqgWhm319SNmeGuNc8BMvPLVKCBmFokdyJG6pzL1tjczhvmCr3EvwtCpLzS3wrZcoX8z9yrANBp",
  "key32": "qpcQNRMsydK6XyCcXcWaxiAcUjSuUHCXtkchz4i8fNafxxwbih8nzJGDLrDCtiE1Qn8oeZMFRSfnVDueQTiuw6H"
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
