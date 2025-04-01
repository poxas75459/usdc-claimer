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
    "2N7tKECVcbqPsavdXdWPiiwhkVrpgdWCorRju5C16FATa8xCg6qgxwLHnpEAFKwwTzmVakhLjGVDpiaiBK27FFZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hq6T7fSuKVoXwSKPT8jPM6mqyvkL6JHx8qsWo9h1rbPuK89fCe4AUXoxx5vcFWhoVm7c8DJ6zJ11XMQR2J2CMxt",
  "key1": "2AXJeGGA2vpXdbTWvBzusRCdWHBk9kHTULmxBsqUPPXrY3F2Y4S4EZiruJpgtzQN1MMzE56ztcuv8xz7ZFwf7pQd",
  "key2": "2KdNPkS3uBFUgo4qtPgUUiqUF2Nf4DPBw1tiSnzLPjv4nAyesn9qshWdyC6DYUuuKvdcxanXV9qGqC3ksaiQnL2Z",
  "key3": "eM9sp9qvvWmVCW1VDWZRMSJhCzj7gc5fWvqZXqqDxKtBdYjRcNdyv9wCG24vBdfXpE93bHWhbr5S3v9QNZzBW2q",
  "key4": "oMkqNpxs1Ep8kykkSkGDCfhTC7mZrDBr73zyitVy3dCcy1mm7A42xYC4Pya3DVRgWNnQxGd5AXpYCXT2g35GaaP",
  "key5": "4Ye7nZ4y5buKmaVgxsCCAy25gJkyLtK2qLR4g48syPC7chV2BA6ooZTKppx9DLMDGaGkx3aSBiRTE1dv5cVoGGkF",
  "key6": "4NpnfTMUynJGBAhKvcJVTnWR9RFCag3GngFMXPEiC5KFytwmp8ErC92MM27TemKJJ84qsjpAMfzYrpuDKenrs9n6",
  "key7": "2a2deRw5ddAWcehqqXE2FKNCLDqBPKzRKk8ycva6BPFLctS4fKuq8sdVPu5CJAHAeMfz1rmGGUKaxXU2wpGpJ3T1",
  "key8": "33cdCLZcXW3cUWksvVG93jB3K5Wrju2LswuB8qYMZFLi1C3nCD7dyv38bafG577yajcfYkMdUGrHXaRa6s1Y5RT9",
  "key9": "QmEK9M66137dfsfV3nBNbgUteDiDhRqqFSuYWVnKtd3iabdUaTgj3pxTjTgB9ETyukUs2HmkPwKkbEPa8ZaTnVo",
  "key10": "2BxSPdTYe1D3eKKg4U33eSXdrXW8ZGSfYS6rJAyvYaYxyr8aXEigdFLMjMsrtvp5est4wo3ZK69qUvJSDSi4fPoS",
  "key11": "3XAnTBVjPrthLBmUgAeaungMk6x264hJF87EiadtP3R6ZhgKkVgVWZMGFqTRazZZVmjX3cn5yEjXmiaT6UP761fV",
  "key12": "4KaRRTbihmKL61oUAA1Z65eX7opbrfnWzXk9uwLNoTAMN4D63DJV7AAkvsZJdMETAB4yvUKAuBypoC1ppUsfhKy7",
  "key13": "zLa8VnBsHtzFtwN5WuoWR7yNAocqaQG8A6RX2RiUnsSUUFHXjMZTVSzYvhfWNqkQgxs39Mb2TvJfWjXtTdpVvWj",
  "key14": "3f8e43znyUTFVG22erxhkw3Bnn5qSJNMXa7k5ULy81bKRmbGxZeaLttTvhBi7bJT2xKj9jmqYHQ9WJnNuqXwzE1E",
  "key15": "3LPiweGq342hvWy5VBTo5xnicnqoJeyEybiLBZfo66R783odjKwLKUDis7b6vtC5dzZjJebtWxenYnkgsQYoWd26",
  "key16": "xkP13Quqyrq4V4WAXoQj7dQBqHHWzsRYBWhzoYUm3g5mZemhsCJbJtBwFXpDBEv6tQ6E4QtALw2ZKuuTJJTeD1Q",
  "key17": "3osCNbGgbixVH3LgnEBZrtYLPFMSBcDrawmRtxccby5uTmkXmdFGFKCwm8vZguK3W7ArA92QenpmT8PYMj8pHMrz",
  "key18": "4FPZkeZGc8C5vaMatS7NTzwkLiz8xCtMYsSyfCBr4N6yy6QjTvDQHMq77cWSPfRe2AYrtX4JqfcT4u5W7VrcRSbD",
  "key19": "5jt96sgewwc117Kxt4u5Gu44gpM41LDVzFuUqbKwL2GNpqY2hCJ2j8YhB98yPr9md8qetraACRoscrt74zgi8pzS",
  "key20": "4iCac1Q619rUSZ7xQLff7HVxT71WXvbR5bLYwNSuReikyKKbBtepz1JHq5AnhCPkTwYBJR9FgsSz2bmb6Fdf6DPV",
  "key21": "3g8vazYYUGusFnNmqxLMFqBLKyxwF6mxd814pfDzRptFM1cZm57Sa2BzEGjcYfs8osVpGh5PgBMnqXUPW29ipwgR",
  "key22": "67W7PNH7PQTvDGUr2yGH1kRfKL2pgJcYhKotNEz4sntqSzKvHL91AGughUzScpLuR1D6Sneod9VG88YSn2SdUFDY",
  "key23": "5ZwXC4QHStki241mvrcAGKjkMRXHnvooHPxW8R36GqNpmuJ2Dz9sLWjewGWwiiA73KT8YYPY6HJ32mwo5ywahi2j",
  "key24": "2AmiEjLu7qXGmt65hKVURjgqVs5FMSKd3Xa9z2JzpAzczZDDkzH2du4jakoBzBNeq8MXKR3mesZjWvD3C3XK4mjS",
  "key25": "531WB9nPwYNRHw6H1rSFe7r3DCkVixqZtdCsw9Y3e7uLcAr9zVKqDSbysWSovxxJpkQMGdLUW4248g7Xy7B2FTFA",
  "key26": "3q3oht69zGavKoKnxMtzjbubsNB3uvXZXQgFMGp8BAYDVBwiuQ6BTCQA3d99SsSM68mdsKN1pyuMmvKFTh6wLBV6",
  "key27": "4vHmZgoNQ7x2EKkMm5rfovkSMVgwkRdpeBcGKfDUy7s3MZwGWgCB4ZQ6fstdZAqgGd5HHvX5nxTUFffDndsrGhPw",
  "key28": "5aeg5rFbGeXUYkm4nB1nyBFrso8evKsAJb4wiaBETBX1Hsj4k55dNBenLhGTfsfGEuRVSpqqHmTM5ZFfDnTm7t6a",
  "key29": "67oLXTYwR5xtRPZXMjsH6AP2uKJ9X6EBzJQDNJ6VM7GYASPERhPwbjn32kFHwjJc2GpVe2uQL1iAwJ534AVv2YcM",
  "key30": "3kAVgq3GnX6WTaFBUucp7ykJrcmKGJBVDPDyx5iQwJfheTReVNqMvNimEQHfAP4KGSyCvzS1KBkqvZk4NAgQ6u43"
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
