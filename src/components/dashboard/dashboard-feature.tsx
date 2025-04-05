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
    "3SuMtZyihWQDy24jS7Lzhb7NjHfLro8XTAq5uoY72nqC6haaxcWVcuS8fJu1odQN7uPvH7NcJUe54ADD1Qcfc4mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wHyDQBq74ngZqUHG3dZv9e4uuqhgxfWsdVmXwkQmTJ9hVsmVzRjNpfbxX4cbMrPSPTz6qkGueY6jWPLgwTBfcXk",
  "key1": "G3iEsBKnncLkuwdGG5wGMbKs1QVEWwTtanN5zbwQAEvn6ZkyYKWt1owhrJ2RNhTKz86qkL43zQ1PqnJD1ohcZUs",
  "key2": "3xF4qLiBBDnbRBxvW8jaMkMP1Lq53YXPhCZvWQPEevczeoZLLG4JUkHG7bqRgxE7fyRMwkfUzPZPHXvnJUEBPXtw",
  "key3": "2BYRPrbMqLd9L8gakMRqq1SNZnZ1MvGM3pQWb4oj1QkxNt1Er3wWFDUfJhs5kTdxEZribdFkL42cu9KSjtd78swV",
  "key4": "5yapYh1gziGkQDAbrJVJnzW46PtMkTpfLZ3zgYtQqzAEAVo6mzVesCaQQKfakqn88pkk6XXhhFJgVBg5XXKP2VJd",
  "key5": "61SKg6yEzn65Xpe6jiDbVb7AyLPv3uj5jrQpyhmKBkarTRNw8toLehGykKMmAcB7maywr9AE2bNZQTJMggdKFBc3",
  "key6": "5HJ3D6yU2k8aWGMhwS4P27UbpFdCXnddwdEZkmXHQ5bSavVTVw8TVEsX6cy1CTeHrtut1CMsDkDEapCkynZqyzJz",
  "key7": "5TakVweFLagkQTKN2DexsUqp54qfkmiXLE9SokkQdiSvKNXuXLKobRe4vks2dCFnzLtuTgCQ6CSX6dtEHBnN16Mb",
  "key8": "zVgyB9fKUGWBjqPR1qAN6k3Tp6eHfjbmzj5Ch5ZxwTGAWnRjZ22q44d4TQaDbeDyRndejMuu7CptpUmjnTkmLqU",
  "key9": "thpheGZ7Wii7Yb8dYeBaUCSR4et8ueuZ7mGtvJnhJL7mqZm18D9e76FRPQKtNLLCSveTkRtMUgrPGmy8Vi593Ub",
  "key10": "MsEatm1TVW33PAtdKBLgW9QwHoZmNNKdKvi8w2fhX8qNXS6QC3cr9WHYqpSqPDHWMKTuLDh3WT8txWYLxK8Afbm",
  "key11": "4n5yTyXHrsnCuDmRCxpXWQYK7VjiFrx6rEsXwkG4LUNujuP56bvEYcTyQpQQkvipdaiZNS6j1vTayyw9V7kA2goT",
  "key12": "4QyF4gAtT3wxoEHHfY25NZwZ2xDDSofjM5ib4Lbbke3JNZYy6wVyHHC8Li438AHuZJx1KCM9QPuDENk8j5ja5geD",
  "key13": "4CpJw7GcikActvSh2tCTbS1EXWdtheHgw3AdgEUH9M45yzaaRHJNonSkG1aH2VEDx8N4gQME2gQi4acBfQv4AvQW",
  "key14": "2z13qzqVfWZRiwxzQm8DY4Ub7G5UqMK2r4zn48aSRdU5Mo6xxunXVe8NKShwAukPzQhoASpPNdb2fZE4oq6kjn86",
  "key15": "64S8A2VHoSejXJrPS8XSovaaFgSwViwqVB5cprKNVEifXMDoaohQDsaUmy6fsrbQzpwaRFmDpmXqJDuZcXB3h1HG",
  "key16": "5HPiWX6UGN9vCG3DFu2CJoCdQcJPb9aB7K7JyxnPSXaERJ7YFfusJE1qyY6KsBNn9bEUhJAaYxyp2dfBbz4zaDax",
  "key17": "8DsxSakbmBj8TXSkgxuh2PtMEfYefPhZDJmz21zSrDcVKC6zKPJtYFXQkQ5iSZKHjQR2fVjKkL6gu62wzeYrsa6",
  "key18": "3e3tLTKbX71Qi1mkwiVagQiiYgEojoiqeCq6EswAnyy9rUe5cpfjfzcw937aVVdDR43rasxf6GNA8L4zJbqJAQ5T",
  "key19": "49PsCNkyZDGBR9Z2tV9smsSx3wAXRdzfn1Zf8sVpjDEbFyqorRbwYwhAxwTS3w2X5Yie8XaMYDgUWvKBK789wowJ",
  "key20": "bzPZoFukyAFf6D8RAnkU52hC1ERtA69gfarkihmb7QPkRGUp1KeUSoWbKm1mrbyX2wiFnZ2xiXYyuQsXDfdDrH9",
  "key21": "3b3c92UtDs4VLZdde81wmjVftozgVbXYUaf4UgCnAtDgRo9NyfMwgw5sBZNAQXhEDnj2xF25AaeU6Abj4LpjHgor",
  "key22": "4bxsQkhb43DrqTKhdCPuMa4yjqsEvy7QC9ESU31XUayxjuNZCgXSwWZswWSgVfAFjiYQPKnH3WcytUCWjBjbHbA2",
  "key23": "3cLM7tRiEy5EuLkFWqZrjFS2zBM9n8CFYrvh1qPMK946qbQgz8DAewtCyAr4jj79N4gEZdtB7VvcSASw5mD26itm",
  "key24": "2XGUaLQ5FQb1P6buTUdxbDkpXCY9AuYEF6HQDbLh3VAiTT8ChKL9hnjJJKo2Yort6H1v5yuQkao2QyDu9oKY7BxF",
  "key25": "zxRST48tT3uZxh79RJwnRx19LBrqWyqVZFjtPNR4cNGyFY91Sc3LhUydwWBNS1UxCTT2uAYtft7PrCCEr1zj4UP",
  "key26": "5N5miXJKv6v7KSmQegZw8rwUJydfCY9qjyPXLJs6v12iyRQ2RqVDK3Kfmn2MDqQ75nSdhTGS5zxw2Wo8vQAZaeCq",
  "key27": "4S1Y63gKraGM7Bx2aejYWgtWwdt3Hdx5MnLuqcBTxTiHmzcCZPcpNj3NvvgZriYdCwUVxFgLWuYeiKJ3p89CATgU",
  "key28": "4phc9m6D1N3etTgDScyD6jpyzXyvsa8dKbWaBTr3ABkZGaMqZDJ1JCMSbvtPcV4p9rfv1ShNgif5MUCJcH6YqFNt",
  "key29": "2wQDaB2qXugrcY5Jx8RgdpHuxULMiTNXtTEAu6WzzjWnEUCSbg9QEV62Ne7jytV9MiFV49qwXoxkokXb4gfZLzAz",
  "key30": "4gQixXJ1reWMaJVZVY9ujHdXHeUwqmQLbG2Qsa1pKeWEnGhwgvauQ6Pic8V32d4g58gC8ArzLJpRXP3dWP5j6TNi",
  "key31": "3WWYvDhYtoFrVknw2r6G3XBMh7QRVyKMXCt6mLH1YVeffRz1tAmb6k3TE8fTJroP9fkHNQaa1YUFvtW1Ci41LVrg",
  "key32": "oYSRfYqUiks1NdJCJA1wU3Cq4ngPoxugpSPyAbtEbuG171LSk5qN5LsNjoCTCyuDUGcxUPe7HwKHSFPCAUb9h6z",
  "key33": "3vNoC4Gk5yt9wMiTra924ssQeYpVfDcq6K7fNg4JUgEGjkoT2ob6UBosiQTh8m2uthGA55KzQ4RLvPswqxKSunw9",
  "key34": "TWKhgED2ZbdWaEXFfJeAoivDBsPULU2TrryKVX9MjJi4Q3WhZxtjKkcQXyfe9qRp5pYvZRcNpzqj2ipvBvFEpx9",
  "key35": "3h582WhAVoYGVXLisbCr8KYP1bzsJyFpGVUQKhQcWmB23hnYKymbvpNf494LUQEworvvUw62tZFm7nhpmcGg5PX8",
  "key36": "5YMDxCGyaJAmJQtJi7sSJBLAWy98esNyVxgcc48t7iC3wxdjCL3sqvCGYy9CASiogHSXYM8G283mKFuuGM2Rz7kP",
  "key37": "44VFKnSYfK7DLbnWyRGEQp2c7rXreun1t9Ak587yReRXF4WThd7trTvn4TmmwRqnQuW3UbVbrd9hn7YcEqd5wWyT",
  "key38": "4dpHRmpVryEd6k4rNHyRQbd7w6Tczzvi2Er7ng7nWf7i11mqgyCdw6DbKQGenbXKqpmPXTdQ3xx5zhNfFUzesshx",
  "key39": "2kRUMfodR8eve2fiuTKu7ypxqLGxJUL6mneF46EanbWN5zXWhgw1oRwBJCTsiBtfksA9uTk2Dx4dJenuTriijery",
  "key40": "cgGKP2Gj42LoGNh1iTyiesZoHwpSMVsUCpc78DMhipVq1dtRccaogmqCa2xhDCDot7hRS7k4ME9mXiTBu7fdT5b",
  "key41": "4kMyVKFKKmrD3nDAWPCcJ2sy9mAvbGh2KWY7PfTD51XCDNDGr7rewv2qhaGncntj21ZYp6Eh4FnpwnicT9GFabxp",
  "key42": "2umCMEUAJqdcR1VXrzS4SuVm1wPvbeGVpSr5dUHPgQQRfFmXQFrVhUXFQYBa7gHAVSpzt2J1snLYEqzaD4dzAGZa",
  "key43": "GYW3cVQyq4fLh38rwdSVDvbZnsVkHMpmvYcpbh2AGWAKKiouBovPhndc7W6sFbdSRneQXbs9brB7NBHhk5WqSir",
  "key44": "2cBEMBsvpaEYqP4dC4hxmBgzwRMoLJPjgC3xfqRbh9QiNAZhaQAR3cJZM98SD7kMzBnnQSHwKjnCenvZneVPv4HK",
  "key45": "4uuKEgB4Nr7JkDxR15ktgMJSDmURGdfR98RADjvVZTvnthm31bsJ21uRwawv196kWfup4GjRciWJJgoH5fr7zUJw"
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
