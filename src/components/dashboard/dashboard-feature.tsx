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
    "4hrxAXY9MuUxnizNrKAHw9E4DZ6NxaQeDJt2vDnUkR1eaPb9Aa1uidnc1E3KXRAom4VaTy4i4yrWdCsRnbjHR64M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JQR3F7h69oM1emYi8MCTPnbQ8n6SQDDMo4er253f6NZeeo2hCN6CmRYiqWuuoe6Hhsq13CdNHTWNK8EMxH1G8y9",
  "key1": "2a4n9UW1qfcqufj4o2SXtsszJWnofAxUD26bbjHVjCiqqFX5Unv7ZZ6bZiwcYiKvLX2wL4JHEQ4ZiP8btStBcppW",
  "key2": "3z9qHvn82ayKfhra8hhKsfGp9DMhFwNrQPGLbxX8nEwMohcLsCcbYvNZkawiUQcb3PR3ACFt5HPJFmhbNi5d5mNt",
  "key3": "5U2gJRZGcbfm2gKUgeMLTLsHqBCHzin9i6TWYhmUXrPtNDobTxGHVGFZtDEWbezowUVznC8AsA5Aps3JzkYZ3KMq",
  "key4": "3L1JUmX5ayMHmL7pi5eu9B3aBK6oaqyCfs7xAdJWx1C7aaSyRTmiF3B2GFBLJ7aSPUXCuUqgeqaZxkkgd6HzuGvG",
  "key5": "fbnWVTV6iazRoZD498XeBHMjJUhnYbgecLqKAZvaoXdfpq3Paa2pSKdaBUEgj3s3zAW6qgyZsTtv5GFnDuSKzSK",
  "key6": "51Zo4c72Qiff4gB1vgiXsf8U1kDbMo3wW8S4EZ9muJfrhNm8Q9bWjBnkxGiPBw7K2jMYWmscoVtogm6DYwjJE3vM",
  "key7": "67XYau1Bt5KiwQcPBMFgfsxCiakAupTnzkHSgat4QaDVfry2rYZCd74W1GAGs6qCFoTomsRCBEokQAbnjwGUYQeD",
  "key8": "52nu4hnCN97vnmUdrvoSCQZUg2yygcxDoVmehqqAJBhTMjfyb7j9ByXnXzwKfUPpwxwtXSNxUPrM4rMLUv7tWC8J",
  "key9": "2gdgoa2r8Qatf4CZw5sA6iPp2BzR5AJKyuMkkTDfNjNyuju6FKbNrGKxKWbueNsNFg6Rt8RLSPPNdcYbq1q6ajkr",
  "key10": "rv9QSjsdCFCsu3kgK3zygJuu5e13sXMKU4qFPfHa39XkNvkrNQw9n5Lzr2Jnj4mKFpCQQ6wLoYH6K1zEARjjqsK",
  "key11": "32ktZazii1z7v8zRLxese35zKGRnu8tAgna5UJnCzaUnw9iUjzVwpSKRxNbueHMYMDgYGi5MVZt48CVHENmraFRZ",
  "key12": "5EZRiHWm3jm21J95bG3czXHKr5VwpuaJEDzKtL3hqPC7uYFh82DVPchSBtRVcJHd5P7QaYQe6FycxavHFqYuPkpn",
  "key13": "4pw5JtirAxcceANKrM1k98CqHZ1xa1Z5U2FvHXw79EW7jf8JdHsPAYzBh7y8BwFG2En8pXRts1kBTqtmN6Sp28vk",
  "key14": "3uBB1hUXDHuNTYQY7unv2XeW1M6Hu4bL51NUBDJE4juksmxzt7bwrdpm1fd5w2wTdDRpVTwhcGSZbENDNzbCoXJy",
  "key15": "4MmEMxvp6k5DXGCa7CT9meevfcqbZrZDxnPDbbQup9nY9428wQhT7KthdqJpVpZUwiazAuHmVCJ4tJt1R1adty6M",
  "key16": "4d74VrcRhHizRPmRgAGJ7z2uizks96gKw88mC7yiL81HooatE92gJ2gMNGJWpvHEMVBcE4pUWvK7nZxrcMoaaTun",
  "key17": "62jpTFGpFePManPh3iuuxbLWuhS5rnfRowANqdobo5Hu2UYJBqZ2pSRB897fEqopoQNvGJySJgUiZfUg3L9mEHtt",
  "key18": "415Nx1cAS4nGt4hVDtFmJ9VXMps54SN3VsnXMmNy3XS7gZcq9Psr7SKy32FJobtP49yW6ngD4FJmTusBAPf14hrq",
  "key19": "4AUZdDBMKEVeRjq3AekZAmwMHC5RSEQkgEKHX4W5qhuti6gPHFaYjEMZRVaomWaJCtceoBjs3QdddX7kroqxHjeW",
  "key20": "48ZBK8FJvehJpV5hP472tqTWyjR273tdQ9WprPnLKvUBNCBjHmgfnT6ixPe1yWsPvn1U6WheLFLbUkD58ybwESro",
  "key21": "5SisRoZGvHs9ktKc1vhFx2orwoFQb79jZ2RQ65JFFc5w1zCzAgcZvC7Pyhif7eeP5poQWm7hc6Ke777nnxqdFFHf",
  "key22": "2ytxtDrVQAxGGFKzispiPmWRCbfoPsCE1zZVByvaXPEiyVQ4Exg21Aaj51XGeJ4wSRdrF45NP6Z4MzH1XgUQXBJX",
  "key23": "59XhvYV5kaxpvxKFDY5NKVNfAU2tSx4v34UoBPHiDKTVTYsSk28JpEFjpwyPJGi8nwAquiuDMFXEJ3DFs6G7r1Sk",
  "key24": "2SCGUm7yMpvh7awbU8idmRyq5M5zRZsixv8FeMX8Yqe2t4aCLS8xUsRk8AnTngTmad5TCBwHHTsdhsEpN1pRHXSF",
  "key25": "HmzrYYEtvSa5y9vcvGfcFmHSVee9iryLEc7crpDZ4FCfMs7U88Ktf7drZeAJ2eYhST4GmMDfoGEV71EE3jS9hv1",
  "key26": "2DPycn7mj3Q3bUfDikt7CsfhtC6Du4AuGdi2iCfeAPKWhb7JACJDbgoyBMwZ5fqG4uFLKzT6az2W1KEM8QMyvPbu",
  "key27": "4WbPEyDWY4behW9BXRfr29Uau6BmU9V9oZ8o5rsFZ7yotMnPkw2SDdVcCroPBeb1QCUHwVX3y3XvP1TiuPSVNoMz",
  "key28": "43jkUDTeezfAo1u56rtzqcuPSZPp8ZSkx68xzupAR8zKKA3GPxay88KZqw4Y66gbZDEqmoewC5XbdTFckesx6vcP",
  "key29": "4fvVkt2D1MarGgP3RmRBoYFxtHNRfVVnnemakeMxBQLs7DmaKvoezD9yvxtJAqUa4GDt9waBTNbEtx5XwoMWeoNZ",
  "key30": "3UPeNrk6S2sANBjaGwB2xZKYvJvWBFs4XePV1tEXuwgJRzdwkjibCAFpFfckqjVUwLWqGDFYAbmwdx7JS6yYMwxm",
  "key31": "59X1LnjvFeC4voTGzMyFYudMvgfpdWnVCKfQUYFZzj4UuZ5NVcpuoQPyCaznecMQzQyEfuYtj5EKfPWdMTyqeZLg",
  "key32": "yPmHhPA94aTNrJNq6XDXn4pPukGZd6cJRYKsmYt8j9yYi5vn6aHEPrH4Zqj4gkdHZDCkpCYT6oqdVNGQ2rrvUmt",
  "key33": "58PqHobSUHQ63FnwUyD32dUe5XERE9nRSZVxZ44zrabAK3zRFZm3MDmchjY1a8afjMu6ucGRXtgnNjgCwtCKp1AR",
  "key34": "tbTZQDY8VJbmTGRSEKnzzCnJfCjh1FGSunosRFGcDaoTBa9rjUg2tN3oYTMT2vv6dDXWowugVksfK6WcRLUpdLb",
  "key35": "2TUovcq9jLNCPUorNuCpUXBiLqZHxNRdRBdeBAZkbS6TDmy5pbCL7k6g5Srespsbnjx51Ne2ebsgQqGrZ6Wiy1di",
  "key36": "5ZuDrbh1qtscYFj3gH5vsMopoijS9BhDez9CV6V6Ah3tRWvkLs5bPHKzCCKA5ABgrn2Eq5zntAhvAYhrvA1JvRGe",
  "key37": "5StexTAgbiAJo5GvPjfGWunuwJdp5Cz8G2mwF9jsMibqdHm3RLjyPwGw7zYfK2WTazvoBfF62VQMmv76YGjm2oqd",
  "key38": "n4hE5seW4EqKzvhsBAFoAaTweKYu3SjKjRMs2FebQUHym4aVXALwmzArRr6LyLcJbNitCTHNuDDcsnMmA7N85Kv",
  "key39": "24Sk9KmoznXL8fZa8qtFiqw6Makq9DYFxbgVoKEqbPN7rmrgG8jNNMKWT9zpQQvDFAdw92ajhDDtdZx9jNii8Y41",
  "key40": "4bXaeEcnMZAm6Q3o88F7HcSZtguaD384raPgRW6Ppx6srXVMet6F3te6wE73SNCEYDD9yzpBM8yrF3yi84yhk6ky",
  "key41": "5QGTTNxAX9t9SzzxqiUHF4hXepYcZsW26oCvCVDdesBTjaqqdLoYCG49Leyj1umjri8zoKHU8gTyEwm9ZmFBSiGf",
  "key42": "2UkUQ8FDeRNNmVUHrtJEB44cyM6oWYtejqdjq2RtRhhqUqkGEwsFZeD29Exng1NxG8xRG6tPJEWzcYrp2B3X67x4",
  "key43": "2rF8Mo3nsZYqeUy2HPedDMxXzzrcQBbCAYSAcnR8S2HXHsrxnBYzustr2C8mUEp9TKDkhF2m2bBkDdShzedAiZEc",
  "key44": "2AxHtjebS5R7EWrmjR5RFd7augA58PXjHU5R8LLoreGYLnKDQJAXi27yHrHopgGkXT35Gggmk5SyitNKWouj2nwg",
  "key45": "3KqfNWPS16nqDZPSw3yakAmmmdvHUGoYngZv5Fvty3yoyqqe3GdLicigsfHLhWDdPi2pso46ymPtbcUEiNFEhWwX"
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
