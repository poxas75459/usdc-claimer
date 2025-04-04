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
    "4zRQNt5eJ4MQMtJsAmjknSdyjUMzsrsdBWt9B9BVXZxQf5Zmqm3h5WhuaReKdZYpnkcBiBYzYmEEb6g8H3R5JrNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBnb4qNN61hi6KctQLB2fYhVahuo3qq4Mydo2yb9iD2byBtiAsVxtTT9oLtkzebKF5KpGGLHgcBxPgmRK68Yrab",
  "key1": "2XuxbiVgPNC8gkJAkjMmXRNs4xyvUz2XtFBKYDASmNGm1YWYHYAvAw1YDZd7Xb3cGnSstJMG5Qi4oRCu8GWzzxcT",
  "key2": "5QVQ5ruo7d1xrdgxGE7xHXLkQ7jbcZXV27a9ZPusUJZvq4NYisBSNvgd5BuJmkzbqJXxH1UueQAmoXuLFDgmV6WV",
  "key3": "2tocGWtmj4QPa5hDhXMFv1W1cWtDaNg4zeDGEEYVyXehZoWJ5unuQiyE872KgnjbntsWPguhvN1TcjQ3XYgqjaov",
  "key4": "2shR2xXQEqikUm1WGKiMAb9MsxYsSW8BDyGfHVjn1JZk8VcauSg9GrQfsGXaN5RH6dUgg6CaPnvEjuZMSXYzk4gn",
  "key5": "NgGQY21Esk9EpC6V8jsB8DarTe5YxmXjwqvxBtCu3485aeyWS994DrwMZLQdoPNoeUwjYBxfevxH4A3rTACFHz7",
  "key6": "A7oyEFWJ53hzruzw7GjM4yUhokYB6m8riZSmAxSkTyKPASMQ6WFpySjfEbbbpxoHzcvVpgD31nvYbncfneRAMZB",
  "key7": "244bKALakUSFJNJDJbZA9sg4WCGQEYuxgKhQqMkcQXeEBdueBfW5RTxXuVSmjQkYV4pDMpzon83Ee1MHEePjzJPP",
  "key8": "3eFa4nEy6kYdt7KqdMt93G9Tv6cK8vzrrb9VuJjTFmShSmwX4r5HENtj5aVZrHmJtzCJZARE9D8uFMHJVMwKDhdv",
  "key9": "CLV9PYwmEAfwjrpvbgq6cfwWZFP4ZkeAn4ADgjMcJn9ve4zJvw8XMUoPq9gbJ5M1hsMCp6vHm7eW238waWq9MiU",
  "key10": "4cCpk2xuC2UqAUPArgSwdUA4NFunhqZrJEy3eMSFtke8gYxPkpuxmzhUYuUxj6c7Q2B8UkVayoRHwyCeTrNddXs2",
  "key11": "2RfVYUUJeaGWz8CypAigU69mY4oyjBxdSiKCaACDRtSrntPCcn2qygT1NEySk23yvfJd9oiyAMB1Sn9MSkGSJh9Q",
  "key12": "2XsqmMvJBxsv99QqSkwb1Rhsh7Eqpzf6718yA9crsiMkt1zQS9yHGo9a4iMhBHnNWE3Ltkti6xP2jDL3WcnTUrJG",
  "key13": "2bqM5BXzEJ1AoYCmxWWCuhXjUZJoU8ySzx4GxS3AyD7LGwoz8VLLr8pve5TxvUJR1ccSBSkzQtcV2uVAKXY6ssba",
  "key14": "4c2LvseE4oubYj6Rce9wNC8RE66Pv28MCk6XdAMMQG7Y8BQeodXn5uL7owpug8hyx2vjnY4zSQKS2jQwwoeA8bM8",
  "key15": "JoZnnfM7q8EQ64Lo3n148PGthPA1aAvTcvUqFJJuQsQ26RQZrvoYN2JETbXANHWYntC7C2mP2xLXjrLcRsiZ6Sa",
  "key16": "2eMeEwPurg55PU1GpkSMoBuhUPkkRzQYM2CoayGExs8udqPzB3JeKL7EaXiZNMTj8jU9d74sep4xqQ4YTLKXewbm",
  "key17": "3pK6yM5GAadrjxP1QEGWTuQWKZPhfEgEW2VZ294oDP42Yc3WhRT7qx2o1cDfNYWD7QypTJFCPHemven2yBccRxsz",
  "key18": "2J4xGAAnmC1cCeiarF1XbzbU9iHjAhejGqudXHgPSBWhfC25vszCnftyWRUt8Zz2WyYD7ZxCEwT7vLfCbNnNZCBQ",
  "key19": "2RrrAVmUxxuvjDZyZJ5WGGT1HCfVgm1MCvFHihfKMiamesrPmTeRXSUbxpZikHWkoBQE1UaNkmyizXTqaWN99yPV",
  "key20": "2Sq9tD79CVqQubb1Ta9EqrZdtNGKcDEk54H5tGaokoMUUHubLsLPRym41nYNcphyoYc4DsuMcDvssvRURjCRN2Hm",
  "key21": "gDoXGEuWnkUJADsEHFSRimM82rkWb9K4aaEGrdwrNzrDPcJcTw2azBM6wGzGJ5mCMe8fvVyP2wsVwbXHqRS9zBP",
  "key22": "4bFeotMC9V5VtKUQxMHvEsuVKr2VtKy3FSeykFwMDttYw5Gidoymd73qvbqtTUsagx6c5cMkkVanmBSKzw584tPt",
  "key23": "2ZoNiWQzo1SNXfFtx6B3Q4RpogSmfs5Svy9xtyAinH2MQQLGd42f7w3Fc86myziB7ZZMx8MZ5SYLSCUywZNTqNeZ",
  "key24": "2KG1otp5odCZsSP6m4oiV4A6WeMJCg4koV8NBvCTwPu3V53ZwJkRBcHWYimaBGbqpqaMxHW54DffmLqHhWpYJV4w",
  "key25": "3VPD1BNcMbhbpA2hxx2i5qCQFE9SLDxTCpWWwNR8NqZE5z3bv9BbNwzrcUYhLphxpdxx7Zs2U9Sr16Caf4msYMUY",
  "key26": "3wUU1bXqqAk3XuLMksFs8v57MVpDmxqhGV2k8hmUWBXw5wBS9YrULspRtZfZWBPApMiqUFz3dNTtFzoDHeEHwybt",
  "key27": "38XUiK969RuMR4B7rk8cJmGeRfwxU8uBbnNsSrex2gf6bSkd16nF4wyRryBgurskyseDauomvKDoDEr38ci4t65M",
  "key28": "5PtAAkHJaTsKKzsPJJhEJTMP2kVXLKDx76kVVHzM6mvRCTEu5AMWf8vPwqLm8sVowPLSJPhPzmqSbtRkM1upeZWK",
  "key29": "2QAQeQRuAZgNqQgrxPBoQWjssumd9i7HXzdncUH7DD5qTXNE2naQ2n5oT2ogto77aeRaedDNWptAuz73634A6J2F",
  "key30": "3xn9iAYkGTW6Mdy3svFHok53SN79vBBK5s3LRcs4xfoSzuuwhXBBhpiraobRhxCaYFCsAmqmkteNyA43Gtsg9qsi",
  "key31": "3JSPHxYevCMixrH2sCFjfNbZv1JcZedBDdxaTd5mWSkgTbUpREyAc6LtW1BqBtxkBup33AdaKDLfus9WxtUWeaop",
  "key32": "49CQoJSdCX84wEE3unXD526ATZc78PRPSHqaPoyZuyRZHwM9b9FEyv5cggAz7YKSWQzV2U86MEu8kkm7FANe5GXs",
  "key33": "4YHiwQCM5cb4pXcWqRGfGnRyXg2v1b78SwCNY4NtJjSqYXRzxn8T9FZZAUkuwFjFdgWkZWckMpfwtz3jbVg3Bmor",
  "key34": "eBCV7BTFYqjEU332Gyof2MoXyen7jF9k6BzNPCGyfhLV63Pu4wySEHmzH6MpzNt1X8y5Ko1UsLk7quYS1kQfjZ6"
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
