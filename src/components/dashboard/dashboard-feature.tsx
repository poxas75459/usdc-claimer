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
    "57Vqcx1Y5mXua3C5WeC9zVmARfmVfVeQcfHoao5wxuto2Z239ccQuFeDh4ZsRrjnKUhLig6nZF5mZiqNhSwRC9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1ZT3AzD7SWJZ5GjHcohxtCfuJ9gWpGHoYjEGyPBV61LGTKhhboZcbmfujpuV4fUtTqyF8Jdvx2DfW55nGdtF7e",
  "key1": "2zb8MdYePD36eMkhvzAMTGapbZjiigk1xbkDSgJpGP1qW42mfVehByva5rLABYRQFCPQLwzAx73WikQMhfswbm8C",
  "key2": "3yi1w5PQUtYd5VuzgthJCc2bJ7En592RyKnHorMfa3GdRngHoQ5QfQdwxbj125Y2V92YCyEoh6fvsD1vwr7EhUYT",
  "key3": "5U1zHG7FCTm3cz45d1MrxQKqEg2wRZ88PSer3YDDwAx9Gh1PqVt2XtLTHMuNHHMqUt9tdXhcCUj4qiAeKcRra6j",
  "key4": "4PjijjPnMqSNo8WanB6ZVbhqAErXH2FhgAGfcCCpAer6LY8UpD7qoMthkK2rBAuZzns5oM93ZwVcp8XNf65ax4Fz",
  "key5": "5eMJdxXuBBUWyv58LTq5N6H6Ht7WXwJQjf5jhRbZ8KaTuXn2UZR7r3ywoDGytXJxKVuoHwiEkoqTSiAv9VM14EPG",
  "key6": "3zFtwRHzh82JTRkBPQ2ZJ9tJtGhgcAES7heG9Jyf2Dk4smsCk5jfqx2nQ4usNgK2ercHyNibKKTfGBp32qHbnNZL",
  "key7": "vKTgPepqzfLso5oVcc9kiEfcySkfRFoFYKKYXEsgfnefoQzvVeBfz1MnDRLXaXGW1N2bxBezq6aXfvNLhMJ9XSC",
  "key8": "27ppGRpVajnFZruCuNFbn5rnF1PUzQfbf5URk99Hjusrn9zUci7Z7MxhRN5J3pV3U7yYp9kFhMRGiSfz37GYAzpf",
  "key9": "5quJV2wYzZCvPkGqQ7fiu2oLcpEDFvE8pbJV8G1tUeYMS4cXKiCAqdC6th6gUqBqo7hgz8dqynA3Sm4k4K8Y7etf",
  "key10": "2Eq3adNXUNM5ZNdsNxT7Tyaw7acdNTDTvrcehp4eXGKr5VKajsxip15hYyVxDY7Zw3HBSK65Uu9FMsD6XfvtnXYs",
  "key11": "4u9DYPjTREKwPpgEdTsX4rD3aJC5m7nnbfeCVL18Pmt2McUSk3kKRYDB3wELvg7j7Msd4rXdZHy6jjcwuY5hHsah",
  "key12": "3BkUEEdYaVgRjUuKbyMzVxWDvMjrG1EM344UhPcYT6PLnUBaUfSRxAuuNhTJc6GXr6ByYaNuH72BbNXnLSxU2nFX",
  "key13": "3deHSYgT7mQYjkwoWfQayaqqKdE76VUt3yJMESiSe9TybbmPMBTa6kqoPjBd7wgJEyfCNPPJrJs14y25uAD8H4gZ",
  "key14": "2E4DP5mtJpxop8eM7t4igzCPDAv22WJeTgkL8PFGWcRxgZhdago9BKuS6V9cDuzD9zX9hPXdKju9duXRdXumNbYi",
  "key15": "3mzr4xAgkbvxi9b7EyUR1Tmeso6vEb3Q5JYA71HsmtpZKwCL6uMfUEUyHvKdH1xkKrAP177BGn6zDd1t6a95uZip",
  "key16": "3qENpi4Ga5wtErzQu8todyd8uZv56iwNaPPLe1tUtW3KmcaoDWxCv3aX7TGF7kENvNgaiHRtZ4xx3TKu4u97EAMe",
  "key17": "46jYC17vadHjCbbnbrQiZSToALiDw7sCiUoe2oiqMcne4XQ8eGRBviwaag4uTT9DFYTQWzz7XWK8CobEWyK8KQWE",
  "key18": "3BD3Qhgz8pjcw9jZErzffmxiV1eUEvb3rCXDr2Bmj3Q8EaJdk4PKmvC9jSxadDBNXeDrHZFJjyrif9SUtCnoKqgr",
  "key19": "5okDsZTYuPb53QUQbfvqES8mhh6EcfZoUD2ejWb86og5i9Np99oKsJ78ybtSVxUJzxHvDegPNXCYVseozotRc3L6",
  "key20": "3FsY6zRwJFRETtL7YteTMTum6Gf9o5nHXoUJpxdjhqV3hbWrvYiu8vspoagDRUfLEaNeTnYxxZA5ZqWUYeCY5ufZ",
  "key21": "kTibNAuXvkrLoPkgnCnAYvHFDtQAmbkjt4t1YbynmNikgHUc9oHdsm6xEbJv2LqygEJdGZwhTqk2f64ZCaGvvUX",
  "key22": "4HTJvsTjCsvb5fe8UUmN29VRa3EachuKwgggVopMn2uPCj1Mfa9rer99w2f5Awo2StZuRjSo2LForFqLGnKdvvQo",
  "key23": "5KYXwBsUUEAqaVWj2HTxk8TdYKLsG5zSZzBf7pW1xzNvdfqxyo9yHYKDUG7JnC8rmtTMmNb3ZHcmkSudPh592twf",
  "key24": "wKeZt5rxrigCim1r9yPDPi3vkTrTdKgtwXMphdyGQC3XqZoNGm3fdtaS4gb7fZfkpEsdnjHacr79V4dVHvKi39L",
  "key25": "5XcZD6a71F6WyuADooFmyM4aw4c5X4LU7yRyte2WGkh31gWUuHZMyRNSqohP8z5vyn1mLzsfJXuFEjqBdfmD6RGa",
  "key26": "5EnncFh91Wup6GjfezuQdC6TEwCYdXg4Mxtu45327WJ5zPADsMbpEyyHDHH82z7vUFgUDjXX9nGYAGW2en18gDth",
  "key27": "4fjJrf3aBUuNMFtpqBZ4AvEcsAu6x5st1cSW8YLjDjUraJdrQGiyvjbp2LFYkhWJoQFcH69LYdS7x7y5aiJ8WmXJ",
  "key28": "23avBzd6vfo2UssEoAJiKW89VxqFpQb5K8bhDAJDFZ9K2iskH1BHkrgP82Er9f9gryTPrv79UiPuYhRbHrtvcSXZ",
  "key29": "3KFMhPy5VZauSiAeCzKss8bqYzXjXZXQ19JzGoNcssezc7q9Ci1qb6hjUnQfgjZ3YxX1AMyZiYjyan1dtxdtD8Y8",
  "key30": "TGBRkxkndv7UQD9aHQK3n4fXgq6PGsyGBNpGVeieVofQTsdi8dJpP7cJ4GQ7zNmNptY6RospeJxwbobyDhFRxR2",
  "key31": "3KmTE7M5HpDo1Bp6tHPjpNufFp5qmt1yS6p1TarhDBPjk7NvcJVPWwD3CAb7LQ87spmwG89wWEYHV8Y4BwE5JcUF",
  "key32": "TGuCPRE2nuJLmeiqRVGQCmZxgKS8kgoRerAyW7FiGLt4Zog9Cora6iGFkGABSGEbULFsnP19qyMNNtYB3TNJy7v"
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
