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
    "26v6aQp7A4K8JUKvH8JwUbj1gPPA6PBoccLcFkt5fc3tXPB6HmjY1Hoduwj1GDmrCymP1dv2caXkyBTmsktK1RKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TFuM6LXFUaVi2pmw5tDPCHTctiy9PZubnXrVppecbCBGaMDJLf3R5cWcUQUNmXAmvTt5cnWzEoZuPLcja9NGYx",
  "key1": "2i6aJ3Lr5NcSjyQog6u4AH2zuSEL5WcaiJP7z6gJo9hLNXudfjc96Yfd2SqMiaoPZCKLJNU2RqH6Pa737icQaqQV",
  "key2": "3qihruodXGhz8wNWHV2PQdnp86UvFUPJSqaby61nr81Xv34mmXhCYcBxgAXgc2Z7BphckyJYfANM5JAwfBtp6f8G",
  "key3": "3N5BGRcy8hBfvkcLFGqg7QgVxQx9MJpZfvky1RWeivAkoggoc7zAAwDHVu1cisbUM3Ex33RYXiuwp4GBC5d75nCh",
  "key4": "5wAESxiAP5tNX6Hj61aSzLaJxWrVVNNrvadkHUPqAUYmxXYmLXuk8N8QJ2UK1Z2j5VxCPMS7UiLU71D2jGzeFz4w",
  "key5": "3HF9yGqS9E2qQpDoMhQ5F4k1hnyPTGqRmzhhK4roCF8pqmMhK3AZ81bdGocnrBuGmhtzd3BdTeievhnvjyeZ1WCA",
  "key6": "4SyYHw14wBQTFiDhQMGGERQDdZg1DTMEFp4xGd4tUddsMVL68hdRrGyPVw5SWpm84K7FF38nMSV3fTKZgcPwR9Nk",
  "key7": "5vKZxSvR1dbuGgrJdzHbJxPhWsGnazfmpp6sBRP33ovVfJEaCB8cmcMrS6fuGutAerwANB7zRagPKRH8bd1PJ2FC",
  "key8": "3xKHJKa5roi822U7C1bwKbeFA4D2TJg4JVtbofJCdVcesZrKa2xGrDSAb5eubjfGwdGD87yUKEKVzFxTMQNuFtxT",
  "key9": "2RphCGWx6pfqVmdEC4JxRhxwL7DqaPLfdB4vzvqNmaS5jmyFcc5NrpdLFNXCpDvrJtr7uMNBgjgSi9Q9ukcK679x",
  "key10": "3LV5ysjnuohP9juvBiSBUHBS1FVSXFZoFWNZPezrieDTKTYWSYqC6Bbywde3TWrcknuEDUTghEjErqn7f7LqxQ9T",
  "key11": "217qbemD1GfxDoMMCw8mze9WQKDDz8yEgu9btR7hrx9oydcivVwV6yqUMaZPH61BQStpmpEsNvwkx1f5tr8PdeHx",
  "key12": "3R8mQZpRPZBADtftr6f7MrM78HALKLZTsNV7bFo15WVQNH1EV4VeJMGoMbEPJKzis86T4aN19ekWgnvPKbeozbTh",
  "key13": "5M9mM2aCRC3GFQvRESQnCZxY1B3xnrugC7BvZKH6WY7fvbNoP4uTSJ6KUXQcM3dxUaEmdpxDBovYk1ayE91xSuNU",
  "key14": "xLgvQMdpozQiB9p9nbKkfrK3G6yACWo2NfcoGMqTHmXXjgtCe5uenLe3oX5buocsURmVAuFYa3s7e3ZyNSCrJtz",
  "key15": "bLWqKjhqvC8pBB2HV7SfRjXau5A9phaH4U6VWPFPvr2VR6M33vyvYAARb6d5WgEV1S8i6mzYdDQcqhzB7KKQRQi",
  "key16": "5e76ZzfBipiBEdYaYshm2Sx9rfKZVgNcJzkosbt6oFn2g3f2oSj4md9vgJPDWCoueZdLdYM8r2nCD1CTD3ZyKVD8",
  "key17": "krxm8V2b5eipN64tN5sgMA4p2zD2D3QdkCAYC1fF8y935DBy1H4XHuEvdoXgrDn4fSYygcvmocYpEsdfg6G2ocN",
  "key18": "66QCzwrqasZJQzwdmRTsGTSJcDpbMuf5Tro9TWnKEfthbw8y2rfNZLgnpbzueiVECanvdsq2Uq2xgABr3xb8YNUn",
  "key19": "gbytto7KUbCTtEGZiYzGmo2DH7rEAdcZyaXfSNBYBzcL4M4KomLfrPMWE7FoB4isLBguo4nrE6VAo4UsVwFQj3g",
  "key20": "s9Fk8g4mSDAC3Gk6NsNpRyzmViAFuh44UqNX86T5NHk2N6ZeXRCbJTDoDM7daXJEW4Qd8uGKY2xBwp1pf1xQtsg",
  "key21": "u1uSLEhLYfuTSfUpXgkpaamo2g9171yQ31tMhnDBNfFsDp3RjvzbB3GufWAKUWBbFv7KA41DiFCJAMD1kkqLnx9",
  "key22": "3YZcwa3PEdFWqgfFrhcHfzZTY7oVBXXxzze6Kg64tcvetPF7vRm1tGbmBZXjtCzMwG5qDKR1UY81pkYZtjj6Aa59",
  "key23": "5k96HH5ng8ddMDGcU3GtBEm8kdY9N94zB7aUPXKr9A6jYTBe7XMHeQ2oYEbQPeSZPdF4SmVsAfyhQMEhnRJPqdmY",
  "key24": "4wsiPnhdniW5r38NihsUCAq7X7FLEdRmVU1AwNeJSWvhtZhwXfXDWBHtjizQJjKAnaMRKUGzm5vVFHhnbUJnD1gS",
  "key25": "2AN8ePdffLVJAtLi9LGsQVgWXxodRGnQegHMGEtAb81NAkygpuGjyCrLspGhft8TfzEnCkde2L9tZTuph9aouR41",
  "key26": "517on9CRzfwaG8BVtK3yLx3s63zyp6cQ7ACNMQuu83b5AXsHmiMgPeHwQL2hxYksq1B9hevZaQGYRkGDdo3jw1XU",
  "key27": "3LukLvEo2Vpi9urPZCEx63XJNBpXxRayCxuzgGpngH7GFp4koPjhapfcmz7FN4b2Uzdtw4KykAZ8SU5x9zQ3war7",
  "key28": "4BceWwj4ZC5GNMBdv5ZEhqzLTXkuKeNQgunhu1bshQ2Cug8cdy63LUmRvhk3Rc3GagVeM1CaZzXzSoweDysfiWnF",
  "key29": "4KPXkKJkT9VYf2ofSZoGs2mqo3rFdDbfRTAYwBKWY4tT9KUxUJo7dypgSVwzY2h18xqtpJkrKpE1SaAnrtHYAkr8",
  "key30": "VQ7EREc9JsVPsB6XwSGNmfn4Pgj9VD9p2Ejj2GWQxJzZ89Mjzn3RJ7GaF9SHekKRwgYUb79Zm1pa2VsMkjmNrnH",
  "key31": "4NWZ3VS5yKDEahFi2BmQnkVTwMoEjXopSAtASWs3yrLEUYPuuN6DH34KLqgpyR7NSXB6cR9mfkoTovVyDbXGCb8i",
  "key32": "4GZqntYaqDWn53kCiCgKXrVEdXM1dJS4UM5RS8oDo64FrRG61VKriaDQ4x1Ybbs1YuK1ag7AaXXNLgH5uCwz8ybA",
  "key33": "qgP3jzyyvxTREhKkAnD8Sa1e3tg1bkM8dn9EsorVXdEfviFQkmL7ixw6DQeKDCo8GHrikquVDYACmh6HDMW3eHR",
  "key34": "LMUBfG3dcz3b9BFHb14BBNPZQRpYWPBS6JsKwtqE96MFhxRUVTnKixXuKkxXLFS3rEQGkzq51meUzKvzK6nFgMk",
  "key35": "2Pvy82PmvLVh7GUCKa6NMsUBz2sWGKUy4X6hgLaowT9T6iV2dm5zSyXK7mW1GLkYMUY3B2VzwEWiyUFncpnpqjKs",
  "key36": "4hcFdCcEvHcLsnEDhYBKymggyU6QMKsKUR29gSFEgYPc4kN89kZEApmkqCHWbWqnUvaz3ehWfWcbN5tBAnG9Zihd",
  "key37": "WvcjmrCVMBX6WFsQPHZhnVRJk1MtFyTptxcrGxZmihr3nqVuNJWEE2iu1gy5hnAxT6Dwn5zXuSEARay7nGaiVsG",
  "key38": "aK1ENmN3AMjKe6SYQhePtLoJCSZ39G8YMEwRNj5exPJyjFRog7n2H9RaeWQ5MXMh5fwfGS6JzgnEDa2s1XxBZ1w"
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
