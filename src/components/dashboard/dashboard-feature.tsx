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
    "c87QrZGbL4Yu3ndrUUJs1sbcwHBtsMwb6Ym8QzYjVKSAjy4pUMMnzGmThz2jBH6j9ETS8ofRyjbgPduFHzBR6Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aRzaZdgkNSGc2gpwHpCmiZuMT9sQiefVjiZPr4tfcmE7M9v4QraNA11ZUVVukAEw15vumZBHvez3LJC9aoAbQGe",
  "key1": "3mc9YhtZCq56YS4MTYKetCRBUDFnt11YYfu9qehSK26b7DwaMWDd6XZ9cY4GpbDskiuuirXBEmxZCMRjemhk7Q7F",
  "key2": "3RuhqanhR4xFyPqDsL7Zz1d5YCZ3UT4NtT5cKAf1HV41brGYfjjKBGQ2X92hKSVYVgFeeGdqYrQzAJPt2VdY3FRX",
  "key3": "3etZjSf5KGjtMr9BwjqrHvQfCHqwRjGKYnovsg4WWRyYWjSEELSPvZGZtWzQEokgTQ9VaT96QRbJRZZ64xqBdJif",
  "key4": "4RBYX6UrqesjbupzGC2XUwbwnHRjdCE9ZUNLqVzwpFXn8F7zNg9BLSnt2tMH5n5pR6rZQDqq9B5Nq9tR9P917xz9",
  "key5": "2tofWqdxbEWd7kPtDq3PvpzGFKWkJ3QNRxb1ywZgdczyYm34e1uVqSyhsWM8tQrLUiFrr5veqKUddRRksPs77HDA",
  "key6": "5dFqpmFPnKUpwgWK98jJQUhZLJtRB9iCe16GNYrUKhKYg31BWKBNYbdgBiWXAYyvfNNvKMDHL4JeSZpBEXwf7GTN",
  "key7": "4pehH2GD6Vk3veefibEGSn9X59mawoq8nSrn5guhRzF7Lebw8C4ZWP2szxdzLARVTwWbB3PeHvFG1cyGqEns9Htv",
  "key8": "H8JFoW6Ywz2SqVVSSEMvGJKfQD9m2n1U6wdcCDNWs1rBpwTKwVHoGJnexgit3pTQZR8x26EZZkpxZr8WKShC9FD",
  "key9": "eAQZNAnRWNun94TooLKnvpAAC3otyN5Tae7g413NrLzJp9EaJFgDeBuefMBWxQGWW3tZGKD5E9V2KKdWGnC7mjd",
  "key10": "5LXMWGxYJk7BADiT7VPhzwTps82NF9DTskSbLSxR1HeBTyHQ1CYXHRudrZhNAibHTK1BB8ocAPUohbNTbcgJVozd",
  "key11": "4XHcEp6YPLaPrHEAF25eTQ39QZ4buaSMyJ36aqHFT3rPbcAUexQnfzkKQPQMBn5h5mNC9ebZfufvgXp8dke1qnNX",
  "key12": "2ftPpDRg3YXaf7DYFByHZPB8yUj7UxwcYgiCWa6zh68i3whUQmBXptWTsWMHFxJFica7h5aHnJgZ9KrGt6ib8jMM",
  "key13": "UBmM7ZMqmSPDSbrMpKfgnMLACkEVGkhY83cpX9kFXBFBBGJfJZK2syXhht18r25HMmGdirhNoFDBDHv9tBMh7s3",
  "key14": "ubjDWe2Q9WiFK9uan67BuXut1gKK2rok1XmSrRrLoX3giXu13E6zWLd1LcNsh59bFXCsBBSbJhoHcjuKrZqxsGk",
  "key15": "4G1nYVojXjHHZ7LHqdK6EZLojRMCQgaDXSmh5u1pPgLYudfF6QjQfi63kFfgw3tCxzkbfZu3kLcyVPQRoHxBXoGc",
  "key16": "4d9VwHPNKbAPYxcUhzW62PRqoyzfykh9eMhmxvM9NFdxJwyvkL29cjX2BH1ZvZnci2NmDSVGrooVCQxn5Utrihqh",
  "key17": "2fwvbYBx88qTexSreMgw1o7vKU8BJpj8AxgHL3rhrHj1VF8D3JwkRjUZ2ia71kQagw5ifHAdem3BHPHh8ji1Jarr",
  "key18": "5yaUk3VT2ab2ghRmhASRWMWB3wmeCbTjzZ3yx382r8aU1WtdknvJ2kydujVZvVyBFbmqkYCiVUGnbG7EjWPMGNs9",
  "key19": "898oZuk5ztVFxmyiD6NQBx4AWCWGTvNrhqAQt2zfssgYoXXPZV3cqwevtuFPj2LtCmyEADj1uofbLz1HaKksme4",
  "key20": "3cqGLUwrewNGKiFQqPiJtE6vJ2LCNPy78yLsoLUrk59R3zmGCpLw7e1og4WCV54WrNfErVU55YBDbRjtBWEsP9an",
  "key21": "oCxEa5z1wg7NUy7QK4w2TMPsqVQ1VGgmEmXyBB8cmx2psVQvMNY249VFvP5ni39kfC4yzNkoP35eUCXYNNG75hp",
  "key22": "54taryLSZPFAZErpB9dMnAdiNGLbXjRFemoXCQnAMvcbxx6QCZp1ikSuzu5cxsjDvhUgPUQbKLmunhHBpvkAuLeL",
  "key23": "5pMDUoERrSB413GWkLxsJS7zbCevhkaqykak1vffVKBwcs7i7bjPu5DWyaVbW2brMwcC1FPouzLEf96MGkF3ceME",
  "key24": "ZD2kM4ZLd6X1obEaDqzZn7YeJaJotXmbMDJKpffP4s3qMnViJ4uiH8rm9AaRLeSPWsapWBSRPbgvk6J2a8RwJ55",
  "key25": "4X1xGvuF5FHXqXK6PZNkvg6wnem5LaLAjj6r4quFion4DPF3Uhk6XGyvF3zgKBEPWXxGj4ruzVX5XpJrWbRs9NTL",
  "key26": "423XPuQQbfou1vxofJfm4FmwQWvEA3jbtcDgUQy9tFUV9reRVzBHSLmpGSxH6Nop7ex3WaEyWtPXXLTSsBW2x4r",
  "key27": "21jPYc6bowq4uPrp523h4qucRdj6aMe1xfXCcrmHJaZm7ZQog9sSPyB5jmCFaG72X4rSPpa1QY6SMzRShNjsBBuE",
  "key28": "3up6UNhgcQtrs79Vdfm2NRYa1ehXxnFK99i3tvYnuekS8n3CwuLYC73kYpKw88H8gkKUjKJRGZtvqdprhSruF5UH",
  "key29": "2o9J54w9UWwip4uVStWh57KMurJxM2ZA4rDhXUbtdtAdrdedANpbHtXaTc3FdjjuXrVSzMNro3PE5KUFDazUBp5E",
  "key30": "gssjxK6jmfoER3LSgJkbiXhXpXGa9V5k1YcTYQFvxmNc1rMgvvpeEs614roPsGRVtgQDseH6ej3RWWtMoZMi8Xs",
  "key31": "48jVL8ZK8yDa56CKzyi2juqdxZvekmkSUpksWdpNWYzFwEGHGfYFAezTS7FPn38SJgkho3AubTaKkseXR8U7kDeQ",
  "key32": "3kDMc17fkPLEX6mFTF3sPwCShuH6yCy9dXYUqWoBoZ9Cy4kMTc8cTFQSUs6VXitbhxfvmaZfuoKzVLa4DrFF8EzW",
  "key33": "AMGbQvAZkpXx2Bp7rk5xs4xHSBcetjzU87UJSQhzsBAqnFzRXCLFM2qPUXgXGw3tALE1MG8SABcYyN8nfKX6v6S",
  "key34": "3dPxoDnfc3JYZgzrcBunr6ZVjhWCHEgXeKQ1ybJgf6ibsnPKorshbhnwCEknxbN2yFVyP4bacASqJLu1yCCC22qY"
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
