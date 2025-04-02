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
    "5Jht38kioCvJqw9Dm1Mxn8uy2nGbckiE51UCpnCdtSezGDxfAaY1UF917TaFC1d62atr4LH33ypJbsMbQo7hBQRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iknaARGF83AamemTUsL2Q9Wz2dvDHzoGAB1uci2SU6QGnbJWR1DzdtLzmstRGMnWGZnmHQiUE3oDq6UZxoi1EDX",
  "key1": "2vtZY3GfaDDhegkQKkEE3dvDxcGLXsb7sVARxC6nGuMX8tQBpujEzxxgAJVaPEyJrq7dLGZ1kZSCmsq3wCp6xcba",
  "key2": "4e1Um58iAa4CFihUnYiJb29YCTUT9FV2atGY8YKnBqp1F9JffzVWrpEdX8ZUtKNdShbRw3kMyi1DAoWAcsMYxnVf",
  "key3": "3rg7Cs4fLLXuMCG2s8EjzUgMtgV2rrSRxy42XAucKa7zen2bWVWQbhSpRYDSttpH8M8HqM4qeSPFjpMFo8qyZWC5",
  "key4": "46xzeuKy52Myq7WAntP35tNSqYM7WHRsy479jDWzVbHJVwzmmxJE9S2WcJu9N9WaedXbtBJVL8PQWatzndztAQWG",
  "key5": "313RwenggERkaiYy4HA5WNRjvbhvRMfkG6TGsVQo82f3M5TEw91RQNSg8Jvphkryxi6xLqHuuxPdvfYw4AY6fhaa",
  "key6": "42SRQSsZREAYMaiVfvQYBSkCRgsHTQU9jnm88pN5HzKSRLodpuGJdE5iCUrnDNxiGZRUqcFKer33xmPDL7EvHK7g",
  "key7": "kU4vC5V24RjBm9VLTa5C9ktGuBvADTD248NK8b28GSPDGxfWYv6Xb7jiUMuz9mxJD88tMSVU97pKXDKAD3tmFPB",
  "key8": "2fyZhDP3TGQTfoDCcnzrMKN8Ks9poehyT2BCXjbmXp8dMBWDmxFc4x9BcrogohQyjNPYeZHkZa6x9VbP8unsdend",
  "key9": "5MoJNw7kJpqw2CR68SqZXBu4TbZJjdC8D3ryURkxWX2QtKT7fskKMMnGvvswWFs6Qzh67P8uKE4DmUHxsg5mDfvV",
  "key10": "5yZPZvRxRKrTDTyuDZYQQQiQ1ZyYwZ2iYvQWkSfVjEShUnjhuLsKZfZjDnF3DYUKx8A4zy6Uw58TVeJAPyxrP6NG",
  "key11": "2jGF89tUrB8MAKvaJNSUnq4bJK7tnvgVnfFcJECK78cbKyy7VCKa8GUctrwycJYngJ1FskNJ9chQksMxtJxVsbgG",
  "key12": "4UMEgnCCmxwUWSqu7exNsJQfyDkeAgReLWz8iigSfBtAxd6kcH4T74vqczP8rBRpgdBKicD1cFSmmSL5MNAX8Gyv",
  "key13": "3q6Sys99cyVchMahP48BwpTATSUdr8ztnzAycu7MTiGjCgztaEAeqjDf323D4uPyYnAH7ZqNNnboifkRoY1CC2CJ",
  "key14": "5KvDq7ih9Lt88UPdmEpJHEPSTZxqLnJJ8psd74bhgfS6Zmcws13WtAYcmRthqTjbCRYzESQpZ97NYWXGzw7uem2r",
  "key15": "2R8y4SEENqy7MfiQsfAcWh23Havx11cmPAD3JNRqmQ9Y18H95ttV4Yxuso82LbtEdB96X7XHGQZUfRNb6KhNJbK",
  "key16": "2LQcZQdA5VoHee5aCXHdkDkfqkBwBSSi9L3nKy1xhQELM2SojKoRr2NMV962CZygJbGk8KNz5oB9GJenoKD4MUd9",
  "key17": "5ZHrkeWKJ8oiPVerDDx6PAihTEe1vPBndZbivAH86mGit3P4id1kPkWxCkgDKXg2uwpemvV4dPJf6yw5ADVtzCZu",
  "key18": "4t8QuhQ37458ENT8hBWoukeHvER4Nd4seQCFii7ypBL4z9jDU6RTxvViDPspopFma5MMJsBvp5mDT21LuLGaveic",
  "key19": "64uaYDGvnS1udposDRS4Pn83mnCajUCfsof8tthxwjtmvcALp5vai8AQriSyxBvUe6irsgZsbewPb91J9ra9uG3k",
  "key20": "4nbvwJe6QPdHdVk9m6uYHtMjq42duYujUAuHTbyRSH7wG5G54ssWTUyN57AZiF43bi5mxuQuyg77ZmuwVtveQPVM",
  "key21": "44kC1nWVpFG3iEMycbEjmFgMPJjwMUNgZtktYSiSSfha1caXbuovvMk5wWPea1oEWdeHLkbNtq9dMmULTzKM4G7L",
  "key22": "zdiWYzEou1BVe8XetxtE7rwfzqVMmnF5V9QsxyXsZh2MLgypogR8BMPfHTQ5fnPTWEfEQpR1JD7ZPZrS5g4UKvT",
  "key23": "5hrmMWkWCjGyDaL1U9RH1Gh4xTPfv5eEjy39HSYCmGt2bzCcj8outRQMwjiAMqxySqS4PCC4XxTJxuKUq1aBbCzV",
  "key24": "5dcGu4CNwzVuEZ3PGtpw1PwnfGVwv5GjE67BsGAZWz9Wp5Jdj6FfTQQuxJFWzDamdF1nAhg1fnAqMn4sFVH49GpF",
  "key25": "5cr14W3PbsHDHMCyH4E1D2cmygXwUktGTUo1yYrZbxo74YS6N74hYCjW3ZUFz8VKEMwxCQ3kcCrhrz4gxvmXUBQB",
  "key26": "4RiD2fCxkSuBW5iGqszSNKXUitqGaGAkT2925YJEBPWBUSYtoY6c6dGVgUkH5nvjvu6KyRDD9Jx726d9HMyNLefJ",
  "key27": "4Rzu8FUSe7RQkeYuyqetj9z5N2ZPg4LfZwVEjtDPBPuT93xs73qXAeoqUpQ296LJKgefx496uLaG7vrqgZpRwutZ",
  "key28": "3p1UWwjEbzcmg7AmkXkb75G7Bgvokwyv7SmU1xEUKJUVeVxHK4K6aQgD8rgG8MPq3paQqNVXix9v2vwt9ZhdRzNJ",
  "key29": "oCUq3p3MS2tNJLmHfGQezbq1MknY7PvncDvGvAoZYzEtta2A5w6ERjTHBKScnqDfSxrd5967fikJtCnuHT7bdiv",
  "key30": "37UtWCy5qibppfK4BqxSfM8xtXFSSFdR8b7B5zXyDG6vBYEjnEhLobCL3xqzNQiMvVoj7nJznguoJxk2ukycAMPt",
  "key31": "262imqKMaDcP6J2beoAsx42UhmLeoVaZK4cvYoFvwgGxay5rWkeD2cnTWaqGyRgR8yMW5BsaKuvNGWaHz5HeyydT",
  "key32": "5Mve1XxxBjodS9oGxLeubiMixQJBf2vbLDKrftWtpLYsKSyrSiQ2PtGvHBuPWDefzY4GhMcxygWmpABeQoSen67j",
  "key33": "3KCCKbmFTpLmuVkiftczqxViw2UmETJtkdqQrndMz586YSEjBZ8xnKFRkijPehsS9X4WgeZWP2Vy143gyB1QC3WT",
  "key34": "5g6trMjtmCH4Q9j4Xy3eE3m45AoSzrFkmi2Zf3q1CwAoyNciYL1rcmZ98bhnCB8B1SqMiwfeVqSbRrEYuEhjJ7z5",
  "key35": "4aNqAm7M8KZmN56PbX5bjZjvz9S9zAJ1N1NR5czBMvgLHF4bUNgePcn1oFXPRtrTiBoEjJND2Em8RFedge1DZP94",
  "key36": "5mDhMxccKxVjtmGXXkHTKi9gbV5ug4p24wAu9Cf6gcoXc1q5WxahsJC1uWU7VjP6GyCShhzCtuSN8fMwLqrZEdFn",
  "key37": "4SBCx2qgHkQwmxJmcRF91tbrLEf6BvyQFZnZxWYUCTZ4XeCxEmv7mJ7pb27N5QE7Jxk4U3TsRtTo7emRu8NbRTno",
  "key38": "2kg7Xesw6jydXSvJMc4CJ3biQk6Rv5uXcm4HhwiArZmBZPGQUeJcL3rRNkE89MFXf96Tkn5rbUr7CADUcrgpVKUf",
  "key39": "2Y6rfGv7f3uaYhiY4Uqk8152T33ayeEDgYivRdcrdFStiSDGTTVg3F85vF1PvGtooUTd8TQjFRa9qWRoKaTteVFP",
  "key40": "5sR17AKmj7iwGTTagwzTCMyGjzPPy2F5JZJfVb9XpYaUyH55vrPPhPEYVMZefrWnsr7m38mhTfC7ZRHyeaPBRA3w",
  "key41": "2roRAQ2cXGGaGie5K47CXtFeeqLvvRbRg9t4Civ6VJDugruhVQTJGtNFeJibSfBwpjzyY3VrPPXKcge1TkzjWwHa",
  "key42": "21pXEYKQcvD17aKvkdXmaRsYWy29VBzYsrgubD4zxqUgyxW3Doi8FvirT2benwQWm4gGp8xYdnyY4BcdSszyCDeE",
  "key43": "3c8xhwTfCY4qA75k5gD693MYxyr2Dv4YAgSZBkkRrac7rThM1dpqe872jGoeNA9xJSsGyWxQM8nmmifsDcumU2Te"
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
