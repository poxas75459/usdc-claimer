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
    "4tax6H6u3n2UmfpAejRoZHpCuGgkhCcNMiDyN1YmXsAVXeacnYNZeE9c5enijUnrgmnHHXK1GCoDPEBV7KbCQknU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3861XJ8SQWirmJFoKfpZjpie83f9TCoDQLNJTVApnQJsmAx6zW9jGqvSBNXz7NNtn8QyVDY3SYCzPv7KR4iYEq9q",
  "key1": "Um9KpGjMdNxsAM3WEavc1hxtE8kvmbpzSprDGJjv9Cx8ykfaYLAu2ZWDUosen7ivG2byKbwUQc5P7RvX8WD2Ahc",
  "key2": "2ERNou6o1hoXVMmiDhCQ7KaB2FPQ4ZpMQAuPQKSXEjhDEt6chhr13GYMkR2jzBE1bSVmDsLf6aKCccaTLh8jqF4S",
  "key3": "28qpyXEGg6JkJveSRgdgtxecpiFDnmEzjrBKfSCgfpkXfFhSJaHP48b8wFkTCkUbYo4dcrJnTdQ6NyYxMY3oGkpy",
  "key4": "5WhNWfBaQBrgdC4PmbZ83McHht2xwAjkbzvmWKSA5RCULXX6V7duHirKczXsrjKEpP1vbHoZc2Bj51dpYrg4vMjS",
  "key5": "4wvbjmNtSz8d7bRL7XMVx7mu1T85Goda6ypZZ6XnL4nTJiYtaCE1ZSe58U94U2gU7WsDvWF9Saw7j8aTfnD2ZrxU",
  "key6": "Q8Wu1FG4WGY3ERHgo3pGvg9YLPX4pQoLSSdRDmK4TDjohsFFm9wEQuxDgWiQzH1UPf8oGdb3ajQMxdzkftbAyXZ",
  "key7": "Nxq3DqX4ZZBEo2yENninVfwUEB3hw5ZLKDEQxdhWcTGuUPNCNJdm2VkDE2g47zwnwbKHwP1kvVWtnHtRwa19ahH",
  "key8": "67RNKzWLAH9Eq8yZNqgwJ3P2tJEfeNTk7UmyTpXD3tiSgKsfo2NLvRCULgosQhjKwnSBU58e1tidrPqzLZ26Zhsi",
  "key9": "58ayMApS2UXrk11xjg3tAEqwnsCN36SDeSWaVBEn5JVVewRd9YzPqr7f4C7wZ5KMaRZv3Ncj6ZspYYVVSip61DzX",
  "key10": "39U6FUNPLiEYB5SSHuNVm6sL3sy6mFwrtJQDYwHEt9BMQeL65WFzrWqeTyU5vzYukZXaFGgVGQvSjwzhS4VooCxg",
  "key11": "VojpfkZKTgU7Uon3BMc3H1bHacMxEXqGZnuuR28wycZSAgrwmiuKL5DHX5E2jMwZz3YgfRb3YkjSAbqZ4ee6bx3",
  "key12": "5vLnFxR6muuvpF3ZucPHd2Z7niD1NWXg9fXVWzmYuTxdnNSxwBMFjbftEjxZG2YfLkeYGh1G2qrP1ZxA6yr8zSde",
  "key13": "2tJVY3qJSofEhc7kUdVVGzCdsHtWLFMUv47gDmCmnM1W7B2DjC5eaWZ8Sa5a6eWLVCTd7es4wEFd3ChooqXANMR5",
  "key14": "GnXAvLbJyx5whhQdGEWpC2Yj5x5SVBAPet2BK8tJhVpUHCft157wQ6cb8xQbZZ99bF4NawkUxTipZUugVYeaAoJ",
  "key15": "2PLdZaCFdE7R1GKUQ1HGwHRm2NX96WfYWSTgxXi1CxTpSP4zWmNdfqduezsHi3Mro9mxFhgD3ghGbHLcaAsNFHn",
  "key16": "4hWydYbXcYdQPPuxQkYB8bKNpFSaypT5vNR4Y486gTCkw1knmCF7Wcgo7X4nSvp2UGAEwGfc1NSdLaxeZ64hB2qi",
  "key17": "4tpRKRz4HPYZpYRPj6MB2D3YAxfpGu3G8zSUKRRSU6pGi7Mwkwcd3moNTKx1Cvwn29nfwPxt7vw17wVyFSFXQp17",
  "key18": "3aF74rEbEhjo6ZJXnwr4NdMuH69X8qJBkxTW4hK2eH8NpH5qQf988QDNLiWDtRfobBB2JqohF2K3Khpopta5YKU5",
  "key19": "5BuiXoAJzrJyCrGbxcP66piBUrzMG8gUUUUU3KE53YcwUszYWsWriGMeRwoQyFefYKm81BQLfL9Ds1ij3vc21Vae",
  "key20": "4qBQjv23QTWXj7f97XagNDLJ9yrG2V3qho8fLSDMSut8gsSMVbc5QpUFDBTTU3FMekcYt5aDMxCHdUv3Xfoafrh1",
  "key21": "3GWmTz6a6FE9ysyN8mMkiUFbPs3HUrARd85sCkxSuXKKrj6WfqbZnks2JBKpppHsoRLywAygS4jpA7RaHCFu65nE",
  "key22": "32CX26dq49MybD4BNrd1DZNkVkFxvzMbs16wQ5hMxDrxXRPQ4fRezeWQGqKdgJHRaUkQAYJVrvVHesvJabKziYgv",
  "key23": "3QSSMuihww9wxzSvAMFMB82PgM8VZWZKBxSwhbeF8UFYZgEJymSiBQaULNs9zCWPMBMRNyaTrWy5E1YuPbbCCZYo",
  "key24": "43fRMgwouqJKbQQb8vRJVmxxE3QbT3udz58p7XuQrfuZwhWizX9CWUEVZsvtG75S6nJJLLC9WRJBW21J3vccYYyb",
  "key25": "4B9WWiL3oH9zKeqzmyaLyyv6JKLp5w4YNJjEGpCFqBNr7b72okBTC4shcajeaPSriMfdAka2Sco2su8wkiRYT2u4",
  "key26": "5KZeuRKHK5XjDdQbVn6zARR39nrLZHPENZYumYUU9Ay9mNdV5SML5T3wB3BuxrkvqpXyxSpZLhxQm2s4kGNqFMKL",
  "key27": "3x2UxyVyno8U2hZbSwstJXXDNTbLhxknCZh8mwM4jSpzmKYAosXrvjEcBy9ovL41jHsAxiazaoQxuQjJQEk3PPDm",
  "key28": "3z2F3rdvE92bmYKJBesiPSUgLWEimpz1UynMDhP7LNSggVHmwaAiWWq1JSugg2qhvZdyyGs7YmF8otEtPpuyKR1a",
  "key29": "581BEgb7kweC1HGLEo6PeoCRGuy7sJG3ZfkDbqVFhHZgv2fkwqud6cKhPmwVKVosncQQ7wP6J1j9dh8jaKWQUHL7",
  "key30": "4aqXwpev1RZJ3nCgkLr9352Gcqcwbt6XHoow1mfGoJFJTPUjpuZCp9XpwWv86ABcSTe7auRoHhXL5cSX2cmQuZgq",
  "key31": "5DDT6sGCz6AyT31VhqWajCWUcmj6D9VJiGfj8z77CN4dW9YFSBTTT8sz4wXmtGBTjFP2B8XrzqaV8wdDQ7QVgY3i",
  "key32": "3MVp8CxoqfqDFXX5bSCALtoSqmyFd4yR56SNwy31EaDXWHctyStWKxj9v451hQJ2HJ49nuWVRFEfp1L3kx1QfHez",
  "key33": "4u5HXD7D4XWmDQaxdCXTZMzBS3vT4UGKzA1zm4oaa1nDzfFxj1jUNfuSkz31oyJBswDNsVrPvrtoER55JwfZNGjp",
  "key34": "4xBig4gJ7Yvp715HeMn9Y3FMMnvMSxjeFD6aZrWQ44co5bRKpXoiuWS74qAhjyvXDZkA9h4e1choiNYvK3vG1bEQ",
  "key35": "5A2Co5EfyM19LzzNws4M2xJVDNth86sCDaE6yY7YAv6afnQMT2jUMvCAJZUEEZfyqH9edFatSYMMvzCeHwAUMUEs",
  "key36": "5G5P1DoZQ1zgxxYKmwagqRZaa6ME9Ugmq8aFCjwzo7DFvtXLi4sg9jBnUco8Poxyg5fmyYp5B12tvzXkdpsYmDrV",
  "key37": "5sWyZ86M6ZpoAADYxB6YUs1BfCYR13cE55YkqbNyAGLQJzNCbmUy6HMg4MtZGG8YDD5M7XtZoph5qsaeNHrNyEn",
  "key38": "2ZfszTHKMbn2Y7jadG29LcxM6d4R4GkvTjm9raLg7ur9qrqLSL6f3jwttKuaXSMEPUznwgGZhARdXyuSqmMZHE3q"
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
