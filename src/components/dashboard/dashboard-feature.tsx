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
    "5BG88NLWRdAf6jZMUijvhFVVdXd38Do4rG7UQ1FqDXTuaqCEk8v5hu4xYTAhRobrpdF7rze4YsBwuX88s9pgN48m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BL2opAaFPuJYsuDMWXY65fFqsXLENLMLigcdYWKpUBqx3g5Vt2Hr2SuGRRdzxjiqK56SMqyhDD46bDcQAxBaYXk",
  "key1": "m41H6xgQHyDWEgG7ZhxwTis6NTEBDG9Ye4uCzTyjAABq8KjSPTXBfY7p6Kb6cxGwGxajEHhLzVjmviGaYL4qseW",
  "key2": "2MtTkRzUgAqYhzqurpCvqTGj4mkMUTVVH3esADjbMVXeWzUzfyo5nw3XZFYDomhxqDWTS9qSUJCcyMMYcRxutGxp",
  "key3": "WZaC5RRpsFEfbZqNY7KjAtYFTuxqvw4EX3PZxcNkeSFPJayHcdW5iWKGbW8fdisWZmxb6AeenE8cB4La52pqd27",
  "key4": "fCUiydb1nAc2G1NiSehe2Bt2RBNKitMeLZr7XvxJAQZ4u1mE8Km9jQ47s1xGBcnszyveoc9LxUFQqqNCzwpoXiz",
  "key5": "3JTFdFvXPe4qS24WAuL9sE6cQfJf6H4FeR5cufKxrXF4Vodm2LzyMjFVXYUVQFiN9YAoFjnVfNoSBHjhfFeAhaTF",
  "key6": "UDFU6MZzLxDopBBeTUhoHU7HsM3uf1XvuyrV53wmccfaTJJGuCa33m7rSPscQv91cfoYvjB3jvjdJok3PzRCW5x",
  "key7": "GJLpqXdsNDfGLvmEjf64qVciFfu4EFfagoaac9J9hgpaur5XTAXYNnnQQdGDNQQa9JWebVbkzaHncrNb3ifQMWx",
  "key8": "4RvHAW3QUg61DjGHeaU6aRDMVJdvSbjLoKQEtmod2QB9KhUq6m65BysCk9xM4afMoGfmurbgPqZB3AvjR9KyzALu",
  "key9": "5cpTEUD4dnbCFtUaKVZDWNAE59EmC48r4TZrX1p3d17vLYLnaEHA8whmZ3PGLtSZXWSYniQhiaRrn7mqMoa9sxVJ",
  "key10": "3p7TzBmaP6NFEWrLuszju59NmeS2BhqEV3UqXDZGZxAhKBSYxYUU22pVuRhGHF8QAiFjAiiKRcRFHzCDK42FQpLa",
  "key11": "4YMQs4QZciJqAi1ChBZ4pDuF4Tchkf4MhtB7p6tMdZgXNzMkH562rN2uXDVbjHnUMHXLytgvBrvJhpetoz8cSWXq",
  "key12": "9UWdgB8raPTiNKnkq3ipQ4zCxhFXhL4H7eu9KXfBBFqowFuCPE3J3gEr5DzZx4GFBtxjwwvWPAWKPKBrYa9tdH3",
  "key13": "4dwCyHb7yBjJPhNNisHwF9MnR5FbGV47UawBVW1KwuBM4JbrinoMrTdKrWVJkZAaj2zTsN8YK5asyw9N6YzfyzAR",
  "key14": "3x8aUGoEfaNEmuiVdjdKLHWM1pzYzgcwT2TwdahehE9XkGoAueJ55GX3ZZDoyDt3sxrFws8CKVbHZWcJNaYgQbtX",
  "key15": "3HcVoPR8mCB47rbDGB2zpsqyrja5kh19M9Ba3UftFQ5mRDyxhaaid78HMPhS35PA26CtRmNGbmLZ4nbA9XYb8bTr",
  "key16": "4DfERiLVi8y7MNwVA22CSjNS6kucPEPoR9YEY7Fn924Z3v48HctF3unRBFju6yJRzKexBUdQAZ96cpYJeo7kBn8g",
  "key17": "4XhepRowXodBANpJJ8djMQV3xN2M6aGi5n6AXvT5WKEPHDtcSbLrm7c8JC4YbSF9XbaqxxeMhM2SNVytjfECAbkX",
  "key18": "3RxvdaLjMrSYGv63hXLQMQCcWuK7HvX7LJdRWKM8DpuccXuyjBYMemtBfdATTBr74NPi1VMTiNXcMvWJxVvPcRZA",
  "key19": "4ASnrQ23LR2s1A1mkp24vjT2odQjSNvdroFDjjoaqsNJBpwiiLZfANMg9N6WgvbPdKprVSLhdgrgC6hwDAQSidfm",
  "key20": "3h5dTRHyZYBX2Fbe3FhvqLuKJ91kmwcKwFAeCXHszRvhPLAUjMmP5gmNV5WydJWR25heq1rN65q53KHkwKFMnNER",
  "key21": "2NRVDBxSWpdZkipjQ5wcyR21Ws9KaXiT6mASCG4z5Bw9UqtBU6dbQauoKWdgtJR56kCtuEQtwe54n134ty7FsMVH",
  "key22": "5aw8uPKrdSQ3NmYXSoFKXpyCZoLscYLuDJ3EyMAwqnyLynwtDwccWXH7NX9ittHE8mLpwsU143NptL46N1T6jkZ7",
  "key23": "25SstQF9KVtAJsi1gHtj8P4w25H4dfAHGNFvuHEHi6kuTABGLgoexp12vwUaquqGu4vGDh5EmQVhHvWMPPZRn1Wp",
  "key24": "5TUGhLqzkQUisisb5okmUXgsND79q5kgMYbLjqPSHEXQ9SYKZhh5B5bXks9PzvZZco876N56xdxuw5diE2gRb8UJ",
  "key25": "PCbF9ZL7QVtmewtHhikZLsSLWRZG5nJJSti5MpMxgys2JLFtnY6jkDHG9iSxGFmP69zeSoWb8bfZ68qmTvG8q99",
  "key26": "5rA7LgxVEqCqoJKAqQXKbTCjwp5deMNH2hKREdv4ATNsvkXkYEXoHxV1onDTRDHRFJecHM5cuMsvdvhKSyhz69Mv",
  "key27": "2JSKHQ3GgVSdHCxih8sMXiUsxTjJtqxusigzw77jxbniNxTLGHHXNqYmXxu7kJBRZhbPhZoBfdvizCY1t9VMUNyB",
  "key28": "3LrUny9c463enSchmhVV3gnC82fJC38RL37UksEvWeoC9ENNUnqaB3iK4XKPvk5azRDebPACnxAiDE8jFDyAp7Rn",
  "key29": "3BVLsCcExHZN1P33e1S6A7wpYiNGhP17Ab4gZdjURfCryKETydXmAAcRCSchFAAzgpTm3MiYi6Kn1XsD7ErJ3xeC",
  "key30": "3ZYuvTVFTZChBVZUc8ee5eDFYGfKSNTaPftrXfhMNvw2dVPq5Kmxk8tvJ47annyJTw2nM1QJMuKn1NTYS1fE3zXy",
  "key31": "FM4hbP9mvRz2cbp9csqF61PmVEvcQjvHgiyCfrdsu5PBWRuSnq12yNRLvtCEYHwSBmUd8EuUYEeLV4zHZzW8qna",
  "key32": "2dbdxuKf5X4JVWk4H9tx8RFXjq6kBXnkZdDQ1vyiHFttiuV2FoEirJD97f6kuTmjhA7NHTtqH8vwb47bHKLgMK1h",
  "key33": "2eqBxgQrVddiB6Zptm51BJNkXQWQUgAahmhTsHjgQjTDNbrKbn2Pz1T1Kjx2wWqTqfzX36k3E2PSmZvRVvXtAbrg"
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
