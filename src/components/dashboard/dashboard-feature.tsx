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
    "4ar4QAmAD2AiFsdY4AYFJzX1ztSEqoEHJCX9t7b6BdQ4NG1cGDV8KYm1uEvRaA31B1ppRW9VwUezJ5ueDiZ7ZaqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nL2nuA231kuzPBm61XdMNkYdCqkoY6RzHwC8m5DxpN2X8c7ywTXJB8nfkw3ByAAmmp8zndstH7GVaZXTpPpvamc",
  "key1": "4Ptiqcys7UyfuZcTznARzNjTggNRQSXUCx2LPcvUXS8yetn3YJVXSFMCNpe7LGj7EzPkcM6MvjibKPuiD1fpsbFj",
  "key2": "2hkhCDvqfFCBKqHL5p3VeZBnxACeFgVCCQiE4swAgmmRzKCRdshUFDpRx2uMAHDyMGPe2GX8woiL8yvAhDZK12GM",
  "key3": "5TA6rUribkRmS8Ub8GZFy5co3sL8kemCsgYuBWNYVBAevqGNiRy4JJ7uJpu53EiT3GAHoMcDAQEToAKX8BEosAde",
  "key4": "626n3QLU4dcdUjYpoxHyZ2Ct39AkNE1D65HPm1fV3kM1fmsqtrnnLsJmpfY8TQ34ftv1rDVWs2Kja3csqyyws27Y",
  "key5": "5LtwdnvuE6iSoGxUxwMNei3o8HhSHqLb8kEY4cDMALBLPTyYJN75ez1bP1VsTgYs7brJA6RJfbmDoQ194dDbWy6M",
  "key6": "3h8ogKaAer2LbVJR2wEH6SRks2YpJbGo7C9apMnMmXNNpxRnSpYFqYbtpyKJDftF4tCTUa4g45FH2z7ycoUoEQUr",
  "key7": "5WfuptBWfFps8vt5guVbicaQYWvA9U5tSGw2PDXrcNCF45YvpuHj6h4umm6128tjG69PL1CsHZ4wiiUrFvFDBJLg",
  "key8": "5wKYnELh5yKm77WtLqbegLe4qiLpjRocrTvnSBSpLBqxNHYgtEmbthKuhRENUeJas73p2ZdDBrQ9MufuEjwNtHPK",
  "key9": "3DAEZS6iDCYV6ovJprTjqVQ79FGKg1LSwKwzvC8qtyCT4SV4WEQGEcoVc4fkCd4VotCAGg8kTuw1ZEvcknC4FgsR",
  "key10": "2pSZR4hLcp5U94k8W4VU1DpsE1dUQ5ahJa45DwLMjqq5oobjHVMH6h5hit78AWE7YxwNUEbcGVsUijp7aAfM8bpo",
  "key11": "4CECVR1a9vaRvWfPtyT9z5qgMAmCw7txTKiJNyCEYeF3zbSx4oTU7sdEACjtKuNWWVT4MYMgeKFZLSGdJ6XyMARr",
  "key12": "GbEjiofVyy6appzREFR4D1VnZKqFuK3faEy3eLVHS4ai5P5zdaGJczNFs3KraEpt8K1RT3SnkCez8nLv5Mm45jY",
  "key13": "3veCHX8ZT24GFw9yhVeAX12vB5LRsqJe6qgRQBE6asA2YQE8RWzuggmXsqJKvBhfFBiwpsLQRWTKJQ3Bh3r3Dwhg",
  "key14": "3nUgqts6wY9JMrMn9fP79YXWnvKscHiFV8zShd6k4c4CvoEc5UjC5dbmkNYyZ5xPrYguG2wUWnpbRE8wknFf6FwS",
  "key15": "2R6cgXQsUyvcmW7SFKdmE3EGYFhSkADvD3w5HaqRtTspWohA9ThmmoSArdh3y9QTp8eWiYCPCp79U8tY7qw1ngSy",
  "key16": "466YL8c7YVTxS8BCFnGtd4MywQJD35nweMtPSaouKk44FYbh5VowwvWyqN3AMjPf1XtcoqdbRqQ9DpuAvv5JLAPM",
  "key17": "2mgzXjzKFG32dZ8qgtv8FvqXmdBXBCJPCnfadcpRsYeMiSamm5hj5iqWDayKCShE7JJSoytSugnerLBAPWHGdzoG",
  "key18": "AU3kPMCNTxJMib1iHKGrTYJMxZZCGPH3PzYibHPz5FpMBqYeEecJ7th8AdfBj63eRiUKpcHLBnYu5enVduaRZr1",
  "key19": "razSU2Uet4NBnrsCaa611bR2de7EHnoY4VjtWxR6dvKTgo2tjby1LydmR4bhTyTZqCSAA7t2YZMgMGbHwndeXdf",
  "key20": "2uCUQdJZ1dQfjYKBRwUmksGmTV8bW2gQzP1ha5pdwG4yTFVL2AKLLwyKDTdVJ9VupatDRJ276hn27Zryybsd2B7X",
  "key21": "2x6bFw9D2Si3izDE9oBwiLKYdw3V112ZKuh6rqYpAJSkqYjsoRuXJdbNNGHpm2dHxR1DqmPeMpLiWS1toaQVLYK4",
  "key22": "3X8cSLAzaaLM7nULT42deXYDHk8fASB2dsmh6pBTBmUwW1f9EH5d5Vdy7QAMGoguS85KsE9tbAJpYq1SSJK22Qvv",
  "key23": "3qn6MKiGXFLuWRvYEuxwgLuHT8UJCiuDprUDjLX9jfTyydqrNUzjrKugVSFTK9uWUPnh1taPKRY2pwPJUdsXVUF7",
  "key24": "U4R8gFPfWPQ2xJYyfWvMnJkQpNmvmzwr6ZeDj9U8SagLmRYSbqUrQUJWSoj3Rt5iTJYApWPbpKAUzxyU5TyNgKu",
  "key25": "5fjE55wZm5YnauEigNeZ7aRDXUtgTsxaxhmmZBzbjpVPUDMzEDwoopCUipGZS4mXA9haiv6hBbQxAGsPqLtfhLAo",
  "key26": "3tHTz3k59EsWurk113CVLjuXzFfMgQ7pj4dnG8mreoHqN5qu2XmJwJYT4XUwnJ9u1C8NfP88b5Dx3mDRBtQWMV6Y",
  "key27": "23ZbYB6wKw4CSd17N2hzErfW6Erptvq8vF8YDzZEccTVEgrPVZrzKCLXs1DuT8HgQ3dJAzHq1km4mKvpPm3jc1N2",
  "key28": "HVzcF8hf4kLgoL6NjmPU2ogq6GRM1nyDzZ93nFKfjj4fTn1zKrGt4pYMNe4BJm7Xdf6BWM4F2wPJCS5VMSQ7aai",
  "key29": "xxyhYDyLxQntaHDYpeDHp6qwYTbUmUHUTHsRhX7HWu24aNF7AMyaDfp7PVCSb7y4KZ48Z72A5TGs6GfPYae1keH",
  "key30": "4PLet1ArHJcXCmHaPZHiXF1WnvR755xyUGrwKbLAVDy36dJjEGcLYakEupgRPKTCn9YQDYvCKC1qGYQMeVXRJ4Rk",
  "key31": "sT9Q6Ac8UM8jHZwbKrm67q7CWzvmkWtnCZjdU89iTEZXWS8j9a1ZHXD87CE9Ez7FAtWeGKAa3HKmeejoH7RMb5F",
  "key32": "4gggt4BnPZraXYbCwr3WBwdy9NbsejbZ6FP6oGMAgsgU3qrSPRdU7LxRg4dVuvPywriWG2G1LLCTNiL3GBPXpcvN",
  "key33": "bHnj4FL9vojXvXznn2BPwk3MtZGmqgaCTAVwweNxKaazEEF7GtGTxr5WXc2YdwJZo3Pz5EH4JKbjAsznLb615Ri",
  "key34": "iYkZwEWtQP6fajSSxqkWENYHRZFjFNjRAcYUxQivjUvMt2rUiT9b6MJtsA1wP1ob5vFELKhusUKx7Fb7vniFfde",
  "key35": "4Y7qyJHqR3Yfe7ZDpQYQCpqCAhHvMvefBh3s1f5Jc3xpYRnZC5z1tLgTjaX9UbbJTkbGFcXgi778ccuuR4L2ne1q",
  "key36": "3TwQSjw9DDmEoYGnxEF3D91TMnGQeWTZiDQSg3Qsschr5aSQLDZUuFdRYm9VehnwZWKSyLrV2tGvTwW9KLW8Gr5k",
  "key37": "3MsTtkpteRuqH4PnXdYDnCMAD6mkSFFj68GKPy87pna3iDbECL7uTWigddykhYi81xc4sjMxv8DTsH9oqotek2n3",
  "key38": "4ZqqfcsvGV2WWLWSN9ytyj8qULXJBPX8EhGYKeWn8pqTXmzLe5eHUKJAjsUp6neBT1k9bTtGftWhkdwh2XbBGG2f",
  "key39": "3y2D1GAvyWg25smZ9Dr4vLu7i4iotyJQuQL3arDiVsJaCVYNekTFxPoNNUgq1nYGLQVFM6qRYvi35qdNp1zo5VY9",
  "key40": "5cvyh76171krQWPc7rQYnm1gX4qBjKKWKEVRe53jyaFG3BSaRspYi8mr5owbHYrJQHAgcLQBYYPxEa3NwT4PxGMa",
  "key41": "5LmFX1AzkSxxU4HdMbiRxhiyKRNAdQbnrPwKnZ3Upd7BTK8UjPEAtS2fKkwafgLqtinv1Cw2qmhuEKWdATLrgMG8",
  "key42": "3fK8GiMJjhCkY5XNodaFaTBZTfvPWjZfX2bp2G1RXGMGMQq2iWXwhQXMGY1Viwwp8uq4dhd8vigfdPbKGVHdGp5n",
  "key43": "3Nq5bMptc4a4rXcY9kCy35Z9ejSGFJRHHscPp4uMydsFZkyoUQoF1Q1wKsQ9YJLuZfKqsJogCrvgS8BpTzmQaejF",
  "key44": "57wAjvNPywbcqLK7jNVSV2DoqF6hGaGTE88uEPZ4LTUGzUUnwQ5dsVKPiiG46mUf38VXsVeqU3hS99BmeThNF7Me",
  "key45": "5KH77qXsVkTqR6cVa15H7Jpuf2SdyCi3yyE6XgTpqXmvb27XoC1R4pVizkVTycdWZRwajByPd65GSmFPh3Bpv4J3"
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
