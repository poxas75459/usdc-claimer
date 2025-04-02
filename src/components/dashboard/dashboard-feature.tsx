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
    "4yDvbv5y3VGf34dpgWLXKbmkwmT84kGCf8JK6svt1PFCbGm7PHxWwAfJubgbjzu9fFZapbiw3B7Ej5QTL1D2BwTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QhwbyuxGuQfHf1sFEfJP798Hrcw2oesCt2X6MDCsYEXwQTnZe8mBLwcD5dBcfEU3PfnayZ5f1cSS1gLnrzQ7mej",
  "key1": "Efe5tUdkTWJb7Xt2rvt6hACSqmpye1KR2YJAz7c5Rv7YMg9mYu1HfKqocJjmg8nHM6BxXhJDp6BUw9JZ3phsbWt",
  "key2": "3nMuVrnooo7zbAxhHdWQC2Qm87XZDy75k6bQ6me77e76FwjstCCVGLLEacQDf9zz5A9jiGy99dmETJ9CsXgeY34k",
  "key3": "29HHHG7h4ayPb3RaDa8JiLsnFUzaSuzfw1GMApcCjXVVtPfdqgmn9GHEhJyW4ptMK3kGLrqbznkcWZkU1kbfFS3Q",
  "key4": "31tZrv3ZnFn84nqCBJyhKGBYiSuVa7319PiCQ322Snhgnd61AqkEC97ykZxCpucoUro5VpuF2DFiwYZUynYUbRwC",
  "key5": "3nDZKtXz47uLi7QTJQmDkkY35YZ5yfWVRp9Jmfv6aARV5LVsZSno4rnbg3oMWDqWA1bMAqc98J4KHohWJctyKCyM",
  "key6": "4STGZcAkv8XucsMT6FeCySKtfQdhpoT6oNT3LugyVUTrQcpcjgUNFAnfpk7ckPyyRgCd7JJ33L2f5hmoHMacja96",
  "key7": "3DSnyCJcy6Nzca6A52ZsUC8Dpip5bghQFcniCaJUXVcQ1E2vBeAGAwjzS1uHA6q678acL6RLssgR9g26ZNn7Z3k3",
  "key8": "4jKk5wiGgCyKwYQCEA3JwuZZ1xqrTAeXaLvbXjNqYWoou22xnGvKcNjM3GQmdWpgshzeq51ccKCkngkecY1S764a",
  "key9": "3EfcwFE7QV2A7sai9VPoG2PwHQBbbbS31bqddv8B5cuQSkUooSSLeVUAe9JKLDu8DKfeFf3zstYXhkpAUGjXpmHT",
  "key10": "4WRWCuHBaMyrCBmYZ4W2YVTWXXw5pDazWSq1ZCZDngiTmKvbxyZ91BmhtB8mrEU7FuLKPCs5xKdMMjwTypwaGTi8",
  "key11": "3X4Q7nxqBwxL9mLK5izbL8HndZe4xafBDXHgFLJR1T5dVcM5ozmrTEFp3sTmDTursCZyyQGuqem3oRrsnQJT92c3",
  "key12": "2fmAS3uobNKaPeGTub9xKibxmegQzdRTVUkstQPbtUjnxeSVNx9EMcEKPRpguNU9PC7hL6ZCgUsFEX75U3w62VX1",
  "key13": "3Tr6yKGfvp8SeKQ5yD9Jy8M8ryeLQPtmcjn1ee591c9Uii8SPF5MqxQwT9vt2w8wYTuaFcnXZsdx8qBbAjLNNEY6",
  "key14": "2k5G8KfJSJzAkzf8ERbGYWropmZBwbHNpwBvCs9oWHh2jYPquByyUhAMfWVgCHM75UCNE31tgSXdonUZaoBpg7ie",
  "key15": "3ASmHZFiuFkDx2YeseQ8amabAGmxFDc2TVuJDpxLxXoGvFVVYB6WxJCSVABQQ6KLHnYybM8yVHjTpR6Nh5fHqkq3",
  "key16": "4wov9Fj6fjeXCgVYzpVZfjN6zUbKHAoWMXWAyn7GR8atYa4dM5kRXdahQhTKFmQgt8LAjDPWE98fUT8cWiVk5bvt",
  "key17": "44SLdBEP18uN1bqJ2JPUannTnZXNWF6dkFh28hAxnbj66U16w26ydkzpX2Xp5RJ2Q2Cm7XCsAy52WKrfyw5uMKjx",
  "key18": "4W3YACzEGUQVqxPPNkoNiyAi7Zu6wZ8R6Kbwr7VyAhWUeGgRFXvXJZviCA71eEtca95VF6vEXARdBXPLPwAoZWPd",
  "key19": "3MC2Hb3gp8PmN7PWwqWzifAnhNbPaQZLeMjTeSZnTKeCiyGVmm8ca4cMNbDBztsrQig4Lv6o4ap8yB4yvaDSGRPX",
  "key20": "iGrxbT1K6A9gDQva3ZqoHXwX8YDoWU24snMDPYZndnrYbhnZoJYhAPmwRDZXYJ1RBe8bbpH5zSYFV8BVgtPFP3n",
  "key21": "VbQmTvVK9hgBRvwsKPEESkdAasGHiy3KYmgVv8aPw3c7RthxpeV6VZiFqnHq97WtkhTFidQRmGYgQWXMKGLb3qc",
  "key22": "Mr6JCVVBA6exHZnURT4HVKsKfaMZPAr3QxGptMGcqJh7pFihyiRWAQXwe47ExzYvJz7JhbtMFhS9dX9DoWq3Tix",
  "key23": "251MnukAyKt6h2o9uKSu4KWepw52Et7Krxsi1vWPHPcLxRE8jV8Lh4sP3BzZ6UMz75kNDbPU1gXrinwKfog5mbZy",
  "key24": "125r9ZTBHvRZ3TJF8NtFD9ZABzJXWYbUcSb5fK3he2XFfVxivxVyvBRcviLc9iTED7pb6VAFK333W4AM8c72KU3r",
  "key25": "47LDSu6bTmqJ3iw8SbVorB5mYBA87Djyrgbrupx9VEaeJLzrMm9tUG88CRYNKh8okBfcGeJ21zSys1xkwFrYAMwv",
  "key26": "2kyPH9tZ9Mh8sfbmdfCWWVxCiFmzuguNx7N6GYQXGK9nEPvRKKCfrhHwJi6Xigr8yrSdsy4NepapxvKerYfhRwBr",
  "key27": "4GtnDAJquZyPZ2Jsm6TXBLH1FGJfdqvbyHRhAsXPyfqzUwuFvsBeQtuZue9M7izispVy6xbJ6Y6A4MJDVhevjjUp",
  "key28": "368uv4tfVNCyXDap9qNZ5ixrdJne4Er4CD7exbTcYtChvzK84R6stKTyYGebkkCS2caN7uSEqvVV72KHcL8G9HoV",
  "key29": "5ZFV45iqJeC1BzLKAg3YpqhkV5RQvikQKktawimpwHffXaVpqY6QjX9XX3BSK5xGXhPT5idsiqR7U7bfQgWdK7xi",
  "key30": "2S6SuSdbHkZLGE9N4DzgiMqTqZFU8mD4gGXmbkKBCfrpBaTns3Z8tWiUiGeqVBSXGjx1gUG8GE6baJiJa2oMB8DH",
  "key31": "54Epw1pfJnDy5CzZ7WhBcQbVzwLgXrTYsufsrWcQDVKNoFmYsDkKuqKicgnG1vK9R4ZiNCS1eNPpc7FcVnUS4thN",
  "key32": "5NR58YfsLvum6EkGaHaZ4nd36WS7EEMeTvQB9wosVUog6ragqRARfzxaRUMpL9RgnG8MndaLCxgWSEckHiwo4StP",
  "key33": "2k8tLEW3E7ZgiYbZ5z4HjcsuvkJMP1QQLhQttGbh4aoVWeybuty32US5Ybsn3fESprPxvKwFDyaFRoKUVqEMcVjS",
  "key34": "5XPDEwtK1wNxe3Wc76erXmfP9XqSnKPfHjkgNfe4or2yMpK5dvAtZfn4EazNC7bx8NVCHp1U9bHiXKahV9LVL43a",
  "key35": "5FXWnTmSgXg2r7MGB2dx4BcC4W4Q6YVuKMYfpnkPo2ERDoWLWTH5VGFfYBhqRfJf3g19AHEhnd8VuC96ihqBgNFJ",
  "key36": "4CaR4dJh6AUV5aCpTP5e1edCsGNezV2MoAyDeHavVS6jj1g48AS8re4P6sv75C9qdXMN5oRMvCtgnHAK4kdLam6K",
  "key37": "3R4Dv33CVQqmt1qLqyphe1FeSMh4RvPGyr8QjjFaUEis5Pa8uAPoiYci6YDJiUZwCrx5d7h7dvaSWy3FRnJ9uXrW",
  "key38": "4sVFqbMYD5rMovZBcabuuDj1xxhThMofYYxjSEL6QsgQRzoMga6aa1WdLasPJFe8h1sBLbGFfv5cWpHLvkgvXB59",
  "key39": "krQhQ42Gzdj7sQ9BrCHG1Hu8jxjxRKPJeYSNGzDjkkoRxBn5qs654X7AhbbTEEJ9zkWXDPjTtFHSEqb6WxSDSZP",
  "key40": "2J9HPNsijUpd8poF1tA7CkuGDKNgBThdgPB9SGZ6NCPvpo4BMNPkjFdDf5JSbKKYyyP1Z6GMs7oNL8E4m2vtsaeY",
  "key41": "3ijNbSawTQ1Uh6R88KfMxHV4H8vYfSi6Pk8DUQintqkSNT5acpyE9JLpUPcub6kCoJeu8TBBYtP6HNqEioMR34N6",
  "key42": "41FKaoAs377xQUpUtgA6KMzRfsbqo7uDAYvAyD7dxGN28xSaMPGH4uRFJT9QUtcRVnk4F9Y57H8LGicthQrKekvG",
  "key43": "8efsUNoHX2abp5e7jBZ2BAtNiFZqFNfKwoeqp1yXXUDFAHsoLhthrfBpbtn9dxwuHhfgbk3T8XUBUctTxkGhxfe",
  "key44": "e7EVa5yGgprtpNhoR4m3KXHfSwFZNuosWki6xNPFtaQFdny7GrDJE7quuPfHnGu6uUfonjbAm5inybPb8XCtsb1",
  "key45": "2MwJWo3tW8ApbWd3vNwYEVJ8wR1LeRV73B6ke2ELPwrjX4ejv7n1vHQCuMdFC4k6mr3RLPKSZp6u7ief9UW1GcPG",
  "key46": "2ZL7qzQRN4aPJJprreB1zFSpCXYDNMSpcwP36HpDy8q2xAXwA8nuiARhDZpT9xt46aaRWUDKQdBT9wNQHKvqiK1i",
  "key47": "4BF1Me545qFuiVrAvQry2jhh3ZSu5Ypg2CdRjbrPTZQpZLhMKDCnhHi5h1Cn3bw3aojXk3ap1vG4F7FhCneuzsSK",
  "key48": "5aXR2sp8Eesjns9DeGARwNwp1uCXwK8TPMafKLqgvuRpVynghJ2P1LwTPTYZoqoEkLz1UEAKvGiDMHWYB9YtAHJv",
  "key49": "3jqmE5rbv8itFPdV8a4kkGtMmagF1mkM4YoKciCSPPoYz2AtmWu5SxCHFQFhUM5PpSCM4VJa1JH6zf1RtXUHYsJa"
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
