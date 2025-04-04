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
    "5oxE2QM37qg5tsq9o7RE3YHmkiTTNpxcBTaHDkYGAJQqhcZLsDuGokJbokmG3SQtx4vamEZJruQLpE3WeQmqFxZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnjUUqGjH1khYYyhih45toWpq8FL8fsiBUpf6SqrsUtZLbRPRvwzGTNHXkTvep4D66tmCimf7vhW87457b6X8fD",
  "key1": "4gn7BLGv915pY2xFisCpgaYMqV5ga2yDV8Um3DrKGiP4h5nUV5i3fzLf4xd5pRxSVKzsYwP3XBfWyzxz8YWPFn1g",
  "key2": "3NB9GEJuE5BTrVExyUG4ENyvm5MBwtFZZarKFwMUTbVmP9REjFDtJkoXipapVRctemLvxS5dGHRf832jBEcUeTSd",
  "key3": "2e79a6gT5cFGSTDdPMtBJVxbyGx8Kv1ju2uG7GSvHLw4nPGgXhBRHjPi3i6b28RsWHbUv5eK9GeCsStXwmZ4JJUu",
  "key4": "3vdoJjr9AAfjSNV9meAHbD1tRddkSEoKPpnDny2AUzJWLV6eB878R36umeo3yapVnCiTSoovBB8hZ4zw7E2CV95x",
  "key5": "4WyLjgPFVBievHxQqkLNxu4tnvwFLZi2UvGzJemBb9DDVYMfcNi93EKXNpVEDE8wUSXPhqrdf2Rkff7LaikxqrJF",
  "key6": "2TttN7apYgUuwimTR66qxTukdZpoVTyHu6ZHacYPDjEfr3Qo4yQ1n9o1yUpbeqedWgUNPAn6cdxrwpBM6BKAxs7j",
  "key7": "4dMu9uP8RyPN5LXwMK5aJF3R7SVR73CoCqfujRnt87R2EXv8H8xdiCipgbbm4qwaCGtFGHZgaaxGEmT3wbcqZv1a",
  "key8": "51v4VpoErDjPQEPh7abaofeuARLnnBFkvkGFpgHxYFZLr3gugiznU6A3sxZPEDEcjTXq3Dr6cTHSJyHgdpHPWB8k",
  "key9": "hLtrkW19xxSASgbsDo25wACscE7mo2z8EqJFoorvyH9EGK622D4atrjYcARpy9snzJwdRfCevBWtqksChSoXfch",
  "key10": "bxhegpz54xMgKeJQ8mvw1CVpf1qkoP2JCuCrsPTytMPPC1hob8qhhwNUzt51tVVHknhuF6CmrFZBjwmcZdQSZS8",
  "key11": "3xwYrWc8PLZZSWh217Qe1b5pMATsoJSkKML4AxVk3GLzQwqhcWTar4qZz2M9Kdate3FFXKjzWm5HR4xGDUBn1L2v",
  "key12": "34KpV6FexbhvELjS82b9eDBJYTKdCCzrDs4avUUwSGxdwK5ZtCYSMgtpAwsYRHLxPTGmXH6Lwb5QwBM17tAfTkdn",
  "key13": "2exfGVL2X7WHJokDMw9JGE7Ri4eVE3eJL6iXNKM6kgYHurSk3ky6WaqUxM4RSusdbGyYPZjCrT4PRrLZgQ3DGPQe",
  "key14": "3CUAoEBKK3U1TTsPy3eAUcAo7sJ2EVrypDQjn26t1DDmymdKg5ALjmjQCz4qa6GMrMH594uuJLW3yXnGKnjrP5s5",
  "key15": "3T8mLLCQ4dHGhT7e4ZqMR966kRoh5RZa2CV6bRFq3yHCSzbXhYZYUrc8sxyJdvVQvMmPZizUXr2xa1H28og13Wee",
  "key16": "2hrg7xR1MuurB3aWuURaoT8TyBXUbezJtjmGeLC1P2GePprCjK3iYcGzVcoqWV5pskDDWtqNu1QVgqG6Lwca7Riw",
  "key17": "2fTR23FehDYggh7veqtP4oB1ELFct5VmWCcE7DwfoYhcDzg1AfHVaCFSJitpqq5y47vxgcYy67scKyXXgSEL6Gro",
  "key18": "5VakQDvJZxqo2rv5phgDLT9SQicVf1qxqChaH3DqDHFjsrr4sVc1rSFFJinQQqbTxJbKdQPa8yNSaFZmYwPjDFJM",
  "key19": "4Vnx8K3M8vpyJ8QdHpeVxSKSE5iWz7JTswSNGjcFYjPXD3krUVJJ1FvhrExFrxV972FppkijnK8u43cCk4VAVAY7",
  "key20": "4QcvvRmPLCHG6p5oCjxxwDUkWWYJmrYxcK4HmsSqwkwb55WeAGdXbPtQ7sRd3CaSDiUhY7YTwSYPtiHdrEd7zoth",
  "key21": "97aUx8dqToCYwZStR2BAap1yvs1oPimzdZcSKXp8CUM1ubLJxATXAAd8yX8HQ7Tk8CpNXwPg9rACqc5kZCVRea8",
  "key22": "49juAQDmK3WQe6AdBGTSEEiySjH1NwU3w6RJWGTVbZx1KvS59zBcVX2PiWLi5LT3BKrbfLUBdA9nyvDtGEvVy5H8",
  "key23": "49z58dqLzL9YV9jyWD5Rvfhziuu5pgWx83x8LTDZnkSQj7X2aGCRo8FAyJfjtXrN1YmDTVCgAnvgAXRKXiSzR4gD",
  "key24": "4a4J4q1krfDk8yMV41BVyefURr49Vcuh5Qj9stVKfrJnvtVKE8zvZf4KuUAHx3ygMJeT2HnwuTaa3MaxjJ2CXPCe",
  "key25": "2SVnsrTH4KgqKkiqA287NpfkC79c3qtWoZ1XuZ1uSH8GdUY2CGos8vdGmBmCrNLj8cQ4kiH74vHfxc9Wa6VfYqKM",
  "key26": "5Le7LkaLnULYQQSqvJkVb5dT33TvTX8asR1zXdf4BpLfuoQMYQvCScb6wp7X4ZNdZ9iD1RriS6Uw6r24AR8AjWMM",
  "key27": "5LJVyv55sqA3sAVexDnTp5HZZpHjGmHm6MWJGuW4kxW77J7nkthPujfQbSLXztnxZLgwpN8UZtzw8Tfh6QNLkHBj",
  "key28": "4hCzUsH5iJq7TGyoyi8LmKwMyZa3gt5C6rbTApcrLa1zkRGrH5UugmdCTChkefdcJzM4LJhi53jwopPJU2hm6zix",
  "key29": "2Cn7P9VSqFKM3s3kmrbHCDJDZwbXi3QSfxKb4J3w3KeietSTdGb651qUN23SWRWBHCFSHU8GDn4YwzmsdR2DEHS2",
  "key30": "rjS2ePiTm7Trfe3rqHxpCp44zwF49Gq9GWE3yveqpyiryADefzvLHnwnEDoRmaiLjsbtSiXLGre7HhqbmCeRwfP"
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
