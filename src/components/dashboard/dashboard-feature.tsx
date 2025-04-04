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
    "36evtva8RLctv4HKv5a26kzHq4j2eUWMqizUTt3gDQN7P3EURAE7aD1FY9LBKLYtaWA9S73XYGLheamcMziufpMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAdVEwm3bQXKS7pqN22i4u5A4CzsBatMyynxxWk8TCmXqB8ERYt1Xqg4gi641UMHHq41WfrR1aMfChKdeqrkRJ5",
  "key1": "5zA7yoKS8EzfdF9rL2cGv48WXScvG9mNRXWVpgr9iVJBB3qxWrhHQbfj1qbUBqRoUKYX5ovjBQypMaAswpYs65ec",
  "key2": "5gLEkhqPhoUpsvbWCq3Eg3Mk5YBuLg9MRLLKJEppy2sBqScTLkTvjA2tvTcQUbeeDBHFZXteduy8PUtbQL5Fisn1",
  "key3": "ix3U55HPhDSBbiVACrkE25EJNua8FH2qFCjrMLivo1VcHoA3i5fUrwSAPA1vsWcFMx6hdcWekujPhftvH8At3S3",
  "key4": "5joWRyC1iEr7uviDqA568jZs5e1xmhP1i89HCP2uHW8Bnr1CVKta8WFWaAPHFbLiKXCscgGDTobvkQm9dGqnn4XS",
  "key5": "keHC2aNccFobb71AkT5JpuH1MhDR2bM84CbmKuK3wU47zJHHjjSiNo9cd4UpHk5ZinkyZzXTHCdtDxrwHDnhKUf",
  "key6": "8etamrVWN7hyn6e4VYypoc5HufGm7McxdhthPLxKYZAkJRGVFwnV68jT5RGEMoFcrahdCMSfoHJaDqVrBh1psZs",
  "key7": "644iNrCy3u67unm953bxm87Bu2swbRES84R35zTZtdrSubG4AfrbgmNA5JiNFnKDPEaXFr2dW2v5o8rK5q1dyHh8",
  "key8": "2nrXJMby6NAmM4QJC3dXSqmf6kAnNbGz5k6z54ZBWk3NLamNKr4yUZGBLJY69JgCqEUzGkUZDps9pye58Ts68Gn8",
  "key9": "46xR4yxsz91CR67B1QQp4jbhLaAPseNrRBgncjAycmzv5EvtnixKPhaA1vRQBxyitBXAHuBY2XNdG75FmQeJUnxG",
  "key10": "5mNtwth8RBeWMQzs1R1wVdkfYi2wA4udV1rxVrbnMfdwhY3myFCx8NLBGcy5Hr8NMr2oe3QW8Go3m9ZqYc5AtJv8",
  "key11": "4qUYWpyFcn99SeZHtD6Go8JyQoqcFqAwzWoMhmNYBx5fUQeUkG53xrJR7oVS7F9S9wb93GLsvRNEW1hnUdTcJ4ku",
  "key12": "4sngNzzM19rLoopvTAQ441ir8x3Tk7HuumtnzSxHBQQmTdLTCJjKdbYmTyusu1TJ8nuhYqoykhbK4bAmzF7ShMFW",
  "key13": "2aMAEiJXqQVyGG5Pe8HxDN2qyfyWxEPnDF6SRHtWNeKgUG4zw48Jc6xQL71x2Y2W1Nbk3wFkb89vWvUB2usptBcR",
  "key14": "RX6xRf4GdVANvMTTMpYDwdeU6VKRxBiprdp4iBRLqXvvqgtuS9nvRmBQxVscTYfQT9yHV9wco1QG2ZvJVETy42i",
  "key15": "4EzySWaFg9sGdiWTKixXwo2KM8yBaDekSZuVdDQvoegmJ6p7Y6EbtcwfoLbZvwkLKh7xcJvKxFnwsEVJiWowdDg1",
  "key16": "5vGQYPyfxz5NNopR6beoqAnstUPmWRukpBinJvYWRrjDH3Mff9upmsDR7L89UYbgQoGVG9t4T4CQZv3DjdwFE6sW",
  "key17": "5NyeqbuV7Ye5mU6TtH1zPbFkAu3jYqhjshwC7jir4H9EENqaayBDj2Pm8qgu1y4BwK7dsvvLrd5GW2QzVQCWJXkw",
  "key18": "2bwJAoi7zrLdv3M97HrrnQQt9PpL9wBrG63hKC9KcLHN9jjEdM8E5aM83p6w2mzD1eFKJmTnTpahauFK2iaSqEfJ",
  "key19": "4aZvRTpv7FomjPfSwfDwV3oxChCCor9QgaEGC2GysZD8AUGHbQ5P24TwcfUFt7kuEHJZT8Htob617iUjcA17Zomu",
  "key20": "3D4yyBi7Ha9P8Z5eF68ZnXSQiRQq2aZvFj9Cdq8H93G4fGQKSkxUaXpJvbUKDLkLRuXzLQWq3t2zZJavN3mHEyv7",
  "key21": "4Ff3j6FKbWp5sfUKAkC8aUxHCK5nLnBip1y7SzLbP1wBhSvQWZjb75oNT1uCoeFLyk36Du7imecFKMLPMkoQ87rx",
  "key22": "4EjNJyWpMwSYjb6E788AQ2oGGEgynxpnkWUm6tPbkzNBdyeUiuPGmhaLMeMLBebzssCzzToSQo9ef6oQr4u8bJwL",
  "key23": "2gZL2Q4LkjW3XvGwb2NqpyCFUpUfJo2W3hnAPDYmqKqmgr2VCcVE7pACqReoA6vEq9XqKMkh1jxw1FYPQUG4t2s1",
  "key24": "3uAXWFwaPgtrn1pRaV2A5WCg3hkKrCirpxLhK3r9TN6saT62ncSa1oXb17q9ayLS8SHVS7JAnN1kQSdNFHf4J2K4",
  "key25": "61PoV1iJG8VoYMouZLo7jP4Fv5xbnyZPxsYH4kM7c5kwZx2P59xt7LDRWtkRhDh3sKzeAe3mjpLp3fUqtNZpGpa2",
  "key26": "5m9GBC5DrNqFVkSkFNtwWVTmUHpsUdBPdQjbbojRqVvCssaJj7qPgJV2mpfQb92MF1Uoa2uQvED4M6JFfUs31bjM",
  "key27": "Qv3XCY3FyQxqFPXHM2rTfcnm4Da2z8oSnn2ehgLHG6FKcTVMsNGVnJHKK8mMSdAifcuckJ6iz21CY5ezAMQVUN2",
  "key28": "5rhuogza1vny6qfZpksk7tQYp57pzq9V9iBisYehb7Xrgw1u81vJj7RJAxR56ySQvbiXhLEMGNZzGeM3NHQes31g",
  "key29": "5owPcQCYzZKCvbrS82rHVBy69erfuZJmUQW9tPRk2jRsvo88GZaraQP7qBnB3s5bFAYqpDccmosCHRGJECgQMFC3",
  "key30": "423dRKU5Eofug1othy4jpsdFmZuvRJNhnfTyxMr6uekQWRN5UQWKVjtiaQVQznQZ12QP9MXErdEVEz9DEu8TRBUA",
  "key31": "5cYW3fmkyCWzGwiwr4AcX5WxnA3bC9TnVV23gCx5qrRhjsdCH9HYZTi3Lf6cs46xkMdFmHDoWTmd3i5L823BPE9t",
  "key32": "2fMMXjWDL3Snt8eroA8zD5A2KVtSEcEgKc8wFmiwCaEyRbNezjTAeGCrifsba4grGXcDE4598BTLBqXDGEy2TobA",
  "key33": "4EBdVNdoENWpjccn7oT53QsVWPswCcXzptFurdXnXfeYCRQbTPV2Li1ii9HoYPAzpjiL75pSBe8Yx2McqBBF8yt5",
  "key34": "3J5nNAu3EhjWmC9DqV5NqUMuPuiyfAsVfy2ceXGWTVEGjrwh3thmUTeengp67jyqFko1Hez7hiGh16DcHRpN8PA5",
  "key35": "3NsZAuuQAJGnUkHjafbPr5oQnfzXac1KUVuxyTEtZzoYVQzDcvnUmrazu6ZXudsqTmm54KPnFXkX91h6aoWmHBPM",
  "key36": "39Ue5KoNp4oUZD5fzKCEikJ7hxLyXwhUQBHBx4kqJjSq5y1NvNBpR6HxRD7QZH2FS7Ms9VzfT8sndQvQHCHFrGpL",
  "key37": "2rD8Q1Frgm6uUnDo3EYyASZb6Ak3rsmbUKwKCoWaEztP4z2sucsZ9wmCk1homNioeAfPfK4x1e6SujkEZd6jTH55",
  "key38": "3gZ8NTcEtWEoXboyWq1yEmYbkYPo6nN6U487fnvjtYRpX1PEsRy6svsyoyHg8Aad9jPWBer6ccQnazSqgVZbwTRw",
  "key39": "Uru6n9oTumijCm4DKdPhpeYG6HSuJwLYi3kpPyG4XzPLsusybQfzh3D5gNKZrpmzXS4BpuGTc1WGTrhEGA7XQiS",
  "key40": "37mnfiZbvgBLePbnx7jvX2H8VpDgtVgvPmFxMXqQZ6DmaevSiBbeKmTVSM498jPyjCwKQfb4ckRf5W1xJs3z4zGY",
  "key41": "ofBhkodauqKSorKvwZdxjGsYDj6PtfsNK5QWxZvYB8V47GQXVRVjrYMa2PpqkVcFTKaxgGQzFEosWHZD2v6xcMe"
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
