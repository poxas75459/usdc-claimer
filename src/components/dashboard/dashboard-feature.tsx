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
    "2nYMpUGUWXdEJPXn9o6Aj4Xfhm7bGcwLGRJtbBLLBeTdBHiwVRAtkTaFJD4FCCFURmj1WyT7Lw8TqC17g3EGMPfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VUq3t2e7qh9QLhLWxgjT4kbTNi5jg8KtAXhTgG26p7oLWbaUncCC5YPjJAccs2iCFPxr5fmHFVri9xKczgwqZjf",
  "key1": "L7s13TYjKV7FA9yCSQoYoiwFBPA1CBWi14qV8nNkGtS7FapD34rGKq6YXEqSCw4rPtoh2bsDAW5GEtYqtDX2coi",
  "key2": "2Kymj6yxCd4WnsbQQUjqpg3QE9VjLsAH3HoLMhndXv9yn7g5rGUi7TYph8KuL5Djf5Wav6df35wM4vNMrCPQGbAW",
  "key3": "SiK4EzwDumXpMUSDrTi29EtT3obezVLSHcyKEuQ4fCSDzQfD4yGHiwtyHqU5RUuAgC1etV5F4gNgmNjQp5wHDhb",
  "key4": "2Jjz5RuzWaZZgpmDNeEo6t3qYGdUWbimYw9uRVhUSsYt2HWGkMBRFSM3gU9AhdGS5yaz3tfAbVxW8x4hwcdo9y7J",
  "key5": "58QJhw6jcdZxonykz96buEEMzBF5kic8CnHG3eBBdk2AznznifY7DBkwtoFQJPd3d4pmQVXYjjPbHf3TaPJwofRf",
  "key6": "2V2V4gZZ8HLgLS4fBDRD68bT9Sz8KsjLH9hQvoSPrMjBmoeNapEbXCgmk8Ncs2JFkyYn9oAYEq4ztnoAc3FmDxxu",
  "key7": "4g9FZDXEaUVVBdtPSfPj92iFbHyBgGT9PF9pskfoVni8MXoANCePPCi39RsPJvrqtdKChXcyvcyTjGqxeysXBTob",
  "key8": "34ExEcw59RJTCmsQeDA5ejAe4omZEiqgY64TGhYwmCXv7WNKm5XBTbgnLypQF3sE2FgYMXwcGnH37DPw45ATsBSW",
  "key9": "4RfnSo3Pcf5r61Y624JqJCC3khmsiKKd5ZDy8hFbFfkJsmQGnRxfQQ9nhB1RnCj5DEuee4QvCAcBaqELuiDRLnWH",
  "key10": "542mQRNpdAy9Vw2NBFhKUNHVto4Pf1Q8H7wKmDWi6tMuRDzKxYFx54mhn2G61NKfD3gzvBXrYYfAdjDhmSXCzwm4",
  "key11": "4G38QsougVLSvsu7BnCArCcQRR9ZB6YmpzPDWnUXBTqnoj5pgvs5qN776J7mmPQesN6AeHze4oHrj8RZMna8yapR",
  "key12": "3zMyXCDDuABM9c73S7mkbtmVfcnZd6zo2dxfqch7z4PaZUCifkVqPSWK8NMsy4aGCBoErfr6KX2qBrw6Z3enYMMK",
  "key13": "4emG6L5yvJgiKYubjsE6rBc63UYNpYfm6XdSm43kKW6SckoUGjNViKwP2LEKyows3cUYMuqf2tUWqUa1xrzzvaFV",
  "key14": "3QrtK2MFYsuEsDvfPQCJNxc8Nzdfv9Bj1wJxWjGJ29eGUy2RwDoD1F5Zj3hKQvBKkWCbLZB2FY1fYPBtdobE2pUJ",
  "key15": "EaNwSek9xohd3EEyG6hMdiwcXYA7z8fY1xAmqe2tkgaPPsRLJUnD4ptmCXRTmsTeRjo55WQBb7yzncWMVn4KrMY",
  "key16": "67bzCFt9EU1kk1jbfmcrqzwdUVE8BtrdgEM3VDPBiRm7tobCXhTcD3P8Y3pHMEhbHScDk1i7MaHztkne9en2dEvj",
  "key17": "5D762CDM4RPWWPxR1ewGPQkD7ku1jgUxEWhAg5mrzzBYpb9vQta4zCqGxVDNEyyEY1CbBSEWQeRrpJfs86PETxFf",
  "key18": "42gSr2LgtrSzr34LG8Akj8tCeSWTRasws1w9PtBVkW1Rx8ApV6go7kAqCizQsbLxsQ8Pyaiyxo6bep47qKYm4zof",
  "key19": "4tBBn1HGo4fC1sn2J1htu49pkz4EsiX7jyZjijvXUS9UBCNZTKvTRP7Jz9DF92VeKQdFejeLJBK8FVEU5M1HLJge",
  "key20": "65zYJ7fd9VHRipGrYXLnrBHVXeYMPDf2wAzaZnAsqkzfDpPDHQb9atzmbE1RPqCvvQ7bRihsUQpAqwjRKPhbv2Ak",
  "key21": "4Pf7gbksFghj4F2AWUdUELbntPEe6Fm5NzfRbV4rNN7VkFcZbH4kLNZooocKr7gk6tSgtrHF4RTUzVFMqR4d2ut3",
  "key22": "5m4fNJLsuXLdi46uNVMYYR9f3nVgfntadNhFEJy1TsxCSAawWJVSVpeDut1sPqmCGSKu89N14n9z51pWCuMta4EK",
  "key23": "3sJ1tiEU3FZuHpJdbGbxvvuKoGNsPwa7WqxqoVBhT8QQnpTfZs1hXG2BfGx5yLUU8APjarza5E3KGU4CxhR1qVcj",
  "key24": "492YBdicJqqjZg5FFkGixkNT42AupQCzq1trckMEmcEbD5QcSv9PUsMGK5dVePZW43y4fnx4r2VQmLoYFYASqEMX",
  "key25": "2rgPp86GRBzU7VksroQx3tr7hxMBj9QUed1es3AQWwFBW5VuMhDWthJNCBEqGsLKTorj9yZQZYP2XDDARmkZabzQ",
  "key26": "Mo41j7mgXaxZUKtFAZduhCjhRUNmpNtknnahvm9H3FdfFpBxYPbv5MQQSNfgQWyBtru4rVFtF83zkMkoy7P1DYX",
  "key27": "2Z3CQ2pM2tNUApaAh15wKCS9nKec7n4dPqSizKTfvUxh6PMokqkvzmM3V6we82So5BnsFjth18xibNTkynNvECD7",
  "key28": "39fsDK3a7mKsZxTG4kapbm3A6keNQBTFRsmzdRZm5grSWWtax7M8sLCpEvKyNoFK2cttC3GHB52u2F4JkaeRB7Zs",
  "key29": "2MYMHxBifBxTJNtxFkUozgqN4fmGRZChKJAgb9Hik883TSiyu9owLob7JFkxztaX25r2v41Ye9SmAyDZGC73vV9A",
  "key30": "2iafNtUBQv19pu7J8uhEuwswVaZYL49PprwCfrfeuEt2ADNpxuSjMBF86Zb1AMCx3ERRSotfSo58EqEDEXRbtdsu",
  "key31": "42awDJJxbnBSrC7DwkEYr2QJ1WFJrzMtWnrrQYczGSbJPiAk5nNcyMeJbLuWASMRwoGqfBi4CNgLSsq2YxEps1Hy",
  "key32": "wfRzYw17pCsNj9oi3qvfNyTh2SZWEhZiqUiBpKUpyLiy4yuQg2DsqgjYcZWxixWq4vpT8S1NgNim8Svent8jQhD",
  "key33": "5jAQKc84d7FrL3vETmKQPa8jeE8uLr92JQ5H5ua1BtTgXeFsFG78FCFPcUbnWNK1ieDwLXMYkHX9557vfwpF3H5G",
  "key34": "XswZfbZ86Wmo57mNoUd6kxLYuL8sELQfZTFpS4eSsukUHCoA63AqVW243Fts3msw1EGfiQAznBUVfiYD4WuuVqW"
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
