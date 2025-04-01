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
    "5tBE2sroPeStdBvWXrzx9fZ4fK5uUcqnmKHRpkmbpP6megWS8wDVpkhSbeFA6vBf1VLeK7Z5h7MoGBM1fm8o6eUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YfeP2QbX8V2VPdSVPh1VTeXDwn4Sah7Z2pRU8ZZYrEMmh3T8TAvhCHc64Pmc28swKbsJwYuzNx2JiYoriFiW57r",
  "key1": "3xr6UTqyNNaNvKPRYuQ1kkFZ8P9Se6V7uN38SBQTNxaLtaBS8DBzCSeRjcmsrXRKaRxwqH78ZzoGAQULQFmTTTEG",
  "key2": "3arDxujBao2R7KR1zq3hQamvUtMLXfEKr9RFE3ypwZxNfEbYbzfLbWV3U75ABf8dprvbppGhDsnuv7yNK99CzeL3",
  "key3": "4dYFuZ6kw2esMdcAtM9ZXdPZ1Yqz8t2s4eMUU1RQZjZ1uj4d1m8v8TzNkybkZ1SS2hpGgj8axR7cctMo9oX5kE3K",
  "key4": "4AciQdtQL9ssnuKCEtUKTsB4USX5uTRhriTbPPU6v4AgYEqDP6bXqDE1MWmMYuVhj93J4dNPtTtF6gkuVwiRAAyi",
  "key5": "4mSgWFbwomV24ETW3a42eumMbSAUnJDn1qWhkvbCRfmK7JJPP29oUVWyRUANJUzRnSLSJ1W7kGrQegdCAv4vajky",
  "key6": "EQpg7pFjjCYcsLHP1jdewr4yPuA8taXWfBtPgmieGZrrTGFHN2onJeaTz3EWEqnoJTLaVREhXxQT4iTMYgrJFnB",
  "key7": "42r1Fv2e3oLUzAk5XGsXkMPv6xyB4Mk6VN4XRmKTCsagKp5zBYz7zKA5HVhYn5irNH1kZBfbQpm3ZH1kkKMh355c",
  "key8": "4KTkgwiTYYg8rs8bUnp44uGguk6XBaKADnqYXdrVkPT2Fn7ZoycSJ4wRmU7ixxJQnB1HJGGwHFU2Pkfnrn2MNGD9",
  "key9": "4sqv5wZcTKWo9dMfLkAgyPcRXriwwjjvPA5DcSzZ2dLVvA9iLoRbsBs4tTXKhf9jnd1EHL9EXrSjedMTLLYL3xv8",
  "key10": "3cCHK6DTKcFj6N9nh33XB7zhStvEsNgDC4ZxfuoYot2wvtFsGevTLMAEEYyAGnEaDwjwwYb96sUJrxJvzRct69Bb",
  "key11": "2NbHgRK1a3bMJJjjS3xGHBkGeczXn4bwgt6g9FXm442BkLgWSyc6F2kuQRZ29RyUav27tRyuHx9Tfc23jpn5u1SY",
  "key12": "3jV2y1AWqnRM9jF4ZgnuLXVdp6e2Jy932b4rx6hUTeU2uN6KdSAGbpTkLavhJW9aGzLn35a5kzUZBMhYeKcQjCD5",
  "key13": "3XeJch8axSU1sYnWDT9xDmEWzNX1N3T4GWDGfDJhK4dh3bkjkNw5JTkVgGHMPtrrtqAgrH4yGim2hpUmvvRaxKTM",
  "key14": "2k8TfGQrHpi3mPjNej4NQEVzqkeWdhAeZXyz43PFfLs2Co3TTjVr12g1ZWFkVNQgNZESid4d69u1182BNuFcwVM2",
  "key15": "52s5vEGhqTsGdWj8haYgJWLZ8QYEFehs22xEGM8na8Gxxae3iRcoBzuUKQyfvJKgqwSb81NSk9xA8pSvXsxHEmmC",
  "key16": "35ZvdhL6d6YxRS4PnKHTZeH9Q6goXa5YtAaMDgcat3ouXgBNCg8dRv7GGwHKhEtU9smqgsFWdvTaapNFqeDqMdLu",
  "key17": "2Dg3RqstP5asYfgK9RFdxMeuPwYSptLNTtR1ASFF5qcvozzbGnbNbAghoirbSTQpttXov9TD3jRhnJg6TFkggrF7",
  "key18": "4pjvBZ9Z9Yht4Lckv9NdAy2JfpXvSBgX1seCRAzCA4j5L2zWNPHhu6inwAgajZ1DmanETD2aUDJN5aDScpYLgk7c",
  "key19": "2uyvx6zcPxCHvuo4nbCbFgsnEHradbFguStFtW3TtBG99N3NE6GoCnnL7NC3EBavmyuwFGSAioDwPeKa2goUsGi1",
  "key20": "4febo3NBBo7w1Lz7bZhsT6iY7SvxMJhZguYsxCdnSMBbFtDV5KyxHcLWAoBsQh9k7jUqTapCvmkdQFLA5EFazmkG",
  "key21": "YQ2uHwYxHzAjabhFZMvU8ZAiwdovghaDztjmE3RB19KsHEhwvny7fZ7LCA2vgoShxetb4dSgFQtKbpL2rrAkwZc",
  "key22": "3F429CA11EQuqBoeMquvSnHeQtUkZhQRgc8PstLp6MfytSmmjsPnh5avbWLSxowncnJh46akUTRgcTWKABXuUHYc",
  "key23": "DBVLjGks52MvoMtGWDJwmeFa8uBzM5j6YHdxJBrKcgCJEfV6gyA2XLkGf9oQNs7LU6gQ3pZe6XYKEzXdZsvNKXy",
  "key24": "4K7qRDwqq9iTkuyneGRQUjy4mVt8Sc4DkgJYyy7eRaHtrFCgpKTX87DRRCwcLFyd8pgoErGistMm2qLMVreweFRD",
  "key25": "35Pe92w9oL3K9WRMxEhNHDRzndMMT8Hjq9ZtaP5Yer8CiyXwukeYUDUMF8GTzSNeeicKF4FFeVk9JCUghjPktdJj",
  "key26": "292gfkgR9xxo4hfhiA2uuAmPtNnHCXwionCYgQQnMqp2C3z6r8HT9Ur9QAvRajTZsg4Kcz3ZNTrngW9q1DxQt6v1",
  "key27": "22U1q2EyBDge1DefvrLP3WkYvKphhEFx8cqNgthPPS9yVG6pN7ComEYgpaUFoCsWYadn4Up8BeSSfDAfmTRKNQAK",
  "key28": "3pGLauSMFNB5z7DcRUramFSop7qduCAY67jsfgXiwqaSci4JDwHUCYZdfhSXPvds58ARaxYpU95ES3Qd8HSuAcTz",
  "key29": "7iHDE1Lj1iMPq8rJS96y3NuS1eLVuE7oY2rv8WGT7EuHSQv7PWGiGbnc6Mn3YmZ51A6XtEtVsXDXQkHSEW6ETuc",
  "key30": "5m8MCCwvZb3ZyAkvjhqSCa5GCV2aW1qrQmUSfdk5U14JeDkg61f6NJvFa4d4n7X7W9EY9j9JZ2E4gayokRCbQY6t",
  "key31": "Hd41sbcoGTUVVeWhrMkHncYafnnQo8qyxe6bLd1a6Mdt5fbcFWsWxrrM4Sg5uxvGkgeb4JpFPopD99GRoi44PHv",
  "key32": "2aM4G8rpDfLDCpqThMmixZVA3LTY3viRR8KorwsChDtkJbiN32Bpdv8u8pvWiHYo3kRwvhVQc5d4Z4kL53U68YNv",
  "key33": "55NgpYbqfXEJR4wkiyNQVxXdmnjHDS885pF4uMYmsh7VWFcLmBvyya3xPdZKEA2inuaK7AsrHtZJc17h4wGGYD1b",
  "key34": "44zEM7CvgAbmco2Geaa1P2YxqknPJx6V7kknubFAyZA1XkuEg2jBPhbBRYRUsXGWqyxezEwzpT4nkqcsAiLRxvh1",
  "key35": "5Hn4rjzCFtzjbLdULnsy51EFQLsMRn2Eo5YbRGL6ZnFCBuQ3sRe42G7WtMp4xBdboh2oX96EesWWGqY7edspPafY",
  "key36": "3DRBV2ek8eNxpaapjBUpVZGpcdNq9iNrKxvm9bZYHzYmzpSsRVZhqgtNfUypeNU4Ay68NvSEodi5dfB2eiFt5a43",
  "key37": "5SVAgNgAQJocvLDPQHxA3iUB5BUpkwtorRNi1PDjSE9PXLhod1tfPdvS7zbwCt8hPLQZDFagcmUHkXv7X1v6V1zs",
  "key38": "j1stH3JyycEWZYfm8LEdeCyC8kZGVzkmkF3xh4PvAPNbTuBKVUMVJi7G7Pi5fzUqFBuYMSRwm8oz1tmSGKv277F",
  "key39": "wMwE1WXLPBhtkSrUxP4Q4u8219LZmtHXG1oV6iAgkjGvHyuTF7xXPRaKF9Qc5gkYfKxyQKfzCTN5i7TewCXKgXC",
  "key40": "5kzbzUwzqvp7L8Eba8AJedvAS1Dx8MNPCWWYiVwTzQtTKJKmJ7c5r5U486cAwu1RvjhoRonKJyp7EvzzurZZMefv",
  "key41": "36aSmmrtSR36WN85MkGqbKJKLY3opqNSRCfzhvhTFVP27JRaYLETSbzCdb8ohZCRaBobqic7mjRSPzu5MC1EG9Kv",
  "key42": "3G2bgDPskrTwJu9gQDjr4FjjhBPzdB4RWEPr2wPCnZwupSTjpbxUNF5UrHmiSKbCvHHMt6UrEH9U42iW811ygF8F",
  "key43": "4f8nZtpRZKYMSJz3wHYFqDdQco7p2D1cpTnFKuzEhCMdiyiAHtTrFGj7sDxPnegMnFgkKTPFxYAf95b18ua4BSmN",
  "key44": "4TPQYW4TFeE1Qpwipo3CUrs5CZBsz6pABvdXRimtDPibJU1UrmxpLZt68hdcjRSMsstNhSEXvwKbrHUnArykcJDj",
  "key45": "37nKGQJ49GyiLL3bV7GG7z7NCskvTdUNmz4fT1inFCeiqg9puPshvL4FthnfviNwTigZCrKkpSAvLiRLG7ZNu6rY",
  "key46": "YAvpvXGJqEZTxLpYDoZ9vWEXW8NbQQniPJYfz2bigZtEBbZJE3n5fGXu55jxk7HqGxLnbkHtWxdUc9jzD8Pd512"
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
