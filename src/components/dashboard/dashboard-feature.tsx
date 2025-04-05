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
    "4HSt1s94HXYLQTXrWbHE4puqwDAJen5xDz4koh3P9tsbepfUPQ5VJ6hn9YdLJrr7EyEGbhY3LpUiUqQCRaedgEnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqQHcYrkmBNfSXvGSjTpNRtsVkgBdqQC1NELNhcp5b8S3wWcospKq4T9umiqjUVQ3xYRFfWzjfNspK9BgG7YhRp",
  "key1": "4J41dpteyHmC7noouN852UhLEbDpGUad9YEwBTHr8kfGdLh1Ub7AU12R9Rdy497pZdc44h4Zvy9V4RHeg8L51j1D",
  "key2": "ag6ur4QEkTk97wFmuwoPr5KFtEhJSsmnjxXcnkBaaLuFe6bGi3QBsZmqtyx1F7PZJBbR9Hwx6saCsmKF4UpVQ8e",
  "key3": "3ao785zuHGLxJfui2CY2tPHfrgHoAVE258EuTp9XaWg2BugHX2Tb737YM1A9uUkzgTFskNN5n69v7cvmVkttN6ES",
  "key4": "51zwVcQHoVWiUE5Nft3Nud2cb8pzGUY2rDfSLY4rB6EH2AnU45UBU9Jij745TL3jb3aUV49REp9uiJr2cHAEUScQ",
  "key5": "3BDNpicPpj5S2YWabyRHJZ4TuDkRMDEqLJ4BptQqLPMueBuZXxAP7DcUTpG4pRHGBsBJSJsEyi17rKrDp6hcsLwc",
  "key6": "4n9tDbxRFePaXPBoSzautHCz6hzh6oGJmVtGsnpQv85DurGegEbo8VxEsLYRZg4VaZxU2FGb634iSxgkkdsaMZUN",
  "key7": "26f7K4Kdta8xVDCV4pf1y6kda4PeSkFW2r7Cy9Z3gxbAxCaZazzw357PcmUoXDEK5zQAo2FbdvyQaUWPyBxVWgAK",
  "key8": "5xEFp2YfZzTiENbN2Y3fyMrwMVN6fL7K3721wJT1tNa7DLJRRbJNUeFGn9u9JmFZ4PfbQ4voUMZVXaCdHrSYBCTM",
  "key9": "3KNKMXKVvZ3frNqLkVXmLQkDxP8qSUqJCbFxpQ4kFW9obzYhc36sLaeaKdpsWzwFbiio5XYC4u8w5NSbZqYmJscn",
  "key10": "5P3qkMz617BajoXizWUm8L4CcrM2ACgxkCrrniGR4o8WPq8k38i87sB7PGR1gkVTZga3JrtKYBdpXqWLeW9JSyM2",
  "key11": "2MJM8NVAQKnjnv7CjP8rGYHLyvtDJ5gpn8Y7bX5azE85quPsfZWJQuMeKNq21enD4tukrsH82gej5CKGJmQiBPTV",
  "key12": "2xPTsL6Fi8Q5rmBHKyeJMYk2jYNrMLhndVZx1cwMvPUr4D5HGNxY7ENi9cNrJYEfKHy5PXoinqiKqQYECvufNb25",
  "key13": "4eFVaPo1cDrR4CaymZDYTAfnXUoFm7DGYz9Td1KFSaVxUHsXhpfCEhYjFaVdKmMM3ZNsMiLxNLok7EHrAaqsCM3V",
  "key14": "2ap1KfQgwWx2MoPXdN7Zkewh2EVFCQqmVGuvskyPAxLg1gUdvBHAJgE5Gm2bc2BCkk8HiF4tLDHAdKRBV1s7ZufU",
  "key15": "4XvCffZjYxNxHgu8gmbmP4ibxM93RXLDoRrRHQeADgsqK3yxKnfU5t5FvFkkg8MXRYkQGza1Z48LE9poZUScDw4h",
  "key16": "38DqYy8ixP71Jmj6ixLMsNq7mzgj3npnt6QbaYG3JazZL7os6aoJkW29XgNUTayofkLcFGgtqJqpfcoh4vzx8yqY",
  "key17": "RKBHJCs3vN8MVMJUAtjvgr6sNvsUmuoXMWMkMB1AxGwZHmkSD6NnHTE1dpaVRRauTLw5ERHRUuj3kU98DptzdvE",
  "key18": "GCiioDz1ZKHt8BnDkUQfj1gF6fxTdhPegE3pXZ7vbsuYs9kYyaXdYPrxBJ8GPkAPb9eJmAz38XU9Dp7kgCEBYvX",
  "key19": "4eCDj7twbyq1NaMWEJxKggteUAWyhsKn7sVUQcCfEQq6KJ7vpgdK6ZHE2fHnsUZh8eMhY3KRjBtNETo6KGimb6Mm",
  "key20": "qpcpDQj3mWHyKod42a6Vq5mPs5Uzec3uBDGJxbaf6ydoj63LXBmtjtgdD4TBMC8rmub1r9UFWB2U8GpZinTwvmg",
  "key21": "NCcdg6L7qZBQ2uyVQ5dJh8Db71JTnpsWgBLwr8sjBZpxzvbijNkYQsv17VBmXRrLkLFDrEtuPSCpBr5mNgfj3BT",
  "key22": "64j9RjhcugxwLXHDKLGWZNbv6V64kMMnpv7Wwz3yf36rn47GABmmPsVT9p6LYPpWybXWDKAqiM1shGfaCbfV3ZeM",
  "key23": "3bAwt3GAoLUxuFmZvS8ccLHhhBkphxSLxAm61dGcEsy2qY5ZtEp3FG9Xuz81PenkXyhem3QMCq47n8EobTcQP7hG",
  "key24": "5cL8NXZVjJAcpcgva1FRhLv1uD1Ydjrt2C7w81SdEfUUtDmwDdu5roBRQJqT2JMPzLTozVGdRJbsAvFqDe3mfud3",
  "key25": "re7HBooGUMN8DCcLZdG2qqPYoxUB7ZNJDKFpqW5gJeUcrW1E3XizmbQV4kDEY4GtXeSKJSUMGag3F3PCnSRvSNn",
  "key26": "1EYBz17swUy9VP2nmAhCkhSqZMzwtc7vdrc5fPYi4AdbN5yENXMUUnEg75mB3BxFLEzSuQyN4Qow6muyuMzu7QV",
  "key27": "5hRZdhxN3ttzRXvdm9uxyZsDuw5x2dpxD6rpjY4xrVMxa3QEyhwvkpXWuge5JBxKeGH2HaYFaBgGFf3o3nZzQuxb",
  "key28": "3EjDjH4qXtoNhdsjWbzn95uUyUt8jGQDEtHmJLLm5yTiBiCtrzsuu6bV2Ukjkn5x5EWUwKBYiqNAA7JuNxARyhLH",
  "key29": "3dvh6aguqnv4dbF4rSXnUqGnGpkv4RAzKcmB4RNF7KceZpSjHXfFbdP6LFog6a5GhMD8PF9udmmBQcgmJZpDYHDT",
  "key30": "3YsKVvYF282yDCdQX224kEtBCK2ZAWUVDyfRnSkAgoxu39srgsJsyUmqpeszXV2ngdd6jXUTvw7wZ6FbaGzDNdkH",
  "key31": "4RKsysi9ML3wkVVf2F6eoLmXCoEA3b22CCZLAoEwpAygDoUHXTWcY7fALrmNN8VDxuG8fGpGmjwRDgX8hnAThKuG",
  "key32": "5JtHfa5qVS5qcb8JV8Sf4LKXm5PH7mvQKWY8c9p78733sXq9FMz1ZggvZENY6NSra7tJFrWVsnVocUAajNnAmRUr",
  "key33": "JEfMdrdZnxSX2qwKRe2SMdce4jWYrjNeA8Vyumh1kHYDpsqHLkTdD4ePWCFAp3xnp9VV9oTmC4qrNZgJaKMij9L",
  "key34": "38Y8iGgnm7HPvAhshxoZNjSRKDcTa6LSMxxJg1NckonDEvTvcV62yg7s19V5q4H4AJg3ZLHk3R2646nHoSsW5Mcr",
  "key35": "4i8rJNWyhHRLq1wVatdM84FyudqTijPuS5e9dXSgrymHxQviGjuba3aidXD2mTLSGrf6HiFgJs979fRFMM4XreBq",
  "key36": "2BrYCZeYbokoTRkg4GqvQ6K5vh339bhmMskopnMzkmayncfnTEC8zQRCU6Ftz1eQp5b3q2qrHMFGxmEYLcyUE6Ey",
  "key37": "4YMnjkt85iivz5kpmuh2hAxVAfN2CmeZSRAqNPVd6Wz7snQ1NrK2HYD27iYmd3S61EsFm6QXRKP6rz353jc2HL2"
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
