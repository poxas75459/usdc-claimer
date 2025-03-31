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
    "z2F1Hdoe5XRg1eqv55QUyiucArnQnvEWZjrS7vJPEvtStQnJM5RZfTZBtPFpTL98Av5hLu3dhSnh9JbPFdmgZoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCTNpWYTBsXgNApSbo6MhtR3EZEJCu9HRzbUjgcFeCHWYaU3cApLGpK8MoGpavFiengbYMkwrELG6jbnq6apAWL",
  "key1": "3zZPW7mhHtygCC4QJhKnbYYuRRjCj5eU9t3z1kdkYQ7w5kcJ6aJenRLzGothU4RaVUh4CBa1DgLfpKtGgFn5UqFq",
  "key2": "5cwg9WQrYrC4ysQun8EYS3Gpmr8VLz6dc4RunTCLoJroL6MDMZMFpuPekrPJkxYjy5q4VhGrAYhtg3DokFCKbHgQ",
  "key3": "5pcmLGgW2XsjKF4S1q75K1UgBiYPvg8nPSh7cYNQdb67SuuACaapzmV1jh8Fe3nbWkDvTrA7njXRnRLSbGEcUfs5",
  "key4": "Jv4Gyu3fjCw3QiUNvT1p7RL7SUtFLBmewZuiwDMTcf77He97Qq3bGHuFVqrsmxQJR5iTpLZPekfFcir6TKRogtP",
  "key5": "6oUU9HwJQL7tt3smcTA6rU8KjQVHeWz8WYhofFVR6exEPnrhShF79RyR1NFbnFUHn1vQHusf4f64LcgPtFVDaT2",
  "key6": "5fCHiZRrPAfAGu96Frk2TcA4mZLXT3gtS21JvA4jmkaNNQjEaXvCzKLyvZEyiYb4SSUVXm79ysTU5mRjM3Yh9Wgx",
  "key7": "3vTB7PokJbewvQnjNS7NLFHMVBkjHFZAfbbsyHppnAMmJ8DS4H4bsNdTdiWJaf8Fpc7LoWKB1f4Wxrnv2tJMayn2",
  "key8": "3JrnB9zk1Lo9LD7s87pyxjByrTkHkUUUL4Nh6abJ33Mq93UZ7StwmncS5YMXGLLJJi2fSCvpQCBnc5xDL2rtfQxY",
  "key9": "317695Me9rweaCwKuwQPdkn2ZZC3C7yER5VdXXvtPEGN5jhKbojJb3xsnNWQ9UyVQyAyV8GK1n7urVoESNF6hWm6",
  "key10": "3t4HZvEtt846FPm2T5oFmZDVNd99zXPCHUm3DLTHCSVNMzcovbcjSDaPYDptkBsYX1Ck3ZTYqTWZVFi7iyE728kJ",
  "key11": "5S1KGkb59WQGKLP8nJk8wiEAsrikGufVXewQvhKapeNAFkweCYfAD9KdbggNbrFaCzN3D3HoSzg1kG1EJG1xv9Tz",
  "key12": "4JhVmgK28SG9F1T3xJ3WG9vZcdzVEZr86hSebpUkRQ2mV36vdfVDqU83tYzvmieidpvr4LSiU6cxGBDNYRA3Jojm",
  "key13": "4PjmXwkL5ozpiSoPuVXbMR2BrNn64YdeoKzoffjgtAHhZY28Hj9taLK4RpNY2HvcWMtKbwDJfzHaphm6y7zPkej4",
  "key14": "3UPziGZL9kuwWcMWe8B2GCSpnjsn5KMsmpYvTiVjWpPBd73xzfKk5fYsjc9Zw8M695yRBbktpgyxvmRNEg4QSUqg",
  "key15": "3QN936Xi1k9rc1hdeNJ3eQphnAnj6FXq8vvVnrjdFRSTqrMpjq6rRUPD14y8hb9yBaHERLJ2yj2hGnH1HvPWQcBM",
  "key16": "2r3dpnbCwedwR85LSx9RPy4gwP9EcciBXpeUn96WArHgPb8xiHnCkqGanojo3cjhfkNtThSTsbmbCMRkbsNkGwQe",
  "key17": "48UhyZ55dnSCE286YvmmP21ktbqjBQ66B3GAPWhSGwLQTtTugRNrTvmhVqwgVqJzqq6Wwr2aZ8wNfW16bFEDcV5E",
  "key18": "4FyhE4JMskAxPvw8QGUqHVERMVtT9riFzz1fhj6dC6FV9EvVhhPPeF43zm4odXn6T6DJFyKxqXwDPQ1K4wG5DHoF",
  "key19": "XRAAx43rVG59J6Ahaf9tUp8NbLidVCqFcStt6DndKcENHjQBEJLFf15kbgP5Y5mbQqvtRtRXLYW5oqmUmL5JEMY",
  "key20": "3vQtBqfzEh4HAvKgF6RdWnPhNvHVTacScNnsaMETtDKRFdErUm9gD6p5UhpQ5UiXJnc48NJDEGfWvw1xaqEBWe2z",
  "key21": "22C4v4RJCBn4K373NgyuanyrHFRf8wjnzFk1GzJDBYX8ZwEBGV9dowrTD7HroosJUYoLKAZMZmRb7UPpnS1QhhJt",
  "key22": "5QTrzkUj6tPzsT55X1zJRTANGssRy4yVkgjmZZMq35j2A9qeNnssxhqNhcFNiJ1UXVJm86Mm2E4XQpS8iTWgTx3K",
  "key23": "5ZKRyiLyrKuiet3CXgnV9xMYKRWsvL1ranQSqp4gwvia2e9GrGW9sT2WuovBLkwEdiQxdiK2zxHWu189JSVRFTQ1",
  "key24": "Gu9HNTmn2Ny44JCEi1KdBGWofvGdbCFzGGdjCpCgnQtA5wuvVNzvU61Z5bUohPNXEhyo4Ley9YZQs37eVM6iD2D",
  "key25": "4aATWTFYmu6sUseUj2V9ovrwqN5tCB65bWinW1GcGAXbnnxRdW3tzL5BkxhWEnxA7Sv5Y7n7TLAUCaLEQX3iQJni",
  "key26": "55GXh9oNGHCSANWKaFhnUD5qvJtwysPsbqbt98t9FXCheJuozQ5v3SKFuSdNE3owzicbTMnaGuFpjG7bHTvsXn7u",
  "key27": "2VY9YQh56UijtFEXFsHTnauTzXPC3Y29LVyzaxgqToY2sqTxJDyxrCeuUULRn6fMYQamYADsuVA9CRKVBv3BQNTP",
  "key28": "3woZSoYtxhXsouEGiUCrBY6SMZRdD4jjq21fFD5jEDtHu8ekaAq2sbQdezvHvdfqiJxMkfeWp8me19jFXqHDDgeW",
  "key29": "51XhddyDz8MzDPTXsc2xkUgWjoqQNv7ZHcBx4WQfnDnA2UyDy5kNjaa8quGtREfWsCx6YgRQQdZsqLdtwaSaH4YZ",
  "key30": "5mXHNiYdjK9gPy6VSYktdiUVZyZBjxtHxo2SSZBaEr1Ub3iZgFcrVQcs6Bc5FKR58FaQjxenpDYyaT3FAaUrB7A8",
  "key31": "bgtWCU4j4Xk27qswNPzZT5VHRxWBHMLgvhWC88RZHJNSzsqgMjNi9CKzPr2qLL9XyRux4PnBdj1dcBAGLMJhQnm",
  "key32": "3juQW9w8azH9J3HHmJd5E3WvBrDq7oX8JXBfUSwQ795KMxBNNSCJYZKeMuCEWBvHjfmWpF4pmfsFqoh2kzXM6Xkh",
  "key33": "2U6M3AtRtrVK4b4hABUJGEG3QGEC2XGkdpGSm5KrCaAGvqjygczAQAPZX13TsJMC8hQ9GzyXTzWEUPd7bR9pdBjB",
  "key34": "41Tf3zW5SyBnvRQN5A559dGzHV7nbW5GRcDz3M1tmLkPcgK5oPr8WF8GBU8nUBFUMAENozFSHamSUVmrXnvULctN",
  "key35": "2SFAZ3ahHzY1e4d4vHnmNj9NabSvxYT3pGaKEAdahnzAfUa7SBoZ5XbKZKTruwVxdng6MfmDuPtstLseqNTtbnN5",
  "key36": "7qXQGpZbrh3LvWhQKKwgKuNU2Q8iVXU12JFoHHGn8k5kRbUxYsWFUGXFpAfwxLVbjSCdjKBQEGSMNTWFex2fEzi",
  "key37": "26KKRrwL8BtavPzvym4hqniVfqx2uAn2nowFA6oumZeg5C7KLgDhbb2hug3RiHXw4BAXRXcWVcYm4A8V1SrPBTEz",
  "key38": "DzBmu36K8LYQfiGrVSxNQryfdA87MEciKRMhUBGihmK92DT5X7hqqXePyfYnZEaue96Ferh732yiFNJKdyi5F3y",
  "key39": "5Ah6j9UoWMZKBCv2zCsj1Sovrq6N3jmstNJbGhEctwYdT3rtz9L6YcjLk3BRgSKmbhUw6j1Vvjqbg5cy8D2GKMgo",
  "key40": "4sEbnqj5vkXDU1XyyQc6cgQiy2EucrXJ9sVg34TefeEBSZtRaHrgEvJVJWbc7dqBVNRbHDivHWTbghF4zhMVjWb6",
  "key41": "3RVye3pyBCsATgFD3oeNWwV4nmvT4HejHtb7VK7UEDAMfUcbtRGE759P7yCPWFU4aDhzt8cuq4bnbTuzegrgsmKw",
  "key42": "4HgtvhMUhYLGqw6EvqnFj4NsWbZSdEzedwk4zpq2KkEAjwaCoVgk2F4bpoUp8QJXnxVUQDYpzVsFtgCUikSG3s68",
  "key43": "4zsJqvQxh8oSk4iJtx5M5YKEbgC2wgbpTTX6wtg5bPFzSYKgEdusWGWrVwwnincRWVBTu3dT4gAYvbj7osQVwEEL"
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
