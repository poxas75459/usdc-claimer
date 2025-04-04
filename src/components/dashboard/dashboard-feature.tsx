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
    "5GWNcigsJMeWUvMGmvpaa67FRRoS9xcGwp2itnboibTcdgbtbqNfstQKSECTKTAny823v8QANkdkjLCQxNG5zrui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKyR6fqAN5StgqRgRyXyHj95TXZFYfnQp296SucWiTF6RwXNYAQERc5CX4Yb8LkP1J3YHhV7KiihwQu9Qhoic1f",
  "key1": "3fTrvY9GVVQWXgd81gzk8Bjgc7jQzDkKVpFbdE5ccLdwxg4Mpk9esvvB2qgDweWUp2vUDS8SsaS1Q28dagNrEKut",
  "key2": "f74rTY8fyVVmEBVPbpJtdQRmL4oJnkUZdKfX9Avhj9hwsKwtnR15SzVko9bbJhKYKbNSjyBSFXkCUTf8Y6J21Zw",
  "key3": "44SsQvGCh7Q5mSs3CzXQ3mckqRRDoYBADpY4hTHLtHJN1uVzUgEfhRKLqSt8vJhi2oiyUtVMvsx7hvfFTzS3TcGh",
  "key4": "4vE8JQmW2HXs63x6iR7bCSTtqvaebvhzrdsUHJpW9PDzP72Dj8Y3MuMzGq2vJsxHCkUtxcPjMdeJfP8ijjUUjNHM",
  "key5": "65MyDLEip6xJGgnKBtPCFK7chVUT3SPzxx4QTK7rKFSsp48ZEP6FmtUf7Z1LrCPftZxwapX3NtjnMz2pY8mm5Naa",
  "key6": "f5gVcwxpFWwU9hnwC5WFmpJU5jq4RL63jAoZ2EYsuvj7BUT8bDUAAdeAsrJ6F58Wvx6HNPCf6wBP1mUDhxn89Ec",
  "key7": "5pDMBifPzADkRtHUzK4BFGYEBPY5V38q4ui6uHyDygn3Cy7i6wGizrvpqRLGZvS39ZFwHz9onioHJwsoRYMfodAC",
  "key8": "hhJ4a2GCTBmyXTwTo3YGZD22EDCmZshMF9GtnPu3nmVGH7N8N52MLv1eX4ZBToTRUEFYEP5TTdDBq7ekZhCxLLx",
  "key9": "24MeZWsR7LhjeDSMmRiywdH1UyDpYEjxNG6Qivc6oNtCjmyhsqVdeUVqyi9Lp6cjknJoPFt2GkQfFei63U76aMve",
  "key10": "34GuYytPrrzsUPhppnnCdiRmLcCMDm3n3tKi3NWQG1g4e8EvLcd95E6bxTCP6rJSf7hUcotrnZr31CFWjjAwxd6C",
  "key11": "5LcRrrD9CN34TWCGtLy8E3r7TCW7CZ7X8tsJ2ttwTbZknop73cKBEvb9ckqqW1SxnXWx2vvZ5DFWKxehfS4tFBhn",
  "key12": "2TZ5Xz6dWPt2qUaHDkos6Cryfsi3SSy6Veuvb26nVxn6Ga1f3d89Cg1u3iPhE1fupRoM4Rq8c2xRu4KRxvsdkzXL",
  "key13": "4tUoCFEtckkYnceiXCxx2od3uHmvfGCNvvpk6hSUUw8kAUi3ki4wq1ispQ5EaLDv3urPipswKGBSdF4ovTemgp3F",
  "key14": "4MVrYnrF5VMYMoBokP8emR9d7AQuSTBfMak2TyZzxth9PsQTWhoqcFq4GNfWfLD8JLiFZzLTMSBKWTBtBRBjepWJ",
  "key15": "QHtynAmX7FbCPB8ALg6KPUtkCgApDPuxwrzchbUhnUkLE9uq6Q7CY86iaYVbDd5s11VWEjj7DTWC2nASo4xCGrJ",
  "key16": "5YKENFsxc8UqzN3HLK1s8x99CRgaoFPniozv1NFsGMtfXDE4676qaRSgBrFdRPHcbxUHyB7eKyT7KgssuUMYAwes",
  "key17": "28wd1zbJZyw6kd6WxxS28BM4eLimHZfLV8R6Askw2v7gLLMP6RESVVJjKiKsGxzBG2x5XGYRa2nGrzH8f9MmrnR4",
  "key18": "4Zb9burm2Jv2spkhPAVK3bEj1pMXfeyFNT51R4pPJ444ogqX6z5kC3w3rscKocYxNgZrAKdBHEREzEoAn15MiFbS",
  "key19": "2kuuvur7qMwb7P8GXrqmg8B6Brr72Zgfhw1mR77R1Ss9siy7H4NfKa7xZg3BiM9L9XQ4ULj6mPvvrZctFML6U64m",
  "key20": "5XZeLNDkcPgThFK1R9tAhriMojAcTXQT1mKvehWQeqJEwDEYEn6VZs1D2P9fw7wVEzQeT5rwJcDP43isrnF3e72",
  "key21": "5bjHwPzc2FH3Gjn8gJqeke6dLJocwL4iouc6AsdzD9gQxmxfMQb3qcu89ydEprE5A949YeAWha3tcA9L1pz9RT2F",
  "key22": "5xio6ygYmDM9Kp2Z5Rqh3EqZnumfueLwgZmLimF3d7pBSRBUMp4Mz9wWQpfzLPJV1WZ8ZgZ9sifoYUc56u2GJtVj",
  "key23": "2rSUqjmidL2ikXnreSptsFvMWRjfi4xz3xa1UBb9V6FW2QQevQagake4U9AncZhnvYR2HZC9EWA5U4rxgRQYKtMY",
  "key24": "5urdd7KxrneKNyRb55RPYEK41QFg3QydNGd9YbjUsqCqRJsPpoqnD8oifeUPwzuJdQSC1K5d1ET4V4x74PHJxFLD",
  "key25": "vZPBm2XSTiJQzd1oNwdEH1zXBAia3rPTgKscjSerTZbWtZAxHndiZCuBrTqVFLpMC1WW44abtKxzg1cGrQ9K4os",
  "key26": "xAXpmc9RPMwazQs312wCxxWzmMWS8M2Dvv9BoZUi7QMEEomXdg49uQr7iLrpwUrCjE3St87JnYdunBHTRHrZKeW",
  "key27": "2cfnpmCB5nNH11NCwceasJNy33Pcpe6JaXy8WdETGo4qcsNdvpvAmUD71dJERW2xuy9rdgEMvhqBkpjj7U5a8n8Q",
  "key28": "43VFmGN3HqmsdK53pwfybPS5dtpKhJMwnNTjCj211ar1U8k5g3U7vQGmX7fmdog61oa4VjU7p5GQUfFdPd9AW2Ww",
  "key29": "d7vikEH99vkSp6CDpThxF2wJaPWkAHCxKc7uT7niNFW2bTNaT8AeN695ZSieKCr5PVWDfpYjaTAd8HQgqXoidGF",
  "key30": "2tUXbbYQ8sSEkm7N59mjxvmZLZnGk5tZ1vhbCQQkh735Xg9wJU2mZkxJXzxNBthfQrV6aZPJWS9AuxNDtA9wU83E",
  "key31": "51nmMKZScGWWiPQZK4qccx2yYsPunDAJYCHym5EAXzDwFD1x3aasArFSFDDDK2YELwSbfz8NrG7Ukgdgq8VpKD5V",
  "key32": "2pkbyHskocDJ9LGg73sJjKnogboyFgYudMJ4KpMP6MuPR9BFEQn5yRw6dAZCaMWWxaqHP7xhyaVuBziEzP5hiqcE",
  "key33": "9mfQEHtXJvrZdG8Gkskmt3Qz1fevNfHUeb97BMQQXRtHVrERPM2j6r3Pw539aMwecKA3UWe8TmwtUt5jDoHJJyv",
  "key34": "4CJP7sivMJpQZEWi7SNQynCwtyDMB3pXyfeZDtNLRB8i94YDnTDf8vi9zBRvX4EerXBgwCsUK9qbQgvD2Dctttih",
  "key35": "3kypb2zFywuJXx7zg55migXay1ugGuvYj6iSYd1XXk95Q4Jc7UxjA6ctsjymEsRhf48tiQjH9rYqqMhjif2PQXPw",
  "key36": "566YdTjhN1882AMi98dWSVUKRehmA9QXnPU6qF8vhEDQPggx4FyotkExYGQr1CnNMfYLPThtiLMXVz4Qvp14agoK",
  "key37": "5BjSvwoE6W8SnMT23nbEyZrWCDYqt41mYRPBKTzkzJKXTCEaBzuWpV8nNY38hsKojKe9VmdEL1TkJY98ADDpvoXm",
  "key38": "EjYx1bAq8o2RA2eSv9wd82MCAKfj7MfwaoA7mmRwtJCDx6dBtiiE7jz3Bbic1x4DWxw7uQ22EwDv8uYT4XYNU1i",
  "key39": "4W6ZcD2NGEyNnJGy5LK9s1HSfRyKheSENQuSadZ8MmiELkGBoxP92GTNh4NVSYtJsKUBuythEfehJLbL8SDjTBKN",
  "key40": "3TwP7zaBbJK5DPgEmkcbuWuW13hSTh8JUnMPhis5PY9z8ejh4W7EAf7Swex1jsgK6c1Wf6MKmzbesDq7APx85ecs",
  "key41": "5ZiiCECdw9h3xnCay31Diu58KnYfpbigHQ7vLSWdBTnbWewTXCLXLk3eLuanam9YQSpo8kGY5MZNjr3nY5UT84gG",
  "key42": "4fy4q1i7zWWHyGPhQNGaMqnPcTzzV5FmE4pQQ2L59ai6TbEBRaNMe8Ztbqv8KVWJkbF9eCVH7Sg3dXEob1eL6p1G"
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
