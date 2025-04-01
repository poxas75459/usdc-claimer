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
    "chjMSsJidRf7Uas4Rbk2VtWuBodNauxWzWZ7mt3w4vaXpFHQhJ9HhQ8WmCrk1wxhGpv8VWWSzauKcWPApenqZzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UVfcGJk2kbGiw7oCvKKHCq7M66Ur1wEbVdAJ51u411t6DDexRJ7i4EUs7WXAPBWDXWdpr4fZHwXKq6Ls5wyT6E1",
  "key1": "5HLcZa3Fxd7FAtMphDHwaBD7UY9SpQQQw533iNHTSrmqgWH1iFyFqtVRAC3Twtc8CU3GC4PVWAZYUUgrqfgY6B6s",
  "key2": "3LPw53obRvDQSYapG4TTGQ11WWBmWoZW5hbAHTTajvBz52rh6vSVyqJSWaqEY4QuksSNQhvgtY3idQkiYRUY6sP9",
  "key3": "5S6zp8ka5LUsLFvhewf4ERDpoQG3UpRb5sckU7wSC7Fht6XpDSQMSooMTxD7CuCqJT5PrCCGB8mL6k9wxpr1WS2X",
  "key4": "3DrzNwG7R57npdHvbyEFb18NEW8dMxiJyVPsLESFa4GWtPnystHLk7azt5q8fix6EAbo6TSegVgndrnfPmg9cDpe",
  "key5": "395Unn7RvD3oN8fibHipbAJf1idnRGfmFAjwadYh21jLh4yjYUF2fD7n6HyK8AWoq5UEEAL8HGv5QszsFWDtpipa",
  "key6": "3Kc8fJGLvDmJS2j4m4RX5v5pDQARbhmHcLPgmuX17233q9zwm2tMpPVoyXECApZ8vq1bNwo2XsCmKuS4M9uRWCEi",
  "key7": "2JjXRNGUEtbLs2VRe9RhbQL3GzU2q1HbPEG1ih3BzHAuM72JqLY1v2HRpikcas81dX9Ph6XvzdfgzrFtDQ4ijKtW",
  "key8": "4cVUn6PWYP3VJuiyhNa5jjY9s3xej6fPdCQgUZ6NqsXQ1UHLYQirWAhFDAbCDE2XADmQV1aiz2CFhjhYGJmwojgR",
  "key9": "5BrWkrswbRmEemUDJkZaePjeyEMsW29tKgXnR1ZKHjh849Qf7pBkFtVrjqp842pqgDvEqLL6bdC3ApZytLb8NMoC",
  "key10": "5f77xS2TTZynCDuANuQJwxMzE83ReZ1YvEiFDK17sKJTfhx2ZB1pvzueSnTStBjEqyZEXoGXwgU1Sp16jmmJRnU8",
  "key11": "4aBGTeKHgdPUd6nHubMKHNr1c9wXpDtWuLHn5x73GLscon3FQ24BfSbp5TALtp11n1ASADMoGjLJet15dTFcRyyK",
  "key12": "5CSBSqKHDVxjDzakjJVjXyYjfiJU4ZP3ruFuzb3uMsGheCy1JT5Z48xcW2wi7YiXPDfDQ8LGYrSwZs5tagzTAUco",
  "key13": "iN4STuTspctBARfN76UV8d3qxhU7E6NK6e33ujtfjQCBcBw3KGzJbxwk5ejb5qZoNZxaMCR8rJLFGnPiRxN56UY",
  "key14": "5ohdssgd52rNoSgNz3coxSjXBSDbeuc9RwNFgxjvsSCRDxfdAeMzAzCag1MxWzzdDLFd1mRkX7oZvB3GGm4RStxM",
  "key15": "34PipSD1uQZrACfmFQLLgY12TfVjKNBLCEELjHt1ZFEFGVAztAxDYPffR5R2NhMRJzhGr9ZEwXGShfQEqCAgGDYJ",
  "key16": "37hscTo6xk6rNdctuoUqPJ1sdd77GJcFEVRvkfbdzjBWxoVufUfbQCJzVf4Zuv3bBdG653UA5U61E3nNHFQrvqfE",
  "key17": "4KG7mhUUDqtvMWSDkLtKSRbjpRjHd1LBeFZPsW4X2qEsqQWwhbtsr9hukwiq5JCxvnzGBtVDmzpLfmFqBUwAWmzg",
  "key18": "2ZgRq871Zhz3VKVXSCrGaMvEPRGd31i1GB1QviVURmWyhNSYeN8CC7nw8mTrgoAsAYYgz75skidb9FCTdEMo6USi",
  "key19": "4zTB2QHWWgeibGSBc38V5DKuTJoReHieioST8yoKFbjc6E7qX16BDiLCdiyhDhS2tJvyupSKGUrXdmEwPMbCu5uP",
  "key20": "5eKKHUK84PNbm1mLL9PBiydJFgT4q2jTdqEYDFuuvn4AFGrGXT5MZnE1P5kvqyf8o4MQ5a5Aqvrg5SjmAvHo3QGH",
  "key21": "29VuqmRioNF4J2ujfvw6eAFSce1ZHwDJsyVwXyeVYv9T6ZaDsWgCCjCEvKNDdhZsvZiRDLw4zaBFZ4NpvUQ2hXWq",
  "key22": "35MQZSmC5YeV34HwWGMKM9JiuEfBpMKWyh6WFZMDh1dzN9sqVeKJ9qr6d8cX8dTjmNov4VM9Z6miDHzjHfEuu68e",
  "key23": "2TkRt5jTkD9oH4Cfnhgad1V3Ye44ENDQtVKtmw2ZD3pRUGinK1yjWFkAaonxtjxH8VaX9kwuuMpk3ctxTdxzta1e",
  "key24": "4LMR2sSdgF5N3FcPYxoAxFcGuxTvV29YqE3aMbnbD2o2Fj6nvUdjba4uqDv6YpQNiL6FftwoT9ipx3xJnTxyjXNA",
  "key25": "66PXUMpyWYqqbsi7sF9WXgbd4ZcPUwk23k1gGsbXfba7uSNzWudeRikt8r56XwrXQy7B98pN8gRDBQpBewE5U6Mf",
  "key26": "54VxLEy5ZkdqjwiFqEP7psC5tJCCpVezSnoJmoxekpaYZvHeMRRwKKuJbXtqULTrdTiCEUxpxsc96NLQyiDJDMUQ",
  "key27": "4WYNwbDN5Zr9jRXpiir8pAgkw5DP8mUNMGJCYDSzccjpEFMLPipynUoQrJDcz44dodMeNAd4xJdG8BhCm78sy657",
  "key28": "Ej6zcJZpCz3rWmWxxYjQW2UNyV4S7k7c9wJYpBLMn3mo71dHqkJBkiiWq6EMMrDJCpdBpPDtHE2B3pDVNrH9fTS",
  "key29": "3JNWqdTDsFMwsoBWzFAmgKXZHGkDdFixc9caUdrM9gvvLjRMq1iXwsngegZqR6iSAvwXdMH2zakAL73iiZm5skCb",
  "key30": "2q6cayijHX4RovyKT21RQW2RkWxDPCHuMJWzg7VxMrpyRaXybWb66gcHkSSfiRWFzTDU9ZguHnnqC1ubvsoa8h6x",
  "key31": "4cgCUPJbQKVyJvAtauWk7tS3KjgMXjeHoboNavw98o7mqW8MLPu1v67ZbgRU6tQPN7aPziC1ov9MrtsA3WfAHapm",
  "key32": "4vAhn5wTcuNGRC9Vf2o5tdEuxp2KYptBPvaegGFh5yLXJ2nrXQB6Yi6vwSmbqQHBaBv3XwPMHBeCp6Uee4X6YaNM",
  "key33": "5PpUb1ygjnBHMLo1hCXQdTruRaUJ86k23JjwpaEHK9DJ4eYkwCEzkw1QNwS4YZ4PzbzDjhJmFHnnANizdFpoHYj2"
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
