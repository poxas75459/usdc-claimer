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
    "4v15eEVVjVtzpgAbBthk2DBjB5npjkLjw76wtdYg1AwCuyMdH4u2MJ4evjfAbEBJJaXcxiS3g92fLLWAn7ixnpBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmsdoCVFPQAUQhLbqVRPurDjniW7GN1G6z83FTvJjzVGcXdTEW8QeS9y4o4MgMcwrGLVGSwujraQRJTxzxqRS4F",
  "key1": "2Xamkvn1UgSpVEYDPt2FRES4e4bTrHq2oXEd1FHTnrQmr2koVyBWrYb7Hj5h8C5vHCf2Jyhq3CPxYtt5qahmtEJp",
  "key2": "4dmUNkQEU31gspMVhEdvhjpyBEMv1aEECzFCPTzAfgdxz9wQTnPFKtHVMHVAno4x7zVi2VskpKzL5T3eMyKygkU4",
  "key3": "9KHiVdgoBTPmsQs1WqRAfqwiWgpuZg6hEkAP8E7H8WfgsRrdUBYVEvoFCnu8L4ZAiud7VfCEsq4XQVGxqQydDzL",
  "key4": "43hctFKSBUbxu3GyjU9CajcdHfomBQQBbbZFUwdVirksys6fg9tHbsS4n6AS7nSpUF7k1zfhvGDczbsCJU49zEi9",
  "key5": "4BE6g8x5GnmSfG4nMDxjQ28zaD8KQkoQ7UsT5bLkHD1CvTLH3Q9EpDCKyWzgU6YFjuESfGyUpS8QETJsy3uZpKFH",
  "key6": "4JZbxJtPuKWuphgEDEcRuhKPb9mjNkCnX9vkGynfvK2U9Ux24WcR8QSjMf3WHPWFxiWRcp5zJxqho2HHCpFGSxju",
  "key7": "5g32DjTH8h5tHkEFjHozapDrq61eAyRWcUAVj5M83USZUbq5x8nDhVxyTPjGdB4Z5AZ6HMvSWgBPwEcU9xheLJrd",
  "key8": "5NrPh2Q8hRX6DDLwHwbZqaASP42WsHNYvDQsvtUeGqi4VSwYAKSNDrTK67VSjYs1kwU8nb7z3NLjcUP9tMYwynzn",
  "key9": "fV6dC9wXvnTFePyn6eZNCt7GW5LeM1YzM2FyhtahqXoCWDZbpWo3nvwzLwHDnj7Hiso72jFJSpA5oxNGb8hTG6i",
  "key10": "5wLwQb4Md3L4YWG6QP2ojRDrdbtwQ45KzH9TwApUeWW4cVbxhDcRue2SBwH9FoBWU8Four3pRreydMZC8fwwpLYn",
  "key11": "2MPtJp6kMKV9RxYJTUfaw2VoaDF4nE6HU1zaVoMaSWsXk6vqaN95A2UmngydFVVjdL4sazFBfp3XxpHjPZoDAAVx",
  "key12": "2Fq8Bt5xJB7fbeUrxdSHJwP1T3PKXHCj23ekG968Exazdq7KpWNRZUV9munrHY2z9KG6zoy8zXhcMFBairxBManJ",
  "key13": "66DAA2FJbM1EvXzkmsCsuZycuqe4UFdu75YdAeMzbR971iFeV1iyVqFyCo7JXdVMLSpVpZQWtrNnSjkqzh2ow28G",
  "key14": "5UFHzz8rHssGP1nTSuHuVwY4zrS6U44L8ecp7dsEKArRsXZGEdbXXWrdvkpoJEyNaVUrPJfdgC6tH2NeDTMo5Ny7",
  "key15": "2PN7vx9qapJH81xU5cXSvLuPp7Xj4qmTAHPexm1f27mnv74szCPixBz2EbYwKvZj9tyq8e4oPYda2wNkFxCMK28f",
  "key16": "3tiCTahyW4hSfSE5HiSm8fFJFDhWKtDJQoLEFdsG5Ky9LGXwS9f4JzvkFrU9r4STnijUubwvLYwnGgddufmJ2wvV",
  "key17": "2omhfk6CauSejL5vECdGnt1fvAAq859DsPVzwamX3DxrtVe97uRHkXCmmDrmu7zLW4yQRHY3fqFGB6GaNSfvvaBu",
  "key18": "Nk5cAeZjkG23jxJvjbnmC1LWSwqppwGZLAXz9jUtk6wquGLTvFq8AcfgcM5DEoAmrdHopd3jrDnjope8sG6yHoD",
  "key19": "5s471nXpsyWpMh7b8f4LRtGUNhxcwo5tFAGU2YkdmcevpE7bxxGUaan6BguiH1hoD3wU9NSAd47473gvFckfXhRP",
  "key20": "4oRVBVwXxUKQCUihaQiV9juJnqCfaYGvyfev2aGUGfTULnTKp685AcWgt8eyaTxbxncQzcBerzLLPFVqP9qLBvxr",
  "key21": "n79skKmwkbqYbg4MQkqM4x6SbTu9F2MaoiDWEoLTnAiMrEF5To2PrHgmW8tkMvfe5nihsSP7SRDqxFQf6my4bKw",
  "key22": "4xdNk8aDegnY4m1efv3tonmEYom4m2cYLnUXb8UWE2fqX93d7nvqdzmpAzmyCAWiu71BxxLhrUoKdobQjTC7At45",
  "key23": "svjdG9Z8RKrUdwZAArGN6i8MUQRhVD5ustvfRky1oSGeq8TjYAQidWN1RMzzkmNwLg4LaQ4kppK7YD4pGbqcbTL",
  "key24": "Txo9PUhqQ82u9VT2ijEq7vWWPiwLwDpp1tyUqgkYrCPUMMwSFzXUvwpkxhk9PzrkQRym9L78zk72TuJ3d1rPM2n",
  "key25": "2V6DnBpbYyQCywabp2JJSxKzGxsSsd5iMYM9si6gmTSjBUVaSAhyj8s5kAtCQZ35RQY5tTQqd89Ps3oHLuFhbwYE",
  "key26": "5T7MR6HBftHzYntC6Hp4dxeJ1AXpGa2WuZXvrtBXhuy6JnVuRqUo1tcQ366XJLJtiymVuaQTmH1TMnG65zkaAYw2",
  "key27": "4ZFGjXAXFnnipd5p7Uc7FDDp2HYQ2WwMpA1sdwjanGg4A4nd5iTnqmsw74Ptpqz7D9rcG7MN8gh9XsYrPGvR75bg",
  "key28": "2TFYpAi4CNPPgWDuQrjNDDGC5v5a37cYyGBZASKDMToKnXwHFF91M3huRr9EULudFeGXdCupsPvfpQu3ebZ2naoC",
  "key29": "4XSkmG9qhhinwhsi3DniRvABBz2DYWp72N8rTN3jV2tvRaEX7eoy4R5KeWREbhQaWE9JGmLc4PPwyk1S2gzwzVEW",
  "key30": "EX78ziJGfNYJZ4TkRw77jfeeX363sQDGLQrJxs7yAzJEi7HLMywvQ4vE6SzbkXPTRpPyqLVDw7BGteYv3tZrCyX",
  "key31": "3fujUQpf2Lir4CJh6VZCSrjd8uam3H8a1QvrvsjNJdgjKHe3k5mx8gVaspN69VFuCCT3A4RVLPXuJThwb5jp1A2j",
  "key32": "5jtmED3AE3gd6MjxqZVDG9aiL5pnR1yt3wZv9pCh4esaSmqfqc5poWdro2MV2uJFp83Jdga4FZmj6ZYtXyWbzkV3",
  "key33": "2tdm7hSWyBuFwrvCU7A96XfrRcVMv1ue1rb8ypwZca2H58iNPcz5VSNmRocvYgXAqCxuJXFSvKxMJrCg8Ezf2MHd",
  "key34": "83sv3maMeU3V8QYFmGSaUcsWZkssVzV7cbv25aeM8XpurSuphkdtKeoDxoTNJdpRLCQPjEzJFGBLPywDiWxcNYU",
  "key35": "iL1veimtC1bEFqscsS3Kmep3tkqGm3YxTYiQdc6hATsR6KXDyLSULipDvRv32pxMTKiZUF1fYSH4skdUQtgTvDm",
  "key36": "631WzEDKKvfDcgjRhczqJnUcncPZQhg3F9k8zPF9gDA1n373GDCi2HHizwEtJi8C7BjUDurNYXf48d3Kk6NhgjeJ",
  "key37": "2tEszPYn4STTovFiKx4sd1L138AQmsi4TVqK7VTiuMuGgehUc7UnPLgZe5GWrgG844QrodpMRyKFeastbJRH6qMa",
  "key38": "3R2R5wuMc5WPK62JPPEqXx9R1uzxeJaVUQeZaBEZYm1cPv7wFCZeEp5nyRjbK9TCf2NMHA9W8PSJnhFvZWobFywr",
  "key39": "3vXBjZCwDTsPnEmYXmWKjd7iZ9t7LDqcgoZKMU2LRk81dVmaNuCVubGnnBNdhQFABPvn4SxS34YkfM5otYJuosdz",
  "key40": "2EK7sssoo74euJZQAVJzSdQKUp3vQ243HCGUvwZsm9TL2B92jPQ7Vaia2iU7Y3U4mfYLdsxuyz1rvKyg7bnKhLiK",
  "key41": "52mhyiHmEB8J42JnUPqGtKHxLYMDYhqUPQEvCDxUjaQoYT2SXyvVFzeKLwSm1drmA4xLxJRsUmEZpXto7ph2Gwbp",
  "key42": "4JCqTRK6ScjiQ18S2rhgaUTzJAyLZAh7NJuqBiQCoCQsVvPkocTF92mTcdWqvjVyxFk85N2xZcrm2rcNbFuYtwLg",
  "key43": "54mGfj17zFeuWyogW2GnFiBM4ztoPxuFkFtngYr75MuDyXdfnfWWrzrimpz6ThRuMrZqZsCSTjGbvfzMidRt1131",
  "key44": "hmure6rhz5HsotEe59ChM1UzDWxS5vG3zKLXvWWkaTBv637idr6Lhxr1YzEBJeJaRpSeBhJAXLex5RwJeSxkBaM",
  "key45": "45QqdC6VuLL7D2Xgy9RZND7MWVm3sMf4GvoNNmRuH2aj1sd2dGZWBXjsWWrGEqegj7wsEnwSJMji78WaLj6B3cjY"
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
