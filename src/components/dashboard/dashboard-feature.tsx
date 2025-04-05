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
    "3KxuHisZRtx6bZF989NCtjqKzszhdBKrLtaRRBEFgyB5tXigtvKfwc8d2AXwAAdVXMHUsu7V1v3H4BQWSbrmirvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRFBYDsYzcLEYHgYDVJfttjA4b7oDAhKbVX8zUuqGznGEPiTWr6Lcd7euefxt5PKPgqotfd8UPxABkLfKn9aYUG",
  "key1": "3DakS42aK3ubrVR1yuFuwLypRv7jQmg2BZu13CNHF5t5K7RATHauT45MJ5HoReLwwKvJHYAMGB7r1WSaVscpa7sH",
  "key2": "vzijs4KDwoC4U1yLx8G8nHppqkbSxMsghisxcF9mB3envjRjELVsvU8j8zTUADMu4jMgKHNsCm6JZUAVsJPRr9b",
  "key3": "2oMag76x7cKM9oeJJkK782AuiXNKqdeKdtCzHafmjejYjGNMmVzqT3izH9kcn9q4wJBtSzH9KHcbvaJrgbxuwWYW",
  "key4": "4ApqQUhfYd7UnfJAXGrrSs7c4BRvuwuKsmgt6pZdZohTeiYfUfTDFz72Xnj8Mfw6KvAU79ujfJoC957MY9jPe9md",
  "key5": "2FMHboTv3m8vfKuMxsbcmmQHyyqAM6S5HAKgq7qgEJfbQivDWPaBNseTCv9nfQuqa3wF3uX1n4SuXF4KHah7cutn",
  "key6": "5srC5NLJVm9FadDozNraLtaNRJATVSWpoQjjo5VFFtjK9Q6kdkrxhDEb6jQqSwDnBFmZmYjVqiuZNbkuKbRjG7uf",
  "key7": "4SsZPJF5SvcsbiDA7y9QxD2dV8s47hiZzKeoTTYzUBiEzbr1U7hfY2UQx1igh2kbyFspB77f4g2PbfBdSm9TjsX8",
  "key8": "2kH2KEHd2ZQckaEZTSNGtKECrB6bbfGjcq6dvKzuN1Dbm5zQeLXhwRgDgv3AmgJMhjRCW9DnQsLnGsusZm2yVFQf",
  "key9": "3XTNV1Ex1tPFcXLtmiKojDAHPZesMbHepQrxLwjPQJnGXUov8tJ1xFwcQw6C9yo5SxUcnZ3jKB5QXEqW5SS6t6Xk",
  "key10": "P8Q1WNwsr46L75BCty8BLEwum7otq6uuLRJbwATMvetwn9Hqsown2qL23BMZJFsxfF655hBCVf5AHVBGxU2x9jf",
  "key11": "5qj9L2sFRC9RfJQCeZd2SHdaWbCDHFBS8sQfcq1iMWZyZ76vnQYxqagxqyaBHPC51LXvn8DjXAYzLxmLiiN9cBaf",
  "key12": "kUpJQiArFyFkcEDXGDzkEXCcHdW2SeHrS4BZYv6nxiMERoqR8r1No7YtNCX1twvSMWAEsia2Tv8jK4oqo665Kxi",
  "key13": "2PHyJfDtyeq21Axej5kAjfHjzbmYeGtre2siNtJfp6JHuCANRfcyza9fXf9YcZZtKevMPpbuJzTQ4JUS2f1cjShS",
  "key14": "JBaGr4xW5FGkJpuhYqMBztDpxWdnfgWHRVkspKnkgG6bS1ucQQ4cmEToQo8pt8rDs9hJmLS1d5Mz9nMD1NZFpKE",
  "key15": "u6ZcwfRN1gPDvHCrLDQErf9rHHcvSyc5XSH9qT584FU1MgYNR5jQtEwzAABYKG6CMk2CDKionFxK8DTRc3ES5nN",
  "key16": "3MGV6sf51odsuA82dxZn35i43kX4SwREbyvSNuK26fVZ4MNaLH5DQsYWJQSFpd7wkUpp8ke82YBckjfa6LAAMT8X",
  "key17": "5ScWa5zrnx4u6oMFXL3xx8EbSmjY3QubGkrDFTbGwQnVmKoS1YrGiMkp7shEb5VRBW9wsBZ3GRgD7onNRMTScQor",
  "key18": "5Tj16DHndV2PAdCuJGhgXUpJUhi8yiLCqxapYuhDkAV6z4ye4KLsvCCv2uVEoaRbDELPvLkDAXLbhemKg423VJVw",
  "key19": "4JGSZ4Rio4LsRFYxbGK3U4yQ1dAJyoEU5vQhgJdrRvccVV6hYqaFWeEtWukQQmxHz4WmfE6yUNHNMCNFtbzQSnue",
  "key20": "afenfBhbV364BXh46Gff5B2LukXj4G7n7ujXMTScGtA79n1DLzSD2JTcK4dBdctEdqxp19ZLjf6b4hieWiw5RTU",
  "key21": "2FohDrKwyrSJEpSTRJL5tMCMMEbfBWbyBbXeV2ByuYgk2gMbKvSr8dzj96hjcDnR7C4Ra4wTRdtCN6L2AETXtrUy",
  "key22": "VTarGcYfePGMTSFLzSLYkX5T9RmeSd1fP8cJUjJ75YAmNQqBeryg7x6ZjnEeA9WEc9vcojK99hGNe8acW9Wxt1B",
  "key23": "gHwtc87Rxc6cGwctQgHmxVpEFJ4KFiqHzvSDEDUGFvKtHdTvgsR52htcQ8JQy5Qo3GHc39iYy4udMVR3ptfpxep",
  "key24": "26ZYY5tSC8stZBwZBw4HjB1d52fS77CMmX3XC5U29RJirJ8f5XTEA6yPuV6zzFhPR8XjqPQAsVSEp1EEpX3jdKbF",
  "key25": "65s5p9cDkGJr4jzgjEAEmhszWoQNk2qYpVZPHT4wn3w1PenGy8fnXYBXKBqjWUJ4FuWmJs9UwmJqyPUwjvbqEB11",
  "key26": "cMyyDeqSh7VignpP8YUuHDxcmw1PaPuWe9B6GXE9ej5iVmeXEhLa6ag1axiu6FsHc7fjgsKRxdw2FEgTD14jjLU",
  "key27": "H1UZ9j9kHsLNGQro5if7NvNYgZhmi3Hd2n9C2LMgC43SoU9Qis5iZ2a4xwPWaXYRPHq94WDtsK9fdRszPDopaRN",
  "key28": "5PMKzTky6SfUhJiQZ27FTVYNS73MeuwYKEpHoKJ1FUNqLFZNaNKCRgEvdhoU7Fjhefh29hiukYu4sT2nPdBzg3k1",
  "key29": "2v43sJ9EwwxwpsDNHtosiczR3ZMPr3ba9UAKSGzfHoMh4uJYUPVBEyHBdosSGEprvDP5Q2AFCVEQjABpZELg7K22",
  "key30": "5hu3zor7PkEZjfccUTWpfC5LQWbmqptWDMY7sBhZHehHCrB4qe9xBvDMGgpEqRWgv6fm3MC9VT1BC8LqPuzB7yZh",
  "key31": "2KaCGf4g3oo37gM3BJcci5MfKw8SL13TH7gA7TV9LHy52ayeUgA2sGQjnndbLtZ6hFRUcitGz3oYRDLVP3K2bXVf",
  "key32": "2niwbBp1Xtn8dYWX4RZWty5hhVVbydVbNo6nfvhuZmRUrv5VjJVD1nsAmFT5EkRdQZQLwsAvRXVyfGe9sCGzJSFe",
  "key33": "5Bn8N3Uy9ahzagMxmfVGtTu7fic3x95aq7QqRJJ2hSn9pnFi5a2cfbfM2wakdxKdpuoyrZkf4PSucC5yrCviAiGE"
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
