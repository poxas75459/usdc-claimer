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
    "3XqykrPXXMLwc9RKA8EYiLtAiGi86WDh6RcGP12czcFJzYGbrUbtguVPbFxkUKQgDWLncfUFhvY2nc21X93PMiHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNDsrg4HfrzhNmnHS8z4sgHstW3iaZgvUgfxSm2J9PazPMjyf9Vj3tCQSNHPsZAfcVTCLiqawGUdqTm7hZ3WpCu",
  "key1": "Fk4WzRmiA93FgEpQLCnmg1fq9Y547sqiwpzydFSTfhbpjSpx8w7hiwFAM1eNYMc9vP2ufJudk12qnTmc8GYo2Ry",
  "key2": "396SvQn4YfcPLRF4nSMJnNV8iuqFWw5N8pToSXfKZXWNZ9BgWSMedhNKjBSN5UrjEayTBdpGQ7beJdohJW1ZA8h",
  "key3": "3hxxdY6rk2LTgAGsfxkZsuhJKkDhEafveZkxWRuLMYJzMrroHUfFxNi7ze9G4kc8MTjrARQcBaLXomt6ySN2AgT4",
  "key4": "2LmMctgciDWw2ujqtpnH2D3WsNu4AzLQ7gN5yUE9QnjBPmnLVQdi66A6ZvANQSorFFxErdZuPc4smwSXg3ynTLLT",
  "key5": "2hvHqNvfiqUzAY3BEoLTbGqzCatk21VgoNxoZkjAdzBGhyMngYfZSHoBHBe3VZ6nVmJnfzjVhBwvNCWag6UcMpzP",
  "key6": "5fLywHSFAQdvefMiVi4zfdgV1GNgg3BV6BEfFULo9mhMCxL9QqeWLvkkgkBYohiJsTHWFhokqsdLHHYc1vKYsCiA",
  "key7": "vozR9JufQALjXVewnhjqaN171hXqbBcEygkNMQRmZRTXssNV2vpLNmv8tCWmYKBT9hG88vXsSYcRj3AFWAV2t12",
  "key8": "gmKjTdW8GSy4iR3NpYhENHdqf1zBabwiQgUf299t4KbL3WC1b3dHUhtRb4CavDUNMofyg7tbtk8XXieD9v9KvfV",
  "key9": "QZPcKS63weK69ABQLQ2hwc7wVLP7kxkXp3eTwTNH5BJTiZf8xTEMqh2yJK6sC2LbzwrD7WKheqr1K1Ku43sU4wB",
  "key10": "2GdFEVUEDLGZnpwaPMm1yTw6JxSfuMEEh9fEhne1B7sipUtmAsZEuwjfWECcVyzDQ2ifzxQuuDbeFLhHVxf28H9C",
  "key11": "33ePfoxCNeVKj3ZmJqotfVBFJXNWiaBhNUr7JyCsjPaRAqnqPCZYjW6gTLbhCtJqSjCJWdJFMa2iH2seREfdRy5G",
  "key12": "2So8rc7jR7fftR6mj2Ba2tBxPgmJrzkcpigZQZHwqY4u9nSMJnX1d4vv48rRJjyAAbYCK9P1QnamqKRao5xNSmeV",
  "key13": "4xZGNwXNCaA3PWQYWZMqQoqV4BLqr4LnPYnmCcnRmjWHD4bxLBrp53nZUhNzcGDNRK8ccLxKxLMBwW6dSHEFJ1YY",
  "key14": "CWFeZsVVXyvxUy5kDYNSknNRiNt2nbHYuyyurUXfWQAbXuNhfzBsJvRLtb1n1ithUcVJ3S2kRDwb9UyN4hsk8df",
  "key15": "5Rp7XbmWSRVJgahopVKs9ACkQw3sE4NGzbapzy7sCCgtaP3MKSS8JoXo59TCrE3GQXEYNqAcK2vLGTJx9h7ZCvno",
  "key16": "3cU78p57P4ht3m4UtsHg7CYUgpXUzCi69bKzo4C5Zxv2zabkSAbgKEkvoTbesWTR4EzXHkErNQUz8Knbxpdv4pKh",
  "key17": "4tb1k5RMAPuHK8fa8LpZDbB8jCEKBr1cyzEBqeWRstY9BrXDuHcCyjwctdevnE5AzxLm7BcjjYrLCRYhWEJrVmQp",
  "key18": "4qFQaf68HfoRdqj9AMmB5uVWAzhYVC3X45hQMFpAxMGXMqH6JihTZeHuT74CmNxvZdzhf4QmQquGgYEbV6EjjZMz",
  "key19": "46sMfyNVk9oXKtkp5awkrPcaUt4y2a14c41t7Zcvqpo7mtKbJAEXWGuP8Ergscn8mYY2BksopbzbnBAtgvDipjw5",
  "key20": "5LzDhd1cwG3LkUKSnz1JXcf48Lf32myD29QuSKvKFknUm7dDViGQdSLs2mcoKpGqnbYiRbbaRcnkGp8ng12raPSM",
  "key21": "3NBRf8GA5jHmqsUqd1MUQE2mxk75wK7x2RBg5LHNwW4M7xqGq2qQnJcPe3Fv58mQ3hL8joEqCvqDunm2BYyk5Tui",
  "key22": "4iYoGuVkoNVd9poT3LX54EBM5Y2FMxnRkNEef6VpqQuPpQ9rzNAxaggBMhPwRktEXHNMaZRHPVsWoZtwfkugRksH",
  "key23": "3PX5ETK8c85X8WdRwWDSgtxDAYYzWTANthqFQejtiocUegoT7rCr6n8Uqu9fsXNTswd5qjGbKjdiYEKdCtdvzvZd",
  "key24": "64YZJvSe2AzKaoXFKx25gYswMPm5VG9ByXEpLXNYwTuSSXM6odUqkiQHYLpyNxbB9RDQRGHHbS8y6zSTjYk27Ado",
  "key25": "3CETRCLXAZYeW6V89hioo8w4DEjciphuegNqnmwn3F8CjH341ZQFzeTHcbMKKAaWfnF8iJJsQpDaVTnKdBKQwMsz",
  "key26": "41SfjdU4xax4P2VWozxvN8B56CeyGruQr5hYB225bbfSiuPv5B6BAdjzjpFRBKChsGVvNiSmrmNfQZND2X5YE1kH",
  "key27": "2ER1sMCWoY9Rx77TrJD1T7Fgm3LH66zWwRP1H5t3CXaAfytdP7D2Do3WAJXGbD5DVYAT4Vu1SJK49GVxUXpzN5gS",
  "key28": "55v4PMU2kGPht954ZyEKM2hYDdhE6ZmsBw37R3URD55JnJLbBhNXcDxn6m5gBZUBdpk3ZXBCKx3CuVXeNcN8sMfn",
  "key29": "XigooZSmNNY9di7Px2fjxPGoKyrsSmR8dfsUSHFMdVU1DMXB1KJ1QxxiD9z6Z9TUoNxEH8N8yQnpgY4Czapvqwc",
  "key30": "SDe3rcTHioUVeXUbzFz96m4fqYyUq32UbVDNRbwSJPLBazsQUXfUTLTKaBHdg6X4bKKDSA493TpqUT6Lra5BVLR",
  "key31": "4D1zVvC5QUbUnzgLxN4fzTV7P2CCYJdaXdyXLpopDK6CfpYD1BU8xry3vZobkWBgHNEL9xGASgfZAYG9ydbTcWnP",
  "key32": "4XWa1zFfMGCrTwh2tB1EwazMBoNpdVGdZ9ZZqqB7hBFcvXVnjJaYAWfpTpAg4m4yBfVavBVKcxx1qRC8QTrTTZ6A",
  "key33": "3z5F6mdkWUiUCSffwCQLX3aHa46i3bMb5JM5zcyFMzZVVdjnLNLEEt8cZ1fT2p9eXZUr5WJgoStqjKyY6hJSLruD",
  "key34": "dtKUjFsa1mjhmfKCZNFoHVtZctLmxKKjeeGsG2mkkvkFAfLc12Tz4ciTZCoZcdRm78PoA7q8y9cdCy8mAzCC13p",
  "key35": "397C5qbHzjYwiw4KciXDssCKvTtEbMgD9ceW6rv49jUshxGNHfFxgzGKMAu6psUC2SsMnMEH9wspHpqVTWRwRgYj",
  "key36": "4RALCWeXfqLt1qTbr8JbQgFkKqAFzjHFpyjxWfSbK5PoFPzWhhory18CDcxYWGwXB5iLGmcEpmANgAvzDhFMpKiE",
  "key37": "3W1qxi1u4sWnc7ufHd8ghNKhZf1NFDji5a9mdg4y1HtGTnBTj5mpwN4wuxU7ysbCbJiePCBNz4LP91iJerhvPauJ",
  "key38": "2XkauU79mzf26m2N6MWbYRJr2zJRqemf23zs9CK6DMdNSbkkrtncBCh1mWiCgrXehSsnmNx8dAaSGR9PDdrZPvX5",
  "key39": "2oHuVESfWnGFjSnuLxgZUNRanYKoUm6VBjkJmkUpyjtojbWp9EKiUTXqjDyxGRkiQRHpXQgZ6tHgwDbYhxGsNPHk",
  "key40": "28PDrPCc6EQLa76u3fe55ucaNm5GPGenPpD5yiWVsgh9bbKGxZJVJCPt5RGaE2UJuiHYCLX7FUJwEfMVHmozVRyH",
  "key41": "3BJX7ZRs95jXRTeqEwbE9mo9miAnRZyQmCUK9SkY54WNcHgGfTynRHNdEkk8iMoA1rZjtQpkrizhcTQYrYHCnTNE",
  "key42": "2uzatgCpi2JVGBVSYPJRSykqAYvEtPMbyuPCKmDyAVEcD69zhM7ESMVoszmZQDqRjZ1Ko23iywDDXGNjNxnK1YfZ",
  "key43": "3Zj3i1A9WLy4RpF6dcei9Ddesv541HAchNGJXkRi2zJ3pYALd79oiYQr5DXBHAUMDNdPrUiawno1ekZrtWWnmLcX",
  "key44": "49o1ZthUbYezuPTS8febshB7JV4Y8ByA2ZbLngSkndi4qoFt7set2nafTgkHudWmyznrTENTiKNzbfLRmL1zTaXC",
  "key45": "Ht7eRKhVgtqKPF6b7PN9L23DapEhxpTKbAmpXBmEyZnU7a9imnWFt2F5YjfZ747SAfJTyWRACryAEbayMozSb9F",
  "key46": "423HnUpFpe7HZnm58uKZhU8rARurBSm19UBDBRNjHVM6ZkHUHMQRg7K8EBsjmdvc3xnVVxZAUfen1rwsgbrKuswx",
  "key47": "32NCSNWTdWvMPzeXacuZN1mULLofd5DHmEct73vTUVvDeaQAxCCErn7vm1HPZfnQEN6wWW6HQcn5DJUjT3L7DquZ"
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
