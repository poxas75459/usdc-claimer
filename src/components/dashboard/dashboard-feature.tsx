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
    "23kEsuvvQNJMCf4xzgqwBZRJ8q1iv78P5mLRXswZJYoG4ScMFq8Se88FHLpPgnSnytbcAfQWmEZM1QZr4CsUU4FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sY3BJQoAy3CE4HrUsufUcpftuYEmGqPrUiUxKBjD9smvwSjmFfBpFtH5bBNpBx4dKVupDhvrvcACyNW1XQdbBiG",
  "key1": "5oF6Zeh77gkSwuVobmdLHgN4iyzuPMqhqk6XtMCTqrMKFqpyBpecwiovvWr9fH5Rgetv5vKVFDNUwqAEpLdqcdrZ",
  "key2": "2wNhue8uvznPhNTFDyPjXqmo4Z8BkGR7Nwc8yuE6dzrf7fzWtyq4ssEGGemkJb9pvfan5Svw97YhSi8ecf3D2uAG",
  "key3": "2oP3WWyV1HmccuSGZLriT5N9Q1VZmnyvGrzWKUFcWDSHQWyoXJ7gRbLKEyDGTXwPGFA9rD2WAePUU35ahgYcMpiP",
  "key4": "5XkwoqtNJvEm3FTkJLKqfYuLAAb21otVLwDLGii2kzDVNzdRBrZXHnZjAKUUcSmcUE3ex3YShE2BTshjrHMvHreM",
  "key5": "5TQ7XjQMnBZ29f8mCcLikUoGhK6mhZPqZxzmQhQCe7VacG4WobAUxjHUKfvKJpCJ5ssKQ1sCVLGA6Es5iYPuGvx1",
  "key6": "4jc6pwWk1nFMmhzR4vqFrAD8GCj3nqw5A7SKMqBnHHcNPF9jYkNVXVAXtah1DH2VFRhCLhdEDpURANecgtppvkZz",
  "key7": "4mMoTH7qkt7Mj8T4phUUqYBEqvxo9XjtoNXFEYN4Ws6mG6gWxBAkAGUzVyLfPDVAcAgTuthZNzduqwBsYTb3QPAd",
  "key8": "3WzLiWvSrUsUsEXLk4HzmtMkEEc69KWd1YPUDAZv1Jo5BZ3foAsN15PdvvbB8vx5uTrhWrQswKC8ax2vY28PntSJ",
  "key9": "4rAhsEN6TDXtC9yfF89xGzifUsX6EzzLXMKZvb8kMfksBXQNtsx2W8WXNXvKZgD8xMfmbVjFuJJnGiN89kMkvv8Y",
  "key10": "2XFvd1GAxkigcNgCNzA1N5KSH7BRtLBUkvcsGLXiZdGDmPTwug7dMcCa9ZqKeH4GfchpbxTGuEVuhgUNMYfbRQZx",
  "key11": "4ao2tWrVrq64Pc7PTASkUdihuwFScWsa27tvJAm7rwuuf8QrRsYUTb7x2qDE8v621Aur3R9J6jeY6KCqmqTkowBf",
  "key12": "2c9YeGHUg364GDjbbjEPcLhaQbBTqRbbDg3VBBSE9bqvuKLUj17pTssT9g354dsUr1afi1rsXCM7hxHihMxSM1yp",
  "key13": "54VNrSZ5PBPooGspRDNwcDf8ZRrjKApHow5Bfw5dTgoyAXVjefuhMYxCj57tSQveG9Q3MN8Rjb8w9oZdWDdecf2v",
  "key14": "3NhAMfR4rSB6fWjgj38zeqjgjASEuD8NkD6SWmzQadPo6sT2wJp41Vwzs6mNtMgUnrps6Aw1bLW6DQdoQcdX8Lt7",
  "key15": "5hYH76Si3Ld5kQLvC5mmEYsTX4yAkRKWXRFw7wyKSE1AaZ7CPh7ASoaYqXuVXDto98Zmsw7aaQ7Y6jvkB9htape8",
  "key16": "2AmE1DfF3LQAosVaJNtUCxMQZMoC3TnKrTsM2n8wMnfUQ1XVALLdtqXB4SR4N28ka87q5wxkv1Eit8CYcSEQBJng",
  "key17": "3MhifEkiQumV2xwxqXzdxn8EYAnyNXJuus6BJ1VTkFawcnvUq8F8M5ttzLDxFZf3ryCz9cK5MW2rVLKhxXLpf6LF",
  "key18": "23ri1z9nwmLiH1GC81BnNWAGKdxqz8wJnYWveAFo2JqgxUTgXMW64tJ1GUnJe9GEqjpQpDxGApCb7WG6wdJueSQ1",
  "key19": "4ouV8CykrwPzkeX6pRf1DPV5iB1E7r8sx5CK7KwzVcyeRy6dKuxB97a3rcn98ahsDyGRZfAvCAVURrpHt2P5r2K9",
  "key20": "tmzU23k5HmvoXVmxTtVz2drJe8HgCD3rZ2gccTfzxSS39JEh9i2K21XqgSBieKgfKeWvGY6sDkaaP6DsioAVKZy",
  "key21": "5J7XBppyegFHsqkZGsZPW2DMe5M34D6Ga8WHZXeHopFWPwawiKvK9Zus9Wh3gNAjkFJGKJFFg7qSsv6jtMeCeQMS",
  "key22": "RGgPy3KiSYyoFoUCfUD8azfjZr7xaaJ1ydNhAeLYPCoojwEsgpfx5Y7Dq5dE4EP3LqbA24TRvEb7L3KLQwy1thy",
  "key23": "3g48sdA67eMUgFy7Ef54f7DK37rgBTeynn7q7yVCA5j9bvC98gBvdhoXPCQHT9FNFy6PFTNYEHD81p3Zxf8Nck4e",
  "key24": "2Lf7pRYHYTpgh2CCj36rffXeSZ15QKHmqqXaT58Bi98htPk86c2GkPxCwTDcdFfFnV6hjMXqYmbuBmAETgGPeUTp",
  "key25": "4HUCMVx9u9pWWG3vdJgtXrLz2r5xjTmq4D5GrBFGEErWVwsj9gR8vV1PijuxjEFzSbg4YteS1obUSnvkLeuPETzd",
  "key26": "4z4snV24wobbiQo1Bs9bcH4rqaX65o2pQQ2axAiVfxTztVLFy8BwzgwAcGN4CZsdBee6DoXUZTAaDa9gHaB73KMi",
  "key27": "2dKyFNu5BCo8XwGGBgvdYgp275LpG9abh5vtkqtLPF9KY9hbxDzvZuR4n2N6jKSrAAm3TkZaUmRfo4PeAcvf5Y8C",
  "key28": "4rKvvkfU6zuD6SSMajJibz9h3UmrAGSPE5HYRK8i5ikY7hk5WyVCMACoJYUEfLKbDLFwU8qLJ8VG4ZdoarhTZ43Y",
  "key29": "5bzmwmNczmCkJFPqM5QreeZirFLFNBegvaxAsCJpomDoimjSvb3b4ygJF6EKiWF3buQtpjk5R5miZ4RsvxKVeBtD",
  "key30": "5GDMTmyZmJV8DkGu88XMuYXuxe67b8Gwh1uSbsiHM1pN2pk26TaUvRgxghNFbSptwpEAGWEGXjwMDCbh8LHMjwsk",
  "key31": "2cfGz598yaGBKkFzMsaiHXD1b7gyTVdG49xERjRGbVEGCwnTVPNACBPYgTgHvHRK4PxFyxPKUtsPhWzm8YiYvDsr",
  "key32": "5DBBDwdMQvYMWPNgaVvjLry13WUyWPRgS1knNmcmcEWW3ghYi8JX6ucsHRD7fZv1oMCqM18FbanmCXcTQVGrCnqM",
  "key33": "4MKMF2f8wTXppKvJFRE6Azw3tgYTZ9icenYp5GJYX9MdUZFfMniLv3uzbnBdsrrLCySGeMxFB181ts2GjFzrHce2",
  "key34": "2ECQUvRAqwFSi25P8h538Dug3CfbBn8ZND6CiDa9THf3QkLHq8eSAYmQmGFpgtaxcYBPex7M41c7E2xseGwV4pRn",
  "key35": "22vhgNRyXbbfBmMc9iRqGPVQYqcoo2vF29WGixiq7wuxtRv2ZMvXHZ5N1iPkhusHbTw3LY3GhxNz5fyt4Cg8qLbU",
  "key36": "2YXCYFWas12FYnRWZ7AAP5q4MQz2bY5fEUYRg67ErJJkHGUKrGA5b3FRKMfgPaF6jMZXWpvF1dmHgNm9jv8ztp3C",
  "key37": "4gCQ7XAPd4vb7WoEM59viS2hhh4DFf9vL8yrfUL9r2BwwvUenYytCJKXUmSYa3N2Z1NDeB7T7ArRtLKQedFaZXPS",
  "key38": "4rH6n2w3naDBXgxYhmWdc5bRFQeJoSeYGivU1qwsqaCCgZ72TUkx9vE2tJyf1wZ9TbuyvM9T8xiApAtu8zSzktit",
  "key39": "2vVV1GAuDyLn5ZaqL8KmPSqQTW9YtefdNwB9Mj8wu7fdNCPLtuBgz5tPaHaXk9Edmk3omyajcYR799g1onH5LoXb",
  "key40": "3ww9kw1VAuatuUwDMrfsJ7PvPz8WxGQEGsEsENUBzcTi3PxFdGGzkCQT4XVan6iWBf5S9a8iUbASxjyXvvexjFTX",
  "key41": "5tT391pW4C2dnnNa3RkQTVPPe8RcPPe3HuR8CvZfPLN7PJmFZkhfMXdjpNrqZLsJoZ5LoB1tHEz1cN9oRpkoAqLx",
  "key42": "3Ztg1SZ2DZ6YSujQBPcWp59wcS8u8QbGp2RSTHMJhGremPCvTxHweWeDLcP7CfcWGUTWPzGj3Ax9mcoARUHCFni",
  "key43": "4oUNb3Uz29hySorAXyYUPXM1pzhiGgpK8vx4BthE2NeFkJjXufNgrUeWPb5YELroXNctWDTUqyriWADowdobDTcd",
  "key44": "33UhhKEpWHEnA2abE35EWWTWLrW2nk1w52zCsvehFzenh9BMr5bKCX5Ev8J8mS4nhLwdDQNTtbsvaTnVrKtycAAh"
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
