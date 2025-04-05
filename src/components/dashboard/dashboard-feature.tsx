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
    "4BmCM5iVtW7TpfL6dbkTt7NkHhRxfsdSj3Vrsi7EyPHX1brTxuCMwafpmcuCkzVfBmQjpymT8TQXW6PBoNM1zDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQBRLJTmD57pxWP93ZNozhGBf9pxzE5dKkDg5SfaJgBpDEhVFjQ69xRCKsPrkhfVeGQuMMDMHSfYdphhd59guX6",
  "key1": "2mtMQfVi9Jpiidf3EpUK3uJEVM1EzaWhV7uWTTpUbT55fev8fRT3N5xmzLfkXgPXvurCinZ6PAcMmoVv2Pj5tgDv",
  "key2": "496Qp2JWQz5HRR1VwqBiEz6jVxgCGV3SbjdaEHHGNBRqQNzvDMYUT1amT3Cj6byCcysGXR26HXcGLakbtifVTCh1",
  "key3": "RvogE1odNL2tcDYvVYg7N5dwNPGHVtfA2Xu7Pn1mWifh5ndCmsEZPfZGmg3CscYb5NyDPLQXzJnmmePKEJrTMdn",
  "key4": "5PZA6yr5SXBfW6NMB6M654YiPFptMVDksNVZxHvouQB5aUikdDLb1dhBAx3rr8ZxzfP4GoALAGaxfvwgh62SaWUK",
  "key5": "31WsvqW19TrG8w4bAwnXtANCiSzopfUu2Xfast1hSsU5n4wu3PLnAKXnMVGsHcdBtmKsMLNR7jaBhji1RYQPzM8m",
  "key6": "1tNaiAdpKQ88Pakxt812mqTReZn6EFUxFXdYV4FExfy96Gr1jsZNoWMrVVUwifqm5k5rhTwHJFjrUY81qf5wFUR",
  "key7": "GdQGyEwMkYvGo3rN7uVvrmw2wEhNfqjpBsiXGmf5sCBshNjkaJnkCkjSUsxxy4ovzzhDHHyQBt5vecwdH8T4Koi",
  "key8": "2fqB9apVsEwW3y8aCZoCYrqVYZLAf5prZPj689Cgd3xcZ96gn67rdmvKJhuf8gZVckDwEBeodBJSgWD9judJPuos",
  "key9": "23VmXfJ7o35qAnp7hCDrEc6AUgK399eqd4TRDMJmoimCoazcSEs4rDT6UE2TFX9VC6PM2aySNDvWUCSwVvcWgDJd",
  "key10": "3Lo4f9aVgFrkx7EY1GivYAWqXnxZsPK6sosUdjfiWJHzAUXY4o1po7BQF1uR7w3js7PxWoNksK9B8p19gyZaj5C4",
  "key11": "5xDZDfJEyS7FVbNHCJmrSZGiSBqavZMnZq1ygj58khZMzmPccTx4TQ1rKHG6VnkJkMKhUpzURuFUzejufUueWQpF",
  "key12": "4xx94k9oYLCxTXRWGY9Q4yNBSEFSewTG8MAZ5H3Hf2Uyezz8NBnrwGup5EkknY4EqvNH28jYNUsNSNorZN746gEB",
  "key13": "8V2r23qNaWJMm2V7JidJ13EBozJtoEPZeKbm3V6Q8B6iczkjsm5ZkCrxPf6V8Kp3Ve1Bw77MwwxQx9Ar5fMQ5Vp",
  "key14": "5mKYTGTCZZvWRXZdRfhCNwQAtdGA5uTMwYseYfb2LEbGPFd7BrLmMCRXT2uLCJzBfTUptv6EqUDAhxTXTmvU6rof",
  "key15": "3J3ZEWziu4FuKypyE8eiSTrvvnxrNxsBVps6k296iUjftueLP8YR9V5QPJU1uqP42SMs65pV7nMiuL5wN16tvUQq",
  "key16": "4Bcxv9EwR5LCqdBFcQ6REqB2vkytXCvgAkQkJLpNUuTEnxuBb9cPb6CHf7f8K1ePfweDGRgb1SZfosXtzqj9KTMg",
  "key17": "29dSRRNbniBh7XVKCK6EzPc9oHamndDVFoDMawejzu6DXSFXYErmAmp99eoxVeaFeHpJXewTCmPsgUdW8SQg6dUL",
  "key18": "4woTFZgyqXi3CxV59WsEHF4uQjTW7a3QYus6YS5awd3mjmMAixkBK7z6Ez6es7AQeCijKGQPDP93KTPBkptLTeZs",
  "key19": "5yoGb1WKe2eYuhK3aUjokVCzU8KE5ZyxFDkpXfoCgQVpbm4rZK4hfj7ezLpKq5kgZ6T17vRMmwa4MedoqKXJmByx",
  "key20": "fHUgNHandPZWmdiHLoP7Ymu9RSfq2y3fjkN3pcF57WQvNbL5ngBbebUFtLmQ3kqn7FazFJNRbEeoujTbDKWFGai",
  "key21": "54kmTFASQxJVwwyG9k8wh1agB6iQ3wmqmYC2VBHuKMr8ExJ5ottuXrHVhPwEZcp5CmEE5aGqgFjyxQTQ1h5wJUeR",
  "key22": "LVrushqbRVEXFSxdWPjRmCgsTUf8uoQdxYMosQxX1gNf5mcXVS1xW3MngufT4vivcsA6Z8MAD56J45tNQnRrTMF",
  "key23": "4Kiw3hy559g26raK7yVr2GJRJH8BUtUNo7bYAavQZG3HsWKv4uT18je7Hs6tdgHYAwYBbRv2NiWkQMDFhZsv3VyR",
  "key24": "VJZf7nVFxoA4rCgp87LzL2oNmUn1gXfp49osy6ppFCq5qzuUqQ8EY2wNRcK9vpwhx9yGwoxa2ZxyrXdfCYvbZ47",
  "key25": "32ysY4Yiu3CJhge16rqEhVSkhgXDQRE281WxJr78Vcjt38VYkjafoGK4ZWF9dCxtDjPDT2kWyCkXoL7oHLzP9hXp",
  "key26": "2WqoQZkkQ8kKgDRUZeMCvmqX358Kwa54aLe6cBXt5YE63RLVFcmPqG4aKzsXYkgpDvJtan5M4BmoFFf2nkhFjSNq",
  "key27": "3jQt7an9Tfhfm2FbTuXrqWaTAuGL9GKRU1uW4b3rgn9N8yYEww6ihn1Zo1ppAHzEj6AmiWNv9Jsd189QSx1u9fru",
  "key28": "2fjJW63uGprdafLe48h6tNfsc2rLBwLwmrCDMdRbE173iSQtzfxv6WsEGzA7RE2CZxJrmHAcSxqQe6XUAL87JzXx",
  "key29": "wHNADKGt5xnpbpLLuzuVd7p7AwJCD2noXbgKJcSme6dPpSa1q9PphtUtbJx4SbkSKAcsLC2w1A1R5CTTmr7KMR5",
  "key30": "2Cajx6MYbaegZw8hcjDwEefH48yCgRoT7H5TYJMzbr3rPZ82crHcE11hnde297KUcczXogW2H3niiPdJ6oow6XVE",
  "key31": "2gV8UhwxknwGZ2bfAiKtMizHWMhVGPhQ88ei7sD3Yqr4oDeiUXaPYmetBAuUGzwfXfTBPHVKZheyrdE1ASJvnVvq",
  "key32": "2LAFAxA2MrZwfKnrVfRfh1M2nHjh54soHSrdadA7QUP44taaXoEmAWc51WCwoZQbfD1qsBFwCSgG7hf5TgDX4Ygn",
  "key33": "2P1CDojjeuS1tq6c3aZxXxwHzn6CDExAqgQXosQiJLtjFmLRuipcqcNemrpBw3ovoghfibGk1TpPDhw1mLAqhXvE",
  "key34": "3eNuQ5z8mwKGecXYakwdtDCcLaGz5eNNsG3U5BphWXCNhcz9FVNShtsKqKKMaznakKGr1eY8HMq749HNPeN5Ve5u",
  "key35": "4BM3JVhPPGtNqSpUJ7SkfanqyE1BV9c61ufoQjd8ihWBBBoSbQzViuwdA2jrKPbDBpkgkC4TV5xrhAGmaAV3igL",
  "key36": "2fBmFDzi7U2ik7Co4wRdZCipTmNJA1Le7E9KffmKsmA2LWUnoAVaZFgmk9Ru4d5Rkq1VEnjo6d1pYLHVinGj2MJK",
  "key37": "4LQtSefkzK3ZnyVvaurBfgwGpZZNYn7r7qmjvSwjuVQ8gieZzDnnNyjfrox6pMFtnJRR8UL5kJpexQ7xs6b9x1ga",
  "key38": "UgH224UDtWsHrQjFZuHsVNzLMm18mcnDAu4rvuVX4gpqz8K3B9Abeb49KmxA1Q6RnZFmtNw7ogfmb5Z1CGN1uyo",
  "key39": "5JB7KcjkUqcioSZRj8EiZ8mnZ7zsVZ1x5H4K6k1iMzWpRt8aNfeBsEhi6ZTmq4zfT9w5Y75RSHGU8K4VdDF8dSQ2",
  "key40": "3tRh41bu41UeogXB1wWiXAB61q1FxLWmgvFkBv7w3vcZSSAevJgh7kor7d7SL5wJAFeqwWo4Cq7t9tEfA7r1tKX8",
  "key41": "2QWF3VKpQ63b1wEUvwGMvDJHnNzVpBtk886jAzNFpSzsF2ehNg3dLJaZNPvXQseAdamXKB6Ksc2R7GLVPdoLk91P",
  "key42": "2pjMd3eKzbxuDMuPMvRQNoy1u6u6vXvFoEJhQMLqfHnxRdQNF1kRH51SSwjR8iPAMt4bgr9yBdbcyCtQjJhaGqv4",
  "key43": "4mHkYjzw68adPzyHuJVg69ENaS969jzfLNNjY8eW1snicKnu1GwT68i7oZqesLP9s3uvDLrQuPPLFKQ6o5nN2AHZ",
  "key44": "2MVHS7NX3fwfB91JL9xS83fVhxniuZbJ2j2Rj5DQM5xdw2gyZrLNbZs1nRZKJkv9YHspM1K8UFhQ3AJohofkKSQs",
  "key45": "321zLioDSAk75cMeTBk2CaVFajbewhShc4UjH22N6wSjXQCWyiN2w7cxvg32FY6PfUMXZnxXJKUUVBpBTZezsZLt"
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
