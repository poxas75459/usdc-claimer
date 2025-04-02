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
    "36J74v8a8fycNPw7YdGc4aMRdaFB7bjVe1TCpiXCnWx3zqWXTTkYGpLM2stKhRrvMaXubDfq4mXjsdu2UzJ4jJ11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x3H39GBwRPPVyT7VALiuNFa3qnEKqptcAMxX17J57CWXVAcCsk2TADWbcVCZTGzYbSL3B9nuR2Erc3tg56nF9nS",
  "key1": "2TJbqqeYaRTMjdo3YrN4U2DAF2ofbg5inz3p4H6mLTn9mmJ1hcQR9MKSpZ48SGpCnDqRzZV2s2tsbQVyYKCbWx5K",
  "key2": "5rzGWGR61VjPGdnPtMtm637NLuQLiYj6gsLnBuirSardi6qYpptXFKy1D18D6Quhg2S2TRaYtzL4FqpYwBcA1EiA",
  "key3": "3jBhLFFo9eEpcZ2nYcLuACvuEdyfhVE9He86SdaLjJ1UhftKqGAvkUdBffJN9KuJekjTaHXAEroe9WDumAScb3po",
  "key4": "4Wupyd2XWQ4kMHi1wySiGpgMvtaXWMFGcv4nPCtP9bHWF9dzXTbVHConGTvn8hzZAui98R8VEmcGrjSSErtwEHwD",
  "key5": "u3rq7ajxp7FF7UrVXMowALLuyzwGjFjGQ4pViAbFJuDp3CTpjNEn1exqdJaKi2SprGatNQtn7fz7Rna1NRMHsYa",
  "key6": "5tUPRkzeNKaW2qhX2PMtAFCqwVpQXmeFHEmuRptfhHRBEmPtPJMpNLFHBb6LUYJE2Fyf71WJownCNso4PyN6Wmyn",
  "key7": "4SJYVbLiz6QU6hmyCSPtqHtzATr4eUyyaMywDm6ok3hDz1N1AK3ALrjZ7JhACM5qxLgtYBzpH5PgNj4EkGW1eSQa",
  "key8": "5oEBqBG79jGdT3YLgi7DExo3SFpPoHLR7vQT2DAVqYt3LmirAzmH6mivvMVAJcTQ2t8Y55B5YDHprtNRRCceT8rp",
  "key9": "2PpWKsvFHfRGn3KCPppyZoV3kS25RLnTqdknon5gg6ye9Eum8RpwJNHqNVkb3Vh7T6nMYePHGuFytbok89VR92E8",
  "key10": "4to1M5iRtEpSusv9H46eSKTh5pn5dXvjphvBgH9fRd6N2fr3bago8evVTiWxfBgMRkiaPAEExRG77ZnHLCTvfAgP",
  "key11": "3LGUTLqDquWncDtMMtCFLBnwszJai5gju6KN2L1Jq2X8Sf7EA54qtsKj2PfPAUyqFNSXgTm2xy3ejxbHyJhfoQsn",
  "key12": "4EgZ4tdKtMCeVaWPUj7NBVdBWCKjdPHQtG3Bi8SWMJpiSnGBac99aufr3Rk2RNSPMUvdvC7eccWubnFzCRh54h3v",
  "key13": "KT19hVjJWYbeZvgCWKREUvguLET1rQktv3zds8PLozQkx1pStvx3BbrS2KGG1BVVixy7nxV78BYQGU5qDQnsjaG",
  "key14": "34pnvjT5WBg4KukKZ6irNhAqZeXboY4aL7V7UjiL4mYcE6a4G6gWaF3bgNJ8hopRdHZxjt2sZe9W3WSScWHopnmA",
  "key15": "5gqiGvQsBQX4xwA24RGiBt15RmZ91oBNdyVYfxmpJkKYactHk24miu47zigNPcGDG1AnDbDKRwFbxHN9yZNSTcab",
  "key16": "28J914wt4Dk93BZCNQNE1MNDW56W1Ky7zaUDjc61Mmm2feu2XJKaqbq3kXpTsK8AKPyNWmreAustNzq7uxr16BVC",
  "key17": "29FgsZnJNpSQCbrxsq8sKD6ToRFFAspgAWTccZCexrUuNJqor2AnMc8pVY8BociGdX1NspHW9rrv4xonSqaW6hTN",
  "key18": "5exxqPZ8BejDbo7iaezgwPiu9f75E3ciwwzrSfuYCUvEmLkHnBwvKB84kDRq7zCUVe1rERyfnfjHaiHeM3inG5T3",
  "key19": "Mos4wh7rHTbd13Ct8xPdZSWR6ti1jPZZ5YJ6b3uPDsZEAmjiVZG7nHHii8PfqJJs2BSAjwmCe4uY7Uv5YsiGJTK",
  "key20": "5NPzKpBpc5BrvkeCrX2DgFABQia2h7XgX4vySL4qFSoFVaEHezVZFUSZtSkSdAfaVdbTj2topXEaWZQdKvTwRzwx",
  "key21": "gVbQrDR6ee59w9be2knpgzvsQsK8KPygZYLCszeisjmdampD6NE93fj9oGNG6R9qruhB5zir2N5cQAC5ZVXk8qc",
  "key22": "4GfuZfuTBp7V7fsUdZbwANsTLwMUiWV5vKpzWLrx4REzZ6gHhguCs7MbnoCdieYXEf3PMJ9AbKRYduc7Cqr1hsRo",
  "key23": "3JsjU8X38c628k6DDtMwoq9NaTm26UhrfHt4Ukyi8GtHFerjdBM3zapqSCdQj7bSAoXkXomrCk3JbvxjEywisTb9",
  "key24": "WmoviNDGJTrZwpvYrHVedcGY3MTSaiLXqVgoinJrUrETCpaqDXYS8pwjpfZebgqYdnAvXRdARExJCYSvwieMVcM",
  "key25": "5VbChHuHc9osrd2tNBfhF1YKYrw7uScnUcjQ9taD9ZuQE9yPHyxgxYciNWFpiHgF2vJfp3HbzqK3SCskrvRUHWZa",
  "key26": "5oSnzcRr6GsWyHt5ZXUNs79pqCFqh1oy78WjZmSejy2hzQQPbAdYesCnmamTF1t4s7CobbphuwM7sjTnjMbxoaE7",
  "key27": "5JshvMGTPmmsf5UTg4GQPwLVnGhebxBhPqe4ZGs8742H51hAqthzM84epBgewbHrf9qb5mcN4XiahfczjugUYuYY",
  "key28": "HhXsyAx61hwesNNz5MHB4HujMLWuZmoyUMhaDsfg6kAjg9qgNQiLsJbrfykPmWpZDci4gNRVy6GgGsov2xY5XY2",
  "key29": "3VCsc8j83V7FZsHSJQ8gYUWpSe6JsaisHwyinVgjKQxYRcCYVBpAqtvzgvDgvFdGDm1xMAhWe14DbjRqe3wJxgM2",
  "key30": "2AtaTeWZvELaSVGikjF9Cj6TkeHQmXaaZdWKpVbiwz5MGMd5cRwu6iQN2FXaz4FsXaYwZDCRdSewHexVUVTbSFGU",
  "key31": "5fMCeLPjE8B9G7Ry7ZSooJJoYkwRprwaUR2ZRR4Jf7qAAPjFPbpzCPMuSjAKkQ9nbpqay583UWfWtdCvAidJdi8V",
  "key32": "5ZxqjZEJzLTyQj5tY3JvihmaManmKAQBU3zPyq8Ewd869w69pTMjnhCuxfoHX5XB75LAEusqK3h4LMPnHK2b234n",
  "key33": "5Wxg8zhaoPPaFvEYuR3DSS3Y4pYqh7DK8jv7egsJByrzqBGw2BZPy8BPE4rqaMEd1JGzx9riXBNBGZxgcjvmtggk",
  "key34": "362mQgeixWfHFeF6qF25Epo8hxRNBMAwo5QDMyRorDv8hsYA847MAq3ku7KTf3Gxuodug2gc1nKnxPEvePUpRWNo",
  "key35": "3MfRTt85tnFmgyTZgw5b1EVhh4JeeT8r6KWV1J4AZkiKRBdpTnYRYJvqjtEByoGAgJjHsgLe8az1xgj4k5ruidFQ",
  "key36": "28zY633Kd1xJikiGRSn45z1yP5fiyMasEmTNQL3bUJa7xjV7MZcJh5hq63YmBTcBW33Zzt7DuTC43aF93jHj4sn8",
  "key37": "38dqSsuk7wJUVyYDxBh7M9YT4HG5XNueA5WxRBmmhsoFNsw2hoKLvJAy1AzVdjT9L9HpAUL1jHnhhxEWpBfRE7Tg",
  "key38": "2MZW6aJSGmXYv5epRmK1ejpcrmrEnKJnyKdj5Vabqrtvn1KVxpCLnosADFG3qLuhRy7rtgvu59AzLyZNFJD9MfoV"
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
