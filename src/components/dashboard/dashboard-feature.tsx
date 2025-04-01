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
    "eT76vx1pL86hGtKgXjY3uGrahtZ6bXKBgYFvjQAVZMjxyHS1jVUYMkE5SPS2QRaeDWsz4toU2sPaSFKYb3ka6q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJiaSaiPWPKcPDzoyQSHqKvgLxs5P4uPnRECSgv6J46qEqS3XMDipMFoa5D4k5s9TPTnusYdR4RWYyKt8N2jXZZ",
  "key1": "ZFun8HJh2w9nfKtdhn6xqf3qA8iTaPt3vyHnjgvizDsUVxFr2AfQFzvSrC1dJRSAEEP74ccX37qdCBJ6rAVbcJo",
  "key2": "4oeQTKuPfN6yA8D6EbbjDJUVZAtqv2Uyn2ZxYhUQH7ijuSH7gN4t99PTF3N5nqT88kG5BzpNQCQ9EDUFWm9zS3cR",
  "key3": "2ibeVz6ymudrEyKqga68WDdtbEgNdXAu8QYy1Ue7fTPdGnRtBDjZALqYJ3p1dkM7KnSTAP8guew6aXMAPoq2Q9hy",
  "key4": "tD1meRYJG6K8fs2QLLdmUnDLe1kjzuy7fWdoXqVavYrE5foJ99EYHedDe1Kzsp43qX9KhWLaTDfrK6gbo6FT4mJ",
  "key5": "dS2zZjq3iqn1KWFh5MfpVT9QMxeY4zfCK3meWf7hDKnMywRGjkPdhsL3QZSexqfXpwmUERXS17B5JzMi26onHaz",
  "key6": "5v3K4pDoKMXeGxaHQEByVeoX1kTv7diMwagbZHxbHWDH2dGmw7tTVccd633cyKREjwMEEASueqky15hx3bJ2LGQS",
  "key7": "39qydZvNY65JpDUKffejnLPY8HP2GyV27Z7zook3st3TNzZpeVvEhPLApk694LJKLamnna8e3Phnz9X51dbTTZpo",
  "key8": "44MEjVagrCKndkn1ff9dKfdbyHRJZTSKBTPtunNLSH6GUSSNLgd69pdzgaUaxUkiGTxb4cYbC4rW9WThyaroknDX",
  "key9": "3A5HVbgQoR8PBevk1WtTD4tgALSuu5WBZMZtGB7dmdeShhFFvdXkdaxXDGSV8PR4VYWXix91cWrgNzd3fyrjAQ1x",
  "key10": "3aZ69LK4RaKBqzvt6i8MzfZ9XQCB3TxeGMxs7xjkhVF2dKcWLDG8KZuhe6QiGDjCr8sGzrWoPrgdZfGGNab2514f",
  "key11": "37uuHeTbdSjmWGuEQyaeH151ofidz6wCDwT3jiK59YbmBTFZWkqQXop4pqWGfcUkSp6PfeAg2wBizKHHJCDzQmCz",
  "key12": "2TGfmTiWprAagrb5cb6aQcf5g7EEbKkdPZ7MxKmPoqe8SmjckhB98Ga7RkFEr9Qb8gcPQgCRaQjw6n4JoFfZESQF",
  "key13": "2cA7UzXJPXmZaHMp45aePEgKa1Lst4r1WKyYauPPPQs5CjM2vKnKPFHb9UPcnCzV4NRLKzJAsAZ4mMz5AExnMyvB",
  "key14": "37ADtZ15gnwpWA8Gvhs5PhP36F1PhAczE15iL6XepB6MAc7H7yK1Wkg3M529RjFY2o13yLP7K1s1cELZ5mRYvdBp",
  "key15": "vdHHnVNz7oJyVd2YfsdoGQ2kNrjx7AruZdTwJbkqMpykSfv5cXEtyLs4Kssbrm7DmdCRjWXRtGEcPXfq8WR3Zyb",
  "key16": "4YYkw9FTAuYwXJRWiHaZhi7v35qZjkht2rBFksJzyBeCHVSP99T7wMfvMeWxaXXBzQCcB8bogyN3LvTsRiyPiaJH",
  "key17": "5QxDpzEsuCRq57nCXSkc53TkdeinJeZGksmskPMfKWqat5AGAWsKVVNZkNDmThiAikztisbjjWZteubLaEHzxsAY",
  "key18": "TCCGiquwkL8tKrEZ4CTnFGxyKZFVp7SfgZoFzHmfazeve6y5aKpjdsFSZvqPmd6Unp12tit1eg38yJNJbVCHA1A",
  "key19": "3VaVq2Rwh3ZVsAs2of48n1MtXGsViEp8xeMZdpaxGn56E4cWXzSDRpaKRMp2GbrNi2DMdieMw6afYYXNSU53qr5g",
  "key20": "4DBvRKww5RXb2U6aPUr5JKhi5E33Zfxuj7texgbTj3PvhaV2y4zjGdFmzahBmLamMvYduH7Achm7DQFagge7RXh",
  "key21": "vsKUwGrDRRbnrYvkjpvMWHj5y6kV8XGeZYt3UVmqegRfWEb5oR8p4MJyPXihazph2Au7VgUgKTjUrWZndifWi48",
  "key22": "5JfGqPwnxufgg6LzpQDb5ucFaraotZ6bbkpJEJQ7w687hYNYekR17qpu9ShZLhcRNtBRNjTLgWtDM9zVFWbbH7ei",
  "key23": "2DCe3gviybzpzdEuMbWCa5eBuRFtrqoNCxAfPBP3LxBkK3RAQvQQbFzuYyLramsFTeMZTCa7zSsCjGPKcQ2ycps5",
  "key24": "m9shaV9iS8avbtSqyEF9dvELmofm8F7c1qYJ8H7eMTP53ZDG28PHo6JQTkduiSKudgQ1LX4BYHBVA9TRJrjeJib",
  "key25": "5UGpWTv1fgHauoHEUU52dgBU4sFEwjarpK1iud6ZxoL9JPYvgojwJcVuNnJVk9UfSN6TDW7VL4mcjtjoGshE5vpE",
  "key26": "rjYNANnfhiu4KVTQQxFLYpMCcjPyaGmap1SfyguiJx84v96iXYRDLAwnJBRLRLYsXv51jT7HXCotM3QKUvqvrJc",
  "key27": "2ocuRa9MNtC7RkpV2pM7N5b4CcrwHfVEXzgcx687nK6Ez1gc2ABCpHFgdx6BmENVvpvxaHeyeXZmwE9MsaqNX6Br",
  "key28": "4XKT6aNkDG5Q4cXaePEzcR335dsjVxrZ7WDtBoDLBbCfmqK4CAR3oLBB2jmoNYWtsHUKw5sA9x8eGKzWxx9FkFbb",
  "key29": "21csPtRFobLu2BMqBe4GspqHruzETSyWwKnAm61JfVsFvFZmLfbY8W57mFTnZakcLz5u5DsXBMVW7a5PqtGCc2x1",
  "key30": "4Y8zu4Q4kgMGQM6aS3URozysjp8xb3r8xkSM9TZ34ePNUDEAbgqJdVGsa4Yw5dwWtQgCGBp4aJd8c3Zx2GrBMVKV",
  "key31": "3m6Kx9rLdBos66fVuis3diMpgUgyxawKaSYFJqktyx4y3U1iUsXrdTyCC7JYXTbh6WcZzV5bhz6fUHSdR6eRHTKi",
  "key32": "4WsA8xcrBXek2CpPHdF75rNfSh1GrwaKoaSsRGzMXmwuzaFbd6jPexUvbXVUqpo2NqKyA1m8M5e7HprHSHSTECeF",
  "key33": "3YRJ6Z3VMnZXZhXQ8ZdNyPCrpxHgj9UgHcZv9PTyFaVaSJnBZwDGpYxbSfExSHkZk2D94mu1pEAgnCt3ERxyH8Ne",
  "key34": "4ywH8BRnitc4QYyxoFqNQkQ4ZiQbYHZWSUtmY56sUjQLBS7n2xmAfSd7LrWMTmyv4qnxGgZAi91KRUQSxXYevzCf"
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
