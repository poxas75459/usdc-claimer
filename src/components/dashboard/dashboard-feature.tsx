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
    "3nRaNMMzL3byGuckjisprRG7WPcva3VtpUKhcj8LA5mEncJ3nvtTKRxhrCbPbGczZZHBpfCo1wxhJp13oKUiFxDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dSMqnosqop1t7W4LpJtndX9tUNtbREBHFp6NLdAsexwfxEgDeTwtjJwDNdaHMTVva3ADRxAGRJ7VCp6kmsr7PyN",
  "key1": "4hPPQ7ZWkrjhVxjMLnSZEyTJJE7jSjDSMWMCkLtbyGSgiNn2v7Rv8LZhfMaSrWgrR5VYsuJyUBSCgrRuZZhEvVGJ",
  "key2": "39pxGwumFhS8yn7ui5nZmyQU6iudDTWTm74yN5W3oFv6hibaoJx5vTRQdqBYcBdT8iiTwjPhRYjteSVDFArHTbDC",
  "key3": "53VoGAadpUpwHCgyqzeByJp5GzsNR2EGJ7qeniEXyMNFBubMYEkfkS6Rzqx8gEU2kSRgKkXmNgLmzDSDKae4nsC8",
  "key4": "5QCuSbgNvEeL1HVmeh95M212rBfKXCJ6fF9Exm3czFhmrpGv1oxk5dAQYqTeYUa3jNUE7D53KQQppW3svAJEfBRN",
  "key5": "yRtZefVk29fZMB7FW6WmKuKwdFdZLqiQceLbtx99LCnCUe1kx3VhqqFF9pbwvRKwvZGeVg8yJyEEdwuBnvAKMNf",
  "key6": "5ai6K1yS2938xVovu1WrapHJU2Rny3wzs3QpVekuZ76JzmmobeoguqsLPsjfgDx6H2kZ8XmiNDkY7Uy57Uy6XZDP",
  "key7": "5qfmutSDPTN7Tk6U5bcb2Uq6bL6rEqK7CYLE9VRHUwSpBp6M6Nub9p1KuXUJYunGSjWLC3Nh7fzzbUAxKEtEfkYA",
  "key8": "5BjjmGPgSdhaCTbehFbpMxR7JqGFPvpLnzAgtVTV6aEt46quW1YQF1LANEnhy4mdJz6byVZWHK8VbDv7QvmbDwsm",
  "key9": "5R2sEigYn6odQTKGi2QGeQDJbrht7g2Qv3uTssT1u2Utn9gPAS4yg349XDDUBj3WbSmbhornqChYAAJxw7uja4zf",
  "key10": "5h5kkhkKHosA213tjeigsSsiVmp84ge3gxzUBaQ8kdV33cTPPsdc5zx6UCCqXiXZGxB2LKjRDZ5zkL9ZBR8R2jPY",
  "key11": "4LuVQTjkGHU7xUX4TcWRhez9hBmvJp99nB9YtbCbG3MeUHdfjhcEojHaT2HmDbssGKoMe8svQAgY1az96keozdVX",
  "key12": "2iwFiqoFxFH3FkDYoAcjXXV4n9HERgBLAZsP5tNAHy1XB4bAo7ze9HB24qTKG9DgdGnzREqWp5Ptc4n5cPznQksq",
  "key13": "5FW368nnyXrLEQC7634XRbfjjpaA13REMbd5FWjxMjRvGNsbNgha2CeyciXBUGnySfoziUuis4kWo88ikHihRRvV",
  "key14": "5k8EYwXuKkmMtXpF2HWGgq6GC58HcMXSZZfXgdzJuBb5ECFFaPFx2AyYJUmmX8Gy5s8arCQD5CBm8sZXf6NNGvj5",
  "key15": "1kNeex7NpmzzwJeFAjDvbcSxPDStnnfZyP3LHe4LDmHE8yEMVP5rBkdGfyCoyS3VH2J4WFKouUmSgMnWnTcFE6s",
  "key16": "5WKKq9or8TQqoAGao24vU7c1yqBvv7G7D5Ar7iJFgtHnW6321XzgLub2B2pKroaDVGVKM9Wh9WVv5J522AGSP5g1",
  "key17": "gKbjFNLCz9Xokyiz7EKfFtkkhsVdeBshqCnimFzV5BbAfsVtWz5ErBipAEdSZ2pAbobDAQWwFMB4TpoBmZj2rhZ",
  "key18": "x9vRJ9YzvWp1niySrvtWFEeadZRWPAyNFZJqjvekKqSidUxhYcNBdRFwKUQvSSEgN3T4JPiopTh4P5XADUEHgcj",
  "key19": "5HhGZxhL2CEEYcqRrbcXRnYcQnUFYLhox89rRdBg58bCLY4opCY7WeavufRaDLJw4qgBrj57mXktvC1wvJGxS57x",
  "key20": "2BT5id3udHd3jDqUhG1C4SBYibZCqKubSscQxnqfHP7e4mNWQyt1TKBMDGHzzmC2VLFzY79hJf7pb2xjqqUkRoVU",
  "key21": "5pELGsXuLQmndS2Xj68YEmwscAJr1dPLc77dEsbz7E6kuf6b8aQYrpzLF6KcmzFwoGdQsRmGz689GsVGx3G1nmeM",
  "key22": "37AtrVnnd9ycNjifcgYj9LwRSAxNCRJsU6AaeNA8zWRcEUR9SXzURA9pgmNcPp1H926Un2WhW2mhdHYnPbKPTfez",
  "key23": "24xfsneuUKuhrQBZ9TwEmdKW3FCyCuM8NBTwnakRRLZFD1vWgVocp1d6WFbsAdpriuYrUz5XFPQDn5qNmJFcfNKN",
  "key24": "25F683E9SxdXodpmbwVGu9PBQitxjdCZjETiutFS2TcDvZRB5ZD28r1EbUaxMq8HNoQeQraHyC88jWx7ws4xxsEn",
  "key25": "RDKJqCHGgNyv5CZQ4koVNBFjBd3PannGvEvHN98t3pWhKzf96JwyQ9vB7DM5QkvSdBjQBvNTpgqpwTBtGm8xrZr",
  "key26": "2zsDWMnBViBXKCXPiBtX9tVXtWEwje3ovXPPMjDzKzQ16sSYVF7FCR9aFJSWdJACRLShQRUk75yv7S38Gs1Qmdag",
  "key27": "5owTpyXFPgb3B4qMBacXzqosKEiU6DGrH2dNszHQzi47PhLVgrZJrASdcJd56xuoXQL2yEUSpcQvVPUDjgUnHQ1V",
  "key28": "5iaHcdUDcvvtfa1CXNuMt3fQ9ZZPfrLFrb27xVS9goHMWeJEPo1CQiotcadnSzRD74GtZFDcdzmUk99v9tRJEY3W",
  "key29": "3WsUa9bTewvKc1uonDvacfrgWvdSWnrHaGhcz5CCv96YCfRxWY2fWKKcwExjzmsr8BKZxv4C2gwPtRDFHbYpYZuQ",
  "key30": "3oNNtLZNCPYCmQgE96truTyFgjqA45doRiwBsbAJNx5EiJ7n1h4KzU7tiwzWxmntC3DGNeShiMsSgBd48xN9a1KC"
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
