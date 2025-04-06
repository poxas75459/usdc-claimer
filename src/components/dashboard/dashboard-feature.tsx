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
    "4cnPitxxH5HgEdVvAdA3MtEbtEiTdg8ywiU9ReYfhxpmLak2ziEMzcMq74mCuXuFDyStDaugqgocQr8XDYdn9B2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWf6jXvAArvdEaJwsBePzZP2kZ9akwhhBXJ1VewWCae75idLghVk7G2X12skYP9QFgEiPKqp3fjq4Do9sq1T9ve",
  "key1": "5iBvMQ76qdcktH6ZtmPtmASs77w55Ko9ev2WgNcmRPeuD9JALvfFyi2oeSrpRWzMohvqRAz9AYZrmWvCeSZx4TPa",
  "key2": "5JEZF8gjt9sLrkgavTL5BZ3K2VPD7x57MGxQ1NsBQLKiGPHnhGJQo7EZL86PkVr3KXJoXaF7of2koaqFA1csRfdq",
  "key3": "2k8P1WxrGMsYQMFhxB5mGQXSrJHHZemAdVT2aHQmh61Jij2X2KVjXsHMAcxmzrFqnmqsZEV88UZxNHHVLMnXJVwd",
  "key4": "5Pct8Q4kVdSSCV5fZ9n9Ks8qxJgv5X7stCkvA6EHpsWLWPo6hoxHm9CaQZ9axLVAK6R3eTsnjx6bLESH8fdzNpcm",
  "key5": "2bRXjnVsXBB4Egfv6A92G9ibbA42mBtXdjAGB7wCn6iPzbTCqHSKmxNn1WJQLL6NpFvSBVpeXvApMH5xaxcsrdqq",
  "key6": "bHh8hsw7LLLH8E5MncpzAomfLJXPoRfxVK42hnCLMvfJgc8s81wDXmTQyPQC12pk8QDoKUVtUQzdBhCf5BwNgZr",
  "key7": "2hxBHh5YP6SojhmawZcW4J121LqvmAnALdVbVbyYF5BfXD4Y4RepAbS6c4zhY7YHvoYURX95mBvrfS3LYs9eTWvp",
  "key8": "5AsSAShM5DU69Rb38x2r2ZjxzwUc4Pq1soDLut5oddPZtJ9Xio3yc3HR1o7u5XzWPJHYcj1pxbVEoWRmLWgXj1aw",
  "key9": "5zrEP2j5nSShm1W9y6rk1mwYkqX6piPSExY4sLvW3UiS8pm7Ws3GAXNQXESRUr1P9Fzx8QhQvQPbspBbrrcwympi",
  "key10": "2KCxKofGoXRyikkMzFdDSZjrZJ6gvRzNLfLceUt79WFfJWT1SP84EVEhKu6K1qmqDpmXNsutkKXrk1GKVwdQXSER",
  "key11": "2UzWwr5UtDZAKMU5zsteyjLjoPyTcKhc57aU2JDD4vV1n6U2YXHApFxJKszLq53DKEsEFeo82npSYMDfFnsDfKuf",
  "key12": "628wKG7J5nNVwB6EZ3mbf1x4rjCGrCEo34GSggiHJAbZTEK9eWv5prTaScXt3ZKatV5c1MnEDUCqGdUYxszjE69h",
  "key13": "4cnxNfqUjgHPMF8VycxdRixnTvWv1xMpw6YENLy9okkk4XVGg1YSLGXhJ3YzMBJm3We4VSQ25nm8DAdBdTKy26kZ",
  "key14": "2prY36RMiEbhjLfwL9XQz88ZLVL8A7mPoyZUTQ9Csw1x9t2om1BSZf8H8rct36NN91mg7qCkjcgynXUAYy2fVuuv",
  "key15": "61WNgoPiQmoyNMvAzoqs6nnMZC5pehjPnThnecoUxkFyzxgddCqKD5mPRoW4yqTbPRRGzFFFoyCQjfQruAaaYzq5",
  "key16": "3ww7qcK8zrVADeHQDm8fWzPQCH1KV3KYkkbwVS6ovr1aigperdDwRF8o2aPdtzphRxksiNRqz58icBxo4z76ErEV",
  "key17": "3WZieBdFtw1aBBudeRcpGuoWpkYUDNfhMUiwFGtja8tM9gmwtQcXb3MeWNW3fcCKyEkEcvGbbNwmEZGdJG8E4w71",
  "key18": "5CrPvj26jseai82qie5F56HNdkjZEQUSyk6HrombH5u19ySainsaMNCvhP8upP75E5aQNZe6B9rfhRSXbsdASyKm",
  "key19": "2jJJjiD14t37eE6n4D6DhUn6D2mPciCuqgZDTkjdCo9CZe7y9z6KZCgpMHEg1ZCaQ5xBV8PD1jjVgxo7GNN7in2N",
  "key20": "3ZWPiWzxYzWPSZLzHzd3HdZvG4MGZ2S112M615DG46KAuiXsSPszPWbwmN2j7Sx6zJBRiukGeVukUTF8akBA1FMF",
  "key21": "5xiWkebj2td3RgZsKaqGmZJMahvGtzDwm6Ygt9fJmNpRgdPPuhw7viYNypubTW1VRBAyuKX1aFo3tcRsdUvXTUJi",
  "key22": "2nZjCaFNpDEpWKrZSeMqw2W5ZjutAvzbcWrxZJhB9kbzhR1kGG5HH2HDeN9Nz21aTonQBxkP4aYv9n8x8ySxQnkn",
  "key23": "4Sa6hCxvY7AhQa3JCE1T9YRRm2Gi4PYXCD9y1ojM92TPeeKfLqqjRyp1E97kZDUVEG5xTwvGULvfWx3Yous6jwfB",
  "key24": "4eaBAEZHGrZwVZ4L3ZLEHBPteBD2n1Rw9a69mAZJCKxt3BDUThVbPZHR7AGSNUUaCXSuQfZf5jD36Er5a4oT8uGH",
  "key25": "2ysMKDR8oEoZx4eGK8bteAi6gco455y5DnzNKS9mB6SKHUP4xyL8b7T7Yu17wt8oUGX2ARrPvBy8iaSqm9zX2g25",
  "key26": "Lk1ZdJVxqFC3GfSzyefaDFeDiGJPvR8R7gAmunytWta6DQvPW8CQLsGQRTaexAfV8GRa2qTx8w2nG2vXn8vgFek",
  "key27": "4aw1k5c88T4rTtQpUvJsbQWAbw75jLs9qd99ZuRFuUEJXLuhyQsQ7KBCQV81vVkAzVU7EkRjzRTLXUtEnr594H3Z",
  "key28": "4nsDHnHbVRExrdA8uq7eKa6kfw5PkuefrVH25Ls9DaCVDMWbN4ecBj49z68oQ7c7p1WyLgsiLxLyT5Grj6zUiqpg",
  "key29": "y53YjbYkFeVKD5PpTdWe3QQchHGYf3vN1J71Z3WwRTnvLzmFePQx15dZHT3TbMoVko2A9D96fPc8hAy1VTSX1eW"
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
