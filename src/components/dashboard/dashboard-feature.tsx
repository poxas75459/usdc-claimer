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
    "1uSraropYFHD1hp637H3gw9iPA7WUnyGnfPjo6Cfq1xeMr8j3CyBR2vYEfV34AEenKCqEPtr59Tux9CVzKmvi1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyG8dWmdASWE52aaY1RqaEw6Htsj4ncpT9F4Afp9w65re5Jug9NoBd6zNEvAjSpitbCz7F67LU8FJnE2m4AeiHa",
  "key1": "5cdyvyVVdJDonrLp3uZpvSNdV1mbq1yQm6ytdSzBMVLdNsKoTbS3LjgAfPC74USZPEqnYy2JRnDVYAWV5Ws6nyy8",
  "key2": "2H48gbvivzt4spSDzEGp3C3Xo8Buu3DT6jdJ7F6sdKUeEBZ5LiKEAqCaFD8MPapEnPw3kSkMaKjGqM3P9FZ2b6rg",
  "key3": "4gR4tV5d7DKZ7NUZx6ZJs4FePRKydnZdiS8iTBGJ9mpUxL5KuK3j6L1ee4Zo9sZAp6dnaxDzzXhfsVWLQox7uCsG",
  "key4": "2zTFXpmQTuSdnLPbwKJXM5E34RQKLjo77irLv8pDX22mNJshfThST5nDuzRjgXgs26kXyctZH6WCLkSGGqWmcbDC",
  "key5": "65LjRT6GPR3fXVdKt1Dz5mXd44fAChUvMAs4wJMF9ihPsPdRpdEosopP6qzjTmeiGVvKXrEQ2BDNyFE7AuXo9Ngg",
  "key6": "4xRXkfSz6pDh7RpVFSLUfqGhZ6VQLfyqj5uaE2uPfjji9WGJa8XtsLjLCyFYmxv74GVJ8ySh6Uyfy8XX7BYN3xnw",
  "key7": "54HeXtRoepSVWygeZwCDmsfm9C4RHwBnUysQjKhhMgL6LRseQwuyEL5Coq6sRf45V5okicC1u7aNM323cvaPLfiS",
  "key8": "3pf5BUwjFMeYQ7QweTdmjREfC2xsJG9rgqXuDzKTenMs6uZaXQeuHc9BcmaKU5mwkobQDWy4t1geshBki5mqGoSw",
  "key9": "4CEdp9tZpDAtiovGALkdh2MRXC7fZLUn154mjEzyBLbs1T17fqvEwrV3xWHgTBtzHjUM1fXFkSGVjZuUyRCV21Dn",
  "key10": "3fDigW4sivPphZay8nefuoNPegqDxL8JaVdghTQqNvKjV2zKct83P8v8Eiv78wHPXYRQ1pdPdakMUGFtBkKX2gHt",
  "key11": "2twsZyZLiVdKvb1TcopTfMcrmMYXi4rddYAz7kdeYbJo2QGMiwNncumnKAmVzjvoXRjc9ER1g8caH1bw7VvxJv6h",
  "key12": "3ZoL28VfkHjpUbaadX1sgUkoYw3m64jaCNspy7RyBC4gDiY548fzToHKN5BP3ousEE62w82t7d1fLR4utN2sr6G",
  "key13": "4t8Udg6e5rPbzhBVh1xJ4fTXQZMTKnpX2a9b6X8aE9wywGvsF1FbAUkuyFRB1Ne1YEqESLqs3Ed3KfEnwCcTLxN4",
  "key14": "2ZCsoFZfdLf4RqqDCyGoN1zNmrrd9pTJ146xTrQkVkjSNdaorF8YPTCidhvsKxQLfUM4GL1umr53Pe3B5k6p8xGB",
  "key15": "5g51hsh3heoSwe5p12rXLJQvrkq3d5iPReRk9DfbR3Rs6rswP5PChdEhmnezYsK2EfTxuYxADxyuhbWympCM88kz",
  "key16": "2Rp4vGXbfe9GL9H59FkKAU1st9UjbFJrP11XHPQ9LFyRb3PXwyX3EMy8712DAqHkRPmb4ueb681mktwKF9Pg73bi",
  "key17": "523771pJZtveTphSxV3527Zh3GH95c57ZjcJEy4mDZ2JXvAuE6fQmTKb3eHcxESZfVTnmznH7yuscR89y9mVYrxt",
  "key18": "2DCT7xwxu5cvdJeDNNFVPg8XLYANcFrnUKmvH4YFcueiq2HysuvaaFnuN5BkfXpujXo89pwMQRpiRQRKdD8hNFpz",
  "key19": "4RKCe3HCcGnxaZmKcYmhUoqFK9JzMcUKG1iJk4R8yiY6gcYjWaMiUQs5uAWRv43nsxU5uJ353Ydj8xVbBmhDPzq1",
  "key20": "2RNCyjWDQPSbZip3abgeEKMCvBh7SiQmV8UVD22FdweTTMR4S2jtD7eyoUzMM47cMTP5fNtbPp9ZzPNy99YZbqg7",
  "key21": "2BVzk71qPo9CMpyiWh6YZMytkvcLXpNm2BHAbBmyP1s5WRubkBQmiQerfvu5GpNidBWFGkXx7QW8aFAxd4hecmHG",
  "key22": "3YRQhfQg3njR3R8Kx6xhZJsXAZVmA8d6YXndb48FdjY5ks4UWhEJHzDuS2nSfJLavJ6RPtYXsSQgMv7ZZtq25JPZ",
  "key23": "58f8AjuDFxRg9FDtaikEd94QxRv4X9aKMDWhtpPbLxWChdo7LF4Khg2CMrYYn6nADUCf18fUKe6nA9kCKk2M87st",
  "key24": "e7ExwioEg5B24w8L6YRD7a89yKKGzjMtg8VqV6fJuTnPotL4su5W8VLBjXeaA9Cq5chwd4DKpP3AAsgBr39qQ32",
  "key25": "3xVkCUBWGLRsgCeFVEQmeefJy4cZEoHqDNpNhGCwBAPNyCUdBHKoyUFqQBCQBY87wvYKEQVR2QqXh9rw5f7Tk11z",
  "key26": "bTw3teSNXCtYmm4yzokjUqv5EhzZ8VJ1MCdtvrUDeMqv3LF2vWZ7rSHpJ9ipWY1pUhpC8y5rWYKwhaUmHgoTAhf",
  "key27": "2gktL71X7eHW4kE3NmGJjNY5cAj4LyLk3d7pQTiyFY1THZ3feUEY5nFNvu5udnrLC56Rh6RDm26ufamuBVJM5NS9",
  "key28": "47HC7UdpoN8W7Y9bSp1eEVKXXBWqUGKyX3eZ2EXzdEqrD8X5chPdJjhHidXpiF5LjdY5fK6QvzoUbBvCWndr5EKJ",
  "key29": "5pDQURZkjxFNRRcbZqJRQfpVKdMmAeXua8i1oP9x9aT8ykjST417LngzwVTiwFe6pbfFhVgAFegZW85ukgCy2Twb",
  "key30": "k95HHi4mjppSWVuybQVSc9Njey5rsvnhUXWua4LFrFc6Yv12LKrsJMP1QYqPvpYKmkwc8EKhbQ4samjgu2HLQdz",
  "key31": "4qsoN9Rfxy42chB7QUefBim5FjvnCdo7N97mUFxczFR41eUWtLEzyu9VZFm2RdXnSEuNkHt5XHDC4ruGMyLJXLJh",
  "key32": "LFmbzqPYsqxBh63LPtmBb2T2P5NxgPLj7AeCZ2Kg8rYmXNGUTaiMjqvgyKypfaf4pLSFCXEttxskupokN2obPae",
  "key33": "hJz7bkP8aJL2NToBQXF797DaZi4zNKydQpwKqcusixGtkDhe6neCLdCkwfoNymSc3sqzLrmeLVm46E5gKZiaUCY",
  "key34": "3um9zSgLesRRAiVN2makXVrqAvGcEHJf42fBkX1QwjWJWMndax9Yi5cVnSmUEnSVs44yQzJnPyTpYVtyA7YN2L4b",
  "key35": "3VSVLsYGuBb6wkFNMg18jnaP6XrshTULyfKPQQddBRPhdsDfUBC2b4LhK19Rz2MdumubupVij4ZjYE5qfMSiQ7QU",
  "key36": "2aCBmBtHZ2nthpc8Y38UaTYDE4tbNucrNroWTjMRBEvhfxci8Zx2jJRDLAP4n1Vw1e3YxpjYTRpp6R5DwSbmsz1L",
  "key37": "5XFdShPgc5qHFMfKh641CLRgnSUpsk7xEh6QGMHqdzjfNZPzijHsVH4QMPggGYEb7uVbaTJsZ256KoykqhkceuA1"
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
