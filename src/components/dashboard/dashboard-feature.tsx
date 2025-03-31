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
    "2ontd4HF5P4ra7AsagLCwoQvsuGeixRSwDViztmaBsN7tMy9rh8WbRMo1jTvtayzjTdQMzEoDTrxoSbgTiGZq8Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q653rXQ359XMhMWHNY4vjUyf9nGqgtp7RiYXmJgbWyBTNppK6KUSLyGXQmAe4zco5EoYRxagmjgaqjmaHrfFUx5",
  "key1": "32ALobLisJemV63WrrrWV7NN4v6XkW6rNpemEim8tVDY5UwvzqJwB3P5ZH9ce41oA2c1Mjjy4Dnmh4jvaeEXj45c",
  "key2": "3L1st3M3rTUg2ort3iAaUpAFQsuit6SBQyKsPT6WGUzPgoV9RRdfN16xYM2p52Tf7cjW7s5PFZXDsKuqnsPoc4sE",
  "key3": "qQB8met5g1dv1w7dPa1N6fuacTd6D4skJ64u6SztJWZ9WcyFU4UKGi7zySxLYrpKNxwFpVqBKLEgNZ2P2Yvej16",
  "key4": "5f73BdyVTdmDqnDxar7YbV8DmXkihG3eK4smPBMnVxsZqxzRJ2nNUrRYneLcaiRw3h7euoeH6Th9rzJRDYkMUHhq",
  "key5": "GkF72ToqMDjAX2kHCKvs7xNimDoBcfHMqbcsJu8K71gGJ2a3CnbSdyXEDxLZwRg9e2FZAvDqiAjAMgkU4kDhQ1T",
  "key6": "62TV1P7zHAoUDSjwTVDS1eKtGXJyR2Tj5a2uBxzqHS7vxY2WQN9SLUZbBog9ZcWG8FLa16YymVXLgsy4Ees3SXcB",
  "key7": "4peiGC4DPyHowPRRvPAZXub1baakfCduqiM9hTwHk14vuZ6ovcFxJwitLLenLy7dATys98UNo8FBEsty48zu6wJm",
  "key8": "QR1pamNgBuU2NyZ4PhLVDkStLpmyKeQaJmuy5XgPYRuP68NtjvMAPy1uqyCeNZTgHfFYctvpP7U7h5SPSH5ku7J",
  "key9": "5omqFyXXGPcuuC4WBSDx9WcMnQP3nrCarm7rvD7Pbkc4ZbwpTfEUPKLA69DWd5iQyzHS5fco3CcpYUmDvAXHFnis",
  "key10": "339LStVEJsZhswBaEgPypLUqZkvfEbcByxMrAdgXu82NwjDRHtphjUbGGzUVaWsiQip87BwJ921r4P8DdV6obyZK",
  "key11": "5QQv5v97tWZc5UU1Qgkaosdd6PRyjKGDJy84SM2xNzHtyMhDbdpBrTHuES3ThScE7dvqNCY74Mq79hFmHAYUkj48",
  "key12": "3vHdZMuhmEVnrnfwPYYiHjN3CiEopACBeTUch3fXgJ8erFr5vSg1WkEEhHvuhEh9KXaSBs8f9yW9HKJHDwj6QLv3",
  "key13": "Si1FN1evDsmqx9G6S6d1e7bFxh8o599R8ub2AFBSRvW6KAQpku1tuvaPEa5PnXZL1EdGLwQJAWaXfHUb9M2txEX",
  "key14": "2r1NUBKpPY6L4t1jH4RMN889R9qboRFsdPY16LBVdBAZvayQj5znLL4Lt2n8HKw26Lv5cgBS625Ldd9FfEwTopLH",
  "key15": "3kbWGvYCxBkQSvbdYfGsNvUJfDNcjhfTep8EF8Lt8NZV1j8v8GVnqiCeBDDhgCmKCsSebSRzofuPLbx7pjbTZDXa",
  "key16": "3eTDY2t4aMV8ujECj522EhHPbyD2FDZXrFv3LLjp8BXJWnLcHSwdKTFGkt1bcQcXXVUUmUDTyCiUwQFnhnM5d7Ds",
  "key17": "2S8jREYYeQGGgeaR9bbASaAjwJiK5pn59A86eUQoAsnn8iwhwL6xGr8Y8iC28FmiU6h3mn2EZcZTepmbj76tsKou",
  "key18": "4UipHNNPcwxchA46eCAcsW9Nyg89ffZRDDH53Dm9eUre5Jq1qY98aHhUvrJCLuwGHSTy1oCf7Hjh7d25RpPaUk2q",
  "key19": "25deAi5hSjuvrUc9eRHwU47LiP24FUMwgKkQicq2EpAP8hnuGQJLV2xr15dEP3j1xvyH46Kta2yNMtj96h4UEzAs",
  "key20": "5S6BxMWHGkDFVasAxxevkeuwYL1sEbfksJvJDimbAjXBVHJM4xytbcFHMaCGLaXkG3dj2iEtMG1bJ4GmaFzsUtL8",
  "key21": "2HcNNkT2zYEnpAqsqpDiPpdcXT79a6rBRB9YFfu1bLMveBVZyaLr1CVtnjdkHweQNyYBkRcTSCEYVVRBnjvsNcak",
  "key22": "3XCGWJGQwtAjeq3XseGeHd3v3WMwPa3C6EathcpvN3MPVRSDsof14NsoFMkYrDTyuwrgmcya4mn5i8yMogciTAt3",
  "key23": "3WzjKjziJe5Va9rm9oBujAFEWYUKyfpqEJcYs7sQYBELBcT3nnDPor97g2HqF5VQddH4muMMZVnbSRDoTBbNYuYq",
  "key24": "5zhf42GcRyHcCgbyumksc4VcapzpSimxLAgQiY5sbF47HJLAKNzY1DK7vVZhve81MxWJC2SfprrBkmaoPJJMQpi6",
  "key25": "29dWrATdquNE6WofaHvGyDvRrX9schekRixQQoc9zytJpMF5sAYZNokD1gJW2ABZKyzu7hNajbtfgjWWBAmVNnHA",
  "key26": "bvL9sNqSV8tMDupcWL8XiVU29PuHCQBuSVdkAAAAhGLDUci7vgR9kYtx8NQjKJfx4zbKgqCtF8T8Nfvn7BHZSRW",
  "key27": "2Eo4UqMrkRQYPt1V6WdprSkVfaXbqozTEbq5uPvukeCtnFTd5bGSzMEN6bJxjhFBe2NLx3qZxNwRwgtZgHNLLBug",
  "key28": "WoNahCFAATeoJbPe8dRr1Ru1cS3Q6iEibn97oPQWywi2kWyxgUHGV6TffpkKDdxXXWWc1ewg4gHn17WuquzHEBK",
  "key29": "4pT8hWxDZHfNRcymueDUfXoaq2LkGtudnms3oEHDfmdeznu57yiTKT38h5BB8vSiViD6eJKPQpq9W8fkiHgbLkqq"
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
