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
    "52MBTg8cgBrNfbAA5BiXJRgNgzM6WB3iVEpaj8eoR57JcJiWKaa67CZ8ME9XhHdWYP4M49gff31ndPBkY5XxGiUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v1DSxEQTHoWucTz1XiqKGa9KQAoB82VoheBvSKUyfYMEaoGJjyQUEqscK2Z62ANXH4AjXnQf9iRChrmFxWij12b",
  "key1": "P8DQAmj3DPYy7HXjYNmcQWLha2ocJ71ByVLdbcECJuBviUpwb8o9sMBXgroYdwkYeDJCGx15gADQUFc3yg5CYhY",
  "key2": "4k5LAuguJpMCjr5CkD5RkLxMW6A1PX2fhHmdAWf7jRtGsxHAYZ1qcTAQAaiPVUDvukQ4ba1Fh3jH2LbynRRGN6rE",
  "key3": "fB6E9Dvu9yFvYeh4T6hnQTpBUkTuw3VWT4LyuzvqtGbNtTVKi44Z8K9aYhdunS5TT331zKhmw21yZTXP38Mcnmu",
  "key4": "64PQ9HCAYWid11rYTbxg8Ztmss5ozS1jnkdnEwBMtiqGHoQCofiGhFATuB12A7UrPCQN8uXDUbRyWhZPi88qnTTP",
  "key5": "4mCwuoREYE5KTYY4W1ZNmCDWs8D2iLM9fZ8WnvREJoDgHRihmcfUrCPHadYWjKgdMTeYYmRrbMtb6fUTbwnY8x7d",
  "key6": "33v3VT4YL8QRJqM2F6QG8xJGxuZYoHGpWpWE6KhbRozpK1QsoYnP6goSRpqPXmaw6FRRcDVLUyCVDy3u7ArY4r9P",
  "key7": "5aNde33CMeky6LEpPoNhFxSiHAKWQVwEsTXbdeoaBBrSwg2Y6LDYXuDXqyP3mF31dwwUsiysVYRtxv63ez4876hD",
  "key8": "24m1UUKuqtmw5XNLVbdgtqvaWs5ofvwU4weSyWoJqTcGZm7YoT4T6yesC7CURq4yzb66GJAoQHSJ3o59oi5H5zdB",
  "key9": "2iM8L6JmjMnH82hnV6pWj3jSTfz1mFCrs3QnAuoWEmAuwoip4FU6VQoDhJjhEk9vP8y5xxuYMrSZ9jHteY6JXKSy",
  "key10": "5NDRYVwpP14T1FzqXq9KuM5DUbUHdJ5EG34E3JhYsbAxKRzULeZsjz24qxtSqKF8VBwoZkLBkKM7oTmuT7tnCUWV",
  "key11": "49Rt2JW1URjphrRu3aaNroPFgnAkdDMhrL6jrxqDtkQaWpMNJuUVCiigD5ywvtubLKYUx1G5T5Kor8quWLyY1x4c",
  "key12": "4ALfkRMk7C9s1fcDQ2b99mFMALGVYjSQDfEJo6yQaqPCMsGGHJioGFmQCRggj9gVLy3MPtiyJLwVyj5kP1ZA7qmg",
  "key13": "5cPrt3FqNJNAXBCtop6u3eQCHt6EcCHnknEqHHtEBmoaKjSJ5KjFgXmYU7Mp83fuoyyivZiXjLJoxbdULvGfDXjq",
  "key14": "3BCCmpzwsx2oQxg1PpwZKgQSWz4L82KYaLw1AWYKSvZefzdo5bVGj4frEa68ycAWjjcyWHuNxdr3n6QaYPGEkA8X",
  "key15": "3eN6n8TfWq7CApfq6ht9uPsk8z2ipyzfRErMdXGXknrUS7Zx6Yo77KX5JhHh2ncdG2NZnwFJiK3h4pXRsKswmfZV",
  "key16": "M4iP2KKfcL3EzvVMwBs5WYUkEjUqSLPFweFeRGseiZ7HGjyPUV8RNTGXKppsdsSc2pj4DksmL2X1mzEJuZqZDbu",
  "key17": "2B4n7LKtLEPicZD4xK3ZeQXZNUaLkLKG78d9hsb26Nz5AqUhZpRvc72EV2bgskiapZmWrTk6PfidKmKQ3irPrmew",
  "key18": "m1Fi4eG9XtLiPHoePG1tGfvWNff87yDzs8dgLeYPPb6WJRSUbujdUGtMzo8B7JrqYAFFiqXE2xU6PYjHLFXijQf",
  "key19": "36WPNjGEaSbnYAMK3kvtVZNn9VT35H3iJxdJt9dbkJgRFk7T5LL4C4x6UixkLaJLaWunLpdr8o2Sqg8cYU8D76gb",
  "key20": "2QmUwdtpVsJP8PHMD7YYxydAwq2KUZyUxMVPeMuBKtY13DKQxrXYyCFDvmj9Zs2QP5GDTEKVEjCEeHgXwU2YB82i",
  "key21": "5pcxne5Rhj8tRDKkL56nJD6xXpZAT5Yxn1tTN14NrFQt7a8i12HcLUZrovdVBEvbjePKNdFVo7gJYBn6ot2J3GYV",
  "key22": "4Vd5rMFqNe8Lk6u7Pkg63YugsK4Gx8YvSkWXrXDoqxpTHE1Vp8EgguiwharSM3wBa5XLDkZQLU9qhEzkpygHEfoV",
  "key23": "4aFh1wirAnQSWDknwUKEuiGXor4u65JiV88mvoE551VRn7VxYq3tJxQoVAM3i2xSusrzwKMrgaJr6agPeoD9znVR",
  "key24": "4SS4GteBkd8BQNh7kNSBeTH9CbCNr2VfJJAyLgdu7F43dq1bPDF5Tv1nXd9kGZS5eBAmAZobiTE72HmrBtFoJTYk",
  "key25": "43dmrbezBu4B3v56VgjKpJp9e5roZBvn9dknqbDDQNMpLStKuwug27k8gUWseQvbBbzZmnYHtMgL6SuySLSJCr5H",
  "key26": "4cetWsSWgJEwondBMrTT2toWiT7FyT4n5Fwkr127cFqUaQfgPnxmXzTuzZfBmG8GHR2g9QmmaDMRSqnSp5J6nq9m",
  "key27": "5A64tRspKnfGVkGU1hCVfVAMdAGa3xzPQy57QVhZuZW8V33Wt5oJJuZzHVfv6fnh2vAeTyVu2YiHhYzyw3ZAMzvm",
  "key28": "5iGtftvyWdbHsGsZB28dGN9nmugsZexuoixeh11MSCgdcwzHQdw6jT3vnGmQjy7tPiSN3aHSY5Ybmy3mjLT45Dog",
  "key29": "4kybEsXYoRKn7xzyqxWY8uyhmm2JRCobPUdH3f18an7gU9DQC6RSQcaMyiujruiQwZdk1E2L9rzG1StXvAK6nCa5",
  "key30": "PAn8oWfGxY8evALDPG6kiSRQfY1bEYEiHQwgprjENNGoD6ULrwfaCGH5NCootxtLZByHDe2NBSTFYMsyrDbUruJ",
  "key31": "2YRrTL8o5ztdXej1h1UHmcMvhEZwbRRYvfzt3sm2EbTgGxGvx4fz3byZeEvMv3XyBX3F85dREvmKPwx3Sg1sePhC",
  "key32": "2ZNSbR3Jeka36NyLFEGTcf7oWzs7RzpdbZyfFuZX86Vf9HUryV8Pfi1agNAXhvAd6HaVJJmEBFBakUiNqmrhqEj4",
  "key33": "2hxeTEHKtxCh3me9gubEgQA1w6T6jrPSCGPUXLjSPXeVUhS1ubCpEoAzX6ANUdVqWQRndFLuuhXP4hXXcTnm7DHo",
  "key34": "2SHAP2WNyb8V2ZYHxHUdWX9T6WGYgDXKHVUgaHVbE91tfhJ85qxUfQmPvssNKZJ1PLNmgtufjhiK43LdmkVeAPn3",
  "key35": "5Mm7RT9G59DNiDwPQwf97BnXUCpvYffUayVJfN4VgPHtAWhQiR9C8QbKZA2FqgSQbpd4xmBxa83ZUowJ3gRVDDc7",
  "key36": "46r9VRWVetMDQeSS8UJtZskairjvVJev4jRzBQdtcvvvYxqPrcBL8usfgxJFkkmmJPxp5ZZe6uBBLm5u9EkJTVXA",
  "key37": "4Gi4wtXJXPrxbpQMrJK8X4m5ecTznaufXgLsTwNtVG1VXRzcTRs8DjnQM1wrJt8Lwc6RhZcYix5eQMUspJ1vQ12u"
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
