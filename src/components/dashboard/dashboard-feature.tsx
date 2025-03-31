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
    "DDL9ZmHfrbedyVnSx7ktSVzDLiejE4CKx4UuJFdR2N1WdSZdoEnWfrGTAZzdeoHtWLFV4ENnn6MxysqAu9vUmaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAgW8xZf7TWsoT132f1yZhMFnLsbNPpPYgtGy7EdxNXBtDKvsLC78nCJNwBWrNwnPgZarZ3MfV1mVhqWGCsgoRy",
  "key1": "3L8G4z1pQWuYvbNvugeKaik7N2z3uGJQSXczPBT12LxpUQ5Q1JxWkv4VN4ecBf5oafk71QXrouwTZZMo7MFyMcFF",
  "key2": "2ByToFYtycw2VRqj66Ej4dv4mXzFKgufjVYkNdWbcvxMEJvCZ9XK7FF6iqzKFJwVCvWdTsiRKysYEwU7mQGc3bGg",
  "key3": "2RDEhu8AGMapf2jvZ8vwGmhRrTNfZFVZnifTMhgaD8jQvgpHJv3Vsj6HBE38PwNvtxZJff81yoXXxdD2EStSEjH",
  "key4": "2gu5yNiuh1r7rUAUoaG4WkcKtEPJL4193v7EKy9zSA9TAcejg12XUuxPEmsC1NYVZqAV6A4CteAekRyF7h5AwWFF",
  "key5": "2kFiCtd7tvDE18nDv69RjwJQhHsPkjLY89KiuEMrMSzYgmquiLD4yYuaiwoWENc3PsyGQhB4gVx6hwUEFPPTGwz1",
  "key6": "35FH4frXDAqi4zq2QS9PDbCYRQzzLWbBMVUsB8UJuk9BZNp1HCGpTrBF5r1VhfJYLXtbmbP23PDLxMv484PwqYMS",
  "key7": "34hSNvrMo1KCQ4gfpmwNUbMBFssFztBFP7maqcMDC1JoEDb1D62QDyxRmK6sp3iuUp8uUvw45erHQBF7AmzTUh9P",
  "key8": "3h2mwHMKXtZpPz1GC3E4V8rfbpLWAsmRyExZuWeSDdFvccU72zVJNXNsETdjVeTrR1jjPtLLpo5XgnAkAyF8PGCP",
  "key9": "2jHish1kSytTKSvB9mE7Lxko9zW9azcXhW8pXBp8EYzDpjBh2mNbaU7ZvfJAupuppQJJRZT3GAbx51BMugQgr13T",
  "key10": "26S4Ji5EhnvmNzdD5QNybLMrai2eG8r7fXxAhxusjkSZ2kUVxnzesfAk18zGQsRNQXPnGWJQuq5K2LDUwgD6KkD1",
  "key11": "52Vnp6ww5mRzLBq8rieBBye8Cz7dEk7vgSqyvn5xtyC5zrxiYTPMxx9gQkrJsGwGnTAgxLQjEiJGASJhpcGNDuBM",
  "key12": "3BaTBxRu5PcXyr6tAroEzKXLhMrWin99shWWrQmQL3J33ED5CMSWCL98HwyCbPSiiHGNfE9bpZcSxnArVu89i8ht",
  "key13": "4JoTBemizoehq3b6PhBqY5AATgPArb7YkcLGc6qBEBwMExAM35yoCujrFLKpz4b75TaMuNQUxd5cy8B5pSpEe1G3",
  "key14": "2WUjQrhCqUcqvRo1N6bL5FVTzgmnaE7Z2chMhQxXqvEh7Pp7GjWPrzQCcmBFkQFMyHVtiC71q1kcg8YzkcmJe1pC",
  "key15": "3bZ49tHqtfkg72fetbmas5ojaAPDNedupJvC7Ho8QbwU394bUHfgwnZLgjbW9DKXms4UACx6ieR9LHVVvZvLGP2y",
  "key16": "8WGagEoXnQmq61vgv1WjKyVFJ7Wu4t2ADzzWLENKdUFGSubqPaSRYKVcpHZb2jKgLgTygCyzJBrV2BTWuypwtYH",
  "key17": "4seC27wq59RsFefNqTFWsVq3e5ZcwNZoY84DpqqssUJzXpUof5dHnUvS1tyvsrAQYZLxTjNomo4TSBd5gnGcUHWH",
  "key18": "52VpApr9Gieq9pJ9CFfiy1VLhfPLf6xi9wQqVvcHJYuwFHACHjz1evRcS1mmeieKjRU6rwxSsojGcCgydSDcfWk3",
  "key19": "3V34QTSyGuHxR7v5agvPeA5ZVm7nS22Ks6Xcgt41egHbm6juMZXXx6p75oLJbwBHT8Sv6XXCLMe1eG6PjjPaTeUH",
  "key20": "4gAVMsczvBwpyQvvGq5d3nAqBJkkcyYkMCjQdw61u1QanpKCDkGf4iiPq9a6SYHorSo73LLDz2uBv6pmyymxkQQ4",
  "key21": "2wXQj13YJJwnPSrfYJ2CEWvyaTstZEeuXJuuk5utR4cdBKn3V7cj3Y3qsHc3QALFmKuFkZgqt2dCja37PmonF9rE",
  "key22": "JiUuUwFWxYd8qKnBrXo1MrNkjSTJs9hUGrQoduYRwaMHBrsBtwMjDjphDXYFzMnq9sQZ96tYR1T8965pAaBVhcf",
  "key23": "tyAm1SYZ23K8gkryocSwjnHiikXiVoQj9BjV2MQ99JYs19n7hX8LuvqbUhCwNrV7jwhZizDrA7RqP3niQwQEQGL",
  "key24": "a6pZp5DfyWpbm8GCjoEitXvp7PpQAtFx9LvXgNPPMVrJ4pcEpA5XkEMZEbRicAV13RMvBfuceY4oAAjHAN7yZEV",
  "key25": "5FGjeiwsEV6XLieUxW4wcYwbMnZtYunFea2pHsZQ9VmMyprPX4QLSKdDKhyhpoPtpGrHX9PcJPe9CCrWFWwnAzkm",
  "key26": "qZNEavLVGeBCiKZnySQedBSn14SyBwmLdGm2dz5azC9ZRAqDpP3zTBBdT4GcfqY5CdULSEKWjtqKY2bvCbdd8wM",
  "key27": "2iAFcDaYk7zwyy8LZ7YKXbEMVXx172SY9W7A64QNFWMgDbrw3XUtTKMNomKmbhMZw18i2N5TWMaUUyQQ2VxsreDQ",
  "key28": "gc53ZXpnihEYfB4Vq1nwb6dePAsm27sdJbiJYVU5m1V3DwDHRGCSz92HKLhcEiUgK37AeEXNXAKAignGmkTh3Kk",
  "key29": "6323KiCtocKSvBXMr7JYWoK7wvBjFExYM26gy2ZNpP516xYQdtZeGCPTeuzETRph7S4wySFZz7Qebpp22wHANWpN",
  "key30": "5VSDvaZingfSe2jHMAWAFTii8wNhafJ77zreiHQGxzhJU6SrvdvTHEM5eUJA8wVSkKzZmi8UwGeqsQJxqUAezHZt",
  "key31": "5wUfabXLpwfTffbJYaUhd4cN6k19EtpAPTgtqHJvRLbH3E8LPmu8EFRCbJ2dxWfGSToE7rKRXSKpdwsCj5cNMZmu",
  "key32": "57VQLQnTA74C3o7GugrPmsbKuq9DPWA2wRadLSvNU6Pf8v6E1PP35XMZKv2tCHGTQsgiMp6dMXUxC8uottmmPqNg",
  "key33": "2cx4AgD2eXoucqMwDExe3Z3dSLTKZQK2BS8WX1ej4uGsByHv1kZJbRvMFAc7yMoMuiNRXkFs1WCD5kmiwBN9NQUr",
  "key34": "mwtDRtJNw9SRf1Swby1qUv85JmA4wyCXRUTTyDyLPhswRetTQcpCpL2PzRrZGq3ige5smapWJr8KtQ1gW2TnQF7",
  "key35": "yHxTGUDFvTkHRJ8h5c7dh6XjTXStXWmyGXkWui3TVyuF8njuLiQWeKRueqReWTKtKpkium44nx4erVRekaMs4ZZ"
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
