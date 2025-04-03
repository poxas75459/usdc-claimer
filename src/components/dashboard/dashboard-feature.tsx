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
    "5CT3ac6LMFePCM4jYKZSDynBTZmTPW8VWf71WXbXbRygKoAszUxvwZifALZmieeCQRbnVVKN3XPEu27ncwNbPNPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dStWBfTtVMayDmZwb2NzRrcLs3HpPcW34ickwzGAmpD5Cj5Sj6oRjy6xdr9YuvNZmoAjoDgYPs4RNnpfYvW2Pxr",
  "key1": "3Cq9hGRWccVLmNGSCQMX9DzHtTzVRxWQ8idVVsCLBunJgZziQiXewLoyxY1qg1Ecvq33ZoFjymzb8CNLn36TzWyW",
  "key2": "1zdmMZAZ8csBmz1phbw52NE9AFnSQpmkUsi91HegNroo4MA5XTTDBPmThU5XNZcgEVNQESa7ke6E8fyHtGtWosP",
  "key3": "KbJnKfE1gDJs4F1GvH3VDy4VWp5xpYjitFku4pTrY1Lzk8cnbMJvoJ8PnsR8ur5V7cvFvgS18uXb2PMM2nh4NuJ",
  "key4": "5w557HUob8sM9cF7PV4uShrQ2YgwLY68nktaHtFJKd9cFD4Wmf4WnMHVHQqjzHPhDw35vkKwWJxXavUQpuvn7ygu",
  "key5": "52UssgritG6YMJvVZzghWqS4t94JLtXV6vVWz7VNRxzrk95cWpuwNAnM3at5wpS4MfXb5uDsXcBb4CXXPpSB8B8B",
  "key6": "3W6vAH9TUDWJ2fyfjK866x8KuZ3pPQBkGCjLJfdwAA1C5SaeLe5vGuLrv1yxZtnEfH3ih32PNkJ2g8zzZ3jch4Dn",
  "key7": "3ZLZMcEtTE6baEN4GiiXEsrjqcehDcq4vu5eaBn3KLB3KMtmqrfs52jQEUeD6EG2yDyrEmbRok3fDDnqomg72w9b",
  "key8": "2s1Qhen3YpGmRcWLeuYKpYja2pBcKcHdgCbvumczD3UDPP588Hfyh6U8eytQWzC1ZdTz3fgo7RZxdM7d4RdS9HXq",
  "key9": "1fXaLPZYzAtnf5BTyDRAD6Gj2o1WDwSTPoKcjgYhQPMBM14HySoGvx52BnFVWr31bfNF7VRW1diPMHPCqdpRANh",
  "key10": "QDXnMo3wNvR7PzE7imyWNtG47CcqpKHkCLHSGtXvHeBs2CFmwzBkWXs8n3n5UKDo7ZBS7sNC4J4RhEX3BgMhXa6",
  "key11": "KVvzuyjj59ikPKtNd8yR3jGujxzAAixUqj19STPXUKABfgqv8kyBZUTwiea1exzExrXcjLG4CFw2FnrDbTWny7k",
  "key12": "5HRUVc1UhzEEkzkbrxB6Kyn863EBcJQzNnizhjCUknE7QFhGHP4aZvv1MJzFVNTUi62nurpJMc2aZTsTkSCVfS3F",
  "key13": "3j2hzZBKmfYFBHBYyQEWftRAKCt4MzwDC3kfD74DMrDcmpC9fKit3HghUgZrzxus8V54AP99wfoCbfy6Mwa45Vme",
  "key14": "3baBvLNkjyeVU7TNGSeoThrMShze445aYH9a2BmQk77JnGrM7LUyLMeDTW2MoHXjbhYrz5VBY95ZoLNCghmi3D1Z",
  "key15": "2BwhribEpUTSQYcsXcpAKMuLu3L9nGs7MJ8xnWLhRWepbqGKW8baWkyosEhoCaYz72qCeD61KsE5JkPPVpFywfio",
  "key16": "4Xqfd1kgWuvQpFQBdYxJzScUG24P3rRe4xkoYiTiuxN7N9gKjbAsqCyQEtFDnY97E3sGAFSH8qsVM41yPo3bUtgA",
  "key17": "64JKypLREFrdyh7gC3yfMVQ6BoMdjC8jzht5Q42mEnJL42uLQFFvXdpsmETGEMvgK6KVNa8CddDUAt3ygjo7g49V",
  "key18": "4KBjHWkbzQvM22av7yJJitUNQXzsRthW8e3scnGVrxbdGPhKgKqzQCK7BrPvkYwRvwetwSXdZ3cCFmRnKV1eiKrg",
  "key19": "2Mr2ZhBKcZLHxyp81rctbV5NogcVsfMRvbZzUg6HArCDuGF64PL2QYUGmy6GDtkQuNqK5fWUeCSDVRVKHdHjbuBz",
  "key20": "5hBbh23rLXgwEuNtDVntLoThSQJS5ZABmSA8ogN6XfQCM6EVdSLVtfoAuU32PoxxJxfbpU9wANcbaNZExEv8Pbkw",
  "key21": "2XGDhcVvcZ95NpZFfCxQHfg2rBp1rUgy2rkoU2M4KN3yYWmxMP7RbDd1JshH4H5L8WLejRaB6Bfi4g2VfBzi8H4v",
  "key22": "48uhivLrZJixLQfyLmZtnxkwyaJ6T2snDCzNHserzy5BUbVfFDXHQ58Fv5KxApSLSgwZ2YoNU1dKQ6ZJDjqLCC1j",
  "key23": "5yZmTy8SitBnhY88J96RtbTf95ZmzbcLD6gfWq8LAHTe9FBU8m1P3Q1YSQnH5nsKZsQp8NiQVJVYdrbBC37pwjFT",
  "key24": "eB5d9MjwXeSSFtrTN8LxwZMo2ZiFsE6vtMXoKPq8Gtxkx7Weui7SwAD4RhSUQ94LJ1a8jbKfTdaKUfwf8M7c3nY",
  "key25": "3QBCAitsWFWxbFHLPU9ftBVG4mj9BycnPGBq17HaHPLPZNeTyJaAFrVEyA786s9y5zdUqRN7pvkC4rKwtDCeo3Zj",
  "key26": "5aUYMFV8YLWYQ4DXPji92odgZaDSRLpodavB4n8MFSgHnN5wFohysgwZRGEMAF9CXFc4s3vRUT4Mg143Q3JYM2CF",
  "key27": "2QwUCCHXH4FFEVky2mFDVEB2f6btNiBcaLAoJWA518Kr4JC1HYz1AnBpZkEKTGgeQboksmqDa3FuEtpGf4CTn95C",
  "key28": "65i4HeY5Lj5wTg1L6UDygvnp6v1CABqkvGKiACr1XjGhLuSPcmuR4uG3nmcAiRfAemNRNpYofZjQ3Mq1fcCvuJn8",
  "key29": "GSJnmPKeyyQzTyidmGeKMLKTrzVdyBZ2sGu4H1GPiXNaysA11nHqNdKi4Q4K9xWrYWDGfLhWiqTqUZTSYi4QFJZ",
  "key30": "4LXaj7jKU2AQKMRq9j4DREtcX3JKGYaodAzkGG1cJ4EuHWRPBB9aqRMnyYp8ZoKVAmKZjVxxMMWEqZU4zX4ibxFK",
  "key31": "mp7cw27yfNHWSwk9qvkE5MBJCr7a3gaUBHUmW8adC6XG2cEGoAqD4ftWQB4RfAjTtDtWbfsKWGxyEFXYvv5soxS",
  "key32": "36enVvK1Asizq12a13Jwc4ePYQAW5HBEhDJpcFuMeAKELcUytYsQ8RsMmPjj6qbN43epq6eQXD1pbPEa8NP5tGh9"
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
