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
    "2xNDMZtYoXiiYqg3Zn3TbxvVvhSuFvJmNvESybu2gdCjzBAVWYKxBQx7iYNiterz2XqKrECoRBucrnySRwXWrgYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKSG3caGejvL42sF9gixkTBUgfMp5dSwakjUKfxtyPAwGVVdvEpfb2TELokJbDcHvWtGj5Lf7URdox1S12UMvPn",
  "key1": "5csPJBp9dhshFz6rkdPqKxeAszQzCxnhKHGM8EhzpuiniqyMVqMNsZofS2Yz2MPNpoa136jWx5dosV9p4vP5EWVX",
  "key2": "4EBmL74q9M1zHFeFKPoyUWFWt2PD6VWysN5EwmyfiFZawe6odSyTiUuWMVAHLdGE8CkVoTEJM7ax9M43JFEocuuy",
  "key3": "442S69FvdnsohYN3Q821aYswz4aoT5pCwpdK36SMTjHaK7pZbkmZfUXJdHREoHXRvr5CRGiFveW4WShN1SuVdH54",
  "key4": "mFwYLHfswJD4WYi6unu5gRC3gfQTAb16gtgN8RRevwRbCeowFjTRiu8LJG5WPoeW9TmwWepeAc9qcQBMgDCduQB",
  "key5": "3ZZieD7Wnh9en8qkTt4QTPuhq8FWiPSUPQVziZZLaPhP4R77VvPoM8YqjSb56mdVAUyEyNRDqtr7qeq5gfUPDxrW",
  "key6": "4oZjpbqBmqBeMQxNKUd4P7StEd4dtfiMjfRBpdA5nm5F9LagXicyRdfCK2pYHRT38VPJ7z91DyCyMkbSzQXEYRGX",
  "key7": "3f2m2TL48dHYGhPPjGD2LWR32U7AVU1X8yKw7Kd23aNtf4WeXdv29fsYBkGksZumhUPLPsHgrnztA9WkZ4igHMCe",
  "key8": "s8Qd3f7TyhPY1XdfLCRuh8w3MiepJBUtHeA8VffBFsKQFHQAqDWPakNj7PEAUWPgmpvmq5RzSsTm9C1Z3t2jpbs",
  "key9": "64pDxnPi3WUfwMH13X5gsu53bTWPmVSze4quCDE3YgjUhLjmESqqbqbSXLu48xq71YDSf9oVDVg7BCsdZQ5C6x8Z",
  "key10": "4aA8oePR5kobXgwdfMXeC5EiSHJhcQtTUupcxxXsUySYyyaRyV5KpXZpSnoU45va5Q7p4BQaWKvrjv44zfqNyvg3",
  "key11": "5JSVguRMHrxxcBf8YkGG6fiv8Xx4E1Y5v2hc4d54uqg1WAZTxVT8ZPRM6f3Jrnyg5EU9VfiUJycEh1JKCaGXB77k",
  "key12": "5QZbz6ZinArTkDvughA3MKoY8jtxMVK9t1LuJF3EjMKDB6ddVmEnsWjwFHFGcRuxqU9FMEZVvqZt7bHZYZAocpEt",
  "key13": "twPM5EnRiXpUNFV9P1uaJ4HknV4Ww3xF1rGKyuAfsc5A1yWzY554mjaLgW2VrZxZVFSbpeFminBkAgZ4KJ5qukV",
  "key14": "3JzGQZ4iWE7fYovPEpseWMSoHu3RP31jaP7TiPZN93vCyQDgSyoBX6tH1WNWGRRMhK9DkeuofiT1RSN6p96ba12L",
  "key15": "46E1REiUMCmjKxCQaPTBCdKj81mckVdUeAjqB3Zy2aQw3vHWcU7d1BcuWvZ8dZgj5bK7HMA9ikkcb5mxS4XVciGK",
  "key16": "Bc2BGgNN3MUGfBgyZNVefDUoUUm6doJa2effjsjwMb8gq7UVCaMmLtTiSSP5txQdnKbae8T2xUGogCcMqjcrrzz",
  "key17": "3i3V9nTSGXhMgr2UVFSGtvEQAdLWaKyxt9LqtJTHXsVRXTDTqtp4jH1sBYUYanJQtaV4WzRThceUYT6EnS72ZcgP",
  "key18": "3pZA7JxUbV25PegMaVyBP73cQdADE6kHjyorkzjrZ3w2QbiMKvmp2wdFpHuCLFqXPpLTsvuT63RjFdGfP5egVtw7",
  "key19": "zC72cRuhEoowuoezE2Yud6c4FnoyMt74QCFfHcBYm2YnsHh8z3QzcViSP62frDX2EvbFGkPgxaz2koQKy9GxKK3",
  "key20": "2EYDtcpJvXto2oTG9MAqJEuQEnNpEFq5ZaLinfD1rBgfMQw68z8k6AavmrFYhS5vnir3BtiR3bsWDsk5TUDgt2Nj",
  "key21": "43RYtTmXfhqVNoV6aScUUxyu4Hwbpdtc871aZvcHo9feWHwVU4Dj4etCsmzEAUvMn8uwEgMz4ubrk2YDWDp9bn3n",
  "key22": "jK1F9YgEp9jJstXLzeLHPiL4onyQChE2F2mQEmUVBP33THGdfXiNQA7QX7Cgz4SadnncCzWaXV4NHJXJdcZLohr",
  "key23": "43N7FcUYk33LnPm7Tswhae9v4Dcft2LE3oT3QkUnViw54brQjNoZJ8x8Z2YxSGGMQDP3qDrvtpL2oqiscbCL4rTx",
  "key24": "39xJDMa8x4JDySHErbTTNxcXBN9oaxp1C59pWC82km66uynSXgXwaWXKusvp6DCtuiQgE4Uf4K4eEM962tcnu2st",
  "key25": "2pWCvDokEqSHsRxx51tajHvVz1Xfh4sVC6aYzkKTqqXcsmbHnSzAwSBENLywD52rrfRCBGWRV8sNtaPPNt5rPerm",
  "key26": "31LAHzwbcoPNHYoJL9Fx4cL5GZQgeacU6g3nferqTBENJFeidHdsK6nEW6s8t7KSqPWy6f7idDwEaoLrMZg4xts9",
  "key27": "3ktqspatbDcJSh7XxTrY9nTAHSqRcppjyyAuZaw8ezVta2SBcvGSeKtR1wzAzx2qKrVTofeVtYRpiCeX1tJqmorh",
  "key28": "5ZeM5M5JUr9SprE9SPwMJhy655XaSSnCj9N3DKKZNRxtPTryFxGFMvTrbmfg7emvpkQXzDQGkzYq98ukTvBwd1Rn",
  "key29": "2G5P413JadGVeTtqpcxq84kGSHqvqsPMdXvACYHBp3BumCsNMfbMd5eohuXSnU3sdg41YpFP3jrXjSxQuoCPRiAQ",
  "key30": "4BxkuJUQ7jASXFzbGtHYUrAfHvMrTWdiW8h5M9ik1BzubdMh2nX8YNAsemRSn7ZoqnSMHdQvoToCu3vEEph7rgKb",
  "key31": "3yciNFHu5CGgmYAojyCd6TpgENzNUyVQyWZPbA9bL82yo2RqaYrNzGnbc5xoNxzsa44acQ8cFYLnptQ2o7sczK5D",
  "key32": "w5C7sdHoZRTRYnFCCtFDGx3Ks5RmRhxn8JQYAQjsahNbYwbCVyWkNR5YcP494xhTwrsraR9MCq1ze2rfdfwhWBB",
  "key33": "r8eA9zxBzccxbb4XXba35HLeC8xmBRxoCwyDCu6v2dax8ieUGndWJmK4KYGNUdMYjRKayWD1ebnP657sGUCPcwN",
  "key34": "3iMCBfKrAVk2EFJfPcNgMD6hekQx39xqAXuqipTm1CvizfjhKvzHnRteqUdYGuAp8ETQZkUUrv6fcQLCfWKcGwyy",
  "key35": "iKiJbwqCU3GRENeeV5Nhj8VARmjBeLi9CSG2Qv1uCcKNf63GrbvrBhbkL6B8SRAvsvMK9Wq5X7PQUFbpqHJfJNA",
  "key36": "pXsLdjWq1LnSspjHXfaiJShnmAsC6MDFnJvafwpKKbzdpUCrQ2nRjZw53GcCwnGmrjbEeo9rdELhHj8X1CH3nHJ",
  "key37": "27FLpx8TjqRE6EVjaw2R3ruNHxqvsDSReYQubxWK9qNeyU1HXo14c4PpxhFNWC3pnWQREku4ZRWiepBVVMav6uyJ",
  "key38": "2QUe6NSEbs39fMGBWVDA3WcpK9oUFHaw3EHLVw6Zf9pZekrAUYX6mXJ9eRYXU3R1FWrKacFw6nktq3LgY3by4gQ6",
  "key39": "56D2sKKeqQDM1yhWsxduAeQszsjz8QgmyS3P1fHkwGgYxSxES5PKD3emuAxjxyicZriAzc6GwWkix5zDCZ8uymua",
  "key40": "KjB5iiVGRXPXbmoJk87m1vyfZzZ4xNtuxnFeizA4Gp5z2wowesveesm6PANe8KckDsn2pKNrSGvMPAMWUhfr6zL",
  "key41": "YWARR9Xzc2yL9a2X1o1aH6pK8zxwWu7sjCgsrBrbYgKX4yLXXJ4Xr1t7PAaXCnAxtCkQ4TqnSL2ndur3uk48QW9",
  "key42": "EFyDNuzHEWPpAfNpkhY4L33yZSHM3CfjmUHgJDuNejG5473YTecKEifefBBqmBwfXrm1792QvVBrTahLFtQ3K5b",
  "key43": "392AU9Gr8euvsWfkzhYLvaxxikJoaMtT3bp7Kfd3tvKwZL1Gu5QtxCUn9YT9u8YEXEcFvcHT3yQ7j3WxN6meQ888",
  "key44": "3SJ9uxxDPDcc2ziYHW7W58CLLLZP6pz4kTQaZqqsBSYmXWmAHspUyo1VX7YKEQ9VHq5TSGsQJkQWQ6HyaRX4dfUw",
  "key45": "4GZRVES1Xog2uDRAUqkk7id5pCGCPLBGcoWsJJxctiXkg29uBhYUXjx3J9XqG3KguoHiofYh1s2n1dNg6SBVJ5zq"
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
