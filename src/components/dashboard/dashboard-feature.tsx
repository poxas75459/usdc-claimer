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
    "2bV2cT6asWL9N4mKCzdbnRZpByGHLzM69KP7qpy8BzGGLVBV9tRGftJMAWcM4zttcvyGk5BhW9Fn5sCVmiS8xYti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31C4L3WXxNCzqm3nFhp8Sc8Y6vhDZa62UFmwBBiKyBtM9doBNmSF6k8sPwciRWht3Q8sE6ipSy5pFtNRzbN9pkMh",
  "key1": "278oBXukzwfg9L7ozZUZtugj2NQ32FangFt8ET2XM8mMt8wKMo9rr9caLW96PCqnHbYCWWBvpszSTUxafM19T8hs",
  "key2": "23UbHZwg5gqYPqgdDK5LzWtqSqsPHt9SYDUgnerdrxAEN5GtDVafmfmpNdKdcUKGPrgZ73n7Qb4VfdjfuAM6ZBdj",
  "key3": "2A3rSJNfAarYoyrsBgAsPz8M2UJaAm3nrfaCsvFVpN4b4zNvAMPNVAFfdN3JZV8nynWUxoVAxorHgjVFjDMGny8m",
  "key4": "ejfPwfMcxgLgRkPzfLmkEt6Npae8i4hQSiAcFTcDLisH4LPiHQ8Vtpjyw1n1XdTo9Kq2PpJYyPV6M8xM6PrVUb9",
  "key5": "ELG8WzFAXaksCCeWdM1CGB4BDgjYuLX665iY3Ch1sDmUNqMHro9vc1joQyQmcnLW9sSb5nEFP4bPkv6dQnzZYjA",
  "key6": "2Fpe6XuDPRJF5iuP1sn1vKKJqfknKNeprzmaTYRCB5VY2igcqDC9iCUA7Eo3WT6mw8AimBkAPuQPSAovUxhVAbKa",
  "key7": "4UCLMYeMMh3wpwA2qctD1bCg95CbN9dEh5pi6u2DsRfV7GvEAGcu7FGGVXbUnYbeCE8UPpM6o7ziDg239fs29BdZ",
  "key8": "33b2stb922uknURY2Fz2sLUiXff9s6mSfeAwBHJBRZ8KV7Rwac8R6AsmX74rDnrV2QoV4WvAXi687xVXGgSGuQcN",
  "key9": "5Ak3GmhgvoDLWJNs1ULrDTVJJFytLg45ybiiniN7nNrjn3GFyr3mdFJqbLSVGnUN41m4wTE7K9fYuCNc3jfbPu1u",
  "key10": "24rHrdEEUFxqcAZLpPeLPzdCus71cUzCFKvMhDXHsWAoGkSixK9zjSKJytJvZXM2QWfLgCXqsZcdHekPUHVFweDE",
  "key11": "oCM8tqCNeWwGtiJZe3zmnRASxfGRvNLjZpjdkd5mgHubiFFwJGXQzMk1iZ61VpC3H2BzFaxkTnKH7D9W1PNnya3",
  "key12": "2i3eFFqPY89mXMCf4xrsFHTNeJCni7gozM7Z9bab1ih9uPPXjnNquoftraRsFLEPWgUCd7xvTAK5RuN9JpbczYQ",
  "key13": "5eydFXeE3ruEqCCk9iDjVMtK6SaDaB3W2LBpc8w9iNY9mw66m27fZWiDuN95xnvJBy6PYAKNgDsagY7ATKDUEa21",
  "key14": "3emKe3Y9XBq3GmjQKh6xVfnRPZc8MhcnZ7GEbFKwdTc9QRNx49Sf91FbV6YnCQ1d5UEJirXK2C2UZv2m73Ev9iiG",
  "key15": "64aUjowq9rABgNHzL115vD2mzCg85Sx1gGFuM2ZyvLW2nFNA62xGr5KfbRWr9YAwPNfToQ8CsYPMBTbJ7bqwFaK3",
  "key16": "2HesdJei26tjJcXfykrSEjmptZJFdNosMYrbyEbrVqPXnQBSqAwav1FDsvUXQeCZVxUmnDhaeoQ95dfXepso7ybW",
  "key17": "ewT9Mn7BdCvtjrFztvHinQ9F1UGqqsKJiSZ9h6ayPLNkz6yEzHoXQ6zZRvfT4PhRh9XGbmdZpLvX4LZceTFqUTc",
  "key18": "2nWb3dwYhi7eV85ej1AMkBLKCWyUhiRkD3ckazLKUz64hc1Wtj91FNjzrPwhbbu5yHBvtue6Lk9h6BBamSDLoy56",
  "key19": "wpztyKh6Wb8MKKUsMGqud26NWudDvaU7HhgYygrnro3fBVBaP7fzsSpoFrHRJqycP9bGNr5np9HPsoErijp3R5L",
  "key20": "58YkgGvGqaqZXVDD9pjBFLmupeviSh3UCFiTPtjTuzJN4zaEUwkPi9PqZUG5e9YYLmtMC9YnG5P4u6QuFfdiNPkA",
  "key21": "648pNamTpy7Yp7ZyPiKdRCDSQz5GeWB4EGQyGhyTEjBToL3kTybRTFude3YbtXTRGnViF9RSSNhcfF76efWkhNU9",
  "key22": "5YA2CyrYuGHutij2stcGwBgvdtwz2HJbetKL7Up9zZij4jzuuM62v973hGVyGLy1rHjsCVkTBbiqKK9sWnGY2mFU",
  "key23": "2mxpsEqDUXUyWa6fgFsDQTqXwCkJjFNuaozfgY9LYmVxqw4aW1gwJrg4gGLkJgQh3EfR9YDXRCwjNNAvd4m94oQ3",
  "key24": "Qe6VmSTQGjJR9Us5U12ZsYB1VfRPo9QTWVhUaYdi6LTYS1nGRYsk6BmfLuD9AGobNmeWGrPhesWSS7GfZSuMedJ",
  "key25": "XyJewCNQD68ieK93FcTZ5rvftQFu9P4B2wXDfXNo9sdyCZYsD4vwKScJsrpgZoGbyefai4iKWLmpEEW5dBs9bEb",
  "key26": "65hAcUGeFdHQd4WCfgddg5bcaZisgkvjE3jataMoY8ES3sQsAWLQLNAABDSCFVLzYNd8HPdkPiVtjY3YEvqxbxc2",
  "key27": "2nut9jhGxfKvDVRR1P1fbjZdb1vKugUzc25ieFZabuZy8hCHhJiDhr9Em9S9fqVRyqUPvGNF9Rvigvsp9ahVw2SD",
  "key28": "3ocwUGCyBvfhtpj86Dm3t2QVwnbrVQ6G4A9TzszGMt1Ps2eGVk9nNpSAWg76mn3cLhvesC2fzs89XJe1BZE1Xx77",
  "key29": "41QF2BNY6qFbftGYPRw2PuryMWxhSSHp85aYnWv5PzecMbN83h59PUgPzpLvMUhQL57UsUE8oRbRQ8HAT35cxfFz",
  "key30": "25mVvm93gBbXhAzLpbw7LSAN5yf6Rw7pVhaeVuR3WqpghCt4Amq92eSYtjJRKAoTpnbBn7FeKSPT8m1HEgFeUWVQ",
  "key31": "TszrsbzXJLBEYvU53eQZtEShncZ3GybGNCJYGpsWQMoaveT5cGAtzV3yvsQHUcS9PUj8zyAu91tDRfrNs8wZKFv",
  "key32": "fpqmeAZ41VAjPtNZ4iUBo9VTyXURjHLuHMFbXLj4EphFMkuJPinPgCLoBeY6fFvwNPvpkF1dBzLKhiwkeXQSAgH",
  "key33": "8zgWrFXz11pgv5TnsGS1hFW34BDSJihWYa6boSCuq7Aag5VbRDREXYZ1gFdiQEiiSqtb37kTNCMiQ8ybwQAuKg7",
  "key34": "3vVCtExLk6ATrFSJ2YsqiU3yqi1VqGZCe1dQbpfF4s2YpcwCY3f7cDVjLCw8sw9NMeGeNMk1dYstHv8fYYcXZuAX",
  "key35": "dyx73ULW223Vr6BcpSmyrDZZ7qdy5mULQWXTvdg1dHDVQJY2Y2vNJwJc3Mjm19YceKKCVqNV5aZxtkimjv9JQzQ",
  "key36": "3ohg1MbJzPGij86RbFzGtjYQqGpoSpbdNEvjHFmTnuRM7ZuWy3xePeDdxG1cpqC4pXe7CXkgBfkr6LWtXf1UYVPw",
  "key37": "AGqnQo2aqKNUxyB5uSGEvcTPwHTA5828g2ixhS2JghXB92wzAJfJcx8aXbaVXjgCQGobSG1jipbFREiAN8XnR49",
  "key38": "3AzJkCpGQVMbj5QN3GzPXsdtyA5pyf6hCTsjv5Ugm24va6peFYTxW2ssbsVmFoYjUERYnX5uTNNJ1Cv8ACBttrTj",
  "key39": "2ZqArhahC9ciZmavS891gRhje7BgR34ugt4tpFhbmVsQjVdPEAyLTnvDuT25ZHvCX7EY4y3K1tRCTgwhVoFBRb4"
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
