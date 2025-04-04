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
    "G8gDSpPkm8wPtL5Gt21UbhCuj1iWFReS3CszF1Qcnn3WNmAT3djGnwBmnLAmLa7NPwkdFbYYerZnWWksdvYWupM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkrbWzaCbovj2WTooPtvX8RFAaCGfocXmTNwawGDDLVCn7ErANtTaRDnyGCQ7ENogQZMpVUENJfJNfXvo7xfXxk",
  "key1": "mv3mWVERpBJXswkPM1VbCrZ1dLNyZuTqwbYmUFLLSWjW6jLGQpxhsmhLvQSBiz4LzKaZVvfRDiM9VH2v7QH1v1W",
  "key2": "F8BKTBB23QizuPDnYgBgFo4Myuc4s3H8kFQoNrLpsbKa8yp9gk7RvajK2jvPFkUFtQGiEm47CTz54AcZPgpSTKz",
  "key3": "PkjGMgaenWAVkRXhbHjHzZw8cgPJVG64oVRRZrH9E4ek8H9jBMvWSk3kXerVcrbwUcyVcEdEmsvdmbhfLmGmLmE",
  "key4": "3jNy6GgnaeRq7YKgZy16MXiZnEyXZA7F5M9cnDTtZDGAeAME3v9XVByhoxLK4e6RGAuJA7YdCseX1GV9nUk4RX4e",
  "key5": "31taYDLAyaPWpofuNTwMmxCUaV3XKp38gvursJJen7LB955cfVMVKE3P55NUJ1X28bX71TbXUtp6TKtcuqXzNCiq",
  "key6": "4Tgciu3ARnmQan3cgW6rtTuKoNxK8oLEJWYYbiZydscSmQxvHhdrZ3zNU6MDzFcJfn9aE4DBXvmpb8Taur34UghB",
  "key7": "hx188DcN1fdzvrvwK5Fq2YctV7u7qGuALAfLS3YR8iYTcqNkrS4PMGRRSzcEUK1xs1BQ3xYxYC6cq8zNNJKWKF3",
  "key8": "3RLLioRJTmukodbE16Ryzem62E3or3e6rwujhgLc8fNx1L6gijkoXWtdvGHEEXhDi1mbrDhRuEF7aJjp9a9FGBWN",
  "key9": "2NFqsRqqKGpBKHkL6mEYqRo5Yyut7BXCevK9GLmvFLjAtbm61kkgqRSP32qadskeoBDm3ZqB8Ba4KfDvshXqa6US",
  "key10": "2yLqraAhUqSZrsmTxZ7MHewte9jyNkUtY6MeFbrGv99cCmS6NUXaSogqRJt9sjJrLqpBSii8nAYR2BGQ8Qmg2mac",
  "key11": "4WuorGxMWXbk84kyRNhq2LEXaDGG2drFfWHjExsHdPwsngcJpMoj5H96E6okxbPbX4fp68dFbDzmoCQMAFQowBGU",
  "key12": "38QQdfW1c8EgLcRWQjQ3uRXd94392fgHewHZRnGP66E7JqLR3fFY7Up1GNQd5CNvbU6FNQHhBchSiMuAczmWY2UE",
  "key13": "4C84N11F8Wkzq3VnqisbPuVScBdhP8DUvDdPebZNjdtRrasQnGRdtnADSSL3oxZYKRKRngZiZBuLSv2nkbf5GrZY",
  "key14": "FVtjhEwS1okesWLMpAEJV67MgQZwp3wVaqWHXEsQHZaCShouyYWrqkjWobHNS9m2toGnCkLT6RXeC8B8GHBVTan",
  "key15": "3Tw5mfQNyHzj7PxRN2NZVJ3BnYQaFBupLMhxQevWLPq9gpvo7whT988ibdrGwhwu7K7cVdBwVL9MexLb6hW5sJjY",
  "key16": "63QznP9xmTbxNsumsVhUpLiFtFVvpHjAsT9mZaQ2AEHRJkf9fY4KEVkYKe5Vq7joAs4wjP8XLRQrYQQPaa9RgRp",
  "key17": "52XUNj7vtSsdwsB1BGZX9qGmGfBXuavnq8mzqw7yoif4jDop3TBoMGVuD3QXZSWNmVzcBo42DWR7BAUFGjHEY4S3",
  "key18": "4Qtz1g4ud6i4KPfK2qNX4w84u4us31WD4dbJGryvyed9hHmQufrRxdjp9brK7bmqmAYRh7sp5RD2Yzxh5sLU2v9s",
  "key19": "3Nba6LRwXvtmW3c6N64ydBHAqmmUFno54YbkHRpR2PLsudRnur3CVUhbVCn18LgD2b4EyjJ6hrL8TNPQqqufgvrh",
  "key20": "2csgNMMM5wYEDgzVfKBwvQGKXmPmWUSADPfeDGRDpt8gx2mq9mfnCfj1TM3CYYpTBXGjnJdw6nU6YfpdzZeQvtQG",
  "key21": "VvYYgxESoXPie894XMbnD9ig6ARNqdXRYTNxn4BVNwGSiyyG8Xh2qPespLbVEHhV5G7CjYwTN7kHMsLfJ5n5cgT",
  "key22": "4zrkZ3etUXWBmApD2cJCuxcFjpqqPkNbA3Yp8dCKHqGWU5ioTFGLLqB8ESPCixjNkxsftQgKqFsqPQgZhDQPTnkh",
  "key23": "4V8idsMtcEjK1V6iW2zCf6itumruuWUMvQn1nuGaANFHSbbFyk3ehMTHZf6ev9RBeM2ghB5f5fWgruPZR6mHdjAA",
  "key24": "4AVf5WvfstoTFuBmemoYCRqD2Y1yo83Z2BoVfjf4cwtEnK3pU3894EVZeRh7HNSARw9U1VDzgvYYscU6fGjVtUg9",
  "key25": "5JAj6E2nCMJgb9NJES4fnmREZ9APCJuvpHu3koaz8MeEfs1Mjp5n2YQWhHUTwLPSeGSpqDj5E2KmSw8LvmEZe1w9",
  "key26": "49aTQqZaEqvncfFL3nsn4SEGf6ZqKRxLQZVV9Bf4Sk3hMHLZ7Y23LyyetUqS9B3hKkfiXKyd5SjgDhQgkqsP8Lq6",
  "key27": "57cMoEEgQhNSHKSs8ecGrFL3gXUrm8ZdWyu22etuenxLv8BdwzQMD3z59Zt31ZHt67V72HFJdTamCHeZcXW8qbjk",
  "key28": "29MuCA4tSmJnMgUm2goz2y21Bi8fEwKNCYW8iCzWwJVTi4y5VVzU7wYm5NndwA4GU2JaTLJCVsuAV4q6n8CFuuQp",
  "key29": "4buDSVRDyPPK7q37NehSPyxBWKFFhRBt95M5HdpEzkLPHoR7pG941nsF5qqHt2VAbmWKFBbCGgr5GcqRzQyuiyny",
  "key30": "5FM4TpRtoCGxVvjo7KcvTr3pGBDVpfWxspUxMq8y6WkFwwy1FN2EGfvPVAkxwX7wiww6U2RzbhVSR17W39aTDGvT"
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
