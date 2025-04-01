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
    "28k6KTJhnER1NqSzDA6DVAJ66aRfcQ6gAgjVCpP94NZRdZxCHRw1RTg5z9ph5nWNfBi2cW8h2rgFLJsV4Nksh7CP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7NZTzC5fHc23VUBfYUTPgBJkzobtC7s11dttVBGMC6Vj2Vrn9K6NxZY5PuQ2qt9p7VoY1JdaYS97KC2atUAyYb",
  "key1": "28LbbXeYRFt49x3f45Bo5EyQ4AdZ9onDB4BYswAr3VfqjZYjcdrNqUQDzTgsudhxe7zJkdGZC2jJNyMB97qcmuK5",
  "key2": "5CHtfqU94yLg6165pHGrho1u7fA1E4w8bLnyb5q8QJknLcgF9Atxv9JzYMETuyJCzkwKsTs9Xqn7m6fwAyBbcByb",
  "key3": "2PMB1VvQaQqaa5RuPZ6bMe5X3MZLi5aGucpP6LEYGRSGt1z2CoK7udmCo1Kzr7afVjQEdVQymHRFwUyhG8z6KvNi",
  "key4": "MqhfD8FY5AngYtj1cAg2dzPtD53fzz2rpsYJtzUg3s37E83ybyH8wNq7Z7YezcFFXxJpDxWFsQYUWHJdCPaqdTG",
  "key5": "3RLXxE2cGZyu6YWErNMv4i5NhneD4Z1StRVoukso9C3YUCrETFBVmwPizYqdR8Ee3ZrDcrD3iJJ4JpgHDNQXu6s5",
  "key6": "pQHZ6dpMyjH2X34vaqWXzCrR7CW8Tm4qm5gXrXX1aooHYePyGLhAwyXCJS1qKBuRpKrYbYLBRmLzgrPcwr66mnt",
  "key7": "4u1s4sw6xxpqszkmP8UFr45vJWfzxTWpkMQov5RFPhB4edpsMCYipyeAqrNxricEUYJagqBydMD6ii5MrQYjGiG6",
  "key8": "21ap47zx3Mn6qUPSHw3tnTGyjhXkYZ6FuLcuNApz1N4FAHGcPoAZPy9pUu8Q3cdVmWknbHZVMaqYzpXVwmKahZzL",
  "key9": "5SvJ7QBGBi6pfJmhgRSkzpUkUjACgFum6xWoRPcmQbdKQP7Hci8Q9Q6V8rHJAtrmSZDnaVoJocCPqrz8TS3PJZkV",
  "key10": "4MrkhQMybtsP1fJaznShLA7TuafQDi1fVMVkcJ5CfMZDKUFPAs3wEuj7Wp6JyEdQWXiY9prEJhHWUXcmznk5yjvP",
  "key11": "3PTJVD25T9PdXBv9RP5QmLGbVDYKdVtjsLVcpSisL8Dijk1tSBPNsBZweATdhvhLgeFh7smSG2kk8kyY4KmN1NnT",
  "key12": "3HyLLwgPrBg2vrBidkWZemUKcJsn8yBLTkJNu4fkVZdEzJVzk3RJm6Mrhof6imgLP4jExM3zUBsMY3aZfvqbNwFC",
  "key13": "2F2TE7N6E8XfL52gHGaceeFuVcBGQ6BHQwxz28Zybd2k3sp6Si667hbcMD59ifrno7AJQaEYjzPbvk7ucGeY2RCX",
  "key14": "5fnNu6X8M1FZYRn7UBuTqyYDR6KuNXHRvnJXChmjJs6k7tsd69h7K3im9hUHGxBpZ9SwZ9QBBrpDemVQUakUuf1d",
  "key15": "2bMvCDncNhjxrhTUWSnmfjJhcE1FNeAZBuUjFN2YsnaKxbUUn6J3o6WoA9jQ4fWRTgfP3uLosESGNiMZE6LAqttL",
  "key16": "67EJCWwc6fBrbuECJdZdqiz3UD432gGuiwYexCuwXD9CayKbUNodra8DDS7tv12AQ8chtff4k32stYghwRy8Adpk",
  "key17": "x8JaWF6uRAB1ytLNbi8L6xyLMLCW4xVcxM5q3Z4pEk91CJwkqqWor7A96wqcCjJqLuKY3gLMQ19xVBULjUPUtdK",
  "key18": "5q3YPVvW3bh2pTCQaNSEmonPHxxERzD4gpSqAbG4jAk17bVhVux5iCAJb5gt633CkzNjcLkK9tHRAq1YfF4y7fx3",
  "key19": "5FytW5wWkw4iT1MCZBQhFuZetqxQ4z5xyTWyzY8vR1N3nw3nAf5gJvGszJPad41jVx2aKEeqWq84T9NG7E4qHYF",
  "key20": "34rRSh9hcUNiamNnjCxtUV1CiaYMJRXNyyPYa3GqWPn6N6yXbCDDSwrT2xBxr1KF6jfrsgajqSoCg5xZpqfXzYue",
  "key21": "4wVT8uXQKHbGmkVxhCXvzLKCRdXQ1sc2Nf71b1iPwNFvNT73UNeBA14yhndYz3NPcoe5BvPFTt7Au47vkDzdGEfB",
  "key22": "2C3idd3jZSnt6NGmsmnPaBWhqRoZn9882FdUbQDJ41sBMM1WpXj4XvEzds4xzPpRyjEyAsht9xy8DvNoCGbaUVHE",
  "key23": "w7McfQ1o1snCg9EsFAWi86XARCgxrgmSCuHHMkUrtuEg6fu45kAwQ6yuAF9MV3Yk7Rg31iqWJcVNTi8QtQR74vH",
  "key24": "14HY238osdasypzjTk4CdsXPqUZzDfS53Fkyr2mpEihETjeLJcGaJ9iuG7izFZEjYNgjgpMqsoaoRQTsU7SmS3y",
  "key25": "fVUdYcoNHLA5qvsqTzSTh1fjk5AYz3jzzKwwdSWatAvwdzhx1E9rMw7h4nciP9fU2gdfC5RmGyJELHSDrCxvmae",
  "key26": "2SJp8uv8N98oy7auAWKRCXFftNZneYGhy76PMyeG38HuCWaFCkLhxqZ9h7qA8pGY5uAnpmXsXFWvyo3RpNtaewYx",
  "key27": "2F6HVzkRENrVBL2htx9ANJ7jGcX3vLH7Ge51Nbbb7nPgMSqijjftCKwCra5NzXdnAKNedxnEz1hT6JhpUMZH9CZu",
  "key28": "8bSeuHkA5ira5izbvQBgSs7Xmhy7TCjyaDQ877ttcnaV1DtBBN1EbkBst7RncrEM1UymbRDCb5ht7RhwYQSTvbV",
  "key29": "4Yfe9jrxqBZHJ9DJNqhL8YBypBmKkhvNNUgEZF7eEK5G8YLCEUpaZZTL19bk2SxXL3Za1SDdVKrfn7BdMjF1TvTJ",
  "key30": "5eux7Hmiqr4nF6QWnNwcXYhmqpVqxpUk3u7yKrj1xfwMr6dSKrGLRBpQNt8raEYzx4Yve43NDrEcA7jNePF7KsWD",
  "key31": "4LpH718UNqToTWB5rEnvMMd1d7JVNoZ7LPL9AVBRAPgY8ApGniXEVbdvo1Hzffugps3cJWfSHjFhqsV6ysGWDrJo",
  "key32": "4tNPLhQA6K1f4oBeMSqQLE8i4isbYX3VmhhbTWzfLd6CiZZ99DJYMKpimvHujjP28Ag51oy1UqyPAoNB1ACkqYS3",
  "key33": "2b8qU99B8FnGxrPtTbBrrxkVYYzeJwe1r3k7p4kvvbaezs8vNn2AR2ZaCuTXav9RKVyNezWNzn5974DQcQkfY9Us",
  "key34": "5tEMteGcUUn184HFQBZCxg6tYUxuL44vpPt91Uz4qe8rrW37Rjce7nc6AKsZAgXNwSsyy9gmxShDAtQXReADQPzo",
  "key35": "zHnLzzxFaugSRXQ4Kxc9yHssrXNt2vyrJ5f6g51KM7QpdcpLAc6P9ahJWfXbZBS85uSa9wybBDcB6GkQ2Zh3ku1",
  "key36": "36LLRR4gBmxUfS9dqXKvu3iHZ8nqXBKAikeDRSJRnTsP2j5HcAM98sNXBkFE7Hxdr2mzjXhdzvZQQvWk5d4PuCq2",
  "key37": "3joQ83kX2d7ekenuK5wUxjTMMUqj2HQkHgDtqLwpQk9cjorXXRGLfDxzXA7RttsbVuWf2xYpRVgJ2ibiWTkX1XUf",
  "key38": "4B87LP7jumwVXE67w1EhTkdgzckSqiEbihupN1YCDfuut5eQhUe6MM6kpefQena2NrRo5V1QjZFUjpcNFw23rg12",
  "key39": "aJQwFpZ4AH4rpHZJrxi9j7owmSifGn2JwMbeY5PC1S3rE178R3eH24XUYTU4X92mj5uXSGB8z63ZYRzgEikzPEA",
  "key40": "V5NhQVveC3fSivJNbeipqY1AZ72e8KYidRe5bTF3NqmZHkSiWNSQR3x8cCmXC5dKYYizn72L1ZPwoEwLsxeq3gv",
  "key41": "671ruDtRHUsq2bbbsMQitmKz9x4E48gg8w6uxKq4xSBX7R8woSTkw3FQUWWthSSpbxhtwv6RjUrhmmFDteDi6nic",
  "key42": "3N9UK8NoL331FzjNShsq3znuyV7KTf1QUZmUeXC18mptZt9syCGLi9TULonBdwvfCUiHjwczjcCfUbJjq399Xqcm"
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
