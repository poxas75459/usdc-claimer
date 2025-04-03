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
    "4oGXuFj2kJcajJ3zCvF84m8T1BbTPZYD1A1Nm4fg97wEnZ7upqS4rijgDUdVquKyDd33tin7j7f4Md7cjJo8L2Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43i4PjEJHGSxB5WGx9YqszE7QbYuTC9d89XoRuhXgmui9DrjD4k87XZhrR1rEymUFEy2t4MBHhfhDzey9sNdDMTF",
  "key1": "5RvEjm2Ld1sWH2WRrbPr1EKSHYNmntHqpkh7QHY8ruh6bCRMmHykvqeSja3hJKdtEHayepoKevRX5DPAsWk6CmF3",
  "key2": "9TCcMKYkJb6WYeWgfunugd7k7Mk2c52dDCA1tJFFEZJDC7sZre4CoyFqQAYCsvVdpTdbvVqDPjpu4YMNYmeESfk",
  "key3": "5JDHZwnRou55knNUiPVShJR6MrCJeuvC2oHhykFNBUAwTzDZbdNAPRbYyLMsmLweQdqaBrv8afRAw45sLsmL3u2A",
  "key4": "5HtcxThmSF2Yd9WTrZ3gNbxnPQ38FdimT15GdqQVB1q4zwkgzc2MsY7VZJ4Ze1U2VcpCchntu91nXXaD5d3jps55",
  "key5": "41F9Y3KHLFonJwvHQAP65iVWxkY7RLVouhmmHF8zoZQxTWj2eUv3ibJWUoNfcs35k3TTPfXypYDEsKLrEjYD76cq",
  "key6": "2x8887K33fLc5xk5TjJCkoF9LHmnqjUqCQLYYPRExShxLTnuZ3k7wQLmh1nz1u9iViLSbD1doCsPdGP9NSpBgyXu",
  "key7": "rkV4MY93p32DtYbAmPSAwGd3XcFr2jgcYNMzz9uxLpKp5RyCJNyPCPSF4bJ5mjQVZkvA386pCUxArBTSSL5YHga",
  "key8": "5t9jpqoEPn4uVvp7cFb46Bu9UcDQP6Pi8ppE7DLCY26rWDuRyYRfeUoQbw8k6k5J9CioBCB96bJ9hoBkVYfneHG",
  "key9": "4DPpBksVfuxbiKC4qEe7behKta1gEZGkPoschDvceYZ3wywq9dWqGHBybwWeetmX2jg6aYG5Bad2TcX284MpuksQ",
  "key10": "ngnNv2HCYLS4b69HgqMQ5ovMpanLjmu9EB2JrxbzpjbPTSSPcnWXzHeEsQyttg9a6i2pXmU71ivxrFt1Gn7QcNW",
  "key11": "43VstQ2K3deQWDBGEazEPDZyo4JQhADHAA6gCyUvUXB7sF5nS4Unk1uHKBEGAmkg4URdjYhdAfhisG4bFVwzwxjg",
  "key12": "44Aa7isy6YN62ZQujAE6TCJ7E6Y2hVQUbShdTfXVS8oNR2FwDVAcibn3Fh5DHCbQQH7fReEb8PECaYK9KS3cSvmJ",
  "key13": "2gGinozSEC93R9kYBTESaCPHdUt8X42sQDmZWZFQB3b6MTw4ALNYKB27JXKubD98JjN31SM9Vwqr811NYK51kYME",
  "key14": "2DdPDhVvfApSC5LduKmN3MaoMqinDQRUS2dj1JuJoSrXF4GbPq8UXdXcXnFFiBpmUoioCjEB9BtS6vbrchRASGVT",
  "key15": "3fzsW8H19CZD7NSch3mcAkTiry4KPnbXMcu3uBtThXKUH5h4GicCRBtpycdrbXi8k2FQsddCK6xTFXJD8TnvuD4B",
  "key16": "23pnYrzXayE8K9RfUZyAUCKXtvNLeJi5tLv9GHWShWPeUT6NJfbws8ekbLeRNdSPTCmJVSghwhk3rbj7rRNfLs7B",
  "key17": "3y7z9d1SHfH2Zbth34Xygmps6TnAnWDPB6hmorCZoQBGSXp3wEwnYUAPcnL9KyXEB3buvspGWtQX162zYXqpYovy",
  "key18": "5twMCUtWWKJ6nxgX7h2GrX1Bzj8pqeFjPaahG1wFBaEeN4LCY1vABqWwZNYdX5FveKKCee5kcJ5YWk3okXMAUovW",
  "key19": "2NyP8hCLDoADjiFShqrkwwaHZVvALM2YhqU7iM2pqhhb5sd7TESMX9ZhK4kKKteo36x8WQjPaKSZzy68fPBvQ6F",
  "key20": "5BTvJddH6U1H6i6p5x2C7RQthkzN4zciCF3BEiaXuJyBTkjFnfY8mBgc8W5Vp31y4CCKLM3rZ5LJjDinY9mdy2KG",
  "key21": "2fGAzAtMS8fb3q8yrtgaBo7t5sM3ciaciA1HKQ7TqKd7KC6du5jSNkddxcJWctibboL83t5xk9zkfHEem7xzNubc",
  "key22": "5Qb2kfrRWkeKF7eRyuWsct36Zn4S4NP3LfMuPPZFyqNMcezzHkSjvEGZVeJektc9feTAEoAQmaSJDSmzTkvCVSuf",
  "key23": "5YzgW7usDRsyoE5immxjgWBfRv7qcxtdBsbgRSBYd9egc5tPpYmrVGE9RYKdaK653fedhK44cD5muGx6u2q1qQmU",
  "key24": "4iosHCBHE9yGSwksoF6rrZ1QHto46mGMkXc8HHak5wv1cd5MzhKrFLW3VSVnPPikmFtAeAfa7w7EUfmeijYD7FTN",
  "key25": "3GpZUGnFES35PAbeTLx3V9p9ndpxNDRvCx3fDgemyKbPswCDXuworHMA7Y1dc642j8FJuTq1CxADez4MHMxSnYNR",
  "key26": "3YeeSTftJuKfJZByGJprXTtSrpFfWfrqgkgXRcXaj99MjWgPnzSZ8hBuHzXQA9crRVh7WkAp2w4JQbgSNie2sf7i",
  "key27": "5E4X7xazeSzbpJsmD4zmKXDf8t8XnpFN8DxnThjRoZCsMZH7oqCJKTWBUiqb45Ey5LDSYY2sCa1M3xPkroSQSzqJ",
  "key28": "4YcaVK6WjLjPUQDx5TBrkH567nDphFpwqBvoUhh6eFA88t2o2P9f1CPkNKpAtgDuALUyT8h9owi8XPY65iY7WNYb",
  "key29": "3CCNjtyAaTrrDDtLbtuBtFrwD9rhh2jVPSYSssERUZVXKwcZqLd1qTig1K7ehh5rcp6t3ZqNyNjCwyYngScsYXYB",
  "key30": "5H14YvmipyYBZP77LzXM5Bg7tXFiDdRQvdMFmGELCqdWznECr8VY6NXaxSTrex4KpKsG48xC36BP5ViaQrdcepZ6",
  "key31": "5QYkHPY8YnJFngc1ojLCu4eSF2MaV3csAx6Bh1xZnCzP9CY3bTJi3q8w5mUexH6KcyM2ucUCxsuh51VdJN3dFiou",
  "key32": "5enG1e1PVbFAbqaVPirAq2g9EhAyvULeAusteZKaGjXQT8JeVQNa8CGhhmXMm9HaqynGA47Gfgergk4dWw61XUPv",
  "key33": "5CoDzp9kbvccshhNizQbmcEHM3qb9k8fEeofw4PTC7ywCWKvLzmGnCykYYoagnogXM2qPSBF3qh2VEY9eup9Z9Mh",
  "key34": "VQqLym95fMUTW4bEGv69ixxEtWVMjNwUPD84V3gAqCH9ErCrUxKNX4V142EFzNfdh8q4eho7rqkks6ANckDj1Wv",
  "key35": "21Dy2NjLvb8RdoBARQZMiaGaYeM1Yh3zhNGs2Gy1ycTuf7vhVY2TTpspGm1drZNcTKo3aBo8rWFTpajUsGhDsywj"
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
