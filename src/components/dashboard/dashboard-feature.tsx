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
    "2nkKDTrLkWyaKvwpkha9qiLPyYjwFgTtTRtXjTfJ6CPbCzCQb1CteYtbaD2fAMn762VYFUsPjd2K6fyJEQxxJNJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wr4EoYstFi3hQe3hw9p4fHVbvab9VeBw72J5HD5h7Kx5PCB4WxCvjwvozfwc1YiN2Pskj5nqUn55FiWxCaZM1ky",
  "key1": "4R6EQYf6wVx8yCUnApxGaZeBebQZkuqYYwLcNUsTWes4C29TAHxM8i3YdfZ4gQqw4UvkNNeWLSryyf7KK21URxfK",
  "key2": "tqKa5NBZ5sfYXKYZ7PBUegLrXpJztWwgugisTzM9owHGvNv3zUABQjvJ2fB2CnQE4BTnWtAzVEftsjKuUtbpNuR",
  "key3": "5jqz47awv21L231fk2fuHU5qASzpZ4oGq8C9VnheQKfnSaE8PHhVHqGDb7JHtDWR159U6GnRcSCwjKnTTqrJZMwm",
  "key4": "36z8bMm9MBYcuLq9jfxSAFYTq8oV6AVe3NQbbxS2JR7NcDeDsd6AvziSXcRA3DXsB5WSkLbKSYg39zz9VZrK8Gh2",
  "key5": "2jWTsxdkDSEWTF1dXnkiE43j9iH9J8RaPMJsjuEWk6BC7NdxznA1kGsm7JKp2FsXRwde7jQcGoyVV5z7NKbMetpJ",
  "key6": "2pHtdbCEAqGcmdWyUFEPxygFtPXquP2jwAaDNRJv7pttcCCAAV1EiLwhEyAJZ6gY89fzQsZ9WAMyNJJ5evjuLCBU",
  "key7": "2gCaSRMGaA6cfcNKFanPVAB6dWutZEPMZJ4Ut8qiiucBxz6xupEPtkED6v8hWrJTW7geZXdAjN1dMFx1t8A6L8pW",
  "key8": "5Ntgy1sJr2fPBif2QsBJhqCZ9saTSMif6hbej5bPKbCcP3nNmXnbxr7vQiBRVxjRaTy8Yh3QCX3sKX9T7wPnXvB9",
  "key9": "61tdqwoP9oPaX7ccp155ECu4szRrpYJh2f3x24VJsRQoogzAKPszjfh1cLWNSGhSXGTCgWfNCHrRJFttjNdJrayC",
  "key10": "5bp51DJiNmoQ8sSo9RzdsUWz261pzKWZwUiWffkHGZ319KgZf3rXNvygVJZHaXyWLJsay3aZgGWKfPeZyWYpzcEF",
  "key11": "3pf3D4ssEHf3huW6ipsiTRStY446dpMmSzGRTThxzhfCTEMQ8kCdjfg9BA4WmDMt86gpHaGpFB5UB7yqEQ9mBoan",
  "key12": "qJEBzwX88dhMcmsxiBki7Swu49YNaaAmVuECJCa1ZetTWD7UcbHUvkk7996gnVz5pZaRSPP9Dajr3nueoRZuFFd",
  "key13": "4bFLhks2Cmng4nBtPL4Xg9Zqymsp5WCW9KCke6Q1VSWUxXYJBjjyJB6sJkhvU5prbFPbo4b5REVuEa2KFPJ5u35e",
  "key14": "2j26EjE3foDhUDAit4ts4kdj8du3MG1MtGXsKgHVUWeQHMsaedeKdZxiAR695UNUFN1CxtQeCGmecsd9A7eaKkdv",
  "key15": "5egRuedQT8bH4GtvqUhjPBqsx1Ax29y566oQrqde6MPfgt9qFJ79p9TsRb4NDWmr9GVJfASGdYFKHHQD7nSxEbhb",
  "key16": "2Pxd7avKtYAftiH8X4PDV3yGvzXBtYwF7mqDcN186FQWL2EcQ8XSvJUYdrf8rJ1vE3utksxuziDURVrZNthYGZgn",
  "key17": "3vhv5mVBaZbS7zMPvcfspLccEB2Bucfz4bye71ggNDDqMP5QiyeXXNhkeNsKeJ4hKcU9fs6yimCZDbDNr6KWiik5",
  "key18": "5eAdkAaRDiah2F9tYHJ6juKqtYsKktHfE5DzGBmJDJ2NNnrz7qxXRMXNpp7bkWi1Vtutu4UuJc7YU1QghtL83Q9Q",
  "key19": "4s2GBNRd5H9NqhYdW71uEe5QUK8Qaavxa2i99Nbhrxzx6XmBkogJoRbzFvGeWuDNegXjAPuLa1grJApjGfeWpzHg",
  "key20": "3npyRvrbjovTWUmKBiXwf4Hjstx1pGkWx3VRoiKVqDVM1dS2y4jJo7S14Z17jEVzLbHyA9MBDigYqeeKhyAKp6Ru",
  "key21": "2yfgTRTJN5fsHHj55UrECzcoat487KPSTRoAr95k9kytjWu6ZGLFn63dRT4ZPRJ8SYK7A2a1YxPYViTr4zTWPWSq",
  "key22": "3ZNSXTBVxKtyeVAiJancGwmmtPqGBTSxcPvDEyhVKi1QC8L8NNGi49zc5vW2fZxTCDMQkLDqR7Ktw3runHmqNAQu",
  "key23": "5NR1uMRixc8ptzi2f8RbWzbRJbGXp3gnUEBXyBBxBGToUgsGgbd4c9jPDmDuJiAgA5aVwUNGMwT1HivHTxJBVMNz",
  "key24": "3gw54Ep8sGjoRL76qFjUrZc6oZHCANrNcs9uFRCJ4Mb8RveWgpnmkGHTFADQjV7ofiGLpATbQgsUzwa99RBAg5fD",
  "key25": "2Bv6nRFr32kiaPhhJJYuFCUVnPimoDzAA724w7Gk5wZDDad32HbYts29ZHAL74fQ4bVNfuU2gg5ixWT4wspC3TYe",
  "key26": "27nggpggzNBb22PVXLYWCwm9Qo1aFKMBmV8VXMD816oDr2NeAVJmbrmAYDqhR5PE6hjviaC9HQEF5LGZPF3gTkUb",
  "key27": "5teDqvf1BBerFCtz4LMk92db55KRM4BLfJ5hQzS9ft2euT3VuDvgUCNqDfB6s8zFVwiu5wjKGWpPgbJ2QVgC6tdr",
  "key28": "fWJbXMZeTvaSzMi2GFSV1HXnQyqze21omiVz4zZhDLqV8q2aGq4VvWmvNapzZ1DLw29nrkyvFqxY2ewYfhT9g8Q",
  "key29": "35jJzWLF3EDWHHkdHfBg14TMsPHZ67T5Z4r23nVzkuQ5LicWToooaojyB3itPYTuuzCikRkazSPbuf1gitGjXNqV",
  "key30": "vTymUA51ncEKg6Gv6g4YRVCbhm1g7M4UAJjPDTnWp3Yc67eNtDbwojR2N5ykXd8Tr6tcqkqzRqBX7qBoHGqba4S",
  "key31": "45Dv5U4qiiPRGHjMVExApSwYyDStRjF4529e3J6pRz3Y6pYWwvzzqfoxieNKbaBpDJWixmnxpT24LrqKqHX6c7a7",
  "key32": "PMsoPhnhMgLNA9rC3ucSGEX2RrUCSk2gLNVt7x8jx4hZoFPNPwfCciiKiCdCMsmgRDpUUpQNubw3Wgaefr3ovRd",
  "key33": "67Vson8YPuUCyFQx9778HXgMzUW8k268cubnRcDam7E9t55d8HM8ETvqcNQriWbKURcPQ5b2ZqLPREUHHVhULJ56",
  "key34": "26ZDJdNYrZqmxiRZHJrW1qNKMxMj8fnjngo4UANCMvLAJKfi93hjYsg28kNVehSnuW8gUk2rackS8yuPsyCTxCmS",
  "key35": "4o2Jf3L8wUsuYjJLRn2xyzAJevM5kzyoL6pzaBWQYUwNoXKQ5e2WKPEcBSM2ekufHuo8v6mefsBcrPPMdTDwCZFF",
  "key36": "Q3tKwLLKV5jwNGTynwz3gNjfGWHwqo3RD7oobvmHaZQEGjb6yKTkygHzd8sVowHBckL9vY6LdcSmpreZbKKKUJz",
  "key37": "9zxqcJY69PozXNk6BHLKPsBmjpZSNXv8iTXU96mCVi7R671dhEdb6KkixCLdYsS37VEbSEUar8TVtjnRsDopQ45",
  "key38": "3jbVF2LrS8CUaaTge9voZ1EBKESfAn9gUH1GeiwGVncEhNEnK29kN3zW9D1DFEkqR7NLmNBiJV7MjPFCMERYViQL",
  "key39": "2mXt8kJVYnE4Djk6kYE8tvuPoXk2fEEeyUFUJTy1SMuGgR4EwewRZ2gfBQWnmvATiLgfY8AYoZp9JUNsentLoZXv",
  "key40": "2LtvaqZ8U1jdrDnUQgr1KYksQA9kT2JrK4TUimoTLEXBCZAepuxm7xQbQJPCq5tUL8vvcP7CyiZNJjF81WzX6MGG",
  "key41": "59vQuP99CD6j8yFKY9Us3e4UJ448wM15MLBhRP586DBdrD8hd4Ca82VbVN7RqBZruQhLYcCc1ubekGhbkoHhsjkY",
  "key42": "3Gv8PiytEcFjhvefrVEX3QL5g1vovufKy3HDbZpoghAAygpggwtCHFdwntTxmRAz5W7Kg1BUKvM6UCaeyFn8EYmi",
  "key43": "4A51g9xoC39qmajFYzSb2BzRTjQHWTDvnVWZg9gg7HzvaZNWkDhF7JytziX2PvucemUSMbq3H4AARK83SsuAocTH"
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
