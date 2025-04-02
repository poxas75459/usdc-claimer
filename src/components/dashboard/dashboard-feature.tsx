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
    "4zn7FX7wxwJH9EYpUwb1JnvYNWLP3UTMBPFy4LaCckwA8rTmwx6GHmk9MALswhtTa4ytduviiM9dFR5L1bCNmhs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KA4Td4XmufCMKSLCXA3hPyXfC6reTMN1HfnAYarVqXTc8vNq4UbUBz22uPjhvYebf6VSnDwPpcuEHp5RKDPNKn2",
  "key1": "Z2FwCxQAgrNHofLvrPiwAmdQZBzetxXZB7JtsgrTqWZMnk9xEcbZeNybhtynpA8o1k4rVZK8sEJ5MmLShhSRhzZ",
  "key2": "3QA1aSCf4mF8iGx23qQbTVV2DGUF4HoSjeCcbww36cLH9yWJB7ZK76yFmRUm9ZNAub4gFYWyN2EQRcybKq9xAxm2",
  "key3": "3GyQvxyMYWHGf21uCcLwnYhE2fVsyFzFJnE4ZXA5s8jeNeYT25csDBA5KUUPhykHSp2i8sXkVbuHJxGRvU5Y4fom",
  "key4": "5xygbhJgbF9VabKZgurf8wEk82pCbUKC7SvWwTTB8G3RiW61qajqWg81powYNbPMKn2PD48X3RhgmDP33PWTX8ox",
  "key5": "53ohicbG84gjBKtHWdgSvLSEMC1QTqDvRp58r9HAt85Mv2UwU3YwJgWNtnHEZ8CJAQSXyCvGhHWDwEN1dRnPpuVz",
  "key6": "4ghpucUbjLaRBpiqCm3C8m7ThmimbfKrDRE8GRpopUM7RaBA4Er6VTxNch4f1owRaNRZXL4tj5ixgPb7T9wxVHTm",
  "key7": "5qNoEKX2i9zuDm65bnuUoqCDNYKSqevbGhJxGRwYvVhd4DVN5GHjTp9ZDhhCoyUzbAm3i9ZU1PS3mCwQqUq1akLC",
  "key8": "5gW2coe4NB5nQe9uiG2J1YL7GXCXJoKCHymHLD8qrXhjqSwBUpbft47hdxUkv6yGKY2Q4PpM6jmi7YyDMqXc4KsE",
  "key9": "3y9AbXiVK4uTZ1TLwwRqFKMu4JB646hWrdYz1ycPyUkMaLodjtTgMBtA3rGE55HPdViZUDQ8cyhrdfR6qms6VkNq",
  "key10": "4S15NRhzn2v8rXZdWMJ8MyJMXbDGpDTzfA3UbK5BJytDMZns56RmcBcyFhQyz7YSEaKrrVaRc2jiBcDi8fte1fUj",
  "key11": "28Huk2NPMqmt9MHLVoTbWFinrjTosQVWgXvic1NFkJpx8KNZFRqtww5oV5LdZqj7hN8KRH1ZKQZXUxhqqAF4GA1U",
  "key12": "4UHiQhirAZkKDEUfZdd3DKZRNyYvEeTBmjcZsDPJU4iHjk9na5jXvhNaGNhefQGz5XtWQagK52TMCstozvtyhS5E",
  "key13": "22Lz5CVG1FmTY9rybZuvynsNJPKZQgyFuqYHe8Cywb1o8zcpqBZNCMJ5SGL9a7YzzErQ3kFF9Yr2AjSuhLo8Uaoi",
  "key14": "2F5aVK5QBa79jbjM8mwxye1cNNnkMW46DCAuosqKZoTjdbz3qQN2J4EyRmkJW2rCaLZD6XV4DgForenZjkk6M6MH",
  "key15": "2bPigzHMgGEkozyeF6YiDHpRLWibfTPjfXoT22gETELhueMmE8BUSs2TCg3D9xWqkPivhmiHJDEcwHHrNGGnb3dX",
  "key16": "8gTRv3WMGxCSDtXq1auAYqTKr4mwjqFHrTcSd2seDuXYrm4twL7ykU5y3ouUkUs5yf2Usb6JqvUH8q3coN7xQ6y",
  "key17": "aKAtSwkbV2SbeASjgRkn3paGCg3HK8kBodim4j9kWD6ZT5qjqE7ELyxr3KWhCkxQyk2gb9xwbE1w9kS7Y1QMret",
  "key18": "2c1Bpw2BvZ7NgS8NSLikHzr7QMtb1fKQKL7i6xaQwA2KXrRaovSm3TtTwGsnZHcQDjB3wSHoGXngjDiCeP7ULvmg",
  "key19": "4nCadMcyvzzdLeXT9hqsgGZG3hhUcZh4sZicCkJmEroNrZww3TgZNk1fJDTGw7VSfLiN5D8AURP8Cwgu3diLABs1",
  "key20": "Fqf2ZSmLUobVA7SeJtro1e1cK4dvRWLFPQocr1nfJ4Hy9mrFcp72eU6Ryp2UGGYzC3AvJCj7M1iTEqjfMCegJM1",
  "key21": "3BsnDdMmom9XLEspaNLCNtQRHprTQe5kSwRXVjNqFKF9wWzgLUUDi3KyTNA1rYQQTkGxVRXLCopshLnuyj2zwcef",
  "key22": "SRm2WaSVTNonsUAYHqa6ewiANmQvjw5qwTMXhZS8Ndj3piNYW48N8staeDhjPgDnw8GGLwHCuFzVmuz1akX9Ta3",
  "key23": "3EQncfTdVzrGXGR5cHYHkt1TYKQFhoLvkVtuvMamL1s3zXt11EPrkHJZczma6AAT2xJ4cqHr6854VXokdfWwF2Mc",
  "key24": "2ts8ho8X7yWSF2BCiSuNYMosLSYtDtksQpMRrcEWePfawFuN9bt7yuMqjC1jL3Mju9omo9SpPYKsnJUue93ZQGTA",
  "key25": "5ACq2nA9zGMdconjHuc6w79YMTQGu6HKXwDEY1DcphjBxEN7e3D3GKSwuVhdh8jX7x5uW6MvBvkbHKiidhWJXkSW",
  "key26": "4c4vMrEaC3rhWP6dqY3PqTtX123w3yb7tVhuSZFbRishHgF79PwpEzGwUKfFzhCzSB85z7H3Vstn3xDjYPNu58CQ",
  "key27": "3wcHvGJ9tPEwN18AW7VqNnLMuECpzFC3nRcAxZidankT2kb3zXnaZ9auZMJ5tMspgEEEDUYheMYG5Kn8G8pVHHB3",
  "key28": "5C6r7kFnq6BqPZK3Mg4P9NN49M7NSLwFXC9rVNnWkhLhH4bxp8ZH5Fr2JYPkb7gV3hrahemsroKWCfPk97AED5xS",
  "key29": "2XTpJT16CdMmq1AF5mXGoZoUfUr1rgh3m8w93gVC8qtRCfZuUEVcBSfrTJXBKGCry1UKgrkjHVFJPoygDyiPGqAo",
  "key30": "3uhZYGscp7Dffj6hJch6M6KtkFDgceoSK3ePqHwoky6isNoPGkY3TNYeUa8GKR4HZhMrrepY5JGLpEqPsHTL3Afw",
  "key31": "5ELSB7bbMt6Y14CW5V6RzWm2A26SRUDnGz4Qu3K3emFfyAnLFCjUyHJY7HtoqxzHSUookTWtwU7oeSTwR74WKxew",
  "key32": "3vtJ9Uwqv287KhQ8TBiVQCQEcbE8GwsrueLu29RYzpcABEBkwothEhCsSzRREG3Kdzbth9Xb482zJaSJjcMCyjRQ",
  "key33": "44ddyZbvjHiBMNMy8sqd2p3jBXJV7ykkR9Kd33mKaAV2EFHFW3oh9jvdwWpxxytfqpkSVfQ2bzVwUJxbmXLjMLKR",
  "key34": "4L4DHPG8HinLbkZCbkabMb6iJWQctm2YuKxNuNb1Roe54Syr6UvBzmWJjzKiDeq4gcYJJ9Fumv5fij7Yco56Unsz",
  "key35": "2ZPgmfnbZjiALxTcV5VyyGvjPMbNhBGbDHv86hP9uBeduVANpnT7uHsSQ1K8PCXC9RHuYX3iMcd2VHhdYQqNt67Q",
  "key36": "4tHcZQwTRiw7onuCdgjPegeeF8sjHrxLyR36YWRmQt9pcV46AKZtNhcaK5FFn7JyKhntB4qFBYuk6QdCzfjDyP3R",
  "key37": "2bMNLBDgRnRi7udVS5MNFrKi2KrU7qZqGd9NDM6UUQrwJ7iXFJQM7YwbXtQxQr7W4ssSXHQeL6qARJw7TLbJLJPx",
  "key38": "XDgLrYauzbRDPiidcZWH37QEqFMJSzsh4Kvn45s45JYd4DzHsLz8yZaVLjaNHZ41r7peLef1bnNbvkWEVdEUBKt",
  "key39": "ht3WPEy6EvrhQqP5NXCgEYYbem1oMq1thGJvxUi9yDmH45erQNnBKG2sxgBoQbvet2ZgJyvHWpYAbRikLvNjzQb",
  "key40": "2BRrA91JpV2ygmAYvQp3FCDBEWHeTATepZxDZUsFrRfhzTaf4nnmSS1MKkz1SxkBBhy7kzM14jjaW6286McLbt8Q",
  "key41": "5oZ7sWgr9TMwBvCWuQHw4TgZn3qmctqPoHfD36aXim5YzEzVdnhwHjazxgZw9599AyesnAFB9G7N5eLLW6qPZkAD"
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
