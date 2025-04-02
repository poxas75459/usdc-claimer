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
    "QNsu5sZP9mNST3ZagivxYYea2GA6GFM3jRnrJMJcwsesModqYTsF8BNsZCStdeZ4Dwch8eAPMYg1Jx8vRQkemkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XtNvM9gDFtR8rTbMr2WaJ1vFdrVoV3GWDiikyYw95Kgm2wNUBH2upTpfGqqvgPqKVsFfnSsA6ZMQpY2UCdg1ffj",
  "key1": "4yyDRUqjktPaGJzjfgM5tQxp1DZmaU5mYRUEFWhPf9ujdaHoVA5QQWjqxXR5FHLt4UHXzMFD4hQ2mX8wWLDcDhZC",
  "key2": "3cvzrc7RWsnckGBFZ87eAzsAfkDsx2Th7u3dLXDVNEJQhczhdH5qa9ENEyqgbn3fis4fRqjj2pq2QPkGFfDMTCYM",
  "key3": "2kNJ3yia2kye44MShQJYkfpUZypmsPuN6LSbTzFxNpxujpg3LBqnJiAA6GDctPuFWNR2ysxruGo8yRkJXba3USGe",
  "key4": "4Ec9QxFRzML84HWXnRkJKU9Bnvhv8UJwhCTsT3F6465kjw4RmGcMTerW4jTsffQsDAQdqxDmYyujsa3ixceeDNhk",
  "key5": "ecJMcku3JXqWEJwX7sCuLBdwB6NheDdFMjGVUh9geiftdStyExBYV3HwvjoSBpaxkZb3yvJBodQm7Ld4DLHQov3",
  "key6": "37GYeBv1SpFaiTQnRu9y1EtZ9DbH2gRGJiZz73eehwijFFKdWjYq4CdTNf91XCRrLtpaL19eBwkkbkprgfiHuNEs",
  "key7": "5VsUrxWeqpqYYPkBKDv27BZ3zAfYV5BXqS3N9FrrcWd8mgtZzhJB9sh1v4z5VxAbTaGrCcD1zAq2bTtt8yNdtdJv",
  "key8": "4JwZEdNWCQNtuyZhpndEkhTfSQLxmrAvDR6wXLzFyFCpFsSz6LPEmM2aXTZQvuBrnYGUpE3nG5c7YdjTdBXADCLH",
  "key9": "3ySHZFCwsENnZUmchX9m1mQF8ASkhrGAP9yryvpug3v7vSSMZnUTFiCggqsJf3XXEZDBCQBukvJ4RWQ6vGVfqdD8",
  "key10": "2adhrgVcr4m8U3ejKvSoYiL1KCUHkJ5if2KfKmANAxXzTBFzQeLFhZ9H6EGyYRmKwbgKpNgJnwudEqUDVmndw8oX",
  "key11": "55R6Dzk67eahnZBMkScwBvqtWa3qogFK3wRyLF8YR87wbS8j4aJgD5Yo2Qyxet1jvuxU9uGZwbgdrMM4Cb2oNJEk",
  "key12": "3WWvxpyFeUTArAdHovekK14kZM47XdC6a6PsRaX3PEkFyCN5BCNfqtziHFCiQgFUoTUGEqAFnfJJVF1optwVQPMY",
  "key13": "QoMZn75t1eQJ6cFXN7RhQp5gJ2phoC3BjLEmQkh8h6EQhgbQAYgmLuP1G2zvHUYqWgLJBkZqjF7QjW5oYtDAudN",
  "key14": "2MfZ9PUdRzwWvSAoRV1mkmkHDrcUMTPNdZM58nLiuSnFFVr4mwE2q4315FYX36u1V47kDyNL1JFmySKQjpGCWWEA",
  "key15": "2FpjcVfHeGs9jvhG5Ab7gUhVdCXdKqvFfoDNcudBxL45qpHXhLBYjqL1uiL4wS96XEKXLdFX9gPaQtynM2hbvz5c",
  "key16": "iLEt8WY8PoFhScdcdaPbN6KRLmWc1piT66YczY5WsTgqiQJu9zCcWNeHjMFbhL9sQ9fJptJi1gxF9rnA1wiy8kH",
  "key17": "8sZ3oithxtDGdUqysQB45hbs2tBVqMAVVyCkzKqDZsLTSNUcyAQwz8T9DgKZ3i9d1YeViMVsABVqTtDNh8n6d2X",
  "key18": "pKyifL6XCcj1NhdAcT2W3tvYHpDLfsMb9ywYyHskgwL6wr3MrNJxkHhfSdkBhEWtnqoG8AjrgH1wEPNGpzU2M6J",
  "key19": "2UJ7FMWrxtjcjByPE7cEuwF8y7wkCvDHidY7yh3syWskGWiaVeRGTrFtZ6YQe1ikctJkMhvg3KiGLvpotQkLf4vH",
  "key20": "57XCqg7e9CKB3EpAgtSYbMnzQR3gSNnFhHWJFBHFwL23cKQCTndFsM7MDaK1W5kzPSjZp2KwmgyVkGqNFaBnVi1Z",
  "key21": "2QTULU3VYfDuso5CptiSMLZcbFC4t3grn2xo5gwXaCjDeHaRqwBHyS9hC5L532HPgsAcyV2tkLrDw9URUhpWGNLp",
  "key22": "DXzSdnzcPAyxvCBheT3BMuv6gbfSmdvJ1fCXHmPFvsd4kVMVHeGLR7Ga8Z2kfFMktBaY5z2sHvfaqUanaaPWWhi",
  "key23": "5zNwkGgJoVpfYHSRmLn4vA7R8fWmYine6SDPdNrFk2j8A4jpaQs28BfQfSspk3hAdW8NtJ1EFjxVjhWcRJNk7rBH",
  "key24": "2bwkT2j2UdpJVu6RdZK7eBqTHU9tyZpNVWhzbFYBMNq5wYRrRvcoCq1fCTaVLyyrULbsWirPcBHhJGv2X7SVHymH",
  "key25": "4d172q6tteg2GNurKvzAk1fxwa1phhQCdSz689aRjCzgoMqD4BP9pr7pNkoZZe34o2rkwEMPiuRDedshk8jaQGvz",
  "key26": "3Ph9fd2VzWYbdoAGTE5WCDz126Xh2DMXH2oUCGHSQnqYaiV7x3KjdEph2GjfQbeoqkETotDUMFRaVntQpPapVAZG",
  "key27": "w6L6C5uZq9mbbDSRW3LDie6UDB15BTV27XKn7motq5Hh1W6dF1JND9iRQkqZxpWF6vm4UE5bszwdT6kG6oJzmwR",
  "key28": "5mY7ZRvD8yt8UticGpERQ31Wu1z64HFUNzwRVwWGw45U6Yo5jBf8rj8KDrvjSLnBY4Qrpcku7kRwTnz5MboAPDqr",
  "key29": "538qxcRuZuKNjW4djjiWbyYbCTxz5jcKdpfLEu3nqnmcpALC9iL7uzb8Egy8aL1tSspqfpny3TXcWUtPGspgsB9y",
  "key30": "2E8Lm2xGc2boWe2gkEFNGSBYM2bn6nZVrehAqJKwicnD3w1s6N98u1sKWy2a6tGywgQ9twJ8zKBfJJ827ovJCL6q",
  "key31": "2KJDDx5JeW2QVTjvAqP9VXyH2y8Exwp6kTbZ5J9pvUKHY3pPi2nSHxn4s8o4UcZtUmqYrERyXgmuUXuvPsKC9TdX",
  "key32": "58vC42GJRWVFywv3VHV4cpV9xgEiMWGgHt4NSTnjoNcATWUGcRiMJbVWCRpWWtkTRBN3isiozhjuqtzFAoBv1oto",
  "key33": "3YZiEdBbdbTCEhteHEoZQfwqCV8mXXgV6myvkMusFtR6oiWv6fHGC6gAMkhfEiq1k6GxKM8HggvipWcAP95atihv",
  "key34": "3JfaG2wTUqckpSV5kZqCjwSYHhcRuCkPp3J439MR3qTM3HA2nE1jqg4Zq4XgDvdCTcbcyPjzFRKrTHYSfKRYeHS9",
  "key35": "58WMeUsPiR4SoYxuueYGYBzCgFxbaLFJ3DuDh3LZj6z5k8V9hW3vsVyHMVjj1ARAjZbAbJvfdfEta4jqAPVCX1AZ",
  "key36": "4NE5wcFXUMuWLxaHKkjAHcLpPygBQt97v8agJwBCUE116GtCJNHLtChJ2sdDwez1jnhCe7bYeDWomG5dqpj8pvGm",
  "key37": "5NWMuvL4QPR8Vvx7GJdhbfL9yMd7B1fHKQDZEMQdpjBUeEMgRBqBoe8pJwLqvMM9DWpmZX3pHEgiCARxMvAxaqiG",
  "key38": "49uwyNNcejXDopCXBveFSF2onqtFNpopkaGgXYKwgvqYXfp4wiTzswJ9y5SQpgom9dYCfBtEGtv7bXSYRcnGseGH",
  "key39": "4qroNJUL65jRegiHiUMxFqzmnW1k8k7S3HyL1KBHxAMEzTya3AGeFRCGA9y7mKbwQF3MyTM46KZMkhDpavHKVfUJ",
  "key40": "2VFFiCK6PUREuYqYg8oWaAqvkQeSQ3DmvCwqHT99GYeSfDQSTVDpWj6jhJGPj7ZC7ebC9cNf44o4gTdjcEjLmTZB",
  "key41": "4hQTjErcBHjKexf925Zi2Nvc9EEUdgSNFyN8Na5nKo9aG77kMw7afzS9C2uaMPPqLYf6vAzfApmTV6U6Nvgn9G42",
  "key42": "46imqn9jpoNmZZDdpnnqDcGQHBM1xAiqMpvVssvkjXDz7CyZzKVFstorMyyycW1B3KEt6owmRk4tEfQvbFyDytqD",
  "key43": "5tvyfde6gGYtEZj4xfYLpfwWmf67y4ySErEbRCFuMNgYgYwxzMSxrQ5t221n5LXdrjKdyd6SNpGUxLS6dbnMmXQX",
  "key44": "KH1xVnPPc5GBaQ1bwVWNiHy2ZLsJ5ABRch9zdHhDKy9L5neTYwi4wmiLM6g3fkYzRKT3Drmg7ijw4fRkMttotdx",
  "key45": "zqWWJL9qZPTEDAo4rKQmCBjG9Q9R6YP9m3HkBizV1PQz94FBgE3WFEYvTiXvD9wiaQYEiReQ9W9qqLdvMu5fHpb",
  "key46": "57WSRuFMyDy7BGQPBW8YipcZgHkRfnQ7kS9U88DVDCum1as2JDBQKMkeFUscWsvoiF5bUD3MEsyYf1kQeeU5ZmdE",
  "key47": "2zJRxsztiAV2v9WqauH1qhznP2qbMNVKMBgg7We7BA5yvJdBKSTiZxBQuJGr4n3CsS4bSjL7YhztajCXMgFAWku8",
  "key48": "25GjAHbH2cUGgYNbCRcF2pCki4Hba7HvUw2Y9JKmuj7A1JGzKtGYizHPZqU8dU19eUtyUPJd7qXNWkXJs16QD642"
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
