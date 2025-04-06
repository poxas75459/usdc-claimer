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
    "58rCrnq3VsuRChXwm38Lac5jwsbEAD9VkHD1VC7T5KQqdCxCdTozJrfRuLxB8Tz5HHC5B34dmLKzCEtoUoJkbSHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gg4BLtiVck7Lvg2kT6176MauaXWzeaHzFAfDGHgJnvg46rd6xXM4x44HqewJ7awExWpAUhRBCrN8AG8f7CkDAq8",
  "key1": "2AufQXpu3QKJjfbisqWiPPwHHcDreJzUsE1xxnsA8jvvCQidJiJshMYEPcvxWf1bEb8YkGcP9sTBnTBtmFz8Bbh9",
  "key2": "3LpdHHhngr3LPz2yQg1kvTTqRbUFwcMKqFYbwJBjihb1sqLogwobn1ZjqrqkDMi3F9YFzUqijygDAjzrqTScSzsv",
  "key3": "5GTWDkKzYYs9uKxxLFogn1g8ZRvncmaEEDht8zg2wQqJvWvqgpkbzpikinRaH4kfwwnEXbig8RLCZPmMxdiXdLUt",
  "key4": "2gw4J4MB4tG4WKjf95JrrTpah7UYR3VZnqWqhHwXm4cM5npDpEtAKX4XBsq2fTbCbcdYyXK5i3o93WR8RtoV8f4k",
  "key5": "6VS6TihBf5YHdg8ygbnV7CWzSf7QYjXWyHKLRfJQjwS6kXLyU17MA2iFgQXr1vfSR3vhLpmu7Yu47Pko5358UkU",
  "key6": "4kKDn8yQGFow8z84D11R2FTQfbtegUckBuynbZyWq3wd856a6hyq2mFBhfkAKuHDqF8phFaQ7KPXmUgcEtFbT5ZD",
  "key7": "EfpxbSP1cKR4gz6RYSEYJDLkQdbN5XxybntY1KEfbiFwrc4kHiwgK4J44Z3v4DD62DgFb6StcBSVsK35WrbAQ9H",
  "key8": "joFAkGSuJ2mqZ8gip6cEU8y6RDVhaM9mAuPLphnB3hQ1vYojxTQuRdpDuYbjz3dvYQcstm6qEJK5zxWutQ9hKp6",
  "key9": "2pxhxx7j9k6JBVnmENEyVBXhzhwyCRDBAeofDQSv9RzZyuxQLjKs4jNyiMpZoirHzKDHaZFcGDkfZYbpwQUXLBev",
  "key10": "58EZdaYFJiGBE2qEN4NpSHBddU6xehGKmkubyPakd7nmcJLd3cYVNC26xNZ8EXhFCsPqjgTwgvJK3GQEePeAMdun",
  "key11": "27Xqbgv23axCMSArLeiT65g2HXAgG7tfgr7oHdpwLDLH1JCeq5RycHrcMzHpFN2W99Rz5wSABUwuDBfLYQZ8L1Ld",
  "key12": "4DB1TmjG3aqviph53YCJqYSEEyh3zF1Lh66TX7TVCtbyjBp5qbSToGEFebE58vJzgpk4FgwyRkkCNPrPA3xtA3LS",
  "key13": "3KaZngAz4Nyjh66VKSc1AXBoBTuEjnbBCHpZLRNBpXjnj4EXqVVbo3vkgKEaGqpEGTDFW9Ugb33jrezAYtc6bqmq",
  "key14": "bUVFdcxfKkNZFLADxz7C9q4eUzyztBWohxqhXFWwoLSobyKgx7FvGmnPrewpSeTf2MQoAzJcUQD1bEXnPL1Dxm2",
  "key15": "Zyhvtfjh3vnp7Gee9H94UemcuXkNM7aDmbQZsnGwiQ4kftUdW191u7Gs5yoXzhrtMoXW2Kkgb5ESZoXz8dJ4991",
  "key16": "3HxSUw8zAyMbBg4pYWRyBSrTcrKwXCS37GYZJMdgyEgQL8qaTHt3SvBMDvvCGsUVJ3hRNf7bjeUCA5xGb1876oxX",
  "key17": "48xPDacZUYPZWRWS7xai3i1Kvnx8k8vNvTWD2e9WqWyYGBBh2WU8CsH7w2ASn2rueF4Eu5pVsC6ggewCa6BnXwP3",
  "key18": "yvQxJT5oe6iPGKmKxduyqMkMEHcYGSF9yibfAXEKjTbDGf7GvC6sd8tRi8a7YduNFGzyMRMwX4sFKQkhyjZniib",
  "key19": "UMZfWPt6Nhsg2mXsR68JopUTVyAoZaGoD8BBwXsB8i2329mYPitj2jr3B65z5aZja6TbjYkbuWFf9bKGpzSSv2Z",
  "key20": "3PrbztW2bpCqnyHG55aqfm4GKZ9ZEcT35MK7gsvBLnXmVJ8sD11mUJXXvdYgU3kpqcExBocvt8v9gXWnbZppzcM6",
  "key21": "StgmmdjuqeBaMjhYuEfUhu5F3gK7Y8CS4hZcqtt9ebd7a9YRuKr3RCsmWkXWAtmgU2yyPfp5Eogg85heA1tn8bf",
  "key22": "5b93oBunnFFiJoYwy7LMSSdwSHNh1Cu1fNU4B9xsikGBjit3RqyXnLDRRcke9mRat5Gih5FnR75zaTiFzXGY2fsx",
  "key23": "4rSvHBZRig7Fh4muNiwZ6qcf9ntRAw1wbBAfb7BhNCqYh5mvaBgji8SBPnnZMiWjpw7ZXLX53oe5yFk7jemZarZb",
  "key24": "4w4UZpG1qa5GAF3Ew3fm4MHjwUC5DbKA6xtMojLSvHtXDJRXmg9F8rZoCtMGWfBXXnQmCGx4zW6mjPBbqpbjZ8hX",
  "key25": "qHw5XcLMN4gArqPktTLNjz2aHav71Q8p8PtXAmKvpfCyQKbpUrNgdAEt3o1Kjjqv1UGFoC7SMdKn479gAzFvUcP",
  "key26": "2jUVYk8tgjnZhXE7B6fdm2vzWHeM9HRn8EMn9ZwUXwCZjgm3jPB11zZs9TRHm4KKwnJeamEkLeQatW5DeqYegQWj",
  "key27": "2vjSfyTpSUVDbPrqWZxLas8xQh8ijjeMjSzTKC4jTsQjznQ2WXN87qosR8Ybtk844HuuLtQqAGmdXpZ1izNDHNgo"
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
