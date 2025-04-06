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
    "67WA8r23iY1bJXs3rauFvARUpJM9MKDvkbUuQt2MJtmBo9Juq6KUL6iAmnRptdBfvwKKT1BdEFhjjdBgMCE2DMTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXSeijNUevPbCBKydXCENZHeb3TAegVxqVUkPmqH5yehwMBfNEhqrjz1f1RenyCJv7KeUi6Nd1Q8f56G2rHAN5g",
  "key1": "44C4Kpc9NJ8fv8D3tYMVw6jFoeShFLTqFs2uqPZfhFiJvEyhcdzxmHksDkYTsAoPthpYHXGTmeNeS6ivEU5xZk6M",
  "key2": "2GKqDBc8vNSaEZrP92HsB2K4Mj8FFJrVv57VdFEJN7ucHqpAVj4QRJwzMrH9SB8z2FGUy2zFVLxPznjM9B15BuX3",
  "key3": "3bq615fA5k5sDsqgdyTV6vBTDCrcmVE4pytCreJ4p5b5jpmqvgdzZhKCobd3ApciZdnegqAtmfH1T3imQawKUseo",
  "key4": "3aoEC9JrM4HpNbo53D1NwQikbHG6bdcSMQHzqK4NHG3UrUyQyPhHRCHvAbVWMWyF9uj6gHGhJVnThy3WUFesqEY2",
  "key5": "58t8tBCGaDmd5iWd3JAFdnLiETHi32oLY4BQ4h9FknCjg9n34zyH8vSBDcGTJo39uMYwBN3ZuYYReDVZK26WaA5r",
  "key6": "3CUNGumyMpWTBKaUESnWZNuMLPmjYymeaWUiCQ282WSYmZGK9SE3B6foRnivUg2hm4mZ8CCvPNjUqEYvjYrMWTb9",
  "key7": "4SEjdJMT2q5HhJM22sfoG4VAxXuRUHSWZTRRgWqJR1RLmtWsjLmYP1U1VpG9RFSRhDyY3KCBVmFSxfa7jwwz8MeL",
  "key8": "4oz3gNXbbWhNRb3nvRaqqbsaUh5xi6xbPsRfwh8fNDiANUbkcyUUo7jb94vaW7sNDeie7YWP3u6ZccXqMT6eUwPh",
  "key9": "YrXY49Mdb8795Z5vJHEAWAE4ScQXniBtYQkw6Ly2xcEfeAWRD8kzzqgYFdunz8jBQea9HJMZCNDXbVKpzfLFkey",
  "key10": "3m7MWXo8wn8cp7U5yHMPFAveuNUMm48M7upV5GrDP6hS2bHxrSFvMX5zbyh3fuJK5e2zWpGw8vw4aL7udyb4DSWF",
  "key11": "4GdVW87GLexzcx2rwi9hqsWeS1VXF6kZr4R7gTTGqSFFki5mteY3BnAxkAGbrDjvZJ2J7FLh4HPdSPNw5SFuLNoB",
  "key12": "3uyjyf1MMEyMCfC7fNxRnqAb5tkUhutfbZkN9iJ7Eiwop1J9XHS2WAwzrEAFw92C34ZCLjw8uULc5NcjqYC2EBcL",
  "key13": "5GPsjyYDRb4yE8jnYhDWHimGVLSTsZ2gzBENGZg3PcwmLDk6MFxB67e62pX7R3j16zGx7kbodhmZqRMcbyxLAQiF",
  "key14": "Qo1bVm2qBE33717QnH8k6b7bcxqJtogVW3vxFqjzyyxA1R1F2sXxEa1AwrBPjRX6Pz9Yhr6qaQ7h5goARShYYXF",
  "key15": "5rNBPfbagAuKyetaUnmKRTzSJjEE3xLwBsPJxwddeff8scscq3cpAamhuZjsDNCtEyZ1FeAnkHoCZF4yBDzmhFvb",
  "key16": "5ys7WjuEQfcFeSDaEatzXNTPndKVnnMcDRh3XBHg2S7aSzvH3sdhgJpVCEoSmukwbPYGtHKHRGoq9XowFUjokB8r",
  "key17": "4sBFAu5i8KuWLLm6N6Jjj4Ce1rMcSa4AHZ4kaTkR4ZtTS296MXPDHYdrUeU1JZ1U91MxzZLoqjxFWQGbMPNqSq91",
  "key18": "3xh7xhDVPvr6XyqMm25p4xfYqxphdVR4YsvXxS4fiHbrt2hqtzYPMQPmtTvAuJgoUYbFPdLbvK3PVwntrmrRapbm",
  "key19": "96LhtCfyW7jSLndfwscVcvJLpnhszfXHLjU66FdBBxXEvY5hKPtH14NYvvMpQetTviQm7XdfBAKPkuvsMdAWqD8",
  "key20": "55puo9fqWEgAVKynCz3rAJ7dVoWfF4QiLjBHVwXyPS7x89ttZPaVsBSPwc6BDr1tuTTHWDMkgaHtafcenV1GC9jr",
  "key21": "4PF218Nv2yCeoeHu7vm4nwdKWRnWuKJLhuZEZ8Z6XJy2zpNGWbexBm3xxBgckRDy6F6gDB4aFobjmK2hE4EPWqoF",
  "key22": "22M9hzDo34vYcqTj9F9f1pQ6FjUFVM3aHE5NVKhMPRodinhxUKuHuSzMtxUwhE4kjZCKVhoM5ACidnyrXoaWJuHo",
  "key23": "XWSD4vJJbBY17wmBgFgnSFDcgjdwnAVBTCVzmEcmqM6HoyDhgViNffS3So3At1WcKUCfu3NPLKenwiyZCfuD2dQ",
  "key24": "bcjnjhQ4N3TDhbdPAuPgtKyktzVgABQyPxTneEQ9Gmifoo1J2GZDmPrnW6cYPvhHPsPsf1mxRb7m6uPEbRh4BYF",
  "key25": "3nPKRvvgjsSaJeGTyTsnzfkgpgeaw2rxcSgEuEzyS2yPpiJktU7udd4NwnYneMMFkNmpkCwYwSDnhhhzhQEZMoXj",
  "key26": "26SAr8Ju8GKLF543iAijHcn1cY8VKRe7Guu9ip2LPBbqH7XQSprRyYwU76fuQRQM43qYnMdL7449MCToWQ2x5ogr",
  "key27": "44tf8QsETycjUtGk28BR9sXivn6cPJ3mW2Kb4KZsknr4kagErR2GFsShA3UYtdLajC4JSGso2ZcQna1huWABo9zR",
  "key28": "4vNk8VMKTvAtfb5WaB7E7QEzGXcGhAAAJrHeXu9Ysy4rmwQDDu84UVMJ8yjT88iE8uCaENrYKG6AJ43RSs2xG6ym",
  "key29": "GHsUZfCMBdCuwghFFpipxnSiL6XZPx1wXdRyE9XiD4CEM4gfZoSjk8wjByVWjuGMT7gbAyBmjv8ntthPK1Y9nFX",
  "key30": "2NzkMngUJbZ49dMv4Hy7QN4KM9zN5FKiBbo2aQUAKmof6Kr6ncmQxXFofBbnBHs8oWWbj3HcZ1VfwkNQbfAQFmFy",
  "key31": "4yxEauxJfGxjfawE2A2hvsEzuzP9UTuPLfV6GKrcDeY1JV8qu6n6s8mKtp7uNsWiP39Zr43eQbtdy8phRcR6zN8z",
  "key32": "r6b8GDY2YHei1T8JNMoJzTAks1UKW6DfxdcsvT5Gs4Sp4RHAATtUuLEC5DrvkStaJmcnk3zLYsx3HC4NSSLu32S",
  "key33": "43JH4V7zyGuZhYsDRoz8SJBofqscdVKAD3HnUYwTN3xYW3537D8b2ZkZN8Vc4NRBkhceWaV5FzAm2NwxC7oQ7nwP",
  "key34": "5Mo5W1TDYfXEDXaDpwrzUipXUrcod3YdYGjLKFUxk22gqVpq4cEGdznMq5e39gK35F8743WnxhXwA4Zq3kCQqLhf",
  "key35": "3NQAZXocAH3as1DCRwL8Xd8v31vcVeoS4jvf46WAtmrDbzrHouz617mpBB96Trnaj45QJWhfkQu2FmYuN3CgQ52N",
  "key36": "5ShCqB3E6UwVXCzJk33YCKtnzKiAx2Vy1GoBi7MV2Dvtuj1Z1nffnNbTht48hKqei3ftDr6LzFb28rHPUcA7yv3x"
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
