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
    "4uS6jtfKpR2UNiUoEm6Mh1fVEKbgvbFX9CRwo2E6ernwYxXEnoTPhRWmsJX1VytYTRQamRyAbdVZbhYizYsG3dnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvUvKuP9qDXPe3d39KaxGBj4nkocEgZjJVDQU84HM69apvatb3Nn6Q7FPNyvjUgBQ3ksDkyM4yEdHmFSjk4Go9T",
  "key1": "4XgrWD7Qe4LVvWkRi4xHdP4KXQPVdaNXb8XuAZSAUHThQMkYAGiRy1YmvUppeyHuV9FJtQDyGMfvrQeaAQQowTPo",
  "key2": "2N4bYdA8Ns91Mo44UV3JPmaeb7SQuF6QyBDHrwpkFYtLPHaXwk9c5HARVzPt7af4XMhaskTKcHRS64iKCzetxfk1",
  "key3": "2R1Uetf3yiCpyoj5TrJQ3Asgu7oNfc9ToJtp81oM5iSNQKUKfLHWKAXQQYFBTRRHMRvXbkpzK1QrfDMwn7gVGxV7",
  "key4": "3UrNgjtKzryUrtFHKMfhqcZniRpaq7MqQPWgQEZZw6JmskLWau5vZ5AGyBVBti51CHF1xwewdmjHPbjo6gHaWmRg",
  "key5": "2qqdmA65oFDc52fRgrwYHLFrf5cXRm3ReryXQJ7EYrNZbQtRy9epuDi3ox2Km4tyLuruKWfgPkSsbxpXdERNf9My",
  "key6": "2HgiDbscyauTQG7E7XSULomWriSidS5prDybby5zzAxY3vBprWwkX1WadRjENBJE7B1BJtQoUL3RyjaCZTmUW3Mm",
  "key7": "2uBaPXYB72N4JL7goPaEw1Yg4iZ84ynGxwsrphy5XmLqR89chpik3MGVc5RHs7hJugKkBYX4scoU94zWaVbewJRS",
  "key8": "3ZbsFz2uwDpuM6XdzwrXYaWJV2Su4cdBQWYGWHgfBQynjr6HUDUbDY9WbSCM9Hcdn9W8Lng8JpkMspYZmvpsPABj",
  "key9": "4buhfBZLKcf9GkR2jkQom6xV4cMdqhX1xSuqk4yL4mUkPMor7fKWzXVbWmYU8Hx6YQkspeBByooGAf9yUBWn5g3L",
  "key10": "43UzGUyHVbaZGPM2KNnidKNi6BaZ2xNm1S2FXbPTbVZm4PGJDZSZyYzbBD5D9Pvs55yiGMtYm6qeKLXFCQbJyX6p",
  "key11": "2W5YQLqvMNaDHUvd58fym3KrkutE1nEJwY842FRNe4BGPY34ro4kcmBMcYHBhSnheK1GpB6t1E6ZNtFiDgdrDHKh",
  "key12": "4SLmJkdTTpeRD2o5bGtRDXVsBwTV5ZsMb3Ct96A2dFHVftyRCPNAj6DqZjjpBf7an63iCE7WwbFvxQV2FfvjShuW",
  "key13": "3viuRd7sAsjVXEPHxbkTkiNK1V1hG9MwjWGzDUB4gyi3m4KDqXgJYnePg2hJ9Kyuv2QpcivxbgkHmFfNsmaCKNTp",
  "key14": "2ttS5AJne5YHZbWuVCkKCSKZrgyTueAavzhf3b1tKfU32zrhQZAwW6Std9Mvq32ivBS8LUwUdhQSvBqSMEEtEaij",
  "key15": "5eK2qJ2D26zJHV9AT7RK35zb4Mx3ExygmtwiP8obdGP1Rr7tgs9UvoMcpZQ34sHHgNJokfXctoPCPMUCCNiSkfj8",
  "key16": "3mfZJ3V76fNP7xv8vnG6V1hELbKcBZAEpuVNXm4BKq9PqRKjKRt9nJeFFRU5ZZduTeEjbV1EnSkNofCiC31iZtqA",
  "key17": "73Ki3KoXucm4sQAZWH9zchu4GG6BPRiUJ1Ti5EkMe8Gb3TWRacaFVVnr3HxXVn3iQQHhbyWi4HAQaWHRH2vLoZw",
  "key18": "2ksVCgc2pKHAJ1uhH5Jj9oHsyxSMgWnNJjUqu4dA4z6iSS2iZfXLkQqzgGVLzKeGbDC9T5P1tBA2PStKmPT8o1Yp",
  "key19": "2PiJN8zyqLxwcxNFea8MhTgGznbtBdugmYedbLBcBzQXGMs66gKyUqGj26ehtB7HybWGvR9mQ85kbpGaF22nywK8",
  "key20": "5MEj2YxTkzYG8cV4GLc6hEeSNZFz4MM45HYeAzR9yd4SFhFRqPwaFb5ftmp9ZAumxVAbUtSq5wmc9xLLztrbEtwm",
  "key21": "345uhyEEnR8v13EoPixZNjxw4oyDmqMJq7y3PwwnecbovyQkMD48LYeKznSe4jmQg7hVxrxChKndY5f1mxuFh8VV",
  "key22": "X9YeT2Jo7SrmUC8TpC1tEmSmTv2KEkbrzTgVXkyaX6N9eeK5YYbfsjegPtXkHmYVEAREQPpWZqQUwFuURCGzJPn",
  "key23": "5tvJYQrA4FT3xfdRfy3FP1UoyeEcVPFVNEL6znZhHDfMnwxYbv9GGwHLdTWsgWCNJNEZoqV4fTAbovZyGt1WLhmZ",
  "key24": "3viYqWmA83GX48MwGpMj251b7jswArCvqqw1Z3oaCbuxtEHs2kvAnKW8jLgNT7fKRhqAEo6mhJbVnVQS3uUAw5e",
  "key25": "3vmW8n4fi9D1dpRejEwfmy9JnEdFZAv2WLjarM2EK5AtWofVtS7d8oQkP5NsHyJBM1bV24ARNgFCD8UVGVMRxjLc",
  "key26": "41vyKQ2y4JJ4vFduuo6VZAFDsyZGZzKWA7fiTg1Bma2gXxDit6pocFoxr5HHBGHTHsB6MKfYDHkLCaz6vq3MHmuK",
  "key27": "2uJitpVDFoNz4RGiDm8myQ8R1gYf6Ld6zQrFM6pKopd1CsPGKm7v1DDeDdXC5MFopmxqm75uYR4mAQF8cHGerhmU",
  "key28": "3WiWxZo6K8UjvoGEpF6uPKzdnL3u9NmqBP2BtVNEJuy27AWJwG5Z1mBTiwh4pxKU3CXcRfghtjQUWkNNn5TCDzv1",
  "key29": "56Fs4hbdje6LVHeRXRTYk4KwvNkz9gJPcTuZhEq6s1vMqD7aXQSAHGTSVJ1oh5WE4jugkeaSzW266u22aF3ZPzcx",
  "key30": "2uEC3aUP2ahAon9uvmZM8JcZdeFTrX4mcDcz7VtdJ7WxRQx9P9vrdx7ywLJHoSzeEa3EFvjVWsFhVL2TV57E2Mr2",
  "key31": "4mEn9EyvJkyDsqhRVvChbotZhWRhHKPZDuZ3jqnvmkduGonHuumCa6W8UgCL2k1ctwxS6EtaxAvAymiQbt3R8UtT",
  "key32": "5osJN9rEVghPbsmtQ4iAePrTysqzvw2zXRtgoK9hMMCpcrq6vp4jZongQYqrPrdgNVd98SzzQmsgSNTfHcDzTFBG",
  "key33": "5fw69qyw2FfPKNWqGkUC9THLjA75iHDkrgviYLtJ2punKBTBVDxTq6YLZR7z8HYK7vKYPMzBu3evqZQMhGovRtba",
  "key34": "3BaiZimLR4yASwn7pSGUFP3WicnTo1hWjLFmhVAMHUFuwieXyasv3RZRxAmaA3xSLv3uSzVgzGf8znPcqena2ExG",
  "key35": "5wX45nu9mnWzuNuu4ehZNHgCWYHKs61Beg7YLn32mgSKeWtRzSzMbLW6v2bjz5QnowNqKvNP7TxngKjStrLRsnui",
  "key36": "pHkzWm8YVEbNDYSvtRDsh5gLkPF2pm8Lqz9Vecg1rqHbjrrTjYvaPaR2JndfYMUecY2QcshhWsrR7sQSWKfTm2g",
  "key37": "3Qan4qVgt5eA8puuvFKJA6YM84DRt4usNxSyjj6tU5p2ttFxzGCYJ5JvxnKWV72Z1LNA44WsxT156nSkx4E4TDZn",
  "key38": "2Eaf7P2Knsgtv3PaXM6b5c47pzZNjsuJNzm5tLziLV8kVrhEhN78GzUCyXA1usLQ4us1AY2GzMR8A3iMoJdkgrDW",
  "key39": "35eWCCQyhXYsSJ1dqqyWuiYJHvRDd1AWM2RZgPW4AsmiF3r3EFv2CqpFDy2beeVFyUZv1hxAfmCbyzTT6H2wxZwP",
  "key40": "64G4LMoSLPwgVtgkaKeDGeJcPGrqoApKqjZvm3i3ygvYv64rcaVneYatHAdrUazg8suzoaFYQcj13MUPaQN7YAah",
  "key41": "53reNhXZatBu5F6ZDKzC8m82zEmKPp6D4nwoi3bAoSm2CTHoe2NFRgr5iEa31Vz6woCjP5YYp6G2VR2Gm1q73TCT",
  "key42": "2MayHYM7uEP9FtEwQnw21Wya6vF35qjP8smSdet37xdtTWvaH8wXXpJuCtuN7eLmgmpEao4zJeFKAtWY8cFRWysM",
  "key43": "5RenwqjtvUMY2nmZWMWbEPXetTHFM59UdHZaiv9qT2JJs8scaFgRizFYL9eVMkmjCHBivZYPCkwkKWD6yMA1t3Qp",
  "key44": "2pXho9NNN9nBQbSabAUY8VUMF4imBgea6dhf2FLS4NpkPcJeztXk6NggkRo7pi9ZSSffz4xkHnVFLBBdqXvSyssX",
  "key45": "3pjCAnykDor8yf426Bdv2xaos5JhAPRit7oUL6a4asRVP6XcXRCqAdRv9iZmFqYbMQhKwEgmNHefyG7sCYZVT8Sv",
  "key46": "41yeZLRbffMM3jnDRUP3T6GE2YTJafbeFxZNWtS14CKBzrTcbsPk5LDJNAA7vrfN6DZV9jo7Lv2CiUvfWgwGjPCH"
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
