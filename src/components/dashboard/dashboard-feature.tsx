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
    "4XPHefLEGeZaJ2NhSZT55p5jNvWi88dvt8B81EoJ5BGRRMV8j7yi8Lq4XUmtEiUiQHG6DHUqCfhEw1vJctx9dhpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ezsNQa9zkPQ3C5986yGuRArs1A5jW4G4wem8sjW4rESzxXR1sxixwaC4Kbwp67SWZhuQHwuM8ujcRQah69jQ4k",
  "key1": "QCat7rA1xLveU6GfycYaTZy9KsxpSsQRD9z7vxU4pKHpdDJ3o8PYKfzUWBiZirJZdNq41YdL4guseGn9TbhK4Re",
  "key2": "4CQq3uHHECbhsvnLhEyr5d3YyKvRh793pbuLHvFoyRh2hHLLy4G3eMWauBCncasstYaAtR9vsZd8FCmFu1k8o97k",
  "key3": "2Zr8byKScRd7QPfRJjT6SzjWA1YMf73sd177LD5CYkvUGW9DFJtC1PtQkm6SQYztCaJAKH8fmxCiDNFhGzPU1RWX",
  "key4": "2T5NNb1qP7hcbjU2ZmyFMurDw5Rym2QLjpjhkztX4EtZcSYL9dNLiHoaFj3NMvrKpsRZgoBeqAUirP7Spickv3PA",
  "key5": "31YXiZNGqDFyWJHUpAa42KSQJcbMRGr1YVzVxgdZ5tLSgRRfeUNhUSs5g5TYAHknzYgw7BrpV9Yb7rUPQQg88PeS",
  "key6": "Utq98u4q5mvaJRGwpBz67YMDekDA9xtkgfqWbwiY7LVjSrYapwvvP9RNoFJNjepV3P3dZ2MST7tVuWfVer5mAWe",
  "key7": "4iwTJZi2VXNp6MjXetP1e2susR9PyJhc8sWiexUMErFXx5nHDf5abaseGpeK9h3u4zYCRkaPHq1CnimCBFbvRzNm",
  "key8": "4PdYy5iUxo6fn9M3HtnErxEMkagEK3dtBpsLCe3pA5oe6sYTL4Bm3JHd6V17uVbUeaorbXFLNGo5C61jHjHF3xJd",
  "key9": "tdYStXa5STrJrAr3WEuBi2nUbj4E7mWz8eiBw282dukQZerqmCwf2sKPj6jWQJ8RAAsdkH3cnrXwdRaZYBNApan",
  "key10": "5uZSGBpK4aavtaNYxhLdckWDM4A9rgZ6a1zH7SfLHkrr91LRg6xe7qyGz1WYkvd7QmstJtSrRx1W3JuFaHwuRWA1",
  "key11": "gwi1UKnJbYY7eMQFVwM9aeyCQra88sMSFLgSqfHznKNg2aEss6paTWhEZoZ4x7Hk7u2xjVppcr5MCMCTCMZakdr",
  "key12": "4CKQwqW4YgacMYAVHMM4XNvzGauWJksZC2q4o3RGngJgza3YmfKWTfHfm7eQud27vJHGhSH7FHxZnnci1wmBKm3e",
  "key13": "4uRKZu8ZAvmAxkybSmF5abhiWYScqe2A6UzD4DE2Lrg1GZMF9zR8ThrVrPEuxqGRN9SS3CJhKpaoLhaC4pZ5d2wq",
  "key14": "2yiCY7wpWRcA5QWBh3ThNmiDE2LZkSLWykvrX9QExjHCoa1rt4gc9xEg6RyHJF5j2ph46CLTmXxWAUmoBMR4RPUE",
  "key15": "4AzMncrYiRTZ8yky9WAFbdttkE2Ys4ybog7w2vta5WkoNckzLanprWGLKPGHa8qvVFBFftJmozSFVas9X4gfTmVw",
  "key16": "2ghaxdgZQGN9zjMvoPYQXycXGbYvuHwRKsHG4PxGdSviqPgQc86jyvwD87yp3eE3BpiahVkhp3d7pjqpZ2sact2j",
  "key17": "2Mrh4tHJXgUMALZs9Wokh3AuDaSH9tVJp1QNYrjKFppYFE3GmzxSkMzJYtYABc3b5PMTzduq7suXca1pDByc5YAa",
  "key18": "2naFJaXNP5Zm4d9dKqRVM9QnZSD52V6TznpP1mR8ubprbcQn2gTgidWVhuiegPDsRbhgnPgunAerAcPY3gPyM3uQ",
  "key19": "Akrmm8EtJVuuWNee3dnefxJuj4zzvWXXEFRqeko34qwndVu4reaJ2uYfkkpt3Wt64z1vbPyUPsaQASzFgxmQWzu",
  "key20": "4xE3CASCC6TxLG65qT8r5LSUjF4qSySaikRB397hBnLvM77WruJx8kzC7tcwutpRUMkYFkPvAz7rJSRka5eCBgL5",
  "key21": "2G65szW6XTvu74Rebobi5An4KvBDw8H9DQQHqi9ErguWWAg5cMes8NSyCLJfZzDroE6fTMBMwYQtXNwLwY5Dz5PR",
  "key22": "Y5EYheQADrsGX8NcbXk4Bx6XM5qmvAh9chwfWq1HofxsxxK2sKigBwQtZjRGFGkc7nrRRvtgWZRBRzSvbyhSsyw",
  "key23": "5L6PEKiQKn2zoPCxxHXoioJesX3WjdfAJrWefcUrfDC5R7DXGqkyRXkYWGMASMuMURbbv1FG8dPRVanNZNibyRXU",
  "key24": "3Hbkw5yJUPgWzZBw9jEUin1hTX5PJ7Y8VgTypBadUG6Y4NNQTUrmeSQ32wEBu1TQ2SixpR7nGC3dn4XCtUKNDRNy",
  "key25": "4RCp8x6hLLjXJ6N7MBW7HnTtuEADm5Tryt8LrMHN54JZ9MDgdYUWWvPgYALsG8yc7BT6feyXu63NRJ1NXX8bgLs1",
  "key26": "baDEMB1VcXdCSpsmn8mFzW2vumcKfVVXdU34cu7E3EcMvQQvE6dDmWDqFefsnjfHER2rQxxPPAd9SAbazuxA1bL",
  "key27": "2dEV8L6EwqQRhDR4C7JDGTQSBUjyoPbrGSJw6hQSXGX3hmwHfxGwXxevTLaigiU1x17QPrUd4dQ74xoAdQiT2H1z",
  "key28": "5xQ1gm7kCTT9uphvefKL7XAbewyznqNFpfU5NYkiJL2sRs33tv5taoStwpVnsovDB3E4X5SpgzhAN5jHHjhXNZWT",
  "key29": "4NgUiJjfG1bdGRitq8srk9E2VWqLtPwakiAh7VtHo6AwYvv9s36xh1tzxZtKeyurqDZYBy5iaSzwtywxz7MeNf2A",
  "key30": "2nSugkpoe7RGwvkE8EoJA7cKjJJr9tPFu6SrVMhaLmJMsyjc3FNtmBndbjUGipj18chg9d1dL8G6LjMczvBegPFb",
  "key31": "4VP7an3MonTYE6anpg8V2mtsQ3hfxUZpsZhb4YmwsWRemrJJX7gTgHrmSRBA5wp9NmEiFPsxfHcfsMn5PP9iAgZv",
  "key32": "mQakgoCxu5nCdEEG3w2nx7qiPAi2CKdXneJmmiVdg9Hu8WjoC2St5nWiQSDXiXP24Nd2gZckZzi2wsbwoVHjpkp",
  "key33": "3ADdqrP9CouUeyKKTrL5SSQjqPdUzDz89eMEbeZDbMRs85u68zo11rHCfUdDCcoJriPro7WG6P4vsnhqB4rGGfSd",
  "key34": "5mcRkWMC8XLJusFgbYbsvDv1Ds6pMANdjgju7qhZzM6SYGeUeoZXvA8Jj7mUp4nzNx4HN9Uai6AdLZwSZYRyat9z",
  "key35": "58koqYAoDTV4Xq3KStmwNa8szcUCgEmGBrbXYwuNP8sA1bYX3xjKMLPTjCUiFP2vmnxtqzLMZ8djWykGqzJfyAsw",
  "key36": "2YGr8e2KQ97qNQehxksQYQTbtA7N7z4jp3C5fkNjsJkLAnQTVpkuhQhc3Srz8Z1R9mtoLXJs5TJmHXyagB3XYQLP",
  "key37": "3mZEeFFeJtiXNtZmc5VU7AVCPfQJxkH8apYBnvHbd1Ssf5vSNqzkEWyWWg67JTtkiAFrnpVk5YVunP2SsYgFgGZ1",
  "key38": "2M7h58eWEe6Ks6ove389G9wcRMJh6uVwkJVnJiHrZnsbQucRdLb47nvp8Vw7Ze6fLrv4NqjW9uttAwakQqy7itBk",
  "key39": "2mPvV89faW5wYHFbcDuQNz5UAnuT94VctZiPeSbA1bbgaxPoe3NRLWJa8FdverFvEjujrrEsShhwJkK8rm9MJJ26",
  "key40": "3grbpkzPkJQ6LuwJJBdhdiWBMdy18qm4LJKHLTHdKRUL77VNdGxbTxYYSuohJszKkP7RkDN4p8GGaCn3mQobsFwv",
  "key41": "w4rjjq4JJPnLayXtE19VZSwTPA9aSmc6hXYqUtdjmnyw5mFvqaPfFNsKdSR6t5UU8scdcbJQLpAC8Ma3bdBpKUy",
  "key42": "RWtiwF4cT65q8whZZJjEL7kruhLYxQcktkczyUqEPU5EeN2KNtjvsiWXR5kz2J8YNaTcpvnm1uc5qVjipE8pRNb",
  "key43": "vzY8N6cdVF9C47kF6kjahTcnV52tEtVKmQfUqKCdo7KGcBSRa7BsuE67UiJsJT54WMHnzD5bkjdZLbfPpZeP1dh"
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
