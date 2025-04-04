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
    "63wwQo53v3Hax9Bd3kQq39KXa6ubaSqnuRBZgPeKPentAermG1UtNXPcJJK4zs9482EDXHquZvsu1NjjvSyZhAof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckXrdNzwcL7tTrUQrrLR93uQSfgE6xchadg5MmfZvtT9WwTL43A7zcMxjZ6gXQVDZ6D1iD6MEdQPnadTt5Fc3fz",
  "key1": "3kZRowWfUKfv8qTHJhNY47i2hNy8jckNtaKjazgwTj5Qt17rgZqD7SFeDpFCMhmRM1tG5Q2P4LD7kgBD6T4zvBw6",
  "key2": "4Nd5KVbwsezmGcF2dVPcNAhm5bNKtyzxVKbyuT6V2Ay4vokyeuV3gcfd3WTN9srw2BtFr4hKmFdqXHDHbgAkhuN8",
  "key3": "3V8UtCGPwB7tXecTvJGnHHPs62tEgKM851uWtTchf9vzLTUyYm5dhfx8qTSRyTFADSDEUidDSKjTLz6afK8SR8pS",
  "key4": "3Zwe84Cx9H11HCGMkzzsp3pBER7nsf23XZGT7ingRWaJ1EePmpjSS7tD3khG73BpaE7Q46khHx3YM4iZduEDibMG",
  "key5": "3eX63aHUwnFmVkSGGE4ZegPJ29xsbUiz7PiDmQAxTCNvRbFgoLLXFE4hnJPqP3csfN1znFWSMLdvtnvA4iiBSe1o",
  "key6": "4hEn6SYZTdYGKiwrePuKKjmDaeXJP3AdeVmK6ekisaka44bzhC4rPUMtaBtRRKJ1zjae9gcvZ7ZaEu4XxJuPppTq",
  "key7": "5JRUW2djJXmQuEiWMpoo4dQ8gc7QWU1Ja3YrLHarsb1gG4JcneKchxNb1Nn8Ra3waTq7qwP5mCDGb8Yy5MaX1DJk",
  "key8": "2v2BPofGdecUgM6Jo9qQM8m6T3BZhry1xuYb9LHXkPPaji24eV4TjTjYeK8jzGt6ZDR6nJB1YJZZMJwhFztvacdp",
  "key9": "52m8s6iAKZgJdpfToVuoDf6gWUyQ3DvtsFSqi6mpPuA2vwB1PuEUSZ1x21o4qR4Uc2UNMjUv9EsvQD32GWRMJskA",
  "key10": "5tKMR4xTFXzde2u1RFARXFyLTan6y5XM6tKT7nbS8ot1ADAdpLM9Kt73Pqg1u8pGqkBxomFnnz7iKg7KQrsMrwbB",
  "key11": "4FByCnqzz7EwWYdaMF61knFPwbDTfUM5J6N6BnjbpHDt6FZ2ZLvzT2Zvwi7HP4mfcqMnCSgdbB4xcgAhxa6AyWAA",
  "key12": "5pFdkTyBEFniPBxVeDwjERL4EBKumGtzfmXoAST34uguvbu6SezwGye64D1pmzUDgXppA3FrgeGAHBmfhiJL7G8P",
  "key13": "3nZMC1pouPrZF3zfGug58nQ71eryzXyaDANEqAkyQr49XYjTZycbffY24Czwh7DCn8KaQwFP4kTWVyDJs7xuPd1q",
  "key14": "38rJGU6NGtg7qvD5iLzDBDs5ekC5kgVkDJHZuZ7UYEZbMK7r52VLTSk9cMrSyPcFoU55Fyyc12qbAYpFbSAWQ59J",
  "key15": "2JHvZyNEizm6d7jewGwovwa39aUtCzamSCJJzQu9T7yBn7T6kxRpZ422wT7nXt4P9UKvZDfP2wTtDfsybnkwFCJh",
  "key16": "aoVdDuuXjrPc9D6yLZ1zVjMt3pAWi7bBtyisBWEkxbGAnEuzwco8AcbiSRsUEK2j86zbqUPbSBAjB2QhcqEqDue",
  "key17": "5uKKJ24VM4sK4DGjbcg53CngAttaD1h8YMyKNexXZnRdpbcTHpni3G6RJxqnzNjSA5GmbM34HmfFvmYZznC4awVR",
  "key18": "5YFWftr6ai4U8P6twNTypgrc5etKwTGut5WpYXQ6XEo2Jhp6srURqgjT3Cihf22TgsBpB8cWHHZ7iFTrbqeWeuRu",
  "key19": "3HGvUdkit2d7qp1JqqB3SPwztZx9ifrZcvz3mb2GC5vFpTTGfp1wvRqVwhs1mJn6iea6BiqLwHNPd8ASX6x6yAhJ",
  "key20": "28u9S3BWrQYt6PbmSp8Lgm7JcvuHYETw48xgCnn19pGMYZ1Lkx8QvsQFLzdnmG8hd9mt5oK5jTj5vPjGMfBfhANa",
  "key21": "5D6VazkxEHiTFwkLsJKdFHg9BZ97EvXnaXXHQKnCjWcyqjopS8LwsTXTsw5KjFvTWTGozdRB1t1JojymSnwTYz3s",
  "key22": "29FZzxGHAjHozf2v4hAua3PijkcSKuL95E5fDBghrYu8Dx3vdgTDAsxXHnZyemJtG9X5BJVqNi5e5stW8MxKxhrZ",
  "key23": "BT5LY3Fc5GpUQdrgUcKg7QjmSaoER35Jw6zJ7mgHHRhBQ2NvWtYF1vBR2Ci4Jifu7Rsi7wuSgr1PbNTLWs4EqW9",
  "key24": "2iqivYBbuuQmvPPXCYCMyc1NQasx6n6VdhQjzNY5CwBbNtWg38LjPHxESXwwix2RnCkcDfPUBPedqm1qQyeB3oNm",
  "key25": "35f5tXAzD99zM1tzDGb2uxVgd86yY3BAS9KUFgfPsYBZnJE2VaTSrSTc3BbZZwKy4B5fYPBYAZnaWMrr6JA9CL4",
  "key26": "MPRyrQx2GZ58eqNqXLzn3frjXXJWUz5rbJvckinVJF1rLT7BHh2koueiYmaJ8LFzvnRHxj1UaALcQKNbFGKfnad",
  "key27": "2Drz4tNGgWx541oXMhvC2wg9qJ82XFC41zR9CVfTX3crKJ6LgQxJ4UL6a4tiAtfCjLpC3G24z6CBpBXggJoFu2Dq",
  "key28": "3NBv99p4opFn1JxnipnmBegBHV9jt6mqdvtUgNcBEKpjmSgEHTFao9VgWKWDfpd6Lj7Rf7aazC4tp1ppSrVjqEgj",
  "key29": "3ECLfUUQHWDc1aCtWbsCXaHZuig3BD7ztDsV7qwZwECWizcvgZtk9o5KNgwXzMBekKsV4SgzBRnBiDuLXsnCGdnX",
  "key30": "a6Ava6go7DxgfS7XVKYTDJQbXoWMDmvDGeoJdo2HuHSWicory4i2FE8A2iiKm8xD6VDqmsRysXiLhE2zTMZuuUe",
  "key31": "4kyoVMKh6N57VAaSqyjcuHJtgejsaj7cAxVEohNj51M9k33F4W6xcVAD1TB3ExnE4DW9yVBBvT74TBWjm2pQ17Dk",
  "key32": "5cptomqXsrT3FmJvAcz2yr8Leeu1VJmcxSUZWwhARp3445KczPe4skQWtEZyhZBzR2RT9rHbzgVTQdimgJmDFWFG",
  "key33": "3JqZz9jQ5jg2mFGJbEEDfPGfeqsLBqwUkY2ZTQUMLF5ZyMD4cVU1QqoCyfSh62wDwnvoJq1MBNUr8TwALzayBVq3",
  "key34": "4fnbQqr1mHFbkkpmSdaTTN8kjhpNnPnqVXtgyxhRuiMQSmwecMpYF7BesxMv11Adc3icctnUuGTxFgBnWLir979f",
  "key35": "3Pzcs85AFqpyE8sdMfewhaTBa4BBCDb1k6Js4Uag7XvHVnYjGT2XtyUBmbMkLXLiD9WvhoRrV13StaQitX5hjB9F",
  "key36": "2VWWsUChAwrtgjHXz5UaJy5QX8QKLF8K72gAyixwhFyTkuKszsyurD15D27q3rHVo1QzGvCQNuquPNM8X7zs35Zr"
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
