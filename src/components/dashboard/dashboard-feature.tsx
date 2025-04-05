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
    "3PgPzbkqc3pA43SmMUqLrXPTm4bE8ZrETYh5v6KtzPuk7HXUtwropLrq9uLfwSrHCG4R8yZsLo6HSpErMsSEPXD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5k4E2aZSqDj1sGPqc1zMZJ9K6Kx5JVmtbP2v46RiNH7SMExNbeFsAyyQEfjtfWvKMAeqw88QVgrq4eVbXnwVkT",
  "key1": "hbVnLGPTm8Kw2q88LY2QTvHfuD5CZ3Nj9rreLSUq4uVzCYQiUdCPkxqGLVfoZjKy6i5xS3JUmesfQsYfEDB8iHZ",
  "key2": "1QBgpUpUkr18XvA8v7ZHfkmpgdAu1SVTDuccKKzoBLy3gENVXPc2hoaMUHVYUSBHgRmvgPC24f3o6WPM2KGogHp",
  "key3": "46qWcnBribXnEUQnBGHKhGTJtDGRZUKNDDnZPCv9meSUgjmQ33iMWPaeaMZwu7inALagcvTKnakhAB5Bb3nN4AbE",
  "key4": "joiy4ghFV7csPCxXtjxiBH5TYGGBdkqa2bcNF96BSnRi6bsB3X2mjaTAs75hXzK3G3VrgzNDGTdzSQBAaGJPrN5",
  "key5": "3sTawYKeWRc7qMEo2kQx5Qn9p3Q8kiL9G7tsMuvCSQNv4G8FkosDHQVi6XeKfsQajTVyaQohebcaWXaW1fjAsCLT",
  "key6": "5PH33UW2SiE1HLa5p6B97yJ33EGLZ3ys4dE1U3CvUQFHoZPEKoXJdDmNFPLJ7HsMtHdVDHMxcKMiQo1BiiQDB2bv",
  "key7": "39LRVTzwRzE6sR7mpoQERgcja5FjcEad2BepypmrJiioy1FNqNBPUd6kSaCw1p7mDZhZiuTT7WFDYdVhzUxE8nAi",
  "key8": "3q9VEVmcGWTs8M2aGCDrbWYr7cJoich1AfHNGT9UBcjFPEfEVqcGziaWPCHPwqdzXBrt6vW1GPRHJ7DoCYP6iUfh",
  "key9": "5chiG1EBN1kkjBANUUzV83F7PRRMaAG6ad44iwLTZdjFo4exCu6EXRuHeRLe3bbUDBqe7VomjW8TBjawkQ6nWjCL",
  "key10": "3Hcy4pKQEQgDW3n4FAEkRWzfsBHEHn74MkmKCM2rJmQfJFLs4YieNdCQvNfrZ3iFyA44DHv9gGFVtSLV4cJgHEqt",
  "key11": "tfsBTfgSqe7QAJtKXfC2t417LcRK9QkbTXzYPmCKnRuJGRwdbZfUyYeaHyqPVctiXVfG4cn6WTyni3yB6iYr6U2",
  "key12": "3xFtfUR5wRBWsdZVcCSDBYDgp6QHvSWhCuWgHTjAtvsaMbZnG5T63SccKBqHBAbRLnxii2McDH8KRGcz3pGYjp8z",
  "key13": "48WXJFKS5HRgVfKR4HfoGhbvf8BZ9yzqG814Q2neHHY6wzhv7CTjYdM72qMCt8FDvxQJNYwKy2otVVkijguehnYk",
  "key14": "2CkDFS3mizwqCooF3vd1TEwwUGJrZZZ7XqkkmQFB5UdqQGEJek9d18LiqiXVu9HnEKANcRuBNFxECqGho1daUgRo",
  "key15": "2u92FoXvP7YdRDtMynXeQs3Fh5tjVmw9Df6W14o1t9oigVJfWSqcZH2T1hB6yd1WSxDx8TRP5YFTL7aUyRSWuvHh",
  "key16": "3sCYzzLumVnMRwsDSMRe7yQN9LeLnZPLoQQC5aiKvhMdWckEVC56SMGAqDWB7CA7QYvTDRU6RBga5idVVmEQsWGL",
  "key17": "5nd84UX2C7V1wbW4m6pTKsPqGFC2QmrmhxMfQzB4xmqBUxBgmGQWYRyoVP1E5sxDGpW7cP3H2C3noHu7aqTaNxFb",
  "key18": "63Ng8hDejjmR9DoeByah5XoEYN8kbF5ncWRYD12htXTYzqx3PwCdVPMf8KXqeaQ7i7soReof7UUu1PAJ1VGjY6F2",
  "key19": "4eCCuTfEUmftztQhNQgVUihMvLkTw2kdvv2RewtiM7bfDWaapSQ82XA7Ha4bCXgjB8HWCUEcYHDc9vrpUwYhpnGf",
  "key20": "3k26HCjLVAhRLuNxWmoNDk2bz9VX2anGKXxKKAyqeJpL8YPAgNB1WZyfxbHEKNb9G7WPqU2Z9dFHCTC9Epx4Rnum",
  "key21": "2KGfwMGPqw88R6b96RaDq4qZJbfbXnsR4dcEa2Chek5YRnpUQpipXX3q1h8UFE33abYK86izNAjo2uYCBTCVAB6W",
  "key22": "M7hkLwqSmukaF9ggJvMSHnkx2m44PqEA8Q18ey7p6RdhGvEX4kkqD9tAuxa8WmTXLK5hrzLASpe5MCYus5zTwtW",
  "key23": "ZadcxEkGiaAx8XRVzML4bdQwURe75FxzL3T8qEAGN88DWugkDjEXkAWxRnoPkhLCiaSWj9m1kvvrnrZ6faefXxB",
  "key24": "2E3NPkhqogyoBMdGWfvE5JLv2wu2DADJUCv5tPn9wtVsRts8bQvaAniFcSDjaE9Qy1tYh68nkpL5mcf1kfn4PA9x",
  "key25": "3xWbZ43ZcL4KMepp9KjMP7u7A8reryFjaYFUoaTULv39wQPkV5D9RQbamNicrfGmEPWauraRb539c6rKgwxYEtNC",
  "key26": "4bYH7KPqMBDyMqAyt5uyLTL4aAPLgEeuHN1AEdpatULTc92TKxTJJ8XYykmUaGBUkGkCPAeyDmiTeSCMWk87SD1v",
  "key27": "5vSW6rPjPhKMCv9fthFg5Wq5extaBiJQ8csbZoLxgyN5VG2TdSJEV7zfNX3DrSjjmsQ5wv84y8PzaQwSMuAgSgkd",
  "key28": "5ZJNGdrE3NdEXVepzYf17cMBU8sjfRYKdYkSLq9vL55wPUqYUeCEbffNdJs5VSrn6A2HogxmRrsnn1RERrv6L2gu",
  "key29": "2BwNp1U5sUS9muGyAAKkVTcTFSLfysYbxVQZ4b626bum9qkf1Xs2sQqbR9hbUcNcWeQeVicLWP23KPpf27JdETcR",
  "key30": "2jXsJpYSvm8qkqNpL8PF76TJqekDooRTyzLRGWvJxbdNpDd7NMDFR83BifkojXzBR1WBvhisiJ2Lxqdsz2dLh1vb",
  "key31": "3SxqCbWoQdVbgsLpEoJ9NBqq7eEFr5TZu6fDu52ctjgHQMRyWSMbT5LA6GPdLw3M84mtysWfkpRLkdE2rpxLtR3e",
  "key32": "7Q7fCosvjU6JX9efR414JwfXjhpbjJ6G6KD3JPRtZd8bDcqnou8AjHBUURFGBx9PPf4A1BSLsQJD1gBMAoFsXjU",
  "key33": "xmQB14JekHuFEcNdSZaNJ5CPRpPb5Ge8hMcW7GEuYEFznBWv9qEePjJNdYMkrTymizrFijzKjCf6enWcv7yRNBc",
  "key34": "2WgdVjgmKEL8gpmic8sLjAxsqQGhFng4ARbnyBAmwEPmzmJYdR7iuieejzwqLtCiUEARFqMGwLEU2Vbw4hJCJcmP",
  "key35": "6146skBEYmCbydUiQ9UvLfE19Pnv1EMbA3mZeoipgkjcKgqNPjnMmCPg1yoxmrevpt43Dvt8M8kewE59C9dEYe4c",
  "key36": "4y7Vq59gVwZM25hsqfDnPwdNVNz86zvvdnvo74QQQGrXmjEEkytST52Utm5uoSaMqFAd8cYbAWfYh1q2kfD1Tbso",
  "key37": "2YwgffRsHznZB272HSEpYjwWpVchyZSnmithpzQzLkU92q56ue22xY9fXzL2uTHCNKpUwThuxkFv2R2fkB179uh1",
  "key38": "3ABPviNEHRQVwvF57YmXujfnv8nHNM5ymxfmtX4dGzNcwoMNRyM28V2rFEeytTLhccJySVYveBPKZ8x1pM9Xqybm"
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
