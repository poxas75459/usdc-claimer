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
    "39uPvErqTd2T5FBzDiFLSkPdYNBHhPH9hqRcp193jvJweHXoPeH1Rm4XNZD69zmS6mfL8UKQN2RaF3q2bF4MXY49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrGajfwXBfrEY4Ejbtsgb9E2ZsLyPrkLw6F4ayanZjBf7jJPe34dCbAXpDCAiQVfmAQ5KTAtEBjHa6NmTkdpuMR",
  "key1": "55cHFPBdPznRM3sxaJbDzMYW2sRa93tYhp5SiShNTNJ7Th2E3zaEicbXorMjAcjk3hU3VqFMf541i1T7nJZxxZ2w",
  "key2": "heYhsqCaSjDZRroz6ytCeJdcoNmTwD6ycT8vWUSYW7efRtyD2ndouSTSTeokyykUGHv37G47Bp61qShXkW4B2Qg",
  "key3": "45Qva3uAo4H3NSzSVM3bkH2ANWz28fq2HTw8tKWi8pojGb26zdfe6eUY71Gr1CPK3Y2Ek9wF3AC7MbzJZE4YJEhv",
  "key4": "24z8HYtbhbr7wUVUX7p4jLG8PFHgv5wb4WgUAS9ZdxEQG6TBTQkJhxkFVVj5YD9S4977i7hKsUoSVbpHnjvCGfdi",
  "key5": "4z3r38K2xqM8EhoyhPyeP2s8VCgc2Gdiry3o7CJSArD2rW2CnpxmmJktfE6fHLhSVw7atCQtBaYYq1tDygozkiuL",
  "key6": "2xyD4BTs5jKxDnDsqhBhpG6YY98FFywREAoBNXvpTX9BnYrYbLfSK9UbJd1nmyrAJESc5Rs2dJahK6WmVTr2Yiws",
  "key7": "58nb29pPGcZUrvx13tB2S3WPEa3ZLCyY3V5HbieyvRptw4iLpHDmENr1mGpvS8g8PmYVAMTjdUpkqPize5mR2Ksq",
  "key8": "5FPtybUBXqXCHiohSgBRrfjyNXQRPvMLPFMQQPsok6dra9dmZz1eaMKteQzeW2gE5zqL7YcpCtWwwJMeZG2v5M2i",
  "key9": "2A8kDry8JQ8RQEfkVGPHXZ5iohKH5CVYVCrUADoZgf2W6o7xmVTpBLxu8X7RgW1ytZsfnayUnh6uRKt54aqN74pU",
  "key10": "29dDTU9LgJLMffXJS15aTyg33AnHG7aWnUsGp7ebot47FmBFae954qMroiZCYs6Yy5QiN7JWARwwAhFiPByUxqi5",
  "key11": "3gGEVoJVyemdcaD4sTYkF7eyruwdHvJm2oJGzWgsrjchMsU8azYj3UdxhxRGBgmdCNt9DP1QjngVk9tgNGBJRLBP",
  "key12": "24JCgMZHUXS2Ku8QjpErecZe9EkWDwEPMwiVFxniDNaNtSoAW2hC3WJJW7wxhmeJEnQWgzh7BYEuwc3rrBeYcwJ9",
  "key13": "5nr99LteH1eu5woQjhrPQ3Bf1bBnTDF9mKi1SENUrHvXKeyAvrz2sZuvvvaR6EsXeaB5kPGo4MFX88XXgw28YhkN",
  "key14": "5zPrtoEyAFKF4aTQm4CPZCPtYn5fybgdp3kKdGT9G8Z7RHAJHhzM7m8gtucCwKMN8APHiuvdhbLHNuiNjfrf3Jet",
  "key15": "2pS6Mi7ytYPktmX9SGdmQYXdS6wEw8SvYZEp2AsZFM5oYsaNgNLMmcZyCodNvLeSMckPJHzJp4Tdm9SEDPYX4iw8",
  "key16": "2tDid15GUwz3hPGUYyurHrsRVKKGfZ4Hfdo8vaVkxgKX2mpuNZAsv1mk43QhGb2U9DzDHwypPUbHbUGvTdHqApsp",
  "key17": "aHT75cYzgmr7a13qHfZdDZKu2Nua86E8CdVhaZJa9L9V3hfhBhvyaLbhc6P6Re6bPE9YB4FfjAuDwGUhJAXVCnH",
  "key18": "3bMAvVYwCzbRcpoUyYqc21NrAdRiwM1qYmySTXzyEDJV1ZLkZWBzEpCx6yHtG4jt29ohwfyu1JnANbZiMN43oxXc",
  "key19": "HBYFWTryNCZCLSBRK71ALnna2K5uoHJGNVKeKCtVyaQTkViLSQYiXuGA29Rx9LpXkCQQhj44JL9aj9RpARs6AxU",
  "key20": "1fa3sTFgZuEqVrVot62dwCwG93aNN4tkVD3ay3QvHoicuMNAxj5JkA1x2RqZFmsptEjaKdps84sRJwXnzEJ1sEf",
  "key21": "5JLAMByCzyUitHHa8wzBKFgHNbLc9uVjbnmjUDSNTHo5Pdp8P3p7qnLqGR8MjCJEWkL4d3dpMRdETZDeVAzK9QtH",
  "key22": "3ubkCMGscQTz2K6HgJtNN9MT9qZovpmkH6v4A7ugRD5nL3KEJq76UdGQBvTfQs2mdyKMLJZBoC5mAvw9CCjRbaZ9",
  "key23": "5wNPbTB7nMyYLmQxJfaBmP2FMyTnPfeWzqPAyKPHWN3T3qwVcpLCgXJFRDj4m5rRvpJntUZQHrAHTUGuYvFy91zx",
  "key24": "3RuXeT1JLE7Dg4PiDtBbSHoRUcVDXMn8KMEqxGJtWetV1vvYxYPsWEBxfjiL2o7DNu4wYCxfvieXjgo9QJMLQ2Td",
  "key25": "2aP5XkAQVWZtfeupezmrYFNwfXrBreYXvqpitLtr5dzXXXhe8iHrJfkFy4KZn4cQFCCfuuaZ23DE7yJRNsyDa5nt",
  "key26": "3R9kg9tB36DTUfmbpNXVPictx6JvGund7uWgMjiRbEqBHZjAdAQiHaQpNLNcNGsimmTc6bX4L3XwW9WocBU8vK2a",
  "key27": "58mBjrr62e7N7f4JaUh8pPQjAxXMKPh7cT2xwhn4Q2yNEKkiqvRidvwKBNGyi6QoZ7BRdB9KXzpcy2A22ERGT5jv",
  "key28": "66D4ZysT7XQa1GpMwVj9fVNDDiwxutno4qR57qJD3d4FDz2tFFJQj2bNcem5ChPoMKcJzwRWLMPY84A9PgTghg14",
  "key29": "YAMGNnfGePAwsQnWU2Urtn5xEXuCb7c9YKtzLb8SgVziXuvLkbbGjDogk33TYD8wnMcjRG71Wy7NcqvDEed5xEq",
  "key30": "2gb5PooHd29Y7JJofqFuLfKEeNi8PthGUz6QE7weoh3mmz6a5837en3qza1QCKj5o4x6RdmHBnkDvFLuMyrnTCuq",
  "key31": "2j8mZz7LmCNJbpC2VgZqQfj88m6GQnk8Su1WcSNpZrhj2uxUtdenNkPUVE5cQMuKEWgE9dmMt3FeAGTfkg8x9FkT",
  "key32": "53gi4VyyEbTJfepiDz8KNxqi1maJFRMRwXx9HNy4vgRF8bUYJV5mwDUUKjhcpuG8kRbL1pbtLMC7VPtGjS4DyaPw",
  "key33": "3LjDS9uy3ET1ncJJJ5qtDtmTr5phtXMrHFmAhBoV72KcMz8eZaAneoSYMjdpeR8EPb2NEXttsXZmcjEz67FXKWEq",
  "key34": "34eLMF2RrvCvwYTeUZz2oXoCiLZmLLjvSrWUL1aDPfg1uaaGm2pkLeQF6hYUuTUZqWqwoFEMqi3ewi8F1vFEY9Xt",
  "key35": "5xgSURaLMaPWBkPc3phYrVuLiHERs1rx6nrvHzN6gbuRxQMqT1ZSH9sx9u3Wu7Lc8N1buN4vAFeeagoajs3qoDri",
  "key36": "2XMbUoW3Vhh4SXc4CuweJRJrmc9dLnzM9ruWCpFGeu7NEePJnGkdRgTLuQ3XfxQBHy8uvBfyi2jg82F8AXk5dXYi"
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
