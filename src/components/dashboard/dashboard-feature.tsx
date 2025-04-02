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
    "56a38mNoMzwHVbpdYcraUagRmQhpwjysM2L8jseCrvZa1mJXMoH1mZWw7xdb9xfK1UuE9Nwwn9WoxfDm9sfiXoXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wc1z1VEopGh5QDkT5dLiZdQcBH2Fs5uDZ5u7tjBcZq6wPYX1Ly3SM97CAe8y5n91JjcYvU7y1fKjYU8UfhDStc4",
  "key1": "39SEUhysaMqH8jFN6sgJTqLv3HRezGYqfFy5um2YixuS9udkd7L38hfkUjyMxPv93aNEKZmJe27rCbPJKtjxmgwi",
  "key2": "XpqdsT1nFJdzQrNM7QnNe32ckTKTCrU9f1gXQY9uRqHgBAysGTdmAQHR4QWHYqsRnUftG63NCBB6VazdisJhULS",
  "key3": "2XxtbDNWRt4eVEA2oE9mU7T2NuDc1i1oa8NEeti7vwjaVrasyjVqSvM1xyRpfEAi6oVWnR6UyNJgj2xGGBWaDTsW",
  "key4": "4yh3J24VsaePrPAZX2ckW8LdZP1MDsdaB3hXXCRKi2AQ5rogE4xbw7NPAcpJjthHqbQFDRQ23r4ARsrigLmM977G",
  "key5": "naVg2qJ1BAnBGkvu2Q1FmZKpfKiQXRHktK3ahoyK6x4dRrbSbwyFkfhoDwHsyV3vPZ7NMrDkrmJinj5vTUNbYj1",
  "key6": "2TU1qeSVNVA1FasKnXx66FCj7wZXGJ3KXK9epV4Arz6o8MLyXNiQD4mLQwtZsg7dYmazTTqbkvern261eHFDjJ4W",
  "key7": "4GDDBzfi76cwHgwjVG8Wr9YTzM9Y6MXWKna7oLZkqPTsJJDh6SSszmzivUV7ZEQparGjW4nwN64P9kDZj5XUYrQ",
  "key8": "txSFk3BbzdfL6oCmv72jWwmahTAygyGKne3iiE2uizP4LvJiuaZe1z6k6qoFc5kVmCnNnX1vxpyoiuYKJpLAM9N",
  "key9": "33j74op7CfcQiM5ag6GxmDAtkCqWZRAD1D2t37uVg8iHaUFns9eGut5WvZPFYT2HDbDnVoWxjC9DDgADpb9ysQxM",
  "key10": "FpS41KrAvUzwqy36y7EvfpopuYuwCQUE2nTg2Wj9T4zT9hbRJbsrXEaZVGpnmDuWdYtvifyqJm3vfbXywNJTdDU",
  "key11": "3GRHKBPEpyB6jcfDzrX97uDuuFMre3K5ZwaMnRtBKDw7uHRjQnHzWLYikZE6zafEauQoBSBoa9TJj5fYpdwMPCPn",
  "key12": "woQZ3qEdamaY6mgG4Dwqt2QFF5JZpmLmQSZBkhgK15m8nGnzqx6DRWC2dcGskCopz9wcZWDPYC4g8vSES16HVQM",
  "key13": "vTE5forsUJpA7GxG6wMQckE2f4gk8rJHbHfHDUy6yVJpQz29tgP8XQ5eMo6viZUNnEshsk8SkKBfjxDWsYvVqri",
  "key14": "3dGfEST97UAPH3vQLYT4fxvHxnzVZigYKhaW5jWq5WqJFC2S6K4MH5vMm8F7y5DFfBainDj2ZZYPXCKcqpbn2gPM",
  "key15": "4UMiEbkk1sQ3rf3AzonL9uGiBThQT9vFuHky8D3epnfkcRohi1jdA7RL3fmLPtbFktxgSpDGzb7vCA1wpYHj2sBa",
  "key16": "3uZ2LyewddkCE5b6Dk8CVDgXtzjCqkBAc1sjbBDCVwVopyGmMHfJmYqRtxALrYeQN6yUKcopYtAJiVu866pA5hv4",
  "key17": "5FZRE8NzynjRZ9ymQG2hNddSGRhU88Z24Cg1cD7fRQ2FUXrHSc4CbsBKWgthoC3cegPBDU87kEX6PRyXPh4E2n6Q",
  "key18": "VuFx9mMGpuYTSrMVMPFTeED3DSXq3WLBcNveSC1VrkSnk4gq8x2ADSxddPjrp7xQbu9x8sgXGs6ysz84TZgUYCA",
  "key19": "3BppzJwHZiRKc3M6AGVQCp4woytUQtsCGXVh5TyJxkqEpDw9XoNJAEs3xaZFJa5UPrSJraSgB716Vo9YfUu2VUc6",
  "key20": "4SeZHNGXeCyAF9nPnWbptYijbvRbWmivPxf2j2S4xGFqHK9YfwQ9BjbW9E75Rr93eMbMMWtk2uyVmC1RKojMcpox",
  "key21": "5VAxungbnaGWoesgCPf2iaft9gygHkwsDMbjqLMobyN63ngYmXe4bLw9P6xsKfq1PNGaJuowz6xymy5vsKXvQVnX",
  "key22": "42Crqapuhvy9J3seWHZwBxdUzM3RQAeCpdqcp9ajF3gs7kgUD2vfjZSU8qFew5WNWz8PMvNaUZXWeqmgJA9LYbDQ",
  "key23": "3ofmcYDEkMswq9jHn3UCGg6CXT2RXuJiorNioDe7Q9ykCijrrVTT46vLF7gN2N3iyTmQB3GvbvZJ7ipPU7Ttn7UC",
  "key24": "2XZjxyp5Z3xukd5crQEsAnTEf9W4nQ8b33A9kVNxL5zgLW3UdmHPsL4471Zm84ThoGNwkSK9rVk9nyMszDM8kuzE",
  "key25": "2Q38U7RHspFCqbxoPvDsLrLPPfM6Tbbb2MVRTopgMJFEyidnhXGvqSDCoRHkmchcj5mWKdCCMpHwUzgJsBWdAPRv",
  "key26": "3wcUYdWvEW8ptZB22ZcQYCQUMFfc1WuVcYtG1zjyADFne7vKB1SpS8V1Vwf6RXSxzvebp9YNpooynZxkPK8Axmx6",
  "key27": "joCJmXryyJ64xT3v7B3ZXpq457AgVUzDokDSWcapCACEZHLjFLiMXfJenkKYjL5Uw8sNxyj7U8NFT8A37HmaSiR",
  "key28": "3kwYNi6rZKXpKqc7RVsgikfggA5BaNHsRPXCx1QJMiugsNpV2H5vXMBFncx3pJjL6UEXACiiZbanBGTd5xisR7QF",
  "key29": "4YrTWEmN7u2bFAQ8AVo1XNV1jE4aVbaKtS9zRh3aVWnxpctYQtsFBxjADcXX5JhjbsctWaEtt5RWFbkdtxN5ncGV",
  "key30": "57mGf7497rNbD4pD5Rna2ervfzwK2WCnNnJR8VULxtn2wfrnK1F2qGMnnUk84rujGhsR8Egvu4JGhKwMp8LUm4Mm",
  "key31": "5NcJCmpMmwjsvRuhzhFPQTbL8hBCforbzs1CkGTFmqDaaMx3fgpbH2AT7RXavv43GsebQL6GCogLUCvTsvxC2mwK",
  "key32": "4VS5SK9A451jzMFTcQe5dVhA1WF1A2aoVft1nKaDLTodnKnrXqibPBhNeYFKJnKPKBiNsy1d6qKH4WAyfneJBE3C",
  "key33": "3trkLXSAhqfCGwsbxfiN3jG3XjyaL3ufkCjnZy6Vh2NHN3nEb2duzQrxaGiDZ7qJrrXmCKNLNk5ZSmDGwupjvvpj",
  "key34": "28MXg1gkNsZh5aERM6nqFU8uZjzcJRMazV5eX2HtdogametgLRK1ZEzR5xQGyqjmJ6gPVR8A3teHMX33RnzLb5JS",
  "key35": "2iEAFrKW2wzfEo819bjfX2rgn4SsRvT6uwuUVXqt4iasrWETaYFYqLmewtrkBeNT13bcxYknVzvwjTGAoEodx6C9",
  "key36": "bzaDt3uQDd14xdrYTkAzCqZh39NDAi9xLuJiuqcjVehp9kSzNovsjUJGWk8kiu5bUYvraWMXVMDiheSFE2AZvUy",
  "key37": "ytJDcxQbNgZMJe4dWUD1Q8A7nbwDn7YczxHJsAod4ztKUGpftHw1Fyf3zjWVR1tgWWRM1SALLdaRT34V5z6V8wW",
  "key38": "7es5Mv2Bxr4nZYuUF7EWA4rVcXaGyS3iEAtsQEvHNyBKYKYQehNJXPSHp73WC24MaTmNFaiaAx2kWj9GJLHFb2J",
  "key39": "5yg2EquDrPBwVJiGnT9eVBb194izz3RqxvpG6CgJBWYkf2Pyfagc6Dj49QWc8h1txxKgH45nMwMGTEUxZzAYxTc8",
  "key40": "scpKpCngNvaK3fWvqtsHgDGLmrj8YttTEEzpRGKkGqCzGQ2w6FRZJzyfpTpkoCdRavjvBqUu92iLEaZBnzGBGEo",
  "key41": "3Q2wGhxGprxWct7XTTp68Mw8iXgvmPyFcr52S4MS7bLKjRB3Sr1xj4Ncq4QfZwEjVL9gkRnPbLogc34gA3D1RfBZ",
  "key42": "6518KNhKGyfrUha9QUXnQRxtT6tabuzhBszNXRRozxzo8mBcM9WVgfzG1yTijPwcJ9xJgcYPBpajjVZx8xxzYURP",
  "key43": "3wbpJkqVRrnBJ1w545nvrrevAqLdG2pyHLaFrd1sVz2c2adnqE7fDvaaEXUd5y7R9R7Z5MnbFJjRsffoW44sqXuB",
  "key44": "5RNSkU5J7DZapgjxcV8t8a21D5DjjBjqVyqH1dxuJBidHzbZYLapw5vMDp2bmRqhb85KDV2qvya68XvVhSXRuzTX",
  "key45": "63PzLcC4KTTEKNEeHD53sEDwi7oJFY5zKqRNKQvuq7CZicRYvqUdWspCmSJdntjVnLcg4CBMXJesev4igdXF4Lj1",
  "key46": "XnPiz5MCiHxyXvPDSj2HoVSikZEM49LHXxydS8eY4WjaCqvg46N5VMiDJMhWUtSAGV7d5SdMqP53A1p4TtDVetm",
  "key47": "48e9e9td3tDsErMgpAkkVa6dK9KuZvYdWAPXWQLXxK6FNLjXEZ1SCagzEiR9KLMyEqSzk9MnR7crPsix4wqNs5mw"
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
