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
    "585N4EEyowc7u4NrH45fvbqSRxeVHbtx1RmPhuP1kJmh6BoewSCgo87PykSC2r4rSEozQFxz18zAj3woYCX2c8fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ojHBZZRxHoJ44hq9GbvjYwgQ7FhaR78tnb1Bu3Mgd3aZxTEjEWCE3dwgjk7crwvrK7Jenk76Ybm5Nj1iSj3sTb",
  "key1": "S83zQXeCE71ENyYgmyjZJMXJNWB891j9CxHoy2Qics6y2AoavnjoxA95eEZYYtWbZdQ46DtTJFF6cB3sFgYB1mx",
  "key2": "4wp41Ufc1euriQA921dAcNcHiWfmzefHqTTv7mYGhm8kUAnGMVdkmUxYvsZJMx6kjgv5zfnPnUi31RvQmxBRPYJJ",
  "key3": "2guNbBKBdci4LpWTzr6yajxA1Vz9s27aehCYSotGsdSSFpJF9aB5GuuwKjBjgstReJghtfAWoEAHDL2JVaygP6HZ",
  "key4": "7vMHUze51jcg2jiLncMrBMMu6EXQtWvzhhM9iyNJqdkCHqzB4mLuFJD75LLgECw7yTaLemUT18fwLZbpHe3LxYq",
  "key5": "4Q4TLz1c7DGq82hrjBzobrKFHcaamWdpWqxxL5usDKXrdyZkbipovwgXS3472hFbwDtYcHzNVrsXambvcNeA1swS",
  "key6": "SJih7sUuA94NJQtt5ZWgoZH766Xd6bSEuWZzGQBNT4p8uWuvyXG8wweViMmciX2jgfUpFh8BYDoU1R36GHnoQb4",
  "key7": "uYDW6BZSWUF2ryzmdhHde4rwWiEnsswekHPis65MiXgGcph5C4i3ZV1111K2WQHXugdNeG9UiKSBsW9hLiKfssA",
  "key8": "3MfuK9QuCgrBhkaufsJ3qWcCyjmiQr9zpdJdhnxpT8ijVBoMZwTX6f1MZ2fcErKDwgZfhYw4aDMryPE2kDBamHA7",
  "key9": "2vXHfuRRJJN54HF5Q2fBh3y8V1KTCh3CFdzbPAnNp3DTZr3MWdw4yzLt211aboEQvEjE5YocF9oGH7wpEgk2javi",
  "key10": "4VDKykgYHMHtgcFPfNucNPbDjvhyQ2BZocinMhkDXMiS49hTFdZ11n2oapUwWBa3Xx8e7crRK1CkPQWdmNPkUVPd",
  "key11": "4CmojRpa83XpaJS3Ch3HjHKUv5TS9eJFwzhdBrsPqZXkHdJBx2cK8Xi7kYcLnHgUh7AWXaccAZE9bzYENgyzrkLu",
  "key12": "3dbbtV77LqJiPEh1fhUeo1RVKTNVic7hgL7E25FmJh9KeafmwCtAMUH9BsjXszzRHBqkTZSvfUcHN175ghVUtfgy",
  "key13": "5j2cfvSmTyuN5k1BSHAD1xXwNmyzCFwsVjaSJvgKiLv9ngtG72MDCjAbVWojrK7V5AuaZvu9JrEEjJ8EXxajk8DC",
  "key14": "4qfeBzk1RLHmnLkoxfn1KHwJN65HfYyXm9R3JsEnuT5ZQCmRW6bhGCCmVJzERFLaFCtfcGwFuzjVUVCV5Ukt1KZ9",
  "key15": "VGPngLnvxFApuMjnSD4Hfjihpw5f7UWBAwdHH5Q5MHKiywuADvHvVm6LemmgAE9p746DzUm8YCb4zwYEHzmkUmm",
  "key16": "64QTSsDptAcLjjhCBfHKMhufbYZbfsf8ARjoFadZa2TpQYGeGvvuKXTYK7KaX3rxVgU2Kziyn5TW3K2Ke5jx2Eod",
  "key17": "2uBn6VUutzZ9KPUwoHixJTXdoAd3vyjvnkMANf2pT5dUe6cUpxxSEKCbs5xUdjLkG2NSE3aKPvFZAzxPPJzExbG3",
  "key18": "4QP2JX9UBciyFU3dRsw54yzRQsod4bCKRDY5SSs8WvcfDUhZYbeqrrcEzMARNRMiutLmQAc7FCBT4GSSSsEF6oPe",
  "key19": "2Q9nAEMoC9frT2NKZkCjhHBq1vWvvYTJjgFpD3dfttj5gdRkzaiFkYWBNsFgkBsXihXQ2AA7uFQmFn9tksJdkt2Z",
  "key20": "5zYBjKjskNr2HWdNByh2Nvnwr8nzxmQcGsqiDTwAgMQV9XeCeGWVud34F5qD5ghtJNcA532H2wqtZdgfnUib4eCP",
  "key21": "MQnUQPNjLJwUrUWtdQjcXSWRUKq4os4pDMdux4zxVHujLARXGGdMqtRC22D5wfyUgR3kjtdDBPXpx6MrVWFwern",
  "key22": "2YzuEq2ckRhA97BHG6SbBix6MpqtQvarh7msp9YDhEuvTTg9Gg3bB5ekc8G3kt2rxByQrLztw7W4M75y93KCZFTB",
  "key23": "2G3QLxJeBBttZQ34oDmn5UYgMkqFZrBzgiZCLHc3Vxd7PZAbDdK4YRhQJFvrYY3w6yWKabxNauDt8XjiAPQiCchT",
  "key24": "5CEawsJXJgeeZJsqih8mLEP9R14kiy6eeeM8f5SHj2hQa5SuhzTYNXedBDoh7gDBvBH7o2NBdXYCoZbFZbjYJYgz",
  "key25": "Th5J3pjQFZ64XaAqW1GfU9J5pspm74mpfFdtBsSbrXtGnh9A4RhhYyHwheUwvs7VxFx5zr72DJdLXGerQqixN8b",
  "key26": "AwMTKVErgV8MjpWDKnPSmRXSavr3LxYvBb1objv9TwNQVdbSkJxpiQTxG1Nv2swovDC1AKehD5TtoESH47u5TKb",
  "key27": "21P5RkbMmPX9Uruo4PrhVTNJSKs347qPj2R5agQn2fPf7v5ABAymwoy5J97CbH12nNgBVDwzjrSQ5gZagaw3SYjM",
  "key28": "2i1VUEvd16EExL3N1hhfv6jRAguWS7b1Qvrs4bJigCPVpJdTWKkdSoSp1JVrj3USa9GAQFEXNvQ89oKnxc2EznGc",
  "key29": "hKvHbgiByaPDZajeLPHBGg7wQqV8v2TuvDAGaHZWPuRwujtu2mM4kJFtsAfETxC5xrogHioLVVN5H1SpzrvHvkp",
  "key30": "4EvNgcY5kNDtWcTgsdDjuikmGcfT6oz7jYyY5qRP4zE2zw1Gm1REEgdgghK9qjxojXtxWpyKay6FQVTkGE956jKU",
  "key31": "3a572Gh2Cq5qwssThi7P3iGS1v5VKbwGTJByQKMgQWzsEpJevQGV9WB9dM6hJWQohUu3eCTn1EfNu3ttcbARdXMW",
  "key32": "64ApzQY8mEtsdMsw28beDH7SqNSQbKuB6PDGS1Qv1UVqJ4NBkD2kCtKsHdEbNUCHBB7rKcqR9srryvrb6waw1Qt5",
  "key33": "4YaK8A7Jfc26Yiv2CJbw3T9dVdnRS7nHysCz6nzcvJzYKHYht846hAaqruqVfKQK6DyjpDHhRh83mFm4SmGCULQy",
  "key34": "5aiJvLSngTMPTUEP6x23hSyYGY7WA5HcSvmfnveFx3KUBNX8v9gMUanqMCVVb9MGrg3fvagacrvNrztkfBVBedaF",
  "key35": "4fCgxMLRqdq7zYUfgrVV3MNCscHaVpoLgPTWy3io3ZW27tRYNK3pbzof3LRmgV5DwugHUczP2ikekQvever6rRW",
  "key36": "4XBWsFTCawUu9ET3bYb1VKFwb6BagXrybQVEjEUHXnPgqMfPUUBrn8egJ93DQnCPQg18WLCk5vECnEEYLVijehdp",
  "key37": "2MsrPZKfDq8BodmmRU9GbJupyWmT6Ys75ThjPc1WsEpPntEydfebqmEaiaZ76J3hRsjzYD3ffnPyND1Q9EWph2fL",
  "key38": "3CLiGUgd4rx2r1kfiDgrPUAao6Xmv8Ma4r3qMMZqwdKGCLb3CMNvQnEoAtuR1NYJnmnsGdXBgFgsdtGd9sgV5GAf",
  "key39": "3qhjmmpvf3Zf7EGYDwqCnPZDqtpBL7L4RCNjkzn2fp6gdQPva1gucY5SAxzQiMX8Ev5yyBnxV5LLp9wfZzcajGCS",
  "key40": "3KLAd8ybDtFZgNAanBmDUunzHSGtpDcZNdVUv7CQwTdbc6h1z4uxZZXd6FuUvjcAnuQyqzMfrVh6h73pAE41Ngwm",
  "key41": "53sZ5VJ34XgqbmAQsSSdSonyPSJLRv7XrFbYeTedshHAiH7JnEeEQUBkztudLFAZn9Sf1vwc1RSZGZWFDUpqpfbq",
  "key42": "6asZgDq31GfgUZBx8S4VbGsFjrHG8temqRQ5cBJEQPL9LSJVerZu6jqbKrtWZjF7zzewc5HN5hfLYSZXgZhnpmb",
  "key43": "2sfgAyBP1X8qBFrWgjfGHhGCNAF2DqHbBrdHkRM8aCy7aCd6QNAYpMomME7vJk2GHSkp4PSE3vg98xbocHqi8fUA",
  "key44": "2LvdKvjD7rupFLbUiddhHgSE4TL4sZ6gGnTrQ7X2gzjtR7nya7cvkbbth75tKwsLTdCEC9vk6D7GUGuCuNktYJtN",
  "key45": "2SzFcDvAkzJXtJ8SEbVxzkuFXrJAQ26Ldv6wtmXwBjwX9U7PSqLm2RzyezV9ytbJW9afUKL4piqHLnLiTK86F1CM"
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
