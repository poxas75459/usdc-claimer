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
    "42ZYHv7HyZsoaMQaeGc8i94GzrVEbRZDuDH1i9283TyZFoCaxQgUXXWzpL3Y1AfPCNoTjdEmbWUjEAhv5a4Azr5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9Ztx9TSoknhQoiQ5Ak3TjyFR6wZJiY1ks84Tr2vKNuGKog3AdEsjZJGiBdiwNDHtP4eyQxsA4hpe1r61cSA9Ed",
  "key1": "5hVuDTfAM2JbJzr7QYZT9Kp26Wtghcgu4aWiKaqqsfnLkmB9V4smEWpD7nZ3yBKNeTStXkX2rqbTBPVmm1EvjB3W",
  "key2": "662YQv8KHNaCGxigN7SyzBo8zQ4Dt8e5BZLrEowgZGjAj7GdwdxmjcrdiRxSgWhJbyjPBy3EKpd5cjYB2vMRbhQX",
  "key3": "4gQ2UG75oyRaBmckXQWa3HKJhK5DJzb5NGWJTptXeho3Mjhy9WehRmBgWJCqRDm5KuPAy4hgmEEh8ZmCMCvGeEJB",
  "key4": "4QVCZXW5Ec8qzyHGsQep2XyeeTnskMryJ3Y2m2dx9W6PU8QkHTWAo8dnDNLcX6XSEWE68u2qWJWmbaRdbsmHbzSx",
  "key5": "5vSaTgRjApckBFYe55CvFyZ87yC6UDQnZTSdsRdzLzsxm1wnAqGKhLJkKyxeJdCXWk5sqHzfH1XNQCCCZZBueVbx",
  "key6": "3s9MPsDwvCSX9Vdipa5KQPRz8xv5YEKAU7CiMBxmV3dQhJiCZTrC5YXhVmGoCGN3fKeL2ZSxjTdKj31wMw2e4E9z",
  "key7": "cCe3T4To9PPygnSJCNEDhJG29M6xRNNGzD3skeMerHsGT89N7ZXWgRMHjwu2xK3CgFXT8qFVXV2mCX5YNhJrV1j",
  "key8": "5Svakh3Ahp8brvaJkxCa2FVq7qqc7mmvcjqromv6VZPQ6JjwRRqgL8rnbaFU1g1jaLMS4bnGVtK8WP7zTDgJtmrY",
  "key9": "2suLbMekxDmd3u3ZYsuPjeJpy8auvZs5i3sw4fZUxTyySj8Lu2LuQenS1DTrzUS8bdQ9k8kXxVNcEJXkNqVzaXGw",
  "key10": "Mf45XBYnjswgu18wRDHZw1MTYFWT3mb2QeBbKfd85WJuoZ2LDEizhBGY7QWFg5U5Tj3Ni7n6xutCjakk7JS2MvZ",
  "key11": "2Z5fpjYx45S1pkJcRTE1Ej3ZaqTq2canHBcVbTHZ7zSuM1zEwoermaYMUiveYvWTeLPdtpGM8ph9GrEm73HyRn6q",
  "key12": "4FZFvdzg6d2uECqR8jyrrwD7Urf1N3iGY4naivbx2WUAztskc2JpoRyt5qHQWC2bWdw94u6u7LwZBweMFnugmGKS",
  "key13": "3SHSxCTRznvQn5wg6nGbq3Me1uAf5ZjJtaYpCUQPFaouCSByo74pGhpX5WoU6yqBHoUo5Jncsj9jzTFhLVHdWTjo",
  "key14": "44qfKcYDR5xBUNQ51G3cWi9CmNxvHrej8J9DQWdWA8BQqSrKhFRecxG3t71AZMfmWsuqRij7bpigcVQPYrpZP5o6",
  "key15": "31isT21moDCmC3vQGH5Ge6ersBaebRXZwjaUpShUzcFUoTNyPULzT46ZRL8bFxWGLutbTvT1hAMQfJR9ak5L7BpY",
  "key16": "4sKnWhZMHEQvdHeLGom3SyV73wW7pGPC6pnYu9gT3KbVYegKK3hajYKZ25W5JijWSMeTttUZ8j44LuxJtJp2LbBX",
  "key17": "25R8KviAo4FVSgofzPr4EkCNHaB7eMeThSUnm5ZpH8qJdSUqnh9xhkMn1KJoKsEot2LP27HNJ2d23kySQggkJLJr",
  "key18": "UqQV5ABn4AzHWdthrzDXKezTZijq9wHJdhq7zBghoABVmcWwMusZBfixNxP2UBUUcmyTWZC4XuMUWwTneyFVKsY",
  "key19": "3kdQ7BKqZapDQcpzNxEuzoVPtuDsBY31X6pG7NHDN3wxcqiEm1VNjSfEWsL1eNphHfX5kGtJUHZbfcvnMcpQjztj",
  "key20": "2ncoFDYPNr3YP6DjrLm3mgxtPvxdqFoKA6VWceFCAvwQtb6CAj7HyUCzVYemte7SuWDzdoQPL6Zv4ZQXQk48srto",
  "key21": "AXUDYDJg711dys3C1JcB58QhNv6G2ccy1Uf7e1SiRmqJbHdvcphrYVPyFQeW456c9idG7dUKWNfqCRBp1stbRZe",
  "key22": "TKXjM3kQBjLutJVcDXwfZD6mPd8mrGyV6GP26ZHbiXjCvYbv3crCKxMNcQpb6QTgBz2XCyZiUgHrBeMtzc6trdk",
  "key23": "2jfdxNTnisYoJ92LjaSGETB8Lwp8fGqcJ2ShP4e2pT3uSDuYNifh1sQgi1PKV7raRv8BiuFwNwPENAUoGWPrMoiA",
  "key24": "4Zes2KuRtJK8VuP26nWFssXCGfKzdhw12Skwz8dQ7qoUP5rcRexnX1q1T6dukSuPRAVrbSDTL89UNDvK9otLATnd",
  "key25": "Pkc6gbsmhzmaQ6WvcpVa6CyLx5wN6TdCurDK12eE77JxxBFidZ6Vud648HxJUsRn8DPP1kaCFQdWgh3rfhCMjTq",
  "key26": "jU78ehK8GoDpdnWYvNuTxtm651B9fgsYUbwWRBooQPyLrsY5tnRTsZYqWCTspBn9Z46e7LUxed9ZbadsUGepc2b",
  "key27": "69LFbjcxPDTnxAnqqB1zpTZmMGXCeLTbRBWUzrsNtUKRHT3DbHk5LFJL9ykxKzij68PNiw6KSBL612eTTyh5zsf",
  "key28": "3HsjaT9PmwUnfMPR5X8UJmmda3ENqibbTtxRGm5Dggk7QFJM8xXGqPCXeNz2e4NvfjZtgf4ShCthguzoEpFMES6t",
  "key29": "43McExK51DDCJTaZdMr485qJraxZ35ZBHbe2wn6L1BEEKpLXZpfdzkCbWX2THEzTeRK4r9CsZhRSbwYWMXVkkYkK",
  "key30": "3a2LfE1e8msziJe5Wup8VQyHUNVo9aVRacngECDtGn5b9oQ6X4WTMUYLPKukLMH6wX2J2SMfCu3yemspyqcC3Eyi",
  "key31": "3MeqGtSw9g9yqSxr44aUGuih2UUJ5PzRbu2DwXjZt6kvPtgXwLcVNtvJ5J1FhpqefVTJ5k1wwZJVzUrfznvH6hre",
  "key32": "2BbpiWc7E55uwAvgVHkWGSHDmfNfv5PZtWRTqgrsVzPiCWvGSWn9sDJ8tkDdU5HTMAs66XH4wsZzWyUkHDvnzoU2",
  "key33": "4mqLdQhowUmJBRkXmC79AWZ4Yc56Ho7FmxVNVbXvJcmQvEPr1xh9nBq1HnGLJXKicZF84XEtndvA7vtdjvd6sswc",
  "key34": "39WCZsQWUgQQTphwq4UzgxZYryExKqELYCou178CSGfCA6g4UwJgbkvzWeAHGCkCE9Z5RvDW9uoc9U7FkGP31Nx6",
  "key35": "626CJ61hxCRFDfWNAb1kUgA5nYxYdAcpKEDAxGk2d8ZyNgDpTKyTYDW4eu9sUEW4Lc3KmkqogpWMB75UF4DBYevX",
  "key36": "2Stb8NnVoPfjdCzwSn4mvq7ifUJhFDKY3AdNt5vHsQAAxjwSN5VQaZKKSA1tw3mywfZEEJ4ymDGoQmhWHvMKc4N4",
  "key37": "3aBDbxdaasixr1275SPoxPhVdYoRK35wAnGx9KV3A2rdyFPyx33xXVpR95oesVnexcNRrjoaHw1ixWChGwgtgKiC",
  "key38": "3KxdrkJ5DkhuVfPMdTp7K11hD6KFEnrnTjvxm2UctHEAgdroniJ9n2gfYYVCiEDgZnZddTA7GV1qJmH59QhUe7KR",
  "key39": "ts872hGbNo7VsSjHWW7zL9FPGk9e4svpfa9Y6H2Rma8VF9TYjtDnmGTMBQ9fUdU7QPhYw8y3DTGq8AsnSocgSyf",
  "key40": "3H1dAuP2j7MSBdaruK6HaKUokdWTcAT4eSseDFw9RPGsUFxhcTwYD2UyUPB3Jg3PzRZvb3oRZCPphd4amtAxK1pf",
  "key41": "QSg7onVoumcNVnajXGbv3EBTjx6f2PAd56kMdZj3NeNiEe7m8txfiMEaswzdnuAVBYx1fJ6jZZ3wo56KjTLmBRS",
  "key42": "5gXTpS3Jd8pGvFjtezkTEeZosh9boazajTqL3JyJ5xiYY5ffVpvH46cK43Y2kQHfnEk9eZNDSjK7ezVPVB1xyd5u",
  "key43": "3TK9yQVnwgWzaqdLo6EHk9bMM4VKxp2U6QwGTQnkWK5ht7AEbWppZnMNJr3WQLrkdYjMWi68oqWkDzY7oUj7VGiM",
  "key44": "3r4YmjKEFtiE1nXasMndgudJovZPahbv8tQfV7KqqvYLLSrBtTSFqU3WGy6GsRgQLB7C5zBrfB3L2zemwKFR2JDh",
  "key45": "5pd5CgMS56Ptbmzz44ijPAjSpfEDkMhYT71RAfvxXskKk7yhTdrB6BQWS22TTQtn5UgztSnDeyAEvwDneZtGCG2G",
  "key46": "4rpdL9RMowb1tLwpnE28zATU9sk1anfmyry1H9nrAU9tCsg7euUj2QbSFSfnwz6D6m7QzNGFTEXLYj7RSrAumRey"
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
