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
    "3QKo6bxQ5PLacPspSS7KYe4K4iFTFvEFJdMYD168hSyXB1tD8TbLa7EazksHjsQNG5QQ5HQTAtUdHAPApvEKCGvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ac4VuqqzPHLBFTvw5nGrpYqoXBMmvhm1FDH3mzAthW4WjfHyY8W4eeFEmRnJc8vFwiHVbchtsBkFosUZY6QqYWr",
  "key1": "cu52ZAaoTA2GXwZVF9psJvSG8rHQ6tu9U63dR1NKKdgXgdS2vggGn5FQw1D4qdsczYikGxzNW8UDT5932f3oTQp",
  "key2": "4o1E21XCM6FABGegUxzXVCdcqgRsE7xPPbEugme9Y4BJXJifVze5drduYhPn8BdQ64eZU8sg7yetZJbUUgJYZpA8",
  "key3": "2Deom8ZervQZ48p7zhe13tPKv7X5eRfn3NmUBPCcUVDW3u7mKxbBj78qA7Qi4dZ3rzvt3o3TY4s3RCLsLvMu85Q6",
  "key4": "41NCbVFkdvy6ATE9Z1djbno5tzWN1dp3qNARaHK6qY2ThfjLDWds6ooeQ1Dy1o7yUhhYsxFjSphTHANhyEscAKVj",
  "key5": "4LwNByKcXC7i29zqoeB5rGNZnrVLMXUVN42bzAqEasunssCwicr7K9jTvdSuvkvrochoAFB2oC5EF7cHZhkPxu21",
  "key6": "2pVF8aKzzgfnjhmK6agDpxWyBdCZfZpaJ8bJPwUFEv4DMVfw71W3HiMNsyexRydoSTCTvizKx8Sem9MtwVGNiJ6A",
  "key7": "uhx4ey9QJpcxD9Zd56se35xVBDxeNiPAStoK5bSfvt6NPNmo2MhWnfNiWtiz1hYEP7EwXFmRhczqPZTyq6adjpG",
  "key8": "4hwX7XbT31z6KibvbYhe5qqMNDMWLDBY5Ymd6xrG1hAuZYwkBCTHJwToy4uvSAJ6AvoFQjkvyqTUKSaAY5KPahKn",
  "key9": "2z7mTkYLcsah9DJfCwGT5mQubfq1DaxedZGQG8jK9eb1J3JzwGTDQpdauSRQh3XSN6xfgNXZx94H7bJuJE1EezX2",
  "key10": "3gq9yFqTznLHRyG32jZ3eCZaHA5byqYDwBrqvokKELtZMQru7iTeXtJxes4kdaDyudFhspXnQokx76Jh38s6HR6A",
  "key11": "4mXvJFTgjYVfSECDUS2G7G5G3KS8uyLMzZLkTWvWddY1f3Q7XDp1dLxf9vVSFg6tXoq2AYr2LbpsZucaJZma5WJT",
  "key12": "3FoXuAdYkueNdWfvSwa92XafAf6aLcPcQqWVMzuNS4M4VsDQa9qN1HnZ5wjghSUK3WBQ9Y27952rXiGx4VD7LbWF",
  "key13": "2wDs1nhBDKb9TZwrwtt7AbNMBhy6HiGctrvWjygGqYuwfkCuZYJzC8qL1wvAx5FAxHatg13JpS62CtasV5j3Gr7a",
  "key14": "5gmWevEGJWYWiMkwwJ9yZecD2iDd8pce5e943TCnFCobiN2aDafKRm518yQFPyU8NL9bKeYrsgzUAaA17ZaKAndC",
  "key15": "5jUfHmUnMy6vyR8FCvEANKgWttKf7TNhoyGWZRcfzVrMssvLd6gUUSJfA6kbus3Y9KSU3snqTF2HkbJLYsDaHP58",
  "key16": "mKRpDBDajnvXYswFsERZs1yshfDMj6CfoM62GL2W94RQp1mFNYH5LujRVVMgUbYGHZT2vBpPWcsTzBm39yj3eM1",
  "key17": "FQEVCg73864uQhCGcXC3NxNSqSZ44tQUzwHBL8ZmjqX7wo7M2WcRWucUiEDVMjrdSo9RQtM9G37fR9zUXwt9HHy",
  "key18": "3yWqzVieBLqt6TGdyQig69bLFqM6me23C7nXYUy5AfhaXyyLTJryGE5AusXT7UdQ8DUGBpLfCPuW3R2uaewo3Gfk",
  "key19": "4HkBFVJvHP1R1N912FJmSXdriay9eCxU8er4E7xNH5X4eFrVZBtH1Z9dQ5ZpKfrjRrGMDVvvczJMMq7mhHmZLGj6",
  "key20": "4En5cndyXS12VcqhrziBkWXF2xvz3aLHDErdVR7F36CQBkCkrJ6vHqqbMB8KJdRZfTvc5XN9mxW8AwfmqCnuk1fA",
  "key21": "5DsspQWsqB8TvJbapaBpLsHbpFooNSZ6rrA2xEYppgavCqKjkkuCmLrxbeq5LfHX9AXkeLh4hdpaZ3um8FBtrx4j",
  "key22": "3fcJuocpoDLDLntTXFUMxvn8uVm7bR5jX96Hz2MavuGvH5mui11NExUPcx2QBVQXn66DC3chkYzFP4fNaPxa4vtc",
  "key23": "4dD4syUp7w4KRuBSbJaZnMVH8Yr8Kux3DesFFbZEm75q6MLnSwvdkzS5AnvkNf3Psm1PY2RP9DUDv2qAP4FP98Q6",
  "key24": "2Jr9mY3yGueY1JXAZUjS2xs33j3uxraWgDCMiPCGjR6jai967WfgdApzK3JtWBqJgD1oEUg8TkStSUWpij6sogog",
  "key25": "4p45Ms9jAeck9UdhDLegHY6CmZxYLvM4YePGhrkKDVZQ4J3o3pPQAjjdhSFThYdE9PD5vsAXqi2R5KrYqWMedEMs",
  "key26": "e9gGKwUECEmZ5zSkJ25wLcbYPZSVqSV63SNZxkjQ2KpNy2Wr41HtjjZsWa8tfUzwJQGQL8QY22xPdhSrXhD4Mst",
  "key27": "4HHfiWdmcvK3zpVszYPCU6fkDtRHRFNUJkETcpK3jNBYxqXxsaoDjPuFqxGEBtYwtk6ZACEbjjnjHqJpTcszLT22",
  "key28": "32szSuiuJbKY5Ek9efPuEYybmMZzT6xurXghuuuK4cqqzLQFgvHgugTk4429pyu3cwC43xDrt5KLujxWekhxtkQ8",
  "key29": "5DbhQtjMLrvJGqnNEcbZJefvWbZTKZC2tm1CCCV7s2xTUyqTay2Dk5ZAfp7PLCt7j2s41Peux8ESXy7gMPLZgvtG",
  "key30": "5Kj7fG4Y9syQPHZ3AU3voKoxsLYuJodtcGcRRTFKcajbv3WpnSozybtRrf7ou7S5GYDyuvCUAvMroHfd7GY8nniW",
  "key31": "4VbmxEWP6oRuTsDURVsaMdtvmYoAKZyZBzvteTM4kfH195X6KudtbQFy7hPEFdTKvEkJTasqeSTZZvEmDfnuZyeV",
  "key32": "R5EZiX1tbBwppare6PBqzvSk3Yqbpb6bE15GmqakaVQctiDiJMMtCwTLq8LWdHofJrN5GqTqcADng5vqmwrcCSK",
  "key33": "5YTiT3aRMXFCaV9w7mBd7MtEBGKLT11RqaszpSLzdqeWitQSZL3UVzfA8AHzVzVtASCpJtSNaS5eeZTQpPnxJLJg",
  "key34": "4HZjGm3WfJrAGvFG8eV6fNy1R5hXd7e7ooKUxWyNoPxDf6p16fnJiC6zbCwiFnMb83jFMRe73cjwaFMHLAMGr5Nn"
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
