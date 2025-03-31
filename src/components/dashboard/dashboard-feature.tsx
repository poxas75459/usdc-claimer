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
    "3doYvdL2HTV5wQjZFH7RBoJ7nEXEUgzM71AXMLiib2uHMHZy2EfyrgYjgFwSRVMpvkQt9R9zLLRuV9JfZk4muWKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyfuNCiiXaduTVf5U5CGs7uhHwVxtf3tiB3gmvba9W2SQbeGoggrFG1GPpVfyrsH19jMx3Re3UoRTwTWJcoTFHr",
  "key1": "2AFabfAzYVakkLrNBTRyM3akG9pDkeBC9k6YDjWiAsZfK1EWkQPQ4kQb3Kz9Dbz7DiFjCcRtfbr1d3BgVqZJ6GFZ",
  "key2": "4FSxBtp8rNuHymVMScLdEQqQuqdmVaXCVN78xVw4jM4VpPuJDTm8YZ57EpsAXvXRn7QwSiiaDizMbnNxJwsQr21U",
  "key3": "5qez3dfJ3FcJPCtDXNZvcWbiMTF8xq7aNuuWf91w1g9J3SQaiLtpDE7B1A5k3BZvMCaE86PcM1JZ43Ter1yQnSp7",
  "key4": "3eqcWiSGc1uUhkKuMdefWnELCWtivDHp9tRjH51kRh7TeUanekCY5UJ159y5DtVU1rYXd24aV2chbWG2QYRvjQ3S",
  "key5": "445b9cXArHBE6z7s4GzDED91ZcFnMPFpff3i3KJTWEdMej2tpjeK9uC26opeHKefZuwsarEhMgdL74GFugpMEMrw",
  "key6": "3ioUxAmksLqTFb5TafnMGyT2xaQCmosjgEoRtMNfbDqqgrs6KJfeedJti3CaZuwFcehPmhHygDS16VaBPdmFqczn",
  "key7": "jSRLY18JfigD54mcpWbrzKmRWor3wggCYnqa7T9jjkGd9c7LsuTR1hTfxtgKYGoXnW8FXL4DwwG2znYiQhjQG1x",
  "key8": "5aB8qLFJAEHancxFpM5Cyk6hH9afeB7ZAqujnRDapBCdTXaQFnVEj2vf8NY48F32diruZPADL2n12QrHoK7BcM6w",
  "key9": "37fSx5XzxuWjfLWzD6HEcf4tGrEymLYAKPt6nZ63G5WeQj4pmoYvufaF4X6yWHUSwo5bgryACi9TzAd2oGK9PRVQ",
  "key10": "iCm9wmmHSAbiYSf34wcMdrmA5uX9b5jfv7yC4NVxXtVQCEatFzczzCzdtu8cH3WjCFtfxuuccLa91XvA7f8dfnq",
  "key11": "5wzz2YDwMDLdxpR5o46H3bjmhLU8pjRa1E9hV1NXUKYPjzrghJ9PZRgNzJNnXmiW8Ds1iTdtdeqHJw2wpVyD56pX",
  "key12": "3ZowG3eV3S8FcJGCCeAiVYMsE1arnZNKU4bUFDbhYyLtZhz9BPbksAv7dnXJGWHKbMEZt8eyYD4WbXxFvbkd9bb4",
  "key13": "5hTx71ZXgNDpumWbGZMPncA8hXFjy7gkmdPpFaVu4NHpBPv49efsjFuZS4S5ZMwxCfVGnJFa2u6PT1K5tjkxrDJ4",
  "key14": "4Wp3C3jbtYpJKbNhZ3qR8s4oiTj2iwb4rk31UE4Se8UyF2WSeCz6Vj6YY6XmtEvz9Un6yTLz2RiyDR9cBk88CVXE",
  "key15": "5aFn8LKuiYE2sXb2Y5DPTXpovoPLKBRUu14HDDQn5vrWT95pqAMgrjVrmcAb7gFupgwDrZSZoFjQXs6PomxxXEHK",
  "key16": "vz5fQJQmTw4UPbckGwsV34cuKS4qNH7sRJd46DxnxiykG9RvR2n4x9ayZuJ8Z5u3ye744GTzX6ADNt7UKCsPUG8",
  "key17": "4tqtPs9i939eGzhBcc1dTxQECjF3MQJrg72A4bwZXVuF3CGVXZZ6iJz3xpZDJPSNqXSDcZWxX86UbNAe8Q8dBKqQ",
  "key18": "2pLhTQPZxxdhrrhVDfEgNpajS31fhNaEBzWMk47VT1dYV5aSzR9bjUJrwpabtJQU1gVF5VSPkvWbsNjqjWnbDCyR",
  "key19": "4WvRxC58UcEjerYhF7ASqDvLyArhTnP7kYbkkzt3XfXUvbBsLDKomZvyM9DuJ1ksJ9EsERFPRh4ypmgeGroZQGvC",
  "key20": "2Reyy37jYQJX4LdkdKFhJYYi7ngBc7N1LXsQv6RtbbjqpZGjhoVi3TfJ6rQngQmvMv5TTyVR8KsML9jCr5hpVdV",
  "key21": "T5i3v7ayzbwexw3ErUberY7GijNt6EgDF6ZNjvAf9EvmNE9ME33zU21oLbpBj6i3zLXxNtAgEqD1swMJZETsPhJ",
  "key22": "mgrUs8yKFwhgBjRSWNCsRfXRrfHsNWneX6fFT8nHdu3UG8TgAjAsiNrPuqRjTdBoXHQwcoxBgSBUt4KSszfdAng",
  "key23": "2PL3WNtHP3z831pmmuWW5iVUHsg7jcdsFkrngrfx9Nici16adQcMuZ8v4jwDWpMWNVCRtE8DQQ3h3zdsrgK8ysPx",
  "key24": "4Uxdr9MZY5an8tvH7og8twDFryQ5UijC7qmrncB6d5Xcr9WSP1YHgvCN4TG8y9WGBPJrRP2HkvGBGdbAPwyaJcaY",
  "key25": "3rnr8V8j5YUcXWfVdyGuSb6D9JMar4x7VQeATkCbbbix5GVMJ8QPkDrhrzvowQ6ZYjhQ6U6XtQLRp6g4wzFNXQJF",
  "key26": "48v8CjDpJYBDn8Ur1kJA5Vruns4PMJMPmDqavD3BpzthLHFhqhjZwP6gG276sy5gtzF6T2L89kiQB6nHJUmhCFui",
  "key27": "5dzhGf2u6y7UeskEkocXJ3kzRgf6hWCPtkp64np62YLRUC4y8C8P5NwdDpAJ7Jtj6hKoEYdG7itpPtwYF2taKdXv",
  "key28": "ddwHvjaAgQj45Jz4CTz7BHdAbQfP7UqfVaqW39ekXZMugiQpmYnhPcFB8RUU7mrYCSbk2Qk4k4iy5WCY9yXz1JE",
  "key29": "59iXdPfB5MTSemgGZkruCjjMhhjxAVvhT8xUJJ36vKx77TumeGwkntF5FSnFvPtf7z9ys6qmWLXTkMVE7ffyBxP9",
  "key30": "53QYRmoYojnBJBedEhAgiruLAWr7hEBzd1eN1XnfeY9BPyU8kCwc4gnJWwsCpe7MmufQXs2kRNGWyzr2gLEbBSh6",
  "key31": "5RYecfUT2wtpvvLrxndiCRtcstvvGpCvHkPnPmJN5bczZjTnXS7ewmZh6KxVTvRQ7jfygPx1sigihzTcyDgvaBM6",
  "key32": "X4QHN3fWdskhk7wEW3rkSexEpHozkEpXKms1NPmrwZhugLQt3F3LKR22aESJTqrsbf1NbmCLobvExuowqsJNyn2",
  "key33": "2iVMLRhWWC79Yxhkb7F7EM3yCGBWLq8bV7qHqaQxVUJdubFNuGdrH1vvsPd8NirN6cBxCStmk4jUHW3NDuRUCCJU",
  "key34": "3CZYW9bCBex2y93Fv9jYsP3Wc2vu9vwjqESN9YVtAnhHKqxQAvWV6wS4phhvkQWDT9MHpCv9zzW3mMCVi9ve9Ct",
  "key35": "2MsutC4XGfFQwKqhZxwA5csWnBjwhCiS322byqQZuBVgdePBsRaFmMDmWJLqYav4grY4MqLqFW4ydht2MJLECbr3",
  "key36": "2WjghaMrZwAcwTcgQxFsKUccm7yD35T9srhvJkyTxiUh46TQceY5avg2NEn9aB4XuW9Q78ySWYqVvaZyRioZby2u",
  "key37": "4qASdzf4W62eLdP8ruBdBfNLegye73XvTJ4pFshRc9amD5akuEgiGKM4hyavy6VDLWBMhRfUTzmyS2Q13NzbDVYM"
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
