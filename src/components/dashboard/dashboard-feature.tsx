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
    "4bZn1ixjpnisi4SN4ozt4WdnDsyK8udKQM4aVqsFZ7Ynf8Ge5rTjdfUAVwC8rnhbrpadiQzu4V6TQ2iC9DiB6NVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkfcuaHaTkbUFQLgTDs7iWLjWgyQsUx2xRzVzWnfWRt8Edu5PvUhYbRf3C3oJN2yK94e5UdsHHgBAPc2ZHb26eY",
  "key1": "ttnu6XJcV1Mr6wyT1dTrH99SeVMeAB28h8rGz6USvjfyo2KrLp7XYSYsDkiyzkPNcCiLtYXcBfRBhqp5GHuA6Mb",
  "key2": "65YVsVU5nsnKtDNKCF2WwN6PCcoxrUaend27ZjtZK6RH7k7WHjfSntWTucmkSKQ9z1dz2x5WtjqXSzxNMyCUMJSu",
  "key3": "4zMyhN5VEvmyJ2KdJyzdny9GcEsCRRCjpM3yfFPoYyqXtpbG8WmMJpcK8L76o4Jr4Ye7ZUQ4ZCakAhiwcGEiL8bb",
  "key4": "ZUS3Gb83QgnzcsYZHELbXBrr4RTuKRyvYhq46XR1htwLbFtinAmXbuikMGQY3qMSpLm2d4G4vsJUQdgEjsKgJFz",
  "key5": "2yg53BZEmm2vK9NfaeAz86xVomqkdSg6ejnTLZicHMc9qmh7GS2tZ1MNME9eTbTqsEZEJztqzqmRwb5a9nEHUHZ4",
  "key6": "s5U52fiAxFgNp7YFUFJ7FA4SkbfCMvc6BmS461zSLPkSksEgYS5ztxZWCoDZqUysxBGwGak7TYtvj4VsphKHHhK",
  "key7": "5ZG6gkRKz26nHm8YncJJWHRFGQEqFsvMrxTDYDqULSiGPgRCcKnNwomyF5ZEPLtYFM72dK7cpcZfeEmTsjRvx9t8",
  "key8": "2W8HHAL1UkTheqDEzeFn3pBDdrYefc1WVipDqf5dM2GQgkzYokYfg45THVcgwNWQMkqr4GuHsv9jkcWGejWZeQq5",
  "key9": "5Y78mjE2TFdxq3MJRqrVx8FMPek3X3HPTTPdDAe2RkMaPdQpNeLnEjPRod3ZX8iwqpePWG9bYpj4Qyu4EUGbP7bf",
  "key10": "2qszE3q5DXudKZoNzRLBE9oPxxEYmpsGC13PQ9Twtqu4FLVzQCy3mccS6yX4SgwMdFxQhW1CVKHNrCMSt8gR1LH4",
  "key11": "4L7W6aGQ8vPyLFp1fAMGf5iqrhM8RnmBQzQgBku7DodqjnJGVavza3VWKBCgxVh6Ri3yKg3tMksEwEvH4eNs6w42",
  "key12": "29Q7EefrX8e2Y4yKhKmi5Fw4egTzSo5x7KNtVhrG7czPvhidEsQU4TAhD9NSw34CpK3YL3Zu3qe4aRmi9xhJsmVk",
  "key13": "38S9vdy8pUdHofBPmECLCg3UEXm61SzJjwcU475TdmKigw1xHqM8WGMd7ktAh6JLeEbyrt5d7esm7PMRMmkHWhpS",
  "key14": "53Sdh6Amxh9rV2QSu7ph1vMY2yJYBHkA2u9YtLWUSub563SNpDG5BK2m6TvVcEcBFA1oHPqATHDbbZcuRuJcnrF9",
  "key15": "2x2vBPAaz3fxtap7QE5br1Ri6rHRQWHt4n5MMm2xeRciiawG4hU9gXUSqNvWm196AmM6QU9JRnRKyPXVh4qELUHU",
  "key16": "58BRXQ1hu9VsmTLcLuXoUHcyvfhDP1WKH3AZwptfaCABPu81Ti5B3zij3BfnvQv5MuMqnypnaacTb5UE6JooGkUj",
  "key17": "4qs6hP6FUFmYc86h2e5Q9EpsuYPzwnUMcgbU76qzAYcVt9iN6bJmTtUviVpzaXACmxdBZDt6CFNWQt3wW6BuibEU",
  "key18": "ARrsiw61AEwYA3qWoc5yZW21NP7UbpnC3ArKjvheXER7pmmYUZ6bDj6tXqasby2nuJv7nJ2GuGryC2SA2vZbrP3",
  "key19": "4ohn8o2rDHTJ5nK37sTy5tLxhEP1WaSuaARnhgUq9oSU1JovaKPTofjcoPrUds6knY8SSkjNy6YRb2YgX16UXk6W",
  "key20": "3T2kwDnp8oGfh8MeBWzjTNjjXB7myWsbFH49pf39fXKvwKPFaShU4Y6HKrgUy6yMdfVMjXEjzkLrFosNxZLAHj5G",
  "key21": "46aDQZczctate2gY2pSAiyc1wUvZwfDiUUsQH66iFPrMQkA7LYgt1Hc6qSuSc3LegjW39ANB2EtLY7NJm6SASjsS",
  "key22": "36MzMeN3Zk9ERg7BJSZGvbVe6zGKnSmUxbtZ6v4hdewfxyuifrNisXGsEixLRt7oebrW7pfwXYUzn4ysN51yhrJG",
  "key23": "rujcCiXnJvtzM9anmSdDgbspQBUmNCpFm4jMXnbALLKRrRwthyJ3Q7UgY9KGj7vthhHeFu2zYLhXoAomDP4d62g",
  "key24": "2CmboFXawYZ329NRcNfctSZPs2eaz3o4gXnGG9KqhYq1v43ARXpyAmHMGxCNrGYu7TaR3rVU7RTuQQZg1Tyaw3ET",
  "key25": "VMMXx27NYfbdSoScztXkrDPzSdTGSeGMieemy5M1EoMq4buCEVwBBvu3GuEMsFm9ewSGgAQXX1Ug19EFJgS66Ly",
  "key26": "2EaFvS7jVRRFKHYsqcVB688YUog5hrH4hTgY3VN3FJ9Hf6XUtUWFgHwEJEQpHQymftJ3twHfyGtNsndmw1BpaQAZ",
  "key27": "3dKvRGtkd2FJSLwbrHWf3eBp7JecRnFzQJe5kEvyCHD3udfFpffxavzGvanYffF3tNkhFpNi6T2efP7d8NE1ruNQ",
  "key28": "3giXJVrp1M5gPj29zgd1maWtfBgJi6EcjzVKZGrxdS1PNddpCAirtkV5YpZgeshTB2kkrXcZxbVGgKb1j5orPoFv",
  "key29": "4CbeHpMLStmmyCsQ1UgStpaScU7dafnVcpuVWsAMoKa9DLUEBPDUAyVXVUWscSLm14AjxTNibwyfCCgwZHQGJBoV",
  "key30": "dBAwUedfTMWbDXT9T6LGQgPsYy4hfWmCBsmjx3rJeyXzBTcVJUGD1pc2P6bxQ468uEeZtD9L3dsJpEXrVU5pnDo",
  "key31": "PZqg4rHeCZ891iEZ6E5rkhjXjUHeoPCeJE2ZE65PD4BNvPhAaZKB7L6jFrjnxUmUEGgqbJvWd7yLNkAFZqQ1HUR",
  "key32": "2tHGcGT4pXGqXDCY7gG5ji6Px2jub2eAyD8KGKX4YXaD26ysq8Gq6qF8WkSyH5RdfLytSfdMg9etive1pDPttimc",
  "key33": "54NqoSUeniye7r62btcnSXd2jsDrT1PPyfRnoCkfn5tNVQnP63z3FtG48yEPhUedJoRDBmN1BjURf9f9FJh8ufYj",
  "key34": "5b2kUMUWF3iyArxB1DdTbuNA63x4NrHofdMY4XEqaT373TELpX5apXgVUdhPd3uCjnCJASq1wPnUEjc5PwaBVWp4",
  "key35": "jqPzxyvZeLYLVEUMFMCCSRW5ViZvoTGeymPWUGSmATuntyVBqwrzEVmaC7sGfRvDa8SLCW8bHNYzv8zZuxJeAVk",
  "key36": "25TvN4GQRzCYbdVLQ39QSP6pm9sF2evZbXJ7SUpbs73aRPT2VS8E4aAKcLdcrFCRmTUZ6Pc42eZ9WqSHY54LHQjP",
  "key37": "4TsvcXtVPPtSm8La6aLxKUP5b1KqyJFzPTMJR2azawcNyuQ9mQtsbExTrqHC5bkPpnT3JgA8t8NVKAaJrETX2qaf",
  "key38": "4sWQv4jbHe1f3GYPEYonbZen3Uc7gE24X1NDBeLytPznL4hoDxJKCWUCiXFoUEVzmHHrorTGZpz4mru4QY7xiCXG",
  "key39": "2JTqfrS7VLwnMoPzC6jnavmXKrAvqrhAJ6voRodE4tMmSpfkY6ks6b5HEkeatiz3Avmc6bWtWYJq6cTDsCVSCVox",
  "key40": "E8G6YiZmqnLheb9PDbsqgg5AaXWciWYugWnAFHgUJHZqtpaakS5RAXZz5rkFioPCm5Uuvt1XYXsr1BkTjjBq2Ls"
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
