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
    "4THoG7n79dtsewikxz7AAUszTimtu5yn9TjpGcJcAjV4iJvAuNSMsgoxgpeW9Z2j8CZTLyVYV8JfETcdaykmMgjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUg7YBqUyfUeowBn5kGw5RfzsRihMjxCAFBCg3AUv4XQz9KfBmQ5769iUMZxpdvr1KT5PEpvyTGvwNMQk4zHaTT",
  "key1": "5ZXfekbKsANEbjVNNDavtDQ3HyG3v17Rh2y6YAD1kXQY767SZ68xPuWMD5DKNUQFNkCKJmAoUgWvD4nuGsNJpViP",
  "key2": "4the7jKRBr4mMgVZYJZyxY1EGVKh6FtuqHZem421LBkCXoTCrG17TdQCgEyQ15idQgWtpg31S24DwDihJPvUQYkn",
  "key3": "5wgVqwZHgT6pkbBXqTKgxuG28Z7vVk9W8GnqfEZsG444TLqgZxq9JxiGw8q2zrkwciMhB5GN8WUEmyAc7umqdPRF",
  "key4": "4BhKzhGio498S4YrxXeHar6RVQ4TG3JtU6yuW8eziygqqS5L5szFAfAxiFsUThstG1pRrwZmPMZgrdM38Aee4dG2",
  "key5": "4ueMyioNcgzCA2pu9ahmvgDW9Zsfkhn1zQ5bGUUjZt15gjXkXbHLLrrtQFtwHfXAUNKpHuRSNgXMm428Aj71yxMz",
  "key6": "e5Mj7JxcxBxt6hDaSfAgDZfFVskTafXMfPkaKmG1X3TThr72SVRoJkk1KRTbX2FdYenYx5aQdp9qPe9CaBxmDq3",
  "key7": "yysyNVEGfAFECuybgyDXMVPdwBj2hgW6TMqK9AX3b3LvmHCTXZ8xP7bZVfMh863rYnSrJRrr8XLagn4uPSZj2JM",
  "key8": "4MC6k96tfB2c5GquTcEkDaGT3qbWE41JCxTwSU4ugZWJMK1cQdJCmqGuggSksqdS5jXxWYFibpuKUVb8WRNJGToG",
  "key9": "3jxsGwvo6vsMxDbEusgEfnKNH5fSpRWj2mpVpKhDh2SQUGkbrkMCodpx9DgKb5WffyqK5es5skPz5qAQ4HH55k1J",
  "key10": "2de3D1t6kpnksXvbiUfKj3MEHCZTYScKsp35RcQJzC8y5mLEbAjoZUCLVPnEj879BugcdM7nm7PzGBxSC7XaFrJv",
  "key11": "3Y5oRdZCFTk4vt6Xx8bCkXjVrmaiZQ7T4k2j4dkxj6gfi6xoVYaabMJbvrM9nTYYhabGRbCpcect4syiK4P2qjuL",
  "key12": "4pXUsEU6BbE4gMMNFkgnDYaf3w1ZuwhJ8R2vdQKDiPsCqSWRY4F6iRH4JzG5s5A8Y7vXnyvP2c27Wm3uKku3tyNL",
  "key13": "4US7tFC5LUKBCWRqbvHmirPVHNAUA24L2JfMsmwMKSLndPtZeCVB6ZXKdnrmQ7UfxQV7jb1DgH6KFvfZvRxDBzgD",
  "key14": "2N2VLbBq5eegcPPxhvzTtYNif12fhePUKygScSrvu1FJJg9eJLFPKJoLeGHZjqL1tJwz8YNeKdsjbkcmfqFL4p1z",
  "key15": "56QBPh95GT9k8JjvMx4pFiH38VEb4qTYs62AfFztvmLBTm2WFVh344DzdLh1uvUqZcWP9EeZrkQWNcs3hnYgMrcu",
  "key16": "39Ef9s9o36qCU8ULkcqXy5VAzrC28bYeiyUDhGq7Mcv6qgXJ55tPdj11V3nRZaS2x8EMju9gzk9RhPGsv9YSpAKP",
  "key17": "5yiAYWFAocYXE99TsXFxpK7aHS5tErF84juwBYhmhuCvxKc1sjvKn457s54ZFzKzZHQYTKHYD7HYh7u12WcWRxz7",
  "key18": "4cqPz1E8T4p56TuNxQQ7V9j2S7oxneigWTv1739VMFGqSqs7rihz2xdGaddd2iWWVbDVa9qYfd4LzJv3wruDU8fr",
  "key19": "2d39MbPLESPRcCzhCcecAbxDtFC8CQb2Ym1Agx5d4Jxg2mGsfrGkRPUgLFXgiLnTAU5G4t53CA17TZPfPC9F3sP7",
  "key20": "4bBvaSyWGj2sasrBttKmXMhnAs4fwssyn1LT16CmoVPytP3dHRqrQQR3F7AHw5xfW2pajA2AgbVNKctTx3Vm3trf",
  "key21": "5419KtccLq27h68eh2ZceqCjRYR7KCjE9aanf4acx5UbyqK3jQa8cXLMJaBCVygeW8YJDRnZtrCdRYcmeyhjmXjM",
  "key22": "5tKztfEju81oGwczwfSCgpUd81RiybUuXeZQoydDD8uzDNmNssZRoQgYfToVMLMYrJM6SHjakbSLU1gYAFPQUR5C",
  "key23": "5ipMG2CLCbGC7SvRBzJLUY3BJrGQas7bdp4YCouvKwvjrSTmz6stU4Azo2KrePYGdRYaycXY4PgofdQf11WknfJN",
  "key24": "5wp5Rdz4fEcmuZrcYS1nA42Aju6Y5PGZNxYWgkVubhka4RgHXvhDexYW7qbAnjvEgV2kM86rbjoJPoP2pd13yUDZ",
  "key25": "3cMX4HuhTt451GJPRuNz9qwDh2tfTVhYZyK24CGaBsgRWu89chREXTUyV7GDExmb7fZtcwD2dwwUSwhGtDLkMLXB"
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
