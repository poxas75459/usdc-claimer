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
    "4ERm7W8pS2YECqUK6UYnejbW44CdmE3S8T26Nco4z7MCWunzjozeefdSjZSN76uav7PEuqH5vKhZCDhMtFWG9uHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJEbdQw9kw3JVvaFBKLjwMoE3trGYg7qczaRBcoNAdQ8CvAK8C8QfGDy8MrL6KEDjy5kn3ZA4JeAKwmFMH4mef5",
  "key1": "5jkErmNz61x67xnDizBhEH1fYSk9wjLQusoFTTwUhL6bQs2ZHBSG9HA6TbaE68jWvvhu3Z2MoFdbaC6DbMqGYaS5",
  "key2": "2iTYSmRbXMHZcDYdf9wjYJvQGVhgtDSNkYNN1vw7XHYj6kwpHAsFq2cxEQYgHv3piS4ad2k1HGM3XSBBUMnwrJhB",
  "key3": "4FMwsdRrwHTn6RynzHy9UxntNSLTGDBwGxDPQRKCGpMdeSUdkJPZmH6iovvX6CXGJWyssUswEMNwJiHrAe9Xn5sh",
  "key4": "2KCxRhaJzcCN2ZNbwNzehXuFWr2dpPquWaDUe1hVP5tf2LXiLTyzkXWseW2cC91rxjSZMddorLxKw9B75v7kK6D9",
  "key5": "31uFFR3TahS89dTjTCpWNFpwc5DJxQBvh99JrDWkr7NqUQGtNX7YxzNDphxjm8QoWAq9do8YifRj1t9eHcwQukgm",
  "key6": "3joGpEuB8Bpdvbyx1BCFktFDU6hj1U4TLASsyi6fMtJ9rhjpVpdgCmBLrGXERUFVtFxzD5nsWbyzUZ3sioKxRW8e",
  "key7": "3i2Rqzatw4T27NRzjcF43445FxM1X9U6UqNAqjpTgTcm5p9FAumh4kgwVh7EjAtubNhhT1U41rGtMt27cTZzKUdm",
  "key8": "3GtF6TUpGXhhVxoae4fTBSc72cjzA7PnozpbjFxVNwxMqJpq3Ra3er9X845A2xZ6MzTToe5oRbf49fW3ymxJCrsJ",
  "key9": "5FqG8YuRgec1pVYs4nFhKvUyMiHGcsWCz41utYLghnYp7AayFTtsBthyTsHDPwobYdSJSpF1MrqEjkDu9HodeK1X",
  "key10": "31X4WvzUVvJ8sNhuMjYZ9pXQG8aYaSxSgqjnXg1v2TmbThF2ZPBKNBjTq82rcCTtqC6HCjCiK6P71Vb5fJnyA5fr",
  "key11": "5S4V8F5Zg5pheRjrs1XVHhBmN5PhbnvFLamKQVjNbCAUU5hrzkGqzL8zejHkSfwaLcpNLZYyBhxLR9CNGLW8cEzM",
  "key12": "2FzPd87PYpTDzZDhiPUXReoH7aKE7dzRDzEtX5WNfNvF3eDfBm5yANjcKSSHg3qXpAbwfEXQ3LvxYR9QeV9RkqPs",
  "key13": "4Zspa1ku8CNq2RPyahkViVz6JXakdXQGnC3uns6iFWK3YZJKaB69Y6VgrDRgoZpqeA99fgZLrUK4HABULq3QfgUn",
  "key14": "4GMSCsNB7H1BCCnAJaRpo9PZDyapCbUfwTNoBCTNiGz7gDoFpanpgrK1QXjhfSK1QHxNKESkzRsxZ4e7uqmSwA2j",
  "key15": "5aM58gWuoWHwiurnvxY9yUXTc22Ykappsj5thGJmvSxmB5j642oojBTMMGFEFRt1qYcGEMg2AAQd8z6VqJ8Z4pPZ",
  "key16": "4HbWacSgBFUjijM6ifhcDgdBdEnUeVVaF7xT34WJ11WXPyiuEB7zSc2NeuUFsthL4kPC678UzRiAhvmmew7PhGDs",
  "key17": "4YwvH1AzMPJeAUjznFLZs336CQ7FALVxFiKH3F94vg2SmmuFReT2SVj9zECy6sKCM1y8ASqS1ujyfRW3Dnuc1L8J",
  "key18": "24CRYidqpmuMbAo9HUMjH57DPtyMPQE7aoywb4N7a8X84uALvRbDGFePKYta5hap5zwN1UnWBySwAdB1QvN9jocm",
  "key19": "4ManxTJ1vC7kNi2Aq2FdWSXsXMhj9YgBACkQ3ojJc38YHZNzNRqaChUjK2e32iKfgJXETxV4Ku4BVkmZxNaYAAyV",
  "key20": "5EtBWnJSCBfTRkG62ifywDcRcg1q1dEPWaF9arixcjY9CdUSvB19wtjQY8cnQdmBLf7UPDTTMc33fUFbYVnqfznh",
  "key21": "5dpacQzw2k81wLYsZMm6mJPB4rvEjLnwXCZi4SLwnAxukJtGhVnvC6MArhUFQqp7EVY4tCKqYLWQsHmkkfZ6Dw81",
  "key22": "2csY8GGh7wis9mtGZc5yZnkqs4iVQYw64FgFgcwmhF1aaLtuaF5B8dGXSka3Vak3YD1uEx8mquVTQJRGA1f8ndZT",
  "key23": "2U5KhjLxYYLtnkki45icCUYD8Evi28tsMQBHk7tuhLxah3YmTfbZMjDFr7XZ5rr4D9ohCtDVMe5a7PMBmYjRJSCu",
  "key24": "2AMNnahDHf8U8pMfXuFV48JqhLmpGDsDMMCbhv91MXjEegr2VDEXADUN13WEoRR2MmizvBgQ8ePScZaDB1KSpRdt",
  "key25": "5yNk8wxMACQ3HNKhfwEVh4L8LGa4CvLRCFCvFTRBndvW2f4S3sVRJeRpLXavmhVhsUfN7Kqps26RC3BSzaHA8drs",
  "key26": "yKTd1EfLyMgSFPVUVu2RcDEjj6y6x3dbcdAD3SdQHWcEsbAjxaCtK8Qi6FKk9j13rUQdYRy8ui1jmB7vwCwPoJB",
  "key27": "3nTTNkpTWMfWP5HdJkfynJ4iry5yQqTNM3E1FMnoER19rmp5aipxrBt6e4H8Gv96xN235JpfMFMMt7RT6h8BZgHL",
  "key28": "4VWM5VX35f5kxTcpZjPMozz1QBBxhNYtH3iaUKxACNtmLxqdjCQu5XZMz5fJbMaWUMSAeUoeQ2LZpvc6hL2GQAUb",
  "key29": "2h6xQnNXJZcfDEnQ1xyXK9AWHFBnLX4iyRrYBxFAS8gwAG6vnBc5e6YevCnfHt2haw64oCtfkLcc3k3puGy26YCw"
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
