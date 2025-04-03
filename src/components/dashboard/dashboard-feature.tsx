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
    "5Gvsp66QqPhpXXPj3JC42dLYr3gn5vZH7ZLDtPxViveLGuFkHTDzD4pf5r16Hoh3DbNsThhMsWp1gw4Xsw6tfWr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qpVVJA9qK9vWfuxBSRrMYB9Sta5zAbwU9eNQKby4AUpguDDRZKmKvH5G1Jzo73vLAb5w7D4tf8E5aVnFxLt7wDM",
  "key1": "2Po1MJKyHMAziH5mZcGskmUdfeWGE5BT6YktwgpTjcXX2tH7bdEA2GhRpvARiARmfJc3dbyZvT47yseUV9N93J69",
  "key2": "3Zyh6C8LrgEUjMhF2Byg6e3naTEZxDdsZxdDm1FEGmNWq8Rxt3Y9rRtDzGfECT5D4FJnL1VoVRo1aaYSG5cWqj6i",
  "key3": "2TrKxB5bJmHEd3VSWk3Kz8vBJbiE8H7YLYZq7Qd3CUjtvLbannJ2SXDL9sdZByiokm3jKQyYYkrBuSKjtvGSbvqi",
  "key4": "2wKiTniE588KVh1jTR64Qi8GMDx1yUUAcBMC4B2svoWrtrkqMyx9piEGyJWkMKDJqfyXRzeG7G3wk1sbAx639udE",
  "key5": "5rSYNJ5yFbh1oyfU2ctDMBHaLLY6F5REbbedvJPcAHkgU4gEQGKyn4de3Ryqp4VvuWruHGtPN5MqEgC4zhz4ufTr",
  "key6": "1MQLe2setWR41xrUpTy73Kwk99mERvd45Ucn5z2GFYyBF1bi1if6Yzfs3TYUEcWgkdWPVvtJwbC92MVonAnUP6k",
  "key7": "3H5v4ckQV47tTk68BW8EzJV28oPp63Tc8GicuDRMdirEVX2K6qyUDLhbABFgwHm5Tz2svUufmYk2T1dexT2skcCW",
  "key8": "4Y97KQjoSV3XRhkcHSbzuyEqxcbeM28ojKeXtRRSiisea1D9L3zGfLJiGEXzHW1AFfL74c58HMqbZ63k3L5LcY3X",
  "key9": "TBSowfhxe1K4mJq2FbognpvEe5jA2yo8Pxr8unbyZaHt1Z8rsXdzGz4qeiH5tVSPKh3W6UwH4GWpjEzFG9TrMhA",
  "key10": "4MaTfHZnGccBDD34tRLb3SwveEFtomk8wrWdfoRT5B3tVJd3nsDE4ftay8go5NaoJTeQaEyJcC9exRRHp1KJ3x8P",
  "key11": "5rmsTRm54Gpb32AFN1XTGAfSL2bXRTyxVYVm9tk49wLBW5r9G6SamWWjjnwL1W6bFahPworHaMVGGzPZ7HUHk17X",
  "key12": "46LcF4qPn7DZYhkMYrRgNgpMGfuxAri91tx9E2MHY8XNNVH1HfiGrGLLwC95w6d8HKEP8RMrdxWjLuVf7WzYr3xs",
  "key13": "46nLB9HXeB7tLEptzUonHH5UMzZ5qXCvx1Lc5gVdCoEpVjz3viQ6uFo1djMMMz5y37hP6FNXdqWG7rL4NUJYUSoi",
  "key14": "4QwJafBLEu1V7w2NPj43rgoxFsscHrZFnV5JNJGHnjBStFNuz2JdAaJy2JNK4DmGGJHHXmbEtYGqrsZHvtKnkkG8",
  "key15": "wEc5vbhRo1gAWvoYrTHNRPdL4Ai6Tbm4LTZguGhXXvGuPQYibwWyTrfTANzkbh6p4yaMyDKNAoWLmXam5ywNo27",
  "key16": "5GihG7PNS8MZ1AG1fTzPtt6jQHLnVvs8k5x7g4pxLMh7zH1aJRwonzgLxDgxsC8i5dEgwKwfRGRRyVxZme73LnEi",
  "key17": "5rF7CUGtfsMEeJd4WdWvwnzh98jvD75x1qJhxM5G1xBLmhdE8YL7H1BdRVBefNudFULQWQmWSF2XQqR6fdW3gxL2",
  "key18": "46hY9nzqxQHywr2VdQVpQaqudY9y1Bbpu3Unobn27YHVKqHToQonQViQbMaLB1p2ioif2S83udNVYEwpjH8BFj13",
  "key19": "3DT19c8LQobLZbdaods6zKW84hcPvBsBAiJPF5UeCrNttfzXn3XksaRyVLcWaemZ4wSmh9WnShAFi4V6nZt37b9M",
  "key20": "4msXWyWipJLvZT71pFdhckhtwSkTaGkXCvP6Sqz3yui3Ve8Qn1o8gHsQV1ZJpw3Fb8brkop5hreWyoejF37u99MJ",
  "key21": "MdjxE4jtfpMrdJJonD6BVWCuHsq6RBGriPKkCr2abtvzqtbkGAMZZ5jF5mStjQkDHt84VufcoUCDh6TkRnEM28u",
  "key22": "32J1mkR6F71miuaSQ3U4q2bXZX3bjDwHaU78sCidA3Q5M3CypiUfKSKLSGA7VAM9drNUXoTWpatHnqafsi2VopLP",
  "key23": "3watWLBNnYQ9aUsDfKHVepwNoYQNKjeqCvKdiZnjM2ScZFtVuAJ9nGE5sEHSSe4Ph9z6k9rYL8Qa52gznsjTM13W",
  "key24": "2D6hsaenye7fnsfHKfwQwdKL5BfGWAowQjMCmjFgofR973cAjioVWPw6DVam1XxtGNgzFYbWEF4kRmKzMzPK8V2H",
  "key25": "n56PmfNqQaDBe7YU2Dzz9ChHuVCDqqoG6PyvsJxVoVbK1LqdMTgsEWPXm3j8KVLgxU2ncaVUTrZCNaPoXahNoi8",
  "key26": "5xTgyCjPLf4KaQVd1ZCLk2saXox6mEnQ9cotma1n5SwAezf2983HnMNmLxfsWTTPrZdJmUZiU4P3xcxFTFzURvjM",
  "key27": "49XxYehSDBoNx8jxQ6H92BUsiih815SoJhvn45gqwwjpjAMxg2Dh8eDrDc6MaQumPZQD4DwQxnnbGhMQ6nFoTL6F",
  "key28": "49w2dSzRAX15WEwfpPVaUGaXNwP7WgB1TBqv3PcU2geWhqudEvFPVD56vmidhcFURMDDRvj9jWxxup7QhScwiA5f",
  "key29": "qq8aeWpF8f9YXyHZhqTu6MwVMnFeC4wZtSjtDxTmw9xWSZKW3CaAJmdNfxSHnA5t8Mz7KvnfHDgRQ2AsM3YhFcZ",
  "key30": "2Pz7c4t7s5zMLnQ44ZvQq6HWcgshc79xdhXffxbmNEmN4aYzvDmvtv6i7aBYWuMbqpjLvanhD5nrz8bpAh8QKpuy",
  "key31": "2e6rydiG1s4v2o4AHA1QGqaVe5C3A8oFh5ZeC9foVhfJY2N4TS92iFGuUFHDRvfUjEk3FfAGFa8RtpDaZucueKje",
  "key32": "5cHcxcR5ee93Dwo1tj83N4fv8WoqvpoxxnNbxSiEvhi3DkmMZxv3qjDinpzzeJxeHAXfSKrTsYJXG9DnNF4kojFY",
  "key33": "4R7VdpMHpn8PzqqmTesFfZMTA61SHMG6GeC1bJKRoYYAwtP45uDWgeyJ6YkoUCSNBcHqtFWvGUa5m7xzVA7qAPJr",
  "key34": "44XDeVzeBo2auLtnbxRwTMdsbWkm9jzsQDa7sF6pyGKQgvzvC3m9cpkSjd7UAswtPPWq8trKf4F4Za5fpZyviweU",
  "key35": "n4xrdXJbENFiHXn1Vnh3LazqBZjFzzChegvw9Z2tQ13VvYYpdJVv7DxhzjECVkLuYcHTfjbAzWrggtXi4kDuoUP",
  "key36": "4a3YbY66BT79Vg49hpZFD4vzAoZaEffw2FsqX6TNWMCwii146vg4kAiG52vkAhnEtQpPVGaqKQn6PuXtV2SahsgT",
  "key37": "5rJX7GcPny7QGuDANS8bmtMSEMmW6smNET2zoSDqSH8b8gNmXshF9oBYF7v1H2yESWvJhMxxG8xTcTBF61n7qky4",
  "key38": "4iY3uvBc2LWAmM6Cvi6zSPA9DZyPEJARjLJA68btCgBHs76JUZHKJdbmE6VHLeitLxZGct7qdkKN9AyUoeo921JT",
  "key39": "mCpka22CE7tsqv62P9cHHwEMZZnbTs4AwhJp9MCw5V4128RvRW6SK4yy8SXQ8MuejsxWazrpkubmxVPQLhAjyBk",
  "key40": "5FWrx6LFaLbdgWunNcXAXATfd4HounwMY1pgKjVa1beZciU2tahSwCNuNM3rDWEmEtj94occ3XBBX7DGGZ6vqA9P",
  "key41": "3gmk7814M2tVpHc1b4yPpHrcFiJeojSMx6g5xUqdhCNSMznuXbY26ReYn2fodJ7JpiDwJCTaTpCeSrE24feeNWnn",
  "key42": "37quXdbmMtk2ZKKeigfQNCuto9ui6pwnFzjv2qBwbmCVCwpTsANWj1nhzPYKMpmKjCdkiGFmnz41vRToeyWd9Te5",
  "key43": "4mXUz8YZP9f8ixZKVQ4hPYUit5Sdj6yZEpKT6ur5ipasRbKHER5DzTXjR3Gd7WvbAWGQnkcxbw8hcDZwoV3U35cu",
  "key44": "5bnnWTxwm9BTFgwuAmZzWBC9gWhP8UQymVuZ1Let8xaWV8Z1jV3VWsHmTAmnLZyShD1nA2heUixGjVJLz3LXwWvE",
  "key45": "3SUwj5A7tHkZw6LVxqEbEVAJuTrS8YhkZGqcmqekA7AKBPuMbsPJFkGkrMFr1oQoB5J4XLUtJhhCbzDMb5fogof5",
  "key46": "32R6NNQDrp1HDiwjXXos6o8fsLrVSBfgybcoC1nw1Kvto9NHde9pNCyatNUwPsh5CzFN21tTNCqS8fKGqwFYqtBK",
  "key47": "37wqdUDKD7DbDDNXzhr2gajKc17Xp1pTnzkVKyQT2Z1JJCUQJZLGuw7r2TrXs8MMctpWdqd5t2A4QxbuFCeVDoNc"
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
