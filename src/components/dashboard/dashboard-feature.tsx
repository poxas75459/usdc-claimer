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
    "3qfPYCY6rCWbf3ehTevPrnrWd2R6CuVkNZBwVnVYgk4CvoGNhhVknWHGmu8FMHXR9EVFZo3RaaQpoXjcB8SFXkWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37TYmSAbAtmWJYJEjR1bBhdyieRptgd7Fm4PDDfvRnhUzxTSAdhPBxACkcuE1mrZuxUtrJzuymM1GWjuAGE5xBFU",
  "key1": "EYqb8bZNukUCer9BqH2LXuyScJqJXqQPWRySquG1xTWYB8tz1k1MuETiov2KKZKGCEVMUbszqowRuS5W7fk1vCV",
  "key2": "Nbn7ubEYfwmpY5fZHiGPpUtNbXywc9zm66drr3mwT4c6qKoJc4uCZWh4sYZJvyJgRX6x9cte3E4Ut3cRce3MAmf",
  "key3": "o8EUH3PoTb9LRHMZhmoxD9AMjEek1RC9GqAzgefRDY5VwZGJHu9yD5DncjHNX8FFvDg241Fy7gnP1q98f7yg3s9",
  "key4": "3KmuQKJhRRC3FcQVt2QkERrFB1LssKhd7CfY6QsabTybEv6GRRarroUB1EJGk2vfMhDuR8zgfbXQ5kY5YhJadzPv",
  "key5": "5U2WhjW2XmphTyNuuMB8VwSo6EuFYmoyUhci2FHnD61bRMHQsxi3bNeFevjNRoKuEZEKmiYafPWbURfYDHCGF9Df",
  "key6": "5xfHTGY9iLZpDyrNASjquqSQ6LSqtgqRNYCq7otKiEHFSKK8fxL83VjmrsnJCLmW9gigvkH8XyHZbUy5AtR1KBDf",
  "key7": "3bNiHCUzGUZMSYfxspQoxwbKs6xNtb3ByWc37VLrTceJ3QKLATJgw2m1zx1FQ3sU9JULvzxgYeTEsZDqHqWTUVYY",
  "key8": "5X42YD6vFsbyfRzRmo9qKRWJj57k2jA7Wom2Z82sNMy8pFmfe76CvF17p6AKSLuYn35DH7ai2ZjDzVioqdenhNxE",
  "key9": "2fpuMe26533og8NUhKek5ph66NrqjpBWqBdhGn7XtPRVLteTcwj9mZkrv87vb44tE4hwUUCeUoZjzL84FoW8Cps9",
  "key10": "2QTi1THazKRcG4MPK9h71VegJS3R9eo26fLJsftpCciYz4HZoLkQ75GLSBERe2dPuaxQr8ePrWo9Ry753JV3rn4d",
  "key11": "2RR9nQ6ikUzZ1ZHfwpEL45zqJ8FFchgaJVHMCDVRUpSpAZ1Vj3Jn6zCmaGjjpzdg9oHNhfWdAdyxA8aiPz1GyGwh",
  "key12": "CAxzEsdXVLNXYnn3gt2yXweMAnkUUpAnM2CK7PzBpUMHZ73Kyqsbtgazftrd4t6w1nSPqvi1MbxTumU7zNbvBzg",
  "key13": "RaZmZsMSXrwttvYRxEtqSvRgxKX7g6A3cFqknEwWMzt1zgwoxxyM697t6Qi1UNx1R2EjB72ApbpJFzaoHnWPTLc",
  "key14": "2xuxshqPEdYDAbNCwpz8aZ3JY3SjApPhhoiF2fVWGmkcQaRfDQpSga3WSrrx2SLNwoLE5ekLegP8Z9m9NjKz8SiR",
  "key15": "5FbfHQkvjbdL3ZuphqcPPSQbk2Y4VJyJFoxTos3Uz5UP9fZvjxV23eFpdTKBTnNT1uMv8dxnyfEPxm4QV3xASpzQ",
  "key16": "4jC2bkaKeoyirdWGeey1iMNeWTuDHVcnVTTbfMjnePBZJYq4MyKvvinBQGvdsLm4kKCqxciKvM95DufzVNvF7ByX",
  "key17": "4F7yRRJXh6BLZwvHChkQXM16BA2jjCdXpsJFUSBmsjiAt757zBUQncQECuJVdR1FcWAphywZAWZefWdwPtQ7X72R",
  "key18": "46Dg9Vqg7skoWA9LxaSuKGkEGaQF5inyDZ5F6W6ydAaRJ6zNDzwDxKqYVNf8Pj1AkPHxeGqRhNSB592aZTeBoUXw",
  "key19": "4EU6tmynmVX7FgiP1xcfsXGzhYJcDcLDLznZQU583Say6PnoJfK2AsGwaFPjpqQe4hfnFbaf84HRJ6xL86zauTDS",
  "key20": "49UTV8WmsJZ7VZjbqv5w7LidP5y5eQnimmpD6Z1YtmvUZuCcvSaWBkMt1QDa23jn2Yh8QbLwYMQy3cJa94WhiRAy",
  "key21": "3eJWeB3pAd9zC86Ytfsi4iLDswtLpjFUypJNpGfMH2n6UR4VwLJXULnxXh5BkbF173uxgX8WDbuxCzLMQTueFTsc",
  "key22": "3iJvaY2zRoitQbuwk5RPESrL97HF5fCxpxtB5EZRjojsGzsux1Dk7wAcSwKTVhPUjHZyn38GVbFCcNrdGQti1vMa",
  "key23": "4kCNZQYPrd6j2jij1v347CP2kopV1VoQ3aBsB1zcuC5TS3W2JXAe2eG4xRkiUGwQrTAhh5v7zTMpcDNanYgeFUhW",
  "key24": "xiCL4sEZHit2S1JPGGVmi5ujhHzWud2pR8wR7Ly8JH5EPSdzLa7M7S1kLmjSTjKwtiGgKREFPN9FpVSsh1RkYKj",
  "key25": "xerzbVmLjqBRnb9YcwxsQAoMDHqPKeJsbJMh889ffUbp3XuJfLuAwGToE4UQo4gb7t12NLSaLuNQXs1omqKCoCm",
  "key26": "5HJJ9sq1QYsJMK8mjT2zXmBh1xxTynfmqLNn2RH65zCrv6p241D8NB9NshnQjmdmNreP6FTSoqwwcWqN8pb7H355",
  "key27": "2tHSsPKvZMzt8xe3zXUnPNy2pdqD5Ku7UkbKkEXhzDNooJYroxDUujrc8JhHKZNPko8SaVGLRrH5NT2er6mGJpYD",
  "key28": "5v3p9AuPhbmfYtdHr6LfN2TW4VBfPckdtpja48MbR8r6FH9Pbq2ccvoxXyG3b6kwEKUxtzqCDCjoyAuWM8Ac6Zzt",
  "key29": "2djJB3qnQoGD5Vwdji5qFbbgyrJuX9ZXqXgKZNbLoT5tdCG7LtvnU1LyRcGar7Hh1zh3iygS9XgktK6V9DLkjsTS",
  "key30": "4rSfNPm7h8DRwimeNtEKUWYFx9uM4u3mfhyskN8a9U7gyv5tDCdBM3NnatimdGgMbe2bp1S7Qof4b22Ryp5VpTTB",
  "key31": "3GPcYmjWp4hxPD4W36vbaY73mJG79H9uL1e7ek6Wi6XLWdv2RzyAc7X2v3cR32M3PLXDUrWAzLxj12Esdd65fWv7",
  "key32": "3qxfewz9RVhs5etNsMQ8GMWBGPJCBYPru6HTQBn2hoXo86gjpnJhqeRZEkEZHcsXAB9ATasieDL6s7an3qi9j9Px",
  "key33": "2ZD1zVNGXXJVPFC6YBQ1MCfMcUU8cu6bQzBvMooP6ZtJGPB8K2JJMfjNkPquh9ALexoTjKgTs4P8UN4dKiY1xWB8",
  "key34": "2Z3pgMPeaHx99nAuEEXvPAnjbX8LDGq3BMtSmqA7YoASYZWsnFPz5kSALAXror1KeEzhNEXEBoCfPqypToBztvo",
  "key35": "cE6d6YFi9Han4meg9c6sttBhydQEhd9mM2Py9tr7uhovr77KyBLWDd3DgKLqhFiiGc1wMGG7tLTqtvNhmEnuDu3",
  "key36": "4KN7tqr17V81Xk64NFZ5DqjDJj3v4M5sJ5aqSnFkkv8FrLiDbi9KtXjqyXqpYyogdXyKPp9YYiKmycv2SPXBS1yL",
  "key37": "Hm2X35uxLzGz8ocHbnb2uUYEmBeacDn6qc6rjRkKm2G6K9pu4VyHushBmosm6tmSegJS4JTQM6peeTJiH1vSxth",
  "key38": "kbG1f6nogRMjZy3u97G3SdBRX5SzoGraj61GAoUMw66RRXgiYe9ToFPwcNPyuBQTdwYX4RufUiA48vPeKZiLhyH",
  "key39": "4QogZMoH2jnzYJmoipJXwwdygCapUvHHSm2EGEwa8gTK436pd37bxgpxNnh1cBkN84fL4S848dDCExT3rdVEpr7q",
  "key40": "H8Wc2cVYnHGGzMsvSUtTjSuZijNSjXyVSoAMnFVHRJxJAy35ui3Ww1NMxiyedfESrZszCZmSDjzp76wW7L9WJsr",
  "key41": "4jwhChrEcncoZMx8qUrr3Ttzx5edbuJBp8ty1uTsxngcQJLHwEn9aZ3uGYv8XJJctpqLy15m2YvhC634vAtsWRsM",
  "key42": "2fEBEPhu6CXcBLs7QCj6h82AMKDcgAmkicBnq2rJD49EZT81pxymX7ksdcHYA9dw9zM2RTN9dJaBztx9AFWhK3mu",
  "key43": "4pq1ihehsqXvZkxjMdx1z7xPcdJZgaP3S5oVmnFZU9W34hzYEdxmnewynQ22GSeFj4G3NaW34TH9W1wdkQgTUsgw",
  "key44": "FJArWkz6nvQsepkjoXPNRB1G3Ej1LzwovhYWusFgPmqjsxB4SF2XSFbyAvZmqwAYqw3vzibSnvRY98NLBVxXgVh",
  "key45": "5GEknJYvdM5raeT5JNFdXA8Ux4a3DvucsmnL2wcH53FwnKgENnh2iekwBpRYwbSeiA4vL1EDUTdMpmzh2tcM3gt4",
  "key46": "fAamqq1fwM7c47J76NdtYXpXCVaTSmrtqMvJ8AUo3iesc3CVFEKZ558NPSyjkYegzk23w5f82X65DfWWrc6ckic"
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
