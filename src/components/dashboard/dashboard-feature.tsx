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
    "cNbtq8YGrN396hqspkyuwkvESCparxwMe2uDj9a4ArxGUum35N6tvLXd4EKcBduQdtizA3iHGpbA5UNVtohC8ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgTtuermZ2nPndvWHBwHNBP7zy76S5yQbn4dihEVhMMAZtyxVhodLd3YtiCdpHyiLeNmPjCKDVGY2JiP6GunLnB",
  "key1": "5wQnEJnEuNfyqSkjxFgT1Zq8Sv8MXggjgfTXdVV3kZ7eRBd32bFghXp7vZLQjL2cb2tk3hjmZrWGzKEEp9jiQx5w",
  "key2": "4CViw95UN9ZYBtCd1YmcYZ4SRYHA5oT1e1J6MHTTqbjdwv8nPeosqagRPFae7ovCokS8c5LgF5RpTUVazyiw8XAW",
  "key3": "2W8xGXQGqSn2W6yjozbfErFwQcUfsccKRQuzxzHsfkabBdXa23kdd8j83H8XBZd5VabMktKLKmb4d9Cb8CmjFsgX",
  "key4": "5yPei9awkWTBMniAL5e1ckfDC128upA9z1SfR35F2kLCmYcWgyewC7uCs7149JZBkR84TGWF1L73PVnkWaJnjFCn",
  "key5": "2KL1iTWswDd27ww1C4QGxXFRfgaFzcBdKzhHq8wtyCpmkFSzqpEsRLG9rZCJQBBieC43vGg3ZiFPLHxuzr1rDpvR",
  "key6": "59rdST1bSLoFAhCcbRGuCJCMa6sHC1zPbjhHpRuuWxd7Na9xF2HVQSGsb3nKma7FvypdrCqtbQt8avUGX1Rif9uN",
  "key7": "8u5q3fY8MV4GoaYoueiUwSUPy6JWozcgkWEAu4zCeia9r6LJuPSTKYC1Eh65mcBMAUqPU2jZDYhEhcacQW5GneT",
  "key8": "5w37zB8QNTy6hGUjVaWNL8JsrdxsJZUgYoi8uYpyqFzEthkii6KwEskVscY8qF1RCrGk6gywrvAaWUkHdXELV6b3",
  "key9": "4Q5XGe6pSLN4AzYcz71SVU7NvFdW17VuMizJcx8nTZ7K68adZqhZp66n3s8TE6hvLHsWocR8goLwgmxizGEQnCe8",
  "key10": "3tpatDBnGeHWdqBST1uo9Z6NRSxjnUWhjJNMzAmhMEscXY7BjMqjQsrXfbdtAdzGDXVwzKYTRyTgEdT2BESHStLd",
  "key11": "58QzGsDjUR1E3nLXd2tKLhTf9u7kkdHxKnor2XjAar3L7T6jdxgpzeeSDXm7cJ3MfEb7HDDac72bffxZtFPhs6Ac",
  "key12": "2dv9LDzCBKXghzuAAmAPixx1Gp4B3HSLUoqiEetfaDmrCifp4TJwWY47MUtibN3jwRzC19Qu4Tswb9LzJdJhqBNt",
  "key13": "2JtA5FtGUhB9suHdXXUmST59nJSWPo1HjdnoqgfuZUWK9xVcVy5kvdxXgJMcrbzidg1unkBWCsXC7PfPPv5zcVgf",
  "key14": "3F64xcphUFeuvFcBXBGe6bFVfyTDS24ss4Z6NXWT6zkNvqe8irTLZa7buQLHf9A6PXm9kD5ELh9og4PZp9d1rd4w",
  "key15": "2dMQ3HiuD7oUCExaPSwpPL9zqVZQEwcZRwBDzgFbfiitJpBpVx29pYQDMzFoCkkorrrqDKafHbcMhLR57kLKNatW",
  "key16": "WH5uvgHNk94QCR1onTXNwN4kGgWEMagfmvVNpw7cUd4gL2uVTGMg2P8V7yi3D3r3d6yJvfHyHkAwjQof5yUG7Rr",
  "key17": "3YQGdhuWsJdovD54k8dhQbgCBni54rtJAyeRqbe3nRWxgeSEqBTaANDPDnp5b2g1R37RigKyM21ceEd7CUcDrAQH",
  "key18": "rWmhemEY4bcE97NDHjzkJ3YUMjEpWYFHMoLwHm7tF3Sz2kpEb92u9GSfrAd3tb78PweVQTfsQMAasmTFw3S5A86",
  "key19": "64SvjvSazNrM8vE77ynoKxJfAQBWC9H6Gfu5NtW5PKL6PUqD9ZFAM72tZBDMxF2oVJKRFvedGWhU5xaYvrL3F35U",
  "key20": "2DM8YKzCoq2WMiHE6hHd2Ejsvk57veZi6MQA6h5LaHrWii7ANpFLuU5vw2uH15v7DGbQiiWnDBf7fERhDpwGkShV",
  "key21": "328etE9YKLgn31wh9FGvkfsAEbzQRvZUB37FRxw5X5gddCLAayCuDrJyBP4jVLfGtC4uZAXx4DHCjYjiJ4tmYGjM",
  "key22": "zgCoNBjhkRwvDEumuQvBbxH6wk2XMqtCY1PCC27xCmNf3dehQ1CQ3ATHSV4tQ1pefcVnBu41DsE9RfpQdxDjU1X",
  "key23": "4CS36JRp4tGYFi63p9VK9ANywTFm2v5axgoVqb1ByC9zEuhPaf5Bg7dzfY6jFNMFKTzmwt3q1UZYGechLi5BXyrW",
  "key24": "2yhugH2BKh7zmyJNMqJCUHWHZYhjn9cUrKHjUX8BhMyotveD95LzPZdp4hvKVyUMoKFdSRchcbvEXpuSJjFgrxC8",
  "key25": "4Q2wGH18kAPr1BLdm6dCbnF6aTVX9ysZZxCh2hzGtRFjabos4f2KBkdSaGbscbC681DTtrgLAzkeLxBE7xsx2Tt4",
  "key26": "5mRvmWB9pU1YgEq4Qtr4YWENGa6MWWqwY8FeU3GWyD3Pn5o51bMjVfQ8xg774gy5DLmkNqJTACdago67iWNBo2Q2",
  "key27": "4HrbNAav3fXycMAqohgpBibkevr9cjQV4uErromZr7E5Kq1Fs2v2hVDAh9Hd54hFRq8JKRwX4NZf8RQV1dj8Hoif",
  "key28": "3QxkoynA4AWpB4ZfMN8Z2WbKiv7Yvk39CkGm9akesH3gsCpCyQ8k6ZwXQHcjUMi24x5h9BWVXZRkGoJFvoGZwL81",
  "key29": "3aHcznnS1p7gsMSvqD1oPFiBSjZz4rkB6svBTgyJzobr3QGXJ7huKcSeCa4sVJNu8qSFnveGRVhH4dpvyMFvWKtC",
  "key30": "2HkEe84VX8jDhskts3powUaD2ur6Y72g3WziGqRLtmnhhosyDQKum5jTYSmV2mVhgNYzEXrdGznnKzeQG8NUGvbh",
  "key31": "2qZ6bmYiE4H7c7BPL7ak4RVNbr6nqeP115rb1QbizVDNzcT6rjLdpZ987hMfMjGA6xX8k6m5QsY24c9pwcrYb1Lx",
  "key32": "gP16Dm5oP2yLeecGenjPHrQePn4d7yMMrYP2sPfF7M3kBhgcK75SGucwnvVpWcEmsmAM4DNGr1Hr4drXbUsoqEo",
  "key33": "2bPZZKuCreLSuPxmbDFqSy4ujq3Fch97Y57UXxNFEa7jyNfoYdUx8C89JgQWazSZ7vtPP3h2cVdzvoHiy9sgsmRo",
  "key34": "529zqRsCQ32yj3fpx3ETAVzzPuEnAwqYKEsYvvGSrVAuUBTRk164kreH7ncCmtnG7SusJZuo6jyVb3mRjFjdoxAX",
  "key35": "39FXjtC3hJvh4p7iTphpjquaaV7FsyUypHE2V2zrRWSRpy4anTtPmmbifFd4cWfS7m3pjid2FMgHfnuHJHYeHmgj",
  "key36": "JcHLedb266zxpkppGM7qQWGrRktDcARkm5DuWeYVc6Ftw1B4eYeBBEMtnEC9FsHw2kD3hoVzm5F7tfznkD8R4Xb",
  "key37": "91z3fUBPymX3SFLgvchHYP26JS16YueBruCc4pPRrdnG6GHTASzXkpQqSZXwuGxKzenup7M3LDcVutoQZFeLwKq",
  "key38": "4uYHXZtcvBS7LxJdxpnPchdzSSHYsdb2CmztrKGKQJkffz19fcQfdpY2QFdGKAqNLsaCscnUzEn7AUnfHhvFMScc",
  "key39": "3FLDJg4jvi3hea68vTTZ4FzzR7ocv5VAj11RnB42nvzbnquKZpwjd8xzJkifq3p6R5GyppdQUYyu6GQ5N25YbAZM",
  "key40": "4D5pxe9W6RR1wPerG6RTMLJse6MMHaBwNHi6Qot8E9FqwviGQZpGdzf7aGPgKswzLywAn7ocRh8yteX5A326ebSF",
  "key41": "qF7JqWGvebLJGvyeLnTSDXSxMniSC1VzgLpbd5byDBXuzF81mLtHnG5bAmYqWpo9586r79wXkAosGWiafv9vPq2"
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
