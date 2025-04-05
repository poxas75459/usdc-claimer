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
    "5bSwwZKDPYgFA1tX8LnVc6V5BMPCp23hWW1qYRXcg2YuE5wtj8tbaxfgs9bWjyKb3gMcrYD9AS2jUo88rdtGWc7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DMVcc4J1ezvk8GYfDufQU2F2AkdzEqhpbHYktMVC15VRNUmTEWCZgvsFWFt49XSJToAK5DJa6P2Wrk4seJLZWv3",
  "key1": "SUx9x55HhCQe5cnFe7srHLVfCK1KEqRtbWW66fgjRC5vrFjLsE8phE2H2hCCvYZ4LPBV1ZneQBzmeL5zDX2XsmG",
  "key2": "3xnDCSZpK8h2gArwN7aby7NDttRjzZnWLGp7otdvy8LAxU5mLpr3c1Qt9vZZJrHEgYzZvs33C2aWccNJwNrhLdyg",
  "key3": "XRko92CKvJZsoADL5F9egGHz9R5NBAkxuPderZnFKvHqFhsN3H3jYZdwX7ddfGhKBqy4S7MgKmo6Fh5kavG29BB",
  "key4": "7gBKXANVwvZ5Y7yJFsPWVydZmUFcZe29oc6oYLgkpwc3D2sJSBMn9TxF8i2BiJZxEYdT7HwTg89nJwoet4tc9a7",
  "key5": "5yh3aQ7i2E8j2Pi8skn4SnHehEwQdrUiY7SFC11cYHk1swAxc82XpGaUrWHrg1PrU8X1himPU6gnrxvBwN7Ku7wt",
  "key6": "n6DYxuevTARyvanWa6rNKJmLu6R2Q8AKqLEu1vSAaM724JmVrN6TW6BPJT9U3M1mx4bapygiwooiC244t15WXwQ",
  "key7": "4ga2LgHSCUDVXJnMVSKtv4tC28tZNBXkX4HPtQxJqhcwkJxFina1JjBP8BuhzsLQnFU57n7ajtXPGVFRNryZBBqZ",
  "key8": "5ZDTzV6QDNyQhT5Yd25RhhEC5zx1Us87byUCFMRC1LLcimWAcuzobdwuVLGTjhSfpFPDWNm5oPwN87NJNSbaT8Wv",
  "key9": "5PKc16nPRJuJXNQcn5jYviUxkuEbz1ZZ7U4ZokQifFVERA5XazamNdFCS4w2Donhu43dfVnC2NQUhf32jyjfJF1j",
  "key10": "4QBwDzhTYHasb3GCgaqFKtapHywtivJzSusZE38vrndo2odZynR2JwYkYAc1neynWdpiehUm4bMAgNJbdDUtrj8",
  "key11": "5kAxA21TC3yUZXrpN9WFNJphtZUzSBuToNtfJ22vFcyEDFULh76zFBcjBWjVeLhMuGLEya6tir3oRgZ3wBRNTswC",
  "key12": "5Gm2NBHQHbQiZYGxsRTCXuV4Z3RC9BMxUoVX2jDaNCsap3JKWBozgZsoogVRFmgjWGnsdJX1ep4h1zt6BwsSb9qq",
  "key13": "29k76h9FnpGmjMEguvRCRkti4VqoGfgAnRYU17tKS145bPAeS6J6h8wgjHn7BnGHoNC3Bwb366TKE9RvFh4nSiCG",
  "key14": "3Yzfkcz36AHH36ZpJh9bFUnKydw4gVFXemBz6eHnRG6xtpzwW59D1cF7brj6c2xuew6Cgb7qTMuL4FJirK98Wak7",
  "key15": "56btWG3gvfTQx16iLpmKDDUnVfMbRY6tJ3pPvBvgCn8WXRRJeAaKe5NQqWuFREPMnAGkNHYWZyzc9YumidrJuQhk",
  "key16": "JGNxB4AjWMVmDGwxqBe2srHsS78NhpLyAsP3dJoxN6cXPosk4dgS8wARwAfFxPpKuUXxs3HPyFMM2623NTQtaGq",
  "key17": "2H1F1PobiXV4Y8U9CyszkNoJs6PnGarhZGB8rjDrrnK25feBrC3yHA28n1zu8GFC852Uvi3nc1BBcqezRcYbCMt5",
  "key18": "3psCYEh3CtvE2UBvafX7pWcppSpaoXPenfscAycwHMXnuHxDQZPY3sGTrSFYDCjGYVPgkZWop9qV2eY787ffXT63",
  "key19": "62xKrMtUoSC6EoQoZPkg9RVPtkL4sUVhuZcVd7zhMDpbX5trsFzMRj3cbGELApoDK9jWFhQKmvjTojZX8VAeWkKd",
  "key20": "5A4TWcZsgyPfP6ajBD8c1E39hCKRtDvNx4Wpzd5uoqdPJhH8XYzXf3WnsoPjBsLWu5mkDah32pNZe7xymYBzts5r",
  "key21": "fnmz6vgAeDbWk42CQA92dzWZsp71Xi1h7DoVmGsZ66QUZtRKg8NMngzYi6by729hWrpfqcy4qXWZfrw92JMBTsQ",
  "key22": "59Cya7ajy4EY4ke7R4Pb8xLoupXrN3U9rbZNfmEwDxHFSH4b1bcgQHh1vyY6HNYAaqD5vPHiMTP1RuQCezZFzCGG",
  "key23": "e9bGTafMDSwmRT1VF4zLygm9Tb12Juq9MwJdcnTR1hyBDwTtjjVoT9uZiBGAYpaWq3T8FcczSchEhJWdgy3aT7y",
  "key24": "5kvg4oCrvDkqW4UN4ripYgQUtrCJhPxVSVmJwrb29ABvHu4vHmTifqiweKo6vXKx2vTp3BQpD4ZisDmwQxyDtSNH",
  "key25": "5aoasfViZQ2heqHzMzYsiaKdM4JhWieLBpKKRQUzGkGr1ayBdXGG6C5aynsQQzFDY4XFWejuJb8YkTfcM5z5Q5a3",
  "key26": "3iBLbUKhmUTc89wq4Q7zBS2B8KyiB4Yyx8tUEa8imkcmRP2brX2KVUktvozfPMTDgXzBPfpHAmdi1GzrQLHvZon2",
  "key27": "4Bv9xVFCrBgKC6bSDcKcQ59uKiFVS7PSLQWHxHz19o3BRrDuFuwt1p4VrQs7GWYDz8ge4F7igbg6TCKa8DGy39fq",
  "key28": "2ZBRJPTqEEhFs6LVUUqRpeJWKfnXg29j9SjfPVTa8rg2xRWNBkXHNxn9zgeaqdMkNdhmCf9Jcbvt5LFKLvJht3zn",
  "key29": "4sf8zvn3Z99z2ZGR49WWZ6TJHGh3Fx8LnJ9YK86AYgS7EVEoMjjsn3ZevJZEyZzj29NbevK4XdeGSMwJLXiPb1Gh",
  "key30": "5wDDnaJGFKqrj1AGp75pWG6GX6NcmEXy99kX3mfaDti3kiiXni44DzHkkNxucg2WCQ3nNQVZ8RYLNmYiDL7gucHC",
  "key31": "4zoLEgJC5j14F3dFrtvHV32w1xVjnzMjPY9YPZakK1w518qpYGGDeLY9eNPAPbP1NhGDN5gNYemVXKKBtcZ1pbTL",
  "key32": "u5cAPjQ3gMU12cCi47pjyB6PUMqJG2RPRFouiVy8sNkAkvETCFd7tHXc66FGpoD3Q1EPSmLGJP13k6XjDGv9ABm",
  "key33": "28zkRLrq3drvrrhkcvq3RBxioi3PPFotuC3edhQFqpx45jgb7anfqTLdAQJAWRH8Ppfx5KStr5vScRScmKRR2aZW",
  "key34": "j4LkhXrQxTgPGjHGCpVcQJjgZCVnMChhDhQT7PWn6SaG9f42U4nTV94JEifoid3WnXWakQznBojqgy9DwJjBu3x",
  "key35": "5QTTHPWqUq6sWwPkNMgYdpPTPdjX22bJUGPAUDV9kCQ2rTNjFtz9itQ4behZJEsAEsbjEmEbVehGyfE1dnPQFr55",
  "key36": "3yzDZwTTzvRaspHY4PY4P77ocE98deEcRkgTZmq3Se7ToKjJZMxpDuHDHHmhsSvba4oUPrTSeR1Ku71ZRZbFiDqd",
  "key37": "563Hmh99Tzff6WJvdfTQEaLNGMXkue1Bi3iptn3W5D6WW4SbmQ38zFzGG9AK1i438BN8MKvp7q2StYpg9jKQgqQU"
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
