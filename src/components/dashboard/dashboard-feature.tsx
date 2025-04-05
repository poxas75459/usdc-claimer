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
    "ETp4od7yc5TpNL2jT4gqC8J3XvUNHdqrdSP1Fm4ZucbLtCFTBR8yyhmoiy3rC9y9HaqcHw4Jx6wTvAzCW2bUp3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1vCRRoVUgDpQ14njffxZpF2qYC8grupuNPhYg1TS7LQZLjUVGSwR1b7RxUKrjztRPW5ovepZsgk6XcC4sdXb4J",
  "key1": "hfNT84QY3fqcqkwEcQMBxYmEAQK9ADBG6WEcPCHR4D5vT9dU9Qwtye9FXgPwJ1h7gkEVHhwxcqjoq9JRmvSdMCX",
  "key2": "2zo5dmssA9XJxkJkkSHKVfMWNHcivGuyzuQNWbdg7zCHurZHt1VZTuQ7eJE9KGo7CpHVS577mBhrq57r7pEv4ZEr",
  "key3": "3q43HrDkPiuPE249xtP8ngNC4D9gQVnSkiUNWNUiX8Sm8VVwWuW1vBqukc16dXyrzsgdmFDaHd2u8TcXkjsZQR2e",
  "key4": "3tJF6CSypuv5HYMV1nEicYwN2kaJYWQx3RTD5PmYKtqHnSdTTd2i6efRi8UresQ4uFoejBGayCrhmhDmuZA3YTmx",
  "key5": "763NedJmBkAUtxWesJBkwDYGUjvLYQRgTfMmXo9AMUjP3fqpzPQgU1jfMt7NqbhX5zVXjFYm6jujvT68HKB3xzn",
  "key6": "3CBdu2WVGEpfzgn7rawEkSm4uWk1PqQZ5qS9JY5LnErUqGzKbjjjDRNnPmw7ER2thzeN1qCJoGgLfRmnhKWGjssn",
  "key7": "54B1oUkL7HZYhp6My59xpWJpL35mUrAHRyzk5aRwYBJ4QLrgkcv9N231khkaM6gLTeUnh4xzTRH5oPx41ruLq2DP",
  "key8": "Tf6pW7yLt5R5LaWJ6LnoqaZn2Yi4PtSWUEsUFPsbvNyHD36bA9a8FjSKTv6kMvpkMKAvenxs7WQeGBrdNbtMM1c",
  "key9": "65qvZaW1KeXtHargQQjMTwv6wXUD1Mr7a3tmibP6GCQyq8GH1kVhvZk9ibwS5f7bVE45W15gAEyti9LBkuBos9xA",
  "key10": "59WTLuPvHdrcGcSXMVZ6X9QMN98JEg76Gcrv3XggEW5cm1RfvCkpAqwhVKV5CwXPkZT83ohJGJgJgzsFkrBECof6",
  "key11": "3gXpPNp6MXFof15QeLEergKgUVvHLLwzbDdiE88hB8Uz6zgbSbzqvLm9wxjbi8GD4jqRmdZfezeVN2w9ev3k1pCM",
  "key12": "24d4Eb9xG98R8J1t5Nga5vy5GDFy6rZmv54iqEpQBX9eTmub8xEybLkbAzeQr2hNHYyxyRYnfdH2iQ9AWxdqKHxS",
  "key13": "4J68mzoALppx7k2X3ouS1fu1X16xuTtYMpWSmNDwX22itDwNRzQMZbwjna4SYyFnWNbnyUynpF9StNdRy3Ug6gEm",
  "key14": "4d3qAWyZ2dk1fzS9bmqyr8c8FsFmAJ31wtejHdjeZeHt96vt23CRD8uqV2ShvstLDsNs7jKEghM1uvMJ6HEMz6H2",
  "key15": "6cQnFwPQ6SgaU5Z94YDrzHPUxeKeTnU9p6paWUoapRGGqeYNj9UW7y9pZuKWWWM9Zgx93NPqxMK6pKLGQnsVFVd",
  "key16": "5TbaGvSitu3BZehGju7jJxYg2a4NoHQHT9KUzovBX77sB3L7q6MU1uPt1ixCRfLQj694zT7MHe5HZ2KNpsbQnEJg",
  "key17": "3LqdrKpyMxMHwsB3fYZMHUyLZpuiFXn8Ak4xWJTYWD2DW4RMS94GYe1etycre7wBCeXej8GYau98W6tNJsg4CFck",
  "key18": "4pZkZrysUcs1mK2Bz3genmkuyLQFzfExQCHv9kpNWzBcvMNgnQu3F1eh6E4hgUsmgBC8VisqmL25CkYbkpadZbYQ",
  "key19": "pJH2PBuvGF7aenD9N4edA8yXnhEHSLWdHixy3tcqVpGQBbCogkNXCRk9WeLDMFNUmXhE9Er7M7baedq9QMoG6h4",
  "key20": "5w15MptPvLi4A6GJVHixyFidkrjTyzMTmWsEjbqSuQzmk6UBbzvMXkxsqiWd9b5H9fQGYtT9qphC76MVeHyvSkDZ",
  "key21": "3A2NSLc37ienj8dniguM18VdjWJfuq2kTfQikfk4UW6T8th8rcm4ZiEkmGgH8tcs9a8jgWhwjCmNkB59sfCCmbYK",
  "key22": "4NcRQanJ8YSuKvit6Ki3sPZvumfVgG4fwBUmjXJgW6PJh3KvGVWTHfRKe5opoh7iZqZeBzkQX1sBJ6CsgdmAA5SV",
  "key23": "4MeozU2QRAhybPGu8gkoRqoadcSFzfdhDw3dM5syRRWSqpTLgQKhPJnH6XNStYHw7pAjXMSpgxacd2KXAcVsS86c",
  "key24": "2RNLifhHG5YDpm7AckVzDnz6R4TikMdqZfzw1uFtKdPHuUBojX2zqWZ6ZVfu8fzY38F4MWXdqzroEfApooZmpjZy",
  "key25": "3WMyEkndD3J3diDbCe6VUhgTkfs6CKikNPHmxiRgJRULb27cEDjJ5Fwvca7tro48GHseQ6D68nqEFccchkj96zFG",
  "key26": "61TycGGLAagmLzGFft5swzCn7Hd9aASW8G3P5MUFhHRF5466CYfXHVZo8rj43ML21CGtPB13mk5pYninzB8VZp18",
  "key27": "ZnfL8X94enMfdPBAH15EjmeP1TxCw1hF3eoJEjAAKoYDeUktzSF1Jms9s5qyXwetMpYfsMb5aWYU95KVFfbSCjk",
  "key28": "4JnpaFQnjiZeVvt1Vu64JPRuKGTRxRYHLQhEaun8NW45gZJfBPEufXgwv3n9R9JTTPPPh2JUiPGFXZ2qqrnnNHrX",
  "key29": "5FZkb7TsFMqytxSg2iW5y5GXq1sNSgTJdJVUnCy1ZLMqfA2wzQ9eQNaZK5eWJM2uaDZGn2PbabT7pVGqJdqGZuwh",
  "key30": "fC9TSZjFPxX5AAr54vbDCqrpztXHSGRormMihBoK4pvXTqrzS7wzCnad2hLYNfP3SwATXTm8aFYFVA3He75Kcru",
  "key31": "5HK6uPbyjG5MnyVSuJbAjPQqn2nJsWUs66kFY6EhQJzcjVAiGNST1CG9YehZuvoCRb88hrJRN4MxJzc6kizyWTeX",
  "key32": "4FoGcdCH27NyhXa2N7mKMGHoRC5UyiVhn8r2yfoPsvskKajZYpG8fmS6CtE56qBrPNK4LGGn1awH4cW1LPtpW4zi",
  "key33": "21ZbaXmphWtHesyejG8BayaWhCH2M1WVTZfjeanowVadTVfGnktudvQiKr1ai2BypTa1EiytRhZdjvf1DjAQkrQr",
  "key34": "2pg2o8zaVri6gpQmomqncHuHkoAaeSD6aiXbyaXNcuFXYodxRXUpgyxubWZvnrrgkmwhFJvKWSFzkZEUSncAndbx",
  "key35": "3a41CbfeDvkp8Ln5TMZwcxnZC4uMGxiifngktq5ZispSABeYWS9L1uk2KRvi9r3bp58pKu6SFLfVQTwArWQXC4J4",
  "key36": "5LJocPCAL3Na4GXsogXvVBZreYgAActECWcjLeyorWLSjvuBcNuy8pnwN8RCGzt3otXdbo7zU4gajZAFn1xcdgtp",
  "key37": "eCMqNaBMrQQuo1GawjUcFHwSUqFV9KEA6zeWeXbzUcnY8x83n5ikviLHsNcbXXCDqZsmYGwzct3SmQfPRTt8Cnq",
  "key38": "2rUmSsHq2hCwCMpxszztFLGiCTLXcirvsvKaVm8SV6dv4XRvppri3pUDGqz41hFjgBcPFmchP1qguvVBUDE6AqJo",
  "key39": "5wpmwJBzey1486nQGgfgSKDeimy9BCPddcbxnLBjxnzDkqjmiCYRgm2ic6VkdUABJohyLXUmNWCDmxZ2tkRZ1Hgr",
  "key40": "4UDUoHi6QwzouFqPMHffG3uZuKTb77QQs3jUTZqwZRoZEs33LhcgX3UrdYhKiHfi55us9mRDXXSRMyx6mmf8tmkY"
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
