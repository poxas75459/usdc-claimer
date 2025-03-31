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
    "28Gfrp6BReP65HDC9LEiK1Twp5RH4zoZmBPq4PsLr2DtKyxMTZVypJ8XsJc69oE4ttX1WGzkM1hKbPv3XS3j8XXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w8vpnqQYvwx4nVpbRSd4paPmn4mnx1YpAXxdEcd4yaWFf4nn4fniYxXwAbJqdibqqPwLEmFK6LG6hYuU6mbEp4w",
  "key1": "3bUuor43SeGQbQmy7axTRtCNTQMjCPKinChhkGKW8yshMhB3HQtnepjNuF49g1Qn4w1bb91xgnhBdeVySGbqSc2g",
  "key2": "2aQALwserxhag5x3Sj9YnPDkMEj4hdWbbaeyhsNp99m8ynpEzGu4bHDTQrwJy5MKyagERy4bYZgYtge3rF62mgpx",
  "key3": "3m7qoVxdwJcxc785NEf37CNV3bF5zsojef6iDLTzHS6driw5xkq8P5oUq1Fs3n5WEc59uuBYptH7n71KGnuDgTym",
  "key4": "XdRT4mQbDvrn592W4PMSowQaiH3Zrkco8CdVrXofzEEtxafF9667tEuG74CbDGdN522cFKH314FyaocmNcHVo8V",
  "key5": "4bFxvqYLWAGZbbLmTh6buGYEmstQ6a9zQfG5H2MHR1kdoyGSfVTMdwG5PnrQhgJa1U6X4hkpvB8WQqsSydAZLj74",
  "key6": "5T83az8LjuKdfszXt6TxsCLqKedjhGUVYbJUv7khnPu6U6WQ2sJKuT39omzQAQtrQQPGoD3BDHnYTAwGB1fBRPVs",
  "key7": "4pxEiepHnxT9eUMd1exGJZXYqYQyuTNf7DYzuLT9NJVujwLgU6vUpqjzBYEXqNdwvnfvmVP9izXJtXdqyzhTJE8a",
  "key8": "GNZVcPaHVmHuMMavbRZWn7Ti3rQspgrSD3H2DPw9fx9jd6TX8UfpU5A4to3PRWkf1Aqsp9fNqpjvJ2CQfZgTu6J",
  "key9": "64XS7HGRQW9yS16t33uQ9RRpYr4TZuPnsgokotJdF3PgDLcw2ppQH51yFdju1ebERJ4kkwhB8Gs6FUsABmaKPfki",
  "key10": "5NhuKRETsvLTf3HmxzTt1o7sJdEoPvPkPvEKQjLvJk51hQHmgEf6vg5E7afTLFixEnMAZF9zfTrqmBExcVSv7ckS",
  "key11": "3BkkEYZFRYrapXadbwpNoD6GmMfFCLKLoC5EJojgSbSBwaHy3J4bRtx5Fq9nxh6SwQn2ZCp6XbriaXNJ1wsiPHHY",
  "key12": "4NTqrHwjvuokNZnSW68q9mHhuHaRrZZuwKBijt3aYuFGLq5SaujrGtJLdE4mmGtyMpaEAsd6sbQoV1udnFrCuDJn",
  "key13": "5RTsBfP7MeZLi44tUXUWjQEvWS2BA1u4RuFok2pEhKNrLh64ABGVb8ARNk4HkJEBVpETyq4m7WxP9b46NcKWdkX2",
  "key14": "5HPJrsoUCfrVbNofnxRTseiZP2P5qYw2mmbqVJdftp1ZihWQpJ9padh4GHKRqkhqsmZzwwGXeJQsjvoYPKWG8QRk",
  "key15": "63usRWT4S8FWnEB6VtosLaiALuyQJ6WVNUkJhJzxP4QDKG4ZKynG3EZ6HpCPYqMj7osSwnups2UYBJsVJtxjoek7",
  "key16": "63bt6ooMFP886zSNnQ3RBCjybadehCkMW9PfbVzaCNco1crECnyQY9CGkUd4Prq5F2rTiQCXdaeEPuy4Zx31Ehwn",
  "key17": "3skbJuM8jb2VJGjmPJdbYTDVQUZZVJGEbDx1Bhnwk3pZXw9yx1zx6gbr9DirqNhedCAPc1adTPSgtG3MdMqVM5B4",
  "key18": "4uebgVCfvzz8Ya5UQPMUrpUqzDWwaL9b5knJYthKKAFRH7fqWC6DKZdGrde6LjNvekCo3iqDt9AXai7H56vvLkEJ",
  "key19": "3YwBLqSaDCxAMPQTvbdTAy4EJCzeKpoG8dvM627GTVHB4qsDHEFffp3Xob1XGqpkt3KVQdZvewqEXrn6NyX6YRWQ",
  "key20": "5Fj1mxfYzbq4TmR1XFjt4tmd1hPSiCvj3D4panNcXmZmAKAQdnnFUWpFnEzbBKRk1uFVGwXieGNYZUeth9mdKuwM",
  "key21": "4Benn6ZW9YwrgXzZhMkEaFkT1Nc6oGhENieJ9HYZZSo1Y9X4gyfbUhDpTEAeL1VXyVbrct7xQRSd5iaeoXgXJwZB",
  "key22": "5TiSwiXDCRFwykBWnXqUrCrymAwJmXXGQLPjkx5D5qNbViWduusfhrfsiG8Y2NFQyhbcEwER7Jf2dMywRFPAgazx",
  "key23": "5cjvrkbQKNcPANg8vR8jBsGUwddjaVEBPHdvVGJTawXcqzwwAwBakd74ZMGZ5Hvnfo5deJwVWi1UM8HvAb6Bs1pD",
  "key24": "3gw71X1pq2BgSLcBcTWXaohXnDm8wSLFacqNybEE5ySLHvHqqyipGUSeSjyWfs6h9RGYuMonwvtmwBtfvFieQQP1",
  "key25": "2NxYdx5CDt6dyecQ2nhbHzqSHE5wxCK7RVTNn9rkYomFTdb6WNxu8hwNrfNoxQeNvVsji85pw73vTUZ68x9GNJr9",
  "key26": "3fgAzVSKiMKnGDVUy1DPxXspTUkSZP4CxAZ4WcECKWUgC9966hj8FDmaZGwzdhwtwqBTe8Wh8s4gWADJBFoXBLeL",
  "key27": "7YBMPWxUxejY41C16bRMhRN3YzDUQSZexH8H349vHNdoCcJFa8HFCZ9nzC37yBK4ML1hr91v9yPNBDud9uS5B4i",
  "key28": "2ibGM9ceTHFTB2bMnwUwd7Nwqv9WVy5YcbdRhqJsABKUAxsQ9sMnNE2KsVN8QWF4Sg7zBK2PKwL3v8ucEfHv1Xui",
  "key29": "2dd5AGMchLkPcuT8BoZUt9Bs9LP4sYjtbMoNakGRmUqP4LXRqkkYnCPix63VGja32MoR2HPHeHgNA2WHmQZzq4sZ",
  "key30": "5cnWqNE264BwUezztmNFNR62FnojMXn1VDuNGFGPN5h6XwQR4yyYywUhyfHjgGj1TDG882QdA1YQiT4ZaB4iyUx9",
  "key31": "zW9BGdtFBzrLyzdD7ZNzkgopdvwTpdaPUm3f6LRnhYveEi5BC6YR9rBKcYHqDaKdaRdYxiyodvMLmHYC7K7RwZB",
  "key32": "36z76Uh4WupstWgyVPoz8dfqyv1aKmhWLPC5Vk5Pnvq6iF6hkFe42avWV4UX9Vn6JWH7LF8oHyqXkEuYdKimjg3u"
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
