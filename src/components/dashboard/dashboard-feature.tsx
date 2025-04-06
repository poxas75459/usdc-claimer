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
    "2KzXficAXzsXwd89GoDa7YxBn66gRmKFzXWETAuf3WVbxiQvqfr4Rt8jqmm8BKCBkDxXJAWzSKdvEFj81mpQ28B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PUPf1kzxTZpWa8rYFEYbk18FLdYj9xpeg1Wap6mpHrVtnczaBdr56v6AFweQ9DCtPrb84L2mJUH3cHQ9idjrCm5",
  "key1": "37cbpowkjz9qh2dE4yWyyAfNgFP9iFEfHise5scypajLW8KUUBq1G4tguc4nQ4YzU9HHmjBiGNiABvCyUCrZym8G",
  "key2": "2deXe3e7w1b48ixSiQ3rPv25zUCCqog1ooqGh1j2oYCvzyuhAdG9pPTwXhSQt4Gt4eSUBBpRQ6fmrVd7wKggecCZ",
  "key3": "67CLhVGtdLneJTqj3QiUjezY5B2X5zSx5jNFiH4F4sW4dLxth5BBTNNoUyfwAMAmfCNotb6WhuGRNdSJFc2eJBXH",
  "key4": "2YQrC6hb8mieMyHsob5dBPjT6MVEEW5em4AFQ793cQmTpSquGYb3pgsbKthaC5Y6qXDVzQQdKg8LDxxxCD3cHF5r",
  "key5": "4p8wDBuMMGzPGTHpUaDhgBJKm7mzE6JBHsxZHFhPS71PSKNpQPUKuTi6NcBe9yhW2yWABie1KgQ4xC3BCbQZbwBS",
  "key6": "3Pv7KjBZ2Jy6omU7qcJcbTvYRD9C86V7xKzGjir62aNA28xELaHkMzoEAD2nydJ2zuGSfPYnn64yF3LNiEv546bw",
  "key7": "5VMe1Cw6MHtiWAr3FT7eFM5BVWzJLUsnND1tGU4e8hYevu3UDrcGo2PNcCi141x4jqoauDvVM3soDvPKNPeDEM5t",
  "key8": "3bw7Ai61S18JWQpBAnXARcn3YMyH1bTHLjJNnc5h3n5jRbidutVGEoGt5iQaGjVw9G1vaZLVz3ndHUPbxzhxMjg9",
  "key9": "58HXTLSazdv8QvDayiQsNUyNMwStw77d8bPpZTVrzUtpYtZQU5tuAzFjMM2dbyqd5qknyxmPj7SNUNaCEancp5Qw",
  "key10": "3izuyDrC41RnJ7ksibtJ7JUZHnC3J1fu1jtvEryNpMN8bpwtx6Mj3RJDxmRecLmo4Co1tPnyoHVSe5syfDuRqEsK",
  "key11": "5P7QAQgEQLmvzPdBJxyFEgJQxZabuu6deKKHc8tmYDg2Ki3boSsc43YkejzFQWrhGeHM2pktYpWAs79p4BNJsdHX",
  "key12": "5McxQgDqgMbPpAxczHbdf9Hqbs7WUMjMvrD3vtAiVwDEFEnvKhMAQefBs5o7yC1Do6CWrN5J9K6Vj13PGi1Vrpvk",
  "key13": "5KngkmBmXYm4eQNRJMhZpgiycbNGSKZk6btqCyuiFGuNjK3zTx5eJUzdA8mFrrxDDd1w9b4Adm9CNhDhStCQeE9t",
  "key14": "3ANdUC3KuTLkqbDXKxVTT4LvXiRBRbew4hHTr1vGQgmB5GNswYFxhs8QdvtDjWww5YiekE9MtzxVWiZxL5nkeKZw",
  "key15": "4AS9fL61P9zwuqcgKtShKmMX4i3NEKnNqeLyGHUdNN2zgTzqwLRXcB8zgvSA6eUVM9YkePoDdih42Uj1a6xraVxr",
  "key16": "4k8bPtXjt45XdTdE1jCfBmRpmWydgCKHY1HPR1gJegwe6nMqn5nkpwDoc2F2tASN4yx4cNwJsaBde42HD6BhygRd",
  "key17": "B738s5uGZUM12KfyWMFaFG9uziRaWEUhkpLJo6TFGrDRCTUp7hD1EH8aXCdxeDUxPEjFTpqat7ZHP4FW4fDiGpp",
  "key18": "42XNDPXxgwSeMvCnDXkgQb5Gwrgs3FPXf3CNE6BmQemsTGaWSwDqUwgu7SzAEmegHsfUMHruamfqQLhvfXzK5MW3",
  "key19": "2twQAHi6zDjTPjez7uhsZaHDMvmn13KVH9igU6ZLbys95jEoSjPHHJF7wo6qk4Rt4cTCrkxqMouqnAbnEBJCFopw",
  "key20": "3hW5zxQoU67mgyUJ77TB5rxjpC9ZGZBy4u3ZXtHxRHmH4zHW2Nj8e9KjihDxwQU94GqJ1r31Jryu2mnkAiLxCXzp",
  "key21": "8nnLz9innjAAUzzqz154JedrLy3HgAi8MaU3Gt7dRQ2NQEbqTLRaqoWj98jtAu4gASroCcKU5GcbGfuNeohexbj",
  "key22": "2WceyCJu3ZJCcuoBCLvwDUt3EbmXzGi1eMqt9BVQYXFgb6peRRJxQQR5A4SjaQyGtKmV1JhhUapFwodTkNcDfJGY",
  "key23": "5VCdgUGojaGgmn93BbbtCSxPUPVMqGPUfZQvagGNSt6pUnVPgXcD5YZGxQ3gF9fMJ2YGcpY1B9WuWzaSyNXzZaUC",
  "key24": "61nNCqF1L7pqorf7HWtJ1JuKWgV2GPo9cMRHXSYmViUqd8q3yRzN14cKrSSjwZnofSyQ6uxneo1N5oGFvsLEt7NY",
  "key25": "5bayFvCQyELtxAybpjr4JZbH4jdy8oH8R5FXtprEw7hncscyFxbqKMebeZfvjwHW3NuD73BcG2mu8cCdCjhhFPxW",
  "key26": "3i3TYac6DFQWYCE8srb5bxs5kkRnkuiAUKUJAAuwb1vJXqUyG5hRpfF7vG7kk8fmMT5aixjv5NquCSTZsfqeQYjx",
  "key27": "3xvqsYvntWsVZHAoLjR3WwGKiE6T9ohc2GQhuTSWBcArznuz4NJ8xHmtf4vv5SpVbwR1z2HKWfmLkwimrL1vXMde",
  "key28": "4cDBu4vbybKXAv5aHkJ6uZo6cpaKwNMty4JMeafGnm1T89BR77LsYLiUTaUB237o5SnBLwfKSie21etwVfbbEkr",
  "key29": "5aXBnTZYSBt8Yj1CM3x2CtQtjGxi9aVQQL2fYSsSskDdd5wfdw6afncgr7qow8E3rHiv7iw2rnDkjsRdi4bnvtgw",
  "key30": "3pnjrwHUMfNAqMNRsDVXvW6g9qcJXaGeXqUE1iVHurehpPrxSRshteBQiCmNbmRGcLLBb7npy1uWmPBa1smx8qG3",
  "key31": "38uDNdEbGfNoxRR2bFQthhdTu4bxwXcaM4UNrQkrsFaj4FakupGKCQd8j8NkLUWMRWUsQy5UVtkBiRJ3TtF8koWs",
  "key32": "298zckaXmPP5Wn9onzUXqKu47CPsgoh4rgDAmGZG57angX9s5wrj8JdMjjgwehkyc7azHBcB8PwsvUhpS3PvfPHs",
  "key33": "2yWp2HJBnkw8zn6FywCaZBodyvRkMAV5NA15fH11zAAeiMKySV16mar4YdswZUUPpiUMWToHEbLCHYMRGsvhDRng",
  "key34": "xtZF4juvFdjBrMzQ4hHSkGWtm3YakRRwgMBqidZ2sim1girB18bTsp2MHrcmuxgUzgKL14MP7Hm2hJVDkcFAUV8",
  "key35": "vnBXeb14uqiYHd3EC44VQ9h5SwPhUBAQnY57sYNMfzc2qvCPWjLdhchyLjapveNPghGsSB154hWsei94pKjFAJB",
  "key36": "4CqWvgn8uzcvJAKWBwYoEmkRFGJAqMHHtiVZLEjFGHRNttnVcThwbeWQmrZXLWnFR84TVUgqgDSH9WThoZYvnEnC",
  "key37": "5fPX27KG8UuTJHdW4UnBLA9oiaDhirzmDeRh8b9KDibP1TJw1pZDBeWWpm1njTM9fz5TzyKZqmiPvYhdqNZmpuid",
  "key38": "5HRfQ56RHf71DBKRwi4pgjfryYrdViXkwvqyMBDkxF3YZCDDs1dhKdZHK4woqcCVFRqfrBG64S6GDpXvgp3uPkVM",
  "key39": "5k8WryfJRyQcdrGrKgKKNwXsvXPevxCBxRwYNcVPjgtUog7Y6LMkQXcNg2uvXuo6TpzxB9HwPHo89awaKSZMAVQH",
  "key40": "2y13C2v6nwJfHpeKYNDEtoCVgTKBdEFZ3Put6rChfJ1GevggqaxU9i4qBNJHLBTRgNj6LNLYpvweCdcrmYjPKpT7",
  "key41": "72zkDYMEqn1U62QQyfcjVQeSXp4THy5rv86Pc9JVARwXaAxfRMuhM2LRm875ekc1zRATcw15CTWfUbGzLwy3WiE",
  "key42": "qK8Zf5PFQPxsgwut6pRz6ouMxFep27s4YTUfwvhYTGxE69CNQ1HiDdTZEno6uexsymfEQThZiDfi9ZwrZG15CXV",
  "key43": "4Mp9MiVXRaz6QNqVQ2jsaAK4gXkCzKtgbnHdPyVoJtFPRvn4HSBgD6HytpJzke52gDEUqs3t5afoVf6TJfUUChpw",
  "key44": "3t6DQKJYuJWBryDPigVHqRfC9YjkHQUJQATnfCec52kiVd46Bbr1AUFFrE24zQJZCLUfX8C1UDHdYnsAgT1zz2CL",
  "key45": "5MGwjhicxg2AZHNYZBAvhvKRK9dY1BXLxqaRQ6RXhQbVTFRxUSVm8SGpu7cTg5AT96BtEgwo3pYm7b6AXQftEAop",
  "key46": "4Aaq47nSortR6mXrK9i3Q9d3766TxcqNDfBozzxMWTnVuDP2aY3MuePCAMcQcdGRn84xCuYv86UUgwD3ZXkF82Ey",
  "key47": "391YRM2yWmkpbD3V7dGWjTpEjXCFextyUkFAWK9t3UjDBtfJRMmRPLHBtfuc3TyBLaYx8Jjmm3ci51fTsVgw73sX",
  "key48": "4jShL3f3C92wgtK8QHzHBu3RuvFaP84sr7NDDwUrtsHpckmjwt73733xwWnkc3GW3YKtcfzL5DLVB6eGucsZKDJK"
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
