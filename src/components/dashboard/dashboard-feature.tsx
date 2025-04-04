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
    "5E1i5YJgXhUZwe8BTY9bLph6ZMpudjieXsmFtvXX5bxk1vFy8h5HU7a1x9ggjf8xsqLcD6MZcc5bR6BbrDTt9T2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mhz4kTA7Vbh3nvPVMdUMViX6ifMcjq6nFYb7ATjf7NaKbzJ8XVpuLpx7YqZzNTftMbUbP6whg7YugRgmnixjZZ6",
  "key1": "3XszKvePRdyRHnPQExpyu3UpAMRdq2iLzWG1NzdeB9S8oy9Jeca1x637qUXYETPnaHoL2wTMSK2JcPAnVG2jyiuo",
  "key2": "48c9QQALewDi2nhpKv46jU58afBq4v7VZvvkk6PpqaZSf1bUVW1xRFJRmjdJbdcoNLeu4kmk5eRkDMt9RpvcryZE",
  "key3": "4yNce5scuYya26KgKwdhz1Er7Kgh5CTCNiV3u9fmRywRsa6f3zK8GdWfQE5owGfdRKQHRuBkdoS4YygvYuW35d87",
  "key4": "EK5RNq5JtAtGNmN6Xwa35q3GbuZRAgj8EQuZH4rBMjVa3dHHcoThT9Fz29FYgceooKY8884KsWmi9CF9pBf7SCx",
  "key5": "4vjowABxvPk9kdHeWQFc7tqmAgZ66tCjZJafaNcwr9sFCFLQ5BD1kHDo5QTmGZfvdRnhjZD2Dd9wCK3EB9ChDVC7",
  "key6": "3KE9qyWncP1xFWrVzmVEptDiNMbiscaKwjQ8VA7pYzssaDvX6e6pxo7HicxZb4r9Q8JkL8uwoauCELEEEiCvRLcj",
  "key7": "5jYdk3PYHK9LNKwo9oz27ZtMqMyrQjCEPd4u2UtHEkxfEPnRnUxWPiDn4reQZ34H1q4WRi32xQLDuveh35PgiY6t",
  "key8": "fHTY5QHW2cm1hx8U3S3bUtQGxudKZiZeGvms7KQNTNzvYHLQxLceZcLxN96zS6P7EUqSa5ZzKkdcgzD4tuL5BTH",
  "key9": "ehvH6RoZrK4dzzDEGVtQznwqE23RPgnZRLhN76sHjexWg3wTgdf2mZcd3CcKJgEr9kctvXvrq14dfyavM34EnVF",
  "key10": "4itGPASHzKeZj7FU8ZSWAwver14kLUZnTjBEUo6ULeoHR2S25tnob5ekWXb7yKfZiGeSjjfsdrodoTwQFmUwqjzA",
  "key11": "5NhYfYGQVPffufdX2qCKuY9jHhhW8WYAq1NQffQxp73fiFs8wqTTKt9GpC2aTGJVzZargVE8tmAZfnyz4f9zbamT",
  "key12": "4L745oXakhR98iYggzJraYRkv8YFipoHMga9YgPy46fdVWmtJortkTZtxwjHxd4zpGD1T6QF1DgbWCbQEptf8hE4",
  "key13": "41SdSiUYY5CHZdqh7VmtEN8d19LXg6DY6BQbrUN562GWZugrnYvtSfjqXF6Yb68oJRZDu4wJws54b97hWjXj67As",
  "key14": "gZxTUjWGxGAP1FNmkkyVajnAaQiqvX4VW79aLMy3H4JaUS9Jxg6NFrVb8YfTccS3fYfSmCZxV6tzBou648Eqdw7",
  "key15": "3jBsSAaLKWmjXPva4UKEs7V53gK39h7P5aFx144hyN3UvnYBvfMikHnNd6XRvx2fhDyZnPaePvPedinCbHiiTpuX",
  "key16": "5fjAJqgBZ1LTye92uBPMix86vNZhws4bM3FwEXcxDnmqN8tN1bnHsYktZxhYZSVEcXBsSmdPL9wr9qsBKCZqpvT6",
  "key17": "2z6g4twD6brKe55cKimKRP4rj8VbivqyX3CYgugYcan4bunP6etC1CdTEKidj9pdTvuFgsAJ2qPBbSLK7sbPZMaT",
  "key18": "475As27vNj56GaUGUJRTTFN7k7NQ8yo2amTSpWeCoTuLt7CMbs3dzagKdpqbMvM9pgGteeNyaVDQjTrNeD5edaQq",
  "key19": "4EhgF1u5cxG1uAUFEhAFgkwjX83ej8gR3xgxSomKpffuv8ganK9zxcsi7M6jJXpWXUJzrGKyPHckFtfdrEX1gKdQ",
  "key20": "289ixQyBxqS4HMYDGGgtYRSPMhecBCFDpTsvnUoyd6snPdks1zvieDJxZV6nvQhv7LpjXn3TrL4gNUEBmkEfL7Ks",
  "key21": "4jjRVT2fk3qRn34DnYMd6kcpkiwr7J24d3SE8pU4nXTW5ppYfQZKHqAh7nnYMwFysiQefKmW3VSy2qRYHwWoLAgB",
  "key22": "2igCtTvC8dDC2LJPD7VsR2sXN1qPiksHue8JfYuFBwFk7pXjaQP1En7h75ka2DSibmZ6ZVYDGtaXd4zG2Q6DzAUx",
  "key23": "4HoJz31QGaAYWp3vPv6Qaa4dyze43dpxeJTQ7Jc2GGdch1FaKyQ3LYwguneuk7upzCb1fUH9vMuxGH5S6G59xVPi",
  "key24": "2fPs4LwVRcrTiRy7d7HXaKC5HrUQ4D3gum4o3ToPEAN95NSR7vU37KLmGxuAMdrRuWtEWKUmE3bFDRXGeMcCzooU",
  "key25": "4wTMkjpYxherP38SbLedN5rV1MrKQioLMvJKbpwLHJvdwfR6Py8Wv7B3JCAiTnCoNFU3vDNQx3iUFRh8nGCW9EBd",
  "key26": "YZu7iTpxfEr69f1eNxyBE2yYENt1bDyoMZ8AJLAyAaiWiKZaYQNo1o4vzqcVu2PsiR81SJyGjhVYXWn1pGZckjm"
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
