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
    "3pY9bPhC9qAvNGcGXrxTJZHRRby2DEmejW15QF9J9Ty67WGAMqh5axZti6kxP4YWiHLY8C1CXoMxQSBeGaUCG1F4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynjJ4X7zAoDzjMNRFeWh1j1SDFUfcJnZnaoQnXDiupu3kXeXb67dP9YmEnEgEq9TfQJ8wqJQVERYzExLbBnZLUS",
  "key1": "5pUcCPWNVrLPjTY4pZ5jZ87TSJu995PNzPJ3otZ1bbNhTetQ5Uxd7LmB5e2eLpGuTPBx4zYhN5qMf71C4DM2o9Cq",
  "key2": "317JmZBEcDFf5o6Dnko9xN3sCBsLWQa9MjkvK2BqL6C6BoVvqQDqYAUbwCq6oHfKtyJGe3zpM4E98oTpzu984UeK",
  "key3": "2jdp5ANMq1ZaGokkM1ojmBfv5BhM8XTY2BNthJdBhDEsiShYC5ngjqKJ23stVre34RCN1eQyNJhnutVVWREDW4Yj",
  "key4": "3aiCBTpZjcooHdw217mMKnmEvDQyXxViphi1fY1b1m3sYbzr8nt7asdyHj2YQJy3SMpuVhAGLCP4Z1PG8AvHhtbx",
  "key5": "vnQX9hvPuXanrunzGMRacTxBe9BzkPZDDa7dtdqKpsGYde8aPjd9Mgq48cSTSSadn5DkxQpqNZPreW38xwGQEac",
  "key6": "3ZN8YkemZAMgU5JeiSmoL63NGFEZsRUWGTXg2Yws8g2ZVZVgAfRCqZYWD7Y3wT3iWEzXVFNvFK3ehre9HuUeyAsY",
  "key7": "4N2U7yZRBe3k6sEZ7sAJpNAdmk6C5T3iz6JDHWDcJGvm75DZNi8p28WtGrBgYh2N35WwpsCAoEFYCy3J1Ppfp6BH",
  "key8": "2L9ZGBxNdnwmEWf1xX8jaziU9oBxyB5ZEVutHq7nXFnKm1n3UHh5N4suTRX9mT9rPk7Zsec2pLbSqrkybz1XrCRc",
  "key9": "VjyDpN3Qi5vTc2CrtJS5JFYKMBhe5tDL5EnnV4tuAyfcXzbYZeZgcJ8Azw9SDUcukhnACc7zakUAzjVUcoXCxUU",
  "key10": "4JD2DTRpBzmKA6qqzz4Xjx1ZyX8uK4gDwTRdiYmvFXCZYYNq7KbWxdFE5PaQJNKkFkMEYmTyxkMqY4RxX547R4Wz",
  "key11": "3J8L1nRrjtphr3QqKmMG2AujjG4qdWn671uHneSNWWx7nQXc6aXpaRmZLwi5feJw5CKvvegUNWiYpYEiuXWa8wTu",
  "key12": "473eus5M9JusSd6DQ5RmGSyZaerMvCSE93tXJ4uujznv5xbfbyo2TfCVmae4dndAWPrcq49zXd3paBTS3fjTw8z9",
  "key13": "2Ndp7qu9kPXEmeBJUnJfg8h2z9SQLoB8jndPVpjJArERVeHdC36w3y8SU43WVkuM2d5sG9GHAyaevc5wdcvoHUGV",
  "key14": "22KSiwhc8zt7psqGrQLbei1gRfFk3QUz1B3MVcqShrsav2gfCibTVAofWYZkZk5pimydjYSbQABFJKa7nVmVjJ5Q",
  "key15": "nFBgmmXKpqoUoiM9j1NRr4bEwFR94LtCeUBgbNXqrJ9ss6KvNzXMFwaPZ31stpZch2bv9KmkxV6u6sBM7mUsnQs",
  "key16": "4KSRST3y3vXftpzndQCncrfPRt4s8unyh2GioeBf9DwvbayuPQMQ11VUF7aiYn3WtMYPv7JFziVLWVHZe6asZtV4",
  "key17": "M7bA1Vr7AxMBEjkpAP74UQB6QDWxRNFkNt6EtSNY38S8moVbvNm2qQCbGeW83uQHNsCuSj1s6Muj1nFEGCS1AEr",
  "key18": "5vvoup7HzecZhWdFNbZqvTB5NRS73EXYujX3GBzPZyoRxczG2gs656P5TGawLsLYwRcqC52WVSPCBgfuMWjSKaFp",
  "key19": "2jXo2taAZ2q8CNui673yg54TeaeCyEt1gfZ5YghxicXh1rCzjdTj1yRkK8PLJgFRfSVurb5KpZe5ZmsVcUXrfhkS",
  "key20": "3xtnoKPDLgFnc8Hhet4gu5V8gvDEqzrgVCjKT6CCwhCoM3qMnqowsu6uS8re6dSVJrAF6RJFfn1C3gQKrwqXKWPz",
  "key21": "NcvHC4uyUxAe55ycrmkHSzu7e1teGKkQpP5mfhKMxM4d6pVGZ7CZjvUCd7hUPuSekM4xs2grTBtnSYhprJfDRZf",
  "key22": "3ziqjekovGq73eXwRgwJM5AWsLQptjyhpBVvcsU4hpbrtjCe41Qkd5aZWbokmGyfpP364GcvpHMDZobXG1hkjdFb",
  "key23": "438VEPGucNbGQGtcnNyZq7aHpWMNy5orn8ZrskcqK5rVSbufUPQT3gadYwa9dTYaD94mh2CLEBYbUNGBAY5eiBPV",
  "key24": "52twctxeGHWYPCbxUkuRkFJWaH5K26jSJDD3VXXUeor9WBcrvkW8TA8LgpRTH2iv3jpxQy7AUS6dNZMJzsVY3oRe",
  "key25": "5GjhMobkPBXt4QPgxfYyJPHbu8mCGESkRnXmV3NdTZSUtXqBxFsPZCbRxNSj74miFRW5TNvmgrYPjnt4uMS3t2Ht",
  "key26": "3AGJx4R7WaRLVe416LFpXwL3Jp8cAv2vk7AS15LCWEeqGkoNyfWWkKKoCpuGC29gDXLceSDuzPaZUjF9LUhuVmh9",
  "key27": "4jgDHQZ1JSFDhwugAVeFFHQeqqreDijUn6yxMgDt1jze4rJKT51t2Rw49PUbYdc5AFKX5XX1evbsCh9Znp8f2oS2",
  "key28": "4YTpusfpZUFgjZRPmXDCjapNsZWAGKCi48EFLP8ir3mcVfWVZD8nv9K9UWcLTpTQCRkaxLv2cCJ5YUeT1dKjvNob",
  "key29": "Sp3ehtk6mrbFbiTuSEFEaP1b1PCZGWcArcKqEFHhXaKbrjCEQMrSvmL9QAyaBjvW1hx7VGgRwa3fjszTqt9RxiC",
  "key30": "293MGXEuScTfp9Gx3N1oXYrrsHxXvpYUGBspmuXqLKty2ytLjgbSntbvzcG9zZGvANnwaZ9c4JGvG3ckfokj6PeC",
  "key31": "5jx8Es5RnHUzooKeoUJNjb8DLV8VhX4QoHuqfEKCPr9rwHEf6CAnQzdqQ3w6yGtDorbbCNCo9DNbLhcR7xjcL9rK",
  "key32": "2vuKDsgk3YxqvU2mSQ7F1rkLXwnCNvQrNkmuwYVVR8KEmj42x3kqeSum5CVgqJ3trMy9dM9xkMvYPHJuonA4dE65",
  "key33": "GhqTsHq6YWadBp4439fJempaGbDBhXZnDYmYYAf7v9JFDZm8E1EraeiRMyVRqXyUopNqWNxSqwDzepBe4e3ZWuK",
  "key34": "3PLLLAAkwkpCTkLePX1UMzHu6GpoZhudEVTHcr4S5RtKddR2BRKpyxvhpuL1cgccT9TUt1EML6Sohfd154bHo7kz",
  "key35": "3d1o9thwcQMnJAzvQoQKkMn4T4ytpBqQRWsan3i3erv9CBSR4z4yE95sskDuk9LDZFtAw44RgLMNj9EGVdtsQ86Z",
  "key36": "2s5415Us6bFXRW2ooZPZY3yTkQ6KzJPnfAnaKDsyxL4PC1k5gwKt6icX5dReWydxsfkQvS7ithZyQ8d8A7LDfHK1",
  "key37": "5j6c2YmozUmxZih2J5T1av9Lmj9YhBHmAqvxPBhvzWjVxv2YTeBCJg5RTee4zrGsjvCBhDgSDtx99s5qHnM1J4FF",
  "key38": "4pvDS77fVWwKsTdEYwTRrtKkGBeQHV7PQJGV1NrKMWEKo6YZcpjrJfcWG8gvJhSdXvD1ptE1cnUbaYqiVLQdVvh8"
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
