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
    "c7Et2RvGWanuebuVy7Xyfvo9rrVVXAvoFbC3vU8ubZ3onsfhjANGd8meACX7d8WS88zJfLLBs2qSBV1aQmHGKQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dgcpquGpMKSJPAGMMDEvHDQnvo2H5arZ3BBMw7h3uU4HGXD8rgydzkNm1Ui6DjEWnwwLjJuN37n5McunfcA9Z1Z",
  "key1": "FbiU2kAWtnNr8kgrom2nrV5oyYi9kWQJmNUoTkjLzXmv4SGWE8wDxoMCKvmGH93LQ4ujhWHPH8azC61d5uQaof8",
  "key2": "42XxGyXTZak13h1J4BJ8S6dXpRP6wWUrkFxBnQsb4rAEiFje23XEfGEZmxT38CsU2PHENSi7qzMzdfsqXByoMfXD",
  "key3": "2181mDq6ySgpw1tNV4UXEm7v68zfgFBPFKKFzwfdvd8rBjkL6LgPJDQdnDLHYe9KKu8UTGjWhTT6D2j6KaJTQpXZ",
  "key4": "5Z4jDMp2bWTn3u5CJ9wTydWMowbi5f22qG2fVPYoM5eJmqTSUy7foV97PNa9MG9BoMRfcm5nNaxDPjTx19pMmSmC",
  "key5": "67HhNueZtau3mz2cBjNvbu4ikeZ5Mg6P4ztaPEJ7jsovF7YJaphack9aaGvbAyFVmBgLooc5RVwZfeTYKmdY4iuX",
  "key6": "3X63cBp6Giz1aVepURsbAdPWZMJqbWG1LFsGvG1ZZjTPzvWU5x2F9DjQpKpHvx8bbdWQEUgVZ8xLDtwyq1bEgw6E",
  "key7": "4r9GsyckTmF4xebvY5KiHkDBww9B5g4ijFt8cYYKaMKWfhs6aEYTAaBw2cNwPQhiVsySNnNKVGgJ18aCRX99UWaw",
  "key8": "26Nni8awHL9M3T4UJdmqnLNEDAsDwUpcFk4uDPjTvBgNhwxkKk2WhKfWVATkv9xwQrZGq7ixyqBUc4zFQVEYXPVP",
  "key9": "3jQoExksUv5LmKtKGrZreTNhsbBQB4rEQKnM3N5M1e9h5NLTzgYfvzxu8G4yVxq8muMGt1E5eraK7fZqvSCPguc5",
  "key10": "2RjCdxnSYoN3cnwG4jJibDunQ26c7WBsa6oPgjCp8iU6Vucvkr2J14UxHK3Fp1ctbBiv1FoZzkFu3yrRb2Ug9xQg",
  "key11": "38gSA1EKvBgvGTMouES63mFrsoQGnnUeANkWDXiJq2ALoEMsKRzYR5ybWhbtNAXpM2hxLffvdQgaLULN5fqZU6kW",
  "key12": "3r8A4v2Egq3rTkwuJjx7dPUEbAoxtqu3GKSoANKqpn1ViuGhYiiH8Km1reCxiFx1xKWSHu3vX8SLetCbDTHZNBe1",
  "key13": "2M9h7gAP9aXCnVKw4tYtNkBaziVky2HVTU39m7ssnmgGvGc5LrYFyLyxeZHVWX1a68TKqcda3HPznem5LGzsZNz3",
  "key14": "3a5JsuYnMvfUmJPkxAcWd5475UgaMcayetN8i5ZCBb8wdeJ4tgDPQJXAJUnGizo745NpMECPBrN6SBsoBu1TkVDb",
  "key15": "41ftUFZDaWiSthadi88LXY8zcqDcGw1N8D4DaSgQgbcoAwNk1cbBFoqfMiifRdrzoA8gQoCHw9JXPG3LuVm426eV",
  "key16": "596FmKshxVjZC8uQj4c3cYSxfFRzohyRoKGii6ogEqd7czyTjT97P9NiAigj7LLakRBcYpHJTQBLFpoYMHa98X8v",
  "key17": "4R6RUn9KTEh1GktEwh57pM3SAe7bV7SNrPNCyknggKHWW2SD4exCJbKweVJJy8AsbjErZg7t3TbU4nDbmt9hNJvt",
  "key18": "55YS9sLprRJdm4fCs3L4ELv4qR1PtJ1pWCRtjSBZcy7FxrL9D8HPW4PtwijJZJMaypuFwcGthT1bFw88F9tPQmY3",
  "key19": "4q5namy7hViyPmSLHonuC5dnbAF2D9oz3di7ABmhDbhtJr9LW4BuYnEmaSKvAg73iLE3PbBhsSyRo7M8Mpo84VBH",
  "key20": "2rJUYwXaL1SVhA5omWSkpgPrygBHesnV8EqECgv4kKyDGPqjD4weYw8EXKKU1RbCFpBkYZKwc3499eptawV3n5j6",
  "key21": "2yyFojuEVecefRuzxXLB1rjY5rNQqBoBYgetWqcwuRfwT6iSemoP1zVpmFWHK47qTPzLPsBwQoHqxqoXWAgERjRn",
  "key22": "4fL4v43oH63zT6NNweqJzGKAwHCrz27HhYXsjFGoetvC7jabdZYdetqvkCQU3tkkufTKZEoJkjFi7rF8gMR9Yzv7",
  "key23": "5thDUN4xRkJSSr2BWMuruiUZ8UHSLYNaFT5W2c1AFs5sQZCpnnDpAGX8tydKb5tA83o55K3K1ngv4WD6svR2mYKs",
  "key24": "5ZkfieEkdgDaPfVVSZX3EXGXksSCSuk4K9TtJKjNmAtgYVoLX55hfx5CmVhJj4K88fgZmUaWBFo82X2Wt1VPAoZw",
  "key25": "3CBfJRNhYGrETbZCwYwMjZPu73wPmqozfahVeRmS8r7iAA6d1LxNG5PfKy9mYmyWK5uvQfowqXrpi6SjJhh9yPzJ",
  "key26": "2APou1Mpz7DqnMfXmgxZaeqdLGcYJvzfQ3njWq7So9eoD2FSMBYvqvhwXNZgZWNrcS53EgCEGhXkSHUcsxUbZEm8",
  "key27": "3vDFnxRHJUERCEv6tQvwcqNzhsBxud6NMyWqHN4BDFd1L8r8Exdyz9i1mcimWxgnawuVjpwSL9JjVCfS9gwSehAR",
  "key28": "3NYZYR9Vka52HXtwViMBBm8UquyB1AuXx3nWsRAtiCafLYs3PRM4C53dPP9kB6N5acvgCCUZCKMP1qpPh39vLYKe",
  "key29": "3MFfxFhDuNmunVWcMjXeHMseps5Xw3hFYXUBTFqywjmUeJCnSz84nkQvgKfNyHsvUXmAmwEWSzG7bCqGv2eQm6ap",
  "key30": "7KEMCWrgsN5kE1Ydk2ZkhJsVxWvxoDqy9X7WwRXbbphzbcrRByzRVtF9o7FPEq1crCDJtZKwgXjYTroQzsTPLVc",
  "key31": "ijjXXUE78xbXwQp73wQwKLcSbvJUWpfH4EzHCWezQydwhsY9oTkPpeNvWesh55C588Zc3xVoTQSuR22GJwgzyLJ",
  "key32": "2F2YXwTZ3EeNoXoKpfD5fcTid8mSg8h9ZZDYJphwTuQwUEYCzcaMmrEZJPUv2ATTubYfBVRCgmnjTSLuzArk6h4k",
  "key33": "5XaV4nXeNEmi2nZshqZLBuJwJNWoJFXNbFs3ypU1YojrftRpzNeqcdEoTcDQw7rngxREKe1n12P7Jkz2yXf8SP7F",
  "key34": "m4AwbW8ZxcjXyfemUYaRcGtS64YKWJx4uA7n5u3VYc8iiLkV6jt9PcJhmh9FvYYTSbDG2HxENdduDnEo1EN9C2T",
  "key35": "2oRN9soAwvswt2JcgCB1SkJsY9RBEmKLTzqFpBcoPLQ7QM1mUE62XVYmbn44PmRZtzfx2qf8i9DvHb2KChasEqxN",
  "key36": "4qaAzgb2PRprzMkRwb8x1N8teT32JArMtgXHjS72M7hpaMmWuFyN8rqmDZUsutA3uLTSpyc5nyyxHw7bSaHdRq4Y",
  "key37": "5LEgBcaVjtsJkotu86t6SdecEWXkdvPfnVtcxcTHi6ptnXpHrwRSpUsf57WwsHUDZznRvEP5BgzCD96RmpnHewVM",
  "key38": "4oG8vXcejoXs2fD9BuvSHqrE2ahBfcJkTiZ2VwECf7Bxmjh73WmwWT44zACZHNzMaHxRMjHZQMyCV7EJqdHdfc4H",
  "key39": "3mtwVAcjeXygn3MkWA8yc9GjcJ5SmkitgaECzh8P3PvwQ3Eq5Cso7N59x2oA8tucBubUDpFer8eGVAkhgcXwAuGy"
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
