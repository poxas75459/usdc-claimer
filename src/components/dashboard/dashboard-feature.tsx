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
    "4sm1iZmNsHSzwkH8gspPT2AnUipfexc4CbTrYNZpK6pFpzmmWFb9MwTZBqckJwH8XQ6HKnbt7AaAabFgHkmeKrZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nDmkGgKiAfwNcvyCcm2EBQKGiouRb6jF9ChbNFb4vEekG7WVy5WxQAHujbT2mhBGmFuv1FoeCx4Pyx1m5oJ9vzf",
  "key1": "F7VnGm3g76NoHrbhANMNFhhsMXYo4KHSmdxyH9ag4bcodsHCPNDyPkREis1PccUpjAbtRYmRQjPbDdyBM5LNj4C",
  "key2": "4tnu1z2x1pkUgCyZw4BM1onkDUBUbK4zMEaT9EF9czaiZPhjFGwqJa9HhA7s7htfigYhva8yYcRyGxtXnwZFT7ES",
  "key3": "4sam4M61ojPEiKmyyy3H7dBkPFKUs1xf73LXVdVqPXffvyJ6D7uRqwS6oNj5143MYq546nzTE3e6Btb3hmBVP5fX",
  "key4": "4Usmw8qqEJy5M5ZAfE3Sb1oHxrqGpL8LVff3VFNATAMiS8tCSHi8H8NLBT1JfPVmC7ckSzeVGdQoRMJw9SSGsN6i",
  "key5": "XjQvRfT1BB7YR6puWQSUBrqXbxkV2DGXqpDXF6ddnkrPMxaRm1n7CpjpaXpPqrRgZP5wcY52APZBs18eHT8JjVV",
  "key6": "67L6fNoEhsxbPUYCSbsWtN9Yn4NSVYGYZ5rKaoxFX8HUFgd8JrWNwvvr8rJxvZY1fW3NGZH1SVhKodAKyDK6sfms",
  "key7": "4TyWfZ4oK45Dv6BgDnNuKSivRYmwrdaGKB2R3m7Fiy6kKHRvgA8LRhvMpYv28v3VWNaM6saHG7TwcZtHdhoYeebX",
  "key8": "522zMPgSLTaDpRWGB29v6BZ1K8WjKUL3o3RXDZouyTMorkSvApvsXYDmb4S2G9xS7CXgQMpUsYCQekQKaUe5yq6k",
  "key9": "4okd7XwGLEn22BiNhG2pK5yAb39EWJChByoLNnPahY1gbQVDdWkhGWkgNuZFk38ApRt6n55GgaxPG3Ug7xqXEuhq",
  "key10": "4cB3AQr8fYjQD4QHEhWKL7v3sucHcwu5vNoeRxptaNfMhAyuCyXzjk8GXjcfmjDiQAeWdMyxGh7FaijZzFvtNLQm",
  "key11": "33iY5zp7HM92UzZrNdDrgA3ZQ27JpvqqtoT48ZdVzuxjKwKask8oS4KEzrrYxuQyTUpZCZZHk7XcK4nCfvNoBr5L",
  "key12": "3RWQ7Z2Nd8MpimUn1STAxkUvFmAb3bKaWNjZbVTjmQBwghtSweqYySFzJ5Sqwe75CFrSPhK2ThjdZCWyrk6PUGzc",
  "key13": "sZFHQqKxMcDDkFUudwM7B3LnFsUtNVySVZ16Js7pCRtRFFQMssYYvwtiozMUAqGMk7N2MJ58txwfJTjq8WGrXkk",
  "key14": "2YK6sXQmoLiNr3iHXF4uDU4DNeLVKZVwtGyCBWvocu1sRLSerbtjYjQGDPqz2o7HJY3nD322rFeUQfzPAvMrzta9",
  "key15": "5RvnJ4q365tFXcgDiCQrwLs2d6oAPoGLY2kvL574zrsNyN1mfgszvm152JkC8XaEWLqbYmS2Sys9ThG7uRMUhQrQ",
  "key16": "462MeFUZoJeDrwyXbKL7v5RkzsjxfX5e2LQX5YysMkzGeXQSpJq1buYZPDzim3rfrR5hu6JcJm5vND3U943emXdZ",
  "key17": "4q2cPz42LmPe14nmF2K6EFohAnrNjJPgdbS14NGkCbss2uvQGbbcM1LKC4evXH2vLUxrCLdSeuHBACJhxQLN9tit",
  "key18": "4onWgkcrDtyYDALJj57GLX2mycyc7Yg7tBKFMJ2caMpszz3GwQiQwRLeYkMQakBtcRr45xC1WuiPTXAvCCS12QUi",
  "key19": "5TwuNrAhLnmbFQt4AJ4FNtv7TuqYaqhNfNVkhtLo7jSu7r9cuKQK4tDQEAA4hMcFHvNGMP8bBdDAGiwJvHc72mqP",
  "key20": "xYj95yKX27RA1aXcipaP2U4eDNhM2LzAjogDwEq3LXnoRbCqEVBLisWsnHtGvSeAF6nr6KDSK2tD2wAs2wYNKc6",
  "key21": "5BKkMWMAheLwpz5tyGy3mdr1TVy1hCpq4zo61SBXiTqK5HLpEgbx262motwUMTkHJaBradsS1E1H7T9LZU2hZvwv",
  "key22": "3xJjhALfwtAWns5fqNXLDP82YTSKaamUf9S9JPceZc5MQC5fTR4dcW5GUwgBvJ59nzGLwhmdDr4m8xj1XfYn6Hsb",
  "key23": "3KBdFXeoCWaknTCXWMmy1p5f8rqAHPsExuAM1Z84mAz7ZYayqff6Hddq2u7aP1p4EqJzEQX7x1upVJC3gBNDGmW7",
  "key24": "3UBUS68XJGwNrTAZKPeNeGGT1P3MuigaqyzLs5y2ZFuNF9Ji3w2AD8SS3EDcdkWZ8J9wVcgJjcw7Wz8NZ2yoZhbH",
  "key25": "29edZzWd7RD5eLJFTWGUemhd6gGvJDq1C7HUe1qYQXQqJK2NqDiqtK7QEw9jnKjipMkw6eqw5dpsM9ehA9w6zZqb",
  "key26": "4vEgrkNxdhq9dmxQ1kKnx1dHv2ZUK3JAEdH7WRdgkkpgx6QNmPnzESpW1d9B9weYTa9q9oxvNBKzRYsJhSYpBRap",
  "key27": "4vYYVsYHEKyLC9scLSzHffnmWvHknD1YpmcwX2bvVYbx34y2FJVdoJwoSWhTe25tenEsvpYyV4tKXRtyzeZg4DFR",
  "key28": "3hrZKrLwy5tFSCJpVFdiq81f6tLTUq2SuezfaKn87EmbtWojHDvTgPTMWyGvu1nE7VyVNjAVgRbdN1kvuztDqhfp",
  "key29": "31Ee7evKYWPkCvEzBq4wSrexraPexBPasDWk54pXWnizS5FrFK6Ew1kTVubuX3VPWJS6quQEMj6XiJmTL6B3VjrZ",
  "key30": "5wUq4AdGZYUgAJu8VikS5nUQ1vy6F1xE5us4t3dQjpqzyC9U8xLMh97ax5xJwaVy592DeTUkiq8vQwXb9VCwx8cU",
  "key31": "32MVFpfUmz1Gzbuy8mfWZcUGPdN53HeDirnxvnY4mDQWDqJmKnJYZTNNgSxCGR1UPrhx83yQVfbqAzqY5s76z1XA",
  "key32": "5FVG5b6E6hbLb6Fd6fG4QuWFxYx2Ew158CiwwHNyAtfNm5ve8yVFzai1p8Bi2WHjvUsLi98JPcpoGpbd4XKucKGd",
  "key33": "4zqp3YSFjSm4u8GSbc2xhRpde3oHkDALnEh6FW7Zqz2KvpgnYvxHj2X4Eet9TZ6HGBPYaHaRWQXSXDSjwLbScRw7",
  "key34": "5gMwHwAnJdp4779ZUpg19GUeB8Tc3JavzSji4dwP5VLVoff2efKSLQjhs5JNxC2x2F6N5moEXDNCf7qvswDNqqsD",
  "key35": "2uqYpfUfdggzvZdtnjFzhDKsstkbnJfnxLCuxsb5cXq8SYSEcygcNWFn1bt287CAnhpiqnRKn65S6dBcfgMDTCBG",
  "key36": "2saL3tHRbn93nXwhDBBVUXixskUZ7ZJYtyutfNH97SJ7wahkYFM8gxSBMqQmHjZuxe6oVdzuo3fTqF72rjKLvdH",
  "key37": "8qe3g9i2AYv9vNiq3FfJJrhjCB4wQgni9RbmS7WSrqQ1b9zcNmwc8H71TP4n9SatCjs7Un95CqpQGuuP9bynr6d",
  "key38": "5qzzAVZY3cK1D18mz1jAj86yNPe5MnwgmhtK1mikSKw2PV8qaFha5R1CEWjuJFbKoZXuPSAadeHnyfZ3Lkq4yZfZ"
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
