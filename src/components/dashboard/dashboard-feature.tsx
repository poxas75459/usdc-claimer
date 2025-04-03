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
    "54XDvCgqeheEegSgVhT2oVEmvXMKLng3VQhnQdDtReGNft9GQGVyrpNf7iEsugUHpPdTxBsztKQ7NGNGxJQV3puz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eVbtaKbjVSzLB6JYuhQfr7CvW8LMCbL397UVtveGUay7UJdAqq3P3W87waofqzcrrwFbpVxq6sVhfRRTGFT2S2V",
  "key1": "5qfzT7XSNFspQXVofiHAu32RYCJcnsAtvnMsPYoxC9eHgwK3ZJQ2w2iYw9oBMqKVV24QecmWN8nxAXrrhWsVVU2k",
  "key2": "32Udj36bBXbdYH5YHVVNWfiJKaf3vpVXDDrsv6dMNn5acYCnMEcbjfD852KDCWudMUv3DZA6n8ofx5ggQPjUPQvk",
  "key3": "4sjUg8Ysu1x2xnvY4VW8nJUV2ikdUJzyRcdQwvSpHQEMKfwJfFXNkKmSSFGuo3iVTf1sLpiYFxTrRN1WQMHNNmJz",
  "key4": "zKdbSj9tT1Q7Em4opC7VmsimhnZvXHkM4TjhSaz2rdCAsDesRPz9tJQQJcFAc9RxjvqDvKkFPxgijeQTus6Jcoe",
  "key5": "54C8PEJ8FDL74K7PaMvwZ1ToDozMRNcjdN3Aw5LQHWtPLE9nm5JoecJULMYTwogqx8HfhnS7DZZpmQd85ePQPmNR",
  "key6": "2rgJMqeR8fipNrKZe7HKfzatS6VXSNpwkryDHxdhUK3i5UrBY1Dt3NoF8r1gDw1JKq2CQ5Ps4JaTWftRf1VaSUqC",
  "key7": "3nRNeMBBR6TKYRyJkWA7AjJbcj9PhwknJiCT8mopTohzmo7fxTRL9Ztsr3pSahQ1Z7gs5xdu53mP8Y7xkCGn2UYN",
  "key8": "5223UBhAd6R7Aw3L28T5Jogn4rT1xtvk7FNrJSwDL9hswNgHWySKELQTpYx6oshrc9zwomCCADdRR6dCiFFJAXHx",
  "key9": "3HhGaijQ54iRsoZm1oNnrnLwA7XES42wwAyB88EmwuSpyHYwmgrC9is5knCkvAJsTwst3P3EUANZUrEvybL7hb7A",
  "key10": "47Uh3HwXZMxnbPZmWDDV6BmJ5W9ziqibp2PowR3uEENVkMzTUe9ZW9VRm4UCAmuzpNZ27G7d2iRex26bYeXhTgAG",
  "key11": "65qVyd9B9JNahdpwmDzeZ4hsFC8oRz6U1jYPHLi7GR4DZUAWB1oEGQaqTncn5xLEjqUejbrgcwPU1VZGKW4PvaZM",
  "key12": "3uZjPgycLgVeqVwu8nenPXv9PbpvKoaDxXs1MPY5hKRZpxrV2Q4WkHMkBi9RVaCSeLMseS4MGvYbZ296fmG3aoko",
  "key13": "3bHcCTLWBnpYVmXx37SPuubzTQpaMaZbx2kZe6de7X5XYwtxgzpmwwocM57puMHFmjrAnkwX6HZ9AxpmtR5DoM9x",
  "key14": "5Z5eQTxqduLFAXnbdBL5sDaWbnuDEhnBKeKGnXVo6VYziBnmHAV5fcAxHxhW3e4SnXre5sgcHkziWacQWQw5JNwW",
  "key15": "2kiJ4fPXNFc648YuAZcQCLJaqoty2QQ7sQhXvoQQK7VY7hCvQmeqdrjuRCwkXv4pevaJpreFGp9uNVDsVVxLEDJF",
  "key16": "nH5wcy94CLtYF6qbKzsm1maKBudfBsLtQjdTq8hcZEgNtWDds7mjxQEfh1u4dHsaKQ4Ej32ReJ3TfhiEENSERi6",
  "key17": "43Qso4QbWWLsq9FsWcyTR3w6ubBnBLHzKgd6s9dtjmgeyDmADEqPxZiSvxE5FqCmd2vKc9qLUXuVegNxdq1pqwvn",
  "key18": "2Uf6CciPUJpMv3K13PMgk7ppqfbYvG84ddwF9vAZm9Vw3rPiPRCenzd6nhopvJyZf8M9QXNuE7MQwqGMMjmunsHx",
  "key19": "43tgtaDDThrZ6AbVPhxRnWzNEPscuoWeun5nyyTEdWQBxipda9N1o5Cnuq9DTFKffuSXgEiR26frsUifUGDMSS3S",
  "key20": "37rRJnavJSrLYfSdgbAEzJfmBMZx9mHfAPGG7wHy24p63Mgv2yS7nanGeUMd1cvCgePyP9vAuPTNQ1BVnbkG9qTg",
  "key21": "67119NWV8Vjq6prdoMm9WfL523mNiRU5vjmdA2L1Zfb46RSgdPsagJs79C4TQDCRnboL5YKMdM5Kh7iD8s4Wur2V",
  "key22": "y24apwG4zEmsBpwcuzA6PCRM9AfX8w3mEAUtt38D3RroCzviuwdP9uraeesovZE6ri97zrys4gcQs9FDgwonNFx",
  "key23": "4DAU47o74kJPMwQT7PVdVqksCo4n6fwcJiz2BGjSXx66KGsoHYxHqnP1ep4j3DP76p5DvdjTrAbsFDpXaYj7RwkY",
  "key24": "3y7uJz23sWqwijFHFYPutjMxMwFce7miCJ7E2nPzvjK8KHZt83EjVMswM1t8P2L2T4JVLtp6RRGrBYs5fvbBKPDJ",
  "key25": "3kNHm4Xz3a5zibDrvRSyXehjf5phHJXz9Njo5B4nkWj1fDsnLQBtMY5RnQyPYrirfKMz6qT8YbZPog9jfs8h5viW",
  "key26": "2R54FsR8e36wkEzHobFTtetdAAHwEsJRMByaLJtoUUTTv3adJvPNEVMUsiPgZ1d6BWojY5LfzzMxSmyFiq5LeKMb",
  "key27": "57ytZgvatsSCgD9afjHZfPsZCB1ULAMDo6ebzqKmufSgnre2VGF2hspv4ycCXTRcrYGdgNuipKrHtCAx5SPSYbVV",
  "key28": "3Eeb6LbQN5fgPwvJG6DgE1E7pdHpdpbBUKQnLPi3iQiD78n3doeHQQwuG2H2w2DctD39ygH5PgdWsXMA6NVRTNmd",
  "key29": "3f5vu82FWb4EJdKz8jrTm8MLvKM8BjyMpvEkTQvMQSFf9zeyeHL4LaxqcSnMtJNv7vPDo6RduavGrBDkLpzdbJh9",
  "key30": "3khKfDWT2DTSytnG2gWv137paALPyif65dRhyN5TxpT1So7srCD7nbNESKk9L2BdKUd37Fg5U7AXLLqaAy4E9Dzz",
  "key31": "2hLEQYaAXTh3uVrWb7gfQKiEsSqwVDBHPhgbvwoYSzYVLvvuZztdEcg4x7HmGby6NLBsDUWDFiri3xXQRp7qJk8e",
  "key32": "4cjuJ6DLgcULWXM2PseAEc7iV8ibbuAycWWATvLpxGGwo2G6snGw1MQcvPG3afdndNvHER6t6YoYrEXqeUpDqWrE",
  "key33": "3xoJLHcoU6nZ2myRg4ja75mrm59zD12sdVZUKeLCFrHwedsrxsexDbPJmicyXnkYyKd1GbZeiJYsReUzQyZiXcDS",
  "key34": "2mM7np4UYdzdUTN2GUurd5vSwpf36LP5BvpRvtm3TWzvc3TM1rm3uGd8grVShx9fjifyV9AfWSgJSc2CidPNRbyW",
  "key35": "2qPGFYPjpzRjQiMeUXQoUjZqsiiRDthTbjm8FZy7nyK1wu5mHQHE86mnhz9BZif75qsSjWiiADzdNFZuEVjP8Tc4",
  "key36": "5xDXbFwLwD8LYUFMzWR7gqX832kjYDxegfnvgEbgdnAh4fbKjSTJhzoWSbZ2r89WUevMpJiCrceS7N67ppvgMobf",
  "key37": "4qKCMNayg8zvsrLvPGrnH2gVPx5Hj8xfpF378XEPETZYnNUixrJaZXJkh8Pdk6DkDDvwGR8aDVgH8JR6tPPCaSnh",
  "key38": "2MZnL7k7ggF1YXeb5ffB8WcxcyxdakpZEMKBxZBi8bwY2mWHZYBWtrxQimMrh5xiTvFHTHEvYWoM3SXyXyN7B3Jo",
  "key39": "23YxUBTsB7PVjBU2njcK7aUbMhkwWMXYaHGVDbU9Djm4j8ogTfGgSuQ4tWWrx6JRLWJhocmmdD8hhnPw1KnZhTUd",
  "key40": "u8zqKGHvZuRbo3anPjK8sm24xKw634fkwofMmESfyzdLpcBoYRrxj3BpwZTFESVB93PKXwRHcy6xhQoDzRv1ip3",
  "key41": "eFsubc4Da8QR1cMC4PcXEgV6MsvR2s2kVPFuWAMsvcZZTTiTQ1VJP7pwoTb2yGSzMww7NX5Rb9YrWbotYUK8QcQ",
  "key42": "4g9GcfSYSNcYoBwuBHTLhw5J83VsEC1ShNvPKK9Hxaj2bJZYcBEuyJ9fVK8i249qQENgqWjypNE6iZDGr9Lu85sK",
  "key43": "2nbDi6PVkYuuaEhp1xuMa5MCds5PqHsoYFg9ZPxwtYzhxAzPmmqj7DqKgWftQV87wJzFF3gWtDGT3sZ7QKznqgDN",
  "key44": "5nCpvKuaZW1u87g3VY3ovTN4BiH5d3xwEwXK1ihtckhCdMhpn6Z9ostb143AB4aLXVxE5wd959auk1tvyVKnq6n3",
  "key45": "56f8oEFmsLHRjMuR96NmT73h1cMdfAj5SpqRSZ5bSsdrXY3YJwcBuZEd63zHyNGeAPgR1BBYRHmVrWnF8Kpb99N8"
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
