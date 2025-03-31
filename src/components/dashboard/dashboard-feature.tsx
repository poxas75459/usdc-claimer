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
    "CzoZ3exp3qhV6MBquJu1qe4jKYAA8WmseVxAWchuBaKBFoWtC13eahgtkruBYr2YcCKfj2PPMbFPVddjLhgmtJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pe189x7o7Q2BJCGFTXypYxuQiZw9fLWd6DupTQD8tD6M5RivSpkV4H3mFAVFXHrBWk7hM71U6hdbj4ium49qm6",
  "key1": "5QPPXgqEp2dTdrDFS5tPA5QgYYLR1BwfaGv3eXmBdiiEoCJzmZGc3J6t9a7W48B2gjmn6Hhsqf4exatZqy8Cyfym",
  "key2": "VBtMADqmEWEbmZXxCqqFwRuSzTSXdoAcmXwCdvh7AvF8BTcgeMnFhSW7pfa2iHH7CJXBFxrZDuC6Zcs85Edd1Ec",
  "key3": "4DSf1H2mhE6X2YH3uCFrjEQWF3H41zRoFcHFqGyrNAoJvG8wfHuPed2wY45o9cDZ4YCiFSQX3YUCMzWim1yaQLyd",
  "key4": "xuztYRB27wbqR6K4L3hw8T7pHbN1aBvCWPBmf2jgDb2DAzHFTZCHxr4u9FVcSQhrkiivEqJV3zVHRthWYXCvZQw",
  "key5": "2XyJt4AEAorQq6mRZmxLa1pqpTAhuFJyi1rV2Pe4WM9266JwQGdTWd6Apos6daS4SKffjq1FsCD1AGi3PYN9zmHG",
  "key6": "8JEuoqXVVPNpDfVfXtgAYZh3AFa4TAPHYuGp1yBEXaTZLqBdnY1U3NXBx6Tr4WCqEwpLGev6AexbwTsqzsX2NbL",
  "key7": "5ZKHYdXe2FRKAoUiqkkYRfCceA7Zt1bLHjLrKvo6UEfsK3WDSXVfZU9SW9QUjSXFosEYQSvMXR4TaPjP9q8a73AM",
  "key8": "5YXgWmjALb8FiqtebtNSAc8fuhdYpTWdixCpGWbidhZ94QzJmkNkmWghdzMSqqzLfcu7VieBFECEMzj77DHrhhq8",
  "key9": "3RAzTpJy2dyzhias8Yo91w5J26YF2F58stYDeSavZ7JEPuz9tZcJw1A71j7iLUo5frTTfSTmPKJ8L31DrY337Rct",
  "key10": "5CavkZQEZx864ZAsGv824BQNKNXGQQTBXF4kxiVwiMZm8pVPgUbjxZhRBD1gnQjkvn61f9yraVLvnv5f4ZUB9czg",
  "key11": "9cpXPNGxfHW6LYm3jN71TsmzF2Q5pHjMZB7oUAbX6dk9WWLaKHhk8FSmzPo6BjnEqHS4PuVGK8EyoefvCtdLNjn",
  "key12": "4pLsHBNAyPkZ9fWTG2h3q8GREC8nRnfYU1abtrmhH1rwoH1iA2Q4nvqDT9xmbymHJvU8QZ3YuY8MsxMHaUs2xiX8",
  "key13": "5vTcYVX6HvJnDvzt8jEEBvEQRCAhRi3yw28cmhfFDDeM9QstaoVXWNhxx7AfNDHQFXaefv4oe9gbqHfdgFHctPQH",
  "key14": "2oVrUKRkB4pKaxwW2FbWqFDwySqFRS547eqzJ7cG34qwf9tqoxpRApvxyuWY8d9xPQG9PrZx7Piu3Z67c82eSUEv",
  "key15": "2xix6hKPdkrF5ri3vMDyKNBBWgb14LvrkG3fndtS1j6uC8xHQNTZNU7u2i375U9wqk5GwkRoi94MYTFBp6jH4AB",
  "key16": "4BU9Bticxskc2na8FvXEF6ZuG9W2UsgDuEf8TgroLvUbokMnGJiTXh9xFycSFuH7E3j1YzFStv1ziSjE5xb52Ts1",
  "key17": "5RBDfpkKYZmmjQGd4KDZ6Ggbe76bYA84hjMeLRbe2AuMYJmRZ9wAsRN3Yyk3htnsQwuhth3SJkEfHrtAYVbciocb",
  "key18": "2nw1oGCNV1nMU5BhxQtZ4ZY54hzUmDbvCkjh3gUxWJsrUzUmBzNv9kdpNgMPgALGzrFw2GFpWuiTEty5X33V2Lpj",
  "key19": "2MJoVASQcnGqHxuC6GGkEMZNM7BTxA4NnHmfHt1tfwhxFvsRJ2aCA53sjk9XKpxkM43tYife3B5arJ7tCQHQpAmG",
  "key20": "VGDCDxXeegaZoTKJNepecnRYPaYhhZsso4AbV7Eh64kv46dbNAczfnNbkr1WCgiF8WkQeKffRFk6jdjKnrc14vm",
  "key21": "49HxsuzQkE8FcgN4P1pBwBwLTiMf3iVDRme4oosJqD6uBXyUy8N9xXJiP6JqKZUSQfc5JLZLpjRUsdaDWuM1EhnU",
  "key22": "4LPrYJEyjitbq8uFDXBL8eyLQtThysRu19q2hVV2xRXZWQAszNgZBadsEyLv8LCSLB6KszFmxuqsAkKTh9Kyz53u",
  "key23": "4fHBeDT89emJmNXFjWqLjFMrb95cJm2dRMP94ECeNsxNUSSoTUrUzg4g5b6cs2iKHucpFnPHHASdFiiZC3taxCZ8",
  "key24": "2vA1ZPpv7rmPUtuToGWcLeRQzz9T3BJkaHAE8cJEzY2CRBSQG3NRYy6qV7DBTD8rsuSfbzpZq9q8K6iwH37oMaTv",
  "key25": "2cmDMaMpm9SoUooResj9Uprk7UKGwUwuZ7evgeufXnJneAZ2Vck3YrMiQrfFrdgrWooFkj2PQhj4zxnA4N9VWHE7",
  "key26": "5zHgxTcPrRyB1f1f2uGHRMSZZ13znRmyfVPT9K8y8L3mqv3BW135JJ6grMP2Qes7V5zyLwemwgPJRNYnhohWz59a",
  "key27": "RC79Hz25xZzeRV3mJkMPgXyNMQcDzGNmHAA7a9ZDgDv1nVXRgbjg1mWrBAr5eSzRSA8TifzfDcVhMYjWY9BA9V3",
  "key28": "4CKLDeTxZ9tvXepDSgLoQCGZ24DQzoi2iiHYFHpAkcXriJP85v6bGTxfaue1i7Y2LQ4ehsWJQNnNiKwNTxWbqxbp",
  "key29": "JbMbEfyZ9aSSD6BWRDmrFspDaR8UbhfWqNoS9tPgwWU5RQ6TrrPKEqaNYwrXSD6Lf4G2UFpu6G2z7HEJZxRjAEP",
  "key30": "51Q5GBYRkuaN9S1RT5GrxMsUQkD3Aqpwmt666w2MoUu175mXQmCbn7Ax1v7jzYEz1XreYG19SP93vS5hwgn5QwAv",
  "key31": "226H5Da2mw386XLJXMyWRWNSdCBGCuy4YxxRpXk4jXi7ymaiebr5kgVn3dvnvAfQjVq2uxWmQbCBKGA4WDXfKmQB",
  "key32": "28UgGRBW3gud9rAFLzK8h7KEYBbfkRMNVNjqU4MZSBTMNzgV6XwXspgcUTy5ydzDHN5Duya16SccDqg9pxxtYmKM",
  "key33": "4rBnDJRPUjpDUQuWNpTpSoiEVeue2HFZjB8r5QUUfSrRdwTfEopWbcTscwvmiPUZQ6aS66gaEC4bNq86QF77m6VA",
  "key34": "5r42semkfRX74PT2teipp9Wb1Ex9jfab1GbGSe59pmfovkimT2HcSxobb7rs8UtbjvS8P7WfC5ZYVzJtBivwTGC7",
  "key35": "5m59swt7BE3oVqS66N1DREbab2DPsVoFYpJ7AsPdMPEvpS1oB5TTDodAmGE4p928AHPZmBrqshzKq2Bdrt24UzTD",
  "key36": "56eCeykk1ZFmQedSg2vp2PkvRGeN9i8cRJaT9cbVVxcJ3BLjQDvyTfRhUr1Ec7xT5ty2feE9EWKZAR47Xmf2eAcg",
  "key37": "2skCVFUERCwZjFmXPVq2ZZb7pLyNRD8TyHMJM6hGMfCdFfqQgjus1jtwwHbwDt4jro2Ktq5J9Cs4TEyZEMDFu9Nv",
  "key38": "5Uuz7Cbpe7AEgrwMAZUPD8ceDXxh7c2v5XXxD7vYWq66pxJHwUQjY1yrBrTZ9x1i7x5EH2gS1KJtg2zPzBEUchy",
  "key39": "5xAu7NyifDUSBzrJBRwpv9Mg9scUQHWLxnESBvPmKdNyCVgynDhHz8UFYPKqmWN6gfLqQ8kceJKmMGmeEGvSP7Hh",
  "key40": "3jT7RPrHMbuh1XFf5Uao7yXd2DMhfd86XPyN2JreA84rnqUmxRXdjhDUyTb8BpBMEmGdFuhzLATsDGheEzbJL8tz",
  "key41": "3VefaJPN6CnFSwD8iqWDK5H7eggYsz9nvwcFMvdgZNhS9u4T8avQv1kKnMdomJj9Pkq8rYVu6cLULxS4dg3X79qN",
  "key42": "5w2CZr2QcsdgdPqYSYvV3xcJqPfXZQApto2tnPkMqQ2RqewJBGTAWJVFNcVH7YAuijh5DBHPuAiPZedSqno1DNBM"
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
