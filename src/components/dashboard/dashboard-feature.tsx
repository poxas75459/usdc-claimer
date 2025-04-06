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
    "5t57ha1WxNKFFSFbCSn3Y6BHcyH5T61vX2G3jxer4bQjBcHxPPmoGWmTzZ1Fynzsa3Kdaj118KuyfMJD5Gb6XNRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGZfRLRD2JAqMFM2eqC7VmNzmj9Syv2qP7ub37RaJfq3QjEPCGuV2utbQTCbjzMpxq4uvA3fTx6r6WesbzyZvam",
  "key1": "35t2GsTBwoqariaxaSNpdTGwJKNYP3Hbag14wMyhs1uSXJEdZLm3dQPmGyVHyraHfZYwUgp4E3myswPMbLZhG3KZ",
  "key2": "3rowXr89JocWA4jU3sAJcSek6okQ6CRosnfmkZiZ3QUqDfwRp6JBrEHufzty2UQRw7LhsKtXSKkXbf9jFbnJzFG8",
  "key3": "3FPcj5SCBpT4VZqozoSUehKmNj4nGYNpKNgd4TZccSi2jLhPF7xhpWN9HQLPkQ72nFMaQwtCdWCBvRDSKWPuogjU",
  "key4": "33zcLJmRxz6e89XrH9bCMx8LNYVE2zN35uBnZJbPLA2NMjpNuixC61Uq5o6VYHR38btTuRhFtKzEzsCU3cinWkn2",
  "key5": "67DEeDu1z2krFQPTAG935AfgzqThTiqtgbuC3AMLBGKmC3XSA78w7n86MVz6bXK2YFia2jeEVXGqGvxVkz9AjY6K",
  "key6": "3zUYN1nTDN5r4cky7wukxdW4QK2Qs3ffgDhYpkBQZ9dY6RDjnK4TwHj6XqgQwajDc8nfKGcPjCm2d7ENTQqBvSJh",
  "key7": "whGbvWLNP7QPGYCtx1RmGghoBWQA6uo8E2EgDFkFwF2XWMQw3ZUZcm1nspMStWbd9udQ3yKHa2e31aCLyutVZv6",
  "key8": "4k72Rjs4yMBke4zwALxUcaAcj3NfoTaRZngLD1WSZewjNrvbzs51npLKC3PboYkWUDDeiufb466VCP8Xz4sAoiSS",
  "key9": "nku8ndFrycN3QF5A5ZTRRZhU7kHJLgfTLDUU5HgJ2rKsfRDCDFdmZtCXDmghhL9oj6DhsuMCpDFVP2bF92LTZeX",
  "key10": "Lkg97qLQZuFGQecWMSvC2DYo4CpS2kZkvgrWhz7s6b5pwvLHuhNEq2f2s3k7MZivzcDHNoWHZ7pb8WdKCgmnR1F",
  "key11": "5t2FvyfsdYPwLpzZAU23zoPmfQUj4WYeDyUuMppBLsJNTDHgT7y71DAU314q1fi5edeYEzzgrk2aSdKeMk8s59CB",
  "key12": "4prYkKjxUX97cvNxCe6HNkaS6KHfE68EFStVp4FsiFvN6PEevs4m4YwCoE6bbF9Gnp8nu1ZgMYz5iEvW8ysjrxhU",
  "key13": "5dN4k2UcQohEoFhfs3uDCPPLPtpa4VQeU2fQSreyhATJc5iTC1o8aCa3NDxCQy1wQeahggP1BuJX2DApWoqseSKL",
  "key14": "26DNQz69U4xeEVqSyyFRREneJrkP4DWREyz8gmVp2BuxTScqPiyoTYbB1hgsV51uRvwBJUYAuQ1HcsKSBDkoR5BM",
  "key15": "zkUWt4Fbb5VqbTuUzFepE54BPEqeEBVniffCjKtHJp9dXS6Cu6pZ3SkWRKnEbS6GRT83axSVFjkHTd6r1jF2Y8s",
  "key16": "Pehgj24G2RCX6orY9cfJTaxjXVWBxub7eFrjx9dgPhoxiJTYsXu87Koa3uAThe6qXeygg7dyEvF8T6asGtqETTw",
  "key17": "2RiTKQRgQfGW1oLGuTqREg3xdiYcoWVmW4FTAekmELvv5H6p5ZiDKJAziqBPQdFGhHssyTje5qRKvWX1NyNgh4Gc",
  "key18": "29V5473xsuPvy6hPTuiBv9YvkugqPPv7njJyKpXTYyHSepBqD9eL8B1t5FBLxNkzPWp94rgDTGbKdTfgGUrY2BnL",
  "key19": "2Dyx5EBidGbfrCnKPjeV1HsVFs1SRanG95a4HNxUsqy9WJxkeoP5kMjVFV4VmYtGp1J9HADVGZvZbpTRKeNyfdFW",
  "key20": "VLZkw7z5HkJdTEc8du7uuZ8CngE9vVQ8SJJhEZUxJDExJnJf8yFeXVnswCUT3pTGq85ExovYGqnpEdUy93MDScr",
  "key21": "4fu8EmSLQcNoWRgwtfND2NkY8cmxKcLWWVcBxAvAvrpgvsK7NM49Yiqjhq2Tm69zd3M2mhoqcr3zt7rABeqAM4Tr",
  "key22": "56TjxYJge1riVJB4Bn8Dm2umQGvEeNDVv68qrhyoHLrSQU6XyDy1L5aED4Emt1918abf64Bp34avtjpsSQbKhDfj",
  "key23": "3fVzYLppJV81tCVtscKHgy8aVFD9bye6h7DSNVNM8qWwNr9sKyZ3gB1nDGn4xJYYSB6uZjQNq1nBLL8UV6JEAYhn",
  "key24": "33VAa2E1UD6Nmh6U2USZv2wx9iGPSHVRHTdS1L4G37cD8k1MGyS6VcLmycHqcNtacNzRfHKLvRkxbyBypWBZhTqK",
  "key25": "ZzZL7z29XGBJ81JBY9YkvGPuUCBKqqTUyZU4fH8aDw2s6wgZekLD7PxPiKRUpRkutEGBXjVEenXgSNh43xDECHK",
  "key26": "2UCSfiP5VL3z2nVmP5GHq1LZazs4dv6MECn6TqTgDpoUTXtuptsaCNmgiWzWF5XqoVc8DTdeHNDukZvXsqVs91zY",
  "key27": "YLe9qrJKdRPsvJ4eooHX9tbvXiA3DbCBBqu6pFYfGF8VSYVHBsfooevcada1zkAGPr7u3PLZSw2hzwZ7fvym6wh",
  "key28": "2fzcGo5Crcqzmonxo32p8Rmi42U6kAouiDAVXVpSpQSjjtYbzfep1M7sPqTG9fxGr8px2PqvjkuGmAZepLH426fk",
  "key29": "2Kwh9hERoJJgh4v4hb8rpoT2zekbdv1VetZquWTLBvUHQ8epUa18kkA8hmL6k2stKHyWVjnUdgb3Y8LXseTWSVTH",
  "key30": "2eWW7AgsaKfFf55RiktbgGRoFuP5PUa9UCUR5aHSdebvjKBTuh1DNQLvVWiXEYiBBmcM3FVhrcJMYi1n2UDGg8gb",
  "key31": "59txzDy55L6TvNVPuaa8xbEAgzFuEbP345U2cDU7GUiP67WTD4csmy9xvASNBXKQTy4PVqz8EFizWkiadyd89CZG"
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
