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
    "2vyGmX36VnrAN2caZbtF1qpFK6WvmEYVHL95qNQRG6SNMPBxbZyBRpc3FtkWPyXWCBnX5d1xYgnTX7fFTrLRhqSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzKo2J8mXTEC64NDfZSLdRqNNWibyVnRWZkTjCHGRW8mzcpCFnrkmHDAgTns6WjoQ22xJbfXFRnpZhTPzuYR5w5",
  "key1": "rVydZpn4zEdaudgFoG8iEq2hjPA4QGUmnytfAQ5GQMKBkbTSF7wvEALSyuAeaSkPrU6PRR7SRTzt6HbB4dMToqm",
  "key2": "4azxU6kBFFuBXux3G3654TjHrReZsNBAbR9QAe1Jcbyc4gio52MZNwHiNjexB8DUKZEH4sJDL3hnNf4BCNbPSXjV",
  "key3": "2uaLPbWDXBc2YS7Ke4SrbqSdVY61L83cTcFBUuak3e8PrNKgjsGauPh4i1dArRoMkMZXfMxoDWKpg3X32YvYN3cs",
  "key4": "5CEZ5EzL2r41aRhc9Fziiseh1wCe4gKgqjrJJnJP3j8AjkhbAAj5tJs6usZXvbEMj7nYbvE9TkEytweCcPcvw8Y1",
  "key5": "D9p9Bjb54VBAxJ5Wuan2Nx3EEvSoRVTxvi3RBPMWrqQG4HBDBKQMvLEcUKt3xWyteA8wSmLZmbrDsLxVYUv3Bnu",
  "key6": "ZiyR2v9tCHAKXPPT3spz4GQh4AA7hZ77rwdLEiHhjK2fRwnoiqsNNevEXH6NYqjfv5Zi5URLodeWCgBHcrsirni",
  "key7": "5eVMww68bnQ6mdzwWK6zFM88FUrvVyVT3nhDGs7NS4D6KDduVsE2geUqyUrxKGyFYkCd134yXqKyVyG2SmqPzMZe",
  "key8": "hTsDycCf9rAvBrYJEvP8jW2ysNrEv7dve2oo2XfXaqNuVumg9yTHW8TFVcBkCuCEWY8f81Uh5XHXTdN9VJhbxqi",
  "key9": "529ZDQT3Ja7TNRzrWqbywUjXMLfNiFoHsrL9CWiNJk6GuDif1H4ZYGL9ibwJHpucdVrNSdBNtJofpqPaH9X7q4cU",
  "key10": "3DiJ3SGg9KApgmNag5zg5QGT2cc1LLyoMHWq3vrYRV7xETCc1Q5wzLHiaj7aq8fgRPcYkWgeqscGAz67tKUgzcTf",
  "key11": "5jdNXisRUPp2sVZ4P7rJT85efJ7zz2DZFLqBJ9jFNPpFqWwMZVjcZgPoHWyTHnqMH1ziA4qYTK2sKxKbmQZp3zS1",
  "key12": "535XSuDbs7Fjr8HHcvVYcW78VFSpsV3iKDeWSP3HqLHnfqejR6N6ascfS6aR3jahcwAmDvcAPPcmzBLeLddYuqFn",
  "key13": "YoFjHHAsWmMdit8SYs5P9Wn8HTMxa9vxLK3pXSA3rYQsxSndxtFtoe6fLUVd1M68Zi7ySAYYHGEHAVa2CDNNpyf",
  "key14": "QfgUJ6iDTfrKax4CKHgDgGBEPLfGZkyAsxXa31oR47DtpR59J5w7rLTEbMJdEjDCmKZSwVuwbRMk1H7m8pDfU6C",
  "key15": "5KpyCGUvYw3pbjr27j83T4QRaVFmfb5DGLGXh2oWaHWF5pKU3JUYARTa4yXpmUyxuoxpcKHXAaqz2P32a5At2Bgi",
  "key16": "3pZ7dXernB2tM5rnD82TU1BFoUstBBoADo1GBkzWSRcdfEjEBH7mX7WHHBeScMkGnEMi5z2tGsvTXjqa9cBigEka",
  "key17": "5zKbLZrsyJTwMND7RagY4SbdjMB7gr1BCYP1uHY3BpDc9axNeVDfaHeH1g443RMjd4PF66i5HEfq2cgvBiCypqNR",
  "key18": "5P6vtQBq7eceXZnKxeSMFoGqnwPCGuQLvCiW8fW95qST5HLnxYuRRKqiSTwW4pH8wpvLyppCcYHGQj6vRFjkLNZj",
  "key19": "27MD8pDb7dipxyBuEPfT52x8SdwVFCBaRGobFgXjUSfGSrZzjCSziPW8KnzQ3ExKqW3w8ffrozfqxrQkMEgP8Vyr",
  "key20": "53bbHL3wcUQMHPhHwKuUyAJLzk2uF8G9ks73PJjzgrFci2ncvRjEforn8u6s8nrCuTop25Vm7RM7YcAoxAK787T8",
  "key21": "4chVLUrG1JqFbc2XviJ4vi88Uho7bPvJVHMECAUAWUwjAbTVYxj6WSAEb2h8Bztoy7wN1jLJt6b785BNJqC1hWFg",
  "key22": "2EpEBm2LahEvn3Dp1UKaPfYTXb6Ba95NjsfXBMPXLkz9owTXEgwurLdwLFHd3pL3amCqReC3FYvCBq1WxVoEA2fm",
  "key23": "2eQ74A79oRwCF1yd3WLwt5ZJ59ccCF1vDCZfWC9G3W7ifNPy5RnAnbvVxGnaEdxV5hChMt4BhU3M97c26zXSMhpc",
  "key24": "24exDBGVeuA9rTW2a2rDivAXjNPK5vyXdZLnwD5hrdoN4ipkW9TELrkNugXiMYnTvMoM8K8iyewe12HxEFVdhm3h",
  "key25": "5pFaDJwyDtLMQeVbyaz6VFaqYG9xuj6xtNDy8a9EKX6FR2vQg53UKXthyFdfhKWhXBfpbsV2FeLx37sEZPnyXMpn",
  "key26": "3AkK8nrvMbRjb3z8KNJnDgc2Dxkfg2Va5VEWP8YexRKrP9Bvut6BTwRySe1akmb494rvKWpxEKtkGRS6Ux3cqyry",
  "key27": "5Ygwq1eJmNsh9gSXQE4mxACtZxjAr7t1RDcdM4u91CKdaCjWVEsvDbenRrppTFNdFScykCSzxrcPiSxBLcTQJ6cd",
  "key28": "5wDBpqCkVGN3z3wvhniYEKxWmMUgZmr8z8rhtkrBWQ8WYmwzvo3gSJFJKRA2PpTNoZxrukttmJLx7znBGoG29GTv",
  "key29": "2ytt8bQpTf2K3x8yKJVtwKEqPU5VxmB3qtT8MYutvpbE4nix5dHQ2McB5YfNhNESPQVkmVrP85497tNRJQg8Cb15",
  "key30": "4dr6zB47XUywS7XgGuBDpRoCNLdKezLSwww2E3DaBoRepBZcEG3vN19h976FQsBSUjxTP9GmcR1DDgZdmWHFQ4Gh",
  "key31": "3FAtVdQYy4eWCPCAaAJ465FbqzUxwfj5nHdCRK5iqViSfBcpACHmPGAjeXHSDQzmzxX4npKvK8Wx94Fwts9nePNe",
  "key32": "2MKD4JA6PrShzT6NoFFdFAfzDsQfaEQDBxnMiM4z55RhCe1v74caqVUdzzGQHUr87ycLmwpwmFf4JmK4cqhirWCR",
  "key33": "3Y1XuVe4CGZrN4E6yTxY2AYHJZR4v6hHgBc8AB5T5YGuF9M9LrysTGM95tymCps41nFAyG2w33mVnA1ZX1FmzrXp",
  "key34": "4Neum1QDMZLXY9UK8zo99NT2KeuDJa1JGUH3UTLU2N5kFC8d6Gct5SwwnVBrKq21yiFMPHAmbe6a26vfB6nB6yxm",
  "key35": "fPRePC4JQR2WHcDoGrcnc53X8ScgQTtTKEyJjj6ozkwpVnYR4r6Ve2Rmvu5BpHGZKnFWUtVr5xbimKv5ukQ4oC6",
  "key36": "4J625sXUbNQu5Uuac3rFKtL1uuijjq1vDekZeUWJKiN5PQYRwhtzMpnWcfspz9CGGBqYVPriWkvzKP3FmwRuaRWY",
  "key37": "4T66naYudDKdUq5q49ipFaxsu5Mo18Ba5aFr7VqQksYEHkc8XmGYPYKNsnjEayGTHm5KGYPQhS61viiMqgwPPRSf",
  "key38": "3pCS4jitMMnCHriEfaRh7CKcMrfb8rcza4YrAe9eBjZWMmpsaJcTMiiyCXfgNpuJXSHJ1uxQ4Qyx4wSdM7vTdA6m",
  "key39": "5Ex26GdNiL9vT1u73LENSc76cNE9whm6ZMXSyNgk8hM6Xudzq6epoTBnp7hfPpWRiitH22NRn61nxHz9A2xCSpyj",
  "key40": "3ymDRm2JFYhvMEKcm5NT6aRfGJj4pjaY5b5pQmH6BZzbqENjD9oLgzYjubEhs2ox6M3FsVnXR4HL8xFFMdL6pRK",
  "key41": "TcRfA3kvTWRn6MLvn9JHkhFbxC8jnNo8tu2hDU6XLtVLSscbRyBLD7hQ6MtmnSoBEjYCE9xq95UAMd6fKvcj3pS",
  "key42": "j6uT652c1zfDbNTknjyPiZRVn41jskPbyyCnyzgxZ4imbdVMznZ6m7V5QwA3kEDeiPmMope6Wqm9qE761DeUpDc"
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
