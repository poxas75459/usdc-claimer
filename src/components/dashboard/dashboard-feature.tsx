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
    "3zuRmAGpEFZNQZViqhnwMRcrUBZcWUN5GhJwM5BPDARe5HEejfRzQhXjKHXmCj6gT8991DJNtP6XLkasqx1A3LCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E5aJuSzmQfVofJyvSnuNHyDc2nWfLEVkCsukThvpqhKfr84Afosqz7wYUNvAxW9F4XFqmfv3dSJqkYxgsPMXPzk",
  "key1": "4xWyXeKer2sXii9gapakUQzKgK7yy3AM37uSzeGKi3AUuusFrqz6bFYZo1D6LSUbc7FobcMEu1WRfe9fZkBCkYvn",
  "key2": "4pwfmgnYHeuE2gukwPzxtvbrSVgXkFHyFLkqm56aYvZKooDFsm3cc9CgDL6kKoi23QoPfsHHkKtAbw3hAJeJL4Ni",
  "key3": "5aSPPf4HAtnskYHnnqTafHgwLQDzeN25MhEBDyd9pM3Ew4rJjeUZLeiYktrga27WvUMVbbESFFpE8x6u7eDYoatJ",
  "key4": "3mkz6t8oWofjbA6mswYEaP15rEkTg52bcaZe9EU754MrnFGtKxkR1MdouFpPPXrf5pX2R3Qgofjvj6hc8sAPxv2t",
  "key5": "51Y4RpXeeKHziAv64B9qYTxHt8tj3dbHeqTMM7k1juVxr2wZQ2GRg5bCUiTabCA5TnSgRvraNtPpZY8oERgp93Sn",
  "key6": "4ZFkfaUdZvP9PCabk9uC5BsvD3ueq9GxdEfW2Ud67ZXWDegpEDd9wE8jRX7SMWnXxzguAVaC7ZciwBpS8EvBTEkX",
  "key7": "5eR2qkadZ4RELNpD44pcDKcn3BNwo8LTFL2QMz1yPRxR5te2hEaS8vRCh6opWXy5gPvwc1DkjLHo5Rb5qbEbARYV",
  "key8": "2GJe8tScBxjPGaagdpbNzcU9Gmicvm2nTZWYWkateUVjpfAFedZ9jJaFnDPsNxtGgTKh3JkR1Rgww2iwDUHk7Fyz",
  "key9": "3VtiK8HrR8C84i9qLUE7U83NvoNicmrN4HfWCnWhtRqpDJ2LPBodVQc4q3XgyS6LX6uWHQHynRK58z3uPgDQrVBk",
  "key10": "41jY2ymNjPhDrBU17DJj33bhXphpNmVL1G8uJXUxCfZmKNeQfH342ooDJWRdcjRcgvAB68nRf1NPsGtvjCPQbRL8",
  "key11": "5nTNz7Zv9VGS2QyfyoCWvKy3SQTaVS2Tg85CYtHqktKjvKotUiE4RsEqaJNenKiJShtHZATCP7jF3TGeBddqgKmo",
  "key12": "638AtPMiEy41MMuKMuA8tuDGd6E5NyDAxekCqKGBWWR8d9mAqZZWYLjMaUYKUCSbDa7TxW6h6N1nUNYqF5y4okp4",
  "key13": "2HsBM376qYYb75okMTaMKCzRknjUNoeUpyanxuwSz8UmGFxP2ACRWtRkQxNjbk2jY7SGujnMV5FCPVXWbBMFwGFk",
  "key14": "5VL1MVbXJiANjjjFq3cL9Rh8SBTeB3Ppm81oCiJdDM6AShWo4iMGT13wmCTwEsWC2ArFJVfNbsxBd2qGp2FURH43",
  "key15": "5MQ4Rhwnt8Qwyh7d1npyhVUtSdNzNgPSZwZoLgUyHpTAQyPEV1sYHjzcAcNcxTGvQoXa1WiJsEA4vbrcqGnSFcaS",
  "key16": "3im7BoW3R4nLk3pXKerzZVimnuP35w2Xm91BwWR87mYTwbpSXonCQmusyrv9UW1Vd6pTEyGzfyYAKWEGgvn12LjN",
  "key17": "43cfHtxmVxoAZCvkp68Fd28X5WveBRaZ1Pw6Ep7sH1uZcXk8oCUtyvCK68ZU7CJANJ9DgFyrQVZMWi6gEQXwt2sA",
  "key18": "5L2SF9Vj4TyR25uamW71nYoeuyW8zB992KhVVzXtwxNGAcs2X2EweVbrNzNn6mmPwnNaTqZ1Z7hDEyfesrQJcgPQ",
  "key19": "4dnHUsrheBeMUU2risPND8r74XGQzZkWshTbhmCCbLPYye2HyEYc1c3ZLWsj4oaNfM7v2VgLTAa6Lo4UPdaQXyA3",
  "key20": "22dZ2fvExhEgfrLH9rgHUrinNrW7ERie94QWrMcEefJFd3BirXz75EgqSTujSgZyweR7Fqxi6jNyrzJ5RPWFdciP",
  "key21": "4SUpZSH91EazQmf4Pd2s7WSR3ei6VjoL8PRLTDNDHfnnALihXonZiQ7L9eXL3dnjUHsZkp7NgdPbd6gGXdsgSxD2",
  "key22": "A98Aepw52QPHBqXGTf6ed5Qv5CC92aVNQc7y7u63yfgYpVXVTANBgkFpzq89NtthKGdfPbWTqnt7CTY7sFuYydx",
  "key23": "4YoN9KP5etLmtwgi5ESgPPTAdDdj95UZrsT15rSjqGjGJghoeBey9nhSGUZGa1SWYT7uNE8v1LJnSHMb1BumXCPZ",
  "key24": "2vroVk68EB2N2bRE1xXKvcUV2SbYp1DvPNQi2K3Q1xCMHEs2LdQrc1hzAkvDEfXaE1NMHt8xrSHkaBMJWTfAws6t",
  "key25": "2RS2rAgo3g5QRm1rHANc6XvLEr2qdi8dAamUBMTmtKkn23yPNZkQ2sn8qjkB8sDG5RJhgGNQ54wq3AaNh1ifWnQB",
  "key26": "5roXa9fKxMJikGEbVGX2ThXzHSSJcsxx1hiJqGBPodch4NyitjZnekC4R3dD7jEhnWVn2JCy8VtJxxexw7BfUwS2",
  "key27": "3y5ooKFv4LvWXp5zLrWVwgk2m3F8QGWWA2P6YzGYLDcU4W74wwgwCF3mUdTi1YxiCTNQvZ7L1WRn5Ndz284bGzPE",
  "key28": "38z2KLLH4LeMKTLAEBtHL9tony9AXUbD11EEz8PAV1i1SbQsJvi6nxMc5mHbhjZUgv4sfumnnWx2jbxSZRmiT2r",
  "key29": "4GyzFjXMr9nG8wN9shDBpQJFH2cQgcKrtrANJwGDmVCJCZ66n6GYo6E5zzfUZQHHRQi5BbZS656ejgZNKcaKwoBC",
  "key30": "5eYcQtJtMs11jqi7v7Z9QHCxV8jPvAkWkcv8Dwp7q9FWy9Pm7hdfkEjSRvDZ2BnEULna4EsFahCYjvqxMn6pJXLs",
  "key31": "67E8RXL3J3vSDLyMNARuM4ww84qDUE3dmoHCdBb8qSeKS1QwY4Be2Wyri9fkyLu5gkeL7Z4zRKfJ1eFmx2JQbsyz",
  "key32": "52BuE6co4TenrutTD7ByKL1FgADgfbyZo2hkA9wKEdkXsSrLf6MDEuy8B9XqZ5TceocusmMLHdmHAXJVcWwDJzQ3",
  "key33": "4g2bc1jQ2LVqE6vSggkQztshB8muBVrDwUpUsq6scse58AUVXrwMYk8YiHimd1G6BjKsiGN7LBoYR8MDqvwjiGux",
  "key34": "2ZP73CgggnhzgcMJVqcCHTHchifVbhQWiQxscv5GvN5njmsJMM2hX4ve4wqQhKUhMzavAyGf2YMXQv7Gp92Me9CJ",
  "key35": "puJ5r6se2XWP2P4FABrNa1Hx5F3mvZLU6EKKxrgGTGPMBHkcdVbTGYdYKRMEevA7Wv2dwy18V1asiAqs3Gy2eTo",
  "key36": "2J8UAFX1tYJcV65mq7ZsrxssgRYcYC8Durgmyno1QjTMN49Z9b3v61jRB5gwdJ4yD7app27Gcbrpq9S7uXPQE7S3",
  "key37": "3jxtmFuxuJhqweJGLcfgZUEZEdAnyRFjowiuBgRwaaqZBmjuAfmyMeZ3GLgmqEz8YvA8DrmN1Lebmoy6GTYA4Et3"
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
