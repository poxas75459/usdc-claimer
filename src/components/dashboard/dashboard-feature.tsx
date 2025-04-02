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
    "473ZeTkGrPnuJC1inxh2Fk7SkvyTJrJDJtjUeCyV6DU5Do65Etbmbfu1TsGbwGE6xqWefw8sHAUwZfZVEnPbzdyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJrS4a1Y8kRpCwrdVmJSi3MVwnzngzcfmYcSHqFxUAbX1hJ74Z41djXF4rCrCqZyKS7xuUTQRCm2rBJe8WV8RDw",
  "key1": "3GbGPiZK9q8PidHkxHX3Sza6szPi2RmNyQsGw1LRciwBx998WizWmeKugBEe6nxnsuu3rYqcYbbtpCmE5wNG1ZUj",
  "key2": "5vfakyJUXMgMtTAMJPuuyAQQi7xFSD2LHiabroETWCjRHzuVj6QEB6kKVykgm2jakFJFCMbTdFHjZ2VYiBaU1j74",
  "key3": "2VfUmh6Mqs6mDSwJDfGvJ6McbkYNKLPD6MDGbdfkihBt7NvKKMoo1rQ7k8rwNoUaHf9gwBrHp4dAWT61ozyAng9G",
  "key4": "5QtUji1REdAjbcFnmfKw7fwp3UmjbigmxJRjBwinLxu1Wc1mCme2AKcyX3JD9gntbqUqeCKfVH3SP3VMqMeShfMT",
  "key5": "5m8CLsDLMaN68zpjERx8UD1jkpugbjCGSG4ZYmhqjEDB3ARgAPcKHvK27C87wxnhEXcE9jP7dZTg462KBzv4M375",
  "key6": "sxk2sYS44KJ3BD8bzTpzpzkcFXryjSeRzCzFAjYAYfEVeSbqLy8966szZHQdVneyHxRBCHzz9PaVU8yNEYMLQdA",
  "key7": "4QkwHdqCQxbGSSgtpPGZbNetoLPq42LQFaTPRkofXiukDC9V8j662YC2dP2YrkCRsn9kk4H8hrDsKZV1GHhPMGFx",
  "key8": "Rh9HbciJTAK9s2tg7s4otX7LLJZ4ZzU9Eh1qm3shyhKrRyDzUpqvDoyuoQixn8JG5Nh1h3tzcYKMvDwtrjRHy8i",
  "key9": "2J1mtUV5n6NCpG1zh4CCJcDfe3GT6UA7kHg6ViAXNnY3LF6r7XxTkZ72puiPip63Khqyj44YRfjazW6PfAKpysfy",
  "key10": "2GJ6w18ez8rEWymU9aP2kf7KHptTiifCMAAUsWifdSXwYQeKkbSymjWt9LNeyhrFrxKScvZ4CFZETH2HwV834V4P",
  "key11": "4TrZsYq7JhqWERFYYJYmZ3Kd4msZUoXw8MN8e9t5mJ7DuSPZUipPBaXrnvcaRbrNupgnfBWwfqF5jdRRZh8phCuv",
  "key12": "328bXMdFCW1sRsRdDKrKT4xt8v7o1yPLbiyiZgNh87vE6BuA8KjagZn8hAaoVwnCMZTgQNgSvh9dy5Dd975P3Hat",
  "key13": "4jDiA2u7hRFsGxCb68SJ65i1zmXtSV5tryjBURaxKp3teBLiKhG9vHnSTcbjdeLZU4yTiidic9WfJz4rTWmZvusE",
  "key14": "4ns1YVaBKoKH23WGqjNMSV65hQttKi4pVhET3Z5GFxq6EQhbgPUSLQLdx1Y68GVZRVNT3FwHoHbkZBBcWZ5UXx2K",
  "key15": "wGg5GkqMGDTffug3CKFBLHWNf21Bqoeu9AaazCMuk5vtmTdANNZwN5JhMdB3a1HqNoif7oBSFswfkKLqapvJVeV",
  "key16": "2nUnf3Vs99qtzF1YjFNLAyzYFuuZBjeh1k5zHuPX5NELNtYMN6zMk2h943Y6XLRNVUEkyAHaiP5joNw8fSbdPywz",
  "key17": "4GJ2T9yu8Wj9DQQYErdnpYHjbHgiuSeq99hinFV1DXMUm4Btz5MQxu8HWG9JmGP8Zzf6Fwhu6NyVUcunLkDEaCjk",
  "key18": "4ub2dadPeNomX8kcHMEihcsTmzenYytNVhVuHLTFRSDaHjeLdYHVVVFQmsq8ZWgSsCXP9b6fMoCiVfRESxyZ8nRS",
  "key19": "5X4AgyhC5h2tw9kUacAVKRYaDK15mY913U17NhowYP2BH2R6LJLET4BWQPfjmMrvGkz7DtST4r8JGfze11dMcnGv",
  "key20": "4eqycekRBVLrvv9i9ERQGBrYHjvMjRQ1yWWa3DcXHTYcJxmUxzj3z3soq1L82ZfUSRG4F3Xo3C8hNHDaF5LyfWKm",
  "key21": "5xVcz7AAnsowxmhUPSoVpeE8zz9XgmHMPsFiwvsQzn1R8g7gQ9vHM7rNtsH4ZoeBuFs48TdXy5uFyTJX92CRs5LX",
  "key22": "3YsfaZFwG3uYFkrD8pBmVSnvgUag1rTK4FDVdyB9DdbTVpikrD7FdsLDoVPCAtBpAsDJvomBWwExdQ8RRkkBf928",
  "key23": "3UJVG5joJ7TJaJzL8HF6k82xBtEpwChaCfKjfWgQQbRuYYSbnLF4e4AXshZdx3e1TmwCAdJFn17XxY3fGeQeu2o5",
  "key24": "5HAqB5TdtQyqgyhfMhWSFKGUorKXCk3QTxmgzdjYZGS1JHn1Bqm8zcRJfSnFdvNKHA4EZqVMoVjePH6C6M3ynUsj",
  "key25": "4EkVwEVhTyMjJGHKt9tM8FDKcdd99i3wn7tehvM3mJyGp7QHEi7RjnAuYpePUm7sCdbbMyqqwi7FWgJ4Dz1fzEGu",
  "key26": "ktjfCH2oniBZhJYhtn2ccoXsWUfwtonp2Za8tE1Gicdtujy3KZoVD81YuSsTRwNKyUmBTrfSiU8tiSbYbtfKj5f",
  "key27": "yqPa8KmVmtXgMvuv37Tf3GiLNUaaefQQ3wEYJ5QuekcqJV7KW5XToBy6rE9oihGs8ZTAtWCZ3Hi967wgMJsY8Br",
  "key28": "3jKDGkGZuj97QBQMviePdNtoj5CS8VYyEduibAJD7qii6iFQ5smB73xFmR1bE9wUnrdwEtHH3oQ6zwmYLzxrMJt1",
  "key29": "2Qj2VzAyrwY2eUEgiMxWNSTQQdY62W5sdrd6p95zS7zoGS36SU7GzhwugpdFkm8SXZhefScZuxKfJPpTzkeLTACu",
  "key30": "5uv47fFNjuhdLrK21iZ98cqRwBxrCpFhWsSqXQfi8F221i7Ytjbka8Ub1FcjGVb159YU3WrRs4Q5px9wtk9aid5g",
  "key31": "Rzq4CsM4UurNe47NVFfAZFmqB1ZHw27bKos3Vys7CGNGw7K2E9VXXiUEmjDT2k8b8JaJQB9hoGKr7jjyAQvg6tN",
  "key32": "3Vuf64yN6EiWcCagk9sXCj4PWXqxcQnyNA7GHZAJfriUb9yRCeqemMujGhXcYYdDfgD19EjoMDScHU6akjasybV8",
  "key33": "3BzMX2c391p3ai2MHZKDyottAZJdaP5r2MSuAcSe5EC8vyXUVKZPn1xUKnMdfiUV9gs94X6zcJUaFEDE2MsogRsB",
  "key34": "3P1HCYbSVNSVCJWLKAuCJja2w6of8XLiFLJ3CxV7ChL4kBQ7q7SE8mAKD6Me6gX7se57TDHc9GznEcv6rMYQZxHr",
  "key35": "4KAUabMwcnA7Ag9aSy38UEXbvPUNV9TTvjEjovP6HDCPPLCHG7jMBYqWheE5QC4bYN4PZr4Ai6YtxkzfCEk38XTf",
  "key36": "24i4XejFEq6qWmSyGPYvd4XPwDWR3P6gfrqrAf1mAuTCm8fb11zzoK3SatGAGLJGBUmc4nQz2USA9SXAdCeW2H6n",
  "key37": "2gUVeYZ43CweiKrohGyXGYqgJuYyduANidAG1gYQkJzb5RxSMVWdvREQSzA1TyPcXSetKJLUWihPiz6mrNXbuPpz",
  "key38": "2dx8HGi2FG94sTUhhepEn9YaTLmZ4AeFsgjnC5QANUjyWpiKvWsAKv3yV5zMmHMqdB2kwN99NbKZ84ch6DGMBaX5",
  "key39": "3DGTMqdRWC9crdPti38rD6DaxBh8mTfqD62ePwfDaASCeLP4fNFw97yFtyhdxgoZtn7o3vJtWA7PMfDcHgJeNvFK",
  "key40": "DcvbEX9Y7irf4j1Ebb7krD7JBe1CDTomrHQj5C4TdxezATnBGXCrhnfuSEZCuXfdVxtXPgxcNW4zs63jLj4KPUw",
  "key41": "3eY5Te5TgmMZDgAnqrqy4neMU4ng2JdpBAADQebogcxXQuzV5otUVeAjwdrRK3x1irxgqyJUhxumNE3wEj2vuWZz"
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
