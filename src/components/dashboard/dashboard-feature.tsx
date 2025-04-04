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
    "2e3n9sEmtdHZfnVtHLihGtBsMvruDoyLErVhxeQgjmvHWYNWz28sZfjgV3ivBRBEfH4ZKoRnXNRb8PHNQTEEgm8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XdcSpj8NosMY6Wpr1Fumvw5tUYZfDvNSJurUdtYLBRZwYcGBrNfZKzzEP8hWm8asWPCWYBoS3aVhxxzC2Bpkrim",
  "key1": "3vNYBw7hZ6sw8MMoNoQV2a6Rcd2Ja8LbDBjqqy92aznrMhS8oymzpT6jpwAthGG7QeWgdd7dNqAAADrdEZyL8aA8",
  "key2": "3vZ8aVm8Hhsd27kmZ19fhJ19m3yzWxvSzibmFrd8TpwNppxJRcDdMfNFcve8AwVY25vPGR98PY5pSrxFLphnArsX",
  "key3": "5mJLeYBHsEM4MTTixM8tRq6cSz7TijNUgm32vkAfNWsDEKevwLLZo9FgTKf5e3vMDwvSsVLFXw3dK4qrE2aQeFVk",
  "key4": "4qcAzowVzJmF8W7rkExAN9MjdBSyVC6XLXmUUvPGLn3t1AiRbMuC51ZWN1JefwwoASohQ3vXi4pzkXqYKB7t62SZ",
  "key5": "3yeoU6EUjdMyYjPSvtKPAmpUazVAc5rgd3mLtJxpMFjgQmQqN12V8i2gFswuPPuSdThyLQD4zDhMXd99Cx3c46Pd",
  "key6": "2ZLS2S4n8ZDcj5g5vzwgaRVn3cbwNfXi3Cqa8X2eF3zwUMWssDcpAU3iP6fnjctEjsSSXCiXzwSBndj6mD9NNU3q",
  "key7": "4saur7eQfXdU4H97orZgYQHUJtanESj7hsWPJxxRvJVuCZ8wp6TLLYx96ividXvFnTMran3AGMnsDnsn1mtsDp8a",
  "key8": "3zFZEWTmbnxDG6pJjbrkTHvjSjNhFY4o4i3KYBQ7YSxCMWfbfLro3JkC7qQLTxrWFVnZfHVoNXGgdvgbfyQwN3XS",
  "key9": "4jCSQ6dwSZkdoM63TV8BSXKDDqAmXts3uZdtEHvDBqSg8cyKcWdzUuRewjTox18EpWr8GourR7VdzJH7Azskngiy",
  "key10": "56AbBCAhexeUzAUAXnEWdSJcJzz3mCE79ximtPMv3AHJpfCVmQR3ousu7eB1dB8Etnmunir6fZYEvXuc82f56rYN",
  "key11": "NU4WZqbx8ANdngqX6v1XrmbQnJ2NwSotJuQygRgQEskbVniFCYNVAtfwaKbuYjvNji8eH6hEamBPgGdz9oYXgp1",
  "key12": "J7UrVRcYDZ49A1AGKi7WQWaDvShmxCpEfyoDgL1av7JFRz8ra4UPRSCdMCn4HJCVmnzMUfm5savU6rBHRjWX9kb",
  "key13": "5houxTe2dn9YYhgG2tiw41eU2DV3UB2PEfktnwhARrwB83zeGoVHB93VmP4ijoC7XNTQxQmat3GR8BhoDWXrWP6U",
  "key14": "5WTBrffgturVa76YNKbC84VAUcqhMMMJLnq8sojzqHPEcXV9aBvZziM76UTpbeD5ijTojgZ4PzACt6EM5ZrcPiiJ",
  "key15": "5XakKQNm9v6JFeom2nzXAgXpjsvnQEXCRan51gtvbD4h36vToUCJLbtApAf1wV9jzvdQhuHicHb3FX2MR83BKH4G",
  "key16": "44nT2JhUf4wje7fUBwB4oKXjmjtENxumn811fVXzB7E8nhiFJ8A9Dw1DrRgqxpxoa2XUbtHQLGNjeHQcS5gCgbvb",
  "key17": "4YwBHWLMPAgozhMxiLvD7V34z5DxKg8Ksgmydfji18mCCtsy8eX9As9z9DRiNhYG2gupyfHFGvZ88Aov8jx1zySk",
  "key18": "37tqKepJM7YPUjMov5KBBqWkftXZBW7hmygAisdke6gRxqh1dMZXj7XNjSdn1oHtXRgJiAGpFxMU3BAxaGdMfhw9",
  "key19": "2R69sL5Am5qFLZNkEnSSCwNMd3ehdSDYz8mLcF4bHYYkSdc32qU8c6fj1VAXsycwsxaYtRfMvtKxZEo59LVY6p3F",
  "key20": "bMwgcrWgSZrjm7DZiZ2qCSVBNjjYWiW5ZYsGvMZEXmTcxgHHCiKiEsQZmUXmBw9zr1xy4FShqH5zrJzrTPSkXYD",
  "key21": "UUkJpUnKBQsUGXM8TBk1hbRPgzUU5b6b71W5wt9WLBqPY6mP7UxjhE9SKmHpo6xxzo9rXbZd51rtMeyHai1RRqh",
  "key22": "2wJffJNiEyKVdhmFAKm9hfU4rbM8qGJ5Gb9vhBZeB9JHS2Hp4dGeRdASmMj79VfpeF16qpaUvkQRTBTAQ4S1qp2x",
  "key23": "2aF9UkVYJQFcuAadeD9XRbFVpoDiJzRUfH5EzVRZi4Nd4sGnJ8HxaZJEBFhVSWJ3m5R7rejbbKSksa62hMnpabCN",
  "key24": "4TPcFjoKnw5sVcNmZZzTtqYjFQ4eLbvjtLU2rmXuiBPfgw6EVWPCjCH2kzJ43gAN1qagY4BmbbWvqKMA2eZDbijc",
  "key25": "4VupdbasyUCMaz3dvrUy5Z8Em9Ej4zsUTwkjAbxQBJrVqdmVfi4e2HAqU7em4WGJvk8WJfGyx9oYKaytmviYjihp",
  "key26": "3TRi145iDsXTR4vLMaaeBsT4ch4z1X5NVje1U6JzWhxg1nGWDmCob7fZbQ1cNz99p2bnnizeHwGJBPnEdJdJ8fEP",
  "key27": "4T3nkEtvVyLwy37bmJKbpPMk9tcWakxNy1ws2rYAzfcs1SNzFD8LRDVAEBkgUsCiNM6totRYGrAAVYRpZokuRevv",
  "key28": "2fPMjLNakJd9caafTPpD9CXs4wuKHqGbDwwMWcvBdvkn57E2hznyr6d9zsntpvcgTHoLGMErbRU5D1g8XzsihTDE",
  "key29": "4gYxA2pQKix3yzbZDtgQMxVJ25CzdFAzuFp9j1Eq5nyWsw1BQkgtb2ByCc91GhZrWwbp6otcEymq5PiXnST3fPhy",
  "key30": "ouXNdK6D8BCCXcXi5zPECNzogWCCGbGrZrdjd6skT4TWN26ki1TLZ7jaMeSKSBjdNQ56ZWq5SfKHucBbkioebG3",
  "key31": "hsF5ZRYH56FQSPU9ZcjV1BpNRNBBET4cPVznxzhaL2YRzpprAnjGVEvgWib98mDbbPghw3mjZBJa3cMFTTK9UhR",
  "key32": "5bzNdLK7cosMLLsqcs3S6fdQSRVe4SgWxgacTZ8wdxgqFvoLwyS3v5Le4PcSo3n4Wpk43gaXNiso66Un32j9xKxd",
  "key33": "3cVxdvmzkZUQFSAoUMfCp1z4PhzGkXnxX5p9Hqxeuz1j6i7oJpkQRQxba3BZizAdiHhamZLStVCaJsNeqwYhLy7F",
  "key34": "4RvVSSkL3CgbeLqiixK19pddf7D71kDM4Rm6VbQbMZAmvqj832rkE2SnvGTi2YtMji76T7J42rVgnVpShz8CqvPa",
  "key35": "25tmWAUpJ9jC8URNDP8Vb6ZSokZ5TvQZYUHEvHm5wE3v8mvy8JKVU4AmEdHctJdDhfndUyJq3bRBgVBk8Ywimz3q",
  "key36": "5bBWjJbpaW4193jodCZFdDxLKH6jWMDyogEkacsc8WUJmiueUVUgui6CnYuFRkZ8eJ4S4gtyMNAYu3ivz4sNovkS",
  "key37": "2PUwDvRQmqyTVByNkpzbw4TQ9RjpQVrJNpShuyLoMuu4rNmomD5QAGakyU8UZthNJVRrweXbLMBhWLTi6V9PM19y",
  "key38": "4tn9R5n8A5QpwPpxM894uLZCer2QGcfWiJe6SNWCqajzgfh5oUu3brehXv9wLF4Y9V9gGBPaAcDTqboJFLmWnz1e",
  "key39": "4fgcbHmEhtKKzwoBshDqH4Tjae7QHxyiZUYvE1P6PpMNBwJ22JWAD1Zjs2jc7X4Z2w2W5Nrv57aScW4v2VYwrm4d",
  "key40": "2KxGsaebAJ83ukBCjcirDvffXYy14LBGupMN4ziEm1QzCgyoyJgNHMpXZuXKbv2cPCfA4rz6VXvp36fno1Lk1STu",
  "key41": "3hcppRmJydHSBqR8nDxMeZr2hs7svUM3cMtqZd2Rfg894t7a69cnyQodQ62NWk933P9Fzu86eDjuxBzkUN6kwnNS",
  "key42": "5SZym3wHZBmKdiqHEG9KyeEiv7DAPg1nuY2T4jmUQTa2QQ6izm4ESRckrLhdEm6QnsPgk3VXuVUM8hqeNUuBJWDs"
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
