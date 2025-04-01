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
    "qPJDun4zb2q3PT2Gy6aLtmY4bTs8bFvLr9VzAVUUp53tk8UvfY15LH1oNTVbfBAp16xwRwmwgXwTDyXo4vmuLUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uimaAGwJtc8tepgMx2wEjgxdepiiYqFXryuKS1JAj1BKGGCt5y4VBgVT4D3PsZwLxrkfhYW3gCoqJCZjLvFdoQv",
  "key1": "4zz5q2vqc7oc8JLik12Z2gRPxkeMkyKoJYujZzbNYvx5AoCBXpMy9m2rhkMUhW32gsZfdTxdEESpD5fJzkN13rJy",
  "key2": "E9neshMbnYkdYHE5BryL3HGiGznxPrXUGriBuHUP4iHvTSCJrKqxburvnuPKvW3pSKb1FYCGrfmWuWdZ6BHw6Fk",
  "key3": "5M3SdmtjBYuLqodVWF9eMK24oiJyRwhpxm7Uv2JMHn6QsbBUWRUnaDRmGd2M9UYHRAP8HANuCHtPGhmhJXEc5b2k",
  "key4": "3ZygHha4TUPbLpGdWJMGYTFBEf5RyQU4KiHutfLnvyydX3LsVAmjrZvmWRQiwPMxQvRu5ao8SYktd7YwaRsNrn3z",
  "key5": "2rjKiZHiFeeYamKQGT1tgtY6fUHqkWExmRusmQUKuMfNwBm22Lzmu4FFghJNQ17xJsep7j2iQ9FbUL8B2jPvUv9o",
  "key6": "MsUPRCrZF1gCYVZYqDJYaMXh2eQ4AuryFvFzADB8aCbYQUnLM6JUHKhtpWCh6zK9e6hggR3VM4a8moCWmQ6hYcS",
  "key7": "2gZcXYuJAgDaVc9CFxZgxjATFmCnJ6iZ5MQrgggZ6E5Rd7j6nvb37dbSeurSFnsGZ3BNMTAtQktHrxCMfno7WsnV",
  "key8": "2qmHegYyEnbsvqynwvciNqMqE7sxU9AaWD8T2NBd4vKYSvSYUAXYXAuJa1uj31dQbjppcBh2Zo2v9aWo949x8F1h",
  "key9": "4eQKXWNB7e4B5sVu6w3PbaJEPtnUM3pGWJxNL9fnb44e23c8RUpvpNGRKNU53DueK9hatskk2R5BDLy5fFSfNsHP",
  "key10": "5JQ266joRN5MZCKBKdBnWducBDuLCc4ssbJ3ekVdjtTDrM96bWXr2dC3vL7nCzacwoa8mYK1gqQ4Ysq8zATCccHJ",
  "key11": "5EkEKLPUWC6xqQAsNzHNRqT2WFoayayxWrWcjBxh4rqdCW1bx1f5uk6Y76akodsLf1u1CvmGxDdAMoKP27qG3ExR",
  "key12": "4buytsLR78WjXmkoHsK9ijGZ2nZ55hSf5UQG5R7z2HMeUZTK6RwofjiZdVvBUMMWxAJEQ1XSGkqMqX9TYGn91any",
  "key13": "DhjrmZUVPukfJK5WWAHcCmPr2Mwb8XWD4psTQGJjuryPtatj9BzeW4Mc5VcVoESC5yC3e8kbspoAxRYZd3d89XD",
  "key14": "3N1VyagzXYs3yd3gjCiYEpVqu38jDLP3c7bjbZ8vwu1SSdSMC6jJLF1p3Ekq2mEuB1y767s8oSvXxNYrvakGHdNt",
  "key15": "4naL1jo7bHdw9i3XxGbjCNCZK78nFtw7xrYAVC7hzzvHxV8EJ6aD9ZM1MJuV3iwpRG3wUCjHU4gHGrAj9jhnTGZa",
  "key16": "2YMaaGkFHMhoFoswBPBACyKixHN8TFiJEZSQHtJirfK2Q1zJSgTN5TdYZqvkrmddw7bSrUtnV9BiyLzJYkhhLUC9",
  "key17": "4Eev1SCeejc6jEmfrFVzvWeTu2iauo3UyLYP39CZtdcKwf6MQsy6zi8dqE7EQKXQRXXP8R4X6YWWXxk6kAxqqrLL",
  "key18": "46nBwZ9hcvGMHyufrUgBS8V2m6TRJv56hq2LZSKBD7GGt3An8aWBwcerZYsVgHBPSYrAtJ24yiyy4UKBAFRArHPZ",
  "key19": "5XXkYgxcxy5QLhG6eX2xKR8zuVLTGsYcmBuEYiTbkLXk9eXhycJGGsciFi8YbsoJghASQ2z6beQ8CZ8H4qk2MtMq",
  "key20": "31JT1YpVTfreDH94pLhwXtEwQKsEvt56Wf8tvJBjPbdW3AGH4x1L2YitMYLYWqftqdwRvMVifFcMN6UwUxxQrCUN",
  "key21": "P1X8w7PaNkvUvoX2SnAzmofw9DkyG6Cnhec9Cc3S5QWHdpP1GxmUfuWRQEiQ2ct5KoD1u8327DeGyaitidNaBpV",
  "key22": "4oKL63AAeLv6sJYJn2M4o57zLMbX3QPdaLHDh53CD6htg4brCwTLmcJUQT2P2HGAioj6SXj5HbK5WPSrh3TPXy7T",
  "key23": "3VEmRuwGHXo5CHrKtfEnMRK7qsyHzTyQZJAtCSP3rQLcC9Cp6owKibpEzfxywMm2WTPLZ6JEJDpPvSLdrrdeQtVs",
  "key24": "35rFZsnChFwNUdxyFxB3arMjUrx61nVq7wEurNwupKKJc1CjDTdfVX36kZxXY3RcLeWkHpuEEEFgXwQpwCXWdN5M",
  "key25": "4jCPmG1Xpw1fewwESMrUNHDeeRNfHbagEFMrV92WoU2f9SqWtNhb9WnQJxKpC6WCmm8exXUvFZogtRcSQaanq4EZ",
  "key26": "3xAwqctQnLMWDsSHWeYusYveays6r6ouoQ85EBJFUiU3ERd9obHb5S9Vo9LeqRjDMTK9r8WNWH4gazG9AspVALuo",
  "key27": "2cbQWrBGiwN3nZL9FBzLUK44Vzb8goVjbjjjPNwiTdJuggLGJwkAa6E5LDXi8hV119zeyP7QhAxHre9gMXFgNG2r",
  "key28": "2GXTCJjCDn1hayJwXaezCnWpzhcWbwPmktdTawDyA9jRhQLqMjKSV472tKajHQioeJiUJbQDeWBAWHFS2xr9U3Go",
  "key29": "3ha6BwXofqbTKRFQVV4rj3jJC6nX41pepE4xSMKNwP6mDAL88qHyo8y2k8tEEk6vV8qeYWCzVC1AHexcpFx3nyCA",
  "key30": "McUvtuVdaLw7XghzrsQsY2TY5xVHBubPZJK3UzzfQqMNQUQQYw3rRCVv72zXM6XfZNSJeZKfLSce68h9jaHNhXE",
  "key31": "5wNCNHpDMZb1PmM6es63MAWiBHYTyZVY4tvakQLqseBCT4TzzyjTGbC6GNpki5XGVFS7Ufyei2fmnAsye5G4U4HN",
  "key32": "2HrFqxWz3SiqkaCuMpGpzXdRc7A5yjSH2NS8nWBw9i9zmJYcRhvyerzwNSfgvm4ttniKt5REaZRgsjTzujfCnFqL"
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
