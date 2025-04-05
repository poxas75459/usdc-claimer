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
    "4hhkbDohhWkc86fmXBcBHQ7mhhzoTFp6PrTEfAK39Dxqwwit6XpeqVhWf2ZADqQgt45PtRraSJ7vGex9AGvWKdoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uoddccofJYVUC4NxJfL8mhdmVBMdx38JjrbxjxWCmqbkuKR1dBgsG3FMkR2nwc1HWLB9ahiZy9hv1Uegq8Nb3MH",
  "key1": "2aJov2QAF5X4TzFpchSA77jqq4EYgSMstMDuNx4wr8JYhRRi1W5wEJfzfQCbDxfKU4NM3eiHaJ6cQM1Ep9XHMAjo",
  "key2": "uCkGjSKc9jRbKpvsCY3TfyUSuYhwm7iFiZeGZ1sT7caHsz5W9YcuxhqhJjksRTEiTWCEALyG1UgrqsawtkWV4Rk",
  "key3": "5HTqFCBsJWi2ke2RqadXqVme6daNQjb4U1WVjWBygNoV5PnoAFovot4HYvSxWhnvvoGNh6svKnG5X5UyWa4z3Zfd",
  "key4": "2FrRVrBRW119RtxCRJsFaFJed42UrBHWqCPcWSqdoUVn9FdmwkWALWNYtqYU12LsUBK6WX8e8KKrNSgnNNJYe5df",
  "key5": "3dQStUEsWyTxBLtwt5yNk48azNZFusBjhs86NhtfUJq7zYcmBFsqdDpZ7xnJykV8pqFUJQbqvPFEAiKp6EU4p3zY",
  "key6": "BfL5ULyQi69gFzuYgZBcgb7AdEhyCkjjPEmDGD9FuN7wNWspeUu3oUcJHveDESSQUPBDZazXtgDGfvzeMPsXGCo",
  "key7": "4CrnxnXcezXXHJDXSYiuHyapNb9i1Ln1qbAA2oKXVpvHXsGnduGDbytXp6LPjCwgKoJEy33DLhsewQCmSEUX1CNr",
  "key8": "5aZr6dbdDLFXMZE9TBUrpE7E2gUuhegJTb8PsKWU45fueKq1UfL4rPzGNqMJucTgx99RGC3zuWoBrGoEVqp8uocB",
  "key9": "XwZsp9twC1N939JfJEUVzh1CEXQqip5gBW8kMMESwTc6jKEStUuL4dG6W7XmBTbMVQ8ZAmYou4p59672Hf258xt",
  "key10": "5dm4K1YYNpQtupFi4SBsDnkvZDSU3dPnKt7wyugMWHuZyda2Pa5fKmU7z2ekFZspJD5ywQBGDvfhGhGMvi1Hd9tt",
  "key11": "5gfmshjE937y6ptqGPSNofBjEB5CDmGzm84wFrjRC5kLi4zqF8HzPnKhSToF7xt4Y3ZLbwSJaXzwAde874qwsYzV",
  "key12": "5SVv3NY62eFYh7PVtXA2wGref1Xy5Y94F2fNtk73rtczL5eAz9dpKYzV6D4tA8MKhaEBWcirVVbZfwGwV6FWArXY",
  "key13": "3a87PoYFcaJ8eKv84mxmLXr9cchHbP9iX3wWv1FxPjNTA18FRcpfTNC5wXo27kBgDhEmQY3aBMAQE8XraFQCFc3Q",
  "key14": "2N1CPy5okAR1WZ6p5A9Nn863np7bTjhPhMRV7omvTxTjoWEdGwdkQRE5dHHg7KuhStGbMUKDTEvmr4Nb7Wwws8YU",
  "key15": "2U2xrANxnXwT49uT74cLuTqP6pCeTptroUus23pw35CYYwmpNqPQqT5dhjqB3G3vNkxoEghGUszhnrzWPqAJvWjK",
  "key16": "3MHC9xRtKwAZKQTzifjcG173kMy8dQwgDUSJ9z18PFxSeSkTnCPDr92op92ZLzBLAbpS1pg1PYXpEcRYTHVWXsWG",
  "key17": "27chv4iZbCXj2o97D7FZRtEBuqmSXHA2BE6pgjVXCE6E55npE2uCjLbrJQkDSw7JB97jpPaMpi1r42mT8HZbXGDR",
  "key18": "2bUBgxSAUSTgrge6htJsjdM6ehEt6YeKYk3ZufwKi8UDoX8WCBe3KteEoqAukF82sxv3S2WTG7hMfe5Ej13JcGhb",
  "key19": "5Gi3GtBGx4SLp7zJsJFnjT2bTiijhS4QX98KZUk1WmPFHycQuxBUw53YPCgWyMaVGbScDNDqoayM1GzmrrE4vSPu",
  "key20": "2VqSpjyhkBXDGBhW89R1APymoJjE7mEtTLRahvMJy9ccDKxkSR81KxWHgduCDeFUEhHcsvRi9rdpY6WqPdsmA52u",
  "key21": "3g6dpBuBiRopST6aEBeZLGmQA4wkDbjaheNUr6KgeP5oP5vBd95WNkyXBxiVX2NfgYjNydRTzS5WvF9HCNsSMFTw",
  "key22": "3qQrsdRntsza3YJmmTMgLB5RJYLM9mRGUEz8aXnVWaSXyyD9Xe2nSgocpnb8nWBJi5xP4xLodshzUed2g3KfpqJH",
  "key23": "2EJRzLNDfYrUBPs1k2UN3Q1eDnbC885sE85oYYLLQY92q8W8et6dRTLHHxxKcpbnfVaZmcvXsYtQpETofpV9mhiP",
  "key24": "2tdpfBbABuRpKY3KkJ7qyy5nCq4j8nGAdKfQwbiW5mhR2yVCXCEdw73dsCkKsi8iSp6vvu4G8ArGMhj2wWiNkgu3",
  "key25": "3VsWJUCP1wUyzS8Hd5Z2ySKweSMvm8AFCxu4AwF7jGDxnpxmjiBFPPv9TgTmDGm3pKYQKQ2xaDUnFgzNKurmXWVq",
  "key26": "5T1sNBuunixVDqymfd6YdEdw7dW153oKZ4n2DSAU1FUWrQRY7VngP6sAxKzxoCXjPE31zt95RLqdP7GKxnwK5mRS",
  "key27": "2e2Rq4x69cN9NcuFnxjFEvpBtwLaUy8iBkoN7ueUYCjxmGasfyYCSnNPwFfUWGAE6tQWrSYCsVxbdPnFGnzaiVL8",
  "key28": "wcbjfxSUW2qXv3XQVP4dVGMkZVoDkat7dRCLBneUodtL926ggyEMhxoMSSykGiigSscRZcptgNDzFSaGGr91da7",
  "key29": "PfhF9K816ESc7xYDLJ8nmXCVNFf3NrDpW9DTrTBMqvvxe6rkMRG3aREXSeiVmrCu1wy8WHKbAdu7sqweoQseWzb",
  "key30": "kkRzw2mrrFicKq3Qe9wN5y5udFXH6Pxj9KvSJ5S6eGtcBUXUL8onHBaE4kXvu4oivPXzQ4S1EgX5DwjBx8CLgzH",
  "key31": "3oQpgxBcqhk2kaVZCR29G5QTQ4FeErBoVKfRtmMEYZPSysGnZzetWpw2cVvNBZ4JLdibWyAY1LEcmwcoZTDbbNqC",
  "key32": "6tJ45Vh9ob1SdBRQYybBNgwnXURZfbgrDJw4Kb5nTrxDwoPEcyPwTxCz8zUfXn3K6fVfy8rQ7THAuZwN1G9kX7Q",
  "key33": "vMgv2aTw5LdKKCgZ2qwTXCG8YMmHpY535x4QdKsAuCV4SryXECg1ECTXA1rxio8zeedBhxFsTVCLx7EkuxPmwqt",
  "key34": "455XA7MhHfBdGCktuyX4rDVnsu6YREbtQoQNZdGxfevABtZQiv7G9LjDVENZVDAK7HgWdG7Uf6f6hQq5Eqyt1Tq4",
  "key35": "2NfP61ZugA8Mh5b8SBsB12iagBdYpK7DVaX1zwGWgZPsTJsLTZXBAHThgmbBKNDbBN1yb7VMNx3iHXT4oM5SEqLH",
  "key36": "3jL9uXVGvozwRXVd1yEisR45n9h7roTuwR9oPkquy52aKKQq14Bqv7g8CPs4dV6CJw5WZ3QJnnwNcgPhzS72u2XY",
  "key37": "cvTXvBf6o8Cqd8S58gumMX6J3gYxLRNbeWL4X4Qam9GNCUKTUjjAZDMe8b3iyNjqjRqVoidPMLBZNKWNMkNBgYf",
  "key38": "39jUNnoMVstqHmRh82boZ45ZsvPGGhCF94tQfAJF8zLwqzdqtqEDm6VMpNg2heFZQDDZ3iPRw7nzeXv3jTG4KphF",
  "key39": "2kF2GT3ohvXApELotadFtuSbpwskcdZZqLkc97PbXumL6dMGbtjCzkhaY8eY2MQN9e588SyTZCTy32xHvLiwtuW2",
  "key40": "27GkDwg1p6cH3HYeWQKQ1HQEHpydhmcPGUYd9zTFEzm9T3HyELU85x4etnbeM25UnTzvFhdWCPKQ5MWJ79qJ8xVg",
  "key41": "5NMAnRgGmVua8eM6E8N6JJMtCUUEpuafZeEy4fRNnNHJrpWdcfa53asBqimAdN1JG75x3fTQaB8rYod35mLgYT36",
  "key42": "2qyZycMqgjgt6CpkbB8RcDTmXBCpTEmvZkJGWhXtAAAfKxswnKPaHgAqV6cDZDanHSot6n9BBV2Yx9UMM129u89E",
  "key43": "5utssmxQtPZcwHEi782FqySoexzW43icycHHSsKNfN5z4vPMSu5r7SLwFCvoqbYNjPuooHNz6PX428ggFJMf2wMt",
  "key44": "63DyLptWCrdJCD6pnsnm17VQ8A2bpfuZPKwMnJfDcLkggQZtDeChnGaTNLMrsnocVhMhViXCHvGz9Z9GFUCGy4xa",
  "key45": "515hQQKmNGU4kk761ozzwYRGAZVLvgi9LsFqJmfaxa3uP5WtApGYFxgQ7GkMSP7xv6B8jorsJLAALTQbcLAgzinh"
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
