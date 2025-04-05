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
    "MpNk4rUFxTSABJqR1jQ6fgVAQPVBeHej9crqF9evK576aMMyBZHWiEHDoera2ebcksob3naoiwtjtdbT7DN76z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btEtbpC88WjmDu3cXxymS5gkjnGz1KBbVPeewZUEin12H6MPT9PJZRdun8DJRCkU8kQLGekwvKUhbYnj6s3Ebeu",
  "key1": "2PxcdPspXvyRJfKJA554p45MvpLkvFn7fLuwQS5ruZHnudza9C2Pp6BCteUdtSP1AoZnsGe6Y5jedqyAAbiapZLt",
  "key2": "5bBUKZ1YbSWcm6ZxhSmCesFo47doZMmUtQcZcGsCFk1STH2dyhkCHdVJUsVbj3WThhc4qMbJSehyqU1dhbgNc2CW",
  "key3": "2G5kWYMx6da323i5BgUKZ7ziwQ8G1aKZqwthz6tEjJicxENvHCfCS4QY3iLW7rUNJEQN66y9JKK88t7R1iStH9kf",
  "key4": "3rRBXsrNs5e21Mg6DW57jLxSNcn91dLwN2mz4EKFZ6WTngG3FuL8FbPmss8mpegfXeojgS3HYtdgEYzyv9d5engU",
  "key5": "5XE5ULTbcXrj9RVX8cWAHVW3bY9aBZH5yNmzcVxDR7MQqDGEBg6dPpCs8fRpngswtQZgZbSazQnAJSC19xBp3hZP",
  "key6": "4HPhDcV2xvvfiVpnCbexnp8m3qPDjGZuwaSuQmkWm86CD9rDtYd6sUaXn7ZXps6oNEzGdVPij1v9pqoFy1jMvopH",
  "key7": "3tGApMjdnkeyEneKohmfX66MhvoPYiXijvahTDsm5Uawdcgn4NjHq7Qjip4tZRR7tcRqhYw52shxAzM8KQZECJL7",
  "key8": "2BEcWXQyiLMmg5gcx4HVTT1bWumDMWDj5zQKp2g4w4b3C7PjbXDnViL1KDjcdpnQoPGhzBZ1p7xLDUw2TBBoxbN",
  "key9": "4sdhLnJWohwub8REfP7nFRZpyW6Y6ULJ22rVUPDzsnRfJXnm6wHDF2GV33zgh24ur8T3DkwdkPeFuYAjrjhwKg6Y",
  "key10": "5jBDJo4d55YUPKF1nxvkfJCYGVWRN6zWvwrSvVi8qFsP5GHjw4qPC7krzhWMd5r7zQjBvNhUgQ68vD3bKh3qkvos",
  "key11": "2g4AB46zMCRkLswLExt9AYxsGjHLduNb2udg6cdKH2fLfGja2cxvYTRLGxWRCF6oqxDb17eN4wwSdYReU7kiKDhH",
  "key12": "5oE1PUXT7F5yLgvNqLe6eLk4YxTQVZV4ZSXgqADo7ANKbdYYQpYnTzXsFsM3C2y2aWDZ3EpRjD94XYLZDousKA2T",
  "key13": "3cwXGwo9VEXzy3eVEquXkbGcuzpwKAz2jZ5XmcPEAoWq3Xx1FHHs5ryzVCZS8Eqern9FufPenwn2FyR6V3EEgNnR",
  "key14": "5hrFnwf8uako5jkHKo6a8XyAnRUkQb2zQLX7us4WKLF5hzMpFaSLVEWK3ypkeemLZwq6STZFjp6CfyjMQF8RSo6R",
  "key15": "3G6E9myWN1XUF14EXHXe4tewCsRQe9PgmFjLdkBcB7zNcvRGEwexaznLwrDs7SVN6rWZY2mZrmxp6FCxr6c6eagX",
  "key16": "5rAxv2ftdzUDyFKPbWKGfNhYib1QheLYiFY6RNnCiZh12PGrspCjySV9L7vkJHsuYfdYkXfgEP5CbNmrSZuX5LH2",
  "key17": "4KCFUKAcaQUAD2DtkLaoCQVfcfWThFxL9sAo6DtLvvtyCsbKmNrWgzveBcE8EJhNc2PnPA16g5e7vTHMGSjUuAHh",
  "key18": "3eEVtANqg9LvxKgAaTNY7eiNhmnAwmJinXwnJd6gK3Uu4Yb1Prf18aKcU5Ca7DhX6ruwq221tFAQLw16YqhtCyrt",
  "key19": "kXusXW8kGr2y4bGXLK1V47MLaB1kHo3kc4PiZYCxkKvh6KyBKgT36ezvpuUef9g8etwPRKoo4B7hUXemdVkzSVi",
  "key20": "h8YU6pLxVb8hy5SfDnHvee2bzpCLksfbeehxVTUsMXYX7rLf6uTaaxqYJ7sZhoqmswzn1Kg4QAryuPD97hCK34C",
  "key21": "3qbAFicz1kpUTY8WmQY8GCKwHAzGwwF7WR41ijrR7jSBb8RMstA9Z6h3CTjmeM8jUJhym47NucwQn9UCMEPYb2rX",
  "key22": "3DfU4VQm7b15Xu2eJA65ywDFYVSm3cHX1Bsm4afr4ZepQ4sNgqDaHjJfpRucCNhpWNikPJZFFRMoPVAsK3And4j8",
  "key23": "2gWj6XxWKeLAiQHnc4cdx6MhTiXpyx6xKHFKFbZpKqXacXAX5kzbmQxdbR1qq4Bz4nj9DXzMrhkaPASHizVMixof",
  "key24": "U2hq2Y15PDH8bHM1ZQnkbgnomdD2kQs3WprceKHWGRGeJHNPJUcoaEzjB778ZZyFV82GXjdNMDdLbTAVtMh2KHh",
  "key25": "3sD1Jt2Hf9sSDSkc48HWq6pfteykuPe4YwcRnnbpYACavoCQurKcEJp4fjhesv3reXGdkack4ysrCuJd5YiZYWX3",
  "key26": "3y5Fjgju4yszyCTY7MPfYfgneHmG5kTufBXSjbAwm8roAkbQBcC4sKBhzchXb5gvwQisUBbnmSym5REwtahUdu6g",
  "key27": "5cLBePdjKJaktoZNoAvQZKMZedECC4vcKpWw2UABjgkvfNmfqAennztf9Dt6jit4uvxqjNSVcvd9rvSQTcg4xMad",
  "key28": "2hyY5HAVpYopt8w6Ybcm7Ng6d1FbtAjM2wGJTxcPsnjFCdJDmHZpK7iTPCUesroP9x9jSZ3a8zCEnW9KK7SusX8",
  "key29": "3KAqazS86P2HteTtkmprUWqY1LwkPkUs51hYLUGJ92LwqcvEkfYfuLMcN834TfrNCZ4NsGWWJeGbsUa3M8h1j7rh",
  "key30": "4164qPwYBZtYsf1mhbRWSz1AkPN65xLy7a8jYbCshS8XTBcSivfZLsGvWbkbBmiQGZ2jwnLVVGnSNAE4koTiEPFL",
  "key31": "37AUne3KTwnJ3LyvA1FigxYU57awUXy3omcjzSop9zf2rXGfebukX5sai9ebTdLTjz7hRCN73RhGsa84mFkFAZk7",
  "key32": "3BRB893KNum8f6BHNn6ZfjKHcDheRSFvf6uJTFsMAGrXLCsUTY2PfTnY9T73ffqwSz4NrZSyVjcD42dxLvnpNzbo",
  "key33": "3zhdrAZcf64EmJHxHQgpof8Z8GZYmf1HvwW74qUCM8K4YFAucnyrV3Apg8yyfJw6RPhT9QaphX8GV5kFP3KSew14",
  "key34": "Pa3RtGWSHEuiSrNpL4inkeAnz7mq9y1QqfineUVt7g9n5b7H8ChyiVyraeoJL77YriSQuyBVAXPLFFDsrrUaT1A",
  "key35": "5NRMnJatHdRXdaQnwfxoLthibo4bTuPS6FkB2VXswARPbPQDLjH2bAuMb9UU2z6U8GV5edcdhDHuFNzKapf3Pquh",
  "key36": "42gRW1HcqArQtcXnqVWpnepBc87cVHFq3gpMn1UsMF8Egp3swd2oi6jUv8fJkGA8nSyvYJeStALY8fP1SUApnHMH",
  "key37": "62r1WSc3rwMjP6uERk7imNF5BgYnLzvATeoe9fXDXveSzN12kKrocdjf86isLBY86xaup7gwMBV8w67pqYSFz8fP",
  "key38": "4Djby1otZRnH1ZNkU1mxaaKTmoE4CM8Whxer7PG1Tvvho1xSiREtAngyRV19yzAAo4rjqihw5h3DQJraQdK5cx9V",
  "key39": "3GtkSU74PLdhXdTRcbLtmA2FFVx939deAA6pHmwHWikQFcz33tLjMHeFZjTQjeRCWYSSrXNDtazHgBNB9Arwdq6y",
  "key40": "2c5SBCvRuu26c8oEKS5s3C1RsQJdY1N128Vg6e8eofhYmNf5m3avpZuTTA8nyCXJfm6Dni84DANoGf8uAPKLdvW7",
  "key41": "3CdcxdeicUsnACKKCPPLqYMCvyEXBWbsqh7wteLNvyRqo6MwJEbjvfU6zxAmcDZxQZzwNy5WpZGHXnomJtsysiqF",
  "key42": "Rgq2GWZtVJp6f6GfvGNwwG8WPHZyiZTCMumoFyBi8r32Bg7shPhsus2yy285xzfbPWaEKRVCwaWSnv6rBM7dty8",
  "key43": "3J7ki2cEmYGi6oiVyvMGsE7HCT5KiqahTysoVz9JLEvSiVEkaoBbvZfyz2UviVx4cYDtSqYj95Gi6z3RW574zfUZ",
  "key44": "4SBbrntLJuWbKLgr3RDYXjYAXoiYR9xRKYVkqGMCBhJPkpMSotCTMnueBktCSP5AzdAZrecqp95bSmiCibe3K6Bc",
  "key45": "SVDii6JQfviqpGXvGma6CmnWcj7FgpbjJZ7jWfrCghs5fia7VpvwdJvfGrTg2rp8WLo5J2abisZzzirkw4Vt5og",
  "key46": "4n9Vt4UF3vH35JWM15M3w6EHxyjA4iaSLbRpyxNQ8NATwnc29eo2Qz3f3dMbn8gDxTWwU46JRJQKHWrUmudNrVSV",
  "key47": "4WXZscqVKjdudpXab1L9XnvBDp4ovjdyfqjB1GmfYbbUWfXzfLx9HAwWRKNk6b5TrDg4x4tNTW3r3fqZRbh6DFXv",
  "key48": "3TmxtiST7wkMaS5QtPFVJ1tTskGKwwMDydFFkNMQCnwnsFLGgaqUMPosnGP9BhKG3dsajm5tKyEyroLwimdajiC1"
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
