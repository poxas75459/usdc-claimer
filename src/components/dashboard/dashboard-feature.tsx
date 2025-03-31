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
    "d9XdRf2oaVe58ZxcwSvERj7dVxTkcS9Qq9FATdtMZLk5CR9xXZbb1JTf5ygEy24p4ccFYuukhVZYpFsRpa8m5SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pwiVsmJBr3j8jedSXo8z8nNuw5KFZHVGpGiwdxFxvkHgd2TkJL4pU5rkdNNkPYSDmYxg2mNrxWmTocc4zJPsvVx",
  "key1": "3rjWB1xqaappaTAK85GnaW6VostryNM2PnSBXe64z2Ha3VsRCNFQdrY5YPkRoajwjMM37EGGuv81YmwJuyC3QDXx",
  "key2": "3xfYUgNZqjSjEeBZV2D349PRbfhZAVX8bdAwfcFjL9Yvic2n8aKh3aKumxx4Qh22u2yxkELEGgqeYBeAfJUftFRy",
  "key3": "2arGmvKgdi7PUuUJJUX4RjxttkwAzJ31rYKPEEyBHLz8i2HnizditdkeL2CaYtbzVKNFq7b5GeS6xSkDkyrmQZMb",
  "key4": "2qDBJBJQVj8gpuhR3HqjFPby3j9U7zUTN6irb8mmkxphtMPCxSf2cBR4eRoESR7FDgyUhX18EoHJtghTTwAJHvJ4",
  "key5": "5RHNGQZmZ2Jy1Djk3MsTqT6LnWZyrVFkNwprr4MmXrcaKCEnfhMVxDJWR9EKd9L6y5ADzTXkzAeJWZqKN6EBwGuq",
  "key6": "2QRaRU188cXj6iBtdgWjyKhZYo2g1C36zJLs7W2SvaYTfSrAHA5XWjm32aNtD1Cr1yt3AYLLc8hWWPR1wX3ssPsd",
  "key7": "2CWSQC6V7pyuBRcNDhkDtDtnnLpGmTcUQfnrPKHWrxbxEQsz8CQ5nhCdgqR1nqMEb4Y91Gdhyo61CPaX1bMV3Bsb",
  "key8": "MbJaiCvNzBkhYWBHyEZsed6xQv5jA95yv1AsakT3kEkphHvUHCuuAqhsUV47M4FNbUSnVhLG3wsFHUAGnh7pAgs",
  "key9": "3zLBb6Vb9BS4FZYvtpxysQRxubr4q6PD32VS9dLF2G1kfKQUeZtVi4cHteTdCY7YKzcjrooUBRzqsPiTLkqiSd5",
  "key10": "fp1VrmmTMuGKCx1MxqByAs1MipPWXfRyzQGbXv54ma5CCJ9G1DQ4uhimfRiEpr6Z1ZMpWb2QE8Vdcix1YUa6qHg",
  "key11": "4eesDnH7BR1fFW8u6WSZZ6FHaMQVyQEg7BCqvL55d7VffLqDbmEorXhrn5EiMXKupqc8MQkP14A3S7R5db9FWC3G",
  "key12": "2DTKhgNZPozmoK8sVQqVJ4x9ZpeTqHgQA2kZkp9XZrYZM4XbLwSQFuY1iDXRgoWA7urnaj64DJrUpsRnQJw5FtfV",
  "key13": "FvcJDBMSVoVqhZu7dGcfEEnfsn9gGzAn6SuemmxfVg4sTjvhFduJhvrYzzP2aT2x4cCozj7ubzc2XJ9YxTvt2qE",
  "key14": "3GmV3UmEWejundCNnJckZTygNzFZdWbHdtiJmfZqh1hgDoi4zG4Sjpc9YHoqTMm6dS6feNQgvaKsary3TFxyrXF6",
  "key15": "2gZF9NjxApxtCJ43qvkZgMfvgy4eP12D6JBodXEVyJASE7wicL6u4T4k9fzZwuEkb6eDubuq1TAGvc2gp3npTPCe",
  "key16": "2P6M6LeoaACPDFUsaJHn2MobftmvSRyRs6WUUW7gFqrASuwTk13yc9FNXY3AUjuAVh3R9eaWFWXQxQScQWbY5nVC",
  "key17": "2kXD8fYk8vs56yqCoWEQ9w87sSvFSttPWU9uDRQrQHqsfb8Bm7LeTJK9Cw6BefeDNe35pJHHKUymkrsC4HRxbYCh",
  "key18": "3n5Z9URwKQcbwqbzD1ZbEPd7abcSu6wzRbZsy4dfsftAcg87BYgLPZyq2Pfcgt8yXuiJBLyjnGggtxYzEHZ5i7f7",
  "key19": "5ArDQCPWD8qCwwrAbBKUhYGNkmFKfd3is2pRpiJ7oBHXG2aUhNsyG4xCZLQDWnX8WFXaK8U6n4T8xsHdPWW8ZcXp",
  "key20": "3JjdvzBLsZQgHjr6ELeNxLnVGT82AhGxAyjLxZxVx6exdDrTGXziu1tz5gKX5DnjHPKnzU8ty6mYphjpyXVNizUS",
  "key21": "5nnqeZTcQomstRb8gCTMzdfgEtfyaRDavmPA8JkD1AV2YyTUHX8Ky2WwfYYPw4vE9QsvjTrZKkqrPX2DDmPKkYmm",
  "key22": "5GstAqxoRQbyL9T487zbCgzHfA6koiGnPtSmACTsdczYEbEQoHWbimALzdMKd9NUrBMh693ArH8ta9VZZ2rsB63P",
  "key23": "xSpfChPkuqipifJizs6z2ovtG7nTnpznxsaW6GcCChjSwmEDAnYR6Xrd1eboZ5QQhStJtKsq8tjd7vXDhRWtERz",
  "key24": "2zBA469Z9V8dTZ1AgfsYBfpcsMckQQdPqVeNxRnyH51CmRHFreu2yuRSAJbdTM8cwKQHuH5i6KqF5jxwM1XXJbaR",
  "key25": "55BvWLzjzLmaajyRGpQ2P8Do4PHmTrhgoHBCaC4LBcanANft8ajC3Y2aE86PVQQPCYmrVqpTmmiZ1T56f1raeDs1",
  "key26": "5uSx15rK83QiYR9kDHb798bUw9KeTpUiK15GvXEVdN8MnWRXyDyZCUpTMCJz8vrfiqLdY2RrrVPjvmmh1aBTYLZ6",
  "key27": "5fP1cLGDgWtC8ujSBaeG1x8svqzQi7NYehMdv2mkwCpM16dPRW6qa35MNgaH3qXSiwvuihbFeDV6bPyj4PxKNWSS",
  "key28": "5SCEBNULc4iD835F4hcTbheWxo1fo5Koenv26ATs6dYm9UNpXwAgV3GxP1ZXN9XGu7EqgViMG98zUN4cGrfW8AsX",
  "key29": "4rknkEXSGkT7feqs7dcLttA6eN2ZukxhXyyfMKvc7HyLgTwQR9kB8VRf8vK89jqt2LtetqFKdXEQZCLFX7smRRjL",
  "key30": "5QepZHwN1PaoRFAWiLWrBgTTNt7eKhH5zWfQyCPD1cigfU8pM6qiSqiyhHHp2tPELTiUDbScZXoMUYqbPwc7oENa",
  "key31": "3P9deoPqqSpNWkHyhNfmfMRLk6CWk7Ft4mtp3uzVeuoNEqcFS676ByhcXLffL7cHPp5qniHi4EFRCzAcRa67yHsz",
  "key32": "2yQDNwjRLgyPqqTT3RcbBmfuUnK5tLKVrhNXfFohCT27nP9yFPHrqECVzSsMEvwSKuuK7bmnMrjEDUQWmrT9JDWY",
  "key33": "5CdgdTGzCaMVts8dqgh27DrMLEwwXSgTJQmvSmmWyzsfucvUF9Zy9j31MV14JsAvaKFi442Yai2UFvrSX7PQ1cws",
  "key34": "4p3dtCNVPxjJPAsD7yjWxjCMzkLJwoy8fWV8pZozKNMMbXwn1CM3iqE5dt3R81d4p7GuxEBDEmrALHkimr5boYzG",
  "key35": "MrgMHDCX7hZ7T8QzjtcgcbrNhhZTDpTSt9Pjc1PuDL7ZecM4trtWQyE13uLJDo3m45FpVk9S5wwdkY5DHmY53Wv",
  "key36": "5zQ9TBHTRCkXZ1aC3HYbuyQeQwwBTm9cbyjEinTpsEnVYvSUUT5M9ehLfak7S26KoyBAW9pAcKcxHtUvTZrAMdjg",
  "key37": "eapNeLn1RymZtejypEEPJFvkrkkgzNBRNuzUis44w8r5AXMqCHv7zJvWqGMYjAVTH3Dh2FMpk6dMQStAxa6B1v6",
  "key38": "ksb1ZowiB5uxHCxuCwdcLs1V3PxkEzJ15iRYXs3B6S4oQ7CrpnEVs3t9TM1eV1N84ECmBnzhjwhsZrbsj2zMwEu",
  "key39": "53UAmwRinFd1Y3up1dCoxb8wxvute7G1muiVd7zpEC2qaCFtECxLhHvp7GWxPSzTLjAMsSnc3poE5RMo7d1FDBCz",
  "key40": "ZM3NmTb6c9RcPbSKtoLX5nPDthdR6SHNHtkAWD5EXH1i6Wiz2EHcAqhw3SrKkWkyN6Pjxee7KZnsiJPUBUtWWu9",
  "key41": "3iU7ifiT7dGMGhf2hiAha5mwFgRMEJvn9HMtWFMctf3NraftyieRmCChSvGoET8Qym2nahfEfy8axZVYsspMHtRm",
  "key42": "2cWNG71kT4UAWuRqbccfScVy44Digi3J72gGkEpVRrGn37oi61H7QEtetHE9teFetMtt7HWaNmQYs6PVBe17r8Gp",
  "key43": "3JoahTnSmeTXmxhA4SjjbDR8BZvkngPAg1Q1hnNjC8BMPEz6YvrjemT1qSx2YkdHktWqFnzrEV9zprJotQGAU3Ky",
  "key44": "xKhubdLhjBYwmkvmLeCAZbbnCDUhJ1fJsqj8vWLQKkwXJHH3nHuGnpAPi5ZbnQv1EDq9oHDbay6r6VHmDz9WrEQ",
  "key45": "4wz6bg6WWHMJqzuYWf7ajQPo4eobRy2uUeUV4CKdeaQ2LWhBoDDjzDyBmcJkFQqsRzHsNxZFBgizfLe3pZx4Ln6z"
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
