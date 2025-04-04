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
    "42TMjkNCzChy3vaxCd6VMVzjKiwzq4EMxcApqR6HUUmevuZZLbLQwnpcgT1ss7FiW6TAoNFK3vZmtRioJfDapuQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eS17WwBoyGSgan7nJYmefSGWhVBBhAg7VhQvRhYH9LAJXhRxXMvZuyFf7UMzPSk27rrijb5LhPx9Ub8MHFcrb5E",
  "key1": "3sKhv5UxBBrLvzjqzmfbZEqsUYkyqbnFKaPo1TRQVezCYsqq4wj8r3nf5rrfT6gezL3pC9Lw6tWRjVjzddjq266m",
  "key2": "5Lx7vbeRrvKTqKEwHnLg8j1nqmzzrJ1yR4tbPtgEBdYNbHmv9YUPA9S5eyrehc13BZ8RFxuvA2ZADbpWShEpQTki",
  "key3": "a2X9ALpR8hL8tPDXENWBJyyfLbCUayB6CbWShj6uEpJKLnuUbgJ4HHfLrx4Z9YyNpm3gANDyxXsww8Gc9dfBKtK",
  "key4": "3UKeYqhgTKYpx8y5dfbJYnCoMnPStHSmQnipD6PaAFzsEgY4i2iowPyqUmRyEMkVhyu449yRpW2H332kH4sEGk6b",
  "key5": "3SQhHo1Pp3yJKC4HkafDi22fbNSEVbxyJYjTnBfQgxn5kbou5Th758Y5eMRHnhu87HRwDK7L7g8XhETmoHbFwMTx",
  "key6": "3WCzsTDgyAmiuTwPmyVTnLB6aFB6C7AwfuDXChBZoZme4nhdkHYL99hfNWsemE7y9ysCQzCzcYCTP5opQS9PTQMw",
  "key7": "2V4UG4gQTit2B86u3sWT5xatWxq3LL351u8L77EV91kx7iWcqX9jJ7JgPDacSYPDgRn7qzr2GY6XummZVDLYbccY",
  "key8": "Pk2J7EMoYytY7cFBhDe3PX639rdJ6qPfjhpmNvvEHgRsArwzV5femcPmiKT5B3Uhh7XTdXC4SK7ob7tmNMbFmSg",
  "key9": "AYp3LZD8ULbsNxJdYLbHgnMmAXsfz3Mht9CP5yLZTwMSb5p8Z2j6SQqcitCMPxVpw7FV4L2zyACNASQv3NkmCSV",
  "key10": "5i32C7cV37Ad2CrAGNCxPiCXEg9VtFrE4J3xCz7zVJLEXiRWoquqAKMwrdH9Tk5mJCXMNGgFtAHMcZyrJizjPZRY",
  "key11": "5zzD3YrEQ3oTWFL5eZiwK54ybF6mYTbgTYSTwvvb9cHsu4NGhD2cmwvgfjYaWZ5QhMTrAes1QvCBwvcZKQmtt1Aq",
  "key12": "29a8rxzB29ZUg1XVSAnHZvwGv1gNcAsvkbX9Py1WWUut1jcFbNVYh8peWf11QGL5vQqpnjYNzxo9xTmzCRDrR9cT",
  "key13": "yNFe6z2eVqNWhxxfV4fHCZQqC45VSTvospm13nTrAeaJRuWhxBmyF4xFLY9tcFCbUhA4RjHQo5Bwiu7V9mR2Crz",
  "key14": "5qgT34aKcdpVsxRJDLFby7Qqfk8u18xyyi59B1NAh2aegJFtCRfaj6MyoVeU2ULwwtrMiZ2jcpV9JdS95GxukvVM",
  "key15": "461bGtpcZcEKqfNXGHAHLjce39w8HUz3L1Gfa8ajQAjBf2C4K15SjYKnkG3W8am2wHu7DEhrFpiKtx3GHdPryTqT",
  "key16": "CSkfxSuL5fDrkVDG4aXjfKhuxvzdSVaViXnjBVjirVJXgxGXnDhjcSUz98xXndxtWqhZGwXske4XHe1W77DCPCx",
  "key17": "43sUo97uZbj5tiKB5bsnHGcVtAo7h7Thc7mUjASeUAzX5WJ6e3kSZaRm2YCR7GkmVYXzv9EY2tZkH59rAaHYZs1m",
  "key18": "5XLC4PBtCiNMU3gERgRvWoLBQXvVjSb71DaTRwHzbBgonBqePfjXDDUwFoFpKH7yAaALvBAwkKVBQsKsCmVgW5SK",
  "key19": "iPox1wpAe3x1UNhfa8CEPuzuShFtGMMJjBydEJupbYzbScQW8k1Hapkwgf2QhFm1jrepKyPYrRrztXmcT5quYR2",
  "key20": "quZrK6WGXFWMQJHGySMDw2zgwExbEE8cWSBR8e4RmXMR3hwvkK7jUjpdGg5Az5dLFobpuV7XeVcJ392QsP8akuh",
  "key21": "2aN72grAy9mqoHi4fUdCTCTfqaBDFg5V3z3N8oaSMmT6GyUXd3htbF4m1fKDK6gvzyThJvH6onGpJFXywrRY7HNT",
  "key22": "2tUBcuJ3XZ3Tf7QfVstv8bgkKYfUoowAp2bX4DNPsSJzfJZYPc5tpoBgQwTVXCmAEnPscsEWyVzpEqZSQVEPsnE5",
  "key23": "452x3kZ7kyBAXn2z7dRpcbcEgWB89C2srbmPGisL7LfzY6jJc7ziZk8ZEd6V8kkahHPficRS6BrFSPvQdfiq9Ekv",
  "key24": "3vmN6wTThG68SpmFesHTWfkgDijyKWdKbN2ai1KP9A4Zckj9V8ozgE6EWERR6xLCxbMf63oMkGHG1Pc2M3F3JXgK",
  "key25": "4bEZHLRYz6f5idbCdwdPYDXzivMqSKN67c7aAXJbn4ygBiCKaA2SKwHjFVHK3wjYkCMWWfYLTzUb1UtoKrq7UGns",
  "key26": "QR5cLgaHmib5ReApcMZjXvuJrjSPe9FMcWQmv9UdzS613jG2AtbkWLDL32H5m93QBpcXHZdaAzeFRAgNXt5fYqr",
  "key27": "47X6LBJVra5Gy6PfcQhShTjyF7EUPga2KiVBi5PME52pKieRWUZZgcBsavvLLNjTRdNNQK6aQC2QgPoWzkJznY1N",
  "key28": "3HGGcZZFaumJEJtGTFRudNMCxP4t1EDG87ELiWLeMcXYmzJgP2LbXV6FEiDe98zfo6Nms3SnsnBdFcbHcKVdTPf7",
  "key29": "3QjbQqrmTeLTMgs8zBx2WZmxWtEuqn298Z1WDGURRVA3NstPrmMttRvyv1JrQVxBCpM6u5Yz9rfZqTztqVFxo1nc",
  "key30": "3gTVzvU1FcnTQjh24zvUjVNE9j6JTGxa5psQbxS8b6wfScmGih3R4pNkXFVX4AHaCxWkBURpHxgvpYQR97uTJZD",
  "key31": "3tqRNgHXvSpWe54HVD2GkZb3yiQmEy26BrZAFc13vZkLQXvBbNDvtAY3ak5UNQ6DFVgghr1deaeXTthAfgjZgzpN",
  "key32": "2WCVf7eaPrPZdjvZR89Mn8wXeBXX8s3e6DBhi8S6EQgeKCTDZqMaaLrxCymNfMm1xmLNQHJEHepLtVDgXmBz8oNV",
  "key33": "27MrV5nYHsmkAKQzQvtB7vQb2XgbFcDWDTTCEoYDuPWL5UDX3M8mF42DPniDc1z3TZZiHqngDPJa7QLGFVVQ8j6E",
  "key34": "2JSGWau4tpqoFWsxPGn6pHsbfraUx6VQWGqh9Hzsu5qn3JQL4V696yPzzfmPSvnGuumgMNnZeTT11GC3QueTE9co",
  "key35": "47F3u54ys7SLGLyUJeN622GdUYjUMsp8WUbEkYmK4BT647VpTUYmd8P42N7K4DGvN7QbmfzXakCa3atHfDQg4HFu",
  "key36": "3RhXSXRqxfKHKBNqxdMW96dPDjjXuvRwtBMyyehLomBA9iCuTFNdaJebmxiRbagqd9J5X6a5FJ2UCLUU3Zo7JXnS"
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
