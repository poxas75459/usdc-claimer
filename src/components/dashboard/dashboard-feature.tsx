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
    "5NhcPhniqf53QQ44aQpYVmb6LPzddQ2ZxsbZSn8jz2pvL6K8cYtFUhr7HFk3cw6SfDjVx17zGynJPXWn88Jz5Wen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xfwby5Qc2w2Wdq61MVkZdfp9zDDLh8JAmDzFjdyEjj7zj1Wn6vmB6AmBwPEMLMKNFpBxSnPc4iVbs8aJDvE8EVa",
  "key1": "65FKpx2Ti6oZdFdQRjb452ErcMt8X6d5u5WFQff7auwAz9Eh8XEhPjLjQHRFTk2vjeLSrbjWGpsQysrYh6rVAdY9",
  "key2": "2gCvwca2Q8QYbKrxKLwpEMeYvAwkNRGZFmKawWdGq1jpe93f4SWZfE74vEbjQCdDKHuwPFR6FY3m3KAcMBKzowNB",
  "key3": "56teBzDnFput6vTzTRCDU4pvmaRCRvjhPPyMbKYsE127aMiNC5ecuVNJQELH35J8pvKvWAc8x76SPJ46Bnv2KFKJ",
  "key4": "3WwCn2M918z81Cy9cnTfWrnjLZhpvNSAfoFVRgjo3vFtaAn2vuf9YF2WghMvk8smfCdwXoojy7B1t8KMrWHgk5C",
  "key5": "ZjuBbX3uMw5v14GS8kTdGqT4krGsux6beT5QWLwASxg5CsECGXBGwjnTP8yeQTYRrrnpFDsvDVuzRWC4b6s9XAp",
  "key6": "3uTrFXw2s3ZdeRr4KEewaR5hGgHoyqvhwwVVQWYWAeS82bgo5SE22j7r3tMZSTBGxty57rTSdUxvBRL2W9mkeqp1",
  "key7": "h3yjSm47PRnNceDR7EDHZDWgQQT8oNRG3WfDPLxJv6cHNSEmpDBPYFojWMTF7LbSVah6By6tUQoc5zN9QKi2och",
  "key8": "3Z2DAnMZNZ7VhKgaD9pc7WiSxUYDAsfMBcJdEpEQ1M1aQE4mdbirJy3cDBokrJ6VbGHUqqXjRDDYs4ffoYEp9Ljr",
  "key9": "3jU3WCV2gjXddJyMTWje4UHxzkt8bcFgPZgmSpU4N9jCyxtWm8Ae8wPe1HqiBDppKvRySwvYnqKeaPbwHt5NsYwB",
  "key10": "2yrvuAvXirjUPNWtFdKSKVJ2Z9uE2PAmVnZNnjVEQKQEJs2iJLb6B2pcxdrymMeR4mw9zim9d2aPiVUkRZGixHLR",
  "key11": "4RSGo11khgMtdSj4btwfQWzbUjkF68MQcBXXfVzTCgGF9vnDNyx9Rx4ftQFhwajhiZS9AJACoLD93MtEQwUTLSiJ",
  "key12": "E448JxqVSSa3ZdKeoMYiQNKVM1Q8Lfi1xLUTMuLyoxynEFzLr7xSL5fvpi2xaHRAtRfjkMG6n2MQSYymJ8uctxJ",
  "key13": "UzWjBgsMC8oyWhFh9VQQcs4xSrq3YZd6X9FVWKwyF1BuM4w1yTqgADLfUx9vZXPVEgA2WArcyFHLJTHkAiku7jm",
  "key14": "ihA7WrTCFhsJZrBPc6DtrydtgcRBL3Fum5nvMCrGDyjCAurQSy6wgMxLCq6cY6MPgYyaesqd9o3PwpWwY5Gnk7D",
  "key15": "WpbRCXtSa3yQGwcNDAqNxLSgJhAcxPPvJRMEMy56qnfb8KNy5d3Q9cCDdn1zqYfcmrpMeyU15XQJQje1Mi28rCV",
  "key16": "3TynUv6pzdUvVGNCkiYpoxsYrji8D13KjJazark3MUHfdf6kwaefscGzrw3xPzgC3ZeHSdvobkzyYJFXs36AeRdr",
  "key17": "56b1gscuAUgLKz6drMVZ1wL59rXsoW29DVDUZe34s49E7XqsauvffUkx1gEoQxuKhUpxjykmBHQLcSizvQna2vrh",
  "key18": "2oY4c9gdvxdziu14SpjzSPmvSVo2Y1QL7B2KzaYvkQgtLLTgx7enEvvAozSZatWigBSmxGcJSvYRkL3UUEX8UiLJ",
  "key19": "4UUfvfVZMS68wwwj64mzckeD5CfaQP19xehdGxYiGTRtfpgbY5PcqGG6CLpVHHjBRrVx1LUjpYyBgcRvP5ZKufFS",
  "key20": "3dyzHF2tBRSRdwaQaHU9Jganv1wZpzpyA1nN7NZeS8kgunz8cMSAmUfk4bKQPKhZX61MCkJeNtjz1LcuV3axzQbi",
  "key21": "3Ebpt8kexXzrTik1adSo45eJg3QNMJeaTNujkigCG2m3UtCGRxNV7M5jihJSoAs9ot2emeMx8hdBTm5WmnK1n42J",
  "key22": "5N7fdqHKDResYRaBLo22ZjtUjJLKFTyZbUojtLkgTvmjwv9mYKaPYHHNytzisdqxKPxpRqtreCJKTB1wugGKBJMG",
  "key23": "2WWjYf1547DDZGVToJ3LwMbCieRgR11pWe6aAvjToGvWs8wR4hi1hF5WZZLzXMtp5TsAYMbKVWuXvsUGfmjswv5P",
  "key24": "5NgYATTYpcZ6ey5d8RcWeCjaW7vjEGWdQZXa8kzKnETUXXmUPWc6oCLyLimypVCoxFwNeXFFPxgpqwdpGUTv8JvN",
  "key25": "43tKENZ4z95L7o4w2KpxMrLMDmS8ye911YuPs4fM6Da8QzuXLJY9ouQGTXnaCaZLAkrwfkmzLtMrpokpL5bJj8ZT",
  "key26": "4jzuprBG46hRSDB1MskTGeRCCURVx6PfrkPpHLGF7g8k2o6pTgeVhaJ6YhXAVscN3WwXoXUHk79Nd213r4X6t9S9",
  "key27": "5dGFmJXveQ3bUWPfdk5gHm3KhzUpJD4rwhJ1Ukz6yuUjVLDWnr6LzWtWefZRtm2GThVYr6ZDqkgXqDyTzaGH2epd",
  "key28": "7Q1dSbpuhCHQ8GBLK2pk6pgSkMzZrStDbi6E63dLYJLPSYi32y8sqSUFGS82YHY5P3Jrkzb6LNfEdKapcZWmZyV",
  "key29": "BMapC15vBuCbqCyczGGdodLmDA9bHKTHN6zb3JCA71LtHpCWAqSntY7fCVxnTUTLevNu1FaGvRh1zkf2mQ8jH4W",
  "key30": "HMAwb5aaoZaDdJ3CgACQGah8ZoHKGYz7RKo53NkdJBWRWpXHrFfhrwKbRcFJfy9LDLtwUzruxcrZU5XFUXxwFuC",
  "key31": "5ktxHjeC71cuuSq7U5T2qLzkzkc7avbafQSDLo6N66kWEtpdFJDTVvURssAcYwLh7rhpChGmbmBg86uPaQFVVvhL",
  "key32": "CfsWuJkayWTdTxX9HZoqkTxBzMXVrrhjaF4EQURFQbsP1RprHop8ukuBdmbFjd5mGEiidfHrDsme7LsaCBg7dK7",
  "key33": "5BvmmTvRfWUzL5knT2wh4ZoSr7kfHGLKgMzStdYwqs3EBsk5jcqjeMJaadb3ejTzM4iY6a2ybvQhVdqqtYLJ1xoK",
  "key34": "5VyK8689yWKwhvL9uNCUwYvRJMNN6MERZr3h3VrUjrerf66A5BWQ4A6rYTC6wjzapBT1jvUwyzKpXAG7yMN2dfPM",
  "key35": "65saACKfcyvgRbFAR74m8HEXezJ4Bbx2WYtnmUyNeRv2xBtPDV4kTp7Ju1XSojLQENYA2p3WcySB1Lt7RZcgfHXp",
  "key36": "nbURdKc8vUHr1jzTbCrHiFmAufKGYib1STfFkcP9vEdjAAyy3hx7JNc7d3FeZtpdVXvShadQcBPnGGG5UvFEKYp",
  "key37": "3ZVFsnSasfDV9MPZqPos1dS3KRnFC47eEXyCKzGPLQA2o478vME4jSDskBNtPUbKvrBFNP2VVSLUyuBrpz9gxpkV",
  "key38": "2ZhoKs4ViTi5NyFRkmnjv8joRJmQ4j2sz4tW5WDAz1rYZKrE9iKQ37QctmFkWPGfxqUExcL8JbmkGWJptDFB17cT",
  "key39": "FPZjT5mDhHDyv5pNVu9RkqoUg3jAfgCD3GsQEXnG4w5Ev8LRpm7gUcDmf2Fx8AAdwhRk4ss7fyRYnBH8MHbLFvR"
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
