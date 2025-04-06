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
    "Hf9FkeTLFtHriSEnrDzTaQ1v6bFAF3yyZGjUiuGkygHdampcm9G3cRva2o3Y4VZsVUqHjMrvCzHQrmbVZbDHngZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rYtKRem3iSwfep4wscuWWgzaYh5c6PGnrnjeuroxdL8tsCkWmiRH5N9NN67NfJNw1khGZmmuTCSbU7q9x8mgEvC",
  "key1": "3gPsYM9SxXNEbJoWh9vn4r4XPDphhtQ8cE1atUTgDAAeCZ6zMS6rBahxBExk8xSgD49q7hUVbQpFxQaZrizdYF9G",
  "key2": "UsUZ2xYBC5bpCMkAheSKe48iG4c45uXRwR5rh9AshAmB83zUc4cD1oGvzrqCGQk9HcXi14o2JCmuLSoS22S2ntj",
  "key3": "2PNDf5bdCkTQKY44jEJVWiVpSCU3anzwnJWrjtVEiePoCSiAzSy7TKEgdGYRg9ZjeK6kerTE4dajtfZY2DeoSvnY",
  "key4": "2qKKSfwrLuQNH4bi56eETu1PVzsz19bTk5tKG2F4QWSPUK7iwNcN5dRTwTetWqMM61TNNNoGB8bi6Bz7ZfBXpJqr",
  "key5": "23tn4sgfr8HeqZz1ffMxc8YiJTjcWtD6a1kMdkjEjZxVfXsXQWqrPWuWXYGdPss6xg2ghBxgFpENKbHMHEAsEb9r",
  "key6": "34sspukxvnUeRX9RJ3DTVkVBgEFz19sQiZF6U9gfrXfqbtJkcFCM19b3H86PUB78uprEfg6HJgAWXiXVwNCjniuq",
  "key7": "3TtudifGvJZpCPqDNVzg3FRcntKBtsWDnqvhLtPtYwiwZJGn6ZeuMFn3Ai951QcCdsGZSa6QXTNMsj31rmfbQ1DT",
  "key8": "3844mvctXB2nmDn5KBRyTvfzzrgLRpZsP3fpbxyo1wT74Z3BNrXq9WvM9rnBTCA1qvo43xPAeiAWBiuiRXeBP1P",
  "key9": "58HCnqKCAxiDCiXdEtcuPP7ge47YNfkSydM9nZfhNicrYZQ66dJXgm3vXtThPB2aG88KQzT3fKUtjdhQEacpUGVw",
  "key10": "3L9VdcxmgTWWjDFs6JTYBqJVjxSteuucnWyxtfwLYE8RaVTsXPTgsMLvTuqJ7qBgjwuTXZi46o64M9Tao15mVQzH",
  "key11": "4tqLzuH7EqQxZhUAtBxJnqCwafuHPpXz5j1Zp7Vy4ENUDA5cozkc3dNczCULWyDyrs25zvZ5XVqvtbbGaYn6Gu1D",
  "key12": "whmpzbc7hswh17Xx7eLi3YAFsEo3E72BYeVuJZ7EsHg2zrQB88voBYXZaGycG3JUjixSkGp6WD4sRPXf8861ksv",
  "key13": "4JPLWBdL7Q63H3TZcvji2coMaMNt28Q4osL2JXXUfy7mBj1d9XbZ7rES6Q3teQRkkGymPonPYc2tos1JfTHTMU51",
  "key14": "4Z3W7MmLaQucaex3MogGQeEbn8dNKxuNtYsTXqGtwuArNNxEWdAXjo6syz1yFBfeg6gx4wd664k1BUf9tMiJBepn",
  "key15": "5tGYYF9AmqFZu3tFxmg2Exdqw288t61R5H5jrxf1R7YmW7y7bH1HonDK7uzrHV7NsTaxH8v5Kbh5m6snZRUD3AJx",
  "key16": "2Q9byqhzRhceaNNDTDe3YDDfd76LXVgjGVv4pU6jahPKarJx6GjSq1315MRDrCZsFBKjRxgKNUo95Yf82eHgjQK3",
  "key17": "3CiNZboLv6MPHt17jzbEhyBByjF8N6qX48m3DigxkC2gZ9smdF6Muq6fZUK2PvNDbSxvfV9kU9XoP4BPY6FpXVoS",
  "key18": "3UWZJtYyP6x47Banjs8xus3bKQqGtbdAbcX5tPnxUFwrUSFXHc39xLN1Awh6T2nfukhqW7RwncLJiEgfRCRSw55F",
  "key19": "xWThEJgj6tbXruyUUzFc5urAXasBm94XVWvkG6LTomu5NJXVBAwBEtpiM1kxWdZ9hJovw9NwuVCBL4jRcxv5R6S",
  "key20": "5CkMcsGc7W7XJDzs44QyQczpA1hGWykbZ4TGPwYaaDSXSNhx2cfwf2zu9hCjrS7JJHVYarXewMzMsoxtqEUDcih5",
  "key21": "2xqpFvvESMz2YuskLn3P522EShXiqhqmyuqD1aJEnvdFdHYG6hwr7wX8fpYgfX9D45PsRrnnrbxoJ1t1DPyiR7rp",
  "key22": "3UUb1CJDnWPUd9gz9tg6Xk4tqR4rcLu8AiVmDmXwhN4GSV3CXqNUqBFmNH9HjKeXGxmjfiJTkKydwjigyy4Gt3qD",
  "key23": "4911xVAEnDmpHY1DFWgsoMME98dCJbJNXd1CmrdQYfv8mzPqLDDWJAaomtzjLN8QbcAThPsC5daezUZRURK2ZXk1",
  "key24": "qGwBGKpxTdcdEvqeJnTSrrFr5ZXmnyMr3w7Y7u6cHWqGEYQr5nVCSYN4DKi4jDt5GGrfi7uGAdRNUEGxjMr3TAK",
  "key25": "4bf8tUH1o6de7RnxuNDEn7xq6GP8jfmqzMt2KGfrKYxTiNm2TFATPXSLR82HJpgi8ZQcxfH7nWrNt1w6TgZ7KLvZ",
  "key26": "3eVFmXj53FDneJNAY3qh69MbtDMLeSiEx7CcuWuyw71nbmUPqU5GNeFy54QnYMNcqgARhFXo1Hs8BXTiuv86P9JX",
  "key27": "5SbMzCHuShA4jYrXZX2LHFcfj1iAdHJ2dM2KN9WMrWfY8pHeiGfwvxg1AVYkZNZxLnWJD4FhWm5AGpRvMHgNCV8H",
  "key28": "4u7qiNk82Xw191ygXrQMQ5WkiXwMsWRvrZvbUmCdWFxCinxi41nXR8EKo1SNCZacnsWFVg5A78NXwCG3HupPXjRk",
  "key29": "4uemRfdqnKnJYJZxPaecz2a2JDSSdB9TDV2Yp8BSAwe4TCdAQ6bmb3sGg85Qhy39YJVELB87dnhNJmuuuxGt2W9b",
  "key30": "2i8P6abBpFERFu8kaYt5hNrtFGvKK6Rqpw6wumce3rS81hto7PASCRAEMwon7U9CBmpWiE5rg3JRc1GayQm2fULr",
  "key31": "5WYr8V6SxM5mpmmDQGjGTsuyERd6CHGwZnvupinHC971FXgq2HyEGquCKZYqZEHtLCB1E1HXSUxUYiPrFJhVA3cB",
  "key32": "4y3L4j1vvDH5BvfDroZx3VFgxQy5FUMXUmyjFfSX1GSgLC3pfqb33BYRAzD3TtVKL81B9Kg941w5zoFPMrXrwJQ6",
  "key33": "4L94EqtH8X7PmacSzuBrwBfypCnxaPRAYVtdJkoqqPXYDD4YR3ZkxPy22wibh1zLjpGM4hHxiJvRwrSvLAyTw6Dy",
  "key34": "4RtePMSfMozVydoNJE8FFC4caygNEQWfuokJN64dQKFQxZzDfqA3wLdgZyFX1tMPEoYE35YZX64XzQTZixmXzVvw",
  "key35": "3Y79k3qUrZRCbJaisKwZh5KsaMgfBvR9RpgpPLErktvF4bZt1UJ9TQwjRdXDpRUvdF3gT4Sy1Yt38QnZV1o7HzGx",
  "key36": "57nfB2RAdCWXYyPtiXrRfnaQEfPLZLeR7r2fa7GnbDnw5AyPJf1MewULbNC8PfkU96QdqW9SizMCAxjsrB8HqbJ1",
  "key37": "5Rv2PWdpsAa7QLFSAgh1axntcfKqwwyCyyMtDVpq6gtgrNEDYjoSQJSN3z1bsr46Q7oyT5xUVCisaC8hUod7yKVv"
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
