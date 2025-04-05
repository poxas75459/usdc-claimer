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
    "3QYRgUd9bTfgti3XvfE8R1oKF1g5usjstYjZocybEGgqyY9rK9iSSZW4XwaNcQzv5MiDBQqL5HSnZNHdhz2Z47fL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8Tn9oQZz6koxvKy38cdTqxmNUPiA1VS1eDcQQg7zP3B44x35LpbbWYkNqAtEHCs4R9Xs5j2tfvfa5wwwMRc6jW",
  "key1": "2uXwp7FEgBmffe7gTLJvdLxiNxYEz8LWk7WEnmZy6ftPoCgJmGb3eTVEebVF11Gju3vgCQCyn7osKiWEvXZ7ELUv",
  "key2": "2idesqvPH6232LE3qsKgyzA8rm9WfnaEiy2jKEgZV5TeD2Zx8C51oVGirthsCE1tnDHBxGxd8YEcW1jgza2jXDwS",
  "key3": "r6Uxei2Q6XXs4kRwMSfvh7Ed54TgvTxasn3jYMkY7zTrjeHtWyDd2SWNYTD1JhT4HadRbh5LR9Zu3ULMzH7SQtb",
  "key4": "HxMwrhbHiUo1YD3TJwuVS9UiXtexUS7P8s4cop1e8TTtBDvwCXLZJCMNFyzgXrr5pRU5kSmMVr5YBGM6zbrvW6v",
  "key5": "3P2NrYii274HamBvzEja6S1VNJM62dChQzuBW5dVewLEwxrnaU5nDuCGnHPeZLvoGDpZt2KusSztgx3HwMuip8n",
  "key6": "5S2sbNsukjEDAUpp6Fv8QL8K5EXEydezv2NWYTcQaGXAodChTc1adotGvXqgCqL2iBX8dQindXUbvyxvzbXNL6rQ",
  "key7": "C5Wnde9jsKYn9vofaMfTTPTcsybNgpC2MxjdB35ozzBjGndsfpJJkQNjzBGDi9s6A7rXAQWPBHF5NK1kkjWDht5",
  "key8": "3wWQKmE88vXo98euGwW7Bu9tqmSsqvUm62RKGL79UvPguS1q6C3zD1uecv1QdX4QDje4UNKpiaraxH4Xv8N4HKSd",
  "key9": "4HMSPFVwThimcZLPc59eUXpQJqhG5H2BGFNmCLhwGgxP7jBXV3vR1wf1HvqwYSqDAtQ6fkJGFrkNHQaMLAWhQSXq",
  "key10": "2S92UxAeBFrcEeAVuCbN15QdRyW1fmQak6jphb8EcA1fMBQzQLwV4SY1RHgDhnFkREmiRw8EcUuWfCvAWCkoC9hH",
  "key11": "3FcsUkcvvUJhkwi2CyUVMrXbNxHj49qzWHSskhprYM3eNVYGkE92vrzDzDd3RE4uGeAjyb5BQ9Ywx2gDFMfS1Khv",
  "key12": "3Hj7aFe5H8ocyQEDNrkhr5ophRPExbUFuXY3aKFmcimZdiK12y5JM9pZkKwB23SfK33m9DVZWpfSKV5CVfURtCfw",
  "key13": "2kUSJWpbj5swXNhkkRi1KaYuXqg6BepFr1edqiLtBzJJJxyCQ4Uvrx9XVz2kCQDE3v5x7QmdBkHkwa1Ys5hUDqc7",
  "key14": "3hUAMK6dNNGn5QewviiyNC5F7BsWt1f5hLhtiwtK8MYkdrsLF3KK3NA2NZWCwHxByHqCKMKHitNotz9NWRTVLW4D",
  "key15": "4V7eWBVusSB7Uxw9P3up1Qojrwo5yPqnQ9V25gzsYczYFUUoziFPjF8ThU2fyNoCMyQF7ygPKa9XxjhxLYJizn31",
  "key16": "WaV65BKgoRxT6fDHEmwnLvfkG5h9mES93D97G79SwAzwgmNCD9rHUdd4cFKxjuyeDGX5rFDMXmX8RncT4STiRZr",
  "key17": "2ceERLuzQKQX3uihdNZ6n5hfYH7iFixRsRgVybU5NLakqiXGrqvbJeRXdbVxijPBanU7AY8ZEpC7osBk7eyg7wxG",
  "key18": "2ogLP4Tqiszbafgipc8cSfG7z5cfWqZGj7b2zNEGxNYdfmSMpRdZDGZU6JYtKed8A1NEfT8LoknDEviL4YSeBSFx",
  "key19": "2RzyVzT4DhEiNfT3MohUxjPNZXagMDBGdav4mvnVNeCAkpekDKzT9UQRbq3D5SpSccUz1kFxM9BjY12EU96fMJ4o",
  "key20": "2QyZikBb6zpoJoXLmieJ6V3AedpCVtekkyn4BgeEj53BzQFGR9pwJS3fEiuyaUr5CaKxqQmWUUBNCW8EYQhmR7ky",
  "key21": "3Uy9tr5j2iDHB9tpWGnQWmBMqztA8aaNNy8oSe6Ue3USUrpskJKpX6U494u5K9az6GFLXygMLLGpt9CF2qTB1G2w",
  "key22": "XhYSKcH5SbYWkA1kJimov9sZT38mW5WYVszwZa9x4NsidRUpWXWPZAEzrXS2SCNo1zszWt1uM6FJS2keC8UYRuq",
  "key23": "4btqSPZFBvzzq4GgFhAYyaedneXnXpBtuVsCZqsaRag3QiZKuiyM5rmuk8ZvERyyj57FNq9b8WKKjKTd3TH3JY8",
  "key24": "dy7Egzyj3VtTD5Lu1ZbhryGfDVRdu5Gg7ULm7UtNrc1iiWJXxD9S9tubWLyJjqXgue4wdyfLsPtTDKqP1EWjALw",
  "key25": "3KakXn3vTzxtdXZvPyg21zWTTkp2CKDujTNLFQQCPQhG5zw9q8V3Z6HSsJQdebn8B9uH9a1GGDGt93FdRa7FC8v1",
  "key26": "5MZtUvt5JvSAGJzc571QfKDxjvr93eBFeUpMLCPUGYijeJakJnhNBwosidgBkRJ31NevCQqnoiqat6ms9Bhiw7Np",
  "key27": "2c42V7L3pVZUaqgPXwuttJ4Qw9UG3Gkqv1VrUbVC8dJPG8HswvB3Xr4qsNjn2mLePuusTws9t6NwXTuwcbjcNnWn",
  "key28": "64iB4wrtdZr5gXPKBPgxQb86QtPMxXwWsGdja1Z3Qsiqy6KggFNB6DjNDG9p1XrRCUbVNdcnCuiNf5aA3NViKQWZ",
  "key29": "WFqFRvEv3i2HKxPgSKCnH7KNxX7v1PLcqabqppUAmaTkEQER5ifFqvEkR64XeUpcDucELjsFcoTXah1JrnPgaBF",
  "key30": "BQXyYZyVow1rcnoushGmFGXu1BRHi9SeQRavDdBfAe3sTAWwyxKb4VTLrkHPhpUGqi8Ph7FRna2E1FTys9jL2Uy",
  "key31": "36MD3wmzkNGek6zuX8NPqwvpgMUWmGJ3UvhXrBi4StiQg7FAMV42Jz5jC4AG5cGAE8FD4xC4YUn2mcpKdUUnhcDM",
  "key32": "3m5VbAzMhEJR5kuHSuamxuFZh4JA7aeSVYdv2BTtvomVkrDhG3hn469h2p7PTna9zxAa78qDQ5gy4ndYPQwWQoas",
  "key33": "5SaXwXhY1rhPm3EANfX6PsefMabZoFHCaTcGyBLDXR2Zk2JoyXNaRpBtRxYjk3fE7aZC2hcffZC9srp4a513iVYK",
  "key34": "bZJp5x3hBpjyhdAH2QRbEj9RFjDGUJ5TEhXeHw2mCDQK9Wv1gUfxH3RznBX3kgyKo4SBkkAfZs5e3YCdYQydYQF",
  "key35": "4TvytUraDhrjYDoKMKMYSsNNGSF7N5Qszuhcdksb6KzaMKTAmavtCoKXyfnmq7PwBd7HHmvzz6opdwreWyKFjVS",
  "key36": "37MrS24425DKxAoU6KBrRb89f1HQs7gWMfVB4ww5ZRPJSmAL7nkYY4DrmmTNwfyvvbJ1gS43sNNSFU8BfGDmGHh7",
  "key37": "38XkMfLTviHxxLADW6DG24TzAA57A9tteQToEWQVR97DFawYdx4CyDXU6fn489DYZtBwACzYqcgNZYuJhpCaBiz",
  "key38": "cjBNtAYzVPsFkp3rWZ5VwET1vThcMkJvjAL7m2sDeb2uFgtTgALPD2c1KnSz5WyVqaNd5nLCW1YpfRWaaw77jeZ",
  "key39": "hkZYy44MDZ9jsQ1mtE5nkmTA4vaoAczMbSqPtNEU1fhZjMvZs6AEX1mJz9Aq5BthVLvsAPG8AUuqyenjCWaTWFv",
  "key40": "ESxXrjE2PzPqHxtnQibpJJDY2ia2ScmhcMMz1z9ZcmYR4rmZDv11AgCukV6RnztSYUat5CYYbM4sYMW1eEdNebG",
  "key41": "5gziB4xp6TZfgjB9YyYaUvQtMBs4huHcdBitdETUCBPdpBexxFBFmxhMb3WjSDoguavQQ8ZTrkaQZYxeSaaL7agt",
  "key42": "2dqTKvjL7w9Kbuvqq3fyEbQXTqus4oShe2JTzSnrCqj7A7zF19CNY43jXHVTRUuMtb4M58ZcNYbAYTYHJKb6rzLk",
  "key43": "63KeBoxgv9PrpycdPd6aof2LjdAUuwyr1FEPTvAfuJuwKutjGNVjcrUTDFxJMskDQ5rPw58Bnhz9b2uqCGbhLpkT",
  "key44": "3S6QcGhY5Z2qH3B9nMyxiAHXchTmk4vVatN3CH8FMW4ivpB7R5fZzb1GtQmgSo9NoyifwxzKse4DKtYVBRiLJuLM",
  "key45": "3ivmJBYXdAeXajFBKsbi1SYPH4V9Uw9xD6HahcoKqbtgE4JTk52FX1VdDjDshWT6WYaaymYiJvXYuVLVcQYj3c9H"
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
