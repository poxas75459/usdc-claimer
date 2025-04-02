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
    "THxT8iKhLz5LT4mih52HqYyhZ8msSyNJ3DXmAqQeMWxiq5BWquRJyKaWNJxbwHGw75UiXK73WyHMkudu1KYrTeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VDUFYNqJ413jc5P4Vjz1CTfb3XvpZdmMBsrTEKKAeM5kk2DZXyZAPGMsqFFpuBD4uSPda85Q3AECmGKvn8v5E2R",
  "key1": "548heByZgLV5FTybdYjtqENzpg5KkNiYsavmuu97LZNH69RpyBNnmMnyiZWb5GZ6ZSDXE4rqS7vkj2k6gkhugTTn",
  "key2": "3dgWVT9aGmWmMnG3Kwi3B6cteTPCfGtoXjChxzWwAAW9QLV41EFYrkQzdbHBGkd44XhrYQsP9ro26fob4V7m5Xt",
  "key3": "2YSwRr63d2Gf9zSiZjGf3eCoC8aymW9FU6jUingShsampe4ZfY3DiZQ1EhXzfCHQqCJzXuTb19GtKmvFYCShHtm4",
  "key4": "K31ojmPKu8Xo9GgGVbE1ZhZ7u7GTawPc8SjSFAHjQFNEXLwsoDoskJNB9xbgoxTgsq3cq4zHqUMdxH34Q4KVo5s",
  "key5": "2zuGQP1mvWyrukNbKnz31BoxNhZ4iBrBu5iB54NoCbAu9hifTWGcqLdQGUsVLYd3vs38ZUBSFxa1TnLKEyJbbcoU",
  "key6": "4JNZuiCd8jmmbNui2m2jETjaL7TTHF674mRXHkq6gbmGaxoNCn4Egr7eDuWZ9vQg5FsRkw52kxcG83w3VQurThor",
  "key7": "2VQSKxN46hXc9mjaow7oX146jn7GgTdkXfjQWjgwWypAmVLBwcAivrJDBJJDFytwC8jj6sdk5YSLHMTemvJ5tCt8",
  "key8": "5RkYTUDRhcnNhYqVwkL47715f6raGogBEWDHJ517BYSZH87nM7H6551wskwQrVUYztDvte3o77jSQ5ou3eEhTz54",
  "key9": "3nb96WsYcvVDDkeMqtgpwJAeHJboMyEdiCgXQxC4DkmtVSMuxLcEttfXWM71TP72V5m75RMQEYQVxfUy5aQ7sFpf",
  "key10": "TkTqzAEzmGUwCUbbHqXSQ44YKV2PPVAqLJC2xbkT9PNxuEiTqmnPUgBZ2DU7XBqLtXd11KEQPQ8oSpU2kuvzk8Y",
  "key11": "5pGhbVzHdbiBaVyAc4EjeeeztqaEwWgyBYVMX7RRMueNA23iiZXY5MwSPozxCFKXtyGezLoi1aZaMuQs2snkDUQG",
  "key12": "5d1voBhfmejsbFLhcRFpeqCfif7JkjPpui48n9R8UryZeFDqyNuTZvtxxcYrEkkc9NdQHHNYQJM6vmpX8qzRyAXx",
  "key13": "3tXeNFD7o5LFxEArdMjfAjmwugr1ZitqPzRoDqWcA8oaMZPyabbZt8BwuasoSZ3VqkmDp2hkR95XWRo1jJGcHhx3",
  "key14": "5YRSpmnMpMVd1Uq1ov8q8jKB7zAmVy7BAojNa6HCbRabdbdZU6epF5Mxk44PDVhMejKk2zvwa3toCjv4uovYpxmB",
  "key15": "5FG5MU5An33EtFq8fvufDy8tgMH7GqKpMLQhAT8vuzot9hMmMVANvXBoRuS2ww4gCP8mAoENEGVbDhbn7DFw2z7J",
  "key16": "3BbbQgSt283RR2UXvxMNVtQHij54LBKN1HifY4f2tf9YZFxYti6j71CAbKPt5e21VYY8zhPNJWA4DrUrgJzdmioQ",
  "key17": "3a77QfhyWMJeRsFjjqFZGdw8s7yDX6LuuTQ5QchVXbmZ2oXMPLc6gDRP88TmS6xP5gD3AZr9jSNxG6zC5LFLnbhW",
  "key18": "4DrS6qMYPhMHDztfko3oRioEM8xAqHLM9xEZZAB8Mep8sf53CgjRoQ4Zewg12Uar4WmLuhW6RLFXPdoQbNk7FNaE",
  "key19": "2QwWJryGgmwcXGwBsFerBHc5Q6dJCD3xrfW2pFAorpSdyQLH272RicvB4DtkHBwnTGKDsJXZePfFxgsAL6rDeBYH",
  "key20": "5395gkTvn3zkYsPixX9x59Gauy8sSAztsLsrbwYgfwvdhRXVmA5NwYVvNHm4HXjsd462KSmvn7Wr4fJfbyRBwLTx",
  "key21": "5qu3Ebe5YTCVxVVebzthooFF4hwW7X6emiLtiBF95182KzAzkAb2DrCV4BJRMArMXQ5u7PWzyXrTjnRuMRm4WETM",
  "key22": "2XVqyszYUCfXtaRi8tnz8HWXmdzPTrXfbc6QDwhxoALQ4cZRkWpjwZBzAVybcqpjPaG5Z7k2GcdMeadfQcdVxGWK",
  "key23": "4aask24E6nUT2yhtbkvC6vseCRw6GJ45e2Trwrj6YTFzJPMHCYdr3keHZj2MWxQtd9jjU4HSkXQWNoPVCkzoWSVa",
  "key24": "2mJjFQ83pcPcHKKqeVeiv47BB4s4x4drwT7MHq4QJRJZra3DfJymSKDhtnyn4U4Z2AokQqL4ZJDbrM9DKxqpyb7j",
  "key25": "2heQA8ncAmiukosoh29ENzMKP9G8ZTPs7d2tWJZ19PeGCBVZmr64i8d4V9yBb8neWJ2Zt2r2cCnZJSzDwngjSEJy",
  "key26": "3aHNzG3T9WGfEc1Js9yM8dnTu9wnPHMWY3GoJHiwAhkLi2fGwS7XJveF34ofJZs8yTEzeQt6sozbxYJRWJTdCr3H",
  "key27": "3zmkkqkrpvVCKbbDR9Yn8MxWcn4dXvZLxMP4xPtEUJamqBDxtvG5mZCskZuoM6vEkLEiYqR5C38nSpSgHRDAv6zF",
  "key28": "3S8ppmjBU6rkFuaMMvkqfDfMVXfUEzBn7N5azP1Eioh9LaEenSBtNuDXUViZtgQ2Yt5GjkfahhJbF9Pc8ndBv1vt",
  "key29": "3xWto6pJrzKnMdANqX5VJv5LtnQYYGSLao3Qvb9iKe4VaKjvgpEDDCVcN3mJ9G1Z6sJSyP5ykt4rQ1jDfipGDLrH",
  "key30": "CRenNpGHDQSdGZC1aeB531QrGfoWm5fvARRoczUEKeHQK1LpVcAXKEAkLCyDtD7d6MPpMwH6ghojMMvYVqdpeq9",
  "key31": "khYFjLTeZyCzg33nH6DprgY4rLBCD4BEsqBRgu49UXXanASeHWjHHC2NuCQ7wCST3g2mkcFquqywB325bSxgiua",
  "key32": "Zecupqa2KrmoPezMFhgb3hdtR56YDNdFbPkpjDgb9QVZzKvLsVzF85BJ3iCNJiqhDcFq5iZdxHHHzm2yXAgMTtq",
  "key33": "62CauErWYj7pfj7CLyuyLCGv6PCBnYHFKoUtopPN8wSQyeTEXmkzRecPXxtGi98EQS8VamVTLeWHgtYRAQKh56Hu",
  "key34": "4MX8NbKSdiUxQjn2bXBkbh53yLdYojmuRVuPumxoqYefJkMH3nFJ13PPpbSYEb4SkYCVwQZj2GSyMVgzxbZRQGAD",
  "key35": "28zDuDwEgxx6gBSsCDB41HdVBsYMMczj1Fu7pSJ6hqmgJKwq9q1KgwRcUwRsYatyrjcs7q9VzwML8ijd3CsggQo8",
  "key36": "4eTeTxqwD878hycGX2f3gKbSAaGmY34kmjigZQdUPpZEumxKMw1qujxx2BADVj9pqVRoCtsVCypMFVAYh7Gzuhdy",
  "key37": "WKeeedFwxQjSsCgXcTTNC1TQiMeR1VmSTRT6vALk8CG9f6BaH4ej7ZkLLWQiUNvwatyexAnS15GyeGYyEAggTEQ"
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
