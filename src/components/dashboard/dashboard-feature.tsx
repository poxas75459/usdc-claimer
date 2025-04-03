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
    "t36Qh1oZWgqBGZ66ZwoAe3CLd9v88URrgzkMDGaKV4tX5W1tkLoJxBq4i8w9LJLAwANxHXbTqHy6Hnk3JYMt3qY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwNVDr8RobGeNZJeWZHiouRAnGAdAH5ZuDBYHVvxPozV2qbN4FNg9DsWU9ZEMy5jbYmCipgq7x7yzcWYmJMPvgy",
  "key1": "49WBexdPPfJwsQQt8DFZzYRHSdJhVPg6QNsswhEHgttBNVJM2tnJQsPq8JE1eKSEdvahTNQNy65gqEYLFc2MDiai",
  "key2": "488tajVRrpx7gNCkHaZwhoDPZfnUbuD1KTpexXm7ykrckmqbybfzLVaRpzcEyhSUcZW6bUETCyK1LsHY14iwJNFX",
  "key3": "5HTEbGvyUg3rXqKgyHzudLpdVHXmAMJ8Eb4WsNKMyLK7gZQBec2quBT1eYhKaySaLmbn78tV4xex6SyDA6HFohyK",
  "key4": "iwBos2LLTyffMrrMYLjQZZBhGLNxJozfb24nR1HHCT2ecPqRQiV29L4bEXpLMkbhuoPMvYvMmEjJjDMDzcQvsUB",
  "key5": "2mVyjLB8Y1SRraBxGuvxKKmk9dpMKZxgLGPwCgZ7GGckBHvJZHxouGrw8iyxBKb1FLL7QoRLxEUmwLWwTd7yA5Lm",
  "key6": "2RtjyLDZK6A4cdDeeyZCKqumi1UULkuMXpNuqj9J5KqTEoXCu5aAkzayPxWLsC3zQXUGcL5PmNKNhzVuAEsL5VJe",
  "key7": "2uoPPW2YH3hvs4UzB4E4saHrEvNqhJGaL6HoSoH3pEoPpMphUFvham6vmJ7z4p381yhYpUQZcAux7mWq6HMvPqLt",
  "key8": "5FfU5UaheAyzCcS58XzncNatQ85TSkntjPbgrjesdP1diyoQUEnMqqkbycpFkQrBJmLNNVfArmPWkPEsogDAE4wU",
  "key9": "4kGqGEU1Am8wweedMPTCKg2WB7yg35RqKe7Qz7A669btuXwMDM3p5hw6AGCeWLa69Fyq1igkQi5YoW82pKgH69W2",
  "key10": "2DmTW5mCWfK37HM2VNJpYQyEio2ptGVDCMc2Xp6khUnmvZnxDkSYDdsMGTA2N4m8nhpe686Vfyk5cPnfvkwsZnkW",
  "key11": "5VgPiCJ4Nw7Bo5TMNGJ9QFiMhmRah4Cd2W5n3yyQxKhqezDRjDmPDbrmdhSWs1a5DVTJuwj7JPrTWrZbppVKGNuE",
  "key12": "Dh8udRGXYbSzVM3Vf1t6jWnNDvNNrkxfiRtPNhbAf338MVbzye1GUyBwc2mCWkCVWhxwFAkQA6ELxLDc59YAnRa",
  "key13": "2odiYFTMqbrFRSxPjypbMJTTFFmJEu3K8Cg9BLR26DBz41G8pMvp5zEWNESvJrhpgehQwj1PUg3p4tssQMLT1rxm",
  "key14": "21HA8pkkaa1VgEZB47Lzcw4d74RHQ1bysiTyKJQWyTgyeH2MKdg6NSLzpuGRPD9v5tNYNWB4GqxYji4dWzjG848e",
  "key15": "3L3gKytrnuw9RG3NgPpZyw7zq9yNV5jfmGiEgGZiuvfgLxLPDmsbt3U2UEGf5MpQNK4kFcCkh4fnF6PeqVcPspza",
  "key16": "4eSPkScQayNqfduL5wXkFPdQwaqP9TSTccMnUJW819ZxBjVDioP91T8zTKa3nCLYKzRg95JU24yk67o9yhVksjXe",
  "key17": "2WBjA6n95qtoPP1bXD7zcgFrLE9zneSLDMzLEWXTPx1MC1jHmBbdBuXwMPBhhG2dzbY87rNHeaMqTBDwVd1azZtR",
  "key18": "5eLm2Y39GdpNHGfqT4haSzJp1PkPUF5BbH5KYKEtDE2DjXV5dLXQFJy2QBgDdHKGndaXY1k8S7fqVJLVZwdiF5dg",
  "key19": "54koXxoqbzd5xcDTFhgFquV4dkWWfyRxmP5NN7HafUnfVjM3iWPE95gPX3azsauBowJzGkwvrFrYzWd4uXh6jtoL",
  "key20": "38SjvYTvZp6xj5q5T1DBESSzBcmU5RDz8tHkBp6HxYNs9CPnSZgWsbiB9y8AeEnjwTK73ee9GRwGqCcGenfWqzy",
  "key21": "5R6GZndbp6gENyeJYWUmgnsPsFSsh7M3wRQHYb5X3xv2oEE5jws3orGdZuK9Xv6SZd5fB3ZsDJhiMmCEN8WL9uEc",
  "key22": "28LnH8vFhH2pjZNK7aaBbbGKLrEHx1kDc7x4RLTpYfPwMmvW72tJa2eWiKKkfzZG8jz9nxPsoXjeFTcTZJ6fa8wr",
  "key23": "3qwXGGzM9wDJScKFLuVpkaTZGHLcES9KTPuMy1DPWdXVJkvkY9gihyiS6HJrSZFekwLYacYkodELymkx14Yh5xr2",
  "key24": "4MmvS5FM6H1edtnqnrTgyhUx64kykAdpnFm5uGuWywVSFrCm26jtBqo54k2b7bWXeW5h6FVxjsbn8hN83HinkqSr",
  "key25": "2D3NFHiwd9X2TueuRuBiPSUD3FMqWTv4gpviGYcrohDC4dabpWwmyZCGmMvK3fJEaiCTRQWYA5fW5nFUZ9kK1BjK",
  "key26": "T16iTGbnePLxXhwRRWB2tBwHZhucyR7nsEfiyWmpRWqQXT3TUVdpa4oVxEQ7HbwZznnQs6h5ge1hQ5dTx1zX2Rr",
  "key27": "35w3Uamve4kUVh11w2EpQuHNKrFsUnhURzRjaKW6UvJkCZ2n8ViVRA8w1eDv9xfGWFTfFvyx26GfQaSe2ivi9aXL",
  "key28": "3VefGxeggHdcCp3ab98Cfndh8BYhCWRGuJujmgirp57qGNtNmaPvHJzrjheYm587H4s8MCWswCKDPqz5jdETxdzc",
  "key29": "5D6rPPdE3xJN1RNZFcS8hUtgqto3xXqiXH9GL5Ytuoyw5EXwDRGcqAPVHFb796jpXPrnxCL2ax2CpPTWgTYXeVx2",
  "key30": "57miufkQdiDEbQ4qM6p3m6YPbncKE5pZBB2N5QqQLFLHEoTcEX85ubCrhWiyxrL3QU2NwHTN5iaSXGWKeQpz26SN",
  "key31": "37Pmm5tj4jL9g6geSCLX9HMFXhhLyAG91ycG2MMdEtGrrGdqJvxbFhF9yUVaUfUAN3vQKZSsBqWABQhYh7MDcWk3",
  "key32": "5o2aZYL4qjv8akXEhqD8ynC4TdoyY5q9e73sEnACbRisP2Aw8g6uHwpL5kbQdUv9arxtGTTkpHZ5Cpx4sS1qSa3Q",
  "key33": "Z8qfCtQ8FFMKgELYRvH6feehjSEiWrpPpuPNFDNKpjHUE1bkmLqGZdpz1qutvcy5jQeJAyrWf7BtdnGsyntUGQL",
  "key34": "CMqjQeiGFAhryXoFhf9qrCRhkt9RhnkwaSGBhsYWpqRuv9FqHid7ASzm25EsicmvdVNPqXuoXZWE1qniUJZtJTU",
  "key35": "bGJ8ZmhHPdjQDLHTMjYH8u6KCdD119sdYEfJp4BRDtJTSJDDjHumCESrtNxkJ9LorH4D14fZkwmLUmCPExcHxWU",
  "key36": "2wsBxdQwAL4iLGeV9kkmyry8kDiQ8vMYNPwDnCjkFpB8UHiSiq8A6DopELJqArwWJRYrqud8pg1dzd6VVS6R3b7q",
  "key37": "52A5A59qJqvvYb3yqAkZub9fSP3nQtXAypfANpXkCrTptMnKfbs44T8tV1Rx31EsTP8Vd5uE2xgCJ6BwvQGqe9uV",
  "key38": "5z3HYs96iDZZZKZkTjq54qZT8JDuzdPo9pm4h8TMxKVTQnSmkdsJYR5k7G5NRNbvRCGqm4XwxPuTuCoRNB34xkcW",
  "key39": "56imdX6qvHnfPZqFNdyMreyythGNDDZDya3hFUnsHWXXpV5yhUB3aetL4g3EwHaxh5KZ14CzpB1k3QxqVxFJk6n8",
  "key40": "3KZrFYMQdkQMUSCzWL3eBEPUWW3wTi45h7PReLSWZPabf33Mpf1tJoyFg8kHEDW4DjgpMRvrMEmAMSGLHd5dZZCp",
  "key41": "5MxsMuscKgsmhG1WFPpApNVEBxsaxtFpKXk4Y3S3KNYGktNWrFyeZCL14vEkp97ExPdjgvQSXTJyW175tbgjpxeM",
  "key42": "4XeE3D45wzbjFmrnbDs77n2Js3DkdMQpsj7N5fG8Xw2UjNnG9GxGjiao8BRtfUtUVsf4cu3JyCr877nsG3oEj7CG"
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
