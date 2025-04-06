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
    "2Cr5xijQ9kY8rWPTrchqZXMy9W1TmxyNgkLDgxQ38WhyMeR8qU5Y2NKypbNyxbhMqHDYCKUEAdD35nga7tRZjyGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2btxY74nuQKG76JsTKeXT5uND96odyU5brRYTEwyVyeTwXqMcuDjVYcQ7yYq2F6iqdY95BrGmE6LUci6EeHFNF7G",
  "key1": "34XJHJQ9fefzUhvYBJTmBsNBXQziwHkxyWc3GA1K9V2UC9VFrydH5Zw2bfiJjwqCpfpFMmqdqTtuxci2RjA85b8f",
  "key2": "f7e3MtuetTaLPwWuHFASFWyc2CUfCGyCKohpD2bGaYasv9SUqYuwbHdK5CGBW26xJMkLcX27cXiutdtLLUcjSD8",
  "key3": "5MhL9Wv2EoH4V6nr2teeKAYgVAgKJAUGyANdGHEiS7DbATs6FbcUW2E9ywyLkfKafpys9GKtorz2NZULcwJ61tHR",
  "key4": "29xB5HyjRbh1FUbPrVHwjGvNQtQ45jERHB2d56Ff7e6p9KATVWPXWtu34WPhFxYraacVcY5Ycqiy79q7C8oFZFzP",
  "key5": "3CMMJWoqVCgxwt6gyUJdQkcjfUTjHy1hEmDzFCFWvnw54fKxbWfUFsrkJMP5aJX7pkQtub93TgZJGSr7KT1Zennm",
  "key6": "4uccGSfcrngDWuRtwWuPPBwbw3pUgWi79S1wakQPtvmerPd7ievPojWJ48G2RCiZjVpZ1KUbnsjZMWC5V279hbWT",
  "key7": "jK3Bf16SrKocg3WoR7CpwBdXiRhLNhxXkmTBddRJ2P5fb2Bcxy9XeCAzEPA1X37kg2WjmsJ1fTrRd2uofWWQcod",
  "key8": "Bx6Dj8uqD9HceMNp9uRvZZ89SXHnib43ZCVnuYEgfnmANe5h54oDgPKZUcXkR7u6z8StTmDTewpzw3HD9V6MdAJ",
  "key9": "4ZWrHUHMGceuu5B7DB8Vqj4qhAV8swSUZ12J54iFg1H8kBv4Ncwm95RDpzWg3eMiD38mzWWKX77TtZqWCQXRALBa",
  "key10": "4dEKPFoJK4Tw1GSCJ1zP5A9dHgLY9oxVvRHYVzigsjXWbPbQPaMmqLtWCT2wZmsTQWZXEvPo9DFKRWZfQP4bhk7S",
  "key11": "3cESUL3GyoRfKCks5WKZwXj2GkUySUZE7Zw2yF1sehDTo6urFmQqzAYwrNZtTN4xVDia5c4jBWu812sjCNa38jKk",
  "key12": "471QSZahE74noNnPSVMr7euMNZR8Ecah1BkxCqmueUGLj4SDfm6FMNK4QtaP6fiToQgPGihTe9tht9ZNaiMHXJXG",
  "key13": "MWL2fyAETvTW2Gt7UXMF8N3ob6fGo8cK8rrnrgJ24AGkAMV8GXHAWgdNUhoAGyeLsCnh26iu99jVQuwFsDFsp1M",
  "key14": "3s9zkV7XPSSe31ZXeNyiGSpQXSAmoiqHqVofpcuV79oh2dftQebB6xiUW8Aq8wWA8a1kjTNtanVHo7scNwBJ26sZ",
  "key15": "5XALiYPv6mgsZCjDZBSW42vqRSuyie9BpAn4UudwQfetSWiZmDfvmES3n364gwoMFbvLCoYcTWHPKHmUDv7TXFgt",
  "key16": "5BzhXDh5XX7zZxk1KQXy3wtN5Mt4V9FsihJcW7hsPHKcCn8NeikdbUEAFR5r1jrAX2qqMPLsAfgeD922wTeaXCqo",
  "key17": "2toTpRAqXfcicktUc4HtgtW3F3TBGjduDVhuGZ5AD6qDdMG99dSPuHpfj7F9P7GgGNY77fXB6q3PKDSYHXusih7J",
  "key18": "5i6grenQLNBFSVaMDDdWFgxoMjNBzrAPoBobeVzom2V9DmZqsmnGdQNrSKAqdi1aZMLCR82eSqSNHAwXjepqiRQx",
  "key19": "3HtTki5s685V2ZEjogQ4gtNghgpWjFFuJp7QSXQvS68eBgQieLBoLGEHY2pQPCDpJ9RKDDyVfd8EpAvw2xoY6Wo6",
  "key20": "5wJf1nJ8sSizE5qGNWNvfB7cy8cfAJra8Ku4Z8UdB6AERvDWaXzFsrZwEsoam1mKVJ69So1XSyqGStU5gzc4aPnE",
  "key21": "589yBSJhj8LAUAfAg5yF6soenCufXc4sKLzjvohdcQLS1ctnK3K9xowMgiovKxHv7t7ZWqVpsGzX4TxDRvqiPHby",
  "key22": "32bjynAdvUzNaeD94fyQ8CrtKwesd9FYFnxEaPAUo8VLguzZ6oe2y5TMupTGrrd8s2MhduCPqvQ2hZy9rrvmRLRt",
  "key23": "UhvWc729pUUAn665zg3o799NY8cx4KvBPpdtTpPXbpGPmkK7JqF8XDC8AP95yM3L6EkNHZowfQo4Atae37FKdK7",
  "key24": "21HxRz5NoLeDxMDdCjuFyYhLKowEQdUBwiyaHq4BnyP9JPovjUN8dnwg1SWHe9ngDu6ZXme2t5kpkkSmszLon9sW",
  "key25": "3NasnHzduhnDQ6JSn5FR6pq4cxhAdMP9oKCPcFBcwbUEGKnZXL5cSFmpwNSP6heQ7BGnx4e9BYmERmaBxSqNHgtR"
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
