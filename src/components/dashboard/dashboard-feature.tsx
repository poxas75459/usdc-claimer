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
    "3NHpWyf3wQQxFw7GCf1noQkMp52eerNpv9sgPiKfB9SQtQJ3VquQDYg3gmfXdk5KNxThRuDtxVBLcqgikiUhqekc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzK2SPgfY785f78UVvLLLsyoHQE371aXB5uCq8CpFQes3V8cbZQoA39QVKo7DtxxfakZPVBmvuqwPny3hGVsxwn",
  "key1": "2weLTkewQgv9AVqsMd8Cept3XVer6zqYv1HA1nWxft9AHCsojnkBVcff2HfYp15dhskQDfa7jiNBgwipReK5Ttkq",
  "key2": "3HhKwh36rFkYXM7GXgD6tQAw6ScBHVMXovU5jbyDQe8JieYSeioJ5p5wZQoMBwLZGCgxavRxh1LS6MM2qoRET8vr",
  "key3": "fsK56sEU5eYr8A8RCTdGk4YcetnMj8L5kL23WxuNZoyjmQrVP9zUbo5j5xrRjkWf9L1Fi8euwYyuiiUpehZ5XLA",
  "key4": "2m1DMg8Kqm7Jvf4Ab2zruZmc8EA7TyjYJ6oKYmECdiqpoYgKQ2gq3WTFohKTpqkKcBSvACPNG9smteDpjZrmXE8R",
  "key5": "4obeY64e7KoLqjtiGnTFFeNb9wGMfq1RKZ7A1WGhPBumc2LAJDoVr5FTibmmfYQktRiwbmwUhK7PvrXBAn7TVDEr",
  "key6": "C2ateCEMV6u5CayN2AKr5X5VA4AMN7eL3w8cuMA3H1yi6C5B8rVUmWPPazWJQ5xcgvPWrGnGwuDVTbyJQEV79e4",
  "key7": "3pWbEyBKJk3GiRrvSqFTFtz9613PKVnSaV5mNBipnr6Ws7kMgH2yKdLjvBvsy9uLMRvaYfcu77VjHySFLJXhJX3m",
  "key8": "ZuM3522Bb7EQWwhrKcNnNi6Xkx1wTzsb7NYJmHQqqh7zsfqNCFvY8C53GZABd7toybT93eCP6g9M267TbWqm92K",
  "key9": "4BQyMo2MQgSDvb4D41hgeLqb59P727zeEHWGnmTPJg5znNahqagsxGeZ5Banu6uBszraqgwkFYJDEooY5DjsX2KV",
  "key10": "4cmyCqoU27ybWTuDmeTCJYpD9W7KX2ExpVE1EaUR1yMJGyjDiXi6PnmDTTbTmwN9kZiw9tnDBMKsxDxcHrLBQrHz",
  "key11": "CTsstPx2YFmn4AsFJtAw19wGEoJjdvdvM9TVF2SSX4Dm4rAkWH5yVbjFR1nyzBBAtoABqHZwxN8tqrvpe5dwrWc",
  "key12": "2SUJv1pdq6fjTNyTBMkVrwgUFb9L1neMqtQozRhRRoSYbu9kNp8hd5HwE6iaUJ92vDa1a9jSX256VDD4Z1uJhqCt",
  "key13": "5ikcZ5xfqrJTL33vCSEBcRNpUNpq1aqJADsJ2HMKTi3K7783gZc8BuA7YAYUS9NukRPxsqXcs6PupRPfpBMc4nkd",
  "key14": "5uRyUv1T117wTuXVDSZNxbfetzFaCRGdDzFXHdqtNaQszvASWgweEWZfvMnEtcfi85AcPCGznXrYRchRVniToacb",
  "key15": "33UeBXKL1SMxDo6ogZb14VGLStUcNEGSNVGEces6CNjat2SsxYrCjGJPnBF9qnBpA2tk2RwD9j5a9C9cctpVhAPa",
  "key16": "5DJRPsMnjoPKxMaMPo4fpgjTAqni5vpnfw6BXvgdMVrwJqcdbEki6xewbvoYYnxsQ5XfUav5niLpzfXHzR9xADb4",
  "key17": "4AeMayRpYk1QMqQEM5fr3NYLBucoKwY8njFVEuta2sbpiTUxHeX7KJdcgA5XNcTuDCPXQjcxC2z8S3qKkCd1E34",
  "key18": "4nTxAMg3VenKNhue51ccLFSfrWVyd7AvfirNyqkT4NUV877gF6hMeFBw4KPKtCdfHWYQwh8VPgCfS4Hf2S996cTS",
  "key19": "3eufg3PfGwrKZmVLpPyuFC4eRNuMbKy1jwczDSebe1n59yGLXbdaKniEaQsbaGuQck6vrSCBP1U4k4MXHJJAZmTD",
  "key20": "4DqLFvKmGRpRTP32cmoFo3UL1Pi6fyLWBGbds6ZThTsFZJNGSxA35kDNS86QGKrkCuFU6miN2hwfXNBSU9hkwaej",
  "key21": "5UzF5wxHpPuFuvk11kJMzqP3ma7fvFW3Pvzz7aq4jC3Q77uuKd6cGarFjYgY32FAKnA6xcQknv6XdSMBNnZXxWND",
  "key22": "5jQGxmRcaYXrPGuzkYUYwfHG2HWNjFP1Uw1usZjbo7qENwk896HbYpiLaGjN8VXVDjUmXqbYiyXRWB1Kdkc31P8v",
  "key23": "XMiP1CXSd5yPDWPgBbk3RvCSExyeJM6WyPNH5tzYnoh7Y1YShpDMheABpzW5JK2Hah7EWsEG5UhQ96bAK5DVA6u",
  "key24": "3UbAGNa6sv7WcfEzr8jLXXGYa8EYtW6p67VywADJWmVabYbqkdytmqy2sYybzkTqjGTNJc6fwNjygm2SZkBwAyzm",
  "key25": "4hFeLdU71Yf112VLNZKTeXCP7AXfjgyg2u3F4TTSn5pTjvjGrvaz1EidFVBfKFrWCM1ZGR3pYf5cEkqnamxCtcA3",
  "key26": "3tiqgSsCB5HVaxypDaTRxabPnepcQHucT7S7x1R13ttANCaXLMRG2AcAcCB3y1XFFcC8SgYCRRheBPxBbFpc7VDU",
  "key27": "4qLMU4nxgH7ZMZ81StTLb1szuyDbiztuBi2SZLdufQsismNRvYnZDTYwLRKowZwreHjRrFXk5jWMuJJNzD4xqxvB",
  "key28": "3cjThuBKLRE29UdCzGVZnPoKZrjdxREseBSSiMRtN3RFhtVmxPL2ufBNe65FEbNRePmCmPdzVuXTbmkiw6pPHy91",
  "key29": "2kYJj2UB66cQ4uNv8N1KY2viH8EHNDUmLfdtNhZVH2H1QvjqsVqjZzpNzwYe2kCzBZ2h9yVxQEwthdMbHqoJV8nR",
  "key30": "59M8sJeBK1CxbJM3EgWSESkPptYsvfqRzi8uq9kHYxqPWHJvQTQohwfdooNqqhHUvfZGpwcjgKEkRAbTkhBDHYdp",
  "key31": "4xLCZSza51zQFmCwoUdMtzesdo4R6VXxKQ8DbEQ4ujALgs9LX4kMaW1kyU3tdVQxgfAXYvZUWHRAHkWKqFDXZU7F"
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
