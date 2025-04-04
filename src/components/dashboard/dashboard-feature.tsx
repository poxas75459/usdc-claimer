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
    "45gQaCYXCbaHg361KeuYnFLbHPieRKrWxk5HQdk7CJa5jQ2BQFfRbWe4raABSudvfqPsQsPDYaL1SAhwVDgd4VxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YT6TbB1SiXGCmeZi73fY8UsupxhWqCoLGBqcnNRVsasoASJgm34yhtFPVsq1nTPkmHi3V4mxnNMebunmze8hrJ9",
  "key1": "62fCtnNJjhj47Cty6FP9P4ecke2XJNF5xFHyXWDMU37nvjEvxy8jWmJb2vzMeA47dbQJs22AfwFdG13mfuqEaz1R",
  "key2": "33cA11EfAbFrjpKACnuLDQFLs5BtFbwugt8rQQ8pWbp3NpmKpQFiAPeLJybyJHwRbDJMnr2ZkynzjhvfWEH5dLRV",
  "key3": "3h459VG9PCTRhdbEbRwou4wRaNaYtNbxGDvSb4FgeLC2bkTZsqwxtzBa7ACfrwwGZfb6djZWgdaVmdK5sdFvEJSN",
  "key4": "555M4PA1aN95dzdkBQbAxX5DrzHBot1MQDUnSB3B21hqojE6Zk4bKxFWjSrkWyrv1GPYkcaPuqtpeGMQcTyWoQc6",
  "key5": "4WHXhbJDATnra2NBwim1BYTCVDhkJ3CkBBTEKJs4nk5R57jZhp4QVkKzRTHneWNtauvVbeMy7JiMBB43ywLbW1Cg",
  "key6": "21GE3vHHJPLskPiuE9xBDG75SnnUQVmn6xmueCfXWh6k5QQP5TCxEJpkkgC3Hjz3FAG8tqEKeEXipzAqwTDXHUFm",
  "key7": "Jn3LXFaXhwLpx3abcUfxGwTEZUUkrGhfTJur4vDNCLfTEmLmCr6VQQ7XdHfFfrQS1mFHcprb1o8pjd29nDgR14i",
  "key8": "4JukfgfeaN6iQfvWoVqVCfNj5228WpdqyoXagqy4TrFkRB1cwwkeVrQgPyjJmnLoiqUjL7ZtUnCGVbmMboVxWVrH",
  "key9": "2zC2XDfA668sMsuo17L9Ai3x94cQnTDecUruVxwQ6MT2ArSA8RRY3qCNwThuX71h1Mr3WddYi7W9sJLFxNyJfhkq",
  "key10": "4zCHtPh8ENiZ7HtfBTUtE1YUHCLFaKpqrGEULL8BdJVtVSJcmhpuwL3yvjKX7BTer4VqwZWSvnw7o34SnvuoTsUh",
  "key11": "4xcRP1sxFvE1ytGM4nvMwxaLoXTe7LBykgc9SBqx6asnZspaZH62QeNq9DC7G2cBVBoj7jvbeMhLkVi5NFbhidCb",
  "key12": "3W2oqwb3beyHVZSZDA17NAxprJEGmJVmzoBmYsZexfn8UFr23DxErsGffwjKD1zLmwxdien22CNs5ggfS8Lbr6Lq",
  "key13": "2ChNS4yrps1pL4YKmGbH59hC9iKSm44cZ1SkabfKRgVyxq1YS654PpUGwoLmouosL6spbLJN2KWCZ4k2YSx7Hiub",
  "key14": "5VY2gMxAU59eFALqUbcJZNyFWQs2dJprvgjGF8J2BsYwfTYmkLChDS3SdvfpxLrYCGyWaAeS7Bg945pqKuEXCa5A",
  "key15": "3x8RPP2W5NEWmJb8RV96dQZjHJhfpnu3XtZPEGkCoRJwxnQ9Kzgem6uZJKjZsgdP8sQ3Q9iuswnfnJrtEcBPjQba",
  "key16": "2L3r6Qf3duUCgGJSXg8S1ru9C8c44d3pXzaFe4MySviYADNxdkTLju4VqipYW5QckJd5CcjWdRJ9bSh99Nj2hUxN",
  "key17": "3HE2yRAGuS35i2f6ciCYgFpzQF9uU2CQtHPSug61fpLeQ2qmFCVaSfq3DfTSJXRXYwPeG5BhRSMJtErAvkT9GdBk",
  "key18": "2dUWeA25dUc3Yr8iycSpEM2LHwVBeP94fE1iv7QEgywUFGqYJNFWPT3VLXP3Tw7VDmaFppQhKuKhFp91ccW3PHUC",
  "key19": "3tvzfsYqzBCrf2QCBBPJBDo3VeLTyoTWQ6LdAU5vPyDthEv7B1GABSBYFuBdy6zrCY78jFDJmiBY2TwJi3PTQ84o",
  "key20": "4ZmUAKHVzmrkv1kLMDSkV1vCu5NDseurkQZr6UFvGsWBJJgkQvvDYVgMFDyqynF4G7iD8yKn3y9TxgXVbz7HZMHi",
  "key21": "2xM3htwjBiiv8swkNqu6hp2pR8gqpcMfa5MDmK51SdnjDgqPT4LoPgnht6MsT94KUVarTDdhC9bTRFbrgnJugUaE",
  "key22": "9wsqyPPYNwn7a5vo31F7mNgt7jzJwrAVWb8GwD5PeEbGpAfuzzkFfLKTtZZswBTfpa8psE3Wm5NKBhDwokuV6pY",
  "key23": "33LyGEbhu93HVG6bH2j9oaTRNDA3uzQPPU16cQLKYmEm536LeEuvC1FD3PRwY2sibE39PnN3JmxWKc8rDEXSC85B",
  "key24": "3P6RHY3EMDrgV8FCLjskLEKjxWGhWkWjjP6aUXnAoh1GxjmrQYnhAiJb3DC2qq9yfuQpWjgGF4mBFEdjh5t49RrG",
  "key25": "5mwajTZnUeNXEbeNnj3KjVw98hBQJiJac9ZyPrbRSx6vMVRmBV8A9ADFvLcYt5hrR1ks3BznHnHYducghRbak2KN",
  "key26": "5kecSWij8JnKf4P3K6krdCZMhj8CvEhXBP96XEQswXChYAzW6RFty7owwnY7py4kaAPHeW5zjetb71wc4s58fEC5",
  "key27": "24PZGV2wF8w7usvL1QqQ9RpvY5oHS2Zjh4Rj9F9yLKNUisE8KCdu7cnFd62VzaumKZyd2KatDMYTtq6HEJYXDLrj",
  "key28": "29LzMyzfo5tck8gjSxrQrqAG8WztyAeehm3jkwD7EDcRDmLLXqY3vZ7CAQTJ8fhnTzhdqy8QrkBkRbf76AYUjXj1",
  "key29": "5ZTgdrysRmuNJSxSnvCGtiYSqttMpwurroHygdwfX8XmFgR6buEVbZzu1U7N8xP9Y4Ub2YLcMfxChfxhhMLgDc49",
  "key30": "4rXe3wyQzGGpPM9HL1oJ6tDzyxBCVHX67mBZLvSiDFeg2UErhfa4UmdvLUMN9p7hJk12zwCYuDf2UBWHTT3mjySn",
  "key31": "U8CpJ21pkTtynGB2QyjAG1s4Bq81NZeJuyC3oqJtatB64ytoTsyMwALZNvFap1RGYam8JuEeP6VeFMTJmQ9FZrr",
  "key32": "24cvE45P5Xx4rvE28PvnvbKyJje8sjJo4UgKXRamoYnjvqRjH4TcHnRisvdWJDw7QvM3AB4NJ8aszbH7sTMfFAXy",
  "key33": "51dXpuGnNQnngt4dhHHTfnbZdFCJsxowmyCAfRs3siex8jznV1Ety9RmVKhdAagtQFqppQ25NYHqz585RFPp46LL"
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
