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
    "5bDFSsGMDh6H1FocCm2MjRjAELkPpGcAo39btwXVbFm3tpmYVNCDLv8Uff9ju3xXNZ2iefJYGLjbnU2iwfP1cchn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVseWDT61BzmPiobAnv2saRfzG3ZTasRYLpPDkB16zWoXdEFdH7Jf7WyLxkFmeM56217G1uvjsYRwyKtM3YyP9E",
  "key1": "46FjdvimkKBAHt8dh6Ly6WzN8MJLEjyBSdmjYMujf9kXwd1dybffYa6p3PBhp4imjGMumW5AS23bwoQKZHrWJ62L",
  "key2": "4TXAYL55fEHAiNJNifPqy9cqmEVGL7T8m4LPwX1Hek4TLqGg1jNE6aCVUfxczDncGjsKGmLXXVWrswfKyyK5KKem",
  "key3": "5ys27PiqdPY9N2kTzyBmV2uNGm97FToucSuUhDT832YQxJ2gnGF4Dz2xRt5YaidjiWpnNbPPuzZwruTYZKLqum8G",
  "key4": "YP5JdwqnQL1gD2SsFseszjvz5SFTQEQeJMLcsCGoL16MZzpTw5Tf6JfnhYALw6WzZPW9iT6Se5AsCGoJyHMK9kd",
  "key5": "3wBW9B2RwjEN79fzssvEXHGEHFPRWZfVxRQM5SNYBj2Ro6QgZha4UhLMnVRs7EJDezUYyqukr4pFXJEKmm86Kdsw",
  "key6": "5LUT9kMvdeNUcbr61sugLmWtkdYFyhjf4nAJwjuaLNfZB9WXfJvib6ofgyRoyocDuGXCheCQa2uYhBRS7tkEyX2u",
  "key7": "43QjzsbbJ6sqW6SqqQxyxdMESUnRbUzprKbLkBoL1cHW7UBhF1awcgZ3qfL6NypoHdLqLTapH5hFG1pSnERGnmUy",
  "key8": "F6zo81NY7MAgJ3iHgaPgw3cXZEZ7kDucEUWcAj153MPNme1FCMiNShekiYSzSjUb5sKQ3hi4qqbGXcCDKndWtcG",
  "key9": "5bv3vV6F9nh8baQgHLBimnfCSx5qz571xuCnhNd78i5WnCMLyFhpVwMbJA7sf436aTMLBFheqNyYmyriLkPFWqny",
  "key10": "ZYByVJNw2C2xfHYgc5BAEHLbJKFmneLhHveAqVMeAUAXf49U6rTLixTTfUuHDHkBkPadjYeZC8JgSeQEBwqTJ8S",
  "key11": "JTwWuAv7o3Bv2JBccPjpPY6B5AqXpef2wemfZHY6s5fzmqgu973wCrFWSwmCEejxMZd8bFmiN9KAXReVkKN7jFq",
  "key12": "5PMgfanP4zRNv772CQHqSUgogZce5bwqwAAXeNCsSv4fUuxhnDJXseuiqpQL1cNbP8SkajULRoxzYYPGd4QubVw",
  "key13": "22nwvLwx6CWdmBXhtvM9FPtEvfncTgwcW3otEASmpUhrs8xUNaGFANxy5zUZFNQSXSfpgZxrfFPrirTQZX9WgFbF",
  "key14": "3BsyxBMM9ymDT85SXX7s1MuXoAbQPtvw922bZd4tf8Q5hZUdM7txoyr5LMJZbCFLCSnfRdA57WKny4KAoTzkNT8T",
  "key15": "5YFg3ZQAWt71XvsSpLxqdyt6YGikFrSbr5urm587HhEeUSdhCXkAh6w4bxCxMtioDwJ3TA5HmLaGtZtH7pSh4S6",
  "key16": "2K2nYNNrtpHufGtCvkdNThsVkHbez9ZwySmuz9BZK1GDahqLSsPaisVP3CUQ8ZmjEDkqPimv3ZydW1pRwkLUp7o2",
  "key17": "4VSYcsNVx1LTByHt3V9tdU3HNwaj1uyxwAXZJu2JDvwBr4p9PtsvynJZdqxAVYvEr9gAjZThzZRoQwSRqGpDgTZm",
  "key18": "55nE34eF9FCU7rxXHF5qhT24Ky44EBKJPrMhjD3C31yk4jDYLiCvW5gQrY5rUPCBDNTd8Tu1mcMe7fS9D68NAz7D",
  "key19": "3aytrZhYfs3KEQfw8sGn28XF7GByg8WPUzfLMtFa8HJFcNCWU4q6gdvuqsi3EVnjP1tdZvb1dzHBr5rwZuRwbUoD",
  "key20": "32QgLwyR3hNaXRS4rNjKZQ2Lzb2DBQNDfjH1if4XmQtrUcT34yQTgXrVQMVQ7hTjeyo7WaRdZnjJDCxeLdbXngag",
  "key21": "5vhYjKyczaYLWgiuDQvWjQZSBo4HAbbHuKZQprXYopNiTsdoBic8Ram3uEkytj7eCfiQYW7N1yDnK6SDtSxfBLGh",
  "key22": "2ogDvvQQCy1KE2Wu3myExWhpAAvUkzrtRJM66iRna5YZgUAcUBWonDK53M5anmqAy5K1UYTbJ2anWPCiGvqWhL8A",
  "key23": "38uQYe6uFYrbKXoeD98MdcJNiQBVc4ePJzY1jUby5SXxpB63RBvXeNDMezpdGDwoRt2hmfkjV1vLuMML69ewSrsJ",
  "key24": "3vJfv8kYnNUmDGUgpw74Pgs5aewTxbaisQEhs42BTeNe5cHCzc4VAKsfFGgKHQFHn5bBYeMxyqvvEZH5jqgUcT9f",
  "key25": "3cLU3astjUD1foxSgs3gvvDwRdqNhMZCwRzYY6dw1hWagCXEdvzpoqcufUdaVsiGwDhj6mKMvarnLE4JwP6VybsX",
  "key26": "3Uxyoga1aVM7GSC54FXebLfNN8eJe2u4RphoaR1zwBvhtqzq4CNuHmfFpcaUYdYCri2jbhwY4QVaNyBxKdLdvt3H",
  "key27": "3DCGeCEgQG6fHaVfwbnkXMEgbFRVJBthVjZkEnV5EBWRaCwZ1CGgwyNqBSpDEhv3vuV9DxDurUY8NMxwK8D1NaHb"
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
