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
    "5zCFQTS6TyK7GKn8EtQR1TNGb4xEb1s1tEJNA2szmaRvkJUQ3SocdvQ6nxE2qiC1SMZFzzY8Be4vnYoNkc6Lkt4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAEZwRydsqTWWyrbLek277ZZvpam85N81JrcW3uoLuu35AJBQsWoUMFXgV6Dr9mzM7wbW5HvALbnrZgiUyPm41h",
  "key1": "mbcoe8gWUP9uoYAFeim7urgF1v8rz7TW4upnVCnhCFhxfm8fZdBAdUw6PPhKnj1UQP86M6UxU4iLPLdgXKdyyTb",
  "key2": "3dg2VtBAKzMdisN2taxSfDpGbA99K9W3qdwy8WMsyKuMXmcXd5PaSdmytPsWtpKJYkwWd932ag3JMJu2im1x3FeU",
  "key3": "KiQq9VDG3atdYwfBUxh1pJWVD9XzvoZsFTsdGbMqSDd8AdG9eotxwbaX23ZW91u3ogtTQL2YfKLcEBMfRgFecT2",
  "key4": "4kv431JqmJL4HCEm5PCYCCrG1QvtE3ggTJ8rbDLPdg8yDbD2SCTfUk3WMsy4HfBh9fKpH5njCpgvCXFz67BEgRkr",
  "key5": "5Ta4qx32BRfcpQZyxuCrPmnQkreiuHozqdT5st1hZHZKxmdPjUPgs1VvyB7uGxzGjtegZLfuLP7QZVAcRGzBVBXE",
  "key6": "64ctvCAiWWjMD2vGw5VDQFoZgyEhdmHt8VuapbVB6jfMjZFK911AkaWRMFGp3SGSKNsYysWchfWf9R9w7dx71rsT",
  "key7": "3eo5MG1YnDojmpEvQH3jirFJADake3HTf5KTCXZGhj3kjDiBDeUs7bkinFzWh1okApwBJnXQkXdUEUcH3LDzuxuc",
  "key8": "5NRTN89f9j6GjP3WcnKJfszHyiosKEU7jh1omETKoJsGDMzQgeQo7uYBLyoZUNkDqxTxpuMzmfMrnfGzpNQbTexG",
  "key9": "46un1fBVXwBi1h8wF1HftqrdEf7FrcRSKNUG6i4qXfxEjF9k63e2hRsj3rW5X1G8mu6nthiDG7QdhTGBZZm8ARaD",
  "key10": "4grwjC33qy3bpHGS2CwEg2zJenQbrM11WFTAm8wohd1JwXc6fVgDgbdCGMtE7nf8AP5YTu9i9cZiC6Aw5N7cN4o",
  "key11": "4755sKoYtzPYXSQb9KPQLbhxudCUgzoiREjrvEn2oye416zUxtPbavyFJAjhgHopGHKpEeZDKPsjZp3cWH1xUdDh",
  "key12": "5wECGy9imb3VS9vmvHhjketgSHN58yCzder7oDgamBbQRKvk8NikPVqNLzvLZGExi2Jttr9JKHjz6aLMnZVCwFbd",
  "key13": "18YG8BpisqutT6LNJGj6nESxbhEQUTuV5pSPtxXuubLhJEmcA8ydAW43Uu9ryMBTVMDZ2nJCzSoEYy17k3zrFsW",
  "key14": "5Airpf2zFfDrcnUKAHdtqHFKhpNhQDt6yiVhrTd4SFLTqthKxhCeBmnfT91RJt49MHE9yXpcyqfg5kbyeyTuJnmV",
  "key15": "25Z4ioUGusTiAM5NQADGJu45JzSJS92idiSpMyCuJiyLqqnMz4DtZtbZwWS4r5tmYM837fYaKFi17anUAQS15bax",
  "key16": "24722DUuo4ibv8CtqNsAP8ikBK11XvhpYNG5srhPVcxeEZH28AsoNuwqGiZx28CudqGYboHxA8raFAomwgt9QXaK",
  "key17": "4rsHFGisBFt5bHSfywFQCEc9PauxWPKicvMyUTmKXxDYvUrCfn4rALsVfkwP8aEKehRp3oDQCt6QDxJZJM4jf2zp",
  "key18": "59VVJL1J14uSBa1t2r4u6JWZevuvmBrU9LC7Fbf4gV5sEJEQ6umRRq2uQMDQjYviyGwq8dn2rAHRBY6ZtgH669Sg",
  "key19": "3hnL2rFx4ZFaHoYBzDQ4w9SLeeDsfUJ7a31nbsgNvDJwxU5g42YMjQ3tfX8wLwoVQZa8VKA9f6pLpY7X6FJSSrtQ",
  "key20": "3Us9n3Dg13DbGN3f3Mi4HDUwohb6o4A4evPv2zXAz96xmunGLDWK6ki9DTUi6euSxrVJkvjKrEaJrEwAePdxuCRu",
  "key21": "yEospQ48cp5TQezu81jTQ5s6HrAxGcLW5XpQ3Tfd1FNJhAyD8peQotSM3Ci5g6bfvnnBHPW2HyvuVM73heiFf7h",
  "key22": "4PJB3pdNmTxaqoQYEFzkRC4VRe5jRLEvzRgV2AoafC52KoYkdtdtj9q63PArmVMkpRgfSvd2eXERiFPJ2VTikCAB",
  "key23": "4mK8boQuML9mHGnejDzAiAJbJNTrWTNfpH8NEsBvu8oVSns82hkufHP2vfB8wgq4TkSnTpauJv7MbBCC81g4Snp8",
  "key24": "cn5FtfBdb7qopy6kGNkQjuk2QrU6wkD5Rjbum2K8Ytw4qvCuKjCvWNJWeRSRzo7kAd3bYBu42dbCmVGpYER8ApF",
  "key25": "VSbtRqc4YRxjSHKJQCZA7SQZrfm66u7x3DVHJqHTGEpssoyuYD159shKcziKzYzfNTk6u272xxe8YDcXyLkXGah",
  "key26": "HCEwNfuQdVMWnVfvNEGvs4X9Vykgp576BPasiuHx9v3sXALD5qPKpWNRPs1JXh9XaN7osZbKSvFVMs4kkzRinK8",
  "key27": "2PcfSwkTjW7HkxNTvjvBA3U8YAAjfmu1HMsfheNKXB2xqpuAaJHwhDvchgobcZsQL4sAndVXHsfGW7swVHZj25tg",
  "key28": "44npAiJqkMPbQb2qkFuuAzPt2PuqU5aDHMjhjpbPPPyoRd4mY54NQQV12DtGcXv2BtJwJpbc42655WNhPWXREEcN",
  "key29": "58MCyJA5Qgg3jQ2WUUiRbnyBoTSSvLa6VnqiURtU5WhYoNuhdaA9HYpZRkU5ZNW48UciVK5B66qfiSBK2eWj1Dh",
  "key30": "2LcUgJfAxiDcZaCpCYhtBmXN9gAS4QJufak6pwMA1rJ5LJ95fVv9kz1YpLT8QyAEDNnuDr6jRKHmP1KYb6jBJB61",
  "key31": "26wHVnYWRFu3WV51ndTcJtEqV9qUXhFx7yjsjRH3JgNDEkeEMPYuUCr5JxwkACs1axcSPojutsf3MQPjrH88aWxd",
  "key32": "3ZizAZ68TsomnqxrYG9q97yC4zT1QgqKWrKBMTJstr52pKd68e6wmaucNJhPV6zEZLwfbDNCbz9HZ8s8P34ZKRJe",
  "key33": "26sfRz9PCabyzu1qKVYsXtfY6BeHiFBByjHWhFF8hoiNoRRssVkbym7EwMAD1c46Fs3eFMNLB7AV3v2CNzuzgnyc",
  "key34": "qXEohThWLQdDFvnLt12cJUw3TJwQsjCYrXNKiHHRY5ZVCyv5RmMzTdQqaXG6emnQwKoDLxggPj9CkmkUBrK7iN3",
  "key35": "2zcFfu6Tyyhm96JHwWRzL1K8P8EGrd2LFyme77xf3DkkhZSB9W1E3iwhhQncc1gU8iZYPL2UekSXjA5RHbHyJMfp",
  "key36": "2dQzPXGqQP2sQDNtkp59LYjGmsQYTXTec9MtX5BW3bntSrVmpEAzzthxkNSo9fgqA5FexR87sLLkDQD7hRxfYjQi",
  "key37": "5rW5VoM8dwFaeYzVttVU92oo3Kbh3hngpSP2hNHV6sHGWiSYauM7Fj574tY9mJ1hyhyRH7uSLFNxKMdMSoZWP9af",
  "key38": "45ZbQ86vW37gPb2h6Dm75KqCKAqh7GDfJqYJD3TxJ4bLjcSR7TbePK7YrAqxAKJmyFuRLHaT6Xd5pij5BucDSEXH",
  "key39": "3MsNP2PmNsztpNvHwoSfm6sjPEFQW2Cbm6CpEGmcwZWea3ERgFBnEwjPWpEd9vmP6ycLjYuQQPnE2Br6CrqicoWu",
  "key40": "sKBEzuofatWzqGVh9ewRveRYyQULXcsGTm8TbrE5zM6uhP6Nm9DURQNGpNVgZnSsWZXYZjpck7m1Ew3Xvfi8fBT",
  "key41": "3JMj3cZRdP3xhDiJVjHv3PsmDAgWAtg1ggib2wZksDfbLDCKeB1wr8i1UTg19gV3bvocAmT77a5XWmzxB4m3QQs4",
  "key42": "2PbRJKP7hqsmAThnXLkd97qwUTt1z7JD8NMwDHnYu3AL7JcwHmwqCFomXxXSmN58DrKXzEfU8vNqMg7yQfyrtgmR",
  "key43": "2PKocMyqPkJHeStAU3R9oAChdkGjkSbBd4yBHJDfSrS6xfRiB8HXepHQtYkX9GaAZKxgUWmS2tay9PZJM8BuvPJq",
  "key44": "2rMpBbZC9TL6nPgViha8tsMav8SZtxSSfgetRH7je1ZjDmnf3V5NqDhUsBCj6NZks7utUEnKTppQQrzwxZjNrYP2",
  "key45": "48V64Mtobm2nQD7byQRPzDynmShTKV69oyqAGByUHmJoW7Sr8Nto6Sia49ZkHSKAsg6z2tamCdZWmSgeTsAZGfaS",
  "key46": "2QXW3eP3hTn8vHdjr49RNQMif4mMSwzh18rXmVgoB5ZqWPTJKsiqtTQmWBFLqosDpyXmQ39fxkd49CFJuaUJAFeU",
  "key47": "5oCMfqxYcWfmsWEztUb6sRojPGUHEK32oBYvFwrdbLHHY7Fjic7C6f2Mm9ttbRe8TRNKMakasaqWTWiKTYyiXT8E",
  "key48": "3XDzi2QbNGrNqm4pxbSasEoN7bMvvZaXv5JZBBJx7hnf4RK8LspPUhxrdyeGYdg6ocKSJ89nTKbczZaYrER6HrbT",
  "key49": "sV1kbGEAD8yBgXAuS8UqHNw5VZgCiNNVHq6TMFZGCHJVL4AgJ5KFqBW6nzUdaiUo6G946TzPD1AWo8xAKLhdCS2"
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
