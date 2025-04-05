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
    "4DNyk1km6ts6FStRHcqRazgStYRiMMaZEKhgg5JXZRpa4EZ7GfLRmTwyqJA1AB9DTz6XukyQDoBQGiuNhBUAu18T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCbMdwkVE7mMZeWmhD25PacEv17MGG8CrLYSWsvoXUV2FUeu8Uf7tvJE6o7n3D6H5XdBMmcJ5RLEoEoK6pU6fVC",
  "key1": "Ype2VcfFfE68gCVNHEH9rvdPjXCCwgbQz7C5ZgCk57XF3h4WKEiqBu5WEHGKapiM993emRFdY2Etmvp9woJmprs",
  "key2": "5dComJwb9QwjbiSPxvfvg3KhRVJbbGhgbK3LG1UEwQZgenGESm3xZjBKUJzgAKfBbB1QkfBgiFgx4zJzE9FtqreT",
  "key3": "uBEiLhopxv2D9PbNjjq9hZ4cmyJN8f3LJsT6P4ycU5amsumbU4ggJqHtBH1NUFVcb1tKRTDtBkvPghGLEkzuAxR",
  "key4": "32qMiVUmKdnEjcDEcrsRbf1XD6w5t7XgogBuojVWqS82A4fXmZP851fk7C2hpvTSowDGZNNNCbe89tusKjRFEGL7",
  "key5": "4xZKvutHdowMAp5KpgvDxy3rt49QiW1GnV7peX2Lbx9kK1AXHuztD4LQLrmaacREPrDMx7jJizAzv79GXKKYQydA",
  "key6": "4imiBbqYzAJqMQqx6apnn2ifxr5i2yNYRMwhHBJtbq45fhMT7m5kXQLR1hLTDmdoc8Vfh5fLbxM1bpMQxtdp2z3v",
  "key7": "wqyrXXt8hy8KY7vjHVpMCaoKb3uKsAEzbmto9euyHquUNMWtRU6mf77Gc2Qp8dopSJTq2yuAD2rgakPq3C4Bu2c",
  "key8": "5y2FQKgWn73uLTACdEUzX4TVcG2mT8PJW9io7akrsHsTSTKqyU13NABDBE4xbW3D9rGjk8TKUPndMPgRRxHYjc3c",
  "key9": "3pucidFsGoxh9LmL9JeGmJYszPhWBhapj821i6sHdkxC9CC4RJ7N8rRT7bxCm9zYth63JzK6EAw7nqt2JVkRk3Fg",
  "key10": "2rRxjzwxYrGfc2sw2KyinMsrJ39iM54U2e63GouadJfxARqsf86vH4UC6PpTZyoJvQaPb8iZv5Fq7eVCY5zAVazB",
  "key11": "3guauN1LKB8NyYx9zNnH1YpTNZrkydCJrGHygfZhLTNXRrtZaFTbDbLLUE3DQpxrxBdKp9eBQsRh9yQ2vGHBx3Se",
  "key12": "zNFRqPmpuNV9h1c2C5oAY4C6S5nW1nGbM9XbZKfNipNLKj94Nu8mo5uJFSLs7V2BqiPJXaJrdrP2giX2U8LGWDw",
  "key13": "47UQ8VH4QZjxCKy9TPu44S6P9xy42r5G8Adws6p9mqskFm4WA1qsE5TZJpyRji2HAcovmP6dQGvhH19UKkn4e7AS",
  "key14": "mmxmwGbuQMfXQPfKfTm8cnPNj5QjyJCWtpis4zGWZXfUbyhs1gwxvyDQUhi62aktPoV8jbDC3x2wNcy3YDZvtx9",
  "key15": "Xv15tuk6VFwLv4ufY3g5cLUukamC3S6GnsgDMejigtE5WyFoVfaLvNmDv9RzWQVYQE9BBydp4k9YVAheS8f3MQc",
  "key16": "2BkscHJaZ62SB9kQcPJgCczar8vQGB6PXg1xBbT89aTpdqDMu1to2nZ89HWHLt6PzigfVSKcqeu4FCjViDkWwHwa",
  "key17": "55NggdGf3npprsi5SEPheFQNcdx5DaedQiM1JJUEZHz84xJxvmHhS4m9uHrJqdmp29929hGNxA2AGcfDU2xYXuEY",
  "key18": "5suFyWUiwnsnknNHoaVFFs33g7z4frKFFAMuZfAbrUAuXFWD2CFLk9CiyesMKdemWVfTeFHroipXLHxP4y2QYgEg",
  "key19": "2LmUbPemb1PmLh1wjvYJTkH613jtAPZEVFhENdtBSnyQMFUGVc9hC6S1zy1GnhzVrEjJeTgvroP4BYsHB5KbH3fx",
  "key20": "4JLbUNhiQ6VmNMAPzYxs69KkaRPeNWgBnqQoPhnziPaJGSJJLgrZQJodaWT9Fo9vThcCzdcaSWpbLqCYtM18519j",
  "key21": "jnyY1XSL4mroZA4FacJWVQjn5PA3AZEbZ4Dfj8nzMJdLTk1xqrkcnhRE1m7jm1L8hUBPcm8nMNHDxxBvUXxZ4dA",
  "key22": "5GrzTWwyqRhhTzgLJQJh83MGtMqXHfCU5edsRHXNbJ4PpfB5T3KrqzZYvo8JgWBf4qsLaQeLq1pajfWTvbLZFkeu",
  "key23": "4ZrKKsuotDXRNJeUhUZ1qfMLApEwUv9wCchFxpCd5nuJzNnN8vZAokk5zMzkwKZQxFb9muZnN54or1p1iLdzGaPd",
  "key24": "38whHJNbuhc3DdbCG44BJnjFXXUS7RwQ7nmWVXiiZyiQZtmRPAg2SxfncHuFN4QtqLVDH6tp5tvsh9uQUC9Dbjbv",
  "key25": "fZaZ5CV3SdWqUbY7wbB1SouCn3G3LgQrpNc7gyHwsptawXAdMPe1Nc2xP5xNwwxEcRQjNwk2h4ekiNg3yvWy57d",
  "key26": "4o1MCcP6mJBTnrVvZnQpqVJ6q35oPG1Z8mAVFwEAbtsVczu7LS6U5JaSTXGCBrszvaqh1hCanhzZFheyFP9gjKb7",
  "key27": "463F1qLUqP8bRZ12BjTDYds8FPmWaFEvhpT89gtxDEALqHiSZaJv1uH77crfdSfoTzG38cQgFVSNMyq9JGeSwsoi",
  "key28": "5cYQKzPvj1x8mZb45qLnhM8RrZQMBtCVWzrWX47adSSbc3hYAE58HrtrWM9K9SuF9WWL8iJzuuDwv4mo4qccsDP6",
  "key29": "YRXDHx6DsZS655b7NvrMkJdBeEZC7gsoqJ96dwe6kPk9dqbdrJkCYCzk8XVcni32kQDxd1nobigpWU6z9nKU5Uk",
  "key30": "2ss8njrrqKGRFp5aX9o9o7MC5ggjPZpHDVBynMARA3qVs529gyBci57eYTQyMVGmy9e9nNwKGv2dLjoZE338mwwM",
  "key31": "3XP9X1EHWETv1ZVCBnDbz2yR7imjgCtjgC2miwCBPWzjHRCnKbmBKXMfWXB8V6k5VjQswJN2S7Hqrw7JF79rAgRd",
  "key32": "4zL8wnbeYdR6xuDu44qeE2eJQXVWSEbHcRijBBx4Y4FkLXHtchNihiZnpoQDWLWXmW1YMTveCb4tpFDs5WMsP1Tz",
  "key33": "n7HiWJug5hUENVYTcJRVwWw8bABGaQrRfVCF6rLBnLZXbUvhhnC3fNuVNm1Aem9mshgQEwbC7qPbCP3We7UxnGq",
  "key34": "276P2tUdWuhc8Ff5ZYozyQEAoWAi5ocukBmSdeZytgmvtkgshA1VhThqoc778KyyBRBjxdq6Neiea5M65yj1ctiV",
  "key35": "4o4UucmoXvzb5jf6YWpUf8cyChqpnD72dpv3NYqhoqxJTFZhh5JmoABdcQXGhksYux27RFpqCNh4ZKHA1ZAiyEUP",
  "key36": "56tnTgEHtjXb5JByqy6DDis1aujaoKNHcy1FRb4wXRHAQfvyFsBp3wobsm7HkiE3BMhX4oV9aXS4rbaCC1rci169",
  "key37": "3K5Uz1WwAu27vEVYpJ7grjL7DesLC3udBRGbn3TE5SGR5eTnsWPLQJMUTcaGCcY11ejP6BnfgdgtVncTaip8zk7z",
  "key38": "5VEATP1LoVGpPW5TDKyq6Y1FFCkPzyoN8yHchBEt3xBBjQwN5WKUS2UL7tqY1ipA334oW3wJkh3sho4PGaoj9HPW",
  "key39": "5xfMbVfUhCeAKnH1DsdWegKpG52DUG3yYWU7zYKasqqrpZV97jkeLumB3ezrQwNQBoQYUniPLs1HqDwshQNBcnyA",
  "key40": "5zJyQ7jeo2euZCM6M8PCxZ9HRE7hGL5P9UxJCnLpgyccghDbMZj6P7wfUyFRkuw2gJjBueAPcvPXFDZboBUo7htf",
  "key41": "4XzeWdvPunaAezD69ZTRrCGZYGziBy7wq1QU5bCYZp9KSk4XZeAkXw4Qdg5EaofVibggr5G6J3fC93tXPgfQL1xQ",
  "key42": "QYjxqPNLJdCormHQPeoNtzychwk2junExAye6typ3SvpF3RP54BpzA8nu7QktYwhjHH4b1Q2h7RqsQJUNSRTJKf",
  "key43": "3x3rLwY5T53z7cg4ALtu5S8Vx6qzWiEq6beGZXda2rvTu8dSNh3QUGaWY5FG625MgttuMAz3tVZ8SpapWkfVjYwS",
  "key44": "4NgCqmDbnx5z6ehz6hznZ4TA7oyaotQjoJ4RxRna8m2CgsZQJrgxFrZMkMqgPwL7hif6VCoe2fnsTBUZerWPnGRy"
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
