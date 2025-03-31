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
    "Gc4X48xkjgEnTzXXiU8jJqgUsiYFCrkchCc93AvpESaaZaFyrVKGcxT5H71vfuTuQ1t39wf4ieWDaEWuENk9VzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrNL4P2BHotGt3XRpHbJV3xu7KBf2XWV4R1fyhUb8w3qwkqL6feqEi6dtQ4hEKuc88ef1kQGvWUwfoQzrua5H8E",
  "key1": "4BcayxHkNAxvCZJNrkcoSWwRjZiEeLMDop36nSqsivFtHwohym7DcXLDpDe9W2ynVcz87HcNrGYDPKf86jpas4GQ",
  "key2": "rHcwGVCDAooD1RYrbyEp5VYNK5DQpLrpCzyfWFjAYghTfKGrFZ67j1VnnuHHGWr1o6rsqBxjELbToiPMzb958m4",
  "key3": "cgw83Uyq9T9zu8W4HWoN4DzcnxEssvTBW1qPRmqZshujXYKT1M587s9XEgUxUqXjwrApggqzKJbB8MwuJzQMHJk",
  "key4": "2NcYeEpAgMgmpDgAqqQzGTFZKfrWvr6RDGAXo6WaxYGAmLZ9g3vhmc9LgXEYGhjxogDMSqWNQ43ecH1zxWMN9A1h",
  "key5": "3WVcZrcsJw5pKcEAjiZ7Lqq129yGboWMSwix8fC5Abax4UTBiggQQZb6HxosbCNT1ZcVDLYAQkx5y4j5w4oHrfba",
  "key6": "61bZRStFvq4F36voUFQjAYzhrbvWGg4xA8o9TVaCkq78hjMB11xkxMH3XUuLgzmLkx9jaCb1kFCY77gXSWWvfMxF",
  "key7": "4Gch7J363T4WUZ2bZoC6MQLad5tVJu1iAqvxsRnq8fbigvzvvsWYXbDLy6o3A4cQNgUWJoUKeWnMLMVhu1stTa65",
  "key8": "24W4BRph2vxFJgkwdaeREvC94YHp8qhej9S8R4twKenbet4qQzTJM6Cjb2Qqr8zFUFT9rdfEhZp2Hoc6fGhmLsKA",
  "key9": "34HZHhgLWWh2GhNb5xRcwyDj3vZzY1DcBKRt78K3fb1NE1Fawec6k3t44ym3Nw9kyC1cKihu1Uv8T2qQ37FRX9b4",
  "key10": "5i9mmy2N54UphHY4GRK4nyHiYFsYykm2ivpRaqARzTtyGPG7H3swLTWnueYFNwVVBmNYcgZ2uqJFAvdRepEL4CoF",
  "key11": "3yLHHVftPe7DUvX2Pz5cCfytwPbCYGFAJ35xbtMTNKGuJAPn9xaM9oteC7m9KDz32cks15bpVWJFwyKHA6YdQkRW",
  "key12": "3hcDNXwcx2p5XFXZyxNoJb4bBAytifhoEhVrWbyovUXDL68jy7DLfuhJAB7EFQQj53DyiCPNb4fJ2XDYnrPuELLX",
  "key13": "3oujmFL5o5vFuiBCN8QWeLTK3hdAHGCavSLtPcnZjGKTXuBjFC4JiKmaqFmz3PRGskrPR5HyhdzGxq9dS2TtKfg1",
  "key14": "44AnpQLrxmVh85SQxmQHc2ShpjsehvhZ8Nck9eqg3Qc2Zs91czb7nM1AJ8M12gRTB8w5Ei1Y9AD3tKiA3jrwpwUq",
  "key15": "y8vJjjzGffcXft9UCdLaceCb69m3cSfKo47sdPFxLAeeMVx1b3cLEcqRRF4eTdA9jVXEr4bpSkDvyt1Lunh3ArC",
  "key16": "h4emuXUoi6wb6UZMdNLR19VqRka7vmsSDaiyi4HpLCpGrxkSAnhbtXMKcoBSSxBQs496n1tYPtuzKKJGADqXoCY",
  "key17": "5GRzf7UzFvKsu3KZZMJHVA4pmNCkQSLmrB6AP99QgXmLbc5NdCTcx2BFzjTbREPdmgyUaa2chuWm7rT851a5nW8W",
  "key18": "2qh6CbrdizTd4Foik5tv9WR4iRv9d6gn7pNEsmDjL1FE4nvFrRm3uGogo9e3yt4pwq1vKyFNzC8F6TX4n4Kj7mGL",
  "key19": "3CYQwnkmyLWa5MNn5XWGQQgzs7Hep8nALa9uSiqeuSxQP8dNdJjNiDa9rmtRkM9bCVApKC6HRsttobYwhkXLTTYC",
  "key20": "5ffugjv5ZoxvT1wH2iBTXtsAhdfazg4Sdym8Urmk6ETJvyqibBhGVMiuYMfn2eSbjYRyGUybUCtxku1TzDi2As7k",
  "key21": "p5jHNTjXdohSGzdrxEzePs8sq862wNF89DhCGyRPQ5Mr92z5Krm1kMYnddpuVQTwRHkwFjuFdM62VWyiftbypM9",
  "key22": "3Lopz9U4wdADGBZms6qTabCi5LfbwLDDSsQYhPV2K3j9YbANj4DN2HaCFR9pgnUnoKdw45BFdtgk7zYhdJWeVvF3",
  "key23": "43zAx7z4whGWBcXdtB1EDoup56PgdhxyASRpPpdGusb7hCWk45ia1nWVgtnmnpN3nGV1ajDyCeN5C3xzFjTYYFLJ",
  "key24": "3b8BNdefYycZc6BzufgHUK6difsZ7nMFUxo2uAmaiLNnFj3fjPkNHXhxdjkvTxWhpbgz5WFGcJi9rftH3yRUZoaL",
  "key25": "4gPswGvUdsvTYEw9oMUKBYdoYwb5LEpozegXSdRqL4jmfx3kWXcvpte3MCr8tZZynHszEXVgAnhFd9ad2PgXu3tf",
  "key26": "4AyuwPoi7kdV2tESHFbCCWAkV2RPEtc1EMs9G4wyoTRmkKPtmMMxyZVcAKWGtnhEY3m3wSEiAZ3sY5st8CXTfBSo",
  "key27": "2vfoCvqJXiVzTWEdZZMB37a6kGuEGXHCL7gDsANPq5Tu9EpgvRWbDB515SCPcF17jMYu4fDJL2wBfbFmXVJrp196",
  "key28": "5fuLSgE9fno8gyU6S5uJZixSHogCGy78QjpVaqRqfDLnm8D9MmvDzSLftb18miSo5MaArDbTxpv4w3qWYYFG4pJH",
  "key29": "29xuTafesXveH3NKBjFnkUmWjGDvQ9DMWrX6jDchELAQmzcm9Y8uY8zRFGPv5qm6TduPN8Nmb6pnFrb6y7FaPTAP",
  "key30": "2GvdtBZ9gcaQVsdesR5kYTwGtJvPZvv7T6n1WyFSgKSYBqcM8LNgSjnG2ECNsW93jvwcDSpGe37mxWGXwqA3k2ea",
  "key31": "2voUTvz1U7kC6fFd5rPGWj34Jug8rhKfi2sVsJXW7rXZZao4PxhzUqXLQgyB2EKngaMQTYVceAFQPTiTx4CuyZy",
  "key32": "N3dfMHccNCxEY3nrXGM5QLAZTfiMK7PKhK1yTEZ93Mq4bPSWo4revDivcpptGhKV21rFf4F63bLVT9ibj8koq7z",
  "key33": "2RnQjm9AkaVp9PwEdkW3ACvJ6zAzdTWufo5UrwSvPxRBEHsL7FvZFUuySpcL16kUBKHtnwyFrCayNJiEnCrawCPz",
  "key34": "5sR5FJPYUrLDRLTSEsTNjg5d4VvbUdmKYCLkahHD77a7kzQWuPRxtMKPrJ5zXrbbeLfKCi9AbAHoS62Hhko6tWkj",
  "key35": "5D5x3dBa5KB5Pbvvo7bZLPqCa874vev1J5qjuA6LJG32htvPcimD6U8putoY9iLH4AxqyFmCGHCWezvGvTrt6FaW",
  "key36": "4dYzQcKBCXixdZ6shKY5qky2FASWfGkasXyzH68wUEN4STCXHkJFuDuiKeDsmZNKZBCwijiJ1PzU9Wo4gtnzHL8s",
  "key37": "5KZ8kq4MBzaDwMaruzyJCEEP66uPWMRjUeKPGNCwujSDF8ggVNjNQSFkAphW3ngA66sdFaV8iKbz6eS9CrV2tZjE",
  "key38": "3UkEaVspSAQKgkeCG5bBsUdSiZYaaK5bKYuDekX6Ty6M3ri1pXWWgo6iXStF1U1yv7sNZ8Hynoz9dhsgG6wJWwHz",
  "key39": "5RfJozVsCHBXKxxFZL5jUujvqJyzuJ3uAFHjzY4BhJ7LHpGW2PJUymeV23rqQdpHiaMFXu31SHw28vJo2Cnk1uGZ",
  "key40": "pyVeTjTckG5MSiZAMzJ2V4w2EtZciHAVrVeq6tEpqnFcemcw1x1gsbFeYzvhLPAPkGiqKdFE25YW9Q6pxCMRrSj",
  "key41": "5Ekv3ztPfyWHC6LyG23vqDwdoL5HTRrLa91d2B8Y84q74sDWLDb5tgP6vmFXniG8Wv6LLJDM4AwCnGC9tPRkrFna",
  "key42": "5ibwcimRQbZZhMkqcbvYV9VXMam7iK78e9KqSpi1ybYKfDwQViQxXmy3bqzrqr6JBdrZQgd66gFqX6aDoqDfhZ2j",
  "key43": "2bUzKkLx8cr3mXMnuECCxKwih5PrePRpL2TfAWxXoRXdDQCggCohzJsg9nDUh8J3kSVZrt1KrjAuDLQRXGNTjbbM",
  "key44": "3cfZFEYjjhX8Lau1TFXEreoRncTU5M9TqZ53UyfFamajvWn4Kuum6krdkqbGtCJYTcK4tuYd7cV24fN8W5TJJ4p4",
  "key45": "2VdJWQe1ef511Ghz8nSCLrCHtPopvzQuWQb7kk6Ga5JY1ooeG3LtqjJ5NVh1vToYsA47K9xdULrMeJ91X5FzHfwb",
  "key46": "49onLZs7X1KPPKwK8WhZymtv5BZ21GV3mwcp4nUNh6VcNs923meobJmQUNYxmB1D3w3k8cfqYuNw67uC5z5PjzND"
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
