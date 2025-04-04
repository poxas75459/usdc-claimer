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
    "5ftv3u3CbQEvbetcnFfvGae55dVPsbByPPQEcikzXADEa7FhgKdNV6Y9Uk2qYHpLQWrYUp7SwW6WtHwa9iFfxpi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiXE2MYmtHMjFaXCg53575zZnEADeh62yLeybz36ncWBEpxgyMwY5zJ1nfw8Z1wFoscPnrKjscAszASbEU35L7R",
  "key1": "3ZYHz3khPAdJ2rGAgNqPzXNPB5MyQL3HmGjxrCtX46QrtF43PLMQuWm47u1LE9VPvZPiPhgxxuKTCNM53iPAXeAU",
  "key2": "5xv8mHN32uocqinGbKqKSMNhrmrwJMEbYXRY5ni2kkrX7HjvjXUDkkDf85fzesvE6mnuAx6yp1nxZswuarMDP3jF",
  "key3": "B8TeoKiRRG5TBtb1CYn1SXN7XjJjdyVMHjHWvX9WxSVBGW6aMjLfYfazGo6eXsCjQkNyKaMPcTJMupxQu5MMKvC",
  "key4": "3q3JC5mjS7nMjBGXkM9zDGbedC3ZrpCxgTuCAo2bSxfJUg5ZZ8hNojTLdg787ZAPjZQCgs6uwojbZkZL3Ycjvwsq",
  "key5": "4XmnAHTPZsgm4Eo4rjXgw5aY5thZv2WeDgSyMUmnQ4Q7buGjdokphpeZ85VYJ5jrtsR9YXiiH7NcAKBSE4wZR7JD",
  "key6": "3wudwRgJh7aQHWzw1RA3HHX42AKwHjPm2iZUGr8vTFjfa8USgCedxs4SHetFMyJFCW5duEnw9rfg9nGAfYKydBon",
  "key7": "2aA35xuBk8KbAMk2PF8FM6eWTxnFGT7HUk4AAzPHHxCWWMqXJjvARPd6652J3Y7KqLacXqytp66k6zg87htkZrNJ",
  "key8": "Yk9dRuUNKgTDXZv9XszX78pUy3Qcw8guwzEccQoC7ksR5baUkhYJMBxgjPKuRVHVPHfTCbcxWisNmKAQcqXqPG3",
  "key9": "3AyFXeGU5pn2gAJAH91h18t8VFvECepnmw83S6Jb4htKcxW4u4TqruvaNcfpnn8UNEqg2T2ZpDHjpmMVCZJC4ahS",
  "key10": "3MCpxJET2xm11oDjTQrgKh5N1pYtTviLfAFpHr61eGubKwgBn2w4NJqXyGcAQxJMfLapKiKUEktgLeDGpGvbAbmT",
  "key11": "4dQRzTTzjbn57bjEZP4hr8yxtGnLK877aLoJXtFqiXNmGKfAoCmVBoFe7TF34GnVM5FP8UdUBc9aZaV5ohYLBBZh",
  "key12": "66oTFBty8jH2c6xnfDTX9XTroSU9F6y3zyDWromsds5RgzMKSBMx7mgoWaFE4EY1HWbZUgdkJrg2b2SSw3hAwW4h",
  "key13": "4gSN7rngypkLdTuaCUC7tQCBHvdR3QCoCJtMb1AVfKmZkHeYQPargB7o5a7a2ymSNPSAr144AuPNSHpX46ss5L8N",
  "key14": "4ffDyqx1wwEtkucX8TGK2PuDoFztLXqUTxgKrtdMbg6eiB442LDDw2ZveBSW83iZGmqZyoXEi9K7pfsfQ6umKabo",
  "key15": "5YGx2zZRhuKE9tacXSepBFVvzr9Kxy6nq7AceSWXWJKoaTPQHFyy3NpFKKHJ9pDaxURy4KU4wzjPUUd8CTvBXAZQ",
  "key16": "2vDR3Xo4vEpDQdzfaUhRsc6Ud1eTEKCbnhmFBwV3sQMjDprPfTVDH3dE5fDUNfo7qxkSAKVeBJ5fLWn3QydWaC5A",
  "key17": "5YXHGNPc8tL6xAXE8dWtChHYhTqwDnr2QMsBgHy381f9iQsGWJBbhm9k9Nh4kDgncrwDu1756n8mBBciiPtAWjYw",
  "key18": "5pHp2M4rHXGi5aTyak13RsWkStTv8SfVzdmiN8tzG2vSZJK9QkGQQnHUjVGQjd8JNHX3xnGc1vFUPef4LRms6qDJ",
  "key19": "5nypEmuKWjXu7d7TjqcfYp1LLpe3WmYtFmcWKqj1UfkpKzY76TGDJoEAguy8Lg4ENPrqxmSJWHYnyQ7JJgjdp5vy",
  "key20": "3DkcrJ3DtHc6uN3FL5FEM7uEbqRCNJEPt7WPqsEBytL9RRXXYbjc5Z87eE8zKW8JhKcSxUVB2a5bAVZyaZaAKnHQ",
  "key21": "3NpSxw2My83J5PDAGrbRRTyJc97QGkrguC5yktSKYQ6cmq9JdL8UugzrejCeZr1QYZMhcjw8Y4VPqJFjozgXefxN",
  "key22": "5jp5mExBpXyEPMrGo3Pr4nQ9J21yUF8XCTq9dQm6iPH6BSXCHnH7GpKw88uGGQ4LGpmpeGYFw98Jat3KUpqHZ9tm",
  "key23": "5cG2Tmroe14X2xLmq3rRv932wbsEjZMzqnVQ8ntLeNJUpCBChW8oLZq4xKKsbGPJa5NC8y9anaxgakoxfxLiH11B",
  "key24": "2BXYioPkhvMTXN38JdPwtpCjjHoQtiiZj64gNU7zTp3vnKVfFag1JBCQxNxCWWRmd6LaMyNKinoUqhdNwaRyJ3cT",
  "key25": "56kCRDfynvZq23G8TUYf5JjFnm6CU4ev4W523rfbfotreB3BWSmNaQwGaJUTkYWu6SNKm9SWYYNhiUCXciaNndM1",
  "key26": "kmHnQD15hnc4RJmDtWVfFVue6wqhwma9udRJBX9PSCMurFxuocUFvrtstEDabmLq4iyvpYZDuUKtzGBB57CbwCA",
  "key27": "5VZ1on5r4QMXQC3omzqQMTS9RfYBWt5jwUmaKy1MtnmGF8KPunduotEGcg6fN5juyxUKGpVqDjkZi4gcERvqD9q6",
  "key28": "2twaQzBdECdU9mB2n7bpHynHHH3SivFvJpAt4Rv8BEc6LdpAN6t9Xvr3yANJnvpNTHBUkvfxCkQQei3Tm2GQiahB",
  "key29": "36zndZSCYY3bvHHwwXnBTigb5iAZEjEPLGE6qb157VRTKPmzcoF53sTSUGJKCCDEe6dAGtknuv3SzDQeTpLt9GKb",
  "key30": "38c9qh1cBX2WDNd53hQAe7qVVToGZUeiHvjoQkzz5yYrKFGaTEDM5ajoMdKgMuEWikaSoBmTDnFHukdqtNHavGiv",
  "key31": "2KND2XqdQFicebrk7eQLhnuPaziMoyAVN2FCT1iL2TKrBLSrCotagbEmarSZLtpNLt2ySBjB1WdReXQN1YM2aXJS",
  "key32": "tB1uGnuh1cuhRGTXUvJuvMP2h2ajmg9QjNwsYbQMLANoRS7jxtkHVMHQzrDUGVWfk9i1zhh4MyXjc2kNRyjxhS9",
  "key33": "3p8RLFQLavb3bxadr31dsvDDgKWv4yQ3PJEWHZLy2Caq2F5D8dA1UJjG1row81pDsLSwFKRSR2FMj9KggmPKb1X6",
  "key34": "5HC7ruFABuCoc2UPs5rHHws9WEe2BVEhxbuYQ99VCP7CqKJMGAYyfRd2i2Bo55yPQdWJ1Jn2JQWH9Ac8n3di9ZpN",
  "key35": "5qvvLoHRD6jyPo5c42DWBTwwPS4jEygSv6DW3i2ufG8CtUSeRQPJaTJMmXYtRKvyhfDC6NF6eHwcAVbrRvYxbDUG"
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
