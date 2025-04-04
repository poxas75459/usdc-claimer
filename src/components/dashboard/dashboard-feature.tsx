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
    "2yVq5HnAVBiSsDKpdCaabmR524RUGvAC1C7gKG4MtEuzgzzWXJTdd6yMGvmaDVExLHAaF6x2kVkhwPkzwhhRQvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tRzTc5sAp8mQHMiXwzvmrxsS3TjftFGh2Bk16k2viRCEQojxbbErV4AizrQmpc2XBpzaRok7tW7sgmpso41sx6",
  "key1": "4Ru9oPrzgs6DiBuXp6AKjCFnYBNsM1GiusDwzeG1XmGFrFWht4uSC9KCA48W2wqPzRAYts9AQJoeUzy4qPDXU8A4",
  "key2": "3YjicBx5YrQCJgXmHBzeJUSZqw1nWiX5f3SXVcjnGvwgcNwSB3c3i6P1hHNUCjvH9qScgqvQs7Y7txvrZDa81v8E",
  "key3": "2dwpi9wE2bXkdyPeTR4vuXy1srLx2GXNMkYL4BVmKptHj6MatJU178o7Pn1XE5sCHMeTE1tKPzvRtjbaZvJVwngf",
  "key4": "5Tze5ojzp1b9XKmNKqdJL1D2kFSWe4NRG7M5X57u9ZPpkrpePRCACRYDxEWQ8GyppKCBuqzxuitp5cY8SSJQQ3ej",
  "key5": "3N11AdgTwfHMeCbUpreifgkN1mW1wAViJfYbiASksPVPbdHkiDRbGPJnPmiaJy62jjHMrZLtDyBr2H6DLGhJZpDb",
  "key6": "3a6eXtcSTn3tFQna474VzB2VBHBm8SucCzp3z2w3TKg6qY62ViH1eQLNvMfK1ZitjQE1S9MN6UtVNaNjCvKAkqCh",
  "key7": "4Vz1kL8aDzV88Wu2gDtTrmsihwoCN2PsMP7pLePXiMvW61wvmwB5VEQfn3iVhgpscUAiffyuT7A3u2hPnEd97gkf",
  "key8": "2Rs8fGxC3cEwEaF2iKFhdDxtdK78CeX9xfDvtqFtzZgWFsyS9Y2tT9fs4fhmkacccfK8az7aLDdydmK7mCEakSNj",
  "key9": "61y3LytJTxzT1rWS7wpot7y9nYDSATbHmvH84qq5QqF3GyQKWroxAo5q1c3YCDi9UPEmCeBEXr9oPyvVtwG9hjYY",
  "key10": "gS791X8xnsfLDQo6SzdnjTb2suNS3bUBoaAx6RxcppF89H2ssPNB3NkaPuceNJAtva1wesbSgrzhYNAyBrHEkHw",
  "key11": "3Lct5DpwfgDBGPDVxwxQhkqoTBnvxh8nVGoedq4bAbBdA3GpvfFP4eXQtU9wuhqLWxwEereJiTFqdrLsFUfwKr8j",
  "key12": "62uFHohibFbeMaG9ibkA16pXHqfv72tyisDsUzandeXspiuEtQE5G82XESpxJzw5agP2HKJ3Kk2dHcjGnYkw1pqM",
  "key13": "5W1kPcWny7VZN5CCkfdHNGP6zhd5CrnDYhYoyTDyG683zkkEBQVdWUURH46dzzCw2bTwkW3mbNsw5eTWAq2fkKjW",
  "key14": "986vTbACRATeptj91yqSv2g7eePUo8yrQKjrPfqfUcCb92UUovcEMBcyCidaRyzFr1tD5FCxt3yjiDjryQs8S2N",
  "key15": "5vdv327nGFp4pUdc69YU5g3Fb9aJvtb1XhVuYNigT52Rh4xCvtJ1CZnkVLBreyYZ15Qgzhhp6wTZdSn8qxv8R8ra",
  "key16": "3o3Xw6M6UvGWS5kNUBFiZsx6btaGqkusve2WzV9d38a3AgeZi4YP2qUUcaPPoaCZgzcyppZGPModZLihtEzkmHNp",
  "key17": "5y6AR5Kcni3ZzaGtV1ht9XafmiJj7BHkpcnSmiwW89yR4miRpBDjAZprLhX2rJhoSnv7zbe2FTgekqgLy5oqoqqX",
  "key18": "4vufYBAc8GW4sm5jCmQBVKaPggqAXQsgG7bor56mjSTuMYW4cztLea4GThbJc9rBstcLvxWBWJpqVxwsBuC4HLuf",
  "key19": "zZ4u2jHHQ1CyCF9SC1Cg26o8cFsLti9hAertukg2bM9UvXrQ1jLG26h2NH6njoPHF1BBtGSUb5XaE2niKosg4ZW",
  "key20": "5sWoe2mNK2K8CkGtXTH6dwCHqUsgue68HHWWah1yJrTTQoyGFyziaCk7QDNYjWpRTQ4r2Vi4bS58BKqFoUc6shaa",
  "key21": "ddNM8CVpVnQfVcQp4Fqe9Pr4UPom81RANGm21SzgC64L85eBp6jCMZ2nrfvjbhKMWJM53M2dnsm28ep5z2iHe6k",
  "key22": "iBPYpEa9JZDrJipAjLX2A4f4WR7FXUcwWKpXohZgmUgze3M9oByNGFYkyT4CyNYVpKx99gU1F3thBYZGPMYvgaV",
  "key23": "fxUdC4HdFRDVFbxK5AbY69zS9rHZNxW6Z5aaC3CAQKzkjDS7Yi2GCXk6Up1vkWj19D4kWrCEFmZtc61Uvvqp9J1",
  "key24": "2HvyKu9LxZ6sEED2VQwqc41wYqJ4MKba9TRiAzAKdPTeF3BWuzusfRnEzjTQfDaf6UzF2JiEbFikVErdAwX6rSY2",
  "key25": "3qRBAwaJoucWSj5tb3c4L18z4e2n3PARm6pMNudyvg5LtJHYYWfkhqAKSAPt5ZUprYbeWrCr7VMM93ijDTBHsbah",
  "key26": "367HMYYthjRBNGcjEC3UE3Mo1PLxGTNhmkRaz5C7cPcK6qVVQzZLdbCqBnEP8Fm7ViaDFLjJExnKwh1x7PAhiHBc",
  "key27": "2JfWpN4WF4tFUKaTLLnwLuQdyAnJKRpSgqiycHixqjeo6ZuP3R1fReS7HoZjrT6f7APz5Db2qamkzyKZaLvSTLYM",
  "key28": "3eX6hUHefsejTAb969VzETe5ALkhT7ANovfnrcwsxCP97v9jkF5i7b51oP6TCTE68PDz3cF3zMindcBG1b2GAtgA",
  "key29": "3VbocsYdXnxQuF5Fut7cY5ZyG2ZtugLNyLNAMFmYjbXGmfKX6RgZ2xdfNdUvNFWkDiuwSd7KKPKY1MUqb2EX8Ebd",
  "key30": "2exTnrhN1heM9DbM9vfhpjKjSvtvrN2G5Y1JRKDy3VRLMpBcVvCTk86BrZBiuKWy15Z1ZcwsZ26TdDaxPxZrYcJ8",
  "key31": "3as54d3GvSrVFxcHCiLEAVdcyhQ3tSunjdWsLxiUUT4icaarP4zrDcn5yj6tsegfXfxGaN54GbRzqaw7jAqLSovd",
  "key32": "3ZrrAdxo9dtKHX6VMZV1F9QY93i1E9QviXQYw2nvpM4vbBmMdbXWdsrTP2KLYk5XEwsJSLy2PL9qu67BU9eiQrMv",
  "key33": "3BNLVh124RqGCwC5RLbhnAQ1VadN19MfDTKp4oH2zum67bVtp2RE3JzFVtwxbzR9bZKC4awNudJRVTb3YYJXVMsi",
  "key34": "2jwNykfeiGw4BJNKMBBhHKUaF8XjcPtmuQ91DxYBKuRE6jTMi9wLzYPpYifcDaCDqrNMNAkfbrgDQ2LF56fwBWCQ",
  "key35": "6v5U3occP6ju9PQmKPWQMtALLuLZZUcuYmsShNimB2GjwmgLCvbGHmKCoGCAA8JKa6tcodv9LVLmwiYDuRCeN22",
  "key36": "5qYZbHz8u272T5V93azMLVzyUhkQ4TyLTHseyb4x9bj5MtwyAp8xgr4m33qytkHzz3oMMUPP1NZmZniT9y2eDvjd",
  "key37": "4e8BMDB17mPYhFNZcNQvarYoj3kkd8WYmLWH4KbiC5pwqrEbkXai2VrrWG9Q1CZxb8fmAAJVPjw1uoXKKHBgQSz3",
  "key38": "5SXgBGEuoR5bMd7ZMdyVMYGBKY3g72Tv7sY1bWiWrkDJX4aX6Vr4Qwix58AQ4aW89G52twMEghFvzKhhf54U8M81",
  "key39": "3XMivTgSez4n6StybGat28dynTF34mhxdXRG7qa31Ft53pWETbL4JoL4RhBo2wk6wSsLZUNK4xvoiCUfQDuAG8ak"
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
