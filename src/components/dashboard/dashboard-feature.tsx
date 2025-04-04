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
    "374jZsQVQVu5DfShLjK1P8sGnELznPspbCU7LgGQCCmZusyX7D8utoGpqQG8Hd9z7CPJEvyaSqYryuLHgyTvdYa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35SUSJi9jhpd1Xx4ZMPH6x8nAHtrPU9Wcajy77ZgQQv1oYM9WujU5izWvJGsUezYh59SRwcwceRdE7HFSy156Xvd",
  "key1": "Tan8J1sRxWnuMD4ZgbfpiExzNt31C4frwy7hApwQmXLNYD9NpaTWCeZ3iwpqzVehGiHFBqpL8WDAXTnsx8Z1uA8",
  "key2": "44DJyyGhTdpoeMW9cd7xLWA8TvqtYBKodM85gZapz9K7FBNpLzeKr834xTBb7CNiBrobiTV3ydAmq82W2hjdVgwC",
  "key3": "4VrYGkLS3JxcN1qydKr1vjsSbsnsmMEgZHUPcsFEtodT1QbmF64LYy981ojxMyyhEFkAg3FoCcuUMeENH3eEPJCc",
  "key4": "2FGf2UQvTLNUHsTivEQMy7xnDHMNZNbrQGo9eifTLpwB4KEquRDzZUFcP4CmnQfV8pCFC9tcji64kdTmndvvKUor",
  "key5": "2187JX8QxH9RXYMZTXncdudiv3Ce7UY1dQK8aMuTJSAtTGHpwKdHXMUkzEp4kBKUKg7MJ6aNyBMWYEpZAdqSBkWd",
  "key6": "4cnnKbFAyPoKRk5VJgevQ4VwDR3BoHm8AeH2UqFfzav3X1AgP7HekopEs5Yam8JaYpzvSZhFJ6U4EdYRDuvmXT1t",
  "key7": "35ctNLabeHWt1mCXj1pAtvG3PX7x57qqxWwKBU9BHkGTMFEJSMnQ5NKnm1Sb6MANTw5qu6xL1qADwaM3RX2HcxzJ",
  "key8": "5zXf4PJN1LzMgwmWy4xrEgm7eSpVQ8rzBBDKCRiA1hNyioENHVsmwnddYR2BAmaCFECVUznxoWd9yx7sj8FZ2BUg",
  "key9": "39Tvt2HNXq1kbmqur4fXwJWTGcgUfFKLvAs6PsEZMMqT3q29KHcjcxP53wEhKEnKyr8gNMsBfs5vqLhuwRtZK9Pa",
  "key10": "4ufM8mWAzfEwUEDyadRA9G3fPzRsMRXQHHmyCxcFjqZGaNZoDN4ksLZ5xiQM9GQC3M3YRHS9wSWNjePW5GZuVvS8",
  "key11": "4ZN2jPsEy2S1qay9uExbztXpM3sNw1GTxvj7dCLHJoQsuemaGpWNMLhuG2KGxm7PM3Wa4wK8ogMSq6N1KWAZGATK",
  "key12": "439dagJSW1w6jXcFa9TZcH7cxywJb3sXzNnLM7r38zRUFWiMQ6AourTDKa82afEUJeMwsFDx9xGkJzKdPZbX8693",
  "key13": "2CmwrybSESfJ6mRFK8rJweQS9aMCev5Ff1XJPfNUbSLK4oa2mPqkiN2PgkPPbzFjJcuHdhhs5yE9eTTie1qD1372",
  "key14": "ZaqJdD9Erwut1VURYxGw2g4GpAonb8heoT617MYuiyDTh7TSc9xzkticdrMZiJdrUUad6dGgpbWyHCCso17Lvng",
  "key15": "2vVcsgg7WceKdgByyc6KvYvo5kfqNABcJfPD2exmnq6PnfSDRUSf26JPm4WSpMnEtLe5tJNcgKEqkEdAfzx6G8rF",
  "key16": "LcKn7YxJN6NwTEUXWsuFFtQ7amy8tGZySkBkgqMqx131ZDE3ds8TDmko1DYXht1iYbNGcPXGpj3WR8g6uDrH1Pq",
  "key17": "4MjrmBsKj7FgzXvp6oXaN3G3PaBAWXQbZfwDQCQ1YniNyXqJMHDFDe9vK6UJKXbfE3WXuiUB8KnbPzTyKfrrKFxb",
  "key18": "2bZvUbasWVaCcsjmFMCzjXg7SUtzQV8pSQJie9AXmg4zsEfWjhENZQg6UPpgrq53wbHvG82TQEJfr83KbtvZ3sgM",
  "key19": "2hiEZY2VgwsLr2zrPReFL9C9otvmmyzBfzMkNt5QEe2YCHTiTR41rtLy1oH3HncnSiXfxCe9rXiMN8Bd5XkpPkcH",
  "key20": "2MMzFBkoveoVs1HBmZGeTGEJFyWzaitM6tuFZNJZLZWSD6UtQt5MKMZoQZ2BYoiUeCW6v3UcWCxty5sNJ6QP6iyj",
  "key21": "2fkzKz1G4tv5dfCegyQakHsu5RNayBJdUMgdyTmoBhkhEA6gXFsFGxYKXa1MHAZrKebh19gVc9ANzeZAPW9M9gqG",
  "key22": "Gg3RhW8ptn263MAGYnkL1dSnstSvnXMiiNSW49mVvCvcTg1MaW5mPv7eAf4srgqrJLwpYdKJdSZDwftJ8fMNsBL",
  "key23": "4x2foB2pAQ7AzvbjB7HjR971hxbmShVejREataRa5nXxcEW5dYy584JhKpppjyzYxT19ZAiV8TBcLL4QLrAqWfx7",
  "key24": "4GfSAX2vzv91Aneh43aadq6p12DX9LjFtNAdAbeXhS7FzM4mxYCJPxy26hZDLpc8uigbpRAgAbAQ4FggmtgA3THX",
  "key25": "3D8Ppn4wKtBW4GcZEnkvtJUcFE1SuoHeuGdi7ckmaUGTbMxYrhzG9LDao3KPvzZc6JqX8mmGgVQRZG4ZPGDuqESX",
  "key26": "3K6XDENGECRSs9KAHvu8omieCDHbzduu5g7o5eU2VEU9LTjHXwARjZMhYhmvh4NsMWCoJB3Q4f1N9wP1iuNmyjRx",
  "key27": "2z4Bnkft22Mih8x5MperSxxK2QY7v37Utw3fij3CgqaaguqsQpreEJU9F4WH7RLJd5jraMi6TfBQv8tgtUdTUv4e",
  "key28": "3dp5QyXFDtTCcNZQYPCK2RzjVEMH2VKeWi4F6RnUAB8ykB6dqzCdegpWu78BLQhgbzzT7tJyQHvffdxH6HTnuBru",
  "key29": "519kfAQmpvfK8rAqCyn5YGgcnMoJFt6BswdjNcmzKXQW6W74GddPJ541LPiGDd5edhCRadrX7vSjTukoXRxBih3D",
  "key30": "22xbev5DqS3yh248qwCuAzLFwVJ2GrxjFG6NEso2T3j1fNEQMyRW1GckjsiWWhjegiS282TivtT3esHCLCLA9LpG",
  "key31": "63idSjnvcXiDQu7hY4BZwwph9WanNkDgQ4Li2carTPeX17bWELPStxaJ6fteMRtWwVG9jwUtm1qHkMFVPWwX2rNB",
  "key32": "4K5LG1wjmsD1pLtooeXrvgicXK6Dmmf2aNhgkQ6JRKa3bNs5MTMiCyCQYPdfd1WeTwVbtSCciRLDvLtdFKaWKZH7",
  "key33": "Kwf4LXTzUMBo3wJ5KiXcUi6NZMPHdt8ciE89sq4SUGE9SU77eLNzV9AF9wyi6hjH96kRnHxFS8zNmX1pWu8ejZe",
  "key34": "3NKYbwUehwj4GwxpQyGZ6VVduzwT3BeRRpcuTELnECcQdSvt7F1oj9aUxAoqTPKHVv7NZHaMQZJGNY5PFZTjbN4E",
  "key35": "2FJ5i7xY5b1fM6twf9gdrAJ3acHxLGy8ELCiP4deSkB4mSbwjW3UAnJkJyW2dXpo3dPVqhykmJFKycWckmJhcrgK",
  "key36": "3sWwNuyNBksuTPAeyysWNfhdX36SkBjWhDrG3AC5h8NUtZRvQnww3PXyAED12rpHvVbQ6xwqXrp7rnCiGswJ2jtY",
  "key37": "3TA95cSPNBku32LhMnSc5TbvYGtLCaggUZCqzGQNCeJxgE3gmgPCv8rghnuEdhPw3jA55GbsLk1GQ5uLpwnZyjXE",
  "key38": "48ii4FaVT1NdB6zpoawFM8hPA979K1N5EpCabxM3jLLU1Ax3mwZBhc7NoXdwn23gwHNiAnRjrinYGffhdSxHEegu",
  "key39": "r6bQsE5ym38LvwgsLA4n2tzg7GSBFwt1jCkZsLteNe92pQbMPnxt9kpMqXxN79v5KEca5DbGKgapzLBSYGHwb75",
  "key40": "5PqptxXsDBJNXyhy7uv9q8mDdVWjUxMNEXyDdLi5JXzSqxWX8SjCCHemQWkLB61zi2eSpf5UVzR7DnaHFfXpQsQ7",
  "key41": "2zqcTJzBjZuWrR5wyEvMATVudNCUEt6vqNHuKvP7Vi8yyYkWLjzg6x9MmT3bqtryWhAyo3BMoMzSJhQxrthGAg6g",
  "key42": "YXoZTVQfMvo1DWkMdeHda6VxNdSe4PjqY8RzEEZspJr7GT1xsYV2FBwtm1msCwjNovh5JmFL4UFRggdadiseSgW",
  "key43": "2aRzXaGx7K2oLi2cJ92fZUCXrKUpBunts58uqUdfJpF8p5mMGN3ufG86hKk296emNQ5gQbL2m4qaQK7bwt3q73jy",
  "key44": "2LBn3DzVXD89dVxABwBZXioVHePM56d1Kg1W62d9UDK7uPEvNzRbS7yyvq8kky4AsypNvAcsArQF3tpuRVT3gDN8"
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
