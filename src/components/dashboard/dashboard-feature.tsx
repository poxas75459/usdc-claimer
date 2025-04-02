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
    "4Jk7VGdgv8oieidE9EoZHuoWvkh2zg65ABDrYAhtMfD7kMS6BGVsDjkVLhCmhd3NnKGCo1VmgvitBdXb7jaFXpTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2y2RzEwEr6wGWSQEPidQ1amjN1Aeas9idVUZ8dbfQUkWqSachPHqcVvxaAVpzw3DXhRiNrao78N5jbyxfoX6LW",
  "key1": "BXNMpxrDkjcY9LcYoaTA5YN3DetmzmmEqW8DJKp7PYxKWUYZUXJyDgifqE8FgU2Zro8KJitH9hKzTgVhzyCwj1d",
  "key2": "4cqdKYTwnV77LgEgCZnqeCYctmHCSYM5x8VSfimQPypgWBrw1iNRUSxgtk9hNM6ENMW2uzte7zhKmtw9gJJsG4ru",
  "key3": "4jTcdLNPrMv6do9q27UzYRe3FHebGSjCFd8zsKG9Vc3G4ozYFRXmyYzV29LboEaKq4sSo8Kv7CEsQ9a4FFW1LMK3",
  "key4": "6LUjQ9EPtGyZswdv3vyyCzs8yH5wem31c9k3mRcFqBVjWF8XLm71Nee4xYDxRPS5j33RnEzAiQbTRxRMEhNPqL1",
  "key5": "4vZ2zgxX5S9zpyFSk537Naon794tMuNezmvgK1TWyNehVFXjuL1gC9q6L1zbpcRuxdJgcCuYuqmuaPfH6ieogttq",
  "key6": "584NqaUpghFbUN5f5iaHYTbrMq4PzAMKN3wDZT1KQ3UXSQ4PxQ3jx5WHR2rHwVYhp8YqsBVYYJKvA7iY1BJeM7Cq",
  "key7": "4jgCHsMbwT5ZjJrpgD4Au8gb2gQeUM8ZhRPDXRJggU4ER26PmYDQG7M6HuVCVaseN6hZGVCmkZd9eMaDyrYWUh6i",
  "key8": "5Gd1UyuvZ794Dbt71MAXuS9y123HS3daTkbBR2YdU27u5VyhKagyxdRNNZcjfGzXZ7vgFPAxmbzCZn49T9g7oRTq",
  "key9": "25Kfg778idHqDbAdwybZ5XbdCyos1iznm8VyVz1FauWfxSiUUnSYq7Jm7Vbgga2FvTuXQc5MpLHDwAyt9AgAp8i8",
  "key10": "5o1ecqS1RLanMZAQrtcWxpUp3TqPj6xPUU6bTgafmnP2HSoeT1CgNK3Mc1Ce4mmZrWZDy2RhfaRBVCQqqPJTeypS",
  "key11": "396MqVctFRAtvQg5KMPfYUXhGXWrmhtti7P8ikfjbTMA168GLtgc4ak9hb6Q5ANXTVVxR471dhRFhC4MjEqhAW8X",
  "key12": "3A1K8NatChsetRAeDFBPabjDiwBxwUctvn5M246qH6sNMqkfqEKuicfmCSMX8WCVaH2jT6JMPLx6CPBrbMbaBwWX",
  "key13": "5fsjFrnjG5sdbNCzEospwm5ufehaaGMuKdd6BS56ChCLqZiW3VXpKrSQWb9j6uNQNLt2F5v9mfzJEXdpBb5UWZjR",
  "key14": "4u4y3bhckArWXMxeJMEG8bMHKaG1DbHX16uKfXx4NqxqhAG8dUnKGEYybPouSJFseK5R1XCsY9EKa5GtuZiJpwuH",
  "key15": "bAndjQmXAHTL7rF8uN4R7xbaBvkSyk9KRmzGTTtU7d6uq6inooh7k6xi9yr6Cr1E6GVR2Pt2N8rVZBKTgKgdUyQ",
  "key16": "2UBzgBzD4CPWwNgCnGEJy8JWY8cCCfkLxNptKoyKCSMWx8LNKCwJgAhntUihiuhJv44Q6b8WZdZ4vaJzS8zxsoAn",
  "key17": "62DVEBjavxGFCZkjezPLnaQj1eapVsi25GrX3rM9hBhLtVDuH7GcGD9GMxzdAcZApM2mC6iZDkxUsvnHT2k83rBv",
  "key18": "31r8Qjp9xC22mSzX631e2JtVCt8ayao665HW9zs4GvAPFhyi4UBJ4RS18HBqPMPYv8GDXf5BSi7xRzP7mfkW9ods",
  "key19": "AE7xoyTT8e3wY4EQGccGzRrUW6KJAP91397oHYxrNWTVHrhVx9XtroR48gWGRhgEKT9nQxwTpbKdp4tqEY815iC",
  "key20": "rnUq3FCsRVn9Ldnm4SCmLcd3EnoJFs76SCNm6fzZq9KMwnCa2MViyk51ThbFZ24biCUBkAihThVqMaFZiwaBV9K",
  "key21": "4npja2SVCeySB3APKeDCXgM16VN4Wd8YtRAKJhK9Fyu55quNCDTiNxm4ivKLHuESxX5FFSY4D2bMqjTFxGr8aebY",
  "key22": "2er9RsbdpLcim7ZTXP4QqKfDS7Lv8Nzs2PD4VPZqGchT5MALu44y4zVYSqhERyeA1NYetLiSzAHUrbbnGksJqPi9",
  "key23": "gviP1xoPwsK8aZRhroNWJg8iBw8jPt6vADKgZi4jdFZYPJnNt6bSA9JtEx5wWJiTyL4nB2xCk5X4xRQSwzoaMM8",
  "key24": "35r61y8S78EqQLc5f8XxabKhov1UBrxwHVi2jdqwFqq2F8Sa7UWBXNFcqCyXgKFtnB48oUyNDoUuExQZ49WzWQSK",
  "key25": "3LUKPV7vYAyuHS7edpbPAzDz4rkXrHRoGxDEaKnsbU5oG5KEKaVbHUtm4Dihk9TJuXakBW3un6iSp8GamB3M1d6E",
  "key26": "5oDvDbZM9pGjCG1qEL5k8t7TCQjwVzJ1awSF185ppRgjQuPDcQAsvkXxGQYbbpLGnfE5eK7rXZUaxgLV2h5Y8gS6",
  "key27": "4bFwESamYtUuzu6k7FRzxQwMFmzd6GbgCHnehVxmn3xKL571rXJCB1MkfttxQ2NidBa45rzZwW5njg1tXR2HsEQj",
  "key28": "3v9jVjUbksFLKttdVix1MXMXA18R2qnhJV6MHccboj8YkbivYpk3MUSu5vqPg2n2s5AgJRrHF4B24Hq61hnBi3Sb",
  "key29": "56q4wSQ2Y6Vtrmk3xWD9VABvr8nSzWkYxinxFYkqFBpTz4NkoGdjyA7Pu4GrpXHFB1FqgFTfGGJ8cyMheXjT56uY",
  "key30": "5sSCvxxiuadRy1cXGWQ12UyBUgA7pfrd22nGGidGJqmxnQEmWV8YkGFs3tRh776VhbLHcLqh8EoVudESQ1pH31Gp",
  "key31": "cu2NBDvDzVvyt8hqj4325KCnUd9A7czNZnEs7hnoi2jJeNjxSyRrQFuXWHeiEnLzKESC6Yqd3GWZw9bzebsqQuZ",
  "key32": "369ckaRuc65qNvSGS18X4ZPW3rurbDcDdv9F4jJEmTWqGCVYjLD7aUHBUA179mDQQoyaNJJRYLCnQTc78f6XGFBm",
  "key33": "4WSRtU9PoNEHRJHWipwMWXN1JNad5JGe5SSMwDU8DfRgHDiB4gp64me2DtvGur8jX4QNN5MDTENvZhUEeoU5qLoC",
  "key34": "fURfVLM6eEg4cCR47RuSVgYcGeREoFqHbRkwzV93KRPdJcpX9BWBG9Y5XSorMmjGtE8F39omps7pHSV2Kw9sRsd",
  "key35": "2wDrj1JnYAzdFwHsWcQtJp27fQ9bcg1Ca3ZCeCfSKneQoHxtRu6s3pwtcDU41vncmEmcqN1Yijt1qn6ajG4tjKf1",
  "key36": "5m62tqLjhGuZ8cPJvyw2AuXodqxFAe9Txorhy1xT6dVE8KWAyPREPTvsGgwtd5UCvJmg7HGgCqCThS3DHYsKaDUj",
  "key37": "fbq8YoCRprVkrh5NttkLcmM5N7HPjiS69TpQERrSJVqkJKHwFaRDoMbKb5jqu6XCFBYdFGig3SwFkP7KiCpDn58",
  "key38": "41TDmYskq6xueSn5KQoAXHtZud6GcTJQw1ecDq2RrPTWmsNtNuMmb58FsA9tYPBeKHBLT7zEFPBvaVRUD9XdR4Uf",
  "key39": "4svKbBi7CsEDBzworyG2jdokQjZ1Zi3WcTVVnZukm1kcgTryc4SpZXjJPvpyAS1Q3uXyMQbEwGpWVSSSfghFxJuv",
  "key40": "3yS4XFGmTyPbxxSgX69X6pqNGvUma4QfyDzaUVARgNkMz28KykZ3EQfWvXomZPj5LwSLnayWCCgk88ABcNFNX7qM",
  "key41": "GzFot8ai1fe425eT4KFYd8bcKDyukixk5KmQjmoKQzQjpbi273qdpK7HWEvzf9WmK1YMDtkCr3zPBwJAnXqUvnZ",
  "key42": "F4QtCWwwzygbfvnXcb5HtpboE6BxrQit5Xd4RearYaMNtvoxSyY9safJCQysndh89z7fPUJxzY8uxz48RHZnLhJ",
  "key43": "265PJxkVccCFrXuDZTp1vFwjGs31TBGZuhRTYrDXHZ5LXVeiDmRgyAfe3hvHiHhkfQUeWcccCBSHuyATW9Fj9jyz",
  "key44": "Cayobj8Sjg9qiNyYF8kS6Q43pAZFi5T9A5e8vfqGXbctZxDRi6HmtZLLJcUCGTiV5JHfrzD87itZeV8GxLTyWzW"
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
