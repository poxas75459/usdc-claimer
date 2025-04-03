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
    "3VnRT1bnfxTw9WQuUxuPjtmRkRagtAWH4Y2ycNUWbQX3mtwYA3QhGDUtoRuRrEgBrVuwhnKWfyXdeKSXsR4ezd5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYrF21DLV1oHGLCR8pnRh64c1qN3n4ZdLrJGpw9aDi9pScUpC2XKVzbKWb1r1kkdapgFQKT8jiscKuc29a818TA",
  "key1": "qqSTMFDsctPcmDpM8CXrSS5G7j8P7CjDGMD5cFCyCAGwnCjRCaMPsnECer7mKgt3sfA9bPhNtvPx9LSieNbqBQk",
  "key2": "3QZvTc7v58mQFkXxqTbpayeWfGwSnWfMsXBRnQkaEVo1Asx1ycpEQAunL636MveuGhgj7XaTMkL6vnGSkgCvPcJJ",
  "key3": "4xV58i4QiET5pfmr9YgUbuY7cz15kMeryWpdgajseCYmyqiefmKSBB8nRvQ1fcpPh1HnL3UEJfgVCKGXftsmaFVR",
  "key4": "uxJzLuwWvkY7Am4oA3DMBAr3rLndEPFD2WkbURviSqEri4kfSccDjSA1pkA3QdDj5qQUWsmMwKYmcCJsSbKQvhS",
  "key5": "hSvnRkSwPzsboBckZgeqCWkLv2aAc4b2sLCSQpprAXwmf1uy3RGafi1jyXCY9szxDTovSNWNYCDQViGfBaPTn8j",
  "key6": "2modSaRXYGv83pxJn53WTK3zuKBjsHHURPUetyD3nZzTEjSGQEBnVq4aqNp28MbC9B8FgP8e1tqujmxrtBimWVMi",
  "key7": "25PhpfnBG6Ue17eoQFYdPUC4FR6J65nJW6GxKmUnbzsJJrmjEBZVVKeuQKhQYykp62akfTqHEAYWhkFpMHWmNimz",
  "key8": "2y7pN94DvgpEK2j1QHmtdJjEW8Rdsx7wKeEvz7Mig3cASLoy4EviN5xffFQo4Xc8JtS3nPxinfNdakwMeSys1SVQ",
  "key9": "4uA47rG4b6VXUyELnY2g88pMYKeVHUjK1MnyMiGUf2mNC69EDfPcp1LhXkyZEZjDZcCVtoeFCW2KtuG2EvvVp3p9",
  "key10": "PA31bwg9LK726SXC4w3aK3WsQmV2rjj8oPAaeVXVZdhzyE7NB4WHjdxFLhyQFf1XDcFjvfJSwrCz4gkygN83xTP",
  "key11": "2CFVNghojr5EaLm628gRhSWhNk6B1J55AyMxzLJtFeNDtgZX3pAHD5PpF21h1T2tBPBNWkKyPWhrLDx8jpzrYei4",
  "key12": "1pzCYy7ETryXUTKoGnBoSURbVninKdUMU8SVkZsqhVL2KA9ATVDrzEcZbRDvsGVKFutmXWRv84VwcC3LbQXa9bc",
  "key13": "YUuUymGoDHEna2eM9iQf1hJFMPckF7bXgEuhbdStAFzMRxT8ymBNCt2NWgDVa9AXcwqeUeCS7qeRm6NQcCjCfiV",
  "key14": "WhiKCgirUERfXUY1qVK2WFCs9UWJite28J8hDfa95M1NpZnVRPUtV9dY5fyb8XtCPbXXf6EeLdA11Pc4UCz8Rmg",
  "key15": "5B7sWe3e426wCZqHjjZYRtcmfst2gWw7ubGYW9jcwJYoCtcWmD2GFTNKR2ifJF54wdsawaFR8UtmGKC5sAfDDmmq",
  "key16": "4VbXEcggfmmmq78e6v9VWUCEWWCrnvHKivreSXRRuCjbw9DLTucBN7ZyBYCkd48FEdWxcWxnYTL2x9hfTak4wPzw",
  "key17": "2PpQSDTKykoMZWv3CBqJHYtyVPtfZWzg6VjLkN1WmGJaMnYmHEi8q2Cm5T5KdHTC21SV1P435skvUJhvHbv1LhcT",
  "key18": "3WuPf66Xvc5sbix5TLnLntZtzR9M223tEPRHE26e7tFx7F6hc8dBrHs2qgKRU83K4h4wdHxB17fUY6efVatARVAN",
  "key19": "4rCNmo5qD7FKThhvbgjvSkDDYPAQpLWiMTSikfojYwDJuEEPwqgsRxk92SBqnD1i6v7jK14BfvEKaqrXESaXcC4S",
  "key20": "tERE1CpocFbutEnHvMsrKAvu7xF6ew1Po47xc3CkedWvEqmiyUz9Gk8SRg2tPTTREedg75gdTN6QoDRjmgRUE5A",
  "key21": "jKyzGujww5fTqQyZMoaftxSJ24BD3J2x1GEi6u2gt65xbHgU4eMvQQUmgct3ueRJAEQqpUkTN7kGymZHv9WHPZp",
  "key22": "2FFKcEVqwuFE2py6Z9WpcFFttQ63oifQJLDwaaQ2Pse9vof8YqFTezgYXgqoYxRxNyyZoDQ6TqC7rcLHuG8rekng",
  "key23": "2EH7d6PDhnumdEnbmL7FqxzJJJWbEo7UiEjbiaspq7vTmrPL94Yxm5iBGD7J9ux9XKwAUx36QYA9NMLeHayxRBzU",
  "key24": "2sqMMsRSNRCA1PkYkATNuXY1JvhouiVLjuqsRG9kyBGRc8eWWynLeLnc7HBp83vihvWWrBKjN8MSz6kzuxurLbgi",
  "key25": "5uJnuJWen3GD79vRpbbDt5UsLwPv4sRZeznXZGLanCoNXTpQMx5oSJdJZoSVhw4g6nVTEBjpgFFMuRYTcr4LVHq7",
  "key26": "4z2V2cqj4KmSjpXwKZe5aDQx94Y8FUBgZtWuRoyS6tqVNZBGPaYy8EchYZ1DcAm2vqiE8iLRCntG5zzEWGvH3Kt9",
  "key27": "5jhd93r5MmAZR8anpsTWaq6SxbfXNpytHFBjtDsGDyWVPbt5EirXp13Csk1gamz39Tw7UtvU52KhDjhwu1Vp3Gxb",
  "key28": "9JmHk6oViA7F6r4WG3GYLBFLF6mWmf1iWScFPUMVtCQmKARNoV9JnFUh2JV7UhuRFB6fUzEDS9N3dvk8mxj3Y4W",
  "key29": "4hKJhR47GYVHo2LJa1b9FetGK1zqdiyzwCcu5FkBzESgZoTYcPWbqfQ6XEJ92beeoqUZByWJrVCkXiunwLvfVtQC",
  "key30": "4wvmLs9VRfdnCSdAL9LW28XBx7Abn6pY8XBzLHHCg787nFNycM53rkp5kXZSzG4SUxoiX7YBQvM1bcsn757yKosu",
  "key31": "jkricssvrEsbtcwL5wxaoUNd1daLyBoazUuLdYNpwZ1tsLQkJnYYh4umVUQGMJigJLKzrjy3dakFa9N27fm2zsx",
  "key32": "5A99usxLGmqguKyfPPiqyw8UfNpvhRTtA8nsTdWDXUjw2no6w6yvTjimpYHRfsABhx8syiNQbJU1MDhc6Kjw9bcL",
  "key33": "671rT6Ks7nhEv4iSQUodh9n3pcLgxNiZXV2H4ozf9zsi9sdxnLRtcDZcm7xm2VNf6tCq8Ge3GY8bhUSPDGVnpUSm",
  "key34": "3K5CbzxT2MFZmwDTPPDpi1xU1i4aFX5CTNGCN16aucYzjW75TsVsqaEJR795q9uP3SrBsC5BmP33nhVVX7iHYvLB",
  "key35": "53Vm9D7SZQfWycijShYc3aqdzcDQYTZhSthN2AHq7Js54zqi3BD4gB4b4VHditpCAoKpy5ntXWjMeAt72EkQ827u",
  "key36": "56NfVrWY46obbmfzwFRTHTVr8fZWPZ8MyvGeWYmaTSwxdT8Rb8BbPnACR3GhBXwRDqnsenRqgUaQjzfvodv49XjK",
  "key37": "4gGiBEZjzZHtMwDpJN3onPrchTNpszeSLzVgU6bFLS4kbXcGoLbpUn1GNi88suiybfpFdY3Marts8sJwaoXTLr5L",
  "key38": "3b4WBWL198zr7ebVnDpxpxuPnKwFasMayzAwPjNH5zke7A1KZPyQUwpyEAMR3gZaz6Gf2n2vkHSYrNprQMuwWkGe",
  "key39": "268KpYuCoUgXMpZEcgktP2PBf7PTHJQ25NqVbE6GyXrrnffvCLBGLLUpZzg861tWZw2uBSJhw4CATPMXTMU6GbJb",
  "key40": "5TsjDBDqW3wBQc4wse91K29BEG9nFGaxjXKriTk6kc5ozhVGK2cxpUU6Kxfh793BVUUbVaKrzrXUNeQTeweWrK8C",
  "key41": "3wUjhHhABmZdTUpvgqTriLh223ku3CMFskFQok43B7eWrxAfRag39cgGxvL4SjUKgQHhWiDLBQesEH6oKZmY5pW1",
  "key42": "3nZgeS5LgMNqv1itZwjBZoJXZiHiabqypTV9ecnNRu6U545KExGHaGiBujVhyCiLr17kHMS98gsZgG5i4YGKofof",
  "key43": "5rrdQ359enC8g4wJdwCchM8uAzsL7i5NkZ2CvKtW5ZzcqSYtVYDZ6tmDrcz2WkhBZHDbp5BnF3XUzzbgJaKpqHQ4",
  "key44": "hyyd1xEBEYDptPNNZ85rFrdVfrzE54AijrZu9rtDdMdwvYGaBRXHQK5WVZtons28Lg9mBmwDegA6tXvs3R2VxzS"
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
