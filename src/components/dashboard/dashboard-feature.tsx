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
    "Q2EvcUCJRtxYPpWMrP9jszgseP5Wh4UqJE1T7TpKiVY35RqN3uLAtLeu9QJCDxegfPv1CQkkZoFE8sXz248xSSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAbf8qDG8S7WGqHJSLN7mtcvKQKJPg1gbeRXRaPfYAiXKTN5zecd6RUs2DgWYeH8eFayYqGN4uE1fMYG8iSfT8L",
  "key1": "3Sk4dMJnAY1y8Q6ymqFn2rWUh17Jzdeoa3CAigdpxd4YSevUdGcMwC3tFYK91mbKrBynsKaMFH3bGGar5C9jLRDg",
  "key2": "63SmfCEfoaGNwfiai3bm1PTcDudUNqCZY1ciJDhzA4Wxx6a9JSsz5LiFQPgesL1c6X8sih8nDJszEwAb3EfvxV8k",
  "key3": "43PKkJ4xXVEQDtTbTvbPxBwXBgKX8qP9pGb9TKqf2q7quTB1s8iUVvUp8vzeuEfVVvN6d6y9UeFmqLJvwQoL4ffY",
  "key4": "5ecCDowdohMJ1SHoLcJq9ZLTkFY3ySXuDJyuzrUC2FDpxkriqfsbv6Z2BziPDqFfyHpSwXSVHap9XduZ8khdKdoN",
  "key5": "4cAcXvxMuBrouJdRJbgLhmKWe9J8sXVVjH64UGHuw7iHwuv3diZkFr5YGBZbWXcgFS2Z5yDz4KoekHy1DKxhBnxE",
  "key6": "4KCRZibvBbJu3fUvv71T1UmxvVSVmu5UtYemHKUQ9DNBNMLJz9E8iQ7iNv5oSpYEvVcv2iMGAuCT2mhoVN3FVLYK",
  "key7": "2Jivgr7ZcbanKVjLsBNExgbQe8Rw5EGomTJc88vCth3gP1BeueG4vNDPdvEJzrwpJMVYLYXCUP9j9Y3WKzwLJpCE",
  "key8": "5iCkwfJUewQqxj1WJeB3y9cJ3McdtEbj4YWcP3hM7EU3u8RMDAwVLpAi2KkiPr3v9xSTYebJTBLwsmQVyT3h2vNe",
  "key9": "514Mvu9pzYumbbrF2TWD7bLLi2DQASfDDnZ8LJY9BPghG9CR3MQPNjxRfHhLHDEWSwwJASnAwYXRyCJ6QhEbVMM1",
  "key10": "3gjUW7Z25MWNbmsQx2m46XPT6EzMZL8SSGbjEYbvXeJjF4TESMrWBkKEmjhuqcEUzqgmTtJpjBWNJBdD49EPgqMK",
  "key11": "564YmsuMSoAy8cGdo3C7RikkNxE7NgDL7S413nPKHhkSvkwyrDZj49K9HaGK4AT7akYx4dmK8bC6KKFyNNGyVDFS",
  "key12": "2WVUTige1jXyV2m1tmwCCaLgVhj8YhxJvHJFVh33z3y1yvVnqqSYX2uCFqFuDW8R8PjcSrRvainxPNZM6KSxcT3A",
  "key13": "3vZQPekWTT3WWpgLpyMzBVWaLkkYzPDTYGaXB8zg2F3aqVUbbTbYnKbbGWoTycie95NEvPL5ADvMJzHR4A4jB69K",
  "key14": "MNhQCYQbNnEsLDECwtyLw5eSiRPLSiX7ZXVrb5YioTbpQpBo2iKwkyLgTnqQNKoBmH7Ls7XCUEsm62rEDLT3Edd",
  "key15": "f7Aud9QMtMZTYnKqrMyAGvsSqgaDfoWqE5QhdfCuHH9TWncNbxKwZNWGAmPvoRaCwWxmr2JEt7uPvXZrP9XpoZ6",
  "key16": "46tY28fM8pDE78pXHtUpNw6CS6jX755VduC93iZqhM7e6MJBn8bK8kTiJPUiNUEkRvUnYHY3gPzmiVUdHtuQc3kJ",
  "key17": "3ZvcfPAgHgjhFLzGaFL88frSWi8tcgWdZcJTE5yvTZZeukLQB32djtMgiV662cB4PyiGL4NsUrx8QyHhs3DsjUNT",
  "key18": "4ye6282xJbzjH8KaA6kyienpFVz9m3nNoDLjYoKy1waXKMyNK32FCMtdahBosTBmKNtN7N1stMHLHTrf8ZaNp91V",
  "key19": "3WN2V7z6u9Ysju22u8mhLY59Cn1t1vo1wW78zDEvBiL5J95otVxnD2vYbjF321vAfj7RnTZ5DiJkyKc6PSBgFinP",
  "key20": "2eahd3ws6o7EFooHE4RRSzLvxpDS5M4G3BCoywL8R3eSEZW4Dwd3zBdJCzCaeGMVpU3T8FQX1iziTocxeLseCezg",
  "key21": "Lx9QfzWKs83xPgUsR4YPZsEQspYXnrUET3gW65rnPx2dSd18E92Zx1g4wN7tcvVK4CCbr29zZwKt4hFv3tbqsdA",
  "key22": "3MaqFxkFvRC7xDUzrBgiQvE3DrDeoA9EjJwMHkV2wohAhoXa3JkDdcrT67N7CyWZTbm1HrWuNm2Wi9xkshsoj4L2",
  "key23": "31EikEZcUkNFXX91Lph8qiW3884RsTaxzfRumcupFpZAPWniSYjWRt5f2EcuzkodP9DBHZvsFcNPyibG3VmgWuBw",
  "key24": "22QaUqTjozL9ticsxMYtNyPMkPRPvDLZBaLCCYJhtAXLzx8Fwzj2s4utMGzXoSExrBg7oc9TKRdev5KRiWHgyJBr",
  "key25": "4DDVysAzqZJ72ebz7BRFpkzNvjxqCPy66sdkE5SvyzdWs4FFWj7nVzRuWtgzt4RyfL9gz84VzTJJVS8vwZCkrmfa",
  "key26": "46GJpoN96dHiGfyH3GEC93Ee6sGjw6EWvDoDaCsE55Rq73xmT8Z7HA1MvwiE4bJMSZAVJWRkHxJ9eAL5Gjz2ALZP",
  "key27": "4xoK9WiLn2qBfoK5Z1McQdqVVFEGs6NgkgiHsFfvoGzfTqbZwZoYUoYuYR67VifRKcojXoZkRfT7wxgoGG3cihd",
  "key28": "4R6NwQQoxm4XF8nvAWfKjW9N81NH3aEUTgZLQUCQM923mZCjqdUZ6JGgGKaYRb32r8UA9w4pGJHzSr9KtjuvyiE6",
  "key29": "2W7syZsghCTcxe2LUpHPUH8oipY74kBd7s4UHPHWz6kjkqLJEbWbEEZ9xsDkpRH8vhzLgQXDm7oeieWhYQ2Wx8yb",
  "key30": "2Ep9XRrpNkM4VfetTK42hpCYERayTDFZosmA7tC6JXsfBoWPjbhgd88yYc41xVTocAASL9jQiAiNcZcvuooGQv3u",
  "key31": "5J1zZvxRxBJYZ4LysHVZhkHDrDUTbPhbTURNyx3zXo8mtxejskg4g7HtRbf6e1CUAbNuCHyDAjoNmFagCjtb1sAt",
  "key32": "2oHrTf35tjto8Qe4xJMjb7CGZtPsP9SjfHJWeBb9HA6PzNLbJ3P1Qrkwq9FzbitBxdG3SAMKkwhJoLTHkGjL2x5z",
  "key33": "4GQSZomD4JegXfF6LepMotXDRVX28WAA33kfZsfa97DFjki3CbWnrhuAkCJy4vEfuawtqRWszdfC2GqUEMJEXCA8",
  "key34": "4Jkw9Asu4AmPKm7g9A3Co6LT3uMiimKKA58TumfbvVGYL7NR3jymHM5JwpgVmcLQ78fudcTQmB7YuZK3bbk1paKC",
  "key35": "XyPJFG8SYFcVFE5UGNvHRJa7SoueY6SyoQYHiuF7nmhkLaDY1eEfiAGHzuUVGBcj9L1vkYg78EQhXGxkywJykJV",
  "key36": "4Ld6nkXGVRYKcjdoskXyEunXgiF2VuHe3MnBKuCuGzsYEiNN7vDGah8JeLx8w9zZv1WnqejL2ftNLBhZhsT6CeTW",
  "key37": "3QGxoPWCpYDrGpRuaJD6z56dJfMby8uYAS8GpupfrodZUt1ce3zYYthxRrdYmuy6WaLxCTwhQpA92ghCChwduz3r",
  "key38": "36eZ96pzraKH7SS7vy3139zqjBc1r3oMHqfTVAQw7wSd9CEJSNYXhurDt2Em2DvwtH1nG4kej673XvNpbm9SmcNv",
  "key39": "2vMdy4J4CB87ujansDLhE8NJoU2zo29hc8kL6yERTK55tdDAytD4dc7N1u4wiLPyrgpn86j6LKr1LYLxGGDAtWPx",
  "key40": "3VFNQZbgw2rjeJ4CKTGWrJn8WCeDU2otenjPNomdcdBamaifMvkzVkwGrot4bRvcAAdYayjmgnZfwEeLQFqLNWVn",
  "key41": "4Yvv865fJteApsqAmQQZCjUnXh9wVBNSqsa6r3peCBCcj4brozoeaJCb4rpaUXHMmGgBgPW6QYH6SH7gdWDLUZBZ",
  "key42": "5ZxaBCEjReYMwQgsPt9VX1XkHZUihdFTYptXjvxEStcYREbVE4JVtnkTe91qX38dmUES6EJEzv7zVmqTtqZS5nsm",
  "key43": "53K3sM9wNGSSZfAK3X5kJ9KSTUR3ad2n1BE52qjSRG1fjfzXfBVpZs3hAWi7xbpwG1dnhk4s1vdzbpPeXLyHXZ6A",
  "key44": "2sbpmDjxRXjgGfwk6HPbRWRh8SBXbpQoNq1eqKR9Mn62vv9m6GXVkU5ZSoGs9Kc4aZ138ehd2sdovDajBi4C5PfJ",
  "key45": "5VifBGhrs26zsLKqazSyP6mPncXiH3ZjndigD9dx9k6YzXPgCgruubkivc57zekH5XF5RNUH7cFpo9hyAAEgGpPA",
  "key46": "4txhEEGBVqVkikLGVSZ3XzFtDedSErDs6TKtBvXxvENFzkWRMZWNtQskS95bNu9qaKG8vAPn2yso4jBcmta9Q9sp",
  "key47": "F7dWD7ncRwfDjW2sgedPVqHiWr2Dp9CtHCK51moP5fpYuDDQfAM2wieYJjw8az5QdWUzbYC3srZ5tCoiXMy3b9q",
  "key48": "4FpywEiUtjeGpkJDZzsTJ2Ho8hJ288objxWAErdzW1CTs1RmuR5wxCA2MWeq6iG6DDUaKoxFFiM1isj2LrHYK7nj",
  "key49": "41cNfPUhEBp9R75Zez5DmqGTSrVSFE3eM3kNdauYUVMA3BhqKt4yS4rShpSyXZLdg6sVj3cgeHCyeQ5WFyv4pxKv"
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
