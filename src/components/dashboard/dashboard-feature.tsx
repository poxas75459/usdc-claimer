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
    "2tYRo8GJwEnJeog4zSGbixytZgDX133hDKgHqvu6CX6Xr1U52pnFarfXcwtFVZmTWCtdaDmGsDuLBrn1u4jc24cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vebv3SkkUyU8WUuAjuhfZMkYjSB6EM5kPRHEyhiZyVaGzybNt4zfjt38j2FySWbFMotQsRBBPNa7JfSbsjoH9jJ",
  "key1": "39z2YqtyR76yyBZNq6crHCX7fjAxpF9DxgKzUVV1HuHB9NGXKLFUeHRSjj9hr4oQWdz282JFZqcc5X8eCeCEPNpS",
  "key2": "2XopAgRMqbFpJqRmG7fGco1Hwi2NZyEQzkgT2DL6benB72Vn5r9JmHpcKWjJrLhUX5dGCgdPWrYDpJpgW1cH8Hq7",
  "key3": "5QXk6HeKjrwzDazvTjxXb3RXobVyvCifZCjnniLzn1uxVWpwtiwX6ErveAxne1SayrkzBbNV4X6FaMc9Hec2ry4c",
  "key4": "4XLbDPhHWYeTbhSCCSPquXpYBXm8yDZubL17yFiDLK8BtuAesJjQo62Hd1taxM3tHP57fMRTY2PLpY9EaXMuEyqR",
  "key5": "2fY4M66dsTkvPyEpqk856t69S6uM3HqtboDtY9iJcXiyttQhDAMJtjy4yygqsZbUjjo5Rgjr9T9a6ZAiR86z1h9",
  "key6": "2r5t2BHo4iUngNxjdvqSnnubbyUUpdibjQviG8mpF2Z6reXRfHCcdgLUVVmsroyWZw3XcCbaNEj5ZUTFDhCD3wFC",
  "key7": "5kD4jVnZUHPHzscRjhbYK7jWDgvzixZC4dh1wj3kYQ8WBansx3GgUbrafgrmTc76uKrNHQGvNkKdivV4AWWsgLUa",
  "key8": "3JkE7VUvQJUfnG3zV4uvSMYrBmd3Vrdjmc93VHXrjZGAHadyuipreQMVYRiBiQJNg5cZbpERo1dnijpeyeoESjPm",
  "key9": "iyDChkaATEvCzw1uZz5mcZwDnyhu6wppCqFKsgkMf8Xo2CJ6JDJRviBwVVeDr191XAR8Q2dpoyym75EVtYefehB",
  "key10": "5eCY4tkVHTpz4PJnCiAPDRor3z2hACku98joR3VdSSwnxApjYghi52Z4vXFJAUzuBFQUGgrZ595q1AS1T5yM8gPx",
  "key11": "YtLcpipUPWqzvYLUz2vSB2G6fGv9YoLS6MUWFFuSRfLETmNSSqBvSXjNHiU1YZrXWx3H8XD7LtP6Q1c1cWheTJY",
  "key12": "2qmvSTmBdQ54rLFka6CQXjpBf1VRyGK7BfGJhbzrVi7rRK2zrafShebcu68YseKVPE3tQXnDJKYnrzNop5bFUch3",
  "key13": "xqCfZVbyk6VazVUG4kSYhGfRngDAU9j35y6qUVn7uKuQFpYPiDptd62snhnW5jkqSJh7Px2iorXY8cmo7V6FzSM",
  "key14": "5hsxKbLdf8gRjxB91nZdwYXmoFmZtNjHc3HdhzWgDXZPcNJhsQfkmWqERUCHfqWaMXLW11FqgpfbPLEoht7KXLMk",
  "key15": "9Tw14B8M9sRVRd7oyW6DmFTymP6kbu1u7D9B4GNeorhHuVcCxd1cWfdKy4igbcXY57xywWGjMJW5iXGDBJBDmdU",
  "key16": "2V8MmRu3xuBxjrBwfpsj4iBCrDyzhw6bjRrts3ZMrx2LLE3Va78uvnCZ2sJ57JsrNJR2We8zpycbLwLdjAa2aYei",
  "key17": "2T3Qwrb7tRP5uWvqWXpno4ppnfABu3dksrJT3uxjnHtvri7sCzsrN3CLnQGkAuXRFKYbR8d9jfZHrHPypq6GKRZT",
  "key18": "42y71WEGd72nRZVq7NYJYqHnMSee7sgdfvYaus1QoevQqR93YnXMFRroUynJ6TJTCxHVySh8ha3X4mqXmoJLQKeq",
  "key19": "MYyqzjBEqZVcwNcuGtTJdfgpXTFSrnVPdzGJ6YVVRQ8qKjVHZUrK2u4vSfSWqeQBfmzZUdYaM9jUKnCFfFvGh9F",
  "key20": "4N6x24FeuCndHcdLctP8xQV2R6gX2RGce1ufPZ6c1NzpBXcbtsgz5wbx4HkxGb4Rfa84Ae6ggiK3Fj2SU8D7wVWb",
  "key21": "3swJiX53wP786iDgJySVjkQ42YvKiKYDf6uDinEArD7r3KamrcNznkcrQVfvfemZS4NvykC988oZ3ztEZsLa26NL",
  "key22": "2JA8k5rMJpvJ8xZV7EuJCNiXMNmbi4gKnWJWfPS8gqVnErUHKGLHzwVMu17oej628WMfJvBSioyFRNRo14ptshWS",
  "key23": "KT12yAuZzbktkdJMKqjUaTkuC3XvrEySvKZeFj3G3gUwM1rqNZBB8GxgCVvBCwNYXqJUTZQBcV9kD5K9P5aVpoD",
  "key24": "DcnYrF51TTPD7z3rzw67U2BWB7AreXgZSD81k4BUz5W6WzbMvuoGR8ZuPvc9eF6icvn4EzrJG1TNZtRpwQsxucB",
  "key25": "5qHJmpCY9dGkKk1W3KExrWweXWAzczXcsvLuZA6bdR2XHdhEk4NemCKEoqMNcZgqsyJzyZA1E7wpqP4HWwM3xcUg",
  "key26": "5pSwfTJtRr4NyBreCK4cDB8vebwekeeFyKqrv5SXKems4RgEw7bfvhRRMJQtLAP3amY95zj9xM73jtSTo4cEb1JX",
  "key27": "kmbeuVTc8ASdnF2HxCrfzqxQtcWfu3QgMmUTkux59MCfY46G3jSh6EG4A9hqaFskQk3rBSYdrbgb8XoBFSXJXxD",
  "key28": "3Up1QgQnkXCdZeSr48GoSMvRd367nFJ4mJYhZn3V8NkA4PN1rx3xgXRG1cn8exTe6yUJKGizzTzp3t4UFNeExyWv",
  "key29": "43BaHb93NobMPzetUEmiLMbbKLU36XdjYYK2JfbfCXNKh9Mgj8PtuKF1fwmDyGkASReEVt3kyQrzuj8RMpHxmVgL",
  "key30": "tLr3F62mat9HWWQEVp4rwswF7xVaR5KsWSCxEqL5nVsU3JTGeQcdVYiW1mQTw8FAJbKJjzkhkmdxrmwGH5Y8NJc",
  "key31": "ULcvVQgWvpWG4FLCFYSGhZPtZeX8VKoc1UqkdW4igboci6JggCDEsuFwe9H9vp15dPUDaHSNX192Ko5Hw3BgLBg",
  "key32": "3SrfK72QfwfJoVPEVUkCZeKNRTpwwmwDM9VwetgjekbZw7hLWmNUFjpWMVrNVh6A3bQUvGcyLvVHHSuvAWZRJt1j",
  "key33": "3dAGK77KrofUabwx5fimbtxsDWTakocwNtXWCrx7m5o78MWRcTcUg8xo7Jmdh5XCRoebFoDcnTiCErZxxh7MFMnQ",
  "key34": "4DQFKtMDinwGzsvC4s7AQsYh4M2fC5CHVaY718ZpMr7RW77TSEnRzHbv69QH1aJL4LXe9QUU511LdmTA446h6i2E",
  "key35": "2Ps4sCTtYG423byi1RsC1JbPMRcqQMq7ZzowUgFi1KVYGkPaWaNaQPC6UEeCWXH8iWyzxDDiFdZdaxNnvKvyz8ez",
  "key36": "4fNNwrerspGEaMSAH6W4YJFocdLJ5kEkf9GFzBdx7fji5LoQnwz1DXbJEV1d7ym5N4s6L6cc1UL6AZQfcekSeGQZ",
  "key37": "5ArwJt9CshJ4JHyNQq9u7171Cg2PBEbLHN3BeVMTm98m1mMqZ6dVihXUnLdAHa32iHwgHbXNEUemYZ9PCrmdLxsY",
  "key38": "26WL4iBLBNchLKHLEFY2iKYu5UEpP66V4y9qM9mYkGvPXf5wZii66uunCsm3ZfNMK33t3C2rsiAr2iVTWTAApTMb",
  "key39": "2KmTVNnyJbxdPv9GqvMQNyqCCB6Wjr9a2oqDacd5gitksVw5sSCFnVgEnszDAJrTRfukCh35DevGko3xhr9QwKxU"
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
