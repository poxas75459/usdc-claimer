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
    "5gJ6sHG6pNy5Sxy8qDh1GkTaQuzDnQ8juGRZMA3J2Pk4ZwzxJ7iwkQjaEyehjDAnrzERuDgRymCGGp1JW2HvjfWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCrfsvVwoRX8XhbPHEVxHpiyT48KCH2EU9ZHWMmS4HAkLnQsbcRBK2ioPGMUm5rvAJ7R7BZKUgbaC5TFz3J57Mr",
  "key1": "mPsvZGVdjpVv3nJsxA1ECnHNmbpA4wQYg5Pw2EcdyyiAGLeMLVJ8X2Vb16AmG5rWNv1pxa3b5mr4rHjVYM8522D",
  "key2": "2nPDaEgWLvp9ejhcyvo3mqWeyHQAHR58qCrTrY2cZjRHQibhW863aeNGk6f7zBFKQdWxk6AkxuPiLbhK7QRySoZW",
  "key3": "5GfDz7mpNPAtSdZuDvSuhx7RxbaMmQY8p3q4BDbwMonncAgZ1s25CUhvpk7j7dpRR4dRfxSxmD6hHgfAP9TGvt4n",
  "key4": "4KNcMkh6G4gQpWriQwu4PdEKN6onnvqwrc7bQhPJbmD84ENSzxnwDd89oBRcFCGckVBtFixT2Ykyt6jHLBwdcAAU",
  "key5": "4o4hyvcTJqmH9UwY7E4WXwai3zQbJyvFaGWCFobZ4SM2seqn8PUGKN7M9nAcN36rVTPBxWm9ke15JdMCMdc6NPQu",
  "key6": "4JkVEhKSi9ZGTrEe6aSec61c1wrjf1rTVp2faS8rWvkP1r9ptDJPp4pVvzmwHWgBCtJaw1mwmh7BtKUBEedNCM7A",
  "key7": "4hV2rtS1NCnQuA497gjLrFKJxwNTfTyN6a3mas9QXjBFSkLEPNpJgBVEs8EbmnsP5kmNARWfAj8AfrEumPuvMLXF",
  "key8": "3m36h5rEi3GBsLwmpQau3Fp9knLvv6BeuzAdJoAvRNjJ7W8UPKxVjsvpTQCdRXS5z6Yc1Z3XyooPJ9qtor3ejfzj",
  "key9": "5gXm1YKtmLEKveMGyY8aeBT1DULw4q2kZKjt1unMQwadRUifTwsDTp2eMigQaun436wcRnuKMLRwdAFD58aGWume",
  "key10": "5xVqwsH3nre365SJGjJhHY1qPgDJvbv5TvzBKzSQ7nUawiM4W4im9G7bwPb6ndruZ2fQgqgP6DTkJvgSZirb5Hsy",
  "key11": "491bybswtiscumNcFb3bCu9s86Drr2AxjcY1GzfPMZgRCuBdrDxbmeT4ML3dqQe6hFAy1WxyChPtgf3L5gAptSUU",
  "key12": "Uvezuy1pj5cJcMh98Rf4FjgUDVCutDNtHUx7KX1ZTjtZ8tduxKQnstn9nhsSWpKyAWFJ43KkNRDsCDTHfDDsGD5",
  "key13": "3FCpCzmGYXem4cvQ7b1q1MsmviiYDvGiTWutyDC12qE3D3pERSWuXtuRmxMKWgNeT5ttXG7GK2E4QfzEEQgbrUh7",
  "key14": "3e5LTZL7ic1rVbiRsk61LWnKJXW7MJMYaSMzkmMfcB3sRJr6Rqo8KYwx66dMsvLc7WH72EosNuP9K6i12SbLTWEQ",
  "key15": "F8a78cCE5Sg4TUxxK9QFQiSR3DWYwqe5ivqE6XR4EmBK3JvJiw186Wt5ZvFb5V9ELAD9jPRfBXMhqjP27jb5osS",
  "key16": "4tqKfpojbUHfJUKw7tfYpwmWnnjaqQFyvVZQaroveYFRHwekUidVJEmjtPfNwCztXnjszV6qs9fyKGNLNTBV7wH",
  "key17": "5xXGBG5roLLcruJESivLKYjfSNqPDCam4y1MHounSPRA53tXoKADQNvSZjxygsL7424YLjwPkQGLU8fJCxxMuxEj",
  "key18": "5PVd82eGbDxUmGKXGBsgAEGXBQUbB8by5kPg1WWxNXfPvcf5Yxp7ykjKo7bJJjW9FojLUPgxGxsiZGVrz9WJGLcM",
  "key19": "3oLYu2Rp5B5yLiRbaUmRxAAf5zB3FNeaPB32TBzadc7yiUP73AvJNcw5NAgHtXtkKpCmqpeFycyQAyDQTkWEW7a1",
  "key20": "349TrmupVBcEzHZpNCbELjFaRRexwEBCYgjhGEPCAJ2Tqs8Fh14kmCcYpDQzkYdpB22gEWdGLFnnfkSPWeuvMeL",
  "key21": "5gfr3tPuE5hy3qX4GYmEw86uSBeh2DoVNB5t9Y9mrF8eXPzo843Zdwd5avh3AeV3cVjZ8ma4yKvjGSNm7UZJaGgd",
  "key22": "wJpTzgoXzW8CyuZrniStP2oMjUdPvuCDBmAob9nknHurbKqhNUV44qCcLocda3pY9T5Ezri8kLA71oJXzXxEbd1",
  "key23": "54dAFPnXMqyES6A4oGKnN5SaN1DFYvPMzF4CkZJaAyYxR595oUhx6zLA5oez1RkZKihQo7FFaFpmrwiutHNKaCjW",
  "key24": "2PT6i2ZrCpFm8r31KT3EyTK3MzRrKg1H1FXuz2qn9vJ4BftoPKsfwWEuQAgbGQ4Uw7qWcr5YrdzvaGqcwXJdfwpP",
  "key25": "4AFDNgSF5GGfSadrMb43ihujXF5dBr9wyVXSi4ugXzQDNzpKT1GnoN3tZUAEU2DXKNrHVYM4HcRo37wRiJiUND4j",
  "key26": "5d5snd3B7m58jPboVxRQjkL28AzisFJxqFJG7xTM3hdv9qB22mU5yivi84o9p8Rf2RMLFCs6HUXYsDbWV3HWjG3r",
  "key27": "2yLjbrWMGjW3mwzRQvWQp7tYwbUMFUwcQjMBhNyjzi4EgAY1ctARGLfZT5sxY12cnP27u6wzY6E2y65iJpCogbf7",
  "key28": "56zVooyasC7e9LYVEGo3xFGrFHnm8Lc8eU1aw3YW1FHiunmukkVLXqXUqVAW8Rrg9kK6PZY1rAYx6NzxcypBtrt5",
  "key29": "2JShp4sgweFfKi8Ep5AUx2Yx8buNGGC1GgmRKYxDYw9fUdGS5BAuM6ht3aNJFDfmWQ12wY22wEkbBq3g84Mm53wW",
  "key30": "4R1AveTFMMUfvMWujmfyfih6WVapXb2JLQFXp6eTuo5GZ4ZfPWCVWRRvsnZuBT7xkMTTuptGjxv3DgcHVEmnxyk6",
  "key31": "3VnYz9ub69xC9Y6vnVWWBcvE2hU3SFC5mqr2D9sQLYKmtM3rJRMKYNqfB8D3cZHJdTCPPKGw6qNmvP24DCCjQ5UD",
  "key32": "5bnKmUFdxqEVkcjGUQayk1y4PQiAbjQCuEJru2RVSkktDfwS2KU5ZrJd4Jdg3f9KVtFbhkTUPS9GFPemimnXHFjt",
  "key33": "4ixdgMxKERic7yW2mYLtPyVJyqDsFRXiF2afeA5yt8aSfJ1vAGGvHudu5cmiFZJyjZkbf7aiUJKLhqrjXux1pYnQ",
  "key34": "2iZL7itUWBPNsgQ3aqc38RUiFgHFbm298CVQjVvj4o8VJwWZqc4hNtNRPATm4NrdAaxeVfwEJdkmoEAcNEdPxuuP",
  "key35": "4dWww9bK5x7uG4YyRsARW5msDqRpv1vtCcVMEqrPHxj1sGksFXSYWxUJrUQ1VnWkTod9keqfsxxkFhQpSBanNoHt",
  "key36": "2V6rk6pTANAKabHgZtzqNaRtj8eTjWxcF8W1X1nVBHM1Uot9aVdXqJSxbQyT32in6EVFxdSKXmvUSMG1Np18sKuk",
  "key37": "nRNggWAWV2nKbGmLckcU1xXfmEW3BPRuab2T36MwWLD7g7jAbxevdp2H56UTnac125i2KDysnjHVGSRFmXC3JfN",
  "key38": "5gn585aZh4k6ncRLqhyxV6Dxb8QogakZBQ7R7AgyA56798aZDRkMpaubmPFWvxUabxjF3BHFwuSW3SwagA1bh7kB",
  "key39": "5qF2TdfbXD9XD32eHjTmm6riCbM1i6kZTZnHGCWLUDz4LPfS2k392o7yZapQLtm41VNjpqTxidJsanC3GTwFcDMj",
  "key40": "TgKWtomwGo9gx2Q2vJQ84WG4MaagkmvmTwZPidHh536D4zSkvt5EysdftQh4cmWPj6ueQhaSkott95onfokmitb",
  "key41": "5a9kfJP8DLrAvMsJRjcAkbFATPbxb8UtbUXNa6q5FQfi3uB7GZbtp6hQioheQ3Jcnc654z6zXzt9ws3iYgbD4wRT",
  "key42": "2fR68wY6wZ8JrmvXuwU97mmXaig83jkkxU3cr1V78kj2ebMrtVaNQ7kbv7toe7kRkFE44MZrLc5xBWkCFdoj1biM",
  "key43": "aAW7HyjdEr6dzr9CLJPEohyrK5AajfQMdVGC2ShP5tF7fpsLe1HyLHSfU2WHCg6a52qeQ6aE6ADKAH7jNQRLv5S",
  "key44": "3TBsD2EbqnzE9PmEqhw4vxBGuyehCpKwZjPrjNgGdNALEWLPwqGkpkRo3G5x7L5rCzMvnTMXom1UxPRxhVwFvN8L",
  "key45": "4g4teogzkKDqCFpU1xyXDmXPcVTfi1ARYgUSiKQsCeMGPmGusUz1QW6YeisBqgeVtpevt3rxRzU6PqtLNXY64qzZ"
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
