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
    "5eaSxkpThA2LTzNhJNZJQuhpusaLCKSBYZgxsHcVizp59PSZhK3ZvW9rgkLRFhwNHmDoBaX7CGVELRRdF7Ee6bt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVFcpENGjzv7Wetxo2Jo2m6hGU6jazQGjBk64AMfLfdM3wFe11myeVRxeV6mPxsnQKFvd2xSV8ivWSHhdLrcDRu",
  "key1": "2nKWrubpzUKRTV2Fb4pk34qfjFACXwuiqA9BDkjDMUjuxXyRSJyHKLB2m5CcKpiGqbJxzVbqF2Seh8i8zPxagJdQ",
  "key2": "5skVMKNn5tjMbHmRnG7Em5o3DEMVNSWqThTTwab9GShzUGSCgXpD6j12B5eUUUaL6PcDN5n2tdAfGUbGkSgPM7x3",
  "key3": "RTDtmgefk4dcyNSxUrgD1RrPSqPkzPqrmeR2Dy8pk1o1533osTVqWrhoRfi9vJNdkRzYavX9REMzkq75jp62Ayt",
  "key4": "4xfYma35pG5eKTgoKZHDMPeJN4yY7pq3GFgTezNYJUHP52vFGE6RYJQJXFPEKKrb5163dgSmZKjZ7xsWmsncfYU7",
  "key5": "3vTYvNryqjiBeSPkadSyCStZhW5SxoxyRRcPAZrhb3GA3CbiPP4dQ3BEXx62jDXpLV2VqMfLfhAKNwNo5GNUNJoT",
  "key6": "zLQbKyFz6RbX4wsRLvdWgE4TgvG3HTVCNyCbZCfXHrTvGtcKaVepTME8kRBKoaLssPvDpLtV4RULH4kEuzQboPi",
  "key7": "5efC6cpek1UkQCUgbJRi4BsxGXkvrJG4Zd98Z8BbXm3YzuA6peAubgnPGjFrnsoS8LNX1RzATRJDCkYbFJVfGrKh",
  "key8": "q42nsFLf6uoRNgLQunQVVWUBaUmHyafgYA3pxBazaxKAhd14VApcrKxzZtYkxMJRiXv2qRqEpXJyLbCGVXD9Tyc",
  "key9": "2A9BgWyjjGFsUXMX6HEivpm7BM14MCZ5ADZL38vBNtfZBkm6NDveJGysxh7qAeimA1JTMje9ZBQ7vHqWz5m6tRCn",
  "key10": "5ztA61FjsQp8jtBP9k4zJQtNpvC4GKGoMa1N96uRUGmrZ4bjByWGZDP6oHsfaTJ6NVVFxVhYMmKG2BuuyMFVgoHv",
  "key11": "35VWe6Rpw9Bje1oeJBwwpQr5f3DNxRV4EBqYGxVd2SyhkQh8wwFMvDXfbNc8tGFZp67U3UvF3425v3cP6qPqqXZc",
  "key12": "5oGGhHBQSQyXkCJSnRFQKTrKULkiRtFjGd94MbN9z4uRqjvyRLohrVJN8BSdbLPF3b6knDuQzGwwPxhSZe6ShrG1",
  "key13": "59quRjRwcVdTf7WC5gUMocHaRFaoDNvrWjhWVcqc4oXnpqzRCzNQ2Gm26jeUZ6y9BnkMrTWX9qmQhsMqJYVF1ooR",
  "key14": "33m1mFUVfm27xHshkrcZgEr56Dk26XfxDEZZ4nSB3G6wbREBmA5XKhJxvJFnS9jNktYWmMuR2BWgjgF2VdgJiS29",
  "key15": "3u1zGBVPqo6SZfpK9pCPp8NMQMXaJMTT3PyN2G2yvSN7cjgtLmXBELY3XeqdmqGTSvJ7nUiPsJRzmsF1FXqFFf3U",
  "key16": "aboPjpQjtWVGyvwk9tEnxoWtjdZM8TxaU3xTZg66qnrqDe5hqNF3uAEUx7vgLxuvvc76GdXvFbBsBU3XykwEyJQ",
  "key17": "572FskNKZ3kf3P8Hm3CGpHJnZhoNN3kiYdWYSvoXwQwZbrp6Nh5vEKyZZvU7urSntLr59qyMzWV6LzJueJTdS7wZ",
  "key18": "4wGgvEM2FhgtVdVNx6b83o9nKAmJdmrqbs4vbE41fXJPnfrBM1sQMCo5D2uUvUqoUUVEKfdVUDD5nL4Dm3uuhztY",
  "key19": "4vcRyNsmNX66H5pzj9dFkChsSjQkEvMG3ZKKKcaDPriv6GLiDxLh8DXSv9fcy1GEsq9EWCHafcj1yRYcTPMyHBA2",
  "key20": "yUt8Dxf5CTUzof5r6RjxV2Vsrvbo9DSMc4ZYX2bHrWcMSBaE3JDdhq4ZBC1YxBbH1KKQhYGxNk1T5Sg42yK3yeN",
  "key21": "3FFUWaqkb4AnaWMsTY8MT6zAJBCv8hhbTTbdf5X2JcSeGRjz6HrNupCvMH6VCSMyCn7RHXgUzJqdDKRUA1iNfUQp",
  "key22": "5QH2s5HrPoCFB5Q4qMUWhXZxhZmpv1ap1e5Mnp3skZKEXXosgvKaRqc1D9afVsfAaw4dfa7w1UBgo62w5Q1z8ppM",
  "key23": "3TPhMRttUPLJMVc11n8dbjVP7Df2bHCNha4siD1xpH6JjBV311Nz3TxAKvzmvHbqVZKMNzunzuLmrqGgUu6vyDtL",
  "key24": "26HVho1cqYMEyjH9X8fqu97fjsGb54aQjTep5MpVfoKrBKhY2ruz42eYyGfWkkZeagMnDookhe97afBWSxAxsHnb",
  "key25": "2dKFHe3tRMLkW8bq2sGJ5yD2XACMoBWKDQqrjTG7VQ3i4KsCkp6XE95o1g3e9EATeqxBZYKDrZay3yY1njxviMXs",
  "key26": "3v9fZuiiWRrKVK5ofDP1zNQBctkts6drCb8xAAMgjAbaYFVV4yFBXc792W1SSFRk6izxTfADu3arQf29bzDW4YcE",
  "key27": "7t5Xa7cQhjmBWRhJC5cyCrU4HGZUrwQVJDZ5YRuzQfEejnp7fvZEcy2vQ3qJMgGSCJJ6QYncTjrSgYBATH2oJKV",
  "key28": "5yPNhAuPcCn3uoBy9UWNPc8wxg7cYh2WCp3GDJ5z61g347Qy39X9poas7RyMDpRgbgd69By9X436zY7REwLVSVjn",
  "key29": "3AeTNu7GVsYc4JDQG55m58yUuipycdr9VBU9rEniBcTrQ7HtVYpn4kLHQcJjQPd9hMsQNg1hunPeqesH3GmiMCFi"
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
