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
    "bCLEWY7oY8d3FS8Kvz6pdc4iqaZhsJ9YTbhf2K8toEWsadJVE1dFo1qrLuEHtnvxR9ineJwcDeKCt7whJuTPZqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cz7GgX9h8x3iqSGWBpWoS8Nx5fCFqHEW58k9adkDf2XXN2Ksnz1Th2XdLp5EFuMk1BMZk9KxTUWCt3Q38pB8xiA",
  "key1": "4aVGJ8dtxzWD1XipiZtdYBMzGdxN32WjEDAmczbZnZMEjiZDReiTY6i3ctynfRnDkkYgUN2KdpSuUwFoZMximLDS",
  "key2": "4q5cUmpYRVeuLUCcZxaLmXoZ2EWhgzXyzDVSP7UNRfJGJvXqFsg6W4MBnpsYYKjSMN4gNXXkvrUg4xCHRsw9LP1g",
  "key3": "5oHJ48ZGWEWajsayiMUsAfNjjNHikJLVrRQehCgXfSGv4EV6ai6rhksm4QxAYjmUQmUV4yGL56fRiDX9oPqqM8Mt",
  "key4": "2Praji1rTCBx8kXwcrQJDazYbB6w8NhqPc5wy4jsw5oaYajmrAgtA3zC31yycHse3rxTzpnCvJzrTXP8ezqkRhwt",
  "key5": "4DzSKk3qKVXqUJ15QKbSxshqwE9QwqqfpjWTbWiYs8HrMYztugCLMZiX2NfpTb5uJaE1mEYkNn9ZPWriv2pa6b2Y",
  "key6": "2vzUi6yhxHM45jrqPitPCgCm6E8SBwNeC2uRHc5DrWVYixM2tR4qkKgxNjfRBEXSYyfmQ6G31YaagfCDWXnVAD2X",
  "key7": "4buycR9WQUCSTt9QoHdyitXSGnPZ56y1u5f5PBcMCUKq1W9TPVdY4zRphzs34ACybxCPU9RpaYqugjqZMZJdbPPM",
  "key8": "D8FMQRuryoJi1UnSSaxct3KxSL9BGQ9GYprbwF9E8AoHDN7n7QCSsfzBLpB58RHw6pVzh8BSLSDvYdCGazrihAy",
  "key9": "4i6CLoBxDVM6DsDGDPfAdShJXZeqnVotzcsXexerc3VqHWdoTm4E1VAJSkNpTY8w4JtLCXFBZVRagzGdcmDeqZBU",
  "key10": "WosHS27FpubDmL2k7A7Qb9ZBm6jL7Y6wgYfdanCBc53T66wZK5C5acDSKE4uyKskfVSqwvawJtMyYFfMT47fR3v",
  "key11": "649ncrrsTXr4pjTx5k5dU2wRvjn4DT72bpxZg28AvHxcHCFnNZjCQWMkx27od4VCTFMdFfLiB2mdPbiU85ZcAYnK",
  "key12": "3GJpJfUXZJg3waKbkh6quJz8jgfZDmPBLNXYkCq797anZuSA9Y2CHRLpsrv5srLh73snpTCbFugwVtHZmm5udqSj",
  "key13": "tJHK8cAUS6L9w8PtxFtKsVG7p6FqxmdqFMgvRTgvMK3HyfwrCW6sEccRSAt2p1WgH9rAv5tTtqYkMs3Ja2LwwhZ",
  "key14": "mLeUd2WgRs1o6jCXGLdJC4ze98JV4FaRWmotMpqwVWhFF5KDSgV4gowHfE54pKoybMrb1U7oqD1uSwjs5yUsTJT",
  "key15": "5qcW4AqbyxZMK99pg47znjgGLLaQBTx9dyvfGw2kvhW5tQiXwTypE3vr3wQ5N2dZG8A8YUCeYUSPEgQEDvLJxpWo",
  "key16": "2Wk39cHrrY9rGJ6XmmDQwamQp4nSAU5VaoTrkuLciRnt2E4njHyAFaiM5ivxALUmb6PmSnSqhoRgzhbdiYwLNHhk",
  "key17": "4n84wTeN6rpQW8TBPVcNKGmaMaFvtqS2iPFHd1GHLn9h1anMW926qHHSw1hVmvW9VSiG8oZm3HQSzyyeuf5ZSo9Q",
  "key18": "3a5FdruvQXX42zjNN4zikMq2SEp9EMDikiM2KyrTD7HTWjn1B4iosh1PMTmzED6piQyhbQmULx3UEzbkdmatZcfE",
  "key19": "21i1Wuqy4YoRjmrVr8xCY6YGmV8zADgL8NJtggHP7rFE4cK13zd8EQb7j4deHkZ5qiwWTVPF7AsMrzirCeLtHBqe",
  "key20": "48wpXiVN9rmchTRw7QTWBVMgFB6VNCjsgS4QMrNkZMfzVRHVKob5gAatav9STE7h52QqtMfcnBhTNDYScKeXKEQq",
  "key21": "5PsLrT5G5YD6MbtyhyMdA29197wwgsThGjk5SzYt9PFePtwD2P7Ru5bgMdu7wtMRTW49U7KExc7Fmg3PHAXQi5rR",
  "key22": "4Q2gUzDWpuhkamFUzaLR2GX394KLeSY53HicSkTR4k87ACiofvxFKbsvQeMm5Tc8XJoPu3TLdToipQvV76DQWd7r",
  "key23": "3oJVG3Qxr7AdD6HfKa5YjAbLtCRGYWkP8y1VpREwRBCzi6KauVCi6K746GwD6f5o7zcwNxqejiaj7Dge7wmZJkpF",
  "key24": "gtMCtKUjhWKgjaYxEjhWdfkWDUF4PHVyBhPiARCKxQKXMghaxZUFqiNRPzr5YZUhBZB9hvoQGfpo2VDNBZmxw9G",
  "key25": "hh7NfjZJPmdtYpWPZXmqGk3exsEN7Uv4QGEmHdq2JHD8AW83m1HUJ8K5sf4CkYD9ybHjW1vQvq9ze8TVDXUuPG3",
  "key26": "h8G4EGc9EGdHh6M6yaenmuUfVXnps5nEKh5VhrY4Z5ttAiuLMVSMMCLeg4mjtHZivzMhNFhHjBkUqLXXJWP8y5L",
  "key27": "2x5TnQbUeLWurH5CwwvZ85rTDG8PDxyaBeKCfbZCpqL7nzkgHggJs4Q1WokwQpR6U5mFX27VCDhb3YPXhxvArkyo",
  "key28": "NajSc9aiqZ2t2h4TCrq5aM54m5vxuFDDcszKLccmmWpHKALytdSTs7ufDBey7ULfcr9GtrHYnxN3L5f2RkDWj71",
  "key29": "47Yfo9T6Kuv5zgvhSh7mYaLQmDx2suNVKEZuyf9eUxBeNyidFHb9XHEua8rfNzYeAU29p5CWhk5578Q3fkXKwmkK",
  "key30": "471EVsws7NVFG5f6xZ9VurjFi295jfm2dwvjurBkkG6wkrrZE1Sq5aZMDANA9Cnx8o2DcaVJTaammz9NN8eESedW",
  "key31": "3APErrrFKwT9GqXko2kasor24Zt9Pa2z8ApzCqniEbGF33dmiVPQccEC1niRWBsRsyeiiJzuKjPt56ph7WCoMTMq",
  "key32": "5K8x2Mq5XoQhyGcdHLnWPUh9wBDdDqMupYEWd9hJHdDZicE3b9AEGymvgfujMPaZMp1Dh1S2Sb3kuuMFJEhNE3Qy",
  "key33": "415Jp1wYCvAtDWajVDVpF7vxbBAhHkDpcGmxCb8W11oF7MxaM9t3z5MjC25oMhpYTvgbhJmQ9bgHYqBmoqHzbFSK",
  "key34": "3TJqZ9WUfPZVvH7RoQAE9jHaJAuoAmF4VoVGMkeZJ3JaaRPoh2UJJmqEsn7n7oFUJ9KpG5sVG43sRhMVWftmKoyL",
  "key35": "47wFMzQr2936UUgMRgbZu4yySq4uSvovaqzaieq6AvQdPS9bAaRa16PKmzhh1SeaqkWPaBJhW6rGqz3wDmbEBC4Q",
  "key36": "3q81KhQYfKwPJgnzywH9EcFFb9q831CU9PnzQM1ZMAzoyMERYZSRMZ8GENHW69Ryb26hFaC87WMm6UP2b7AsiNmm",
  "key37": "2SK2oHcaxuTjsiXPFkenuxakFZxPq1SJd631qy8zA5hnuxNgpBRp25bsEE8tgPJYFLo9W8MesEo495RsHc1hFkBg",
  "key38": "4ekxssr2FAXHfFGrGXyEY3AwuakXN7RxVRVJuWQMUCor2ZVGMmVt9TqJrir27yrVkDF5pYECLfKWChdWi9xMzUEC",
  "key39": "3RjBYnQFtYVhTpVXD2kELJHzhUL3wbU3WSMJCvU5EH3s3s6V4iuGmn3TAiudXJzjaaKvPossziZYH7BVThjmSnsg",
  "key40": "2D8q1G4eJruuKwkMJZwHoKaXtZRwhb1WStTf4TTJEhj1cCrJt8DY6pGcNRg4cB81VbUPgwHr3H59RXbq46AW6mrg",
  "key41": "4Rq1MVff1a5S7mP9c17JnqhXqhFoEUvMTGFYgkrtxhnJniuyFqrwoxdr6iVvhSm5HYRGuhfErGVSvnnkEj4N3v1J",
  "key42": "facbE9BVsDBJsoYevCicdZcWTqvkpao8iZBkKiPFNxtBqBPEW74XP4T1bNdoLVkvVkJy7yBi6LxDZVYVXDLdVkC",
  "key43": "17G1Ui6uuw9bJ98H54SM7qVJUpWBJcRtss5ZMvfKthY8DHYf2ZrwpFtKt7ZvHqxx1UQrmtCNx6c2jQ3kX1w7eW9",
  "key44": "64z7gYzvKhjmcdmxhofJecQwmSvJDbeBSzu6ABhhX6hybMifmeEAQVXqAmigNEFkdLR1enCYUUsFh5CiXbpsAk73"
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
