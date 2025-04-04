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
    "35h4Bw6qgpWFA6K61ykF3YpNLLhzSLZ3972obybjzUk6j4Lusbi7SwuwNzQpQxHhwzCi3dUAssoVs34oaRvjnzLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUKsJMshyDr79cHShwrdC1TN784kw2W2HtKCgwrTxCkf2jRCuQtsBUB4htX7MHDyHsgZ5KEpyBqYFsSJPZVf3zu",
  "key1": "44DHGJtRm844LbncujVYrG38s5qVdifccxMHupXNSgHTY3jBAZKnuxekGVggonLVZYLSoyoYrJCfMCTZbUNnNZiN",
  "key2": "3rgoGWaHiDHM62Tf5SguHYPccWPiJsXhpsm9XEop6PAr9tAs8cRDebABXaYR78Y9ZcMkfDW2tXbqUe2eF2VCYjUC",
  "key3": "MQirxi7EeFgaUBkEg6Tpr3cZ9GeCfPfhnXSFKxmL9VG7EJck4Ew3i7DPenKhuLxBvNyckdMQgEAWfFw8mcN4vqP",
  "key4": "49RqDDKrhoT8NWq89NYkrT24CxN2qZQoU8wPe6r9WarD7AUThgQmTssGJJ9K3KBsTLYEGoLdR36SjEwJoD1mDeGv",
  "key5": "39bqSFmdxtWXo7bGrAKuhAco755UWWaESwN1EgFgUjHWE7afnKE3DdtrQDvQBbyxqSE9gQ31Nups9KK2Y2R2ynEZ",
  "key6": "ZTfDunFy3fPWoRo7M4z4Gp7qW9iK3WukTSR6PW4idjQe6VwcbkitWKqRMDAcctcKaW2ArX7Mof6xS2RXt4NxhzU",
  "key7": "5xCnazW3RUmeRrZoCxmRo3BnRwUEuLqLPNxRpvUQF2tpbwskmxL2rucoxAMfRm1V8Mn5aEivHgFsmum7XAZQURLR",
  "key8": "3XCn9RGwiUX72QRgZrZzVtikKR9xDpEun6BYT12PTncyr7ACz7u6MAMPeS2BJsop5tQbBUET5zP7UFQvDa5nevSL",
  "key9": "2pf8o9KyMJaahRVqEX4wAPMswtXJmY9NfF2AbcYRh44R2nnQwapdNAmvhQHo85h73M65WmBaFZDWamP4adVCyrrq",
  "key10": "5R2wWcAJLefvmyMWHFubyqWYVNBt4ryvyXqe9wRE2bSPNYgXyJUjSmwRZcusFqp6GFLqckVt8DwBstVgExDJvaG7",
  "key11": "26FCeKEhb82u9G2W4KaEy8hCpRGy7rtgFKFjJ5BanJ5tJbHBvMAZ67EhSaHQFfpEoRLTzDB4gateQMTvXkJfxNav",
  "key12": "5LgQhbn6kG8fBhgzoaPwGy726Cexm5GZBZPgz6RPmKVfh2QsQeNaaFy7AniCffu5qC3MJp4MoPiXALnZauurv3ZA",
  "key13": "27bBtwkuXXGyqQzWAFTTaFcLKrzB1YjZD8EYrSKuxC4P9xAe8BtEx9g2hHbjVT1HgqHvPHiRXuXzTzjmnD83VTvr",
  "key14": "5vsiePykBEyrfV2yHC4LbN8yctbQgPxjFtFmPYFT4tpwDynF2BqTJkDrgKHPZKgdfsfuRDLqBYx9zaGy47sC5KLR",
  "key15": "3Shczwn5GujYVy7cwRDFNqEMnteM5bxAoMkgUy2X6kjVAJWBKdQEwcpE6tBnrcamR3TQswCfLkW2w9LYbUTzuoyQ",
  "key16": "2uEp81JH9hjJAsb8QWcjGUYjf1JmZfUYkCxxtz3KW7qFFTbqBXvAAAYrEhGwnXUVYHoVKAhsnXBo41GBpq8dG8Bk",
  "key17": "5BpwQhcMS2T2ZbR85miEJnSpwriZVeYAHvSDxZWT5J75JHZns3Re4pUMT7vgiiKUdpcVTLBdUtPaWqeygS1fdgNw",
  "key18": "2C7JpB6hS8nUsDHQVp2Duo34qeTACZmXqFPaXfVPkN1FCVnbhkeW6XHU3oPXwAW6ap7zVHGGViB3YAEq2xExaUYp",
  "key19": "4kqLDbFjYbsGSx2G47rurewEnXcoLGMFuaVzRdYR1G3t4ox5Ttvxbs45U53UuV7nAsfYVm6EFhQgkKBi14phDTbB",
  "key20": "5j2eLjpfDoZ66A5NrPAX1JH1FWS9x4bpmYnC1SoJcnGHJSSXpTH4r5HbWXqZiVFCAk9RKxym3JUDzmRwSjwwps8e",
  "key21": "46XnqURMySzN4ULjYaTauVxi4KR23bMaGmvJB5s7kTBT55wjDZNYiYG2xT6cB4tcpBwz8qTo5Xc8p3egCs3cgbmd",
  "key22": "3YuMg1WqCRXWbWgUFB4U9bvpp1sQayTcH8H4ieyxWX43SMcMvx6chusBcwojFQqp9sgcYHM9nGZEqAn8Jk69DavH",
  "key23": "4S1f2zKVFQMcG9VQmYgUGxe5JPDnA7btXvKVqw434Hqco2jLi7Jtcz5uRe3rUs7TPeHCbYVJsNbwERovYjZm2ApF",
  "key24": "5wzw8qREJwbAfSGA2hptJPtmxJaUqamC8FwUvQ8vofntfRh4Kjb1wdVhPMPqK9VS6w1srzgPFNnPBrzHbc5dUjBn",
  "key25": "vWmiKq16cnf6gsByoGBbfkN7Lt8DvagAN9YijKgGQrboCHm8hW7trHn9hRtdTs22EpZRkjRZi2tF7yteRXTkhW9"
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
