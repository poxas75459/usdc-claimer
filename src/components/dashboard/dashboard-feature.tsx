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
    "3QLNEqhi1w4CTZj2oKV3xLmo2G6tiXZibwYYGvqTrEZfthXtW6xVTJiNHSXRibbhZsmfteg3wmN8vhavSmgQ3RWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJr17RJ16HaA6N7WemtFWq7cA447wYofEGzB4a4jJDwoRJVoRQ6YFz8Zb3VBHMEFsyBo8xdCoYgbnDGvzGz2bic",
  "key1": "4H4doSqgzwVGLQzqTaKMA1CCrWpgRUXacy6EjxFvwvhvZBcnm8AZE9VhsihQ6kEkiRDRRi7azAVt4GUSsnMnmFSQ",
  "key2": "WJ2Wqq2aQiTW3BWSnAhSVVBreX4xsY8B97pFg9eRrj1bF9J2ay6peB3c7xXvjXfxrv55Yzrxez9bcKmFJuMsGTg",
  "key3": "2P2b5zFDLmGmFhrimWXq1PcZ3yk9u8Sgjn9n6cgEmTEdYwstLjhC2wR3zpdWdnok5JAh4p5JXPwDY6SDKWAef7dL",
  "key4": "5RieATy3Vn42vvfWCqwxXGweDFTKZ27Tb8iroAVPeASiDrK7YwwP9tN87keb3moqGWyrp9AYHRpcQBNdWB28C1cx",
  "key5": "9vTiF8PykCbaNkGQtGUmPw93JBYrex5DGxRCgLid6WHLB72msE3fKJxoreNQ4TKPHXY54KWj3y5zvhrouK35EkV",
  "key6": "3Hj4x4NjE53RmEdjsDyCV3WJazJguEhnmoANrmCUg8PjbYUj4qhBBN6hjrVZvQtAthfB1fU9vPYXTGz8FqFw3QuS",
  "key7": "3KsXs73suFkUZyh45Jh9RKbA6pQhm3ctM8YtiBX5NHJfYVbsbGbhL4uF5NN8MHw6XrGnd1CSeuiT76UPvszXE8Ui",
  "key8": "3jzJuiTQPARnyZMGf7DqhP9KVwg4g848Cwa9i8KGvEfAdsznxndWzHBhyMhmtw4tVNfZ9kkKeWKXP2mheMpdUnkc",
  "key9": "33EcUiBo2X8PSWhM6i2ns5rmjRjSWcXdd4DiBfbmPtnMtWAKsYQ6aQ19HWxrQwSRsmiuuWydUrwfzH8SLt3dEP5B",
  "key10": "3YSZGCJCfjT2E48pZ3AebMu2zKUBMYBHjJFUCDQu3kgXokJSAo7HNGgGfSL6ooSyTqcjadqsATnkrUV79VeyvTrZ",
  "key11": "2WJqF8Etcwgo4qXNqfFnWEXKqS49BiP2oRwfkbPte4FhFHhtCwvSXLetnWBJwkRPLtgR875QQUsNHXKdCx6tRYrq",
  "key12": "4omXHqCVjLydj4JYpyZj6uyHvYhhVaWEWvtSABLNpUVNErxjuiqfZjo29tq8gZatk3N3rH28VHSS68f8mnh2X7Af",
  "key13": "5mEWXGYTZKqGfCHMr98B31GZ5V9CfF2jHNwoMkoejX3STRnA3JKZbV3bYnpFNxsPyRz9No3bc9xmaoFGxMyUuag9",
  "key14": "2EnKRZgBcghrMG32zSsLLg36MuSWkwQqJQuTg6tKFHbi9PE8y2pRYMDDmm3tNuvxwovH5m5Efxz9Vj8DxZvz7RzM",
  "key15": "2xQEnvpZLuig42A19RdMAZJseuRXPAL5ta6uXJfgQztpCF7TRk1G3eMwZ8wAT1Vwt3iFfihjjf7dCDga2QGFC19b",
  "key16": "4WELULvqTBKzCjCbcTK6QAzoVqtD5vTR6oCK8ezLUR5ovpbaWqaEMkN2PWbrF12Lg6YcTnZnPXfadwnxmZbMMQ92",
  "key17": "5SYj1wZpcXEpgfZkWxhXcDRCQ5svFtBt5yTbLSSkDnxBCSh29sZE6QmQVDN4mZaVQZ1S8jtV5zE5Gr1Zwh8i5A7u",
  "key18": "4493u7Y3v4BcaaFQqsBtL4ZuUSsECB4AymRsU4zbVv1ttVmRXy4947sk88gHqtwsgcSef8Mdnuh1uDxRBjS77Ab",
  "key19": "3YAhqqMjr9WDb6MQwNtut6XTtCDLRCiDKEUUJGY7CKEM379YU66wK5PUoTxbRLc2eiZ4RyuqSDEpLemVjVETzm7c",
  "key20": "qwVS5j64kWCDDfRLRf2BmW2zX3f3vShAqMN1wH4Ue4gmMj2TFy4fZkgcGwMMcVj6kXbsr7HrmgqJosgpcD9U75j",
  "key21": "4hC6B24MBuTyKSSSndy6KQwHHsubMzPRVVmSU84gGSdEiNqQGSf8yw9wZZsaca8amxcBQBBhgNufxZBvRqKsbSfU",
  "key22": "3CLLBYmMXpekvvgZhpFJWcLG2Vqnwk2eWC2oJHdHjhsRP6vTgMPU2uVc9GUVqx7WadWYDHU4X95ekxQeeCuEr9gt",
  "key23": "5cshLoUz395o9HNRABkrDYN5xer4HmK8rUzy9dCrgEwvMWVtEUAsc2CRTR1fT7jLXxMPpJ3kybYTh9i13SmHwsWM",
  "key24": "RChjgsi15bXDymDDzti8yq34yKNurv3jvuuh35cSiiy1qwASCcM4y1Fg2SX6TjgQiwMho5BW6JFiqnL5Bc4xq3n",
  "key25": "2jtiTkGn2CPTEdjfZWamjv2uooayF23fiJjLZsUXHcnjJGLjUwSin98LhM16Y73betjFMAheFjBQJ9bKy36CTbqh",
  "key26": "5VU1icVBgu3WgF76X9wnSvcR8TFMFepQegGwcXos6NpnfJ2nbjJg8SKrK7pxg6jrR3Xj9H2cSgT5UReuvmCZBc2R",
  "key27": "sszujH8o7gwXM848NVogCvwqyQSxaufTprEB4nUh7BJvDxcCC8efVUyLqmtec4BLzjq26Gjjkg7ew1yReoT4kSJ",
  "key28": "5eRF6g6H1xMRkcXP824NSCMrFBAwYWaEnfvAfWhQ6rEQaxgTJysG1EjtQBrz7juvVP99u7PQFco5kENxnwQoCry2",
  "key29": "5tEhDMyYbPxgAbRtuT1EFf4hvCD3ZZemVxcFqPaokbEYRy4bP9317xuRnLGzJCw23DPp31DQEp3HBPJR2vKCcRdv",
  "key30": "2oZN94gjnNqQGwGTYvng8kjqNx3tBHkasa7rGWehjiskg9H4PfuAnEHMuuGU7dbZuvA84XqQW4fxLwtRWPQyVDz3",
  "key31": "4nVSgphWkSc1camMqHatB1KrnKNg9sTen3e2aYQ6ZyAc8PS2h3ydgJFrnJHtAHZd6u2U3MKjB7Kou1gMRjBawdVD",
  "key32": "2xkBZnxvMpttjjduCid6s1joFbNSwU47aBP3EJvmPYn2sdFTE8Rxi65MQ7gZsSJsELQ14DDW5sMxzwp2JSXUNNhG",
  "key33": "LnMJBQGksEmWVkuKytXnxW2sULRThEioLBstFHMkeBBL3WAoTKEfWTiyaaF23E5P8JX7YbjtxJBcZFo6K1Rd5sA"
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
