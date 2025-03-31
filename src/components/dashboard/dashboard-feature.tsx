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
    "4GpjgTyfyJ72R2ueFx9n67Bs2XHNkzzKMbTpKMUoQoVeGNLyHuTrrzU7kdviajbR4ioxT5HG5qe8t5nZd1sYddkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9FSmpb8rCjyZQAww8uybrxmhuhyRgA5KPzWSXsyZMB6aC2Qj7QMkiVJGnTT7aKkXkwzfkG4hzrMDTXopCbPVCE",
  "key1": "A4YMrceStAH5eEmWn3ZmThvxwyJiywyWdFuDGJq322BDFWmFZjJG9WuMAU7YMRvSV7tPxZX73jjXeidnPnWv2Fa",
  "key2": "2ggUTGbgmo64wWDRWpckkQ2WD2csJ6oqTDJzDhwCs7RyAuLKy3pHH7qivXHXVMp3BrDSxL5tNHo37BxfgRB22mbb",
  "key3": "4A2symZK1MD6811J14qH9XsdAGKemU1PemaiG2SJ6Uiiw8qfpom7JLSgsr2SZmzzQyrj1arq3BHkuiJRpxKrRWvq",
  "key4": "VLLfs5bYJnhJ9PauJeam2YRof2Bw1vVADzJ19pRT2JP5xoAgDmoMmr8p4SueuHoVQWioJLHNAFcAokQpJAhuUza",
  "key5": "2WWczZp5CYmJyokQPKvECnqHHDHTCA4VcNwkKryi1N7wGPPq23TRWme4sZbidNvs31GtujzMaBntHZXUGTiUPk1c",
  "key6": "vDhwPFcDWwxs1Dm1vrfvp5nRhvyS12hR9GxFMJxPdFAbdcQNz3y6fSryzDDHiZNNqX2W7CUBQcxnQdKt95FXVf1",
  "key7": "39yczmuM8kf4saFuyx4JnxkeS7j7zCoFuqH5G51RP2bvi4tSmXMHY3Gr1sCWv3F1RUGZGW1EXDYFkPn7o2rvo4ss",
  "key8": "5RfDufoStduzZuzoN3veD1pFWrxMqLh6hfEvJ851NhE9KmAVomfe7FtbanDJAQA5shhFdKovvT7Vy1Eb4ebtJwd2",
  "key9": "2oAWhzMAA14ASw6cUGQhVBZFRicbmHRERs9XwLtAbwyFC64hNtaVic3KJ6PcQnEytvYzZxJTqQuXqehnYgyRJ6SQ",
  "key10": "4xgvyjWBUDrASeSKjTfrED5zdsYedMLcvjZdqQ49NtZHbpqMV4FMDSdDqm7L856zV1H1UmNfHcHiFSNFQSM6pQRm",
  "key11": "2D5m6ZtBZxLsiTjuc7ma8umwWYZrkNiKqSFHzbXZUZV1so9B76KBFUaezvZgc4jsvSYwt29JCBpqgGsQdV3XMVBG",
  "key12": "4JwF2nYdk1YFECJpC5L6djizVaaQTzuQr9teB1zikdgY9LzirPWQNWYTmW9k5uyVgYhAEJTFCdrZriGDjN3nFKBk",
  "key13": "5qKU72P3J8uLErVGvQdPr8ALLyE8r8AdWUdfXbD9yamJip78XF3hjTccU4qJzCa2GcLNVT3JspSGaRdN4JBiXNKg",
  "key14": "2uBP3ECaWp4aDC4fcBD1fhSTtjbAJEu2meSrfXGdJ7YUWc51qteZMsi5tpsQi4EvcxHK6NYtX6tS1MbZb2mD4jzA",
  "key15": "2yyiDKZxE9X32sXXY8NAcGWK5mXAcFNAfjnwxPCg164p7xJsfjvcZGYFW3zqB2TfyqJQnLonug6BrEo9XMiE9QZz",
  "key16": "3K4phT8gaPoVQiocz3fQxVxsWaVmaQmWxsP4mkvdRTPRZW1jvTcAsG9Dwr5FpfBYrzkN8QsvwgGkFQos5TAmEmAU",
  "key17": "4PtgwQuAdCRf4nnDfmc4LTMBa52NApjPwBe3VJCx3K4DTVcDz7sp3qQhFtEW1vj2Cdb22FRs1gbC8AvtWtDBTxve",
  "key18": "23oAMhjg213XffHnrHQ1ZV12ty6pCKG87oPqjGbvsoCfjMARJMjy8FBGvDd4YudN3YU2PQSaryhsFjy6S7ZjRGc7",
  "key19": "2py24zALu1cgugSMDcYj9x1YKhbEXKdjMFPnm8Nxydiq6w71QGwm6a6zRuRiGCNrLDw2yvg2jB2t5mytPb52LAup",
  "key20": "4eozzsaHHK3c5x8SZkaG1aVU7imLxwbUwo8FzDNX4NPRxgXKAD5YbASL2pTLeNKqXQc2WeGa5n97AYXBVMTCDixu",
  "key21": "56epPV6L2AYguip2cvLB5bxqTH6qyZLugGEU85ACBwMjYHUQd2UBccXMwP4MesvAjfY15zYxrjRuMA5pkr4qbUkH",
  "key22": "3iFxMZdPdbci18fhwrurKHLpdjWWEzH78K8NjejFoQ6c28Xfv3sughvR8RJe68fz4Mhi1SYNvdPVDTaaq3c4xg8b",
  "key23": "2zDYmbNDE8uyoG9HaAQC95W2jnXtAu1gLFdd8zrNSgf8oTBQHfvPvBh1AePoMcEQrHtajFhRddC8WC6otswQp5NS",
  "key24": "5AXEVmjmQPhmaFBCvHmHZSdfaYdqoTVg8EhictGuUmxEShJbTdBjGhTeerkVN2DTsoztWNjQEMvZNC6YgWZYQdnV",
  "key25": "66xxf6ws8QUQ8MZVrFgUBM3qjUDDxnbCJMjwut1E91hNNUGt24AoL4ba8NihTyXZPCs3z3aKZ21ZBrV4MrxY3cCQ",
  "key26": "boQC9dLpHoEQhvd2AEtfV2kPdMdqz8JQWygn4m6fnqTvzSRvPoVkRERRtybnwNm57YqwxwfqWiXBr7dBLa3nS5c",
  "key27": "55yGajCo5eoDhPsEx95XaPMXA5YQWyqZtVzy6ua4u3ja6uvMfcm8rEejfy2iteySSPkq78oRujdW5mMj6znwVYVc",
  "key28": "63BhAjo1tvRQniDURLTBqxRuPzqC6e682w9PCBsoz7gAAYY6SECwTmXpQXv38XwbUn1JfnatWwBuyoZwYK8Tr6o1",
  "key29": "619SfqR4G51UR54z5RBL8UfwwyAuYRwW9Q9Yi5yCNd3UYa5W54mqGFRXxfaZ5jRCGjNajn4QfSr4sGkPSRXYk1wf",
  "key30": "4gXp7f1nPqYtSyjYacYSd1vcbtu6Yf5zoybScL1E1qsiW37Q1MRxncwNxZV3L7ZNrW1jARVx6s2UWrM858t8B1TE",
  "key31": "3oxXqMmAFMdjfD5VwesiCQihRy9NvYtSmnQmZuBexcHpr6AjfPKSiTMSyrorg36ZaUKMdZgNHUF2GpPkswvgzN64",
  "key32": "3DWsQQcgsGaed1KnyoSojKEP1vALspxNLfuEo22efYgY3wi62iRiUGhJx7VU8GqsnRiBzo4y8GNueD29Vardk9ip",
  "key33": "APy9he6hCmKirhabRshZueTZHsWjRQgZTgFPCvxTM9C4JdboRL6MuzYRL2FMPRUfEHXqfi9g63vHzeYX16C9kfp",
  "key34": "USosMSj8xkVcinbrfJkg6UgJGfBgaBuvZECe1T16Cr1WfZWVicEDzwM4gDbJ5nFybyAiALC35DTqMdq4JQqksES",
  "key35": "49sBfULooqe2iKLomEPn1ivny1wpk4ZZYHSiemARv4uW7bRY4zRH3WnXp8NW4xBN8GScLwWZqX6QcQatLoQyFSfJ",
  "key36": "2VXb6GGGnr47oBwS3CihFDiJcGHn8dHmX4mmCoGM2g6FqgFWSZjXMsPJPtyUEc4SeAqjzkPVzMJsw6xrz5u3GwA8",
  "key37": "4DcZeivW9PhVctbHwVEm4oUaQegemsvgs7RRiHdHDQRYYQ6iHobYYe1wLC9ooi69fCvux8uznxmEAGA2824CturE",
  "key38": "4uypatDUP8qwTDq1V5EAiysTn4dXpbpmbe8R4L1jkE5DDPfNCYHdCY9G5PUSwBZngWcaLiNfM1n2NWVxdQw8Hrim",
  "key39": "2DzLQJNSRkGJQy81EmcUF1GgdeFLKsEB1vZZBCw7tZAmM2rK4Zef1HdqHLtghEoCeCDh6JR2ZB4jh9AgqD6WM1wY",
  "key40": "BBnFfVK8q2dSJg6s5yffwF7eZNRPqAa2thA9jUTLyPuJDf9F4vbRqWV8qcMUd5G5taCf5mKbEpfpGHF8wDojKLk",
  "key41": "NGgzrWDG2VyvowAtxCnyJyrMq9vi5F6ryevPRwauPvE2mrCpM2LrQrWBJw2SequkDEQ1XcPRFTLdAXY7iKVSFwx",
  "key42": "4EQW1Q31A3dN5PMfcyNeaqKwepU12pcb9VN8oGezYJh1N5g2wFMGsiwj3fzFxnUaDoNy37WMSme7UcC8Rmj6BVdw",
  "key43": "3SbgAQihuh4newQDGaWFPs1dcXZkFSo4wTQ7oZnjv9rowgnM8FMz1dUW3vuvNvt1Cc87Kg7WFqUY9JChaB5R4bVk",
  "key44": "3kDYdYUkEyNyyPr5JjbqaCnXCzMcTfGoYz974vjTLojMSgELioRjHqpKfPfpMagcxH3F5eau3itcUCm7uSU1htdG",
  "key45": "eop7UN4zZkWq68e2pCFjntJtGze8PwsZBsBsF1jcTNpkcLvsJCecTcuQZanSxBN9TF1dzm1JkrFqS36t5e9S9aA",
  "key46": "66dt3TPWK1UQPJtR4AY6ADYkzz8NdaPghqa9bt9f3fb1KG4CUi6rSjaZBh6ZxX6WWrLbsHnXXBeVXtqUYQGbR6bB",
  "key47": "4tBjzkr2ecFqzTLhkxzKt42yA2s5k7h3HNHmszc9q1avgRYHSuCSw242pz3k6aA68iTNLZHHwCktsP8yM3LGdz2Q",
  "key48": "5M1bvTa1CxMDPovabJZBw5YwHSFmoGDqEuGZN3wFBZP3e3XsaSqLH4rFHKQF8wQ6tk1PVrG1qKkhuUq1DgZokhb3",
  "key49": "3DhjxLAXZcHN4n6HaDKxJE1cLEzMNgF2ZJV42moaWm8dLGjciSh3uhNRQAemVN1nqDiB7rK3VQYpGjXXSXpA6yGS"
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
