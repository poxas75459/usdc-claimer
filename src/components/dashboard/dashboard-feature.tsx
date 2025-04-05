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
    "2BoxHnwNDv1xLnBFuqza3GT59Cj3DhnQ2ZDC3vxKqKWE5njjptv7dEGd3SgopW1xT9GBUav5noPv66SKzcEcGxPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJxCGeQmHDNNA4iCVAQotAjepaXJrofUmKvCZTBDnSw7AQ9osDWsEQ9TupjkebevPg4Bu8ERECp3jRdJkDb69qN",
  "key1": "5ifn8Kq1nAt7FLao3C1aKcJzKJ7CpHDPu7wyiev28phNYx94W1fHetX9QzBVc6LA7eHGZrXgHLogMpgKVidHEdjY",
  "key2": "4UMTnEC5SppREgzosjj1URRsPY28ncaPV6Ydu2EZoxdxfQGYi6TVBcqLHPFB9p2P4qz9c8sFysttEJ7U7fgiBGer",
  "key3": "44X351dpPsc4rWeGesbeNynZXH2NY6W7mNegrw6bBb2SUGNtMD3m4YVxhz6W9ZvBtaK9cN3JmnhB8gQGxvRq5XQH",
  "key4": "2mPUF6ojUVq2VV2u9Xv54trFqrjx5sqNrPipeAA789aDswyv9TgyC3xjj5x7qMcxWdWApZw8vS4mqS8mpBwUDzH7",
  "key5": "5PpDBQBPt3qXkcNkmMQJEMJE9oTBC83VfMaefd3JbzYAeP7MgmNcS8K6Hfw5eYC7GZATrnPtNN7SZA2CkfEF652W",
  "key6": "4X22cDGdvmhMdfNBcx4MCsDPDxsCQAPs67hTvQeuTJYs6skGHxDnfqW2am5Q8MDWbpuwNK71Gomj7qzumbZz76CN",
  "key7": "668dY8JB2AcNrneksqZ1e6BPvkBiRyXASi1QxnuUyFdrkY4oGJwy9vAASJwze33P88ekimKbspBgYcQY9Rk6rsud",
  "key8": "2TpAWbuwKD52ZGsWXGBGv8cywGvJ2S7SH576prSdMNEdatjNZUArKFqYK1zdZy1RRWriQSEmNwN3daQZQSHKNfXR",
  "key9": "4M14sjKyWotZH3dkiLfsKxpG5EF6U4XY8nYifc3JPsaYSTafGkm88eKEvzqCaVh6uZq2Nwcd17DadM6cgxbpzEXV",
  "key10": "45RXGABBuvx8cH4WqbVmCogmRjD25wmupJMZDyBs2Xi6Eqbv5NTWKvVJEbxtD4YtFLwsUfCHwuqdk8hWXTcQgLW8",
  "key11": "2aXf9F7o6rYWnFdsa5T3xtWvgnGTjfP3N9zKJyf2XCiHjkaUzaeRVFQUy7Px1MBP5DfFLwoFKPWzVwAnFbZ2KP4f",
  "key12": "43XUBDqJEtRbi87oXT9C1f2bFXADAFL9onS9qBbf6NY1PbVaDqwgrUXsHqW5H9fJytNxzJ4k2heAbeK7qmJ6R7WG",
  "key13": "23PLqXrUSmkA3a7fKu7vzpcQWSFrMVXvsqMXcWUhwev4dvV1KAFrzGKx8w8X5RNh45r8WBzk2cmqvCiAzNyLN3jB",
  "key14": "675JxBLUyMRavyR7y18zUFvSwZiRegQ4mXeMj8T6HHkHtVT2LZ93YZLDqsEeoYE6ZGFPiL2s4YQuk7wNNMQmusDX",
  "key15": "2545Ri6uXNpomSxeXMWDa72PFBv24jbQKgHuLBdHRzfCsxP7fNb4wMSn9oFEZ9bMDT4tfU3PVhwDGPTHiAYSQ4oN",
  "key16": "4nr8Z6Yr5MLvYAGmB5BSrLCaucsmJ2UUij9nu2V71ZJEmUUr1G5aLALZuc7Sppc5Fc4tBGTRpewJcffWTHrCmrsv",
  "key17": "AnSBNXBNXGuBKxAd9jrRmnxzkUbcWYLkPKKm217bJsZmFrtR4zgv7BFyCWf3hfGpWqg6kZBovNEZSJietm1JwrT",
  "key18": "5uAWFzKtFWujkiHNB8NSJrDKALAVkQfdchiv52YoLTq7M8RLRHXq34DgmcztwejUYEhxy6KSag3qY1Tj2C1e7BWL",
  "key19": "2TaFFv28PAcW4FbgsurNQAT8cVyfnScaY7XkBXYVggnUcpLnpouZW7ZmFdDZ6NH5LGxiTnj46JyZvSJbro4zy451",
  "key20": "daSSeybboGEnTdTRH8txBzhvd5wRArzTCWDxXz8yqkGiivznSRk4XHXwedeZCCWCtvQXZZGXhy1hne41R25Fb6S",
  "key21": "5SNTT6ewEJ6bGCNHEY3jxac8U7ye1aq156HneDGjgXxwFLV1yDaR4NFY8B58ay4y9QKrDgqRxiEmvd2gitoxpHVW",
  "key22": "5mwQCuXTSKdheEJpjt6ReF6cSb6Hp8fW3Dsdcx61HE48f6kzTzXa2mXgQpyfMFHZkZqoe4MThtNHFMT7vXAEmQ3G",
  "key23": "56oWdCDMFbCGTfCtNc5jboL7MyFJUdh3N8Dn8kyAFKuSUUqgmedpADp3GpmmWRpuSvVw3rd5kkVuDaY7QW1SDTc6",
  "key24": "MtRvJLC3MmWz7Ypy9LmcWZwAmEkAyBdP8H73Pp86MFzd1AqpK8h3HrJQkJRNDEFh2D1HBUMzg1728LJ4uPKFUZ3",
  "key25": "2PAxx54Wxn6jdbvtVNM9EqJw8cnWUvzSCT15416H3jKGdjEcZ1ccoL6bCcZ8oWJTAem237rp8sN4KKnAJqHCgRiB",
  "key26": "tghNKDG21VZQNSVVQMWrDmZSt5RdrDoCkx8WP5cSL1GS46sJVYD1CrhwUxUBJJdGvSWv3kWCAicriDxCG8pCcYY",
  "key27": "5VALb2EL4CBni65wjgxKhQioGxFbqvoQaeGyy6D72cnJX57mRiaNjv37Nd19fVxyafgH2jCaqBtCXYvoFM4kcnyk",
  "key28": "4BucXmHWtRKnZFTGy2sMb29c63tdEYevDVjEBFZDuekHN2K9C4TngDpKMDiJ7eYgWDkNFaFmxTRBEBqDNbpXygax",
  "key29": "3GGFe5JVfg57LLf9yy7rBjAJJEZ77sgWLFBNo8LgYCDcMHrCRYbQKc6zanRLcJBMEctrrdygptEfvDvCLp6C2mge",
  "key30": "hRfFrhVpAmyK2HhTx9Sj9jMobptLguAKHs9oXZ3jLp7soMBkXUjCXcp7cxBroEVKrMW3TNmLCyJgqHuSdTg8w8Q",
  "key31": "5TQBkkVNeLNGkbZnrQJn2o58roMR7n1rXQ9PmqcPcDBJEf5hmTtTjfMBSfDpn1GpHW7LjV1pFCULSgGFPbwhz3Tq",
  "key32": "5yqepB1cvibZGRGZQyB1a3ofrEuZyDoPT5LeDsWyr1EQqdq8gvUaBwLMMqCpoo5UqNGaUnQjX94wn9b6MxJqrhnN",
  "key33": "3oMDciKRBT4mgtmDGijGxz1KRH33n1tzvDWLTemn4McV7ZD1rVXFR9JU5dt5ohJ2qoShCNTBT4TBQc49NimnvmC8",
  "key34": "3kiN5jSboLge1nn2WhmoZCycgidnSAfeWMtLpqqB8hoz2cy2N4gKXydQRTwydqTYE824g63mhXfiDyLHAQ52B6nS",
  "key35": "4NKQn482wwJRh4M6ggVqGeLJaPbkPaGBNjQywRzPscfDoi1bcBrAod5XkAAsaEyGzhi8FqpE9rVQm681116ZF6k",
  "key36": "2RcNMJEVv3t7tpBEBgEEiT8SqYfonxMffCtuKZ43rNA4cUESHyWhPFx3RfQduBpgChiWpAjWJPQNH31L7hKJfFuS",
  "key37": "3Gf7HW17LZpj5TW2zxYgHb4hMPSDRRrF92t5DBqbcgo9ZebHRvUJCEZAaWZ9kygjoY27J1xk3K52te9mpSnTGosK",
  "key38": "hN1VP6EZxtLn6cctnuuVYtVJs6cvGWGy3Yd6XLKHu5vw7YiR5x68zz4xneeDS8LHmaz7KbVNAajCPJtfLiXPUMH",
  "key39": "5TwwAqazwayRaU4C4BPe66fuWA5cfWAd6vZv5Mu329zX9q5jV7bwgyZns2jAwNtioJG5GY38k9FiCN8GQeT8w1fw",
  "key40": "b4Dt9jyguunsdKYPy2zNH4RSYs7sTgKw4fzHest3yxSr93zQmo9XrtB8ER5Z6CeV2uouqH2KydidUxvSxCFbL8M",
  "key41": "tsvNjY8m3mrk1ZWSWHBRGwTbFbveNmTxeevzwRgNirjnGeyzsEhLLordSFk2tYoZg7brMpBuE2949zXy3PgZbVT",
  "key42": "24WQWWaxvrnJerVLiAuPUHWo1RQVgVnzoBoBMHc3qSogDKwLYDP4PgWEBCcLiS4Z8ViuA8Ke7Mdv8vuPgytPJEDD",
  "key43": "4wrQQi3HZ4DHRdgnuj9h96yWcvsbaKX2utBBdgaeXKPPxM88RsxmsLaKceDgtko3BroB8BhawAnUyjmYZ3ATSnmb"
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
