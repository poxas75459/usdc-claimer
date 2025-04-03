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
    "2tNzyyHkGj44gXGTx9Aty9a3Tmo5LL7C5DW7C6dimPbkRGCnu6JNU68brt9eEKKLhRZMN1Fh8tu1GN6V9ByvwDqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgjBiMKB5ySCiy8rSnJ3PrQyQ2HZuQjQgkTAP6Qx5L1rQS7Lp4FAwgAVatc38DgPFX6tqFmx1ttSjeF2bnATr2n",
  "key1": "4VXCV5gPZvwawnrrsVPpLDyE3rQJnk45aN3FvfYDnPMunfAf9z3ciLbUToGjSC8iX2FmYmfjN2wHd4jaTGR4qpa1",
  "key2": "V3XpwpFusTugiFtCYKnN3f4A2ArfE18YLV3pLngSYqmGwGYJzSdF3C2w7tYzgZaVtiJf3iAxjxE2c86n1sw3Eok",
  "key3": "29gFZBSy1QQZvCNtAeVrTpGHfMrEb5xcW3dX7WDkqZZgwqAyiWJF9pB7A9YFCu6YVeBaUsaZyCvTpTnuf3WTiRfw",
  "key4": "2sy1rbdHRHRaUoCDxZnRpNhakWquXboN1WGCrWh9nqCWDHBEF9K7Hc8HgxP1g7jFLXqwCpg99iez5gqepNMRdKg5",
  "key5": "2sXnwXcsnGHFd2RWNdQYkE8HJj1jUKa6opWvKeE4PyADBpkYzjpyxTRwHGcHocHuSmoShRQscqYY225uicmhSN7q",
  "key6": "Nuh2CoQy92rb95gripDpx8eSoR7T5Jug2RBrwoa1vvnPhhJ1aCXqdkTphZX3EKyjvjnqoaxost73mss9QSLdmge",
  "key7": "2DpDoQq9MFKCexwQMVvgrQVW8y5PUksAQ3ZRuGg6QQ5K59B9mTkq9qFQq2JgsqDSjBDo9BJ5JyaazABAEZgxj6gh",
  "key8": "2Cg53bPuXMgw3SpeX92JkCv1t2jbFbwrq2cCRdKpn4VVe79EH8VDc3ZfFTGh8HuXyZxaGZKUSDRxHzD3L9mbDiQo",
  "key9": "5SvEDuKhrTSfRRF84HyFdRSNq9oHZjFWqP3TkcVubsyNj2fMAmQj4iH4kne9u1Vpw3RRHB2zRGqVu4R1r4yGhzJM",
  "key10": "nUV5w9cqavSSUgYG2b2WoGRQrE7tpCdArtQwZa5QJ4kyyf3BNHHJSQeqixW8aiFs17EhAAGVmeubYhAh25d3XYd",
  "key11": "3qKJbT9s9VcHUcjAYuR9L6a6h6GRbXxGNUw3HtW16sRHeSd9tNgs9tBnCVAzd3Rg72RdC8FxiMrFyscYApFiv6c",
  "key12": "4PLizvXJTY92bUCW8RKXzGcmxGWkSZzi7E2pP2GES8kQfm9FyJPNsjyaCV8FCpEoYwJjwffDmdUZSpG3MocasanE",
  "key13": "59GA37CYCnbKvd8CX4WpeTLVExVeEb7C6Nfzp58GHvGzYCm4vyUj3gaTUYVjNRJUms3V8zYi9TEefc9HVcrvXHKe",
  "key14": "4EFEGt47KsuFwtrK1W3Lx4nGSJPNL6r7xJm4obYhxn4ZBCbiubtNBfSmyfJo374AWU76YNVcsAgw5MMjCrMb1TVJ",
  "key15": "4n2FXiVxR9hXTYwUmKpkrgpqfGjeg2G8s4Cr5UFHre6W6VgDVszx9JLMA5r9QYQXVxqnvRRW11yJZWk8b45T4j62",
  "key16": "5fB6bmSBW8pmZsV3QtPACnda8hrRciDVBS68Pkz6EmFWpvP41KGJBKSp4hjZoejYPrreKymx9SP99p4MnMUavHfH",
  "key17": "4JqsXLjufmwasnSBuwt5BjY3XAZvw94Gya48qQbZBwj7LTYyZgozCGz3nAaiJWjwgqrh2QDBMeBjUtRTHQSLEQR3",
  "key18": "2rqJHuAtB9AeiVZjCSyHASXtsRrdaAG6qFf4R9LoWjHGwNBvUc3tWhRS2DqzrVCrzkiNnG5jDcN3kga5vbxEfbqr",
  "key19": "2uL2VihDc8p9H3Ft5iWwTz4Vo1MEZH33geK6GcJh9jvn89Yk8s8J3PGnNbMTAfPcqR1aiNpDxX9udipY7eiZaDKJ",
  "key20": "58CookjGi9CniNvEP4aRgHQT1hi6nSSTizH4bP1cXbGhfmi1TSiQdfq9mojeSwmNpeYLnyKWbZYetXjoxg4BQGSm",
  "key21": "5hHkK2JbYha2aLgkJ85jZTYCzocMiPbAeWNUZRL3vcYUFwzYvy82aaoRTJRXgQciaacHFbyWqbhKFwYAnqGgL7h9",
  "key22": "DudDzfHHjWb8jzJgMGSJ9McDYdK6K3oKBrEbP5N2iE6MUDdEqVkXmynLgy5CSHx64D5c3KuSpZxzcGbmEFM7zuf",
  "key23": "2ng7af7mNjKRcUzGRAicgyxCvFfbcDqVaDX5GcoQT83FNfGJJEnfPmq7TGQdGtvQV52MxegnYe34uBT2eQruKEMb",
  "key24": "5HsxpCBmw9d4NCGEFYnm2TepqN7da8wek5uH7Y4SziaPBsL7acLV4ssCeig6mzuAsrX4ZA1oUo4S9AhCz7KCKv4N",
  "key25": "3gEzFWSkdwuZgHszQmB669SK1uxFayvJfnz5dqrkMmB2fgSyeRrEPVsjNTufuUYNmhZVBuHxWdefuijYC18ynxYD",
  "key26": "5anGVES6wVE3MrfhzHMP7uf6j8V8TV9KX7VQhizt98VqL9nw8eXknoJEdtrCzQRapi9RwLvLT1tEv2ZGfPfmfJyn",
  "key27": "4CLtYV59KtHAfteXrU9aoyhYP9AxP97Yf1B9Sb1ZML3h9kZjfkjQhuWpKZ7We4yLMdTNKWj53cJk52vEPoCCHvFA",
  "key28": "5Kxg21k9i2HWxbArpZXNxzKShD2wx22H6KRQuXXjy4wCHothGydKZNHLekGiNJaSpFrvaBXNbe7TC8z8q9MPMTF3",
  "key29": "G3H6LFyD4FomUcNKxnWzmu7ph1HNyPEMQnMyhi8oNvXgU4gbH7K3PMZJXtecUET5iPQwvrDWpWezMFeGsjf6WCm",
  "key30": "2vLupdEnSLPSUV38g132CyHEWP8PrFskj6zTL3PH9sNgjpVdGPrPkx347KhvSb9EjgEzJzCoikrwPT5hDK9jKjTk",
  "key31": "3sa8v5HtiHkBfmtDB85h6vQ8FNYdYEnUjSEuZ5TvUMgy1zpMfwAYjNpQx5Nv8NspkhiTxfAbjgvJwer8e4DXKKEq",
  "key32": "2dAJcKTLTRTowhpAXAiQW93WmPvEdJZXj26MMvcez63wPbtqWnwvSMN9vbvHnT2GycLh4Hj8mwtWX2nJ6sKkv6hN",
  "key33": "2rGzsxY2AdkLGBuadB3YxHpJAov4DbtPwn7y1epduTkrMtBhio78p4LAWaUn6PJa8jDM59GYEFULv3h8xwWjoCAp",
  "key34": "2Xz8mU65BTLWMc7ZRE8sJbjXygYsQMxw7tjdu7S9So4zeYm2XAguXymKeGKZ8BDEF1JTe9ee2Ld6Jw9y8Yq5ajkL",
  "key35": "2X6hMNuFSLBxLafzwzpgRXi1XLn8PahBLKBkdnu45HwtkvryWgckZxbERd3grv7J1UwBr7yLxNGassAeuwMndPhN",
  "key36": "9FhBWxaa8T6kodFZJRnk54DdcvWoitiW7JRjoLUENk66isXvNsUANBuNaQ3HHUJRq36xseKRr8x7HvWRaEXp8ky",
  "key37": "3f7SSqHJGhpoqRFMZhJQSaqezcP6nZA2727m9cY17V18tjTdFepxE7p6CZfm7gwRXSqpoAon1QmYuz3M4Wczycph",
  "key38": "4zndzPT38atfYeBdgWwj7y9FAXzC8pA79NHW3MVtXaEYftrBEzVuGFmXewAeqEF4Uj1C7YvtVeXabP7DXCTWGTS3",
  "key39": "5oC1oTup5FL9sgLJ7LKp7VAo2vVstvNKHMGzDBDhMVJWHmRqxNeDrgkhx5CGrGFdJoLMyqKxW4Xtkeriz6Aei7nK",
  "key40": "4FHzEc1vczPsADGD4rJUPfqGqQazMy6WiETiSyuMxHistySpKCbneSUPLyzBBc8dBGzda6Awtdh143B9TzDrAWF6",
  "key41": "2pfBdNSxt9yvVbYbxKgbX2HPhbnaLRZAG5HpL1AbLtKAP4WnYBdjHgEUn7v2PxU9cvvraz6F3zFe8efYtfnWP1Jr",
  "key42": "LfSsfBRiMHiin6BGXXPY23ctccmm4vrRxqtZPbpijHEnLddGXZC264hgjhsNDWsCLysKhh1gohWpLAngPvvttyy"
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
