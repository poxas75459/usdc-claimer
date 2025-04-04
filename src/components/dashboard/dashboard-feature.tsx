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
    "3wxkMudmzpoUnN9o9v1s87rZdMFVagV23kstz9gL4j5Lut5M5JjWx67k3UWQQrAHD3JJT8AFr5SjxChvCmrBBYgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L5VfMf2fDoZCdrcy4w6k84ZTQwxzfXFd4ot6LLGRsPHeNrhnjnjNq7qXaezZciViuC4xcy5SmgFTHCqsQUjpV5V",
  "key1": "2gBVy9JySkxzEpbNhgaqH6TXkAGm5DBpx4s3WsycoUxjuN2MKbccJszV9EbAyYbH1Svo3ufwokBwNiRFZodjES2i",
  "key2": "2mrq6AHKtnSiKMGK5HsLmDPTAGgrWEfUVH1forGVFxhn3Tfg3us6qCDPyC6ZTod8EJhFzj9iXWiH883bCSy2zRS5",
  "key3": "4p8AhMBe4Bho7jJNXVe9TzHUey3V6kE3WhWqYMV69UE7DGc7vW4NseppBny5khDaYUgAUkKyDZgUbPC7sXbq8DGV",
  "key4": "2WwbjkLLVkAt2iV3EDqUe9zat4n8gUeHDq3EyNnEoSYDAoXkV5eMQ293axfnFiQz4zshpLw4kE38eQ6WyEtpQwgG",
  "key5": "4qurNjguhRAKp2pWp7aYGtM8oRWJeHSXfXAjoqrngdJy8Rp4VHmCynegV9Q4PAN17kk5Q1gQhgjv5GyUvz99sTMT",
  "key6": "rSgqmbJesAQZqa2YCGC1no6MVwGQzrsiDhF4TBqU3hXZSUcgLrwBPJ8FpNBAfg2PznoMn2EZe7kn6tRV8Ujxyek",
  "key7": "TamXKH3K6cakE531VAJWf5Cje3yrVQv6hDLtz97fv4bfP5jnyEA8CJzRTR7fueBvPGgYVTb7CerXofh2BoyfYUd",
  "key8": "uAyTrRVY7ZMgjwtXmcb1FZnBmY7tdEhTMqtMjALBd8rbvDk5g6GE7ZBkmJZZw5WxcMAnDGB3yWLysWkWS1W5HWm",
  "key9": "gL3QL5o7u2TTm3B1PXRwp99yf8UZeSJQDZG9nP2aYad4yBMxMMTu7dRiccphbdWeBZukcU2YEjfGs4nMdGZe4xz",
  "key10": "2xJg2od4rfkbfJhhFsRRmAU75bSVVcPai5MEqKTXd9TzsPdVjwk6RvNNhVvHt7BSx4iGSXJreC9z5Tj8mCFhHiQi",
  "key11": "247cSjnrtqCDd5ZudyH72ZvJNg9xZkpcKoo3bGPqDS65qdN9qGALcen7oiRoKvJFqPd9CYFCJ3beaXAC7kEBqCqk",
  "key12": "4nybQvmxVaMoGBWHsBb3i6Ep9Gya5GXDW7bX1C4rCwavsV16kBTUcs92DFqY3T7vKysvCuwHPghjppyUvSV9tV5M",
  "key13": "2kDusgXLv2hmkf3sA2qxtpTuANwLmV5H9ULcyFRbrPRof3n6mo1yGser1CaNqLq2UzZZV3VSM9UDKAGkz5F2jKSb",
  "key14": "3hpAZNMvHJNCp4dQpbr1oydZo6Zko4qPHgY16DxVV5KWvbdyHob4bufyJfbymVZUrhXcm5Wtkcz29G2SEqzzqM1s",
  "key15": "5Ex7jYBQB4bSRczrKitNmFVGnR3JXELjJfJvSCiA2okvcjyEx376g3ZCn72qYVZVGHQboAJFoTJJBoGCvUDUfKaB",
  "key16": "3sYnqQXXRg6xBzHyeEDrcjTE2Cn7ofdKDxwrEX8cYVJmEQMwJoePscdgoqRDEp6vgkiw5t1dmAanWTkqpPadjXtu",
  "key17": "29zFuEG57xR5t3bnT5Mi4t1hVXG5J8poADzyRH2GzTw4Ap7TaTZn1BLr286XLiutSSjbkdV4wRsq9buPNNTZyejv",
  "key18": "5C58FPD81v5fC7FCF1xmfGXH9qmRJeDp4G1Ad3itUowqAq168F34aEQppFnaHMRiRFAxJdfRaeQXoUwJpCkci59q",
  "key19": "4eBGku6ePASXsr9mXdnyjW8Mv8hjrsrV4GSCvzwkdgCpV2tbVxe27ETPzrqH6scFLdmzjwUMLg2U37RhioXyVSMg",
  "key20": "UVEQ7cxDTK7gjwAi6ySZcW9QE61daF5dAphku5ZVXHf89CouzbAR78U3JX1Hr8WEgA74ba3snJP2qzrUXw1r3FX",
  "key21": "3vrHat5Qzog9zvUSauGMcqfkaGuwvePjKdsrL6ts8LSw924z1ceY56qpddGgBMUJyNLzovfkfqe31kQ27WFJ9KJR",
  "key22": "75aetY6SCVjdiNoasmaMWZWHeUAzZ9PwEw9m5KWSVv9ivn9dGrDrA4cE1tYa3YNykSQybtCxKpdTecwDS4BVLJ6",
  "key23": "4UYEX4YATqdGeJhPmP7J6xGH6d7kDPTs34ExSkfHeMjdjpacLwcYbqpMUyDfhaAdT7KYrcf4H8NjAoMQQeNRVTnq",
  "key24": "2SxLUVPWQ1k5VJjhhMpyWvYVQapxzBaijuGJEGXSrRzX6MLtHMHL6aZcr9Pzvy3ndRESMmt683GTQLhFUAs4m4gD",
  "key25": "5X9iNyFbGRCUWmxKyjsRhfxPDrLfsLvpXixtZNQLqFpVg9x9WyfGi7krAdH6wXeHN3qZHxaBJk1MMi277QwZAUhU",
  "key26": "3YTdVfG1wVqRFtrcZPAjseAjWKyqPwYzJ5sHJ4XPeEQF7A4nvCUytYx6XoCuKdod3mRRsZHiEmKVVWx9w95Qhiu9",
  "key27": "b1KMPCN8w2CCA9JftgpghULSxsWemvn5ZHfRb3VqPhjeFYBBHReeyJ3A8gZRdN1ouP5neijLaiRRkLp3tHG2SVH",
  "key28": "bJKYfdzxAFWhAFWTcT5CkFbjFpaoyrsfLXBKqUNiy8bFwvgTD1aNAPpk4FUczUcsj6W96rFk2aQXWmYrvBuTXsV",
  "key29": "vafUVCiG6Nxg2Zj7UHPY31SpwJFVZWcEH66Tqs1GkTi2oR1JzxK8zKsiU3XV8k1KYwfQd6XwURXx4ycPqFzdm8V",
  "key30": "59qX783mHCFySJFntDJzjkVkP2uxzapYwCAsch89qx19m1PzTZNmfweRVJryn7zSm3Q3ANiKA36ZyxLDtTZ8owjg",
  "key31": "5upMN6YQVghyzRsao7ZK7xy4zVUnR7Gv6WJS8zzxKryxhnmpHyMG6ceBBXsfJUCA6u96ysmc1CNvC6NCQGFrxN5M",
  "key32": "wbdWezUEKNfCUz7YWkdjWkm152kJQewmbnbFV534pkhLy9XzXmEZ33tdMKboVBcDAXF6ywDd4p5DmSDaMz6PEcL",
  "key33": "54HKoeCtJ2vpkdUyuDwF7FMFWZE7rQpjRu9zScdW6Ax449iDYhwVHfLKcfrKRtaGhXtamUcLCfDDwUfFTRhRd6A1",
  "key34": "UMs6ymsPErtxZkKUx1mUeebPLkUJKnVVAqcarxec7HTcksMrdv5scaoiKxecua2H2ZNniEXDuz614niJJgLA9NV",
  "key35": "nhAo9ty4nfhXhcFjbzYatKMifure1PbAF1rsBaqTwP1FbtNh2QbqV1aBAYtjsGy4WakUwrDHDUSaNSKqSuSPseq",
  "key36": "24jLmq4P7KKocm3qdYLW83GN2QZU2hYTGutfgiyU94jvtQw7g13DyCXGwyeXbU3G55Py7smUSZxfxdXXEUxFtLUq",
  "key37": "5qnewMLeazqAYurpN3pqzjLLFTecKf9XdeKBSN4561D5qrRuZYsN15wTcCLSsKkoYhbzskjdwCh6z2x8WjQUkSkr",
  "key38": "3ra8vxMUEzEEmGkAVoMWSZYoAy3SW8PbngfL2UTm7ZzyYwrMq5RFKXX67fniNFqBftPDXGGrGAdseJgkt59Y5rg8",
  "key39": "XseSjY3N7b1AJbapLeZSVdtA2zr5xnYnku6nauDh7Y5jsr7CxjAMmQAjkJ7nBSLeb5vfxZqDggatjgzW167yujx",
  "key40": "FaCob7pEYZek98w2411FX7oMUfmaj2YYFsMPimaAWHU1kFaYKvU9wpj5ZUkELUhzUaHsXPNUZuyjmBVZ3TDH1W8",
  "key41": "dF2PAjv3RwgZU8xW7VoBVYnErEBfv7kWVPZRaWC19GY2oRwehznQmrAQcXuJECrgtrhGCYDaUX2EjEBHqbHtFUH",
  "key42": "3aw6v9nN36JxCVYL7LWHNc9M9Mgom5uXx4VuENzwcSQmjsF3f7BL3e2wa7USU79fSF5RqSKtoYC1hDwiUuRcEjoD",
  "key43": "5KJXUShd31nFuV1yctSzz6DTssCXf43tN1XtXSqzeNec5EgPQKgLWU3Ezb7BpdR5SM2PjZXoca9xvQyFUru2acA4",
  "key44": "2Lbw3obNABNzxRfAa6syP1z9ircwmmCPZR6bBB8BaVkXWXD9tNqZFtWTw4JtgkDKekmQLXEHZtcNrvqaXFxdWYkP",
  "key45": "BLZ3qHqxtpXwwf7xdefpuHZ2UhdfHAi9nJc5Q9ZaDTefUJhf8Q7YznQ3wD2NyKsNRytf3SWT1nLDvWZUVN3C3dC",
  "key46": "5sv1BmYJGuUPbH6BGDBmzKzNmAjkM7JhWqbPuAhVay2VSXt3cPkguzwRU8yf5KKveUYWQWkZsLESc4SuN5VvvPqr",
  "key47": "4L44SKYEEKbjGn4HFS9g342QdUhrzNtyfoXYb4tndiZA6w7DEEQ9eqyERgcMYHgFGRRDMKTq5eE5ns6mdBQ6P5xz",
  "key48": "2DsKGQi9V38rybq1wYAsZpkHbi43AciUubGMJeNSTqgFtFtUsPqgYSnnjYfWChUoAGVmzV28oXnymzj5n3Z3bcr1",
  "key49": "3FLANyYgcHd9kRt6NCaMAC9vdcYBueKq5VSyucmKF63dVSaE8dmTbNsjN861pQkE6jDoEciyXbMHVQfAWv4jj3jk"
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
