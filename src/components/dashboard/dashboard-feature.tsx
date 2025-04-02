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
    "261MDdmFqFN3bdGYoJPpw75QQ1smUTjEYR8jsHXyM6Kvg7XiK4oeasKJEepKpXPLyE4i1iLYNoNZYsYoyVcQbFUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29K1rHpxSkm2RgKKJwRQzpciJpEuPGEQ75UkAgD9qC2bkGPmzVkM5Xxh28cDoyoLHm8sQpBy4fG3pEP5mA2YQ1gT",
  "key1": "3yKcS8929H1yLNd3sNvNLcQ1cRtSA2sLRj9PqzyH9ixa7DuMfmLmb1xgCCjagj61rZnFthLLRhSiEgiGEzaBYx6d",
  "key2": "3jCi4h9THg2MevagpMbWerkLhj5u6m1bxwVgCUzWfYcobgY9ukkZvRrYEAufRbRxgC1MHrTYsZWU73u66FLra3CF",
  "key3": "5E3kesE4rGJwk46ChEPLP4XL8nfGDHv9N3HVXD99TMXrMe72DXdBCsTk18DS9BLU9UFQYhjE22KLi6s4EeWSBLnZ",
  "key4": "4rt2HwBdtvDaGBaUUJoUiVd6oVZzUdBn29uBbNufgqFc1SfXvhptiiEW5Ga7u2kocFAG4NEJ5amEcKUxyZ9yLKXK",
  "key5": "4RuAWfSJG6aurHdLfr57bzUiPAuePEmVDLNpyxzYZqPPt1AxtuhdUmXTgdjvtLSgBpHcKbUduwNxYrACfjfxr8BW",
  "key6": "tAtwXrSYG8A23A3Zfc5PDMmQmhnPonfqDUQuK8zzigiQb2KXtLPEVdyMPgKJyvxxd32j4WhxbgkWBYC2Wzy5FB2",
  "key7": "4UWdkgeqH5M8KpgPJEoJNfZvvBBi8AFvddxQxvF3X9sR5FeKFPxQZEkffCuMVUDUk3oPsjaN7pZeDeddYd6125ci",
  "key8": "3Xy7w4kuvNNjnga2KvfG69kZBxS3hi6oEmQATNX13oJU2khs4trxSQ5otJbGXtMzHzLGdASGRfyBBcVkCew1oonh",
  "key9": "26jLrKZxk9C2TnEZZsZPFaRkFwSDnphcToHKek8EakouGXprAMcxCSpXyxL7wQ9k3NYPV5QV1SfxWN4UNHGuLk5S",
  "key10": "2ojk6GfSCud8gVbU8oYkwssBjk1ncXQobBvuAtNiDG9xbqdGLHX3xGJW9x6eX5R94zTApDp9SneMLRZrp97jH2H5",
  "key11": "62hNbqA2pp4SPEvYSGJBecHaiQoLQzSsd52P1thqW37WVQRXtG7GQ6SVygZNhJQ1z7p1NFCmezSbP9H9F78RLZ3Q",
  "key12": "3CHuUFaiwvx1FU5Ei37Z6sD56gjHnpBpQwLMa3y2Xe84kqYZsTiBMAH6Esa8j5dRZMn45yueaBTofWb7DiGKc75d",
  "key13": "ufPzEk8axpdbAF8kbC1wV9fzi3SypHu5MhWdVoeAEQ8xKNCEHNQFtVciAMf3BMBeymfvVMeNdeQBcRw8EuWzS7j",
  "key14": "2AVqxJnx79fw5pvcZMGjci3qKTCASHCfN8eEBX1XszpMN8vqSuc8B3vekrZXv8kFBUx7ETLwnLDLtvjzvdMFNoXH",
  "key15": "2tuRw2F4QZSD2MtrjDf8fe46uYmDDKmAjhyxgPrGZDEHpZFCAWcyYQeX1ya7BRgGYFifPp8ZyCPUsULjBM9nxSzT",
  "key16": "5hDffb1qjSDSNexd1HaRQiUV3ohrMzGHSDkAo7sM2LtgMe7JKG6YVXXzyWHgbCWCTaTAo3jsEyPjRixxX5nCuCVN",
  "key17": "pRfxrUYXsbhENF3YGxVYs371xiAx3agaW5XbWpdbiu7ADfie87rN1hhtcWzMR8gfASXWcK8zM1sriF4cyNn7ZuK",
  "key18": "wkmGWDqeRLL2nYaXkQHnRsFURNMmtVrR2UxJMEVCf6ocWrkCPFurF3wGMno4BcqTKYJY2CcwGUBgEcZ8JjRfQnn",
  "key19": "2Q9n4bTZ6U13pVDeLBEfM9Qd1W2LviRafFQ6yg34gzMyVGWum4BSSNNH8uSBSV7ge9ERgkyxu68XrDdeAoF9CEeT",
  "key20": "2KtsHCSTzMd67pZ74ZtE8nPbtfq5SGK9VzpD9A5PboWVaiZe1ARvXt3HqHZawX3iVhEMD89uMMNvYiSx6wwqpf8q",
  "key21": "29CoXXiNFH4avG123m4DFbLvUNSjZtkxjkgMcQeLD2YerLHbASoGqFDyarFUan3WFy5Bjhj2SDRuH1wbAZziP46Y",
  "key22": "3DKPrSg5zcvS6kvV129nqvhMywvnYtgp8LAPdPBf2REaeDQ3BtWcJaytubpuE5navvGbrxWYWoCr6gd5ZX6bZQLA",
  "key23": "3chPsyp9EGzKddt2QeiTXPUkv4z1HPP2CtcyGsq197WxJeqdk835svUF8p3EtgUndVjEUHM3g76aKfeM1urLxTWt",
  "key24": "3yQZtKc2qKQFoVLsf1inJgrXHGpcqZ6dhVFVNbTXKo3sonVG4ovWgRNBxMNqzao6R4ok3LfeL6yBxoFcBYDBJqEZ",
  "key25": "5Qx9aVdJ1Ejm2P2Rr3k6agbUjNLgUzipeBbMQ9varVrs161SkDKf3i55tBdwEQVC6P7rccedKB93pXB9B4KcDNPm",
  "key26": "QB9nSnm7cFjx3dEbMihxFt39F2ui1KepiJpz1zcxVKYZ9k9tsk99NYiTQ1azMTmpqfJgnHK7snFzXC2rvJAEHed",
  "key27": "36FUDhgXBoDrJ5jX62P8K4eC3PRDttHAtujwpWNuZvY2eTe6omuRLDkisNLN3hvcoNpSeuYnNDY4RmXmYLzayWnD",
  "key28": "26BwRhyac1GuNwqNJbhShCVzvKDcSdEAHu2NqhcHPkuPXAqzKmECKmhP6tMqwftc9ot8WgMsug5NwSBjQcLFbWSM",
  "key29": "4atR9mJoLz4s4dD3Qjabd3EQhdEnRY2R28jc1E2WxyALpoE2QSD933dzqRtUdPdx5HgfgjpoD8PTU1E5ip3oh4VP",
  "key30": "4BEvuNqQpeQ2T6y1DsaBk4L6kT4y3YNdDKEtSq6j9tGvivDNB4BjzDSc7hiRwSuzB42ubFTDgEhCGrXJ8W2wnrNE",
  "key31": "4zDJ4HW6cvruMZtpAseu2ggVXZonoFHATsC7QirF1ExMSik8EnDDw1JmLAmeNVsEVm74KFYMrpVwFoataG8dU5ni",
  "key32": "289SHyDe89AhJnmgnPfjtGymkDmtWqTxH54PcY28W9urUcqKTdMif6fZsk3o2y5XGqhLoopNh5CzgArTsQyMFPgJ",
  "key33": "2hYCgKSELD3ShjntyFQqeYZVE4ZBM118WsB7sPEuaNhp7ffq7XzFsa3VWK4TxtNT7TcUd3RYcrf5X6e5az4XCb3E",
  "key34": "568k79iJd5kLcAp9nT3wzKhEZEL8ENwrfmhqw4AM8FwiMQUn6eMw2XBmzgWZKDkfEvAc6NxPtQrHCZtYA1UqUWxx",
  "key35": "3CXNAktw7W6Ta5YMk8vNUhLPrWT8VZDpeiBiSL8QV7B93QUSGqxSB1bqVTmRgmAwvkeBoccRNtuh4qmkRJUAiNon",
  "key36": "4LuxdE1wq6WvcCiBF1CiSWgg5Do51zt7tYQyXCcZqnnfsDSn53pHy6R2TeTSehfLPWcZy5rDUqE7Kih8sNegVKDX",
  "key37": "4ASdM5YZnxnsFTDRdgDQVB589X2AX5mRvmgog9sLZEFwpfycZDYbiv7HbTejvW2nf3p76gxqpF8uKFy3mXsz4Zh1",
  "key38": "pMMrYAZZBstqoduE28RMVMDV2zQwzXfRiCSbkj6WGieoH5L9cF4d4KLpArPwH6JDahsHNzkXfzRRYUDsncHaqny",
  "key39": "4FHhyEHChG1Ro7mHmZwYbgBe7M6DwUivXrvzsjzrqiK9z5ZnyWTyr3hAVpm6QGqC2FCejcu6k9T2rYHvJcyAZ9BE",
  "key40": "3uiUb7i1rnZsc455va9iw2aJDC8pzBHm7Yq5DcTwJdC2kjLc9zQP4W23m5Aoz7C7Dkhzrhm1Jds8njkFKwjNQK19",
  "key41": "2wkXSocZ1XUsBaH78cuipo96VtWhSC69TwQwxe1sxtR4hfKGQTdHjDdZssUwxGnaGjJXz93kbhuWNeAaJBTdB4MG",
  "key42": "4WFT6KMcvZyWwhgC6pEmxhpgazxNnHLiAEe4Yzvv6s5iBqSGFoZrGHvHSuxaQVSR9shYtMRjBkmzh2ayPFq8PxVu",
  "key43": "j6DcAhC7gg46eY8jKUoeGjGZhL7X4BvWoUAUCf7bjqSo3WqsLyJ84JoG479asjcN4psA6mQWxekrvSZ1snmAfQb",
  "key44": "3QhcawJu7WeixC5oSf212EfFRtNtM32cj9dFbygpouhrdNKYKzSPvZdTJJ3SxzDWAvtN3SZGnNYpwQTTUmAmMJCe",
  "key45": "2Yw3d2ZrmK75J8kevgk3mYKDPC4VSY4ZUhh4uGCLqQDARAtm43jnSCtwTM5TDuS3WGjE6RYx73bGVL2DkJghDXus"
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
