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
    "5DX4mFmHEJT2uhUrtBDHU2V7k1RN9aN63V8oTnXCSKw2mbjxQEzfGTfnkGrQwKMMFZ17FmNA61NoN2HSrWSf9QCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KBeKeHHg4K3unmTaKQu8XbGqb63aHHFZq4hY4dvBe6DTvGeBGMG9Ph7D98vJTREsKVfRuFXfyGSo2MJi6Sioq4m",
  "key1": "2czMhuWYn33uA1zzX6VeTHvxPB4WUJQQ7fJikc32qi3EMtSYDsuXqf25NyCAoyjCRHgdSWJPVffS3sNoXk4sGjzE",
  "key2": "3PgBw2FrTaZGdqpULGGUMsp8rR5oxtuAmUPi9YmMWn4iNQDru3gzULaaaK5nW7R3fbQy2rsuK8CN3SrP5NAbXzDL",
  "key3": "3pYPDnkCPdic94zognZZqWni5UdLHTAU23f69jqsw5WmiXz3SrEXKrdiomdrhD7rTvghdQhXdpSuSCy7ruKzeGf8",
  "key4": "2dAsf3fePZCFkzPfYBhj126XThvi8QqHf6VptJjxPY48iuLXoPfGReM5P6FVPCvPe3qsL8reJjQfUXtmdHHJgbZN",
  "key5": "44MyTzTMBpvqoerjjvrtHeMaoSfUhmc729KtjTMC4J8Ngp1C7GFN4fd53F2bF8aHcma6maSBJDB6Pn8bur7sfRJP",
  "key6": "3htDB1oLwjtYEDtyNWzpKgexfiYjtd1a24Cu4AbNP1xaNp7rv1rL3DYBKF2GmKD17n27xduiviJFzut152BsRr9g",
  "key7": "2Yx2oUVwuvKhjtYx2FjHAeLydmvvbbyNzzXPgHiDPbyPQpyjPGLLRPanXhsax2r999PyzfYiuKK637cvmMKCN4MV",
  "key8": "63UQkDpnkMC5MA6Ka8NvXaLwNG4edRFqM1RDaciWPErHgKEaKWwQAEUDUed1AupHvKnbiPFfW5zEN8MHoPRtK7r8",
  "key9": "2YGqvcPsqtdt6BGw7ZMvxFzVftWxpuAgA7gWqFPsPysdg4hxExenwUiE9WWYGHox5B74GrkGatipP9wYcwwRaPM",
  "key10": "gN384rGECXAL7F7qxuD2CDmD7r9XnMYEwWZoJKU55AmAfjtfaNkzDRohxox36h9BuiPnZGP9aLJFwhXCM9ttXq5",
  "key11": "5bjKc9k3FgoLzZWE24rSK3tVbRKo78f5mzNVEUjKSkXELneFW5TrbFXWmLy3YPstcZoWmUTCpt2qLjESWmNQMvKM",
  "key12": "66fyBv8YyoQpcA55RFp17FWKqXh3zF4Nk3Q3USXLAr49bsguUkYvDty6Gqe61k8BiZE75qhi1W41TNm3FrUPVSzp",
  "key13": "3MZNZQ3YenkMy1GBRjxfJNkcZGgLUAQATafCx6dYN86XBtXBkeM1HLeN8aNF75HyZJXadqMhciaNJSFSxoqgwhZW",
  "key14": "5zXHGDmdkTUknmYKnKKxHcpUfaryRV3iFTNyLvueEe8mNKZCHNt9ipabPBAZ9vXGhArFPonxhLTb8QpvXou4g1W2",
  "key15": "tDgWvxX1MwsGNtQbT2ephscN3p7kewxM3tQtFtUwKpxgag6gMWQAr3aSPpnUqUR9XeGsK47zDUFBP5dZFYpMihG",
  "key16": "5iRFd72pyJ3thdz92ePxgT88DR3AnczvNsQeEY98qDuPSjKu5RbiCE2Hz5PCbSmPKCNq6yZpfgGjTKpWuB55PrYS",
  "key17": "5TmcG42ksbWhYiBhBucGbTbgEGtv5rsUJYJ2ioKAhtqnSwAyEcuLYcdgYutYqrJ9oknq4982mC9GpRtKBoUaUJUF",
  "key18": "3HhxFoTTuCG5Mih9NBV2xvCgHSnBFG9frUbv3CH5Xbsq9Cf23vrP7psVR7yz2t3YH8XBJGZgMkk86EnkAiEejP8i",
  "key19": "4qBHhusk6xCHgHqsN1sxXQRybmd574d1DiUtBhGQkXQxwkaz2AM4RmXMx6E81KffjKcxNbyEjsMJ8SYNKSTdVXuE",
  "key20": "bQiQsoW5Rbb8gRgKpKvikpLnbvYL3h9cbQsuiU6V6X35d7vZnr2BetfKnwxiQm3u7nn4TqEz4eFQyQnvsfyDKfZ",
  "key21": "2qfYwBtBth8doe6jergjkxNd6mTZDks73cY6UupiQ3u4C7b5x5m2SNpLhuP7GNh1fQTmp65YdmTorSdFcTtnsXEZ",
  "key22": "5VyrswuEYtQDAz93gjx3Lq22d8eBkNcDLAL2vxi61ho5UMMYF2uUnrwQ7NS75TgFoqqxDSkH28LNQabh31rkARuo",
  "key23": "3K1smVAMzzAXsaU2qeQLgfV14B53CJBQyhxVH4Wonzbm6836w7spPRBuZ8mBTaje3EodBaziRUs5mGC6uCALSSuq",
  "key24": "4vVkuxx98Zw1aanNnPF3fC1t57E28xTV6ZwGTxjoVwRJ7EBMbttaWq1rahYpGRM7ta56Rk68JsRQCWC1b6jNP8BG",
  "key25": "3xcHy2oZKX7NoxE5fihYRUVkgnx93FydaK7YKyeqf993j25tA8z6G7Z9HFQPbTmo8xSzLRK3hgsktAKJfnrjT93T",
  "key26": "suEAjEGd5mWoCaiEhWSmw6LVejdsymN3AojPVxYkjhkUKwuauWo7QGDBQcfueeiKrysDN1MGXPdtDeWetk2X2Ev",
  "key27": "2wgQf8vGTksdycndcRYNJKBqxMgSfysgck9A4KohVjgFVDvLtjbaR7HcfhWyj9WyUP7pDGLkXTy5jq5pTpbnVRT8",
  "key28": "4qccQGwcggmxEUTj24qkcbbCmQsgQG4M1DoatKi8zWBTiXL2GC7GWAzGqcT9NBatGGo1VjXnkJdGFtrECVQU8ZAt",
  "key29": "2ztBnMV5h6QoN2g3JuLuc3KVkn1kJzLsbQdSm2wMVyKo1oAbqDfdNMJZbmn6KU4rfntUVA8BwXWGTB2oF5dM3BW3",
  "key30": "WFvN5KqYC8WyPrqh9FJ5jLGquUpq78Y3ZUNFbxVF5pNcmcXVpNrCiv7vv8soFMD1kEqv8ujkzi7ffcKrmEGYKV2",
  "key31": "2pWWYAU9xnYYVukJF7rzUJesMo4YFppkuo7GU7wxtmSxJsMR8E5L6HyC3g8tnD5PrBYzpYMAGkJFdt9vgw8NnrNn",
  "key32": "4c4ToL4LsTAAarytkrsTqmoiGzZ94pmrHXN6LzMsT5UY75SaHQfLzDahoK1TzJokY1YUd2UzoL8V8FzjcZD1vtpn",
  "key33": "4nFCd7fm2uR3trC1zkpyw4daNZKKfMX1zf7pp98fHx88UheY7boiEk8Dh72TtPqMtbgkzo24Cs7aog4AR7bWkZ9t",
  "key34": "59sewVEDiPKMtdRvKBV4KhPrhKWiRengymuun3sAY1Dcw4nzEy9TbyxY43bJ7V8Uo36z6fse7RimLTsT6qjxMgtY",
  "key35": "2kGPpsW4cvA1vamVS33eP8XLjYigoWdPjo35RfiZSjbX3UgJMHvb8gi49Hcyt6Pf3mP6B3FXZpsDYQ41u7YbppNP",
  "key36": "2zjEqwW1WY74KvQZuLeP341mAdipUUowhvWm8sPH3CSZLdpP7v3EeTaiHXL4bfm1yyMcyx5KEJFWUmGd2vcz4p6v",
  "key37": "5rvw8UGmdTxFNNW9LPQB3CPiZgFnQ9XQZAhxm4q7jtKZbbp7K1d4GGKvrNuB7TEKbTQ2JjGA7YkxXGqjjysWnCGa",
  "key38": "2RVLBqFHWPDXsAktX5dXAzyh6ruWK1XqzEhHvHDnmRGApeVS6w45bM63bLxsGonkHAadApvvnbM7ffXaL7L4CtB6",
  "key39": "2DFUq11SbcfKpdEryDD5aXfTsLhvAtrn4teBdZEY2hSFbctPfHPn8fPtGLU5CaEvf4nK5Q6DDhn5LG9rqSRDpBRe",
  "key40": "5fSPkGBfMP81c6ehfLiuDQgPJqJfQrbD5upV9hjUYoPTJ4Sg6DhUZW9ZjxWDH6va77bbm46N4RGBEgkSPZzCM2SV",
  "key41": "JZy7Frk8Z7ygCdyL2LnoKCwg6vcEgdA2BDoDKVNJLtJiVrf6PPYeEA98GkyuDUvHDUoYrHyYd2CPdWsAWkpsJYo"
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
