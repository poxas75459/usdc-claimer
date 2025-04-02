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
    "3B6UBUCCgvFgXR9GaPHwQQuvbximfncDnrGhxRntgcjugS5P3jLTnBdqjCe91qCXCwqbaVKCtmnHZ6Hjcy7PeVsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UFWXzNN4K9xetrvmR6YkxiG95VqKHVaSxMxZqQaMgQk8PeSUgYnS3VkUwHqvRgKFzmPANUMaTUMbbR3CvUasxEK",
  "key1": "3DSmy7KJD7FsvHZMEPp561k5JHZfVgyXSFDmJvnhe3TMQHPebp9XRWLU1JLVMvSiB2fvqvx9Ex1wUNUdFnkowRyp",
  "key2": "3uNAfDfcM4Sa7gTVT8qz2S9iMqN8Xzr2Q2RfKkCgwjoXetf5Fj7U7DpiXXxLyytqsLeogLkQfvejcpTMMgJBphE6",
  "key3": "2KjBxpogmz3DUMcaSbVk7e6qZnJ42QC4JpkSGbPu1jc2D4eQCoo9fox4zLVDjZSPqGRXDrUKUaGKJH2fszqphpEM",
  "key4": "3jXSNVArtY8BFzVDskosT6ATG8PiEUNQAcEwYSghgKoY9aHXYbGyEgLiQjxwqPBTiRrUMF4FLBzQb42ByZV94pSD",
  "key5": "4V6LZAh9cwRuxbHhUFgZBdRyC9TQ6K8JFJSMSZsTCSFK7j8ouQTNkPtv9EC6Pn8BzHArnkycqctCKXEyC5wR4b7y",
  "key6": "5XtVXyeGHy3B59pR2GYcxV6Lhs1iPghfNxcwJouRnu1ZrPE9RbbGmDrDron4skEHHfYfTnU28f1Qoh81Loeo9pjh",
  "key7": "3ErMv887QdaDBfs2dxtrDpM6h1NPbLyqeHVwanzMN4XfmP1fDLRK7womXQmjpUmSe17kMoq3xXL9QhmmjfBPCkMG",
  "key8": "2dfHUEvsSYA924f7D8oUedJ4PdkYDjVA7uctEZz2ZAkhju47tFZYsQ9YaeDMmQF5poKUNhbAkDDPSYxf51wQSziN",
  "key9": "3Ja5GUZEZ7dpqBaMhSzTor7LV3TbKXT1n9WRzfnSNc4qjKv1wzexVaQiQBmUPMRaE4RJiMFYNUMNuHzfuq43aJPo",
  "key10": "fRXSrK4cXW3eSMg7EupjqQKAXYVbekNT3g3WTwBLkjQva7r4oGoG3LdQioUfbZ5txGomBMLzBBKoehXmtvUnFqe",
  "key11": "3M53CQznphNME11UR1LoTUQLuW38ksQmoB2Ypc9DNk3wgxN4bxHgvBcRAA45kRj6MRexSczMN34n2b8et5gsh3Ks",
  "key12": "g2FcxeSqoQi4G8cx1o2Tr3krSoK7RdMAsj8xiYsFvoVXiWrUYktyebBoSrLcH25usJQieBCvhYwD712yBiwurLQ",
  "key13": "5KfK2wb7KWxGuypj4zGJE1FKkW9MkEWKjYwAM1QWijyGgwdDWth1nGN8WQZRSVjwaBrK35eREbD8PZ38nBBMn753",
  "key14": "5bVhWm3t2phC5qx6vjo7A3auG6KmEQXtfUimkwihj84pbM1W1cRLME2iuvRrLuMbEfLT4N3Z7tVgxcXihGQTXnmv",
  "key15": "3w8j7HZn35oaTMyr6ymg6g62ksvcYpfFEYCCCff1UWS9HDLTFwdNqM6iQJ9QTLpANxRWpZxYjsqEgYof2Tye7ovB",
  "key16": "5UHP3DAQvgxD3fhFRn51bCaxR8rAJSFrdxt71EdotXFWiEUBFE7MBrx5WTo4BbVtZuFVtwCTv6H4sHfhtRLDVDtA",
  "key17": "j8EpVr5ZTTjXMdwDMtuUGf6hs41MqG2pu2vajQ7QDWckjLHUacuATbZFibRPDGdnS1TsH2zNKNCVHtya7L2Atwe",
  "key18": "sT9fVNEC3Cb9zF88MfrfvmupV3eLiGVBc91oTykoqJ9spTMsWa9x8PhHRUC5U2djsCT1QCUxDSvpajtESxfsm38",
  "key19": "3QAMf1UH67QZPbXfaMvH4B9ywDLU2ggYyjJZChjU5cnhGPiJarKnYieCegPV1fJmNPgbP36weXusP9qKT9LKUdfL",
  "key20": "4NY1P57vrH3Cr4PndSLQjGar5Su8wEdDQbo8gY9ZjzVfeu1rGj7xEshEWoZCjbBWHL9jHsMsmx6MBA77m6dNi2Gp",
  "key21": "VrEzmEtgk4Hymuufct434fA7qix4yCCzDKwiVDmbNqdcrhsZgcZoPJQGTBGhRVJDbFgvPkNT9mg8jdhVWGqBbMA",
  "key22": "3ZkJGKP3GG4m8KYxk3EsvcbvpMLrCAMZbRJm5WXGGggqKmaPD2uNu9Dmi65KbC6e5xSwh5M4iPuh8uezA2huXfGD",
  "key23": "67LEzGKGm7Vr3myDBTYiKPnmvikasjGyZRvqYBAASK152wdCFDoiJLRvEfymp1txXYSQgGzD2PuzcB5GyxWe4pYT",
  "key24": "3X6mCRVWj7ARec5tWUw5RahzTw2AHZw1VACAXrwB8TVp9Hco92rsd3u4KHmrUrKqu66Nxpbw1KsjUPYrA1HoqrcH",
  "key25": "5xi2yeFFZNsiaGrweBTGdt8ssTDQkroT6WP6VF3Sf7cqmZvUJAFrYJJSnwSM4axTZE83Muj4hKefANvbBMA3Rugn",
  "key26": "4ZrxKvARzPq8R1PctUcCJ1sV83yZemhk87NhQtD888S17gANtxnRnyTt42GG6ov9gCn3u24jiFhToCUwLXiJg46w",
  "key27": "3VigVAmSKEf5EfsiCnq6YaoKLUTBfu5PAHRVnihAYPA7Tef3pYDVQmNpj8H57NMfbp8DuUHK3RqogvirzpyaKDfx",
  "key28": "4fWC2svJVBbWTgPGi9WFNk3fm5NxCvWtiBbJF3Z2kJKaCgcUNs9AWE3dnE177m5jjrafXQry3RKWQtsrMTYYHVBH",
  "key29": "28qaKNqz6MWV7EAotiWYEMVwRHfyjZ5qKXoxPU7bh33ii4J8RoihPMXoVgaBNVyKP1MEQ84yRxzdQ7Axw1B5SZ6G",
  "key30": "3g6NX6dVmS38Uiz5oyBuNpFZZJYwpqAJh9tazJeZUj22qFCDHasLF9a2Nnr5k4NBLsrREay9wYZYbVzVHcrHhNQe",
  "key31": "4hUcbifoZar95Hgw7N5EDGVjUz8hKT9RUsvJxcbKz7FsSXok9o2G6BtBNFqJagm7dc6DazxvrsdNC3GPGus5Z81L",
  "key32": "2q7p34eetWTCjrNurdi8FHNjPUg1dhnTWNG4dsBE4D7mxDX31VEpnP4sPAAu7rU2Z9erFi6UFxyL7iuZAiYJq4jf"
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
