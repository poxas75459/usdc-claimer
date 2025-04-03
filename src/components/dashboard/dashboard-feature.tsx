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
    "3c2xDePexHRNsPM5wjBg8FqtEKeQJZLyPcJ1Erhrngv1bRmbmGX6ChZvADRtsz1Zc5knW8M9YGJj8VrtoXeTjT2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DkPrJc6sWXzuSip9oPxvzYKdqYiN3eSPkDtq3eV2JueCwNNRidQEZXjX3sap4KGjav5kNXrZ12Nk1rWnwcvKoA4",
  "key1": "4gFQfnBcsfT2SnLDo1fWvyaNe4NfwJyVMrTvCGz9Tajnm345rJhuEPuDJUdkPTXaSxh11yVrDMDtjhXxrxLQUjo7",
  "key2": "5dibdAb1CBcANBbiL6iBjB5XHg17AvveadMc6sMNNsPFQzhNU5vYQZqvPhbnkSYNc8SjB11ykJ4xnPqkbH9yiCsT",
  "key3": "4aWpASNy17qSBpfBPaSZQw4vwFToKU4YQmHiAPgXsEqvtmkBfX8yxY2EgMH1EMCRodJjvXdn9gu3irsbqmAbaWT3",
  "key4": "4S6iRypCnthxs9TdhLFFckxVGKLxyfX1ju9USnhKZWi5zHxdi6a4myc3zhrgJU8rzvvshnCgbJDucmofn3GWZrYT",
  "key5": "5atKpMbTePvgaudmqeqHMV27d8bQ3n5prpxyv9WufpMJGYFDoy7CQCUYGsv27L9D4XGs2ffE217sEJqwcvygTpBk",
  "key6": "3weEFCFLLsKp4CvN91L7igykSpq9Q47XP92AFo7T3QkgTn49kdSrQ9e2TyA9J4UVkJ6E31GmqeJDBJNcNcxGAXhf",
  "key7": "336ekakuxFaWv8qHFimLRm2vd3mt54c4PCTozHhjAFyGgzkNg4oy1155ih5YCEh2CM5EsXe7nHrsQmxreZQZEGeF",
  "key8": "2dXmw5nZb62MV8eRFVvdH5xUF6PicFRvnJuUu2hmAFCDG7bshf1aXztQGb3ovRYzFQyFUyndQ2aLwPZEDbsp8XzR",
  "key9": "41kheTasDsSjmbHwGowQH2BRTsg3Fxt4Dc5ZT9RK22JhZVEZSya876iAmM88dsaPpA1rMSM8o1JwpNxWYZBiBg5p",
  "key10": "2onZySCM9WEcavcq9ms75mPnrSmc4KpTzTNwT3XTe1Jy94qqzDoLRTpySYG1pmg64XRTitiHjnGzZ3azBbaHyCjt",
  "key11": "5HPz8BeNcp21KD8HGKsfW7sBc6f8RWn8RMfABHamSxRhCaS99Bnj13swZEJHQdy3GfGMhmgYvrqmZQdGLp9k26eq",
  "key12": "29k2mMivgh8Gzo1gMjwX5DDjdsdqwxwKxyDRmWjfHBt39Yue381BTrzzB8JYAr4BXbQQbEzTnmAagH3qY4YudJhE",
  "key13": "2nhRxxmRU426rMgepRjvT6zXZaFyyPV39jj6aACVP3HDojX6RG5mFqNt6Js2NSATu49d2YbaqTxJbUeSiF1XzWyV",
  "key14": "wnafwsKMyQ5tEGYAvmTQTv4L7zZVseYMv4CYK6Wyuxvaii2cGA3EHYiF7qgZwVqhaVMHsQEWS761z1msfqxaFnC",
  "key15": "4W1zA6XGxhhVRbFpgEaLdbHci33vv14rQqETVinxkorQbdt3U4KuU8rWxGTwte1XJf4hZvLa2sm6cAoNvig4pKCq",
  "key16": "3C8d2YoQNbekHYCy9rMzA3QEe9FMbh9ytzD68Y5URjVSJLNEdKR7BZ2oZaPjLtPUfNtjLSUGkbXPYEuPkMUGHHxV",
  "key17": "3gfMeyyzPP6YwhJLsNHN7oWrZTZKLXeTDHz4yvn1PmeRgRSxbNSEsMTzbqkgo15LxR7GsV8WbPu49CgfLW6xVSs",
  "key18": "2oDC9y4d6saeJWoN6RR3JkvAFoHCZgVQNpqBZgPiWXVAAFFH5R1ChaPGZbDGSJQY6zc4m1JvbYmdzMVr9m2n43kB",
  "key19": "JHHkRC9e7qr6sB41GJEwtYncGh5esqqMynfcaTPSdb8KQsvGCwzWdMFZFGYpdfKNVxvHrz9sbQhBzkz6Lhiqeun",
  "key20": "5PZUDQtYAzN5gbmRC5SGDyKDQwddALDBoVhPBLAShS6DJK8EWCSDPq6GqfoPVkTKrJC1yWh6owFpCG7patXSxBak",
  "key21": "6QPYGcqAjfh5GWffsootqWgCGXHx1pDduJGmWXyjkRv4RTXAzUVCBMNonRbGqg41nJLM1McBVdo5rbzm3RSCYEj",
  "key22": "3daNS2Suyp5XGdhMYXkXwq6dpQNMkqXsnt7fmQuj1tY264MXPSTVixhMgmEHZ3YNYwS6dv11JYQrM25ov7bmpNCP",
  "key23": "2MLFkbJdqe5Na7Cg7pGkgjDZF1upNetgjYQ2PYmNb58L4hisgExM8WMXu3P7UHRrz4wx4mrbWCZafHw8rw1edpxF",
  "key24": "944kgd2hW4Vnky1rKjL2LdVKGfRCT1mKLK4eKzTHXQsHwhJKiNBaKngRXCE7wESdzGSz4cTUoyKer6HsXgpw84o",
  "key25": "4VpBWwojZmmnZ9UE56jSiTh7J1XW7kYBePwpqSRT3iioD7Sdv7RcU3erjGgMugFjCnb1kHmfk6kffnfVPr9o2XtX",
  "key26": "4b6iPJagKpaNdBAcvXMFR4kgsUPfqWrPtwju9tdFbmZd69fV7MwDYTCMMgDEfcqsBNwKxPJrw1UtnnyZweuLqn9x",
  "key27": "3kPCm9cpH2az1BAGNcgvaNMLkTMfcyoHUqrrbTydABNHMdWFzSzXp3MekRezY4kt1Rccbbrh4Fi9QBVC2Du54GiC",
  "key28": "ZKS3F1i262ysgZjWfw93c4XGzfBvCLqJWDGZbHVivUrymiJQJ75fGNeEsWQSr8KxnMQHSAf4Adeg6f1uBj816bW",
  "key29": "kHiWgiwTJ1CbJDDLQu4nhfAgGRrxTLyc5CPe1HnFgkeEQPVYEBWFwoLa9yjWtHUvHtaDzKJtUqdbnYgNwZwV5JL",
  "key30": "3HPexa3gMLkb93aCb8yHZVcceEC9zKZ3bniHsPgcxwMdXndaSJDnCtuum4Ugzx2DYXw653zxG79eazKfyzqFewc9",
  "key31": "35PKjc1u8xNZNtnPbUn3M4Xz7DNzRwqCnbutcV9whePiZZUyMaMD4noBJFHdCtF4H33rgT7fM6GWhjmfEeSbpVL2",
  "key32": "oP5U3epfLvhDQ9jkZFc78Yyz4mV6WBPjAGigh8GZebaikBokztpfdG6v8fZqFLi89Y6Mw5nHS6XZtrHcEKZkMLj"
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
