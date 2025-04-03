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
    "3dNckYXCMpShAyBvhbKTQnQzSQj29Lr1SuQuBbpEp7HJnjpxKvBXcu1e6w8xxxP7GXu1iarGan93yEvBux5mEwPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5ebRtvUQ7ByHMULSQMk9AXHXuKHS4TFdF9qqpxQeUQAC91qurPBDWN6mBvkfrKXNTY7H4Q9pnfZc5QxGCfpwsr",
  "key1": "5zihWCV9UQV5P7nLXjSwvLZ5NyeLELT9WAaxKkixPrH48bx8cyrXuvJvXSHfnuuqnQtqKnQpkZy8faL86FvnDZ2i",
  "key2": "49EvEz2x1XZF19n2dnDHwtpDLMfg9i8DHG1DFpsPLwomrHWT2YbXvttLBvDsMZd9PioLezyTdUwN1gHHazKTpHXn",
  "key3": "5xx3jiYWK32RMx7rzpTNxfkJdCXHmBy8RyFTgEuDZfccWXdjWf5khB5V2eGdnRDs3HdtgFo3W6ackBx69ii6BKVE",
  "key4": "3C9z96R3ch9oeoLK7ct7uKbgQd151tVJfwywBjcZWTpe1eUUyhTT77FqNDgND2JjWPsRPUZZBdJAeMUXWJ8zV37f",
  "key5": "3MdvR7XRoaiYvM3DxubHrEz2FeGZwzSkBY5UjQjmtGyihS1qQkMbW3EV5wDjfkKAjzPGkTcgcTG8od124JLjyZHU",
  "key6": "5sVq1L6yuH8R9zpEmq3hkSxtgHDDeu6FxfQemnU55rkNTvVVbYEMChfoB2MwkZ8zznqAwjqw8AF6PZAWAHhtFHDy",
  "key7": "5qkmn9gw1bUs8QbPA2wy3iPJvmmZsDTRyXbua9DnizTx9reeNNHatkEta73kMiM8vnxsTtbEkzPYM25cfZttV685",
  "key8": "375ND21RbqeLjUbWwr1hjWj8Jz64bpXaqHs3WsAABxnssmNDzHzWouDWUEsPb8Gd7LWocvrqYgFkTZsdkNSCpb8F",
  "key9": "5dK7c3Zg2q6m2vfJSWUYuQCaWWL76kpRVcnQVaspEfMoy6678s5k336qas99QswBzWK94bEU3jTtcvQvt1c1E2My",
  "key10": "raRU2G6NhTSfQWLk7WNS9VBLE7xW8JHCNbryFD9biRo6t2RFvqSBiPHj3Rrm9uWn6ajkFfNV9hSPQEBNavCQQUg",
  "key11": "2Ymi9M6UpJkoBMZfqkixyDdCSMi4Pc2uXm9AouuqsubfL3H4M6z4V7uJi9pMrM16E1UENYmbFKqDKtojNZ4obXLy",
  "key12": "5wbDcAiH5LeyiaaFdfLzsfntPgnTov72zs36geU2EjdEJyNHb5ASPTVzMzFKFh8MF8Pwo3ve57D37wrWT47AWxBC",
  "key13": "oTU7p4rAXji1WAiG8tPUvWDfy5f9hMoiwfXPbPPXLMnCcLJ696k3q17UPxqJdHWxgdvKVyv9Qh8sPGyRhHZX9Hz",
  "key14": "4yquEV48uuey3J658b3HUySfrqLBEvv6PndndYfRULF9SV6d9ZhyStcGWsCnefyX3RCKKSeSvPad3CJVc5M9DLXq",
  "key15": "31jS9MPjAzr7LZf13iYpm3gqujPyNE89TtBZEooHVXB4XTWW3jEPQKVd7rdVyUCLRqocsPQf2VKED87ExCybrRdo",
  "key16": "3QTLecG4S3XizMhMdmkmZFBa8GJHmVCBKzrZxfh3VaKKP5fodDyGiWjsqdrH5Fyb8L61qYMpKrG8np9VMZNgTxbh",
  "key17": "3eHY4E7xhBYKopscGAMNNNPXquUuYi3ysWzsTuVtkFV2YRqfcysNhE7Z9KfkkcjzpmR9RgLY8DG78Zh1Jy7DjQL",
  "key18": "3ypquXPyydvngLRAWnWUN4v4hmy2AMFyCaMz5pbisbn34dhd3LtyZrTbTsoEtko1nr1qAm65bUJdoMjfmfqvudt1",
  "key19": "4VnWHonrvzPfEGHGBiAvQWaqcyXb1dKSBWz75zNMVfx8x1Mf9adi5Bm3t97C4k1sFrdzwkpGhBeWrrMrP9Kk6mDh",
  "key20": "2njyG2LiXtom4c3ABnA9GshgazmCUiMdZpXkZa9WKz8cZL1N74GHmHcjzK4dowdfYwvudsNo11bcAtQV3E8bNYnN",
  "key21": "Bn6NWfjVM9xjHaFuRyb2fjaJZYqAE7vsPQCiQ46v2Cn9TaqJXWH3X9YUePYohU3EKyph3P33m14iRcCJUA1iZVn",
  "key22": "3LAsavXecfs7GwtUXki1Dd6oNqZ3UMSFpp53mWCjCK2Zuz2LyGbx1zAgzZnZRYJxEzxf9Mbw5cKHNdbUNr5y4JVC",
  "key23": "3gRVRuyVsFC3HKE4pgnYghb5kPmF2qYNBiqoyRU5bKU48HMiQpBg9fDHR8W8g3NWXteK1NojHqofFTSD2tUuieLz",
  "key24": "3kUZAQbzevgrJZ8fonGkMCFQcTBjb9E82GSMa9ka3uhNUjitAoQaKSEqatdY5ZTjZ2CR7Zcrcn86dKX9ez4UHC5k",
  "key25": "4uEEuofAHSFyoxd7McdK9Nrw899D7cBb53Vbpnvk9LdRHdmx1sajwsPw86GjSeskmixSv7EbHEbXegh9BuATMVxm",
  "key26": "3Vg1CnKc7hpGhimTX9Ykt9M45BUqsjxKzHP3A8gnqwbydiTfLryfGiSYExsxDcnAdaYjt571S2ArJaajVCGsGx9x",
  "key27": "UztS5MAbf6WuS3aYWjEGrZZDjJpWnsPR27HUAXbhgEpwVqq6ssDHe8W45Jw7rioqXEYtUjeCfYrCmGyocC8FVid",
  "key28": "26f5uQ1pmQGd8S2P3mzmQc8tdQThH2uZriyhrJuW3Ht8TtvHNCwWci3GzTfKGKJir4jrCWcebgmSQr7Fy8bBW5Do",
  "key29": "5fWKiHvthstSW9KLNxTjavVyHkNiXHZSkY4Lj1H8UFDkiHE7ZbQf23StYKmCw6wKxjcPJmcpCt6m6wBtzCRoddcP",
  "key30": "3pZdSMqXmCttx8pEfxYd9E4kGmkLMV2yPWFWUEkt1jdduXs2KEn2CRfVy8fhNqA9SET6x6uXfaMyL1xEPHSg9AqA",
  "key31": "ed83oKWK86B3Xt3DVgXcGAnoqBbwN9MGx8gRV5a9ow7Ac2FCQc3erufwV8qtna2FqyRSqkxgdbYysYH7SnH4C5j",
  "key32": "4wyXdq7VvQ5Cmk7z3fs3KLVhnU64mbBLL6ukjmepV2okGrVcq2H7WM7FYagQ26vdvrWAu4YE5Eh6WVcAuGgoPK2S",
  "key33": "2BjLDjcn3TUbRUGfx34sPXtmbBMXSYq6zW7UpHzrmVMVUpu7qu7ppLkH1uTrUX3rTsAF3boTrJH5BzNizFqtsr14",
  "key34": "3g9jLCEgePBY4hhXW6Fb9v5PaqE53kHX3uZweciZv6bCmQMASZpQhT81Kj23FTT7fXHRbfzyFRDKTuXg2jzmXnxQ",
  "key35": "48jb5N5hgRZywkh7ExWratKMMaVCazxdZMu4KmA78aGvamSoRLJJeTGvDCJsk88cZe8E8NWCv56zynzXgM9WVMeb",
  "key36": "2k8bDWvtvYiRq5Ajos7una594DXQKzvqzgZZEeu97eEDE5a4EG1PpZwZ8dKzZqCuYw5BRCa8ccdqgwVPQwp7yfny",
  "key37": "5GhGAaPQKDZz5eAEKtD5zYkRmwyESpqFErzp8D7P9rVAMnBdFBN514qyiF2Dq2ojBY3zCHHoyK5fpZQzR551LuJJ",
  "key38": "SV4SKA3yumySc7xtDGSkWeH9teh71H2ZTyB4LFFvj98ccWNQaLiFjUWz2JktDYHf5LKPXRuyn9WU3mvfvwW5wmq",
  "key39": "2MHascfGoZu3W8GiJ6CixEcYHxQRuMd6ALd1uUCeUvMHd145ZZTZjek8aYKV3PwNwrEXXKe2uG784pzq5Eb3qGts",
  "key40": "2nD1E4yJUhAtcyiL9Q8hq6cDKvKsrMAVm8w2uP4YBEjUyBD2rsbyXtK4XozN2RveB54PAam1zscmHknfvyZGwrxn",
  "key41": "2M2XduD416Ds9Yp8TgPKR6Xz2E5pp8HjyFeBvtXzo6JPi3SfSty3efBnUEQSDcs2prFxfdv1ozcZFTe1E5J7o8t9"
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
