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
    "23GN41Dz3BEcaEEj5q5eiB9NH2Kew5xJm7fFHJdh9zxEWZn9XQ11F6cWM3rKrRWJdaPVrgEb2Wisx2b1LqbRqSWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "syeaavB1YQgGyUUuPFjrEqJeidcAMpGLCaRXAhnGcBBFGLxcMSBTV2S1PDu1uoQeYtaqk88FZE3Ge8Vt9ho5xHD",
  "key1": "3MySu6D972ZhToCoGLPoaHgCQeHLJ14tRTzLeeAjM4dNUSzzTpD2gzSv4AgBzNTrGyGiSV1BA5vw7Kb2ewTKqRS8",
  "key2": "4JvCZpppRCyzxLGZLyA3uv7qiNYPHa8JUXheQbP36sfC6mu1dBVZ7GEfpZQxxAaYQLMRxUKNMnP3nRRDaStdxktt",
  "key3": "3BqDvNkA9WaDopFNQQm3Ub5H1A9e4WbazAFzGSybmo9nJ1vNpBN6syfLBdQxkLUcxoUueEuvfGHxqSmMQcstxxEQ",
  "key4": "2qZ5zwvQ4xer81JnJXCvthBXefuZngM7Atyf1bxMxmYFmfwA4wbgUSdfu94cLhrqvL92qkPYEnkwxp1dU31YJQds",
  "key5": "2M93bkbhVA7U7d45z6MgVWHmH9mfkwdjHof4zJoNRkFDeBdYfCMCePFVuyaMnvobHFk9aCXvqEWgnfZ7p6U8BiXi",
  "key6": "4WS2kjGyexZJnRrFtzBZmfjqScRpA2w81VWACn1QjievQGet4tdD4RbU75u45pPPcWLVHeNmeqsLav5jTUgVMta1",
  "key7": "3hZqFknvBqCeSBcYAkbTKE5JtTc1PeHx2WUGWcYev9XNJeAWMsn6FEqyiVAe31Vj2nyfz5bnScFKfWigXn6HBYyY",
  "key8": "5jbRMmdRwGGkYtkAs4SgmNP3bqYrWyjhNTgUxpGjm4YNYQ37xKeVhFRLwqsDHZwCuJN8BDd1euCZ3PcUw5AdkTf5",
  "key9": "4U6M7Ma9rFRCvnxtazxACEr3WH2xhKMZN2s8bm2thoJHNRmuBFSeNTduRxUG8YwMUREUo1mR4VsRfR9GD53osxAM",
  "key10": "4hMpgA7U5qej6aBdZyppm4qJmK9DC9EqGSckhkN5BpCkQw1r2yqQoHwJHnqFJZYfH59CPtE8zTxP3RqhTViAHGck",
  "key11": "49kESVKXQhBBuargKSWJcZL2a9j2T3A1QrojERP1BoN42Ti6qonhJwb14b88U8uNuNkEF5mCXsnetMB63i8XnuA8",
  "key12": "4Md9EZrSv82YL9FHSUorD4X4PWXQqutuDByMRL5w4ahgnKExRMZmTfU2ceFcbqKogCWWkN81DsZpmEEkksbzMQMv",
  "key13": "2BdqC98NsGreFFqSHFUCrNX5LgXR4rd65NnfRdfYa1cgkn6c74kKzYa3Sv2d2UJ2nVxsfg4fi3bw7GDmNb9XvEEN",
  "key14": "44b9A2tm2Cg6wjd4FUxwT6efZzzhn51gHtrnSUvgAQDnjbiRWfNWT2cmW833HZ2RiaeaoafgG5gXpDEt17tFbmzM",
  "key15": "2cfr5iAbhVSK7tcZNLTixvgNicLa89YLtjprpWDpR6C3h46fRob3SnzFaN51SDCsYgpXzsq6U3hXrRDd19uKzuUh",
  "key16": "XawEGtrz2NNaJ1WSBkNfELVGnhcjy9ncm6gZYMwDuimtfFBp9aFeKGLuwh6LT6cG1tGcuxFDCDU5LZngtq7Ca4n",
  "key17": "3gXNo8Z4Jag2Y5Crg4RW4LdYHjU2w9zRrzYEjLz7CLmvMC7Ae5Dcr1bnYRr9ueA76yrScYBiFLL3BcCSDBuceUy3",
  "key18": "4sWz8HGhC7JiUCQB2mbgckywsoy4rvdTbgfUHFQBdTUUktPW8jyuKcAoTA2iXpp2najAuhKFsnVpHN3o8v9ALzMP",
  "key19": "3oc2ZZkm4mzfnjuVKjwtWge8WHtqfUbngUGSwQRjTRQdSnvqoZjAZVxDS22kJpnNKCUpuKwtznA19EaTexWos8Vv",
  "key20": "2V5QmVHbKkjXEcqb693mjXdVU24WZ5xTBHmpzDqPireC89gXmQKtV8zDUcWgm6uJi9nxWsDSV3iq5LugN9snWfQQ",
  "key21": "2eQa71B7iqQFCRA9hQhxxq2hMoQ6Z2pdQbRCVuRZbno7Y84fM51c5kcUsD5cyqn54dcsVcPvryMuGHvm2dHXCkFE",
  "key22": "3eLkXuBKBhgQxLaMGXpxnMwsp2c5xYQdoHVezSHakP25Bjb759K3qem1uGhU7yPyCVvA1zhCpbY7FWKog2LFCg1h",
  "key23": "4hQGujKJ3yLk7yyMzhB6j5odxFLkQZgA3YWcn53Vbg482iepRzxRCNqHbWYb7reyuxasMtQ4j3xnwuLigt8Q11KP",
  "key24": "3XnEY7bg5KZHXzo1Hu3tLAZATHr3V1P1nYuFKcBaLu72gPKdkFijcaER4hbbEtrfWA7k7MzqA8evDN32CuxWno2u",
  "key25": "3MRGBsiT91whXNgbLqea968HyG27z8Zbn3qARJdnjMDSP8KsJ7Su1CBip6NW5M7PgAU2GBE84HJBMLVQeWGG22j3",
  "key26": "2i5E4dRVm4icAhpW87Wij4YFqRceqggduxUM51LCfsxRt3SRSzuejXvs5xk3Xho558LZU5QGr5cK71Rkby9zocNM",
  "key27": "2LEt7QpmA42XzSezUenMEZyQwzGWZvkxoY7o7YKkqkwf5ydgxyB7JuBMSs4MjD6Fa9VMXGEop4exgLkNHUH2zxHp",
  "key28": "62yesRqhqdhCjVSPUcr54kWeAH6ShUjXXH9k48kmL8qHBgpRVBsbHu6QuMd7uQLxZdrYJu1c1EbZ74WEk8DMcuBK",
  "key29": "5cLngQvUQ7YV9jaoNNfkJthvnUybJNnZ1r72ZGPR8cUHkKhtMQbqCyEVD4uA4HUhCLQg884TC43hPb5nbcuYtJXL",
  "key30": "3PALU6vdHzuVmGUhyxUrqtmDPJxdw73ThZZoPvyFfWc6zcD8SEwjAJwFJhFrfBtAm2AV79yP8mU3VQmeKMeXLzUx",
  "key31": "33YEY7EwWwVJDAJB873755YtCmetQJkbAKjMKKDCmXej43WbwHcCC6899i6yMSrBFFhNKgKm8nd1GideEvVCEtkt",
  "key32": "2DL3tsQJR4w97rmtSzt69rzoEqDGHP64pbdh5hpy8qCxkkmp9Mw4sfqazp882N4vHxabinQNPsqnrCsPkjft3N5H",
  "key33": "LrDRtu354oaZQKqEzyuqrbuz1ZWigEcbhvWtgF4GphT9HGm9bJBzouLNRAktCRdnMEn9LeoKTo1KAoDnePw39Vr",
  "key34": "39t8LuqyBUcDCi2dpqRw9xCPj8G3LPjE3yhLrie7qS5rNR643bfZP4TSHj2muCBQonuD5fDyhhzd2ZcPjZeFDx6A",
  "key35": "aWzd1VPB5RTCWj8Q8JZBccif8YKxaGT6fKEtzeMKGvhK5CVpg4wGjyEdPHZi8Ld9ooKfojoqYp9nSx35TfJzx5Z",
  "key36": "i62jYReaspG38NLJbTxJkKp5CSpmhjxecazNGiiNLatvYrXwouHDRzx6YedJUyKfBREjrzSVgr8QiA7wqtnq35W"
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
