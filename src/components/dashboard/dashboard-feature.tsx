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
    "2RCNike8QPhMSjx2NPmnqqc7ds9GmY8E7tK8VNb89QpokwDf5HUJzUuXqBcpcV8T2BbmgAC2aUotDVCN1qhb7Z2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "214fBqA4ZyfBQDW4T6cR79GCzVczdTKVjWsF1Z5QgknQNne7qLyNfCD4AirkUkUZTj6gp3z4EAsUvniT8Wa4Knv4",
  "key1": "37Z31UuJ3aoePJGH4XVePNERgvjkCqpP7VY9RFuQuzgmXemYyEGpAE6AzJ1ckjJyxA2M1Ky4xiGVKQf2vLubkQAz",
  "key2": "551qvzucmXrkfsbEDAXoiS2GUXuxkkw1zHH1Lh23j6AugN9nGcHQjrEu6q1F7N5dCwH4NBzQBNVh9EEYb4Dhc9zp",
  "key3": "4SYbUXTPknsegKC54DgVP11JduArmp5aFa2FYxgewfqeZYxA5VHnCNXmD99J5TrZvhH3xwfpVpb73LuHwrjoHynL",
  "key4": "5w2zPpR3fgxFWCyQxAVBiFHcW3ESTja4fVdohXVpkV3Ds5v2v7RUgeZxxh1x3ntwHaozi66kNponjGqXjAkEE3wg",
  "key5": "5DeyEex9J82dkgxyZDpnW6MkoRSxrW8YAJ63ygovXCX3LkTp9KuUPC2pCSxUq4BWSuM45eVfzemRyw25gNWEA2wx",
  "key6": "39KMzjdc36XET3YTXjHE32e6Eqn4W2GRnDVWR5fEBfhfd8ZQhGRDY8jETQbWMVxjeee32UTHvyCiMtJmNvESVNQb",
  "key7": "gqu2Hmw5CimeCdudDAchFfqr5rjUjQXRUBxjKWHhZVtPzPjbo6oKFz9grSwfrSW6Gfm51v4CBekwhuEM7xPBLrV",
  "key8": "25wX5jDoZfKExnWD5L5qXZJV4Epn3m7wqvNSrVrrjiMedJSyfg5HykkL5n4KHa86ofHqZMb845wVDE4Rj3JRdRiv",
  "key9": "dXzwnUirRafxiPFxiZGSAmnTpX6hZ2ihkBwYg9vodWJHMYK3CM11x8JW9FNRQZCv57xCzPtCn4za3xa4oFpqtmY",
  "key10": "5dt8mTHsCJKBap47txxKQf9hSwUgLcqfGcDjbizWYS5Vc1XgBiDzXzHZ9YFPh5Dm5JMS5qAHjtBrjnSBHhdfhAc7",
  "key11": "ouZjcnZkMYCtuTDXygTdgf4fpPT9DwpbBaxa4et16XG9kBWJgS3HdoxCQYq9LxgMP2G2HFRf8RyVhb6eAdSPjrB",
  "key12": "4Ch2dLydnCG7dn2SxCvpSfCjZc3L9KyK9vwLY5pT84PsQKb99FTRpfc4FRHXAe6RCWnFmCY55795vDg8du6ayxCE",
  "key13": "UX4LsYcEDEQ96bD3b1NQ9a1LUqDkcjieGi8BMbYr8x2JHCejjm7Cr7giaTr4CxfMG2WQ6QxCk66ddW6yCaCRNFT",
  "key14": "4RVmZ9QYxRnSsw58VALQ6QFLEF54tuAnn2md9Hk3FLLUfRDQBwyp3GbYmCvdG1LFhGyfSTYnDJoAL2re6q5bkWR5",
  "key15": "4JDVgjCyx7gupuYp77JhZtnnaKvVm1vUXXPTEvgwbnQwW3ynX1qKWHu8urMAzZ1sBgBZQ7NuAZtoEavKSttA2auD",
  "key16": "616vuWiWK84muCxvwVimMvRGPFmXabHLPcVcsTNDiSn1i6ZHYxficPBFeJ7CGPEDBEoC7twmYrjwt4oTCv4y748k",
  "key17": "5DQ3xD7mrh6WUvqFo25teNLDLjDVnwZ3SfAjZ84LNzqDv1Epshk4RtUYM28Jr885ABUW3QMtyjwi4Jf8Dg5TeBMG",
  "key18": "33GHu7PpwhLY3iZuDwmTqt4qSYDX2krcHtweuNaqMS9Ruacf357wchoD5nrnL2rCFb2QfNhRTopGbiqiaPQKMiwS",
  "key19": "BfDM5sywEY4kiMBM6vHzk8HLjBf1jV7YRkqGJo4YES2BrsYZ2D4eaTFxKReXJLvdYh7Wq5dFYSUxx3HY72vyzhw",
  "key20": "5s2EujSXjKPgkZQmketpWj9LWi5wdnHKoT1aM7Ly7WppRat9cZap64kZ4CsZxEjguexsLd1wJoPdWsttbuoy5S1S",
  "key21": "3CeBxnU7CwfCzaaWpi2xHgSz9Hy1Zv8f5S9Q2dyUj2ac9sFAiHFC6b4tKCaG3AJCQTd9muT1ygajfnndiAskfMxU",
  "key22": "rHhX6T6DvKRbcWsSNFmNcmAgFszphNLnAdcLKCDSKbWsLFAUwLfUYAa9tqZZFiuZN6YNb1QwH56wMFboznVNvEt",
  "key23": "2nXom7np4XzhivbvtGy9pUtBXCkYARLoibCiS2n6gfp47WgAqvyKkpspzRJPKxKwRHYSJW4kNdbvHeitDKmevoGv",
  "key24": "2cym16RiY4wrEvnASvcSfsxJLjbCJU6gDUPPrKnXQ2tho1AcJoWXcWvbG93nKy3PM8HwEaWchS4dYJQeEToRVM6U",
  "key25": "ZQ2uMzBPhN7V8mXzgttyGk2SYUbvNd8MpATraiG9d7Rn4urrxTP3Gn6yawbi6wZ6PpjuGfXhmBc66ek1JwE312w",
  "key26": "5bkADoZzk5xbtUN9KMVytnMcQjffAV5VH9JkUV8VeX5VuG5XSMB1jxhHWt6dDC1J9Wts3AGJSLodkR8nm8aDX49n",
  "key27": "5qiVMUFqju9U9wXuko4z3TV1NhbHsxK633BVn9q1GprpP9LyMjGnswxt1Jr7i7Tkqt6nVip7azp3zqxAqUzPRwyj",
  "key28": "2QvUWYAWh1AdbHt2XUX21accC8M3FWVDYpoBQaLKZWuftRMTw2BXB3Z3pxqJ5WGudb7qo4kCYHHY3N1H9AidnVZ8",
  "key29": "3mr7FifDYnaKdLDrZxwmpVPWkicLdgdXKrFiwrKLRPTSsGyULmKgMrHBzx59ibFJRGVyTCGMd5z4gZY1JHgvxWLq",
  "key30": "dVbZ6fTwajQcVR8AJVJHQmKi2Cf9Jcgo4S6JeYkRaq7zQLPQsvXouNyW7iT5MEtMsZaTsEX5awy7YUViUWFjzcE",
  "key31": "ABeRQBAUgdWe2d5njm9rdaZ2WseTARmPzjuNs8jPVUXauNPQAcLisZkDhHYQMYmeY6HYKXTeVpdWN6CuyuRHfeh",
  "key32": "xoxthj5qg73Qvt4RafNryZN4wqdhpjH7jDYwa5qWy9pnX2ZvWyRRbgCKx4wGu3A8dexpcKw6XbWGRS6YazSm39S",
  "key33": "5eHBiPaEquocntJ1owRJpHvZ9xEXFvQmudkWpMmV67iMj1uE8aXRu177kJALP4zUjRTp2CFdA2YugXVLch2PFSYq",
  "key34": "5wbAJqY42AE1jaqKqQAWfmV2mQLskC77QF8eUaYaVufBxmG9GzjDdMPGxfo1MNeUL1sdc2qYPBEKh8QFT6YoCPe4",
  "key35": "4PjzwgeRfbK5yANRqnRiejaw4CSqJnusbXRRyJawzzxJ9mSCMMshfxosL7CgfGX3VLechUteGJkX9aUQjfeuLeCc"
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
