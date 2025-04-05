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
    "4dtNwUqvBz8b4ch1njthUxKT2RVMbgbh5t3mfS3wRj5XEj3rR931nk61k7xe7s9ZTpDsz5KdbZ4EYC8sUKA7Um8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tEUrXDrFL2C7dadp9Ep7k9WRFLkQ7bxoyTQPuhkz3rfrf54BTGyiVQx69kboeA1U2sBrWYBCxTFot8ypA4vXqgq",
  "key1": "4e2hzks8Xi4g9cDJZkZGdZnjNSf6Qv6961kgVULArPgeoYS3wWxA81y6EDvmXbrRV1kaWAX4kkQEgeqwy3T73JAU",
  "key2": "62aRv3EVECJ35xEZq81R3L1TA9m2BG2kcyeGVg9irn6jiUdgWvifEXvSKhhVjmrFtaZRqjAtovaGTFqbfMJHhTPF",
  "key3": "243arPPGQ985juqVs2LNE8weBJ4eNz9zRqYzPyc3SJsVWu1JNgyuTG87icbz4tTuJERk9Y4Nyu2P9YZA4tXhtgYa",
  "key4": "28HRGiCvb9ig3MHUheTgyK6g7iDj7n1mkAJR1rwHuVoc1UArUA7Tj13JfVYK4zrDgeyLcaTPC7WqXPA2qCspZ6jb",
  "key5": "2HpCJHqiysvZw2RXo1qRfPeXbauZWSHMoGSka2SjyCKa8qh7vK8jtzzNfqKTyapD2gqd8xrNUma6kfnrgGcmmfm4",
  "key6": "5NnyfyAzHcE5oYNMP2tCmX8JA9C2XGEmYLZJqzeLp4MUawRxSKRGkz6rQKdRza38FqeqrtwFb3D8d1Y78Q7ssU2d",
  "key7": "2VgMA8fG5m9FGBuc7GoQYsuCgzaxFa1Cq2D1HEeTLX5hbCa7pDxRzQRFAmeL1679ME6GJKZnNrtiisqCiA5FFDDd",
  "key8": "3pxhRsA571WNPwztcDHqqARXgjnw4iiWL1TUZpPXY6NgBorKVRL8Ai7ym5ub2sJG5FdZ6XLSXEbdxiqxYBJ9ihXi",
  "key9": "5momQEBrEY41X2PVr19SX1qXjvdT3Y1s9QB8RBUkR31RnCmorrnoKKx3LSRyP43AqDVmsFnhB8RRVicf3qrNH2pc",
  "key10": "4JsffkzKciSTZNyYGgabJmR2VXK3CEN7F9X7CbwuT8QvtBXBN1b8DrGCd8PbZqifrxiYAC56Qk3RJa3dzPqoxvyc",
  "key11": "3wWv73arR5MTg3Qc5sX9UUEQ8aBLqf5uAQGVWY6GWSYapSfUQR914bBTvvcuiBoAwkNLHooNMwFiEhzxV223cxBX",
  "key12": "2FnYUbTBGrCasdcj9KVdRPgmrCzWNmPj68b41i36oxKztdHjNa1BpcqHm39fuGNJK6AKZMYyfVXjGusBYu78wRZP",
  "key13": "5SgMy7i4uAGN4hpP3S4WZYn34vueUwKGkYHUvbLHxrsm6Z8pCsFVzqc6Tx7ZkyEoqZFW4HS3GWj6Ky5bi5t91swi",
  "key14": "39Vnq6totvf5Ky1U2Eb3eymmzrGCSRNyA7dgQrzbm1tnpiZi8gbcQydPnzGY4hrc4YHHxdo3UsTdKgiJhNMU56Mp",
  "key15": "3wE86nC8RgCqjJk2KdLPK5bXuLpSFyJkitdUpkX68vapKqtAY4xsZn7YEgDMhes5r2SwyivGgw42QonQf9aA4VLf",
  "key16": "2Qc16oawZkWo7scF7vvHqVNYvjUv6Yu1w3BdGsXrxXyprqBaGAiUEnx9pwbTCdNov74WyrDEjXA4WUd8hwSC2RM1",
  "key17": "3MV7FBnmhhjpXHtirHZeu3B1wr98enPBak91txUfFGf2UdHCvTapgKCiiTyCTxoN4m3Py5MPGSHhrx1pGUxoxua8",
  "key18": "2Px3u24Jmu5QqYb6DzAtDhx5pXv85ctqgPtjZGQLsB48PFSXVzkPZyw84wu8pyPXdvnn7sfHLvHiUHs71wvGTCAj",
  "key19": "KHcMYLXdYxJ87JgqKaMSEDQMqz4Cx2AB4kwB8T3CiEg6LWMvhKt23NFn6uGxqp7eQLguzGJS8mwcrxo7Lb4XkNf",
  "key20": "2uouNb8X77TsqUJVC98bzVhyuXYwCzLBKRUGqtTyyicLcFU72AFfgrh2zji3V2zes2a15ZkLPtmbjoUBQj3Mm4MT",
  "key21": "26HRSQKt2i911mjRmwPiux2jPjqBnKeFrHVadztwhq2rMWWwy8aa3WprKQy7eptjN8HahHZtKQN8f5qjy4QoeBZk",
  "key22": "1i2URZYEW1ZuzAPtny47X6N7azTwYRqduHN4ij2eWJQS4mq38NyDmay9KmqXuchndqxKGYh1n4nCfc67wGimiQn",
  "key23": "4M6cWa2gokLKMRD8TC6oVZ3Ann55B8e4e4QWQ62qivLLo8Hu1DHxmcqvJhRLTqvcsM14AYchUmBjnK1Y9qxggxg",
  "key24": "388NqB9znRHhAZ5ejQSkUhS2zXG6fcv8hdAo8cUV5UkoJpABpu49jSbHM72cVYYxGvzbLUyHdgneo6DHEeytZYFV",
  "key25": "4vM83u3KmdzHH85H9MTb3voitZZaiNiH3ava48eebe7rfk3SLby2CpLkBtvUggLW3y7JuuoLyaiTqgL8Ny1aWPe3",
  "key26": "5q9HPJdWhF5Kdg8CkEsG5wRj7afLBE6nyjhFnFFSuVECSxDoNnhmS75xL8V2p7xAZEaJFv1AG74YcysoAmoLzbej",
  "key27": "51Az4Fx43JHm5NT5tueQwr5mRgYxmV5JWpvZ3oRBefjqN8pAN4wXxLNVc55PnEbrxrZy8vqAJcGj3nxxHQaFWA31",
  "key28": "Aqw5KpK3VJA6yyPJc1qAXgFV9uuJMPojhfGgiyUd5nU13q2oMbksW6ugS6TyuA93PSXvWqvWak9eC63QoaXVJRM",
  "key29": "4HF1XPV9dzR9QrStwyXSmoV3HVymkJbCxfew78QPAkP1tDegBhWoLabfyfkSX2X3qA5Hh4BLGspRPKXdKh3XzmFW",
  "key30": "EdgbQAoi57ibF5zYjCZSfxQaghqprbsqXBjA115wEB5Zf4uuRBiBQfLCJkBvzk9yYr19N1g4KMFsSSCp7AYaZpS",
  "key31": "5nYUypecF1yAxfWeSsNSYBjXRMJ8WrqPHnryzYkKsrfPbwThMBoFJtUfDWBu56MrxWjaCtxyg1Ds558YPkKiteQu",
  "key32": "3JdPmcpSVi7Vtzbr9aT5uiAidzVHheRE9W3GnzDBBqTzHfZYT1x5vBauU7Yw9p3UVHkCZ1JF8bw4yKQYu5mr6fkp",
  "key33": "2PuhHGRhuEAbeZm6KVT7LqKPRH8oX18w7Hr6QBQ5NfSx333nvPRedXqiHcoMaubMFcu41Dodn5pmKcxixwyRSj7S",
  "key34": "2AZE3rLf3XvRVH28hrwGFYnWxwJNuxEs9mzohJKs2PshtcvWChW9To6deRPvmYu1f2W7xtgjijJvFAAXNKDxLE9h",
  "key35": "4YFRUxpXdLujNCDgLkiygrAc7kqtBM6ixGTAHF92fzRmAvuixh6NCas9YFMFkMuKYDbeWmUDjd5dydwVdwiiqWzS",
  "key36": "5cPwyFT5xJmA73a63DVjMxqFV1GZo3MhYzYDMsT2cV2u3v3xkAp2Ch65tYph9DmPh71d4tGu7iEcjVCaL1seeKVu",
  "key37": "APYex8d15VtdCmzCyBvDfMpRW31dSwqfz5MNr6trXxsYtE7pUjPWjWAszWYQdBADaYLfynJ8V4pCXt9p29sGV7o",
  "key38": "5FstAA5SWGrYQhZzUdNUd7TBMFLgFqVfrWzEDZjzkPfTXWp3T3z5U6X2wJpQ2jXvyQBnRGeXRwCE8GXqhvMWTVCZ",
  "key39": "2XTbwKrdiigeTmg3U5mokhiE9YJ1VvXAe6hSjvZYTbsJfnHRk6NKTjU97Pp3AUCRZLToceEdGdExij9bYGBm8P2Z",
  "key40": "4TGNhtu2UsuuvLWjy8s6emsPGS1MjRr2MTKjc3wFSr2kxMfeDSDLWZtw1Fsi7inGDKMcL9hkkKArPL1v3yG45XQX"
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
