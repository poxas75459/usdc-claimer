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
    "55ZX5Y4VBd5Lfz8mvn4mVcNPxS7apaH1Jhr3nK9Vn1tNec8mvMyuP8gCJCcS5JyUrtQxF4WTSGx8krUtnjjY4HNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5koehpHWv9c37pvQbXUJku3uBdTWaGZx9i2FpGXDoUGfjkGRiHfGJkjUAtnA7d7E9Xe2qZfZfkWVG36iUfxDFDTZ",
  "key1": "3qeW7Jfa9a6cZaqR6jsYSwk9ZxdeDu5maBqm6x6s39UVkWo38FhVCKMC2EMxseJ2PrGuwjPTLD5aGq4UuF72R2ks",
  "key2": "4LdH3G4PLwuvGSQt9Xm2vAhgMpPLh8Zv5hGxXZHgVmem3khTzJ6BfH7CQmVzBVSEVcLHczivz49nYNJcHmVBx9ux",
  "key3": "5VtaZeCCpZbMsgnkEAaainTAgWPg7v2fZDJf7CMjbB1VkS3N9DZZ2D1xMrV2XoW4SWPaPixJHRLfSewVp2aaLcUH",
  "key4": "5KVXUECNhae8wajNtxK33dZhmbA48G7XMaXjXjJv6ZLrgQ8QLpmTpAEwvvLQis8rQPQLxURVmHNQCAma5GXThS9q",
  "key5": "5xQbv1sPd2mEN4UtJKroAkTKRPLtQrou6MbyBV6h5CdNqabmw3KX8L4Qwm1UU9bwLa3dAqia6b14maewd47Gjm1d",
  "key6": "2M3G5Y4Dhkw6sfLNvonwrY28aHiUDoEAeSXcMv2KiTexR3QVAPMWLVJDR1zaoKXcWL1LZdG8GU8gWrvJmUtUoxqW",
  "key7": "4XykLVwQF7tJP5Ra2ofektL69ESCtVSi6pLCMhDJP8dMa4ZELgUjECkistGh9eQVu9dm3Xm8dGB9A7MdrVK6UVUa",
  "key8": "4psQdVi2R3Pc7cHCyAmMC47qJaM2pmxwETsPX6GmhHtazHXLZDj8ULWptNdc2X4PRywBRHcUkj96nCx8wpjAd4Q1",
  "key9": "4ggXmeBP2dUhDk3Xs59xWfnCCqXevMNAvxPKaox5A2HhQ9WYKaf8qoJnW5zEcgcWvmNQmaVVBoa7cNr3aZxFdQ1o",
  "key10": "3W5EaU3SqkRVG5t8o71XeQVUMzvfRQ1M4TwMsGvuvsLEgYondzKKXozMHdcZf1dgmJ8gcJaRanGF5Qr4FqiRqhDc",
  "key11": "WqWqzV9AWtLbeg2v9LhQs7homStciPmwrkGEX3Zrssxwu3VjFnGfepgFZCvu7hqq5oZgjWgZWfoiVPuwJhzQPAE",
  "key12": "2zqf9NTGmjMxAXEzkytZ2iuUpCML7Jxx2b5is2dLK1benMjmTLYL9RJJ2gYD3VxDmkP67Ym7U5VgGCnAzstqyM72",
  "key13": "4E6JzetNY2QEjqrXgxabCb9nscSC9c65DKrARiiiZY8q8LoKPMteNn6pw8EXZ3eV4xZvDfNhkqP9HZoYB5MFFCUs",
  "key14": "4v629vh3xXBtrKpPBHBRncSEYVYiobKSwuCZePJFGpeXd3twm97fUXhLV2zpkbinMmSzX5cf57G2MkYuu5U47n2t",
  "key15": "4wR3iuNm4H6vZ92YjyrUuzcuV6BWSfoP5wJS6peWpoAWG7As3jcmxz9Do33AWZ9Dtk6km3R4jtqaKkq6dmLKFAwK",
  "key16": "3sT7z6Gtmv3Z3BWWdutcLphZc8cAgXBHo37RhbeVHg48BfFGsFDtJQBjYnd289EBHq8gw6R3oQfkwMZQ2sxSpa21",
  "key17": "2dhWzFt7WASAmPuBztK34jPH3VK16hLjUDYsSP5eiT3t51h7fnyaTrhDRcyN97au131g5j7AuxnWnfEa1TkNevM5",
  "key18": "61h9KwaHsaDvZ4zENQ13pBriFJK9kKWJBoBRC5MLHunjBvadRf6befLDZjxGz5vjTDTJ6rK5Spn4rxftw2vL1Jau",
  "key19": "4UvW2ZaKDBwEp4CVQQJCh2M3VnGPaxKk5k9UZbHqJUFtpmgqcrA4B4Tz6fSovTGSgHbsQb8uEQfCj1EtbUgpPRwx",
  "key20": "32Mfz6vdTdHfkpnzGVraw5YTg98zGoCos6amXDgWv3zysrgpECa2d7CebPm1igSvqZBGjMYU5jG5gFw9WxXouiRQ",
  "key21": "5NQLDT5hks8kuudiPQh2R3BhdQSD3gESDbKLBm2n9y4c6j2BW4VHzZnyNSAWX5ijNu6Syr2iC9tZiGH8meZS1duj",
  "key22": "5bQAKvkNt7JQ5d6Bc9etcQM4MSDexEV9sPnVgGPXEKFXJjZvNz2YPoSjksTRBqty4uhSk7H5GvmdeAbQk3nMRTHq",
  "key23": "4GDvs13yvMkUMsshKUypsZTpM9mytPEocSAZxuHpC8JP17MmAbvGMfbQ1u7RJ18gFStcF9KRoYQBtgeKbxe79HsY",
  "key24": "4L9s26m1tbeia5J99nRN2byf38SUwBLRi5FjxvGjHv2RcH1G28jFWPaSyc5MwFaMrsMgX98MALUh34Q6hN8AP4kB",
  "key25": "2EkyoT4L3DJ37XR6ZXjw5gRV4Uwiro6D9VaFNMbXorfG2PUEZPPmf6zshz4wbNZ9xLfpYbQU2WuHjwAWqrJPNRVx",
  "key26": "5Q2DQBYuL72MJw2kXdn11XFuNiTgJw1bjmWS8Xvs84928zdHVBoACPGcwSGiVryejp5LQVSmy2DWBs4xx6ccPthX",
  "key27": "4vp62hPksS6LosQ76jtzN325chgvBnn7eHSmJ8hymbnmAA6UEKGzstip93bcVjz5XdoYAgcJSfnSNehzqtXQv7qe",
  "key28": "233iMKKy8z9h7PPGRcoP5KTj8imFNEeCkUKFdFDfaaG1U9kZNHTYuBxxiGgT6nQyaU1fHTw9nRVVHNrWhqKUQoqg",
  "key29": "4z9L2N6GVcyFUTL2REYhe7c6XMJgRg3RCT5c6YsrMW29k74uiT6pvEWEGNFoUaCfF1ywLf67ToydjBAwLubpmSr3",
  "key30": "5ZU1oAm3TsCDNsLw14qGkd8eeQHpHDU9jVg2sX5Gr4q2k7VizfULPZwpdzSMHegJ2diBwXFkTEafxDmNx4a2J4W7",
  "key31": "4kzxnJRhM2DiZUhMgv6zKL8CmZdA172KeGCVU6myBxiJbY283h4uPcRY2ikZYXuaycgkDGvwNBW2H84ysVSE5yqN",
  "key32": "53KJLHN8BPoyyeAVXdUbgVZsDbvofu6LRWFV7w4fV5PDbB6buVCx8nnZvEGCeXYantwGRxjmPELLbAeY6LfcfZBy",
  "key33": "5dsuT4pMZG2p93J94b5ZCZzLg3S3v429S42XqRNDx2YrNuRVwc8Uixx86aUBxZPmq5rVp64pcYSRRcMbpxCZdYDE",
  "key34": "rLMTYhHyBGRoWA8fffN34bnxz2MFWiyV9HkLNCwg9b6eZySNEYux4e4cfyba4cB21BWbRuMa1KNTPoXUjaDjvqM",
  "key35": "4WHqUreQHgCkAqwU8cdUofFme8VpR4UAZgaK4uhA7XhT5vwFdW4SYjFkqTKnSoQJtoQ96AKqD16Ac4Bi5fe1byat"
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
