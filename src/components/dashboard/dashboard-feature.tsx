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
    "3dzDR6pZYPk3EhsNkaYvriPFze5McjKjFsVcRvUTx63o72KGygcJnSeNAFeN4JV9aaqHfbcKE6GEbv7y5ehVSepG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29U61d9ejwpuTgGYEXsfw1FZGTfmcmQm7SY1Ryyfz9HA4RFHo671dUt86xW6UdbLFWfverdCv1o8kxP9GRk3qxRo",
  "key1": "2TVXFhqpqgYF3M9Wd9RZ97T1rSFMiom6usZHjvQpsBSZtY46qcKq9dScqhzoEhmEjRucKxRTAazuAgXpDFPvob7u",
  "key2": "2izREnJrWNv94AS7goJSmg5M3jguZPUV4QTvg3NzPT3TLrf8pDLqQJLqVVmax6QLLrztiPyhdMsjaCruVbxEFcAf",
  "key3": "5549Viff2kdbP5bPVketYQkhgUFExjJwoSC1K18NK3VVZyZJZivgMZZhgNzvjJZ8qSj8XxTonNzosxpoyTbhE17L",
  "key4": "37Cad5aGVDwybAnvZRN9Kf1Mb4NSNpaRF8ACysGTsBfyg8K85uv8mreKooZinFMrcWUGh8DVAHbQDZd4PtLQ2o7j",
  "key5": "4MzYkz8YKHxVKzi1qsPVAkbVhgidUZrXmqqR2oyaCjrm5GQ1bJZBTLPoXyoYxRFgbwGsG5LG26uyi3PgsFFSqbS6",
  "key6": "2vWxoqUkS25dYs9bmctBZbfyHZYifVkXfdjxCNwmWyWUcGB65Uy9paygU7sSVpDFkn1DUGAiWT9RVophYhLGkuwY",
  "key7": "5a1z5r4HKxLbn7J7Ag8b3XSWSGwFLThhPKC7HsBtnwXj9VNnxJFgvZyNVoAgAeesx4wKSq7kN48PFwxujmupCXMn",
  "key8": "29Abs1Fbh7z8p9jEB2mush8ZL5hHY8yiK8yqsShPTkjyRZwjunVTCMx7EbiDu366mhvFzc8GhADbwHrQZpQ2iVjC",
  "key9": "WTmFqAQ45YGyVXFLHXoax4RksVSkYSbz3aFFBECnNmKPHEgNixswCVhAVe2VPZEQXDCwG9Ka1RTCVpgyFeiVfFk",
  "key10": "ZoNvHU25KU8GWvSDfVDnDoeL6uj924gKQX44i1YdzHZ97qzrSzgBntCWxXQ2psZrGT7386TsFrTEX2gBAweLV3Y",
  "key11": "2JoQ9pC5tHQoqJELLP1hVfuiJp5WavcoU4PqrW77oPndGYFiVg8AZpsoDVYSJvZ7yDorZsrAKG5EBmGRSpnUiU6B",
  "key12": "63kVfFL3TWA5nCQWgcFN3UDj7SDoQkBdxZe4f994AfrQ1Dt6xPDYSZfNnDHf8oer1T2YveQHz8cPJfDoaHmtJjaa",
  "key13": "5S63FXWWAc2GRyr4f9YVYTHs2nwh9zboq8ydXdD7vxHcpqRTQZ19TPtBcFmoXjPxYwG4iUAmoTU1btokPuMu5NRP",
  "key14": "2adPDJbZr4PoiDP6VNri4RppMBXME9hDGU6hj8gp5E25W9otctYo6E3Uqmice2Eq3YtHUDbgykn1gc4QBv3ZJUnD",
  "key15": "2w5d1WYjrm3JGEXneYJB4p54VcBBnzyJmxNN2atokzG2kiyrRDWHFRFKA6U69iFpjMDC3Z3CibwMFET7hWAzUFNF",
  "key16": "2FuG289ZQufcj1LGx35uuGPh633s6GNgykfCR7aHFNjxTpc187AvomanxFQ3ryNMEZUayJWzLJcxnvJ5LoypsNqK",
  "key17": "4sWrhf9f5sudxzcW6n22JrvNHUqftjMtkf4epdgEerAbmw9RfDKy8CM3Bx2rrT236XMJ4ci9Yh2b6ed7u4FcD7v8",
  "key18": "pg4uRDRTQdFL7w1Uk4USKT3Ejre8pWt6gMWRuSJUJsKUhmDkDK9shRmbkHgWqzGGHXJ1Xb5zKY7eQi2NnrD5UcA",
  "key19": "4NjN9UcGa7ZW6EXoK8c8DaaYiuGHCugJTf6XUfrMKHHkufAZojDz2To5Zq51NMT17r8EoxArVNEvzD36xZ6UxK4W",
  "key20": "tYuBYbPgpVLxYSGiLx3eBuwPX39LC3QdU7nTzrajt79iQwzpzdRFFZghwJuNDAiE2HxB2JSUnZDd22RBx8xoqAu",
  "key21": "2GmUVDgRaqYGPn3YNAiN9rCyuCG2mWyXEr62QuNA2f5MFenNWtEkHq2N9fWa91QWKzMWKZw112qEwSMbMzL9SFYA",
  "key22": "5sMV82QbKXJyMpKZwEYaq6j2JSQCkJRKdAg93ku7eof8MMft8ZgUst5WnL5yysNsWWZAFyYVvfmyNHvpU3chwnmj",
  "key23": "5Jb9SCfEkL1HL7vRvqKpzznTVhzPmDC3yMF5Cepjpb5uGt9KEYMqcbJzMDey4vyRdisAfgaSTF8Lge7rYwwY5aaS",
  "key24": "5oUCk1r4pBtjARjnNZJ9emDSWBTRaxcbpny5UGqsANWjPhktg1hpo58NASctcLZc9xj5X2VWKFcthnWABF4NgWg3",
  "key25": "39L9YXRrARwxw7Vi1kiv14eYpAeAXF4a3fqbYunPEjgD6yVKtpVwEKr6m6dkSxr5dFBWwWAdqo2FDFJr7W9AsAMj",
  "key26": "62YL2qHeZco3L2cNyUywZxYR9MMoSwFSyuYUemNZXM5T4Nmny1RpGR4ExaURR6ornjSv4DYsWJuFGLgutEqhbdAA",
  "key27": "GrZSRdZ8Grw2aMBKVVMBMhDYw87PwDDLqoBfjbw9hcnBmJSBWTMpGz5SRqYrV5D23Wti3WZ9R8s62XupM42Mcmn",
  "key28": "3CX6ifd3btc6dJVsmTJmPcFMaJTVq6sc4d5uix5dgF4LhJucCSceNGnvxzM41pWyKkuryQwt4nGUA93NnsqPGWgk",
  "key29": "2E8zZp6NPRTPFGMbPj7wsUCtZQsutWDE1N3x3Q3sXFfgozXz6mjodjTZ3VwZcE3Uo6g8DoeT4EW5YvC69ZxSSecH",
  "key30": "2CknEUj465qGfvtvMTYhmzYWSJaAquhP2hextGn7MSv8JtZtyHHDpMG4g7wz6J79uxnbf3uoHiAsQoWf2uJqPCM7",
  "key31": "27pt6R8Y8LUixtcdkA7eAmwkrsWJ1jJ8qPUsLfWpNmY4hAETUQW3jsoP8gALr1Anu1GiH8JNFMFmrXgxrKNoLMon",
  "key32": "5QKpyvXszuAuy1f6UNWHhH5TGrxs82nASqbNBqQUviL26ixQQEHSYd6rnDKX1KdjWGgKsyrKaXwVHc53oj5LwE11",
  "key33": "5gFK6BnikSXfthPbS6oG5HB6HnYVFyaYaersG1WfyEcxbP6cfrzZDhqZgz1uU4YioRgHMfMYx7ubFVruAWr76Ex3",
  "key34": "2GiqJgr9P9tafRqLqooarqHdQXQaZh2TacndiFa7KJTHP2Fg5yuWkK4Tyf2BSk7j5MWkRn9YUekjdnDPMzYFX4G8",
  "key35": "TjMXcSZ5tiJ59YdojHANHypRD5Fdr9cow1cd8gsdGQy735Pqprc2HGM9Vietqq9XW7PKpDRcbsv3QmakSDD3BfE",
  "key36": "2bybGhULj7119oiKtzvSwX6Rji75s4Hy4DscSnzRFiVxj8P9HM1g18ywvs6Db9f8FRTxHrMuNPP84TqNNpT4SjQB"
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
