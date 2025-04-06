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
    "5oLjw4W4R5F1s44LsPNn1W1coPKfXTtfwPqdh9SViewt7X2wQLQ3G1EiR5A7o6vxjNCe9tqEyr9v68T9M98F5vLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6ShD87T3c8mzF94j18e3nMnCEh8Gu8FwzHppw4DMV4guoH6CPCpJGMg8jTvKeRCTukEGHCZ1u1AEF1xkQr564E",
  "key1": "4gPTWJFSsZDtYjgGGcJqgDbxPceEmLSLxTqoqrZm8nSPK2ZcfYBKxFRCDgsFvaMkQqc4mXaaSGz3ncXGauFykYaJ",
  "key2": "28SybVWPzkEzd6F5ME5C29pcCWbxxUsvr5sPYtZapNQKaseTXQv4gfLti41efm9ED3g8ukuQj4ta4qJZorUXxFHW",
  "key3": "3T9mv3NELc57vgk2KFGjT8XYwbkXyuL5WhSVDt7Ps13KZeTktKjAAsUFtyJ3YbqvE33S3eytNu3qaEgzCE5AjKLN",
  "key4": "zc8XA1yKYJ7yUfhXwHcV89YGTX2Gw6dRTECc7fNr9yAcJPveZkJxMiqmDkqyioNQahtsPW86PARNwWtd94rKkeJ",
  "key5": "212roptYRW6UResDiami9vtJ86SE4oKL4dHEzVUZiAjkYZi8gbm9oiyCNiYcxUPmdd8yBRYXKEs8wZfoFL6oShuQ",
  "key6": "21MHKnuHWanCeDNyZcij4qs9dHuy8YWDk2qp7VbfbxxHj9GqnGjvn38mm1qsJ5eD45sfiLvMfp8E1EE3BGcxaVek",
  "key7": "1V5tavzdqkS9WrFMWHbeVBndDXTNDPc1vCiN2xqzopXmKkwmNV8oe1HmRzMrbLougYqArE44R2QFpJNYVLgF5iQ",
  "key8": "35b7Dxee9jHVZU6ouY9afLgPAka9NwL9smbXnmn9NvdJQL8ZmM2wSyU4M98oHhDafYb5Jc9smMSDJm1N7znfuQXT",
  "key9": "4u1k8QXckv4NEvE7T7HekLrr8p56vf47mCBMdofoNeHjtjURZP89N6xgJL4AMgheS9Tq6EkG95Ud685A3Uv6S9cG",
  "key10": "3CsLmKDY8YpwthP9jTUUtVSiw1SwQfwzFniHZZhhMn7dFtGDJA2gAJq71BxKxWywhq2xrNtLkAtNFcukWiGpZYTh",
  "key11": "4itgcbePXvnawYCriRoqW5wXk7UtWEKCWWxKWeRBFFdUHpB9uJVdo4NWN5eNns7fZmp2sG2YZRJmBVLsw1KZYU5v",
  "key12": "2sy6tcm29YQnd44fcw3g6xwo18uajSJU3tCX3FjzhYXP7KZBDp74ztyEww4nvUX32B41cKh8F5EGN6qnZ8H47h5Y",
  "key13": "3bmpAak2GqhTBLaBEdn8JsKKn46dGBWz4EicHcPmo7bgNt6Xm8UZ8rBgfNX897zjco6VbHiye2dAWs1o1VyFC464",
  "key14": "5dkn8uk35pMf4j2RpjUd4hCsqSRVWvUT1eevyCEk3bG5UKEgJvwa91QFH9X5sWfXUXiRXCAqidXEkMTPQpkvvh8",
  "key15": "5FWHUDPPQJiaZWEiEKhCQuyM7XAxRE9tQCZgE4dr9JNtJKrkThhnDXiLkckHaXn3qxcKx4avdnQ2EJJ56rDG7gXk",
  "key16": "26k5kh83bUhRDCUAtCvWxQQiBYkdkAm3jQCTjz2iG3iN71God9JyEVKmFvt7NQLovTnuTU3Ns5JVHazSpFtZGX9K",
  "key17": "5S3CQC5sHAYbqb5JMk9WmnB6N5rFDP5LewbE3t7xyUNMFGhYQXy9aK3daEQtNgSsKatNFk7iJCNMoAtRtpkzxFNW",
  "key18": "51WoJL3QAvyxmRpQem516fKR67dZvUYpKTp7p88oC2vuKjVAy63NzjVwLDrsveQbiEuma4oKU6Vc4urRaYVcXqsS",
  "key19": "UzVuzDhXcLkniALtwRcpyaoZ9TDgSrG2hatAMezHFgeQzyf5MYkzFEs1YSuEwxPLa9goxbkcvoJDK3ovzGBgoaW",
  "key20": "33EXzSEWQqt75oQV1To3t8bJsLB7eGxqEhwHFc5vCDmvWdUUyWmJC5xK4RPZRcT51GeSjiYN5QZFFAPJ5Sx2XTL4",
  "key21": "5TWVihVwPnEs2fSWx6KyFzxYWsGVjCA2mXqJBBSKfguUUq6AePz1mXfyQYEKwpEeyrCcBJkytKHGpUWGZChZzEva",
  "key22": "4nobDgtyS5hmg727giVU3ufg6ZmSe81xr7WYw3N6UBREiPWQBr8dJkX1ZXfNQNJrCavKpa7s1Ub8uF67Day2Sn8",
  "key23": "4fBy246DNsnqBDvv2X74VrPndtpfQN8o8uYYJUHSUjA1mtreVxT7Vn8TScsxQkU5xnSLaxo4TQ1ASLG1XDZRWLVa",
  "key24": "5hj9CFWe9xWkEx1FCszFYeUiBVKdZD5qrhSBviq3z8bZoZMN2eGYo2yvozmRR3i3ytTCqkuUfebBmStuNQt4jDgq",
  "key25": "3dwBsQfob8SskHbroBdArhR2HTVG68aqhvg7vUoUe3eC3Yhow8MhFPcDw5iV9zZ1mJK37W5CoMNX8eBWt9TxYWLT",
  "key26": "4aYud8M9qhEeicZUZP8oSH7eoRQ4JuHMRRwwFyTf6EmBTStfCrpbbThNiRNNVGc7go1iuTrYq1kMTmB44JmfC7oz",
  "key27": "269UiMtLcHFbkweagAKDFAfHCvvXfL1Q6ShkZy86DPhpgWE9u5kynLEkbNDxZuG2qgNfL4W5aWZWxvrvVBbNure1",
  "key28": "55TYJJXXa1jLWRR2eLxDHnHeWruFUXyPtMpuGNRt61fx3pKR2syor3PHSzgQaHavbmY6pcn25vrJ9kGaedSyiuJW",
  "key29": "4KJedcGQNcCnviBNy1PMqpvAaK9kJPtYACLdAudpLHF4HKUiSoRctQUECmApTeMPdSGMKMJNQKNokUVR9EiTkxge",
  "key30": "2s213DYSnBbZRZyA8SV9vBtV772tLNvjaASr7d7X4SnHGAGMyyafQvv3L1NWZi7Q7S4iFuF5tU8xZEVwPn8BvJqc",
  "key31": "3v1ZEGtQnbEfTSBwBiPAYHah6FXnKTCwEeWU9KwjDhSUSdL9BnhA3WxdYHQ4sEtxhLw2upcDKNCYorBVz3odYCab",
  "key32": "32qH9ESMqZDABkzNAsv7nCdtRsBjzXoDRr1rY668v1ggdYuzueMzua38yyDRFNhFnJx848VVoNc7grxQi25cfs9g",
  "key33": "2rBu31nBQJmjkTpR5SWJhqzaqA3n1QZAYh3Xbbg2usu6LmTKJsU2CYxcQWBsZZkp3DyZ6bpwXHiVhYWd7Tuy1Hoh"
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
