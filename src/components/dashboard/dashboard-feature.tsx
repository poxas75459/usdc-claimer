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
    "2MjHP6V1rhLaYJpanSJwU6XxmBDKbQdo1fjgBibnWJvtsQRM2rTP4CxPejxUhED7b6zzCjHaktLXQ26o2xQAs3Vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQ4JR7WUeyPBRGaiUTXvRonf4vxTGqgUsE5jVSbm8EDV5ttWbyjUBiBfz9nU1LpddvwnCwdMJL8D7ysE4CzAhcF",
  "key1": "2xan6tXgby4rvPKw7X69Aj7nsr8KQxoX6HZnV3DuHpyoCAd5gSqgcJwRcxcfpQK1wKEGSyXRA9RMa3AukJM8K3aZ",
  "key2": "4YDo92GM66Px3J9VHpjEqtzHCSyKKwMS9pBJpWaYGqYqEXuq9MohXEGgXSntH8twJZuR2ooWPTbPUWh9h47yLkWk",
  "key3": "vnYxBNgDHuvpSr3H3BSdNTwKCnp8nZP9f24geGq22sHGhL4HEHrvemwVC421gVrnaVS78bEH41PUxoWPqGdqBD7",
  "key4": "4kFDc3hsUorKv5np6gQ8k3cMPcNpcA6hEYgHGRQrW4vd2jWKkdZD8e3TJY5LwUhUuCp5M8tRS1XsjijZN992DMhv",
  "key5": "2fiuVL4NAAZX3Pappnz3X8zneQkvjizPtrCYUwF7bVBYYoNwoa4tVHuU1gyqobc6yMthsGfvCCCi7vQrEc2PMWpF",
  "key6": "5a5ukGHFEy8Y9U7QoWqYHgz1PMVPsfgAqt2GWY4F2kB9bMPJzGrii1YSTmeL59gdFDfQGEwJfnZhFXQYEwRVV7GQ",
  "key7": "35qfNFdWaZJo4Vxy497Th7sqQHwpZVLfwY8cpfEYwCkVdTjdMmQyb3R54ghwR7RytkykFCaZsEsnHjpP8ErxM4gc",
  "key8": "2PYHwHJHnayZ9nmM7GpahzJsboXxuNfkrHxYvZRQwKY9qKP2XHw7ZZ5HULDs1SkK6QPU5cUpinCMvYGMEwAPMkKV",
  "key9": "2Myrx5o3yUciR3RRJBYabTMgUJ3FAqkDdZPzJCFwRrSzztKPJH6P5nGRcSNkX1GfpysQe5mkEtFxh9NhUWd9cV1t",
  "key10": "2hDhZt9hKzUxXBV4S7ZANrfwLh2tsXVWC8SJhY2EmQnwqxzeGLRBcXHSiT6zXxWRo6okhMeYqt6oD1KNgQ1Gtn7r",
  "key11": "3aUYLfv2q9rfnZdBavRgkqxde7eDvFhr92w6fGp97zKjvXUrcTnXoBvJ3VYSUC3ks84SwhjzQdzZEU61AYZdWvUg",
  "key12": "BUto5JZ1B6T7umiew7UpGhgc1RXkdnXH4d36U1CCkFFZQV3CaeMRbpLVBnmbrhAV9MgUCL4CXdfZaXqi8fuQ1Wx",
  "key13": "2zJBEWxyyRGeX5K54q4u6biEs5qRYjEEtgDuMhAzJnve3rSYw33ZEXY92zz8sMF6abryfdac9gTNNabg7DvDCPuq",
  "key14": "3yjXZpuQUy2kyFDncVfoGPqMfw5PZmRdYAgBrWv8HHemzfWd879LBcHizDmLyjM1EDjLeKWumxGLjjfNhqgUksRa",
  "key15": "2cAS2UUoKfH631SMgzBCPioUkFrX73jfiRGbfzpC3f4BMhmncc2iz1rzSYNZbJbQgZxqycWqMQSFj6D5mddruKfG",
  "key16": "2ZtT9oRporECp2fEN5nn4onS4beGSnHr6Y7V9dg9TG4x5FUhihP2MkmGCrt5ReiTfRWk1G5UBwfEEKZ63on6Djks",
  "key17": "3vBM754QHbwWb4DJLaBjTzyo6pQzK89oDb8Mtino2VjVMwmD2FNzMWFT83U1iDqoNevi7EuuE3JwfKnDF2VTNeSw",
  "key18": "TJogKXVEzcHevZLLsxsQwk5g3ELYyGy4LT5aZattnuqJSpSMvVWE1xy8tZdAkoupPDe6VSYE8rHQgCqm17qrK52",
  "key19": "339R2eYUv4cqdN4zB5UwgErZoj1JcqeucQ7GZxH7KYdu5TLBwMFLLD7U8QbHs5EgrnRXDcx4KDpvdFxJGaHmrgta",
  "key20": "23nQTSmvLqUGTWrzXr2pXcFYfEagfsVy5ZQSMPVQo7o42KS4RzF82sFJtbYsomf1z86oZQY8KpX7q6RMWYguWhz2",
  "key21": "24MnJ3BB4t1cdW9jdeYhNwdjeNkFAQ32rGv9bq9b5ogbft9axGFQJWZnnioCge2zy2QYLNJuPbtzA5LB2g5dRiRa",
  "key22": "3oiWeC2rJKj4at2mMzp8YdBbEVRf9mmhdRefeVekLAgrENhVSWKtnaLRA52dY38krWBHAY8nKZTXnpasWyxiABy5",
  "key23": "4czpTMEQhMq2H5J7rhFqHnrhcmkzahJ3MRPouWsxbeXBuTy3S6txjJZkxvqZop5RE4KT5dfr2BRha7ah9XksC9Gt",
  "key24": "3LF4cr1cUgzPzUHioG1TwDYGBFwhnw8qQCU9yRPgNXUWgeyCciYjdStrfkZh3KFXkfidnrCTRQZWx6z57ujFsr9o",
  "key25": "4JpeB9j3YBbewz1EWzqXdekEuqAvWE2ZXCxdFtXujSek4q3XFnEzhUTjjfMoaixSvuwazJH9FWAShE3vhy5wpYoM",
  "key26": "4hPNFLe44oez4ZvHP2o5e5EaYoqr7cjxixQTz4CqEaDWn968fMnuZ6UrU1XHTsPMgQ1KRcasu9ttDWYYaFyqjbni",
  "key27": "vneQf7FXwYRbydeVdwP62XigMoEGSqRCSXgXBE8JE1HLi1FJnBdTjieLdq9C56iwt1KLNFrEeYznjZSKJnAcGtp",
  "key28": "LhKdgzPKPmHnBzjDPmyfka3SoAq6Nuv5zxkeBJgZ7V47oppT3n4RFqy1VpmhKqNQJLE63skqguA2BZe2ekCYE7W",
  "key29": "3MDEf84MxNezTQb8CyVkddMiXK8mgeuQrVo18AFbPmFGskiqNp5fZPoqsVUrke5s6zMgGRen8u2AXA6zb7Msfimj",
  "key30": "22e3R2xGvDNjdGVqWK3eWYhAGxDdZByxLmjavEW5uTLCYYQWfUGHaVi966HLS7ihGoiKUuzWzfv5861P9ERvNubx",
  "key31": "5WCpPW4yMM54ua1ezwcQhmvQRUG85FUjKpCZr9epVP4JhAaE5yEijJNgXufpmmayiRfDprUThzBim8wUYtm6Sag7",
  "key32": "5C7KFPqi6PmNwZf5dm7fpQCTpt9JG9NatiG1VCnfehp6EiGm2QkqwLpFnvbnHio3dSdMKDxfDTzDZ7BDPVHVFeBe",
  "key33": "64qbUurjCmGwtdB35YaiJThMQWV4ExP9d7Xn9nSXG445jY4ZEF86sJcbsjgmmK8u54QuVV6mGN82wBqCFXgGNHzw",
  "key34": "19m1gXn4Liwxcpq4q6dsGPsDgF8UBFEz6otvsUWxmptteJY9Xj5ZXdZ9DQwV27PaYdoyy7d74N58amdz35foJBB",
  "key35": "4VGnY1Sq5bLZB2aaFZoFfF8aYWpeDm9KdujVmcYG9tbVBRxKwg3YpUUJasSfsPXEG9Fgo2eXsTbLBUDECPopBUne"
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
