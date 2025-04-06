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
    "2qqhcpr23f95o4931L9BPeDyYfr15PTccCfj39GbVPPCm6yXeniwcnESsD7VLKdqhDj3Rzg8esjfJ5cy428DDS2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FmCuHLUeaw8pEyytPgZNw1zqC9JqLcaL4Ntqfpf3mQsmowhEAeq1dHzjxVxynyWDdfgpCX518XLJ3p52QzZpd9",
  "key1": "4uX36QCjvoosEo5yUxoR7xmwJYrKt5JfMmHYRobnbfmVc18267XeAGCptWHG882WF7thp4Eqqgm7BxZMZhVQ5P28",
  "key2": "4JX4qWRhTL5mSZ6tPVu2KZm6CoSQPmzBU1U8uNFMRKLG8qW5FeVL1DLHo2JMzKGMBtvd8gicQaB3Ri9FE3c2qYj7",
  "key3": "3BEoruSsCXZGwCkd5SNGaUownuv3M7cppGuHJd133EeVgkQm7omLYAwi8Pd1eFX8vKuzMPoGfovP5cv43aJc6yEY",
  "key4": "3RtGqpnQNMs9P3opMn7i8iNV1XyFQgcECzqLhgMdrh1owr8PSkjwyYbpUUmaRMQdXgb9Vz4Bjc7Yx8snkVdwP5Xy",
  "key5": "66TBiYd4nhPX3tQNHUwHoZHRb2TRWmyC2o2rmbeLG5YeeAikWHVqQ7mDUvJ5uvccGC1jKL6q1MnJviVPLvxHkkEP",
  "key6": "49BB8eBGLLSSrawGP3L5twKutv7JLEL7cf1Kna9ipCsFQqJ6qhxeQ7sdWrXqqXi9s21DLvdkrsY6sz1zZ3EUaxs6",
  "key7": "3rpqvS8kraLbWnz51Ch5Uw8U3jaw2SQDcGW6mop8gUg8LUxdG6JbAgcHFYRZg7VcgbRxentyh9skJpNuZuKSFoCM",
  "key8": "2RHkqjKNnpJx1hUsDvXHp8kf4RXusFWMzPtTPzeSvBnggtgFcmuVncAhHmDbA7qHJjdLxZyR2nKfo4dDoQxQnbuF",
  "key9": "neqsdvU4DFzamgQMWvMDozEbEdVEEicvWWqK1xKH9sePNqNGYPUhYG64Ney1Pt5tM77HMUTZQCHNf1UjDyVFNAx",
  "key10": "4mPA8NzGZ2ogoCzknq6D7BfqoAfaa7HiUTWmMyxKwTd3QjVQF5fpLNHqub3ozEmkdf4TnAVzLckA2AaicJCRuBTU",
  "key11": "Ytr7PMDqCNfBgVt55D4MVB8hnGyUmfdirC2VFudRk92DXCpPYhev5ENsnUv6J873udEetRG12DDMhJAzn3BwmmU",
  "key12": "fXkXBxZaTMtosxKQ3AXLeK5o9jwUjLT8281V9wM7ZDtMTBRiuSKHhjeFcue26TjM8X1nGpbWQyaKiLiTZr4WEqt",
  "key13": "Ks2wrLkcWZ83PCVegpyQ5UgMW4pW9YYtmdBD3Kwjs5wn2gv1NtRgVUmK3WesdMbvg37pJ8wKX5GUJSw36pHE1ya",
  "key14": "5meRH5MbBBQ5JkjByyhpYSagBXBA7ZV7ZtbutQZhJRX9JgMNPkJfpfe31sY8ycS8SnMfNCVxepdALTpx1TYksNmV",
  "key15": "ykBG8zt8dx8tZ7BFPK6ydjvvgoducHR7pJQ7t8wowYbgbemH2FkZyvjZVsKTy9qkyrn9H22t47cwoJoVYXebrYD",
  "key16": "672AHBoNZTKHZH1RbjQ1ZJ4YKQUTSoAnZMYv6thQAeT6oU3FjMe7hmVqubqjETQMA5DFoPxmyUmQYwXLaiDsYR5z",
  "key17": "mkstd2VXvQ89uhMjtGuRihHo2AynTxR1ZipFmiC7tS1DooURQPfQDB78SH3uVo6noZ4UttxwTz1eov9bdrDSm5e",
  "key18": "2RViaGMSbvQDfrxZesYattBZJDcayd36PrR4LjzWQ98QpTxW3GvuteMnRqNvS5Z8i6hnHhA9fJ6DxMb8rUn9GiWT",
  "key19": "4Rg3xqKJ36icnMgkxx64cFE5YWcykmBCLAqzsrEoAW5UbT2H59EJH84vjjBxmq7NCvBy747UJuEGHhMynhDfQm39",
  "key20": "gMEB5BLwYKMeUmG94cr1tjgzhUmwtrtg3EuiBy3Sy1rahp7YzRK9vnhkhbRb4spR4j51w2Ws2EmuQGX9xsJenrH",
  "key21": "rLxZyFS7rSvg6CGoxSYrwjy68TL2WDL3eDjj3MqAbBSbxuNzc4NT3pcQMRGCYCSHf6FNVWYFn7EovTDdPLsJdPu",
  "key22": "3XDtE83otYMtP4nKbQUuNLfjfno66tn322x31MwBHacaoC56r3N6uuaWWfB2yDSiMrRfnB9aBgHd6a2thSb3s4pw",
  "key23": "3Cqer4CUzvAmY6PaYvaio5twrnZPidAKAh6wc7Xj2wVtNhpsHo52VovQLjNtodyCjuKizgcq9yv5WiY7VMb3Dw81",
  "key24": "2ZPwfU6oXfwmdhtShvPiiuJzNgTJq8v7UqhYwWAh76opRUpWZXfVEvLkSGUpcTd7bNLUy6oEpvtzAUVh4gf34vTz",
  "key25": "5t7Xo9hNPbxwD2MGHNKju5yc8tD9TMAWmVtDpCSbmG76oASXrcYPNb2AD9pR1m3bHr2pEd3qdeRFaH6RA915JSuq",
  "key26": "3QrLqeLkUitg43DsecRmCxS5vj6dnm7YYRkTUPR93vCKbok8aMmyo3GRmswrEtvAZQbaq3mdavzY3qjn3Wqvh67a",
  "key27": "5pDFjMv6RUDewEg4AYAzPBNzLRJ6PYVHhBmH9qfLEvSTHo7wo9NEqb77YMJ5FVBrigMGAZosKv4LwCyV49xYRwqQ",
  "key28": "4HzRG7E73UpWzeJz1ByJ9EndUizRsN3VbhRKvqwDdtcf6MceFDtw3jEMpYMkrHnPFjEGdhGNzMfWfbBJpA8hvgFq",
  "key29": "4yxUTqZ5gayqU1yQgy9w6oqqj6YDzRNZ5fhZKijvxamZo8FnsjkwjNbgGa79gP5NU7q5xRWUKeZtFdeGzYCbi3JR",
  "key30": "5KcseaynkE9LQgv5ut4RiN9BeSrYXNy6UwT7Wbd4ndnKYwETF2YTyBaitoBKKRQBQMt7bBUapZLNTMN94ZNqw4qA",
  "key31": "3RVdapP6r6m5PP32M2FLMTu5UW9d8e43UPkjuCFBrGgrDMjZZ133CKLYZfpfyhj8tTipEXvKSa1fua7C3ojzGbZS",
  "key32": "5d9N3wzxafdbJGqZAXeswGJLjphvudFRnoxfwHhKLr9BbLTiW8w9eGe83hDrHejuRsmQguVejHD546JdUXX8XbbC",
  "key33": "41SUwygdk96bFYPsGYAxsJpvU6N2obyV6mDgYCUQmxcjtv6VZ7nkA9idJEKfLZ7yWrdDQXJRweZQa2bXvTHc8UDT"
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
