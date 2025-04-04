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
    "9mX1DzwHBh7HwxyHhVHmmL2oTmDoemLvroGY1N7JNKA7yUZ53Q8SoxJeddPW3oWz5A2gCpivGiwmFwPGTAWke1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHVVzo9K9nBpHf5BvxSK8CGWFozzYfPjCGEEo794V4LtskKfjWFURwA72LgYxyTutD1wwnnPBZKmpgNX25CUsPX",
  "key1": "2tcCczaeN6o4v3NSWLu5MQBg2vUTNDLBNnqFUGNLT2nsy54dDujpLCjVjhVR7jEi9wMkab9JJQqw751iC1YLFMUt",
  "key2": "bVMwBjQEpyBcDzp2NEHPrqiBAQx7F3eg3nAfTM5snyVLTjbpqhaBYDjZU5dESNhhFfeJyaVQMCc6bxY1o7GXAwT",
  "key3": "3xDNJMjUKN1r9bQC2i1DxXo7s44dEKt9tL48DZViTquEpNE8xx1qEufpUizQx42Qgik5mcXnQVTaumFGfW3xBARZ",
  "key4": "4b6QLkjMGVC9MdoK9He93jt6hVGw8fYCSANungswUZtG39wfmAEVJwCiz9nbP4qz9amaJUTwPrGcRZYiW1f3SWB6",
  "key5": "5d3zFrD4bRpq3WpZMvEVyALfa5DM17hoiKC9kpQduPpSZTBm8QbDamoKfd58JRzx1aH7hwMRFGLLJLcwBDTpmwPN",
  "key6": "MPtr79FoAAjxhYviGmHCeY6uGWbErwugx2hhhZhXXpeKMWJQKa8mdvghJMmbcA1UntHW7rsQRzwMTdMPXWLESEu",
  "key7": "21g5U4wZotSj8nWRxSctAyrTJcn5n2CvZDpyvdu451mKnf35Gnw5WX8SLy7SMCtYJGaxWK9AtAeBG8jKVwr6oyG4",
  "key8": "2qZYEd3V86mRMsPQYoCtxTuN72e9FGijH1hwgJ6R6bYjLDxg4nbEyfRGraz4DjRsec6tWwrn5QkxxCBjuhQY41M9",
  "key9": "4Umyx7uqfkfh5gMDuztYC8751cnAApcBHDKGxeLq7pQoG1AhCoHdHyZNH8UnDUbUcTWxMCeWKLs1EoSm2WtWC26N",
  "key10": "2D7wt6tMncCy7ZnakJ1F9GzUG9YxfouxhSKHXuxdCtU62hWZKzi4jqeMyW4iXGMsY9uGbjMWLNFtFeiucbGgb8hv",
  "key11": "2KRrkZHR3xdLrVkm9Mh25djykZBDnqLKqeAGa4P9ZS3QSVg37WvEQ9sG8Y6ED7xowdne5aB9KMi64BwjvoJCM5hE",
  "key12": "M8ffsYbx2BtvQ81uUnCR6fFaDs1puKCsVXeMggv5un16seFJkR87UHCczvTM9xahNgoK9wFQytDaYCBGkz9sZiE",
  "key13": "5AJjfiKkzsps3XhswKDSKLFU2471ue7RCZqUuQsgbZTy1bjjGdoskkWyE4HNS3peHBBdT1rbXVBEY1GpBStHqjdH",
  "key14": "3MCC63o5wJEUFMMCcGZf1dW5HPg5za9HymaYNcGEAuANS3QUXv8yL9WDmEJhc4bqEkKPFeUqCCZMyBtoDEUb6AbY",
  "key15": "G9936kc18yV8YRfkM7UzN9yX31ZEximRZEn1HbscvYgSkv8QQi3aZv6kiQsfDHt3ZVt7q5yySTHxdjWynVrF58G",
  "key16": "5HX5YL4HN6oyW2zcDRRqXWhShGhUWdRSXPjUrZmYY6K7LB9VzNNsyudCMyZnG6rW3bgj7CK4aZKZJsUxLCNGQZ2d",
  "key17": "i7cjUhWbUPLZcMhob73c2geYxYPNSeoG7HVD3cWYK3pXx1FkHSg6x1X1tSS77VhqdcUExG148YVLkimj7qsmGrE",
  "key18": "5ggqbjdiwWUEr4eEN27bfDoQRs7xGSbfQDVfWTHQvLXuwf56sEV3jcgqsVDt5V5FYZyLaSr9uzrdWJ3NZemdTU9A",
  "key19": "2vcmBt8que3tn32kQ4qmpf5BURaohq1BF5PmcNoQjxSmEVtkaTcFJQbfY2gXqgXndbcf4fy8DFDams7anozmh3Gy",
  "key20": "5BsRWPjAZS5HepUJJgwP3oFK7y6R9v99r6VwLfVHzxqMz7eCkV4Zxa587QSC7VsdEVfGQ9gg1JH2Re4zgXHmYnDN",
  "key21": "9iDvqVDrprz3WagMUD14AFgX28YkLb2S75t29FhLEZMJKKznVHGpPaMJNVbetNSZ5rxjBdMTqHQYkRfuX776NbE",
  "key22": "3orvd5BRmg2ZF3LziN4A9tah5k2bhvmuAUzutd1Jqu414YJKNVFhwV2SQ1ufBJzxRgWBSSoXSwf3fQJYH57dqiwY",
  "key23": "4wAynkuFtuxMq1Apap3Pq7L8w6p4Up8uT3rwGAmsMC2nr3fZ8YqyvfbRi9nYjzMsuAQ4zmbFRMsS5SxSF1U2DYuz",
  "key24": "5VgiTkSt8AGcz6mYVTWPWaGhJeLBKp9CpRnmpTZEr58MoKfWKjvBsDTmuqV3T2e6Sbp51PrkSCvLNbrMvdDTHmaP",
  "key25": "p4KDHPf6GHh8VwbSXBJRVmpSsQoXLimVjuNaCS2XrDeiRpeNAYKPVKSgkfpd9gQ9iQJQ4kL2eiZWj7e58cLawgt",
  "key26": "4Wz8VqFHZdpqHwjfYMJKJiUsgfYqjDGFtyEnkDAQo8NLbAV7WhAXyNQC7ywfc26MdTgLz2Bx3e9xJ9mgGY7itzAe",
  "key27": "cLMyvhc8e1boGZ8K33AvWCvYtThGvDQJsT9uVubHP4WPNQR9XVUu5bYBSS5UJnC1NFyB58JauHaSp2b9vZ6WgkF",
  "key28": "5eJ2mBzm49gWY4gt4wDZ5pYTQz5GzRi7tGY5hDiA6K4H8LR3mnYSGM91LQdY7Kuzm77vUkJPY6LJpkVfGaVFmurh",
  "key29": "2kf99dMMWft1QhwqJVLn4rb5pWJrd1VHoWYyHSB7NKtVeXQH6d1GEX2birzEB1UwbwgkZeoASGRM4euGsi8sjpWV",
  "key30": "3stJNEEUeMHTTpvSw87wbsNCmNrjZ5uN9P5zRST9xt6ayiCntqMT4JN69pcXvCXPJ37c2xwWqiqumnEWS2eR9YAH",
  "key31": "4hHazX1B9whuji5bPvpq2Hpo8MJJ64YnoE8QXejaDYZntCbJ6YEZjdD1Ei7kuhoGfS67m5xBRYFbGU4yhCEoPk1e",
  "key32": "3SvgRC8HWfVUiyPLwqTTvyNnfewZDvNUJDyJVZcLJkxFqarrJRxvEmy2orKiuaURABv4EQaZNFad28w3u4gk4AFE",
  "key33": "2Zx6P4fb7NDD9C1BZMiVaJqRAEWWieQ6QU5rnNy26zVXWuHpFNJ8uns2hG1D3dmu8C9uuNmTjhkBeCJMitJ4wLNa",
  "key34": "3MWqtD9WBJwcqCKRdv4ejUuuLCAHgKUVZZbkgNgJTpav8zJZMwaarCd589tz2SwBpSor8v2LfimEbTPfnTRYRUD9",
  "key35": "5NRAEDGVs2iS7vydH2jAqk8coUvpvFW4SPaW9AxmxStCuRVpLheh9sdEJugTUSYpuZtJ2VPRSasWWTRdWjTmRf4E",
  "key36": "35gp8BVuReMvxytCkgwWPEoZ9PkjmWWauFuBJQaiMpcHKbhPj5P72D25WCoscmDh3JxqvjxmQonJzUmKw99czMyx",
  "key37": "3ZjwNMgzKypnjQ37GdcghEC8wLyUnQCJf9AWANBfj7ec1eWA8PifVyVr2uPoAeZ8wveaUYT4yrAQTZ2uYUiKhWnY",
  "key38": "3RobiQ59MxAvo84BS4V2oefb1gwMgcKnp1QVgi2Ut3xnBpq8bYFBUmTAxLhMemwDUnKVPfJhTXUH7WguSgnBsFh5",
  "key39": "2oXSyDRTfjUjAg9QLgWWkSceAd2CCaCp7AEnsEhxPk3ZBPGfXW4LwrxxTCAyhpxp5FBAJyE3ca1yFDxGn95oB1kF",
  "key40": "2gRZJDu4FLeaqXxWSh3KFAhAVT364Zpfaqn5yC6enQZ7pqhZ18WegsWzaX4nv7SEbh6eoQ3wSH9MCiu6hNaBRCB6",
  "key41": "5kJ7kbtJuNLM4MGMZ2ATKVhaddWeiD2XbYhbrBvbcxqaasP4vKusw4c1GG8Uk8TpQU4VZvvq7D2sJ9AxfpuXSUsC",
  "key42": "4pZN1Q8mXV2SzZZr7LBuRh2cEQzYz1ngL2AcRJ1TCjyU8utVD5FbSTBagz93LFN57oAQCVZH2mGrXGdbYfyGz9AG",
  "key43": "EkTkpLHwgijQmcKz9XJjr4W2p2udnbQMAnwdCdpf8cWEV8QuuToZGSXpPbghqSfCSXP8mCuBbLeaQB7yKze5Dtq",
  "key44": "4EJYhEXARSnWxGtv1cmj5YQZjyXs6Ua464fqFY23GJjDGfXwu2t9b2UqiDZJbXHxxvgQbMhYdBW6r56fAjZM2nGZ",
  "key45": "4bWvU6aossH1Hin7NjPHbiLqShMStsAfsQ6kkPHrRpf9bu5AGLGHkytf31mr9bbG17T7c667nBh5y7kQZkqpCcW",
  "key46": "4TqQfo15imemXFEjw1B6PkJnsbAjcug5h7tKHoAGnvv6PTBCXNHFrGf6XnoBBuVnHFnTyx3xgAGSuC8rVaLi2jFL",
  "key47": "52dcyQ9vJ5it7PPPBfgFxYE2oUYb4Tz994Zt8m9H6kRuNbqBngNN1qY1Y3hjAyj5RbGU2LMMu23fEi11DqEwxd1d",
  "key48": "25UPQGGmahgoMSn1iRzijdHKGGaw1C9bboSr88v2whqWnbcAuzJjsKdzqLC94naNZZLVEJyuwS5YoKuj43wh4ir8"
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
