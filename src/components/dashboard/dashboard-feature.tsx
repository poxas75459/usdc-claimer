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
    "3uoZpyuXxX6gEnoZ33McECjYD8vm8SmZQm65Z78nqnSKLPYN69SKDdobZiAq56VaxxhHtxxSzsNWZRySQe8gFZnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQNrxQWcd42nPQNpcBEbmJoYSwBvZgJTx9EbYavF2jKwbGqSNAmV7Bqss5rZn7sQ97pRogCMcRkPnUsHg55kGiY",
  "key1": "oWC7kLcFUYz6vfeXZt4pkKRNua2iAdoMMZg4nRfsZXfPKTiXFLMQBW6HfWsYFMVfpTRmP5nDPoh4qauYrHj2Mck",
  "key2": "4TvB2fEMnDN4K8tBeepKKqVcayoB3GiX7w8YNnFeWCn84i6getsXd7GBx2BK11CMaGbhkmHnqcUGAB3K3nmGjxz2",
  "key3": "2k3pcCukQfHdzQVeFvPTDJbzGCKj3oYxZdrdHtpwJEphy8UEPJP6zV2f8mHf3HhgLTw84me7Gq22mv798P5SzHsR",
  "key4": "2Lh3aF7Ftqzgoxkym5j5rSxvYu65tUQJipSmzE6FM83Q6Vbsgc1Ji2tVGMu3HXguRck79VALL4396v7MoUq62Ekp",
  "key5": "4RXEJSJXQNy22N1bcjFto3SwT8jMR9mV5S84r72tj1LiFF2YxTJiCrqyva3LnEt2PuEUp8mCNmuLz9pC9V5cMRnC",
  "key6": "5Tk1hMEXhyhpLri8jcDJ62iH8Wpc1twWs6XVCsJwX1MGW8kQicmjjLxwzaZvW5yC6Aepz1PF9kmDaaHAyK5QcCph",
  "key7": "5rBaMXJXY4BSqRc4NLrBE7xCvBQsF5WUiwa1Z6C6qMEjHKhnFFnMprCkiCcpWYr4ABn8WoudeWrECpaJzWzMLjwX",
  "key8": "2KyrYvnMSpr7xAWegk8qeAUEVKYapaumvz3jKasHoyUn1C9eXKDEWWUGQvn46QN2njbpUPiEjBKqdwbAwzM4X9or",
  "key9": "588ieeaFTaijuWPEnAKMJRb9AqnbXN8K2Wcc8ynb3SLGGWztwprDaWSiwPgAYpZnnkJLXXmtLHSiSh9dejmA8ny9",
  "key10": "3BTcZU7NVU6kt5Prn8qGzQ9XWNNvLfEvbPULvNWbkCerSiDHMimPGZGVVoZvwKGqK9iABmrKBzrFag3oEcBj8epk",
  "key11": "t3CTmgBsK1zsfPRZJJ67sByPKZNsKigKaaCyFHWBn7M4pGhEZsBmZ5GoNXAAbPR3qkD3YTM1PDhi9NUSE7BL8Pe",
  "key12": "2ihqAngSqzvvEF6ntYbapfmLjogJ9bvkdnbidGUKQWNxqZxL8WoNc21HuFECXdCXakw2AhUjXd4VY8KF8sZHJoak",
  "key13": "2qJV7pxCYcSQoanYhik1o7itYSGi21VZuY5LsYn2RJqa8ZYZXYLZ9gBoMmQsCqsJcT2qAJh9wb5Hnovb1xE958RQ",
  "key14": "2ou5wDK5XVPvd6znsoFPa7NRQFU5e6xZEw1rGUhSBPjf62k1tcQd8YAueG4iiwGWU5NV8nYEhSoP1P21DrZdrboW",
  "key15": "5ZqVd1GbPu5uv1rbkS13GSN43H1Z2e2rJAyYShu83kA923oMU58b9itUKcwHJ2eqzJbZMRCCPjfxZ4HGmwPt6zJD",
  "key16": "2jRPvtq9YKDeYXBakosoMmAQFzmxvqrxrL6wivbwE5wxA8oyAMUPwLTyL48c5a2Y2HWJNESEwUGSL2Jyv1ReY2vc",
  "key17": "4skNzXh1WoFZxvWmeQX6RvStH8exfhow4dxQFrhs64YWiSXHFZ5ScpkHME2wJNfefAzgLxkd9j34gpo2SgCLA64T",
  "key18": "5c2AZxs973dUnXkhppTEpvwTp1f2qbQQCiB191VKAZnF9ZZZVKnkwGuBSAGbgiPm5PzfBfmvUmuKutsrJwjmgNiR",
  "key19": "4kiYMzmSdY2LyEs9GHCzaoCVJxNFcyTZdj9xk5KxippJ41pPEYcXaSUR2Y9Q5a9EUxLnLDoVMi5PFR5rNu3GHSiZ",
  "key20": "4QVChf8mAgKsnT9LDcAqAVP7cnVuVftCkMYxQZZiTiczoBD7GQi9uyc49wHCrnKpDxjx6T1LQuwuFphQB5a2u1pS",
  "key21": "616KAtQTuejL9WXx3e4GBxmeFAEQDxg5NxXLxnXAwXwXa9D2k5Ug3tStGQEEDysFano1LydHvpTrNkbrW176cNuQ",
  "key22": "ngcBbdbquF2EPWpg963Xuap3FCp1gqPJ4KJaknZVT83EjU3ZdCGDgN6eMgoVzDJXUsBVKVPN6xRh2x5qMUqazjG",
  "key23": "42c137cFLq7y2Rbo2Y92MMYbgE3T83iF8CJ25qbQcYxUyqd2twJFisKPBbjB5eNY8Dxkj8TK6CsCuoLTszqFRwP7",
  "key24": "5umSgKMmRXE7zmjAysZL4tifsFvkPiJkiasicXCjXEw9wA9MQ5FrMBsRsYfbuVdofP9CZu5kc7Zccv1BwBSYP1cM",
  "key25": "XbrGLd2ayBTdK1vNUPx3qW7tw4ECYsoZCim2ymbjJ3jQynF3itChkp1AW7tUGnAw7fbFYp1ca9rynwC3Cpi4YpF",
  "key26": "575TYvcAQ317sgQJgrQVtCAdCd3KkKf5LpCCsqhE3VpG1EiAM188Rz2eP52ezqDnPTohDdMA4eKHQ26c5wW4TSSs",
  "key27": "3YVAHc69991tMr35zE9H6HydvzxXwEKBHU79cPfDgM9MuoAqYsGwxRuebp8EA6d7cneMoaRX3XPrmQwDtHNH9S9F",
  "key28": "2KnWt6BoJdUwgew2Yj27voCweGagp8hxXCAGoTc9KrLY6SG8cqktAhwe4Y9HGicHwzYtbprGtfCoDJZR71NGm6t6",
  "key29": "27H3hVSRkvgNpfJRjfyNhMhv7pPG6yo35tzFRUpSRyrP2EckckTrtBfrSGxsASKxQtGUxC38DzJ9xwQuyk9q78Sz",
  "key30": "4kXpUjeFwymTMkKMdcnQxVfJdSXd99Nzur9zVgaUtY2aAXU2YhowvXtutjxoo3r2bvxyrtzgjK3YAnn238uvsLbW",
  "key31": "5Zeh4ycpy4x2DLV8UKuzfr55oym4VFpoVedRr12R9XDVxzkFvsXdoL1Lh8XVDZBw68VYntCgjxz5r9ES3qsZHRxg",
  "key32": "4ELrRLP4c9Q8hhShSCwG35MqaNqA4MvAqeiEmRS2U2gkz7hQ9s1PHmEM1rX7JJaTmzUTwy9rrofgRqDrKodkWjVm",
  "key33": "61d6RfrvDtRqke1pdcEtNDw88PV1VGZrz9s3MMjGW6vYR7UqTqAfpmixn2myDncVMzP6kgcyafh6Mfk8MagQV8Ai",
  "key34": "5AnjE89ZwtZcuMzpfdypmyAbFtMMe7gXSeLbF3ghtB4oVQ7b8N2SdC4WuBJPCNparEPX4RPSbeZYWjzYMqFbsZix",
  "key35": "4ssLKCWWTtokrisqLQn8k3tmxvDdLq6Drzy16hapE1yDP7V62gAVSdFK83vXEN6h68rkms1MMMyS2iAUd96oE83F",
  "key36": "2E8NsmoRo6YJu5zRtyVHkYfKsszLcCBCmggcabNCXdBxmsfs9KuMgz41RPiDfK3crbu3YotsBgoKDYrUrQKkCRUX",
  "key37": "4aUEn72X3jkHs1FqrRnW7cn7vnpU9KwUrCph2tWNDUNhyoCJ6wtiEaP9qgXn8qrvkFpeYJEBXqtdsomfhqPoYmto",
  "key38": "4VHy2KxaZqRMVk37p1fmfJWZFtJhrNL7nA9u2E9zgPiwLmiurwRd3Qr23iWZ4DxpWDwPa8qfFXYLbpXRQCfa8geK",
  "key39": "3ybRauiPnkANp6p532ACBc45pSn65sFMmD8VcnQgf3m1HTKSfMdF2uCLwSHL8bZu3HALSQeiuWNZ4aXitabJLC3T",
  "key40": "2bm1HHJLLfNVjVrzdwHzXXyTidURZmxRBEPYuy4mKGcHwQCRpwVfKDRRjtLALiHTmK8D6sidsRJJQ3kimSFUyoLb",
  "key41": "2RKUbjqhuxnjfFGpyQyHK5LoGJmfu4MPLPLNriikVxDdVcxaK3a8bUX4wRUpQkKzACtQ9km9LjT3gWZVB2guHXXT",
  "key42": "36eumZP2vHtfZ9pTWmYZJS3uGCDr6WYc92EPrXW3GJBQFYPBhvbRvWK9AoXTkvZcuq8Dsrrdpsc8FvBK9DhgWaLx",
  "key43": "4GxeDjPQp3uEUyjynhvnWqhZdMc5ztSpUG9PsYjRG9nvse9JyMjwyaLrTFtZfVnqYHouPRumAvmHnNoci3R2vRXC"
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
