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
    "5N7Wjk5ktebj748UbUs66bCxFVrRPRHG84K9rDUaf9Hsz8R88ahi2uD2RgzDCew4FfphCUG1u7iyq94BibJuDvVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9RMwJULi7sQhYtXWbKraKC48QZkwhedvETWgkGZSDrzSzqqo17fdKweuVi7YxXCiYM99N7H1pd4TxmtoCTABYhj",
  "key1": "4LtWPmmJD3MbX8ivJQ2jT4Rs5AJ8B8bztSrXQyexaoGcP8KaAWwjvHYVCRBMPLEvghCRSS1KJqH5KEiCHu9Wmfoz",
  "key2": "5KjmuMSiBvNdssh5CR3tyyECBWbmSk18iLTr5VBigrDNax6pbVJe9oKfQo2FBQmHTmacNT8w857xXuZUwDXzHU3L",
  "key3": "2YFBNZkEuWmHMDq6kkCfAK4DmwYZVDAdk8nq7kq9Auz59ibXksdRwJqwaF5xhHHANGVHydn2HfQrtqqKTcABLhjw",
  "key4": "S4haQof8Sq5uMkZRmqqM3UhRZB11dHsjtcDhCN1C9XF1hpaHjYbGVVKv673JASnCX813Ec6zaAkFsfdincqwqWW",
  "key5": "4NZPu8Xynfb794fxYyxy4ULZCMQhynTBvE3aUURJMMdreL5MZYbSDhDvCJFWKmD4s1KMd7syaaAYVDHmQpejCZCT",
  "key6": "5ujhAeUW7BYh2WXi2p3j5jTtreJVXKBy7W4YTa8nzamqmyXewX3Urq9sm6HQGwSugdvpXwh14ad2UbuT4N4EjpZC",
  "key7": "K6DLEzcKEQahCGx7YH6YjA3Yz5GcSMnfC6ndfwtZRDL7YHPVH8tGkVH48d9fbqeWVtdwpzuxKVEoNBifY2HdyHK",
  "key8": "56X8tx6mDPa363dmYzVWyU2zNZD9DWNNEZxPgA1mypUC9KTrDPFW5BUNUG6egtS5LP5Yt6dsGpNGQ83RB7tmyxDp",
  "key9": "4u7PM5mKigJACFpztLdbBXGCgDH44FMJXEWe7z41A971X1sjKNyzEU5MbqmqCL73fFa9capncg7MTm3amXww7xed",
  "key10": "2E66Pk8TxNFkQN4zcjmmDpcR5BiPyJMTGyfypLc9JvesJEv4NrKeh6cD8FdytL36NbHDpZ7FJT6cfCuPgP8FbqNd",
  "key11": "43FXfUU8wdpbgeywDpZNrWBeXZBud9bEKyebzUcPWcZUP22WhehSMj2iQ1DisVyBdH4KwfftKFxQRRADwNG1kb2b",
  "key12": "43iCqoxn7HyJR7JJzqGZpiHVDFjhzedq7HorsWzPK8TSkus1gWMPWUHA4xyibhuFZPJ1gnRsLFvRa4txTGLeiRpE",
  "key13": "35zqLydSTKZvv3BXqpa8jPUwtcZFkd2Er3Zx8vakbmRzg7fX9eQS4xNxBLPN68pw15DNPG2xyRhxQeyQaTu1EJV6",
  "key14": "55DvjP2w43cHQvd19iaAAZq26XeGKE4DDVmEYFbynfT8cyfAqTbLp5TKdz2BdK5B5rjSethJLjndNjVRhmtPd9G2",
  "key15": "3NBqLXtkcRKML6oWsVGdCc4yuwSHXq5fzWtKdXFGiRfseSCK5zPSm9bS1nzYDSuw2QimM53Laa5bn9HX4kKW4wdQ",
  "key16": "5FbFUXokyYD6LgBJLvf8yo371WW6L1zLpt2jDiMB8vnEmvYfRGFuwPiR5qSVwxv5BDqnb5An4KDXKigxRjq8aYw9",
  "key17": "4tkmELLmSviNfFjtwVahJe1kC7g6MpeAQcVLzDHxajgh1nv7UMw9kr8wWUDbcWDn1QrUitfy1DLx9Rt6mvQSKoxX",
  "key18": "2aoCDAjJ9je7mKJhoqj45y4YVXijcE2vUVbGN78dHTJbNMBYMe2nuCFURUNaSzHSuM58gS67zUuoVjkcpwvVMpbq",
  "key19": "4wo9AHd12Fa5GzsjmgXMZK2nCVreFw9ffCwTxgugqbbUGzqNxixbFpAr7TZKfkjtQ1qsyAk5yPvUAqArqqKeSDaw",
  "key20": "4kKZewQ2JpeFVNi3ypPn378LBjktBBMWB6JxMsV3skdRdLi2y3aQXMUEotqDEztZ9uLf7hZtZ7h84C41t1QPcRnE",
  "key21": "64n28hKQJDk7718x94PFHAzgSMcFRZLN8JHfLnK4J9bJ7S4D5YWQoGg3KSr5xNjhRK8UgMXB3JQLgVXaYg4TTDjx",
  "key22": "29fSHKewF4HBpjxLJu8RSwM1eJGpTjB5FB6vrqaCT7oJQLYLBEKspNz23yLdDA2trR3qah9gN56ddG6FTwH3m63k",
  "key23": "5TX2NEdTXq1TUhfCGrQkLD38Cy9R9X8j9owhD4mH9TcrFq7sFvtMAyWgq7pNfrfbuVxmf1c21YxgxfjRd6v92Rd6",
  "key24": "3tpNeEamYUCJVbLzvsjaJuWtS1FB4huxBsAh8PsWamLin2v9Gk1Dg4ER4s1qVm1dzYQD35qCVUuLPBLYKzi3pTcN",
  "key25": "5b9hqa2MaWFrWkt9vDKQ9qTGDoKU9P3GUrsX4M9WtbvSkLJx1iaWBeUUTvkdPAcs4w6aif7xQKtodF1cprSBt3rj",
  "key26": "34dHNMyg6ph7nqTyPECP7VLJ4x7UT2WzYUiZqozUEouPBmNWM1qN8n4HBy1tmbWfViMhGBMeVbLjoGd8g2n11SHa",
  "key27": "39KhURJ5CTCr6nFR8AP25hbxbajzuoatYsmw5YcofunpkWun9NYd4wo31khJB86X39UgLDyuA54ju72whjtrB8gA",
  "key28": "4SqJWJKPzWaimZKodBcjxVbMvpHNPcTBQbihNkanAgb9kfiGPXcGZJMeMcLSKVfPGs7sLKsGu2vy9311W75o9pSe",
  "key29": "3JvnmcG4KHsunLybCP5Ej4JYJxZiKa4p4btePxoJKZ97qfNUu3tZNQ8TqfNcxR8BdN5qyYjYKKPxi8e3QMmceQgv",
  "key30": "44ETkDjUVwzxmCYkW9rg6hLEzwbAiWZpZPHZNarB27XMAnh3JCyKuTDU7384rRTedtLReWhMQ8AE4Etc1GVwEdUQ",
  "key31": "34RcAePbewJGDg1URwc71ST5y6DTjzYgx59BScWrNywqkyNfAqVxttn2Z1oXNutFn83tiVH3vdNe47ZtpgETHD2Y",
  "key32": "TK3WSqtZqRWAfWbaNX1MiYWgrEPi9icirt2PTUdjAN9R8wTE2Gsq4naSX6iRno7XM1UERi4AcoFjBEYT6suhyag",
  "key33": "QLkHTcQWvDtPc2zm1ycNLW3YcmCGCw1zUqWv4YLxE2772UhdFa76FstWXU5DyUAzG4uPfGSyvfJVVP96hUK3puk",
  "key34": "5dd246FgtPqoKG3BkYfGK2yZrE5aMEw9XFasic979AdC4qzwUMyK3hNdKMLPKhdv1uohrPtwNRgFYGTY6v45midt",
  "key35": "QSHpEBTVQVx45QCJUiE1pF8cy3MhtBZyoBZye3FHh8xZjFhZuahBTjHVBZMpUTsmBHc21FdfeznSj58HT8cdtC4",
  "key36": "2Cx9uzUhKYfwYRtkYoAafv2j2SqozXom27reHuuu2HSkiGZ7Xe38xN23KppwX2jnUTWCcChqFfRJ3nUQwDmKTQve",
  "key37": "23JJu3oLtPpSHKi1Dz9LGScGXgEsb1jMVkxze6thHems89K1CsB5V9a76EieYcLekiK8pUqmJ17rJ7orwNdtMNd9",
  "key38": "5CvykCzpH29AmDGkbLUsLYKxmzffdt4dxwRuVc338kmsRWUgn38crTxQ1qnNg8PsZVjmqt7qH2tzurSkyBpdAdsr",
  "key39": "65coUy53wvxsnKfyHbhaKMXKKVCWcQCQncgu4eETEpTSA5HtdM7KTCQSmYmxfmFtujvykSNSWaQUJEmuBWr2pRDq"
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
