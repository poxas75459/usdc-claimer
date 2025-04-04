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
    "pxm9hdMaTaDdpD2pnbjGzMqYKzQxHTkQhygjx1bb8BZgLQ7HHEsoiCStRDojZamZNhKcS9LqRwQQ7KHnpuTW5oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wq3SQb9Tbx4SxVz7dcKfQP8KxDECSJwbfgaBiGBQDo5hve3FGULHDn8pBi1jQGe5KRKysSjR4t68ZTr4srb8PE5",
  "key1": "5pre2JJ93TBB8TCfNWMTyXN7Y6J8kEMVLSrUYwrhFLMXUrFqX8BiwKdjZvvuYYwaGmDr1pumsbjqZHn7zerh6YBP",
  "key2": "4AXHBnDo7U1mfqBKwDgT9RPyG1uTHtSvBUGBMHxiV3RET2BjUrYHNwAiMkYpR7EeVcABvb3uG59Sj58FXngwKejG",
  "key3": "2varsPH2Vgcxpvnxq8oQxamojA9mHxu79nzUyyPKtBAnMWY74L8jQTXjeu7qrPcKqUygKFP7qfGM65dGsTYSQrAh",
  "key4": "5wD9keiafYCds1y5nFqmPcQTcm2Yi6k21FA2jAmFB8mViUrr8jBeayNyL3TfwAwUfWQ4du2rjee3aHFrwXJFTU71",
  "key5": "4TNTiyoANUynfKEC5HnvL15NXDcRciQZNNPYPsgtUomUxWdrydGLbg1tyybUMqzixv6BAnrH1ajgYBphiKMP5d2Z",
  "key6": "krbR8vsQvWgfus64uHnEErpnCRp3PGsFxAKw178DUrLcoSDnmmkMQeRUzLTmo9X3EySygYRMQv5woV37XAF8nQm",
  "key7": "4FCw8scJkk6VndKE67LSejWAkbUJMr4TwGg4eWdGWyHos91DQFRz7vDakL3VVesA6WDWubcgcgNWB5r7BpmeQnZv",
  "key8": "2zMRXr4JhCFfVaDP8xnnbwgcYRrhWaRs7BRFw5DnGqsr6X9pDi4QXJwn2UoVqQiHwXDbrFU499LLpXT7Vy1EcosZ",
  "key9": "3iVyKGpV6JwD2UFRSKLbCMMTDtLAinYLuNXXey2b7WxbuXczznZxJbMiGwYhdogFZivhPtWvkUxp8NReg6XP3JxE",
  "key10": "3VUNyTbGAMR1ZLDcssTxCFU4MJcpHF8CnbbikLU69zyYmpCH5JiukB7o5mQVki7PtDxjsXixscfCb32KbJSZUqdz",
  "key11": "2GSKjNtwMA1kpv72xbc12jKYkM7ZxcuAh8oMWXpTou1e8EzwmKDsHLXB33HknZeDqPcsknnaY3qcTt6goRcjLDYC",
  "key12": "3sEm18U8z2oaRR15dNYUChfYBrXfAKQhEGbkvDkK4vURTZnEfyhWj8gCT4jsQcsLnTmswxwY2P2Dn2j58C41v8pg",
  "key13": "53Ucv7FK7w88KP1qkkL9E8JZbe68uBBfjRt9dk69Aj9dPds4MUFvQBU7q9RMzodsSbxRsQtHiqkBM8JFa7oAWhS7",
  "key14": "394AuMHVH5PoakF2Trhq1oUwhUK347tf4x7Vm4hpn8sVgXdXQehm3Mrugffh4BCpygWrLz15pqMPterTn5YoJ5iG",
  "key15": "4Tkyk6CpoLy9cyqHrLPjbBozmYU69i7UonFdUsWVny9n7ckZwA7MVEX1xkjbf5UkLcD5nszypyLX47S79XnnWkpA",
  "key16": "47M3n3xcyxNpztKQ8E5YNnmczsWiouxaWAa5MutEcUa4RRiS43zmspV4eD2g71m2NfcieBqaYdyXtGGvDbHZUre5",
  "key17": "3pqM4txpWQZeBbkwy4eNjwUM3eco8VLuR5uCwRHFg3JLYH2DcTrAMxMqxziPzQmhcTTHqZE4sJzXCZDYdJJrrttF",
  "key18": "5FZhShDPCUEMPAPTdojZeg13dSx9w2gUxcMo7VLgXrDK7HuZkyZMZQ9FcKePtbjWcJriyjmkGFn9sqBPiZs2jTMK",
  "key19": "3kGvoJbrYq31abSUA3zUf76WDtYaVkP6aBc8TTAZThazWN6gcDqc1FKNF2GgUgrw91UyysP21LAu245MZmSVCPg7",
  "key20": "2LuLXMPw74u2bHv9v4aewHPSGcc6yMfWTgFaFycLrqkPtc5CfwKfRM8VJqHydaxmtdNsDi7dnyDPYjS8h8xaP9pi",
  "key21": "2PVBH1T6xSRfTZAGM9Ag92gJzHwxYLvwBNsJ22qkDrr9fGejeiKetyfd5Y1NA2QeaypBbp3Y4x4BCRSSUgmNkiki",
  "key22": "2Y6rL5ZJQTUxFaVhtrcYwELdxBCBYGofJ2bwSkiKyRTYrrpuy67kHrcjukPbhHRYnsPGVRzAtQfgqmc91mYbDjEr",
  "key23": "5UQZKL2FrZwRy6SE1VUUhyXyN23Rr9L7KSQLMiNdyTC5DSJhNAJGg3BZWgyTawdCYu4MCZ9TxHqYEAKB3QpuRZJC",
  "key24": "3Gi1enncZ98uTpYtHEbewx239AGjv8FfiwUNPjsweGBjBdoYtDnXLkJBQHm1Uhj1TcnmXVR5EZQkGnpY1czKjMje",
  "key25": "254BK6TL8Gco9dW8tdnRvgv2JrFcCjULCdP1kWNjdBw74L5wUaN4ztMt2sn7s4bRCXhWC6QiwJMzbnQiKxPrdw9t",
  "key26": "4r6tfQLvNNkm93mLtDbECvoABkN1MkFn3mN4JUGuyDPqVYZ6gNVDMiqW7NpE4AcbUuMjPLygi6HkHWTUchmdkEDR",
  "key27": "5sRNPULm8cP6CayH5N4Cr6sJKhVwzYHneYmXD6r6oRwQCSUXhtxEJmGYqGvFAk4JT3tRzN2Pbupgs7Z7nHYV3Sy",
  "key28": "3LkHXE86UQL3sFYiB95bTRC7mmbWDmMBVZDix5FRMs8YQPAKyERCpZy8C8EbTM6NfHtsDwiXyTs2mutR51KY1T9C",
  "key29": "3hqZE3kgbGGHGTNaC8w4puMywL4mykEhYEYVbTrRjm8RYPPHX9dX3gFX6dK7wkM7RSDG4bPwpgUWeoB3A7s7Ee3M",
  "key30": "4DDufa53D9WCG1K1XUbo6c3LhCgZYDen9GajoxaTVJxJBVZz9TGubFUWQzyTMg18K9JjNtqnF6xkDnqDDTkEYvZ",
  "key31": "3Lcu5NxA8BAiYgAxErEP6MCzXdW9NMpRsjtw9WNKDBNacwYVE6CTpdWvxsszYUN47PLKL4qRhPZbinC2vFPyuSmk",
  "key32": "37e3BXCFASwGRYfhJPnfVrAfL515DD3RYZwG4DcaajCBw1sHt2biKZM9KXsWJme5D3rmDK9o8jLBH2YzPKmwxX7z",
  "key33": "3Up5Gp2mbVoeztmzs5EAEBUnx14TrfW7NbvW6C5Fwgoa6AwsJ5o8Qcg4KveWPFhBzaHo86pC72w3NvQUwXyqdqqF"
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
