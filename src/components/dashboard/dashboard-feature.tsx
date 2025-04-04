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
    "2WdZnsckyyMdBzGPzupQNQeL64Cm6uSL2GUaT24WL6FdbkHbCUkrfDW8VkShdPW7su7bkXtj2HkYtuEaqedFvrC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLjW2kR8k2ct9hSzvpG9fJCt9VJsyyzFyQvUSaY4aezYHVduiRPuSkd8YzC2Uxu8SRbiU6S61TwdbNkrkV6WLy1",
  "key1": "3MePUpatQtVsKQzAHsTrYYMonrhXJcXVYESVF1CCaq8HxdT43dDBG9eeCGttPdq9Hz8NEwA61LYzr8EBUZUDUZgw",
  "key2": "5ccBFar2cx9KaaSmAEm5DVBayzRCmvS6RR6K7MSMXEg3NJBQMEqiE8YmksEdUcShsonN5CCY7yWU3NCsnApCG69A",
  "key3": "syoZ97cQsEohMeT6t5pVTVGxvBXwkasxENPJCGh55jPXPnuQ3tnxfbzZGNNdqanzjagfMPW4JpzW4TcBsPbp4JF",
  "key4": "2fpZfn1Pum8YHEzZWTkYb9ZD1tMFUi5XtnGBKxL8Rgk7emH3RMMG8sZcThWH9YySJuySw1svaTJk3L7wmkYp2vvh",
  "key5": "4sfPqtEjHUTzfHJihbhNPKEJE5eAH2NWfm1oVWgWREBfyshAimchhttuuqtczYjqetM13fMnCcqTbKQwxzBD5cNi",
  "key6": "2hBc6Qq3PSkRZ5y8tKLQVnWEotSftWxcmuN9AU6pX7i81RVm3V8krpJpUKgJEQYQd3STQ69q3wiNywxGq2cyCrBW",
  "key7": "JsmEoo6FayRdFPSHrRRBkA7XFZUvXNG6aKhRRR7MfgebqrM7NEHu9HY4G8RonXBi6FUPUyUQHDhEpeThkMe3RPj",
  "key8": "2bZt3cwwZQSjkLrKEtABdyMwtsMCmyQFHhkumVSzK4Laj13rcqwFLZcGxArWyTPxfPhzcuHTwjnxXuKG7vh8fPbb",
  "key9": "y3FnR45s5KU9n3YhVgNavNUCjT9aZF5xMyNfKKiKTi6nKk1KiZkExmafoXspJY2zR3x249V1e6W45A7siTTWhuh",
  "key10": "2yBAisVCgLb9m1w12gmj56HMSpNzVB8B5nswe62eQt6b5BN3w8ZJ1LtSRmJKNXRsosSVae8E4bWkmrgh8MvesG3V",
  "key11": "38HHRh18Qz9L2JmxxSYH3SwnqLqZ7vFGAChhNVWW8Y8LRwWzq5HJ1tM9RMnu2KnLrLmbx4rQyjnsbR1JGhzsR2zS",
  "key12": "4QRwURsNpRxrGPCekEGFQyq9mjXdBV7RnCMRo6r8YNqoNmjRyLYhMYBL2fMN2QNpGThaSTdo4TzDHpbZL2F8yHhp",
  "key13": "9x67TTjX8K4uvKkLU8ruPf6R5w4zB9wpAL8hN5wfCN6xBbUoFStf75Q7z3bUon5pbSAJ1UJ1BQjCJKw6MKXqaWN",
  "key14": "3FqVhmgZM4PWwcqrp1Qt6te7nseMwZiCu1dUpwAQ55Ty11wjMoj4R9cJyjfwiBEAncpjukbuih81HXpe48aeQzJH",
  "key15": "PqG3VKovhCNkTk9W5EtnqwDjk9LcCHkQH38gcRKJ2Uz9Zofi69LWsUJyzTNSJGRM3mKQrcQnTgct5Rj73LVku3g",
  "key16": "mFd5RUd2Yp5Fq6eSKDEFPzVkBAtSAcSUgETqURn86H9WxztYYUrp6ppb8Lo5UmP7KZLfU9K8JshkCY2sFbmFjwN",
  "key17": "cioagEeijkbgzkdza33eeZ1m6brJ7kAgiPkpi64U6q621qhUhVQZxRdhn8GCKmRyxhtuPhCzsaBeBC8xLcj8ji5",
  "key18": "5xBksJjHy7iG5g6BUMKZD5k8kgbqtyuSNRrj4DbGWpc1jxzd6bZaVu6FAqxbzwxu4DGZNzp8S7bXco8qLPzu7ovL",
  "key19": "MChSWq9LjLaVjzTtpbkzwAi9cwMwpfge61LcWEC1zqBfxMojrAULsKQzdqDDtKc4Q1zT8ZVWPmbyaQYfGdtKX4i",
  "key20": "vN3x7TAUqsuyyY857KaUTXjfQfVgThHAMi51p38UAkU9VRCv5tMvMeDaJEczLALiyV2kpFHYZi1MaZUeoeHMxJT",
  "key21": "4Phuv8N5jCnWfv92EBaVZ54Ev9hxoTNGvhck5eRdmdXhqb88jRNWWG6aXxFrwm5q5ejVHPe9CDCcnqsFdr3Et7Rf",
  "key22": "44Udyd46oY2MAvJxjZDw3Fzea7RgYQsDKqPfE2YELDDqw6GgY3mEqxtC8Lb5giovKC5FVZrPAWFnyKbhy6YA3HnK",
  "key23": "4akr8ibwQXNqgQQ4t3CGR3jTChHXWs2u5LCbU8Xn6ebuDyonsp7uQ8A1kFnVgW74o6crg6qiWhQZgnq1eKTnCE9k",
  "key24": "zcY9ZtWR1Kkmqr1gPbqZUcRmngMd9PyTLQaSCHUdeqKVvYUrqnYV1g52RsinFQJuaXyjJpuGRnNtHjus9ipEBWZ",
  "key25": "r2XqT7mSwN3rfrhVDcPWk1HjZW4JTLCn3hx8tArNFVcyddXMmfoELP4bTbiA3KxvGnBiEcmKqzVSsLbJFemcneD",
  "key26": "64TSweLXVXvhVC6dfGL5NSGFEBNjVC24soADZgwW9qa4HBQ9mqfVmNeSDZ49q1WVTZhYZUYshCrtPtFmize71reo",
  "key27": "9aoDuP1EKNPkcEJ6kYQAgbZTEA9Deaofc41zD7bhhdDUk6beoRMFxcqzhPrHuJyYWHUAnD2iQoQhH9CG2L3e88E",
  "key28": "QQkCmqWDRhFTrA8L2kqhYW5Bhb5Rt5MgcqriemW7sit6GEvkoNLSK31nXpUh5KvEsZ8EsrTQWyQHnb44Jajdefb",
  "key29": "3cGFtV99imk3Hib2azKYwztvtZXb32RgBoWzU5pwBsnJ6b961mgYQ5mhjjqQnCPMNKvbUEhynZuA1DG7ZpVwVsik",
  "key30": "5D2xnSwV7sHAss8Wbaopefv4UfVpb9Yy1gAGTd2u68n38hwy9zJ3kwmMvQi913ByjFWfKU3zGM2uAUzfxczdp6Xt",
  "key31": "2eWcNc4AvvWDjQPQwu7SdbvyMsdP7Abr2y1WUAo1fVcZ7e6v6uhdMqz7BW1SS6KRfd4WeQ7u22PryWEkB1vMkhG5",
  "key32": "9q4yvHuMtTGQxw8Neaji6mYDAW1Nmnr1EqGFbkrF75yKpjDWQkyDAFLkieHG3ALGteJyabJCHXD4sERQWqjYDXD",
  "key33": "5mFcHJnGPTuh3V3LhGBmbR6HCf1RSiLonKSjc9Qo2Cxgoh3qc4P3tDFKCuxi9kmwcNwHa2zSgJXWKi2SsMdetbtD",
  "key34": "oa3E3PgTYDS7QhyHZR17iByzzRpkiJ8KHNvQF73mtCSKsGw8eaVcp6hRrPdcujZS1RdEVVxsRhdp7V9Hwzesunn",
  "key35": "3q64HS38AwcffBJuRCFm5YoyXbMuHGHxrdmNkGiGoNV1nkP4qnCEfVhhHFf2xZSDjAk6ASRJeoSvf5oNDpsYsyUo",
  "key36": "21DGs71S9W7sMRFinvoy5maP23KMN8pbUGUr8NwxDFeQMsRocw6npvitvK15c3ktqZ8CWtZ8i9yLRW5TzZhotjrJ",
  "key37": "61VHc3rbecG1zDcp3BSFXXXQEYMUrcdXLTsdvtJQRXmCe8KCxZq4nwu9Ebyvw9k9V2b4V9eSTSn1Lot88VFCyJnw",
  "key38": "22FUMUH7apBYRPDYbyvkU8wgC78tLU3JVUBKLxmjPRx8GggLBpcbrQrAuSPdDV56PJDhtdyDh2ZTkUgVJjpPgjop",
  "key39": "7s8KupbSc7XP9hKoThpyhMzKDhcDtw18fKMLyhVpqmtxv1ndY95LuULaksvAf5grBfTxWHqWigtwV5ZYz2osY3M",
  "key40": "4VpTU27oYzNBjvArXANxeLwT53Hcq9VBWDDz7qtrpZ47MY2QLHUK6c4uHiosGXxHoeXmUn9ygdBVdBeCQLU5q4fP",
  "key41": "4QRjGXWkNegWkJ5jsqsYMe73an74z4EJ18jtNYbLK7eCzd1MFn37A9JiNFEZfoeqqYNSzXAKr81y9DASzMXsnLNA"
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
