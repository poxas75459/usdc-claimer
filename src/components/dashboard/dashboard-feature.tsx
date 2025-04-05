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
    "59K4eyksroeXpWU9F8CZVVDULFfwPs4WnN6yFM4XoFRxijvaXzMxNmLNv9YJxukCVxnoT8bJmWEzH9CRarYskRYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KW67njtU6iyhPszd4G7Yru6QT8f6eMpqj9AbSgBR94gSV9Skb8aNLUenfKwJZF6LHcrUrgDHjJc43pL3hq9F3vj",
  "key1": "3XC9amwnfM1x36QsGg94z8SbWKfxgshjjhuNUu8iKkBLog1rq3UB6EZmPMHg53KaVWjdeL9rZ7bvywHAZ4BvoYbC",
  "key2": "574SSsR1fiyBpiRJymRvktdqheZKc4FAtJczzfomRphhy7zYKTw3ZLKZ9RKcqQF3XM4j1FvtFREi5WSuHrWBeC2e",
  "key3": "5gm88p4eHNuZr9hH7aoT1oQdp1qUNDLkD7fCG1SAWgYVojVDi5zcaJvqetAH4m14dBJTmN5JiiK6KWDUASrNU9Mm",
  "key4": "4tftNrbXeRNfr5CpeT3UsWHXBCmW8dTMfqwZj1iaaDEXGPBZrrcHvUebFJjy4MHJfF9zV28RJhoUHTapT6aCs2xx",
  "key5": "2ph9ouCLj9Dn6X8m1RUfjsgESshJ4j3PteMCG19sf6ztMtfPS3B2KYP6KzqXYiPL9bQTK69WgwQoxKUnfCLN6xVD",
  "key6": "5qxofUjPsmDA8QpQuhbAF8ZNBJeB4y4oXd6SKctk7xVbdKmukBqp8dgLvADEVCqshdSjAZPUumoE6z1BeX8bqLBN",
  "key7": "3No6aTxojAEpdxRuN7rxjHRUFKqxhWFGdDUMJeo2sf2PjomLwruiEJWbjYtoj4MvBQxoDP7Ja18wcq3Pa6n1YA14",
  "key8": "3h1BDbxB3PAM9xiuSS614uKc7GcgmkctFGj1AK9GYEq73oWCkKS63qVzNcKuqRCqHsFgxbXu2vYjUPpY3WNJaVTA",
  "key9": "3hb7JZR7ZqJTfvJu81ZaGBTKma8X2Qdw6Bc1SNFEgLj1ePhznLZMjejUJ4C2VRYqhK39X5nyLKQCjzBkxSTwRpMW",
  "key10": "sArtK63JXHWb5qeqKvsBDBux9QV3G8xZxTjuGPTYugbUk1qYzm9mvbwnaAvq9fcwEDwxDhHr7cjPrkXNCJ715w5",
  "key11": "2h1gJptPUkpUFUWBpVJWKjWi83FexBBJvgRPCiCu9uRtMzqijSKnm23kmg5DWMqJehUi2vbC7jCQw7s3PLVwGByE",
  "key12": "2g7YiKng4ai5nPxcTH1vzovQXjS5Ct2L5pBZxBCMk8ufGoHcJ3LPYmm84b8a4nWpHPUpPCoKeJpsx1YHjjxUVJkS",
  "key13": "4DczhP32LS3tzYLASpmPTzYGtnF7aPQ7CuGW9Fp8bpqBs1ewwp6jvTm9CkpHWNFm3Yn2W8LdBhvSTToiebPde1QZ",
  "key14": "3zbfD5BDXWea2o4saLDkxZSdTzbJJKCJQEwLmFJBUhyiyeE4kGxcMmbV9Urb9t295pSXg5XDbAZjZr8V4mrtxcBb",
  "key15": "54ZhAwei1XNeBtJV8v1cY8DdGRrGJiPVVj51haBtk1XfqqnC2ttUqYMQhMF6RQhzPjJhQVE3GZH7mRqM6mYnb41c",
  "key16": "5ucBtWfNCfpHrWYXKkH74aAAKyWtBrXdDb5TNofdyDy1jfhit2wisxoJWf6FfHuaRwTckub5emY883y85zPYX4HB",
  "key17": "41UxdGLqA3YkhDc1xNdzTRAMJycZikvD5mbwxFeHJEpHo6WPEsAWazMeZdcwBXUYVLAZy2A1z1vL4JzEhNKzi19h",
  "key18": "xDmzNUe2Sz1BYRHA2bfgnm4zqj5qE3cDPqZiiiCaBvzHE172LVHeX1rc42yCUmNXEd4gvQEkXEtTtwAWwEsLvDr",
  "key19": "4WzL8bRh4fibQyhVQudx5uEd9y9CnhVGQZTub4TakDX9sB7LSCw49E59jtXiT2E4xBM8x2cmgta1yxFQTRXMCnGM",
  "key20": "48PFXxkuvUWNHgqW4Lwi2im4MUEV6tWMLvMmzACktzAte9vVQRkAPgHaNob3XLHWTthAn56Q8zXNw15XXMwCvt7R",
  "key21": "4V8ba5MDYVaHifnfbWD5G6HDacKGEEKi2hRYnoN55oQJJFncW1XVXubMbZyN98cv1c9rCMNigmPZtgdMDUF3SZbC",
  "key22": "5ArBKddu1zJaNKDXvdQYQd18FF7jt4MVgTGgtyD73R1LgC627Dy1LcD7U9DHTFyaDMWSyh6s95XJnzF842uT5tzm",
  "key23": "2xfGFkYf6QEY1V4bPvA8w4yQuK4c2xfgjLbNQQ4bEhNdc1H9bEdaqDUj4axoHpuaVF1ggq4n22L4qbLmB3fj6XB2",
  "key24": "eXfVuboJJn27PkVz9dXPN7X3yWBEJ9oFGZRpPnm9jfy5EdXSbiRQ8CA4sPNKCBYKitgqoGpq4NnNkqEuC7AKhED",
  "key25": "27eje5tmYj8dn9go42AzooEHuAqNBt6wtfhckV7T4WwxuNf9a9XUXrQ2hFntsoLLBBWqjMR1PvnJH4eG7a2tUnYE",
  "key26": "124PY7bhiKC7Hmn7VwYXAjZi6GzkVubTTaMzHeJc1iXWpXUBnKteGyCo9LhbWhLkxP61MbW387HLDnuvs99ggmK5",
  "key27": "3SJ5TPNM5HUXeogvp7iXbTmhxbK7Gdto5rmPoE62tUrhfu4PxCgip7iHzeo4GvrWvgpNv6j3VsyztwPQoN8DNFsf",
  "key28": "29KWoTSEEnsYmvKuLb8ouZqKSz8wPxCDa2qNZZ86BfpDcT5hdEMtN8FyeZtT9NDUHhpguukJTcCouedneYQ5RmMF",
  "key29": "2tax7TrQKpT84LrY51gs6ZVRoNHUbibEkEgZAvuuSG7ShSMuSJkjLSiW1BLdrFiPqWoqcZPxvKDajRJjchxQjgB5",
  "key30": "4pdCkQzn9Yye8KdEUJ3LzvkLcqVXZphZmeMdtXBCBx6XZXXsdrF2u1BkfJWP5p1URMQUfLKm8Cfcn6GxAY3ZeFTc",
  "key31": "3LtzdDhZ1ZJnf5xMzST19mPYto596uaqWgEofHZhvxyAgbLwxudUzGiyRsLtGViAtw7atBskiCrP5PCepM3G4zdD",
  "key32": "2AwECb1BZ3f3eaFoxjwe8MfQ4jzwc4zqAciNsNqRJzSpRdsSVUYLagzRySJgBBY9o2E5v5PxgfPwSfgj3pLXFS6H",
  "key33": "2iV9T66i547J6kbDY5HR3wTM1DRFwgrGkJoBbhHVKHf2uydysBXjxURUhbYUBC9qTwAWKCPbsCyYY719H1GxcQ1g",
  "key34": "4moEsVR46ZY1qfXdfr2Gx7D6caeYZWtHcuUW2mYW3CHBULngcfZ6gR5HEA62g38DgwZkyKytyzVQBpNJxzK48uQk",
  "key35": "5sSQsYjtwwCokAaJy2fPKkjFbtQMxCSinCNu5M8dhX3zmtMhgZGxxyCyFobGNNnRDhkZLnJzZEsgPsKV88RB6SeT",
  "key36": "58EyH9ioSAUYs28kPgnipxoSZPzBeowN2YSQKT9AZ3ttWbddHqCXoxWMg6dL4PCmfM3ueYfgQ4fWVWNYiNW63Af3",
  "key37": "5tRQq7pM2Qy1LgTEDJRDuThsefTGTmpecdgWSQwPehdd9dufMJ74wCAKHGvsmEU1BKPRniAY9BHyrp6Nd8Jx3jnf",
  "key38": "4rDWWkNUgXw5YZHgYJWj78iW9ivhqnPNF6oJuuebQXhSrD4sTbbjaZhBeaUpC3tRWFRKHVnptAZ3Ne57NiUjL9VT",
  "key39": "4pz9t6RKAqkWNTn5et8ge52oaqsCzsKQNi6ZFwGhoYZiF4fmVR9ipUEDNyJ9Sc3aiZS3thgrh9hvtbSmyUnQ3bM3",
  "key40": "5d7XENZaLWgVjg1rCHTCoopUscmmCXW5MH5LkfcWevabNjJLUP5RFj7icDzTuvDL2QS8cH7GPchRZQSGA1LofyK2",
  "key41": "3eXzLMZyxWqVqZYgNxKMSmnDZRxFZihMrvLHXPb2CaMD2R2BzD915xkv864w97iXFrW7EDcvu4dxwboVh6reHY9w",
  "key42": "2KM2Mga3BQKDk5DUeAwn4Bk5pGNfeU3rN573deFGxkn7RzFgCgxs9sRPbHhkZzXSDYzjdcpUC788Z3WEZaxjA17G"
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
