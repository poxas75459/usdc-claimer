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
    "56ZnHxaoA6nA5GawKZHHk98aMJ3XzxdAsEpNPoacae9v4Y8XTWaCT6Bgfp3BDiDm2tZ32Q3Kcryr6nhVjdbkD8vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UaKachzF133ptn5bD6Qqh3zKzhJqMpBC5WgLP5H17w9scLnCjfDDDNcqQc2TYQqjSdnRJGLTPPwtuaDF3RH7FCd",
  "key1": "q28J91HCHMYCa1N3fJLkLAeSLpbHknvJUyktxeFAEWS1YthG9xhWJEmf4rDX1VExYx6wipSkkXyd4g63v1eAKMo",
  "key2": "5CihGRFpdfUSgTh327xSeqa3RpbiqzmNcWPF4YWcMNwnm5KWi2vwKAgs1wUva6W1BexBx8mqrJwXibKyZi2492qL",
  "key3": "eqA2ZD8zpBwNyZHLUieBA4GFwqHXjYRA1sTEE31R8Z3kH3qz9jAfxVU93rmiCcaiawH2Bt4xJ3cXXopvDxMdkhN",
  "key4": "3XhYhZcy4NtsiK63azuU42merMspoW3eqkwL5HBat9mMDKbNiMa2QzQLGAf9EzaDUH7ML95iV46Uo7wD6ND4ujGx",
  "key5": "2bYDjzsimMKd8i9PTnwKnokmGrUgKHDM3Mdrw6GVrFQCazNSK9NdAxwuCofw9SWVfzry1TBYQzdQQQxp4KMnbBQi",
  "key6": "hQ8VgaJpPCQaNCyGnLH4oEr4FRERAuWkZVKYnJsn6Yh4a33TyNdGbojeJzjkgZEmqmWx3BNcwdSdvKXHMES5o7v",
  "key7": "4hoHSZtZCYF6kXbfyof4toz4KkVrH5xqbTZkYJ5DsjHxNAs2gXvzg8hAQGAKE9zS8JeoF5mAuaPGPknrS1kDxoaM",
  "key8": "2SzZDS2JGNRZuWzEEv8nttjDCeNnTw6yDYmLMrMeiQY4Kf3HKf1pF6ng3AfVfhGKnJzFnQhUKDCRmNo4gfCmaaQ7",
  "key9": "3Wm7fskmQthnMqC4aZvuazx529HaA9gtT8vf1LCswoLQe9ecPpCyGazAvtBWxnRQ4UgGUhtM2NPt2e2bYrfR2KBB",
  "key10": "4enMYipScmoTaFajMdCXCzqrMN6MBdZTGy86oYqCwS9JgJsAEvS1shwx4EueVbzQbTXxZDyfiVrU94UoT5nPEiq9",
  "key11": "464dwa4JPwxTRFfcthTRZjkUTLSWJ5Hk3VGTorDTAKNm1rBu8Q75GXd2SZvBFWKqyrdke8S74RRwBmMDsmWaXu86",
  "key12": "5AjpDAp75mg8v43UU9vC1Pn6hhiGjVgwzYkyqSf2HcA9NFVURnoDwmSabgrasz1H2J9Hsfxme9FN86RBDSyFSjUS",
  "key13": "2LJ4G2qcnpEximomvSRDWBBLQLHiJVtFP3n5B9RdsDGazgc7aStZEmw8BfVvEcNarvQ6XsHM7RXz27P1HbiNems8",
  "key14": "3oxsnH6bnzroKJJHHLAYgphy3HKJRtH5V7D7zefwNsztQ5MFKLZ3eWYYg3Wszz6mTvrX2Ueu4zRjuha9YhcXfFf2",
  "key15": "2DmRqHdHVgqLz2vmRn9Ey5QEddmUbQ39tPkqi5CG74BJ3DVYjMuMNQaRVsCyRxkrtVg7u5qF4UsStodXvWg7SoLU",
  "key16": "3ypPRtwJLw5uGPwtRxe3RSFgZ7Y184E5CrsnAn3DjQHeGaDu8qViYc6j3yTQgZf5gRkpZbwfmteWQdV6QABhfaAN",
  "key17": "hY9M4HgMACNyz42VXFr4Zm2Ur6e2cfUEFxCHNtG1p1dEkLwzhuuivSP6VqSUEY9N8v5YqUf26QCGact49QbL8bb",
  "key18": "2fVtKdTEbgZ4FJ3Kikm2k4VSMiBHqJxmyQJFzGFnSFrgCffuuzrhtUaAefNWMNQMG4Jzpyk3BMfEqBgK9QwGf9ZC",
  "key19": "4ELMUQrjfursC7gARfRhEc5jY6S34PXAVZ7ftWsn1v3VJD2EgGa9nZVpMdxzAYE8aGCekXXkRMwj7vYeX8bYmys6",
  "key20": "2DLh6RNoP5E8GAW43gAKfDrDXWPRGkrRiTx3jZJMiTRKuc1XyikLqwzZHL1e7mpasVSLvaYhtVFYrwYCMsodUHsw",
  "key21": "4rVQcS6YNdrpCVZhVChh4W6ug6ynR6LHtnGMCGiuadGCxNADFjo9ywsqAqE9aFAHUFSY8SPH8Y8ZZFjuYEnrHbrG",
  "key22": "PxezdiazRhJ3oHW9dTytCMCUXcEQxsDv6PbP4hnViKkpx8rSrbigEq2NYoiT3fb1HthvgJsCkJvBN2SUf5kzeDj",
  "key23": "4B7ZC8NW2AyuQZqxaS8zEqomFV9ea5ACWn8RmopbuvzgCU9fMNfJMAv1PAr5dNLcyrH5oqS7Wqgwm5VvgyzazFdA",
  "key24": "3QezvZqdftAia56h1KnuTbBFxd7FySnQJvoJhomZS7iRkspfamGQQszAeg2JukwjhcHUaWAfsnyVMGvCPPCrX1EU",
  "key25": "471aFkT8x4Z6n2fWF351HrAL8N1dYzSiVEFJShUtfmEoRSai41of7XTYYKoRKNPusP5y6ZSTTA2GbZFJ4dtjnDhH",
  "key26": "3tA4eSpoNG1EFgPZJNoKefyFkHQWzt5Gu5xQc3jpU5waPxeYUkSDuPim2ANAV3dtk4muwzStw9FhNymRb5cqJk8Q",
  "key27": "2gX14hzyzAYwu6vzVyrWUQwhe1B2hQP7bjjqYvixrVdC44bsQTfWdTNtpD9BR76hZxAiifS6iZRMGcnRHkzL6zSX",
  "key28": "67BErvoFg6etSQVis9p3s75Vp9vSfQ4sSuHzaQsNFeacEbmwXAx9SFt5eXRmxuVzND19DR3Pkn4HYbvuUVWBVEuk",
  "key29": "5myR4xcJK9VTGgihqFzVQYi71mbEznQTiPjgBHixzyirn3E9uiYag82XeNiPPohaysKvTFSGUjWLDyRy1Kv5UPay",
  "key30": "3pAUmi9cCtdLqPqGZ2PFCUwdFmZMN4DxLxcZ6Ca7Ze7mYwmnypU7TpHFVHoanTUWKUDarzFRJVdA8GQHdsbxnX6a",
  "key31": "YLdfzjMrEqhGmzWtaWuGq6C3Amz6kyvSPUqmEwtPkZbWNtdkJR1wgGqWv51JaiBMZBdWMXjtnerewweFDN8za4W",
  "key32": "ZWX86kyQznCNXsrBypSXNRcGGBhGiChotH3SBsJCtGmAyV5qG9U4iyfTkngLmKqGEtpouu6S4Lg1Fh3mduZCikg",
  "key33": "5coPfkZ6sBTNXtJz6fUWZrWoHcRyXUCro6M4CJLgD5b4pAKyEvrNdQEHwXtkMMY2zyRXonYBeck561uMbVToa52F",
  "key34": "5D4XmfZW8dmNkwTtiQBCzNEpeUJv79EXt8qSC1NzErS6NCstBcHXuwXY9AVzbynT3q6UCyvpmrgmxr6H2b39Y9Pe",
  "key35": "57J93fwvTWYuYEaJfpbJ5oSFnzS36mGuCzYQLjNxXeuADALHkfdhZBj4aZg3dwMPZ2fceqUiKy3Skea4m7SK7gbx",
  "key36": "5TmFn2Rm4qA6niz5qC7FmZEfvjrUdK5txThNWZYsX9cfNwfpYDjKUixeKnQ5WS58t2AQJrJiJCkpfKuyCYNmWQq5",
  "key37": "3auhceHX2c1Eww77havvHnSbwbsNNaXiicFaVNLyiSWYc6vKTvxu6D2FSc5W9zZdUHSWEQvUf6kanHkNQSeXLnfU",
  "key38": "LUtWoFne5ab3JCxqmy7m6375k42E3KVYL2552N7Ueqv56sHoffy2kKZwb1x9CdXkGKgcWieFQg6YjZ8ngnBNWBa",
  "key39": "wckCcKFZnQQUZCqk1W8NNznLcLmmKkV43QDf5V8SWW752zNZavZ4KtLEmbkYVTmVEkhfz1pzijrLNF8rBV3yLBr"
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
