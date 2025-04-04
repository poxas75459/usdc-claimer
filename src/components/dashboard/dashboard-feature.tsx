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
    "AzAFtoDtwx5xCaCP6Gc83qadq4NsL5UjCpeXNjpNDCUJx93RNndxs15gNxU6inz4eCgVqBF2H2TiRkfyyEEQVer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hi9KHDPCRhEXFqBPeZRWA8HVuQv7CDE3CmEriuFA4XKf7LourK82ABbDX54LEjCDrqX4bERESUVkTjNR4JGNyw1",
  "key1": "27qbYegkbBu8QCqTh53ySSeA3MwVHu4AkxQeTwRjAxZQi1cFrCRNKpPVZX2Qm13sWthL5cfDJCgHkLajik4xGYTB",
  "key2": "3LsMTRaU9vVf8PHKMxYYBrTVeMZ6HdKawvqn7dT9GEV22Fp9ErMuCtRbbLY5C3iGwno6ndJF5wT3cJqt1omK2kEJ",
  "key3": "2t2b3SxsGycH1FQGcy5ei91zb5Jiue3ijwwco4GdAK1aB7sGUP2qrwYfxzfKL9Z3ifFPqXDCbP22qAd4aiZ844Ea",
  "key4": "5oZMupHoQVCaJZQ74Z8YNZhgf9ztBnCv4z598CpK1AcP2uEPYVMxjeVk7T1KmKjCBaT5WTHfDaytuJLS53ADM9p3",
  "key5": "3EgLCvPoAyUAo9snWZ45zfPRf27VK6LcM32ZnRR4172PujV74iScfCEkChuvA6gbqtLnfWBGBNh4WYcxuthwrrxJ",
  "key6": "rdKKkYisuKwGPKsozRWz1srGpUSu2tkQTZnUMvezSLsdJ4QiFziqXE9ErPFUYw2NPi9VdzEf4Pu8jQ4mgjBMksY",
  "key7": "3WbjuZ7PrFSbwQ1NxuCw7d7bEBXZmSSNd37YrmWfZzig2ZgQBSvXr9AL77BsuiakBZZW5UqGytRuoWLWpgkybrNd",
  "key8": "2Rb6rhtFKupKKV24JgnpEZgj3etq47TScggHFUAuu7CbNHM2Vmo5CuapEw9gNo2NofhNLrCpYJomhfxYTeddSfbw",
  "key9": "NU2gT3z6DmHa9mUfnEhy1EKXMRVXzHJmuPWUQZmpDDNAPgmdKv2suxvEy9qs17rZMi3js6xoTS7upygj4coC7Bg",
  "key10": "x3DDaKiVbgKewHsoNTjuXitXA1xwnLNmESrcH9DkTvkMHpY9ZkmV2T4LUsTiriDdg6aqyJ1pjQUx6XjEf4DVP3t",
  "key11": "5kFZFrE3N5bizrNeYoJP2xA6h7oonppMWTJu2Yx7qpJw2DqogdRXjefeCFojhAvmRUidCPhHMGpWAWNxgBiK1uUA",
  "key12": "45a2UFeawAoEs57SEg5pnsXE1hHWoTSzfHNCpWr8Y8YxrqZt7vBK6Ycsad2tZjgDQQdsjwDToEs2qCBep3kTmGKr",
  "key13": "2A7Cp3jUPZNLXfY5wBpjmm2oJGYMamiS5RDhzTtPzwgR4WniMe4wccVAMPwxY712c2JRiFc7NabrfZ8TYUJkyYSz",
  "key14": "4oFZAegFmYnfXDCAjrxJ1zbofq2gS5bVwNk9gZXLeMPe47uoFTeZXj1zPiy2TpxcXKsLpbqtQr5Kkj6f8xGiMtyK",
  "key15": "5Jv3fsqNeqsMKJdYxAQ246RHuUXh2zWHWYXum3jwwfRM2gD2Dxf7RmE8qX7qDGhhNoyt7wr5HPRLgcFLTHyGVV2V",
  "key16": "3BX5PxPBkCV38PNuiPiAKKKemM1ZwGButNB4jfkuUw6DmpACNeW4jyitaVhBcuT6kv5b5XUzo1ZJuKtEBybMB1xM",
  "key17": "2eUQaGPJrUBbYFwLf6sGHK6aPnUowYWsmYAUGSCQ1JwwN2PCeQ82RbF1aFd8ZMfZ4V5aiBrWzuFcZUTXGNN6N8as",
  "key18": "2EzPJjAiz8SuUCsHySXiZqkb4Etn3DvPsaZXynPs4UbHCRHdJPZPzEd3LP6yegV6JSKhEwgrH9orjFBMsY9EMjLj",
  "key19": "3PWs1UQ8u3G2cbAJ1yvpe61Je1hTnyAzqwz1HTRq9jT7NAeXaJGntDhYpN3VQ5DctobxLy9X3WrJV52NZYiyyxgX",
  "key20": "PHZjg2vxHBcmYr3My4mJVKzpPAmd4RKB1U6Do8ZQrwmS7E6VTxbjKTeDvN7jVHp9VYFYZsDXD13XHuMzcTksmXT",
  "key21": "52LcTpBTK74HUQ1KvUgoFSdNVQCYVqhe6CK6pzgSV8uRdjgVyMQhFL9ydHTDA7ZddUuWewDcycGGCwGRMSL6maHf",
  "key22": "3yYqZdRAzpi4Hd2r9zQYTv3N34VjtjHNyKjswaK5pC3uYxpb8FwuNC4PkBQevtwcrmCajLYtWhpfi5V1FVmmKsPt",
  "key23": "2yiVNzmoyfyV272JZf4gxj9UahJidupFaVRbNJd2Wsi9vMLRiQbrHdFUwaQdoyZYVzJKxgWCV78K1UetogAnfpdM",
  "key24": "5SjKZ6FsDZwZSuf3pAbgUz9tv7xFkQRFTVEbJw9xNXZMG3V4CkZcZZtWGzJYnTd6UT5dgUWtSSmiPFxTEZTUj17L",
  "key25": "2PeyGZUDXRf31jKUJqt3EoHV6tNVNcxyqzKL8NPB5AExP6xRTqu47nfEjr64m9GPHkPDGz8AqR6WgQebdoBshnUq",
  "key26": "3uppiTEkHPsnGcy8CSQRgW8erZ37PXaXme1xyDwggb5Xy8trKMn2xGXfeZU3gVpngQvRAoG6bdmem6ZELmLFA6Zt",
  "key27": "4GJ9CQN8zY4VnCbYLZtxnLGWW76m5jsy1QmxyejGMF2HGo5bs6xWiLcSgYADc4PzSFUZ5akBAWjNywuvqnvHMuTq",
  "key28": "46gtjsMPCVZ7YALi6JB7Nj5Z8DmfLctPDsv5CBH4svYcqTXuou7rGbZ5ZXwDfHYZGZAwmk6q5PhtGfYrzjrP8awn",
  "key29": "4DKRgkQdy4tgGyuFmgEcKrURuTVf94bdi9n5H42ujmgz4wasUmgT85E64mcxBe5H8ndG7XmtHKfPZUDGNh5kAgGE",
  "key30": "2xHoDJfVYiJWcRnUcM3oiAhveMjBSeZt5MrTBTxHFE1SGfJuPd7CYUK5QmrghdZedYGJB5Ja2GVqokBddPyRxw8X",
  "key31": "2iSTEZ6KyPoaaZjJWoa28m666mU8JP4djFPgukkEYb5afknoQuonJAsnyEzhG5ixKikK4BLJKyKM2Nu746bQEEZS",
  "key32": "3n3wt4jHd5JW2f8eKqR2nrdAHSr8pFP43NKZJ53e2Bqq3xhsDkQwBt1aLthVBPbtH5EovXAB7kUKx32vxwyX17M7",
  "key33": "3MbGuH794cwwPjz763PYLoX2bLjKNdKBCrfporYhETrt6oMYgppg4jhY2BCyCvKzyW8Sizir56y1Sa9R9hbKxEy4",
  "key34": "4zwy5dwR6dqPA7ncikPyE5PkxQTCLxdJpFXooe4qnAWMvFr9Sq5Co6NBL652trTFWkneyY6ms8wCysqDtroXbwyV",
  "key35": "U3s9bHnFrKNFMLfoukqoaVx6dfRJ79N2tYTH3qWo7MsyzKbhNdYnUpzJ2iLzP9Sj518KQv7xvocAhXVdEtkP12g",
  "key36": "CY5CoNNTr7vKeWJH95REdAbmr5LPou5XPVxf3irbzf9U7BwVFnb23ud6x6XEqAHHxNJRknuce6xK5GqQNUTRvTB",
  "key37": "4aqYYZmdyNRy7njnFGPj8evQC4fYBfRXyS8fCxx9uSKicjpdiNmiDVY9J989Kf6Y9WWzDhMjCfSbz96ZmfiV1wDy",
  "key38": "5kKUD9xLXEapjfd3az5D9wusW2N3FR1a7wLkXJipiQvTH6sKJrKhBctdC4giowBjas3aocuAC2EbVeSjVX7UZfZ6"
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
