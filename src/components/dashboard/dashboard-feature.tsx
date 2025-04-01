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
    "He4FQzh9NsZNfmw8KUXzgzEr5NsmE66AaSNN6BdHjsn4NPccBUHULvLVA7Ys5RzxEccMaeWDEgPW5JwN9tAQX58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gk4FkTdbyg9PHH8QhfqchuQYcRs19t4QdjwZVBRtAJNZrHpyt5CXn1sVdaPRs6Rcv4Pe6iAuTfXXCdibNnizuY8",
  "key1": "38DNDwrtwE42i9qVuFQyufJDEtGmE1SvsmivVESXxSVuNxAn1Au6bViG5ijNc6jrQUxH1FBQ89WneHudScBynKh8",
  "key2": "5mJ5oN4mbw8LmSkG9HXxBeVCf4YprgEvBomQDbLUwcoGGBCMcwA3FwzPQu4HB9AAw3WERRnehQJUc1omnP9FurtL",
  "key3": "zrKaxc1v1gaR2q151vJmwNTDgjmCLQrjtJiYD2vzEKZK6z5deRKfMsNHTSppE4SQC39ezRvPvdNobNFAbmG4Cb8",
  "key4": "2qhR45oYsdyct2j3ogqd3PSGiB5Ev9bzPfBuK4NeSM9o1BHzPwvt6PP8XDJBJt6c83gRQvCHymdCqaMAZrwuscGb",
  "key5": "3VaL3YKrUfeEWA1XrDCZZSdue9jkasRwBKKtgaoSeXpqJaDjXJjsPtazSSYkHVsLYwSHKXhmyXPrdP4tCT3PSMg8",
  "key6": "3nrPXBsB3JqPt7AgqTBQWbNUmMgegmPa7gCVnYzqs7SDSUTKr1u5EySN5U9EaJMEGqkhFD62Q2DhMcPY5W9KLRw7",
  "key7": "5tzfU4LsCtgDLBiVbxiqL5RfqQqxHhGuZbNKTmxXzVBFPuVuLu8FENyxy4gaKFRQKpCMHJfqzCYKJ5gNn4egjjNV",
  "key8": "yTDPYJixpJo2rJxRDZXtSCb6fZtxRfDHjtgXiC72Y73a9R8qD8neaqVjE5148EomXzjGTWAgscgHsNAWdoKdcL7",
  "key9": "5prsAac3n439DqmHZv1isEqDkxtFSzwM8zhDLdriLhEWeTDxVXtZXLYm92qxj2491E6tcSCBbyrJQD9w8vyk9FhB",
  "key10": "9e375kK7mymYZqAvx5V5qSi1WZRoUGmMFpHwmV5oAj6auXoDZmx1hSdVkBEGQfQPxuGPX2a4ypUMZ7cWvbLqB98",
  "key11": "qC77pSCZes3xXpq1SMyJzmPBxvzxbUsdECh3NQUkepTdoepqYkPJJxezUkoozHu9nTwGNZ5pdmtaLmnA7rtYfvx",
  "key12": "5MnZ1Q9HkjjhUy6tpjp9bZ9HA7SN1F8kmFh4G94TJwaNwEuouHzjt9kzSRWmb6kjsegY9qQxmyT1fR1GNZiegaW9",
  "key13": "XQCePX1n2Nvx2B2g1MdHToxW49gv9cqRVDnLy77cqnvPTUSh6oGfkFjhmazxj2j2k3eji4pJT6J9nGijrwg5age",
  "key14": "4LAHVReNbnHrga3dmYkd6PSXK2ZREnBzaowigzDeYC2MrCrVpwBRyZXWHFRsSdmPETt89yUfrsfyAd8sBTaEWCz8",
  "key15": "3JZ3YrSHL9ti7N5EoDkxWb6iuFDZMn4aVCDxQkrdrYusc8yjpWvh8iMMiQy1Gpgjp9srxxYwVLid8w6UjfXyb3yT",
  "key16": "4pgxJMZXc7AkX38RvxTvqqtbkhNDpSmmCag1wuAAuAE28nzB5XFuT3fW5W4p7ADnshTYarKTdAmzDp26NhZ3gnN7",
  "key17": "kTwSvff3VnL7stjCM42NYkAqGb3E9pKUXCuKCYLWd4XDSvWURE3fAbve9dsTvQ5pkg2qgW7fKpsCdQESnDnEwJR",
  "key18": "M8oHSApSxgntNghFDEuGs3a2fko2cnvuxaiMMPyouJRUmTHRtWpRyFvFTbbZPzWa4WnfZuduspdQXTjWNYPdzEV",
  "key19": "wzEWtoHfvBvYjQLyyzWju7mWrtRkDCqb8AZc4ZpUERcj6f5Vh9odS6iPqdcanQ4N7KZ4csSsQxaiwzULvXWpGm7",
  "key20": "3wt8NXNPfESYQHiRgLq8hQ44esNy7L9ZfzgywNfSaocAcVJVCNaYNTEo424dYW91qkatQKuKzdJpWcoASHHYrcvV",
  "key21": "2RnNGCPjx3TuK4MLYCJjwkrWdSyTNAwzUezewx3orDGAv2PbVMt4fprToPb96FdkauMzvVzPWNKi67bZCSnsJARq",
  "key22": "B2mxFJqCyEfyYAGReA3ATTdLWZufWSwzqgooWetdrgJKkoiADqSo33n6ZuFCXfcAEvufpaP8kuT4hc6ZQZLsWNN",
  "key23": "5AvhzWyfAvXA5h4cWQhG4RoLWe9tDJLjn59khVdSVmSKejxi73mNK94Xipde2r2aJvY9mvPDvetfdACrx4a776xv",
  "key24": "4yPsd3CvYex9ZdGNtTyz2bMtFv1YmgYPQmc413rywP2xgbpwMFR2KShCEKASTYD8XtcP4KQy1DnE9YYYe1wPhoah",
  "key25": "3hFfbYMEzgkzxMdG6kKi2uqmKpZ1U9w1wZuGS9GcGmkZSUwpMEVHffNNprwbBhyRK7uVCKhUhZbD5jGdKB4TR15o",
  "key26": "4gSEEWcK7LbbjfzpM1R5MKQkJqhefuvSqMzUHRav4oojcQSVwTxZwicPpfozw6PuEaXu6xazf6QeSdY2o4kD5vyp",
  "key27": "3tqZgpwJdaCV2wArDiqXEcMLYbMqScpCRN6gcYCDMQ1UgqQzbcb3yLVJT4vJA4wuZ27QForuWziPnJrBNimZcZCd",
  "key28": "4LFFV6Z42YjDwFufHpYdD5JEKDcQFbTyQmEbbjo7ddWMrQNJCP7nBhbJiHunC1AT3cZRpqGaDmApJDgoYe2pUmtr",
  "key29": "4gsxxFGBTar5b7KeugMuvBn3m7djVFCQYsb458fHfzH5aqZmN3Bk6c9ez786YjjHD3PPSRPjHi29eTRo5fMSBowi",
  "key30": "54qMfy256U5azKoogwVf8HvPjwpQGuym3cvvZ1XsyAdRt1dFt42Hzd9iPz8TkQSgrZmSn2tLkTZoFosVvbxWQ21o",
  "key31": "2YgKD95aeA7fMWX1sFUaNaVyK271PFdUjJyGQ7dSLQEpRfXYdnRx4WMAXZJFsbttsg9NKzCvXo5usQ9Mvr9PGmTd",
  "key32": "26y2CKCyeg36ey2hu7QV79Zt6pxXiDFKVLWVknytV34Qs8Rj3gw6UWEoFsQTDwimHeBqixovMspCGEsdoud9r3EP",
  "key33": "5t3JyYb9MdRg3CNvMoDmYGMXJeP4tRT1SBnYgw72QLPhDThxXxpe5q4xWyt5uPjTvbmrQxFXKvT9ANustrwdwPZX",
  "key34": "45XcV6ybjXTfxYHEujKZdh86S9Dhd4BuhBMMtShjimavCFsQNBsKkqWvZR29xx2xzkMKQgyXTRzzjfi1sJUgwcKk",
  "key35": "37EPXptevvWgbZPRVpmet5HNxwDsFGawxN3rYHkJxCLWngEPHa7b9iCvZNJuPLF8GFu5shzLmrZNPC8ZHn9AnBck",
  "key36": "3ZyZCzydx25e9KGkRct7SHuCXR9XLDRyB9Lz8anCEgpGfVdNtM5L2PkQBWRZqukMEHSULESYZCGa9r2qqTySHpjp",
  "key37": "rxGQcmuTVKoqL541L8mS4Ausxi34heH5azwPrQmJsARZfowywAKAudi2pBJK8rT6Rctm9M351eYuvwJwmCiMVYr",
  "key38": "3hbhyVR76k48BJNGUAVPku7vqrnRYk2iUvFvixRGSN1Evcg4CVw41Yr8y9DCPsKy9ptEQdfgR96DEGL866hDzz5Z",
  "key39": "3oKZrnJkMnuybanTHAoSSeTDtnBQSRH7MkZ3eSyTQDagNcJC9zy9PkY67yomB2BLpFtscwpckQ8GwPNW3ydqR7bV",
  "key40": "5rJndcpu36owkaLkCwVx1WYr7L292vGTYEeS6RaJmfnLgZB66quQyWAESdwuoLN4Ej349sWPQq3hDjMX4VoNN75p",
  "key41": "3FAi4y6t48jhVGCq2bfTJX57RuSF539QqBfxsxYe85wcabWWudGB9W5pj3KH5vnomQBKMPkc9UDcoBc5m9EewFpS",
  "key42": "3pcsPoHNSfehAijo8K5GoYmDmD1FsbQCTRzgDT2JNo823WZnWjvukHfE194nYXzx9i5e2QEtrZL71vLCtYCUwPwd",
  "key43": "4YdPn9kn9svV8wfFR5isjVmJTACp5xzw4kPgwQ1mG6B15Wez6Fyn9CiL2yBr1fAoVxZmRimQXJ3JEtTm2FD9sbXu",
  "key44": "2ReYjBV1vqhqVD8mdAvkGgDtDeSTxuiBiGApcZ4xyUPMuhJ1qE4yB79EThsRvDEngnzFGTgcX9tSnHpj2bXa3hVZ"
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
