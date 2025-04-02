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
    "GX2fTEAMidCKJEXbQBUZseYGiJEhf9AyPcq1hQnLra7ESZKC4LzMhMU5o35MnMaqa8HhnMEiMiXpxirsm6Z16if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCHNearf9Vx6NMR3AT6XuUMgL6LAWmN1f8BjEx6wQ6AXqQnEaWFcpT7gxKmv2qLDVTLxXDLkk6wQ2ZcX7xomFAT",
  "key1": "3QQQqffAaCQmKNhix7spc67vdtgro52AtAgYFccNfwV38Xmt8wPzZhTyFgx2bsMYXAUTKyCKxKmyJpqUQHx5ZrDn",
  "key2": "2tUDG6vvX7hj5UsxoGtzgZRiJLAGb82sbqwhqGxead4B9iwbs266b51os8xFZkfLu188wJi1mWbPsU3mCCwPMNdA",
  "key3": "4XukjnrzEGDAKm5qHdi6ExnV5MNZC1z6Rfks19vVWMctCkEAKx6SVpvedzhKKGF6hnJbUoY6Fw6rMscsoh49Ms5h",
  "key4": "5xR2wc5nBTGrP4eiNjR7WHFzLRMnGbaKAypCK85Pd5m2HD8WsqaYqvYFWNvkB7h3kpWABHMYiwKU79yTmZzXCeqb",
  "key5": "3UsmEAupub58W9syPQF4gHiT32eXS1G82dmSQeTjfsHbLsDuuX4bUjmbVC2aGHEbfrviXNtezfU1hmUxcgVVXo4x",
  "key6": "9z1GG4nyZsL3GRv6bxrY6dst7gEWjEhTxMX3stsabu71ijCec1htfNxdz2va8oAW6f1uDMRZDjD5gNxDAU5BQmk",
  "key7": "3xShVzAFKdew3R5iSgxEo1L2dFSBCXwAVSrX8Sd9ABLaWsqTa6BAmoZxHSWCKFW9RpcS7xXCdbqTWzc4JqVibuAN",
  "key8": "53MunkEnjv6XdaRZxsZuBq6QLzdjR3X4vgDT2hVRqp21hK1JWb53XoMduWsYrxxVu7xUqC6fqm4ozXPBmWeSsGfR",
  "key9": "2mZ7mBiq2KTXBfJ64jeKKxFq1e2TGuKh2J96bYAbdMfiekWnYRv9tPmyE1Qqe9DPWgGMTboh82n7cdgZro6uC2aD",
  "key10": "3QsKd9rvb8sQjHBNQJt6uJ3qH611fam9PjeXU2H2GNtjh92kewWbJayJw2QTN8om4ShZErp5MTtUopcFU2gvuPhT",
  "key11": "5oh1wjXWJFbti4o7Yd57xDsP4Q8CEv64i7ZCvPHggah8VmwJukQh5rFb4GwsEP3e6CyyuxnEp9FkEaQRX2WPRsL7",
  "key12": "4QzRbgYvXaAehaCXmcuHQtaRkedHHtrozTuMrfJ6qHqMp4k8pnpn5cAh9qaveSa6wK2iu4BhTDzfunCi3Jnt8euV",
  "key13": "61enmd5i2KMa7DT7RToACMLAUh7FbSXLvYzoQ9N8BQTwtJzLJEm7UkdpDfNL2NAvTtczhXsBtpZhvdzrzqwgHn3S",
  "key14": "4TKSKEcuDV7JNM1tSY5y9yHxRvdWadBDedAMAhbx5HJsx9zf4PcRPyT5tv43B44LHcEx1rgrriwFU2N6KpsZZ626",
  "key15": "3XyHWLeNerWcLannM3JUA9nRvVHRhqoncoYvu8rzRaEhxw1XaBRKEP1Y13DpPkwv7akmeJZUKwFwUMXG1xsy7sjR",
  "key16": "yHtQhj69JkCgHUk43jJcfPPRxrznpindqrVL3JUfm7VDfukXv2f3heo4voLNVNjbMQVGmiH9fs78eCW36sVCpLA",
  "key17": "RhYPjKa4UYfVYnqMmusvaHEL8Xwfnwbmxw1ZUykGXvZDD2PyWhwJaRjtpuNksMQTQaLCv7RAfcbxxofk7nV4ASv",
  "key18": "4XmaTLt1fd4CeeJtLEjHQ9DEvHjRXMJgy1UU9Smo319BXr91YdT7YjKgT9Q514o5XnZHrrCyeQvymEdv8CpYqGbm",
  "key19": "3oSj7Wtwi17h7QdR3XDAEx7NHkWFn4HXFLHmmAhuGwhDzwLFPnhDVHxFoUCAnyM6TRKWecgv1EN7yAwjgRMqnVkz",
  "key20": "FQhGubs4VsdP9R6R1KFYpyf3eo8jZAkqykNYG9mm9AKsP2DkTkeKUamdaEzQLwqiGJrPFkQDnTDJK5JZQGokTsy",
  "key21": "MpR8xTkDD6U7AUga8G1H4kTsMrQhetZewaD4kgRxtyzofQWmK4kqUhoVbymK1BB1QTifDsYpef11MrcxJTGQAK4",
  "key22": "fzvzZ7Ft58EiwZcVtwpsH9L73CrWtYfwVFxMQRueNVHSC6dmU7vvzebP83LUWzh9F2RwWpSwMZnQ4keh6Bcx7oP",
  "key23": "573RihA6k6J4jB9yMrnargszxvDqo1uGvydMEYkK2CddAyZC552w5VHa1yeJtH4du7HiuyPSABdeJpvvh4tVosDY",
  "key24": "gMHYHdvkBqcdKL2AYLVXhPmd57VKw4KfNru1s9kTaY7EsHRYVcs5h6sdZd7autBpxSfVXfHEjcRvedBUQASNLoY",
  "key25": "duMQsKYT6RJZoe9VqcrVd6heukRre4JRGwsyPaVqpvPo1k79gRHgBxT9fTd9hrjY1z3dxD35UPRFKuYqXoq3Tcg",
  "key26": "5CT9MZTaGfUqj1sSS3RTdsbtqurcEfNn76FWfnxiEsUB52VNvYgWUwGkeA3DGQpPxs8dELAy5GVBZYLCSPCeCnNB",
  "key27": "3Gj9vBm3XC5eVDkjPJTnWFZakB6cKR353J1LJkebkpGGqXpmGcZdpsPiqruzDjxsNbrGXHqG6chRXCcgj2VH5pKM",
  "key28": "4NDUEfEEKr8C7KsiZy7gEVfjw13L6TPWZizvtWhzgfAmPbLnLdu2AzspJViKufDSPHdoet4x1tiVDKVRr52kTXeQ",
  "key29": "5nYdc9Zri3TfwVLggP9h1UCTub7bBH83QyBB5urdSiBWFxruQrdi5haV2PwFh5NkrH1XMm6BKd67kGY42rH28jzs",
  "key30": "3xt4FKcZW5ihgF6tmZzD68fZwTWgDJ2jVuXZW9VYTEnV2coe8PonKPMSuEeJRQV9azj41VXk2eTsjermynJghRdm",
  "key31": "Ug17WJB8NPE8SvH8BcNzsBcXNzXxhskDLeofGxdfPLw4spbatnThCv4gXVK1Bpsov7aa2WMEUQLHBy44D7SZz5U",
  "key32": "5JBWAHQrV3eLHpYqqmp6sHLybVTfb8ND3yYkGzce4T6RgexJfab5Ve5KgiwjwNRkQHDA8D6977wi82muZuW28916",
  "key33": "2iLvkvw33CdDQyPhZzGiPjam2bMbaj15F1quhDtnSQJBteFRoVa3KGPHayVtL2ceJ5J3S4dffYAgpJkTRqQL8T2F",
  "key34": "3UyBVTqxrr2uJxfraeG7wr8CJpBiEGQbqyZfoo5B1eoxpigVV1CaAWhefx6YCzs8CCzf1kcRmHruptu5NqNE6fNM",
  "key35": "3ukViZQjuNnDuyf85s8WgopzTohWZcoaDwNm4KkmDMQPjzXKBH76BJUPa2jfLRAYazYEaG25egtuVCH73ZxheqA2",
  "key36": "2T98vJefXr8yTBzH87qYPsDXPXWhAgTH7wrqaur4wpVWUPskiGELLvmKp6rNSBJ1gsd767dMAkbDMqwPh9JwuEYE",
  "key37": "4X627vcg2jtoRhNvKmwZ6S3d9nrBMdPspkJowaYtpCJib8TNWG4m6tzZPCszZ5kJGa6ZGvVbZAumpNi9f2L8vaGt",
  "key38": "2amGHvAWvnfa4PtNGEX6sbCKQxcA1jBcFrpfE5kb5NZuQ9BGCiqCdQ5wc48njGN4CN9BPSZM9DSstAQtdfJwqiSB",
  "key39": "2NxEafWBw8jam5CjSB5RAkCQ5bBUYNkAMdfoaUsVwJhZzrKFvYr6yhx6PmcnpnZ9r3dLtvkw29gYbGDRKNXArW59",
  "key40": "TxFCpGEQhzk2wkefz4aP4ubgC8gLKCq29ojB3pALBPmbQbmWZMNQGj5wjiRePN5V1GpXBfCGUB2zaQzo6SRQfQZ",
  "key41": "5coHS2zjyB1Hg6QhXXZfVceuDuXps54DnkHuiPRr2RPRHhK8CfJBSvhxrc47xmBqTNibN9ZkttagpavMx9QJcyGF",
  "key42": "WymQZSet7iqVFBRZxHDDd5T3LD4owuxkWEDqP6T4iKzf8B7HRnKijQEQY4onF7G9Evzh5Zt5RZuNaHarsvqtzWJ",
  "key43": "3HZ3wmQxqYT9xDAcSGQLf7ZUWi9pqg4Wgapq5PM9mUUWt8WhawCuKRQTKAhLtdB6rWCkvnyinsafvsRAueQapBzh"
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
