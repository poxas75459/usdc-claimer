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
    "amaRp4XrcAtig7msQM46hBNCKHoo1quqeh5Wb5YC5NJjPoPcoAm1DfHQWCWdvmLcUyQW2DMgZiM1qgj9SxEreqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQv5B1KudKQPKovG35kHP5Lx6Mq8G7QE24KbZmEfWZT8yKyJAEuU64tZLaHm1csJtqaXAsEYCvcoWCR21AuwDCQ",
  "key1": "2uZ9P1ZrSfbYBMeRDCnQ75ydbHf6VNUkpiWJvwQRvEEbka4gMgGKGVo8s1B2sjzR2TiBVgCANA2AVQ73SBQhaPWN",
  "key2": "3MW31vCqWsWqcQGUbaSRBUBz8HMj2d34KCiZ4NFaw2ihmGCPkZUy3npEQSLqY9qf8xYkmLvV48D1dTDA7ybw3ora",
  "key3": "4uYsJLaUKS8W1epmMUUwd1ZFs7tx13tW5adDAA1EoQwYS5yUmrD6T1rhbNVvZMhT5mHF1AmRdwmhUtH5bErRXEAv",
  "key4": "617DDmo4zhiDwLcWTv1JFECTad3rDzjNJohxfQPZ116ZJ3t9BokAKUtoFXfS3nBsrx5v2sjYFbR4HDGj7c3WpSec",
  "key5": "2Q7ns4RhuEyRLarq1zM4JP42NpWX7HHd4cjgQunHKV1HZtVGgeBnRcqRs5M5GCnUg9MNXVgBtdEX5PWczAhXQbdD",
  "key6": "T2ZEDqrLGkq68wH4LXNPziFzUgxQ3UMcEFaUaueDKkqKcRZQd9vnNosre9RjHg3zCU1ConxASjzz5BWseNi9wAA",
  "key7": "424qgBH4o5GDzB1D4QRt9ecz6kVBrxcqeWreqZxyne7EjwnqtMaUxLtkcKhJ9xhAWotBkxefFvejCt48HoE4ZjJu",
  "key8": "5S8Fqwt1FPDBTpMnHBJiqbbcVkNBt4FyKFaPJU5GxUBxx8tx8WMF2cxRQi2GS7RQr3zhKxdVym6jbiR1p9ZkXGUR",
  "key9": "4bzYimx1PR5wtYagiDiTAf5yp75SZGC5tfboKo1fZmdH73LdeQtkHkqAMiByeE5oT2R7Gd69bFxP6ebXhVCza2K3",
  "key10": "5FZ64isCR5yosHxxrcRu4nx9ZPvHn5HQtAzxyuUBhfr9JEuehWubDmrii8h8gK3b4ydqiFYKWpdzM13XuX21j9VH",
  "key11": "5guCXUEK1wfJkSY57nG21gepWAyLtSffuSeFWfANZapNQNsB35KKgawRmqDfwXa5HawU5eZLnFpeJ9672UgTCmyc",
  "key12": "4Us33GqLDkzAGtgCbP2d8XrFeDiRfuLb6fi4w1wGTXF83C5tSKdm7sEdaSpC9ETtbMWwAEc3rn1TvkqrfeKWgkWQ",
  "key13": "5VzLh7B3r5dEwksq5UspoW7VkESXvVhWDG58E8rq1Z5GrVBoLU3ErjCYvE3q4FYAbnuFgaCJsmpTNouWvnccvKaZ",
  "key14": "3XJ2YNS55TkvH9MuGUfakwRZLsifS5bTYnEkyeYScnx47YMy2v9FrQ7dzWAVvugWYi1LrHEA9yRqUAPhxqxdjtF8",
  "key15": "5X8WdEG7triza4SVYbeLeercnyiKqBM1M3ZPrP9d31DjcajJKQeTBREVMaQpxBX6cFFzdiiRq6GMK9PXPAnEXAYU",
  "key16": "3p3b55bxabgbm8McGFekvGSjvHaEwBhLzhcEi6HW4QdDD33WBjcXQ5wFXGrtqMG6Vsh9YKpNcysfj1fNgvLJKVfy",
  "key17": "4gxGk7Hshsp6FNFQst1ScT3cnSwyBgyofpjX9E9Uicmb398aRgfvMqzcubn1pPUSaDMxRgL5ETYT3N5iEMCNHH8z",
  "key18": "5JjoagMw4SXKULgfC2whnk9UM6dcbryxRgQHmuecunA4VaHvNyagNaMskU8Jd6qNTGK6q5GceDdwdvTLUe7Yt2GM",
  "key19": "5oNZT7zGdinkQQMtCwdLLxTQE4wYiHqYKtngMkrjFWNKzBGQQfoFnqJMkvZ4Bbv1m3mJ3ewGGAq4eozNvSEVRCEL",
  "key20": "3D2wcoysmMyLfjhaGygAv7nJhi3rTucPHqHMH91YqXN6bnVhMUyhJRkdKVGMEDb5bSW4XqmiPTZ5AwkJxVSLGGea",
  "key21": "613zTG6bHt1BC1cWpjUUXc4VdfznSKkZq9Ky1vrorJYsXhTjGMze3niKmZ5sykHaDuMY57JaAvFwN3aFxaoaGjxz",
  "key22": "4HCc331tiXXBG7E8HfU52BY8v58Y7oXzrRkx5KXn8sgBApV9r8UK4seDyiNh8bQJqU1AcrxrJEGbyzd6BaTNiX9j",
  "key23": "3NH81TTGb2tQrovFfLfpJC5nbdtmQZBkiANCnW1qmWge8oW5fBzpNLx8MEVBKmbjCJAy6jepgAYmDzRoZfFdm82b",
  "key24": "24EjQa3cFYm45K9Pmvt5yHvSdYuFPBcE6j6ZfXhGPGUkZgDh8HFiGxsyxfxL1cbzg9La4GkjHY9gej7cFeaTQopb",
  "key25": "4uJvk7bFXePwBTE2QC9cJoD9FL1jd9oaaqgQH8V8yFWZRYcUKkhLsWxMC6Ah7atVU4TR9c4LKpPqExvebuV5QpTH",
  "key26": "46o5TF2FgT5b5w8wjLgf6eThK7d7GP2VWVqDm7AxYi6kDhYGAeUHmLYjJQKU9KcaUTaR8aLbUphpddY5U4xSYPGg",
  "key27": "hCp3JXJ2YR5T3o1qvAphj3MmDUgjwtoKWcyi68hk7hbpPCbutsyX4dZffYpsHhDztbQbMXx8aZ62T4eido8mdCJ",
  "key28": "2p7i7g1wjesSStncFGkSd5WazNVturmpxvTC6vj6du5XMW9kwgJ8CpbNxYNsVhR1sa2gNmfA7NX2zChZvfATdttQ",
  "key29": "3fnXA9Lh48cMTdpJCjNh95XfbBeevLvUsYHK8HtQNj3gNEYT4XCgHURxraYisDWJWW9shqrb2ZUKP7PgSEDLoakq",
  "key30": "5gDZ1FB2AWudsPFCCvz6csSSZzadpijkeApip53Q6RBZM2X4HxyEQ6Bi7SS9QjGtu2zHjwgYhpbFpspHnziLR59S",
  "key31": "4EYWumXKTn9AjCnMC84oWcGhn86Xa8e7kgASLam8WCR8GQAv43u85ecMDY38D8MifSvg7ZLHcWi7Xs6VLAxSSYRy",
  "key32": "3JCt4QQj7EKLcu6EEU6YzZyewbfhC1tnPnV9eyqD8i2rw8RqnsmiVTcM4jwoWh5JS39bxtYLMA2qwoVJGSPzfSbe",
  "key33": "qrnCzxSswnhwgfNNC7sFKFpuzhgrrZtMhAjJ8qGWgawnRV9ZhzMM3ECcAmE6NJZFdazFXeWewdnEpSuNWaRDASd",
  "key34": "3hGfnKDWXoynDwvYBHPq4PRuGQcDKVfkUTudscRxfeG8DSYiPZMmnA4Vmkkd3NJijeALJEKv6LjQ9LqP98kkVWFR",
  "key35": "iFmj3DNrmMXjp6emvz5MCDYtUbsTRbU9nzZ3H9brUAU4fxvQx5Unn5w7zbgv87mdaq2G8ys95PQAGNK5EVkJxpr",
  "key36": "5S8GZituTHRVwyjjNmCqNiar6Ym6m3tes4Uoic3ET3iGXnofH6uc5QUcaXvVCECFmyfmDgoTtVjZyjoA12ta5XPG",
  "key37": "4eNmAHhetWJpEhiDT29oquC6mNzozRHdiaH7Wrah6GTR3j7AgC6Mj8mS1ER5jQ8VM4p7yEndwbBcNN6rnHrMCmgQ"
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
