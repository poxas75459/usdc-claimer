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
    "X9ASWF4jepEsQi8iRmqdPwnvN2bLKzu5asyFj3LroXWEtmEaCzf4nrp3foRf6PiaziupXrEqcLXGo3cZvHhSd2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4ck3cGQxdb29tZySARPDrXH5etynYrvKkdpoqEqVCr4t9kvkf1AfceKw6r7NNqdyoLd6sHXnUdFaHkQghfPZcg",
  "key1": "3CC5cvG1ZFfeUH9M43Jg27tCdknTnoojvF1TSRLBmhCyhBzKwtCnSHerBvT6QwvfR3RgYVZ3NGaSHF2Kve1crK7b",
  "key2": "25q4gLHo6X2cRer1QgfoKzUhfaM3EKRG58dQUCLdKxhyWeXAyrr9q97n6cZjqAgJULho5tCnJMeryWRdNLMPMnqi",
  "key3": "3zPTYSRW9UfFUgYPgStMawUY4x6HbjVLCUmfi9KduJ93xeJjYvxJQiPKo4cZwBebQSGNM8CecBhMfVpgzeSXKYag",
  "key4": "3qXbzZ9VpnE6vvN8tivvpqDhRDzMbcADRYjgW4Ft31LFamwjxFMRBsx7NsCftV2BHCtfq7u24nnepGFz25WQ36GS",
  "key5": "892YpCbiSFyfGd8vQBfEVJPQN2Y5qQupeYTp6FEKCsE3CriojstB1G5kqD3j2GsYemsPght9amugL8jmju76o8t",
  "key6": "5pTJbNaafvRrXyBefkYYypupZfnsef8wKEaXQFZL6J3uhTySMxeyEhrAxDWvFHsuGyntrTYuegSgAkvbjM6KSdvd",
  "key7": "2YUR5qdQBSgfQ2TfUNRwCeQcL951STpFW1r4EAZwvVPX7ZZPLtXtrZrpXSfXoLRZmWkoaxtoaZajquxZncfvchFa",
  "key8": "4QgjwjsZ3a5cau3TMS42qjDwSzdBCKvuqn17rWorYqCmTzCdCCSJtb1oEJdPSXu6jnmS3qts3EFu8gwoWacAbhqe",
  "key9": "4CxVu3NTqatxVtpZSipRv2uvSt7XToSuzxvU9mM75PahtFvSu4ZeoqQzu3BQnjjJeKBJRRN6oF237TxawtN3CGxC",
  "key10": "5ikj78VWK9NGbRqHET9p7kykX5VX6xzmbeKBLcqHuF56W2QJ5xXY6zUFs18YTm8K9D4TLgRDkPvcrnbJkiXjQVsw",
  "key11": "4oA9xUz5ges6t7LVWgj8pm6rsiCfcvSbbuCyYs1QzWVHPTb4D1WqJeUKRidZw9phUJj1gdgWtvvevKoiaFa7Hy3h",
  "key12": "4gAaPssE3s6wsd6kLwp8kRynsaEHSxYZgrwch2DobVNmXEQLqGkDBrBbQru1Vf9Cme5NkWFiUW8qq1h3oDAWwePC",
  "key13": "486DTRs29bDLZMHNUwWbKqroJhFg82PzU5SF2feUdyH2VcK8kMUxFmryWP3csekZq8s5F4vAS2crGmPbEMzxxwLb",
  "key14": "4hWrnNjqpKaveGPqzkdkNKi62jAMXAttTf6UfZqZF7jp5F9DvHoKw7kfTJwnRxuonPeVSwVoKyd5ygv8DJC5LDsa",
  "key15": "52xt3jMcsbuQ7Ub189zLyhTbYgzKo9hENxP49Ee3C6jbnxz3Tuy2yECqKFthSc9Rf26DYfKinqgVgExDKe7xqWQ9",
  "key16": "358B7u5mCaiL4sFwUyzwq5xj8c2HcgMkSJjvbxfPosKJ31LGt27hpckuduV12w4n79YryHPYwYYcKr3LTEHq35qV",
  "key17": "5mR7yRYhDZ4sZzyuFs7nU1zjf5BqbG8yQuzDf1FxGqQcrbsbu8M1rLfDFCf92fbbFQhiB8tSozEpGZ83XYVCsPeV",
  "key18": "449TUhNwxMkVDmtL3e4DfEgTyitbP9YT5FvVE1LeegG7ztgZDzFnKat8PUvWxoa17R14sEv2zBHegXo83q3F53zC",
  "key19": "5hc5E322ov79udq2TdjtUwaxAnmJ8DRfXRzFKC7HjV6NaUWSQDnvLQ5P655aPRgGukQvLTiomVD6Td5voE35K2cD",
  "key20": "5F4P3CixU7NJLbhw7WqNi8onwXYMhYzN5akRoh8ttBxCVhXMwVoSJHt5m8uGGfj8LFJazWhwmXAXnYKENk3GWSKD",
  "key21": "51AnHEytxZnZj3X7i4oUwWZZq8W1mJkXYyuxBwo1nz2q2QRC7LNC9DHdYvUpSnokxo3UfoMdowBKBE3TSaXhpmk5",
  "key22": "qgr1CGxbpC6TJ8iuocZoDu96KKrDxw46Kc2TuKMCA81Qfm2Gb4CPPTBV1NQB2Me9Kt64ANsKmrtKszit3v7hbZY",
  "key23": "58HvN5ARUDQ72SjW3BiSJzmutmG1bteq7koxRGYnpEmpcU9UVBdJidP6NSuyGVXnmfLk9kzMm4ju1dNmbpBzoSwa",
  "key24": "3ihNF4Vm8ekbz1DdkjtKNgt78PmuN6ahx92ifHo2MrZ9vgJpK3jZJ4FP9ziCZ66anrosmbUeR4rkiKPpgURECdKe",
  "key25": "56E5nBoFiyS8TBpnm1y8tgKfRT8oBQM91eBPB2nwTA7UCE2J91G4942588GJ5MPMiRdGeyAUnr5g6YV8XvtEFMca",
  "key26": "5wU5QqacapHdBse2AcNF5Pb6h7Yb4PyvRHfqrFgq43ByRQ8qrYTk8PTFLHF8t84dSX9Nj9cbF2jCf8Jp4UFY4Rcz",
  "key27": "49s4DdnaxgEkY1VDrhrkAQ4UTRSjcT7Cgb7LEpGcLYtRDrphXiwqCe75NzqpYJYkZvBu64Srjc4Pa8u33H9rf7sN",
  "key28": "4MXdFEfSQLeYQprvYjpcymiYU8QG7PRF4Tb1CBfLPTUugenVYBrgaeuVoYXCbZ4UVDcZV3Nzhs81siS41cz5VS9t",
  "key29": "2Bu8FAApYw3JBQ7LMkBYXWnAds8b9og9acmN8wXA6zMbGNQ1jpKjiYVM6L465pD64WzRFnFe9wQWGUeesmGBgN88",
  "key30": "5LWM1NoejQYPivCpGcGJ4S8MFqaErbr5zsWT6XYYqZZMvmpjaLbSmrtK4TPT42kE45pNknGEzYFUAVA6jzpFBYiS",
  "key31": "38V9AKFRbQ2Tbr2ytomAfbNSoJHZf7bEqECtWfLu2edL5xeAaevnWqwaEmyKw3ujvN2Go2BK8vpsg6BHoVMHGX8a",
  "key32": "bSFLso1VWkzkcmwkMXsiBPoG423PMG3RpZAFaJw5cVBo9dMyuNByPMPsSRmK5hvyf68jZDHXWmBmDShhHTxFDw1",
  "key33": "4kL2XcmGzs6f2cgJn2WJHJGrzdC1ZRMy5DSygafyaWakucYHJFrszpzGKEVpJsrEsk16yujpr6uLFerdfW9YxC15",
  "key34": "1YhmtB31hXXFbdZxuzYEcbcNJ3BrPJZzm3yAwmPc6bL6ogK6ktzFNtyihQLgtLFsUr4NjMmDXRE4JNyWRG4BWi9",
  "key35": "3S4cV2VRz7h31rvLMZQ4bCSYp4UrD3ga5N6UgRAuDterJw4LiPDjvCApCFyEsQEKyGk1uHtrJPnBVD6dEdFQd9P2",
  "key36": "HJzhCYPYnbSpmiDriLvRVhCefGdayvVQi1eqFstQhxU9RwMCRyL67xWFg6rDCn9ho5r2Z2VzcAw8fEWgFMxXjFq",
  "key37": "K6d5assyCoD4BtAQDJudqsyFL2vQjNc45peHbbgrkMY18SnZCWew5rH8WoDe9he9aoZg4XSmzPwJY6nMZCrxpKn",
  "key38": "3xuNgjHmMgaaJaQ3yJCHzgEgHgPcMppsv4z3upuTTuR8E32BkQqX9UD771MLi3Y2KE2pnSWJgN6VrvgBosD3hJVB",
  "key39": "5nAEiMTesrvNNvXs1AN5safvVoxVemSeKopJgmp2aQWcXBCwLfAJgougKJMuJF3iwoAzXmoSxsmXTu2PChuDZaNb"
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
