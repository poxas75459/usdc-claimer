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
    "H5z39WUpKDwjQN5d2mStzYVHDJfzRktAbqGxAHdmgdJcHN7ZW71txvXmn1k3N3bX68Z6Jkrgo96TA2CKiyxGsNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXmCDYxJaZ7bo4HN7KXjAzoQUSkr4FuQ3cNL7iLqf7JfonUcovSre2ZB21bfbfZzkraWiJTd8kPUaswUpqMVRNj",
  "key1": "4Qa4ZYN1dmcP6xJhdw2ixfRSvmtkTw2v8gF8KZyuBKd3uo2AAmvptERWPhECQz7K1CQy2Wzv4shve7e7yD9j65hj",
  "key2": "5XFhzCyUAScKB3kGLiwuc3D9QMcsVsmmGBCwCYjHSjh5mMvXJV1gLMBWdZUw8EWcqU2KVoohZKktQJGUdL1obqWb",
  "key3": "42Q9QDdjUEj7oNuoHm2wjcnfhY3tighNXq57YVrMN11FBSkEGCG5Kgb4WcrEDpSNwJ1rFejbDubwvLFJpTPkpnn4",
  "key4": "34Z4117k4NEStAxgKG7UShXGCr4Wf3xikqpp5AGMGni5jxU6z1FLCPtWMgG7msShJLouKzwaXPGevePKcT9yWuG3",
  "key5": "3mpuTKCwefvHtnmUg6wb5w8tADdcrpJv1rLxhbDRgXPciW6yN1yF4rPLXgXiL2WKYyd1Ek33WMEomWYgQ3PSLdgi",
  "key6": "65UF1T2qakSLCt8UQn7ipLnNWkGCSihKjVnJBbVnK7MyEbkUdhh8qWDmPzuahA2QqgTX4mw6483xsY6r45UTQjXK",
  "key7": "3LFbA2MyxKpaJcbVkEw4bFFmmd6DTNdYWVPGa7ue2AvfEiF6VApst4Q4DJpzcgzHgUZWAHtwNHbFrVgL6xHMvhn",
  "key8": "NMFsMRBS87Hkmrf7PoUNmYCKCwmvSHCwCQThsb8JtXsqCvyHSGNmesVbniJECUTxrDfeqRU6HyseW3iPXipPzLQ",
  "key9": "2QnUdnLqrHFUxMsHFquwZM6dvKC1JTajFQQwbtRbXHi5MDAN2JjcicabStyNuRSnMXR1tdUVW31ZL6zzXsfePNZ6",
  "key10": "2CUBaE5mbNSaXkukkBcQywv9Xudvskmoao8ppfJhf3NSEopTzFpRBCTQNx2XTuWm1R566MZzhTVfi7GUdsBqPTSg",
  "key11": "4M3xSdXueCXKvVmBcBVzN36acayRP7NWPfyvahHgWY3NstU2yA5zntHz8WoSoevBsEsSgfvRs4Tuy9kwQuY5UvVR",
  "key12": "5kUxM22baBHjNR8xxTzMVfruWuwvq8bH1H1jd7pf7mvqKmsEzjgeaWqJPufs1nCRgE97XvG4Lng4C2tGWvNszynE",
  "key13": "31ZvZmimCGpVKydeyYUErvKKi1SiYKbpAJh26JsDAiD2nf5LUqQxPxLLY8g1uNcHEN4uJHqhVvRuSBMDR3SetVL3",
  "key14": "4nGpAJ3ghQMariSoCYi99Bejhw2TS6ZXiJ8hzK5gEpH7opHy3k21XPqAbLRXHBdxvRmbB9XyYkk1qYFRd8FUJZqr",
  "key15": "2LvQMCw3gsi4Mtxi9caMdo1VtAjchHPWkGZD3tE3eRUvuESqEtFNe6VwHeJad8oHW9edTRZjhJBN8rVNX17qUaza",
  "key16": "4GBwofb5Nc3W5WerqnjpwYAZZKXF7p2uk6jEGCQL2dmrmpFNPFFJ9iavsYE6sEThA1k17t96BWsCN1aovbCzSELE",
  "key17": "5twrgkxUGYtxDrDUV9XMxzjbu5WfVwcWEgkSqR1VhY2gxpiQF98yi8mEvpvc8ubgZeyB6WS1HcZKy7wT5B2f8Cqc",
  "key18": "DuinQnatp8yKUpBxE43s62x6LHR6HEj8UgCdXC8nvHmTGrk8udxhCaWZUk6mLP4UCmv2Xcvj5E4ujQkvSf8BQXv",
  "key19": "5bjJhK9UT3q2Wd3X7CUMGL5d5aVsZYRkk1Xo8vAb5oGnetkj4Z3RAXMztQrZB2eZwMLxSurdwc1Spruw55wwy4KN",
  "key20": "56PczeY7Xd914SRbmmVT3BTXtT2HZ6CkPbWE8hMgMFVbpJTwAe8sddC68j6uf71LY38s4bp9oyiESFvqCrYGJFBD",
  "key21": "56zz7f25pmWJ9G2WCo2MYLYYJDZuu1b9J5JmgoYfNbfHtpgqX7Ugt2HDND61VYYvQvQ4dW5paqaspbSxc4jZJu7d",
  "key22": "4X9h9UCrAuxgojo6GvxK4x36o3DZJ2kiw4SVnhJu7V5kE6SULqtPy4ZPqJVnBki35giThiK4yeCDaxyxjU2ziYzn",
  "key23": "3x8fN9ARb7p99WZ1Atp1fwdCG29Tq4Q1zGJqLNdP43nq9MvZKasgCsungoYzVuVzzTRKywKwCtPJtpyxF6aHgFQa",
  "key24": "32uoY7ZSxAMPeuYZVM9TPnQbyziRfGrd7ZoTL412rRNSurbxMXUm76mJnphcycv71a18D4MJseuyMtwhMKYnd67Y",
  "key25": "23tSUj3PYTxr6Duz2KzVTvL6TkShQcSew8UpnFVTKx8F2YuAQEubsqHoyvjkqjPTdgwPvfTGBMossqWAnWsKwbVY",
  "key26": "4oHyTmVbMk9V1Ly5hBatSuyAEgP9JaNz7uAFk83GjDjWoW9YsUCQ9aqwNZJhFfk1iUdj3sD4dnJGjjCdEcGNkQ7v",
  "key27": "tLkpJymLhzYBs2gayWFVVfB2s91x4KfK9iYZV5L53xzRf2gcSpzmk9PhNhkTgW3CzALWg6kscCvYEpwMm1yALaR"
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
