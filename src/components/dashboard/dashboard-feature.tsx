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
    "3HNm6s8ECAgmXjpjn1fMGxa3epykM4rhj4t2WREuCLCfDFYzRscNdm8b1jWQGdKGgNUtKD8YW3woS18gLptKHZQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwHQ3QWPZcAvX3SmRNEP9FqpRRhLJBKu5xofk1PbR6UYx44jGpNDo9vy8eSt2rvVghxfYamak9gn3bfsLLW1D1y",
  "key1": "2wipTfdtVDGqPnQRz2DqbmjfZTB8wCVzC9SuPpCSSUPAUFxEpkExyJ1ggxXNW3VvTJWSR6DjjjD8LV58g7rCpTgY",
  "key2": "38PQ6KFnjks3Sc1Z6Hd2dWWwaJLaEA249pNJ59hRnP7QYePrLbFNScuTdCzxY2q1hLyqY2u7QdSW3erGasaFvhNq",
  "key3": "YJhHvwWuPxp2Yv1c7gsY6wbXgshKwYD9kB5EmSCUGdHdrN3YoFyc3nexuUuqpYNZV1jhXqSpLT3pVLmQ1pT4uYz",
  "key4": "51SWyzJzQtWA29qB89e1GBzbTwiPpnn3EvEue4tZCDZ7gZDkD3PZTzqArViAMQLCMRqgf4rPjhiAVnaGZCia5N45",
  "key5": "61HnqtdpaR6xS29oWDNDHHx8bEVxFMhMCv5PHysBanmPum8QQLAHryXeEx2hTBf6BciUwUuQSTQ3CSWjguHXEUXE",
  "key6": "4zwngVW9qG1yJufxMHChcJ1eg5Bdy4LpgCyBqUECYkg3jmb7wrPRBKzA5B3qUd2s72TUSCZGVpXHHuuc6Yq8gS8e",
  "key7": "5kQt4iyoFj5J2ogFPuuQCqqQW9HgdqvRoTspmws5gZeLyMJ5FQXGmNEU6uW8fpsFHCoAXLRRXDGYkG15bWUWKPB6",
  "key8": "5iVdEkh1nTbZJD8pXCNU2dhEqL2tiAjMEMYwLHxvr4Kajpq5mEdJqV7S6djYgUabDqv8YfqvjSJ7ZQapRBXwzBfd",
  "key9": "55bTu6CE27x8sTyD6oEiWM4FjbUixTds49Pj2XBHysStxGMLagKYAC3oKJtjY1DcjWjad8jkztER3N3ioW6gfFTT",
  "key10": "5pqPmaC5wSrUQZHTF9hwuypPwvdaw38Ct9c1vgATr4RUiSSncp73wZSpUrVJVevL24NdJYXmjza4FzX1AKzawLGE",
  "key11": "3HNnHRohyVZDbeP3XLgLEHpEEX97sfDW7cLfkmsiY5avUH8B25FvTXfq8DzbSjxqLKGoqvjAVA574yrk7LaiDiPe",
  "key12": "4gHgW3h3jSqvpJw4kUeSyVrYboMi6Xp8hDVAFrL9Wh2a9at45GYJVcpWF7FjCBLXNPLBUbeir4wULuLALFYNoQWR",
  "key13": "3dJC2ofjUkyshucGx91gMTrVyktE5M53yyBxRmoSkgp4bhP5XNiudMEudEQx4MaQtngEZsshZgR8peo2uNJDwgQ7",
  "key14": "5Pf6waNRsDD9An1fDLSmrQ1baGWuwQvBamBxyJEyMkFpo47wMuxwiwqNiaQ44HHV9KWVVcBhbKUFHNMPzuFJLM1U",
  "key15": "3WnMgLijixxvSCh8TjVXwfX2ZUxRCNrQ7WLY9ih4LeRR5Wv8fuuEobqweD4sJXvKz2PYaUzv5HZtPL1hBxCQSCqb",
  "key16": "UzFYtVmuvjfwidbf6DxgSRdtuCYUiDkDzdcPVNv3eDq61QadhXao4rZVFq7LZYquFQZxxQ89r59gBBekAc12AmD",
  "key17": "zSoRAXj37SdEnDYovwA2rqRudNbXk2WuPpqhUnx4SmejstyZFvyNETUWqiqQALNpSWYyyTPR2391dwwDM2x3toD",
  "key18": "5WYifPzV4MULxHvhhzY6ym4QGdEqg1NK9Sz1m1bHZs6DSNPHcQeTo19nu1UmrVSfYbDEAmg1GrjxkHpT1ZyNA2T7",
  "key19": "5U4qRgbbWzggBAfTVUBJWKMcwxV5KYj2ujztEZSQkuyk4KxfdUfgnuA9UFzQMks5CuPMgPXSaNpLMfogFj41Lh3K",
  "key20": "5rytPTV61Apm9CYAyMxG4aj4d7wq4av5ELxLWwwBMFZ4BfYmH1My2WqPzCorayG36rFuArMxkLqv9QJKJJckRoFw",
  "key21": "3HBtjTZDKS5FbCJfkLGcLq1fQACpZCKSYmcpYnVEDD5LkqenfKUzKQN1L1zdCczr66ChM23nuS39n66GPsAMX4tv",
  "key22": "5oTeAApzMzHAYGA4kzMxSrqXRmq2AF4QEixrYpG8EKqEtRfaHYrLUyYXLPhCi6Sju2DztzdvSBGsXQb7Z4m1cMWn",
  "key23": "3jk93waQgdpzheST6LvM4hJS6jZpQgkoWccLFVA3aJb7b2UJ85BWxHDLePUABX4VuAk6kHcaXhnmUDbZHL8EHqvm",
  "key24": "UeSPo2ZGHAbMu1RTDYE378SYAmNf18DqLD6NGBRDGU453Q8zeJmL2sC17ZWWmvqtG7FUJrACC9HrgPWWotqYPkM",
  "key25": "Ci8ioJ5ShkH31SnkJBLQFM7mkJpjDD8Yath4wyZ6a2wa6baSgzJYh74kPqff72ZuNtHwurFEuR8iwxeAMwavwuB",
  "key26": "gNkUrnWcK3aLHyCDAsro5EBRKircEVcVQxHUJxZQgrhW2D9a6KrY71pauLkW5aKczBvHTJZPuXBFQdTk1ehuC8x",
  "key27": "3cpv5Ggf5ftCxbLQifaEXEPFKAnKekCDNssRKe6H6kjB8JTbJfw55GUifHzgJYpb7JGgmEtt8vcaUA8tJAox81i2",
  "key28": "22wvc7mgmo9PPARuoNs6dpUtMK3Wnis7iryX6uqEgJ2QPJL7fVueLYhDcoUK69u7TAKcKV4yWeioqV56TH7iet1L",
  "key29": "2A3wHSFJRMBd6bCwZpcECaAqGoApKKWeoJbkXq2iwyK7xZNugkA1tD1PLcczRNCwoHKuP4RzuCq2e1CUuWc5ga5f"
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
