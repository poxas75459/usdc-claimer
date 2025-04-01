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
    "5YsLD8r7kVGq2oLb8vxHEe5B11d8NPJ447bR9hm4xmWNS5qr3P7dfKgfzcKvGyHXiw2R4NrQpbPEqetfRx3MKSB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqYZHSjSnKDZZjMneewKgrdTGAaSycuBbo9k4bSQ8xQfDcXGREbMnFUnKWCiLcjEsxjx7A3Sfa8hPDZYWXwkCvo",
  "key1": "5wxd46xpCux8UZEwBeXvEn7NGT22N4yP8P2v7kQJ1XVHkBaMqMDXSmZhmhJ4xi4vhME5uqXRnaW43yZQU36ga3Fp",
  "key2": "4hsfRSS4Zs91pgx7tGDzMChZm4GZja74bpNwEhKFTTGxauFC2z5177WzecrJJ42ciLA6pWQbbc4rKKVaWL7srAK3",
  "key3": "57kCR9Ppu5FwNU61mr9KiZiFYTwyHdY2FXaimh2d1q8TEyZGx77jNaUwcxT3PrjkbNN7DK1rAQbcBYYpsbmJU3JP",
  "key4": "28hYWC2wCbkJ63EfRhzYvXUvHtsSPTa5SpVJ156uym3ycEuDdhJZSQjGcyWF1uyLNdiptnTqJXY9ZmTmja2chEcg",
  "key5": "4tiF9DYd57f2h1RYmmjPZN8xru75Fxgnga7hboDqKuwWqp2LDSEskZUmqsqkLEA7gH9ECifPs25PESAyAA6MKy7",
  "key6": "3FBaJaUUUSZkqsZaRYzvqYtNQeZCJXV9DrfQnaX8esm8hBuMWw9YWcdca67cvWR6ZTBYxVcp8UJ8hheBEoaxgoFk",
  "key7": "5yyB6rCprnxxACMAgsqiYgQXdWqkmfRYHjsgJiTwmFAatghzkMeSieYyi32cXHNUkYfVMHbcyxiYyax7AQ9of969",
  "key8": "3BKMG4s5Ck6aVA5cqBiZMnE9ShwqK2BXp1myVQuwGECAFmcmfggVgtkcjpHixmsA7uXf2c3Mcf1rMv7nTaYiLs5q",
  "key9": "5YxkoZaccCLEr9BvK5S6vSbo41rMBGmxbMLrTGGgmhf6qKmNhVbQMcRgibXXLon8scnefcTxxttji9CHvf2UPZME",
  "key10": "3uWpM4VfhbMR3NZrJX9zs7R4rmjvrztVMRxHfkRrc5es9Gr9GKUjYKmmTfhaBH3pamKJHcbkNEWrd819FqCmcxJw",
  "key11": "2ZNqFSB6cxSkGNdMnD8WmvnRrw5Dg8Lm2DNNjbvUebcyJWvJD6Y68EgcAQHnfx9DsaF4yvp5qnpxo9EoemkUko2F",
  "key12": "5D5gUzsjvtwBiuQDqrkH59q4Jji3FaZnpfdKQrwwrMPN6ebcE1FUHbtTwaVmdz3L9b4sHeTNXNLbByuMsTFtWyiz",
  "key13": "66Ec8HNW9DLnezNnFW7xupS3XrkrdeC7MY6Bd4gT8tjpCHNCah4a7Ut3xWDSFfBfq4BWbp3vXNCxWyaCtJXxuYSj",
  "key14": "593SXD5J4vSDRZReBaqn1whBAmd5bYnWAR7ouMdtyMu2xgJ9XrypG6uArAXYgiRjebdhbUp9C6j5NrmHsAFE3Vqk",
  "key15": "54QvvTZf2GieFhqRzNjvgodBAf9EjUtN7u3hYnPzoaCNGHdCuQKCR6FLTJ1ouKmihYjFBNtkBiSuDNnaT6CU2uBu",
  "key16": "3pS9aZeHyruQEbkvFc1bHHPX7CcLQaXqGq2RUktxS7kgdaWAbx6ePUibmMAq6Wod9JmsBiVfEHrSX7fu8wjekL9N",
  "key17": "2Z3xm8c3P2E9gcAgDNMpmCNxt4Y28spASgq3ZpSL7ohLt8aJMjWQ5abok8TZe6qEUdjS7Wt4Y8WJog9YFVKqYkQm",
  "key18": "5JUhYKHM9Gi7zSqhY2SGA2ZKN1zvdW6M9zQoicHk8EBUBLwXeS1QzsmCCeK5i1GVjESphcHwRqEmQ4Gy5KoFTV8u",
  "key19": "4PNaD88qmvzapHPhXVXrBGv2juHEADMNi2RUKB5daVyVqPXbiuYyThiH7M1FTTVDT7VSWfcofwWFQL8CkxCLS5ZH",
  "key20": "5Gsn4Df6uktU965jnaWCMeyB4ieTUKV34Bc5zbYbzzNqidMtXPnvUxNNMTgyoze8KaAEQeENSNJATGvbitJAqAyW",
  "key21": "zMNUn1UyPuBN1q1vrPQkdJ5g6uQexZMQfKe1Uh3VW1QPCFzGXyjtHuGHxctAjxmuKZ54B2YmSQ2bQKYUNP49GVp",
  "key22": "4D7anYRKy4hnVQyb9iMmc5oexYPLdL9j9X8QbRbuYdwiCoR4tnCxQ4evde1BLJ8MRB4k8yHLmf3CKRPhaqVdCqLR",
  "key23": "39CyJZpm7PEAtQ7t9ESzsPs3eVF1YsnUxL8nJAF3NDZqLHAN4cKmN2CUbrZ4AA3KDFm6tmP1Hnq7cNbLiukMHbdj",
  "key24": "5Fqiu6jTWyVNBmDvDW6qGEbjHhmMoMaDBV1H8pF8rJJUP9XeW1p645Sf7QL6CQXtsAnKspmYS65mYDeEtUgm8NcU",
  "key25": "5VEtzYuJPDWpCM7Yd7NX4KcsiQDBZB9owJK37RGbtCzDpV1DySXjmEBVCB6ED1gExthKvMpB1PvMB9CbCUGJEdtF",
  "key26": "3Ssfq6KBwf1uNStQPBu6og8RvgfsYeLEWHxzFRzPh9GmErEFLii1PfzUo1wdrcXTZM1u5U4TSJ5Juk9EevX2hgMP",
  "key27": "hEo1CzaJx6KHR8VTkDUUCaaJxvDcViCVAzPWEB7cDscdTGSwk4Fbv4SGaQqroEHNnrLyTyJGzcwJYEQEDeAyEgi",
  "key28": "dqHJaqtWLVfHf86jJmowFKWB8R414w3UQYfMJikrihUXusjfufsutdm4BbiD9oYeYuAFVHFZgSpwej74KP3ofCR",
  "key29": "67owzKXDH9mHMtW9Yx1sq92m9oMrj58tRFK4txsQtfLAoNcXYeF9oTRst6Mdx7PdW5AyLAEWvGPeGuR7xj34WvsL",
  "key30": "3EtJ9CdkQmq7WdpEEWcE8kr4fphCDf8hGi11rwCkhvKS2JPZScgJyMhCUebLB14boVDTGnNEQEYP5d3JzXvyqLE3",
  "key31": "3VEntCVBB3zEZFxVa45fnzp2n5WX3HxwqqjwtsDzE4UyekruahF1g2n3sBKhTx3ftKKFaG9wV3E6Yov1ScCEDjBr",
  "key32": "5xarpAFkksefaM8aXKw9Nw3ywjrFa7H2S23Vr2whJEWohU3jtApnxEeoPioJSRKhdRYU3CCb1jAxa18RonVWq65q",
  "key33": "65pzUq36qEvA2LcaR3tbyPrzfTiMhcHtGa4VMfdjLi1bzCNXsNtP1EZRcjCW6VBRyeJrdtAky21ygcdXX5pvu7Uk",
  "key34": "4iA5RSzUnCCXBY8R3j9iug5cCa68msyqjjQgqxtP433p9bkYHQ6DNhXUm4SuqBgaSxziXYeee1VJVx7aHDuXoJRp",
  "key35": "3G1vNxXtaKbHMyfeTFQpV6v41f7kp7NCVtXoxsRkc6U3RrJgJtLRt9Fbiqp4hpoWrCkHywmpkSvL68ngAPvx3qhw"
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
