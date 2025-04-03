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
    "5auMvjyL1XzDHAU8KdTSu7gykoLVj7FAJvi223Fmto9NC84of5jz1ifdQu9Bmd38FxQ86f2CcqZaxL1BWA3ruuGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2kQ5YWtTrcUW8fR21ZqsoX7Beqz2vfNv1mhNbYNvidtRsXuJRkkhtjQs6eahfVHtga6MMU1ttQJtrMMur4NMGk",
  "key1": "4oH2eLv269wmmXtkLCgCBnWoqdowoE12NhtGU9PocLkdYmskLeJxc9zy4swJ24WjchRixmW7wAyaenhySqTGkjfj",
  "key2": "AB61KhEp7A9ReW12ji71c7DesrMaMVEd82c25ZoMFzpWfDy6DhmBrM73KvPiMiqr816B9gNASNuFEjETwyV9uuo",
  "key3": "3atiJUdQe4K2WGobkq9qqXGKsyKsQZtb5QnHxwfYTe1VeTARPF7tfUJ3Mh99qSaGLTaZkVdDD6AYA43cLMfKbHRC",
  "key4": "3nQThJG2H1BR7gfqNsEEZaRi5rhX46JAUnXKA4oRx252guLQsByYLxTSVs8ccVLCrM2PVpXjVmDgzg5EoSABhAtv",
  "key5": "Yogzb2wd33o7DxcGub3s4VcbjqcCauTVjcUFJ9fY5BuGq4kcoF9bAVqYK21Q2zjXARY3bEUntY4arn9WjuTDsJc",
  "key6": "2oK5cojuKUwXMAip9Vnosgvmcs8iTZ4C3JmRswgqbaLesAfFaWTgY8g7krwrwYmYfna7vZE2fnKvZvdXe73cM6ts",
  "key7": "4ForLqGmCkETBk8DRaHJuwMtaNZauG7geqimS9wsBMBnr7Bbjebu5bvnGHwJofwuTSYFGzGmWza5RfCayNJC9GxJ",
  "key8": "2JYVdTbC1cCow3T39xSsdHo2b1CSuJ2WKdb5zLEkuftUvrP8epap2oz71vXPE3M88QDCRcoo9rJNPeHub2HJHLRU",
  "key9": "j3pHUspZsGeuEP8nUMZH7oBYnAuDQRNJSofkhdDsvWnnR6EFNWybA161ktghuh2rGiotVNJy3mekS4rEcRcbvTQ",
  "key10": "25ZzjeDbe9AFKVmbbwxgzg8uoXcJ9HzKJYH1Y8F4VRUF2mV5DCRnwNPPVgsfytTNMccosYtjENbHKQ1cDNzzPCbR",
  "key11": "5vLQYKuQ69y4CH3sxxEWcBsDVc9iNGo6mfRGXDpcnKa9pbCDVk3ok8MtwUMcWaSt1oRe9LgEw5fLu11wpMDw78So",
  "key12": "4ab4M94Nb1jBeEeo6gBdLsUbAsvVWZjAmJkx87Jk91SeYT7EHJzKGgtQ7M13kCma4tFENiXVeBCRejSUbHBrCZ1q",
  "key13": "2ko4T6T2FD57rgHhLuQgNFZAUXymCGv3nCF6y3ZFBrgKJtP5FfEd1Yo4yp3RDhfLoGLXLT9Qs92jSpG24A5c96Dv",
  "key14": "oMrY5JUUtHoWmQzg8bPZksDfG5xfjDxKAin2VVYbsPuP8HZ1rspB2WPHEiq8tLsfEAFNqR34ZvvFELJWzK5fiXk",
  "key15": "47RFdqovrsyFn3q3qW7pj3ZWLJ9vfuFNBuQDbzYssJvm9gwavdCQiQ31dRiHvbKcYnhD8kj7qrdGux8Leio4Ptse",
  "key16": "4AeTY5c73Ppu4xFKapXkBYCXswNKYUdmcZKudFy8Q7ymnw85DjC3R7oV9yXukYCYXxiB3KG4DLY3JXG9SoYanaJ5",
  "key17": "3hhXSgeCk1TdXsuxdnSW5Uoy3FTx4FyHi6275NiEuvAtchF9MiYoMKEcYm81RmKRyJeCUxGQkcRKGJTDdafRTnvN",
  "key18": "3dYGCnR58mGQEicWN7aD4dCoscszAxFM9RJWLzDueAyKZZnt8BXdapED1LNTGLMPmUCs47JFdAMdHriKu5Qsc7cZ",
  "key19": "2jyiD9THVHfwjfStGinEAfpUGhZGhL1XMGD39Yj2FyYKTwSCMQMFqgHQ8DE2Q5MTwtYYXtaavxb4Q32pdJxmL7UN",
  "key20": "2i5hvoeUvfb37eHMjyAETmiRMkPbGZpK5T5cPHppiNLAhnGVMYq1S9dn2KdxG4xA6qrXgtyAwZNmNow85tGp7Sb9",
  "key21": "5XAmQcm5SYdUFUNCHxBgqcuVpt4ishkuU81rJn8mPpRTkWxShXtJwtb3wk6rQEggkJoqwMioKYvN9cGso49tmQZV",
  "key22": "4xcqDyQH8BUf8kXA3N6kzrpHD9MtB9QBL54eYs1x8R5S1u6ZbYcTmzNNgRNzDcSiwP27AwYykGcc1qQYe7tPkznp",
  "key23": "57V8revJUG5mtW1DpEXo1UtEN8uS5NhHmxCP7iG2EUPBkSwvbte1T1MicwhEMRcS9q846E73W6nPonLzuKW5UtNt",
  "key24": "3x3KBoMkdbWBsFgvmNKTvY9V7xvCvEvJ6vKKSmsmVsF2xPZfWr9NoNgtTTdv27errJVTCX3DoWBrMBBy1LKY9MCX",
  "key25": "w7g3vWjA1euiLfUXhWVoFXSRRY1QSyk3baEMbQ2s3ckcFrPZPmePPuyv3KyUFHQ7whVaNKi9qB6s5TAkRf46SUM",
  "key26": "o7JdsurpLcQ1i7vPR833A1r9QS3TdWTQ1D5qFd2H85z4rcRjH4AyZ9TFsfgqhvy1KEPo9HUcKYH17YgCjzg7UfX",
  "key27": "4LhwYv6QCT7torDwKX5SaiyY1tCV9p1t7Na3xHDAkNjiRqBLskSjfX8kQvHa9GTHLuMeu6bVJkDbhfv7JQgTgrmK",
  "key28": "4aEtpqqx7hMPZdFCYqYcKisjn6RUm6B5JoQt6BGwZUUD943wsuc2LXWrJkrxn3mpyHr1duMdfPkETTueDo6UVJrD",
  "key29": "3Cp5NuhuFkkJKPVHiUnA5aKprRHRNtxmLdBpk1aKuxAbzQ7FP5oDGw5WeVzY83CWwsm9eFmiWsW4Ch7wKKoShTQb",
  "key30": "5AYxdkfa3ZgSXp2h3M4N6ouKATutyesK6PnyKNsGjQxRhjaUKFQVPcaYrvtu9xwQknjzdhxuwyV9fufzikvoeTAk",
  "key31": "4qV9ckw141tMJixA14oesUNytuGU6yPYBFXpiED1dCLaqZY1D8zdkeUeE2STaGjsHStQaRDyonc7xYEs5G4jAvCV",
  "key32": "4H4dzQ1Te66ejdY1ADRbkKeXnEBye2gcXznKsDGbTis5VJ258K6NedUbbG6Q7D3brEmLmjL3SsrmFKCUgRF41a41",
  "key33": "3Z7cQPGCuNqpvabMJou8z53TKmU74yDzSNyAipmznji68XPgyzP7QUjGLyMh8jc1aDtkawHCuWNKczji7cwjPh3",
  "key34": "3tHgViER8kCYyiuBkXXVwyV7QAhpUYGbJeqduPUnJNLpVxK5AcgmCT8378p5qP7AebihgutiP2cr9yRqfE8UYifF",
  "key35": "2jLVWVMyzRoyzZrjUETiNQtW56dRDe14EzaiWELmxEBt8jWbBC7Hs2CVNP8EFBr4HQDCqFM32CYgEGrmiDxa38oq",
  "key36": "4a79qZLDzKTmMBWossPskRGoP5ijGtTM6UmV4iazq7mhC4kGQgHsDbwjxKx7Df7gz2W8MV4FZMSMq8885RSoS2QE",
  "key37": "4ugWgJosivWU6UuL79d46ra5MHkQV1z5TAiLou9t3RDBSPtCEiUQFh6SJEMdJGtwdKTUbNn9ZeFwJwVWKJtLarFv",
  "key38": "5rAsi3AAQbPuX41KGmyhQ4Rix5qVpygphd4u9ZPHbPWfjWHMjnWGYwpjd4vN2UR7eauM6as2MdrjN4ELq7XUZkYn",
  "key39": "4adkFYivmTWng7EDWi1ngyy8671QtVzNhEzcjci8KJY76XgbCPg9VHuci6YB8BEwGMA6gu11kxcF2CQCziV7pWdX",
  "key40": "34mc3uc2bdhKEoGDQvkwcafzRH6DTQR19fk6BWiTnu2i5AoR6TdsLrUH7meQWumaDXELbE6PhSpJNNm3XJrkXHiE",
  "key41": "5GKhnet9Z45d1MfwUiCs8guC7sK8hK1B7NBw3dTQTsyQFNP9SEHHLpnidNJ9FcsAnfdVExa91F9LDiu6YaQh6qJ6",
  "key42": "5t6juE8ZiHPKGAVwxzJoFP5aY6mXK6VujkbBMWi4B6aUagvX1QuEDPz7zZsEJgxY5t9BquiMaghUcZ7w7fw5inVf",
  "key43": "ax2LSkDAqgZLM9Z4WQPfi2e8adKWKCh3naBDGy4SDxeEBXvHhB941b9Tf4ARMgJoH2dHh6keK1rDxLLgiyBNJ3h",
  "key44": "xvcjJ26P6Cun9rKfLZ2cixqDdK4UrwEGcKdo81Rhgiuw2hzYDCNs1zfLaKAH2YqoqdaPTx9v4xioicnaKNS6rKD",
  "key45": "61K1AtY6HkC6GJ797tXsAcxvWi21nFvUbT15HdUpfFKA2sY8g9UQU1gyYDrR13YR2m4j9CtsWfGeejmRq5SRLsc4",
  "key46": "3q9eYcdNnj4pkBDuWJFtLce5wnN6ZLvt8TMLCBoabFRY3PeHTre63frqK9825LMUdw6WqZB1CGcETbmQ9gNVUUBf",
  "key47": "2dh6KjhLnHm5pDqv8N7MCKVx91v66UthM8gZUcvShrjdy2ejiyVdWGc5UT1n8xfaLATT8w265AvCiLnuPqVf9onk",
  "key48": "3CrkExG1QBRsUMd4hCPWKJwNXHcY3eqpQy1ifD8Hz8disNRiubKTHMQJJqvYQ1ia9VoL17bKVdoAE3MiFMnWHLvL"
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
