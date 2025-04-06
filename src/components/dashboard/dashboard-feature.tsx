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
    "2ymsxU8jq6CDRXgUe7A4y5bYdSnJaeGdGdXvw1AnZJEpmBrerkfnJe9Ci25DsvwGP2SzUNpM5PGxp6t5Mqd5GvaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kNTuaMnBgtD1e1ox6iv78uW5XBigEBaYhP1fJd4yZJavAi7wyGoM3T9WUp2aUsUjH54JrPiRr77YNe8uykRsYXM",
  "key1": "3JdKWQ3TWMNKo64J6RkENDpaXvi4U1TvkAko55XqD484qiwJFhGHF5Re9qDPLq5pXjT6ZrUckgH8NqNTwm4vZjdq",
  "key2": "3Xf9MY5od3uoR6nZztWiKBhDDHZRU8QpuUVmEDNZm1e5QtUbgkQyN3R3hdCD4qfTyvf1sgEWaBx35XTSLcCMtRaV",
  "key3": "Xip5SDBwmoZtmgsAeZ9eZ63paArTYFxFa7YgeXMVgJY3Qr6KDfLjibQ9rgh2HYgK5WX4zk2icV7wYk8Cqtfq27K",
  "key4": "2QemaPL7fAJqat9PR4Qm74SfH28oaHKDmGz52aYmpMcrdygyWm8VRJX492N9jZJV9uFkcnAZWZ9kFz6jo6B11W3S",
  "key5": "5P2324QjWvBqNfpnJNhmJ7S4DtdEqxYXeAgvv3qVjfaLnuGPmTPwov7cvuvFbk2mM9ASJjY4EeMLeZQuqRoMixzS",
  "key6": "3S3UZaTnv1wxw6En3JHZqVbm11RkZ4VHJS4CgCqniz5E1HksHncNZYbiLE4qdhhjTiQXRtfJX8SfS1bHxvSg45P",
  "key7": "2fb15LJCGPEZyeKp2g9oJmGoWUgEEfrTRm5cBZRULfGGfhqkyKvbC28uv57Uw2CNNnSnUs2fAhGufB4B1s6GXDH3",
  "key8": "tVGqnGzcj6qdvAbqh2LuhTPbrvqGSxT3dSzuadLSriemJZpos8Ecj1FS3wQcwszVCG584fhWzMupVmLcBBbbNu9",
  "key9": "5qW3z9qUUMxvAbBggseir1Qht7zHk5w1doTBgU8Eey3QLVtnytHkyU4BQAoLz2YGkEbuB6VtDqf1BUCAi7przsDM",
  "key10": "5HwSEkbKyP3znbiXgcB1tRq3uRBeQcS2Sn9CLgxBXquveKW6tGHHpceuejsbHx7agLtsDzdd3F1LCKTjbcogE8B9",
  "key11": "5pa1Lv6Kw7JC2LEtpSsCJ3QqicSnDtq5sYYSF4tahu1Y4SEqAxFQ1fs91Cc6xK27xaSZShfLsSC1BsEkuZ1aB6yC",
  "key12": "Ly6fZsb2cfsBsDeBcvRUNJDUMgTabZNWHX2CoQUfsUAdt33HzBbysK7fQoeAsmKoH5K2DzRaLoCG24AiqPqtkcW",
  "key13": "4hBbyBXqPVc5kEJBGqhPRgwmNGK2s1iDdsAsYnM2KbsLB7W62on3VCbjnPhwgazEd5MKgUQ534B2fDaBCBq72KLQ",
  "key14": "5d3vdKL2YEPgUzfvuSfFC4MMb2JQMjQVYbH6A8nvcrwF83Q5Mehf5QC4DRkBPAzTsiPSeT9eDaCrxwfFtbmN9W5k",
  "key15": "3YbNFoWPBkDD5i17UxD1tLM99CXmUKqWj6t2nnkbBbwYs8uQnANsHv44f7EUB4xNJVPPoUBrFw19SiHdb5tV8n1K",
  "key16": "4xZDYespthdY7iAuR6a1WC7xKd8SS7N7gWMtJxG5mVBG9P5C7SeKaYzB2uC3zFYzk79hcU8GGCcHFwr5uNLnu3wM",
  "key17": "4x5SMLA6iRT2tWuhVGH3gZNr9RqDFQzbfitGJTzZQoJvqVjYZoyPyU8G8GBM6MTQNWkqrP3Sexz7dMfGLVNF6GKW",
  "key18": "M1npsyz27Kwgr1hTCEV1stJa6SrkoBH684mcCHG2esA9LV5Udp4Qe8mXoe9yGex7ZNsfSvBJCo1C6Hs8w6K2itC",
  "key19": "3b3FHGkwzuVm1iq9mUz8pstd1WL7cqSyyTr1wPpAtdFoPEPZriZ33afGJU1VeVw8ZVadKYQszfn8UhtP4YSmzLr5",
  "key20": "akoxKTEJXRMymErjpQfTpgYgFi1kUjSHZFk5B79FyaqFQyypQfdDAtjQmKhcQ2E5ZQauRi2VkYtTCTHfE9WLDAG",
  "key21": "4HkTV2y5M3Kh2NzwVVf7yeXTnv7Th88APrTbc7nMpqZSFXrkWpNEuMdrvzg7uK42y8GHxmFxP9eQ8MXxjQ5nnhQr",
  "key22": "4gUtuEGCungKVhifumFhjPTCemE2gaxcg23maDTCDYgKkzA9QxzhiKk1PWb8kxuZ2uYTakpVk8riXUdaDy92qeKv",
  "key23": "679wtKH7EAy58SVvNxvHsBQsqWwnoPzLb2EYS5hRWbyWUxwMncFLM1UTH7ZbYdazkNdZXUG5u1bYuawZZSbtieT2",
  "key24": "2qYjL24Hs8qZDTwErUmKfseoFRb6RaSh582GeoqZVnLbQLnSSJGym11YzMcP17QvtHURdYHKXU2kvxo1uuML3gXK",
  "key25": "4Mk6WHGg5BZbDKX8at75acjzLuydbdSx9yrUjnZrJ1eebo1fTN4DebizJCEoGFk3BeXrPXXqUANXQnS4z9RZVdTQ",
  "key26": "ZoSZyTJm8wd1F8djT2YGrbTnHsgFTjL7rJ5EBQZ2eiR1cNKaBGG2hReUBA4g5sXtMDqay2yWarVkTtRkZ3JVShW",
  "key27": "64dEdXDJkt6NfxDuGsZwZgNFcAhrd7pprxvWW99xGx7jAjewN1GCKAhj7BrRVgkXrrxFYTYYwr6bmayQ9gpbXy8T",
  "key28": "5AT3sErBPKRUFeQ5KtvxLJzXcWQhB4WANDEQ9VdDhwy6C1TYnP1cPMsWQtmLRAy28yhwKtGq4dqozM3G8cZLF2D7",
  "key29": "5o4qKDryv3a8GYhUN6KJEHfbxCLmTD373AKkVAe7z9UzST2kU6ynjZcazUUzPtpbdjwmExrsTR7GYwrty94e7J92",
  "key30": "3ktCH5e5FVqNeMQDUTadATzDTV1jksifw9HL87Ywtu3mqCS8pjsVxYhnWGLhtYL1SF2aiSvWeNBuXLDJoXpqX5XD",
  "key31": "5NgxZvTAsveEtxSpfZBtSSqKQ8YeYbhhon6i9jsYE6LHbYL5o9UPddaEn97JfEfcwFwQMu8TS5KCxYcmqPU1uWUa",
  "key32": "4vcqpge9L42XP5D9CiKgDKt9G6QL4YZsxPDpLDVp4QLNN9m1G4ovNHSwsCz8zMvyaPB4GFEjYGyyrW5sUjZXGBxN",
  "key33": "2GjzTRoG9EHohyBXxPAh5FBAU5YNSNVPpS4UwrUFejgxtzBmZsDeJoFZQ4JayTFQ3mjBs4MgjPjRADiTJN9Qup3D",
  "key34": "i1yDpNcNH4BDQ1EqCrJtHXArFvAR3FDMuCEP8Ed1PFpQNsrNY38zWJABfMeXQ6VYBKxoJCM6HrCBBdPCZigLsnW",
  "key35": "4cmNNM3o68yACifrtyHfggq72TB44XKrJc1g86emnY6ZU3PURmGW3DgzuUeEmj5j7nnWhNiWJLEeaxPvnnyoTgP5",
  "key36": "5Az48a87DXagfTENsjyWWjadFPvTZwvbrLNgGXq22eww5qY4PJk1HTxpRbCYmpZyaFRx4ey7eZ38dwJPgaacAVAJ",
  "key37": "5EFmKJCG83yXjTqMDvfP9uTWTywB2Fkzqo1WqMExgYLTsMaVuFPGdd6uaNctFuiABYMbGRJJrkrEjcQMzEBzhPwT",
  "key38": "FyGypVD1bgzierYnAA7FSmj5sUXNWjzLXvqfyQyKCdhvh4f2THqi3XETmkUZoNUSRstrWDspGtjYyEbR3NBokZs",
  "key39": "2ZrmRynUC72E2n5FsadXJkN447M424qzDkqC1Zzm9CRoYCyngBQGiX3spwM4wFXr7BgC6bGAVjHjYCUuW2HsbQHb",
  "key40": "4xqTNV95CXxHKvM4XvXpNWBXF58zdD1TBU27xKjieb3juMCT1x73VpAvP6LmFV3raZaRmPWZhNychysR52VM5ttE",
  "key41": "EmQ5a9VyncKUG2XNhiCSGXQacuYUhL3Z58UeJ2TvXRybaSypLqfgohWCyDhUkayoQ9uT8umqeRxY3X8f9BKebQV",
  "key42": "2eT6bDqaYLpexxsreGio4SdTJ6wNXuxY1yzwg78tb8ibnGKAKwuyREG9nV6pVdJSvRmrC7KDsXNqbsmkGh8vM4yh",
  "key43": "NnY4nfM16ahLeAtL74t93o69jB4KDsqV4wj9XXLi4S1Gp41M3Vf4aDPeUC7HVeXNvKLzTvFTHe4Moxxx4vx8FNA",
  "key44": "kdTTq5bwpkrgJ25Qmmi6GRLc2bGsra1roH3F1wJk9bjz4s5g7cPN3LmUHpRpS4PEQtzCaFVwgnWi4niDJau2d4E"
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
