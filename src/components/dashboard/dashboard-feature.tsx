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
    "4J9hHHxLjvuCJAvpFMdNTZEQb2LDMN7M34L1kpEvx8uQipYgRJ3vvkPg9a7UzC3C5qxvmR2XYGMA1BnH9ESk8Amb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8ACYdSyhz1kxKeCj6KqefbsfJ7mSyCKJLdB5t2XA2CyUbJqeZJucfqFoqjHTwNJJXEbfjANQQTtc3ZY7Xd31sC",
  "key1": "5HLKjoK8WJ5vsrvWms4FDuE9P5XkbuW5gi58e5kcVaP7vLKyo1WQ5gbRvVk3bhR5umN6wHQDfV19NTHeodBNm3mH",
  "key2": "3x8Af1EhVGTAzwffn4qUf1BvEkmeHrYfYUCasNJcqDMBkejeFmyeJxiABy2gvT44QSAEmM6cXP8NHHRqPkBJ5n7N",
  "key3": "4itNA32RZ9wir57d5FRL6gW9QyGghiTzYqSUGG16haEm3rXZqPAMch38o82DkbQAevrjWaiezekg9TgVujj2UmDc",
  "key4": "3o5Ta9BFTxURr5iQF4i7hJM4uovf5L4c2NiaRLcmenCjmS7rVSMmhUcbTNhNMMSwrR8ZrcaJSgbKe9QSbp79BaPF",
  "key5": "5ov43c1nsSonwM7iLwsTDsH9BsYbQM1eLwx5N2Uad3TynHoAkZrpbtJS33mSvFx3oFKkUzF13kgFHiAjivgVwhi4",
  "key6": "24H162WVZQtQb2hRRjFG5p4S8rMbpE76bVAdXd5Pkvb856uim3eEpm6X2CL15P6kSo4zTEvxdbUv8HSBBeUcomyd",
  "key7": "3uhDNGVsRDNXaFx9wn63qTSafzt9bkCc5Gr7YSGtYnA1Xsn8sVJeCBj5PHa7Ym9ui2xgP7ZMkKeqzVEZqtViXxVf",
  "key8": "3GJXr3jZjkwSYySjqKbZqXKU6HFnpNsAKnDPT1gnU5rf8ivGnbJtKXZHWY7LPnzesePBi7DMf5MgzwkVYqJpo7yS",
  "key9": "2mDttcQxxBnxDej2yRiSdoNMf5fYfQy681bqbXoZGyrsK1uNdKmX1srVnretLUyD8g5N8Ui43hTm1kcKX7qvxN79",
  "key10": "4qhybjjLypyxSqoFpZwyeabgeQmofMcUoY7QaSvPy7617d4Aob9qLyZTY4mxiPaG8Cp1qPv8Ljnt3eFUMhEmJRW1",
  "key11": "q3DadFdoh2c2grEL8BMny9TyLNedQJw724uea7uJ3UJSgy1TQZhA7J57abk6Gq57hKrTSEA6rpTLZSAQPcBhYhP",
  "key12": "2Fdove1KGbQQ6MGajPPEFifw6CwDPUYHLYw1MoEnUvJXCDXaUngLGSikZRVhGBvdZji2riKxaET5KnGeE5qy6Cnm",
  "key13": "44yFb5sKYJMzva7wa3BG5uQhsZeCzWHBRZAnXi9h2hnBULKDUptDwH1VW6tiengtQoD3GPLCfSqNZ6pbkQ4Wyr9p",
  "key14": "5cQ1ERWTcXgrGEcaKL5sExQZcxtJ9D1BbF4wu2sKWJp6BKhgKtHYbRnz3GPWq8pBTaMB3DxMrrNqL8pk774QPBBK",
  "key15": "4Fpxd5q5VP52gfqkhMcYJJSGMEnf6idivS6xSP4BFTcPCnHShKLMDmrvF6XA1hg1ZN6sgLHwkPpStvBhhrmrLe8x",
  "key16": "5SqS1fDGHS3hckCt6p5khioDSVVZKhdZeJehRHYd4gYAhKnQCAu172phcGV5W6pii4f2pwSa8AyHboFj4DzsyVcS",
  "key17": "2EXWZ8YQRDFq7iQN6LxmooKRd1C18fLjmuH9EfAiBUrqm2N4FxnoXV4ve9PXZCDiGD1XYB57UVpKBjRZAohCXiw6",
  "key18": "UrMR1BpURg1bw1ujzU9uMkJXgzDUwzi9s9KAvjo1cF1tYh9bBNZxSsiw71CDPPapQPXYDRv9PkT8nahKUNCmS8b",
  "key19": "ZsPmW2Yi63ea5FdLdp1dyw5dHG3T1FFELktSRCx4eG6JMGjyyDJpBTsPcvNBHGrdBDyGvYWiN9Lq6yiriynutJV",
  "key20": "5s5A5pz2hn1iBF9VgBhWYinypSicKwvBBEqCS4r7ekyx3SnNS8EBT1LmMLoWjGFBh5iSEfwoS8PZQ8kWGqmGatEW",
  "key21": "5ZJ9awnMR17zg3emUGV4c2hLNpKCKdJqsypWGCLSmgb37wyChUKQegTRtWxYdmqHLuGyqWSgJqzTopApoH2T38od",
  "key22": "5n5QsNjACJnVtKruuewLaxK1yjPQ1AxgJ7ubzT3gub96fEjSNYEZ3VjghqHsjfpTnEH29oj9P2TwoaeakGLWnafF",
  "key23": "3p6bj9dpNkbeT7Sqsx3i5dbaRXkGzW1BBwcMQerGG27DFiSaY8gNPmaPtzP4DbyEAhR8T99ranANLG3sLRZPe37K",
  "key24": "5nM4e9VbT7ea2SPUs58eKsce7BAnpp3sTXXnpVfYFxQtzmEizDd2R3Xw4ZUg6wEeB8XYHMUHXeX8UZQPAB4bG9EF",
  "key25": "48d3RnC9NzTxRQ3k94AkgXxzDmoZaFG6aXYP4EtyNjv2RSWeoNpMPQnYRhSWqC37k51Gd7gohAvmFSLxsZmzuHpv",
  "key26": "4ziyGnZs8AsL6Yefz8Y6wry88diYSrMGtfwy7iNx954YDfo7vao2NmVpgpeCFD3mFpbQ6FLzUKhsYawPtcDF9ebz",
  "key27": "2A4VH6YzKG5B6KJMFwUNc4BdBPhMN64tKYdME8irkyYBD93UfwAYrVrpLQsLhBE6LBrxUoooreoAnVb3eHborgkW"
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
