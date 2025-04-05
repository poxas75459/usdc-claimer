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
    "5AXAe46kQeQpm3t1ukt1nTL1f4s7UfqStogbh9pT12T3WjejajqJEvMgqhM4DNjms5VzYhKdyhEfcSP7CRW2SfEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvNDDhAW6P7Qddc3D6QPgLry7zH3vs6NRV1etrjm7odx3s8BMBfbf2wbLjRvx6VVrR1hnnHLJCB2ck1V6ZhnG6T",
  "key1": "3fAHk3FWPRnFy27anjhhp36MyichFLYPFwt5Vc2ENJFuPJKsdkKQqZMqzAqZTYFdwQhi6R2SjRRWud5kQvBFam81",
  "key2": "2Wfx962KpLNhME1m3KAFdLXN6sDFFuMz6YGQm139shzRmeVvz9i1iDMxAwbQ7mcgw8MwbajSfZSHg1ZiGgSpEz2F",
  "key3": "3ur75WDrjNm2jZMWaA8hdQg5hozKr6yMXQ8eUXfF57tuF47RWnMiKqnjxFaiknRTViTga6qzdh3wxQvYSihmjEov",
  "key4": "5FxTttLykHe3FDXkBVgvjFrpiiKtCiHhKKggHnsqfX2QUxk1kJ36MxmVNhm75pX2VNkbTES3WQTXULy4Uy1aA5xC",
  "key5": "4aUZpxTfNXTde7aAASrNGp48HuqRgFAfHZLxgmkgLwj3JK5BLkPrnckcKfrYYpMpkU6LSwVTJ528Dd9xg4CyezL7",
  "key6": "4RbR9FzQ5EWmqqjimKMGaKNmNGdFZLfDCk5x97RyEkzCnn4BSMuFuhkznhYucvYH3sVrmLwdj4bayNF6jabh89U4",
  "key7": "4np6mgaASnVjdgeMJ3mQq5dU5nZX8BtoT3Y12mpVW7pDwbW7d94esqMpybbwHXTgyzDLnB67cnmJm9mb6VZAVG6s",
  "key8": "2VADZukwk9xTV4yByKp3Co7KsuQTzwu2KsBMY9TZc82kmCBd7NH8JpDGfKKedaBwoD37WeYy3gBX1646fBxzwWny",
  "key9": "59Uqpy9Le51tjxPLw1CeZt6zjXD1qJNYKTvNFonXHczJvFj85RFaTQJ1DBFS8LYT6V9mZJtb7VJGvjfJvUhCZtXJ",
  "key10": "pC4LXceWGnvrj7YUqGFcd9YkoQ4y87FCA1BHXijS1AC7mFENbXvfhLQxvq3xpia1UrryDLB6nmBstDFXvhadmt6",
  "key11": "38byaB7DSyk6LW7BqFRgLp9HN7RMXYa4ouaSdrGbq4BGF2hK9hDy9MGpzCzwBDQQd1gZ9m47iY5qzB63NV56Kdwm",
  "key12": "P7nuD2ug9Rs1eyRS57yZkXUrPVEQ7LfNfbzja5f2ngD3orNpP57JeyuLjhc4CWUZ5CTCW88e4r3H8vayPczV4Xc",
  "key13": "532U8q6zbTjTUoNwoNvJgcSXHFxEB4JN2uWFvUc1vUV1n2UEuWbrgZS1Zt8w79YK9U4srhsnfKzViqgsQtyMR2u7",
  "key14": "2UMPj2MY1aVXL9e1xGdYqqEqVwGuVSc1UgZenEpadGvPNbCXormrVVmywof3N7H5R6LJMncxNFNNp2sAkRQCHLu8",
  "key15": "2qUDSXERvX7U5jupxhQN1GiYVhBX1RcxCjHvjPDzQD47uuNDcg9L9g7qrz2phfQMopmugEjbNdAnjwZL87cnHAa6",
  "key16": "2nrgxWHJKjZLBnW5bgJtgKVAns2f8THxGNecY7fZtFkdV7GohDuZpM7WgCuNskM88Y7stqJ3xwTVy8a4LomU7Jeu",
  "key17": "5chtaGKen7QhStws4GTy8L7USfyFD4AzpcohDsABkFSwpdDVwuhNrLouvL453fgsWA3GBbZ2WJb3XfaX3iJoAWbc",
  "key18": "eNrn6nSAkpLz1iGUBwQKgj6eFK3Wx3SFLp6JeQwkepo6HourEuWTesWpkVNicziwePorrdgz65MdcYaoVwhnexb",
  "key19": "5yQKXwZ9ZrXmWUgm5iNWksL9fRV3ss2tTRG1cuMJXiyepArmyEBrQfQ4J8y3jwW3JVZACrZEdRPqTdQJq3acQm2h",
  "key20": "3NgRxJhiJMmxRUdupaNK2VWUxUCrAZqodeR1WmYojnioaSVBRAsSBsXfXLKeFhnBh2QYwDo1kSboRHUMEWJyvAfK",
  "key21": "25MDiGcVLkB27GrgsAe5mG8QSmNTTUHnXasLf2yYbbJTJSGvxXhBESBcoEubfkuEX52FPrj7NgwnJuHdFaeTH8wY",
  "key22": "49khe77SnfhcCxM2iH5pkSCC7PvP3SnJXpRLXDQppr73KLVTvXP6iCyQHsrjTptxGEr8DsMo2HoFH8KPkdT38ifM",
  "key23": "4gF8SvKwC3nMEAd7WcdyVbYsRSxLFmH8e56HPthNvWPpmWPiJJT2bQN93yrCJHXue1QM8GVpzGoRjTrWVYdZDp94",
  "key24": "66nh9xH2wD6bN64pKbBQwvohz8dNNSrJJtDYkgihCfJaKtvziWtVdtqhFNfbbeBfK1gnndtjGdctRv2bEfodoaWx",
  "key25": "5F7tpiLMTcwERdNenKw2xUuu55HooEtzv9QatvQa3CxoTYPSGSFbY1pKMDTgi3QepBJemYESGdL62HdmsnvYK6ED",
  "key26": "3N1WoGEqeSyJEhAqKMgCzVLyQ8Drj3FBz66rtRAfGuAsx326GtaQJ3xSQrMAZXasYCbxK7McNS5N4SR43b4ZHaZQ",
  "key27": "2PPt6dViCLSGpV35sfaD6pYp3wucMLY7riJLfBA7RYc6hgMZjjaymmTcoogdonxRAeGqrBVYawB59wkCvWTSTGDJ",
  "key28": "r8YoSdVHcnuAttMVLEWSMKPRRaLmtQPyFR6aVDTHo6axhQB2pqBD1aaK2A8k5aXhr95wbqDAQofnF6XJTYJVhoV",
  "key29": "4dUSLeD6quCX3qoxRskCQ9AL1q4momCNNTUZ4iSbAqhGGpcrUzCK5D4ML4fnYobVhDaMKyiev9yf4ysbhyTSUmH2",
  "key30": "4r4MMDkCx86QWHmyWsyfwQBwx64ghspifKgsykmrYSxSizdjxToFuHXgRqnbT51LZBf9jSgxNa3jzP2Bwb13to8m",
  "key31": "5R3vLHZ8wYx4ntNWj3N6kM3bkrvhha2EXxQRst8mcWEaYqMsTyc6Us11q25y5FeA1Dn4HmriFcV5D9RddFoKuJxu",
  "key32": "2xYF117zXX6zoWswpXqS5q6dzwk4gFsRLfqviVR8KBAHXfCpskgo1kE1hnv5PAgdKGUetKcDWe8QjzrCDKcp88Kp",
  "key33": "5YwT4nnjxvgtr6jZavEiVAgrzob16MhYm7ABA3gYxXLuLkLBcBWWSDsxnRCUgfyjs2x2kJABFh4gV6kmqqs8BN2R",
  "key34": "26zx8iGm7K8kYHJa9JU2B3qz1jroennsqMAeyTKcLP91UNq8SWCTu96aorEb8UDjGKrAkeWrHTGpCDEASWt2oCSU",
  "key35": "3xBKQdYGTueGpSNvYUwYRPakQ9fqofzSMfSxreXuqHyrTWWFYyb6PGurG9JiCzM8oLRXR76rNe1jzujc3comupNb",
  "key36": "5jphfmMt9DCCjSE67VKZxAod8hMoQE6Zbyx11zcGw4U2RRUvhYESbE67TTuLhB5gsfS7n78nPyBX5ugczPLsDBv1",
  "key37": "azfwufMNF4t9x3Gs3WaSZgJ9FCbiQNqvzuAi27TThrMmNsqWQnUArEbHTa2KqA516J1BTK28hibTfVd3pfszPXj",
  "key38": "35wt383Ej4oL7xviW4Kj9GAhvmPz4HecnvAeNRAoUmaUa5ARhZwygTWTg3gvMe3hP7uc7XSxnfGGK1Ywsgwg6woE",
  "key39": "5e3atHkEZJ6xfQePuTt6EiW5AUXzTL7bQKTRFZwsZKGy4fncfkgc6FboKQrwAmoF8EMTZ2DYnPzgxqRsZoycgFQW",
  "key40": "5DwTvWE1HGfvBiCgF1PYc4wPeLjbUBGPNn5PEWnBNvstuvE7RwPRLGra2scaXKnd9BTZEyY5EgdsJD5n5qNkrAGB",
  "key41": "5Sw7o4RX2iiEqRCu2cZ93QaEnAya32f6dFU1XXzT3A3cTWdD29zeBGCk14jXSqXLNT3Q73goRK1VHqmWUcvfSrbg",
  "key42": "2JMbrJT3PCfFwyRg8RJ6Qwa8sRqbCUGPg6afdEH8Tb5zB5d9kCfteVyKqwUHYcSw8ETwpivrx2jsMLUZ2ZCvSBMX"
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
