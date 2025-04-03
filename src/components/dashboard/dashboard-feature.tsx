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
    "xDQ3YHrwykbdgDVxDPBimUn9WzANsSpCjUouUbVyGQQDQPSrCa3VeiE6xJmpFJQAemQnezNiTwfsCQvRS62Tbku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CvYh4B4nkwhymM2zDcYMVHFQBkvSaA2PkAWmE8Hz3Q1ExJ11LxW6BhFTnXRmk8i9SFVUkTnEo2WrF9FYMAHos6h",
  "key1": "22zgPxMj2BwV4z55GkLjMtP2ck1TvRrqmRAvP3Kzx742RNS7ENjetkGvjT5xzbBvaTJBUtdg3RSBjX4SKcyqBEao",
  "key2": "2eBURjmewo5p7eMfESxU6Xng9JhQhZHKDi8ZpWBmtAd9chgo78rnkC7pdLg9neCnm5QnxB24hf5BUf8YZanmwZQr",
  "key3": "2ewhPC3iavbL9YsRMjUdzUmX1Sqv7Pmk53sYRAeeidpuaVQQyZM8SGxkhdPFdYWcGanmnG27wUn7GJSWFGTkt4wk",
  "key4": "2RjuhpmBXrsULyLq69kkKw4XwwHQosUH4cDv6pUArFtPnXSAWXDV67gHCu3oKEHHrm8NHCx77YZpPRW1mJ6NaGmR",
  "key5": "A2eQAfZ9jSxqRG6oGZsChAVU3g4rVfYnhgXxTiLsL8DETmR99dQ17P32tfSgQGNBpdYgQ61PFV3U7gJzZK7kZ9w",
  "key6": "2516iRZ8gsHFXrSfqUBws22BP8WUyhPe1bu34aS6g7HJh2vFeQKwqjmRJhNY6EwHKVbVZppgYEB8Wnss1v3Cq36d",
  "key7": "4p2mZ6qaa7qn4AKWAdLQDsWCKExUupZD4F7koXsHFPtY3KzTxLtave4C73PB3UohETtBL7zvhXeYN755wgahBder",
  "key8": "5DBTKDRg34ReDNAxUpze5xWN23sHgu9bG322B5mgZ2juPzdkCKdj9Vrkr5yzKfVrUv37cLrCb1wexKePWFpwjLv7",
  "key9": "4GHvmEGdZVF5CAL6cRFmZEbxwkWugbP9aECVxyxt9wAnaQfdkjpkEKcRa2hVPTEJTGQwX1noxqJ53zmJzMU3Zkdz",
  "key10": "yUMyGbwBjN4wxmc4HjtYoTXwnUigMCiF3rKDhLJaXLoWF1paVQp8YwyZZY8sryzejomr9SKr47PRSxMZJtp6pBp",
  "key11": "4gNvPjoeZgUXSWCaNrf8eajkq1RgWEcxgze2rKqyzbg6ZMkzRZmh8UYcmCRokeAqUAGSmnHV8vxWS9pKn6WBh7em",
  "key12": "mfBV4iPW6JjwecB14TUEyLq5cu9keECemt7rFoaH2npiifFFnx1Q3H9q8wFRo6WtCRixJyXVw8WK7jH1fWxu3fG",
  "key13": "4Q6JcAHfRQ4JeiBgxQJyDKwgAWDSSbxRLteobTpmjEfMHAELbCceNLPXVzA8adnJvdxNPM7RpZTjTq5Wz2Wyemwm",
  "key14": "CJrjyebGtbWbMRVDNF7CHzFsCuscX7kLSxedsywv2kCTnQokzp8wyKqpqk3aYpfoXPi8gerdEGarhyiJev3oggf",
  "key15": "2fZuJVA9H9UWrXeaA1vQh3TfpnaLhQqT1hZ1rWZfRdqdQomeg8WjNhbGjwGHbaETaYEAFPH2H4egkAGptnmcsWq9",
  "key16": "2G2bXrppiDJy7FuT8CLw7KjC5LC2PuF1NofyUcvFoiVxnvZpi2m356L5UjA2qCnmbERM7fxvPPLWhd9g5yoZcqUS",
  "key17": "xHpLdaBmTGibXuHp5EBBPYkpV5NYCLiKxhTqn78XAbPLkdxFs5P5asBgHUbVQbtBDvcSDrfhqCB69F2kG82QfJR",
  "key18": "2GwBZy5WVPoiGFzKGc9wTvuqdy2WSYjKf23qr4LukBGAXZeVneoXKFeHHQ1YfzWEkGoZFkgPKbUA7QpYriCpARUP",
  "key19": "51AiX6m3jxFjUyd23P2zuC9fsknpyM89VfWvCisRhhKqC4oVajEA72mtRzEhx58dTE2TemoX7U9dyrhBC8K6PXYb",
  "key20": "NFgCfVWQrejCgkZWDSWcHUz1UzADMxuehmgaY46WHW8XWazSz3WuRnSM9RZNCeevfw7etL1jKJ3ojTLSTjnPKG3",
  "key21": "36xiuNADQyjJ6CuySNwkRFnkMu8NSMjpt8HbYw7iHsiGzns8WpCMv6HF4J1MEncUEs6aW9hHMFb2dUmxTsqM6deq",
  "key22": "5ysLcpLsF3mNSoZfN5wH3Qu7e7zLPdVbwwTCxsdbBykPsmNkPrGjj8EE39pAm93sS6yXpA5UiDBdFWpHpBAdes23",
  "key23": "4GEhi7kuYzhMP5kQe12EjjXyCymLUoivBjC6xCreRxGmbEsfffHCYrL2e3bjF2SGybfiiy7oMWuVCvuqcBUCv3vW",
  "key24": "4B3DucwwzV2vF5NjTtfc1mFiVv8c63bATYSVdoRvgppkJuWSNchtVSrJKvPgK2fYJH29SynYxgFvTryYCG973oDj",
  "key25": "4EyPMdSCCJD3dyfWq8N5hB5sAFGGhf8iowyArAtppJPKs6jGUbz5ZnobUkF7UppE64S4VzX8uzVzdb2to1CyaC5",
  "key26": "2J3et5UiH1i92sundhi2sPcJKNbA7HPxuNoRe2Uv4TCqSXxaTp8Sf1az1LfKJob7F2FooPahCaTixJg6zJtJyZKK",
  "key27": "2KeeFscjmbYgdYAyxVz5YK9d4MPZrnWxieCgZ8sdKRq3eAASozc3SZBqEvbFYMjLSqYS91EX1T4X2T7H5dTZqJm",
  "key28": "54HRTAyHUkxu4jdJLpPLXU9x1ywLhvnJP1CECAUsxpvMf4YiVTSea1EMJy3x1v4qnuHmswATLieWK4oLxsUDQh3o",
  "key29": "53g9icwtH2e8JNunsXasTxh5gik6e737qCyZb1M8CUFTmhwcNvkHxitxqfckmpiueYHsh3imrnaqu9ycR8eT9V2B",
  "key30": "5awKBrsaRgH4U5gxpWz5y7shfLx6mbhMuU4eMMTrpVzQeZv8BKU55sebkeJsKdzbGEPzJnnvvNauTqQLJX3anL63",
  "key31": "3oSFvK1oQhd6TSZR8vUivUmZMGTNBr71tShqdnsjobTXnA3ETgZbAdvYgM9SMhJFMUmWFusBVoRNaMSjZJtzWUdL",
  "key32": "2Xnqvnm2RuKcZ9tbYoUqSgfzKEowJBtiPqKz5gymoqPZYbi2JSyq3AaNhC7WAZkxdyzcY3a7c9YxkZdrKgAjjLbe",
  "key33": "5htLurmCZkAbM98kssTFDCuVApFJ1WtqwpdNPv3zXnwZVq2fNRxVryEGG91gBJG7UHSRxqLENhQ9ZRivKsqgphQL",
  "key34": "46jB9bD2N3RRj8Q3HpwzhweeXobPjuArphVhWRb6MDuyo4C8n8v155D3x3BCWFV4sVSjV4PxEbB3tKc9VfKzWoMz",
  "key35": "5bCBwFzLFbLwsB8rnhFA4gFkqtAk4ch8Cpi2wfDU5YYB11GuqzKuHQMoCZNHFhqAbbzsLUwkMp2NJMTzLSR5bJ4F",
  "key36": "M2pb16Ai1T9ChPYMW42YBnrJ7CZ5QCygzeUB9Uud7HqaF8y2ZhX2eNsTQAKU5mj2DNUDvCQV5wAtj3rkdJGufx3",
  "key37": "Pa66BRS9qLXXqkek1V26bHYsbJbm67zotVU5D5ny7qfTTMa7sqSz7x3iPeoXfes2pqDSWwiS9ywFuB96ui3dgG6",
  "key38": "BJoTwe1sHNdnmeAgVZrB8t18zF5AquhvZcuLnqrM7j777MgcZCJaFXsmyHusCSMd2YdwCkidmh7uqEzokqdQRR2",
  "key39": "4DURwYEPSMB52w6MUNKwvaJvB1iHELjrykhVcAWMLecYzQrR2KEaSjMmDCDPAY2DnHHpfEWSL3J2q4baDg1KsUri",
  "key40": "2AKrbbKViZvHHtkvcSBgA1DtDDM7ZaFvny5HpPhQFLdNDyh6vxo7kVnbffKzLAWhurhaQPFHKEkM1Y5t4gM5kqDU",
  "key41": "4oB1HELiPSx59DTgD1WTr7EZjvxgiPg73dbuyqj71Gb1unhPDQgAQNZp3Y2icTUnGQCXz1dE1K84DnhAivbaViK6",
  "key42": "44KVGXGBA1sij7jZn9RNsbSjuk9ZaxN8Kjj8eK95LwbGTVVAWT2eWJUngTUK8Ut8GHXh5NTpyrdqubWStw2xocyx",
  "key43": "vwtTSGhphv7a8Hm5AEhVBpZbiJDTyFR6AUaZ2canX5KsB1AEE6XQTsiYdf9ouV9Wg9p993gkwTyrpJhLBVu7vgY",
  "key44": "JYXb3ruTveraNpeKbK4rBwEawgbohWsmhMNjehCbSbNwdZpX9sfWZ6yV4AMuNVtMHwPGNhwSqz67YEiUU6ZzF4E",
  "key45": "4MChHwZedjAg3wFRZeFw2f7LXtTZj3EmvAMf4rzvpRTogstyDwLHQNRMvtAyx6eUP7nR4RG8wT1kdJ1GS8rAqeZ5",
  "key46": "5yiNUUerswQhvUVwbz8EpcjTfAYsz2jL1cgKBsudKJSPDf6EwpPvLKg3iKemcNQ9FEXZmxVojugZW5wYEDZ2X2YA"
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
