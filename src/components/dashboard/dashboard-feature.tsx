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
    "46mLmQrvYxR2tnD7hyTzqQ5VEWh1vMQJuAV2XUctHLQTvzLEJaEjvUoJNqN1aqt6fsT1v9txeUtJUBR6Bz7kMpEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GMfjygWLJEsKhKVLUEKwCyJeMGqbAv5ELPNbD8DZx13pYoiqVTzTZLJYxmLsnjZtN9kAnDXvxtZr5JWUCC6zk3",
  "key1": "2ZjCexnuVTVbVk7tzM63797PjnKgYSEpbK22wEnuTrZdzUEBEbv9LcMbEYLYNuxgGTzTHvqCd7Dcpx9kQeYiyExn",
  "key2": "513NbfHUerVr6LN2PbahgyJEnVA1hotfTyHVKfb4h8x67qbN4pzrcr9YTvZJaGkcyxM4bo8uenhEAgPgxzJ6eUVv",
  "key3": "QNkJrNt7LXuG1cyKJTCoyQVdNia3Y8wumrQ8LMmfLkyJkrU3eBYt6T44XWyaVLRyNRxQoGwYM5a7GKBafvzYwEd",
  "key4": "vVM1S95yS4bEYkLxLt2dSCaUSWMkAMksDhBRC2opcMLRvfjA7weeK35LG3YywkLC7U6WWoQwCVRkmKF4v3rsKU7",
  "key5": "5UkHycaZA8L8HvfzX3CkMKUS4jNLpYahDbL3kVdL857cLD7PcwaAbehiCBT2vdaAVfE7KFyoikBhj6YTpvPcGZrW",
  "key6": "25L3t9fC6dd9BdJZwzzCXKfWGZ2rXVoceUPuCoir7SmG9w37t1EHz8UPRXHCnVoVUuJYqqKf8Uxwrgq1r4QVNpQy",
  "key7": "51VWvM2DMUVvSo5UXSTvCsKgUBeHfcMr9BnQC6KkhAXcskr7ZmquidK1DkGeUMcWQAaVGpMxnKPUoxsa615fFsCf",
  "key8": "65MkkNCBDQywE3UoNmqKpvAdZsHL2xhKTwbtU3NBBB31LDnyZvfTavRhu9QPPMLA8AgX9pwF8Zcu7JegtXuGhF3C",
  "key9": "PhXksNPnQkaTqsVcXFdDTsvgzP1s6ABGzMFvJ6ya3wMzJrqmni63LFWUioT31AJXRXqQuDaZg98vdwnsjCkbEsU",
  "key10": "3fnNdzpoMQMYGLD4aK4AToXacbYDTVXs7XwP5xG1NgP9WFYN28btwdbYosA127ENeUqpZG2YPJFeJyU3pH3eS6nq",
  "key11": "2ZKBpLwayYYLzENVZ1bLApRBzbcLDAg2aq7MJv3FtPUFVkbvkB9wKUygUmxJ4a37Wua5BMQcbsGT2orYvu8hK8ry",
  "key12": "jZSRQ3diDnKV6gv92pPAzVaYkbUhsxJpSYPK2XGBvn4K9Tt2Sr12Lxo7oGDJyDtwCt6oiB16Zd3nkREUzuLmr6q",
  "key13": "4v4pqLjGQ6AYi7mc1kHFpdGZa1JM1uAHv1NwiNtWQkksM6aVFnHPKuWjFyCF8kaw7e6Qp9qsLpLpnUZWVJNXzW7m",
  "key14": "2C9Hai1JHty8CVXmkUHph76LMNMUwTeggxBWJTZwGiN6wcem7DVHF7n3twcaZLWsi5sgyqnobFriVsNXrPjRNpNs",
  "key15": "4pREYE8ht78w5rR7VwctzLKqvphpBv6yDfMaWZQzkkfdW76ALFT9quJhg7i32jyVGpVDE3bRQtzshLJHP47jB6CT",
  "key16": "4x84Fd9Lc5rMp4azdSsPBnYDggFPdAy82FEkkq8NtkpBJWsqmSTHKnTV5xPbZyVD1wqPWX9kKLQJ2sqsx6jEGxUp",
  "key17": "3Nqo465g2EJbABNDsQEbVftrbynryYWCAUgku45TMYPDWeX4xmSrk5fdAm3tdkVmeuKGLfULmCuiTbX9Sds59kTb",
  "key18": "7NCxHLbcCMXznLHSB5rHdjfwcCNYUCfrLdH17ZBuetJGQJ2dvZBiKa3CeJ8cGchT5TEj8LHisAuGHdEAteZRQN8",
  "key19": "1veiqN7Hsaogq1uxSN1qfE1fcUMSzbhEgKx5u8Ro8RaF9wqMneYADucxHmFADUtWSdTeJSPt1pguovDJk7o4zGp",
  "key20": "gXkf44S3HJRp7hz6gfysL5HEoiLQzmxzi44chVW75d1mkKjqzL9nqHKQfYHcwzRjPXV4vNS5ASf66tofCjQ1HaV",
  "key21": "2CkVFTxtsv7KagHXPFAyAPFyXDCKyC2UV4TP9TiiN5eCW1zDnxu9PfuygZGPVGkd9jEjtJz1BAtSXbwrJDeRfKyF",
  "key22": "Nu62jM4sqbezp68Z4E1yZdnanxiVnrcrt6wcogvRz5mWCfRQdtfaDEKc6WmDudByqEtWdiqn7SfjGW2bjSKKdY3",
  "key23": "3PUPvBjqYBzfTsRTM77PxkZbz1Nzr9Yvii47b27pMbRnKDN5m34TQHMXBn7pADE4iXEm1XnPfAcjcAJMPnxKpvBN",
  "key24": "5viuMSQHgckp62xVKfvu5ns7o9rkSZyytez1UQZVmNsDF4PLa9LN1UxuhpXzxNhXZJ1arpASM7jMxT5YPkozjKxc",
  "key25": "2T4A6eaUNj1vXtUomZAcqqCb8CknsCF5C53JTVPUBGQiwpW5vDfwyuwbVQ4jshnRFgyrtWfoCzvXgaKFdE9MXuFH",
  "key26": "ReQ4DMiAurerNUV4mpgFMV4HJDWbGWUdiy5mdFcJ4z6JqpzRLLNXYFvHuYAJLiz7kCa5EcSrXTHkowmQGZidmgn",
  "key27": "AoH57TaTuPvXN1E8TF1SemMndVBi9QHfYviPgbqm9vsv9ogsoofbxE8x29rtpjS9stkDkvbEUt1cFNtkvtjBQdp",
  "key28": "GmHoCqdop4nEp7sCLoLeG3LGvUXvpJtWVzHq94ubGv5q6chHXZaXffbBnLbjZx3ajwKTPNca15bRReCHS12FuKv",
  "key29": "58XURsRn27djh4SXFpjZfoW32zmJe96DrnXDhs2FBMKaqVoaet1xpL36p5iGrdGrYczqsgGDyuXKJEuG8hkn9zJA",
  "key30": "2iqKZoggwCg2fWDyQMdrsp5oLaFLSVhRY1W5c5He5V2XhwAPQj4TZ24Sc7MquR3KL8yf3m6MUzHmWuBB9HzbKoWc",
  "key31": "3pLMAcBMMX3ZHkNG1RNS43CgJEDhAgGhFGo4AKoekyR9Tf8Dt2YyNRgQZmuUtERaUYt8NAPXDPZFgck9qJsNjn1h",
  "key32": "5kyoKqXmFXTYkz1FgWqvegMNDQ527G7tzBGa2vEXMYMpakgx5cemfYjeX823UcJGPFfqg343kUVD7T3ZfmMqVYTU",
  "key33": "2eVnAL37Qc6hjxw69ayrzqQ29tmjXzAdgvrmd54fMUu9yyrUm8warVKZcb7m8xLYT1twrf8jifbSja6c8iCpxSRH",
  "key34": "2B1CUVzzHG2UQ2wzCNsEcBdwFKP5kRgrf7MKMFJfDsVeXye5raim45qYGBkCCjFxeAuBN1q5yuXyVMQHfFZe4QKD",
  "key35": "XVDTjtDnwQF1cZm7LkEDj7ma3fA6C3eKeK8mzCdk1DnxwLQrM2sBJdc3uT4C479ywVBLRKjWRq6HfjZs1FbBLwp",
  "key36": "3inLf3vpr3HUvCz3jcoHyvWmFRarQ48Gzu7oM8ULPGWmP1iSK5RKG3dtyrVxR314vydg5yv2Fb9GMUAE6PLxLsqx",
  "key37": "tjLK4aJV1Z9iwNteoBka3LGsM6P87Tg6QmoGsqiVRfx5UKiigeHnPqyrXpLSPB9pYX2zbLu9gfEyWBTVqKBtqtV",
  "key38": "4dDajzE7c9g28PWeE4kTCzeYRsy513cP7K3NydS6CMaizgY8UrkyrC6ZHdb4rVc4Zei3JPqjhbq1D1fwRkmZey3i",
  "key39": "5LpgxLMmQfvSQzui31CPCFAjw8eRjrGZFYFeWQmzM4fBscCQTcD4qRGGZgYdEx1xVNR8RtGwqDvWLL9Q6zZYHUm1",
  "key40": "34CMmPrr92Xg2swx34zN56492D6DHafJFDaoR7kGfkT5jaQXtiKXWtmmj2NMPQddAkKmsSthYGg4rXDcLeGhKw8k",
  "key41": "5inkvDEQbFamMEBVMxyYXNX3gDyPkP4rBVsc34Vm8pun4Pv75UumN4UCW3bWSTp7H8RiRLwja1mEkqnCs8y6W3Wb",
  "key42": "4GJvu9GxUFLwXxFdce9WEemdeW1SAhK99yJ36rJBvoTnLjhrHfJcHsM6DstyEUdy4sPbqF39Ye3BGEtpifBCFfbv",
  "key43": "4janYgb6a69FTZesdh81BrWF8qhMWtXA7KZXAm9o7xD9aU89hrHWZnDTRkWv5hBXfzXFAS4pEwckaNagEQf8rp8Q",
  "key44": "i2kLtKz34VA137mHxt5w8EqMEmjoWkxmuYiPgyPdm4sQLLUWDjabQJtVNbozMY5d6xZmqiqQyyA8mFsKmVrPfpn",
  "key45": "3bU46CPCvrFCR5N3mxJXR4rHUg813xbwDfPFM37YjJxKvfjzUBaxfnKwFJHfUM2yfwZ78E4QqWkCBufF5txPvTFJ"
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
