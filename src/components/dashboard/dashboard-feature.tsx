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
    "5bBT7JnahM7FnW8cHSC7j1YudcHkMoLb3dhe7WyoQoQ8cLq64mPaRLkcgfkWeMutcJPpp6SpQpyoDRNvtkjw7r2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kt5EfiDDvQYuYrDN3ToWcfw8aw7Z4AiEF1PwhWauKpyTHaSU8d8yZsopEku8EfXpRGnTAYox5VDxdvA6u1DtS9U",
  "key1": "tP46zkW4RmrUobskag19qtyyZHkYM28PavSYAnKmnBNyoJRouCjqefcEf2o3rhaceFbSL7FBJd9UTDUG6bB12DU",
  "key2": "3HNUyjsAg5Nv8hhjx2FiFxuuunFBuqJiQ2XsLkBGdM8W7au9L2k9VMQjVDuCgHkcAhvys2nXwWhyp4Gb1iDotxis",
  "key3": "4FR3MwDZnbxFd3et9KxPRd3eRqiwkLunzALAQffLthXtGoPcvw5zNTGpyQfy5xRCysVmuYyhtNsJxuHpboNkZpoM",
  "key4": "JmReUnZNkQv8bB5BHXsfbcdZJFwVR88QLjnhdqA15qFrhDpAcKWC9PDiupWVqJrfBeucS6fzRrbKVi2PmHsGWj8",
  "key5": "3AhJUn4CpX8b4zDyKGhD3kVN8ppZaGCRiwYvaUYbrN8K46efV5MNZSNvgd6g91cWYjbf3RwRrVjPupxXackoYPb",
  "key6": "2SJgsKw2wsWFqiunobsCZZFgPHgn6eV56dw1vAEhMJUh7kfieM69VaYTR29psE6p1nemFFe25hmnyw8FhfDnTGFW",
  "key7": "3uoxzdyjJnsrH8C1qksMB71mZtMKhkx6K11uar88zwqjL13i9W5qutG5zy3aSYxR71KPFZkEaeyv94eXQ3YwKsPP",
  "key8": "5Yq9J8fswFRkvyihnMyr2yQ5vbU9ZgnEiPiW8ms6v3FM9L2vN3qg8o7QaKHKru6BLDTzQayhE3Ne9JVRiGWFsrB2",
  "key9": "5zJdBobwLSsacNun28mfDviScLf9ydHiyL58FSNDf1zdb8MNpaBgPH91Zm3vDv9m1E6trdfAwNjJaJP6o5qHuQMW",
  "key10": "5QMbpdiHdcQmewPhwkeDxFKrCbjjSA3LHFqhwL9q4vhMhVGUvcAyUBWeFULmkTBwXxb56AX5vpv1hrAHyjx9KeaZ",
  "key11": "4gneSoa3tdDk3qBZ2euT7SnPVJizjbFyPCjXERgeQfc191ivhM4jA8i94HkqdjMbrhydKjiiazVWDatTRTxAVujy",
  "key12": "c16uiKNNcrs5AusAFze52LM5mqbNz3AwwnudSSzzQwCfxUCASzqkppmZiE7z6Kos1zK4FGmyqXpUYxDnQLusLWA",
  "key13": "fccgoNcJzYY96cFXkhRjmbt4gUJuL1G5cKcoEk9gsDEWF3yCPZQvyRCE11XW4Ktcw5eVYUkN3C6wvXz6CYQjb5o",
  "key14": "2UPL9rf9BDBX1YSVDGxnok7wMMu61xsPa7EEtcfxr7bh2FFy7Lac5pU6BRvfRsCHqnekPxLBsev4CVjjneevnXRy",
  "key15": "8VWyY7dGt9WZLzFxs1iAYghcUahepsJJSP5b2uULjqJgmxgGd1Qnci6pETfKXMUkeXwWHY256KwcBYWKzbHouZH",
  "key16": "t6LxTphAPu2PDyc4k1Puy6KBcVJ9RtBzNcremnfrHmwxqdNLbvRUzNwnEfs9GoEx2wgaLeaY9YoBVS7YNiMoigG",
  "key17": "27ChEYeUeNzjp52kU1ALBRfKsaQQNLBHyst1nZU9ExBUpkA4H448zSmfrkTyu1jeR9Fj9ZwsvrbtMmHZS5KobNZq",
  "key18": "5ZygPgkUQupsunRhPRX6PYsLW1nPKyJ5ck8Lys7KtfbTfMknwsMJ31YDMcoPK6MgvSvBPTSmgbgRZgLBtxV3z2FP",
  "key19": "5gauswH69keYfis4o8ExKdTvH1pAW4XeefaodhBdn4mt3SFDcjohTPP2ctRvsH4Fj7hLt5u7PNMiiCnXjWyq6aFS",
  "key20": "4Sv5TfthUsoV8coBTiHhySXyccHWfBJBJHNbA7judzevR3T6skMi5ZMoA27Aau3y78w4LpKG42LE9WAUgZhoh7Kn",
  "key21": "5HRtpHHMtCfuGZhXey5AP2LrZ3BJmD2F82CMaPAGKv8VPcZKb4F6MeRUF9ygJBUx6brTdv31xRuzpgyMNsvYSSfv",
  "key22": "251DXitmZ6fPwbUCUeR9Pf7vSnp1yX8ysbnz5qo3bEEDXuPSnDYD9WZMwXd5Jw4H1om1Qka57HCpGmZ714RTJMsC",
  "key23": "3dwjiLWxu55EqrhkwtkGFsEyWxnmwtivZcE54GRbMaCq87wgC8fBLjpbBrBdRe2w15UahvLNtmZwfHbV5vGm5Zv7",
  "key24": "5DPuZqLWTt1dZ9qiXtzGrgjqzqjvheSdoHTahnq5ucMxT7E7epBfvAtv8zeJjMPgBV6RhKFeSWLqm3PBzEUo9Fjy",
  "key25": "5ota7HBzKrhHNbcGQLEw33mERgPoLiWrsC7P4fHjAk6pAYYuPHpaDzgKxgAhMJV6J3Hw1SmQcKCroa6sf37QLjXG",
  "key26": "4q4JuasCzaBbZTU8wu7e1ykLpQgLYVwccvsnfTdAGG5QagrTW4rZggW3yfTdWrXY9XFcBELRGNgwhT7ywnfJNSpm",
  "key27": "5UPtMtjYvKZU4FYo3ciiwi3e4fEBXD9SneBNhQULcr8ZQbfWthRiYVKGBDumzE5jPfa8DTm6vK1GxHjoEsUqezou",
  "key28": "2FykodDD4MYx9BD4cvC87cJmj1RTAS96g423rhRnrLxPJ72qmJEU9fca3fKiNDLw7wNYX3WcM8nUk6R5rJYCunvX",
  "key29": "4wi4kEV3RrWTq2hAgBkfzPZis2Q8nZ36gmVAiCtsUHVrboTNpHMpYU261JWC8XApcjSBcW3AroV6W6XfUryCeSgv",
  "key30": "y39kQ9pSzk7EdxGJjoYu7ePXobFdGGEcReqHu6eEVo2qRDmr8fqzHTRm51zzLKf4sTdURAe8Mbr1DwHrfGcPmEF",
  "key31": "4sifq8gNUXVMT32EafEEcfxutbhmCSSRxBzYqjgW6hd5u9BwMaiBAcb3mhJEMMpbipKSCyWJ8LgmZcQMaicKJ3tC",
  "key32": "2AvtxQ3UnkiUKryWvKTuCFzX4CL4XuNgMWEbqTKivurCwjcAm84VY6NLaeaEoWwtXfQGYpz4uBo5Z45R8cuRNuw",
  "key33": "22QAMvX3pHDAGz9NrWggC1uixMNsLNfExgcpW1D2paHBGoPmSinsuWu4gfW8Q8xkjWK3uwLhXAg8Di2n5D4Jdmou",
  "key34": "3G9eiySmHAnqEPnp31k4bWg3m8pr3knskMzdz6aeFV2kKGfn8oUQwjFdkKpNSqDX36Lk9VJSpudYvAVktghfSyRZ",
  "key35": "67TC6AVLerkpvCK459NvLW5ZfHKvcXzz6T81jfYQTRkQLwi1NTV5duZCEaRNFWY6u46BMKhY8ufoykghpEdieNNx",
  "key36": "4hutu7iUWvYJXS66fek6ifBBGSjPjGbQiGJrRvwi3eZgKfij6JrNKyDKttjJjYsdm1W7Hh267yiNeX9PfrWrRLd9",
  "key37": "2CZQvo8bWmNLFGTcSJeEtoiZu7CRFDtosvxKsJxFfhadX9k5AmLR3spaUQbkyhuFX8sB2fbfNdMpRwmbX1F3TLKw",
  "key38": "2n3f2HTWnZiJiMQnExLxBk4HoKj6brnfAPc7DpTSfmL5UpNjWBYrczFJd1TdtHBobf5qBZ4DppERTGXPknZ6qA63",
  "key39": "4YX3nP8VM6iLkvesQfSc4DN8yc535zi3Y4uHhysokpAitAFGtj1RqX5tG4P33LngiyXD7k9bVFc7NQ8KiKqU387U",
  "key40": "5mrrtwY2fR1kLHYFiqtzTzPrQ4TrqX21mxVHg9Unt7J5nXG4rfTr1jXfbJB9WPuB5NiXEBmzP2Vd8oNWfWr4PEf9",
  "key41": "4uhGNPNNwE9m612rp6QBMuYV9qg6xBtLVF4cAVhBfx1N884CVCMomYdg2nCGpmDgYr8Txxd3bdJnkv6H6A9xGddT",
  "key42": "8r9FmsdocioHkPs566z72zoJNdUaDKdftZcYsJk6FjRcY6v6to7wW2zMESzMAysVNfPfrt9FvkiKHLHkqXMyRpA"
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
