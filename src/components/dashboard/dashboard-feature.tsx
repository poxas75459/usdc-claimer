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
    "3Wu8567KxBzxCuJJbRQLzE2gMPiWf2fykEcGqPzy7xTnUfxKnTefWjqPKUsBGA8qTqnyzmLZczQVYLELKiHB6gHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K7r5aSSpjkbCPcR5b7LLLirFk1aYG7m6P87VP9pBTgeKMvQky5VGfrqse6bYexrwgoKHVitEPHASvrF1fE4BhNf",
  "key1": "4JhUgPUZuSxik8AT4YQc3z8j8of381GeWjG99Np4ucpD33GBqwDk6ewJJvUcJJHaGSSZfrb3EKNjA1eBJckx6WMN",
  "key2": "bt5t5fWKkzoqzPTKSZ8EhdL1UQUGKAeKJBCM7kiyANMTjbUnv1iiexy5ZvW7adncWT1gpCp2TwsyaUudpSD5wXq",
  "key3": "24uCBdkGoa8FuBxYZgTNiwaEyKdnL9uRFbXs92JUQhzSnrB1QPsFvY7VxR2a7bzYNTBv8RFim9NQ1YHtQkpEaV8f",
  "key4": "432xqZUU3stWzR7VayyhCpiV6jfKk3EuMoLdZcxGY2FTL2DWYTmrw3Lg5dTcLU6db6wvnKbjKLAS6erbXk5vt9Mg",
  "key5": "4PgzCSaTxATfxiRPsPVaSK1HPvXSKakMLKjhvRjNF5huuHXW6AwWNTziA2JfrgJhjWk9nAHVWn67U6kDCEJR7PRa",
  "key6": "362YqGTe8ckbEBznnM7fF7BUVA65rzXWkD2Ug4P1kqBULfKC4SnFKL6RBniLApLtqmy7QKjbYgf7DH8MnTMnF3yw",
  "key7": "3y69KKZAcZXG4K6GBbEui254HZAtxmBG957niFnSXYi2cNteHpAt2iYiuNhv9hCuWoS5CgETiCAJWaGYj1h3a7xY",
  "key8": "2paUCrHQbnpU7WETD7TAnsK8UyVLVJVFsiJeFmYJPa24aJNUBfVue3VCnyjJz6mavgcCJqJ8BGVe6UB6951pNoq6",
  "key9": "4qLwXtmSncuu5e65bXrpvy37yBEfLLy6srxmaUJYUCWm2pMCFyhkGRmiwi1nx8PAYB1synfBcM8KPsSp5kswena2",
  "key10": "5vJnuyMdvEk6yzfrotyLjD43uf3NwbRWeQjMuksqBjv91cwMsFnWk5mnrjrkGsvyTFUdbajcwrLWqcowmNaUpSPW",
  "key11": "22Yw61dkNa48wgwVGT1NcJUoQx1ZM2yU9zzTwwyc7NRdRiDfDMkDwhA3EzWBAuSGxuMdss6ceEEucQ3MzDH7TmVx",
  "key12": "nZxLrbarW6tovf6Fua6yMVTFx5htZBHP4c6cuCBYz1oXWdn8q1VJdCBXfoSZRdxviqQvXUbQNUsqa9W7b98a89t",
  "key13": "5NKrRkdyHxi7YE5oBVhHGhEnTRcn8PHeai3Z1AvnC2fEkpaYvqrbHAXy5WBkoZCDRBobpXV4ifaVX1MxKsEKfK9f",
  "key14": "3maNSPhBvs5ywBzL8WtcHx1kqngfPTiL49GRgSAVNC353Rbxt56u7Z2HAkudUpxay5Qj3hsQ2rTYXVdUpDHGb3qn",
  "key15": "4oBwMQj7fNK3NV5RyrVtg3QNUcbpK54F34Qi5Gd3zMw7pLR3JAP6qaeQXByWx6oECrHeh9Y9VpvtKzj5tLN979uJ",
  "key16": "2AQ73GXy4GrLb67rgQ3tH7Zrgef681E5Qom7tnyuQFNntY498EJoUiNxfuWHFQbGSyABFkjCQvzbjNRCp812pA8M",
  "key17": "2jX8JE7gxfhg6b7KkYCiij5C2LTm3kcZWUBc75TiouDQkUv8xM1pLTVSCwJYnXotx7pqHSc2HVeqbmU8ZbXL3Vkk",
  "key18": "2TqwtoggRcBLvEFV2kHiuSKWnWuGF6ziiVto5Grn91XfeMBafSTuB8uBTeFbDM6h7kVFNPppGSceiCSjk8uHiwmn",
  "key19": "62kcgdahyTTDQnEVntx2JVnWDGVsoqjt7TgJkS7Fy8Lz7xQnnZo3EreTiqkNnFdDRHTsBVMu4WMkdZ1QAEoHBMq2",
  "key20": "2QH8PM6CQC2YA7AVuhmcDfkxHHEvNFQP6GdCa762tfKwGFqjorwGL6yRoCyfFHFbKR1H4Auz3rPwen7Pw5WnctZQ",
  "key21": "2F744rQMv16bU82iVTkXDGKUYxGUw2f29Dgu23aMdPhSGTHUtRFDuouEbnvc6hRtddDKn12wJTWkH1n27Y2APt9n",
  "key22": "35nfLFfVSvZ6HaktZHGGT1RPFHtz2YdVjz3TcptFw43cpvAJATRZu6mv6r6uTndmNQTt2YZaepEAK1fPdFF4Xt7f",
  "key23": "cdiunbryqmUKKzhbzNtq6Tp7HBzqwroS8Z8MMLbdn1FUiNiAZZ6F7CaYZiwFDh3avb3PVUQJBmP9tUHatxe9we2",
  "key24": "5yyFbXo9zHKx3jsjcuMYWfQxra8LzNZ7sdMX2ppoAoxMBKKUDPA9drAtA8PAJnjhLDMZg8E55RZV7QjxXxL4v3RA",
  "key25": "28kX5hN3XwLhyQT7zdMtBskPD27rCbTSkAn1AnvmpGV7gQaCp5C1ZF1qU6zG2EEPeo9nBT6YGj977nKi379A3Kiz",
  "key26": "3iUo68VrkupLw7MHabkwDDHAppCXRCEMjyhrRGVBxCUUYuaMstmFZgvF91o8dsZfJL9K971r8pU5zUvyMzXBWnuV",
  "key27": "4nmKpD9npLG8a2e4F4VfNaDcTjigPP2eDwE4dSjQGm65bG5HAfrL78S8A3MT5AAxPwoskG1wcur1esgcVZDYBDkQ",
  "key28": "2VtRCVLHH1PyWF4C5LegovF3FzZaeHWbeTTuiThWFGPJabcM6XebD3TW5hQ6A7VajTxQCgqZCAVEJWAtKFLzg9z2",
  "key29": "UDi5HBFjqNr29zpg7HZjNvVp9SLm9zc5VECJ3mooZxg3q6K2FTyaB8Kzztyyn6ZyUDTSyCD6Re6MJKuVmgP5HMk",
  "key30": "4yDsCHhtCgQjsG5sWJMtc9D5Y7v3EoXYsLSPjfysaPxeGJvfEKKaompHBn9UFhiSdGWwKafsZKUFvEC1qwrc61wD",
  "key31": "2WzXHXSfmu2fKUJurXUPbQx1kbGL7om2eEkrKZuNsDs4vV5EkRnDDEcJyjKWpjbQMB4Ex9ARbhnULi7X1xJVmNZH",
  "key32": "qx1srPAMJizwLJ7PMSVRrVRx93wtdmVyBrcePiwPMerBp2NZWzFZm628oshqv8LKNb3THf3orzyBMWWQMmbbKZW",
  "key33": "3VzsP2myquyS14vDjfLm1tmZke8zPQwU33w1BZvXrJ5Bm86WmZBbjQFrwx18wdMXqgdEuSCctZbABBGMXdtY34p8",
  "key34": "5G64RcxB4d3bajXpkVqVU5cuqaoA8si3qjfdiA2K489g3WjHHFUofkFFms22op8QKisRYh5VhMUfdSzpDG3RxyEK",
  "key35": "5B5NGg3M876GfkusS56MPjX5rZhFpvzvreAW8KBJGvM84R5zjY44sXyvPX7KPnn7G3TbkeKZkrPG2mEZpthC19nM",
  "key36": "3VJhdAG69792HQuXHHty9fU6To7fiDEwrUWzEeqyXX8477uUxjpuEabGQQc6PRxVpJVeikyoRpzvXKXwGC81nxAD",
  "key37": "3G5YSAXEKGghjH5KsTHoXKXJGkzNhFfDrdo2RJAtHsotQZmDYAsGzk91DcYdFXoTkAR159N8RqW91rsGcJsskx16",
  "key38": "3F74pUkVTsqecqAPJx68dET2tYmaUzzcjHjz39fbZztRkpWxksrJ5rr4dCskSQmBr9sSqWTCdfRD7vjKJVcHyG6e",
  "key39": "3UctDCmxzobmT5xb3yiPSqq5n8ZTDuBszZfZWmD9SNSuzfVhErCzh4QVoUmHYyEDPLK7mciisgYgdYE3Z56YCzdD",
  "key40": "2WoQmwRmB1pfcRUKP8tV2LAWquohPwGgN2DHxdNtRf6RCQvbStoGQNPernD2UBApfRvsMrzJsa8ME93iHAsELGSn",
  "key41": "5Gy38s3JzZWVgpS7vf2QfVTRehvAhFN9WoRfk24E2pT6PPMvk73awECHc2zaVACaqV5imPtRi3xtsCr6fP9nmGyY",
  "key42": "3DHATVfiaf2K9gTQTJ5Me5x2JLA3RXQ1f1TMiYvmunFZKMXMFueFJHDJsssPWSeUobQA1QeTk6JVKT7uUcdXtffm",
  "key43": "51UvqYxrkWLvAg28qjngodAtm1LaBDf3A8YKQJ5J9RrQ6UkC4wPfuQQbDfmBsJRQQXA7Ax4tSfHpNbikQk9XATc6",
  "key44": "3qi6EF1d4HZCQGrttaLEyj2J8foGcPovfUwTKcg1TyYxJeCLoaBFEU6FCnaKe5GdqJvW2ak4g2hW5j4ktXPJ1ir7",
  "key45": "SYFz2f4sgvBwcA2otxGWBZL35yk7dYZfmpmatDtFYwLNTotjUcDfRj8bVL2RGZiVrBvpdL7w4Rkia4uBYjX7nzs",
  "key46": "4kP6m5RgsNfoCniJ1ycWNs978yzCc96ThJc5qAnprz4husitRYd7dkgir8K9q1xYgUPZkGN5sfoWs2A8Cxn7jrpu",
  "key47": "3o1VhyberydDC5igWz4sVekC5KPdareKteuCutJUQFaxgxTZhvieQj2LQtr2PkBvNhQKgc4Kn2RUToZdi6kdyz6U",
  "key48": "5BRFSkvAr2j6gCiAVkaJ5Nf4gKMcXmp6oTMnSUTHYS9G4qoF3qLsLpVSoQZQ5h5SoPVE9RSiU1qQE8E818aXmr56"
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
