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
    "FKwUfnd3ChQoEM92vnkv1Knmm3xyUSK7CLvdi7oVd78Fs1qQxyZaWTZoANNLnpbpTVNdwsSs1rHqogV633HxpSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343XUYG76XieDyn8DCMdu3njdQswmXXhfkDgEqgPFPfifQ2EYQqxMXC6C2ekNVj7hD9Ms4NZKxqcME61TbeRLBq5",
  "key1": "1jMN5gMxrY1NaCY8d18sAyF7J8U8mmNAeZZF1Bp2XS4Dtax6Z44TbNL3aT3RCEi6NZHqExJ2GM54j51QKJbnCrt",
  "key2": "SFT2rCy1h6BdztLxC9eEGiDR3FhNDjPdbYjjrGoDHgYzAJVchUiVc5a3mu2NfqTFSbyEy6t1HDLCTfz6C8R2eXy",
  "key3": "5zLGRMXuKGTg6mSswWr7PhXB7hDi7z6BMWv7JuyWE6L4Uw6DksMgxAiy8xTbLY7uWEc5zm2fDycTCWmAtHyoJcPN",
  "key4": "5dHknnMeFiUaieJTVPbKutchxMvRiQwWJ2og8jLU45gcuPxkC9Y6A9tWt63Zd1Xs2bbEDqRTEeFzjPZWLDKQv5tx",
  "key5": "NMmQBZf9BSyGYNdZTFjsKzEU1WBQPHco9BAZ6PpeipJ2btFaBWBnzPrFuaz9QVCTYwb4xezscLo2JW5iJUpWiYk",
  "key6": "5oBzeF2EwePQn6S6nrpLeQKDmQkmmMEQ7Mw7CY6Ha9DjSSChRSBFtmAXdLQ5xcrLoasn6nAvzuX3wkFZGgZHZNog",
  "key7": "2PaRJoyKXAdqb2C3c2R99ADiZpumNaxCXp2P2geTM67QUr6oouE5oXkUe6gjAG76VMsL1nUHvmZunmPGZWk7ji1w",
  "key8": "2CByWg9pw3Fs71HYKJdfQ3iVCZ5fLzhFSfWAAqdbqXooZZ7ZBNUWY1zS9WVnFSuDG2C2xK1Na37HPtWpFiGR45mJ",
  "key9": "3icZnqRrFHEhWHDKyzWtCJq477mXA68rg3YdQpfRzfAjYQpjBJubjKdMMyLf4qUsdi8YdMNut5rrFjRQvZxRBshT",
  "key10": "5syTrYSuHtgzfC5TsP6BRLRbGXXoh4KVaCfUL5akZHziimVSvxyFZyUH1Uj391joU4gjVb6EEvkVxZv39VVMXYLp",
  "key11": "2yD6SZ5Qgk7Vzi25VGC1bcZki3ZEdRKLnxY2QjroseqekjKmkSP2GmoFTSLYn1gTnTV9Pgv81i7Y2jLbh9q6soub",
  "key12": "5KhJqmjZzjmBBnezP4Ssn4rV8fmmW4NbUT972pHdFfPrxFdJ6tv6dZwMoDyp6HDMnzc2C59bvfrhUTvGKTdBNm5K",
  "key13": "pZyqtTXPqKkXHyGuPMdLPP4Gc3vMjPMmryUBk4DttEufriDkzJpM3hrySVKuKTKhQwpa6RSc2R44ebcwXPJYAnc",
  "key14": "5SFXJKB6BKbXuMBFiax32ybaYGN6AyEYK4Q7YwgN9PrihPxgL7f5PTWsyTPgWMznsZ4tGTW1nBVQqkYx8acRmbno",
  "key15": "652XcBF1FnfHPAKoT9aZo3URq4AdRLnHtkYCPqvbHqhZrhP5HaLsX4N2Xet31fVRnRvixTsujjYXYykGKTuWVX4p",
  "key16": "3zA1V8ixm8nnoM1uJTDj1yCEHuzJY1VMDzEV5uKEAcvWbgsco7Pn5rV5eFg99st4roqRE8kEGh9goMCmEA11Ra8R",
  "key17": "2BL6SqgyXJecYgSoH7cMCouqgeRULouDXEfRnAKQkXy7wsFtecW31U2oFW2GV9RCZWGkqczX57b4vLfoC9j47TAL",
  "key18": "5uUpUZJZFy55TW3dsg1myivNTc5t2GDeYN38PmurEc3jPY5KqXkzKdXZXNnAqMEmHnGxYSTmHjD8FzCW71BZ7YzU",
  "key19": "32bQwEqUnj9pZAPezxZd1UkvHWxsJV9MWo8upKnDXSJHbivNewhjG28SP3kDjdawtJRBFrDqX6Xx7bxU7tnjfurT",
  "key20": "iuKEJYm6qDRwpa8j2Gb4WqxD3G6og4xQFKgTsJqKnnitGCWcHR9DNqr3Dc2dwe44sStjcNtwGRWrTjeBSBiDcYa",
  "key21": "MHGbGsvix95UwdeK9SsMHBRobfq9T9jzhQJuF7REeche39LoJXNHbBF1XAGVH8aXesRGuYzHndmLC41B9j8Gcnw",
  "key22": "5tT4meGBc6ytQuqg2oe86Wu86ACsGHdLHdMrrRznRpqnsxwKCewQv5PcatFKzM95v2xmX4TTMngbynFEtH5C7uUn",
  "key23": "oraD7zWteV8A23iehng3rvEwRAju2ZS64b4btg5EQVmpXjw2tJGRuEwE21vDkBX3j55HBUm5Zg8yc5rvAgqUDW7",
  "key24": "5TCkdiy7QDyJPiVMg2Z9NKRP1TFHPowjxNPHhxgaY6K8naqvphX85bFKQFdtfYjCgH3T9L8y3mUbiyqgmAXi7Ndx",
  "key25": "42JmW5uANbQKUXdSH4XcVPcZ6u5zewDfMnEYVdkJv8MC7eStUnsUCvyk3qm5kxJpNF3tRLPXtMNvnBe3PfLqEtSu",
  "key26": "Qd6q3NWjNPrABuRrysW13ernRR2c774jjUtUNVwH8aUhG1yTD2HjqjKnFdkTJXoP5cjodhvdeprJixyiqyYg5TW",
  "key27": "SGBkxGveRKxRpFeNEqEAL2qDFMmU1wma5UqsxUnfE56KENJ31wV6cwud7WZoHFz4B99NxGrksguVkv7NHANzHt1",
  "key28": "PW8CwimRpuGttyyRjzou7GTkJ4WrmJ9Hoj9tLxVExH23u3UZawfXFu871EMdPpD3DzCRCjQGXUrgrfBkSeCQJHz",
  "key29": "2riFhk7XzDESxN3S3PVE5uepwrb38oUSF4dd6VLfDvsRS2SiaVeu2hjwS9kkX3J6NuyWmDG95YNxLDqjzxKVGneW",
  "key30": "5iNn7pfoFo5setx3D1HUaYv3YvTLNNwT2YEXf38ZtgBGfjNDKhEc1r2vv4tRWty83gQSS5WMiyh91ZhjE5GTQi2R",
  "key31": "3D5tCrhKoecaqnv3c5GgqhfapmXo7KkaQBe2cWgbHQ2VoFZPXdYSWnK6jqHuqKPHHdTi3upaaiHF8utBE7tQFFB6",
  "key32": "5Lg9z2wGDBKNziHQr1nRjQKBsR8EK72oFUgmYSpZ1dt9AnyEetNv9a1RMZedNCaQnR4VYU6nT5eMFKhr2q9xByhv",
  "key33": "1yeRjfTZF4zGP4M8MGSRnU46spVLUQeXLdfW5ihVxxiL6SBHJ4LLfVtBwm7Du4L1Xm7hkJLVHpwTurnHimck1RZ",
  "key34": "2DnnemGdsBPyeDkVU3yRDBbcTH1tuEVBuSNN7rq2jwpZB4bxh9uQrCa7Hqw4f1RK9Bz5gU6JNp7cyMbah3v6GYgF",
  "key35": "RudyqEMDNtpCcLVykBA5rJYhCMo7obx3CsuDnrnrCZwv7RQgUBkHFihH7YP2xLCFQHSpU5N6JBEtfr4xREk9ZLu",
  "key36": "5xMj1ARtfr4aMkBHqh74wFQvNumhqTbmF741XLSUZeurx1xw8ZhBGz3Uik2Ki2KYVXHsy1wJXRt4GzKUKkKTuuHk",
  "key37": "E6JPqSH1Rnzuuh8ycSb4C1Y7orPApxdnYYCHLf5n9pkZnqhmrsys2bi2yqc35xZwo8LzMwBdXm1SSUq5JiKUhow",
  "key38": "2drhb9KWRBoNvZ4k49UNVoxsjw3R8QjaQWMvY1mthgdT1UeEJs1qk34ZAPv6imckMk6fn3qSkEo6ngmxe6EQBiKM",
  "key39": "2HGXu8SoqRcbnAyfQXzfhyEJxB9mWnuoWvLgFzczSbxtd9fjCAFWJXAdi419XwdoobbhpeBM3GJNwrQBxtdEQQLh",
  "key40": "ZVL1aVAfPhbs9QCcrAKsFiYhkkpoNVrmdmB6oGtT9qQtcBWKdR27pre6REwQLF6nGSaU2FjUraHiMFjETHfwcwe",
  "key41": "2xNkJCUXSryueWmbMZH3vWHJWqcWqPSMirJDrxkr6XRESfrh1CrALasArJqzUecxXAPwLtUN37sRzzgxt4zBgLf8",
  "key42": "2A6hHKQj4JnMHaQYSzugEV7W7JvKyz5pLP9oB5FXwvoEGxfPZij5nCdaQJFV2FVL7A16Vsv4ehwKeGbX7HTVSxAC",
  "key43": "5mPssuDSv6MQX7uVEe7FfMC4TjCaaHibnwmUiPWdzjepEmn5ipu7ptmvvSJjmUbXdNXPzR1sUCMKhNDZeX71yPEn",
  "key44": "5HmqFYgUxBXiiyfF4TnvpjrM2Epm9Rxq5viHYLrioxPVMrgZPQFyhBggR6F7SzPvci4aDKG3pQVcR4ZJDvHYLmpo",
  "key45": "2zksce3dL47PjQYd51MpXTrd5sJLd2SFkVE8rLdw1ojuJ7SZirkRkpHMwjF5Hp2PacmP2P5g7qFqsw4fFHZMs92x",
  "key46": "3hZZu8q5QhnoGhXFoSrj3v4ZsXZyngcmov686Tj4ezguqgLox3DeNUCJDyLXwUvjV14zmo47KMa3b29Xbp8uVbAr"
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
