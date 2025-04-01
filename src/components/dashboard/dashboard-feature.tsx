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
    "4d8j2w2Z3EdNwArqAMEXkAu7nt29seHcQCjGSgbJedNeQjVLekjEwoDSVbBAV35Unoq8XhvgpUt6pbC7m1fZfpeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NanywYZuwz4axdkAm8tpTChDqMAjLEc5gcwMYPySWChwyhxR86HnqXE6NysPgGH8fid6BD7vB3PRu7MKjvApJP",
  "key1": "5LvcFsUo1CBxbiZKsXsH6tbUSF3xyaWmzPJk2ZQiSxDNNurWDvswp1dSkvDuZuEHn6F2VaYaWA7yRPGB4eLrsZnz",
  "key2": "5LzyE11KSXAQeceean1C12L6W7y6uAkGF4oVzFuE2BffZ6qa8zjGhgPfhmGLZDsK2ueaAKXCSmvzZzxcFkBGEhw8",
  "key3": "2zHYRXkXKAXrLK6nAEoy7G1VTc8QHrWwC9Cemx2NThbfsyTucEsSjeyXiiaX8WqhzM7xqugNCj7w3dRW1hHWJLeL",
  "key4": "4QLbFhR4quV8paCk2kozyNg2A64QQprCmjw5JuQB1oxd6CvofXSSF5nAC96P4jrbyV86v1wiThdrL9LtGWBAokzt",
  "key5": "4Vrsy8ovYcwYqzMtMZoeyGCNz8huzHx3VFPKM2e9BUf7MNQDfDE5LwTochsRuyktVERDsAborEKzGi7ffFfhPQZA",
  "key6": "eHZzgLu8MfSYF4PTdcFxEj867e4UJW7gkrgpJJQD8ArdJdfEVSFQQdyxEpJ5LMLbLdFHHkDmxWbtMBohbD6abVX",
  "key7": "3E5uNcRTUq2E38kuSgwEk6YbAtiWCizJEvBL8SU4TVFJyPMa9R78Rb3Ci2xVfHkF7mHhjjxN371c1Nf5YFC2q4i1",
  "key8": "5pRs7kgfDFuV3nx3Mh969KqQV4v71BDjKtUuXPA1Xn1JAWSB9MLsSGAMKwsYkZ5s5uR8ce8kSE5CxFUFWYWBGsLA",
  "key9": "3AwRafGGeSkn1JBzBphQZqnwGxFiRFWfcxMUeiWQ2NsvvYphTGC1mMVnutNU33KEeS3VSBnUT59ZZb53eMtEZtYb",
  "key10": "5VrT3TD9sUznwJPDXAnjpZyofuRPsz3QZ8USvr2jhVMTsWQujCEXniHTdSFfVGSuXBQzpio6XyZtTFGTe4827AMZ",
  "key11": "4Hen1baZPxa74AwwdMLJqxsPqfXLeLRzHfoSjysLz2V6vWsZ2Ug2fSJ6L5aoE94bkDdKbYXLjK7v5wkyTLKWpkLm",
  "key12": "3dgpEPaZX4av6Q9zc1uJJqyg49wt7R6aMi8aQUFH4BnuQLPegEeZT6FkQLf3RHyrERReRrokb8zHp5gqpqDcfo53",
  "key13": "4vDoSd8nE819gPQ6yyge4qCQ8ag4LQvenSPWn1eVA8Ck1oVdCYv4kMns2UZhkgWoz7E7Uu1RHF7kzFNMELS4dvAE",
  "key14": "3Y9cBrYm9NfCUwsv5LWJcggtUFGieKPKmeDwLhLFEFrskHKNpKoQZqstwD5bTQz2FCdm2vzNySdJbAVR1uF2mU2k",
  "key15": "ZetxcfoUq5jt4ouxdcwwEcU7y2JMncs18xvvLKNdCFf212dpFYAuniU2BgY9E3Q7GmjTNJS6dMbJDMGhyuBxoxZ",
  "key16": "d2KR7GFA6wVD7RhAnDAJmAX4Dpeo8AFYoP9Lp7kkxThVTmtBJarkVuo3bhDQFJdv9E2yjriRMcfgfJ7LN2HTQFs",
  "key17": "5ek37aqGCUex9ur3uTHAuYbftxtpjwukgC93cyxqGaQWpquR76zMTtL58RXChTQEvMiKLWQbAVqxTBsE5T79NUQU",
  "key18": "59z2yb9ybP76Kr31SqWWSDbGHYwTjJGi2upZMh3noyEbYHqvYyuSNFwWW6E9az9tH61eJud9XT6oEDEW7QnAD7p9",
  "key19": "ThQowqRA4SRTDVj8FP4fku7SM1Gpkw7ekDbnskuaoW16iNPLckRRgD17hD9DPqBTiLBadQEtY3fpdbarfC8wXXS",
  "key20": "5HirGWd73haiYRRrST9e35Qzs6t9qmtRkmfSFqH3n757Ba9NFmRcnQdWJBuJPdcapxYis1vtfakyyiPVdkYQMTpS",
  "key21": "4EDBApZPtAAxfE5zFRtEsSwEgZLpxbWTmcgY4Q8Ck9eMJi5Q8uogGzwiFmpQDazfEGRf8LjWigoBY7WibMoogpg7",
  "key22": "2K1FNGM8tpdtgF1KeR1x1JhSo77AQEKPwqwubvneYnkYVdg39Syoeav4WZFjBugjLMCa7ewQugvAJGT3JeXNErz2",
  "key23": "rV4PX4FN6qdiW8nxuEYc2dXWizm4ajfvVAFcRRKBDHWyedX3qtw6GetjFY17KpvEWCQp6ZGJaBCTrD8eJKuTWbz",
  "key24": "5G92Dju9zQ59Q5TSgDm3dqrcN9baDgTWwj7Urfy1im48RSKjvFnQiQ11wGHkHEM7m1idc8f2dsigzZUeF4bKNph7",
  "key25": "34YYqm7WeehFP8vqaXae5XKxdgYrMVi5ZggqyxYd4xr3UEiptenyYfkv58PSQGXPdr1NzWNsbB2MV8ikEq8bB2T",
  "key26": "4bhh7hDASuFUmWnDpMwWWYqPkwoNrFvpp2bQPsJSJHExkN1arRdbZLhgk3wKCzEJhAPqDmErFhMXrV1B6FcZtzKE",
  "key27": "1LpYA1hqqnj2h58xcjhCpdhgEyyCuQiUApgc2cCsAPDuP8RxR2yN9vsAM5pvMdBTj7QjMuwBSSCG6dMZzjX5HpE",
  "key28": "2mA588iTb6h16p9anbfCBZ3kM7hTR5oDeXWVqZQbjWu84o2vYhSTnZjYJrTzSEuWeA6ASqDeyPRYjZvdwQZMyxRt",
  "key29": "3uwtqsN6Y3rn39dFabmjBRTAfZczgPu15GijMVbLrxoanGwZETBRVjnrczQwwU3A7mjwNoYF4xMy3FN81nywNpFp"
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
