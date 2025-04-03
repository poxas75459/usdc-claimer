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
    "5VUXEZb6orZHTvwU9LaGYFL7iN4mmmVybNQp7xKxqTMKtbMvr4mKo7wfjxACa6JH3ak4h9CU1ywGUGyZaoHyGjdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NB3Tz3ikxzyfLvyuwCR1A2ZcWLnNois5p6SiDrmcrGMaRjmHSnkjwDMpinoQfTgUrw6pXsStXik89QeG6cnKYq8",
  "key1": "8guA3hZxGB2mtYALJqtpX1PCtnQzqstf7TuhbpeYhLSucaExydipvKutBq63q5tRjTx2Fmc2C5HPAEBbneVx2ku",
  "key2": "4cwkp7EKNrK1qbiBDR2sP8YA4dA2Nxbn13Kzno9bkeEdY8HaVYKczHAfJe29hwYLhjpjT7QnNNby5DSBDXHGCsfU",
  "key3": "23LZbahx2UXLF58imvnLD6QitoV9kcxYHLc2Qcdkc2qY46q1RDoM5BeBEDskgBN7jDHkmfYDRS9cAbzAV1LWTU99",
  "key4": "5LKJcAc5Hv2uehz1W24v2SUequC5gLeDzfZKgy3vxy78LjUiczn1ALqxoFuzsoCJhBVxu5DN9rPoQS1MeGu1s2vv",
  "key5": "58LBf2usgZponEAzZtHZzC3DhfTN9sqVcJ7gN6vg3WiUjgfVbGpzhiK71Y3efebZ1Xh3KhNBf892bpEEybhUcEaK",
  "key6": "2G4nTcjmSquZ6JZRhRs62xBVHbw7XPpzLuMA3eqwZxjbdWy4Sb2UCD5UdE7UAycSMeYEYABnKGtRhmdHHM129NVK",
  "key7": "3pLWpJiq6Xar5V2L6yeAGfiht7oBuZwpqYHxgVobio7sFwjBrVdbF6qTeVcqVe4uR5kUeocyXFiP9vWkQLmcXExS",
  "key8": "5NWExYdPF7HmWj3XC2fK5y44jMQ5817DjzajJ5SRaZFgqgrVedwe4GLVuhWUweCnWDwPsW6WnKwRKMR5bWmTRC2h",
  "key9": "67Bi31gHf1mgxDYXHkDhpQJPZEMe9MUZw1UMqR4fRsK3ic3uXernp1MFGJRxyMqRy5qEEBuTWKY1qUuzKPpc3fXB",
  "key10": "5bUFjVGqCg6oFPARWf847vosfX64URxj5dg534CCdBPqkUAqd31qzJm1ucv9HxtN1H1WTNG5ApB848gfiAowRq1M",
  "key11": "2BD96Wpz6jXX4zhK6KVxxSLtZenYvCrLeirNNf7XgtmoaJVBo4SHAWnLcf2ZJ4M2VonwRxqcontJ3qkZufWRvW5a",
  "key12": "2NXhm3kTjEsofCzSVSJYQx4fTVGxVq8JvivbMzKfgkQNhfvHouvGxEndZxiCyq6GkXbTL71YwwxivW7DkbspLMyH",
  "key13": "xRHCmt73S8XoEaqbvvkorELe2QeoUSPTatsXGnPkLZSVnusn8CQWndqzMVELLYDTyhw81f7LvkQ5VDGBQGAPDFC",
  "key14": "2nPPKnSYQRcuTgt66c12diixvHwcctRxmfZxyQALBsTnTQvTM7NaLtDJeF9sqirGDwJyKPWcZCbw5XV2hE78xLEF",
  "key15": "2oWLCz9rjHNLH18PAEAo9nykG35Zjwh38GjfZyAsp21ms39xxzts55HGV6RE3igvouXSETkKKrejg6Hc3PdVSZxM",
  "key16": "2MEEGucCfxFCMhu9QUgqFNfQRCucFxrYPE3VhEb3eS6H9F2b5sWbauBysL11kGXn1ikxd8QFAKYqJs9intDtdqoR",
  "key17": "9y4AssosR35wyb9meMbPMZ6FTrWeRWY7dTLEhZYHN8m1ztE1bQ9rmCNC1NDDNfRTjAZoVahMJxnRdRqEXXZiKFA",
  "key18": "3R7gnuSFbXAhd143bCTBxgugxdXG2dPcsPvNo1ky87QLSLZuibTZKDhNkar6indKYMjdymvdLpKnZn3JAkDpsGvv",
  "key19": "NAHdakZy5n2G38c3ahbqKe8hkHTPDnAnCcMicU6PpEyxSbApJG6rUb8xQPicucP6pVuuNCgtKfVRmTf896LWgaz",
  "key20": "5HcXSQWR1k9ykJZvVRC4ag4PQXfQHEdHDrmi6ELN4HFmGZmyLNexE7rRpjR2XRB6a1eZYv2nEuPwja4vpeDsCUe",
  "key21": "3y6w4YpJguYFm6NGbQd7RsdwionuwftMTeHQTJV2eJ1rSWA6vad2qnDNZnqFZTSdfJtdqv98sKnMgW8LjAXjs9wF",
  "key22": "4Jev4FRt5kNUhBCBfwrFi4LWaBNrjv8CsonU1S7cJtYfSWL5E3Nx3ZBs1iTtaBFATEb1GyJwe4V31ttYVdrX7HBF",
  "key23": "3zKrw2DVZgt9V3biLjfPn8SwoMiZd5v5yXuTzmqnB1r2q9H5r4wivvGEvxoh1C48p9t25jYt6ZYN4aKrzFoo9C2P",
  "key24": "3WTSs6Fe19pnmzPg1b4pGMJe9qW5r5m4XT2aLqM5YB7r1SBe8CLS1VMjhdRuLhAeakmDkVzmFviaJ4hLFtBoAuoV",
  "key25": "4q48VVtFBqnuGjpQiCRLTbdrXs6WWdjTTrXTP6ne4KAisjoEGLpqzGSsSKMJDuQeg6q7GXyNpXvVNBNU844yLmfP",
  "key26": "3ULu6TP5HvBBf1dZRvm1BnbZdh9eqaRqKMNDnU628rG6dZC9rMS6TRi7TZQciaMTWpidwwihKbxaYCFbxSGgE8dx",
  "key27": "4HKMYnLRNcm8iZr6fHKyLCBXbEaGgLCTQmYwZ1m48BTuA1mubLBbYbmcRSXaGZ2NWvQTFAgh3iNsXFB6mnseiFo",
  "key28": "2s5USv7M8eK844sqn9mAsjLnim1WQXxdqBY4kwSQ7BGejzAqi64QvasbhFPFHTkGdR7KY4BooQVmtZnZpt56oGLF",
  "key29": "4bVa5n19YJtMe9eimc4ANi943ndARa4US7gSiCfd2Qqb3BnCFgKawg5G5iK2VHA76khvDrQGJ7NSYtxUf4dTGTxp",
  "key30": "eNkNazrKpgZ2Cuc8gYmnaUiXqrz9eWJetvJKqwEsxgmRUVCraS9RydFoSKAEmmjpaDhmMuDpmebCmjovpTJGmUQ",
  "key31": "4ebWN8AyXgGhFqqETdCiGLHLZA4k3GGyKUeXkf3w8CJrTdsB63nwtm2tVZ7wetNTELgwPE8EcpxqHiWJPZYorBAs",
  "key32": "5YiWJrDujVrxTeupSCFrCaa6hteDpM4cf8y9yug51UCsNSs255W549KKNyVgpknNcdor9ETFhiQaw2XcPmHn4Afv",
  "key33": "2bjY5zqdKRVn9hYa9vhbKMrWEuoi6J2fXMjWBGEbx94BhzEQxGaDsBF7bUBzyeczgfWhRLU1cgmivMKzFrFQApxx",
  "key34": "57L5fMZGXKkpL8SqHpHW5y9PF925CTbh3WKj8aayJusmUsaGgJ9gAEgWpLCryvZyRF7ZvgRyPTy5mRuU82U7AaMx",
  "key35": "2p6wZLEx7FhHJgzXchwZRKNJBHQCnJYixRTxvTkZsBTebdzciLnWXLPhh4J2hNePLi9zkH3JEaEPjFgt19Su5nHv",
  "key36": "2PbQc7ZaQA5gVURpWKC1Zjm6oCiBe3dW7LaYJfFHQmQvBKRaf8qV6EA1HdFXaXAMzP3Wp4r3wSEnB6ZZTk1vdfYy",
  "key37": "2SeC8tbHVonfj4EEfi39cGGGSFBqLq8zNfW6sDfxuXjoqxqN94m4v8udB3HrDZ62NdTbFW9tmbVpM3XfnYEA1JzM",
  "key38": "5S1dzZ4NA5w8RknHUrtgEHpod16vAjaB12BUFJTj2uta6QUmE78zPEc9iwCoJoXBY5Za9xMCnaKV3SMawf3MHFGo",
  "key39": "2rodg1XeRStarmoHXLWKiwHeVtAYE1wUQGdBJJUzDVggbXbzbjJrJU4mmebUvnfbs3j6rJH68DDvdvMtBcsRz2ho",
  "key40": "493TigxFdHG3iGJWYkXKDgg8XpVhu4FaGEMebwP7BU4srvSjphZG5TdcTRTkxSPmAwiWxKJwr1UpPSMVuXa9wmbA",
  "key41": "3Ys4R1VficsuMJxkWWvGTSJuaXyvGSy6B3Pq5iy6fewgTYLmP1H5LyLMffaDQzgw4TnPiu9LdaEw8fTWQLRgHz7A",
  "key42": "5vEHJ1QzCE5tFFCCSqX7BaWGQQ9z3mV8ctXFMxy75Zzvxeytj9GxVwx5mpeft3en3gE1X3hbnqRqjs3PKZikggBG",
  "key43": "2ReRoiVBo7XCgEqQSSxyPNgwebTUE1as1p31RA7fp1Utbb3MsbcPfXzFy8Gr98PNR8QRWPK4xnSYAznUb2BJVaMH",
  "key44": "4MxGHhegnMsJmTYLRT4dst7ajWcwEjSfnS79RNxUqkrAqApRdn1zbaokdJQVSvjBrHBYa1aDtrTXWyvMQkcpYhL2",
  "key45": "ecqeoCJiTp1THmjX3Q8Nhm5SRm5ZAyesBun26AHfzMpvTqq4gwG4bas5EWZV2MFzvQedGMgTMTWHhsNoah7oQin",
  "key46": "cYxK2MNfe5wq9dDVKF3AobUJ1PZenTLq2MEZ3oCv7nR9wYvBrRNLJa5NH64cBSKzLq7NUSFBnDPNzgXwxTJu7NJ",
  "key47": "3MWu4KEEJMRDwu5w5mH6Ke8X5TpcnZMSUQ5161rNePxB7CWBe56cqupmPDa7jMNjQDNMTZLjALf1jasas6VG8Wfi"
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
