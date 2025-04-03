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
    "5wfYThQTW4mXdJjPHLU5DLR8V7weBw99kjnFkXPHFDgWBgx181NHKLTVGfhzc9hGDgM3AFKMa7zCVjRmzbBZoAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63KeKzQgmthvsmyCe3L9e8TzkUVf6igQoAopzUUE4yznm32KTueXySbhih3TS3QDUKmC5wxJoTZY9BnjRtLxwMtk",
  "key1": "3ioVSf8WDkgvb61S7h4mhDLWSbytNHLHqeickGvpecCrEviJxbiVd5DDMoVMbNSN13SVqxNx6C2aBAQhfQ9TP8j9",
  "key2": "3o9DBoickFV7TFtXCTyjx19FQJs7afGaBfZjbWKqtp4gnmH5ZA5De28LGoos1Dijxz4T62nNPCSSr42N1PxX9kZ6",
  "key3": "5LiV7AbG76wCAYrWCe8EBvm83T7SLRTbp2MyW73mq3U7KoCkv68zF79nw4tptcty6wdeNCEwVzKJJEyx48udsfBq",
  "key4": "5sgEq3jGUfvSy6zvHsGoMex1g83Thezf9TWviCHgfTTm7yHM4Pm1URFCqDD8cenRKmYUSev3tPicjcSzWn3TjWzr",
  "key5": "2j5khs75AJ6T8SfBiUmuUHoineiZuDd3BGdQhykCmQDMbLnMxKTYLwkmTA18DWE19mKRamQLrpHmvPSJemZbabfr",
  "key6": "5DrornhWWH5JoUtqMthF22SGdpzgP38kD4NmSetnGPkcnc1Yg8nkB6r5Au25vnEgdjJNmsMYWYsuhdF5aqDSgTYW",
  "key7": "C5SB39RTabkVSVQW9L66GHUQKMmrAYQfB7bhU7WPBBhxC6ecdiH5LZHX44Y337aiAxfazqoTVsfFdEi7oZA1niW",
  "key8": "4LfHq1MS68bBukS6yCyryuAHpahWJW5mn5xBTs7CRkDmrZJikcgZTCLCuiwjmgB3z4NU1j982RZN63qTp6p4WVxm",
  "key9": "2VeyeQHH9UoGgNNhUiuNCLHo734BStmXiH2kZnnKq3yNb7pnrtyqbF2EVQHeHPpjZ5T28PqdkkX2udgzYwGh3gLT",
  "key10": "4XZHK5XbZ9mS19tXZSz5bsGnyPbT9BGmmW1GQSnARmtQudGDXi96nYZR6Lcv9UED8GZzPqDzBKnUbLnUNzrQR5wT",
  "key11": "AMYHM73cfbKbA1ms1py9qSeGKskcdCJFjSyo3fkL7DoFi4p1EVEccstWeyzMGqWzSRUAcjgFHvykqV1kq3d4cid",
  "key12": "5jmr25Y5VjPYsV2A1Nq5q5fry5g497t4qFiQoBZF2hiD2JMQ5HLYEsfe8bfKAuBQX4eEkNNkzhJwCEYSugiRKKWL",
  "key13": "SQXmMRqSw4y4tBYUG8HjigU5z37yNBACDtezbZSa6Bj3c5i1A3W7v9jtuAD9A5wzA6LF5pDCfSo8rR6vKtpfCDG",
  "key14": "3EVXUfeUMozbmsGi4vrvGBbAa2VWJ49td6iVvKUCMaCFytE8GSG3A44v6bTW4SYvV1bcWt1PmVrdzy3PsnBvcJqR",
  "key15": "2S1mXkZus7QV6ZcEuGhURfoVr9D9xMLajHFGGLp26Bb4cxkBTwPmcBdxkuun7UsG7RxXQVo9PiZRncrHoEKN1ixL",
  "key16": "53xhne2eE5Pyofh3GcTPnmVQWjEB9Ufp8h7e3NVFvhyS5qBKaE3bPkinhcX1TLFvqVLMnde2eizVnQxzwCbXai3w",
  "key17": "5w1zbmCHS6DDiCbuyjYgjxZZKmr3sFKCHuR3EbGASvg5WZpSR8LYAchmoJxCPZHVWENqbfpqxmJJJz14gp9wKAev",
  "key18": "4GXiPyQzkFiQPtm4bEYEf4CqCjtuamwYVmX9BMU81B7PtCbdWqtvkFdxzoLsGdt9i39CPaYeX7QHcVcGTby3DHVp",
  "key19": "57R8qy4joG34iaJavuedz46mET7g4ijAjwDJRsYtJiWyX2ZbqWd6XTnxyhbWxWo5wvAxCQ9yCguvgmpdZ5eu6nav",
  "key20": "5Z47mi2UVwtMtQ6Bu6d794rTFGBTraXBFQYiCDfQ6evQa2X1EcAoGvbMLh6ZVw5VQXVFy6peEzEtuZRvK1a2nTbQ",
  "key21": "DPRqLxeSe87mLmW5PqMWQXZ466mTGss93KLGNKpNERCrvHnZ9wtjWNn12v6rfz1yHeesFuQxWDGyGLk2Ktou3vs",
  "key22": "8FHrErsZtj57spKsDhRmHYjdv14LqLfrGN4jtQhQaMZ49xTr2pku6DB9aCHvGLJJ5SxdUc8WEyfEdU8qQm8VcHW",
  "key23": "3BFYjtnmoJRhr29Jz9Uq3ZdQLxMToQv6ru2ftuS7vKxURV3wL6xnadiFS779kZNUngYXqGMAVimS7xkTPJy6THMP",
  "key24": "43PJncjPPSAyo5KcsGZ4C4vcGtyT86ba7cSckqCxbLm5eyXruYyMkv6VRFok9NYczMnndDawARUmTgiC3fzQ1L3Z",
  "key25": "64NMzTu4nDo3148sddLtVgMsr1TbABQiCrnLuJifMiSPehqsGPMPybiWAseqz4CszUavCxKHt5Cei7BwGRpCPiqu",
  "key26": "2bo9rkxMcsYtnKUwD93FcfB4jzmGCYtYbeDjTprtQ7Eka5PL97MufgtUbgN9BpX1CLvPrDgseqEshHM4fbwRzEke",
  "key27": "5YTKbsdoC2n2NXcxqDYi8q3bGLXsHwGu56HHaXewbTr1piNWnk56CBBqCdhytmJxbyfLoJoT8xrTUCKqypJw3BTN",
  "key28": "oVEcvWpmUYCkBSXi7JUpVtyboaqGoiUTFTTTR5mCUCWUJtKZqiJqQKMWvwVvWmZShfgtjZLi7iyRFqu5mk2nzeL",
  "key29": "3SLkT13qJqX6KxJJJD6h7szZXeoEJEDdXQKP6c2jXNruDqPB8FxktKtfCx8WNnQxprWbB49WQFPTNni7XGt27XQU",
  "key30": "5bkPJwpPGhs5GTwY5NUDdoJpzSr2a8a8bXW23XjrPQFUAyUfHCWhCdWSqBCYF3pyU11HYQ2FcV3oiqZSZ5ahgXpH",
  "key31": "2uf2Vp1QCbhN4Z5Q7Sik7KCrKPv68L1wKTXm8qz8vNpDvcRYDQLMPrDn9x86SNbLHWWyQpaTt26Tj2qKxryy2mtX",
  "key32": "3kPrrAe316fqvgcvwZyTB9HbmhpgifkcPU4jM13Eo2J3SbkjHp1XGZ7CfhoSAn1pNWy3Z3bR8bvvzhcE55yRrfrC",
  "key33": "FXWtPiPVrkQnZXHfseQ7ZHuDcmfs7Xz2hPtiAhDQvf6A9a5FGAJkm5fctTSrFnVv6NAPY8U7FsBcoEJYQcXWzm8",
  "key34": "3cVjmJEJQDWfLib1BTegp3w1Y8eNCgARajRGW5UND5xRE1vCWmsSpFSMatGnont6VKSFsoTaJgd4dBTP83qn2MT3",
  "key35": "1n1J3ZNfMpafLeGjtUyR8DCLVPpKTG3k1pyQoK1xGu6CoxRXC8wcFjKS5u7Y4htRCteqbgsqCWYRpoJfFfHV2Wp",
  "key36": "239e1sbRSqRGwRjTkU56mFqEso7DYQS8tdJTUQnQNfNUKv149Ly1BoBHeaygoop8wRFfzPFvhcRTdu2UVPUoBkpK",
  "key37": "3Jpf5FHPVVTiGqggxtmoKnsn5KmxkmDo9iuJiHrHV4Xi7jDZDDopb6Wx3Hxbx6sSeJeYoHF1X7nSEPWyjUYm84ia",
  "key38": "5YDpzpcADLGkZveLd9PWwoLbiAa52VfAU9cFBoe8z9kLxsWkntLeoeNDrKgCce6XGjgdxVzYaC31ad1Pj33RkjLU",
  "key39": "2GHLFD4uWkaeV1JrryRJBFsg8yPMhWPEhHX1DN7gxvW3kcJV29subf4sSVhZuEPNtb89RcqQ8AYChgJLfrBpHgiA"
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
