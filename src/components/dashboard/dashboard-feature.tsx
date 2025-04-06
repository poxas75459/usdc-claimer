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
    "2dTFbHud6xuEsn8EsG1bM8fTxXysonFMmacwGaxphjfTzHQUkbzVsEHG6zg44zRu2AvRUiFsckWWdAA51bT4NdCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57afRiEUnqGW4HnBN58crDSR7cSnzcWGHeDa7QJGWdbokSDbNqhsezmbHzuFqcun8Ko1kUgH7soyWvKWCRrLiFB7",
  "key1": "4cgGaLXpkv5TqKN7dmyPbh5yMjEWozYFhzfPkBarVcAajzfnLwue7DsHkRqXCmYLhHnHzznpZt7hxhTTNuu26xZ7",
  "key2": "4AosKyMCcVp5AdrQd9xqtmJm9fHMjvgXXRpLag9t3Niegi3FT4uTbLrVxX1XLs5Kq12JcypMGQU27NPMdH8V8czw",
  "key3": "2BtUNUoaEV4nRbJEUM1u8LLCoAqjW9zn18Da7JVv9gyY7eVB2XHnRGkqWKViiWxy8ryYj4LyeB55i4xuGYrKnUAk",
  "key4": "axCnCVG36QVayRKhKzmB1CJRaG6XdXqUUemE6bmR7kEMVVeAzYzQTQYi2NQwxaBMdjV7J8BcFW3BThHJJpQ4T3a",
  "key5": "2ct5k4eD5M6GQmvpMqy3rddUDFckExLymMhvf8hTUq7CbcNGxYkULyjYYJhjTmiX4dEpSt4PS1Cf1HPTdYxCh6Vv",
  "key6": "36kXGY7FPXifaoxL61JWCMQk2mYks7moTqhunVfya3hWkgvhN9DJJUMKBqPvVMXQjfkmP4F9mR37jKyVvR5MUEXQ",
  "key7": "48zzfoLUboEhUNwz1gvDmXqsd6EzUAieuDY9CPMYoGhtHt78hDLxn6yyvaiS3KB6EmWvC6PJkPqjaMPhT1h68UbD",
  "key8": "4gpQn5gkZJ4V38wTfnjMvffKu9RkCBicBsFVYqAHJNQEc8n2fn5o5qXGKEygstFVNYuW1YFuNq1gQ4YajhFq9YcN",
  "key9": "5SNNX9kofZpU4co5rmah9SaZsatxEC1S3mqfYkKkEmrijciQjfFAEVudkM9fz993hDPL2FN8UgW6iSYCLnjZUuUm",
  "key10": "89NnihzXxvPUy2NhozC5JKR1rpWxmfzPkvuqGVCbv1Uw7PbiHGjeeC4sAhAr2g9GF5wojw5cYphq8VZKQpczktU",
  "key11": "43hdAJzJbLTqZouCHJUuHfb56vNfUZL5X6wtAQUWSNZjkHsfqWCYz5xzfnNp4ZKWxwHEE9ukoi3UFkFMK6qxy5eu",
  "key12": "5MRJiCzvvwaL5RB19zKxd7j99xAPPnW98GasbTCnbhS6m4eR1vxACG6Ui5tVhYtEWc36GZhfZmM6FR6xpVBHVEoi",
  "key13": "D8KT8zYn9vGRKN6TA7R2QUXqQKKshmpQrJbkUbZcBsXoMTbcbQQcDFDBYk3VYL7gT4Rr7mkK4pqwv8Xfoa5y5ut",
  "key14": "FAzrgJza5bqLRFVJcqV7vSWjeCigCCPGRupiFZ7vBfCDCgJAktXvNiyXhVkgGxpHZSWVGmcuUbgJc9w4cQQctH1",
  "key15": "62eB5f51cVgtFgYsbpYzmLbVq1mcSzyVpGf18T11WdNbkvf9ApB4pbF3nWdSegz65ZghdM6nqeB3yrk2SEwKkymG",
  "key16": "3o5A7VWiMbt5KTnNiD3YCMW9VmLVgGJkcgVK7iHtBkuqJ3nMfpKg667pmEm3ca8VomuricTtrVjrXrHJPg2HuDV4",
  "key17": "3EcrFuCLMRuu6kyQFvjFRodYzxYY7X73NCyW1fhdixLBFG8YFjJqNcL5BRQSBdXhZYDTqCA2FxgkzuYFabSSK7ef",
  "key18": "2GYmux4KjCB5MhGL8zavYNjkoMAhrCnCVFc8ZYUMFpj7X5G2CsbSyrAPuW8Ub8vZSLFWGuvzPWHdxxSsJzxsvP4h",
  "key19": "2a6wrW8yrg3DYp5jhHqVikk8qheaK5faMdwSBFLshfe57jMno4oSKsXArseV54pgt2HcAfwszkW4Y2UeJgKSa6z7",
  "key20": "4vvecvVYxBxYLgw9gMcYDYxjJMPJyPq9z1tpt1iDdR5oTJUwokJEDp48V8vzkjFYRd5XSGZdNfKpD4VCfUQCYiNu",
  "key21": "2SSZB7niArJFfQv2KVa8Qe74gb77wpgXT61xmf7yTN1E1dfTRnHtN8yDsJWPy5xHXXaEnPw3A1apUyuRwB3YFyQK",
  "key22": "21KniqovWygJTkUdC2QWa5WtEGeZDwERGdf3xCVBYqeVZw8paNpQYFHUG8pzowAuNRYXi6FjsWUjZsDs4xa5Kn29",
  "key23": "4Loo3eVusZu7VnniyuSvLRvrRUM6F2TviYMKZ41dHq8c5QJpr8EaHpaQ1ej8jnjzErpbQqKG2dRF6QSno5XgfZCz",
  "key24": "cHaXLnTiiEWtg2gFcXxSbX1mN5KRd7sBnLPsErpcwiyLTmMqXoYZcY8RqD9wswzNuC7Fm3ug8vLqXgMwsPrq7HU",
  "key25": "f85WSVLkMVHjqJqJGcPJ4DFAuLTq2gw5Q2eo8Hy9bdom3687PNKEEe55dg2BN3sL1WrFki3hoo5Gn9g8xtNP73J",
  "key26": "2s9MaaRmirdfBV6byZutuZ1BT7kdH1feTjj4seA5rEVd4FyR94bv3qi2NEsGCn3itNy2DN2s6WivW9vTzWirXNtZ"
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
