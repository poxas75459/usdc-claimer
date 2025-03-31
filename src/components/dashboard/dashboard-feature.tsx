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
    "2iFU4xfe9sx8ot8Z4gUJ9eQmMmmnZV46CvubvTbrek8PXZxHn5wBNS1bcRknL7JPWyaN9vTMPffbp5u6VWN4yMcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tXBFZKt2uL7x7FqTfRQZRSnapZSzf9ZCnMKiG6cgqu3kNMNywpvjNFscJpxddFUcM5vVP2tkGvQSA9w2fgkMwGq",
  "key1": "5upcg2TqFc8NQuvJvojRzCXUx6Ugcgc5Qa6hDdyPhkfcaC1FLNr2ENhHw78LRcu8XDaWFwbEa1t96hrzmpW1S1oK",
  "key2": "RCABPH72at4PS1PsP2mh2M3vqNkNBacSPpxsegBezwXUGmLhpudMtKqywbbN3yUhWtZANd4NqXn9mXXJL4KnrSD",
  "key3": "26LfVAMiPbJ6VLrYpNBeYtM55tT9wsGNbtAwV8R6mdhu3uTA1UEfMuTPbQbXzYWYfM4jF1u1EdoFnJFCS3H6dPdg",
  "key4": "gjEmYUWsRsxxqyhCKigAjMLycKcYqgWttMhQh1eXTWJboh9Ghso1kJ5v8nZrsAnSsDpm4QnRbBGT29afd8UKpeZ",
  "key5": "3xEdeLfcjvhh2fZ4UZQ4HeTtPxzTJDbnoWWVUUT43aUUvijNTGuitkxxXdoadNxuyodaFfE8yWpEK3ktUgXLfVs4",
  "key6": "5E7y9grh6bpvb3vZkyJr8vHaWp2CCkatnHAT3aDVJTWUYbUaQ9etSpm3z23LASNAzp1bo8gfNS8BCXpWha6phjh",
  "key7": "62zSaYRVWs8LkjWphNSxkqbMgmN8NbJb6QaYqdmStkD56P37veNd8jNkgiC96VaEhuLa5HajF5M6ttrqU48o84k3",
  "key8": "49KfRMgwyhAo1wMVcQqVrccEHSbP6GbEBihPCK5yxTfPEixqCsZRTD3hBQ7TK2GYH9dz5UneBRAzTw9Ga1osPrWA",
  "key9": "5bQBkQqQ8AAhg437Fj3WNzyzsuASt1Y5TBHk6Qx6KsqBHyRPjnSLJZRsiYq1oAPGLaTRT4EtFJq91yzz9c8q13FL",
  "key10": "gENrrpAQ9RE8QwMqHqzZR52D5FiEsycfhh63QkghpjT2mMivnHrQp7HnwZi1ocZXYFygPwrw7ZxS4EBffTez6MS",
  "key11": "4iPZYgCPAGoBeh5nfVgCnuUJ7t33D7mCHMfhMghmKRC2Jie4nZoHgVwpu88ZoogDweNGSKKgAsvmCMi83TuMntXk",
  "key12": "HVmdZJZAtYWKZisuZSmoacDmtacdBRs7X7mtTcqRAN36u4gUPNQ8h4tJjXAHBMDa8oCZHag9ARrZSLbBVQJHVTE",
  "key13": "58Hx8iQ72ekGT7SAjyQCtY72hcZu7mqhBKoFqtQMbogkSLJ3bpQsYBnHPAdssy6Ne9cr4godmKGGRYwf4cVLe8zz",
  "key14": "5rhYdtQgncYR7Mqb69VRCsTNhKqixRf4Rk4w9M4qJyqiZdP2DmAhFPu14L3tCsKry9JTcCT9pBurpY7YGi6DAmrG",
  "key15": "3ijXRfw6LxYXTEuQqU8EYLKiLcMNG9aRWrREGdWf9CHkPfhBxW9eEcEa7yA4Wi1Biph2gsAEEzefxKLDaN6uDzwj",
  "key16": "4CEjSFRE1rqVvsRaDxa5anK6V7rDsWSvterCQHoAaos25ZW8apERKgHYP1LJ1Z7NaQWCwaMb1TdvafJ7vanRpKCj",
  "key17": "26TYabPR5TQAuMyQ23LsAb5hhpZQx7MaBbz7rmbeJXkjW99QnBmkqKxh4AvgG2npqmcJREoiAVRQKBsWycouAkWg",
  "key18": "2N5hxmbyiC4xNwFX6aurf6X66eAaW5XXsPb1k6uxmVyUkxNBAivrojkJzQMcE5xgwAud2jBMLbwSgpNa7mcKBQW",
  "key19": "2Y7h5bRMf41TmfMUyZ5Huq6FBJDe2qYFHFQRHL9FhQzSsZjfpFer8XfYEFKYwjXNU8yp9wPXwVoPVxgTUXQ88k6a",
  "key20": "3ZSkcu1auNp6QKSyYcvJTrHzipLPtwHcZ2Ry88YuLijP39oA7aWJbi7vi8QT7GNz3SmdMggkuB7PrqqruwkBdNH2",
  "key21": "2izCs6LpApDyKcg8UPhP3YXb2t9EU8aiY3E5rqUP8LkKSHxKqtoPKX6avK6dQXZWS7a8AZBXctJjzg5DC6XokLv3",
  "key22": "363YJ5vnZos5XS55VmhE35hb2rMd5yK5twzTGiuzxV4SpTNZAtADavGr2No1fD9LMQ3YKEqYhazxko7eZgiwXqoN",
  "key23": "2Z8FY7BLqo131SzNiwAXBc3V9dn1MBaDsdJpWbYQ4AdufoTtUkdHTeYFX8nLDnrw6tpAbJxqjidEKL934TwDVhdc",
  "key24": "4sU6WBccTUeqQEJYu9ywzVXzsULhnBL7V45eko7YoWcdq21x86DGCT2BvfStWVftH2662HYfmHSp3B8avkeph2vh",
  "key25": "5NBnzioz6PWN4miFSVGkNU9vggkfgLWmE17qydNcR1rJT4hL5z1HpmMxWrE2x5M9pZX4K1DPCiChmQ9THR2gVVBB",
  "key26": "4AVhKgYKHmdTzZPxuWbsSts95m2HRktUueijPZE4Bq3pj8q9PhzTGAGgRiDownNJCTBKVy4LoRXc2Up8c7yWrfKU",
  "key27": "fgFam3VnddGXoHB9y2gBG1xWfhNWg2uUwB5BGU1AWUUkXVkRLBM97YQMWpnT4ib8kjjxv5oiHkLDVWeNLdTfcA1",
  "key28": "bsh79s1Qt7DjCjS4yjPNDLGZF2iRLCRDSF1kQh2b8ryGvGCea7jiQQoe5x7CS1zvPx8QYLyEkYY5XtkgjFAbTv9",
  "key29": "5P3gnVwRBiwNQ1HRiySXKXw7LvmMEiK97CLxn446g8HizGxZEB32TjXM1F9aiyGHmw4g9sduzTwNL29T8DcAEEmb",
  "key30": "4mTKRrsGVZDyiBqoxfbaD6BL8DRjZZhuPLPSmSrdeuX6D57yiwMYt5Ab4i3NrXaVNQCaLAVFmAF8CJpfLLCFLV9v",
  "key31": "3EBmY9NTBNjz1ZDdGs38dCzn1HZoMSGWToU5ihnZXGDWS1LFfYSawph6aVCm4ZB6m5pJ5URCPf96JpLZ1sWe5nsY",
  "key32": "5Sf2czsy5xJymwNL1T18Gi3ovoRCJSGkhHa1A6m9cGnMVJEnG7TyekAZVj5bqRfKvXh2hGQcNKcu55TkburgYZWZ",
  "key33": "3EP92WyXf9QK3VWhVCqvyPdB45wr6h8T7Y5TYaVfBnnHRYvmUepgFBNDyyZuh7EtX57bmkFC2pibyLj1SYQ2PdvE",
  "key34": "3PfvWFAQjrKSckRyyLUu52gqwLYHJzVcfRB7KpoVU7NEo5SpjELktRr9wABF2QQyZ8i95bvhHCrtYkjfhcBSyHXp",
  "key35": "3Y8vyCEGfCgJQUjezKwCV9xdtAqEezCatffy24xWUsF5J36e9dBweAQFesAxtc7MrpFapTr94wnH4iDxz6HZscEm",
  "key36": "3MQyTyUKd77piQskkUrjS7wCJHyGKqiZWbz5PF4D4Jh5tpNdnsshcGRaUipNnLira9Tu1Hmuh6ZBMLx9qNgR9dmB",
  "key37": "2TZ1CQSQ2aMgKRomr34AUhV1gJM5cmCNukZzBwMGecgCyL9SkuYQzE3bTuzj89HktD7zqvQjARNvoFtTcPsVyeXw",
  "key38": "2vbzjp4ipqvyvS7MUoRMAjUMHWXoRa7LAzfVH85cadfKff5qFz6eckoxe4XXWmvUB1EXLB64GRQ9PBJvFe7TGggS",
  "key39": "2BzuAruehpJg6ZrxDW4dF2Gc65kzxS73oCZsqaifdN8J1Jx9bcsXYd7taEpwfD28nMh8PgBh8wAoSnhtDBJ362iB",
  "key40": "2kBac7dDE3utZBCeR5i8n5zrXtitC4ZeiEYCzYpiExxwSL1w2Gunf2qB5kgvTHaugjbmKyHfqwphWC48mKVzDRix",
  "key41": "2zF7ZDvKJaC5hoXp3bH1wxwMWcfHPCStN1FyN4xnsZiP4soVemYRwoXVbc3oqenmshKzDCdPEkASTQN1j8ebv3dY",
  "key42": "4KSyZap7KUS64jM15YMv6ASz7QEcu8Zi3GuohAtKCAhwiZa4pKJEZdB4zAo7NRfYMEmLK3RxmKTgPnvWyWpp3m4s"
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
