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
    "4KGYDCRFMmBSswnPBtkudLXLh62YGtKeFKcwfQLKrvaTbMofASCLZyy8CXJnXY8UhA7dfhVDfXjd9T1GCTEeQKDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKvZBgubrbpVN9hWo7GWK2wzAS75VV9JKtDBzWVTDgfzUyNdqR4joZXeRxXU3DNv92UBBiuW6zRC3xwCKyfa544",
  "key1": "2kbPfdtNGw23BYuuaYRid4Wv8LHkKZVGmy3Ht2VyAgrJBitFGXW1gvbPX5Wtt7hhoGFcKJfmkYEdovyBemSnW2RS",
  "key2": "4xH5vYriCgyRhJtcZhWTkV76WsSkQzYkzqQF2T5LRhPWJScxqGC4FWAvJNTPykp8PEb5X4Qw3sjomi1b94wtqDac",
  "key3": "2z9j894qd3GpzdszZpLeihd9c2oYuVxi93MKRrHcHpT8BYej4e51hiYj65CKWSvrySYYb7gcgfCaPEbEav5ya4A",
  "key4": "P1eXS8LbES3dcSALCuTTxfjPSAh8MA5ui3eRke6LBWdXxniB4JbaxkLiYGidnw134F7k6E8bkfaDpFTFtrJmkRn",
  "key5": "2AdSTQrBXx2GtiH1WN5ARyohPFZd4jpRc6QdDnonP5BtS8ZUdf3frFHccj7UDt3oigFubqJeCBrVbgacAimEUn8D",
  "key6": "4b1tCEB5KLoLmcamPguY3uYzGDgbdY6183RsHcXn4Q5kyHHewcJqbQcM9SfGs3toNfYU7Nybcf3KqtQy9G32GdUn",
  "key7": "4GcLqsBg7U1YiYzpxpR9xuMV9eA7B8eAmHkV1j5Fwxdw4adiinFgCGvwf5AWVjpSRgHQGzVt37ku5GxQpnDSFPzA",
  "key8": "34YAdzZYPLVRUZ2HWzezFPQrvLynRhc4CZ7Dszg2eBGUm2KHp9DqH1EbgyNUDqZMUE68K4zWtVJvjn5tHDn6vuBP",
  "key9": "5BUa456xgcyJpCkMSTWvDN9aZyDZwx3ViatDFL8EDV3r1FniShCtSPw528rREBhaRvsHQD6hSNEe4cz6CLPYre2o",
  "key10": "5S7NETRNP6YnbBGqqtkzyPijwxKSygHqwXE4SKGkK1sYRmovX3G6eNVsQCssqmb2LHv7csvs8BDfiu81pmeFRsmy",
  "key11": "4j1jdPJrMCPhztGgXZyE6W5WgH2qggCe6r76PupA1Kjt9aG1PjmvMLwhr3GEQetr1CtHi44tVpTzU5CdAmFPekjQ",
  "key12": "482TSZwpSVSwgREQhwtoEqzEDuegXtdk2mU29uySqaZ4SuzxMkty4JnrxUPsekATHW4XMvvLksb6siMMUhNbig1z",
  "key13": "2gkESgtMV2EwTX3MKHYFPatPXzspqoBA6NYMTC2L1z32C911xe5f1BidGRnAUfEmLKrnj3U2WJGTLaLtWXFsfMkt",
  "key14": "4KH6Kp9qzdDvYiCeUgMSRnBomk9tkPHijfgenKTaC33GXNBcFJw4X9pU6ZFetsBEihbd7eU9Ne6ZVGvZM9KoudL8",
  "key15": "22jGjSw7UU6jZ3rRtu1BcGpMmbKkruUuEvMrLhyTZJzMm2wmHrbA9g88KUibLt9AtzBCqDoKysq4bDhYMMB2qMXT",
  "key16": "4XpjMJwR77gCuxZJYUaCnguLQqXfeq1rk4zpMMn5iuVV1Kd7jzLZkXR9ckc1N4EMucU94Vk9VX4ntdYt9syAPMdi",
  "key17": "2886dHddwD4XQ2tUKU9UjbU1BaabjnGFduRGzhSRzwCVQX3vL34rSDZiZP6ppqQdjAvD7ZsYU44AmRfw43feMah4",
  "key18": "4Swv5vNNUJfrY4jf9YaNGgtU2UBbHTGfLdgLxRQRoRVziXn2SuzycLhszj4MAM7fa7ui8GmEqPzwPgxGnjV2kBEJ",
  "key19": "3F9farfmWs34NhY6MUo55cDryVCXvFbi95R5WnSjjtxCEQua9NyyDsuaRgexLNbNGRmuSwNtHVsowvrg6tm9iuG",
  "key20": "DEzvN2FF5571VDkxnn5sg3hDgfmEnwSogPGX4hsVmPUYv876WJGk5iCwTVBPVaU9q5gv9NPyA82a1gVjpZYRubk",
  "key21": "4Woricw7wMWLX4S6TS1w7bi7XxQ7VnTRgbqkSwqZ4TLszctSKwv3bzHBGFtuBbGBmsLQPH7JQHnUZa3xk8Xe7ovf",
  "key22": "2vgZLc1988YtmMLR8766vt3jnFp9oJZPcxp7WQi6BNSw6NKxQhSnCyaixuYqKBwyRafKGMLtVUGKMtZcGU7a7MZF",
  "key23": "XgysdcCr5Kj1TtX8UAiNRCum3wzLb58YkVnimWc5GEERsbRkwiLZbzGkZ6K5b2EgMHbyMTCiwgwNxdJfD3sXU3j",
  "key24": "4P93DKkuJgeoL6tJRojMYJ3ww44Zki7nw4qU7N49qAjvT96K89v9qZ5VhkcNQz4g5PQhQEUVxKDGuTTDAzrbbJFy",
  "key25": "4w2qzx1TGpSTpj2mSFYo4JhPQv8LfkLdnueFNh1dVZ86q5JMMVx1DdUFJYyu9fm3AABn9eLbHvqmLHrAMQ4M2vDB",
  "key26": "4nXfRyeqDq3DbRTWuLAMAm5p4ZrBeaFE4quixcyvCGvPbXAkC2uyPiMoAHYpkjE2WhEcpgRcdXrjP3CrdztdgySD",
  "key27": "5L3pqrev8FXzggxBnRARTEKVgLkmc7XHrFpJswKGmQj581Gm8uizxHvSJRNzt5Ey1K5zU9wSKeHCx6iuCozZNF3n",
  "key28": "AseQgykRgJaZAYf9JMugGVDyvLxEtddyN9Ti48XbghDT3RcPXENqiDyWGJUPoB5diVzP45WwakQameeYMtneJ4N",
  "key29": "5fekAygZpqoCXVQkHFjMnPa6eugFtRZPe6y1cMGkbw3N24aFwvhnaqQC4jVXfypJWs33gg9vBsFn2juy31PAgQh2",
  "key30": "5AUFgatvF4eFBuV9qMhLDsoE3kvTiJYd2Pw94wLJCB8HuYVYVwWmaNAeZG1342uMRaphbF7RcgfUVZU7VPyqvYT9",
  "key31": "DNGesx58FqdJiqR7TGJCtvJuCVTQFmoEt4fd7DbDcLiEeUhMbk8AbTSeTK9cMXBsHSTCYPcMVWfDJirbnvGaHUa",
  "key32": "3aA8J7WLrxVSV2VkaPZt1GeQfYr41PYpd2FX14GaqS9tdTfmndSE1Ww9ieK21V9A54RzmdNpE8Wmg6wtngfUAYUo",
  "key33": "5T4qsXRnodFhp5tFGEeR4dKk3irHQPeLhJcztGxdLUxybV1MYTnnswdCQzfC9fB5WsyR9qaqvcJn5RdMYG2TWC4j",
  "key34": "2ihWTcKZziM22doReKUh4uKEW5Hw9jrGC4gDT4713tRBobfGi9MKNoRAPD7fS7E32zEpL7s6UZF3Dw1R1zLmikcz",
  "key35": "44LVnAeL1dRo72p4sHd6HkRwigd6uxr21Wk75xoj427bgSK88kVBXe12Th16JfAcaQXTesfY1zSbNq4zB36mMjF8",
  "key36": "QdWmLre1whzfdAKHtLBhmthGgX1k3JKeMEooYZFKcReCrV2MFbBLGsTVsSq8BTrpZBU4otnL4B35HQfGsrAMx8f",
  "key37": "3o69cDr6Sx7FcYrrxYB6ks6wPM4WoomP1a9J4TNaZW3VLXQPo9uB9ornvLBreEfjMrcFAVkkuGKmfNWuVyw9K4vq",
  "key38": "2usYZz54252gw1yBDFXfUpCTDvwcnGxHrG5LxYDLY9vLwhQ6pqXuo4urXmsuZMz9HNChMjY8KbqWHacGmZiADo6C",
  "key39": "2SaV53DS572nTK56bwjfDH6BPJAySdWaJJPV77kuw9hWDQMwkLUBHdeT2Qgc3nm5ux8PEU3WfMx6Gv14rReVSMS7",
  "key40": "5BsQKNq7VTLLbBTAgh9rZqNwdV4bZpRLX7XAFSzzNvKEfqcr3tkJgd7f3HAgf7iGy5Tpu4hT27DpXA7ioowhFG36"
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
