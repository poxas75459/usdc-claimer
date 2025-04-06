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
    "DLq7fbNuZF4khT4FxV2iSC2o9pkk8RNKjwTLHWxfvXX85L7si3NwaYcvHa8m8eNnAHijKdXAMJvpFz7i1mABUCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WqvmXCd9Cdzc8oBodbjEmYybpYNHVdD3K4uYdtKNTSGNSGV5mjuP6gLpjfyW2rUocnF9bgA3kG3n8273F7sk3hx",
  "key1": "5GyupJFHfFYPGbzKLETzx6PGdZsfDewXquGb1aD2LkENPKfCRDgbH3tiZzR8JQBDw95551kBdmZmH7ZXdfDJAr9H",
  "key2": "5M7hGYfAuM1zz2FZ6wQK9qcyueNdm8LtDDm1NfSUWuhJu9nKzRhDZ6N8R4LkoRnsUCueAY3NbrpCWSvhAQjVDiXS",
  "key3": "3noNqdyWwmPWiok3hf6AKUjounoVS2d6qL2G8PxiSYcwnPJEdiRm93WqAM6dsS5BnhooAQR621kyupsgGwSRBA6w",
  "key4": "LzuHDoeesHfDuBTTjqzBYBU5KKQdc4rbEQXoSK9tLPKUEo1mkwVcFqy4XS3dkKomQdxPv9eN7Vt6RdB6WR3EMDX",
  "key5": "SUwqFcc4CuFy3SJdAZLjoFR2nhiTjdf3zoXCioWPTa9S6PAUsYLtg7WU79DZzQSoKJyTVKfWh3aYXuKKoVoepHY",
  "key6": "ahsQ2TqhTcQHXXfzmmdSWqrecymgvaRXqsAvncosRM4vZ9QnGQCvAEhEBkPpMUNVKg24xz9aStaNsz2JHGmWPMh",
  "key7": "2AKdEsLn9dqokn3v7hjzHkjDfaEckyouaDcAr3v2UsNmVG8sb3W99KfB5e3XiYG8sHraV5tEQKhWpZ8paXFRKmgt",
  "key8": "2C7JSvsC7DNNCZzFScfTjaUVSynCyNcmd3zfcGwNyHukTbTENS8QksG4zDwxxMq9AQcquPf3XBYji4kG9KY3DCDf",
  "key9": "2KEZ9gREFiuDAgKtJzXz3pai5DU8tLRPrrVhJ2XQ5Hcca9ko1TP8T38Xnhb55eRT2humzNiq289Xw2Vus2TUz9GQ",
  "key10": "5FLrMdAK6SLG59HqZYX4VnMY5bYLYpsg7Cky4GKEfNKtVYJZfPmosZNXiKA8CvUFdxuAxLRGa8CE76T3SRjCdw1N",
  "key11": "3KWftE7ZPSQweEJPLLLf2ZvJerMt9vKSDFJkMRPARBJKzVXPkwrMQm1xr5X5vHQMpiywnAhbTeYSEnMkSvWEhTY2",
  "key12": "sSG6WUJMYMwnK7DDRSPHx669Mmg99CiC4sj9GrEDMFQDETseF6VJxXdh2oHyGGLYdhX3C3TugWE3b4KxxxdxbHv",
  "key13": "2Qgeee7yyb1EUVLZu8oxd4UgTGhTzCuxGkzbMGrmXAv5Wrv8jAaWdoPukH8JHUfuXfsNLF3GMqwtVq3psy7kV8GV",
  "key14": "4v8KkTmJXhvsxbtw3XGiKM3D3QqZBbnFEBpS8QEEfbyiJma7i15YBKSDJxieKwccJVinATX8XKmBwxbTKptCYuYF",
  "key15": "57vJxRXrgvoduPbQtiB7m6SqBs27Z12cTqVMfxXewwLqQFok81o7EjjXVcsLnT6TqgwWJEHw43rC2MmMBheAk34F",
  "key16": "53c6MrVKcdveS7VH8hafhuDLpAhKUCgRVwPe4ohqHyUbYgLEsJYzsm8ot63EKMiXYyk281uFB2W7eWP78LjUqzaQ",
  "key17": "3EmrLCWGXsD1xNV9VrWEvrErhfqTLWsaAyDr7gQX9VPqJrr89mgrSfd5k3yxikNiJ31aWTfFGDUdLZkoeazhTDrM",
  "key18": "2PrN2CRg7Lzor2b5gFHbG4sbqfwg9gAsqbZ1kJSXKdRSKnDu9fsyYALqGPFL97pu4br8aAe8tR8hxxh64rbypdRd",
  "key19": "4WzTx2nn1DtjUEGDtA1J93gsWezQvT3mq4BboC858Qz8tte67XWaexJ6YQcatjA4pMzCx6cLQhDsJHyPCEaXLTbh",
  "key20": "ZiEpZxXAo35Kqrbv2PScn89egNxWQHXJb4oUrUEjZeNhRY1YcYqRtbeuJN9YDGTD4PrG3F1syehLXnm2NuVw3rf",
  "key21": "3SJXLqXi9n9HhYAuwgWGxJGPSoZ3oahaYrkxK2XbRzNR3zaQBALJKzsbPtxBqMw66yN7sFMtyeVqAXBd7Jiyvcr1",
  "key22": "4RbCrcpvBRHnnsfTQ5L6LztXLNpxsueebnepG4tGSUys9hXbZA89ziPVg9fmQSa5BNr6AJJpS4z27F37yDko5UyA",
  "key23": "2unBtZ7U2i5WAcYS31eDNgSaqXJcSJ2NNw9pYnbytVrRDTttaJzMco3krZDfmFBxdxjJ9getPkDdNao5prqHhqC2",
  "key24": "kkxsVvbghscYjaYEuYr7tHnr9dMJzbwMGMmUf44jxrj5t96QeJVmV9gkoouJ75C5if7Fupnq5vCCjkZqoTMRS5w",
  "key25": "5MqR6vpMHU54nKbGPATrwaTrBYUYcXSFidDopMnJsxFKQy15pZAfuajbHvAGE8X21r2piRVvzUnY9CZVZT5P2g34",
  "key26": "3WPDJG6ABQpen1U5egYMbcXzwAxWN3w9DNTt7eq1kF2bjCkJvJkjc4j16wU1kpUAP31nd2uGZoRMkMRM11q5fWSX",
  "key27": "54zMEjKv8EkZk9sZSX9mZFtogVwnCnmuZcceCS9NBCYCfUC9NVQN9bMMzAPB2HvWGFAXK1JBfot6STLUg5fTdrFV",
  "key28": "Eo4p3JUtKwQvAYwPvvNsY7Ej3SkYCA8BKgtsYJnyBaTvh8HMqH9H8ory93pBZPy6ByB6CgJJLgDAtQ6rtv4MdhU",
  "key29": "27c5KFXLoQ8GkeKU9fCPGEm14Sey34mGMNpWujh7b5FgyiWMAzrZJECTzhasFTY38kvtK1uSw8pYv9BN4B1ZHTqe",
  "key30": "3QeoriLhLdax4kYqxjA2dQv25K7UuWotHVaWyTUH6dCWnWxkvZt199TNUfaUZS4JHtakHuybrJdBFjrXuqrvX2Sw",
  "key31": "3THyGddXuxzBfkbY5vTuFQSnyhqCfg9H5RYTvgEopod71RxGJWnFveYxdUimzZkwrPYGZ65qpoPHRU2fU9yecmvE",
  "key32": "sugaxFvMP6yeDCFe5SXnyEMq1LAQZ473vnKzuAEQXQkkpw3h3tf2bfT1acnPLLkKnXhM3VAFLtEpsNQ7N67N1BY",
  "key33": "2rsvsHy1qAn7CTNDE4vbpDLotTsYX4AWbPr7yiJ9imNVEQHS3TKV4FfS2aEvqZRS6VpsmW48tfr5GkiPo7ocPV1n",
  "key34": "3BhaXYtpEcCa41e5Sg5R4qArV3Qv4mY8TgRbgstKhJDwuqxQsYBgkW1BhtCJYTPVfRXo8xfUMEBoUQHt5tAqMyWR",
  "key35": "4sgKycH4VUYdBphEX68BfQ1zAT2ZaNHYmYQLL13khRYMmFNyFsKHG3D5ZiG26rHjTbhYRqyYKQrrEknyi3NTjFXq",
  "key36": "36ztvkpY33HrNs6pTe2y6CTaBUBQMN5SdKWo5c8syaPPRykYFwsVsWvtgJ8xcnt2sm2YK8eRqFQHcfB47cCwkKWP",
  "key37": "3EcbttABiAh5SeVVa3ywneENkWnUp8NaenrtcMUSdVF4NHefhKWmuYm47Lz4SxF8mXKTpPWHH2RNHJqvKzULJ8Ar",
  "key38": "sTagj1jURZqnUrvkpzktTjsfYMeWJRM4MVdAdE4cfVHTKooPVKnKwxA1cTNrNwypWrEwsVxs1cp1JPpgLUULCNd",
  "key39": "2uGke5ZtFaPA89pxB3yNxaBZSuq9tmK3AixWK5Gxb7khbVbHzuuGWnjjiH6MF84ZWH7Sd4AHMesYorVarjH1YY5r"
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
