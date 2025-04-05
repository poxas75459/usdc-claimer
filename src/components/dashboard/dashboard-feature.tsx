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
    "4pp76i8x7958AdQwPEesRAtMfdRoTinX99z2kksTVq6gYzp2QdfUa3RwyXSaKVmb37LRzCDYXD1t5QyhpmantS1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evhygNj1muTfDxbykc2cs7e349xE47DXsJdVst1aQbBDb24ZkCFWyK2ZAu5twKgYjC21wK2K3aH6SSHxuughmdz",
  "key1": "26RXKdvnjXpiekQoBss8amAFQQycCXrLt2exb5MQDKEHHw7MWjDyNpFQERxvJhBCQ8E6qb8YNAqRrJj33g5BthsR",
  "key2": "4symPHgyZpNq81uFKGvTyHQHn9nuob5pwXDmbzzi1FVdCPirfiRTdK2gh7KoBU7N4RM8CVGYy3jFo6BYQP4tgG3",
  "key3": "2MdnGjjy7uhgL3TXCxp2sYiUX2dBkWcp9HzAXAmxrpuSF7VP1cyektHNmtu2mEL4TGd7yBsVmdfLJvSEsoKevtHG",
  "key4": "4Eoc2mWxaVVAyfwr7tijx35TJAtNs7KSWtM2ehjewqsPE9eLdkk4RxYA6RhjfM6Ck6YFqP4zFCYw5Ps3RxZGCqaX",
  "key5": "V6hrEX6WNWc2WBPBDMcmrXEYVPijHhzCA3Szb1dyTphciBWTXrtsPFUkscQf4h2BkJ2nA1CYzxBtTYcRY8wdV7x",
  "key6": "3o5ABbMy2PXHUbd1yGoThGfc96LjKy2Yh539HyRejUbmNA46yXtax1LbAP3tuwefeQxgfAfysueF2FuQCf1Z6it1",
  "key7": "5BKXZZLJp48UHHSFonbCkUTWvHKp3ZrQ5fMH9ytLHufLBLSJEUXH1sGLwoxUS6zLDxdQNTnRZZEPJzfPqXgdDktS",
  "key8": "JzQkyxZAfDh5nFeqyM18PUZy9Jym6JQG6RPXVjEgxnFz9NMAX1TuUHhPjFv8xYh369hpRCa3nBKwyeek2fXySJt",
  "key9": "6qvvRgzVnL1L9a3BdurZogiHo6WhQB8e94MfTFB4LYKPvPm4BfMNwSbuwRotsYWnxVkwfEiUSraEUVRXRje7stB",
  "key10": "5z1tK5cYH469CPWA1vcPDoMEEo5L9K5mmi2vEg3ywupUKdzCfRVdo2WQFHGoSZ7kwPzAEZUST3hvqKdyQyUG8tn3",
  "key11": "2ZEpffyN8wCpBU6FSwB9EoREAQmXKR71qJju5MxMUxzSk4KYZzAdRDnaZoPyNYSbkYTiLshyJ7g96SppR56uRFUx",
  "key12": "XkiD27Ghem8YrWw4338DXx62oDcCrPbHfjqqB9yEeSA2U1TLfPjC9EPS7HFqQv5Xc7BsCjn9qrsiN1zSkErNCMc",
  "key13": "2URGREru1EjXW3Zw45EFKUehBSW1XFTJcEKKPwcgUf6auY2FrUNXN75ZQS2Mi77RqdiTn7VWiY3L63vnsF5S4cT9",
  "key14": "2P4QivujoqjAKzdNfAfQtqrmRnKQroAGCAzbNz8zm3NjDiFWxQBW4bNrAc9K7qoomxgggGjXNtfQLjcXXqAB6EvZ",
  "key15": "66WgbB6LbcEfJ8t4nsuz47DDHKybgQJqPzx9GJRDNhxt7gaKKWRZstLxdFTzXqnMmieEbVxNrTjkWZnf4RcuXjXC",
  "key16": "2acR1LDjkRK2a2gU4PVuD33yij1bBxzENmCHLwb5iZ3YR7LNXXvwU4A8heSdyZzuE5vGS5Y4NyYDs8VrGkgtjs4Z",
  "key17": "GB9SzAerBHENfKNBUeDNb4DpNz1hdUkGK2siv4Csn6mXG7HXANUmGgcScfaN7K8MZnkwjrfvG7A1mMh1kbXSh1o",
  "key18": "2MEpkGWZXBfaY1uN6TvRs7d9GZ6tk134vRJz6oVbQ5bWndKe13qYNwkJXtdNFvqChmWrZZhtyWi1JdQWd8gFPqR8",
  "key19": "4uiBqkCquYQdrPTdgu6Csak8nusQDgvEQKQXauyJ8gsiF4CyKqAx3KrVrMQj5QhePQXHDjisp3z53SyasDKTsFxJ",
  "key20": "5zSYeyJZTtr7evr4TcyuVm2TbM3U2am8KxKjxPcEvNhrfToZKnZtcM25QJ22tRyF514jASqyoJyWKwS4gZczbQ5j",
  "key21": "2RhGXpbiZnV6Jxg28DFaW1HBJoM5f7fRbff2bqSMKvDhe1muK9Ff17EMJwZRK2NJNPgi2nZZmUi4hmB98Yir7gmS",
  "key22": "3hgYR3Am5h1BbFKmiVYGckeg8khkq3FFbMtRtTHnnbjYGoqwDznxvR7CJr2G7jC1UeSn91nwLrDkbiEnovdowhdU",
  "key23": "4snHdd3ySekNktprbEX7samT2txR4yUsP24MpMBRCUdXH4wRpCvHRw6Rs6F3KYzn7tdvLHAYapa1zjXZDV8iyN1V",
  "key24": "2TePpm22kuuoCpd1ZKDQX3BTPYKc48u3keFxNqjiJvRbNADdkWoZ9uuHZShsPaDqpy6pCseYXm6mRHvbDB1CDsfk",
  "key25": "2pFXgQvKyqPRBX66fVkiaVLbkaBWaMGuYBFPrtnhFNxCLDJbtyx6Xsusu38fx3fqt8f8svvf3oY1wpA4sp5kVwgu",
  "key26": "584gUjF5UDyuCPwJxxncs73XxEXtjp5fX8NRnYkT1uvJDJWK1nzEnLLa6JBbNeNsmjUV2QMp2pCKSpGEoWRX9uUF",
  "key27": "4oLtTUqRJjPqwNKEfeK5oHzZD2RuvZQcxvdhGwpaT7k9DenrmZGmzbdJGEQa4ddANs5dv63V6NVyv1BMhaiqeaGm",
  "key28": "2DELMJ7wJyhfaf1sDmDi4bQ45LBRA2u9Br8Mby1ATgKoeL5mS8ArNro66aFGsHQQXw3AvKJGx8yoZZuVNxygZE8o",
  "key29": "3QCDwRQGWwDeEEX3jT6A7VmAvKpZCDktvZKPUXHFooWnrwaBHn4FNJXMLRJQjJSt7Hjbup7dMHJ5GWAvK95NbHcs",
  "key30": "49eCmkmnq7KUq3ooshxwkVWRdEAKQaseBPaJvau6sFcaBQaWp4DkQcYhvFC2sD9iENEtKQpTR8Ujd8Qt6dpX9hJ4",
  "key31": "3Qm7nkUCUT3Rf91rYWkebqnsSJZHDt8UFHstzsWUCw5RvwoPD9DTQ9mkTCPV52BSum3EKCn6AUuBKpjTJ4QFHgYm",
  "key32": "5qD8Rn8TRvWu3rCpLkUrbxFjppFzpHv6LqLzHWM6XHKmwFW92ZTW1rf3hzSMxZA3qyHSBPTEb9UnQT1oHgWFt3bf",
  "key33": "5CCCmqswMwVqGHfHRD1eKqqA54uWHQaY7o5JqbeaypuoUGon99YZpAaMbvXg8GJ7N2vuKoz5pT1qhBssXwLq8xzp",
  "key34": "4noNHHFEr7wi7mhaABNSD6XiE6JtGC7iKyRY9TEDDXXfD24vfBdYB3nqty11Zzpo8FfTuze2MdHLqphnDjUbGKeM",
  "key35": "4rhkmqVzdBDPGpRjW1QUMsEJd76hKE6JP2XAPwoT4NYNdXgaeTWmW4X3o8obxbSDSHf8q4qkUT5YYeRCur6ZfVWT",
  "key36": "2yp7ebrWUwqiUMWkYnkk7RPcWqMxa6XDF99GHrMSD79s2yc8HFgRkhjvPUD3meqMH5tFq7yDJgSNdYr33fACycU5",
  "key37": "4PacEpprFL9gqcuHu9rwdNuzQ5Tugr9zvnonfQFvbKt4iVyRJuyEwDf7eG4NZhf6SP2upepNVKNghqLjL64HVVM1",
  "key38": "5To3T1d25rNGMvsQrhgrHgXa2sCi6CrbKAwvJtrbojDBDuwA1krZZFLGWuLc445ftuKuuKxkYJUZejJW6V4neGZX",
  "key39": "3UDNcJL1WbN7NUdp7YLAbcYqqLT2qG99hLr5xbG9hddxEuD3DgLT7cuhrCFmTrqaaAtqZoV2csJc6RKr6bgr3AGG",
  "key40": "5QSqacsjPkzcNtARnDZLyTWxrcu3bWidHB7oAcykTj4j4i4Y8eFR1dbsRhytXLFUrpbKz6NEtp7PPrQNewXdN7mQ",
  "key41": "4iEqm66MEsxjvs5CV4QRMCBjFU6QWbcwDYmgLWYzEofkaXeCzUS7Leb3t3ie6NedwH1ogQTkyzYRiU5Li4RmSY9t"
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
