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
    "3zkvv8ksvEajNdEH3cXcwrfPcdTCbixiLgY9EHaBAgNfS7neJQBjWWkjeNgwm2MczuddkQLTfkSV3L19uz7s5mE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YCJSVDLgVzCNbHLQP1oi3kpku4Rf2mBVvDo24Cfrc5ZDU8Bds3LusfTQfqqvU8nG2Gcq6Yr7GkQb5rUm1kc1iY",
  "key1": "2UeiV4uZDxSpRn48hq5oZJFV8Eeqb48xukxSX8UAUsshEnY1b9YkztcoaKyWVerfPLD9caZQ5gJwyjnFb24KhgKt",
  "key2": "5HVhq86hZsFjCRrV8zWW6yianUzRWwD3RDqu1N8STGE652vymb1xBnXMkbd4h9GiRxJEgZ3VGuu6Fd3DUcXGXczM",
  "key3": "2p275rceuwm3jFbUyCYqGR6x3T9gMGuf1UrEsuoZuoMbbdexjTApxwgaMrViM4VaTn7Gf8yrYRh3s1q2a4hmreiR",
  "key4": "65mrkiVWEW17VTqM7d4WijQB8sHQQQ1fHbdYUzFx9ByrJrFdJVQHcynm9wfdGBTZTbZFpA59GKK7ifkAEyLKYz7a",
  "key5": "5kZE5ahdwv3BSMcu9mo8W2U1NvUpKxFPCsTNz9EP9NWF8MoVACdyWNBoNNpkCo2k3SEH9VckxSogBDjvvJanus2c",
  "key6": "49cm7wPHCKTMdPP3VztE8gCDkFVyo6dgyiftUzKWrUVq81T4raFpj4rGZX77tZ9CDAnuA7ShwBibALFpKf33fJDJ",
  "key7": "D3uHbV3RoAF9Lg7wZvc7wkLTMxWUf6AsZHPLGeXD9FWJTiLsghPSP7Fq2NPewkpvzvHDmC59Gr1dshG3P917Feu",
  "key8": "4ChWPmKQsuEcT37zm8xZLS5VxjFA4sDDh5u1tuStp6Y8RL9fDpb3bVgAwvJevmAUzNuTZGJDSU8vfnQ6DwPipqrJ",
  "key9": "zkht3dUsKLrvXzHG6c4ugTCWsENJyLmBsr3YS6y6Z3YuiENdcjH2dN4YDzUiVKh2vumoQpDTWRX2Mve1QDXNTWM",
  "key10": "AZUNUdJXPsWsTsVZtmK48c6uwebHcyqYeAJA4gjRxuvbxcEnJN9wBiBiGB2wGLQadrtZRtuxEZbmynWitBMYm9K",
  "key11": "5bZAk37GmWLbvmXRv3iS1zjU8rJUE83TqSKHVEVgr1QvSxcbPryKXoFjUzXacpaLnQ13qVomCTG3Mzw8MG8GmGPy",
  "key12": "53wFpomZfYtYPGCZe79K7Fx2cPhyCtH3XWCFTc5MVdEpC4uYUkYZ61QBLWhKjYqSKYDkmGBuWArUMTE6tFHLjSAs",
  "key13": "4NYy8fPGm4HtZAcTbCX8QVMNtZFAgZaGzE8kZnBtQrs7u747oiJvsk7NqFAsrqkadVXgreUaF6sdY3espyuu1vyk",
  "key14": "7TMcnddz72W2jcAHma1Q5r6Sij3Yekqc4Umcmz8RU3P5LSyswf6DjzvgpchzZXWVNpznxxn8TLa5kKqHQAukfYv",
  "key15": "4numcPmnEJcdShp8CtyVuphW9dsUzVjbj7wnBFKLzJB8hPJW9wkUenW6UKAt7U1aK8XXVV46pUY1QcZFZr7WKoEu",
  "key16": "4Y5ZFEyqBs51FaB63BwUVKYA5zobiDuzmVpEtNa19vBHA6Y61jKKJtZtJF2dCajMVvvGWDjaNTervVt2ZMouJdhV",
  "key17": "5M58uL6GZFRifz3amgBXxLraMWAz2Lx2yabnoifWfwPrwd558wakNiAzeTHVc2gppRsZHxaoqcyCDxWPTzhkYwAX",
  "key18": "52iJCjHS2uJFP5XHWwMUKdbugRQPnJWGmvFcY2DsNXLnaCreKggHaMG2qJaiVUPpgvm7KBJU6QEQeU4G1KSfwiSA",
  "key19": "3SqzKH7Ce7JqbN636PPm2jAcYEJr5iJCrLytUdfihrXeyvUHgWa2y9CBA8CquPTZbqJyH6mqPxQvcH7SJ69uFLZD",
  "key20": "KSgyn2z2hGtRnvatDE3w5nWjG5R5TAkssnohGpz32SjdLSzTfJhvqnY6ajg1tuat5bamTfv1icdsTq9LDmNHxgC",
  "key21": "Ng8R83AWQLtMZz7ca5XU86s92AGzoP4SrEExvpQh6Tn86LE4GdYjHAFat4vCbrQqG1nPF5T26GhsL1ZcVTzScXu",
  "key22": "3NK9DEUgSrC326odjkErQhkzxQao82Z4RUvLjZVfDrHByY74zMWx2NFGPiuRWRdxPyKEGPD8vLQpvm9WBTdnjcEG",
  "key23": "25uABzeTJK5J3RCLksVPgmsWkBm4c2kMsb3s2UxgFoB6qmMNGWhmH6iJZ58npzeHeXzoamZW8rKF4NvKhGNzywt4",
  "key24": "3ZBMkFnvXGoMojNYExaJs9U8uzwGAt87gN2cezw7cbJET3dbRw6Sy5bWb3R3X3V3Qbe3EVqgKcASYPguhUxFceux",
  "key25": "42Tn6knx8o9sTGfZdkVsJLDFSSMY7tessv4toVQfn86BhH8SW6rEbtJtqxUWtPs6QSxdrZmez19Qnx2SJ2nZBwZr",
  "key26": "CPwmqwT6EfNXkFmRt9b42YZGnxxmRc9xfnF4PB3jdPVC8EJRA5DGJUc5aXEf6JEp6ytxDdKfDfAjeskbVjhmuM1",
  "key27": "5bAyHcHBr8NbZCGqbaPh2iyHDg8WdGijwmbVSSijRKgdcq1pFprQzuXhFeyRiKMjBZtmsZLjLiQtJi93cwYi6e7z",
  "key28": "47YAQLjX2BLvCnmrYnV3XhnEEQa6XV1h9kWeS2heP9VenK3K54onwj2sdDVA4tQRKoh6GdkcNRxekgeMxmsp68VZ",
  "key29": "5pmMEs8Vhriacjt9fZKryWg6QBRipSnFfHYP4TCjVpJ1bvK3daSGRyiJqbL7s3Kx2y3b3zMMDirbfckHvq2p3s4f",
  "key30": "3n3NEvWwM648wd5L5hjrNxxz16SCJWDkCixEsNvg7oHuif3P6iUWSeHjwuSeyc4KAmBNg22PuFwXfo9P39bBkmtZ",
  "key31": "3JAFJbUMex89XtocL5dcAjNenqdP7QGoVMkua8E1id6ow29kfVfZmK6feMy4X4cHHX5HmfJdvjHH8nfn57LaBWft",
  "key32": "iKDwHWSdJpXbqiLhSkwovwuWBD95pQxM5DYc3W6otpEA9QVQBkSvi6uyLPwBj1xWZd5WFzfVHPsXA1vyGxpXhgg",
  "key33": "4AYG4coFaBVdj4B7DdELKUsUQG6fCr5NduZj9Ua2JmpHudVSkygkK3WgcnjjBHejSobSbBX4BMEBdfeaRVEDhTk1",
  "key34": "7mgS7miKWGUtqQvMafwXpd4JZ22bKzqbaijD9v63ZrCisk84GETb9CiRMHyCkUWs7X68zEmSkZaEYwzN4h3R1YS",
  "key35": "4JpCnXajxooQPwyBkSuEeHBc83XmJanP2St9u9SWwTvXrdvikxK3xrnwetZxxUMA8oe2waXetzXcwsJdxashXxpQ",
  "key36": "52ER6ezWQdiMnzcVJ4PDjQ6rXmhbibzxoWk6GsziKy34sUoKemcQRL9dR7NoGhYtehbEHLqFe4bZEKGsSgrtooPd",
  "key37": "4Mirv2siwtd5yXTjE9UNGLMVRWtinPM5BxEN46QDm29khvHuhtWXwh76jL2cYRBp5wuDMFAvc1NjQ2KWZ4CvbRSq",
  "key38": "5ymETYbHLVaC1pNUFETLEnWuoANKs7yqgF19Z2VoQq7YmnSTYu48BuCeaBnESdKpTHJQHkP2GBbtVbgWZm6nbK7L",
  "key39": "yvy6XzJRRunkhSYwFWAb52dTANUseBpbd8RZdbZZRvWAH5TvCQkr2xr2EdPNGCXLgdmjkg6HCPKgT6QQmdcuFjs",
  "key40": "4esVYznh491LTKSaHoR1sBJpH2wBk1t289V8Y79KVAA1PpuxiPJjnSkLgCpSizYq7oa2fCXA1iA2XrLWSsxDMwhq",
  "key41": "5AY1az3jBuSuif2SokbYrotAG1BRfT19sdADEqMKNnns5DLVe5ks75uTEwZiGnmcv57finVGLCPqs5vCKHFe8HDY",
  "key42": "3mVS7ckeXQ7uTHMbrP5AwLG4LtuG9n5EpGBE84iY59KMqwFXYKma8Lx5g4PQHdaJPAK9uKM38ZzjbuTAC7mCFLJW",
  "key43": "3HLhkFfiaiV2fzRcYW5uECBZCqiEPS7nPy6t8gcKAy7LLjaUcQtbjCgVn58yeMzVXokzcaSC1ipueGxfETLXhwpX",
  "key44": "38ZeSjQ3zSiGrwoWFoWD7ahNpzLN2xNCcvbKZWBuHEBcsaponGjoygh737XjgLceFnRy8S4FJYnYyCb8q4D9wTZ",
  "key45": "4Fbp2Vpjg8sdSJCNe7PrWC3akV2bEwBxxvi69ntpBw36s1a8cYhCg8RFd5PaKyxJDQN1efVjS9uqUojGnBEneYvy",
  "key46": "3ojSeRbkMehSKzrBot6Gsm7hLx6yEDnmZtnCdZ6vJdojtc9uEEAagKt6rGjohjSq3EKGN5Rdq5tHVZimP55T1tkL",
  "key47": "65VzCKeKKERCGtC6ZrqbSgGq7cyakQJJzHRPd4LSHbdXjtBvLdy3uaAZL9uLk69fwMqGBCntgoBNiB2LtzXUTFdf"
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
