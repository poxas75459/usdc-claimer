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
    "3EjXxVe69DUZvqqs5jsVsLuh4zDKk1331BixiX4zDiFmoCmunN7k9GpXp3G2KmvhSdvodSSrhnd9Lbu8kDHMx8WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQtjQk8BhrjvN1zbcxf4vP3hnYHyPjh6mmFf6xQFQSV1ZzXf9h5xsMZDzkaMGTKP1s6WhgrXfNnKHnHSLzA6anU",
  "key1": "F1snARLyLsoDcmXznkS4Dx8atnWW34LHxJiNTyp7LDXJx6RiJRyua6Lg5m4jQfpkjBAmawtVwZnwJsJQtKvKMX9",
  "key2": "3hiLKD7LLRiioR2eCvUAPexF59SNby4H4Lp24ZnR69FyGEcPnzwML7HJwJobNc5sJcBdida7TcV1jgdjV9qz7CrM",
  "key3": "2mVJVWXmEskfjaDJXZUd9uhD999DqS3DpNnU7D474eb8gg6kwe7FLd2PGfsaMYwEaqTPUhRdVXGc7yqguPinhm8m",
  "key4": "4pTzBESRab7FDAbvtXLCF7QVti48hkkEtUhS9Dynpye71GX5Ghwfgvtnso8hNDtHVL9e28xf2mptiXTL6RXFeNtg",
  "key5": "3rZ8hb2MQ2aiTfrEWBiheebqmn3xKgFVeBo8nB23MFZ81C9JHC1Ag4XPa8TB5h7GnZnCicJnAjuVYEhi4EvBbeFJ",
  "key6": "w4gKWALte4TnTDX5zsvB3CPdop7wAUBfKpPf1GNJfrTViHwY3tTBWgaVviH82ihaXReZkgbyQQi7KrSpCZnfZfF",
  "key7": "2gjDvmhezrCEgJTC2YTURv3S5ew2QqFoBoFN2DyPdc7oqH5BywbXs9DEzrbAf5vyCcs2UWBfzQnAZRebWpJBohUR",
  "key8": "4c81kr74VJBL3DkCC9xfE4fVTjLd5TFduS5vUoctAsC9uMEjufuJfmjA1wptNfnYBjbiUDA9HGA4QGbKJ9aWrJDQ",
  "key9": "cfTa8T3HnDvWHNZSVa36gVxsabddu2vzmrX1M2h1B7Xuy1uRKBKbdjfB5Ng3L2XpdpPwvKq8VxT9XwjsorrYQWa",
  "key10": "4si7RTrTsQ4AmHvJ3UwEnSaCRCe4gHcjubwjxrBdNHJqn6aBUyrJZGkWK7YJPsdnNe9QjEafCLu1Cq16iDWUKL73",
  "key11": "4yDo5JScs8UD9k6pmNTLoYiim4rthCA5kXz4rSDrj1Bzg7bmowo1VnJ1sSFPo4nTja7MzqjxaSxnHq4ReWxW3psE",
  "key12": "2ivVvrGqxLbEwGaqY358XqGm2YUoCDiHWT9Wnv5dKRSzaqf4KBcXm7TC8nJzRetPqDv93nfBKjMuR9Edjmc5tvBj",
  "key13": "3nKwwnuLzLgHRoX3tjhDV7gxLJN1TchR6VuHfEogx7KxRwLN18YNCtBjpyoTi97xWX2PdygBVRfJcnmf1xt6cc8Q",
  "key14": "5TmBh1VZwLBdaAhLfyYoRf2C74c1CwuoUUPsVJ5t3k2Sy1bzKCfjADLDRCX4ZM3njVUobKYn2dwqxrKsyGsNKZxT",
  "key15": "3oo8Hr44JFLjbUyCgFLiYA6Nr627EaNWCA1gSw5P7hZHb5PdJ1WUnrSvGkaUtwHemLxoRFEZ75TKNcfaTWk4oJjg",
  "key16": "3Z1aDcabCLu1KVFFpuTv7wP16y26wkVV2ogcBLoVnWfudPXYCkidnhgTDXHiHGg1bjsgbZBN2ef4spWrpv4N4Hc",
  "key17": "3gMDBCVfUVgVtu1obrqPqDZPoXBrNMmaxDmFgbakS1rsTYYGnTsexPWquQ29KdRJqDtg4w8iztQqJkQipfgtWjpD",
  "key18": "3FAVY8fekeJanPHyU9QMpRVhTdFNsZ6syBGzkrD5X1mMkPdyrX9q9ykBv1oCxVcXoiiXu8WroUokrVmKTcjSNd9H",
  "key19": "2UAQ747Ltvc899VEJxgApxorCV8Pvzmo32LDJmY9MJVAEi4LmZyx57cyvnyjp3yLeG6hcEj5XJHYDsbcms9Fe7Zq",
  "key20": "VRPvo5dh8Vkw85eK3yZWhRSxUwfbXVbrTqQ1tnFuNzDiN3LwodUrHABhLsN3fQ7jXJdqioT3y2iiAngYYbUTffc",
  "key21": "52QeyF5PSoZMBnUGpv5pZstTrofQ1xxEcegzUDeGW7t3udK4pgv6mD8CdgJQR6tHSPVdQf7b62ozVYiirp7vZ5Y3",
  "key22": "5mAbrkA3PraN4NSTvemDbi1F3uxiUVTT8JCVapdQa43awfnNAW8CTRN3YK5vL5B7VhLZSbt7xDDNGHt78qvu72G6",
  "key23": "2fpJJSpdLuqQJRDzP6buJAc3Er7sfgQb5MiFayThVPy5X5CWu9keTTMXJoHyEoR6csaAD71A8oqS8shbwprk8exJ",
  "key24": "3EZcfRs5QRq9bAgm5z9nYknaeGX7P8RwmCJCrk5UeDchYJJLL9NTYB2XM3aD7fsMaRsn8abPiURW5sZVMzuDBN4C",
  "key25": "4XSxTNpCG2oeXJFR9weMQx6VQGm8YUam5dwmYnDwJNazQ2XqSbeYvRz1CVbjLrpTxMhujaLGevwSqxsABF2UoZV5",
  "key26": "2vNaCCWoqh4TW7DBFx7NtaY6XU3pb4CBaNVFVCTddcQM4JrqxyWkBbetCTRCZKfHgMsG9r5wnHiuQE2qkpmLfPgR",
  "key27": "2bkUnnzCcsKPXim5N8p8Av2emnrWbjikgKmtAiUNmsG2RLY1mAzA19MMcDHcDtxkSjfHJX3Q1XEZoyDdfAWCA9Pr",
  "key28": "3rdBMK55mJ2eM9JKabLANVX5tUCx9asDpbheCwTCFrACrCZTs2zX25euNR1BUQqjRdwvr98ernQ8Lp3rNRNfaTg2"
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
