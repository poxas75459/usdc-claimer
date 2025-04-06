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
    "EGH3U9TcXad5k3CzZ79QLczdRbKRvvgaGVJsMBFVBjLrBPe4LydHtbkZmGvrMbspDATp2Zsj6UvZPrRmKTTBhaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfjaGRp7yrAtm1szVereciPjSyfVeGJrMTmp3P7vpcKRQK8yEVy8Co4CooduMHP5pdbLnwG4iXLFfpdtJaX7Ev9",
  "key1": "3cCujjsYt7T2M2BXb1xVUmXea8ZcrVPutANcAr9xGiTZfYK1h6R9fDZsGcacBiyXHozdSmbCaR56D4KowvFPaZhj",
  "key2": "XCPBy3aYPgAwwUJvBKfXP2ocfk8Eu16e1e7sU8ynyFAZoXsmV9EiAQwpnnP1b4WU3PspYfUJvGGnj91N7jrkwir",
  "key3": "53H9NJKEGKneqHrSpaethtu4aMn4pgBH7GdrroBEttnBa1SCHGjSKnxqDAe6pAD77KVj4KGmmroZ75MxGwomAy3H",
  "key4": "4EoZdLzDJg5XfceemLh9EAoeNEV5APWcEdxes1UjV7mLjrxTA4gdeFbVeEzQKY4hxc6Xo8R5uctFMzBYHvVRp8Pc",
  "key5": "5SnuVqpCcxZo7QcPJSVTBMaYmTVPgktUU6PdnMgEAnQDPPghJYEH8TMhcUDtVCsxXFScfWYVuX5b2WbsqFvVvXwA",
  "key6": "4Z2ZovfYEmQWwA4JEGZciNsCJ3BuZMYnWePA4nqKJAsygD7yjxhUbVGjeZ11oKmYTSiEDboWC9rthzUQBchnQVZ4",
  "key7": "kZryVoKNkLxLmjYcTiENAbXfy2qTSX4zLDpS7UStXQXyDzwasVp44KYgS3t21T3d6ieq4mvav6dc4hHwiw32a97",
  "key8": "3ATu5yb3YVK7j9d5G3n5mxmxa3HCVqbpBKmWpjQwFtneUA6bVnEXGN3SKeHBE3fBxNVddvph9oyZQjaATz84Hr1K",
  "key9": "3QQHZPWxLsxpgSFPMDQ5RVG8JjjKDHAWyAxCWsjGPF58ai4FePHk5gt6cZyDRbzYuJwHm6WbtDj2S9m22SMgVb5D",
  "key10": "5sJgi3tqZu1VXm8TFGUeNADz5UK9TpSrsVjGq4AkRtaQaZ8oaH5QtPn9Ni1dyWJSRk4asHp2f4gKHUKNCVBWqLMP",
  "key11": "2RnVTRvKUggrdhmEUgCXQ3ZQzrwoxPmN1widT9F9xK3RMBGsFj1a6WgrCBfDN9AjxisP5sSHRxvafP3Zey1CVxJv",
  "key12": "2zJ6RhubYN8C2MfCk6hmYoPQz7HqvMC778MCVbDy4oiDLRvP7BiiXewueak6tVFcBEoKq1CCvrg6K4qCzd6JKDC6",
  "key13": "4oD41GWRQ6R5Ad37swYaip5XafSvA8XdQK7BmCf84Zk2sYQLdaxdEUPXi6jhpLsoNfA6ye5y43ezKyX5MvjJc5YX",
  "key14": "5p5UiCNyj9qUEd1WA7XDTX6CkS561eb1SnmZudz3aVhwRzw7sYnEUCvExwXqMtquAKWbt3Y1TC1PM6bseTikYtEN",
  "key15": "3CeAyD7jiRuEvGvPYjUNFr1o5R4SSj9CWdTZxi1A8eRSNvoi71t8BXzjyXNSidLw7bLrmmGNZNkhViR2ne8B4wRn",
  "key16": "4WAPGmhqmWzHDpovNqkWQaQyYArUJo7iHyDCCCypM52b3f6r8SKqqtYPhVj8jFA8TVQCZRCqGStaEzzQoH1XaYWe",
  "key17": "4JxC4t2EPEUywirym5GRmK6e6RrTizveQGBiq7pYiZs2zdpr3E6wpTHXgyGRfFrdEogZVRtvhxGRnGx5zHUHMGCu",
  "key18": "2E35SGaHdDPpV7gWfMnRSv6qPmimjaxHFmDaeVEFCNiszso9Gb5mFkuKMk78N2UhRqkMvRNb1vgQZXmGaQ3o2j7K",
  "key19": "3JwK3pG8FtPnHD7n9FmmcVmVpoRRtErXpL3o1NKSMJcat8JtTQabm3utyxYzY7B6RiCdfTg4E2sC8kC7ThmAdGEr",
  "key20": "5yvryy3F37HrTF9ZUqtZ9RsC8gP4rhRwTubLpdgUpAherJWkcTcq8j3EJvAp5wULN5hF5BJhT42La2EozjWmzdVZ",
  "key21": "67mZcuaA6y9G3MvzUctuh56osBHcpKA6TrioT6aP5xn94BRcYf3a9xRgr5zT134nXqDBFu1Wn3WMst5QDGw2zinu",
  "key22": "dVshTYKGXneGpsqEGwhPw3R4sagG7J2K4rkzmHDsEDs9vGVE2Gy8Gq4LPHpaXu7bUNnKdp1vQPcupvGFvXzDHAK",
  "key23": "5DDoXL65BXJmVzsMzYvycdCwERT5FMxnQiRv9VGNZrb6HuPzAuBr49yHNrAS9eZdEVFRg5KmW3E3buoUGPmQRcX6",
  "key24": "2x67YCdqRk41N9JrmC6m1ez2EfZWhV65Bma4m9jJEo9b37yrHCdGbGRd3Eo4aLAftcvg9hg52vL1Bsm5vJKvUf3e",
  "key25": "5iVFFx1vKAWZi7zDwqCvs5sJN2HMhgiHDPS11WTBvFfvpfsbiutPvd7SwbtgdBxrQf8PodL8i4wdoxuvmbXCwifz",
  "key26": "57wLvQuY2znTaT576gNSdPGTALzQUV3vDoaCVWrBAUyXv7CHCxYgLpbPgvLxZijnwUJi5WnGpvtBCJKJhq47hUB",
  "key27": "3TVbjUTN8eYy9ckrtWmscEhfo6ie5RRLp1C8sYLHY5d2WSggeFJ3h7o9uyv54wmSjKkUf8VNaBe4kTfQm8vbRRnt",
  "key28": "5ASKq3AVBk5M15DAaKAoAFPgJHcx6XJR8TuKPwsTEvY8N4kkfERJkVWp7EFjsasyE5kiBycTBaqsgqHT23G1Tab1",
  "key29": "5daq4KnVbGUMYxxqqtsqssHM6fx84ck3uB9tCguZmgmx9UCoxLMZCx8fkxeZh6xYFKx91yAmgSRTYyrStVyd3CJs",
  "key30": "4SJp5BL1Yx9m1fHX679kh6Cj6hzZGVsm5DbzfRvXMhhogd8uiCWWCbGX1jqxcpYgYRhS1gUVF9fyotS62XauJxJi",
  "key31": "3Ek38FxDh4ZU5me1VK4pYJLd8oKKk22DYVYvJc8W6LMPXrz4ckpkacKerFWQ5CPuoYXxngzZYhBMr1tFCxsqWhZk",
  "key32": "3ogaK8GA85WkirXRzX8kQZ4k87qWMdNPEz2LZb3ZSD116yMj5pd7MXETAC5nqQ2wAqaev5836cDhTvKRKpcicYQB",
  "key33": "3mx5V28SdtDAxqKCpP8f9yD6Lzcxg3t9GEvBSs6QK6PNPYn6ZLgMNKAvsrDT34PX53saZewnmGBUdorffadTN1hW",
  "key34": "3zh81EadgNAMWJcqPaZVsJ1uM8A4UvDESetS1t2MsJN7jtDuLw34KrJcSYTDgzWDxBiKopoLKbE9DKQtDQb51XCP",
  "key35": "5yHQbTVo8rBWMXQDRxaE4hP7D2wRtRmZ7kR4Q2XyNJ5KKpFvLuww6YmZJGShLApRamxrqCxy8i4z8G1xfn5s2j51",
  "key36": "4Y73JrYAN7mwLSTtUuYPJPwLHzjoWqwgGaTg2WuNg7wgbvpNf9ZAzE29sU6ANvuH8xjgCvKYabRzHFfrAg27hXRy",
  "key37": "3P1cQrUHbBwSjjXYo2wNdmnoyxhQwB4XGfzpZrYHEeDgL3CLHpmQM1ewGngzhH12pHKHWCjVJ8G9xMNaVZvmvVyG"
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
