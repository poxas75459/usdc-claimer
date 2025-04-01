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
    "44QUkYc3tC2bDadgmBCHwdKsqWw3QEiwVhYW8RP2Ckwg3pRXfn3gTUqAFFxzXt5CpEBNSsKdTyAkTSzve9WqQP3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2oNp7vnV3ok2aMcwGaRJBpmY5TJ1ADieJWpuMt3yVf8dRoNdn67QUvVoQLEmBhX5ecnXcTL96kZVcwQVhZcf2a",
  "key1": "37KikmLChYcHjXxz1hqFBnZAg9MALu2AVoqN4HjYSpTt3DsRzMtarqMXYeFJJZkac3J2xBnFDwiSxzxZ64J2UXeN",
  "key2": "2nqaGfkVbqbS2rtQDsctPj9hahwpWJidaGpby49hTfVYnQV96PmMBPYBK4fvRuo5kp5x6eD1yPTyAJtf54MR1bKE",
  "key3": "2oBvoiLUjHYpwPp3qGBptWfff92HFotkL8Nnpb8cxMTkYji7YxJD9NfREqMrDhiDo9Y96rzvJCLSMqoBnbz4xwY5",
  "key4": "4E8rWM1msre1zBM7NkEYywzoGW64stYqU61aM549xXndcgufQnn6YS8JzXnbR9bZKVcG31ZBxJzvGmJ2jREqHZbr",
  "key5": "45v1aRoFPCpfE7ZXhWzhQE23wURZ9RiJSvmsJnEUAnisqcuhkFa7jVDqU2oGAJZngbn5UpvqusDGaAGpYuDRixoz",
  "key6": "2NfnSMBLifdsy5JetEEKAvFULGg9Xhf447dcEbCedkC2ihtyXqgDSiHYtxo5DME5w7ntHzax4jLs1sE9VsfXPfkL",
  "key7": "4yxE2EHKcvisHTawWZ72CtKhZsQzZKtuP71aYEzJ8F2hXffCnpSgsqK8wNsQre8ZNkhXm64xfuVyK9Pj8PmeEvFx",
  "key8": "4oNJkkxX4gYr2ULbadQwsei5iE9hQ5WWK8S73NwbokwwF8fMUJFsja4ZTBuoQBraKRy7nJNfdbwJX2RNEWFH7VuJ",
  "key9": "myrDcjwHmV2TbMYgWEkebkwCBMuZUk9SvSv5st6kUcHsTrgiTGKm8C6fbrL2LrpEgd1pcHSofQNCB93raETzSYa",
  "key10": "2FrHeQwKGoWJyyE6RaHiSxZ6caetUxzF92ohrBhAta5Pkj2pWNVUTuR7tje6Ascoif6xrf4nQyJeoC8XxmSwExUW",
  "key11": "3TXkrGbdAfNTRpVp871PPUzn9Lju5GhbghJfYnQMGnpCK3UhF69HqEBKtd47qsv1iwxr3Vd8P1i5wpurvzMKrTTn",
  "key12": "5yoQmFLZ8iA8RoyHacXgAibF3QDE6U2yG6Z6TnnKXDzv9cATFh16JJSzcrVEwK2Y54zFsTr2HHS8VK9GSc1WMQrN",
  "key13": "2qi6kHz2pXtjozPKtPENUejR8Me2V6ETKxgzwQiByFgMXmAajVMrtQbzjyyjiz3DXfYPKevVeyW4kf3Np462imW7",
  "key14": "5jiURgZDT78FDSz5EGFsAN2wYUa3ct3Nmv3CSJanP7FP4QkscjAB8aP6gYGSoQrSSjvgKg2bmsojv7ZcVGLViDuW",
  "key15": "2CALw8fHRP12BvRVLvB8DdMpMYZyLcxJ1Cq8S1PSfp1judfjmooQhC4RgbKMJU5gGgHrKVBmf8hqwgRs6kwH3rgm",
  "key16": "4jFGftef3n6qJM7yQ4XxiLyVr9r4bcgfoYGUJEgjff3zXuKBELPQGTxbooZ8MEUmiUSX4p8wwP4nnZEtWu7ezBCF",
  "key17": "4RjWTkBrmvcuBZjR9soN9YBNaVtP5qgHYLNitujrjEs98hy6SQFquR1KDoMzzurFijEj8nW3rPeSNzpwKNXrqzCD",
  "key18": "5naZFjEcevBt8LZY1yNMqdWvNsvb4XsDyp7orWVJwBDTGk5xqM8aZrbABwfimj8dnKsoFwW8NsR6XHPC2pbi2FfB",
  "key19": "4VBnduGvJwC34LS3MSPL56JxxWoimTZYEqif36QArnY8Nn1vFAjrYCTHGK5yP7Tp5NuiuYdNVtZwdDEwHXLFGPxK",
  "key20": "2qAhSYXcwrQmxtjHxdHpBpBnwMayD5sfPM1F8vaWkpUsL96BSEWUsuNHKwuXvSbfbLads7k7rVh6yasK3aRUVZA5",
  "key21": "4Q5bmG54e7d8X6Q3VytHeYvLQXWCLBsToR2uG4tWaGzss8TS9z7hjZjSNc1cSSAtShdEabqP2um9pXwMjxceHLmj",
  "key22": "7uQ4Kiz8BDLRTV3Kc9jSFWrrE2ZmbptRZCT4abj7MAx2xY7cnDUoWpwoNJdyxJNn33Ep4YpSFmQrqY6homcngqG",
  "key23": "5TJBuzUycNyLnsvXLomZpb7oSNjo3BwH6EEabE8H1Qhi9QNsyf8Z6BV63Zndqr23SUTF1MBJZTMcvNhUjmepmLu1",
  "key24": "4BQbbkpQXUxWVckFZ7hQtjRN16uXkvn1tMcAEnYtGenXbzFCBW7y1za739Co5qQoeDxWZAfqMapLkj5KmdU6bZ49",
  "key25": "2vAjBaYeQJkjoXfsHGoGnwrGL8MG7rwRAzyXanktiAuPft6MjPnMrvyjrb5avUhndq2NAhJgJsSov5BwFQQnSJL8",
  "key26": "4XnpRYQWpVqreTSrsp6gcvPVYoPo9cmeduRSwAMSXG24MS63u4mvNYuE7sqXKmZRfJ8xrmw2eg3B3a8WEMEYUJ1v",
  "key27": "4Tdqpoe7RJc16Z7nTmyKaSAAazgkTMVAr1zEiBFLYTBTM7pBvDmVc268xN5diiSpT8nFqctAXix2xbVuh2H6bnbw",
  "key28": "4bd1pYSqymNTXqECGRohhWsCbvahriLtuACQYMhLgxTKCPZHxnVNMai9rpVshHJuPqLmEJdybG9TSn9Svn6ZwBre",
  "key29": "5bVRVmNnjTAkEra6gMNMZurUPuUJVFTLqiubJoDDp74pk5E3UFgZC3AkeVpA8VUMoceV8gGVoLKm6xwpGoKe3VMK",
  "key30": "3SxT4drBritN8KMBTeK9RiUXR5CpnhDooyVFFW5iAXx5iTLnz9ms95X2ZHGG24cPDxPDbGDDHQSed7mT51TqqL7L",
  "key31": "28tHmWX9srKF8SQ3rDqmUdZ9HZ82Kdmx5acbBFsXgq5tH5u8GL5WHnA3zdzLCh173obCAejDyizDKPT4dU9puZXp",
  "key32": "4WZHkN5nDSVm14Yh8wGSngGPM2hrJgDHT3zdtWaotXaHZwfmiZ6SP5mtizeZWAec6oHr7v7mXV9cAApKvkz8KefN",
  "key33": "2MBamLuSvD27Fwv1Uy1fE76QWoNcq2NhxqHyeai3wDhXbvj7PgrhjP8S7JwQU5B6CXGNA6EkLjzxGsPGqmRfA8aH",
  "key34": "5JsD9FrRtakz4utZP8Fq865Jmn3NuoYurAutNGbxxGa9Ydz7TJUwSic49c68qUsGMVRSRurFweLFQc81ZhEgfQYc",
  "key35": "3f7Ar1FzUp2Ar1tVmzALkVF6JSCE1utLuTcwE7CWuUCSdEjrfjyXxfGaXXCoZfUccCRabHNAMbN4NFoDFvWu3JDq",
  "key36": "2LQNDfwZKbG75MaFieVqLG6muTjX16dPiwHyiWNfvRoaVc2J4WQTDodfJRs4QeagDtxW2DAGwotLik6sTYzgGKdC",
  "key37": "3TT6QNEy33dr3KsdKAcsNCKSoEmFSiwcLcqNVJJeJqvpQw5yumqncaCcfAAqxR79j6ytD5oCwQMaq9qKhv6uBEaC"
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
