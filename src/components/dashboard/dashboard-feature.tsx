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
    "F8PUmKgNbLx1HMKVdTe2fDgrsuNwzPJfg3oYmPgCYuf5AeBZNLksJKmWKg5Qgyi2noYtQoMok1eXE7vsemabXiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r9RsH9NPEV54ufkps2MGudie23dwxqv1nUxAAYnJoLiQXyp1NYeYyguHd45h17uYCsB2JLxVBCai47RgEnkq8Rv",
  "key1": "3CLLLR8zsmevPSnaTA9G5wDaD5RWcomftchr19F1Q8v3RrCT5Sjtd4BRbo3JPqGsLm65tCWraEa57SPALaQvRgqM",
  "key2": "2My9oxTjzN84jojqHbhTo8V5HjtrMfnMLwTNZR1qfHo55bL9qNqNcSw6LPPkH7e46Q1f9h9RhvaDPfnJfN4yQXfm",
  "key3": "4uEEdx6CCHBFQgzFJ2qa8Yqa7C8DVb25fT9BH4JPWQd1LojgmDa1NEUC2ED1u59f7Xb27rY19QFMDTa4mGeycYN",
  "key4": "5PzgFP3txB3VeRf8uDHyXeu1AeXv5wYsaAWh8b47P577s3xuPsFZcfZZWTr8Q1yBLtHwW1voHKmKWPdjphF275Wv",
  "key5": "3gWvdyktHA5Dith1FVejnczHtyTTEw5BgEXn8gf3gXJCzjASr1REjz6Abd46T3Ae5vWJsjcmwEhSVwsawBVYhU3n",
  "key6": "5CSrTowCyv8WbSSiGECpUYXAiJyNNC9aZ7ScjeiftX3BoHBjqXH4fZLqcwWzpjZpVpdvDJB2RBb9581XDwkWHfRX",
  "key7": "3attvfbXpxrRzcKzygXEMJgLgtx9trttaGuBR836dHqeKs6Xy2hdGYj3AGSFMoXRDDrRyTKgyFJvSwdqQMFYU8b4",
  "key8": "3D7SgPP4KDMszNfFFGP7oFPrpc1SpFSWhyg2duwbvDZJLntjpLcHx5izHfAFvPVQuR4qrXNR9N3jLgUn6i6cYd4A",
  "key9": "4aFrZTLyEZxyr3PxMmMBrT9Yc1njWrs5G97y7PTVZ7gcCiScbMKZGtwtehgEMZaBNUtvjkhczahEZGQCc4quPKS9",
  "key10": "3thafVeJ8cdtBGMyCRVozmQQXk6AWB5EPeyk5QJoDyTvHXvftutPjekJ6oUreY84EpU7UZg8P7BzjYQozXdPynVc",
  "key11": "2Z8xQaVVs4K5GHBtFTYuDoWFY5EfFdJGCjR4Ld8W17d4Hft3Uh3zfficNq71t18Hty622kicuJoEwWGW1jpkXxTy",
  "key12": "2JN8ueTvs37htbED56ewDn5uAkdcYSjpXPDX7vkJzeQeU8tK6ttjCZUeKkKAs5ppqKbJ3UidDhduduZAVQHgAB4P",
  "key13": "3nMPjEFifaMvoE9DumDKentbwe9q7Nuc7RfWL76y4ATKtQUWv8x6pQGJstPg1Pr3BE5BKuXgRSKkBiaXUoEtc7Jq",
  "key14": "4XA8xYmH4G1gPVXbRs2iwNDnu3nKoWKfxa6maz7qmVYiq7hTByeGjdav4JdPNuKFbw5gH2JgWTuJxzKJCshaPVnQ",
  "key15": "5ocU2MijGXCUJim6LRcwZFW8g9iCbnN6TWqzEePsQ7X2YLQmxhTNyS3WEMxBpLS4KHtaf5sXo3PTSijUiqLYvW6S",
  "key16": "4p3MwyCWLWyGyL3no7A1mpyyT3Rp86WmYyNysXqFFCg5qsALgpy12mWypx6hjfqj7xB1aLJiChYyYYpdganWJQy",
  "key17": "3rUow2et6V8ANmkU48YbAYHjpVrNyKpAVfsnhwz3GZrEjUTcXJibVWFDMXL8LjMKt8vWeLVUyV2NQvSqS7thpVc2",
  "key18": "28ah29jM84XuLKM1juDDTG5txMdCEtLgo8qqxbqi6Q8tj4vYxVoJWXCuAHWdL3ZrUBswdm5dRdA6dKaq47W1prnG",
  "key19": "4aN1zAfdNTGopFwa87KiAiRMNZkQZ7smKSf8bx9veXxRZDWqULQh55H6VchLqdhbiiwW9ygdqJWqNPRAqqN7Hp6f",
  "key20": "63XAARMCPDa2x1j7HCjY7XgWgpUQBBX7NsVeeG5zFnHJRJpkgAKhkKmW8LPCL2EzoUHKNNgVbpEcZnoQ5Nk9d5YL",
  "key21": "66Cp5FH51sXUc1CkM8LVjWrTJAsxKo22LdTiRH3owvfb4R3WaxrsR3TVJHPeQajuLe5gxpiGa7aueJLDq3LrHri7",
  "key22": "iAsvV9BJ1UkoGYLke15nv7QcyDH8LEXR2rpxVs2NxLwgmCtXFZNkBVmaxVndWcErJmq7GGzXrGJGh9vs5iECp8d",
  "key23": "2rzwFbjtn16oRgM32Mxe6evCozg4qgUVuDUgB1JhX3K57rrgTv1DXZVEkVUBQDgKTKntEbkCyEyxrvhFA19kAk73",
  "key24": "4Zbn893ATwfQ2bG2itQ1Y6rTJ2VoqnQbka8tm32vFhhcD7Uet3EdJRj946apBZP73m67SdRJw1Q83AsXz8JUq53D",
  "key25": "tRDaMyK6m8b74zvmN8tqdZj5VYBQjD7E1QsGyCoutvK8FbFLJdK8GYo2rJCCJsRAhHGoK1WPGgffgPFFLEWzFcR",
  "key26": "4sbjLDcAAYi79efKkMQrehJmFrp3dJCKaKPzcvGCXL67kqiacFuQ6Hw36A7LMacEKFdTnhTRpJxXpcKLoKTMJpvr",
  "key27": "66pCkuaKXbzkbW9pua1KoKbv5sycUDgVpDBDM3A9eiRQkYKdtFxvSUU3Wg9E7Fb1Y3UNpmnbyvUyAWnscctd7cvE",
  "key28": "55MypKcUpMNUywTMTnMRXEAhtYY6qAuPaYqF6mdrCN7Q7VF8qpSDNfLH8ekniEWwKwWXRpTZ8NpXDE4Q9WfR5NCC",
  "key29": "2Z1EoibBLRvVG8n9NtVU6KAhTLeyX2PccUeDXVbUx2P7Ni4vVT6axFMm7pUygRpr2dxuZt8bpheZvAoLqc71N1oH",
  "key30": "5fs1hoAnj464ZfFMZm8GECerL5y8ej7iskxrm8bTfdxburUHtgxTWRQ78VzQj67jHAsUF3NY8wfhGXbKNuHNzmmq",
  "key31": "2WmpGoYW8bJPuU3cPdaB18xBUvG3BkicWUKWAiVJmpibVzPXRoD9kZwSTh4JSsLYd4mAEZqWAe58xHf7Xw3QCjs8",
  "key32": "vYunYZ5r8cTXqBErVCHztXswUDLVZGkVRXE6uSFZpasjJTqSxZHKCfdQ4xVn5RrRHULscBetDw9nHHGq1KvLR9J",
  "key33": "3p4zJPUmLDTYevyVyrRghAUwqSAMz3HPr6V2iwNSKoU7X9wmpxxrWhqCeVBLArb49De6TsAQMMZgbKy9TxmBWUAD",
  "key34": "QW7NKt6QJ6o4Zcxfuf4MfJBGfRMUjrmxjS83W82zss28KNhWMVmYPvkjDZUUmKCE285hPyPnXtDNE35RUYFQuke",
  "key35": "4zbBaTmyfQhpZE1zHinJrEaNZEd7N4QKaAdnCQXhJeqYxXFyDiXN7KTtDoaMejrz1pkerah5uJhuDfxwLr6DoXqS",
  "key36": "3DRYF8NZUW2souX9dppvnofRwEaa1upbcNYeTrmmtTDgJEDKYvhEjzf3KN84Gf2YRSUstYUxbvcUUDALGNEZv1zR",
  "key37": "24WUmoMARePEXMVRm5Q1Kr6UNaZfZeyHtyRN2WEEv88AnW6NUYeoyQdMaj6gp8HwUN1zjRmgH8vffub4XFjMVhzB",
  "key38": "4pHDzV3SYVsAebfvph3B75PGcHJ2SW8Rnxz7ghrNk6GH5npgvLdPGWNzKjXFB71Gi2WwfKnknpjBV1iijpsm9Up1",
  "key39": "3PtCwEENF424xtmuar7mtpzNyKhsxqENffr8naJLehRwRjLF7VDjCuRbQ4mEQ6A6dwjbGKEpCmzrDMBrXsmogDHq",
  "key40": "3teyhzrcfG4k2G3X3KH4fQohWXYMUPo34yAkq2qEXHZCcnQ4cSzF5Z5tqNcdGorgygmcaiV2ahahJBhwX2xh2eNd",
  "key41": "4wS8Yr1dJemeVnJdG6N3BWyNvu7YZmPjZcSKPvBKasjCjXDTDio7FnjqybN1Gmzj5SD6uu6xoGxWVSJra1r24WHf",
  "key42": "3aBGezMSXP7xVeh7yxqSnMfz1LZmWd8126U5GVdvYKNdUV2qsfkRLRaNK2CJgXvfCjDQ4sY3XBzcjF77ZGWTYUoy",
  "key43": "2ZZgq9LTzMhg4cNBsU8u8R15Z1hoAPUzRxtACB7ppYd6q242QbARgdWzMieQgrbqvtSz3zVUKhtVP8PJFwKdCVJn",
  "key44": "4pmWycaC96LDpar6DuKTMfpuv6sVe6gK8C4RohDxbB1rDaY8385jTRtddzcf28V9m97ZgDvMKsx7vFK9oWQFvyc4",
  "key45": "4uDPLwM9Pw8qoJt8EpVYc8uWQqsoLKQjQUwty1tuFuGMJ3KMup81h7xDNkZKvQhW7yaGj9gUKo2TzYZaxdYW1re8",
  "key46": "3pgX4emcrGsqKm7vHGyqmzPEkV31cQ2HaauYfk9adWX1QBgfLzfgxc7CX3YpRjzm6V6wWKYWpv7CwXGkF5bzgcho",
  "key47": "2rQLZtVemkWUuP2KqqXEmbs7qkHbe7K1B2Uje4QhFMJ5Fq2ph3G1hqZC7cGD87cEo8sJBWit6BNZSFmzMEZvgiPZ",
  "key48": "3ENW277QzbwP7wz5Qz6w3Mf8v2d2Kfyozds1rbsdpRXcVZJDMvSRt3suL1eok4ehY6iQoBEnNAE6Pp59QcfVHo6m"
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
