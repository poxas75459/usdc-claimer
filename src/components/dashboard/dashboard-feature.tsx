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
    "5k4TvhjGqXEGUxmcUrFD3yDHEMP6PnK1osvKXwK8grGorU84yyAyysaW3ke1ujJwgzjMdhigni32oFbMGq9Sz6wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HGP7E6qki2szJFmNL1ei9h73LbT41vgzxqqFuJWU4TbL4MpJh1qzDcR7yjqF9A3696n7CaU4RoqJ2Zrdf3gS45",
  "key1": "5gxHru62gATeLVkNiGfKADPGwgzVoG3TGNsuJhEjH1CE8GmtqkUXRf51ycduPnmn2bhsA2DFtmEeWuUQQVMijhrz",
  "key2": "4yqAcUHLymZ1vnR4WAyhg6gEFqSEdZb1NsTp2n9YA79VNuvdJ23cygpmY9Y7NpWxeDCbgaiU3SmPDJhnq6dysgaL",
  "key3": "516opdKG82VeS4bv2XBqGG8dLEBBEzyq9P4QuZbjFZtmdqCVj6ErkU7BZNRu6PhMdN5DBnu7kvdF3N8RVWweUibv",
  "key4": "2aggAeD1o6Fj4VGTBDpDtPrW2mqHB1XWVqdaTDnPjp8EAkrngcgZ2snge552AcAZrnQRifm1PNHt7WyBJSjDNtJZ",
  "key5": "3rjzxTrchs6yUfXpBGHsacfDoxnXYJptrWzCrhigQ4M6pnXcuaYGdFQic7s3VVQ3bfKmtthi9pVMYhfVercxNKVY",
  "key6": "2zb95Q752gTY38S2yZB9DeK7szrseQjrchkip19qpjFZSB1pe6Mwc3qJMPwqQpW7AydHT7YVfsWRrjbngLBAzxsq",
  "key7": "4cxjNnjHChAiabTW4dgWCvfvvQXip6oqQAv3ByB1cXKmWGexHnd4q6g2YSZYUjvrczAbcJFAyxkzr51vx8c9V9bo",
  "key8": "diwehFSzZ7qmFq8tHtWL5bx6U7J5wL44Dt3yQazYUMiiAqsNtQKCADMJjWjRDRsJqgcRDpJ1ZJhUgkV85Rw7D4e",
  "key9": "p8umyzCx37j4bGjLbupJyY1QVN8vwDvqDXhaNneYfmA8VWfMqLDYwQmGZJ7ff4YNa1bMLrcZmQarVBpZaCsRQ2a",
  "key10": "4BFRBbR2cHzZ7YrRnPEnwMx5p7vxG8QKkzt5NBmYc7yLNhrd6E5Veyg5Y2teoQQSrEXGNkj1tCfJcUjQEGY5PWr8",
  "key11": "5piLXqB7581uZB9JrxCDUWGUdWvTbd9mt5L1vZhtyeaqa2U2gfLGyENcBWqQfF3ddaEYi5TiT3wZVdYvePGRrqkm",
  "key12": "eApMKkTs8ASbjxjTnbqjy2ejRhWwYPcSXuf5xtSPRCmCkpct7hAGswcM77mNgdPTR6w5f2SMzUVr16AfFZjNp9m",
  "key13": "2QXYjTGxjVmszDz2FuHrtSCeyf2Phs5uK3B6GiZvsARau5FbESqamh9mWvksmy4ueK5vmaujpCguNinRV17PcyAx",
  "key14": "1g8iiHmBGoc7Cu69rzpmMAhiGyGmoxH51mEDhDqoMbZCqenxS2pttpnpUGo7iPEzjpEbgAKjBu5UHDDPDcPBjZb",
  "key15": "3xixu4QCPkGU9JdoBpoy1mgHyK9LQf3JzeWuonU8Apo7a8CMpxTShhU1h3J3pxa4Rygu5bMWaDZSGfPdtMKV1Va4",
  "key16": "VfZxHSKwjQZ6UU2v5ASxArnkKZtTBgxqganezpYC9G2APK4GR3R1g5ZRHLkwBQdozyqeoUyrGDyg8NiC5xznj2r",
  "key17": "4xFeFywHwzT7HUEJCf1RenkjSZzok1jtk1AEUvAWPB27RnsUF4k39UMD6zvapqBzDfx9HXQcaSXz63aXA21J4ZGS",
  "key18": "2aHbo9QKTD1TBVHK77VGTmpBYDYfeutvV168jVeLn7tL8aXvVUqUYCts3TMjMfLQnm57kV1MEqTTPZpWFVwfKFiF",
  "key19": "4bSW3ZEZvcGrXSCeDV97hNQdXcoxMFrTNUGkCRxHj4odiyvS5f99eMbobATiekPQWeBEdPZNXBbT6N3hrwTzByw4",
  "key20": "228RNQs2QqwNnY5oBgd7HzcqY2oM2tKL5FVEAe1Ji97SZvUJeB28NaTmKvi6atbk3hKdiVLqGKBYaXV6qTSea5kN",
  "key21": "5nfuPsqpVwowU4xAzq9te52cjSYVrVwZwkxuy2fbYBxZjYmvcrU3Mi4KV1ZnqXTy1aQSRc3r8LWzsb95XmPpXTTp",
  "key22": "4WD9usKMV7onn8y3ENLK5VPTHkjBSPw24x7t9jcdpD4SbmHWw5uXEqSWEXTdE65hv4kMJEae58FzvNdfikxW54EU",
  "key23": "4CbvTetMYhJiGPddbqaJjvjKEWuoj253whPmv5ro7S5tDqsVsxnobcyZvyeYThWEfiDL4fH7UT1avzYvtnKQakoC",
  "key24": "526ifnE4vNbpZ9hotNPf5szeBRPxfBR8Fw3ckvkUAvfQsmQNHXwx8VNc2cgLXBjhaKbi4xbrW8L4pkZh8X1mckjo",
  "key25": "4EVzovU4sR9PqQdzfWCmoZj2wVTLsoECzR9biXHnDju4KhRdzopEuT8Y2e5xSKkyaBVaUGanxqHGgRTp1THdQRDs",
  "key26": "2odkpRKbzn22MbAX2uPZ55FBeXqpCmvWSuR1JyFLKpDAkkVXwweWriVRkfDhjSnN6dVinPKaThSjFCf9UPbS2GY6",
  "key27": "2HwRuuLou3NBwxtuf8JxdM8Rma83re8NaHe94hdmjr2b3kz34Us45zGApNdPs4vuZuZADytxkjX8E9GBzUySh48f",
  "key28": "RAGKcjqLEZDdGSb33iR6dntGXaq1wneePAB9Y32WaP1ztaptKXNAgtgG18fXhuYW2LzMvoTjpVVwbZ6PeE2ARy7",
  "key29": "4hmxdWjo5La5uCdM7UaJVnoXNwq5Bv8mBSccQQ2L9qjpvUhQFKtuCmgVNzhVyi4qSjZLKusxq8KPEy91PhsipBHv",
  "key30": "FA3y39aKYcHhmNkthr89j9WjTKdos3Ng1jwp8eGzJ3XtfBKoFJgy5AQHoNWGmJQrC1F2EdkVaZ3TsyN7v7soRFk",
  "key31": "5eGjBnZ76zMZLyf3VHNPueY2nGE5YR3soCv2uRdA4ZLc45ynv8LDTfwPMc7V56WPmBtvHwNKiXUBJEcFmDnpays3",
  "key32": "56eP36jJLhtjUQwBCTMR3h4ffnT5NyU22QLaCKPx3yhC5hEuyeWAWo3DsR9Y9z22TxQ2LgmmwzUCCVX6N8gRr4WA",
  "key33": "pG5LhLjc9Hwry2pyNYRQQfG51TdV9kdHuTMtx7rsUs2mXvE1E12HAFaFwNpXHxdESHDz2ssUE1zK5rnmvkakwY6",
  "key34": "2W1bGJTSwy1tqt7nDsxoTYaPmMoFS3VU64hvu9DkyFkoWNnV4uCADAQ5GgTR1aF7tuRVmNdBLrPuryVfaHdMppan",
  "key35": "4D7B4xMafCvFUAXCfm2naAVRyCFVQdewKSBBMKyFuyk8WoDuk9vjvVK1nrVrH1uDGw9heHgbw6HqAEEzNY8yn7JG"
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
