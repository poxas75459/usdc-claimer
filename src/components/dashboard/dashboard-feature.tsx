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
    "vHz7sT2PSynfQGevLcSJE7EpnRaL4NhLc618VhudUYWaGB5p3LvxmLiDq7QwwSxhMm89i9HFgeQ6PjwKf3uPbAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fy6KnV44ziM2Ac7EtC8LYQU1Esjf1HbqkX9mEc6bC5nvYEiDRYE213wfgfZ7f8kPkPwG2Eo3aFy3oahTbNtrK5E",
  "key1": "51V2npELSF1NmjdEjuJ2q9fgD4wu28UVK2ufL2HXEUhzXTYEYtpEc38LAoSenJiZgXUPBFTePvikJiCPTLeWsedH",
  "key2": "58xosTF7L26Wv7fZRJiNgbXciZAUCKZKftwzzTtAB4KKympxcr4xEgyyGFDKJ9SXypuLk1xQCf9bg69fEmBUwZiK",
  "key3": "4ZupSb8CwHgDWxT5cAPTf3c1u62fLarhcQPjDrtNQ2mmGr2vv3HgCLpwpmpgz55oKziuWw3sGgamYZJ5kkmhZHZS",
  "key4": "4fhckmwnyP6vKF9QhMpWeQfEQAyRj35arAE8BHjBTsRW4g3quEcz9J32FZXCpA7M9KBmX7JeHgbjG7LGonG6qGsd",
  "key5": "51cvbKicEz55oBDzhtTvThEKRT4ioVcbNXoRC8ZmvG7okeQi6tFxZnoPCkqyVaQcok49TVAzHRjjWxCWnwx9diLD",
  "key6": "2ZJmy8gvKpJoC1n4GAj6zJxCrSqKa55JU6eCuJj75EhmRZ4HrBLAS91Ea1ERb486MRLuY4RiSpvmF79MvD7QEqpN",
  "key7": "26UXHUDmNGvwkjzq3HLN2JVcqFd4pFdjYe5WGvTe4B5ckiyF2BUdjfT2QNcseirNEuxLibXZS3z9K9su44jhD9iQ",
  "key8": "2f6JSi3NEWSZVCLBHA21sNUNCyFVxnwLzbyfNeKZ7QueRrzdfTVefa9WMnJNWRwsnqXjfuz22bcRYKvuXrAXciVo",
  "key9": "2dZVrn1YwoiCtqMTfarUtAB8DXtZ3eQNy4255Gf14Mj14kDtLCtrLm3Ttb3jVmsBhjsV9McuM5djURVN7ddWdJrx",
  "key10": "2KSu25MfbNSCCcbPTtZzTbF9yELcG2oiHvDTP3Xm48dtN9CczsFxss7dBaLERiCNQNHDfmFQwtjvUovosTqZJJPo",
  "key11": "4R62NMkqgeTDtjtUGnFuFGKUbYbYhFFnYxCYgQvTQs7TEBWXRF9ZiBjn19DB24NGS1x7g8Q9oqmLdQ3RdjMCbLCm",
  "key12": "34VV7G2ztkKvngdBvHw4QfG3jCu8a58Yi7SauFhivYzHBCqLfRg7fVqCkroaDVmQfirGTnAsGKuKgujYsp8vNoyv",
  "key13": "4q2ohGVfFApzLC6xKfBieCDafaWCVy8HbnJ1S3W7UrTDs6TCi7RJtW65c4mesmWYrTnrjobPMohhNTx6uHWukd33",
  "key14": "4EVB3jJpJ2Fmi8mqEoZJxACGjsav8Ddd3fmHfNzB5hTzzCpL7gPcrtuz6bgfd3vALG81Ptxd8Qf13FfNpVy2okxU",
  "key15": "4kLUJmugQoeauJ9rcNWxZePXhzDJVncb4RhGQGZq2j98o2nDewsaomDncKjMFqnfg5tqqWHdDi6tBsfgSZrC2Xy5",
  "key16": "4rWJL3CgnyoQPzxVi3oECvRpqLKjux5JRrD8QVqakxTFxLCppmA4g8q5vU2YKdxEEDCm9pmHWWPEih3avvAWKdLG",
  "key17": "UZEMAs42cBFB3f1PfZyYtQP1ubYAuLZh3fi3JjXCig3hEXRygESaqQgsoxhMxwvwg558sEeu1AjBRxVjVb3dExW",
  "key18": "3ZH5u3zUgEZsw29X7iS1RMqtZ82fSw2rBdFg2fJm7rGH6nHP2N1vbNiZJZd4Y18ZFtrUEoxv7E7zsopjq4UNjKga",
  "key19": "7tbXhhNMQpffiuBgbpM1UyhSsg9Q4yZAe94v5j7GGriF1VBdDiNCLnnxUHk15xdafUNJoW87BbEuPFHnbUp2e2p",
  "key20": "5xQV3SwtByane8yap6BwrgwEDTwiKRU5xtbuafwXLcm1ReRpr1UtLNsXRfyU6FQDbwtXjSTPqxbPJmrCpQ1yywjV",
  "key21": "35w5wxUZZdCKRcZwgq6112hFe4yzLyjEss2uqQ4cgMWHxUij5NfMhKk8E9zsTTY6aA6JyAXd91xbYEZu2bxk9irF",
  "key22": "4wycbVZa4zU4Fy2Huxi1P62hGLxWKDyxCqCL29WZ9aGvCFqovr45NM7Q4yPAqA3t3kmSDEpJga2heT7JAvaszBvA",
  "key23": "5qCX6eHYdThBd62FYkywZudUYzGUEigCHVLKtdqHezy82BLFTAsi5zTxZsSnfNkuevucPoY9CWHzBjTuzNjwPmep",
  "key24": "3Ut6xbANeQmmBtXg1dptawwuKSAi3kPtCWNuKPDPGQWCb8smkkiBx47xKaGfhCateNDbD3tW5TGh5fRx7Pjis6Gt",
  "key25": "3jwgF4bLCiTBTP3G4gzP7FRWy8VEDj4QdhJU5mofb44tKtfoD6YoQ3DoJEAGQpiFB7VARKPqpqVEc4q41hv5N724",
  "key26": "3QPZcUVxvsTBJqzGw4aHwbv5CK4NpQ6MhaGfTZ9bJ6SXdLTP25LEbh8vSJLpNejDtsh1Px8hUVKr2uWEMqNPt33h",
  "key27": "5YhYodJhGdp3CZBypzv2qKDfc2v8vkVF2XdK33KdLzWnNjWHZkZrcRafwzQuotBUNH1YEDfZw8xPq8fEMASxGpV8",
  "key28": "4DQXLJq4MS33NCBJoziZzediaueBbte8RpLCfo8xARufkY1TzYMxLcFPqc1HVsZj5C2CYmbAhKCVLJKzGUxMHSsH",
  "key29": "29DFbn5ax4GVNgqTKSmnY4YxqTmdCHpQP875NMfdbWvP5VGMi7BvAm6oEh1BG85rHGQdnofZYr783hK9CQ5eiSCw",
  "key30": "5g83C1ZCvkxrmneccqXZVSQ7BwXZu3Eiw4qdqNSTb8UmH7g93DzPgvUqGfDJJcZXxkdSjXePwkAzRVZJx7DHgTxo",
  "key31": "31DTmUYZjJYrA57vjvXsodxPdjHCW95G3K11WsDxAmrNo1iEbXvhrACNRLpKaVJbUKjWt8Uydkpuz9zKQiKkownx",
  "key32": "4BPhdEoD7KbkmNTKPyQaKL8JHyCCt7iA5ktagA2CeT29tDyWH214hwB6wXxDZfMmzc7APL7XgZRdJQgGZzEMyvUE",
  "key33": "43ytbzR2StyjQLrcXT26YvejBHf99zZBwoNHMsQfudEXCrCTxxGRh3uAdecPwCshEc2fUr85F6xYvaG1ay4q5Gjg",
  "key34": "oThWTPBh7yVq8bVQt24tUyQRDAz6cak6qWRAC3F3WMrgB8d3zf8qNrKtReZYP3sxoQgYB56F21VcAgMMyboGRyq",
  "key35": "4aRD37JBs9zfQhuAa9iEK79YM8FVAcpFX9WxUWnzKpUrtAzSwis7UgjaJnbwtTLfWA1t3BH3poJzx2T1249Ah6yg",
  "key36": "5kYzkuVxMyW5Pg8fiz5VZkSRThTbCKSM1Y3PBHhXDnMYooeYn78eGpLs4FUXsmPE8dFUGQBgqSdmVMQtBCJJu8qe",
  "key37": "3NdGWHmXkKobeMLmAtUdCWn9qQ4cH7GGFCCDpneUhUnvEkiw37RuhEc6uJV8E7f73NmE3D6nVcnVMTcxm9EQyAGv",
  "key38": "37ar3iY9BVyDjvY37fkS9xJ5kroJwgPs8yh6imwVmQ1f6eTsxVP2tRUNXWqK9yF4URn26uBCfY3VJLWzGMCkBBmw",
  "key39": "2aA5zL3R8csNZwHCoDU1W8j731aaWPswiTHJuHgdSYmTcRdeu3VKWrAo9eZTpsUXPfpMcSNsyNCmqJnyuiiUfcyP",
  "key40": "4Rw72hojyXRux9RMuGrDRJQcW2Fh5kvcA1TRBu39Gr2sYeKT7a4qA8NnvsK8qBTHBtKb6HfPWrgsYZyMRPAQn2en",
  "key41": "oSFKHXdvVafkRc2BVPqqPgWkXJmf85wRJ2wk9TKSivBz5jNxWqQCWokdFzcijXTyEwnhpDkXHK3Liesfp4Up94e",
  "key42": "65zFy2cKYBjraTwN7hbQRxDym5YdKnz9utLZZumoKkC5v3oR54TJhdWkYtdMWqLGjZKhNmN9RmdyrPrTebitfwT8"
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
