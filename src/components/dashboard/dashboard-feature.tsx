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
    "4uk1Ngkc1M35rtXxAJHKYBmWf2u56KRoPb2xHC6jSBU9Lt8AFz9kpjccT9k9qVxVz1pPbdJcnc6dCwarYRy4p428"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2St6CcHNzk8PCywUM1RkZabnC6xRuowZWDHvUfaiasci1JikH1ZKMEVdGdwMkhr19hQSLtmujGMbQUrvsah9zmG6",
  "key1": "3wAiPsAzyiR5s6KCtWiVDpEnuBkH5LHyB5oXhSLeJbnnmqKDgs2joYHdHbMpTsfmgRgS1B7SvR8pUk9Ex2NbJCwx",
  "key2": "43u58zj4DPxVbdLu8yyuUMAHUAi2WLGX8DBBgQNdqvAau4HFcTvwDdtvQMAw9a2wDiqEekdY9Q4xaUf3edyw7qEi",
  "key3": "44T4irvdnQHKDePc3Pstpk6Y7FFMZurQJbeeJn7Vw1nhBfciKdEYSYEznJYUrz8XnknZykBUr4RNjMkwYDgc1nNL",
  "key4": "AaTi3QTgLHvDER8QVkaKmUti5oXEi6HV4F83yFNLc8PHeu6Nyi1nknFGnH3pekuiALG6tH63fQFhQ7YZqd5ZEQD",
  "key5": "4YMT2FRSncWuMGpF57c7CLYZYruFGtrwiq37Nq9EiYCsWXq2GPWP9NmxYF5FfmZwrwBNfPnouGCujFU4aMWnmDCZ",
  "key6": "5FSNR3EyfbriKWMvfYXpFeUyMaRjWpDzq2vocCjGVkeZgh8aeneWndDoLfXT9pwbi8eh31vqSsNbTjLinJxqwrnD",
  "key7": "37fQYAnyQCuY9e1tLjmR9dp3AjRRuN5UwtwwsD17L4Cf4TkE715jydwWYXEgLdQfHHvQMXo4NtqtUQrt88gEJ4UH",
  "key8": "48rLMR2HsTKqrHPzRvbC8Fgosznd2ZLJkpiatmKqPtXxpjqSUUexM7NRvZxVJA5KPi6GPgGEa4fxhNhzqbo53U8w",
  "key9": "4kfsAuYNYyRqr3ugYFbwLYv1XtjgcY7AP5BW22nTFjLXF8A8tZJiQoWC1K29ZacnxhgXwT6PUqXSUdXNvkXJQhaF",
  "key10": "2Xh96qbyxdvxecuHu6tEv2cGxkPDynF3iK69HY6GVCrGWoJVb79fDp9hjoZzTpXf92xKA8k75vCkJy2s6sYpf9aA",
  "key11": "4R5yUryhcVxCtkmnyK78JodquazkRzCQagowFTQrgJ8t8cqngJmnSroESoFfgVxYXLDQx9RfwF2Muyf2bKLMPUDd",
  "key12": "2FUtDAgerQq5aB9D8cpNDRpJdW8ANXDVxtTx9dEPaDG7Dca9UM4i6uHHinFCxqYPrbCjd1swTeZURFLk71Pw47Ko",
  "key13": "5zuJPKLC2jqBZgwkqNT3MhQhAUBdD4E2n5DAgDGRKwMLGBZtX2uWnSd1jnL3vWuLjuQPe1TxhndZ4UfMwAFqgBFF",
  "key14": "d177h6ck8yPY16k3amN8hmvNjhudzqFFraKS8NgEwuEMMGCAuC46jHP7DNeKiFzENDs485baY2gP8ngNYQBBzVa",
  "key15": "5JLYtPPadckf9YhCJRJKdVyYejCNRfqJeR6Mu5ffQs3gzYD6Eq9gPC8ogBgVkrxXfAYeA1jViSoW7abALKGScPgw",
  "key16": "3odHymDVkwXQVWMnF2GmwcGuPEVfqgpcrAvyVAUPqCGeXusALd11TU8Ge2D9ZZMyhGxekQ4AoyZv24PUNZaCjTAT",
  "key17": "3TUz6TqWdGMwZ5ArCb5sbXG5kPhCR2Psz4rivsr95h87KxmfNug12V3F3ARQbBiUSAV2WXbrSv4c7DvJUBuS9CtE",
  "key18": "2hjnowGCasev133AVKExat2o8p54sM1akcZVEFbmfNTquov5GuE9myrkt53aYMy79aVsYVdAbC4UyEL5zM3hEYfb",
  "key19": "5mp8A9R1N3sG7G6Tks4th7aApkxzVgwwmqN9Gqxquv4CpjqKxYY8xVabZScrd3pwYqKnhjqmA5dncJRBuB1xeakP",
  "key20": "cVopMrCwxswXFr7gZ45BrB4QCTRGjVGuAhcR5iXe66NZLk61Z27D6aUxnVJJm3CJFc7e6GLUmy8zGC2dhai5Pme",
  "key21": "4Wf51mq7i98NegX8ZyLHkjjA8VqucAHLzsVxoZD6LMGRXxsy9ymw4wSFQeRegx9ABQp4itL5tV7AycECH7ZFN8iT",
  "key22": "3hXhYHUf2kAUsnzVrKcpBzQ16vzCQ7hw36uf3UyurNAJcp8gxgkXH4nUk6meesGXurq2BzLGpFiQQo1geTYgfuWz",
  "key23": "2aattBbwcKMrxJESizqm63WBHd8RpgpsFLJ1xvX2Te5ymTRF5PXrdsruRkZLDQtdPoRihMVifBVLVcjyKC5NTQo7",
  "key24": "5ta2NuLhqkH4YNF1CyQcgge2zntEwTS16p9jdrdhJC9Rvs8BMR2rpBGRsnyJR7eEzMc5sXoUb2upfqb1XK1xbYmo",
  "key25": "5eSK25xqmmJ7dfrmJ5PYZuTP5nxxefzPiwiDU6g4K3xAXD6pXzrjcfMzn59i1V5GuJ48UeT3bHDXsmZ6HP6EYqjd",
  "key26": "28EidUqkkyLJaLyK1VkCN7gYJk3f5mAjd2NaPgZ2hoDJR1jf7R4qX5M19Px1tUwinZcCo66JuGb5dXDPtRG3BTmo",
  "key27": "25G5inAmBovkGhNrgwE5SCvWAdebDnGcL92YaC6ff7MyVW8sg1uCAEWjrfQ5jji3EcKfETxZ89BDwLifM4M3r5yo",
  "key28": "3WXNp5V7AoiESBfeZifxoHi8y7ULHwDDJstbgtvKkpFwf1cqM6H48CQ4AGJqYooynTLGLi1RkmjJA6gB4AKWwCt2",
  "key29": "3XGyzTkxv75GKjT5RmpuRdNUUxa6xfcMmamo4AdTLLVvqCNuUnER5jpm68zAMGKgohix56gqAKmsZERNM7Nt9ZDp",
  "key30": "28ERUKBxRbXzp3crwxgLSC6ggLhrvmQb6vKcK8we11Lp6fFaCkdGtd47uLHG6tYrtVrHxwvKygSdFTbrta7Xc1x4",
  "key31": "63ykAEPp9Ng7DEt2Kejo7RJ3gPsY9KY5LGAZ9SGdnxJw41PjsDDJhX6xmSuj4UxYspGUtZ9cvAas8HiSjMRW6vMQ",
  "key32": "5ahpnDN7YmuuQvBpxvR8sKnMmeDfdqAjprQs34ktYFEj4F92yt5TV11uZnCeiZ5XW46MfxqzqVYTBDo4C1cAeRpy",
  "key33": "5tKkNRRWHZuG5UKFNuerYuRESBxwsSvkDQJh8Q995ZAq1Trk3R25wANc5qfzLha5EgWbsfNNmrP2VBt7CUhJY96x",
  "key34": "22jzqQrjiaxCuvGEjfzx2udmL7iwftqq8aBiBes8wikmXRKa8vv6TtdtU4NyAdRperLkd8HdiXkZkpHgjYpZDVqM",
  "key35": "4DLKCWWA7GFi5XkjhJDYHUtVeHpAZLG8JNR1ij5RKbGH7ktbs8Two6ZG6qRiPZaJqBvo9zuR8dG4NTkXP878TtPi",
  "key36": "3hYiobiyWTkT8hMCMGg1pBF3SMfaEJr6rFX7yKskQFLn7w2UQg29o7ycGPbDwYzJbrNKwZ9TkcAyDxTkJJqEtyFh",
  "key37": "4tnYZ9oLUL1mjJR5tTJziK1o8ChzkgNSTN8v4PHK3jyRKVSJtfFunWgE5HBbdXQQktFH2cdyyShzHbebYDdTdjcC",
  "key38": "5FGSWFyCEag9mvDbQ4tk34sF6A1piyMjXsEarPDPYPsC9XVKXkESh5gwTTe4CudbyegzPwKLiReQ8ecdKgArBanM",
  "key39": "51vNmA8YNuUVtaREQ1b3gsPzKEpMGaZBJcCTQV8u6StyFFuFEmqBz3kqQphtYWHbtATW3D2iwwdKLpNr7JF2YQ1F",
  "key40": "4zTM95ksqP7CJJJcUJMrhZVVpKVmHpjaReUMri2HWX92R4RAN6NrWCotpGrsK2if3x42ViRXoBtkv5QBCwp6iumv",
  "key41": "u5DmJZ4BoUosQeL2rWhJqRbExXtDueiZWgwPfC857cTkdP8WbHYUVt96ZAe7BKc9PA1zrsuFh946Ph2bu3Jg95M",
  "key42": "3E6zgbeVZSSgz6PX2aa6mitZamzfGhDuUc73mf5pqtNansykFaZRDdL3caFE2LB2SvhHZzfRRozMBVDYnRunw6Kv",
  "key43": "5Bhov7fJ6422KTS4D2bqxeRsjWiGb5W7gjoyk3NMSyE6A5XQyFbGsQgyFpRaceqMRpEg3eu7Y86TzezQv2u6ENvN",
  "key44": "94siiFDk6ap4pmWmBEVFyUHegLWKryW2MrHazVyLLxJuAZ26NqQ64QoEi1iqp2NumLWeyYwpsqj6uxfEjudcvJe"
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
