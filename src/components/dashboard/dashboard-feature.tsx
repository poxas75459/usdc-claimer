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
    "x7ksZu68pxKAcupRWEiAT7uY2sxkttMg43H9EpYyYjPf2dxPDK1uivdm4TXj8Gv1B5UVDt7gXqScYNXADJPXXYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rk86Uu1UfX7zbzxRKJd7UEtdgXotLu9qdf7GV1ufVmCbyKyrzt5tAtHmadhdM8oZnQBTuLDBotkSpheKb6ooRK3",
  "key1": "pNeiGgqw7w5g7SR7MnTey7oBWbQHdyPX641hS8bCjBHmviTKS3VQ5SAmLJcNeXXeCgxtHj7KCYkjUPzA89TGn2E",
  "key2": "5ex7Qk9yKs97B8xJ2MRwAHN177k67c5kNc8gKB38Y8nNA6VRb3bZj4PtK1r6BqZdYYgVNKQ91Y6rxRGULFJABseG",
  "key3": "3rNT1jCPWXtR4uZJ1Pz1GsWadr6EpH14aJB2UARkmBXDNY2suwvwYNcJKZF1cY2Re2D9BjiXUXmTJmKFdxnhzmiy",
  "key4": "1272zzoNkJugyY3PqcdBVjKp8SgYwGsFPZnxtL8eNDEisncCt7iV8skbhBUAJBBjWeVEckiztYbmY8TBTx1feEFC",
  "key5": "PGpFuaxcqMAUp8xct8NHy63wND3tLnZJ2mpUvM8qWwfcZoVCaBNauH37Xqn49aYzXvHz77x5iUHbg3xvvhU8d3x",
  "key6": "4zvgYxcfY3dKfaJRiPf8Rp7tUFsxagNfuRPUDZzsgFTqu7tMkF5d4duq28KQVWSXYGeKxTzZ16HfyYBNN9vDJSn5",
  "key7": "4uJSfwya2Xfe8mQCN2KQw1QPhwYS6BLyZAzbqb4dQhuYU3yQTAazY2WnCVxBSfVaiSob271WgB5t12QRw3KE7m8S",
  "key8": "4BzW23cQk3d2k2qWcjDNRyGexougW4hCyVBwxCmC9i7yCERSmEvoARzXx9XD5FWkthmM2AJG397ju9XpjkLnKxre",
  "key9": "48fvPFnfcL2Q6xguWVfgv1zGNbrTcDqFuLQuT56as4r4by7zb8XtMX1GKvFXeLohwKYGskvo4pwzH1ajEpGuMrxK",
  "key10": "3uUjBeKWYH4RhyqrNa6TorcdkZq15LFq5p6N6H9L4xAbido3ffgUbFcYAT9Ae7a3F5a37jzCnkr97KfB8WBtuc7o",
  "key11": "5XJ6E5fVtcJLhDhX7tSF8tbEvt1DENFQznApTpoZzRiLAhpPR7N5cLMKFwWpggwVL9uuuUMsWV5ZhmomFAx6gxQH",
  "key12": "YaiSFMbbxKeEjC7mhu7Dy2jYXm6v5J4q9j862tJwniRrYiGrkt4FuhpKjxtRSNnySfBNdWRXKaSGXKjSJzchqNm",
  "key13": "5fpMB2GB733kPpF5K7wiPevvwbUg51FbfAtX4mYcqkTYGdtS91qmpe35okKBKpCu1VAyHnLYx9b2zrXDmjspwdcK",
  "key14": "3RVC5ufuSnhpDZvuPkyhxiu12Hn8ZV7jQHrdNijQvPfPaYFc5PhZKuFyNUAgbdHpgcNybDjLpStJe5owWN4jyZ2U",
  "key15": "5jGFhfaJoDsPivi6ShChprN7G4DdzM3mKs1g4EBK2eSGPujNKQDxa6vWeBaPf3bw82fyaDRRHLGo9Q61jNvX8FFQ",
  "key16": "3fKdfxnVt6PRFLRLbce2HnAKxzUGzbocX3FJcx74zhGiCdF1xNYzWG7UNTCA4qcd9vyyHy3NGH5cekrNpGJG8F5o",
  "key17": "33nhNHX9uWghzWvqX4azweRGwkegoJbNGLMTeobyw1gofs1ZQUkD5xwi3pqxk2YBfhxCMhy84exhvzUuxu2oGfVV",
  "key18": "5ncXoF8jnszvrUCMLsQ344n3f2stt5vaZcZrnfPB51Pd2WL17KLTSUtuRSKhuxw9aqTbPFFpfNcLciWCzibV6qDY",
  "key19": "TnttrWn9ZrpbEg9UnwMN7sp85phVn6iJfsJPjexwSRaFZg6xzCwoeJLmq7HQH1eigzT36g112CJXR5jyL7hHZn2",
  "key20": "2NQZrhAb3pVAo2eFqoz9sZ8MiaL8UqBmPVHjFLptzrpR28jD6SofVYmpYqMbJbX1AvoFkCBcw4dqAiPmp9PBexXE",
  "key21": "crLoAHWkFXhtkVDanoDc8gsMkuRG1VPLpsdN666DsHctHUi9Krrk5vg5WmvSWLYPxiqhdicz97droX8HjmJuQ4D",
  "key22": "3q7Y4F11R4U2UNrTzh1xVjei2uZ9dYdstTzCY347bby4H1m3phacS8CX2m1vUx9rJvEXVbJ6A3tkqUpsh35HMH2G",
  "key23": "5uMDdPzSZ3JaQhPM9T6XSvc7CUHkAF3x9QBKXg6j9RikoSVgzuZYKiXDNjciZ1vq4pZDtz7ioaw6Lxv4JA7PHkmR",
  "key24": "2XtJ36gR9dqYNKpEhViZteZZiNH6kdVbL5kLQm7DfyHBo46G4kPHEFoBhuE3y2ZYxnU8eHngdeuDS7B9rXXWi9oK",
  "key25": "5VjE389ryU9CNN76rMXieEFJ3dJaR1vcL7PULSAsMeFppUHQGZiArwzSsa2DMYrhDWknd3wTaw2EdhA3xnEaCzLn",
  "key26": "2rzyXc5GUTYRpXMSBBDV7wnuyUZPL9dXQKrdcydVCmiKarDNWS51SS4nzhgnnv3XmxV2gZYbyFEuo49kkZqsnYHf",
  "key27": "4JZs8oYsA1NYmGtTJhoYYErpyim97qYRsupogG6BrgTwFWTxMasR5UYyXUSxzkpFqETX6W5KXzroYrkj6YcqXNmk",
  "key28": "4KZsvwJv3FZVKwC5oucJELpvtgE82zJX8MSF76BNQEQaDp3hgChDcBzZdRAWaBTx2QLgS4FncD3Ym7ucwAVxYNKz",
  "key29": "49M8pkpG4haPRFHgwAfmVP4FP8GNuEzbFc3pUe3dMaYnCM2qnL71ZM6LQXSoWV1hep5uBfEEiPGBFcwQ9WAN4r2C",
  "key30": "21mok8KePKHsRtQZkkPQik14Y6DePw7QaA9m8FwynHdBxLjxXtnibJuERkL3v8rfQBqBfcUNEaxqWJYbFCa4mFuj",
  "key31": "4PFeVr45qKtdWTPXSPtxY1g6DE626v5DVdaHXQ2s8S9unqdmN4ih7v6GWzFPLaDCAttJx8wNuPtSrfKEJF8mD18Q",
  "key32": "2zAB3JxcmT8e9ZhGb5X75hmaRqThoszdXsTZGwXnNjF5pmbZHRUCbb3NA6L63wU1sa4gCHcmv8FCJVJn136agS27",
  "key33": "62p2f4QpXD4PuEnAgbJ27oEKj3UgmeZwCKGtaC9xqpPNjrspzcbDuhdfTmakX2p9srCFCVyBD3LmqScVMaRKQmTs",
  "key34": "2EB2miUj3wvsShSeauD5tg1rstAPbvjFWXW8wWBu2ezJzAScV3D2vQZyAva72T9u5G2RAvFjqkCrgnvAKuMXUybn",
  "key35": "4DF1cYwZ8AtM3vmtT45XLiBRnJC7UJxafcayiFMqZZpxxzgaVWTQNumg1fe6S33owDGU8svzNDKfvjQv9tXExoJo",
  "key36": "3Da4BeSzfK4REDoKiPwkWWQWDNLv8M1LnpQqdTZL3yziRR6whkXWVZJ2vyktucyedGmLUZV1ymci4FrfqCHx4pEt",
  "key37": "3a5gZ3TfCPzsaLxW9vf1KSxwEaWqjDq5HTTq4CwS22uesbLN2Gh9AYsyoMfV7a7JyhAgN2UQEmKnLq6dw51n7nXo",
  "key38": "4zsVErahbc33vU87cA9QnfpEpH4w4RtMirTTQ2PdTvJhyhg6FUvJ78PuJ5QSqspA8JGMVcUp1r91emUvXqiRvcXi",
  "key39": "hSWdDdtgaKo3wKhE8144N8uUrG8SohyQnsm6ZC28uwcf5hL3GbPjaPVYNkt95Vimsf4phEaY1PzpDDiGG9qjz27",
  "key40": "2JnnVufaoujwJ5GfjwCSRFYcPu6HcSyMCrF4sTy2U3KAGGdcXof6i2mzQUmAjQmd9MaxdbhyYsed7ZfWM5EVUpvV",
  "key41": "V2b2YRBRumoWDEPtyj77vwmRYbv68LG4MrwCtoBG2JeVg6MB8myVbAd9g8xqca1sdtHrz5mTYiGxkLowJNtfL6z",
  "key42": "3xLmEeGBrGeY9MaujmQh5uRwx1LBf7CzRfLgUgmsqLnLak71kEhH7VDgHHtQgn6L2754MEt9TWeLPn8QSSDwReTb"
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
