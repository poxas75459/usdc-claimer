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
    "3ptQ87gsVTqwZQwu2RhoLqve5teXpcmjcoFSXqjbA9Mr8Sek5vn9VztEMfP3mMM6eDmnFgcwm7rKULGaG5pvvFNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbktWhyedotaNiCKjV8gbAeXsqiPhrZpHv4TCjZNXULQxKp7YDSCDEWeKqauJZhMFMev2hCSSrad5SL7G8WjbUQ",
  "key1": "383KR1SRBgaLVyDNNNEn2svj1N4T5cWjevvA1BePr9tDm4RX1QXY881hxZNjt3J9KNu2ou9GG2QNDoD5TDdjA8rG",
  "key2": "5xoMHbbBjHLMSQtpx4RBd9Rv4Kr5CmjtAtsPDNyEQLqCCTfqPsPLKHTH4CdySY2m4muaDHzR41nLNJq9kfQQeZJn",
  "key3": "5WFrshPCBE16gzJz3M4PdhiJedBCF7mvNsEDZdPmopvbLbDs67z79sweetJDYmzz3WxNL2XP3vChk84Md1Hscj4R",
  "key4": "2rjghr3QaVeDj33EnE16HQ9hMf3Cv4DuTqeoRk9xsaW5sWmX81RbpTbXdjXfYAeSLe646yDyU3CqzPvQh9C7dwzK",
  "key5": "2j1xyuGaYFBiWjgrFNraSN2wPYZF2DK9ZWufWcNjuqqdvjNpVBHrQYcPv2gHcYLziBiVMgs9z5NijreuDY7H94NU",
  "key6": "XqLDdQfR1LWYXQU89PBG4fg16ipgmMVBLcs2Nz1vTDxTYHDhfLnYhLgvpDz65ku9DStuUQY5VK9Zv3Y33kFeH49",
  "key7": "2VbkYisrCZ1y3rXT7nEciXgGeSxXvJvdPteBji3fKpXMsoWkzWQ4wL1i6hqnXYNGajrWZWiGWiNyHKuwFLb323YQ",
  "key8": "gAhDqYgVFMqP3NbXJxHBAh2Jcyn21roYvJ9cLudwNNiqNNerrMD994LFFSt1jb4gpYUiEowYLdqh7gpYCZ9xceE",
  "key9": "5xXTTzijCiBGPePqFy5AQbMpMY5c3vw94MQCdhRfL8wESvni9GcvTVFnf99wZZJtVYpZNStbaf2tU657fE16hx8U",
  "key10": "BMLn3i6TV3b3EjNv1yjxSCWNor9LSaHbKcSjELSrbotUBgHnhyLxcpLNqNJampM24sLzBQ6jFr4nMLHSagMPwMV",
  "key11": "4BUNmWoFuwFvcMnHTn3EEvutdoqTT3K2qKGqruHh4Gmz23uu29nZCVEH4zvKAhR41Zg2bLgyW6a6fwwcYSNZ33X5",
  "key12": "3cXSvV3aH5ZNuMpQoDxB3yWKQRrq57X2txFe8XNBqNnrHQQxAXB9yxs2GwQLQ2ymhaQrUXPkbDoxyLULdiouWP73",
  "key13": "4ZHDgyeZNWstWyjAEJbMaLyq73gReKeiaPc1Gpj9tmeet1UvTzKaETqjSg6t4TzVbwtxhJf1QNYbsykcL8VGGq3M",
  "key14": "55ZRRKf63Nj17spQGQj2j6yiHiQDr61UAxRzPU2A4h2GHEjYZXSkibN1zTr6CKUM2p6wCMyATaCoeQQuUD7CBzgh",
  "key15": "2AUYiYZLejoVzhZQzvtXWDKaGcVqMCza8naznxbByC7mfyh46MxdYz3Ac7UaCLaSSjm2PtokHyJJD6zZVm1c5T1y",
  "key16": "4rLuK54z8TZE1wrmrqzzHZ9TG23Q3YGSQ787m44CUy2oC25ukLLnWrHZpGjpFshvhVGwVHcw4PEhvbE24jvy9BFR",
  "key17": "5pw92KFd8qLdQteHzcwzAN5dM3Het47sGaLnt3nxjYEJJtNYALYK5WaXZQ7E6bL1kNsvWHxUmgMfRBKD9gagQypS",
  "key18": "3v1ApGuH24ZVAfoGoipU9bByqhcFBxcsy6gVbdnremQ3vHarjiAhs9HpmTYWHXLpj98Jgcg99zrCD97x3dXSZy7p",
  "key19": "5m3E8jrGuuXh8S39czrBurEoDrNsYuspJG18QWvmaU5eUdFxqiyMdJFt27rGD6R3rVDikDaU4qNBrFzrmMXrxLuD",
  "key20": "4Rh23rXBkmcUWuEH7r4Ai747yohdqiZJCZGKKfaab4mACpAYbGfzkLmPVaTdZgi5gMMnj3HpbFNGyPUfprkkFqPz",
  "key21": "4Q9r1axaqrzPYTbAhvwBkc3UkLjBGzfHejJbrhYVHJM8aePyCegcTFszdhBKx2RkN1ZZMwMHeQCNYDVqGnJbdpAd",
  "key22": "5XFVNAF6t6ae3dFfd2x3TPobTAuAuX3yqykwfgW56oG8sX7pTS5dktBHd2iLy5xUUPsurwmjThDJhvEJkSapLHSD",
  "key23": "2LK1u6UexkDZU5C3VHNtJ4LnreePGEkiwgToUL8MLyocnXtjqB54vCgNv1oiYxy85LoZ2HkrncKZL1CHPsS9nUuD",
  "key24": "61jANiBDNDouqwWH9fQdZ8AWsffo6hycFfGWzUSx7bfxXgXP3gKjidktMSbhbgQqpoCA3KwwoLvARM6FkUWr5ZEP",
  "key25": "4sqeC45o2nrWQNsfWrgGnNZkizeLfTX1L67e1LModkPvF1NJurvPWpMxHwUUTVMeqx6WE2UcZNQ3gpGFFcV6t1Yn",
  "key26": "4Gv7EFoaDv1FN2WXph1gLJy9jEkuvc7YxW1znKwWdokdSfLREeQLeUfsMmzRp3q8faHsNR9aK1xsfoScTURo6UPr",
  "key27": "jN3BE1YU3P59NA4MFD7SaxaFqJe7KkYRjJ8sWuduPHaZnMgikPWXv6wHFNvXN4dctSCnoYEiDDU5i14ryhtRiaQ",
  "key28": "52femQtArPBzy5RqCUD6NxT9b6984LEogCTaf3gzMgzmNkgdckwiicLvi9RKUry2HfKXtHwrUnbvwzL8mCZSZHhA",
  "key29": "3xvpbD6YZJdXazS5aVBZgRUY2YQWyjELCXvCePTAVJ6Vkh5wUrtREVRMUTYHrV9RFFgt2L5vfYeWYaXE7K9qdBup",
  "key30": "LZJhBGr6qiwBGoko9ozGSNYCSvqY7e9Q2L6TDvBaK6SrRC7VcZKvCcC3Yz8gBXzBWLWDp5prEJpBvZJmdmjPr1M",
  "key31": "4D6ov6QjoVBqGmeQHKsajdBtR4WDV6vExf3K7A6mKe3GGkMpaitB345XSu5T2sHpzcq3Nf5aawfFKZKzq5BpdVGP",
  "key32": "5MvcrAAxxbT8ZuQkU4hos4jCB7U4GeLuKQD5TJ8Vrff5KRX9KDqSKQtcfjFTb35aGRUUoVfFrFoyFLGhnb7W1MZ9",
  "key33": "2rtYQdQ8qt8dedDKGaXPRHhK58diTsfQ2CKWV5n3Ho2Z3yNDFGArdFag2bVq435jaJbbchLdAqyDmERCT6DP9uYP",
  "key34": "5g62SHrtSSB1qXefYtnFfFMtJTeH4xmMFokoQ3qkP1dJSdPWVAgxvGTf5sQxXGh47Cai2UNCgHoXMCmxKi2kAh9M",
  "key35": "2u7QREoLdmnScjeiRnwQsDJL6fDKbw4r8id8WH7KfHfRP3BBAKMXFFkLNosb2fikk81J3cnTUQWp7AKU2DJAKnx9",
  "key36": "454ijVsHrPjP2Jp4rG2gFnsRKWyqPbMygCmDLsfA1sjkNkCbQpzpKYd61WW5nPgowxUcvFg1VEsbFYPtKFd8xzZp",
  "key37": "4bytuQoNheRNdjjM5dzECzamSEs6zKbhYjTAGvZnj5fEXMwWLN81Xyz2s5kc6cHLmWunQEU5RvPpi5prVhBGcdQm",
  "key38": "4saeAPKY41ZuuhdR7fcaLregjGcG8UAG7zy8ae8eoG9gN9hFTvNqkQvBoJK8FmMTz5i5M9TbGH2AXDeuZtWbUWck",
  "key39": "4KYDmSLv1GEugG85R3pn6HpYAaeimedUTnJSCSv4HV4L257DhEjgcJuPVoj7VthtXQqPgdeUkFWBgynkPof2mcjR",
  "key40": "74yDrirEkcZCUz1HxwcGL8KEoQ5GcMUipoR4PadLN2UkiZesjuhfEXLWuGPkaSLuosae26a1isKnYTWYDY7cStw",
  "key41": "5qfXj74yjxfDSmJxz8nXqo4774Fzwkn1Rf2d8R7d65tAJBCWhZ8rSuoZ3nw2hSinA6RDAPf3kk8GMEdidpGb7jcw",
  "key42": "3GHZnfX1t6mvpieG8rmxVhVxuBH6n2mtPRQ1UA5BeW1RErpsbdgw6Cbq8JCsBXWvsbAo9YbVvTfVt6KkHTnWu3Gm",
  "key43": "44p2iQSqaG4ndJRBeHJvRRx5kfM8S3BGsv9fHpG5mDc3FpjfTaba1ioxH3naAaNCoxMFYp6hatVsTuL4mS8ttMf8",
  "key44": "34Gp7EP8SXXZUbJSDGwLdbbKGdRBEUt4ENTBMusAUw9UqEQWNrUsmcFL4ZVzHnaz4WhZkB8va9UNafYeKpQPuoUc"
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
