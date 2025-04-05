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
    "YaTUJpWcMtCcQWAD9a5qkdYkxbHHWneATBXyZzmJpsTG5vHk4vCEQd5ufJU9s3UG9tEp3Wny8MuWUqmnMFabxtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDRgu91ANyvLscBCLs1E8ZovJX7VbzpCBa4HFZCj4DhXhrhGNnkwfqMeK7vrwkrNtV6EyNCYsg5Aaiwr4VHyWvC",
  "key1": "66iyz4Znmptt8hbi1Y9qpBb8tw9BXUWdDc3Bku44RdFeTjho3QdJSc6XpZ2TRx1ajf5oFH6D2HEtfehBJt8MpRmr",
  "key2": "AbYctSQCMpXHMQic8MQFZNNeV4bmrXfTQabB7bdiz6hs7BZBoUbyKCD7dMsDPN2BgEayKzrkKSupevr76MQAfkV",
  "key3": "5D62Dh1bDN3359qemcbcdri5uqYTAFyCV1LtBJnc4B63ywttUAkXKUjDocNkxDDdwdaNP9DvpQM6ifWsDxVoKiUV",
  "key4": "2qSidjnzNz8D525KsqnbYuxu7mmQTV3BV3Zx1ejtSFhJ8jmpBWAyfTPFNrNNdMUDqjPUTaAXvaCxxazWyqTCbHXq",
  "key5": "2CSVma1FpSRnTGSmi74x1EY99iZ1MoAheR3eXnq5EEqD3o68Y6qQzBoMPrQ6fGs9htn11uwZxzP5Ee7kVotRr6j5",
  "key6": "4ywPinPQPL5Uw6AbBAd5XyuexnqzhqR369TjUfufVV9xyAZsQqqzojjKjXCtNiEyxAuy21RxKsuUi16BZ7nVnWug",
  "key7": "3DpFfr6WBWte1XF9M1mrEi3tYUmZWm8x3PXrKunt3TiyUcZZy7V5aEPdMu6JicnNzHAHNUh6CQB5kydScYUnYs5d",
  "key8": "8dCjeVmUfWDh3iEyMhmhrypreLTRXYMDDRaZLYhWqZTTwDyW9GRG37VWTdsFCU8hnyWvUYZERUk66YZnfwRjjVW",
  "key9": "44u8pKGKtjz79uqqWT62PCBjgkmtTpzPnLNqfvfnM3rZMp25QtZrVZhXJNa3n39VeMMHHmyPaQ7GSfKXT18SYZxE",
  "key10": "4ArgwJw7MKRVjYNuBT1xaRnScaGCAif3cgSiPVKnbtr1GabkDsFUm6nH8Td6nL8KZdHdidhXQwtngD1BzmhsmLLP",
  "key11": "3gQGv88jzvZUMn6UaVR2b3JocgJeAjvqt12CEYiPP85MfsNfuR5wtjwHtKtFLWeGigH5pRSJKdzGaH4TjF7WqT4F",
  "key12": "2fNuqndUTDKfwNjU8JW1R1SamcKeofuFJ7Qg2T64FD7QcyF1Bhc9NQXNwmqddb6X3Ni6neijhHd5uxcE1BBEq7Nr",
  "key13": "66qzxx2eR1my5Wd3XJs6G3118ApiHLnhsPAowupHqV18auLt42apMnecRw431MQxAmZq4aHrwvoK2zv8GTpXaYwu",
  "key14": "7YquurqbaiDdFHL7xoXvm8CzVQnkXZPUfYyETZVDPE74LSRLLNDEXgyiaGRvXtHrWdKvwUsZpLjeufGALp2nboi",
  "key15": "4qjRm3nG1RU3FYVqV9bZUFicoKKGp8c9sn4bMWLUtRyZi53sQnWEgHaZw3PRgTpZkUWcg9Q1rAMv7ktgXzDvRY1u",
  "key16": "4m7F3SpwNdbwKAeF48Nga64uqqVNPbvBrVcJu4UnU5gv5uH5g3FpBYumNpCDzLZEKfoJq958e3F6VFEjXnypt7o1",
  "key17": "vzR8cpdrvLZUhu4bxgVjtEw8pGsqGMUtzb5w168GnTfghdUiomxGcbP4vRLqdJkJuny3XavtN2zZaWGQTy1AcgZ",
  "key18": "5PiCijM2BH4D7dRiUgbk6g1wMcKEJ4sQv82M5GoM7mNm4Qj9Xux9CxEdzcD556hpEXRapPq27SXKJG4ELW2Yb5yS",
  "key19": "5wCPGTgw1UARYixrdS59DAz1d21J56moCkrkGfR5Gckz6XitUgE2Z1GX5VEAizq3RQZqsXWfS6d4ybeBHqNYt2WV",
  "key20": "28NNdvjN3SLCkyiBj9afNUBaXcoWnUPXK4JSQSBWZtmkhrV437tmejhQXrkGTcJmsXMJsMagZwaHpz7ukXxPUcMG",
  "key21": "5xfGETHrH3g5v9V24DuUBwkT9X1B5BB5957thbv4DsLXk4ucmPcvUid2FUP1iqyuDkMqsac3Mn8vjT3JRbHx3Qak",
  "key22": "41hxGyNW9469jL4FmDsLAS4PMWAv5i4D4J2F6gDV1BjU8xbGW1t3gKnR5xZrioyMcxsxFWX2gyneZRjrudtHr7m",
  "key23": "3KLk28F3M5TFD6XL3PCjr4DHE9PWxyAziwHtVQ3dJJ1uRnYiaeNNLstp8LFBwWZhPrYS6Fy5MSE2ANScntyckqJ4",
  "key24": "4DoWj2rtgpgA5jkQkmnNYREJS5YCYjDobHhte6rZiT8eZ1UjFhKDavvt9YqX5NbZkMe66mMyPuxckqmsDXmm6VGq",
  "key25": "2aFq3mikVFEjLc6ftvTfynZBFpUeq4si8hagMecvdk7F11ptMCpdKK62NYFnHUn2GE13cvnnFX6yqsvaYLAb2vCC",
  "key26": "57BvPC6eWpJd8CKz1qPtizTRQSnXzHMCsPcDwtKspvBJzXzzbjH9epJKTf3s6JHEU8ybAycRP5hD5kC3dfersdxE",
  "key27": "2tE2N14qF4f36gYiWERidyaNp6VLJBrwmG7ttPtqV3LvELtwFM2xDMNorjho12s1mRuHqB9fWd5VDbd58hmRHupi",
  "key28": "4HykFrJqFHWpatNxG58sWHVWpoVpq2asZEN6XLv1q3UBxmy53D41T1jc8a5vLQ1AbJivd2NACUB2EtF7iky8pUU3",
  "key29": "2eaXiAhQDrsAYGVBHDjoDmGihhzQ7j7bvkTuKEbaV7tXQVozhn9emxUvQNAuQjqLj8m44Yo5Zg2U3PuG3SmAWhvD",
  "key30": "2wEPAP5BhHABAuJDrfQ6ea1VtneGFAYMJrLpryeP76gZy9NHuAKSa1gaYrpit7ffzkcip3oaCYNRM257S7nCSDNA",
  "key31": "21oTVzpddNmw9e75j4Biv32XrhJ3TppjZe39fzxcNTVNXMpMT8VYmBhBg1xWmabqxQ3PjB8Z5ZKFxbtxcZHAPmXZ",
  "key32": "9fFvTs9vN3dtc7oY3TM65FhYkbT3L5jFSUMKzxD9WpVdJFCs929tdJQz4E3Ebb16wd7j5SAe4FoP3KPqvnkyoTW",
  "key33": "3xV3RLjf45WShV7zpJRFapeDvhX4NHPgsek7HRzTsVkhSnYVLJECGQL9d6kQKstzuycXimEEdQA8853gitArvVQ5",
  "key34": "wgyX14htFH6aSpWgXTJXauoyxXHGNSccFzaLPLsN3iyNH7MceyETGe2r9UmWN1xuTyurRJVQQYhcJ7qR5FAe2fJ",
  "key35": "3mmtBrPj3XUnXzDLYQdc7BuFv8RuS3cUYQyeUmjxYWhf8K5bGU5tMJyNkzaf77gofWhQMahJgU9vdQiwHmvVp6Wb",
  "key36": "2jawAA2CUyKbpD5zDirkTTcyRm29bK3hfm6YtKuk8VDeW2pqU5kWa6yaAgFLHa91ignP6Zr62fATuzTPfbw5ExYG",
  "key37": "469dz98aLee3RTqWo7FpRUbP9A8EFCtbauTA6AqbP98kNPRTWiH3zzcBsP7pgMKHvxqDixRSBKeSTitEqRFAcWtC",
  "key38": "4onBaezKu9XjZYErTwKkH7Uy8DJbN1K4FTbHceFhQzBv3rge6XB5uNWCgFgqKQ9sskRWfjeHwJUjZ8UR5UKNdoQX",
  "key39": "2pvzc1wVBSYHiDwe5Zaw1Gahet1689HhWtcxk6t7YWzn3jPX5XcAUvhfT7gbUznZycvSvNEuCtUfoYCj7y3cqp3p",
  "key40": "384dLEfKJHFPsvwRvDg8Eynmgzk7DMtwNRr5U6ktW8uSmeVRR7ovgJbmfViBCeWvkbjTEhcDPzdgbG2ipgbrNSKL",
  "key41": "3WBYeqmxG2TuM5UvG1KFJrNnACKFoqQhmPEUAPs58KN7X5GciuusUWnWoa5PoLGDZ9x3N9LFw5kGm4zyTdkyj6as"
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
