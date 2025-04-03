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
    "8jdaiBEKvyrEUGKRca33cuCoKRUj5XfNNUVAuDD24rNw7ZV6azC5kqNevDTsLZy4gMRuVrAo6jejphpsUoneMop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YtdrfcH9dr525CY36v6KU3j7f5YNkihLXQUSMjbVgC92DWGBvQiqQkhBUSyRe6L4FCTgNqnW3Loi1f5ut1VFi1U",
  "key1": "4KnJ54Q2BXuFzQnA5mrJH8WayLMvmf5P7UeFNLRVeCfTo66gXnTKQNhJTioE2BBjyVi3stnCwHXSWHcJb5KfEtpU",
  "key2": "57PZXL9RsfHcb6LzKb2MfFvdAhKsMV9AcQtcnyhiuC9REvNvFw9gSFQxtEUkWvMucdhp24ypk7Dz8VY6yVf4JLZN",
  "key3": "5kQxzh7Kn8rNgzVjFQvoSMu8k3AD2ykxc2uN7kQubU3r5NKzfQKTC7Hz9hwaReDjaNKk7XnhdfrJkDAP9JQasxsf",
  "key4": "51pQqntcsE4mDwYNUkQ6MpGHgS7BYcN5vuL69wibQAsXwKM8BLz9fE7HB7X6qy5yhdHnPy1GUVt2cWSF13niNUgG",
  "key5": "Eko1VYepuqViotHgaYjuKjUAFdLGZuvJ2mHLViyqVehQ5Cfvz38USGs1W5a5tgbebbSd2CvrADiiYvJXwGLZYPR",
  "key6": "32LPDgDMD1VLchioEpr4Tf1PBJaf7MrpJkGvJbWQ9iwhUGTkLnS3FhtA4dkdb7W8Th1tGQzkqqrm4K3gc9cgSfbv",
  "key7": "3djiU7uWPKzGUKBFPf6SWYmR6LncfHsE2851xS2p8pNMmR2jREiBuE4TqvsyvKXGdfAiq2QjFvBHBkQceKXn3L4s",
  "key8": "2dZo5FHsnQQ31cCDzZchRfHnuDkLSpCZm2Rb6A1CDQXFZx42FQv5HmoFNHa1TRrG4jDnQjHn2LWAhAtAzocSxQrM",
  "key9": "37kJ1CvHNKjeex26MwN2WkfAAn8nGH41qtMH5e9owWeDEdBKUUQwSEfrKa47FVrJ33AsJFTzB8Wq7zcSHKmHSkbn",
  "key10": "3xxAkoEaSWcnheFcQTHb4zt9hYFBR1nnsLJgCYPh2sZQHYCAXpe4hUzqrr3JuzBi6r3Mf6CV4pN82LkTB9pKQQWo",
  "key11": "45FuPiDFeynZvJahei7snQcYys8ukyTEGyiKJZxgSzTpDQpmz1H9JcmFoo7196KTsDQjjfPrXBaWYXTLcR3yZYw8",
  "key12": "4UWpEQk3pSZfVEsh6GCyuxmdE82xnXDtCBaqgZBujBqDAHtHXzidKkFWPzeTjoiZGnwqHKDu2qRgH5VkYG5CNMW8",
  "key13": "4Ejx4RfHiVdUnDVQWudgwtpe4vmwgS4TNCTzkFohp9FRB7CSjCYJQCsfyWvynvrM6EMnxJ83eGSGCQfh9NVxaKzr",
  "key14": "3XHs41oy4gu4XnsT4WiEzhUbGTUgPfB7rYGhvDNX7gh9tFj97VmcrbEM1XNFiEr5GKXRkYP9HsnRQHdhAV7CTMF6",
  "key15": "N1oaBZnqdpuUiWX5YWA873tTWjziaF7GWQhRTNZaB7U95LiqGvwoFFqT1gFkrsS7eZ7wDQTNHJgwt9G9f8bt5Sq",
  "key16": "5ZtdtTbxRioJURg4i6PQrphkWpyHAm8rD5Ai3uC2rfdjbmwU4R6yii4sH9s3yUEQh9XhMHCv3tYmQYhHzy5TuSWi",
  "key17": "5xCzXK8SM6rfodtQ3pJDSpAVqH62U7S5YnViNrXb2L3ivBL2yfY3JZH7Qr9nZFV3VWHAbLayTzQDuKBkLJxGS5n9",
  "key18": "372AKu7BqJLwfuaeGgBTLvPTDToaEgD1QPbrLxTYBbeWNvqD1ttSAgV7cPr9CKY5pLGehfPBR8vc5LdWHsEHt2a8",
  "key19": "Z28KiFyAMxbXbHncxn9Vtuj9DwoqU7JZPP7afjswWBkpFbKfFRwCRcGgMEwwg6mEqJWmNakXaySdJi2ksgc6Xqb",
  "key20": "2HBXwXVXSyyvFAwj3398kGsQsX2YNEKS8sKzyENpLVUeBGnfa7xaoBHXSojRvVEgWUoeWXwxUZGhSwt8CtC5EHUp",
  "key21": "3EdDE4CgmhiAD4Kt1e49vrPMkVA6HkEpcPF6vx2Zj3Q5WgnN8GnKLkc4SoVRY3UYFsXbseSYoL2gm22ispeD2bSs",
  "key22": "5WqHL474eHY22dWuFT9JNTt3dUmkfnvbWSJ8ECrknwsxvLmKYVjoci41d9mMyGxYKM84QRRkbeTJmxQammQwBmj6",
  "key23": "2BEsnxTdyDTmMDGKsaxY1GLP8yMZgqQBkTGkJoFi5qHUDTWL41gEAyyKeN2w1VEhozu8HuEez3Xpc77wri8aN9A9",
  "key24": "3FN8HtisVLzu8B7UDPM9JEkrPU23uPyEW5ua7sZoQE1ojWuZtgyHVud4qKe7bxGrn8CpU2rmFyHqji8kj9zh2hgT",
  "key25": "3mQgEjQhy81Vu8LBMCnqEp3UTDvGWy8tr49FthEMMh24nr3M76aafqvC8j8LbV6ZHLRRCKSmX8U5YqsruAbA8HVd",
  "key26": "4ZfeWsHeWbuWhjaGKEkbaQ1DzAbCuCnUvYsg9adpE3ALtt2AiJ35JTZnDRB1V3VMgxcegzxRFbfWWXbnRXw5xRBR",
  "key27": "tQWN7KeYFUzWFGQk8jaVBHreY7nKUTDEwTgrSokxyEGrR1rgbANWsXpEfmJwuCYxF9MLTq3Mdjawp1QdhTbnK3z",
  "key28": "3AtZFYqiZh7eaeVLZ9gkBs7fHWTgzoWEPTWeeBZStSGTi3RECdG8Ey934EYo8GU7GbsXRNY9K8DPKVkN4dr3F36k",
  "key29": "24Bf7dEMjeVx31ZDdBvkeywdso4w7CUPYet5iyesPkGSTLXCWg2ECdXZ1GmjRy5eabuXMYRnhQqzovqCmDnSWLwc",
  "key30": "3C4HaDnSvEFu2meK8fa8zjuQVnNZBQXMFaui31tWbpfPzsJjTTzi4R7M6f2t5WAXBcJMEVGViUkb2ZjX7taVttr7",
  "key31": "44Cuof5Qtf1xZ63b7ydEi1NhBrLb4VrGPuooJAgpFj1XsstdNmQC6Z2r8pBNTwYJY6hMTVCfYP6GR2r41iLqFtkT",
  "key32": "3UBJv4BEYaFYgbvcUcDALoiRaVGM5ewgzungc6tSz8hp3n4Qe7uhYhqPSN4RcSMVYhqmmVY8KWD8DdcEk4LoUjBZ",
  "key33": "5UiewvpsXnwMZ4pEXgvHpceEehHJdcA96rMu2REL3z5K2MCELomXhCkxbsmpC6Fp5MgqnYfFe65nUwDwNk5ttgCF",
  "key34": "4S7DdJ1egWJTzdDA7K73ZXw5RrevxjUswUWscswnp8pxP5Q9sm5i2ZcyoxSg3Q2LCLijQqobh6sAAadWkwcE7iCs",
  "key35": "5aGAL37CEpPRn6h6pWrCUaZBDKshRknHp8U9q5XtzxGDYuQDvuhVrqY1qTiXGkgeFkWSfgtwZhB23zg9LYanGX1L",
  "key36": "24VCdZrUAHXPx4zoxjEzJo13t8cz6AW2Uz3PV5ACHbnyEQkpkiBNZeKeSiTNXwkMyMfpZunXv95md6UQFB2VJi6M",
  "key37": "5VRxDqmwkgYrLRUKwvGSRUhEKv8BGAZYn9hsbjfawx2YqfRwzgfeGFdDrg3dNiMNtfp3P61kTDFu5gvteYs9gw5S",
  "key38": "22Zk7vUZr4at9YwmpwNZayjz6A3RAf5QuE8N3LGAcdMXxZT4dGrnQGP6Qs8fDHKy5yuscsS6XBNsgbjDgz1RsC9h",
  "key39": "2jmqm4jbkwYU9wn3DCfvcTEVtMTqLbXwNRipydsFBAZHYvGzVz55ihXrXy9hcwogbSqxfwg1rVfefo8mBxxtiyfZ",
  "key40": "DMGQ1UFSLV3HcYcHuJ1cPCJcTpp2UGT9umUtqsciSCaCVUs53M6AK11SrXnDe8hWtUNR2x5xzDcqLZk4suRfJaf",
  "key41": "QTU9vprc1XNrgjqioEwqBNhPAj1YeAKdgHGBga4ijHuVt4iz79hc2yGKeWDppB3cn4GA3FLfR2HGEcivxLFCTB6",
  "key42": "5AJapSAGXr8whbrE6trraJjxayf5D54APjn2jfzW2BrZMRuzoqCZHeRLwF1SxvX9u8DFURzag5KGqN8UimPdmeTE",
  "key43": "3zT2VHzrGDcQWikgbLuDjPbd4AZ9RwDxCXncYNZ46HJmE2JfU76wL2YKsTqUcfkBt5iFcZKcPfeaTkV3czUomBEF",
  "key44": "Pjow5Yx4eUNkciQ621DSpk2oqPqxAJznqsMBPJsJUUzvYUEszpJ2H5EWJ5hYWnZeyHuL7c2aybnCbQscJpJYZ3F",
  "key45": "AtpcoxaZxAwgjo8d3JmCLWiQw8vb4cw13tw1cS3eQ1rQbg5rhiy3r8vKhZTGyt1U4PCiG8w5Em5UcMNSYyRRr5T",
  "key46": "tgPCqW6PQQSMyFWA9YCMcJXXnSqkvan6vaDje5vLQFNvwCxv2sfGPtPuGohQBWtL2jsHt5jBR6QjF3bA9jPgTT3",
  "key47": "3gVe56nMJmiVfRZuVZ47BjWTpzyNhm1NSXTn5rJXVBFTBkUSZzSq9UydLEdD5QFKm6kS1RQN8fJGJfnwYddg2qN5"
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
