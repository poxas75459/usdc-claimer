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
    "62mQ8TUMM7mNehhT4QUJcZfKu79y9Zx4EbewzSnvqt3C6dz5jWhjD6YEx4dmYYZnwZ3wtD1Ghm51bEdDgPNPUz9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UTbd9kvbTeRWsZeYf96ZFy3hFzt81fsRU6jcDS4Heb3ETpiEPmbH2ex8Pg3TrZ9xsoyhpZ8BkCrwVYVHqdt7Rzn",
  "key1": "PzUHUYiHyG9YXLkbFGYr1WJ4awuXYDbeRiW8vHtMy3AKg13Nc88ukXQ45fVg2zAdkAVtohTR4jznxhyzdjLvLfF",
  "key2": "6268zX3rNMjxvUtLmqdxRBiNkyzYhqy3GqduherD73gNJCkr3DZbyBumZjiLg82vbSdE3CDonwzYv7gyzTPYc5o2",
  "key3": "3a5oKPiwSJg3qQsNmmUUY6Wn5X7DY9z8GfQtVZ33u8FA8vrPFtSjxK8NeUpWBUBn5X76qFr2EUszEy4jDaVjH7eT",
  "key4": "3uZNJwSHMpogPehn1wCeabyZZESjKtgZ1bQggywkGySTYFMyDRuzsjXb3RubxzdEa4fxwKHuSezeAtW4tZDr6QpR",
  "key5": "2WfkwnTnpoTKNeNHs7H7ntxs6VjqiJW7hnq7jw5WpUA5bTVMnZu7H8fKv64e6zt94txgMogmeJd6h7uYSHGhMWjV",
  "key6": "66Wju1L22CBij1NPZXZ6aNDZEYigm5Q4DrN5pMWUfHxXXxdJmCXyZKA4jQTYj9aA14VLymydakC75wHc3L7tSZvb",
  "key7": "52Amk7iGAoUjdvip6Xfx3Rz5zQXNgcEYiG1JpnSxFD1i7kKcT2PnwDWBd6c8dd2YCDuJW6tzLUDH1SP8darteLVj",
  "key8": "kp4KDPUrfjrQEZaPpYSpr8QokUY9HQi15paDCtTvThUKHvvk7PuajwXRNX3i7gyG3BBzyWNW2zVrT2sRoVboN2C",
  "key9": "4ftoHdNfU7CcKNijtWJkPbe1QwndyTvVSoVEspMSVuXVEsWX8HskdedQSZiejLJXTEd6wKxq5g1TuLRMnsZGBu5C",
  "key10": "3QtjXszct4qkzdCsHxpLYppe2j7fs9EqozPX1RW7jWnyNEAJoYhKzKomU12DVzk5ZnwAPtcDtNy26TVxtbQp2xbv",
  "key11": "2dyn8HLVYtJnttMftX6jZZj9gBr9vtFJvcUAFdgpzHCqt8hrmPTb48TSWFC3HBS3XJeHvVrSULX9gs9nVnhYQ8Hb",
  "key12": "5654eE2219ZEcpE9soGsZZcGPq6KJ3dF1Wzjtv2HQLSrCpGjWSmp5RbxssLBSSo9EYRL61S3kajYR1vbpdiTVxg4",
  "key13": "5mdog5jSCrtVmnTBixAgqmGsgYpaF4xWSG3FqRHA6VYDTdw3tz4Sq15wAb89NUiwuseEbWNeZj7ez5xdz2imMFGT",
  "key14": "jPha16eSHGEtH7eN15Cbdw9R9p4wp6zQtEeEhNZWyucyT64BpHc7v6MRcQrD9GNLgAmJ39GTiFJiznXnhJjFweU",
  "key15": "3hTMj3iqh1To1rwmNoGMzcK6MkCJkDsjw568AM7mAeYoerA1TxEVHaLSmyXg8VTHgSaGeg7cSSy8SXsJ59kjqrs2",
  "key16": "3FB2N1mCZ3MXrUpKz3HGP1Dis6qgnR4zVZCKmHTNfPKDSY9ABzqXodoTCCccZCWiigQ3zWJAXLJUHT92N7jPSnCW",
  "key17": "5n9MguWuR4xm7cpMx3ziCM3RGLR2A7kn19SHJUZVeJDQPriDfufnLaZcS9htq5TDG34tuf7gtxTvRzERdwmnE3q6",
  "key18": "3TjU84c4cWzyUqMeHQWoigFQ5Rr7dWN8B1uRjtbw8M9JH3zUNKEFgf6PCJP4dYkL47FPT4Z3cMZymBtXYo2CPR6C",
  "key19": "3Ux7sumchkpHGnk3XfUYPMbmN7btR1XX4QbujDBdg7oFbKmDFWGveW7wQJ5jmu2qNXMk31MQRJs9w777SvrekGG2",
  "key20": "2gA8H38bvvLZypXUc3hagCTdR1AfiRtbyMeatfDWPPYsuEseVVtf5votdaCXqEhPUUAwni7pHKxejqipuUHtsJki",
  "key21": "35Kq81krxb4ueNY2fw6h5kt9eJNbz4pN4fkcCBUGhEPXQ9tbzw17WbfBXNSzkEPHSehbKkf1nW8odsAh7vBaQwi9",
  "key22": "YuekrZnGv41NsrWsobXMPuGxmJ5gxKSPwc9dfs7aMF63N6EQCAnqGKPDKyS7U35WToeWC1F5Z91XfWdHWtT5fEF",
  "key23": "32EffQBsUSA8eSSfpXHsfvuL3Jb71EJixKWjuTSxf9vTYVANv7eSskXKjP6h7gBLCE92ZcqufujSexS61M8HLymv",
  "key24": "4Wz6YyuyUiuPqdKvkiyczc7H5s2QGB3jbGdXbuA7SnCYQkDD2r5dmgqjFED6wvNufo4QYLn87utwZCPNwt1V2WQX",
  "key25": "pDnV171de7E2th4NncZ1fBA67KKUGt6SG27rnt9snHzPUAErhKgY2URFCZFkUZXgrevpVw44ox7AR4TDqrhUcdF",
  "key26": "5J2PdDKyuhQ1ucukmUvc3xdDi9dN64Sbj9xeJDxBtN8yH4HruwR23BjesNQDgR2cPR32bXCc7Xq5YdUjescZickH",
  "key27": "2oJ62ZujQHdTKZc7Zx5f6kFU9tTyCG7ZUcAS8HKiDp4r8wCnLJdUtb7EpfshQcgAZoFeEUJeiSqCSUK2XPpxpDo3",
  "key28": "4hf4FMBd3CR8Rrws7C4L49CvWsdZgeM64bJsC7mtS9TcaMUQ2KiMyuUeyWKHUj4cgd3dtpPzy2Wktdsext65rFYF"
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
