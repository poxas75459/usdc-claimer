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
    "3iiSrRvvzhLkhNSBzTaAmqNtr6nZbp4jaVAby6Vtp4sCqRMaeEcp4hsMAzBUnR1qoaZyhtjbPmFqdq19XBS7ML13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hg8esfgURtWxJsVZP8Ltd6HHRDHVpkLJXRn4XqisLhjyPgrzP7Y5tLDUimUqCwR8W7NYQUtqiTj49Df9RRDFUhw",
  "key1": "35MnGYBo2iTi9tXemm7JeFt6PfzVX4TdexooKzPyCiYS1GqaXVKXmvUFGfcNj1hJVAzAxaKgdudSwCmKk6rmR3u2",
  "key2": "44rX7irZoGVwk6fvo5gKCy1Zj2WuSRjdRJtw5jMhyMz6KJ7g5pL4uU1QVPR7ZjxWXYHewNxm1aFV4gJgYTC6GNYb",
  "key3": "3zfKvyr2Nco5Dvr75zNS94FMvRnJoeFoBvYg56f3ZSFfvNVNpanjrsw4WjwseoLwMrd7hz6McYQBq3TEhFaYWhTR",
  "key4": "2uRhmsUj5cEWqRf2yNZMLkpX8diDkQV6PHFVZoZm5Li2bWQ3xvaD883ERcJktjtsSfSx9S8Z8tnARjGf5gvfm3Xo",
  "key5": "2rd74JqDH8AtNhypFnMUFnu82P4hpuEh2tD2FDvrw8DDQLAjegGrebCXRzLUUswstQfV26t4LEVp8GrgL2og7QgE",
  "key6": "67aHujB6j5Z1CpHJ5fVYf1zZSz6dHaWtD1dtgHtDU32TxHeFthJkKGZD9MZ6FQGgzxkgWhtVqtTJgXJwwa6yN5Gy",
  "key7": "zd9pCfMXETnkCDdYb6hxMcscPwxPwuFckEtoFfpS3S7urvFWKqcEo92FwFcyxrZ31ujBQKRr2LSVcVmX3KPR459",
  "key8": "2bK52ZPpWveXf4tAt1M5kUgJfXeML5Art8KEwvzrmLk45i6x8LxYfnAPi1Zkw9qfmQVcRxqiaWs2osCU3RWfcFua",
  "key9": "3wEu2ocwuD7ZfJTug5mqeJz9jonFnhTH6BjmYBXqjCcXfT6oW1kQD6aCJQJy4tS5W3E97BX2ZE5NPM6miu64FJJx",
  "key10": "3LRxiBKPJwcahqZpPAkJQe6KgX45eGfbhsYEtdrvMQGvR53vcaaNz4M2G77JvjpQWmvhTPFWfCsdMqke8aCMfNQ8",
  "key11": "36PsyQiRYKKiJ7VYAag22Zb7hpLDDHgRASVkwGNi1s6nfmbAi7mfKZK4Gox349UZhet5JSZrUKU69Qbhi9CKZLUo",
  "key12": "5vNfjURY6xzyv6YXgmMxSsWSDtEVCcNJyvr8gPY4k5QgaAeQxcGWL5tr4MLhvsvp7G2CFKJqpiHWKxyTaWgReMYP",
  "key13": "5bCYNoJNqK2tkoVKHbX43sXf7vchDZLNi7gnviCww2YDZe8JxPaUYYhkdf5337Pi1dEofPHVNqyKxonUBc77CpcN",
  "key14": "d3MtbSaaM4FiZ37keorc1xha7BNCRYbGcNhEqug3TMZ4tpGb4RZ2chyoswUzeoZaXKkigxZyn5cyaqDH5qo16j8",
  "key15": "4ZfYX5wkMra9NcVdwVHzXM9N29aYFsET3wtjZ2eLtiSQzUALjfH8d8R6Ms3FYaUmcFYBgPSP4YYqCj8UdoijsJzN",
  "key16": "533WxaccpxAHZU2ieHHrERjDM6xTzjRV2xTdGRBbHu2Mynt734KVTWMKEpiiA3AqBVfMoH2UHVTbm9WLJ3reYuu3",
  "key17": "VeeKvBjTje7jbPRK6LgtVNGof76t8tqooiXrveXTu42NgjmijUgweQqeQPTHrX929o9ttU42nkfxFEsTrFSpDJm",
  "key18": "2kGwdsmjhFAKSt9s4bVZC4LtSXyEkLESJD3NdFYFehbxvhWbEZ6Cb4dcrk6sb6MPGTJFcXWHPxhCndSTjV93NMCQ",
  "key19": "4SHFGfVmC1ucL7HmojAfxTCK68UgPG86wzMXp22d17MrKCuSeFKh513HHVv6RWqAgq1nw4qqNAQoJcR9XPq6fpAX",
  "key20": "2MH1pfeUqZ34CY8j1Jrsn1F1ELfkMo1P3vNVSAUdYPhKRExsTAjrZVuAqvsM7KeidADswcSRdT3cQ3MBXcAqgN7t",
  "key21": "4r9p8rGHQ45vQHfzvqHod42AMmFCP36GMYWK7wizgSW7w6ZK4BhZC3q9qZp5raEqWQfxQWyf1jVSeoFfRaxnz3rF",
  "key22": "4ZTczK78NLBpXQEwsBLhk9TuJC5caH4ZHdRJ27Q6SWQTYwRWPipsTVHFbSwc7ZujjwWeLRhcRkPHZJtHVc4VqcL1",
  "key23": "59GTZUmJJ7ZaMZkwLZdH3pr65hK4QNboJibdYAYWDDxQBHF8UHk5Yspaj8tpKFCWqdbPN585efWyo3jxF8zxkWmf",
  "key24": "4BSyDTKP9YrFVGS2G9e1772DDZzdoFRT15x4C2yc88jxX5zW6mhRWrdgzZjtpUKduEpJ2fTJB4ZJPHzhBDY3xwvN",
  "key25": "5TcMfSjyGXQxXzPiMR3ttgsXhqKj9zT51sebPXfvbpwCzS1V478nBs83B5RzD4gqUkufpqEb9Ab1cWXvfY7pbnx3",
  "key26": "48A7Q57mhXfFr26VeUuezn119KQbArBFgu8ewnKu5cUfE3r5dRNNbetmBF8r2mnWU5zqTkhxcv42RB5f5ge2LqUZ",
  "key27": "3mczZrhubXaGXtMY96zrwZV1y5py5hV3YnMmqp1bUYSn8kD8j7qS7ZQsSvBNz1dedGPPRZeQf97C7hr12D1netVK",
  "key28": "eoeUs5BATBpiB6cTzq6asW5S1XefCEaAKnP8nSarP7jZzoz1EfYkVACvTeejjMxTmrEg9bC65dqxVCt4UGF8T1v",
  "key29": "3W1GhuDzwpShDLMQzb5zeFz7dzkjpUGgNdFvhnLFHFDHGcXQo48Ry5dV7592VAh9kYdeZj35CwyP3EhGtCcxBa47",
  "key30": "4TuhPjcn4YtRM1WMbjtALyVG89QrJXkGEc1CoQoUrwCiBZzQKu85oGg289pond4u4FJftYXCyxxTV9Xbpv9wiMbF",
  "key31": "5PXFngbFyiMjftHr7ZZJrY4kYwTZhnkPCSjHDJkaLGxTejFcMXKiXjJtSy8mRK3vD1pgb4mAiAb36US1CEjtSH4o",
  "key32": "5h1e3zTgx61bPbgFptKkW29fDcQKkX4zdrWLuMuAjYdpeeomwRembj8owNWddGyBYt1YiGtXV4FxWiNZhfQRhYPt",
  "key33": "2BCjLF7Nd1YK8PdgEu2WT2y7nPA7kKqFhukKBxmSuhJNKFwYB1JdePuGPPox6ZEUvtPSnbvZTxmrgPBv4nPgAXFH",
  "key34": "2EJ9T6WiP19qNxnBwD1EXtEJqmJhQKEH7Xs6hUreDm64fAFjocYLny2wQcppVMBsYzQghVoiDR757wqHZXJ24PnC",
  "key35": "26tjZ5GCxGznLmHXcw8A42yvxqXDFCTCdrsqp1LjyYb8fihLSA15spT322pgjhmuYnokfDC7XMyQWqxf2ry4hw2b",
  "key36": "MzcCQWRULHo59BXtQp1DUn3C1xQvdacWutY5kcvftU6yj8qjF9bUU29m4d1RKCkKMLLmJqrjevEeKpbrDFRPSGj",
  "key37": "3GmR6KstV7cL1EDHaPBVSavS9qzhXi4hro21m3kNY2iaTHitVN4npDkWJKFRvpzL3qG5Rnc78RvZhjhU6JWC8gXG",
  "key38": "2bG8HCjQMnYwbciicbQjU2MrV9uk5GBmtZdaYMMVxE6W1jaXYJbnBqdu7Bf3Skj5LXwEupGjhk5sEV935JMjWHMz",
  "key39": "4HMW51aXkkvBQdudWYb87B3wBTxCohJQFbX232yEDtCpP5qrpubFHGVS3jG9cuGaxjvyTLvndASLDrUdeFJfP2DK",
  "key40": "4NK2TQ9gkaXM2c6VneAXPHs78ZiY9y1khRWAjTKGUjSeQhqjnD45BmX6Bom8ybGHKaEqZRhmPDw9mMn1UB7b61rh",
  "key41": "EFLcNaSApp5JSxdYWRnskWokov3tbqpx9eVj4BiMtvepXKJdFHRiyPRvmZwT9dNrzgQacBPqPbpj51iaakMgaT8",
  "key42": "5GJjkaL6ZAYvm9GVuGL3zY5M8oTLfx3gZnWXvAoZnRnasDYmiy1ebzDq9hqQCm8EtQucE6bM9G2x6GhA7HqKC3Pz",
  "key43": "3w4WG28CCWr9xmWwabR7344Ysyzo9CJVPQ7PWPSabiTMkQWHukwgEbSaJSRee6uhL6j2hTCyUSNVUWVTBmfHDCPp",
  "key44": "3oRnLFYg6wZ5VuhHFSmZzvgaGYZoTkAFP63Boi73p5ii8kUvbYBva4fURXmQyXdWVKsNhM8suhWMrPZmK3DVpA1h",
  "key45": "5SqfbntWsdKZcwuZUDUTt1mRjY1qisb9kGd9uAArQuWoBQJaurLem6duoGb4zpDZwHqRCPWcoMiaxJHwCn8mcbdJ",
  "key46": "CcrBqEKWTHzei4S9Cu49oBUQT18FKyzYNuESjT3vYEV7xeDTJ6J97SrKSQycXk4trLjk5691KmChrhEpgCpdTCF"
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
