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
    "2mExmFzo6agWHJXSu2AHEAVyxGD15Gh88EpwuU2GoTRxVbc5NeqpsT95mnGJimXV5K5bjHhYdVQ9jLJvsWV8DrvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HVmquVUhxZ7qxjigqap7pu8KP5WjPPfeNbuaVPSiaZewN6neEBBeqib1k8ZEt64DtoFjpdGXxmVxp7yQrzpuz87",
  "key1": "2Pb3SY6j945RgriJ6WtUQWLgNGYfnkLiMdJ2iCYzivAxaXwH6rUYDEeaQcLtdxcdpftFX7RCy49HBtWc9Sm89Xms",
  "key2": "K6NurQn2uQ7v4HrYfRBsMrnM46iUhyNWa8patUCk6aRWbscWtofXfzqsiYN58FjEZLq1pnCar35QP5u5tfTiY28",
  "key3": "4UmufuAXjGasWQE2Q4t4rxWMsh4d1P3ZXF2FpoLTuiJK8QbKayRbv7QqqknFWhNey14wnZtNAsNYYmh84FeBAdd3",
  "key4": "44FBYYDapWX847aQ82Q47p2ELH8QbLqGyUAdHvusYrEuvcP4gy4GeUz8pNDKF3e6msKBwg2baQwNSxs5PrqT5TC2",
  "key5": "5SWhxW1Aa5oqWN65UvfsSfUdGkjKdppoHsLWe9MUQRzBhHTVwksNmy1xbZjbHgKw78VU25q5qemZ1xxYyM3doCDy",
  "key6": "5AyQLmn9aP3Ebb2VPpDWrMMJUrHtnyrJcvoNjvwuY6f5PJFLp5WtcB94MW8vivFvKVgRRMb7DbV58vND7sTJGyYL",
  "key7": "4i4YLw3nhUkjtrViYmjPsZWPDuogo2n7ihX7mM6Hn6Z28AVsM5BKiob1TxksNAiAoonc7qDKjCnrvQEWvTGjmpYT",
  "key8": "4wua2hGpK5oZgcjxPGUkvhwpkki4FpM8nw3ugzRxtbPvBNLWDUjxdpLjGQRFripgE3qcpjvUdABcZ9CZwc3UYF24",
  "key9": "4PfYyUfREcvhXLsG9unFf3xsErRVhHAJRWRUCkXXvDKqSdQQyVXbduZHftAyt2WADZLDRR9aUqAYgkYYxQaZeFkG",
  "key10": "2CJCcvZTcEtyVDuGzNxDiiQhu2MpZBZfq8tPaCcwKcygMihxtgHHLEiHAoN8hnW3LieL8eaHdjY2wbKMZCeU6t3h",
  "key11": "v59V9ZzKuaTT8M6h5bkQmZDXfGQFJU2VPLZvXBPyd43iAAjFhQkp8JUTTuGXAqXPDtbHgGYQa9igPCHk5vZq92j",
  "key12": "5qcckd1X5JdDvxji6bsovRnuJpAP2WxN5x23h4AusVCEezioty7mifpRLS3sPopxmvtiFTztLiVs2RnBXbTRBJHZ",
  "key13": "v5i5iv44iXvK2aVsyrcXSYWXc2Tj2vroS8325USX3NqwdbrbVvVk3Tg1KRhujspPe8sAQZR77xSRxm7MimvDDXe",
  "key14": "2Mim9RTLf59AUqax6qnH8bqKttzVAyaroRYwQT1NYcQkKHFd63HjzRwLGetyLEFtKSpK4hWnVXwt1GbxJiqeyyuE",
  "key15": "5FD8s85FnwJukw2UFSsPrxNsda5P18e5TyZ8ABAvZRHYkrCViHhciQcvub8X8BuTKiNFimh9Fc8GrWMX9m66nsqd",
  "key16": "5jAALodo61MGJ7DGiqANHj8ao5xpq6dcrGtBcgQxmRHu9FvHRwWXnVnzP9S1jsoMR6TAsYeYxM1Y34w8mMokczmz",
  "key17": "2Yr9CkASrSuqq9c8mdbNiJFYNdkjVMSyB7p22rbJReVvJFBMs8HquAWSTZWdzkwdh2JqPizzTWLETkpj3tXbfrWQ",
  "key18": "28oNjH2vGxoink69enYKCCFiPoBRLsdnx5KKwWNtduaKRR6FhKgQyBbbTNCid9dnweWXR3cWHTAHiftQ3fTaACEk",
  "key19": "41N8sSZAgFfob7h6vRLQomKERexf3snKMi8qDf8nMCeZvai7G4WzUR6quVNxLkAixzh2MXtfMEmq1uPvhU9XvDLe",
  "key20": "4t4LyD7da44Ug47LonfHZqEuRRcPcMNoJV7tgTyh5HDgMet6d7WKmgw7q94ZGHPUYxz8MD4BNCt3sdR3hWaN5eFV",
  "key21": "61RhDb4UQzv3hpxegCnTS9BgJmbFgHjcfx9ohS5yJDSzMA7VCpC4opk8R3hmzTRVV8uWCG8wUEivnSxKQATaArct",
  "key22": "5u8D1VExib2jtqieKrvjKVboS22LQr88RH4cm5K7gnT4jGZCcjPdtCqdGgAfF5Uc9DuW7KUvgkmvFN96141cxnjf",
  "key23": "34aVDLQvR5qNfJFnAyU5TaLGTk6tc4TN3NmRXqpi86ZqtMMHWYGkHkzPujsxzQ1p7wJozw2GXg6Uzt94txQ3bZLy",
  "key24": "54AnX4NnG513Y77fFW1LQvHtPc7zBuuCUYzXqxrEGVTUFzu8KYBzLj6KVAKAFzR22HcSc5irGRH5U6pnxtRteV7f",
  "key25": "3BRu4yfNbYrVppRm4i3gEtn33zwMT5rZtkjL4K3k9wS8LEptiuZhVrpa3arSney7VBnQRz3JNgo8D4FSx4duAAHy",
  "key26": "4fVN84zugLYqR5zMDWDt9cTuz5XfR8crLgx3jUUWMPXdBBDF22PB2jXBE8R9gL6cp8wvqgiMhHBWAYw3gjiMCyEy",
  "key27": "3o2jWGnJ2PyE67V7bEY7HdzYCLGK1G648AM7yQ1kx7y8kVzzG2KuE1NJ9nGe3GvcgvVmzvybYawnGsj2Jcjsc8sp",
  "key28": "nQX5mqQu5u5CWhuS57kqgkGyY6q3MdoiAjZVxxDaNj8w4bzPqMVXNPTig24GBE17LjbMx2YGvzASWhuy6kmVtVE",
  "key29": "XoTxLsbYKCSgqZa63cESieMGRcyYfqAjGRA3QF11S3hqW3TiZLWGbDU2uA6PmK5nZJ3qCbrpzmARuEVmUkLKws6",
  "key30": "7aX9C7TFW84S5FGLgsEYoSPPjFGRnRQ4q9BK2EpLir3DEMHc3q9acvcrs8aSmUN4yL5Qz5WjYsVk7RA5Gc7Phux",
  "key31": "5sfd6KoMJqSZ6USNoJSv2T5b3MQZRuqs8tksFFGFvC2nyUJH8vbiNBQ4KuFSoXk849j38FnoDRZZUH5RuYS2V9yz",
  "key32": "4aZ6mNyXMX3VeQnpNprDQ5e22xQC4Ux8aZxELcWfapP42yWNMfTG6CNcmAPFM1QmhppoqXrCL9KZTUKWviMoVoa1"
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
