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
    "4Dnb4bSFrK1emxwoLGRBPoF6tbi6SdmDwoPY23WmFbdupxnBbv4knGBWfnoLyxq6akNMrLtzDXj1rLNxLrGP8kcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bi4F55v9SUxVbTkfZwVUXDqigpMusv2VwTvYeqzsfxfnwoUdEw91zuYB3dwAQL8Y6DC1x3aERT9o4zQqojZA9o9",
  "key1": "5mL3qftC2Qs5kVWocKSinTYqtNPkoL8TEQT7vukefKJmhFUgxtyRwXkWVy1fiDuPUk6nrq2qocsgMmM9QNKSdDvr",
  "key2": "PPrTu5EFSqh5TQNrUYAXLMuUJzMuERRvh2oHYKQn2vdhM1TezexhfuBTfztKS7fNo557Su8QnRooStcu85uX2Wh",
  "key3": "gSs7XtmFBj3ViKDW975EqXqGA2syiqxCF5Qq7Pb3eAT9xaoAk5ykE4Ljcb8ATsvho8Lkk56zzNNgUUyTs51mu5o",
  "key4": "4nmNnFYCQbSoKWYGodYQU77ETtyPU5XfFdUoCwaYgD2sKiJCR2o21hbwvjTo5AzXmwYkyeXhMff3oGSFsLKMZnB",
  "key5": "4zRs7WivmKZRqYs7Ytgr9Xwy4XZ9HLL6fU6VHeyayehDnPE7kgh8DWDZPLF8rd6bJhXo9qyiw4N66fQrSoeLjC82",
  "key6": "3dTjk5QLfMMfNF6wnhprCwELkJymqrUkcsZsXGhCjWD5ythFZuZzsNS4mWYAzFa1DzFDQ7yvxE5JrnkbP3Misvu1",
  "key7": "2ZyTZwNJ6QExZcSw6KuotdbrAhkQWmPEGpETYwPqR5SSUoLgLAriBWLqn8aeceTRaeUD3kS3SdNGCuz8QPuQW8Pm",
  "key8": "AQYm3wKncRESxq6YFSKqh12FhFjhkdGaTi4aPtXDZr3C5wbcfM8xh5LHYzmiBZnokkdCuvDD9uwqwCVwXRHB3Uv",
  "key9": "2x8xrUUHskZUGVPNUp5A7ZGwSmL4yxVyu6mrvArqDNTyNpAsdicnvE5anpaHABxJxZRRytyjopt5QP9Yf1RkTaTL",
  "key10": "3pwTe1o2fMpBVr3hzCQEHUNVDP1npwV3Zvmo4ChdF2DXehnLafW2iBkwy9zUfq3mrFWMiN3VT5Zw2CqoESRuMtYy",
  "key11": "ZzQVkwbbXefT6nSqYBipzjcDamjYDwj776Do4w2qzzDfhSqY2az2VcxJMJfpkMR3KqJ5GHveP29ezZGA1qcp14p",
  "key12": "5NR23FroacFRhACNqJiaTK1hQdf8CyHYHGX4GehyqsDURaBc4s9V2eGAvVTgitFKaw9DRT9jFs1yX94fjKYFNC9D",
  "key13": "2DoGAGHXNGsX3aJG75Hs3rrEuv2GPnHJA1pPsyYvH7QgTnY8TA63hqpihg8atmENQouhzfRUYo8u7xnn9GmRcXVH",
  "key14": "Jcm6ke67B6fZaWenD7o9mP166Qe8bt6QJ6YuWagUQAQxWpoVHk9Vye97bCuiWRdTfLBPkhJrQVTRb8Z3aw4oK78",
  "key15": "5GLXj3EU7szo8nA63vBfxcQnfN6mnRdrSzQDqDEq7vweThEsdupHbSYA5WoSm8NTKxLVosmuYPU9BgvpAiZwJMZi",
  "key16": "4a6qjHiDtDFQx8qQacxij1mC3AS4CjyVrNBgttnH14piXSRgS8Y9GeLWvyy1quwCWrCoypFskRrUyqtQ62MLVJxw",
  "key17": "3xYjfNvticqZDim3aVTJujEH4jtPDHcmieuEhVQAD74er4LfFGNZhkUyY82TrSVVedSGjucGkNyuyMNqitg8swrr",
  "key18": "CHegT9HabmiyCJ53hac3pVHUnnbg7DMZq2KEHwCfajwWBUhUBKLzLWU3VetcaDKFk6ewyCKSZ2a1ABnzW2GPei9",
  "key19": "7Bw8eJLqhYHVW781urvAN4KKrJ3XF5fVkGBTscvKUPT7f9huZdX4NUnWkQh7hH1HV8DAZ3qkHPxpD9s4RgMQKd9",
  "key20": "3HS1CbRaHrkGWJpe5hV4fmhiofLo7J75eWXyKBAXW9qSkoczAF44ozKg1Esxr5FU1mYgiFqx6nTDLhxzTifufavH",
  "key21": "5bKrxWnL73Y3o9H23jd88EBmyLfZvqxnQU74WEzuGrbsNxPy9eUVFHVW47rjk4SQrveG3wPkoqFbE7er8DRXGvnD",
  "key22": "4Adj4iM6F7q3gdH6SxT1LKWRVWxfhg5m6jEDTTsDwUjmrF85Wtzvfai3NafaN3R1J3MFexeUkaFkzbfoqD8LbJVK",
  "key23": "57iuPpwJzmEzTcFB4R1K6312YoECirpVwtLZVuwBefDiANfoxyxkf7iEypJFK7PYrJ2idkkbentEBLDQpMn8cfKt",
  "key24": "384gj8MmYVPrmgqNhppu1GpTAw9eYwK6MZxkK9dzKYjWjPY6i7r4PxYXzgZmFTH6BMecNJaJtr4eb6havEN9r6Km",
  "key25": "2ESfGFneWKa3E7qBXoyw2HzmyKgGSMGGFYrrjCZ1RVC2Bw98kLNSM4nTRtxCHWpAWxRWNuCRoKLNeMcBWvgV8EVS",
  "key26": "3M2geaBzwdS563RUwKaGsCqrBeXz4iLjh8vBtWkdGN9PUhUsyVsBMZVFM8VJYoR95HUECKhZTBBgLedAvLUNgujU",
  "key27": "5S2o9TN86Fj1M1jMWgLGzUAgHVH4uivKfdc9pfnFKGkPbK6X9Us6XDYUDEfrXJTosayDht31v3zwffE7RqcEqFQL",
  "key28": "3qKmRV4Be8pa7kRXcZyoQBJg9nfqpadjbSky2ifdVXYyEm9paVhB1RMeHHNMdx1SZAEj9KNeyJGtcSDBTPoVp7Bp",
  "key29": "2omLkWnNtmx8AXtdYat272AxSFUvtduHvWHUqyTaj7HLWSbY4JY5vdCUPYe4SdcbhRq9PKNugSL9nAUE4Gyu4nS6",
  "key30": "4nLnT68AxBXezA1RRr4ig2XxRaaRoNJ6GrKL8Qk6uaLKKFx5ENvawXpJFXvfQMKwWPRsW854eQ1zooJ2RgpG99t9",
  "key31": "1ivShNXx5mKmRPtmMmg4iactX9M32WzZJiy2FQZv23H43NSfjTujzBaTYwx6idpApPv67jowhd7SGzpdGCznvdb",
  "key32": "2D44fbxBmn4ZL3eRGRhTgWe9MJjAQzjnDLdxWLucVzBzHKbDUu8G61rYQB7GG7KLfd4Qsjz3Ei9FpMrpx4CaLRX",
  "key33": "3MhPcRuDJW8oBvVpG44xGegvtnTwTaZnHVoXMDrgPjhU1XUDJ8DMseyUTpPTgYSw488Qt92TUSUi4ymbwLVvHtW2",
  "key34": "BNPau65waAPeRfu4ZoZpLMu2tksWrQefomQ7UwccBdvN51qyPZY3SToKA42QFHiqvc6yDpaRi5UCB3SdEgJa8a4",
  "key35": "4zmFG3qn1SZHNSTohsJjXj2czGSvn5yuo3toQ3N9F3yXyh9QLLa46UuqWHChApkUaYY6EFG1SozB4FGVwCL1X4Vu",
  "key36": "42EabFFAuJsgWHBmjWANuvGhoXiUVgv72jPcMVVmMR9a5Kes67GbGY6uL2sDQTnaWXcqYoYs47PwcBM8n341m5rG",
  "key37": "33WvjkYaf7ReXTpDFsrvJqcfDGJqs9qfpxz3pysNV93ke3mnSQ6BhzU6LDd3tFZCgTL6i4TtnmXWUw4YV2X6QFhN",
  "key38": "4NNiC6YrUBCB8Tvi2Ny7bfnVQwWfUGc4biXQTJKBRe1xeQMfEjGrFJujCwvEFsiNsVQXtG77Ed8P7A3XFfZ849PC",
  "key39": "u3cG6V5fk6v26q5P58D9TCrTdQQnAUzqRh2MhXe8iJzZtXRcmMVo2Gfk5raMTA5ySCViZ1aWutwiR7gbSedDTYi",
  "key40": "ZvBM2gWnJ23vdQ2j4kAwpgmfxty5rSxbYE23x2Kibx7kP3TxnkgAMrtW4akAXQCzbHtuNGJtAsAJ3QQe35JsYtb",
  "key41": "5wNYarxKSAFuHQZPzCcUFTZd83amvM9hDSCGG7NLt54Di4QG381nkXVZpcemfvdHN9Kes6opWcbvrRY8xGgcY87v",
  "key42": "2KCMzgAf2SMDcgh1BTo37nfiMxMMPDmcxurc8HAvQUsmiQVkRVWQg5EJZcBbnBrcbiJfEddA31mQKAAvBpLusmmH",
  "key43": "4XqRjjVNCtg9cUZEx81e4SgHE4gwrfJifyuFYX4M8kmh5CjXmbxKyvgnEighQ16wXzRqhFzkSvUikyWoWidVGuUK",
  "key44": "2qYzDZeMGnW4czMHNEJTskeMFNMEntpfdbodcg5GzG3LKYigFXzLhsSsb8Cr1kn8auBEszZt7QTFpoEY3zzSTApP",
  "key45": "3DtqDnH5ewRc7e2Gh6kjfUPhFNqXkRCNWupz6q25Gxsub8zribbzxArZuVjnpAysNwa7UsXXk6RRmWyXRNd5mJwe",
  "key46": "3Nh4vN1LgERg9CTDbnbu6PxUHV5KMySbbnt44iJBP2mmza4gywuLuueh3x2D9KraSNC1HsbYyAQ7QDxtwvSHia49",
  "key47": "2hhRPDgfsLo3UmpVW4V5Ak2DbCiYzN5h96gRfCnZbCUi3YGCVV8Li3ZpHhihzhaNbKGUn4K5g4xSUmQLVhvzdDbu",
  "key48": "4SAAMzQULKToyAsPUxSfbJYAuqZBcyVHT971gLBHCvR6QhCJwsnG44SVD2mEFTRRHgV9Sgq7mGx8Xf1KqDThgVmy"
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
