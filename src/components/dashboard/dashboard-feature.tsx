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
    "24AydnQ4ttHVivXDrMD2maqW2FWVF6rEuFdJRVfoV3zCbZgy8VMtgzd3FBvUKEbZDQGiyRwS4KQzFdvHVrNMU53U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4co1PASBdJniCTt9Pxey99o3hUudmvwZupF1wPbsM423wJGeSZRixvZKevEmCMQJQpZyHGDRhAU1U4Z1L4rZdzA",
  "key1": "34PezB1ctExWx2ryzv4jXAcogoJha8XE1vfuB9s5wzqPZ91ASDYqM9gEbb6HQWPBXp7e3AeaLJLYEwGGByrtRAbg",
  "key2": "4vTRyZEKfr4Kj8bcitdm858MxvCetwPDnYnbCboZUBjyjkiw3CmYyNicM5W6JcohMzVfPhUNM2WwbE7B5nbmU822",
  "key3": "QWSdGbj4PqpMvtkKMEvGsSL2kGRavSCsMTNyHvCuZ6uesvDdmRBjteTjpg8vDHt65Ex3NAtkDpSApqgwkQ1JxoD",
  "key4": "61QkLAZinTsDrwjJSUAjxiYjH4JV39Jpbjk6CdsCeYrA5WU98R82S2TBwx46CbNZprgyCfKRRQGLhn7jsfPgnTqY",
  "key5": "3QxZwtxWD8ps3pVRZQvcuD3KqzafLrubfuoZX9685s7Ts3jLvRHBSohgXvGq1iB1D4b34scT5nA7EMuMVji2JtYk",
  "key6": "2BizkGvFdMrJZpcWqFEQUhZMwYvUQi7RqFz958g3Jtq4E5TwggLLcXpGBqihVR1jytVrBNqrjtsfSpU2Ur1gx3fr",
  "key7": "7o4oRyrUaXuS7S7DJP5w2dLPzAEwhtuUD2CswLWKm6L3NA3RsXCqux48TnoCPzKNTiTB7vCyJNAxHNPytb56dgr",
  "key8": "5LGX5ZbS8fRR8nVy9oGv9VLu3pWY6dFnFYGy4kuHhdbPeHYZ36xTKsgv1iTSPbb4iiyhwVCsWMnTXJYFKbJANK4D",
  "key9": "b6ybvcKjUKCQEXiUDXP8hKo2cdXkoHMUozz8ST4Z9wNeDeUGKZ55G8VJGcjGCgBCAtfV19G4eowEyt8cyPJKRcy",
  "key10": "5Jp7bgCt1UwPNidsrDG6CqsFL5iFP1abx1d7rZffeMDQZCXg6wVnZqJdizEvFGVgaxc733di5aNs2KEmU5vjrNsN",
  "key11": "ga5JrV5J4N4rsyLjZPCSdDWJoW2PFnWHZPXCSKwUV9y6Z2fhx4NuMrSQPAYd1AyopBCppAvt1HDch6GiN4n3BUU",
  "key12": "3gNbnfY6FXBwer1t6SJNxhn24jxFuBdZ56NsudfQKy62DANbtFJDy6ca2JXUXbQnDiJmrf4E2iMZuQmARNNzM1qs",
  "key13": "3H7SG49AcoRrmS4qzQyMyfMVUH2JVnT6WrrLGwEiY5Rd1QSuViCWW9vtpBRrAkVJL5Lguc11rYhiKV2SNdxszn2g",
  "key14": "4SUB7W3Uz2QzvMZyDVZb3pfGvK9DpkYsQkEoCthJooyckX8bYj4caQ3834oPLPB1M54daMXMAcLXYiNb9VqS77K5",
  "key15": "hbGhPc76xP43yH8iCFiPhvR9AkdDFfEpyRkbgVFuUJ267FcuPoNnZAFvGmjc5hcQkCidUbPAxNN6GfHa3vbGtdU",
  "key16": "5WdVbNBBDn4P5ioArZ5HCFZo1BgbbKmJe1D3RPfvFgBLxRkjuJf4ccADML8yyDQEQTbGgQNpk5PmwFvkGYCcKuJD",
  "key17": "2SCMi3E63WPGpA6dJ4UN1PziUPoW9TC8wEYydY1ABcwNVWbZRKtSWbXUoHZrhzL8BKNurfNVeExhperuApUxNnas",
  "key18": "5b1ps5a1HCcQPkCwVEy85k5bmod6t6bUD9nMkqws5oQfeYYWhXrizJ1Z1ou66qrBRKSYXiUim5mv8HDCS1VKbR7N",
  "key19": "4pbHXMUkg8Jz2PFNvivUCDp6Y2CPhptkWsfWZFE8UEHJFw8ACpwpAxDC5NurTdxwtPbRd6NMszHqqEikkxKrxvYK",
  "key20": "3trgBmp7NQYE6VYUUqYccaAMFh9w7UkwdPeVQzBCi9sDAZhrpRt92BKC6uoAys3dAiTP2NXxBzvnnLXDVZQQjTbD",
  "key21": "2NwYGi3jMt9twS5ZbjXEURx5VMFVmcVSRkEiekg9MMW27oiVoRPCpPp3DjfNRNta1YdQ7yqRGbKc3YUqsYCpxERe",
  "key22": "rNvihNvauJZ9ErZoecpfSnbd6brD6NssFnJM2DDBgYLQ5H5JPXtRxnTbHzRrBj7fasaYwDdRchTuA6qR3GZoRFH",
  "key23": "2Yh75DnQLt2dkswMSjTXsDhJTCP36Kiyu4stcQ9YcpzkH9hHMqVvqzdCE2Mw8svLVUrK5R37M9LMk5wRVaYeeGi3",
  "key24": "3xHtR81vS5hHGBs8RirPe4cPLWBWea6J7NKSbTxV2WpATCbUp2HRg7qgiHCqAfWg1T8ZnDJvxiBFZxhwJ3E4UTA9",
  "key25": "4dUTzkwBT1KaSDeHMBJov5WcXR1vQxLCWKstRpiUmkkRsc9uQt4eqm3qqmSj2bEVKr3QbXrCXMzP8CCLSnEr2pBS",
  "key26": "5mYKqiPnjt8AgtorWJEf9MvR6eWoSSXU3Za747B6mRpMs7cUudfPK22LuxzY9pQ8V24MP2p4SKga3Tk3BZfyou9x",
  "key27": "CT9QHLvNdxrE3PWqA4Yqj2LtBvqT8Ri692GvBKupiwBVdsokxgbNH1R6MjWdt3PwugG3jTXYDqvfqZuRQS4rDzt",
  "key28": "2x4nC3iaVVmitKvkaJXh5Tcs3cdXjg7YVFa8xeB9qRPjpD9Qn9PnzsgByqQ8YkRbG6X5ocCi3LdYwfZTi8zZQN1n",
  "key29": "H6U4iagboHiUfZhm5DSKLSYD1ZD4yZU9Gpy7Gnd9iFiwD1XesxsjgRRGYmNbrpBySZRTCi2C8GmfmQG6znuhX2Y",
  "key30": "2rZBnHHBaGLhz5XvrFs1qCJ3zSMWogskZTE1Xg5RexT7tLcA7uE68YnXLvV4qpMHK5G69UnRVDr5NHkziV5fAyNc",
  "key31": "smzH6CvNrevyVJBgRxsdnrHKnjXTKjKHHCZdx8EbP7h9frVgK8ecJZu9fCmPZ5rFERGmxrSKjceU5mC2zjrBvbj",
  "key32": "4gYL7LsvNPu8XeUmv4ToMyBUf5zSoDnp9oWhZzNbJEVFyWaXNXTzgnrKUVjiHEb1rcfFiePyGrxCjcB9Qdxu99wh",
  "key33": "3ZUyhr7VcMY522dTow89X7RNi64eF75PxEVpcnCahSKTQ1caV9kFqNgoUEoVg36i27tFCvUdFQgjFvMM4VZDYSfG",
  "key34": "5iPFxPrHk7Ye5RZbgjba7WNfqkMeNnLdf9cGeg72GZzQqhzMKzn3hNrALUPuU3v8ia7j3irr6EoNtbb1DFo7F9a9",
  "key35": "4Xm1hHXkWq31WGgoWCnLkHuXWTtmQjDuScGgCJ4ZhE4X2dReKYW8rVmWRbSXsgeWNsskhptpDgCXWZ3hLBHFjpzb",
  "key36": "5hVXsCkmNFJzB6YixaPQz1SswJoYA2uKe34p6Hjd2AJvuB8GWU2HQf4WSvUpue8J54zn2megKRJ2DDg92UPSRGQD",
  "key37": "NBAD9wXupsvDbJooMaYmarU4hbfEUrFifHLBVz9T723rQXRWq6dS46NgUH9e2ohbKyJn5YDSb2WcdqHyUPFpAG2",
  "key38": "43xajuZnFnhAFFgrFtwqFdmoTK86V6SdsHSWvQHj6ZASo59TG86CNamic7BRHJUmtNsQxjUQpsr8NuQ5FevpUVX4",
  "key39": "5kxWXMZWYVFdJviiKhNaZcVSTySxwRBaSGNBYcAYVuiYtgBu8ZMS6wRNAaBo6mmxoZ9ye3LkocnL5P1NfdULuuDf",
  "key40": "5ab5iwsVqQda5VZsE3mJy6gJrWc4gdAsCzCRyQHfj1QmWgHMMr1aRttPv9ovzAivSXB6XLdFDfWcW4YP82cRjYU5",
  "key41": "5yHRzT5r7eLM65kJu1CkK2vJGwn66iDcyfRQNedFsosWgCxc817HoSi2X7qftohRMUKyRzVxQkhdf68Ys2PekhWN",
  "key42": "3N85VDuyPPNMEPHnYKimQ6WTMeH2Ysue1k3Hr3wHcA2Dw3DqqqNXfB5UqPdPc4uHK351dcdn6LYxBx69PR2iQJQF",
  "key43": "iUVLDEVuWwn3YV6KZHiH1ZB15WNZmx6qTNzzkS5UgoVAfN9AVGvNbYat6z4Ypa5PwhLVALHHXiTjsMuYm5X1w72"
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
