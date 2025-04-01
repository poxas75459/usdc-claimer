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
    "3d8BJ1rU8XymiFg4jsvJirv7SrA3U53eCigesuaT8UucquYfDaSM6xpur2LEqUnXb4A55HbZZsvCJ5mtrMo5XG2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWEVAkpCbMpe9cEWu9DWRPyM2Qu7PxGTbj1yzWr2o4CjkvnLgHamvPhH23JcpFbUPZ8mCuezvbmi8CzKEV7Mfmu",
  "key1": "4h95WSTgTCnz4CDy7hDQA1CuZXopuNcSP2ar7Ap5qYsppenGzq8WKDQoSuVktXuRsJAror1Wv2rprACjZycZzMdE",
  "key2": "2arRHMhLb1iWcrZthDLQCN9baLaBzs3B2YyZpc29ja1hpqfA3rjE4qQr1zRmqMeUUiSyipm8opU3r3APbFT4aB55",
  "key3": "2YXgmxzeKja4LqitEz3b1D9rZEtSqSFqRC2KpKXcNsceX8tWDmgXp52beQ1P7agNoDaFxCduqPYqhv9oqxiQyRVc",
  "key4": "3bpeauq24qt2mWFhyd3wxPX9gHdeLKnqK3mF5yoym19AZVVaRGYXJDmAEYXV5Q3wWEpb38KezJhJDnj7nyDimrZd",
  "key5": "5pD21puFbuHkChRgNT8Cnk6xgiRK6biUHABowkYXpHz2MnvbmU2ijsq4KRfTkAk9QMQB7rdRV3ej9fvbPzwHPgH8",
  "key6": "3HYPSchM3WHWSJvMGFpqBUhMb6caoF6ZQ6L8cPoNkTvucy1qtU3i1ZCW6JBV8Fm9B5uH83VJZgQqsS2vkjBrbiuS",
  "key7": "46UtUqVCLd6PPHboAAu4whD2tKXwgH1ey7JWuFmUcJ43xw3PvBo3LZ46KaoyiPV41U5NTRks5xtqco8dMiHk6ZgR",
  "key8": "tJQtRu8qkaxNsPuC45xwgNChECzMc1v7EJ98EFEwQjacnsE6GYiQa37io2zGSTNfRZtpGqW2LgJ8nT9QfacV8Hx",
  "key9": "sv9BUhPnAXDdb7LiaWJbQ15sKuN6emR6WsiULBekW2qwYeYz8bUB7BnW6LF8qYmnv62BfnnedFpi8YJjApcNhn4",
  "key10": "9EG6T8vPVWkk2C6SRbZYBfMz7x2txJDFrCoRTNCXBfTjPYHGWif7FAA35bu4gKviX6FGRfhc9QCW83otGuG7T7a",
  "key11": "LKQ7yEtRuFDnsMnaEVm6BDi44LEj8T5NPbrBUQFs5QZS4Q1QT92ASNiueAMmXGG7bAwQr1vi8a7bEWbJ2618MpM",
  "key12": "4n8D89S3tnz6v31dBcrxSaaSqNeg14fKUxR9QnbKBYGpnScgcWQ3CeBni7iVeb8KuV67haWPetwWSzitKKCfS57k",
  "key13": "P9ZR9CarH2hM9EhW6x5SGmnbPXakvcvx3BtbHhLZ5DuvcZ3PCcGrSiLqve4wA54vnLgvw5Am6cb8XFT6KNEUCxM",
  "key14": "3wJq5jBunyJrHupy7fL8tJPYb71adSzrVZZUi7dHdwQCEmVHWkrbTBjnWtkp8SBj5n86QcDY4JydZeYjuTCFbZ19",
  "key15": "4s2uXkrP2Yq9fvqvnztXnkNkSnKFWoYn7BY3hp1HL4GVWkLovTJKRn4fXtHZPFMcV9EnutbbGvYoaNmFomCHiwam",
  "key16": "27ouDomd4QZPCzY7xDCpLh29LNprnJ7tpLQEko7RvAd77VofpyrAwu1ySYQgrPnpA6CLDk9FkNu5vHKz89RtfrZD",
  "key17": "PcruaLUJeBP5KTm5tm7do4ufvpSvRWczFfrAaJpVq4ghgdSziQ72etPDvGmFBXwVDNsmmE3GTXmHGjUgEEpxHK2",
  "key18": "5d4VuGchCTHYSXh6YJpv8XYrm4juX88EzN63zYb2w36L2BKWAodpTcrByJ7VMzqEGNKULfWBgKoo3yxQgFezCLS7",
  "key19": "2urwX49PEyc6w2dGCANt2djf8p2KYHQa5zTv9g1g36sCLyx4L1vUVTceHckngMX2yWDQDn5mqCwyAUJgJmt1uJ4P",
  "key20": "juY7UoHPd8AWMscSZVGc4N7hDj2qUGBu13cmAWBNhLiH8LYCvVddX8sLB6H68rus5X5QZcSHmy6rogqPp7RrWgu",
  "key21": "4oUsWiGWFFHHAmGXxgptacS915MbrCWKDs2xYRXkc2pLvhFmneY7KcvHj7bfjBqx1pi9RGRuGCgVoAQLkroSWaEp",
  "key22": "2im3JHSxDkuP6SJ55249HCzSncgg5YQX51uV8jqFotEffBa9HvFyaZP4CFDnUnDWBDiFR7rF6iVrHwZ6isL7zZTf",
  "key23": "4mH7iApDFw5ZWqYBV57YfhfTm3fKekkWJggo1DZhxLGyPGTZwsYF6LVQ3nra5SKzaXRST94SHBSsy51g675zRYP4",
  "key24": "3uwGJZmPf5nGpjQsT3d9bwPuwFAwd7rPKW9Y2HStzhWbEfsSPVjbiPScFBKK8fRVMDcAErkytLWeVdDYz7LvJcXS",
  "key25": "3iLRQBpLBqBCHy4QcwgLLAFCNwqEZd77nR2LhJPtAhQMXjVBgLknsL252d1gHWM9fRiS8KG7EtruHcZE976PxqNB",
  "key26": "3jPf2iFjDZ2WMCjCMs64ZekTPYFd8Rn8V7VT9zhYvWpK7HsZW5qiAg38gx2u5uD6uBXJfZu69RULyiuPKyAtFPYF",
  "key27": "TCqWp8VNSkqGgdGBDet56r4v2GQPFa27rqL3FaQzFyAPPdVvUX4safMen3rmWwWk5DSfcU65kYoCSDaWRhiRbX5",
  "key28": "4XBhGxjjuQjaEbLJRXecLkCve7Eji6EcvSj2cKjrtWYk1Jp4ZTwun14Rb2QnQXWJdAFQ7qUZfekvV6wQnerv7M8R",
  "key29": "rtgvRQjPMU7NHcnNPRrRLxEMs1NLcGJhNmdRsMuwEZHqi9UGVTGg6HoYmaEZK9qoytRPcJ71z75Ai9myiSaSrDZ",
  "key30": "2vLtn1tWKYDzKZKdDCDdkThqsuBV1ReLVeoRyr6Go1hX4tfNGorsKspex9bvce54AGqDJMJsztrwPaDQ44dG8ETT",
  "key31": "58fUVRccbJ3cS3VGbm7h46ATBVy66F9pKynUzAjEdd7APuNiY4QfmLGEwreYTu43nMzWtbP7PfH1PxemGWboS95A",
  "key32": "51T2c7YAwN83i5BKMQ3xBg9cSrh1jLZostrykwGSUT1qe11HvhRANBMU6QirLtauiWGUnQutsRP869DgqYyg3KYo",
  "key33": "55qDFRBEeRFRfLeJ1e9AAQHJm3ZF5nHCL8E1sTYkmUNRjNRrf95KMoxMiaEMzfxH2pq4apD61s7D9w6jV3tJtNZJ",
  "key34": "44n7DnHbKFowrwMXPPMmkAPnt7b3PeSGtQAV9Mh4q9gdTUjLmMYAHTnNHCQg8RZMEpoPpjzsidq9f3Q52XGUbHHH",
  "key35": "35XyrgtamJwLTbkagLhJjVkgyu5dphB7tj8BN74Rb7zZdgVSa8U9LPKQxfGcd76PZuuHpP9ArHN3JLdjwAEMwpVR",
  "key36": "43EBixjPdVaQcrXXJ4cdzaEQvtLcM7RhnBZSaC74ySQCSFsH2coAqeFZvdEkZv4ddm1CNfTFmDdCHxXJeCRZK8rQ",
  "key37": "2S6DvzDqZVHaTubbv1yhtGfzjpwo65zCoXFte3rHAYLRZP7bgC5EwSjudw2KchmMZHmAZpLtNKixpKcg5mpv2H7d",
  "key38": "2TUBDT2HXm6Arhwx1jAVYW4XWucpStii8Gjv1Pqi8Pu6bCR2kUqVwiowJbVCvgoXAH2ZgQVdK89Yg7iddkBifNEV",
  "key39": "45Xum1qr64AF9QfvyLGxiDbSNX3mPyfK5PWmbGjYQmwGrST2PkmtbQcedzvR2NZtw4RUjTe7vK7j8z1fpuVA3ByY",
  "key40": "67Wd9tDZVFSo7mbtuQYXufqDKJZSVfc2vyW8bxZ5ZUe3bDmJ25hbndHNLNzdD8finE5PD7WjzAWxEdBwHgeAr5pM",
  "key41": "QdokxgfMSdoFM6nws4ZL42mn8WpMquav6XEYvFrqFSg5VnXCrkq8M6ayGihjFGyqCLErhBPrW4FzJCWeNaa6tBf",
  "key42": "4JVhuDmWVgkXz57dCn4dLE3nG1cudJdiuM3pZ9amXC5pqjv2eD54piXniUEL3tpjaDRwEAfavswv36oHiUoVT9vH",
  "key43": "4dEuA6taJFG2Rw5dtzFgLegpMK6Sy9BETbqRjqPDaMFG6PwWJoMttvZXLhq1NuwEmzUqP7F8kqdqGUcnDJcmoWMm"
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
