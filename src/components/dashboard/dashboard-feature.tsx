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
    "58AtMpmc7DohJ5cmmMBG1i2uNBEURAaZuwSVkLHx2yzZF1c23NZPjChepfwPYt6sXnJZJjdAUHLfTJchjQxhDV56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWuGKvCQuS49FUsAix3SwYQqNcJTexThVwyy2iSeJ7QQZHdxYKfPzXkYYjCn2AmDscZ9rh1vRJzXMvR1WrBt9vw",
  "key1": "4mqV2g7mq3bWQ3GpCBNnBnQh85U3KkxHNBjpxMMm13qCeJ44vJLHyvYWiZwtd8eak9hBGSz7jbxcQBp5Ah75aeFX",
  "key2": "56wnXnZ2f2qixAV9KCQTi5WvzmwmHTB88iFtu4GWfzG7pQuiAfPdqKtynuHC1H8xNSRyGCQE9hcbPnWmpZ6LmmQ2",
  "key3": "4CFgNxSBmDgqYMkPqUL2TMYyVSE9bXyMWTcYbkV9vt7qgJFxfM3PMSMSpKdqimVXyTX8roiDJmjzZN1vw7774V1g",
  "key4": "2JM7WASwBG6zBPoecAsGV3rLaJc2Y4vYV9JoqegAHEsWvRFDCfR81kLNY9Wa5HEvnkqWq2UF4RsmKMs1oeVYiMce",
  "key5": "3gXB2TTWbMubJyeXPD1DqFnnikLxP3CosEFC3rzmiLMD6SgcwDCPkn4nCN7nJENjAMdEqBM56BLBTVt5jsfkVsxx",
  "key6": "4VWnWiDMPeAG3LCqiMbq4kjKGctYr8Z2QanQdxqBsGsvXmbKReaQS1ttMayV5sTxb8hSCn9ZxRB7b3pDW9th7xsf",
  "key7": "24mw3qMCCaNufWk72rNDJCtRoJc21LjFQddkGN7q4VrnHAaunuYgaqDXF19YuNyN8nqreKg1ixbBvctiV7nV3kYD",
  "key8": "33gUyTPn6kuFEwHy83S9A7DaxZTyB1VRowXmyhDyiuTbZxexLs5DhMnvt97chY6CiQYzo9BPjWQg5WVQMmehoRmS",
  "key9": "XSUG5gjVVTjGq8UdxreuoeE3mABjMft6fSzTBUkrYFzchW53r6ZNDHCTj4fxkJjtfPoFYE17FxVim1Xz91eLhSh",
  "key10": "64coymFGiDLKF2AngQbZKYgq2MYhKwaRrTaj4ctRb6bVVfgMsUcgoEZ3tVc7kuiDfxasRCoio86Tk9a2Jaf4wTpD",
  "key11": "2Wf34xGb4fSyKNqMbiFzmZj3GAja3Ug93abaEM1wueAWEFWN5X1DUA5HJ4PmV5L9RjkBMw1ED4eBQw3PfvKbbybV",
  "key12": "2bTi8BVjSkZZ9mfd3xLDgmMzCY8Uya6QERcXx5PbtRG8tiMjspPRYvhipfZiKXESmk2twbczA91DmGByg73H9hfd",
  "key13": "5MizP23USd1djbtRXMX7ibymAQLe2GnBgBn4AbAQUp2xBarvfBJhBBg6BLkZNXRcLqcu5aAJmhWpUrQR2G9GTuBe",
  "key14": "2vaTXqjdJmKYPqjvDedws9279xTNVUS4rVPagAio8Vk2kSpHBK1ZcaStA734kPsFeLRCVykzNEyZ8Lb2PJuCxjhD",
  "key15": "2zGZMY9bP6Ckmq2VC47iRoUmGvVXyj1Ch5SNhn1HB9s6TsTwGCNvZ6zk6jzkEGT8CrW1mBvxNgVjGocUBdqtxH9Y",
  "key16": "5Uev5sKuQ3uLS6QC5YheZx9pQJAxVq6kjfV87youuvDMr4QtaATi8yTDjNtnE8VXpMRgsZGZPj6NVvyMV8zjkcqN",
  "key17": "5n446fpPXg9T34T5A8zL3r8hQig9EPzk2hfATasJ7tN3C2HyvsKrBoEdBMtJ8Jra5US5DuwB7by93ZeLfp1df2mC",
  "key18": "AUKtM3JsvTtVNfmDVbv5D5VFcJAKNvwQJPhRkPA4grEWAN3ZtQUHoK9H1nZng5TWndwp5aU93KgHC1gnnej1j5s",
  "key19": "4UMzf5Xt3KtjJamhU3caynsWiefdGWyGHXM8Ybby5pWfSnpFmKeyDb5yFgCDsTJr7qEHwdnzDHzff6aPEkGsiJNu",
  "key20": "3PkhpfiaFafpzj7SVUmwETgwqK7oNC6a3vEGbNS2gV6sgMVL9eHWiu5MTNCarhiPpfdkHG89TMdWDkebFifqWhX6",
  "key21": "4B774vEcitWsHUPgot5xjLoa4YcpMi3ty5weyGNzMachvEaBJFJUA1knoBeuwvP1FjXaK6Yjzn7ZPDo3bQDKFTsU",
  "key22": "54rM9By6iPB2s9gJDNZcXMdn4S3Cwbnf517xzLZWmmyu6wikcExeWE62dvNyapdvwZ6ywPLqLfLiEGeMFbb9npHq",
  "key23": "4ffqrVehELMe2dPFiGQfCNU6D6xk4fqUienhNUDsMw74h7uDke58T8KLnRgrwvk4QS672qcyjJhmP7ZsHtXEfk9M",
  "key24": "64zee97nUU45kKk1GuwZP3a4mKbKuGKFnJB1YsG2LNsQBTx6tsEFkpXPshXxksB6NP1eAKNBWDGzDj4SwC6o6gVk",
  "key25": "4G9vqfQaMuFKHpowWZv9xWuZrFNaKXDqPLQ8qMfEcxQyLjbfD83JiRnxBxnAdCnxMeoeFNKP5MyJD9Z7VDWCaAqE",
  "key26": "2EcC4vfHQeAsncKpfsTK7MM2GvuyZj6M6dg1vrCFvVmDoewSnzoPAAVyQZrnZJrAdt4y1fisHmceck8esHhL5g8j",
  "key27": "2e8sQUDvQeLyD6gF2jPRyk4gvfoqBJNvQBQb2ttkhZwrmGcWHJG1x7AqV6bFwt85WF4nxxABWwrCwqfYWvHhprbo",
  "key28": "2dkonRPB4w1vSVs2GmhVoPvy8eJmGq756n35DXoUkgio3e2mmAQgF7dLRvR4bYwvmVVrHycKpFSZe1j2DXzuWzpE",
  "key29": "2YgWL5Bo4XZsyfSoPjmBmypQ2N3KmXguZLaUpCcGeqZyMGa6tFUjcxMfAD8A8rZ2vcshPLvoNoYWDeDCmuzoPfCH",
  "key30": "2G6GbtweLrEKX8hiFKssybmNBsqbwremUXjd73hijhmxQNR1AzPsW9tHTArzvN46FGfXNtAv1SAfKkpwT25j3Mcy",
  "key31": "3A5mdVKKwsc7A8jzfmX6uqR1vQ6Moo1aKaUYwZ8dMeQkzPNpv2p4NB5bbENBqXjg2WfsvFJtzF5CEYG8BmXzkq6Q",
  "key32": "5L8ua1yqZpdpvqX3YdhxnssCVftt64TfVV6Yn4Ti9QDB95ppVDjEQu9uFfKLHUT7PbqSitvHEtumafjPP3Msuhoa",
  "key33": "4znrNb659EF97bx8oovghxA4ZLHzY74MqEQfTsteETnm7iCRHDkTbXDzUhUJY1eZfKhdoMGSRZqXANaioULxYFaJ",
  "key34": "36FtjjTZAxc372PejgHTLis5R6R8Db4P4AZnLFqfNNtFeHx7bPqarYZAMFEg8K21hdD8gwivwKxtZXfo2D3Rfdes",
  "key35": "48o3Sic18YWv7Jn4j57zJrdNxCjtkRWb1cjSoyxm3hr2oWWrbTGu2k1rujV5gk7NqBqVVMm1YdzSSg8rxinZYozD",
  "key36": "4Vt5jJgEFjzkLQWXPE4z4DcKu9sLytpAQeYNMcNcgGxkKsnN4Em9ff83p9VoFy8D32NLwahTywkvMdT1uc7ypVcd",
  "key37": "5Xjfd8F3XK7PTn8eJaaZCQrBx17LZNgRsx4mXwZNXpQAApTh1WZzGM7cXYRU5LsXLHhSUm6AxGVEJhcMbQ7dTnzS",
  "key38": "2PtgNwdRnQA6Qb9Dt8Y3FMnQAy3BgNsVFJnqBLiXLzdovAdNLQhBFnBzz2wACHG7rLbmKhHAh1d3jYqVAswgGKYe",
  "key39": "3CeoHdMCziei2jrrEG7sCN322pPB42QaRYFUhNH4jJ3uJhk66KzvB6Wyct9ord7pujtzqsStGYk8sEow8Vk52gDV",
  "key40": "2A2oemKKS5Z6icfPNJ2PeUDZpNk5kQ5oDh2U3fu2wGVhAutvduywFpoSvk1Bi5F39CxA7YqvyE26RwBngUhiQXTw",
  "key41": "2oKzL9jTz4keGeC6Fgg1jxUioYaNmiJEGShDibxCasAZnGjxDZnd2ESjx6NpMKa6P8fHsRoe7eqszRaYwBQhvRPW",
  "key42": "53JggB3YYmLLwt2dMbDM8TWoCwtHS3hWhVrUVsEZakau32xckNBHVk9fJCaH1B86HCKfWRuDoEXyCXHjgTJps4W9",
  "key43": "3wuAztVxFfE8CAs6kGhCxZpNxopDZ5mKvYMyLFtnEezVecY9qjAeeMWsRBBgZV9DbWuW5Fra7SucJmaN1nf9mKSp"
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
