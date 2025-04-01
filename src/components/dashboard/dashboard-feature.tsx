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
    "5BXdL7F5r6K9JVJ42HchVvjkbYPsjwEvZXj25nTQKJwS1RdbmiR2UkWjDaphxfmEdH1oFNTQ2YJHuy1dEzY7nkYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DgSccpAoSLjMfXgyt44Smy9UXxxbUP6YyvrWy2m9YQHgfCwDGv2YSptfEB1ziMgnzopaAoA3o9PJUSc4pB1hGvy",
  "key1": "5DGetTUreMz3xEPp23H7vzaC7f3iiRCe7GNYNtWW3dB8kLekqrrqhJpBdfwx3tSeV6aVyCwGqH96Ewh3KVTP8wVD",
  "key2": "4X7NEWczchwPF45WdcE329Tpj1nJQf69isqpzj1QYi7MvJB1363MXkDUzNZUTBtiQmxcqNMuTvXHXgwTbXrnVPNc",
  "key3": "5JMgt1QsEWFQCPE6hTNwh2MxMsMJDE3WE2NFm3ihikBj7eZ6DoL1LopwBCNBH1DPLZjk8HYiQiV2r7Kxaq13g4Za",
  "key4": "3U748akW4Qp4f6jyk97uXCxxoYtGCcr4YimkYSzk6cphCnPwxDkd5przrykzHspdSeGpt9SAe81h8dwcGtvQtQHv",
  "key5": "28bpfA9aSmD7hAZWxxxHym92x8v1pntAsTMxKD3qWSwd9JeVm8qgoTtSDgFLm5cqgifkFWbEPnbC2cw9pmee9Aoj",
  "key6": "4Zc7SfopX9k2F8zEVkyGfbEWNVDJs1DMSbUCsUFtyXa7K5zoxdmUhoaHDitXMpiz9Q8Ao72eR1ybixwmENn2jAJM",
  "key7": "g4fvh3c3QWKDak7RDXBKBsLA5PAZ1TcgeSnzbtDz4kgJeteSwmGcZKrNQcWa1gVtRvmGL93543b6G58wtTw5Zzc",
  "key8": "4JEhWxN2QchYWuq6UJcScLRD2nhbHAtvBrU94wJv3BuggSkMnSsmzTpEeM9zb6SEnj8D3QpAM2MBqZpvoSs39BWF",
  "key9": "2smJn7U119iybD4AqSRf9q2fbxxutz3Vb3CTrYfXjSF1UR7WAo93p6Ev4gbXGZpnJTatkv2gEYLEZN7KKhQorMFy",
  "key10": "4YkbYikpm1vTKZo4Qiiaqday1yTebHKN7ScMehgc2qAASsyQ9i9xMD8yhsdPrEk6yxraASPLU3GuL7gqvnULLU3p",
  "key11": "2z65jcbS3B2kq2jXxKi1sQZerfouHsWGfo6zMDz9pGSKHtY78WmHezD6iY8BFGxTLJoAUkiye1SXBP5PVA3iPW9u",
  "key12": "24LQUYConiqAZyzA4warvfQ2wUo5MMAuggpLqKxJfzJgioroGdiyvv1gPFHxktzYyAacDmTmG2Eq8v3rxQwXQjk3",
  "key13": "21yfahSgzRMLuRHU15ihQdUn26H2NdBpKP1M31V3NcoSaN1yNaYgwEX5cg9mMLsL9xFhokJBZ6Kf4kP4N4XJSPdq",
  "key14": "35KEjtJiuJR2UwMdU6wfmSyAFiapNRjRNcsWuwXxqaqcnEmZRRmE7zygtKjnb2DVKjFU39h7shxMoLiE6zoSjLjR",
  "key15": "4f7aZMGSBFUJRDWuEdvKt3CnQaHsHfwRBKnicSxaf8yyqZsCPp1di7DaB5yx1SStfPU4bAN3bREJDfuXDu2158dh",
  "key16": "2d8CdrUtaZKEfVgve3y15Lenw4aQ2vsYzRnW14xD16Ys5EJ5VFSCuUJfJjXFTpNuDeUhKoouWfmietMJZuMnoTFF",
  "key17": "sRgQe1GZBRn2HfE7KnfXGb6dzDTu167jjg26kuCysm9o9XGnPjhAqqo4cpbzLCCzHdzr8FMKJkaW34kSAPHSzf5",
  "key18": "8QKKF8h5wwYvQKuPnksjP5kUyU4qHCJBaqoWCgzy1KsAPiP9jPML4UnkFHMrDPSyfyHeTXmsRr4xwppmzBqJaxv",
  "key19": "62b8KChGpq7XL48H8vnsQNaPmawq6qrjBzhqic4zPvZVkTLXuCK5MDbHmPfpECsnwwmpd82Vf26v3iXHetbze8dt",
  "key20": "nju2C7VQVgd2uPn4bo5D9U8ousVSQXWZ8qffPsG2tkNT4Y8D7AP6foyHXzpKoBbFcsq5uc8MmVvKZ2uiwd6dHg1",
  "key21": "4ziAKE8dhZj4rpHHLPKFDbfvVrmuWxviAsFJqYnckkoWat8qC7sQfjePEsvNRCeeMgVRqVZkAXgbx7e7PZhw9og4",
  "key22": "5DAz1j7xsr1U3xRskuc4aRvCsyTWdB7kxHWHqVbKpiAss14U7R3hN5GxTpfw8y4LDbgAhr66RLLmoeiSfo9bWCwY",
  "key23": "5Raa9ssCsunaaDUAhuet3NDg2gjz2Y9QXiLYa7gS3X7m28Zy4qfruSg7S93oR7chY22paZEGNokzryZURfesJJvX",
  "key24": "5XzvnfychsQXbSomiEZyGBQVxm4DkPtmpac2UBNZihdPsCLrbC12SNN8AmHrR4AKh1FAzREJoFitv3HsGMkuu8EV",
  "key25": "2DZq1cibhuiwXKhW1L7hnsbwdYdAp4mTDe4DTuMtzETLEFfr26TkJvxoeP8AXhk67PnNeE8taP2wQccnUPjsAKjy",
  "key26": "3KUZuaGoZxNN2qGujRr5TxbZJRYqbZ5v1EU3vacjgWFGuRA96iD4cgH29buxGnqPw7pjXEDVWRT5rH95uEaW1692",
  "key27": "31LPC2Q6aUxJAbTAuzjdYQqWPTeS62wPsbXXVZccutFM5UnnKJNMVGSvVeD76ViLrXCY7jChtDmm7Lb3nBTRwFZ6",
  "key28": "zHbF3EP9fVoZfXNEuf8LnAw95yjGKJNRFFHRYoMjemyfB92D1T3wNYr3uDwkkM3BMAXgMX6kJZknQrypuGboj8g",
  "key29": "qaFhrWbTNjZKUghkNGaiy7e9T3CL6V9BkNJmS6mN7dHoFpNgRxT3goWzL4eMicKTWBmjcUhZP9Z2GqwwFp1PewE",
  "key30": "3uqBXkdA48exej6AJbxgEtRtt83VbaW2fqojdAJR4o5sqsd4pvBLdeZ1SApScYVf8teDfHHREtCKdwi6fNVT777q",
  "key31": "4jfakArtqb1JB4qQ5q4DmkZc1CaoMJs4QevMshW3c4ccQd7JzNY28SLGqtoSNTVVhDUS7Zh7z3NyTqJYDLtcHGtL",
  "key32": "3r8UD2nweCi3FA9t5DZFeVpMBeDyWuJa7q8cEAw7g2wyMbxPPQHRjcawySzRQJcUi67LFwGERyDZyC7zpuBZzVkw",
  "key33": "67q8TzxGAayCicRHJToRPYVHgaw9CmutSJquvCVJpHXuSyiStv6KqvGnMhew2eUwsRegH2NEtZAibd7tG222GJMG",
  "key34": "3P3cWG5w5Bgzi8uiQ4NYimtvWQBRCki1WA16pEF3ozm8QV5i1KBPwDeeSu6vjoBSzV6ZJeFPQf7ygP94QJE7B4ve",
  "key35": "5Yth6KFiK2xaAFweMppX8jGbcyTacMPYCZCfemvUskZZhwv8NU7Au3Uvt8PnumDuHnFBR9XTykRZYsdLuGri4QD2",
  "key36": "4a8rWHW6PH7EmtuMk6F8aCUcMFfSSDFnLyqmyHng4upX11uRJvYY6cNj5LUAQVVNkJVixaspNL7CJr1UTD1MyGfR",
  "key37": "gLDD8fa5DpndHcG746QgZzX9DmhVrQdC3qeQ8ww3SNKxjd1AR6aFDoqNu4MmPBRgTpq3v7eMvbfvKJw5tAfiqDw",
  "key38": "239rTs5JGADGyvpKKkc4QzTA4dw9ScAVzfyt4MbSEeRswSGphf3RvGibGSrg9E8CLE64fkfuVUGdDEbDwm5NyLnr"
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
