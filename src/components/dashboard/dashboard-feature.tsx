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
    "3TBwHUbLuS9mzsd8sbxcCvtq1h5mJnHh3CDff8Ati9viqDy5EEFFrECGXTRTdsUv3yMu72m3kHXhDrVgeLtX45Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFW9cM4S76Qwf8ruRGLPZLiXEZ61qz7nRUiFsEVv68P61uMTNDYbNRQg1uuweNbgpL2mfcYLY3DzhTDeDNMFhnF",
  "key1": "52JSji1UEzGGGwqztrHr1RszViSvTVViNRW6UdpUxUUSWGkMKyF75enLAP2jRCLr3jkWefDt8LvrL2YRPreNRUJR",
  "key2": "3eqHaypmHYcrxVNgArXRtx6LHe3jtvZQtG9Qk7dRPSkdo7FGiqSpgYHcX4srZ5tpc37XtHKbx5vJXAD4yMcFRFC",
  "key3": "2PzBQe1c2cpNnsoURfa4DUgAkaF1MUD4pj4DFp22MnKoHrTigvz7PcR4STHBYJwQVBiBServ4fxK7wZscBtHxxrV",
  "key4": "3cde7jdNBvz7ceanNPn8wtW5SzXG3cnopnpxettQF6rG7fUYUWMsnVF2tyXoZbxz2bMubwZ8BtsP95qfNMbKHMXh",
  "key5": "4hYYLy4wmcPuL7FXk7fEzmJ15FNfgvHyuAtB9o6y6neceMUUFwcda8p5h7fh3AykyijW999XLxssiMHNbQU1M6c2",
  "key6": "33UGjPbQrpyGB8etYbTx1wHijQwVzVRT1tf8o545QYfAK9APkK8HriWDf2SeDSLeoWfkSVudQZuJnSP8Qxfmzjnt",
  "key7": "61FJBP1EPUtFSegu8pjzNAoqiHAGwj2n6DE9wDmeK2H4VwMFtW7aiEUspQPGrqA7TJLGLP89Rao7WoDZWWsNMd9P",
  "key8": "5H8RKDSsh2bgvX7kYYCYPCqufK3eq7USmuXoh6PAdfVnx3THKLcJHvC2PRmztHYzKooku8L2FSM3mEVv9D9aJmoU",
  "key9": "rzjodVnyta62NixnLSbgmAvfpgfbg2F2hngsDzLt6Jeg5yEhKnyzowLp7wCSGLVJxhWMrJXBNqhF1qVrNAfs7wM",
  "key10": "3eirq5zgnbVh1vL3e69bCRzzjczn2DCVXw6fh7Y4fJa8oj8oEs7g3uKbXRdHrJWjjZWKaPotFzdf5EXmgjhBzX8e",
  "key11": "4KqHNGb1WZZSAihDMzg5rDFVZ2z8792cnnbZdVdeSjYRZXGfmeDLBUxozh1adJSYzNDcdDLSj5GZ9wTz5V69pNq3",
  "key12": "52FYqMPJi4VeDKKsz5G9X73ZPU8Jxjda7G31HxyxWvksiSr71nZQoHsp5M8GE7vPHTXSMJGALqodzoTQfMjB6Jss",
  "key13": "26JsuzrorEk5G81RfpNjtAWkDpRUuMeUhz1pCpP3FJjR4KybtQVib5JSn59qaDDkBBsxSKC5WdgGfoq2tjbPEe6f",
  "key14": "2gwmpygv8rAAZaMwm1qkwYks8G7qDDs219kJTLJaieB81z8JKtSoprZSECvmwcWXLAzEZk6i9gJ9vjCNWhL2zikg",
  "key15": "5UFJQgeSF7vy9NpZUdj9Btt5tRjxVM4rkpVqZ7TY5CXZhLpbDvQRbEtYU41aPUQ7bbzZjJhAjceSjW6GUmETDzrP",
  "key16": "361XT5ztS9pdCJ4Q9T7iN1MtZNVWtgwuDgJiZqoMNgtmXWctN2Ueb43UeUF2mcrksxR1GxYD4X5Mha2H6EdFofwc",
  "key17": "57wZCmHHRgnqgaVFM2KbZ4NFqXo1keU5bzWvZ3cZpNNSu1C7AongzWDFRPgm1pP36N4Tkd1ompRAD3Wbvmkw2YJg",
  "key18": "4dLDf7PkmXmJLXaA9aQkwiH3NyyoqwP7HuWvWvv2nZNsLkp22Pj4CLSLauqCK6FbS28Ar5DrNhQs9QJ1TDrsb2KD",
  "key19": "MaHcgtBCCzoMeGV16nrjdwBBxgNcrM2Td8em4Ydd8HitAwv4pSNiAyXZzrkp1EPfGuQy35AzwLJBowVEpJP4PLY",
  "key20": "3EVMaMux7PeG3NzLeK3GMyDv3UYTBpuLbnTBSLrZULdbfmFVieR3H4uzHYRPhY9sMGatx5wwaKXLZB2K8DZpGCVD",
  "key21": "2uP6Getm73NFhpkoSkao7EKLXVWtES5gM8LTKCZHkxjtzVzU9ZcbPmdLANiW4SyP5Q3Qc7Xsw2XcviR1fXLZme99",
  "key22": "2Vw3BZR94Z7TWbSFGuXcSNeByB9qiDvHHNsTafXVRUsnaKMbRjHdoMf2RPhpwzXbkYShmTJpEuXiozw8s6y8dP9U",
  "key23": "2X3i6NAEGozQGeikS1RyUu6e8iJwbF3ZidL6pCZhKryPNttSejscGeYGimwbRL9iqgygSWgCychozgLXhDpDoT9Z",
  "key24": "5AsuCauEmfeekvtxm1kPHJufw3yMDnLjeUmqbvoG7z61PnGJdXxGYbTiLqrRvDpH29EHeziDvBf56uDT5H2euJQc",
  "key25": "XE5rMBdbpnk7yzMtHQaSRDnzrs2219bQ4mFrqc8NVK8GkJVqqnKTYnN6oxfpAMrkat697XibeHPUcwcBHmiPGoq",
  "key26": "qqFSN44DxKtJYwKs5RTcCZA4RSiHqGmzdjVpakpnGSVPqaV2ZygfX8avyTFbkFThaokvbycSvhjrvi1V3HyZq3K",
  "key27": "27f2jMRV9ps3g2SVHAD5U9ggYbaGx3jowtJJjMVvbJAjYjjdtCv95ACx4E4gFNrwsbgFCH4aeyr8WaG9z52Fdoky",
  "key28": "32Luuv9DsULLntUVmTfhHNvwGGFpiriKeUapHmGYSvruim3T29UNKvf5uW2yp6msXYRsz3SCGhF4TuWsWu2CdR3T",
  "key29": "4xa1rDGrrgMNMxvkkYuQJHqxkN9WkNQLBjFcVEZ1yXwBYSTPURKCUHWymmiR8pPxy7LGk92FZLv68AbarhnE4zUU",
  "key30": "38PsoRe1MTrW9JUvtaf6Hf3xuPk9SRt34WNqCR3oPfwKzYkiYM3v9yhcDDBF34m6GmCtpqNa4TxqafZygggPKUtJ",
  "key31": "2mgR8GXnA3i6ocysNijxGVeojuxoVW1iKFA7Qz2P9V3xDzgLwmc7jSfpHytCXHwshWQvTY1ALS1jWHQar7zspYV1",
  "key32": "3CPksmbPAmYB55hQrAaRxWrGZh9LHBp8E1DzxbtZa7UKrNiYP5navAvr3DsJef1kcwr5zfJYeG5dxU8kWwUvUxMn",
  "key33": "4z6fAUp2scBrJniNGbDHzgZUbkZUkfEJ2aCMK1uvzE2XNiYJS7FV9XmVHgKTT5aQYWdw4yrjpjVDDeinEuiCyaWM",
  "key34": "5xd74t22SebzQ6iGcXZnnaot3XnPkVfLA5CcMD9m4RVTo2MUTVYAHGJukGZSiwk4kPhzCXdJZup4LDxPaNfu9ATo",
  "key35": "5KWi3U3qPdKrhc7L3JPAAkqJCcXAw7ZxhxBwAoDqAuYbsuYKfrmHmQZcV7kzD5DMDBBi9yAR1a6tCWCDPcxyxyng",
  "key36": "4xvwgE14Zx3DvT6GS2J31Lq8SpqLdrJyXbsMLLb72kUBjquucSWdhwqfgNvm4JmedWHuh39T9j4DU7UfAW5cSVen",
  "key37": "4e4u33Cmq9YrazXrgiZ8tBDAxJduLMqKxXomvKYtZWkUVNCBYDmpTc3vt2N7n2qi5CxXc6trCBJfC8SV4pZkcp7N",
  "key38": "4kKVEjRLLUhJZQC22CBxYjuXxUTR6xwbFD57kHMKwW9tiovoutvwfBcxoBrnFZz4X7ZpLhELe5157dTXaMNJo9Np",
  "key39": "5JrTGQMJPrc8c1fhroLfhfZ5ccR5GzoRpgRoop8KZA8WxSNcBXujNtSzGwEt4pSuayG9F5w9mv5rr9nXRK7mgftG",
  "key40": "3TrgeDHh6pyQbiAL9gqHc1GsHfeyYLSrgJwhLsCKvqxpLxQzQoFzy8gmo6TiN9GFfCxvsd5qteRyjfTjb4SdCPiF",
  "key41": "4pFcD88S7xYQNPxnFboQvrLYhZiHgKgLF6zJK5KPHCEJecFeJKscJ3twmpHmCUSA9r3xaJM3AZLFdiLatM8RtiE2",
  "key42": "3rcVCHQagZsHvvbkazD8GXaytR6tMWqkyyJ6jaJQpVdg5v7F4fEhkrnUF6E4ifLGxTSfzCT22LRNGTtNR51cjQDe",
  "key43": "dSGr9sKtC5KcJWkvwTGc79J73bmRNhJdkxtUnskRFXAZ3hd6T4nXCxmzhU38g79HXJZPcvG9Ubg8UJoUx8zDPqH",
  "key44": "ivusKALkKi5h5h2img6z3kY7pjf4MkmRUQegwwJCfjoqkx7ZqTEv5aJR6VbLTGQW1z3PRowwc6YFFf4MWayBdC9"
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
