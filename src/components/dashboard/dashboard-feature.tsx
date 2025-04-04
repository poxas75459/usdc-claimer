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
    "3wooUVfjCEpA1gz3a5NSqRhsU4WXDqePNJLZF7NVsbBthpeDroTDsGWCVRhiEU7Ys9uQ9ZaFq51yGoZaCs2iaRRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YT46BsSS4acBXYcsRhESVNHG9bXVGj9jw1fyTPCDxMyraF1GUhC2kqudFi8NKKBuoqX8c867LSbMRg4ZpnR6sVN",
  "key1": "4Eu3SrnCi7UQqkVx5np2o3HswxJsXKePUAkezWtxpL7tgzUErC87UKxmdWgJLgiRRQP6HRzExpu3qYWiLuXBRgbL",
  "key2": "3E7PXyQ8CEivj5L2oLdEQZ7gTfWzMu861vDbRt5cC3pJ5kUWnEb1ihsWUaU2dbCL1vFQKhV6D6CyKbBSZSUtRhfT",
  "key3": "AebsAm1u7zHpMwpgL7Y4hYJb5wWBXWeDAMLG9fFmLmsPSTD18GWHvHXMp4KhwdUdMoV514EC4kRZB8vS1pGGmJA",
  "key4": "5Te5k7esRTFNLL4udfWrCHYnsQx3C1HFH2Bzafj8z9WkLDLqZnLzo7ZL2uBRG4m5XVShrZ3H8gTxVfQf117Vva4H",
  "key5": "2ALXf7xnSoNneyEh2JrFAZQa2mWRFZHukQp4scqii7qRocsD8w8n96mByyQq4icvJTeKc8aAQSx4mw7TpgAcB2SQ",
  "key6": "4NX7Y57dPgQWCqcXxDr8o3dBfiFEZwfnv7t6Jj2DWWJiFSirqkpzBttJ13ZN1zaXvbDJBme8Cxv8Dok83ibKM57H",
  "key7": "tPQBr5ELA7dL7DJGExL81BRytmcsd6TLSS6JbNEx28MoFUuFxX35R556sTwmQt9gHNA1RWEjqZgAAJqSETJqsLL",
  "key8": "33wciuJRv3xxokMXpFtRwzjNdBp6hUxNyUPzqwv3TsfEH2Y8EZkQ4LHaV61sxWVQ1uGUb6gG1itHFpoGAiVxJFFp",
  "key9": "4SBLaPfWKfgFepyNHipWKnBWPDoXmXAsZ8z86css1LfirseN6kdxKWQGsH7v9MwqEG5TWdPkPsuyRznM6BfSQKsd",
  "key10": "3v1fVRS8TQDpBmHNkpN5QvkYPc86iWPp2DV8vQ2mrVyeGd6ioRY26p7jsjeRfK8VQkdLLLAV17Q36ctTdoSVW7Dy",
  "key11": "4m9VtUGn3rSDW2dTDbLFAYejDKgCiUQrTzYNkg5ehEDRgMVCEoXaBXYrpHTdUbzQnirys2CV9x9j3Wr1CtTa3ik4",
  "key12": "2azz829yG1DKmkeVwAa3jbegHgCrBLN9qzno7QcBxvEpfWi36b2mJ9wA3eWjCu2WNwTu3CY9D9pgtcUPsM8dWCNX",
  "key13": "5drExNxpFMbfcATVTFE8kLrdDAAhqYJBp2MkpHMzf1mXdRjyGqFrFiboKwsRoNfwqaoYbi89Y8KCTdGycGekuSzB",
  "key14": "4BVwPMoSQDYq1mT1cxTPtX9pdvpTXariwk6wuX3iLWqwcgFFu2MsrJ6Yehue74NVZ5KpQvnJdY1HPxHT7baQzbwh",
  "key15": "5v1VZ2s54q5uMHUotA5TQ9iFi7e9PBTfVSMimmRcExXdc1qERb6TDGZd9CxrX5iExqYuLPB1nVBQDcJjjVaegG59",
  "key16": "4t5NG5rBL6A1qYPvC3BsUCJQxixaP5LDmEj4DEt6XwNrgo7wWVHZaLGCH926y9yoXNzpThQuCwTxxLfiPraa4zjR",
  "key17": "46JsKGb3NZwaXd1a2s519VXiBmaJEEWnCkVcTTvjW53JEdLwxyG1RRcKYyKJtp5QB8cGktmdSzxU9ip6zL6eb4AW",
  "key18": "2sKjp4ZxSHKGsHT6ptS9ksHwziPYVjvYz6jjutTUoa6XWs7wqq315oLyZxQGt8AHdXLbCK3NgCoi199DgudR8u27",
  "key19": "2PYvXjxe1s5wxQzdhYzTcapKPh1GCgAmVwUTQh3dt2Akigt3usBFtqMFEEZPpVg5AAdSWBq4AdbmodZm8qni919F",
  "key20": "5FEfHaZF8ogcrQcnck2YScZwM8cgToZZcbDHAZMgxbNiBjAwKuHgvR5Voq57hAgEyFZPb7T49cUVTRTFqtUmsycy",
  "key21": "TB4eFras5SGRFy5EZjNeZ9WeLtN9hBzQq65yc67CgGcstZ3ggYn5ZPkZKQc5JKBgciaWyrNXygKMBn2SFftfcvK",
  "key22": "JK5DwgDT3mtFXXRSWSCXJf9imw244etwRWKjcuGrceUWg9M5Re8pHAJ5F34yo8ws5nsxqxKVim1psf6hqMXaYda",
  "key23": "3UrVBeGBx6GBDvGqEJMQbw3tJ1jJbAZKJXHqNSbcQ9JNcMQQ5TEtCAbjQfNSxtpmrZU9y5nawpM1kRVvaaGzzeT8",
  "key24": "DdbcJYsFweVuS3mb4anShfd93wWYDkDL2t6vDDvk9kq6PgmNoJWvnfwaLf9Jaso96FT7nG8sBHEsF2RBKZ5a42S",
  "key25": "VKGATCthv9FhgAX5eqS8c6ovp5ziG5MjN3PdCmwqY1WvhrrqaRjBtEFqHZDaZmqM6rfayzYLgEWMWqJneirJNz4",
  "key26": "2xrPLh6QvB4uWYZZGwJUYssiUFNm73aaxdjg1ChaXvN37UkXD8L4vfrAUiVfSuzdesANqK6jn4zPBZt1jDVerzgD",
  "key27": "DXKeLdx5AJr1tiz2XQpi1AXcSCbJ2yfmYH9G8ceBzHuY1QsCUxiVChQADycxiKxBCoMGdGDi5gZtEp3tCuZBB2v",
  "key28": "43pFM4gyFHToDfWSRU2jaDqwqEaGjhMWDFHTnvQQxsXDWcQRJz4W1oLWUrtt5rTeu5VpnGZKZuoKQoBV7qfqDxBN",
  "key29": "3aCUH9n7oEx1CfjE36vCvL9kJ4yLrd5ZKc1hfQbx5MijVNtk2eMU6gGwhbf5974Kf5kv8VAZ2f1Zph5z4hHbM1LY",
  "key30": "4Pqe4x6gegQpdMb9bbVBmB9nKqRncJWoGqgHuE9iYkkWRVkFn2saiJYghkzNbzBpK5Wy8Yag2Q9Ji4Xm8V9dyAC4",
  "key31": "499vfzBGk7S8mQFiNHj1MM3xgw4yw4SJWiYVvHwAAacUEbeXPeT8C3Ea188qARS63VZiyuzWguZGunfYwsn7n4vU",
  "key32": "3Ny18xzVkZfB8qbzPELLRHXuJARAu1SgMHNyfyui7P6Gti7kyUn2vvsKzRAAEJtm5QJ2KNGXT17b5CmqQymGSqsA",
  "key33": "53CZxeGEMigST4vjrEtbwX8rAnjtU3DPyRTji2TrR3MBMkunRfJiw9TvMJVWRmAWxs9smGuQziYHCG67Q4AosMtc",
  "key34": "4FnKGNCdQP7PDtUJwdfvrKso6dci7Wpt2z1CTNFNVT1GHENZxVgaHBAaLNo8WVSprnTbaiK5oFZqUjwhqjF5kvsM"
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
