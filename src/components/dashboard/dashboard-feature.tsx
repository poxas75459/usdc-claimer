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
    "331gUKkWzqsq6Syg1nHVQGPuTVz8hbKuk8HaWBk44Gsdv6YuquP4Dc6SDiVBfF8HfWJp2cQW2Skj9QLgXGxSYZqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44gFMK348Nnyu4YSZKme4rg6V8CKHbRnyQHuFtKDWu9ocg3JqnoHsjymVG44rmLCXc1FVZQ5A4PY7zznkn1euJnY",
  "key1": "EZvxSWhZycpiwURS1FdumiBBgyriaqpz1GaUYmzFpsRE8xGSWdoEMPYK57jjagZPYEgLzZh95uruKTNNttrQyu1",
  "key2": "46Hvwneuk3raEtQgwzZPdNMNgNi5A1Ew3ck9VFmRD4dTxcfGWgo5ZgHzTiWpfN12vpLC2JdrAHWE9p35i2dK4rvG",
  "key3": "39zdGCM77LT3NJ8jGqXWFfmT9sU4WARqQwJCJtHEgC91eh4YRnzRS4qwETtYaDdmGw3f4sLrkDvQHDNGK5UnEMMN",
  "key4": "4CjqW7ThfWkgKh59HTgwd258Cbwv6WhBCvpjiEuNDStUvtQZAjtCvNZ3dn1rUgkjmqt4a9WUvKRJ9kL9Qb6oexuJ",
  "key5": "3f69W51PZc92JeqrZnKqLzqHU7w5uzSbYyi111twDhtL7bomEUb5jwVoywZK1c7N1higTQeZvUe4pJVUbhjadwKg",
  "key6": "2mVxG1isCGMTmpD65HesZ2TkJ5AVF1GnVvz1LK4AjieBHwp1YUZPzNXZztMmaH3EQFY7fw7Jh6SjeHkc1ShqFHeA",
  "key7": "4wdMMPc5LJBLCQcHbzkgabW5NwxtzfU1N9fkB7pWuWx3aK3CJywtsAzYtdicDFPq2PVaMgVahtWzWRUYCS81fHeN",
  "key8": "2qRe6q6VTLwapDfGqDqTDjLPV9r1kFX7ahnXcNyDiYGEx5YsNTk5iW7TgcpvQd4kBKvFENzZG7rvJKXcKdsuQEmU",
  "key9": "2qx5CCzVvoUqj9THeKGP96ojGqRAkJfSoG7UgWNyAcsqaaTn94XzYP95Cndz4SbG4jNEcnj15CUc7Zt6UM8EAZMk",
  "key10": "4smZbqHjMnv9TKayHwnooKnYL9V2KfGNAdvshn4QFa5B3gAMRwk77ryNYX5aUci6jMrxL4HVqwgPVsCHKxi3fSrf",
  "key11": "3X7BytpePGqSfw5dChYAv2mDj6TxWyZULFfs3uWqXYj5ckF9bxJoyoDEck1rUaiGqxrucrCpWqaF87zTDRU2SHpD",
  "key12": "3ZhdErEWAxpmDDxGce52LvGK4uiWDvSCdgWweenqixj9DfXxQPjY1R7PK5W1aVJYo6Si3pSy6nc9L4oRbQwDUddM",
  "key13": "3izLUf4Vf3Erbs16tmY5ZZU3THABCLoFR5JXwk1mpXXtRLA2cs7P12VgjozENmPXsav58h6TrAbMDongEXoUnmwS",
  "key14": "BFkNrLMK2MMfM3eKnKTSRB1L2baF1p7VAmEJZcXNBkXjPcruLC8df5tWmRhZqgLMwYn8wuF5M9J6HfShSsmNGP4",
  "key15": "4zwh3MMneRJ2ysVDy9tn6Bp2QG9WL4ke9YK4rK6dmyKB6Z5GDSDxHK1Q6JwAaBbK9NQ45h5gQzHjbomvJvUgsBLf",
  "key16": "4ywANnC4B4bWy2dHhk1mo2dcpK5zUs2cRArzhWneXBTq8RLSRDgmAsR4xB3Mb1QrpW8px8ogRKqHmTW3317FT7GG",
  "key17": "3dqCi1XV3jLk7jaGsJJuZVgzCtn91qBsbwBwkgrbzT43P5fz2ScG9TfmrEaGoSaVL9PNKzJDxwMHRHEAxJaBs8Cb",
  "key18": "5Uan9JD6iKT8obt3WVMvuquinQrPv7sWehXt2PofV2Pu2JjB5rYegNkXpE993btBNmxsx6WQFXxBwvdFwMtQLE8n",
  "key19": "2gbpM3ruEgVmnPwDAWWJmKF3v1i8ieamRhNJtsS8KsqxJkS4M8XoD843MvnaYoFjXQniVfCNeWFaRitPdTo2jEpR",
  "key20": "2CtSKQixJJRC8eypWPEx12dsx7oEKF5towp83gk9HNaN4JWGiF8NF6hg8zCo7QAJqo9aMZfY17vCxmmeXNzw1SaW",
  "key21": "2N6Lno7pUKfwoLzL4ZZbArRqnKWzpWUYwM3w22JcexenPAh6Td46UYhMyooQck2FUaFSyowWJcA9PK9BZtcEtUHT",
  "key22": "5ak3oWjAkeVtR8wGejcjFgztbdq24jiXrE2chk3hYy5SSg7yandPHkLDUN749vLjGTW4Y75qPTRGi1s9sTQ6Jgb2",
  "key23": "2hYdhWr8pAB7Do7J6XCiTAaie77S4dBmKXhMJShYNUCtCyNyp8t1r96TgcUhU1ST4aw5g35XFCc79gp6RsaWdSza",
  "key24": "3ugNy5sF7AfLegdznappPpUa95eqzJvGrcY7jBPfB9Ta1pAGCVWCFBZkJRCDu8E9aUBb6zWojTQQBgwLZYKLBdpi",
  "key25": "5mMDADVJz3szSDhPLKytSC5atxGiScwyZ98jKDvmkf8d389wPGd9z48Xmtike7JphcPirRym3AmdmEqkQNGsTMJm",
  "key26": "24PkzUDw7jNd7ZpZg2J5Lv5CXV9T7VNwzVhocPcUhb1GKzL3GizLzZUZeRikmrQ7Pz9Q53VkALYa5zm5PDdYRE9J",
  "key27": "61ZLfoGeTSBxzvpbkWNMNNvLwZ2R6G9qxKSyiW1vDnkEVQs4bsM2p5MH4Mn1RYei51LfvgJp7WrPRsUoMiaT8WwZ",
  "key28": "24G6CjHfZ9zoo9jqhQ1huD1qhY3oi21pNZE3MGy4cKsqgb1BJ2Wukr8VGcSjYSF3Ta1acj33caBA3jtxNzT7h2qp",
  "key29": "WDMnW8diSLPLCh9dgN7zHYbQozQqU9Upn5ozifb5MpKkkgxDi7zjoijDSisBowPfeYL6RQDCXsMemTd7JUUfoHr",
  "key30": "3NanPoyvuSvt5v9sm2ZjJSoWtt8szc35myKt6LDEQquYm9993LtJHgvFHVDUPx6VLKwCAkBDy4qrFgm62EJL9pfB",
  "key31": "2T7UXe7rFqPDMNhvR51WZ3144GFMMTbX9ZEuFLkRsn37qwxMZmj7g9tsedVBsnQLCHY6nRkp4kgTWkHC1xUvTj82",
  "key32": "3TnoNiPhHa82UHSDi4LiNraWpECatjTGzVCkbKdzS7xcFWNtqYKrKerVCK9WFSaA9eFJFTfXW1ziiwmzwuhtPkYa",
  "key33": "3moP4gCC6tJy72ENTT5kSRYdg6iqQ4kdABA9HBhrR4ZQxqkQgcHof7k3Cp3gKg8nXAPYMik57n8Qnj81ZAUPyKz1"
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
