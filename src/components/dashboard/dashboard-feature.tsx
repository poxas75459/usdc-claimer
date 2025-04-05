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
    "3CCFRKYiPgayDBed6kd6t85VxBNjpXfS5QMgtMbxaTjy2NTZ7BPDDQoaLt1bxZfG26TLYFbMW1Fm5gjKEN8rk24e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ZsrZFVzzakd7jQNSEXsh9rN3HGVc5z6NZ5Z55eERaD8AyDN4oMwpKm71dQf1D82ap6RvKy92M8WFEnP64vPtm1",
  "key1": "5v2hmzuySEu8yerZpjPSo6zmEEMZ4tY93pkbPo4vnz9VfRZqxf3MXQpf3pxys696ULmPiVtUNyDzFpeHLXw9g5ra",
  "key2": "2JiMmUcNtrJiEmv26yJnr4wh81y6o4vuStKHUkwUdACZEERLYPMxN6ejPKVcczbWDyRS5jbZiAZQNfapaUPDhmAg",
  "key3": "2mEU3nTB4c4VigjcSd61ifp4zHiZQ9a8v5b1Ur9Exk7eyGNtNR8UepkgCsFgmdvfQKr3jJLJ5KMpW8cuiACLwyuL",
  "key4": "3jczXNPsVFU6HfkqwwsQ4tHUnyL2VoV7owKKRyNZweHzrTwo6ZatnnAqmwTWHshqDdZcsKpArABwJPF2jPnCP6K9",
  "key5": "53sJaMPURKoyddAXW5wYJNsbhCB1d9g15y6y14dMRXJEqdWgKxbCTA3uCnWkAMVVWPf2EUbMo2UmqdQKysgEtUMQ",
  "key6": "u4CmmyvpJMQRt1WiPE1Y7AYrexMhW1MQDoLJH64reXgEt4bC2Xmi9pjBQrsEyRTZFTwe6bXVfktoe6i96ERWbku",
  "key7": "54S9MMhtcveS4J9P1QSxubqiF1Dmi3hhVQg671xrSBm88wBkHrk3J5THovDEc3xo7UKhiuAyAxJ5pa8WVLCmmHhn",
  "key8": "pn3KTU8yGSvbse2pSdTasrs2BkKE8pHx6u4drmx3ruyH2PewaZzYxtZKPYHND8y7mFHGduYTdpesDrzN1wsufaU",
  "key9": "2FNLiE6xpDYZUghALFHG127ZpxWxNof69R9jzeLuCswWTg8SzH1ts65bYRAT9L6mvnmhAfgThg38hmy33XC28GCV",
  "key10": "3CxdBbHNdEma3RQKg8wTWwMnratvmYScf6dgDs2EXzKvq3zbtxNDyDgVJyUuaDn8AS82xz5wkBWyJk2k5neGNc9E",
  "key11": "2vRFxZGPVadjxxXbyFsT2M8ARqChMhGxjLtJKBiSKxhNuHi1PgXGCKKBmkYvGTnexRXtc5X8rWD8shTC6ig2jVkf",
  "key12": "5QbVpNpMRaSPgmyrRShhDM1ZBeiaivrcXrFydVAoW7gzvHgKUxt9hwJGdRvEYTJ8xA5Wy5KxCz8DaUAhba2WHygM",
  "key13": "3iZjbrMecyjauFdtbTVHRj1pvkmwVzs1fYhoLZHsDRGP4eg4SSdSqxqfJAnHptqngTqHRpeVQwWYojaXgvH7aMKz",
  "key14": "5BuhvCo2BsskZbJk1TdxCCP35fLf61MqKWrsSVCeFfmpi3E7Zh7SyZ43gmkkHwKho4VZT9Yb1mufsDQLqpceaDJH",
  "key15": "3p8uyMjX2EteJcHf5dnGqAXkSShWveSB4vkknQkgqUSDs5D8DJzkA7gBQZo1WNUan16DcwvQjmPed7ZiYL49hZDY",
  "key16": "2u93DXR87q4syj867mvNxCt3PNsm2FmNCv7aSdroaG7v2BVDc9vPNgU3C9Aw6uRF3gF441M665A47WBq9qxXab57",
  "key17": "FaubMpm8xbwkJuk5KauCy9NnkzkKwopa6KAJPdkSFPekvyLUYzjVGpM3M4rNKJsyvbLpWMgRmE7P9fVrV7M4AZf",
  "key18": "3PHvP9vFT84Abedt6PQ8PV64adPrEW1xezw3KyCPVCnTqvqRZsS4UczmJBPUQSKZuYWepMXDzqukzm9zijPr6a5g",
  "key19": "4zwgcJ8GSfQQzjJhSgk4fmTr7nVbSKBdRrPVSFVgzTixt6iWRN6JwR5V98z4wxevr1xRXDm4QKnogcTjEPjeCoLX",
  "key20": "5dbHByXjbBRaepVKcQwwMC2dY29pxEWMPDUxQbryCiYDWSoHXsdo2Cj6W2PMQU35P8H3ehdCd6uSNDZYYFtS87AQ",
  "key21": "uSpRM57pA4SX7x7XCFV9aG6hyTvft23rqx2meyGikdRRJXr3JeYqBv8vzAkH7U8mP7PaXFhGB3NdhqgP47RTRF2",
  "key22": "2JoRa7XwUkFk17NtbUmZtXJFz3oumdhojF6U2rCDBsBS4EG5PUJsoV6NkXHgCVyhd4AGRQUQvbWvrVWMjU2iSn79",
  "key23": "2fmGxqZZS5UCQCESzaJLzhU5kSjrpgtbE22V4ZeXiyUkzX1F4K68Yb4hkJp2LJRfBN9EwNCiyD6H5kgWqsgacWMw",
  "key24": "25agMQEwPHCHuBYFho7BBCa2LTWzrMB1xdEQxN5iD8iQCQbC2CgQb9PWwoyyRxfqMxX4cP2D45BzhFdLQB8cTNPi",
  "key25": "3V2iQpcM2EyB2FDb4vxbXtu5TNxUwarWe8N2P7h16BkZYXJany9tvfDpaSqgLZx9YhgGxBS4vCdPj1aGFQKdkdSw",
  "key26": "3YJ8eBR6L6M37rXE3ssYJLuD9SRydc7WfwWB81z8zCcpithcQBUAbPb6gPBUkW1A8MDGFxwYhLVCiE9AskLQnfDU",
  "key27": "5c27aDfiwVZtjr6Ei761Mu1begHXdFpWXCM8WzortikQnmsVPsh8xFy9UxeZCJKVTW6d6Y93vvX9rqhkwk31w2Yb",
  "key28": "p9pb7mxGDJbqEdgzoaTL4Znph6jAc8GjpXnzoC5S9bEDGn5f97tv8LYdcLtJua85bq4xbMmqRXGAd8uTPGKGCX6",
  "key29": "3kyyXMa7PRnskJoAcvXETZmTCLzBRy3KDJ24qE8GzNh2C22hvGEpud7fRM5FsGGyQ6bK65LPWKGS3LeDMH3dcEnt",
  "key30": "59PCWqkpdpUoAzSwxV8NA9No7CMkFyAJFGaS7byDcmW1rU64WtAeqBdgpYeMnWCY9iUFQXekseCgY7TaHVCXCGCo",
  "key31": "3xFhET5mMGYsxfby86y5RBhr4cMwry3sFdHLnuwWtjq7ebDR2w2o1PduRDMLF9mrRHTHGZqm6n8AgRJGxkGitvmy",
  "key32": "3PqHUsyZm8MUCauANYc2UNZfJiset1baauJbWqwts1oWG5o5Xq1hqpAV9SbhBAZJVM6qU93jsfbcmfYxtwNoKjXb",
  "key33": "3rBpvSLmdJXGoTxsRjSpU425FzTbLjLjZae3FC2zoGPie289fGde7C8h8qHKaRqBQhFhtGdYQFDRHK78A2MdEbsN",
  "key34": "5Di3GeJZKMhjpsNCYfppcFQmctSLahJjjVLmJYJJfD24NWwHid5sueWYPjy2vBJwTktnsCtLo3ihFPTMBLGFnEfC",
  "key35": "3pKFUdhgfWRhR2EtkYJGhHeMQuYemv1MA5XH8U3AyS9ki623d69vhtJgq9Sar9pF7SKmuTzNEhGKh7KE7DPgZmbf"
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
