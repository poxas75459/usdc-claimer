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
    "5A5pfAbMmtZi5zghBNEaXzupvC38djBRSZGEhNc2C3ctwe8RmHKcRhFDR5hMfuqPQ5raD5nfpE4Ybb8MuGxg3Eri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2noYwaSFq5QoKp9sWcDzhaLpAUWm6opzgDvNrzneqG3W7krHyGNuAhAHsM5dFREE8C5urYLUXEXMTLNkKsfkGppk",
  "key1": "4EBRPk6FCewTYAwr4GXDVxxz3XhyVvHADbfHpNRdFErBe5i7SzDeNE2qYKLzZ6keipnEAmAkB5eiLtQrVqNu5qed",
  "key2": "56CCsaavSEwnVzcDbzxMJ9z8ERBjqzc1AiDLKEp5bxXo9sgCMFkBNHQyjcPz8UGB44xq1MP5pQagwPdu2mkLN7Dx",
  "key3": "3H5DiaG1BSLW5xSPgyco2uB85FFuPwohshbKafo4JduJawTnzxKLRXuYXHSMbsc11vJfwm9mSzNzR74stwtYFLsC",
  "key4": "5JG1TV1Hk1w6FenTPyCrZj2xdDgah5WRnTtNEJH3fxrJsGCqEWDnKucdhv7JetKnhDbzq1qg8p1s9oHoTsPCLL6m",
  "key5": "3HY53j5x7zVtFUktKzxT1jE1PhmvFzDtXe51jnKV8S89dYo5xbKsHRF3Xdxpce9CSop6DZUd3WtFZioRboo4WFfS",
  "key6": "5X7dAWqmRkVEsVgK6Bov5iuNTnLagZC5epa51rdJhPvzemNQaCZSdrUph7hs3dwEp9pXVQ5d7QXWRzRxsaRwc4jj",
  "key7": "36f1m6U9Zix9eM7eWGGaJFQQvER8gM21ZZ6xfPXCMAaezF2RU7NZALnUKreDgx3gy17knXukpYiSXQQyXMfkn87V",
  "key8": "4P94UyNYmxWvV3YTK9k96dAySqjvpnYSZwCXG4ubc1krX9D2ZEyvX6AqpH9DpWiQrMFtv4LrNNxo2pFw5SXeLA29",
  "key9": "3u5rRKr43Ec3FMNdMi94sTvJx1p8S8VWbsT5HRQ1naj4VhugtAnKKTiAC5ctSB6LPdSu9WfYcNuwk6432eZ8oFS6",
  "key10": "2a4Z269XpwvFbdz5MEAHDYYGHHi62EAk6tiWd6ogzFAwABL8572ACBEGbTJiXxTPfha2Kswi5qc1ottohBE9TUsf",
  "key11": "3z3mghmD4guM16jP73LrK9JLhuK6uvCQQx9oe6F3a4YN2YouxqFGAfM5Re4ZwgLyozYPvY7535t7K339uUgNmeN7",
  "key12": "xiuVdsHbPTfLkfh6Twb8qrgv8sXimdzc6f6SpyVY22FHVt6YEp5skSepiWuuso3cz1Z4Na7Bw7kyxkY2iPj3aW3",
  "key13": "397CiFMEoKwTJoLVBS4FE7h4CQnJ3QXHnNiMW8WkvsMU6x9dFcPdVepY8eEbLaVKpXZaCaqG2YXTeKvy934aZV7k",
  "key14": "2sPP3E8fVgrXGzKNbi3vFPfCT24oNvSF3nJkYagQqZ38rvh3m8x5AvYpQVMtiR2FpxeNmkBSST8wzY7BpPxqq1wU",
  "key15": "4P9xNqnhz6BevBASvJukZbHiyvSrvBpoXgVKZzjxNhx2HYi4Fo1TnvECepK64SKXjmK5rUAMJjezRnsV27q8tcwL",
  "key16": "tQNGNMmtdDp2UbvhBzCVZ2kgvwnDUuqdDMvTPRfsgcqRhR6AzCyzRsxEvB2cHd6LHj5xVUdcUSwdZPQoZVR6uYX",
  "key17": "2hAcDd3LuG86seEp6LnQQqdUGmwjtHq3DvmGJ5ByFE9h3x89n8VWsokuqQHEwavz6BFyEH9A5pYABaXv8aY6wxPP",
  "key18": "2Yyb1cyowwngAyGxqP4d9JPzxysqVMyBbqeFNUNkPwd83SqeHGppTG2dbYgMv9hwsQVy3XHwTnR1GEEzC84jyazv",
  "key19": "3BiQVyBHBorW95BgxGAMY3nrf5QL4D1jLBakH4uD1MBGS71QAwE9pkgkJnPWGX37FWS92GAUkreCTTgUjChm6Zit",
  "key20": "3sS5j812KREV4S33SJwuU5AnT1kVfhAwNpEjJ9ZLWQWmXFr73dT5VzXbMudDp2Z5yLSCjYp2oEoGJ7w3fUbZXKEA",
  "key21": "44h4vFjgzpTvi44QoN2bkfNVa57t9zoSRXWZKuJ7VuZfyYk1AuVBh7nht2Ecsgqy2PiFrDzdmMN6PECakmnmdU2T",
  "key22": "66hz3ufHTuVWPrWkCcaBYb25oEVKA2d8TBeXmWo8Cvc4s4ZMRAVPhMyktHhpgJYpGzfRnvfURc4NaEMEM5GFCK7F",
  "key23": "SyH5z2zC2ZrR3L3we4DTDsofK89tuGYbfr8TWGCiu7fsBAgbLAtohViyC7SrZE8BY92BMAoq6ybbHDkjBbezxzq",
  "key24": "2jAnnykCaJEho84AVbrduGR7B5osVzJnRhUmerSGa7yEkXvdWmEiMfsAFfX6tXdk7UXcFYdChpqJKS8TCjYrRARh",
  "key25": "4Y9JA5wXdtT398mCTTToEmRsSoZWM9q7WPbpSstHWaVTx3hqPD3qgHoWpqgEHQ2UhkypxUzcKtuH3tVXfy5dUgYN",
  "key26": "5sFpJbARhycGW8YGxhVixSdhqY8aXyAirQnw8S8jy2M7TMyNYjhNDprM6j2y8NRbeRXuV3Y39NbupwV4RfCSQzwT",
  "key27": "54cSrgBPRAqkrSuG6Le1raAVi8G33WVCQthLdfZSzVZPgAdFd5bCUyBzrVeL7RY8T7ZH9SgAxPKwWfC4jADvtKag",
  "key28": "3ZbeyyLvatw4W3kz3FdUkb7t81g7z9TwW4T2LAumKkQyxiMJxzfPXxKHzYHPgxps1voNB8tG7dYUEx1DZRdMu8A8",
  "key29": "63i3hoUfZdH4Z3WBUqytzduye4k7pMgXFLruHgCNFB9CGg1U7mhnvYJr3G91EmtQ4iY2VfGyZcLiCFNpLKGXdzUp",
  "key30": "613Dy6SMcsMbZmzu8hv3VL9kTiJcrQ8WWbnEaFsmQ6HRmn1cpp7x2Lsu79SDSVfZFbo5Xu4XqRwHzaeH1x4xDhLP",
  "key31": "M4s1xzWPfzV33JKweT6dy99kJ6QME1GTNUvtY2qSsnTpAwCgQetVZsYTZgXuRwLadAtdYvEC52F4BQuAByySUcm"
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
