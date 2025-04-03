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
    "36LeiYthA5MxyeGKzn91B22KnjWVMJ5L1hGmUFMCfT4y3vkB6u6SDSHATLQXzWx7VP7Pqz6YPcSWpRu5P45DA7bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CoBUxrZQDSDyP5gf6ADWSNjiKn6gudm7WMSZmiCSWETjj7G3tTevc2izASPwi88TsrVTmrap7Ze2dc8y4ZTdxr",
  "key1": "3MADZiLTe5fWDfC4e2bNWbbg4hX9MvBfEBAnHYPCdBJUBQZcT8BorUjARSGAu7cuSQgZj1a91HfinBnawT9k7Mzm",
  "key2": "2bKLQ5tN1V6Eywz4jkFCsPa6Mqjdj55i1PTPKrXmZQcxN2ti9ESSfdmCsBoX642KZmjG6w2omRsa81g7Fd6qcS9Z",
  "key3": "4zhHpFHG7GgVycFrsBy3o6EqsjRzYv3Bvdt2uA5tdA8xScoeHFomdUYLx6FPKgVPgDdWEnatqacY9XFkhxZiH29y",
  "key4": "SRhdNML6d4DBDt5DVDz6yCSwWMYNMGxf7BhJkh5eBcqGxQ7rb3VgDern4PeFDzhvy8KUQ6HkdozX3VeZXxfdTcV",
  "key5": "2Y2xk9Ryw1NsDZYzG36D4PPZpNsgHqLQowFnXW3EXcP2GUCgcSivL1gZ9yc6YFJfZuSSCVpD1hLvYKdpajohYCgf",
  "key6": "4J7VEpMx4gX7ssknF5he357BdNqTCKmpm2tmMU3DFUHgeLTSpFUczfSzTGW5LVQX76B7ge7MJkzGfBWzyZFwMXQH",
  "key7": "5rrdJABmMeErJFGprG7Xgc1F2YcjzFjWguFHHVgV7GuLiAr6oskZbPTA4BFkjiSgdFLEuTT7ryxL8Nm9eCbsw8x8",
  "key8": "3tGQyQUHe3Nw2bUoQ26fBw6fKPFYcDeVG5XNgUrz8JYxqi5k5gxGVGrbQcK472xwEEzVKKURXapiE8XKi8FqdofZ",
  "key9": "9R9QHPdMo6nN6tpg1Pvp9FfVDkoXVP1eZUEukqmnSJZBH8jWQawZxRGRTSoP36YMg2TdiUKxU9pjfmsy9zt6qAj",
  "key10": "5zVhjSLL6JsRWYH94zn1xuXTi9CBmpKRx7nuGrYJnyyt9kg7pD88vVPENg4GimXWrbGynXq1qhmZFJm2KfivJFnK",
  "key11": "4nxqah5LbGzchPsaGHsxZXMEqvEWjKktd32nHwhUtQjWn4TsDJUFhQFu1oHF36imdTZshUKUJBhrDuA5BXipagoV",
  "key12": "62iPw4RiSPjy8M2q9bZFTSEZcGVt9CE2jcTEoYrrfWFZT8BVtCCN91yUfcVZZE3M8vwtL3QPxxriEaj5Wh1C8aaA",
  "key13": "2kMc1WYRhtRcu8KLhDpD78Wi2y6GbUr6cntGKoSq2KmEKq7SdRaJADLg2P7MNcdMTqgPv8ZzQcjyqoheJL5TxyqA",
  "key14": "628RzSNrx1p28eqxbPyz1hbf9CvYthTdxbStNLkN2QYdTwAS6wcpZXRU3tk5pvMAgmpi2ihuyZmCx6zSFXUc5t69",
  "key15": "4haADZYsNa5gmqHu7rTiPnW9T9Rc9ZVYwwYBVFVP25ysYSrt8zh9wnXYvdGHMgM8UNm7GupU21SyaUgRbHwL75QR",
  "key16": "pxRFChe978ZKXV9krujvnNCh2waAqm2tvneVfz5V394gsShVDeG58sGnw79qfCHqYzwcdD1mUqCTb8cXUftnwMv",
  "key17": "PEgZwEdFPTEwba2csnDHUxrxbuzBTEKHWqv18U2VqwSaHTGYNpeCV1u2vhk3EqB5WcSdWhSwfG81GKhGFGrcRBA",
  "key18": "5A49jVrRHHUSAy9Q5Ft6YX7NNeSc68RgHdd63kCxmHtHfbJ4Vauv8Q1sPNAzS1JJHCsDpua8P22VboAGjHxXGeJN",
  "key19": "5yTCkYURHNuJ16rzvX5F2rpLRb1JQnqBnohQZWeQh9VXJRhrcXvErv3RAGUTEsyf3b4NXaocJsofCbJYUhbrJHtU",
  "key20": "2B2ErWY8xbsworXmTKf4QrACdQdakbedQQkJWmR1tk7hTHF6bogQj23t7VdSUcMpdrJE4tbXHQEQCu39w8LoLVhX",
  "key21": "4S93qKHR8qw9PpU1oGd92Xd1z94vmzRsCj7gw9WvxNYe7SBFqH8pvXNcP5bQWEdcLBCh9s7GE1yThJeQpJyrgFLd",
  "key22": "24RRzpw3Kv4aDRRa5XS7iLHEk39ioDkqVRCN9J8hrV5eVr18hns7bUo4AJWVbuSiovtYhqn6ZQk5StJTtwtFC1qf",
  "key23": "4Wy4gk7PG37BJy8u6N6Zuib26pu8TrHgvMrFVMnuRFUzt1bvFuenpwcoipmqM5HAfcHXQDzfGu4DKXNQ65R6btbo",
  "key24": "2LS276MfVtmfV8hNsLqPM5T8i9RBV6VFQUhS4M52mPrNLyE4TeGPssHBYmR2gHe2Lqq2WDAJrxSjoNatbMrSsZDg",
  "key25": "4QkHfYuw54yBVzZUf9tMDsAYWz1YndNHcpeUHYSYVai3DD629tzwejzZB8KefAZetF3e8SPtGbceFGwkRrqPj5Af",
  "key26": "41btPpXKSPRP3ovBZNd97xRNs5uyXjGNRxsA5pNJi758jFzc73rWZxhNS6NnN6puDbCSPjfCwgbXtJeTHhAc2v2j",
  "key27": "7ZsHFG1fJmsWMuFQ3nERMjbCgfFvVpp3uKn3zP13YbbbaipzxJ8J7DyX3TRbSYR4mKZCPtrm1iYsYdWSXZa9W2f",
  "key28": "Lav3GwfodEHGQvGcpFYq9ch19yPNXnmg6Gki6uNgtKWPEe44nPxaxqy476xsotQzbwq9eogGsxWEJ68A9A5rH4R",
  "key29": "4CcAceuYEXByXG2MgnFiQ2pVTXsUnMLWGmu1asEdTnWHYq2LYrZXXdMn7j7DRRMr8RZKLbuVPKe5yZq481rdJj7w",
  "key30": "B9iWvD7xr1y71LMrdSUsUSSgWMhNWUXo9rHDMhfUaHTF7v5KbRbsvE5qpTZfhjactH7Zmbc49bdzZQCLWBnb4fA"
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
