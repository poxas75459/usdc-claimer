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
    "5WBXFsVEbSSGPdpPyjG9fKPzJTXLm4GnaCScBSgctvsTdFn7UanxqNdxASkVKZxMKdd8D5L6iS2HAPJ5XnNmHMzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "619PAHhiVu2kB9YHi4pcLWSnweqdPJgFczqfkmBWAU2dFGySbs1tQPqENHPHPZPQNXjQR82boNmbUvZNeJvqHhZR",
  "key1": "3Uibt33v982yNfqXZH3RbEa4iTAdX5jeiYcozWScbcHEGG4kkXtyrBwzpkAkQv9ESeNgbZWgkb5VZwT6VTs6sQd8",
  "key2": "4MyUE9SHWXeqrj86rxR4iv97Lnj6NEc5jvf9V4qfAXqa65taMr2ymq4wfMv3HcVJb9a5h16YHBM61LVfb4thSVEG",
  "key3": "2PhEyXbuxrjXtRH7h3zxNrB6sRo4A3bYPWazMgYgTHv9YNWHCfUiHrfG23BL3xUJBuw9baqFpYD9mLwumZjK26VE",
  "key4": "4jSXnFAHvREYFv3Jq6cwKntTKiDCvSqXeMTNhCBxUsakzymxmUn6b2MYcNujFRZ8LCHX8GvcfHupnhUPKZdsyxFY",
  "key5": "4x1dxjftMzy8LXJKzCsmK8tpk6q5X3zmxidZeTUCe1mGCN5SzbE6AQeiqvaRwrJ634mog8DrN3pisPYkiEWs57SH",
  "key6": "4io2fSS2PbmkoJaue9EWRt56DPGzXDUJGkRCVbTjK1HNf6yA9AbRWXwRLUpfpEmquutVo7vJSvEWqRzgghjY5Vwh",
  "key7": "tYFEo9UZcZJmfvqLCsJdoqK5nEWCqNvu83ZKSerPKoREvzAcHypSxww9FoowZizvVD3S4YGPzpg6ddueKv5p2cu",
  "key8": "3A1DF5JBA8XN6m9qyGTeCJnoe9S9Cm33NhKQuefqGgvcZDdypWeSJ25zFcProUTiFGzPSFdSLSsjPLikbMvrotFg",
  "key9": "35kGBWZb5e4eP2xUq5RQdCGuLMmtJKxwnct8bSiT9SSiXE5miE6VDKBdbwxnymMVrSLpzkN8dAsw5KMRf6o3m7jt",
  "key10": "4qszZmUiG1VAPbb95YQpd6svaPMy1NVzpuoYk2m5uyXpPdJVH9YX2yuhPvxazLKQmb1kiLrLXzQsxE6skquAjd6o",
  "key11": "24q1hG1HqK6EdiFke39QY9J3uBqZpRtM5QKBZdWsicJadTpqGY1r2V5wDrsRSscgBYqENCVrS8SZem9DVferpL9r",
  "key12": "4M5Jusdrn2FRAWZQmTv1fZ4EX6z8Xygxn9nDMBJmTsRbzLCCLHmz7tzZ6P2wDuLXdqCF6iKBrg78smwzU16kyZod",
  "key13": "3ZRSF6aQrtYkNH823eDwxV47NJpjPZzn7e2JR9AFiFgL6ULmgtFyXDQkY134qEKJYNv192uddTSrb3W2itw1SeNo",
  "key14": "29FZteFXrCKePou3ZNWxdxTKHaB5rKDVKq9WBeiwBBcDuPhMvC75EpgNUAVPeKwnLkj3biArAXc88JkfFK5VMzuh",
  "key15": "55nK3JFCtFZ9R7yE37sVWy2B1wwGb5WSYUpVVLJkAKh7Hw5RxzGBQZ1PUkVy8jciNestv7GLKJ3Q6sjsdrRroyrG",
  "key16": "5LKen9oAHaPy9ho8EUnjyQofobtWTmj4HpWqQxRtD4okE1QswSEWmWoeZf1uFVz4qLko26HiRFADGkdmAZkwgGNg",
  "key17": "3w9fGSwySSvFmowhvHrUPoUHjUMtSwknL4vmGsvDjMMAnhA3scBRz983roPsSGohnKk47ikEtRsFTPFaHQ5SBjR1",
  "key18": "3nnKzr1BqizyE1cwEWeFcr6tifjQmhoWP4FzaByDztqCbKBfXJVRv8qgw3ttUt4o9eE7T8Dj1tyY3xFa7TV1gij4",
  "key19": "yy4HpAPDKhvf64JdsSaDChGLQ4gsZfPW1Ng86kFCqtMXFaXjq4DkYYx8J4Yj4XaNSSKT62v21ifge2Y2gVKABPa",
  "key20": "2uPqiH3bgqyLbtDpx6twNNEtdejNAQgXtsgdSfPmUD9AinqnaNAdrCn6FJTzajSw27v4zLF1Mh9LXvNkgj4wZJ5A",
  "key21": "49DRz7XrRN5hrFWmWQofB8cL2njhyVN4cttPFC6vghqZTEUcGGUx5CNDKJCMjYofZ13UTE5fNVaBsVNGrGuDZeaV",
  "key22": "Z43EFprZPXERbx1S86P7DHixfgHnnDsa7hodoQ33JdruGA3Kta96ewyYhKkjYuqJ9PnPXddEUwq1uwWg222spiA",
  "key23": "3DT6sDgCxwquqt5Y6VbnqC6FnPjkvXooeWvwDRd6bYXbyMdRtY1DLojAsadsXek5vmcCs6TvqogTiKTuue755zq3",
  "key24": "4t2aFsnHdkg1fT1q7rwrDjUGHGsEXM8uEQHJQkFfgc96wF59emTxjSrSd7nvKgE59XfSMg4tcZ4LREsP96ZWd3R9",
  "key25": "2TxiFhcTdndHumwKn2Egphpp9JSHVTAw52qMbJpjzi8DCz5HpnSjkuggqzqMa815CRHuoMq3DbKatqoTJQYLsQUC",
  "key26": "5UxYJQGJtRuLzjR4pBQrakF8KASTqXv4y6aY1SriZzJLhUPbPeyZHLxCuFNdvQ1b86SZ2iPjYfpfXiPWF3ADttw4",
  "key27": "2caPrjpt16dbFyiizyCcDL5nuND9qth2sCt8jhwM8mU9w9SyhrVhbjD1eX4dSHYGeUthHpbjoKnWc5JSK1u56bPu",
  "key28": "67gBTqkFQ1UBD7eYS1XucRt2mvadaYUUFRTVuLMiaqqsDSey2PpA88VoUEfQyuwMsCc3e5JAw8PCj4HSw18ySmRM",
  "key29": "mv9nM2AMcMdE5UVfLTFDGk2Te3mPz5pQpF748zn9y5ZdCs51mF6tsGVwvWyfv8wswY1udAqj1wxhtQBB3Cu5eWo",
  "key30": "5vApAfH1PLhzCuURTRvjieyDBSHa76H6tmiJnVkNFxRsJZictgbQWLqBGn9QETYEJwoTe8a7HaANAWc4mALa4FWu",
  "key31": "2hV6vJSS4EiLvqnp1NbNUSkGApbxT19sPa5uMLT7UxbayiscUzYZaWyQAgu9GVZKp4NHcCKKx731KPJ9gvHZ2dti",
  "key32": "C7RZ4mDUrJWQzSTHGLxWNuu8oWhjUQYiz5ZsF6epm6FbKyMxS426LiJWbrcJX3m5ShWkG28ztfmTqmmmmR8sXZD",
  "key33": "67GjZCX5VeAPxYtUVWoHnHXUxmYrXGGaPJdEUuojHiSDbLX3yMUWxd1GX9mmSMoKRLsNfuoUX2kUwR7n8UQNsPKu",
  "key34": "2Ns9dHF8vw2saNQctxDQu1Ln6A9MGgRn3oeqSRxJxmawaXPC8LdHhkEURrc17hPoAADCfGxkGdcKVjcfTHBC4kyq",
  "key35": "4YHxzsrk6TxuPK9vWq87YVMmrXExaAKDgnB9vB579yU5QRTeQcPWAXxLLk3BPaXTzE9pDsJ24RxNsBCXZQa9gHs9",
  "key36": "6GJnfqheJkgXQWZxsszGFDwdanhtvN2JoTRxpPmDjAMGq7qbeimhEZZLM8ShuBu3RrJ4jwEiU8GzRpsCgXjmSUL",
  "key37": "UB96PWcu8YK53UhzHd7Mqfu5iH6YQth7z8QRYF1PM7yKRcEHXe69FUw26jnE1JDgWJLKSnNbZLRN8tuJrCQV8pS",
  "key38": "3g7FRqajaKrkiNQzUwCCFMPpCdci3gkJNY9Ne4d63scqmHmgxnitu7xtEbK5xFxc7Uk1fE561Dbo7PmvwGKFwosT",
  "key39": "272gGmANhBMrRnhBLLbV7ZuEPcrUGwiqNEiKComVQC5BrpUEGePMiXoPwXJqZCefRdr27Si4FU4tbyUZQ6B1Sxi6",
  "key40": "5woEEXxkCQHjyRNfwFe1BKj5LmL7NC3uhzvQAHSyjzdgPChZHAgarGbZpeJ7shz1StBKY44iBCeMtjAdpQfzs5su",
  "key41": "5HipBq6MzkBhZ1fpHhnWYgQfevpKxAGdfnpsNdvFtuuY9pYU9uLX9bnurG9p5DCiFMLaWtAvVVBCZ1RUhvVLJs6T",
  "key42": "4HUtHuZ8kiHRd82kBjUmRqWXShj55EKaKgiyipNp6Wjfy1PGTekNb8y4nc9HTNA2MFpUohJU7D7rgedjVCzD3j7E",
  "key43": "4wi1jMfDvr3zeShQ752msBhAf8Gf5hRSVKd5qqKGg5MCzS3G86WS5JoPUsfFWLqMGKSexMJZiJbVTU27gdrWucfe",
  "key44": "4z58w8vnCwf5aMBQR8MtBnkxzuCLA7H94y4SMBTx2Um2SrXZvJbRS2wqJ8YL1RU8WKCj5Mx8ch7Cx42wXxBhyekb",
  "key45": "43YBcdWJaYRPhSR7up2wVEHhf4jEpoTrBEiBwuhyfAEz2NAnE6Wbh5d6pWYPxr3HKodpnWjYG8NSwzTLVqBy6Avx"
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
