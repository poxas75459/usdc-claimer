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
    "59e2JWwKqppKaNWkoHQQHeTFMf5wWrY13D3jYVYTXi8aYoLrEy1tcjZFadbTqBRx5aThoSZQzkCYngVRmnDnkznS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ivihAFuvohw6YxCx7Lkszkmbo4dST3zypPBN1n3zATXSAB4aD7JomguGEfvmAugp27SE2jqDqCDXpcC58YrutzF",
  "key1": "5D87auHMYrT86rHvs5e8yRaTfTQUp7yi2y7wdh5HZ19QyFiBV3gWMscPyJRsEJXuKzUhhYcem44FuSTMGWjRvGii",
  "key2": "P5yXFUmHLnigyVuqUArLn96XgS7WZUVxZp83KVwTtc6UP1KXPERdzbmKChTdT8k17uP84bPQxSFpiBAGf5cqZkY",
  "key3": "247bQf9T2iGboYGBJv5ajV7NRkxbizdSSC2rYtYaQnQnqdeSTfVjmDd9JcFYE7jRDmxKexxG6ymEyEsQYWM1ujJF",
  "key4": "BKRDp7RhVXdDgiG217AMiHsfUEC357rywxa4Xx7abZGP8oGTmzuawr3E19scAbWcdNkHKqQRbRDSvkCPzEhHgbZ",
  "key5": "3153jE3dKB8EKVBetfbYhpZBe9b8Gd45dX7SuhL69H4iSZAus9fsq5QpdSfZWDD3L6drAmxZ2eARxyJUX4mtHYNK",
  "key6": "8e1r5mnEoVFwPUaxkoK4ygUvP4ygG6LDJhspFSyjsjeu5vA3DCsBtiUgapjMNJpAoGS14tcifzwFc7b9Mu6Tr66",
  "key7": "2vmN9tj3R9nsDmQUh98tvuBnwoVWoXEst8D4FRqpXvuRnD69f3SntLDYuB4EKQKo3NWRLgiTeJyqMBFoCSr79V9x",
  "key8": "394ZWv41U32o5ZhsKVZuRurbtdJm9FGvy8BnUZJf6m5upw2TMDySikVeWjnqUh6ANYHGAx6uTUzRpwURVLcRAEZr",
  "key9": "62HmZeMukMC7QLWAbfN9ixqF9baVMiiLyGJbYbvn6qtmbipeSfX75RiYRP3Bam38CDHVQN6rhvKDyMwd1CHWSLyF",
  "key10": "65JkfScvWEcJ7QVStaWCZmYvnV14RW3wv2DRoAhHeGQE67oMDVCftER2xbzT6CQyC1SmYB5JUe3oFUGwDLPpksc5",
  "key11": "394JmnMs9KWBAxrGbfQLBtTXjbyt5p7XN8J54EZpiHNFzitBBT9hax1ViNE4cF5irKJWUUHGiEbGa5Redpo7PTuC",
  "key12": "2HPFi7jMUYGAhkke1XhUuqzAGcp5qg77A3mRAnAEbEd7CQa2m35z71NuSYEe7nFfJQaGEnoFhrpzbtyJCBrnnTjf",
  "key13": "4QQDCNF2bnvY79eGEWaiQ2CVa4dM8vms6tj9JMQMQeUTcUx9GSyuBCUFuBirwvyUbveAJdAPs4fdqG6yR6DcF7fg",
  "key14": "4ZKpbQeMzgRqDSkJ6ETEusu5u1cRoJnqVAjRJVwTt6B52L5cYRLpxxYZZZCoiPYLCHwPcPw3kFmdENbLypYZbtcB",
  "key15": "4eHHsSVpGKBjr3ikEV6CyaV3Qw8WtvFQjKPG2hTVokrSPoMnasnZDUPyiwAsPkbhYVVLjK3JHcxP9wzFKWp4V7YC",
  "key16": "B9mrvuCkppqA4y9rU2MqDT74DTGuykeDct7agA8rmCmxNwXHK5gjtZvnJEQ751VnDkAEA66Ff26cvTSJs6iVaLA",
  "key17": "2PUG7AkKBqcqzquN72TEaQYsebKWUXZZ1Jk2gk1rTR6vK4VcSpZ7e8mktsAfty13HjhFK6MySQ5VjrN9EqcQYBCE",
  "key18": "2T4yDa4JhY8FJvvgGXLrwCM82UauV9yeSEiP5JH7tTYGVbrnh7zSs4QszGwMUjA3ZU6rcV1t76Zcyh3inFW5uVzn",
  "key19": "cTpxQvKwL5kKpsxZ8MG3JyNQMDJZrhtVT3CRqq8u9Fm2fb9GzaRND4MxHMzXNbHdTitVKQBAqkW3zCXPJ1WKRik",
  "key20": "2RJiQSSGxc7ymtGvbMVPcVhAsLxupgiu43ppScUuLuY8V84QsYUUEMLkEBRXQyvCE1ffULW6UCAH5bFqeVvQEV3R",
  "key21": "2sUK9S7maQxvjteBetH5wi4p3ZoEs9bgYF9xFgMyBQdyH5BE2Yb4SsAb7ciNMz2n6bM7Ks3To9r2hv2AxPqD6ujp",
  "key22": "38iRMgzJAnYJYY7eDEJoeFTGbrHgZcgNpFy17yTLbihhuidyWj1CGVBsCK2eZ9YLKbovBgadJ46Fp4kEkHVzsDGz",
  "key23": "2yCgxRXWZoZ2rhamVM6WEi5xJHksi9mwtfWii5y6XRj7ityc9KwtkCe49uXrdGFcJUzW8MSCk749afX7FUEbhhiz",
  "key24": "3hG9mLwcdxJmdTZofsq9rGaz5dnHpFHYHZqd7jur54ZbrMozCqaCx2N6VEhb6h1XoWNkSsA6PHDAWanZAyjKXS3L",
  "key25": "5G73KPzPZn7A4d7irGkp8v67DtQ4Qr4dPC2KUgK2WcH9Tf6891gkijKEiRfLPZH79zjhkM7n4pvT7CuazbKVGQp7",
  "key26": "3QQJdpTzmV5m6dfNwjVXwf3HD1LURJUsA2gFeKhaVU9kn4qLw21wk1et9zSr9ST6wjKv4oLy6VjuKuGJ76L8YyVE",
  "key27": "4wH2mAhgUXFttPdwzyLRX2kL7TDtLJySt1togLZmiUSi5FjqwMfmv2Fy2gYWsmEyRawunLBBPwBFW4ZTb9r8nxVo",
  "key28": "4wX9HPNb1imk2RxSQGjcphWAL5gYfb8HxMLhpzgsPTqfPZ4ceYSLa2GQxQxRd5nLUwNcBgU2BEf73d3bgDeeGbba",
  "key29": "HZYsmZzPRjmFTcDrnKgnhNiBPXCVcsdb7YfZVQ583p2TDk8wwEwYBMfo3VGJSVhCKr7R2Hyx5RpmCcBDWz8efCZ",
  "key30": "2UzJSug53j5kqJqM5WTu6hoR5WWsVN9M9ssnFK2QEqjZDMwBaMzKDP5CQS75Y5a3cAdg8gKx3fVjF3UQpsU5hQdP",
  "key31": "4zbaVwKUuAoxT9tBXQhuYekeY1ycN7dA2EKvp9dHbXXzKLL5auFzhYzbG77oYJjCjQZFMopjvbQVYzL9GYBaYTgH",
  "key32": "5acKF2ZVXkDT8VnVKoUdqQ8zY4aUvUEjw7goTXL2QMrFXcjjQrm6HAMZ5mbp5SiKGwS77MuKH9544umPvdVQDNdw",
  "key33": "4sN4K6ejGXTPWE5Tj5WZHJgmARgQS6ZqXqXCTCGSwFj5w19XrMaTRxYkoQTNnzunXEWd8YHeZBSBRgy4tkPQgrm4",
  "key34": "2uK8q6DnnUJkwwLGv4A3cpW4pR5xwpLSDQ72iDuQAaJYCDrep6vpumS8TxmdS4gjuN6jihRfB2rDXcSSvec4pn5D",
  "key35": "5uswnJFYa7EVp3FLzZ16AKnJmLzr3CpJhy796uSKwmHmpMncJop3UfoTmbuRbvkXQ9cQUu5fBFGSfes9oawyn31z",
  "key36": "WUHcXP4ZZ67REnSTdbsMKmXSybE4knmgcyTJ2irLfNwur5iznegy7yF3Ptfqjb6U5uWGoZ9bNkRXpT7XSjrATzr"
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
