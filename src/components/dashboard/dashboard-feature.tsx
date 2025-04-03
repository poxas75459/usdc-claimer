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
    "3SS1ogRosZeRUPY96DrirGSrppUAyD4GELPvUHZjEM1tHrABVKFsN1niPjmhudBCueZo9KGiE5XHYmmJdxvPQH2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUMmRi3T8em61S56zKGsfErujfGd1zKmVKxvxoYJqZRMkpKPVr6rKmeMesyzfNi9vtWw5BPvGFLRRxcj99keGiq",
  "key1": "8msfQHgvCSyWN5a5iS1JqvBGrbugcLFUipSN6eon47b2UpGjdfQ7n5pvAnQcbSpTTyMBUiK8M5qKDdp7RzvfBs2",
  "key2": "259YqwQ5KAYEpN3fv6WS3v9YMo46xqN5vVke9SRBe3thM7UPPziBH7vyXi2stF9WmfrshfFB1m8L42Ue1S7WYrt3",
  "key3": "3XzRsZdzoXVFYBAFmzSpv1dPDGgmdWbRvW8zuXpaGZZ5QhPDjWpgX6eFUX5oQ5ZpHanSgBVvSszGcHAMQh7hFLc",
  "key4": "2BfpKuadRauJUXxTEkQbhqho6oap7vq5Egw66e7km88LZrmJvbQakjzMatxSBdqx4MeLgQBv2qZr63mEM7DthQVv",
  "key5": "2e1bDHBY1JpRentDHhVjKDuF4xhEytNKMxASHn1erGkJpUidA3Fg4SnumMN475jB9W7PoVTRmZvn8x6XuTwzD1xo",
  "key6": "3rSfVdgd2ebs7751bcYkSVHQ4sj7MbFqKy9SexC2N9h4MBaRAjwomP2e5rsntzaCDB8DsxUfMf6h9F2Ph2qknefb",
  "key7": "2geaBXutvHBbjtKDoN3h1W3jzE9pEqLD4AotACvDwnSjPPyZofxFev2vcs45WAWSibPNoFrm2iZNqdGn7hjZ7EcT",
  "key8": "2ZxDa5BbY2oCdtMbcHPo66ccyHtvTaT8QcVJ4scrtpe6KzeoHj4cDZ1y6dfsezCvXe4a6RYtDRqEqcYULvZLi7RG",
  "key9": "5enhPJLaibHLzei4SGtw1KWFNNh8DQGLEx8GJ1tA5gQdTqpVypfTYX4dHc35Q7u9aJkNRGwWsf7WTSqtCHMfP9CS",
  "key10": "3fSWTSS44XHSdamnZ9UKFj5sagQBxAsF41xU4yBcaL9GcT6qvw6pb1q3Zkh6Xp2BpkBfyTratKhjcge1DTbBz4yM",
  "key11": "3hSrSu7YjyLduGJTW97o8DrxDZ47bku6MbqsNUxC48iDf2kasmXfhrSNBBYuhVaRm4pfxT74awLnHTqcem2Y6YJv",
  "key12": "3WUuxidSnjynbFzNmcYuwEB24K4zkLD86cD45tEPvhedmwSo2YwvozZnAc5oNcKouhzSmnkyx3ZYP5ppryY5X1qr",
  "key13": "2BDSkWNnUWBwXqChKbTC1kj2gWfWVQpa5KJrewq3Ke5XJ9othTrwAq7tPLGmK5AmFkoZP4Qs57KGfRb7gCkwDtMJ",
  "key14": "5GzCK8Y1CmksyAnSBABcC7VPJ9Fpo78c4heaUZUQmhkYNPEbCFgc3Js96EUdNmnsRjQs1kJDFJ2JgL3KwgCcjUTB",
  "key15": "22U36dfyKNhSXUKzD1V1exf14RNJPEv2bCusQWzhaFqt4VWHmr8pnq3kq5MnySL6bP4LZiAT5WYVmVAAQ3hqqvDo",
  "key16": "ySWFXbmU4ZvK85GjswLgRSyZBkKFmhW6u2rcrCt6BMDXWGxsNoLv2fbthJpfA3FutnFsjX9vN89kv2EFmnkdtCS",
  "key17": "4jhJZb2U5VTmCL36Funbsjg6XifxGYbPhSGdHYKMbqAinsgPJr34tJow8c7njKiCjGwcKdJZoPBoXQJbaQXo65hK",
  "key18": "4atCD4aTVwCzyp8R1EgtnchautSEyEte29RaTjJzynP6U3LcXWbhkSCkqnSnyCjgvYroBwG6ukNDE4nP7jWj7v2Z",
  "key19": "3J5PFLcr9uU6cjunPtWeZ9WdnS41GxDz5GwbFqiegYFcBUfjxcAz6EghdB5kSwWNK4nJAy6GGVwhtToHhp78GpYT",
  "key20": "4WKaBbh55yX7e26qzT76fFu8EStdGUasxZ5E1nEQfvxJWaqwr1H61hme3UkyoT1953Kc6tnFR9sbPf8dMrFaxU86",
  "key21": "2pGumsACS9LxFkyLJsWzd4wZk8hLmtqtAEvkQmLoWWBe4Mjb7J1piMdB2pw3sJPhhKrGio8CNmj72TM5oqaKcCkm",
  "key22": "5KMvFMuSZwppLY1pkPtLHSZ8yJgrjksfi1RwmpQVwVArUvF4CjH6zWLnYdPN4ayE8NAkf75jQJbzPfMUktiEPAsU",
  "key23": "KnDwuwN2qNeMZeLGeEC2uSYU9vwMHd8eYHq6rTPp8NwWNcFoXHYjuW4RbwWdH94drCwsipaLF1akpEZ1nMr9Gpr",
  "key24": "5MvYVX4gbFgsdv7h2vsJZccr9t6VHfvDK3F2GXy1AVBF4T8D5kELdQ2VuaDLsm7sqjhJud8djvxy9pEykfG2kLG",
  "key25": "2ytKAB4iEjY3LGoGU1VYZFWp5UBJ8fWYj8CKPufWsFBL6BPbjAPi1Hwvht51JYbbfMg99xM8D9qEQ4DNTh9GXvuN",
  "key26": "67f5RzeGfaLPWjEDidrrGsqdfAB7KFPEWybJrPsH82YQLE2GsS2Lmkdgwm7ikm9XMKaw6Y1AjFcxTzyzFKqKgbvH",
  "key27": "2KvwqvrSK2NZcY5REvqd4fQa1KZJc3hLg6YDKXwJ1BZQKqy75e97jGeK4PTVQzUYN3gpjZba5jAMsN8MR1qALiEy",
  "key28": "2nvJbP6UH3FahjkudyEJak7bwE34KpA3MNptqU1zxzhhvsjr4eMKLmy5esQ9kqCKoS86QHWnH96gK3Jhg2WzEkTC",
  "key29": "yeNenF1JoEhy8q4DosBfjXnKmDMaoSFWEqCgZb9hXvPVEqUcqqGWQUtqvc1D6CrrDPUgqbQW2b23NDug7ypYgYu",
  "key30": "4GhC7vVFbBCeiVi9CWmF6T7GeP99kKnYbx95DskhnXk8RpvW9U7DMRrNBKXZtiAvKhEFZDBsWFV1o7AXxxzFbiqE"
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
