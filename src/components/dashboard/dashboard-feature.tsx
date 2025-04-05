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
    "4vxWroNPniP4ZRXFK9JXaNy5NaYAj51zNYFs7BW7nj9Rvn5JhUmQ7Cp47FAhwnxVzZUvDamM1vnMJH3aCCwfeSKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQQUHE7MHMfDbiBoaMjeY7QTSdT7dMXT9ESdgG4mssDZL8WjcwxYoNeDd2D6EY2mXER32TL96fBarTTwJw7bYeN",
  "key1": "5rnkthfJvKXXvd9gFdmws76trcZHqN7bPbiAiZjJqHkgcTBdEieKwqeonge3wvaDNWhYhjGgdf417ML6WA3rzesq",
  "key2": "4gfBbTDTUxnfAH7Tkeoq6vfcbK8PnBpKuwhbqZsPzKMzknMLooQpGJuG465Cb4Q5bBPJkPpJTyviDcTdzSyRvGd6",
  "key3": "3ALZ8CX9VifcULPdXVUoeqK9JthCMGMdWZs6CEuqvwhUaAjmHzaXjNy9hSZCZrx3ChFQ4QRhZudr3qNQQzYgz9sA",
  "key4": "MQjZF7iBUvQrkDGFBM4khTUbh4odr3aDVL5u1CYbmzP6ncXp17o4kUV2D3KwmPeTbetsRd3rmBVh42uorm48ekF",
  "key5": "5u3ghK9TEFz8Zs8GXhGaF9jTk8UvkBKDXkhZsXMCBKq4n3sab11NX8rX2zixAJohaDPk1Tw33DF3sbt9kuxDPx9x",
  "key6": "4haB15hcnVKynGCatERGoYPLoBdzxXn5gQEgusqbP8nqX2emvXZGZkkrzxnTSBsYTqNqbKumQExx8CeDwBo8CiGS",
  "key7": "5T1iV4hJ5bLx7MpN9ZMyy8Erg5LjjLu6UgkkFDJjpti6X5CyDyeGm91sP2Z8KkxtLKQ9Vqu7dLLHM9btwv3zsdy3",
  "key8": "BHVQg9dVgC1HXpUqWArS8VjYZefUvSPGHdxdrTAt7XZbbRMAYguahUyK4Vpa6LmLuRp4Aterikv4S8RqTM7vA5B",
  "key9": "5knFDrzipDLr2AWUUWrAoWjoV4qbfuiqDDZLofTo1C2Kqd65jYQdNQufhQR2eAupm9di8DpVjKNwTZ115LJRVxRZ",
  "key10": "5bWEA151JTosPff5dSde5TrTHC282mWPBJGUUSxd5cr7bQtswVx1V9VYn6wDNRJyttBPmLjy7WHAxbY71LcBX9hS",
  "key11": "5cHiBpPn1pEadEThDnr82xuVbT5ovQHa78xSvY6QUYpR9T9JAYAYqJ8xtfF3zrCYEqoexSLfcYkFXodyoxx7DuFF",
  "key12": "4wy9L9Nmj1zfySTkYewfjHbiCfGM5d67ygWmY99bRkLCnSZ6NHvRZWyt8nhRSvjN7eE7peUeuW5K18o6BhUo9Vfg",
  "key13": "2RNGtB7dZXdcyKQQZMbQLLBmg3ZLM8jfGS49Xrixqq4td67DBiV5hMpm1bJRdVKLPJYTPz14Ynym8d1jj2EXMNng",
  "key14": "4S6jVoQ8eiYV3nKRSVwQjFeP9bW6mXaKsUYffBgYi1S7rGnD9AUAXYbF83aEyy9LC4WxXeQBBqKhwqxtcGHU9B8u",
  "key15": "5RTC8Nffuu26sCCNcs38grDbYmNfBbGJgDRuF4DLcaptpFXUgWtEgCZjQygqKMPXvPWNVgVhnwg7r8yaDRDgwfyo",
  "key16": "ZnXNgmKvmX2oG6TjEmYGwuPMRq5E4fUkh41FcsYyR4zsGywdBPF2Y6yTVe5pEihvUdUm6k8CyQWRtYdJSAWJh1J",
  "key17": "5dwqZVGCKYKg9iKFogRF3ywsKv8z9pUjJJo7tY9LSB2yAwctASJft2gZ5pbUrW43XUv44CNudj7tq4TfHsQkHfR9",
  "key18": "5sG1GGw1DwAhVt7HXUGfekGBpF3zW4tgML89HKNa8FcGxCmZGtAZ7aVmQXLaRnuWTZ22wanEPnSymC3BviCHTUhH",
  "key19": "38kJaHbxdT4QeaBrLS8hJupZ92v5nQLeXeHohiFDjWHjH3JxtFrCWXnScQid6LHjrUt2Varwb3ngvha84nEpWQ9A",
  "key20": "3SxUFGxLbwr1HDp1Rkr5DrVkuLfePDyJvdGWnKQjSbdu3wa4AW3AEXJb8DBi22PH4sgzGpFFDRrMrDdZcQksT5H8",
  "key21": "3hwMqXkqt72Qi6CAdQJ293FKDrB2Er1UzKH4xM5rVFMz9H3S46MshEqhfkJvEfg6XWMUghWQ6JndfcHusCUWKdFF",
  "key22": "2gKpHg9qGvtUv8m1hn1jwYAZrWKSnqTdsM3hhJXiE53Cxs17FpEfc7nH9rzbCi5hdD4eTS221kEgnFUzGDWusz7y",
  "key23": "3vvdJrC4r75qsjxW8SJAFRkC1jwu3edm9U1Pymmoy1yPDRJPEGk8MjGaB8RhU4PoffN3oG2hNR7sT5gaaBcaYGmB",
  "key24": "4RFqT35TsyYTqiuWo8iH6yMAXiFn4RrycUhGuvrmEE9HVQ4A8Vt8bWexetTZaJy3jzFNNop8TisqKRAcVApjZYad",
  "key25": "uyckKjNLLd1pjKUnDcvg3Px49z2pMGD2DXL5CzoBEbGMp6CdS3gAVjAJoKCQX9TUTEB9wEcKAd4wbBSh6kKZJhM",
  "key26": "5t52CoQmfgfoVGBRV3oc94faWPaK6oGc19K6xELwjjv7SPyHG1omQjvYG5UfwPZPdxRJD2PgXhaH1BCWYqADMoqS",
  "key27": "5jomoV7QtF4xMXbyegCXeitvz6dVF7MMK1XxetTUrfG4618Go2vEbpd2ZonG2f9g3doBRmiiWfnm1V1q8icYUr9U",
  "key28": "46kTQx6E3Qnoode27Pwwp7QRMqfLcJM9E9VR8MYr9y4iPsyZT8UFzD3qSpExuKVXxkmBdYsU6zDtBH4B9jhPbQUV",
  "key29": "3wYyDqKVTfSkrnisyZgQ6hSyvZCzCvu8AQ8TCczMAvdifD7vJgdXdR8HCSkwzTp4kjatG7StkpNpEvXMkLtdZfpf",
  "key30": "UQ1EEfPMfCV4Ze1S61huzTecnrYwWu4sB4qSapLfyvz89bJ9TEhjF1Rzto3YeACgtTDdt2ewFtYVQWdnwM56hUC",
  "key31": "2TgiuLMU9R52bhcXLwMUmxsPjfdBtarBiSmL5GkgV4khVwfUGzS4BY3ZcJL2wXdQsJDtTkcVzfrk2XCLciLaKJEk",
  "key32": "479GonLvts6mu2fVjhsW9teg4Gur5kSBgJmNJowmbPuV6d4iCVmLKdQf2FKkmuXxHmmMohERcAmrRGTsjj9otRLg",
  "key33": "5SoX192rxbdacy3g5m2qSr3H7K7Z9RKD6zUGYDTc4sfsTHiVsGg1RnxkQjqB9fHiBZBATNh1wKziZzgFV8zEs7pg",
  "key34": "2eszEL2qmwdqa7PQpKfSSAApprpCEP6wtcVnqdmEfRk3ctgQiNiA4eaxhZWCDJii8trH646gEEBF9v8zk6CLNtnU",
  "key35": "2LM8v2tQ75pgg5hK3dJ1Rkn7LTrR2HhQMLFWhknY1fFAuuuzG8PMZv7N4hQtht79AeydVz5ywqEJgS5nKxxZKGF3",
  "key36": "5TiSKEUX6ojR695KGfyyvRmUt4BYcgHzVqU4XEfH6fSfcCstJq6mzN3oWGxC8y5QjiRRAKLhm9QJtN4qe2s6PcY6",
  "key37": "81kqdfVZ2R7NmzhGnfjDxdUQCahSjG4raC6SVcjTzEE2dtTorWf4Y1QooE9ak2BYuneRfUnwHbzUcqgLGBr5eRq",
  "key38": "2NWw3DRPx7jJCzPY1jU1LXC8Sf1fCJyqqWWm74yxwgtZYnywSqqKhWfnsRPaWwV9o9HcHCCuJzputAYQt4s4ZNQs",
  "key39": "5Sj85Eo4KsfJVZx9KhCevXMzuf4S6Q2ggQR5WejmvSa5ZxvrdRFdXa6fUnjzSawJhaHQdDxXPiTWDCyUusrjsJo9",
  "key40": "Mfk9PNXZkL93oy9ZLVRcVUXL81d5x4foYd5miKdQcoondsjyGGpDgwm7L8os7j1WBDATgGHowGBw98jziP5Xmqi",
  "key41": "2xA3X6yEAjz4Vfj3vbhKrzraFYATZw9VsgwaGmwozbadD6JMj8Tb1MUkNtNmLjUYm7Bc1LCKTmkbUq7ZxsgBWD1S"
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
