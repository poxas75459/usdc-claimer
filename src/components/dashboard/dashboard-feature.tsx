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
    "5w4UpVDCeUeg1qTxTj59dny5kof41a68EZ41t6e1FW7WZaZo6Qo5Qn8wRaBhm65Ja2jWuSSQT3AsfvxoUqJGhQSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmrfDswKc2fND473h3Xhkk5UYuLB2oNeKZnYtnMzmkS5ae4ZrAPuAAJ6vSxRH1JYe1ZwgSdjRZobZVRmfSQXjgh",
  "key1": "3bE3TaCueX8y2V8MrBG5HzXNWW6qyw3hYsMyiNibWaeKz7vVSwsLLZsFsXqxuLtAdmeJGpio5Csad7V6Kuz5xRn9",
  "key2": "3h9J3qGBpErBRZwkX1iyJbnuN8uDHrVMdH5eZoZpDKUtygwbEY6LESEF1D55cJ9bsiERaMRWyA8tYRpGPXaGSfFx",
  "key3": "4VXwJ1TaszAdSeN7Q8zQ9ptdBx3ZzgX48ZTp6rSu8V15LgQUij5oJFbdQxHNLCxdLBYuHVMPYTgFnFj5X2UtGwMp",
  "key4": "2V3QzYxtyvftaWNnJd9nWhWSXwoNLMhAouv2HyLcLQWH5vPgChUa2oJSYtKpT7ox5PuyK9svRW729mKmcdVEqZ4H",
  "key5": "5DRnW8qPsP73M2egeZBXVH5PE3pdVM338jGYFjUxnp55eyHUozck5V45Cg4P9hG7TLixuXdv1N974Rgx6YxnTyeq",
  "key6": "5kYjDwCqSZBKrwhoLoXHHKRdreo9mqYUxu8xp7ywWJ2D828Rb97smHCBbuaeCkREZdjc9JnHZtfvrwgFeTozdzhE",
  "key7": "4Z3eW23jPpUumXruKh9HjCiVEEk3z79hvyGBe7xndhzjAZhZd8YBWstgnXFCu9hHCBpCSSjRTUPDAvDEPNVjTuy7",
  "key8": "4x4GYd2jSxCgTLn5EWzBKFj95tUfs9UVQ8dEXCGw1ts42cy2e9UnXospNZ9Ywc3q9V3gQts72KyGrXUkXjZ3c6B5",
  "key9": "3B3K2n5trCc38K77cxvsjSvdYaPhYgC5ez28goGVwku4j64h3a9QoWCZdxS9rSuQZvamdLZqwo2CR6kgVXdtEdUE",
  "key10": "3oqAezMBqP6nszVhHWjfjDpJFYhSbUi8omAD793rEceNWDUxTeZdH5CjpX4mXoRhFdFYqVnCwKTKBKh5fBnxB6ey",
  "key11": "4YVunJdHRH3m5sYH2nZyfnvT2XKj2mV9ZSGgAb8XG8dsQJ6yyBfLitrSm51uCGSddoUyAyLuYMfNzUc9hGHypm6L",
  "key12": "2tKn7oJGykXqqX3B2Ug9PRDANZkDrW2XVCyqHRykG1eJAe6b3beCq5WcPULJRMvzmtRRf1jZXoRS86BkSXgDLKTc",
  "key13": "5GRmvBchHxcQbMKQpiy1Wp6pCUmqwYm9Gnd8m4NcchKXSMWG5ShXuGcsQcFWYW1UfwaUCx2DtWCspHsN5CjcNHH3",
  "key14": "TMwjcnvgqzXbH86XAXitFZPFcun6BNZoQBSJyixVnQomT1LXXBnUSJyPuk4MaazHVQUNy9WJAeK3Rcv1XtE6UFD",
  "key15": "5yL4tuMybFWmh28kFAiptmuNAAZy3ihpzTPmtoivkFW2Zns8F3ftCtxVCU9MNbvH84tttv8HC93XQZLeb3xCEWtm",
  "key16": "2pip1Gxe44yY6iwARQn1Mb98u6z7mSqYmejGA2DCZDRKyMfHe76Xe8Xc1XBg4rnfU1nWd7wVAFbRjkqpDhkrLatj",
  "key17": "2vtY5bXvGnUZT1KEWu92wqgrDVHJs6ZuuwYZ87m5gSuMD66PzcpWv1bPCds2JUskGC1HNEF8sxtJqciane2Jr51m",
  "key18": "5QTUhkw1ZVoK4r3BctgtP87U5oX1qaYENiQnzgbVr4J979FADiTkhKQn5CCX23kig4oCzwkB8V6v2sY5sReNU33W",
  "key19": "59cLdVTvzyApA9U7FBUs7vLXN2zoAjVu2oeLHZv1rGCcbboeeAH9usZpxQtPADiGMi8LGXY8CD6RRsnYC5KeC8aR",
  "key20": "2UtyjJ6G8RMZELN1yxYT1yzC15dfVFy445k8WaMpBEURYMhrAX3EgP3h3oTnY1u8kSDDmnG5wbks67BKgLRRhjco",
  "key21": "3gKbQ72vEGPqgypq9hE5QY6SYvY2d3AXFrARoofEYStVKtuBiZFsbXA6sB1RVqpuHSBdHCPDu7MMFzdMFB8YzGu1",
  "key22": "542HVr7GwmJ3eUicvsAEQgnumTzucKEnb9bTbWXUjAGCuUfVZ43uaEJDigbNUuDf1NA5qRDfWVsgUwd6LEpqgUsP",
  "key23": "2V9PFuiZQYLGCeZkQqF3dQMMHSZvYEb4ZoRrTo5FBb3THqCUSAXsSyRv3BEC6j4V1E4cWK1uLmDPqYTg6ADNfauR",
  "key24": "xZAetsp87CGYy4haosh71rCq48wP3qyzLmVLG2Q4d9eDLzuk2H5pEBRTZS6aEPoMyATbRwbtwxJJCWu7y1SKP6u",
  "key25": "2amRwFychFH1aWw2bTLtZgxAncZpALd4MmfJs4BACTNFn9SdXH4VF71i3eh2RBpbwCeYntzwk9mv9D9gxQcDD2b4",
  "key26": "2mG5GAVUWDZMQxtw5f6tjqTZUnJkzW3oB4jBttB733yYV7i91MbRk9Y4UiYSmRgQoif7Bq7YPtmuwrzhwTdpVmjX",
  "key27": "4J3XqX59cuRNPzvE1ryZq68EEDjFr83u5t2YS74nUH7U1RRbuCicWumFNji6bxCpCPo1UwW7akRkdZTZrPwBpAti",
  "key28": "7tRvfJd28WxBh8A3dKr41rhKayYiDTpJdp2btayZ3kv3UkUbRL5y8MN9qMkV748M8A54mQXf5APsnGwT5TTVNA8",
  "key29": "4EV57bHeRDczg5HZNBJjTys8aNnBGkQgkkAeoPi3Rsp3qiaa5kJAUkfarhhiFq3UXzvbpF2Dw9GCHG2nMEf2EzPc",
  "key30": "4H442PmxWpnrt7THJuXeNGt3oW6iSeY7McBhL2TtExyupTWqCvXuea9jNRuCwZECJukmA93oVxN8zuUJaoQzVVg4",
  "key31": "2LepyTSujsRNmdVyT4F33QsywuuEsHgj8M6HnwXskiFiPSqrvAdCQyE43d6xXywZgFTth3TFxsvW79LwrAuLqRUi",
  "key32": "4uA2uJZtMFsQQYjnT6U54FMmZ8CxYMUhfxWjphbu5NhRFJNt1Yur7oPYuTrUnmiwTwJrQdvmdrtDbDnDZoLL4TFE",
  "key33": "329Hncc8SL24FR1uUpf8DGh7PqkCqzgkqshJ1kxqi2sbseN48FwZ2mgCLeNKo9pwf2sndXiF6Cu5YnbCZudL2QbA",
  "key34": "126yhTjdZiV3zoMKKBjCUugarFxoWD5rLzVHAnsUSv6mLysZMN9gFkHcQmvjBaGXFbAHVEhpVLU5Lb8Bfz7EyZDe",
  "key35": "4NFSTj4J7xbJoai4hbfi2unpnqmLyyckwJiumGjMw6Vfweyh3A7SJT5dEjN9vzs78KKVxHTGLw4o8qJYX7axoxdJ",
  "key36": "45wGnoPAs4rHTRDFmC4KXaQZKiPHwqsquM8rgdN26fsc6RU7d6Q9Pg8EhFWkCU83GbxpeLWaY7hb6ZQom6yofBKW",
  "key37": "GvQSgHh3XdjAm46tUcG1v1qevLRfPruLG46xydWZgEGB3e614LjxVXWXB4MHuzk6qZjXguZpeWXqny21aKKqSUJ",
  "key38": "24KM61GmsTP5nzdm6SVXLotYXoGjkm5T5UCYwp5eGJJmEJ82wnBz1J24HN5FejG6r3bHeMgJ3WyD3ujJWo9dVmoW"
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
