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
    "4qGJLU4Xzb1fcwp91PSMKbXFxbM2YPtN2ofgrGZywsfgpYwyX7vZmD69zQNV3715Kj1zMXCXdo7RVyNMD4WJLBd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JYsrXfAfbALw3zhedfN34Y6jwsy7N1XL28StQftc29B5apjwJ4X1iH936Q1MESw1HQD6cznTRDMnMsJ7645t2M",
  "key1": "ixzq1ZhEA9F8qnoUHs9Udyfhjh84s2d7vZDKdusJ8VonjXPVJuAjzizAwYHLHGsGh8ga3fcikS2unmBnQa7hhST",
  "key2": "5d25q9GgxabEYBdTiCxZrKrSLaGumCZxsGtGrSX36VnZGBf1w7WSAcmS1ER6Hf74ToY64tzJDa4ZdKzxVbgwwRm2",
  "key3": "gh9vnBgrvbPcAjQU1uVKa7nTX3n4z73YFJQxSJXpaTuYtRBsKLPRiRWi6zZQykSZyFWzHYUTnPxn3n7oPrSMXqR",
  "key4": "q8KM7CNU3ghCH44gGfYYLihSuf5JkkqodN176rtvDqsYKgzzM2U2vFmSjYyGyGMbWqZrtnbD82K9zkZkd1o2Zzn",
  "key5": "5RjSDtnozDyRk6ss3BTMNExEYnR5sYv3zqW8uDYEL8m5WefZefUZQidgpk7ZKyh7fYNBFc7M2QYPgTw15ZVgrwy4",
  "key6": "2TJ4hYjY7RBt1cXuUXo7CqNRU6iEibVoMUrgQGqKvQ39sABqjToYFxXBuM1RZ1gzK2C9Q3WEdVnH2xLeEGhp6ffr",
  "key7": "6G9CQgq1tJr4PnQmkHhoo9FrcQYmp95vXLEGrVjea1KB4vUF7Vk4uKBL7wRy2csccQVMZY6H63woCKHbfYxVXBX",
  "key8": "2MU4vdsZT5xm2jK3uggSX6XA4pkdFLYjh2zLHXXCG62XdwFY6ViYVFbjQUnsJSxNUUCD5npUwAZvSgAnMHq8tYov",
  "key9": "4QwqDDh6viqkePf5mNymPdT1q6LjqyUVHxzqJjKsBpupyhXHqFzuEYnWFJ7YTQkFMQzmcoL5MjkKiMxgN7sqwDyM",
  "key10": "4qHeZSoXzBcRLo1fuFihaJFZLfonBeRnSSUiCeyZGyrn3cpKYomWHncEW2RqbvUFH1EZ7fSCdsUxHeLc93r2apcs",
  "key11": "3pQi7Yszbn5uXMnP3oX7LKp3AVNWMR5v5D5bEKQ1oKmHmv6ro4J1aXup1CEctQXLKr5iGVLmsf5HAZxFQD1MpPDT",
  "key12": "3sWBQnEiq72ZAMvgoFtv8nhPdCxQUFoLSwxnsHPpSLW6kxUW37ZmQMbBWfvXJiKJgUQiXt5JavkPueBeqfsGPbAf",
  "key13": "2zZbTR4NMRDY4M8jyGphGCYwTKsrDy55iExCUXdEPPN2t4XpLkw7U6TCaFJgYj1W5Dwz89PVQQquUWUjt28tgfmU",
  "key14": "rQR85TYKyNkhuZ7MgntQH9aJffton8UoUN1LnXjCUYWSnM4Z4WmU41zLeXLtaSQLkH16RXsUjX1ReptC9uEfVFc",
  "key15": "33p8aS2nN9CNEwmFvQBCcKNMJeKzierViRbn7MRmGx6azPXxZjnJzYqnKdvy6bAzhRr1Qkfyi3Ys8X7PKAvSwXST",
  "key16": "4G7CJ3DUhrWZ11suEsQ148ME4YVgfc7usATs2Z4cUdemNo7VTAKq7ZRx3mtTryHE5ce8qooGpcTVCaAghhJwFZ2s",
  "key17": "5rkmWskoFb1U9mcqFLXD53wHkrFCNozXRWSom46Aq2LBeaQccSzv2yGiGmRWuUXgZdJt14JNLXwpQLapbWPXStmU",
  "key18": "5SRdDcRn8ELymyw7oUX2veL9ZnwKUZA88HZDLrZsLawgnw1qe2F9p7aJnfk6FeSqAp19LoGak7tdjk6QeoNcRSq8",
  "key19": "2jZMQPk8X8qgpZ29NouqvRoXkbM5m6YiS1fwqXafWCy3yAhh2X5tLgFLQdE4PM4D1zgSQ5Vq49K6znGCKvxMyHw4",
  "key20": "WxXJW4oCCRgSC5dosse9bnibdfxXPzxKDCWh334n4biT8WPxjHG4o3ZPyWfd4Kp4w6MbNVvzjAn2CCHgcMbebS1",
  "key21": "3aLb8LM3ZB6eZKVYdYCuhTfJJVNdnX4F3C7f1zX3hFQLym1S4X6tfVgMfL4R5K3WS1TA33Wy6NAZNwpD3C4ueii4",
  "key22": "5jhCSTvxMnobfdUepgkg3HnszwFaXhNbvxB4REwBk7wRXUakLNkyTG6B1Xh7QJr36acDeR6AAZaC4NoXdESXbVRJ",
  "key23": "3mLs25jTFXDbcS7YLQ5fJgns3L5Pcebh9kWT8mz2RLspMogN7EcB8eaWyVMV7ED3GurdHRtWdJpUQ7PjZxcUSvdk",
  "key24": "e9CFmW9bYsSm17ZrqdRUseRs8xYjYNLrFvXuxc2DsfjqXXsS7y9WuBF8YJKeB66HFiHdmGav29Cpau2KwxUHxpi",
  "key25": "32abLCkvQSccFSwKvBmjBSgjdQdbnvZhsGUUgfeTnYNwnU2YiXBNSihyjs335H7KyFdmrdEfGoPyyoeCBL2b23Fw",
  "key26": "W48Q2ArA1BcrXj55DVQFAmjnAtkVD8GnUipEazLG1fuenC5i1ZnVeNc4ahasHx8q7fyetaV3tf54K4mXMqeWTQS",
  "key27": "b7rvQJshp34DqrXaekQMAtSGRwK5MdPNPFTdDnAtupoSEHFB4XN3tZNwm263kehADmCeJtbPJ6bpXavY1rb4sGi",
  "key28": "3cNcoFWTUwz4AnjudbtZZghm5cAuDA6q42AF1iUMYsb278paYPgaGec3oJbvK8C9bf3wBYi7Vtmr9sTB7W1vtQ7W",
  "key29": "2toNV4U7h74GEQM6r3ooMKAkjCvn9wspWs42EtSTgmfGdsVwUemw9fR3UUX1CW6mqTn6xeVTwfMgKutpwMdkVfAy",
  "key30": "41NJQVVTBQDPdmWP9eQgEjnvqdNke2yhsmTDG1o4rexZpwphSbjNA86J4J7MrBcpws7Fn79L3F66jTtaaSkN4p2o",
  "key31": "4FBoFzUubTErLUbKzNWn1MCNxMaytMNCmzfUrikW5dWN495Nm4BbDLKmTpzscRScbC13wq4F3y1J9K7kaEKVkNdd",
  "key32": "SbToWnXo93H41FehGGvkpxujoyfqPRyTPGh7XR65uxzv2n9fMvETLy7Y1FzqLjbPxfUU6wUJzcrLqmT5EhWEDJQ",
  "key33": "PgzKRwrS5zvFXjNBkx9Poz1gb9T9MMKrXZuysmkg2eJF9N9WDP8tSpNcWTtvmPLKTeamv5imH6dWgpfWYx5rK9o",
  "key34": "5H8SQEYbq7mzwhDDvcZT39FaJWREEAxFUibqPb9jbF149N3WAvW1xsSxE972MgA3gWM37omxqonLLW1sqj1s5A5Q",
  "key35": "Dpg1U7BTpx6iW2UsTuF3MAVppK1BXjXLAEJmDKet2Ghy7UMLQbBeTu8rGPQZMhd2VAVr2KK5hE9APTwGzNeAXdf",
  "key36": "2hRfFBNYPPyCWmjuAMg7HttnpGMu2w2K6UEMyPJYN3vnN61jaX64LrGgBzy3acihot2t2SAevVLCPM2FkbH86wUJ"
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
