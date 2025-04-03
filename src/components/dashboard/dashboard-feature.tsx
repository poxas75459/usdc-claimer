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
    "46W1TQqAMQptwqfeHtZXo994KXW1G4AeSkUF8t3rLRuvC9idW85JidAfT4toUMFun12RXotTdKcrvSYJmEkju1Yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isUeMZZRfhsrmQFyUgBPHsVckDPSzTDEHEm8KLyneVFWwNQMaY2DTavn2ELxNhZsTePBbJ93LKKtp4f2mU6DooH",
  "key1": "5WLuR6jw24yFMBevFqaBAuivUJbfcrVmGp1mxudyt2HjwFbFcVYfmBhsX92ToDtZg1B8vBSSfsRwx4bpLW82Lttn",
  "key2": "38Na5ccBx6xKYj7hyzC7GtqX7xVsQU2uf7sNWRerkTw4f9ywLPEKq6T8ZtG2vBPwJBsfHYjU3oNovtjcrXV2KvrG",
  "key3": "3WLPbUAiirxDk4NYB5ZRxCvHcFex3V4E6JqUGHLVnAaRCKgHdupP8voVVJpqwMC3x8aNKREKdQ2afEnchbhzWQq4",
  "key4": "3YkANZ4vLEVxmLLxFP18TG4sZpyZJuawW9921Vz6Wep5VUmaNqWUtj26RHLcjBLBp3bTfXtDnXgTTd6Co6NLgBxD",
  "key5": "4g1DGjWRKq8nV7qt1pusDRmoP2KXrr24dN2CzaWty6bjyqZXERnARmPAV73spMsDi5SCeepKcFSWXUGSxxXrd4nu",
  "key6": "3pFr2xQNXDMWabHxWqYXEPWqdH5C5TwK4qEnAC7ZHfGAi8XA2F5kcDoYrhHLQv16fxmc3pZbmXq5M591kEm668GK",
  "key7": "3hzrVrwoNaosU4QGzDtyP1dmNKmKeUNndhZyWGnPKD8jREcU94xBCsaKjXZUvctbggxvtmkkMGm6wBFXdSyND5sp",
  "key8": "BuK4j87d6DQLpKuuBbD6ARZacVRAg72t8b1LCeVPZDKecdEbYHz6FWcVSs6sCmiDhSi4KkEoUhUhd9gsEWTWHZN",
  "key9": "56wGtXtu8zfnpLXWkVuRotpVCdtV1SqHmXEyJXgVnBVqadcJ3JEmLCZFFjwTSm1EbJVUxmCLmecfTKCr8g6ocMh7",
  "key10": "3YxqQKf61sTfc6BFBP34M5majEi8yKtju92eNHHFzVx4ovnqCxsu6bjZK4DK9D4aYUpmterngufM1e7cV9MumKRB",
  "key11": "2w12op7fhLtZyX6msvV2GHUPUcaAZsCEzEyPWbR6Xfp3QmA28ahVhUAjgngWY6td61nfFNy6tCh4rD7utMWgNttL",
  "key12": "35BBYwXJSv6qskeXW9csSYgWCRBShCDSAwhyPLvNJrXUWtwdqWqitGCFdbbXZrdk5Fkv31SHT7zuSPrHxQnTCU1z",
  "key13": "5qZYt4BeZcs3rA17ZEAE5nZVNNapXAwLSfnPZBhpYnKvijL9RAKqNE7aXLGEXoY1V9AGsgkRqgJZGwVk19227aAy",
  "key14": "3oP2cWrejxPKHTzZrH4GsH3DmGhDPKZkvwTrXkKXo1SfeKwwYQNWaLm5v6BLnfmcct3vs3ZjocR4DsmVA5cQ5YJA",
  "key15": "5h5XEVpWxYcmUfovdScuHMKUGgojF6aYxUvZvY69VhKpurQgnFbFsobmCfp1xa5Jb5a9U7yJdsSjuHZzrDR12xir",
  "key16": "3avvk2YzpaweqwwR9aiRT6tHwEnwn7mt7TLiewZiJ1AvEHkonQ128k6FaZg8FnZKDQhVMiyoYFHPNND7KckV9bJx",
  "key17": "4Yh8NBCKpBHLPfgJUiGt1kyRr5fmhcMeGWgJAPH96cjNNePyakENViBmmm1r2Q6iEWanCNEFJVsy22rQy3nuttwj",
  "key18": "5HS3CNfU5qsrALZNUtDx7pja9FFCxpJDCkfBzepHFUD3tPtHxf51HVhrzVCLwASKT6VS8kiEkMqywUkzoDdDg1rW",
  "key19": "5s4323mSBjYwgNHHibVy4E9cYTcb6V3uKSgLgiYEeqAxW7agQGTqsUUvJ4ENfwzu8jrEr5GwadVahGHDFbTQkXVg",
  "key20": "4AF2Wg5u8wPG6mxsNxVYyxrubng1VvvT78qEjAZe9K7eK79KT3bZbrLg6swFELQeBoSipPN5LQfTSiY1gv4mGc1a",
  "key21": "2CTcJVGeC9hgT51XcSoZpqmZtg6upqwK2qpat9xLdkWf8y5AcQ2Z4W4bAR8Quxk4Nr3tmkynH3DCbdt4GXbpJ6vH",
  "key22": "4PzsdMcTJXAfqSYCYVMxJzo8ZZy63o1c2xSSx4CSuiGZ1FxbEPsaFrK7i2AF2EMPb4FnqjnT39AmkiGL1ggV623U",
  "key23": "3kgLg7JRXUzdC3eQVqYpLbBy7kD7ChWuaWk1xriAKDSeWFpKgWQeLk4rreb4rABZjVU1MXNzJqEsziR79sZbFBYx",
  "key24": "3Qux9Sa1NKzBzKW9TQcmLb3AsZKQemmaiDVUE3tB6UVzvsKdaPkHfsjvXoBcFLNt6D3YYT8augqaZgD8SoSL1fU1",
  "key25": "3DXdafYHDCmbYJJEdVXBymF2WzVs6V2cJXBTsS8jRf53ywVkyH4X3LLcYRuCqK5DPrFAWnQcteRnBbg7W1G3DKhV",
  "key26": "WuuXvZS1Tz5pmYiZSKwmDssAp4mPEhtaj1yVwb8SmsBVAS4n4erNd16Adh8XYjTRSNmCLnefi8MH7BuaNSUKLCd",
  "key27": "4HFGzxUmg93yzRabokZFAQhNQ9WX3mn5KYajgJ3abmbsoLVtg2ezkCXXTDfTNJZKxtRNkF65xEn2T4BFoWGqz1WC",
  "key28": "5UovKTM1MJjxFnW8zbpY88zCXUpjGLedUXA34H3ECDNjPepNDDbyiTGh3TrWRzMxEraZS5m1FzTZsbvbRCemJoyV",
  "key29": "37WwwWV3ooz4fhWPwH1FsVhLiKMrivKVAPfgnWxG7roSDXr82PyB86uDQwJTRBM59qk49wzFKQuNvr2AuST5Xysd",
  "key30": "ytrHUhtcngrMXArCkZsB5S25DfGHHeTR5UYrD6hp3zagySsusA9n3v5D69AnpVM5sfhGL1wWKxhKhG4Ujw2TFCA",
  "key31": "3VmmCRxMnnwXswjMFJNdfPz9o9ccVxr5hbJ3bdnND7n7QoQAAVL3JETeEibShYSEpwmSsdCXGg8pbwmFqhXxkKs8",
  "key32": "2YNx4ZMqGKQj6LQgnLXVb74YbkDSAYLS5fqJMsmjh3S6SzsAR5AzQC5fJeLgwWCnUKU79v3JGETrEhMwi7DykS6R",
  "key33": "5dx3YRU9FxtzrMSJp2T1m2Dm3Z1YfH3RQgYir9smWhmPKsJTxEcS6L74G6h3c5JN5pyKQooYPsKfssj9mL1jZRym",
  "key34": "Mz7VyADfbzy4ARH1AwDTTnvyz2JNG2tZiE1SYWAFujDQdu1epNUMWMv7Q1rrHtftmnA6mbfKP3ckiR9zNBqHSAs",
  "key35": "8wUqJNb8RzMM7ipq7eXA87wthrVRaGuEjJ16spGSuReUur7PTLhz6o8j2K1mm3cKAyLidQENF2RFPKDUtnoCKfN",
  "key36": "3ozRumKW5eFmzTnJYH4pKZiCLnD81q3tMWSaq42iYNSWzPX7WhmcjvUcCtgqbQSSpYy81aNnBkB5EkkHSTPTpA2E",
  "key37": "26uGCHhvvyeynUfV1u8ZXvjCkfwE8T8gKn7hkYpZTVrvxDfscwcqiU75qTUotsjZFG78uJCBirZqmEvTjZuECjXA",
  "key38": "31qqEkBrdnvq62HvtFiUtNo8HM4Z7cjUTBZJkw56jdik3T2JhJ7tgS1BP2zV7AGe9ECPjZcnWQnmK5Wzn77Aw2ER",
  "key39": "5ziABTHyjLTsGuJkamx1k5PwnbEZm2CJN1eM9iy2HJa421dSvrShB1KAFuQ1NQPjuNrn4Fe6K5dMpHTVvt4kMBT9",
  "key40": "5ffdT1fhY7iVouMsiMXfme6WJPGcRFBLaDkZs4U9ahwBMyxYAcX7bDjhJ8v8eJN9J5eCWYDyYxXHwSZgn6fT5JgQ",
  "key41": "63xCHnatPDpnUqNovRgLKqT6NPmMMztLJ2ZTtsiF4ARtpihDsZ6jXyhTcknJ7tE8a6R2LAnG86VNu6LPna34DTqt",
  "key42": "XFTqQ7e3qojgxT1nnGpybzr2Smn4zAsxRs1enpo8yvBAiTX1NvYc1m172J47pwznGQxEqj6bhuYa2r3b4stkP3k",
  "key43": "52jZZ6U3xzzG5u8o9cnjQ6JYp78MiZnJDF3aMpWumeVna4GV6N4aKvaLScVa9L5qkJLg6rw8UvpThC7nmfYMKD4E",
  "key44": "5Wstwp2kqVXSukGDY3pNMFWESDDALjHpLe1gkuoAHu2qK6eqsx3dm3pJkQcW1SD44udo5LsGk2sgp2FhtEc8acx9",
  "key45": "2iANdNzNvbePAr1C9f5g6rQhLBj3ZKCavb9WpkFAWBbAboUf9oR8ZuQCLNELQp8eGqCBxCVFdxBzDij92JMpoBur"
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
