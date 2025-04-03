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
    "55DbxnKRc7GVGaLsb3bNGkXosRXzjsriVFsKwwuQJHdL4sUBr4Fw5K2G5yhL8mDWystD8fXk8pKXFhXdSy2zALcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGZ742wbgL8KzExfuyakneTFe2NxSbsEAnkCzwc976mEFXFCh4VhpNnxQsyxTD9vQNapTWeaqVnUPStJQQVLikr",
  "key1": "2f7tCgXXx5QfiLqLdWRic2UAZJtLgT8kJqeK3K9ZZkGhbWPzBgXjjNR1ZjUNfG2YF5eU1ZyMkbMpfhB7MjaX6NVm",
  "key2": "5gAkq2xzkXgB7iqNvtygLXB9rfPqxTNW72GmVphfjKGMv9NdUkyqyYpBQuGoxcp7QxwzuCiaQHRKx7XB8CMaQB6r",
  "key3": "5txRyzie4rPt7cHS8t6JnqBCNhxiqfMdzBsJuYNfpkkGLXNwjU2VCHzDdLda91Dg13VyEGZti6CLbESs4nNsoSUY",
  "key4": "5Bqkacn7sbbTF2e8h2jbUm7r2HV5SH7DqXDZFxGVZTcmu6gWP2i82WCGwQQ2HfACZ9yLq3iH4pafXYajDJypBsyu",
  "key5": "51qNFPh77wLq5ddvGPymgymo1ciPgjf9zrQYymNy3NFjuyJ466Shj31ZwSaDrZM3ceRzi3EUV1A5wPWHTyk9mzU2",
  "key6": "655p1JYFhy7Wg9xpQysby8Yr2L5BjLSkpegFNooAisSXU1UyiRBRMCJZvB46DrFMrwoWSUH2zZ2Trsc9D66FyWyJ",
  "key7": "2dcLKqeB5Y3ryrwq97uv4XP9kAfstyoCy2pxzduUQcsTiaCtKPzrdUCahE5dYaZ7g7sKQpnv1p1CzvfsYNjCRNRh",
  "key8": "st5ihhJsj6pwo9aSgUL7HuNzVQPsWELhRK14fqjJNp1E3jMPkDojRFkLwWvHwZqMuAatAdwZwJYDUCYJkoEYbsR",
  "key9": "2si9cUssc98CSKxdWczTyDa5WSRErm9LK4Kcs6SgDCNCjAnsuLuctaefV71MTsTV7eacohAqvxoLof8KWF8fm2t7",
  "key10": "4d3EnjwQRhZBRrxkZx93mMymRxv8QxbiK2mtQhhAcKS8qvR6iSnhr2ufEfktmrm3cYmZqHn7C5Y15sFovfdNKMUf",
  "key11": "5YUeH28RVWuepMDApCyRvFGGpf2Mp5GLEAFyk6feD9kyP4cdMFzz47utFjj22doAtdvn5ahffbtLKsjEvDTrxnbr",
  "key12": "5SQRXU6VeGTxyeSoe3EuZpLE5MQPK33zuaXGYiLv8TjtU37VxF2fWwJhBaPdaj88oKHbV2M5D1omL1T6z194qTqK",
  "key13": "BuEeNy3pbiGzgPGuJkij7JUaaVrvo5mDXFmDxvKqDiBiYTuXGA7ohNgG7DVGuerGRRWn4FhmHNfMztAmUU7LYtR",
  "key14": "4SgbUY9JB1aShHfXmqg1k63wS3DViSorb1db2XhqwcQtya8w5FxZEBNjgCtG183iDWRanKwBah9WQBg89ZeTzaa2",
  "key15": "aCeSDGBHFyCoGfPBLvsEkNGGutj9Nq7GAXXD4HHoeUyMxCR21txjVn1SyDkKMi5CndiGcgwQehZHGHHmxTmswkj",
  "key16": "57URHP4kvkwxAL2c2ukk6K5Hy4VYF8aG7xH7E2xMMdnZL3nK8g3QCoeo39E928jwsxK6bE96ThZwHPMYRichy4bV",
  "key17": "3eDN7dRqcdx9uGQMr4E6mc6P2qLwys5WtCPqgrEKGjxy4wV3D3GpVVw2Qvsk5akynqpd8UnUzAtgjhh493NgtMFP",
  "key18": "34uAe8vHbgJ1bXTLFhNa7ygkQRYdsTh9pE72hvLA6BDa4Gkzrka7iKqhkJiFDjryHyvxyqvz25fEcYa6DhQppP82",
  "key19": "2ZHiaGHtjNyAMAxAyxFPif6oNgmveyCpBT1TqaJ8xXEteWLD1UmDzyysMm9NtBnREWhxRWSb82CUXodKvcfjDnws",
  "key20": "2pB2us6oZHWA7tvxttgCH1HqQLMoRUbsQxqGjVnpMd8fVfmoze3e9Yp11QC6m4Ykw5j9u5nLz8UHB5JdKPfrgyoJ",
  "key21": "67dfuus7HNxeB8NnozYMS65K8BPnYUt7cbZ89ynP3ZfxaYzbinLp3nscDgKkCW2vpBYgjDuLAJGGzCj7kXAm4GNS",
  "key22": "2y2QHadVMpfxRogkaUdWRbdDFqF9c7yYLExU57ciPVA7rnTkhLdq4kaUaakrXxVT5eTrZKG1oSYvMTZ2aeGwp8KD",
  "key23": "jiGNFQEetUiLyqCDVPoCkYHJzAMAanugwH2JD5EgvfeJHhwRKjXyvCCxEcWF7N2yRraAp2iteF9F4kne6inrCmq",
  "key24": "3bpKWaiSJWftZVMiMFwpxxPudvgWUyFw9ebJmQ19jJmj2v5oqFHofz1xUZT3WGRtuEDdd5grhFzRkuJjJQ313H4E",
  "key25": "HAq9iWJbgsvZPH6RbtHFyiwYrcWb4LcoHBhMSu8exmWQYaAxjT55DeV8R2yrPVVp8M5GQjmsa3dLPcbedPGB3YS",
  "key26": "3QC4Swo5nJjU61Qm1qEYJiyPGvmMTjFyzUHSx8CPz7Kstf9uumcXRy1NDnCKqmYTZ2hWeKDrHZwbNxsZtLw2UcFN",
  "key27": "5VpuQgHgJWx2cTgu2TjDFHk5umYmMevykQSxUZcMRRLEn6cNoscwstHu65vYgo6KWVJ2PN9rke6n6Ce92HAswAJC",
  "key28": "4fw6EgRqkR1LKHW8Hf2PnBwBW7r32b4bJhirJW5JvGBqfNmUxszg6tGDpTq8BB6q4y9Hye11AYDbAX4W7aXKhZKk",
  "key29": "2tfe5EckHJUnBCsacMLVXFWukK375LYA8p1PVrR5FkQTBQdCRyLvfES1PmDYSFRSoUtV5XcdGrdTshA639LD7maj",
  "key30": "5L4gausNfX3UQJeszec4Q5yuUT9ufiLP4qYRPmxmevYGGsrMsd9JXnWKbGqkinNZKNh4ndgpEPMzd6cL8DRQAenH",
  "key31": "5sGWA5qP5QRFiP6C8XTjoxKBQDAXdDRMAoYwJt3KFPUywoN8wVbyLx7VMyqTrgQWiqLYofvSWLnA7E7MjHePpK9j",
  "key32": "4FjSg2hHBF2rUqiay6m1pngjxk2M2cPo2y3ytyYpafxwCnXDrz3TnbcoPcuVRj8Di9EopJFAfLW4w527Wy5nEcgF",
  "key33": "55ceSDecmbmueugZrsqRDCiEzdd2DCT7XQ3MdFD73j4L4SdW48i1QKWXUXPqam8VM3R3PKGoQWf33NjQbQBhFKzf",
  "key34": "j8DpPcreqH1ZQLzZGYFMg1hm2QRMD4abDJCjMfwxcXprPdNrRtv9UkuDeaJ9QdbppCqGoxFYMNPSnLsQ5bUM3ge",
  "key35": "xi9niZG8EGJ6ZK25M6E4tKwCst4J8WFwTMqeawPTnU2KxbPKLNPv9YGpJPY6JDD5eduP7yGKdd3Y6TfERrg472V",
  "key36": "3btXGWCocGyPvXwr5oFXY8LjCHTpNBnvK6Ak6dAcwPCJetBSAFQB6VcosMHF6n26HkchzFG1joCaAqjrdqBYceoN",
  "key37": "4HM7YQeyVAnANronBfJfW6zTEwUTLMChTBVb9zeU7uKMMwyp5g2Cb1mChe5rCTjG2JUprXeHm5b2BaQmY7L53Jef",
  "key38": "2YBKzxcuv454DJGCst8g6Yg7CZwM2RMsHMfVV8bPdzqUAXfXvghnhGZLeL45PASLqWC3cjfgMJgQsg6fCmjQ6RCK",
  "key39": "4jYXbrRQjVU42pWnPsnC3ts6whcE3ZTEvoBjjwukAH1y6UJ2oEgCC3eckQnGWtZTZMobTwveoCVD4Kp9rtWFURd7",
  "key40": "38SxRbZZPa9w8eK9i5w71D6uqhyu9mVT824hRmqFdHj8mV5fr4B1h51teaF1FCKMB3JC1Rc6kpcpKrh2mvjupYNV"
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
