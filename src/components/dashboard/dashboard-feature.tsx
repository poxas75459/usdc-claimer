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
    "nZHBxDgSaPmt5b1HQu5X3sfgSVSmaKcHLeZhCwTvwG3fNVjECqaGnSJ2CJZmpcfnSh3Eorkh2i6J3oju2HLtzaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAEj5dhYZf1J8FHPgY7JeogdRJrPKhpHPgFGLYPyk3thwAT4TgdZ2T7YRBYx9ytjp6aNnwA76gRLHqTDrLMHiwK",
  "key1": "2HBhRZ4ijpykFB2vxyvwz2X3RWDynAfVXNk7YTYoivauyHh9xc3BGcyfkvFZ74QMc5YaG6Zd1BNu2XbaYzwAhAxS",
  "key2": "2d7RbiyWNeGYbEM78deWtGxRNUS2ZHqwHwoxHmQYJbCJbDqpC2gVy7s4c4AKvGyM8xSJ1itdmD6iSqrrY39ZzenA",
  "key3": "5rj4N9DCefnQFFaBYNuBVxvMbbBvDi4yKqn6uPKqAPR2YTrbG971kJDZHN3hKTpJQRfHk33NEBGvn7TMAo1fsh4M",
  "key4": "5H3US3RQsRC5YFTHHAXWeUn2tTA2Y8UkPChJKMUWsSgMKUi3enfKpw4Lc2UjHzuz9tViAB6sSs2jKD4eTnNL6wgE",
  "key5": "3PDdUvfSFp6K6zPC9qKGkd22fQ3CbaCwtAXnZ1aZhF3icxLTvtqJcJoB2sejwUvV5JmMbkst2XzZv1k28R398FDS",
  "key6": "BajWQmJk4wdvXosSvaDL65agTBzXgjVE9uQ6r9LuFgiU9zvjBs141jAJi3UKPtP5T7xxnYxTEhNhtmPFmkPG3f4",
  "key7": "25NyBS7gtpuQFuxNbpBoKeRrNEMMGtbxUMtFiY4jcuzxgZaWtDnUDCEyg3RYT1kNeRtpUarWrWSNpGiXjUAXWTak",
  "key8": "2TzqKmJ4M9aCS7RDuaKwYkokoMFcXmoNmMoGjHVmswnoumPNh3rQU1fJ8TjDraA1jn91ghRqjw56AZG5ykcsAaRs",
  "key9": "5YYnBSdFfUDUgrqc7RDSpGUs1Dmvpox1LHRPThXDKPEWvMGqpVzK5FhxhZ3qmNryRy8NQF69bSBCfak2ti41zsDV",
  "key10": "4dA83oMyc7UEYWJGgwMubWt4PEx2iqzqnFeLn2qv2RAXGcckswKws5zXnUtH33XXsJYuocpJuknxyDASFN3RJ6oV",
  "key11": "5nnPUs9gnHmdHbL5FJZdc12k3cn9U1Vomnah2faJNaExSCEkTjwiMHVqFBEosQygXeb6mnYRNvS4uEFUVVF8x148",
  "key12": "61nGQPKYQoMWufAP6b5E1L3JtEmQk43y9ery4thx8xsDDKCv3CGSF59bNv48Dvumr92xHn8nqhmCYWHAXFowRZpz",
  "key13": "qX4FP38nCC4aX5zBGzgnrWDTZmWAazfy6y3r8FJZHShxWNFFwrH1MDMK3Cxoq8pnXUkCZCFxQdBeFTBUUbpxJXR",
  "key14": "2Jzd8pabubvLx1FTvnhe1aAUUViTSxXU8gd5vLvorbckNjNtCK4Xbx4W641dwhzHJe13TPWp5y6XZcpaaSrensFZ",
  "key15": "Wr6jAr9C2A3WWgaNL4wKo43iBscyVDgNsnJTMBHyu3T5bSXYzWCNHo5c5KHkWg5jx5ik1jiYAL34Ck7d3eNJWvG",
  "key16": "5X3f4rPX2p4kDeaU77NoTEzG8ovzusac4qJ39Pgvh8Yazp73qRQkS6sRPFVQm7qXQT9dxPqesE1nxYVfYaAiMeg1",
  "key17": "5G31Tg9rt8BnZeMFH8nLVkxkUKSxgdH2isPgHJCutpF2MGwvxNCFnPzwZkhjHTJkBMsFabLryyM8NnKGy7BTWErd",
  "key18": "4YX9drRUHzCaTyk2L2aDvkLseAepgXcgbq8qgePNkZpzcHQ7h53foxotsFQidYJ1zq5uaxRfwwgnmNLFdMHJudTn",
  "key19": "WPhKJpyM3vVp3SpGRSUgP3fWGZwR9cUSFDs5aAQd4kn9ERpoaoUcdd9M3XdN9CqiUJDn4upNygmXFtazN6XxGYo",
  "key20": "zyJL9vyWiaY4AZ75WPG3dQx3n6FEEbN9MWbyqanDt3BPt98b7SjoKr3DqfDL1FwD64uDteiP9Uogf2fNjkFLRnz",
  "key21": "5TwUxkJjM7raxWy1tX4Xqdv4yo2SZqTh4ncZVDV2ExHLKGQTGJffnWynAN99e65ycrZW6ikJnVAEiMkMZZpnGUsx",
  "key22": "RmzE4BJ8BFB5oX66fjhjTRhHz4hreoBBzgNHXJgFz67ZanYkCCeqVUM1fTGHasrq6ZJwv5U285PsDm12fR4wpqu",
  "key23": "3eSmx6LQutWLKxwYsubdLfSS1PSHhRtextoD9QLnxE7LJ7phD23qGQHbKD6GDCM8AiudYDWnZBrFQTLtztbEfNr8",
  "key24": "5KfQFBKAnPCnwJxPAoPskgAc2DVwGptyU4ytYvJLusAuTnMYqLLfDMxkXp3c7ny8JLxPfbu3iruKJP8siVNTPmUt",
  "key25": "45zua7rQTvbf43rSidRkNuQ3ynvbeCwdrNjz74g3z8bDjTYcDo7ER8pDH4JnqJJzKdyGgQkX3jYqU94ZKD8kRz2z",
  "key26": "5GzCFVBjkArRszBkL9Rb9x8SguJGQNXzYuBX1jQs9Sg9vrZzWxnUmjjhW7CoZMBfwYtmpyu3dmuC4didusVoCEYN",
  "key27": "dfzEq8GHpzXRt8uepLtY7FNi9KbD1uJntUBW1sB7Ubs5qoY81E5xQZLqwEMQJxYzd3vAz3asp2fPR1BBarvzy4R",
  "key28": "312E8hU1x5TDmgMWUutJofSrJi7MSzVzXVc4LQz6EEfuoH5CLLuoeGnUMnCk2N2eTtQBhTNW66f2NeNN4BLxCCAc",
  "key29": "4d4XserTWoCrpG531CKd3M4ar8g5coCWkLofEGDMZMvgte2JWFKKhLZ5uVZzr5wnwiZzKmvJQDi3jTEygDRjBxA6",
  "key30": "2nx24QqxY4GSsyorG5JXmj7FdTs2zsXdYhjFWCwuVNFdoxMZK9dnL7ErF1H2cakXZAgUHxaAzDbGTwpcDT6ckVPg",
  "key31": "R9t4R4q12cPwKr6EBgzg1DSbucQqGjZQDxorR9njweMGaBitkJy4YQKSvz4XhzSdPMsFRgZyygYMN9CGuzuFZnb",
  "key32": "2iif93e86djV6uomNesiYVAUuorm9wfNDf6FASjvGv9pimmwhHrxgffzCeZKhP5oBawCNCShvE7P4yMuTmP9gD5x",
  "key33": "2DtCY7w5hrm6zzeVMA4XhbcWcrDW65EDttr6kQQJxFuiHfi5pgds9ZRqPboDhHWYasckLnqx8wDiWdwzuFK7ZgS4",
  "key34": "2kvnEM6XHnZjUbiPE98L8xxk4S7d7ma2bjVNHvivrspa3V4WRu7YqehUNeqCUSCZKxtFPS3VdtVP5QUMqGns2tF4",
  "key35": "sGPRLXyJ5gYZTBeQEVdGbMvcLAEpFPfMCvjtPM6mXcoqu9f25EwwN2FsVDnyzvXShhZpEBLU1ptmsiw4P6XW4F6",
  "key36": "4xBqvhiFYSssS4cBFUppgdpmEMKkpJW6gPg5cM8GsGDvqprfc9aCDg6yRfYbRNfyryoszTVrQUNiuzmxSB612HuW",
  "key37": "4jcVogJCV2MusWC5qxVwqUyHANmtzWCJn9hvRNShQHPMzjqZpnm57XgsNvtxcvzd359UYTvL52Vgd4C2epGjKVVu",
  "key38": "Pfs6regfLpAHLVQqCJwTeNiaqJ3GkKRrZeTCNAkJHzQnmNkK3jY26Gc8q6uPSUzAeuAzA1H3Xy7b9FPy488N9Mk",
  "key39": "3PJm74wp1YjxFwMEC5zx5ntg1Tm2WsFm1Yua8JzijFCx7yYsMXaV3JW9gExwMyCb8gNizACaFCAHnQGnBkAMUBYt",
  "key40": "5BL2MS44XNUuGA6AoXzpa917Uyjg6UoGxeyzAmYMT3i4e7T8hBTqQHzf4VXqtJ9t2DB2f2FzhqYyJcRakpkMn84p"
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
