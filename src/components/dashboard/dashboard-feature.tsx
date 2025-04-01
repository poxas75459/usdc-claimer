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
    "4kbdNKHCBWHpu17cGT6ZzUWf8tKKvGrUEigHTXinyt6GPUk8my56FQwppseQ1y1RTiuV7KrgUn6jrTy393xWPZjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdYrKmbhgK7uBLLrSLrmPZffSonGd4bwum3WFKDoR6nubSZduBhaVwrim4KvcQwv358tKPbugPKrkCatFdXD71n",
  "key1": "5GywXbtDmz4rWLhVhJSGqABR1GkD5BqHX6TocGfr5eBLigxVTyHMuCZtXLzCWUSLfH4X1M3z2QoH89yeAbKXjhjy",
  "key2": "33vWBdhcdLqxKr2jYLfPXqX2t44rqwvfCUAWfsSDN93BzHkg8KzpoUgkuFPMxLbqG1E1y9Sg7oiQeotWYN2ZMpJg",
  "key3": "3KEAs7WDhGKidK8HBkTUvPvHzpkk9SzJ4SPdcd7Km8KsEC3z5h1Sui5EgC4gvmBmCQKZpywvExb6FYgAJGHchGvB",
  "key4": "2euFLexXeydkZkD2AR6PDpENTdcTwnT9ExkSytZPy4wEtX7dUVcu6b9RDdynAQsBVC81CVo6ChuNdw4SDJnF5gFn",
  "key5": "3PM9eMr83Wud8cFJxE4uf6YofFyKTLJ5bdgLfbZ1R8RwovkrkWtQijV83VsYWZNsHeLFfKw6QjgCLQoWK5x5sQbZ",
  "key6": "kg7LyyDFkCse3pQbfdKSE5wx8e1GMkqfugkUc4YtAp52Ps7Z4ahsv6yRR8VQdfLnR38ssVinuGd5K3ZxLkqgQRL",
  "key7": "2vS7tHBahVrn4YnbSgmNhyHhuMDdC6dVUgETo2BJxfaczgnNXrdJtkz6upt2UHKUi6be813QDMaW2UMS6BvSVZAF",
  "key8": "3b3qzVYSGs3Ztckmzt16b3iTRKddZiEhGPYDeFbkYXstvdBSHYht4SABxjus7qVt14m2uRFjWkpoSFz7fV1teM1J",
  "key9": "38cKJsNfniPFBHXW9QaeaDFDSZM4UNRmMAKcJfa1SJnYVFWHwN3fnrD4dbCC2QcYJYKoPygJg9xUrc94DA7aeBq9",
  "key10": "2QTfaS6J1uXHgvN5sk7o4DsyebRwpxBJ1DK1tR8REAw74Ciq9SFKoAK5gCyiJ66cuAmY3cqnb8jjkudZYXhT9jvR",
  "key11": "2JXKx1ygy59pZrGX7hCDAgU3CbQeYbdGPP43drmeXcm89H7brmFjuohEYRBxznEWFxHkj4FtNVQcMyisPUG9K45V",
  "key12": "3eqSigVZYi4HM3or7NxtR8aWwYAGf3i4q6qFNdRszLJeR7L5fTvqhpC9LwzLG2zixhpGGbNXZX4j5bKHxr2uE98V",
  "key13": "5Ery4Jk5D6pFVNRsTiiUF7AfiCWajw9J2htGVaGZY6A7VkLNmqnaPRPYvPjZyg7DP42EEtfLWEEhx83wsqFdZiUa",
  "key14": "3MmjeuwU2bwWCjgezNeGfwAXEC944ikt3RcmdeNGzrLEQtUHjyKoar2ZRLgW3sMgfpXqZjctKedcXyiZdoNqWDpR",
  "key15": "2Cc1My43j5rZ3tPLdwM6ApPUW8vgtygbX7UYGe6Dsao9JrzPYMaBRBYr66aghZqQCfmHBPtdan1NgBJuXskbAufy",
  "key16": "J4uMaoDeKGPwECmnTCnfaQQbvvz55bTvz1pzHbzApExbqa5VWQdwKii5MpzeeFtdNESiN4rq3aKdpJ7BC4hTo1v",
  "key17": "2eDiDXxFRCakt3K4E6XwDnf7Q63YCVJtXANpyY2kn1eyNcGYEbtZHKu11uBHcmCACQ3rN2mmRJk68kxJ9vJrZEWQ",
  "key18": "4nAQjRrRxdG4WS3P9FkGMEcs5Gq2m1mQou8HvRMz9L7wVxoNLNzc2BLfeFZosG4WC3K2CAjfAnDYsy6462x8Kx3f",
  "key19": "2i3379wWDEcm4PfmBrA8WWzCSQTe3DMngFd5JXqn9s5nBtY2ay83uyDWHeisJLjGxs3WPx8ytQ1PCVUpg3owyhHf",
  "key20": "5btgbZoVdhy6V9ULucRxMoqnbkr8foLm81f2bRJKZSmcdau4vAALzi4VeWvkYwAdpqZfm3PyDHh8B9WV2sVWg6fV",
  "key21": "2HVyfZJC9AkaybbGwti2qrAAd2EXWLpM1mZf7FW2fvyGgHZ4Dz7KCXiZioskYT2Fcjbr87rx3VHc2vYpo2WCxVPo",
  "key22": "3Fb8SR486pHYHQGT4S6qbMg4VST77Lmxuqcpo9mEf4S3g2YBw5H6vdqpjJocG7vHYZzf2C539qvDNmXcqvBpB2eC",
  "key23": "5FcfVi4Ewrf4BKvs1uDEpZztcHEvU36FzfdupS4TamFsXTAxwJFA7Yv6f3Hg459t933ufRkipzpV9QzqE35zE1km",
  "key24": "2iJaqXbKPr87YxxqDpVxiYB2rgWthrQdxgUmSbMmZ6NmEgc2mdLqksTvwhB6DoDqTJ315QRUFfyBJcjZQ8XUwwEZ",
  "key25": "2yuxj82VEbMgx68m6AvSUsVo66Si5DifkEt5D5tEaP2FaYkRSGrecWRSs7Mkd2GAKtkYA1UwirZFG2rB9dStonnt",
  "key26": "r5X7KBe1MD4h7qMcBAeHVnHAXjtMbQedU2kCtK6UZSTGkc5B5GV19B52f3HxPeRtiKmLtH9YEbsrucW42o7XhiB",
  "key27": "2bfB5B9mmGKrNmNwynahA9QVu7cif8EUJhArg8CBos9quE3xdZumDEFb7XMczxUwqNwCbbaEN91iMg3DM3so1Txx",
  "key28": "49cso65n85q3guSMrgPgGEGEiuacw3bXjfNZXRY2U4dERKgFMhhXDmMWPENgMHDo3g5JRJGLKmcSsaUFndVUHBAv",
  "key29": "C8Bjct5G4koLr3ffER7nUnRHE77VoGVpaWQ17cQLDzcWxrDqZJLmbzwKNi3bs8F1yuJk1YEcngRgF9ZFQJ75wTK",
  "key30": "3g6kqYdUCVAuRp6eMiV7ydPmT9Ppa6qcqL9XhqD3A5nfHZVWrFikJDzjUkXTKu3GoiA2z4L9qo1fivQywfCFCQth",
  "key31": "21zCRWhAmcdZEosTU6UAGPik3Bv9rwvKNQB4vuv7BcpikZhbhkLXiGgUt9bRKtrTGKEQ1swzTfQHExdUZbtUBoqP",
  "key32": "1Dy687fkh2TTFL7X661jBJqfVa1br4UT57Ycu1BZWGFT5NHhAYGE7dJ3fwhb3rxnpuVNph8AwZxZntDQtpozSXz",
  "key33": "342N5ukD1fBH1pCTpFVGqfTyL7v9faJfBJD5GpnGyYvSyarc9dtWKTfyH1udwwnDsnxDFQySvR5bLMtUGacMduoC",
  "key34": "4n3hneiEkBtqGggQdBoue8LJA5sXTZD9ZrPuhqSCW7cgofCxwdNXsWHEx1dc5KazSmga82x2VBBojVFEHfQtKfeT",
  "key35": "3nWjzwmrF8fLpMarJqN1QVeG4VteWRuU87zbUJkBeB1LWp7qnvHWZrJuLNmMszwg5aFawuf14C6MgGNctrA3JuPn",
  "key36": "3kAwFnUWgEU86xg3kfAeJ42pyLaqeGyrdP2HRVnsBgh7WxmnzJcvsEgsuyEKAPaRrF9dEkQPCjDJZrugBWD8Nm1Q"
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
