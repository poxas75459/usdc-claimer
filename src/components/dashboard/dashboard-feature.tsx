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
    "4xZpXUTVx3HoUw2ucwNNZLZo5vwDJ47NWQYLidehR716skfv25UP6ZLiKRc2ctSi21aTKU1kCSJagrfN5fk3grVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjuMU8BdAb2nDsE1VA69t7GoHp1pZxKcVmtksykHYRNHDsmRUajTPvXdsD2739PRAkNtUp8MoDB4KjyQcDZL8WH",
  "key1": "48BNELm6mJtAbWZoaatEK8N7SL34LLQtvYzP1Q9S94YNenJfiAy5Yv1tWrKd37wSGBcLpmcsMLhbcmLsKPfBufpg",
  "key2": "42To7BHWDHhoFfNVRKcp2B9ukvSxKqrNmvmWB1LhEZK4m6r4iucb6kJ9PoUhDURrVUrSGSAbTpTWuFJK47gbeaM4",
  "key3": "3VpKeX19dQ5eb3KiiE3SY8dBSbmoASFyt4dJkPAj8SUmEv4kcm4jKCY7hx4bktsjxAPKd4vD6vronDnRiHmTbzj1",
  "key4": "vtA36JhxTt7YGq4hnQcb4BcRv21CB7h7fFjmmeeTcWFMxR8U6iiCAMFNkN4G6VJR5uCTvWsAUgBuenbayiGsLDd",
  "key5": "59Qh1Wfd2wCqak8pLRMk1TyUz38ypC1rfk4bpt2QpL5skW9DSqpgJiSRdxSAn5ukPZAECioqUsH8gCsBZwpwwuqP",
  "key6": "5951o8WpaUvDb5YPupSpiHTuurTcBtGPD6M92YnjHFRT8bb4QN68gA58pwmvfQ2QeBa9TSJmTv5bjv7HdT3vUPFJ",
  "key7": "3WRUa357QuHvK4LRmp4kbKsuvRwniWkmSB91FLgWy2ZCcJeMw4LzLKE7WMXrXbQLnmx8sJyZ3jXyknKPHps2ymJT",
  "key8": "9FiTn771W1f7KuZiR4M6xMviZVWziFWh7Bu1VUVzpj23vL388EwqiB1GKaHotrWZ8YtGTTe4vP2r3pMj2UhhQ7p",
  "key9": "35QiUYznEDgB7EJivXKKMGz6XD31PZRj6C5WfnNmmCafW6kJ4uL451ARqBxmP3ooztnxfssuD8EHURrR2Yb5FA3v",
  "key10": "5c4m53FkKoBVsLBxP9Wdxy31EBzwrxt2R7WRHoZvNigN5hrL8rAThzLz8rvXJpK1um9fCAmZeJbwSYdn4jUcbVg",
  "key11": "5UWsarBqZ2yx88yRMHntjSzTJqAfSjswsz5HUJ78vB3eLdH4hX5GvmZrukkXG614oUnfRxCjc4DUdwj1awnjUxTc",
  "key12": "224owtehb6ByrzzNp7vkNtQAhNve5XrHv1J4KWgtRoAf7bGbcbNq6EdHEPSr4kNi5PfLZFSCSJPLkMRjAEqfAPgX",
  "key13": "4Lnk5B9BqDz2Bnt91WK1za3WuDQ39zJtMr5XN1nTnhMm7SUvWJBP37m9JSjAmc5f6btE9GYyg4W5nAf6eqPawjB2",
  "key14": "5wVdiEPEEQMTMT3kcAERSn5X6fXKLfmneEDZfxcrtRCgCRFki4WmkzKafToHvwxYGw5EDKdv2bLQ52N9b5mjnqxu",
  "key15": "35WvvjUHMCWb5dUi4ouqV215PJJjvCqoLfbppsHd2E2LA3CoNBRpqL54SFuSMTrNwPCXJrMJFHQ7sqyK35RgGiyf",
  "key16": "2dugqMwmpAZjYs7U87GBbiAPmqDinJFwNuNwbd1uaXR1eGe1xSRJbfWKKNuRPodT78YBshhZ8otGQ3yu8EMk8H8u",
  "key17": "3YVe3uXVAQUfurUuKJoeVnjeEKyX8VTisgYbBPzUhz4w791PrzgzdAWjrGgLQ7creR6NbHtw97HtunNqdcgT3oFk",
  "key18": "5Mk3dTpjejGppXaU21Y6bpoUEXRPFYKhkjKK4SVbGJLCENBAD8LdSrEdxP3aKi688YFHaMwmPWtjKtkcWmzKtTNS",
  "key19": "62cmyFyfPbpD5LtB5UmMYTJZJMS2N3eUETCYDE9i5carhrvXH1vW2f1SwVxfZCpn3wFeFNd3nsnHspR6CVmUKN2y",
  "key20": "5rG2eRcK1pDcyUepkKAUyPDLj3eH978WayhTGXunvZ5kjGD5W71SJLobn2heNaqX4SvQMFz7mPnMGcoSjfEzyHrC",
  "key21": "3ft6ZYThZ646toJrQCzEDkErSamdVgPn3VQ1Pfvd7SaxkeAgCsgSPC3go9eNSYuxWQc1exNdc3Z3zv1AwGsgRq7s",
  "key22": "2SQ2ULAH5fYzzC62K6KFzrd8am8QK7UidBJinLWTA1v8Siyw9V9oJosQFyX87ykYyw9NA1kg11tzP4vSnEs1Yzvh",
  "key23": "2VzfU9qFU4hd2rndeF94WpZSW81GqhrAQMRisiZoVQQL2HhuoasXRtBiFUn2fwg7T5a5uGJss4Y8DLzNh84XrrtK",
  "key24": "4hwvj5vUpx45pMPUZ7AWK4aJKHPgqnwb3WVfDNdrY5XheXj9nmrwHUUqNtmoTkoKeiuG4KHnFe2JGg84mL326Jet",
  "key25": "4NARDBwTVSTMah115m7vhLWj5EPadeQiSkKVkvHmpnC6qXRzoXUyqh5hunrXZFv1FKwXjfwtgvMGxALiw7BjA35P",
  "key26": "3ztFsMeACtCsBx255vfVnga9PEfwHXfWyyAaP8ZXw5RAbNo6nwrR8ehGbMbTnH63hMML65yLU2YoXoc4egtjWeee",
  "key27": "2kNoZKwmSHvDcnWxBPyv75hpeNotvqWAFMreJDtzT34sVEXDMwXf7HmXnvsSQmyTqF2UFMJhyXRVse6vwSnCLzgu",
  "key28": "32gTWxn5B5YJ78Z36emKz7z1aKjoD7Sv3W1b6aXyhoC4AxfeHK7HMvMkiAGpEeNZQ1TLKPigZme9j9GTCzb46LS8",
  "key29": "2ToLe2h1Tbr5CHQQ3S43kqWydFt6fofVR9eg9RTb2cUzauGQ2zJMtdkqxLucAqFzGeDn5KojcpsZBYjA2vwrHTcB",
  "key30": "6zRP4MTRK3exg79GecWCfq9MkGhfvML21n3as6b5YxU9mH6YsEgJCjgBJgpmUuzhQHYs59wf3LnJhPboZsGaNPS",
  "key31": "5ZGM97dEJKdVvBPizSoNZkWrhd6bYcZnSvN1RobybNt4PP94kJcRedzMhiVxvoh12XFxkL89f1QFVYdbQHRQTEX4",
  "key32": "38ubPALvAe6cCBEC5R3Jj9hjwnMWQvmSo3CcNx1mE2R5WHcp7AhDFh2T9HG1XopELcybKia22jrx3LQiFLD6Enuc",
  "key33": "2dZ5nFvhf6Yer4ZQLW7YvCiDnSmgdwPu5d5eGQwNGsLsdRt1Hq8MyxnKuLUXsVw3cXYvEcgGTAxPiucdRCXMgBVM",
  "key34": "2YhsE8d3AoGbmVxu3MHmXihyUZAnSSjMDLv32LefFNkYpYfqSEGw47QKquhrYCHySGEiEZwABxFWs83LmDQoBvzs",
  "key35": "4Lb9EG9bamuKszoywvkE9vskSr5zhDUMzruvQ1GB6557Py9S1dJZ73Viwtd1cZ13QFa3T3FmThT48FcW69oqp1Ft",
  "key36": "65HYpxuhwAwJX9Ppom6VyS3tnscMxywcj4XszTuJd6A3uwV8yuTgKFQCWPUuwgsY5L9JB51SxfEUYjexf4XNXhYv",
  "key37": "2s4n6WPNoq4Wo2VvF63pcKWdRDoBJqK6xQ8gMAdymipNZ8WJko5uDAMqMKidWCbFG1AwAZR41FywbhT3BVgMr2Cu",
  "key38": "2qJ2twFFx83zoKkpX57uskMpqmdSeGAJc6AULP89VUkEz3GjASy1kuCd7AQxrLbgeWMRfYwVjkXHb1pvKpyLDfu4",
  "key39": "8UACiG8JRD8NzB64gWy7nrksyQvSns1opZwAoRyKR7wwnGULchhsEzfNvgQ1cAYAEqX8zJkHAaLgRZ3odS4NWgy",
  "key40": "9wDgFFByM6YhUSDisUTLDNrxuBFkxSpcCLY4VFvsQRm22PhTb523Jx3ANDd7rG3VTTK4BUHsAVPYzyhNfqqbw8t",
  "key41": "2Ndv6jKUnWPpMTFiDTfff4XqVqQ5YyKk9EepSA7WfEsR7EyjUg7T2C8TfJ4Xfd2yGPQMCs1zgRsU3yV9Sxc4HB7U",
  "key42": "2VGUjaBiHeyB5QZKxpAk5ZQxvSzYXn4KLkxMC4QFW4npk96RroGXdxcgC92BkqeKwPwMRbC2zG3zhbg2V5X7uuuj",
  "key43": "5evDp36tfnsenpTNfFtaighXEfwh7dzLZUqADzzt8vALZi9HRjzyyKGYpdnoqB9Mst137uBvJATvbzvnLNXBCNfF",
  "key44": "5syCr6dVF1HjvznhQjBX8cdSrLpCtjL9L2kxtsm8TUGW32oLxrQ36XVGAduqzANqY2um347hWhAaytKkmtxz8WRf",
  "key45": "2sijHCgUqvksCNZysJnCmf5Yb4oZ8w6tbKrUikYtDJZGZU6aSQt1bvu2Kx21r83aCy5V8s2oUwiJ1Zxx6DPWuDbN",
  "key46": "5h95JVRyAHtk6o8pjhuCDjbjP2YbsYK734HmGr9K5RyETAxoGeGSe9Hmy58eSdzzZhTvezBaa31FGdTY439u8DLg"
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
