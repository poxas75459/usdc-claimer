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
    "2GebuRcwpzS2Q6a2VUYLkEY8Byy9wux6RwbZFy2oqWaEgDe8wstHWxo86QTQRDawiXg3M5qMeGxyAQnStUoE4Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7emLXKp47vsA3szW6xBRi5jkCQAFiAAPQ9ruShHtfPcSxnnySJ6Xp4jQcyfEWU6Nao6Ha4eZ6hBCJ6uq8tHzBf",
  "key1": "2HaPHY1fLh7mq5KPKsfiTNK1dYUCkLhtK6mxrZkWiCRnZQajpFhFSgLqy6qXsUEyWnvbfez2dcDwzgmVt1uApAD8",
  "key2": "2cmV1bPq8t8fZCFDpt6gFtnXhW851JgXqPeoZKKavQXo9rMVCJhTiTNnbUxBjj5G3ffvKXTQjJn744MUd4H3xWqZ",
  "key3": "5AVoRS51nkw4hGcesBmZpeEmwgVtnYB4h6ois39bLfWsLyxg7qNNwYkG7w9psX9Z7Wpwzwy2H4U75CySx5kguTEb",
  "key4": "3KUDAkkEekihTzEYcnKetrd89B59YLpahtjvNwpqqdFVTQRKwrbCFo2NdHuqE2dMP4impapDWpnGcS92YuzfYt7m",
  "key5": "3eUCnDrVPbcdN6wTjZXZUCSWxvLxDehaJDogkcfUtqxkVbiwzbxoNJBwXuVUs5LYLLpvUoj8ZgRfokeUNjJGbKDj",
  "key6": "2huVRUBse5ENaDKr4ZziPpxwmzhkTugMhvdZxNeZbDF1BtJWC3XrVNQWqi2e6rSrAfHZAS21JcfudwytwZbNBgQE",
  "key7": "3Gpa1ZsJPjRzBniumpXSoiFKasp7bE3Y3h4k2A6wPFaCSWwNruEQYYFnurFHAAxAexoXMJTVtiQ4Sf6WJ4yLhkC4",
  "key8": "29MtosgBiJ4J1aWm43o6rdF7Dp5RQyfpAL1nbbsCJ6fwETPvv3RGsmzb8XfWf6yKQZUAfWmcPDAYAFS56on73Por",
  "key9": "58acXAnh3jv4au9kkFM8oWorQVL1xPYgpqgCgsZwAKcMtratY45ZpjgQmmHnKm8EgcD8SYQPJS39USmdTDvaEY5R",
  "key10": "5arpwFHjzAXR1oY9sDGAZiZjb4aEK4T5drd7uXJu11ZByYKjiQ67mj59EnumHajg1gAQ242L1HQdxrUmq7bCF1NT",
  "key11": "5guSQa3puTeC6m5L23jpQAYZUk6vrATV4otdoNXHPBg4iZLuuJMyRet3mBJqqyhyhEH2HsSzkEDdDCnoJoXCjPQh",
  "key12": "5T7EBEVQcaTkLoNEQ9zTRz8RPSdPD6NSDfdpBXBNv2GNS2qAuRVc3vKyiugivwxfxjvhUF9BFnXnP8gPJTqHuM6",
  "key13": "iYa2SsX12tW9xbkQy3CBHNTEw8rZnZTnqUigN94SzpeZwRYj5xjKtdZDnxRm9AqZKattDKrxcAhZoi7K7rpfiYF",
  "key14": "3VH7zBuRAPn1a6GZdrdZ2y28BdSEQd2xQDwq234sr5k8AsjPbA55dyksbJEieZdavYtYDuQEV1ZCHgecG3Yf6qwr",
  "key15": "3YxqMNrNRcJ3gknnYdj9DMosV9jJUP16awXEf4angRaPbxLwX1QM2XJWBKxSTSeJnGVRCsmQBKQxCXDSy29MQWA9",
  "key16": "2DohzCyuE3aALkNhuqkzw2fGtMYLrCZBsNdkUeRFB3NbYBNxQfFPM2hxuGhQAKdrHaDTgWqHmC3N4MKpi4UeAC2T",
  "key17": "2UwQybkjP3knXThXoiFBxemYtmgen9Kx5N2DdWdejCrVbaNrUaeq7bLhe8R9phqecaV64DVqA22aUi121jZ8Waua",
  "key18": "5dofz4D8ixx74YkgmDB9xPXXBpfQM1wNk4JuSCyim9YhtbTRMsuzwys3QBS18DvESnAijpWm5r392Wfx8CrGrtjB",
  "key19": "2VdcZ93BYUUfrGHeJE51B5Kgih1QpprxfRZU8Bftf9jVFQWK9DqCXCkNacmypR1NZGvgRAV2ACXSR4Z32b9bci4v",
  "key20": "5kx75gBRxsTdS3fcZ1Vjm8Vc1KWdGiiL7vXb1VCpc1q9topNNYtZfnien1fUoGVdKwacHbApUSqLQ7zMCRyksJd3",
  "key21": "3sK4t1yiwFh4pGRBpvut3f3rjWVdzYFa7E3LNhaePbxZAn9dF47XNekNfzS14rso5K2yYBnCo4ezFxYJhjjdmZU2",
  "key22": "3sHZpQyowSYUTj7qVs16ZrcMuhoTqqUEu28PkEUAWXytRrfAV5HdWTe5Dwxvzxa7h2Dpiq1XaNQSiWWRGqaqR2qz",
  "key23": "4eDRATaoLBCwzNQXFqL9vfWRSdcRwdk9Je4F4ptnH3CEUAVQgqVYzcrjBv2SCv37tigZEjke2R1CugdLn1XWAMCx",
  "key24": "trvfusNcpqk1qeJxjyK28uDfiygrJ1BTaQjAEvFMzSNdCwq9hGUpoGJzvs3cgCpMqhXNWjc4uDM4TFwMrwdcqyu",
  "key25": "63bZpc3sYqXshzfYwiCFcteD7MtECkSJHLdHh2PAtTGDr14sdxzwTBmo1EEXQL5Tf7TALQLx96stuJFuT2oxbKMs",
  "key26": "jGaRA6GB2uA4x7D9Uhu9D4wZq8W7C6VCQB12b92VuPJ8BZrBsb5b71fxGnwMUWmB4XA7s7aboeJVARJkLXgd1eU",
  "key27": "246MAmVex7dWWs2AejEyvMkJCsLYMr5w7eHPb3JxBy9QBAgDEHvwFQXfLxrDtJtNbyjeZcWHUdW89CmSMaMh1PtA",
  "key28": "4zp9bQrhqEFkELv7fNMcAXoBnQ1Q38kqiT1gSDBE945TgFHAHqKFomxgfq39wvUvRY3UsyZmfkfr2Ysp8HhUyqhR",
  "key29": "3NrP8QSBMw1sUFYiS1tdegKcnEeAVR7pQDGrpAoNfhurvWmf645XNjG774ZEvH3PMCGmYrZ6RVKy3Hbn57AWoLiJ",
  "key30": "5TzFi8KaeW3dAKGDE92TpFSA7i2duobUWtGN1cnEJFsBDb2saFRxq6T4XYGGEBSmfJiuuFGjDydtxn63yQsvjYe7",
  "key31": "3ujLYbadZ3HqHsAdrQ56khASoEMDJ5rzbdVZ18HXiZURHeCQhCAoFgDxWqorSC8uPE4dMDE2opu5g3sFWy7SKx6W",
  "key32": "2kDGRsUmfNqPr8Fi5fUqeK2CxmG4hTBj7TiA3phjcmeAfqPPWzdU5BGokjrcAtE9msBTepaQrBpjjYgqZKYEAjdR",
  "key33": "2HLBQHG8HBFEq2sS4UspeTYJjUzXQ9SLZwwX7FmWRpykh7Cx42nnMsSnTowjHPovpBtWQhfq8R3MFwnPZRMgPyQW",
  "key34": "5iF7j1PSXQk6hVwBFp6fF4yEjPBzADUWRgWD1yuZonxo9VAE1ddpUfrQajgzumiKFCTub1bPoyjppDhSUvrqRg36",
  "key35": "4wruh1ocxcJLrYwwrfWLPWjsb54kCxbxJZuRWQ7SJkrStyhx6PgxLNCECpXa746oLoDTLUbrFnEzXUbroSJENvLj",
  "key36": "2thTY9sB7b9c64Wb5sKzufBBtn7BJoLAW5JEbBxZf4RTgL5uL3wPKNrk4sT3TTkHZjscQKCB5MeueL9RBpcHffnc",
  "key37": "5vQmP6SMDpxkUJcv6V2ix2gXRr9Xcr1x5Lvvse9L1DsmcouCaLXVtt84tq5N8jXs4uywdnGXj9pjzUKY845KQ3WT",
  "key38": "3WYMqcjZHacjs7uyd3BXgZwH9jMZP9EUXYpAvmkcPC14NpJFnEweUJp6RPsa8HZCrmqMHHFVbEXe3YKW2hQVefox",
  "key39": "4KSPMN2qM7s4jcDYcGeLDsxhL9NmxfGaa2McAeo7xKR4YhyaDWTHohRBUKJgiFHYMPo3n2rxNCosECgZQV4S57kd",
  "key40": "2iYDFfcoWvBkbfnv4iv3v2Mkn61Xhd3acoz8d79GQmDg1WKhE9P47aon5uzpZgw6h1cStfLa5hPQ8Cqqg2RjSEQ2",
  "key41": "4nm5jaX2TYR17heN9gk5LxN3HioWiCtByvxnCkAusmM6PiN1oSpZKx1uKB57Rfy5TiWfgWY9eqss8DMUyhukqTXJ",
  "key42": "53tUciGe6n1vCd1GC55oGypkqH4p63Lz7T4jtYhXV7h2jvd6Xiuu3yzqTsX5p3eQHnKbx9KCksE1MtX9EJK68No3",
  "key43": "58RhNJa14yAAg75VjHjGCHSJW26VEv5QnfYdaLTESJa5XHVbqB2iueSHRKg4hWR1mcjsrLKzSicGXjfvucvp8zCT",
  "key44": "3GMket9aHJPpBrUR3UbZMLPwmja6sXFW4dQNAvdpxy3i3kYVF1addz9LKHtVSo8fe6J2bUKa8vuCiRfFpNTbxZS2",
  "key45": "3pJVoPVGATtxMXzJEV7Rn1dDbTgo8MbgPRegYJFryerEXuda4d1WXFWf3Rz4KDYwoCXhLsZVLxVmT5Q1Z2673mCS"
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
