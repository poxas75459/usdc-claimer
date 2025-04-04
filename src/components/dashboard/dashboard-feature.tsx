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
    "LitGqC92M8C9TZkeiknqWxEFiPJzyx2xzr18AqtiPDLS6kHDVKcAyuKMnaqGL3EEvUdFEkexW3K6dBoPd3rr1vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXaC86fgCai939M7WkjNC81TUkzfimUVdEF4dMBmve2ZxjgAwQ8yjogaLg2u5QnYKABAJCAyvEkwXYh6oaFLiue",
  "key1": "5rV2jjK3HCLXHdcCq8RrpzZbC4ZtNpv7K8ig1wJfGAUgKJ9wSrv8X2rX5aTXzGckkhFXY5dTWfzsKcysiNWRteQn",
  "key2": "5TCQq3zzZMmLUTEDsApUPTbRap3PAdoepPYgy8meSBHfzXh3JxNTmoGZVp2wuvkTGXtrU5dkL5ga8EPbQ5kDqvVz",
  "key3": "3pWZ6cFKEhRpqU7UXRL3DGhZg1HkZ7hTq7GE6eodeH93VZwNRYUpWFgjDgCodnsbcq2z2yyEan3pJwUJhadesmB9",
  "key4": "mRjuxsMAtxGVgK7zhdTzPKZs9fQuiBqSaWqAN6g4aZqytN8mskAyC1bnYRybXP4UdanBQYjHVcoo9rw9okGzA16",
  "key5": "4fH7K6zFSQkJqtP9kvuU3vjkZ9goJgBdBM5VX4ChbKwNhrPoHNAW237tsxUSiyJwYNzUa4Dh6ufRaRWoAVX3ELoY",
  "key6": "omeqzKKCx3xV9FwQ3jHdJf9rAQtqKcJAXvcB4DEkKQPKmzsuWrpy5a4GqcqYfQ8emcNTChu2h5HZtY8i1YzKmxh",
  "key7": "5nXhYxJJKYgqVhBcESU9fme23sy5xvrZXtQU7MQ6zVVx8pQp1H3a3SjuaT24unw9YjnZSVcaED7JCPWBf59uAoPi",
  "key8": "3KAmy4QdghWvmyp6vD6k3QsMzEQ75h1TLUYQQGvn4BpTBt69Bd66Z5bKjdHuiUwKLS92EAGsCFTNvaKbQQBWeFRf",
  "key9": "3o8B778sN7g6JKNuDAkx6xN7iy6ttyF3XWTjHAu6JuEzuNiMbjUrS3ChaHbiUUgDJpxAmavwS7FamygVtrcxDqpN",
  "key10": "493DirLZFhNmVnwxXWm8gGan7Dp9quTqrpJeZzXQEZXHLiv2SeT1UZ3TusUCiTWYPHFmu4bX4ybLjvvvzmSyKj1p",
  "key11": "2HnuQCynDYWKrMHEaDVoA6wARQ4rCEKsq6fQcV8JpMCUHTFTS9Qn78PaWsS5gUPxbnVX9MGQDodsTrqRczBVzpKh",
  "key12": "vSdMvt9ZhU9VuLYWc4oj81acHnERtYt4NxPP9x7NLqTs4LWwFyBQxJZuSwkn7ibvgcLBbPcnS8QUtrmkk6C3Qpw",
  "key13": "ADfQJ4RB9MNvCfL2ft48dZMh8qm2KYLrpqZCrXuCEd95Vo4vkhMKYNkTUprC1vuEuRZHpqSi9bYCJNYXLbPvPxp",
  "key14": "3phKEBU1hwN22k6bypQv6UMEzZvRAyykTQgzBA1Yz21Nctnq7ggVUJKgyG9rjSz9Q8GxKTGceUq8d7zXePK8qDSM",
  "key15": "5NMeSJXwFZejgoHysNab6tDesH9hAX6C9biKEFkeWwgeotxGJVqdsRVPXrGu2s9zpZALLgqUi2Em7a3f7Uw6iko7",
  "key16": "i2bQ2nyT7B56udLwiay7cdbVjr8kA58RwYRV4DgqZ4Ks34VLcjFNxt4BBVddAwiT7JNSDJstoAJPxb8sWeMbF3h",
  "key17": "5AKdmME4E4iYJmSj4UjdaUpZxtAEmV7LUKFMHyipD8vqkL1MLPv1LaXZMVAUWjiVfgK6qtBDL2CC2dfBFazp3vw6",
  "key18": "5caVVRwtyAwJQck3gmRNwsJcRPNANFGrC5LQvqvNEQHYnqY6ngoWqewguv72cm3bZxH5CiBXawZTBcyassWiMYNT",
  "key19": "2ujBpx8Ywgtrj6o8NKMWFxu6ahYNevE6Qp8LJzz2xMnBBkmKKNQ9PcXUmaswDCN8RSAeREKtgwSZTVc6nn527zx4",
  "key20": "2tNaDy8cxgFS7Yt2Uk85nvBNqB4izd8uZ8S28xx5AaeCtkNp6nTxfCVTUGZotEqmpbZ91y24NCHizfcM4ixzqLAT",
  "key21": "2wNSud5YpGwXpyaeq3Fq6igNR7EAkJd3gBqULgjgQSgiM5QNFpyb4KGB2SapUPBRLVtEim9T4eRLpDii4s2fGfZn",
  "key22": "2wv47ZDBYN5NKCuhjruWv9mcxMhRarepu6fDMcQC4vuPTHkt2mNvzBrHGxrzU6ML6L5Hf6dB1oG2BMtyiyVq2aZ8",
  "key23": "2Ytz32M5K6s1zFp4sHPCL8ZX7HZNDMZAge7ZUJZUvV45rtCA7LjMPrz5Jgc5asNLURXtV4bKiWdGGxXM47nTq3uR",
  "key24": "3tX4tug9RYeWAgsKBEJ9tovzxPUaXBYuWpRbt4o5Pt5SJoXAknMWTaztpfwKTuLvth6pFE5N8Gaahs4So9U9fEGv",
  "key25": "2z3gXgaMs2uL1mw7hAhWRXF2bMFJXccC31DotS2puSAtrRgsWWVJgZLBBX6C4CcsJNBKWmQmGPNwZWU7A2A9ebCW",
  "key26": "2RV6gGYQzw4GmT4fZjTT9zSUJMNutWcMTboQoSFN8hmgE5Xia5fqYq5iXSgB8AnedcGNd1W4vEnWLSn6rDHA6tbx",
  "key27": "5ftgaeghU8vnaTdEKeLnU4ySmvcbX7TAVqTcwLdVD3a9vmXuZ9ha7iaHD85KyrhrYdt2hEKC7yQKpnr2M4xZPgEh",
  "key28": "3JqD721pNDhXug81P4TmxVfs7Q7prhNE9x2b3RoUfZgt6AwRHYjXdZ1zeMVzCbtLn9A1rry2M4NwdkBjqJW1x2Qf",
  "key29": "5H9j3xnjyEkSr28PhGTQuJ77E4mvLWTY4Xvm2HBzQNYuF8Hbz14BRk6ZREjMu245mntHghZJXydU9bRP9vjKyyUd",
  "key30": "RXMMm5PJ8LvCeEp9GbBgoXyeYawhBXRr4uQEMq22NJg8rzA9yVtstTkVcX7Jafvg4t6mrXtyhwhXk7t6eMfSZ6c",
  "key31": "5UA7RytwdzAURpQouh6hhfaAMeTkXDCkSq7DPbFhZrHGmfdmZAwZX11W1Jq2iQRttHahzDhYvJ1ogzcVXkCsYEGp",
  "key32": "4WeM9ymstBMM6sHv1anrTX4Uv7kFxh9ojKd4msKRuMKrnu1Hwz37hMzXgmBHJkDtmELDRjrorJrYJF8VmPhTMATv",
  "key33": "dD1ES5EpjCXHoEsqNKyzP3rZFxJdXDeYTToS2LZxWiiPLtd9sqjKUNvZQU6s45B3JiEXiJ4LVi68bM2BBsDQkC6",
  "key34": "2yR6WHDQr94AVrXvHhD2iCv9C8E1FXuNmgQKUveScNRg17UyhyKoDxCWt2V3rcccwo1hGyvTStKArRqTVUV1UPVg",
  "key35": "ZLb6U1hg2jcFZ7zUmXPnahf2L5huDZQDNcisqjym5KMMXqLChHSjdfAddEBQrPSUWwNwkx2qbC5swQyKc6rxzmT",
  "key36": "5PEKSjxAZ1mykfwQzzCo4TPSLRr6hTZahZkALVHunZp4A6x1uNMSB1JZBtmMGotyJshcnvG1DrbwPDDUD5cuTPiU",
  "key37": "4eJXGzWQfVAvXcwXV1c5K6ieKUfQSxLY4FDf16g4vR6gtXB69hnjM1GDtmothFMC6fEaVxBvP81bY7UJBGYSPZKM",
  "key38": "4uFejBX8jfYd8bX1zoiooBrbZB8QoE9y4oxA5GtkqSLqgvf8GYE1uasS7RLogKkaQrjXiQn5pEQ6GZa7b6m8Rgh4",
  "key39": "46D6aZxz43uCNSxb4LLX6hd6CD6BmSNMLeBUsaW4SEUSBy943XD6NFgXHKZCxEXFjyauZ8gXawVSG9dKyAYvNzVE",
  "key40": "5nPwSpjAmx3p97wvzVvUCVV3J7sSuUY2FcC539wDCarhLMf3UQbkim2LrHAiUavVJLKqGuHDAK6oHAqk7bNgM3qj",
  "key41": "4LGRVt5DtnHxnUkzq86jR5HssVdgi4UQe1ab8hCLc9jtyixEhTwZta3stCLrHpNVkjrbpUcjyY2CWPNWtEVa286U",
  "key42": "4LBBsoWCruC2cEDdif6M1vJC3W8krK3FGtSm1SMugyJsVoAYMoR4XmrRe2DVzCNihNjJscKo7iFqXz8ANxn1vnbo",
  "key43": "3WiTY5tNf6qRYBwevH2bsCVuTxpyFeVFGdSt5FiEaYYJXfPqN2PZY4qVmdusUjiZsphHgV4QeFVt2Et3Je81fRFd",
  "key44": "4pgFNyZLyqVNxuVfLCN3fUasDRNuW5MNtKgux7u5EfjiC3hSrsUdNBJRvbSnSjEArCGeanP16z4LYJpV1eeYSkXB",
  "key45": "xoDgwhac3bM91NY291d3JK6YQgpErco2jUyoc3d5JSLhZgsiWbU3WXio7yrrjdjTYzuFSKC6qHV83YvnDnrivb2"
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
