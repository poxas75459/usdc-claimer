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
    "2J4x6LUeFQ2MifFxmF8cKAKPbyXhGGBku7PhUTL6zrkuG5vGyKJdcnkGRDRCsy7udHwNYat6kGgSodAjmrqAcdA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275ML6FMaja63M4vpdXhpJfD8Cb6vc3Cz2rwHmVvg8hTaYu8o3PcfZQW7jcWih92gH8ULr2XvH2putXAJN4PMb8t",
  "key1": "3Yyu6jG5QGaJpdZ86BRobJqLkWAaZicn7jWtKfT7WCwAtfLjzoCtiFS7D6L1LeEtwhpMsrGnyvAndgBNretaZx7Q",
  "key2": "2uVdXKhzvjBcCpfkVKojLgYkA8qFiC2DjvKoppnT1wyfNUYoy8HWbh48ePkEtHrifdN8Qi4XHAePUAt63RQibhRL",
  "key3": "4CP3u8pTdY4DRH48xHGPsUXtwdB6daB1PWqtQEKXDAkZx1Exsavnx9CK4uSmQjpSv5ZkVLgzb22zxMYufhKFXrHp",
  "key4": "4A6qXABLMygYNj5wWGAMF3fsnsL96EaG3GiH8PAnwmqaTqDCQCHW6UiLhhQjVKXSGBdzgrVcU5EAZwBdySfB84Hr",
  "key5": "5N3g2WyWmJJRwDtT5vBe18j7GKt4BH9PmaNWf8espZ7fio2WNUmMrHcHiEq594c76JUfz5ePdA58m5eaa7gpaVmU",
  "key6": "5kwLEu5nV8S4Wd6ES9Q2V2ZHsi2HatKqC2p1Yz7sAuvcmjvtQHkG4Ufbx6FrH8JxkTJPYKaGyk5rwKirsQgYEkme",
  "key7": "3GfttnV4aYTuhy3k6DsjVQUYouWcWcWJWJevKt5swSbumDhi84XBfMhgVk45i3hxjaxy9tF4MobsXpdpRg7cYqGo",
  "key8": "5WwguUw584AsPE7zip5iSwBxcQAoJ7Uii4REHriwFkgTkP2nbwGMExJXWyXoqgNVYyFLHDAJkoG4mkerfWMBm1H5",
  "key9": "4Pct4tEjqoDJicaynHnFkeGjXxJCmtoeR5S8GLsMFGeUTLGujzSCpBtQQHtBpD5E6SrrDwVhFYvHEZG6B4VCdWTJ",
  "key10": "3zUGPMZMXpumaYbiFCinHuzEniV3nb6akNwdiDQp549meGgtnvRPSQxvFLR3WFYLossjEhLtuuTkCn644BkJwnM9",
  "key11": "nxBVRdL28RdRQgzbAt1Ts8erJyuzotcwYGW4xwT4oMhy9NhdwtKiBiH9auNeonYgnaowcqQDWjnBaUXuYnu6twY",
  "key12": "2wEt2wGye58B2eZokoHMeUGuJF89Pq4QjUEEuYxeSQ5xTpYp8iLPbVra6mSPiJMbtdZEAs8iahJDXx65QiFMW7iq",
  "key13": "3g9TkQojoog619GxH5y1GzYEBhYbKfbbTMdY7KHkGUTJyaW1SmNMi7sAXvAbLMtYQfhkGqey61aXfD11zaKUBmJq",
  "key14": "2T2JXtKJUKoZXRP7j4kpPyftYXw6axczpW4HwUqaTSkGdnQ9TxNnPExBCHv53SWmt33RxPRU2aHN9wTGev6Lpc2p",
  "key15": "5KpkiunYRhAEBHnVCc88awivk7SbihDJdsJ8CDpzaCPA158E3gheUU8fwHF38z8Z8uYGvMftST37nnncNwaQq8dJ",
  "key16": "4UZrYcxJWy9sTYa3kmS8E8zEYLCmSjBpUp1EpeF1jacECgXABxHhqQKLizwFx9oFbtyTZf1R1M6XQSsLkgMK3xeD",
  "key17": "4UhmzPce6A8YDPrkw837vfoKt3L2utkqaxvBwREpu5xJNabzmdfKQCM7jN1eSDRJTnA1RTuaRdHe1CzDRRS4qjFr",
  "key18": "4Z44pCMnwJwHUmPGK16DbzMHdg4sNBHCjUbZVKERcea2Pyx1ZrZXcjDzMA8vEKA7aMnM7B6uqK4QHp6dj1vCysfq",
  "key19": "4vLUhEiCywokL6jsXP6PRoSQqWoq6YVGbpzyMVzVPdnMDESAyEszv6gLwdWZc4YewaKPsM7vBA7bzuadcQvgA6oE",
  "key20": "WvtHCWd3ZSBUqd5yganTxoQrXoqbEJ51zMDLyQbNgJ6dHRCwqpqXMwfQGARm6euiAznGLfh2qNkTqYUkMqrEPTo",
  "key21": "4kVNrppky2GeV4km7Ej4YTY9c18ztCz8PbXnA1JdMK9jy4K6RM1nxfEacFUbtuS8w5SqNz5GwX338UdifF6VQZoy",
  "key22": "sruVvZPe1Rfdugu7JxJaVAzaTnnvca9WFB7RHb3v2D4qBXXgUDiT3jYkuvdHz4gB5Rp7AYe1vb1Eg7S6AED5HKj",
  "key23": "2EbszP3fBczyaH259Sv672CubbZrRwbFhdDWUcCu4gNV1F9qL9gu2CyRpzuazgbNG8J2ZirqQFWKvZ8moYDa2oCe",
  "key24": "5Q5anAPC8VB7caFu5hPs6NrCGbsbT4UyiQ8TG1QNwP2dhTgzq82vfgpUQAAFJnpJREh5CazamtGe85uoKqrx6YGG",
  "key25": "4wsqfubPhFypopmPJ1cWTzEKK7Uyzh9to3MqppChfr7DCW1NksDrhhSdxhCGTRKaKF8Bk2BDV4eWQZ638qKMqS5F",
  "key26": "3KcgB49ohQcpGENWdKrxL8CZGY9cchWXF6K33rLXqrb5kgWQzopqdkcXNV1BnY6Qate4LzKVkn4kZWaa41kMNWZs",
  "key27": "4HuXjhSP6b5QziptmangKghthpgrr3SQeMDqpJ6AJCFXksnz6yeqnAJX4hTjhxPPGQmsoxzHfE7fcNBVCWybuQ3g",
  "key28": "31V9rpjaJ9Xmy8aviit2f1oeaqV71YkGQeQzU5PLxn7y47d51vgFaDgjLqYAQoDbBUkDujSfiqTvWejaDewhD8xG",
  "key29": "4r1DLdSUJH1N3Vs9cixKkzDwb8TxdWH4uNAuUKuiiAxU5VbvqSwUV3Jwgd9SwiNsCWXXDd1EkssiH1zBuZpSMQV6"
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
