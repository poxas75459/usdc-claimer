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
    "3VNdLgpTc7XjZcrWvRMZzHu6kp2TZo4m5mejhCQ3LNimHS6YpDTbLKG6TnF878Ri1KPziVSZ4chVdj92KwG8z9t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxR2dPc25SXN6phBULzWns1ywWf9EYdyRq2xDbMXo9MHXnQnjs3WdMbLTVzaGGBry4ETWLUUuBeqJhmrWHfwJ5W",
  "key1": "5zE9v4YKnQ4hdNaSdE7x9dViiYQmuwo2ynUULMCxVXmZ1XbXM3BeCd8Gpf35FFoGPpx7nxkBvDkfrKVjzx9zirTn",
  "key2": "5n6s3WwAMV6Fqsi6zBFpLy9NP5WJMtTkwXpZyU1nfwkBzym4SLPLGCg4HiNirvKLP8YJNM7S8KzLo2ndALYogUSG",
  "key3": "i2iUBrpzfG3cJufNi9UxCxMvMwmAxkavJz1Zd88xWrcy9HhhYmwXB8j3pUfYr4XooCR6f7UMyETCfJQTWQQyDh4",
  "key4": "3ibSSLg5XYRfkLgesEbeu2Hi7hvrDgByHmNsvqYsGz65BiVXNuGFVBcPZd2g2tGE2fiBqFxHpowBHBqK8RkyskHM",
  "key5": "3KdexCXB8dCAwHmQagkFMb9kEdjeANBuCJYQjuSdwTXX7tN7dM3mPp9FzvpdFsG6dQdUmFA585bPxbUZenR8jKum",
  "key6": "2qh2CwtWLHDA3HeRHw8LSRmCy8HdnCsD5w8uHSLDH4SW2gxUvEUQLFXy7h9k8d4Z3bjnMNBaFmAUBm6ckzjYJrko",
  "key7": "5U81kWUS1GUbAi4HUsGSy9uMRZPCotXuRKsAcqLsWpVPw176hD5KQxS9Avh974N7N1CLDYEtd2J4s5Q73rgr8JLz",
  "key8": "2fwDoXYGAmQ2jZYUrih1kWHuaTeMgGwT6eXvW3CBTNSz4joCzzLpAi8kLsCU8bCgV6SGwJHo4wYdfJnNwDsX13w",
  "key9": "4KrnLBjD4iRFjY3Vv674VUCCjQbVEg7x7ZJKc2h5QcTFwxJ3waKv1LG8e5TkCNRjveQnCGoEHKi18k6xHnQP7WxY",
  "key10": "5mP8Kzgfq4xFbo91Sz3LhcMv42keWbouVfLsDrBBobm5oJ6QFjspNEFuaVJDBHqqWibH26kCCtnnkNLxHAV37Cd7",
  "key11": "VdpinHynBU5xFxACa2tRBW9nrpq5RjmQyqdTX5x22XXwiVnc6LVZy6Ju4okGZaGW911ggdMb86KZccJfmtZfpbX",
  "key12": "4u28Vu5euBBmqVJ9EjYzHfYtbaUq3BixAMACAQYB4xJYwKYugGSY9x2wq3Qe2FdkgtyU7Ag4Nr7CvGiQAJfNxMS",
  "key13": "5jCqqrAJkw1VGutcGhwpRpfZdr5GPfx8QtfEuRPfmAaxFhS5MGbYiyRSpBJwYFNRGmqKu39RmmwKR8G26QPjCoDE",
  "key14": "QHovcZyNYCuLCLwW2VGSVdFXWHSRqNcLW6duCsYiMQEfb4z4pew4SHdfDVsUy8jzhnqh3bvvXbg1ubNKosVXyDQ",
  "key15": "4eGtdVrdaSDkPMBmGr7sHkL2Do7udYH7DWXzdYnkHRs1MKYnd8VAYS5mFic6KtC4Dmi7SWuwf4xi7sNqkgLkB2gs",
  "key16": "5hDrun3n265P4uXjjCPPNhMELQR8Qop7cxjyw5fRjTnmJTSfpytV7A5vuvR4Bez7Gw5xyUQXqVcMce1gg7WweoXm",
  "key17": "3Uyf1WAEZcjZsXPLnuregi3TDsKscyXXgBB4C97jhZYETxCycJe2pfD6w4jo81WUa2wCacnUJtccncsssFvhZDQQ",
  "key18": "2MEqHcYg5tqyB1rTedixkgsmZEoJe7kEQUTm2PEcfkx8WaKhsghZPywS5k5pfT4AG3TDcQmy8kBmwbqsKecjTZuG",
  "key19": "3MYaBRNZqWVjaEyAt4tCW8ByqGEXLyz4Gn4pTpxifXAF1pvKQtrVZtQbpPRz4srHwvagw1FVhsbTuWsPMYaCFSwN",
  "key20": "3qmXvGWhmS3Pyi5XR1WeZ94GEW6mbPejRNndpP5fy7V1RdctzDrdC156bHbH2dTJZuT2wjaEovUhBfaM87DNGEcP",
  "key21": "52D8DQ25CZDeKYZ2U5kk95EdctazncyTjUiDwLZEFbXjrh6kanyRuHwo2DnBEBiCXTryscu5FnKSQcMJXkLRJo1L",
  "key22": "DD44Yfjyn6BkgmajyDqBKfVPiX81Ldzs2Pb1Cs9mqWZNdfK8Fcwqkmy5qNrkJvikrEkU79gjwRXnvhTnLfEJqAQ",
  "key23": "3XAcWk4SPb31Yc2sLPAhsHb2MAMbrntMTdiLbZLRf5kduXAFbKmC2pY8EMgFaBPDzHb9JokRTxGE22Lv5Vv6KMjG",
  "key24": "CJP8NXMqVKDLmTGT6opVLijG8PZKLXRyt2z25XbGgE6EmAkEZdJGiXy3pHTZMuf9YpLCXnPHh3y353EpGHu6dGp",
  "key25": "2t4bfVmHCaFvh37UMLo27abLnVpp2vA3beyaRYoNi6FcjexRo82f39rJkLyfn1eaDeAQbzMvaq8PuKex8fjtjgNX",
  "key26": "57RroTVFZ56SQBmvnchNucneYpvVB2TmT1y4XW5379pTe8BdjAerArNho72vr2N82snfwXEoT7MzPBc3pFM5eMqM",
  "key27": "9vUhS6m8GWnTxXeDJzbH5pSxKA2EYUeVZDRkBbVipDAckeVdbf6GCU8ks7TmNSCZjcZVfyuxBG9VmZLygjCB8oA",
  "key28": "2khgu7fQezzBG1GMfPZPiurt44MNEeBgVFf3zvzegHj3TtRPHoPyYZUhoHagKZ83oagviRkqQSYWV8F4j1arGpjL",
  "key29": "5Ha9WNJMMJWB3HeuzCQFe2tmiSt3jzS8u8gSyxGvAYBzrRj4YzS5m9dL5AfVLbi7desK62Yg5ThtkiRSx2d9tjUx",
  "key30": "4vBaHHJXvBKp74kqgNptJjPEXgcHTGN2d8wW6N72qnxzNZzrHmo64ecGEVLRZD8ovaExPHPJaeTAqBc4BovXJBje",
  "key31": "mEYTD7QVyCd5uXNuXNruforrQSxtZPoUnwW7EcYZ4Fvy2BDHmS235tUmMiZNVrzwY6A8gbn2pXNpfKMFDXCbAwU",
  "key32": "3ycVGL3VTeSvXYVjMUSKZbJT7yUmTBFKvRx3z6ADbcBymmFzgeLyEsJssra8A4irpqu8kqPPVpGJR74qSS8DKjoj",
  "key33": "63qPj1aDWhdjXnZLBdcd31ahYexFGUyL4Dokmk1hWgHYKFTUUkBWVEaQ7Am5TbmxxWpPhqqSa6x4Nci1gzauxHXp",
  "key34": "4NGm717FWh9STmiNWfpe3tdrTWm9aCXoYg5Gj5VaQKfrq4jGxWbcwBvvEsBW4XdTR8mA23dvFf7AdtRJp5YPMAmV",
  "key35": "4BwPmxv7rCVrXie3XFTrqxVdTv1awbLv9SrU8FnngP2newrVLBEJYKtiY9r2QVN3rE9waQsFrwto5sTchDrFUd2g",
  "key36": "RNzM7zdvWWCta7aMV6PjMgr3ShVHX9oELHFyaaLRxtZuEvJeWtQU33M5yi9nYGqoseVHT4M7B9nEi6QFMLbEqse",
  "key37": "2tpSuQfMrMViVJsvEaRuvEa91VVz3XKVqJxEoX9Q4HTrUHJNwtrpFp2QCiY8bna19kNfJzGJAVFiyaeH1t79piCx",
  "key38": "4zxD1n1agu3MkSnRqkTgFZNyqsXZpGXnEZCJH8tSsZk4wvJ5svmv3YiKBAiBYwc5Eqr5NNTyMa8qvY2T22ths2mT",
  "key39": "3CDZy7iGMsHSxd3JAHXzh5s2LR6WKA34vEE5M3zLQ3oinNLeX4R1CmMwZzaP5cT1GvwUVU92AAzPbGeE42nh2Joe",
  "key40": "1aZgSEgUtGRPXLYok3joC4bfG1yq7LN5iPpYivZKHpAFrHoDVzVWM9GvfBataKUJayvvBHquYm8cxAz7rjcYyHx",
  "key41": "5e6k5JoVwPTVN3G3X8phTVriRGjBrzEtJzRsuwvpd3UMuQZsuBnnyjUVX41GSKrWmYvxUNHpGJkGYk3mz6rqbhoi",
  "key42": "5ppYrzfFtvSkttZ6aa6y36oGxGucuDYnWWAPaes6R9BpYh7oMCJWLUicZkDFvV9cZ8B1HNFY7cjUiiesgAWnjq2r",
  "key43": "5Uvc7gHdbyyBw1ei1gD21uXsvRPDNoudNAVncq8orjLrLuAfi2zR4YieytqGJd9zE61m2WWXS2dPHwbD151nwP76",
  "key44": "2wghNMFxR3opR3KZie8W1aa9CTnHdnSwSaRvPaFPLkmGZnd8ZR8dmqEf4kRNeBzFAgnFh3eQt1NVpxYxfZtErWvr",
  "key45": "4YWgw4iLsJ4tPwPHkgqKRHMa7CRuaH3WXsxLoyxFYMZGVWgT4oLb3CVtMPiZRLKFzqwK2CG75HxEX3TkJMYqXr6u",
  "key46": "3AmskTVybvDRHr7rZGfmm8RGwXLGftyBvysK7x9Y4u9EQY9BSEcJ2ELriLtzr1XzcZXWz72D8L6SC4rQ82r6iUev"
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
