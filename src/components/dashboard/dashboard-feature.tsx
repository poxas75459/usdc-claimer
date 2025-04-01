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
    "2SsbNuoemSqBsUCu34REeUtRYDvYfepnueeDSrXV4eYhi41BTY3EXP91SAe6A1EyTjStZ7kVWwN1g84wcXPNWFE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VbqJtd4z2r4AzwpbEXCya3ioUqXQxzT8Qhtz54L8KaFCxG2kJxE48VoX5WN4oMLPSiH9iM1cVBPb9X122cXLSXA",
  "key1": "2P3L6b3Z8AQzRNqi2gvDAQT5cuTKMQHwEbaFLmUmE83texjgT3wAMYRijmeZ64EjU3Mp4qLbD4ZNBF1m9MxjPDF7",
  "key2": "4of6PEAScjme3PabZQPy6wnhPdSWn1Msk9KR51Zk6zCfeTugsL3NQdJm35mbo7j4Apyexj25FtLvvNr5QcqtkM1z",
  "key3": "2WX5MaJaG4aW6CtpPYM17hpyrkNDNL3y12LXV6eDEWuG47gTFHbjaGzKtwjBLMvYJsUgWGv7ECL3XQETTzBU4ieh",
  "key4": "4WqroZwuAyKSqQAZZ4SozdHrRH8yNkcSxdoWEmeorXQKhE2dmXWHs3eKJSZ6SrhxM3eB2wFaKNwNisZbxjhatuir",
  "key5": "2hrmoa4VdvettNBc4UQvDTs4vUhhUtRqFd3YvkiXJZHNCYWwdUrQfYinKTvLE6hYPVAGwxqmXYXbLwreRfJvAxN8",
  "key6": "Gz9zR16R7dcrnZYMrEqjKk4tphwVF1nBkM2P9a1iG2JTjVx27bDfxfQZZWhJMHJS3J4vxX3Jm7V1zHdPQiSZdrZ",
  "key7": "32xdekewXdCbH3ptJpf96FsEq6qy7s8RZwxuqVxeZy6NU21UYpxRYfp6GtqENvgFU7Wm7HPpxszFQTYoSi5JVEQy",
  "key8": "4M5drnpVHdF48PvAYpRYJgfHbUXnoVMaGesdwrMLK5JcdXgfJ2UNoW49TLytWBWFVsDU7YnRVNtbmgFxAEknPmDm",
  "key9": "3An1t7bYyw13A6SEzzkSAXiLdsTTA2yRZCKDy3XDhqd1k4xXT6G9i3yzoLPbqCHVkqzv8EeJaqVZCDo9NwuZ4WhN",
  "key10": "2FoV7sWnG1KGVcQLR24jiRPGzxXHejuodcv5oKhiVVayDWKJX4n5wLUJpa2V39yeMohz5ZHbz3rfg9zWhDpwmR4k",
  "key11": "5uFMwsLsGCXWhM3pm3CEc9RDZQmgVRhywDSbeUyEyuho1txoB8DS8wsFhMFjg56sirwAQmSsDaVKV7pSPXnqRHyx",
  "key12": "dpcBYAHd5ZjAHXCQWZCpuisx3q13oDrQG3Y4SX3AfH6twZfhGmoP1snX9PhAfySXYDW6Vay2q1PScNhEmAvcUGN",
  "key13": "5aN8JKd3P81DUPaqqQe25dZ61e2HBmpB6bJYYLhPVrZa6SPQVGkbCDHb8CdaARZYoFXKZt6fFqhjuRaEHokjGEhU",
  "key14": "3BAEoZh5hMJmkTVqfs9syg2WVrYpYryMpKuX93H93rpVABhnM2sicdd1bWfp7BFwa1qE1gKX5kQVBvfeTW15jfBh",
  "key15": "4rut5ZfVRoB3cRmjgrNfPAfJKiU17d8Dbz1wVWWxe8UauLUpJzZvRsSAyxWKMpQ3o4vR7udHqqvCwvW82hmeecwj",
  "key16": "aHvifkV9pburMmuLPmZRJ1HPQJ45d8thWuUnUScthcqHnBcBz3JsP43D49nofXy7CpkK4qotmctjDNe4VrRo7ir",
  "key17": "3m8ZPMkBJHcetdU1tpTJ5VvJXcMZeWUtJBZC7xAAF9y299cHezDnLA4orC1fMLnMKdBpdYsaADn6ZjVhsxRfHXmd",
  "key18": "3sVLiPcfDuDfEJAoxwg5WhqpBQNTgR2cEUgZEQEPTaekH5B7pepKRqGdWLjkG9quiMHwoXV8dkgSNSd1hKf64BR8",
  "key19": "2BQJFuSqiC8xYprhw6LFeQRaBNLB2Ddw8QSv2pJzYZL4XyoLh9SQW9jNZiuToH89uC66kixbtgrTUSMD8eZEi9CM",
  "key20": "P9c8Kz1HexJDiPy9vNVC5jR6nPntha8N2qTxhAmw9feTwM2WirCPQmcF3XqsrFGYcWa6UpQxtUYt7FAJTqViNs7",
  "key21": "47BwkrS6bmsduN8JFxwpShghJ2KhmLdTk1spfQxdqngsMqw6uYxuFM2AkTCpXPLi5s7TFaNVEUvSL5Cq4wEe8fyA",
  "key22": "4uB7E6rDA4zuC7w7JWeLdxtUUTJn4nFbTWc5psYTyyB54PKPoesHJsvATFoaQZnQrFm9ttPYdMhbyrfoLD7qsXBS",
  "key23": "5TiDEDEexLB6o2wqM25tP373uhnrD9qm6LhYzs9oQx3DfSMnFTdZgHpSKGKf8xiTcpMM7DXEsmerSJC7mZoiFmzi",
  "key24": "TSsmgsdLBcNDrJZ3bANeo89yHYqF4A4G5vrCgFmY12QwRopVMuRgwG6tLHSxdE56FRKZPWurSGg8G413kXdoQez",
  "key25": "4QHgmPLAaaZG7bnLsvuBT4LmZ4tXGyU57yNoyumwXAXVfRbnHNuxMHQ7HdAhjJYcwGmN2T6iZPaZtjFzFN6qLm6s",
  "key26": "fmwBXSaenYftruGiN63Y6c8npYzy7UGemkyyGhUvBGTJz9L2jERH8d7f7cyV3wtBejb6fB3LzXndMC4owv2rNKr",
  "key27": "3UML36VE5Y6pt8rZfawvPuVT56Q5tqDf9jVJYuLFwVRQfiMQXngw6PJAfYhdnjrEkMLSmEnJtCenDbVSeRfDLzSZ",
  "key28": "4F6w8FyPm4Ua9js6ifywRy18E8ZTmtgvFG9Z3s6oswEKXthBsQyrYUwk47dt89BHPMc7kCFkXgbkTunw88NZnJ3K",
  "key29": "3WmPUQSW5ux31tJ6YMRjQz4vcixjJJhDgrhZecgHWJqUR967ghqrK1e1m6RQAigZfcP5faH6xLzCXQHgQChy4pZL"
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
