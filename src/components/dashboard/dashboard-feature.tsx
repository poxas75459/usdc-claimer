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
    "2Bn3pP8pXpDZom8jdPwtpGLScp9S1QnFujxe9V2jELZbPP3rDV2SjjbyD4YgXR2ATr2pKZXuuWT5NvtSNMs1UWJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VfqwGNe4FfdPsJEPgrdZQhjwQ3SZ9R1yixBcfKowk9UQsFfXnqqRkwgF7vWnbtmdgTUw25dK3khDF8Lo8Eaphkx",
  "key1": "59GqERUVFm4Aq3ka1aeGHfwVLZ5Tn1PShGZfbckckSKhQL97mW1aiW5QgHedcFwc8TPBaGw45UucQyhkPBh4MBud",
  "key2": "2BiBMjnS69k8FmeqNPVKqgECv8pfyu4gANgsyXav4TEdGQz7kxQBRcX5vFy6ufH1KfDwgcEz1H5ViF4E4uPzpAEw",
  "key3": "4u9EHwgLqqcEseKPaThbaRrtnqd3onvFSY66TaaPBCpLp9m7hR4kevR1FU2cR29icebn3zQ5A4Fa3gTCvxr7ZnFT",
  "key4": "5U6R5PtoGojZgfKAsuxqahQ8TBwb7rhrP9E3SR1fpPgEJJ9HyrfERcfYE1ASDjJHkcNnEi6ehZWrN3iTLkG5nqqF",
  "key5": "Bn8yqDTdnLiJKDvQ8GjAMgWSqxrnVwbggXq1RrPtQBr447PNQTVprDY1xuxpvZbLPUSMM3GsshY2kDLaAjUUqoG",
  "key6": "4GaDNkZsCc4prvq2i4Ep6CzFDuFcGqvjqKqUqcbmybEDrk3gE8y1eUkp1ZYaqA9zoX5ex6LXyoxgxDvTkq5s9nL2",
  "key7": "aesKL1Sr6r2Wr5oFzjCnNPe7EjGWc7McLk91mVtZJFWNpFCH1Ex1Nnr4dGANiUcfLoWDGPmhgBZDDBdoTLnGme5",
  "key8": "N7Y1gdWr85VhpLuNbTZEjHfFP4gr1r3PyNWT62yCCv7qoSgeVoVgZuL1i3dWke9umbJ342maymfmPn9zQRqpwsV",
  "key9": "4Ptwrs9yepDPuQJhqaHpZZTreUcCiY7jVRkDK8ZBLUi9DPz9Ve6uGB92dnscxkWK3ybMYr126fv2rqo6hmzPajcW",
  "key10": "2QcdxBudruJnDjiANQnoMs54vvPyHi6J9xig7NmCau7a3cnkEGmgg6iZhQA5orDNQMsZ7Gs51TxzjFHkVRspfxvx",
  "key11": "6mYovETCTpoN1c2P2guvdcyeb8YwkwwZ7rwN8L6zGHcCUL5b5RLNe3px55ZxjtTBMgwmDYTUWGs594GsW9HRFgH",
  "key12": "5nVVyjeAG7XT8vCTfada8hk5zASUd2nL2R5XtwYpGw7vwxsuH9KzLRKUVoG6PUTpoUhNC64p1Dty2HYUxZcUQhi8",
  "key13": "Au35QvN943K2NHvBQ7LqVnd1rFCfdZgdJK2Uf6xhGSkw7NheAq1hWJWD9ypGNZcLDYSuYY1KH83A63GME8gHUey",
  "key14": "3UUKsExCHaeHXsAJVjYquLuwZXiqoV2kfnQrin1f5cXvRR2UnQGKpVhP121A51xLFdsge7xvbkGpNjb93geWgoCq",
  "key15": "31V449F5gYuzTiTHDFUMRXfWVA9mPosrRVPStjvYL7QEkpDbmgBjni5Me7S2ViA7C7htwKegLAZN619CKrNAx3S3",
  "key16": "4LcEKGTVrxGw4FD37eJdTw6TkdbiKtMtMu9jonVKY2j5tYhBkoFJqS9PmqqY9Ju27tLL8SKcuAu9Gb7L5BunMcQZ",
  "key17": "3yQA82S6pkC6jdpoYnvzqBLjXsSBkJHv6EFQhD2AYbtWumi1uaeswTEAYEqaPFDZRXDhRwokNBDiLYCBjF71DC5r",
  "key18": "477uEXDgf9wsa7VvcDbiVYWnvyvFCg5otGz6Wuu3uUz5J3tu3My4hhqVi1xnhRBtnQV9PyDz5bb9PkADdvMX8RVb",
  "key19": "5f5YxfYhcJghwVuhBVJRPw1xLSyWpaAPQVoLqQUb141EN3hRwjMwLBRzRVwyr4ogZVgD3ppYCdyVpVQvvFCxUD5",
  "key20": "24GWswBtgrDvp71ZNxyu4yhjB7aV3iReSHFJT8TY1ae6R94fFTQppo6ekQLZ8NHpQCSKPLhpcS3d7QQ6a7T25WV8",
  "key21": "2EYjW8Uv5o3w5PFanpW5X97zU6TdScYXfAebd5YEEkjcH9iSZj9haPFs8xFimgctinxkzWSWEMqWX8phnw62dApX",
  "key22": "2Y8Kv6pN9JMCq5oyWXUAGJ4Lzbofs6wt9GKcpzwLi3aPR8oc8FEgMy25ietvPegCg7myEy1kJKXQSXJMcbZuYn8F",
  "key23": "2G7uhcUqmSvsZsSr4Xe1BAW49Sht8GcjgFWNqAZLZFHKGnWNz2U7sS8PTSpv3Z5DL4B9QjjZTiS4CDSadSpZBkq6",
  "key24": "iUJQyw5269tGJ9Undkj3mJrBt2ShTsnn7odrwwE43z6PTMqPNQ4y3UYT23Xfjkv1iAWNz6AmPRHwQ2dTAqee6U7",
  "key25": "33jeZijMRtaGbgH2jmkKSd9qCWt213YUfZSiBfzfH1fAvAD9nbqQ8AZxk9AR8ouHDPqcvVFRZncJ2TxFX3guHmV",
  "key26": "2cDyunUbsEGCeDqgajmkgb54gagfw93EsfWE1rohgcBAhGgBuywFJor9UnZusAYp49PGDtxMQitX8ERWufySzMMQ",
  "key27": "2sgzVM2Rst5aqt8ZuRaEo3yWyzFprriELLCWW5CJRLsBxvpRtCiuLKhCA8SYrE67BqHekaZQX9Vz1V17w4auux7g",
  "key28": "38oyY1ZWLvxs8ti7PdHFm9iuNTPHe7nJ8aZCmG6cLA8mLLzuqs89mhWayiysZsFA5JxuffZB87A1N8GTyxsCE95P",
  "key29": "2DpqYWLDiMf9qECbEViWoPaEpoJ224kC4NojvAcXBgDRaeJQ225aBV7dcbTNJMiyvzRW73Hp1GD6ui9ac4RvE4fR",
  "key30": "37GQ57g4gsEDzZVMkE6HYw9L1fsJzrcPgdwesZNq5nPHx6S3XTJiGDa3WTgpKZn727yDFpD2VneSeqLpTcSnRBQP",
  "key31": "2UCN12A2iKviDK5Xy1ZQiko3yV2pc7zb3kycnNfvx6rqkUfqTMGz3C3rUxcVGywyYxLCPRYdKdg4w1qr2mtdzPxv",
  "key32": "2NUHG9LsYVUnGig3k7uPGwjvB1Q5tM1mL41jQvwXhHmKKce3623bwxrnbUUDBqT9uq6ZQyRaUMryZ6oRm2tY6JYR",
  "key33": "2ggnmyWfwiehi2dBRqV8LEyhpZ77cAzDnErd5XsrayqqeyPXWcVv9DMEVsdrZJonWyzv9hKA8ecv4F8BkGkNEhTy",
  "key34": "4mGqNHMjyeZvrMz9NJmfbLJxpj1Z3kaTbQutatHxpXY1jFrWF11EQwrtoeZwXTxtFd8sLEegVv9Hrt3SaYKwq3J5",
  "key35": "23L5prLmt3cmsCfsjNo5e7QBAg6PqdpgjFBkQW8NoEvhuT3QkztEGfJaczrz45BYS4RezuVvfmswrx6jpv4kx4wR",
  "key36": "42aNQjhNB4zp1vqa5uLzn4NRaoGt1ErSPf897FFPp9K4Qa7o7brscrX1j4tdNEznGH9C2rxsxmu8Lb2BDcS6DktY",
  "key37": "jN2UG6oSusaXJHdbfVLCrwR3EgsdjUeTBLnPy6W6F86uWMb6knzojRgvy8yScSaN59USHtmGFnTd84dAVMc1DF9",
  "key38": "fw4Vuv4xkTPtw6hUGzSwSSJYdqiTW7tFFT4KBztVUbm1yniRzuudyHwQUANwWeQG5SL4vofGvkN4Nuz5x4Wk9YY",
  "key39": "4L7BimWaZTs5gTmRwcRf8ZX6k2t137RSdj74tJyNifAhy7QeZ9xUv1WAqJApw8vSrb4MrfLStpvA62HpaWkFTRoz",
  "key40": "4nxBdDjhN6C2twKSHejmjWAfcXGrwbfBUU6fgc5pXPANCxsYUgpX6han7vgdBMsLptGbHESBwZaUrNePVdKd4tkP",
  "key41": "3Emtz1cucBMUrEChPAshGHGiXAJZh1CbkDoVDybQ7vpLxn4HGAheo3jYMJJMhJn8j4ebPtpnPskkn1ddtbAXjetW"
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
