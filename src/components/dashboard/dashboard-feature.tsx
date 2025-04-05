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
    "4isNPtFXUE2qsESQdD9pDP1KTpJfHyQMizZrLZ4d9aUh9dJ6WCbCqwRShoF6tK8cD5hacgWu1kjfnpaajVCVwwge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46voVn7zoFAzTJZ51jD4md15CAjDqP94ys4KZhQHTiC9fV8wR5pn2RD91LirsgAjgM618bBoZ8VYjngPPHpxcYhT",
  "key1": "237o5SaLCQhYAZb5LrAjmpnFxtTkRzoAmgjw1UypZbD2PAfNnzh9vvRGVgxS6zzKsixT84eCDXttphXkTS4QJ8Wt",
  "key2": "2d4vKsU8Cu4RsvtN7qZMftagJTMoRv18pkE5rNnFMzgGiKDAAsbMkUTFoAmjFWa3f9i3yrx8hogrjw3CWVzLk6rr",
  "key3": "54Lsm3seLkTXEfgGzx5kmk8Rr7FtbEcSbXr5CAmFZWTS46fv1FVoKthRGRKd3D8ydK2Kcta1ij8j4wJw4z5svonq",
  "key4": "2F1gadzgWox1PwWdyxeUbVeQDTaH7Wb4QxkFKDLN58WYBYSYN5xMdsV1irjwrBhwd91njsRZQ4mf6UgcZQhbnLJg",
  "key5": "3CKys4Kokyeqr3cYp4YL8tdM2tysUFuyAwgHSeGDRF37LXjio7dj3BXLkYomgFyPLUoJtjFT2xkUNeZHpHwV6ykB",
  "key6": "3gkRkMRFHBEZYmNsWakiNRboVjUswWNpHVx17SA7fWqhxhyNYU8qZn5cmJNSMKFjKYAHukUumVGSXx1vLMBCayHL",
  "key7": "33z8nYsynpspGYr8v6yWzohg2jKsSuRtLFetG9GBiBSwms1BejxtLa2Ne9eHHmuopzvXn7FZ6e4F58fQpmk1VC3e",
  "key8": "fcE5vBp1Am4eB7THGL8E6LGjvSMVgF7ZdHbMPXvZ6HYriw77dWADNBGma3LjaTfksWAuUf6Rh4dqaYdsFQGLfws",
  "key9": "59X7LBDS3Q6YYo9CjxiEgaxsbE9hy3VMdUewCztBNicXntmURmYrrYioSaRmrt3iSZAFnDgBS1eZvUbxgzst6P1Y",
  "key10": "4YRje86hh23dCWno2bsFQ8cRpBzNnCHY1V59w88ZCyuj6JEZjPZdr8G8UFZsmcEaPEDatN53sGs1gi3wqG6d9wTb",
  "key11": "672xG3sXZFXCL2osbCm5YFAi2wEfky9nStcjCdRdiXKjzKjzTFSFM2Qf7A2NBFwyXoTi1Pn6BWfKvkZcBHadyEms",
  "key12": "2CaRm7N9SVGro6Yszq2sDmASHfgsfotynrkh58TCkMZCKjvhnjZaW5KnLrHxtzr44sNg43yQUiaNPCNA3yY2YqNN",
  "key13": "3oTnrTkktofXwje6KogxEinZYFJvQ9ivmWQqousonm7mApSN4jMiXMqhqdttEmyctcGkwBvBg3mmCaQK33GfLix2",
  "key14": "wm6wir2Lm1dv5MrXyzAuPoYMcBr3xsdTerFvB8yw8bGDroYkMSK3SgnPLPzRJQtKtSxgMv6qL9dwVfEXAcBNw9T",
  "key15": "3SLRjJuyxnmeiSJFvvMZFH8sdpo4qcoxMkChY4XKTg4kQS7QP6d5CcdU9i8i8pmszCBBuR61CR81mSL3jBfCJhTj",
  "key16": "48zxSifNwFH1KU7gBwFhW8B6P9Kb8Q3QM4u5CxDrJneYLNsNfqZqf2GwJYzEAMDBojmcY91tWVNWCaG1dSAz5B69",
  "key17": "5kS54xjCnarFEqXygvNxjkG4aXpw7sbFHxy3JzoG86LphmgdzauKzBhgDaZmaXSajXDWwya23VQwPwJgUStgmM67",
  "key18": "4tiGzYrcwijLo5eB6KppwH64L74XYgPBAmZJ4Z1ERMkCEpRiVgnpyWoe1eUHqQm15m9rRFn4invVRCRsxTDVRESB",
  "key19": "4rGJVH6QPKaoHaodR1QqnSmDxS9BttbRWc2BBimoUqzySwq7EaJhpFbsfZqsTbFSuz3ufGiGRqqB8ffCRGHyspCH",
  "key20": "sG9zSuFv3pif67Rr68RMSCowSR1UzK67ecmgxWYZ9PAiGgKEPYZLSorAHrKdE3HEcx7mNLYmtZiQck3eRhj1JNd",
  "key21": "2RNfoktjjt7xpqCVTBN7cweVuW8Z8wTUhNitwT7T4G4bFgx8t4e59rUeQXRPmQwdtLJZqoRX6MyxMM442VRAyA4A",
  "key22": "Rd7YG4zKr1nyVuZTENRHF1uRYdAvzTgmYhSdPfPU4kS4au7jXMkXvyZ9NJmg87Xm6yHif9K1YaEDGUnmDCxtzdZ",
  "key23": "44ZBd8cjSN7jCFaj725aCCWZTn6TPenmaqv1yoz2mRuzZwZZ4jZTwtwdtiQqsAnmEJTaepP1vovanyNi15KGdrDg",
  "key24": "4viAQrVSSezebSR1voqhdV8NFMPNaa1kqs9Q7QkqF98BDj2sV29tyJa8RXtRZRJtVadxgkhXYnGHKuSRnjCh37fP",
  "key25": "5Nyh4m5WLE38WPDmnyvKP7ehR4Ab3EaAwSRyEVGo2JjQY1JFmxrgpm8ogWcKnQ86zpAgfr1Ao44gVTuCs5jPuSjU",
  "key26": "5CQPyp2WCy1b8SF6NhPLAhYfEazsVx1MVQFudCBzu3TGNDKymyUYxhCTQecLKbKkkJv1Kai6kW7c7DMF7b1MWdwb",
  "key27": "2XJX6qPWwD58TXXmoaqnKS2rZsQnpUNRdje8DZDMG5eB8KEVxnUd51ac7sdTh3V4Y9rvj2MeuZ6AZ1kSuvsiQFmV",
  "key28": "4G5ZaUpkuwr9eW7tc1WfAGuiAPZmBVzo46BXHEkzdmmgTdEtKR6KiH3aQZ2D4ZmHsK5Fkip4PcwdKavyatpjX8au",
  "key29": "37Fkg8213VRiC5NiDEaXySe5P6jh2TFTxgZhtKeZUH2cPbCjnAx1QgVGJdLufJPJ7HYCdv8KGNjPKzUp2txdJwFE",
  "key30": "4Zet1b1FhLZfuryibAmiW6sZMZQtbf39BCFCP2nEgGgy1Aeg3sLBw8GPBjgjMpcbvoWbVNpmiXoXJS5sTnAAP3mr",
  "key31": "2xmsH6JmJ8yuX1UzD6a53A74NrhdhkKLq49qWmtStvAn18TkSffoCjnTLwUpFpASMpbbwKjrGQ3HzeHEEqs1s713",
  "key32": "2mg47o3LDvFj1rcbbsRzNJgBqeNyWUUsZZWxKWfNuFxTdibUM3c6a4D77tLLR3Dyk4gHiSifvfKPN4XAAf5ryuZh",
  "key33": "pgq86cEQMndXBBYYws9ZdF8WquUb88dxWkH8yffkYhnLut6WqqQjGrUgoQJh3gZd8BPc3J77ibjEKh4m2zgUaQs",
  "key34": "PpQvH2NsDSoizMQZeM1sX8Cv5APUcbHAsw8bUQRS7fZe1g7a97ADxkxfMaNR64vXqWnPfMV1SC16pf4wAe45gGZ",
  "key35": "52RhTwjM9Zr4W8arTgHKintN54Z3YKNoCnTXJEKpMUsegZ8JN8TjpueZKpt99yCinC8g1FRNLWuX91qFXzLW79WV",
  "key36": "4hfw1S6RMqaEkSo66A7zVyAd4S5Xfc18nEUfuqmNjCB25LjJbXgALxuTsR87TYJzxgDhBZJCqARTGS9Favn3zy1y",
  "key37": "5zJQjgArTLSRogZgP3T6kDktTe57RKNVwqBbnzX33DVJcoKSnSt5d79jyAh7QMpDyu5eMQpPynnWr8k8ykqBHBTZ",
  "key38": "3kmiJp2zkv6RwDK3CoSCmGbgbWSNgNEuabLRae8NWqxZAuZku8GTzyGzA8scNTUHyqhYGZLfdtLSmQwy4gpQou8V",
  "key39": "4QCPidBh2ejWWfgHJGGuv95TxeKVrzdtALEvmuM912rJxY7oeyKTVbmZHxnSEsBbkMC992jGj6Zwrxk3waMxt9gc",
  "key40": "4YhFagmtnbitXYogU8VHzYH5saAuPhPoPegwhhf2EFjk9BHNwuFSwFEdPEKfLRB9esHQYGMZjYkyG1WymREtYY8E",
  "key41": "4AWp8JtF7GW7UvWs9B3pTwUs7obCh9ra1VwSVMS6HfAGAywXD89gz8JQ1u7fBVsZUG1f2x4TMkXRmY5SDGRFxmVr",
  "key42": "pbk7MSGHen6pyGtnriWDiWUSEN1uU6Titb315C8TskuEF2XVohg1nFSFqYpLFG6joVbLNyyNBcjfNsfqZchpsyr",
  "key43": "4XnAcvSh88S8jUapMBh8iYtFi1j3sHS5GXUwEKTWj2DDLdeKftzRKCdxMh8HR82s6R5FEDRgcHdK9UgfUvVUYUFG",
  "key44": "4XA8ogpaB39hmWnGqVxq4S39RMYz1NWpQSUqxdVFsws6XNnhM1YwCL6c7V1HX6vvMeSrySwh8F74VRqswWXShXae",
  "key45": "2dzQDcPzRB1xSM2jGXCyFc55DkpYbw2wePDfHbQLyPmtUYfj6tMFwj7YZYDe47n5vF5qeFzqTJ2LkKMkrnJDuqdB",
  "key46": "4RxqHEYRCyVDStPeFVrrbVDEEpeXt2rXELWMYZ2zq5dqRu7yd2vSEvdcEFbr6gxMFvQrj2w7zDVe1jbeEhqzvKZ6",
  "key47": "wPhRHYBRR6NH6AVRuaVteQxHuLcvVvN4quwRRrf3BQj3BHfMSxDcaZ7nFzrNU8R7MzC4zrfJnF3MjRrKs38mTjS",
  "key48": "2YjPU7mpxPeBwQ518TWpvm96N3uKhLUvS374wzM2XCJk5HJxahmvZXSw8pj4yB6GU7PWg527XBiL6p47NaHBsuQB"
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
