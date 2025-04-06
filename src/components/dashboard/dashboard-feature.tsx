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
    "2aFyngsbdD3F33ZgEwCGSofm3XQN1gW9P3oeTosi1WTCp96DX9w1mdRL2ZGGnghdUEaMccNsLwKYgB3mf7FPqsHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytRBjC3dh7ucoJm2hjfshpw5kUjCJcJw65vqiQTBYFsZd6SfQJMJFurGs6bGQC66GKB1DxPGj8qxFsfFcgkNXs3",
  "key1": "3bn4e5JNigpLf17k2yX3BZPrAjbHCC6bD1nABsgZEKxKWocp9ki7Uf97UdDhoDGpkJpngcBFb8WHdC1naxvfUUbF",
  "key2": "3cCtSrhF6Rf7qBxowBSkHYEbRwVDPZb7vZvYUfovtCshwaLW3CN4AuZoCj8GCf1cGTXFQLPj64QEpNVdJV51skKL",
  "key3": "1Hzmvw23f1xPGd5RXRZkr6LCpDFk6QqESqWqhcffcLrqsnTdLx2qmkeX9S7ar9tsnyPmEN3iGeAwx2xSNBAzeRu",
  "key4": "4iBSGhoZkPfvcag1cGc9cHWt4qvxHrBnXq7EBmFo7rwafgsahGtiX1Ypej2kTbkT5f5Mh8bM2TBEGXcffL6zCeQi",
  "key5": "2Uow2oyv1GsQgNdQaVRSZvKZmpY4peS9uv3KU6vvMRouiSdV42cYsW1EdzNz687izvbbpvC8Ydi53Aqopq6h8vyj",
  "key6": "36awgwCiSuNJw8pqTBUmGiWWgSgbypBwK2xY4ok2CrjaHH9UgSR7HeDs7He6S8dcUDSJt6KqdGZ7cJCbbxZ1XX13",
  "key7": "TLKAnpbp3XoSdavBmb4XfNFVaDNARBTbsdxuVqa2E5k8ApdK2JXetmtaH8tPkUL1MD1VspMaNW5o7dwAAVGRu4p",
  "key8": "4iuL3pGxw8gSy3HREMeX8PveBsLnwfsVvv9k4LGCQNSNnGNJthJKGeuoQyJhxUChdiyzna3DndzNHaqXJqQbGGJ9",
  "key9": "2Frbf5EkXXLyCr9USj6PwcJmjpNUJ2Ar7LPb5Cuuy1zhXw3HtAwWpVnMkcV1L5rEvRQ5F748YAWxnJzS1M4B1Ubd",
  "key10": "62H7pJsZfQgkg3yA84vAZhqdQxDsNNK59P8WEkzpXAHj22LVeTV2KR4w4LBjk6PrEmAYwYAroxtMZemowPHrXQWG",
  "key11": "2aNAo5pfuM6L4wdfp2D6ZQ81mMmQqoeDDkCq35XXABp6WRaQQVrmxSmzF5cuP9zze5pVxkK3ApaL3xsVu6J11JdE",
  "key12": "42UFeWUjU8KBq225pR28saiMjAd6eKzdr25P7E4GRUiAeYQnQkevFu8jvT4dBpyTk7bhLhdunYs9ThgrETqwTB2n",
  "key13": "381FB33fv99B33o9Pgt38EyPcELWEEt5Xfr69dTJ4HyBsMsgcdNJ9LAZy6m9nrS6a4NMZ3eStw2jvfkm4sXE3CNs",
  "key14": "5zxJdVYTRjfT8Nnz2bCBVTtp4UmAwNtdhVTvvye6p9DpsFasaAEQEJX9FJscQsThbCtsEHmBzyMGSj4xUmUNzD5j",
  "key15": "2yeCszeQPoY7x4RRZBPXKXJ5n2Fye9YVvu9556f5SMnLWjTq42YLyo9Bu8Z4EXMu8qxGxPk552KwNoRo9i3JonSj",
  "key16": "2C5DuK75MvpPRmB4x1Rda7kVh7JXUh4YJuYF8vUe51XggrrC1HHiJEukqwxFk7SXrUZQ4PkkJHratEV3PBTihgsc",
  "key17": "2i4HdMhADwi5GT3KYAQ2yehEARHRnfqHvwnQ7J16uRgf4vHqupikUvqm5wsEVu7Bjs6wHXTkvrrozBd5m2ftiAfi",
  "key18": "tHHtQfJR45T8fJayNxY6mKS44hR6rL6nP5SYvpeMA8CsvN9TzE4peQSZfjSfLCQFmiin7oK2NqfLuqsvfwASysC",
  "key19": "4jt9szDSeHhCri6bCtHhYWRBPbhZAiRU38GLcomHQ4fj5pFkGx71f5MDtKv6K3MJXEw33ZiJ2w2W8uuoj3tJ71Fg",
  "key20": "4wFq81dZ2LwAXVCFvNAwnwGzsSRAu6eLVYb25zAjMVDFEJfg79ozKBgtgHXKC5skDVsXo7L7Yv74xbCHJADwznJC",
  "key21": "4ePrbfpdgbsD4FGDV28wC769MjD1s5hRWPufUMhndpmttS6Y8SPXFeHhwGYQVbhtUbqpSvc1RQvrtSVPZpDSXMer",
  "key22": "D9WoGHnQ7yHhcZwWnXpvXJ2S9MeKSxXmKU7CUYyApAxrcvVZhxcqhuo93qjgRA5vqfDbmTBzvMHPAMAQNHhbZ2m",
  "key23": "2p7U6tmCKTkpYrJwAssyJmk3m1H8wAhbqvJBqbeZ9c5SzDKmHMs1gvbCEBCXjrVA1pogh1if8SSB3E4YTkh4YyPJ",
  "key24": "2XRobq5wxu9wtjxeo8iq1oXki7zb25tax11advGU7KxJagYAX5TvDtofKTbNxc6n86ViscvgbmvBifX2J51EpeMi",
  "key25": "24K78DuG5KiccztzESdihyk6aekaC5fwicr132FRugxfBkqAopCAEFXTnJrfPRjWrxLiK7EJd4Lvpjt7hxMzb8Go",
  "key26": "3kUDhSDh5r2FMXjFzcEf7qkMxgsJ13ao1PLqqDH7TdVmJKtPiXGGfLk3Mmn9nBVC55q6K7nRSauQQ2UqFppG9GPT",
  "key27": "3Dr6KbiVfNTJrRxDbrtNjxFE3bQxdWgzBFw6fgaaR7YRbMj1huht6qdedLRg8fPyMiPuVqGSiLfKz9W8xErW9Hpq"
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
