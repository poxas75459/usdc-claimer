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
    "2uRdZEQmHvwsuJ9wFvrPk5xqCUjBknLipXSqbyBLWUjgWDPfkHdCqdGd2bKnxYuQ5nwyEBHyCskAvb1rdbXGeJky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPVHhCqqTNohzJCudCMLR1dzU4UMEJLjKVSZYtD9yCqwPjyFKPefQwyR1r3tQJgDtkYL11EeXDzrvx8baaVgA7i",
  "key1": "63fefpw5QEuA61WFGknMdXkVhDDwuD5bap63NmpDXsee8mE8ytoU6cYMMesFPMV7JoGDZr29HCt23txpBo9t5YmT",
  "key2": "4X1W6PkXGn8BxCB33Ndvu5sQveFGJxevqZsuGi58NsvjWHCg6pfAbZ4y7YCiBk5SERCDRGpjkkU15r8iaVbJFUn5",
  "key3": "5is7FvgtNm3N657smNhjpA97WcfcVV3n22gk9RabVvSnFVqApgaJCfuMdCwJSMYKk71NPB1ZTnV2xGmrDcXPieCM",
  "key4": "48TPkeizWoUmeN7fJq96jJMw4M2rKAq9D5G8kzPr54iwfX3HigBHZDYa7vZibJcNZ39pmKrcuid6JgdxECjdGjrj",
  "key5": "45jhC8NVeSPE6zwE1curRZ7JgRLrr3Pbwh5MFXbktSuGLXBtgQdaJFZbUaC1ztGv3wQrp4ipRaVX5SZP8qH3mhSR",
  "key6": "5Z8wWSXaev3u2CuWMxXzNGS2F4t2E7wzTqsHjxvibmStGQbnffb1DvXF6JHDQqQMucQKg3mvfAFsAUu9zt4Nr3C7",
  "key7": "657f6JASCjbv8Cy814iE2dJwJ8BJKdk8tvkhjS3MnewKN5Lr4DqdtUizfC41pEQmf6sHgLvf8NWtT6JRhpE8iJmY",
  "key8": "5of2FcgMQk2BpHZNfeqC8ADaSYnQZRWjfioP8qVz8XvXC7M3EGzey6UdiUZQVp6r7StKXzQuPENTu3q3CZQHQM9r",
  "key9": "2JS62CnK94vKXjwHmvy68wjCKtjs83scKvTkgejaZDHDYftF3CHgFLyygVGRsmo1S6hAj8gNM579Bo4NtAn6KKat",
  "key10": "5uRwcNvhK4gKctrGkmD3P8j2PpB58hqvuEZNNtoyYgDrTN2vzQwx4nBJA767TtA1uVmGA3rS1UgRpjev31cf1oHc",
  "key11": "LxDdu3Mg9DerScH8zqW4k6tkCsYpwNEnmLYXmzsCzWXgzhmqZKR3AC3vjhgYXBaaa5RCPjc77ygtqj4TBBVPvHP",
  "key12": "X7SZ9VwZHBhF7RFpWiNmhZzDWgHkkJqwLw9toYHutuGby4wL2LUMQN3GkD6d7WYMyDfssY8bHmdunRz8rwHETeo",
  "key13": "5QAEDVNVPbbAF4dTH3qJSpT8B6WpVNCfyQBSJPZLXzDoEevJMQLzPAEt5x4EhMdYzawVniFpBZ43GmWmRUCbG5Jo",
  "key14": "5ARwUqzsyEEwJC8VXYSN1ccYhpDrsaKru3tFNQZQ5G6NFWSnkkUmEeNQiknHy4565JrZRLzK3b5KkrDPTT81uxAq",
  "key15": "4U4WGzTLqoDqUwyFwhQMFf7S7aZqC9G1fkoXaiRfGa3sY1SgSJ6TTgFVGqKFkRxq6CPLk7SpHNLMVvAPX7ZMyQaJ",
  "key16": "5wSCFMosB33Ax1VqGWdXxUPqQceKZaoRj2pu5wDNUDMXrp443MkoKaP955fNDRp6qhDpZ4WsFkHEA4KQ1eHWsmtz",
  "key17": "5QqFtceWyhrmdtJ7cgaFdD592TU3CASGMQcXUdxinYxZcaBGSKtEFEQThS8hfEmsYQavRr6vAoXqtTn3ACVn62cQ",
  "key18": "4ynm6n2bAC1Kpzo3RjR96nwJJK7Gi1VdATfDCN6CCkoupnTKLgi11TZAfLAAqRDvZmaz4oAH46Zg1Jod4yA1vFdE",
  "key19": "FrUf4PcVUCTiEJ5FqqCPg68wpDk4bzmNuvwzBXdosFRt7Zw6yEdNt4349XZqqyPXKcLQGZiR8M1jx432j59bUC4",
  "key20": "5pLkhxsxKgS8o9AGwniKghUtbXriNtSgzgpkKSdPaKd44o48kE1RztUvDXL6NRMoXGCvoQF3TBvw4r1EwadpohMi",
  "key21": "2XvnhwjnbjPUDCqoKDmXMkBjx1Yh27Q9YmeHat5YihNBdFrHBkaTU3KeSp6z3jm7tuTvPEw9GJpZRKrMJE92wUFV",
  "key22": "4Y6a6epk7pthZxvwQYwTzB8ZcftBLmRSUy4ECuuk3c4dQf1AFKnkeWon5moMSbTVbgvTDVMMHGzNJkw1S9bF2ZXK",
  "key23": "4zDjZ6pJAfHYF8rD6jGbCttmfrY2aB4RJ5WVsuot9Amp4rEPsmKvShLJpFEgMyMx8p8gRexKv39Z2rhmALEU8hnB",
  "key24": "59x54MjX8PDrciFVKzdRVFFCKYt9S5YU59MUUMjbA9s2AxLJB2AS7R2Yh3KmPex2dCUgz1XVo5oiR1PpB3ycwTNM",
  "key25": "4qqPADNjateio9d9QDT2RqEtgnoX6wPc4xkZzFkF3s2BXHRbnaBPmBM4in8uBXb8HLedxBYuryUsZxhbawAHD399",
  "key26": "2T8buBEaSqAK3S6wLmXiTFUHxLRcfpkYYQtmsNfq8Je5kmJEjHuwLApmiJJYU8HnzzFA88vyWTWbLgzHgoYPaZre",
  "key27": "5DGw4G3SXioDVGakHT8K8nspeCiRrozmh3syZ6j89uXL12u7S6zJJJwMsqdRUoHwWvW5kWymXcGkW3DrVUnUaHvu",
  "key28": "5vWqLxHuPunfGPNC2bK3Qwo7cUBcEXNCgAxBgwEb5eaCfMwYx4rLEprMYDUrmmM3UoTga73or8knvoMJ8Y1YNss8",
  "key29": "GU3CD5eft8PPmCXA2ojBHDxdQw4FsGPJ7iLktRsbADaHdmfi6DeNKbNrunMJYWTQpNFJwSs5CyRGLp9e8PwGtK9",
  "key30": "4yik2DHF7MxZryMihDsbF3PXwCtigbofbJk1FeS27KqxaimtgpbNyTzhbdNdT9actECz1aSGBMqcmsL6pucjYpXN",
  "key31": "65qcmHhp7tfBXoBfZWMwoQkjASDsuZVaDymJSzXa2DxFiKySHzs7bC6US9i8TXWoi2epHcrwdk4CPPmznJBESiWT",
  "key32": "2Mpb4xACNemTNpTLjaT3RJyQfMzWRz3texzgDfAfJm6jzL8h7REhtiPLKZGDKsaRj3T893JfSdxwfGpKmcvoxyzU",
  "key33": "281swUwjvbBUqPTZm1YXLifdp9f1iDdgqT9PqcN8oX8cu5WmBwLbeRmsSLJActvX9jGuv663NL7PDo1EsomheDeV",
  "key34": "2U8hubk3MQRkTwpTwXz7oByKyz71x6XkZ1rnRaCfxUHC3MbmEwyc9Y47kb3kAPFp5ypNmcST2oqrr32epTtHEMyX",
  "key35": "2Mv1NrAKEMvPZfqRNvwN9JkDHKBPijjU6MrWB4qvrKUeaA2F7zih9Ph8Ugb1c3QYUsTY7AFhcMKL4zzdAtbBwKe3",
  "key36": "4oknrhTx2paASsyFaorxaLW9fNsDHCnwVTdSnZeBYGZN3wZvhsAW84cgeCYHiQP54ti53BffdwqtnT4gu859tAnM",
  "key37": "5p4oqZT4qesJQoo5BE2mbBNqwf88HncRkszrMN7mfAUE31CHp6w5mzQ5LBhDkG2tDPUNE3AFXJ8s4HRRDJytWQvj",
  "key38": "tWYiVFSoRJRXsPojdY3farqpbirPRHaBKd3931gStWZZ52WTmwxFF39FUCA43yTPptuDrPm9FFg3s2FTfJWMGJm",
  "key39": "txQwSX4ShKyZTcvdhrJda9rgdDdEPFRnJjcnAe8p2c3gSZ5qUTGNyEpxSD73s1WPdTJdJvU4kUihS5GmbaG3a4U",
  "key40": "3kzM7k6UbwjfJYgWKj7pReKBT3QPCcVNV4SurcuY86HXJR3MpCBxq2ygmxfW8eKbJzbjjam78C3FZ2U2RMW5dH4c",
  "key41": "4NaYM9PwFZZb2qup8MB5CEBDFssQpBauk7CNJ6foxwM93dXSq5FoHtBwVQvzkKgcmdnoCHBxoxLAPTQ74Wyox4xz",
  "key42": "2TLSpkDRzZn4jUDTVERUoTc5vb4woPytGmzrajXy8eXfBmTvfa1xwTJmGqpH6V14fAUBS2KizTr1hJBwdk86jHnu",
  "key43": "4Usa5e8kjKcWKRDakwtnjFYJhVbkLcww2tUuEcnRd8TZa9dUCDu3PeHd8zRPEhioyWbDWyiPmHkFA3JBTrzRgqes"
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
