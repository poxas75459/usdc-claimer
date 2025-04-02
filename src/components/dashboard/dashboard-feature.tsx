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
    "JRMsXkVnhyHB4Wp8pvvAgDpYMWdHZTKMnsjEFHMfrcLC6pXxMy6Pmj7g7pg9WixH9J9ETP4v1Ngob6gJWDcgT6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CvvQa4XczVKCRtFz6EKi9mUx4EUqoYCyxXoCmSro9YjXKy3H3VYQQjZa1tf1Vae1NuzjzjbAiFEfWcMEdNGbmH",
  "key1": "gebgHE39RjAyZESxrw3SgHduV56yxHinoTCmwx6RxKV32KwNhk3oaLqH4e4Md8jep1CqxcwXtiFNHxz6QaVFYBs",
  "key2": "4tvYWd6Zqy7JjC8gVCDhiyA4ENecXgYdFrJeBHH9REm7zJEPEyYzbmVWVWrGcawyxiZVt1rMQ6tDJWdMUWjKJEet",
  "key3": "2LCc1ngvJS1WRyYcRvwhNFoyrnNLvMMq8JZBDgViJEvsFePGnzty5D6b2SyqWsLv8XwDkEEDuZPyLFCZsxMoWvaM",
  "key4": "mt2nRCh69Lnns1ZTiubS4U4aDTZMxF8ziuCxX2NpMw1oKwSjcYvQRHiuXajkK7jhRWGw9qcCRDioxAjmAdbJf5Z",
  "key5": "5PBEasaJgg6wVcqMzsjbxo7zdj1JBSQ5wFDmZjjst2oTyqH7Ecefom8XohxVY6U6Mwo8Tfoqsma5oiU3cwZ63EUX",
  "key6": "4n3x8kPuQUPMdnnP685BgEU6YTFiuiSko8oxJZJve7dDCWwZ7NmNpw2UpvdtixQYHGKJ3nv8BB4XBkJ8wNhPRQoe",
  "key7": "563D7wcJmKax893sYVMW7ZSP16oty9Z7krZGeoASrs5wYjijewhtssEZ39LumrAREgZBMZmuVcpRAJM9EJPfbfGM",
  "key8": "xTKNT4tnNb1TGPdLHPHrWYTjCF6URcwcYpYfaToCCw18A2wyKrbWtetuTv567Wyz2VBFBwYzo93Lj9UHasLNQeS",
  "key9": "3FEaW54vEwULtGB6gv9RvBFy5TnbL9x5eSqe4A3xvkf3JBfYUrN1UGm4fHt8vc4QXLGZaGDnSMq5ZVJTyBWzGFe1",
  "key10": "3UoXf3aiyVwMxMhJwvdLkaRRtCQVoDvJtJzixXPchDyEqgpPEfwEibECyFYSsj6jeQh4RzfWxby8P1NEz2f6FwYh",
  "key11": "3YVXnHKkJtCCvqX3BpwoWbSFV6jan4EgNDRjWCwfZT47nkDFhNrrJh7yHryKArX7FPAzePqb8k2YSLD6pLrRKoow",
  "key12": "3G518hU1MBahcHx9C7RNkRGv7chTT9QQvGpRhccP7TpmuzG9Dqgj4vXaq3YCBibKnBzJGN97FY2UeaWwTKRqefMg",
  "key13": "2MZcPc3mHHcUEmF7JSTryGtGcWoXQ5i1e1Cmnt6ZVGrMahZeYnvXTGuqRAqUEicphsQNTGJmUh4aqekZTZ5d9nJR",
  "key14": "3V8WGm4gqLCo7x1JXXSKGmXVydXNgan9AvHHfs7EFSDm1nAZZQUgqQdYWuoCdFKZMdBEaVyE1sd8mWR3xBifeNRm",
  "key15": "5SQLGbarVuc3VHQ5UZTUmoxqg9Hricn79YghiriB6y8gJVeY3x9dzWDhoNXkX4bRnxXxyXuHAjLRToNEQQ2DSu9o",
  "key16": "5R3mE9sqjo2JNTTZZsak9V48NY51CuTy4tCeoDPi6aZtu2cqF3cWfGvoLo9jKH1wkTLtM79h8Q316M9rQ1m4Q1ah",
  "key17": "mC1HFZEEk4MC4x4tmSFpfDdX6FNVzzKnXNKGFiMHqQkCVk5meGj4UobvFape8pXqEABRJz7JK1MLmmn7TPnbP6e",
  "key18": "51BJAPMLHzehwZAoQP5MixTJTzCSCzPWwbfUAGQBX9TuC1ymG2GVyo8u4tFzdH2PDbV8x9rwerHD9iupwKWbuMTe",
  "key19": "2jbtsLHc6su3MCDhW5d7vnN6rLynMHcK8sXi2UATMwrtSDiNx4AzKSwDsFYCxrXB6wX6J5mUv4BJZAw7DepM9z1i",
  "key20": "5foGQq4ctS1owiz1L4DvgXayDJPmhorbcypQ7e8pWT6weMWiWG7cxsBt8Zo67DXWT765zFuVjqyjc3gZQ1HqqPnU",
  "key21": "2KCKaXTwL5mMTzeqjRyCrSpKZ6yPzxWmqDeAZPc7FPBfCUwpaCgg881wwwtk81bDDC3LMKSmCGCvzp8FA58RALm7",
  "key22": "4kSEER7YZhs8ifndwF2Pv5DkXLc43uyNB9uBWdjZqbQXmX5ziPucm1RMovcbHoFM9bH9eGyHwDhQ7Q5vurqHRVNz",
  "key23": "2vbum1nuLNjxL2kN3mfJSqKkU7tQ6eCh8XfqD1YjE4MPCLiL5YrJQLwhQvhb2LpkzR32y8wpmKxVaGEEUkYzweFh",
  "key24": "471agcfyRaYSeptLnsoRYLkU6yiqqCwTWH5K6dPgicRSAC54azeCfdNdnRssLzeLCs2aDmYPA7Hjc35jrihZh8LZ",
  "key25": "5N9iTqZ3YuZLvZdYLd5JqYSHNLbQitu8P6X6HYWd7Cg22mGm6U7BPkuhBYh1TjQe23czKiVV3xj7LSx6LqPHBVgv",
  "key26": "5H3KhaUSz8yKR9mNfrTyL4bgADfwWnT6ZkM6qoAsgTvoNYBUN8pFWYqS43ij5wxJfosXKQmE1xcGKYWPmnaCHGjZ",
  "key27": "24KvwnRDTZLQQ1LenVMfxNcAJSYzmgxjeyvFUbp3uMeDHanyGGJFe7MpU5FEiKRpZfUbNh1EUtkTtfc78jEBfXzv",
  "key28": "5Y71M7DBj8netxYUH8h2KPDr7FR5h9ticraRhqRuJZKQp2gnDVKQh5QeAGgrqixY5v3s5SgfXrw3QgjuSbRurd8t",
  "key29": "2Pdn5QgEHLYgewH2NNJqNQBkD2KYRFcjk3iiwXuzRnwRqUDhd9J2XPLYsYUR76z8qM3RvQeV4K2RJp9JcBQSiLkj",
  "key30": "5ZkTpZVJK5t8DKwQ4TkMa2eaLB9RWzqsoWfKoJwP6x15Rd75TydftWs7jCoiwCaJ4cXeymABo8q6ncdKnVUmYJ8a",
  "key31": "5sa65H9j1ZBbuGkfAWwtuL62mBQHKnF9sqnWJndUZWf7LGC4k2vBEoh3SEDJ21vbgTmiivG93UL2MJpG16SjFLG2",
  "key32": "b9RPRoV1QxGDS9sZUkkrWwGLkF1qbUnogJiCwHGhcdP6jxbdjjFQKFMSgDM42NEP79YpTBgY3gSB1pBsWjX3CGz",
  "key33": "3dpk9xfXT5befJ8TfPnuhGGKDQ4mgC7n2xnnsNQjzn9o8mML1FTLQaG9umFXDX7kgrBzepMvHkTt4KK4RPv5Gsw8",
  "key34": "4bJV4RKifTo9uNYnW4UhnemSuXQe9YUtaFWmbpggL9n4994iKYXXgePrqF7YYp2WZwGjCh9CT8LxcbDYqUrmba8D",
  "key35": "5Vn4orjhLhNgTHgrhb4ZyVL4hXUCh8aLpE2BM3F45ymS26ZJfDiiPVJTJBXJyyMn7R8HGdHkjRNaD23kseTkicX6",
  "key36": "54JZVjcQ8kSaS53XAxwhjSxom42WJ8hY3DcuFXSUgnHFYzzgND8KrPsMoCKuWynaGwKptxwNh8CEFh8R1i1ifATZ",
  "key37": "2W2xqtb5hneb7nfebBpTWqruwGzAXeBpSjhU8fmxNNrk7mMu7kTsfx12Fm5Mr7FwABVG3dtgKaM5zYb5HoMpEd3i",
  "key38": "4eRwPxhh7uWnquDwtK3GR36ijZM1dY2Yv4jBo6vPXeNn8RaJk6oo57nxXNzyK6KikKct2TT4yUa9ziJaxL1dPixf",
  "key39": "eVLSzAaNQri8EHSvq18Rhc48fnFs7psqasaP6MNFXbFE3uEB3GxPAVzuZp28tjt3K8hvmk6y9FyBHtLW1YvQybU",
  "key40": "LpJ3GfQ6iNATd1wXHtyGpqt9Jve5CYg9rHqTD8qyY2v7JdRtkZRYxNt6AySsP1DgDr1Tb8iVKDPgKbU6quYPbuS",
  "key41": "3VeAXex5FJ2BSS5QjTmQXeuLdwkjK4FmtEjhgjBbPA232c7JhfLCqiSDf9Z9uaTGaByK98DUW6vFd2wfNXe23CTL",
  "key42": "5v9Zo3N759Desa2TqaUYihdjc9g5p479ZQnFQ5hpL6yi6Jv7bmCK6vn2Ae4C7747PW74ppM9QNSSLvqH3A6E3Dp1",
  "key43": "5ZockQ4T5GyfKXwa43wVuKVe6CPtvBkEfEKwh1AzA4LEvyumjfbejQ4bN7pPwNx7jNuQFHxuXjaqZ7P3xro8ahf4"
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
