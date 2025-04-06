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
    "MaEi8i13oRJsA8kzcZb5nUsWPVdD7zyxdBzAtpGsGknJTGGyYPGjfMvehWWJ4xK2Vxxr699ozhP1ELUZsFrPUVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyHifUwHSgxE1H152BKi5Y1vXpG2MJ28D1DAsLxrUALiAZuWRWpG9mQdPy8JnC9h9qPA6yUUSLKnitVsAXZ64YZ",
  "key1": "5ioRuPLWPmEHRU56EvHFRTF8SDd1qs4LRXVb9uHuYbbbjVyqSeyXmU42RbgGARwD6doXsBYETsxc1u3bCWZbrhRg",
  "key2": "GGE99gEMZNKhStv5AEhK1AdjMBhgNcXPa8GGBvYq7kRPqSG6xNvSQbfhRun3aqmRHcm75qHEhwyjMVpvV3STkZe",
  "key3": "4HPXGFtrPr6E1rTVDb17XWS1ZteQBxKK4a2jKjArPnQxvZZpS7Fh8LxLE9ArfxRjKSgQWf6br8LsyHQJWvB4ub6W",
  "key4": "dk5XQFpRT6fUrL7gitKJfQDvWGCZWfDmVpFXeqBtnECdFov4XwiBxj4YYbUoJTRBCYAGp5KffV87zw1BWDMvRTR",
  "key5": "nRApUJUju8r7BVrz9kmgrPkzTAo1EaZir5LuukhVDwFwETUBhVLWC4XVQGab4x5FaU1ALUWKKSibpBmjidKbTF6",
  "key6": "4R2H2Qbjoak2BSfVuRYbbso2KoBGAJeyPj2JLHTSHYHAchQwVGDpXB1PxRgFdDykENMUpdaxf5nH4m3pybokYopj",
  "key7": "4AV6w9hTKv6xXubEW1DcjdXRGaG7QHFtduhvJrqWpsz9F4HYXhTGELXDLzYwVYv8pF8YyXbYBxh4y41CzvXYAvYS",
  "key8": "27ctNmBWnsbfFbSAjnr2qWqAc8vLma12pdYPuUkzJvoAf4WtaeEp93NErg3zzaHHGbZDwGdUJjVKVEKNSXhWeebT",
  "key9": "Y8h7A3AyWiWK3bMp1WYeancxJExouLFiq2kvZVAhB58QcPezE5bQMovgg431R5QJW2zPWqGP7jNHBDRFaV5Krsc",
  "key10": "4huWmYc114HsSrgvgGjAqx7dihPhPGMMrfcxhk99kLQYuiD9SXuXG1F2ND5StojsdSCQNHgWSD5PG3ysXMuLHR9W",
  "key11": "5Qn6DDwnujYPwMnqA5pndhT624u5k1ZdF9Uipry1Zych3xMWnFFkGwoPdyf4ubC4S96NBwSkCr1ufoeYhuwij4cv",
  "key12": "5fR5HdEyiV9ynrLev9Y6M7nWGw7GcXG8h11QfBePHoE7om7iu3jsvKGuj66VdU4LhWBSBvbdJTSZsCqsFczPKZEU",
  "key13": "4aP1Lp818ukajYer42n1U8TRkAydMyeHdApnSh2CfCi4mXNUn75XSeXxMkADwzLTrHbq95QipZidngsw918QdURN",
  "key14": "CiCemXWQZ3KQHCvnV3ktLsK6zkQrYeVNyytfYXWDhSS8WbXDxpr2UrXmdQjAkmWP5mfVTbdmZVwoSx3rmCaPvN5",
  "key15": "5NCxpnA4P7dugAkBXGWjKzGjHWPdtorVd1ipVnHCceyfXebgYo5FwJ44PPEGg3jL6Pb7HShyKndu1PLCAZn5CykV",
  "key16": "NDGHixHWwBMnVRpc6sH112mULKnLQhiQodQcSrADA8KX5vz77NxefNsktKQbTY5qzcw39ocCYk6e5rb77336uZP",
  "key17": "5k2eDZtQ6jVNo1n4gxBEfHP7XifkRSierbPgESv9nG4x4exbRRc3KuRmNiMPWub9KrUmN2LZwhgC1439p6yYFRLw",
  "key18": "3ZYvZBJ93STDGYDgsFbdgZqdqNWcsVMoxofxAyg2jko4M1LyEzXqk3TYwpwrLQdwroZMS6rzfhTeWDNs3JnAbBKy",
  "key19": "3G5mVzEENjPm7DgzWBAAQD6ioUc1KFS61QRcUeKfuNNybYCuQbivzgkusghGzqmisJPkTzw9HrHyeZmGG9cF3dnX",
  "key20": "3tgBHAmv5UiV6WsbVAKVkCxuKHNsVa9cGt7r5evo2cwf2rGd4VLXiMLQNfCcgB1jNfuqhYexB5D1N4iyvtdQ9WFp",
  "key21": "EJRo83ft8xt2ZXzGQG5tu5eSZTpLP4MFpsTNtDy7nm96T2jYBfhDKXQRGkG7kGLf2QiWsaB5iPThKKx59QMgwNV",
  "key22": "5NKWbcjGWz4GbFrZxVL2rnqRWyFWwST2ymPekhJLCGwHh329TpW6yJzGZpDfnnky1f2qUmNJ8k1nc5mMML7HsNyk",
  "key23": "2pvQpoCFB75JmVP79tBw3RcywWCcymZHV7Bjmyb9yGFiPpRoXygtZgzxUKAnushcwQ57ihrYJ8sdiKHKAb2uWkoZ",
  "key24": "5dX3nDpxhHNuXAuZH31E885CLo9hpCe1vLQH9oz1ew3g6FWoGiW3k1YgWfuhRtgLPpWxouTHvFfusU851n1KS7kD",
  "key25": "5pD8YoVZykVR2hMA384f12tvzwecSKH2wbMjYxDimwUtWb5CebFZafDJvctCais8TZXGGzNV7vBUNQBSRsEEJwVi",
  "key26": "2DSMJNHuxmYpkjw5MTG1PsDjaBixSUaMTLWddLetksBis7ncDrYVuqVZuNj1mWPJvMEHxznc7SibquLdJ1vvEhqV",
  "key27": "BzWDak1MqHJCfy77RSnkrq9ZU3ukMAgbAF66EeqvUj6cJz5Upb2t2QvSGcDkeD62pmstWnHgTPre2zQMNEgay8K",
  "key28": "2aLYA1N4QWHESyrnq5fvzueLv13w8PPU4P6A5Jrd2bAtQYab5w9PDnsFGQCpNa3bdGRRdSs8V3aRkiKE8QDX1KZZ",
  "key29": "4aB3aVcBJoCgKrZZocmqtdhfe2phg2F2NgyCpY1J4ynC6umMvB8GZembu5ZkSY16ui2N4tgVHAdWwxMpiUnxtSGk",
  "key30": "8wHrTx1YJhzVKNn1mxdFoWp8ERx4tgJ4vVpV2LfKrz3urDRSTHgPC73j62EXRQjYsHH9Fmy2NLVhhWWTnYHdTeZ",
  "key31": "4mMpahyPVEChXjcNLFd6wx6Lo18eFQFAq6T3meb1EHfwYzNycqWQJrgpAwfo361BpteqYCyHT2a4NXaN4ZDCu15B",
  "key32": "5aomKvgEFLEPZXVVcdbTgpDcS7ZceSwwSMdhk2UXdTTtPDQWTDaVfBMeb6vM952ZorP5GDkFq857Dm1qod86NKku",
  "key33": "ZVPhtj6Vwtu2ntjd98Eef1o16QQTi64CoDpEPsskY1T3Qkt6Kfe55yxhGMKyLeBfc6rPNnLTuxRRm1EC1mkb2e8",
  "key34": "4fWaZAYjo8tzLJbAsGyPk6p42AQy6ciRo99EK9mZTMreUanasGRXXuRd1bSU4uFvQMPShCZtyvmraym2qr4oQMEn",
  "key35": "noG4RPQJCYG4HaSUJ4UnHRb97VCguAhwprY1NiTcFFWvRwEN6K5EBMCUyEWNC11UrL5d7RwWBPnFgyNyqJr9G4f",
  "key36": "2whfsrH3kbEkZfY25TFs4GCV58ay5Z141WHjHFH9hj2mJaEJ2UDaK5nnGsukP5AaXLG34Mce7EEnpay1T3x4cBEc",
  "key37": "HQziHwA3Dt3iX8FeUhES6hwsXcdGjSt9aL5vUdeiEQ9qjCUeTMHHUAixduSgrS4sYY1EeAJhNGqQ1QqkncF1pRi",
  "key38": "5whpxA7whPzdJxGpNcJ1vDdbPCUNG6dkegEVbBPMVRftQ3ka3x2DPvmecJmhk9isVGNdTsDLmgP5o35hyiFGyeYd",
  "key39": "2U1B8W55qsTGoLofyvzt7vQbEJwvA8aufp5r24vTgHvTEUKasKtwroMJMAppLjWs1CuME1hhHFkyD7dhZZ77MpTg",
  "key40": "3awX3vAWJ4z3wUyqnxFXjB4gGuDxLmPYSZw4jKnukQePX857x59YHXkJkvVpSXrywMm5QubdDK8Fo1hWDmNLSDxy"
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
