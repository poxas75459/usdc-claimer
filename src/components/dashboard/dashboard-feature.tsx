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
    "2ZJ9U4wBDzD7t9y3xeVGqcisPpnVYweVUMo6uMBKRwUiDPgiaUL3Xe1X9MZCEN2FzHfLBrpuSmZe1jZKwAy5G3QR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VFBep4nNfGjY46oFupYoBpdpz4Kk6qHJbbzGUaLGVydvB3ATzj8QDPyiQGMw5sWqq7ieSc44AAw29HVqvJJM5Qi",
  "key1": "3vDmd6yMMn9NqA46FXawyHL71pub4K1bpWfW55PxkpDgFsLUKJnUbZfKYxBhY82Pbg2wXmMhNJ74vGdHr6o7sVxd",
  "key2": "5BhycF6rVQV1YvYai8TXj1hLEUcjzYmrVyVXY4eD3GGyykcQWe2Setf1cBJXPRVwje5YtrR4eVaFJHBhaYx4Y3hm",
  "key3": "2uXptZnBToeHhjgwBwe9iBZfsPicGmpsTfSDTyXjg6ECa4M9kwWrGQ8kHaRiwaeKjHoe3bBmTC9WjGu3NwN9eqJy",
  "key4": "4De6S53Di3dDriiWvrKvGKomuY3co34Aeibk8RYgN1sgjUHZ2RPm7HPsameQms1headA5hs846xSJX8CxNqDGUhX",
  "key5": "4PGYTvVV1osgepW8mMRN7A26PFpbwzW9S9WWfQtmFNhgWUrPm5jAiceU7HEci9dc5rCr3mmaQwB1ndwtxdKMnHA3",
  "key6": "5ufsRrmt2Lbkvg44zvmmzB2Kj7BgJrhJitGTB8tLCJcoiDRm8dS5bjxPa7fADXj8AU3JM9SBUDVbAj3yGreAeCRe",
  "key7": "3kMQAFY4WAPJpdS5h2Ca8iQrqbuZ98SzyNXkW6hXrCNbkWXcRbTuMFH6As9qZYbQHKhCYsoAvK3BGeAExY36c3TC",
  "key8": "3TcjXCahZPtidKGwc7R2B5LRX2GGE3LRaJCemUusivphXXta1LqWBuxE5t9VRCB7u1FPiPwLx653JRnm6zNVNLqZ",
  "key9": "4b2uvxFJ9yjQXFt3MefcN5cVSoQ1z82FWrsjbRHz7dFhH8JQ4d2nGiwF4CGgypx8y3XrD9wRhuLLWUfPBS3xRJgE",
  "key10": "2Gd3ceiupxw9RE3xefFqMPpWa7d7FEwsVehapDgrSgwGmnyTLBLjatMWAPDhd23nLyNMjFmm7iqH5JnLWZrfUfnf",
  "key11": "3TQRHehft7SZbdxm7BYcU5CVDJz5o8pkiqB6pRd6rs4kSQ6gCJuQEnprrSbS7D2SYY2g2zMz4agYhEhtBpMPA1mf",
  "key12": "56YkCQBfrbt5MeRWDaT2Vv2AVCL2gPcr6f2FnCv2H5PEvkN36nt228q2grngqRipfzXoWXphSwAbBBGXWzYDGYoA",
  "key13": "juB1rLNZsx5KHKXZshMY2WU9t3jbwLV4mWtvmZR9BLYMAEMjctiKf34tDogELcK9r5xq2JV7Se1sov1PZ49hkb8",
  "key14": "5zP9gCfxLy9pNsi48kDjuZJe65LhbcjF7mLpFx7AvZtj4cpbdv7LYxv45cEs8nNCexMJvU3rTYxmJFt39zSE25fe",
  "key15": "5r5CjpmRJchvTfox7MXsE8nCdjmHHeqtcSNV2GA2My9JQQJAE7gbjH6GJgsJRc1WgaLLpSWEnUANGSiaEHduCm1R",
  "key16": "57KNo4c5DNAuBU2YNRcW4Kvx696JADU7FGQyLMG5ChJov7VXr9M8vpM97XEneJJ6v58fv7qHuu2kiXAgedDWUa3c",
  "key17": "4Rr9wo1Hxp6iX6ekhKfAzgmK6Va5d3vtYfRbPbYbdaiz3PqMp6hFFUMbkBQ2TYpYb8u59tc8LNu1Yhn2pz5AC6ix",
  "key18": "emVwgrGVmrZMpJd1gQinvdr4Hwf4btbeHVzhv1G4DshCQJnZBC2pDqWXXo8pvofhRSWWtQX45MHsrW3iUUb2VyX",
  "key19": "pq32Fuqwrk2AXjza1HitKQ2FczDx4ZpRQFGqtg2E1fXLCzbszhLEvCC5qqtWYFJY9RNfzYyXMmUJxkmUGnyw6Qa",
  "key20": "3RX8WEr7v4JwisH7j6PjejqCvxEEDwm7HE4MGwCAmabcxiFEkp3gueaLUQda5ukq2WEUSCxwwCA7UGYRsEeDN8Kc",
  "key21": "4JEBYm6E9qyxHntyD3hh88dRLyg45u4kSMVp9Yy7MA4RyoMAhP6VjC4NZQdU5WRp7hUdsAqwRVXuVpAHrxtht4QA",
  "key22": "4M3fLHvSmjcjSxDSshh7tpubBz5dYhAiJ9AeQqogfpEaW1An28VDRyys55s344viiyJy72772BC7T4AkC4AGVdyR",
  "key23": "2Chq6gCk7iitGz9HqHiy1Z7RQ8v4H9M8a3BQnrpp35B7TPJM35Jbn2R8Nk98oCchjGeYa1pgqkPN486EBHmyrBDy",
  "key24": "52M7mjSVNrxjeTtDBBeuJWapPFahBg3uewNQkapspGtyLB5xkEd76j5SbWaZEXg4ZGApkyRrXytVXKhbuL2YKWWG",
  "key25": "4SEofTqJDsq3hDCv55rPGqZ2pDF18TknZpdE1TbbeyNUtmJ2Cam5WXDhmtRNeoGfZifEtAoCXmdxR6CarPqLe3cH",
  "key26": "2GBkoT4HWn4mFds7j9hKFzgMkFe5i9vwvp2dntBEaiH541ME4L39SXbwzXEWvZvFLYaS4TrmRPPiSqv15PvLNSqT",
  "key27": "2o2G5L1V9fCQXCJKfPB4XgrthWR48owQMAbufnsAHrqJK6uoXewL7M7f2Q5mP8TENHc9DvRi5Sszdy4V6QNGn3fw",
  "key28": "4uwK9paVZEVg9Twbb4MMDyNuvZgeuyb94pzbmZxGjTZJ9T3puBpTCcffytMafQawUrLubUVgkVZzkLntwbEKxH98",
  "key29": "4BugNMHVrXxFfHDMVEyD7Wb6Yr4nxb71V43q5PjwjjvhMqQVq7RHgcBNZ3qfLWP5qANriTzz1oWQHAY7wu3E67kC",
  "key30": "4u5s5gGWaPEpcvpMzSb1JqLj2zTQjAguBFt5a2vapFUBuRzFVgboVqbQrRZsmYC3cx4RvtzmxUHDDvygSsW9RvqZ",
  "key31": "21vB5enhoH8WXdKSmiJ4JP1iTtvtab1Q3xz8wEh4u6bibPG6K1MpmvYZDkCj7uzf631BZD2Dtr2SN1ASgs2hkEBK",
  "key32": "4SbgLKdLLS2xzehvihkJr4LC421GusB33Ph1RmRWvYncuXGcPjqKXxWAgywSgTd3d5qqadap9w1APv3pGRvDpgNc",
  "key33": "67e1aUYgsd2dsPGhesiCEwKxa66Jj23UqtrNaL3nUnwBboZ9b2ijumuUGAYNwTvt1f5pXX56mNAtgdvqnposn6vZ"
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
