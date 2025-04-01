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
    "4BmqGvMskbDSeJ5vqcbFe7AjvB5LheodJ5wqedpQJG7F6rRbL9PQJgV4qgnj5sEADoqfpqifi4dog8sMgeevpjJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CN2FTEGtxqaHxNQYLXo4hGihUGnCkPnmyX3vdekXCeASAEHhrB2YokzeRkFBbVFUM4yh2aSEsSiaqSU6CTA8D7",
  "key1": "4178Rp9JZwtPRyA5jXv8jFBXTAqEoTzPKc6wD5kp6iNTdbicX4nMRZm8ufbtFMNYvC78uquk685uPUEmCWighYH4",
  "key2": "2x7Yjcf1k3sKqoYzHySq5nxncB8p4zvc9rKMF2LfEpZK4wzUfvaxsnccKg1SxwZPjQ3CFceVkoAuZoTfFh8uPL4W",
  "key3": "3pDkNd4Q7VxTMXQwJ8u3z5CGAnj8K3Yseed9JgGzhv52CA1CnCCXxPsP547nQNKnotaeQcm8fAdZBPM3A7xrHja9",
  "key4": "4WmPXjQPHdyfuRyox4dfngzAL6LZfMrPefHSxP1PHtmCGX5p8TxuCwACmPDqf9D3LFn2QbfXMF66hoMfu4t4hy9w",
  "key5": "4FnoL3cycVinDvr8ZHvPyQRRxBnkeL5QXAdpEMA2EBcxh2e6EZSXzkxFUAPWA71TQXug25eJWPdnLdeY1fQxbMvM",
  "key6": "2ys41WVQ7Pa5rvF4WrwW5qtvE3ncqGMnkKnUZ51n7h4DY59tuQeMMZhYbKqG3CATHB9QtJQXzqRpM4aKsnrNjkYh",
  "key7": "jcioWfs5VyWPxNsLzteVQXZHR7cLZwVWAgWqc6zmY34KvHi1bZwCvNKVcTLWe5BMhwFbm6A9MPribKGtE622Lsu",
  "key8": "EGUeYHhNYsFHN4WWcJ9AK9J1n8Zu4vGub3cHDAMMVLJ5sE8eYBUqHKeAJzUoCarqRjKUQ6XMeYzfdv8vYbVNRhB",
  "key9": "3LV5juTUzRPNmQqoLbVhVJcQjRWRoLmZtEabMjuPJpqJoQHos4u5zKaXzHz75qhXScYazQwz78VtHNbGpw2jVCQA",
  "key10": "2FLp4qDRJZFa9izsoU4Wc2SDvmh9hh2xf3QNRNs5A4iSiTu4uugJu7p7hhMRoyXWYVzsNVdvZ5dUWewERoVHhHQb",
  "key11": "2paBbNsGRdTnmuuTGaWJoekRVSdS8xKkVLrx8cqnek4haayrK7f3DKLRb5mESqv3LUUS9X68sjHudrp47ugLibAx",
  "key12": "qffUHTwk3wwqqZPyCuXEpGufj9eSTnRDePKVcsm1mpJ1U1FYHaARJpqKQnRjwRUgExh6tXdnsb3ExP9mh4Nm96z",
  "key13": "56h7BtyM6SvpjxvCEeYZsk8KwuVCWc8r1DUNenNAJo8JmZbK7ecBTapTqBd8wDubSDXkLmjnoYpfpRVkeBgLt2PX",
  "key14": "4WSiK5HD2AUzHictW64hex4kxscDCQFnvNxHh6S1nS7MG56Cp7GC1KTxqmJVCJbNkFXnSgk6s7fNu1CEWrxVmjeR",
  "key15": "4uirthRzwwCK97p5z2mscmsYZXexYJxhHZSNxZYFd7YFwhXWuTwzzgBmZNPGEAXrGH2X6mtEaKtTmXfDg9KQXbCQ",
  "key16": "5PUxNjv2GjoggvLEceMZN5LV38ucTVmwWzPVznjgDxq97PDDYVG1runjR8WshahvP8C9pMkrW8qCK15ivNpE5Bkc",
  "key17": "3wYEtPV3GRmet4PQiZnyvuQL2TYLozCSvmU8HvF1D7JkmfEkUzXtrn1uLdyQKvUEmu8yDQ9uMRcy89rH7fNYAd9j",
  "key18": "5GiA4BB51HDV7dxqSvaFaTV4FqfNWakCTQSCwXqKk9Mw1iPZ4xtMsYNXhmq9DaGV2rPEKpjhcXG68aWnpoKRkP8N",
  "key19": "2Gm2G6ZNVWG3AcSkthhSjfLfUUpMdpLjf6HksCGvH69Gj8hqtRnMTZRJdTK6T3NvWna7jKLG2ADuSJUUUds4mcQb",
  "key20": "3UBCMJUmRD3HoWcNEqC1a1K5bRg3eQ1iSqrNTDwAUTTAVQCKy4jDuLLteZAdWn6vVRsq5ho56JmaevVQBjw54Wqh",
  "key21": "4vYUcs5UY2mZHvezgqdmaG7rpDPyobVj7LmTRGfURyW4aYtPB3WozLTgcoVyAFTfwHo1tLWUjdBwfHZQ3o1iBMki",
  "key22": "4qsSaw9sTzw7sToWRPWHordykAwu3v6fiFWXeeVHyhPoESevYQfxcP9AM4Z4PseEwzjfLyTqPxJvXGJRYnpgNYsG",
  "key23": "HkyNK1ggDvp3RhAQVvhdPMYQ8mArF82hF6tMboBysncQ5bbq7gUchMbVXaFxryuqZ92VEtFhevNYR2812oUCAHb",
  "key24": "2tjiux4hQ4oNj7TXNdwJpLUhZzDP8wWnMXgcGEAL9XQut2Mjy2dNtjoEFLvHhYLSCDvoLUXRC61oWfgV7AnuJCTa",
  "key25": "32CNkKdd1fHnpeWf8HLTYzSpAGGUBnQ4jbX5gyuT3rTpxjBttxAUg7RNUXMxzK655NmBz7orinjmiD9jDDpFpaAm",
  "key26": "5vs698aotzmTRWkcna9uj8t74iFhSSQbXPzLQkuAPT1zWnGdFmkcVaZ1ULY15mgKhjW7VVghR9ChqoBnxo844YBp",
  "key27": "3Wjj2DVJ3t4tbPb4NnkPcg8fwczoJkDMbXoEmDBh6JbzVjP3Ye6cBgNeoDmwCibH3zLcM8Z58x5Mt2VG77guGvk8",
  "key28": "2nxrWUzHzc3prUSMzmDSyYGK2yDhPrSHpZHvRr9oJaPH3zY7VUtgH79VXGx73Qy7p7VjEjZzLB2T8boGotoSFdkM",
  "key29": "xmJQ48fvXVd9ebLJETXJk2zxf6LoFAn442bggUoSDTLgPR57dVzokq7cgbzWyp5GoqThNUM5CAyhbKpy83thcig",
  "key30": "5YEeuNdJSxxSsGHzrFNpUky7PUdcUYGUGKqmhso77DWEjv3bii5AnLMx1J52SWQChi3A1KnDaVSrXqb2AWJZNsY8",
  "key31": "4yP3Sgv17TNJcye1xv5E87e8RQSGvS3CMsbSGSa7o2ZTzWHxxuGn5Gm3RS7XGvzTFPKpnLkxFbZQ4YK4zxqYhTv4",
  "key32": "31yd28wQ7RdXzfKzTmbX6bBsojVp6hgMLvpqUfLa8SUkXYtHEerYznspeKzH7hC5sbU7PMqp9SA88CMjEmN45YPW",
  "key33": "4zMQggfm6Ex9mARJz9iZsdsqX47Rtar8MqMi5Hex6KJRAzgacSSG7wb6T2pK9w4UEfB3YWeSuRu8KH4fF4Uq9Vi9",
  "key34": "3s8MDtVVh2TDTS2pcBWgSX2jLXDp8gbm72KjeC7MDP3N7cVJQjTTw6YqLR9WCrPMinDx5FNmZwQrjbRyB3dLWRPN",
  "key35": "YaeDMdpnGvsH3Hc85wxEmuC5vRSDp9MSGtMwyZdX92XaswrQ5LZSFTfSRcD6sSeDoNDFpZLyGmU2hdgKH52narU",
  "key36": "4kdbtaxBkG6nCkhWRDLz8xnw3Ku2jVD1vBsSSCrxVYcf4qnfZjVA3pJBGbAVmMRbiQQ8QJed8obz2r6MExMJukL3",
  "key37": "2BdJHsXMSXSTjLhEpRvuaksUPGCjacuxDCMJYqmbPnMzTofbRWk613WLksVhcurABmngqT3dwuWX9TD656D9hPsy",
  "key38": "2d33BZDXAfPHwES7GVy4TtQ8wNcVPdFaDAR5oupRp48E7dyLJR6XHpUTTjgE9T7jj8V5vZD5At6U8zpZExzW4nPf",
  "key39": "3Dv5c5JFcjaoJoM1qk4FbPrboaSJvwhifBjcYW7LMheyFq6wMrPaamf1K6C9LhV6f7DToKofHSpojKPHU8iHuaBB",
  "key40": "51wR74Lut4Tefvq7Sy9AaVSFLLoKWN6NG3xKzJX8ybTVccPvrV9V3AYrZVNiKynGdT5DFQXRFowmigJbqdEZzfrV",
  "key41": "29i5tRtJy7YoviJXkbZQN6hwYrkESsTDKNNzfmZdaDymx8HZtwN2bVNCh9dNhfWUJPtMKzRkgUAGaN5VeB2HgzFF",
  "key42": "53zmQXQ227wmozS3gwcXSRa443MESHSv6HwCWfAYiRwdLnKwuA6Vpw9qLv64FStVybWYRBDVmZHfCMPYLHfTvA6T",
  "key43": "iya316UYPT176vwBWtTt9MzJLWK4pyxGPSm8RapUZUH4Nd97KKhXqKvL7KMXXVJfo1QZJStE5oMcEStPDad7kqC",
  "key44": "5znVckQbweNFNNVvaTyJBHXvZtSJvRKfecjaCQFaoLXfE73adur5GpAhm3QYK4ACHXb9tqV5u6FxKTpt17jWfy14",
  "key45": "5RnLNPg1jURYHwK8A3rNzWG7ovKguVkLqoWBsypZDYdBmr5d1Jp45ZAcSkgrS5TMV5TKhJvwpXEeJRtbcZo8dN3o"
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
