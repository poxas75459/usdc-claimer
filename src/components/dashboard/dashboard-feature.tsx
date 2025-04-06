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
    "Tie7iVqhjPFvbqqV7L9Wow9zPHyWKi34HNK7eStn7B5tBRHe2SrKQAoZ5Bev1M3VwvWo4QyNnTYkGQesd6FreLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497kH2qrJnvuNsJYyscHK7hRwqJxbsSTnTjm7XVrfef8HxHxLov1XZgcdqFzXiScdTwyvcNZnP5SnrWfTkWdtxDC",
  "key1": "26g8rV3HgMnNBRihT6uW6tTyZKx72odQ3UmN3obdhmW5Ek4YqAc7AhHyTu23D3Ag66rQqdCpM949rpPTYsENUngS",
  "key2": "5w9vmbUL7QgtixodaQdh2hcbssSnbM1v3mEt4hQ837pXffmUyJzdpXjWqrGqnAYxGihth1fEBupqChtjuWapkzZT",
  "key3": "2ntgKiKcSFWbEnYyfY3vCxP488cHkcka3FNwrHMinkaUoUgJKxK7zQjdjEBcXPmLbgDZhvsbHVZhXstq8uRVvZkh",
  "key4": "Pw358jhmu1XzxqkZh6L5bynmL7rUvS1pnUvdPLRXBfJJyNp2zQaywucrgmxztSDPYG3C3ZjMAqXhDVb1pS6HVSv",
  "key5": "taCarVoGXadXVDYHJZaFoJuBKgC9M7CzAGxLuNq1EYYUTzoSCKxLFKyG6kHoUd4izugcfgEeoDFVgGkvUG81161",
  "key6": "2wgc1twHYrZVGh4g9mfzKazm7gbcjF8NTWiW8qVHNZxpLQ3VhFwK2G4d6nxtdox5wuZfLBF3fV7CXoMp3QeJDNxo",
  "key7": "5oFc48P9DFVKCyvR1URZGiGVRd1bk8uYrU3yC8PiWMypeMsWVHVtRVRko76SZnVaPdbqRaiioL8KVqQCFjLoLmFj",
  "key8": "2PvwY5VqrtArBo9TtAvkMevukQi8WmxmrFcJCtwGZZPFw8rNK2QExLnVA8H6xd3HtqzZ4SBaagZWHo5HXvhBuxga",
  "key9": "5R6j5PeVPqxvU8HTS2nk8JDYYQqn4g32EKLgzprEGpkTx4GiaRbRM9FpstrZQSrhrr4F7LY8Xr379Pgf3RLvBUjv",
  "key10": "34e7AJAsvpDTuiPUaNJaTHRgg9BKQfJfoM5wcFUpa7evUUd9E57KBQZA6dNj4tpGgiZLRBvtSCedNk3JhFEBhpRR",
  "key11": "wt9FVbuMjFo5heU3QkL1TApcgvjdPed8k1XJn9YMRpE1t5jQ5mjBfTUt35dVdCFApL5abfzcbSVmpzGLZPvUcSS",
  "key12": "4gnaFhxtDsQsVYgFmPTZ9nkrSZKfUASvBC8UneosapYLTdygXJDUfJVmHbG4YQipB1fioce8d4NwwLJc8U66ZpAC",
  "key13": "4nfq9r3rExwmYUSz3ozHmeWxPUdqKxGfnagyjnC8puvHTk96jdoLah5UxJ3HCHorL92NLJpvbBxdqdLwLYYzSqkq",
  "key14": "4UxfmaafsYcS7BmboDNhkkNPSyKYzxP1N91MB46NXvw4zqoe837zHut36SxwX4QGjsiZY8krRTFhsgDvD9zknhwi",
  "key15": "4YnVEbL5zhkC63rpmViR9dkPSAdJHUq1W9qCu4zgu5JhkqXNMCH6KiKvVyWFuAQJWnVb9bt4ivjJwWmyom717FNf",
  "key16": "3JBLeHSvwfqfiBnQyRGhKWuzZ4fLLJ4A7uKBswpxJesfwWJzQgqZYbivUag39hsZK8TwSqCmjsxsUzFX2ntq7pL8",
  "key17": "2hU8Q5oGBazB2vFprW3vhgaWhRPPnuEUPphJrfr2WGj8X7kdCvZVAcptgqnwZwQXzUarr9FAyUDdM45k4xo3eqQA",
  "key18": "5FSPBKfY9ERbKWEuLRTnj65gohtQPg6qhTMVdfgJn5PQQ8JZuwUgCSmewguHF56MbymDCqru5XybSqDeuPR2JvMK",
  "key19": "4UP1APiURnPBxNuhdAFNtniT29EFgafzAfd6oe1viewESeULp1KpvGF5bmYXFf57AUCnVTgxnZf3qq3BQ3FKDAqy",
  "key20": "4oH4mZMr6C4BMWcgtGsvqigKsfSDck3ukxioRNJBt9FCARvc62bDmFFvskz4BAVc4jgWJZDJ8RV4bh5MTeWre8SG",
  "key21": "2EAdx4NfcU9ZvMwaBByRefds9ByWt6WNGQy4rrgM87AQG4HgweNBVUecmAV8Zxzs587KVFrfEzRgtGk1ry4ieC4A",
  "key22": "63k232k4BBG9bvuDnWCAtLTnyF3qoaBsu5Wfr5Nj5qFwAQX9Z4qRQv1xEE9Z49Jqbecx6bEuejAPzmDGqN9xm44L",
  "key23": "3SNghCHHqXAvEbucom7R9Xi3h1TDeerhJrPt7Thp9bD1soZd84bskm2hXGW5aEqiRyW69SDd7YRiAqMsdgnxRbPo",
  "key24": "3ZFEo7pDrZMb2dL9po7bHWqtieUrembwoRsD2LHZwYNeb43LYs8h7zNgSrn1Wbjok3yAvKyBj1j3m9tPfD6jpop4",
  "key25": "zchotgQD7XCCMbMm5WJgbi5YxBPR7iYQqVbU6MeK3VicNDmALbHveuFWGWqb5eyQqgGWHVdxCycAjmHqwzQqXUX",
  "key26": "3MbHbMPch72nSvH9seENPC7JS3D4WZJJ3hnsMT1443moooGLnhh7jS9ngAhrUk33wPd3eNazmrQcZ3CBvxsWHiee",
  "key27": "4kxQRWD7eRSc6ii8KQvBZx5NJKGSw6f94cWibdrzvMXteWc8vHsmL7mJT7Dx9H3taWETrGu8mnN6w4d2derVtvTN",
  "key28": "RvN8yVjyyUh1N7kFsiKM7qY7qDfUChXa3TXxDo2KPofZCnrX5hhVV5JpNPnitKrwoyoPBx3EMn1QUZJoR71cEo6",
  "key29": "ZhjooaE7iXY9WHBoGvG1SeQk3xUTTaYV8varEmhkDrCtyoW6rn2gJ1xe2tTwDzibLWeYKjyJFt4k3ggAi7b9TAb",
  "key30": "T1BEfc6ouVV6qpRjr1zRu3bvDPsac2VKTWiQcMeGzYhqHm1mKmqWkifPAjh88xGtXZxFeE2sDX5nW4n4ZVYHknW",
  "key31": "5ikyDyrsVqzzvqEKCw8Q9uMmr5CdVwL79TQJimj45fpGbe78ahcBrR4iZnjvoRkKVRrCFMqBUm5LkxTfiuB51hPJ",
  "key32": "5yPQq7jCsssfYVcrhcQMVA1AfUxcJK9k85CxpzQW1hDLYYHvKQSDiYMvJNG9gs9X7dQbrUuAFmZAJ8We5ZUecwCV",
  "key33": "3ZevdXS1WZFnh3DE6fKd3Gmw1nBMwXdK1oywRqS1ytRYUoDKThNChhjSWEr6cR6EcgkwvbXk6frqXTG2op3qWdJP",
  "key34": "3vKoQ5SoKcSK9FYZFdqewtN9zqZFik39JP6rkYfQKRgcb1WxoiBGHcXWQeSzJiV54GV7Dg7HgWfL5m4wpLMgR8bY",
  "key35": "3gzF2PsvGe3YuLYSKjzcrvZCFbsxai9fP8ZTz5uWQuXbfoy2uVmg4NZ2N8T1NexqQc4NpRxkHw4yZoaMfLvaLFbN",
  "key36": "Xi1ZgQT9x5757Y4tLkRC8RG5G5sUFV8jjZSQtUJknG8MqNRbXHBY4Q8Yys5B5tMZnmfBFPjtox1iPrLiHRS85V9",
  "key37": "85C625tqwY7hTHfEozFU5r4FBkK5yFkNmp4gUyNbbNrabPvjL5eFDAD5YPhrcmV7mcWr9gNAKjKkj1RK3QvbXWk",
  "key38": "3heZmnQEFGa96NnF3bi639aWVgNh2D8ie2g7k8khJna5JBd6zJGxQgbqazqNURnNg4UWVSDiFAjmFs5kCoC1Rsy3",
  "key39": "5TQNvD8bJW5jrBXPYfJJv2G7N2NotxQVstsgB7EhcTQrtXaFvBjZCNtfjL61Tktfss1Hv4KqgbR4GBC7ZJjUjEWL",
  "key40": "46Fboz9fbZdhKPhdy6wzVKLzu5QDANW1p4W1nmHmoQYrpbjmF9yaY3aRXW67NggT1tYEzPYawPMx29qUmbx7DAki",
  "key41": "4JKm8fgoiR5GDPtojVhxpuWE2MBL9yzXW7cRC3uY8ppKKVcYp6ffwQaMNry7jpgsyfaHMfpo57H6gbs1LzuCDdLx"
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
