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
    "5VCKLvq4zHNH7NcC2xi7Hvd95hbYVidzz5r9y4uDeq1gZTxPUcpsiddzH7XtsrrT4v7kfdTcqNhcbBiXgrDrp1XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6QoEGQFBRZPJ4NU42AFsLYDzghSw2fd4GPxzoyi4fm4XiVy558L6N1ToxU5QstQtt1Cnm2BukTC3nw7vwoKrUwx",
  "key1": "whZdGGBwTZH3hGru1tCVUSZnCoK6jSBr9Vf2vyeeZhXDFpqf1Xsuy2uGxRdvgwx9LHnFcCw9szpavhLncJqcVbG",
  "key2": "35wVmhuyA7uVzqZ7XBkcXMoPePWK5Tw8voJWd4vFdVixxfT1tLJrcGtU2gKPLL9z1dYd2r5qMi1mgoGHhuF2e9by",
  "key3": "4hWSpzRXf2bqutvXHa2fnQJSJPxiT6yaALhpbnz3Er86oHRPinEv2bjmQQ9r9ysKtNZBTVHMrBEFV6ngEr55qcCN",
  "key4": "5oR1wFRxJYQdkhsgGeh7By9RYkAJ7NafXwoM6THdXrGeWBsw7ujJQvH7GfkWdpHGimXr9gXusKEyz6DJwE2uj52T",
  "key5": "4K7Ste3NpEx9kRGCr2iG4cxLGkA5Nz5nJuSLEGZa4jEXkmSBix4FVWunpkeK6W9g8p8WPNGQwR84kM1wM1Kaikvx",
  "key6": "4Lvzh8vaNUHvSmkjc54w3PQGi2jzoroZzjkiw9VEXrD44zNuy8h6o6QXUStiJjybQm68JxGAKAETYVubkcWLc7rb",
  "key7": "4z9bbkin6s5uVDmbbPMgW2KuF9ugAe8H99s36i4yL9GV5BUUeaTE2xyD1TRxGTD39sMv8Wm8yx8PDnVFW7rm5P1h",
  "key8": "4pc6ZDzuCgk7V7FsDBj6sQvT5yhvopsdUQfYbQzpt19eYutv7EMx6eFrvi2PcT9Md4RWHenwkuP1egwrxnXY7sQn",
  "key9": "SdEb3jpGSQpAGFuJSYgABRkyL582NeJga9HufdPkyjPqEyDM6a6u7A6NBBpawQkFdv8gJ1ACNR6yKj4UMyo6cdX",
  "key10": "53LobXbaWkFG6nNSw2V55RyV3PyLYzgnacvpvdFAoJDgdSoyU9xpm9DGZGGoxrKKvG4Mn5YJmQbzD45bdhfo3cpr",
  "key11": "282Fo2HUEmfBbsCqFdfRSuS3nfF4qymBv7LVmzTXaDEcYqZ5wK7FMTVzAvVdD38xHijTJD66ZvwfHz9NB8UDjGSM",
  "key12": "2tfbPhFHt2AkYSh3ZJAEzwd3A5GVTPkFTXtfH5JoQw8dH6FtUhyh84RzWoBaTSnEmfcZggma5rFVeRug2FRBx9P8",
  "key13": "u1wVRsXUiybV3v2wYsnoTFrp2N429FNum2rcvUoF5rfBtCP416UafKDy7hP3jSay7YWBYh3wGtx8J5sLH6CaT2D",
  "key14": "5ntRyqtVpBMWVKXoWdCXVyvDzv6c9UVEhFtkcMfZJ8asL1yn124Un5DZbfPxKyvv4vvrAjC4v59obLYfGzCpR4Cc",
  "key15": "4NqL1g3TT8ayLfyQSWXKqbe2bHKKceMRWNJvvpLYPqFRpktncjyyB4wpWzBxPH1MDBc6KjeBwQn4n842dtJ7y2er",
  "key16": "3yVTrr6ddGsSDBRowmHhVVA8mCnfhPhsRUd75gr78v8ZQFafCsGBW1HYrV6JMjJ76prhvdYMbmJJ2KXQQsF7NjNF",
  "key17": "21XPvC8comT8Tw9PpyAFc4P1AWfTf5T3SzwXfHKtXzqe6WScLCYx57AYkm7Xhy2LG2Pn8v8X4WS9Gss8dGMAdARc",
  "key18": "4VC1dTMnQFvNVyXgnaoC1eub9icoKM49r97wdJdD8uDqwKYbdMphtPbToDQ35CcWFMFEThPZ3Vtnkxhv53XWNZzP",
  "key19": "5PkwpfcFtW5Px3F9bt9JzmJyTQVWtQh3KEXd2JzUooi3pvAT2bAzLsZ45chuo9DhxMeUJorSyaF2FHWGXCjFMeeN",
  "key20": "5CaXdLFaMBpEiss4rg6TroHY6jrLRGZuy8i3E3UnZqxH42m5zrpfyQknyGUiwoFYHYJX7yupiNVDcKdpJLrMz7Vm",
  "key21": "8URmHYq85qVhuQwiZmQMjMFSpyj13CyFcPBDou7ZvRmUrifd7kubKsag4ACFkv7AoLvzkthD7woahFm8aaReyeB",
  "key22": "ZoNGB4TUB7kWi8gYuyejeAdZwXx4yLDoZX69gc6aQmueD3zf8LMNLixWQDWDM6b4eaUkBuKNiMsPEj4RMhNyoBu",
  "key23": "4U4hYrsUzEddrcqH4zP4g8HoXPpjs8468eScg2w2viJRssAZjzwKyfR8ofgkbmYr6YkGB7MDXeJ3f2MGnGm7QLEL",
  "key24": "VGBCGxjh32EPgFDorCQWx4LvS5PnXckbPUij5KU9t2PnrRXdLLD1Z7vJmYU7zyECZB5cPf2ARaJ7bCQm7KVtNtH",
  "key25": "Gtrdwso3kH4w4sNyxXem582h4oH6CEPKhQ9YM9orPApiAvhAigx4RmAb5n7E6V9H2VFs5MACmECSg2QuufNVK1J",
  "key26": "2MZo6fbMHjVbabZznw2cbpZrtTTc869HwQC9TMvsRcrycCZBhY8RVSJC9jQpiJgWfdpx2F85xYXiKJYBCDJ24kCn",
  "key27": "37pFmnB7yok4FWH1ww7vKnm7gWn5cdeJ1qxgRJYDP54JE1DBd18dhBUcfa39fhhy23KpsUtakxizJNs3uzMCiamk",
  "key28": "2hpD9T6fdBYSLnkpUYGyiYUpvQrdEUNkQQjhp8qFkEVVsT8MdfCdX48du5sjcaQ1bqkPhti5DTkq8UNFKFf5S3yC",
  "key29": "4Wm8ZSkZvfgxPusw9MjQZLjNsD8G46kFaGWwJzSLP2cAc7Ks3PAaS7rt7qaxCSqqVCoTWCKJ41153PVcKptbVZgP",
  "key30": "5HAjiMWHhbH2XC7iK1vEr3ziZ5cXkw1YHi4UVdydCecgmHZhmhLXm1NmgEypVNfZihrryibfdkg7siAMaJcu5i3V",
  "key31": "5SpAQnc4VpyeFT7QmRQz5TyzfkoKqQGVUwE35NACy4iFvv56tQhAXLEdBeMgGUD6CTjGgQGqiyFwQx4RPGaCkf3W",
  "key32": "5yePjX66wXwX8hagercBtABas5SH9yi3gE9PRFJmFxExgoJU5ifb5MbpSv6gc3y4373X3VKv1DcUt58w3RULi6sU",
  "key33": "4ejp8LcwVkj45ArnUWEWx2B6oh4eygBPFyvZcMa43uAE5FYZcgzVvgXwLtU1CTjHDUGDKiRhgyLAT7ueMd6yAPHa",
  "key34": "2VGuKPxAwVmauE4UX1bnyBUDaRhYYacq3fVy36EAhNMAwRnY3BqUeKvDMq5dAjEjVifgJV6z8addBwdoNBStqXhY",
  "key35": "2gDfK7PiWncEUSdgqxFLzyd3aZpPJqG1TS9qoyqnhLj7ECTMm2Y5QYrLADhXYSsRDRSNuZorLHhCgPZ9pMjNsn7c",
  "key36": "fRJrbPwh67sMg9YqK6tpMD6tkLa2ubKaxbXmS7cf3HVgTGCa5UzYPFFXPxuZ2JkyGTw25vsnaZgeLGkRvjgPn5z",
  "key37": "32NxbQBRLPGnUuM2MquXi6fpv6dyc3bud18n4iZfagGj5i6QntLm6RaGEwSEyQfW8ZooQ8KkFXNirt5sRGaoDGbL",
  "key38": "2p4rp7RhCVKf3PPJvyYvag8pzXKV7hBmg7GDoXX8WGipbJwbpLwX7E9YTrNhsfXhqTmPyNjC34rwXtMT4gDQFqVK",
  "key39": "5sKH9Nh2rRs8c339s9oYpnW1TrYKkcfc5uGco7YeJuv3rRojpBMNb6cR8aRKTWjZX7vKvJ3D5nnHZf8rxMHSiKM8"
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
