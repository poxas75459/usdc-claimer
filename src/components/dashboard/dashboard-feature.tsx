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
    "3u98PvxnCTHBWXWGzU58ogrMmLLW8GSqoUCU7vHadeAoGpT9vHzu9ye5HB6mMib4Q6Ayq2cEDabyukfNFXj5ceWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjK6n4SCJLR5grHTroxD7WXEUA4a72SLJLawiAuDFdqDV49moc9BfkKFCaw3LXT8R1qb8JDEUA8b5U1jBXe4jcV",
  "key1": "4DTK874LbiyoajZrBw7pCtae73WrPX1i5MvekKJxJYppnfBc7G2P7HiKWZ7rnmPNVwKvyNn3PVUudXBEd2z2Yvsx",
  "key2": "KSmjydDmvnp5QjCZKUxvU6tiLsqWXkw9LfzknFuZfo15gNmufMPTJ7eHJkaJ37viyCJ5V4xcJLVb2CJVsXYyLPV",
  "key3": "5heYLDtpXiYSCRJSQPQYwxCp4DChWHuRXv46DpovLySzbWoJd1ddBTrM3TGhQPwLPV9QmQumGMH87ZykrgJ74T7C",
  "key4": "31Vz7jtg18mJcpQtPDM3k13JAMY4qvDXokjPZyfoh2eHJgGkUe1oxgC2Zc1zWAqaoy6yPURCXMgH3hELBdEMCEEj",
  "key5": "355oNxJ6STEyEgoeDseNurWPYJrRYWV76GLhMiNUhTUSQzPTNhbEEPx4w45zbvB4DfVnTuzgzMZTpGqwmvZgBtN8",
  "key6": "5xzAEFX5maeN1zzZQgM9HDY7DNThEREAUkJwwJ79fD6rNCyMnxdzYPot8YZwZa44rokKGbFuQUnFc8xrqoAaTpjx",
  "key7": "4RFp3DSeFCjsUDWyL6xk5JjfMu5bi6qa27w7vpAuExLobv7QYnJevUbPXVk3hrLKFZKqF6DF4qfijoWogn6JPuAB",
  "key8": "1LaTfJpzV4GaH5tPubvN1zHDTdZ2VV47zZvqgyVeXNaHqcMCZEbYh8mUewXcZ4nS7RStMj7MA7J6hCMYuaCgjA2",
  "key9": "382b4eaVnnobCnzs1SWLPQ3Ld5bdeTeZEeqcyHNeQ4fbcX64MQ4GnzAJCVmpQJ5xh9G8bu7DPdFQwpGuDhFfuU9",
  "key10": "24irNe2Ewt3tyU3h1mufaRsT9w99JhnMZSfmYfPW4uxHsHL5kdhCGdQzCsxJVNVQnJNn5NNBpbVvuX3iWL4k1W55",
  "key11": "3YqQNtow4DQvmvmsEtHvfRgBD8V46uAZmzV8eDtbvyoVfqLct6tfiaZvdQppmRJn2xkSYMb8BoBxqsiap4VazujL",
  "key12": "5MbdJ3TqCzN17WSyJ8RSnehPCdE7WTBiQPTswnXWg4PCtNzAGxUvzXc4APX2zmKGzMsur62cddyEBk33XN2K8nJS",
  "key13": "63QYCANTre6frix3VRrZGWW4Qzc9P14RnJ7TVu5BHxkse62AgPg9KmhTcanZ9SJfHTSXK1ExCp2Qn1cNHdH8kkN3",
  "key14": "2dhR9ajLbATjwAKrhBPNubMM1XXhQur6Yx1dd3gikA6xW79N3GmzYQ8QBKh57qgJxsvynFofHsnT3wbMrdetk42P",
  "key15": "4buNgmCjKANUvAU6kcEqi1BVqjbKfc5vsMd4CeKoHjAHmx3hAMgAiEUjeik9HmKkxND9qktxWenwLhnbc5Z7CHpq",
  "key16": "Wmw4K5yYPZVvidVNUqFWWJ86eg3aEJFmcx63BpC3FiDZQ5D8NXGAJ5pptMDGD8hJrwSYZbhF44ZBMC37HRNiZNW",
  "key17": "3mYicode5nvDqMPG12QaxjWrHcq9vAa1TwVXSdfVMiyvVWMkEk7XguaMznTLQtEZXF3GqFTiwtQA5FBKNDGNVnje",
  "key18": "3asQUxAQZfo2CaP4sqrHDQU5x9hvn3LXeQY5BUwoRas8vCwGD3BpHtS1VZyZrhun9yv1EbLpCCdbNwVstFnn9s21",
  "key19": "gxYLRQQ75NrBvUkQPGn3MEnjwykHMinoYhbygb5u3S6WANzXAQWq8de4pcoLvyPcrxDPc2Brb2nCZWMapmduu3N",
  "key20": "JzGKaWY7UNwsSbpfYFu6pfXqksDZrSWcRoe12A9xuCAW8u89GEG9vmtijbjxUJ6Bm3GDMNdp8XMwbxuJM3Y7yj4",
  "key21": "5gzaMUyx54CehXBxdrhnzvbLaccjUVE64wdXTFjrfXQP7EnoW5zfspenAKyKY7cVEJYk1RtDPJwH6WH6aco3D51s",
  "key22": "2RQBNJofymyvhCzGBUvPBx17jfjjQTuRadtvejfmVG1WnEU6T6ixD9eGaX5NoSpdASQCWP2nfZo3fsWwEVmg7468",
  "key23": "5L27H9aM4ZPWeanwHqYdUw2oNzEUxramtf7MDJC5jrvmHomEFRFivBXCHPgcJWJRx2do3QKiCkbsYpD4iBiZqvCn",
  "key24": "3ivr4tvJNrpPDAfoVJnfXYigVdNFrv3MjT3Xy2Kt1DPGRCiWA2RTBLGv3NahgD5jhW5fjK3g5DtKFbUvUvv5u254",
  "key25": "5wcXcH8CGeD6bvb2a1pPwKfY9uhBBcbhCAy3fhmhz9Mnyeou8KLrpWNdLqJ4KZ86rw1Zt3GS8nthDMX7zMHZ4myn",
  "key26": "43L74qWuGC7tZEJJPiiBqgtubxQ5AXnXVg3bSDDFFn7YcP1bHDspK1xEzNhjQkJbosvaura9t1zAGxRqSxCUWNbQ",
  "key27": "3MtXrvdC33B9sQQgnMRE9Cm77juEwUz2ML9SVp7fufqiLbgdjAEigFeUuD6zKV5Hdr2dJPmdr6ibpXNadZ4cmnP2"
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
