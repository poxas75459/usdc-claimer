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
    "3QhEYPNwCHmej2inYRDrizKhR7zzMwSxcniNwcFvwGrKsePaTh9iCUFLPibj1DpRNsJCfFiEENcoAmRHbAnYVXkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QwDQnYnwLbEXceeriYZn6TiyLU2G2pNqR61VvNuokt94LHEbwUbQded5zRaGPYhWDUBGbByUjxpMDrDcfU55mdy",
  "key1": "SsfkJEZWG5AuUKjLqZ92kCJJPKBP4ThmufbMQ4XZtvr23MkpAd3C3zvzDS7ggECQX3Mi6tfZdc53wHWW7MHzjuV",
  "key2": "4SG1sTsN1v3u6DLair8M4Cn83XGSLAooR7EpKNTwxSMWDmxmLH2tBRyzQY2aDfVq4aNigZxQoa4KxxDDCVaGKaLQ",
  "key3": "2a6TEowXLjUEktpkBa9asKygVKV5TzxY5HZrgEtbM8nuupMSk87fUgbzay3m4V8LZstuqAM6igA6X982ajnYLpzn",
  "key4": "Ev2MJiLqB3y5B7Fm4cY7hgooy4EVBaRcxhh14VbjWrpXnpcVpu7sc2TgPuZdeqHg18cjg7uvLTdxvAH5fcrFSnh",
  "key5": "GmEer5U2Xr3FZkS3EzAUuWfMT6uKUvFeRSQQEuiVFsvZBnLswMJCvoCbKxAkwR5xSDJ15nm5gazQKZ1Q7yxB5jL",
  "key6": "4R9reWttLwz9BL3ZVxigu1cYS4Uf6UofdZJEDU6159UhD4mx4kEVwCTGbqvYXQa6ciN2LTi7hZS86qe6UhwFw5wC",
  "key7": "Z9CTgYz9yoB4hSsjupRiUUE2mafRTYrwZ2PhKyZf3tGEpR2USoCaF8Pj4VGyiTj9JsHKePhGrhKT14mkQLqD3GH",
  "key8": "4aj6VSsRU1hJ571ZFmXLDKKZhsfouB6NjYdM3TALLsJuo3frkBjDHsAenFKqkykjQ58Hhk2rtm7JYXX6XeN5eT5N",
  "key9": "fzeMvMSKJp7TVPHh1vgy3rghFcvwJyCZuK3aektistxh4JMaM1DTRP8PZLu3cJewn6eQ7KbPhf8HL8LcJbP5v4h",
  "key10": "2rr1itYWYvEyinreA64EhMspkAPXuUQTAekboxGkXShSv8nnrnzbmCj17YMNZijUbpwTLTo2rx5uhnTEQYpcH8Br",
  "key11": "2krTLq2frTp46No9qzXrepK43edqa5MNaDYJJxiB36a2Y88FucfMUFccxka4moT5pvPKDY85qS5miJpD7AAT9v52",
  "key12": "2UQbQoZPDiRVeftYYw6c7vnFkVTC5NZM2AFipfNtPFKt31UgJTxsEFqU5cuALc3FvhAW6EEs9krZuayFPaVaik5J",
  "key13": "5nLUMjPjCatLSRTHkTSqg2vyFettbupGUyJcDnpS68DXvNirxsx1JctuFerzUE9rgoaLbARzYtnikDe28ZxQR9GZ",
  "key14": "4GbqzQAhUA4KQwCG4aXBxh9WTzjbrmSQgG46APuu9b8he4PTyr4MiyFyHxUr7MaG3QHFY8VBsUUQ7duZ3X22J8a8",
  "key15": "4GNE2YgM24tr9fucNH8sHiZTYFYAftvuULi5csngy5Jb4Qpr9Nbzbugf5EJyjSHYA2NmDsezb8aQHfsjpC73mBE7",
  "key16": "3zUD177XQi3JGCkLJfyXh2EiXNAXYDbGtRT7nkUMADEPq6WmWpGd77RKFHJ54GwjJ8uozYUYkRP9uQAmRqpqLXwd",
  "key17": "4qDyv6QxpPL2SXVh5wSkAaazdBiQGBP6PV6CvVz5Fqui2PNwxdQDCjt62h4U4rF9CkENHhPokVqKjAVsuiCjvUJn",
  "key18": "4aUTqxPVTJuiq8Uga1AtppLHhqcioo7AuNaqM3xL4EoePnadaUgHxUvQy4z8zNTrEsyNgvJvWFW8YLVgXQn2DGA3",
  "key19": "47hNqh6NV9uLUF6CC9kpN6qwqmmXqePrZ1HCLF864TZUt5wNxzLqJx7RQFeCSnRPh3CoPVnRjYYjyYLbopyKHc7y",
  "key20": "3BTSKtvrmUCgtsZvBkP5pkSNJP1zFt8cq5SLRDXQrcE27mahMPLKUHuLWXHWKfDX7nMqgQrTMFFDfBQUvNWDguxq",
  "key21": "4e71kK5TSJcQEFvB9WDJAfsuUdudBVpQ7ZS7dXWkKLmwCuPWjXSMe65RpZCcy7eo5nTnQ8gMKBCY5hHKRYcM1hgA",
  "key22": "2os16zqD7oo1vpeDB6NdaZQ4byWNWiWqpw2Jcom5c73jFfjvQBt5jpGm4AbhuXscgANSHoVkWzd5qPQGwY9HbKW",
  "key23": "3kdXo4vQSBDRB2XrSAN3nQF376Nqd8tqtW9Pt94pe8ipHKE97m1mr8bPFnSuVGkUCbDJ46VWqFPVPRf3Lb52SuYs",
  "key24": "3yEXUzh3yGQeCMPPFbJfgYzHqGNnBNqPSchGF9WB8PziszqZsRnGNB6sKjQz3euSu8qpTw1Y3pdELfebh9VwDNQq",
  "key25": "4CJ1vron7QwCvbrAnY5kb7QBDvTEsbHCsZEapHEN3ThuuHqadXrVo5aX5NQG3aPQcPn9mVki8v4EE5FQYy6Q2Dr9",
  "key26": "CwjDGyejxqY2WFgAv2YMagnQnpvWhKGs6YNDcGBremLozjfgsq6EHxQ2UMZUVxX3SybsLW5G1uFRCD4uKrzXMhp",
  "key27": "51hA9wfCWuFhQM2dXr6ovAHP6kfcgsR6S3oEKGr6oiJBEe5KWTRFACZqGDPeKNCCmgjfyyyBN9Bx739Qyg4zvTSH",
  "key28": "qfe3FcrQHsTpdTZG3LVpKBxxbRKQNw9omE5zTBNHodQDy4tP53Zn9upENJpfWwjebr9PtbBvTDRTGGeZtDfGKLj",
  "key29": "4w8ijEGuufu8Af5LzghecbuZbnEKXAkWTJjm7rs74QP3KidKab2c8u8zMncjrB2e3QVo6eP8jaiuXS6sYtZysnUL",
  "key30": "hLHBf8S7b3bhwPiZZCiM7iziFnMoKd5khgC7XrVoJdHVSGAMdTZazPiZ2Gbq4K6SWMoug6Js1SPtNMh7h291R84",
  "key31": "5R7dqCCaQUDWR9L8A51SteD3JBm87AMZSkpUD1mC6mchBNoADxj1XYkSTrvvHLjWYowQ3qZskdYV9dMLDG6fybJc",
  "key32": "4QuFYCCCHZz4HJT8QpfDvUKjwMacqPYuqvW1fHM1NxR9gyzAeXhBoMUgwAdPF7DheKSk1XpgvsKQmcwmjiRmYC8x",
  "key33": "5fQBLnfea6SG5wdYBD4VK9RLd29iJMXhewAgaAkTHJpfgxbYSZdwdN1FcV4uJiccar6nxAiRi8trgMwC3FPHD8gB",
  "key34": "63Hyv7QxoxAYu2FoU4LVke8p47YKou5KSeQcX8oUdLGRS2u11AVhwpMgT8bmC8KMmaMTvLYknoQ1cfd1WydJd3PB",
  "key35": "2KqimHLnGWv9YGHvJsmnz5vPekTZMCh7saawsdjob1LR93WzqZZHDFvP9o1KvtJUtz2wSZFqMkrJPSoVavRwUgga",
  "key36": "3pLBwJdaPTgcXxrN9v4jtjuuQwGxfdBibst83mKW5MAikqmrMTF7Li4wQFt49jbtRpduVooGB4yTpv8MkQ3xZ475",
  "key37": "4oRJoooaFsGHYMee4Lv2eFb77kNuu1LTqL8Pm59Y8KaKoVCCrqD4sdNhPT1V7zgJyEASNDf7ksDaCqj8RcfrT2G9",
  "key38": "2dH1nH4aA7T2MjyWnUJjAX7LHutJS1VBFAAkyL8kibMmE23umFYy9MgxXrPrbsHXBgBDaZKzc3YwaFZQc7eeksyY",
  "key39": "4BwaocqNAaufmjqHmHYdTwWQWz6tKwdnC8xgN7Nh78pDjkiQSpd29NnN4Yg6w3zBh9AQNhumCmAkZfiHsPDfxshE",
  "key40": "56oAv7ddxmcgZoRgdHqTtCQBV52Mknpy7W8mWX7R3GrdR1hXkcdc7sbxq5gQ5bbXbdeBJv3VsNmWsrjEg3ojrqdy"
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
