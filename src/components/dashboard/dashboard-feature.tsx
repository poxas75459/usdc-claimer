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
    "4mtWNtSV4WxqizxhSBtZDQtQjW78ww9Z6CeEj1CG1vvvRzp9YzEhA8qLe995JQ5W9vZHAivEu3ASKEnveon9wfj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BW6cJLiH7V8hdJPcyCFGzJpM272bWm1Nk8nzDUsGDS4i2bo6k5Hgvn1VPdN5dg1KjrVCQKdXdaZEgb3fgyb3FrE",
  "key1": "25DC8KrXxnyDLzXbmaWFRu35Pu2Wrd5MpLo593QnvYYeGiWM7yStfcr2vB1GPErr2sDofwMMv3bG4pHiWoYU2kAQ",
  "key2": "2Hnj5AToh5ES2LHUtfJdapMNw6PYXB9ZgHRT4sJxgRMfjw6jSbbgyxztqsZiTM9m1v1T1iKm7VAn44RKLX3ZowdQ",
  "key3": "5gX2CJbgWoMSUSusfjuo7PPpULPducC9RU8D8rMToLGHaKqgdBub1WB7hwqeEH4n3XBjkEnEHPwhGxmTp6cRqqm7",
  "key4": "3CwScLu4WmHp5can5g6w48GtohWpLfABK35EGpY2m4We662sBaoKZ3M5gSDWhRKiGUvEaeu6wsikh4riTK3pQkar",
  "key5": "26YqFHnMXXCuYZ9WJyvPkkTmyq6FBheDoKeauMi5khGzoyT1VY3LEGGGCdVvAxeXKhjtfA1hqE8RgcwaEFxeqaQn",
  "key6": "VgQwss9CHQ1t4KL64KpTY2oChXxRPPdjc5N6rZA6k6KMFHrV9t4RUiGVSwECYreTpwyUcd1mAyzuoWdUxoMD8JC",
  "key7": "52bxTgGWKf7casdfsD1BgFntPRmChjwMqKGEYMJjzxheFKqnx91eBnFiBaLePoGCdn4C8o43AvSECAsd9MwB6GPR",
  "key8": "2nKc68vvdf5pRDJfYoEfzZAm3nKVb7snuPMcG2kt6iSTByCQCnpgtJZsdyxKUKdmzfdY2HzKaAnRMUTpWMM9oL4q",
  "key9": "4wL9ofrxgUkUNrwrbQwQz8ZNYjmbqheKKoxuNwZUiKmYdM4wm6Q5oxkr1Zw8DeToQqBvn8Cdh61njCecsU1cVEBA",
  "key10": "uyPTtdZz4PC6PZ5sjz5dFtjaNh2U8WTY1MmqxUPZVVZMFBQ41c8MZZnHw9oRGLuzmCa5bKGqAoRGi21DmzbK8MN",
  "key11": "5183hdyfaYgZ9QEGUvHXDSwZr7yCm5ryfuMPWVihZTQNJMtjRbmyiN4euGHn1awwZ46QwTq2WuGgyg13YLHU57Ar",
  "key12": "2a4sHFNmqBHdet4nHDKiq4fLHog5kWjMzpugjizimgSoEe8HpqxBB5pVy8VwhCvoGQKUL7piiQfcCVigkXo9CCR",
  "key13": "5q5UHGa5sRw95URcuYo6hAji5xp2WhDvkuxPRQPZEQ1ukxh4tonJELKyw2qyj1pyNwnkXuwMmguzW9LUN1X4bKB3",
  "key14": "3KqvwA9iEyWmgJsFxWiZ7LbWzbWN7mL2cG2DJdor6yA8JVQ4VFUcprqxFrwfDT9zTtLspcYCBfpoL8fAfVE2zvMt",
  "key15": "5rtPx6DaCV2LrWVZFJkJHyfSAM83UvS2dnaSvLdU64z22mK4Pdo8PgKdTbfFA8rGSemvToRTSRVDt2wmnHpNn6zr",
  "key16": "3Wn2mPirMVqD22WFSXszsumZq1HHUYbbaBSftVwRD1qDbkzyuJQndTmCgkNw2xttuobkrcHR9bDpjmnjNeAJaYR6",
  "key17": "5vL4sqQBiaBEJ6bjzu6Np3F8NrqcYE9sehJBL6veSVrLg7BmTFqNKwQ3s77RmRruzbZLosRNQFwZXPdXLUxHta2H",
  "key18": "AWBWwQoGJeTPejtYf43aQHnNzxiYSRPAuNz3V28wwmHRT7Ums5bhue5dy1sGDrHn2BUQ6NAK7pG8q5fMoeFqse7",
  "key19": "2EH6U6rbBft2J9nBtenNaMBn5V4NbvrLWsgWFdSLDW5NJxqEzedsP1Q8rmJbtv3bQHMSUaLZMZCXYrkfwxrGhxcq",
  "key20": "27EEMztfTko7c8jt4Jtrgk1uFSuKmmwbqFD7Rd8M1p4mJHPsKpgsT4qXtyWCMurFTVNehpg5vpxh6J1aMUdxDrW2",
  "key21": "4gejndH14HGybrrbxFUpjjH6Dpa4HYsKbrP3FZoDiN4New2BzUHKe7DBzdzGb1ECN4fZXsAanRxvxMmGhenfYDsS",
  "key22": "64SnspRhFFSvaY9Pr99jmqFhjq6CxsT3barteRWmFeZfuYJVZhbmzPdRVnat52Ys59xPSqxQ9bBTpTR4QWCMjPHC",
  "key23": "3KA2zPijVjUhE4YZMer9LftPekS4vMwVJhtkMh8cJT1L231r1HN4xFyhyCH15e65yJbKUcjgytoJfx5d4YDVtq2K",
  "key24": "qAkCLMtAmans2tCKAkrgCsT7zqKc4hHP5VuJznaVsixuzRUNvJ4UQ5w3AYPRPT8jZVh5Hg7YtqjGSx9q4BnwKro",
  "key25": "3Mw68Vq4ihjmW5CyzZEbALBggDE3HUbpB1cBc1gV87m3pazfgd53LuxcZY68LuXtARxbe3KSBc74FiJGiF956QNB",
  "key26": "3Daqhmfjnx7FfvZaS1gQB2dTXS493arquoRKmwf4TUQcQ7SDXQ4M8HpkZ4W6Du6pjcvrRKHN1xdDEgcgRWpt5vNe",
  "key27": "5bbpLYUhCT8iC7BTc8RzUGoSxhtk5NKsJjXHPv41qHi7wgGtfb1nhiM3Fvo4ZQTFnvHZZUyDHtqwP7ptMw9eNyfY",
  "key28": "2Q1qX85M6JH9mN95AttAGPaKd9Fya87eEuL1Zkwivd78wAQKVr7FQKpNQHXG92fP311b2uK88F1yYkNRDAFCgyap",
  "key29": "6iEfAcDCCbrX8yBycSwhXA2RZf57SS271AA9hEyoCdGJdKJGQNozHtGA1nxaMcAyPDRDynD2csCYan13kY4FtSG"
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
