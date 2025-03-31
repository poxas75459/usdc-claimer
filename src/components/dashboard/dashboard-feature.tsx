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
    "3bkKHQVJ4aEHgnRgPRhShjhmeChWYapYHSHhLVoSM95XYu9ud1Xs3m2W7Qr9QaiGgPfTRFt14NRwUHpuxMh1AfSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AzZU1LgJSmLHYxNGUykuzzZKgW6vcarG3Ns3enTvSquXZNCmeSXjLKMMu4d3TtYLRPGA6iuqsf81FYDXTJfqLPB",
  "key1": "2hMk2Qz7g9TT2xaJ1j4q86X2GLsQ97EMQjZVTNfw9EocacG6Zdv4SugekokW5VtpFQEvJTcKe776qS4KGwErFV4s",
  "key2": "3dKWDqF6mRgxMirAoudzaQbRk4Fs9K2RUK7Wzejq4Apub1772iKXYjVw4qVf1bmKWAWMdXFMJCENaT5n8y6Cqj8Q",
  "key3": "5vZP4yQKuaaf72Sbcg9iwLbo4eAqdFbv3rFLitcCscj1csqn5siLcqf63VV1fAFF9nkYz8v46nr6SnhdbS1s3QnR",
  "key4": "3YumgyJPNHkMTHmUtPUYtikQWfziCmUR6s5kPhP3i59KuknkeNhsxduABFaEkXar1AnJxgDbMi1cMwxeRMT7SpH4",
  "key5": "4sDapjqZR25qULVc8M4phAJbt9HsoLgdfX4dwdvr1ULVcdYy9RYKbks5q2se6T5xbMQV6joDZAbRFN8hpn2moqvN",
  "key6": "4fCwCLBNXHkMAoRGNFEdCHCWZJsjmXTKPVDgvoyek9f6xU2fTGrNG9SHXV12cE9f6uAwMpraxefMGQXWcZvgkevC",
  "key7": "3rDYKao5TGcCQbZy6d73d2Z2V7nvACosUgFTgaKGTupNDheczTjwx5x7y5jKQ9nphbrLRVxFgx1fpPT7Tk35fwHP",
  "key8": "4drveCpXPrtQSg2xkKz1dzaSL5ndBmqNRyQ3AGaXyxe5F4aR5wBMK9wzrUEZnouiGqRTm6LcCnjUnivLXo2y1dET",
  "key9": "3Z8JP39eY2biPp4n1hPCpyiVyrwdjppWLAoBjn8mjyPKdj15QSvsAq41KzzSJdaZLsKtEtbDdy11JaVJxuquph3V",
  "key10": "XKWvmxobDRLb2tHQa9aC1Jb6ibdwXNLBm3JkXKrH9vuFHNB244JnANy2QHzU3diTPcCaKAHdLuMWYdkGhpxqwTf",
  "key11": "5hKXsQ3yZxHzu6GJDRmgsANt13LCGEueyWnMbQF8kR4hpEW36iU9f45CtKL1hZvLC76izgpJFdZJsDbu16g52Ayk",
  "key12": "2onamWNuDXSvKoxQy35vtLjskArmUns5NtCWHScvcXLESqVxSxoTaNA5bdzVav3QC7RXbVmk1isdXqfKWQ3MeH3m",
  "key13": "XiDEacecrCfyVN1RBktDsAhFf15KHfAXgnEwmA85VSsqEJDpJhfAEu4M3tUVNffFwd2aBiioxtmXieBj2tNuRew",
  "key14": "5sGKiz75JVy8d96dWMAqFhp2Hmn2a2iXvETTtsFgYvSpZxWoYdAVpGcJxFVjUVTq2bh8932tv2iWRLzBrvR4atzE",
  "key15": "34esDPM6sHrY3sPXZcnoTc7Yordc7GAAiEHfmvsjtFRVwtMWU221D7cAAqLCedUjr2gtt9QVjr8j3DTj7FEYoCEM",
  "key16": "4bFeGmaE9UApbrRutU5Mqa3gZ4ZtJPPre5ZxhQKCYprAMryFSxaWFm6TeAJJ9R9yoLwsZzmxKT15DKv737xbcSVD",
  "key17": "5bBXHkTovdnU5ZbrK6ExYTaQhmW3zB3feBEvZXLVyRmnupL1wr1aKf3Y48KfN38gFrRAcDAF8BtpufNNYWcBq6C8",
  "key18": "4e4HQAYvuxcj3f5ZcgUHKTNGgaikmrqX9BNbuDZoqEMpsb12goUDTitgy1JGDchWWn5C48UdNuVxuvfQdjsw7nku",
  "key19": "5BEHv3skApCXXpjqGgDTZYK7fZoeuDwNdY3PaRfrtiuo7oSk2W19AV99azE7cpdJiFL5C9L7Kx59Qf4LAZdoLqhM",
  "key20": "2yHx1iWZwPY9iSGDvKpvhEqceUPbBJW6GEvxrj11UgnV1muv8K8mcCiHHyccj2kCwZon7AVL4c5EQBFJ9BQYtgmE",
  "key21": "4qxFgzdL2Z7Uje3gCUVj7mwLScoLQQnDtYTgCczErNzZHrMfZZridQw95QmYF9WbySXLNpfLcK4E2j69E9vCkQki",
  "key22": "2QWeDrLXuTpKgaHPHSdLuWdHvFxbhfE9V9cmzouhdzsaU5uf6YMQjqef6XVgeqh4XX1ijD2ZxdFB6QhQUnRE5Bvq",
  "key23": "5zKK12tN9RmxkwNmLpHwVjRzD6nNfv1Dd1spNuk1AXSKnMaRrf9ESBnJEgKNoZdwiN3NLRgvrrUoSMN9S3JB7m4E",
  "key24": "5pAJ95RmhxEAN84tgGN9FVUTg3jaUFzGQy2mXwdC4z56GUXrvwdNUuMvfcK5tCWFpgKixmJRvXtK8RnGFhPUpUhp",
  "key25": "64G53PfyzDw4sinwcpA9kc8LBV2EYCNXQoFbWbRy7AULSRLSUdv3qfLdnntsrBm27fm8W6vBLgP91Lj8NWStnABj",
  "key26": "5nBNqN89gQxLeaxVWGJ6FFyRQQstV2brEB3rhqAJmGcLtYXPKajFVVEDG2sC2Qd2bgHciRUDSYmpPv3Q421ydY5Z",
  "key27": "3uzyoJroiqCNBptxr1sjRwT1FxumsNfisV9oRGvUh7b6pCrLb2DExDAh9iun6z34REgubKHQ4zSb5KmMTqFeJzsE",
  "key28": "4f21DNRAWJ8BwmFF3MD9iGw5wUwLgGHagYoG62gCEY5vA5yHgaASdypKp3XBzWQJ8FpDbP2EzS8Y6K5x4UUj7t8D",
  "key29": "2H1kRLXqbm8P81rsMh1ygfbFWmFMqoMgCUHgPBvPYm6DbdeGebUZU7LzJAzHf5G5r777DSMK21D4T1Bw1pXgez3",
  "key30": "5dck7ez3Ks9zrgKHatC6LmNNqGZJpCbHEao1wtnkcfKBGxzbV2s4wUhsPA9ap9t7xyoNPWu5a38BdH7F14zrgiXa",
  "key31": "4ceiciNGqVVGkNkbW7MPHi4jARF1kAKMkisXt1uZproAeEpVpvB8ShbCBf19DaADvhTye4WMtQdpzGn9mLgtqGbf",
  "key32": "62C1NWST8TX8HHwAKLyxxKLyC6zpPr797CYcPna8dRLrD7uJTCHbYT9RUUwvdC4YHq5cja8MP2cDvMgHtovWFo5A",
  "key33": "3SKHyfbUmw59ifVRG4dSqBpmpFBQgJ61mzwZ8ez11Pcx872MYyUNodddUMe2eVkPQotchuJDVu5aBx2mMXPdLF1i",
  "key34": "9oesEG9cJkrw4LGV1CqRyyJyAreV6mWPJwJLjxLU5ySxHWoGFtQhUjd6HYxVt24P2gRz4rg1uEKP1Qpr7t4Bxvh"
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
