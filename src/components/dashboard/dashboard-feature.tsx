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
    "2V29G5dBrFYyasr2Na9WHP1tUbAYCBzZjDDP5ouQHsnFDf1KmrqsihGs5NQWvLXzCeJHwgF61HQ72vggpSFZvTX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o45VjHsLxZ9R71UqVFxksE2wgZpX9ei91mCfsMSKjUJzDSuF2EgxqMLQ8zz6baPuo2RiDUhREuhxaZ2zHkYSxdT",
  "key1": "PaBMeLBRDqJsRuu6KPdwjSXYxnYiwJ6Nw2X1mQ2QsAqUfNsK1R65snrNbqqi7Mk5qaBf8X5qCBZfbt3dM2ic6uV",
  "key2": "2evBMEFA34ZE2GJDP2YwfcFGAqQQgpadtPLPE8BHcXvcS9ShZ32UrPdJy4TK2qnygSzFpM677rcAFzKn3WNy4cMF",
  "key3": "4rn7HJsM4M2jox65nPX3jTCsLZaaSzSjWtUzzoExyA9xCF6iHeHmMRRmvQcZ6LjMwKfssWqaXmZL1du3e8vqhmAd",
  "key4": "2Qoc7CFWMPDRixofwLVPvMrq3KBtNSgwnQ3ocyoGMu7uZyGd3oEBq9oUsjq22wxZc9X513QdbswKCVrma2fY2FAt",
  "key5": "3tbKNztrQTBkF6Y7WUvruUGRAhKy4iLeUAQmtKrVQhARc5YbigEFw44UAXqi8dteBmRWFYso4d7XkdZ55cQrpmgh",
  "key6": "4Nns7yfiZLyC6HD9RLZEwtBRwWvMzthhRPou4YR1N16kDZtomAaPvALzaASUFuBt7UuvRCszVPFqMHE2knj84db1",
  "key7": "5igCmkF5TP3i7P3ZST3V3mFW4VFjFKxW8umU86bhoNVNM2RLeknRFoc7ZarcfcSdFCB2wbd3ByihSwka4mk2P8BZ",
  "key8": "4Cy2kT1CyjasYhKwLkC3D2xP61J89z151vnMXGySdUzuRR2cXV5skqNv1ZciaKJtgSG9XcN8cyeywA9mgtQGN4vA",
  "key9": "61fCtt6gMj999VsWcZ5RwoeWmjPmLwRbKFsDtD4McLwP57NRSWU8Mbz3nVwPeJBbFNfK77WzyfYXzbVoZaorYeUT",
  "key10": "5SQ3B3pK6pzqpmsVbAtMgvX9n5xyc3S9ecY6z9K2LMBkQN6T6toPMQuXyB9431Kfn2APYo7BdsyVQ1knsEK4gRLj",
  "key11": "3gRbSJnHDq1HJ8Nbo4xaq2QEuxBfBFchA1Lz9am8vbBSpV3sQZm5hQbUCoVYdHGYnD51VaRJqTy9TbhYswR7hYLC",
  "key12": "3PtbsV6y6Bbb7eRiSgj9PuVUc6pTX9qwzbfhdgNkTVmBhsGuATsE6b2GLt7bpmmNZdqxDA3Ke3ER8kWFvCrNTmFm",
  "key13": "3hYCDKwMHuuRs2XDy4y41bieNQ5X1SgFanBAFJyc3EswQYiB3qyoMVQ5DWBNr89Lekkxv1WEL1fDrA3TftxGbYf",
  "key14": "5UW1FiQ3xebgNgAU8A1gznd5HUkMUYARnWu9wJfRjbwQgqoTD6a5aMQrCCfud2brUvoKAXtgyGPauvxxU3sG8Tts",
  "key15": "3KwiUZfzGHBLUxaze1Wza4Y3QSky8TuFBYmYySmV71i6gaHrutJ8bKBi2YGLHbEwmYWZ7rDWUYAf3NevFmGJbtAv",
  "key16": "3SpmM2ohQFJCd4Fe8UJk6DeTCrT6DKhyLu6Rg8G3N9rVtL3fMosLd6WvZh9qk8mX4GUMo6VTDvL4rfkcH2FT8XNg",
  "key17": "1JJv6WkPDj9p7aZ6GvoG8KLEujfzW1whJsiaor1rH6LxXF13RznzwxiUJuzNErskE82u8D1YuXgdkmvgb995GL9",
  "key18": "SETswL7M25tyFVidKANJCf3M8vRyNWKPAwM9YSm2MaVbPFjqQbL3XsyWi2gmckgHPJiGgjmjCHvGkYQWHK8tnC4",
  "key19": "2jRYHbKEMSTe5eijP4Sw77sytqeG5S3uVQV2wTPA9hNtbRZSsZsAoorC64LQy511oFoEJNpudzbZ7Hy3CTfRC2hR",
  "key20": "fobnkevBEGEiB7b1xLd99s4bKWp86Jn5MD4U51cmpPrQ4Co3GZG4ctZAbvMuwLh7wtzixv1V4MQRTz9A4mjU5g1",
  "key21": "5eFuop2RzcAuoB99YmBnoieCJnF1BSoE2j4CyySqCf2MWdQE3HDEPy6m8qKmmc5nkM4i8PgVC5E1sfMf7YHG84Cg",
  "key22": "PqZrzhmJgdxCLiuF35oaHRihTr94j3JTmjkdaXjXNM7fiG8Sye2CxYfAZHVuMi35peU4KQKNgS1Qybwh12GPPnS",
  "key23": "2okxcNLfK1qhj9MDhnSNUQHGpqtyKuTcYe8xy2akHeExHP6XV4qqDLYi64QiTU7SdcKLXp9gKCVQp36cAX8QY8c2",
  "key24": "5WewauwWLuQhwdEDixg28P8v6P3UH9Hyr3kCt5DQLrG6mqCJwVYmXXrpbPYj6NHWqpAJ2LxbGWRcJvELHubowXUb",
  "key25": "3ZeS8ZMzAoiftuTx5s7m6KmU9U7cCBfEP9crEdf4PsmrhgLbGY4hAgWSTok2tJ3gsWyB9hvk3TSSLb9HPKDdejj5",
  "key26": "2eRe5A9uq7W5MGRaqcdawDT8dPbUp1gPoE1wc5ADrzETKivWA8DRfhPehBmznxLuqFA2cmhnaW2EPe3fBumigm2y",
  "key27": "4C364b5Apt6xdBUmf1XyBB8DXsu4yWrsz4A3tpqLJM5aBcgvvsA7qCSsYwALkfaJcXFnBFm7tr4deduzu7CZ7XM7",
  "key28": "jHrGTduEXvozwr28W5yBeGs7cqpPWzQmDQVqT8BfVZXABW2HqW3aXoF8oKEMAucWvdXwATdBYakJG6kKGwQTdzH",
  "key29": "4equzhr4qR9Zwjmcd8Uoh17mNWZfZLpeBjCsF28g7s1jksVnT7hFejgd3VcDQdumsaiYM5m9AjqDMB3ohmJQayv",
  "key30": "5CzZ9amqrrNkQ6sKpdABNEPVCGq8Zj2Lf95ANSPrLzkX9wSXMKR8SRauUBFbRVFEDwQfcgJh8SbbxNVGWB3y4tV4",
  "key31": "3pqtJAVVtp4LFQ2QK1RC2eEzksvS7KExrkH9YeQn5SekGFJs24ACRPFpaCjUiiAgnpHDVpesQm5hy8D8bMG9ZLKe",
  "key32": "4DhhAaacXTs5AhaZ9VftE9g8FkFfn66yrkeQN8KhFhBrPdZcgyqBA25mppGC7gN27FwLLUHMpADgif3HRtN23rY8",
  "key33": "4593MkWVmYxa2tVgJNNDrtoNbpG2cnWZLMvNESG9pMozWBeKf6VdAnckfkNhih9XVhvHda8iAf9YutEDj4ddRQGZ",
  "key34": "4zxVDDAak77YumZoXwgRWcDs78bp1RV1Sebn4UxPuXGakTUK6g9nhD6PvxSihA2pSAYmFsQfamaWR3oCmAnEQx8j",
  "key35": "ZHGU8ArxbdSuZBKZizasDLd6dgPuWeNELMdkM3pC6WvaFZR8xg1FY2nALF4egZWK5Ptazc7usHhuopmAyx4FnCU",
  "key36": "5MYy1xNS4MgRW4MoxHuDcn5upo9bzLDGYNz9hPjQm23YVGX72viq5pX1bQcKieoP59wck4hgCVKtLkgoUQKMGGex",
  "key37": "5GuNuTPAowadHmLrrbuzVk81stDmfEuUSDp2gnUsLYuJiKVBsKm6M3BoZiRdCCaFT3HtXWyJZwVj98QxnF4ATHnR",
  "key38": "4tjsMSTWXgrquXYvCCpaDB9Zxkfz2uvptjd2vKLvDJ8rbQGCHG2uHR9ZRnrpkmLBt48i1FjJQPMG8jAcRKKpUMuj",
  "key39": "37Pbe5RoqJUndGjoDEy6CnAKzrNbZkXDMoJ5TvqQ1RmVGP7UCJHVZevUUGh2D2eevtauERFddTKZFixQN8y8VioW",
  "key40": "5K1cVSKLpCupMFu8PDUB6XjU6LpUf9DjtgQCvsJe6738qeyQWi6xQxCsJ4MbSwWCGzESuXFfKoduHSRJPAdNsQcL",
  "key41": "27Wvj7YdxdqwGTxjGpK5cJje1JM4Lem717Tmuq1YBAzm6Hh8r8bicwMEwh5FRu4LasA4RDiGwEekc1LsCVdHytyi",
  "key42": "4QA4qvB9yH2dusaKn6rud698qWE6vHmWYypBbU5ZXyE148UihcuUyFdrTjjh7zHHjyRUCSGoPGoSM11t2eRpc9LK",
  "key43": "3hBtMwZq8MhY25W3psZNBYEXWqmk8Jn8FdxKM5rewGnLJqcccRn3FVKzr7k7eo768UVBVxpCQdugfuysuiX9cALb",
  "key44": "5h1nsb7Ey9f5LYz8ZP3DK1eMYvkHjsE2L32cHuj8YAvXQsSkog5PpDWwLo8EwrJwrRm66QBppRunAn3Dx5bKcHcp",
  "key45": "2vukRy52fixXwEGYDTBu1NC1SeAkwB3NAh3V4akXVbEeMhWkyKKAqMn6RcEpcATVi8XCEuyWC2QxxBHDvZ178QQo",
  "key46": "3vt79UxPM7BRaC9UMH9Ae9cbCzHaZQnSYFmT3urDRPnSxdKKjDhLfr2WoWzmcTHQVKDHpa8hFHdcM8PX2zJU2b1c",
  "key47": "2WD3NWoTTjBBScayo1azeu6p4gEny9PrWLBksk4iihij1AuPhRCFeqFx8hkKzSq1ofyN3AuME2iNXqpj7ti91v1C",
  "key48": "2h2EwMtK1wPYknQsjbnDe12eBb77N1NhvNahF6cvhS1fUCKsNB11ohF5WRQhdR7nEVLAyskPFLGtFeVV9cDHygpC",
  "key49": "2UGgYUmexy89CY4rF4bEz7Ss3qNc4GBemCrXzfESdkNfNhTkHtYJfzw3ckxYhsjkJcJ1MrPnddqv2qL6LGJL5PhL"
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
