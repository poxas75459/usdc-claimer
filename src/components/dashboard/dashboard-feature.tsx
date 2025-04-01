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
    "55B5EKPvKJoHAikoj6NCcfzRUjgmnrSZcfquD9hzjr4yV9cWPq2FUse9Ko5jhcvSJoGYdtujuFQFCGKoPWqvnPmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLGF2m6LD3gpqFVM3HYGV1nnKUknqAdfkdEGmrobBhn9sd3LUcHG5rGsAdGDCDGX3T6NXt6cdQfc7ZnbvTCzBwD",
  "key1": "5sF6cfo9GyeKcpsatLVBiAwy4WnbP9qmXwjsD5a26aL5ahQUkuGvvS4K5Ym81JxsvWCrsyYoGmHnApr9CYUSrcTj",
  "key2": "5Ta9VjbAgXGuEoSvxiqKXHfP5HTqqUDCLiT4FJrRMRFkjThRsMxHk4ZzCsqWYJTm8Ay3tm9t8r5vBrRnk3uuCxmS",
  "key3": "3758qB8oG7gqrn111pZQiEn3hJGAW3bGFju1dVsRyPpPDFaQNDigxxmmcuNnyYWtVgNVACUD2yPZbjPJn6W59THh",
  "key4": "2P1xHiNUgrwn3E57kRniy5twedQbENt8reEpDej3FJZsetySiQcEdMTCyeptayK7mJkvKfTVZeNEgtkqtsRDgzFE",
  "key5": "4JP5HnVAJ185URNRR6hChCc6i2ufn7H9RXtzfrmLbNvZ2srCB5DsCFkWdYTyjS1mW2bEyycXKRCLKFk6DLgPcXUK",
  "key6": "2s9cWrT5tvqNHouPhpYb7KhRmB4GDgjfv5gPynn3Y24LQRcJDsEnaUAeunA7rPgi7i9i5sfEvpBFFwLkfzXPyF1J",
  "key7": "29yz7UXKf6TGKmt6DJiePCQr4xpCgiGU4racgjZw7FtXehc9icsgpn4ZCDE6cwp3HRtmxeQ4Lxko3U3BThG3wb5o",
  "key8": "3cFmuwZEcTNpTAbNeRs55J6j3ebJWwcD2o8wwfPz4UoQcvTeV6uwJENuw5gkK9YjyVwRTQEdbShojubLKitmyAZP",
  "key9": "KAtgPETxD4ck9pqe4at7MQ29A5wNd73kNYYLUqscQao29N3y39jHdGT86qDyJsq2RdDwx7M2GofPR2o4RfM1FX5",
  "key10": "3E46i91TcSpZwFkkUwuBLBXyFPzpn3gQxxJpE8nT8SqcS5h2jSC3BpCiVX6s3UsojSEEJYhDxyUU7vWxJtuGgGgD",
  "key11": "5QKWLMWLf5RyHe6cEL9weg5KZ92MzrxdN9DhEaZR7gB9FvK1jXAubN6bJKDQ3FdwUmiyQEHUkEzF1LnJa1bTN91d",
  "key12": "G5ffbFJXV3jAEHkPjovZLiQQQEgmZVhMRcb6tAX88kdwxuCT9Wi7kF63y5AsfTf6Rp8Lbsv496jokAneLdLcEbK",
  "key13": "28hm7Qjxf1toGNaTXfJVzVhjrHsBueFTgQm9mHvd7HRwpkb3yNixwra9cxhiLUK4u2sKtPMZ2QKi5pVz3cFdy2vu",
  "key14": "2CAfSkz2uHWJk7gD6ELXy2gZrAmLqB8mcmEz1sF5GA5yNBurNfdHjYcH5tkWwxHg5JRX1JgLgoftDbdmoqvHNbEd",
  "key15": "3QzZBc61L1Y3ZHvgjZzdYJXeozQyFNB7Vca7Drz8ShWo58qpyeBmhh65CUisWrZjMBne8Y5KwDx31YY46hS1NB4w",
  "key16": "29reLoQUPZSWN7MC9ZeXx2KEhmGy4Rs3uHKcM8ao6K4tkW6xmg4dNFvfRtX5CDfXXcDhdbkRDfejkrUrFM713h32",
  "key17": "5MEVmcWajpgJVt6GvE64mSssC3PHL8eSJL313ws9xyQ6YkGXhv2owvnPgb416FXivigKgHFyWxL463AWvBZmrNNY",
  "key18": "5tk633LpsPWY7pRVu8W3FhGCGu3ygo2ZrGo9EuwfSc2n41PCAyK96uJGE3AMWg9ajET9HA9HBjtALC6JY63xwuv8",
  "key19": "3CesgqZDWTyxVVLCFudjTsrAt7zwTzcLvmZYUyiepksrK3hmMTXeErKpQTXqqd9e2sgQ812V17Vzucv8e7aVi4FB",
  "key20": "2uGEFm2iBwhjpzgPEFkfkQUEPKBYEHrE4VnKbrs1N8CqxBMc4C2sHbRDaDW9jr7QmceDVP4ECTFhk6mt5zKWv5As",
  "key21": "5sSQes3sYnUvzF1ucsS3TKZeiT1borEmegvkH1kn56xrFiJ3thLZ5ipyrRMRfrVVfUTexTN6Zw1Ym2PcSNMipu1p",
  "key22": "nGcR8m9Eh6R1oYPvoucYmgV46hnDoLUWqBTZdmCkCB8mdLNLeR8bXHQJXMXoQ7XDCDUQAEo7PhKCzh6VUKJNwMJ",
  "key23": "4RtivDYcivRBPYY5ftar9stHwzycH4GNkmw7o8EUd3pvaaYj71hxmCvv6JWb5TewsBdBmEP6JuFeshqYnrcFb7zT",
  "key24": "51ik8r5NNQrNkMxZaxvDgZBkJhM7heS7PFBynsqq2THPysLuKBLBesigkF3SRQTT5C591tVGaHFjecRch8rgK6wR",
  "key25": "2U23ZwsU1v57Lrt5srju2f3wt9muFeXWkLTGMBMTkkZkPnf3xYwy3oC1AiZLguRDDkCzcfXyj8bWLcTwNa3eyUVW",
  "key26": "4ALifFK82NuNgCHkapkfwqRYypPyzKNahDzW1rhG4hJ32SYgFXVwqZwg3ziGZBaLkKjKytXHb5dvYqCACadgsn55",
  "key27": "3mWG4MEHj4p9jySwrRXxQn1iqXmMWNtJQF7jeP2VnDdNCAPrrXtmahESJ2JADSk74uEBcR1KGajpCuZwAxP881om",
  "key28": "4ZNuTvBGkU946XuUMcozxA4C26qEupLxwDV8zvpbbEcYx2ko5AEMsAEjj76DjuCNkF4FT8C5HS7sN2DXdXEgEbN6",
  "key29": "2AVdxnQdKoFvS2bc1FRpkzKx7Mf3QYN1eeeYKDgzszQErHGQSJCszN5BmrXZL7v7pHhY5vrs38AJZuxinUAGfTzY",
  "key30": "4Ueb9rUU5seSh7pwUhDhoBMomNdHXbSXL2MegYSuqD4MBPS2vd9wKyYeL9dVdW8DZ8pqudtSgz96aTmdwwxbc23J",
  "key31": "5BqGSvqrqn7UM5LAPrEY7iwP6KRPjhHHJcwPMQAwYRXgtLDBf1DXXq2nzwBPuQe785TTUodtwiajqczE7TG8Hm4u",
  "key32": "2YgNYSFvAsXssDedsqV4UskpqWXUjSTDKQtSveqT6ktcnL8Rxffrq6E8kkobHFLGuMitzB196CdY6VBUMQgqqSaD",
  "key33": "2LZg2ihhVFHmRzBuaQkReydRenypwPt8NiAe9zqzrSTeHbTni3JdM8BSbM9eef89u7Au82V84mwjNmjdgiDp86HC",
  "key34": "2Vym414WposBQZa4sGCLh24MNKK8JQyDjMw9oZHsR6r8eS8fatbF81zbEHPhqWex2kXCMLuS3RWHPvkRYU7x81dV",
  "key35": "3VEPMCxrnQkaqWMCPP58cmcq1NfXQNgmh1vKAThMRZiNJP5sVk1onB2bXVXVr6pJ4gDAwDgVG6vELyRJUSs7minK",
  "key36": "3VBVoP89fbgaaQxZvTJj39pSABQHEiExGKr8gdJrPECJccZXbuSyWrgfNQQcTyUyH1mAgQYG6Z2jCvwstZ5FiU2w",
  "key37": "5bhai5NP6H16LAVaGz81RkSGpgdq6GKrs7tUe2VqJT9YvwCWiMTjvH9XSPbcYpnDyNG76qBC3cDvbhV9g46iYhwe",
  "key38": "49aTDWtQMkGGX6M85LdV9pCmdWawiUKQ2NZ2hVBKwL3HVYxPKkGPSWJvdwUEc4TAErjkc8V21jFK267R9EhZ2fZv",
  "key39": "3yDcmbPtJDYQN4ShiyPsMmfcJ6VWCiDjsm9A6ZZNdC34FzvyrQ8hbqCgXsrJNx57ofMGYdZk2eawKbxdn8CaSrxV",
  "key40": "5yFJiD1rkX4wjpHoP5KuszhGom9qjGMCTJu42anJEEmFcm8wFozgCyqAMHnixTPVYL4MvaELNMcf8PhFCQQmkbp7"
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
