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
    "3GDHNRTfto2zpHvJ9nNzH9wKxJVvuWQMfw1f1asWgx7EwsbCkw5VT2XbanCwtpQtbt4B7eBKEUPXN6Q7AkppZsCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PGy71MRSCFan5VD9NhoDDdp3jHh1QWd1FVEFshBPDZapMuJBZe2cTBGFnAFxS7Awexb9iGr19YCBkV4VgTQvAbU",
  "key1": "2kq74ivGpW48TVK2utsGwRN66wmc8bpY9fWV6wcrRKvSCzAZy7DjjDHGJVFZBdAnmzytk8kADRCsHct3HE1yfvF6",
  "key2": "RqxaUsPv3CHvGQFjb8GdMCyBLUhgfAm6V6rhq3ofuP3ZqJAANSGMVosi36GSznnwC669ETCJbmMPWaicP9e2wWM",
  "key3": "2LpHCBTZmQqfce7u3YbNfUB3mSE9f4p2e47nfXXdowSHnhCLcbtrHkZEv9wyPmfi1UJz8oStiaapVoZ69qUCPete",
  "key4": "2vA8Zp1bKShKyJ9vxaNCd1qpMxWFqegMCysUnmsr3Cocb2BwEZ84jKMYfP511JcqYofpLWJKQ1eBzoTL74ibkn8r",
  "key5": "63kqeDnraFZR6eThWaLMk7D6kjqgLod1a4iH4yqDnfkuorEnNxL3f1zGTFwHiSUdFayYahZZGf2ndCkGQP5AnhLx",
  "key6": "2akewU6NdfnVN6GUijKzNabRhfrzm6JNXZABL3ZvAym8bGbRfGxJ3cAPp4x9nAHCEuyrYZBm1asyuWd9KFrUz1rn",
  "key7": "22qBvsRN82Lnz9Xcjb6mnhPREfieZRyiBiVmPtW7qQYrdFCqYZ2Ly7dXKo3hBYBkvfYEtWrzs1sNmHf7mAtf683m",
  "key8": "4Y4BrWt5y54X4VLDdTV68xY8bZbZq3ZLjrTJcMuDRW5Fi8gN6VwiizeNiSs49mfNTsQ5dPQzn82S7ZGHiKsE8mKW",
  "key9": "55DvG6Z7vbM4VmHMbKvcK4KrKozT1Ep37PoPeiWvvN6yG6aVeXtAKbzmYtxD7Jyo3XhxEttRF1Ww72ocZWBk2pU6",
  "key10": "YpPYuvcBhuGe6nzrHpgLgUBF6ms59brA54ifVsJ4ca3AaJoGZG3sh8ZknqoSjyieSnhqHUWPxxoZ3Q8ptNQ3Deh",
  "key11": "5umNsKT6LQNLtVZvLXNd6NSVZ8QEcvXHyvK4w2e9W7KxwwvjWjbwJ5wyBrUief2WeeWetZiGpyQVyavBQAcHgRbt",
  "key12": "hebpeRAY1rdgDmw1E1S9EVfBa8adJMxUSEPyzaFZq32mufBwTt8FHCrQE9zfNRKkh6wMifA63WWx3QeGEKQVxKE",
  "key13": "4kQDh4UMz6iAWCT6mbgqBUWYDRE3hpFLrb8VRPDQJ3DTBdNvitV8YytULbP4ePc2LNCqUYCfsZWKGwQY3ZH2Ns7m",
  "key14": "szGRa9RtofLVNEAL7yQuq4715VfLPRueBeneEzKwJfWfoep8Qku89J1kzFwaA7CeqD6E6Uwv1iW6bDRELiEX8wi",
  "key15": "3zFrTmPGWeXfzqKjCxAJdEyBMMESzv7qu8fgjrPaPT47DrmdcGjKFymkJYmsc33CuyQCo41PaVffVQJLqKaAtTWP",
  "key16": "EpGmtuQJzgXkFFmvCjMRfdD1P9ZdDPnCU25YYP6vn6FHzNW99u83s2quuCokQqDoCmAYxMXF8EQqp77X7YS48Xd",
  "key17": "2isirbMrH2zAs37QqtXgfdkn6BkN1d1ZXaSpdWzudVakR8VUx7ZvV5o39MwfJqFKb7zr6Z21nmYFJW328mwS8QgV",
  "key18": "34192dtWBPqYyNCCVNbiNZ8Z6g2DkSGC4uB1iRxZtUvXL6tHfE2JvjAfMTZCCBHHzweBKuCaZWqQQjRNG3KMwZkc",
  "key19": "4uGnB5tKDtSAkrF7Z34FhMK61EBqF3MGAfro73UvLHxjy1hUiVUhE71iz32c543fgJ2CGf61zr83PTysjmKG7knR",
  "key20": "SCEAxqDN44r4kewHYdN5WzGu1ZMfAdEPva6SNPnc1rH36Pypo3FoZuqnaU8CXWLwdSBuYsWxhSEZxQaHTn7VgCX",
  "key21": "CRoBNsBq1SxzT3q9LnM5kVaSKP5ztSqjGMdXeghqi2aK8YoVaP4t246Y6kYsACBswVC2HWijGoRGoQNuykemrgq",
  "key22": "36HNHXU8X5WnNCQz5H1asQFSRUf6eAjr6BXgYGqkF7yojD3drpiGURzb3CqUdT3t9Kn4hLebK4rwbdW4jEHGikE3",
  "key23": "Q86T5RdZfSMK3LGoGT7kotTjxfeMzkxoKFMQ19kKf1EUkQfcbMqTFGbwJv51mSWExH3687b4ditpfBgfaCwo7aB",
  "key24": "2uUssgCeWHHEuswbu6ikZwfWoULyUFzabyhGRQM5Ge1xWxaQyxVb6aGW55Z9QXshdDcCeSvGXYEjMDsUKjeeKS5T",
  "key25": "5FkT9T6KMn8mFsBJPSTxPJSSM4KGS1NZuKwctR9ScHrKCJyCU4dLQkFVYWvmeS2goq9zgwyfyqhPuyHhnbmAM2dL",
  "key26": "4uXns8emCGbJ2VFWEW5LnxSddxzsDFbKwR6Pd3ps1CA3sdou3JN2X573oN766JN5yETGfdsh9GvY1hsimmC7xaP6",
  "key27": "2c6Y5T7k313MQSDoZ4T3EmMpgmSWZ576FaLQUdvUTApnkqUodP48GUwDTDZ2QwhLbCThSe2fcvvazBsLKrtqEBCR",
  "key28": "SmyspYnCAp8boP6fWSofSFFNmxk2R3onrJYJch2K6H3g6KUZ3YwUvCPW6pqgY3CpuFGPyYni1RMnNyQntLw9yP4",
  "key29": "sRgwCnnKntjTviknXmEcbFYSu4dWnZJ8DUhyfCsgjpvJeGXEjkhaAFkShn7dDZ4PVcQrnbsTy7JSx8JSn1eEfic",
  "key30": "64roC9nqqT1D96vCms5nECCQafGxKHAY5hwu1TKBGoFLZFjDMqdW2ef5jqrnLr2ZrvaS8CxsM13sbu7zT2PuYemD",
  "key31": "uQbTHntgEYEgYeWnfexPXU6SiABdYUy2cePkWw5nTEHToA5R19jJoiX3E41godbyZFcZb5BpA8PuWN7rHu7rSAi",
  "key32": "2MLPdghvT3tkVLmQ1G85oxqUVqijtXznDKABGYYHxBp5GEWRoZ9xjCJk2bkAuNBbeVaiHCPpYj5rZDcKhoVxDJtG",
  "key33": "SdDDcxB9Gkn85k7C25JmL4oSfRmKB1YkdERmPyXMoE776LaGp85YKEjBhX1vH8e7p1NpS6SeujdfK7Uo8f8Shuq",
  "key34": "2A92HeXUZ5xcSWqCSmXtxwXrnd1SYEyYF6F3sTJwP4EweLUpXbAJ1C6YF2Sp89Eugb3DFjXGhuTd9es3k8Wy8nVm",
  "key35": "63vrjH3pfPxafHoCHv3ZrtmmDTr2tou5WURryvDBECyBg7ZxrMyW5JaebwWcympmsQ7LQVLEjA15swU57bYqSa1E",
  "key36": "6i6hAqRoNFGnn19nfAjGpVXbMXMVFVvXPLYoDMYT6QmTQZpFzHtEcmoWmqaenPXeKq3xRjwGPXSbZHWkADSQ9Yi",
  "key37": "3gm8mpfaBFdn3DHGxqkyyG8VPMQXFfTMR2EseJEsbwrpYEeCmUvvxcbdm6MhkDpwq7SzcfkZ7b9CJZcgZjo9sTpv",
  "key38": "298jPvM4ZuPNXH9apMnaEJ9YKL4teS2a4SUgCoWbbopbeWxcXVDNRhB4XoKs1qciRvypJcJqW3jmPSWV6f333d5U",
  "key39": "2kyBsEzoAniokR73BDYDeFeGztxdPJS4mnWomvYReG13QB9FAS2SY4b6qL6sFg4CU7XzoCw4kYZKusFZ4GnaX2hE"
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
