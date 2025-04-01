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
    "5jcmV67HdkfnYFsF1b4CJQgrhXRaj59V9xBGg1idE4r2kJ67ZzL4pbbDpm3qrtdYLCZgLoci5k4R3Mc96Ud5GyYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJE63U7oUedTJK33rJnU5sQz4n9HBx3sTAdcz1Ln1huHaxoEb8RQ7veuvyYpPeyihFumUTxJbSHFjpm44s9ms3K",
  "key1": "4YqyfFdF1ptENoRe5azTNLwXJyZwq566cYqDghkPUMHh81xr5XV4BWqb42KdD9S6BkbsyjEGAEuUZVzpMyJqnCFd",
  "key2": "34JM25i766eKs28DutcSZwEbkPpUmBhzS9bJ9L3GemYwR4i7BKffcr1XJJCFQymAbfVCGeEjVw9NZiEQuoHc9Nys",
  "key3": "2AqR6dNXEpecW4Rpt82Rb5oB7ZJsUpnxryzqNoz1LzsD7336CNjEP8i2fMNRzkLJU4KtDH1McV48GS5P8xKXPMP6",
  "key4": "jwzkhWVFRmLkLUVS8SgDRtjyUQUdSMetRcT6a5K6rSamWMVxwqcZjtwKXQP5cRE3JfHww5yTGxW7PgHxDbr8DNV",
  "key5": "2ZZZMYDYYt9zGwuSsXKoCCVdzftfB89TP3dTEpd8TL56MHT4qvAVMy5uwFUtWjYwxAzeHprKKum2Y4EnuxKszFDW",
  "key6": "2QEvVkvjs1K4kKRQkh6bNZrvq5kguSsNAAQKP98JExVQsF8PPuo4A9wyCk6DiVnQeXxv8X23Ciy6yupgkvEnZX21",
  "key7": "3b8tXbhb8YRoGbkjPeCu6MUERWu2EdE7AWHHMTNhZC5QxEsA1wXuvgBZLzx3CwY4HKzatBFGnPK85bZJxgovxRAS",
  "key8": "2CXQGNoMSymaBsQKhZKVKLneWuttuuVvmz64gjchrh2NTRQkeQ3XACKbkmECPQL49R8rL7opUtQsNBP2H1p5fpN",
  "key9": "vqN8qDGD8ojy7dTTVeyjB1VCmLSzXZvkg1n9ef2g3LdW2SxQCK98sunWJg6iPPpSwZXpYfW9h5wxTdgxdefgSPg",
  "key10": "3eHSBpExsvJiuTAXaLMRJ7Axi2nNuyNpg8MSXKFJQGjvpJ29bXBJH8q2MphrwYk2t43aXWbNsrBdWAEjJExPMdCP",
  "key11": "cpYPjU2r5nzFhSh9aYhKt8cSJifU2ha69PyA6DMSYRMmVuCMrJTrxQ4TWbFNvsfkRZiNBcFU3vtdyt3zVPT5Tg7",
  "key12": "3cgJBPweGNRBFvpVWWXTDcJFGq9aYSoZmLUBJsoooKph7xyohpbgpVk9sCf12CERgFMZ1AA85PAvtA8B6UuQd3Xq",
  "key13": "3aMpRRgocW3o4HfkHZo5MEq7wtd9PKUP9BPvTZPArhEKpWjRhTXXWBg3rc1xEHcMXPFRwmgm4qkfcK5sSttwX6Te",
  "key14": "5Utks9vDJAM9wWK9h3fnegWoukr1W8xktcH5NoU5xWW6TbEEf2TeZnkGooBEZNbWE8JptDh5L9XZt4ZbWLEh1C5h",
  "key15": "3iSR5BAtfWiM4MqTGYqdeV6LR9WD4TjMUfLjGgGzpf3hZWJy5P8TXrproMyQmhaSe8SvVRWDDp1jvhsD8tckFjAz",
  "key16": "52t3CqQ4huQTz9ViSnKKvPFff9iFfEAW63No7PXgAXFqauKjkj3o6WMQKopTxPfkoMV7kmj3364KybMvC35mDCqm",
  "key17": "3xmCidRMXFeTCG2CV4YxwvraFqzV4MJmevNXj1i3YyCnxWQEHCt5FccgYriEytrSTEmkhqsYVAZVdnTDhMLJTSow",
  "key18": "k55fzMzmxWaaybvXWtcbWb8hpzyqwTB9xB5LxZ8Bbvjff48qW3Ck5tRctmPLiPLmXUbi7WwNK1tGqYVPfvRNGEV",
  "key19": "5Tgvy8EFSQCTpNyuKCim83QvLb3pK9CJwvHFvvwY6MKRyAkm7uJwEiezAsd5YajE2bH4aTsUWtTew7dhTc8X5aFn",
  "key20": "zmBfizZJf2TSjybSBKy26Ymem7HW7FeNVTZMh3FXF4ztywmfk1U6TKphNcfyjngF4C81SCcvsQsBhJbpjYaxEFi",
  "key21": "ka5BtRFeqBjAgzn3RShnWfZmno8souo7Nd8N8K9VUuiADHC5pPz7UXud7TWtGBZnVidGRDC61GHRLtR1hFRtNMm",
  "key22": "uNiAWXLn1wXE6qKXpQab3J4jnkqoDca1Pck4LK7ixSRjJLn1P45jLKC7yuC9An9gqF3DeZmuHnJeQVQmc5sop9m",
  "key23": "ke6n1fjeJ1QZZ476HQjZfGSpjuR197FmZNZXGAp64DHBuB9m3hmooCnoXmM3S1jCJZ6u3HecbbWjMabaQjC64F4",
  "key24": "4AdjmeDjW1PwBn6jVMzY7ZgNGd1GTjLU8ydaWckwvGgrqu1zU2ej8RPpV9gwh6k6cVBxQ3hYHdaFdqGZefdHum9R",
  "key25": "5GZhqz3pQVMCq2UbctTBVLLo94DqP7otkeQ9ssBuPEZiw3AyLGwznvdCg3KySyb5L37Jx5pa5Lt92DUbax4AWVfG",
  "key26": "5b8cyAPADTbTqmGoVp2zBzwgkGdxyB9H2K42FcE95ocaztwNv8rmx1jpgG95zetT7G8XCt9Ax7VRfHCP3ztx1xuF",
  "key27": "3ccAyxJLgXNhwmCYoew3L3PFT8WpLNW9gLFoiJpTPmYdCCDN26DphKabHAAK6JEFALA3H3UmivwQZxcio7pSBLUs",
  "key28": "5ZyQg2xPXxdMzipEQAtqSb4Utc2WhGULAXprTtwq92zwASRfkjWvMWiFSvMjBAnNYXsyT112FBCC7UhxysDtbH5x",
  "key29": "yMQUg2c64xzNA1PvpoaCvhQeFr3i7H6hiiUv7Uyt2VwR2bMzWi64osFfHTRfmE5RbSvvCHRtMyA5i6BSwan74GA",
  "key30": "3HMS2WeuC8AVt9urZHhrtJfc8orgfuFxMxuMoveT8MNkCm6K253RAuTfo8p3KsoVpcBFMxjU2rakQjBcV3obHsop"
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
