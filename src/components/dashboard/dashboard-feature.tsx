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
    "zfHUasWTqatiN2w6QpYqkPXQPapRYTR5zJ9RdY2iC3uB4geiqLb6FtWLDXkarZ2XDK6ZhcMrc68yQkGE2RPSDNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XhZxVN8q1z47gzuuQgbjopBAjPbeKkifNoJFm8rccJp4FdBfjgmQaprhTTZHjpPVXx1tTWay2Nn9NtgCgCKtrXQ",
  "key1": "YKEGL5hXXAjjpjyH1jUaD38xSShvJyXQ7nr7xXcdZYRM9eyqpXPueFTm7U5X73A5wuRaxG4RVHCQwZTx6PJ8Ear",
  "key2": "2gSvjt7YcNaqoPLbQ6HVWa2hQ1RG67UEswbMPAtoxYxo4NmXvJPFcFqhGRoCPrd7KLRQJZcNDvPUFofSPpbGZbi",
  "key3": "4S2RTxa6Xy8Dq4d7ve2JHWjfTYB4EM2pRjCbPzAW5QVnXQyRdHYPVJJ7rjfAXcSMnqbdeuijRciepWjyiUgqtMGZ",
  "key4": "3a87RqewhTwFYazG8NHG74JitkumDemshHPjPpVXK89vEAnNPD4F3siN5Jt9qiQP7ybKBqUCWx8JH2PqV1dBMFAG",
  "key5": "5s53CRsMs5vEHqofgh2FVtcb8TEUwj7qQHyvW9eFxNgz6r2vBeFe5CYZhFY4di7NZBkCWe9LkxMEzxQdsrxfVqu7",
  "key6": "2NAaxieZHMUmb8WZbugzVLxY7vTuN9GHgjf1dR9ZaBHPXk223gb9X5t1moxfCKrS2Nz5yr3vRPz8r6QDBX46zoVz",
  "key7": "5LTcNhNb7hcuREyRBBRbPSLsPC7qnYv3qEzGzG93E6yEWc9PWrMcrbdDfnmCtQGSuafBGB4H9uyCm7eN6GBeWxAw",
  "key8": "VAjnQvs1Y4hnr9PjJYRz9AgGw6Jm2SviKJKL6RoUHhd7asvedKBsNyXGjR1WdQs6cF555FSvkX6aS8B7tHvmjMZ",
  "key9": "61xmzvL9BpVdcXHLNvMqVJoafMiK5SbZTLZsnTwxZYT4oWRA7izP1b4e2j8cdgtskmFpbs7DzEMMDZ6BhionZGQs",
  "key10": "5ee2f12nhpiLS3xBsm9gNekGrDMXQLwyWV2gwjmJPb9L6jBWxhGwg28Te1MxSQSeA4jCKc9MHZ5cz8UFS4C9XT2",
  "key11": "3peVjXWmATdfriPbZMqAVr5QS6tjtmwdq8d5vob2jMgdcfm58ZT3agnPHsoA3M8NF3AEPDvzRusvZm6WAyVuWwjm",
  "key12": "4mWDAy27HsfoLRHA1U2me8aK57hxs7EFeycCJ6bHH3bRvrP4EWFQE9rnZKfZgE6jarG82rLxPJcpuugabzPLj4uT",
  "key13": "3tLpiuAxHQQbbxBrgXoZjxkWaHBBpsZeauRPKVujrDeYqz9Q2WPRzvLGu7ozCbgqeJWZfhpamTTMM2rGKJxjGNfq",
  "key14": "2vNnGQqeKJaaCmqLtcez1hTyMf6oJJn3sqt5J2G9wyLMMWk3L9TApwqoEdEhHoE8Qkc3X4H6WNswRKTDzxkziEpC",
  "key15": "47mEFh9LcGRjftF6qPFQjqHoonGpEsH89pNvEYc4NsU1rkmQDrEW6wdF52gjL9DAVhnEtugEoavDDLTRFmHY3PY3",
  "key16": "5kkjzSxAbvNamdWtzpJqVwCKjDHCsqwuLF9eiv8eTyHwatbNUzksdaSAbEWYpRX9qUuAypszf2N3EeqzFXPwUXgh",
  "key17": "2RqDN2PNVXxxrXZGW4SdFqQLFbK8GJ7G3ZzuZzFAHP6vyqJqJYpyW9fQqmXCvtnHhZt94yQgY74t2TCNZrjqkQx7",
  "key18": "4R9YxRnqtYDkg97WNw5Ezb4zQLzgM2TxWg6Hgbig62vhLavy5vJiuQRDkS9kXBwstrT6wmZNe4jV68ZyrPVYStRN",
  "key19": "wzt9oM81jEkNdPNLEojwXe86TuKEDnNofhgoRez1JiA1SVUofiDx8BknzNPmTfhvkYJX35Rgs1VtMs8RCtYYh2u",
  "key20": "2LyrUw3Fc2R4ET1AXpagHKc7XHXxz5WymRVDbuVPqKrDBebQTH2mESDv3vNAy34VZeM7kENcGLWudAv7yqSrqPnq",
  "key21": "4FVqavwFdY5XPZvXVWtgH5a51sPtYNqtJ9S43yxGHkNh67ZtenXuHi5p2BzHbdjVf22EMsSv92hQNuaQm2aHA7sf",
  "key22": "2inHdYJU6bnXS5QPi1UHGFL1A56FZgf1XKiSa3VHjKaPtM7tShfPjPSbPeeRG1NtzWx1SN4evLx7qrCM1athoAae",
  "key23": "4DqhNwUUKDyK1XyAQFihzrV5B4x25XKWd6GdFXaGYHmG7XvKTXcaP7ehfFcrvAp3NLNvj4LxXKCNyp3ag57AQtg6",
  "key24": "291PD4FqD56TeZRSpaEpFHW7QNBGs61MgnPtoJ7RaNE8gt2dZnvcNQu2jWazrQijAV6XnADavKHVffHAEHvV18Lo",
  "key25": "4YWByPL9uYyVGdKTLWRU9gW9DdBc2bZFSbx7SC2Yvf7gMWjTFgUxTaPPgPR64N48dWwcn3Wg9iKtUVBV6u1DaPCZ",
  "key26": "XjQt7DzZcjXyppxJJZ94L2S6a8kaxjMmFe7nPRScB3uNqLzoK6mUaEPoF9dLo9jfhrevXY5CYMTTbsiFWSqteVh",
  "key27": "25axaqrEH4sh3ZS8Bg9tvgqri6267Wr3iT1x8B5edqXYGr8hE4spVtWNjjyFzv99eZZjtxpkctscEHm7EBuEwXHn",
  "key28": "44GrfmBCHRuKUiAMw46hBD44RKAawGSotGSuZG3Xnhbs5Zv1Fumcvj7xDZyBA683VGZqZpTmsiT7JiqLaWqUDtEZ",
  "key29": "2UCoLmNPdtWSe96w52SAdJcUBCBAu2uTDZ3rJbHHqeTL2Ak5X82w8xnWo3FMgrotWyc7UZAadAuj7TQgyGaBAA7P",
  "key30": "qwKRsaemcR54MM8iXxk4N6fMcUkkHCkzEehjRVjRMmMHtff1vfvu5cWAEsjTA3SeRPPyyBj6U79NJpwcLLu4QDJ",
  "key31": "Dn1hhVeCETbHMi4r9QuHL95MSjm4DYvVEf9VijLpQRNPuUQEe4e6Djqde3b9bhpowk43tfjuhH4uJkySjWjaTca",
  "key32": "RNAVhdHDBae5jLjX7AWM857yPHdc39hzko2rcPJr7pLUMSNTj7LgiuCBNpHoZCbsJ6RgYBvz3AjdLk72XUdJyQT",
  "key33": "5qWKAaQTxsnjuamSVYifewPmpqddWDN3fKyRbunj4oHALas9abGeuVyuf3UHPCHFjqxnPD77WF9RKxNpXmB71uSE",
  "key34": "6qcGgrQwpTmHkESk9WNP5LPfvaLn9VuCNLQH4TCwbAEKhsHLszHMJN9PcPDFemiYU8qS5kNbYtPpucigSCd5Qbs",
  "key35": "4BougkVyF6Kro82X2g9gLxHUSx7QNkCua89VaMtXtNv7Cchg2Pk79LUzEC4LHFEgZpuY3GZFo8PZoW8hMVpgYd6r",
  "key36": "39VW1UtnkaieGjJ3aJat3bKh5N3AbxzUsKTaS164twdSJu3UNu5yj3Wr8MGWr8dF2JC6JyR9ZDuZTgE7yF15L8Uc",
  "key37": "3n3F8B4DRozuk9HCEZrvGLv4Mj7nU9RakmWUZW9xheQdfYxRWqLhBLT86FN8ZZXtyGAjfWqxU9VVm4BPWTA7zaz3",
  "key38": "5eVf6kHXAu6Zo2rodPrkhknFFukQdEUJafJZyAr1qxWfVqSSMAwsmCWNriAxPPdJZo4rnuX5QyCa5mq4oNDDEK5S",
  "key39": "3NBidQ3jpoMcChA6hhAF9Js5LR4Kx1nPkk8AJ9G45uHKeWU3Np4SSMoJcbikke9W6pMesxzAR8vCSWwcf16ENAcP",
  "key40": "sbg7ePkVHZbpULvQ1NXvmsYCV66UkatiYKSHg5KcW47BaLq7VnBs9JJwyyHLZ9VhAMAeKQjwvidnDUfBmmssJKy",
  "key41": "4cn5J4pqwsstGJQTPig3Xv8184v6kHf3nV8SVVjapRBcExUCWGGjkfv7VQ5NxDaxze5zKi8M7uj1kxVTv5VNwDgw",
  "key42": "3Sacic8fqka5jcQunS4MUNsZr6NduQxUXDoqyWbG16RXLmSgh9Sog3UijrcdyzVtCTtTvyUcjj11t7R1bqpGcztt",
  "key43": "5THsbsQaPgfRMTBjgaKoJDV28zBswx5vSbAK3Jtk5UYpXAFWwGoQqpAZYyTjiHrSPAzMXNAgtdzVjp1j4qPwv1mS",
  "key44": "4UxJZMBr3FpDH3zyhHHdkfpF9Bp4ku7zTC6r9z7f3ryysQN9n4NNzDaPaqgjNMz8BSQR1Vr3XCVJcx3Hp2SAfee4",
  "key45": "GXSVEj7Kh92u1pHBattLdDE7HwPzeMVvDzmu4vVi6LGw6QqURwenvPho4GAM2s3ci5jJK9Zpe2Z14sX8GRnjkBP",
  "key46": "5Mq5KBGZEVv6eBCN1cQDJN7sEy9dTTDtuAM9tnM2aaKqXHGQKFXKr9pAfmDdqYYaend2YTkiYPhN2heRVd2oMkSR",
  "key47": "4UZFrmxLW2J7q26ycj4wdxKNgfhsadMx2UDyYJNBDVQngZd7e3uMWsa4Q5UH8JiGySCb9eVNHAPqXvSP8yfM3QtW",
  "key48": "2S2jtSamDkDu6jtFBhxkBaYmvUhXdM4R8gaNmwFLC2owrEsadLSv1cBfTgCvwmKuexzGsxJPfxf5vF1Ym1yTceLm",
  "key49": "4qhCWU4TBVnVY9sK1nCokmRu34cZrr69vsYJzDHrHfQgz5AKitzLPzBM3DPhxokp43Cr1PUgfjgCdF2CjSd7cCKF"
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
