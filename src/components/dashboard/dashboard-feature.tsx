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
    "2BG7G1si7K8bTd4EbVR1RDZN92cMKxtSQSjHXtEoPNhYJPqGvZq1tSFeHTeXJhkyyZ1yfrsbcZoRZc3u8LshkP8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nD9VFtWDWXr233AqFdXA4FxywxWgLQ4fD7zxEDtUMsufwBdqaCxMbeMiL1UofT67PYHB8yNnNWWY83g3tJcRM32",
  "key1": "42HCEhhYmo8itY4zY5CFFqd9AcAFrnALXNNoee3YRtaeq2Xd3MRjsngrcqPHT5tunpu5HaTKvShKG9TN8QTN78F9",
  "key2": "obukNmmKySzh7qjQkFgGsKNZWNYDiYHf4cHwuDHkA78F8derDLFY2xcJ1dQJ1Yz2tBxNUvTgbyBE3stDpW4vrSh",
  "key3": "3HKL7aLaXyLa13omffCE1x277vjFQR9PrYmvjpUVDjSfumZAh9XW1Fp76WKD32edPNLDTVTRvsVGUeY9sCut1hn7",
  "key4": "4ppMN75PDeD9tQwiHZAFTzanhx2uxpQ5yqDRJVSJ8Xq2KaHgsGjcj1br2kdiXSRdt9mQGy8wT4mTjV8tcC6wgRB4",
  "key5": "d9YNQzX39mkYA2Py388wJmAfubnNZdZsFcwsTn5pQiVpAfW7psXPPK7NSv1v59zR8LmApmnnXYub5BNSRvBsEug",
  "key6": "2Ex2gXh4AsLGCnUVHYeG7TmcMGNtbFn65XMuzHofEf53FYN5SW7TEA84Bh2GSPqoM6vVEP5fvKBgwJtCrmVCCTrg",
  "key7": "4RRzLUtReE4DsVyZD1KxfeMW2Ku5UHapreSJH9Qycc9Vp8rwjtpfvbuYCjyPJVLoVNSr9gvLLU4Djwnru6b7Bc7h",
  "key8": "4LBJLEzpVWQifkjLhaR93zwPeQvoyCh8K2sQ7EpZvwZPEjVwNpWGVjQwukoo13cAhNacNxGtMKdGtG1vunPTe5Ss",
  "key9": "3ryxy4NJz6xvy6tjBEFuPW855yoDprAHvbGJFwoifzZrkv5JzWn1DS3kjUgV1WZTaZAhojDmXFYJTxsYggQoGHak",
  "key10": "Q78Ay4i2KYGmyrKC9JL9Ge11qj6r7ZC8Nok3s9YDbzUb5LMiXYjpAGUU9cKCwMJoWbjugEvvYc5EEhrr7yB8vjz",
  "key11": "CMuqm2jQqRzDPGctZzeaWbHXh6piowvuDo2Yp2pzH4N5BLkj8xN5HERjEbNYjXZNmLWWzPznSL3Xt3EuB9gXC8e",
  "key12": "59vzs9oBzp4eCngjcQfrQGpHy9EJcCTPraKHT2CNRrcbxbGJN86Sgk5x8CeMSEaM1NGbguH5b5ZxnH1BdU9dxugV",
  "key13": "3gm2jTtxSqFBLr3rEcKsmHoMRgaGhPmheyGTFUcE5pJgkZoFonpPdNNB8D1n5Az6ePswp9fDvwYu4uCQc1K4V1wc",
  "key14": "26sJSUM94hNKahF6TizFkNeFJUq7YZm6JriGVvyLvVQ1T9nEXmfBgSStQePZ8XFNotgRhJzvy3kaqg2woJMsBJVp",
  "key15": "QEftM6iwJAwpSmX91eySwsA6Gs855VTzEvW54CghVnBzZyyCWcHWsDezKxk7hH2c64342sUCH6MZbJAVThZsRW9",
  "key16": "54zPefoYRdeM5ikk34MrYceYP6JoTtuCkWMM2Qc9pLtNWHV6Yk1wsBrZXSy3YwEcrH8LfxTW1ejFPFizHdcHxSDp",
  "key17": "2RuWViJFxPyV5UbDBM9mYAF2ZbSe7HR7VBGGiXwsCbMifnm25HMWKtnRNFQUk5VEJ21ubu3UfqrH61o3NexEZCuk",
  "key18": "4DkRxrGpAkD4pTMCyz4M8nX2sqa6bhDL58s6TadSdGJBdftFtW5xFogbgwFMnsUA1uv3F5aFPTQH54i1DPK575Eo",
  "key19": "4uYTNasmo73YxZ8ch5BkUzbcXdL54HQrVUi2RJ8Ss5wQeghyTyvz2BND5hpcQXKuhNWDVpTjPxTR31FFpFdiDqmw",
  "key20": "4p21KY7anwbZ4VoTnjQo14Gi61KR2ekLfKH6mBfKgDq2Gf6dzZKJfpQJizEUxy6Dr6xznvsCHr7GY5Dx3KKbapzX",
  "key21": "ULbAusRFtFVRzKxgemxt4gH7bxBFtpp7mhAHcnGSwGUyAHdwMELU2DvaHjsaqEhSbLUdrGuEt1FChqKhscfdMzq",
  "key22": "5FX2krU237sVJFUbRnP9ba5KvL1M1aigf5pa7unGCTZHxCZesTNUgXnyF3Wp5mZMgbiUs1U4YtBqE6xLpvGbHZLX",
  "key23": "5U2kXnshjA2Mx4hemgWr35533Ca4DhJ77ZjMWf6d5cqK1NxkRjvAQ9dyMCQJrGfcbg7Wo6N6NfhWZVp7FkLZD4qn",
  "key24": "2yzTfs8FSpUyMtNFidysLN39WPwbrWXHzRtHHkkAkT8aRXRCqZvfass1KkTRyKi1LyebQUuw6rjwRHkURREHvhCn",
  "key25": "4dPpYzzSpce6XinDMx9BVpJKBQZpN36zvjk1tsCEvvDdQMFWmz7kLcZAR8wzQsigCN1o2agkFvRtUvRFxKbacjzV",
  "key26": "21bCmZ9wdgaXkLhPibDYJZuecFMZv7eSyj8cVxgdCQ2PsyRu3Ma2fJ1aFt2HRvGA4jNdRucnECEaYX9ky7u2Kvka",
  "key27": "4yoHpvgNyGWodhWy4i1yTX1NpbyrUHXB8Bmr5j2w5b4ev8TKbQggAf2q9jf2qt2DWSFo4p1noh5H5x3AsZyCtmJZ",
  "key28": "5X6FyU439aYkBkUtGhVYGw9RfgCqPH4NjYWsCy7DreaqgLYeCyHjEbCP3m1J7ahXEMkGvY9m1wTVfx5ySg2ho5xm",
  "key29": "2kouXPzsvju9pZhSdX99LbUepwp6mbuFLBLzeu4KB4axTKZ8TtohpvGivxqDvAW6AAakTdgV7khVDZYAhtfkY52d",
  "key30": "5qWCiyuoKkXjy2KCGa9HAYrauXZkCCLrjVSPMFxpKvi6C2BpgfDdUdQuaJsrV2p4bTL8Y3j5TEHyKqj5eC6iHRJc",
  "key31": "4MTuNFcM7iMFtwyin7VUeBQB1RGTszJ9Y2Gf8tc7AnDhH8kyd1oskkKZFBmtcEYnch4Z7YXo6RC5FfWASF32Gfm",
  "key32": "423Usw4nkkMPWic14fBEQHVcH8ybjf5a92Vupo2TDaZj9DQVh7T5c4jKEF9zf5s2D1SxByU8MYVe2qhiVhTTVPDE",
  "key33": "27arfXJqM2fU97VYuwnSLsfMnygqCu6jP75BobH1ABuEEaBgHbg2PvyBM2fZaCX2pmD2WEgooLcngsBYCnrdRH5L",
  "key34": "58orQA8HEpPmttwLQqFL5ktcBQdNa4c9p6yGT61E6ZPchAbfwYF5x9owfKkipQLHnNeLm6UvofDGYGNsbaLJuGNx",
  "key35": "2FRhKf2XkTpdJMd2FFe6tSp8r5GCoVxUvXWD7ZXhguZnSis1jZTPZviJkG3r7puSf8m6HBHCnDfLqkmRk9z6F6uE",
  "key36": "C5DUnknCZjP213X1zY3ibfth746HCq3Rx55pqBukZNLXZxgR7WMKeLh5sKBoFi8HhcENuUFjRk8zDPy8omEy8dX",
  "key37": "3uK92kQhpS9pEdAw8EZgQ7osuCc6VaJmSUhkXY2dRKDt8UEdWxNj3XZe3E9k9uKRWj4rZk2wyEdVLFBiV6A74CAT",
  "key38": "5WpE84x6osh8dKBbVr4EJUWCPGWZkEicFkXcL9fam3wBgq2sJhUnFTVXZZigJsvW4A1RBBeDFMYHH4tU9kVhFFUi",
  "key39": "4w9NNATPVKgeyx4n6ALcTo5XvfWdNfmgeXjDFZpAjutEiKwTtFR2sub24mRyy2aV7Quf7njWGAPPotHTRrWrykvx",
  "key40": "GdJ4ELVhkmxoqUxsc9KFPPunfZVMWnfbAY3TZHb92SJP1EiKE5i4y1rTN9HmqTHakTmbYB5LJbWqgPzwnakq8RW"
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
