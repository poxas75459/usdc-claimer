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
    "2cZCVHhBc72Q35wv46JcLr1rZkex1efqN5dVjVgS5Az6PSmcKcsTrKpssSbkwjmm9T4nHhL73LZ432tLaLGrn86B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpBn1xpQFfzLTmt6yLHCBCtwbzsiqVLd2xCeGTt7ne9ULBb28FQ6NioZRbCeHiRM4KDg3FhpWbLPAMaUAg9FJUm",
  "key1": "47dUxaPvLJV7kEUVzSAhsvmC2PPMXDiLL3niXW5ghNQPD1sMVMB6suZsTuWWniNaS9Hu8urFeCkt9EqHGQTGN7WX",
  "key2": "BtLmUJxM2eHbauh8XgrwSVuoWxo31cw93GNZG6usGPkZEKeAmBXkNBNwFBTZpJsvbS8unJaSQJxf6LZaK7YYiiQ",
  "key3": "4dSwNbnjbVsSoaCwy2CnDjcFRxN7Qc5iyeysAwS9ne1z5RxcjtMJUDUZVceVNWt7B5HNcfYNNyrae3iYQTjNR9Gj",
  "key4": "2dECLCtJ3MTpgGtRXHeo8e5MYU7mZtwY3VC1QyakDWKAABYtv49kJiPAhSVFq6mFxLNGPtnimvXY8wbK8vbU62VD",
  "key5": "315sNQCui5MmDKpJERnYDk5W7sSXLj4YpDjyLZ52JNCBJv62S5j2VfhnDn33QjtCcqaV8fQx5ou3AA1VpgbPaQhd",
  "key6": "YvBe46Jiw9CzMnuWxke52rdsgyK2MGF8ED4dHJyj3y7duEjKYFkwJi5ZcT51KCFnVUa4cWLt8cMpUFZS6Z6oN9f",
  "key7": "48YQF4iNQKgMGrq5KdipcjimoCZ8XjHm48V3GVPjCnfZ5htNRp2kshAF2dRK5ydNyigKJ1pVb84ePYWcCPG2XDo",
  "key8": "UK6njqZjwJfTor8B18crsa5mY3ZWXSkxjdgHQqwU8i8z6i1JfvtSDriEhLAwYdPZienHQ8rtmNiDSJ68qQgcGSJ",
  "key9": "2V8m4JJABkYCF6wfVom8Lth8YHPNVQPp6uB6iUkYbQvPnAcKwM21guJmh2yuB4G99QYdHGyCemwvfRfgK4eRxwCW",
  "key10": "zH4TyRQCdxM551TpA7zPtgPfyRC9edPrrPZeJDi1GBaQBr8XwCu74PYba1jQtt43wy55aVTe5hsuQyw9XsaCjVE",
  "key11": "L9z13MkwJd3nSUUJ7rXw2kJVYAaZ79pAm2ubfSZ28kxTExhwPXJhhByGX6g62kSEgWTCg4ADF9P8gejpSVR71Aa",
  "key12": "2Xxb945ehX5yVvKXTDXEa7F7vB517okPQnohEYMyXVcc1obGfvVZDXajWXj55uf7ghJh77gPX2xHWkQq88gA8RBn",
  "key13": "62q2bof9yJcATEinDTZMzaGteqMgpateCE6LMwtjTE1gM8h5qjK9SyBL2Z1JrAFgKVFSpVhN4m8wYKin7apfheBt",
  "key14": "38pw1Zhn1pF1vTH4x6fGGDPXQvhMaz12f9Y6UopvYwr1K2Cbzstg68p7aktKmKR8QPTk1hveTJksAA7PfFJ2yLd2",
  "key15": "5jKTqEQapWFfVv7miMhmkffaPuibZ3fQ3GGVv5NRa4HvA3uDsuoLN5H33BdAPmjq3FwYwrjmVMMNnTNpgzv4Fni9",
  "key16": "5LntQsnux1QmBtMWG138X72rYRXnJaenMc4ABewyWr9mR3s1d2JAGfQqcAJTQWAt16VBoitfv4rF1QcMAho7pJSX",
  "key17": "2ypV8TBLiYnWasCdJmNgJT6tBj6qfnRfL1qNRoBxWXdF8DW6s6hesdyKfyyHkGKdesh82TE1Fnk6spf9wXUbRw14",
  "key18": "2RSViQcuDso3U8tYCNUwcqujyefwy96MtkKUXQooFcDR83B8uBCkBQfNbDkcSW5huVh5wiH6uXxwGTZm7mpvaD66",
  "key19": "44t91YJZgkrWR6dL82zsoNDV7DTWo4Lx7Whs5tmVvh27ZZ8u3oGqo4rkmrciSv2tHBB6Pn9a78gVf28npXZXHvyT",
  "key20": "bkfDmQJHgASfTWdvXoezaibP7FdPJJRNjzXXLQQZkqZEbo6pm6x1UsyRRAvoKKzdDbbh2uz2gPZRtopnKtFx5mY",
  "key21": "2MxrJ3CyMznDtjVAZ3JpefRWzpDTeq5wXf8eugtbXWNQrFsDwgVeosD3JWkSa26mQPFD3j8ECMU3Yik4eXViZZ5J",
  "key22": "5TGrBVcJhyBM2KD6VWbz4zKLuywE3xjRFfJA7AjPG6hfBWhndHe5PSgT47LhiRuV9234zyshSc2oD6CYzB2pt53M",
  "key23": "5iPZAEYQe4wpozzXQh7sQ5biWYRE5QUdsFcWoLx9Rvw13f7QZvAPXYgM33kUNmNR4tSqdC8savXa3drktRBqdiiw",
  "key24": "3KYuN4eR1fHGHUV2DtmxPZNCUn65KqgNHDPkN2pWZdu5FVnxy6WcZA9EMRb6Kczv3naq4QmN7sFQMDtTawexJrZk",
  "key25": "33Z9u2o9mr5wW4okoKVc8PkSzUyKd1BM7F2mGmbe4CcySQFHGVvNYMRZFM8aTvwfojuH3PYUUtXGz7eZ2Lv5ArAK",
  "key26": "4mB5ooCAUfq3yUsj386mxuDV1dE9nuRyuRzWzpx8D33KMz8aeNNuwaXKFZ8m61zohW33w6scfa8iDzyP2NgiWE8s",
  "key27": "3nbazXbemRQNxEbn2UFcxTTeDeDagHegd5eH2maAqxes2mZxscj6D76CFNEX4JqReEG331d7AJxX6KB67ECvR6LW",
  "key28": "4dZGJeuJwFHMHXJqvk8FrzYAyQvBMxwhTqwwEjTu1QxkZ6hfU92KLn3XkrsyEQ2vACBCAWnNutfMZFQ8gHXT98Zy"
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
