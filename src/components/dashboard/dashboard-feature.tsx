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
    "4ensHkKE7qQ1kG7oHVKJSY3UGFRVsM4FGBde1epeHTFYdJScDfLwbn8J8JfivPgVX9eMWzxEho3aUdHK9kNZF4Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HpkfGsa67icPzF3y9CHNvERpKKT68J4oqZCrvFfYpgc3bwFLS6Vsn5idfcmPFAhC6wsEeApTma7gTnQRS1yTTX3",
  "key1": "58sU8hvCGZXSbqyt4vZ99kPNdPYhLvCWX2g8bFfWpdiaaYp2qgpHT7yh6WxqvmNaKHCuMSBkC1xEtVDo1ygcWjEz",
  "key2": "5LhX1CRQgqdsTxswhEbSbMw91CRGAXqXUWcADyLYKSmtUnUaT63uPEF6RC5shwhHaP1EkmaQuL6LaaZoBQfg89zG",
  "key3": "PhgAiihJDJEtxq1cLaWSuxu6PxEEtt5jzaWmGDtsNbueEy5QzNgVchxCcW7HSsixQv5i8CUSEmVqWUiKTH2Rtzu",
  "key4": "5xBCx9GjkexVuEpjCJ45x17eMAUDKWZZao3WbHCqunwVWaYFipSBgJ8HdDs4GsqMMQRpfctLWKuRcixx85iKFzfW",
  "key5": "4bmSsYTPskRZEpNabGXDsYKUUbLug7qCNSPsCsYNeNBP3vHaU7ojJL2Jg3Q7EhgoAW7Vi3tXe6GfD4FGzEUFdkpb",
  "key6": "2ySHmyB567NMEVFvnXRiJEspyroDY5uRS9NQr3Bf2TrPQMV11L2GLtiQWc4BkxJEazMSKstJpBpv9uMuyvvFgLQZ",
  "key7": "5Cn4JjWV3ncbP65nCivXDKL3nucbd659zJbxTtFTMzuBbsCuwuDnBxNmR9BpignrjLh7xAxskx9yeohiD9GHjVWU",
  "key8": "4QoaxEpHQnAVhdpg9KL6Za92dy8D2uxhsis1KVsK9oGXzv4s1caQaLQv9zK9ZH8UKb1wqZXBYT49ob68KyLcPjQy",
  "key9": "4q5KKmpCPP92eRq8FUpjEcZLmSxpBHMTeC3LUVHjjpdBGfmTinJmPVKYFcfrqwrMxnQs8LvUaeJryivob9Vh3BRL",
  "key10": "5MMbVFffEX8u8ohhuXnkZyfHVSoUiKWoFe5Qb1XnovMXdjjJwJ5eD8D5misjuJYZvuoT9NC98jGQXXHENTEoqPMd",
  "key11": "2mERK2vC1gLos5wDBUWhjFoAGseB3pwThkAisRepCXXDr8Sw6cUAgNsLEKqwGNKyzCMTaB7ifksTPiXvv4FbnZ5P",
  "key12": "hKJzRB8xzoV5S1giahXZaTA4APsBekmt4aa5om9nxQZbMw2Z9YEeAJ21MD3uAEMCk8Fi9opJHfLHMQVhWqkUFcT",
  "key13": "4JcETH5HUNy6MoWiCqBPvk4XsJEdCGh5jFz6TxJH1iLgsQ2gMPi5wrU93pQTA98q1ohp77xeWbLHEzVsVJrEeYux",
  "key14": "2m8VrgX7pVu8o4R58uRQSjr2nwvmqRrQKCavZuJ89tZTRazWWFosKjmV1BLHacJp9utUQghfZefnRKbNJ7qiKsK2",
  "key15": "3u4o4hSEoxhYriV4iqzX7gKKqM6y4AyCLQD7SNdKDVRwvBqKNhnkwn5tmLqy65tJboM54y5yyK6oypkN6JrfwEbH",
  "key16": "44VFus9HPZVmymCAyrvEUvZB1yKRagKYpbVyVUcdtGRr79GS25KytFsDPxLiSVRAVK5ohgNSA4Tcg4r6bNpAGDW",
  "key17": "5TsPmKPZG15rBCNXmPK3zfF7ZApNTJqzazfXEwzoKjHQ3r2R4BvqnQxXxFjruDCtwMG88XGyVaig4oynhrQTTMJT",
  "key18": "fRRUTAqMXH9Cr7tDRgm42Z4DgHfhpPVpFkhqJjAEgkUkuQefBBYZxAX7foqN1ssmcQamyg9sqjbZg9QwKCeSzrJ",
  "key19": "5VnRE7UgiJXsEwg8JXvdfHkmziSY73vYAkHnLCYBfUWD8KTwyE94notkkAEQae2QebcfhfNwcCr9Yy7SjhVvwXxd",
  "key20": "61x7N1qCLwFjVBJ266uBcNUUfGe5QnjQAiuiqxcCkakjfzwsiUu7gxhZWmRYXq9NJpVhTkLLxtR4DJdeMk7T4YfV",
  "key21": "5nuazBJSKuCpnoTrbuz7ZnrAAihS6JnSPS3rQQwbqJ52pzq6unCmAZ6J4h3H4GHFm1MXDph8V3cAHgVToNFMYro6",
  "key22": "RZEcFE6ueKRAZ3eQX9NbRYJoJPJd6FaeH6WQvGiPViabXN73nTavQkJDT72VawJQnuRwJALnoF2AxxZ27yoENB3",
  "key23": "CpmQ12V3PYKefD2r9KYu2x1Y6yNwzk3i1RmmErYjizAytQvPamHJDQEz37gpUqFoCwyzVZmmftnBZQ1efg7uRge",
  "key24": "2uKSwzRkZWAVskmyQgo9L7wDPPzXzf4YXHoi5qVV2JkWfHPQrza9BzvZYGbgLgficCWJmkBoAnTeg5WAtRio1j1G",
  "key25": "3JmVLu2KeiMxFR4AXRB9qQNbvgXwVSZe9JsGhfqBsBa7aXCuLSMgjPCYsdDzurXMwX8cFo35siU835GDh6gXcEaj",
  "key26": "2Stdz6Z4n5tgQzB6BsWRcpbpiU32j4i1Fi4ikV7Qwx2vci9Ls5v4C8nSsSiqpXcrWgJhdfX4xMqVxmfeMKPkkGW3",
  "key27": "3BhM2zPeGwAqeLQKFKorEu7xrrUmaEMj8nKNrpd3V7gffRjvucVx5QgtAaJhienrTWmJEs5q5Z3Vjb1myE6MA9Wg",
  "key28": "51KuXncHumtscx8kPdXFn1aMMcKutwJqjTRhNHNEEt8XoZ2KxLkCovYEpfnXLyPEhEeRen9eUd3AHJKeZGqNpKJu",
  "key29": "4TCBcohAUwwbpNJnpjSvzUjCRKS6WH36A3gMXfhujCrmTJsLeZYRaUWq1yCgDQisrdcypWUzYhPM2dzjHGd9wCZi",
  "key30": "5tVc9u5bHrqxp4GvzZw3vFYqqwrCEXS49h28WvV4yBshkm4t98nXjYxEY8oYVN2ZqSEb9DV6gcDTLMXm3vhPnhm1",
  "key31": "5Ly1nnMZRAJHUDa23XT2NgCAwA9xewPqEUVFWBEUayJLN7CSn75uhEg4KCjtTE4o8dYq2c9iWh4ZbDBkTNi3iuAo",
  "key32": "25TZBSKdgJUhb637DZGoZ6ZFZg5o89e8sm9j9wa1pd1aNjsNvAkkNg5zHWxSCyTCFs5NVEuHKCeaWDMaZsi8VzsS"
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
