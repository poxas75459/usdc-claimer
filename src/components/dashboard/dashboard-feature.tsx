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
    "2PT2DCSgsy3k61fgYzXcwA6bReUhAoi1iESrDxT2QvCpwyQqxXToX1ATCZNyB9iy6H4CXTezFnMBSRgxfoVaUnA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ukbX2U8JnQBaBTR4ReUn73P15mr7dbHAs3wfJLEzDS7UX8krvMQmdEFE8yKDVqetC1ag3zuTrYB94e1BXvTxYRN",
  "key1": "i4DLA3eNFgaRL2dAc7TcEMa1rYvJ4WYVhsjvxm6Gk5QzfZ8CtJg3L6KuNrzKsUz71p5nDkxmb1ijN44fCVJjTEE",
  "key2": "2Bh35k4L2sX1Vzy7UXKcS2vBo6CVwUe7T44dbSWPZSfqrv4GKrG58mMmz6Gdvd3Tm2m7uRKGujJBzsda7v5ZuLr3",
  "key3": "2RFMu5tqnEPAt33xK2shBqee5GYBmdmdq31yjGgoXf26gUxXmDxchiMwADhvD3Bgtk6jTS4DFp4F2WkbcwVwcSiF",
  "key4": "257FLKiaBLa1L2aKyrs5TxrxCFf7QacEvk7JSwUhNSsUuxuAiZyfhu9wEkSyQvi4UZHXjZAE2TNiqg9Mfq3aWLW4",
  "key5": "3i8nwHBK18ont723hmQieDyzk7q6M8nXP34iBpV738XVFG6tmaFPgef25uKngZityw92r6qijVFP7SdRos8ttTh1",
  "key6": "2uLmjW9racXKgK39Y3xDS7wQA4o3XCHfcQonnyVZA4rVp9aptw1HVwNBgMzUJUBi1pbfmXaguTgJzanfQj1hXFhz",
  "key7": "5iRuz1MhEHNVrY2rw5xQYLha9YPz5gvqdSRzSM14mn5mKym7zuFwtmLZGLgYJ5cHfMo6KNV8XWZYHpy5idGJJrHB",
  "key8": "mBxsES4MvwLoWYgfTU95imyHYysF6rk4QfiBHuwc1eNCT8SXkQtw4C8stgcbU6SUL5HM4UrSnSYZQf4wpmtGpyF",
  "key9": "5QFz2ZaLFS2MEz9jku1eWqeWks6D5QbeatsQ1hcNBvdBpGxDzELTGywms2YV3RDBrRXY4WpCwTz6vVyZubRhju2u",
  "key10": "3FNwginryEbRjbpb3B8recELcbKfnBcDU79ijJzkr4G8JFLR1177a1aBrwxqu8jYfTKpucEkEAXakR6oEXQVBgsP",
  "key11": "2c59zr6oQpvAEhD2oChraYTVYL289BEjTdVL1i3xnUGswTK7a3Pf9BVnswWH6acDqGZbq1XRsAEsQEKWXeLixFX3",
  "key12": "jhZK1DkD3zaHPmzpEnNjBeX9eUxsV1MBV4Q9xaF2BpNVaXeQxmvVjBouUgrjJgrhT1qc2PGrKtcJfAQcv1YYXJC",
  "key13": "5urjqBfUxbw3DgbSJLjNz1DEXNieUowvmJr38JumrURLTntsCgJjaiXX67yL1yGW2da2WiULVshdzVMJqrDsuHM8",
  "key14": "2YEm7Epo5JjvoXmGKbzbLXejLjSytp2AGYbWsPdiBfHHvHSDyJyjbwgEXHmgHi3mKLpY7iUywXxmGJViemSQp6Vd",
  "key15": "cCsLc8YLpkWSPUhN5YEDyHxx1hUN23oFdgzBvDeDepyeXETJu7zHs7F9tph6gq1QRtsh2qzHtBiMGhJSfRZfbi3",
  "key16": "vXF4mFyKVjk9WEW3B5xivPfHxGjbbZcq4muqnQRYqLCyKiE4WvU5zc2Uwg6u7WoyJU7qWf6PfYovJhT3VVmpfAj",
  "key17": "2DEfXxmuPZdUDcG36Ns1C6chgPaZvsUfi1vsgvCcD2yLgaRFdQ9Dm4wpGyWh2JQwuC3hwRFesGDQXyjUXw6KyDbB",
  "key18": "4VKKoKAt9RSb5z9uC7rqXL52XKNUEy8Knu5BYJUzBt7uSEXoGR1EZziaCT9Q2WwvkBBC5KeZG5Zp1HqUuHGKQ8Be",
  "key19": "2Ff1UQe1pfoNyyFEuy89LWwwXJKowdSsswYCMTzxfu67kayQqgZXQkg95otcgEG5dE9SuYLsLbNr8qU75jufsGVk",
  "key20": "5d4VStudYe1R3LNoXMqCGKZkC4YGJJsPnHY32Esch9Z33gqaD2JDHQP1DHiRZNjNt8TeTpKE1Cit2oeAnMAT7Bfp",
  "key21": "5o855wb9GdqQMazyByrQ157mUUkk2sYVv57RhViUf1erGe544nmmjBz5ZBhXjMxEvvjjuEdqsgUTN3q1y5cjmMRR",
  "key22": "6kAfQWkgiXv1tcExnkmdasnXLz7pdYWDg4cUMJ9cQ8z1JnLkLTFcp3tWbkCAUZkaBGoc4UpnFtB3vTyrWmhRRP1",
  "key23": "2UrhaWVcNpEgryYp2VEGMzhWZUoVnHHK7DwSBCnzJKUhdnsJUorr4Evz9gpRG6Qx9zUP2cg5aupVeYDv1dqVkNrr",
  "key24": "QhNzoJC7eLJm7tdik1XteaFVBGJrDh4Aisq6hi8H2ut1sLcL4u1sm6CtSCGA67FWLjRdgXLeMQt4zBhJdmcsu4g",
  "key25": "XYZfUVighg74Q99q4MbY5sp3uDxkigqJMmY93VRUWQ55Sna6xhZzJ1eRpcgPsiWb6F1AsYgTFAxWwZwVnmMFZcN",
  "key26": "4TyQE11fz9EVbM821DCQQhg4f1Hv6YZLgQS6jSi9rHSbVQQDRQPMAa7BjG9K9C6mGPJtVNxnCpTjP6nXeHMZCq4Z",
  "key27": "5VgTJ57QtoCxrNopSdRxe4MdqeK8W1Mb2Wpbzf2LX8immGSMRMnXyNeRo4qR4fd5FrxJjD3uAR4HAf7beRFSAzEZ",
  "key28": "qK5XmAFrECvA2PZe2FhUtbaKMVNzdqBKfwkmY9GLVMBWVVZiA57C1CeZTn9qKdHMFaHavdeniRFaHHWXyttmnaA",
  "key29": "uRdGbHfw6P7zDhLCCVXjP9gq9jzpk7D8GEMGubzesxrqQXArT7WxqsAFivZTQFh1sSXK3dDeJz1oykrBPUC3Kma",
  "key30": "NJghPaKMyFriFkxW56EwynECuz9EvrAcUZJ93cYF3VTpjgiB2iqgyQ8JRY196yLy7WoGxi7ERYLxpPcCFwDRXoN",
  "key31": "2rcWbYnPVXBtJK5jPuRcKDmd4vyi1HuZarbnx9DLkqSZYbeSpj7rg7tFbqYkS7YpvkMsXhWCLfDHkXC9ME5w1fLB",
  "key32": "2vg9bsnZmkLCa8kSPGcJJf7bBMXUc1ZHs4fbd2BYbGGeLBNhbMvXAzTFbcQreDPaXPFm7jLvfnqbHVbttwK4eNqp",
  "key33": "4F9cyw2duejcr4rG6giC4Gqr15YTNsLrKrKiYXLog3EnhMnz9gDWrokUm3XXt3QzXmDdBmaevrpEhe4dUFVX32ha",
  "key34": "4rrBtWtSRhue6KzEvZ6ZyrG9X7v334WZA87VzaBuHpmVBJ7SdjytBfCtvDskXJaJ6RpQmU3D1vofoLaAJCJu9Tmz",
  "key35": "EdUGmabJUDWZ9z51zr4FT5a79MiXSrMYDwaNzxTipWS2gzsNHT71tfZN7V2iRBAnVX7TrHntMjzrFN1W4y24Nuq",
  "key36": "37mGcoeCYMdu6eRtTuMPapQxrNd4jV1JEvXoXKkqdrhuQdt51zG3AGoW6MW4zzCiGFTfWXQBL4AWXVs2UZw8R7Lo",
  "key37": "3Z5ztDLkgzHZdf6bjC2CPJKyAXBx7wxPUNnbJ1wSMiwkgJ1xeVZRF9Sg2E5t11257k9vaPDrU2GxviRP3jFChVMA",
  "key38": "ViuYKjg5nFWrvNgNbJKoENLYFEb6w8Kv38cGDwu4JRyxqpeVBE7WTTLhHyQ44RH6dehfrfmxwTBKnZMswP2uihc",
  "key39": "4PzawJ4EckjygCwy5wDR27LqvpFWsydYDWfRqvHQyDbq6F9LH1bJk1jVwuYDWS7QBN7QtYeMNfYKbjFhDSXvo7f3",
  "key40": "33qpr6KptcVxVejSDo2QnFGNVqR7uGn6DmiWxEjbHZ7u3s8ws6mQfC79oJEYCNMxVUwUQhfdp4Dxx3F8ScJc2K5e",
  "key41": "5cnPjgZ2BqFRxAcrtH2ei1zLxG5ifwXgidT7JiDQc3ZKnJ4Tq8GbV8ji5hooHLaSAbaNDKyHAAToxrz5uhfi9z29",
  "key42": "5aYnEopGH2ticxHbcVNBU6ozK4MWoahwQ6TVPtPmXyKkyJfsYXKMX6xTKdvYQf4TXsAHKz1x58Jh5DHnVT9tidH1",
  "key43": "65YbAH1ptWpKskT4CWr9JerUK8dfaTJvHgGFcpjj4PAFici25EQkRNXEHacKYUgosvmJyWMRVE5fN7SHzZNCSEXk",
  "key44": "5bCGQkpje9wNrZBkjDVL4FLPXNvW1zkGpC1dT6eyUzznfK9hWefBbgDqBjrKTcAaRYcbckVVyfLDrsfQTxTbQEWK",
  "key45": "7cshMLPYW9pDxJwsRWnzSXexaDgMN1oGoP3izxDhJcLicv1MwrV8LEyimTZNQLzrE6T1RDqi14X5SPr3LSYShsL"
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
