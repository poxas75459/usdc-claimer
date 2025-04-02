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
    "4d37UYMcZXfTtdGgE8dhrQqkP6m8KVbm2N1mtSfLgVrop7Ua8GevWVrgTbGQeKkoSz5m3rQA4zB9MF6VcyGV96Py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEdc2RLV6GbCnQcRoP1aRrek3Lrtzs632tjxTAiWQUvdSMhvc5sxQA2mckNoKADXZHqXNfV7Nwz5uCd3NDUQVfJ",
  "key1": "33imMkAyE8hDzSxs6CNFP32NULGmQjRsfsaTYCUSJD2wncwPKn4c7qJbyZ5GenRVamocyoPwrqNDPXTK4qkUKQH5",
  "key2": "56LiPsxkaTDNAwHHzLXmSBwArDXgVkeY5hL1o52B4rH1ZVjzesJWiwSihQvravrpVsZ9qaeUoiF29kdgQpWAwopS",
  "key3": "FyU55o7W8AHQN6XodGs9SvBpQ2UGFKWhq7NjXktddSmWrVtuGkbXn9yHEqVo3ZR1pYKmhzah2mUNT6QkPLFJPEu",
  "key4": "3rna1br1PDAQmXFynbP98HDQ7VesP2SPvNjzaDkeNmtwYZZ4JL4im56ZtsQq9Y9u2e1bNyFr8vTH6a5NmBFa6ru8",
  "key5": "2sKcJsQcHM7Rm4bgFDAB4FeARRHsKgdHFmYEsr9dviZBWcwRt8CP84xGxMAsDBnMzEdKfnPGt7zzwzhnxss3o26r",
  "key6": "2YnXoRFaMy7waFcv8U1YfdbHR9oetQxbMhxckRwmgpBHAXAWNxncLHMyd9KysBxix3P1D2GwoBNckG39KdyfoF7z",
  "key7": "5pGC3qvhgg1o4xtu9HE63V79sBPUBxcLhK7juBqqhUJsA7U5kWZLwsFGGpVekDiAVjUJZt555diEtL5JoaJ6rNRZ",
  "key8": "m1xExsNXR2nokjtdC7WQR1BjvDo59srsmoYHA2gr83GfL9NwuWRiKyHLX7D2rqZocagmzgxQUhc7L1vXVF7QdKs",
  "key9": "2CtR7G8cvUVMrGf6r4eqAuSn9mUKE7u4cE5N7sFimwu6eYT1EL7hgefroEKoTKjkbeDcTm9njxxsAnKZGQxvj96T",
  "key10": "xWQ8gm2QxBhS49TyXK38SpEx2137TzKeR64a9k21wMFKSJ3fc8LEGmGEMTvn54ChfTM4NE55E91oeA83r1B2r91",
  "key11": "3ZGkrYuvpjdGNUebFKFDrh2hCHCkUQwTna8ZhYUzRW84y6F71ungahanizbH8PQ6S9QDmTQ28spkhLuz7Xdi4b9Z",
  "key12": "az8263jFSVC2ezNQGhrjzwZ3hRauSZo5MntJURCqm6kaMephviVWSrotijeiKmWnAnix5noas49HnQqypkn9nUV",
  "key13": "4D67dzuUqWYhVnRe1kDTmvVGhWnznh6gJapQnBAupx1Gu7HR29hNxNTZPKtShtkiV1CJAP4vwgvLbPzr4xUCTEfv",
  "key14": "2EVP6Uv3QrB31YYXWu8FdNmkYo9wM4mSN6NkAZ8zmmc93dKVuAEEedCL2J1xVdUKEyKr2DKPxt6dqpWWmv3HrfM8",
  "key15": "5B2zFv2iGXVQjVaWysF6odzfQiRKkotzgb5YU9eSbFLvSd71ra5kwA6MA9N5kwoS7VBE4a6X9F4owy5NQHjo4zrd",
  "key16": "2qUVjwQWeBL3G7eMUXfoKBHAFQrnaYEVTMyjXtF6HrFvsKzKmNcCgku6YEmbhV3tmxZ5stXgw5wjwNGBZTD4eKo",
  "key17": "4xFX28d6yjb7YDaBoVu6NCjdiagDW5qVAZ14GAgxWGPaSNqdWJjojDfjNPgdYwWFA2LUazAsbzqoFiYUP2m5rmjH",
  "key18": "qqxGiLR2R8Fay8akEDVsmqhYq2j1gEuRod35QF6jh83gBpRn2qYF45F9mYK8xaAdFkGYHSSPLoQcq9cmS6cVbjr",
  "key19": "Q7pKxngvGm9dG58GpqpggLTdNYin85n5bZHF5Fg8LKsAKzimXtngjfJKzy16UyRhHjP3pu2WdbBV6dLNFHszzvZ",
  "key20": "4CzK4Tm3LcbCYcZAs76ezH6UrD6zEPMETgZLX7LPzGZGHuCtv99QT56eTm8rb3iEsxiyNj2vFo57YGUAQ7V4BS5E",
  "key21": "2msSpaqZP378dZj3Qr6hRP6dmBgcqAXGiJ6XkhPMdbBY3RxxmCsytx173UKhcUTRvJrj2L9koE3hvEpUHt6bt35e",
  "key22": "7msvAEE7u46rrMXePk5NdyHhNnnB7yQcid6cYunH6ZcGfQ8UW3JQdWMR5QzwhsjcpJmRHRWew5HZpfp7BNGbtf1",
  "key23": "2cDccwGwyFjC8WMDxNEXGNdcJUcLGR5c8ccDDWtRnsHQo1EFGxSqpD3nBf4sKAd54sBs4cUmiJuuRR5ifS4yQ3Fx",
  "key24": "4qFVM5LpCiJ7bFNCcAKg8hRz37S3NDyBKnqw8yPYbpPS5mvFcDnqawiYcBHo3kzkPgsrmG5qRxdWCsVkWaEryfJK",
  "key25": "3GrektdvfeonfXydv5y3v5LVB7pxR6JizML7KAmQaep4aqdzpa6EjCBaZsH12St4NLFPczaq5uhgxuqrohbCWTJw"
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
