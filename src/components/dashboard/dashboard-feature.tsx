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
    "4D1k8De6DLhZWwFb4b8Zpi6MVZftisBSQmcnE2yHgfgruSdAbnKV5XcbmYLgqnSg8AKH26yR1PTNZb7D2yXrabmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NA6mNRUTbjpqL6ixbZcBsm72Gf7ZDnCRtaF3jA3srnFdaMf5pqJ7VTJLVfZXtgs41NsQLR9TZL8YoFjhQoU97K2",
  "key1": "3tvXUXtVY5f8o9MAc9LnDuV4ALPgZnG4u9vJUyfKe8zryZAPBAHrtMk1hp57FJVNNHzAfhxDGnjujBsGC5qEQMVc",
  "key2": "FeCBzn15kwLHZ1LLCn6bwqrPtcmwxySSZrfAn1EPFNQy6cNbHpsbkX3A9R5ziYNn7ehoVfe2zqhYYD83iQvzjTp",
  "key3": "49ZJA5ShaAzQ26WLJHcMRmhnPwKsmH7moU48pXPTx34E8DqXGyq5kQt5PtSUx4yXiPqfWJNckKfmHSYxMMXQM9AS",
  "key4": "a7FGVMzKvVaXG5hkwy62yUFWovnAgRVkzYg1XHfPAvjTKjjD2f9Cf7HSerVTrK8Z4zwLcYNUDfHxx32YVwF3bxS",
  "key5": "3SPgb8jCii6rsUebx9hXKYj9kNQsHEx4WUkKHdNSGi68GqHpHgZ1w9ZYeZKR2zzwFMcHemcjGSx2jsV8bNpryLE3",
  "key6": "dMZ6RjvuDRJTnwg8kxS5xKy45fe1wbgofMqMrQWVVJgoE4inY3kq2yaFJxY83LpkQJ6t6oL5safKwjRXGn8JSgL",
  "key7": "seTAyrS8xXmydgPnupj81JCZZqNX5b8pYanRW438EidjpMp6Mt6DBekhBdmmZw1mcYWcibqPHM7mzgUag9Vxnmy",
  "key8": "5adRnfPFq3B6iWMwNBmQnxwnU69pNFpfEaJpaBMDyvYzmf7xWyn4tyNj2nAbVdGBC31d7sPuJ1v6PaTRtGysKv5W",
  "key9": "4dAYJtpA2vQ38vwwmR7dowzm6HMWxX2eR5H2523N6k8KyL9yGhMcUbHZ3BGaphdR6rBFcKvnSd5CY8EMsLoMnGEb",
  "key10": "5B5M6qENuWVHpHi6uPVEyYDDwAU1BosQcCYYZ2GKZKNaAj8BsYkXvRjHWJXJA8gfDCHYHbTCvH2G7ktYxUG4LUWS",
  "key11": "5z4SAmnECbo3zLs5KNxwnkTqTjs7u8DqWtYYqhprY617W93YM8mNaFKxrkX7KrDjbbGZ8uqWptMjNCDBWy26p8uV",
  "key12": "3XSUFdfLdjrZswpLF8aLo6pUkcUwnzoReqhQvAf4kErs3VuWGPu4N3VGTBuDJKr54hsRhC3doMNkXPHHkAyLm1HG",
  "key13": "2RwLRWmTN9ja7DjZKFyfFjASSxHLXSoiC1KtbFcuzN7y3dPoCC7us8FYtwwb2yQXNxc9ZS7b2tvPKqwsfGC5RaZX",
  "key14": "3ok8mRj6DVpEnMGvJditTfGm4zkZCUigokKW9Cj5AiZiFRqez95ocVNadceAToUD8XQfoqGZeZqpeUbVqisKUnez",
  "key15": "3Wteai7H5DsW1KLjeVp2Vgbt5z3LPBEwhqmHCKwDmCwRbG9kHsFLcvPe85nkNfYS5mfs1trXdNK58X38cM9GK3vD",
  "key16": "3KNnMhddC1XpiCpRepe2F2dmnFQQFeBhGht4stsbWg9E4m8MfokVt2mhZNpRL4LzuDohxUk2SgchK6J8GSXgnnMz",
  "key17": "hDoonQgDJzkrxE6shZEAn4sVUFfWbL1EsyczQoGgjiwgHQYTGZg74JcoYtjQySAQp3Qsufdpv2DSRZwve1mNdDM",
  "key18": "CgMf3Q71mucGdpKTiRx86MoawQ4kZdB7mbcnEvMXd4c7oh2UvotSF3ohrWFYDb3SkSBUdNRvoxZqXW7ceUX59uG",
  "key19": "5AgEZF6a2gzVuL5pdmt9PCJJcW525nTPRkrMnU9p8HmJ8EsKzvAzjcHjieW1HcnsMajQNqyosdWmhGMf8Xsvzyci",
  "key20": "3rMqYq8HhgaE6TsEH3d8dXDytPcSFVLJrHDaSfP17xpQCpAQwu6Yeg2u1a79KSSVgdqhvy5keddPViQSC9MjNcWH",
  "key21": "3PxAo4pPtWuKSCKPbA82oRWVFczPzVdveLYtCzLoJGbvy3XmKWcwXCa8JvJYubQ36sCHZNjdNE4JjbbkxwX7PYxJ",
  "key22": "2dNpDvVw4qhHTr2Zs8ayWuJH7Nv3gHCw5ufTgj48MeiTCE1huRtFe2hbEGdohXfb7fcv57AtH6VL36Wrzjj2TzMF",
  "key23": "23ECNmx65yXgPv5PTQgmASZKrxPjS4jehXWVHQNUuUZbqDkTVfeYMQxMGLBQNcjF6xMWL5Hd2Sny4bBtNtsYnTAu",
  "key24": "66ioc7EMpnj7Kz3YGzUTDq232S1XkbsacFuDQQdCNKow247vccqxq1naxNuQJBkna3a5C7jf9pSbKnWq7woLCP8B",
  "key25": "4iShyDAd2FFZvSnMvieGoaw7ghft13B2ysWgQ1MZmgw1APvNvypYzJ3VvLodGKXpKEkE2cAPs5HxkGempsLf7YGB",
  "key26": "5LrFVDcY6bZdLpW88rBumRgooLxzdh2vDvft4NLhmHd5MYxmFEdbvYBvwWzL2WNEJkcEJrBrbxpDPWtQJsRsDa4r",
  "key27": "5SPPB9c16WgkGCgRHqfkugn44c1VPwZ3iJRqSrBX5nDrXQv6QvZAChYzBMjZNpzbd5mYivf4GQsA7zRUL6DRMbuv",
  "key28": "3TF2cyTkSFbbm2ZZqwTQhNRc2uGTvgphoBYk2rDaVSqiv6a6rRSu5tt1sRjGVzWp9xCEbPXWzdRGQFhHWEWn8v7N",
  "key29": "4ePzFXvFRHBgWTGejjgrx7ciViahWcDNqGEZDakgHJW4D4za2G4vYBPEpdVWEZdMy5muQU8ubjUAUQn23cE1HpoR",
  "key30": "5j26QDwAhSvtm7CE6FnJxoKALp7tg2smL3PQ6i99bUWSdn3GnKdCEQ3CZ39mMoXNnmMzUKU1gbXrsuh5tprSgWQp",
  "key31": "3HE3rtKZEVSdnSnk5zLeCpuiAXdNysrXizGkkQ2jRrPLbYUqaN6WkyR48j7i16gHEPjwak3FTgfbg6nrR4RgV4E7"
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
