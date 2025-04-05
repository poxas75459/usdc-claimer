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
    "4bowCcVSR1o4Df26rymHo6yGAPhJ18EEJkJd9iK38jc37Ao77GQ4eFeVDZ5w6eR7M2BJTw1FohX3ZMt1S8qMSYLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYYGtNVWr2Tq4x9oPZ8DQd35mrjehw9ZEofoJ42htUUBf8qQk6AS95PCB2ZPyEPZHTKCzNBabJJuCjzjdzqfjqy",
  "key1": "5ZTvqT3YpFbJj7Ck1LPxUurwJw5PygH2N19jzwjoyZUxCuuhWwTBVNRu3adTrGuQxcxdQupDbvE8ftTvcBxt13tg",
  "key2": "398AnTQQAUvSwugcYdeLpgVhvuk8VPkZsbqHbke4bC98DzdDmHDGkJn8vwd42HPDi8mcpPpf6DQCjfP7van1DdqM",
  "key3": "R8u8T1fUWHYuCVcz4Ur6GzCLcFZ636XLx6yEPknj1ZbD8EUZyswU9Z6u82wWT82iNpsJnnCWX4Em9uVAvznrguY",
  "key4": "5jjQaHqzUJuDTAC1LXutcbBunNKZTQfUPLTPfz2f1UzY6fAM4sXzBNErYx1fqMGJ3vnvSNBgP74hEzbKKuBahVm1",
  "key5": "4F3iSuxiU5UnfGeQusbrVyb8kkjyt8wtY9gByw8Y27r5A2WTwogJ5ind7ca8GkpPMtFdncTQTY8jFjnxYBno2GnM",
  "key6": "5KNkF5c7jgPkScg9cz4AohkHT8Uqbkpkoaz9s9o4By9bbvf78k6cQjLLHKrD2cyaJy6P3DzpeCNLBTuYBXt61eo2",
  "key7": "5cCK7TkidpWo9eabHpkF4yHdukB3PhbXPsFSedKvTGWoR9ifTB78m5uy5U1Z9KXRT4bzikEpUwv84WM97AL3BhMu",
  "key8": "2B9S797d4VP75wPiYpVGiEXzQuJ8i4WmFWDUxXMgK6thGsd5sJ6n2sNvNvx2YMviGtpcsyd8TdiAinZzZucxMH1P",
  "key9": "V9ZBvirGos5jg2mdsfyUrpsut4hhDAksEQsSgMdyvkF9EwCkMHW9sXmT6FfEx9f6euWmZEtNvZnKfWgguxLWQ49",
  "key10": "2rDXDPMVVuwReNxJe2LNjyMV4Sk3Ka1vokMF6xka5YdiAvoHXkt9k76xUsTCjB6t8hgPJWmovUeuxWstVu5bU9UH",
  "key11": "3MunAeaMcZBxkeYTwXb4fr8Mrce6qXYTcFqKhX6fBbDdAQ95PFkkgkxm3iYwvcnaCSKaUxJqxHp2CWVvLmowqpXL",
  "key12": "2iGH2VDcHHeu5T3b4YE49UQk4jRRGkQdb8nnAJU1ieajD1REzzXxL7mDfVkBL8JiyzFDCTRHW9pw12Q5jmP8W4eg",
  "key13": "5uz3vUA6i62Lrp9w9hTGQ1UikRK327fxnRVK8zb2VJZn9xbpGje27xzJDwNDo9BxfpQ4p4SH2XQvy4kYGgTmVnu6",
  "key14": "2BSqx9YdfrCbq1NkWWWhmtofg9NoSPnaauPSkhQk3jShuwyChs4X3BwYEzT9wDRQeqb9bM154Fic6ni4YAeQxEK3",
  "key15": "3Tpn5LihH1M4T8qYp1vz7KYWGdtBjtDYPM417S5rLbeGpYJVg7V1WKhar1CrJtZsTrUaq7B8LRnBf6QgFV8Cvsqa",
  "key16": "3q62rYw5vAty9NafJYYnC3aoLYeoMaaw7DExURaXvyZHjtAPphveSAksfvXmr4wjeE7mALseiX2rU8tm4cC9H4LS",
  "key17": "4aJqC59j3e36BgnQw5MnJGcbjLUBuky5dFpdvn4pFks72jPkL1crw9ausbL2EcZ3o6SJxQ8qx7bdGAn8yAsN15pH",
  "key18": "5nDN5ZWkXzotKrby3a5fzEEshRVLtbbjEhCs5KcqgweY9iTr4B5euSJxWxThTrXcZo9VWyBEFiUefDyXjTemY3DA",
  "key19": "5qcWoDH7c493sVqPMqLmH9NFUoAVQDTR7xyaJcmFB9ajs2msA3qE9P9VnMncJb6CoDVjSk1BtCUrGGm6RNb69jax",
  "key20": "5k3r3nKSfjDyMNdLRjHVSY6XLfyTP1TpHJsnrYFBAxfCNzaQNhMgbLZvRuZvGp2ZB676J68WAgZoZWCWG6Xm2LBJ",
  "key21": "2TWrhznEDEvbMGDyy5tWQvvAparqoLo3GWux31fLGsJEkLDYrUbraAR5QGUVMmcpvVnByj1gfJ1U9DXZ69sAQwUq",
  "key22": "ags9GobjAzmLe1pePqjJ7qs51fQLeEV7jSBDmaRv6ViuVTMz2XmvZy5qiQZKNonU4S4cgxP9mqJmR4u7Z8UJUD6",
  "key23": "ZauAwZnmAFPYJHP4gvrRaMiR6nBao8RnU4bPEpPG3FTM8hMXCXJisCLBKCW8mBPu2D8CCLXaFNNTbdPYBtcvGFD",
  "key24": "5RpBxumVuCwCS1DscaBMHHkMRm558KhzcLSzV3e6V5Pze6ghdtrbntXpx2qFJfcpJiJyo6sH8ax5aKbxt9mSb1Ek",
  "key25": "2Qbzc3CWiGBV7ctbLAC91kEsv1PgNUhX9pVu5yAbAT8YCVKZmETySp1NxDnWxceGt3d4X2eNmsrLTEieHxACNmnh",
  "key26": "4xHEVcqwpLXAmV5Wq8pj3cH8dscXj7CMbLo2dwJkUTQ6y5BjwCGxMT1tzz8NmjdsWcfipxAEtvqukQzDngEgiBK8"
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
