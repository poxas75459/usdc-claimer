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
    "mYeniMhimTobgFFqkFqdrgRNXRhDWLKugPGeY8YMAF5U8VEvRyjwYh6pWN7ZHKQ4CJQATLjGLQQ6kHuwExsDeaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJiT3jCXyycKgmWjKU199wuVVyft1aRu3DNjr7irtNQ2oueGbXBgBqT9ziqaL3M77e1tJRoKEpb1FUXhDLQiihK",
  "key1": "23V6pTcenFFEptcf6eUi7UvkbBsm7XTAyJU3nDvpmKzeYXosP3saBsXNEg8EsmbZXQZ3QmTSTUJJkNPEiYWcjWBc",
  "key2": "51JkLmQQbncFZvkusRBSZBYx6Uzfi1XW4adUx7rNqHMovA7SKEKo6vNhjTRsywDuL2ov35mYY4BC7G2rburGnqaK",
  "key3": "fAqDLWwjWsfcPoEmfPvfoFVKtGvyLVASWrELEDi5DRRm9JCBF3iuG8cnZ9n9xGY7oy45Ve14FJKtstFT1YLVz1Y",
  "key4": "2JrH7ag8dCQDRP5kJyxzsAf6GgeeTjacjRujihSA6eJ4rErAMREUy2zHP5sC5Fh1KSbL2WKM8udKHLdwNN5t1qKP",
  "key5": "VGSsg1vxaVgR9QEsuGa1se3jdGtBJ67wEA23cw4RmmFr1Ti17vxvKYoGzog3gtRRisYW4sC4m4cmQBmfMbHnDWB",
  "key6": "3m9xBkgd8xqqpPjNeC4owXxTgPhHshqiPoWCCq3J5zH8TarbHbp4ARAjW4hvxLQbWu2pkAMWLuqFGEhHiVPCAiPu",
  "key7": "5ec9pmLqHrgHXurhjskyRWQea9JaLPznNvZCywxdNKuxPNTyQ638YwkeLUZYX2LKUPJm5MAgADgJjCfgKe4UMPxB",
  "key8": "4LHk3jFJhUvoQYukvFHpTQyugkyQacj7ovtj3d4kFrB2NuJd1A9EFtPjuRa4WJXCnYJCUumAc9MfrQHKmFo2uNbg",
  "key9": "cL7N7XvTykzrQv5uqFbzuwTc8WkQRPqxXC8xBh1cL7fXxA2DciHFCWSsajUQQCyT5AicTS4wZYZEt3jGGm6JM4n",
  "key10": "5knGvqbscxKSJxxs14tyuCW1vrM2jpHqYuRvQmyUYssqAE9XYzRzkSor8TV56cGEowtnvzuGL1jqmUZEtJZ8u2Uk",
  "key11": "jeBo6a9tsFSKPLVorpZtrnqLSZSTWpYtyeEV79rxcQDdYuEjwZXJf57PV8rC3VoFoA5PwEMsqbN9qhrwiiszoz2",
  "key12": "3nmodRKK5XvoT9Js3MzbrE9nB3PDKBMjcYCkaxoMVTrVDvwA33UfgEEoAYMqSJHg3DjhtLgSvdSgH1Nbe9Mq9r8v",
  "key13": "eKBnqbekSxsdAn67YpGczZnGdBvW47qgJzZFTjth751F4dKCqeM23o5PnKyCnDTNWiSbatya5S2hbETLdHcA5Jh",
  "key14": "X6yCD75ZvpXvvNvTeximZnCKGEucoNf7jDCUTvWEXYFwe1FU8EVH3FgEiw7VBbJnyjM3tCwKAC1SFpjQjXNZsAa",
  "key15": "4iYGU1yDrHPhpjosiSpDUXhyhwURA7vR5cDWvWf5UFGBhY6brLcjXbyoTHdYeyyhzD1oU3crErj88Lu48hCgezuz",
  "key16": "56pLjY8VhZExTwaj3dGv5HMCjPgD4S7GU2z1Sg39r8zUF8tk1emKnuJvxHpe9JAxC7mkbbGbRGfm7MJQUcVcTRxZ",
  "key17": "YnsG28nC5FrkZ2SZ2vnAqLs4v2Pp4JMYTyGmjRcf8o2DPGaxLzwTj7QL8fyts1KduDDo5w1sxDjzFnmj5ToRkZb",
  "key18": "3CtszcpayPVmbyqeWzvsA2DGCDtEtwafLYYEARKMphuSzBJxQkG9G19fRqmSk5K8PYNME39yhLghTLaRooXDn47z",
  "key19": "5V46EwpavxtyEuCEf2dxdNJxwGMqHewEdGMZX7B3TPu9MFZV7zeFiSdV3tTVhS8SkwVJPwD3WtsLVpzYUsUKhwr5",
  "key20": "3wjeBpfvKAoWtEksnmsANrkbtNRf6dXT1ZuEyA1Em7kn4523f9uzUdctM1aaSU7LpkuAphcwWfMai2Vr1vwJ9NBm",
  "key21": "54Hw6qhDeQnJig4vsr1WTVTCF6XDWdEizhDRX2w1RaJbLoKDeA4DC72NAorWQG2YLTPkbJEY1EVrDSGR5GwnTynB",
  "key22": "3PAw2YuVoGq7t5mL7ZreXDEnc13W79Ry3hWX9wf6vAThaCPdQoH2q2CeivzsgwyiGurBkee8HTXCmAKJdmNB6mye",
  "key23": "2LMfu8Zj8wU7KcRvzzeBPvkNAockWGByVE5o6Zup7Ar3yczwdp9LvHeyYoZvtwaxEcARi1Z438WxwKAiyWAczeRD",
  "key24": "29PPPGvGoiFUwrYTYc3t3uV38KvCJpqcnizUYZCwQ7vxjBAzPbmHtoTsjGW3ryuQKcuE2z3RbbEW8aoj8XDXritL",
  "key25": "2JUuzPxnSdFZJVx6RhQPzgH91rn8GMKuEgm89FTwB6tWoRxHKyMwq4Lbznix7w9T9ZkEgaTB5F8pwAPqjMs79NvE",
  "key26": "3tXWzp3nvm1m6NzxNnx3qcgCDYV9ufSHDsAdsxY1NALZSfsN49X2JJDazqX3ckSUEk9LQXRiCbDcnEPKZE23DreA",
  "key27": "3iw4kVCbCJzw3G2hScdumwH4yKEPpgLnm8sass93Jag43sSARgBogr9qrU6Tqep8zQyhLZgEB9JTgrvdkVUeVdcr",
  "key28": "2WMFhGjqw8vsBtj5dp63L6VJK1XuSDWCkAQYUvWRrhwPKghsnpjsF2UsgRwA3GBzsW8kYLoP4z6GmNXxDguDUhSV",
  "key29": "4r34McxXQC3vnnMUUxtAW9bUa5muFRbNtYMxVUXv1gfJGGdV1FouHMkCuRvQk26WRK41K2yJ6LJ3E3n8oSwWL6q7",
  "key30": "5LuLapFr4L5ybDcsJWYHA9Rt7QfxcpGeQ3W8KrLMtPxqQNxrFCtyCEtg6c6ZuwVEyBpupuTe6ZYLqfgRrGkTLXaK",
  "key31": "4Xje45aTQ1onsDAuakiWpL3ua4i7htzpkHwNALseWEY5EZDpaRSpiD7eJVp4kUEZqtcu6qsQPTjvKSznMH3zwB2B",
  "key32": "HekYnPhKKAj7FrWRt57U7CjSqsmzRaJ1ee4WJ7TdGD46yq672zkJGWvNzhhFqgxz9uJBXA49XHrDvreuxqHA7EW",
  "key33": "2K8TdWZqKTZx1nxWL3xuZ2QjWcJ8ACw1RrhFnrvEU8shBjPw9Hr2gUfh9aS3oLxdNGvafm7kJFaBioez28t4hCck",
  "key34": "3ggq22iPZ2faf6Lf3UuFC1Qvbk6jrNS4Hcw7v2MiNJBFCfzKRR4xr5WVrMA8CMzSqfSA4Lcbd2CN1ftxLmWtZkgn",
  "key35": "tCDJXbueq5zPdHrVj78h7DZYPow552tKK3j8tg35u8srvFjjnutUhzZT6yFes7BcRfJS5QtNqBRTka7LGoWa96E",
  "key36": "4DvwaLk4J5ghYP563GF2Nx1QJ5kLszwWr3gSUzauSzNCt23ddVioqQuoqcnWjV72ZbwuFBteB8qZfmRFV3gi1GLq",
  "key37": "4G5v3HybhZYr5MUHcjtu9HjzmLMw23YYBvB9CUgmZiW3ZGQWV4S8FXRJTsQmvFeMKuwYrEimcG2kaw6AgRph9txr",
  "key38": "21nEyVRdjD1nVmQdq5ckZPBxtCssqqyVnjV9YaTWaZyevtUpvuyPQFAeUhV5aoGrnmz9hzCS1eoRuh3YTtRndEJj",
  "key39": "2oYGwr4AWXT5Nd8PpBvCG6Df3xGda7F17BHr4PvJFmsc2wEKvTFmwJtWeBf7NtG82AoZA2MbNuKHke4BVT5cabYY",
  "key40": "2ym3ipYsxyRppX2DWakAo9Kp3LfDkVqA3auiffvD9cuPpMF5aE4yU13RJpUik8m2ieMx6eBSyvCqrkrGXdeUXzuq",
  "key41": "cWwuxBZhNbJcuo5H45DjSG7Utp9CBWGDuV8craXcEcmTYg4d2KnJFSestG5NBvDGZCbr2KfWjKdD67T1dGX1Ert",
  "key42": "2DRBtjdA9gWfwa6TYQHWT2P7MYghCYas3Ka8XEuc44UoTcz3VfrFGLAogum38q54n2kuvjsu1iJh3GxPAAK7uSzh",
  "key43": "4RyfSe1WBNUzKBrpJSAt2MBZKFwTyanho2rnhi2LuyWztdvhk9X4JsiUdaHs5nZkDJW8wEU8YyZE7EZnjUmh8dF5"
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
