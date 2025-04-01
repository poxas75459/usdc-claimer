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
    "2o1qkndG8vrUzsaGvp6bTeNXhuz5yaoQZWCauMDSkZ44D22fw13MPM194ZijK5UTAFkGqH3a7yLCcLTR9acQ7dxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZkvbGcRBGr2kVNWH6FbGh29Sp7F4oX9Fdy4CUrCmTydJJrEKRoxUbdL5DRdhn6oKExGwP1hWKYkuJsBsRkQfH8d",
  "key1": "37tbgNhL1SeuQY94W6yt99GbpCfRjpXJ5RkP8aFbzvxAheXujWcxqnyhoYAhFap6hWaBRxdtCv2Qq2X6jLt3XPh9",
  "key2": "2XJiY9sNWFWr5PwYTY2wN8ANsmVPnzh5ZFa6Esv5t5aXMBxRQb9sDkhxGuLTxtbs8chJubjLrRnUr21X9v7nsPdM",
  "key3": "2Vs9aPyphxUxpxrqrthJjSPqDYkfNnGzP18XSye5g3hg8gDG28EXEyZHKiPRZ5ag55DqXAkV6tVHeNvrGMuZS6AD",
  "key4": "2vK4Dk1ybfwwGcdxa4e7WevMUKkearkswa8XUTqxLV7vstfRHd2JXybBbL94sdhad7P4VU7crsrkJ4uDptqwnW7u",
  "key5": "4UXSgz9ePBjZTD8ACzFdL6w2KGaX82uoEbD2XC7bB5ZoL2xnD46Vj5G4sMYhGiSSTyca4kw7TGE1k35nmNrwjgt6",
  "key6": "3XQJfbsW9XhxBavF1BemUBDLDb1v8jiBDek9atBr3ZLoRuPPLLdA55MpUncFpLZ6rjy5xPJ513cFfa9VSGsz2VXM",
  "key7": "4tVAkUxQU6U8Yi1G6MzUcCiT9tejSdrbziTfPX5hCgcmoTmqanjzQiZQNxgSNi41s9voopTZK7xfGNGzkX8MzTE6",
  "key8": "124F16qT2bJwYNJhpKpuczq2a7UVwmED5VAsxbLgjckLP6fqZiJBvNXvnVF51HneVefJeHwrXXUuak1dLwVxAadf",
  "key9": "5oXx6qEJBQAKyqFo8EJERJjDG9SMA2JSF14hV951NYp1uXgErK33UVxB9LuD7QN3XfDawyKdRpzXQ4UnA8LUmmA",
  "key10": "2BLrBFTjBAwpGHtsuXd4WGHhdPfTqzxiGjxBgi21ih3mrB9V855heoXtjTKewfUZ2XxGJUq3HjNnMAFwoRvX4SHD",
  "key11": "3Q1EK9ruuHnPNymJgiumq1GnVZvWxmSEC5hr8rF4VeJP6QJqXc5MwheP7qY2RghGKaMsnzxFgNmtPtSqvBivy7Ao",
  "key12": "57FE6R5JWJQstWrzWdmA3Vcp96ggrbwEFp2juqNwSwW8VSx5Wm84xRArHxBaQUYTgqpjpTazy6MwjdoymK9oMUjJ",
  "key13": "3534r5o6YNQzGB8T8LM8y1WU5WtKtTqsHFmP5EsLDLR88aWfoBb5TLmvY2ebkypdiXJaUizosDrogKXDKTq7Rkzm",
  "key14": "62LSHPabDwonVDeoBcpuhYW9yhSs271wnS5RtFVVzQVRG1BvyxuzN56DTCW6mdLieQG7m6fUMsoPm8QgboYH1kSG",
  "key15": "3CsyuFJGf3PoDGKWQVtuvomCAknxrLTU8t5RihV1pULogLJwa78R3jrFd1hHMAPSZ1KFLAAGvvdQjq24zcVmuRB",
  "key16": "2UupqH9nJ47EVVbUkisrRLqJAxXJa3FCrDGFKuRjcay4bp6KrZywwpD68yQ1LUyozztvvQgDHiT6JCVqdVAcgTqm",
  "key17": "4vh4DNvUcsrVFA5MiTaW9Dytv8FS1zneANo1DKxXDJwbbxHFRpx3VzATQCMRgBQbk9ZJsgXDH9Yd8CmKMuqhDr4U",
  "key18": "41dCGUfv3KvkfwyNMS7mwtCP4SsYWvtVg3KtnUMGxsqNXTbQptinyChqfiGdVVSS2TFUesCDJkrKjoTyoFg3oFAU",
  "key19": "UwRTN2CkC3Mgot8Ydtn1cWKGpefMDKiPag6PzDz8VqZ9XYg7jqvtt4GPnzp2AcqJFz7Xv9dN3ttNCE3a8ZAQLqn",
  "key20": "55hiJw61uSemLzEDtnwiLh1P3DNmfr8aZxnSNuN5Nfm8k6q4kK98cBjc99nE75AZNriX9TDYmZFuV4RJvdrH7TBo",
  "key21": "4pC5T9XwvF2ZHQp4EbmepZ9r78Jyt7MLcBMqDdJJCdjGocLn6RvxQuan6zuJYZ9euohHbxcXZ7NeZoukg2mckGaA",
  "key22": "dzaQkhQxWKyyGmy3DSc2R3k8uzHWK7Zqke6wZ3UmBAg6umBD9eDadz3uQfxxeRKJqQyN5FAE2f5B27zwsxWsbWz",
  "key23": "3ph5RFA2AY2bYoZAXCV6UxrXgNk5iiu1PEZoXMLxNdx7N3JvermbRZtdyz667ypVjBPnHgRC5ueCNV3kJPKbj2py",
  "key24": "ogAZkLkCAXV5EcuscyRHSNk9nxfs8aFpxUkkN4rA446AwvGQaMMXcSWr9k4Jd56Lshmwd3kumMB4AfYWm33SEgp",
  "key25": "4xvL8n1G2A6RcPV1QAJb2BZhZCmKaECyNmquicdMz7zrA14WpH9sgReQFTfMb1XpEr4HWAA7w6d66ZwucwjAVpBG",
  "key26": "3jJ8FWWiEePeDoQfx8ZkUhNFFrJ4fVupB3uYouSEkaM94D6qUTsBMbYU4m86LMtYGCTc1EBaww9mzXWvLE19ZUsj",
  "key27": "xQ6TGAiYB2jHH9Wkb7jFEP7waXBswAuUx2Pf1GhS6Pn36Bbr1tN3kzVf7N6jCe5gqNpJBu4hZavP6r6ripEtZDL",
  "key28": "28dUJQX8oVdGfDoDikku8op38V62eTKqLEs6aaExBLDhSogHSVu1fiurgrQV5adRHwfz59aHzZHWPBG6M9HzT42L",
  "key29": "2N1tQVj5oKWKHvf4xWeExpGdTnUTq3EtDPXMJDmjgEBWDUDKpTucECx1uVWLijAfUQidH2h9FJsjfUtT2enxoD1z",
  "key30": "3RZvg848FrhwNxybRfHdCXANtZQRDyMeb4CPxwR74UBfEyX2R2tsBAif1pTAWM3V6zwDiWj4RPD2rjfjpe5HPwu2",
  "key31": "5VEKKB7NgUVAPghj1fLyzNpugsizcp7qyAYju4EW2B7bqST4zKcbD72RgPz8f1ZP2P7M7mhC5YbZAXBVQaZEiZ98",
  "key32": "67BeVgUHSL4r7JvKvHn4HzRqhvmVVDjHpJMccRz5tAAYkCcoSfQRpNNuAN2YFJusBZt28cn27iJGNcA3xqthFrxe",
  "key33": "3duGqCPziG3kz4oYboxXdhYqeqPwCenTcvbxB412wVsDxUSNGKVqaWgjPFoW9wkr47k4wYQ1i6NQDNHr324DM9hy",
  "key34": "4i5fDriWXBk7QVkiP1fVadxEBa8YLh4iUfkeWjADZcWuVJxgg9JzGyKszfqyTscFGnWzx9pLaqRxqZNUuGfi5AL1",
  "key35": "5NhLrQuzXjvH9wyjLyHqXsjovU6heSS5ef5WzLniD9TxF4HcLWwLokouvWTvVuzjnbg6Q7WegeyJ16cQvGMqQx5k",
  "key36": "ZWZUj6wF7Un7wuRsRME6dZ25iHW6ec9irT21VuqUhQZXSvbU4ZFXKGdjhWuoeQ4cLpQgaNSbRuDELVrJeZwi97T",
  "key37": "3fP4LYsbWchRYGpMmPvEim7M7sdoCBhjaUXztGkDofCfr4XYiWzpKAH2Kyhg7tPQn5dhP3xj6Wn8w69uascmLh1f",
  "key38": "5BQBLxfJmhiLwqKmR8iaD5S2dV877FHfzANqpBzFKZi5LJq26M5S9jwQRwWLVHkAF6PaZnvb9bapz7CGaoQwYNrR",
  "key39": "5QMUxiQXjyQvogcSMxh1pVXbos4Ha2SLSjPTJ6tRNi22Zer2CjduZ3pErLChQmnf3nU1Z9y4wiKoNX7S1GQdV3mK",
  "key40": "22uE7McKW6cfRMRjr9PJtwxMPAXu4hQ37xFToU4hDbWBWbkiXJwNXnZrWHsrSLjQ2yT7Yf2sTrNh2symyHodySZM",
  "key41": "3bs85eHAYaNoQQFPhihTxWeg6DJW8BBrvxaDtPRov4NJmcdqP6kMU4Ry1QX9vXXjcDpxGKoaE53ogc4x2UbNPnQT",
  "key42": "5ivTnXnTBfVrCDbC71ULjKMQE5kP3kecGh1cMSLYJ4AwNnD1BByR64wYHaJD8Xiu6bdejj5tDxzD2JB33eahyevN"
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
