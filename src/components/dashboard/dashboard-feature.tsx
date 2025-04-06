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
    "3sE24xsddtcWLnrjExEeEjvURvsFDLJoaXgR7r4tL2n1TJVa8yDSidnPaGyFuLAB9WSz8LsryKxcE8aBxSe2LCXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzXZnxYak3Lz3oLsfTAByQfvP9PuehEdEPUPoHZAcAtzGFJGSiC7pXYfedjDWwuKzHJUKWVcC6v2w6fvWQzSc3R",
  "key1": "31jXa7J376a1UwCcwSCVojNkKgmea9WAYqUKH5nwrLVi456tzsE6kSYqg7Ga5hZPd5sqgXRu5uxDTM99WGtNggVx",
  "key2": "4XR9gYK6tPbzMuGe2q2LnGkxUvCfP6MwsD9QaKYZUmKHjfePBPY8LzCd3oFbaSdzjdXhBr3WoayXGnsmkTAhqazG",
  "key3": "67kqh7hjaDrShrptxiNyQiGKzUBupwjSfEGErehc6RufE5GsSvhx8StTq8K17z3hkSmUbKjRHjo3rg334trY6QGq",
  "key4": "2wFViuUvpFQC31csMVeFtgma8wvQsvKvx89Dyp44XrkHQKZd5VG4Q2bYedGR4x5NkAX3HdBrLMZQNnPMww385J7d",
  "key5": "4McXumPLjAvNBeSdoZGDoEUu3TVsJi2dLiDKuHM5XpkRksDYNMN5myzaB7nrGY9H4rV2JceYDFwiM76w1HEZaPsz",
  "key6": "5QhFjBCeRKvL8WNNEe6n2A9GFUNWL7VnfAC8c1oCq79Ra4kwPmyhHf9hhPzAS6VVuvjYbLKjV14w8B7S3sdrz6kL",
  "key7": "5u19FnF8ww7rfRPU7bBEEgSDx6zfhPNVtfiunG8R4Ep7QEghR8xRmRB22yaytXygnbnynhEe8gaNpwyXsRGdWunm",
  "key8": "2NyaijQHyycfPnAmbEWdyb6Z3PEjoV8Y1DeGrbcMnmyPnemVBoJNGioy94zRJ6eej8WDdDy52bLWTs9mPeyoUu5e",
  "key9": "4NBJsj5DFiQ3A24TmYD3rnZoSLoUPjd2KHhfg4T1EwtL9b4VXyG4SUErY6LpNrULhCDeYaaNrzvyiBtHjYoWPFgU",
  "key10": "567Lye2KDrwKQuB1qCZJDsGuTxTE3ND8jbLvSbBVV1hj2G3GhpabPiyspeuq57v2qDt9sb8qnPAsyue4DNfArjf",
  "key11": "2aefgxMPLQwXE7cf3b785M3bovUrfeSaPds8HN7M8s1FG1BTy6pKwXi5zhLgS357RMKZbRJiAan7s1R7BhSwfmgw",
  "key12": "C4KUpBnt9535UbgMUvVoyAujb8zA7YP8pbDUBxqbRafFxJ54EHaaizQcLQfKqdKpKcfqKreTpHiqaa58HxUBSkx",
  "key13": "5f9rVYgYLEygexc2varuqcsg6qBNHsWFGDwZ8BghKCh7vp1jQNLJx7QAEokoSztYVgyUqKzbsuv1SNHsP6LyBMQ8",
  "key14": "4HGHdeP317NbWFiNsDdWfHnKR1PWvPpYcUqfjzjmi9Sw9gvryPqtF89yq6iXureHJ2hYr3p2cc3CssXHu6uqEqTb",
  "key15": "5e6G7N7PTCQKq8D93SQtuGeYeAjU7FFwUqPxTbsJ8GBvJroBfn9SsytPRCuRkpMQz6hqXTbzb4r8Y86ae7aU65UJ",
  "key16": "rc76aJaTbZNToNcqMqw36NxG5nFGF5DtNbpuxUdn7diFb2eLQmg4QUoFk4QzPSuGqQL7cZ3pN7zhKbQYDQF4DF8",
  "key17": "5u8NB5dxCQzWT5T6gRstFeTmhpHdJwcCLAjCyDW7ygbeaxJmR79xe8oidrLvd8JSAsZvybV1Hac7E9xkdnVEAoSi",
  "key18": "SQ52Ro96xFbSP3hFnrBPDVgXxR8G63HJTjKqBRbKLxu7AhmizNHhTuimds1gtBqXFWmZSh9mYgJgz7oKQyWXTWL",
  "key19": "3vThndD5aUWYhjE5GgbJ1TxrgQUSCYCJsTrfdeSSZwzNMwKSxJGi1JvZH8N9rMPCFJPA3P9paSbEC3VsY3zKRLYv",
  "key20": "5ZoT8UqknxwnfNMfe8oEo5kCwAr4ZNWjMqGyZw8SBcjCMXsYrUPf5Up8c65Lgv3JGrMT4W9PLS4VqNrRoVauwKiZ",
  "key21": "4CcDUaH9KWk54vqpdMH2nmjWpyDoyKTzv2g4oc5C5c4tqqK933tzhPu7uZSZaMmUtFByygZLvbmHeDAkXYR3KjzV",
  "key22": "Y5mDupur5VVX3MdnW5yRKX1Wbi1X32jnxNAQWBWFdzqj76e8C5PkaUkNGWtT7gxHnxPkaxoGVC2kGN5HRZDVb3L",
  "key23": "4mFKseTGgBPskwgnexgZwsxngKGqUtRwugQRKz8AD7zvmvMYa21CEDZEgxxyhf38pFQdsdb86ov7VNZfV44J9DYz",
  "key24": "5jgRNaJHoUZftJBs2Y3qS2VoooRUt1QMRqa1Fsae24MtMHKVJo5ygsGzJFXQcamZKxBuaCX4wmUyYP8MvxePr85h",
  "key25": "5eoT8NjVJejBs2tZfFnDrdTPEmsDLLVPp8EHRjj8TeuV8rWqsgrijsBSGA7sZkS9URRuUGkafxc6wCEtzq5ygzj7",
  "key26": "3Qu3o8ckX1FjR5oUtfX1An6eKXSzC83BgCEfipfKL6ecocQq5WMHPd9MjZBPW1U7LR6HWE379RkyNdPRVucXBTq8",
  "key27": "7YswVKvb1Ht1W99BSiMAUBGW5QWhbraPYMSRjAs5VdzranRS51VkeQhWD8CoMN43EkV4RpfYp5x4sjcsuk4Nks8",
  "key28": "u9QdVGqu1kDzoYyHFdXVVGMcpDwhRddRv3KLSkUYh9QZfva1AVc8Xh2ojb3punPoZpegDfHTJb3xsNEnXEVNJLm",
  "key29": "2EFiGuadpmDsqfg831DUrsnUVucQkpCDnodGnPk62fw12uPx3Tzx1YGa6gHzQ3BBMPSicdjVGcsgyFSnfC2Zpo6h",
  "key30": "2fp5pnVFMa1chafK4RHP5ZqKK4z8Liz1ewLv1ybD65ZESSFhXVaV4XXYD7bwKus4guxozNN9iAShoVr1CMTEdwGb",
  "key31": "4tjxcRfAPoJYL3b5wHUHn1W5fU3RBrZDfWTvDqPdW8KMDVnnBrisRbFiAgUHbkioCp6uv5BFhLnfMV2MonMNUVN"
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
