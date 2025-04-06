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
    "4mxwArpeTXyugoJx6r9WcTzJpwkbRD5vEvnvDUyTe9Qzoq8Tdh5ZFrFkstLaJTrKLcBGLupP7FauKnAeej7hkmaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcTfVNyKeeLmru8PQ2pYs4thNx1QNXGgimcdpuG8gyikBhTYTyZK7bTVknwCeK26mXcku71LqNQNQrAycQeQD6C",
  "key1": "5fz35qbMp4rENeNJt1PFJjYE3mpGaf8WVJXnVjLS6APT4k5bG2S2WrNBAbbvq45g6hsGnynmQRCrqc7ib2KJ3K6G",
  "key2": "rnQtJS1ENn5aG1wa4bvAra5PqrTiPP66ESrQq1r8Qy1xB5dyLCSprqQmt8uBGbui25feQmtJoa4EWseVU9tFmXD",
  "key3": "4HnBgMeKMs6eYsuM62AHpYUzKJCh4BTBDzfoG8zFXGsZmL2DCVBrv3g2C9KZdPxUBG6LvrHAUGXyF7GiVj1JFJqW",
  "key4": "3NsfgSiQ59gMo8UoYBddWUr7JE4NSe3kffMg9kcPicRS3SzDUdcALzieFadMfGwKNj5JnzGekDvjpye6CaKPxeYM",
  "key5": "3Z295fSa98eFvS9Ao16vK8X85YXeiD5VUSfLm98KmU3QBaZWQDHpYRsDYS6CtYehmngfQPJVS74cXXQVq7f9mrZW",
  "key6": "5RrtB1yZuNk6NMkEvRKT5KXGv7VEfbv2vpvnPP8xSWYkmpZqpQTA1syEivGRd9puu1mwUzagMC8EUZ46PazeKZmD",
  "key7": "2givVPoCP2BakbGRBau8XJvcMj4EKi53gAbpWVRiSgPoH9NbVAuQ8XhFLxnCRbHZPkp3kaE12bKmVKuFya39SVZU",
  "key8": "286tuFYMrtH9WjehHknvxE7hJ1PksrVnDPhEYdkia5EAzenCXeMP2iK99hsU2nToaWBu3GeQAwHV8uuKUTXm7hbx",
  "key9": "5Ex5ZrbKRMYV2GGt4K28QNNgsBEwJdhkeM7XaLCsyFBsfNg7zKQddViN3QGbxQg7E3WnmjqJnS7nv6s236HQfNmZ",
  "key10": "5X8dbi2pSUUG7LYSKupxMGAAU2Y2KzssdcEPpDPsDrWN57wFRLF4CouQTpw9eosJfemp5wSpb2oh8j39fPUxmaFw",
  "key11": "4SP4fEs53hi6tRJbXSkHScUNQJcjNhD4yCUqSxw7WdBLaScZhMNRimwwpoL3mEL7dTUUYJKXYqJt5XHBesK4Hepv",
  "key12": "5n75NLn3B89nMZ5YnDmP2gTFaEHvoVto5cEebDgARkSmyxeAMDrDyV8uv5TN7pD4Nbo6RufYci2CvSWqy8XnwCjf",
  "key13": "5tqosPAAmgvd889FxsM3KtmsC7vDprBcsVc5RJCiqAEMRydSjfdk5W856DXKj6SDaE5kYbpeRae3q5Zq7SuopqUy",
  "key14": "52HJLik2EmbsBDyhNzeHgo8srgD5jJztihu9enANh4pcyxthBdNRfXZfxWvt19uFWGkVgk3S5mrJjTE16JL6VqbA",
  "key15": "4t1hqVim2pGVtzKhCPQ3imJGynon8Ss13umc82DPv7PSdyEA8RPiBkRsUF7mndz4jaqLJLxSxsdgqMUoAQ2RS6G2",
  "key16": "4f4M3DqremgaCUyBk13rpTky9MhUdHZUGKFZRfwdCGHFkTFxFfWby1nqRmTBHdE1DsHUB1tBGodNxNnT4BnUaGTW",
  "key17": "319vkvPX6wo5Vj1tyv6NJgJbAX4e6T7hKpABPcHgZHeNigwNkyZXGTehiEVPuGkqezLRhoRgsTFXnCs4AjJf9f5i",
  "key18": "4tKLvhBKtKTBEwgxFo3rkqGCFQwxvBEXxpmqLj2o8mYqhmQgHBcuMeV5GE5jbw7Mutm6gniD14giWzYterdpU2Vj",
  "key19": "42kZkCsMa2X9esQTjsVFmibeWYjKAmrtj3zwf9CDsWK7RvmMqJygLB5QkLNshhN8uEvzqRZfv3KVHWqErdJXxcU7",
  "key20": "4DCopLBw6Kz5DBeLq9LpRGp4jcXvnX7FNnYbGwXbGUREdMqp3P9Whc6jSWQvkQmCeMH5WBpNVAE1whuJQwE9daB2",
  "key21": "5z8S1gAwr3m8nFxgVFL9ddEoCperdqHL7By9yumc3WM4YL1bru1yRvqU1H2US9BBxw8X9kmdnZCspE2KkV4WssT9",
  "key22": "3ovY3z9PJUEtvchpV8TsCpTCS9gYzGzYFYF2GAV1AGH5hqxChVnvn8S7e3EByQjKH8Wu4kVi96PZw88yfKg8Xxu2",
  "key23": "472SNUULjMN1StFvKRkS3fLGingvu3P364dcDAiHEe4d8JtRuTHbG9f2ezhUh5LuZ4XwK1LeEbEYfokRRt8akWgk",
  "key24": "wWRNqtn1FH2AN9cVEgmT1E1PcHh5Bco2LJDGS6SE8xTJQdqLj7KE7jV6vAoUfgkFGw3ji5K3HVu25rf1uxXMdpN",
  "key25": "4F5AfmkFJ99YUvT7L8Nf6FQdfUWnd6NGU7N6Aqgd3C2TT53syVmgGX5XfwzuZhAyer3kZrRnDLpEdcGueoQN22nv",
  "key26": "3x1eSQW4BVaD2zZqiskQHm2feKsMN5CSdE7CjM9QEATP43iPt1eFgyHShj9G24RHEKRXZ87R915FU5U8sMyJ4G2Q",
  "key27": "5unEFTQQRwUdQ8Nku892y7jzB7Qr4exJQ9pBNng9z7UYZD6DVcKY1zSsmmDuWqFYTea1BpAfxguqbS7QG1NcS7gv",
  "key28": "WcbnHnHqWfzMUM3QN5o1Q1rMhwWJFdqpxTdWi55GRrfxX3wFrzwxKRA7RrXEKC9ifmmc4Rfz2RbXPaR5RQxKiow",
  "key29": "5Tz3N21nW4NU7EqrHC4A4YVNquegZdP5ZVLaCLARQVGua1M59X6vnKmRxA6ofebCf7Fnh2p5waBG59saEx5ujASY",
  "key30": "4VAdwKYhZoYMYkncJBLvetdfyKYbVEzFjCbf99C5WvTbEWUiEd51SF4X5HS18tsJ1JzTB8zRjub7bAbqdRhg8mpA",
  "key31": "3LLJ6Qcdv5CN5iggNTng7nFvxQEGFh3zXjF7LN5pBpa36yezbFvMnJmtj2HRq9CR2B94RD57jRusdukNkdksGGUZ",
  "key32": "47LqeKY72Q8NYxK3vcgHSSHHaGFMd8YhLWXeDRM7z7VQMCyEBgnEDmXWrkSmNatVekYnmgfuWXytKtL5TkeTbUh",
  "key33": "3X4JSebR3ma185TUhKFSHxeFcQBJLsgXy4opAAcKre4YUxewrheoBvMHDebx2rrbzMv5KNfi8nLfcAfGLjUmBh7G",
  "key34": "5whVPQ9pruLauaMAVxguRxQr7ATmAXgnZTvoPBmM23VXABUnqiDLqRE75mG21zAYWoTCHpDzGLZx8eZfXgX9vsiX",
  "key35": "5D12ECUGjh3NSrdtvDGgwVJesRQAcjRb4sEg3DyJ9QKPP83NHrmwaLY5orF8rSSwKzSD7aQt9i3NyCBpnsvu1dFg",
  "key36": "3m3A6oq5Uf4ah5zkucDaLbq1znLLda6BThao5fJGKYDTRGAzKs41LpNehd2nCXZn6GV5sNtoJeUZnYTdtddLtJxA",
  "key37": "2vWoFGWwSWmgVxoM7cY1P3s4kqX1h2i17KG4JDjuDpa7LvgxTjma8UNhRCQR484k2WUrSg8DihE4KQhNYcWao3L",
  "key38": "4juomNvwWHrbpDPVYxwJ9PP1DgjgfjbBSnSm8M9QbYzpQuLHx2HNzLz18y84UXki8PvdExYy4AEktR1d29pcekAF",
  "key39": "2VbAuiLSzzn2ZgKKTLYdmfVtFLLfCShRfBFfuAuBXDFr6GAxD5xv1S3PPyq3Tiuur9rwLsZv2fjVJ9ET7aSu4GrB",
  "key40": "5E5cMekTWSrfBdwekAMd2VPE5C8UuYGDp6Xozb1dDo34bdMwy2x5BoCs44KDM7h88rNsraZ4eYDsFgBez4EMRWNx",
  "key41": "5qdVxRLrg7YGRxfBmbxuXU8bovAH7iznmpfToELpoNaN4zmE59ANcrUUKiy7ni3RTemCFdGzhgUoSBiVtS4ECjuA",
  "key42": "5uzYsK4M2beVi9nizPoUR9oEE8a5eyudmkHQ8kdGUc8KZtP1rcfxbwFfzLFtET42aQSPsYUiNGksJkaJmGd4noDB",
  "key43": "4WwgX8B62gb2EcovXbPmtMUCJsmuU4gLHi7rTfUuY4drLQx5xP5nNMZkHRWRUBkkVJVp3xxJsrc2zvWNP4saDxU1",
  "key44": "2j9dRQp93LFsaSFGKfkwp6Le31UF4xySsxvziBvu34ifhSTcWtV9dYY7qWCzarqDsd61BptwkJZEvcdHoNnXWEcn",
  "key45": "5cSKSmrM8bwRR543yv6ZUY2m6ypK6b24ovXDdREPoQCYLnxF8guFyKMUsJEZKeMS4megFFZFCsR55iGPZoFhgzJ2"
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
