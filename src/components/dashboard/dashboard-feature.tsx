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
    "3kkBV9X8t124FL4PyxBLfbUbo5qBRKrpedKHzzpKMNJMnWU8yKfDg7xpb8o64e4qv5gacXYKxyY2qooXGwYsnoiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pydJzQtRQKTqyaeqoC5qyirnUjMTEzxPfi23L9CsUAQke4qZeZWXii6W7YAiP2dgF7xjXt8VBgHYCE4D2hA5p9L",
  "key1": "5atUC8Z1Cqbte9bN2tioM3oG12dfLQsjMLNpVUqt1oNNZSmvDdu7UUqDLNETfZ9wBuAcjV9ih6mAAHwTaQhS9ywb",
  "key2": "3Qg6ySafmV62gZqyqGhNrFMhu3HbgKbqwD19f6Z7qRXfAYGMbYpnt3rjp2v24asA8VcM2ZKbX4By8AMgMfKvcQLL",
  "key3": "2gxdzeZRxMUeUScfzHeppYYbfUvBVJhwPFEc7J3FMs7fGy6qkTT4HXKvkBcCwfdQjQDKSLX4GC9FrVXDzNUVVYfd",
  "key4": "2YNutLLTh1xWEyfVM9wtv5j1rVCdKy3TXdmNSR822uSgjfMg2EGU2HMXGHBhqjJKDnqs7L9noJwJPPDCingxrXit",
  "key5": "59deSn2izfKAy7ii4tCfJ1fXgsnPfoPd1oACf1myU1PaHsVAwKBH8sLGME2akc6CE4vew9a1c45RYFCC284XimQz",
  "key6": "5UW3b1yRb8KkihJJC9FfaEP16f5X6nUKowjsPrC6zC1d1wGLr8Vf7KhbELsKGP3ssqBXu6jTqDXMeBcMB55xG8Kp",
  "key7": "3SNPYV7WqUqvp776bjvDeN3wyQFA5ZxBxbE67HLoZqcq5cKR2H8XE16C1dRzmRryJbZBPvkomW4u6DQ8iRhuGWmk",
  "key8": "58m7ESf3R36QU4rFjujFeJDdbgtpR1xzYxwBoZCmkuCUwFJjXZR3TXjJZmCweV1LUXoHrfJ1QSjtzmvLiWpLcfok",
  "key9": "51D5uLM58nehKAvkWQqGgesMcd89rJdnF1myJvtYHCYyvXf7paaGGqYyYzZBhgT9MgawMi9uiPEE6phGmYFMcUtq",
  "key10": "25bMaR7fdrYpQKZ8qmwfG5G2k7B4Mw1iHoqe68tRErFZRyNTATkFmj2KZXG65tHVxHWgxoZYcBGWK1Niadz3qk2q",
  "key11": "288VdnorDyQm3i9cNsfKGfNv49LiMYxeq65eV6JwyfDws9eRzQPTVQXzCa9tmgb8GwbGA1756Ezuff36KyF44sY1",
  "key12": "3qVX5s45xWUdLS16Y3QrMgyU5u7hWV1ioRjNroR1QM8a3Cr5MGc4GwCCQpb6vCV1AsTsJwd1FJo7pHYVDfGQ3k72",
  "key13": "2Fhw3aKTq49wiZQdmZabYSeuRCKtXqv76KpdD6Qvatp3yJ7y2LDMEVMNpmTr8uZKWWRySJNJap7eS3RHrFx6SKsw",
  "key14": "5FxqtC9Jg4QPa28tP84vqrgqasfm4FtS9GVX2NCCEdCB6uiMN4upN2xtvJ5LeopgbequCu1FKQrxMVqG9iE1e69z",
  "key15": "43hoAQKZg2fzRFzRzXUEAryCwJMSwRSRQb9T8iJACss3NC9t8jmyWLSFhQFfAttwR4ysEDRQaejJbntT3zixE59C",
  "key16": "2q74HM8AhwFxH9BpHpDte1nVkU5nqgdR4oiC2GbJm6ep7HsGKaTpfDTbqqcQNaKpkFwkgNTRyTVagcYD1SAES21L",
  "key17": "2XQqVaD5BgFYxs24WbyBTwojspPXy6C4R3giQbpTw8XCZUk4Y5dNBARh73KeJKLc9ZHZFFmCE5kwWALHFcTk7PCZ",
  "key18": "2Nqq23gpAAmwWqrA8eRcAhSzZcVKMon5dCCuqDrHKiZKnAd99vaaFPkZ1wq5S2asgPDdmqtmVwiZ3gWQ6yfk7rdB",
  "key19": "qFrQzLsP4F3T3XJXf1JFQTpNTRUjXMbA9s4BTNb31eS4ZouTFoWDH7jW9LHo2zBsNV12n4yhJiJQwcEEGEEr246",
  "key20": "3iNj5H5ujYEKZtFdWHB8KCDSr6SYBp5CkbVrFS6py9zjyGBhpBNXgYyXnf6vAFASt1ttKmZXGneycTkktLXUQnni",
  "key21": "5CKR98gNPzz1dJSpsNi21zNMc5zJeChtXZSYZ3GqYL6hSUcHghzp75L2FQhWHXCtAesScgoDm2g8WJQ8ssHJ3hky",
  "key22": "GVkvQsxpx3oFJ5gnNGwief7mZnocCPyE9g6VQpDP336heghKZM39enx55kLcRp3zcahdhtjJJst7KMSHvtWezdK",
  "key23": "Zr1iEkoN3EkYkGWCGbzQ5bZPkr3r4Q1nbusSsGL4d3WtqQmV5y8YVpPYwtjKzQN2GXLDSfjXAfZzBBB4AX7mwPc",
  "key24": "2ZPnEVsu7pch6KTyjABMUJXjTa3x16HyXcC8YsTsSpGQmpwqkqCTpadX59VxVHMm9bBvN55C2wY76ZEcbwwNZY3r",
  "key25": "5WavHFU2uRQLNGbM5BZc6LTvM1wZ2SU4k27BwGMgM7hsRnyMN8u4g5C9RzS7VsRELUpMCqhZnz4ZhmpSTryhP4Hb",
  "key26": "4AkLJsG94w6tqAfjCVRXCdRyfaQBg2hJmXoWUhyqJkAwkhyAybBnN8SeYiz37sjbxCPdmibdQVsYK7ffYT2PRPwU",
  "key27": "2K6S3BdE2LPLjZaheAFJ7yF27UMjQvYUG4p9WnoC3Xnsi3SFxboe5UB2yryrtqvvJjvUG7ErhqkjMmBHt4LqBgpg",
  "key28": "3N3kP1MXEziVPQYCCoM3QLVfQV8s7D6LxLFYN4sKLjM8ysWUYe48DJ3PW8da4FsucBQdcQLkm8mebUZoeyzjpvSw",
  "key29": "52xdFpVf6wBqMKAEcdyLBLkdo7mXvVUzC6Yby5GYf1mwGg8x9n3hHXr7M9bQ4s7L2BpjxeoJjqMgDHmoDtKtNh8K",
  "key30": "2qMucwdFfMYY9L2WxEiPXyVvft4FVPv5zRtX5LvwURt7J3ucHejMaHwGJzcXVzofFjWt34XMHpQZtVGA9NL8sbso",
  "key31": "UW3Y2XqR24ma88s2YYqDdqN5MSAxGhfERdaNqNs8cU6fmb9c1u3PKRhzZojqdSLGq5XbRX1chsWzjT7uBdSAykq",
  "key32": "2icXrpFGm462LoZR4rXhjvH8m1ZrxcdBG56hQjyU4mXWoetBArtD6hEz8cpR3nUKxFWxq91xaYMNWqgvPQCwrtWd",
  "key33": "577RFxxM3ejQiWwSNtcwWUwc1nNXd94VmXJZqkd2u2NBX2Ps7Qu9epvX5QddxkuLneKve27zwaJHsgVDMW43UxGr",
  "key34": "4n29WZCLFSS1YhQ7B65XWxPBCyFrdBB1jVtkZAm4Ln1tAppd6zkQwnWKJm6Agr5CDZTCtvMPu8kNyHQnRaGkG7yX",
  "key35": "yx3rnKU3hgja34hipdeEey9UuL25CCqVicZG9ya3ZQonKa2ABcbBKeQugwvS5KAvircbJyXewUuxGs2u7YzyyGk",
  "key36": "2MN8rXJgbABTADk3KpLUZdRx9r42vTpfnAtDTB83rYM3jqksu4iNNm5EuDadBi1aiHb8ShvceUHZapMpp4vvUXD6",
  "key37": "3ekmnN9uxgCRNYVk8t6teTMRmQmPUbVqvhBdmdKYfmPqGW5r3DkgwPaQzep7VJtd88v1X1JSf5bv3rQk6F98S5jJ",
  "key38": "5LqDvZYvDjyWnYpVbBgpbS9vu9GwN35Ndb7aEkXS7Jeqk3A3piEq1BJwmACwaNiqWtYNcdadw8247gCr1NHpZVjJ",
  "key39": "V78SgWNtGLcvf789rbMsoxH6yyoEArsWjkfoM1dXNc4vFszia8KVt4U9ABc2YjhTZvdurnFDHUzMRDDHbGsPih7",
  "key40": "5Ao83qLSRGnPAMcS949JS3SDRnHMUFoTZBLimugwFqTdRnfXPvYujHsGUsKAo6awZQHwzCksoWV9TZz5wvatfSCw",
  "key41": "4SdgAJL4ZGq4NV36YcFjfCKuWZLBpPNX1XCVDWEFV12CuSCSXut1mQdqh5dExRRoq95sKzA3RBM8co9BtjTXHNK3",
  "key42": "2GHExDZa8iGpJ5oqvbMSYPLpP9o5sddjkQgPpqcwmCcWQG6Hmv14bcVpVdtwcpusXR4aTRrj5GmBkkthiRKG74Cz",
  "key43": "2Niid8ByPHAPvXd5Y8mqPPbKvRTRoTsEtxLpjZ7Qnd326GpeC9mAXZfry9DCxe96CSyHhaiKkfxMYVsdd5uZMFM"
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
