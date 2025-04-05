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
    "4k38SegPtdKrCxnpPZ4dDPWUp5msU6rMoCdtq1C7QMXCpDCfnnihfwVZx5ZZsx9CBchMRuPaK9Ph6BRfnTKpB1WM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QibX5vPwrfRKWYJVovzsiekZU8EcBWMsCzQcWLuCFLFhqJarJEWPuSQREHXBAPsoZP4EcHSpmiNsiH48cJNrEKL",
  "key1": "4PsrLshrnTtbjfCMVYBStC2CEuR5xi9h9ysMRMyQkDbpMJsA7wXUydWNN75QM8dfxfybnpcGFG1Twb3Ejjo9xgga",
  "key2": "646AqC5K3CohZumyZovcMoK7Y5fPJn9jKca8xXCmGiw6iAVQSFB8MNF8SVFGroCJUwy6BuQX8LHL3UnxWaUchraX",
  "key3": "4S9B5v5QRZVJB1Tq7Wvd51HReqxWctfRrgmjL6s6z5LfBkRduwx19BWmHgdz46gWEVJhmrhZabyz5b1KTdcNEmM5",
  "key4": "ixDHx3ZCG3Pp7pqmguSN87kc4ACHK3kxspRAgu6sBXgAJiCYaqxcLR7k7P8XotjdrzjixdG1GEXGXB5v9suLhMv",
  "key5": "3TU8np7zrsyihkNk2yNWMeKdF6gkfNJTBpykJGp4PacZfchHRtyRWUD538qGVv7QqnpSs24U141nDNm2xBZ4fTPw",
  "key6": "4VXPtpqrwthdBTmi955DLvmFet8Z79wc3JhH1D6PwoGfHPHQ8MCaUYkT5xDMqrT3hVPuTRW7hTcwAmidXEZtQ1wd",
  "key7": "62pxXAKZA3g2tfJ5xCPhMHxS5mTiPPazvaDjT3S3aYSyZUH95iXPkvc8c6wGQF5G2Pn3pydHwn3DaUFZbnqyKcpZ",
  "key8": "6cESfCLyvEgT1621yUzJoMqHhRMULgDVR5VziC2tQ7FqPwtRhtJFMx6aBwWNNxwjT23rmgLqJ9mGUe2S4eYHw69",
  "key9": "4RDTjt2r2FnjbRpgeJYqDBPhpwBCXYnsB7rsiabiQxvBt7yjJVRZ1xWg4ZoZsqmDkYmCGXQLh1NP3w1nhmNQ3zfa",
  "key10": "2JepZb6a2vJ6RPUSKXxjwjXCdS9k8m6sR6y8cKGtrgNWeKAA17rESaUbFYjpH9E7AL22LuejxLcnc3VXoGJGRpp6",
  "key11": "3hf3VUPjrezxLXofrRyE4akQTb2U8v2UfUSvq4cWjWZWdN6eoftFHKGQcKpSrWWR8qY4CdYAuNXEfoeH2XB1KHAR",
  "key12": "4cSSTNAfvXQKi5gbyGk5QreJRUF1aJN3PaMkBTwjj2DJCLQNtcQZBruqrbtJDL4QWyRBPx3rs3z3k1X3sHyh2bqN",
  "key13": "3rMZbutLEvRQ6GhL5B2xpEcVVJL11C3y9cvgNWU12aP9jfAQxkcR7jMBKHh6mgN2o4Kkb1dCyMLBZkBjjYsXzjj5",
  "key14": "562pX88cAEbCs3Kg21PDXonhk7fhv9cfbwDsmDTbGAgaaxt6s1QDTN1cMnDk4GqVmi4Wzm4F4rxY4FJSvnXXQai8",
  "key15": "3YSUJcXeLYgvLewTMAk4KR95QFp6GpFoA9ztJqyhkyNm4HbuR1WkioEC1zqTmd47FVEYRoMAJDVU83BViCnjztx2",
  "key16": "544L4XibixfeuDKF418yZWrW7JZ8NYSH2kDMVxNm8QaVx1Lww7XRLsb7ww2HJBVHU2BMxAFf1sGJiBJtPoYX3kiR",
  "key17": "4iGRVhZYcMxQAwn1nCipgUynuXhwXYBw6dc7DCiobxTMFULMg5dKrVYxTdgeRfjc1s6W8vxJxPiXobGP7CSNLJCk",
  "key18": "nrsb1m6KzzbB63Wy2gG2z7xUk68s9S2g9LyZxns6JsPKoWko3gBfpUWLra7kLq4uf8TRmjhuggWwpEqqwbbHjgr",
  "key19": "2o2xZZ1HEpNukFUXn87v6S6TUZBe2Lgp9JPqRhojpXkPc3JwruD9obarW55dnVov2xK9X1xhzWhbcdVEgezRunve",
  "key20": "2t9UfJCjW1Yw2yA3agfnbCSMAQ622MWdXGkdS7Hu9jqebLwc8zXzghL9EYbEwzGLQeFxPMyeWGxPxHNRTaUkN48f",
  "key21": "4xminw1CXoSqAfhBCrLfNQW9TKmGXi3aX6vgPqoXid2iS4RXQtZF4AHtvv8HMwPG6RDnQTw68S8LHKUFkwKivcUY",
  "key22": "4c2o2CUUztSLWPnKFVAj9T4ftcq3qh85aPevYNokqUCqqndqBF8oJZScHqZuwjEUVEBLVegAPatnzs6yrW6Wq4j7",
  "key23": "4v1LmJMC5EpfyVS7SSfDJ33oqRo4nd2KYFmxs77oae8cfSaFcrqnt52mSxHnqidFVZUzffPVxjL8NKc8pGrZPRw6",
  "key24": "3KJsYArRL36u4qH7AvQNcwUyjBARWUn2mDawZyRcnt2LEYAAAnAU8czMTPcZEEtAs3kCDcBmKVpZWmNLvPQ9h3VT",
  "key25": "349roy4RELMJmnGXDUD4EHzdMJPrRwbMwv3mRD2pkhxWWE6sDzTpuEwnFn7MjDAsyGec1aKEXE48PaGkaBXqQfhm",
  "key26": "5YpyAGL2r7U2u9588PgEyEyLrJF3ZaPFDt2zBufQwcsMBzPV3D6BEMaeeH7zVbAnSVQvuYCdWWri2J6g3FJZGuN2",
  "key27": "5UiEHUBVmWLJNHzASUBtYqktFTy2RfHRBTGbbBgSkrRncQYvrc2WtWX2XV9cY6AmnoBJx5Yqq9CNfNaHS8WYKWQf",
  "key28": "2HNX8NdQpcDkTcAwXmqtNScP8y86jFi2cdFLX389N5TWEUdjBr9YyP2URoNgjaedxBXjDpYZTXtus5TAZuZW9Cg1",
  "key29": "34zbCBcXtHKryktt8qgsHiUEaCi8biEWnV4EPjt5ehpsCu3hgX1kFa9CfT9LdAyKJQZjqSWjc9s8HTqpdvddHpc",
  "key30": "3EqMiuBJoKx9w1uH5UdkFg6tcXsfF4kxBvCb2pFUVeCAj3jeHWZEmfM7fcHLe6qiAQhoYtQwaCYY9r81eMc9H1vk",
  "key31": "2Tw5ZniisxgfKm3TvCStKyjsFFYeiMeF1m4Yp613qRyRen87qqwj1mFiLQfwTdR2LeTuNKGgzorUC55wB7WSPGCp",
  "key32": "i8eVf1aS6wyZ8uUAWY6UeuQ9e3j5oz1pv2vZRV8NR49ad4NM3UkRagdUC5Mq2MYhfpTSt7jMtvhPCcvDoGJ1hPz",
  "key33": "4x1qVDZPtZmhKcrH69Ab8JcA6TVKjCYoWVr1mMCsEkWiNdGeziNLvR7d9jkybiDQv5uSsURGGFDrAHiEnCc1Htcg",
  "key34": "5fZ899KKGRVJ8CPMiBUNo8m4J3timRNz7cesSHV2visjJdNzGrChJjwwQZGbije4uvrr7pEjMSRvzkHsKcoqvza9",
  "key35": "3Emrea3wF4qmuihz49UnNrH1myBGFAcMABGvLv2FobDcsMqw54QwQdxLDPGTcFuV7qoAyJ3im6mHbWj5KERPPP96",
  "key36": "3xgF7uxPqPz6LYt7kPANq12Fg5eHv6Tp6LUsXfFDaFTsVpYVA76KLy1bDULMYki3PuBrW4RXeRJoS1rciUqAaLHe",
  "key37": "5qSfZM3sGjsyEXDS38SzH6WpYVj9tyY8LhCauAaL3ZKHhhuA5ErbC1299jVs3MX48vEtJVS3Xo2Loe6fNeQXza93",
  "key38": "YYLPLb85QcU8Za35h27ZVe8Csd95q6zCdm82pF5rAGN57rAghfq12AR33faYEXz86ibNtJmgWuxFxZMVpzGvVsg",
  "key39": "55kYPgdZKtnUFYtQbjsqfMUkiHySQ698rJn2TgKTrE1UkZjsbpu2cvXc2NhyGjmsNSNtoqzxqMBNACTjKvBewpzP",
  "key40": "2FZ8nzoQsRBCCiucf82eXEzh538KZXcmLh4cYyvBm6SLDVV7eWKvfeSCVCttGnH2wTzT6qijXue8k4oeD4akgucc",
  "key41": "3VifjNM63r6yRiwiey9V4pyf65fpLZaiXgri2s7WrbdpXqN3JYXecuZm1zL2ZZ5NqvcpzYPd76igfGiJKPDmUMrK",
  "key42": "5bj5qGAF34QH862NLqNwG7X4hLSKYhASJMe4wBDUnFLdKyYXYTvWgVDXjuoH5rt4GVz6NGEyJLeKs9VFqsiXs3kU",
  "key43": "64ACBmuwSeUAmjk61GtjWwRinSKU8PREx9qivuZjxJL9UdmW3P82ULdxYnG71H7yMV8EDFu6K64NBTxNsWYVprhM",
  "key44": "4WAqp4zPSQGciADjXmes4VNa3aGXKrbqm4jXgmQLYiCgBnUtKKrCguk5CBmWd6gWEahbhGsyDYx1jrXwKFNB2zEt"
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
