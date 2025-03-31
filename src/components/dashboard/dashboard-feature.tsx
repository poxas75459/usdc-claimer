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
    "5mV9dgs5KsUpHezMk9QU3MqPGPZ3ciLEamorxX8qy8AzxKRYjWzzz752kmZRoibjvrSQ6FS6qSBDUoLo9CNvSeyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2rCaTimDQUiFarNEXvYjjLEwwyak1wRTDrFwQTfJPT7bgC5cZeZF5jzYRSFE1JQvRfau1d5w6UKXZXycRDCUnq",
  "key1": "4EpPzYKeKE33cLgDNGzeHW89msJNJh2D3MBGSvB4Y7yim42gyem9v9vbkwQ6HRSMCQhdAnhQVuyacZ7tNV3mF1Cy",
  "key2": "24Z6pC7Nugt24hducsiAX8xcnUhaMbvGnEDNQh6xgfJud4cynPQ6M6pW4wvtiHoppJGesr2Z5RAr4t2VRiqood5J",
  "key3": "VXyEVPpLWAddpoGSSMVVa6wkWNHwTG6pgxL9ysvo4soua3AN283t23cNQo5WcwTBecCpmij7s5avUqPovUpShRm",
  "key4": "3wVUy5yzPtEcnjkokWoK9HcPY3TmKfSQZEy4n9tDwUHHJHn4XVRYB81dKjiz26qpjyjHRmLAfAy5tSsn8pLh3cN3",
  "key5": "4zKHoaYhnrL9Fpckj1uUDMhyCSGydXXbdxWqtVUFg7Z2ua27E16Rhce8KQ87zsNr228QfP9YfaPRE52urbpcPudf",
  "key6": "4Y3pjzwuuMG9unE9m7CbcWozfNKXj4SX9ew8GGRonck5mmpQf3FEM5RkeDb4G7hav9W3orXU1sjLpAi3LC68JWMp",
  "key7": "5VCZvDEob3aW7iRG7hqJzmjDTSXaZ8CptTXFTUPjzSDxn1acooGeaTJbfaudAvyhdR4ZgKycEaB3K3iebmeeVExy",
  "key8": "4tkfwvfkr54eitbT6aXy6wzBrsTCavQHGYXaDhHFtroyKxhoVtjQxSYPtHEdLzvfGeWCMDkZPNdqtwJ9bgT7KvvL",
  "key9": "4pZYuw1pv3EjkawkuaBEJ6iymbpZXGiPXnoRP96AcQCwginnWHkPXzKu6CbkFwHZR7CxYwoPY3jiQ7TNrZ9hMdVF",
  "key10": "4EHuoWJ67bNFy418pSynuqXRzxjDD3GbmkP36nkEGNYVYd5EEEV4hY5opdC39izeda3yxBi1ofkmBYSC3Nd98ahU",
  "key11": "ufJtUz9LcDkujqwgy8mNWgv6inUUPZq3RBJT1i48FsdvctgvVgHaY5W5Wmbdihy4xi3YhqyVu1k26Ezkq52XJEq",
  "key12": "3brUZyTAobnXZuQ3GYB9UooumnWi9FBr4kvJqDTWaPA76TGfKbVw844fheK2AKvCio3VYprFgb3NyKCL3esYvXxY",
  "key13": "JMiie7dNNMbgi1sXevyCtmHnd3bjT8bwFXCvjxjFtxL85SknN9Kc8LVaUkde2wXSAN2nLu3wyfiR5azA8qiQNJx",
  "key14": "5QBmmVQeVJhWDu2kZAZEPjWzhr6b9TVNCKE6TSFgimK6R81qCC8XdYiUDuZ24jN66uFHKD5uH6ovjwAutJCgsEHM",
  "key15": "24uhiis6QTYKFijmF89qzcpdS6RrVzynzycaCox3gB7NvC7g2qD4u2MeufpFJprtXpf9DPhfNJYfv2wVvgUbtT6e",
  "key16": "46Q6yzwTkYVXSoFP9wifaSxxGNWCj7HA1X9gQZh8qdU15QKfJ4VAMEyqSzPWvvx7isiy4u2ChGtW3CE3y3ao2DqD",
  "key17": "622kKpxE3YYA8y3sZ1Ear54AxRSHQLbBZHeVCXFGCG4t4GVGfCpPWaTQdncgAiNEPMKnEGgikADE94qjKvGSg2iV",
  "key18": "vX37g2UivyjqmWhM7aeTXV99A35VFaGcJyHt39pzJFREmHnepxwwA6zxUjafGjYsVVz3mCpUxwArMSv9yqQt15w",
  "key19": "xXzhhSvxpWACPum118p5uH2WbqbE4Een8YmZxYyqUaZQhod2GzPYrgsUg6XMzD1UQVHuabcKF54BYViwCU6HrKv",
  "key20": "5Pjbqdw73PXraAvSgubMW9zw2HDqK77bg7hXSjYPKHKDbxYqEMUUoaVkny2UkndYDWctrCna38hb1kikJhFfmZZG",
  "key21": "3CCCM6oeNFrRsLtu6WNnLmGN46dhpZKeqG7M9tvNMM64ynBWB7DrhyqUYhXXy8Ap1Mc6KrRzZuKa4tnXmQ61bsoV",
  "key22": "5kX2zo94Yj5WWhiNMLFkPLJAbyuwz8zT2PRcNj7nTFhR1xCGMJbZzQFRPoEMVNVKXEpMYLPxNWsmtVMAshACuCP8",
  "key23": "5uJPzBNn2J7KJy5efse5teZHbD93jQUo1Po7dLxWFrr8DYHq45KMXyXq5qoLXiu2zmeivMiGEF5Ux5nHNohFEvJt",
  "key24": "3jXzjKtgNtfN78YqmWaSc4mt78azcrAxcRGqhf6E8h33zjmQFhmkkqrvu2vBZaHsn7hqBeZ4rdDYFhB1ZxB71wP2",
  "key25": "3PC9NGFvG1KLSN1QNCtEmj81YNUdQXSXqVW8WG4jVBmj7Ek3AntT9NxUwwGegWjymWFNyWGvEE24nCQzgw38YtYB",
  "key26": "4AcFUyDSaqH8T43Ww9bjVpFkDmyyNmnKJRjYqUSaWJo2cRE1ph8fdpJi9Ho7byS3TTn8xQ7K3vmkoURXt4pqic4V",
  "key27": "3RyQKFhfoV7uMvsPzyDbcGNVcGh3YAVEMrCVAnfuPRptc3VwKKHK7r9RWUcH2ZZzJUntf3vZXGKcz9HBicQD8Aij",
  "key28": "Vo9M43CXVcC1P8mbofox4V6hZrwxrGgFewAKB6d9tN5AC6sqRyeD6HcidCLMFV53eM8LZ5P6Z48Ao4mD4EUCtaU",
  "key29": "waaMnT1zykg3WNPr737p3oCyM8napEcuJ9eoXhB1194hkhRhEtTJmHZ8TtahmmvfkfBXdLgKnwybSuTRfTHWLUA",
  "key30": "3mgKiC4gTXWrEi69AUB1xKfNKpwmXcE48Gwy4X91x8Z4UxN8xiKC44ZYp36UCG7RUvCm1tEgKFJ4bHQ7wGpqhxVZ",
  "key31": "5wNVMkBWtJsNMuHUMATGrrgCG1biUu82AoWyu9u4GXhb2pd1sragY1vGBD32R9BKCuKWv4wes4Xdw1cCjFsp4qs3",
  "key32": "3VBsa2728dv8CNP7WfmPoQDvZDE4zbFsRieoJ2fmfJZhtbTj8ak6QpekMAvd9rDYFHCue5mGkAtHZGQMxJhXKm8U",
  "key33": "3HKZFsR57SVzCXfKedo8bsMTJwPmpQM9ervWUub1povoPwZL4wQU7w74BpYmHFKRaQ4qGapVhvZkQk4PzNZ666dA",
  "key34": "kVQdRPdKNZWxXxmZsz21spmTtk2LVYGNMpN54fXMsbfgzfwVhqgj6WeJ5CUm7DzZTLWYr4DxvxQ54iend16vXGi",
  "key35": "2zvyyGdNF9oPyRHt5CiVZY3skWz3VYKmeAJ5Gfvx9kyaKm7h6T9hube2TWoFP5oyTXNZgPmwY9StYtz3vV8yhAbC"
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
