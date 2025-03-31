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
    "3GD2UNBoZMFfV9YLwsZ2NbqDt6bT522sb3tKzH4qircq7SKS55U6s2gRbDqCDoxHb9mPySM8TrgLwkXRVF2sDUME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNuR7YkDKPBT4yC7S5oFmnd3y7cdajs4Jjmriooa7k1GG9D9NNxbQZPnWTVTHc8HsRvEx5jZHPk9dWbdB1MHWns",
  "key1": "5BLQqe3kExPP6PEUiZ7KKpNGUghXma3iSoqPHUWLyyhpL17kZs6CYqf35j4q4JCuAbSRMDK3nDbuzyMxrpZacdYs",
  "key2": "3BQUTBvRZ2NBQxHNR5XaQkALCqFbKP496tr8Fn9t4Dkd5XwXZJQX3UPvjwtnSax1ahxod24eqrKT6Q9fvMSHR19x",
  "key3": "2AQZtZ4Z2iShUrHTjYPtRj8R2cdse8DowNy4Ex6doLRYLopmfYVvjG45GVDLeFJnEVFne4CuP7CiYTG8ogW22ASN",
  "key4": "32BxyfAQ54wkQdv2VUxtSqMr3HzBJqjjrAKiq6CB8GxGiFDEXMfWF4N7fp5FBdgAp9KYaJKsdRVLn55Z2HG2xoTN",
  "key5": "2DKMKtVBpanpmxphkqdGBvuis7KucPNaMooTJdPAEX7MV2oFqNRusZrmw5H2RzL89iEDFdfYovJH3n58CqCzenLp",
  "key6": "C3zDQdx9tCJ1NVG4ZR5rgDjESFom76cZVggmqPhuUeRJM5EhmsgTRsvcK2DLEUYSxVPxF921gFJVVS6etDKji8E",
  "key7": "4YqgDP79ATMhs35QAjinRp63hXXkfZ7bYfcxi4LCn9BYJFc43xS6ZWzERLAWPcMVPvdi3FyM5wCmbfBznjLSsaqk",
  "key8": "5Xq485etYeCpmKMjGzZbCfcXR2qpRnZKkLMGmdHuBueuowV7591dA6V3dnTEsFLtGvgrVV2vmJwwvXH6oeHikcqg",
  "key9": "61hZcMdz8E3yi6oFoK6EuauEEv3sVFADnLz7YeVTXMGQs4Mrqb1c6LWqsp1SD4XUQckLN4cLtR1YLf98ZA7mkHJQ",
  "key10": "4m3oiTSqKgVF2GDkhxkMHoozWY2bWuCLZy9j8WdKTXx8sXzArvsdwznt2y8xWdF3otc2BtseW7dfMaE7F1zi6kN2",
  "key11": "2bxZdNjwJWvgEuRZxztipFXUzzijZmphCMiKiHFkGyhDoJfxNqmfVqDT5Wkdy3qYBygMzbERuU1d2aBduriM2z1W",
  "key12": "5gswWYifdqkfjBQdfuXKCkeJtCz22U5ToWYv6TinJ2oYiiDvaVQRoiQyzKBbv96WTqGgLbzocStJy1nFfufuHGqo",
  "key13": "5KJ8hoPSwUQqJEcrb4cBkwZqu6jQtNTcc3nkuCtkq7DWvi3po8qLaFmam38gCPvKYNk8wbyKLSsHFjedMMXpCGZY",
  "key14": "YY5UziKVgo2EkjqpkkMSA8Eoge4WLx5jheKSPa5jjVZQTQWQT5prufcVTNhYhUbMqzX6MFyY4rVKhBGJqktpb8i",
  "key15": "5vPUQUMGBzQZMaDVpqqGfDXkMLQHsTrMfY6BveS4xQvKpvq5sjZmm7LPVwvmNABWDUU8kZQr7MGtg2wFhbSYKecS",
  "key16": "21bxygmMyvvAQAMWWBbpAjh9mVSkcYP4N5nDecHLw7WLrKVeVPFJNVuRQohb2SuutUVcn8FfKy9DBHh3Te5z8KQv",
  "key17": "4hczaCkJBfQsfDt1T47gB8cGB6NQtSZyqrtmpqAHsg9Qe6VcZ6hZhMBARTARyYZUkpsKvSypE7qa1GwkAvj2AVze",
  "key18": "2cKC41MBSufHmrKBXmo2J4Mt68rd4Rbx9Rm6EcPPNY86s9qFYeojxmmpK8EzBCrMKi73UFd7D6FwbvEjvQdkrTQG",
  "key19": "4yfUjDKfBD3K2HbXDsXeTLFC6L7bjFPbnFW3nsCEzvbH1Qf8UsotRwASstHMs6sQibYNQsLZKs9SYazbjqp7bM9x",
  "key20": "64MPHv7C2peDUCR1CWJu34K9MuhvwLyryMq9k8cqVDh3QYV2NaCJiugmzp7wHgEWrqgMQa8xHNV5G8xTf9evKcvc",
  "key21": "5MkjR8zQcqu8VhQsDxwyU9Cj6qjdvUpR1gVyQvRZtKJzUEvnxPGEA1TS1GhA2F7g5ARwD2ouPHbQzADq3YRFAwAT",
  "key22": "3uLurnVYJyXFmAXf6T4yyF1BJfK6W95DppjV3iNRZAA6TgD1UhKvuy2H7N279GPgrTJH3m4f98tHeQuNYipQKoG6",
  "key23": "eCRNw1gnPgyhDE3rbFeEWACKVpk9J6JwfMgQLgNqn3vzGeNGY99B3TbJqGnybLFFo1x4C7hdGtzNJffAWLhRM54",
  "key24": "3e9iDFxy2fnEhBoNitd9bFNN7TbbQTfGuLX9mLaYf3uVv4nk3Qu72oDsg1RZX2JNZRSaUjkeVe4Rg41hRZYxBf5C",
  "key25": "2r1tCcF8imQADivaRmD2Ma8tsSN8NeuDp5uD3YdEms3XrT9WQdTSPobD3x6YeLMzDP2GCCbdMVUQo6E4MpqrGt1M",
  "key26": "2TvRAxwrEvfwnN2M4J5dmR6aSaUR2xFywUVBBAKDUZ4vg3YTgC1hekPEusPFZumv4PWDJtKkYeXxDNYSFrXJG5So",
  "key27": "3Rh8hw3yPrbnBSJZgCtijAdU1UZRnnuKQbnbGpmzvxGHHF8oM24kAMqQM9UUMaxa6p7BnFR8qGLcYSb2RVxYvxAj",
  "key28": "3Y6XLjcfRmbT4Nn1sCN8QzG2FwTPTek6b5UaT3SBb4o2v58nqGQWtxoNT4zPZrGMofSfdcZ6d62tRdswJ9LbGx7z",
  "key29": "4TbCWG1q5CjFqJSwUmDxWrrbMVLQFeXCZhbNAq4WSRRSiwrz2M5hP2mBWo26T5yJWyq62aigfavVXQNBXZfh5r4s",
  "key30": "4xeLBpTJJBFPLNbp6VsTPf1LuShuGEygGzEdtJEvBLbS2GfmX2RYXi1Tsva6mo3E8pjJLGj1USaPqarHAoer8eh3",
  "key31": "4xKb35UdA3NLNrK97iwaR4VKRhKuNrWeHAPnftG3Bft4erRsaVqcTq7ixqY7zKcbnB4zykUPcDvVHpagFKcbmViW",
  "key32": "31QeELSxaXAXzRVc72d9pcPGtZRqXuSUJ6uKKSaEDUhr1SjDrZYMpdESkd3gTJUikZp1sjumbAfxQiHwaDTH2CFP",
  "key33": "5oEiSZMipPE6Gnw4htWjeTaj83qQypVdUX7TvK4F4AQpuWndPYQMdD8s5ACk4sX1SR1x1UHr9tDgkxQgtSEoV3qV",
  "key34": "5U1fiAwKMrXbED196NRARLpFdsHg9pjNyJieJYUtnnbz1rsnumW6WxWSP53ovoiqPtEbMTJ9mKAFUEBecFHCi33n",
  "key35": "Ad12vPuu1M2hMFBkzCyaeLCgBqydaAVoLfhi17tkSVLiRHNinuzppJ5EXbyKBkCPmPZ1L7WRA6fHQHGSjwem24L",
  "key36": "aRPmBLtSSydfiphd8KgwCvZZgWv5zhJ3gRmyQ1TH3Vy1c6capFhEX7wXh9hiZpp7hftaxFXvawfDUK5W8ch6FB5",
  "key37": "2ziLsqMQ3b8TzKWK5sTutcAxXq9Nk9fJ78GcfR8K4dBEtugPdR6AKoHJzaCK4X3HsDseyjErcRKbSQdS2Savs4Jz",
  "key38": "5Fs81LySeGBa8QtDjPkU29W5fi7sboYzKzEjnf7eHaSxUBMHha74jyefm4bYgWZ7yeeRk1KHaDg77hETKHNjkKMh"
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
