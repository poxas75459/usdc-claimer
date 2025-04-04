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
    "V7wLJ7mDYXtuKCkGmDLuF8EhC8qpvLWASmX1NsPM3FUPpmHfTh7TD28RESHZTdkUPWvFsvkZ9CrHYRbiqTy8xqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KUfu95gy8vHQG7YnMEonchaKGdtoUkPJiYypsB7E2ri9WvgnLuenUnp22DfyHV4LDzvv1yftZ5fMfv7etc1d5LZ",
  "key1": "2sURcCHYet9Xe48qF1PUJ7Vwtm5nrLLdxZ8kDCKJmvUAgbd7g7aYQFxcdroTWLW73J4RF6vaAqffvRqu46Q4irLB",
  "key2": "3jNnPRfNwVCvFAR9jqNw8xTMyDzH1PymizRwMNEWQcPdqsoQQWUGvxtnRXcRgntp9NoFYPhhPdfCy4LrXDEYy8ok",
  "key3": "AybtEe5o2yThTNE9JZnTTzNK8NFnppuAjBoZevvvdQyxUnaueiuiPsqtybsVwvqR5QQ4RG8YL7MaiLrzpmBzUZE",
  "key4": "JXLKZATKMZwspXUbg6XLTQuauTT5rsXNbNDr7t7Xgqszzz7TDaMdZBro6t6PKQAFppwh6q7ahTAXoCNap1wsB2N",
  "key5": "41MbJiDxaG9eAZoz3YtwjiqyAx5aPJdurLDmQkZ9L9UvTnaxRcAdnmCjjavjj3uxk8Qdv7tHCXkjUsQNhBhCFzkb",
  "key6": "3vcGU78kDTKkdHHUzh2TESX6szFPvXhhnMCvmTsmMtQ9KGhBxZbE32kRoEncMZgcqmJ9NhNkPLE27njef1N8xvAq",
  "key7": "5jwyjfNDmefdTFGD2GwTFcbpZfHUFz3JopmV2L138PCeXRKiQFDxnWKoRB1Qkem8EUTxRMmsx6SoPLTEQUqQRzMb",
  "key8": "5JEFEQ3MVrFDSw814vbmeR4Ejn3kJQ5wUHHZMm273dB9KreVqhwKV626V3bTnoV3FPiixXFwh6mqwMaRuQaYH8N3",
  "key9": "28uNYsBPmWqKyVsYpLtx27bgFSCTEwS3WTT7nzyUtroo3qGuQByTUibooJuJ8AG6QtPnZfWeTpAhzJF7Q3D2L3Bn",
  "key10": "3ZKeSGpu9UkQdVwBBEAoUTEaUsE1nMtaZG2HbciygqT41hWByoNza24VHxGTc41rWoDLNYFYrY6CAkeS9mzADfbb",
  "key11": "65qCynu1ogtUd5492unPLhgVQAvWDAChJT2vFvsbB4AjzQm9ad53uVTkb4EojdjXwV4ZqNRLDujuiB1djDoTeqsZ",
  "key12": "4iJ7xv2sRVRNVotyuEDR55VDojGCbqVQRECnfoersqM3SjbaLhu6ZGGkRStBPC9JsMSgk5Jtp9aPpm5Zo5TwYiub",
  "key13": "5oZhhhPbFjogmgzf3A4VSbxYAB3vhX2oJWZm3rF82jqKtWeNEaUTWgpniZZ43nWAoF4GvbwE1NMYARvXSwQgnQs9",
  "key14": "2oaHUKK16xe9A9EfTaM5WJPrRBSy9QVb9NnERwWUDmgqZfFjDb1VVdKE3YkVd9PtTM8MCN7CxBmaGCrp9ABL5PQe",
  "key15": "REr6gCNvfNga8DbVDmDfTNd5QR882j7cuC3LGL5pGWAgqxvQEqiVSndUsAtFbr6fBypG7L7b7zWKwqJb6HGH3XK",
  "key16": "5j89eksmVhcQmKVtQE5qcCb2Lcqxu2Uiv7WLJzR13y9n9G4KA2UVKrowj2czDz1ZxVsocumUWm6PEnqA5NdhnXLP",
  "key17": "4fnPjhLZkvEtznBjNBJ4UDGSLUaxSshuoLykfQSMDnq3V1QX1hHYC4UBm2Rg3UCBgvRHUUvjN6HKvVcYEPwByFhY",
  "key18": "5frM7NbZT5E6XtqMMkjf4emqRGuL6w5puEqPPvcgyMWxSkvpcsPcxFvuvgXe4NYSHMRM5iy75kZR7WHgM4pbYjY4",
  "key19": "n4E9Wts5noYVJwmUreCnXC7EfZLeuJnfKHts5kwTQpS1qijaUhcbYaP7RedLd3GwPZALJAhmq5jyPVVAjSJpXX2",
  "key20": "2DGKapLRXJHW1Ya1GfoAKH4LmipxxMc1mQNDveJ5q9P9LnYtBZenkv8WGJyyUhw7HqazPjSicZSUvHNFrxVM6sop",
  "key21": "4BwjfHQFcEQNM9inf6k18vtA1VjZE7Z8Vv6qEgmw3axHdjbdLF6C8arJDVTumyMrN73QY8a2JxzDbeqtx19BSdPZ",
  "key22": "5mF3vZcCzBEVgShDEJ3QJxfVxbHMYsujdiejRmV7VTpoLPocNcUz14qqddWHUx8Z8ugaiwZ2PjoXisxpUPqevoLU",
  "key23": "2r8UjWojjjgDsXB4BCxtvT5ogoGLaWHq16Zdm8o7kKp9vzogt5Lcrvrk8fZ1doS3hAVtH7vLxVdwcTcYavLX8GWJ",
  "key24": "3eBWMNYXx7PQv6pkHr9mBePCQMa21srA3ABXKhNzT4qq6uyhJcAEkGKYcaeAbE87Qqa5couMX2YKdSe95ZCzP73D",
  "key25": "3uPL7wTvkAmi2J8nFQh4j49FFXnrct9AQfj2twfPF53Wg43hXrvrvb9euo66YXvA1Yr13SWnimFtdTE1CcxmHSPz",
  "key26": "3qooQZMj4KHPoX1WHJvFBAexiSqiWSbNWMmXCCVbUg7PcvHHMWoCD2XmCoDGuG45VURLUT47x8seHAiSsZTStBJK",
  "key27": "39B8rEFVzuiqQY4qRL7smA8buHLvKzhETfegrAJaESmiY2WkCPAyAQDzqDW7cQYqgS5GeHK43W5beg87eVDa3p79",
  "key28": "2jgA9ZK8vaTFidjzzwSnkxZk7SM9dfckr8Yczr8wzb3PvjCLjAwnRccw4MP3PWCCRqCWfGyA2WesURZCsRYBcGpz",
  "key29": "5pvov2piw21Q2GBYAAjU9SjruhdsTg3Aj2LNhSfbBWXbDQrk5NezDDnTwt6fCQVzBZ4rcFE3sAL3EpkCNYdRdMij",
  "key30": "3osoceTeKiEccEiCXRtvh46sF4ukVBqxyC1rybdYQF5qMxZpEG9XWMGvFQVn4DmgUK7Rnk8YLmCX8pksvXCKGQxL",
  "key31": "4qm4hgSMf12xB7MUKmcdAZ8LcbmpXKByHa2kWNRfQ2D5HkwiDH32WTr33R9DU5JNV2qKiYMWJ876gdMHj7V9X8Lx",
  "key32": "4fPZHFsQJAo7jQ8WNWy2pgt32AzD4ciZyBKzganqWfRk5aQUbKR3AoQ1SbfjXPyce1p6aKJmyercqSzTepoHijsT",
  "key33": "3iCbvs8sTCCmLa9ruPuGTTtJpQX1Mbenqs4nf4gW4GcJShxS6zhyrs5EremDs1x2NRarqDvQ4KHAevvwD8RA69H4",
  "key34": "3qZcpZtmqPVsd1WUA2rVDA5SqxXkGZJsr5poDDP4H4zPtj32X5SQsRsHpFP6Kof7nVkuAVpZw3Hgyg5QmZnSxLfb",
  "key35": "376zXSQZz11t34N6Ta6MHkGPQRaBaToH9cjfMc7oYiKc1vh6nMChbRgYaaXAzipUXriM6NaGDH57vH2NZif7R2dj",
  "key36": "3N23otizqTHnVDu4osFknL7hdw927oBroYmVtUbtk69xaf1huqxr1G55s7U2ymcPeYcTNfJCmAgPmqB1z8mhSR3U",
  "key37": "2N5RbahqgtU92GFTLgkJG5tmrhcJDFh9z8C8pNkntixdw69FtP3ne84wzJCreEkQXri34Ekg5fkSR6jmTXauBB2E",
  "key38": "48vUK5RsxgJCGiVf7K3ce3WxFD3SQcQFCYdnCBBG25uenCfV8hsHu5Wk3JfnbrofWBbFQbq8vCsQeCJQRXCVrjuh",
  "key39": "5nF6XALQbEvgF2o6CceTVvR5t7n8dQEEuzDPjKHMveXjWgyRdHgnBApBEY5KAEZbBiSC3VRrGYY6421zwtEr8vgS",
  "key40": "3C8ZPZDcC21P5sTTYRzhu3qkRP7uqDdRmLM6MpGmv3uyGbfTmHHkTujCFcMxHEtmtQiaEX68fYHaCoALSATDNizB",
  "key41": "3CZBakYRaDJcr5sWcP4b6hhC61Q3JxzDCqfACUJs26ceKaXpmUZVs21odSaEWPXMd5qwej3zPM7CSeqAeAJvt6kw",
  "key42": "jf7nfbf4rwPGzUhV1WkYVoXXMVH3QK6sG9KDxvR5auhvdMp1f6x5JvZpATVPJfKj7LELp7nES8oSePGZcNZCRCj",
  "key43": "5RKtRz8VtjcvTsDGjDRtTV1yhhg3tsoKbKoLzhyyGLnWX8v5f4KHWk3Mg45Dt2WuU6PJJefPyUjHZgCmMvH5Rkfy",
  "key44": "5BDE2Mh5AAbbHL8WBjJY9gWKcbGHWYymKjPpxB9baQBWVisfwEPe1Z3L3cszg73qvpfNzWziZ45vC7qqEbi7Fn1i",
  "key45": "io8VbGgbqa9BJ3Nq1jbvbaovckHMNBAhAfRFou3hDEUaGSUrRyg5DzgPrpATCBpUR7JWwXThb17TXks57wZnkFm",
  "key46": "5oEZzum7AeLKofcVgcE9Qai3uJsps3DPaJqNTr2PrhuoArmkKxHiQC9cp7oJBzYgosjni8afwdSDo7YnHufWwM8k",
  "key47": "4raLbeaZap2ycwEEhdV5YZgjYziKXc7NmqiWWXUrLXJfKf9f3AV4NaoaKQnSfvg5LDzMVfiZfnbZUkaLiFtGzJzx",
  "key48": "3iVSib9KZuWhUuUvnSQSjZtPo94EMSbuW1Bc6YksnvPUCodBCuUYCRdwPG1JxJv9V4oBdD6E5JRwJPS6XicVdKp1"
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
