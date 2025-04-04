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
    "61enFPbzoWZoLN9T1EXePnk7pczUbRan3b5oRMC3UmiaZygZ56PxHvzVPmdUN2cwm7pWCCZmCppV8tJ1FDh3wmjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N97zUwxgbC3LVvRXjDicbY2ZemXzgx5JWCGf9QUqtquRaeQ1V1Y8XNrm3xJT68uDtNoz4ae5fMRKqMdVRA4Zhz5",
  "key1": "3gnLMPo3oQFt7Y8VXphieQKyFxs5xg6yCNYbX4WQjoFn1wCk6RZaRKksMDFPBXeCMEEwW6d5UYNPpsCRwtPPaRYB",
  "key2": "34t6XfTtQGfe564kXKSdyw8xvjUMyfTjpddNEhUDb9Xm8ko5gGbZFDmEnESSxc6h18REQkf8Yo7hm2fd8BQCtnnv",
  "key3": "2hf3gUfGS3VPznjREfxcfcbNc3sGNrVExmMVadGYvsmUUdUAWuFJKNMB5zaiJGX5JL6Kdk7zUmMrKcdRXN1bzY5V",
  "key4": "5k5b4SsHZZWzh6akJ5zMMDkdL4CpDYvEfGHcu7nDaa5EhWwKtgbqMWK7GKBXH933AKXedKNwNFyCgNXMT3x9GAzq",
  "key5": "2VhbHacjjUytn4Fys5QHQGannHbwQwXWcVQrqxn3RgfkWcyhgLxxTBh5fBADM7eMBaHBLV7MBCLCeGfhyecVjrsY",
  "key6": "4eTe5TgufmrUYiRu2598rnqMibwxEcX7AgEQ3DJsxvm7s8upwU6gMiaF5zbdwjARFBvh1XWokydcpq3fxvLFrcJq",
  "key7": "512aLRvPsbAKHoSxToNUiLmTaMfE1bsXUMvdtPQeKfQQeLsH8sfVfcAgQ8fheifFrp8JguDnUfZGMzyVc9zPhNNb",
  "key8": "3PcxrWvQr96tGotjaGSZTevFsVVN8gmTpnAsS6QjAC6YWfo9YhGwxXcHNrWa9jbHpvyaSJdmppXkRvKqRssgWsF7",
  "key9": "bA8fyWyMKHgnKFvUPnfqPcVM2udmkv37wkV4T7UY8oX9tm9HMbRx34auAC5wMPCx4QbTaL6QZxrM27CBXTNbmsT",
  "key10": "sx8gHSGTLj1VhV9dMhgoqCeHoK1TMA76jYMnzAGjAUVFiz7k4ZQ98yTqQaeZUcwAhXS9sG869wUbfjiBjXWSCJg",
  "key11": "ESuNanCCeTCAN2YSVYFtX1vXcvP4eMvgn6ZKpt7fbZ6wVhek72FQX6y4KaQtirXRusFARAYjivqCKZxZQY5HzG6",
  "key12": "5J9xwsfaQSKnn6XC7cUrujYXo9ZXJM31BavKj7CRBaam4c4BVYTXPfXYFhPrqX9JgsxmbFPbJRE4Aguw5iPygJuj",
  "key13": "2rPXZrvvwMQ5H7fMRwUeSf7s6g7jfj4e44i4LDJg4vRx3WzDH49HxEAusWtzsLcn6qhakVTPZQrghnKZSy3fEpBR",
  "key14": "23Zr3opG8mHMoE3wyKE4kAzt1vHAuGCmWk2qWfzdPaeMdUT1haap643JXGTkqRfFRz2kjP8fqzZnyvUZgaWnPc43",
  "key15": "5kk9uzCRmcQxgDaDQFFPCvLuazQMzotcW2y4YqWeX2HMBgsutWXxjq1JuSccX9HtNHVFoCcufrpMREkBVBFajPVF",
  "key16": "51pQgYMPPbDDtTbY2bXc4RDSF9RV7D9iK9yrGubz9najM4V4y1vn7aGK5SMG36xgNFtytcofQb8Xu69fw3caZFS9",
  "key17": "bdHKWguKukKEyAdgUpcYhoMBitvvtTHg5HBURcest7iVSTKrCUnsfErZvzvHGsXvTA3ZC9vaJ8qAifS793xwLtf",
  "key18": "52yLmJfZ9zWakxvfdfQV7959MhSFBEjrz6WuMCtWLqVVBYdpjtGHcQZnGqLTDjn8fpZyxHNqQynnWpRdZXz2CmKv",
  "key19": "2cNs7ekdUPiYNgKCbEh7tt9GeskABWtMh6kYE8D8aL4cUbrnj1wLHx81L91jSCt3NwUR3ypYJkKkNgHfvgVwJQhB",
  "key20": "5cwTge9cNWTBv4YNvu7f45ussaenBV19Z97BRi6rDWPeqPgEvhL4wC7nEsUDiosiZv7sDVDxFwGuT7CQjP5DsAyE",
  "key21": "2y1WHnVyQob2iSWjpG55THZ3bB1vadskqnhqTag3KG3JTvV3KnymaPuuMq7yjDVf36H2xBvLfgarML48VeBQKw7v",
  "key22": "562j8C2JsBTgSh4a4e5QKtptJxo3dLANZUE39ot98pjEH3bBap8zgXvHogatwckMQo6y5MTfxJh8Ng7edcSoiaCw",
  "key23": "22pNb8J31TjVKeVncGtaY3GStaAAeoVYShoEc2QZaCVoQsr5mCya3QbYHDspkzyYQ253KmgRGJSjLiq81Apos6i3",
  "key24": "EG1qRm7cwvNzfTBqxYBQH9KwEUr55au8mM8F6FasPjy76xvKYRefeVMVVnHCVcLy8LUoXtX2bxSboLRcNt1cxpk",
  "key25": "34E4nuxpZFAetuYrq3T7hPsuxXX3WwyspEH4oWY9jFxHo8HqgM6vzYZERm3xsEtzHoVuac2B6bCQSdSkfyx17dTs",
  "key26": "vKCkw4DtPKugJkBBqkYMHtb8RqZntwNrWhrrbxU9DJbk2S16M273UHiMpsWUxSHgya2vmaxwbouRrrs3bXrYw9R",
  "key27": "4N27KXcKSbVWAysJW2rJJKw8TjNvbRob81nq2RxJw1EtRpXS9wj5t8eFS7Jq25uhv3FXDa2hgKmQuheoSedac2LG",
  "key28": "5dXT7hnSXEFxZ5H3Ewydok5eP442WdAPtaQVw8u6fw5VJUZprFPdQKDVjYNBYDNvg7rcwpErvtdnh74mjtPFNiz",
  "key29": "4rkJEm2QJvAZhwkFpHLRdcyYnu59pWGXeBabdfGBHcvzM3iRFyYPLpARZEHeaQHgbv5nYd6UkDo6sdb7r6WbbHTg",
  "key30": "nKj5rgEkUju5yxKVSHQiCpWngzpprVGk6SivsUN2pN3V8MWPUupWaYwqHqdkwnSiJfiq3LqA94YwEsqtVhuD25L",
  "key31": "28Dw62TRxVQ2UyurJBR7d36XbTW8DdQfiUyVhyU8eQUhndvnBkrkNfyZyMPL2dmhKjehfbWkkgWrQfSCwrdqbbxq",
  "key32": "64x2ckAgDZyKAUyLN3ZUQwcxR2PLX9RvadPHeye9ZJarsUWbinDHpfpcdxVeUTJRaQN9ES3NMb14j5LToUUFGXaV",
  "key33": "3RsWcTiaPTwRbXN1KqWhiyfgnjWFrsPDV6Z9BuVwPnFvxg8m9EjKoJ68wUduy1EtLqnjZww29MJ6E5KzNHQdMN2M",
  "key34": "49gbK7B5a9ang4CMyHTa9mMH9QAfrioSPrtL8paia6rBf32BJpbCnv5jUkrCdwLmkRYfxes4ynBNWe6KcEpDgwzE",
  "key35": "5wa44izutB6mNP8GAjZyTzxNBnEmp3ffaPGNe65U9QxF6Hcj9g2SRKUczp9pX1PX82PLpRRscVjYzLP7nHYtp2sT",
  "key36": "2pW8qmne3sDLsReghXRgGrg5QdWCwMJuLzdQFfFjUBWRFc5M4DtSgxVjR1SLXMutZ8e6pYfg3SR5fvkKqPg7jdRn"
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
