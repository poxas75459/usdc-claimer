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
    "EgTuM7MuNvS26CoWZaAkptasbzTYxpFw32Xvi6BfgWewNThWtzdP4DNDk1p3hAU5NkGcCYcbit2tYWXAeZJPGoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuVGxiUxvzLMssWevy3mdgQDtirMvsY7vWEsa2NMWDaKHcDGnP3HXff4LqXM3LcunpKL5QT7hHG3zxWieyiN42x",
  "key1": "ayX44ivbb7Di45TdjsAdaJfkd3PpUmLhR9A437qyfkMBrgxDbu1ha1Y7SsZwYen8jWS1SM3JUBGeo2D61Xqso5a",
  "key2": "5V5aWdHpP4BZ8LnrKdF3z7sJZ362zwRQTojzphgSwg1p8ZZjKpGev1x5YcsCeCJLczd1KUq3PuBVnGaSVeRHiRBx",
  "key3": "52XrQbbmhE8kbV7Vv7jvxevpTiiNZzkuV153MTVUy62yTWaCotevtATXU8qAxVYsfLqNcXtgbnxEDDMWQ6pfJ6cA",
  "key4": "S7GXKTxDReSVTDMeHWtVd5cktBy6Tzgv3feZ3FEdRzxVxdLE6HTJakewZMbCGfbHfFV5Qadg69c1cadtwA9q9Ku",
  "key5": "56G5rgwFJLew7Eyj5sVXbXXvaWxXHXx8QbABbPWqDpGvmVpcAB3QZ9fMA6zZNGD8T9Yn2UUEeiudibcwkAUP35U9",
  "key6": "2ixC3wir1fYXHfFdcAuaRbemEH5YbPziorQHJaBWV56DSH7oZu6Z9JHELkNQDQ14em1v9Vkd7eU69GQceB3NJaGR",
  "key7": "3CuCoA5EGzQcTPHmYLdr8QecKH9oxcjpQicUELbRTXwbw7Z7rq5zSdDrdS9hgLRMacPVykU6T1uC3Ce4UfMvAH72",
  "key8": "4rq7Y1Rcoik32z4T1hiYh8W9MybN8mRoP5j2hMSv31ybKPm5TaxaQQfbt2QhdLM7Pyw1iifjttX3k7Er7AnAy92G",
  "key9": "Can5AEtaAQeXPZjr1kt5XeCx1dAny1jzvNEj7Ho4gmHXxHnCvbfdz4nyY6xuVHj6nzpZaHFRSQ8qeDpwrRWJgi3",
  "key10": "5KhYAmvWq81A32EE1uRAz75zErrvHG53Lag1iZhiiSF3iusjB94jVMttBGbapy4FnNFb6QoTB7pT6Z3j2aCRid9g",
  "key11": "3Sg6zSFnnwUTewBUX9RQtuoqnSn6Jd6jpcNYmoQGXZFXtiA6NTrkipK2WndAhtarQSuNZCDejGxeVw6rqU2tvL59",
  "key12": "2pFBRFsEVHriPzvKrquZajFVzpRe19UVcTgGUhc83HjzKpJDLck5228NL2zKQfjMNCd8t4J8EQzoc4fJuJ52nj6e",
  "key13": "dCyFbu5HH3SwLguKogkbB2VLsxKVnkbrUR1LJVdJeogtkwH2bvZK3vi2oovrJ586Hs1JpsetH3K2vZt4hEnY8KM",
  "key14": "61JCjCwgiQ7NiqPfvfJMVWNMYatAa8B5n3jKvXsLMfrdvGpHSntPc1eNxPMq9cZaiSwy9XvQtBWa9itJykQnRGJ8",
  "key15": "JuBvX9hYKzhj6w6XThHU1YoBoty8D6RQQ1MNUzpAJdQSEjyBBLRL9LcUuSWUW1XPrPCajeb6A1eQy8kg8HhPtPb",
  "key16": "DYbW8YTu23Ffa3kDVY3t6pW9qLTYsuodMJBix4CjHcYgmjFhNHJqVddfrViW2jTVt3DLpNtjJDkBr5SVJuV2j3s",
  "key17": "4gqThmurHpKcLsqkaVhkVbE8URsGtJFkkEsqAAwvTycWisdb6xkmAFJB4ipFM9Qg6TBgRRMFJ1LFPUH8hUN8nP6t",
  "key18": "3EzjNgnWZoZTiK9PBGEjcKiwoXoLycdxLVRtH7DaZcVkwzbn2t1hr7jpKGrfCox3qiW1hkbWBRiVufXWRdVtj2SF",
  "key19": "SFE2RuxsWgrvqGQvBo1E4aYCX3rkxhnSLpjrT6XkXyNAfbYsVFbFCXXHR9cHpfPnVfcNTnMAToSrFxJBpgAZexb",
  "key20": "2o8DtKiUV9xWcLe7CkJ2VGubF2j88BwyaXCNZvtyBhtskrd8YkFHAxKHrPHHhvLjPPD38uVnjoZhmWuNmEMqbvxd",
  "key21": "22wBmdnveuMnPWac5MDAxPYnmfAvM818umE7QpASkh6Ua2etbiiXZU9sVEDzD8LNb5pLsPmpCRtefkTMff3mV6PX",
  "key22": "5wAFRwecYJr67j5RpbEnx1KE9Fk13H8XCiDXL1ARt6MC6yorb7Qpxfxrf19gNSxTmdBPonQXmVXQWGz1o5kw3WE6",
  "key23": "5NaLgvAeWuLtCaMj6tkac61Mtjm98SSfNFBNiyuzt11MmPVkWDHx6k3uX7ZSQzxE3F8Wojzh4P54GPp3EMW3XsW",
  "key24": "kt2HWzqBLiRiZDvUuABi6EF1DBygAxcwbHdqeQ39ZFFzMwbu8iPCzJAf5XjhGCTjnqavMKUr3ZyLPzg96SbCvYH",
  "key25": "2GMZwjf4nNs5QwpTqebpzXaEhfz85xXBVoWpeoZDoxVhY4aJAiPGYt14owLtu1EQ7g9QDWAvrm8NU6zwqQwWdFfQ",
  "key26": "25VAfJLKR1fqxqfrRu3tj6aRDsJ8TYihJabpcWBBEDPvYsckyxx7npzgiQTLugBMFL7Lf8c3wUXoF6TnLPF4mFDm",
  "key27": "CwrmrKAUMekrncW4KTbZcp1jUgWfG669Y4PMwcjfhwrQn491jf8fbbasENqouGHEyjdmCNk7S6HYCPMoUxDksWG",
  "key28": "46ejD6bFrpias7eUd6TuMbnURL9YjvnWYb5xtUS9tN27EVoYTL6B43f12C4C6BQURUujHR85Jq8cYLxryGSPrnkc",
  "key29": "4HiQVwpzZqeparwz7Jr3Aa2LKHkJjSBJmLbpeqYB4H55Q6BcnaWnUAt9jPsyi4CEqWbxUAwVUkHAYxfboS6bf9wX",
  "key30": "3DenoyKE9uGpaZGFdnKzyENdDdn9VasNoHLC5qUGz6DxK81Nq7ArAdZz6qYk47bbc94keDbVgKZcv32yRXcffyto",
  "key31": "37EyWaadpfoFFCBVN8AKrRanhig18GATf3vLqKtVCf77pnzX5feVFWMN26BkYt1hK7BE5fMJ74PwuCknpR1fnpMz",
  "key32": "3X2Cmsi2chxrTb2sgd5Tk5LqdzEHNtYbDSsneuNFGfZoQ1PE3yAx45tL1heJAhCDHWVECyr2jgzHYb1QF1PxLSNt",
  "key33": "34kjUDJq32XSC7psVYmYGeamRpu9cofustGKamEcariYJG4Eg22JHuDSY7wgcqUpvacHZkvTUgTqHfLsTESBcrnR",
  "key34": "2WxZPFRB1ggA3rVg7GdSpyojL85Nocb5bLjzabN7RhxbKCohnuu48asdU3873YdkrUoo7AXzKk1pwrbVSUcHNXpB",
  "key35": "2ksVseZW4LXpxVAWpM9FTZLjk145PKJ95dAYo43EELrHstNzZ9ofuBE5AwyN5E3y2YBvaNAkHBGGnDVvfMURapbt",
  "key36": "3jo8s6DhnW8FxMWn8NNCMN9peURg35ZyxQFtMJw3P2mW8QEqdE2Ne6TQQJxfC1exQoZdmVXS8FhE7uqxgs5o4n1B",
  "key37": "5ZVLfNxX2dqez2PdzT9MTXDuqEsH58Zkwo4CqF6hMaYj8g3z87fxV9MbNuGr6sfrjszNnoUcyCbpRWhxPYT2SgDL",
  "key38": "5o62KSP9Gg965nkNRgGorRX6DtXWnyvvD6Wx8c2rRPyX8mKjRoNrMDypqsQSRHAh19BAMhUN8MYu5yizN9zBydum"
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
