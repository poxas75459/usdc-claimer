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
    "4khheGkqUJgxbkpE3yQBXHbgTe152kpQPVeEnbHsHJWnFFCCzczZcsnELG44dG1cxepviaCif2yoEQewVUqL4iLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5czjDv1SZ976cFToP7tCAMi3u6fNTS8o9ptje9ELyVG2h12gkyBZpQhvTUcvgSn8tqJRQhLPPw2GNW8HqtWkgS",
  "key1": "271wiY1x9fEA9uoU3QQpvnw9YFP8wkezrnSKLBM7Qr7SG7fFrZW9P3VxpHBVvRhQ4Lo6FGLypjyFB3ktwBfG5DBM",
  "key2": "4MN9ks59XmcYq5WsagJcZv8mPv9FEqVrFcnC2J7zeST6GA7XaxqPJV4aGT99LvDhJoyEETx6XWgrojPSJsNRP9CA",
  "key3": "3XetXy1xByVMrrgQVDHAkH6eWytW8nF836VZxyM3bn1oM9fFKK1FLAXVfZCJX3wBENNC9yvjCQeTCeWzwkVPaqeV",
  "key4": "21sc49X19qNSu7cz6hjMnVUemJeK9X14myDLeodVdbocFYKRPE9K3FtKXztoazfmxDdYrNpWcCSHjTu53KmYVxRd",
  "key5": "51P5s5S9dMjGqCd2owQUjgZF6bMviTMVGn7RWkZUTV1R88n8ho6hR8uEWx2XR6GVNB2xbSr4eaG8fSi9fBBLqGin",
  "key6": "3pMGfX6oW5k5kCyNEA8qmK7hWUjbmouiubPFxpVr4PsnNLN51RXoBBD1NoqBhUPBDQFFhn1zUQUTTnF1bYSh74Uq",
  "key7": "2neDL3RzpxY7Dz2c5r9a4etwSgLVwqEghHPz7C12tei4uvsdviv5iK2jUnkXE6Sb5nVK8mcn9Nkj8K8RAbhxAfXT",
  "key8": "4FMpiWKfvhQCJDmtLaFCr1qVTA23egV3qrNv4NV64vpacuDmNEDSLEDEjLA7LPJ3ebHEyvewD8eLZxsBsLyYZXvD",
  "key9": "2pv6AHh2XQGhFJnThsFSPcWiMxUobwZ6kTjpWGzFq6MArZGdnhHLhQvk15DgZ5fP2sbAomRb9mDHH2vKdT8jr3yb",
  "key10": "4iHkJZGVEwsPh9f3P3WcdH2w1wMo1pD9WJ58Y4PAkYFtPNdExyzETqRmHJUyroAzDcuQxvNh7w1nzNvPQscUWLyP",
  "key11": "4AvaAfAiK4AMxcFVMdFjr4LuXxP2CR7JFjUpkApMKX13ujs3zbjizHgweSYguLhJmFAZV8qAhHJCnAVaXsej8aHJ",
  "key12": "3PcScScpr9RzPUfT3qHFAFnoJfTfANVxw8dLzXQ4noSu8xJYfrGB2QstE6TsfGv5pZ4YN3KNfQwwNfuac2Psr3tD",
  "key13": "4Hhc831PCmGjA47ZrFDdKKPYJ9sGMgoxDyGshu7gVvGqNZmJVHg24k9bxdafuNwg5hhBigsJt4qKhRpPjFjEBNJJ",
  "key14": "2jQQqYhDk43B75bAZmffa1HzVBpeJegAEo2owRvMRHgg4Tzi6URZMMGPkJj4mrNho251ATitCgdhRQ4LTNeogcbj",
  "key15": "wa7b99BRnSZj1N5naEN6Rc5qEr6RmjR8RZnErKfu2qTz4EEK43NxGdx1Cvd5Km7Yba5V4Nw4UM2VpRXPE2xKwhD",
  "key16": "342a16kiMbvT2J5a9C7gGJwtt1LukeJV3mGbtLJHriuayzyxXhgngurjZgZtbL9HGirDWdbyn7zWwXcTKDXavNCd",
  "key17": "crUKPyLPEehqMSixyGACxy2JmQ2KAJiYZrbfXj5Mhr4o77K5igVXeLq4pkwsSzvPp4Q2iyHnRsJkFQgtz2aivUn",
  "key18": "3js6X3iCQtDLcYw8SepDuKhvUHqSQp76ciqyzauUX4VMfoqvUaSk7CybdDPNSienTuEo8cG2aNDtjpSiDKauGHTe",
  "key19": "5XKUUREpTfdr4Rm2BvNgunxvqSiUQPvPjWKGM81GcsQ9g2Qaj8stgmtmjxDShvg9VH8Gz7DKkedccCBgoux5zyBN",
  "key20": "4bCfKLxRLzuxFRCo3GCkHd763U4m9nVUiJcaqSfBJ7uLCgxeDyC6jNEptMqvDDK5MkL9wNEpeqmcL25nsfh9BzLV",
  "key21": "5ZesBwv2yLFp3RjrFRM56WgomrByZULMKf9gPhfCoANjJRP3NVJPUeuSfemS44aY9UVBjpSfgMBMRLtwz3FsAjij",
  "key22": "55Yw3TvzgxNdHGRRRPLSporKcUioUL1wgAhuPGXZEyaRqgt2hZ8RPWkVmDGy3xgciEdP3jHr38wyVUSKbAJHFN8T",
  "key23": "3Ki7BgeXqDhidpHae6jrAPRrEzwHkHxnKVTTgcp2h16BXMqARk6X6YTKDh188KS7Pv1n2mq2P6Mg2xW8RSFbRKPx",
  "key24": "4FMhxVCeaNtUBwYxD2scZFxH4bQixjbBP1ci2X9z94KrfxUtiCs7xt9zqErX4tgfL3XkiBrTA146cze5CuxMneNM",
  "key25": "1izvnQXw8sUu8L9gxU2JcLftpniQ4GSraPGzkqZor1raCcnxn5uHRu4Av99X68nBFaZ7WGQpoMP5DTv628w4uYn",
  "key26": "3jRqVtpdxN2MxbeK8XeaQkjtKySxYPKwJb1BrRd2fzYTvRaEWky8vYPDR4LbJuuqcUff19AfMjihk9CsiQZQS7d2",
  "key27": "5hDw3oUgH5omUsnso3g8iJ62FVdWnBTj1QNj8QB81nZhUocuebRdqU9mkgTqNN6DijWCbWsLR6dxnvBoFmhDCkKL",
  "key28": "3M1CADwrftTszUFXwFiiQAzKjhpeBkDQZrrp6CvtnaB369wBEb6EjkWSadK95JzzQoYmUhPJcR8fuuwePttKKPkQ",
  "key29": "4FQWp3etcyNyEaZYbLperq44wNLZAzKMWFj6FTKfNYDMuqpPnAVapT9XEumWXDPryFs7wMxE6r1Sn4RUwKBzoo6W",
  "key30": "3qoYT2UctZXMswDjbKhdy4xCrdR4TC8Ki3YVX5SswQh6aPY53a2EVkUiK54JzPu5x7QPHDhakwBU9jzp1LK4CbxQ",
  "key31": "4LwhtkNMjgeDiHeNV36iSzB7yor61hpVKF1pshqFJVXvXvbMuYi9LrMyip2tYT59635xfkjAZ1if49qHE18z85TY",
  "key32": "2URpSaFLJWZnynuFBQfjSjAuEUEee9uFsT3mQPFzbKV16wukHvK5iJJFDd1r3XcN4rGkwvTQebPx12i1SsSp8J8m",
  "key33": "2qyeYwAUyb9wj7TU133UTLg5b8cdLvUEg4vfT1njdC7nybjRDrDcgnVWSnJ8zQ3hYBRVXnUheReDZvcHb9wQtkzh",
  "key34": "46KRs1GwBVnHaTdPnxThunFc96E8XkHaEbVSd7NHMKsGTDAraLRbUNvBnQXZdJP9XW5LLG6C1iSUq5wtwyKk5gbP",
  "key35": "4xqaAui6dKsqPVfXV375EqFd2NQRHiLwiKPjH9wxytYe6NSZC6AfbFJ2BPUtC1q9zpKzzM6rdmLXr2Jnmgk3AcdY",
  "key36": "3aUefyojN7cxP44TKShsHrKh4AMGLee24nYVop7CB2BHzHXLsZLSAZZ725Z7SdrnGyFpGGYcEgDkgidLM6GY2KGa",
  "key37": "dBAcnz6P4bZikKPvXsGJSef4goNyTjxemK2dgTjTPUzE5sAnggWJzqjMTSRG616AD1aYE8jQK2AHZUDqAemyyg8",
  "key38": "4WXp7b3sjPRnddEki4JymiNpbpsVnuxCi7gwEF19468JdHs72adExb3RPwQEhU771Lew5v8C9iDRf8gZyxkka3bS",
  "key39": "2KtC14bLLUAnwJT58GiXEVHBjWUqi5eHaUHPwusNqbfZaTxcpbpsvNdGXaCmK372r1Bz4ejLGJGt8yt1yEKNwU1z",
  "key40": "5Ca6GtNugM7716QAJNQnVggA8upeipKoMwcvQt14v4PWtGNHUy3o4Dtgwqy9zXauzU6ciWXXVUm3T8SwPXM45stq",
  "key41": "4KDbQuubMKNXAWUSphSPHJjgWjjBgPRSUdLmhDv6dqgpMn4wABMTe5jsuQucP6KYiABcTBSn8c6KB12pVmGJhqdc",
  "key42": "kALG81qQYEExMPoka8ZQyuJXKFc83StiDS2FusqWZRuCNCdfztNKKnY42HFkdzaaWyU3hypGZsjPNKMyrTdXf4M",
  "key43": "4FApko4WpcXAVWM9ruy8gAt9txyJoq1CH7phUzbcvjdkAcvtdL9Xx2rwQyEYWYJ6Bf5nh8DZvPANjAYDm1LvaEVp",
  "key44": "22UaHbYqrRVvLyX1KSN9ojgq3MPTZDszC7grGL6YcuiLQmgzy4MMggWcktCUrBWX6KUauqik5uK2V4TR9Z5TPC1f",
  "key45": "5ndSf2RNZsinUCSNZxYpYPM4Z9KAKyTsLiQyVnddLTWFNm1qWayVpr6z4FEVDPqid6CnPtqaV7iuubckyZJc1mSU",
  "key46": "5dnT92zbavGt8fNrv4wQjEt9aTZat9Vk6UDrWDu7g2GKtjBkqyG2GGvvUXTit7jpZGWKAdWfcyuGGgnHxu3oLryK",
  "key47": "4TTciDdGnt1PHWkbcs9LhrHNJb38M12cUN17QkL1VgLRQJHY6UdFosNqTcP8ykc8AW12XNqUJpMBY3mFzmCkukRL"
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
