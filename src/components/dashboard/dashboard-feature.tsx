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
    "mMrrofEAfacAWDn5NpVkbHiZoKAg1wok1KnYzsYrATmdmLJbpqeSiH2kfubAoMXrsVvstRMfG2iivMj5Q9385c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqiPCP6tMeuq7fF7r1tigcQhu13mFg2UHC82QqhajsCvsnNAvcXHtxapG8zUE5HESXfBtG6aFGXK4y191uaRxFG",
  "key1": "bhhreaJTMhj6mnU59PsBf23JzwshRbYBpPj7PZjWR9QiZRGiD6fueoZmydsTjM7vKtR19GVWtLMTLr47XPWNdYb",
  "key2": "2ERicUWtJRe1rMgtyTgnVNXwWvW1q1s6kuGwxfMbKpUCYKJxNS5Sng7B2pxLL9ge6k97MGor3ySzZtK3TacZNJYM",
  "key3": "2vSKMUAoC2dFTKof666bFGUhgNECfQD8brR8SF1PUQcCEUfLY7F8dRAwhgStG8uifAufLx4jRSqgHf25yTM6Ugdc",
  "key4": "diJagjbB3b6N84QgH1CUx2cbM2wdgA4BiuKjhyLAiNebNhptUZ5GMjf82c25fBF4uNfuSxaDginMMweu3z4dZ6G",
  "key5": "5phnbMycoCjHXpNy875pPBPEPi4JNgRKkfR95n6jvbb2eY9tdx2tTxqCe4pNWSS4VVhNj5iQzY6ZhjLciKwF39XN",
  "key6": "2dhn9UUBhGbpMzUCt5aaa9ZiUMT3v4FayjrciXB8jokNyr5H3df8PvKvMCQKZ9vAAxro68EfTfx3FPWrnCoQgFiU",
  "key7": "mufTN8PKcxvfsJtN4Q3xCQPWNv6Un6ZV5iL7FyPNTQa767ggfncCm8yGgNHno7sgFGab5xTiM5tKM9GmzGxMaPd",
  "key8": "4eg6mwUPd1bVJixC86iPQ8cqwQhpEJtHocyTvGf9r6HHdwM2G7Z3UvuYgEQegTQqjrXmKYqabiibzmCLrU6a9mtW",
  "key9": "22D4TBvyhk723xaa2BnnGL1DR3PhqKkyWhjs3BPfxoU1ExJ5eG2tPxNoVdRNDAut633wGiwNc1Mekhix2AHS9nZ9",
  "key10": "3GuBfHwRd31Q2ahhy3ZV9hbjkc7KHgSBhbca9T7RT9Po6QZcjAekfgu4wre2RE5An84WEniPCc7srUxmfmHXz5Zk",
  "key11": "4egVCtqegp5B1xScLtRUGNY1yjQ3szDDVQgk3LRn4m1mZDKLGQwFunus4yq3USB99j6zzbrFVB45T47Lhwfe4Fgk",
  "key12": "4qMrCM5YWJYmLdnQyU9TPrC7XM4WeS6ChKWr2DMSLmKdfLFp1oDCtaqirCBe8KPCkiGiqi4hmwZAYkSBhLCNH7YY",
  "key13": "hCmnr5YZ1Zj6jSx5sjVATSNH6gJzJuL3JwzNmu2HGwKsXjt4W5t5eH4yXrEGTe9qpYfL3hQw5idUDRccbn6AWHi",
  "key14": "qbxY15T4uuMLG284z8w7afp2k8QBMFR4hSZ4KdULLecW3Av9DXu8LyvVu62m2NWEd8vt2suRRkvNagzEPPoh8rK",
  "key15": "u9ZM9h8QHzZsrmciBrBy2BthBbdcvq4tvT722t17w1ytAR1kWz46c6ZfVANofDkpQaLaJk4eSpJv6AJLpeRv387",
  "key16": "2fqacLXiJ5rbRimWDA1LWrt6DSsc96t56n4jygVT8ybC2r4u9MfbWiN3beCCzbxQt5AKSedeXjXkqYJgxXY8ZnXw",
  "key17": "2Cjh5eoHSu8VGn88bkVs9owbcuwVXM8Lxo6fvi5rcZuATgHfpYWwgeVKnZ2rDPHqcg6yUUwJsKJ9VqVSq4s2ov87",
  "key18": "5CKWnt3FxYfugzKkZnBYwRvJQJyy6iECi1nRwXRyMJhiqPRSwpFpWk5RPtMF9PhrKy6egvEh4JMdF5A3itDrty6A",
  "key19": "bfC2WwmSfg4waemNvSzZQ117C19AfZK8r9UthGHVALFxmfUdN1cN9p3M16xpLd4w6WgYQUENLcctD9UjwzY7VHC",
  "key20": "4sXYsqJ8u4ZHgSXKr8fQ4pe2pyPZGdm6MdSKdbhvTiC32qVHX5uL5rnxSREPrzpcntdr8JNmy2qaTFtJK9pVvjvy",
  "key21": "QjTVR7X95wUS7wAqazJ3NYQob82BYmTA5dC2NJV2nvArrQDttCYmfXR4Pm8Nqw4d6UbdAKpnaDYtFdaGbVcCD2F",
  "key22": "4bfxUr4buJGXg9zuvMBskbT348Fv6B9cuMkMzLQ6Fo6Nr5wh2mDp4yyXnT9HpipPo2XKkfHpMh95jZ5YxPLb8aA2",
  "key23": "5hDH1HAwEjVcCcibUBTY2mf3kbjabPEPGfnFbqHAMXzjHk8hifkYPX5j7sZaxb4YymXY7dSqCNQEbkdJvvNnwBK7",
  "key24": "5BidPkTYQJa2Wn4TNkFKLmqFZbxoFeTt79cyZXe97XJLxWRkDFPyDKwxyb7LbGx5TeQdSbPFmCuhtsToZVFz8mDK",
  "key25": "5qWrVgq6wjjwBL5UVLkg8jqvDzBdA3TMN8TKzjxcng8NK1Pz8CeyZ2QW7Ybn3MnJDNVWhVvq11hsYU4xLykhHjjy",
  "key26": "4psEhsD6Uj6LKBgtS4zCNuZhUSTLU6aw4oQWLw3zHSkBTRdTKnw6t1oF1DY6vmTtfzv7wHveRSt8BAh3uPh7p7BP",
  "key27": "5W1mBbkMBn1f9xFVTjH2tqWq69b3rfrVWWQyqxjYKvNhHCcsEtWvn95pXxBmncaZHmNN9uUmRnfnbuR3sekGoY7V",
  "key28": "giugFdmQBhNXAjsxY5JPNRSEYmNiHjfo37JarHnN186LbCxudcxcAGwebHpNbUeYreumXQazDHwUikyfGiPtUZk",
  "key29": "35wyHFyKmhMnXyZ8d4gAKjTrVAuXYWF8yF2SghVYYFzhKPTEnym5a1UjBj6mwARc9xEwmn8jyvegQgbLwgbTE5PQ",
  "key30": "2hpg91zrM1gY7rSZfZJiqCDccxoK1xfXE7t1yjkoWtAzbX6KAwh1nC1snwVDmrFJEBQmGTipKpd27g36DyYAExHV",
  "key31": "4ET9wrZLG6tPpmjdKWTmiBY8SJs3jKRb14ZPmcJjdbcYw2MW2sBRsG1Ma6Rw4RwctfWuniWraS7VXz1rt1gxCz4b",
  "key32": "3hnuWEhz57R1vnLdieDEy4pPCcwnMWJefotMriDbHgs65oumcYrwpvbpN8EPsAZ7JxnPsAQr3SXtBZ6Jhpnrj6MS",
  "key33": "4f5WiwpoYwuaeL95P2iD3UrrKnhoXYHB1Pvp5dbKd5xqNYWXpgbcnU83DyYWUxw1KGmvv2YunhJZ57EBLnfakQeJ",
  "key34": "2qTfYRABEwFhTeAYgj1b88YLUvMkJc9zxYXn1iwswhRk3wFJZHVf91ANda4RgfVPdKHRrxrLjHzvzaCrTcAQFQGv",
  "key35": "3BJLtVSNNH8bMD3sTbcvvy5v6HEAy75nx8PLZL2jGe6ak51VQr6TtYfS7k2Rqkf4BQFCCwYtAV1q9tBN2V8or6U4",
  "key36": "2qtCzpPCycUgzeUa8aMP6577QGPAWuwnZvwLJ4J6n7YZXD4KL6j323U4iTMGsf36aJE1aVB4yQYMp1TJAx3AFGoM",
  "key37": "3N9aMA6vRx12w16UmNU8LFdP1PKKmh2sFoe5B2y4YS8GzLwWBbtR9NJ1htQyiof38fnBnJV3SiE6y97uMEu1Qe3f",
  "key38": "2TZ4jGXPhdT1BQmtmQMNkG4y24uefK7HGwootL33MuSzFG7nTT6MnUKRm3DLWuhcnvL1UW6K3VdFJEG3JYfSVCBc",
  "key39": "tPyopqQLdsatQHqR3pbN5VQbcgceTVDBgxXYbAxyNCyUjjPw4aK2Gu44gBCv5pSknos4KTdDPc3YEbWHZysfWtg",
  "key40": "2WegC3o371vabwpr23gGVvimoygUDM9tjjqRsaUtNqfWCVRk7Fy6yRZmn7UB3cryECp2bZcZzvVsJoPAfRWMCqE5",
  "key41": "4p8uCgk5k6RBYHNksFYoaWhHNofRJtBEYFjGRv5Prja5Je3CyeFw4m2ZCs2KeGJEZfUHthQKv8Fpzx84CbRZG6yg",
  "key42": "35iKuZVW7PL4hZR9Jf7MaFaRMypSysdTSFCLduBBCrmHUHf7z1Zx8rLV62VeZPRqoKU1YovbjBM1E8pbJEnN5psw",
  "key43": "5grZFRU3CKZbZcMEvuMPctrQjvrdMoH4PUir6BA5TGCWFWgCLUaGhRU1pJ7QrYkKfKsDQVCB2H4wsk3Ws6BSbXBc"
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
