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
    "2i2TQyRowurhmbGahEY65D9nF6bwq77LaMGsJ8PjWrNfRSovVDTNSL5b3kf4bkdbCs5xNu6FEfPQD6DBWftNJZu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XrbhkSXHMwo6hBYs2R9P6Kpdito355q1EEyiN719xL7wB5nEv5vNrJbR91fAmzbusKHBJa9Z8FD27TdsqGZNfJg",
  "key1": "2jd9PXwST6AkSDuiNgCt2Lh43iZLMGucwiTmdEiDYo1cXsMUNhcRWgLcbgNn43ggkfPJPVeYqKQ35JpX78ycxYmk",
  "key2": "62etiLnRDfCgd1iH2udDz2k2a6BzV3MjwyJq5fWrvRtUjJqwJEvWTnTJRYzrqVAnoyfgKTfgAivmtP4Wu4Vj4TXb",
  "key3": "E1bueMMrfFGWmiSut2DkBvixxBtM4YQjAwXpizfK4B66UzNAkgCevk3QGkjb3zD5NAmT9uHXDiVxozygfMw5zN7",
  "key4": "2jS4BZpViHUFoF3x3GCn4HXbJ2PHCVpuLXUMsfZdM6vRgcyC9yqFYLATspKbbQxbjzCQfxuyiQ8eywzJMPV8pwXa",
  "key5": "4Do577y3ue8wJgG6LKfg3Zn7TbZBtfxDDYUGru4VSxXkH8Pei3vhoLx7u1bAnKVqyg5VXKPu5tWPkYbcE2AUw7MR",
  "key6": "bMxFbuupJPimkELmVj1kK7ShiGu5q3M7hs74sxnvMS2e1KrCjuCFdguKfLkHpvwH9457fJfDN2zQcvDNYbQg1pN",
  "key7": "3Mv3SeGpBhWKtvn9EANEi1fS5pozKC4kZSyWx1AG6dKRdnoKV781Kp1uAzjfU9B4V2ELJwrFmq9pfKZDwCitJ8g4",
  "key8": "5qWR9aoerDmQFtqqhpDxFZLsd8aLpPdexVpnCfBdWBcRC3QPJb4xgzBJdpkNM84gbis5QakRmRW1wisBsx4HbXU8",
  "key9": "3okbEyA3AZnS2UaQU9PgUwrToenHNtWSh5QymiQP7Vz5AXUkQPa9gMusNzkPWCvgPTdZc27zDcvkA9wsjS4aXBsQ",
  "key10": "2Z9x3vuztTFinsLB5JQ8RfvArvia97XgXX6DB8cfai2JXrCi1D4AHXgEQnyYo29mRsPhNbjrt5AhWZuZcssNHPhV",
  "key11": "2pxHS1jkwhfiwt7ZtMaDh4bCouwLf3U2dDEV6M8kxFXRECHjcZDmoRizuCp9XkBqPcg3AE48FuJHAgRvD8NYvKCw",
  "key12": "R4oy6qkgfuaWYqNesf2ZJP6ucHzdgZANFzd9KFfURuxYf1t3CijzMSF18WsCH9W1nBbHPgv6kqXKuwmcEbSBgzN",
  "key13": "5Shm9Ns8EFXA6hQsBF8D7WcBmUNuuC9Xc2b7k9esy5hBftKHh87RE28zH7N2KoG7VBjHBbeVpyJ6Xd18dshmNmRY",
  "key14": "3WVfexfYf1FQAw7z8UVe8kNPo6tEqgj27i7Uh7XyVzXLzWStVvDbmdV5Ug1Bnq9PCyARZDVSbHj8GDNHcLbyGcmc",
  "key15": "2fU1DXAMTjJfiU7V52PhuMSahhXvNpma96v4cxqJguArZH2YXp6jP4BJy5t4N9jqQFcf3XUY2v872CNQ6wBSBjPg",
  "key16": "26Ghg9Q8vAAa1dts142TZ6J1mQ95vYVkNPdbS3UfNBG6ogBhqdUwrugKwCyKrYAgyG3vEHxWEmmQQp1V7TKt2tPx",
  "key17": "WzKpLsKGYcL7yMV33Msj4kTMGifobqV99eFcmziw3BkswqbepioZD3eAZAsihcnPfgm8dDaa2J9uJrcr9fTTjPY",
  "key18": "rJFrMcQn63yrbNFfX4746vDRt1hzQR8wR7XDQuSRzsLXvkN5RKezj3qbfrqA4fMDMh2rEQkBj1MXNiFjXCPrXhS",
  "key19": "5cg7aWowL2PSVYhxnR5ukGgTTBR1cfwD8j3fynxuM36GdprGmkNGQJukweYetfYGtCR1hAXfJ7UjLyd2HjWUinrz",
  "key20": "2yzdTyw23opP9HDKuF3VdAaMvXxzLvQWyYfmKk1vPFd86EtsMc9mHe9VJw44pcNdxsFR948A1FHbuYhMS5DJeAUS",
  "key21": "28ecbJ218gMBBHkxySKp9kXvHZCdm1kzzzBqnkY8j6hbDSER5kFncpmvpawUSb9xxC1F4txDpqMbzxsHYGx2dpQ3",
  "key22": "YLZuTkJrgUMS7kKvXgB8VAEw8GyryDB9VnyAXV6MpujFQPJb1w12asQYD7faSibNJ5uYnRvqc2DcvC3jC6FoZny",
  "key23": "3DKBzWmrT8GrKKgTScxeZWEDcjtbcgsMBvBsqqSPZXaA1UX8KyotuuqhUkbx8yawGvX474ZZpXgtcfDSDfv1s2hd",
  "key24": "3MWvMPAXZsMdgHhSBnJgkTEy3T9gPaLgtgRWMSkYGjGwb43fyMVpvUMDAxRtTvVdME8nmyigqYhpWjUCSWBkEQ3U",
  "key25": "4tg5b3jR6kQmnmpnbzshLpRQndUK3mPDg1ayE6jKh5cX5Sy5LhfjBXnz6vgAr6qvAFGvE9BA3z7PA9Rg1QVPcYnt",
  "key26": "2Eh5pkatFmzs3EARpFEGCCL9uKX7WNVQfip9RCKfUXvbnP4CPEbJNW8f52z14jChhHHq5pBvtnUHAtfYqTkKKN2R",
  "key27": "aizxTsStEa2SNRZv8PCbVqLAxmxQBxR8vj5Rh7fij2RG8PmhJR5DU5ieENBE4nZ8MCTTfYWM9oDSMucpJhJxurz",
  "key28": "7UoM8xpjchqnVJZUUCqMh3LBh1mJyTetUxFDN6HK7hJxgn86SrEp9xGPzJ969UoFNfxynRoQ2v7DRX33EQFkgme",
  "key29": "2MBg5PXeeLXUGaVB5MtEyP8ZFVyvpHDV8dda2mPuGxpxf43C8zXHmWn5kzzvDsq3vzaGbzyLyKCNY7mmwBoAbFLG",
  "key30": "Az2C7s4qsScuSBfq3YWotMwuT7YpSBSmBhVbzcWaZM6VQHhn66Mct7EKtTGmxexTUkNDcHtKHn1v9bddWgvtpQg",
  "key31": "5KirtTSGTemcuAw2WeiTM1NAfucDLGx9rsMksVa1hyP4eyLRcHPk6Kz3k6j7hQuwvYcKMW2wuqGaGXobsePrei2S",
  "key32": "65Qu9YK4AFMWwoJgMJJxxXU9MePNwzycYxsQsytBc3SaRcMVuXnmk2XNpvJ5Cm3D2HNBS2r8YZNgRMZ5AE2j7cE9",
  "key33": "5bU7NEppeRgFaXieMAzJKXqWEFF8SfGS2Py3J8PDkAYTx9sS94SP6Q7CAtxPQPXbvky9VDHbhBTUALo5z1PMSx81",
  "key34": "2itjMzX14KopSG8BiWDKHEk51zwoVyRyzH6VwrNempbFnTGHa1f9LFeCZxSqg1x8PbrP35zWeXsynoirgkG3hLbS",
  "key35": "4wSrufXfYPR9gpQS5dKomPu4BCAVEvzTNLhRuedqQAxE9J2fQge3aZU25zK1hvnu3Wgo3Gv8C6HoR7LfaK5nVLW4",
  "key36": "usvWDofFM1NVtUrMUjv1Yr8zLu8jr14ccDhZcJhPbDTFg7F37xnsd6h1t7g1x7i5VMLHvwneGiDPL1PECZB8TGz",
  "key37": "9j5hT5jKZKNcAgtwMvCbSb2a691STS6hbfupNSK3qxxtfzHAnvxZF5HDikMRXdWFHoy81JBY7sfXJgBS4fTGrmU",
  "key38": "4c71F8aJtE8Y4S17NjnNnkkwFrUL2PnAPJf1KagZpedSoXAHTs5HgRbtyzhgtSBwo2FEQxzu7SCkSjjhrq4FukAf",
  "key39": "4wjEfHTNjThEq8FzXSPdA9wDLBch2MhLBNfjbt2Y7aJrPpkLThyXETB7WB4jrds4qKzbr2zhQYKr3SbTLY926xEm",
  "key40": "5FAwWCQyEJeFbbwQiqC3NrHCYdPiL99U8MmfZ3S7bovs764p8U5WKBitx1yKXhWciAbZPY2VLkuMFCHRcKz1yzrY",
  "key41": "5D8UzxFN5eRQQVb53sm6E5mu7SoQLActVv9tr9CJnJthVbr4V4sVc1JkaHB2myceBr9H8viLgpJLL6o8QqFyzChC",
  "key42": "4DCZ1361iZ2D1GCRDnAvzV8V6fSWvKkuebX3tyhxPdPkdCQ2wBobgQ2QgzADAj7Pc3KCHqZQEFtDtqVATwJsA1rQ",
  "key43": "dwE7ZDXfXFCejzruA7JVCPqczPXcZ9xJuK6122oBjC7Wmmk7fQZn4C3WQPng1a1HSoBa5Dn3efrnXeDznsHC2N3"
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
