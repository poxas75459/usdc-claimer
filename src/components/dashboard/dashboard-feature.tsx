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
    "4EsexgA4M1iJxNfv2EdpT4967nC1Fn9tB9GdNxkWnjaZwgYLFLfZJ2CkH4jkec15X5HtJ2LkozfxBr3CMCz8UN7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4891HudrxdwJWQs2jqNQKdEeWiX6yQW4k7yajxoHnAEVo3r8iWT4jz33aBJWzzUjw43TF6HYh7KYKS38E8Cik3wD",
  "key1": "2JH1N6Yfwcu7cpPRyU1XaEgZQg6GUoNCmxgotRtimNgK7dUt8UX8TTTzA7qwZxxdUDHQFHV99xdr13ucTkvAuMYG",
  "key2": "4zvHJ9897BUjJUzXEnN7Ju6Vg3srR4zAWq1BbpyMW2jK4QnAssScjsXTDVw3nz4PpAqf52ZA9bfmoGHMV99MEjUy",
  "key3": "6147rY8UUKpTqDkWPEtRYbPPJHtsD3choYHGVgtBNmG3ssMVBfZcp2i6QUGR7s4FRQ3wFVVhZivf3qSMZGTvEec7",
  "key4": "oMRHRGFpCSomYTDtGadGMLSjdx7hYZT8HaPCeKzrfYD1qX59ruMMck3riotGKPLc23iiMobwxQyMbNyZTep23TA",
  "key5": "5YPzuFy9gTH1QgFV3babBLu61hhSpLeo7zx2HpGAKKNJnyAPDcbca7ig2SiYSkntmSFwkfQPs8j5BuKt8eM59DZG",
  "key6": "2rJVdxrVxE2CXF2YnjzofmiddGtBiE8RZobtSzPVYQUEQaUX6c3GTbv8rmCNPnZHPLmheieRNAkhV5MZVFRTZuvf",
  "key7": "2vDMTVau7XRhFXesYPWFuVuNszqL5H5RS9fTiNMH3VN56LJP6nUTvUByPjqEqzZXfmKVHBtRFYs5A5vZJfvRADtB",
  "key8": "2Chc1M2UXvR3tNMPoGZ5BWbkiXusU8iQCirwf8fuLqzBkTE5shyNWoM9LTvHRkUfXf4DQw98ds7zXKqPLtBCvJDS",
  "key9": "2CZjRn43JTMt9yfx8N9NK6mdjGFr7mtTM4v6w6GEcpFsyE1otSkRrMWAs5CnaUsP7zVEhMZ6eYEAExpMvgWYaXqQ",
  "key10": "5bFzmZF71HShQgmG6FoCa6KoBAy1FspaPuNAnhXwRYajXfu65auhXstdghV4zrDe6nRUMh7x9egR37EnC13PN2i8",
  "key11": "5K6unM2qFpHU4E7FbfKwiX6PZ8wj7YqA3n5EG2rDYgetUQkpJwHDqSaHGFpHUrm79H1qQqWNq7sGheZBAjDBtGnE",
  "key12": "5UEJp1816caxx7LGYHoyQ1y5PR3DoZv7e4ZGzxdqJm57TWYJJdXDdDctT27341RZ2bQUdfJpfZD1Mq3gHNK6X6CG",
  "key13": "3GAbtnbxKLRUSFWW6CgZkvWA554NSxXzfZyDYcV3Nh8ZgaKiicDkm2THUExKF67dgZ3VrucyZb7c3YA3z41mZ2zD",
  "key14": "53JQ32Jhx5nYaLf6XasPpaVh3BcFPixs9aVAF8b4MrHDcEawUnd6DFxrrcgq7qvFMy33u3YssvmBNptKvEhxigcr",
  "key15": "vNBJfCiXH6ttMsYy4N8jBiUcGk2Xz3Qne1KG7EYtXPddyHyU7Ka2K5NRMQMKdWLLuRreQw9CxTKACExjx5qz3Ca",
  "key16": "2jDfVPqZsGbmTC4n5Tqu2P3uvaGwCnZ3DsRECpM9B6GK5jvxTC93TUJek6RQ1xaTuTrvQJhrfgpujA5xd4pLEdfr",
  "key17": "3Fp16NMQFNcg355NMTAFe341JTGpyD3HRBLWTQATUxfMeY2qqyet7wMVdCbsLERwkKojmwZBsxsiXBy1CvJPUih",
  "key18": "59BMdLqCTQLky7QYQzjMkeBysNScaCBVSHCv6weEHoeB4F9hTYDWcik9SYfcoxd5w9KmnAiyhXTxrBKGGGimt3vz",
  "key19": "5ZueieBjPmnyyZWL1mLny2Lz2ABoj4bDc1m97WQbP3LQM2XM7qP6xSoPhELvb52FN2VbHMZJkMCHtGymAd5vmVhv",
  "key20": "2PW45TtBfGNJxqP8t19uBNQ4ybgz7ejUgLWAvfLaMDFQVVQqdAdzQMNU8guALk5zBFwAv8tAaZErwXDRnHEy2AU9",
  "key21": "2nW7E2XV1pTjogLs4HCWf7xAREayC7vB3sy1rfQxcVY4MLa5jkmSyHSGoLcLJCHvbzQVAr38smGLxoEnypXDPL7n",
  "key22": "XSTo7PM7ZfQSYXP94iZWgb4Y7UPggdmZtViQPgDFzLSWjDbpUcwHMHZP6WCT3X3x69fHLyyWSVZB8kdPrx2RywM",
  "key23": "3eehiregX54vJnHbLMLixDFocN5N9zvPWsdUvrGLu3tFwCLDinRWmeXGULupkf8FXAqnrkJPvCS4gb7HkHm3ffYN",
  "key24": "2TXfk78RBPbHe8XEGF5EQDQnRBULfr55pCufWExuoeZbYdFGLACT6M1PBwD9fnfW1aLwVry8a6xp7GEMh9dTQk6i",
  "key25": "4EBuZiZXJgn3eLp62KGPAL1VcDhQohMnguWMabz2NzynoDWNT9SL3KnmWMWeabRwqJ8UmBYnmgusVNcURNR4yaYd",
  "key26": "Asjqk2b8tCAQVm1meqJDZVnGTo3VuQ71EY6Uc14vNmmeNCbysavxZeJfrSRtqgMTh5U8UMivQ4eStaxQ573cpcs",
  "key27": "5HXHwADjHJqCkbZHHj76L6fAzbXbVcfY3QAFBaKQcxRWQygCacZyAnXyrGWByychU7HD8GacSVCEgr71NYAKGs2L",
  "key28": "2VVZ4yRZeKq1vH8YHmj2pr1ekrM8ZJRPLvGg5fkHJA3jwLTerjUDGfwbxjeADo3q9GXUSZs8C2yygb35L9iRwBYg",
  "key29": "3ntagMXyL6knPuXH9EAhmhSvC6bHXvtwyGiCPFrVBwYmB4jREGXQy9ssiBWBVUUj2G2GJyG8nnuEu2GJqhXFZd2j",
  "key30": "48zsctTfxfDY2Vy24EhVaQKCjpzXMhtVCPtzovwKPaMqqxRHV6emBcxKY6Tu5GgHBonhTaok68VhUbBUJei8FF3b",
  "key31": "53bQBfE2PotvgYZEbPHT6ZpeNMWWNEQyCK1AqMnQx8UVeJ9ckUXnAe6NRU85C9FLFsYSSxSvPQ9sWKLFLityqYVw",
  "key32": "2MTde7rr7m1V5ezjRaQvtDVWS95a21EyBqdmYgjyTuYXQyjfG1N1jz6fUsAopKUDds1HYUpqzPCGJ2Fz43d4ZaM3",
  "key33": "2YPd5pqB8udGPVySbp1LzKjybz3fEuAsYc3BLjdWSLSnunZR9TuXFWYNVXhCVzPPHoz3peYRvrNJr5rfZe8hH3qz",
  "key34": "JcYyPsNCMDLwSAWkHY3V6CJbDVNRwC95sSdd19bnW1cJaLvv66WH2xvRqR85r6agW3ir6izWUqgyqvBU68qRw6h"
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
