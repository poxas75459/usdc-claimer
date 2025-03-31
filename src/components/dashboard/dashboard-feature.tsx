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
    "YEyuffddroYM7QozLZz4QtzcRHQQCD5AZL9PxkNDo5ajn6LRbqxFHzzr8mgoiPQUwkprQ3pjNnddwnDjQHowpgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Tb7kyNYevccrFBaSYfExRZRjU5jt8FbzJjJckVnk9L8xcZfBVL3J4PeEKtHhL2pxqLZo5VQ4vUGcebHhWCnf3g",
  "key1": "AvQ3D64i9kg51z93YCiESJhCFmLeq7C3JLWjojm1NnmsaaB7oo6nDhFx2P4pHnSfaFReTLEPxGqSLuykF2Kd3y5",
  "key2": "mLh1fF4me4NphUGSbL23rzfpoVEi2ouHTpE3WWzpP7q2N5WMdX4u4qtMcQQD9TBJWkxBbdFyKDh42uuY9TmccjK",
  "key3": "2AAk7vtauzcjM4FdANMD21RDA2SbbnRhQRhXcoNN2n3N1WwAQWk2MspAYVbkuVh42j6HBYczpwtKdBRYtHuSDzuC",
  "key4": "5WNXhMK9B3MNzKftWS4tkiiitg1hqWYYWLbQrpHEQpkXpPxDQcsgivwPbqDHo1KcvpWDvM7dFBVUkLWo1yHtLWN5",
  "key5": "4sgZ8bdYg2GrkxMht7Q8jcuVPSisnnQHawGWnPQn4DCrSfGhBpoqBS2mnb4u9NUem5eoYoyFWx37qKqKTspb6UGz",
  "key6": "2gKs6P2yADy68W6GAA4YKhcR5Aw2ERQGKYw9HRZm7xBmpsuJ7KrVeUW8x5n4GpQCPS9vtwPKQa8bFzpAKXYvHjsv",
  "key7": "YfciWn93aeUKoe29MHjVQ4Ju2unWYUCpFzkAkovrzTHprvt6vtA2ntkSY5BNbm52Gi9AHPTeg46TUNGpY64uDaF",
  "key8": "4RLX79sPsviGXMsBe2y3NktUK1JCED7SVif8gHQybGXr7sCSHm3hY9BNAnHNYLRLqhawqQStR5ofCR8C5BMafTwi",
  "key9": "2xp1YUcEkckdcZAmDuc9syjLQ5kVAALPk6DdAwUtR1h4565XGA1dPQ1owXYXVTFLKWpMtMiuEMXAXeoC7viDnDwK",
  "key10": "3ErXfBLYfLMRoCLjP2Zyws2FowMjxVux3ameLWPqYFVhEvXDZdWPFaQgFvqsmMf2SdLZLcs5BbDRRmmMkxXZSLHY",
  "key11": "5zBRh6hFKW3nWnnoQvM8PyRN6wgUq3Gthi6yW9f81PcfrjX6DTkD9RLdSJKKKAZsyK26iLhXhmCvvpYnzEu1boL2",
  "key12": "64v92Hv7pSUx9dD7zjPJtEhbiSyiPas45rkifqrj1YCC2SxEC7qs57JnS51LCQ6rXv7MJLGrtn9XQwRaPk18Cfix",
  "key13": "33AVJ1nHZ9VxzrXHWssA2sje6UXHcPJaSY8X1xyNNyYSrqPKkcgCDTMAWS79jguJ2DZs21oxQaBxiiyTjgovmcX6",
  "key14": "4hCd2oibhoYUW5drARwFZAzMyg7xUhdT5ecktWYRZkPBatWbPYRFqHM83f2SvcA6uV6BAuhpGz3Ro95FzJxZSTKD",
  "key15": "kDqfFcn95QMhGYouxjdh5bMUD7EcvFmLTYndwdpsBRw6apZouwCuweTYWNwb2PmCLYTCLSQfa2nviQRaZMx61WL",
  "key16": "y9JLtrxqciANUwc6ZqH9iFn6Kgm327qk1KCWXFeBW5VXwPNB6YMCvJzSGygKbfG6k8xtwtrYcxwQ1Sv8zntZxDX",
  "key17": "5GL2XLtb1FvX8UJKkeaeNF85AuwnEQJPbLXhLB7fjDjyTeh1juj9TigTXLgnu8pdfcxUmqPgR7gevqCJn2xQyq3G",
  "key18": "TLR7gf4VFH4FuueSTrNE378GtcHip1Lw37aiaHNkbeaHW8rJw3adThPyrKcfABk7QAM4hVgYTD1bqTdhpY8JRbJ",
  "key19": "wfYDnLU6suLWrmFRJ7mrGSYutRpeciYxMC9o9sG2yDjz1hgsknN7MiSxdd1fVagJJMgccqGicUXQinDWmciU8AY",
  "key20": "5NfK33m7J39gXAHUDLySNjVxpUSx8rMV3kqerSwRfojDkXyMcpYBEKiLJ4DXDte2dRCArVWdft7UauD7y9S3eqR2",
  "key21": "3NRAsS7ZsheFUmQ7cGh3arnrd6JAHbUeJm2R4YT6yMvZDiBZutoBbsrC1QFF9QTS4gW7o2ZLpdaeKGnmA1d67BRw",
  "key22": "3M4qpwXDMoR4vx7MZvyVJM38d9gFAfSudqdDAiAgrCMz7cZtkkqovQPmWMXJeYnRfYnvmYHra9XCDiRN4g3exnk9",
  "key23": "5xHZAotEzkYMQ49uwKH7K2o5GwNvko7QZCMWFHfkDg1847FSqD99Lm5QyQMqEf9oPMHzCQxy491fDw54kDdQfr4R",
  "key24": "2bTKGiTzzqXh7guFzdXpagRi9iTYKRErJDztb4CwBVrVMNzjDDAdRcCxcLz187GwRab6C2GqAhBHHYLKpDD73Su4",
  "key25": "5iWVHrMBPbALx4gwEuGmWAEjYgG7wnyRAske3oKFtmL1wtouCpfmEt3euHJRgZyaXkR2q7sVV9Q3JoBt99PfHA2w",
  "key26": "2AsYVX1NbVZchZMF1L4SbAtGNQV8GhRgk3uDh2KxVqoragNUxcGhHk2ekTDotahQwsJEMSDH3EY6jT5UypTnq2p9",
  "key27": "4SZNLvQHnBVybZxftViXXSspc12emTA8kMvyRenpnfJBjqwk8ej9J114Jfmx9FQun9Lorj9uXd6cJaUBdbVDVJPW"
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
