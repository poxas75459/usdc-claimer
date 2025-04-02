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
    "4RytBdcEhG5zZi1EzyPqTT6UMQ5HhWVxYHZn1wjBiaBTcC68gBikRQ2Cr2i2AFyB5Z2DBff7QUi4agAgt37UjS3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pm2g5PvcnAVGqqKUHMyWG8gKChRncZL8NuRmQpo22nnYZKd3PwgnNaje66AVrZsjTykwPQ6Jv9xvDa9pH9ga6yi",
  "key1": "2kr9fNrteESJbfmDksFsqxWr9nKCPbQiE3knEm1JgwnLK97HMb9scH3Jo3tUpHK4GJDUVRKYZfHYein91QM8WH2p",
  "key2": "cehnACQKZtbdv9hjM3rkTRU1L4T2JXanyKdwyp5TAmb28RczNgoFXp5ZqaRFHW6CgukYmvcApS5NokKXNJMYgmL",
  "key3": "4Ri9Qq8PuQsGMe2sJGVt1gXK3tPy6zYCuFGu5savchBh98ey5n4bDJDHHYkXAvnWbqGX7PipzRoRQtBYgQHbjDC5",
  "key4": "FYEfhbpk9z4UhpB4YqnRLysf5dnuMBedaY823CbZ5VhYF2sKU8G5gqiVrVgzPCW6aiprGgbMetqNvYhFFX9A7Fq",
  "key5": "4TXZiYcRPt98KihbsLNrMoD13XmWwRaPHAzFLBe2m244b5WJA91qnQKUKpbZ8HnHvQWxLjfcJhtbzjykLHdhwJuG",
  "key6": "5etXK5rVsu2dpwvoeb8ZebbLUPZt5yfNNPsL2NGHccTHihadbizCbmst9CYy14SbGJqhTo7YSboiFgcJ1RvcqQH4",
  "key7": "3f5F5MJLjSTunkXtz7amhnEW8isyuBsUXnjefQdxN1VcE95YAu87fXeAEFoXjTBnZ9hiA4b9Qim1zwci8mfWuP6D",
  "key8": "43RmyQUkw8fUWJp3yWcLZmx5Nb1daejfSYPVRQ6Gm6YSHrSA3TqoFGJPhMo6YrjYxYuNdzXQHhgpVV2FM4iJKLEP",
  "key9": "AqWq9MyBcSrniniDFFRB4bAMHh32bqZdT3gaNgR42WCwMjhoQrja8ZeRvDc56SNzJqqdcfJEkUnCtUdekX9VCtz",
  "key10": "2XH1smKUHvSUpWfVSLQTcFDQ1Bw82SgRuK6fSZhghfaamkdm2zBN2Q9vWuWmK5qR41YQUUUKd8pTosEP2Do31sEF",
  "key11": "5MHyNBVcuq54hmyiFdv36x7dAbQKthmrwfePdTAu2BffLUjLbrristus9Yw9YmUPNndwrbKAHsMiiKTtwHVbrM6c",
  "key12": "3Qtgc6rQ3nGhsZcerKQox7bMSZCnKeusF4m2fF41QjA2ry8qkaa4oVDZjwvQc3N8azNipxm8wzqu4zNgKN1fnL44",
  "key13": "ZmF2wJhfUCAvvdfmrB4yFcAH64hBcfULpb57xMU6oGLaW7Xe57ojoFprHRyVadmvpb66cJdCGzAbBpdbWWgyWXN",
  "key14": "523bCf1nAbK3WcD21RaRzoYjQaTr483FE44RAWKWC4uv4kPwZqiEtk5RKqccfQFMbmvfFaE5jsm2jfKqRdcuctm2",
  "key15": "27fp5jf8zd2ThijyTYFEUnXcDR78ihJTJBszuhbjNjkAg8rVaFCYGF7viZDrxBndX81ypP2sZzNuNKme94YHwrtN",
  "key16": "2rq9c6yNfWXCvhecSpV6tLqLpduoRYFXhXLF2Dj2YX72k9SPCnSQ7CTSbVRbKWTCa4WUcT2ymvjrjsM3raNR6j1b",
  "key17": "5o8LdGYdkR8FGXqQj8yrpbXUt8Lp24X5BHbo6gWYcrEvnPGqqzeewVDuSvgDEoYja7CeeCnyz74m7PmoTohFgxro",
  "key18": "4Kfht1JbFnYPBf7AnZU2B87gQVidhk5qXKfaVG83icgbQt6yS52S8DYB1afXsnRwwhYpPmcLM1ntvK8wqSyu3wQR",
  "key19": "2HDetbs3K2yi61nbQgNkrEHMpDyj1iERbCFynxdFoCztAgUws6g4gG1TW6P2S6ctfb5uN54cVBzpipKZCEAjKfdG",
  "key20": "4LDiKbkf6fypVncEkr38eaecn3PAXaZrChJPCLkb4snA8rfiQTnzpGr3eijZvVXfzHRLNsBeckkogs4Faenam6Cy",
  "key21": "2XUuw5dhF6m7fis3ttsZxgLc7oHQv8x9qmZ1UQPTDwikVmZmPKN1WTmemLqKPS6n63avzhRtyd5XtWHFAYKYNhm3",
  "key22": "2kPDppghZk1AnySfHvTotwhauuacPV2YQaC1rZCNJwoHyzkC2WSiNwGqqPVFiAfwHuwnqpdekcz5wwZGY18mU4ZK",
  "key23": "49SkfdkZe9HAtH7c7f3jb1RSfcdiZitbZ17obBtRJ7Wqmyk3uK97beF5jcubdf79ZGgM6vkrUT2w6mvQBojJKWPk",
  "key24": "3gQ3krw7xo4G29AuWZ9XoopoxyX2qM7LxWZEzNqu4ccEUEkGitjBCfh74E2VcVur2HWaK6Zr2XYPQ7VGkK2vcMrv",
  "key25": "42gjjtCXfpZLGkDxKxMcF8CSCKvpX4eY8EEA5R4SSbiiHBPZnXSi6yGArVFW1Mi8mxJCDVxd44aum7YAp2HjniZL",
  "key26": "2HcqqDWsW5yJW97aybSvvTjVp1SmDrf88jer3TFs59cvf5wVSWYcHV62bDs5ik5vBBcrqGYVewaibN7GbUmrFoRQ",
  "key27": "2bbiWvcaguw2HrneWgeCGMY5YYgxyHbQx3wyDT4Q2PnP3Duytj5FUHY1tWGh5pW8n4VFJ3tJiuj8brEGTe6x4YbN",
  "key28": "34vshx4Qn4MNwBFvMa1YSjiU62gLNoxuNKQDyhx8HA4GnrxJfZHPwLVDxG5fHtKaof3Dw1s33PGSJupRkbtVnHw6",
  "key29": "p8f19jLuqDzKLm6yKCkKZ8NBu9ZhCBi78ctg144bgNcMM2oVZfVfwJDV1WdVf5fCGwxfAJWMaH7sgKvECXzREE1",
  "key30": "614dqSu13utRLZjGnuMgtca9in67WAsChrsb8xjDt4jZxsQZBJKHXr6HqHuLjLUZZcjcuYRQ2htMxBwCnRned4ZT",
  "key31": "cRD9YWvUWr5b4mxd4sF2ctRhjQ9rymtEeCxXLh8mWZKkcppjDLsizFkHcEWXSLeioywnaPsv4RXKwJaZxm4VBKS",
  "key32": "4uU8cp4bvCNjRzUe9NMnndaCXiQ5GAcUhoQaXA8UFrTJBFmCYj7WLSBpmv9U8gRVarPN8GLw7PFQ6wRqweWXFnKC",
  "key33": "4UcYfZiWRZFHtKTJ54itsRCJzbMTAGWm62RUbD96PpNVb3YAirhZ3Z3uEvEbGrSboPhQeHEerfiv28eVLq7MftfF",
  "key34": "2b9UsUWd1aQHTkMBXHJHMi35ds194gFDokrWwjgYcMwM4R7eEnFa8hHyvHbjzKTzLwcQypCXbuM2q9uF8uhCMGbt",
  "key35": "5rFp73YXhDWsdKUeYyRjCMWyFxn5gPo6DVJE1LixzgABjwAqMxanT9SSi9ZDr13qWAYGZAWbGjD4VL3zvAQWiUw7",
  "key36": "XMxW4LkT1vA3gVLHeDbf9TcxZ41xZa2g73799Z5BmmV2ccEQrD4K2cSNLy8kcm5L5tsPRG2VD2NaQo34DT9yuRY",
  "key37": "zSz9Utr14SJwNXpkRAXwrmnpsjcKbYJvzdbcwmghhEFteXTtXcXBpaz2TFt3bwXTENDu8CfhpSinpe3XCYHMJeh",
  "key38": "3cvDzmBS94ZTmqpFTAvSDbFBydpr9izb6zf395GhNE7Z8g2fGoyzmC6mzXgYukgWJ6GAJ3SFr72oCACGJ4RpHaDR",
  "key39": "631rDSPWKWytKYUwxGw5fkstPQEahvcf1Wy1Gm5vCrdNpuavUW25ksAmzYF6YfkW7r8RvdnqNRnG4uhBc3NqtFHy",
  "key40": "zCaJSHN6VsJxUV1NDHvLc5NkpUDJ2Dfauc6YRCppty7GfMn3wPWFMB9HpDFsDd1P8yGeZ1sTHEyfMPfAGzwnb5A",
  "key41": "2C83i8Nqpsfet3pepxrCJ5gADgvy4Gii7YX7Ue1GZPop6TziYa2KkfbDZgJayhcjM5Nr1RRKttirWvPwRjok4F1M",
  "key42": "5Ug2poVoA4sET3JHxHF4VC9GRnt3nn7McNH7NskbHGsGaEo9iX7F8yTp8DPzqXWsmeFX2rDkKkeuEtSBp9qtKHcz",
  "key43": "2FQD6fedJDys88RDg9SBo7YQPPkXB5pZenH1EueFNJuD6H2DD8dipUZ4iNEp71T3pdSDwf2jNvFYeXGWKe37GvPz",
  "key44": "42SrJ835STxgJQyfm2xZsq1UeHa8uB7VKKirqhBa5RSne6xB3Q8RAzkBMtB9xCWSEWrFUkztiLrrNU1iYr5sZMiM"
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
