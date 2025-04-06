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
    "NrP4nCJ1bnMi3gs5c8nU4oiFr85Vero79STaMU85uxNwTx9XJ8RMFNozPEjPhRpxPnHkwNfqq59Q61UnUPDRjoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XvCMwxhKdX6QxJ9Gdudh6JnrCic2U93fbGnJBri2MDqKnFYxztPx9Gj4y6qy2AtttpPESQ4GG4xFgcGyBMSAcij",
  "key1": "NsTQr8r59CiSMfsLttkNmm1oAWQEbufoGu7M8E7iThC8BkVmoZ5NCSaVeWA1xTCkPMaucJZZcPotr8yg32u9Bte",
  "key2": "23pses61fYwbWuSMjsmgbdw2Q9otURyucdjmAmEp348JBjgQ9Gb3geDa5koJgAtPp9gaM3Be2t6EFJDV4NWQvau4",
  "key3": "K6t6XiHog3eSwCU3Ucshqb5F4PWKEw2Re1sCK6Hz2XBnBgn81wS724ZQj5fe1by6DEUxwXenum5Qs3mKN1XQYvx",
  "key4": "2pAQeyJeaeU4Kw1r59PGtxhFLagM3qr4AVX51MfypZKsQfQsNmzVZi5Mb88bqcq6YejEPDXHWS62VFYmTczWjbZu",
  "key5": "fi7WVMfeSUCEpJMzpXxyt8AvsMxxvg1MTWLtFir3L9RLxtgR9VfF8KULb5eyF91wm5qoDxcRABYyXTpptSEiWmN",
  "key6": "3SG1V9pe4Bbf7ibdh5CLgyTX81vtAXmWhRiaRco5g5L3X9WwTs97vkoUqj2NFHohp5ZtfEVYP1QRrb7Y8n8kiR34",
  "key7": "5C9vR3h2pXunvhqcxvinJELtdTkhCsqk83LmFtQfzaGXGL1TAUNzmPy2wsKzhhvHU23QcA4ZbeW3e4FDJFoHMAvp",
  "key8": "3t8dW3gVRn97pFRWSNvCK33DenGit5xEq8RcBdZxsv53mQShMsZZWrrjo4aCs7b2662GMwjW6y1G3spidfMKY9RB",
  "key9": "MqHKCmLycrJRJkG14QfhhKzWivB8eYz6maZSNN1gkScMA1PgXoPo9SXMMJtKjzUrNhtF75BEjcFNhxEk5J9sJNR",
  "key10": "if8kRpbVSwGdAqxf9ey5NgiNXT5ZUX5WZdCdrFUe3ayNWyQrHe5JzFW3ffUa8vKDq319EGx5ZwtGXLPFBnH8tGP",
  "key11": "5Lu4ohHBKzYDmryJw91utZzAnNiXiK192DXBi8eaYaDDDsr6Q9BtwxiJLLqubTcS2NuDnMDkXkQgKQX9Mg1oGCFi",
  "key12": "321TmMUDcQsBppN4CvrDmVig4koT2uyRAnL4FTi6PEPvcGqEh9Zy1k8PVHgXNwUHsHTPaHM4ZzQyo5TG9qLNLq8K",
  "key13": "3PpK4zBduQwujqDdzJvN3SKoRQFno213LSf1NfbvvXNaEdEGGUrcgsjZLDG9rcr5jChoZSY5bGMwkaedfgGCEj35",
  "key14": "2etzsHuYi9vbNgYSWdKABYVpCdWFeo1FRTTd6gXr2X1a5dP1Ff78kdFuGpXthb8aGT3qEJGVnxP8REEA1VC9C5CB",
  "key15": "CRyQaVBthQDKWqmiiXnPSqRC1PmomZan64Wt8G2Bpex4CVrQnNfAXKtjc9vdX2T4sNZa6upyk8qTm1ANQbwspPt",
  "key16": "4D51CGNehV4fkAz7FVo5o5ZhPZTtn4AFZaicMnLAvw2ZuHg6SKRgGoGUriC3K6METeh9hW2XQHfSddfRAH4paoga",
  "key17": "2btJx1MC6TzfmXCkRtVbwLMBxzezNATR3HRTguYAsTY2cb3mgQHDzMeaojvaMjhL9ji49Cj7Ey5caD89cUGefNb2",
  "key18": "2bPjHTWVDdtUoE1g6bq3d547KAdxXP3vvL9MKMqqnssaz1ezJkLADdDrYSVk8T5o8puUC7aGfxNYRqZjRyd4YXbY",
  "key19": "5qvULbdzzLtqBaWhYxd28mXUw45cYUfC7rFwpt3NmaPVRJiZQhqkhRsJrZdhmW9xWVg2ALCz3d589YYpeEns7AzD",
  "key20": "3upd7Zbo5JghqRVWkrSkCPBft1dTirR4kC5ecRxZyn3ZByt4XucA8SaeVPendHw8myrG4PXDidX9kATwJwbhhHhw",
  "key21": "5vBtdNSfWuUAPCQX5bhVLRK7DfX3nTv7VFofHvnswNY2fChsNx6BB7mmdrqR55Y45zXV4tcVq9Jk8tNMdBJn9Lo7",
  "key22": "4jHTSWq1ZrbwiJ6ff6wvmEapKdq2UgF2GbGH5gF3Cz6HgRLQuoMSNmScM5UhsoujMk6p76ewHV7U2K3dDTyAQnSP",
  "key23": "52tFStBihwo6VCt7XcT2tB319utg67kVjxMRb3n2rkM2X5r829o2t9bvNue8RZTFHkckZa31exn2VyPPnjtufnan",
  "key24": "4FXvbDX4o7dWCr7ph1hW7Xoz2vUbMyQZd3XBNXUXsdBk3Cs3aDtyPuVWpwpHyRpp18Z39QD18eHxJyGWTwKED2wF",
  "key25": "42LCckXGfKWiU2a9MskZbWsbR3b2Pi2MAcFAvzJrvHHY71ZsrwgitGjyiH8hng5HQ9EWN5rh1qjNDmKtz1H2tFtf",
  "key26": "2zPtvSCq3k5wzXoqtzr6EyUwhkAmoqan6qynQveT6DkotnPxsX7WiYRfqTengSe4pwJSzEaZj77fH8B15PzxXsVL",
  "key27": "e534TQHVuQpegNiim6Mg3YcvJaTzqNDkGn6U1GSAkVitrRjBaUJEqSPBCNDmtE61yjHtGpedsx5XnWorBbL8Fwq",
  "key28": "6uSQDGYZNoEHdVt8BmdonCQPgoTLvTLxDdjp358RJSBSQRSG8BarN3MbhznvyRi4n6gZEQMqqi7gpstyVNiAB51",
  "key29": "4afYmtMzcfNk39dPz4oZpLM94wX3jQodw6kkV62JecTg3vzWY3oFuT3jmEQE6uGGdFL7APNxikjUZVuDFsi7Nis3",
  "key30": "3yfUJSmwtZZPnb7jVGxy5AfJ3bPfdhuGd5EYTHkyR3wvxsifw3GTc894pdTGJcxSKnmT2Pr7HMwyTYh2Uq4LjYKd",
  "key31": "4gz5DGsfD62G4gAG5TYiAjj2Y7HpobbNtypEwp3LsuZTQaSFoXtD6BMnir1x9R1UZ8GV2SeMC8Cg2iPyPgayNnmQ",
  "key32": "45BeWpTV73VBGwzydo5LFDYWtNETs4LmLazRRm6bpP3dqL7q8A57w1abQp6uG4yaayakM6Cs22BqnMrX18hZCg6U",
  "key33": "2L3JZUuFf7vBQKQm6fpWPRj9JVAzLrMKD8WnLgt7sQweF5Sg5NfYCnSS1wpMVSAvknw8z4CJePRRbjQjiBuCGXvw",
  "key34": "4RsFa97CHzXqUv5xchGA36tvvcfqt3tRdgeMPxvbDcCGp7Hhw2wK6XhqAfAa8S7z42Z3BMNruZKC5hBmMEfsbXBC",
  "key35": "5LwUPyevBGxW26WsUkf2bgXW9GnhjnXmjeBnbEyC3gPMGUWisPWA588K49MjAYdLUZTizEZWvepwFNMe6xr5xvZF",
  "key36": "3Ww17RrhfNbCLYPZjgQUEr2W4QgNyVWhizTv5nq858Y3W9CnMiWXdh9vf1VxAZk5uBqdsprta6cZXU2H2oRAkwDE"
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
