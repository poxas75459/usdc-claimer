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
    "5LkKWS9gP511cJRvx5BcackJMsKbjf6dMAQNs68h1rybGA3GYPLo8SBm8QNo5ZQWAVoNMxpkuguNjyqhpY3XxWUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9psvsmfAxNjSM7SkGu7RrJrPpAiNkbhreLWGFhdEVnpou8pjAw2K74oaU6qCbE98xzwBycGczwttPjJm6pw2MY",
  "key1": "3wcrawjP1oZhaYeaURrP6TCdMLHyHjM4u9JfS9nTQ5eqpWcfGmjpuuCcHKRaKoS8bgosNCb4e2UNX1YdtWsr2JHm",
  "key2": "5D94VJZmJFYYG77qnYG4Qomfagsmkr5Jk73iSpp9vFqRYfb9EahdL5FYTuwuQjQAgiph9khq6fBgeKKxFEYoRGkH",
  "key3": "4nEfHBSiGiTaA3FuUvibYjxpSyuWFe7uRPqpSML9DZSsm5dpWdZqck7ndGhWPscXULwhDH5n4vm7sf8GuQ6e7Q7X",
  "key4": "ZZjyneMpmnFw6xR21guPAt45eeWqnoKxXVAcP36GR9jKUbiWuMZEVWBp6mc5ZX8XmT8fdk4rBUAhy6UVaFnyHXr",
  "key5": "5Xgjn145DVX844xMrfYhxsV14m6sAHzugMBWGrMztp2sFBJMjXUEXf5wTpQULgT8cF8wugMYzAyMEErs4mg6kdBJ",
  "key6": "4tFnq4HtFfCaW5QL81fXPZRUKuHHNiFuCdgsLiANiR5RFf95TmMMJTXWQ9SKL3FUs8wk9SA555nCgwkM5obsVh8B",
  "key7": "3nA5qq82S8z1whTi1boE6hNM2GXeNoHKxDZcRPoghJREydPtwunZ2VPwv1TmcUAh6Zns2EteNBvQ7NgH7bMTEWpH",
  "key8": "2hBaim3B7Rdxn51DxWfeSeBCJKyJVE51WXGtSd2TKXiHJk8tzqryra7q6vvzbb3R6LvTCm4ySewWafNHP3rHLSLS",
  "key9": "5vPiRBV5SjMvDUgcaPZ8AmaUk2xwS596Q51fgj8ukFurRx3JQNNFTuewQLU6XWikPWYbDDGeWNcoSnxG2jbgoXim",
  "key10": "5PSUhnUoZ56W83UdmfNbLsRQc8a6ToZrXAyVaYGQLbuCx9Vgx4XFhfv9o4Dnzyg1HRSJu9Z1Wb5XznH1jxaqQXgZ",
  "key11": "2rQydMthQKcXbswjgArUwGK5bEKXnbj1w15TzhdimX6cebkiVQESx66fvoAnZrwJinenHVPgY548ezUQFuRYnp7i",
  "key12": "2u7tuNe8A5mzviZmtxMZpe1qjvZxRzxqAGz64jDsad3PiP9oLkhNjkGACx2nF7GMBjcUT1mMEYQT1vCZttfxw4Hp",
  "key13": "2FjLcVmFGGaqwYmcqgLJp5hMbPjBBxHvkDQzV81U8tKEnEfzXYZ1gYTSLZboeY9HtACicR4V1LnuoUZ5ALcJEqbq",
  "key14": "4iRwdq9RMdMyjsNT8cikDHGiS8zqmdva8cuorffRzS2igum9Tp6rvLWxFrqDb5LGy7QzRz33epTt5XiudoHPFk9B",
  "key15": "4wsaUBkgqpPdxiwHZy7udCC9tcruzBZmmqsUji6zvP2DS1TCabc25ZRSBF2izf2upXTxrEQehgnQyfQzCMaCgrNP",
  "key16": "2tpcuFyVtNbfUkDWPozkB3mb4BZFabzWPmR4kzptzPYvKgnCvw9ZAjiGZYDnma88qcALVbxABvVAm9o37PU4Dk9R",
  "key17": "3SUdwctrUZEukgtS7Ugi32aq1Z1w6K6tKY4eh8cbQ7gQutjqtkUg75z3kmNRjpz9oEX39LowsXVCpZNEx6HwRH2J",
  "key18": "2idsyXFnZspTWqzSHmaBiuPaDxsNHsXx3BWEnAx8dHFKtyGxMYXobCWLGaHE8y99WddZvpG9A73NtGkNXZ7TQ3D1",
  "key19": "4qFWfkoUTrbTc6zhRw3zcHaXGuSpmCPWnoRKvfmzDGE2c1RgBNRMgFiJ4NDGgn9J398cJZR5FUdz3oTc9Tx2GJWL",
  "key20": "4Wxc8XofksWt39NZPLjevdz6ae9SZB36F41Wa8o8RQs9KPVJnK8Pobwv5c1HeKZxw6DK4d281jHxnvAWgw1s1yQb",
  "key21": "3JcFgULzSmDLTrwYe6Vag21cnv3AZJs1rnM7XmKtpiS4jwNBGU9D4CuXLJ5H4opyrVJftwnUjdNu2FPHPQn5DWgY",
  "key22": "3TkkuqHXh5WsqAvjiCERRSdZY9HDzAQXG88sf8DHpf5D1KaKUZcs3YujRtv5cMQJbt436ywDMpFx2DNTrvpr4Msp",
  "key23": "5cL8LmHciV4W8BFxx59qHdqVmYX5YhFZwTrCEpeLfKK99eKc4jErrRLzYdZncNXqHntHjTwjakDbF5HZC3PcsMwT",
  "key24": "29qbxWaNnYK7GjRAEKHfsKtpsZddt2TqFxcN3MqKKX2Sv6H5uZGwBVy2fngZYjRxbjd5dFRqAQGDBCokZd6Erfbp",
  "key25": "DDwJJjHrN2bk7n6gjsqqaTtdk8z8YogzAFgeVLHkkhWWGH8vaWqaoXAhTBAxXvwv7PNkEwtUHSzWLCTTpWs75Sm",
  "key26": "5GK69pYb4JCvyNk6rmZ7ys5JsbCaVFoieLJP9zDdoJQefL9iiyC9b5kFXymmdvYHSrAjQvSCt1Z6PesfU6DH7zVn",
  "key27": "wbjRGspZQ13wTitPCBHAdHdCLmzeaVLb95ynrucMojwnAPiDwNgcPPLE4kDBvSJ3aqAqkGBG7VMtd8kEtg3anvx",
  "key28": "2StgxJjkyW9hg4vwEXYjVvqw4NqiZo1jcLRHN9oRDFZ4jePD5QLZM77HxG4P59vJaVvfe1JdhSCrgWS4pC4L62Fs",
  "key29": "5BEGzGMNj6FHaYunvpBaG39rsfg22ErZXmZZrmr4Wk9hKxH9TMdYj63ewb3uPzjo83n1TqGn4KC66JbJntRrT9aK",
  "key30": "vbjyNsvBvSLpj8dc2eotjr2ZesFUe9g192PqusXtsGybijHRY6m5NZHycfDLnKntXKKE5EmhGrhUxfxVgB2fKzi"
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
