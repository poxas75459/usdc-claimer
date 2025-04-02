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
    "4gQqd5ot39LsvdqwmXhdJe2gznf385PCZZvwvzufrhAiCYmXxMhuXV5kTpgbBbxWbhyZ5tQKkjBa1qHFNnFMtsRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V4EqS3gdzpdweh7RZN7q75fWEbF3qtndrgRzGVGgD7HG9s6hV4yR3DWizyc7u8U9uyJd3Mdoj6rMVZbX4mieiZc",
  "key1": "3deNS8fexwy89CQ9Va77Y1JYJpTCaeyT8UZgWY625j5zCesHiiUHyERn37i46TNimkZZrn8HxanjDQpstEaATs3R",
  "key2": "3Gnc9QSeuWx63epL2Vm8YeYbbqKgu1urfYDjscfAv4YWYHNzn5opsinw3kPvAec5TQSQXwiToRVP1V8PPerfE5K2",
  "key3": "41BqEX7vfjynT4sfyzv9H7VrEQFp75apBg23BeA25TuHWcLwd9kdQoZZKZyVJQpHdjyeU1QNz7WgyQXP8CuiSTEj",
  "key4": "XCKEmxoRFx3YR3HewEurbfU8otM7LrLKwrtTe7Sb9k6khuqsK8fq5LD6PJhYuVCdEDxPd7HwVB58SR2fVTa7LpK",
  "key5": "2hAgDbpQ9zyTCYzz89aHbb1XrX8dK6cXNDaJU3gEerE51waqte2fjvmiWDa5ZNeZz5tjjm9NbwAdPYjXUe35YEEG",
  "key6": "51nQLHy4FQVwgkTPxbthS958nqUTQctUA5UmY2ZDytZmuGEj4yxde9ynyAaqrc5hbhaZRryG6mXF5dmrwVXLtiCe",
  "key7": "31wMhEi4s4a3ff4HGhuUMgbBk1Ad7sLEVJL8xywXtXMJckpd5CFY25LqVVZotVv317beLzkY8jf5V5dVkVe6Y46X",
  "key8": "7kkDNtPTP19vNySfnjcU3JS1h4YdTw7c4SA9Ag3yvBosRyRBrQvEqudpSa3joGgPGB1Bks7UQLWhonPds1e3b9s",
  "key9": "5BPUqsDaL5VS5BbRVCQvpKTKLz3FrGNM9Gu34j5DKhDXeFqGUUfN59BczmGociZeeyg8dsqGzDzdnXKDS6EAcb3r",
  "key10": "36uYSZQvK6uvoxudhLpSDVmwUESZ13f5kBMbeqa8fDhhyFHmbonEACH4r8eoeNk2QSs8RXdWxnEXZkUqhkTzjm2X",
  "key11": "pZcPY95aYNcWWwuqcAn32S4itizFdBKMXVtA82WJ6oNHVG9KgjpaAmAMmTxxRbpLqYQNBEkr3u3QXahLWXBU9ni",
  "key12": "41zYKJtpBScTDcCZpYLyXrFvJhMhdG7Mo39BEhCisYLX2HkD6tWkgpdbMfzzjqUbChE8kJCi9PsX2WVNwx3WYHfv",
  "key13": "4BRXw55GER3DBet28CuFWQn7P8fMyrrk1NhTPXhfCdxuZW7tyBv3BBx7SUoXkA14bahdgDq17oBdGiiwzfGKdSZV",
  "key14": "2EiXNm4inQK4wX4ANTQAvj2xXE2aALjoH4mM6XE9Qy6dAHdMKZ4vk2ZqiiQiepD8cAmAs58wQuX4PdmTz4wykqnc",
  "key15": "3c1Nk3oz1H6uKk4ANGwgo6hk9BJMMoBCP69hD9HdjgzkKzMSHiQLr8Z6HfhymuyecTtD7yk4uFq9J635xNmy8j7J",
  "key16": "3PBs4tGzVVQJz2JHXcXmYozYy7x7hGGe7bxPAhUVGXCVrWPyLrFxfgMXtq1PzFTfgMCZhgZYzRdYyVWpDXtNrR8U",
  "key17": "22UAWdrTqzpExLM3LV9pxXqtKX2pk4KyBX53cuNF8SKj6fYVVBNe5sVDRj3hGs7QUxgp8UxGuPb5MjmfvVmpVLLZ",
  "key18": "3DKnUwV6SmNJ1Kty9WHJYyuwxihz1vPERikxcbLkFjAzoGLpurdP9wNZEHyEvCyMfkH8VDrBJTK9wZ8s9JYCb7cu",
  "key19": "3ySezVX7kNCdKtdPeXmAyrEL7vBPaazvDiTihG974gPgJprK187i64y1VRdfBoTmu29CtBnPWUxDAcwNnSJ9TTHR",
  "key20": "5RvVjVNzyKb5y4iCpPbz1n5PrdvUjYAmy4oKAoGnDensmri3BT8MhpspqWqEEwUkU8s41ryw4iK9a81F68rQ5PKt",
  "key21": "5FENwmiChxxK9n2tHJ5RiG7J5XNkrwQqVeiGsSwEHUNqi8sqqPuDkGUbTiLXybkN2b3Ka2KwmAc6B7Yu7oWNkEpL",
  "key22": "26mYHnoXANRGUkMx8Yd8KKmkujT5tLRKztUYfQMNWa3Wc43QHXLZnDSKF8cbv3Cjnz5m4X6Roj7ots8ojmhwnWQ7",
  "key23": "4stjxULMFdJkgufVzFQgbp1BBJifEc4fLoVrzLWjmTL9HzgkFCXi5vfsUGq2QZiELiEVZyGDC9MEdUFhaoeSkXE2",
  "key24": "3MRUp4aPhYjRVWKouZokVVnL9cUaRCLZ8gUv9kVA9tRtcCz5MHvw7xsoJJbvyfK74MnJ577wfvvNYJZp6zxUvjYd",
  "key25": "3YtsVPSEuMgKj3nr8WWhMA5Q6pUHF1unSUEEfpF5PjWAFcakAvdVDjw52iERqjg9XfJ2VBnvNxSz4JJeYyJ931pL",
  "key26": "5P65QwufE4Bc7gDLmjvngscQ7rj2LVBUEE9CAdG5qR6h7jZvZ7KJS6msToszPjbnm21Lmgi4Wdx91ohFNkTofZtx",
  "key27": "2TCBbyPkb8uN6kwerByM9JHwRZd4Br255LewzVPunAjsb6uowCA34Zowi46rRtD91tGZMMmCJXtyF7cpJNGzYY1q",
  "key28": "4n3VWisY9DspPxjcLU6doHHDyfj4YhSW6ekXPGgYRWrwc2rW4najqFh7UwX6UYpMPEtZYk9bdgvnZNi8tv9aevDv",
  "key29": "2sz1KJ9da5NoLQSG2Nc2imSvM8J9T1hRmz3Jud1N8aPeogDhyE8YCjE3Netgf6TZ1Sk32qvWdKHoV6dS6iUjVGyK",
  "key30": "3YLtRZqxnSHk2pMr4pE8kDDWJbi4vnvpaMfrWj7nAU8fbef3qD9SRhfXtZRHw59wh328p1HfCm7ghQMyS17TAoMK",
  "key31": "4bfJSvJPUgo3vGPiA6HiHDCUrUQRRkX9PLmUQEvTKhbnWmDzKXsLQtdmeFUea65tEEGkikFhnSMG841pR6tEEKpG",
  "key32": "5aLKUAa42P2V6xPZJhEASbbni1mSvaEzNCSoN6LXseERHFsZ9TqPZjWeKPzhTZWTYeENRs43fBhQwCUBK95wpYbE",
  "key33": "3K7KQ4pbdpfkGjygKfBFiYnJP5hc7rYieY185kDSh61GpY3LyUZo9H7gFZDK2CSpchTpv7hmnEif8gaiGD6N6Zjy",
  "key34": "4wvrDNw4zypVGhfyYCBQXLisiu5MmEJkFe8QvvYQdPAgvg7LHfqsFH8KaGfNeupWb54R1kPmC2LhcoCPfpDbnfTy",
  "key35": "3pDSa8zgyKdStCuQfFt5dc1Ah4PZZDTG4KkHJ4AoJR7wqoaGmRpeRn94bvWxqAXhYYp3EwPXRFxa3TZJR7DwzhrL"
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
