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
    "GaugcUfgbHLUCkjsig2zq4wAqbSvnJ6QwT9rTtSmDnJ1H5XuBYWotK84wuqvtPaz27zPnBnaZUF4gGAPXLzUY2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s6yPHaTwiGzUCMN8LFLL4hiPBVWwip9kH2C9nac1o16bLFvScetBPVSbCMG7Dx5YctTQushpLRVahvd9RCRk3NJ",
  "key1": "WdvNwBGXkQyYdaUuqxKq7NRGKbiZJa7y63nnSXG8QBv1SxmohbANb6dkj9dmsSLEKLZMj8CDRuYP8b815JL81xP",
  "key2": "mEPajDQPfbb5ebNxSXxNzm1xfEScZj5hzms4AMRpNhdo6NEJ2nWDR6g9mc1hociphCcukHeSfxAEqWdQv5F9Pog",
  "key3": "4mzd6YT1nBMqmrEEf1c5AAXgimBj5ddGWLmbsSyz8gLK4wAZzKrdPUxofRfyCBBfSogJVNzhXBDZ2iX3UPVZ9Lbk",
  "key4": "4y6SvGcKXwxnEXkXSCNnvACPB9uaHfMbXdgt5u68hEVUqtp1rLi5XwfYU8Cum6goLCihW8WHACVJwTDj6HAT9MX",
  "key5": "8N43FWpXLELHYtxMRZna6y3sNB4ZvKnfca2LQP5XcpgSbWt2zViNnMPLctEstEC5BeMh1zpxKXfDHwYqaWkPGcx",
  "key6": "4aaM7n3MbtUjZpi2ZJBsaRyeof4Te4g79HvQaU9UTm2V5pfn2mcQCpvSFvQwo7FhYjVCp3vwTPpQ2CkWxF6FWnpF",
  "key7": "3zP4A7WhFhr5Af7JKuYexNyhDpDnJdGDRLbHGb2dJy629NssG4YgKt1kSCp8itmMhJst5c9GtbhtPM1CmCTjkmRr",
  "key8": "3QJKaVpSL7QBvKt3FaNQtjPHAtgrVEmdebeyhk9fYKWErJKvzDUcsy6k2MvzCHRCdpS69yJMuP17Mdzh9WN3vd1P",
  "key9": "5DpetxX5Z5n8Pyc4ZaaQefM72qC6fJDJXH6RkytzMdHnFstD6y3G3LQKMRw7Xkn5tK4rpUoR1HWHVzRqb3brEd8F",
  "key10": "4W3cYsfX69JE7yQy17P7F4fjmBEjCLAg9VKHyxvUHVydBNpph8YkvYN5dJLczJDK68JzTJPBh8Kefy7esDcH8Wz9",
  "key11": "3e4YrzcnASKbFLTmNjHLLXoStpATaZLLJQFHV3fLFaJuCtSRVcJRXfAcG1nBk5R6b1Y4CBYKj83TkyRtVwNPr8MX",
  "key12": "4EqSnsAP6zfmfvEZ3NAx9MBSeLCuQcaEXDtsUKD8DBTTcSt182mdsfBp52rewgXNn4g76RTeCh3RiVQHKVZqarG3",
  "key13": "2KTCb843x3wCfU76CqjtxNM4beSQGn34qpJ6Pxn4vq4oq3fpEoF1AE2XaRWnX3o2tFQzzUfS2RfgosdyWFLa4xPT",
  "key14": "3pk147EPn8D1FjZCpt2UmxLsn64JiduorBDqFWCZzNaFUvnB6d6haSCyeg8faa4jXvjEjTqURpM18vkdw3XKnr3K",
  "key15": "YQ5Dg4Ha3anu5gjVBYsJLxWFfzM8BTymBVmqCVd9cuvbW9sTx59MfbCwGstfUQxq1TKhdC1bRceombEZZf2ZzSX",
  "key16": "5zu8E312wvAMBpUGELixbat2CXv3SDfwgPwMbD6DHL6ArNoZYYKk6DDxdkAN9QW3eT4dyoTohfbB4NxfdQtqmyHb",
  "key17": "2nhMaSK9V64WYdRUpmJpxXVQkqn9vjs9HkUX15fCqbuHSKU9rTr2ednU8gpqoJjYqoX2kN9SXaKtKP63xpXnFXiM",
  "key18": "3WPPeNcmy2iY91zvxxoEwNzmQSAbzA9Zn2mwXw9WKcFHCNHx3evLycYyPLJYtW4YtjuUJfA5HotASyR5rPjmsjtC",
  "key19": "2wDhYM1kuMfkvS6Efme9AABf2Lxma2b2bhEzhRqnftG4sqVccUKWd78cN1c7MXb4P9QPTjKeEcnY5FZ3bzYt2LoG",
  "key20": "4UvDpaV7bWMBvmySQ6XgWuxVpfufdDfN6Tz4UeTr1Qq28E1cTWieyoXW4wBDq91NtLbNQkTTYAz141Lz52YWn67C",
  "key21": "ZQWtuuPTd7ryVWMVkcNgSXCfvmp7BibzjxGepZzT77rJ13HKxCVGVFqedPNUctvZJuV3HcCjwMoHLqtUgPqV5W4",
  "key22": "5cdH1QVSTXhfHNDNVY8Bg62DiTmGSAo8MRpNfhvzFEt8UeAW2ocraupiHm9vEMTU7PnbxhXzszd7z9vFpFdvdA69",
  "key23": "5gW7xqWRSivvmCJXGZMAYtnDcYEN6cgP96UQAkH92haPPbsUxrPYfoSFxLM3po7Dwuig5SEi8PPaN78Uh2psQvqJ",
  "key24": "1AgWTCmHKawKqQ8AjvyEvaWXgdjRP1KCVdJWJbrFL73y3yUhbj4dSuurzYWmTaq1PPXsbP44A6zGJvs3kgeGVAe",
  "key25": "5ekZ6dtTDQaNqvYfLhajSMjSnqDCs7jnskSsD9hL9Es7yDvN3Ex4d9t2kwsBTPEfTFp3zTsobMeeLmhdm6JBw3i7",
  "key26": "5mrCkB8c4w9i1t9mCu54zMyagq3XxPwCXNAxez9G1nVY6gDE2pvEnSiz2A4YHhwLZ8rU5Wh3KGBUj4q1s5eiV3cS",
  "key27": "4n6d2AiiXSGeJ3V9wapQjTdHzdWmhjzB6K5AhiZbzwd3vaDwX7iZZ2Xwd97B6m6FMWtZ6De9FQhbyW9bV8V3cT7K",
  "key28": "jsGi3rXRWnAtmkXoGnMAnPQQPpGyDYe8cW1javKpxXTwtqawNSkN7r7fPdU5rPnQ8rGfR8Przng8wHSXu7kNyT6",
  "key29": "2SCkoju3nkDYz297GTMCEiT6ejkswn3M8szxeVXzxzG2ybhNn5RaMSsPG7o8NVnkudWYfc2Vd7TZRnMTmSMpSPhW",
  "key30": "5DGdmnW9xN54o1dRwo86iw5VWZcYrW3msodt1XN4KwwNUcgE48WqyYx7Y8yAHTkk1UPrUdkyVDiajMP5QdJPogpD",
  "key31": "2tnKqTRPgDwcN7McqMkfCsMFhwP8V1p6zM8YZ4ZTVcuHmQtnrpwV67NCRqko7m7enKv8zpdQAT2P5PyPjmvaVKSC",
  "key32": "54WygiMU81PrwcVtc5cRmkgxiuPuEBvdj1vq35kkrR1kUQC1ujaK7K9D7joA85KqdDSDA79HQhdHQYhrH8Z6d7Lp",
  "key33": "56QFJRKqTaWwKzJuzvpP4ReZuCjaHSQnQir1LucN5bNGLpUF9nBkkLWpqqKv3HiDCbrmLAmRvba1sDkbfviX3peM",
  "key34": "6vy7gsWpYBbikxMtza7yqQVnx3CfTZT5WpjL2EKPQPtBMJ6rjd7aL6kmidbieUuJnriL5H8e1FmaLKJFAv19LiH",
  "key35": "4dw5qVkoRSXhwkN2UggKVaSqM2xyxZBofN2qSxgD9jLpHDWqYkeW2jm7sZLyxVvmy7J3vHdYnZZAGZhsAt8H7vFz",
  "key36": "2fGD8dGMa6sJCY1fuH6AaUuc1nkaaQN8KF843D2bpepFhyY9FpkkWwL62LoAjtEjrj3CkA6Xz5MEU5aKoaf31HkA",
  "key37": "4dUCm6K9LMpDATSau11eKqJ6FNo4g72GbMVENzVFvXMn73EpPe5ErzRgFKLcYMvpPL8NHgDGRxtKMHS3teaNhRZg",
  "key38": "5hJREoBdKgVFPEz6PSPF3vFTMi64dzegT4FAhgj1AwDdLxjmtfUeGEHMzFnZnS2ZD4ugiU1ShCUx5jAo8EFDNxbC",
  "key39": "28MWqjYgdMn7pQE92BkmGRHpCoDiLioRrJX5CKYy9M8zpioUPRooDgYyWbzGSN6C6wJaBu6rCqEaGcaBfTGenLBh",
  "key40": "rSsBJohVQUeJX2XxkJDXAjuMx1YbnrKLN6ZMMjHjPjaeMttWbJMD8sBm9EJUhLo9QZ2dcBjgsR1CqdXeAidXJEf",
  "key41": "3VvJ6N7DDs52qNM9yxVwcJ2RL2KCetuX4MRd2gtxtzHTYYaFi9gf4SAP1DMZr3YeDeyCV5aWAdFeGs3kyF3Pc8Pq",
  "key42": "dieqhFtUT7cP5fbe3sFw8X8s3xytXMwLAv2H8wu5RAymjDjedohs7rFhBPBJ5PC9PVFCPQ7vWK2jhYF7AsLGkHM",
  "key43": "4x9CWMMsTc15USs1Gm7Judu4Rt8DP8WYJys3rt1CHRAeGVkSbfMkrmcLu4kAKWPnLhNcYxDPrsqpSQ4P3RBNLp9C",
  "key44": "3kgCWNkbtpgtuGwjJq6qYaBLzcJv2Rqwwmnza9LmqxcawNvWhKvnDCNmHYZTBz6RuBn8nr5CTJ5MnVzX3bYuGLuP",
  "key45": "5FZ2YE4DKs85VrU6VfPx9sVaQjPFbNo5ZeBS15i8RxJ7j35AUB2DjreD16kki9zJjwBXRC1ApFLBrfBgnUJ7bGWT",
  "key46": "22B6QdVX9HTSpKCbCyxVRHKGUPs5YraRttRxeyVK3YXGbgEzXECDaBL8Qbqp8BiJYUaaxS3rvM7FH58CztyNT8E3",
  "key47": "4QH2gBFmwrGZEFfm3cHeQ5nX7dn41kx7puXTS3rU1rLS6BzrygJH89MYycxnsX7ovZKZNoVnkWKoPxpMvP7wBiWz",
  "key48": "5chxZ53N2VCjBf3iRj7oNdqipg6mZiUa4ZsSCxEXXPYSmdsh1PJjoxco6t5JFStj8gWaiq8SdVCLRjjpM9Mo3xXT"
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
