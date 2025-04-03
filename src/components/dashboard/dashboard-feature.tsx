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
    "2fAVtnztymuZM4jYaUR4cUCmV38NGh47JYSd3uyMew9o1QFJBAv1PUPpPVWFpPpjuEZXcDfHTXmGTJJu6EtmvqfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66knXyW8Y5p1pDk3WGQ4yqtig3iURrTMDvmh7GfvX63xPsu3Sp4MVpNGu6YfRRGz2VYCay55f5tFD9uLTWoog1LT",
  "key1": "3iEdjAtWMGAmVadcLrC9y8gNDri2tkZe5RjePeyiZRe6zdAqF98ozdLYdAtrXrgQ8B6KjBTc2gPz24P8UsxCcDKb",
  "key2": "YX9pqjfzvW9pjfjK7gScqSNwuK5xENGW3H9WjyxLpFPabziNbeiSN5jjEsUGZLits5GsaMcrVAVdeHkR9G5SqeD",
  "key3": "3CqNpk65nPyXGHd7kPSKzbWkboWtiVw9nVppfcvPJ58oWqz7gjVCtB9wAJRRW1ScvbKfCK9HtwpndWuZB1KtARNb",
  "key4": "hRM6rGudWW5U1BVmEuu7LYvThXfCHLNDyH8U6i9kt4Eq4YBebxPtFoyU2Kq3tpgWgQ5nrdvbzzez9qGV9WdZnEQ",
  "key5": "3CxUgLATj8G9C9njiMc6PZAY5Vk5iZCSL1RxUU5G8YRYY3QXFpBKEf2pfLuYT65Er4TvHdFTsd6wS3a8vcnyfva",
  "key6": "3xhGohztj38CgnHLaehr98pKJy1Lg7TdsSNLZ37v4h6bBfiA4osgj9ciPXqaDwwv5SfSWpgQD3nL2tXTWMCUfvim",
  "key7": "4aC71Q94xKZ2iyZZANJYrxLAntRRb1DEvf8vuyK8ThCXKqNFEQpZXZ3eLLJrAqzACG4qRNEDzeeWWJSmm8J3VpGe",
  "key8": "49oWnM5ea7vToNVW7msD51nHB3BTSNrqX2NrgXeC27Gk8DwgtyoxfxVeoYuaj3HVTJd9arMnpizpcEgcYxgpL7zK",
  "key9": "4emDnL2ezfGsLmisr3udhdUWhYoAH3RkVBzE7hfy2ntpXYxmzbyedyoH13eKvj4CynipVBVYvW6DvTFPqjmEZLLx",
  "key10": "2BaBEpwQofWdKYmAxrz5HdrkfiTGtJXRiCJ2bd1376Ksnq7mEKrg774AjbUi6gJQcPQbhe6eppXCMf8AeHz2AWjB",
  "key11": "MmFRxZgNnbvk8X5MrcW13jndrEZE4xEo2dFik8gp1vDAX1MgsrtoGDGgWhrYA9KjCuPeqj28si459mmSS6B5GJJ",
  "key12": "2nsyJeiYF9Sx57Vaao84bpKo57Eh1vJhctXZZhsPKGu3zwmm1ndMgjk8zjz4AN4tG9jZcAWVgNZLpK8apZzwC2TS",
  "key13": "94uC2Ytgr9xnLsvFJiZT3EBdn8DuWLLwj48t2SurAJQuKaDhq9EXRZBmwraeh2zLJoD4sCvJkuTRuosup98KMNV",
  "key14": "5kEAndvb17PK5Aq6FAEaTQbmnxTWdxbWPdGNnRBxN9CDyEw3nMd29DpoWtauzVNM16mPUAvBFoS8Eii3Cn6M7wFL",
  "key15": "vGVSVF3AZ29hqtyxaqTJiTDCp6B8yqmsGQHuXVbMF2hEWbjc1SoyTnKxnML7bkJTUeRvBu5XzUk4P4LESW71RAa",
  "key16": "61J4RtPTfg5FeKx5x1TDGM9A4E771XjreE9CknPvpbgFRBc9tzhhstH3cTHgC3LVba9JFBpArPbjXGrie28oxceN",
  "key17": "2pJxy2HwBQAbersg3EdmWiEuwmiqRDa9df3cvnnteFY1ifeSN2wpERqqjDmxBNHnG9bidvnZFRdYks5DNkXZM1Ax",
  "key18": "3uMws9BLTrfvBGMcCCMnNt82pDfFXAbDzJmFWBfVedDeV1SyqvrXQo3tRbEmrthfvaiLq5PqFVwkeswp8kYqYhm4",
  "key19": "3XmYZb354eFMD7cRTG2t87RVQo5L1KTnDT2znaYiDkHKqv3i8GVmbfA95q1uBxq7ZToiV5p5dCpNzK3f498YT7by",
  "key20": "63voifLss57xEsQ6fSUUQAQGfsp3xbz1dQALMjFgkUVAgXBF3mFxya53om3sATLAjbGkrQeicsMY5Cu7ZFGXEgAr",
  "key21": "5cvz5kXcEs38ffkYGPh3DvHnVzSyJMn8GMDJiBQMYi4ZTEYonKb7G99pL8fRoG5xgs3TN7P7UiRD49bfxxpNJULe",
  "key22": "3CwYk1WgBwanC5hBBZcgqfG8TmEnZL1W3JmGP5pKuuZyJbRUssjxQPAMZXVw2JXipTuyH4uiaLJS3T1Ce1nkHNWK",
  "key23": "3qoZNjmEknGxJogAMUFAnf1aDNAV3w9e3AVs7VHUFiNnbvz8D4Jjo2M9vTpyejWyd2e5n5ueewdemxNYzpmGaTfR",
  "key24": "2Vs75pEeYHmruzH2xw1zvsmCdVWMc2QGY18q1j1TYkoNxLTCxjqWUxi1LroimJnwwLpWXJXeUefDU2FjSCqanupF",
  "key25": "53tjtvVjsRG2kyw8mKnCSKJkhaMsZ2hVHvKi7X6iAMDT2E74iGpBLPSS2NJoqf6UncbvjEZwMkEtQ4hMwGerJgge",
  "key26": "mZR8r2vaSataTF9AkmdjsoMumrSfWxx7jBeQ9jm4GUNeRzjMaBtGfQCa2nVa8prFGysbwzA9AAUVEAwiBZBngDc",
  "key27": "4FBKosmKdGKiQzAb2nV9oeD3UmazPEhhHZUFBt6sz1nx1pLLiiwjKhomwvyUsJ9moEhY1tXtZ7gGMmUq24WXzFhq",
  "key28": "2adkRTvnR497vS5iMB23bQ5wtPNwSovw85qTTdp6BGTQ98dZiBTKyaPZJZS1tDZSLQzVDEJAJKwWFuEXg2A5YsSX",
  "key29": "54pQhsYVZ9QZZ4jt5t3AjZCmeWMssTbwU4sQMRWBPVzSWb6yN4dLBdtHa5yGsN1Vu7AagfmHMvFXj39BPS16mnus",
  "key30": "3oYuy7aBooAxWaQW2v2iHvisYzgB2vS4dSG525kuefx3hTGZFCq4hWBas4WgMQFFNeSjrcHWPWTUvxdG2rrwHWBc",
  "key31": "3BvoTpKNUL9qRMVsFyAb9YKSVu6nUUMYALH5978JFxFwcjMGvuFg2Qgp7ALqkk7Y3PwdkufJiiLE1oikbhdgJ1yr",
  "key32": "29Z6LRvzUiFDwPUWEP1oYFF7iEgcNsc2GK5XPFG7XccquSnCXnRMZCa6dwKn9mvgE74gj3Uy4TupKvSREVpE64b1",
  "key33": "26cbuvZgNUj7o92LJVPQ4YLLrnPdffAkMT3G7MydUh61Yk7mGwYxtDqdsi4FFYvhoXrRECJPXhnPPWpEBtBxBWGp",
  "key34": "2tk6xMCDPwaAohLmtNmQfvzoJiT4ukzueLHPPMLUB4LkeLCRr9awXGmPZLP4kC6VHgLSw4tbpScQQUYqAHKLsksY",
  "key35": "5BVnZNTitGfBhWVSLkidA6BeWuf252TfqzWk4qm6ttZaFt3kZ3dacxNP4EdYpWrLx6kQfsKWbEKsN8hheWXNaLNN",
  "key36": "2zB15Lw6gLBWi6yDMQtbX77EXrghMGZvoqGvwFvaVmjqtcpB9nBx8ct4WkYC8VuCNusMiuVmZHMAU8Pf11jYTSaL",
  "key37": "2K5gd7vuGgcGWkj6faVSQqRjSce8cvo4KC5sPcZ3FLQkwC5g5X2dM76NH2inBrdFZCPHCw3TLntwXntPeZfEyEPC",
  "key38": "5YU8eZ2w3ZrsNcGe8pDv6PjNZnX6qdiiHCxqjaingMHS3C1hc5M8KFaxqB4cLMQrgjnARKiXBFwZJjCt1BfV5ysh"
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
