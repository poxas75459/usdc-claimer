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
    "5qgNSEYM9sMoYyjG2em6wtW8qEP9CnS5xZcepE69UxeE52KQTHdymSxBo4c6BD9zFEFHTk8s5XkKGSCMhG69qnV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyvwfJmuRRMf1KyEh5BYUxUdYz5KxEzVtjcTPuwZEs5ALoMW8ifygFddmAHzLnwDgrmJGxYDNcQJfojWmt2DgRf",
  "key1": "2tPMX4GeDoMrZxnBgw6rVWyiy5PRK2wUHsvE7y2kdf8gewsXSNe2CrXKQxYfYP57dYtD8EfdAmJW9jLj36BwrjmP",
  "key2": "5LrHqvcc8bMBVuMANQ2CiLe7M4Husr87cpivQGLaLQSZgHtQaV7inWFGtRR9syParHi5h3SyYWVDnxmeaZS6ST1r",
  "key3": "2RqtHEAcJTgqDV4zCajJrvaFfE3YUxZRrkFGHdMpUApYTT1t2EmMj9r2oLrTRHWSQjA1SHWcAEuoaXaKdzLY5BDs",
  "key4": "57YLqYv244uhNMMNYbDFLuqky9mU1iCkTKwkXsNtWtHt177jJYvUeL9xmDKU6CkNwUUCypYrKn7XoNiPwDrza4bu",
  "key5": "2QkdVmehMtBVzXWrLecrokmfd4YbrbU3SR1W9NsrCsGr9L5W9qUW44sbH7YH5sJ6rD29iKSL54eghCLDuhxV85wx",
  "key6": "4GfgDYvvpU2MUrdjCGqvaE4UqowE9UN6MqrSrKYWUe9SkLxL1iKrZvBjPekm2RHoJBuFs3bJ2qHJk9qdwXuNc6rh",
  "key7": "2GSYCHkz89UuHEXWEXfRtYXN2YX7mufVRFj9C6obHm38MWkb4ZMQRo9Sb6vwg33REkRXLrYVcMGABotYBovEQkLn",
  "key8": "2Nbp6y5Jr4tWiUzivoX5yyq4pMhQe69UEzLghpjpVxhFeC5z6baGX4dq8wp8HPDT4SXhNkqq5XJRwKvW3G5ZJNgZ",
  "key9": "vW7qeJ4QF5XvSt1JSXb3shKNhCrqqxiQyyZJhx336fs8ae8kuE3o45HTsnZR3RX9dXhqjLpY8mnhvNVkvHbpWUs",
  "key10": "5BXW2tLeoA45wCVhtxVNCe7pRHtPrTLay37k55m2erR6PGoAfydbLJLmN2vaBzv7GxuxtMb3CfcB9HuxDT8UTyUZ",
  "key11": "5juRwEvNDAKdvp9v5g3STBGn6GiGjMYek49MM9sr2hjtoUXAUhWxRUTz1LDBsFJivEDj8eWycuTLpK1uQ1mhZpdN",
  "key12": "4x7CFamRSna3pukvkYYbSt4bTbtawbtbgidAa1F1N8jBtSFZrEK3qFXzQqPbopGjaHAByRUMo7QTM41d6LEeZNsS",
  "key13": "2jgz2Mwk48yza86R1UyJ8hcX9uYAyu47Ha7RLY8rv2Goa3xQa1cppLin5VVi61kCZsoLuAN8mCb3WCwQ9f8bHjQx",
  "key14": "5T6APBJe8ybRqYPa7bgoARhLFdq4JqyWDiiUUF1hwXLkAPLomHayvp2ZpEdv5zTAskucjr2s8WPRpA6eUDwq4gTj",
  "key15": "5E7jrbxU6rYxvn9q7k2x8cLJxS9AXUELYi3sVFsN7d96oySqN4U1L5xBMaSBM3kmtT4wAwFBJo5eKTzYMHo3pNHm",
  "key16": "3if8cxB9ajm7Jjh37vuDvFXq5krNPcoTTQDifbp77dHXuJJLLP3QGcHrZFikbT263m5s4J5hTPo9fPpnVn1YeZG3",
  "key17": "WoNaqJhRBV57JFJukZxt7vbxTzd2ha8C1UFadR1C4rhR42CQN3VLWhogP2ZboZT7q8Wg4ujmnF6oqk3jBtJpaHa",
  "key18": "4bbU9CUHs6RXunKgriBYVWKcGv92GaSNMT7rtF5QbRhm4YSE3PLuyzHd8bUVTRp4yhvR8ZdC8hQ97EF1GcPuP1DR",
  "key19": "25z3Jtm8BK5FidwmD4n8Wc2i5oJ7fJfUB5UjEELbePpo65wWo6BqKmPfeMACvQ6nv7DsKEpMDn7K2z7u8UDMx5oL",
  "key20": "4PTuXbkd2WG4WUfdXFL3YxbDSpm7jnkhnjC8N29hSp8WuBgSMVm74SeJTR2x1Hai6esYPaMypdJTEriQDZJLLM89",
  "key21": "5tAJzJkcNZ4q6iFM7aGEpj3UtcNdeYLMnBHHsoRTfdAcxLURgkreVsN8vfWzJu7RX2g2WhwKMhJVPc41tK3XQUv6",
  "key22": "5JfK1EwrhLyybd7g8Xjkmn2zogoMei21NMmePCZz5jeUzgMj9oS3V6JbaPTyXDaMxzUnJ747Gpbo4rPR86CpgHVt",
  "key23": "2FxjUxcje3PnGtgz8KRPBroH6ED4XRF9kUtfNsjKi7yYhHtV8hi4bsdPRjGqwNerbKL5Nb3HMHCnbhnQacUeF3wM",
  "key24": "3GbK6sfsCjcraqhwWAYro71kXqqWJsNUauhcRqBUrTwz7x35ANDWZovC5dFECNAY2PSezKhXaZPFUHSASToC8XiP",
  "key25": "kWXfBaZe7hnoo6j3ab4sPsdDEHF6eTcjovf1uk63bfrC8iaTCnVQvihRh6zJTKTzBm9V41YPzc8u7cYKSaNsJmt",
  "key26": "2E8Eh3MVch1KYZ5FC4BbcLV3VWd6hurdnUzDNbrzCZPVH5wshG5hX2esTx6wm5gbL5YPUXFsUuzUTSiCZQGR6Uw1",
  "key27": "3gERPkmNbQLa4gJYj2zofuVN3CFpFYQYtcsjmDqNkBTD8vnAPwvQepJQ9bv9cwQtUqEGVY5tQygtAe49Q7ehJEmJ",
  "key28": "4YzhY5wPgjfaVvnzqewLoTjL1BNuUvWK9QKVGd3dUgcCGmctYRo1eSTKxDa7pf9s4zYTEV5SovVipXTn13x6cmRq",
  "key29": "3b1ZqZKFrFRPgW6td1nfVty73bV3TgHLqMSPJAUMo3WckdAtnQUfy1iJKi4LU13iFiusWX2hbAUXJ1P8mhA47pv5",
  "key30": "38FmuMoi3xQUndp9L3SVjmBRGAjNcU997yPVaTQzFvqNBNiYxhPZtniQgcwENhRLyZt34aZStj67Wtq7hrhob6ic",
  "key31": "4jwLXyGxcND1NGPyHjXdZr1h5SoL7h1uiZXEYhSENdJoKVZK8W97Fjb6nXbntpaBmZ5QTcZKGaME3jyeaj4GE5jS",
  "key32": "5mUzThYs2eikMMPjcezN9eJ8eP3W8xGStgkg6vWKHbeHhFbzjNhpFXTPgAfbg1FAfMHdjsXY4Ruq7mLkZix3cwsz",
  "key33": "5tEWnDU9wtdfxqdeXJs7kjyxJqSfQ3s5nAS1J8dGCRvGpfqPFiFrBrJe4BxHT8ZKRPzRktJ4eb1D7JkberFwT9nh",
  "key34": "3mjYYvHHGXcWZAaHJE2z38s1GGKqDNS9mShjo7gxgNaZVXdJM3Chzb7SZBprEJ4jxdMj7S9wi8HWiVX2W5rTF3gg",
  "key35": "ogjCaSXYiF8JWJsvG5hKX9oJN5fq14z2SvZb2Z4sBjUpP23XVF5b3c3ZRTz3LuS62VewdqagJ5xhqnUNZd7XLPE",
  "key36": "qRXQPHgwLkf8pwAF4vnS16CJoqiWjrPAbbz5cjSnVXtWhScWWjifRktanyF7zPsqqu9U83SpVrK29Hcn1Syoikg",
  "key37": "4AX6HNWVxk4aGcDBrJW37EzTVrccpR8ojvJ7onWKcyU9osYVv8HhhKzo2jwKzfWj9SkE9Gm5GDRBbqobtGg3cZsD",
  "key38": "4MNQtUKsTri4kCtginx4C6oh4WuKZ7L3ZrPC11vXESjsZG3W9m5D2szdn611RXf4rqfwPV97VPf3qLMsEuFfwUmF",
  "key39": "4GSsEtk6vGUt9GEyDnLzYtrBxHe5pSMkA7PYr4K5eeHizCdXt1xNR3HAdpHnbbJazp3FxFcJ91S75ntkqMTabLHp",
  "key40": "39F19HWvZGFBkBTbwvuLd1Ak1izzMdE3YVAdbazfYs5eXz3TqftJnS9MJkDvDsGFX4zB7xVJ4Ado2PX4UiiccetV",
  "key41": "3e8AuPTRxrpXKLURLfRpfDHFZyhpavZwGvU2MWRfYnf9jTGBJ5sgm8nqwFYT2TPiLRmf44JxGMz6Y5NA2H3p9KKQ",
  "key42": "34Hxj1hg1S6KSzwRJ81PcEPBHAP6y9mMo3RqqeEpdnFdveZfWtU4mdV1tXXAVwFtXS8zNoyhRQyov7VicGgfY6VZ",
  "key43": "2dthD8UKG8ZRBcFhbEVQQHaprmS8ApvYniWwdCYMFGVNJBgmpCDoTiVfFhqBgfFy6qpZQNgcKGSfgtfks86FaMab"
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
