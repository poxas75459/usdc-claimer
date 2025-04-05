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
    "4Xy6UKreRqZCJ1k2Km9eX4LMDJ1GT7pzm3X9ce9qX84ZGuEbusV5XMwgnpDvNpfjNh6KWS2Q8AMVurNu5hkZpZLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk9vNx3auZMTe5uFRujFNcj7ABxUN3FKTqjRYmLmodGaeqLfXCv6K6RxWGmpXUkBY8hh1foMzPJTkYsuWmHcHoj",
  "key1": "2tvBkTQveHYxedtiVbMThGPu9GfjimfXMtnbCiuAMkxHinZ89AkZHJx67hPZJbQ5ZPo4YLhqo8Z54HPRz2qPg1xo",
  "key2": "4bXtL3GTs6SP5DwUjWfHhyrB6kjonwCm5HHwXrJrTEhAZDjoKmEor6W1J9QNhumMws8hzJEJaG5ghtPmunNSqASm",
  "key3": "3wUGokWstiHGaR6ULkj3uDJTs15JxYKFJzfxG1KAwbL2upHYEkuhpqpZynewRiqnKLGyHLJjtY6YzTKderAsd8hL",
  "key4": "3B4XHnZZzHKuoo3tDygKmxBfFm5vyeJ8M4NRS361HFa7wSUMavDkfW1urYZQ4vkpkTcGreMKSTTcpyQKVhvqgDbE",
  "key5": "5LYUCkj5mzQbKnbpyxA9MoVA6RWmCUwXBYnuZe4A8yeEPiFpp33FjmKq5UZUge6vBtiWG9eJzJFpDXKW46rFmZM4",
  "key6": "Yku5Kr1jCodavAEm4gnbMpjrraUPNzmQxgEvKV2GgJpAKVzobvQGMSiB4q1NKRM9tFdgFo39MHXSRPpQrSWvzgz",
  "key7": "2UjrDxNtKx5jvgW2cw794EHKpFQeAR4cG4CJsmgEaSQWE9V6x7JpsR2yfqRZgVuK3TmXaBCa8xvkhGQyzb9Pm2nL",
  "key8": "5PzPJ6ozxXFJWyHc9oASQyxS9g7AkbdJJMFnL36AWMxUDhTuhhmqYoquJ98wt87vEigcq7YZ217ano6H2EkWXc9w",
  "key9": "475U9KY3jcZ9cwvkKhCpqLNb2GgY5JJpRkQhPoFBaL1qVjFK6BnwRe3jctpqgfTJSF6FD3tDeHjDCTD2FBT1wV73",
  "key10": "5LGunJmtJwaoF5FSPQR5YvYtDDvyX4YCkeGpb1upnoHdmNmpZXmeXujRedFs5ZTahBsDBbNTnhWtFqYDxRZB2zsY",
  "key11": "4u3WbNzQkjGK9aLtH5x2it6pht97QEqqQ3m7yd3HqzZGLDMNgpE3E8PYhp9V5u6GFxyKHBU3pfC69aKQ1Scj8ug2",
  "key12": "Pr9vd8eXjV41wB3hixCVWPGavoEd8o2quKn1y99Cg5HvNgWXLByFaHthxEiB8zCZgqRQhBM2BWEdHweZpXYqyq9",
  "key13": "2FmKb7mrojUuKjP75kk4g6BChqAjHHX9oXXRao3oBny5Y8TY9reoWm2YnkRAzY6AQK5xvcyDadaJzjSQhnSKWm8M",
  "key14": "cAXtmy8ArLWHsDNGqjsdF6SdmXdAWMYt6ap5EjJWv91xLKWJ9SKZqsrVxCAjmmWYEYz7ebkGtzFZQEUaCYJBs16",
  "key15": "uo3JoHAjEu3s6Vh6tyb2jFSjjmBeCtQ3RUpnAxrEJvbXKAPNbxYuKdrR3432ad64VxHJfo7NUUeMCHJLmSoGKA2",
  "key16": "4dz13RmF1ck7V6zpPxH3ifpjQEQbUcfe1YhHfY8L55AKsBVaCyx8qRJeinrtwUuX5wJf6JFr4WaY3rD2FpxJp529",
  "key17": "2GZ7peTmvVZDyFNWzeMbVARbKwSYyXSN7BdJ5oUXeWBqVGsgiixUMJaYBZqCvCygbYxYzSTGRY4zUofdYQEfEchi",
  "key18": "2uyftFx5dayWmBThADxrcwjCTCworUHhp1mfLg75HG83BtyH1uiviwb5svKH8wqV4XetEjqPEkaaB5ASNWGUQnAK",
  "key19": "BewgQcpe4brN5xdZEAAgar4noityQgjZqE51qLZ5iXQi97N6dSMkxT2qev2tih2RsGmkawoSCbJGyVQA4nauUws",
  "key20": "48SVC6EPA2PzhGvZbKfKdSY8BkmkVBecwzyeJdVwTvj192djVvnELD5x4NVNuQEAhaW3DeWzKHTeoAeVPMchYNha",
  "key21": "3Fpe5Kkp8VVc2mJQ8Y5smKAcZBQ6J2oGZq4QtvTxWsb7GdQEhMxJJ15QuFEPmHHW2t3y1uEoPt9b7TVhoandxony",
  "key22": "2pGsLjvrXoiNeDNNeqA1QyjaweeuecrvZqqXTqpHWhr8hF5JdcWBuA7aTe1qHCE2H9LeKwHJFu3ZC38qEu81LdKF",
  "key23": "kFNg2mDvnPJQLUgk34rF9Kaa1XTqNJ8ypgNagZdpVVL9KpwSc9fNUejM6jEqtLNCNak1ekfyjvYK22yLQsWuuys",
  "key24": "4zPGTzRyGVABP6ArnantrdDSAuDgRgQdxJZJfY75cTQsH9HttzwmQfmfLxQoCtTrK3oH3bUznNFQiCQjamQtGPuS",
  "key25": "5eDhQ8H9nuBRxpxM7axjSqmfawXThzXvrRv6Z4uFvQeSQoGdChcdYM388AqtUMcFHE6hBNdV9dbZDRjFyjg7QTp4",
  "key26": "3L3U6ewc2ph7TCEw75Y6JKzAEKXPm73JUbe36XTiQsemrR9meyBYfzrN63pjUsmMaN7Jsb7UZBksYU7tuwTbUeUe",
  "key27": "P1cLBpMobBzGFUWhkTLxnHMeHnFFNAnArZWAMm8VnFRdp1U5ExGREEqdUkxVU7wH2VLXRA9VBmNmQFQack4PsPM",
  "key28": "3pC2pAHBrA9A26MTMuS2933ZcfPVV3xi2u8WTJNsHhXo5v93Eb4jmigMHNk8Jxn1LiWz43zUDxiYF7UuFCi5Vk9D",
  "key29": "4r23AsgDmbYvwEmSpdGd3yGWrgXRJnebW3yaMif2TbvVZsp23eFfJ9m35Ret8WgqHLG9nxwQgkiSGH9otBaok29H",
  "key30": "JVjVZkTWUHXgCjfjVHAhjQR2FrF31VtYGDviWC7Y7BDjPwt4MJ2rDkpUtot4Haz68XZuXHbPHUooxY5q52aWvjC",
  "key31": "5WhTwBKydTHSu9naNpevbnVJebk5Yg5Y3VkgSBZySXjtMrAHd4aKid1HDJW9MTCgozBTxaT5bAcMscTYbdcdjUJx"
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
