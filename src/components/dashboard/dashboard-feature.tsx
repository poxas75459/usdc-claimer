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
    "34dG2dsaXK1caJX2bAep6mB9jskWfAFWy7BDrRaRydrFPiS7pLX49XUoSskCDQACQL2zuiaLTVfjMiRjvBRZPEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zm9T8G6N7KnEkrwQrxqf5kQJmWZeH1c9YuwkvbK7xdfkSewzGLnvyMye4v3UyL8CaogepYyC9ngCfK8r5XUNGKY",
  "key1": "5dZFDx3KhrhyD6qzDYpa7iqF9Z4KQQkuGWB8mBE828nBepd9pJzLDy8L9zZjxNNu7z84VLs7qoNuKWGrYD79TBCp",
  "key2": "2pSSxNhWZLRkguyfy12yBWt5f75ENyw3eamLPF9pSrSigD9rWwFzYtGFGSCpfaqk3HG4FedTgMpr8nbhWoUz4yjf",
  "key3": "8ikjFZXWcK6Ydp3jgCxgBK1WSECiwEaQK9zF5QHDMTqXJ3GGGMD2xBL35vaveLtnJL2BssBAmB25QbQnYQ7KTza",
  "key4": "4xLeYQmRhRu3x7XbUu8XoxeE1Fdi1y9xrY7fh5pvK6w1CDjiFfdd3qohBok4U79r8v1bpXA3xrEh3oMS8vuu4Kkm",
  "key5": "4ax5wbVGgKx32xZ2YePnXqaP92VQL2L694mkvXDrpS7615gJ2pPBPMv98Lk36csmRiXaD3Y48L8cH2HT2aLsdPCw",
  "key6": "36tZ8Vh3cjB69eHPMmYCA9tdKnKtviQHhH47MJsHCAQwnCwtheuuAArndQv6NhrrnzU1HZGUYWSvSwtU2T9hwqZc",
  "key7": "gJWJv7YqVHpzSrMDgtmWTnhRzZpq6brAdimK8ycSLWEnon5JduxFJEkZoNadggm9L9fpg9WxuKUgfgu3rjEptHq",
  "key8": "5oYMJr4Vh9bxmnmLmefuHr7Hqu8CKEvMEwUeDVTmWbhzkgXntX9pW4u3AwxaUV2Khwi9ub1ewKLtCGizL5oCJVhE",
  "key9": "24XMyparcBJecJhMP3qX8Z3PX2SgmnfFwkw1xwwUmDGpaum9zTLDegBAPQ7wCsbJoH7g8er5KEu144T89hrS3kyk",
  "key10": "5eS4De7TYgXrZXaFXctXaKzdzHaQipRA33KrpcUYaA8skvt4fpwZtQ439VQLmJkdYRko3RDxTxm3384tkVUGsHJQ",
  "key11": "8eweh54euUUw15WLJwr2EifYjwgCyebteig6Qv3AC4H4s7z64AMmuWnKFPmC3z1fLLYnvmWrMkBFN6zr1Bu1dej",
  "key12": "3zqF8doHUvKf66hHY8CCDjs5DU63HDSwtR4wLRbjdNNp6u1pG5TJNN3G6yd4e2NzrAQMtKyYU35a5yV38coVRsiz",
  "key13": "b7rF2T2nowvjd7qbFKKZ3vepRU9LE6MU3EGvUm1jzqFjpRvYoZXZ4J5KU5trHc6SpfKAZoj1EGJM9DhTxVvXYfZ",
  "key14": "2K2H6R5YqhqwvuWVa7fTTNyEPwfsYrqdntE161A6paY77Tgd1qXCyuXMVe6qVMrpobESvjHSeDiSr5HYxURYZ3yQ",
  "key15": "5tXRUvCFQhYtyhPj31pogSALg8FjcMxVrUQWcda2h1GtfUJXPZChB912Eg9N2ybrhDhzmbQ9u7PHavnV2RrrDGx",
  "key16": "3Q12QYwPYeCu2RFisL4e7i83u7iYUokLChjFYRVqHPW2iZWLuS9CADWNFJFVjrWwthcdq5XsKGyfsJpNqrmX81rE",
  "key17": "3sgYAqkyNPL9naMs55KMu1JNgkyk5SHYXXUQ31dxaBkLqPACQPG5vdbAwkouABhjxaHndhuegX5CaohtYgejkwrF",
  "key18": "4CUUCQEQcz5EB6HXBspECwPEw2JzoVeA35utYXcDrjqQthEyMEeDNckL2m5QuLBadC6GAJDbjumXKL2FpqCPpGAm",
  "key19": "cUime481wJFpE3QAuFUL66zUEPN4aeXbGAYY4bzLcipXdvtGCmaWNNw6JhHM11AQt2DLQVW7G1Y8GccajxRL5TC",
  "key20": "2iuFZ6uGKh3FWxofDHB5KD4k6FaqAy52Gh9adqAFN8QFdpaUTP9ubAQfeqUTvYXogmeemZ8k4BVs52EuezsncNNj",
  "key21": "4xsPxcNwzWUo62pJmxPbY1cgbGGLDWpy18vAa4JXSV7UWde5E5xGXnatxYcE7mYN8C3M2WVkhFSQH6mM636N3pPx",
  "key22": "2QjxQQ4tC6xV82tbDnzL1hrSJTogAcfMx1EHcV9S79MLTnPnJsqoeojTWuRigf2qwpiKJxC7zarCP5ePn5w1oLP7",
  "key23": "59P3CQkWsVsdd8zCfjoEXtViEjsbB95o5fa4564rkdbTgK4amCBBuWpmzjrecV6M5hLq9ELYGRUpz7v9a2W2zkxJ",
  "key24": "km2FSJ7sgzPbMwHxVK5y5J8wbNGYnVpuFm78VTraxrE78ivSaWCR5Lw9S668XM8mwk85MjTjCbyR7X8XYqdAubi",
  "key25": "3dCFKcjzCpueD8QJSRDRUZzun89G6uQfWVWM44mZGRAuSFjpBingzDC3XkfwFakx9WS2md7nn4PQ5UE87Apjw32N",
  "key26": "91QUnXzLoVCSfFPksdgUcHUqjV5yjFeZPoe7ukAFQE4CZ6YJYak2ms4xFhKToFhdAAGCYAMGEtLRecEtcEvu25z",
  "key27": "3XkaEAAJ8SGuks1VC9RrsvTH5rou8paNsH3UDxEHi4SRUFmqSUmhrdhnQd9KPz6WtPLBN79CQ52eLg78Ejb3Ahhq",
  "key28": "2CYss8LuSgq9VPQZrERHX4M836mDSrJDERARQJUFuhKEhbBKFKpqgbAZS6eYhttbdYhNHt9CT6vsBDWLgCcEZShJ",
  "key29": "28LZGfMDqWb3LN2LKcdHE1yFwSaf2LeMHCoPVghb1H3seW34MqDvDheHFFogBKZSwtgrnec3o8XEqEjoUg1mFUEa",
  "key30": "4a86kLH9EaVAuLf6qAQzLkhHqMt1qyz7gsrixcyur2sz3sxHVsTXWPmoo9Nj2czx7iMiXAe9Lpih7GeGNAJ1rgcp",
  "key31": "5XpNLaxSG4hNHpmPgc4kC1tRmD6m5TcuWupr9jcUk5AbagXgby9RM9Ry2kcDcjBZrK4xzLymxhoKoVcYbicRMGyx",
  "key32": "3iK8UTAtxFFi7x2ZwwcTZAnDK1nkuwAamadLSNSd9jBqfCRrNSGyMgmnJSMWbd69FksXum7cPA4UQNu49NFXwJgr",
  "key33": "4GHyYDD2SkqcQQHirDhpE4i24mAsQkjkoPq9bhfcREd6F7rwp4gSSBqwrfaaby9GDVyjV5V5AQcaEZUwp2KHY4CV",
  "key34": "2HuzUrgGgFPTjQNyTiG98VWtbp5eX9uWfAxGnF4LazXhTaApeTvg2v66Fgsexqq7docjUzmBKuyDD3gBMjfxpmQ",
  "key35": "55ocf6gUYUDru6vnNJWL3Qw7BbmnEVoZpH5XFovLU2NZDRzbd1y2afB7DJfqpj2tJqQ69AZcTnozHwF7MriQF6Sn",
  "key36": "32V9EEwszZHsZyQLJxCyRBHuMq6kodgCZcVsGusKJTcU1Hy4e4SoyBQi7A7fiHBaaLqxr8nqY3ZRbMoaHaERf4pd",
  "key37": "3zzsDPDk3smRQsQxrHQBXPkG47sGFHGxwixeNH4u2ViJW9bEvZreqvjokenNoVPkVYsZ7aMGTjHBx9XyXE82uims",
  "key38": "SXYSeFMWNTu7j3GjHKNrcKpfpN8jqoWK6w6knZX3DXJwxd8SU28nHBF84FGrQwE2WrafHWKCs6YvCJuV2sS6DKh",
  "key39": "5bpMgvBRuF488nVGPCrKtaLLqMegrm5YxfjpfKX6FLQ8Ei7rAxGQDekWsUjYSDofGahKDw3VzzgWRBxRNMvi9M5U"
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
