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
    "4A6Et6sXsDR972wznog6mHoxRRpcdWzMeGgYUtu7Ws6DfxRHHjZpEbsJLo8Cp8JDYkTSkCzkPs1sbE5SdJHCM1FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjSxUzYn2PL1x2Zgsvgm3J9eJV774Nt4TDGHmzUwceoRneKPa3nZHgM6RaDz5Zgfccgk5r3sDYa1EBa5yGdc5ib",
  "key1": "2WZELo3nUx12GP1CEGKy5UiChsVmcc5j49rMUAtGSDhmvChpENiEgEWwT4XoubHLBPowsCFx8U8Svck78PGb77DV",
  "key2": "5SfrjxLzMV8inT4nMKQ1CyBappYHx5SbuMrUZuVSm8t2DJNMvFQphSZS33PZLXaVr9yv6imqxP3GKYedGbHLBu5N",
  "key3": "4BvXZTxaqbhTo5iQUV56y2B1tJRtGRywR8w1rMZZEY1Y9bE1VcJQx457tGwP6p3E9n3u7vjWA68D8NBuNcHXLXy1",
  "key4": "kfCE2WxHBfyoTkkWqPGzmGXgAAzoR6hFJJwNPVLYv2uk4EMordgQ9h5V7ERzfgUyLUCryZJSoJUnZPLkEmv1RF6",
  "key5": "3Aww9mMBRUCHGM22zevwBwdukSeYSshU4SqurQB4RfYfpNDLuWfNQpPqUsq4vGHd3Qif1ihTKMkPVaCNkPpUFEgB",
  "key6": "3BQHeLBfpMRHndBYDZ9432UP7m8jxBNXnh2toy5d41GdV2u9kLrh3NnyE541mH2bStBPUSVbfUspEDm7zoJtmFy4",
  "key7": "5YyCAG4xtv8qjW1863QdZeb6VTAn8PsVy9j5WpN2FqT5HFt73UHxRwt77azQMYUsLH39Sakzb45sT9A189az6ZLD",
  "key8": "3a1qw5bUc4veLiF9FeswvDCwWyNdm52B3saf1827TBcgsTedztcyX7o8uzS5bthQZFMNyfN3ePcFPAYLjW6JAf21",
  "key9": "Z75Eny9NAKyfzbu45774f4mJ9bL6gpxnwXyfdt2ctebLyMTRD4JrYvtBiXy4f2WcWSVWNf8x2TCPPHSihTf7hth",
  "key10": "4SkjQeXpFGCG7G7yEoKfm68R7YQXTaoGBHvQtp9SrsvZrNcxxSYPXyLsWkCsFD34otV7z9vqkbq88rTQ3bga7Kdm",
  "key11": "tNYa66sgijKhwjq6izGNDnw2KZ4VMSjGHPJkuBYxyKfaXVJ9WPGHvH8BUuDoF6Fpfhuhn7MekD96HXmsvyQkWpy",
  "key12": "5ZPoWMfgpcwiimLP1iTQ2jJvQRrswXtb3rfgrNx1Y3m7qgJEKJPTmHxPWWhQf42BVZtDC4oMwsLot5qjP7T94X2t",
  "key13": "2ErwzbH4oCqmYJfEXxQNWMWA18xah8RNMPRkCazXYb9rzAmgWCZQDXte4HGuUsk2Ynz9q53ESBD2czajd5xWq9ET",
  "key14": "65pNkFMYMX1HTauM5Uvd3zk9kT1Ab7sPbbXJEV4a6QBNQM2GrG1piaJ4iGKsB7QwWj67kGzfQGcSkBxBoDBKhZuU",
  "key15": "2ugxXPcoactfpTbtQgndUrAxxLWQsduRBu2h5DshtQFmGVekDWukajQFD9sot5cT72t6LJd1sVmtGVNfsvw2kULs",
  "key16": "57jpxW1p1YpCCec1ebGGZ2L4G83btyCRS8qLZseZ7P5sGfDBtx2k9UfpsYahzTJ6B7ocQE42UZdNiPVZm9ooUMbN",
  "key17": "Mb64DG618FWEBrWT8kqphqL4ZkNrFYcN3XmuoHebUKsotqsnjipr3dF3wESJPQpexr1qm2NP6nZTdRJgtXcQsSx",
  "key18": "UAN2qj8SGn1orKh52mBFvmGR1CMDPJUt74wfxiUYYkXAifGPAZpTZ9ZAGKCs8g9ADECjmnNzqnu3Uf3Sj1SkQB1",
  "key19": "5bWtjBQh6tAmpYiEVEKT68w7QVtWG9T9XtWf38beg4524zNY3wQ6douWMcqaamZ66ARbpSkooGjKb4eonH6K5gJ",
  "key20": "2z22m9a7ok789hqZmSSszHV7VeTZzJ66jSGtmG5NkwazbodNyU8sNtuUKbiJJifeUQWPK5bkXef8oqmQ6zzjPK31",
  "key21": "2SKcWjyi5DZ9cWtss6oEkb2JoNJffVVjiEA9QX1QkAKxZaHFQHENBhew6p13K1AXYWk9NVuHvhTYEiGPaTUBNUq2",
  "key22": "6JXXxbNUPdtK1LSkBLQ9AU7aAWm3chsUnxDk1CFDxyBydnRMZFyNHVbnz7xdedje99D4geXAXPvDYb4qcHJWmHN",
  "key23": "4pasA2iftS1mCM7tHvHdMVzUMve5vkmPu9NkXM33MQ6dGd8yzryUi9fWpU511yYj5bZBX75x32NotgErQ5HGgEb3",
  "key24": "4VuzsocBi19cZcxhz546JduoeGvNkx8QKCBKpmKs97BQ7A19JUc2gT5iRp9Wf9kLrnL76bQYRW72dgby5bKfgtz9",
  "key25": "5MbtfnZj1PBVFqWCppVjpsQjH9vcDuZF6hh9KwwmdC8pcTPLG1SNtikUiEj6sBoXpytnYZumTqqq5Xmfi9jbrTtf",
  "key26": "3NY7V798iq6xUjt8Q3VsuovdRXUK375ZWwNnU26dcK22uQwqVvrYwZK487niRJttGrB7WDTA1NHqNoK1fBdeerjA",
  "key27": "3UbegixHieK6GmbKsTExsLM8WsRDniKjkxmw3jY3jBpLSRNofRDiyukXj6tDP879y8TVoVr7BHrferxw9YV46JwR",
  "key28": "6vzLT946ySyrVHNqnW6vqY3yEE7cR7APkyoXoXKJpzmbySX1RBx2BNVfq61pYjbqi1wuQiUizwbyzVugYN93EQR",
  "key29": "3msJap6ZH6ni8hz5Tvb5RWhe7Q7uQgLmFb8qcbBauQpDbLJuGCKgNAUb2HeHFCEoGhgR9rmkE368pCXUH5jirHnK",
  "key30": "Qr2dAeLAkNNA5XWmcK8AVigv3WRnTy14cyNFuST3wcwGfXhoN7JjVst6cFqy71bYAqBU5cuVDBHbY48eVaYW1B1",
  "key31": "2SqHK6iS1WD1ZuxQeCmAtDaUjuYuifCB6iH7AtCiAVtDXCyajy2B1YV34DJJTBoN95y16bbaGFHDxi4p6dQjQEML",
  "key32": "21fRLHvyKkDJqs8TKdovNr5C1LC2HD9UxjPrEsbVmbkmXnb8Th6e5TNRbQCvoupLPVz383szgZNfd9eUQBuwneMt",
  "key33": "2iiS6h7yFjsJpuGi6vttzTf6gXRG2kCrPEFsY5mAVwk9DCqebz619jiW7cqkguW7JsnDv24fbAAwNv1NFBzSWZY9"
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
