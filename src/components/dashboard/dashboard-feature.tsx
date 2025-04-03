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
    "3WpdLw5RMtSXuT9jadJYKkkM2YQ3BDTyeXSgMoHz1s6m8mBAUeWAVn8SShxSyMhp5e9SqG5ZLKFCe1Ypm3jdK2mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kEqpzrwT7AmXuaEiqgKPQZPvS13wRmSsvSKvgU7Jqki358kmzwwhmPUNuQuJN4dSZUAfttnPBZeHbsf6e7CwjEK",
  "key1": "2awakDZtH77BAjXHRzvZTw4YvbU5U93UedMyxEjw6bD2vzTmfd8B9FYxdFrhwBeV3EXjRAUXQs9nbjcxdZtUSmDW",
  "key2": "4Vu1TwoKLAiQQQa9n3aFBSN85A21Ri4APJRETd1eJgv4pYct6mvvNCJGByPjLKf7hrdodr6sHuGnU9qe974Jy9mW",
  "key3": "5pRfHo5pPG8yLoouXPufqAdGYTwToBdcyr3zXnPXj26RuuDTnSUwMo16zAag3WqmzmdPLFuRw8NcWKpJ8zw6yBsS",
  "key4": "4hg3FVj7hH5cwhg6Xbx8hhQr5G2kVQULgFfa2F4Z1jA3LXa6Q2kR9vUqRtcTbyS5WBKs5gyiKnEy6TyqYLCT27XA",
  "key5": "4JrSS7C3TeS9q63AmhRnHaPXszW4D9GRn6vHAsXrFNgXd3gCsUoWEEGPFtkjcHRXctF1frBwEUR5LAvPjEcLzV3t",
  "key6": "3uhhS4PiHpRJpQ3Qpb7xSAYweud8jijZTUnRFNcTj1MRwwBxjQiWj4oPzU6fFastjXU6XAzeS8eHPJDxsELTKAtz",
  "key7": "nE15UaSsqx1DNSvtj8apwHcBDNYqQ24g98v2niGmjdraCnPj14rbabuaoSRKPW7orDaAW7q6DK1g1Edkz59c6Qe",
  "key8": "koCTeGeZm2ZLEnMRcdb3PN4zFWF3JRapAv3ZYfgd26MsgfJV1FS4kGRGNyUTj7HMHeoogwZMhcT5CYuvy9GkMdm",
  "key9": "2dEJ5pQgKcurx5EJ12CaL2hBVQHYCQAzDhLZv1NpNqvBhReZpJBDskUV4UsGXVczi23YxfVtJ3sd1mbv8C8Ysvos",
  "key10": "64V63kPkJP6yQmD4V3NFXkaxyLfPsd8sris1CUM7TNywdjwQ6WFrFSjDMdYKJa8zfvpQnhbL41mgujQ8eGCCJdR2",
  "key11": "24MYaWjg5egbEozF5czGEPRvkbpWz1fnfu54UEH5iZXVYf1JGCEC8UN6bNjTRTTFas55smL4xtjVSed3bnwrRUAM",
  "key12": "3CifXDLTud8M8fA3oh7THegJdzytBZUnbQSwCDk3FrCg4oVtrxqJdgrHVAuDxVUTXYpCED37LFFLpwWTrPFoBc9E",
  "key13": "62aYDNuZtqgBxcqrHVxENW5V3PxHRf6vbCYj2ivFRnkFEFUNkDdGzatMbDfqBBxcD5pxRP1TQMd3VPtrnAbnZG33",
  "key14": "22M3akz5cwPhfBpkjmUSPLgfsps5NN3QTNWMRmXBUD2pBf8h9LMZbo5afDwGdQ4mvnMPeS5VGxT1kAgKiqhViD4W",
  "key15": "4r9F2HawnBa8oEqXj5su8SwuU7B67Yp9QcRGHDqhG6sYW2PCXmsYWjcVKrV8rWjLxfgMUDq59W9RGDbKfpTVHYWi",
  "key16": "3mjJ3gaGwjDiNcZ8EBnyBDkqRraQhMH4KZWcnesaJcE9KFbg3uqt4HJbv9PG5RNEjDgSrGjwPpVmNMSC5MhggegA",
  "key17": "5edLqFsPZRk45vgKN83Tp1aZcY8v6p3wgXs9SJ57gbccXGYpHJWtZbn7TuCC6GLaSZVrJs2Z75PU2t6LTns8WQ2Z",
  "key18": "5iY2hfnQ4AHiT27SWCxk3PbR8ZoQ7eCCt2SucB6BtFk6ZXAMjN19qMRSkmidnhPux97NFNqGBV1S4XNpvyFWqNZN",
  "key19": "3yL1sLmZDPvpwkJ8CdncSZxDNJnogPkSVFJcZ7fPaFQmuniEK7zbkaRA1gDNMJn9XGqPeJ9uS4iw9mC1Sit7mbG4",
  "key20": "4Hp9UC4f4vUHsjwSa25M5zj2FL2UkkpMUtzTuES2cab6wF1wG6TyaCp5sy7yf9Ge1s7TEDHSJCeMt6ocEUDSto5",
  "key21": "5RDvtgXmrVZLgyaE9FgBZx9dWbCtFhjLcDYV4FRZZb7TAu4iXjsaukSpoyLUQeDSQh6mCy7A62pKVpMD9nxVjFFq",
  "key22": "2yzTD1XoDmWjwPoo5ahsDhfM9D1nFMJNfwa8SimAkEoN6g2U4PSjjJVA1msvt4MuQJ6FD4ZwggcxW8M21WCYNPyi",
  "key23": "2n85tAs1FUAiEVxp5druHz4rJDvEUSqR3tSjHxkHTRorBtinTEwEcPHdGdUTPba2inxfjrtr8GSfKLe5tFoFnLr1",
  "key24": "4tPZ3tAiXhwGriqUkNhLR81hetECQvhe1KzNVcjkMuAHVGEJPabewXgJcQwpkPFdZf2cWF6pvNwrGV47GeYjW2aY",
  "key25": "5N5yxA6xp3DE83A7XkYgZsU1e5GL7rQBtfvSKffHLAG8LoA9gbiMsWPxEBqMAJZEXXgRfef3PHG1FrXH7CdK6YcT",
  "key26": "4AgXr1bmtcZeqFp8uPzgF7HTsF5egoe4KDoSyReKC1mrHc9ZC3rjiXkWfBFp8iQoer1X1axqz16ztzy1wjzhu4fP",
  "key27": "Uycf4XxVbpwkK94SyvKhX4fW2U9t93H3jaV2YF8fA9FcfHwy8j2wY2dDBWfLSSWcWLjbdqkDk6htK8x8aqBKw7y",
  "key28": "63wMTtH8yb3absEfjQGUhfUtnk9Tj5VsUpHkTnbSaWxrZzh6jd362mQFARVNgyG2rT7nTmj48737FgLCQeFfSi1S",
  "key29": "5JBHaQohJb4eqarXUXk68syJkpqrXAkL3kvFZye1x4TXCFEDhbe36WzxNfEMDNdYV53ucnmmQUhddKwK64jQFH3M",
  "key30": "3iTKcQeBfmFoRKqDbS9u5fm7RC7Po2CtnLeronadbt49PrAs6E4aCidganspRLFw4GLC7QNrowaE9UyWGQFRYKZb",
  "key31": "G7NK6tWtHpLoAWigHW9c3yBPhyyALSv5YAH46b2K1zhDTX4HE6wdgbTPoVBZv98mHdhs4vkBdECgJj9YrGQydyJ",
  "key32": "5u3mAtmZ7PVVRhMeQpmxSwM2bAN8hwhFYgTufRv4LdJcSS8nJWkdq3NzrnEbQQW3pcjvAQ1NGPxUKg6TXfizVidU",
  "key33": "6EPbFnGW6hzN1UFYMtwTfQHbBB8HcECed9qEnp4TasVEHGhpjXFPu4r2vmy2fYfDpFNZsm2ZXe2D2XreBmPWVaf"
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
