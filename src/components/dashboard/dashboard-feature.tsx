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
    "249FX2mGDgSZhcYJyMSJqjko4ADWeuHR5J2ugT2Teu7DXok2AHgzmWGMXfbPBWGnrkpiTwMerAiFsAuSnw3CH4ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyUG8jA3YrNj1ozbR5qavCxmR9fuDkVCDqbLpgY8R9HcQBtfo1iiRVRo7JYWmg5XqU5Prm3yHSPpTE8iqGPCQiP",
  "key1": "5h6YLqt5TgNpT8er87aprspfSqeEHDRfdcKgfsXSpZfKEXdEjwGAwCkqn78JxrRJrLiy8xS2sARAnDn6E41cySvM",
  "key2": "3d8DVT9tvchp2WPfsnPxqD7G8YpSnvYcrcMiTTNyGJFXsoWJtvncTMhLYRQ7zAaLwpc1eLQHeFCfWKPyp78Tg836",
  "key3": "2ZEzEZgBrW6VpXnKKNvHddwnUM4BEye3zy6ZeKpZS5fkJZPVYzxunrw8oBwq8hi48MgsanbmWzLgFKEkru2AcS3D",
  "key4": "2ZD8vvFJJ25tHC61JtWhvCFCxST66cyKjoNHXnDF5TYUhphkPnwgJ2umJx2j2A1uFxVEGLHwvv5SgXYQTXG6FaZd",
  "key5": "2Jab2SMUbmHBpqaFDD5fnL32uoPh2FzPZwJfTvYSZbDQRUE7CGxTba9DVrUv6Kyo9Kb4Atk6AS5gAFzewrkEQKeR",
  "key6": "njuXEAWS8R2MeRTs8Hua4AgSD2HgTnWrGxw1i2jV49qZCd7HuqKBHDBkyWpP76ZYWasbHwfkiqLbY4ePQr4NTYA",
  "key7": "Q96ZjnqP9NvL4xNzRYJNvkg1GLhwG7511P9oJfNQ2nEkWugEs44XZ9shT499EsZNaKNJZYpwYEYvS1UmQZJDgyN",
  "key8": "2ZWBAFL1YMDaSogkpFpRwdBnA7BU4yt9fHw8mHhhVSBAzcdou1Vfxsdo63o61xkDYHfmaXvLqR4THWciU41LnAvT",
  "key9": "2unxtdxixFGuLvVBtZNyhxdTtEVhhoqxHApPmNiiQwgXvWGHcznUwaoh1p1zqhXA6xsG3SaWee4Wa6rsmua99hke",
  "key10": "5KZZvzuGi6GQri7fBvbKaUNEt5BeJ94HZX3bat9Ecn672u1qc6bPUVY4VnNGoFspN6jtLZ8pz41gyLsmT9d8vfw",
  "key11": "5U4fUpWSCGjUMmRXxFuBzWf4uifme2m75RndAYUREuwQWAeNXFqAn75oUunPbEMWDmayJhaZHWoMiKoQa11aoB1M",
  "key12": "n1Fapbf8DHAJti2GU7XBoWL5P4MNq766hjxtm6FQEezd9ASnRLcDeCXzxUwN5zNGWrkQa6W43TfE4XVPEr63ES8",
  "key13": "caa7nGFG3ME5Ha2Hgfzbz8ZyzxBDMRMPFQxx1JamEds2tBQ9S37seCzGFRJV29hJL5qu41qs92GNjtgqEXqcuwJ",
  "key14": "2ddEz9ixu52vHGhKpQAurGbQVnRSw5b6jWYsNgFdv6pbrqsED8WhHNxHTZBnYxaxemppNpDWy4aUVjvNRzg5n2go",
  "key15": "3gAq2k9GbJUpsx1ah4C9sm3uX6A8dbrDN5oMiDgSV1cPwdSYKGF5ExpQWj5fteFCJVsGXBXLuzFexaLgDFa1eBxy",
  "key16": "HYYZoZWtVgrtxLprnZjTNki7SFDudei5eqLnMcdcsSsLxAjdzu1KsKMbYtcSY8myjqVPFn8tofSscSmx9PqNCnS",
  "key17": "125C1Vts16huFfVWsyfNYtaKjM82eV5Aws7L85wSMME2R9hsWCL3AK12zygWfLEn3Ee7iiENyqeX5Tp1agncoxgd",
  "key18": "4YCvurgpqGJY9Zv1m2RHSyezD4aH7Z3rQj42zkTTHh1a479TimfP6G6XBTBGGNFLbB7h5mYSuYnJrcSXBa7v3Zy6",
  "key19": "5FBbJswZjRgtUR7mDXpsfDiqBUQAqqYVHZ7ebGgjrmejtBstFuEioCXCqJaacvvDKbPSioERc7Uz57jjLNApjJtk",
  "key20": "4diwz9EsYfasPfupkdsKBngZxyPp96piPQX2EP2VNC673BDF5mWtyRY3RyzpmeKf2xAhTTUDSjpUFKSe5J7P3SGD",
  "key21": "DjTHU4YF93itkUQariWKFwiAgWD6bM9emLt3nTiCxz2UZLxCoehZZMPXZvGZa6oZvy9fc8XgCVnZvx1PQNRiguX",
  "key22": "5vgJMGMsWm7gtTXYHMqSVRwpNHFjxjLemDt1JczVsgFzWGYz8515d3WybkHZDjUuYk8Umz3MEtZXWPhDpgNrEnYx",
  "key23": "5sjwTGRbgVZAXmsYUCmm1NuissvwTKpPeBKeXbx5e9YPPNM2TMBCwZmFAVbJ4rVJBmgat736dDbDbtj492QH4r4u",
  "key24": "4FQBKH9N9eg8Xy4G9FBsuENSfjdNkubukNNHi16SLA9rHP863ed2hGAjjPVFpVKF697HtEV26ae7DGrNbHBi6X2i",
  "key25": "3853ZwbrynTVJ6y8PYTZAKbkSaR8RBidedUBaQWruKedabGFKh9BKWJ6dKsM5YVfAJ2zoULx5mLv2JjoFPuXnKJr",
  "key26": "4K3xE2onufan82tt1DWNuSb5GV6HSYTWw3s4dh9HqM5ennEYEUsT53yW9Vniwz4WQxj3eDsUYfBJNBry2moUPHL3",
  "key27": "3wXQhY3cuEHKYSB1r5CcQXBTbVLmVgLRsUckuJ5N1fH7whtH7tLszPThYe1fDXTPhv68B8TCVdTR4X6fi8g5FzR9",
  "key28": "4jLTHCDp1a9YVajxuDgrKrciGFbufhALZSR4gGXDqRYX69DnivZETfwbFm3dLMjr3HigYrtEe2W9RCjf7xJ1infD",
  "key29": "3VPGpFHQLsh2YRFk8tzfHHizBS3Yj3JhMtahQY9Bd2fbdc39orhruK2u8L8n8ya2MtvJJ6qn45viW8YRjY4UqSau",
  "key30": "5n2f6bTUCis2bambS5jW4JpfostuK2PHFuUULiJD4q1d8mo9B1EuxpABFvSvXasyUBT3bmJfUMrtyHf1RtpJgpmB",
  "key31": "ptsGEUUzF4umaNidEUaVUzzQfENgmsPAuDK7sz55VJ1HK72j6DwH12WJ3xy3q9cot8HCLizthk4TprmtNkVEnHp",
  "key32": "4KTfr3bKYB47NU5zGnKs95NUqf9nR5K2x1RpuBuD5hxJHQ2fQUjPbxVBdKT4cvWvZ4NriBqfpgWDc91Au9DP2QBa",
  "key33": "5BzPYrA2Tt9CnxrrrxmxTjjduhoF8SQd8ggHTKBLN6s2Vi3yCA71wd4fZvnLkk28LivrwrJezAQmZiKYJWKQ6oqX",
  "key34": "5ZerF3EJxsY74UYsifNz85UJ7TmQi3K4aCCi224sr624vdRnS6rdcWrARAicVFyhfnqQLamV3sziKqFuW2CcFXcU",
  "key35": "1KPjzj6UN6Bif29UnY79d1caDvXWvSpYTz6wdAF9VK92v1mZAX568LMnSe6DNyfLG3GAVjkCNBtGbRpkjSHwK2i"
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
