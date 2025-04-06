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
    "4hN1yHZDmDBQZ7ZWmYjdagQo1YH58fTeSW7u495fHwBRtUeyEAkbx3V6rEdqZmdKanoh72AzeoahxYMkPrF63pJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJnoSCYg6bQrq35E1DG3YmzKtE47djifFu3ygvMKjxRHgLc4R6S6BA9nwyjzpRBLZWWRwQ2kQNiZeipJNp3ga2q",
  "key1": "3ct6iupqqEd2qCzbesSQML2G7dbVKr75L3skX6XaoLto3qg1YzhCkcoaFTnheeQiTKU6HSzbCebzMHNKZ36NNXkr",
  "key2": "3cPsGrYJLvuW9qLzzvxPdR9DMeemmYBvGCMMq6QbqtUQHLXF8TXUqtJFT1Mz6m5FmTDyP3AHqh2TfqWPMsBBWWKR",
  "key3": "33U3SQ4ftMPJxgzDEs4ZX9fS6pqHPbqHJnj5XnDjUWit9LEpFqUzNUcWBTZrrrTcDpsUwqpaSj9V3CeYCTqqyw4",
  "key4": "4U3oX5eLrV9H47qpRv3MSQTF3BWrzUDa7P2G3xjwYpQpQ3wJurJixyS1ZRcPoBThufBM6HfKemmpsak1TaubpTmt",
  "key5": "4yp1GbrExn6LPSot9ZG54JBMxUo7v7ewBzwZiWcAiEC6PW6nMLRggUCz8WM77xXamq6EhTkJ5E2UvqaX9tSCxSmJ",
  "key6": "3pj7iGG8pSLtghPKxyQgH3sTxBbMHuWVY1rBYMhPPGYVYfxP45aommPNrUGGzSXTUcfaLBGpjcpZ98JYGgmcPhww",
  "key7": "5i17oqiv7J9suXDZZMybdfboVV74VCAQv14ExmZyVukvDUmv1qo98UujYDdF2smi9cbuy1FRPAM2Ncbjgfh297jL",
  "key8": "3BtaHWp2CcyHwntMZr7a61eUxE7dijAmKtd6p5tbg61pzVKzq1Gh77xftuFqHsFvj1BuQGcaPMJ2Z8ZvVDckycvG",
  "key9": "4hwrPVnsb4ZhxipjN9uF7KZoBK6HTCfBQkuhjvidBYipMcpfhWNq9xjMo25NwwxXuUseNkk3WFzrRG4TeikSzUZJ",
  "key10": "2zQvw2zCjiHR72KFjBiep5uiJEoVPs8U9d82djngH8ChXtXjok8GMX1BsdMgbSLkBTpxptTjt6Za7poxEkf8mkyb",
  "key11": "3zUvFfdLQ3kNfcUKq58SZ1jtV6FJ35YTHybF16uSQJ4DKEXK3W235uMVL9bLTCdD7fqWL6Brh2524giNb359L3vL",
  "key12": "5p4eKcjtkLVxXYeLkG23gZRSpmYHRs3tYWvpVeDEx8hgRa5nemUFpbNyy1W1Nfiz7n5Tkfz4uqkHqxPimTPiwtmB",
  "key13": "2wKsTeH5dWyJxqZGTumBHqkyPDKJD8iXGhwn49rbD1ptWNLjF871ehwkoS9q5g4NHcF8Yq7bwsEQ4R9xDrsrJoif",
  "key14": "384m43Y17vj2b3mrCz6q6NvMjjSpXrVsbfDWkR9fb9WWxn4uhN3t6k6j6TFvKpaEGs7HV9LAGxH7R9bPfrRXiCtk",
  "key15": "5KMB5WX1bA1AWkEKbHUNdRZEPV9gSZc3xL5VcisjaQ4Z7M7Wn5FWUGKcmDKN9EG7E6enC1AoN5qxf2RqkKVHUtwg",
  "key16": "62QBmj1ff2T7CVtKcFcmPxrfp4ywuLw9S2KF58f8ADRwDoCVS4VG1amQyeHh8Vu87hw7Dqz3sb8ZJ4WVNUXAS72Q",
  "key17": "5y5cB5rjGzpcz6Lr7WD28TXV54Xeo27AXfCBCVF5LzCCwVqbRquPgENocgtHGgxBevNcovnMR9jS6r2ZLqRfvLBg",
  "key18": "4A3GVG9CUJ8rcaDJEmWyYp6EFnHJ5TH67XdKFFyAA2NRo7G83cjdUvste6J5GfgPkwoPZTEJ3HK4aX8uth3qEFMr",
  "key19": "4aPGdiHKpJVSrJmk5DsMg7iEE45ahBmGrewD4WQUd6emQxR1GKR2xjEVAL585NvNuLbGi2tSgTkumQRsx92uongr",
  "key20": "3m8eAYZT1f57NSPoHDyJxSt4rq29wNZyrX96nFbL3nZ8JA9wShDG1kNGMXzk5xTyXkxwF2b4vCgLQfnCj1DWwdPN",
  "key21": "3mJyX4k1Qi8vfs7k9N8h7cgH1dHXXzkixRZ9PwW2u2dT6UwTCoDwsUccNFs22MgAYwFPpuv69UKAdSu9UzZ14ir9",
  "key22": "4TSejF9SnA57cSCTK5P9pifYfvZoZbfmT8prPnicq5DTCUXbBqsrxzi9vqWxHEdNWmk3MtwyvWYFTfGvhcjUsuzj",
  "key23": "Nzydcd9ECxLyd4xVKwdnRiwp1reGongpJNbYpCsmZYqXyFUFw5g8ybAtU3dHgReJ1tyZKQX8vEQbMX8knUUaaWZ",
  "key24": "MHc7Kjx9csKSYbyTiAi112FCf7biAEJCAZHN4MV2YvZpWFSraUXLtU49wJtV1Yav4sSywB86UeNvrj7vnfTLJHi",
  "key25": "65xMbdLdkabELXAKHdMFgmWcJLEW9GHfvpXQi66m1KhKznDntaFE8CFHie8PhLrQotbdgGisZwmWnBnZ6VH4nJdQ",
  "key26": "3j6mZNFJ9RhnaUyzfcXUY2ffMfsoZJW1oyJPAQe7xBY6ns7ur6bWfkKYxuCVv39MDUBaMxjbib4CZ3THg5EFpxQ7",
  "key27": "4FB39N7BUemG1Tt5eq3amG9iimyD7FZzHPGwQSVWgsAnxNtbirZLQHVAL9bTntUeLmY4xayqzrQDVrNG9ibYab62",
  "key28": "2a9YojNJmnDS8nRjhpSGKYoeoR5Q3pFtG2sgFwKEhhxBkvD1S9r5dctc8Acm7GgotyfLhLzJf2MHqCauyGE5s1PF",
  "key29": "3Zdt94t6VhLLCUJbJcvExQsxHzuN8m6wYcFqUKG8A369XcTqfAzLP5vAkZMkdoDPhNLYzXipKaipX71txqrUxRc5",
  "key30": "66xrxSmay2NQyQSD6kc8ce1QZVVxcaaJdeC1nYdsaZzgkVd5UuX37t5zDWp4Fdg2AGyK52bHjVLvu5cvTcXJfUDB",
  "key31": "3ftEKpBJyGHQCTg5bKFHngYhJkt5gB1FXoxbNEwxAPMZaH7ckwW56fjZZnSagJq6XHoDcHjkNBk4u33EcJyTQ2YE",
  "key32": "BJNmgv5qDLTS3vnDbJn8qZYVDGnBtFvPhfQC8F3pQHCubyVfkUaL6KryrZXnhkK2pLfkVP5cGftt4Ux91BkeNom",
  "key33": "5QSaiTVqTFdoM7cPc2LRCYKVbPnhPMuxKCS1QcZXaM9sqCAEKzp2zCBghhiK82ceQSEeVeWFXZMxuSfdBUecA1rL",
  "key34": "1X3GiuAT4ANTbd6Qnexu9gmavEpzisvujAc2xd5Q86VxuEEaaWc7TDZDEaNuDyshXmthtiTYMXdmPs4cVUwsS3Z",
  "key35": "f7E6SX673tWfqL1GW7CW9GcUZSQ716XUL25zbVuBZtQXWCXsVLb21YKCi7tDb9teAgj8yGMQEPZhcAZg1pBWwhY",
  "key36": "2KkTYNm9UKwuU2V3f7NR9aH3sVP4Cs9RgkjfZiZzDb7Q5kUxoCYpYtza7xEnbuFrW2LRhRoJZ5TwuXgfbqvLGPSb",
  "key37": "44iAR3QZo9bFA3QUEmZwmD4dFgDenD3v4WENf4W1pNsLvgkjfzp29ibSdeHb8ZFWycunwvZHVt8BKKZvMt5iK9qN",
  "key38": "5R57a2wbbMqb3wwDvFXqtf2YKQ5HWqMTz3xaZ93JCipn3HGj9YihDq1Rcm2iCrSZKqY3r6qCNS4S2wxXSDkkBSky",
  "key39": "33ysTHDStCPNKT2QCVj5fhoXkPHeYHnFbFLxm33YesJjSgDFiFHRsyE5TNe2bzCdp4FLGx2LT8Y4do2qafqiH4PT",
  "key40": "4uh9LXQSiMJFXNBPzQEszobcm7xnMChAjeyz7pxUnZPDr2ZVLamK7cYZxWcxXcj2kT9ipxRD8SWc3JrTRDhoHHKa",
  "key41": "YjHtN6ByfVZUytYnJQhNXQP1zFr2sd69N7tLDC6mNw4QLmUE4cqGNkwot2zksRubtibjrK6X57eKW4vVTt8F2ML",
  "key42": "5NQdJ8AWdYQeFassLhxpQxuLEv5cd9sTtf6ypoxUNiWA23KRGZ8sgoJJawu8vPxQo4erTGd7B3b9eijNEWX9Khuk",
  "key43": "2xGHy53mr6XhPX8jtp1pFTQy3pNk8S9S9NSBoFNVAtrmtCAhfR79Qhbh3rN8DfMyB6d8dz99xa7LMgdDUSDEHCZN",
  "key44": "46wmiSNrGXu569rMMEF9QvA4kUay145JGHkFJAD8Y4gdX2iuqRJpPp2zi3LkWG3PMQDyeHUehgpjxNn3dQpFcC1C",
  "key45": "3nTLBikJ66jt4wRYmHhMLfwUDeeaPWXXnkA5FCqYi7h5NMRDsRfvEqF8GLDLjwrGJqhQ1HSaJYJeDz2pPjAZ2gn4"
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
