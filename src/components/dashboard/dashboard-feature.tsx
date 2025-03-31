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
    "29hruNzTT6SgPVuyz4jR1xFzDecby2VZaoWW9ZwxzbRj9m3QS4chDo1QbH6y6iMLFjPQjyVNKRUd6uLMXnN2tvsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333c3AbJspEM8jZQbbskAJJuA9HkoBfmqR3noLZoH2ybS7NeYMbCnZ5SVc5MGLYkFa8ejfBzGBy3SghAoRL3qndp",
  "key1": "3XL5KTCFhR1QF8oSVJRNQyeGeWiwM4M4dWkLbyh9iQazGJoLrfTtfFEyKRjQ5uo33dt6ZEcSswexa6cZu1KPY629",
  "key2": "4SYbjMRdRuCeDSrXJNUE5iVMk5SJhZPz1rVNdMhsUxaFSj6Hk8bpAZ5rDrqgy93aR3YsSR9pyCbW6sMKmeLDQndV",
  "key3": "5oxTMEg2asJvqZ6kW2NjCjr1JHwyhm9CeEbRCzL7J7CbaVSkHtFKZ68hFhoRQgQ6yZcnKowu92DhE8zAHTC289UB",
  "key4": "52KNW4yWd1TJqHAtjM9bVQQXicBC9d94R3vvgJYov8vaRTRqyQNisQmZ6FPnrfegbtdyo81VEdQZXmrx3CYfCSvp",
  "key5": "3UQwTNoKXFGEy2GRsENA4R2g9Tfsxq99Zz3ArErkTgneghZXpDXD2iQMuzN82hCadkc5jSuCnZpFGeXwBov9en2F",
  "key6": "2UEDr1t2w9ycw4sVsxg67LTguUcxeyuYUb2ofYVeTpGXxwNzpdGxQTF3STBCcYAtphzLP9KR5tP26zcHnerJaTAT",
  "key7": "5QzgcENtdL2iHFg5myc77g51xCCBweM28bmW4ajfTueZUyhQV1Lw9n7dANhLUC36CXj2eeab7xfYHym27XCDtU8V",
  "key8": "5AqyJWSNciKxQe8MPZcZ7MMdLCGvnxemuQxv5HWW6qDvnnka4CwfnWNadn4WfiKpphc4jUmrhDFEzPUCkbBqvsmq",
  "key9": "tWrgDaX6ybNKyZqEQNnqw3tSetDZXjmBDN8sZSNUiVJQp3gx1QncGEWwKf6ULKGJrQTwNg2bKgCq5mwAEbuVSRQ",
  "key10": "5P5JuM1XztP7LbqibyVujqFr1Seiv2hScM17xPGXGVm1KpdLFNXeRVsKQVRDB5keio1J4p5KFF4FNPVCFX2i2L2J",
  "key11": "44n8y4xkzVKx3ZMfo9NEHNUfff2BFtx9MFXY1GfxCP1oW8wMmW9ULnnz5azJokUu8a1Tbshx9zjWVhhmJq7hUPKV",
  "key12": "5wsTW5E2Spu7AaCmTboG4VeUFx7pKztuusANKSZYcdDKn3pDryze2yJpuQczTWm4TDsaBpcDgsYbuwdC1pcs3oaX",
  "key13": "42vARdaegLRHYca8oqbNWDJhL9bx7pFGbEbR8L12wTGwnXEkfgbC8EHaPKJzEDmCaH3FsrkmijC3fGgsPJXRWhQ5",
  "key14": "4S1utPefSkPRMx3xeHt2g3zADahzJTZ1s2UiVLEnFz8oAefvyhTdefnAAxRCAPRQgDiUZxZi7UgSK5Urquuv2UfJ",
  "key15": "3akyHMSidtGYZ56Gz15vB6rJoRyQ5znYZQLvRjXqp371foU6Scb1BirM3CD1kB38W3Gf2ExzTo5v36i4HGYEZJ9R",
  "key16": "5Y6vtQz24EjTb6uTsiiw3NwkaPerqZ7hbqMCDwfy6mAdvrzBx5ZsA6rpxLbM3MoKWjsCP2qHjnrXUkyAsq4MateJ",
  "key17": "32gGdAfTfrAtPPZ7adNKX33EyiNNEB9vHudXQb4KTphEtTugVXFaUxT9e6MCARYXwnBzFCW9cSL95oTVJo1Dwue1",
  "key18": "Rg3S3hk4HWNN29Upiupze3a5Nqb1ZLXJ9iWoa2NSBRzbwsX4hXkrJLJWvDCP1Db5JSpEH5bZQQ3SsHf3ZMBdGuw",
  "key19": "3LJAjw4ikih1woctCVuqTeD1q9HwGhVVEp5beqtQyAscHiwJgetZnGVujfDwUJ7XAo4Lsw4cToNhaRW5t45Bgphj",
  "key20": "qywo5k6Z8L9nTh6y9yVw5SojwRrhvD3QKTsdSCYddGhpoRhbmvnLdAciYW1xRG3nYv5FRVdayYUpR64sHDzwJTp",
  "key21": "5YTu6EgzwP3NXDL4egsogWYMTqff3HV8LbdtzRjunSxYe2JjdMoKN66jQpP7QhbdWbZqDSdJaNhwWxkecJLx8Bdj",
  "key22": "5zB5dhWmBPS86LxaWF4cVH5WN1rNBKBvGAEp2E7SidoWRMqavPq2gmfUYucb51daZhmVPQJStgSMFy84EEVw8pBK",
  "key23": "3NHDRnsNfBB7qe3Z7ViDD2KucziZ7U8KZonNHWbFUy5Z7iYGD59xR456WfS5RcEbzjZsEcFkrVwtyhdkSfwAyGKc",
  "key24": "oAk9MWpaDqJQebo9U4KaQ4C7nhSmeEE2icmb6xeEpKNHDqenkdbbVYDVozWJqfD9BNqPWkaeZwBqt6iEU5uXhrg",
  "key25": "5N4M3JTTKDPJWhbcRgs76e2wbjwwkZ6K52pZ2f4j7DERmP5sXUxnfVqLfJ6d3aRhEXvGzbBuVnm5nZP6HocwnzV7",
  "key26": "4Mv673g6g3KMYhVmraqjC8KfzmeiRMMt43M5FMrDbgomASHJcEjNVakuDNfcAAHjfpiCHpv5qrqVCorAX5zyqjrV",
  "key27": "3JmJv4UDGTfiQaHoqrUAbeLJ5ou2kzu8ymwxesoAER94RDSAMuXrKe4PcmN8yHSqxiY95g3b4kL9VNKgz6vw44w8",
  "key28": "WKBwk8JJTVMFbjthjqZZf9fTqAD1gvTBKsYCh51zGrkJkAWBzSHYNcHDrR1yBGQBSyNWXvhAgF7BxrYQLgBsANJ",
  "key29": "2gZt4xjM5q8fBhUB13smdAtPiqJXUTXYWEehV4Fpwx3rm4e6ZYQQacHecLv1W2xsZX4fPdCzzfvrM4tParz2Yswe",
  "key30": "4bFHGBfwnQiHC6VMhrekxp2RkC9PwTQtPxm9s1gUF6wBfQoz9nxiXZoQ3DkVj3CwKmpBBSCLUxnBc8Za4Fyjux9T",
  "key31": "zu3RMqLTRRRrovkd2jDbPZqmr5KEvyXD9pwQue7jTk8bcvZTwpYjrzjWrU12PYvRxWnpzxuFvdPVosohRvA7Lh4",
  "key32": "2TfZuqK4wTiD3XkPcHqrdZa5a3yh2DKNWFp4r9QzJTef26S1nkLiiDTBcx75vvhnLPF5fQUy7ZY1K1SiiQDpzWMA",
  "key33": "hFwSa31P4HujagMQGV2cYGL4x2PrtMyLaNNCAaNN9jpWJXMuFbdbUBbF7gGDb8kNgj9zXzCFmojXHnmRqSJN1my",
  "key34": "5WaGuHJaJN6zU97x2Y1xuSqsew2KJiNcpH3VrefuyHYYPqCdibNcYKtgkfYPKbn8QNdHYnu2rxW6KtCV8Z3cJJrv",
  "key35": "4fjJa2SdesWDzE3NENSABQEN35LspqkFfzC1LKfn5soSteXB6tXwxbZm8YfwNhp1TLq4zusLMNJWiwk91qiKa9mQ",
  "key36": "3aVPo3JRSi5bx9ZS6QJot1RojXgZdHGyME8ANGvUTistVVpyCVQdM2wNtHxvzhi7VW3e9zdTUULLXS3ad8Cm1QXZ",
  "key37": "4AK1avuwTdWT7Y3txjTDT5Y5mdkZVTYXBFdRsJ3PHB1m6hYGdRzaQj5dNx9nZg4cP7KKcr9Vx3yAUzPbzdsR8AsR",
  "key38": "QmuFo5qZ5szur5sMrdwPDokTSQwawkc7Wh3BrAmhr6AhhYL74yi6aQ6CtWv1g8cT3rEzTGVjD475zxvZdAajL2A",
  "key39": "2kZx4YAxrT6o3sVKUtPbcpCVMDkDjWXQ93LJiUkGhSkpy7fT2538RUiF1t4nHVf4mWZSi7a8VbF3L3Ew9YY15TTc",
  "key40": "4M72rv1N9Gm3Ankn5UNHnLUcKrv3AQwqU4K8fB6bmqiqHnAqEeyFDs7eCurC8o6UMmwbapFPMUxMjDCtzvyg9QZa",
  "key41": "3CVdWg3Ra1qGiy8n1Ke28hLzSmDMdFJH1Q27iDdAyJXv4C9oX7bKFK56vFtshJ8ybgXdbKfKWHFHqkPEVJ83CDkh",
  "key42": "nuAnC8sDhEchWtQ8qtWCbCRUwGP9z2PeRfPy6R4FGvBAxYp7qmFQTkt7gbr1GSnF7DQYXN2PApNvioYiMR8H6v9",
  "key43": "44Sn85LFoP9UcJSXtQs3NiDJBQafYmuUsXCeRcSq1HXQdJvwHFfRZ9uDEc8Jwio3KysXJjrpnr4Hw6CWeCyNz3DA",
  "key44": "4oBNPax9Q1eAKMh4dZfM8TB4FzaGLjV9UuUcb3ixn2EabK8Un49Hix7SykUAenq3UJfzeyGYwFFFD9QdcA4ryHrW"
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
