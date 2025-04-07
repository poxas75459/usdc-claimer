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
    "27pVmP7hdv6GaRK8Bee81bbRPAtr31U1hpVGPaEYbWuDb6GE79PtYQPMRh94GXBSHHB2qkGLrEf4Ne3ZDFrfjzFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtfVrrDNFMmQxdgAQ8CbPMRwZZnuqV6Zk5tkaMer9Wj8mJBVzKSkWTNNnnha8obkcmYSGaMzpSj4SPTD5rrC6yr",
  "key1": "5BcDtRFrdk11uQHGP8ZmmuJuPAEKb87CnVAoiYYwhLE6TbegYGzkh4qyM58oXnmvHpzZ54bM9iWEp9jBRnzL5H2K",
  "key2": "2t6CoVkDTLLbdjFUZQfqDZqkZem56KR2tnDKnJ8hjhqP4Zxqttd6Z5K2XRmcTtHPxzbAQHsUyDaj42aVt2DUp2g8",
  "key3": "3owfNtnvWdVSBV4WPxhbt9W7Gnnb1JwepTGGMnYdnksqDoKFTRoJGCeVfmRw2L2b4Bk339ZKSVia6YSv6fBtXtRi",
  "key4": "63E2VV1MWPSitm4MNLkbiBvWSQKo24LowgnoczuZeTibyvu1hVgWweVEazU7o6n2jZUb3mkFdmE56HsC9vCwoHHA",
  "key5": "ba2BPpo3gVdELjUXWYHL6rtuRaVAasKauA4SWxaB435Fv3cGxhckGSVM1YHXrsFrC6PQ5KGVxrk2P58m81XAMKH",
  "key6": "4UsZi5x6Ao4Bu4USrWEzdMJnhiRbVj74qq77UH8WMz7VnY2Q3x2JR5NrwGWGDX1fZgYhzUmzQpeZzM7wyHEh1QiX",
  "key7": "4CWakPvCfNCYE3uz1gmaohWLcZpn78idYMo8REMLkXJgC6SCDMRS4VViARvYR6tCYFbv73DoWVTj8mL9Kyjoyy3v",
  "key8": "4x9do4P8MKh6EUZuxRfic8xBxWvxFDc8d1Rtuen2xoEqLyu19aWEGskjJJiaUgv5uSjoRhg46ebQzXZ7C7iyYrei",
  "key9": "2ZrN7NNDE7jjwscmX7biojZp6PogmPwWpkzFsVBoDgCmxKnigabu7WX7cmPWTrjFErmeFp14jGK6QB9qs7zuzgk3",
  "key10": "3EzmHGjo7Y78mV7NTigeYbQ3aQsT5XRCApghda1MmfQB9unSYzAt1XgrELfSqzhcwwKPJY6ZUoSdKBDGaRvjiJK3",
  "key11": "3YLA2ACG2FnxaaSYiT1nqtbEJkFyHAnbDqMRchbewPf6616NQEzHnJ4QebNZHQVGYUtfhfnXLKTGF5b4fTcAkBPc",
  "key12": "48J3ooq7tNaRBR6ZEj5FdvJZKQxLjufDz53H91d8vPgCZsoHHtRry8fiyBEjN8jEYVmZQHdEgBQHqQkQyrHE5VZu",
  "key13": "391fYMqzRtkJv5b19boSL2Xc6e8tA8B7bJtxqxJVAag93ZGtNBUkn1CdVqzZnqGdpiH5guGDnsKoQ5HwWobDHGH6",
  "key14": "42ibfJxMc9F4LadSXBVCmNAAvi8crpHXb6asUoPgw4akhR9Awx36x2ZZGGZQhEzWjMSiBk2cRu4cdhrZb2FbUxE1",
  "key15": "4h32gwQfNRA2ssuuHFaCqpWTHq8v4mrAj2f49t5tQ4pSENu5R2vqmDBWDcqBwGHo2PQop7sGe5bHBbQGHK24csmD",
  "key16": "234vAY7XpJJckcC5ckDH3fuYJa2S9hTNwXuDFeJEYWM7i6AcRBFSJPWmbPV2UekRS7cx4W4XhRAffhbKusMDNo9M",
  "key17": "5SnbG89nkWQjJvJHZgSP4vrN7AE33bjkYq7sJ5Jt5wzrs7WfR7RJaooT31FxbbsEyCAsF7tByUriUXeomhtcTAzu",
  "key18": "456sAqQf4mjMveSCGEhoMChjch8Mau42rFgfMr4GCLnUYrPbnZUka6LuTFk3JTy8xD5zH3pnGLz8uWy8k3XYFaYn",
  "key19": "ubLXUrNf4XLUBcrvDgw6knjETfhQod9Et3MT5KLPVUk6S6AuK2HnVahrk8S52S1aKqAnnpqQ9LFDA54bdRN5fVq",
  "key20": "5TPYEJhVosVWn4T5MQciurzxx1gm4Hv8zoCgiFWj5Xa1iURNnAB3XEnVZ4LLb4MkwMvonv3Cm3GsEEuzuXiHcMQP",
  "key21": "3iVY1oEoBLPMHjvgHWhbKtBRCHAvny7vYFhKttkfL4NjbjWNcU5ikjQfQufv8HYD2fBZ9cKh56oSvQmjrJF8NgJD",
  "key22": "5sjEM9z2buxoCdZYKUR6aJJn3PnK8ZWMF8UcbiQagmR4XB3qo9p65mkoMCiqVeAXK6TtzAHkQh3gNyoCywZhhFmb",
  "key23": "V7hiYbDAguXiHuHwx9qMcMky5QDMM56fP3tZemGB8xe5CEuRPVKmaPt5KGFD6hFeJCL1zP74xCRcsQZZabYtAut",
  "key24": "3uzRaGbHzdUFPsi3iURimDgLbcGUsNdorPu3CsXKzwTZP5zWjHP1X8V7CM6BcbPU6DwXQJmWEsCgv2ZutXq95Ut2",
  "key25": "4e2d3WHDex7bq6cUvK7godeNPLps49KECiCVqwLbuRf45Zd4XvL71XUeHsxcNvok7bEkcskSd1WbAXBp6uRMvm9z",
  "key26": "58ryrmvMm8vs5pnjwZ9X27F6ahiTmzJk8JEM5UKui36bb8kvrs6hNDKgQ9GxcGSs8pXZh4HPWXFoE2ZnfmNkHFzE",
  "key27": "RQGukA5LEbMTXAweAc2wUBGY9xBiZUfaZd73azyiQ1LeFhMGujSobtGjZ4tMGarcUeXn3mU58j8j4TMMUQy5DuM",
  "key28": "2mer4bngwhJkohNrVLvukSr3WGZBYUYkthQMn9MvipM4QGW9aecBeXQEGNVwTnkCZSdER29i1vbAnT6NxnAkDj3W",
  "key29": "3dwBb9qyo6CGyyZtiQkHWZskdNwdPLPejz4sd6emUYoWYFi3MKgDdbYw82T1FdA2vScz7CqSrsJeQxx9iNd6MrUg",
  "key30": "5r5XPtUaPQP4qV4wNE8Lv45KegFZspw3vni5MMkheifA8NDHYMhsACbHKTwsGngzFPxjV6vfZujeBg4QTdgwgFy5"
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
