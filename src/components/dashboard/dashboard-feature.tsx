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
    "3KrysQx7KscDtQHHyQexei1sgxnraYNkTFSSzeA7Vo8zTPsqvoMbhW15GKuUfyHWaxXYaDtijBJEmp2U7ADT53zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZjWUQHTWZ8NTm6aEy8edfWg2zcaKmvJhKXVeamyoKBXMYMKrshiDwAoFV8k8BYSutSRfYEhUZXyDafVP4qUPgh",
  "key1": "4nGQcyKtd5TJQW4cZ2QcWgZwZic4s1h6uEKaHtE3UnNVLoqTYzigv9tSjLURig7kqZaNqiZZKp13rT2U7YYp3Srn",
  "key2": "2oPSUHvKA29yMb5QGaRYFuCvkhqfgFkYcCzqVju2yd2TwtQ4aba8Gk1kSBZT9Z5sBPMqHweJqvk5UW7TMYK8ZmgW",
  "key3": "2hUSgN5eBQY2gmGQpyTizXQftkKj6oi6J82Y41QSXWsqSYdRkv2y8QUX2inS1gdCp8NeXxgBKkZGJnX8JMUofjrY",
  "key4": "2eLfN2riUMMaBAWhhi5jsxhpDJQaEH997VCEA7QLw7D6tGbmDVuNxzQPwJuUZhgRog3daJKrpeYDp4AMyCxJZqy7",
  "key5": "9jD9ZEYn2GXWHm5PrBsLDL3uJYAHPico3XR73n8KQw9RyusCKZsMgpdDbstVAefci5LsUPexWWRQBWQmawsV76C",
  "key6": "29DGXwHC86t6YBSv6XWWtVFzZfeaQJHLvu8u5ctvNZ5HTYALpcxZpoTiqAZjLuG8oE6p1S1v9LaZ2TQigW8yaDrq",
  "key7": "2wNGuWtPLSiMsYSKyxovVn61kJJShbT4qYVza4ALRbswp8bGtUizrW7o3aG3ePoYzHYvc1Bxpj8Nb6fWBvgM21h6",
  "key8": "51GzRRUKbeVWEDUncTwtuKi3NUwpG3EFmpQCTZs8rkwPkpePg5MSkdeTfgmWoCupqHKJ7755bPxuSMr7yMyb5VAG",
  "key9": "jwzNyot95H3i7feitaPmfnwEEw78ywHyBbnAnmJTRTR28raJXAbKy73SezPBQzAHfvyKZmDQyuyiJ38nbEBRYgj",
  "key10": "3V1iHn9qoom1oatnTyiaiVjwPvzim1U1wPqk3uow6aYAhFiaYodKcten32jNTEKqMv5U7yH5QE1HT6tj2nwd8kZs",
  "key11": "3TLeH7cd3Ur4xcEh5USyQwhJwrfGr1fwji7Fjz1CSHzYyCXpuEvtgMNqZMhUaXDshx6V59NQ5yuM63DjUZvf7q2t",
  "key12": "3zYXDnBNfjgVttadtNSAVXsu8g1TnDtEvSZzhDwDsxnD1LvDWSY3n4MF96tkm2fXUSXZ1AiKBCDFTP7FTuVMiUPN",
  "key13": "2jUetvoK71fDkfckinLY5mdKNGaUNSGWm3qjgLWHfvRJ1KDug6mWRoNut6biWfFk6JWtEthGEwASiVSeoxPF5H8Y",
  "key14": "zYfBZoBf55pBayS73SvhJy5LAhGsFGqCEjmotEgM9sNGZprBZeD5QUpgJpdmCa9XmboTAJTrRZJUpH9e2sQPsaY",
  "key15": "2Pt1AHioD5PZURKZjXFWabhGaqVNMAoVK4jLd5QhqYVvr866WeaCDV82Q8QxB3gBCWmamfrDRPVmSJoWjjzehFjC",
  "key16": "2RX2Ykms9L3Mz16Z8uzg8YHZrkJAvxJLQAHHutFQ8fR7JEMEHHX7DnSCZdETe32vc3x52e7o8gBi3tqNLtEX2SGr",
  "key17": "WN5v3fLjQgXgtRfxdgFM6y7FQ3PB6Niv4Kw1Ttrf52aaNtiPWWCHUGiDe8PcYBq3dpyyCb6Kcohfc7viWvK3EQu",
  "key18": "4MNwZVCu4wViWPtCY39j7q27aN5d8v1Zu7NHmWJFkdW29FkvyPujy3qJJnnyGaUcKDEza7T2URFciXaD78P6NE6d",
  "key19": "1EH5reZBEbS6YKDU2QxzPfK1pzUyGsYpfGQ9BKpZfWfB1G3vmRUMJafoS292UstWqGuuAhK9yPApsng6gtEV3pE",
  "key20": "2Hnp7BvTGUV78KhqixTRAhPGbj4bm8fQmDBq1yw3fRsiA3BSaRowjvutP4V4PYdXnbXrtkPVKFWuAHmfVaaLtLs4",
  "key21": "3k9FFwP8mK96WdNeTAM3zCWAwr5KviZ9QcZQNjgMp6Tc7YY7PyFM7QQh9oYMbVfakzsd41p4s6sYbdmNNRWzJ96L",
  "key22": "oN8cnTmsBcn5qeMP8ngttQisCNNyXNL5vXHRcLC4ZvmiheNT9foMyVtggnxrQMFG595TxiQ1BG49BZGmdcfWR5o",
  "key23": "4wXQ1FvEVT5jJ8K5BCjSxYWbFGLKjSQbyhy6FF7uP3ov78abucEqsktS4gujmqB6VQE1mQXpYdmFubZjycWw3Q2c",
  "key24": "4K6uL1cpZj8DBEaGa7cd1Ydc6vUzS5hxDSiNBc2GiZbwExCtwG6ZiGftiBx2mqkjW35QJmfANwuNg9RYoM3d8oVM",
  "key25": "2yjfZLpeLfQn7k3DbcWA2TRAjtY93dfpVuWGsZVqD9iQr8DFrkGEK3fQywU8WQNcgtoWzamVmE23LnoAtvSSj67E",
  "key26": "2ReWc81yxvVaHdboop1MCZkbKc3KFw8V83aEWLS6zrZtuFEV4Zyi2w3xermemp8y5x2JLX3C6YWUmU3y2VJNkauS",
  "key27": "2pfXchwLS9rGd3HvsGvfstsRw8mf4be8KqsVvQVQCRTFX2FEywzUHp93RRA6WjPCPyJ2rocVbzrwP7hGvnEC4U5e",
  "key28": "5mD8Jndc5R7TNpnd9WAntFRCuMVtzQgfwzMLEkkrRYvvzAoTXerotfcjdPNMZYsh3DyHJ4k96owrAUykMSNw3BC8",
  "key29": "MXLx1HK7qjoq2EPxhmZAWcsyXTk1Goqg4k48CxKtNjr7MSzvwGhYUAXbFeiSyAQx9eSFw89T9dtWUVp2uqsjLgH",
  "key30": "5tTzKGuiePP4tKPe7egSJz3RWk5bDUN2aiSjj1qUa7JgaEwEXeDSUnev61YbitL2KqXsNkc2bCuyG2qxHeyR2kbk",
  "key31": "3CdZZvvhXFvaKJKS8ot5JnvhXgwhoWzepvaS33j4fTGCSVGqoBFsdzKEA6oss1RtruNjz1mzL77vDCxVWRz3WDw1",
  "key32": "5X7vnEuNDNsRwfHX6NiDgHhPAZ8QR9kT7QxJRAqqRsam77wQw4ZmAbJwhuNMxAMkmvaUnftRtgf9SYstgM3a7rrb",
  "key33": "24sTKyb8wMpgQjpZcbNabBWVexTFndihuDTpkqmYGpSbsjX5rrqWUicbsamCMo9xxXfdmNzkmoVEjXJT8EWFfNqF",
  "key34": "3cKQM6xootHFunWnsydBMdzvsrQi6JrPvCKLTQ7FGnT2pG5RLzEuoDvGMKNLysWWqbgNAX1ntfgFxpgRP8Hu8G3C",
  "key35": "3cgAx9KSJTThZdqxzBKm3Zg71S3zi3hLrLGvzkd3ttU7iEdSy5goeQtrxtjF4uTRZBARb3VyGfQG6ARwwNyMFVCB"
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
