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
    "2zaZb4FmtiB5Xout3gwZ5FgiXLBi5cFYA4v3r6jJaCYRWsRr5gJ1fowRuDsTv3xMA81bJciHmxqACepZmrfpGnq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27EmE4Dq2LrPxheAeR71t2EVXdJgTEGoExFeF8nZHvE8am6RQTX6e8fuHpQ3zHW4vqRqUs9qPHVPHBuh8THgD7eF",
  "key1": "2MB2i2Rp8RgU7YKuVR6nCJ9ZLoNtrQmqNPNtQ4v4SD4h1vDxYBh6Pv3mMirB6WA1xaEYzB4JLBYzwDYkvVwgnPWv",
  "key2": "5L92DmDaebK9qJRBvZJYkFeWNmXA5y8dXGUdavdcygTrgyy3rENWTVihdPuQC6mHhtX3qYukuKiqNquChJwk1UpX",
  "key3": "64bbsKX9Bxh7hfBbXnJP5KsuUJsgLnzWGZpJfHAu6rHtJcRudY1WyyG2gHapj7M7LWAmLzjqkqt7nTh1d3cMoTKn",
  "key4": "4JpT7awM4wQhrd3NEh3k5urwvZjKPLZVyRc4KEbS1RA1D1wTStYe1Su2f6vkZJtqEie2SjRkAcnRwMFHpBvyTUG8",
  "key5": "67JhhPdRfziGjcmJ5aDhkwMuQcspERmRSPc2BKkpwpa3EZjhg11GgbEsQ7quTQDrZn2D7HGK17eAtosnU7EZb69J",
  "key6": "4Rx6i28wX757RJ52qztt7T4LKEH3u23ouYzu9R78cbvNX4uEaRsHdpsuhsh7o4eLarUBRuYDAwbX2KJjeaKgTpsz",
  "key7": "26VtGcjudPvXtDeffaNz3Rg8B1irdthsewkkEi1HYrUb5pL2aTLrrjer3755ygUQ3b7kbCfXGQyGATdaUDefJYbm",
  "key8": "3p8iQibFejThqnyrb51mqsXxJCZ9qvksSLxsU6aKrkw8YSUJLFLPg6CZhyqctRHfusxYcURkpUcDXpzAN3ARye7g",
  "key9": "cBgpMbGhdGnQepN6cJZaYEHAQCTN5mtxpMrLD5B2fPgF7HJuHPcvFv7VfRQ7pph862y7uBHPzwUQyYjRPq3gfYj",
  "key10": "4jsFJkLWSmwPA8dXbXjDjTmALu2LJEFXd9P1Re9psp5EuxX7dK254u5py7cHT8ZH3BmNzy8FaLBzPvNxZ1puML6j",
  "key11": "2vCdScfVFR6tnGWRBZ2MfD3HkdEwzuspQts8ZCiTy1FbY89rtq4hhYxZr6xxMtfhofhU9GTEJhnbv5WdkjpSyMJ3",
  "key12": "4p3mhRuWizH4sGznC1sWaZqxc3AWchnG4fnG2f5ES4AKbMrqUhh9UcTYFZBLz9qwMLU3s5EPdQbWd5a5zFxFX877",
  "key13": "4RddRP1p7jjVWaX5t4dYip2TMY1zFUYhyaiNwD9gJn8uvVEsoLkiz7j7xKUBAD2oCMz2SRYAiPQdb2evKfdgwUEy",
  "key14": "2MuLxk422bP13pm6htMEerE8fRyEHxFY78EHMiDrk7tN3nopULfm7dPUBmdtzRN38NEUSDTQdNz3CUcjXgFGeoEN",
  "key15": "cbqwUUST7knCdrANxV74NaTQkjViF6tuLA8QCoWPHAURtxWCbnzy7aLPFfZk6LvaeRcra7jS7oRhfbkbybGjQkW",
  "key16": "48ASYFS15paQfesR7PzxvXTqqPh4bQATNCYYembewFeFZmvunrcmH5ryaEGRL7eU8xzZriz4canyeBfsDU4xMVjt",
  "key17": "4pyjXKCsTFggNDdVZL8YQ2hbH83fBqWapN3YhBjnp3eNM5ihwJdVKtKw6aQwreg1VGHveLoZf6F4ZqYBp3srHZtX",
  "key18": "4YuwtqwxaPu6HPW3nwcDuotAzNyWq58wi83S4CJHuhMAksg6LZrHYaGJwJU8sAWQcyP7Yf1kbB1P69gmhNWyufSB",
  "key19": "66PR8e7vpnJjpiv7WRngywn1TbdZbZAxJxaE5DW27EtPNgxnhuarPds19Qba7BdP3ovnVHeRwVfTnK4KvceVXSCX",
  "key20": "2ycrrArpmytVpxfaTU65JoC1ax1yKRjCNx9Eg1oj3SMV9S3vNgo5GbS64hskbD4EadJ9W72may2nwhH2ZLMTkHqy",
  "key21": "3Ean2zCk1p6mk743eKJ873pXJMBwUs454iDfvRvGLKP4mu4i5V4UoecTF25RZVcjTujpVXXboQvLidgMV4CJ6FDZ",
  "key22": "5uoDJoqAt6iqk6zXzhaPzcN37Wf1wMd2oNnZc5a4YvLKoswQx1cnoFMiYzUTHYYjEZYtuiHYn1rXaqSYMUtpdbFz",
  "key23": "2VBBzai6WjnirSZKs4nQqmN1BQYaGzJGEbKy6ZabUgLiND3T6Y8CBS7LUDEJqhngkRbruPdFVjq76K2MCDgupxrJ",
  "key24": "62Fo9rLxmdV7XFP6Pe8Lg1JaD4Ncke5EqPxmRaENKQ3GDumjGdHBDQ2JCGoPRJtTwihnmXDKf42EBVfLewV526GQ",
  "key25": "xqFe4CstKRaxBnTeLyYs9bUcpVGaQvZYxDcUw3FACaws6yRjiyCnqvAeCLiRVaJEqk9ozZrUGEHvL3xZc1sVdjg",
  "key26": "5Vcnzd5gmhzsELUFiEJvNdmQJBgNH5DffZ6TzQzb4iYgccKzGtC6ysTVcUCqqA4aSyqpq1ED6vMQiyoUtASoCgCJ",
  "key27": "2wJayEeezJDdgLz92srpK1KJnsWTtXRi2s6ZBrgC6RitDEQDHGcFcdgsbtqPs1x7tRog3XqEsfNVW8hJ95bvs8uM",
  "key28": "3MzjUFa8szpmnhgGRtg9NV6YRWWibrvD1jeGDG7DR1ZHTjsqrm5HNyyqS66JGfpQBkxR9mJih8oBJ3VdF1Br3g8P",
  "key29": "3TvhV6FuS3mXhrv6ezNM8QB8wTcQacRkgteFHW5iGq3sdWrzqYnGkWaQVZfBRfgC1HY4Zz3i7FTd4GmC5hYbK27D",
  "key30": "3QDTYrnebgnfZjRNN9k3Q2JyiBZpg68X9QC62GmL1a6TJoDPApPqRWiRVMHeKdmyHsZ8yz8jase4E8hNDxyUKVW1",
  "key31": "EKxch1F2k6V1bijPWGjh5uLnTP3pFB842isoM1yc2Ci8whZJiMT9E5E59JUVAabT9WTfSArvsnW92jczoA6Wy3H",
  "key32": "5LBcnJ1c4YkemjoyWTxhfH7eihAo5AepFgE5ebQyjrio5nLwVokQxXvgiszpxVTYTUPQH5YhWwNhKQxokrBo2mRi",
  "key33": "2YfdKe75KBWYSMzuzMuYFrCcdSreJZPLh4njnVqJuQ18aNEtb7Y4xiQuqKBSt2B5ih9yXAEogCJ49XeoGJqtSeYs",
  "key34": "36fmAmhN9ZSq3ocwVYD76DABtt9EJ5AHB8vVaMw4R8i846uUJTvw7J87s6XUWcb5SLmvUzBZ515jPMgsUwLRw2rg",
  "key35": "2iNeUciu8SvrVdcB2xdx21MiwqiQao11DZx3goaDsXmGdr5nb6E8opAppyDMRZa81mm1Jxvx77985Y1PGLYKsSyB",
  "key36": "4CTEV3888PMVK6RaFvPJcAi4Rx9N3WovFSfYcFkCw3xwF1DwwVnbePFkwZctYQYzvfAbMR4QQQZobYtMJLWZgWgv",
  "key37": "4DTy8jj5Pn3di9bfC8jg6sYf6ryZxUpugKBwQUYuDU3ShxQw7HmhboZadmPwgAEyw95oDMDpmUcD7rDhafXnCQuT",
  "key38": "67kAZQEC9amMcuuVKd68ckrv3yFUYd6hMYhAarmgC36D5u1mdps9DSMAy3vktBbnSFzTmRfuEMAeTdMkVnXxgK2n",
  "key39": "USCoyD4wHeAmUGH5EwFjuHuaVRxti4AUCYz4ZiKA1hynwxBeQyCWTHtPECrhf7mGcc6uPBt1DLhzbwbNBhPXXbm",
  "key40": "2JZV1jTDQrGnUUPGdrUiJGaXa565TBo8Bv9qKko5WKGFnDWcD8hoBvakmbK2thFAS3ScFkAxbR7jbpLzRzYC4YbL",
  "key41": "3vUgmChchmtCTU7xrahhJzXrrYTz3P4HSBdnZte8M31DwSEG8Bm9v5PaJa2Yn3WUex6WWxgnf1vqZU5XWQwgEevP",
  "key42": "2XWMi2MTNPSo4WShfNofkbRz5RXMH5uJj2ksijezDEQW1sPxCu7ctHGrLv1fxGrJV2DTG5voPj65hvCN3RND33Tr",
  "key43": "2MNtUzueryBkHZVCCJbtpNfeywLS6aU13TjTnRwnWcfhVNv1qVfeW81wyuNcNPF7B6m3s6GooZ1iDkirRSJZRLbZ",
  "key44": "2B64qmFTuTTXNRbM77MGTtfjuEDr3ZVPXXsvvUWMhTkQqFzALCBcJdadPQya4cKg7Xcp4oRzdE2SrxLh8bD48Hg1"
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
