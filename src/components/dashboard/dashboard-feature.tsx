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
    "2wyzPQttBCMCVSuzHWrbfWn1a9GoPyEuACJz1wNa2eWe4KdBzqeCL3XehM7Q1sRMQnv7JMf1PZsY2uWz1s4WTPTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCe5ChRsuKZkF3LbzbfrAfh3uAJhmxbsc9tU9wQddvoNZv9cnKcFSP6TfmEqSFEQWTNaiFk5ghhapDWYWh4n8vW",
  "key1": "3WS4bSjoMkW5g3u7aWk5cUq784EUHGwdEXaAHsxwesW3ogKZR4Q96rDVYnAkVPE3Yqfaw4K7XcmKE2JW35ENrduK",
  "key2": "2nAjG9JTa1NhTtJFf63YhycSHWLzUtbQPsDs4YAGFddzfTTAuZ9VqZyUsAonWK1ycDWrUC1ghNMj9XaMdMpbt1MX",
  "key3": "2ptabjb45Tx7L28nmBYBnmHXE4qwtiy26RaHDfe8NURPqsnjvuudx2AKnXQmtDti2DrbWHieWE8CyacAa6RxtwXh",
  "key4": "5ogF3agbpZbDBn843HP3G7UpysuUSW1wwta7q599tm9Vyvk6t7VWyxTsuxPjgyiMuTcT6pwYeDm9BYPHeKwEiXpn",
  "key5": "2v5CUpPH21XNpfpezvS8F8LCA9ejhnT1UNxFFh6GYgDSqZfNGeMcDFWR9iuGr5dC4RWoysSaimBqbzHWzasmY2rW",
  "key6": "keDKqZEQa2o3CVK6QzBMkFQHBVWbEvtX6ZNm8CtbZrKL2qdZxLXNhf9UuXkuAN77ih6xYBdaNKJqcxrvWiXN8FH",
  "key7": "2qiaVfJaevqB7hkyZfU3EvvFJY5KEUmsaTfadL6sReJTGx6x78NuKj2nnofc42L7ei3Gu9pQjsmqStm85nvuChN1",
  "key8": "5wJ8SvMB9FmzE4YEaLju8G5ncQhXNzankRG17Wq6bob1ycXqLuboiBMmqW4PMof4PvNL2Kh4zmberVdpUEfT4EHq",
  "key9": "GoqRqh1DmLuWML7tTjCLL2EtnW9sy78YrLXcLMTsjJ3k6EYsA8uJSioA5jMsGsVK1B6iFeru1MCDr6uGe6gGJaa",
  "key10": "42QUQt92TqJwvEkn5WWRFtTvf5uEFYD5CRcY4g1EL1L92jXNbKWXJse29nRUvCpmfvyev9ZmfVDCYNuYS2CfLZ9B",
  "key11": "rGg5GFcVWcatMLJhgwEVka9Yw4NYDGTNiLpeJJXMjU7AH9zqGpUi9AqB9xtXmkjgtq4MRBeBY5ZwUDLKokBRr7L",
  "key12": "6W5uBGCdAWTQHW7Tgvg7GLTr5v6zST2az3ciXqBg7nY4tcSz748GAxB6MrZdA6dpMase6bo8c9YSL6gW3JHUkhG",
  "key13": "67i2dCL4PCZn67j9hVvUDKUn8A5uz6Ph1KnrQrh2VxPX2QGfdkTo9YCX2mNAR2a7M1rCcu94zMUX8BTDEPD68h1a",
  "key14": "5MLoBLBKdfGnZSEoV917iDBNi4Py4Bx1odVaKiVExpa2gd636xdwB77Q7S9opqEf2N5oDtUjoRb6xaaj4bv4Zuzr",
  "key15": "4pKF9nouhkbGEboj65Nex95FBZWX8bdvBSoEooeB2sSowCE4ALFcwFMyNAVNyADGEjC8CmDGoFgVJXWMTV5mFCgg",
  "key16": "3iFqLPYo5rsLC3cCQFJwhyiCod5j22c2qdDL2apNiVGuNojiqZdagtfucx1xLXe8HpTzoDkqGaUF6xcYeSr8YXQp",
  "key17": "2iJdVYx8XMyAy2J2D4d9zkwqJW811fwgvyH57pTaCmZAaFX48z2SUBrEvgShqYxx6Tjr8FN1w33jmseRYEBGjJrV",
  "key18": "5zZ96Pup758CQVEmnju1iGb3yA1QWgbU2gDiZsrZt5vLyerEKsxr17QejXkLBPz2h92aZyfbjZofFg2KsFrGmP1E",
  "key19": "57cG5TB5L1Q6PwQrKR589NdDYLPZc4htYWX9gCz6qS7P4jVqDMw5vXDETDnLt4wJDkAmAYyZcHEAc9oXiMVcMAJN",
  "key20": "7qDS2Q5nqS1PP5QYjYBWkst3gU6tWEufQMU86sZ3XjgiMKhgRparntuZX2h3CXUQQTfAUMVupVp7WukydA1y3Kd",
  "key21": "2x1k9uAJzQFP44Mm4gPgSvr1EcUGUPRmYuN2vpSSg9oU6pW5wevdXBK4g9GAGgVE7cVZEaEk8Ry7i3AWvGxkmJkv",
  "key22": "5A3P6gj5B42Kf93Jn8hwZFUQ9bbUykoCJhgjcRgZfPVrejuGBY8SVxvAbset9iVcKWDoMYJGKcD5Npv2qYnQnb25",
  "key23": "31d3UEi1iUe7XtqvsVGwMi8T4XqcL4S1Qc5gGHJ2itrNrV1Nmi5GBb1Wk9CN8Tn8xj74si2HyGxf4wEcKxCmZAMZ",
  "key24": "4E6ZEa9MCydBWAAcF5sna53HEz8AWNtFkWoq4DDxHFaUAUSAZyQ2bHmATn2qNGJsHYr2MopBAP4csrxUDrtnZHL1",
  "key25": "4FMjYaEbQAgmkKbA2oqV1DqcRcmj3iZg1PAVcDN6FNp1SdnfR1Bp9UcmN8C5rw9JKJErwDPYRoCrt2F8DHDJuep"
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
