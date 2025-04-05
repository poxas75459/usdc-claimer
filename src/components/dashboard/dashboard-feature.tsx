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
    "4FScMyVY9wL41LUGFkkXwVCK5poC5ocqfA4sevwwYur2zP5EV2JQSvCk6MwjmgJNuY1Q5xdrXo2wLQ78dE5GP7MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQJL8kzCcCj5EZMDC4aLHZ7y8vsUvVzhjezovW9qSJFjmogUxyF5CP7sWKCX9ojDWdwXkhY5NWbsqKK98mpzh1z",
  "key1": "5EsCTjnegCcN9FKATVAdtifrWo5GWBzU3yGhfwooGbUdh2zmRFptgygJ6C7Y6VeBc6mbYpziKapDsdwR3gC5gnUY",
  "key2": "gXN7YyW6WGUswXLoMsFv2V1GEfg4rs6KCw8GW9ZBvvMVQKaX8DAaRSAGKzwQh4aoToehtAQA5uE7vFQeQoVce55",
  "key3": "128ULaRDuwViM7DMf9fGuLtsNaW7sJ4BXdTXbet5KJkMxphECzcfnYBMb41YQSmvVSC8gAcYZNcxi38Ro2Wd3jPY",
  "key4": "Z7hUM4gVzY6L32GkxQGk5qfWgyFxW1EJmXYESfhe29XRrvhEjTrir81A9gZGby2Bw7t6WLw4DJ7Dx7WrLSVBQSV",
  "key5": "52rgjWuEwMuEpJcbKoVxEzCo3jFgX3GiMNWx8wabUdMfhDuTkfbLaiZfLM5ubXxYBbgsDMEXvqEd5i4TV2QmeqPA",
  "key6": "8SY21uTfahENP5akcApxq5kCGhjNvrxZbtkmusQbWHfXPDY8hFywfXCRXz97awjYhsjkXNaurnP7BWgjfKk4NNk",
  "key7": "4MMcPCb1kfHpTBGKELe75MUjNcX3vVRfYvPPn5nYngNxQDuvJj4WCCMwN2GsbSu5GLLjNsQBUeaTJZBCSY2JQyms",
  "key8": "EGxgiAhX5acSckAw8ZCRznapHRxJoVqwczqxNZnPmZ42vvDCK4tyoeFY5n1LuFm5dEMiAcyB73yw72jfSR9ud6m",
  "key9": "2DU7vkiocW19VzV9dGyYURLwf55aVnCPvwJa9J8K8nPDaZzijBRxpZz1fpjPUkv183CcfqeRDoEgu796JPNrifdq",
  "key10": "52bZFCDk1v6mWHErdV1EDhzxR9aySaxwxvgBeEvX967neAS4TfsBpbpFrGLC3ddkhHTEHzRSn8gjUN1T4DDMH55L",
  "key11": "4mUh7crxcgyYyoM2TdbKv2Jp8s46BcnQCuLXUDYASPxVPsWkJjDCXQPaswyntP5UZWacgZUwe7v72ujahqseTrwp",
  "key12": "4qp44K3TcXvgyaXNoTFXpNak5A6PqyHGF7o8Me2xmp5w2CyzJY1QiSJ2mvSyW8LzZPftmgKL2JDRyZC1cCt4pAB8",
  "key13": "3DR9eKfLwAmU9WWS5AXCcUkR2Y4DLCaxf7zhB1XiXx3A8UeAAwu7Crcqe5eJ2R8ELJmBeEESa9jBnTkVK6qwdVEE",
  "key14": "2kFrNxg6LoVMFZ7Se6EmQE7trxzBtkmiNZdfWFJZdjgLwneigEQz5RRjaxYZucCev38FPVvRwyvR5hFzR1mLmbYu",
  "key15": "3WQR5gP8c8NLD6FCJfpWQhLkj3Wcaeu4KzU4YUCphBz5rDGWWN2VnxnVe6s5uvfSPX1c6t4tvVusgGEV3vhjDy1W",
  "key16": "4jouuoTFeM7vk3ssDLWrosPqWirMKXqNyoDaJSciqf7JryTQP1bYux8D3kUvgLHAoPzPLCwc5qFDFQABPxpwk4zS",
  "key17": "5LUVnnPumW1SzpkHMqjeT3sxYvG8gNtRcv51NnVZNwNeQV2BTtmh7hBMcnvVfKwW8MpZErNzwt9ppfAVwi3sdsnJ",
  "key18": "5JqK7EnXnmekmhwTHVzR7THNpZepgHYyhFzjxtQ3YSfuVyLppUAbZ9ybp75AGTVeZrwddxn6HKrGaszE8dhbN6dz",
  "key19": "5q8Wa9GRFsRBpLFs7C58ySphkz1ZpKQM1QriaPrqbtgadgDAHxtaBWEMuZh8SdF4wJMW5LdwLjfuw8PPTcyyN21E",
  "key20": "2PWpXDPb7p8c4gfYutSpfyd6ug2Nd8VycBaAcq5XgYsGNyLq9x9RLffifmASmyHcJMqXkJzjaGjHpMyW3bP6mMtg",
  "key21": "54iZUQuWWmnxDTJiJXoJGnp2pChwXKvNA6E6YsFn2ywCUsDe4MaaD7JAp3RuHC12d62nCwqbi7HZRXuXvnCsLZ4E",
  "key22": "kHW8V4gcXz9WXMMJuhBfrENrtqisWjdvuwEGKyo5FJn4pGsS1wQCYP4azZT9jkzBbniiceTwyEX8PiWazEA6x7h",
  "key23": "3axnay9xiaYk414xdaoULgdoiSa7CcAMZ5t9zMEsS4S1mm12cAKZuTU6NjobdJ4wxQhjrH63Zy1feHe3sW11TWaV",
  "key24": "2Fdxa29W1Ec51Z5iEtMDFJwDSFsYeMFRKxS8wqJEQBspX8kUhoJU2wzPEwSpHnxQuUsKHryjaxQw9FJp1eXeDtXa",
  "key25": "22jUf22SeCsf7nGsrsczovp7XyJpVSbk6vhos95arV6mh9xUho7Fw83nJ7Cw3a3t4qvrHC2jDXdChyGDTWvUxsTU",
  "key26": "3Y7uzaiw4FnsjCnsbe8k2GGZh8KXdqz3tfRaHXjfeASAeuBUsEAnaMSPWy6rXtgpkFJRtwXgSrBWSk2CkbhNS8yF",
  "key27": "2xUchjewd73wDgL7V3iX9CdbLSu2nWbhvD4izCLBNjjfsRbUBaCCfyN234NW2BPbKnbYN9dPY2qLx5bJXegJMtme",
  "key28": "21J4FEc9VJy73P7FFJ3HT4Emj32bymfepJkwTGvqNy5aDesLFHibyzaUsgQhmHgnpW6z4eM9UCEfcD56MUEmJkNK",
  "key29": "4ppczeaFHaFJDwFHs3riat8cHN547zc9dsXG1JNPB85DWW7ReobdifHLfRkDvuBLLBChcZSX43GovB85i2TJdJJx",
  "key30": "5NN8YEffSBV8zWjsfbLfAW9XCYbbrYz3E951AKYaaQYFtxK7WaZQ7e8hB5VUEi6KwUocic6vtZiPc5SKBe7p9a98",
  "key31": "5Eusfmk9qjnMKkjBYQgn4UtuZLstnr1ukrgeiRLwUZ5rQbZLM9f3RTfBkpsutgZXeAeD5EJgxXvj7vTxqdV9QciU",
  "key32": "3zsUV3qHxygQ2ATWyouWaAuQtSkpcFwXC5UWdZADFE9JAmydUf1QeRF3549PSkEU1nWCbSFbcEEbgenMvH21DxKb",
  "key33": "3SGxMwR5nUjsTrqDrmx9XC7F8T81qktzZqpGfHksuNjXqgRcUYntirWKkUXuJPXY69THNh865pAWBbmBvB8yNzVS",
  "key34": "4MVqfUAaP3JePZR4DGcyvHaBHVAfm8h5bHjoNTjStpwP3MPo43uJjhaXVqTzvzU2ewEf8Vmd5PmDX1zaStpz1QpN",
  "key35": "3yntZmao7P5uciCaGh7qj1asoZKMmHDFqCtbnAzuMYCcq1us2BwYskK93hfMDA8iCj8SgoAmg4cQMR4NGo4pYhPz",
  "key36": "28NYqBosdXL5LmzncHgFzJY3rH69CAqCVqas6xJaqaUweaCyqHSH1bcAWK1bTA9NWxPvpxKTV2jZo2pKycRQco2m",
  "key37": "hGsVZ9EqMmcTxtR8oySD417sDUsvaYxRxyevFLSQkntjDBckatYDWYwMr6mcnA7UKGKdi3fvrZRyFCrFSd3uUKj",
  "key38": "5bBn5KnTteuSbpPzRMLJuK3hcHXeekToRu1eiPLfTabjBFGX2nRE31L4TrTTPhq8Rny56xNtBipVbJMH8rNeGRmf"
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
