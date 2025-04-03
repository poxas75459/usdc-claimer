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
    "LTqubEJtD2jcHAWLpuk9k3nYjSqEKxu162WU1S1f4k7eZVrUdJUjRSQ5EfaBXECrevJerQd8RzQ8XJ4bE15zKhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vchg4Uab7axULeArCn7BuHWTu1197hVUW1q9PNjZ12Varmhh2wepWZ1s6Dagc3kTsgCjY5cRUMS3qvo5H3vijHX",
  "key1": "5brFJqgwfX98PhX6vfJAVsWeZG4bXRaWPY2WFURAwNiTMHxWFV3zHj2CRxf7kXocc4Uy7WsJyrcWqwR8e6j71Me1",
  "key2": "4nMPyPsE4TmUc48jSUCeXJM6DeuvLd2Vbcysnjm187N5HfJ5Uf73JfE8Bbs74zdd68XdYvy9tfGe2nUSQnfNVaEJ",
  "key3": "3y4zUYuxKUt2WbRNSAxShGLSWiT92rA9PHKmvzztr7UfmYKgfzUxZyKLQSb39v2LmKVY7A82Wauhw3ap4qfwECZg",
  "key4": "2G8sfmuyAjWG845NYBgDgtNjwdqoeXbrnbKUDdXgLWPAZsM9Nru6dtCGQ9yxqwchtHRbED1bWpf5KBN96xLBWVZN",
  "key5": "24wHG3PoBMF463x1hmoY1bJZk9XsXAJ7amhb6et3Dz2qCEzHtWVBSp9bnjSWHJkkp7GAormhihvzxnVLdLcuEnET",
  "key6": "3ZJZauS25dwwfgxJvCSgucTqNG2jJ6r7buoe83JRnY4st2aiH61syB9o5e9JzmeC27jvqaSA1aFdSAjmpKWSpYng",
  "key7": "2FnWgXkEmbQZmiybotphPnYxceZq6vKqWpw4RkRTDD4FwB98SegeasFJgqxWJbEjHD4gZ62YaukjW8NKx5AP95k6",
  "key8": "544rH8yatyd3rhHyt5418Jw8QRzNSpyBvtvv51pXS4Z29FH7Lw9SQpSCn8DSncDEbNjn1MqBmePu4ywaoqK7CrYA",
  "key9": "2n2FAzpHJjtNMVdA3LoB7FJVASm53tQ3BqvGTzMwt9mUTawYMBg5bx9ydh8qPgJoH4MhShSx8zSUM2Fb3xL16bep",
  "key10": "3c1W4zd1MgnT9NYtSeK5faMeeh6dYFxnHFktjLrDHkWuZQ7xQ22bgQn9Gb4jKt96rk7keRWpmcyfy1pP19Qux8AP",
  "key11": "5kJ5i2LRdLjpj5kn1FYS3B2SHNst1abLwcHrq3eZ8dHbyxWtZNJUp3ZRa4QEee7Vyc7r9DEa25yGaqzvpbN1G9bH",
  "key12": "62VUt7PQ2t42X7vT84tq1w9riKvQusVu5ybnoDP35YwdH8SRCUK8EuVbbwV5fiPyHGx6vP5KQuXGQRtfwFfqT7iZ",
  "key13": "2Cqk4MHTbbwvQH2i9pQpHYCzxoinVN3anPiN9vQanaCJZ15hHwvT1ZKBXAwfbU4ywx3m2jX1XeUShPtFRjEVuvsa",
  "key14": "3tKyjwmPNCEuscDZP7vbaoxEcsuTzCHJYwoFD154Kv9j1HaoZEiBywc1xY3xmEP5LgGW33bgjAQkjat7MGmqm965",
  "key15": "41Ydq8io9Dk5tWCkPB8bQxk8MdkCCcuEsokPTYcHRPq8bWfA5p9eSZrFw12GJ2gj2ou2iWXUPYsjybvxJKHaHYay",
  "key16": "2WejLNBfstMoesKtW8BKTQWWMsgzVV64rFW3GWEtv7ieV7wbrpTVXQXdyrWk3S74dG84nuNfXjb5TVQ9YmCszKTu",
  "key17": "5tLE1TPb8ogVWvs77jwoLG8iYkmPzMhBG2nK9XCAD9yv5L2uEAePgGnjbPs3h1aMhRJGTa5PsJW5zi7ABFCJW3aJ",
  "key18": "3GcHzKXkWotyZtqmGV4BGxguADfPchFrkFApLi1y943qBUMqyjfxdBDWkrZkWVwU26KeoJyv57Cuoq6zCTxvWKsQ",
  "key19": "2UsQhUZn9Y5mxxMnPxDESKpM9xAhXJuidcfZBjrHaVT5TgXUL1S47krNC9WkRVVnnpmiFKv5BMHCzRJFFHx78rJK",
  "key20": "3LPHwb9fmGuTeBLC2weekTRWMgAv72x3PXDkgQm6nF4gYUpLULEYfWybtm5J5MSa2KCzvhCr5EaHMa7xLwGTt9Tk",
  "key21": "pxYSUsMCU4of1FUSydbQ9UytTyJqcGEwkRUiwWyXPp6Wwy9HtAQ1E1TnYqpE8M3uxA5VJNBJCr51SCxbwHxF33p",
  "key22": "3ACo3ovRfbedvUEiPRvSYLuQNGKN9tQ4PnRaH9HegYwEXatzpqbukqDG6yZ64acfwUieQbYgDouuLRiSgTgenUVH",
  "key23": "5xieU7rMDHA1WsVyfrgmCDSHH753BphcsqLCCSHce6h2aLocTEEvTAUYaY25kew4ktArozhHZoFeshdnBLpoksG4",
  "key24": "4aYjiQGPK9anNyuQy6VoVMVhbprcin8fRwYuGsnGvQuEQ9VMBx5Z5E7vYaNFDtKbZ9ydNU5jb2qNBmZJpZhp1QKj",
  "key25": "41Ta71AgWHyq2QehvJNg8YK5ebESVcsouUZe6m8jqkTLhjv7RGVb7HCQfdjpo5euzf5EDuTRLiY9upWRdeMpPbCQ",
  "key26": "3swoncXLzDpLWyMRK2kTECB9ktKSMiL4SyaG6sKWcdHjZC9o4CjQv6HLCaqV2Dp6w1W92R31KNsCNYGEfSWTTNCQ",
  "key27": "5YEtt8FGbUVHmLK61ytbvrh3x23SiyxuWt8oH8STkMGVscZEEZcAtQhnEE9Mm3Qcj6jz4mQy9dqh91VCytTnLhGZ",
  "key28": "58VM58N9U1yBYLbJV7Kr39ksRq5pgVgVnFJpc8qCkxQsxQ5bgVKGoQYU7LyDh3Myvq4GcVJ7kAbikWTW9W9Q7oDg",
  "key29": "2K3zKeW45U3pwPq2dbk71k4XxkiQCmBhEaZvy1aEGv4ik3ugmJqhVVRAxp629bh6wEB8fw3z7uFk8W5fTbvHZgmj",
  "key30": "2kmKF9rWQUBJP8Dx4oRpN5jRzHAyKi1mQzCi7VpCZuYTbBsUkZ3MeMy23jpdBEWzmAr77eY6gav6mULhE41iMycP",
  "key31": "5FRd6bXyz1YKCz5XAYGSFpJt9TEL2fp5NA94SSPYGSY9Fn9AjJTMQpBrwt3JuSbW22YGLcWyM1zMg2g27xgRtbnK",
  "key32": "5v2ptYgFowWXwesGuDECUPpNjRrPm3qrnw8zeBuyWgzUVf8oKrBobF7zwNjfL2zVRnpVPSi9tLkGZWM5sUc4nGyR",
  "key33": "en3U2evFYqfzhfHWzokRpTDqkgHK3mQeNTpwjoSme4Z2ckTKm9RHqdcMn3c3fZvLU7eaHspEeDgD4Hctx132XTE",
  "key34": "Nh5UyFQqeixhZ4YZZnkshMu52nrAfy3Z3q7EVjSbg1JFDjHQAb56xXR9QXEhRHteoK7RLYB8kQYP2abUUwrLLk4",
  "key35": "2LGjGU5JevMqsN9faseC8KmnrFzPs3hN34jJtNFfpSFcFQrM5SuH19t4AetbNXsRqsKbhbbi7LtNbzy8PxJCUWJu",
  "key36": "JBURHwwz16uFtTR5Aui5fBuvTwxZtagwMKCynM1pKwH8f6httE46jd9BWMakS7kJZT8QAsfS8GhbUUXPCxvQFLM"
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
