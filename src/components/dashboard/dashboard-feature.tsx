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
    "5e9FVsG6TRUeKwPgNaZHSoT6TSmhAymRXghCCJvaHsQUEMqTHjkivNVV2JsNfHig5iTdqTrCzL6go9ucMHxmAgmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRTfcx5hXW7w2LPr5r2WDFCkLd6qHGN3drUyGjMaMPrdKiHeAibwQR2hiWrH5qH5WyrqY691R6onQprCA6EPHoM",
  "key1": "4tkcs4b3z5D1M7QL8QRBqLrjhNA4QaXrgaB13i7PPSeDrn3w4bSoVJEktiV5vz97YMECcxC45UGJobx2ZMWZZ92K",
  "key2": "67jUesETtft5L5QewNSDm5i4KVK53Fh5hppB2omxNerFxhap5VscivW6JCkdQJwxcWJt7Kz4Fy8GCWyeKZB7c22u",
  "key3": "2uLvg5HBLnwQqsoK2ijCFbiogD1T8UHzJjFSvwWxzFVw44KkWf4J9GsqaYb7TnsXFDcjTS6cn79PM5WFdnnVBvMW",
  "key4": "3xAfpmYf1mj4g32nqNzMkB818sdbz5tvLkYJDY1G8oCRnwWMLtGtwX5Y6n5zxHPZQjHqPeV2zqiEePE9oKYXcCD9",
  "key5": "5BEm8i6WmVmG2mz1uoxTtwZwX1wDJUSWBi47SbSr7zWgTNPYxqNoHDSDGi5tiDXEvmuLXGL8eJGWZeTEZjZdS4FM",
  "key6": "5kUUT63tDgg47ttpxTJTiEqc6o8x1pjp6fW9FLvS7h6CyzJt9jG5bZEMFJ3H4Xy7FYaW67TvQoSaNiGE5hLwvtW2",
  "key7": "5PqUVPBxtymLF78xNdxcyo216E5JJuDi4H7PueKRzmLp69FMJeHUR2QQhn4jbpf5iThLzVTuyV14rxNQeAKayPXv",
  "key8": "5foTLcgo3ejmzYvTBnTDaR7B2pRrJ9851GXgEo8DH3kBSqSfBHniHrsFPhfuSkhYaZYiAgi8uBWvqUWfwDpsoTCg",
  "key9": "2HixJD16ALq9pk4JRfdFnfJXXcjbhERPGb8vbJQNbCgcH967TfSep1NMLTfQ4jKtWAPEThSRhBFhsv2EomYSPi2M",
  "key10": "5jQhcuBVKmaeteubx4ACndTmK52hMeYjhKXssxFY4GxAWyppanxMoX6cSEfyQPnFBou6f7dNV962kBf98CyDPN2n",
  "key11": "4XgiYZj7uGmb76iKEtBhtZzWmQdDG4UEg6rQvpvnEXuJvsNiQDNALAXURCFenRCPPSRRk2TkeuTjoWDaLLS28Fv4",
  "key12": "48gBaEiAvARhsnwWGgJtXB6X66SPp7yRDmbwZp7SfRDaL4QPhvUbL9xKQVK7Mb9ia3ico4vTSd9eJgXZt4xekUJh",
  "key13": "4HkK77LrHL66GpZrUnVQH6iLP7M77e6wmuUuTkauPkWx4wt8cms4Vr6LQPoBLrZFxN7jYFGHwFGdaz7QWko7BPnf",
  "key14": "SeNzo1CxFwaBKm13pDMgGBnUN9K89TEfLg9UYafY3MKxLCB1f2o7NwrAkWBqNWAaBRYopSkXw8xoT7gK83Mp4S4",
  "key15": "5CfrSN9hmN15p78HCPiaB9XwU8oiCjkyfo66CkBEucBCpNZ4qzHpt8K1PEUCXB4swDciHW6j2MR9ZBYjNZ8ts5de",
  "key16": "3NLxe8zhMjbqqjQM5rmJ5t5r9Xfi5qkYUhtKqhvzQ2aa92qiajUp44z7g3WKBbaK7KhUdmh59tbVEYKuuyNAALfr",
  "key17": "4dbvLzYcrVth46caW5EhNndorPQeZhQWsqLfdbqYTqojtvCjZdvZeFuQ9XK9GbuGW6sgZFLK12cpyg2vQ2N6X4Zp",
  "key18": "365pQjms2S9Y7LunnVARp9UN3LVAttXy3SEJsgXnLdbQBFuLQKEn8h7fwqQUfZMhRtMfBdwm7EWxoSUJQkuVFf4S",
  "key19": "saXdrhxd7jtrSuWjGXujPu7qN9V13aPBr1PSczp24beJEAeDK5R58XUeQfFfbS7GmZ2xxp1VUjepCWd5d71uFRx",
  "key20": "4o5XMdnwmb4hCGmDNp8Vyo75iQcQENPLpqFiFswAVYLGfAW9e1Jm69vroWwDoAQkccUXxkGrMK9rxCXctnQ4bdPr",
  "key21": "8bDaPXEGhBEfE2ykEBqzZA8pdaFkPbDBtZZvzkdTcLDQQwLNhbsvfStCHQxJ1eYsY8najdkB19WueoSwdadNMZo",
  "key22": "4hpLJCWm3WCA82N4Ptmi6mi79qZAcuge2SeWknSqw616Qn14ceBmWGHGp8GVJRz6KYPrybkk21iRnRtdyLBed3Jx",
  "key23": "4oZiXc5n8HeE9ZGGKUQzq9Wnxm9JQ7TC1TFbS14xKKatNT8qXdADDYxXacG8Wn9VzPBBg8X67scchJcoMR7FMubv",
  "key24": "4CXbq2HiuGGtZmy75qeXe2noHj79VxkfSaFstNBc23xWzNPybRXLPJf2RErsct78ZaeyaUSHxfQ6gju6c8UbKeTD",
  "key25": "9CsFcgsv5if8VYzfxMVVPzY35tLDPbLW9AmXJHFrthqGHjmavipq6CJDbjgEbhSpQiP6aLquJNYjfWsqzo48mfL",
  "key26": "5qYH6cmvJ5ZbmzfjyMmULg2irjaaWGAmqAooXo7ovffRHo2ecVaGKyCN9E9PvV18edUUp6gwWAJ2T3AXKKFrevc7",
  "key27": "2PzCTTYgeVu4zb3t9joDia6eV7aBM5z9rLYBgRYXgTMDZcZUVnHfwbDRdbiGDxnLTBHqySMMvQ2oVjjDP1oqkcMA",
  "key28": "3mJ1tnnCbtvDtC7626RBjqcMPx2xetpNLFTSfTCbvYGgU5Wm2xHEKjuhXeU4wswmSJ3d4DXMPmikJ5nSktMjpVq6",
  "key29": "2MT7ZWDRBkKjLmmEsGjHCi6d1V2dBjtBkUun2m58K4fG1JFRuJ1W4uvswENGJY1juA57pwJ3Kx2Rpb7RRUPqN6o1",
  "key30": "fatebFDD1XrDQnt62LDbX4y4URbBxCDP8aRSSSEAtGBBUPtJzmQJHaFgENCkse8EKTUPf8MQg6cynvMvEu1SmsR",
  "key31": "5ACtX5aqQwQ5RofSY6muT65obUWqYHw4JRPRpuD14kdDcDQeLKb3rDnsK4wdoaLh2juh1eksTy99H8ihsTPs8A2z",
  "key32": "4o3s5qZkYmwzRfkAdpLJ5om4pf4sDKvV3XybexYHTk71chY5HFjroPxKBqceU44qZYFKXZR5uZhixf3V36GhCo9G",
  "key33": "2xnmT4sWdqsvHNbNk5bJ4jx6K416JaJZKqnqXmFwuZ67UbsqMfXZnFDXB7Wt1CmPNDkLjfCQTysCNXhRBq13EteD",
  "key34": "2MNtKpHqatoqg8PDxfEKD5yZyRyihnzvMtbwUMHZpAX4RB5BQEz2tTdmiEuMvSSGZ7ji6Wc8pctyVpA622WD5ZSk",
  "key35": "4Qs3tUpDwvfu8be1uiqkgue2MGSn8Ke6JA9vsihvtzKKK4Z9aSWR2x6e7YHSbBwPAA1f9aZ7VDPftgSjZpE78Uow",
  "key36": "437ymZhFqbG9Fsim8TRYTMd49xVkdyXzeoLr7LaDfL5JySQwNes666A7PrjbJkrsJ4EctsFJHgMjLiwQKnsUwVEK",
  "key37": "4TCEguQN5nAWxsWsDDRcCkh98PPr4U6HGuv8JMUem7LFzJBB5BLAdhrFGP5M7dD9QyJ6t4Wv3UPFCGH14gbLFGKr",
  "key38": "HnxEphdjxWTCEBEGwV1kwMcu3s9tkHjg83XCbMKaroK9pnbwMxLUxkdNcrQDMEjXrZqCKVcwJ8NJ5Qn8uQ2EcGd",
  "key39": "4VSmuMhhMc8FFRFfFjtmAQu6qRnDwPr6L8gpmbwCJfosNWE39VM6antxZBtAsLbSxheP1V2xFzRisKjnC896wdzk",
  "key40": "4oT6En4qZ8ffjPdn3H7BduUjvCxJWSJHTuZqxM1giD7T2gf4aZsBKEkLknnKF7dq5jDzmr32HtmP82TyUMYcBB8n",
  "key41": "52JevU62cseRehLNSScsFov6RbyBDQRbZ5k6g1DBARPiWqfkx6LuC6pP8ME8r1LJi2aWHviE4ig5tix8wcfgj4He",
  "key42": "5GyzqTQ2ee4adbqxJJJyz8TBmnNuH2cdi8tfH7Bsz6ZeXYbjFLRqdPfR4eiFqzcGuwBLPgkxaTLnJh4NLdYtfosR"
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
