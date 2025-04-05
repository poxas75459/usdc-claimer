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
    "27qDstqeZdfM4BszYE1aN3xQj6corLvA1XdwJ3VWfD8KEGEHAq81qyFpAGxRhMW2F6Sp9Aki8brmVdyyLBKLq1ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6uUHrXegcDbZAhaqQ3dSatfNQvcziv3KXAV3mFJWbd6uynr1ELpXReJHrheTiU2iomKrb34bv7vLbQit6fXunx",
  "key1": "5p9ba6efS8cw6wctuCPmeCnTJEEJMmMokWcFyhx22JtpevbDSR1ToC4wTMqQ28Rxq55qZabZXSwbErxCF29UoJHw",
  "key2": "2GkmWHmYvGtbhvqUC759Jbtz88WGPRmQDde5jxMFLLN3Tsqp1Ngh1tCnK7ZWZhXjFtpSa32dqNpFRyjhn1a71qJK",
  "key3": "5NGqwBNYnoy15WgJ5YtVhR9kdhJT6aoTZD1e61nWMxMWgf7GMn4res1Cc7sA1bEs7xnkTKta3q6KdydCudrjiBsj",
  "key4": "5widrPMap9Yysx11gLwstR471s29xygtA1XeBobgto7k8ddra4Nt9VmQdaKYe9myiBr87DMwjwLMMEWo4M8MCNXH",
  "key5": "5XnUogwETBb7GbjLbFZrVndF3ax8N2ivM69X1hqC9pUvaB4y6tZLSmt7o1UxbfeFpecXgk1LZDuK8dCmK2cM5VSw",
  "key6": "61vkwFd3QLcAYsMuYU2ayfsjFZdoe2qfugEibaCbzFx6gaTtSP6WREhyb6eNSXpWFxubZUb8QadqojVW4vFHZ6nc",
  "key7": "2YuecbJg752vNoho1YzHmBQegVEFX5dcMjt4FWXBSrVjrAqhg5bhZzFrRaJSGbCwUv58jwTjnnCCqK5rdoekYZbh",
  "key8": "3FQAaPYMHAiMcRo9EnAz6HEFKLe1KARhHaaMNZdWA6WMhWNzBJiatrfAehqeZXy5MYyqyZjgFx6aeGq8nUVGKQxJ",
  "key9": "3VJ9WyDgH61Yg4Zq6dmpYuSinzBbPVGu97iSQ4dRDNYFQEdzzMh3EKQE7zgAHcDQx7ymh9oW6ShXzj2SJaaKvrPo",
  "key10": "5aC7o12R2xFRx5GgWi31uW9neHYaoArHkLtLDyLqm6nfG4kuEUMeirTmFYVzhZSZJ1EvzfZCfS9hnKMews2zYeLU",
  "key11": "3pb7DG4P7LhWhgArP4n2LGp5ERj7SYCAPtxTkHMzdTcs8ExBeLYdTd5DnzFtvTigSHu3PtGRtLuQSsYbKggq1j1R",
  "key12": "2RC2j5Gjee4oxGaSECWR1bT37MuLPvbU24AumWDirWBafqXGD6go48ro79bHfur4SXSb2zPb1P6sB8LFvokumLUJ",
  "key13": "5WDC2rVCCJ8WGzJ7m8ZCRBRWeS5THwTzPyQai7K4KEHS6rz3bMFti757L7KQgYxpVYYCntJemSgCBH7ahas76Dcd",
  "key14": "55K5sg43K9FMqwpeGqJqNkfqu2zMM95Uko2rwn2Zeri1bV3F2qNJnmu2eg5qByPhaThAuXJph2oKWkvZPtxmFbMM",
  "key15": "4PSEMyDAZXfhBbDZ3y4CnimU42Zoxhzom29ajpNLSV34rtZAqaDWxiZK2NVuLHJG16kutiHtxk8dB7yrEBF63goe",
  "key16": "3qS5RsVQ2agWvBuBpZ4tpFBV1Dk3MoAcFzBHVvrzMZPRJrCSuLk5zJrVZ1mzgNrU2oZMU1DEUzav3LNDMnTRLRT5",
  "key17": "46o8pVzzvFuxu85MJee1Aec9wahX2eyLcHtJn66Ka4xLm9mW5fzmyuVLscUhqFSjR1b2DtUTLCLFyCnwDwwHriq6",
  "key18": "67QTvSHNTudQp8d3bY5nS5Jb3ZuCMcexycaAZvVht2rJ8S2NGdhPgyyBHCpQiJztYqkDfnAYgUkQuUb6mtS7zatt",
  "key19": "8t7xXfHZL9Rna6dfEBAWPLzezV6AzQUN6CrsczdsYXWCzKzXB9X6njAzoxUdynqrxwAWhu4X8izyX3qotP7sVCH",
  "key20": "csUpT1h4Lms4js3Ky7NdDYoryLqqA8SCbdda27PSey7AV7RT7EaJgFEn34zjDSp43fKbWVax28SQvNiWoNPMvUW",
  "key21": "4FanFNKGt8vi8tPH9gAkgJHJzpQNEDR4kno3avGjjQcHndLaZNQkk8YZNrRU9TcLAqpiVaF1Wx5s5VNvt8cXs1b5",
  "key22": "2XxjhXtqG4Y3aAWGx7xE9bbAvdKBcSr7rDmhQKXXTFJ1aeXjrpdHxy9onBDPJ9Eqaoqu49xZTpV1oWoqb3JpB3NU",
  "key23": "45gPTupEQFLf4sZUutKADLpGYjWDrmauwqGC5mvNeG6QH1tVopFVRvqice81PMPQstHzGcRXJzgzQCoZiR8223nm",
  "key24": "upADiPKPT4ANU3oasPd6CBhgc658kDUaakUgxmzsJ8iv47jeWzRSiQ6uBUBcoZZyRcyYpyKaEDBVKVwgtnJmJCo",
  "key25": "5fjqLsefYZsYVMtAZnAMHXLptuJ8rqkBxREA2UQuVS9tdzmUSLwDQZStZaxbyZBS5gK9LCBfERpgFKxfBTY8eh6i",
  "key26": "4qspmDd6guDP1TLhVkUy8GVKsioTxAC6osoQwVkCmKfTtgVzXNvgKyiktK8Pz12YFNsDZhdJKomeRGYS18w9GkBW",
  "key27": "2KQao3MzS3mfrCjjf5CPtatU22pfQgeTEtPCM4LtKaeo3B9yeyYEK21cnk4nULsTmQueb7mjNzFv2nAJsHvtstak",
  "key28": "2G5t1o4xvMuoxXJULqvtY1DXCy6nAzsPYSdJJevqH4MDyZxn8hRJbsDDrwgDULyinC5hezV5FjeSeFB3ieLHifnV",
  "key29": "5fwKNhLrF5zshxAq4PkauAuLQdK9gBzdHmGwVjmGQ6UDN6pL6yo6Nm3YdffrKEwzLG4Xn3oWGxN4iBqm6P5eSvcP",
  "key30": "55jFVU4KZzsBF2MxYsRnEkJZm8MXFZcMfpoavwgtQQjnLQJduMpv7xd3aT7U1Sx5jJeJGNRXZ88VfxmYWN7Jw7Ei",
  "key31": "2fcRv8vC83qKaLeMkBnNzyfXC2bfygvGvGxsivRgT7gcTeeLGbt3KxVdFv3KLyJfbXEiNX8146H9p85kobspWhfE",
  "key32": "5ycT9oZ5SgaF1eukE69MWWEANjPDApsjWusrWbUCB5GcnToUuXx2qhgESKgr9emeWKM5yZz2gBSUVf1AUH6MfJpP",
  "key33": "2TofoADSwWrJd8oodwt7Xxe8V1LsZ61DBnZ8KrWTo5PHaAaMJNN3aWjd7kwjYwgx7e6uzQwQUdnhyojCjjR3WEAN",
  "key34": "3wwFZtgAkcFFYrUw4osmhcjFywBY2DWTZn7dFbqdJqE7CjatFzLTCvCrbNiBpCBkHdstrTMmYmD2Ekw1xrRLAMmi",
  "key35": "6138b9zeyKKcZeLNA7zkE9tzqN7SWbZ3g43UVfJNcrwiwud2qDTSTZAwELcypgWkyMQRAqBwoNAvPg6Hr3YaVH5g",
  "key36": "3RboSM5CWFjfGjn7MT1ePUpn3tT46f8X9CSNTJGTyQziNnENnTW8sfXih6uZwsw58fCnvpnNjEgoSFB7xxdqG5bY",
  "key37": "62WzKc7GHjYZ2VoZJrE3UPSgJUb2qFEUPELPjuPeAgzQkU2VRRFf8FZe7CHh2whMUnjLp7KYakA7G1qMfw8eqF1g",
  "key38": "45jfwngZqgiBQMi8NvL2qT5SaZUxYswpDQC2G8PWEbyMkYVrLpD59VTzPJZbRYsGabPMxrogKnx5AekaBhuQ4ec7",
  "key39": "5zxgkSZAUnkBxXBAKUXxjJq9GmMwicUb97RoJsG875Vc7taPWRedsboVCXM6jzsofZzTQzqJAaZ94E2yjKByYow3",
  "key40": "5n1dXKbFivX2gk7cUXR537Z3cS57sTAXAXG4gD661Z3FK8HEkDtrb9zgQdjmeeU5FexvxrX15HcTuQdcLEk4Yypn",
  "key41": "3Dp9xac5xxUWauyHsH9PoTFkz3yc9LWMJ1Fv6Qz4yW8XbvP8MkNVsT9cUpMtvfNnrScNQcQnVQPTMx4K1dhETDnY"
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
