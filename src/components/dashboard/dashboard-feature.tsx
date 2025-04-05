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
    "4d6dCeAeYwptfCRXCLx2neGiZ1K7C1XNUw3jZHkek3kApW2jYVuAk2Qukf4774a6Pa9giroKqNC9YE2tRmQy986Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SzDNrjZYAzsQQPPerpRB6T4WnmD7syDNqDNQL5QtUmjHDRFtmVKdYGpFNJt2f5iMePGCKTwBRi8mA5HsVGJQUei",
  "key1": "4emHEKgkb1TiEYgijFZuyPLE8tcZpLmPKAGmaRYKAWJnVC52tKJDVHJXVn3dKE21iAtEXLqGAfKjUAthQkgTTr5j",
  "key2": "2ScBK2b2q1chN3i5wykRTXKikt6Zu4X6JVNDbs5rLUfc7D9mbacDZVfpbRJhizbdwzQ6Wrmmb3oAMAQEudY4XERr",
  "key3": "3NQnCjxZ4yvGy4JFW9NSLfrDPSg7auuqM4QwszLFXT5kv3tGVi2rogWYEtWnik1C2kPmz6cYoTBrUsL1U4kwxtCr",
  "key4": "2kvJmLkUtfr2PVw76UsGYE4abpUs2EZJ2bfW1oD4VPRpFmsdR3mKATf1B57gj5UW6Pm6cro4mzCKkr5aZvRrwDFz",
  "key5": "3trczUR8xMpAUhEDRCmtsg5GJSc983YaQQS4YazRCTk9kZeu6LynUXEj5fW9ik2FWY4YEWQmvkmqf2tBUMK4bGUx",
  "key6": "AFqe7xSyn3xiMWrhu1S5FeogNvvfM59zwHmK927nbdLT5ChVyJmr9Wc412ueignJFnVYHWVCLjRjpQkprDZEKZa",
  "key7": "4F6tjsws88vmd2g2YmLNfSBAve2ZPw8iaWvUMnyvx7Hv7y2X5FXRhyBN7fyNVkqJV83QS8QA6zN9wu9ssofADkyv",
  "key8": "KorTBTy1u6jcNvsmkq8MtiBkQkMS3hJJzcjaH6DF5RzoqLu2sjgwxQyaS4aE2yrop2AEQZF2vPq4y9onSFT6rJy",
  "key9": "4Y93HQ2VKRsKUBbwTwvv3VtT3nqyq61QSUqPyMcrsWLqCBuNdQd6BujbcU6wf3RUcSdYVyDMR5DoWs3n7Gm8V1mh",
  "key10": "65MFrLFqkgUBLuUf3HB7Xdb65rqTxZ8C82p9NLqHYTEUf8KU8jbUFMgcmNahCAkRVSAiGHc99oHKHVgKFWRFWmjJ",
  "key11": "hAuxz1JUv5Qf44suaqM63Tyq3PrRXUpTvdukTqKnnoPqyXFmSbWXHkn6AbZs879ZEdF2vWC9LGmSv48sK3tZibk",
  "key12": "4xnGyM6zydQtcHPAw9ZnqaFTgqT28dweLWNafBrmtP9ETpVgQfXMKMFPBqVDpj9NBVznbXkbeKBFM61kUWmz48Pd",
  "key13": "4ChSskxoZGP8Z6NGfVLvRYwatU3mdiLNf2fzivzS5kiZ8TQiqZhfUDHavpUxbN9a8u2rqXvCkX5Q97RA6HMuHNdM",
  "key14": "4fvFMGLM5p1dLPqcAjJyYwm43By4TWPk2U3ye4DbvfDHPKrsWUnodpJc9ic1UEauJzwZq9dBJ9YjRQAjdtz2BXbn",
  "key15": "2VmwSzLFjQgTzs3G5fFMMBG5gCjw26GAWrwULWR277GvRWTzp6GqJujhcoBeRr8Tq7WfGPB6tQgvuzTjDE8jgG4S",
  "key16": "4f5vK3rGamJ11mpNeRrXrPrw5L8deEj4HyfgULwj1KqSDbo8ioGf6nCNCyPWQqV37y4qWid6fcBLEEQ5J9539yDh",
  "key17": "4Vz2f4Nj4JtLqim8os2ARPKhWwdTPsx1oXmtuXrUyJYnt9sZBcZSAsV8r9xhsjc7CzpMs68rae1MCfrA3zLrM7zu",
  "key18": "3DmDfGMWrijikA3KaguSKpNe5wSKWM8pBQepF3UwvJmEZEhQrZRqwcbzGL4YTe2e99braXJNSQbC1PmPjGKJVTQ",
  "key19": "dsJChWbmChMXqvUHzRV24qojaTUmTNiAiLJgutaaSLhF8e2axF2h2vdLBvxxsACvxM2u9ggL2tg2VJanqv2dgHf",
  "key20": "5JzuS3pvezcHPmSj43MdGGHhGUgD65jgivfru4KqYjYHFcSe1G73iszWFRTrEmMpnvV857iTsWTSyr4Mzr3HRTgb",
  "key21": "uxJmjiD4wGpgaMUqLHpSw63bB9k8xUoyXsJnuXWXZCjGBrdo93UjdYbRmHx3wRLXxqqBQWKXLaqRkfFG4Ln2aHn",
  "key22": "NzB9UfAGQyz8jQqWTEwZvNqoCgRSf1ePkevoPNsyGa2hvWPjSeVtGXmDkrxiPrUVYLHHPt2NQgoHJmP2GvH6dNF",
  "key23": "5Drz1dfr8vsp1QyFubkKUHBgwowT7JrHEydbez7dK6dSA47k8eiCbVCTC18H5bfaahY4TJ4kgMRaqLnRdS1oHb42",
  "key24": "3xvCXVSfSk7965jQ6Zpfct55xgNysoNQhodF9gxZZnQ9EYRQSH9fDQxkRA359JUUx7hcBVJH6kHvcdCAHRdKLpX3",
  "key25": "4rFvEqifgaag2Rai5YA1rXLw1WmRFjTJrK7L8hwE9SLFGbGat9R2B6U5vXCcKMK6YLMn3PSB2RchxfVtE228k8Zb",
  "key26": "27G74fYiPZUjzEEfHcarmAcp1rYA7oFqFqVsLjkRCUoHWTRPfxP5KvWkru653Wj3zBbkhfveCwsUSvg8JXuSmCnJ",
  "key27": "3VkLwzmn7g5zUmrLhoHR7EFYWM5avTGxZ5Z5punoWtWefLXsw2CcnZWfVzkJA83znNf44xRPXypsWfHDC8EqM891",
  "key28": "5zHbJXA4reY6d5MYfu29mp5geoQahnnYSyt1b2sYig1Wq7yPGAgLYgGXtCKzUzviGzJUFDyAr2vZ4UXbvsuJ5C9t",
  "key29": "5dHy8fHVTes5puZ1PyBjwFTkxhUridkndpwYcdpmFBFXW4QwwpCFXsZa6LjcJHJuF4JuyHVDWZAdgSiDF6PKfLZA",
  "key30": "2Sna1drfyi2FkPqRBLMgyNp53SqMhwhFYpEpYaCnWFV3u1Cd6WSVGBhYV5P3PPdRG2JmdYA6yLHMXFSLTwX9jGp6",
  "key31": "5snyzDKtr3dqSn1upwj98f59jWEGjbbQXAqthoQtyUyWJPxsHC93DrKyXjE17Nfxsm2j7LFErbyvFCA93ix7kXaW",
  "key32": "5Eqz8MFS5rnYgXeZSES9M1wJTKDmCDQKUW9T36BmuW3azhAen4cHKNHerrCj89yWeYcpHSJmETUCnRfHYWkeXycM",
  "key33": "3NFfG4wyB94qMWHBEbJMQCaxtdAWnEmjbjTvxZDN4uDQf5nyJX3i6JhPiHBSpRcWm2pUdZELPdX5AF61UBPMt5o2",
  "key34": "VSUHkM86t9Vm8GNkQ5gXDy842JPNSnkmtQDD4E5dxWnFrQxyQTEguqLzzgzdfa8Qd4dJ7gMGxuGhugBRyruuBek",
  "key35": "2xgu6wH4uqdp8T6t7ykeyx1j5Uf4xBUodfn56J3b1LaFHfTRwaf4ip9pYadosb29aJVC1vUWcntbXfjd9Xxk7bzN",
  "key36": "CVRWVcV4xZeDKvy4D2oJCEkw1rEgVxXbUUyPfyV8M3bWjKWXJwqBCX3kWTozfpSPir8aNrdJACZ4jEqxFhsvzJw",
  "key37": "5tLD9Mx5DRMs9dCNpAzXRNBYGV9Fy21zGpN2doD7qXRE15fHoGYUqmV1kUXEzTYxRMKAUA2Kwx85kGrzPA2Qx5Vt",
  "key38": "4JnicCVuzVXz5QjcrVuG5JjxrWKB2d4NyNTzCNqzx83tATkyRsxgQJqzi7oHcM22wvBr9aRxKMhAYcSVNAVdjv1E",
  "key39": "3Jv3YrPaUWKbV5rhKkifisosRktH2dqkYRACQZuXM2KGPS1G7KNSfabyBJZuTLGXjMvG1U483hPbyZeNwj9JvDXD",
  "key40": "oMjW1CrFfKrBeVWNdQzqqtHZkPwniFuUXH5Thpm5gEcjCnMqzVEbxBNkke3kF88B2SUDWqGgBXTEaHDML8xGaNa",
  "key41": "5GXogj9G9tAELqcNxXc267GgfoPUhvM2STN1Wdbjb9Cc7o8wMkB1VDwWvm1aGbMRuTztJmSyBqzES57bWTYtWMv6",
  "key42": "4CWtT9mxtK55BpPz1yqHvfVAwMzWvXeVXgu6WW3HxgDPA5owHKsjTvwVQEMQufotqGtWDxzFLU6cbgG2juYhXGAB",
  "key43": "CJUMzTzPFtbzVdSYYYA36oG8StVepjtSrprNYa8rmY7KCK3qXJBWSZ8b4sELzP5M9MPFJqW2wb5z7MoqoBrZnpf",
  "key44": "65XdnZfKTqUVG9GjgKQirQfPD3HaUo3rKmgoygjsgwSZcMoboYzGH1jthN6735phvK1nMhUSr2CsRCpm2vQthNf",
  "key45": "CHKacDAscLy88szyZkVLL35G7Vv9x5dizE5N2JhNJxchd5aywtxpEmikzrRT52BdEKdgiSHqpYfFHiVbu6ckyRa",
  "key46": "4mzis5QEaboQWccZDrTKgU9KCP2GB92dddBiJc4nYhVPpP7zUhTb5sBieGcv9NbiDxpJCDpu189L1xTwuRsAPNZS"
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
