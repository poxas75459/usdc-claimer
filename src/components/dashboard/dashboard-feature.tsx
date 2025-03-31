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
    "2iRn4LLFBe4Kqbt691DzcqN1BNq8RwTFBih4BScemF5ybY5ZtraNLsDyXE9gZjDi5NBriD9VS6Cc1jBNFokoFHrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVuTsLuB2sEqcF4AtMrFoTgNw59VvV97qL8sijSpivm9F5WeQLYdCag8FgdZr75pDp6GwBhvg1LmfUtkfX1tMxY",
  "key1": "48CyFynAYFRr9DpviAuvPpjbi7jsmUBNe2s1msLKrToMsTsh6M236emVRDJ2YCDBKRjxN7NPjy7QUh3KmXYt5ykY",
  "key2": "Wi11cGebyyes4CPn6vwxvZJg9AhstBs6xndfqkifob6KDQmyAfjsqXHAfaDcSxsTMgs8GUyeob3NuF8YePv7kpb",
  "key3": "p6zmEq2pcfFzoEzZ8D4qHfCbbyYfqnSXqr55crup7PUpWUnNe3tH2cdiXyypB8MJmAHMrZxp9LfwLH6e2Ae3KMH",
  "key4": "5sDY2Q8ox4AhzCfb6LAV9PG71kTfP4qAPd46DrrpuL9fE13CmmYFLXH6t4PcNbZrHvPn9CaJUEW2CBhJM7Y9CDCR",
  "key5": "2218xLYQx5VWgDyUi4LbSZUsGuek7r8qcBXcDfVADPtQ6gBh5x4UzTLae5JUJ1kix47DxnaA8CVJ4KQHgzPFSLci",
  "key6": "67RyqYtt3SaNLMbZUv2sHynYHZnC6CERDDYnJ6nQwRrMutMD5mdwZ3b8rNtANML1qkGEitSgwpu9HYpLA1PbL91v",
  "key7": "3Yb3iFbUhxviCXtDa8NfBrtM99ZUuKbRNpnPaT6PV3sZdRP8SuQV5aUtxBfCDTCVrPnadYjShnsjDGojeNux8kQv",
  "key8": "4HEbWPjjffmkshF3Ht4enz9xAps7f2ADU3BT9V5WRz8hcs6NqnJ4tfXRvcjCQuyx52LSvBz3VLQ3Zw8vXXiNGLZV",
  "key9": "3349SvmqwhibeDE581QfXn5rSJECFSRxb46ZqxB1mJ2s2PtW3hzy3355r8hK5TougY6piF9ZNrDygAy8wMCpi4HG",
  "key10": "2dVoN9wWQpTAjTVsTY9xSyx6iE8kApD1y3b2DkiswADEksMR2erMUBZbRtun3s4JGEkto31oZKTBwqWUmwz6Hue1",
  "key11": "2YHkbMBA5LqBc9Tqg3LVC6fgx9rbjXAR5jowXGBBDJz3HmkPCiucqC7Ps7ZBbMgW1BwzARvUZQ2Zj1EtfMFwp4H1",
  "key12": "5ZrpWhGmfdLVt3NR4ipSfrZ5YaBPGccaMNqMXjwSqhDvHMsZvD3FFb4mqEmn5sCA9BWgc2fxH2QN1A1bFYDReJY",
  "key13": "5M4b8tMawZeryQqnXDwXcSmdVUPDAjRWr4U75iB14c5hoyFPiijvSpFYUxpqsSUsAU6DCNYVPx9opVBUU9J7UCSE",
  "key14": "2twJPL6XEXZiiwiUhoRCUmjZZqpgYSogyP2qThKG5x31zWBHLPEZKrA3k9zvSGpZyDoNd8tq8nKtkptpy85fvfy7",
  "key15": "3djB64KtMUd6ahKeMBiAkWPNz5ofLBjPMcPTFfEA5JTx2JDe6bY7f7QH1kCjpedh1NpBgFSVWsNSytBfRp3EZrwb",
  "key16": "5yjJbmp1BJzAj2rpz9YP6TiKTKvk9PmFMBPT73YpxVotN9teQZzFpb7LeRVWmYTehKkKEpX2FWxku9KoxQqtzHEf",
  "key17": "3wKXNpuz5UPYZhwachj2yvaT8h2mpN7R5GvJg9KnS96ULWS9BCLFM12DDxZZskSFXw1c9a5giWuAny52Doj315xN",
  "key18": "41oBLeMthHAf2CEa8n8KPp7sEtyAxBS2r9uuzrMJRWjJZeKRf7zHhG41nNgVReKNzvTNYp8x7KPrK97ggxm89vZz",
  "key19": "3zzq876ZK5iTLxH78mvhZrjCj4tUGWqpgPhrNJwqokjBYQEkuo9ua7kpxy3ek4hKqggpVQ6xYBmhtCtpfz85Fav9",
  "key20": "2wfRB7JZqz7EG1wdDVzHkJvwpCzagpDF6yyJniogKfrDfVC9A8TRXVpb1YSXAZ4ZLpzqBLxGeB8aoSvhJzM2cP3Y",
  "key21": "E7i2EMY7BGZ7DouAyGqDotrddZB9JphuKS2oWE949GDq2kRbGwj1N8UqWhTdbG3L3cyv9VNG1n1b6JjjLG4sfZZ",
  "key22": "4VpBE5CdNsgNfTxFAAzuRaQ7dY8TMsNmyfT2687DXXgHEVeoJmZ8eYDhDiiQRRFSzce7Yx61z6mrfUBdabxWVjeD",
  "key23": "jfNKPnzciCnoyGCAfRMcA14SfV66hC8vtxNd1npVk1q6cscC8shV19nS6WeDo1gbpsgXvfXk2jJ8sjk7i9NDhTt",
  "key24": "2wnzEYahBrmP8Fwtay1yMH66dpsUYtCqKYPwuPm9gAdopDL8f1MyL2xUmXNoBR2rXNbRrmZL5Uje9mp9Vmn9DDri",
  "key25": "3SPjHxNhhYjSn5mp6ncNhJZhqVubSobPVswRJasQ2NoF1gJBLvFusbKKtBhmo8KBJ19aXE2HSUeepUJEPtTYNuLc",
  "key26": "5wrMKw2TPJckoNt7RDcDfAZWU9thUsUDLS8SNY8dTArJK3JnqBYojE1qf1DinfUVK88FruMeajAqNye7BuEwof7x",
  "key27": "4CmRYdLuwfBhAaXTzWEFrXp4jj9kYCcimGfErWsfkdHqzioU795g1Kef7XkZdmN6rKsWbdScEMqU3CYJbD4g9FQt",
  "key28": "4SAcSFQABsBy459J8C8VTkqYvVuzGyqdG3bkt14xNjRUgzTiEzjVUMuc6Kn9WBuf4hVFBDDBpb6CWdFeZhdgrzHK",
  "key29": "32JtmbhNJzfHRxtQYGRpT9eztWRDt5Bht8iFH6WLBJsdmdGZdbu6gfkLqgr2ED412Yf2YLnoxwQWRz7LiHGbYQP9",
  "key30": "2k3huC5D7YH8wJ3xeqAybAT7cfEsULTCCDgtW3FG6ft6x8AkJU1ZatPKHWxhK9tSKE5cVh9MYXab1X2v7ibWS6cb",
  "key31": "4xheycRjSN8WFyhy5JgRhFcHaueVTn7CaVQEuSTW9U9iJdepHeA2ntkwuGmfyenPj3cS3dNZeoXKtKtZdcFxmCRA",
  "key32": "58jGew2zWcowsDDf58Kea76A1ozLkq7t8m5XVBWV1y9q6JLNdd746puh9Bc2fa1i5ELBhqGzw6Fc3W9mh6YgRCQ6",
  "key33": "61WPfNxrK9nwgU9JnyEZpjCem75vn2WYF8pj2YSAvKhAkybwLnxNPEzEyoMKLMDxn4xV4Y4F2c9cs7wZAHmCVUd9",
  "key34": "5QZbEQNE5mppsxL7vy4ys7AX8nzn7NEw7KfUCBcNToXE4N4FSE4Sp7FUU9eopo1rzTuK8G141EPTt9TVVTtNVKdz",
  "key35": "2ZFurkRmtS2FXAhe7CBFkFEZR7Hm7a1YZf3J32MH1yTWHEY7wcAyxYT3N1cJ3QtJ6MGe3SfJNDAW9fSHSGHhMbBR",
  "key36": "5QV6UYBr343A8cU4Jh2FSirLwtfsJ17gvVW2tMEgR8X3UFx9NbMYAJto1yZKosewxLv2kGJ2bzTpRQzitnDwsTS1",
  "key37": "5TpJW2vzs42DL3TL2xqPr1KSqD5jwkQYpPKB2QpVRdNd77UCpK9tu7d4qy8BJ9vbbXKK1YibmSWJtYMH8rimNryn"
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
