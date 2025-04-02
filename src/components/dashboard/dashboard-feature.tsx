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
    "2NWJ28jhXj2LeFBeWwQ3SdZQVV3AaTPVhTkkC7qvYgNGoBKxCfAXKGfXgeaPZyVHSmmK1rHhmhWStRHznYRgBXWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxaVccGH2k1azwxNcTKdkk7aM6vXEPCZbVNxD3L38u3EQYtWwRxA8nLWmoTF1rnhPZahyhzAPgMiEhAPTJFezE2",
  "key1": "39DYGqnjDf3ebyZfQeSrS4dm6A1SXVX8soSjnqfuCM9bM6FCP5F1RDrx4BGdxQzfxzyJD34V2ptVkc5spGpjjhaJ",
  "key2": "67mkJp8GeH9cULhB1qqBJbdJU68gZetfJjzyn64eJjM6qsJ5gqWpvFwpRg1QedjgDZWd8tEr1K4UsU9ninWEamLP",
  "key3": "5N3jzJ3Qwj7XrUK4Q7uQAWSH8XRtESS4tZezF7NppbkdihM3U9yvV63jUwvEgHvcivFXRM3QkPXwepwNUNChhnNF",
  "key4": "Vb2fX62gSFYxc2pBPg9mjSJCHrSfUFBb7jnqLScRDpuCjB9sjQNBcuQj1h1Lhj9Ksiu5avesedzj7iPQTH7EZsB",
  "key5": "5TgSPPFepHUVmTzm9hfurC9Xv7HLa679ftWc8f99HGB6FfniUk6rwRYCM32TpQW1g4wzq4Srh6a7hggnVoBvd97X",
  "key6": "3kNseaDP6zq21RExLiHnKuLk2mvG1AzwEJCvJaoVH4TFSMp145wC3cd3mWLQ4D3wVrcqRSJo3V9MdW6xBcJCrPKg",
  "key7": "vGB1acQVrAhu2fKBdZxhxugRBHn1eLo4UaJwHwG9s9MhaKexdfm4Jme1zvMtp7VDu6HuQcyYnzztVpy3ZmhGo3j",
  "key8": "4gdFtNgtJM5xd2BM1LueHcB636TRV2TKnYrprdo4Mq12utcyAb6362jGD2G6wj8PrG8XxUqZgqYKMytxr12Sr9N4",
  "key9": "35dLyzMBhcLk2txBY41fVANGQzL3nWePK5F9cUCa9ftig5HG5tbVswnGjh6f3QbtaAdXRF9oiUfCZjUaJi7w9rhS",
  "key10": "23tmNeM5LJyn2mUpJC3sMW4vDzfBuH4az9ZH7WegaiejNS9oqyFmgfPF4cnaR1j5YsEH5Xi2hPyLkZowTQJScQcN",
  "key11": "4jkY7CaPa4MmWhWnf9KnxzjAbraTpvesNEwNZDqT3z8km6X6AcsEgbwTQG4kk5yAnycMGt5TvDQQAKcHWA2qPLdV",
  "key12": "4Barm1CyoTnoe3CX9N8gZfpdawNMEbBfEFuMPsEHSD3ZQLKfGUESZ13kGGXnzS9rdA5PSUCtjVXErVPkvbuFgu7s",
  "key13": "4cds1T3158qqsZeQgC1TERfGb6FUMoQBKksi3ckYPFTWGPP3Fzxdmv4R3Fi1LuwPTdTwN6veH3uFQ1a4dFy2YxTY",
  "key14": "5VqDKkJxjNNy5q1VbtR8XZBzt9Z1h8VMLPme79qhWABajgbcuDddw1cySTuC5SuKDnpA2t2xidwEuVvnMgWm9vEU",
  "key15": "2zmVMR83D1YEVBTuqVQPthTSGzsWPyG2TTVtjhNKYa8qDm7kWUWM4WjLCtvamZn4S1zxwZuSw228dzmMfVoYUbwX",
  "key16": "2W85m9dXU2aX7Hw4ssYw5LR6Xwg5t5Ba8FNxNstokGdWmmAVrrB9RFkKSeDZGGY76yaFNrKyYxcXwq52PENkY31s",
  "key17": "iLTmnR96XpWTP1x4haKzj2ZUtRcNHzDvkkfRkqPgVXJwq3ZyzU9NPfcKMfGKeRyh5RKwrjix26Nb53Rab92DGvU",
  "key18": "3mbRVq4jXHcLd7a2VqjwSawMB6GSDgV82pyhqSdkF287NAKhGu8P1ovUmNHKCt2RzEuC2LgsnfCwVnntnPQjYwek",
  "key19": "5GEkZty7BJYnpGQGunzzm2b6NMfWBKaDbcxjmXG9FQ5SRVFKX9KqUw3Px1fXFGLQFut6iGdZfYGn4pciexGggMRJ",
  "key20": "4hVrWe5wrG8ouMtyohbNEXuNr5JAB8HndmG4RfgH4zkv8H956KRpdneNTuBGoGtnCgvNRGsLT6GbDPrbiYpMihuD",
  "key21": "2wkkCNVhqPZCGWxnR5vx3a6ZNgppH8DPT8eqBg6oMJ9XVRABVKyWsg884rkFaHVRqeCzcgnbD427RLT773QjDqea",
  "key22": "4kPHtwVq9CbZmQxygze5g8mVGGf3XFkeXmT8JcqAxh9rWy5Yjx9vVYjiVsZnbDG3Tzr4FNneEzgqHjKx9PS86YsS",
  "key23": "2Pyg2dkLQfkAobw8KvdKt9ZWf5qsFebyLvMfuDHCtyzSKP3NEbgsJnRGb8o6kxi4cYX9QtriR5NTxFHwzgjJKjuj",
  "key24": "3x92NvMCeNuM1NJi7BAF4DBoUEJfn7yqBDuTG9FRqtxrG7WfT76PWRCKAY3NZzW3AZQHZ17eRBxsAueMaYpLWUeu",
  "key25": "5hQUFC5AY2YGzojv4spL7UFkTfpJG9UUsWAJtprQJKwJedUtxzHR8Adfpvth7GKr1nYhcTPGuv19tapZ1MtGmZg7",
  "key26": "3BKtcNZ8Y2zpPJ1qtsGNVyBPRNtrEpfm7qJiMkfJ5WCjGCb5pqzdYyhH2L6vBtR4nYWvVD6zDYThmGq4xQJKXVa2",
  "key27": "GapknaPyuVaxH5jZPNtk8Ar4efQ1AKfc2cd2q9u7PKxtZfBx9n3GhWZ4TY5eBdsd5j2ykc2xPgxueRzbjjPCZN6",
  "key28": "4uR9jLaFdRn11Xm2d6NRRxsFBv7BocUTwYVhN7psQpnduAitiWgojueU9E97kvhHFSgP3t5sfnovGDw1S2UwxiG3",
  "key29": "5VHUQVgdxRd2jeMukdb1xBN3nmKQCesoLtHmm2GsQ7eB3g43iz3d8xsXBhy4zFjT9FLsKQhAtRrApgVBLGNRdGL8",
  "key30": "Rbj7sqJo5wn2f7gdwuHgSevF8ASzHQge5ANikyGswAThuZHxwdeE2ztmCVX47Gm7Rf7zvLhUVnCD5arUvjK9XJw",
  "key31": "2zpih5Go6fKFEPKTmWcPPDV8aMEH3fUsMrv1sncFKLdq3ALbhBdJ53dhhcWTCiH7EHUqWWKxGhVwf3r4KPTbsFLr",
  "key32": "3MumgXEB6tuoEBQJWTSLYT3b2ri5TMtU8MoCFpt4bNXDgBRgH4mjdiVKTRYx5HGz3baHeDTsY8KGjmUoTSPewxDG",
  "key33": "4VTcojznfRmfzRvwHHFkwsu8EyGaQkHhjprGwFmzTy31uvrej4WfQ4GDPzcvqCgWsrCV4fV3DdnDs4p5wwZ2TkG8",
  "key34": "34rc4JtwYtVxeFtuM8uBuVx5Y1WuXWKSQydrikewaVVjGGNzBF85Nykx2EHPAn4DkrcRrpdpJvkzZLJR25btDnZY",
  "key35": "4Xvh7ZkVm8h2aiqxJJXqjXn2zbykgfDCtMUfzDLi9fbw98r3HkNzeHSrxLF3Ru5YSawPoaXch4SSBhrBGg4e7zh2",
  "key36": "5zAur9hBNsJzBnhsPQirJ2humxZbUE3TbzqwP8aCyFwUjpv33pat26awBduSVPWie4PW7Ht6ezATpCgCrrj2p7RU",
  "key37": "4i2wgT52yYNQ9Un2Zfjxrq11tSAP21xCVeGrYaeHjtPm3W6QTjmJBy4MgMiAxn4K8jV5D31vTQHSzjeEZNym4qnk",
  "key38": "2FQbDQ81iuHJTvbc3bzfWysK9TGLypBkiBPR1w9j8jA36mPBvrnMzt277ivda23pWRQcyyjYdYjnuqACXENDpSN7",
  "key39": "4nqtJch1pFy5C7NgtPrdJC9gT3VLvbFR6HYdgDVfDL3r8So5qcYypKfq2iSzw5idM32di1t1Lf9JBxzyotrquCMQ",
  "key40": "43WhYm6P81SCZrcYjZBrxErLEmka1xwMJ6Fw1wJLA2BArSU5yub4ZgJPZfADL484F2tgEHyhvPSFFvRz1pU1TYxm",
  "key41": "4qzBLeopQfv75Ls6TTmMp6c4mngF1BtwVXb5bBzZPJjzdA2eCdTsbRgjggqad4r3SP2NHG1HTrrsRwxU8kRg2SkB",
  "key42": "4BhbQcrGYEmBZgh92umqb6a6DRUzdwXvgVAMkfaMAomLBcQajbVkKgvsu74Q6sbmnPsv7FDWRJ7PRNjyA9qypagE",
  "key43": "4ZM3u2z9cPawMk1kqfRPy3758E2gmky8rk8b8tctNtWcWTVJZUDcLA28Anbax3UQZuerHSyVLi2R5MEfwJFxnjtw",
  "key44": "3GNKx8qQK5nTdSxYQPffbBKyuEBtxxi3UafzZP2FCQS4cLaKoLoD2Ch6VYqx12SbJ5EBT47s6Yqvj4z6efDUYaMx",
  "key45": "GDLHe252JYorQWacMyf9SQff39TagStci1UZ8dHQ7VN3hXeDkYS5EN4wWLNfHNAejFsu3i49JLXw1qPvZFhF7HD",
  "key46": "3NcbwLgUxRQq7CjxtHje8nfSgBzUKt2ocbTRAjqs74XUrnXV8GY7T7qTsiUHAgKZrJsToQ7uUf7PF6aRWFPAwWEt",
  "key47": "2xEhMnY2XUBL7ddXvwLhnWNkGsapyAqB95QRcBVQPzTPfSU6EBE3nRf8QzDeoibp6qBb433d19KBVvGepWnTpWJV"
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
