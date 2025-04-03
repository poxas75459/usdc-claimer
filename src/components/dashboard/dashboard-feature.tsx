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
    "2g1GPNZ2v5yLFJ6tLXucn2itM3KmmMuPK2ZLNAeQnVhEmG4Pqp8GNvXSs6aSkdA64mqNSoXtJYB6v3BFAGuHaPQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a5BG1upukkujqwF4ZMR7FkFv4B9YWE4CsxLyx5MDQo1bPzDZ1gnJsbzMwvt31LooPULgndpcQ64kp2a3Ph2F75u",
  "key1": "48WW4T9DZu3mnoeN5znQK5jzwkpNFiTu8GDSWzHPMZ7wYx7FQtbZ42HJTvwXsqEWf61VuCwWUvMe7cNoMBQUAVBp",
  "key2": "5oVBscoSAibw8PaHVbWRmJEKzUcsFEsvKam52qRDaSEMhrd1jmYUwmdTHY87bA3FsiucTv6sp3nUgX5EJCJyAD9G",
  "key3": "56vPsUwDjEsQrvnR1xa773tZQYgqAwktfXbA6ekfxrYESf4MqKPWQTETKyz1nb6QpPL1bDhBNiWanaCKyMH3QRMG",
  "key4": "65rrpcp9gPwvKFyTUzKoF8zfW4sbrFBRVU7zztKjJPYJzVxz3PdfhUNVxBQztBwhUYP8WB1pvopHq1VxrcTcGZAb",
  "key5": "U3Gfy3RoJ9Lg9yemda9yWxMwZnnWaFtPGy72Fzw7h3hqWjovf55rBfkVPy7q5BK4K19msNorqBNoaDG5LHXXnvW",
  "key6": "4y6d5bHDbUsgXdkpcWqikVas8SVFXUmB8xp2FNCpZ3u4McvhAGLBbBEFGAL27jNmr912XyQzspoKTMoDnsMpSTNV",
  "key7": "5k2Gm11qsf5AFst1FrGwVhHNFdL9mPaN8FV4hdMyS8jEEQb5HEE1891BBTnhSmWmewz3DchejXeZdbgzSEXT2eZa",
  "key8": "2thvUnw4jL8rqm5YJfFJbAPgLVfqE5Ju34YTJ8Ns1FCcfVLZxQiRgf9BZGpvG4Vrv18ZjancRgi41satAZXSbWSj",
  "key9": "2U4eZKvxaco9ZqvDy2oL3spx997B916q7d4RKnCT5BDh5NsnhaqrENBHUnLmFwG9FPSX3P2S6MvTpyxw9VX2gbeB",
  "key10": "4m8NraVm68oZxzXsi4TKVGKwUSsqz2zTms8sEQsBBpft37Z1TMWf8iDUgriwCnCJaBYXHBahtYwtxoKZ7EpHS43V",
  "key11": "3RmedU42hbboW7aTeVVzpyzJ4sLdfuEiCucCCVmFyPJ8FRqWzcPrgoDCXkJFjAbbXp2MWjcsRC1SQdWDUVDV7nXF",
  "key12": "3H1geNBQ5gKJ4yXt9RNYphBKCaBpLPDhYXcKX76sPUB72JmL9nW9gqQAdBN4UeBAqaehv9HB8okaa34YQGMgvxVc",
  "key13": "E5NWsrNj52zgA32ULaMch2n2Dy6ez3NCA31f3YwGn1xERpXyCXHTTJtc3a3mYKT8psNyn85KcmYgLWwR4yiXZ85",
  "key14": "4e1FhctZLprZHeg4gbK2Avv3xiUscge8BC1bFrZG8tvEkdbMVZxSFMvsMtrnS6v2KyGUtfpKoBGAHEEVBqq8rL4n",
  "key15": "4HNXcasNivdKVZNzbYPUQhDpeiu9KGTN2oTqBg38BQtETJQj16R6JQNE9s4UzF8qU9NLwrUDoSFMvxmtDffyF2DF",
  "key16": "3bGd8GiyUt1e86hEMQ8PknHsPb8uvTPhVt3uHchebas1rEtZWEg1u41uPiYsY9CGf811b2TsCZnezugKsDtszk61",
  "key17": "r6Y6zAG4E5XbsVKgqsLvMXM6MfC5cE6CRgqSxkaBWzbNQ4SbU6RDCkJi2Pwone2FT4KvzgWsMP9zbQv4iR9pat6",
  "key18": "4ggs5kXCimNKbkG9Q8eounBML9JsWNMXAWgDLmMExesEL3eDs8C5QcTjrgF63UuLdK8Wcd7fXRHFYvyv61rkNWLj",
  "key19": "4JDBm3V6j5PGXoExxQTteUpSiynBdi29HLxaHzHoqbnytL3HTAhkueEJhuWK8X5jrZvZdYFYFqsfjHhmkHGFYcmH",
  "key20": "35ZKrYrygsMcWSKJjUYeYJNRVPUrETghTs3HdmV9vyWgkLCNnmHPTyDvUy181YWUYhbAeymr6NK2bxFrctA2Chnq",
  "key21": "4ZjGarvXR25ckNdwNqjaieNwQoPYfBABFT7yZTZzzS8365wuxMGz2SJqiA8hf89kAoLV3dNBieEPj8U26AYjWpVh",
  "key22": "2uPYRjyaaJnUa5GHxLUgntCV5oj2FqYMpo48SqzwxF6S9T6SBp55phr1aGKqT8v5b9fxyNku6uLadhmyaZjtiJPF",
  "key23": "22C67Hi8vWEXaQEde1BtbCPXvZc8J36JqRHa2qhKjRpFeed5V2X1jJLLptMb4TPpxTuijeqe3FNmZcEKdy6mu7Sv",
  "key24": "5VctGrhTugxR9f4MCaHG82SmFpZuVVQYnNWmFC3HAnv3JRo9auMounx6RYLdWV1BfjijAUfz3b3YLbSN96vSWP6b",
  "key25": "5bJmcX2tLmMn1TijUQgVQT1oxshG6g4d6xC1qo15jtzGae69EPwLULRKzXLqDqZJ13NMDeU5EQ8TiL3SNrNL4XfT",
  "key26": "63hYr4FhBio7RE6csfVW56v91MTAqh7U6o5xrfevsQjnZkFRaYTpG5nigjJR5HRkcT6Eyqd5iifwdkQPagz3xRfp",
  "key27": "4rjNGArXMRe7fjtMfmNPqVMhwduzDdY3vDf1bdP9eWhb7auo8YdrVtkNCev7McLsM3vkoiPyZGQdqCupxNjjDdbx",
  "key28": "2hS4iTMePVeZkzjpdVL173AxJ4iP359D4kcQBPvd4kG8RuupozF3xWFv6uKewMz6Un42C8TzZWq68fvGEStZch7S",
  "key29": "iotumNgykasfr5bhukD9VbSRD4vRL4TsBp1w8UsCjwhMzswvM2eKF2qgU3LoL5qeEXPn4x61x2EA2LFtUBstQ2g",
  "key30": "4RuedaAfmWpL1scahPEEYayVhnQfpshxAG88vZn9TcKHAV3o5uiwCxx1gH4MBTxePY7SvVVwuMe5RM5ngTp6F2Ze",
  "key31": "3HhyqEWZE8K6b3SNzzfHKmgf3uMKd2b4HCZk3CGEKMsWFmMUpMRUFgMVSt9Ea7T59YhkMeGdAHMtJk6MeAjn9qKi"
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
