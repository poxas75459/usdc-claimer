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
    "2Pk5vGwmT7iQJkqAXmQ5ZZXU2HtX4yuDAUvCUzaRCjU16kig7mANQFn3gYBjZQofJByjFYMVycqAU5KsXYTnxGvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kp7ShQxBDxLyt8pWhfLVcgPRPA5ryQSABJUmRWwdGXPbdb4w2F4pbDrxa9iozfTdESLjd3y98WwcS6GvuUYPfv6",
  "key1": "3iYGf3RV594AgWy6c4nHNm4MbPT8jBw6dUpkAJbYZqEaKt8bYmvbj9UJZtaR2nxsEwRHxGkTysFQhTZ3dT5Kst8M",
  "key2": "5oMfmXuy25i9MFhvMCBu3uuM7y3BLhjZRNPmpbFNaxFWaqPwJXLPsfpwSHwqnhSYBMSqbDotzegoNrMSATiqFxMi",
  "key3": "2pucxbT2pta1fXNWxsahRRaWUzzBZqFhbFUHxsjHJHK3sL7efWaSgUxV5SuxMjdmmXqEcuXG9Jx7TbEAFnF2hjeF",
  "key4": "4gJEoTLRui4X27yPwejpTLrMqF9fg7qLWtnu5Ht2SadLPheqkBmz3vyU5sMaLvWPX7v8kuYoskX7vAcNjFMUzJqo",
  "key5": "3FervKL1h5jd6MQQFssKZuUUhrDiXdPu5YZiRd7p2etEoLfwEwwu3mPs9STtZ2jomnDaEuRnZpsAMGpmtpgdazC6",
  "key6": "YspF2Wj24uzDSjiFQi3qCBU1zjcdemKLpTFAiQWc3V2JuxcCPYYeRzeCFhUPdJbmdwe8f46rUy5aNLi5VsdR4X9",
  "key7": "3aVkVzXBQmTt8SUiSZm7nApgoEsV5FhPmdbEGVyqhoieiyd1muBxTcXU5Lnfx5TMS5qcvQ7hrxrDTsq1ASnjRGVK",
  "key8": "4qvacjwHsLAAZgauvsME4KYYgaoyWeQkfs3vo764KcZVwxtTSYrKopQQmWhWW9ZRAogVyCchX3fQK8qvC6GomruG",
  "key9": "yCPqJPvPJC1yDTuJWhwjfU2AFJP4XRQUqaCMccPwyzoxw6NMcm1ZFtZVGY9LcpVp5R4pnAiNV9meJZdk1NFqc1X",
  "key10": "4CsVHtN5wnZHxryKepG2TgDCSjAzgvJYDV4cPQcjrDZN88d5uBCVriSnUKBSjEmkhfnR9CdSvxvH19Vk4bWQT44W",
  "key11": "2sZxWfQkiYkrMaFF2axgrnJKahn4E1XjSbNAzMMCAmW82B7VaBWdXPDCmRR6X931LCoXhuC3Y6iSvJMYCjBdvfE5",
  "key12": "3wweDJ8XgYce1ACd5UCvaW84V7cGvoQtoMX3gydgp2KvcHAqo9BB6rpMQycoPsm2Ef6QwEKiEcpjxtzwHxWp5ZFM",
  "key13": "qtai5yTwjFbLjbghvkaZpjHo891MzQz1KryQY4fgC2a9AHQ9GKfXFAWvtuBSKeWkWf2iYtch1CFxkuk386tfrP3",
  "key14": "2gBX6mkWu4nziiTsiGaTzR9xfKMJD2eYpTh7dMb9eWBSfNKr8fUvFRKc63ci2hHzQcgd25yQwg6Ha5dcJwPTeP1g",
  "key15": "5MzJmJfyFcWKZmm1Fm1U2jUoWWFULTRwmYvzy7NVt9BZ5ttzgXQBj5dXwGT5935z6deYp9UqhyE3ZLhE7goR2RTC",
  "key16": "2nZCFWDC5z51n7HceCMdotfGPhksZAVm2eKY1ZhHiEyRYQ3FsQsRBAhUj78YPhLBMaMmZUJA1ytSAPKZhKMcZjKw",
  "key17": "2r1cj7S42sd4HzdJ4rEiLHUkYY8DHTDWPBRWnVzWTjgG7arbGsLzRiGqTpbx8q3J6TK9gtPNcrQdsZKo9R8NbLMu",
  "key18": "2hkejtCGEK6CcnbBWkhn8Vb2FkQzVuyzzTqoY5WL9poD46pA61kv5bCZV1xGS6pXTypzmjCM4r75SW7oc7m4bfNL",
  "key19": "4Em7norEV6MkDJbtUAt68P5GV6yrRuPR8eSmMhZtJ63cYEFPFQ4pdVn4LQ8VcB3DD7J9V9M694BMV7XaqhFaeaYR",
  "key20": "5H1F4dRpULBJJLsWvHVr5w7gCQKwF25Fgb2J9B2szfzg6riVBn7tFP7mUDR7JtX4rVqVks4vq4xhnJpvcArmtyMx",
  "key21": "3B5nUkhNw6UD42wp27DsHL9AK3i5PNZxX8aqKDYprV6JADeUZqCgzJUm5HWFY4NskSuxy2cKgxEE4Daj8deup2Si",
  "key22": "2aanHVaotoVWCsNHZiXmAMowbppGCveP1yR7swmcRMFh6JV5GuFYPAysCBgi2Mwj7JGHziyjkuyMVwR1dpkTTeZX",
  "key23": "2GF9AKDbC9VCdddKGXz8V1d7LGnVuwBiAAiWXKdrp5Q7796tomGbiKJVUufMdHhDA23QfZmgV9KjjPYFKjzyHWcE",
  "key24": "34TTPm4D2u7wqRrNDoptVc7pK74p59f1skpvx2uhopq5JQca28VhYBW8AZ7ZyGspdjedF2oMWgVHX5aMC6uXxEyL",
  "key25": "5TWdqUNNfu5xryFEduysmWTb5GxQQr2qAqKcwqtGR5KEkj9oYuHfQeaVmN2rJYD9durZUZ1iMEsh9wJw3ZrxuNUV",
  "key26": "3VtmNJFzk5hTSDcnTVT6jCcWDBV1FeAKTt6VeGTSeo9L7nDa11aGTUAocKYcbBMm5Hf98TZeGupkA2gUf1ox2JkU",
  "key27": "q1WdcFTAgk3wni4PjbbPk5nTiY5ifdGS4VvUfExvtNN6CrX2HiUDFWwFn3RS4rfAw3LhHYTqffzW5gECQoLdnjb",
  "key28": "32aDk4e2NwQYhhefjv9wU8Sj5hoReQUPSccefyBcNHjnfVcPPBFVsYhCeGuUmMntVNsUYu4H8oHCBr8qJNozV8oM",
  "key29": "4F423ax1nNbbcb5c529MGwCRP4HwMRP14p7pPZywkSoQKaKrvtPuxUr7xgAP1JBrHJx2TNtCGy5mFLVayj9vwUf3",
  "key30": "3MiBdudzQfLqssxaMprm99Wnk6keE1q8v8VPMpzcEsMmxYeJFVvHg1XuVD5gYqwS8KMUeXJuTcH115NFG45MgsFp",
  "key31": "4H5MDMiHWAiwRuiPj2kixGqw3XTJw8R9ukE2RrdpYq3QLDwPavXpjPK6qHtzVNJeTaM5L264Zm6hKGm2NZ3ptmdX",
  "key32": "5KMZnPh4Y15TFPPTAy6matyDEMvUPaFn2FJAdeeJ58Hb3KNuCCoHk2yME1k4QdksKPSh9wNxuD9dXudQ2Qm2Gi3",
  "key33": "4wRDnPcCTRC4bMsUU2WaHvn6GkbhiAvoSahfSUJShQWhumFKVJH4ES2gPSxk2g6Bwo7ioEkbSCmkJeWsTS523LfD",
  "key34": "5KWrATSn4b8yQmyopjFxiDV3mmHDm6jxUMeUfS7pFMQBt22WbrjL7N4XNbZoCS3Tkv1MYg2zU3RmYyKx2st8FKyb",
  "key35": "GB4xkEqofACishkuEqFcyfVrKKQV5bCVt1VekL6MGJhFxduKuj4AsZEfrrTMaPkNkCdi6BEM3fH3T1WgDZydLJd",
  "key36": "5RfP9i8eAzNZokcVqajR63pHFGJ9QQjW6q4UBqQGtivQYqVy8KqGMFjLUDNP8fVD7965cgznmhmfgGerU8mmwk34",
  "key37": "33F7cSQ35rJqukxcJP3sco9yiX3XLcHWTEyeRCZivMMMxPYuRCRRHjakQBgZNMoi5GTvEMBkKW6nJj7i6t4DFYSx",
  "key38": "5XZKemrsUZX5h6zkZ7QqfCyLEA4yqfK8wHESuf8DrS5kCcjuD8jGxQGRVhHmgozozYotcJQ8A5c1pdwWKXF4Z3qP",
  "key39": "YSiKyE1HbatHmbscVFwnJJt5zdm9zd2XoADvK7rDnj9VkSjB9HFP3wuJJE9SYStGRy5QSPAMkeJg5WkrDWE1bar",
  "key40": "24GcCMih9sbPxAQDbKCYErxFqNJjswQ9krSRTLnGb7fGMVBJJqJBStk1YffL9qcXjCCJye5ViMY21WQ5AP2mQwk7",
  "key41": "5WrtDkjBhMYikgceF5TtUiBErProF5DCUCftdhCQL5GpFkhqb6XjvS1CTPb3ZpbkRd4FxY4d7fHjXnB4CyADb6TY"
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
