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
    "26fDLWxCb4aVjes4QBvkKvEHS9cqC2tvv2fateN8M8EShsEhqozxyerhUEHkpda9Xtkbkeez4b2AymvSMk36tNER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVr9VD6CrUDsWZkqJTjVzf6UzzeompGfzJ3W1WcaJxVspCMZrXswFaaAQPZno7BAhk6pgV5Ro4TW3yeB57aS2Me",
  "key1": "2mV8p1jUQjpLRKttRvwTkEvPyosRPM2bEY9UbyLng4CSgEAz6zUxTXRgJGuny8qc1FvxsBL5BeBDpZ8RSEzmN7pn",
  "key2": "5X3Gxe7sNx44XuzmuywQpNEUiuWKR8NVdWT5KCstvaLke5mSBrMeytZ89h6A6pC4amSRvrzgVYqBis3wMckv1Zmz",
  "key3": "2Qraj2pAgAyoMsk469mpVFMpxAUJspe6DSxeGx4Wm7cz4w3bnpnRJ2xX5A5QgLURZvx1n7v7BxX9RKLL6waXZbnx",
  "key4": "g6JKYiuL9kxvGn8Lu7LxAG8tUastnDhKvcizGdWdgwvohLH7Y6TrCzqmPXJe2Z2Ftd9DRk5YJdmippjX7A6znPi",
  "key5": "5hwnbWSnUXeMLqgJVwAcrFGUQhtG765krCEVs1w7vkrpGHhqrnNrVWfiNMQnqSSNNsi9QMhwfyMk8qyneqm3pYPw",
  "key6": "52w59Sy7q7zMHjSzSQXzrVKd9YD3DRvwzvzvnXJ3MJA851vMbqFqu4DKk5n5URLw2aCbCBRniqnihJgpB5S1pbRy",
  "key7": "5z8PdWRn98DwbxWCSoeJPtC6fXZLJbMP8EMMmoXcVWmipQzZsVxmhB3DStUemt6zGH5Q5wpnWkb5vdwvXm7hz98D",
  "key8": "7op5tWEAbenLj85vxegqiQm9MvpQS3AgQhCJ3kWSC2ymNxUX6ovvGJCLf848mULmvrzHHSdoxhygTvXVdDZipwq",
  "key9": "5D4DvVxUxgtcpEMN4mCyrEen4pyzdYcFwUcZMxSoM66xsgqyKJAZcR6Uhic5YRZ79cEsK9iuuKMqSitWHdvjBg4U",
  "key10": "oQgUXgF7gMoniN4TsNszcpkgDU6ic5Hta5C3phrLD9FNvhYSMqNRdDhQpyx1tizfiQN4juPmM5CbN9vGjYG9nb4",
  "key11": "4YRGz5atQXQ933nTXabRJozRtmWyVupsSaufAhKqmgYpghC6W5uhhiZqYG73PSi82D27STzbPJRhxQGyre8zDxX9",
  "key12": "4X51rioPp7zGoVmJw15Z4TCBZUkk3b3pQjgJgMyo9rwV7F6rY71QXYPahj29Vx6geHoQcDpsm5zthdwiH5F3F9nf",
  "key13": "3kta2ukcF4tdBXNzqBKAS7cKhtd89jAsjo2QzZiNLFh3877xAWTxo5gmTP3RNhWCvZY2dtMXphPpLnMaZtoTKZGB",
  "key14": "5BV3XSkLHAhX3qQ3zSfDrKoWUfVBPVgxXCGbSjEYwizKz7aCRMXeCp5KH1wXq5MAGc9DjMefYqKwQE4bJotJNCqr",
  "key15": "4qEwz9jz1ygm6oPq5xMvetmFqGeUe9r8zgE3WsXoFqEAaDFaHCHYdP9NFMauYNqFo7XxHESKsVJV3nH8qnnFyjj1",
  "key16": "61UJJcXQ4dDYWgGttsWBZs5zY3DJpmyXpP452MWCxViodGGxJ8oHiVbRifH489YA6PTBfT6BpKP19u3PzujxEwB7",
  "key17": "54Ag7PWE4LxTx9N4nDMiccQEnfFAFBAUuD7PVYQ67gujqfa4EXQ7xn8k5reaA7aEva4pZg7q7f7c4w52Ei166gj9",
  "key18": "3iyZt8nNsgAJF3XiA345bDJ6KTcA47acSENywfdhK6QWPGXs2V2kTMmvDC5mnPp4zaUwUSPC7YHs3zTPaaXc4fEa",
  "key19": "2Hbm9pXMrJy467MuJfu2xNFb6i33CCCJqp4pD6XPZBSHs7dYSnqweKkMdKCUqtyrPBnPRAkVxZj9gsAhnZsN5VqE",
  "key20": "5c5RFV1Q2MjEjd7GvySZWsbfGg1oUejdusiLAcX3z3EdwCMVyFF9Gdv1aKE1soNx9LtjzuRb9HUW6ZfwvCEf8qKU",
  "key21": "2kFXKFJdB4WURhSHmS69moKBhsv8w6XGMDrNA7s3xvxvg8fhk9nzLoe1mKyX77A2LM8MWUXApeVr7H7uPpVqL8D4",
  "key22": "4Vv87uKNWwo1xCg8JjYQhmvUveFLQQ2qtu7GwMPKCb9sh3kRKimXS1i1eKQx5xYxL8mCAmjn3cKJqNx4VMvefigP",
  "key23": "2Vk71JCVSL1bBSTH6RQ68FWST7kukrr2jftPCAoYUWy86eskV5ASz9KTksqaVrh6wqP1akjvVSjuSms52wRqCu8n",
  "key24": "4UbzE9Qim5UiVBcmjvt6ScrhXBFqRajbjXgjfeza5jT6ho6wNaDqdLjuEo8nGjuY1sydZ16n5EjXSjbaCrgi7J8D",
  "key25": "uCwR7YnnRSs6fmjLTUWDkYkDkQWbDqdXyKaVjKcnU8hucZbsnrvJNr8vdoFqg2SeCAredtHYLdunoxNyuh9nBuN",
  "key26": "31xX47MEfiU1pArc677XhkZxWRMrLd4SQ5Eewe1HcJJGo17yqENLvpiUp2hftXU44uepuZ2wwCogdbQuaBjaB7ah",
  "key27": "2L3RsSKWQnkVwvQRj1wzTkJj9yXDBWR2ro3MQyt5oX749P26Qf6TU2C8TfDNiqLEUeAGMCGkEwA95SfZ14SwHXxa",
  "key28": "5cnj7CFEZ1ftzp89zWTfpgxA2gnS16CBFqi9eQTjmioFHtKgKtWmVfgXMeoETinxJT6vrqA51jHWG2nswrhus8pZ"
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
