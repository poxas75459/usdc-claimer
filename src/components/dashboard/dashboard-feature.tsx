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
    "31BUGQ5FqVmNHJfBSHsixuz6EH2F5uyXKBBi91oUtQdgBB7u6JRKhwBBSBoGSfT7D5McLgTvn3kEDTHse1bfpcY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NB1Y1Txdfmw7Z9T546R87sdCdxGjDFZLqvRuZYAPoFgmMgTcTPo5W4NWVAXHk5gD65x5mEAHCjAZVvjd5cW8DET",
  "key1": "3otbzyXeHjKpV8WpsFYhK8dXDdb5FZwTyktarjFqMYJGC2DLSDFXgf4mmRWWVCEnF7vkYFjGtU3szbedXQCoQdUo",
  "key2": "38K5DoAfEm274Zq2uNnqJcMkaDvp4bBJgqHfDmw6SSSUSJLCdJm88tAk4iE5ZVUaRvY4T7sjSopavyqjkWpRBdJE",
  "key3": "5u7aevaYKSs8zKn3b8aPKyPyWi7YXd3MA9KWDRjEYfQ2vwD3mvrmhZocwUWheVkwsaFN3ANrMnKCpw7CgcBG1CgB",
  "key4": "3JiFFR2iRtLHFzgpYyjp6VktZCiZT3vJYba2Gk3FobehwPKkEREJXRYrp7FRRFUxxvzd76fDDYSfaz6zt4v7dszm",
  "key5": "35pDwovM9dygQzdA9eDCh1epCRh842YaNh9ZAZgvNbBDhXV22binHoiuW6BRaTzDVHqCkxSR25FKKfTrHhNuQ3Jq",
  "key6": "58UeMzo3XHssoKwgtZs83aQ7SgUSrA44U9AuRy6qkDiGNQz3979oF7gkjxLxNbBHayVnMJ7ycAHYrQ5LUceipXnf",
  "key7": "5bnoF68qqbPzbtbphji7KRFFwjG2ZNnSWGPVBZraKKShCskGtLnvhaScTx39TnH5TJywWgWz62M2JgVhhC79rk2",
  "key8": "4r9DpAMUPZfnjWvYFNhxqgpY4ahMYLwiBUik9CcDhPNAmf8goWdF74uNaLd46nJrZJBacqaguBXiPKsR6ANBTSfM",
  "key9": "38Cv5zjbuAw6aqccUiV4vCqg4Cwe9P4BLDP8QpTYiqFqCWzmfnz1qtRpBLwxiPKqBVxA6XEQea15FjwB6GXWKcHP",
  "key10": "3zF4dDxAPpotiXqYvddk4HvCquh14Sr8EAMwNXbVrXbQoY88bw2gkG1NFtWs7CX814pxDESUgXAmvm6zM7PjCjMd",
  "key11": "4s3shxhScLSAt4wzVe8WnYJM427zGByqoqrjF6t98DkaWBNeZ6xgNcvqh8E2BZc5df6VPGrC4Yk3C8R42TaWVa6g",
  "key12": "f6WEPso3P2roVZnyywUcmPsr7Uap5eWVgAsz3TFuF7icMGc5CtU4nPgMg4PrWqZZTEMfXN3yvj6b28B9EPBkAQf",
  "key13": "3DsTcHFKGMtvFbC5BAorfv3jnBeRNFGhgy6betYLeVFVE7KwmztqPWtVhHEQffrMKT2ySmQMfhnGQPfi5reqB9hA",
  "key14": "5Tqptgo5RnUuRC1iP5EEsbCVKrCk98K5w3NpJmwhWnFanz61gFc1ctqTvZpwFykSAcQwgBuB36EfiMyABoZaz6c6",
  "key15": "5NR8ax4e2PiJVYeDNU55HMKayEGQxmShSdjrwkxggaRCkztVQzeypKLfWFq6MuKhgnBCUcCdHrJs5bB4cJ8SaDJN",
  "key16": "3j24hrLhpcXWjJJyD6F2mwWfoLJqo2sR7VDtc9NoG1TKt675e8qZK5sM1W4ocdUBX1J4YVZyoPzm9uHv7JH9Vzj3",
  "key17": "3D6bqoxPorMYfNjd8mKLMzzBFdkokhDZJaZVUVrP8KdEp7rzi98VPLvVaVioSRWzwRmqdzRjZDUGcP3H85VhuuMs",
  "key18": "44ybwZyAD6FvQB8kzUC7uyH6qgsAfyCGtGi1eurEFWhSRoFwUP7FiiRnV1y91V6pmY2PHuKdR8MJ9fjVuxjkec3j",
  "key19": "5ePbubw3qRA6hYaiKrE6ciPiPPCLwVRaZNiYKujXeAGkxeaS15ESRw9Q7HGRQPFZv6yizXxGr9uy8EmdxHiAfSH2",
  "key20": "2C577tmwSipVZxwmgu7ovv6GDerWTnVwHVCZA3MkCSrDM47mvwWCNVcgudc2D2w8TjhMmjaJKdvQRkjAzcFZxgxt",
  "key21": "5Z7y9EF8m48nnab1ndhe5hPqRs13idpn5sLoygtFPDq7rAPXj6583wtt14guVCQJKyJRB7oA7Ac2Zd3cKnDyuBnT",
  "key22": "29ZGi2TrGZF5YvwvVbJCsCPXrzrJNJAHatYszLvUC1bedmruYtssAW2BTtcvg11SHqUnXRkx6tgLs8MVszzK4BNK",
  "key23": "TPHVzXGUjribcdb8phpU2hnUa3AuEowUa6k89jRj9aQm5s1W9UXvbVtSFc27sD8sko33hR4DodC8yR1t5588wCD",
  "key24": "4UTgiMKsST8TVLEZvt5tW1VWBViBApxUBnb4QAnExc4Aqw3NZNsjJbEbXWowwwB8ozhsAe3f5MjtVdE2dU1KWafs",
  "key25": "3EMTBi29JJWRh5hafFHg7wLJeRY1JHjLzaeQUCeWA4TD3BVDcbm8NHKBQBiQTpT5NJdKrFvVS7gDLdHhgYoksnt1",
  "key26": "654TjDeayMRNQ5WXN6d3DDhnRUyURBGET4ez9iyMc5bHSYRNFXYfYNATKCyUErHv1kQkuBb24LNWojRGSnDLzHr3",
  "key27": "4SnaPanb31ht5LUs4RsReRsFPC5GjcEcW8eHv259oJWsLxQzcjVTr2JfK1qrh75bHooRcTqUSNpzKV2TJzvUa2F4",
  "key28": "5PTR5r7yexDu5o4NFnVmdH3gr4jwfjLwGcmf5FvipkjebbWR4QWo4TRD23wDcUq1E42zSD5C8DxBMNk5Q27z8q2w",
  "key29": "2mvbiVjwDHFZx55NetcQMFeMd1RUKhpFEnexY6WWTETJ6bgk8TmQG4wiiHQr3h7iFK4dfmdpXJoTd55YiiyUD9Ny",
  "key30": "3mhipNWCLeDwcWGxDyoqCVfDvkTXfW1HHLszdQtAqCqEiyC9B9nCWjsxwsHYQU3c72oGbhHborLCFoKZMAxU4jtK",
  "key31": "qxDPXASdGqN8ao3QixQyzNN19vXShpvn72jMEAfaJvhinwXn2cm17kpReQSQBPJSLdAjvAtQytCr9zLhoZySM8P",
  "key32": "We25n3WRpAjyEAMXoAqUFi6t3fp3584UhTvDVwLpVKLVzJn9nyRe4hjD1QmZ6GJ2CVNr16GtbeujYAjS77iWBBR",
  "key33": "2SNj7ESe6jZdH8ycW8EhjrwEvQuXGVmA1a6JMwsrC6pfvT2ey863NnUoHGYPYbuL14toAAckFHEswp2zYiRn6DNb",
  "key34": "2DbY4pz5MtRTRjg6bEavR3QUX1hksMre2GeLFqWp9NGV2MxckC49Bw2ZfjxoCciRtbXBTzydnuqoqMGdjKnFp21K",
  "key35": "2ecDXLdJLntF6DCUpxNSUWL9saCYqtYz8vkaA66crZSJ1wGPD9gSvh4m8ZMuGrmQdwiTmnyNmx94wvrL8DL4jubV",
  "key36": "5PkLWC4s6cXicosPaYbj2qjeVMTJ7ruyxwHSJUCPnSCxfHcqFQxtzhcXZEvsn8aAXmqNXTeXde1o6zumNQ8jVX2U",
  "key37": "4DzEEu4PEtJFaMSFxdqs5cZw7iKRsyqQUyaMcR6WkCEwcBXJyKWkPtYgHakGDbA5Aa37TdAm3cgF24pgzqybnwsE",
  "key38": "3DyAExE9rsJ6r3pjnzg4NcExZ1BhuBZMMMJniAwPyEsYXY5X3m6oGUBLuYgiwswom6JQkuz88gjAaHjgCMeoe7GG",
  "key39": "66sjhiSkEJv7y4Ag54UfDrnr84fg4wDpZ1UsLxpV4i4ptowMeuKnsgkZQGABpMpLeYs3yomeXd38SGjTszW55WUR",
  "key40": "5EUQoKR6gCNv5QAHiJjwGF1Typv3JWn5AkFGonhoGHXZhiJ5XWi9tUo1CqKHeiM6py9gfiK2xsbN6GRKQx3ANLzK",
  "key41": "3iLDMd2tcot5hRBLqg2Gh7wWo2SUnxa7uaq5uKvEQQSRkYLg4PM7t1qUkV4bFEwafFVVpZQFVx1V1HqZAznb4UGQ",
  "key42": "PjpY8epgHwptZtt4GPkzanxXf9gSxp6mxXA5by5AKwVGf48BkWrfUf3KLJy6BghTvkcB5sQy8gLwiY5W9DNJoKt"
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
