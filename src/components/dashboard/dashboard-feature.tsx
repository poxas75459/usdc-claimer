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
    "4oHnMxyyH4EcAfvxwAWq6MsanWjUsdK8oVfaAtWuCXA6tAsfqbAuQRd8GpDos8Vj9wTbqS2tTFFsgtS1BYoUT4Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jfXnrRXDac6pgdpydgHGqU8BhDU7nksFSZD4MRxeLuK9BYKyU64MvqVPC2hoDsnVKkXSdf7NsnG6hSAbvPLwe9R",
  "key1": "nZFx7S6nZugtiYcKytdZk6DXSeaz9Bs9Cfx1GvyJDVt5pphdnXYVnqTzjAByVXwKqTjEkBKFRcKd268bybD891U",
  "key2": "5xTWJpvVppupksqqLzvTCFNEGUVi1aoRVppFinNdkcE9bRRt74L31i5ZXx44qSN7aFZiEkgBdjdVRbm3gGfX3CyS",
  "key3": "46WdW1Qv8DQzBKFb5xwcXpqDadsSSLsgDQN7kiPv1vJwXAyjckRAD7ypSPG9f2u45htUVww1u8t9uVyiydwbrb6M",
  "key4": "5sN4T4fMwfi5b9eK7JtVNhpH2n98W61otpsPYNbitfhk2uHcawkLjuGgFVtAZjUDLkjdbNDg2C2oNN45FbBVp7PG",
  "key5": "5ieK2UNYXMH2epe4Ur4eoVd2XFwodC5SDoezPMonUdF2Bc12yHFXAbhBrU2PTmsdgrWA5ZLPcsX8z1h3sodz4oxW",
  "key6": "W5vJiS5TetxGVZhdLqEuGV28UNZ7su1VguXNNJJy6fZGZ76vUyhNBe1iZk3KKHC6Jyqb8M2tAvSyD8ouRBRJYbV",
  "key7": "3agjDssm1qs7r39jY4DvjBYEKarme9yFK9akyfL86rtpvPkyei248hF8n4CHWoGnnTRnf1TaLzjwgq2rbprfgudJ",
  "key8": "Xx8zb5D4yMoQy4QVKmv4g94PQy9Hf8otbc9me9GQuwetrpxcFXCvS2QvvzdfgkRPygQXKhhNdWbCwQBKKYtybsS",
  "key9": "2tKhDp4rGbLF8Yhi8XXYP942H1eaaRUHrUvtF8iFSyr7o4Z7cL72BfseMH1Y7w8GV7nwWLcXumu87TUtqaN121NZ",
  "key10": "4SvV82nDHrxTqLKJT4rmz4XrGGNrQubpPcHcbjWmf3cqUvefhxb4DjgNS11WM9tGPeNhnMzctwXNAd4voLTwzHXa",
  "key11": "tD9KsLnRGXDZHT2DS3boyBYaYLbVnxvf4cxMSEjJtqGsU9vB1ZBpeD7JbZWdMCq8NyVEVqA74rP4W6PMKKJzYz4",
  "key12": "2mvmxL3mNeFQSYLjd7yP3G8ouxL5RFy8zMz3UivENTDxjRzTiCqWumFHjvXDXcH8KWJpEppMJTN625FxGBc7ot5z",
  "key13": "5wkKScdCNS5VAyZpDGhvqBJMT1tU4hVhYvY5KgmKgrnzDRDuDA2R5WiSexcDg3ZwC4ccvymvceUw9hNdnkoG3KQV",
  "key14": "5dx61BpUXsoUBhvGDm8Yg2ApjrzG5GVTXcCGsj2QF72y3PaVofELu8MDWtgJqthUfYL1RnXKMVbhVGD76oYWKC46",
  "key15": "3n5XHsZdaLKREU7Tmjn5endiA37pp5VtorKsq5SG9NbYkeD5s62KogrMdrJR9iprkQCPk6vWfBTxDv9JM5S9pRui",
  "key16": "2XjJJJFUH2RTz6fdWNUMYQUgsGvH5n68oaddea5nRHSHNvXsCfZ8YT2UWyPf1CoBvuvnw9RXDDt8VqcDbCfrUkFe",
  "key17": "5UXdtGNVwMf9Js6A6CbJJ3oj6Xn4JfoavhQEkkFeQhXc5YepH9JNEPfzNqsEjkxcjX5GkTiTsPUYpHw6qi2HTGac",
  "key18": "5JxVZqcJmo6noqoC8gvtttSM6mQv46VBuksUGiUPqhcFCAarfjVUZaB2we8h6VCCPXZJPVNqAGfyuuR1NRvSaHRK",
  "key19": "5oJiJcifSd6GBcG6go4G8wovshFz9UnGnpisrV9wwNqPsfqt2UdSjx3JFWSUXdvUBDzeiAm1PErEqcoRxEZSGaQr",
  "key20": "2Ryucc2J13mSqmqRLxHm6K9XSXdVFSSRTKke6wGRC5iEbD1T9ZyXDc8HSn9jTmppXH4FiE2rTnpabUT6r1C9hHm6",
  "key21": "yBBHnNB4veJVspfbyzTKJeStbHBhbhoxcnNKFn4RHDKBAD3BcYfeT7cM5rG7WD3RUbh9pvUanV9nHgZnFd1f3fg",
  "key22": "34hdefVTuWi1RHrnxmS3Qk1Wh1czGeRdbhuC6UnhAh5MMNJwUMMS7R6H7n4Gjo6HmZbgWof89nBZE9UcDFdAerpX",
  "key23": "neA7WNd8WubxD2BRwxqmZMP67uAeUtwGzyHUm97oJxzZ4LPWqCkKQLsN7tDcDjppM5AstnSMMfXf9ogV6NKXx57",
  "key24": "2158rb4N8f1ZD1MVfnr4qo1Von4xeQyp4Bjjq4aLZGhCZiAReZRut4UuP1FCiWEG5E3Dbk86C4nebR35ttppkdFK",
  "key25": "4F36dpHbcz5ECppdNQHdW8h5Ht7CaKAZb3QjqoXijVTQkHhZGSpDfzBNKFypZJeod6tuj91oW6EHZfbQFZN8j5Sf",
  "key26": "2u9qK9atVx3bao8yT3S33BARBRQ3rEkhF7jyiKqDdVi7td1YtQDysFBug9oyN5R4A4bNCMSTBB9qaxUA9kwP4mQL",
  "key27": "59mxNSFi4hdN4RF17AGUMJxHHzcsrCpxbcrSm5UXuDmszRbkwTheacVVXMswgcgU2waZEoXUjq5GpucXtgUVKrg5",
  "key28": "4htLemkTbFKVSvYtBxnvC5ZczEZBZ1cQSRo92H3vUv6w7ZV7woxUzZYY58RJs7oZHYayhpqaTTWBv6xkEYwm7Hbp",
  "key29": "3eRHHjMFpX3vK72hhoG5XzLen5JyzTMxzV7fpWAWfwQxEvJMbCmAm9hViynL2gvmfAqDtsiEDz6PNiPnYjUyPq2k",
  "key30": "s5tF6QvW3pSujmnh7iFVvYPHDm12whaaXefRaKGTW9yvM36Rdv3dqNAdMyvqP5RXZLdHkt5cbB2R1rNJ6nhjRio",
  "key31": "5edC4SLjKztnspTMgEjFyA6AxPEf6jmHgCYKk6DsAADDxkbYcKfC8d1t5GAtUqae94sb59PU33JP8vFRGYqcGadL",
  "key32": "4vRaXzNQJh9vsse4zUY1SABApK6Zo46a2JgXG6uUieaUErmMkg2jekxFfxXvMs3VhGgcUwwmsbKuBLq6x3LcCstU",
  "key33": "3bM59D8tEALwgjzc166xzPYYuk2RgDLPFWEyH2xqckMtVL6gQ27psJjAp2cdDHukpmCHmscL7dc51Hv8JgG6rRzo",
  "key34": "5vSAbAg41CaUHFPbsQG3Er172j4GtqzyAt9CPFSphyfLLG11oJLG8aFrPyaB7deM8utBVjiUE3oYRuURrL9S5wzx",
  "key35": "3zsoHtNxsKmJhuPZCd1ugVvFwTnVYHnggynye4trvmN5YcX1CRTg4FtUoVYipJndG7CgqVsh7ogKqMPYG1T2tEht",
  "key36": "5pCBHG7sudMKdq2RnA7N994V4kGGGxQJtWyqYNUCr6kPZCd2XgnTXRmYmWao7QL6n2ABzCxB5HtXmZN9iQyeFFsw",
  "key37": "2BWXfFUuHcAGuPSt5xu2TaFDMLCZcPabnZqqKAT2izAijtr4Nh4cpLj9dUbscZ7deGm7VxgSGavR6bc4aKaUfY3w",
  "key38": "4ELFXJgyRNQ2SwAbeEPk2pEGd4f81RVRh8QaEy4MnsLF23ZckwSbSCHVesedrozLrPh9rnD9deQFdv6VcifRqmsu",
  "key39": "3sTcEDrQWpVUiVH7UJnuR3UueDR6yzcytbnCojq9xpHDHKVr7iweEcBGoEqLFhG51ShUg3vZ7diEWRPnbTrhBksb",
  "key40": "62hjr9drRaxgiGNeUzbZmbcFk7FUP1jg9qSkabKv7T6ebDzgNqnGJwj67pZYAdpvKda5M8F1jWMTUtjX1kvgRxxY",
  "key41": "3acDKuMdJaTiuHkFY9DrwAY2NeheJ8kDokhY7Hg6BK6fwcP7eugP25aLFTakNeNu51EMvDUdoBixNiABRUad1G8",
  "key42": "49eRTqmpgjQCqsbSHr7stkg5Ut5PaRSKGcFUEUUrxVSdY2i8RudpRTqragX3MHDHvcuPTe3yauhG1rGwLS2Ythim",
  "key43": "5Dp9im8iXkiTjZsbkTRyL3sETctbUhfhe9chwAbqqPXugZKNHEZSexhK2MMDsAXnPsQLPe5tzHMqsoojeMVpLuj5",
  "key44": "vGpxpviaPUzGFnUdVuai4r9FqR2QQDAtxLRqu3MagoVfrYeVmZdqrCpNTmi5T2YVEuzWGRJe1uFoaFyGsCJra1c",
  "key45": "3q4ZZ63gHgHD7aAyEMQCKeNWRFDjDHrAUAmpn8aiGQ3vFTvBcLCXrigF9c8RPhpw1yndTNWyvH9ffm1fZV7GwDzK"
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
