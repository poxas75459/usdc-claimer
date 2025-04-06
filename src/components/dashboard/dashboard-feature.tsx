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
    "2UE6ExANVUHXLtxu1M3FQ7HUzZRAnXJbxLKmqeFuHzwqa6cxJSLt4Uv2i97z63afyfRPYSeAtFfwjV8iLtuEyfyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5FqL7HpZJqWaoJZaV4yH4eipGukJQScyNqze2PNsZ1Wz5jLeLKx5mzUYfTThsZpinKVCU9Saq2N9PcxctSNxrg",
  "key1": "3oxRrNQrGAvgcUe4zED6omFC7eqVPVFGTwF5FKVEUXCp6qDgmktzuKuNCifyKN7dgd6F7Ln3rGbT2yZcFdUz9Rni",
  "key2": "3txPxsb5KiyKaZophZjYsXhKhH2mdDVdDTq63ucZ7Qtw1pKXxDcMPJJ4mUz4WsRkmUSkUYywiZo9VWxUWa4EYD2V",
  "key3": "2c2RhPE2NMg1xJgVfqJktw223kyJCh7Bm2unSb8MoUhGSuP4chFDBgvssK9skndYVhe53bsRzVC4ejM8JAyKPBbh",
  "key4": "2Kgw3TyvUq6mRHgpCqAKXFWiBDXpskYARrbJfZwcbXp1tuMbm87L2R8TFj2hNbPb6Qy6pGvH4SPGszRSfmnfhnMG",
  "key5": "3amJ2GwEGiyCy3Mzww6w1C8CERqAENMVk6ngeBtRvWxmY6vvENXzuzZiBaVbezv9zA7Ara6qecRaTtCsc835DyKF",
  "key6": "mvt82xgLJUun562hzmMff3yFV1SKqQEj3F1Br1Y3T3pUuZkr5Pd9mQcxm1sX4eg4kzEz3pZPVCrZWVEYREvFbPf",
  "key7": "5XFCvBphdWMy5hLpHEkiSLUe5aoHww4DzfxA5gtYUV9RQ6itswR1KdED8vz3XtYUw544wqStA7cbKK76j4xnid1y",
  "key8": "T3KuveKXiXQUMmiE1WssAA2TF9d39rKBWVmCjNjsbnG8t3GRT5WFXumCUAzsRb7eVdo9ADxtVAw5zzYedVdFXqx",
  "key9": "UPCNwMSaJECvWFxQNPr4E5ea7JbV8igndESLRnPRBmkhxXGcpfcRkamh3SWSwyrYHpQSwqK2oEDyt52RW2unkRx",
  "key10": "2fgwXzbZ9cWYwg8HThUFqVrQQSigGq6BgzSv4vo5d8FbkXQBwZzAi4qXmd3N8t8BvHbExMv4Qh9JS1dUpAJKBWJN",
  "key11": "2Chp1epemdcmBZ1mH59pU5StaZazVxujyK2UffvMHHbK1CezPNf6bK9ajKMBFN6Y1Azx9VPXuoUHHgqpRgp7n8un",
  "key12": "HLSG33ERNQkmAJLyjRpUqz6jvhaAhog6vaffvSZjTMJg7v3PNxDsKWy144c1LErJjRAAthBEEzAdvUSSFYTdNWU",
  "key13": "5n2ZbszXhuGj8Kyg7M9BGZCQBB2UTEEvKxsKabtfLbGUeYAxHUmZSDEfoQh8uCmauycnAno3LNjBtCZnZjWB2pL",
  "key14": "2Z1BwzM47N3YDH6fnKh7TPKB2NeqPAZHrXN1YCGNPBU9TZStxiQ8PW2DNNRig3vVL7xMncZLSgCRicwoPhZYgCE9",
  "key15": "5M8WJDSKT2D5K98fRuBKyaP6wghtTftwpBy7kqXCXy2UeZcR2oPL2d9Bf9UMZ22PDKpHQg7PE9LNzGbNciiVyKjg",
  "key16": "59EhFrgzz4VruJfQQuyqBw6xS4QDo7JFE4yYMLn4xMdUuVJFQivRME66AWQquHQYmajE55UfyzyV4h85bchUNmz3",
  "key17": "3iHHg5eNCcsyfAqZpYRaSdaGYVVYUHZ6CQ241qvovbQurbzpigNuo6zvu6PXd37Wx7PiZkzPzMGBe4QZHYu33sH9",
  "key18": "54aKRjWdKFrPYQG6kMxp1x6rXAi48LTPuAP8B693Uph86YYWWMN54634nRTEvZbgQx9mzt9ZCaqVXhAt6TBrN5iw",
  "key19": "2PEazr5TcUjPi6ZnXATKp1raE3S3kznGDwiU8P6hfGA7SMRPPrCKKwjHVrRjd4vAoZ6eVem7QEsmBduZYwXSQv81",
  "key20": "2GsVqA3PBbNkBFPtTu7r9KzgTQV2qYyDEhBY6636Ue1BLoi2QaGo6rKmXPUm44UA3FBp5LdgH14PfRZnFbsQNWru",
  "key21": "44Gb3NLmypLftFFjbkUxHYpBp4TViYsmqqh6Wx2NDSNMDTxwYgSreEqt4gp7AYTDKpCudu5Wypzrqvm744zGGax7",
  "key22": "3FUWmjhVGMyy9YimzXDtxc38GqGEi5THqLEgJ3oYEDQjzzcDaj5yRXjJ3NcHWkxPzwPt2h9au2aYFYh7Epdnaxhg",
  "key23": "2RsTcPkCK3LQBv57cTTBzneLEErwEB5DYQecGkfvVnjFBVcy4Mz1Pd8kdf1GqRdNqWwA2xbD4rrvqnYN9uGuRAQY",
  "key24": "3wxEyJzsjVLDSV5qhDqkeTtszAwG6CngrgwDVtfLgWapDxM5AFaJREkMtfy87P36CJNR1i28rPCZTKmyVTMZV2cq",
  "key25": "48DHzG4p9tpb44d9wjVMqRVRPdwE6L8QxtGrarfxYAqetRC9wGopoZm68Z51kiGvUaYzc3qzxkadZNgeRkEVEnP4",
  "key26": "4XGmef3AnuQBZV6z3Vn345NsUh9WodE8KFzyB8YtxBGMi5dEiqbnV2iEoxSeyt2qarXh7EZ8Fn4MiysXwmai2zvs",
  "key27": "T1TUBGNCnbJZj5mR2UCnPvyr2HFRR4qjU1XSyqVrrzE9ZbKKaFefjkv8dhfJ9B6nkbSw1bXJpoBLBDwLs4JZxx3",
  "key28": "2otyjK5gP9WH8S36TUsqPSWQqHeBMjWH5YPHMErUhH8qw2BxXxosAXTCv3XRdgKUPLhY5QABiTyzy1TqPi2AqGxE",
  "key29": "29nEQ89hN9gq11SuGuDd31Wry9fDQYkGreYWvoWkkr1tiBq4AgtrCwHtQBKxTGNGQ9qmaQNCTFiXbTtZXnNSE4sK",
  "key30": "4VGA41HJzQsJUUuVihm6z8Re1rptWzDmdH5wkVjptA1HREhBqagUQ1eD51Kyt3fGFf1RvoRzjzk7jEhxnuT7uazq",
  "key31": "5h25voZ3kYHTtiM8iitwTnGAJNFDMf8RyTwodJBYX9xqLZBZK5cCCWFvvAyrqiM8sj34AH8K2XYea21JjXnk4VFZ",
  "key32": "tXupMnLZC6B389FmxHjoSanDJckruzxV4u7o39Hmfgv6BRMvw4hmGz33Q1Dt9tQN6qvbcgvPE9eyjoa2P1r6Mwz",
  "key33": "2BNCzVU94WJ61PWZMf7vgeamySomYoWDXgcBGxKCwEhjuJxCFq9zh8rV5eHc76uMdp1BsuxsjGBtFZUthzftx8uA",
  "key34": "XPHtW5Y4duw44oEuzmoL8x8ZZTJeSxanTk9o7WEWsK87tZSAzDRNGDmoHAQHA65Y8zPjv4B8aKEx7gs6em1nP9Q"
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
