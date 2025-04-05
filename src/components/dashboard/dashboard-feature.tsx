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
    "F2kSPhk3RTbf2keWLxk5Q19zgz5eZAiVBpF9ys3dmpRKPBDT1hDZWsWFw1a1PQwvF36b6aruvpmTKHR2Gj5Xuco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8dV2xzatGTiCKB2ozA4WaoyxqxQXxUhh4HRdHjbgNQFNUSYyh9rdoB46NJLE43pDxy61bxQHtr2qdtLR5YCvTR",
  "key1": "3HQi7CmS9rWYKQ7vcruYDnDP9CWtiL23F4ubR5NBhJHgDEjzBt6oTNVgTE9i8xXENym2iRtzerqtLVevug34g3wM",
  "key2": "526y3sdP2Eotiu4pRuYrewCoucJiX9QuFarcVRYD2u41z4jEiSt673y4FJkuoFbWjrWg6xUSpnhdPb6xs6ikAHUG",
  "key3": "5Hw2vGSMGs4wzaXxJBVXGCmVUAz1CnzMd8P57juiKR8PyR6VpuVqH9FC5VR5ywGuj65NsxQVH9FTYgAh2B4aRLQY",
  "key4": "4fMXxc8eb9BRxKPg3g468xZ1sp1NkQN4L4WowwdutajwUazG6u8opYKzqMcoxsmUbKFEamPhSxa1FiTC1yuGnybV",
  "key5": "2sontcL3McyEpRaqEr12ZzJe2hFouqdMnH1d2D4ARdLSiwN7RYrF3u7q4A6dQDgbxP3DyjSEci4DJBVhvv4TG88q",
  "key6": "23E7G5NidyhvcYerdCGURqnutWNwfdcG2hKjee3TYA3KQwALZfEmDDpZbC5vdz58AUuBn7iiAd1YKntkY7aA8qZu",
  "key7": "EJqQ7vvVbaLwXzoP5ZeKDQRXbTheL5gKfo8tUeaQYM42gKz7N4vMoMPFqnqTYnCBVDYSQkHFvC5og9aUGtBKU96",
  "key8": "2xZQfPzfaH3o9jZx9akS7e6G79WBPBMy9QsJozVqNdoNfmcPdVpwwksR4LwYkjAaybQVBMKK2WGCz6MY51NvCNWW",
  "key9": "4KkzqxuWsQs9PcUCvULUpLFRvpYD315ayrxaw1Bys6mA73SegpEt3b5d44cERPswT4KtmF2ZYRjaTe3b1B7UL1rJ",
  "key10": "9KmRWQW4gPg6tuPRiypCvc1DtkCqyPtv5cKATbcrPhRmjhSkAabXPxxzMWDVLDJVzEZhVPh5rV3PTh6kL7bD1iG",
  "key11": "4kQmnRhx2apjmxKafiEdAW5MfEWAWEq3R4VgRqKhvnYfHWagHJVy4GP2ncx9viZiS95S6SiMeEq6mSPePswLmj96",
  "key12": "23ekcUzU6tdY5PdSbF2gPzoiQnBMpMT4CfFhqQLC1Dx2YeWQbFkQpzNebGYNnbQjDpwXC9Kcpq4D95DZZQQAAEoF",
  "key13": "GxKG615ZqnSean57oTBCNmKeEe4RuzkP2RuUeJjhWu9Tka2pg3nQVN9ZPxZeQ8jnTgnZwamN1eqqYMhxzpxWu6S",
  "key14": "64WC7hSEyetQihbZecDYg9oSUYxeiVMg6xyk57gC6JRvgjKqE8BkuK9zbTkAFFhNynvj2UG1YwET7bGEBN8HGm1E",
  "key15": "29qmL38dPJ4wPBWaBs7qyW46JDfFjuJA6DnZ77KqnnMMeKkW14HTgkyJumFzL5ZRTmsVfei4QJW6p29xTjdrYqGm",
  "key16": "3nq7Ny2724Nsr4dg1gsto4s49XnQ2wBc82EF8ssCg3WdEpR99SajbPoahGAqU68euokfFuHiNNQPvhm4ZqcVCU7B",
  "key17": "2W1Et5QM9fUN8jzmKaFu52edU3Laum79hg6su4JZxQVDnpFFYoaqFGuhqdXv5eK63Q45xqWx8CYzqjcDHjHR3dRs",
  "key18": "3FzzSkpFHXpDUojfAtm3LSYiQtmFi4smbjiw14GiEa924wdc7Z231zzqnmyb4oZwPwqvdpAsoWBrbH2q2iXBAK6p",
  "key19": "5eYB6kQq234UNGSjqDH8JwG5345nWTQ6UjgYrHUG9iVf7T58iZcTjpxHnV95i84z2Dv4qLefdMDwefuicqvWijnG",
  "key20": "346MEEppCn2r8YkfKQnGxGQBKZVAraiSNoqJkShEQVT3CUHXKwmetjAhNSrv1z9Jd8PNjAXerFocc2jjL1ET8SkY",
  "key21": "3cQMicfMmEkkBpNA2o8Yn4i4mwHqrUT9Z1S4dWxRpUmJ63FbPVdnxWKbQEzKWWEEbt7uvKowRK7myi2eMJTsFcTb",
  "key22": "25pvu4NJesLScChdnrw2BdX2kF8W3Twruu8v2hfHQXQnoHFNELFAjndLTg6bXR8xdG9aYmKLKAXeraNyHpC9unSX",
  "key23": "2APBJvZLjaqYsUKJYSvZaKqqsoxEsCnQifYVskcM4qDiHPMVY3anAqyUMpKYFoUFVJHMBUYkrrqxBoeCZCQugeuo",
  "key24": "uXX2PijNRM66N7LLh8HShGvfVCZZwuHt21nj5zHiqqd19kkfS4JUB6HbZmu3ZKns9pMUmhS1kAPSmkP7mEUp1XU",
  "key25": "42SpEUdMRMqbcR6w7XQiABQ1Nqyf5qhMPdBovmtHA8zmaTWTokdi6j8bqbjZYwmPYbjAGebccEErXbd7PNGkzrUN",
  "key26": "3jGuXtHD2tQRZwGdiEryPFX7VtQEX6g5d3bdhXXxHow51wNEqsMkVqMLYzVePmLddnJH9EudzbGKMuCvqjgCaeRx",
  "key27": "3oCBhbgGmZQaBosiww4r3WLopiQ9qF7qdjZMrGMXJnSK4TQ3iyMC6h4AU4Ngnvd6CsCL5ycbzqHGsvB9fKARXnJT",
  "key28": "5Nz7Q7Aj9dTQphoYK4T85PByzHv5RMqKg1pfu5xPMbdirt1Zxkt8W8kiyZYXJwMQ2isJxLPkhuJTRE31hgUyPS9o",
  "key29": "27B7Nmw3hUKyf2D36yUrPo6mwdzdBoi5goaxgrx8nCaDmj4LiDbGJ9yaJ7anu4S8GxB4eYgj6ExtwNY5y6mdhC2r",
  "key30": "RdnBFxTgD44DuQPK7ufTFhJHm35SHCKgf3TVJgUm5wdrgJxtrcu3qzuDrjjnTGsUbhcx1yhXCroKhANi183DBWT",
  "key31": "58B9QZovGYFsSj1ku3o2nb7dGHxLjiZMNNDUBBAYVhonCcqhfGauPav2v4xnrmXegX12vQqrVyrKT2iZFYQojwZE",
  "key32": "4ZwfoQFTPGc38LmyJbq23gA931MvzzVRDZL9x8XZaGMWC2aJzyGY49NM6irdHVnHrWehEmdb5SWWz8iCwwJcFyiV",
  "key33": "3Za9c5aamM75Tovc326GiBUWW6PZrsbiFtr6MHHb17EDiPmys2KP29XYnMA4TpPNQ7o54YnM6jmhdoyT7zFtVvdk",
  "key34": "4xdJtKnmTzfewaPkLB2n2z4Lqt4iECiCyT4vwRqoB8VXg9oskZKZEwysUzhKNyLf3cne3kUz26jtnXgv4NQ2qGWM",
  "key35": "5krzS7DHiiJVjyurnKd4k72DhrPMKyx8LvvJc7KYi3jaTq8Kj1gm3iZEbn1jcotBy4264RoBjkAkdFbZKF7ncqHy",
  "key36": "5p6yo2T6ZqnApmZQYpkYfBepPTUkLGaxMVsw7tgmk1e212TfaBUQjKHoi2df76QCQQJXo6sdH88DeD3EHKp356PY",
  "key37": "3wG24SScgeycwjdjyi9LPtMCVwxu2PQWJNBEEmLHRSLNHDHCP5PPkrW1Gd73VqcWpSAMXPfgezK9GpcWhEuXHqYc",
  "key38": "Rb5omyUH4LMHGNaydAfpcm9YWeS4R9majNSvL9KUKCuTsFGMXojZbTz6ri7btAnGSkhaEkrngvH7Jc8Hw87jZgy",
  "key39": "3eSUBZYtZxx9awTPZtZw9XxiAc817QtpihWWgT81FHgS1z1Ge7LbtFmy4hwKBdBsvuxpaos5ameUUV75CamSEsY8",
  "key40": "3d5msF1G9ykY5FCXmp4zFN4CAycXNwj9eC41er3wxPzBN8Y8iC6Ce7ANEXcBbJpffj8GVUwPffkZjZKLnPSQHJvk",
  "key41": "34bfmemNtUm1GCAAVJH9q5W1cng9qeFNLVu32wzMyMffDDSRgyp4oUL8uXAJVJgMmDYUa8JKb6fe2mX9qyQh6sK9",
  "key42": "5s4M2NAWyyYcxadBQpkiLnqGprmxPepnPnsAAM8ThzbDqKDyJFs73PkiFjMrpckp8CnR3bYdCBFSc8L8iVwBytuv",
  "key43": "33xoE8HmndQQNi2yE7wArs8pXu95VdSkRSUvHrQHTUvja2yKSGbUSRXmeY22SGreFDtQ83Me4g9SkHi9sGfqrr9y",
  "key44": "3kabieUKEZK87yTHGzz31RhVyXeYAJd6C8Zf3SnrqCDR9JSUnSgaDBcbgYsNXVvL4JL6ESDkRU6w336PJzeLigQm",
  "key45": "4UGzooFASQfJCUhFHAE1LScw9ECAiMwyLJRW7E7vUEDX2qgcktU3HF3y8DCvh1urh9JyopFB4uogHTTm7CrXC8xP",
  "key46": "m3Ht3UF6ecA7Dw8tqq5qAsZMqP9dZBF2SzfLDfhMcTZCW8t4KuRQe222iiEV7j3HcEtQYt8nDAUFqkhqN5yM1d8",
  "key47": "5Lqh8VyoerczMETanYWbBzaMRT5jp8g7Uxum8LD9sLzJ7U94YNS9bukQ8Sp6JFhiSFfxKQXX9rn9stb9vpYoKGEf",
  "key48": "47jsoypfDDdgTvXn3Et6FB6txf4G59Zcnaw1PTEpuViiCxUkvLk3RSqT9ULApYTWEgyfAmzjiTgD7ZmuXZv775X8",
  "key49": "51qFjPsMKsnY9ZTvNiLRJSA5Jjf48bh2Uguqf4fkNmaFrEFJszsnB9sy5ugsgvkWd1mCmLyMXGrj1HxAxwaUtJNq"
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
