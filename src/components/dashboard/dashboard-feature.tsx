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
    "2T2Ed9Kakw2cBvUn1x5CaWh9NanuwFBXWN94a5ewgxrzR1Dx3Ls7PrCXLrkjzs8wv1k6oFmqikpZenxaTEmnmvLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vV262sFvQ49AvhApX2WJGmaj8stng71Wokd7dWdWrE8UFzHKC1F94mhNvvnNY1RJisjmj4iyGAwTtDUk23aEuBi",
  "key1": "dAo1PpvZm7rBSngrRrq5KREbLcMgHU477fqnbFzn4QGYYQH7N3oszCuYsGfaVUvE6SdGVbFog5Fr5j2pNyZbSBV",
  "key2": "4rt7k7FXUwX99pEBpU8Y98VVdY2LqHPzKQF3bAi7rdfu2SPG4kG6hc3zog4avV4mqHXb9R6711CjqN7wypE9PCvv",
  "key3": "57wMR9LnoxzSsiX5VUSG5ZSukEr4dv97EZBgD7NHQPnpqAD3urCX9uuR9nxDwEBYvXZz2JhsgK3yEWmWuhSLAPFi",
  "key4": "5k2f8Z4jx3pb77VckEBoN7Zff8Qe5WUoXPUX9jcC4fDT8F4C2U7yXRDjU2ysZEoM3mkVmJFvCAfNuqg6rTaNDnTo",
  "key5": "2a65kNHMDDAPPw1wvW5HNXKDrfgvZ8ZgUVBSUtssncBeG5ajGKowLatHD6tWATSS55bTHQpdCJNKm9zAHtrHt62f",
  "key6": "3eBqydyeieic6psiv4EaghHhu3UCq5R7XkDHJU7uXb1m2fBjYuDoqqJCZMAyGdxvHGQ6cv6aASCn4KHSjZdZ4sqG",
  "key7": "3TzRj2zGW5bKRcsxyhV8QeQAM2hx9LCCusoZhneBurNqhRonjJ7sXvHaDJzXaD7cKED7nWMGWqgGCiSbqTvMGLi4",
  "key8": "3Dk8zpSiw2i5QdmEaL4bRmjPKUxpRZe1UsoepdmzGYjtFz2sxXfN39r3JLZW7cSFq9ufWbfSh3qQncTPQuKgft8X",
  "key9": "KV2qwc5s8JNsFDMJDvxzLPeQSmkgfnAeUPtbzKBpg7TV3cUfKiqMLWQZswdmmUjwbzzKe4Mezu6Uthnwfgh8fko",
  "key10": "oM2R6WM3bVM4GLyTVgV7CPZpB8ANYMQApEN6FJUaX1aURiWrMZdEJnhhDXFzsx6gLF2wzuomnYtotbBsDm7MdUM",
  "key11": "UGEfg56cB3jyp7u8PvoYqW5nMkF1NPSUCqKm1mZHAvNuwjP9dv6Ka7WWYi2fCHSP5yAcGPZMQrq5rRqdtTGu9uV",
  "key12": "3xkKjfpD4hTweu8zEshJprs33E6VsBX9ARn7AQQYb72ewW4ER2kCDy6eBrHsNsKGqjqB7LHdZiDEstPM1nWAVsbv",
  "key13": "61vHzDisg5X4ZT7W1z8NFiZyuTkvQpWndywmi6f5bGpMJMPLqkdj3bKsyVGH4qRdd91bgo4U2hH1TK77XnXSufEG",
  "key14": "3rVgDxNJkgvC6oPE5VFFA8x4mA9KFJgyjWmYdnkqW8GbRrunuK17YU9EoahvEDWL7VGMUrqKs2CSjYhFhTcVpQ9X",
  "key15": "3hjZwwdAsotC3wJqiRp44hkbXPmDgCDe33b7rLsPsn4RzrbiWMDZBWY126J9os6GtTogZsBtn97jy22u9apk71DC",
  "key16": "2udkuswCXgdoZAxLJxActi6QUDwv6YLPrD6Tk8HmWCzBr3As6Qh6tAvErpZzdzkRcsV26ccPnvXdmUZo3fLwW7Qu",
  "key17": "5QtQCyS777LLafWEWNYuGSSQGffUKPtrpN5v2VgCxo3b4c2eemTxNcEbzSmxsnBTLWaiZUxH5roLmJhWw1ED6i8H",
  "key18": "Enxt1MHszbXFESTvaeULnWNjA2gbdimZwiU4qeCFT44X2kMeSoQhXY1WTfzTjqxYvfGYN65C52BfNEQs5j3hRnN",
  "key19": "3QU2jQkNNGuazZvzx9Ndc59meVuVCBsZSreUiXfcYwMZ95QELZp8qEmng3ZD5G9QQuHjjyVCMGGTwYkCmL93dULV",
  "key20": "487MDy2KDP3cMYo3tzwa6EoPdKM7XooqqiBTQ8DRTNrn4Kk3Wj4zbTBmsV2QhtVq491hmjbZkydqqv8oc5Qa9iGY",
  "key21": "4RgNZGZvHXPSs7SDWAy6yKxykxQ9wPbh5d3PfUgrBiX8FrX6Zxoes4dgRWpdybEpShh3rQ9VUwrYRfvjnFbjWv6R",
  "key22": "63wsq2xmUPobdgTXPmoYopfWwqZta3QMGK43ttZ35JqaNNYuTTWt56AiCKUXrBAj5zYK23nJf7uehANf8c6pBfxL",
  "key23": "DtcBkSwXrbuJfQFybf1UC7t6grk78zhUKTiArEi7WbYLEasbaXJzVdfKFpWeR2Eo4ummLfG3qQu2RtA4QqAzaSX",
  "key24": "5vQu9dCFjpBENmv5z21x35gnpkhtMeo5KtwpoopHVureryVBxgFUTqX7WQ1aaAeU4Fj68qMYP35ubfYgtz866gcC",
  "key25": "3DuebbZLhbdMpPDqCy6YsYRCfJCohhd8a7eS2i2pxvwboFmj3y5Bchex8efEd2zwesL7psUpqyxuvMLBdqcyZEu9",
  "key26": "62TWZ6v4ZT7ukq45ye4GeNascDG7LxrbiqKGienVbu9UDzCTH3yCRZs1XhZohDTyAD31myv7tXBumGqRKATgf5sr",
  "key27": "5sWr96Q4qaZ7JXFqxFPC27VCh1RWxKCyHLGGxFzFTG6nxNbHxzEtQgvo4bnHefHX4mmcdauMEypkkzvqkCmvbWTc",
  "key28": "3tMNycM2FeTqcTqFszcLBMnxhaRKkFNSaqBoJ24nZMEzd8eA47s9drKDsDtRsSW4X2mCWbmZPwxHAyRygXF4egUY",
  "key29": "4efNv8x8HbARMo6bkZEseaNKbBG8sioL9QKLRKgPZ67uSBANYaXVR2Xj42MMXFzDS5Dr4XtUht7KHtbTBBvbGbQX",
  "key30": "2moLJobkDy16BSiMqDW5GLWobckeoea2Cjj9zzTS7DuYnxLp8wGAX5vNWDwfaV3cvptdhcPmFXpfJPHrQrkzNGfB",
  "key31": "5Zvxf8yxS4uEnuha1Jx6yQaKHxfM723ic6CVdypTjWFfTogVpun9Xcfncknbo1ZLduJUSrwDMEvDkrXt7hADGotU",
  "key32": "4E4XDxTb9QQEVGqSswZoYFCKen4XWCYxK3cnmN89cWCnvN5NmCfHg3hivrP3NULdmaGcTkz5qFiXZtMkbYgDaFE3",
  "key33": "2PUunKECMAcBBRNW9RKgZB2rRQTVKGYfdAWjKAsooMHhjVPEv77qVTvKAEFQF1iYWSwe67jSMNNycMJEguuxeRUo",
  "key34": "3sAsFoUDwYDMctAMgZttazsEZBx2nnx2VKu4ke4fFDuYwBsoosZTDCP3EzqCt2CiQianEXjUQEnzfoCkGommcaEw"
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
