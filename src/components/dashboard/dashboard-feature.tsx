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
    "45e79ynPfsb61yYS4HxEtC8Kt5LwuznT3GSf2t9Jb5cR2dDDkpAkYfqJSWS3y44pcnbKaReGtfAFwJtbBkseZQ3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HzRvAK9Wap8U7JC15VzHGtVJVTZsycQZo1KxR5ku9PtrGhX785Px3h75Azs2WNzt4DZ3YS6e1TX7cA3s2vFGpU",
  "key1": "2DMxtizCsSYbgf6S6BCfiqBRdkoXLvfoCZ1CcbXyisJLLDpf4ubrqS9Khbs6uqGQYp74xucBFJzpbU9qUxkkk7HE",
  "key2": "4kosG73EcAieJkDVorcf7UFnoHFk3tGorFdR5T21yY7cTnsvDFHv4NZ8LCDvHbfE9rLwf5BY9uFQjjiMZ7YbURwG",
  "key3": "Eh3P34rwf1uFynDJ7d3rwqvb9GGU3dVDBHnrtxccDfsWarEFLxSFW4ti6cUydSGTgY8j2MNbLCDzvGSv2kcdyaW",
  "key4": "2WgG4Rw8QW9iEsr5svM1MkcKRYfuroJaDaw2KJutH2FU5PbXqpCuvWNY7zGVbcaCcPt4ehdXkbuoJ98FQzYEwiHq",
  "key5": "4bMCG9gKLxAAod9nQ13wbRWerzCS79cXs9nFZcVmerRUskx98fczmjh2xDT7KKxjEi58fHvNGqLeFAyPcRSQtTRr",
  "key6": "4oCRSDzVLmeCsk2qwsbaS2NyQpLNFKMTVbxpa9KBP33z6PQy2kD4pahbdvoN8F8oBUdc3LJdAXbgK4ETCdGtLTVB",
  "key7": "41ZK6NGQA2KZCoio6DHKc9suFqYZqhJy22RDpttBLwjKf8CgWX7K7hVRjtf1KMWSQf1t7GgKxjtNaZpi6fYKjXf4",
  "key8": "47iTWLNbU1WLsn692BBXpVqycrVfHhLQ1DyyYsgUJuAKKiJrsbqhbn7T2x7HWmGv3DVNNmu2LzYRwndYWNWyQkX3",
  "key9": "4rTF3iCepSQAHziARReMbUnyHpPdXgSEfDza3JwyRJDNKWHcfLMFbz1fZjiPiERDrTf2QPZDYhYvPTWyL4MRg4hQ",
  "key10": "3UDk9fUFWQVuNfC7QvNvaocx6aLjaycV5LpHyawVp3ayx3TJW69kKbrDjwstF3TEAAcVoqmk9qtJsgKUGbUjShU8",
  "key11": "ps6z7nzHRRM4aBvFzQoD5CkP5Ay19cayYbEL6EwXsHvuoK2tU6CybdrNNcBfP5mqAc9ZkSCZTTAo2gomXDCKCje",
  "key12": "mksx6GZnS15bTBktjRUXjbjWC27ov98Dpyn77zfY1xWfKNfAQLwSMmqwdQ58ozK5vKNyQA8WNZqA1o2a9gevFsM",
  "key13": "2VZheRB2ZNiXKXWUt4UJofZBDg7tiK3jvfGd6qB4Aq8z5ydpg7MdULPqMbyTztN9BSXGjqYqjgvMSDumuQVn2ePF",
  "key14": "33XYHXTFJstHxxZRmoW2vdh43zdVemduccKSXCvYYE8atB6KqXpujy1YmD6BtitmjxbqacrA72c6msHKesFFGhsH",
  "key15": "4qXGg7vK6hABEnQSPSzoat75UtXAp6Qx7MKG5UKu2sLxdPLE3Bozgscre5DQetzxgUac4wJAGx9J5JgNYTW4V7dB",
  "key16": "4KSADh6eDuoeyB8wyBjXkSQPfsJiEhHpvv283N3AzDE4nihtg9seMfW7RwYcRXpwgzP5xB3uXucjHzGeLwjYSVfw",
  "key17": "64B7zfbUCfKCytu8NGtKTxeT1QRv3A574DvgpUftxSBZkvSwKfCx3MjGMkQyYxvY9izkttnvZjaNc5seZizdTE9g",
  "key18": "wSKmqrrjW5BKfQvEvC95fvVtCLuBYaupnbKvjinGJ9ysVdDNLac4C48tKR6R3wm7AThiumBMK83DKpvA9GcvwCb",
  "key19": "554esfsaH7uznQz28UNcifzhajPi9bZ8hscU9CWtcSxRCLEsNSymZ7VACwrNj4JK94x7CHFJRbsdpAneXb8UKecg",
  "key20": "Gfohbe4NR39RXvheJpoHUXtT5tqvtgtALE2UcX4ACc2QGDBQA4QHCH8f55Kr25uyMBYMPeirBYhXW6jrsEZo88o",
  "key21": "3aYjPMXTCF8isx6UjQgMers37b4LfBRhfamqttc1cvgw3WM1YQKitLt6gR6TbC65U4Es7Y2VJaddAJBwqvkf1tyx",
  "key22": "3E4dm55pkdJu2ySHfMiNrw5DuUW4MVgmnSe9fihZaQBmvz1tNGLtXFUsYKrFGUJfTitJ5VhVj8gGFRW2XtYaYDjk",
  "key23": "TVehKVTEsjfvv2p8qRnqr9vAm8gi4HnryrGgnLXynz3kpB9hqjZgw1VmGio9VtpiHwVJpRdhv4NjNaqDLcyc6XR",
  "key24": "3SDzcfJXu6dtazDRqKV4ooAdXRMEoJGyY7hfsyJcgiUTK3VSUkRrux3JZr5KmMmwbpShAJ7mKficuiLWN9P6L9y5",
  "key25": "4qYw9n2KxTZ2owzLiHoTAeuuZmLaznqLaeV5RVni6iEfoX5ijb6sxJdSL8JVD9b4v28sFmFG3qNdZ3BUy35R5wgR",
  "key26": "5rnUDeP9f4s2YdrLLNdi3sQafkjtTQHeKT3VKWGwXZP83vpYpeyohAxPUSGm6ouULhyLztDqX5i1TAZXRpq5vEY",
  "key27": "3mnx3y9zkZC9kesEYxjUuxRiiZPYvEoo5NFoWavMpzpDCx8AfRRRDxiZs9QA26gXfx4wVmoVrWAZUFN4f6iqvPCJ",
  "key28": "PdncthSHnPZL7hC2BVPLEFBpEi1AbGWc4MakUcNR261XZgy821p7hB78HJ9YbHjDLMpN6yfGthVZPkfiRUpX15f",
  "key29": "39dgNVjxKQxDgHbFBFfHU9JiqhrkMsEEvYmaFuJKWVFYaFMKj7kZkHfH4TWvxSUW9ydPLzrsb4yLiuggWAJGPkZQ",
  "key30": "5zN6T87985i4i3HEL6fpcjqxwiJ9u1y9mNVudranvYCEeDK2UgrsguT8KFL5RL6myXEe6ZQxreAMNLvmrqWqWthX"
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
