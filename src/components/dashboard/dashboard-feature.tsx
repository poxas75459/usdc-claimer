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
    "3TXxgGjzNGiEDQhkKqRgfqvCjhPAifERNofuX1ip9Qq3xoKd2YUBMQygEzMBXCZoadTfizgjkBd6sYBg74CQMNxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjF2bP36CJKQqyG4KWKmWU5ZCToV1biTx4WsUZRRMLQEv1nxc7e6zLkGxArZ3VFoRhTcDCp5pfKKAdyA8Y787Hn",
  "key1": "3sK6Vap1KufaSv124FCkqpDZ7Ymc8ndEFi61CAUwd7vdRXiEeyXcYh83QyfCjNnU3ezZ8LvttaLWEW2E28Vzupu7",
  "key2": "2Qjj6hJVHSCzVMFdfYJZ3HEKzFng5qFao9UgVNVaifDohhEpUUN3ZpyNKyZtaisQf6QwY9Xcy1MFit2HKemDnJL2",
  "key3": "3ZY7bVgDWa2EofdW2aSeiuW5XBMWr9vgfaP8TU3R3UaNNoqty6rC65uCmdtCEuetDK9bJiipdEyCc9KxuHYy1U2o",
  "key4": "63Uyuqrkoi9yotywU3WWo9aTmpCa1DkU42aq5vSydmsBtowGh7JBwswpYSm77t8fHJkCQHL56KhaLgUbFTiFkz4R",
  "key5": "575ep5fQ7pwXudkJvNtRoDwygsL1tUyok7TUMmKB6eAvDYdAvJFYMsesQPVmz2M8Tt1VGLbVaiuSYEooWJ2xtJ7c",
  "key6": "echurzGYkKzuy418SyFR9mE6rsx5TZZ6CqS3WqXcVMsnFcKWkaQnYTVAkjEttY8G3MvjCBTsnL63nKuPv292CwA",
  "key7": "26qRmWwAuDftCRvKwg2WE8P7nLGcMwmVAXgQqCmUCjN9tFSZsJSNET65Mcxs9JRvYkqTiiaTVf7vPTPhCkAw3Ayb",
  "key8": "5wd4xkqTY8gpknuVnzb9KQQxA6Xv9QxjRkizAcxkNzpNE7Z88M8JkvHzZzjsVPgNPrb8CHDcGaACSgNuBfgb1VsF",
  "key9": "2Ba8Ra3Zmo3MinnYzJ2WW8aZEC53ABSLyosSgsLgqzBH1DeHo5o5RvJkdFce1w9YkTcgCgc86QyYFEZ8nsh71zvU",
  "key10": "2wAjgmukA33sNGZU9GxTU9hfWZQeqfTaA5Tb46hptUYPxdKDvdyUjCYDkyN2QWv1NMRqsVZPPfsNMZKNPZqByPJH",
  "key11": "5nFY9cFZYWXkSicig89VjBr9ZhkG1v3uGEyM2hxvXRnuEKvCxNdjXpTQqUbjbpfSZ3GNg1mjsC22rbxwyjpXXWAV",
  "key12": "4jxGKSHt4iSqQHP4d1Tf6c4dEnNmQFfoT5QD19AFkv4yzafkpWDiKnZZgPdxecQoUmzcqTU488tYiAFadnmEhVSu",
  "key13": "5FVZgcFjbdppRViYzTDNUmwSEfJxiXrL9L8tMbWR8rL3n34r1hCRykGDFqBdofWh8AgJbhhPFCfkNG8aXHLdiRnz",
  "key14": "65W96zRmEvBd4L8bioyUsZWy84Ub7ezfXpwwp3Huzm7woAfFEztrfB7m6Yv7KGxyFjM8dWxeZtUnpf2dv1CDkNcV",
  "key15": "5jb3gUS4Zz5CrUak6BpJTs6RkyXvvMc4tM4nS3pdJvGS7uCYFnpu9YPwqaGwBXtsKRkNXeJhKrwQbPMgjwwyF81g",
  "key16": "3TCvTnGaZHztTW9PM4XBczZofsd2Gs2Kcazb7vficVuYToLXTNPDf6xTaepftTo3zWFoWB6tpYgKNZwRjJifTAk",
  "key17": "5wPXAKzWXQhQe4ebRLjQkQA12thX2ra3bCiSZGAHC4i93mGwnL3CyZmtDfuKaKV9nvNemVoC5RFc8M4VJ8i6ZjVJ",
  "key18": "2ctNy4vuqhYuJoBPxaw9QxWgvMoitmQvk38RR3oYoDgiVCwwFqMcNTBcEzE3q9SxBRqUYmo8HFW82UM6vRuN1ZdJ",
  "key19": "LFYTMxLGAqUfbCGxEdBVBs63EL4GpM7uRymifA3Q9m49DLWZ1aDBsxnEvqBLXBxPu7N9qmQB33tip4aeVoyoWy3",
  "key20": "QW7pYg9AEbkhpBXT2VgP5MHGMTCbSGiqSTCVyd1YQzdMEBCjcWTbFdmtvGewYRVFVcJM9zLTHCe9tQp4i7Y78g8",
  "key21": "25SdbQZgYJNks4vv6rpXbtPCTfVYcX3QSn8Bom1kpTx5Md97PBoMpLdQxCBHRrCwiTX1Y5HNeR49hgGy3Mme1Vnp",
  "key22": "4svCrLZr6cxy2VELUVgwcVkss745EXioRqBSXxqo6k3UM6NwUnAhByVi34JUypmiGLEVEB6RHdahMTXnzVwiJKbs",
  "key23": "4De1wY7ywVvWQHJrmDj1rAfyCmoXqksrMu362XsnbQWKdESJStxZP7dNBhrB6uTf3hmEo6Hrig4CgNCwcc6BMSEb",
  "key24": "4edqB1j5qp753UDnapdfYviEZo6mGaPwyxhLAChbprU195g2dugyMG5dzHahEipkaLQnJ6cNJk2q1jde6CCVCPXt",
  "key25": "4uyLbjJdDeys8H3U89BH2V79ca18sb2nawDVhjrpRerWXsNw92H8Hb4htYPSaBcH6jQHT59rgByWfum5Hgph1j53",
  "key26": "5LGPDTdddUgLqFFnWwb6rzUvDarkWFybjZqBW8gtUcYePBy5cFduWkTRtxnwEa71cixZqtHJSmnof4EPc56z4znv",
  "key27": "s8QSNNfWUhqFyBQ7Pz2TQmfxvFN3b7KvzB4LTnZQ1p5F4Vxf1RENvH5GoHdh7jqfxrtVy8evzCPzaKTjpdD1zrB",
  "key28": "G5RnTdBfqMp7t6Jp5Tz3oi7R8S8TfrL4gXoNErEyV8yfDsWozWf9V9bAyyN3H56fwqnuz9tRnmHBbQisCLsVdZr",
  "key29": "4Uh6gqH3ZhYro4fySEVTTwGMpT8tP4FzTtN1zUdLWTaeiu7eRMG9yUNVYRLm8gFnB2p2Y5SDA465hn96tWgkAF7C",
  "key30": "4VXCeVhsucNGxeiZx21ZxTJKHpycw81U9FZweuH4tV3H8bCazzyH38AVsqaFSFCbZJoQTasnkHY7RRr2kNptndAP",
  "key31": "24cxcv14yTaoDQVkTu7NG4AzDWGpMWGGA4p8Mnkc55m2VbeYW1RvUUqZR3VJvWxjvg95soFd1xNtiPWsV54EfwbF",
  "key32": "2BMzjH6MmZu2J5wWUVcp4X9xbUVVNVy9NjWqwzrRHDV62wNb9r6D9H4uu8t5AoHiwQGioPi4HTcB9t549RGiz8M8",
  "key33": "3wFQHVqRfz6craxYhxH1LYDhc33VdjED1GW8bVQDTyvNXUsstgRFTqavdvxTfYmVtbAzvkTjZknRtybH6wtChG2g",
  "key34": "5GSb2zYjdJvwRampotDkzx3ceri2oEPYgEtjVRZb52mJ9R6zPE2VCCr7ANSTKtA63UGcyh6UWwWV3ADoYS4D5YhA",
  "key35": "5ouX9BpBNAFYys7vD2MF4WWBCYysGcp6an8FdDJK8PcjbTRNwv2ddkVifFsLAmsyieEPZ4qfaqQmW9xn3haZyqyy",
  "key36": "5NhgWRL9Wuj1nCXAXgd6QUPtx13htFWv92utTREAFLWkUd8hcNyAmyh5JzBLDGWg5XZ49VYz3ykbM2kEDPyjtcDS",
  "key37": "5tjCKU5B6uGMz7N16PYjWsaLfpjUu58afaK28FGpFnQFoTFv4aB2XdCn8u6YLALyxsCaTRW3i1ASbMBV1ymB7MJF",
  "key38": "25zdcAxqFhZ5xVH3w8Ege6F4K26trZeL7zCQBETd4QKBuMgyaRC92ZSdMB31MRP1rYvZ4UgtUwQCRLUDFjmmxPE6",
  "key39": "2q7U6D3mgq8BdJAeioWpb3W6F41dju2G4bctMmumu96EgKNXrrgAJSQaWBwfoUBEYdAVDUWp6Kdn2ixHFYPqeCy4",
  "key40": "5CQq3EpgAkdiXy7ogtrRsViFtAeegtUmAXcDdAiQJDGxPRC1bQKdX1MxhzYqJo7npDMdDcxjHKxpvBNdJz61Z7cH",
  "key41": "3KfjWyVKWZpGPawgy1bTNLatmc98jZZcD5vChJxJYZKGPT7oXTcknzXi2i1c6vjk6VgHrnkcBW2jcnpHMHrQG42P"
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
