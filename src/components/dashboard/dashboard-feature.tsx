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
    "3XYDzxoCghrRc5YVoM5zxS2tutWNYEjRRCWQ485o6BWASZ1fFPw4qkzpnCHrDYdtQ11jrY1yJKKM1TSWVnH78qq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NxMtq8x5rCrUcdmpx7DxktHWDp7M81iKh7hcSuLsKF3QZG5WLjiUaW66T1SfFAYPB398hXBuZvD9eXDxvvHHQu6",
  "key1": "2fwHZQQYRpKB8XairU3twvD2VkgausX4WVE1fE1fevkSwyKr4J8g55gW1oVBeBaWwZFkfH1M37evprvuF4gub3Gx",
  "key2": "Dgr8DK4DBNoJbFJ4HtHydsaYKGXUwj4e7NaVLyLtnXRKotLmPddLxasazRhvGckeuihiwYshzGuZvMnZRro6Ww4",
  "key3": "2KLcqdXH9tgDZoYDVtoaTCxxa6otX58nif5rxUztU6qHWb98WnAtQdCAEPyhYvaLLma8u7CsabHD94NuUuaqFW6C",
  "key4": "4a5cZSwVFwUTosFqVC2zCNHP2D3uU1uynLhSNcVDKwznKXPhfkLpHA3QhnybaH7xNpybBg1QJ1E1Kze8w3WWtmif",
  "key5": "5fpAuL68dQ9Ch7shFjokHh2BwHBNbTfHkpM74jXygUtAQT7kxEz1GAcP28DpM6ZH3WTCw7MzgKoibbFtEJEuRhE1",
  "key6": "KhWuM5s2vCRz8WQrRqXgVEuPJqJy2QXDHnY8DqkWWUUWYWwGdDv94GX4MipZQX8C3Wxt67xEiEefrASQCJe56jT",
  "key7": "2q9Z63Zy9yhH7FbnzyB73gX67uWmH4ae1j8ZGpD2rzLi5VKvpeQhdkzqyuGhsCUR6SepD6uCK2qD2zwBkXnsVDiE",
  "key8": "2UNB1eHZZQwf1rPY1J9uJ1ETmLdrfzrpafPpTchrBeVrdo6GCbzZ2485PzwP3Smn5JiLQtDiGCZkfbi55j64mTqB",
  "key9": "5p6vsDJimzrzRenzK6H8erSVD9gu9swkPUHBTHnZh22n6JWgBDCm1xzaexsBYaECFJjXSAHfjYttKYuE5EhksUBE",
  "key10": "JSjYrQErrFJq8jZBW4qqkzcbDNqj7j8ZgmeSDTj8aaK9jKpp28bXNYNVW1a8B2kUviLc6UeBiiiyufjSCub8GKq",
  "key11": "5VdH2ma763eiz6zZYuzKLcK1iefb84R7c7gEZ5qHbUvAC8XXcmU9sJ6C4FZ5vBzkyNbDycYfwFSmYy717EgL5mJs",
  "key12": "22K5SogtxrckYiLWweUppTQwJ8YveGBH7sdHxCXUbwCa1pMiGen6njqRCS4HvRvpvAAwuwTTJzfcCTYvqFh8AHHx",
  "key13": "5v3gpwSxUKHK1Sfnx4PqfRpnW21VEkFXRsRdFCcTQvm6PzaoGGHp3Lt9Ag5w7MKDuhd2B29ana35PWWDX34QMhXS",
  "key14": "5gUFDUV3qoadTpBXi3E7QVVzK1ty1LXWcLT1q4u5Q8VE1MpnZk8QArwaXXkXCxTNwfuiivQXw1puMPsniNojE1gm",
  "key15": "234UGxDpFDFkjfzwCuGftXmMxns8HDZ7J4zZtFCGxpCiV6eoVSgSreDKddbdmPZfJda9YwnxypmVy7czBsoaqeTw",
  "key16": "2jypG6ggzbzdpZfFjzYywejkdo2WayUqXVLGsmF3M4xBJCuyunixk2WCfSEZ6jKVfdh2aeouGqkRaXzDjbwA7vp7",
  "key17": "49cFUAprGR7HUt6Ryt35TBNy1p3RPnfUJWDJW3sYpsC5YgaWwWFMbD7dePXV9s3q8ygZ5Z53daXr5pwZHZkqNLhx",
  "key18": "4FuXhLeUJCav99BhGsn5wwR61NpDxRW1h34dzmobPx2qQvLN4ytSQ1y9GtN23p857iTSKgv7HdneCJdwCytc9v36",
  "key19": "3dXn5kA7Hv1c1MrGauQne8GgGzpS9VpsqurvUDGNzBbN1LmaSRFQk1aENicgh5hhxM6y51ihk4hGjjh1Gd93h2xG",
  "key20": "2urFYPFrmSgGJ9LR3awjy2kiqA9SYXnUXyJejLibNTPjFL5fAiBuxJLpWm8uoZm48yvq46zJ4ZZUZ498hwFqVKQL",
  "key21": "25Dy2SHnX2TEjqLiGtUNkWsHgkivRfLMWcFhFvwqcZgLo2HAbi6ZnjWqUtcG9ZgYrzQV6oRddV91rUNEeJmWMHHm",
  "key22": "3pENfYZGD4w9H5Dx8tbA8q7RCcGRpWQaopzsQfJdNSmXyacgBhWHAAoMYGKGMJVPeGvsyS879f2dzmSmNmGJoXTb",
  "key23": "5kt2jmkfNwTxxNVt26SymJY6icXTgYEUdex6ftF2RqjRVex8HTJHyPHAk8xaAwVTQi3WSEqhqYV1XhrxkNRCTHPr",
  "key24": "41AL72t6mydfXWm3eLQVjvTGUzbnwp28uMidRAXP5jLwqN96jkianPzoBVobEaKgUDiohzqAKHPnm2oV3RfS8jMf",
  "key25": "3mUWgwrhyASt4Se76kdsifyHLVywqpQVDsw44W7YL8GoVRuHMJsaFzAHV4WmJnADS1aFDEmpHdTbnEHjbJdvuDfS",
  "key26": "5iNmUs73R7SjHv86gDVug5j6saeWriSYv4Em3RsyAsevHxqoSgtdcFyvKVx7sVh4YZkY5RS8LAL4SW8DLXTcKKNN",
  "key27": "56vESSTFki3BSfmSyyoZoaKvWFEecTERPbJJnA1uvwgwj5V1jZEnDQiRirgNDuaeKrtrwvmjY7e9eEj16K7Xkho6",
  "key28": "2CeRD9PAojSdQPKYFwQwMtYN2X2tqFRBeaxVw2gnr4s1GGVfwZoN6gSwUoWvmecbxsSGdMeF5yQYNySG37T51BEn",
  "key29": "3Ro6HBY82wqmHE9xmYxu85BMyXTadR7iHLqbqRorKHN7B5AYrhYg2sdqLDYxesU8Tmo51x1XCgcdox7ciNXbnYjU",
  "key30": "38HCgtj6xARPFdKyhQ72Usc4Vd2DbNAL1uj7nTchX8G7yPMaJNLuCJFMiJgTRD3ou724a9UQTmHj44vnHH9xWwbW",
  "key31": "5fP31ZUuMiGHp7XUxeDFdbcMFhaK3FnoAu4GC9om5p7AiS17EZAQyLKWBgsim1tBcv22sxxveivwL2nDByKqXdnN",
  "key32": "63T1jJui6rHTiaYpWXRuAZjdm7ECyB115ZuGSarJr8FrWmhrVwhwSgEcNZ2MhR2yRSYt6C9cXmdCZpkaoa2N1j4W",
  "key33": "2fo1W3vonyWm4FC32niG2fKC4xoVzBtYsko8MmZrKTR4HKmkt5KEiRPCdU5Ks27HgP1Sih1vYiccEhTtNqyUj5fW",
  "key34": "5MaTC4dyVpT9X6xUgG6mXh6NK9a9r2gBgM6mgsHYdRC7NuazvjNQiQcXnAYnhNMDxsSeep26cUAoXyEZVYBBGodW",
  "key35": "2MbmmT7FhGHezs2QyFV4pb1Pn76uHZVX28HDFZM6Xrjho7sVkZj4udXvEXEF8712H76gk4bKKpmBYct41h3bfyBc",
  "key36": "W7bGKNafojne9a5pcN2fkiuhStJyB2ePgH8nsPobwPKT9erAgEnZGRMWEpTXe1ZBZkFsKoFgETMKmE1xXckbTvw",
  "key37": "2N7yYtEh5wMZRFKLTGcFUxnhmHu77AVERKxWSBCjrTijzU4hcgfdxfRuahAYWccru8WVf5AQNe1vRRwJt3DfS7KX",
  "key38": "2zM3pRcreNhWfNCsk4oXCnWrrozN5HXdaajz6f1dHFciob8WRKMxKevprPygbBGiQELJLMprvWwwLidne8P1oHue",
  "key39": "2STTd6Pztpkns9aGbSPZW1sJwYLz8dPcQ4iZZHWD3wS9G5m4wvxiHQwDd9PpXNa7dVxJuV9BTkXubTkjBVg3Lvjb"
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
