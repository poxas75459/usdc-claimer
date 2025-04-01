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
    "264gcr7m9zcjJMtsFChkxwiMhcCrKzrmmXGeHhwRE8NE3T19b7dxqEJeoRDTHLr7VgBdvbsJpo9cRbdakV7AG5Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8z1SJL1Kkje3Ye851PvyjNYtbj8KpV5cvSooNLDsCiELA9eEyzfyqLRH9YrPMSbimo9ZL4mPgAgectyrNrwtUd",
  "key1": "4Jj7E3yN8dY9WnT9ygu7fyy6sbe77VgWDBwAHbRxYyiaZtFbpiH24D8evkbArQLgdQPmKjo1iMRPz4MQmph7DQiz",
  "key2": "4gc26mKGaBzdSwUpGGzqiPJZjMRYE9YCyTXr9mQ2BmSbRqvzU6XbcWi9zd9kRdTWu386g7fB1km1ud8b91MC6wrV",
  "key3": "4kJ4EkR5NkynU9GZhH7DkcwVhH7fpRKsrwr48wgHtoC5YWvsBZmXu9H8wSHXd95umUJ11LjUBQHtmLEkAtcM8qM9",
  "key4": "58398VhhBWo3JNCL4SMvWwmAN4bAUa4v7Bt8o82RpY1A5taUDDXqXMyj52iiuvAfW7caXp6tiWgZ2LdnGwkKXTWG",
  "key5": "a9c7jwpJwP2wjyMxtY4TrR7YvrW5JgUzD7XASSLneufj5mN5rkSQbidQPkhqLEZiRw292ENpKUKr1uxFUymTKLw",
  "key6": "22FmdjJA2mXsPSp61fyAwADkwbDhjLuUw3MunuFoPj9PL4jksNKy8cAMuVGeHq1boWMZoudQqHDgrrjDKumvSsMP",
  "key7": "3fFPRuNNzBx9pk4djvpLjpsD4MkhUL7Yixa6Umr4a7PqXYK6bCYJnM9JQqfA9yoD7JkhaX913bMZnFuNgtrWnHX5",
  "key8": "5UChy5RvjhHKqoD2f4jMczETYDgXtmG21BjneHppDvxwX1LSf7mVZFcYTuqMqUfRpfM9doCAEwhRZuXymPUiPMyp",
  "key9": "tphMjwtxAxazJsabsv6ZKe2YbBpyTYYyyoJTMtYnURYc71o79rLNahP1AybRmbE3zQFRNqpjcLLZSGDRMjQ6Jk4",
  "key10": "2BtrdieSRpWHzKvCUW86EbPUUSvAjPf2Y1bo7pYk5zHmwoc5cNwUnt6zxhTu8oMVffEjDNNgnzB4eoJk4N3bJhvw",
  "key11": "44uqDCL72mtaxXoqSRqaFe2vd1K8YQpWJ7BHRHegUQppAAmAZkHvNVu5VnJniHUvDaTYtVYk8zAh1yNQuoP8fEyY",
  "key12": "3o9XJEcWpAPg4d3ukx4syDRxiNK3Liw8rGq2PgdMJVxmbrDtFFBqfp5YjGWKMpt6J3X1sUDZi7rVvtquVTcACNq4",
  "key13": "4mtYb2UvYXW6PmutRtqcxkBaJ41JyQJWrTTywkNwzmKcp68LJmi7FfhqsJjEzeDVjUKjDWiL8kVaGF7SWzRGHc7w",
  "key14": "3tLQ48djDeDz3rssQHWUv5ubrAp7JzEdZnN8gmn1Wffm5vhmMnmmCk9W8tBsiBLRWEBjDcT5g6EcfMNME2PW7XrZ",
  "key15": "4sytaUBA9xJm8h6bWK9u2sCFvzR41aMiZPR3mYrKYbKEfbDLRmud6nvv9BcgxwyN6rFdRyqhWoh6nUwEmmqS5rKA",
  "key16": "2bgRg7dhpWyqNBvWVd8gBd2qekE7UPsN8MaDRtnbJbjeFrmriaRCF6cDsrdY35XQ43mVCWVaU9zMAArPusHuY3yS",
  "key17": "66V7qVapR5LcYxQLtYkkjguVo9h6XaT5kcnkDo8LfWix4RoAp7VeozXifCyXGDTqGTdnwqrSuJEutVZXbRiggeeU",
  "key18": "4RCnvtTFTCbNiuVVv1QUVJrsJLWfMaFucF2ya6NSMckAiVWXpwhA7BMjq27Mhibz1aNAg2y1ESXcWgWmBhHzHoZY",
  "key19": "E2RKduPqKMjapycG9deFgT7iwU4qjyvJYNbkmQoKVEz32tSHdpMhTzMdak45hLVfBKrpAqBt7k6uoyW9LkETNLK",
  "key20": "48UVix2To6WvjisL8wqE5rczstM2LSesz2Xhq8TqLDrGhpn1B5PAihMCJbazNT3SYu1P6Rf5X32gB6oj5Cwx1Vut",
  "key21": "otFP2Mdt9Z7eTSK4T1r98NFGDW8xdaKfbXefabnPMDhKX77KJ5ENimpcThG1LBGDKiKiZ3qFpTbMxiWTBSDy7ri",
  "key22": "3ekjuMQisR2hypgjycQyKsZwuhMM4UUQBkWMhKQCHLHAR2AzvfHphEMDvXwpZqgkXDMwPYSHwTyDJrurioWm7WQ9",
  "key23": "5auiW5mD8khm3NNtz6DFTrjbEgHtxs19AT14BANu82yuDPdPa63LGLcgADUapxEztDtHonnPin9ubMEgDVbSV27U",
  "key24": "5e8oimP5BDN6nmGGD2djmd54trt2Thn9H1AgUcMDyUX4PosC9mg7kZRtw5VKuY9zjEGnpCy9SS4CVFxMTt47gfsP",
  "key25": "5zvUvRiYAqsM9kfaYvnWjvLuLVCTavkH7KRTvza6Dgh2Ek6wUjXkwyZs6GEfDjQWvWE7YcSK8nL5t89qAbaRSd9t",
  "key26": "3edwVyZHicTCEHXmyro4DqmiY8ZZyRT4QFktm6mYH31oAD5bgjLTyUHSDz5HaBks7uJx78WyY6LxQJBnkUBT3wCe",
  "key27": "4KVZvCEQZ2KhEC4YzDTwJFCeLPv4dsQWnRohkp4cEXdhkYNMZcR1RPYhvbyfhpNJiS5sgGAZUkdAGv4TuidQX2vY",
  "key28": "2mSKtdy6x5r1ZmWfgzM4AoBMB6PwQVmvf4V7Nx5az7sLYhJ8EGc34LaNSgDrPpTsZ6byjUVxDcbAH7qHty6h9FZS",
  "key29": "3cjJrZw5kTqvP9ywYiVBHUnBb7R912WjdUSdKYs9t62xc4nsW6pZVyWHY3F5PKaUvyTuSWFSnBshD1Y1dUf2Q8RY",
  "key30": "snFP7DBwjnLuUrbwVwtY29KAkkAGhoZKPds4vZTNCNiPUfBfMJUV1HQcpUbxEopiEGBhiUpsKpv14V4ny6Lpw4K",
  "key31": "4CzAKqTq4h8oBa183EHSU1hCKb7Bd5oUQNmiGuKVNCqoRPaoy2eZwxNmEJGkR78YoMj655jcKPQbYc7AvwzzAZaN",
  "key32": "2uYhbsHEVNq9GAYUNKZ25ticn9TRap8q1AJavzUdkSZTrtDaudryTZBnsg9D1Uwqyd7AEc6BuABb8KxxcUYVx2zS",
  "key33": "5m3nYHWC7S76NqzCXSTLviFMkadkM7sMuP8w8WUfAzGxP1az3EnMPxYMKYcdPDJJ4pBtDYTG3j6wtBzP5brgY1dt",
  "key34": "48pnnw2WTPCToa6Q1hdsFih6oji8cn63xJcVztkdeKwr2CrknZBwgBpsFeQkFQBBK6SwkG4CLMTbLPBkD635LS8Y",
  "key35": "2Y28N21zQdPP6ZuY2Z2xLNJituHZfWk7aWpFqWggbyfEGEeqNRfs7QaQZdy8iCBrvSBmJDBfMS44K4gum5xsHNm2",
  "key36": "49k6vHBVm4L56q6R8JEtpwSWDQpxvr971SSQajxYxkuKyN6ywKZzB9qJrCe7Eyxr9axGSk2XyBJuM6Z8b2NaYZEJ",
  "key37": "3qtLdaGKGtR76SDmbGvWAZny978vV6P8aU2ScwCc5SFyavcfSMhZ6QzXEd7GmKMEggY6hdNLJp41byNcanN84f1c",
  "key38": "65fdQwqL8Fq91JN17SdBXdhPoaTWjCtKvqaieX2y86sD3M3AmqL4J7CTQBpUR3mLG2itbbkK8vtVc5UPKnG3yUQj",
  "key39": "BpYrYd194nToXwnCSkuWucf4yjcBCnTgXF6h2m6J9Q5pkHvqPyTyHVmKXYHjahSaGYu19r4vEYaFmkaP2dMrP5e",
  "key40": "2rsjysoNgqhezbjMfLd4YG1HvzsiEtcsNYdSMfAATL1SUNnxZE3454b13vhKK4HMUJ7r263QGBTpXM8t57ff4mnJ",
  "key41": "2KAWUeAncSX8rtBFfbVPARimLs8drPNCcMKSNPKLJ1qESRB9jEAoAMcEVDuhVP8PdSFKraLjDzWs8pKMEWHHqj3",
  "key42": "2qtbZzwvELKgXQPkiK9M8AodwAxv5tv3bqAx2PfAonyeJpJiPgMZk38AkXpukEnGwjwfKR8caicLX1AyeLfNtN4j",
  "key43": "3SCDQ6iiyUCHufJ6312kcCd5YdhNpmtBSsiPJk1FvNFzDsmTvdJUcdownwcvarhjGKTtLauAoKQTftDhDrkQDRwD",
  "key44": "pvJ5t1E1a5j8nXt12eoJr4Zv4sk1EaA3xdNLpxmLXd3k95762oHSyEhSjNxgJZDAGZunfPQRTNLQYCqYcCNC5tC",
  "key45": "33zwURCXFiCTyta7LhjT3L3f2isj6CupEzFK3aCNgygMRdrtSUPpAy1HfLZW7UjNqosyzNZ2NPiWriDxxUjnEayu"
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
