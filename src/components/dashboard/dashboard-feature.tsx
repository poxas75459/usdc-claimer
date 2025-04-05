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
    "CHRgZ5jEcVFTwEoJxY9gpwqwk4kwi8dNb3aGR8V5oXSFYyfNGjFcRiguASH2kuZkYeajWuTuKvcyYY3oFRDon8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gv6XbXVnSJBEWrEAQA7rimgDhXdC114evTVQ56nGAdzNTF5F6poXw4o9GTz5NY4MUhndXnZT76D3keKEUUyESZw",
  "key1": "3cVrfMUfSA73bUEuddKBKAwzoQxouaGWK8mkkK4q8zrLkuyBTeXuvdAvT8XMLGTb2ARymNWk696tTjoheZHVj5xu",
  "key2": "54FM1kFM5So3D6jP2dGHN95FdDEZevzdMa67c157z9926XPjFXmSL67uMPoHSqGHrESYnW2cLY7VoCJqr6zD9t1D",
  "key3": "6JFUA5yYYt5k6g2gwgCbGgg5vAkJu6GZKjjdYqmKQCxX3rN7GJW3z5U1Vw941L53Lt4MCkiymCpnenq5tmBnNeF",
  "key4": "Upbrr6misQ7v414asaZcB5hVS7oG3aeD5oZd1Nr1Tg3MYqNynZveLqQmhwZn21XhbkGH6umJsq6Jq6MHnUHKmuu",
  "key5": "2tjGgVUErxyp2jB5aTeg38dPCiCBQqiDN3mFVEg2qGoLWMGF69SjPpMJiY5nC8bxFQt8BccXHKAVReKTswF1SZoE",
  "key6": "tWqt3XhafZRCVCTxAutubekdKycM1DdxWQ7Rzts1m95UWr7Lcj7vLsSMd9drKdpCARRF8Cg5vhC6spExzs5FShg",
  "key7": "vRXd22wYUakUqW6WVjd4mhL5Avnsd4V3zKYhVHaMGsg2sAdQzYHMBJRXSwXF3rH8SvpGVcSU6f4LsVTRSfyrofW",
  "key8": "5Md3tnxTPgg3UTd5uD7MSX6NzAZAhQMdSaFvGcMTx99JW11scHBfz1A8H3PyPTkXmbbxYPcJ9bv5pPpYxxWxCL5V",
  "key9": "3PD94mWCgjJwfkJT3DTmJtKDQDPjN6YfUhqZ22Jr5xXYExC2SroaEBhp6mMPWCrBfSRLHYuso2hXpx9z93p2SNkr",
  "key10": "37qfxfhn5R1LHtdh2nnMjYbBRL9qzoJ8ydtva8mqzx4TqnQBDTwaQEWGsGf5qiDnaE1JDSUbevqNqPMCLiJHfWyD",
  "key11": "3hXUXaUWfkm6bqAXV7LfEDmFabNEMuM3fYP38Lzd8iskUpKueUSTpqTehbKobg3F47K7fFfjDvamzjshrCMdcnTf",
  "key12": "5eaw2HgbCv3NPBofPCeiKJzkeSi1Faz6S6zPkGLaH2RG7hv95quyHrhGDQbEmwoiSMaSksj5yQyuvZHfyaBLovK3",
  "key13": "5PpEckS5Rrhkt88ZJafhy7ubWBJEafN9pqNHXZ2oXejUAsjxaqU1dsXw5CAnKhMw1q8cJ5p6KKWKs4CCyUNnQsw2",
  "key14": "2QFcbTm1bVB784a2FjMezwQ2HYTNG6oMpHMo52TBntH6Bb3UJ8L5rBi5rs6MCSZcP6H2W2UaQvahE8m8GnDWNRPG",
  "key15": "5a2Q7EqvjmKKswqa7NAW8BxaTHdACN8a2eJo5SXE62N6aAwbU67KocdXwhU7HMgsLRkzoG7ujEw3DkC3vY3SmrxC",
  "key16": "42fXYRtmumuF5vw7dMmriDgcBkUBhb5CqDr9eGy39iDcoPi7JVB1Hy15N7vEZZFtrCmkbExfh6GDep3ATeY87MX",
  "key17": "RK4PzJsGhyrmLUYGcvb12VJhUjrL4dtvxAHCo3nmbH5r4oohEpVHYUqdoDjAWg4U7WyXqgNb9128W2sx1LzK9RN",
  "key18": "5nP8E1cz7AkQNmyRKzfEHRriLqag7DLXXJLrhLTu4DuDEut7XUdcNT1YmHYKKDMVxZMrnscDsa7VEtGdehgC9RR3",
  "key19": "3Tmtxy5dQvNzMbn18tJyZbkprCdQ5GRG9LSeGF8X4op4iChnhEyvisjAhZ1bWaktK2uLgEUk2f4qye2u4Cngm9sY",
  "key20": "QpoetC1zXnjQWa33HBJvNjxB2WarMkxFD4Wphtvehof3k5LxvmtcfDzBVDkUH8AdMnXo86aYo7eDDQk8SJ3BaHF",
  "key21": "FWrpv4hmr1ki1xNhg3cDiJdQy3bD6drVhtaitNBuairPtL4JEJLziZgwF9Vdr3nRivKTic5U7ivjNuae431598T",
  "key22": "5TBjnc9Z2D1c3BDBjXuAYMLgGm6oxHyCb1SJGWhsVDynKvRdkwt2y8kA21H8xTZs2LWvaBAbuPANvjA2EeTtxq1U",
  "key23": "3dbQvBFNgeuHhUG2WqGw42oM1ZgboBHcVn3Q7oxoUQsghUM1FANAH37mwG9NGYfj5WgR7uYBCSjaSMR2ZtJC8ueS",
  "key24": "2ZiTjjhR6y2KxHQA9vK8VCRJqLSd2jnL6Cpmkxm717b8SATJcEJMSVw7trYFYpD5VNFdZ45mEt88RjD8nzv5xZuH",
  "key25": "TyFaCqBj28Ris3vszA4RmCtZbDovPzJmw5qH3BA2wyK1WtaiT6b4m5UjBtnXBXxDx49Ky1DtM6QHGxw1WVF1rQH",
  "key26": "EMdEA7mzpjXnQkTAMsWQoZbHaYNEJLrWiGhp5VbZLm5YvabEejEbZPhrfE9qFykqsxaozpLzjmAK1rBydUPCjaL",
  "key27": "3t4MM9dXvxBwVHNJzhrHrbdDhSzGqdGywaGfvT89uK8gu8QMxNTLS6pL1JmRcWEL8W7mjSPoUdzjdj1GiqRaCyyi",
  "key28": "39md5yTc5ZFSVMkpnuDxURBMbtHyXYKrDPVeoFcR626PtUHrkRQkDYxc5rToRdcZFi4Weeu9qyHVcR1JmQByarmE",
  "key29": "v5dm8GE5kAhbGBVCkuiH2s4ver3msjtfnMPURQL6sWbHLa611D6bT1Nm9EhM5hMw9XNXCqsGWxU7Bx6DK6VAQ4b",
  "key30": "48FTDG1SWrjeNr4GDeGvYV5pkoae9BNZ72f9xLXcoJL6fqfnCuAWN57HJhVjtHekq8wWvJ5JvtUHEtedcS99Er3P",
  "key31": "4wCbbYR9QpHB6VfFMEQXwsb1PpVLeoD7ZZjbGBY5eiDN9M1LVjaQvTWcw2KD4sz4cNQcyr4u7D8o8nMNPN16tDH9",
  "key32": "5jupuJLUZuMsx81woASniwYwSY6vwE9uFgvXCP9KhbibEovvroQfKTKk3DYDG3EiXR6JMpnpv8mgCgyg1Q4RnRj8",
  "key33": "3XjjvcKtpDdcy8wbFuEMvbXaotAdzUuqKSxCDWx3E6dBkWT4LS5xoB5vrHx5ZwesMf1bR4xMNUA3xJmBn6Z3tNPW",
  "key34": "4bLazfg53tkjMY1g5Xy1rHMZfhSCoVmAQVx6q1FDgBAgruZV3A4zxj8sbkXmLZok59KL2uR9b4TUCseyCMGs5hkT",
  "key35": "5FbYLanbCi2yCTUAdYk9BoAj1jxfT1w2jD62gqBtTLG2NRaNvTi8LdLnnkzBJ9NhpEfnnDHrxvQ3oKg79twrf3QG",
  "key36": "QMYVbt5naKjkp2L4rvUsUm89LYhFnUKNyQiYEnnpjdpxsWBEQtaEUgcwZTMgH4mU7ByNbywJ64iqJpndF3z25hJ",
  "key37": "5qojomBADkRLGCcb3yAzCdj7dK4bwCtubbR6nLYmzTBQr3ht6MUMiVY5a1foRNpDuAf9wr9w7HS2vcYzrdQUF5Wk",
  "key38": "63FrMvW7vCGKTMSDj4FKyGYrtE1vbkj8GimwVF9fjdTypSCJVAmgpRN7A5GVVXoeToHrMg1aehK6RRjpjJQuCZG8"
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
