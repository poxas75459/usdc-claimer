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
    "2XbJ7LA6Gdt2KDZCDSLkYjW1Spjr9cD3oPUtxQKNfX5QemYPZCmamY5ZQga4qbU6PEtbB99uAS1541vacxpJpYTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fChSzQTAucFZCE9Gp3jK2QEX3XowqacJqduWWfPb8W1ojjN5QhAqZ4cQpZGpFXrEUZrCf4MT19zzzy5oeweFT7X",
  "key1": "226D8YHTNKJmNYNHGPWM68Tq8Dr3PiLzMPQ2CAY9dsAWyfGFWBP9Af2TQ9oiCnArxSx6prmj5cpn4h5ASZMR6rb9",
  "key2": "5dtbYv7qn3B6Tp3LSiuukWet1cs8FeJZ5HwX2i3foWRZ94CyEA9Zx8o8ATxjXEFLDFWFpzaqSbPJyJLj8F1jzbcS",
  "key3": "5RgigZzEgokhPwtARyccr7LedfLQL5jir94ukD9bd7g3EwsFvwawjgchZzjnXjeet128zxwocj12Vbb4wtoM7NrG",
  "key4": "sdQqnx8EEep8xeCNboRCpk1PXfv1Jj5HveEtPDSSbxtJE5zZSdxyKGhMd9c8cgL4qKjfAhfKxTJ48jnZx2TQiyJ",
  "key5": "2KRePY5TvFDwe1v2RAPHJP4o3bqdsKD31paCR6rkuhSpvsjJLUzzPZS6xgm9cdo1BjvGy9Kjw3qzd2ViNay36rE8",
  "key6": "4NhxwXx8aqVq3r8kQkNYcizqXbe76HEY7e4X2KjZZ6xZmBxUFCxnTVnz8MbdCWVEh65sfFvQ8SsAmQENkDpCa59k",
  "key7": "4WXvQJY25FiU1oBT4q4rtbrHcatqZK3d7iVNAebL7dUruCavWEH3T1vG2ApsN1YiJivzgbHF9CA9HvRz7WrvBD8r",
  "key8": "YNu89KWwjufcVBs5WExcusTCGA7WGv2iaEQt7KJaNCKuV5bqUx5c4wtzsGWoLLoCi1PLH1CsdoWk1a6QYVpADAN",
  "key9": "5xkLD26foY86mggtPeWuXDDgwTt8BobawbGPB2J3eFTQ2V11NCsvKg569pJ3nv2bVt1YtCcNpcuYN4FQow91D8ZB",
  "key10": "4UcDmY1iqZzPMwoUkRTeQ57j1XvsewuWwE6Uvr98djSTxaAttXwZ98FpZoS6ENfeykKzBZwMZdKop25wcc5P2b8s",
  "key11": "64WGPxscYoZ4rVJRmWDBJm3KrtUjchKEDcYqADX1SqTTwZhyW2GtwXhmcP1WN2LHNSHhDcYTWsAZy7Lo8yGJnNFB",
  "key12": "3kJDgKZxLPs7a3Z8UqbvbikpebRu8afjqo2bo5PTyaR5fRnj3seKQ1kGYTqkMceefj9CQr3iZtiYo2YmzFQgpEeT",
  "key13": "mz9P6vfAuWPPwbaSSekRqHKmKqDn3ac2J2uktKYkn1DCBtorhQkwKmBNcVjLybeJvQ4BtujSkujEQKSidA25vRh",
  "key14": "64T81mrcX9AwsGtmtz5CMXv7sG8fNCEZj5FEMa6LRp65CQXrn1Am4UDAevnCxqwnWg2QgaLCBBiaWMCzUmfwh424",
  "key15": "5v2yW9pggHHX6snGkw6KS9MrpXtvCpAp1jwVB1oaTWBXive7WiAxNHE3sqVKccDi9ioEfvhE4KqgawcenZycWQwo",
  "key16": "2NUurvseZhoun2RuqFdpukTTCWYscJ7QQf2WvX4m8YuNPaS5imzpaVxvQZZFSs65eGHx7f536nNeXpUbMYevvm9",
  "key17": "8wKuimPYCjcqPktTLU4SkRCsttM33Lqs8YbH5VTf31Di2pjdJ9LMSVo2S4Zps5879Kd6niM6f1TpojRTcXnrYrV",
  "key18": "3KKUG8quEnysRHnt8febNVcAvL1QkzhnV9iJnGFFgZj6nR5hF2vMEmRX7Q6k7DW3FmH6GBc3x6mXxyfgx5nRjro",
  "key19": "3VSW1sp6gFEvSYCqNshBVjxRA9b13Nerk8WePRiWcsAAAogyHQzJJtxaHYiTWDrVDMajCs2cR1HaNjCopy5b6NKc",
  "key20": "37taAYYYcsBs9KXSz8ywNbJjVRf2PNwCsdCSGPa6MSH9F7TaeUPnQd7HtErReWhrG8UrNSSJ3Q1DnPAepbudbrbM",
  "key21": "4yxFjaQUqjL1ZRTrGxx1fFfUvohmxi3wfJaBx76TsctznLa79Ew1bwqbJums38WC59kd1ZLN8EzBYq7WHQBbxvNz",
  "key22": "24kz6EmTQhAtKfkmTBeSZ1dmmp9Fg4umtD93HBHb1FANs34iopEWXuRvGZbULA6pkhNjmobGQgdfY8kEGrEsWhq8",
  "key23": "5zzvfiSRGpKoGdixn7JQMTQywgbKkP1XsxGZcgGCnNQ6rx41stM427WcPJquUAsqYdFnTL4J5KeUqg2wDHUxopLj",
  "key24": "2psPxiQp7qhczE9ysadjqLrSdjdrDsgQc4sgLm65r1onuHEbfP5BkfXjqVUmn1pjzDaRy1Ctr6CmSuMhwg3DSr4Z",
  "key25": "hRrVVMBz3HfDfK1HeiqiCPtyrdPZVRMSvdLe4p4AmfBCBJUQ4DCgCKidJTp28zisf54gmpPMsWVE4KaHGq6UnCM",
  "key26": "4QTVz12Q4pcUo2r93ZaE5Xqscv6fdFhRxrQT2UWutV5dXz1KtiP1e43mhyjMT6vjQZpiNgBxCYvVrstcWKiH8xje",
  "key27": "4Q6TKzUQbtMiuxg9vPYMqTKs3vkdRqMvrfwvzh2t6HfoxQf9gMKpco62VsgyDYRGaYWSkTViwndHJ2bE35n2DVmS",
  "key28": "4HnCJaUL3UsFTijx8vECoLa5YuTV2cwjVGVp3u8a1DfTQJL5trsVgFLAZQ48adFzf62SKT2j7YSb42hCDrgrM23F",
  "key29": "3nncUi7pfz87wwJmWr6gUPefgHKpdekDhbaq2QPUminjbkEwE5gKjhB9g6vSXRAKTrzYPrMydkzyfdRfyG1JN8Uy",
  "key30": "3jpvpURb2gSByWQZTqK2WqAa1LBpEaXddLc9ybbEEyrtLzQ9BMyzJervqGNsfSu7ucywzcspkGz6LJEM54XkM4YC"
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
