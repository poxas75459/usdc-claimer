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
    "5Xc8vqJ3dbrmePZsGqndek6rqG444PyqdYNSF5rLtnHS32hKk3L33eeWFCAj6gtiwGV1kkga5SDwPtEbA76MB7Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyrAoebMepspTAj27VhBCheXKe5T37k1ReLaNxLJ4qoKnkhVPjULWT6XatCaoq4nNGQxFur613nBfPdgq2XMavf",
  "key1": "5wFtb95sz6dM7CbEhW1AYMrNhSb71JP3iPY3VQq8y8GCeF6sh9eMCpv2TpVxGVeCdkeS1KV4Rbxp55AApyBqsroc",
  "key2": "3yUAJrgJ8FVPYhNEEdcuBdkkRLKgBEFwYxXVyaYwvwL72ivx6SBXNK9mdFBFEsF784cuAGyE6rVdMqygvh2MNmnG",
  "key3": "5xUZYrUJgFnyeAovXh8YDfoXUV8uFAE1L2ox8pFRtb8Dy31uHPgGnAwUXdHojk7vShpLxkEwHYeMDxgDcFyxoGYM",
  "key4": "4ycSUjnxPW7HNVh4krcb3qQbTcMLbujYyUNNKx3KC82Eev9b2KSKUwcPWNW18RE4iu7FpMeWgBHSJXmDUSysND5e",
  "key5": "7oDtzLNn4nPnRWPjDBKhP8ossKby4gL842W6oZiqnEMJnzMKGWrfz9PebyGyfSDYeL2JLca3hj8Gzgvu4s4QpL8",
  "key6": "r8CXB2WxXrGvJt9vyo5AV5FCGt1Pjb2VweXnehboN7Y8hdNntc8ASCU11LnoxDFPGJUpZPugFbZjUodgp6TPHHs",
  "key7": "2z1ahZif8s1e4ZDSerPujH3DBFGnk5Rc18hDGxszc74t8tnAYoaAK4JJMu4zexX82hBQk59tpRK6DX991ofJbZL2",
  "key8": "3tKiF9FsgZJ1XVAvqsVeGSMr942S9UYn3GJuutKq9tySZSLrYmi58kbE4cZrnD54bWLkvzYbgSxkxHWDAG7Rv1V4",
  "key9": "5cwfRHZedaZ4NrnFkgLY91H8bErRaLAgWhMdxHCk3bTne8XS8umMX5hrzo4s8DLLoTE37Pb2gjUnJNyQU7xjhSwW",
  "key10": "4gqC1jfU1V8zUi97npSj7Tv3nT7SmPJ52hA5v3cTP5LzjDRQk1gVnuJNucX5B6fSULSMncfNJkandperJjtAhLR9",
  "key11": "58nwhhXfimut8Z85KrZom3Zo14ngh3Ja9iKmKktBA1tfX2WKqJxLbAymEz1QtZEumev5dvoM6bd28xzrFcGptKQD",
  "key12": "3Eh5CQdpNQfsa1mDcUY71YuosifiLJUNxUHRA483KYoj2VHsaukaVsKzWPrdCTgLmfXvgRYP5YKDN7oStndamYvG",
  "key13": "3sJh9Kt4V98a8Qy833Ma9QfSrhQRxnp2mcfCH5X7WFVxHqP57ykHKuYrhHhqRPjTqDKGBzhX28SG9PjrvxWSa8TF",
  "key14": "2GZuYHNz3fY2cxdVrvpmatoAgMKGkpPbRBv94jcWgtWEVkRhqz8HVkRrzPNwwdCPcbGdAWv7wzMkVQjshELun4dk",
  "key15": "zWcFJLqBiRFgyih1FY36e1RGjdQyexgrirWRL4s417E8mAM2wDYcJ47sAsTqAZ4uQXCv65rDMfZiN2kzeUHA65J",
  "key16": "56xnzdQ4gQHQB3KNk5gKku8u7LsMtNuwY8XW2PzBhYzLRedAa9BUViAzWHLszMnsepfNiyLke7dhoW8RDMvdYhXE",
  "key17": "4oHMQRCCUPUJqQm31i3QW7af6diuDidX3gbejrUSRox15MukwLdxyEpU8wrWmV3JCgtojvYdvF19A4XoKtjogMXN",
  "key18": "Aai973KHfJTjZhjwMot1nNFp2AAFUvLdwNeXkgtx8HF1Z1U9RbqHASaT8zCirpE2vggp4f6jXr8fzHCpr2h3ftR",
  "key19": "4DKJFbmAThTjbo6XqfEKeppECbeoqvSEUJM9UH8An3WBqNtbbj5CZzesBpuAx779KYrRK3qUPzDnEVr4QofeTmEK",
  "key20": "TPXpYYAHR8XSFLEd2PjQCAH4ruDJP6epi5F16hhZy6NAjhWTtkzj1UvCuKohydCDmguhpic7mPEkodVxEN78tQL",
  "key21": "5AXBBS78fN1epDmYdU2DAtwE3ojnosJTFKss6DncZ3jZfWBt38JvZuNM5AGL3WwqB3e8VzJQfv2u9M2Jx5CJ598P",
  "key22": "37Tqahom88gPwM7i9CYWJ4CwDVDvLcFA7Fx2in1hgL9Ss2nNG3pnn26MjBem5DBU2v9iotKuZMnWKhPgX7fs9coG",
  "key23": "61w4ScYws11wSoKGdiarL2imcCCEDq9zWGVwus77vWVACGhXQbv3LEoYHnbTsG91jKQhCsftMbxfXAC8BqaTtWtp",
  "key24": "5Y2EbqaM7NXxGbh6t7giem3YsXWRkSwNBtf2sWeBoERvasGveVZTe9h8vYb26eq4kmff56HnX1WM8xMXzFsrjsHE",
  "key25": "2dpXqxmNTkZ8QXsofNz8HDdvJdrTy46FtEN6CjmgkhEDj8fvcprwbiZE8mkPfKDJ9rrLSJTuE73jR2EvPctj444T",
  "key26": "5nvp3XogkjFekxFVjjDeCSQ6qHXG8nti5cqZnSYGP2wH2wpCvqM4Ts7XYMQcWvPbFMRNKrP7mk2NzNtUmBNmvHd5",
  "key27": "3hHacTFRzkZAksRaDmv8mrPG1oCwfbktb4p93ykqmKnWpFoVHjog62nJ6z6NR1xXvocCAUZd9p35PXK9gZWsQ22b",
  "key28": "2EKpJNLE2yGbZRktimidvr7CsNqfxzRcGuAAYu3C6AiMCzVGTfjHnqXsgnARMPqG3ugLHqywaBgcXpbe5e4257mW",
  "key29": "2BD4yPsoYivgQhFzH5M6ctwAo8tN8BcpXp4FCg9CNDqcpFifF4yyaGEZh6ESSrvH2vzLcvNRiiGoXHq7T6zjTatE"
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
