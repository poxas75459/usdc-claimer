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
    "61jd4waXbQqMkUrHwaKiwZyQ6GT8tbC6VSDUkoU1onoEomq6Te3NfaXt9Z2P7X8LoKPUnFLCFj2fjbtq6hqrHeA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55obZZ6nbQaTJyGn8UrU92zsvDMtyDZnvqiCXufbUTp8yzFNrXRwWTF2KXSJ5x4KJYTrnevHqgj7sHavEH87JmGh",
  "key1": "2BAyqWNAMtRjh45YMfRYUXwSesfAYURnWrYYzg3xBktcQX9d1RF3EjQUyDFAehxSK5z9BGQeqBDeabhJc5DXgrNZ",
  "key2": "qAaBzFM69iaHiubevHtRZmQqAZJ8uEz9Kuj2HQSnFcS3KJGicWecgn7gxmjorxCsnfMy1ctqAVWzz6TPNk9ateJ",
  "key3": "3bqsLdpTMrwKHd8W4vpWQdky7rX6hKePWFheExYENHjUgHJWvWsEexqMqVpKgh6U2TfHK8CDDjStfHqHSq9Jx5SP",
  "key4": "3ZmY1uUhqpBHwgx3YuC52oswn1eXx59eMiZmnKqgy8wTKwTxXnM8VYKuBeWBQCTbN1vQjToHGzFDummkWixn5NXL",
  "key5": "4MDACYJfqLHkAQCvofEX54vuV1zVugXidtW9jKgBzuwUVgW96w5Tq9Gi61nTi7EDGByFCPMhADHnC5Li6ApYH1Aj",
  "key6": "5XoK5FLfF1epCV3QZmmY7wDTKYHvCGBz4e359JxE7Rjb1oNn3oKrg1R2QkYvZbx7U23beWTCL6GXET8pfBiz2nf1",
  "key7": "5EWBLH3gUuLKFpEHcAotsAzKUWC9iyygjs4wcf6JJyFAqZGfB9UgpDn6xzX7NpmsdkPWjtqEjCnwQ2DETc2fMELb",
  "key8": "3zmcLdwh6nc4hX88ZxM7P1rdRy8AwGcHr62ZDNo1MvH6LhbigF22ATtUcM5RZsNnt5YTMqAWvnKAXpAdt8AqY8U2",
  "key9": "57Fns5CquZFpkHWjocnwAa1R2gkn4kz4jV1g65osGPNQSVBtmNyZyUGWWd1tPoA8AatcGGAQb3VaR5xQwfbRP9HH",
  "key10": "37Xqex8JrhshyQYo3cdshVrh1eRDfa1eoQouuziWjPGX3f3eQrYc4xEnZc3PHBDtqRZuvHAdK5diyjRJZVRiEqxe",
  "key11": "2uwZbSbeNSPrbsWHeAgHt56XGCGNDVk9wnV3SSvyxEPTeHtQgJKZ5RpHbbKpR2125f87bMchB4rTCVBCdYeaAbQX",
  "key12": "4Em5adz9rpipGbodmvjb5WHPkRyxbFHjGNjKNX6dVTtnrZLYv446oNcUJQWfWwmYFdJq1Uvn3sSS1goGiyt1K2RC",
  "key13": "2ymbrAq2vwWmbshd54LdNnJC4dBCLdyoEHP4tx7TZxcGUwHpaTenEY4CyDXU7UHH6sXQdfbEwC5PLjB8h5Ke242X",
  "key14": "4LiU16TCZVE9PWCuJm69c6ukzjsW7tsNVknnsxrBifiEVecBnokZV4PjA5buofuMaDcTt1wq5tdf3pAejFW9EwNA",
  "key15": "24iBWtme2ErPfzSxbeKQnVnRGSt132xQirXiJBvHTxijsmAiBScsbemAu5zZCKfk28RLnnYRQHeZs4Yra7VgMhpM",
  "key16": "VoLMb1umQ6KNLtZqRqHcPHsjNEpK9N6iE2AsYQsaJeVqGHdMDs6Rv3QFkyRMQY8Pe6bc8FuYhPnfARFrfZCqu1e",
  "key17": "5bvp1cg17RdAUhZn18bFxBtDymf1o9P4of9AMSshcpnM4fqBzT6vi2DEmZ4YxHX5SCkexQtECYPZnfcxvjmu1gee",
  "key18": "35oJPrxgZUU8BK83Xs2PArgTGZ5CMWRPYDbeS7SDEL2fQxeiv7dWGkxn3SHAFYSoMnXwuEmtsbCE8LDP14Jpe8sF",
  "key19": "2LPQ9Lb6RdcPoQRnjZKZfZnjhjzYbqU6RQmvEm3H8vNdfFwbceTrnfRmhbbfy1xtotAQ2SrRP3n3cftECmoPWsKq",
  "key20": "5jGszx9wZh3waYzXiA1ZYDeAj6vu7fmgXTQBcT3wHvJgD9LnH31YMKswLpXXDcgPMap8UVHPpquiQ3e2jbY6ASXi",
  "key21": "3Pe9ttaYgAG6DR9T5PfR49MPVtioXNQfYaumthUwyiqWvqSAQ7NbNDm7cqXw3b6G9Xk881bBPt6oiRnTXPqbCeTD",
  "key22": "sPyLGXevuHrW5XVg4SZquwL7911e5hQf6SboAah9sMaPwDveHwEBFyNEAHQJJri1bW5dSpA9eCrWQZNeXZXkS8m",
  "key23": "4REz9qFjaX2Vt9jiKjayj46xACDT5ydJWmqXcXCmzNt8hiheieVUpo9nH3aXxQzukAq1UPmqgLvvdERDbappAMBb",
  "key24": "5JU4R1xrqzaBZ3mpX8UoyqZAxvWP5Cu59rQK8aaZPQgVreYxESpAgWCdYqHTYbjg95jNe188mgSra4rNLE5k1vJr",
  "key25": "3hCSoogWGuH8XppygWrQuHKZQy7o6WpJUcLesBoSQD3DpN9YRdr6bnTSf4WVX1U2QfcQLo63ktZ34XHXcTBxonba",
  "key26": "DGE1gqcCeE8wT52VFmTqa3o2LH3fBGpMAL3Aq5MJkbUjtyw9LEr3MmuK1rHZQcUXTts1B2uUFgQZ6WghWessarJ",
  "key27": "wdECmcqdvHuvGtq3YxMEjW5tYmbJ8hqNvWTffgkdZpjJLN3peQ6PxC3nybLQ44T7yPfYgcAGoMzan9uqQKKqaeV",
  "key28": "5jLW5x4NQxPWe5SYzWvjzDHSr4ZpXuRggXMZRF3J13uE5UMEELzGEJuTmX9LSjWRCGJenojRWhpmHaZCVdywyrVr",
  "key29": "41tAdxTfSjbpm5TPk4wsNk7o8PXmAP9Ev4BL2hSqgdXeXuX6wDjHi3qhgirKkosnWiSA9skpSR5vN35qPNHydZjU",
  "key30": "2wmus6RRXwx6mnrZY7EZ3sumwxihVSb4cLL95mdYPwuySkybfi3Ut7kgLtax5a2jNa6YtQDBznFrWZLyEn3NMuo6",
  "key31": "3UNU3e8ao2a168PxBXjb5Jejz86Zifa2XKtTw8fYRPGxW86Zi5wNDFKPGs2it8ey9Xf2wg2R8vrFc72GYiSUBGmH",
  "key32": "5RjAhcokGpiNXxCFMCTc77pbsxkBhU6y6b35ek6kEZrPRmurhdd5424iTsCZv9BgeQxr5ZexeaNe8osdjiTqCiwX",
  "key33": "3yezPyfSRM3okJkLZos3xK2pvHEFyGQFARyZF4GWw6Eq9vnfmGQi4esH5nMWtSM3eES7sdJbZFzhwGrQgKhRTXkE",
  "key34": "4sMhnv1kgAMgTNugpP4r1Qz5nmET8wTdktemVUKPKS1vEW6JJGqG2xQ2WnwwEbvgpbKrsgSL9JbfkuEYM5L4wovE",
  "key35": "5eGxtUJyFw9dAVJ85yifLyYFrwKr7PZjFDCwTMrtwvLxJvUdmCgvsExKdQK4Sgma4Vvs8vMXMtjvcpQwufbaS4dQ",
  "key36": "2jFjsxV4W7x88NrbZvpTdHBsRijYjFFaLEeUpyQReUQbMqXMX8YT1FPEhM1ia1JhUDezqEr37DEdHUqGaNy2GmJ7",
  "key37": "o4WKyakRadtGrjZY9oj4RTL1yueNy5DKC8HWQoFdkq2NcnEJMuphp9omdrSqkrvQdzGzyf65CWWuRDzakduRZfG",
  "key38": "gmuhQkXrT574mbmmjn8xbi7JaGUn2r9Bzn9t2vGue8rH32waHqyXdRwmWnNK6D3A4bsCfsYHNNvFYdT7YpKrFN8",
  "key39": "58mHKjU4WMncz6jubb8iGVFh2x8UnWCCjcDHak7vyHLT8esbHyfjkvk9DmRPtFqSAXwWFR16Nya8wgJWamtKRiq1",
  "key40": "4sPt9vGQJ8Bt1KshuPa4JX7BSE2pSPcd77qAa3cmoZJUATpA52Z2U6o5xvxhfrxuZtQgAYzQzzG1Faaj2iuohN9J"
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
