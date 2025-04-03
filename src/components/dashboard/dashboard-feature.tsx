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
    "54zXX7jAFsbuQQXwUK3DUW4AxcsGvsAkeekEkyPpWAHAiQbvmZvPxp9RAoLZ5LiFxS4q9R55uQA988pBiy4dpiDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZeBxjjetrjtzNp2AjyfZvnmjH5Zu9kU1cBRfopNN8DigiSVZD8HGP4oEUTF9UyuGoqDNotLsMqxuKK9HBUAEXxv",
  "key1": "3vpQq6LdtSmyJTniteKr74sfKaCftqb4xwjckcXtGgRetEPPLLdFYyxwdQpbuJsfMNebEWTHRvk8CQYQoUma5jMK",
  "key2": "358QbsZM6Z2yqo1RMEEcNnikLUocwhMoAqewF8VVXtsadCTGMg7nMxFEUSKjUZ4x9pFbNSu5Y4LFGLtzrLUyNQrq",
  "key3": "4PisV8DfxWYGFJw9myYK27HxF9ZXpBqx8USKtg3n3isPNGYWoHP3P99FYigJBeKNmCWcKjigd7VXUwqJ8MG9xYn",
  "key4": "4nZUbnFFeQwLYWVHeDn6wZUsyCiMjAHhoDnNnn6nV4UVLEunKt4zrNQNxiNqpY1WEiM7RicSxZPDnNeYrSR9S855",
  "key5": "XN8eYmcWBkvWhUibYhEqZytmncVckGZa1rcvz1dBQaeLfXZqCRw2TUrK6vLvf5126c5M2VKeC3xZHUddheYva3r",
  "key6": "3bBm9169kP9AaFWLCgomjggMZgxFVBTMPBW46487g5u2Cd4Wydm5nTwR619XwbkrmFi8j37WctmYyCxiosdsBwFX",
  "key7": "2xLdB7BX4QuDGHGp3EVK745vsHAGwZkTBvev2NBBmemiLNapa9Pno1tKGmvP5dCDc1CSE1oHcUUgTwJehEDsA2Hv",
  "key8": "3k1YficyfRxEPVLfBJBrrAojP3TWA14RKuDSo4tb8e85Bu2khuQN91Q39DEjiPidwrJP9JLi2fgrXu99SjmfhVeX",
  "key9": "2qwqd2mAuQbx786sNFpBVt6jJV6JhvmJ3ZfbxHqfTuqM3gdtJnMT8jwXfbd335n5XrghttQpdA98ttkxfG5Zrjdz",
  "key10": "4NZN5xFwZrpynZHR4NajRkqHREKLk5rzj7abMqZqmcXU2ehgQiWcfjSEUtxeuxozNNCNutq15M1Kmu1GqrvdQKG8",
  "key11": "36bUakSbwV6XWWKwEZP5tdZvjbepacghFfK6JgUJTYHfehtkthwB1F77Q6CyBG9PMxt5X9DjMgfTP8hSfYm6N3QN",
  "key12": "21NiSCTecpoS3TxzSo1yxDdGkJUMcc2RFoVB594CywSoom5uvn3LtVrWpzykLpm7bJbLjp5Fn9Smy6nMyMycCJzi",
  "key13": "KTcwf3S8anhN1bdST6fpkQkgcywJ4T69n4CqDSuhVQFzNAnmqEtqn4qdQKfKYcgpghKBSyzRvow3xs8jJHeMJsu",
  "key14": "375mrTrz2eEP4uPM2AEyRH9gQ9GAQHfLHryNXEAjougPfb3J1DPH4ijoEEhaEoT4u9UsoPRyJLsBRp2MwufAy2xe",
  "key15": "jmGesCfgvEdAqxpJR7Vd5AeyjoqTyZZvmP9RnvcC6KDGS1tLcr25otHJabXuBQ8jSicg5c7QsasCkipAP7v47wA",
  "key16": "8kGkQLnsGzo5Tt6DEpXxVg9HGF7n1yD1ovm6cT5f8tcz74bfMRyatKHV9AqCiV2j5QEa9H9G9gbFHrfmW38xiX5",
  "key17": "4DkKW1fBq4egf7h8c1FzsF8gXc8NdYJNzfS6BDcLRDz154gipHdAgZcAo9ihj1PXvzKhE7cozybzqnUhJJpJKyNZ",
  "key18": "5zfmv4T6x1dmYwXE8ne32NtZEfnXzhoyiLZY3r2bZLLSoyJoeot1LEzkT9QWNdBD1YXfKr8Kwo11rBcXeTWADfaz",
  "key19": "63McdV2iRCGqUWVXoGwo7BpjV1LmTDKifp2goLDxcUuk64NJn7Ldh3Kj6EBRTmgcam5u88FZeqTp1rognz8ArMKi",
  "key20": "5xLEPL8ENQXVPPgrpDGu6fwyTssQbjwWuXwdf4ygkZ15HCpQsaFGrNjqEBPbxKHCKJHeQwrquUuXbwFMCuGZdxMw",
  "key21": "47H7u6fPF6LVgMr5Y8rWKYpA3Tg2BtqC6xUucWpgNdLyTZ1SngRr9ZmScvW1Li2Zz8PuRcmcvkMot7ECarTyjChe",
  "key22": "ZtyVyooaaVHeMV8j2GtpDsyV2hXrFggLPWaeceqSQksteS62H8GB3Ui6YuvVnPoMvay94zUUVH8QEW5ifoANpW6",
  "key23": "4UAMTkSoMwqKXssinp5xAVvc4Q9aM68uTGKtCxtX62Mmf5m4r7DR83dezB5ZzdBA1cES3u1VNnz2YUbpN9aiQTYH",
  "key24": "524B8EuNDhFRGriH4XiL1vuDMDNm9NXEFq87ie9u1c6svoJP3vUAmobXUdwtpyJEK2SQW6LS7aVnrgApX5DTGQg",
  "key25": "4Gtr5EGstZh1PxwiGzYviikamgcu8vYefpZutdPxheBexyVt2BKTgPrBoV9sR8eKUB9ZLTkdPVXKsa5shSt8ZsZA",
  "key26": "4YX2tBmZTBTRVtqz4GNuYBNL69oMpBWKCU1ww1DwrqeqSSbwegHzT75siLQVfJHMbSm7cbSUwuhUXtqUYfgNPpH7",
  "key27": "5vFxGGvVAG2Cpeqo4jFMyEeGf1ruPvjfDSPQJfi9G3MU1Kmj5gnuxgoAiZ1Zuc6qtkToHLX3PdJpP8Rx5WnoKoZC",
  "key28": "67fEqV6Hh3kMw8qAq13Fn3MEEgfFaMgkLc3KxdVVMWfdnB6ZAjQjrWfrqLMkWFFYPmixtwy4oJgUCf6ZiuqGhHr4",
  "key29": "4c7VYu79ohcqTGVYmG59RFta51o1qePyq6HiAYrEjXQxYH5oSf5E3GkR9tyoQWFDrhZ5584P8nmDK8pDdatT9fgH",
  "key30": "5Di9EiAAVT6i86GssGpWewoVuHndcZscAuUsWiAWWbUxGBxUZrqFgtTk8F5CkSn5qx32LkzNhszoJXf9Pk9NqR2F",
  "key31": "4d7vAkEjJ1vxR3GfbqYfB4kwo1mqLWsRgovk6kp1DFdH5WayMn2byMKLNbnnmkdvLZQdRcFBr2AvF95iePVsXcXV",
  "key32": "5qP4XNsqyKXmqWMXr5hmgCK7UFyGJFUS9AnBWKS9qPixUGXigou2nYuN5Me6Go6t8emZyf4TdPst1bP4G2zWofe6",
  "key33": "3aCWMk8VbnxfUBHWVHKVF6PwCQiPfrq1mPKXAXSK2f6tFsGnew4CeLB4nUSsmDBTpkBFxbrYRkdNqBXsbtX4UekW",
  "key34": "29vDoJMb2LBG3Z2d5jkqZ8shUpym4GG9ZBoqR5vXwj35iNATcCZiahRizYE9xwEm2vD4tRJ79TuKic6FBaXnwt6M",
  "key35": "3WdVHboQo5jhZ6efwSBgj41zZzsE4aZoJE6tCZrBH1zw6kkAxhtSuvGii6bPd5r9Q4uNTdJTxmGHrpWet8kHgpF",
  "key36": "2e4Tu8bJ11UEUMkUospC5vvUkhNWbDZjaAdgNeiqftXr8y3eh3HpKX9sMqkmi173xUbDLFQw34CqwS1gY2S85dmg",
  "key37": "4oBmEDzQFRKEUQS79wXTwEsXKAs7fb28na9XUdz1JFEMeJ6mbLJ4DQM2r3MTax52z8n7n82hxfnKGmS6qef4EvBr",
  "key38": "3cS5cRmqDqGieYFHqoaPzFPKoP4hi11aTXf4Bxsrv2WkgUASaBzTrGZCmT1uN1yqsaPWDWgp3WaNYz4PJyjL5Aiv"
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
