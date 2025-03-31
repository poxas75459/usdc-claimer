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
    "MtXuraoqCdCn56374EFizaLik76PuSStpLVmMXmrXeo9UStzB4DLvzTih55F3bZwsNEmQWfQGFEw2nuHg9uUavz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8UEdDQUiXgm222A9SURgToRaznd7Yj5nNZD5RLDRXLjfUsqd8cBSEVycSokNCwLqRNoFBmFzDiY78iGBnRuzXn",
  "key1": "45zHW97ZJKi9eZz9Jjx9ttHecbqsaRiUsiuBzQn6fZQHhSuLTTnzDMvDhAgJUg5m72N68W5tXVKPdeUWshYaw28P",
  "key2": "5bdeXHoUA8JH7A2jbL9ufzVJXh5XoCGdaoNaLCoJ2yEoKAaQgXH9X5cGJPZB4P736RcL5fdULW3xWfGLcGBYBYBe",
  "key3": "1ciB9qBXDjgSMggU6HJ6hiV8VC8EJiQcdPTXTirJeFt9edkxxiHPfmg2THaboWvPKh73pcxfc3sqbJb7p9Qmugi",
  "key4": "xKVzXxVkmBBfWwZMoYsd3JFAr1WRpV5bUHLbGziHFTUtKSA6dQJTJesM34NCa4kk6juiwU4yXRsBtVxLXQsCVo8",
  "key5": "2b5j9GK2hdfrFQq18Z3QdivGHj9Gzo5pCsKdAQDK68di1dC9hiERUuuNSSBTY3UphtjN2HGcTLuVVNoKXf7DEYwn",
  "key6": "1YQtRhi3N1ndv3B5cqoSW4Gt57NzWv4MPbSysYALdGaN2brk1ddkqM4poZa5gxoz5uAw96h2cf5NGTGSgKsaNHp",
  "key7": "66A6JHXQ99dGdfW8Rb3ZTW2puwPA6JyvcnniFpreJtdooAqFBTxcdpmWD6WtnHDVGwxKqKfsEzkg81LBkjSacDvr",
  "key8": "3REi8nMnCFmYTZeNsrhJKhzKi1kFst2oYUBx1yuC9Xt9sYRWaTSYid3AgffiCrg92VauYXXfUkv2n1L52FS2QREP",
  "key9": "3pT4qBaUDiFFFtAPN2qcewmva1BHD3hPhQjRK42xH61mAQMy8HsXMr8Hw7N21DWrC2yTdbwG2vyRb76w53X2R8xw",
  "key10": "3Y2o5cytgDpVbSytmr6CY5HDWgVL1yRGX63TAYK8dFWhFcoCWpyrQFAj5ZWZdUDCyBMUUZQud2Focku34hPsRP8p",
  "key11": "fcTFmbPxMxSMAfhdfsTmLdfdJTAn84knz37nHkMNtBb1zCRfeKcVovp81n5844ToeckQXFf8wpWBrDxbMCitvpt",
  "key12": "2ZdTyXa73Mctc4LoaoMCmieFFJaUm2LzfHUZv5qBCh5EBBca6rsjHPNeSkFxH9THZknAzJnuD7gypgaEjeMQVxqZ",
  "key13": "42BiREH6hY5tXjBrt5hDMajwGB76nhztKbzgt4w2VZf8GnkuVHoG5W5Ta2MBwQUrdKdow4o2svFCYrNzgtxpsx5f",
  "key14": "5XcfeqpHRjNhhrpgJrFTeEXr2Mz65LmwqrfK7zgqybpKDARDBuStTig1c9WuCuxgc82wmDFJ3BPMgQgUh46WrNid",
  "key15": "67E8nt4wPU9AMotQEJSdLuzCx5G8YjR1AvVVgrZZCLMtABiFbe69jhg3fLpkBt2N92XCuEtkkqVpXiiLNCSr2GHd",
  "key16": "2z33Ku59mEmx6pxSEf6KRZENyQV7r5PvkdexcDpxZxZvCHaEGzWmoYDkZSuQUbvVk55xiLptqAKagiEtoXenbjQe",
  "key17": "5yuYk4cCZddYnRtKBfA6WJmnFvjVwbzSewVjagBP3XAEw3eBzsZFPocprxYgTcb1eWc47WqQ5dNjbTrUyGU9rzTf",
  "key18": "6asaRVZLyou6hpzBVFMpiHVUwECCWKTpkfGa3s7oYWWtezjNAqewuJzzXQZkgQkDp9A14PH9mpbqajNSjMRknmg",
  "key19": "yy6DFnDEW1BiTeerKy7SNTPB8DGBWyioZj8k6LNq4bFph6QouAanGBxf5caGZrCWVAQU8tZnDQ1pLYQs9ZSiQq4",
  "key20": "3zUBRjYPUBDEyiBoReHXhdkrESUChFWvvsr3ZMKTdXU7YaRLYNrqANDQeHjXifB14FNdS8YrrZXXiwPKdJM7Dxg5",
  "key21": "4AbZ8fUjY8s7PZi28LemkGKEGrHbqCjekEpR3FDXb9A8weyX8NdSkDmU3GN59nyr8WqzMFCAdEbPYePEnKjwYUYy",
  "key22": "31CYBnAzuC1CYyfUotPy4tSaoSf2DceojWiCdTZpbrYTVknbCYoagXr8nWm8G6ZRxuT53oQog9cFDzUi5N6sT3Gr",
  "key23": "5xjxrPeaKXDYj8uy43ddawzDoAdn26eKYzoDfPFMGbng2wqxcTUJAzPakirDMsvu82gKB55zP7xjPZG4pCwxKmK",
  "key24": "2tu4obMdNLuApjtTdZuhAnjC5d9uuGbeGSMFuC7trEQuoevLigNU7pC4qNNz84XbwqawymomB2iw48n313wN8xRr",
  "key25": "4Lbw5CX9DFC3NKQ27f7KMexuXi6Amg2fanvJdMoD1KECGu4bLBZi5WpKvjVpwyEHYZr8eW1gnmcK8FLMrzfpsn6m",
  "key26": "2CjGQ1Evu8AvSikdDsiiUnPEz5bwXcN569Bm9jkPtceRPsy4z1fqfvkBi348iFQVFgWfLGiVHNDym5gHfJbKeTFL",
  "key27": "xexpC5FgaXE49BnMKbqYGwYjrABPUqwHYfrPZCnYkiqPxHbGe6exjTAuK4RuVbzRrgg3h9f5ZpP7Uzyga6nbFwM",
  "key28": "5cVjveRBqp1fu8nAgodqhB2drJk9NhWLr3Dp1MPsWPF4FGsxRCuchmRyqLbJyZYVYPQM7brrBkLeEqmBVR7YBqvu",
  "key29": "3aoiwyembQ8fGQqziKdHm1CswpNrY8jGToDFPTfS4PQobPPo7FmZT3tf5B91NZMB1thVbFKTh4r9jdvKyvwpV8Gb",
  "key30": "3g1biGwbAMnr6p49kq8UtKXRpBg8WR2NaNXoch8757RLweV9Q4PseZxjW5rmBVC9EJG7UpMNNFPHy89ZLmp2Yzes",
  "key31": "5obiVyQguZ75hiYUvMVNps5KJ3QhV8Zke61NpuuX7RrBthKuUwCp43oRGsdhJB72vPsBxhJ94uXh5bwE7LcUt8Xf",
  "key32": "45bWzzTBoo8gv86HMUC5SPjCqazHu7wJPTWE1bZUeaFW1FARpAjrHJsi8pym9EYfuGv2C9TJESg7dpWmAk9vh7CY",
  "key33": "myYJYFLSMCXv9tA5Us1MJ5aibK7wEcq7KB98sZHydisFpS7GAtYeemWdxSJ2pw2NmqRSXKFLHPv2EUsYPfwZXKX",
  "key34": "4ks4nC3V4MtvubehjQN1YRbWrpTzgQ3i7gxVeSPuvuqBcdEchu8gw885jjcqWxm9vchJFMRaZpoDuQCbis1t757i",
  "key35": "2yhbh7NpngrWP1EE3e6VF2qYJbC8tjQBta3DpSmSPenht6KRrsGkgsnZX8ggrbmXxdj18pyosBZihC3REeq792HZ",
  "key36": "3obw68zAy953LPUCKwDFv4qFUS3zAS4vHPDdm21C9zUM4RbU7f2JcDRdAzRh7McXivWSEE1WLsTwq8evwQRzawDw",
  "key37": "2xZQWmZsvoqHv8S8o9S31f21cHU11tcx4RqaDqsvSiWHsTbwejLdqeTcf9psBfnLQJJaeWoTEBFxySuGtsEGe4ZH",
  "key38": "66di3AB1xDmfoTBmorxXVuuJSzWjTTfXHdGh4DjSppync5iDKFR27HgABEXmvHHhzDwGza2WKSj178Cd7seXRFTq",
  "key39": "2dYThzCXbZZfYDQnmCtzxaDAhofxxLZv7ZQNJbGTJuggzuVUgL7dYcW3wSF7xGrhH2CgmjqJPnPFpooudPCAjTmV",
  "key40": "39TATxmczvCJ4QwuHQZdK8WM96jxJLroFrxi9UXkNdZo5viu5wAU9AbsqTM9P9qcC33nA8x2KwPF8wzq1R6UGT2c",
  "key41": "3f1Q3FEXq768aqS9WXZwxCxTrswMnEASXiVX4MeHCs7xRZwj7YntcY8DTk7XXJCEn1hZjKHwqZVwNSE2UNfyzWos",
  "key42": "3TzMYi66YHFKaBUBAeVZVoAZNk5N1eJ1KsAsLw594gA2aLGPJ5JpvQVXi7dTkwsGZRkbn2gfZsPXCjjrytMkcmAU",
  "key43": "2K9utbXu1DavnrBsCiXBX6GnvespvDcuYQCTLLXbpKQ9UbR8MQXFenZ1cB6NLWiBTiXef4xPDuRzLNm1cBoqWjNp",
  "key44": "WQ5H3TjSK5EV5qHGjPwZidHexTj6unpQtRbMfHPTbhwCzHqP1h9eLmudWzwiKzG77pFyq8U24Kc4GN7GHSkYH9t",
  "key45": "2M1txKHwmCvUSazwXdJqmvwcmmXfZ2wSBmiiJEYTVg8YsbZ16t8GmC5RsSTnXCSMhz1bvDEXL751tcrfUmYX8tRP",
  "key46": "5sTD8nWzkwcZADts7tQwUu9U5GKEruMfU9nubt8Cmd673Hqz7TJTBEc3JV6yTzHWMsB472bgNuJwvxztqeg2rzuv",
  "key47": "3PFfHsUX1oJPeZzkxQKruSuioUbDwgzcvenUyBemhGPi68DR2rbW7Jr44ZWbpeY9Uj9BeyvPrAxNWMtSKfwPwh9b",
  "key48": "3XV8B5VEGmrLP2yHXGArbAvwS9hbNsqJng8kcabwTC9kLQzWpppUaoHe1NktFEhDrzdXgY27AcHtcivbAAUaEVzJ",
  "key49": "3iwkBYYrWtbuygupWZZMUqdamawGjCjPhhLfowBKdHa3pqTSCbT4GfwKhW5LKb4UEzr9ZJx2VjNFEhi42SpTwmsE"
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
