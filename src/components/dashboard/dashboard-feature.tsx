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
    "4XjnJRTiRQeS29AHqxCrT4T7wDYxFgQgL7Umw4Jot9aLZWUFYpSS292GR6Cc7GhPZs1gZsh6PmmE7YixiTRuG8Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3sQYBSB6DDHWduDjPcHJZnzC4e3FuxsNCfzPwMT67vYv26JmLwwfcZUzZdt8ARzHVq9m1Fz4rCgkB1UtPhLvN5",
  "key1": "5UhKrfqsmxbKA24JvPnuU6SECMeHPgzytiJtXgZFXEJzkkL6DkzZRPtCMRHUL3w4fS6AgULZ7LqqxW79UM5Quu2j",
  "key2": "3Vhg192TteLFPoWFA1o9MJyXeyugSmkfKSdoAeVRxyy5g26TqKSsGE6vD44CuLAJYF2XPJiDWvXZ8LnArNeRwu4J",
  "key3": "5auSwmBxXKCsL8A7xWBaRG66Gsm1E5J8ffa1ofFkFQhoNAbiyDTDNfYLVa8N9V5BXkjkCeA4iBf7Pn6Jza38vzyu",
  "key4": "3koD4M3K6WPWtpAEPNpc3iLACV9v6M1YpaQCaVQLzDrn2sT8A93HPqkdRSrrkPre6UVcscqMwXKGRbxngcW6wWPT",
  "key5": "642bBg2CvNkUJRFS7aHagSN7gmeHmmsRE69zM6nFp8E1XRCLKqRqDxw8Jkb8bGVad19HCt2FZSjg2MEXNZoFb3c5",
  "key6": "5bdWSZxrPGWeoH4s1LN87jam598scA4fDbx897K9ZsQwpxJmKr63PGKxD3vqQEcpYMr2w43AxzoKgnpqWcMjKR3m",
  "key7": "4AD3k2tQwYvcgvQ3KyaRnKX5D6wQNAowUJ9GvichZuAaPDV311zs27E44aipuydmXeUrMsaJa2YtqVTYAynZHSYW",
  "key8": "2bA93e5J1o57JRaYDwiB54Gr5RGgc1aqUevsn4RaBKHGqMZ8ZhLjS5GZjTGUioV6zTrTbTWqYpASAauUdGzXgVE4",
  "key9": "4T5UTzFyKrM4BUEpDAdfri87osL1ba7DsvXHoEMWwKSdtaPSueAQkWnyPAEgqomKHm5KGPvQ2TcVM6pgbrboD8AP",
  "key10": "nL74cjDRFryKFsc13Fr5RmAR6pe9Mh8B8YFsw8NJVxSE7dav11XTir7REifRs6nHxNZDVhBm9HAUREMgEYUgwim",
  "key11": "3kswiTT1bfuE5bqmKsCZp2fPoeSWAxYqnXNffe1Kw8mk5uv9LF6C1wapzGoaL7cJ62ZxDcMRzd69HgGaE2Ty7khc",
  "key12": "2s74j4AYCdC38MAiXPVjr1oPTitQmZfMCRRmNAqHXsotWBLkAgJC9uyWEG3raJESchVNprnp4EU9WgRSBiJ6NAQp",
  "key13": "4JajDWWCQkBQcADReXZBB6WYhodHnuwQ3qWsZFrkJv8BwapodLyuxA4qg23Knvprx4KyHJmHCBjAjjQFJGCbkxba",
  "key14": "4i4eJiQT3aMqwPmvgKgAz1fSv52jeZQEXWvXkmcrmUmoZTPir5Sx9XKXBvjG4Nnv3DmRHFHNLRJRSMaAn1skjnUy",
  "key15": "3TiR1C61JVotALVGaQiskDk88n16KEEbNBc86wtjP6sTwjmr73BAaujbRRHaSS6D53Uy1KRsUtvptQh86YS5Rud2",
  "key16": "5ariZdqcsER3dXw3yrFJovF6RsnauCuYYgZ3JerMwL6F8qZkNEvNjLwFemGemtKsbKFzXXhdZvc7a4gy9m2XjTjh",
  "key17": "4Jmrq4jSFy3awpjEnDZTKXHizgdPSipuVaLNJWp7u5AJyL2YWpZHJNLD8XLtJinGS6Ychhbbpk3PPmXpKSqYD8fG",
  "key18": "i1oezUkasY15eVhpgqh2LYxZW7KQRX9K7piVa1cte52T4NpTAzC7wyZnBmWF6BFPmd7WbFKcqCZPNLM9wtt49Nj",
  "key19": "5yUHDbzk4wSYwAKdvNGHUcVwkzQrgfPnRKr16UKmtADamN2GS9SWXyW1NtxXFKdYVEjJSFPAh21gEtNHEnawYmaR",
  "key20": "4M8brb3zEPpn5WwVvxtjHGhEfS9nM9cUNV3WBStBeKs2USkZSwgXuQAYJFH5Wxkqe2c26yL5aXobGEwNZLT3uSYe",
  "key21": "22jdALdYc97XawtzVGQnfymVVfqf9puBF1xPUdcLoY2hSh4TGtsrXtkN32FVKX9Jb5zuxn1RZkauTcNUNbSE53Em",
  "key22": "2kzTLGKpMreMKnh2GNiWfpuXq3HJukWxTw2T2NjJ3U1TFVZZ9uHb9Mz3U8AT5NUhcJ7amdvprMCqR78GpCdbNPvL",
  "key23": "44876FvXNsa8HUpxuMJNBMjf1XRsMetdsMERu4aWtcPqE9Wqc8M4MUmxVgmgrPzrbMkuat9354ns9Zs57gQ5T4CB",
  "key24": "rBG12Po756XrqdCpoo7A8wJNgJca78N3BBviBDx8FGaqB3LVNWHQBr5nhrbD5Fv72YrJzohoPVHPcbx9tv2v6k4",
  "key25": "3m38kVR8ni97ddyHuqoFpJkFMqRRksX5eW536XXb1FCZTzvnV19Ba93NiM6w9wWxNAG5AAXcdVBvtj6XxgAAXuVM",
  "key26": "5beHLSMviUG3xip1Q6MDxg2UNaxcWY4eHjC13k7YK24JyTuttVHGr1nK4bnUsMeYSnQP3AVu2qrZ9BtkuhQQBZeS"
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
