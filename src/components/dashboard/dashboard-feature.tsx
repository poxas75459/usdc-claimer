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
    "21kwjLMGLW5AhcJky8oHnkW76XZaaZcSyk3SC7Qjngw4EQKoK6KncFYkZWm84VwdgzTm3rvRXRFtrRjWQYds8Wzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5VzxpjCEBXVv19tfvgAWVahn5ZCGRS6EXzQEjNTNaKzj6p7pKnxpWypEbHUZZH2wFDMib87cYstRvptKTrKSX9",
  "key1": "pqqN7JD2Em5jMuCYn1Y8LSHRrWL3tLkqEsPNXiGJgurPvRTvdxSVMkTBPLwxQdMvrMHE6eTL24Sn6hihgtbxjBC",
  "key2": "4qEsZaLFTN36r4kaoRt83BeGSKyQuzGgYSkjkGoxijHV3TR9x159zup7q2fpFBoPC2oim5QEuuy9W3HYwDW2Tvy1",
  "key3": "2DLwQFBPxhdMiMBLx7uoDb2FLjXF7uieAU8wdS7M8Xf7seQY2KscAp7AqvfRKeWNYwcyv1TCR8Dp8iG13599bLC8",
  "key4": "4v9gQ1YVMVFK69ZQ2L2Exp1Uv77nNg9RFqW41Gbyx5kKCG2U1s8WRfbx9SVLWsPzVsvuW4DevVV8B9JBF9jJkJfM",
  "key5": "4wdFUF3kdAgZ8JD5jkP6hcgPwKNHweFmQouB63cJn8TEkPxY9CSAu6WnaJrxmH26121yhfDnFUj5TkhtYqvFFXMz",
  "key6": "5sBLLdoA2cgqkPmVryjv6HtGd78DFzNY4pGzUpD5xGApEzzmy1NGZA4kZA4m6SRG4RAZJ5es29eZaLjMTB8tpTbh",
  "key7": "MSsThymGMRP49w4UPWHhTg4avSuCgwyQ9En4iJZWcn3X5Rsbv4dJUfJtmLiGGdFc5H5G1ve69ZVKaXUy7BcdzXH",
  "key8": "5YtukRHU1iB3vD2xjjAtQKnfm376nLNE34YwcJsrndscJoM93rwS3Qb66eF8VAPgr5CkE9dnMQExh2rtbgmVAS3j",
  "key9": "53ibV9bKNRnJGdLQuZ2L5HG4tMNWqMuwFPiv8WvT9Nknoi1GCVGQdc7z9bYhzHLtfZ8hWcZfcczCNHmuipFPqaBF",
  "key10": "2G5UfYc3vgLTUAWJo7SPiuKKcBrogsVuFJpNcXd7XgBmd9X21a8EEo8hex7ymkfh1D7bQPBu8GaDNKpMfR1Rc8r",
  "key11": "eLDHYQsnXvb9jcZxVN7wKZL1uz27aUkWk21Wz5wiVLNTFbuo7EkNgyEkT4RqBUao9SSjYYiMbLAd1ps1qWwyfqS",
  "key12": "4hE5aTjaAEoi3P2r3ZFZG9gWwYbbMs3mZts5QHyq8gpJMXXMeou49BBXxim4vnPw7BRooBmrUKsawsDS73o21Gb5",
  "key13": "3qD6q8m2jD5RphddNYez1Kfcnsjk4PcGKzfSYf1njLjMBeMT4KNvNrsPAuvySJBkdPLHxr8CZ3HtZrPv1YrE9y1",
  "key14": "5NWhyuH9BmFtK4vGj3grWKtJfZsAy3i1xjbYtBCdE9zTzJbKsw2gZyjHFCt5aMVxBu1Beh6qjdmpbw3sudfj4k6s",
  "key15": "5poMNdW8dr2BgpqCmiobJnruZANAJMmhM6JFCgbBEASzxLpmnjkhutTeniXKUEJZjq7Vp4Kf1nExZk6PC8qVQqjb",
  "key16": "qREhErmuqFzeu5U8PZHsCXoHKCwdpkpaur3VzFNgxjFuocLr3hmuPuSk6AZWvxaYyZqe75bY7sSyWHTXj3fyfFV",
  "key17": "5yTP6cC6ovGbh4p27edtHtPvmngAqZaFZqLu8GwnYqPAGkqFqJnsQQnxSfbmC98QsZvavkb8LV4vLYNkPwm6GgDv",
  "key18": "5bMYtZziKJpCA75dM9eDd5YHZ41Nn9sNWZCyxnrHUzZdwKdgJbHhDrNWz3BwV83dxEX82XNUjT64x5Ki7F5amjZo",
  "key19": "3vLcYuWGchSXiuURmKc4Wb25dPgjWr4TjnX99gMYgJPfm6RMUspep5EeB5jeVCwK2KyQkivxaHej5YD5kxLscNFj",
  "key20": "2QLGDmzVAsQKDExnMpAExFAwegcpJWiELHVRtXqJXm5PGBasssZdJnsvJkQu2chK9GJFQEeqGZow5qTM1XCMyQEv",
  "key21": "2KU45VobNkqhGDGFmcJHmuhwGvg6KDp377CxmzJNUxy1Ni3ZBPmCdCDJJWVv4tEf2qkmxQ8EiPvj6yuo5FPFZCiq",
  "key22": "FYF1q23XTsNt8uFJ79ki7jLT2JXBrJjPFrK5fqbh36pnSXx47VVrpXdT7jY6A22FCrkpD185FoNHYRxYvyUG3Bo",
  "key23": "2n17ft4JitAdEsUZ5qa7GbkYmH8ZB86Dast6PFBap3ZpZYPhFfXXVXnx3zHmzq57SF7xoimXGrmP3pZuXoYzJbry",
  "key24": "5zgjS43fsjkgXpaF91oAZv37SbzpJNddJMj3ecutbL7FWF6rqZufp6UcxhWaHATNTe4e4jpzUE2zmN5aYiiQkFmf",
  "key25": "azCLM3QgFbWSwByapdwNg6YEtkxLNLqMHmmJvpSRb25PGMM75A6QcX5YTzFTaoWGzQwDKXgLsPZ4WdNBMeukMkC",
  "key26": "4dRiUxsGAWWj8joHzTH3JymvKjt5y1MTLEx55E5LkPXKEGMWXcKpAaPqHyJtVWsNDVEWSCHQjYPAxgatkNPPUYP7",
  "key27": "65SAwPPHVZfPteS44GVbkv9eYm7qJf3nPuUCPWwwq7RKoygihPrhQidRwfuqdUSwRZtXYy2jKZ1LPjdmMEPkn1du",
  "key28": "5yyfmHHi2HEqFLzeLLWBZG1cYod3ekz5CWBHgEEUgAKHTsYqi9yJN7ss9qDyoVYst51SJihhoiJBdCefEk9QkcMF",
  "key29": "2PR1xH863c9tXo3EgFmS1YpvqaTZh2NcVNdqjwhnsqzfrFL4oHpymhrKCAzgc5yoFiYJRdRXdzP84SeUbGeww5td",
  "key30": "52dgBpTnucou6Sk4xsHmqSBDpaRs78X8SK6S2sRivt5sr3tqXiPnnXitq6dSTwr5PsN25JNSDXsRHsVuQx2hmfbU",
  "key31": "4jx5KGDD1E3BFUPPRS9sVFNsTtDXRsEHdhdV7aMXsvNUqtirkeP6BjqsF8tPpncSr36nBoS1A7BosMw7w2nvUxyA",
  "key32": "3jLU8GoafeMEM7irrw5tkFTKDUJZJEmMHjBbkShnLCoK9oD7e8Etcx9reTLNV9CrYUnk5v4pEbwQtyoGE4Hm8s6v",
  "key33": "4JgQmQPW3rfdb4RiBq1wizrHWDLQcbLucwHK7BBbDLso3KkoSGwEdDZKxsB3nhoJoY9fjiVgEydJRZaRzcwUNmsc",
  "key34": "4PR94AB1YBRMQkB7LbWYCk4YfA67Qw2oxrWwS9ySytKczQf5DS93UdmG99MirHiJSqsua1M1ze8B4yVC3y7voMo8",
  "key35": "3v89xPs9EoBJaQue6YC7Cxu9yjXgGxXeR5QpWfx2AQcfq8WoVVQ6PyUuScyB6QprdoFb2U6tTMyC956ZPyY7NKKk",
  "key36": "2d4XZEWBBemXQeAZKMWeW8M6rSHBMSU1ZKqvFHcUEzUoyM8h1jB5XDCKhNYVpjwuqvQfsf1MmaAkVzYA8CR6D6TB",
  "key37": "2jsrjYfLfxP4qstMd7QkCHxYFNA4zxFazhMf3yqHsySLq4hYjt4FgsHuKTAhw5h2denkUMnrQ8muE5q9JgQeyp5v"
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
