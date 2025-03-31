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
    "3vW9otfv7imV2fMife76pnz8MzsyJE3eGGDNEnyN4DqTtuj2GcE4HTCpyRcu8oQJF3AQeW36nzaWMmvSjK6DBfEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8scsk54jh2ChW4JLUHeZXfgZLwLuUbocH2kTXKbAff69EYeGgmYmkyChjmMHJ6fvABh3D8mfN96meewGB3KeM9s",
  "key1": "2EoVC1rWDaXxm2QULK8whgBcVsYkcDtB3F5vTdF2vpE4K3fwqD53DfH3LmD9SyCgiCDbryJ5r9ipSuCdSKUogd7T",
  "key2": "26RwmCBYuPVmAphBrwXmwWvAy6DYt1SWkt8Jz2AJE6JcnFxafer4XLMK7ujcEhXn5DtVmZzEYh83zG82uWR3SqAo",
  "key3": "3MthS9n77mZ2FHoGpHM6Nh9x2azydKumakhwytVf9GfbuD5zEtkgZMtu7aY3x4oRscdrVmUgz1EuxpcNSce1ADUT",
  "key4": "3XMWuo9xRQewpnegRhsnfyyYY35Ex2Ljq7Yp5vutjweHcpYsddviKhQPkDgHFjSwd5rovChESaApu9g3t3NaNtKq",
  "key5": "5paKtaL1ggjSuWGxXy8NJasjhQXScZwJvRiD9F9vMsAqg8Dfqq1jQcDTv8wMjUQifk3dQUfAAR8k6UckaufKm1rj",
  "key6": "8jL34vtXyPo2G2yanknvV6V3d7WZ9ZfYrHJfxrxMGpF1kHW7Xzqn3YA9DCZvwNZ8BKursXYtvu6YXvocqfUku3G",
  "key7": "5BLAxd2sxCeKJTeUMioVKWrcx7kffqQA6xGfurMQ5Hu8fWuPLbXbWss9iLKdWVtQ8akHcWZWFYfdQjQnHiuDBtNA",
  "key8": "56PSV9fMSnVjEDdcT4a5N75FYaC6eySsXPeFki4dBkJwuzis4KscaJVg335o4mybidtMzbiv3Jf5c4og86h9cBim",
  "key9": "62SKprrDRcATcQtnr4fxRukQKAkJh35P1LUWWDHpJjA2DGZJukiTFvPTpkJPLtT72375DTK5vGj4sVYa8529F1eG",
  "key10": "2Gxhbd3CrqcRMihRr7bAydL6esHbTN7pEwsewYkSsXrsxdC52jFdR8XbqhASYBv84w42qqy5VVoSeVDd3yzRm6Uc",
  "key11": "3kXR2626V26QUSH15gdxj8jLsfS3aX8J6JEwE1GVPMHDyWCJ9ooJ46ze3LiQAwqNPw4yhAtXAVBFqjqMmkXhum8D",
  "key12": "2JMJcnf2u22g6Corzo7TJsEd4bHF1wv7mwuEbRm3jRTGNkAJRQ9mtVKDxDAKuXWNghvaaedXdfTQuAc9oof8U1Yk",
  "key13": "3ZWsFdKLgtq9C98Bfq3iDHVGQwFwVpnrCNeJPNd42dFjQEkai9RHKo3dn3KGDwsYpMT4kDrRMidCJG23vbHvawjD",
  "key14": "3H8NkU4NazyUejSbzQYTUURG4fHT9NbRV6Zpcngh6hcowLrEA7npYBaxTKZrjvDjQkcn6Qv9JH87QeBA37sQGYGp",
  "key15": "QbFgsQsfg6pikMXnJ7Ax4M14jjsixQsFZyxKTCCPU8zUt7djs83FHo4pJzxky3sajp4SuhdUSdGufPhQyemV4j5",
  "key16": "4q9yNbCgBnLHFmAX1mms3TPsLV23iAaqF7nmBq5UQmf8yYZ7q3GkKBEjBx9odRyC361xmK6NZnwg8kEzTa71qmL1",
  "key17": "2YxuNdPfsYYDLUB3ghLziuvMBXyEvxP1gSTMRj3jszTsAQFhRjqksuGBUH7ZrScA57h5BfXVKHP11jiStcADjMTW",
  "key18": "2r2yhE7EfB8Hnvfo8zcmV3jCeCM837StwhspW5tbYH7Miq6Bn19nmPhcVRjwJ2C2wAfKfCxgmnKaxYLxFPRuE2iC",
  "key19": "3tC3gLMYQPpsNe2HpfXasxmS93p6BCJbPZHCuigrKj8sqWQq3CNPaFMgxo1WFLG42j4JxsyzE3ixrCjuKPxcvpYA",
  "key20": "54PUn3mto2VjmaKNREYVPcbxqD9Nsm6PpbYSW89ASaJ5jwGH8sbS8eSKDAxxDwDRo3fDG6Gr1sACVbGC27sm3j4r",
  "key21": "3oxAPbRg83zKFC6YKbmpnQKFR4NGoJGdZthY5d7LHSdRzdWBw3DwEgQmKnSghEKvxVQUX9rtVjrRY1oudv4DYwby",
  "key22": "3Pq1iS6qzd3N9gkFNNira9pt5413jGAftA2JnzHnSmjQX9s9qPjzPzQR3LKNpEC4jcnYDtupRRSKzfmk92prQ2YE",
  "key23": "49W5pTa9YzbaaDdsL4wJkEGPqNx2EFQz7EFb3s6UmdkJFEvZfvTszRhAHtiiRphXxbm1KXG19wZyXW56e5YD2yjr",
  "key24": "5BTWbHYnYHNQ3ohyeg1VWbDviWPru3hMEXu4AqjtJ9QdwrM25VU3wHWis3BuFm1ajbgaCw2qiZsEkeR3xLHZPfke",
  "key25": "3yU9erV6GcGEG7qzAt1w3jMbnR9Xnn3QJP8QYPpRuwBvAZESeR3ZDy6zzEUwKaBXNfVBvk1QDT8p3NHFK7MXB5HD",
  "key26": "3VuaKtwm11vSrHUbYLbPUgiig1FaahW1q7jfuAyyHg66cKS1XKsbcQhgyCPhKo1tAVbi7Z7zC585kseHpjAAL22U",
  "key27": "oFDxNH2TmnVXekP9cmxRP6mZCxbp6iECYr6ncKSeYx7rDRZaz9HoTrTfoFiFJnzJV3V4prGNWbnwjo7t8Mmbizi",
  "key28": "2QYypWEaDG1mRW3ECxsQ2otPwwUbF7qnmojoDx8ReGK5yUaApMNScoAXii6vrkqtzzJohfNCP64HCrWNpsS4cjkW",
  "key29": "5ZQpLS275ShksZVXGpAgTFV3pNxc5j2ohuuwWwHSi9KfDxdC2EyEposiCibaudQ7RXgMnCqyaYYYwbLokrz7Db2H"
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
