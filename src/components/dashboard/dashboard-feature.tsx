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
    "4h4FdXuiTCU34HaiuPNgHQAYPaB3EdfhtmpYke4nMxvbHm2idvVtPX8D4S9HwjHAS7oDeJTmsbiDUbV4TbtSsEas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYhmfMZF1RyUz9YKiN3hANCWd3NYpnNBa4yLBwtJmJDirX8xGhTudvWrshxVBp1GJnwM8UoUJ4jWFF5FB3Eyj16",
  "key1": "577DZw9y3sjPhAuh4LMqep2VegGFTXYcBA53a7236j5B47KkLNRj5FhKyenijRPxiwoG9oa5V8y4KU8eSpcHJvcw",
  "key2": "2c1cMfefcuifkpTKKwjaQvJh7t1EHLvmy586Edrf4HL9YdtJVSb6Z3iVGu9PF1zkRpXui7nXtZNwfLGyTE18r4L7",
  "key3": "39VMuHKhUWGxuLj4ryi7mREtykEEAfTvMNHKqhvPjN5oJrQbL1xwR3WfvjTLSLpkXcxSJsTyxKWdbSGHugQXMSxZ",
  "key4": "yCjU1usHMjrZ6ucxbQRwE3DcUqCxAE2zooxJEXAbLQ1w2pZAbWppwodxbNoJaji4dnbfWYNFtqhECL7Jg33X2MP",
  "key5": "4t3qWZ7xZNmz1HQ4GMvYVLZ3xWZ6qgaeVxqjrvepcXsQeLD3sNgyLEnU3q2JoDP494cBsYuagphjrNEgKCwDN4XG",
  "key6": "4tjqongvxa2bhDj5xVaoZuXSm6dhYiho5BKt29wdCWajZc1JpuDvqBHR4nsK38k5aaticnmFgox7RxiUS3tUgRRD",
  "key7": "2Juu165Rondf46nbZjPCdG6i8gSTD6veZg5pbR7YYbePxXQ4QtuGwHV5yaLYxLjyNMxqCtmA7jXJrn1U3xPFX9Jd",
  "key8": "EUhLhFps2c9kUPbPJCnj49YdvQZFCEh8poXBTRB7rzSPqgBT6Db8LZQZko1wWwRGexj55ekUBEUVLsG2ECCJDy5",
  "key9": "2vHWDjHrkTZLE39dpS3b4uwbjPnXXW6mfnUrgHnTxGtj44yeMX9SyuT26xzinSxWNhQe4VEDBekbigkaLxW2Zy7N",
  "key10": "5RJEvgewpnhLGdMpunArD2nwoGwe5CweDCmpj1LsLT3Q4MatHKoaTknTnusvwoeedNhSFMFeafRbVDwsyAv1abqr",
  "key11": "23VcGxGrxNusHfMqyN4BDTKkKKVqBn6bDA4a3VS3wc8BUDmDXWDhxiypBA6xPa2vNCqCjrHrGsQ6oPKbhVLmBghC",
  "key12": "4LQktchBKqzDzgtXT9AmLFkipHJM7LM1RDfPvUf1Wx1MbCU7uGrm365Z3jiNWoXva8euJJSaE5KWF8VyxVzsPioR",
  "key13": "3ovBUnzmRgBGWdUoFnM9XGcChvTa7HuBkDcUHmCdxh1kMBzf4irjk5igyNgPHS6mitbY2qfuFfU14a3axKytWHgm",
  "key14": "2g7mCiNaX8odWghFnnQ8W6hEwoE5KZi1jbmF2qPWXXCy4Cu5GXWwPx918aB77fvk4GFRKarfiE9xsogHcH7LLNcL",
  "key15": "RiZ1EiekZut2iy3dWt6eFaCxKcDCTW6cEU8sZgVbvazZTYEvoFGmr5WgJira9YTuunPNtWaF729LBezRFM92UkP",
  "key16": "4PtXuX7CWVTaRZP23cgeFNWiaGwXR1PHATqtCn16DUrFtbeiyxWwEVYytwZ7J3DL7eKoQwVkTxLPpDphNJtYSXns",
  "key17": "3hX5pSpk7jrMdMgem1diEZsTs2W3YGHVKFct78847bS1bn9jHuiswX6uFRtbMmnsq8Q85nhLPu73ykNTS6JTWgrJ",
  "key18": "314hkuShrtofYZvMQnv4uy5uyWvyiiGrpxMeSd83TRVA51me18LkgRETSFZSdGsYNmtaVE4N7uRid9En4p8mATA2",
  "key19": "2sRiqUuUQDrdqoB5o8HV8xV8Geq6GREgry36e17c3AhKchYcq7ANZsV931LHZgMtmoX7p2ScC86DaBgTKBr7Bjgz",
  "key20": "S1kX3NkeqgWmyNADKwfkTqg9kBG6W1udL36yoBtuyRKF8rG38qGj9YnzEMygiKTYsy3ndGSbCcBPbRL33TPBS5c",
  "key21": "4bESEUcgm45SnFY7nLTaqLwRGv3KxJ7e7ttDz7fe7PkHT4WQ1Bm4A3Vn7c6iV4b6qwmR44P94y9vV4V9411VVwE5",
  "key22": "4MK3e2VHgtFWUcC9AvFUzkkLUt2bqoWhtcCTEBZ2L42jFTQDt1rb4ccHtdQK2RQ5KtFjQR42MWqasi16EG2xnrLs",
  "key23": "547qo9urWKYctxTecQbiTWVb5RW5CG3kYxW3Qydwx6LuiG8kqUwA3QvZ8G2ByuSFncWqsnAQUQktQMpPBdNViQdZ",
  "key24": "4apfEJ3Ng45MzxsAd52kemaQ4Era1vp81cyviNYgo3fW12wzbX1o8QqiJUhMfqAEawz6KvpiYBgxfAt1yWMXP6n7",
  "key25": "4gsx91VscwuP8hr7FqRLQ94pNrT7KZLzg2Csw4X5vhrR8nGPuC47c5m6WMzkRpGLAyX2K72MnaEzCxTNbfiwWJCX",
  "key26": "26Nf7kM2jnnnYRDbSBUVG4jNzKnExRCdiV6X9LQEFsR465KdBpPJKvbHrybGRoKs1qAP6srrxKJbtEjCdL1dVJAJ",
  "key27": "5X4vn5DWmJwrKoNEqBxXfccXDpJcMbWctPgF684ekpqLCGTQr8MUi2Zj92iDcobyJhGgycCLDR7yQsz6tfhABBqM",
  "key28": "4eutgg8GGEK9JnW1H7VsbLo96SSNmtHNpJNA3n1BvNWzpnzujMVpbeyMPgrcNWRHAmdbKHvzbXbYvejJPgVQw2js",
  "key29": "5sgJcwdVJWKEWSK7n9XL8GL1c49JpA7UThfQwDqYibVxN1BQw6EVPw46gi9Uej4tNP1xhrngNMrF4xGWuVDQ26pg",
  "key30": "4n8jJoYmedT9GToVdoNwGKwCGhUzAChBogmRjEd5caLj7XkFLahLMxkmFZ2CpHvWR4ML2LPPkTN4zCZvycUvmsuc",
  "key31": "2GGAEBcEX4g9PV3C8qGdbUDD2k14JF6bTYkPUHnoxQhxe13jg4cDcVkGeF8q7hPocQ6ezMC6nLKWAjKpgFXPtqv9",
  "key32": "3yHBsmsCVcyPuiin6BUgGdFGHkQbExap6jny2UNJTunUvrovh8P2gikmCBnGMniTcx87suapCTXxEUvfUak8zHEZ",
  "key33": "27ULF1ubzQ7WUJkiXLTTEUDhbegad6WBoyaGwjsbDwR5UAw3H7mbnzKTbjpGYPDdBRNQwTLWvkUfCo8hCoJxvjjz",
  "key34": "4NxW6mmEq2DfhbLVvy6FWFqFLn5wd3WzwrTv6rhiJEzsjKCHHShrJQ2bUqTMeFrjgR78Kr9uLqJraBRhSKftRzwy",
  "key35": "3iaFg6hqxsqaCibio55tVaL6NFr53att7YGUQQjvqtQe5f5dbaWEdWf4ngMHt3vTRo1bbWAQBCRwzPS1QuEGPprQ"
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
