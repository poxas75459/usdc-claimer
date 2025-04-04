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
    "35JfbTS5GspRXmXB41iJhEkBP2FnyXpwT4Zy7WTq12fqbc4u3DsBKqzSvza46AtBXu9rfmAvuGbqi5ehMMFZ3KrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jifMuYt7fGwz1bf3fWYB9FqJ4vsMaLYo3yd8farGyxTtWbHhercszGzBDiGcYWnyrhVXZFrbTmPJaEwjGK7eq95",
  "key1": "3ge8tLb1mXcejAT39ir9ZN8UiJtBvV5uZeB7EUn3WuAu8xxtBUiZiaswsEFHDDvoU8bSSQF7Brxn9jubZbbQpp4q",
  "key2": "5ZLNjEK59MR9G4dk9kMa8omeURCMtjpvmMFyw5XqNpGEuJLQdo9R483XZURaDS3sGr94roqqpMjUikYuBbZjrbPu",
  "key3": "2JefzgXHCUtQSsLg3jpimu9D8MY9ob22FZ6zYt1tLptmQqgRG9PLuQsjVFr1CF8BFBReYdAPChYzu6HPTXuTBsJd",
  "key4": "szPz7c4w4WSCAB1w2s6PxeanSX4WBTAqHo8NRHHmZRLbTTPXub6DGfHZmsQ9NMcV4YCvVW2YZ6UVS5ptj2GhJz3",
  "key5": "aeNBJEvcoDMyP5jq5kYKSnKcjmJ75zBif7iGEdgjYPbd1nSCNB6DciUuK5ZTCZxv6S2vmCiQwNzgtuAkQbArJUr",
  "key6": "eYrMNy86R66mwDtn8ivUXLjBdJ92z1ypyHH6PUmXjMKFxXfFVT5HMhYKbLafrCeRU1GeBA1ATSa2eYDEJyyJJ9D",
  "key7": "54B8SGLh9VxkULmszVryvJ6cEyc8yyWWm585F8JhWkcCvMx7iEhmNj9Jf3hen7UyjnhEzM3mu8gg3rCeXbRT36vT",
  "key8": "g9bimLiVsNSFhZB6LUT1uGusVXEvSuU8Qh7C8hvwKBn3LTcnxEEtjQHdns42VjeSaYqpW7FnMhkXVi9PoXWpbJ8",
  "key9": "3qBH54ES6J2eeGj3pvKnjd4tF86rj7u435MAQP8mbTVnfMrcrxtGbNt6Y28jHgRvu4fmFkesU45faDvqPBxYrBBQ",
  "key10": "4izqtFqLQpAYCAyC17FSA4FSZABDURarF3wjmkbbah3T3o4Tq4TbcEpTPVQgLQXUuMxM5N2goCmv4QLfHaVvpnCw",
  "key11": "426ZcSvYbBpX8idhrUiwoksQW7ZJxyNXt7WrXsphhA6BJsZ6DddQ8UBkpGkSKBCSpFC4wqXNLs9rFZFuq1tzvdGL",
  "key12": "m1R5PTFp1D8BQLhynHa5jyKChtkhSWvexFjqRQ6hSmHnnLrh54gLAVwuX13kr2o9nowo7t9TzZXPG1m97gSFF8q",
  "key13": "57QMVkWK1wZn6wArpxnCeDejhEaFnqyRiZSCAVMXzZHPY8givko41XEqd2HbrjVmML59RRAZGNuSfD6XjJzNSf7D",
  "key14": "42ZgQtFy5HsM9Qyb8zE3ec5fd5ceMYNG7QTk1KSzz9fQURpNZ4zkaXhJeVswHqDyJJ2i2AZW57hiuNqNHf9dMFUT",
  "key15": "pV9G1cM7CHrnEHuzDgCviQkcSu3b9zSRQDy4CC9Hpz6EaJK9FxFjB4X9BJ2wBwPioh8j61Mv7meBvEmYKBiCxEJ",
  "key16": "3XvjB3jBbequQrvBZE9FQ4X4hPmBjFuwbzqktDCx9gLEJ31tUfmxLYqnegGZvP8vN6vhY1BqybdBQH5RXJ1eJPBy",
  "key17": "3GptX3ga6W7hsW5ScZmVCNWEuVLM811Y1miuLkUiJ7CGQieTBbgqj2bmGYKKDJYAW96h5BxQ57APW7Hkd2djVYEw",
  "key18": "4n8WgYtGi7AWJqYFZmdUzZC3X4ZsrdMfu8ZuxrWZ6J81zHwF94h9FzbTR4ExsboKUWbb6czWcSdJL3C3iRDAX2Je",
  "key19": "2THkb9Ydt5B7Zfzi3GddkoBqsqUPBoDfgLHvEMAoAR1NAn6YgdwdbwyHNvDND5HJaYTa8jGSYMRpSj5CrCwECUAe",
  "key20": "V7HAvBy8vuVJNM4eTNLwUPgj3FX9mxrTDCp3Fcj5NUP4hAdUyCJDuf5geYNqnoULjh9bH1LjnnYbobLvDKHvV5t",
  "key21": "JiD5R5cq4bLhfay8H3fyLw49bGLRnLazZF26eAzLbfnsH6v8zknmTf7PV2yKHBSv9yT9tqV6PNpHbfYf3wKADqc",
  "key22": "GVZSfyuzAK5USrmfpQExJnPDZuSydbyXeEKm7z2fmW1gNboF1hVqX4rdjUiHQHgoFudd9AmhTNU1HCaNe47BBrs",
  "key23": "4zSh3qC5pPy9hY4EZQjoQ1KCuhfKru6UzMoJXW49cPje4vKYHFNjBVCj88pY7Yz2pUFZSj7waB488SqqJgitL6xi",
  "key24": "3UktASApP95DWTzYD8DDemb6WemMUvSbbmLkhVnZngaSTHwy1uVYi9ddU8ddn1rCUABWhvqWikrnJXiaLUjk1zjP",
  "key25": "3t9ebfqkmPLei64yKacqCA7LhEr1y3qUHQZCRt6ZNDWXAt5ADgEWuQMba4JTbYjCZFgBs3TGQiv48Ne1i9Y2x16q",
  "key26": "5pRZ9g2z1mmiN7W2mF5R8EtzQXjRVButt2fXgNKNxAucqJC84Tu9njhGgmo6X2iRVMAZth9fPuThqbfNqHLGS2WR"
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
