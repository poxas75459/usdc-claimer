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
    "2MiPr8KfewvJsNoWKcZnipPNGkE7Tqzsam4B59yQYtzrwASBo37RRMCcWRYhVEXBZEtKybHbBU3yypMHt9yHZ6CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5UnyQy8kifwkD62abp72nDegbbE41opETfP5fefqgMqya6FQMdcyakWF8Sn6yU43ShaR3Ahi9mbiGez9by1QDc",
  "key1": "5zsdNwyAizZitgfWhZrg3BPBgbgtNbzof7J9vdE3JkCxWeEykB9vrAjZjw5v4iakGgpbMWbCKEQxXVLGDdeSqF4c",
  "key2": "5t7dFcKUzAhtRAStFwjRcGDDinykxPu2LXFWtjeY86c47WtgYMctANPYEmX5yV9pUyuq2RGwQuv1HuF8QJ1By3dW",
  "key3": "25eCwJcLz5pSq7Ew3yMeutMoVoqqxsYj7S8Q43wKtdJRJakvUAYuUpPs7to8uY9d4F6Rcx3MUYn1AuCmWze6b1rx",
  "key4": "22FA8TJNFZQXK7FNzPGU7NnUXfUKF8h7HSjFH49HzQVZp2uSCdfjMNUJiRLzCqc5QgaE5FPfXJSktyUZVFJVnPHi",
  "key5": "4ua95Lkr4FNz3f819bh1vAhqo9YD9LQDhgViEvyce5AZn9QNNF8fBMrPh2YJVSVuyyhZVHUYbpsK4VVhecA62XF9",
  "key6": "514BiPXdj3fuTHy34dQSYmUJakmTXn7XaToqqFXweD62yQeX3kgj7HeJcRLCAZqVHna481yMy9EnU5MVU634jxRi",
  "key7": "5QzUbmuB8VMnSXcKHQS7hwJHYE3UF93TcLXdUudJNXYM6k8EVkiojRMcy3x4bBgsEXQQaR3AbmD1NYY7ahzVbKYP",
  "key8": "2mZnQy25moLhUhWiHYQnVTHh87izDaarj5hh1fuBwKxLHgoPuinZAbFmAVB1BWaYBn39nK9Eu2Y3ouchezQzUxHd",
  "key9": "35xbBYAyt2u86CNCqC6fJo5dGfPdFZDm8tUpoPpuotN9QBGNF3cHrNTQePdCqRYPGrEbt3JeH7CAti3sYH5bgaP8",
  "key10": "pPeisBteCwS8ELBFgCC3BZwSs626NHFomirVGnnrtvHbhs7JffutEnoNgSKGsLHPwEGuthoCQPuykBzNPieJMup",
  "key11": "5PMoCkteKuRibFv8kg246X6fRv859cmFWfbtPknvFMtwTPTmnwsDkAtZzWakfKJcP62ish57TAZYQvnWpqpVGx7w",
  "key12": "3a5LqqHQz9EAG9f2enKaRdb4DwCRPmRA4o2doUokWCrHRjFpQV1JBjGzJegtxv3PCMmjNw4tDAwjDovDDRxJ4ZY2",
  "key13": "5G2i3bMuJCCPLk6GX5XpnWBJUsaDygS7BxY4xEqjTTNPzfLEEDp8xkzubh2T6bosuWzwBLAVfjA1biE6YjzfFVUQ",
  "key14": "2BSV4dyUZqcGbAmAghcZfBaNRseKNZhivkTY8Lofr84ZHFxJnHTKNu5RnGtVMPn2Y2Qkq9pCoLBiGYDepwQU8WAZ",
  "key15": "5UXEyEPz6miaZnHmp4jJWvjKFjd29DrJCLkJ5fqsUtAg3tSnNVuNEZTkcnP4E4H5pPQ5FWfay2K1tcETGP2kvHGN",
  "key16": "DKVPLg6BiVPbPrPhjk5f6gkfp5yqxexGw3Au86r9bnNLgiXkU1qCa47Hd1aBtf3VaH9ajQSbcif1uxEZP2CqaAr",
  "key17": "4VXXrbfvHngtdxDa6ECSm6Xz97k3pwfu5zg3wYFFA8k8TMQAiGhvuFmsKQQ5Pbppqo29F33QDtbgdn2rtSqoK7i9",
  "key18": "3saptRmhdxENndx1wigHVmgpj46uSpzEd65VxQwpDUfsB5ctkaVGwanqxsCgLnz5eYGNE5d6hb6K5X8T33Gd1nkH",
  "key19": "4Qo5viGiA2X86Hvok1kkHwRhgX164jyQSWp9AAEtd4scvZsC1rdBM2DvRw6bf3nUPzJGF2gTaRPjt7sfhu7nJUy3",
  "key20": "4eHZDz7dAgjmMdJsmgxGZngHy2wp3oHw2kcxbT5qqGWMUzWohSupkkYqg5WxdXagaQYrDHM8xYWSjcjXx4KSrJuX",
  "key21": "4YKL2yFw9W9dVWkgYdsjMGZXYid1gF8ptNKDsV99JJuWqi6KpPZThcgvD1u45NSVNhGokiuPWxJvemBv6FxnoRma",
  "key22": "2dzNASJpna5S9625GZXV4otb9c2j6maKthrFYjL53vQyMnXLjVuNhxwenunMM3e3JrStW5impAFLj7zPZNttbd8a",
  "key23": "4X36H1R9kHPipd1uQ65Dur3t4sxyyzK2wYejKNmGBHQhCSWQ3D1Pp5CFhiUH3zGBShu7zyHgnxQwN6iBEVPk6Qri",
  "key24": "5QmfmUfC5mmSMffAdtRjnwraNFWkw5khdPCpgU5Rt9ABRoSKi9Z2VauGAdS3ox4M1s8FoqVLzT1JQVtrYfjqhzY6",
  "key25": "4cwgW72FpJtN41pZLtJKxtewEon8TrToS1mmC4iBf6nmpuUPXUN86dS5wk5NJ6QT6rdvmgU9Qq7FvNjfKvQ3g65V",
  "key26": "HAmW3A26ymob6WsvhGETpXZjK47i9qQmBMPFrtiqvsDiEu3pthitoYdCn3N5dFu34anv4kChhqCTTtrpX8QFoW9",
  "key27": "2sJgpTiAbsq1nCJfSEyV3Be4hhYMuk4L3VNGQnbUFwZtso92eMBCdVe9m5Jag6ioVR4kvTARaSWUTyAgBjvAYCsG",
  "key28": "4rBSkx7Ao58WKrCxy1vyu9N7hamwgYH3Vy5SqPZ84LysKVXSE6ATSBbGeu1kibRM5r8ihJacfdLbXtCim3QPAE29",
  "key29": "KPx4Ld4RmJ9nz854PZC8BhdWFfw91MbQsVmmAFbGPmm8umq2XFxbcL4phwnVR4VWttACy8BxVkGNi8TTWa9MUmV",
  "key30": "Y6nT4Y3RReCqTtMj9SyFBS5V5Vwsxd8AdkFawTzd6KyQJQpTGYon48rR7ZxJcWZtN74GHetFNkdk7kMRoSaapMg",
  "key31": "3ZpHS82qPXebog8bWcRBFmsY6DRSxr2BtygTfjmo9Vao9c9kmaJFbxsotF75MX91mEj72RizBy8d8bGZZ8tDAraS",
  "key32": "2LN3pEATeLP9HvH63x2oNwUESRTdYFGT7yHxL2Bgf98DkW2d13Lj5YD9zP2YSvTPPaDGR3uo4awVkzmSoLkXR5zo",
  "key33": "3dGgyo6cJ2635SzfJV8hFBrLapDeneYtFgrHh7ywhR1qvDHUWMvL8n3rDNjvuL4uustr84vZsNzEpYMS27emQsLY",
  "key34": "4t2YyNyDoZcRDNhkTHBBnVdC9retFL8c6rUczLHQXvrBDhBFzH2x1pR5CXCKaQZBui8kiNAHJ26gUvD7iu8sdrQJ",
  "key35": "3CEnbsMWEhHHWofXwhe9n84hfx9CfDV4X5MELKzdA1aPDc8NL1UZNU9WPBfYTyFaim3HGWXzcDSAMxdvzq92aNQN",
  "key36": "39jyVXniRtQSiVvq37prgfwN6ZijWvSczxEQ8qAtnsxjnbs96ZRT2dhZWsZ1nEtbhXAPtfnNSh7AemMqcj3fFMir",
  "key37": "EXnC3DiZMP4LPQMpYwDwpQYZJfka3UScMmyNs5QybuiXEjBqLU7v7ZHVCdFBNRHw1m4ihK6VdzT3zSAQp5WVE2S",
  "key38": "2XviKNShUe8xndVZDJk4g3bCZmqbZga4u5ig7G6dkutegSqp27uUjdr7PVLEJi95iQkvNyVZA2zT3tsQB1U6FtQb",
  "key39": "nK4SiB56LAiSu4KyDLWhaZyEudC59nVkK3PekbEn1aSxRNdJofg6m8pFtLkQK7ZzEG7fi7ooYBcYKFhzP8eLATK"
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
