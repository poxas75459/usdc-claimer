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
    "2K89ixVXRHR3MEGQ3jdpN54RC2ihortjtPgUktFD2LUBN5E5iUYTozs3duMHyDv4PPzRHQRxt1RvUN4a4krFyfG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyW3bbF9zDVAu4E2ehn4xA25axjrvqDbSW1bKjHvCNW5xRr1qcbkjuNSsx5bD6e7X98BXq4xc2pskYnWk8AyyfZ",
  "key1": "3eFNdVZR6ZLzcRCpTBqDj93psCYwCei4Wg4bg2tBN5jVdf49BY6yW3s1VZAHvWCbiPayuz1WrEEKiWwHXZsZxvJT",
  "key2": "23cHVWBc4AdYh6wGFZs57osCVxanYTXP3XJ4hLGWSLh9mu6JNHkkD5HD4ve9yQitv4HyQ6Ah9t2pzXcfEjnD2hTk",
  "key3": "2vY6tfopahsq1GrUdLGRmaPYWtkQbMBLdnzMv26PNcemmVXrtstK64q6JgQZYUSDwdBD1J8Vh546X8ASZbGJAwRd",
  "key4": "4ZmQFkDXVimQrx6jMrVAtR4gjkS3FC4h83BjLA5bFoZrx56aFK3iefm8vLga4NxNLgKFterGm6JwcfR5oAv7p7AH",
  "key5": "3TZrt5EixVAxd7jHUzxYknxa8KCkf6mty5yP1fTQCDRgCNKQAAE1vkXXaruTy5G9ieMZM8DBLkEWn7SNLNsn2gct",
  "key6": "52535Di2FdoW4Js2SgjSoje72kwh1QyhddfYbMT1Tzxb79DvewGELvyYwNZ2nWfcjkWbH4sL7GSKTFYzxVH8z9fa",
  "key7": "3ryc8hqSMuPrSrdbzGYYExzhA5Wdz2gYBQ52yyqSTArjuBTkA8x1j4fktWiRNussvD23ZsRysntfnp7qqHMRTeBD",
  "key8": "43U1fHjsNSRqwjJqfqdKRbD6YmQa4MmTaVZSCtvmK72jf1fVoqMcRUeWM1ueHVrBHPNLLawd8eoT4vJVxsjwoAUP",
  "key9": "4wo9jCkb3boUMUnjN16BuENN2VyDT4Y64dcg4719GdvWQ8zCLgwpQRsdu2RoLppaz1CatUFipVvpAwdZC1CxbUnE",
  "key10": "4PGGehQss9pY4BC8ip2D7G2SK2PRAsEUENMWQDiied3m3rfrYuiDXgP6UUjn2vReVhgp9avErdXzcfihUKW8iKNA",
  "key11": "5p2cUXXndHLpaePWqDwF8cxJn4YnDEhE1Fi46JQ6e75Z3ddgAKttx9hsdNySe6byobkgo5qvHwJ6APJSBZoYz9ha",
  "key12": "5PC6NAu1iMSwMbMCa8vxpuUhopQcxio1D7qS3fsyRX5f8AWG291zYhAxCLr4u3HT71Ds4ojEsJZnspaXETintYpw",
  "key13": "3NxxkRPFRwqnnVJVwuKBUedA6qCu7smJDbnCFBLqzxYK9CnUoTdvtka1nMzt5dBTueeBmrmixnvdCgGDmpqAVQiG",
  "key14": "2njsqaWL1B7GYd6xeckRwM1JQm1N6CiLYoAFj3jKTzz1y1AdAc1j1kw5eV6QhGAWoyqt27wWZRgbRhuzT7V3nrhJ",
  "key15": "3tRPjScQuK6ZMn9iEpBU6EsrgMdkkkRHUtHKm7fu1iBTgJUu5g8DbLjYPAvGbYrM1XDEx79TPXwWf7RuzZSdqHJy",
  "key16": "61E2XoVNhHnmxgF3D3dNY19moQTmgHLEGjSAvQHPdzsHfe91UY8kieoLiiQ4pdPvi2pCPQbjyVJeg9byM8PP58Do",
  "key17": "33x6tjrWorhVGvu2g3SBZhwmMwuNFjfnxs6puntbsbudUVuqq52znBTsR7YNZWD3kaDbDSLyAtisMbMMLYjPusup",
  "key18": "4xWGREtHeSvrC2uUKkKpbjEcUBBhgCGXQvdJW4kkqdictpJFkNx3BvJSVJZFfdX4aRSiUoKgipd7t9Gc14QmgbcK",
  "key19": "24j5UvTR8QDeiyQpGKWqz3A3sVdwp6jyxXqmif7gsPcNAi4pQYLwPJu4kjjjrAVuwy8FTzVNXPynU7FGAPm7NWFe",
  "key20": "3xSEeP2LVgcyD5Xo77UhV79uSVqYZRiGxDgyJCnX7RDm9RNpCRPd8xfY34u5qbX9t125u69cyyT4q9aDU1BQYhfT",
  "key21": "3q7W8UDtWW1rPQwiZL7H3APipSGxpcCA1NCxMBvsUVQTE9ZVyYwGuw5VNi8mohC4RshCAH8sqhWtBFQttLEajjbm",
  "key22": "2nT3xvpzXiw8fJdfgsgLQJymEU5rKx7ueZqoTZLHMtqS2F9EMnG3cZRMEX6ygcysqTW6nwGbvZYXAipwmH26chER",
  "key23": "34GW6461pWYGeHNSPJtn1tSucajupaBKUR5yYnn6S7JAxaHjobzajNo7YKpFJuurg7cVMPAp7xasDYfzbFdLhDdu",
  "key24": "2AHvMH7Jqnigjpjwhr2EGoTeqayE9sKTE6HZxxeWFZgXN1nC6QjufWtXQ6uh5vRQnX3HuFAKQakcria5AjjFQfMB",
  "key25": "9CLtncY1aUrxFMDmz959qfQfgV9hFqTT9eHZR4JPmJsHbkkwfNQMtePVa6w3M2pcCip7feSDmUGN7JUmpH4mbZw",
  "key26": "3xw9NWs2kr84pPEZmyxuYMYYTgsXx8bZEvRYwTg393UntD68yYWDTmhXGdSRjwZbrxw2FwZ46Y9tUwMEFZRqM5hV",
  "key27": "56ctLA45YFvmRfvB8mmDpdxsCtYSmJQBkuyM1n4UhTBu6fQkxVLFhAA9ySkgyMxMzyEaFwnoLkmDHfy2cThVWd7N",
  "key28": "3yEy6yaWkVPT8aacEiqZNvuhQy1Z6Q9XxC9pvRSQtBjGFtvDtaTUoG51gbFrtdod9WP8cPeMdUnK8n7optFC61YB",
  "key29": "54Piu6rYiuVrMM591QLpLfGsWvF6jfbsXQpXVbsbNUvXchHWKaeFPnQ4emWdmVvqCAhRLBiv3aNNtBxhNYep77oY",
  "key30": "47npMEpceYJY3aqVPGsMmwfafNEEEJFgU12xJAXGK5cMF9LYs6Hie1rihHRLJyqSW9Ru3XoN8fD2V9YWkeLhD3Po",
  "key31": "2z8e1hwLpmC4siNH6bj3ohxJon3r2jgrikhHghT5n5WMo9QnukEo9z9rDRQHSpmdUoTcef1jFghULQ9g5zv1F7fr",
  "key32": "2QXJQEPKz1To6x4cXvD4yd6RwcBXQgvEaKrB4Ab1PAZ3SDB8QcTJ9P1th6sHKfpvxuvRaNuwYtTQtwdRNEtUKdm3",
  "key33": "vQAYJJ6V5bxbMRmuEWNhYxE6GRKkJU6g9R8oAc2ZywGS5HAt2fhP8wn3SbxnewA3rhWakhDYL8b6RcrjRZue7F2",
  "key34": "36i6jEFQWYhxG9AKFcRJruWkXU3w4ANW9H1b9fLfg5998acS7e7omsn4m3MfLzfpWuDsRbeXTj1sDUsXnGMsHhhi",
  "key35": "3g79zrjcyhAVegzm2D8UugmMYwnThFmLGbSiW4QmAG8HJoVUiTtjCYQBv7W2fqmc6z6XmS8Lh7g5L9hc1dMMA2UW",
  "key36": "4W4V69pq8mPxvoAf35WD2rV41Drm2F43sAf9ThYUHHqGpYrf4Y1sJzQBHyPPZyFiQsJtGSGrvhQS2nLyX5ppEi9w",
  "key37": "3g2Qk2zhbrNyueFhmsm9xvp86qbVDtaY4kpu6zYyVoEe9uSQyLzw9HxDVZatqxBFQs6aeHASZE3UB5gRqcM275pD",
  "key38": "65T5vM1z8yYrLJk6HPdvoMjrt6nG51wTD6opVtV5sgQA1kAEdgTZXbhHKEiZQekb1BvUuLp2ubQijPpEmaYz8xJa",
  "key39": "52ZfwWH6aesT8WEHp1KDjCzvHKiWun7abjHXKVKjGw3A1LDnigBYwgWYXwWPCKumHxvH8rvUKrTugUtHknHkbV7d",
  "key40": "ZKU1EyHjVwpPDFjgXZTyd3FWH5WFpYnufF63Enmhgb9XBbcYtVxeUWoxRfvHNfxFe3vcd5izMuxEmyuH4WdPGQt",
  "key41": "2JDc9WYc8pHZEBkmFHfMwQecbQEzuXXnK1AGfuwShMEmuzg1KYhP2bHr3B6q1Sm9eWandZPwVxHGkPAoLh2U6RwX",
  "key42": "A7rWLsCf4eRAuswGfbzs3gZQPvLrDqnBcUB1Erf27poASeUbGvqzkiN1R8mQdLqXdt88ijetvZZCuz5E9CmC8WS",
  "key43": "51re8jHYfAWRYdVBmmbbwy8bXgpKz5H2dm4UERBih1PsooneamQV9Ax7oYYnET3ZHgtgWR5mmto6v2yDmWVzvFNJ"
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
