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
    "2FpeJFxNUuviHnogXvr6KHPwKNwS74ZBsEUdE7FtMMHQCeaVkVEDX7iJbSDyuw7WVRDYNxTMKbyJ4uPwN7qcqgA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWC6VVYo6UFw6gZR1Jc2ByLXPrkWwQAs4vFdSGY82XKuDdGekRgLBExFae44YNbtPJvjpS3dt3Wo5Hho4vH9fEf",
  "key1": "3BEY5kopFkKsBhj117B2KK4fwTLgUEsS53gRE6P2cN3TPsKFbzKsgbNF3bg29GwCmburvuqjQFSXojDmPPdZEHT3",
  "key2": "3zM4WB5hxFPucJvH7BDY2JLqFScfsxHnnbV2P4NKGyn4SRQGevnEQaTrwKC1KP8VNDr1UL2Tb2wkp5puPNpoEJi7",
  "key3": "5AanDMgXcpTSMxxgFZwrT2CgwZQ7Hqq7avmJtyzLvhDVmHTg39HhT51xSRWhWufeatJ2R95pTByLQ5kCTPncKmJd",
  "key4": "2ER4s6o362i5pjV173nN5p7i5Mu9u4TUD8tQF9SCNrvvvxCg8Bhoy9nfcfSouSg5qW27ZqCLBD3iQDYFgLyevMDF",
  "key5": "4PvgCJ9XGo8pe3wc8X4Tn2Y6SzX319x6361vLavmMNQhkHdaekBcFxdCnQ6PrjvT6CBt1oYzcmrwVKrbAmN62Jhb",
  "key6": "5i4RMGRqaCy6GBF8rqNs6uWJDfuwgoywoss254ifA1EzjTjQkwjGU5Vby63crNrUDZKuSRL58qV7326ojEZZH1Pn",
  "key7": "3oK9DXCTcW86zcuK2x47ug5P4QeCpEL5TAc4BVEuedQVzLviSKJMACduKiAkUeDkJfkgwCzL8wMEu78WV2yWfZeX",
  "key8": "2DzmSga978SvrqDKBepn6y72xDfDDBsPdYWNyEyjJNAVLkjomL2vMGwRAWLPnasCwLeqvVKMPqpJAXr1jGtXShFp",
  "key9": "3vXFyRxnx2MD1qaUjbbjw3Ajk8JrVjpLkKVVqvK2UoDT4xRY7fRzYfkV5pNMnDcvNBAQwxYeqRzWLTCL7uFCBPhq",
  "key10": "35JKYtK6P3MvYG43ChXQvUqAiUAEyvGBnWcUo9wTfjYNZhZSg415rLXFpBxRv98VhqCRge9EWn2LfwBJLniQdmxJ",
  "key11": "37T3qRx6ALRYWyFdN1JAMx7d9VJdVvYf3oQC4g1w7LKdeU7AptFQqyhp471PZajMbV8LTu4vjVAEnU596JVmfDbh",
  "key12": "5uXtp8LBk1TnzC84YuTCyuxGX8eKjymCR8X2Vxw42mpGapS9UhB1ghxhdF94HWDAtwkFYZygBb5gU3wkCTjYKUw3",
  "key13": "4kqXeZdcxgFoS5HqZwrHz65ogBLB3jjyQRRYW74hvoFn7r1thzoav15YCyxaQ5NLTrNVmhdp79wp43EVdjKvLvb8",
  "key14": "2YQGn2A3eHh6pd9pbZcQnJ1j9FvKxUmxjwkZv5Nii5KvPYzMAufTF9rU7FAhJZWUxxmwj3goAbc868y66ksKkWXV",
  "key15": "66927tNGi9UrDV5eKWokWbYYVAvBNjpxQq7ReYSmhC9qm2EkhDX2umRXKU6u8cHct7dnBojr3XhdhqungM6bCTpG",
  "key16": "3tKKA6nPJ4njhM6c1qLgrog3GWebps11tNeuKqJqy8JGvdcmECEoK9BuryZLRjPkNbCzdSaBTdSRdXo9bWQD2cm8",
  "key17": "31y9jbwcct9CEhyxzsXrKSrPVe4b2DsS9Sv3aoq9o2Jbvob4B9vauChi5uTnn772EsDwE1wj3Xdr6togxogmFFqn",
  "key18": "4Jwe7RehscHrXfuWAa2Gb4qMasyyY9bnZ3aC5MAoPMWfDT8pVSu9FjBrp1LcANcaqYm1TvTVAsMcTgHWuRGNd79y",
  "key19": "5yUWREVUK1Nwq2hhiCYwn8MQTaNEbwM2zxJMGHiUYZki1UaPD7gaEHDC4fyjqEukRbZm1akJ5EDo1xZtiUQeWYi2",
  "key20": "47ufsV92kns2ddSAWbZbJ1K9hKvzAzSK9qoc1Q3wq19T4zT934YhRUzE9oS4jBzQoUSKwSaRmhGJkvcnATb8ftmr",
  "key21": "46bwtvHdY4mENuUf7TM3uJABi2dmbge2CPWkNAJH8BxnePTEx7Q3b5NnDw47q9zaj1EYs5JeTWWsA8QPCzxM9bR3",
  "key22": "2oRofUFrc43y4BZ2YkVDTDr5V7KShyiSehQD45wx5qKuTyPTSieUoWtXxw7qjK8rniEsvy9q3vu1PQkhrx11QeCU",
  "key23": "6T6ZyvEAc1PEefB5G6Nfspu4htuXPEpV3aGrQD2pSi1wG1FBfij5FuNd2V2587rYa6AkA4PmXrBJ42wRdViHZsZ",
  "key24": "2qDTZBENWmXz3soqzqNQXcGwAWXKkLbMLfscbHRDDLdLf42uP8G9BpdiLfA8DRwAg684SVUyarvxEPMnia1pFi1r",
  "key25": "47JzZVzWkGehBnHY628mQ2o8JeadRpb6Vc6nhAMmivMteCJXrGU8FZn11RRknB8xY3u1n2E8vXk3ZLQg8xfMngXJ",
  "key26": "4V5LgrR3paShJWBLFj9adYQvMezbD41F2s1rjBCg9S5KBcarcRTdANVNZeRsazfjZXanaZCVAQUV9KwnAAnqqo4E",
  "key27": "4KodR7jSuZR7QHJajTh3r78KpNhbvcjBdj7Z3RGKToCX49DtJ8p9zeRHUmaZoo1d1CiFnSqzxUjGsgxpUXQirBTY",
  "key28": "4H6yzqPpLEV9KebPgqhRKXXs8Yh5xMgFfJK9buXMAgoT12RQxYgB1sDgJTxrtyKLSQ1VngNbwKw9DFUv2BQ3FXDc",
  "key29": "2wA47o2Z8Mx3QmBhfrPBnYyJJ46vKB45wghXSdmdePnmaWkBgGXXdA87kqBmEGTZBavYwQCR1o6cqKKTBHyo1oFr",
  "key30": "4E1FMUSDqLCLuYYF9S6MVhngrLtJnQ7TGNi1NHxyCQRE9C3brbS9EKdEKbe9g37mSs79EX4jT5Vz48KSjm3prYtz",
  "key31": "3Z6DYGSjJJUKtRn86zscF75FHS5afaraasGggarJLKhMgxKjKTrFtqim1JFQJuEbcDpzEGJmhxx4Xk5k6t1L8ZHL",
  "key32": "5eEUzyfvrx4niK9JVuEwzhUvusFKLwRzdgSyfFzyX5WbqFjnThhWQLUifguuyFMXApZF8nCe41LC2wRhJEeKWPmg",
  "key33": "3aVJscgb1KyraBduYAkgBQgANeHBThW8rzU7Ht1fxajPshqiK5UxcToGiDNw6Y7wxTjLreTPcYvFTq3nEw237eRd",
  "key34": "2ok2CcqUSzXv4D7K2VKT5TuY5kyB9LmcEnBf2kK9MaANYStNmbCA1DMFcp8GwVa6X2zvn84fNUotZHcWRPgsZzbp",
  "key35": "4CvDz2R3CLUTWV9WgxiPJbU7rCQVHnytBskdiJi1pHFaDoUGTZbEcbBC6wdmrXjtUgfify1yhidx8D4HRZ8JwEDw",
  "key36": "MTaeAFxidD55J17F88eYBCFcYQBptmHeFtax5j55oPdFAEEsNnVEerMHfcqFyCqBFj42gdiXTxqRGNE177PQAdh",
  "key37": "66CJxt99v1pCh2jaNts64Jmd2VtMhy7dnCYFnS5FWGz6V8BKdiUAWuAHWDcN1euYPvNHKMyM6YhEpiVDum1gkVpu",
  "key38": "5uoDQfDTUDoUi1hhBVwxxkvY2Rz69XTw1TXhh8rg8Qmy2gVPgL2gBzVgGrv8gCsWCszQW1dYhoqjz2SCBUi5CkJn",
  "key39": "Soq5RixUPTs592Ad4P9msedn9DLyAY48EZrkYmbDLqaoEsqfuCyVApHymX3Rsy2iVSpj8E74ofwT1ScHJfAXsi9",
  "key40": "384AGuWiRrosjWrHMbjeseQVYpV6p77XfnfF8Yyb2YF6n12YMyHxjkUWTGmZsg1cAvrhdfXabjWMcB1Xbfw9HPGh",
  "key41": "659ZprPKU1AUpzEphUXy42iGSSGqSmCyvVhXCoB3by7BybrsVkn4YPjTJEyPkBBmjHwGnFZweyuD2cTKvM2SaWfG",
  "key42": "5dWrco9Q4dXyyZ4qDdiHVTMgveVZeK5uMp33DVYcqLhbpG3P5ThZpd4ehpWTvwtCA6EvVCsQHtABt1yvVT1CrXi3",
  "key43": "4jFLpkYku5t6GdyMqFoGYYfn9SBfYdRikqYxzqgnoEmNvAAM2iJYZT9EeNicVVJq6yEUX5i1CvSrNxdA38GcKEKn",
  "key44": "4MXwxbspS1UQhHanM2yRojAMjE5sEXp2GebbHktKDkJeS8XhuANSwnG1GQa8B13Mm7DeuwVJV2NuAqD8QCnqDo7e",
  "key45": "5EFPrWCHyjfc7Rt8jF75Xscsom4uqh8LB19bkn4o9RcMtCy81eS6Wp3as9nu8uoUqno6asajAiXwmFJw88fJKteL",
  "key46": "3GUvAd5xhrv14kHoqbdNNLihdd9vUd65NqQjfTGH5pASP6PFbRZmmRAsGZsAHcgYBeKUQEKmCtyRyjGb8S7RK8EQ",
  "key47": "3h5J1mEDcuvTuFGFRbWukNZKZmm4Ggz8omFyCECxoxxacdg6uDp6oFNtrqoRLuhRXneJzj5ybzB5cnP6RHjk23EM",
  "key48": "3bb1GVHMFCs5MaTsmgJNVsdYPAFqi14oDdVCdZY3gSxC9KyENo3pa4ayrUTNsLgpYjTz2jXtG2Y1V8QJUDp3io7d"
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
