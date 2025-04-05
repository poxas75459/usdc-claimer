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
    "5bATffP7EJBAQhyKfKhv5rkRnp4Fsz5qwNdD12zfTZDXTqhr8WoMgryc77f7Y2NV7M9Tw7AZbVcaAD2DQiXCFQ3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQH6HRGJoo5T9zKMmKZJ2nujb1Y2o8ZHeic6tXApxrLfDimvf6XJSXeLpgBpA4rVjweZAtZy5n93j1x8Jwcs4b2",
  "key1": "QC7MbXJ2rHgBwJk4RFd5FHePU6THHLXffRogT1shQMbA3gnNuZxCVLBv6KgQWRiEjzsbCqSMiqU4bRmDgyzVJMZ",
  "key2": "5RQZKSTZQTD1ugRAHBtLKAxkMpCDzc6dqCD9YJtUfqp7oj5Rx1vATfCe6hXTHXGeiEoPYvVrEMnC2UxiSP5vyFb2",
  "key3": "5GCh1KiMHBzXogRM2pfPvsE1DYpoX5iW7cnRobnX168FkY5VpanGFdAnK5ga3dcZ7Vo8q7ytepZCMuFS5oLirpQK",
  "key4": "2aYe12NnAUV9m5nxyAsC83CimXPW2sszw575DvrtJ3WSUdZe5ddvAd9nf82pi2R1LHSzgtLqAcCrr9Q5HYRxnRqx",
  "key5": "SzUjNQfJUbzQGmAF1XvLCyf6V8YgF2g6fgzgi1chLfjF4hEXkpWzt2o9QioBf5Wwssd8oZsXsyqchYv4o6BXFZY",
  "key6": "FXwNGsHWhqqux8p3HR5HGQfgL8Ecm4wDeWxqyrcxUfYAVQcBqrVbPJaXw3uga4NwHbqndrFbi3TG61HJCvewJRH",
  "key7": "3PkLs8MHLyYVcheAxQDszUa41suJp1yggnBPjWZSdLF6yFaNsgveaaar9FZkeGq5refwrmhSjkUe1ajkaSq5yn4",
  "key8": "2Jjkc5HuFkNroZD8MhupFg9oJyoeGvQGBKmv7y88Wg84rftFECKWRV1rAPP5sbdBjmyffkpR77b3DQxJoCv2VmXZ",
  "key9": "5VjkNgHykMsHqzx2zG6LwX2AhyDSXr2sVXpukGz5rFkCxF7CBLRWyc6kUpHp3VCq4PZcBnJTuEsdrZdRXNeDuZZ5",
  "key10": "ydaaoyhGPoaPvxg2YkznMNB9gKvDWJ9jtPVA1rVPm7vA1FXAfZpkbpCPaiuPkDjxwzPFPcR7AaiMnx7Atx7LHVp",
  "key11": "5XYC1A8guY8XVHsuRwqG8CKKjcZ9XyM4tCynkzPdZSnBapJPGwR7beYkYKuQGLosh4m3jLbSCdwphhakmC9utY5L",
  "key12": "5bH9s11rkSymWMdeq6EuwsFL18kWbJ7hrvGBD6Uep7nPiUxALHK6GnFHfnMSEJTJNW4dMaB5g7m3mfFM7zs1gTKE",
  "key13": "5xLtiykF5pXcmDi9wdupM84EPPTDSWkwREJyPLSLifewErfS8ZbVPSSDtSc5zGKMZugoqpFqVUTuYK2PkiwwR6T5",
  "key14": "3mmp5xrMkq5mc8zpBwd9LZQBkeXduibTdWsAKwYQdA6QuBFc5gaaSvTs5HBFLNwPd4nmKR7ZJmx5kP3Y2EmrAv4s",
  "key15": "5xxyBq6yeQioPZLD8iXmc4pPxxufEQmom1LhFBXw5jZ8ruNN89yjBvxmx7dVXPMFMbXHx2yVe19pq1XeajtepFVH",
  "key16": "5ZPKLwQQqocwt1vnNdPkh5dx92z1sp2X2QGaMYQQ8PzUZMD8AGpxCtZNLrWGb4gPjiyTi3aCmyCH2su58CMdFpKZ",
  "key17": "2rTHc7UwU2gPrVfLjxqpKDuVuTmFzXHUMuV49MACWrSgTej9oqit8KYR6AV7wjCa8VvBm7ZP5RxxiZN63JXzU8dg",
  "key18": "5wmqjx1eqoJ69cKyMikEKhpUUkKnG7zj94gVCiJBkveDThR2sAgzD3XBvprZHRXNT8B2FjxykoJDQnWKxKXd38dS",
  "key19": "5DBZq8A8JnfqURVmmrjBvYJzWGDNFcs5dtmQZ7xM28N725iXBtiy5c9FsLo89aHBrL85mcnASUuJhJkQzqxaBZ3F",
  "key20": "ZB9kiCVSy6bpXgduhURvsBGs2ASjUG2YiUunBuNWQhcxqQzhCdGwXJdnSWhGQTrmdoLDBZLrtyBadbjpyJ9tXTz",
  "key21": "3Trv3oqQXeAXPHXZiUS2pFsPCtiSySPuLWCsxxqc2jmQxcsyqqT9NgnwH657oxn5Wa54hezsjHzoJa2dZ1RQBXt3",
  "key22": "3iqBCvWE7SEFwsULydQKKyy5NxjzGFzMt7CZqoBHpZ55jrGT3NMdvaE3hB7fD5tRNBAFCyvBWfLPFunarBqY3ESJ",
  "key23": "cQ4XCwW1Vabwj14HJLLnKxMDGcucsxmWSL3DeyzDREjrJYwenxSxZmeBMd5GPjj5RdxXDV7Zu5QQUWw47Yfqeuq",
  "key24": "4Lkt1EswdMVnDnTLNoh3EXoGQzfiTFeKNbGkmwUdsHEmjXDbyH3dcKPLrJ5K9FuzC5EnY6x8XtaBpMb2nmPbFYe",
  "key25": "4TBPKaTo16jKTD94JbDz3cXjPmY9TFX9oikjWUaxfpcRwa5g8DvZ2VSCkFCFrEJkRjWL1jHWxUn3X1smDZUZPnch",
  "key26": "2oHB9WQB1xAU48PkKhtdHAPPfJkDm2sfVd5XBocbiLC2F26xpZRzXHJ9KrXnjkcw5JoopF3RSTV32eoe9C7exQVy",
  "key27": "5T35CTNX9xWEE6es7mie67qXQyhVRtatqn561mjVRdAZ7neKguKpyZdcSh7tE3ABS6kHDVTY8bD6F6wM7LkhBqfE",
  "key28": "58b9vxhehYCzNgHHLYdjYuk7sFUaDC4V2sqTBwFimk6RP542HNj591kwuEJBEnafGJB1A42LdGR9Fi3hS6SfAJ8x"
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
