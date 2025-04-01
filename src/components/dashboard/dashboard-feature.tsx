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
    "2im19i4G9TZ5YX7Y1nQmmxjtujC6GZwcXNc7da4WnrkemLr45bRWtpN5jktEgbWLciqZ1BpGajQjSLwT2ZDnKWVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ba2dxnMks8gTVJZFK6nFiukF3iLzVvmBGvsxizuwwwkhrdgHHvBYoNStks84mDiXphFD6qK2z7F5KzVM1fJ8zh",
  "key1": "iaQ9vjkv6jBENUwAE9MZhqUTnTtb26gDCUAkSgA1upeVnGWPzi1avosEoAxn7siSG6QHzgiWpwfTznAQUQtnmrk",
  "key2": "3cbSFtEXWtysyQnxzDGpAnMMkCfsARUN8Htt4e6kEXJTHEi5crkPjTktvuBgo2P5Xcon8Srh3Fv1hboJrKTwJz5a",
  "key3": "4drQhkiQdg5wT6rcaVANYHwcAR9rrP8MVEexDqaYRTwAFxbF6YKm1PkvwiUAaBGNtMqbos4kzNRJXw9LjDqVtFT2",
  "key4": "62LhfrK5JsCeMr69ZpLaM7bk2Kr475BsQJFiWgBRy2uuG2PyyuccFkAXPTYqH6Kzz2ciAQVhvGmb3KR1QJuPwv4K",
  "key5": "h2e7REvBGSQ6QARzXKyN1VemNmLQQX58QX82k8epUHhhrKEo1myQZqTcz6tgQJYqKsGtzw17iyx9BztHqwMaxFP",
  "key6": "TDyKMcqUU8JUcp299NacMCKa3kJv1iUH3CZLv6tj22j897SL3ZWkxpNXDrvU43BFMcgqbwy4mGJgo3R66LpPKqh",
  "key7": "EL2tbP6KrkPJsfXtrpwbwMgmgFBKNmjTsPqhJUB2DCvGGCYzPzQjLmdiT7JAMPbpAJRQKwzsJj4MWaod6SDF4JX",
  "key8": "2jDrBMjyFLgyPivSsP6tjKdojeAVYP3sZVRGaiBKzavRuMTfx6kiq9MptJWggvSA7z4Tm6nwMRQq9JuKzPr54epe",
  "key9": "5QRDRCa1A9iG5a7QRZcm8czAi8kBxJLeQkqLE5fuU1Ycsk6A3X8oPMzVfEDyUqx9H1rr2kh5NASJfYFzUSrXgBh8",
  "key10": "4rY7tQfdC2sskNNwNKRZuxqX91cmZcHWTYK8wkoxciBRTajKZn4GV2CSgpPfWjN4SVLyJ7qqDa2jkgDTqgXNBGkr",
  "key11": "4bQodQAxQUKYoQhYf1EXR2HhVkMhCfoRJHB8d8rNWUdrz2ZHc9GcTzrwqZqb7ZHR3HFy1j8mxHVWBTxnGFUGCaKV",
  "key12": "267o7DENnGMtb9MzgGLhegRjGoYejN6SCiFW25D21KkrGK5WUPqcrn2QfSZhgkaTjZB15C1n1GYAybaX2vzxen5C",
  "key13": "4vZu1eDRuWGN7SEcafN2tD79JXBZXpAX3WjfcsFsZxaA9sKjRFej8VF4hyob8yaSzcWCP1B8r9YdqzE9hZ4xhYjT",
  "key14": "3jkRD2R3rP8QjdM6KutBXt1HUeBAMCMVyLsVzdp5f92YP4j3PQHoUoXa7ieMfQkwndKUbdcurpY5oJm6EFvDTUpV",
  "key15": "43938xhtyyE7cS9AKXMtZrwFZ4s9QcX26Yij4EQVGatX5iRRFYqR1MSvpuGvLgxPNHzCYbg27sBtnD5wqEXFmptt",
  "key16": "5PQTVkSfdHrLQCabeiQhLnQUTcFg9pXBmasEHBrpYpPevSfw2Rk9dDnCg54sTSSjFAztm5H1eZ5qbCdzicFwqLxq",
  "key17": "21XrdF6L6A7hoSMGMjkxxRqEiwxeGd52pKq6cE91YzJi6iezARUhrURyvSZrmb8jMqgkbagR7Te1boV6W38R1idE",
  "key18": "451pCDGimmVRn3TdrJXETQgJ6KuA7XPXwirK1h465zPo7aJRdqyJgyUgCossCk8FnspRcFUjmyGmab1RFZLj6ded",
  "key19": "665SNk3xhGSWrdwitgxygbW7WPLrWpGLSLQ6WpsXEEhF9T2yQ1djUvifBpt7zWuShVvK89eiuNwGKZMJENdccPUS",
  "key20": "3e9vm1E1JPSuneWc3UEfunFtaxwun6sNhYFWGY1M5Cvamc5rNgBVkmsiL72WZyN4jt551YH651XmFBTAMBXb8VfL",
  "key21": "4mvp1L17KLXH95GzFMWGNYzNaY7JA8hSacefBrb4s1vt6fxjtWdniSD3Zc694BSabzgRJE2GfgNZWu9Ew8VNSWzm",
  "key22": "2P6HMWKJ5PzM9r9R26PkqtB6cq6U8haD8YAYJ9WhUdjcnSLZrEXEkEmdqApKPUUK6Qpm6u4HjmsANP1UCEZnkkz9",
  "key23": "25ivpv1vuTzjAfSnnJ6hMWMQzHUsPTcSJQdcXUdixWjduNm7WHaduLF88mxb3CkuaEnoGF7EDRwYTM5XFnpW89Qi",
  "key24": "32NJCxeXBymNFW47gKuYZSq88RokwSJP36hYXcJg7Y3f9KH8PNmuWtXVqvcDih1RkAWMyMJrXkPvvysY2Z6GaEXN",
  "key25": "4o2isrNakzkoBFMnko82wGKi1LdnuCBzKwEQT9Fck67rTSmRVF8TcbpHNRi41NErJGdKq5gNYSESZ5PPHPyWts12",
  "key26": "55WfVYfv2TkqYVMR6u6YikkdtJg9ta4QurraaWazUQEgPGnELhkJKD4WKRo9aFL8wAw6UmcoR21SCng7k9kmkbwV",
  "key27": "XFB1cAVvVnXHnibc8eWKxV6i4HRcwbR9MWXQ267ToyvMTBcvGGXoENpFb9P44Kz6KCSpa6PbfQEvjqwX7A6ejmE",
  "key28": "3RBEQCAmDKHDEnH9abAMZystUCad2RtmswEUuudJ86bFcgSKrNWuK8wN6yRrXsDL644mgauFfWp8gH3D7ZTYcfTK",
  "key29": "4a39urhJ5rPgUJPoRNCKTUgUV4iP3QUzGo8uwHAqaU97RWgvNcyyswcE4HNRSetUq7wfqYg982nXKuxBcQWzNX4z",
  "key30": "4raxAFTsbNE9aBybDDTkAeM19b5zZPeXYSzAGWjf7HdUDjAuGc2TaheypE3ZqQzrumNffTYT6fJzkqWDAJwmra5c",
  "key31": "4QSAP8ytj5LSjCRC5sEcwcFMnZmZfu9WBjGB6TRTEkFTHfA7KVpcfbxVYLhkgQqVN8Yzqtz42ZAJ1aNKCu7S8PTH",
  "key32": "52b2mwNGdicVbpmRuK9GYVckUot4bHXZ63byCQQdcBp656EDUrxdnfHMiches6ji5n2Bt3qBV8ZeizHCTyobgszz",
  "key33": "17LTV69camyUGaXoRwtmiaiUx9SaQ17C8Tqj5LFv3ETQ6oPTerM1CdP5emKmv1CzvmYLYDhZwYPAQpiJ4rVbXXF",
  "key34": "4fauih8KYrAzcE4VVBXd28NS2me4eugeZArhnpVYiz1CEKjXpfq496bP21vLGinMrnioXSSRsUPGvyDgu6h4wKyE",
  "key35": "5MhBpdNFBs9W7A5PsTzd6bttq2Pv4b9CUqPrHpXz3eSURfS4Crd1v3hesYCJdM4JQwN2uJJW6b4pCi2rk92J5WW8",
  "key36": "2T9iud5cHD1W7kUrVw4TQLU5Mp4dT7VDuHDLrSUxDreU7yBF7BQVTG844CTTuadt1nTy3EpPZBHAsfU8J3D53PVp",
  "key37": "656gfEXfZGNdPKXFzSRoyrsZr7JpbV3vZixqxWCBX1jXVuRfuKqjts1VsyVar4tCt3KyCBGAkEsSqrKHu4Kss9hF",
  "key38": "5keaBW5yzoTSzR8Kh4BKJLQN19Fy51YrBM7LTtKTrnjSKYLuNmbxWJfcsFQG6ccYMHG3kVaMP4s2898V2LyA1wRp",
  "key39": "3jt9NeAHx8hywuexkxdWUrbzYJH46J1EaB39w2YHdZDTCZjxSnMMgew3NbeV83m2PKuEMULrb94up1B48zqNzqQ8",
  "key40": "3St947FaVCG8vLAajMSHCrdeYafFQKBRd7kYMpvxvBWLtC9XqeHHhuLN1XXjS9C2Rq5CGR9eSA4v9uQEpPN5qSt5",
  "key41": "4a7NmSk6TVWYF3Fb1TBMNL2URrQy3z9qi5DsWNxAYbWH4oLUojqTHB4D58JABn9YHrZ32dgosNvHvcthwQUXsz6t",
  "key42": "2MUrTUaWdL3inuszEHrqSjsGEEB7Rj3VWi5DxxrPu4d2iXMENGkVsvvwSe2Hgg2yUukEnA4utomipMYC7vQKEM2y",
  "key43": "3WYzteqyAa5Tszaa9y4f2qEKk2qpqbGHAprxpneYzNgrdUngFdG7XxzpNF1jGBc5DFNNtFt1hH6gz5KHaUPGfdZQ",
  "key44": "55xjbkusM4MYXgcr5SGr3ytfy6P6F6uD4zshD3H1kUBM5BPMQ5iGL97remoaCuKQyVd6vQ5hA4VpwFSyQpCSmrKy"
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
