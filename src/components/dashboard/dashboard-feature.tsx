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
    "6HzEPjedWHk5Ls6ztqc87NAAzRTyxrzwiC4SiUqR6TZJfRxwGtvgDSRLqXnqFZrEKWjEWqiZvbbp9Q5vsEguZ74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpHY4wGiAi61DyRB9MK2FNcBMMDEGHNQd5LwWJZ35aPnBqJe6Ln1gz3YVq5SKeS9MMU6WYh9JyRMfcEpUBUUS2X",
  "key1": "4PYKmddKYaaPvdMj39f2GpTaokyoECrjkACkXDHjBGJTUiwsnPgRvXZHsQnsbnKU3DGJZQ1hpqyPnuRsbJHnHseM",
  "key2": "5TCYFhGR2aFVdDQfXyZzkUeVLMAhED7cDKWBkiVNPqEFk9JXJs3TssKKy3UQqVffrr7L6uqnTN4sSR5zGiJmJzbH",
  "key3": "4cVUrnipz6EemKoe5mMGWNXaKubsegJ13hp5FMhPSQdJDHDrSgHu2BFvPYsXPXwhzzHsfair7WeNdkJa2GyYiJuC",
  "key4": "vC2neDWMfv8gwMy32VuJbQGNSsaHw2FqTnkC1X6PNYbar1zQR5dLfS3aU14Z8ovfAPccpQGUJsX12GViqrgUFQL",
  "key5": "5UUbKeaUsMiJXUFa6HaN9p5eqAyuNiLNVgGyDXi8C1Kk4URtwJfKLXZGpU8EUR4xqbUsEcDvr4YzQnxQR7ifEfHk",
  "key6": "UJtsP6VuRZ4bG6mvHDS9BKmPimKyaQ7ajxNCa1sqvq6C9kuzdHRvBacJT9bLn8YF2dzP7PmSACnED5bU3sFg2zZ",
  "key7": "4M59ngWBNF9NsdCSvHcnznkN5CccptyWH1R8gZAD1hPcg7u7zv2EFgnsgCZcyJbUywWcW2goGKebiGaUEb6Z3pK3",
  "key8": "41giVg6pCENf9w3xDXG3qMKtiq6JxEE2LVWyBxtXTL1JAgQGKy22DL3YunjCsP8xtRtvUE5yQgZzmgaiMQp6RXaq",
  "key9": "4omAyYwb5QNvRuC1NHgzuRdAGcBNKnnnXxbbRUdjCYsg3WMoH7YPe1eADf8mS7MCPPtmURLc6j35qsJhqo8g23uP",
  "key10": "4TytxaeNAivtVYhdXEuJ27k5G7ooVD8KQZ6JvmsZfEK3vqLgWmEJSqYWHoBiNnSRHvkc8dQerUbhd4mKQyqSV6kf",
  "key11": "FEaDuoNPysUPS2hwpoTAGdSEHWBTYob4hotWfSW7HwQ86QsAz1QZz827ELGJCQRfxt9dCQhW4222wQd3WtaY5bm",
  "key12": "5KRSrt4sfT37PXuRWDBcJ1EMgXWWknbcD2DaeXaJXxFzh5UyP3yCdNuEfJFM8gp8R41XQWjFBF1TkG3CXVoS4gGb",
  "key13": "4tVJgMGTJVVevu6gtJy5PLiEu8GFMxRfgiXB4Lc4XFyUKmbVXDA4XxyKQM4QwLVKn26QR5At6WJsY9eq573PbG7x",
  "key14": "5ahYwY1ABHPh71eE7LKUEGgackgXetvZjzLpafugP6qfkHwxTJAJHm8hXQkgvcF58tRaSECcuWty9joaGJ9QpM2",
  "key15": "5i924PmRVAxSYHiQqzvhr8bzxPws3sxG1yKtHJq9rjhyEVBJggQTnabWuiQHJzMTqZvmgsZp5h4LNqUiD8nUQVLS",
  "key16": "4yu389q4q5cxEAWG6Tdzvv6Ywdwpe9BVRN8goTp1m3n5UmMAtAya6kTq8pqGBr6iW2DoTtrhXrXmh6CLDgKD311u",
  "key17": "4XRKo1vnq9jY23evVjoaN3VCBCTyy2xYGmiR1gGhcRsXzqYX6aVHCfQyFBe5niBqHuP2DxGL5UBxvZaEfWbv9FVU",
  "key18": "2bcehqD2s39Ju9EC1aRrWjJwvbv4aV9NWqiTFu6EUA7YY4HSxgduDvtsnikjmjjVTfo9ttcNFBVsaoCjTAPdsH65",
  "key19": "2b2wE8n3W78HHHs6pTHRLSeDF1vyXWAzxfXhPJ24hNrrKYskS9kgFMDkJwX5U3LyAvrRHtzdYj3hJzKN2ieeY6Ko",
  "key20": "4etVpQm9cDdD8nMcAoaFiFYUmcrgbvqJduKxE5Ajp7QorFwChWvr9juBZ6vbBrXFhF7aTXYZAHDWbvUXGuHNcSiF",
  "key21": "4ovJ6ZgHQwoc5MMuhev81J3YXYyz2fqkKrDMZDdQaH9sRxLkRPMQGMXZsGEvSQpaBdqdRqCgXZPNH2zU6HYzya3t",
  "key22": "2Vw8Npc4gmcE8ym8VN51St7r4YXvCSiWo5TH66DEEhLpUs6k5Z2AxRJ9tY9ZzQmRfFhWyWu5MCntSP9orpeo6hS3",
  "key23": "2Jugqf16qKvSdp5iwMxLbTtLzCNUaUqo9t1FATZ8KJsHX5tNbSAtFB2CtadfDKLEiU9Ztj497i4QDHQfwftY2rwy",
  "key24": "3c5kLSsAdjY9TDdH6MTAFSkBYSjMMHhv1He59iXPMmnkZMnrbT9iN1UMEU4YptH591bvxDSLYAMmFmrEQffayhQP",
  "key25": "2Kqtw2dKSwZ5hsbuikyiE2zXiJsEV4SB14VXV49QSg3Vjcpmk7uK86jXTcKJom9NLfXSMWysjSWwiYLSqP3ZjKW3",
  "key26": "rdZurADontkCioePSKCcs7bNVLnkDd6WQ5Psw3twEZxFs4kBWj4HAZPvRwUN5smykJqhqjxubPa1QNjn7fix4tn",
  "key27": "3gtepS6ZvD9tNbDHiur5WzUjkLjKtwNcs1ad1rW3kPRG3iNKSEnVAEZKgtXA1c4jYc3ywfzowjFmQkVkbNHH6viM",
  "key28": "4dHce4eJLGkaspBwSCLMpabfJ8u4CaA7Vjs3VHTF3emseBN9s7eK1EdjR9CFhwTY98dVSuq7VPKrmjfEbZ3aFUui",
  "key29": "3gQ4YDnYAHMEdZxG4AdmW8RQETajcguWvPEwxq8KP7KqK2YMgg9qCGKBxdHUAkhpFoP3BSdDjVgQCpZB9NYwokYR",
  "key30": "M2YBrttTPLKH2M5UrPZf6dZHQJfveSaXR7Lbc5YuyMBSSn7jzkDzJ846zpyZCw7vEqDqik6zEuYkebJFBgA13eu",
  "key31": "pCfRoi61uZHCJ4zAQn9G64Z8mUBYrXyuHuPxihE384mDhhB2VsB8czUY53VhPtjnkSzGYtuxh6HmXdM5PybRSvt",
  "key32": "5qKSScEozqL9SHqyG21xXCtJrPSo6GSKhdLr6y8KNnhhNaktNr4Wd3sSUV7Q2riKYM11JTc8huwKv4oNcXTWZU6F",
  "key33": "5bwUu4QY3vgFBFuuR6PtBAYbF86on9uqp9Xx99AfGkMVBvXDYZgWiY4S6TYATKc6jUZWyCEaefubgsscBsimnEr1",
  "key34": "KPTEWhtSnFTNKVeEzVsfEamBJpxXggdLwY3haPxZ1gXH3i1zki7JhmtSQrW7DqfZe4EQ7Uw8cpf2qXJd5Fr8jXw",
  "key35": "WdaGsjVRvSTiCXARtE7s5VFP3wBWDQbRXqPHGdjJzCevmnTbm1Zshx1odRrXjRC5qa2fd6XLGfEUC995qvQVbo1",
  "key36": "4w5e1zAvHEkVafGEHyP7gG3cySvhd3z95854qYGqastbaUy4kB6vTaevrMFbykftwwgWYgx4z6sh6K9MG3J4u46U",
  "key37": "bJ6eUdoh7dWfQb6mqG9pr5Ux12b7HvacEA4X2zdP4HEjQoVUvuQMz2NtbVy7i3sCSQAmfYE64UpZka2vsDtkmi2",
  "key38": "3XVwLMUTsKt2sEUGt9eXxLwm9egeH6FWo1qNwRoh7jn1F8j5vMG8MSSmkzJjtMXfiR2D26HSwrLX2ic3Fq7anUua",
  "key39": "2JNfY2J7aQckBamtpA6XbC1wZA7YCy1smoHusS3nxgZfz4LctHkStB8gShzbnhZv58MjrcnQzvqCVzvwznApLqLz",
  "key40": "4KsQpFuhp224tg2Z5844rPfeN3gAc6SoaZpDoyp3BvQ7uSWLbgFKa3JiYGR2moDJJ2XJbiKBrqq3EGr6NRDQLSYX",
  "key41": "5mHE7nvbP48i9fRLd6tRqvkRgQzQHbSHRJCSXyqHNiZX6HHbcgfFfq9gj3EedimC6F8A2gfueqxqEJwaEnXu4Khn",
  "key42": "5eiD5AgGH9MHaiL6uY7A3dc2HE9HWLYkPE1WrmWMceV9pcyQ2Ks8FByzJfWwJvdi1TZ7oyzTd99HH5t1TqBvpnwZ",
  "key43": "2bUctPkkA3C7atGiiQe9CqT9QdGnUcZ7VFsXfqHo3XziT1ruLA1CuHQwJuMVo5XA6m98ptEChpuVhNDw2rodUqPy"
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
